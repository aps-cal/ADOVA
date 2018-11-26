<div  id="secondary-navigation-wrapper">
	<div id="before-secondary-navigation"></div>
	<div id="secondary-navigation-container">

	<ul id="secondary-navigation"><?php
if(isset($UserStatus)   
   and ($UserStatus=='Admin' 
      or $UserStatus=='Manager')){?>
       <li class="<?=($NextPage=='manager/managerhome'?'current-page ':'');?>rendered-link" > 
         <div class="link-content"> 
            <a href="/manager/managerhome" data-page-url="/manager/managerhome"> 
               <div class="title rendered-link-content">MANAGER </div> 
               <div class="separator rendered-link-content"></div> 
            </a>
         </div>
      </li>     <!--
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
      </li>--><?php
}?>
      </ul>
	</div>
	<div id="after-secondary-navigation"></div>
 </div>
</div>
</div>

<!--<DIV class="leftmenu">
<DIV class="leftmenuitem">
  <a href="../manager/managerhome.php">MANAGER</a>
</DIV>
<DIV class="leftmenuitem">
  <a href="../manager/managerhome.php">-</a>
</DIV>
<DIV class="leftmenuitem">
  <a href="../manager/managerhome.php">-</a>
</DIV>
<DIV class="leftmenuitem">
  <a href="../manager/managerhome.php">-</a>
</DIV>
<DIV class="leftmenuitem">
  <a href="../manager/managerhome.php">-</a>
</DIV>
<DIV class="leftmenuitem">
  <a href="../manager/managerhome.php">-</a>
</DIV>
<DIV class="leftmenuitem">
  <a href="../manager/managerhome.php">-</a>
</DIV>
<DIV class="leftmenuitem">
  <a href="../manager/managerhome.php">-</a>
</DIV>
<DIV class="leftmenuitem">
  <a href="../manager/managerhome.php">-</a>
</DIV>
</DIV>
-->
