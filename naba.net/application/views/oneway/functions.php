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
      $subject = "Your One Way Registration"; 
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
         ."http://www.cwisw.org.uk/oneway/login.php?AC="
         .$data['ActivationCode']."&UserEmail=".$data['UserEmail']."<br/><br/>\n\n" 
         ."If you have any difficulty with the login process please email "
         ."shiande.dm@gmail.com<br/><br/>\n\n"
         ."New resources are being added to the site all the time<br/><br/>\n\n"
         ."Best regards,<br/><br/>\n\n" 
         ."史安德 Andrew <br/><br/>\n\nOne Way Admin";
      $headers   = array();
      $headers[] = "MIME-Version: 1.0";
      $headers[] = "Content-type: text/HTML; charset=iso-8859-1";
      $headers[] = "From: CCC Admin <shiande.dm@gmail.com>";
      $headers[] = "Cc: Hosting Admin <ashiande.dm@gmail.com>";
      $headers[] = "Reply-To: CCC Admin <shiande.dm@gmail.com>";
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
 ?>