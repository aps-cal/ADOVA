<div id="menubar">
    
<ul class="menu-level-1">
    <li><a href="#">The Centre</a></li>
    <li><a href="#">BA LCC</a>
        <ul class="menu-level-2">
            <li><a href="#">Modules</a></li>
            <li><a href="#">Students</a></li>
            <li><a href="#">Classes</a></li>
            <li><a href="#">Registers</a></li>
            <li><a href="#">Attendance</a></li>
            <li><a href="#">Monitoring</a></li>
            <li><a href="#">Reports</a></li>
        </ul>
    </li>
    <li class="current">
        <a href="#">In-sessional</a>
        <ul class="menu-level-2">
            <li><a href="#">Submissions</a></li>
            <li><a href="#">Students</a></li>
            <li class="current"><a href="#">Classes</a></li>
            <li><a href="#">Registers</a></li>
            <li><a href="#">Reports</a></li>
        </ul>
    </li>
    <li><a href="#">Manager</a></li>
    <li>Admin
        <ul class="menu-level-2">
            <li><a href="#">Reports</a>
                <ul class="menu-level-3">
                    <li><a href="#">Report 1</a></li>
                    <li><a href="#">Report 2</a></li>
                    <li><a href="#">Report 3</a></li>
                    <li><a href="#">Report 4</a></li>
                </ul>
            </li>
            <li><a href="#">System Update</a></li>
        </ul>
    </li>
</ul>
</div> 
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<style>   
/* Menu Styles */
#menubar {
    font: 14px Arial, Helvetica, sans-serif;
    width:100%;
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
    width: 150px;
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
    width: 150px;
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
    right: -150px;
    width: 150px;
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
ul.menu-level-1 > li.current {color: #FFFFFF; background: #c93e3c;}
ul.menu-level-2 > li.current {color: #FFFFFF; background: #c93e3c;}
ul.menu-level-3 > li.current {color: #FFFFFF; background: #c93e3c;}
ul.menu-level-1 > li:hover {color: #FFFF00; background: #c93e3c; font-weight: bold;}
ul.menu-level-2 > li:hover {color: #FFFF00; background: #c93e3c; font-weight: bold;}
ul.menu-level-3 > li:hover {color: #FFFF00; background: #c93e3c; font-weight: bold;}
/* On hover, display the next level's menu */
ul.menu-level-1 li:hover > ul { display: inline;}
/* Ensure that anchor links use the colour from the LI tag they sit in */
ul.menu-level-1 a {color: inherit; background: inherit; text-decoration: none; width: 100%;}
/* Can a class be changed when an item is selected ?? */
ul.menu-level-1 li:active {class:current;}
/* Sticky menu floating to top of screen */
div.menubar.fixed {position: fixed;top: 0px;bottom: auto;}
div.menubar.fixed-bottom {position: absolute;z-index: auto;bottom: 0px;top: auto;}
</style>

<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
<script type="text/javascript" src="../scripts/sticky.js"></script>
<script>    
// Sticky Plugin v1.0.0 for jQuery - http://stickyjs.com/
// Requires the file sticky.js 
$(function(){
    $("#menubar").sticky({topSpacing:0});
});
</script>
