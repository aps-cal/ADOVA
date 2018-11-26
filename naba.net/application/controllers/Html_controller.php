<?php
class Html_controller extends CI_Controller {
    private $token = NULL;  // SSO Token from Warwick SSO Cookie
    private $wsos_api_key = '&wsos_api_key=f0b29422ccba737bf49724604580fbfe';
    public $user = array(); // The currently logged in SSO User
    public function __construct(){
        parent::__construct();
	$this->load->library('session');
//        $this->load->library('Email'); 
//        $this->load->helper('Email');
        $this->load->helper('Cookie');
        $this->load->helper('Html');
//        $this->load->helper('Url');
//        $this->load->model('IT_model');
        $this->load->database();
    }
   
//   public function loaddata(){
//      $data = array();  
//      foreach($_GET as $key=>$value){$data[$this->safeString($key)] = $this->safeString($value);}
//      foreach($_POST as $key=>$value){$data[$this->safeString($key)] = $this->safeString($value);}
//      foreach($_REQUEST as $key=>$value){$data[$this->safeString($key)] = $this->safeString($value);}
//      return($data);
//    }
    
   
    public function html($html){
        if ( ! file_exists('application/views/html/'.$html.'.html')){
             // Whoops, we don't have a page for that!
             show_404();
        }
        //$Page = ucfirst($page);
        
        $data = array();
        $user = $this->loaduser();
        if(!isset($user['id']) && !isset($user['user'])) {       
            echo "<html><body><h2>You are not logged in with a valid Warwick ID</h2></body></html>";
            return; // If theres nothing to record... don't
        } elseif(!(($user['deptcode']=='ET' ||  $user['deptcode']=='IN' ) && $user['warwickitsclass']=='Staff')) {
            // Only allow staff from CAL or ITS to access aldb.warwick.ac.uk/jsonp
            echo "<html><body><h2>You do not appear to be Applied Lingustics or ITS staff</h2></body></html>";
            return; // If theres nothing to record... don't
        }
	
        $data['title'] = ucfirst($html); // Capitalize the first letter
//      $this->load->view('templates/header', $data);
        $this->load->view('html/'.$html.'.html', $data);
//      $this->load->view('templates/footer', $data);
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
    
    private function loaduser(){
        //$userdata = array();
        //try{
            $token = get_cookie("WarwickSSO");
            $userdata = $this->getUser($token);
            $this->logUser($userdata);
        //}
        return($userdata);
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
}
        