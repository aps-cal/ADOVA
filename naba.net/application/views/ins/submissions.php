<div class="nabacontent">
<h3>In-sessional Submissions</h3>
<style>
td {font-weight:normal;}
th {font-size:smaller; font-weight:lighter;}
</style>
<form name="submissions" method="POST" action="/ins/submissionslist">
<input id="List_Order" type="hidden" name="List_Order" value="<?=$List_Order;?>"> 
<fieldset>
   <legend>On-line Submissions 
      <select name="Academic_Year" onChange="form.List_Order.value='University_ID'; form.submit();">
            <option <?=($Academic_Year=='2012/13'?'Selected':'');?>>2012/13</option>
            <option <?=($Academic_Year=='2013/14'?'Selected':'');?>>2013/14</option>
            <option <?=($Academic_Year=='2014/15'?'Selected':'');?>>2014/15</option>
            <option <?=($Academic_Year=='2015/16'?'Selected':'');?>>2015/16</option>
            <option <?=($Academic_Year=='2016/17'?'Selected':'');?>>2016/17</option>
            <option <?=($Academic_Year=='2018/19'?'Selected':'');?>>2018/19</option>
         </select> Term 
         <select name="Academic_Term" onChange="form.List_Order.value='University_ID'; form.submit();">
            <option <?=($Academic_Term=='AU'?'Selected':'');?>>AU</option>
            <option <?=($Academic_Term=='SP'?'Selected':'');?>>SP</option>
            <option <?=($Academic_Term=='SU'?'Selected':'');?>>SU</option>
         </select>
   </legend>
<!--<div  style="height:400px;  width:800px; overflow:auto;">-->
<table id="Submissions">
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
   </tr> -->
   <tr id="Heading">
      <th colspan="2"><input type="button" value="University_ID" 
         onclick="form.List_Order.value='University_ID'; form.submit();" width="100%"></th>
      <th><input type="button" value="Student Name" onclick="form.List_Order.value='Last_Name, First_Name'; form.submit();" width="100%"></th>
      <th><input type="button" value="Email" onclick="form.List_Order.value='Email'; form.submit();" width="100%"></th>
      <th><input type="button" value="Department" onclick="form.List_Order.value='Department'; form.submit();" width="100%"></th>
   </tr><?php 
   //if(isset($submissions)){
      foreach($submissions as $sub){?>
   <tr id="Summary">
      <th><input name="SubmissionID" type="radio" value="<?=$sub['Submission_ID'];?>"
           onclick="/*if(this.checked) this.checked=false;*/  ShowOnlyRow('Submissions','<?=$sub['Submission_ID'];?>');"></th>

      <th><?=$sub['University_ID'];?></th>
      <th><?=strtoupper($sub['Last_Name']).", ".$sub['First_Name'];?></th>
      <th><?=$sub['Email'];?></th>
      <th><?=$sub['Department'];?></th>
     

   </tr>
   <tr id="Detail<?=$sub['Submission_ID'];?>" Style="display:none;">
      <td colspan="5">
         <fieldset>
            <legend><?=strtoupper($sub['Last_Name']).", ".$sub['First_Name'];?></legend>
            <style>
               td {font-weight:bold;}
               th {font-size:smaller; font-weight:lighter;}
            </style>      
         <table>
            <tr>
               <th>University_ID</th><td><?=$sub['University_ID'];?></td>
  
<!--               <td>Last Name</td><td><?=strtoupper($sub['Last_Name']);?></td>
                     <td>First Name</td><td><?=$sub['First_Name'];?></td>
-->               <th>Department</th><td><?=$sub['Department'];?></td>
               <th>Email</th><td><?=$sub['Email'];?></td>
            </tr>
            <tr>  
               <th>Skills</th><td><?=$sub['Skills'];?></td>      
               <th>English Level</th><td><?=$sub['English_Level'];?></td>
            </tr>
         
            <tr>
               <th>Skill Reqd.</th><td colspan="5"><?=$sub['Skills_Reqd'];?></td>
            </tr>
            <tr>  
               <th>Status</td><th><?=$sub['Status'];?></td>
               <th>Attendence</th><td><?=$sub['Attendance'];?></td>
               <th>Refered by</th><td><?=$sub['Referrer'];?></td>
            </tr>
            <tr>
               <th>STAFF Name</th><td><?=$sub['Staff_Name'];?></td>
               <th>Dept.</th><td><?=$sub['Staff_Dept'];?></td>
               <th>Email</th><td><?=$sub['Staff_Email'];?></td>
            </tr>
            <tr>
               <th>STUDENT Name</th><td><?=$sub['Student_Name'];?></td>
               <th>Dept.</th><td><?=$sub['Student_Dept'];?></td>
               <th>Email</th><td><?=$sub['Student_Email'];?></td>
            </tr>
         </table></fieldset>
      </td>
   </tr><?php
      }
   //}?>
</table>
<!--</div>    -->
This list has a total of <b><?=Count($submissions);?></b> submissions.
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