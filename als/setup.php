<?php
header('Content-Type: text/javascript; charset=utf8');
header('Access-Control-Allow-Origin: http://www2.warwick.ac.uk/');
header('Access-Control-Max-Age: 3628800');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

require_once('config.php');
require_once('class/userdetails.inc.php');

$userDetails 	= new userDetails();
$myDetails		= $userDetails->getArray();
if(!$myDetails['is_admin'] && !$myDetails['is_supervisor']) exit; // Exit if not an admin
unset($userDetails);

$json = array();
$callback = $add = $edit = $user = '';
if(isset($_GET['callback'])) 	$callback 	= filter_var($_GET['callback'], FILTER_SANITIZE_STRING);
if(isset($_GET['a'])) 			$add 		= filter_var($_GET['a'], FILTER_SANITIZE_STRING);
if(isset($_GET['e'])) 			$edit 		= filter_var($_GET['e'], FILTER_SANITIZE_STRING);
if(isset($_GET['r'])) 			$remove 	= filter_var($_GET['r'], FILTER_SANITIZE_STRING);
if(isset($_GET['u'])) 			$user 		= filter_var($_GET['u'], FILTER_SANITIZE_STRING);

if($add) {
	if(!$myDetails['is_admin']) exit; // Exit if not an admin
	
	$userDetails 	= new userDetails($add);
	$json = ($userDetails->addUser() ? 1 : 0);
} elseif($edit) {
	if(!$myDetails['is_admin']) exit; // Exit if not an admin
	
	$userDetails 	= new userDetails($edit);
	$userInfo		= $userDetails->getArray();
	
	if(!empty($userInfo['user'])) {
		
		$is_booking = $is_admin = $is_supervisor = $unit = $unitNum = $suppNum = $dayHours = 0;

		if(isset($_GET['color'])) 			$color 			= filter_var($_GET['color'], FILTER_SANITIZE_STRING);
		if(isset($_GET['textColor'])) 		$textColor 		= filter_var($_GET['textColor'], FILTER_SANITIZE_STRING);
		if(isset($_GET['is_booking'])) 		$is_booking 	= filter_var($_GET['is_booking'], FILTER_SANITIZE_STRING);
		if(isset($_GET['is_supervisor'])) 	$is_supervisor 	= filter_var($_GET['is_supervisor'], FILTER_SANITIZE_STRING);
		if(isset($_GET['is_admin'])) 		$is_admin 		= filter_var($_GET['is_admin'], FILTER_SANITIZE_STRING);
		if(isset($_GET['unit'])) 			$unit 			= filter_var($_GET['unit'], FILTER_SANITIZE_STRING);
		if(isset($_GET['unitNum'])) 		$unitNum 		= filter_var($_GET['unitNum'], FILTER_SANITIZE_STRING);
		if(isset($_GET['suppNum'])) 		$suppNum 		= filter_var($_GET['suppNum'], FILTER_SANITIZE_STRING);
		if(isset($_GET['dayHours'])) 		$dayHours 		= filter_var($_GET['dayHours'], FILTER_SANITIZE_STRING);
		if(isset($_GET['supervisors'])) 	$supervisors 	= $_GET['supervisors'];
		
		$user_update = array(
			'is_booking' 		=> (empty($is_booking) ? '0' : '1'),
			'is_supervisor' 	=> (empty($is_supervisor) ? '0' : '1'),
			'is_admin' 			=> (empty($is_admin) ? '0' : '1')
		);
		
		if(isset($color)) $user_update = array_merge($user_update, array('color' => '\''.$color.'\''));
		if(isset($textColor)) $user_update = array_merge($user_update, array('textColor' => '\''.$textColor.'\''));
		
		mysql_update("users", $userInfo['user'], $user_update, "user");
		
		if(!empty($is_booking) && !empty($userInfo['user'])) {
			$userLeave = array(
				'user' 			=> '\''.$userInfo['user'].'\'',
				'unit' 			=> '\''.(empty($unit) ? 0 : $unit).'\'',
				'unitNum' 		=> '\''.(empty($unitNum) ? 0 : $unitNum).'\'',
				'suppNum' 		=> '\''.(empty($suppNum) ? 0 : $suppNum).'\'',
				'dayHours' 		=> '\''.(empty($dayHours) ? 0 : $dayHours).'\'',
				'year'			=> '\''.$userDetails->yearDates().'\'',
				'area_id'		=> '\''.AREA.'\''
			);
			
			if(!empty($userInfo['leaveId'])) {
				mysql_update("users_leave", $userInfo['leaveId'], $userLeave);
			} else {
				mysql_insert("users_leave", $userLeave, false);
			}
		}

		// Supervisors
		if(empty($supervisors)) { // Remove all
			mysql_query("DELETE FROM users_supervisors WHERE user = '".$userInfo['user']."' AND area_id = '".AREA."'");
		} else {
			$supervisors_current = array();
			$query = mysql_query("SELECT id, supervisor FROM users_supervisors WHERE user = '".$userInfo['user']."' AND area_id = '".AREA."'");
			while($result = mysql_fetch_array($query,MYSQL_ASSOC)) $supervisors_current[] = $result;
			
			foreach($supervisors as $supervisor) { // Insert
				$supervisor_found = false;
				foreach($supervisors_current as $supervisor_current) if($supervisor == $supervisor_current['supervisor']) $supervisor_found = true;
				
				if($supervisor_found == false) {
					mysql_insert("users_supervisors", array(
						'user' 			=> '\''.$userInfo['user'].'\'',
						'supervisor' 	=> '\''.filter_var($supervisor, FILTER_SANITIZE_STRING).'\'',
						'area_id'		=> '\''.AREA.'\''
					));
				}
			}
			
			foreach($supervisors_current as $supervisor_current) { // Remove
				$supervisor_found = false;
				foreach($supervisors as $supervisor) if($supervisor == $supervisor_current['supervisor']) $supervisor_found = true;

				if($supervisor_found == false) {
					mysql_query("DELETE FROM users_supervisors WHERE id = '".$supervisor_current['id'].'\'');
				}
			}
		}

		$json=$userInfo;
	} else {
		$json = 0;
	}
} elseif($remove) {
	if(!$myDetails['is_admin']) exit; // Exit if not an admin
	
	$userDetails 	= new userDetails($remove);
	$json = $userDetails->removeUser();
} elseif($user) {
	if(!$myDetails['is_admin']) exit; // Exit if not an admin
	
	$userDetails 		= new userDetails($user);
	$json		 		= $userDetails->getArray();
	$json['supervisor']	= $userDetails->getSupervisors();
} else {
	if($myDetails['is_admin']) {
		$query = mysql_query("SELECT user FROM users WHERE active = '1' AND area_id = '".AREA."' ORDER BY email");
	} else {
		$query = mysql_query("SELECT u.user FROM users u INNER JOIN users_supervisors s ON (u.user = s.user) WHERE u.active = '1' AND u.area_id = '".AREA."' AND (u.user = '".$myDetails['user']."' OR (s.supervisor = '".$myDetails['user']."' AND s.area_id = '".AREA."')) ORDER BY u.email");
	}
	while($result = mysql_fetch_array($query,MYSQL_ASSOC)) {		
		$userDetails 	= new userDetails($result['user']);
		if($userDetails->name) {
			$json[] 		= $userDetails->getArray();
		}
	}
}
unset($userDetails);
echo $callback.'('.json_encode($json).');';
?>