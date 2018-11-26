<div class="nabacontent">
<h3>In-sessional Students</h3>
<form name="studentedit" action="/ins/studentsave" method="post">
   <input type="hidden" name="Student_ID" value="<?=$stu['Student_ID'];?>"
   <input type="hidden" name="Submission_ID" value="<?=$stu['Submission_ID'];?>"
   <input type="hidden" name="Submission_Time" value="<?=$stu['Submission_Time'];?>"
   <input type="hidden" name="Skills_Reqd" value="<?=$stu['Skills_Reqd'];?>"
   <fieldset>
   <legend> Edit Student </legend>
   <style>
      td {font-weight:bold;}
      th {font-size:smaller; font-weight:lighter;}
   </style>      
   <table>
   <tr>
      <th>Academic Year / Term </th>
      <td>
         <input type="text" name="Academic_Year" Value="<?=$stu['Academic_Year'];?>" size="4"> / 
         <input type="text" name="Academic_Term" Value="<?=$stu['Academic_Term'];?>" size="2">
      </td>
   </tr>
   <tr>
      <th>First Name</th><td><input type="text" name="First_Name" Value="<?=$stu['First_Name'];?>" size="15"></td>
   </tr>
   <tr>
      <th>Last Name</th><td><input type="text" name="Last_Name" Value="<?=$stu['Last_Name'];?>" size="15"></td>
   </tr>
   <tr>
      <th>University_ID</th><td><input type="text" name="University_ID" Value="<?=$stu['University_ID'];?>" size="6"></td>
   </tr>
   <tr>
      <th>Stud.Status</th><td><input type="text" name="Status" Value="<?=$stu['Status'];?>" size="25"></td>
   </tr>
    <tr><th>Department</th><td colspan="3"><input type="text" name="Department" Value="<?=$stu['Department'];?>" size="35"></td></tr>
   <tr><th>Email</th><td colspan="3"><input type="text" name="Email" Value="<?=$stu['Email'];?>" size="35"></td></tr>
   <tr><th>English Level</th><td><input type="text" name="English_Level" Value="<?=$stu['English_Level'];?>" size="35"></td></tr>
   <tr>
      <th>Skills Reqd.</th><td colspan="3" style="text-align:justify;">
         <input type="checkbox" name="Writing" Value="1" <?=($stu['Writing']==1?' Checked':'');?>> Writing &nbsp;
         <input type="checkbox" name="Speaking" Value="1" <?=($stu['Speaking']==1?' Checked':'');?>> Speaking &nbsp;
         <input type="checkbox" name="Pronunc" Value="1" <?=($stu['Pronunc']==1?' Checked':'');?>> Pronunciation &nbsp;
         <input type="checkbox" name="Culture" Value="1" <?=($stu['Culture']==1?' Checked':'');?>> Culture &nbsp;
      </td>
   </tr>
   <tr>
      <th>Attendance</th><td><input type="text" name="Attendance" Value="<?=$stu['Attendance'];?>" size="8"></td>
   </tr>
   <tr>
      <th>Referred by</th><td><input type="text" name="Referrer" Value="<?=$stu['Referrer'];?>" size="20"></td>
   </tr>
   <tr><th>Staff Name</th><td colspan="3"><input type="text" name="Staff_Name" Value="<?=$stu['Staff_Name'];?>" size="25"></td></tr>
   <tr><th>Staff Dept</th><td colspan="3"><input type="text" name="Staff_Dept" Value="<?=$stu['Staff_Dept'];?>" size="25"></td></tr>
   <tr><th>Staff Email</th><td colspan="3"><input type="text" name="Staff_Email" Value="<?=$stu['Staff_Email'];?>" size="25"></td></tr>
   <tr><th>Student Name</th><td colspan="3"><input type="text" name="Student_Name" Value="<?=$stu['Student_Name'];?>" size="25"></td></tr>
   <tr><th>Student Dept</th><td colspan="3"><input type="text" name="Student_Dept" Value="<?=$stu['Student_Dept'];?>" size="25"></td></tr>
   <tr><th>Student Email</th><td colspan="3"><input type="text" name="Student_Email" Value="<?=$stu['Student_Email'];?>" size="25"></td></tr>
   <tr>
      <th>Other</th>
      <td colspan="3" align="justify">
         <input type="checkbox" name="Erasmus" Value="1" <?=($stu['Erasmus']==1?' Checked':'');?>> Erasmus  &nbsp; 
         <input type="checkbox" name="Partners" Value="1" <?=($stu['Partners']==1?' Checked':'');?>> Partner &nbsp; 
         <input type="checkbox" name="Removed" Value="1" <?=($stu['Removed']==1?' Checked':'');?>> Removed &nbsp; 
      </td>
   </tr>
   <tr><th valign="top"><b>NOTES</b></th><td colspan="3"><textarea name="Notes" cols="70" rows="4"><?=$stu['Notes'];?></textarea></td></tr>
   <tr>
      <td colspan="4" align="right">
         <input type="button" value="Cancel" onclick="form.action='/ins/studentslist'; form.submit();">
         <input type="submit" value="SAVE"></td>
   <tr>

</table>
      
   </form>

<div class="spacer"></div>
</div> <!-- End Content -->

           