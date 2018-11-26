<?php
class Pres_controller extends CI_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->model('ins_model');
      $this->load->helper('html');
      $this->load->helper('url');
	}
   
   public function loaddata(){
      $data = array();
      return($data);
   }
   
   public function page($page){
      $data = $this->loaddata();
      $data['Menu'] = 'Pres';
      $page = strtolower($page);
//echo $page;
//echo $data;
      if($page=='submissions'){
         $data = $this->ins_model->GetSubmissions($data);
         $page='submissions';
      }
      if($page=='students'){
         $data = $this->ins_model->GetStudents($data);
         $page='studentlist';
      }
      if($page=='studentedit'){
         $data = $this->ins_model->EditStudent($data);
         $page='studentedit';
      }
      if($page=='studentsave'){
         $data = $this->ins_model->SaveStudent($data);
         $data = $this->ins_model->GetStudents($data);
         $page='studentlist';
      }
      if($page=='classes'){
         $data = $this->ins_model->GetClasses($data);
         $page='classlist';
      }
      if($page=='classedit'){
         $data = $this->ins_model->EditClass($data);
         $page='classedit';
      }
      if($page=='classsave'){
         $data = $this->ins_model->SaveClass($data);
         $data = $this->ins_model->GetClasses($data);
         $page='classlist';
      }
      if($page=='classdelete'){
         $data = $this->ins_model->DeleteClass($data);
         $data = $this->ins_model->GetClasses($data);
         $page='classlist';
      }
      if($page=='addstudent'){
         $data = $this->ins_model->AddStudent($data);
         $data = $this->ins_model->GetClasses($data);
         $page='classlist';
      }
      if($page=='dropstudent'){
         $data = $this->ins_model->DropStudent($data);
         $data = $this->ins_model->GetClasses($data);
         $page='classlist';
      }
      
      
      if($page=='testorig' or $page=='layout'){
         $this->load->view("ins/$page",$data);
      }else{
         $this->load->view('includes/header',$data);
         $this->load->view('includes/topmenu',$data);
         $this->load->view('pres/presinsmenu',$data);
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
