<div  id="secondary-navigation-wrapper">
	<div id="before-secondary-navigation"></div>
	<div id="secondary-navigation-container">

	<ul id="secondary-navigation"><?php
if(isset($UserStatus)   
   and ($UserStatus=='Admin' 
      or $UserStatus=='Manager')){?>
       <li class="<?=($NextPage=='admin/adminhome'?'current-page ':'');?>rendered-link" > 
         <div class="link-content"> 
            <a href="/admin/adminhome" data-page-url="/admin/adminhome"> 
               <div class="title rendered-link-content">ADMIN </div> 
               <div class="separator rendered-link-content"></div> 
            </a>
         </div>
      </li>     
     <li class="<?=($NextPage=='admin/userlist'?'current-page ':'');?>rendered-link" > 
         <div class="link-content"> 
            <a href="/admin/userlist" data-page-url="/admin/userlist"> 
               <div class="title rendered-link-content">User List </div> 
               <div class="separator rendered-link-content"></div> 
            </a>
         </div>
      </li> 
      <li class="<?=($NextPage=='admin/valuesedit'?'current-page ':'');?>rendered-link" > 
         <div class="link-content"> 
            <a href="/admin/valuesedit" data-page-url="/admin/valuesedit"> 
               <div class="title rendered-link-content">System Values </div> 
               <div class="separator rendered-link-content"></div> 
            </a>
         </div>
      </li><?php
}?>
      </ul>
	</div>
	<div id="after-secondary-navigation"></div>
 </div>
</div>
</div>
<!--
<DIV class="leftmenu">
<DIV class="leftmenuitem">
  <a href="../admin/adminhome.php">ADMIN</a>
</DIV>
   <DIV class="leftmenuitem">
  <a href="../admin/userlist.php">User List</a>
</DIV>
<DIV class="leftmenuitem">
  <a href="../admin/adminhome.php">-</a>
</DIV>
<DIV class="leftmenuitem">
  <a href="../admin/adminhome.php">-</a>
</DIV>
<DIV class="leftmenuitem">
  <a href="../admin/adminhome.php">-</a>
</DIV>
<DIV class="leftmenuitem">
  <a href="../admin/adminhome.php">-</a>
</DIV>
<DIV class="leftmenuitem">
  <a href="../admin/adminhome.php">-</a>
</DIV>
<DIV class="leftmenuitem">
  <a href="../admin/adminhome.php">-</a>
</DIV>
<DIV class="leftmenuitem">
  <a href="../admin/adminhome.php">-</a>
</DIV>
<DIV class="leftmenuitem">
  <a href="../admin/valuesedit.php">Current Values</a>
</DIV>
</DIV>
-->