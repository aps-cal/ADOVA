<div class="nabacontent" >
<style>
td {font-size:smaller; font-weight:lighter;}
th {font-size:smaller; font-weight:lighter;}
</style>
<script>
function ReOrder(ListOrder){
    if(document.forms[0].ListOrder.value == ListOrder){
        document.forms[0].ListOrder.value = ListOrder+' DESC';
    } else {
        document.forms[0].ListOrder.value = ListOrder;
    }
    document.forms[0].submit(); 
}
</script>
<h3>In-sessional Reports</h3>
<form name="reports" action="/ins/reports" method="post">
   <input name="Report_Order" type="hidden" value="" />
   <fieldset>
   <legend><b>Registration Placements</b></legend>
   <table id="Classes" width="100%" >
      <tr>
         <th><input type="button" value="Year" onclick="ReOrder('R.Academic_Year, R.Academic_Term');"></th>
         <th><input type="button" value="Term" onclick="ReOrder('R.Academic_Term, R.Academic_Year');"></th>
         <th><input type="button" value="Subject" onclick="ReOrder('R.Subject, R.Academic_Year, R.Academic_Term');"></th>
         <th><input type="button" value="Registered" onclick="ReOrder('R.Registered, R.Academic_Year, R.Academic_Term');"></th>
         <th><input type="button" value="Status" onclick="ReOrder('C.Status, R.Academic_Year, R.Academic_Term');"></th>
         <th><input type="button" value="Term" onclick="ReOrder('C.Academic_Year, R.Academic_Term');"></th>
         <th><input type="button" value="Total" onclick="ReOrder('Count(1)');"></th>
      </tr>
      <tr>
         <td>
            <select name="Academic_Year" onchange="form.submit();">
               <option></option>
               <option<?=((isset($Academic_Year) and $Academic_Year=='2012/13')?' Selected':'');?>>2012/13</option>
               <option<?=((isset($Academic_Year) and $Academic_Year=='2013/14')?' Selected':'');?>>2013/14</option>
               <option<?=((isset($Academic_Year) and $Academic_Year=='2014/15')?' Selected':'');?>>2014/15</option>
               <option<?=((isset($Academic_Year) and $Academic_Year=='2015/16')?' Selected':'');?>>2015/16</option>
            </select>
         </td>
         <td>
            <select name="Academic_Term" onchange="form.submit();">
               <option></option>
               <option<?=((isset($Academic_Term) and $Academic_Term=='AU')?' Selected':'');?>>AU</option>
               <option<?=((isset($Academic_Term) and $Academic_Term=='SP')?' Selected':'');?>>SP</option>
               <option<?=((isset($Academic_Term) and $Academic_Term=='SU')?' Selected':'');?>>SU</option>
            </select>
         </td>
         <td>
            <select name="Subject" onchange="form.submit();">
               <option></option>
               <option<?=((isset($Subject) and $Subject=='Writing')?' Selected':'');?>>Writing</option>
               <option<?=((isset($Subject) and $Subject=='Speaking')?' Selected':'');?>>Speaking</option>
               <option<?=((isset($Subject) and $Subject=='Pronunc')?' Selected':'');?>>Pronunc</option>
               <option<?=((isset($Subject) and $Subject=='Culture')?' Selected':'');?>>Culture</option>
               <option<?=((isset($Subject) and $Subject=='Erasmus')?' Selected':'');?>>Erasmus</option>
            </select>
         </td>
         <td>
            <select name="Registered" onchange="form.submit();">
               <option></option>
               <option <?=((isset($Registered) and $Registered=='On-time')?' Selected':'');?>>On-time</option>
               <option <?=((isset($Registered) and $Registered=='Late')?' Selected':'');?>>Late</option>
            </select>
         </td>
         <td>
            <select name="Status" onchange="form.submit();">
               <option></option>
               <option <?=((isset($Status) and $Status=='Waiting')?' Selected':'');?>>Waiting</option>
               <option <?=((isset($Status) and $Status=='Placed')?' Selected':'');?>>Placed</option>
               <option <?=((isset($Status) and $Status=='Removed')?' Selected':'');?>>Removed</option>
            </select>
         </td>
         <td>
            <select name="Placed_Term" onchange="form.submit();">
               <option></option>
               <option <?=((isset($Placed_Term) and $Placed_Term=='AU')?' Selected':'');?>>AU</option>
               <option <?=((isset($Placed_Term) and $Placed_Term=='SP')?' Selected':'');?>>SP</option>
               <option <?=((isset($Placed_Term) and $Placed_Term=='SU')?' Selected':'');?>>SU</option>
               <option <?=((isset($Placed_Term) and $Placed_Term=='--')?' Selected':'');?>>--</option>
            </select>
         </td>
         <td><input type="button" value="Reset" onclick="
               this.form.Academic_Year.value=''; this.form.Academic_Term.value='';
               this.form.Subject.value=''; this.form.Registered.value='';
               this.form.Status.value=''; this.form.Placed_Term.value='';
               this.form.submit();"/></td>
      </tr><?php 
   if(isset($report)){
      foreach($report as $row){?>
      <tr>     
         <td><?=$row['Academic_Year'];?></td>
         <td><?=$row['Academic_Term'];?></td>
         <td><?=$row['Subject'];?></td>
         <td><?=$row['Registered'];?></td>
         <td><?=$row['Status'];?></td>
         <td><?=$row['Placed_Term'];?></td>
         <td><?=$row['Students'];?></td>
      </tr><?php
      }
   }?>
   </table>
   </fieldset><br/>   
</form>
</div>
   
