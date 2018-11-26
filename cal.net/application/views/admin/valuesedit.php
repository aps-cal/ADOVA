<div class="nabacontent">
<h3>In-sessional Class Edit</h3>
<form name="valuesedit" action="/admin/valuessave" method="post">
   <fieldset>
   <legend> Edit System CURRENT VALUES </legend>
   <style>
      td {font-weight:bold;}
      th {font-size:smaller; font-weight:lighter;}
   </style>      
   <table>
   <tr>
      <td>Academic Year</td>
      <td>
         <select name="Academic_Year">
            <option value="2012/13" <?=($values['Academic_Year']=='2012/13'?'Selected':'');?>>2012/13</option>
            <option value="2013/14" <?=($values['Academic_Year']=='2013/14'?'Selected':'');?>>2013/14</option>
            <option value="2014/15" <?=($values['Academic_Year']=='2014/15'?'Selected':'');?>>2014/15</option>
            <option value="2015/16" <?=($values['Academic_Year']=='2015/16'?'Selected':'');?>>2015/16</option>
            <option value="2016/17" <?=($values['Academic_Year']=='2016/17'?'Selected':'');?>>2016/17</option>
            <option value="2017/18" <?=($values['Academic_Year']=='2017/18'?'Selected':'');?>>2017/18</option>
            <option value="2018/19" <?=($values['Academic_Year']=='2018/19'?'Selected':'');?>>2018/19</option>
         </select> 
      </td>
   </tr>
   <tr>
      <td>Academic Term</td>
      <td>
         <select name="Academic_Term">
            <option value="AU" <?=($values['Academic_Term']=='AU'?'Selected':'');?>>AU</option>
            <option value="SP" <?=($values['Academic_Term']=='SP'?'Selected':'');?>>SP</option>
            <option value="SU" <?=($values['Academic_Term']=='SU'?'Selected':'');?>>SU</option>
         </select>
      </td>
   </tr>
   <tr>
      <td>In-sessional Start Date</td>
      <td>
         <input type="date" name="Ins_Start_Date" Value="<?=$values['Ins_Start_Date'];?>"/>
      </td>
   </tr>
   
   <tr>
      <td colspan="2" align="right"><input type="submit" value=" Save "></td>
   <tr>
</table>
</form>
<div class="spacer"></div>
</div> <!-- End Content -->

           