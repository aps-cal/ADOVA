<div class="nabacontent" width="800px" >
<h3>In-sessional Classes</h3>
<style>
td {font-size:smaller; font-weight:lighter;}
th {font-size:smaller; font-weight:lighter;}
</style>
<script>
function submitForm(form){
   form.Class_ID.value = <?=$Class_ID;?>; 
   form.submit();
}
</script>
<form name="grouplist" action="/ins/classes" method="post">
   <input type="hidden" id="Class_ID" name="Class_ID" value="0"> 
   <input type="hidden" name="Class_No" value="0"> 
   <input type="hidden" name="Academic_Year" value="2012/13"> 
   <input type="hidden" name="Academic_Term" value="AU"> 
   <input type="hidden" name="List_Order" value="<?=$List_Order;?>"> 
   <input type="hidden" name="Assigned_Order" value="<?=$Assigned_Order;?>"> 
   <input type="hidden" name="Unassigned_Order" value="<?=$Unassigned_Order;?>"> 
<div  style="height:200px; width:800px; overflow:auto;">   
<table id="Students" width="100%" >
   <thead>
   <tr id="Heading">
      <th colspan="2"><input type="button" value="Number" 
         onclick="form.List_Order.value='Class_No'; submitForm(form);"></th>
      <th><input type="button" value="Subject" onclick="form.List_Order.value='Class_Subject'; submitForm(form);"></th>
      <th><input type="button" value="Instance" onclick="form.List_Order.value='Class_Instance'; submitForm(form);"></th>
      <th><input type="button" value="Class Size" onclick="form.List_Order.value='Class_Size'; submitForm(form);"></th>
      <th><input type="button" value="Room" onclick="form.List_Order.value='Class_Room'; submitForm(form);"></th>
      <th><input type="button" value="Tutor" onclick="form.List_Order.value='Class_Tutor_Inits'; submitForm(form);"></th>
      <th><input type="button" value="Day" onclick="form.List_Order.value='Class_Day'; submitForm(form);"></th>
      <th><input type="button" value="Start" onclick="form.List_Order.value='Class_Start'; submitForm(form);"></th>
      <th><input type="button" value="Finish" onclick="form.List_Order.value='Class_Finish'; submitForm(form);"></th>
      <th><input type="button" name="new" value=" new "onclick="form.action='/ins/classedit';
            form.Class_ID.value='';
            //form.Group_No.value='<?=$Next_Class_No;?>';
            form.Academic_Year.value='<?=$Academic_Year;?>'; 
            form.Academic_Term.value='<?=$Academic_Term;?>'; 
            form.submit();"/></th>
   </tr>
   </thead>
   <tbody><?php 
      foreach($classes as $Class){?>
   <tr id="Summary">
      <td><input id="ClassID" name="ClassID" type="radio" value="<?=$Class['Class_ID'];?>"
           onclick="form.Class_ID.value='<?=$Class['Class_ID'];?>'; 
           form.submit();" <?=($Class['Class_ID']==$Class_ID?'Checked':'');?>>
      </td>
      <td><?=$Class['Class_No'];?></td>
      <td><?=$Class['Class_Subject'];?></td>
      <td><?=$Class['Class_Instance'];?></td>
      <td><?=$Class['Class_Size'];?></td>
      <td><?=$Class['Class_Room'];?></td>
      <td><?=$Class['Class_Tutor_Inits'];?></td>
      <td><?=$Class['Class_Day'];?></td>
      <td><?=$Class['Class_Start'];?></td>
      <td><?=$Class['Class_Finish'];?></td>
      <th><input type="button" name="edit" value=" edit " 
         onclick="form.action='/ins/classedit';
            form.Class_ID.value='<?=$Class['Class_ID'];?>';
            form.Academic_Year.value='<?=$Class['Academic_Year'];?>'; 
            form.Academic_Term.value='<?=$Class['Academic_Term'];?>'; 
            form.submit();"/>
   </tr><?php
      }?>
   
   </tbody>
   <tfoot>
      <tr><td colspan="10" align="center">This table can be scrolled</td></tr>
   </tfoot>
   </table>
      </div>
</div>   
<div class="nabacontent" width="800px" >
   <fieldset>
   <legend><b>Class Students</b></legend>
   <div  style="height:150px; overflow:auto;">
   <table width="100%">
   <tr>
      <th colspan="2"><input type="button" value="Univ.ID" onclick="form.Assigned_Order.value='University_ID'; submitForm(form);"></th>
      <th><input type="button" value="Student name" onclick="form.Assigned_Order.value='Last_Name, First_Name'; submitForm(form);"></th>
      <th><input type="button" value="Department" onclick="form.Assigned_Order.value='Department'; submitForm(form);"></th>
      <th><input type="button" value="Level" onclick="form.Assigned_Order.value='English_Level'; submitForm(form);"></th>
      <th><input type="button" value="Attendance" onclick="form.Assigned_Order.value='Attendance DESC'; submitForm(form);"></th>
      <!--
      <th><input type="button" value="Wr." disabled></th>
      <th><input type="button" value="Sp." disabled></th>
      <th><input type="button" value="Pr." disabled></th>
      <th><input type="button" value="Cu." disabled></th>
      <th><input type="button" value="Pt." disabled></th>
      -->
      <th><input type="button" value="Wr." onclick="form.Assigned_Order.value='if(Writing=1,0,1)'; submitForm(form);" ></th>
      <th><input type="button" value="Sp." onclick="form.Assigned_Order.value='if(Speaking=1,0,1)'; submitForm(form);" ></th>
      <th><input type="button" value="Pr." onclick="form.Assigned_Order.value='if(Pronunc=1,0,1)'; submitForm(form);" ></th>
      <th><input type="button" value="Cu." onclick="form.Assigned_Order.value='if(Culture=1,0,1)'; submitForm(form);" ></th>
      <th><input type="button" value="Pt." onclick="form.Assigned_Order.value='if(Partners=1,0,1)'; submitForm(form);" ></th>
      <th><input type="button" value="Er." onclick="form.Assigned_Order.value='if(Erasmus=1,0,1)'; submitForm(form);" ></th>

      
   </tr><?php 
   if(isset($inclass)){
      foreach($inclass as $student){?>
   <tr>
      <td><input name="Drop_ID" value="<?=$student['Student_ID'];?>" type="radio" 
           onclick="
              form.Class_ID.value=<?=$Class_ID;?>; 
              form.action='/ins/dropstudent'; 
              submitForm(form);">
      <td><?=$student['University_ID'];?></td>
      <td><?=$student['First_Name']." ".strtoupper($student['Last_Name']);?></td>
      <td><?=$student['Department'];?></td>
      <td><?=$student['English_Level'];?></td>
      <td><?=$student['Attendance'];?></td>
      <td><?=($student['Writing']==1?'X':'');?></td>
      <td><?=($student['Speaking']==1?'X':'');?></td>
      <td><?=($student['Pronunc']==1?'X':'');?></td>
      <td><?=($student['Culture']==1?'X':'');?></td>
      <td><?=($student['Partners']==1?'X':'');?></td>
      <td><?=($student['Erasmus']==1?'X':'');?></td>
   </tr><?php
      }
   }?><!--
   <tr>
      <td colspan="11" align="right"><?php
      if(count($inclass)==0){?>
         <input  type="button" name="DropGroup" value=" Delete Group <?=$Class_ID;?> "
           onclick="form.Class_ID.value=<?=$Class_ID;?>; form.action='/ins/classdelete'; submitForm(form);"><?php
      } ?>
         <input  type="button" name="NotifyChanges" value=" Notify Changes "
           onclick="form.Class_ID.value=<?=$Class_ID;?>; form.action='/ins/notifychanges'; submitForm(form);">
      </td>
   </tr>-->
   </table>
   </div>
      <div align="right" width="100%"><?php
      if(count($inclass)==0){?>
         <input  type="button" name="DropGroup" value=" Delete Group <?=$Class_ID;?> "
           onclick="form.Class_ID.value=<?=$Class_ID;?>; form.action='/ins/classdelete'; submitForm(form);"><?php
      } ?>
         <input  type="button" name="NotifyChanges" value=" Notify Changes "
           onclick="form.Class_ID.value=<?=$Class_ID;?>; form.action='/ins/notifychanges'; submitForm(form);">
      </div>
   </fieldset><br/>
   <fieldset>
      <legend><b>Students [Not Assigned]</b></legend>
   <div  style="height:200px; overflow:auto;">
   <table width="100%">
   <tr>
      <th colspan="2"><input type="button" value="Univ.ID" onclick="form.Unassigned_Order.value='University_ID'; submitForm(form);"></th>
      <th><input type="button" value="Student name" onclick="form.Unassigned_Order.value='Last_Name, First_Name'; submitForm(form);"></th>
      <th><input type="button" value="Department" onclick="form.Unassigned_Order.value='Department'; submitForm(form);"></th>
      <th><input type="button" value="Level" onclick="form.Unassigned_Order.value='English_Level'; submitForm(form);"></th>
      <th><input type="button" value="Attendance" onclick="form.Unassigned_Order.value='Attendance DESC'; submitForm(form);"></th>
     <!-- 
      <th><input type="button" value="Wr." disabled></th>
      <th><input type="button" value="Sp." disabled></th>
      <th><input type="button" value="Pr." disabled></th>
      <th><input type="button" value="Cu." disabled></th>
      <th><input type="button" value="Pt." disabled></th>
      <th><input type="button" value="Pt." disabled></th>
      -->
      <th><input type="button" value="Wr." onclick="form.Unassigned_Order.value='if(Writing=1,0,1)'; submitForm(form);" ></th>
      <th><input type="button" value="Sp." onclick="form.Unassigned_Order.value='if(Speaking=1,0,1)'; submitForm(form);" ></th>
      <th><input type="button" value="Pr." onclick="form.Unassigned_Order.value='if(Pronunc=1,0,1)'; submitForm(form);" ></th>
      <th><input type="button" value="Cu." onclick="form.Unassigned_Order.value='if(Culture=1,0,1)'; submitForm(form);" ></th>
      <th><input type="button" value="Pt." onclick="form.Unassigned_Order.value='if(Partners=1,0,1)'; submitForm(form);" ></th>
      <th><input type="button" value="Er." onclick="form.Unassigned_Order.value='if(Erasmus=1,0,1)'; submitForm(form);" ></th>


      
      
   </tr><?php 
   if(isset($noclass)){
      foreach($noclass as $student){?>
   <tr>
      <td><input name="Add_ID" value="<?=$student['Student_ID'];?>" type="radio" 
           onclick="form.Class_ID.value = <?=$Class_ID;?>; 
              form.action='/ins/addstudent'; submitForm(form);">
      <td><?=$student['University_ID'];?></td>
      <td><?=$student['First_Name']." ".strtoupper($student['Last_Name']);?></td>
      <td><?=$student['Department'];?></td>
      <td><?=$student['English_Level'];?></td>
      <td><?=$student['Attendance'];?></td>
      <td><?=($student['Writing']==1?'X':'');?></td>
      <td><?=($student['Speaking']==1?'X':'');?></td>
      <td><?=($student['Pronunc']==1?'X':'');?></td>
      <td><?=($student['Culture']==1?'X':'');?></td>
      <td><?=($student['Partners']==1?'X':'');?></td>
      <td><?=($student['Erasmus']==1?'X':'');?></td>
   </tr><?php
      }
   }?>
   </table>
    
   </div>
   <p>There are a total of <b><?=Count($noclass);?></b> still not allocated to a class of this type.</p>
   </fieldset>
</form>
<div class="spacer"></div>
</div> <!-- End Content -->
<script language="javascript">
function ShowOnlyRow(TableID,RowID){
   //alert(TableID);
   var t = document.getElementById(TableID);
   //alert(t.id);
   var l = t.rows.length;
   //alert(l);
   for(i=0; i<=l; i++){
      //alert(t.rows[i].id);
      if(String(t.rows[i].id).substring(0,6)=='Detail'){
         t.rows[i].style.display='none';
         //alert(String(t.rows[i].id).substring(6));
         if(String(t.rows[i].id).substring(6)==RowID){
            t.rows[i].style.display='';
         }
      }
   }
}
</script>
