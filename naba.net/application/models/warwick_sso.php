<?php
class warwick_sso {
    private $token = NULL;
    private $wsos_api_key = '&wsos_api_key=f0b29422ccba737bf49724604580fbfe';
    //private $wsos_api_key = '&wsos_api_key=115bbb94ca0d2883a3233f53ec5b75d58e506dd6';
    
    public $user = array(); // The currently logged in SSO User
    
    public function __construct($sso_protected = true){             
        if(!isset($_SERVER['HTTP_HOST']) || !strncmp($_SERVER['HTTP_HOST'], 'localhost', strlen('localhost'))) { // Localhost
            $this->user = array(
                'id'        => '874367',
                'user'      => 'elsiai',
                'firstname' => 'Andrew',
                'lastname'  => 'Smith',
                'email'     => 'Andrew.P.Smith@warwick.ac.uk',
                'dept'      => 'Centre for Applied Linguistics',
                'deptcode'  => 'ET',
                'student'   => 'false',
                'staff'     => 'true'                                                              
            );
            $this->record($this->user);
        } else {
            $this->token = (isset($_COOKIE['WarwickSSO']) ? $_COOKIE['WarwickSSO'] : NULL);
            if(empty($this->token)) {
                if($sso_protected == true) $this->login();
            } else {
                $this->user = $this->parse(file_get_contents('https://websignon.warwick.ac.uk/sentry?requestType=1'.$this->wsos_api_key.'&token='.$this->token));
                if(empty($this->user['id'])) {
                    if(empty($this->user['user'])) {
                        if($sso_protected == true) $this->login();
                    } else {
                        $user_id = mysql__query("SELECT id FROM user WHERE user = '".$this->user['user']."' LIMIT 1");
                        $user_id = mysql_fetch_array($user_id);
                        if(empty($user_id['id'])) {
                            $temp_id = mysql__query("SELECT id FROM user ORDER BY id ASC LIMIT 1");
                            $temp_id = mysql_fetch_array($temp_id);
                            $this->user['id'] = ($temp_id['id'] - 1);
                            mysql_insert('user', array('id' => '\''.$this->user['id'].'\'','user' => '\''.$this->user['user'].'\''));
                            $this->record($this->user, true); // Force the update because we've only just inserted the user
                        } else {
                            $this->user['id'] = $user_id['id'];
                            $this->record($this->user);
                        }
                    }
                } else {
                    $this->record($this->user);
                }
            }
        }
    }
               
    private function parse($returnSSOString){
        $array = array();
        $pieces = explode("\n", $returnSSOString);
        foreach ($pieces as $line) {
            if(strpos($line,'=') !== false) {
                list($field, $string) = explode('=', $line);
                if(!empty($field)) {
                    if($field == 'id') $array[$field] = (int) $string;
                    else $array[$field] = makesafe($string);
                }
            }
        }
        return $array;
    }
    private function record($data, $force = false)
    {
        if(!isset($data['id']) && !isset($data['user'])) return; // If theres nothing to record... don't

        $sql = array();   
        $sql['id'] = '\''.$data['id'].'\'';
        $sql['user'] = '\''.$data['user'].'\'';

        if(isset($data['firstname'])) $sql['fname']    = '\''.$data['firstname'].'\'';
        if(isset($data['lastname']))  $sql['sname']    = '\''.$data['lastname'].'\'';
        if(isset($data['email']))     $sql['email']    = '\''.$data['email'].'\'';
        if(isset($data['dept']))      $sql['dept']     = '\''.$data['dept'].'\'';
        if(isset($data['deptcode']))  $sql['deptcode'] = '\''.$data['deptcode'].'\'';
        if(isset($data['student']))   $sql['student']  = '\''.($data['student'] == 'true' ? 1 : 0).'\'';
        if(isset($data['staff']))     $sql['staff']    = '\''.($data['staff'] == 'true' ? 1 : 0).'\'';

        if(!empty($data['urn:websignon:ipaddress'])) {
            $sql['websignon_ip'] = '\''.$data['urn:websignon:ipaddress'].'\'';
            $sql['remote_ip'] = '\''.$_SERVER['REMOTE_ADDR'].'\'';
            $sql['token'] = '\''.$data['token'].'\'';
        }             

        $result = mysql__query("SELECT id, UNIX_TIMESTAMP(db_insert) AS db_insert FROM user WHERE id = '".$data['id']."' LIMIT 1");
        $result = mysql_fetch_array($result);
        if(!isset($result['id'])) {
            mysql_insert('user', $sql);
        } else {
            if(intval($result['db_insert']) + (15 * 60) < time() || $force = true) {
                $sql['db_insert'] = 'NOW()';
                mysql_update('user', $data['id'], $sql);
            }
        }
    }
    public function search($user){                             
        $search = $this->parse(file_get_contents("https://websignon.warwick.ac.uk/sentry?requestType=4".$this->wsos_api_key."&user=$user"));
        if(!empty($search['id'])) {
            $this->record($search);
        } else {
            $search['id'] = 0;

            if(isset($search['urn:websignon:usersource']) && $search['urn:websignon:usersource'] == 'WarwickExtUsers') {
                $user_id = mysql__query("SELECT id FROM user WHERE user = '".$user."' LIMIT 1");
                $user_id = mysql_fetch_array($user_id);
                if(empty($user_id['id'])) {
                    $temp_id = mysql__query("SELECT id FROM user ORDER BY id ASC LIMIT 1");
                    $temp_id = mysql_fetch_array($temp_id);
                    $search['id'] = ($temp_id['id'] - 1);
                    mysql_insert('user', array('id' => '\''.$search['id'].'\'','user' => '\''.$search['user'].'\''));
                    $this->record($search, true); // Force the update because we've only just inserted the user
                } else {
                    $search['id'] = $user_id['id'];
                    $this->record($search);
                }
            }             
        }
        return $search;
    }
    public function login(){
        global $department;
                               
        $get = '';
        foreach($_GET as $name => $value) $get .= $name.'='.$value.'&';
        $return_page = 'http'.($_SERVER['HTTPS'] ? 's' : '').'://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'].'?'.$get;

        // ***
        // Warwick SSO URN Section
        // The layout should correspond to the following: urn:mydeptdev.warwick.ac.uk:mydeptdev:service
        // *

        list($service) = explode(".", $_SERVER["HTTP_HOST"], 2); //This used to me "my".$department->get('name') but was replaced when the new server was integrated
        header("Location: https://websignon.warwick.ac.uk/origin/slogin?providerId=urn%3A".$_SERVER['SERVER_NAME']."%3A".$service."%3Aservice&target=$return_page");
        exit();
    }
    public function logout()
    {
        $return_page = 'http'.($_SERVER['HTTPS'] ? 's' : '').'://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
        return "https://websignon.warwick.ac.uk/origin/logout?target=$return_page";
    }
}
 
// *************************************** //
// XML Parse Information used for MyGroups //
// *************************************** //
function listGroupSearch($str) {
    $search = array();
    $xml = new SimpleXMLElement(file_get_contents("http://webgroups.warwick.ac.uk/query/search/name/$str"));

    foreach ($xml->group as $group) {
        $name                  =             (string) $group->attributes()->name;
        $title                     =             (string) $group->title;
        $dept                    =             (string) $group->department;
        $code                    =             (string) $group->department->attributes()->code;
        $faculty =             (string) $group->department->attributes()->faculty;
        $type                     =             (string) $group->type;
        $updated             =             (string) $group->lastupdateddate;

        $search[$name]['name']                              =             $name;
        $search[$name]['title']                  =             $title;
        $search[$name]['dept']                 =             $dept;
        $search[$name]['code']                                =             $code;
        $search[$name]['faculty']            =             $faculty;
        $search[$name]['type']                 =             $type;
        $search[$name]['updated']         =             $updated;
    }
    return $search;
}
function listGroupMembers($group) {
    $search = array();
    $xml = new SimpleXMLElement(file_get_contents("http://webgroups.warwick.ac.uk/query/group/$group/members"));

    foreach ($xml->user as $user) {
        $user = (string) $user->attributes()->userId;

        $search[] = $user;
    }
    return $search;
}
function listUserGroups($user) {
    $search = array();
    $xml = new SimpleXMLElement(file_get_contents("http://webgroups.warwick.ac.uk/query/user/$user/groups"));

    foreach ($xml->group as $group) {
        $name                  =             (string) $group->attributes()->name;
        $title                     =             (string) $group->title;
        $dept                    =             (string) $group->department;
        $code                    =             (string) $group->department->attributes()->code;
        $faculty =             (string) $group->department->attributes()->faculty;
        $type                     =             (string) $group->type;
        $updated             =             (string) $group->lastupdateddate;

        $search[$name]['name']                              =             $name;
        $search[$name]['title']                  =             $title;
        $search[$name]['dept']                 =             $dept;
        $search[$name]['code']                                =             $code;
        $search[$name]['faculty']            =             $faculty;
        $search[$name]['type']                 =             $type;
        $search[$name]['updated']         =             $updated;
    }
    return $search;
}
?>
