<?php
class Manager_controller extends CI_Controller {

	public function __construct(){
		parent::__construct();
      $this->load->library('session');
		$this->load->model('manager_model');
      $this->load->helper('html');
      $this->load->helper('url');
	}
   
   public function loaddata(){
      $data['UserStatus'] = $this->session->userdata('UserStatus');
      $data['FirstName'] = $this->session->userdata('FirstName');
      $data['ListOrder'] = (isset($_REQUEST['ListOrder'])?$_REQUEST['ListOrder']:'UserID');
      $data['PageMode'] = (isset($_REQUEST['PageMode'])?$_REQUEST['PageMode']:'List');
      $data['NextPage'] = (isset($_REQUEST['NextPage'])?$_REQUEST['NextPage']:'');
      $data['Status'] = (isset($_REQUEST['Status'])?$_REQUEST['Status']:'');
      $data['UserID'] = (isset($_REQUEST['UserID'])?$_REQUEST['UserID']:'');
      return($data);
   }
 
   public function Page($Page){
      session_start();
      $Page = strtolower($Page);
      $data = $this->loaddata();
      $data['Menu'] = 'manager';
      if(isset($data['UserStatus']) 
         and ($data['UserStatus']=='Admin' or $data['UserStatus']=='Manager' ) ){
         switch($Page):
         case 'managerhome':
            //$data = $this->admin_model->UserList($data);
            break;
         endswitch;
         $this->load->view('includes/header',$data);
         $this->load->view('includes/menubar',$data);
         $this->load->view("manager/$Page",$data);
         $this->load->view('includes/footer',$data);
      }else{
         $this->load->view('includes/header',$data);
         $this->load->view('includes/menubar',$data);
         $this->load->view('login/login',$data);
         $this->load->view('includes/footer',$data);
      }
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