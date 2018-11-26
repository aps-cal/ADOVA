<?php
require_once('config.php');
require_once('class/iCalcreator.class.php');

error_reporting(E_ALL);
ini_set('display_errors', True);

// Contact supervisors for unauthorised

// Get unauthorised events
$unauthed = array();
$prevFiveMinutes = time() - 300;
$todayStart = mktime(0, 0, 0, date('n'), date('j'));

// If a new annual leave entry was added over 5 minutes ago or we've just rolled into a new day
$query = mysql_query("SELECT
							id,
							user,
							area_id,
							UNIX_TIMESTAMP(start) AS start,
							UNIX_TIMESTAMP(end) AS end,
							allDay,
							UNIX_TIMESTAMP(modified) AS modified
						FROM
							events
						WHERE
							USER != 'statutory'
						AND USER != 'customary'
						AND USER != 'bank-holiday'
						AND auth = false
						AND UNIX_TIMESTAMP(modified) < '$prevFiveMinutes'
						AND (
								auth_request IS NULL
							OR  UNIX_TIMESTAMP(auth_request) < '$todayStart')");
while($result = mysql_fetch_array($query,MYSQL_ASSOC)) $unauthed[] = $result;

if(!empty($unauthed)) {

	// Get areas
	$area_ids = array();
	foreach($unauthed as $a) $area_ids[] = $a['area_id'];
	$area_ids = array_unique($area_ids);
	$area_sql = '';
	foreach($area_ids as $id) $area_sql .= "id = '".$id."' OR ";
	$area_sql = rstrtrim($area_sql, 'OR ');
	$areas = array();
	$query = mysql_query("SELECT id, url FROM area WHERE $area_sql");
	while($result = mysql_fetch_array($query,MYSQL_ASSOC)) $areas[$result['id']] = $result['url'];
	unset($area_sql);
	
	// Get bad dates
	$restrictions = array();
	$unauthed_first_start = NULL;
	$unearthed_last_end = NULL;
	foreach($unauthed as $a) {
		if($unauthed_first_start == NULL || $a['start'] < $unauthed_first_start) $unauthed_first_start = $a['start'];
		if($unearthed_last_end == NULL || $a['end'] > $unearthed_last_end) $unearthed_last_end = $a['end'];
	}
	$area_sql = '';
	foreach($area_ids as $id) $area_sql .= "area_id = '".$id."' OR ";
	$area_sql = rstrtrim($area_sql, 'OR ');
	$query = mysql_query("SELECT
			UNIX_TIMESTAMP(start) AS start,
			UNIX_TIMESTAMP(end) AS end,
			area_id
		FROM
			restrictions
		WHERE
			UNIX_TIMESTAMP(end) > '$unauthed_first_start'
		AND UNIX_TIMESTAMP(start) < '$unearthed_last_end'
		AND ($area_sql)");
	while($result = mysql_fetch_array($query,MYSQL_ASSOC)) $restrictions[$result['area_id']][] = array('start' => $result['start'],'end' => $result['end']);
	unset($area_sql);
	
	// Remove $unauthed with bad areas
	$bad_areas = array();
	foreach($areas as $area_id => $area) if(startsWith($area, 'http://sitebuilder.warwick.ac.uk/sitebuilder2/render/previewPage.htm')) $bad_areas[] = $area_id;

	// Remove bad area requests from unauthed leave
	if(!empty($bad_areas)) {
		foreach($unauthed as $unauthed_key => $a) {
			if(in_array($a['area_id'], $bad_areas)) unset($unauthed[$unauthed_key]);
		}
	}
	
	// Get Administrators
	$area_ids = array();
	foreach($unauthed as $a) $area_ids[] = $a['area_id'];
	$area_ids = array_unique($area_ids);
	$area_sql = '';
	foreach($area_ids as $id) $area_sql .= "area_id = '".$id."' OR ";
	$area_sql = rstrtrim($area_sql, 'OR ');
	$administrators = array();
	$query = mysql_query("SELECT user, email, area_id FROM users WHERE is_admin = 1 AND ($area_sql)");
	while($result = mysql_fetch_array($query,MYSQL_ASSOC)) $administrators[$result['area_id']][] = $result;
	unset($area_ids, $area_sql, $a);
	
	// Get Contacts
	$contact = array();
	foreach($unauthed as $a) {
		if(!isset($contact[$a['area_id']][$a['user']])) {
			$query = mysql_query("SELECT DISTINCT us.supervisor, u.email FROM users_supervisors us INNER JOIN users u ON us.supervisor = u.user WHERE us.user = '".$a['user']."' AND us.area_id = '".$a['area_id']."'");

			$supervisor_result = false;
			while($result = mysql_fetch_array($query,MYSQL_ASSOC)) {
				if(!isset($contact[$a['area_id']][$result['supervisor']])) $contact[$a['area_id']][$result['supervisor']]['email'] = $result['email'];
				$contact[$a['area_id']][$result['supervisor']]['leave'][] = $a;
				$supervisor_result = true;
			}
			
			// If no supervisor is found, look at the area admins
			if($supervisor_result == false) {
				foreach($administrators[$a['area_id']] as $administrator) {
					if($administrator['user'] != $a['user']) { // Don't send an email to yourself
						if(!isset($contact[$a['area_id']][$administrator['user']])) $contact[$a['area_id']][$administrator['user']]['email'] = $administrator['email'];
						$contact[$a['area_id']][$administrator['user']]['leave'][] = $a;	
					}
				}
			}
		}
	}
	unset($unauthed);

	// Send Emails
	$email = array();
	foreach($contact as $contact_area => $contact_area_supervisors) {
		$url = $areas[$contact_area];
		foreach($contact_area_supervisors as $contact_area_supervisor_username => $contact_area_supervisor) {
			$message_leave = '';
			foreach($contact_area_supervisor['leave'] as $contact_area_supervisor_leave) {
				
				// Get user information
				$supervisee_leave = ssoSearch($contact_area_supervisor_leave['user']);
				
				// Restricted date check
				$restricted = false;
				if(isset($restrictions[$contact_area])) foreach($restrictions[$contact_area] as $restriction) {
					
					// Start date in restriction
					if($contact_area_supervisor_leave['start'] >= $restriction['start']
					&& $contact_area_supervisor_leave['start'] <= $restriction['end']) $restricted = true;
					
					// End date in restriction
					if($contact_area_supervisor_leave['end'] >= $restriction['start']
					&& $contact_area_supervisor_leave['end'] <= $restriction['end']) $restricted = true;
					
					// Restriction occurs within booking
					if($contact_area_supervisor_leave['start'] < $restriction['start']
					&& $contact_area_supervisor_leave['end'] > $restriction['end']) $restricted = true;
				
				}

				// Summary 
				if($contact_area_supervisor_leave['allDay'] == 1) {
					if(date('l jS M Y',$contact_area_supervisor_leave['start']) == date('l jS M Y',$contact_area_supervisor_leave['end'])) {
						$message_leave .= ($restricted == true ? '(WARNING) ' : '').$supervisee_leave['name'].' requested leave on '.date('l jS M Y',$contact_area_supervisor_leave['start']).($restricted == true ? '*' : '')."\r\n";
					} else {						
						$message_leave .= ($restricted == true ? '(WARNING) ' : '').$supervisee_leave['name'].' requested leave from '.date('l jS M Y',$contact_area_supervisor_leave['start']).' to '.date('l jS M Y',$contact_area_supervisor_leave['end']).($restricted == true ? '*' : '')."\r\n";
					}
				} else {
					$message_leave .= ($restricted == true ? '(WARNING) ' : '').$supervisee_leave['name'].' requested leave from '.date('l jS M Y g:ia',$contact_area_supervisor_leave['start']).' to '.date('l jS M Y g:ia',$contact_area_supervisor_leave['end']).($restricted == true ? '*' : '')."\r\n";
				}

				mysql_update('events', $contact_area_supervisor_leave['id'], array('auth_request' => 'NOW()'), 'id', 'LIMIT 1', $contact_area_supervisor_leave['area_id']);
			}

			$subject = 'Annual Leave System - Leave Authorisation Required';
			$message = "Annual leave has been requested by one or more of your supervisee's and currently awaits approval. A summary of the requests is shown below:\r\n\r\n".$message_leave."\r\n".($restricted == true ? "* Restricted date - Annual leave should not be approved during busy periods. If you believe there might be exceptional circumstances, could you please speak to Rachael before giving approval\r\n\r\n" : '')."Please visit the following site to confirm any requested holidays:\r\n\r\nhttp://".$areas[$contact_area]."\r\n\r\nThis is an automatic email generated by the Annual Leave System";
			$headers = 'From: noreply@warwick.ac.uk' . "\r\n" .
				'Reply-To: noreply@warwick.ac.uk' . "\r\n" .
				'X-Mailer: PHP/' . phpversion();
			mail($contact_area_supervisor['email'], $subject, $message, $headers);	
		}		
	}
}

// Update Customary and Statutory days
if((date('F') == '0' && (intval(date('i')) >= 0 || intval(date('i')) <= 5)) || isset($_GET['forceUpdate'])) {
	$query = mysql_query("SELECT id, color, textColor FROM users WHERE user = 'statutory' LIMIT 1");
	$result = mysql_fetch_array($query,MYSQL_ASSOC);
	if(empty($result)) {
		require_once('class/getcolor.inc.php');
		$getColor = new getColor('statutory');
		mysql_insert("users", 
		array(
			'id' 			=> '\'-1\'',
			'user' 			=> '\'statutory\'',
			'color'			=> '\''.$getColor->color().'\'',
			'textColor'		=> '\''.$getColor->textColor().'\'',
			'area_id'		=> 0
		)
		, false);
	}
	
	$query = mysql_query("SELECT id, color, textColor FROM users WHERE user = 'customary' LIMIT 1");
	$result = mysql_fetch_array($query,MYSQL_ASSOC);
	if(empty($result)) {
		require_once('class/getcolor.inc.php');
		$getColor = new getColor('customary');
		mysql_insert("users", 
		array(
			'id' 			=> '\'-2\'',
			'user' 			=> '\'customary\'',
			'color'			=> '\''.$getColor->color().'\'',
			'textColor'		=> '\''.$getColor->textColor().'\'',
			'area_id'		=> 0
		)
		, false);
	}
	
	// ***
	// Current year dates
	// Get 2 years ahead
	// *
	
	$fyCalc = date('Y');
	if(date('n') >= 10) { // 1st Oct rollover
		$start 	= mktime(0,0,0,10,1,$fyCalc);
		$end	= mktime(0,0,0,10,1,$fyCalc + 2);
	} else {
		$start 	= mktime(0,0,0,10,1,$fyCalc - 1);
		$end	= mktime(0,0,0,10,1,$fyCalc + 1);
	}
	
	// ***
	// Get local events
	// *
	
	$events = array();
	$query = mysql_query("SELECT id, user, auth, UNIX_TIMESTAMP(start) AS start, UNIX_TIMESTAMP(end) AS end, allDay FROM events WHERE (user = 'statutory' OR user = 'customary') AND UNIX_TIMESTAMP(start) > '$start' AND UNIX_TIMESTAMP(end) < '$end' AND area_id = '0'");
	while($result = mysql_fetch_array($query,MYSQL_ASSOC)) $events[] = $result;
	
	// ***
	// Get University of Warwick Holiday iCal feed
	// *
	/*
	$v = new vcalendar();
	$v->setConfig("url", "http://www2.warwick.ac.uk/sitebuilder2/api/sitebuilder.ics?page=/insite/holidaydates/calendar/&includeAllEvents=true");
	$v->parse();
	
	$eventArray = $v->selectComponents(date('Y',$start), date('m',$start), date('d',$start), date('Y',$end), date('m',$end), date('d',$end), "vevent", true);
	if(isset($eventArray)) foreach($eventArray as $year => $vevent) {
		$dtstart    = $vevent->getProperty("dtstart");
		$duration   = $vevent->getProperty("duration");
		$summary	= $vevent->getProperty("summary");
		$user		= '';
		
		if(strpos(strtolower($summary),'statutory') !== false) $user = 'statutory';
		if(strpos(strtolower($summary),'customary') !== false) $user = 'customary';

		$day_start 	= mktime(0, 0, 0, $dtstart['month'], $dtstart['day'], $dtstart['year']);
		$day_end 	= mktime(23, 59, 59, $dtstart['month'], $dtstart['day'], $dtstart['year']);
		
		$match = false;
			
		if($duration['day'] == 1 && !empty($user)) {
			foreach($events as $e_key => $event) {			
				if(date('Y',$event['start']) == $dtstart['year']
					&& date('n',$event['start']) == $dtstart['month']
					&& date('j',$event['start']) == $dtstart['day']
					&& $event['allDay'] == 1) {
					
					 if($event['user'] == $user) {
						$match = true;
						unset($events[$e_key]);
					}
					
				}
			}

			if($match == false) {
				// Inset new record
				$sql = array(
					'user' 		=> '\''.$user.'\'',
					'start' 	=> 'FROM_UNIXTIME('.$day_start.')',
					'end' 		=> 'FROM_UNIXTIME('.$day_end.')',
					'modified'	=> 'NOW()',
					'allDay'	=> 1,
					'auth'		=> 1,
					'area_id'	=> 0
				);
				mysql_insert("events", $sql, true);
			} else {
				foreach($events as $e_key => $event) {	
					mysql_query("DELETE FROM events WHERE id = '$e_key' AND area_id = '0' LIMIT 1"); // No match, remove	
				}
			}
		}
	}
	unset($v);
	unset($events);
	*/
	// ***
	// Get local bank holidays
	// *
	
	$events = array();
	$query = mysql_query("SELECT id, user, auth, UNIX_TIMESTAMP(start) AS start, UNIX_TIMESTAMP(end) AS end, allDay FROM events WHERE user = 'bank-holiday' AND UNIX_TIMESTAMP(start) > '$start' AND UNIX_TIMESTAMP(end) < '$end' AND area_id = '0'");
	while($result = mysql_fetch_array($query,MYSQL_ASSOC)) $events[] = $result;
	
	// ***
	// Get Bank Holidays from Gov.uk iCal feed
	// *
	
	$v = new vcalendar();
	$v->setConfig("url", "https://www.gov.uk/bank-holidays/england-and-wales.ics");
	$v->parse();
	
	$eventArray = $v->selectComponents(date('Y',$start), date('m',$start), date('d',$start), date('Y',$end), date('m',$end), date('d',$end), "vevent", true);	
	if(isset($eventArray)) foreach($eventArray as $year => $vevent) {
		$dtstart    = $vevent->getProperty("dtstart");
		$summary	= $vevent->getProperty("summary");
			
		$day_start 	= mktime(0, 0, 0, $dtstart['month'], $dtstart['day'], $dtstart['year']);
		$day_end 	= mktime(23, 59, 59, $dtstart['month'], $dtstart['day'], $dtstart['year']);
		
		$match = false;
			
		foreach($events as $e_key => $event) {			
			if(date('Y',$event['start']) == $dtstart['year']
				&& date('n',$event['start']) == $dtstart['month']
				&& date('j',$event['start']) == $dtstart['day']) {
					$match = true;
					unset($events[$e_key]); // Match
			}
		}
		
		if($match == false) {
			// Inset new record
			$sql = array(
				'user' 		=> '\'bank-holiday\'',
				'start' 	=> 'FROM_UNIXTIME('.$day_start.')',
				'end' 		=> 'FROM_UNIXTIME('.$day_end.')',
				'modified'	=> 'NOW()',
				'allDay'	=> 1,
				'auth'		=> 1,
				'area_id'	=> 0
			);
			mysql_insert("events", $sql, true);
		}
	}
	unset($v);
	unset($events);
}
?>