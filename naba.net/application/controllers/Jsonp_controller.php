<?php
class jsonp_controller extends CI_Controller {
    private $token = NULL;  // SSO Token from Warwick SSO Cookie
    private $wsos_api_key = '&wsos_api_key=f0b29422ccba737bf49724604580fbfe';
    public $user = array(); // The currently logged in SSO User
    public function __construct(){
        try{
        parent::__construct();
	$this->load->library('session');
        $this->load->library('email'); 
        $this->load->helper('email');
        $this->load->helper('cookie');
        $this->load->helper('html');
        $this->load->helper('url');
        $this->load->database();
        //$this->load->model('ins_model');
        $this->load->model('it_model');
        //$this->load->model('it_pdo_model');
        
     // $this->load->model('warwick_sso');
     // $this->load->model('admin_model');
     // $this->load->library('functions');
        } catch (Exception $e) {
            echo "Current PHP Version: ".phpversion();
            printf("<p>Error in _construct() ...</P>");
            echo $e->message();
            //printf("</p>");
        }
    }
   
   public function loaddata(){
       try {
      $data = array();
      $formdata = array();
      $data['UserName'] = $this->safeString($this->session->userdata('UserName'));
      $data['UserStatus'] = $this->safeString($this->session->userdata('UserStatus'));
      $data['FirstName'] = $this->safeString($this->session->userdata('FirstName'));
      foreach($_GET as $key=>$value){$data[$this->safeString($key)] = $this->safeString($value);}
      foreach($_POST as $key=>$value){$data[$this->safeString($key)] = $this->safeString($value);}
      foreach($_REQUEST as $key=>$value){$data[$this->safeString($key)] = $this->safeString($value);}
      //$data['UserName'] = $this->session->userdata('UserName');
      //$data['UserStatus'] = $this->session->userdata('UserStatus');
      //$data['FirstName'] = $this->session->userdata('FirstName');
      //foreach($_GET as $key=>$value){$data[$key] = $value;}
      //foreach($_POST as $key=>$value){$data[$key] = $value;}
      //foreach($_REQUEST as $key=>$value){$data[$key] = $value;}
      $this->token = get_cookie("WarwickSSO");
 //     if(isset($data['formdata'])){
 //         echo $data['formdata'];
 //       $formdata = json_decode($data['formdata']);
 //       foreach($formdata as $key=>$value){   
 //           $data[$key] = $value;
 //           //echo $key.':'.$value.';<br/>';
 //       }
 //     }
      //$data['WarwickSSO'] = $this->token;
      $data['UserData'] = $this->getUser($this->token);
      $this->logUser($data['UserData']);
      
      } catch (Exception $e) {
            printf("<p>Error in page() ...</P>");
            echo $e->message();
            //printf("</p>");
        }
        return($data);
   }
   
    public function page($page){
        try {
        $data = $this->loaddata();
        $user = $data['UserData'];
        $chkUser = TRUE;
        if($chkUser){
            if(!isset($user['id']) && !isset($user['user'])) {       
                echo "<html><body><h2>You are not logged in with a valid Warwick ID</h2></body></html>";
                return; // If theres nothing to record... don't
            } elseif(!(($user['deptcode']=='ET' ||  $user['deptcode']=='IN' ) && $user['warwickitsclass']=='Staff')) {
                // Only allow staff from CAL or ITS to access aldb.warwick.ac.uk/jsonp
                echo "<html><body><h2>You do not appear to be Applied Lingustics or ITS staff</h2></body></html>";
                return; // If theres nothing to record... don't
            }
        }
        $page = strtolower($page);  
        switch(strtolower($page)):
            case 'test':                $this->Ajax_model->test($data); break; 
            case 'computers':
                $data = $this->it_model->GetComputers($data);
                $data = $this->it_model->GetEquipLists($data);                
                echo $_GET['data']. '(' . json_encode($data) . ');'; 
                break;
            case 'getequipment':
                $data = $this->it_model->GetFilter($data);
                $data = $this->it_model->GetEquipment($data);
                $data = $this->it_model->GetEquipLists($data);
                echo $_GET['data']. '(' . json_encode($data) . ');'; 
                break;
            case 'setequipment':
                $data = $this->it_model->SetFilter($data);
                $data = $this->it_model->SetEquipment($data);
                $data = $this->it_model->GetComputers($data);
                $data = $this->it_model->GetEquipLists($data);
                echo $_GET['data']. '(' . json_encode($data) . ');'; 
                break;
       
            endswitch;
        } catch (Exception $e) {
            printf("<p>Error in page() ...</P>");
            echo $e->message();
            //printf("</p>");
        }
    }
    
    private function safeString($str){
        // Purpose of this check is to remove characters not expected in strings that can be used by SQL Insertion. 
        $str = mysql_real_escape_string($str);
        $str = str_replace(')', '', $str);
        $str = str_replace('(', '', $str);
        $str = str_replace(';', '', $str);
        // $str = str_replace(',', '', $str); Commas are used in names and listorders
        return($str);
    }
    
    private function getUser($token){
        try{
            error_reporting(E_STRICT); 
            $pageURL = "https://websignon.warwick.ac.uk/sentry?requestType=1&token=".$token;
            $ch = curl_init(); 
            // set URL and other appropriate options
            curl_setopt($ch, CURLOPT_URL, $pageURL);
            curl_setopt($ch, CURLOPT_HEADER, 0);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Should prevent output to browser
            $res = curl_exec($ch); 
        } catch (Exception $e) {
            printf('Error message (if any): '.curl_error($ch).'\n\n');
            printf("<p>");
            var_dump(curl_getinfo($ch)); 
            printf("</p><p>");
            var_dump($res); 
            printf("</p>");
        }
        curl_close($ch);
        return $this->parse($res);
    }
    
    private function parse($returnSSOString){
        $array = array();   
        $pieces = explode("\n", $returnSSOString);
        foreach ($pieces as $line) {
            if(strpos($line,'=') !== false) {
                list($field, $string) = explode('=', $line);
                //echo $field."  =>  ".$string."<br>";
                if(!empty($field)) {
                    if($field == 'id') {
                        $array['id'] = (int) $string;
                        
                    } else {
                        //$array[$field] = makesafe($string);
                        $array[$field] = $string;
                        
                    }
                }
            }
        }
        return $array;
    }
    
    private function logUser($user){
        if(!isset($user['id']) && !isset($user['user'])) return; // If theres nothing to record... don't
        
        
        $sql = "INSERT INTO user_log (UniversityID,UserID,Name,Firstname,Lastname,Title, "
            ."Email, Phone, Dept, DeptCode, Student, Staff, ITSClass, TeachingStaff, "
            ."SignonIP, RemoteIP) "
            ."VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )";
        $values = array($user['id'], $user['user'], $user['name'], $user['firstname'], $user['lastname'], $user['title'],
            $user['email'], $user['telephoneNumber'],$user['dept'], $user['deptcode'], ($user['student'] == 'true' ? 1 : 0), ($user['staff'] == 'true' ? 1 : 0),
            $user['warwickitsclass'], ($user['warwickteachingstaff'] == 'true' ? 1 : 0), $user['urn:websignon:ipaddress'], $_SERVER['REMOTE_ADDR']);
        try{
            $this->db->query($sql, $values);
        }catch (Exception $e) {
         //      echo $e->message();
        }   
    }
    
    
    
    private function dummy() {
                
        
        
       // $sso_protected = 
  //      echo $data['Token'];
        // ***
        // Retrieve SSO data
        // *
       
 //       if(!isset($sso_protected) || $sso_protected !== false) $sso_protected = true;
 //       $warwick_sso = new warwick_sso($sso_protected);
 /*     $user_array = array();
        if(isset($warwick_sso->user['id'])) {
            // ***
            // Create User Information
            // *
            $warwick_sso_search = new search($warwick_sso->user['id'], 'user', false, false);
            $user_array = $warwick_sso_search->raw_data['user'][$warwick_sso->user['id']];
            if(isset($user_array['id'])) define('SSO_ID', $user_array['id']);
            if(isset($user_array['user'])) define('SSO_USER', $user_array['user']);
            $data['UserID'] = $user_array['id'];
            $data['User'] = $user_array['user'];
            
            // ***
            // Retrieve Privileges
            // *
   //         $privilege = new privilege($user_array['id'], $user_array['user']);
   //         $webgroups = new webgroups(); // New way of getting permissions
        }
         * 
         * 
         */
        // ***
        // Testing Server Permission
        // *
 /*       if($_SERVER['SERVER_NAME'] == 'aldb.warwick.ac.uk') { // Testing Server
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
*/ 
//        if (!isset($_GET['oauth_verifier'])){
//if(!isset($data['SSO_USER'])){
//    $sso = $data['SSO_USER'];
//    echo $sso.id;
        //if(!isset($data['UserStatus']) or $data['UserStatus'] ==''){
  //          redirect('/login/oauthlogout','refresh');
//        }
        //echo $page;
        //echo $data;

    }
}
        