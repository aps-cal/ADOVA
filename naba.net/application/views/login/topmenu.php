<div id="navigation-wrapper" class="hwrap">
<div id="navigation" class="horizontal">
<div  id="primary-navigation-wrapper">
<div id="before-primary-navigation"></div>
<div id="primary-navigation-container" class="fixed-width">
	<ul id="primary-navigation" class="cols-7" width="100%">
      <li class="section page-centre rendered-link"> 
         <div class="link-content"> 
            <a href="http://www2.warwick.ac.uk/fac/soc/al/centre/" target="_blank"> 
               <div class="title rendered-link-content">The Centre </div>
               <div class="separator rendered-link-content"></div> 
            </a>
         </div>
      </li>
      <li class="section page-learning_english rendered-link"> 
         <div class="link-content"> 
            <a href="http://www2.warwick.ac.uk/fac/soc/al/learning_english/" target="_blank"> 
               <div class="title rendered-link-content">Learn English </div> 
               <div class="separator rendered-link-content"></div> 
            </a>
         </div>
      </li>
       <li class="section page-degrees recently-updated rendered-link" data-lastmodified="1345023296000"> 
         <div class="link-content"> <?php 
if(isset($UserStatus) and !$UserStatus == '' and FALSE){?>
            <a href="/prep/prep" data-page-url="/prep/prep"> 
               <div class="title rendered-link-content">PREP </div> 
               <div class="separator rendered-link-content"></div> 
            </a><?php 
}?>
         </div>
      </li>
      <li class="section page-research rendered-link" data-lastmodified="1338455107000"> 
         <div class="link-content"> <?php 

if(isset($UserStatus) and !$UserStatus == '' and FALSE){?>
            <a href="/pres/presessional" data-page-url="/pres/presessional"> 
               <div class="title rendered-link-content">Pre-sessional </div> 
               <div class="separator rendered-link-content"></div> 
            </a><?php 
}?>
         </div>
      </li>
      
      <li class="section page-degrees recently-updated rendered-link" data-lastmodified="1345023296000"> 
         <div class="link-content"> <?php
if(isset($UserStatus) and !$UserStatus == '' and TRUE){?>
            <a href="/ins/insessional" data-page-url="/ins/insessional"> 
               <div class="title rendered-link-content">In-sessional </div> 
               <div class="separator rendered-link-content"></div> 
            </a><?php 
}?>
         </div>
      </li>
      <li class="section page-degrees recently-updated rendered-link" data-lastmodified="1345023296000"> 
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
</div>
</div>
