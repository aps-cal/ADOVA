<?php
class Ins_controller extends CI_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->library('session');
      $this->load->library('email'); 
      $this->load->helper('email');
		$this->load->helper('html');
      $this->load->helper('url');
      $this->load->model('ins_model');
     // $this->load->model('admin_model');
     // $this->load->library('functions');
	}
   
   public function loaddata(){
      $data = array();
      $data['UserName'] = $this->session->userdata('UserName');
      $data['UserStatus'] = $this->session->userdata('UserStatus');
      $data['FirstName'] = $this->session->userdata('FirstName');
      foreach($_GET as $key=>$value){$data[$key] = $value;}
      foreach($_POST as $key=>$value){$data[$key] = $value;}
      foreach($_REQUEST as $key=>$value){$data[$key] = $value;}
      return($data);
   }
   
   public function page($page){
      // Function to check that a person has logged in. 
//      $url = curPage();
//      if(!isset($UserStatus) and substr($url,-17) <> "/login/logout.php") {
//         header("Location: /login/logout.php");
//      }   
      
      $data = $this->loaddata();
      $data['Menu'] = 'ins';
      $page = strtolower($page);
      //echo "User Status = ".$data['UserStatus'];
      if(!isset($data['UserStatus']) or $data['UserStatus'] ==''){
    //     redirect('/login/login','refresh');
         redirect('/login/oauthlogout','refresh');
//         $this->load->view('includes/header',$data);
//         $this->load->view('includes/topmenu',$data);
//         $this->load->view('includes/leftmenu',$data);
//         $this->load->view("../../login/login",$data);
//         $this->load->view('includes/footer',$data);
//         break;
      }
//echo $page;
//echo $data;
           
      if($page=='test'){
         $data = $this->ins_model->GetYearTerm($data);
         //$data = $this->ins_model->GetSubmissions($data);
         $page='test';
      }
      if($page=='submissions'){
         $data = $this->ins_model->GetYearTerm($data);
         $data = $this->ins_model->GetSubmissions($data);
         $page='submissions';
      }
      if($page=='submissionslist'){
         $data = $this->ins_model->GetYearTerm($data);
         $data = $this->ins_model->GetSubmissions($data);
         $page='submissions';
      }
      if($page=='students'){
         $data = $this->ins_model->GetYearTerm($data);
         $data = $this->ins_model->GetStudents($data);
         $page='studentlist';
      }
       if($page=='studentslist'){
         $data = $this->ins_model->GetYearTerm($data);
         $data = $this->ins_model->GetStudents($data);
         $page='studentlist';
      }
      if($page=='studentedit'){
         $data = $this->ins_model->GetYearTerm($data);
         $data = $this->ins_model->EditStudent($data);
         $page='studentedit';
      }
      if($page=='studentsave'){
         $data = $this->ins_model->GetYearTerm($data);
         $data = $this->ins_model->SaveStudent($data);
         $data = $this->ins_model->GetStudents($data);
         $page='studentlist';
      }
      if($page=='classes'){
         $data = $this->ins_model->GetYearTerm($data);
         $data = $this->ins_model->GetClasses($data);
         $data = $this->ins_model->GetClassStudents($data);
         $data = $this->ins_model->GetUnassigned($data);
         $data = $this->ins_model->GetWithdrawn($data);
         $page='classlist';
      }
      if($page=='classedit'){
         $data = $this->ins_model->GetYearTerm($data);
         $data = $this->ins_model->GetClassTimes($data);
         $data = $this->ins_model->EditClass($data);
         //$class('Academic_Year') = (isset($class('Academic_Year'))?$class('Academic_Year'):$data('Academic_Year'));
         //$class('Academic_Term') = (isset($class('Academic_Term'))?$class('Academic_Term'):$data('Academic_Term'));
         $page='classedit';
      }
      if($page=='addclasstime'){
         $data = $this->ins_model->GetYearTerm($data);
         $data = $this->ins_model->AddClassTime($data);
         $data = $this->ins_model->GetClassTimes($data);
         $data = $this->ins_model->EditClass($data);
         $page='classedit';
      }
      if($page=='delclasstime'){
         $data = $this->ins_model->GetYearTerm($data);
         $data = $this->ins_model->DelClassTime($data);
         $data = $this->ins_model->GetClassTimes($data);
         $data = $this->ins_model->EditClass($data);
         $page='classedit';
      }
      if($page=='classsave'){
         $data = $this->ins_model->GetYearTerm($data);
         $data = $this->ins_model->SaveClass($data);
         $data = $this->ins_model->GetClasses($data);
         $data = $this->ins_model->GetClassStudents($data);
         $data = $this->ins_model->GetUnassigned($data);
         $data = $this->ins_model->GetWithdrawn($data);
         $page='classlist';
      }
      if($page=='classdelete'){
         $data = $this->ins_model->GetYearTerm($data);
         $data = $this->ins_model->DeleteClass($data);
         $data = $this->ins_model->GetClasses($data);
         $data = $this->ins_model->GetClassStudents($data);
         $data = $this->ins_model->GetUnassigned($data);
         $data = $this->ins_model->GetWithdrawn($data);
         $page='classlist';
      }
      if($page=='addstudent'){
         $data = $this->ins_model->GetYearTerm($data);
         $data = $this->ins_model->AddStudent($data);
         $data = $this->ins_model->GetClasses($data);
         $data = $this->ins_model->GetClassStudents($data);
         $data = $this->ins_model->GetUnassigned($data);
         $data = $this->ins_model->GetWithdrawn($data);
         $page='classlist';
      }
      if($page=='dropstudent'){
         $data = $this->ins_model->GetYearTerm($data);
         $data = $this->ins_model->DropStudent($data);
         $data = $this->ins_model->GetClasses($data);
         $data = $this->ins_model->GetClassStudents($data);
         $data = $this->ins_model->GetUnassigned($data);
         $data = $this->ins_model->GetWithdrawn($data);
         $page='classlist';
      }
      if($page=='notifychanges'){
         $data = $this->ins_model->GetYearTerm($data);
         $data = $this->ins_model->NotifyChanges($data);
         $data = $this->ins_model->GetClasses($data);
         $data = $this->ins_model->GetClassStudents($data);
         $data = $this->ins_model->GetUnassigned($data);
         $data = $this->ins_model->GetWithdrawn($data);
         $page='classlist';
      }
      if($page=='mailinglist'){
         $data = $this->ins_model->MailingList($data);
         $page='mailinglist';
      }
      if($page=='registers'){
         $data = $this->ins_model->GetYearTerm($data);
         $data = $this->ins_model->GetStudents($data);
         $data = $this->ins_model->GetClasses($data);
         $data = $this->ins_model->GetRegister($data);
  //    echo var_dump($data['Class_ID']);
         
         $page='registers';
      }
      if($page=='saveregister'){
         $data = $this->ins_model->GetYearTerm($data);
         $data = $this->ins_model->GetClasses($data);
         $data = $this->ins_model->SaveRegister($data);
         $data = $this->ins_model->GetRegister($data);
  //    echo var_dump($data['Class_ID']);
         $page='registers';
      }

//      if($page=='dropstudent'){
//         $data = $this->ins_model->DropStudent($data);
//         $data = $this->ins_model->GetClasses($data);
//         $page='classlist';
//      }
      $data['NextPage'] = "ins/$page";
      if($page=='reports'){
         $data = $this->ins_model->Reports($data);
         $page='reports';
      }
      if($page=='testorig' or $page=='layout'){
         $this->load->view("ins/$page",$data);
      }else{
         $this->load->view('includes/header',$data);
         $this->load->view('includes/menubar',$data);
         //$this->load->view('includes/topmenu',$data);
         //$this->load->view('ins/insmenu',$data);
         $this->load->view("ins/$page",$data);
         $this->load->view('includes/footer',$data);
      }
   }
   
   
   
   
   
   
/*   
   public function loaddata(){
      $data = array();
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
   
   public function login(){
      $data = $this->loaddata();
      $data = $this->login_model->login($data);
   	$this->load->view('includes/header',$data);
      $this->load->view('includes/leftmenu',$data);
   	$this->load->view('public/login',$data);
   	$this->load->view('includes/footer',$data);
   }  
   public function newuser(){   
      $data = $this->loaddata();
   	$data = $this->login_model->newuser($data);
   	$this->load->view('includes/header',$data);
      $this->load->view('includes/leftmenu',$data);
   	$this->load->view('public/newuser',$data);
   	$this->load->view('includes/footer',$data);    
   }
   public function register(){
      $data = $this->loaddata();
      $data = $this->login_model->register($data);
   	$this->load->view('includes/header',$data);
      $this->load->view('includes/leftmenu',$data);
   	$this->load->view('public/registered',$data);
   	$this->load->view('includes/footer',$data);
   }
   public function registered(){
      $data = $this->loaddata();
      $data = $this->login_model->registered($data);
   	$this->load->view('includes/header',$data);
      $this->load->view('includes/leftmenu',$data);
   	$this->load->view('public/registered',$data);
   	$this->load->view('includes/footer',$data);
   }
*/   
}

?>
