<div id="menubar">  
<ul class="menu-level-1">
    <li><a href="http://www2.warwick.ac.uk/fac/soc/al/centre/">The Centre</a></li><?php 
if(isset($UserStatus) and !$UserStatus == '' and TRUE){?>
    <li class="<?=($Menu=='ba'?'current-page':'');?>"><a href="/ba/ba">BA LCC</a>
        <ul class="menu-level-2">
            <li class="<?=($NextPage=='ba/ba_modules'?'current-page':'');?>"><a href="/ba/modules">Modules</a></li>
            <li class="<?=($NextPage=='ba/ba_students'?'current-page':'');?>"><a href="/ba/students">Students</a></li>
            <li class="<?=($NextPage=='ba/ba_classes'?'current-page':'');?>"><a href="/ba/classes">Classes</a></li>
            <li class="<?=($NextPage=='ba/ba_registers'?'current-page':'');?>"><a href="/ba/registers">Registers</a></li>
            <li class="<?=($NextPage=='ba/ba_attendance'?'current-page':'');?>"><a href="/ba/attendance">Attendance</a></li>
            <li class="<?=($NextPage=='ba/ba_monitoring'?'current-page':'');?>"><a href="/ba/monitoring">Monitoring</a></li>
            <li class="<?=($NextPage=='ba/ba_reports'?'current-page':'');?>"><a href="/ba/reports">Reports</a></li>
        </ul>
    </li><?php
} else {?>
    <li></li><?php
} 
if(isset($UserStatus) and !$UserStatus == '' and TRUE){?>
    <li class="current">
        <a href="/ins/insessional">In-sessional</a>
        <ul class="menu-level-2">
            <li class="<?=($NextPage=='ins/submissions'?'current-page':'');?>"><a href="/ins/submissions">Submissions</a></li>
            <li class="<?=($NextPage=='ins/studentlist'?'current-page':'');?>"><a href="/ins/students">Students</a></li>
            <li class="<?=($NextPage=='ins/classlist'?'current-page':'');?>"><a href="/ins/classes">Classes</a></li><?php
    if(isset($UserStatus) and ($UserStatus=='Admin' or $UserStatus=='Manager' or $UserStatus=='Tutor')){?> 
            <li class="<?=($NextPage=='ins/registers'?'current-page':'');?>"><a href="/ins/registers">Registers</a></li>
            <li class="<?=($NextPage=='ins/reports'?'current-page':'');?>"><a href="/ins/reports">Reports</a></li><?php
    }?> 
        </ul>
    </li><?php
} else { ?>
    <li></li><?php 
}
if(isset($UserStatus) and ($UserStatus == 'Admin' or $UserStatus == 'Manager')){?>
    <li><a href="/manager/managerhome">Manager</a>
        <ul class="menu-level-2">
            <li class="<?=($NextPage=='manager/managerhome'?'current-page':'');?>"><a href="/manager/managerhome">Not in Use</a></li>
            <li class="<?=($NextPage=='manager/managerhome'?'current-page':'');?>"><a href="/manager/managerhome">Not in Use</a></li>
        </ul>
    </li><?php
} else {?>
    <li></li><?php
}   
if(isset($UserStatus) and ($UserStatus == 'Admin')){?>
    <li><a href="/admin/adminhome">Admin</a>
        <ul class="menu-level-2">
            <li class="<?=($NextPage=='admin/userlist'?'current-page':'');?>"><a href="/admin/userlist">User List</a></li>
            <li class="<?=($NextPage=='admin/valuesedit'?'current-page':'');?>"><a href="/admin/valuesedit">System Values</a></li>
        </ul>
    </li><?php
} else {?>
    <li></li><?php 
}?>
    <li></li>
    <li></li>
    <li></li>
</ul>
</div>
<style>   
/* Menu Styles */
#menubar {
    font: 12pt Times New Roman, serif;
    width:960px;
    padding: 0;
    margin: 0;
    color: #FFFFFF;
    background: #404040;
}
ul.menu-level-1 {
    list-style: none;
    padding: 0;
    margin: 0;
    color: #FFFFFF;
    background: #404040;  
}
ul.menu-level-1 > li {
    position: relative;
    float: left;
    height: 25px;
    width: 116px;
    margin: 0;
    font-weight: normal;
    background: #404040;
    padding: 0 0 0 4px;
    line-height: 25px;
}
ul.menu-level-2 {
    position: absolute;
    top: 25px;
    left: 0;
    width: 120px;
    list-style: none;
    padding: 0;
    margin: 0;
    display: none;
}
ul.menu-level-2 > li {
    position: relative;
    height: 25px;
    margin: 0;
    padding: 0 0 0 4px;
    color: #FFFFFF;
    font-weight: normal;
    background: #404040;
}
ul.menu-level-3 {
    position: absolute;
    top: 0;
    right: -120px;
    width: 120px;
    list-style: none;
    padding: 0 0 0 4px;
    display: none;
}
ul.menu-level-3 > li {
    height: 25px;
    color: #FFFFFF;
    font-weight: normal;
    background: #404040;
}
// Menu Link Styles
/* Apply to all links inside the multi-level menu */
ul.menu-level-1 li a {
    /* Make the link cover the entire list item-container */
    display: block;
    color: #FFFFFF;
    line-height: 25px;
    text-decoration: none;
}
ul.menu-level-1 > li.current-page {color: #FFFFFF; background: #c93e3c;}
ul.menu-level-2 > li.current-page {color: #FFFFFF; background: #c93e3c;}
ul.menu-level-3 > li.current-page {color: #FFFFFF; background: #c93e3c;}
ul.menu-level-1 > li:hover {color: #FFFFFF; background: #c93e3c; font-weight: bold;}
ul.menu-level-2 > li:hover {color: #FFFFFF; background: #c93e3c; font-weight: bold;}
ul.menu-level-3 > li:hover {color: #FFFFFF; background: #c93e3c; font-weight: bold;}
/* On hover, display the next level's menu */
ul.menu-level-1 li:hover > ul { display: inline;}
/* Ensure that anchor links use the colour from the LI tag they sit in */
ul.menu-level-1 a {color: inherit; background: inherit; text-decoration: none; width: 116px;}
/* Can a class be changed when an item is selected ?? */
ul.menu-level-1 li:active {class:current;}
/* Sticky menu floating to top of screen */
div.menubar.fixed {position: fixed;top: 0px;bottom: auto;}
div.menubar.fixed-bottom {position: absolute;z-index: auto;bottom: 0px;top: auto;}
</style>
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
<script type="text/javascript" src="scripts/sticky.js"></script>
<script>    
// Sticky Plugin v1.0.0 for jQuery - http://stickyjs.com/
// Requires the file sticky.js 
$(function(){
    $("#menubar").sticky({topSpacing:0,getWidthFrom:"#menubar"});
});
</script>
