<DIV class="content" style="height:400px; width:800px; overflow:auto;">    
<H3>Login</H3>
<form name="Login" action="/login/login.php" method="post">
   <input name="PageMode" type="Hidden" value="Login" />
   <p>In order to have access to on-line applications you will need to register 
   for user account. You will then be sent an email to confirm your email address
   and you will need to click the link supplied to activate your online account. 
   Your user account will then have basic privileges until it is upgraded by the 
   administrator.</p>
  

   <table class="loginbox" cellpadding=5>
      <tr><td colspan=3>Registered Users Login</td>
      </tr><tr>  
         <td align="left">Username</td>
         <td align="left" colspan=2>
            <input id="UserName" name="UserName" type=text size=35 
            value="<?=(isset($UserEmail)?$UserEmail:'');?>"/></td>
      </tr><tr>  
         <td align="left">Password</td>
         <td align="left"><input id="Password" name="Password" type=Password size=20/></td>
         <td align="left"><input id="Submit" name="Submit" type=Submit value="Login"/></td>
      </tr>
      <tr>  
         <td align="left"><!--Reminder--></td>
         <td align="left" colspan=2><?=(isset($Reminder)?$Reminder:'');?></td>
      </tr>
      <tr>
         <td colspan=3 class="highlight"><?=(isset($LoginMessage)?$LoginMessage:'');?></td>
      </tr>
      <tr>  
         <td align="left"><input name="NewUser" type="button" value="Register as a new user" 
                  onclick="document.Login.action = '/login/newuser.php'; 
                           document.Login.submit();"/>
         </td>
         <td align="left" colspan=2>
          </td>
      </tr>
   </table>
      <p>Existing users may login above. If you would like to register 
   please click the 'New User' link above.</p>

</div>