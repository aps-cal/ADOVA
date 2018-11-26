<DIV class="content">
<form name="Login" action="/login/passwordset.php" method="post">
   <input name="PageMode" type="Hidden" value="PasswordSet"/>
   <input name="AC" type="Hidden" value="<?=$ActivationCode;?>"/>
<H3>Change Password</H3>
<div align=center>
   <table class="loginbox" cellpadding=5>
      <tr><th colspan=3><h4>Please a new password</h4></th></tr>
      <tr><td colspan=3></td></tr>
      <tr><td colspan=3><b><?=(isset($LoginMessage)?$LoginMessage:'');?></b></td></tr>
      <tr>  
         <td>ITS&nbsp;User&nbsp;Name</td>
         <td colspan="2">
            <input id="UserName" name="UserName" type=text size=35 value="<?=$UserName;?>"/>
         </td>
      </tr>
<!--      <tr>  
         <td>First&nbsp;Name&nbsp;(Given)</td>
         <td colspan="2">
            <input name="FirstName" type=text size=35 value="<?=$FirstName;?>"/>
         </td>
      </tr>
     <tr>  
         <td>Last&nbsp;Name&nbsp;(Family)</td>
         <td colspan="2">
            <input name="LastName" type=text size=35 value="<?=$LastName;?>"/>
         </td>
      </tr>
     <tr>  
         <td>Email&nbsp;Address</td>
         <td colspan="2">
            <input name="UserEmail" type=text size=35 value="<?=$UserEmail;?>"/></td>
      </tr>
     <tr>  
         <td>Phone&nbsp;Number</td>
         <td colspan="2">
            <input name="UserPhone" type=text size=35 value="<?=$UserPhone;?>"/>
         </td>
      </tr>
-->      <tr>  
         <td>New&nbsp;Password</td>
         <td colspan="2">
            <input name="Password" type=password size=35 value=""/>
         </td>
      </tr>
      <tr>  
         <td>Confirm&nbsp;Password</td>
         <td colspan="2">
            <input name="Confirm" type=password size=35 value=""/>
         </td>
      </tr>
      <tr>  
         <td>Password&nbsp;Reminder</td>
         <td colspan="2">
            <input name="Reminder" type=text size=35 value="<?=$Reminder?>"/>
         </td>
      </tr>
<!--      <tr>  
         <td>Type of Account</td>
         <td>
            <select name="Account">
               <option value="Tutor" <?=($Account=='Tutor'?' Selected':'')?>>Tutor</option>
               <option value="Manager" <?=($Account=='Manager'?' Selected':'')?>>Manager</option>
               <option value="Admin" <?=($Account=='Pending'?' Selected':'')?>>Admin</option>
            </select>
         </td>
-->         <td align=right>
            <input name="Submit" type=button value=" Save "
               onclick="document.Login.PageMode.value = 'PasswordSet'; document.Login.submit();"/>
         </td>
      </tr>
   </table>
</div>
</DIV>
