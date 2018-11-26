<?php
class ajax_controller extends CI_Controller {
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
            $data = $this->loaddata();
            //$this->eval($fn.'($data)');
            $page = strtolower($page);
        if(!isset($data['UserStatus']) or $data['UserStatus'] ==''){
            redirect('/login/oauthlogout','refresh');
        }
        //echo $page;
        //echo $data;
        switch(strtolower($page)):
            case 'test':                $this->Ajax_model->test($data); break; 
            case 'students':
                $data = $this->ins_model->GetYearTerm($data);
                $data = $this->ins_model->GetStudents($data);
                $page='students';
                $this->load->view("ajax/$page",$data);
                break;
            endswitch;
    }
}
        