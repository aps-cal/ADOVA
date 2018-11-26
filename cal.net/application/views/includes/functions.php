<?php
// Function library used on most pages
session_start();
function CheckStatus($StatusArray){
   $Status = '';
   $return = FALSE;
   if(isset($_SESSION['UserStatus'])){
      foreach($StatusArray as $Status){
         if($_SESSION['UserStatus'] == $Status){
            $return = TRUE;
         }
      }
   }
   return $return;   
}

function SendEmail($data){
   $to = $data['UserEmail'];
   $subject = "Your registration at Cross-Cultural Coaching"; 
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
         ."http://www.cross-culturalcoaching.co.uk/public/Login.php?AC="
         .$data['ActivationCode']."&UserEmail=".$data['UserEmail']."<br/><br/>\n\n" 
         ."If you have any difficulty with the login process please email "
         ."admin@cross-culturalcoaching.co.uk <br/><br/>\n\n"
         ."New resources are being added to the site all the time and you can now " 
         ."booking a coaching sessions on-line.<br/><br/>\n\n"
         ."Best regards,<br/><br/>\n\n" 
         ."Andrew<br/><br/>\n\nCross-Cultural Coaching";
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
   }
   return $return;
}
function curPageURL() {
   $pageURL = 'http';
   if (isset( $_SERVER["HTTPS"] ) && strtolower( $_SERVER["HTTPS"] ) == "on" ) {$pageURL .= "s";}
   $pageURL .= "://";
   if ($_SERVER["SERVER_PORT"] != "80") {
      $pageURL .= $_SERVER["SERVER_NAME"].":".$_SERVER["SERVER_PORT"].$_SERVER["REQUEST_URI"];
   } else {
      $pageURL .= $_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"];
   }
   // echo curPageURL();
   return $pageURL;
}      
 ?>