<div class="nabacontent" width="800px" >
<h3>In-sessional Class Mailing List</h3>
<style>
td {font-size:smaller; font-weight:lighter;}
th {font-size:larger; font-weight:bolder;}
</style>
<div  style="height:500px; width:800px; overflow:auto;">   
<table id="Class" width="100%" >
<tr><td>Class </td><th><?=$class['Class_Subject'];?> &nbsp; Group: <?=$class['Class_Instance'];?> </th></tr>   
<tr><td>Time</td><th><?=$class['Class_Day'];?> &nbsp; <?=$class['Class_Start'];?>-<?=$class['Class_Finish'];?> &nbsp; Room: <?=$class['Class_Room'];?></th></tr>   
<tr><td>Teacher</td><th><b><?=$teacher['First_Name'];?> <?=$teacher['Last_Name'];?> &nbsp; <?=$teacher['Email'];?> </b></th></tr>   
</table>  
<h3> Student names </h3>
<code><?php 
foreach($students as $student){?>
   <?=$student['Last_Name'];?>, <?=$student['First_Name'];?><br>
<?php
}?>
</code>   
<h3> Student mailing list </h3>
<code><?php 
foreach($students as $student){?>
   <?=$student['Email'];?>;
<?php
}?>
</code>  </div> 
<!--
</form>-->
<div class="spacer"></div>
</div> <!-- End Content -->
