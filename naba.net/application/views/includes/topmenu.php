<div id="navigation-wrapper" class="hwrap">
<div id="navigation" class="horizontal">
<div  id="primary-navigation-wrapper">
<div id="before-primary-navigation"></div>
<div id="primary-navigation-container" class="fixed-width">
   <ul id="primary-navigation" class="cols-7 is-stackable" >
      <li class="section page-centre rendered-link"> 
         <div class="link-content"> 
            <a href="http://www2.warwick.ac.uk/fac/soc/al/centre/" data-page-url="/fac/soc/al/centre/" > 
               <div class="title rendered-link-content">The Centre </div>
               <div class="separator rendered-link-content"></div> 
            </a>
         </div>
      </li>
<!--       <li class="section page-learning_english rendered-link"> 
         <div class="link-content"> 
            <a href="http://www2.warwick.ac.uk/fac/soc/al/learning_english/" data-page-url="/fac/soc/al/learning_english/"> 
               <div class="title rendered-link-content">Learn English </div> 
               <div class="separator rendered-link-content"></div> 
            </a>
         </div>
      </li>-->
 <?php 
if(isset($UserStatus) and !$UserStatus == '' and FALSE){?>
<!--       <li class="section page-degrees recently-updated rendered-link" data-lastmodified="1345023296000"> 
         <div class="link-content">
            <a href="/prep/prep" data-page-url="/prep/prep"> 
               <div class="title rendered-link-content">PREP </div> 
               <div class="separator rendered-link-content"></div> 
            </a>
         </div>
      </li>--><?php 
}if(isset($UserStatus) and !$UserStatus == '' and FALSE){?>
      <li class="<?=($Menu=='pres'?'current-page ':'');?>section page-pres rendered-link"> 
         <div class="link-content"> 
            <a href="/pres/presessional" data-page-url="/pres/presessional"> 
               <div class="title rendered-link-content">Pre-sessional  </div> 
               <div class="separator rendered-link-content"></div> 
            </a>
         </div>
      </li><?php
} 
if(isset($UserStatus) and !$UserStatus == '' and TRUE){?>
      
      <li class="<?=($Menu=='ba'?'current-page ':'');?>section page-ins recently-updated rendered-link" > 
         <div class="link-content"> 
            <a href="/ba/ba" data-page-url="../ba/ba.php"> 
               <div class="title rendered-link-content">BA LCC</div> 
               <div class="separator rendered-link-content"></div> 
            </a>
         </div>
      </li><?php
}      
if(isset($UserStatus) and !$UserStatus == '' and TRUE){?>
      
      <li class="<?=($Menu=='ins'?'current-page ':'');?>section page-ins recently-updated rendered-link" > 
         <div class="link-content"> 
            <a href="/ins/insessional" data-page-url="../ins/ins.php"> 
               <div class="title rendered-link-content">In-sessional</div> 
               <div class="separator rendered-link-content"></div> 
            </a>
         </div>
      </li><?php
}   
if(isset($UserStatus) and ($UserStatus == 'Admin' or $UserStatus == 'Manager')){?>
      <li class="section page-degrees recently-updated rendered-link" data-lastmodified="1345023296000"> 
         <div class="link-content"> 
            <a href="/manager/managerhome" data-page-url="/manager/managerhome"> 
               <div class="title rendered-link-content">Manager</div> 
               <div class="separator rendered-link-content"></div> 
            </a>
         </div>
      </li><?php 
}?>
      <li class="<?=($Menu=='admin'?'current-page ':'');?>section page-degrees recently-updated rendered-link" data-lastmodified="1345023296000"> 
         <div class="link-content"> <?php

if(isset($UserStatus) and $UserStatus == 'Admin'){?>
            <a href="/admin/adminhome" data-page-url="/admin/adminhome"> 
               <div class="title rendered-link-content">Admin</div> 
               <div class="separator rendered-link-content"></div> 
            </a><?php 
}?>
         </div>
      </li>
   </ul>
</div>
<div id="after-primary-navigation"></div>
</div>

