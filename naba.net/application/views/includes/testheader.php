<!doctype html>
<?php $page='public/home';?>
<html lang="en-GB" >
  <head >
     
  <meta name="HandheldFriendly" content="True">
  <meta id="meta-mobile-optimized" name="MobileOptimized" content="320">
  <meta id="meta-viewport" name="viewport" content="width=device-width">
  <meta http-equiv="cleartype" content="on"> 

    <base href="/">
    <!--<link rel="stylesheet" href="/application/styles/pack6.css" type="text/css">
    <link rel="stylesheet" href="/application/styles/standard.css" type="text/css">
    <link rel="stylesheet" href="/application/styles/layout.css" type="text/css">
    <link rel="stylesheet" href="/application/styles/site.css" type="text/css">
    <link rel="stylesheet" href="/application/styles/naba.css" type="text/css">
    <link rel="stylesheet" href="http://www2.warwick.ac.uk/static_site/fac/soc/al/intranet/site.css.220082490738" type="text/css">-->
    <!--<script type="text/javascript" src="../../scripts/JQuery.js"></script>
    <script type="text/javascript" src="/application/scripts/JQuery.js"></script>-->
    <script type="text/javascript" src="/application/scripts/JQuery.js"></script>
 </head>
<body class="horizontal-nav site-root in-fac in-soc in-al layout-100">
<div id="container">
<div id="header" class="header-small" data-type="slideshow" data-delay="7" data-transition="crossfade">
         <div class="slide slide_1 active">
            <span class="strapline strapline_1">Language : Culture : Pedagogy</span>
         </div>
         <div class="slide slide_2">
         </div>
         <div class="slide slide_3">
         </div>
         <div class="slide slide_4">
         </div>
         <div class="slide slide_5">
         </div>
         <div id="masthead" class="transparent">
            <div id="warwick-logo-container" class="on-hover">
              <a id="warwick-logo-link" href="http://www2.warwick.ac.uk" title="University of Warwick homepage">
                <img id="warwick-logo" src="http://www2.warwick.ac.uk/static_war/render/images/standard6/logo.png" alt="University of Warwick">
              </a>
            </div>
          <div id="utility-container">
<div id="utility-bar">
<!--   
<li id="sign-in-link">
  <a href="https://websignon.warwick.ac.uk/origin/slogin?shire=https%3A%2F%2Fwww2.warwick.ac.uk%2Fsitebuilder2%2Fshire-read
     &amp;providerId=urn%3Awww2.warwick.ac.uk%3Asitebuilder2%3Aread%3Aservice&amp;target=<?=$page;?>"
     rel="nofollow" class="ut" >Sign in</a> 
</li>   
<li id="sign-out-link">
  <a href="https://websignon.warwick.ac.uk/origin/logout?target=<?=$page;?>"
     rel="nofollow" class="ut" >Sign out</a> 
</li>
-->
<ul>
<li id="sign-inout-link">
<?php
if(isset($UserStatus) && !$UserStatus == '' ){ ?>
   <span style="color:white; font-size:14px; font-weight: bolder; text-decoration:none;">Signed in as <?=(isset($FirstName)?$FirstName:'');?> <?=(isset($LastName)?$LastName:'');?></span>
      <a href="/login/oauthlogout"> &nbsp; <span style="color:white; font-size:14px; font-weight: bolder; ">Sign out</span></a><?php 
} else {?>
   <a href="/login/oauthlogin"><span style="color:white; font-size:14px; font-weight: bolder; text-decoration:none;">Sign in</span></a><?php
}?>   
</li> <!--| 
<li id="sign-inout-link"><?php 
if(isset($UserStatus) and !$UserStatus == ''){
   echo '<a href="/login/logout.php"><span style="color:white; font-size:14px; font-weight: bolder; text-decoration:none;">OLD Logout</span></a>';
} else {
    echo '<a href="/login/login.php"><span style="color:white; font-size:14px; font-weight: bolder; text-decoration:none;">OLD Login</span></a>';
}?>
</li>-->
</ul>
</div>
</div>
</div>
<div id="page-header">
<div class="content">
<div id="site-header-container">
   <h1 id="site-header">
      <span id="current-site-header">
         <span accesskey="1" title="CAL home page [1]">Centre for Applied Linguistics</span>
      </span>
   </h1>
   <h2 id="strapline">Language : Culture : Pedagogy</h2>
</div>
</div>
</div>
</div>
<div id="navigation-and-content">

  