<?php
class Manager_model extends CI_Model {

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
   
      
   function str_parse($str){
      $array = array();
      $str = "logindisabled=FALSE urn:mace:dir:attribute-def:eduPersonTargetedID=5ur35xs3z9lz8v6o2jjq0oqs1 warwickitsclass=Staff urn:websignon:passwordlastchanged=2013-06-25T12:29:32.589+01:00 warwickyearofstudy=0 lastname=Smith id=0874367 warwickteachingstaff=Y staff=true urn:websignon:usertype=Staff urn:mace:dir:attribute-def:eduPersonScopedAffiliation=member@warwick.ac.uk student=false deptcode=ET name=Andrew Smith warwickukfedgroup=Faculty warwickathens=Y dept=Centre for Applied Linguistics dn=CN=elsiai,OU=Staff,OU=EL,OU=WARWICK,DC=ads,DC=warwick,DC=ac,DC=uk member=true deptshort=CAL urn:websignon:usersource=WarwickADS urn:mace:dir:attribute-def:eduPersonAffiliation=member firstname=Andrew returnType=4 urn:websignon:timestamp=2013-06-29T09:42:00.248+01:00 email=Andrew.P.Smith@warwick.ac.uk warwickattendancemode=P passwordexpired=FALSE user=elsiai warwickukfedmember=Y";
      $str = str_replace(" ", "&", $str);
      $str = parse_str($str, $array);
      echo var_dump($array);
      }
   
   
   
   
   
   
   
}
  