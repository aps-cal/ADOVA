<?php
class SSO_controller extends CI_Controller {

	public function __construct(){
		parent::__construct();
      $this->load->library('session');
      $this->load->helper('html');
      $this->load->helper('url');
	}
   
   public function logindata(){
		$this->load->model('login_model');
      // CodeIgniter removes the $_GET variable discourages use of $_REQUEST
      // Because it is safer to use $POST as $_REQUEST also reads Cookies 
      // The following code puts the QUERY_STRING values back in $_GET
      parse_str($_SERVER['QUERY_STRING'], $_GET);
      $data = array();
      $data['UserStatus'] = $this->session->userdata('UserStatus');
      $data['UserName'] = $this->session->userdata('UserName');
      $data['UserName'] = (isset($_GET['UserName'])?$_GET['UserName']:$data['UserName']);
      $data['UserName'] = (isset($_POST['UserName'])?$_POST['UserName']:$data['UserName']);
      $data['ActivationCode'] = (isset($_GET['AC'])?$_GET['AC']:'');
      $data['ActivationCode'] = (isset($_POST['AC'])?$_POST['AC']:$data['ActivationCode']);
      $data['FirstName'] = $this->session->userdata('FirstName');
      $data['FirstName'] = (isset($_POST['FirstName'])?$_POST['FirstName']:$data['FirstName']);
      $data['LastName'] = (isset($_POST['LastName'])?$_POST['LastName']:'');
      $data['UserEmail'] = (isset($_POST['UserEmail'])?$_POST['UserEmail']:'');
      $data['Password'] = (isset($_POST['Password'])?$_POST['Password']:'');
      $data['Confirm'] = (isset($_POST['Confirm'])?$_POST['Confirm']:'');
      $data['UserPhone'] = (isset($_POST['UserPhone'])?$_POST['UserPhone']:'');
      $data['Account'] = (isset($_POST['Account'])?$_POST['Account']:'');
      $data['Reminder'] = (isset($_POST['Reminder'])?$_POST['Reminder']:'');
      $data['NextPage'] = (isset($_POST['NextPage'])?$_POST['NextPage']:'');
      $data['LoginMessage'] = '';
      $data['EmailError'] = '';
      //echo var_dump($data);
      return($data);
   }
   
   public function Page($page){
      $data = $this->logindata();
      $page = strtolower($page);
      $data['Menu'] = 'SSO';
      $data['NextPage'] = 'sso/'.$page;
         //echo var_dump($data);
         switch($page):
         case 'logout':
            $data = $this->login_model->Logout($data);
            break;
         case 'login':
            $data = $this->login_model->Login($data);
            break;
         case 'newuser':
            $data = $this->login_model->NewUser($data);
            break;
         case 'register':
            $data = $this->login_model->Register($data);
            break;
         case 'verify':
            $data = $this->login_model->Verify($data);
            break;
          case 'activate':
             echo var_dump($data);
            $data = $this->login_model->Activate($data);
             echo var_dump($data);
            break;
          case 'update':
            $data = $this->login_model->Update($data);
            break;
          case 'forgotten':
            $data = $this->login_model->Forgotten($data);
            break;
          case 'passwordnew':
//            $data = $this->login_model->NewPassword($data);           
            break;
          case 'passwordset':
            $data = $this->login_model->SetPassword($data);
            break;
      endswitch;
      //$data['NextPage'] = "oauthsimpleexample";
   	$this->load->view('includes/header',$data);
      $this->load->view('includes/topmenu',$data);
      $this->load->view('includes/leftmenu',$data);
   	$this->load->view($data['NextPage'],$data);
   	$this->load->view('includes/footer',$data);
   }
    
   public function xPage($Page){
      $data = $this->logindata();
   	$this->load->view('includes/header',$data);
      $this->load->view('includes/topmenu',$data);
      $this->load->view('includes/leftmenu',$data);
   	$this->load->view("login/$Page",$data);
   	$this->load->view('includes/footer',$data);
   }
   
}?>
