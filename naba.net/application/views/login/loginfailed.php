<DIV class="content" style="height:400px; width:800px; overflow:auto;">    
<H3>Login - Failed</H3>
<!--
<form name="Login" action="/login/login.php" method="post">
   <input name="PageMode" type="Hidden" value="Login" />
   <p>In order to have access to on-line applications you will need to register 
   for user account. You will then be sent an email to confirm your email address
   and you will need to click the link supplied to activate your online account. 
   Your user account will then have basic privileges until it is upgraded by the 
   administrator.</p>
  

   <table class="loginbox" cellpadding=5>
      <tr><td colspan=3>Registered users please login using your ITS user ID</td>
      </tr>
     <tr>
         <td colspan=3 class="highlight"><b style="color:red;"><?=(isset($LoginMessage)?$LoginMessage:'');?></b></td>
      </tr>
      <tr>  
         <td align="left">Username</td>
         <td align="left" colspan=2>
            <input id="UserName" name="UserName" type=text size=35 
            value="<?=(isset($UserEmail)?$UserEmail:'');?>"/></td>
      </tr>
      <tr>  
         <td align="left">Password</td>
         <td align="left">
            <input id="Password" name="Password" type=Password size=20/> &nbsp; &nbsp; &nbsp;
            <input id="Submit" name="Submit" type=Submit value=" Login "/>
         </td>
         <td align="left"></td>
      </tr>
      <tr>  
         <td align="left"></td>
         <td align="left" colspan=2><?=((isset($Reminder) and strlen($Reminder)>0)?'Hint: '.$Reminder:'');?></b></td>
      </tr>
      <tr>
         <td colspan="3">
            <p>If you have forgotten, or want to change, your password then you may reset it 
               by just entering your ITS username and then clicking 'Forgotten Password'. 
               You will be sent an email to create a new password.
               <input name="Forgotten" type="button" value="Forgotten Password" 
                  onclick="document.Login.action = '/login/forgotten.php'; 
                           document.Login.submit();"/><br><br></p>
            <p>If you have not used this system before then you will need to register as a new
               user as this system does not yet use the same password system as SiteBuilder. 
               <input name="NewUser" type="button" value="Register as a new user" 
                  onclick="document.Login.action = '/login/newuser.php'; 
                           document.Login.submit();"/><br></p></td>
       </tr>
       <tr>  
         <td align="left">
         </td>
         <td align="left">
         </td>
         <td align="left">
          </td>
      </tr>
   </table>
-->      
<a href="login/oauthlogin">Try Again</a>
</div>