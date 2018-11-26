<div class="nabacontent" >
<style>
td {font-size:smaller; font-weight:lighter;}
th {font-size:smaller; font-weight:lighter;}
</style>
<h3>BA LCC Attendance</h3>
<form name="attendance" action="/ba/attendance" method="post">
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
       Course Year: <select name="Course_Year" onchange="form.submit();">
               <option <?=($Course_Year=='1'?'selected':'');?>>1</option>
               <option <?=($Course_Year=='2'?'selected':'');?>>2</option>
               <option <?=($Course_Year=='3'?'selected':'');?>>3</option>
            </select>
   </legend>
   <table id="Classes" width="100%" >
      <tr>
         <td colspan="2">
            Select Course 
            <select name="Course_ID" onchange="form.submit();">
                <option value=""></option><?php 
      foreach($courses as $Course){?>
               <option value="<?=$Course['Course_ID'];?>" <?=($Course['Course_ID']==$Course_ID?'selected':'');?>>
                  <?=$Course['Course_ID'];?> - <?=$Course['Course_Name'];?> 
               </option><?php
      }?>      
            </select>  <!--
            Select Module 
            <select name="Module_ID" onchange="form.submit();">
               <option value=""></option><?php 
      foreach($modules as $Module){?>
               <option value="<?=$Module['Module_ID'];?>" <?=($Module['Module_ID']==$Module_ID?'selected':'');?>>
                  <?=$Module['Module_ID'];?> 
                  <?=$Module['Module_Name'];?> 
               </option><?php 
      }?>      
            </select>
            Class Type 
            <select name="Class_Type" onchange="form.submit();">
               <option value=""></option><?php 
      foreach($classtypes as $classtype){?>
               <option value="<?=$classtype['Class_Type'];?>" <?=($classtype['Class_Type']==$Class_Type?'selected':'');?>>
                  <?=$classtype['Class_Type'];?>
               </option><?php
      }?>
            </select>
         </td>
      </tr> 
      <tr>
         <td colspan="2">-->  &nbsp; 
            Select Student <!--[<?=$Student_ID;?>]: -->
            <select name="Student_ID" onchange="form.submit();">
               <option value=""></option><?php 
      foreach($students as $Student){?>
               <option value="<?=$Student['Student_ID'];?>" <?=($Student['Student_ID']==$Student_ID?'selected':'');?>>
                  <?=strtoupper($Student['Family_Name']);?> <?=$Student['First_Names'];?> [ <?=$Student['Student_ID'];?> ]
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
<form name="attendance" action="/ba/saveregister" method="post">
<input name="Course_ID" type="hidden" value="<?=$Course_ID;?>" >
<input name="Academic_Year" type="hidden" value="<?=$Academic_Year;?>" >
<input name="Academic_Term" type="hidden" value="<?=$Academic_Term;?>" >

   <fieldset>
   <legend><b>Student Attendance</b></legend>
   <!--<div  style="height:150px; overflow:auto;">-->
      <div>
   <table id="Register" width="100%">
   <tr>
      <th>Module</th>
      <th>Class Type</th>
      <th>Day</th>
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
      <td align="right">Missed</td>
      <td align="right">Attendance</td><!--
      <th>Note</th>-->
      
   </tr><?php 
   if(isset($attendance)){
      foreach($attendance as $record){?>
   <tr>     
       <td><b><?=$record['Module_ID'];?></b></td>
      <td><b><?=$record['Class_Type'];?></b></td>
      <td><b><?=$record['Class_Day'];?></b></td>

      <td><input disabled type="checkbox" name="Wk1Id<?=$record['Student_ID'];?>" value="1" <?=($record['Wk1']==1?'Checked':'');?>></td>
      <td><input disabled type="checkbox" name="Wk2Id<?=$record['Student_ID'];?>" value="1" <?=($record['Wk2']==1?'Checked':'');?>></td>
      <td><input disabled type="checkbox" name="Wk3Id<?=$record['Student_ID'];?>" value="1" <?=($record['Wk3']==1?'Checked':'');?>></td>
      <td><input disabled type="checkbox" name="Wk4Id<?=$record['Student_ID'];?>" value="1" <?=($record['Wk4']==1?'Checked':'');?>></td>
      <td><input disabled type="checkbox" name="Wk5Id<?=$record['Student_ID'];?>" value="1" <?=($record['Wk5']==1?'Checked':'');?>></td>
      <td><input disabled type="checkbox" name="Wk6Id<?=$record['Student_ID'];?>" value="1" <?=($record['Wk6']==1?'Checked':'');?>></td>
      <td><input disabled type="checkbox" name="Wk7Id<?=$record['Student_ID'];?>" value="1" <?=($record['Wk7']==1?'Checked':'');?>></td>
      <td><input disabled type="checkbox" name="Wk8Id<?=$record['Student_ID'];?>" value="1" <?=($record['Wk8']==1?'Checked':'');?>></td>
      <td><input disabled type="checkbox" name="Wk9Id<?=$record['Student_ID'];?>" value="1" <?=($record['Wk9']==1?'Checked':'');?>></td>
      <td><input disabled type="checkbox" name="Wk10Id<?=$record['Student_ID'];?>" value="1" <?=($record['Wk10']==1?'Checked':'');?>></td> 
      <td align="right"><b><?=$record['Missed'];?></b></td> 
      <td align="right"><b><?=$record['Attendance'];?>%</b></td> <!--
      <td><input disabled type="radio" name="Comments" id="StudentRow" value="<?=$record['Comments'];?>"
                 onclick="ShowOnlyRow('Register','<?=$record['Student_ID'];?>');"></td>      -->
      
   </tr>
   <tr id="Comments<?=$record['Student_ID'];?>" Style="<?=($record['Comments']==''?'display:none;':'');?>">
      <td><b>Note</b></td>
      <td colspan="15"><input readonly type="text" size="100" name="Note<?=$record['Student_ID'];?>" value="<?=$record['Comments'];?>"></td>
   </tr>
   <?php
      }
   }?><!--<tr>
      <td colspan="16" align="right">
         <input type="button" value="Cancel" onclick="form.action='/ins/registers'; this.form.submit();">
         <input type="button" value=" Save Register " onclick="this.form.submit();" 
                style="font-size:larger; font-weight:bolder;">
      </td>
   </tr>-->
   </table>
         
   </div>
   
   </fieldset>
<br/><small>NOTE: Attendance percentage is against total number of classes recorded as being attended by any other student, 
    i.e. percentage is not reduced if no register was taken.</small>    
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
