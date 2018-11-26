<?php
// ***
// Database
// *

$dbhost = "als.economics.warwick.ac.uk"; // MySQL Database Host Name, (Usually Localhost)
$dbuser = "admin"; // MySQL Database Username
$dbpass = "ttN2tAnhhe8y"; // MySQL Database Password
$dbname = "db-als"; // MySQL Database Name

$connection = mysql_connect($dbhost, $dbuser, $dbpass) or die(mysql_error());
mysql_select_db($dbname, $connection);

// ***
// Globals
// *

$server 		= (isset($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : 'als.economics.warwick.ac.uk'); // The default server is als
$token 			= (isset($_COOKIE['WarwickSSO']) ? $_COOKIE['WarwickSSO'] : '');
$referrer 		= (isset($_SERVER['HTTP_REFERER']) ? filter_var($_SERVER['HTTP_REFERER'].(substr($_SERVER['HTTP_REFERER'], -1) !== '/' ? '/' : ''), FILTER_SANITIZE_STRING) : '/');

// ***
// Fix referrer for area matching
// *

if(startsWith($referrer,"http://sitebuilder.warwick.ac.uk/sitebuilder2/render/previewPage.htm")) { // Change referrer for sitebuilder preview pages
	$referrer = "http://www2.warwick.ac.uk/fac/soc/al/intranet/aldb/als/"; // App home, change if page moved
}
$referrer_explode = parse_url($referrer);
$referrer = $referrer_explode['host'].$referrer_explode['path'].(substr($referrer_explode['path'], -1) !== '/' ? '/' : '');

// ***
// Assign AREA
// *

define("WSOSAPI", ''); // If on a shared server

// Get referrer key from database
if(php_sapi_name() == 'cli' || $_SERVER['PHP_SELF'] == '/cron.php') {
	define("AREA", 0); // THIS MUST ALWAYS BE 0 - bad things will happen if not
} else {
	if($referrer == '/') {
		if(isset($_GET['area'])) {
			$area_id = filter_var($_GET['area'], FILTER_SANITIZE_STRING);
		} else {
			$area_id = 1; // default to economics area for testing
		}
	} else {
		$query = mysql_query("SELECT id FROM area WHERE url = '".$referrer."' LIMIT 1");
		$result = mysql_fetch_array($query);
		if(empty($result)) {
			mysql_insert("area", 
			array(
				'url'			=> '\''.$referrer.'\'',
			)
			, false);
			$area_id = mysql_insert_id();
		} else {
			$area_id = $result['id'];
		}
	}
	define("AREA", $area_id);
	unset($query, $result, $area_id);
}

function mysql_insert($table, $array, $show_error = false) {
	global $connection;
	if(sizeof($array) > 0) {
		$query = "INSERT INTO $table ";
		$field = $entry = "";
		foreach ($array as $key => $value) {
			$field .= "$key, ";
			$entry .= "$value, ";
		}
		$field = substr($field,0,-2);
		$entry = substr($entry,0,-2);
		$query .= "($field) VALUES ($entry)";
		$result = mysql_query($query);
		if (!$result && $show_error == true) die('Invalid query: ' . mysql_error() . '<br />' .$query);
		return mysql_error($connection);
	}
}
function mysql_update($table, $id, $array, $update = 'id', $limit = 'LIMIT 1', $area = AREA)
{
	global $connection;
	if(sizeof($array) > 0) {
		$query = "UPDATE $table SET ";
		$str = '';
		foreach ($array as $key => $value) $str .= "$key = $value, ";
		$query .= substr($str,0,-2);
		$query .= " WHERE $update='$id' AND area_id='".$area."' $limit";
		mysql_query($query);
		return mysql_error($connection);
	}
}
function ssoParse($returnSSOString)
{
	$array = array();
	$pieces = explode("\n", $returnSSOString);
	foreach ($pieces as $line) {
		list($field, $string) = array_pad(explode('=', $line, 2), 2, NULL);
		if(!empty($field)) {
			if($field == 'id') $array[$field] = (int) $string;
			else $array[$field] = $string;
		}
	}
	return $array;
}
function ssoSearch($user) {	
	$curl = curl_init();
	curl_setopt_array($curl, array(
		CURLOPT_RETURNTRANSFER => 1,
		CURLOPT_URL => "https://websignon.warwick.ac.uk/sentry?requestType=4".WSOSAPI."&user=$user"
	));
	$search = curl_exec($curl);
	if($search === false) {
		echo curl_error($curl);	
	} else {
		$user = ssoParse($search);
		if(empty($user['id'])) $user['id'] = 0;	
	}
	curl_close($curl);
	return $user;
}

/** 
 * Strip a string from the end of a string 
 * 
 * @param string $str      the input string 
 * @param string $remove   OPTIONAL string to remove 
 *  
 * @return string the modified string 
  */ 
function rstrtrim($str, $remove=null) 
{ 
    $str    = (string)$str; 
    $remove = (string)$remove;    
    
    if(empty($remove)) 
    { 
        return rtrim($str); 
    } 
    
    $len = strlen($remove); 
    $offset = strlen($str)-$len; 
    while($offset > 0 && $offset == strpos($str, $remove, $offset)) 
    { 
        $str = substr($str, 0, $offset); 
        $offset = strlen($str)-$len; 
    } 
    
    return rtrim($str);    
    
} //End of function rstrtrim($str, $remove=null)

function startsWith($haystack, $needle)
{
    return !strncmp($haystack, $needle, strlen($needle));
}

function endsWith($haystack, $needle)
{
    $length = strlen($needle);
    if ($length == 0) {
        return true;
    }

    return (substr($haystack, -$length) === $needle);
}
?>