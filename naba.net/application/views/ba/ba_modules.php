<div class="nabacontent" >
<style>
td {font-size:smaller; font-weight:lighter;}
th {font-size:smaller; font-weight:lighter;}
</style>
<h3>BA LCC Modules</h3>

<h1>PAGE STILL UNDER DEVELOPMENT</h1>

<fieldset><legend>Courses</legend>
<form name="courses" action="/ba/courses" method="post"><!--
<input type="hidden" name="Class_ID" value="0"> 
<input type="hidden" name="Class_No" value="0"> 
<input type="hidden" name="Academic_Year" value="2012/13"> 
<input type="hidden" name="Academic_Term" value="AU"> 
<input type="hidden" name="List_Order" value="<?=$List_Order;?>"> -->
<table id="Courses" width="100%">
   <thead>
   <tr id="Heading">
      <th colspan="2"><input type="button" value="Course_ID" onclick="form.Course_Order.value='Course_ID'; form.submit();"></th>
      <th><input type="button" value="Course_Name" onclick="form.Course_Order.value='Course_Name'; form.submit();"></th>
      <th><input type="button" value="Course_Type" onclick="form.List_Order.value='Course_Type'; form.submit();"></th>
      <th><input type="button" name="new" value=" new "onclick="form.action='/ba/courseedit'; form.submit();"/></th>
   </tr>
   </thead>
   <tbody height="10px"><?php 
      foreach($courses as $Course){?>
   <tr id="Summary">
      <td><input name="CourseID" type="radio" value="<?=$Course['Course_ID'];?>"
           onclick="form.Course_ID.value='<?=$Course['Course_ID'];?>'; 
           form.submit();" <?=($Course['Course_ID']==$Course_ID?'Checked':'');?>>
      </td>
      <td><?=$Course['Course_ID'];?></td>
      <td><?=$Course['Course_Name'];?></td>
      <td><?=$Course['Course_Type'];?></td>
      <th><input type="button" name="edit" value=" edit " onclick="form.action='/ba/ccourseedit'; 
            form.Course_ID.value='<?=$Course['Course_ID'];?>'; form.submit();"/>
   </tr><?php
      }?>
   </tbody>
   <!--<tfoot>
      <tr><td colspan="10" align="center">This table can be scrolled</td></tr>
   </tfoot>-->
   </table>
</form>    
</fieldset>
<form name="modules" action="/ba/modules" method="post">
<fieldset><legend>Modules for 
        Course: 
            <select name="Course_ID" onchange="form.submit();">
                <option value=""></option><?php 
      foreach($courses as $Course){?>
               <option value="<?=$Course['Course_ID'];?>" <?=($Course['Course_ID']==$Course_ID?'selected':'');?>>
                  <?=$Course['Course_ID'];?> - <?=$Course['Course_Name'];?> 
               </option><?php
      }?>      
            </select>
       Course Year: <select name="Course_Year" onchange="form.submit();">
               <option <?=($Course_Year=='1'?'selected':'');?>>1</option>
               <option <?=($Course_Year=='2'?'selected':'');?>>2</option>
               <option <?=($Course_Year=='3'?'selected':'');?>>3</option>
            </select>  
        Academic Year: 
            <select name="Academic_Year" onchange="form.submit();">
               <option <?=($Academic_Year=='2012/13'?'selected':'');?>>2012/13</option>
               <option <?=($Academic_Year=='2013/14'?'selected':'');?>>2013/14</option>
               <option <?=($Academic_Year=='2014/15'?'selected':'');?>>2014/15</option>
               <option <?=($Academic_Year=='2015/16'?'selected':'');?>>2015/16</option>
               <option <?=($Academic_Year=='2016/17'?'selected':'');?>>2016/17</option>
               <option <?=($Academic_Year=='2017/18'?'selected':'');?>>2017/18</option>
            </select>
       Term: <select name="Academic_Term" onchange="form.submit();">
               <option <?=($Academic_Term=='AU'?'selected':'');?>>AU</option>
               <option <?=($Academic_Term=='SP'?'selected':'');?>>SP</option>
               <option <?=($Academic_Term=='SU'?'selected':'');?>>SU</option>
            </select>
   </legend>
   <!--
<input type="hidden" name="Class_ID" value="0"> 
<input type="hidden" name="Class_No" value="0"> 
<input type="hidden" name="Academic_Year" value="2012/13"> 
<input type="hidden" name="Academic_Term" value="AU"> 
<input type="hidden" name="List_Order" value="<?=$List_Order;?>"> -->
<table id="Modules" width="100%">
   <thead>
   <tr id="Heading">
      <th colspan="2"><input type="button" value="Module_ID" onclick="form.List_Order.value='Module_ID'; form.submit();"></th>
      <th><input type="button" value="Module_CATS" onclick="form.List_Order.value='Module_CATS'; form.submit();"></th>
      <th><input type="button" value="Module_Name" onclick="form.List_Order.value='Module_Name'; form.submit();"></th>
      <th><input type="button" value="Module_Type" onclick="form.List_Order.value='Module_Type'; form.submit();"></th>
      <th><input type="button" value="Module_Year" onclick="form.List_Order.value='Module_Year'; form.submit();"></th>
      <th><input type="button" name="new" value=" new "onclick="form.action='/ba/moduleedit'; form.submit();"/></th>
   </tr>
   </thead>
   <tbody height="10px"><?php 
      foreach($modules as $Module){?>
   <tr id="Summary">
      <td><input name="ModuleID" type="radio" value="<?=$Module['Module_ID'];?>"
           onclick="form.Module_ID.value='<?=$Module['Module_ID'];?>'; 
           form.submit();" <?=($Module['Module_ID']==$Module_ID?'Checked':'');?>>
      </td>
      <td><?=$Module['Module_ID'];?></td>
      <td><?=$Module['Module_CATS'];?></td>
      <td><?=$Module['Module_Name'];?></td>
      <td><?=$Module['Module_Type'];?></td>
      <td><?=$Module['Module_Year'];?></td>
       <th><input type="button" name="edit" value=" edit " oclick="form.action='/ba/moduleedit';
            form.Module_ID.value='<?=$Module['Module_ID'];?>'; form.submit();"/>
   </tr><?php
      }?>
   </tbody>
   <tfoot>
      <tr><td colspan="10" align="center">This table can be scrolled</td></tr>
   </tfoot>
   </table>
<fieldset>
    </form>    
<div class="spacer"></div>
</div> <!-- End Content -->