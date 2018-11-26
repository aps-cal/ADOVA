<?php
class Admin_model extends CI_Model {

	public function __construct()	{
		$this->load->database();
      $this->load->library('email');
 //     $data = array();
	}
   
   public function UserList($data){
      if(!isset($data['PageMode'])){
         $data['PageMode'] = "List";
      }
      if($data['PageMode'] == "Update"){
         if(!$data['UserID']=='' and !$data['Status']==''){
            if($data['Status']=="Delete"){
               $sql = "DELETE FROM users WHERE UserID = ? ";
               $query = $this->db->query($sql, array($data['UserID']));
            }else{
               $sql = "UPDATE users SET Status = ? WHERE UserID = ? ";
               $query = $this->db->query($sql, array($data['Status'],$data['UserID']));
            }
            $data['PageMode'] ='List';
         }
      }
      $data['ListOrder'] = ($data['ListOrder']==''?'UserID':$data['ListOrder']);
      $sql = "SELECT UserID, UserName, Email, FirstName, LastName, Status, Registered, LastVisited "
         ."FROM users ORDER BY ? ";
      $query = $this->db->query($sql, array($data['ListOrder']));
      $results = array();
      foreach ($query->result_array() as $row){
         $results[] = $row;
      }
      $data['results'] = $results;
      return($data);
   }
   
   public function GetCurrentValues($data){
      $sql = "SELECT * FROM current_values ";
      $query = $this->db->query($sql);
      $data['values'] = $query->row_array();
      return($data);
   }
   
   public function SetCurrentValues($data){
      // This function simply updates the 
      // Add all values that have been set into $data array
      $fields = array('Academic_Year', 'Academic_Term', 'Ins_Start_Date');
      $params = array();
      $sql = "UPDATE current_values SET ";
      foreach($fields as $field){
         if(isset($_POST[$field])){
            $data[$field] = $_POST[$field];
            $params[$field] = $data[$field];
            $sql.="".$field."=?, ";
         }
      }
      $sql.="Updated = NOW() ";
      try{
         $this->db->query($sql,$params);
      }catch(Exception $e){
         echo $e->message();
      }
      return($data);
   }
   
   
   
   
   
   
   
}
  