
<div id="menu">
 
<ul id="nav">
<li><a href="#">Menu 1</a>
 <ul>
 <li><a href="#">Menu 1 Submenu item 1</a></li>
 <li><a href="#">Menu 1 Submenu item 2</a></li>
 <li><a href="#">Menu 1 Submenu item 3</a></li>
 </ul>
</li>
 
<li><a href="#">Menu 2</a>
 <ul>
 <li><a href="#">Menu 2 Submenu item 1</a></li>
 <li><a href="#">Menu 2 Submenu item 2</a></li>
 <li><a href="#">Menu 2 Submenu item 3</a></li>
 </ul>
</li>
 
<li><a href="#">Menu 3</a>
 <ul>
 <li><a href="#">Menu 3 Submenu item 1</a></li>
 <li><a href="#">Menu 3 Submenu item 2</a></li>
 <li><a href="#">Menu 3 Submenu item 3</a></li>
 </ul>
</li>
</ul>
 
</div>
 

<style>

#menu {
  width: 960px;
  height: 40px;
  clear: both;
}
 
ul#nav {
  float: left;
  width: 960px;
  margin: 0;
  padding: 0;
  list-style: none;
  background: #dc0000 url(../img/menu-parent.png) repeat-x;
  -moz-border-radius-topright: 10px;
  -webkit-border-top-right-radius: 10px;
  -moz-border-radius-topleft: 10px;
  -webkit-border-top-left-radius: 10px; 
}
 
ul#nav li {
  display: inline;
}
 
ul#nav li a {
  float: left;
  font: bold 1.1em arial,verdana,tahoma,sans-serif;
  line-height: 40px;
  color: #fff;
  text-decoration: none;
  text-shadow: 1px 1px 1px #880000;
  margin: 0;
  padding: 0 30px;
  background: #dc0000 url(../img/menu-parent.png) repeat-x;
  -moz-border-radius-topright: 10px;
  -webkit-border-top-right-radius: 10px;
  -moz-border-radius-topleft: 10px;
  -webkit-border-top-left-radius: 10px;    
}
 
/* APPLIES THE ACTIVE STATE */
ul#nav .current a, ul#nav li:hover > a  {
  color: #fff;
  text-decoration: none;
  text-shadow: 1px 1px 1px #330000;
  background: #bb0000;
  -moz-border-radius-topright: 10px;
  -webkit-border-top-right-radius: 10px;
  -moz-border-radius-topleft: 10px;
  -webkit-border-top-left-radius: 10px;
}
 
/* THE SUBMENU LIST HIDDEN BY DEFAULT */
ul#nav  ul {
  display: none;
}
 
/* WHEN THE FIRST LEVEL MENU ITEM IS HOVERED, THE CHILD MENU APPEARS */
ul#nav li:hover > ul {
  position: absolute;
  display: block;
  width: 920px;
  height: 45px;
  position: absolute;
  margin: 40px 0 0 0;
  background: #aa0000 url(../img/menu-child.png) repeat-x; 
  -moz-border-radius-bottomright: 10px;
  -webkit-border-bottom-right-radius: 10px;
  -moz-border-radius-bottomleft: 10px;
  -webkit-border-bottom-left-radius: 10px;
}
 
ul#nav li:hover > ul li a {
  float: left;
  font: bold 1.1em arial,verdana,tahoma,sans-serif;
  line-height: 45px;
  color: #fff;
  text-decoration: none;
  text-shadow: 1px 1px 1px #110000;
  margin: 0;
  padding: 0 30px 0 0;
  background: #aa0000 url(../img/menu-child.png) repeat-x;
}
 
ul#nav li:hover > ul li a:hover {
  color: #120000;
  text-decoration: none;
  text-shadow: none;
}
</style>