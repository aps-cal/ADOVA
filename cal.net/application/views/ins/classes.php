<div class="nabacontent" width="800px">
<h3>In-sessional Classes 2 </h3>
<style>
td {font-weight:bold;}
th {font-size:smaller; font-weight:lighter;}
</style>
<fieldset><legend>Classes</legend>
<form name="grouplist" action="/ins/classes" method="post">
<input type="hidden" name="Class_ID" value="0"> 
<input type="hidden" name="Class_No" value="0"> 
<input type="hidden" name="Academic_Year" value="2012/13"> 
<input type="hidden" name="Academic_Term" value="AU"> 
<input type="hidden" name="List_Order" value="<?=$List_Order;?>"> 
<table id="Students" width="100%">
   <thead>
   <tr id="Heading">
      <th colspan="2"><input type="button" value="Number" onclick="form.List_Order.value='C.Class_No, D.List_Order, CT.Class_Start'; form.submit();"></th>
      <th><input type="button" value="Subject" onclick="form.List_Order.value='C.Class_Subject, D.List_Order, CT.Class_Start'; form.submit();"></th>
      <th><input type="button" value="Instance" onclick="form.List_Order.value='C.Class_Instance, D.List_Order, CT.Class_Start'; form.submit();"></th>
      <th><input type="button" value="Room" onclick="form.List_Order.value='CT.Class_Room, D.List_Order, CT.Class_Start'; form.submit();"></th>
      <th><input type="button" value="Tutor" onclick="form.List_Order.value='CT.Class_Tutor_Inits, D.List_Order, CT.Class_Start'; form.submit();"></th>
      <th><input type="button" value="Day" onclick="form.List_Order.value='D.List_Order, CT.Class_Day'; form.submit();"></th>
      <th><input type="button" value="Start" onclick="form.List_Order.value='CT.Class_Start, D.List_Order'; form.submit();"></th>
      <th><input type="button" value="Finish" onclick="form.List_Order.value='Class_Finish, D.List_Order'; form.submit();"></th>
      <th><input type="button" name="new" value=" new "onclick="form.action='/ins/classedit';
            form.Group_No.value='<?=$Next_Class_No;?>';
            form.Academic_Year.value='<?=$Academic_Year;?>'; 
            form.Academic_Term.value='<?=$Academic_Term;?>'; 
            form.submit();"/></th>
   </tr>
   </thead>
   <tbody height="10px"><?php 
      foreach($classes as $Class){?>
   <tr id="Summary">
      <td><input name="ClassID" type="radio" value="<?=$Class['Class_ID'];?>"
           onclick="form.Class_ID.value='<?=$Class['Class_ID'];?>'; 
           form.submit();" <?=($Class['Class_ID']==$Class_ID?'Checked':'');?>>
      </td>
      <td><?=$Class['Class_No'];?></td>
      <td><?=$Class['Class_Subject'];?></td>
      <td><?=$Class['Class_Instance'];?></td>
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
   <fieldset>
   <legend><b>Class Students</b></legend>
   <table width="100%">
   <tr>
      <th></th><th>Univ.ID</th><th>Student Name</th><th>Department</th><th>Level</th><th>Attendance</th>
      <th>Writing</th><th>Speaking</th><th>Pronunc</th><th>Culture</th><th>Partners</th>
      
   </tr><?php 
   if(isset($inclass)){
      foreach($inclass as $student){?>
   <tr>
      <td><input name="Drop_ID" value="<?=$student['Student_ID'];?>" type="radio" 
           onclick="
              form.Class_ID.value=<?=$Class_ID;?>; 
              form.action='/ins/dropstudent'; 
              form.submit();">
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
   </tr><?php
      }
      if(count($inclass)==0){?>
   <tr>
      <td colspan="11" align="right">
         <input  type="button" name="DropGroup" value=" Delete Group <?=$Class_ID;?> "
           onclick="form.Class_ID.value=<?=$Class_ID;?>; form.action='/ins/classdelete'; form.submit();">
      </td>
   </tr>
      <?php
      }
   }?>
   </table>
   </fieldset><br/>
   <fieldset>
      <legend><b>Students [Not Assigned]</b></legend>
   <table width="100%">
   <tr>
      <th></th><th>Univ.ID</th><th>Student Name</th><th>Department</th><th>Level</th><th>Attendance</th>
      <th>Writing</th><th>Speaking</th><th>Pronunc</th><th>Culture</th><th>Partners</th>
      
   </tr><?php 
   if(isset($noclass)){
      foreach($noclass as $student){?>
   <tr>
      <td><input name="Add_ID" value="<?=$student['Student_ID'];?>" type="radio" 
           onclick="form.Class_ID.value = <?=$Class_ID;?>; 
              form.action='/ins/addstudent'; form.submit();">
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
   </tr><?php
      }
   }?>
   </table>
   </fieldset>  
   <br/>
   <fieldset>
      <legend><b>Students [Removed or Withdrawn]</b></legend>
   <table width="100%">
   <tr>
      <th></th><th>Univ.ID</th><th>Student Name</th><th>Department</th><th>Level</th><th>Attendance</th>
      <th>Writing</th><th>Speaking</th><th>Pronunc</th><th>Culture</th><th>Partners</th>
      
   </tr><?php 
   if(isset($withdrawn)){
      foreach($withdrawn as $student){?>
   <tr>
      <td><input name="Add_ID" value="<?=$student['Student_ID'];?>" type="radio" 
           onclick="form.Class_ID.value = <?=$Class_ID;?>; 
              form.action='/ins/addstudent'; form.submit();">
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
   </tr><?php
      }
   }?>
   </table>
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
