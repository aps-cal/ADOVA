<DIV class="topmenu">
   <DIV class="topmenuitem"> 
      <a  href="../oneway/home.php">Home</a>
   </DIV><?php 
if(isset($UserStatus)   
	and ($UserStatus=='Returnee'
	or $UserStatus=='Sponsor' 
	or $UserStatus=='Gatekeeper'
	or $UserStatus=='Admin')){?>
   <DIV class="topmenuitem">
      <a href="../returnee/home.php">Returnee</a>
   </DIV><?php  
}
if(isset($UserStatus)   
	and ($UserStatus=='Sponsor' 
	or $UserStatus=='Gatekeeper'
	or $UserStatus=='Admin')){?>
   <DIV class="topmenuitem">
      <a href="../sponsor/sponsorhome.php">Sponsor</a>
   </DIV><?php 
}
if(isset($UserStatus)   
	and ($UserStatus=='Gatekeeper'
	or $UserStatus=='Admin')){?>
   <DIV class="topmenuitem">
      <a href="../gatekeeper/gatekeeperhome.php">Gatekeeper</a>
   </DIV><?php
}
if(isset($UserStatus) and $UserStatus=='Admin'){?>
   <DIV class="topmenuitem">
      <a href="../manager/managerhome.php">Manager</a>
   </DIV><?php
}?><DIV class="topmenuitem"><?php 
if(isset($UserStatus) and !$UserStatus == ''){
   echo '<a href="../oneway/logout.php">Logout</a>';
} else {
    echo '<a href="../oneway/login.php">Login</a>';
}?></DIV>
</DIV>
<DIV class="page">