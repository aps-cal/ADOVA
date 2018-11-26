<?php
class Guest_controller extends CI_Controller {

	public function __construct(){
		parent::__construct();
      $this->load->library('session');
		$this->load->model('login_model');
      $this->load->helper('html');
      $this->load->helper('url');
	}
   
   public function Page($Page){
      $data = $this->loaddata();
      $Page = strtolower($Page);
      if(isset($data['UserStatus']) 
         and ($data['UserStatus']=='Admin'
            or $data['UserStatus']=='Host'
            or $data['UserStatus']=='Guest')){

      	$this->load->view('includes/header',$data);
         $this->load->view('includes/topmenu',$data);
         $this->load->view('guest/guestmenu',$data);
         $this->load->view("guest/$Page",$data);
         $this->load->view('includes/footer',$data);
      }else{
         $this->load->view('includes/header',$data);
         $this->load->view('includes/topmenu',$data);
         $this->load->view('includes/leftmenu',$data);
         $this->load->view('public/guest',$data);
         $this->load->view('includes/footer',$data);
      }
   }
   
   public function loaddata(){
      $data = array();
      $data['UserStatus'] = $this->session->userdata('UserStatus');
      $data['FirstName'] = $this->session->userdata('FirstName');
      $data['UserEmail'] = (isset($_REQUEST['UserEmail'])?$_REQUEST['UserEmail']:'');
      $data['Password'] = (isset($_REQUEST['Password'])?$_REQUEST['Password']:'');
      $data['GivenName'] = (isset($_REQUEST['GivenName'])?$_REQUEST['GivenName']:'');
      $data['FamilyName'] = (isset($_REQUEST['FamilyName'])?$_REQUEST['FamilyName']:'');
      $data['UserPhone'] = '';
      $data['Account'] = '';
      $data['LoginMessage'] = '';
      $data['Reminder'] = '';
      $data['NextPage'] = '';
      return($data);
   }
   
   private function CheckStatus($StatusArray){
      $Status = '';
      $return = FALSE;
      if(isset($_SESSION['UserStatus'])){
         foreach($StatusArray as $Status){
            if($_SESSION['UserStatus'] == $Status){
               $return = TRUE;
            }
         }
      }
      return $return;   
   }
}
?>
