<div class="nabacontent">
<h3>In-sessional Students</h3>
<style>
td {font-size:smaller; font-weight:normal;}
th {font-size:smaller; font-weight:lighter;}
</style>
<form name="studentlist" action="/ajax/students" method="post">
<input type="hidden" id="List_Order" name="List_Order" value="<?=$List_Order;?>">
<fieldset><legend>Registered Students
   <select name="Academic_Year" onChange="form.List_Order.value='University_ID'; form.submit();">
            <option <?=($Academic_Year=='2012/13'?'Selected':'');?>>2012/13</option>
            <option <?=($Academic_Year=='2013/14'?'Selected':'');?>>2013/14</option>
            <option <?=($Academic_Year=='2014/15'?'Selected':'');?>>2014/15</option>
            <option <?=($Academic_Year=='2015/16'?'Selected':'');?>>2015/16</option>
            <option <?=($Academic_Year=='2016/17'?'Selected':'');?>>2016/17</option>
            <option <?=($Academic_Year=='2017/18'?'Selected':'');?>>2017/18</option>
            <option <?=($Academic_Year=='2018/19'?'Selected':'');?>>2018/19</option>
            <option <?=($Academic_Year=='2019/20'?'Selected':'');?>>2019/20</option>
         </select> Term 
         <select name="Academic_Term" onChange="form.List_Order.value='University_ID'; form.submit();">
            <option <?=($Academic_Term=='AU'?'Selected':'');?>>AU</option>
            <option <?=($Academic_Term=='SP'?'Selected':'');?>>SP</option>
            <option <?=($Academic_Term=='SU'?'Selected':'');?>>SU</option>
         </select>
   </legend>
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
      <th colspan="2"><input type="button" value="University ID" 
         onclick="form.List_Order.value='University_ID'; form.submit();"></th>
      <th><input type="button" value="Student Name" onclick="form.List_Order.value='Last_Name, First_Name'; form.submit();" width="100%"></th>
      <th><input type="button" value="Email Address" onclick="form.List_Order.value='Email'; form.submit();" width="100%"></th>
      <th><input type="button" value="Department" onclick="form.List_Order.value='Department'; form.submit();" width="100%"></th>
      <th><input type="button" value="Wr." onclick="form.List_Order.value='if(Writing=1,0,1)'; form.submit();" width="100%"></th>
      <th><input type="button" value="Sp." onclick="form.List_Order.value='if(Speaking=1,0,1)'; form.submit();" width="100%"></th>
      <th><input type="button" value="Pr." onclick="form.List_Order.value='if(Pronunc=1,0,1)'; form.submit();" width="100%"></th>
      <th><input type="button" value="Cu." onclick="form.List_Order.value='if(Culture=1,0,1)'; form.submit();" width="100%"></th>
      <th><input type="button" value="Pt." onclick="form.List_Order.value='if(Partners=1,0,1)'; form.submit();" width="100%"></th>
      <th><input type="button" value="Er." onclick="form.List_Order.value='if(Erasmus=1,0,1)'; form.submit();" width="100%"></th>
   </tr><?php 
      foreach($students as $stu){?>
   <tr id="Summary">
      <td><input name="Student_ID" type="radio" value="<?=$stu['Student_ID'];?>"
           onclick="form.action='/ins/studentedit'; form.submit();"></td>
      <td><?=$stu['University_ID'];?></td>
      <td><?=strtoupper($stu['Last_Name']).", ".$stu['First_Name'];?></td>
      <td><?=$stu['Email'];?></td>
      <td><?=$stu['Department'];?></td>
      <td><?=($stu['Writing']==1?'X':'');?></td>
      <td><?=($stu['Speaking']==1?'X':'');?></td>
      <td><?=($stu['Pronunc']==1?'X':'');?></td>
      <td><?=($stu['Culture']==1?'X':'');?></td>
      <td><?=($stu['Partners']==1?'X':'');?></td>
      <td><?=($stu['Erasmus']==1?'X':'');?></td>
      
   </tr>
   <tr id="Detail<?=$stu['Submission_ID'];?>" Style="display:none;">
      <td colspan="5">
         <fieldset>
            <legend>Edit Student</legend>
            <style>
               td {font-weight:bold;}
               th {font-size:smaller; font-weight:lighter;}
            </style>      
         <table>
            <tr>
               <th>Last Name</th><td><?=strtoupper($stu['Last_Name']);?></td>
               <th>Department</th><td><?=$stu['Department'];?></td>
               <th>Year/Term</th><td><?=strtoupper($stu['Academic_Year']);?> <?=strtoupper($stu['Academic_Term']);?></td>
            </tr>
            <tr>  
               <th>First Name</th><td><?=$stu['First_Name'];?></td>
               <th>Email</th><td><?=$stu['Email'];?></td>
               <th>University_ID</th><td><?=$stu['University_ID'];?></td>
               
               <th>Skills</th><td><?=$stu['Skills'];?></td>      
               <th>English Level</th><td><?=$stu['English_Level'];?></td>
            </tr>
         
            <tr>
               <th>Skill Reqd.</th><td colspan="5"><?=$stu['Skills_Reqd'];?></td>
            </tr>
            <tr>  
                <th>Status</th><td><?=$stu['Status'];?></td>
               <th>Attendence</th><td><?=$stu['Attendance'];?></td>
               <th>Reffered by</th><td><?=$stu['Referrer'];?></td>
            </tr>
            <tr>
               <th>STAFF Name</th><td><?=$stu['Staff_Name'];?></td>
               <th>Dept.</th><td><?=$stu['Staff_Dept'];?></td>
               <th>Email</th><td><?=$stu['Staff_Email'];?></td>
            </tr>
            <tr>
               <th>STUDENT Name</th><td><?=$stu['Student_Name'];?></td>
               <th>Dept.</th><td><?=$stu['Student_Dept'];?></td>
               <th>Email</th><td><?=$stu['Student_Email'];?></td>
            </tr>
         </table></fieldset>
      </td>
   </tr><?php
      }?><tr><td colspan="11" align="right">This list has a total of <b><?=Count($students);?></b> students.</td><tr>
</table>
<!--</div>-->
This list has a total of <b><?=Count($students);?></b> students.

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