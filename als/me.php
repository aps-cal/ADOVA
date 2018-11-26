<?php
header('Content-Type: text/javascript; charset=utf8');
header('Access-Control-Allow-Origin: http://www2.warwick.ac.uk/');
header('Access-Control-Max-Age: 3628800');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

require_once('config.php');
require_once('class/userdetails.inc.php');

$json = array();
$callback = '';
if(isset($_GET['callback'])) $callback = filter_var($_GET['callback'], FILTER_SANITIZE_STRING);

// ***
// Current user details
// *

$userDetails 	= new userDetails();
$localDetails 	= $userDetails->getArray();

if($userDetails->is_admin == true) {
	$user_query = mysql_query("SELECT user FROM users WHERE user != '".$userDetails->user."' AND is_booking = true AND area_id = '".AREA."'");
	while($user_result = mysql_fetch_array($user_query,MYSQL_ASSOC)) {
		$adminDetails = new userDetails($user_result['user']);
		$localDetails['bookAs'][] = array(
			'user'	=> $user_result['user'],
			'name'	=> $adminDetails->name
		);	
	}
}elseif($userDetails->is_supervisor == true) {
	// Get supervisees
	$getSupervisees	= $userDetails->getSupervisees();
	foreach($getSupervisees as $getSupervisee) {
		$superviseeDetails 	= new userDetails($getSupervisee);
		if($superviseeDetails->name) {
			$localDetails['bookAs'][] = array(
				'user'	=> $getSupervisee,
				'name'	=> $superviseeDetails->name
			);
		}
	}
}

// Get authorisable holidays
$localDetails['authorise']	= $userDetails->getAuthorise();
echo $callback.'('.json_encode($localDetails).');';
?>