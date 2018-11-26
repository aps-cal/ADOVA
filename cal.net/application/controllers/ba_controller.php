<?php
class BA_controller extends CI_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->library('session');
      $this->load->library('email'); 
      $this->load->helper('email');
		$this->load->helper('html');
      $this->load->helper('url');
      $this->load->model('BA_model');
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
      $data = $this->loaddata();
      $data['Menu'] = 'ba';
      $page = strtolower($page);
      //echo "User Status = ".$data['UserStatus'];
      if(!isset($data['UserStatus']) or $data['UserStatus'] ==''){
         redirect('/login/oauthlogout','refresh');
      }
//echo $page;
//echo $data;
      if($page=='mailinglist'){
         //$data = $this->BA_model->MailingList($data);
         $page='ba_modules';
      }
      if($page=='modules'){
         $data = $this->BA_model->GetYearTerm($data);
         $data = $this->BA_model->GetCourses($data);
         $data = $this->BA_model->GetModules($data);
         //$data = $this->BA_model->GetStudents($data);
         $page='ba_modules';
      }
      if($page=='students'){
         $data = $this->BA_model->GetYearTerm($data);
         $data = $this->BA_model->GetCourses($data);
         $data = $this->BA_model->GetModules($data);
         $data = $this->BA_model->GetStudents($data);
         $page='ba_students';
      }
       if($page=='studentslist'){
         $data = $this->BA_model->GetYearTerm($data);
         $data = $this->BA_model->GetCourses($data);
           $data = $this->BA_model->GetModules($data);
         $data = $this->BA_model->GetStudents($data);
         $page='ba_students';
      }
      if($page=='studentedit'){
         $data = $this->BA_model->GetYearTerm($data);
         $data = $this->BA_model->GetCourses($data);
         $data = $this->BA_model->GetModules($data);
         $data = $this->BA_model->EditStudent($data);
         $page='ba_studentedit';
      }
      if($page=='studentsave'){
         $data = $this->BA_model->GetYearTerm($data);
         $data = $this->BA_model->GetCourses($data);
         $data = $this->BA_model->GetModules($data);
         $data = $this->BA_model->SaveStudent($data);
         $data = $this->BA_model->GetStudents($data);
         $page='ba_students';
      }
      if($page=='classes'){
         $data = $this->BA_model->GetYearTerm($data);
         $data = $this->BA_model->GetClasses($data);
         $data = $this->BA_model->GetClassStudents($data);
         $data = $this->BA_model->GetUnassigned($data);
         $data = $this->BA_model->GetWithdrawn($data);
         $page='ba_classes';
      }
      if($page=='classedit'){
         $data = $this->BA_model->GetYearTerm($data);
         $data = $this->BA_model->GetClassTimes($data);
         $data = $this->BA_model->EditClass($data);
//         $class('Academic_Year') = (isset($class('Academic_Year'))?$class('Academic_Year'):$data('Academic_Year'));
//         $class('Academic_Term') = (isset($class('Academic_Term'))?$class('Academic_Term'):$data('Academic_Term'));
         $page='ba_classedit';
      }
      if($page=='addclasstime'){
         $data = $this->BA_model->GetYearTerm($data);
         $data = $this->BA_model->AddClassTime($data);
         $data = $this->BA_model->GetClassTimes($data);
         $data = $this->BA_model->EditClass($data);
         $page='ba_classedit';
      }
      if($page=='delclasstime'){
         $data = $this->BA_model->GetYearTerm($data);
         $data = $this->BA_model->DelClassTime($data);
         $data = $this->BA_model->GetClassTimes($data);
         $data = $this->BA_model->EditClass($data);
         $page='ba_classedit';
      }
      if($page=='classsave'){
         $data = $this->BA_model->GetYearTerm($data);
         $data = $this->BA_model->SaveClass($data);
         $data = $this->BA_model->GetClasses($data);
         $data = $this->BA_model->GetClassStudents($data);
         $data = $this->BA_model->GetUnassigned($data);
         $data = $this->BA_model->GetWithdrawn($data);
         $page='ba_classes';
      }
      if($page=='classdelete'){
         $data = $this->BA_model->GetYearTerm($data);
         $data = $this->BA_model->DeleteClass($data);
         $data = $this->BA_model->GetClasses($data);
         $data = $this->BA_model->GetClassStudents($data);
         $data = $this->BA_model->GetUnassigned($data);
         $data = $this->BA_model->GetWithdrawn($data);
         $page='ba_classes';
      }
      if($page=='addstudent'){
         $data = $this->BA_model->GetYearTerm($data);
         $data = $this->BA_model->AddStudent($data);
         $data = $this->BA_model->GetClasses($data);
         $data = $this->BA_model->GetClassStudents($data);
         $data = $this->BA_model->GetUnassigned($data);
         $data = $this->BA_model->GetWithdrawn($data);
         $page='ba_classes';
      }
      if($page=='dropstudent'){
         $data = $this->BA_model->GetYearTerm($data);
         $data = $this->BA_model->DropStudent($data);
         $data = $this->BA_model->GetClasses($data);
         $data = $this->BA_model->GetClassStudents($data);
         $data = $this->BA_model->GetUnassigned($data);
         $data = $this->BA_model->GetWithdrawn($data);
         $page='ba_classes';
      }
      if($page=='notifychanges'){
         $data = $this->BA_model->GetYearTerm($data);
         $data = $this->BA_model->NotifyChanges($data);
         $data = $this->BA_model->GetClasses($data);
         $data = $this->BA_model->GetClassStudents($data);
         $data = $this->BA_model->GetUnassigned($data);
         $data = $this->BA_model->GetWithdrawn($data);
         $page='ba_classes';
      }
      if($page=='mailinglist'){
         $data = $this->BA_model->MailingList($data);
         $page='mailinglist';
      }
      if($page=='registers'){
         $data = $this->BA_model->GetYearTerm($data);
         $data = $this->BA_model->GetCourses($data);
         $data = $this->BA_model->GetClasses($data);
         $data = $this->BA_model->GetRegister($data);
  //    echo var_dump($data['Class_ID']);
         
         $page='ba_registers';
      }
      if($page=='saveregister'){
         $data = $this->BA_model->GetYearTerm($data);
         $data = $this->BA_model->SaveRegister($data);
         $data = $this->BA_model->GetCourses($data);
         $data = $this->BA_model->GetClasses($data);
         $data = $this->BA_model->GetRegister($data);
  //    echo var_dump($data['Class_ID']);
         $page='ba_registers';
      }
      if($page=='attendance'){
         $data = $this->BA_model->GetYearTerm($data);
         $data = $this->BA_model->GetCourses($data);
         $data = $this->BA_model->GetStudents($data);
         $data = $this->BA_model->GetAttendance($data);
  //    echo var_dump($data['Class_ID']);
         $page='ba_attendance';
      }
      if($page=='monitoring'){
         $data = $this->BA_model->GetYearTerm($data);
         $data = $this->BA_model->GetCourses($data);
         $data = $this->BA_model->GetMonitoring($data);
  //    echo var_dump($data['Class_ID']);
         $page='ba_monitoring';
      }
      if($page=='reports'){
         //$data = $this->BA_model->MailingList($data);
         $page='ba_reports';
      }

//      if($page=='dropstudent'){
//         $data = $this->BA_model->DropStudent($data);
//         $data = $this->BA_model->GetClasses($data);
//         $page='classlist';
//      }
      $data['NextPage'] = "ba/$page";
      if($page=='reports'){
         $data = $this->BA_model->Reports($data);
         $page='reports';
      }
      if($page=='testorig' or $page=='layout'){
         $this->load->view("ba/$page",$data);
      }else{
         $this->load->view('includes/header',$data);
         $this->load->view('includes/menubar',$data);
         //$this->load->view('includes/topmenu',$data);
         //$this->load->view('ba/ba_menu',$data);
         $this->load->view("ba/$page",$data);
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
