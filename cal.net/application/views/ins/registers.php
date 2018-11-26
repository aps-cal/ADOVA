<div class="nabacontent" >
<style>
td {font-size:smaller; font-weight:lighter;}
th {font-size:smaller; font-weight:lighter;}
</style>
<h3>In-sessional Registers</h3>
<form name="registers" action="/ins/registers" method="post">
   <fieldset>
   <legend>Classes 
      <select name="Academic_Year" onchange="form.submit();">
               <option <?=($Academic_Year=='2012/13'?'selected':'');?>>2012/13</option>
               <option <?=($Academic_Year=='2013/14'?'selected':'');?>>2013/14</option>
               <option <?=($Academic_Year=='2014/15'?'selected':'');?>>2014/15</option>
               <option <?=($Academic_Year=='2015/16'?'selected':'');?>>2015/16</option>
            </select>
       Term: <select name="Academic_Term" onchange="form.submit();">
               <option <?=($Academic_Term=='AU'?'selected':'');?>>AU</option>
               <option <?=($Academic_Term=='SP'?'selected':'');?>>SP</option>
               <option <?=($Academic_Term=='SU'?'selected':'');?>>SU</option>
            </select>
   </legend>
   <table id="Classes" width="100%" >
   <!--   <tr>
         <td>
            Academic Year: 
         <select name="Academic_Year" onchange="form.submit();">
               <option <?=($Academic_Year=='2012/13'?'selected':'');?>>2012/13</option>
               <option <?=($Academic_Year=='2013/14'?'selected':'');?>>2013/14</option>
               <option <?=($Academic_Year=='2014/15'?'selected':'');?>>2014/15</option>
               <option <?=($Academic_Year=='2015/16'?'selected':'');?>>2015/16</option>
            </select>
         </td>
         <td>
            Academic Term: <select name="Academic_Term" onchange="form.submit();">
               <option <?=($Academic_Term=='AU'?'selected':'');?>>AU</option>
               <option <?=($Academic_Term=='SP'?'selected':'');?>>SP</option>
               <option <?=($Academic_Term=='SU'?'selected':'');?>>SU</option>
            </select>
         </td>
      </tr>-->
      <tr>
         <td colspan="2">
            Select Class <!--[<?=$Class_ID;?>]: -->
            <select name="Class_ID" onchange="form.submit();">
               <option value=""></option><?php 
      foreach($classes as $Class){?>
               <option value="<?=$Class['Class_ID'];?>" <?=($Class['Class_ID']==$Class_ID?'selected':'');?>>
                  <?=$Class['Class_No'];?> 
                  <?=$Class['Class_Subject'];?> 
                  <?=$Class['Class_Instance'];?>
                  <?=$Class['Class_Day'];?>
                  <?=$Class['Class_Start'];?>
                  Room <?=$Class['Class_Room'];?>
                  Tutor <?=$Class['Class_Tutor_Inits'];?>
               </option>
         <?php
      }?>
            </select>
         </td>
      </tr>
      <tr>
         <td colspan="2">
            <?=((isset($Class_Notes) and !$Class_Notes =='')?"<h3>Notes</h3><pre>$Class_Notes</pre>":"");?> 
         </td>
      </tr>
      </table>
   </fieldset>
</form>
</div>   
<div class="nabacontent" width="800px" >
<form name="registers" action="/ins/saveregister" method="post">
<input name="Class_ID" type="hidden" value="<?=$Class_ID;?>" >
<input name="Academic_Year" type="hidden" value="<?=$Academic_Year;?>" >
<input name="Academic_Term" type="hidden" value="<?=$Academic_Term;?>" >
<input name="Register_Order" type="hidden" value="<?=$Register_Order;?>" >

   <fieldset>
   <legend><b>Class Students</b></legend>
   <!--<div  style="height:150px; overflow:auto;">-->
      <div>
   <table id="Register" width="100%">
   <tr>
      <th><input type="button" value="Univ.ID" onclick="form.Register_Order.value='University_ID'; form.submit();"></th>
      <th><input type="button" value="Last name" onclick="form.Register_Order.value='Last_Name'; form.submit();"></th>
      <th><input type="button" value="First name" onclick="form.Register_Order.value='First_Name'; form.submit();"></th>
      <th><input type="button" value="Department" onclick="form.Register_Order.value='Department'; form.submit();"></th>
      <th><input type="button" value="Attendance" onclick="form.Register_Order.value='Attendance DESC'; form.submit();"></th>
      <th>Wk1</th>
      <th>Wk2</th>
      <th>Wk3</th>
      <th>Wk4</th>
      <th>Wk5</th>
      <th>Wk6</th>
      <th>Wk7</th>
      <th>Wk8</th>
      <th>Wk9</th>
      <th>Wk10</th>
      <th>Note</th>
      
   </tr><?php 
   if(isset($register)){
      foreach($register as $student){?>
   <tr>     
      <td><?=$student['University_ID'];?></td>
      <td><?=strtoupper($student['Last_Name']);?></td>
      <td><?=$student['First_Name'];?></td>
      <td><?=$student['Department'];?></td>
      <td><?=$student['Attendance'];?></td>
      <td><input type="checkbox" name="Wk1Id<?=$student['Student_ID'];?>" value="1" <?=($student['Wk1']==1?'Checked':'');?>></td>
      <td><input type="checkbox" name="Wk2Id<?=$student['Student_ID'];?>" value="1" <?=($student['Wk2']==1?'Checked':'');?>></td>
      <td><input type="checkbox" name="Wk3Id<?=$student['Student_ID'];?>" value="1" <?=($student['Wk3']==1?'Checked':'');?>></td>
      <td><input type="checkbox" name="Wk4Id<?=$student['Student_ID'];?>" value="1" <?=($student['Wk4']==1?'Checked':'');?>></td>
      <td><input type="checkbox" name="Wk5Id<?=$student['Student_ID'];?>" value="1" <?=($student['Wk5']==1?'Checked':'');?>></td>
      <td><input type="checkbox" name="Wk6Id<?=$student['Student_ID'];?>" value="1" <?=($student['Wk6']==1?'Checked':'');?>></td>
      <td><input type="checkbox" name="Wk7Id<?=$student['Student_ID'];?>" value="1" <?=($student['Wk7']==1?'Checked':'');?>></td>
      <td><input type="checkbox" name="Wk8Id<?=$student['Student_ID'];?>" value="1" <?=($student['Wk8']==1?'Checked':'');?>></td>
      <td><input type="checkbox" name="Wk9Id<?=$student['Student_ID'];?>" value="1" <?=($student['Wk9']==1?'Checked':'');?>></td>
      <td><input type="checkbox" name="Wk10Id<?=$student['Student_ID'];?>" value="1" <?=($student['Wk10']==1?'Checked':'');?>></td> 
      <td><input type="radio" name="Comments" id="StudentRow" value="<?=$student['Comments'];?>"
                 onclick="ShowOnlyRow('Register','<?=$student['Student_ID'];?>');"></td>      
      
   </tr>
   <tr id="Comments<?=$student['Student_ID'];?>" Style="<?=($student['Comments']==''?'display:none;':'');?>">
      <td><b>Note</b></td>
      <td colspan="15"><input type="text" size="100" name="Note<?=$student['Student_ID'];?>" value="<?=$student['Comments'];?>"></td>
   </tr>
   <?php
      }
   }?><tr>
      <td colspan="16" align="right">
         <!--<input type="textarea" cols="800" rows="2"
                id="Comments" value="">-->
         <input type="button" value="Cancel" onclick="form.action='/ins/registers'; this.form.submit();">
         <input type="button" value=" Save Register " onclick="this.form.submit();" 
                style="font-size:larger; font-weight:bolder;">
      </td>
   </tr>
   </table>
   </div>
   </fieldset><br/>   
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
      if(String(t.rows[i].id).substring(0,8)=='Comments'){
         t.rows[i].style.display='none';
         //alert(String(t.rows[i].id).substring(6));
         if(String(t.rows[i].id).substring(8)==RowID){
            t.rows[i].style.display='';
         }
      }
   }
}
function Left(str, n){
	if (n <= 0)
	    return "";
	else if (n > String(str).length)
	    return str;
	else
	    return String(str).substring(0,n);
}
function Right(str, n){
    if (n <= 0)
       return "";
    else if (n > String(str).length)
       return str;
    else {
       var iLen = String(str).length;
       return String(str).substring(iLen, iLen - n);
    }   
}
</script>
