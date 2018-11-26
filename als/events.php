<?php
header('Content-Type: text/javascript; charset=utf8');
header('Access-Control-Allow-Origin: http://www2.warwick.ac.uk/');
header('Access-Control-Max-Age: 3628800');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

require_once('config.php');
require_once('class/userdetails.inc.php');

$users 		= array();
$callback 	= '';
$sql_start	= '';
$sql_end	= '';
$sql_dates	= '';

if(isset($_GET['callback'])) $callback = filter_var($_GET['callback'], FILTER_SANITIZE_STRING);
if(isset($_GET['start'])) {
	$start 	= filter_var($_GET['start'], FILTER_SANITIZE_STRING);
	$sql_dates .= "(UNIX_TIMESTAMP(e.start) <= '$start' AND UNIX_TIMESTAMP(e.end) >= '$start')";
}
if(isset($_GET['end'])) {
	$end 	= filter_var($_GET['end'], FILTER_SANITIZE_STRING);
	$sql_dates .= (!empty($sql_dates) ? ' OR ' : '')."(UNIX_TIMESTAMP(e.start) <= '$end' AND UNIX_TIMESTAMP(e.end) >= '$end')";
}
if(isset($_GET['start']) && isset($_GET['end'])) {
	$sql_dates = $sql_dates.' OR (UNIX_TIMESTAMP(e.start) >= \''.$start.'\' AND UNIX_TIMESTAMP(e.end) <= \''.$end.'\')';
}
$sql_dates = ' AND ('.$sql_dates.')';

// ***
// Current user details
// *

$userDetails 	= new userDetails();
$supervisees 	= array();
if($userDetails->localDetails() == true && $userDetails->is_supervisor == true) $supervisees	= $userDetails->getSupervisees();

// ***
// Events
// *

$events = array();
$query = mysql_query("SELECT
		e.id,
		e.user,
		e.auth,
		e.start,
		e.end,
	e.allDay,
	u.color,
	u.textColor
	FROM
		events AS e
	INNER JOIN
		users AS u
	ON
		e.user = u.user
	AND e.area_id = u.area_id
	WHERE
		u.active = 1
	AND (
			e.area_id = '".AREA."'
		OR  e.area_id = '0') ".$sql_dates);
while($result = mysql_fetch_array($query,MYSQL_ASSOC)) $events[] = $result;

$now = new DateTime();
foreach($events as $e_key => $event) {
	
	$start = new DateTime($event['start']);
	$end = new DateTime($event['end']);

	// Title
	if($event['user'] == 'statutory' || $event['user'] == 'customary') {
		$events[$e_key]['title'] = ucfirst($event['user']).' Day';
	} elseif($event['user'] == 'bank-holiday') {
		$events[$e_key]['title'] = ucwords(str_replace('-',' ',$event['user']));
	} else {
		if(!array_key_exists($event['user'], $users)) {
			 $ssoSearch = ssoSearch($event['user']);
			 $users[$event['user']]['title'] = $ssoSearch['name'];
		}
		$events[$e_key]['title'] = $users[$event['user']]['title'];
	}
	
	// Editable
	if($event['user'] == $userDetails->user) {
		// If the event occured in the past do not allow edits
		if($end->getTimestamp() < $now->getTimestamp()) {
			$events[$e_key]['editable'] = 0; 
		} else {
			$events[$e_key]['editable'] = 1; 
		}
	} else {
		$events[$e_key]['editable'] = 0;
	}
	
	// Deletable? User
	if($event['user'] == $userDetails->user) {
		if($start->getTimestamp() > $now->getTimestamp() || $event['auth'] == 0) {  // Do not allow historic events to be deleted by the user.
			$events[$e_key]['className'][] = 'deletable';
		}		
	}

	// Deletable? Supervisor
	foreach($supervisees as $supervisee) {
		if($event['user'] == $supervisee) {
			$events[$e_key]['className'][] = 'deletable';
			break;
		}
	}
	
	// Deletable? Administrator
	if($event['user'] != 'statutory' && $event['user'] != 'customary' && $event['user'] != 'bank-holiday') {
		if($userDetails->is_admin == true) $events[$e_key]['className'][] = 'deletable';
	}

	// Custom Classes
	if($event['user'] == 'statutory') $events[$e_key]['className'][] = 'statutory';
	if($event['user'] == 'customary') $events[$e_key]['className'][] = 'customary';
	if($event['user'] == 'bank-holiday') $events[$e_key]['className'][] = 'bank-holiday';
		
	// Authorised
	if($event['auth'] == 0) $events[$e_key]['className'][] = 'unauthorised';
	
	// AllDay fix
	if($event['allDay'] == 1) $events[$e_key]['allDay'] = true;
	if($event['allDay'] == 0) $events[$e_key]['allDay'] = false;
	
}

// ***
// Date Restrictions
// *

$restrictions = array();
$query = mysql_query("SELECT e.id, UNIX_TIMESTAMP(e.start) AS start, UNIX_TIMESTAMP(e.end) AS end FROM restrictions AS e WHERE (e.area_id = '".AREA."' OR e.area_id = '0') ".$sql_dates);
while($result = mysql_fetch_array($query,MYSQL_ASSOC)) $restrictions[] = $result;

echo $callback.'('.json_encode(array('events' => $events, 'restrictions' => $restrictions)).');';
?>