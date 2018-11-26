<?php
class Login_model extends CI_Model {

	public function __construct()	{
		$this->load->database();
      $this->load->library('email');
      $data = array();
      
	}
   public function Logout($data){
      $this->session->set_userdata('UserStatus','');
      $data['UserStatus'] = '';
      $this->session->set_userdata('UserName','');
      $data['UserName'] = '';
      $this->session->set_userdata('FirstName','');
      $data['FirstName'] = '';
      $data['NextPage'] = 'login/login.php';
      return($data);
   }
   
   public function Login($data){
      $data['PageMode'] = 'Login';      
      $data['LoginMessage'] = 'Please login';
      if(!isset($data['UserName']) or $data['UserName'] ==''){
         $data['LoginMessage'] = 'Please enter your Username';
         return($data);
      }
      if(!isset($data['Password']) or $data['Password'] ==''){
         $data['LoginMessage'] = 'Please enter a Password';
         return($data);
      }   
      $sql = "SELECT UserID, UserName, FirstName, Status, Password, Reminder, Account, "
        ."MD5(?) AS Entered FROM users WHERE UserName = ? ";
      $query = $this->db->query($sql, array($data['Password'], $data['UserName']));
      $row = $query->row_array();
      if($row){
         if($row['Entered'] == $row['Password']){
            $this->session->set_userdata('UserID',$row['UserID']);
            $this->session->set_userdata('UserName',$row['UserName']);
            $this->session->set_userdata('FirstName',$row['FirstName']);
            $this->session->set_userdata('UserStatus',$row['Status']);
            $this->session->set_userdata('Account',$row['Account']);
            $data['UserID'] = $row['UserID'];
            $data['UserName'] = $row['UserName'];
            $data['FirstName'] = $row['FirstName'];
            $data['UserStatus'] = $row['Status'];
            $data['Account'] = $row['Account'];
            if(isset($data['UserID'])){ 
               if($data['UserStatus'] == "Guest"){
                  $data['NextPage'] = "login/guest.php";
               } elseif($data['UserStatus'] == "Tutor"){
                  $data['NextPage'] = "login/tutor.php";
               } elseif($data['UserStatus'] == "Manager"){
                  $data['NextPage'] = "login/manager.php";
               } elseif($data['UserStatus'] == "Admin"){
                  $data['NextPage'] = "login/admin.php";
               }else {
                  $data['NextPage'] = "login/home.php";
               }
               $sql = "UPDATE users SET LastVisited = '".date('Y-m-d H:i:s')."' " 
                  ."WHERE Email = '".strtolower($data['UserEmail'])."'";
               $this->db->query($sql);
            }
         }else{
            $data['LoginMessage'] = 'Password Incorrect';
            $data['Reminder'] = $row["Reminder"];
         }
      }else{
         $data['UserEmail'] = '';
         $data['LoginMessage'] = 'User not registered';
      }
      return($data);
   }
   
   public function Newuser($data){
//      $data['UserID'] = '';
//      $data['UserStatus'] = '';
//      $data['FirstName'] = '';
      $data['PageMode'] = 'NewUser';
      return($data);
   }
   
   public function Register($data){
      $data['NextPage'] = 'login/newuser';
      if($data['FirstName']=='' or $data['LastName']=='' 
         or $data['UserEmail']=='' or $data['Account']=='' 
         or $data['Password']=='' or $data['Confirm']==''
         or $data['Reminder']==''or $data['UserName']==''){
      $data['LoginMessage'] = 'Please complete all fields to register.';  
      }elseif(strpos($data["UserEmail"],"@") == 0 
         or strpos($data["UserEmail"],".") == 0 
         or strlen(trim($data["UserEmail"])) < 10){
         $data['LoginMessage'] = "Your email address does not appear to be valid";    
      }elseif($data["Password"] != $data["Confirm"]){ 
         $data['LoginMessage'] = "The passwords that you enter differ, please try again.";
      }else{
         $sql = "SELECT UserID, FirstName, Password, Status, Reminder, Account "
            ."FROM users WHERE UserName = ? ";
         $query = $this->db->query($sql, array(strtolower($data['UserName'])));
         $row = $query->row_array();
         if($row){
            $data['PageMode'] = "Login";
            $data['LoginMessage'] = "User already registered - Please Login";
            if(strtoupper($row["Password"]) == strtoupper($data['Password'])){ 
               $data['UserID'] = $row["UserID"];
               $data['GiveName'] = $row["FirstName"];
               $data['UserStatus'] = $row["Status"];
            }else{
               $data['Reminder'] = $row["Reminder"];
               $data['LoginMessage'] = "User already registered - Please Login";
            }
         }else{
            $sql = "INSERT INTO users "  
               ."(UserName,FirstName,LastName,Email,Phone,Password,Reminder,Status,Account) "
               ."VALUES "
               ."   ('".$data['UserName']."','".$data['FirstName']."', "
               ."'".$data['LastName']."', "
               ."'".strtolower($data['UserEmail'])."', "
               ."'".$data['UserPhone']."', "
               ."MD5('".$data['Password']."'), "
               ."'".$data['Reminder']."', "
               ."'Register','".$data['Account']."') ";       
            $this->db->query($sql);
            $sql = "SELECT UserID FROM users WHERE UserName = ? "; 
            $query = $this->db->query($sql, array(strtolower($data['UserName'])));
            $row = $query->row_array();
            if($row){
               $data['ActivationCode'] = "0".((string)($row["UserID"]+132));
            }
            // Send Email
            $config['protocol'] = 'smtp';
            $config['smtp_host'] = 'mail-relay.warwick.ac.uk';//	No Default	None	SMTP Server Address.
            $config['mailtype'] = 'html';
            $this->email->initialize($config);
            $this->email->clear();
            $this->email->to($data['UserEmail']);
            $this->email->from('admin@mycalonline.org.uk','Admin');
            $this->email->reply_to('admin@mycalonline.org.uk.co.uk');
            $this->email->subject("Your registration at MyCAL Online"); 
            $emailtext = "Dear ".$data['FirstName'].",<br/><br/>\n\n" 
               ."Thank you for registering on-line.<br/><br/>\n\n"
               ."The details you supplied where;<br/><br/>\n\n"
               ."Username: ".$data['UserName']."<br/>\n"
               ."Name:     ".$data['FirstName']." ".$data['LastName']."<br/>\n"
               ."Email:    ".$data['UserEmail']."<br/>\n"
               ."Phone:    ".$data['UserPhone']."<br/>\n"
               ."Password: ".$data['Password']."<br/>\n"
               ."Reminder: ".$data['Reminder']."<br/>\n"
               ."Account:  ".$data['Account']."<br/><br/>\n\n"
               ."Please keep this email safe for your future record.<br/><br/>\n\n"
               ."In order to activate your registration please click on the link below and login.<br/><br/>\n\n"
               ."http://www.mycalonline.org.uk/login/activate?AC="
               .$data['ActivationCode']."&UserName=".$data['UserName']."<br/><br/>\n\n" 
               ."If you have any difficulty with the login process please email "
               ."admin@mycalonline.org.uk <br/><br/>\n\n"
               ."Kind regards,<br/><br/>\n\n" 
               ."Andrew<br/><br/>\n\nmycalonline.org.uk";
            $this->email->message($emailtext);
            if($this->email->send()){;
//            echo $this->email->print_debugger();
               $data['NextPage'] = '/login/register.php';
            }else{
               $data['EmailError'] = $this->email->print_debugger();
            }
         }
         
      } 
      return($data);
   }
   
   public function Verify($data){
       return($data);
   }

   public function Activate($data){
      $data['PageMode'] = 'login';
      $data['UserID'] = $data['ActivationCode'] - 132;
      $data['NextPage'] = 'login/login.php';
      $data['LoginMessage'] = "Sorry - Registration has encountered a problem";
      if($data['UserID']>0){
         $sql = "SELECT Account FROM users "
            ."WHERE UserID = ? AND UserName = ? ";
         $query = $this->db->query($sql, array($data['UserID'],$data['UserName']));
         $row = $query->row_array();
         if($row){         
            $data['UserStatus'] = $row['Account'];
            $sql = "UPDATE users SET Status = Account "  
               ."WHERE UserID = ? AND UserName = ? ";         
            $this->db->query($sql,array($data['UserID'],$data['UserName']));  
            $data['PageMode'] = 'Login';
            $data['LoginMessage'] = "Your login has been activated";
          }
      }
      return($data);
   }
     public function SetPassword($data){
//      $data['PageMode'] = 'PasswordSetlogin';
      $data['UserID'] = $data['ActivationCode'] - 132;
      $data['NextPage'] = 'login/login.php';
      $data['LoginMessage'] = "Error - New password could not be saved.";
      if($data['UserID']>0 and !$data['UserName']==''){
         $sql = "UPDATE users SET Password = MD5(?) "  
            ."WHERE UserID = ? AND UserName = ? ";         
         $this->db->query($sql,array($data['Password'],$data['UserID'],$data['UserName']));  
         $data['PageMode'] = 'Login';
         $data['LoginMessage'] = "Your password has been changed";
      }
 //           echo var_dump($data);
      return($data);
   }
  
   
   public function VerifyEmail($data){
      $this->email->initialize();
      $this->email->clear();
      $this->email->$to($data['UserEmail']);
      $this->email->$from('admin@mycalonline.org.uk','Admin');
      $this->email->$reply_to('admin@mycalonline.org.uk');
      $this->email->$subject("Your registration at MyCAL Online"); 
      $emailtext = "Dear ".$data['FirstName'].",<br/><br/>\n\n" 
         ."Thank you for registering on-line.<br/><br/>\n\n"
         ."The details you supplied where;<br/><br/>\n\n"
         ."Name:     ".$data['FirstName']." ".$data['LastName']."<br/>\n"
         ."Email:    ".$data['UserEmail']."<br/>\n"
         ."Phone:    ".$data['UserPhone']."<br/>\n"
         ."Password: ".$data['Password']."<br/>\n"
         ."Reminder: ".$data['Reminder']."<br/>\n"
         ."Account:  ".$data['Account']."<br/><br/>\n\n"
        ."Please keep this email safe for your future record.<br/><br/>\n\n"
         ."In order to activate your registration please click on the link below and login.<br/><br/>\n\n"
         ."http://www.mycalonline.org.uk/index.php/login/activate?AC="
         .$data['ActivationCode']."&UserEmail=".$data['UserEmail']."<br/><br/>\n\n" 
         ."If you have any difficulty with the login process please email "
         ."admin@mycalonline.org.uk <br/><br/>\n\n"
         ."Kind regards,<br/><br/>\n\n" 
         ."Andrew<br/><br/>\n\nMyCALOnline.org.uk";
      $this->email->message($emailtext);
      $this->email->send();
      echo $this->email->print_debugger();
      return($return);
   }
   
   public function Forgotten($data){
      $data['NextPage'] = 'login/forgotten';
      $data['EmailError'] = '';
      if($data['UserName']=='') {
         $data['LoginMessage'] = 'For a password reset - please enter your ITS Username.';  
         $data['NextPage'] = 'login/login';
      } else {
         $sql = "SELECT UserID, UserName, FirstName, Email FROM users WHERE UserName = ? ";
         $query = $this->db->query($sql, array(strtolower($data['UserName'])));
         $row = $query->row_array();
         if(!$row){
            $data['LoginMessage'] = 'Username <b>'.$data['UserName'].'</b> not registered. Please correct or register as a new user.';  
            $data['NextPage'] = 'login/login';
         }else{
            $data['ActivationCode'] = "0".((string)($row["UserID"]+132));
            // Send Email
            $config['protocol'] = 'smtp';
            $config['smtp_host'] = 'mail-relay.warwick.ac.uk';//	No Default	None	SMTP Server Address.
            $config['mailtype'] = 'html';
            $this->email->initialize($config);
            $this->email->clear();
            $this->email->to($row['Email']);
            $this->email->from('admin@mycalonline.org.uk','Admin');
            $this->email->reply_to('admin@mycalonline.org.uk.co.uk');
            $this->email->subject("Request to reset your password at MyCAL Online"); 
            $emailtext = "Dear ".$row['FirstName']." [".$row['UserName']."],<br/><br/>\n\n" 
               ."You have apparently requested a change of password.<br/><br/>\n\n"
               ."Please click the link below to enter a new password. "
               ."If this request was not from you, then please let us know by repling to this email.<br/><br/>\n\n"
               ."http://www.mycalonline.org.uk/login/passwordnew?AC="
               .$data['ActivationCode']."&UserName=".$row['UserName']."<br/><br/>\n\n" 
               ."If you have any difficulty with the login process please email "
               ."admin@mycalonline.org.uk <br/><br/>\n\n"
               ."Kind regards,<br/><br/>\n\n" 
               ."Admin<br/><br/>\n\nmycalonline.org.uk";
            $this->email->message($emailtext);
            if($this->email->send()){;
//            echo $this->email->print_debugger();
               $data['NextPage'] = '/login/forgotten.php';
            }else{
               $data['EmailError'] = $this->email->print_debugger();
            }
         }
         
      } 
//      echo var_dump($data);
      return($data);
   }
   
   
}
  