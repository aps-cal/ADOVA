<?php
class Admin_controller extends CI_Controller {

	public function __construct(){
		parent::__construct();
      $this->load->library('session');
		$this->load->model('admin_model');
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
      $data['Menu'] = 'admin';
      if(!isset($data['UserStatus']) or $data['UserStatus'] ==''){
         redirect('/login/oauthlogout','refresh');
      }
      if(isset($data['UserStatus']) 
         and $data['UserStatus']=='Admin'){

         switch($Page):
         case 'userlist':
            $data = $this->admin_model->UserList($data);
            break;
         case 'valuesedit':
            $data = $this->admin_model->GetCurrentValues($data);
            break;
         case 'valuessave':
            $data = $this->admin_model->SetCurrentValues($data);
            $Page = 'adminhome';
            break;
         case 'adminhome':
            //$data = $this->admin_model->UserList($data);
            break;
         endswitch;
         //echo var_dump($data);         
         $this->load->view('includes/header',$data);
         $this->load->view('includes/menubar',$data);
         //$this->load->view('includes/topmenu',$data);
         //$this->load->view('admin/adminmenu',$data);
         $this->load->view("admin/$Page",$data);
         $this->load->view('includes/footer',$data);
      }else{
         $this->load->view('includes/header',$data);
         $this->load->view('includes/menubar',$data);
         //$this->load->view('includes/topmenu',$data);
         //$this->load->view('includes/leftmenu',$data);
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
