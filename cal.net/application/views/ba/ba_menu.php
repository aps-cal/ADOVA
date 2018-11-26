
<div  id="secondary-navigation-wrappe ">
	<div id="before-secondary-navigatio "></div>
	<div id="secondary-navigation-container">

	<ul id="secondary-navigation"><?php
if(isset($UserStatus)   
   and ($UserStatus=='Admin' 
      or $UserStatus=='Manager'
      or $UserStatus=='Tutor')){?>
      <li class="<?=($NextPage=='ba/ba'?'current-page ':'');?>rendered-link" > 
         <div class="link-content"> 
            <a href="/ba/ba" data-page-url="/ba/ba"> 
               <div class="title rendered-link-content">BA LCC </div> 
               <div class="separator rendered-link-content"></div> 
            </a>
         </div>
      </li><?php
}
if(isset($UserStatus)   
   and ($UserStatus=='Admin' 
      or $UserStatus=='Manager')){?>
      <li class="<?=($NextPage=='ba/modules'?'current-page ':'');?>rendered-link" > 
         <div class="link-content"> 
            <a href="/ba/modules" data-page-url="/ba/modules"> 
               <div class="title rendered-link-content">Modules </div> 
               <div class="separator rendered-link-content"></div> 
            </a>
         </div>
      </li>
      <li class="<?=($NextPage=='ba/students'?'current-page ':'');?>rendered-link" > 
         <div class="link-content"> 
            <a href="/ba/students" data-page-url="/ba/students"> 
               <div class="title rendered-link-content">Students </div> 
               <div class="separator rendered-link-content"></div> 
            </a>
         </div>
      </li>
      <li class="<?=($NextPage=='ba/classes'?'current-page ':'');?>rendered-link" > 
         <div class="link-content"> 
            <a href="/ba/classes" data-page-url="/ba/classes"> 
               <div class="title rendered-link-content">Classes </div> 
               <div class="separator rendered-link-content"></div> 
            </a>
         </div>
      </li><?php
}
if(isset($UserStatus)   
   and ($UserStatus=='Admin' 
      or $UserStatus=='Manager'
      or $UserStatus=='Tutor')){?> 
      <li class="<?=($NextPage=='ba/registers'?'current-page ':'');?>site-root rendered-link" > 
         <div class="link-content"> 
            <a href="/ba/registers" data-page-url="/ba/registers"> 
               <div class="title rendered-link-content">Registers </div> 
               <div class="separator rendered-link-content"></div> 
            </a>
         </div>
      </li>
      <li class="<?=($NextPage=='ba/reports'?'current-page ':'');?>rendered-link" > 
         <div class="link-content"> 
            <a href="/ba/reports" data-page-url="/ba/reports"> 
               <div class="title rendered-link-content">Reports </div> 
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
<div class="leftmenu"><?php
if(isset($UserStatus)   
   and ($UserStatus=='Admin' 
      or $UserStatus=='Manager'
      or $UserStatus=='Tutor')){?>
   <a href="/ins/insessional">    
      <div class="leftmenuitem">IN-SESSIONAL</div> 
   </a><?php
}
if(isset($UserStatus)   
   and ($UserStatus=='Admin' 
      or $UserStatus=='Manager')){?>
   <a href="/ins/submissions">    
      <div class="leftmenuitem">Submissions</div> 
   </a><?php
}
if(isset($UserStatus)   
   and ($UserStatus=='Admin' 
      or $UserStatus=='Manager')){?> 
   <a href="/ins/students">    
      <div class="leftmenuitem">Students</div> 
   </a><?php
}
if(isset($UserStatus)   
   and ($UserStatus=='Admin' 
      or $UserStatus=='Manager')){?>
   <a href="/ins/classes"> 
      <div class="leftmenuitem">Classes</div> 
   </a><?php
}
if(isset($UserStatus)   
   and ($UserStatus=='Admin' 
      or $UserStatus=='Manager'
      or $UserStatus=='Tutor')){?>
   <a href="/ins/registers"> 
      <div class="leftmenuitem">Registers</div> 
   </a><?php
}
if(isset($UserStatus)   
   and ($UserStatus=='Admin' 
      or $UserStatus=='Manager'
      or $UserStatus=='Tutor')){?> 
   <a href="/ins/assessments"> 
      <div class="leftmenuitem">Assessment</div> 
   </a><?php
}
if(isset($UserStatus)   
   and ($UserStatus=='Admin' 
      or $UserStatus=='Manager'
      or $UserStatus=='Tutor')){?> 
   <a href="/ins/reports"> 
       <div class="leftmenuitem">Reports</div> 
   </a><?php
}?>   
</div>
-->