<div class="nabacontent">
<h3>In-sessional Students</h3>
<form name="classedit" action="/ins/classsave" method="post">
   <input type="hidden" name="Class_ID" value="<?=$class['Class_ID'];?>"
   <fieldset>
   <legend> Edit Group </legend>
   <style>
      td {font-weight:bold;}
      th {font-size:smaller; font-weight:lighter;}
   </style>      
   <table>
   <tr>
      <th>Academic Year / Term </th>
      <td>
         <select name="Academic_Year">
            <option value="2012/13" <?=($class['Academic_Year']=='2012/13'?'Selected':'');?>>2012/13</option>
            <option value="2013/14" <?=($class['Academic_Year']=='2013/14'?'Selected':'');?>>2013/14</option>
            <option value="2014/15" <?=($class['Academic_Year']=='2014/15'?'Selected':'');?>>2014/15</option>
         </select> / 
         <select name="Academic_Term">
            <option value="AU" <?=($class['Academic_Term']=='AU'?'Selected':'');?>>AU</option>
            <option value="SP" <?=($class['Academic_Term']=='SP'?'Selected':'');?>>SP</option>
            <option value="SU" <?=($class['Academic_Term']=='SU'?'Selected':'');?>>SU</option>
         </select>
      </td>
   </tr>
   <tr>
      <th>Subject</th><td><input type="text" name="Class_Subject" Value="<?=$class['Class_Subject'];?>" size="25"></td>
   </tr>
   <tr>
      <th>Class Number / Letter</th>
      <td>
         <input type="text" name="Class_No" Value="<?=$class['Class_No'];?>" size="2"> &nbsp; 
         <select name="Class_Instance">
            <option></option>
            <option value="A" <?=($class['Class_Instance']=='A'?'Selected':'');?>>A</option>
            <option value="B" <?=($class['Class_Instance']=='B'?'Selected':'');?>>B</option>
            <option value="C" <?=($class['Class_Instance']=='C'?'Selected':'');?>>C</option>
            <option value="D" <?=($class['Class_Instance']=='D'?'Selected':'');?>>D</option>
            <option value="E" <?=($class['Class_Instance']=='E'?'Selected':'');?>>E</option>
            <option value="F" <?=($class['Class_Instance']=='F'?'Selected':'');?>>F</option>
         </select>
      </td>
   </tr>
   <tr>
      <th valign="top">Class Type</th>
      <td style="text-align:justify;">
         <input type="radio" name="Class_Type" Value="Writing" <?=($class['Class_Type']=='Writing'?' Checked':'');?>> Writing <br>
         <input type="radio" name="Class_Type" Value="Speaking" <?=($class['Class_Type']=='Speaking'?' Checked':'');?>> Speaking <br>
         <input type="radio" name="Class_Type" Value="Pronunc" <?=($class['Class_Type']=='Pronunc'?' Checked':'');?>> Pronunciation <br>
         <input type="radio" name="Class_Type" Value="Culture" <?=($class['Class_Type']=='Culture'?' Checked':'');?>> Culture <br>
         <input type="radio" name="Class_Type" Value="Partners" <?=($class['Class_Type']=='Partners'?' Checked':'');?>> Partners <br>
         <input type="radio" name="Class_Type" Value="Erasmus" <?=($class['Class_Type']=='Erasmus'?' Checked':'');?>> Erasmus
      </td>
      
   </tr>
   <tr>
      <th>Class Room</th>
      <td><!--<select name="Class_Room">
            <option></option><?php
//      foreach($rooms as $room)?>
            <option value="<?=''//$room['Room_ID'];?>" <?=''//($class['Class_Room']=='<?=$room['Room_ID'];?>'?'Selected':'');?>><?=''//$room['Room_ID'];?></option><?php
//      }?>
         </select>-->
         <input type="text" name="Class_Room" Value="<?=$class['Class_Room'];?>" size="10">
      </td>
   </tr>
   <tr>
      <th>Tutor Inits</th><td><input type="text" name="Class_Tutor_Inits" Value="<?=$class['Class_Tutor_Inits'];?>" size="6"></td>
   </tr>
   <tr>
      <th>Day / Time </th>
      <td>
         <select name="Class_Day">
            <option value="Monday" <?=($class['Class_Day']=='Monday'?'Selected':'');?>>Monday</option>
            <option value="Tuesday" <?=($class['Class_Day']=='Tuesday'?'Selected':'');?>>Tuesday</option>
            <option value="Wednesday" <?=($class['Class_Day']=='Wednesday'?'Selected':'');?>>Wednesday</option>
            <option value="Thursday" <?=($class['Class_Day']=='Thursday'?'Selected':'');?>>Thursday</option>
            <option value="Friday" <?=($class['Class_Day']=='Friday'?'Selected':'');?>>Friday</option>
            <option value="Saturday" <?=($class['Class_Day']=='Saturday'?'Selected':'');?>>Saturday</option>
         </select>
         From 
         <input type="time" name="Class_Start" Value="<?=$class['Class_Start'];?>" size="4"> to 
         <input type="time" name="Class_Finish" Value="<?=$class['Class_Finish'];?>" size="4">
      </td>
   </tr>
   <tr>
      <th>List Order</th><td><input type="text" name="Class_List_Order" Value="<?=$class['Class_List_Order'];?>" size="3"></td>
   </tr>

   <tr>
      <td colspan="2" align="right"><input type="submit" value=" Save "></td>
   <tr>

</table>
      
   </form>

<div class="spacer"></div>
</div> <!-- End Content -->

           