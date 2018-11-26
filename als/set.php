<?php
header('Content-Type: text/javascript; charset=utf8');
header('Access-Control-Allow-Origin: http://www2.warwick.ac.uk/');
header('Access-Control-Max-Age: 3628800');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

require_once('config.php');
require_once('class/userdetails.inc.php');

$callback = $id = $start = $end = $delete = '';
$allDay 	= NULL;
$time 		= time();
if(isset($_GET['callback'])) 	$callback 	= filter_var($_GET['callback'], FILTER_SANITIZE_STRING);
if(isset($_GET['id'])) 			$id 		= filter_var($_GET['id'], FILTER_SANITIZE_STRING);
if(isset($_GET['bookAs'])) 		$bookAs 	= filter_var($_GET['bookAs'], FILTER_SANITIZE_STRING);
if(isset($_GET['start'])) 		$start 		= filter_var($_GET['start'], FILTER_SANITIZE_STRING);
if(isset($_GET['end'])) 		$end 		= filter_var($_GET['end'], FILTER_SANITIZE_STRING);
if(isset($_GET['allDay'])) 		$allDay		= filter_var($_GET['allDay'], FILTER_SANITIZE_STRING);
if(isset($_GET['remove'])) 		$delete		= filter_var($_GET['remove'], FILTER_SANITIZE_STRING);

// ***
// Current user details
// *

$userDetails = new userDetails();
$user = $userDetails->user;
$name = $userDetails->name;
$userDetailsArray = $userDetails->getArray();

// ***
// Check bookAs has rights from supervisees
// *

$bookAsSuccess = false;
if(isset($bookAs) && $bookAs != $user) { // If bookAs is me don't do this! Otherwise my own holidays will automatically be authorised
	if($userDetailsArray['is_admin']) {
		$check_exists = new userDetails($bookAs);
		if($check_exists->localDetails()) {
			if($check_exists->is_booking) {
				$user = $check_exists->user;
				$name = $check_exists->name;
				$userDetailsArray = $check_exists->getArray();
				$bookAsSuccess = true;
			}
		}
	} elseif($userDetailsArray['is_supervisor']) {
		$getSupervisees = $userDetails->getSupervisees();
		foreach($getSupervisees as $getSupervisee) {
			if($bookAs == $getSupervisee) {
				$check_exists = new userDetails($bookAs);
				if($check_exists->localDetails()) {
					if($check_exists->is_booking) {
						$user = $check_exists->user;
						$name = $check_exists->name;
						$userDetailsArray = $check_exists->getArray();
						$bookAsSuccess = true;
					}
				}
				break;
			}
		}
	}
	if($bookAsSuccess == false) exit('Failed to book as '.$bookAs);
}

// ***
// Delete
// *

if(!empty($id) && $delete == true) {
	$delete_query = mysql_query("SELECT user, auth, UNIX_TIMESTAMP(start) AS start FROM events WHERE id = '$id' AND area_id = '".AREA."' LIMIT 1");
	$delete_result = mysql_fetch_array($delete_query,MYSQL_ASSOC);

	if(($delete_result['start'] > $time || $delete_result['auth'] == 0 || $bookAsSuccess == true) && $delete_result['user'] == $user) {  // Do not allow historic events to be deleted by the user.	
		mysql_query("DELETE FROM events WHERE id = '$id' AND area_id = '".AREA."' LIMIT 1");	
		echo $callback.'('.json_encode(1).');';
	} else {
		echo $callback.'('.json_encode(2).');';
	}
	exit();
}

// ***
// Set operation
// *

if(!empty($start)) {
	
	$dates 	= array();
	$dates_n = 0;
	
	// ***
	// Adjust end date for all day events
	// *
	
	if($allDay == 'true') {
		$end = mktime(23, 59, 59, date('m', $end), date('j', $end), date('Y', $end));
	}
	
	// ***
	// Check the start and end dates
	// *
	
	if($userDetailsArray['weekend'] == false) {
		if(date('N',$start) == 6 || date('N',$start) == 7) { // Move start time
			$start_set = false;
			while($start_set == false) {
				$start = mktime(0, 0, 0, date('m', $start), date('j', $start) + 1, date('Y', $start));
				if(date('N',$start) != 6 && date('N',$start) != 7) $start_set = true;
			}
		}
		if(date('N',$end) == 6 || date('N',$end) == 7) { // Move end time
			$end_set = false;
			while($end_set == false) {
				$end = mktime(23, 59, 59, date('m', $end), date('j', $end) - 1, date('Y', $end));
				if(date('N',$end) != 6 && date('N',$end) != 7) $end_set = true;
			}
		}
	}

	if($start < $end) { // Don't do anything if dates fail (end before start)
	
		// ***
		// Check sufficient days available
		// *
		
		$leave = 0;
		
		if($allDay == 'true') {
			if($userDetailsArray['unit'] == 0) { // Days
				$unitDay = 1;
			} else { // Hours
				$unitDay = $userDetailsArray['dayHours'];
			}
		
			$dates[$dates_n]['start'] = $start;
			while($start < $end) {
				if($userDetailsArray['weekend'] == true) {
					$leave += $unitDay;
				} else {
					if(date('N',$start) != 6 && date('N',$start) != 7) $leave += $unitDay;
					if(date('N',$start) == 5) { // Stop on a friday
						$dates[$dates_n]['end'] = mktime(23, 59, 59, date('m', $start), date('j', $start), date('Y', $start));
						$dates[$dates_n]['leave'] = $leave;
						$dates_n++;
						$leave = 0;
					}
					if(date('N',$start) == 1 && !isset($dates[$dates_n])) {
						$dates[$dates_n]['start'] = $start;
					}
				}
				$start += 86400;
			}
			$dates[$dates_n]['end'] = $end;
			$dates[$dates_n]['leave'] = $leave;
		} else {
			if($userDetailsArray['unit'] == 0) {  // Half Days
				if((date('N',$start) != 6 && date('N',$start) != 7 && $userDetailsArray['weekend'] == false) || $userDetailsArray['weekend'] == true) {
					if(date('H', $start) < 12 || (date('H', $start) == 12 && date('i', $start) < 30)) { // AM
						$dates[$dates_n] = array(
							'start'	=> mktime(0, 0, 0, date('m', $start), date('j', $start), date('Y', $start)),
							'end'	=> mktime(12, 30, 0, date('m', $end), date('j', $end), date('Y', $end)),
							'leave' => 0.5
						);
					} else { // PM
						$dates[$dates_n] = array(
							'start'	=> mktime(12, 30, 0, date('m', $start), date('j', $start), date('Y', $start)),
							'end'	=> mktime(23, 59, 59, date('m', $end), date('j', $end), date('Y', $end)),
							'leave' => 0.5
						);
					}
				}
			} else { // Hours
				if((date('N',$start) != 6 && date('N',$start) != 7 && $userDetailsArray['weekend'] == false) || $userDetailsArray['weekend'] == true) {
					$dates[$dates_n]['start'] = $start;
					if($end - $start > ($userDetailsArray['dayHours'] * 60 * 60)) { // If the hours booked are more than the maximum for a day default to the maximum
						$dates[$dates_n]['end'] = $start + ($userDetailsArray['dayHours'] * 60 * 60);
						$dates[$dates_n]['leave'] = $userDetailsArray['dayHours'];
					} else {
						while($start < $end) {
							$leave += 0.5;
							$start += 1800;
						}
						$dates[$dates_n]['end'] = $end;
						$dates[$dates_n]['leave'] = $leave;
					}
				}
			}			
		}
		
		// ***
		// Enough Leave?
		// *
		
		$leave = 0;
		$leave_max = false;
		foreach($dates as $date_key => $date) {
			if($leave_max == true) {
				unset($dates[$date_key]); // Remove subsequent leave as there is not enough for the first booking
				$json = 1; // Make sure the script lets the booker know their leave has been truncated		
			} else {
				$leave += $date['leave'];
				if($userDetailsArray['unitRem'] <= $leave) $leave_max = true;
			}
		}
		
		if($userDetailsArray['unitRem'] < $leave) { // Reduced the end date to accomadate leave as just cutting future booking dates wasnt enough!
		
			$json = 1;
			$leave_remove = $leave - $userDetailsArray['unitRem'];
		
			// Work on the last element (as prior code removes anything after)
			end($dates);
			$date_key = key($dates);

			if($allDay == 'true') { // All day booking
				if($userDetailsArray['unit'] == 0) { // Days
					$unitDay = 1;
				} else { // Hours
					$unitDay = $userDetailsArray['dayHours'];
				}

				while($leave_remove > 0) {
					$dates[$date_key]['end'] -= 86400;
					$dates[$date_key]['leave'] -= $unitDay;
					$leave_remove -= $unitDay;
				}
				if($dates[$date_key]['start'] > $dates[$date_key]['end']) unset($dates[$date_key]);
			} else { // Part day booking
				unset($dates[$date_key]); // Do not truncate part day bookings, just fail
			}
		}
		
		// ***
		// Adjacent events - merge the records
		// *
		

		if($userDetailsArray['unitRem'] >= 0) { // Days
			if($allDay == 'true') { // All day booking
				foreach($dates as $date_key => $date) {
					$tmp_end_ts = mktime(23, 59, 59, date('m', $date['start']), date('j', $date['start']), date('Y', $date['start']));
					$tmp_start_ts = mktime(0, 0, 0, date('m', $date['end']), date('j', $date['end']), date('Y', $date['end']));
					$prev_end = strtotime('-1 day', $tmp_end_ts);
					$next_start = strtotime('+1 day', $tmp_start_ts);
					
					$events = array();
					$events_query = mysql_query("SELECT id, UNIX_TIMESTAMP(start) AS start, UNIX_TIMESTAMP(end) AS end FROM events WHERE user = '".$user."' AND area_id = '".AREA."' AND allDay = 1 AND (UNIX_TIMESTAMP(end) = '".$prev_end."' OR UNIX_TIMESTAMP(start) = '".$next_start."')");
					while($events_result = mysql_fetch_array($events_query,MYSQL_ASSOC)) $events[] = $events_result;

					$comp_end = $prev_end;
					$comp_start = $next_start;
					$dates[$date_key]['id'] = merge_events($user, $events, $prev_end, $next_start);
					if($comp_end != $prev_end) $dates[$date_key]['start'] = $prev_end;
					if($comp_start != $next_start) $dates[$date_key]['end'] = $next_start;
				}
				
			} else { // Part day booking

				foreach($dates as $date_key => $date) {
					$events = array();
					$events_query = mysql_query("SELECT id, UNIX_TIMESTAMP(start) AS start, UNIX_TIMESTAMP(end) AS end FROM events WHERE user = '".$user."' AND area_id = '".AREA."' AND allDay = 0 AND (UNIX_TIMESTAMP(end) = '".$date['start']."' OR UNIX_TIMESTAMP(start) = '".$date['end']."')");
					while($events_result = mysql_fetch_array($events_query,MYSQL_ASSOC)) $events[] = $events_result;
					$dates[$date_key]['id'] = merge_events($user, $events, $dates[$date_key]['start'], $dates[$date_key]['end']);
					if(!empty($dates[$date_key]['id'])) $allDay = 'true';
				}
				
			}
		
		} else { // Hours
			
		}

	}
	
	if(empty($dates)) {
		$json = 2;
	} else {
		if(!isset($json)) $json = 0;
		
		foreach($dates as $date) {
			$sql = array(
				'user' 		=> '\''.$user.'\'',
				'start' 	=> 'FROM_UNIXTIME('.$date['start'].')',
				'end' 		=> 'FROM_UNIXTIME('.$date['end'].')',
				'modified'	=> 'NOW()',
				'area_id'	=> AREA
			);
			if($allDay == 'true') $sql['allDay'] = $allDay;
			if($bookAsSuccess == true) $sql['auth'] = 1; // If supervisor or admin automatically authorise
			if(!empty($date['id'])) if($bookAsSuccess == false) $sql['auth'] = 0; // If the event is moved it is no longer authorised
			
			if(empty($date['id'])) {
				mysql_insert("events", $sql, false);
			} else {
				mysql_update("events", $date['id'], $sql);
			}
			
			$query = mysql_query("SELECT message FROM restrictions AS e WHERE (e.area_id = '".AREA."' OR e.area_id = '0') AND ((UNIX_TIMESTAMP(e.start) <= '".$date['start']."' AND UNIX_TIMESTAMP(e.end) >= '".$date['start']."') OR (UNIX_TIMESTAMP(e.start) <= '".$date['end']."' AND UNIX_TIMESTAMP(e.end) >= '".$date['end']."') OR (UNIX_TIMESTAMP(e.start) >= '".$date['start']."' AND UNIX_TIMESTAMP(e.end) <= '".$date['end']."')) LIMIT 1");
			$result = mysql_fetch_array($query,MYSQL_ASSOC);
			if(!empty($result)) $json = $result['message'];
		}	
	}

	echo $callback.'('.json_encode($json).');';
	exit;
}

function merge_events($user, $events, &$start, &$end) {
	$id = false;
	
	if(sizeof($events) == 2) { // In the middle of 2 events!
		foreach($events as $event) {
			if($event['end'] == $start) {
				$start = $event['start'];
			} elseif($event['start'] == $end) {
				$end = $event['end'];
			}
		}
		
		// Get ID of first item
		reset($events);
		$first_item = current($events);
		$id = $first_item['id'];
		
		// Get the last key and remove
		$last_item = end($events);
		mysql_query("DELETE FROM events WHERE id = '".$last_item['id']."' LIMIT 1");
	} elseif(sizeof($events) == 1) {
		if($events[0]['end'] == $start) { // Previous day
			$start = $events[0]['start'];
			$id = $events[0]['id'];
		} elseif($events[0]['start'] == $end) { // Next day
			$end = $events[0]['end'];
			$id = $events[0]['id'];
		}
	}
	return $id;
}

?>