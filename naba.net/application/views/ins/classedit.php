<div class="nabacontent">
<h3>In-sessional Class Edit</h3>
<form name="classedit" action="/ins/classsave" method="post">
   <input type="hidden" name="Class_ID" value="<?=$class['Class_ID'];?>">
   <input type="hidden" name="Class_Time_ID" value="0">
   <fieldset>
   <legend> Edit Group </legend>
   <style>
      td {font-weight:bold;}
      th {font-size:smaller; font-weight:lighter;}
   </style>      
   <table>
   <tr>
      <th>Academic Year / Term <?=$Academic_Year;?></th>
      <td>
         <select name="Academic_Year">
            <option value="2012/13" <?=($Academic_Year=='2012/13'?'Selected':'');?>>2012/13</option>
            <option value="2013/14" <?=($Academic_Year=='2013/14'?'Selected':'');?>>2013/14</option>
            <option value="2014/15" <?=($Academic_Year=='2014/15'?'Selected':'');?>>2014/15</option>
            <option value="2015/16" <?=($Academic_Year=='2015/16'?'Selected':'');?>>2015/16</option>
            <option value="2016/17" <?=($Academic_Year=='2016/17'?'Selected':'');?>>2016/17</option>
         </select> / 
         <select name="Academic_Term">
            <option value="AU" <?=($Academic_Term=='AU'?'Selected':'');?>>AU</option>
            <option value="SP" <?=($Academic_Term=='SP'?'Selected':'');?>>SP</option>
            <option value="SU" <?=($Academic_Term=='SU'?'Selected':'');?>>SU</option>
         </select>
      </td>
      <td>NOTES TO CLASS TEACHER - Displayed on the Register Page
      </td>
   </tr>
   <tr>
      <th>Subject</th>
      <td><input type="text" name="Class_Subject" Value="<?=$class['Class_Subject'];?>" size="25"></td>
      <td rowspan="4" valign="top">
         <textarea name="Class_Notes" cols="50" rows="12" ><?=$class['Class_Notes'];?>
         </textarea>
      </td>
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
            <option value="G" <?=($class['Class_Instance']=='G'?'Selected':'');?>>G</option>
            <option value="H" <?=($class['Class_Instance']=='H'?'Selected':'');?>>H</option>
            <option value="I" <?=($class['Class_Instance']=='I'?'Selected':'');?>>I</option>
         </select> &nbsp; 
         List Order 
         <input type="text" name="Class_List_Order" Value="<?=$class['Class_List_Order'];?>" size="3">
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
   
   <tr><td>Class Times</td></tr>
   <tr>
      <td colspan="2">
         <table>
            <tr>
               <th>Day</th><th>Start</th><th>Finish</th><th>Room</th><th>Tutor</th><th></th>
            </tr><?php 
   if(isset($classtimes)){
      foreach($classtimes as $classtime){?>
            <tr>
               <td><?=$classtime['Class_Day'];?></td>
               <td><?=$classtime['Class_Start'];?></td>
               <td><?=$classtime['Class_Finish'];?></td>
               <td><?=$classtime['Class_Room'];?></td>
               <td><?=$classtime['Class_Tutor_Inits'];?></td>
               <td><input name="DelTime" value=" Del " type="button" 
                     onclick="form.Class_Time_ID.value=<?=$classtime['Class_Time_ID'];?>; form.action='/ins/delclasstime'; form.submit();"
                     >
                              </td></td>
            </tr>
           
      <?php
      }
   }?>
<!--
            <tr>
               <td>
                  <select name="Class_Day">
                     <option value="Monday" <?=($classtime['Class_Day']=='Monday'?'Selected':'');?>>Monday</option>
                     <option value="Tuesday" <?=($class['Class_Day']=='Tuesday'?'Selected':'');?>>Tuesday</option>
                     <option value="Wednesday" <?=($class['Class_Day']=='Wednesday'?'Selected':'');?>>Wednesday</option>
                     <option value="Thursday" <?=($class['Class_Day']=='Thursday'?'Selected':'');?>>Thursday</option>
                     <option value="Friday" <?=($class['Class_Day']=='Friday'?'Selected':'');?>>Friday</option>
                     <option value="Saturday" <?=($class['Class_Day']=='Saturday'?'Selected':'');?>>Saturday</option>
                  </select>
               </td>
               <td><input type="time" name="Class_Start" Value="<?=$class['Class_Start'];?>" size="4"></td>
               <td><input type="time" name="Class_Finish" Value="<?=$class['Class_Finish'];?>" size="4"></td>
 
               <td>
                  <input type="text" name="Class_Room" Value="<?=$class['Class_Room'];?>" size="10">
               </td>
               <td><input type="text" name="Class_Tutor_Inits" Value="<?=$class['Class_Tutor_Inits'];?>" size="6"></td>
               <td><input name="Add_ID" value="<?=$classtime['Class_Time_ID'];?>" type="button" 
                     onclick="form.Class_Time_ID.value = <?=$Class_Time_ID;?>; 
                     form.action='/ins/delclasstime'; form.submit();">
                              </td>
           </tr>             
         
-->           
           <tr>
               <td>
                  <select name="Class_Day">
                     <option value=""></option>
                     <option value="Monday">Monday</option>
                     <option value="Tuesday">Tuesday</option>
                     <option value="Wednesday">Wednesday</option>
                     <option value="Thursday">Thursday</option>
                     <option value="Friday">Friday</option>
                     <option value="Saturday">Saturday</option>
                  </select>
               </td>
               <td><input type="time" name="Class_Start" Value="" size="4" onfocus="if(this.value=='')this.value='00:00';"></td>
               <td><input type="time" name="Class_Finish" Value="" size="4" onfocus="if(this.value=='')this.value='00:00';"></td>
 
               <td><!--<select name="Class_Room">
            <option></option><?php
//      foreach($rooms as $room)?>
            <option value="<?=''//$room['Room_ID'];?>" <?=''//($class['Class_Room']=='<?=$room['Room_ID'];?>'?'Selected':'');?>><?=''//$room['Room_ID'];?></option><?php
//      }?>
         </select>-->
                  <input type="text" name="Class_Room" Value="" size="10">
               </td>
               <td><input type="text" name="Class_Tutor_Inits" Value="" size="6"></td>
               <td><input name="AddTime" value=" Add " type="button" onclick="
                  if(form.Class_Day.value==''){
                     alert('Please enter a Day');
                  } else if(form.Class_Start.value=='' || form.Class_Start.value=='00:00'){
                     alert('Please enter Start Time');
                  } else if(form.Class_Finish.value=='' || form.Class_Finish.value=='00:00'){
                     alert('Please enter Finish Time');
                  } else if(form.Class_Room.value=='' ){
                     alert('Please enter Class Room');
                  } else {
                     form.action='/ins/addclasstime'; form.submit();
                  }">
                     <!-- <?=$classtime['Class_Time_ID'];?>// form.Class_Time_ID.value = <?=$Class_Time_ID;?>; -->
                              </td>
           </tr>             
         
           

           
           
           
         </table>
      </td>
      <td align="right" valign="bottom"><input type="submit" value=" Save "></td>
   </tr>
   <tr>
      
   <tr>
</table>
</form>
<div class="spacer"></div>
</div> <!-- End Content -->

           