<?php
class Naba_model extends CI_Model {

	public function __construct()	{
		$this->load->database();
      $this->load->library('email');
      $data = array();
      
	}
   public function Logout($data){
      $this->session->set_userdata('UserStatus','');
      $data['UserStatus'] = '';
      $data['NextPage'] = 'public/login.php';
      return($data);
   }
   
   public function Login($data){
      $data['PageMode'] = 'Login';      
      $data['LoginMessage'] = 'Please login';
      if(!isset($data['UserEmail']) or $data['UserEmail'] ==''){
         $data['LoginMessage'] = 'Please enter your email address';
         return($data);
      }
      if(!isset($data['Password']) or $data['Password'] ==''){
         $data['LoginMessage'] = 'Please enter a password';
         return($data);
      }   
      $sql = "SELECT UserID, FirstName, Status, Password, Reminder, Account, "
        ."MD5(?) AS Entered FROM Users WHERE Email = ? ";
      $query = $this->db->query($sql, array($data['Password'], strtolower($data['UserEmail'])));
      $row = $query->row_array();
      if($row){
         if($row['Entered'] == $row['Password']){
            $this->session->set_userdata('UserID',$row['UserID']);
            $this->session->set_userdata('FirstName',$row['FirstName']);
            $this->session->set_userdata('UserStatus',$row['Status']);
            $this->session->set_userdata('Account',$row['Account']);
            $data['UserID'] = $row['UserID'];
            $data['FirstName'] = $row['FirstName'];
            $data['UserStatus'] = $row['Status'];
            $data['Account'] = $row['Account'];
            if(isset($data['UserID'])){ 
               if($data['UserStatus'] == "Guest"){
                  $data['NextPage'] = "guest/guesthome.php";
               } elseif($data['UserStatus'] == "Pending"){
                  $data['NextPage'] = "host/hosthome.php";
               } elseif($data['UserStatus'] == "Host"){
                  $data['NextPage'] = "host/hosthome.php";
               } elseif($data['UserStatus'] == "Admin"){
                  $data['NextPage'] = "admin/adminhome.php";
               }else {
                  $data['NextPage'] = "public/home.php";
               }
               $sql = "UPDATE Users SET LastVisited = '".date('Y-m-d H:i:s')."' " 
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
      $data['NextPage'] = 'public/newuser';
      if($data['FirstName']=='' or $data['LastName']=='' 
         or $data['UserEmail']=='' or $data['Account']=='' 
         or $data['Password']=='' or $data['Confirm']==''
         or $data['Reminder']==''){
      $data['LoginMessage'] = 'Please complete all fields to register.';  
      }elseif(strpos($data["UserEmail"],"@") == 0 
         or strpos($data["UserEmail"],".") == 0 
         or strlen(trim($data["UserEmail"])) < 10){
         $data['LoginMessage'] = "Your email address does not appear to be valid";    
      }elseif($data["Password"] != $data["Confirm"]){ 
         $data['LoginMessage'] = "The passwords that you enter differ, please try again.";
      }else{
         $sql = "SELECT UserID, FirstName, Password, Status, Reminder, Account "
            ."FROM Users WHERE Email = ? ";
         $query = $this->db->query($sql, array(strtolower($data['UserEmail'])));
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
            $sql = "INSERT INTO Users "  
               ."(FirstName,LastName,Email,Phone,Password,Reminder,Status,Account) "
               ."VALUES "
               ."   ('".$data['FirstName']."', "
               ."'".$data['LastName']."', "
               ."'".strtolower($data['UserEmail'])."', "
               ."'".$data['UserPhone']."', "
               ."MD5('".$data['Password']."'), "
               ."'".$data['Reminder']."', "
               ."'Register','".$data['Account']."') ";       
            $this->db->query($sql);
            $sql = "SELECT UserID FROM Users WHERE Email = ? "; 
            $query = $this->db->query($sql, array(strtolower($data['UserEmail'])));
            $row = $query->row_array();
            if($row){
               $data['ActivationCode'] = "0".((string)($row["UserID"]+132));
            }
            // Send Email
            $config['protocol'] = 'sendmail';
//            $config['protocol'] = 'smtp';
//            $config['smtp_host'] = 'auth.smtp.1and1.co.uk';
//            $config['smtp_user'] = 'smtp';
//            $config['smtp_pass'] = 'smtp';
            
            $config['mailtype'] = 'html';
            $this->email->initialize($config);
            $this->email->clear();
            $this->email->to($data['UserEmail']);
            $this->email->from('admin@cross-culturalcoaching.co.uk','Admin');
            $this->email->reply_to('admin@cross-culturalcoaching.co.uk');
            $this->email->subject("Your registration at Cross-Cultural Coaching"); 
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
               ."http://www.cross-culturalcoaching.co.uk/index.php/public/activate?AC="
               .$data['ActivationCode']."&UserEmail=".$data['UserEmail']."<br/><br/>\n\n" 
               ."If you have any difficulty with the login process please email "
               ."admin@cross-culturalcoaching.co.uk <br/><br/>\n\n"
               ."New resources are being added to the site all the time and you can now " 
               ."booking a coaching sessions on-line.<br/><br/>\n\n"
               ."Best regards,<br/><br/>\n\n" 
               ."Andrew<br/><br/>\n\nCross-Cultural Coaching";
            $this->email->message($emailtext);
            if($this->email->send()){;
//            echo $this->email->print_debugger();
               $data['NextPage'] = 'public/register.php';
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
      $data['UserEmail'] = strtolower($data['UserEmail']);
      $data['LoginMessage'] = "Sorry - Registration has encountered a problem";
      if($data['UserID']>0){
         $sql = "SELECT Account FROM Users "
            ."WHERE UserID = ? AND Email = ? ";
         $query = $this->db->query($sql, array($data['UserID'],strtolower($data['UserEmail'])));
         $row = $query->row_array();
         if($row){         
            $data['UserStatus'] = $row['Account'];
            $sql = "UPDATE Users SET Status = Account "  
               ."WHERE UserID = ? AND Email = ? ";         
            $this->db->query($sql,array($data['UserID'],$data['UserEmail']));  
            $data['PageMode'] = 'Login';
            $data['LoginMessage'] = "Your login has been activated";
            $data['NextPage'] = 'public/login.php';
            
         }
      }
      return($data);
   }
   
   
   public function VerifyEmail($data){
      $this->email->initialize();
      $this->email->clear();
      $this->email->$to($data['UserEmail']);
      $this->email->$from('admin@cross-culturalcoaching.co.uk','Admin');
      $this->email->$reply_to('admin@cross-culturalcoaching.co.uk');
      $this->email->$subject("Your registration at Cross-Cultural Coaching"); 
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
         ."http://www.cross-culturalcoaching.co.uk/index.php/public/activate?AC="
         .$data['ActivationCode']."&UserEmail=".$data['UserEmail']."<br/><br/>\n\n" 
         ."If you have any difficulty with the login process please email "
         ."admin@cross-culturalcoaching.co.uk <br/><br/>\n\n"
         ."New resources are being added to the site all the time and you can now " 
         ."booking a coaching sessions on-line.<br/><br/>\n\n"
         ."Best regards,<br/><br/>\n\n" 
         ."Andrew<br/><br/>\n\nCross-Cultural Coaching";
      $this->email->message($emailtext);
      $this->email->send();
      echo $this->email->print_debugger();
      /*
      $headers   = array();
      $headers[] = "MIME-Version: 1.0";
      $headers[] = "Content-type: text/HTML; charset=iso-8859-1";
      $headers[] = "From: CCC Admin <admin@cross-culturalcoaching.co.uk>";
      $headers[] = "Cc: Hosting Admin <aps@lifespeak.co.uk>";
      $headers[] = "Reply-To: CCC Admin <admin@cross-culturalcoaching.co.uk>";
      $headers[] = "Subject: {$subject}";
      $headers[] = "X-Mailer: PHP/".phpversion();
      $return = FALSE;
       
       
      try {
         mail($to, $subject, $emailtext, implode("\r\n", $headers));
         $return = TRUE;
      } catch (PDOException $e) {
         echo 'Failed to send email: '.$e->getMessage();
      }*/
      return($return);
   }
   
   
}
  