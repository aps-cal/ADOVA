<?php
class ALS_controller extends CI_Controller {

    public function __construct(){
        parent::__construct();
    //    $this->load->library('session');
    //    $this->load->library('email'); 
    //    $this->load->helper('email');
    //    $this->load->helper('html');
    //    $this->load->helper('url');
    //    $this->load->model('BA_model');
        // $this->load->model('admin_model');
        // $this->load->library('functions');
    }
   /*
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
   */
   public function page($page){
       
       if(!isset($page)){$page = "index.html";}
       $page = strtolower($page);
       if($page=='students'){
           
       }
       $this->load->view("../../../als/$page",null);      
   }
   
   
}

?>
