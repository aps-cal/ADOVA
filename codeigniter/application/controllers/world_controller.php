<?php
class World_controller extends CI_Controller { 
   
   public function index($page = 'world'){
      // This is the default controller method
      
   }
    public function view($page = 'world'){
        if ( ! file_exists('application/views/world/'.$page.'.php')) {
            // Whoops, we don't have a page for that!
            show_404();
        } 
        $this->load->model('world_model', '', TRUE);
        $this->load->helper('form');
        $data = array();
        $data['title'] = ucfirst($page); // Capitalize the first letter
        $data['ui_continent'] = (isset($_REQUEST['ui_continent'])?$_REQUEST['ui_continent']:'ALL');
        $data['ui_region'] = (isset($_REQUEST['ui_region'])?$_REQUEST['ui_region']:'ALL');
        $data['ui_country'] = (isset($_REQUEST['ui_country'])?$_REQUEST['ui_country']:'ALL');
        $data['continents'] = $this->world_model->get_continents($data);
        $data['regions'] = $this->world_model->get_regions($data);
        $data['countries'] = $this->world_model->get_countries($data);
        $data['details'] = $this->world_model->get_details($data);
        $data['cities'] = $this->world_model->get_cities($data);
        $data['languages'] = $this->world_model->get_languages($data);
        $this->load->view('world/header', $data);
        $this->load->view('world/'.$page, $data);
        $this->load->view('world/footer', $data);
    }
}