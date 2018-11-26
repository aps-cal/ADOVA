
<div class="spacer"></div>
</div> <!-- End Left-menu & Content -->
<div id="footer">
<div class="content">
<div id="custom-footer"><br>
<div class="al-contact">The Centre for Applied Linguistics, S1.74 Social Sciences Building<br />
University of Warwick, Coventry, CV4 7AL, UK<br />Tel: +44 (0)24 76523200<br />
Email: <a href="mailto:appling@warwick.ac.uk">appling@warwick.ac.uk</a>
</div>
</div>
<div style="clear:both;"></div>
<div id="common-footer">
<div id="page-footer-elements" class="nofollow">
<div id="email-owner-div" style="display:none;">
<div id="email-owner-div-inner">
<img id="email-owner-popup-close-button" src="http://www2.warwick.ac.uk/static_war/popup/close.png" alt="Close this email form">
<div id="email-owner-div-content"></div>
</div>
</div>
<span class="footer-left">
<div style="clear:both;"></div>
</div>
<div id="footer-utility">
<?php
?>
<ul>
<li id="sign-inout-link">
<?php
if(isset($UserStatus) && !$UserStatus == '' ){ ?>
   Signed in as <?=(isset($FirstName)?$FirstName:'');?> <?=(isset($LastName)?$LastName:'');?> &nbsp;
   <a href="/login/oauthlogout">Sign out</a><?php 
} else {?>
   <a href="/login/oauthlogin">Sign in</a><?php
}?>   
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
<script type="text/javascript">
var _gaq = _gaq || [];
 _gaq.push(['site._setAccount', 'UA-21339750-1']);
 _gaq.push(['site._trackPageview', '\/fac\/soc\/al']);
 _gaq.push(['site._trackPageLoadTime']);
 _gaq.push(['_setAccount', 'UA-1022818-8']);
 _gaq.push(['_trackPageview', '\/fac\/soc\/al']);
 _gaq.push(['_trackPageLoadTime']);
 var analyticsLoad = function() {
   var s    = document.createElement('script');
   s.src    = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
   s.type   = "text/javascript";
   s.async  = true;
   document.documentElement.firstChild.appendChild(s);
 };
 if (window.Event && Event.observe) {
   Event.observe(window, 'load', analyticsLoad);
 } else {
   var oldLoad = window.onload;
   window.onload = function() {
     if (typeof oldLoad == 'function') oldLoad();
     analyticsLoad();
   }; 
 }
</script>
  </body>
</html>
