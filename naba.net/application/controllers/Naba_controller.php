<?php
class Naba_controller extends CI_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->model('naba_model');
      $this->load->helper('html');
      $this->load->helper('url');
	}
   
   public function loaddata(){
      $data = array();
      return($data);
   }
   
   public function page($page){
      $data = $this->loaddata();
      $data['Menu'] = 'naba';
      $data['NextPage'] = 'naba/'.$page;
   	$this->load->view('includes/header');
      $this->load->view('includes/topmenu',$data);
      //$this->load->view('includes/leftmenu',$data);
      //$this->load->view("naba/$page",$data);
        $this->load->view($data['NextPage'],$data);
   	$this->load->view('includes/footer');

      // Complete Debug Information
      $this->output->enable_profiler(TRUE);
      $sections = array(
          'uri_string' => TRUE,
          'http_headers' => TRUE,
          'get' => TRUE, 
          'post' => TRUE, 
          'config' => TRUE,
          'controller_info' => TRUE,
          'queries' => TRUE,
          'query_toggle_count' => TRUE,
          'memory_usage' => TRUE,
          'benchmarks' => TRUE
      );
      $this->output->set_profiler_sections($sections);
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
