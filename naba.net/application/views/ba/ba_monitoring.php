<div class="nabacontent" >
<style>
td {font-size:smaller; font-weight:lighter;}
th {font-size:smaller; font-weight:lighter;}
</style>
<h3>BA LCC Monitoring</h3>
<form name="attendance" action="/ba/monitoring" method="post">
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
   <legend><b>Student Monitoring</b></legend>
   <!--<div  style="height:150px; overflow:auto;">-->
      <div>
   <table id="Register" width="100%">
   <tr>
      <th>Student ID</th>
      <th>Family Name</th>
      <th>First Names</th>
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
   <?php 
    if(isset($monitoring)){
        $Week = 1;
        $Student_ID = 0;
        foreach($monitoring as $record){
            if ($record['Student_ID'] <> $Student_ID and $Student_ID <> 0){
                while($Week < 11){?>
        <td>-</td><?php
                    $Week=$Week+1;
                }
            }
            if($Week > 10){
                $Week = 1;
            }
            if($Week==1){
                $Student_ID = $record['Student_ID'];?>
   </tr>
   <tr>     
       <td><b><?=$record['Student_ID'];?></b></td>
       <td><b><?=strtoupper($record['Family_Name']);?></b></td>
       <td><b><?=$record['First_Names'];?></b></td><?php
            }
            while($record['Student_ID'] == $Student_ID and $Week <11){
                if($record['Week_No']==$Week){?>
       <td><input disabled type="checkbox" <?=($record['Present']==1?'Checked':'');?>></td><?php
                    $Week=$Week+1;
                    break;
                } else {?>
       <td>-</td><?php
                    $Week=$Week+1;
                }
            }
       }
       while($Week < 11){?>
       <td>-</td><?php
          $Week=$Week+1;
        }
    }?>
   </tr>
   </table>
   </div>
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
