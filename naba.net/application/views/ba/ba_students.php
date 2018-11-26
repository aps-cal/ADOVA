<div class="nabacontent">
<h3>BA LCC Students</h3>
<style>
td {font-size:smaller; font-weight:normal;}
th {font-size:smaller; font-weight:lighter;}
</style>
<form name="studentlist" action="/ba/students" method="post">
<input type="hidden" id="List_Order" name="List_Order" value="<?=$List_Order;?>">
<fieldset><legend>Classes 
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
            </select>  
            Select Module 
            <select name="Module_ID" onchange="form.submit();">
               <option value=""></option><?php 
      foreach($modules as $Module){?>
               <option value="<?=$Module['Module_ID'];?>" <?=($Module['Module_ID']==$Module_ID?'selected':'');?>>
                  <?=$Module['Module_ID'];?> 
                  <?=$Module['Module_Name'];?> 
               </option><?php 
      }?>      
            </select><!--
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
         <td colspan="2">  &nbsp; 
            Select Class 
            <select name="Class_ID" onchange="form.submit();">
               <option value=""></option><?php 
      foreach($classes as $Class){?>
               <option value="<?=$Class['Class_ID'];?>" <?=($Class['Class_ID']==$Class_ID?'selected':'');?>>
                  <?=$Class['Class_Day'];?> <?=$Class['Class_Start'];?> 
                  <?=$Class['Module_ID'];?> <?=$Class['Module_Name'];?> - 
                  <?=$Class['Class_Type'];?>
               </option>
         <?php
      }?>
            </select>-->
         </td>
      </tr>
      <tr>
         <td colspan="2">
            <?=((isset($Class_Notes) and !$Class_Notes =='')?"<h3>Notes</h3><pre>$Class_Notes</pre>":"");?> 
         </td>
      </tr>
      </table>
<!--<div  style="height:400px;  width:800px; overflow:auto;">-->
<table id="Students">
<!--   <tr id="Heading">
      <th colspan="11" style="text-align:right;">
         Academic Year 
         <select name="Academic_Year" onChange="form.List_Order.value='University_ID'; form.submit();">
            <option <?=($Academic_Year=='2012/13'?'Selected':'');?>>2012/13</option>
            <option <?=($Academic_Year=='2013/14'?'Selected':'');?>>2013/14</option>
            <option <?=($Academic_Year=='2014/15'?'Selected':'');?>>2014/15</option>
            <option <?=($Academic_Year=='2016/17'?'Selected':'');?>>2016/17</option>
            <option <?=($Academic_Year=='2018/19'?'Selected':'');?>>2018/19</option>
         </select> Term 
         <select name="Academic_Term" onChange="form.List_Order.value='University_ID'; form.submit();">
            <option <?=($Academic_Term=='AU'?'Selected':'');?>>AU</option>
            <option <?=($Academic_Term=='SP'?'Selected':'');?>>SP</option>
            <option <?=($Academic_Term=='SU'?'Selected':'');?>>SU</option>
         </select>
      </th>
   </tr>-->
   <tr id="Heading">
      <th colspan="2"><input type="button" value="Student ID" 
         onclick="form.List_Order.value='Student_ID'; form.submit();"></th>
      <th><input type="button" value="Student Name" onclick="form.List_Order.value='Family_Name, First_Names'; form.submit();" width="100%"></th>
      <th><input type="button" value="Email Address" onclick="form.List_Order.value='Email'; form.submit();" width="100%"></th>
      
   </tr><?php 
      foreach($students as $stu){?>
   <tr id="Summary">
      <td><input name="Student_ID" type="radio" value="<?=$stu['Student_ID'];?>"
           onclick="form.action='/ba/ba_studentedit'; form.submit();"></td>
      <td><?=$stu['Student_ID'];?></td>
      <td><?=strtoupper($stu['Family_Name']).", ".$stu['First_Names'];?></td>
      <td><?=$stu['Email'];?></td>
   </tr>
   <tr id="Detail<?=$stu['Student_ID'];?>" Style="display:none;">
      <td colspan="5">
         <fieldset>
            <legend>Edit Student</legend>
            <style>
               td {font-weight:bold;}
               th {font-size:smaller; font-weight:lighter;}
            </style>      
         <table>
            <tr>
               <th>Last Name</th><td><?=strtoupper($stu['Family_Name']);?></td>
               <th>Year/Term</th><td><?=strtoupper($stu['Academic_Year']);?> <?=strtoupper($stu['Academic_Term']);?></td>
            </tr>
            <tr>  
               <th>First Name</th><td><?=$stu['First_Names'];?></td>
               <th>Email</th><td><?=$stu['Email'];?></td>
            </tr>
         </table></fieldset>
      </td>
   </tr><?php
      }?><tr><td colspan="11" align="right">This list has a total of <b><?=Count($students);?></b> students.</td><tr>
</table>
<!--</div>-->
This list has a total of <b><?=Count($students);?></b> students.</form>

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
/*
var hide= true;
function ShowhideRows(tableId){
var t = document.getElementById(tableId);
var len = t.rows.length;
var rowStyle = (hide)? "none":"";
for(i=1 ; i< len; i++){
t.rows[i].style.display = rowStyle;
}
}
*/
</script>