<?php
 
// ***
// Testing Server Errors
// *
 
if($_SERVER['SERVER_NAME'] == 'mydeptdev.warwick.ac.uk') { // Testing Server
    error_reporting(E_ALL);
    ini_set('display_errors', True);
}
 
// ***
// Set file locations
// *
 
define("ROOT", $_SERVER["DOCUMENT_ROOT"]);
// Add to Virtualhost (change dev to html for live) - php_admin_value include_path ".:/usr/share/pear:/usr/share/php:/var/www/dev"
 
require_once('lib/class/db.inc.php');
require_once('lib/class/department.inc.php');
require_once('lib/function.php');
require_once('lib/class/search.inc.php');
require_once('lib/class/warwick_sso.inc.php');
require_once('lib/warwickads.php');
require_once('lib/class/privilege.inc.php');
require_once('lib/class/webgroups.inc.php');
require_once('lib/class/date.inc.php');
require_once('lib/class/template.inc.php');
 
// ***
// Database
// *
 
$connection = new connection($_SERVER['SERVER_NAME']);
$connection->mysql__connect();
$connection->pdo__connect();
$connection->oracle__connect();
 
// ***
// Department Specific Information
// *
 
$department = new department($connection->department, $connection->sub_department);
 
// ***
// Retrieve SSO data
// *
 
if(!isset($sso_protected) || $sso_protected !== false) $sso_protected = true;
$warwick_sso = new warwick_sso($sso_protected);
 
$user_array = array();
if(isset($warwick_sso->user['id'])) {
 
                // ***
                // Create User Information
                // *
 
                $warwick_sso_search = new search($warwick_sso->user['id'], 'user', false, false);
                $user_array = $warwick_sso_search->raw_data['user'][$warwick_sso->user['id']];
    if(isset($user_array['id'])) define('SSO_ID', $user_array['id']);
    if(isset($user_array['user'])) define('SSO_USER', $user_array['user']);
 
                // ***
                // Retrieve Privileges
                // *
 
                $privilege = new privilege($user_array['id'], $user_array['user']);
                $webgroups = new webgroups(); // New way of getting permissions
 
}
 
// ***
// Testing Server Permission
// *
 
if($_SERVER['SERVER_NAME'] == 'mydeptdev.warwick.ac.uk') { // Testing Server
    $tester = false;
    if (defined('SSO_USER')) {
        $tester = $webgroups->check_group_membership(array(
            'webadmin'
        ), SSO_USER);
    }
                if(!$tester) {
                                error_reporting(E_ERROR);
                                ini_set('display_errors', False);
                                permission_denied(false);
                                exit;
                }
}
 
// ***
// Academic Dates
// *
 
$academic_year               = new academic_year();
$current_week = $academic_year->current_week();
$term_dates      = $academic_year->term_dates();
 
// ***
// Global Variables
// *
 
$template                           = $connection->department.($connection->sub_department !== NULL ? '_'.$connection->sub_department : '');
$folder                 = explode('/', $_SERVER['PHP_SELF']);
$folder                 = (@is_file($folder[1]) ? '' : $folder[1]);
$php_self                            = $_SERVER['PHP_SELF'];
 
// ***
// Maintenance Mode
// *
 
$maintenance_mode = false;
if($maintenance_mode == true && $privilege->get('site_admin') != 1) {
                $path = explode('/',trim(dirname($_SERVER['PHP_SELF']),'/'));
                if($path[0] != 'api' && ($path[0] != 'lib' && $path[1] != 'ajax')) {
                                exit('MyDepartment is being updated');
                }
}
 
// ***
// Mimic User
// *
 
if(!empty($_GET[md5($_SERVER['SERVER_NAME'].'_k1lL_M1mIc_U5eR')])) {
                setcookie (md5($_SERVER['SERVER_NAME'].'_M1mIc_U5eR'), "", time() - 10800, '/', ($_SERVER['SERVER_NAME'] == 'localhost' ? false : $_SERVER['SERVER_NAME']));
                unset($_GET[md5($_SERVER['SERVER_NAME'].'_k1lL_M1mIc_U5eR')], $_COOKIE[md5($_SERVER['SERVER_NAME'].'_M1mIc_U5eR')]);
} else {
                if(!empty($_COOKIE[md5($_SERVER['SERVER_NAME'].'_M1mIc_U5eR')])) {
                                if($privilege->get('site_admin') != 1) {
                                                setcookie (md5($_SERVER['SERVER_NAME'].'_M1mIc_U5eR'), "", time() - 10800, '/', ($_SERVER['SERVER_NAME'] == 'localhost' ? false : $_SERVER['SERVER_NAME']));
                                                permission_denied();
                                } else {
                                                unset($warwick_sso_search, $user_array, $privilege);
                                                $warwick_sso_search = new search($_COOKIE[md5($_SERVER['SERVER_NAME'].'_M1mIc_U5eR')], 'user', false, false);
                                                $user_array = $warwick_sso_search->raw_data['user'][$_COOKIE[md5($_SERVER['SERVER_NAME'].'_M1mIc_U5eR')]];
                                                unset($warwick_sso_search);
                                                if(empty($user_array['id'])) setcookie (md5($_SERVER['SERVER_NAME'].'_M1mIc_U5eR'), "", time() - 10800, '/', $_SERVER['SERVER_NAME']);               
                                                $privilege = new privilege($user_array['id'], $user_array['user']);              
                                                                                                               
                                }
                }             
}
 
?>

