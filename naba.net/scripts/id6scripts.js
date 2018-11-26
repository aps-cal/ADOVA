/*
 * jQuery JavaScript Library v1.7.2
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Wed Mar 21 12:46:34 2012 -0700
 */
(function(bo,U){var aF=bo.document,bF=bo.navigator,bx=bo.location;
var b=(function(){var bR=function(cc,cd){return new bR.fn.init(cc,cd,bP)
},b6=bo.jQuery,bT=bo.$,bP,ca=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,bY=/\S/,bU=/^\s+/,bQ=/\s+$/,bM=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,bZ=/^[\],:{}\s]*$/,b8=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,b1=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,bV=/(?:^|:|,)(?:\s*\[)+/g,bK=/(webkit)[ \/]([\w.]+)/,b3=/(opera)(?:.*version)?[ \/]([\w.]+)/,b2=/(msie) ([\w.]+)/,b4=/(mozilla)(?:.*? rv:([\w.]+))?/,bN=/-([a-z]|[0-9])/ig,cb=/^-ms-/,b5=function(cc,cd){return(cd+"").toUpperCase()
},b9=bF.userAgent,b7,bO,bG,bX=Object.prototype.toString,bS=Object.prototype.hasOwnProperty,bL=Array.prototype.push,bW=Array.prototype.slice,b0=String.prototype.trim,bH=Array.prototype.indexOf,bJ={};
bR.fn=bR.prototype={constructor:bR,init:function(cc,cg,cf){var ce,ch,cd,ci;
if(!cc){return this
}if(cc.nodeType){this.context=this[0]=cc;
this.length=1;
return this
}if(cc==="body"&&!cg&&aF.body){this.context=aF;
this[0]=aF.body;
this.selector=cc;
this.length=1;
return this
}if(typeof cc==="string"){if(cc.charAt(0)==="<"&&cc.charAt(cc.length-1)===">"&&cc.length>=3){ce=[null,cc,null]
}else{ce=ca.exec(cc)
}if(ce&&(ce[1]||!cg)){if(ce[1]){cg=cg instanceof bR?cg[0]:cg;
ci=(cg?cg.ownerDocument||cg:aF);
cd=bM.exec(cc);
if(cd){if(bR.isPlainObject(cg)){cc=[aF.createElement(cd[1])];
bR.fn.attr.call(cc,cg,true)
}else{cc=[ci.createElement(cd[1])]
}}else{cd=bR.buildFragment([ce[1]],[ci]);
cc=(cd.cacheable?bR.clone(cd.fragment):cd.fragment).childNodes
}return bR.merge(this,cc)
}else{ch=aF.getElementById(ce[2]);
if(ch&&ch.parentNode){if(ch.id!==ce[2]){return cf.find(cc)
}this.length=1;
this[0]=ch
}this.context=aF;
this.selector=cc;
return this
}}else{if(!cg||cg.jquery){return(cg||cf).find(cc)
}else{return this.constructor(cg).find(cc)
}}}else{if(bR.isFunction(cc)){return cf.ready(cc)
}}if(cc.selector!==U){this.selector=cc.selector;
this.context=cc.context
}return bR.makeArray(cc,this)
},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length
},toArray:function(){return bW.call(this,0)
},get:function(cc){return cc==null?this.toArray():(cc<0?this[this.length+cc]:this[cc])
},pushStack:function(cd,cf,cc){var ce=this.constructor();
if(bR.isArray(cd)){bL.apply(ce,cd)
}else{bR.merge(ce,cd)
}ce.prevObject=this;
ce.context=this.context;
if(cf==="find"){ce.selector=this.selector+(this.selector?" ":"")+cc
}else{if(cf){ce.selector=this.selector+"."+cf+"("+cc+")"
}}return ce
},each:function(cd,cc){return bR.each(this,cd,cc)
},ready:function(cc){bR.bindReady();
bO.add(cc);
return this
},eq:function(cc){cc=+cc;
return cc===-1?this.slice(cc):this.slice(cc,cc+1)
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},slice:function(){return this.pushStack(bW.apply(this,arguments),"slice",bW.call(arguments).join(","))
},map:function(cc){return this.pushStack(bR.map(this,function(ce,cd){return cc.call(ce,cd,ce)
}))
},end:function(){return this.prevObject||this.constructor(null)
},push:bL,sort:[].sort,splice:[].splice};
bR.fn.init.prototype=bR.fn;
bR.extend=bR.fn.extend=function(){var cl,ce,cc,cd,ci,cj,ch=arguments[0]||{},cg=1,cf=arguments.length,ck=false;
if(typeof ch==="boolean"){ck=ch;
ch=arguments[1]||{};
cg=2
}if(typeof ch!=="object"&&!bR.isFunction(ch)){ch={}
}if(cf===cg){ch=this;
--cg
}for(;
cg<cf;
cg++){if((cl=arguments[cg])!=null){for(ce in cl){cc=ch[ce];
cd=cl[ce];
if(ch===cd){continue
}if(ck&&cd&&(bR.isPlainObject(cd)||(ci=bR.isArray(cd)))){if(ci){ci=false;
cj=cc&&bR.isArray(cc)?cc:[]
}else{cj=cc&&bR.isPlainObject(cc)?cc:{}
}ch[ce]=bR.extend(ck,cj,cd)
}else{if(cd!==U){ch[ce]=cd
}}}}}return ch
};
bR.extend({noConflict:function(cc){if(bo.$===bR){bo.$=bT
}if(cc&&bo.jQuery===bR){bo.jQuery=b6
}return bR
},isReady:false,readyWait:1,holdReady:function(cc){if(cc){bR.readyWait++
}else{bR.ready(true)
}},ready:function(cc){if((cc===true&&!--bR.readyWait)||(cc!==true&&!bR.isReady)){if(!aF.body){return setTimeout(bR.ready,1)
}bR.isReady=true;
if(cc!==true&&--bR.readyWait>0){return
}bO.fireWith(aF,[bR]);
if(bR.fn.trigger){bR(aF).trigger("ready").off("ready")
}}},bindReady:function(){if(bO){return
}bO=bR.Callbacks("once memory");
if(aF.readyState==="complete"){return setTimeout(bR.ready,1)
}if(aF.addEventListener){aF.addEventListener("DOMContentLoaded",bG,false);
bo.addEventListener("load",bR.ready,false)
}else{if(aF.attachEvent){aF.attachEvent("onreadystatechange",bG);
bo.attachEvent("onload",bR.ready);
var cc=false;
try{cc=bo.frameElement==null
}catch(cd){}if(aF.documentElement.doScroll&&cc){bI()
}}}},isFunction:function(cc){return bR.type(cc)==="function"
},isArray:Array.isArray||function(cc){return bR.type(cc)==="array"
},isWindow:function(cc){return cc!=null&&cc==cc.window
},isNumeric:function(cc){return !isNaN(parseFloat(cc))&&isFinite(cc)
},type:function(cc){return cc==null?String(cc):bJ[bX.call(cc)]||"object"
},isPlainObject:function(ce){if(!ce||bR.type(ce)!=="object"||ce.nodeType||bR.isWindow(ce)){return false
}try{if(ce.constructor&&!bS.call(ce,"constructor")&&!bS.call(ce.constructor.prototype,"isPrototypeOf")){return false
}}catch(cd){return false
}var cc;
for(cc in ce){}return cc===U||bS.call(ce,cc)
},isEmptyObject:function(cd){for(var cc in cd){return false
}return true
},error:function(cc){throw new Error(cc)
},parseJSON:function(cc){if(typeof cc!=="string"||!cc){return null
}cc=bR.trim(cc);
if(bo.JSON&&bo.JSON.parse){return bo.JSON.parse(cc)
}if(bZ.test(cc.replace(b8,"@").replace(b1,"]").replace(bV,""))){return(new Function("return "+cc))()
}bR.error("Invalid JSON: "+cc)
},parseXML:function(ce){if(typeof ce!=="string"||!ce){return null
}var cc,cd;
try{if(bo.DOMParser){cd=new DOMParser();
cc=cd.parseFromString(ce,"text/xml")
}else{cc=new ActiveXObject("Microsoft.XMLDOM");
cc.async="false";
cc.loadXML(ce)
}}catch(cf){cc=U
}if(!cc||!cc.documentElement||cc.getElementsByTagName("parsererror").length){bR.error("Invalid XML: "+ce)
}return cc
},noop:function(){},globalEval:function(cc){if(cc&&bY.test(cc)){(bo.execScript||function(cd){bo["eval"].call(bo,cd)
})(cc)
}},camelCase:function(cc){return cc.replace(cb,"ms-").replace(bN,b5)
},nodeName:function(cd,cc){return cd.nodeName&&cd.nodeName.toUpperCase()===cc.toUpperCase()
},each:function(cf,ci,ce){var cd,cg=0,ch=cf.length,cc=ch===U||bR.isFunction(cf);
if(ce){if(cc){for(cd in cf){if(ci.apply(cf[cd],ce)===false){break
}}}else{for(;
cg<ch;
){if(ci.apply(cf[cg++],ce)===false){break
}}}}else{if(cc){for(cd in cf){if(ci.call(cf[cd],cd,cf[cd])===false){break
}}}else{for(;
cg<ch;
){if(ci.call(cf[cg],cg,cf[cg++])===false){break
}}}}return cf
},trim:b0?function(cc){return cc==null?"":b0.call(cc)
}:function(cc){return cc==null?"":cc.toString().replace(bU,"").replace(bQ,"")
},makeArray:function(cf,cd){var cc=cd||[];
if(cf!=null){var ce=bR.type(cf);
if(cf.length==null||ce==="string"||ce==="function"||ce==="regexp"||bR.isWindow(cf)){bL.call(cc,cf)
}else{bR.merge(cc,cf)
}}return cc
},inArray:function(ce,cf,cd){var cc;
if(cf){if(bH){return bH.call(cf,ce,cd)
}cc=cf.length;
cd=cd?cd<0?Math.max(0,cc+cd):cd:0;
for(;
cd<cc;
cd++){if(cd in cf&&cf[cd]===ce){return cd
}}}return -1
},merge:function(cg,ce){var cf=cg.length,cd=0;
if(typeof ce.length==="number"){for(var cc=ce.length;
cd<cc;
cd++){cg[cf++]=ce[cd]
}}else{while(ce[cd]!==U){cg[cf++]=ce[cd++]
}}cg.length=cf;
return cg
},grep:function(cd,ci,cc){var ce=[],ch;
cc=!!cc;
for(var cf=0,cg=cd.length;
cf<cg;
cf++){ch=!!ci(cd[cf],cf);
if(cc!==ch){ce.push(cd[cf])
}}return ce
},map:function(cc,cj,ck){var ch,ci,cg=[],ce=0,cd=cc.length,cf=cc instanceof bR||cd!==U&&typeof cd==="number"&&((cd>0&&cc[0]&&cc[cd-1])||cd===0||bR.isArray(cc));
if(cf){for(;
ce<cd;
ce++){ch=cj(cc[ce],ce,ck);
if(ch!=null){cg[cg.length]=ch
}}}else{for(ci in cc){ch=cj(cc[ci],ci,ck);
if(ch!=null){cg[cg.length]=ch
}}}return cg.concat.apply([],cg)
},guid:1,proxy:function(cg,cf){if(typeof cf==="string"){var ce=cg[cf];
cf=cg;
cg=ce
}if(!bR.isFunction(cg)){return U
}var cc=bW.call(arguments,2),cd=function(){return cg.apply(cf,cc.concat(bW.call(arguments)))
};
cd.guid=cg.guid=cg.guid||cd.guid||bR.guid++;
return cd
},access:function(cc,ci,cl,cj,cg,cm,ck){var ce,ch=cl==null,cf=0,cd=cc.length;
if(cl&&typeof cl==="object"){for(cf in cl){bR.access(cc,ci,cf,cl[cf],1,cm,cj)
}cg=1
}else{if(cj!==U){ce=ck===U&&bR.isFunction(cj);
if(ch){if(ce){ce=ci;
ci=function(co,cn,cp){return ce.call(bR(co),cp)
}
}else{ci.call(cc,cj);
ci=null
}}if(ci){for(;
cf<cd;
cf++){ci(cc[cf],cl,ce?cj.call(cc[cf],cf,ci(cc[cf],cl)):cj,ck)
}}cg=1
}}return cg?cc:ch?ci.call(cc):cd?ci(cc[0],cl):cm
},now:function(){return(new Date()).getTime()
},uaMatch:function(cd){cd=cd.toLowerCase();
var cc=bK.exec(cd)||b3.exec(cd)||b2.exec(cd)||cd.indexOf("compatible")<0&&b4.exec(cd)||[];
return{browser:cc[1]||"",version:cc[2]||"0"}
},sub:function(){function cc(cf,cg){return new cc.fn.init(cf,cg)
}bR.extend(true,cc,this);
cc.superclass=this;
cc.fn=cc.prototype=this();
cc.fn.constructor=cc;
cc.sub=this.sub;
cc.fn.init=function ce(cf,cg){if(cg&&cg instanceof bR&&!(cg instanceof cc)){cg=cc(cg)
}return bR.fn.init.call(this,cf,cg,cd)
};
cc.fn.init.prototype=cc.fn;
var cd=cc(aF);
return cc
},browser:{}});
bR.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(cd,cc){bJ["[object "+cc+"]"]=cc.toLowerCase()
});
b7=bR.uaMatch(b9);
if(b7.browser){bR.browser[b7.browser]=true;
bR.browser.version=b7.version
}if(bR.browser.webkit){bR.browser.safari=true
}if(bY.test("\xA0")){bU=/^[\s\xA0]+/;
bQ=/[\s\xA0]+$/
}bP=bR(aF);
if(aF.addEventListener){bG=function(){aF.removeEventListener("DOMContentLoaded",bG,false);
bR.ready()
}
}else{if(aF.attachEvent){bG=function(){if(aF.readyState==="complete"){aF.detachEvent("onreadystatechange",bG);
bR.ready()
}}
}}function bI(){if(bR.isReady){return
}try{aF.documentElement.doScroll("left")
}catch(cc){setTimeout(bI,1);
return
}bR.ready()
}return bR
})();
var be={};
function ah(bG){var bH=be[bG]={},bI,bJ;
bG=bG.split(/\s+/);
for(bI=0,bJ=bG.length;
bI<bJ;
bI++){bH[bG[bI]]=true
}return bH
}b.Callbacks=function(bJ){bJ=bJ?(be[bJ]||ah(bJ)):{};
var bO=[],bP=[],bK,bG,bL,bI,bM,bN,bR=function(bS){var bT,bW,bV,bU,bX;
for(bT=0,bW=bS.length;
bT<bW;
bT++){bV=bS[bT];
bU=b.type(bV);
if(bU==="array"){bR(bV)
}else{if(bU==="function"){if(!bJ.unique||!bQ.has(bV)){bO.push(bV)
}}}}},bH=function(bT,bS){bS=bS||[];
bK=!bJ.memory||[bT,bS];
bG=true;
bL=true;
bN=bI||0;
bI=0;
bM=bO.length;
for(;
bO&&bN<bM;
bN++){if(bO[bN].apply(bT,bS)===false&&bJ.stopOnFalse){bK=true;
break
}}bL=false;
if(bO){if(!bJ.once){if(bP&&bP.length){bK=bP.shift();
bQ.fireWith(bK[0],bK[1])
}}else{if(bK===true){bQ.disable()
}else{bO=[]
}}}},bQ={add:function(){if(bO){var bS=bO.length;
bR(arguments);
if(bL){bM=bO.length
}else{if(bK&&bK!==true){bI=bS;
bH(bK[0],bK[1])
}}}return this
},remove:function(){if(bO){var bS=arguments,bU=0,bV=bS.length;
for(;
bU<bV;
bU++){for(var bT=0;
bT<bO.length;
bT++){if(bS[bU]===bO[bT]){if(bL){if(bT<=bM){bM--;
if(bT<=bN){bN--
}}}bO.splice(bT--,1);
if(bJ.unique){break
}}}}}return this
},has:function(bT){if(bO){var bS=0,bU=bO.length;
for(;
bS<bU;
bS++){if(bT===bO[bS]){return true
}}}return false
},empty:function(){bO=[];
return this
},disable:function(){bO=bP=bK=U;
return this
},disabled:function(){return !bO
},lock:function(){bP=U;
if(!bK||bK===true){bQ.disable()
}return this
},locked:function(){return !bP
},fireWith:function(bT,bS){if(bP){if(bL){if(!bJ.once){bP.push([bT,bS])
}}else{if(!(bJ.once&&bK)){bH(bT,bS)
}}}return this
},fire:function(){bQ.fireWith(this,arguments);
return this
},fired:function(){return !!bG
}};
return bQ
};
var aU=[].slice;
b.extend({Deferred:function(bK){var bJ=b.Callbacks("once memory"),bI=b.Callbacks("once memory"),bH=b.Callbacks("memory"),bG="pending",bM={resolve:bJ,reject:bI,notify:bH},bO={done:bJ.add,fail:bI.add,progress:bH.add,state:function(){return bG
},isResolved:bJ.fired,isRejected:bI.fired,then:function(bQ,bP,bR){bN.done(bQ).fail(bP).progress(bR);
return this
},always:function(){bN.done.apply(bN,arguments).fail.apply(bN,arguments);
return this
},pipe:function(bR,bQ,bP){return b.Deferred(function(bS){b.each({done:[bR,"resolve"],fail:[bQ,"reject"],progress:[bP,"notify"]},function(bU,bX){var bT=bX[0],bW=bX[1],bV;
if(b.isFunction(bT)){bN[bU](function(){bV=bT.apply(this,arguments);
if(bV&&b.isFunction(bV.promise)){bV.promise().then(bS.resolve,bS.reject,bS.notify)
}else{bS[bW+"With"](this===bN?bS:this,[bV])
}})
}else{bN[bU](bS[bW])
}})
}).promise()
},promise:function(bQ){if(bQ==null){bQ=bO
}else{for(var bP in bO){bQ[bP]=bO[bP]
}}return bQ
}},bN=bO.promise({}),bL;
for(bL in bM){bN[bL]=bM[bL].fire;
bN[bL+"With"]=bM[bL].fireWith
}bN.done(function(){bG="resolved"
},bI.disable,bH.lock).fail(function(){bG="rejected"
},bJ.disable,bH.lock);
if(bK){bK.call(bN,bN)
}return bN
},when:function(bM){var bJ=aU.call(arguments,0),bH=0,bG=bJ.length,bN=new Array(bG),bI=bG,bK=bG,bO=bG<=1&&bM&&b.isFunction(bM.promise)?bM:b.Deferred(),bQ=bO.promise();
function bP(bR){return function(bS){bJ[bR]=arguments.length>1?aU.call(arguments,0):bS;
if(!(--bI)){bO.resolveWith(bO,bJ)
}}
}function bL(bR){return function(bS){bN[bR]=arguments.length>1?aU.call(arguments,0):bS;
bO.notifyWith(bQ,bN)
}
}if(bG>1){for(;
bH<bG;
bH++){if(bJ[bH]&&bJ[bH].promise&&b.isFunction(bJ[bH].promise)){bJ[bH].promise().then(bP(bH),bO.reject,bL(bH))
}else{--bI
}}if(!bI){bO.resolveWith(bO,bJ)
}}else{if(bO!==bM){bO.resolveWith(bO,bG?[bM]:[])
}}return bQ
}});
b.support=(function(){var bT,bS,bP,bQ,bI,bO,bN,bK,bU,bL,bJ,bH,bG=aF.createElement("div"),bR=aF.documentElement;
bG.setAttribute("className","t");
bG.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
bS=bG.getElementsByTagName("*");
bP=bG.getElementsByTagName("a")[0];
if(!bS||!bS.length||!bP){return{}
}bQ=aF.createElement("select");
bI=bQ.appendChild(aF.createElement("option"));
bO=bG.getElementsByTagName("input")[0];
bT={leadingWhitespace:(bG.firstChild.nodeType===3),tbody:!bG.getElementsByTagName("tbody").length,htmlSerialize:!!bG.getElementsByTagName("link").length,style:/top/.test(bP.getAttribute("style")),hrefNormalized:(bP.getAttribute("href")==="/a"),opacity:/^0.55/.test(bP.style.opacity),cssFloat:!!bP.style.cssFloat,checkOn:(bO.value==="on"),optSelected:bI.selected,getSetAttribute:bG.className!=="t",enctype:!!aF.createElement("form").enctype,html5Clone:aF.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>",submitBubbles:true,changeBubbles:true,focusinBubbles:false,deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true,pixelMargin:true};
b.boxModel=bT.boxModel=(aF.compatMode==="CSS1Compat");
bO.checked=true;
bT.noCloneChecked=bO.cloneNode(true).checked;
bQ.disabled=true;
bT.optDisabled=!bI.disabled;
try{delete bG.test
}catch(bM){bT.deleteExpando=false
}if(!bG.addEventListener&&bG.attachEvent&&bG.fireEvent){bG.attachEvent("onclick",function(){bT.noCloneEvent=false
});
bG.cloneNode(true).fireEvent("onclick")
}bO=aF.createElement("input");
bO.value="t";
bO.setAttribute("type","radio");
bT.radioValue=bO.value==="t";
bO.setAttribute("checked","checked");
bO.setAttribute("name","t");
bG.appendChild(bO);
bN=aF.createDocumentFragment();
bN.appendChild(bG.lastChild);
bT.checkClone=bN.cloneNode(true).cloneNode(true).lastChild.checked;
bT.appendChecked=bO.checked;
bN.removeChild(bO);
bN.appendChild(bG);
if(bG.attachEvent){for(bJ in {submit:1,change:1,focusin:1}){bL="on"+bJ;
bH=(bL in bG);
if(!bH){bG.setAttribute(bL,"return;");
bH=(typeof bG[bL]==="function")
}bT[bJ+"Bubbles"]=bH
}}bN.removeChild(bG);
bN=bQ=bI=bG=bO=null;
b(function(){var bY,b7,b8,b6,b0,b1,b3,bX,bW,b2,bZ,bV,b5,b4=aF.getElementsByTagName("body")[0];
if(!b4){return
}bX=1;
b5="padding:0;margin:0;border:";
bZ="position:absolute;top:0;left:0;width:1px;height:1px;";
bV=b5+"0;visibility:hidden;";
bW="style='"+bZ+b5+"5px solid #000;";
b2="<div "+bW+"display:block;'><div style='"+b5+"0;display:block;overflow:hidden;'></div></div><table "+bW+"' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
bY=aF.createElement("div");
bY.style.cssText=bV+"width:0;height:0;position:static;top:0;margin-top:"+bX+"px";
b4.insertBefore(bY,b4.firstChild);
bG=aF.createElement("div");
bY.appendChild(bG);
bG.innerHTML="<table><tr><td style='"+b5+"0;display:none'></td><td>t</td></tr></table>";
bK=bG.getElementsByTagName("td");
bH=(bK[0].offsetHeight===0);
bK[0].style.display="";
bK[1].style.display="none";
bT.reliableHiddenOffsets=bH&&(bK[0].offsetHeight===0);
if(bo.getComputedStyle){bG.innerHTML="";
b3=aF.createElement("div");
b3.style.width="0";
b3.style.marginRight="0";
bG.style.width="2px";
bG.appendChild(b3);
bT.reliableMarginRight=(parseInt((bo.getComputedStyle(b3,null)||{marginRight:0}).marginRight,10)||0)===0
}if(typeof bG.style.zoom!=="undefined"){bG.innerHTML="";
bG.style.width=bG.style.padding="1px";
bG.style.border=0;
bG.style.overflow="hidden";
bG.style.display="inline";
bG.style.zoom=1;
bT.inlineBlockNeedsLayout=(bG.offsetWidth===3);
bG.style.display="block";
bG.style.overflow="visible";
bG.innerHTML="<div style='width:5px;'></div>";
bT.shrinkWrapBlocks=(bG.offsetWidth!==3)
}bG.style.cssText=bZ+bV;
bG.innerHTML=b2;
b7=bG.firstChild;
b8=b7.firstChild;
b0=b7.nextSibling.firstChild.firstChild;
b1={doesNotAddBorder:(b8.offsetTop!==5),doesAddBorderForTableAndCells:(b0.offsetTop===5)};
b8.style.position="fixed";
b8.style.top="20px";
b1.fixedPosition=(b8.offsetTop===20||b8.offsetTop===15);
b8.style.position=b8.style.top="";
b7.style.overflow="hidden";
b7.style.position="relative";
b1.subtractsBorderForOverflowNotVisible=(b8.offsetTop===-5);
b1.doesNotIncludeMarginInBodyOffset=(b4.offsetTop!==bX);
if(bo.getComputedStyle){bG.style.marginTop="1%";
bT.pixelMargin=(bo.getComputedStyle(bG,null)||{marginTop:0}).marginTop!=="1%"
}if(typeof bY.style.zoom!=="undefined"){bY.style.zoom=1
}b4.removeChild(bY);
b3=bG=bY=null;
b.extend(bT,b1)
});
return bT
})();
var a3=/^(?:\{.*\}|\[.*\])$/,aK=/([A-Z])/g;
b.extend({cache:{},uuid:0,expando:"jQuery"+(b.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},hasData:function(bG){bG=bG.nodeType?b.cache[bG[b.expando]]:bG[b.expando];
return !!bG&&!ac(bG)
},data:function(bJ,bH,bL,bK){if(!b.acceptData(bJ)){return
}var bS,bM,bP,bQ=b.expando,bO=typeof bH==="string",bR=bJ.nodeType,bG=bR?b.cache:bJ,bI=bR?bJ[bQ]:bJ[bQ]&&bQ,bN=bH==="events";
if((!bI||!bG[bI]||(!bN&&!bK&&!bG[bI].data))&&bO&&bL===U){return
}if(!bI){if(bR){bJ[bQ]=bI=++b.uuid
}else{bI=bQ
}}if(!bG[bI]){bG[bI]={};
if(!bR){bG[bI].toJSON=b.noop
}}if(typeof bH==="object"||typeof bH==="function"){if(bK){bG[bI]=b.extend(bG[bI],bH)
}else{bG[bI].data=b.extend(bG[bI].data,bH)
}}bS=bM=bG[bI];
if(!bK){if(!bM.data){bM.data={}
}bM=bM.data
}if(bL!==U){bM[b.camelCase(bH)]=bL
}if(bN&&!bM[bH]){return bS.events
}if(bO){bP=bM[bH];
if(bP==null){bP=bM[b.camelCase(bH)]
}}else{bP=bM
}return bP
},removeData:function(bJ,bH,bK){if(!b.acceptData(bJ)){return
}var bN,bM,bL,bO=b.expando,bP=bJ.nodeType,bG=bP?b.cache:bJ,bI=bP?bJ[bO]:bO;
if(!bG[bI]){return
}if(bH){bN=bK?bG[bI]:bG[bI].data;
if(bN){if(!b.isArray(bH)){if(bH in bN){bH=[bH]
}else{bH=b.camelCase(bH);
if(bH in bN){bH=[bH]
}else{bH=bH.split(" ")
}}}for(bM=0,bL=bH.length;
bM<bL;
bM++){delete bN[bH[bM]]
}if(!(bK?ac:b.isEmptyObject)(bN)){return
}}}if(!bK){delete bG[bI].data;
if(!ac(bG[bI])){return
}}if(b.support.deleteExpando||!bG.setInterval){delete bG[bI]
}else{bG[bI]=null
}if(bP){if(b.support.deleteExpando){delete bJ[bO]
}else{if(bJ.removeAttribute){bJ.removeAttribute(bO)
}else{bJ[bO]=null
}}}},_data:function(bH,bG,bI){return b.data(bH,bG,bI,true)
},acceptData:function(bH){if(bH.nodeName){var bG=b.noData[bH.nodeName.toLowerCase()];
if(bG){return !(bG===true||bH.getAttribute("classid")!==bG)
}}return true
}});
b.fn.extend({data:function(bP,bO){var bK,bH,bN,bG,bJ,bI=this[0],bM=0,bL=null;
if(bP===U){if(this.length){bL=b.data(bI);
if(bI.nodeType===1&&!b._data(bI,"parsedAttrs")){bN=bI.attributes;
for(bJ=bN.length;
bM<bJ;
bM++){bG=bN[bM].name;
if(bG.indexOf("data-")===0){bG=b.camelCase(bG.substring(5));
bh(bI,bG,bL[bG])
}}b._data(bI,"parsedAttrs",true)
}}return bL
}if(typeof bP==="object"){return this.each(function(){b.data(this,bP)
})
}bK=bP.split(".",2);
bK[1]=bK[1]?"."+bK[1]:"";
bH=bK[1]+"!";
return b.access(this,function(bQ){if(bQ===U){bL=this.triggerHandler("getData"+bH,[bK[0]]);
if(bL===U&&bI){bL=b.data(bI,bP);
bL=bh(bI,bP,bL)
}return bL===U&&bK[1]?this.data(bK[0]):bL
}bK[1]=bQ;
this.each(function(){var bR=b(this);
bR.triggerHandler("setData"+bH,bK);
b.data(this,bP,bQ);
bR.triggerHandler("changeData"+bH,bK)
})
},null,bO,arguments.length>1,null,false)
},removeData:function(bG){return this.each(function(){b.removeData(this,bG)
})
}});
function bh(bI,bH,bJ){if(bJ===U&&bI.nodeType===1){var bG="data-"+bH.replace(aK,"-$1").toLowerCase();
bJ=bI.getAttribute(bG);
if(typeof bJ==="string"){try{bJ=bJ==="true"?true:bJ==="false"?false:bJ==="null"?null:b.isNumeric(bJ)?+bJ:a3.test(bJ)?b.parseJSON(bJ):bJ
}catch(bK){}b.data(bI,bH,bJ)
}else{bJ=U
}}return bJ
}function ac(bH){for(var bG in bH){if(bG==="data"&&b.isEmptyObject(bH[bG])){continue
}if(bG!=="toJSON"){return false
}}return true
}function bu(bK,bJ,bM){var bI=bJ+"defer",bH=bJ+"queue",bG=bJ+"mark",bL=b._data(bK,bI);
if(bL&&(bM==="queue"||!b._data(bK,bH))&&(bM==="mark"||!b._data(bK,bG))){setTimeout(function(){if(!b._data(bK,bH)&&!b._data(bK,bG)){b.removeData(bK,bI,true);
bL.fire()
}},0)
}}b.extend({_mark:function(bH,bG){if(bH){bG=(bG||"fx")+"mark";
b._data(bH,bG,(b._data(bH,bG)||0)+1)
}},_unmark:function(bK,bJ,bH){if(bK!==true){bH=bJ;
bJ=bK;
bK=false
}if(bJ){bH=bH||"fx";
var bG=bH+"mark",bI=bK?0:((b._data(bJ,bG)||1)-1);
if(bI){b._data(bJ,bG,bI)
}else{b.removeData(bJ,bG,true);
bu(bJ,bH,"mark")
}}},queue:function(bH,bG,bJ){var bI;
if(bH){bG=(bG||"fx")+"queue";
bI=b._data(bH,bG);
if(bJ){if(!bI||b.isArray(bJ)){bI=b._data(bH,bG,b.makeArray(bJ))
}else{bI.push(bJ)
}}return bI||[]
}},dequeue:function(bK,bJ){bJ=bJ||"fx";
var bH=b.queue(bK,bJ),bI=bH.shift(),bG={};
if(bI==="inprogress"){bI=bH.shift()
}if(bI){if(bJ==="fx"){bH.unshift("inprogress")
}b._data(bK,bJ+".run",bG);
bI.call(bK,function(){b.dequeue(bK,bJ)
},bG)
}if(!bH.length){b.removeData(bK,bJ+"queue "+bJ+".run",true);
bu(bK,bJ,"queue")
}}});
b.fn.extend({queue:function(bG,bH){var bI=2;
if(typeof bG!=="string"){bH=bG;
bG="fx";
bI--
}if(arguments.length<bI){return b.queue(this[0],bG)
}return bH===U?this:this.each(function(){var bJ=b.queue(this,bG,bH);
if(bG==="fx"&&bJ[0]!=="inprogress"){b.dequeue(this,bG)
}})
},dequeue:function(bG){return this.each(function(){b.dequeue(this,bG)
})
},delay:function(bH,bG){bH=b.fx?b.fx.speeds[bH]||bH:bH;
bG=bG||"fx";
return this.queue(bG,function(bJ,bI){var bK=setTimeout(bJ,bH);
bI.stop=function(){clearTimeout(bK)
}
})
},clearQueue:function(bG){return this.queue(bG||"fx",[])
},promise:function(bP,bI){if(typeof bP!=="string"){bI=bP;
bP=U
}bP=bP||"fx";
var bG=b.Deferred(),bH=this,bK=bH.length,bN=1,bL=bP+"defer",bM=bP+"queue",bO=bP+"mark",bJ;
function bQ(){if(!(--bN)){bG.resolveWith(bH,[bH])
}}while(bK--){if((bJ=b.data(bH[bK],bL,U,true)||(b.data(bH[bK],bM,U,true)||b.data(bH[bK],bO,U,true))&&b.data(bH[bK],bL,b.Callbacks("once memory"),true))){bN++;
bJ.add(bQ)
}}bQ();
return bG.promise(bI)
}});
var a0=/[\n\t\r]/g,aq=/\s+/,a5=/\r/g,k=/^(?:button|input)$/i,L=/^(?:button|input|object|select|textarea)$/i,q=/^a(?:rea)?$/i,az=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,N=b.support.getSetAttribute,bq,a9,aQ;
b.fn.extend({attr:function(bG,bH){return b.access(this,b.attr,bG,bH,arguments.length>1)
},removeAttr:function(bG){return this.each(function(){b.removeAttr(this,bG)
})
},prop:function(bG,bH){return b.access(this,b.prop,bG,bH,arguments.length>1)
},removeProp:function(bG){bG=b.propFix[bG]||bG;
return this.each(function(){try{this[bG]=U;
delete this[bG]
}catch(bH){}})
},addClass:function(bK){var bM,bI,bH,bJ,bL,bN,bG;
if(b.isFunction(bK)){return this.each(function(bO){b(this).addClass(bK.call(this,bO,this.className))
})
}if(bK&&typeof bK==="string"){bM=bK.split(aq);
for(bI=0,bH=this.length;
bI<bH;
bI++){bJ=this[bI];
if(bJ.nodeType===1){if(!bJ.className&&bM.length===1){bJ.className=bK
}else{bL=" "+bJ.className+" ";
for(bN=0,bG=bM.length;
bN<bG;
bN++){if(!~bL.indexOf(" "+bM[bN]+" ")){bL+=bM[bN]+" "
}}bJ.className=b.trim(bL)
}}}}return this
},removeClass:function(bL){var bM,bI,bH,bK,bJ,bN,bG;
if(b.isFunction(bL)){return this.each(function(bO){b(this).removeClass(bL.call(this,bO,this.className))
})
}if((bL&&typeof bL==="string")||bL===U){bM=(bL||"").split(aq);
for(bI=0,bH=this.length;
bI<bH;
bI++){bK=this[bI];
if(bK.nodeType===1&&bK.className){if(bL){bJ=(" "+bK.className+" ").replace(a0," ");
for(bN=0,bG=bM.length;
bN<bG;
bN++){bJ=bJ.replace(" "+bM[bN]+" "," ")
}bK.className=b.trim(bJ)
}else{bK.className=""
}}}}return this
},toggleClass:function(bJ,bH){var bI=typeof bJ,bG=typeof bH==="boolean";
if(b.isFunction(bJ)){return this.each(function(bK){b(this).toggleClass(bJ.call(this,bK,this.className,bH),bH)
})
}return this.each(function(){if(bI==="string"){var bM,bL=0,bK=b(this),bN=bH,bO=bJ.split(aq);
while((bM=bO[bL++])){bN=bG?bN:!bK.hasClass(bM);
bK[bN?"addClass":"removeClass"](bM)
}}else{if(bI==="undefined"||bI==="boolean"){if(this.className){b._data(this,"__className__",this.className)
}this.className=this.className||bJ===false?"":b._data(this,"__className__")||""
}}})
},hasClass:function(bG){var bJ=" "+bG+" ",bI=0,bH=this.length;
for(;
bI<bH;
bI++){if(this[bI].nodeType===1&&(" "+this[bI].className+" ").replace(a0," ").indexOf(bJ)>-1){return true
}}return false
},val:function(bJ){var bG,bH,bK,bI=this[0];
if(!arguments.length){if(bI){bG=b.valHooks[bI.type]||b.valHooks[bI.nodeName.toLowerCase()];
if(bG&&"get" in bG&&(bH=bG.get(bI,"value"))!==U){return bH
}bH=bI.value;
return typeof bH==="string"?bH.replace(a5,""):bH==null?"":bH
}return
}bK=b.isFunction(bJ);
return this.each(function(bM){var bL=b(this),bN;
if(this.nodeType!==1){return
}if(bK){bN=bJ.call(this,bM,bL.val())
}else{bN=bJ
}if(bN==null){bN=""
}else{if(typeof bN==="number"){bN+=""
}else{if(b.isArray(bN)){bN=b.map(bN,function(bO){return bO==null?"":bO+""
})
}}}bG=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()];
if(!bG||!("set" in bG)||bG.set(this,bN,"value")===U){this.value=bN
}})
}});
b.extend({valHooks:{option:{get:function(bG){var bH=bG.attributes.value;
return !bH||bH.specified?bG.value:bG.text
}},select:{get:function(bG){var bM,bH,bL,bJ,bK=bG.selectedIndex,bN=[],bO=bG.options,bI=bG.type==="select-one";
if(bK<0){return null
}bH=bI?bK:0;
bL=bI?bK+1:bO.length;
for(;
bH<bL;
bH++){bJ=bO[bH];
if(bJ.selected&&(b.support.optDisabled?!bJ.disabled:bJ.getAttribute("disabled")===null)&&(!bJ.parentNode.disabled||!b.nodeName(bJ.parentNode,"optgroup"))){bM=b(bJ).val();
if(bI){return bM
}bN.push(bM)
}}if(bI&&!bN.length&&bO.length){return b(bO[bK]).val()
}return bN
},set:function(bH,bI){var bG=b.makeArray(bI);
b(bH).find("option").each(function(){this.selected=b.inArray(b(this).val(),bG)>=0
});
if(!bG.length){bH.selectedIndex=-1
}return bG
}}},attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(bM,bJ,bN,bL){var bI,bG,bK,bH=bM.nodeType;
if(!bM||bH===3||bH===8||bH===2){return
}if(bL&&bJ in b.attrFn){return b(bM)[bJ](bN)
}if(typeof bM.getAttribute==="undefined"){return b.prop(bM,bJ,bN)
}bK=bH!==1||!b.isXMLDoc(bM);
if(bK){bJ=bJ.toLowerCase();
bG=b.attrHooks[bJ]||(az.test(bJ)?a9:bq)
}if(bN!==U){if(bN===null){b.removeAttr(bM,bJ);
return
}else{if(bG&&"set" in bG&&bK&&(bI=bG.set(bM,bN,bJ))!==U){return bI
}else{bM.setAttribute(bJ,""+bN);
return bN
}}}else{if(bG&&"get" in bG&&bK&&(bI=bG.get(bM,bJ))!==null){return bI
}else{bI=bM.getAttribute(bJ);
return bI===null?U:bI
}}},removeAttr:function(bK,bM){var bL,bN,bI,bG,bH,bJ=0;
if(bM&&bK.nodeType===1){bN=bM.toLowerCase().split(aq);
bG=bN.length;
for(;
bJ<bG;
bJ++){bI=bN[bJ];
if(bI){bL=b.propFix[bI]||bI;
bH=az.test(bI);
if(!bH){b.attr(bK,bI,"")
}bK.removeAttribute(N?bI:bL);
if(bH&&bL in bK){bK[bL]=false
}}}}},attrHooks:{type:{set:function(bG,bH){if(k.test(bG.nodeName)&&bG.parentNode){b.error("type property can't be changed")
}else{if(!b.support.radioValue&&bH==="radio"&&b.nodeName(bG,"input")){var bI=bG.value;
bG.setAttribute("type",bH);
if(bI){bG.value=bI
}return bH
}}}},value:{get:function(bH,bG){if(bq&&b.nodeName(bH,"button")){return bq.get(bH,bG)
}return bG in bH?bH.value:null
},set:function(bH,bI,bG){if(bq&&b.nodeName(bH,"button")){return bq.set(bH,bI,bG)
}bH.value=bI
}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(bL,bJ,bM){var bI,bG,bK,bH=bL.nodeType;
if(!bL||bH===3||bH===8||bH===2){return
}bK=bH!==1||!b.isXMLDoc(bL);
if(bK){bJ=b.propFix[bJ]||bJ;
bG=b.propHooks[bJ]
}if(bM!==U){if(bG&&"set" in bG&&(bI=bG.set(bL,bM,bJ))!==U){return bI
}else{return(bL[bJ]=bM)
}}else{if(bG&&"get" in bG&&(bI=bG.get(bL,bJ))!==null){return bI
}else{return bL[bJ]
}}},propHooks:{tabIndex:{get:function(bH){var bG=bH.getAttributeNode("tabindex");
return bG&&bG.specified?parseInt(bG.value,10):L.test(bH.nodeName)||q.test(bH.nodeName)&&bH.href?0:U
}}}});
b.attrHooks.tabindex=b.propHooks.tabIndex;
a9={get:function(bH,bG){var bJ,bI=b.prop(bH,bG);
return bI===true||typeof bI!=="boolean"&&(bJ=bH.getAttributeNode(bG))&&bJ.nodeValue!==false?bG.toLowerCase():U
},set:function(bH,bJ,bG){var bI;
if(bJ===false){b.removeAttr(bH,bG)
}else{bI=b.propFix[bG]||bG;
if(bI in bH){bH[bI]=true
}bH.setAttribute(bG,bG.toLowerCase())
}return bG
}};
if(!N){aQ={name:true,id:true,coords:true};
bq=b.valHooks.button={get:function(bI,bH){var bG;
bG=bI.getAttributeNode(bH);
return bG&&(aQ[bH]?bG.nodeValue!=="":bG.specified)?bG.nodeValue:U
},set:function(bI,bJ,bH){var bG=bI.getAttributeNode(bH);
if(!bG){bG=aF.createAttribute(bH);
bI.setAttributeNode(bG)
}return(bG.nodeValue=bJ+"")
}};
b.attrHooks.tabindex.set=bq.set;
b.each(["width","height"],function(bH,bG){b.attrHooks[bG]=b.extend(b.attrHooks[bG],{set:function(bI,bJ){if(bJ===""){bI.setAttribute(bG,"auto");
return bJ
}}})
});
b.attrHooks.contenteditable={get:bq.get,set:function(bH,bI,bG){if(bI===""){bI="false"
}bq.set(bH,bI,bG)
}}
}if(!b.support.hrefNormalized){b.each(["href","src","width","height"],function(bH,bG){b.attrHooks[bG]=b.extend(b.attrHooks[bG],{get:function(bJ){var bI=bJ.getAttribute(bG,2);
return bI===null?U:bI
}})
})
}if(!b.support.style){b.attrHooks.style={get:function(bG){return bG.style.cssText.toLowerCase()||U
},set:function(bG,bH){return(bG.style.cssText=""+bH)
}}
}if(!b.support.optSelected){b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(bH){var bG=bH.parentNode;
if(bG){bG.selectedIndex;
if(bG.parentNode){bG.parentNode.selectedIndex
}}return null
}})
}if(!b.support.enctype){b.propFix.enctype="encoding"
}if(!b.support.checkOn){b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(bG){return bG.getAttribute("value")===null?"on":bG.value
}}
})
}b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(bG,bH){if(b.isArray(bH)){return(bG.checked=b.inArray(b(bG).val(),bH)>=0)
}}})
});
var bp=/^(?:textarea|input|select)$/i,s=/^([^\.]*)?(?:\.(.+))?$/,S=/(?:^|\s)hover(\.\S+)?\b/,aZ=/^key/,br=/^(?:mouse|contextmenu)|click/,ad=/^(?:focusinfocus|focusoutblur)$/,ae=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,ai=function(bG){var bH=ae.exec(bG);
if(bH){bH[1]=(bH[1]||"").toLowerCase();
bH[3]=bH[3]&&new RegExp("(?:^|\\s)"+bH[3]+"(?:\\s|$)")
}return bH
},o=function(bI,bG){var bH=bI.attributes||{};
return((!bG[1]||bI.nodeName.toLowerCase()===bG[1])&&(!bG[2]||(bH.id||{}).value===bG[2])&&(!bG[3]||bG[3].test((bH["class"]||{}).value)))
},bE=function(bG){return b.event.special.hover?bG:bG.replace(S,"mouseenter$1 mouseleave$1")
};
b.event={add:function(bJ,bO,bV,bM,bK){var bP,bN,bW,bU,bT,bR,bG,bS,bH,bL,bI,bQ;
if(bJ.nodeType===3||bJ.nodeType===8||!bO||!bV||!(bP=b._data(bJ))){return
}if(bV.handler){bH=bV;
bV=bH.handler;
bK=bH.selector
}if(!bV.guid){bV.guid=b.guid++
}bW=bP.events;
if(!bW){bP.events=bW={}
}bN=bP.handle;
if(!bN){bP.handle=bN=function(bX){return typeof b!=="undefined"&&(!bX||b.event.triggered!==bX.type)?b.event.dispatch.apply(bN.elem,arguments):U
};
bN.elem=bJ
}bO=b.trim(bE(bO)).split(" ");
for(bU=0;
bU<bO.length;
bU++){bT=s.exec(bO[bU])||[];
bR=bT[1];
bG=(bT[2]||"").split(".").sort();
bQ=b.event.special[bR]||{};
bR=(bK?bQ.delegateType:bQ.bindType)||bR;
bQ=b.event.special[bR]||{};
bS=b.extend({type:bR,origType:bT[1],data:bM,handler:bV,guid:bV.guid,selector:bK,quick:bK&&ai(bK),namespace:bG.join(".")},bH);
bI=bW[bR];
if(!bI){bI=bW[bR]=[];
bI.delegateCount=0;
if(!bQ.setup||bQ.setup.call(bJ,bM,bG,bN)===false){if(bJ.addEventListener){bJ.addEventListener(bR,bN,false)
}else{if(bJ.attachEvent){bJ.attachEvent("on"+bR,bN)
}}}}if(bQ.add){bQ.add.call(bJ,bS);
if(!bS.handler.guid){bS.handler.guid=bV.guid
}}if(bK){bI.splice(bI.delegateCount++,0,bS)
}else{bI.push(bS)
}b.event.global[bR]=true
}bJ=null
},global:{},remove:function(bV,bQ,bH,bT,bN){var bU=b.hasData(bV)&&b._data(bV),bR,bJ,bL,bX,bO,bM,bS,bI,bK,bW,bP,bG;
if(!bU||!(bI=bU.events)){return
}bQ=b.trim(bE(bQ||"")).split(" ");
for(bR=0;
bR<bQ.length;
bR++){bJ=s.exec(bQ[bR])||[];
bL=bX=bJ[1];
bO=bJ[2];
if(!bL){for(bL in bI){b.event.remove(bV,bL+bQ[bR],bH,bT,true)
}continue
}bK=b.event.special[bL]||{};
bL=(bT?bK.delegateType:bK.bindType)||bL;
bP=bI[bL]||[];
bM=bP.length;
bO=bO?new RegExp("(^|\\.)"+bO.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;
for(bS=0;
bS<bP.length;
bS++){bG=bP[bS];
if((bN||bX===bG.origType)&&(!bH||bH.guid===bG.guid)&&(!bO||bO.test(bG.namespace))&&(!bT||bT===bG.selector||bT==="**"&&bG.selector)){bP.splice(bS--,1);
if(bG.selector){bP.delegateCount--
}if(bK.remove){bK.remove.call(bV,bG)
}}}if(bP.length===0&&bM!==bP.length){if(!bK.teardown||bK.teardown.call(bV,bO)===false){b.removeEvent(bV,bL,bU.handle)
}delete bI[bL]
}}if(b.isEmptyObject(bI)){bW=bU.handle;
if(bW){bW.elem=null
}b.removeData(bV,["events","handle"],true)
}},customEvent:{getData:true,setData:true,changeData:true},trigger:function(bH,bP,bM,bV){if(bM&&(bM.nodeType===3||bM.nodeType===8)){return
}var bS=bH.type||bH,bJ=[],bG,bI,bO,bT,bL,bK,bR,bQ,bN,bU;
if(ad.test(bS+b.event.triggered)){return
}if(bS.indexOf("!")>=0){bS=bS.slice(0,-1);
bI=true
}if(bS.indexOf(".")>=0){bJ=bS.split(".");
bS=bJ.shift();
bJ.sort()
}if((!bM||b.event.customEvent[bS])&&!b.event.global[bS]){return
}bH=typeof bH==="object"?bH[b.expando]?bH:new b.Event(bS,bH):new b.Event(bS);
bH.type=bS;
bH.isTrigger=true;
bH.exclusive=bI;
bH.namespace=bJ.join(".");
bH.namespace_re=bH.namespace?new RegExp("(^|\\.)"+bJ.join("\\.(?:.*\\.)?")+"(\\.|$)"):null;
bK=bS.indexOf(":")<0?"on"+bS:"";
if(!bM){bG=b.cache;
for(bO in bG){if(bG[bO].events&&bG[bO].events[bS]){b.event.trigger(bH,bP,bG[bO].handle.elem,true)
}}return
}bH.result=U;
if(!bH.target){bH.target=bM
}bP=bP!=null?b.makeArray(bP):[];
bP.unshift(bH);
bR=b.event.special[bS]||{};
if(bR.trigger&&bR.trigger.apply(bM,bP)===false){return
}bN=[[bM,bR.bindType||bS]];
if(!bV&&!bR.noBubble&&!b.isWindow(bM)){bU=bR.delegateType||bS;
bT=ad.test(bU+bS)?bM:bM.parentNode;
bL=null;
for(;
bT;
bT=bT.parentNode){bN.push([bT,bU]);
bL=bT
}if(bL&&bL===bM.ownerDocument){bN.push([bL.defaultView||bL.parentWindow||bo,bU])
}}for(bO=0;
bO<bN.length&&!bH.isPropagationStopped();
bO++){bT=bN[bO][0];
bH.type=bN[bO][1];
bQ=(b._data(bT,"events")||{})[bH.type]&&b._data(bT,"handle");
if(bQ){bQ.apply(bT,bP)
}bQ=bK&&bT[bK];
if(bQ&&b.acceptData(bT)&&bQ.apply(bT,bP)===false){bH.preventDefault()
}}bH.type=bS;
if(!bV&&!bH.isDefaultPrevented()){if((!bR._default||bR._default.apply(bM.ownerDocument,bP)===false)&&!(bS==="click"&&b.nodeName(bM,"a"))&&b.acceptData(bM)){if(bK&&bM[bS]&&((bS!=="focus"&&bS!=="blur")||bH.target.offsetWidth!==0)&&!b.isWindow(bM)){bL=bM[bK];
if(bL){bM[bK]=null
}b.event.triggered=bS;
bM[bS]();
b.event.triggered=U;
if(bL){bM[bK]=bL
}}}}return bH.result
},dispatch:function(bT){bT=b.event.fix(bT||bo.event);
var bP=((b._data(this,"events")||{})[bT.type]||[]),bO=bP.delegateCount,bJ=[].slice.call(arguments,0),bQ=!bT.exclusive&&!bT.namespace,bL=b.event.special[bT.type]||{},bH=[],bV,bS,bK,bM,bW,bU,bN,bI,bG,bR,bX;
bJ[0]=bT;
bT.delegateTarget=this;
if(bL.preDispatch&&bL.preDispatch.call(this,bT)===false){return
}if(bO&&!(bT.button&&bT.type==="click")){bM=b(this);
bM.context=this.ownerDocument||this;
for(bK=bT.target;
bK!=this;
bK=bK.parentNode||this){if(bK.disabled!==true){bU={};
bI=[];
bM[0]=bK;
for(bV=0;
bV<bO;
bV++){bG=bP[bV];
bR=bG.selector;
if(bU[bR]===U){bU[bR]=(bG.quick?o(bK,bG.quick):bM.is(bR))
}if(bU[bR]){bI.push(bG)
}}if(bI.length){bH.push({elem:bK,matches:bI})
}}}}if(bP.length>bO){bH.push({elem:this,matches:bP.slice(bO)})
}for(bV=0;
bV<bH.length&&!bT.isPropagationStopped();
bV++){bN=bH[bV];
bT.currentTarget=bN.elem;
for(bS=0;
bS<bN.matches.length&&!bT.isImmediatePropagationStopped();
bS++){bG=bN.matches[bS];
if(bQ||(!bT.namespace&&!bG.namespace)||bT.namespace_re&&bT.namespace_re.test(bG.namespace)){bT.data=bG.data;
bT.handleObj=bG;
bW=((b.event.special[bG.origType]||{}).handle||bG.handler).apply(bN.elem,bJ);
if(bW!==U){bT.result=bW;
if(bW===false){bT.preventDefault();
bT.stopPropagation()
}}}}}if(bL.postDispatch){bL.postDispatch.call(this,bT)
}return bT.result
},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(bH,bG){if(bH.which==null){bH.which=bG.charCode!=null?bG.charCode:bG.keyCode
}return bH
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(bJ,bI){var bK,bL,bG,bH=bI.button,bM=bI.fromElement;
if(bJ.pageX==null&&bI.clientX!=null){bK=bJ.target.ownerDocument||aF;
bL=bK.documentElement;
bG=bK.body;
bJ.pageX=bI.clientX+(bL&&bL.scrollLeft||bG&&bG.scrollLeft||0)-(bL&&bL.clientLeft||bG&&bG.clientLeft||0);
bJ.pageY=bI.clientY+(bL&&bL.scrollTop||bG&&bG.scrollTop||0)-(bL&&bL.clientTop||bG&&bG.clientTop||0)
}if(!bJ.relatedTarget&&bM){bJ.relatedTarget=bM===bJ.target?bI.toElement:bM
}if(!bJ.which&&bH!==U){bJ.which=(bH&1?1:(bH&2?3:(bH&4?2:0)))
}return bJ
}},fix:function(bI){if(bI[b.expando]){return bI
}var bH,bL,bG=bI,bJ=b.event.fixHooks[bI.type]||{},bK=bJ.props?this.props.concat(bJ.props):this.props;
bI=b.Event(bG);
for(bH=bK.length;
bH;
){bL=bK[--bH];
bI[bL]=bG[bL]
}if(!bI.target){bI.target=bG.srcElement||aF
}if(bI.target.nodeType===3){bI.target=bI.target.parentNode
}if(bI.metaKey===U){bI.metaKey=bI.ctrlKey
}return bJ.filter?bJ.filter(bI,bG):bI
},special:{ready:{setup:b.bindReady},load:{noBubble:true},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(bI,bH,bG){if(b.isWindow(this)){this.onbeforeunload=bG
}},teardown:function(bH,bG){if(this.onbeforeunload===bG){this.onbeforeunload=null
}}}},simulate:function(bH,bJ,bI,bG){var bK=b.extend(new b.Event(),bI,{type:bH,isSimulated:true,originalEvent:{}});
if(bG){b.event.trigger(bK,null,bJ)
}else{b.event.dispatch.call(bJ,bK)
}if(bK.isDefaultPrevented()){bI.preventDefault()
}}};
b.event.handle=b.event.dispatch;
b.removeEvent=aF.removeEventListener?function(bH,bG,bI){if(bH.removeEventListener){bH.removeEventListener(bG,bI,false)
}}:function(bH,bG,bI){if(bH.detachEvent){bH.detachEvent("on"+bG,bI)
}};
b.Event=function(bH,bG){if(!(this instanceof b.Event)){return new b.Event(bH,bG)
}if(bH&&bH.type){this.originalEvent=bH;
this.type=bH.type;
this.isDefaultPrevented=(bH.defaultPrevented||bH.returnValue===false||bH.getPreventDefault&&bH.getPreventDefault())?n:bw
}else{this.type=bH
}if(bG){b.extend(this,bG)
}this.timeStamp=bH&&bH.timeStamp||b.now();
this[b.expando]=true
};
function bw(){return false
}function n(){return true
}b.Event.prototype={preventDefault:function(){this.isDefaultPrevented=n;
var bG=this.originalEvent;
if(!bG){return
}if(bG.preventDefault){bG.preventDefault()
}else{bG.returnValue=false
}},stopPropagation:function(){this.isPropagationStopped=n;
var bG=this.originalEvent;
if(!bG){return
}if(bG.stopPropagation){bG.stopPropagation()
}bG.cancelBubble=true
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=n;
this.stopPropagation()
},isDefaultPrevented:bw,isPropagationStopped:bw,isImmediatePropagationStopped:bw};
b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(bH,bG){b.event.special[bH]={delegateType:bG,bindType:bG,handle:function(bL){var bN=this,bM=bL.relatedTarget,bK=bL.handleObj,bI=bK.selector,bJ;
if(!bM||(bM!==bN&&!b.contains(bN,bM))){bL.type=bK.origType;
bJ=bK.handler.apply(this,arguments);
bL.type=bG
}return bJ
}}
});
if(!b.support.submitBubbles){b.event.special.submit={setup:function(){if(b.nodeName(this,"form")){return false
}b.event.add(this,"click._submit keypress._submit",function(bI){var bH=bI.target,bG=b.nodeName(bH,"input")||b.nodeName(bH,"button")?bH.form:U;
if(bG&&!bG._submit_attached){b.event.add(bG,"submit._submit",function(bJ){bJ._submit_bubble=true
});
bG._submit_attached=true
}})
},postDispatch:function(bG){if(bG._submit_bubble){delete bG._submit_bubble;
if(this.parentNode&&!bG.isTrigger){b.event.simulate("submit",this.parentNode,bG,true)
}}},teardown:function(){if(b.nodeName(this,"form")){return false
}b.event.remove(this,"._submit")
}}
}if(!b.support.changeBubbles){b.event.special.change={setup:function(){if(bp.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){b.event.add(this,"propertychange._change",function(bG){if(bG.originalEvent.propertyName==="checked"){this._just_changed=true
}});
b.event.add(this,"click._change",function(bG){if(this._just_changed&&!bG.isTrigger){this._just_changed=false;
b.event.simulate("change",this,bG,true)
}})
}return false
}b.event.add(this,"beforeactivate._change",function(bH){var bG=bH.target;
if(bp.test(bG.nodeName)&&!bG._change_attached){b.event.add(bG,"change._change",function(bI){if(this.parentNode&&!bI.isSimulated&&!bI.isTrigger){b.event.simulate("change",this.parentNode,bI,true)
}});
bG._change_attached=true
}})
},handle:function(bH){var bG=bH.target;
if(this!==bG||bH.isSimulated||bH.isTrigger||(bG.type!=="radio"&&bG.type!=="checkbox")){return bH.handleObj.handler.apply(this,arguments)
}},teardown:function(){b.event.remove(this,"._change");
return bp.test(this.nodeName)
}}
}if(!b.support.focusinBubbles){b.each({focus:"focusin",blur:"focusout"},function(bJ,bG){var bH=0,bI=function(bK){b.event.simulate(bG,bK.target,b.event.fix(bK),true)
};
b.event.special[bG]={setup:function(){if(bH++===0){aF.addEventListener(bJ,bI,true)
}},teardown:function(){if(--bH===0){aF.removeEventListener(bJ,bI,true)
}}}
})
}b.fn.extend({on:function(bI,bG,bL,bK,bH){var bM,bJ;
if(typeof bI==="object"){if(typeof bG!=="string"){bL=bL||bG;
bG=U
}for(bJ in bI){this.on(bJ,bG,bL,bI[bJ],bH)
}return this
}if(bL==null&&bK==null){bK=bG;
bL=bG=U
}else{if(bK==null){if(typeof bG==="string"){bK=bL;
bL=U
}else{bK=bL;
bL=bG;
bG=U
}}}if(bK===false){bK=bw
}else{if(!bK){return this
}}if(bH===1){bM=bK;
bK=function(bN){b().off(bN);
return bM.apply(this,arguments)
};
bK.guid=bM.guid||(bM.guid=b.guid++)
}return this.each(function(){b.event.add(this,bI,bK,bL,bG)
})
},one:function(bH,bG,bJ,bI){return this.on(bH,bG,bJ,bI,1)
},off:function(bI,bG,bK){if(bI&&bI.preventDefault&&bI.handleObj){var bH=bI.handleObj;
b(bI.delegateTarget).off(bH.namespace?bH.origType+"."+bH.namespace:bH.origType,bH.selector,bH.handler);
return this
}if(typeof bI==="object"){for(var bJ in bI){this.off(bJ,bG,bI[bJ])
}return this
}if(bG===false||typeof bG==="function"){bK=bG;
bG=U
}if(bK===false){bK=bw
}return this.each(function(){b.event.remove(this,bI,bK,bG)
})
},bind:function(bG,bI,bH){return this.on(bG,null,bI,bH)
},unbind:function(bG,bH){return this.off(bG,null,bH)
},live:function(bG,bI,bH){b(this.context).on(bG,this.selector,bI,bH);
return this
},die:function(bG,bH){b(this.context).off(bG,this.selector||"**",bH);
return this
},delegate:function(bG,bH,bJ,bI){return this.on(bH,bG,bJ,bI)
},undelegate:function(bG,bH,bI){return arguments.length==1?this.off(bG,"**"):this.off(bH,bG,bI)
},trigger:function(bG,bH){return this.each(function(){b.event.trigger(bG,bH,this)
})
},triggerHandler:function(bG,bH){if(this[0]){return b.event.trigger(bG,bH,this[0],true)
}},toggle:function(bJ){var bH=arguments,bG=bJ.guid||b.guid++,bI=0,bK=function(bL){var bM=(b._data(this,"lastToggle"+bJ.guid)||0)%bI;
b._data(this,"lastToggle"+bJ.guid,bM+1);
bL.preventDefault();
return bH[bM].apply(this,arguments)||false
};
bK.guid=bG;
while(bI<bH.length){bH[bI++].guid=bG
}return this.click(bK)
},hover:function(bG,bH){return this.mouseenter(bG).mouseleave(bH||bG)
}});
b.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "),function(bH,bG){b.fn[bG]=function(bJ,bI){if(bI==null){bI=bJ;
bJ=null
}return arguments.length>0?this.on(bG,null,bJ,bI):this.trigger(bG)
};
if(b.attrFn){b.attrFn[bG]=true
}if(aZ.test(bG)){b.event.fixHooks[bG]=b.event.keyHooks
}if(br.test(bG)){b.event.fixHooks[bG]=b.event.mouseHooks
}});
/*
 * Sizzle CSS Selector Engine
 *  Copyright 2011, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var bS=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,bN="sizcache"+(Math.random()+"").replace(".",""),bT=0,bW=Object.prototype.toString,bM=false,bL=true,bV=/\\/g,bZ=/\r\n/g,b1=/\W/;
[0,0].sort(function(){bL=false;
return 0
});
var bJ=function(b7,b2,ca,cb){ca=ca||[];
b2=b2||aF;
var cd=b2;
if(b2.nodeType!==1&&b2.nodeType!==9){return[]
}if(!b7||typeof b7!=="string"){return ca
}var b4,cf,ci,b3,ce,ch,cg,b9,b6=true,b5=bJ.isXML(b2),b8=[],cc=b7;
do{bS.exec("");
b4=bS.exec(cc);
if(b4){cc=b4[3];
b8.push(b4[1]);
if(b4[2]){b3=b4[3];
break
}}}while(b4);
if(b8.length>1&&bO.exec(b7)){if(b8.length===2&&bP.relative[b8[0]]){cf=bX(b8[0]+b8[1],b2,cb)
}else{cf=bP.relative[b8[0]]?[b2]:bJ(b8.shift(),b2);
while(b8.length){b7=b8.shift();
if(bP.relative[b7]){b7+=b8.shift()
}cf=bX(b7,cf,cb)
}}}else{if(!cb&&b8.length>1&&b2.nodeType===9&&!b5&&bP.match.ID.test(b8[0])&&!bP.match.ID.test(b8[b8.length-1])){ce=bJ.find(b8.shift(),b2,b5);
b2=ce.expr?bJ.filter(ce.expr,ce.set)[0]:ce.set[0]
}if(b2){ce=cb?{expr:b8.pop(),set:bQ(cb)}:bJ.find(b8.pop(),b8.length===1&&(b8[0]==="~"||b8[0]==="+")&&b2.parentNode?b2.parentNode:b2,b5);
cf=ce.expr?bJ.filter(ce.expr,ce.set):ce.set;
if(b8.length>0){ci=bQ(cf)
}else{b6=false
}while(b8.length){ch=b8.pop();
cg=ch;
if(!bP.relative[ch]){ch=""
}else{cg=b8.pop()
}if(cg==null){cg=b2
}bP.relative[ch](ci,cg,b5)
}}else{ci=b8=[]
}}if(!ci){ci=cf
}if(!ci){bJ.error(ch||b7)
}if(bW.call(ci)==="[object Array]"){if(!b6){ca.push.apply(ca,ci)
}else{if(b2&&b2.nodeType===1){for(b9=0;
ci[b9]!=null;
b9++){if(ci[b9]&&(ci[b9]===true||ci[b9].nodeType===1&&bJ.contains(b2,ci[b9]))){ca.push(cf[b9])
}}}else{for(b9=0;
ci[b9]!=null;
b9++){if(ci[b9]&&ci[b9].nodeType===1){ca.push(cf[b9])
}}}}}else{bQ(ci,ca)
}if(b3){bJ(b3,cd,ca,cb);
bJ.uniqueSort(ca)
}return ca
};
bJ.uniqueSort=function(b3){if(bU){bM=bL;
b3.sort(bU);
if(bM){for(var b2=1;
b2<b3.length;
b2++){if(b3[b2]===b3[b2-1]){b3.splice(b2--,1)
}}}}return b3
};
bJ.matches=function(b2,b3){return bJ(b2,null,null,b3)
};
bJ.matchesSelector=function(b2,b3){return bJ(b3,null,null,[b2]).length>0
};
bJ.find=function(b9,b2,ca){var b8,b4,b6,b5,b7,b3;
if(!b9){return[]
}for(b4=0,b6=bP.order.length;
b4<b6;
b4++){b7=bP.order[b4];
if((b5=bP.leftMatch[b7].exec(b9))){b3=b5[1];
b5.splice(1,1);
if(b3.substr(b3.length-1)!=="\\"){b5[1]=(b5[1]||"").replace(bV,"");
b8=bP.find[b7](b5,b2,ca);
if(b8!=null){b9=b9.replace(bP.match[b7],"");
break
}}}}if(!b8){b8=typeof b2.getElementsByTagName!=="undefined"?b2.getElementsByTagName("*"):[]
}return{set:b8,expr:b9}
};
bJ.filter=function(cd,cc,cg,b6){var b8,b2,cb,ci,cf,b3,b5,b7,ce,b4=cd,ch=[],ca=cc,b9=cc&&cc[0]&&bJ.isXML(cc[0]);
while(cd&&cc.length){for(cb in bP.filter){if((b8=bP.leftMatch[cb].exec(cd))!=null&&b8[2]){b3=bP.filter[cb];
b5=b8[1];
b2=false;
b8.splice(1,1);
if(b5.substr(b5.length-1)==="\\"){continue
}if(ca===ch){ch=[]
}if(bP.preFilter[cb]){b8=bP.preFilter[cb](b8,ca,cg,ch,b6,b9);
if(!b8){b2=ci=true
}else{if(b8===true){continue
}}}if(b8){for(b7=0;
(cf=ca[b7])!=null;
b7++){if(cf){ci=b3(cf,b8,b7,ca);
ce=b6^ci;
if(cg&&ci!=null){if(ce){b2=true
}else{ca[b7]=false
}}else{if(ce){ch.push(cf);
b2=true
}}}}}if(ci!==U){if(!cg){ca=ch
}cd=cd.replace(bP.match[cb],"");
if(!b2){return[]
}break
}}}if(cd===b4){if(b2==null){bJ.error(cd)
}else{break
}}b4=cd
}return ca
};
bJ.error=function(b2){throw new Error("Syntax error, unrecognized expression: "+b2)
};
var bH=bJ.getText=function(b6){var b4,b5,b2=b6.nodeType,b3="";
if(b2){if(b2===1||b2===9||b2===11){if(typeof b6.textContent==="string"){return b6.textContent
}else{if(typeof b6.innerText==="string"){return b6.innerText.replace(bZ,"")
}else{for(b6=b6.firstChild;
b6;
b6=b6.nextSibling){b3+=bH(b6)
}}}}else{if(b2===3||b2===4){return b6.nodeValue
}}}else{for(b4=0;
(b5=b6[b4]);
b4++){if(b5.nodeType!==8){b3+=bH(b5)
}}}return b3
};
var bP=bJ.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(b2){return b2.getAttribute("href")
},type:function(b2){return b2.getAttribute("type")
}},relative:{"+":function(b8,b3){var b5=typeof b3==="string",b7=b5&&!b1.test(b3),b9=b5&&!b7;
if(b7){b3=b3.toLowerCase()
}for(var b4=0,b2=b8.length,b6;
b4<b2;
b4++){if((b6=b8[b4])){while((b6=b6.previousSibling)&&b6.nodeType!==1){}b8[b4]=b9||b6&&b6.nodeName.toLowerCase()===b3?b6||false:b6===b3
}}if(b9){bJ.filter(b3,b8,true)
}},">":function(b8,b3){var b7,b6=typeof b3==="string",b4=0,b2=b8.length;
if(b6&&!b1.test(b3)){b3=b3.toLowerCase();
for(;
b4<b2;
b4++){b7=b8[b4];
if(b7){var b5=b7.parentNode;
b8[b4]=b5.nodeName.toLowerCase()===b3?b5:false
}}}else{for(;
b4<b2;
b4++){b7=b8[b4];
if(b7){b8[b4]=b6?b7.parentNode:b7.parentNode===b3
}}if(b6){bJ.filter(b3,b8,true)
}}},"":function(b5,b3,b7){var b6,b4=bT++,b2=bY;
if(typeof b3==="string"&&!b1.test(b3)){b3=b3.toLowerCase();
b6=b3;
b2=bG
}b2("parentNode",b3,b4,b5,b6,b7)
},"~":function(b5,b3,b7){var b6,b4=bT++,b2=bY;
if(typeof b3==="string"&&!b1.test(b3)){b3=b3.toLowerCase();
b6=b3;
b2=bG
}b2("previousSibling",b3,b4,b5,b6,b7)
}},find:{ID:function(b3,b4,b5){if(typeof b4.getElementById!=="undefined"&&!b5){var b2=b4.getElementById(b3[1]);
return b2&&b2.parentNode?[b2]:[]
}},NAME:function(b4,b7){if(typeof b7.getElementsByName!=="undefined"){var b3=[],b6=b7.getElementsByName(b4[1]);
for(var b5=0,b2=b6.length;
b5<b2;
b5++){if(b6[b5].getAttribute("name")===b4[1]){b3.push(b6[b5])
}}return b3.length===0?null:b3
}},TAG:function(b2,b3){if(typeof b3.getElementsByTagName!=="undefined"){return b3.getElementsByTagName(b2[1])
}}},preFilter:{CLASS:function(b5,b3,b4,b2,b8,b9){b5=" "+b5[1].replace(bV,"")+" ";
if(b9){return b5
}for(var b6=0,b7;
(b7=b3[b6])!=null;
b6++){if(b7){if(b8^(b7.className&&(" "+b7.className+" ").replace(/[\t\n\r]/g," ").indexOf(b5)>=0)){if(!b4){b2.push(b7)
}}else{if(b4){b3[b6]=false
}}}}return false
},ID:function(b2){return b2[1].replace(bV,"")
},TAG:function(b3,b2){return b3[1].replace(bV,"").toLowerCase()
},CHILD:function(b2){if(b2[1]==="nth"){if(!b2[2]){bJ.error(b2[0])
}b2[2]=b2[2].replace(/^\+|\s*/g,"");
var b3=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(b2[2]==="even"&&"2n"||b2[2]==="odd"&&"2n+1"||!/\D/.test(b2[2])&&"0n+"+b2[2]||b2[2]);
b2[2]=(b3[1]+(b3[2]||1))-0;
b2[3]=b3[3]-0
}else{if(b2[2]){bJ.error(b2[0])
}}b2[0]=bT++;
return b2
},ATTR:function(b6,b3,b4,b2,b7,b8){var b5=b6[1]=b6[1].replace(bV,"");
if(!b8&&bP.attrMap[b5]){b6[1]=bP.attrMap[b5]
}b6[4]=(b6[4]||b6[5]||"").replace(bV,"");
if(b6[2]==="~="){b6[4]=" "+b6[4]+" "
}return b6
},PSEUDO:function(b6,b3,b4,b2,b7){if(b6[1]==="not"){if((bS.exec(b6[3])||"").length>1||/^\w/.test(b6[3])){b6[3]=bJ(b6[3],null,null,b3)
}else{var b5=bJ.filter(b6[3],b3,b4,true^b7);
if(!b4){b2.push.apply(b2,b5)
}return false
}}else{if(bP.match.POS.test(b6[0])||bP.match.CHILD.test(b6[0])){return true
}}return b6
},POS:function(b2){b2.unshift(true);
return b2
}},filters:{enabled:function(b2){return b2.disabled===false&&b2.type!=="hidden"
},disabled:function(b2){return b2.disabled===true
},checked:function(b2){return b2.checked===true
},selected:function(b2){if(b2.parentNode){b2.parentNode.selectedIndex
}return b2.selected===true
},parent:function(b2){return !!b2.firstChild
},empty:function(b2){return !b2.firstChild
},has:function(b4,b3,b2){return !!bJ(b2[3],b4).length
},header:function(b2){return(/h\d/i).test(b2.nodeName)
},text:function(b4){var b2=b4.getAttribute("type"),b3=b4.type;
return b4.nodeName.toLowerCase()==="input"&&"text"===b3&&(b2===b3||b2===null)
},radio:function(b2){return b2.nodeName.toLowerCase()==="input"&&"radio"===b2.type
},checkbox:function(b2){return b2.nodeName.toLowerCase()==="input"&&"checkbox"===b2.type
},file:function(b2){return b2.nodeName.toLowerCase()==="input"&&"file"===b2.type
},password:function(b2){return b2.nodeName.toLowerCase()==="input"&&"password"===b2.type
},submit:function(b3){var b2=b3.nodeName.toLowerCase();
return(b2==="input"||b2==="button")&&"submit"===b3.type
},image:function(b2){return b2.nodeName.toLowerCase()==="input"&&"image"===b2.type
},reset:function(b3){var b2=b3.nodeName.toLowerCase();
return(b2==="input"||b2==="button")&&"reset"===b3.type
},button:function(b3){var b2=b3.nodeName.toLowerCase();
return b2==="input"&&"button"===b3.type||b2==="button"
},input:function(b2){return(/input|select|textarea|button/i).test(b2.nodeName)
},focus:function(b2){return b2===b2.ownerDocument.activeElement
}},setFilters:{first:function(b3,b2){return b2===0
},last:function(b4,b3,b2,b5){return b3===b5.length-1
},even:function(b3,b2){return b2%2===0
},odd:function(b3,b2){return b2%2===1
},lt:function(b4,b3,b2){return b3<b2[3]-0
},gt:function(b4,b3,b2){return b3>b2[3]-0
},nth:function(b4,b3,b2){return b2[3]-0===b3
},eq:function(b4,b3,b2){return b2[3]-0===b3
}},filter:{PSEUDO:function(b4,b9,b8,ca){var b2=b9[1],b3=bP.filters[b2];
if(b3){return b3(b4,b8,b9,ca)
}else{if(b2==="contains"){return(b4.textContent||b4.innerText||bH([b4])||"").indexOf(b9[3])>=0
}else{if(b2==="not"){var b5=b9[3];
for(var b7=0,b6=b5.length;
b7<b6;
b7++){if(b5[b7]===b4){return false
}}return true
}else{bJ.error(b2)
}}}},CHILD:function(b4,b6){var b5,cc,b8,cb,b2,b7,ca,b9=b6[1],b3=b4;
switch(b9){case"only":case"first":while((b3=b3.previousSibling)){if(b3.nodeType===1){return false
}}if(b9==="first"){return true
}b3=b4;
case"last":while((b3=b3.nextSibling)){if(b3.nodeType===1){return false
}}return true;
case"nth":b5=b6[2];
cc=b6[3];
if(b5===1&&cc===0){return true
}b8=b6[0];
cb=b4.parentNode;
if(cb&&(cb[bN]!==b8||!b4.nodeIndex)){b7=0;
for(b3=cb.firstChild;
b3;
b3=b3.nextSibling){if(b3.nodeType===1){b3.nodeIndex=++b7
}}cb[bN]=b8
}ca=b4.nodeIndex-cc;
if(b5===0){return ca===0
}else{return(ca%b5===0&&ca/b5>=0)
}}},ID:function(b3,b2){return b3.nodeType===1&&b3.getAttribute("id")===b2
},TAG:function(b3,b2){return(b2==="*"&&b3.nodeType===1)||!!b3.nodeName&&b3.nodeName.toLowerCase()===b2
},CLASS:function(b3,b2){return(" "+(b3.className||b3.getAttribute("class"))+" ").indexOf(b2)>-1
},ATTR:function(b7,b5){var b4=b5[1],b2=bJ.attr?bJ.attr(b7,b4):bP.attrHandle[b4]?bP.attrHandle[b4](b7):b7[b4]!=null?b7[b4]:b7.getAttribute(b4),b8=b2+"",b6=b5[2],b3=b5[4];
return b2==null?b6==="!=":!b6&&bJ.attr?b2!=null:b6==="="?b8===b3:b6==="*="?b8.indexOf(b3)>=0:b6==="~="?(" "+b8+" ").indexOf(b3)>=0:!b3?b8&&b2!==false:b6==="!="?b8!==b3:b6==="^="?b8.indexOf(b3)===0:b6==="$="?b8.substr(b8.length-b3.length)===b3:b6==="|="?b8===b3||b8.substr(0,b3.length+1)===b3+"-":false
},POS:function(b6,b3,b4,b7){var b2=b3[2],b5=bP.setFilters[b2];
if(b5){return b5(b6,b4,b3,b7)
}}}};
var bO=bP.match.POS,bI=function(b3,b2){return"\\"+(b2-0+1)
};
for(var bK in bP.match){bP.match[bK]=new RegExp(bP.match[bK].source+(/(?![^\[]*\])(?![^\(]*\))/.source));
bP.leftMatch[bK]=new RegExp(/(^(?:.|\r|\n)*?)/.source+bP.match[bK].source.replace(/\\(\d+)/g,bI))
}bP.match.globalPOS=bO;
var bQ=function(b3,b2){b3=Array.prototype.slice.call(b3,0);
if(b2){b2.push.apply(b2,b3);
return b2
}return b3
};
try{Array.prototype.slice.call(aF.documentElement.childNodes,0)[0].nodeType
}catch(b0){bQ=function(b6,b5){var b4=0,b3=b5||[];
if(bW.call(b6)==="[object Array]"){Array.prototype.push.apply(b3,b6)
}else{if(typeof b6.length==="number"){for(var b2=b6.length;
b4<b2;
b4++){b3.push(b6[b4])
}}else{for(;
b6[b4];
b4++){b3.push(b6[b4])
}}}return b3
}
}var bU,bR;
if(aF.documentElement.compareDocumentPosition){bU=function(b3,b2){if(b3===b2){bM=true;
return 0
}if(!b3.compareDocumentPosition||!b2.compareDocumentPosition){return b3.compareDocumentPosition?-1:1
}return b3.compareDocumentPosition(b2)&4?-1:1
}
}else{bU=function(ca,b9){if(ca===b9){bM=true;
return 0
}else{if(ca.sourceIndex&&b9.sourceIndex){return ca.sourceIndex-b9.sourceIndex
}}var b7,b3,b4=[],b2=[],b6=ca.parentNode,b8=b9.parentNode,cb=b6;
if(b6===b8){return bR(ca,b9)
}else{if(!b6){return -1
}else{if(!b8){return 1
}}}while(cb){b4.unshift(cb);
cb=cb.parentNode
}cb=b8;
while(cb){b2.unshift(cb);
cb=cb.parentNode
}b7=b4.length;
b3=b2.length;
for(var b5=0;
b5<b7&&b5<b3;
b5++){if(b4[b5]!==b2[b5]){return bR(b4[b5],b2[b5])
}}return b5===b7?bR(ca,b2[b5],-1):bR(b4[b5],b9,1)
};
bR=function(b3,b2,b4){if(b3===b2){return b4
}var b5=b3.nextSibling;
while(b5){if(b5===b2){return -1
}b5=b5.nextSibling
}return 1
}
}(function(){var b3=aF.createElement("div"),b4="script"+(new Date()).getTime(),b2=aF.documentElement;
b3.innerHTML="<a name='"+b4+"'/>";
b2.insertBefore(b3,b2.firstChild);
if(aF.getElementById(b4)){bP.find.ID=function(b6,b7,b8){if(typeof b7.getElementById!=="undefined"&&!b8){var b5=b7.getElementById(b6[1]);
return b5?b5.id===b6[1]||typeof b5.getAttributeNode!=="undefined"&&b5.getAttributeNode("id").nodeValue===b6[1]?[b5]:U:[]
}};
bP.filter.ID=function(b7,b5){var b6=typeof b7.getAttributeNode!=="undefined"&&b7.getAttributeNode("id");
return b7.nodeType===1&&b6&&b6.nodeValue===b5
}
}b2.removeChild(b3);
b2=b3=null
})();
(function(){var b2=aF.createElement("div");
b2.appendChild(aF.createComment(""));
if(b2.getElementsByTagName("*").length>0){bP.find.TAG=function(b3,b7){var b6=b7.getElementsByTagName(b3[1]);
if(b3[1]==="*"){var b5=[];
for(var b4=0;
b6[b4];
b4++){if(b6[b4].nodeType===1){b5.push(b6[b4])
}}b6=b5
}return b6
}
}b2.innerHTML="<a href='#'></a>";
if(b2.firstChild&&typeof b2.firstChild.getAttribute!=="undefined"&&b2.firstChild.getAttribute("href")!=="#"){bP.attrHandle.href=function(b3){return b3.getAttribute("href",2)
}
}b2=null
})();
if(aF.querySelectorAll){(function(){var b2=bJ,b5=aF.createElement("div"),b4="__sizzle__";
b5.innerHTML="<p class='TEST'></p>";
if(b5.querySelectorAll&&b5.querySelectorAll(".TEST").length===0){return
}bJ=function(cg,b7,cb,cf){b7=b7||aF;
if(!cf&&!bJ.isXML(b7)){var ce=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(cg);
if(ce&&(b7.nodeType===1||b7.nodeType===9)){if(ce[1]){return bQ(b7.getElementsByTagName(cg),cb)
}else{if(ce[2]&&bP.find.CLASS&&b7.getElementsByClassName){return bQ(b7.getElementsByClassName(ce[2]),cb)
}}}if(b7.nodeType===9){if(cg==="body"&&b7.body){return bQ([b7.body],cb)
}else{if(ce&&ce[3]){var ca=b7.getElementById(ce[3]);
if(ca&&ca.parentNode){if(ca.id===ce[3]){return bQ([ca],cb)
}}else{return bQ([],cb)
}}}try{return bQ(b7.querySelectorAll(cg),cb)
}catch(cc){}}else{if(b7.nodeType===1&&b7.nodeName.toLowerCase()!=="object"){var b8=b7,b9=b7.getAttribute("id"),b6=b9||b4,ci=b7.parentNode,ch=/^\s*[+~]/.test(cg);
if(!b9){b7.setAttribute("id",b6)
}else{b6=b6.replace(/'/g,"\\$&")
}if(ch&&ci){b7=b7.parentNode
}try{if(!ch||ci){return bQ(b7.querySelectorAll("[id='"+b6+"'] "+cg),cb)
}}catch(cd){}finally{if(!b9){b8.removeAttribute("id")
}}}}}return b2(cg,b7,cb,cf)
};
for(var b3 in b2){bJ[b3]=b2[b3]
}b5=null
})()
}(function(){var b2=aF.documentElement,b4=b2.matchesSelector||b2.mozMatchesSelector||b2.webkitMatchesSelector||b2.msMatchesSelector;
if(b4){var b6=!b4.call(aF.createElement("div"),"div"),b3=false;
try{b4.call(aF.documentElement,"[test!='']:sizzle")
}catch(b5){b3=true
}bJ.matchesSelector=function(b8,ca){ca=ca.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");
if(!bJ.isXML(b8)){try{if(b3||!bP.match.PSEUDO.test(ca)&&!/!=/.test(ca)){var b7=b4.call(b8,ca);
if(b7||!b6||b8.document&&b8.document.nodeType!==11){return b7
}}}catch(b9){}}return bJ(ca,null,null,[b8]).length>0
}
}})();
(function(){var b2=aF.createElement("div");
b2.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!b2.getElementsByClassName||b2.getElementsByClassName("e").length===0){return
}b2.lastChild.className="e";
if(b2.getElementsByClassName("e").length===1){return
}bP.order.splice(1,0,"CLASS");
bP.find.CLASS=function(b3,b4,b5){if(typeof b4.getElementsByClassName!=="undefined"&&!b5){return b4.getElementsByClassName(b3[1])
}};
b2=null
})();
function bG(b3,b8,b7,cb,b9,ca){for(var b5=0,b4=cb.length;
b5<b4;
b5++){var b2=cb[b5];
if(b2){var b6=false;
b2=b2[b3];
while(b2){if(b2[bN]===b7){b6=cb[b2.sizset];
break
}if(b2.nodeType===1&&!ca){b2[bN]=b7;
b2.sizset=b5
}if(b2.nodeName.toLowerCase()===b8){b6=b2;
break
}b2=b2[b3]
}cb[b5]=b6
}}}function bY(b3,b8,b7,cb,b9,ca){for(var b5=0,b4=cb.length;
b5<b4;
b5++){var b2=cb[b5];
if(b2){var b6=false;
b2=b2[b3];
while(b2){if(b2[bN]===b7){b6=cb[b2.sizset];
break
}if(b2.nodeType===1){if(!ca){b2[bN]=b7;
b2.sizset=b5
}if(typeof b8!=="string"){if(b2===b8){b6=true;
break
}}else{if(bJ.filter(b8,[b2]).length>0){b6=b2;
break
}}}b2=b2[b3]
}cb[b5]=b6
}}}if(aF.documentElement.contains){bJ.contains=function(b3,b2){return b3!==b2&&(b3.contains?b3.contains(b2):true)
}
}else{if(aF.documentElement.compareDocumentPosition){bJ.contains=function(b3,b2){return !!(b3.compareDocumentPosition(b2)&16)
}
}else{bJ.contains=function(){return false
}
}}bJ.isXML=function(b2){var b3=(b2?b2.ownerDocument||b2:0).documentElement;
return b3?b3.nodeName!=="HTML":false
};
var bX=function(b4,b2,b8){var b7,b9=[],b6="",ca=b2.nodeType?[b2]:b2;
while((b7=bP.match.PSEUDO.exec(b4))){b6+=b7[0];
b4=b4.replace(bP.match.PSEUDO,"")
}b4=bP.relative[b4]?b4+"*":b4;
for(var b5=0,b3=ca.length;
b5<b3;
b5++){bJ(b4,ca[b5],b9,b8)
}return bJ.filter(b6,b9)
};
bJ.attr=b.attr;
bJ.selectors.attrMap={};
b.find=bJ;
b.expr=bJ.selectors;
b.expr[":"]=b.expr.filters;
b.unique=bJ.uniqueSort;
b.text=bJ.getText;
b.isXMLDoc=bJ.isXML;
b.contains=bJ.contains
})();
var al=/Until$/,aB=/^(?:parents|prevUntil|prevAll)/,bm=/,/,bA=/^.[^:#\[\.,]*$/,Y=Array.prototype.slice,Q=b.expr.match.globalPOS,aI={children:true,contents:true,next:true,prev:true};
b.fn.extend({find:function(bG){var bI=this,bK,bH;
if(typeof bG!=="string"){return b(bG).filter(function(){for(bK=0,bH=bI.length;
bK<bH;
bK++){if(b.contains(bI[bK],this)){return true
}}})
}var bJ=this.pushStack("","find",bG),bM,bN,bL;
for(bK=0,bH=this.length;
bK<bH;
bK++){bM=bJ.length;
b.find(bG,this[bK],bJ);
if(bK>0){for(bN=bM;
bN<bJ.length;
bN++){for(bL=0;
bL<bM;
bL++){if(bJ[bL]===bJ[bN]){bJ.splice(bN--,1);
break
}}}}}return bJ
},has:function(bH){var bG=b(bH);
return this.filter(function(){for(var bJ=0,bI=bG.length;
bJ<bI;
bJ++){if(b.contains(this,bG[bJ])){return true
}}})
},not:function(bG){return this.pushStack(aR(this,bG,false),"not",bG)
},filter:function(bG){return this.pushStack(aR(this,bG,true),"filter",bG)
},is:function(bG){return !!bG&&(typeof bG==="string"?Q.test(bG)?b(bG,this.context).index(this[0])>=0:b.filter(bG,this).length>0:this.filter(bG).length>0)
},closest:function(bK,bJ){var bH=[],bI,bG,bL=this[0];
if(b.isArray(bK)){var bN=1;
while(bL&&bL.ownerDocument&&bL!==bJ){for(bI=0;
bI<bK.length;
bI++){if(b(bL).is(bK[bI])){bH.push({selector:bK[bI],elem:bL,level:bN})
}}bL=bL.parentNode;
bN++
}return bH
}var bM=Q.test(bK)||typeof bK!=="string"?b(bK,bJ||this.context):0;
for(bI=0,bG=this.length;
bI<bG;
bI++){bL=this[bI];
while(bL){if(bM?bM.index(bL)>-1:b.find.matchesSelector(bL,bK)){bH.push(bL);
break
}else{bL=bL.parentNode;
if(!bL||!bL.ownerDocument||bL===bJ||bL.nodeType===11){break
}}}}bH=bH.length>1?b.unique(bH):bH;
return this.pushStack(bH,"closest",bK)
},index:function(bG){if(!bG){return(this[0]&&this[0].parentNode)?this.prevAll().length:-1
}if(typeof bG==="string"){return b.inArray(this[0],b(bG))
}return b.inArray(bG.jquery?bG[0]:bG,this)
},add:function(bG,bH){var bJ=typeof bG==="string"?b(bG,bH):b.makeArray(bG&&bG.nodeType?[bG]:bG),bI=b.merge(this.get(),bJ);
return this.pushStack(K(bJ[0])||K(bI[0])?bI:b.unique(bI))
},andSelf:function(){return this.add(this.prevObject)
}});
function K(bG){return !bG||!bG.parentNode||bG.parentNode.nodeType===11
}b.each({parent:function(bH){var bG=bH.parentNode;
return bG&&bG.nodeType!==11?bG:null
},parents:function(bG){return b.dir(bG,"parentNode")
},parentsUntil:function(bH,bG,bI){return b.dir(bH,"parentNode",bI)
},next:function(bG){return b.nth(bG,2,"nextSibling")
},prev:function(bG){return b.nth(bG,2,"previousSibling")
},nextAll:function(bG){return b.dir(bG,"nextSibling")
},prevAll:function(bG){return b.dir(bG,"previousSibling")
},nextUntil:function(bH,bG,bI){return b.dir(bH,"nextSibling",bI)
},prevUntil:function(bH,bG,bI){return b.dir(bH,"previousSibling",bI)
},siblings:function(bG){return b.sibling((bG.parentNode||{}).firstChild,bG)
},children:function(bG){return b.sibling(bG.firstChild)
},contents:function(bG){return b.nodeName(bG,"iframe")?bG.contentDocument||bG.contentWindow.document:b.makeArray(bG.childNodes)
}},function(bG,bH){b.fn[bG]=function(bK,bI){var bJ=b.map(this,bH,bK);
if(!al.test(bG)){bI=bK
}if(bI&&typeof bI==="string"){bJ=b.filter(bI,bJ)
}bJ=this.length>1&&!aI[bG]?b.unique(bJ):bJ;
if((this.length>1||bm.test(bI))&&aB.test(bG)){bJ=bJ.reverse()
}return this.pushStack(bJ,bG,Y.call(arguments).join(","))
}
});
b.extend({filter:function(bI,bG,bH){if(bH){bI=":not("+bI+")"
}return bG.length===1?b.find.matchesSelector(bG[0],bI)?[bG[0]]:[]:b.find.matches(bI,bG)
},dir:function(bI,bH,bK){var bG=[],bJ=bI[bH];
while(bJ&&bJ.nodeType!==9&&(bK===U||bJ.nodeType!==1||!b(bJ).is(bK))){if(bJ.nodeType===1){bG.push(bJ)
}bJ=bJ[bH]
}return bG
},nth:function(bK,bG,bI,bJ){bG=bG||1;
var bH=0;
for(;
bK;
bK=bK[bI]){if(bK.nodeType===1&&++bH===bG){break
}}return bK
},sibling:function(bI,bH){var bG=[];
for(;
bI;
bI=bI.nextSibling){if(bI.nodeType===1&&bI!==bH){bG.push(bI)
}}return bG
}});
function aR(bJ,bI,bG){bI=bI||0;
if(b.isFunction(bI)){return b.grep(bJ,function(bL,bK){var bM=!!bI.call(bL,bK,bL);
return bM===bG
})
}else{if(bI.nodeType){return b.grep(bJ,function(bL,bK){return(bL===bI)===bG
})
}else{if(typeof bI==="string"){var bH=b.grep(bJ,function(bK){return bK.nodeType===1
});
if(bA.test(bI)){return b.filter(bI,bH,!bG)
}else{bI=b.filter(bI,bH)
}}}}return b.grep(bJ,function(bL,bK){return(b.inArray(bL,bI)>=0)===bG
})
}function a(bG){var bI=a2.split("|"),bH=bG.createDocumentFragment();
if(bH.createElement){while(bI.length){bH.createElement(bI.pop())
}}return bH
}var a2="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ar=/ jQuery\d+="(?:\d+|null)"/g,aC=/^\s+/,ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,f=/<([\w:]+)/,E=/<tbody/i,ag=/<|&#?\w+;/,ao=/<(?:script|style)/i,X=/<(?:script|object|embed|option|style)/i,at=new RegExp("<(?:"+a2+")[\\s/>]","i"),u=/checked\s*(?:[^=]|=\s*.checked.)/i,by=/\/(java|ecma)script/i,aY=/^\s*<!(?:\[CDATA\[|\-\-)/,aH={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},am=a(aF);
aH.optgroup=aH.option;
aH.tbody=aH.tfoot=aH.colgroup=aH.caption=aH.thead;
aH.th=aH.td;
if(!b.support.htmlSerialize){aH._default=[1,"div<div>","</div>"]
}b.fn.extend({text:function(bG){return b.access(this,function(bH){return bH===U?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||aF).createTextNode(bH))
},null,bG,arguments.length)
},wrapAll:function(bG){if(b.isFunction(bG)){return this.each(function(bI){b(this).wrapAll(bG.call(this,bI))
})
}if(this[0]){var bH=b(bG,this[0].ownerDocument).eq(0).clone(true);
if(this[0].parentNode){bH.insertBefore(this[0])
}bH.map(function(){var bI=this;
while(bI.firstChild&&bI.firstChild.nodeType===1){bI=bI.firstChild
}return bI
}).append(this)
}return this
},wrapInner:function(bG){if(b.isFunction(bG)){return this.each(function(bH){b(this).wrapInner(bG.call(this,bH))
})
}return this.each(function(){var bH=b(this),bI=bH.contents();
if(bI.length){bI.wrapAll(bG)
}else{bH.append(bG)
}})
},wrap:function(bG){var bH=b.isFunction(bG);
return this.each(function(bI){b(this).wrapAll(bH?bG.call(this,bI):bG)
})
},unwrap:function(){return this.parent().each(function(){if(!b.nodeName(this,"body")){b(this).replaceWith(this.childNodes)
}}).end()
},append:function(){return this.domManip(arguments,true,function(bG){if(this.nodeType===1){this.appendChild(bG)
}})
},prepend:function(){return this.domManip(arguments,true,function(bG){if(this.nodeType===1){this.insertBefore(bG,this.firstChild)
}})
},before:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(bH){this.parentNode.insertBefore(bH,this)
})
}else{if(arguments.length){var bG=b.clean(arguments);
bG.push.apply(bG,this.toArray());
return this.pushStack(bG,"before",arguments)
}}},after:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(bH){this.parentNode.insertBefore(bH,this.nextSibling)
})
}else{if(arguments.length){var bG=this.pushStack(this,"after",arguments);
bG.push.apply(bG,b.clean(arguments));
return bG
}}},remove:function(bG,bJ){for(var bH=0,bI;
(bI=this[bH])!=null;
bH++){if(!bG||b.filter(bG,[bI]).length){if(!bJ&&bI.nodeType===1){b.cleanData(bI.getElementsByTagName("*"));
b.cleanData([bI])
}if(bI.parentNode){bI.parentNode.removeChild(bI)
}}}return this
},empty:function(){for(var bG=0,bH;
(bH=this[bG])!=null;
bG++){if(bH.nodeType===1){b.cleanData(bH.getElementsByTagName("*"))
}while(bH.firstChild){bH.removeChild(bH.firstChild)
}}return this
},clone:function(bH,bG){bH=bH==null?false:bH;
bG=bG==null?bH:bG;
return this.map(function(){return b.clone(this,bH,bG)
})
},html:function(bG){return b.access(this,function(bK){var bJ=this[0]||{},bI=0,bH=this.length;
if(bK===U){return bJ.nodeType===1?bJ.innerHTML.replace(ar,""):null
}if(typeof bK==="string"&&!ao.test(bK)&&(b.support.leadingWhitespace||!aC.test(bK))&&!aH[(f.exec(bK)||["",""])[1].toLowerCase()]){bK=bK.replace(ab,"<$1></$2>");
try{for(;
bI<bH;
bI++){bJ=this[bI]||{};
if(bJ.nodeType===1){b.cleanData(bJ.getElementsByTagName("*"));
bJ.innerHTML=bK
}}bJ=0
}catch(bL){}}if(bJ){this.empty().append(bK)
}},null,bG,arguments.length)
},replaceWith:function(bG){if(this[0]&&this[0].parentNode){if(b.isFunction(bG)){return this.each(function(bJ){var bI=b(this),bH=bI.html();
bI.replaceWith(bG.call(this,bJ,bH))
})
}if(typeof bG!=="string"){bG=b(bG).detach()
}return this.each(function(){var bI=this.nextSibling,bH=this.parentNode;
b(this).remove();
if(bI){b(bI).before(bG)
}else{b(bH).append(bG)
}})
}else{return this.length?this.pushStack(b(b.isFunction(bG)?bG():bG),"replaceWith",bG):this
}},detach:function(bG){return this.remove(bG,true)
},domManip:function(bN,bR,bQ){var bJ,bK,bM,bP,bO=bN[0],bH=[];
if(!b.support.checkClone&&arguments.length===3&&typeof bO==="string"&&u.test(bO)){return this.each(function(){b(this).domManip(bN,bR,bQ,true)
})
}if(b.isFunction(bO)){return this.each(function(bT){var bS=b(this);
bN[0]=bO.call(this,bT,bR?bS.html():U);
bS.domManip(bN,bR,bQ)
})
}if(this[0]){bP=bO&&bO.parentNode;
if(b.support.parentNode&&bP&&bP.nodeType===11&&bP.childNodes.length===this.length){bJ={fragment:bP}
}else{bJ=b.buildFragment(bN,this,bH)
}bM=bJ.fragment;
if(bM.childNodes.length===1){bK=bM=bM.firstChild
}else{bK=bM.firstChild
}if(bK){bR=bR&&b.nodeName(bK,"tr");
for(var bI=0,bG=this.length,bL=bG-1;
bI<bG;
bI++){bQ.call(bR?bn(this[bI],bK):this[bI],bJ.cacheable||(bG>1&&bI<bL)?b.clone(bM,true,true):bM)
}}if(bH.length){b.each(bH,function(bS,bT){if(bT.src){b.ajax({type:"GET",global:false,url:bT.src,async:false,dataType:"script"})
}else{b.globalEval((bT.text||bT.textContent||bT.innerHTML||"").replace(aY,"/*$0*/"))
}if(bT.parentNode){bT.parentNode.removeChild(bT)
}})
}}return this
}});
function bn(bG,bH){return b.nodeName(bG,"table")?(bG.getElementsByTagName("tbody")[0]||bG.appendChild(bG.ownerDocument.createElement("tbody"))):bG
}function B(bN,bH){if(bH.nodeType!==1||!b.hasData(bN)){return
}var bK,bJ,bG,bM=b._data(bN),bL=b._data(bH,bM),bI=bM.events;
if(bI){delete bL.handle;
bL.events={};
for(bK in bI){for(bJ=0,bG=bI[bK].length;
bJ<bG;
bJ++){b.event.add(bH,bK,bI[bK][bJ])
}}}if(bL.data){bL.data=b.extend({},bL.data)
}}function au(bH,bG){var bI;
if(bG.nodeType!==1){return
}if(bG.clearAttributes){bG.clearAttributes()
}if(bG.mergeAttributes){bG.mergeAttributes(bH)
}bI=bG.nodeName.toLowerCase();
if(bI==="object"){bG.outerHTML=bH.outerHTML
}else{if(bI==="input"&&(bH.type==="checkbox"||bH.type==="radio")){if(bH.checked){bG.defaultChecked=bG.checked=bH.checked
}if(bG.value!==bH.value){bG.value=bH.value
}}else{if(bI==="option"){bG.selected=bH.defaultSelected
}else{if(bI==="input"||bI==="textarea"){bG.defaultValue=bH.defaultValue
}else{if(bI==="script"&&bG.text!==bH.text){bG.text=bH.text
}}}}}bG.removeAttribute(b.expando);
bG.removeAttribute("_submit_attached");
bG.removeAttribute("_change_attached")
}b.buildFragment=function(bL,bJ,bH){var bK,bG,bI,bM,bN=bL[0];
if(bJ&&bJ[0]){bM=bJ[0].ownerDocument||bJ[0]
}if(!bM.createDocumentFragment){bM=aF
}if(bL.length===1&&typeof bN==="string"&&bN.length<512&&bM===aF&&bN.charAt(0)==="<"&&!X.test(bN)&&(b.support.checkClone||!u.test(bN))&&(b.support.html5Clone||!at.test(bN))){bG=true;
bI=b.fragments[bN];
if(bI&&bI!==1){bK=bI
}}if(!bK){bK=bM.createDocumentFragment();
b.clean(bL,bM,bK,bH)
}if(bG){b.fragments[bN]=bI?bK:1
}return{fragment:bK,cacheable:bG}
};
b.fragments={};
b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(bG,bH){b.fn[bG]=function(bI){var bL=[],bO=b(bI),bN=this.length===1&&this[0].parentNode;
if(bN&&bN.nodeType===11&&bN.childNodes.length===1&&bO.length===1){bO[bH](this[0]);
return this
}else{for(var bM=0,bJ=bO.length;
bM<bJ;
bM++){var bK=(bM>0?this.clone(true):this).get();
b(bO[bM])[bH](bK);
bL=bL.concat(bK)
}return this.pushStack(bL,bG,bO.selector)
}}
});
function bs(bG){if(typeof bG.getElementsByTagName!=="undefined"){return bG.getElementsByTagName("*")
}else{if(typeof bG.querySelectorAll!=="undefined"){return bG.querySelectorAll("*")
}else{return[]
}}}function aJ(bG){if(bG.type==="checkbox"||bG.type==="radio"){bG.defaultChecked=bG.checked
}}function M(bG){var bH=(bG.nodeName||"").toLowerCase();
if(bH==="input"){aJ(bG)
}else{if(bH!=="script"&&typeof bG.getElementsByTagName!=="undefined"){b.grep(bG.getElementsByTagName("input"),aJ)
}}}function ax(bG){var bH=aF.createElement("div");
am.appendChild(bH);
bH.innerHTML=bG.outerHTML;
return bH.firstChild
}b.extend({clone:function(bK,bM,bI){var bG,bH,bJ,bL=b.support.html5Clone||b.isXMLDoc(bK)||!at.test("<"+bK.nodeName+">")?bK.cloneNode(true):ax(bK);
if((!b.support.noCloneEvent||!b.support.noCloneChecked)&&(bK.nodeType===1||bK.nodeType===11)&&!b.isXMLDoc(bK)){au(bK,bL);
bG=bs(bK);
bH=bs(bL);
for(bJ=0;
bG[bJ];
++bJ){if(bH[bJ]){au(bG[bJ],bH[bJ])
}}}if(bM){B(bK,bL);
if(bI){bG=bs(bK);
bH=bs(bL);
for(bJ=0;
bG[bJ];
++bJ){B(bG[bJ],bH[bJ])
}}}bG=bH=null;
return bL
},clean:function(bU,bI,bH,bJ){var bM,bT,bP,bV=[];
bI=bI||aF;
if(typeof bI.createElement==="undefined"){bI=bI.ownerDocument||bI[0]&&bI[0].ownerDocument||aF
}for(var bQ=0,bS;
(bS=bU[bQ])!=null;
bQ++){if(typeof bS==="number"){bS+=""
}if(!bS){continue
}if(typeof bS==="string"){if(!ag.test(bS)){bS=bI.createTextNode(bS)
}else{bS=bS.replace(ab,"<$1></$2>");
var bZ=(f.exec(bS)||["",""])[1].toLowerCase(),bL=aH[bZ]||aH._default,bW=bL[0],bN=bI.createElement("div"),bX=am.childNodes,bY;
if(bI===aF){am.appendChild(bN)
}else{a(bI).appendChild(bN)
}bN.innerHTML=bL[1]+bS+bL[2];
while(bW--){bN=bN.lastChild
}if(!b.support.tbody){var bK=E.test(bS),bG=bZ==="table"&&!bK?bN.firstChild&&bN.firstChild.childNodes:bL[1]==="<table>"&&!bK?bN.childNodes:[];
for(bP=bG.length-1;
bP>=0;
--bP){if(b.nodeName(bG[bP],"tbody")&&!bG[bP].childNodes.length){bG[bP].parentNode.removeChild(bG[bP])
}}}if(!b.support.leadingWhitespace&&aC.test(bS)){bN.insertBefore(bI.createTextNode(aC.exec(bS)[0]),bN.firstChild)
}bS=bN.childNodes;
if(bN){bN.parentNode.removeChild(bN);
if(bX.length>0){bY=bX[bX.length-1];
if(bY&&bY.parentNode){bY.parentNode.removeChild(bY)
}}}}}var bR;
if(!b.support.appendChecked){if(bS[0]&&typeof(bR=bS.length)==="number"){for(bP=0;
bP<bR;
bP++){M(bS[bP])
}}else{M(bS)
}}if(bS.nodeType){bV.push(bS)
}else{bV=b.merge(bV,bS)
}}if(bH){bM=function(b0){return !b0.type||by.test(b0.type)
};
for(bQ=0;
bV[bQ];
bQ++){bT=bV[bQ];
if(bJ&&b.nodeName(bT,"script")&&(!bT.type||by.test(bT.type))){bJ.push(bT.parentNode?bT.parentNode.removeChild(bT):bT)
}else{if(bT.nodeType===1){var bO=b.grep(bT.getElementsByTagName("script"),bM);
bV.splice.apply(bV,[bQ+1,0].concat(bO))
}bH.appendChild(bT)
}}}return bV
},cleanData:function(bH){var bK,bI,bG=b.cache,bN=b.event.special,bM=b.support.deleteExpando;
for(var bL=0,bJ;
(bJ=bH[bL])!=null;
bL++){if(bJ.nodeName&&b.noData[bJ.nodeName.toLowerCase()]){continue
}bI=bJ[b.expando];
if(bI){bK=bG[bI];
if(bK&&bK.events){for(var bO in bK.events){if(bN[bO]){b.event.remove(bJ,bO)
}else{b.removeEvent(bJ,bO,bK.handle)
}}if(bK.handle){bK.handle.elem=null
}}if(bM){delete bJ[b.expando]
}else{if(bJ.removeAttribute){bJ.removeAttribute(b.expando)
}}delete bG[bI]
}}}});
var aw=/alpha\([^)]*\)/i,aE=/opacity=([^)]*)/,H=/([A-Z]|^ms)/g,bz=/^[\-+]?(?:\d*\.)?\d+$/i,bc=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,R=/^([\-+])=([\-+.\de]+)/,aO=/^margin/,bk={position:"absolute",visibility:"hidden",display:"block"},P=["Top","Right","Bottom","Left"],aj,aT,a8;
b.fn.css=function(bG,bH){return b.access(this,function(bJ,bI,bK){return bK!==U?b.style(bJ,bI,bK):b.css(bJ,bI)
},bG,bH,arguments.length>1)
};
b.extend({cssHooks:{opacity:{get:function(bI,bH){if(bH){var bG=aj(bI,"opacity");
return bG===""?"1":bG
}else{return bI.style.opacity
}}}},cssNumber:{fillOpacity:true,fontWeight:true,lineHeight:true,opacity:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(bI,bH,bO,bJ){if(!bI||bI.nodeType===3||bI.nodeType===8||!bI.style){return
}var bM,bN,bK=b.camelCase(bH),bG=bI.style,bP=b.cssHooks[bK];
bH=b.cssProps[bK]||bK;
if(bO!==U){bN=typeof bO;
if(bN==="string"&&(bM=R.exec(bO))){bO=(+(bM[1]+1)*+bM[2])+parseFloat(b.css(bI,bH));
bN="number"
}if(bO==null||bN==="number"&&isNaN(bO)){return
}if(bN==="number"&&!b.cssNumber[bK]){bO+="px"
}if(!bP||!("set" in bP)||(bO=bP.set(bI,bO))!==U){try{bG[bH]=bO
}catch(bL){}}}else{if(bP&&"get" in bP&&(bM=bP.get(bI,false,bJ))!==U){return bM
}return bG[bH]
}},css:function(bK,bJ,bH){var bI,bG;
bJ=b.camelCase(bJ);
bG=b.cssHooks[bJ];
bJ=b.cssProps[bJ]||bJ;
if(bJ==="cssFloat"){bJ="float"
}if(bG&&"get" in bG&&(bI=bG.get(bK,true,bH))!==U){return bI
}else{if(aj){return aj(bK,bJ)
}}},swap:function(bK,bJ,bL){var bG={},bI,bH;
for(bH in bJ){bG[bH]=bK.style[bH];
bK.style[bH]=bJ[bH]
}bI=bL.call(bK);
for(bH in bJ){bK.style[bH]=bG[bH]
}return bI
}});
b.curCSS=b.css;
if(aF.defaultView&&aF.defaultView.getComputedStyle){aT=function(bM,bI){var bH,bL,bG,bK,bJ=bM.style;
bI=bI.replace(H,"-$1").toLowerCase();
if((bL=bM.ownerDocument.defaultView)&&(bG=bL.getComputedStyle(bM,null))){bH=bG.getPropertyValue(bI);
if(bH===""&&!b.contains(bM.ownerDocument.documentElement,bM)){bH=b.style(bM,bI)
}}if(!b.support.pixelMargin&&bG&&aO.test(bI)&&bc.test(bH)){bK=bJ.width;
bJ.width=bH;
bH=bG.width;
bJ.width=bK
}return bH
}
}if(aF.documentElement.currentStyle){a8=function(bL,bI){var bM,bG,bK,bH=bL.currentStyle&&bL.currentStyle[bI],bJ=bL.style;
if(bH==null&&bJ&&(bK=bJ[bI])){bH=bK
}if(bc.test(bH)){bM=bJ.left;
bG=bL.runtimeStyle&&bL.runtimeStyle.left;
if(bG){bL.runtimeStyle.left=bL.currentStyle.left
}bJ.left=bI==="fontSize"?"1em":bH;
bH=bJ.pixelLeft+"px";
bJ.left=bM;
if(bG){bL.runtimeStyle.left=bG
}}return bH===""?"auto":bH
}
}aj=aT||a8;
function ap(bK,bI,bH){var bL=bI==="width"?bK.offsetWidth:bK.offsetHeight,bJ=bI==="width"?1:0,bG=4;
if(bL>0){if(bH!=="border"){for(;
bJ<bG;
bJ+=2){if(!bH){bL-=parseFloat(b.css(bK,"padding"+P[bJ]))||0
}if(bH==="margin"){bL+=parseFloat(b.css(bK,bH+P[bJ]))||0
}else{bL-=parseFloat(b.css(bK,"border"+P[bJ]+"Width"))||0
}}}return bL+"px"
}bL=aj(bK,bI);
if(bL<0||bL==null){bL=bK.style[bI]
}if(bc.test(bL)){return bL
}bL=parseFloat(bL)||0;
if(bH){for(;
bJ<bG;
bJ+=2){bL+=parseFloat(b.css(bK,"padding"+P[bJ]))||0;
if(bH!=="padding"){bL+=parseFloat(b.css(bK,"border"+P[bJ]+"Width"))||0
}if(bH==="margin"){bL+=parseFloat(b.css(bK,bH+P[bJ]))||0
}}}return bL+"px"
}b.each(["height","width"],function(bH,bG){b.cssHooks[bG]={get:function(bK,bJ,bI){if(bJ){if(bK.offsetWidth!==0){return ap(bK,bG,bI)
}else{return b.swap(bK,bk,function(){return ap(bK,bG,bI)
})
}}},set:function(bI,bJ){return bz.test(bJ)?bJ+"px":bJ
}}
});
if(!b.support.opacity){b.cssHooks.opacity={get:function(bH,bG){return aE.test((bG&&bH.currentStyle?bH.currentStyle.filter:bH.style.filter)||"")?(parseFloat(RegExp.$1)/100)+"":bG?"1":""
},set:function(bK,bL){var bJ=bK.style,bH=bK.currentStyle,bG=b.isNumeric(bL)?"alpha(opacity="+bL*100+")":"",bI=bH&&bH.filter||bJ.filter||"";
bJ.zoom=1;
if(bL>=1&&b.trim(bI.replace(aw,""))===""){bJ.removeAttribute("filter");
if(bH&&!bH.filter){return
}}bJ.filter=aw.test(bI)?bI.replace(aw,bG):bI+" "+bG
}}
}b(function(){if(!b.support.reliableMarginRight){b.cssHooks.marginRight={get:function(bH,bG){return b.swap(bH,{display:"inline-block"},function(){if(bG){return aj(bH,"margin-right")
}else{return bH.style.marginRight
}})
}}
}});
if(b.expr&&b.expr.filters){b.expr.filters.hidden=function(bI){var bH=bI.offsetWidth,bG=bI.offsetHeight;
return(bH===0&&bG===0)||(!b.support.reliableHiddenOffsets&&((bI.style&&bI.style.display)||b.css(bI,"display"))==="none")
};
b.expr.filters.visible=function(bG){return !b.expr.filters.hidden(bG)
}
}b.each({margin:"",padding:"",border:"Width"},function(bG,bH){b.cssHooks[bG+bH]={expand:function(bK){var bJ,bL=typeof bK==="string"?bK.split(" "):[bK],bI={};
for(bJ=0;
bJ<4;
bJ++){bI[bG+P[bJ]+bH]=bL[bJ]||bL[bJ-2]||bL[0]
}return bI
}}
});
var p=/%20/g,aA=/\[\]$/,bD=/\r?\n/g,bB=/#.*$/,aN=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,ba=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,aX=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,a1=/^(?:GET|HEAD)$/,c=/^\/\//,V=/\?/,bi=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,w=/^(?:select|textarea)/i,l=/\s+/,bC=/([?&])_=[^&]*/,T=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,I=b.fn.load,ak={},z={},aP,A,a6=["*/"]+["*"];
try{aP=bx.href
}catch(aG){aP=aF.createElement("a");
aP.href="";
aP=aP.href
}A=T.exec(aP.toLowerCase())||[];
function g(bG){return function(bK,bM){if(typeof bK!=="string"){bM=bK;
bK="*"
}if(b.isFunction(bM)){var bJ=bK.toLowerCase().split(l),bI=0,bL=bJ.length,bH,bN,bO;
for(;
bI<bL;
bI++){bH=bJ[bI];
bO=/^\+/.test(bH);
if(bO){bH=bH.substr(1)||"*"
}bN=bG[bH]=bG[bH]||[];
bN[bO?"unshift":"push"](bM)
}}}
}function a7(bH,bQ,bL,bP,bN,bJ){bN=bN||bQ.dataTypes[0];
bJ=bJ||{};
bJ[bN]=true;
var bM=bH[bN],bI=0,bG=bM?bM.length:0,bK=(bH===ak),bO;
for(;
bI<bG&&(bK||!bO);
bI++){bO=bM[bI](bQ,bL,bP);
if(typeof bO==="string"){if(!bK||bJ[bO]){bO=U
}else{bQ.dataTypes.unshift(bO);
bO=a7(bH,bQ,bL,bP,bO,bJ)
}}}if((bK||!bO)&&!bJ["*"]){bO=a7(bH,bQ,bL,bP,"*",bJ)
}return bO
}function ay(bI,bJ){var bH,bG,bK=b.ajaxSettings.flatOptions||{};
for(bH in bJ){if(bJ[bH]!==U){(bK[bH]?bI:(bG||(bG={})))[bH]=bJ[bH]
}}if(bG){b.extend(true,bI,bG)
}}b.fn.extend({load:function(bI,bL,bM){if(typeof bI!=="string"&&I){return I.apply(this,arguments)
}else{if(!this.length){return this
}}var bK=bI.indexOf(" ");
if(bK>=0){var bG=bI.slice(bK,bI.length);
bI=bI.slice(0,bK)
}var bJ="GET";
if(bL){if(b.isFunction(bL)){bM=bL;
bL=U
}else{if(typeof bL==="object"){bL=b.param(bL,b.ajaxSettings.traditional);
bJ="POST"
}}}var bH=this;
b.ajax({url:bI,type:bJ,dataType:"html",data:bL,complete:function(bO,bN,bP){bP=bO.responseText;
if(bO.isResolved()){bO.done(function(bQ){bP=bQ
});
bH.html(bG?b("<div>").append(bP.replace(bi,"")).find(bG):bP)
}if(bM){bH.each(bM,[bP,bN,bO])
}}});
return this
},serialize:function(){return b.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){return this.elements?b.makeArray(this.elements):this
}).filter(function(){return this.name&&!this.disabled&&(this.checked||w.test(this.nodeName)||ba.test(this.type))
}).map(function(bG,bH){var bI=b(this).val();
return bI==null?null:b.isArray(bI)?b.map(bI,function(bK,bJ){return{name:bH.name,value:bK.replace(bD,"\r\n")}
}):{name:bH.name,value:bI.replace(bD,"\r\n")}
}).get()
}});
b.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(bG,bH){b.fn[bH]=function(bI){return this.on(bH,bI)
}
});
b.each(["get","post"],function(bG,bH){b[bH]=function(bI,bK,bL,bJ){if(b.isFunction(bK)){bJ=bJ||bL;
bL=bK;
bK=U
}return b.ajax({type:bH,url:bI,data:bK,success:bL,dataType:bJ})
}
});
b.extend({getScript:function(bG,bH){return b.get(bG,U,bH,"script")
},getJSON:function(bG,bH,bI){return b.get(bG,bH,bI,"json")
},ajaxSetup:function(bH,bG){if(bG){ay(bH,b.ajaxSettings)
}else{bG=bH;
bH=b.ajaxSettings
}ay(bH,bG);
return bH
},ajaxSettings:{url:aP,isLocal:aX.test(A[1]),global:true,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:true,async:true,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":a6},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":bo.String,"text html":true,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{context:true,url:true}},ajaxPrefilter:g(ak),ajaxTransport:g(z),ajax:function(bK,bI){if(typeof bK==="object"){bI=bK;
bK=U
}bI=bI||{};
var bO=b.ajaxSetup({},bI),b3=bO.context||bO,bR=b3!==bO&&(b3.nodeType||b3 instanceof b)?b(b3):b.event,b2=b.Deferred(),bY=b.Callbacks("once memory"),bM=bO.statusCode||{},bN,bS={},bZ={},b1,bJ,bW,bP,bT,bL=0,bH,bV,bU={readyState:0,setRequestHeader:function(b5,b6){if(!bL){var b4=b5.toLowerCase();
b5=bZ[b4]=bZ[b4]||b5;
bS[b5]=b6
}return this
},getAllResponseHeaders:function(){return bL===2?b1:null
},getResponseHeader:function(b5){var b4;
if(bL===2){if(!bJ){bJ={};
while((b4=aN.exec(b1))){bJ[b4[1].toLowerCase()]=b4[2]
}}b4=bJ[b5.toLowerCase()]
}return b4===U?null:b4
},overrideMimeType:function(b4){if(!bL){bO.mimeType=b4
}return this
},abort:function(b4){b4=b4||"abort";
if(bW){bW.abort(b4)
}bQ(0,b4);
return this
}};
function bQ(ca,b5,cb,b7){if(bL===2){return
}bL=2;
if(bP){clearTimeout(bP)
}bW=U;
b1=b7||"";
bU.readyState=ca>0?4:0;
var b4,cf,ce,b8=b5,b9=cb?bv(bO,bU,cb):U,b6,cd;
if(ca>=200&&ca<300||ca===304){if(bO.ifModified){if((b6=bU.getResponseHeader("Last-Modified"))){b.lastModified[bN]=b6
}if((cd=bU.getResponseHeader("Etag"))){b.etag[bN]=cd
}}if(ca===304){b8="notmodified";
b4=true
}else{try{cf=O(bO,b9);
b8="success";
b4=true
}catch(cc){b8="parsererror";
ce=cc
}}}else{ce=b8;
if(!b8||ca){b8="error";
if(ca<0){ca=0
}}}bU.status=ca;
bU.statusText=""+(b5||b8);
if(b4){b2.resolveWith(b3,[cf,b8,bU])
}else{b2.rejectWith(b3,[bU,b8,ce])
}bU.statusCode(bM);
bM=U;
if(bH){bR.trigger("ajax"+(b4?"Success":"Error"),[bU,bO,b4?cf:ce])
}bY.fireWith(b3,[bU,b8]);
if(bH){bR.trigger("ajaxComplete",[bU,bO]);
if(!(--b.active)){b.event.trigger("ajaxStop")
}}}b2.promise(bU);
bU.success=bU.done;
bU.error=bU.fail;
bU.complete=bY.add;
bU.statusCode=function(b5){if(b5){var b4;
if(bL<2){for(b4 in b5){bM[b4]=[bM[b4],b5[b4]]
}}else{b4=b5[bU.status];
bU.then(b4,b4)
}}return this
};
bO.url=((bK||bO.url)+"").replace(bB,"").replace(c,A[1]+"//");
bO.dataTypes=b.trim(bO.dataType||"*").toLowerCase().split(l);
if(bO.crossDomain==null){bT=T.exec(bO.url.toLowerCase());
bO.crossDomain=!!(bT&&(bT[1]!=A[1]||bT[2]!=A[2]||(bT[3]||(bT[1]==="http:"?80:443))!=(A[3]||(A[1]==="http:"?80:443))))
}if(bO.data&&bO.processData&&typeof bO.data!=="string"){bO.data=b.param(bO.data,bO.traditional)
}a7(ak,bO,bI,bU);
if(bL===2){return false
}bH=bO.global;
bO.type=bO.type.toUpperCase();
bO.hasContent=!a1.test(bO.type);
if(bH&&b.active++===0){b.event.trigger("ajaxStart")
}if(!bO.hasContent){if(bO.data){bO.url+=(V.test(bO.url)?"&":"?")+bO.data;
delete bO.data
}bN=bO.url;
if(bO.cache===false){var bG=b.now(),b0=bO.url.replace(bC,"$1_="+bG);
bO.url=b0+((b0===bO.url)?(V.test(bO.url)?"&":"?")+"_="+bG:"")
}}if(bO.data&&bO.hasContent&&bO.contentType!==false||bI.contentType){bU.setRequestHeader("Content-Type",bO.contentType)
}if(bO.ifModified){bN=bN||bO.url;
if(b.lastModified[bN]){bU.setRequestHeader("If-Modified-Since",b.lastModified[bN])
}if(b.etag[bN]){bU.setRequestHeader("If-None-Match",b.etag[bN])
}}bU.setRequestHeader("Accept",bO.dataTypes[0]&&bO.accepts[bO.dataTypes[0]]?bO.accepts[bO.dataTypes[0]]+(bO.dataTypes[0]!=="*"?", "+a6+"; q=0.01":""):bO.accepts["*"]);
for(bV in bO.headers){bU.setRequestHeader(bV,bO.headers[bV])
}if(bO.beforeSend&&(bO.beforeSend.call(b3,bU,bO)===false||bL===2)){bU.abort();
return false
}for(bV in {success:1,error:1,complete:1}){bU[bV](bO[bV])
}bW=a7(z,bO,bI,bU);
if(!bW){bQ(-1,"No Transport")
}else{bU.readyState=1;
if(bH){bR.trigger("ajaxSend",[bU,bO])
}if(bO.async&&bO.timeout>0){bP=setTimeout(function(){bU.abort("timeout")
},bO.timeout)
}try{bL=1;
bW.send(bS,bQ)
}catch(bX){if(bL<2){bQ(-1,bX)
}else{throw bX
}}}return bU
},param:function(bG,bI){var bH=[],bK=function(bL,bM){bM=b.isFunction(bM)?bM():bM;
bH[bH.length]=encodeURIComponent(bL)+"="+encodeURIComponent(bM)
};
if(bI===U){bI=b.ajaxSettings.traditional
}if(b.isArray(bG)||(bG.jquery&&!b.isPlainObject(bG))){b.each(bG,function(){bK(this.name,this.value)
})
}else{for(var bJ in bG){D(bJ,bG[bJ],bI,bK)
}}return bH.join("&").replace(p,"+")
}});
function D(bI,bK,bH,bJ){if(b.isArray(bK)){b.each(bK,function(bM,bL){if(bH||aA.test(bI)){bJ(bI,bL)
}else{D(bI+"["+(typeof bL==="object"?bM:"")+"]",bL,bH,bJ)
}})
}else{if(!bH&&b.type(bK)==="object"){for(var bG in bK){D(bI+"["+bG+"]",bK[bG],bH,bJ)
}}else{bJ(bI,bK)
}}}b.extend({active:0,lastModified:{},etag:{}});
function bv(bP,bO,bL){var bH=bP.contents,bN=bP.dataTypes,bI=bP.responseFields,bK,bM,bJ,bG;
for(bM in bI){if(bM in bL){bO[bI[bM]]=bL[bM]
}}while(bN[0]==="*"){bN.shift();
if(bK===U){bK=bP.mimeType||bO.getResponseHeader("content-type")
}}if(bK){for(bM in bH){if(bH[bM]&&bH[bM].test(bK)){bN.unshift(bM);
break
}}}if(bN[0] in bL){bJ=bN[0]
}else{for(bM in bL){if(!bN[0]||bP.converters[bM+" "+bN[0]]){bJ=bM;
break
}if(!bG){bG=bM
}}bJ=bJ||bG
}if(bJ){if(bJ!==bN[0]){bN.unshift(bJ)
}return bL[bJ]
}}function O(bT,bL){if(bT.dataFilter){bL=bT.dataFilter(bL,bT.dataType)
}var bP=bT.dataTypes,bS={},bM,bQ,bI=bP.length,bN,bO=bP[0],bJ,bK,bR,bH,bG;
for(bM=1;
bM<bI;
bM++){if(bM===1){for(bQ in bT.converters){if(typeof bQ==="string"){bS[bQ.toLowerCase()]=bT.converters[bQ]
}}}bJ=bO;
bO=bP[bM];
if(bO==="*"){bO=bJ
}else{if(bJ!=="*"&&bJ!==bO){bK=bJ+" "+bO;
bR=bS[bK]||bS["* "+bO];
if(!bR){bG=U;
for(bH in bS){bN=bH.split(" ");
if(bN[0]===bJ||bN[0]==="*"){bG=bS[bN[1]+" "+bO];
if(bG){bH=bS[bH];
if(bH===true){bR=bG
}else{if(bG===true){bR=bH
}}break
}}}}if(!(bR||bG)){b.error("No conversion from "+bK.replace(" "," to "))
}if(bR!==true){bL=bR?bR(bL):bG(bH(bL))
}}}}return bL
}var aM=b.now(),C=/(\=)\?(&|$)|\?\?/i;
b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return b.expando+"_"+(aM++)
}});
b.ajaxPrefilter("json jsonp",function(bP,bM,bO){var bJ=(typeof bP.data==="string")&&/^application\/x\-www\-form\-urlencoded/.test(bP.contentType);
if(bP.dataTypes[0]==="jsonp"||bP.jsonp!==false&&(C.test(bP.url)||bJ&&C.test(bP.data))){var bN,bI=bP.jsonpCallback=b.isFunction(bP.jsonpCallback)?bP.jsonpCallback():bP.jsonpCallback,bL=bo[bI],bG=bP.url,bK=bP.data,bH="$1"+bI+"$2";
if(bP.jsonp!==false){bG=bG.replace(C,bH);
if(bP.url===bG){if(bJ){bK=bK.replace(C,bH)
}if(bP.data===bK){bG+=(/\?/.test(bG)?"&":"?")+bP.jsonp+"="+bI
}}}bP.url=bG;
bP.data=bK;
bo[bI]=function(bQ){bN=[bQ]
};
bO.always(function(){bo[bI]=bL;
if(bN&&b.isFunction(bL)){bo[bI](bN[0])
}});
bP.converters["script json"]=function(){if(!bN){b.error(bI+" was not called")
}return bN[0]
};
bP.dataTypes[0]="json";
return"script"
}});
b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(bG){b.globalEval(bG);
return bG
}}});
b.ajaxPrefilter("script",function(bG){if(bG.cache===U){bG.cache=false
}if(bG.crossDomain){bG.type="GET";
bG.global=false
}});
b.ajaxTransport("script",function(bI){if(bI.crossDomain){var bG,bH=aF.head||aF.getElementsByTagName("head")[0]||aF.documentElement;
return{send:function(bJ,bK){bG=aF.createElement("script");
bG.async="async";
if(bI.scriptCharset){bG.charset=bI.scriptCharset
}bG.src=bI.url;
bG.onload=bG.onreadystatechange=function(bM,bL){if(bL||!bG.readyState||/loaded|complete/.test(bG.readyState)){bG.onload=bG.onreadystatechange=null;
if(bH&&bG.parentNode){bH.removeChild(bG)
}bG=U;
if(!bL){bK(200,"success")
}}};
bH.insertBefore(bG,bH.firstChild)
},abort:function(){if(bG){bG.onload(0,1)
}}}
}});
var J=bo.ActiveXObject?function(){for(var bG in W){W[bG](0,1)
}}:false,G=0,W;
function aW(){try{return new bo.XMLHttpRequest()
}catch(bG){}}function av(){try{return new bo.ActiveXObject("Microsoft.XMLHTTP")
}catch(bG){}}b.ajaxSettings.xhr=bo.ActiveXObject?function(){return !this.isLocal&&aW()||av()
}:aW;
(function(bG){b.extend(b.support,{ajax:!!bG,cors:!!bG&&("withCredentials" in bG)})
})(b.ajaxSettings.xhr());
if(b.support.ajax){b.ajaxTransport(function(bG){if(!bG.crossDomain||b.support.cors){var bH;
return{send:function(bN,bI){var bM=bG.xhr(),bL,bK;
if(bG.username){bM.open(bG.type,bG.url,bG.async,bG.username,bG.password)
}else{bM.open(bG.type,bG.url,bG.async)
}if(bG.xhrFields){for(bK in bG.xhrFields){bM[bK]=bG.xhrFields[bK]
}}if(bG.mimeType&&bM.overrideMimeType){bM.overrideMimeType(bG.mimeType)
}if(!bG.crossDomain&&!bN["X-Requested-With"]){bN["X-Requested-With"]="XMLHttpRequest"
}try{for(bK in bN){bM.setRequestHeader(bK,bN[bK])
}}catch(bJ){}bM.send((bG.hasContent&&bG.data)||null);
bH=function(bW,bQ){var bR,bP,bO,bU,bT;
try{if(bH&&(bQ||bM.readyState===4)){bH=U;
if(bL){bM.onreadystatechange=b.noop;
if(J){delete W[bL]
}}if(bQ){if(bM.readyState!==4){bM.abort()
}}else{bR=bM.status;
bO=bM.getAllResponseHeaders();
bU={};
bT=bM.responseXML;
if(bT&&bT.documentElement){bU.xml=bT
}try{bU.text=bM.responseText
}catch(bW){}try{bP=bM.statusText
}catch(bV){bP=""
}if(!bR&&bG.isLocal&&!bG.crossDomain){bR=bU.text?200:404
}else{if(bR===1223){bR=204
}}}}}catch(bS){if(!bQ){bI(-1,bS)
}}if(bU){bI(bR,bP,bU,bO)
}};
if(!bG.async||bM.readyState===4){bH()
}else{bL=++G;
if(J){if(!W){W={};
b(bo).unload(J)
}W[bL]=bH
}bM.onreadystatechange=bH
}},abort:function(){if(bH){bH(0,1)
}}}
}})
}var Z={},bl,r,aL=/^(?:toggle|show|hide)$/,a4=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,bf,aS=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],bg;
b.fn.extend({show:function(bJ,bM,bL){var bI,bK;
if(bJ||bJ===0){return this.animate(bd("show",3),bJ,bM,bL)
}else{for(var bH=0,bG=this.length;
bH<bG;
bH++){bI=this[bH];
if(bI.style){bK=bI.style.display;
if(!b._data(bI,"olddisplay")&&bK==="none"){bK=bI.style.display=""
}if((bK===""&&b.css(bI,"display")==="none")||!b.contains(bI.ownerDocument.documentElement,bI)){b._data(bI,"olddisplay",F(bI.nodeName))
}}}for(bH=0;
bH<bG;
bH++){bI=this[bH];
if(bI.style){bK=bI.style.display;
if(bK===""||bK==="none"){bI.style.display=b._data(bI,"olddisplay")||""
}}}return this
}},hide:function(bJ,bM,bL){if(bJ||bJ===0){return this.animate(bd("hide",3),bJ,bM,bL)
}else{var bI,bK,bH=0,bG=this.length;
for(;
bH<bG;
bH++){bI=this[bH];
if(bI.style){bK=b.css(bI,"display");
if(bK!=="none"&&!b._data(bI,"olddisplay")){b._data(bI,"olddisplay",bK)
}}}for(bH=0;
bH<bG;
bH++){if(this[bH].style){this[bH].style.display="none"
}}return this
}},_toggle:b.fn.toggle,toggle:function(bI,bH,bJ){var bG=typeof bI==="boolean";
if(b.isFunction(bI)&&b.isFunction(bH)){this._toggle.apply(this,arguments)
}else{if(bI==null||bG){this.each(function(){var bK=bG?bI:b(this).is(":hidden");
b(this)[bK?"show":"hide"]()
})
}else{this.animate(bd("toggle",3),bI,bH,bJ)
}}return this
},fadeTo:function(bG,bJ,bI,bH){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:bJ},bG,bI,bH)
},animate:function(bL,bI,bK,bJ){var bG=b.speed(bI,bK,bJ);
if(b.isEmptyObject(bL)){return this.each(bG.complete,[false])
}bL=b.extend({},bL);
function bH(){if(bG.queue===false){b._mark(this)
}var bQ=b.extend({},bG),bX=this.nodeType===1,bV=bX&&b(this).is(":hidden"),bN,bS,bP,bW,bZ,bR,bU,bO,bT,bY,bM;
bQ.animatedProperties={};
for(bP in bL){bN=b.camelCase(bP);
if(bP!==bN){bL[bN]=bL[bP];
delete bL[bP]
}if((bZ=b.cssHooks[bN])&&"expand" in bZ){bR=bZ.expand(bL[bN]);
delete bL[bN];
for(bP in bR){if(!(bP in bL)){bL[bP]=bR[bP]
}}}}for(bN in bL){bS=bL[bN];
if(b.isArray(bS)){bQ.animatedProperties[bN]=bS[1];
bS=bL[bN]=bS[0]
}else{bQ.animatedProperties[bN]=bQ.specialEasing&&bQ.specialEasing[bN]||bQ.easing||"swing"
}if(bS==="hide"&&bV||bS==="show"&&!bV){return bQ.complete.call(this)
}if(bX&&(bN==="height"||bN==="width")){bQ.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];
if(b.css(this,"display")==="inline"&&b.css(this,"float")==="none"){if(!b.support.inlineBlockNeedsLayout||F(this.nodeName)==="inline"){this.style.display="inline-block"
}else{this.style.zoom=1
}}}}if(bQ.overflow!=null){this.style.overflow="hidden"
}for(bP in bL){bW=new b.fx(this,bQ,bP);
bS=bL[bP];
if(aL.test(bS)){bM=b._data(this,"toggle"+bP)||(bS==="toggle"?bV?"show":"hide":0);
if(bM){b._data(this,"toggle"+bP,bM==="show"?"hide":"show");
bW[bM]()
}else{bW[bS]()
}}else{bU=a4.exec(bS);
bO=bW.cur();
if(bU){bT=parseFloat(bU[2]);
bY=bU[3]||(b.cssNumber[bP]?"":"px");
if(bY!=="px"){b.style(this,bP,(bT||1)+bY);
bO=((bT||1)/bW.cur())*bO;
b.style(this,bP,bO+bY)
}if(bU[1]){bT=((bU[1]==="-="?-1:1)*bT)+bO
}bW.custom(bO,bT,bY)
}else{bW.custom(bO,bS,"")
}}}return true
}return bG.queue===false?this.each(bH):this.queue(bG.queue,bH)
},stop:function(bI,bH,bG){if(typeof bI!=="string"){bG=bH;
bH=bI;
bI=U
}if(bH&&bI!==false){this.queue(bI||"fx",[])
}return this.each(function(){var bJ,bK=false,bM=b.timers,bL=b._data(this);
if(!bG){b._unmark(true,this)
}function bN(bQ,bR,bP){var bO=bR[bP];
b.removeData(bQ,bP,true);
bO.stop(bG)
}if(bI==null){for(bJ in bL){if(bL[bJ]&&bL[bJ].stop&&bJ.indexOf(".run")===bJ.length-4){bN(this,bL,bJ)
}}}else{if(bL[bJ=bI+".run"]&&bL[bJ].stop){bN(this,bL,bJ)
}}for(bJ=bM.length;
bJ--;
){if(bM[bJ].elem===this&&(bI==null||bM[bJ].queue===bI)){if(bG){bM[bJ](true)
}else{bM[bJ].saveState()
}bK=true;
bM.splice(bJ,1)
}}if(!(bG&&bK)){b.dequeue(this,bI)
}})
}});
function bt(){setTimeout(aD,0);
return(bg=b.now())
}function aD(){bg=U
}function bd(bH,bG){var bI={};
b.each(aS.concat.apply([],aS.slice(0,bG)),function(){bI[this]=bH
});
return bI
}b.each({slideDown:bd("show",1),slideUp:bd("hide",1),slideToggle:bd("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(bG,bH){b.fn[bG]=function(bI,bK,bJ){return this.animate(bH,bI,bK,bJ)
}
});
b.extend({speed:function(bI,bJ,bH){var bG=bI&&typeof bI==="object"?b.extend({},bI):{complete:bH||!bH&&bJ||b.isFunction(bI)&&bI,duration:bI,easing:bH&&bJ||bJ&&!b.isFunction(bJ)&&bJ};
bG.duration=b.fx.off?0:typeof bG.duration==="number"?bG.duration:bG.duration in b.fx.speeds?b.fx.speeds[bG.duration]:b.fx.speeds._default;
if(bG.queue==null||bG.queue===true){bG.queue="fx"
}bG.old=bG.complete;
bG.complete=function(bK){if(b.isFunction(bG.old)){bG.old.call(this)
}if(bG.queue){b.dequeue(this,bG.queue)
}else{if(bK!==false){b._unmark(this)
}}};
return bG
},easing:{linear:function(bG){return bG
},swing:function(bG){return(-Math.cos(bG*Math.PI)/2)+0.5
}},timers:[],fx:function(bH,bG,bI){this.options=bG;
this.elem=bH;
this.prop=bI;
bG.orig=bG.orig||{}
}});
b.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)
}(b.fx.step[this.prop]||b.fx.step._default)(this)
},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]
}var bG,bH=b.css(this.elem,this.prop);
return isNaN(bG=parseFloat(bH))?!bH||bH==="auto"?0:bH:bG
},custom:function(bL,bK,bJ){var bG=this,bI=b.fx;
this.startTime=bg||bt();
this.end=bK;
this.now=this.start=bL;
this.pos=this.state=0;
this.unit=bJ||this.unit||(b.cssNumber[this.prop]?"":"px");
function bH(bM){return bG.step(bM)
}bH.queue=this.options.queue;
bH.elem=this.elem;
bH.saveState=function(){if(b._data(bG.elem,"fxshow"+bG.prop)===U){if(bG.options.hide){b._data(bG.elem,"fxshow"+bG.prop,bG.start)
}else{if(bG.options.show){b._data(bG.elem,"fxshow"+bG.prop,bG.end)
}}}};
if(bH()&&b.timers.push(bH)&&!bf){bf=setInterval(bI.tick,bI.interval)
}},show:function(){var bG=b._data(this.elem,"fxshow"+this.prop);
this.options.orig[this.prop]=bG||b.style(this.elem,this.prop);
this.options.show=true;
if(bG!==U){this.custom(this.cur(),bG)
}else{this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur())
}b(this.elem).show()
},hide:function(){this.options.orig[this.prop]=b._data(this.elem,"fxshow"+this.prop)||b.style(this.elem,this.prop);
this.options.hide=true;
this.custom(this.cur(),0)
},step:function(bK){var bM,bN,bH,bJ=bg||bt(),bG=true,bL=this.elem,bI=this.options;
if(bK||bJ>=bI.duration+this.startTime){this.now=this.end;
this.pos=this.state=1;
this.update();
bI.animatedProperties[this.prop]=true;
for(bM in bI.animatedProperties){if(bI.animatedProperties[bM]!==true){bG=false
}}if(bG){if(bI.overflow!=null&&!b.support.shrinkWrapBlocks){b.each(["","X","Y"],function(bO,bP){bL.style["overflow"+bP]=bI.overflow[bO]
})
}if(bI.hide){b(bL).hide()
}if(bI.hide||bI.show){for(bM in bI.animatedProperties){b.style(bL,bM,bI.orig[bM]);
b.removeData(bL,"fxshow"+bM,true);
b.removeData(bL,"toggle"+bM,true)
}}bH=bI.complete;
if(bH){bI.complete=false;
bH.call(bL)
}}return false
}else{if(bI.duration==Infinity){this.now=bJ
}else{bN=bJ-this.startTime;
this.state=bN/bI.duration;
this.pos=b.easing[bI.animatedProperties[this.prop]](this.state,bN,0,1,bI.duration);
this.now=this.start+((this.end-this.start)*this.pos)
}this.update()
}return true
}};
b.extend(b.fx,{tick:function(){var bI,bH=b.timers,bG=0;
for(;
bG<bH.length;
bG++){bI=bH[bG];
if(!bI()&&bH[bG]===bI){bH.splice(bG--,1)
}}if(!bH.length){b.fx.stop()
}},interval:13,stop:function(){clearInterval(bf);
bf=null
},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(bG){b.style(bG.elem,"opacity",bG.now)
},_default:function(bG){if(bG.elem.style&&bG.elem.style[bG.prop]!=null){bG.elem.style[bG.prop]=bG.now+bG.unit
}else{bG.elem[bG.prop]=bG.now
}}}});
b.each(aS.concat.apply([],aS),function(bG,bH){if(bH.indexOf("margin")){b.fx.step[bH]=function(bI){b.style(bI.elem,bH,Math.max(0,bI.now)+bI.unit)
}
}});
if(b.expr&&b.expr.filters){b.expr.filters.animated=function(bG){return b.grep(b.timers,function(bH){return bG===bH.elem
}).length
}
}function F(bJ){if(!Z[bJ]){var bG=aF.body,bH=b("<"+bJ+">").appendTo(bG),bI=bH.css("display");
bH.remove();
if(bI==="none"||bI===""){if(!bl){bl=aF.createElement("iframe");
bl.frameBorder=bl.width=bl.height=0
}bG.appendChild(bl);
if(!r||!bl.createElement){r=(bl.contentWindow||bl.contentDocument).document;
r.write((b.support.boxModel?"<!doctype html>":"")+"<html><body>");
r.close()
}bH=r.createElement(bJ);
r.body.appendChild(bH);
bI=b.css(bH,"display");
bG.removeChild(bl)
}Z[bJ]=bI
}return Z[bJ]
}var bj,af=/^t(?:able|d|h)$/i,an=/^(?:body|html)$/i;
if("getBoundingClientRect" in aF.documentElement){bj=function(bJ,bS,bH,bM){try{bM=bJ.getBoundingClientRect()
}catch(bQ){}if(!bM||!b.contains(bH,bJ)){return bM?{top:bM.top,left:bM.left}:{top:0,left:0}
}var bN=bS.body,bO=aV(bS),bL=bH.clientTop||bN.clientTop||0,bP=bH.clientLeft||bN.clientLeft||0,bG=bO.pageYOffset||b.support.boxModel&&bH.scrollTop||bN.scrollTop,bK=bO.pageXOffset||b.support.boxModel&&bH.scrollLeft||bN.scrollLeft,bR=bM.top+bG-bL,bI=bM.left+bK-bP;
return{top:bR,left:bI}
}
}else{bj=function(bL,bQ,bJ){var bO,bI=bL.offsetParent,bH=bL,bM=bQ.body,bN=bQ.defaultView,bG=bN?bN.getComputedStyle(bL,null):bL.currentStyle,bP=bL.offsetTop,bK=bL.offsetLeft;
while((bL=bL.parentNode)&&bL!==bM&&bL!==bJ){if(b.support.fixedPosition&&bG.position==="fixed"){break
}bO=bN?bN.getComputedStyle(bL,null):bL.currentStyle;
bP-=bL.scrollTop;
bK-=bL.scrollLeft;
if(bL===bI){bP+=bL.offsetTop;
bK+=bL.offsetLeft;
if(b.support.doesNotAddBorder&&!(b.support.doesAddBorderForTableAndCells&&af.test(bL.nodeName))){bP+=parseFloat(bO.borderTopWidth)||0;
bK+=parseFloat(bO.borderLeftWidth)||0
}bH=bI;
bI=bL.offsetParent
}if(b.support.subtractsBorderForOverflowNotVisible&&bO.overflow!=="visible"){bP+=parseFloat(bO.borderTopWidth)||0;
bK+=parseFloat(bO.borderLeftWidth)||0
}bG=bO
}if(bG.position==="relative"||bG.position==="static"){bP+=bM.offsetTop;
bK+=bM.offsetLeft
}if(b.support.fixedPosition&&bG.position==="fixed"){bP+=Math.max(bJ.scrollTop,bM.scrollTop);
bK+=Math.max(bJ.scrollLeft,bM.scrollLeft)
}return{top:bP,left:bK}
}
}b.fn.offset=function(bG){if(arguments.length){return bG===U?this:this.each(function(bJ){b.offset.setOffset(this,bG,bJ)
})
}var bH=this[0],bI=bH&&bH.ownerDocument;
if(!bI){return null
}if(bH===bI.body){return b.offset.bodyOffset(bH)
}return bj(bH,bI,bI.documentElement)
};
b.offset={bodyOffset:function(bG){var bI=bG.offsetTop,bH=bG.offsetLeft;
if(b.support.doesNotIncludeMarginInBodyOffset){bI+=parseFloat(b.css(bG,"marginTop"))||0;
bH+=parseFloat(b.css(bG,"marginLeft"))||0
}return{top:bI,left:bH}
},setOffset:function(bJ,bS,bM){var bN=b.css(bJ,"position");
if(bN==="static"){bJ.style.position="relative"
}var bL=b(bJ),bH=bL.offset(),bG=b.css(bJ,"top"),bQ=b.css(bJ,"left"),bR=(bN==="absolute"||bN==="fixed")&&b.inArray("auto",[bG,bQ])>-1,bP={},bO={},bI,bK;
if(bR){bO=bL.position();
bI=bO.top;
bK=bO.left
}else{bI=parseFloat(bG)||0;
bK=parseFloat(bQ)||0
}if(b.isFunction(bS)){bS=bS.call(bJ,bM,bH)
}if(bS.top!=null){bP.top=(bS.top-bH.top)+bI
}if(bS.left!=null){bP.left=(bS.left-bH.left)+bK
}if("using" in bS){bS.using.call(bJ,bP)
}else{bL.css(bP)
}}};
b.fn.extend({position:function(){if(!this[0]){return null
}var bI=this[0],bH=this.offsetParent(),bJ=this.offset(),bG=an.test(bH[0].nodeName)?{top:0,left:0}:bH.offset();
bJ.top-=parseFloat(b.css(bI,"marginTop"))||0;
bJ.left-=parseFloat(b.css(bI,"marginLeft"))||0;
bG.top+=parseFloat(b.css(bH[0],"borderTopWidth"))||0;
bG.left+=parseFloat(b.css(bH[0],"borderLeftWidth"))||0;
return{top:bJ.top-bG.top,left:bJ.left-bG.left}
},offsetParent:function(){return this.map(function(){var bG=this.offsetParent||aF.body;
while(bG&&(!an.test(bG.nodeName)&&b.css(bG,"position")==="static")){bG=bG.offsetParent
}return bG
})
}});
b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(bI,bH){var bG=/Y/.test(bH);
b.fn[bI]=function(bJ){return b.access(this,function(bK,bN,bM){var bL=aV(bK);
if(bM===U){return bL?(bH in bL)?bL[bH]:b.support.boxModel&&bL.document.documentElement[bN]||bL.document.body[bN]:bK[bN]
}if(bL){bL.scrollTo(!bG?bM:b(bL).scrollLeft(),bG?bM:b(bL).scrollTop())
}else{bK[bN]=bM
}},bI,bJ,arguments.length,null)
}
});
function aV(bG){return b.isWindow(bG)?bG:bG.nodeType===9?bG.defaultView||bG.parentWindow:false
}b.each({Height:"height",Width:"width"},function(bI,bJ){var bH="client"+bI,bG="scroll"+bI,bK="offset"+bI;
b.fn["inner"+bI]=function(){var bL=this[0];
return bL?bL.style?parseFloat(b.css(bL,bJ,"padding")):this[bJ]():null
};
b.fn["outer"+bI]=function(bM){var bL=this[0];
return bL?bL.style?parseFloat(b.css(bL,bJ,bM?"margin":"border")):this[bJ]():null
};
b.fn[bJ]=function(bL){return b.access(this,function(bO,bN,bP){var bR,bQ,bS,bM;
if(b.isWindow(bO)){bR=bO.document;
bQ=bR.documentElement[bH];
return b.support.boxModel&&bQ||bR.body&&bR.body[bH]||bQ
}if(bO.nodeType===9){bR=bO.documentElement;
if(bR[bH]>=bR[bG]){return bR[bH]
}return Math.max(bO.body[bG],bR[bG],bO.body[bK],bR[bK])
}if(bP===U){bS=b.css(bO,bN);
bM=parseFloat(bS);
return b.isNumeric(bM)?bM:bS
}b(bO).css(bN,bP)
},bJ,bL,arguments.length,null)
}
});
bo.jQuery=bo.$=b;
if(typeof define==="function"&&define.amd&&define.amd.jQuery){define("jquery",[],function(){return b
})
}})(window);
/*
 * jQuery UI 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(a,f){a.ui=a.ui||{};
if(a.ui.version){return
}a.extend(a.ui,{version:"1.8.18",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});
a.fn.extend({propAttr:a.fn.prop||a.fn.attr,_focus:a.fn.focus,focus:function(g,k){return typeof g==="number"?this.each(function(){var l=this;
setTimeout(function(){a(l).focus();
if(k){k.call(l)
}},g)
}):this._focus.apply(this,arguments)
},scrollParent:function(){var g;
if((a.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){g=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(a.curCSS(this,"position",1))&&(/(auto|scroll)/).test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))
}).eq(0)
}else{g=this.parents().filter(function(){return(/(auto|scroll)/).test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))
}).eq(0)
}return(/fixed/).test(this.css("position"))||!g.length?a(document):g
},zIndex:function(n){if(n!==f){return this.css("zIndex",n)
}if(this.length){var k=a(this[0]),g,l;
while(k.length&&k[0]!==document){g=k.css("position");
if(g==="absolute"||g==="relative"||g==="fixed"){l=parseInt(k.css("zIndex"),10);
if(!isNaN(l)&&l!==0){return l
}}k=k.parent()
}}return 0
},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(g){g.preventDefault()
})
},enableSelection:function(){return this.unbind(".ui-disableSelection")
}});
a.each(["Width","Height"],function(l,g){var k=g==="Width"?["Left","Right"]:["Top","Bottom"],n=g.toLowerCase(),p={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};
function o(s,r,q,u){a.each(k,function(){r-=parseFloat(a.curCSS(s,"padding"+this,true))||0;
if(q){r-=parseFloat(a.curCSS(s,"border"+this+"Width",true))||0
}if(u){r-=parseFloat(a.curCSS(s,"margin"+this,true))||0
}});
return r
}a.fn["inner"+g]=function(q){if(q===f){return p["inner"+g].call(this)
}return this.each(function(){a(this).css(n,o(this,q)+"px")
})
};
a.fn["outer"+g]=function(q,r){if(typeof q!=="number"){return p["outer"+g].call(this,q)
}return this.each(function(){a(this).css(n,o(this,q,true,r)+"px")
})
}
});
function c(l,g){var p=l.nodeName.toLowerCase();
if("area"===p){var o=l.parentNode,n=o.name,k;
if(!l.href||!n||o.nodeName.toLowerCase()!=="map"){return false
}k=a("img[usemap=#"+n+"]")[0];
return !!k&&b(k)
}return(/input|select|textarea|button|object/.test(p)?!l.disabled:"a"==p?l.href||g:g)&&b(l)
}function b(g){return !a(g).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)
}).length
}a.extend(a.expr[":"],{data:function(l,k,g){return !!a.data(l,g[3])
},focusable:function(g){return c(g,!isNaN(a.attr(g,"tabindex")))
},tabbable:function(l){var g=a.attr(l,"tabindex"),k=isNaN(g);
return(k||g>=0)&&c(l,!k)
}});
a(function(){var g=document.body,k=g.appendChild(k=document.createElement("div"));
k.offsetHeight;
a.extend(k.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});
a.support.minHeight=k.offsetHeight===100;
a.support.selectstart="onselectstart" in k;
g.removeChild(k).style.display="none"
});
a.extend(a.ui,{plugin:{add:function(k,l,o){var n=a.ui[k].prototype;
for(var g in o){n.plugins[g]=n.plugins[g]||[];
n.plugins[g].push([l,o[g]])
}},call:function(g,l,k){var o=g.plugins[l];
if(!o||!g.element[0].parentNode){return
}for(var n=0;
n<o.length;
n++){if(g.options[o[n][0]]){o[n][1].apply(g.element,k)
}}}},contains:function(k,g){return document.compareDocumentPosition?k.compareDocumentPosition(g)&16:k!==g&&k.contains(g)
},hasScroll:function(n,k){if(a(n).css("overflow")==="hidden"){return false
}var g=(k&&k==="left")?"scrollLeft":"scrollTop",l=false;
if(n[g]>0){return true
}n[g]=1;
l=(n[g]>0);
n[g]=0;
return l
},isOverAxis:function(k,g,l){return(k>g)&&(k<(g+l))
},isOver:function(p,k,o,n,g,l){return a.ui.isOverAxis(p,o,g)&&a.ui.isOverAxis(k,n,l)
}})
})(jQuery);
/*
 * jQuery UI Widget 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b,f){if(b.cleanData){var c=b.cleanData;
b.cleanData=function(g){for(var k=0,l;
(l=g[k])!=null;
k++){try{b(l).triggerHandler("remove")
}catch(n){}}c(g)
}
}else{var a=b.fn.remove;
b.fn.remove=function(g,k){return this.each(function(){if(!k){if(!g||b.filter(g,[this]).length){b("*",this).add([this]).each(function(){try{b(this).triggerHandler("remove")
}catch(l){}})
}}return a.call(b(this),g,k)
})
}
}b.widget=function(k,n,g){var l=k.split(".")[0],p;
k=k.split(".")[1];
p=l+"-"+k;
if(!g){g=n;
n=b.Widget
}b.expr[":"][p]=function(q){return !!b.data(q,k)
};
b[l]=b[l]||{};
b[l][k]=function(q,r){if(arguments.length){this._createWidget(q,r)
}};
var o=new n();
o.options=b.extend(true,{},o.options);
b[l][k].prototype=b.extend(true,o,{namespace:l,widgetName:k,widgetEventPrefix:b[l][k].prototype.widgetEventPrefix||k,widgetBaseClass:p},g);
b.widget.bridge(k,b[l][k])
};
b.widget.bridge=function(k,g){b.fn[k]=function(o){var l=typeof o==="string",n=Array.prototype.slice.call(arguments,1),p=this;
o=!l&&n.length?b.extend.apply(null,[true,o].concat(n)):o;
if(l&&o.charAt(0)==="_"){return p
}if(l){this.each(function(){var q=b.data(this,k),r=q&&b.isFunction(q[o])?q[o].apply(q,n):q;
if(r!==q&&r!==f){p=r;
return false
}})
}else{this.each(function(){var q=b.data(this,k);
if(q){q.option(o||{})._init()
}else{b.data(this,k,new g(o,this))
}})
}return p
}
};
b.Widget=function(g,k){if(arguments.length){this._createWidget(g,k)
}};
b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(k,l){b.data(l,this.widgetName,this);
this.element=b(l);
this.options=b.extend(true,{},this.options,this._getCreateOptions(),k);
var g=this;
this.element.bind("remove."+this.widgetName,function(){g.destroy()
});
this._create();
this._trigger("create");
this._init()
},_getCreateOptions:function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]
},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);
this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")
},widget:function(){return this.element
},option:function(k,l){var g=k;
if(arguments.length===0){return b.extend({},this.options)
}if(typeof k==="string"){if(l===f){return this.options[k]
}g={};
g[k]=l
}this._setOptions(g);
return this
},_setOptions:function(k){var g=this;
b.each(k,function(l,n){g._setOption(l,n)
});
return this
},_setOption:function(g,k){this.options[g]=k;
if(g==="disabled"){this.widget()[k?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",k)
}return this
},enable:function(){return this._setOption("disabled",false)
},disable:function(){return this._setOption("disabled",true)
},_trigger:function(g,k,l){var p,o,n=this.options[g];
l=l||{};
k=b.Event(k);
k.type=(g===this.widgetEventPrefix?g:this.widgetEventPrefix+g).toLowerCase();
k.target=this.element[0];
o=k.originalEvent;
if(o){for(p in o){if(!(p in k)){k[p]=o[p]
}}}this.element.trigger(k,l);
return !(b.isFunction(n)&&n.call(this.element[0],k,l)===false||k.isDefaultPrevented())
}}
})(jQuery);
/*
 * jQuery UI Mouse 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function(b,c){var a=false;
b(document).mouseup(function(f){a=false
});
b.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var f=this;
this.element.bind("mousedown."+this.widgetName,function(g){return f._mouseDown(g)
}).bind("click."+this.widgetName,function(g){if(true===b.data(g.target,f.widgetName+".preventClickEvent")){b.removeData(g.target,f.widgetName+".preventClickEvent");
g.stopImmediatePropagation();
return false
}});
this.started=false
},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)
},_mouseDown:function(k){if(a){return
}(this._mouseStarted&&this._mouseUp(k));
this._mouseDownEvent=k;
var g=this,l=(k.which==1),f=(typeof this.options.cancel=="string"&&k.target.nodeName?b(k.target).closest(this.options.cancel).length:false);
if(!l||f||!this._mouseCapture(k)){return true
}this.mouseDelayMet=!this.options.delay;
if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){g.mouseDelayMet=true
},this.options.delay)
}if(this._mouseDistanceMet(k)&&this._mouseDelayMet(k)){this._mouseStarted=(this._mouseStart(k)!==false);
if(!this._mouseStarted){k.preventDefault();
return true
}}if(true===b.data(k.target,this.widgetName+".preventClickEvent")){b.removeData(k.target,this.widgetName+".preventClickEvent")
}this._mouseMoveDelegate=function(n){return g._mouseMove(n)
};
this._mouseUpDelegate=function(n){return g._mouseUp(n)
};
b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);
k.preventDefault();
a=true;
return true
},_mouseMove:function(f){if(b.browser.msie&&!(document.documentMode>=9)&&!f.button){return this._mouseUp(f)
}if(this._mouseStarted){this._mouseDrag(f);
return f.preventDefault()
}if(this._mouseDistanceMet(f)&&this._mouseDelayMet(f)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,f)!==false);
(this._mouseStarted?this._mouseDrag(f):this._mouseUp(f))
}return !this._mouseStarted
},_mouseUp:function(f){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){this._mouseStarted=false;
if(f.target==this._mouseDownEvent.target){b.data(f.target,this.widgetName+".preventClickEvent",true)
}this._mouseStop(f)
}return false
},_mouseDistanceMet:function(f){return(Math.max(Math.abs(this._mouseDownEvent.pageX-f.pageX),Math.abs(this._mouseDownEvent.pageY-f.pageY))>=this.options.distance)
},_mouseDelayMet:function(f){return this.mouseDelayMet
},_mouseStart:function(f){},_mouseDrag:function(f){},_mouseStop:function(f){},_mouseCapture:function(f){return true
}})
})(jQuery);
(function(a,b){a.widget("ui.draggable",a.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper=="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"
}(this.options.addClasses&&this.element.addClass("ui-draggable"));
(this.options.disabled&&this.element.addClass("ui-draggable-disabled"));
this._mouseInit()
},destroy:function(){if(!this.element.data("draggable")){return
}this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
this._mouseDestroy();
return this
},_mouseCapture:function(c){var f=this.options;
if(this.helper||f.disabled||a(c.target).is(".ui-resizable-handle")){return false
}this.handle=this._getHandle(c);
if(!this.handle){return false
}if(f.iframeFix){a(f.iframeFix===true?"iframe":f.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(a(this).offset()).appendTo("body")
})
}return true
},_mouseStart:function(c){var f=this.options;
this.helper=this._createHelper(c);
this._cacheHelperProportions();
if(a.ui.ddmanager){a.ui.ddmanager.current=this
}this._cacheMargins();
this.cssPosition=this.helper.css("position");
this.scrollParent=this.helper.scrollParent();
this.offset=this.positionAbs=this.element.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
a.extend(this.offset,{click:{left:c.pageX-this.offset.left,top:c.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this.position=this._generatePosition(c);
this.originalPageX=c.pageX;
this.originalPageY=c.pageY;
(f.cursorAt&&this._adjustOffsetFromHelper(f.cursorAt));
if(f.containment){this._setContainment()
}if(this._trigger("start",c)===false){this._clear();
return false
}this._cacheHelperProportions();
if(a.ui.ddmanager&&!f.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,c)
}this.helper.addClass("ui-draggable-dragging");
this._mouseDrag(c,true);
if(a.ui.ddmanager){a.ui.ddmanager.dragStart(this,c)
}return true
},_mouseDrag:function(c,g){this.position=this._generatePosition(c);
this.positionAbs=this._convertPositionTo("absolute");
if(!g){var f=this._uiHash();
if(this._trigger("drag",c,f)===false){this._mouseUp({});
return false
}this.position=f.position
}if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"
}if(a.ui.ddmanager){a.ui.ddmanager.drag(this,c)
}return false
},_mouseStop:function(f){var g=false;
if(a.ui.ddmanager&&!this.options.dropBehaviour){g=a.ui.ddmanager.drop(this,f)
}if(this.dropped){g=this.dropped;
this.dropped=false
}if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original"){return false
}if((this.options.revert=="invalid"&&!g)||(this.options.revert=="valid"&&g)||this.options.revert===true||(a.isFunction(this.options.revert)&&this.options.revert.call(this.element,g))){var c=this;
a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(c._trigger("stop",f)!==false){c._clear()
}})
}else{if(this._trigger("stop",f)!==false){this._clear()
}}return false
},_mouseUp:function(c){if(this.options.iframeFix===true){a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)
})
}if(a.ui.ddmanager){a.ui.ddmanager.dragStop(this,c)
}return a.ui.mouse.prototype._mouseUp.call(this,c)
},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({})
}else{this._clear()
}return this
},_getHandle:function(c){var f=!this.options.handle||!a(this.options.handle,this.element).length?true:false;
a(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==c.target){f=true
}});
return f
},_createHelper:function(f){var g=this.options;
var c=a.isFunction(g.helper)?a(g.helper.apply(this.element[0],[f])):(g.helper=="clone"?this.element.clone().removeAttr("id"):this.element);
if(!c.parents("body").length){c.appendTo((g.appendTo=="parent"?this.element[0].parentNode:g.appendTo))
}if(c[0]!=this.element[0]&&!(/(fixed|absolute)/).test(c.css("position"))){c.css("position","absolute")
}return c
},_adjustOffsetFromHelper:function(c){if(typeof c=="string"){c=c.split(" ")
}if(a.isArray(c)){c={left:+c[0],top:+c[1]||0}
}if("left" in c){this.offset.click.left=c.left+this.margins.left
}if("right" in c){this.offset.click.left=this.helperProportions.width-c.right+this.margins.left
}if("top" in c){this.offset.click.top=c.top+this.margins.top
}if("bottom" in c){this.offset.click.top=this.helperProportions.height-c.bottom+this.margins.top
}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();
var c=this.offsetParent.offset();
if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])){c.left+=this.scrollParent.scrollLeft();
c.top+=this.scrollParent.scrollTop()
}if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)){c={top:0,left:0}
}return{top:c.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:c.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var c=this.element.position();
return{top:c.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:c.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}else{return{top:0,left:0}
}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0),right:(parseInt(this.element.css("marginRight"),10)||0),bottom:(parseInt(this.element.css("marginBottom"),10)||0)}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var l=this.options;
if(l.containment=="parent"){l.containment=this.helper[0].parentNode
}if(l.containment=="document"||l.containment=="window"){this.containment=[l.containment=="document"?0:a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,l.containment=="document"?0:a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(l.containment=="document"?0:a(window).scrollLeft())+a(l.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(l.containment=="document"?0:a(window).scrollTop())+(a(l.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]
}if(!(/^(document|window|parent)$/).test(l.containment)&&l.containment.constructor!=Array){var n=a(l.containment);
var g=n[0];
if(!g){return
}var k=n.offset();
var f=(a(g).css("overflow")!="hidden");
this.containment=[(parseInt(a(g).css("borderLeftWidth"),10)||0)+(parseInt(a(g).css("paddingLeft"),10)||0),(parseInt(a(g).css("borderTopWidth"),10)||0)+(parseInt(a(g).css("paddingTop"),10)||0),(f?Math.max(g.scrollWidth,g.offsetWidth):g.offsetWidth)-(parseInt(a(g).css("borderLeftWidth"),10)||0)-(parseInt(a(g).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(f?Math.max(g.scrollHeight,g.offsetHeight):g.offsetHeight)-(parseInt(a(g).css("borderTopWidth"),10)||0)-(parseInt(a(g).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];
this.relative_container=n
}else{if(l.containment.constructor==Array){this.containment=l.containment
}}},_convertPositionTo:function(k,n){if(!n){n=this.position
}var f=k=="absolute"?1:-1;
var g=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,l=(/(html|body)/i).test(c[0].tagName);
return{top:(n.top+this.offset.relative.top*f+this.offset.parent.top*f-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(l?0:c.scrollTop()))*f)),left:(n.left+this.offset.relative.left*f+this.offset.parent.left*f-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():l?0:c.scrollLeft())*f))}
},_generatePosition:function(f){var g=this.options,s=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,p=(/(html|body)/i).test(s[0].tagName);
var n=f.pageX;
var l=f.pageY;
if(this.originalPosition){var c;
if(this.containment){if(this.relative_container){var r=this.relative_container.offset();
c=[this.containment[0]+r.left,this.containment[1]+r.top,this.containment[2]+r.left,this.containment[3]+r.top]
}else{c=this.containment
}if(f.pageX-this.offset.click.left<c[0]){n=c[0]+this.offset.click.left
}if(f.pageY-this.offset.click.top<c[1]){l=c[1]+this.offset.click.top
}if(f.pageX-this.offset.click.left>c[2]){n=c[2]+this.offset.click.left
}if(f.pageY-this.offset.click.top>c[3]){l=c[3]+this.offset.click.top
}}if(g.grid){var q=g.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/g.grid[1])*g.grid[1]:this.originalPageY;
l=c?(!(q-this.offset.click.top<c[1]||q-this.offset.click.top>c[3])?q:(!(q-this.offset.click.top<c[1])?q-g.grid[1]:q+g.grid[1])):q;
var k=g.grid[0]?this.originalPageX+Math.round((n-this.originalPageX)/g.grid[0])*g.grid[0]:this.originalPageX;
n=c?(!(k-this.offset.click.left<c[0]||k-this.offset.click.left>c[2])?k:(!(k-this.offset.click.left<c[0])?k-g.grid[0]:k+g.grid[0])):k
}}return{top:(l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(p?0:s.scrollTop())))),left:(n-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():p?0:s.scrollLeft())))}
},_clear:function(){this.helper.removeClass("ui-draggable-dragging");
if(this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()
}this.helper=null;
this.cancelHelperRemoval=false
},_trigger:function(c,f,g){g=g||this._uiHash();
a.ui.plugin.call(this,c,[f,g]);
if(c=="drag"){this.positionAbs=this._convertPositionTo("absolute")
}return a.Widget.prototype._trigger.call(this,c,f,g)
},plugins:{},_uiHash:function(c){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}
}});
a.extend(a.ui.draggable,{version:"1.8.18"});
a.ui.plugin.add("draggable","connectToSortable",{start:function(f,k){var g=a(this).data("draggable"),l=g.options,c=a.extend({},k,{item:g.element});
g.sortables=[];
a(l.connectToSortable).each(function(){var n=a.data(this,"sortable");
if(n&&!n.options.disabled){g.sortables.push({instance:n,shouldRevert:n.options.revert});
n.refreshPositions();
n._trigger("activate",f,c)
}})
},stop:function(f,k){var g=a(this).data("draggable"),c=a.extend({},k,{item:g.element});
a.each(g.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;
g.cancelHelperRemoval=true;
this.instance.cancelHelperRemoval=false;
if(this.shouldRevert){this.instance.options.revert=true
}this.instance._mouseStop(f);
this.instance.options.helper=this.instance.options._helper;
if(g.options.helper=="original"){this.instance.currentItem.css({top:"auto",left:"auto"})
}}else{this.instance.cancelHelperRemoval=false;
this.instance._trigger("deactivate",f,c)
}})
},drag:function(f,l){var k=a(this).data("draggable"),c=this;
var g=function(q){var z=this.offset.click.top,w=this.offset.click.left;
var n=this.positionAbs.top,s=this.positionAbs.left;
var r=q.height,u=q.width;
var A=q.top,p=q.left;
return a.ui.isOver(n+z,s+w,A,p,r,u)
};
a.each(k.sortables,function(n){this.instance.positionAbs=k.positionAbs;
this.instance.helperProportions=k.helperProportions;
this.instance.offset.click=k.offset.click;
if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;
this.instance.currentItem=a(c).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",true);
this.instance.options._helper=this.instance.options.helper;
this.instance.options.helper=function(){return l.helper[0]
};
f.target=this.instance.currentItem[0];
this.instance._mouseCapture(f,true);
this.instance._mouseStart(f,true,true);
this.instance.offset.click.top=k.offset.click.top;
this.instance.offset.click.left=k.offset.click.left;
this.instance.offset.parent.left-=k.offset.parent.left-this.instance.offset.parent.left;
this.instance.offset.parent.top-=k.offset.parent.top-this.instance.offset.parent.top;
k._trigger("toSortable",f);
k.dropped=this.instance.element;
k.currentItem=k.element;
this.instance.fromOutside=k
}if(this.instance.currentItem){this.instance._mouseDrag(f)
}}else{if(this.instance.isOver){this.instance.isOver=0;
this.instance.cancelHelperRemoval=true;
this.instance.options.revert=false;
this.instance._trigger("out",f,this.instance._uiHash(this.instance));
this.instance._mouseStop(f,true);
this.instance.options.helper=this.instance.options._helper;
this.instance.currentItem.remove();
if(this.instance.placeholder){this.instance.placeholder.remove()
}k._trigger("fromSortable",f);
k.dropped=false
}}})
}});
a.ui.plugin.add("draggable","cursor",{start:function(f,g){var c=a("body"),k=a(this).data("draggable").options;
if(c.css("cursor")){k._cursor=c.css("cursor")
}c.css("cursor",k.cursor)
},stop:function(c,f){var g=a(this).data("draggable").options;
if(g._cursor){a("body").css("cursor",g._cursor)
}}});
a.ui.plugin.add("draggable","opacity",{start:function(f,g){var c=a(g.helper),k=a(this).data("draggable").options;
if(c.css("opacity")){k._opacity=c.css("opacity")
}c.css("opacity",k.opacity)
},stop:function(c,f){var g=a(this).data("draggable").options;
if(g._opacity){a(f.helper).css("opacity",g._opacity)
}}});
a.ui.plugin.add("draggable","scroll",{start:function(f,g){var c=a(this).data("draggable");
if(c.scrollParent[0]!=document&&c.scrollParent[0].tagName!="HTML"){c.overflowOffset=c.scrollParent.offset()
}},drag:function(g,k){var f=a(this).data("draggable"),l=f.options,c=false;
if(f.scrollParent[0]!=document&&f.scrollParent[0].tagName!="HTML"){if(!l.axis||l.axis!="x"){if((f.overflowOffset.top+f.scrollParent[0].offsetHeight)-g.pageY<l.scrollSensitivity){f.scrollParent[0].scrollTop=c=f.scrollParent[0].scrollTop+l.scrollSpeed
}else{if(g.pageY-f.overflowOffset.top<l.scrollSensitivity){f.scrollParent[0].scrollTop=c=f.scrollParent[0].scrollTop-l.scrollSpeed
}}}if(!l.axis||l.axis!="y"){if((f.overflowOffset.left+f.scrollParent[0].offsetWidth)-g.pageX<l.scrollSensitivity){f.scrollParent[0].scrollLeft=c=f.scrollParent[0].scrollLeft+l.scrollSpeed
}else{if(g.pageX-f.overflowOffset.left<l.scrollSensitivity){f.scrollParent[0].scrollLeft=c=f.scrollParent[0].scrollLeft-l.scrollSpeed
}}}}else{if(!l.axis||l.axis!="x"){if(g.pageY-a(document).scrollTop()<l.scrollSensitivity){c=a(document).scrollTop(a(document).scrollTop()-l.scrollSpeed)
}else{if(a(window).height()-(g.pageY-a(document).scrollTop())<l.scrollSensitivity){c=a(document).scrollTop(a(document).scrollTop()+l.scrollSpeed)
}}}if(!l.axis||l.axis!="y"){if(g.pageX-a(document).scrollLeft()<l.scrollSensitivity){c=a(document).scrollLeft(a(document).scrollLeft()-l.scrollSpeed)
}else{if(a(window).width()-(g.pageX-a(document).scrollLeft())<l.scrollSensitivity){c=a(document).scrollLeft(a(document).scrollLeft()+l.scrollSpeed)
}}}}if(c!==false&&a.ui.ddmanager&&!l.dropBehaviour){a.ui.ddmanager.prepareOffsets(f,g)
}}});
a.ui.plugin.add("draggable","snap",{start:function(f,g){var c=a(this).data("draggable"),k=c.options;
c.snapElements=[];
a(k.snap.constructor!=String?(k.snap.items||":data(draggable)"):k.snap).each(function(){var n=a(this);
var l=n.offset();
if(this!=c.element[0]){c.snapElements.push({item:this,width:n.outerWidth(),height:n.outerHeight(),top:l.top,left:l.left})
}})
},drag:function(B,w){var k=a(this).data("draggable"),z=k.options;
var F=z.snapTolerance;
var E=w.offset.left,D=E+k.helperProportions.width,g=w.offset.top,f=g+k.helperProportions.height;
for(var C=k.snapElements.length-1;
C>=0;
C--){var A=k.snapElements[C].left,u=A+k.snapElements[C].width,s=k.snapElements[C].top,H=s+k.snapElements[C].height;
if(!((A-F<E&&E<u+F&&s-F<g&&g<H+F)||(A-F<E&&E<u+F&&s-F<f&&f<H+F)||(A-F<D&&D<u+F&&s-F<g&&g<H+F)||(A-F<D&&D<u+F&&s-F<f&&f<H+F))){if(k.snapElements[C].snapping){(k.options.snap.release&&k.options.snap.release.call(k.element,B,a.extend(k._uiHash(),{snapItem:k.snapElements[C].item})))
}k.snapElements[C].snapping=false;
continue
}if(z.snapMode!="inner"){var c=Math.abs(s-f)<=F;
var G=Math.abs(H-g)<=F;
var p=Math.abs(A-D)<=F;
var q=Math.abs(u-E)<=F;
if(c){w.position.top=k._convertPositionTo("relative",{top:s-k.helperProportions.height,left:0}).top-k.margins.top
}if(G){w.position.top=k._convertPositionTo("relative",{top:H,left:0}).top-k.margins.top
}if(p){w.position.left=k._convertPositionTo("relative",{top:0,left:A-k.helperProportions.width}).left-k.margins.left
}if(q){w.position.left=k._convertPositionTo("relative",{top:0,left:u}).left-k.margins.left
}}var n=(c||G||p||q);
if(z.snapMode!="outer"){var c=Math.abs(s-g)<=F;
var G=Math.abs(H-f)<=F;
var p=Math.abs(A-E)<=F;
var q=Math.abs(u-D)<=F;
if(c){w.position.top=k._convertPositionTo("relative",{top:s,left:0}).top-k.margins.top
}if(G){w.position.top=k._convertPositionTo("relative",{top:H-k.helperProportions.height,left:0}).top-k.margins.top
}if(p){w.position.left=k._convertPositionTo("relative",{top:0,left:A}).left-k.margins.left
}if(q){w.position.left=k._convertPositionTo("relative",{top:0,left:u-k.helperProportions.width}).left-k.margins.left
}}if(!k.snapElements[C].snapping&&(c||G||p||q||n)){(k.options.snap.snap&&k.options.snap.snap.call(k.element,B,a.extend(k._uiHash(),{snapItem:k.snapElements[C].item})))
}k.snapElements[C].snapping=(c||G||p||q||n)
}}});
a.ui.plugin.add("draggable","stack",{start:function(f,g){var l=a(this).data("draggable").options;
var k=a.makeArray(a(l.stack)).sort(function(o,n){return(parseInt(a(o).css("zIndex"),10)||0)-(parseInt(a(n).css("zIndex"),10)||0)
});
if(!k.length){return
}var c=parseInt(k[0].style.zIndex)||0;
a(k).each(function(n){this.style.zIndex=c+n
});
this[0].style.zIndex=c+k.length
}});
a.ui.plugin.add("draggable","zIndex",{start:function(f,g){var c=a(g.helper),k=a(this).data("draggable").options;
if(c.css("zIndex")){k._zIndex=c.css("zIndex")
}c.css("zIndex",k.zIndex)
},stop:function(c,f){var g=a(this).data("draggable").options;
if(g._zIndex){a(f.helper).css("zIndex",g._zIndex)
}}})
})(jQuery);
(function(a,b){a.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var f=this.options,c=f.accept;
this.isover=0;
this.isout=1;
this.accept=a.isFunction(c)?c:function(g){return g.is(c)
};
this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};
a.ui.ddmanager.droppables[f.scope]=a.ui.ddmanager.droppables[f.scope]||[];
a.ui.ddmanager.droppables[f.scope].push(this);
(f.addClasses&&this.element.addClass("ui-droppable"))
},destroy:function(){var c=a.ui.ddmanager.droppables[this.options.scope];
for(var f=0;
f<c.length;
f++){if(c[f]==this){c.splice(f,1)
}}this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");
return this
},_setOption:function(c,f){if(c=="accept"){this.accept=a.isFunction(f)?f:function(g){return g.is(f)
}
}a.Widget.prototype._setOption.apply(this,arguments)
},_activate:function(f){var c=a.ui.ddmanager.current;
if(this.options.activeClass){this.element.addClass(this.options.activeClass)
}(c&&this._trigger("activate",f,this.ui(c)))
},_deactivate:function(f){var c=a.ui.ddmanager.current;
if(this.options.activeClass){this.element.removeClass(this.options.activeClass)
}(c&&this._trigger("deactivate",f,this.ui(c)))
},_over:function(f){var c=a.ui.ddmanager.current;
if(!c||(c.currentItem||c.element)[0]==this.element[0]){return
}if(this.accept.call(this.element[0],(c.currentItem||c.element))){if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)
}this._trigger("over",f,this.ui(c))
}},_out:function(f){var c=a.ui.ddmanager.current;
if(!c||(c.currentItem||c.element)[0]==this.element[0]){return
}if(this.accept.call(this.element[0],(c.currentItem||c.element))){if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)
}this._trigger("out",f,this.ui(c))
}},_drop:function(f,g){var c=g||a.ui.ddmanager.current;
if(!c||(c.currentItem||c.element)[0]==this.element[0]){return false
}var k=false;
this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var l=a.data(this,"droppable");
if(l.options.greedy&&!l.options.disabled&&l.options.scope==c.options.scope&&l.accept.call(l.element[0],(c.currentItem||c.element))&&a.ui.intersect(c,a.extend(l,{offset:l.element.offset()}),l.options.tolerance)){k=true;
return false
}});
if(k){return false
}if(this.accept.call(this.element[0],(c.currentItem||c.element))){if(this.options.activeClass){this.element.removeClass(this.options.activeClass)
}if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)
}this._trigger("drop",f,this.ui(c));
return this.element
}return false
},ui:function(f){return{draggable:(f.currentItem||f.element),helper:f.helper,position:f.position,offset:f.positionAbs}
}});
a.extend(a.ui.droppable,{version:"1.8.18"});
a.ui.intersect=function(B,q,z){if(!q.offset){return false
}var g=(B.positionAbs||B.position.absolute).left,f=g+B.helperProportions.width,w=(B.positionAbs||B.position.absolute).top,u=w+B.helperProportions.height;
var n=q.offset.left,c=n+q.proportions.width,A=q.offset.top,s=A+q.proportions.height;
switch(z){case"fit":return(n<=g&&f<=c&&A<=w&&u<=s);
break;
case"intersect":return(n<g+(B.helperProportions.width/2)&&f-(B.helperProportions.width/2)<c&&A<w+(B.helperProportions.height/2)&&u-(B.helperProportions.height/2)<s);
break;
case"pointer":var o=((B.positionAbs||B.position.absolute).left+(B.clickOffset||B.offset.click).left),p=((B.positionAbs||B.position.absolute).top+(B.clickOffset||B.offset.click).top),k=a.ui.isOver(p,o,A,n,q.proportions.height,q.proportions.width);
return k;
break;
case"touch":return((w>=A&&w<=s)||(u>=A&&u<=s)||(w<A&&u>s))&&((g>=n&&g<=c)||(f>=n&&f<=c)||(g<n&&f>c));
break;
default:return false;
break
}};
a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(k,n){var c=a.ui.ddmanager.droppables[k.options.scope]||[];
var l=n?n.type:null;
var o=(k.currentItem||k.element).find(":data(droppable)").andSelf();
droppablesLoop:for(var g=0;
g<c.length;
g++){if(c[g].options.disabled||(k&&!c[g].accept.call(c[g].element[0],(k.currentItem||k.element)))){continue
}for(var f=0;
f<o.length;
f++){if(o[f]==c[g].element[0]){c[g].proportions.height=0;
continue droppablesLoop
}}c[g].visible=c[g].element.css("display")!="none";
if(!c[g].visible){continue
}if(l=="mousedown"){c[g]._activate.call(c[g],n)
}c[g].offset=c[g].element.offset();
c[g].proportions={width:c[g].element[0].offsetWidth,height:c[g].element[0].offsetHeight}
}},drop:function(c,f){var g=false;
a.each(a.ui.ddmanager.droppables[c.options.scope]||[],function(){if(!this.options){return
}if(!this.options.disabled&&this.visible&&a.ui.intersect(c,this,this.options.tolerance)){g=this._drop.call(this,f)||g
}if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(c.currentItem||c.element))){this.isout=1;
this.isover=0;
this._deactivate.call(this,f)
}});
return g
},dragStart:function(c,f){c.element.parents(":not(body,html)").bind("scroll.droppable",function(){if(!c.options.refreshPositions){a.ui.ddmanager.prepareOffsets(c,f)
}})
},drag:function(c,f){if(c.options.refreshPositions){a.ui.ddmanager.prepareOffsets(c,f)
}a.each(a.ui.ddmanager.droppables[c.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return
}var k=a.ui.intersect(c,this,this.options.tolerance);
var n=!k&&this.isover==1?"isout":(k&&this.isover==0?"isover":null);
if(!n){return
}var l;
if(this.options.greedy){var g=this.element.parents(":data(droppable):eq(0)");
if(g.length){l=a.data(g[0],"droppable");
l.greedyChild=(n=="isover"?1:0)
}}if(l&&n=="isover"){l.isover=0;
l.isout=1;
l._out.call(l,f)
}this[n]=1;
this[n=="isout"?"isover":"isout"]=0;
this[n=="isover"?"_over":"_out"].call(this,f);
if(l&&n=="isout"){l.isout=0;
l.isover=1;
l._over.call(l,f)
}})
},dragStop:function(c,f){c.element.parents(":not(body,html)").unbind("scroll.droppable");
if(!c.options.refreshPositions){a.ui.ddmanager.prepareOffsets(c,f)
}}}
})(jQuery);
(function(c,f){c.widget("ui.resizable",c.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1000},_create:function(){var k=this,r=this.options;
this.element.addClass("ui-resizable");
c.extend(this,{_aspectRatio:!!(r.aspectRatio),aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null});
if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){this.element.wrap(c('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));
this.element=this.element.parent().data("resizable",this.element.data("resizable"));
this.elementIsWrapper=true;
this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});
this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});
this.originalResizeStyle=this.originalElement.css("resize");
this.originalElement.css("resize","none");
this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));
this.originalElement.css({margin:this.originalElement.css("margin")});
this._proportionallyResize()
}this.handles=r.handles||(!c(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});
if(this.handles.constructor==String){if(this.handles=="all"){this.handles="n,e,s,w,se,sw,ne,nw"
}var s=this.handles.split(",");
this.handles={};
for(var l=0;
l<s.length;
l++){var q=c.trim(s[l]),g="ui-resizable-"+q;
var p=c('<div class="ui-resizable-handle '+g+'"></div>');
if(/sw|se|ne|nw/.test(q)){p.css({zIndex:++r.zIndex})
}if("se"==q){p.addClass("ui-icon ui-icon-gripsmall-diagonal-se")
}this.handles[q]=".ui-resizable-"+q;
this.element.append(p)
}}this._renderAxis=function(z){z=z||this.element;
for(var o in this.handles){if(this.handles[o].constructor==String){this.handles[o]=c(this.handles[o],this.element).show()
}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var u=c(this.handles[o],this.element),w=0;
w=/sw|ne|nw|se|n|s/.test(o)?u.outerHeight():u.outerWidth();
var n=["padding",/ne|nw|n/.test(o)?"Top":/se|sw|s/.test(o)?"Bottom":/^e$/.test(o)?"Right":"Left"].join("");
z.css(n,w);
this._proportionallyResize()
}if(!c(this.handles[o]).length){continue
}}};
this._renderAxis(this.element);
this._handles=c(".ui-resizable-handle",this.element).disableSelection();
this._handles.mouseover(function(){if(!k.resizing){if(this.className){var n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
}k.axis=n&&n[1]?n[1]:"se"
}});
if(r.autoHide){this._handles.hide();
c(this.element).addClass("ui-resizable-autohide").hover(function(){if(r.disabled){return
}c(this).removeClass("ui-resizable-autohide");
k._handles.show()
},function(){if(r.disabled){return
}if(!k.resizing){c(this).addClass("ui-resizable-autohide");
k._handles.hide()
}})
}this._mouseInit()
},destroy:function(){this._mouseDestroy();
var g=function(l){c(l).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
};
if(this.elementIsWrapper){g(this.element);
var k=this.element;
k.after(this.originalElement.css({position:k.css("position"),width:k.outerWidth(),height:k.outerHeight(),top:k.css("top"),left:k.css("left")})).remove()
}this.originalElement.css("resize",this.originalResizeStyle);
g(this.originalElement);
return this
},_mouseCapture:function(k){var l=false;
for(var g in this.handles){if(c(this.handles[g])[0]==k.target){l=true
}}return !this.options.disabled&&l
},_mouseStart:function(l){var q=this.options,k=this.element.position(),g=this.element;
this.resizing=true;
this.documentScroll={top:c(document).scrollTop(),left:c(document).scrollLeft()};
if(g.is(".ui-draggable")||(/absolute/).test(g.css("position"))){g.css({position:"absolute",top:k.top,left:k.left})
}this._renderProxy();
var r=b(this.helper.css("left")),n=b(this.helper.css("top"));
if(q.containment){r+=c(q.containment).scrollLeft()||0;
n+=c(q.containment).scrollTop()||0
}this.offset=this.helper.offset();
this.position={left:r,top:n};
this.size=this._helper?{width:g.outerWidth(),height:g.outerHeight()}:{width:g.width(),height:g.height()};
this.originalSize=this._helper?{width:g.outerWidth(),height:g.outerHeight()}:{width:g.width(),height:g.height()};
this.originalPosition={left:r,top:n};
this.sizeDiff={width:g.outerWidth()-g.width(),height:g.outerHeight()-g.height()};
this.originalMousePosition={left:l.pageX,top:l.pageY};
this.aspectRatio=(typeof q.aspectRatio=="number")?q.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);
var p=c(".ui-resizable-"+this.axis).css("cursor");
c("body").css("cursor",p=="auto"?this.axis+"-resize":p);
g.addClass("ui-resizable-resizing");
this._propagate("start",l);
return true
},_mouseDrag:function(g){var n=this.helper,l=this.options,u={},A=this,q=this.originalMousePosition,w=this.axis;
var B=(g.pageX-q.left)||0,z=(g.pageY-q.top)||0;
var p=this._change[w];
if(!p){return false
}var s=p.apply(this,[g,B,z]),r=c.browser.msie&&c.browser.version<7,k=this.sizeDiff;
this._updateVirtualBoundaries(g.shiftKey);
if(this._aspectRatio||g.shiftKey){s=this._updateRatio(s,g)
}s=this._respectSize(s,g);
this._propagate("resize",g);
n.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});
if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()
}this._updateCache(s);
this._trigger("resize",g,this.ui());
return false
},_mouseStop:function(n){this.resizing=false;
var p=this.options,w=this;
if(this._helper){var l=this._proportionallyResizeElements,g=l.length&&(/textarea/i).test(l[0].nodeName),k=g&&c.ui.hasScroll(l[0],"left")?0:w.sizeDiff.height,r=g?0:w.sizeDiff.width;
var z={width:(w.helper.width()-r),height:(w.helper.height()-k)},q=(parseInt(w.element.css("left"),10)+(w.position.left-w.originalPosition.left))||null,u=(parseInt(w.element.css("top"),10)+(w.position.top-w.originalPosition.top))||null;
if(!p.animate){this.element.css(c.extend(z,{top:u,left:q}))
}w.helper.height(w.size.height);
w.helper.width(w.size.width);
if(this._helper&&!p.animate){this._proportionallyResize()
}}c("body").css("cursor","auto");
this.element.removeClass("ui-resizable-resizing");
this._propagate("stop",n);
if(this._helper){this.helper.remove()
}return false
},_updateVirtualBoundaries:function(l){var q=this.options,p,n,k,r,g;
g={minWidth:a(q.minWidth)?q.minWidth:0,maxWidth:a(q.maxWidth)?q.maxWidth:Infinity,minHeight:a(q.minHeight)?q.minHeight:0,maxHeight:a(q.maxHeight)?q.maxHeight:Infinity};
if(this._aspectRatio||l){p=g.minHeight*this.aspectRatio;
k=g.minWidth/this.aspectRatio;
n=g.maxHeight*this.aspectRatio;
r=g.maxWidth/this.aspectRatio;
if(p>g.minWidth){g.minWidth=p
}if(k>g.minHeight){g.minHeight=k
}if(n<g.maxWidth){g.maxWidth=n
}if(r<g.maxHeight){g.maxHeight=r
}}this._vBoundaries=g
},_updateCache:function(g){var k=this.options;
this.offset=this.helper.offset();
if(a(g.left)){this.position.left=g.left
}if(a(g.top)){this.position.top=g.top
}if(a(g.height)){this.size.height=g.height
}if(a(g.width)){this.size.width=g.width
}},_updateRatio:function(n,l){var p=this.options,q=this.position,k=this.size,g=this.axis;
if(a(n.height)){n.width=(n.height*this.aspectRatio)
}else{if(a(n.width)){n.height=(n.width/this.aspectRatio)
}}if(g=="sw"){n.left=q.left+(k.width-n.width);
n.top=null
}if(g=="nw"){n.top=q.top+(k.height-n.height);
n.left=q.left+(k.width-n.width)
}return n
},_respectSize:function(s,l){var q=this.helper,p=this._vBoundaries,B=this._aspectRatio||l.shiftKey,A=this.axis,D=a(s.width)&&p.maxWidth&&(p.maxWidth<s.width),u=a(s.height)&&p.maxHeight&&(p.maxHeight<s.height),n=a(s.width)&&p.minWidth&&(p.minWidth>s.width),C=a(s.height)&&p.minHeight&&(p.minHeight>s.height);
if(n){s.width=p.minWidth
}if(C){s.height=p.minHeight
}if(D){s.width=p.maxWidth
}if(u){s.height=p.maxHeight
}var k=this.originalPosition.left+this.originalSize.width,z=this.position.top+this.size.height;
var r=/sw|nw|w/.test(A),g=/nw|ne|n/.test(A);
if(n&&r){s.left=k-p.minWidth
}if(D&&r){s.left=k-p.maxWidth
}if(C&&g){s.top=z-p.minHeight
}if(u&&g){s.top=z-p.maxHeight
}var w=!s.width&&!s.height;
if(w&&!s.left&&s.top){s.top=null
}else{if(w&&!s.top&&s.left){s.left=null
}}return s
},_proportionallyResize:function(){var r=this.options;
if(!this._proportionallyResizeElements.length){return
}var l=this.helper||this.element;
for(var k=0;
k<this._proportionallyResizeElements.length;
k++){var n=this._proportionallyResizeElements[k];
if(!this.borderDif){var g=[n.css("borderTopWidth"),n.css("borderRightWidth"),n.css("borderBottomWidth"),n.css("borderLeftWidth")],q=[n.css("paddingTop"),n.css("paddingRight"),n.css("paddingBottom"),n.css("paddingLeft")];
this.borderDif=c.map(g,function(o,s){var p=parseInt(o,10)||0,u=parseInt(q[s],10)||0;
return p+u
})
}if(c.browser.msie&&!(!(c(l).is(":hidden")||c(l).parents(":hidden").length))){continue
}n.css({height:(l.height()-this.borderDif[0]-this.borderDif[2])||0,width:(l.width()-this.borderDif[1]-this.borderDif[3])||0})
}},_renderProxy:function(){var k=this.element,p=this.options;
this.elementOffset=k.offset();
if(this._helper){this.helper=this.helper||c('<div style="overflow:hidden;"></div>');
var g=c.browser.msie&&c.browser.version<7,l=(g?1:0),n=(g?2:-1);
this.helper.addClass(this._helper).css({width:this.element.outerWidth()+n,height:this.element.outerHeight()+n,position:"absolute",left:this.elementOffset.left-l+"px",top:this.elementOffset.top-l+"px",zIndex:++p.zIndex});
this.helper.appendTo("body").disableSelection()
}else{this.helper=this.element
}},_change:{e:function(l,k,g){return{width:this.originalSize.width+k}
},w:function(n,k,g){var q=this.options,l=this.originalSize,p=this.originalPosition;
return{left:p.left+k,width:l.width-k}
},n:function(n,k,g){var q=this.options,l=this.originalSize,p=this.originalPosition;
return{top:p.top+g,height:l.height-g}
},s:function(l,k,g){return{height:this.originalSize.height+g}
},se:function(l,k,g){return c.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[l,k,g]))
},sw:function(l,k,g){return c.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[l,k,g]))
},ne:function(l,k,g){return c.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[l,k,g]))
},nw:function(l,k,g){return c.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[l,k,g]))
}},_propagate:function(k,g){c.ui.plugin.call(this,k,[g,this.ui()]);
(k!="resize"&&this._trigger(k,g,this.ui()))
},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}
}});
c.extend(c.ui.resizable,{version:"1.8.18"});
c.ui.plugin.add("resizable","alsoResize",{start:function(k,l){var g=c(this).data("resizable"),p=g.options;
var n=function(o){c(o).each(function(){var q=c(this);
q.data("resizable-alsoresize",{width:parseInt(q.width(),10),height:parseInt(q.height(),10),left:parseInt(q.css("left"),10),top:parseInt(q.css("top"),10)})
})
};
if(typeof(p.alsoResize)=="object"&&!p.alsoResize.parentNode){if(p.alsoResize.length){p.alsoResize=p.alsoResize[0];
n(p.alsoResize)
}else{c.each(p.alsoResize,function(o){n(o)
})
}}else{n(p.alsoResize)
}},resize:function(l,p){var k=c(this).data("resizable"),q=k.options,n=k.originalSize,s=k.originalPosition;
var r={height:(k.size.height-n.height)||0,width:(k.size.width-n.width)||0,top:(k.position.top-s.top)||0,left:(k.position.left-s.left)||0},g=function(o,u){c(o).each(function(){var A=c(this),B=c(this).data("resizable-alsoresize"),z={},w=u&&u.length?u:A.parents(p.originalElement[0]).length?["width","height"]:["width","height","top","left"];
c.each(w,function(C,E){var D=(B[E]||0)+(r[E]||0);
if(D&&D>=0){z[E]=D||null
}});
A.css(z)
})
};
if(typeof(q.alsoResize)=="object"&&!q.alsoResize.nodeType){c.each(q.alsoResize,function(o,u){g(o,u)
})
}else{g(q.alsoResize)
}},stop:function(g,k){c(this).removeData("resizable-alsoresize")
}});
c.ui.plugin.add("resizable","animate",{stop:function(p,w){var z=c(this).data("resizable"),q=z.options;
var n=z._proportionallyResizeElements,g=n.length&&(/textarea/i).test(n[0].nodeName),k=g&&c.ui.hasScroll(n[0],"left")?0:z.sizeDiff.height,s=g?0:z.sizeDiff.width;
var l={width:(z.size.width-s),height:(z.size.height-k)},r=(parseInt(z.element.css("left"),10)+(z.position.left-z.originalPosition.left))||null,u=(parseInt(z.element.css("top"),10)+(z.position.top-z.originalPosition.top))||null;
z.element.animate(c.extend(l,u&&r?{top:u,left:r}:{}),{duration:q.animateDuration,easing:q.animateEasing,step:function(){var o={width:parseInt(z.element.css("width"),10),height:parseInt(z.element.css("height"),10),top:parseInt(z.element.css("top"),10),left:parseInt(z.element.css("left"),10)};
if(n&&n.length){c(n[0]).css({width:o.width,height:o.height})
}z._updateCache(o);
z._propagate("resize",p)
}})
}});
c.ui.plugin.add("resizable","containment",{start:function(k,B){var D=c(this).data("resizable"),r=D.options,u=D.element;
var l=r.containment,s=(l instanceof c)?l.get(0):(/parent/.test(l))?u.parent().get(0):l;
if(!s){return
}D.containerElement=c(s);
if(/document/.test(l)||l==document){D.containerOffset={left:0,top:0};
D.containerPosition={left:0,top:0};
D.parentData={element:c(document),left:0,top:0,width:c(document).width(),height:c(document).height()||document.body.parentNode.scrollHeight}
}else{var z=c(s),q=[];
c(["Top","Right","Left","Bottom"]).each(function(p,o){q[p]=b(z.css("padding"+o))
});
D.containerOffset=z.offset();
D.containerPosition=z.position();
D.containerSize={height:(z.innerHeight()-q[3]),width:(z.innerWidth()-q[1])};
var A=D.containerOffset,g=D.containerSize.height,w=D.containerSize.width,n=(c.ui.hasScroll(s,"left")?s.scrollWidth:w),C=(c.ui.hasScroll(s)?s.scrollHeight:g);
D.parentData={element:s,left:A.left,top:A.top,width:n,height:C}
}},resize:function(l,A){var D=c(this).data("resizable"),p=D.options,k=D.containerSize,z=D.containerOffset,u=D.size,w=D.position,B=D._aspectRatio||l.shiftKey,g={top:0,left:0},n=D.containerElement;
if(n[0]!=document&&(/static/).test(n.css("position"))){g=z
}if(w.left<(D._helper?z.left:0)){D.size.width=D.size.width+(D._helper?(D.position.left-z.left):(D.position.left-g.left));
if(B){D.size.height=D.size.width/p.aspectRatio
}D.position.left=p.helper?z.left:0
}if(w.top<(D._helper?z.top:0)){D.size.height=D.size.height+(D._helper?(D.position.top-z.top):D.position.top);
if(B){D.size.width=D.size.height*p.aspectRatio
}D.position.top=D._helper?z.top:0
}D.offset.left=D.parentData.left+D.position.left;
D.offset.top=D.parentData.top+D.position.top;
var s=Math.abs((D._helper?D.offset.left-g.left:(D.offset.left-g.left))+D.sizeDiff.width),C=Math.abs((D._helper?D.offset.top-g.top:(D.offset.top-z.top))+D.sizeDiff.height);
var r=D.containerElement.get(0)==D.element.parent().get(0),q=/relative|absolute/.test(D.containerElement.css("position"));
if(r&&q){s-=D.parentData.left
}if(s+D.size.width>=D.parentData.width){D.size.width=D.parentData.width-s;
if(B){D.size.height=D.size.width/D.aspectRatio
}}if(C+D.size.height>=D.parentData.height){D.size.height=D.parentData.height-C;
if(B){D.size.width=D.size.height*D.aspectRatio
}}},stop:function(k,u){var A=c(this).data("resizable"),l=A.options,r=A.position,s=A.containerOffset,g=A.containerPosition,n=A.containerElement;
var p=c(A.helper),B=p.offset(),z=p.outerWidth()-A.sizeDiff.width,q=p.outerHeight()-A.sizeDiff.height;
if(A._helper&&!l.animate&&(/relative/).test(n.css("position"))){c(this).css({left:B.left-g.left-s.left,width:z,height:q})
}if(A._helper&&!l.animate&&(/static/).test(n.css("position"))){c(this).css({left:B.left-g.left-s.left,width:z,height:q})
}}});
c.ui.plugin.add("resizable","ghost",{start:function(l,n){var g=c(this).data("resizable"),p=g.options,k=g.size;
g.ghost=g.originalElement.clone();
g.ghost.css({opacity:0.25,display:"block",position:"relative",height:k.height,width:k.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof p.ghost=="string"?p.ghost:"");
g.ghost.appendTo(g.helper)
},resize:function(k,l){var g=c(this).data("resizable"),n=g.options;
if(g.ghost){g.ghost.css({position:"relative",height:g.size.height,width:g.size.width})
}},stop:function(k,l){var g=c(this).data("resizable"),n=g.options;
if(g.ghost&&g.helper){g.helper.get(0).removeChild(g.ghost.get(0))
}}});
c.ui.plugin.add("resizable","grid",{resize:function(g,u){var z=c(this).data("resizable"),n=z.options,r=z.size,p=z.originalSize,q=z.originalPosition,w=z.axis,s=n._aspectRatio||g.shiftKey;
n.grid=typeof n.grid=="number"?[n.grid,n.grid]:n.grid;
var l=Math.round((r.width-p.width)/(n.grid[0]||1))*(n.grid[0]||1),k=Math.round((r.height-p.height)/(n.grid[1]||1))*(n.grid[1]||1);
if(/^(se|s|e)$/.test(w)){z.size.width=p.width+l;
z.size.height=p.height+k
}else{if(/^(ne)$/.test(w)){z.size.width=p.width+l;
z.size.height=p.height+k;
z.position.top=q.top-k
}else{if(/^(sw)$/.test(w)){z.size.width=p.width+l;
z.size.height=p.height+k;
z.position.left=q.left-l
}else{z.size.width=p.width+l;
z.size.height=p.height+k;
z.position.top=q.top-k;
z.position.left=q.left-l
}}}}});
var b=function(g){return parseInt(g,10)||0
};
var a=function(g){return !isNaN(parseInt(g,10))
}
})(jQuery);
(function(a,b){a.widget("ui.selectable",a.ui.mouse,{options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch"},_create:function(){var c=this;
this.element.addClass("ui-selectable");
this.dragged=false;
var f;
this.refresh=function(){f=a(c.options.filter,c.element[0]);
f.addClass("ui-selectee");
f.each(function(){var g=a(this);
var k=g.offset();
a.data(this,"selectable-item",{element:this,$element:g,left:k.left,top:k.top,right:k.left+g.outerWidth(),bottom:k.top+g.outerHeight(),startselected:false,selected:g.hasClass("ui-selected"),selecting:g.hasClass("ui-selecting"),unselecting:g.hasClass("ui-unselecting")})
})
};
this.refresh();
this.selectees=f.addClass("ui-selectee");
this._mouseInit();
this.helper=a("<div class='ui-selectable-helper'></div>")
},destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");
this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");
this._mouseDestroy();
return this
},_mouseStart:function(g){var c=this;
this.opos=[g.pageX,g.pageY];
if(this.options.disabled){return
}var f=this.options;
this.selectees=a(f.filter,this.element[0]);
this._trigger("start",g);
a(f.appendTo).append(this.helper);
this.helper.css({left:g.clientX,top:g.clientY,width:0,height:0});
if(f.autoRefresh){this.refresh()
}this.selectees.filter(".ui-selected").each(function(){var k=a.data(this,"selectable-item");
k.startselected=true;
if(!g.metaKey&&!g.ctrlKey){k.$element.removeClass("ui-selected");
k.selected=false;
k.$element.addClass("ui-unselecting");
k.unselecting=true;
c._trigger("unselecting",g,{unselecting:k.element})
}});
a(g.target).parents().andSelf().each(function(){var l=a.data(this,"selectable-item");
if(l){var k=(!g.metaKey&&!g.ctrlKey)||!l.$element.hasClass("ui-selected");
l.$element.removeClass(k?"ui-unselecting":"ui-selected").addClass(k?"ui-selecting":"ui-unselecting");
l.unselecting=!k;
l.selecting=k;
l.selected=k;
if(k){c._trigger("selecting",g,{selecting:l.element})
}else{c._trigger("unselecting",g,{unselecting:l.element})
}return false
}})
},_mouseDrag:function(p){var f=this;
this.dragged=true;
if(this.options.disabled){return
}var k=this.options;
var g=this.opos[0],o=this.opos[1],c=p.pageX,n=p.pageY;
if(g>c){var l=c;
c=g;
g=l
}if(o>n){var l=n;
n=o;
o=l
}this.helper.css({left:g,top:o,width:c-g,height:n-o});
this.selectees.each(function(){var q=a.data(this,"selectable-item");
if(!q||q.element==f.element[0]){return
}var r=false;
if(k.tolerance=="touch"){r=(!(q.left>c||q.right<g||q.top>n||q.bottom<o))
}else{if(k.tolerance=="fit"){r=(q.left>g&&q.right<c&&q.top>o&&q.bottom<n)
}}if(r){if(q.selected){q.$element.removeClass("ui-selected");
q.selected=false
}if(q.unselecting){q.$element.removeClass("ui-unselecting");
q.unselecting=false
}if(!q.selecting){q.$element.addClass("ui-selecting");
q.selecting=true;
f._trigger("selecting",p,{selecting:q.element})
}}else{if(q.selecting){if((p.metaKey||p.ctrlKey)&&q.startselected){q.$element.removeClass("ui-selecting");
q.selecting=false;
q.$element.addClass("ui-selected");
q.selected=true
}else{q.$element.removeClass("ui-selecting");
q.selecting=false;
if(q.startselected){q.$element.addClass("ui-unselecting");
q.unselecting=true
}f._trigger("unselecting",p,{unselecting:q.element})
}}if(q.selected){if(!p.metaKey&&!p.ctrlKey&&!q.startselected){q.$element.removeClass("ui-selected");
q.selected=false;
q.$element.addClass("ui-unselecting");
q.unselecting=true;
f._trigger("unselecting",p,{unselecting:q.element})
}}}});
return false
},_mouseStop:function(g){var c=this;
this.dragged=false;
var f=this.options;
a(".ui-unselecting",this.element[0]).each(function(){var k=a.data(this,"selectable-item");
k.$element.removeClass("ui-unselecting");
k.unselecting=false;
k.startselected=false;
c._trigger("unselected",g,{unselected:k.element})
});
a(".ui-selecting",this.element[0]).each(function(){var k=a.data(this,"selectable-item");
k.$element.removeClass("ui-selecting").addClass("ui-selected");
k.selecting=false;
k.selected=true;
k.startselected=true;
c._trigger("selected",g,{selected:k.element})
});
this._trigger("stop",g);
this.helper.remove();
return false
}});
a.extend(a.ui.selectable,{version:"1.8.18"})
})(jQuery);
(function(a,b){a.widget("ui.sortable",a.ui.mouse,{widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000},_create:function(){var c=this.options;
this.containerCache={};
this.element.addClass("ui-sortable");
this.refresh();
this.floating=this.items.length?c.axis==="x"||(/left|right/).test(this.items[0].item.css("float"))||(/inline|table-cell/).test(this.items[0].item.css("display")):false;
this.offset=this.element.offset();
this._mouseInit();
this.ready=true
},destroy:function(){a.Widget.prototype.destroy.call(this);
this.element.removeClass("ui-sortable ui-sortable-disabled");
this._mouseDestroy();
for(var c=this.items.length-1;
c>=0;
c--){this.items[c].item.removeData(this.widgetName+"-item")
}return this
},_setOption:function(c,f){if(c==="disabled"){this.options[c]=f;
this.widget()[f?"addClass":"removeClass"]("ui-sortable-disabled")
}else{a.Widget.prototype._setOption.apply(this,arguments)
}},_mouseCapture:function(l,n){var k=this;
if(this.reverting){return false
}if(this.options.disabled||this.options.type=="static"){return false
}this._refreshItems(l);
var g=null,f=this,c=a(l.target).parents().each(function(){if(a.data(this,k.widgetName+"-item")==f){g=a(this);
return false
}});
if(a.data(l.target,k.widgetName+"-item")==f){g=a(l.target)
}if(!g){return false
}if(this.options.handle&&!n){var o=false;
a(this.options.handle,g).find("*").andSelf().each(function(){if(this==l.target){o=true
}});
if(!o){return false
}}this.currentItem=g;
this._removeCurrentsFromItems();
return true
},_mouseStart:function(k,l,c){var n=this.options,f=this;
this.currentContainer=this;
this.refreshPositions();
this.helper=this._createHelper(k);
this._cacheHelperProportions();
this._cacheMargins();
this.scrollParent=this.helper.scrollParent();
this.offset=this.currentItem.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
this.helper.css("position","absolute");
this.cssPosition=this.helper.css("position");
a.extend(this.offset,{click:{left:k.pageX-this.offset.left,top:k.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this._generatePosition(k);
this.originalPageX=k.pageX;
this.originalPageY=k.pageY;
(n.cursorAt&&this._adjustOffsetFromHelper(n.cursorAt));
this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
if(this.helper[0]!=this.currentItem[0]){this.currentItem.hide()
}this._createPlaceholder();
if(n.containment){this._setContainment()
}if(n.cursor){if(a("body").css("cursor")){this._storedCursor=a("body").css("cursor")
}a("body").css("cursor",n.cursor)
}if(n.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")
}this.helper.css("opacity",n.opacity)
}if(n.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")
}this.helper.css("zIndex",n.zIndex)
}if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){this.overflowOffset=this.scrollParent.offset()
}this._trigger("start",k,this._uiHash());
if(!this._preserveHelperProportions){this._cacheHelperProportions()
}if(!c){for(var g=this.containers.length-1;
g>=0;
g--){this.containers[g]._trigger("activate",k,f._uiHash(this))
}}if(a.ui.ddmanager){a.ui.ddmanager.current=this
}if(a.ui.ddmanager&&!n.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,k)
}this.dragging=true;
this.helper.addClass("ui-sortable-helper");
this._mouseDrag(k);
return true
},_mouseDrag:function(l){this.position=this._generatePosition(l);
this.positionAbs=this._convertPositionTo("absolute");
if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs
}if(this.options.scroll){var n=this.options,c=false;
if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-l.pageY<n.scrollSensitivity){this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop+n.scrollSpeed
}else{if(l.pageY-this.overflowOffset.top<n.scrollSensitivity){this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop-n.scrollSpeed
}}if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-l.pageX<n.scrollSensitivity){this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft+n.scrollSpeed
}else{if(l.pageX-this.overflowOffset.left<n.scrollSensitivity){this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft-n.scrollSpeed
}}}else{if(l.pageY-a(document).scrollTop()<n.scrollSensitivity){c=a(document).scrollTop(a(document).scrollTop()-n.scrollSpeed)
}else{if(a(window).height()-(l.pageY-a(document).scrollTop())<n.scrollSensitivity){c=a(document).scrollTop(a(document).scrollTop()+n.scrollSpeed)
}}if(l.pageX-a(document).scrollLeft()<n.scrollSensitivity){c=a(document).scrollLeft(a(document).scrollLeft()-n.scrollSpeed)
}else{if(a(window).width()-(l.pageX-a(document).scrollLeft())<n.scrollSensitivity){c=a(document).scrollLeft(a(document).scrollLeft()+n.scrollSpeed)
}}}if(c!==false&&a.ui.ddmanager&&!n.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,l)
}}this.positionAbs=this._convertPositionTo("absolute");
if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"
}for(var g=this.items.length-1;
g>=0;
g--){var k=this.items[g],f=k.item[0],p=this._intersectsWithPointer(k);
if(!p){continue
}if(f!=this.currentItem[0]&&this.placeholder[p==1?"next":"prev"]()[0]!=f&&!a.ui.contains(this.placeholder[0],f)&&(this.options.type=="semi-dynamic"?!a.ui.contains(this.element[0],f):true)){this.direction=p==1?"down":"up";
if(this.options.tolerance=="pointer"||this._intersectsWithSides(k)){this._rearrange(l,k)
}else{break
}this._trigger("change",l,this._uiHash());
break
}}this._contactContainers(l);
if(a.ui.ddmanager){a.ui.ddmanager.drag(this,l)
}this._trigger("sort",l,this._uiHash());
this.lastPositionAbs=this.positionAbs;
return false
},_mouseStop:function(f,g){if(!f){return
}if(a.ui.ddmanager&&!this.options.dropBehaviour){a.ui.ddmanager.drop(this,f)
}if(this.options.revert){var c=this;
var k=c.placeholder.offset();
c.reverting=true;
a(this.helper).animate({left:k.left-this.offset.parent.left-c.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:k.top-this.offset.parent.top-c.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){c._clear(f)
})
}else{this._clear(f,g)
}return false
},cancel:function(){var c=this;
if(this.dragging){this._mouseUp({target:null});
if(this.options.helper=="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
}else{this.currentItem.show()
}for(var f=this.containers.length-1;
f>=0;
f--){this.containers[f]._trigger("deactivate",null,c._uiHash(this));
if(this.containers[f].containerCache.over){this.containers[f]._trigger("out",null,c._uiHash(this));
this.containers[f].containerCache.over=0
}}}if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])
}if(this.options.helper!="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()
}a.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});
if(this.domPosition.prev){a(this.domPosition.prev).after(this.currentItem)
}else{a(this.domPosition.parent).prepend(this.currentItem)
}}return this
},serialize:function(g){var c=this._getItemsAsjQuery(g&&g.connected);
var f=[];
g=g||{};
a(c).each(function(){var k=(a(g.item||this).attr(g.attribute||"id")||"").match(g.expression||(/(.+)[-=_](.+)/));
if(k){f.push((g.key||k[1]+"[]")+"="+(g.key&&g.expression?k[1]:k[2]))
}});
if(!f.length&&g.key){f.push(g.key+"=")
}return f.join("&")
},toArray:function(g){var c=this._getItemsAsjQuery(g&&g.connected);
var f=[];
g=g||{};
c.each(function(){f.push(a(g.item||this).attr(g.attribute||"id")||"")
});
return f
},_intersectsWith:function(u){var g=this.positionAbs.left,f=g+this.helperProportions.width,s=this.positionAbs.top,q=s+this.helperProportions.height;
var k=u.left,c=k+u.width,w=u.top,p=w+u.height;
var z=this.offset.click.top,o=this.offset.click.left;
var n=(s+z)>w&&(s+z)<p&&(g+o)>k&&(g+o)<c;
if(this.options.tolerance=="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>u[this.floating?"width":"height"])){return n
}else{return(k<g+(this.helperProportions.width/2)&&f-(this.helperProportions.width/2)<c&&w<s+(this.helperProportions.height/2)&&q-(this.helperProportions.height/2)<p)
}},_intersectsWithPointer:function(g){var k=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,g.top,g.height),f=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,g.left,g.width),n=k&&f,c=this._getDragVerticalDirection(),l=this._getDragHorizontalDirection();
if(!n){return false
}return this.floating?(((l&&l=="right")||c=="down")?2:1):(c&&(c=="down"?2:1))
},_intersectsWithSides:function(k){var f=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,k.top+(k.height/2),k.height),g=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,k.left+(k.width/2),k.width),c=this._getDragVerticalDirection(),l=this._getDragHorizontalDirection();
if(this.floating&&l){return((l=="right"&&g)||(l=="left"&&!g))
}else{return c&&((c=="down"&&f)||(c=="up"&&!f))
}},_getDragVerticalDirection:function(){var c=this.positionAbs.top-this.lastPositionAbs.top;
return c!=0&&(c>0?"down":"up")
},_getDragHorizontalDirection:function(){var c=this.positionAbs.left-this.lastPositionAbs.left;
return c!=0&&(c>0?"right":"left")
},refresh:function(c){this._refreshItems(c);
this.refreshPositions();
return this
},_connectWith:function(){var c=this.options;
return c.connectWith.constructor==String?[c.connectWith]:c.connectWith
},_getItemsAsjQuery:function(c){var q=this;
var n=[];
var k=[];
var o=this._connectWith();
if(o&&c){for(var g=o.length-1;
g>=0;
g--){var p=a(o[g]);
for(var f=p.length-1;
f>=0;
f--){var l=a.data(p[f],this.widgetName);
if(l&&l!=this&&!l.options.disabled){k.push([a.isFunction(l.options.items)?l.options.items.call(l.element):a(l.options.items,l.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),l])
}}}}k.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);
for(var g=k.length-1;
g>=0;
g--){k[g][0].each(function(){n.push(this)
})
}return a(n)
},_removeCurrentsFromItems:function(){var g=this.currentItem.find(":data("+this.widgetName+"-item)");
for(var f=0;
f<this.items.length;
f++){for(var c=0;
c<g.length;
c++){if(g[c]==this.items[f].item[0]){this.items.splice(f,1)
}}}},_refreshItems:function(c){this.items=[];
this.containers=[this];
var o=this.items;
var w=this;
var l=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],c,{item:this.currentItem}):a(this.options.items,this.element),this]];
var q=this._connectWith();
if(q&&this.ready){for(var k=q.length-1;
k>=0;
k--){var r=a(q[k]);
for(var g=r.length-1;
g>=0;
g--){var n=a.data(r[g],this.widgetName);
if(n&&n!=this&&!n.options.disabled){l.push([a.isFunction(n.options.items)?n.options.items.call(n.element[0],c,{item:this.currentItem}):a(n.options.items,n.element),n]);
this.containers.push(n)
}}}}for(var k=l.length-1;
k>=0;
k--){var p=l[k][1];
var f=l[k][0];
for(var g=0,s=f.length;
g<s;
g++){var u=a(f[g]);
u.data(this.widgetName+"-item",p);
o.push({item:u,instance:p,width:0,height:0,left:0,top:0})
}}},refreshPositions:function(c){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()
}for(var g=this.items.length-1;
g>=0;
g--){var k=this.items[g];
if(k.instance!=this.currentContainer&&this.currentContainer&&k.item[0]!=this.currentItem[0]){continue
}var f=this.options.toleranceElement?a(this.options.toleranceElement,k.item):k.item;
if(!c){k.width=f.outerWidth();
k.height=f.outerHeight()
}var l=f.offset();
k.left=l.left;
k.top=l.top
}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)
}else{for(var g=this.containers.length-1;
g>=0;
g--){var l=this.containers[g].element.offset();
this.containers[g].containerCache.left=l.left;
this.containers[g].containerCache.top=l.top;
this.containers[g].containerCache.width=this.containers[g].element.outerWidth();
this.containers[g].containerCache.height=this.containers[g].element.outerHeight()
}}return this
},_createPlaceholder:function(g){var c=g||this,k=c.options;
if(!k.placeholder||k.placeholder.constructor==String){var f=k.placeholder;
k.placeholder={element:function(){var l=a(document.createElement(c.currentItem[0].nodeName)).addClass(f||c.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
if(!f){l.style.visibility="hidden"
}return l
},update:function(l,n){if(f&&!k.forcePlaceholderSize){return
}if(!n.height()){n.height(c.currentItem.innerHeight()-parseInt(c.currentItem.css("paddingTop")||0,10)-parseInt(c.currentItem.css("paddingBottom")||0,10))
}if(!n.width()){n.width(c.currentItem.innerWidth()-parseInt(c.currentItem.css("paddingLeft")||0,10)-parseInt(c.currentItem.css("paddingRight")||0,10))
}}}
}c.placeholder=a(k.placeholder.element.call(c.element,c.currentItem));
c.currentItem.after(c.placeholder);
k.placeholder.update(c,c.placeholder)
},_contactContainers:function(c){var g=null,p=null;
for(var l=this.containers.length-1;
l>=0;
l--){if(a.ui.contains(this.currentItem[0],this.containers[l].element[0])){continue
}if(this._intersectsWith(this.containers[l].containerCache)){if(g&&a.ui.contains(this.containers[l].element[0],g.element[0])){continue
}g=this.containers[l];
p=l
}else{if(this.containers[l].containerCache.over){this.containers[l]._trigger("out",c,this._uiHash(this));
this.containers[l].containerCache.over=0
}}}if(!g){return
}if(this.containers.length===1){this.containers[p]._trigger("over",c,this._uiHash(this));
this.containers[p].containerCache.over=1
}else{if(this.currentContainer!=this.containers[p]){var o=10000;
var n=null;
var f=this.positionAbs[this.containers[p].floating?"left":"top"];
for(var k=this.items.length-1;
k>=0;
k--){if(!a.ui.contains(this.containers[p].element[0],this.items[k].item[0])){continue
}var q=this.items[k][this.containers[p].floating?"left":"top"];
if(Math.abs(q-f)<o){o=Math.abs(q-f);
n=this.items[k]
}}if(!n&&!this.options.dropOnEmpty){return
}this.currentContainer=this.containers[p];
n?this._rearrange(c,n,null,true):this._rearrange(c,null,this.containers[p].element,true);
this._trigger("change",c,this._uiHash());
this.containers[p]._trigger("change",c,this._uiHash(this));
this.options.placeholder.update(this.currentContainer,this.placeholder);
this.containers[p]._trigger("over",c,this._uiHash(this));
this.containers[p].containerCache.over=1
}}},_createHelper:function(f){var g=this.options;
var c=a.isFunction(g.helper)?a(g.helper.apply(this.element[0],[f,this.currentItem])):(g.helper=="clone"?this.currentItem.clone():this.currentItem);
if(!c.parents("body").length){a(g.appendTo!="parent"?g.appendTo:this.currentItem[0].parentNode)[0].appendChild(c[0])
}if(c[0]==this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}
}if(c[0].style.width==""||g.forceHelperSize){c.width(this.currentItem.width())
}if(c[0].style.height==""||g.forceHelperSize){c.height(this.currentItem.height())
}return c
},_adjustOffsetFromHelper:function(c){if(typeof c=="string"){c=c.split(" ")
}if(a.isArray(c)){c={left:+c[0],top:+c[1]||0}
}if("left" in c){this.offset.click.left=c.left+this.margins.left
}if("right" in c){this.offset.click.left=this.helperProportions.width-c.right+this.margins.left
}if("top" in c){this.offset.click.top=c.top+this.margins.top
}if("bottom" in c){this.offset.click.top=this.helperProportions.height-c.bottom+this.margins.top
}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();
var c=this.offsetParent.offset();
if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])){c.left+=this.scrollParent.scrollLeft();
c.top+=this.scrollParent.scrollTop()
}if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)){c={top:0,left:0}
}return{top:c.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:c.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var c=this.currentItem.position();
return{top:c.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:c.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}else{return{top:0,left:0}
}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var k=this.options;
if(k.containment=="parent"){k.containment=this.helper[0].parentNode
}if(k.containment=="document"||k.containment=="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(k.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(k.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]
}if(!(/^(document|window|parent)$/).test(k.containment)){var f=a(k.containment)[0];
var g=a(k.containment).offset();
var c=(a(f).css("overflow")!="hidden");
this.containment=[g.left+(parseInt(a(f).css("borderLeftWidth"),10)||0)+(parseInt(a(f).css("paddingLeft"),10)||0)-this.margins.left,g.top+(parseInt(a(f).css("borderTopWidth"),10)||0)+(parseInt(a(f).css("paddingTop"),10)||0)-this.margins.top,g.left+(c?Math.max(f.scrollWidth,f.offsetWidth):f.offsetWidth)-(parseInt(a(f).css("borderLeftWidth"),10)||0)-(parseInt(a(f).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,g.top+(c?Math.max(f.scrollHeight,f.offsetHeight):f.offsetHeight)-(parseInt(a(f).css("borderTopWidth"),10)||0)-(parseInt(a(f).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]
}},_convertPositionTo:function(k,n){if(!n){n=this.position
}var f=k=="absolute"?1:-1;
var g=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,l=(/(html|body)/i).test(c[0].tagName);
return{top:(n.top+this.offset.relative.top*f+this.offset.parent.top*f-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(l?0:c.scrollTop()))*f)),left:(n.left+this.offset.relative.left*f+this.offset.parent.left*f-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():l?0:c.scrollLeft())*f))}
},_generatePosition:function(k){var p=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,q=(/(html|body)/i).test(c[0].tagName);
if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()
}var g=k.pageX;
var f=k.pageY;
if(this.originalPosition){if(this.containment){if(k.pageX-this.offset.click.left<this.containment[0]){g=this.containment[0]+this.offset.click.left
}if(k.pageY-this.offset.click.top<this.containment[1]){f=this.containment[1]+this.offset.click.top
}if(k.pageX-this.offset.click.left>this.containment[2]){g=this.containment[2]+this.offset.click.left
}if(k.pageY-this.offset.click.top>this.containment[3]){f=this.containment[3]+this.offset.click.top
}}if(p.grid){var n=this.originalPageY+Math.round((f-this.originalPageY)/p.grid[1])*p.grid[1];
f=this.containment?(!(n-this.offset.click.top<this.containment[1]||n-this.offset.click.top>this.containment[3])?n:(!(n-this.offset.click.top<this.containment[1])?n-p.grid[1]:n+p.grid[1])):n;
var l=this.originalPageX+Math.round((g-this.originalPageX)/p.grid[0])*p.grid[0];
g=this.containment?(!(l-this.offset.click.left<this.containment[0]||l-this.offset.click.left>this.containment[2])?l:(!(l-this.offset.click.left<this.containment[0])?l-p.grid[0]:l+p.grid[0])):l
}}return{top:(f-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(q?0:c.scrollTop())))),left:(g-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():q?0:c.scrollLeft())))}
},_rearrange:function(n,l,f,k){f?f[0].appendChild(this.placeholder[0]):l.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction=="down"?l.item[0]:l.item[0].nextSibling));
this.counter=this.counter?++this.counter:1;
var g=this,c=this.counter;
window.setTimeout(function(){if(c==g.counter){g.refreshPositions(!k)
}},0)
},_clear:function(g,k){this.reverting=false;
var l=[],c=this;
if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem)
}this._noFinalSort=null;
if(this.helper[0]==this.currentItem[0]){for(var f in this._storedCSS){if(this._storedCSS[f]=="auto"||this._storedCSS[f]=="static"){this._storedCSS[f]=""
}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
}else{this.currentItem.show()
}if(this.fromOutside&&!k){l.push(function(n){this._trigger("receive",n,this._uiHash(this.fromOutside))
})
}if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!k){l.push(function(n){this._trigger("update",n,this._uiHash())
})
}if(!a.ui.contains(this.element[0],this.currentItem[0])){if(!k){l.push(function(n){this._trigger("remove",n,this._uiHash())
})
}for(var f=this.containers.length-1;
f>=0;
f--){if(a.ui.contains(this.containers[f].element[0],this.currentItem[0])&&!k){l.push((function(n){return function(o){n._trigger("receive",o,this._uiHash(this))
}
}).call(this,this.containers[f]));
l.push((function(n){return function(o){n._trigger("update",o,this._uiHash(this))
}
}).call(this,this.containers[f]))
}}}for(var f=this.containers.length-1;
f>=0;
f--){if(!k){l.push((function(n){return function(o){n._trigger("deactivate",o,this._uiHash(this))
}
}).call(this,this.containers[f]))
}if(this.containers[f].containerCache.over){l.push((function(n){return function(o){n._trigger("out",o,this._uiHash(this))
}
}).call(this,this.containers[f]));
this.containers[f].containerCache.over=0
}}if(this._storedCursor){a("body").css("cursor",this._storedCursor)
}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)
}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex)
}this.dragging=false;
if(this.cancelHelperRemoval){if(!k){this._trigger("beforeStop",g,this._uiHash());
for(var f=0;
f<l.length;
f++){l[f].call(this,g)
}this._trigger("stop",g,this._uiHash())
}return false
}if(!k){this._trigger("beforeStop",g,this._uiHash())
}this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
if(this.helper[0]!=this.currentItem[0]){this.helper.remove()
}this.helper=null;
if(!k){for(var f=0;
f<l.length;
f++){l[f].call(this,g)
}this._trigger("stop",g,this._uiHash())
}this.fromOutside=false;
return true
},_trigger:function(){if(a.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel()
}},_uiHash:function(f){var c=f||this;
return{helper:c.helper,placeholder:c.placeholder||a([]),position:c.position,originalPosition:c.originalPosition,offset:c.positionAbs,item:c.currentItem,sender:f?f.element:null}
}});
a.extend(a.ui.sortable,{version:"1.8.18"})
})(jQuery);
jQuery.effects||(function(n,g){n.effects={};
n.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","borderColor","color","outlineColor"],function(u,s){n.fx.step[s]=function(w){if(!w.colorInit){w.start=r(w.elem,s);
w.end=p(w.end);
w.colorInit=true
}w.elem.style[s]="rgb("+Math.max(Math.min(parseInt((w.pos*(w.end[0]-w.start[0]))+w.start[0],10),255),0)+","+Math.max(Math.min(parseInt((w.pos*(w.end[1]-w.start[1]))+w.start[1],10),255),0)+","+Math.max(Math.min(parseInt((w.pos*(w.end[2]-w.start[2]))+w.start[2],10),255),0)+")"
}
});
function p(u){var s;
if(u&&u.constructor==Array&&u.length==3){return u
}if(s=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(u)){return[parseInt(s[1],10),parseInt(s[2],10),parseInt(s[3],10)]
}if(s=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(u)){return[parseFloat(s[1])*2.55,parseFloat(s[2])*2.55,parseFloat(s[3])*2.55]
}if(s=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(u)){return[parseInt(s[1],16),parseInt(s[2],16),parseInt(s[3],16)]
}if(s=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(u)){return[parseInt(s[1]+s[1],16),parseInt(s[2]+s[2],16),parseInt(s[3]+s[3],16)]
}if(s=/rgba\(0, 0, 0, 0\)/.exec(u)){return a.transparent
}return a[n.trim(u).toLowerCase()]
}function r(w,s){var u;
do{u=n.curCSS(w,s);
if(u!=""&&u!="transparent"||n.nodeName(w,"body")){break
}s="backgroundColor"
}while(w=w.parentNode);
return p(u)
}var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]};
var k=["add","remove","toggle"],c={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};
function l(){var z=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,A={},u,w;
if(z&&z.length&&z[0]&&z[z[0]]){var s=z.length;
while(s--){u=z[s];
if(typeof z[u]=="string"){w=u.replace(/\-(\w)/g,function(B,C){return C.toUpperCase()
});
A[w]=z[u]
}}}else{for(u in z){if(typeof z[u]==="string"){A[u]=z[u]
}}}return A
}function b(u){var s,w;
for(s in u){w=u[s];
if(w==null||n.isFunction(w)||s in c||(/scrollbar/).test(s)||(!(/color/i).test(s)&&isNaN(parseFloat(w)))){delete u[s]
}}return u
}function o(s,w){var z={_:0},u;
for(u in w){if(s[u]!=w[u]){z[u]=w[u]
}}return z
}n.effects.animateClass=function(s,u,z,w){if(n.isFunction(z)){w=z;
z=null
}return this.queue(function(){var D=n(this),A=D.attr("style")||" ",E=b(l.call(this)),C,B=D.attr("class");
n.each(k,function(F,G){if(s[G]){D[G+"Class"](s[G])
}});
C=b(l.call(this));
D.attr("class",B);
D.animate(o(E,C),{queue:false,duration:u,easing:z,complete:function(){n.each(k,function(F,G){if(s[G]){D[G+"Class"](s[G])
}});
if(typeof D.attr("style")=="object"){D.attr("style").cssText="";
D.attr("style").cssText=A
}else{D.attr("style",A)
}if(w){w.apply(this,arguments)
}n.dequeue(this)
}})
})
};
n.fn.extend({_addClass:n.fn.addClass,addClass:function(u,s,z,w){return s?n.effects.animateClass.apply(this,[{add:u},s,z,w]):this._addClass(u)
},_removeClass:n.fn.removeClass,removeClass:function(u,s,z,w){return s?n.effects.animateClass.apply(this,[{remove:u},s,z,w]):this._removeClass(u)
},_toggleClass:n.fn.toggleClass,toggleClass:function(w,u,s,A,z){if(typeof u=="boolean"||u===g){if(!s){return this._toggleClass(w,u)
}else{return n.effects.animateClass.apply(this,[(u?{add:w}:{remove:w}),s,A,z])
}}else{return n.effects.animateClass.apply(this,[{toggle:w},u,s,A])
}},switchClass:function(s,w,u,A,z){return n.effects.animateClass.apply(this,[{add:w,remove:s},u,A,z])
}});
n.extend(n.effects,{version:"1.8.18",save:function(u,w){for(var s=0;
s<w.length;
s++){if(w[s]!==null){u.data("ec.storage."+w[s],u[0].style[w[s]])
}}},restore:function(u,w){for(var s=0;
s<w.length;
s++){if(w[s]!==null){u.css(w[s],u.data("ec.storage."+w[s]))
}}},setMode:function(s,u){if(u=="toggle"){u=s.is(":hidden")?"show":"hide"
}return u
},getBaseline:function(u,w){var z,s;
switch(u[0]){case"top":z=0;
break;
case"middle":z=0.5;
break;
case"bottom":z=1;
break;
default:z=u[0]/w.height
}switch(u[1]){case"left":s=0;
break;
case"center":s=0.5;
break;
case"right":s=1;
break;
default:s=u[1]/w.width
}return{x:s,y:z}
},createWrapper:function(s){if(s.parent().is(".ui-effects-wrapper")){return s.parent()
}var u={width:s.outerWidth(true),height:s.outerHeight(true),"float":s.css("float")},z=n("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),w=document.activeElement;
s.wrap(z);
if(s[0]===w||n.contains(s[0],w)){n(w).focus()
}z=s.parent();
if(s.css("position")=="static"){z.css({position:"relative"});
s.css({position:"relative"})
}else{n.extend(u,{position:s.css("position"),zIndex:s.css("z-index")});
n.each(["top","left","bottom","right"],function(A,B){u[B]=s.css(B);
if(isNaN(parseInt(u[B],10))){u[B]="auto"
}});
s.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})
}return z.css(u).show()
},removeWrapper:function(s){var u,w=document.activeElement;
if(s.parent().is(".ui-effects-wrapper")){u=s.parent().replaceWith(s);
if(s[0]===w||n.contains(s[0],w)){n(w).focus()
}return u
}return s
},setTransition:function(u,z,s,w){w=w||{};
n.each(z,function(B,A){unit=u.cssUnit(A);
if(unit[0]>0){w[A]=unit[0]*s+unit[1]
}});
return w
}});
function f(u,s,w,z){if(typeof u=="object"){z=s;
w=null;
s=u;
u=s.effect
}if(n.isFunction(s)){z=s;
w=null;
s={}
}if(typeof s=="number"||n.fx.speeds[s]){z=w;
w=s;
s={}
}if(n.isFunction(w)){z=w;
w=null
}s=s||{};
w=w||s.duration;
w=n.fx.off?0:typeof w=="number"?w:w in n.fx.speeds?n.fx.speeds[w]:n.fx.speeds._default;
z=z||s.complete;
return[u,s,w,z]
}function q(s){if(!s||typeof s==="number"||n.fx.speeds[s]){return true
}if(typeof s==="string"&&!n.effects[s]){return true
}return false
}n.fn.extend({effect:function(z,w,B,D){var u=f.apply(this,arguments),A={options:u[1],duration:u[2],callback:u[3]},C=A.options.mode,s=n.effects[z];
if(n.fx.off||!s){if(C){return this[C](A.duration,A.callback)
}else{return this.each(function(){if(A.callback){A.callback.call(this)
}})
}}return s.call(this,A)
},_show:n.fn.show,show:function(u){if(q(u)){return this._show.apply(this,arguments)
}else{var s=f.apply(this,arguments);
s[1].mode="show";
return this.effect.apply(this,s)
}},_hide:n.fn.hide,hide:function(u){if(q(u)){return this._hide.apply(this,arguments)
}else{var s=f.apply(this,arguments);
s[1].mode="hide";
return this.effect.apply(this,s)
}},__toggle:n.fn.toggle,toggle:function(u){if(q(u)||typeof u==="boolean"||n.isFunction(u)){return this.__toggle.apply(this,arguments)
}else{var s=f.apply(this,arguments);
s[1].mode="toggle";
return this.effect.apply(this,s)
}},cssUnit:function(s){var u=this.css(s),w=[];
n.each(["em","px","%","pt"],function(z,A){if(u.indexOf(A)>0){w=[parseFloat(u),A]
}});
return w
}});
n.easing.jswing=n.easing.swing;
n.extend(n.easing,{def:"easeOutQuad",swing:function(u,w,s,A,z){return n.easing[n.easing.def](u,w,s,A,z)
},easeInQuad:function(u,w,s,A,z){return A*(w/=z)*w+s
},easeOutQuad:function(u,w,s,A,z){return -A*(w/=z)*(w-2)+s
},easeInOutQuad:function(u,w,s,A,z){if((w/=z/2)<1){return A/2*w*w+s
}return -A/2*((--w)*(w-2)-1)+s
},easeInCubic:function(u,w,s,A,z){return A*(w/=z)*w*w+s
},easeOutCubic:function(u,w,s,A,z){return A*((w=w/z-1)*w*w+1)+s
},easeInOutCubic:function(u,w,s,A,z){if((w/=z/2)<1){return A/2*w*w*w+s
}return A/2*((w-=2)*w*w+2)+s
},easeInQuart:function(u,w,s,A,z){return A*(w/=z)*w*w*w+s
},easeOutQuart:function(u,w,s,A,z){return -A*((w=w/z-1)*w*w*w-1)+s
},easeInOutQuart:function(u,w,s,A,z){if((w/=z/2)<1){return A/2*w*w*w*w+s
}return -A/2*((w-=2)*w*w*w-2)+s
},easeInQuint:function(u,w,s,A,z){return A*(w/=z)*w*w*w*w+s
},easeOutQuint:function(u,w,s,A,z){return A*((w=w/z-1)*w*w*w*w+1)+s
},easeInOutQuint:function(u,w,s,A,z){if((w/=z/2)<1){return A/2*w*w*w*w*w+s
}return A/2*((w-=2)*w*w*w*w+2)+s
},easeInSine:function(u,w,s,A,z){return -A*Math.cos(w/z*(Math.PI/2))+A+s
},easeOutSine:function(u,w,s,A,z){return A*Math.sin(w/z*(Math.PI/2))+s
},easeInOutSine:function(u,w,s,A,z){return -A/2*(Math.cos(Math.PI*w/z)-1)+s
},easeInExpo:function(u,w,s,A,z){return(w==0)?s:A*Math.pow(2,10*(w/z-1))+s
},easeOutExpo:function(u,w,s,A,z){return(w==z)?s+A:A*(-Math.pow(2,-10*w/z)+1)+s
},easeInOutExpo:function(u,w,s,A,z){if(w==0){return s
}if(w==z){return s+A
}if((w/=z/2)<1){return A/2*Math.pow(2,10*(w-1))+s
}return A/2*(-Math.pow(2,-10*--w)+2)+s
},easeInCirc:function(u,w,s,A,z){return -A*(Math.sqrt(1-(w/=z)*w)-1)+s
},easeOutCirc:function(u,w,s,A,z){return A*Math.sqrt(1-(w=w/z-1)*w)+s
},easeInOutCirc:function(u,w,s,A,z){if((w/=z/2)<1){return -A/2*(Math.sqrt(1-w*w)-1)+s
}return A/2*(Math.sqrt(1-(w-=2)*w)+1)+s
},easeInElastic:function(w,A,u,E,D){var B=1.70158;
var C=0;
var z=E;
if(A==0){return u
}if((A/=D)==1){return u+E
}if(!C){C=D*0.3
}if(z<Math.abs(E)){z=E;
var B=C/4
}else{var B=C/(2*Math.PI)*Math.asin(E/z)
}return -(z*Math.pow(2,10*(A-=1))*Math.sin((A*D-B)*(2*Math.PI)/C))+u
},easeOutElastic:function(w,A,u,E,D){var B=1.70158;
var C=0;
var z=E;
if(A==0){return u
}if((A/=D)==1){return u+E
}if(!C){C=D*0.3
}if(z<Math.abs(E)){z=E;
var B=C/4
}else{var B=C/(2*Math.PI)*Math.asin(E/z)
}return z*Math.pow(2,-10*A)*Math.sin((A*D-B)*(2*Math.PI)/C)+E+u
},easeInOutElastic:function(w,A,u,E,D){var B=1.70158;
var C=0;
var z=E;
if(A==0){return u
}if((A/=D/2)==2){return u+E
}if(!C){C=D*(0.3*1.5)
}if(z<Math.abs(E)){z=E;
var B=C/4
}else{var B=C/(2*Math.PI)*Math.asin(E/z)
}if(A<1){return -0.5*(z*Math.pow(2,10*(A-=1))*Math.sin((A*D-B)*(2*Math.PI)/C))+u
}return z*Math.pow(2,-10*(A-=1))*Math.sin((A*D-B)*(2*Math.PI)/C)*0.5+E+u
},easeInBack:function(w,z,u,C,B,A){if(A==g){A=1.70158
}return C*(z/=B)*z*((A+1)*z-A)+u
},easeOutBack:function(w,z,u,C,B,A){if(A==g){A=1.70158
}return C*((z=z/B-1)*z*((A+1)*z+A)+1)+u
},easeInOutBack:function(w,z,u,C,B,A){if(A==g){A=1.70158
}if((z/=B/2)<1){return C/2*(z*z*(((A*=(1.525))+1)*z-A))+u
}return C/2*((z-=2)*z*(((A*=(1.525))+1)*z+A)+2)+u
},easeInBounce:function(u,w,s,A,z){return A-n.easing.easeOutBounce(u,z-w,0,A,z)+s
},easeOutBounce:function(u,w,s,A,z){if((w/=z)<(1/2.75)){return A*(7.5625*w*w)+s
}else{if(w<(2/2.75)){return A*(7.5625*(w-=(1.5/2.75))*w+0.75)+s
}else{if(w<(2.5/2.75)){return A*(7.5625*(w-=(2.25/2.75))*w+0.9375)+s
}else{return A*(7.5625*(w-=(2.625/2.75))*w+0.984375)+s
}}}},easeInOutBounce:function(u,w,s,A,z){if(w<z/2){return n.easing.easeInBounce(u,w*2,0,A,z)*0.5+s
}return n.easing.easeOutBounce(u,w*2-z,0,A,z)*0.5+A*0.5+s
}})
})(jQuery);
(function(a,b){a.effects.blind=function(c){return this.queue(function(){var g=a(this),f=["position","top","bottom","left","right"];
var o=a.effects.setMode(g,c.options.mode||"hide");
var n=c.options.direction||"vertical";
a.effects.save(g,f);
g.show();
var q=a.effects.createWrapper(g).css({overflow:"hidden"});
var k=(n=="vertical")?"height":"width";
var p=(n=="vertical")?q.height():q.width();
if(o=="show"){q.css(k,0)
}var l={};
l[k]=o=="show"?p:0;
q.animate(l,c.duration,c.options.easing,function(){if(o=="hide"){g.hide()
}a.effects.restore(g,f);
a.effects.removeWrapper(g);
if(c.callback){c.callback.apply(g[0],arguments)
}g.dequeue()
})
})
}
})(jQuery);
(function(a,b){a.effects.bounce=function(c){return this.queue(function(){var k=a(this),r=["position","top","bottom","left","right"];
var q=a.effects.setMode(k,c.options.mode||"effect");
var u=c.options.direction||"up";
var f=c.options.distance||20;
var g=c.options.times||5;
var n=c.duration||250;
if(/show|hide/.test(q)){r.push("opacity")
}a.effects.save(k,r);
k.show();
a.effects.createWrapper(k);
var l=(u=="up"||u=="down")?"top":"left";
var z=(u=="up"||u=="left")?"pos":"neg";
var f=c.options.distance||(l=="top"?k.outerHeight({margin:true})/3:k.outerWidth({margin:true})/3);
if(q=="show"){k.css("opacity",0).css(l,z=="pos"?-f:f)
}if(q=="hide"){f=f/(g*2)
}if(q!="hide"){g--
}if(q=="show"){var o={opacity:1};
o[l]=(z=="pos"?"+=":"-=")+f;
k.animate(o,n/2,c.options.easing);
f=f/2;
g--
}for(var p=0;
p<g;
p++){var w={},s={};
w[l]=(z=="pos"?"-=":"+=")+f;
s[l]=(z=="pos"?"+=":"-=")+f;
k.animate(w,n/2,c.options.easing).animate(s,n/2,c.options.easing);
f=(q=="hide")?f*2:f/2
}if(q=="hide"){var o={opacity:0};
o[l]=(z=="pos"?"-=":"+=")+f;
k.animate(o,n/2,c.options.easing,function(){k.hide();
a.effects.restore(k,r);
a.effects.removeWrapper(k);
if(c.callback){c.callback.apply(this,arguments)
}})
}else{var w={},s={};
w[l]=(z=="pos"?"-=":"+=")+f;
s[l]=(z=="pos"?"+=":"-=")+f;
k.animate(w,n/2,c.options.easing).animate(s,n/2,c.options.easing,function(){a.effects.restore(k,r);
a.effects.removeWrapper(k);
if(c.callback){c.callback.apply(this,arguments)
}})
}k.queue("fx",function(){k.dequeue()
});
k.dequeue()
})
}
})(jQuery);
(function(a,b){a.effects.clip=function(c){return this.queue(function(){var l=a(this),q=["position","top","bottom","left","right","height","width"];
var p=a.effects.setMode(l,c.options.mode||"hide");
var r=c.options.direction||"vertical";
a.effects.save(l,q);
l.show();
var f=a.effects.createWrapper(l).css({overflow:"hidden"});
var k=l[0].tagName=="IMG"?f:l;
var n={size:(r=="vertical")?"height":"width",position:(r=="vertical")?"top":"left"};
var g=(r=="vertical")?k.height():k.width();
if(p=="show"){k.css(n.size,0);
k.css(n.position,g/2)
}var o={};
o[n.size]=p=="show"?g:0;
o[n.position]=p=="show"?0:g/2;
k.animate(o,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){if(p=="hide"){l.hide()
}a.effects.restore(l,q);
a.effects.removeWrapper(l);
if(c.callback){c.callback.apply(l[0],arguments)
}l.dequeue()
}})
})
}
})(jQuery);
(function(a,b){a.effects.drop=function(c){return this.queue(function(){var k=a(this),g=["position","top","bottom","left","right","opacity"];
var p=a.effects.setMode(k,c.options.mode||"hide");
var o=c.options.direction||"left";
a.effects.save(k,g);
k.show();
a.effects.createWrapper(k);
var l=(o=="up"||o=="down")?"top":"left";
var f=(o=="up"||o=="left")?"pos":"neg";
var q=c.options.distance||(l=="top"?k.outerHeight({margin:true})/2:k.outerWidth({margin:true})/2);
if(p=="show"){k.css("opacity",0).css(l,f=="pos"?-q:q)
}var n={opacity:p=="show"?1:0};
n[l]=(p=="show"?(f=="pos"?"+=":"-="):(f=="pos"?"-=":"+="))+q;
k.animate(n,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){if(p=="hide"){k.hide()
}a.effects.restore(k,g);
a.effects.removeWrapper(k);
if(c.callback){c.callback.apply(this,arguments)
}k.dequeue()
}})
})
}
})(jQuery);
(function(a,b){a.effects.explode=function(c){return this.queue(function(){var p=c.options.pieces?Math.round(Math.sqrt(c.options.pieces)):3;
var k=c.options.pieces?Math.round(Math.sqrt(c.options.pieces)):3;
c.options.mode=c.options.mode=="toggle"?(a(this).is(":visible")?"hide":"show"):c.options.mode;
var o=a(this).show().css("visibility","hidden");
var q=o.offset();
q.top-=parseInt(o.css("marginTop"),10)||0;
q.left-=parseInt(o.css("marginLeft"),10)||0;
var n=o.outerWidth(true);
var f=o.outerHeight(true);
for(var l=0;
l<p;
l++){for(var g=0;
g<k;
g++){o.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-g*(n/k),top:-l*(f/p)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:n/k,height:f/p,left:q.left+g*(n/k)+(c.options.mode=="show"?(g-Math.floor(k/2))*(n/k):0),top:q.top+l*(f/p)+(c.options.mode=="show"?(l-Math.floor(p/2))*(f/p):0),opacity:c.options.mode=="show"?0:1}).animate({left:q.left+g*(n/k)+(c.options.mode=="show"?0:(g-Math.floor(k/2))*(n/k)),top:q.top+l*(f/p)+(c.options.mode=="show"?0:(l-Math.floor(p/2))*(f/p)),opacity:c.options.mode=="show"?1:0},c.duration||500)
}}setTimeout(function(){c.options.mode=="show"?o.css({visibility:"visible"}):o.css({visibility:"visible"}).hide();
if(c.callback){c.callback.apply(o[0])
}o.dequeue();
a("div.ui-effects-explode").remove()
},c.duration||500)
})
}
})(jQuery);
(function(a,b){a.effects.fade=function(c){return this.queue(function(){var f=a(this),g=a.effects.setMode(f,c.options.mode||"hide");
f.animate({opacity:g},{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){(c.callback&&c.callback.apply(this,arguments));
f.dequeue()
}})
})
}
})(jQuery);
(function(a,b){a.effects.fold=function(c){return this.queue(function(){var k=a(this),r=["position","top","bottom","left","right"];
var o=a.effects.setMode(k,c.options.mode||"hide");
var z=c.options.size||15;
var w=!(!c.options.horizFirst);
var n=c.duration?c.duration/2:a.fx.speeds._default/2;
a.effects.save(k,r);
k.show();
var g=a.effects.createWrapper(k).css({overflow:"hidden"});
var p=((o=="show")!=w);
var l=p?["width","height"]:["height","width"];
var f=p?[g.width(),g.height()]:[g.height(),g.width()];
var q=/([0-9]+)%/.exec(z);
if(q){z=parseInt(q[1],10)/100*f[o=="hide"?0:1]
}if(o=="show"){g.css(w?{height:0,width:z}:{height:z,width:0})
}var u={},s={};
u[l[0]]=o=="show"?f[0]:z;
s[l[1]]=o=="show"?f[1]:0;
g.animate(u,n,c.options.easing).animate(s,n,c.options.easing,function(){if(o=="hide"){k.hide()
}a.effects.restore(k,r);
a.effects.removeWrapper(k);
if(c.callback){c.callback.apply(k[0],arguments)
}k.dequeue()
})
})
}
})(jQuery);
(function(a,b){a.effects.highlight=function(c){return this.queue(function(){var g=a(this),f=["backgroundImage","backgroundColor","opacity"],l=a.effects.setMode(g,c.options.mode||"show"),k={backgroundColor:g.css("backgroundColor")};
if(l=="hide"){k.opacity=0
}a.effects.save(g,f);
g.show().css({backgroundImage:"none",backgroundColor:c.options.color||"#ffff99"}).animate(k,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){(l=="hide"&&g.hide());
a.effects.restore(g,f);
(l=="show"&&!a.support.opacity&&this.style.removeAttribute("filter"));
(c.callback&&c.callback.apply(this,arguments));
g.dequeue()
}})
})
}
})(jQuery);
(function(a,b){a.effects.pulsate=function(c){return this.queue(function(){var g=a(this),k=a.effects.setMode(g,c.options.mode||"show");
times=((c.options.times||5)*2)-1;
duration=c.duration?c.duration/2:a.fx.speeds._default/2,isVisible=g.is(":visible"),animateTo=0;
if(!isVisible){g.css("opacity",0).show();
animateTo=1
}if((k=="hide"&&isVisible)||(k=="show"&&!isVisible)){times--
}for(var f=0;
f<times;
f++){g.animate({opacity:animateTo},duration,c.options.easing);
animateTo=(animateTo+1)%2
}g.animate({opacity:animateTo},duration,c.options.easing,function(){if(animateTo==0){g.hide()
}(c.callback&&c.callback.apply(this,arguments))
});
g.queue("fx",function(){g.dequeue()
}).dequeue()
})
}
})(jQuery);
(function(a,b){a.effects.puff=function(c){return this.queue(function(){var l=a(this),n=a.effects.setMode(l,c.options.mode||"hide"),k=parseInt(c.options.percent,10)||150,g=k/100,f={height:l.height(),width:l.width()};
a.extend(c.options,{fade:true,mode:n,percent:n=="hide"?k:100,from:n=="hide"?f:{height:f.height*g,width:f.width*g}});
l.effect("scale",c.options,c.duration,c.callback);
l.dequeue()
})
};
a.effects.scale=function(c){return this.queue(function(){var n=a(this);
var g=a.extend(true,{},c.options);
var q=a.effects.setMode(n,c.options.mode||"effect");
var o=parseInt(c.options.percent,10)||(parseInt(c.options.percent,10)==0?0:(q=="hide"?0:100));
var p=c.options.direction||"both";
var f=c.options.origin;
if(q!="effect"){g.origin=f||["middle","center"];
g.restore=true
}var l={height:n.height(),width:n.width()};
n.from=c.options.from||(q=="show"?{height:0,width:0}:l);
var k={y:p!="horizontal"?(o/100):1,x:p!="vertical"?(o/100):1};
n.to={height:l.height*k.y,width:l.width*k.x};
if(c.options.fade){if(q=="show"){n.from.opacity=0;
n.to.opacity=1
}if(q=="hide"){n.from.opacity=1;
n.to.opacity=0
}}g.from=n.from;
g.to=n.to;
g.mode=q;
n.effect("size",g,c.duration,c.callback);
n.dequeue()
})
};
a.effects.size=function(c){return this.queue(function(){var f=a(this),w=["position","top","bottom","left","right","width","height","overflow","opacity"];
var u=["position","top","bottom","left","right","overflow","opacity"];
var q=["width","height","overflow"];
var A=["fontSize"];
var r=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"];
var l=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"];
var n=a.effects.setMode(f,c.options.mode||"effect");
var p=c.options.restore||false;
var k=c.options.scale||"both";
var z=c.options.origin;
var g={height:f.height(),width:f.width()};
f.from=c.options.from||g;
f.to=c.options.to||g;
if(z){var o=a.effects.getBaseline(z,g);
f.from.top=(g.height-f.from.height)*o.y;
f.from.left=(g.width-f.from.width)*o.x;
f.to.top=(g.height-f.to.height)*o.y;
f.to.left=(g.width-f.to.width)*o.x
}var s={from:{y:f.from.height/g.height,x:f.from.width/g.width},to:{y:f.to.height/g.height,x:f.to.width/g.width}};
if(k=="box"||k=="both"){if(s.from.y!=s.to.y){w=w.concat(r);
f.from=a.effects.setTransition(f,r,s.from.y,f.from);
f.to=a.effects.setTransition(f,r,s.to.y,f.to)
}if(s.from.x!=s.to.x){w=w.concat(l);
f.from=a.effects.setTransition(f,l,s.from.x,f.from);
f.to=a.effects.setTransition(f,l,s.to.x,f.to)
}}if(k=="content"||k=="both"){if(s.from.y!=s.to.y){w=w.concat(A);
f.from=a.effects.setTransition(f,A,s.from.y,f.from);
f.to=a.effects.setTransition(f,A,s.to.y,f.to)
}}a.effects.save(f,p?w:u);
f.show();
a.effects.createWrapper(f);
f.css("overflow","hidden").css(f.from);
if(k=="content"||k=="both"){r=r.concat(["marginTop","marginBottom"]).concat(A);
l=l.concat(["marginLeft","marginRight"]);
q=w.concat(r).concat(l);
f.find("*[width]").each(function(){child=a(this);
if(p){a.effects.save(child,q)
}var B={height:child.height(),width:child.width()};
child.from={height:B.height*s.from.y,width:B.width*s.from.x};
child.to={height:B.height*s.to.y,width:B.width*s.to.x};
if(s.from.y!=s.to.y){child.from=a.effects.setTransition(child,r,s.from.y,child.from);
child.to=a.effects.setTransition(child,r,s.to.y,child.to)
}if(s.from.x!=s.to.x){child.from=a.effects.setTransition(child,l,s.from.x,child.from);
child.to=a.effects.setTransition(child,l,s.to.x,child.to)
}child.css(child.from);
child.animate(child.to,c.duration,c.options.easing,function(){if(p){a.effects.restore(child,q)
}})
})
}f.animate(f.to,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){if(f.to.opacity===0){f.css("opacity",f.from.opacity)
}if(n=="hide"){f.hide()
}a.effects.restore(f,p?w:u);
a.effects.removeWrapper(f);
if(c.callback){c.callback.apply(this,arguments)
}f.dequeue()
}})
})
}
})(jQuery);
(function(a,b){a.effects.shake=function(c){return this.queue(function(){var k=a(this),r=["position","top","bottom","left","right"];
var q=a.effects.setMode(k,c.options.mode||"effect");
var u=c.options.direction||"left";
var f=c.options.distance||20;
var g=c.options.times||3;
var n=c.duration||c.options.duration||140;
a.effects.save(k,r);
k.show();
a.effects.createWrapper(k);
var l=(u=="up"||u=="down")?"top":"left";
var z=(u=="up"||u=="left")?"pos":"neg";
var o={},w={},s={};
o[l]=(z=="pos"?"-=":"+=")+f;
w[l]=(z=="pos"?"+=":"-=")+f*2;
s[l]=(z=="pos"?"-=":"+=")+f*2;
k.animate(o,n,c.options.easing);
for(var p=1;
p<g;
p++){k.animate(w,n,c.options.easing).animate(s,n,c.options.easing)
}k.animate(w,n,c.options.easing).animate(o,n/2,c.options.easing,function(){a.effects.restore(k,r);
a.effects.removeWrapper(k);
if(c.callback){c.callback.apply(this,arguments)
}});
k.queue("fx",function(){k.dequeue()
});
k.dequeue()
})
}
})(jQuery);
(function(a,b){a.effects.slide=function(c){return this.queue(function(){var k=a(this),g=["position","top","bottom","left","right"];
var p=a.effects.setMode(k,c.options.mode||"show");
var o=c.options.direction||"left";
a.effects.save(k,g);
k.show();
a.effects.createWrapper(k).css({overflow:"hidden"});
var l=(o=="up"||o=="down")?"top":"left";
var f=(o=="up"||o=="left")?"pos":"neg";
var q=c.options.distance||(l=="top"?k.outerHeight({margin:true}):k.outerWidth({margin:true}));
if(p=="show"){k.css(l,f=="pos"?(isNaN(q)?"-"+q:-q):q)
}var n={};
n[l]=(p=="show"?(f=="pos"?"+=":"-="):(f=="pos"?"-=":"+="))+q;
k.animate(n,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){if(p=="hide"){k.hide()
}a.effects.restore(k,g);
a.effects.removeWrapper(k);
if(c.callback){c.callback.apply(this,arguments)
}k.dequeue()
}})
})
}
})(jQuery);
(function(a,b){a.effects.transfer=function(c){return this.queue(function(){var l=a(this),o=a(c.options.to),k=o.offset(),n={top:k.top,left:k.left,height:o.innerHeight(),width:o.innerWidth()},g=l.offset(),f=a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(c.options.className).css({top:g.top,left:g.left,height:l.innerHeight(),width:l.innerWidth(),position:"absolute"}).animate(n,c.duration,c.options.easing,function(){f.remove();
(c.callback&&c.callback.apply(l[0],arguments));
l.dequeue()
})
})
}
})(jQuery);
(function(a,b){a.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()
}},_create:function(){var c=this,f=c.options;
c.running=0;
c.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");
c.headers=c.element.find(f.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){if(f.disabled){return
}a(this).addClass("ui-state-hover")
}).bind("mouseleave.accordion",function(){if(f.disabled){return
}a(this).removeClass("ui-state-hover")
}).bind("focus.accordion",function(){if(f.disabled){return
}a(this).addClass("ui-state-focus")
}).bind("blur.accordion",function(){if(f.disabled){return
}a(this).removeClass("ui-state-focus")
});
c.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
if(f.navigation){var g=c.element.find("a").filter(f.navigationFilter).eq(0);
if(g.length){var k=g.closest(".ui-accordion-header");
if(k.length){c.active=k
}else{c.active=g.closest(".ui-accordion-content").prev()
}}}c.active=c._findActive(c.active||f.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");
c.active.next().addClass("ui-accordion-content-active");
c._createIcons();
c.resize();
c.element.attr("role","tablist");
c.headers.attr("role","tab").bind("keydown.accordion",function(l){return c._keydown(l)
}).next().attr("role","tabpanel");
c.headers.not(c.active||"").attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).next().hide();
if(!c.active.length){c.headers.eq(0).attr("tabIndex",0)
}else{c.active.attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0})
}if(!a.browser.safari){c.headers.find("a").attr("tabIndex",-1)
}if(f.event){c.headers.bind(f.event.split(" ").join(".accordion ")+".accordion",function(l){c._clickHandler.call(c,l,this);
l.preventDefault()
})
}},_createIcons:function(){var c=this.options;
if(c.icons){a("<span></span>").addClass("ui-icon "+c.icons.header).prependTo(this.headers);
this.active.children(".ui-icon").toggleClass(c.icons.header).toggleClass(c.icons.headerSelected);
this.element.addClass("ui-accordion-icons")
}},_destroyIcons:function(){this.headers.children(".ui-icon").remove();
this.element.removeClass("ui-accordion-icons")
},destroy:function(){var c=this.options;
this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex");
this.headers.find("a").removeAttr("tabIndex");
this._destroyIcons();
var f=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");
if(c.autoHeight||c.fillHeight){f.css("height","")
}return a.Widget.prototype.destroy.call(this)
},_setOption:function(c,f){a.Widget.prototype._setOption.apply(this,arguments);
if(c=="active"){this.activate(f)
}if(c=="icons"){this._destroyIcons();
if(f){this._createIcons()
}}if(c=="disabled"){this.headers.add(this.headers.next())[f?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled")
}},_keydown:function(k){if(this.options.disabled||k.altKey||k.ctrlKey){return
}var l=a.ui.keyCode,g=this.headers.length,c=this.headers.index(k.target),f=false;
switch(k.keyCode){case l.RIGHT:case l.DOWN:f=this.headers[(c+1)%g];
break;
case l.LEFT:case l.UP:f=this.headers[(c-1+g)%g];
break;
case l.SPACE:case l.ENTER:this._clickHandler({target:k.target},k.target);
k.preventDefault()
}if(f){a(k.target).attr("tabIndex",-1);
a(f).attr("tabIndex",0);
f.focus();
return false
}return true
},resize:function(){var c=this.options,g;
if(c.fillSpace){if(a.browser.msie){var f=this.element.parent().css("overflow");
this.element.parent().css("overflow","hidden")
}g=this.element.parent().height();
if(a.browser.msie){this.element.parent().css("overflow",f)
}this.headers.each(function(){g-=a(this).outerHeight(true)
});
this.headers.next().each(function(){a(this).height(Math.max(0,g-a(this).innerHeight()+a(this).height()))
}).css("overflow","auto")
}else{if(c.autoHeight){g=0;
this.headers.next().each(function(){g=Math.max(g,a(this).height("").height())
}).height(g)
}}return this
},activate:function(c){this.options.active=c;
var f=this._findActive(c)[0];
this._clickHandler({target:f},f);
return this
},_findActive:function(c){return c?typeof c==="number"?this.headers.filter(":eq("+c+")"):this.headers.not(this.headers.not(c)):c===false?a([]):this.headers.filter(":eq(0)")
},_clickHandler:function(c,l){var r=this.options;
if(r.disabled){return
}if(!c.target){if(!r.collapsible){return
}this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(r.icons.headerSelected).addClass(r.icons.header);
this.active.next().addClass("ui-accordion-content-active");
var o=this.active.next(),k={options:r,newHeader:a([]),oldHeader:r.active,newContent:a([]),oldContent:o},f=(this.active=a([]));
this._toggle(f,o,k);
return
}var n=a(c.currentTarget||l),p=n[0]===this.active[0];
r.active=r.collapsible&&p?false:this.headers.index(n);
if(this.running||(!r.collapsible&&p)){return
}var g=this.active,f=n.next(),o=this.active.next(),k={options:r,newHeader:p&&r.collapsible?a([]):n,oldHeader:this.active,newContent:p&&r.collapsible?a([]):f,oldContent:o},q=this.headers.index(this.active[0])>this.headers.index(n[0]);
this.active=p?a([]):n;
this._toggle(f,o,k,p,q);
g.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(r.icons.headerSelected).addClass(r.icons.header);
if(!p){n.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(r.icons.header).addClass(r.icons.headerSelected);
n.next().addClass("ui-accordion-content-active")
}return
},_toggle:function(c,o,l,p,q){var s=this,u=s.options;
s.toShow=c;
s.toHide=o;
s.data=l;
var f=function(){if(!s){return
}return s._completed.apply(s,arguments)
};
s._trigger("changestart",null,s.data);
s.running=o.size()===0?c.size():o.size();
if(u.animated){var k={};
if(u.collapsible&&p){k={toShow:a([]),toHide:o,complete:f,down:q,autoHeight:u.autoHeight||u.fillSpace}
}else{k={toShow:c,toHide:o,complete:f,down:q,autoHeight:u.autoHeight||u.fillSpace}
}if(!u.proxied){u.proxied=u.animated
}if(!u.proxiedDuration){u.proxiedDuration=u.duration
}u.animated=a.isFunction(u.proxied)?u.proxied(k):u.proxied;
u.duration=a.isFunction(u.proxiedDuration)?u.proxiedDuration(k):u.proxiedDuration;
var r=a.ui.accordion.animations,g=u.duration,n=u.animated;
if(n&&!r[n]&&!a.easing[n]){n="slide"
}if(!r[n]){r[n]=function(w){this.slide(w,{easing:n,duration:g||700})
}
}r[n](k)
}else{if(u.collapsible&&p){c.toggle()
}else{o.hide();
c.show()
}f(true)
}o.prev().attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).blur();
c.prev().attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}).focus()
},_completed:function(c){this.running=c?0:--this.running;
if(this.running){return
}if(this.options.clearStyle){this.toShow.add(this.toHide).css({height:"",overflow:""})
}this.toHide.removeClass("ui-accordion-content-active");
if(this.toHide.length){this.toHide.parent()[0].className=this.toHide.parent()[0].className
}this._trigger("change",null,this.data)
}});
a.extend(a.ui.accordion,{version:"1.8.18",animations:{slide:function(q,o){q=a.extend({easing:"swing",duration:300},q,o);
if(!q.toHide.size()){q.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},q);
return
}if(!q.toShow.size()){q.toHide.animate({height:"hide",paddingTop:"hide",paddingBottom:"hide"},q);
return
}var f=q.toShow.css("overflow"),n=0,g={},l={},k=["height","paddingTop","paddingBottom"],c;
var p=q.toShow;
c=p[0].style.width;
p.width(p.parent().width()-parseFloat(p.css("paddingLeft"))-parseFloat(p.css("paddingRight"))-(parseFloat(p.css("borderLeftWidth"))||0)-(parseFloat(p.css("borderRightWidth"))||0));
a.each(k,function(r,u){l[u]="hide";
var s=(""+a.css(q.toShow[0],u)).match(/^([\d+-.]+)(.*)$/);
g[u]={value:s[1],unit:s[2]||"px"}
});
q.toShow.css({height:0,overflow:"hidden"}).show();
q.toHide.filter(":hidden").each(q.complete).end().filter(":visible").animate(l,{step:function(r,s){if(s.prop=="height"){n=(s.end-s.start===0)?0:(s.now-s.start)/(s.end-s.start)
}q.toShow[0].style[s.prop]=(n*g[s.prop].value)+g[s.prop].unit
},duration:q.duration,easing:q.easing,complete:function(){if(!q.autoHeight){q.toShow.css("height","")
}q.toShow.css({width:c,overflow:f});
q.complete()
}})
},bounceslide:function(c){this.slide(c,{easing:c.down?"easeOutBounce":"swing",duration:c.down?1000:200})
}}})
})(jQuery);
(function(a,b){var c=0;
a.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var f=this,k=this.element[0].ownerDocument,g;
this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(l){if(f.options.disabled||f.element.propAttr("readOnly")){return
}g=false;
var n=a.ui.keyCode;
switch(l.keyCode){case n.PAGE_UP:f._move("previousPage",l);
break;
case n.PAGE_DOWN:f._move("nextPage",l);
break;
case n.UP:f._move("previous",l);
l.preventDefault();
break;
case n.DOWN:f._move("next",l);
l.preventDefault();
break;
case n.ENTER:case n.NUMPAD_ENTER:if(f.menu.active){g=true;
l.preventDefault()
}case n.TAB:if(!f.menu.active){return
}f.menu.select(l);
break;
case n.ESCAPE:f.element.val(f.term);
f.close(l);
break;
default:clearTimeout(f.searching);
f.searching=setTimeout(function(){if(f.term!=f.element.val()){f.selectedItem=null;
f.search(null,l)
}},f.options.delay);
break
}}).bind("keypress.autocomplete",function(l){if(g){g=false;
l.preventDefault()
}}).bind("focus.autocomplete",function(){if(f.options.disabled){return
}f.selectedItem=null;
f.previous=f.element.val()
}).bind("blur.autocomplete",function(l){if(f.options.disabled){return
}clearTimeout(f.searching);
f.closing=setTimeout(function(){f.close(l);
f._change(l)
},150)
});
this._initSource();
this.response=function(){return f._response.apply(f,arguments)
};
this.menu=a("<ul></ul>").addClass("ui-autocomplete").appendTo(a(this.options.appendTo||"body",k)[0]).mousedown(function(l){var n=f.menu.element[0];
if(!a(l.target).closest(".ui-menu-item").length){setTimeout(function(){a(document).one("mousedown",function(o){if(o.target!==f.element[0]&&o.target!==n&&!a.ui.contains(n,o.target)){f.close()
}})
},1)
}setTimeout(function(){clearTimeout(f.closing)
},13)
}).menu({focus:function(n,o){var l=o.item.data("item.autocomplete");
if(false!==f._trigger("focus",n,{item:l})){if(/^key/.test(n.originalEvent.type)){f.element.val(l.value)
}}},selected:function(o,p){var n=p.item.data("item.autocomplete"),l=f.previous;
if(f.element[0]!==k.activeElement){f.element.focus();
f.previous=l;
setTimeout(function(){f.previous=l;
f.selectedItem=n
},1)
}if(false!==f._trigger("select",o,{item:n})){f.element.val(n.value)
}f.term=f.element.val();
f.close(o);
f.selectedItem=n
},blur:function(l,n){if(f.menu.element.is(":visible")&&(f.element.val()!==f.term)){f.element.val(f.term)
}}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");
if(a.fn.bgiframe){this.menu.element.bgiframe()
}f.beforeunloadHandler=function(){f.element.removeAttr("autocomplete")
};
a(window).bind("beforeunload",f.beforeunloadHandler)
},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");
this.menu.element.remove();
a(window).unbind("beforeunload",this.beforeunloadHandler);
a.Widget.prototype.destroy.call(this)
},_setOption:function(f,g){a.Widget.prototype._setOption.apply(this,arguments);
if(f==="source"){this._initSource()
}if(f==="appendTo"){this.menu.element.appendTo(a(g||"body",this.element[0].ownerDocument)[0])
}if(f==="disabled"&&g&&this.xhr){this.xhr.abort()
}},_initSource:function(){var f=this,k,g;
if(a.isArray(this.options.source)){k=this.options.source;
this.source=function(n,l){l(a.ui.autocomplete.filter(k,n.term))
}
}else{if(typeof this.options.source==="string"){g=this.options.source;
this.source=function(n,l){if(f.xhr){f.xhr.abort()
}f.xhr=a.ajax({url:g,data:n,dataType:"json",context:{autocompleteRequest:++c},success:function(p,o){if(this.autocompleteRequest===c){l(p)
}},error:function(){if(this.autocompleteRequest===c){l([])
}}})
}
}else{this.source=this.options.source
}}},search:function(g,f){g=g!=null?g:this.element.val();
this.term=this.element.val();
if(g.length<this.options.minLength){return this.close(f)
}clearTimeout(this.closing);
if(this._trigger("search",f)===false){return
}return this._search(g)
},_search:function(f){this.pending++;
this.element.addClass("ui-autocomplete-loading");
this.source({term:f},this.response)
},_response:function(f){if(!this.options.disabled&&f&&f.length){f=this._normalize(f);
this._suggest(f);
this._trigger("open")
}else{this.close()
}this.pending--;
if(!this.pending){this.element.removeClass("ui-autocomplete-loading")
}},close:function(f){clearTimeout(this.closing);
if(this.menu.element.is(":visible")){this.menu.element.hide();
this.menu.deactivate();
this._trigger("close",f)
}},_change:function(f){if(this.previous!==this.element.val()){this._trigger("change",f,{item:this.selectedItem})
}},_normalize:function(f){if(f.length&&f[0].label&&f[0].value){return f
}return a.map(f,function(g){if(typeof g==="string"){return{label:g,value:g}
}return a.extend({label:g.label||g.value,value:g.value||g.label},g)
})
},_suggest:function(f){var g=this.menu.element.empty().zIndex(this.element.zIndex()+1);
this._renderMenu(g,f);
this.menu.deactivate();
this.menu.refresh();
g.show();
this._resizeMenu();
g.position(a.extend({of:this.element},this.options.position));
if(this.options.autoFocus){this.menu.next(new a.Event("mouseover"))
}},_resizeMenu:function(){var f=this.menu.element;
f.outerWidth(Math.max(f.width("").outerWidth()+1,this.element.outerWidth()))
},_renderMenu:function(k,g){var f=this;
a.each(g,function(l,n){f._renderItem(k,n)
})
},_renderItem:function(f,g){return a("<li></li>").data("item.autocomplete",g).append(a("<a></a>").text(g.label)).appendTo(f)
},_move:function(g,f){if(!this.menu.element.is(":visible")){this.search(null,f);
return
}if(this.menu.first()&&/^previous/.test(g)||this.menu.last()&&/^next/.test(g)){this.element.val(this.term);
this.menu.deactivate();
return
}this.menu[g](f)
},widget:function(){return this.menu.element
}});
a.extend(a.ui.autocomplete,{escapeRegex:function(f){return f.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")
},filter:function(k,f){var g=new RegExp(a.ui.autocomplete.escapeRegex(f),"i");
return a.grep(k,function(l){return g.test(l.label||l.value||l)
})
}})
}(jQuery));
(function(a){a.widget("ui.menu",{_create:function(){var b=this;
this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(c){if(!a(c.target).closest(".ui-menu-item a").length){return
}c.preventDefault();
b.select(c)
});
this.refresh()
},refresh:function(){var c=this;
var b=this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem");
b.children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(f){c.activate(f,a(this).parent())
}).mouseleave(function(){c.deactivate()
})
},activate:function(g,f){this.deactivate();
if(this.hasScroll()){var k=f.offset().top-this.element.offset().top,b=this.element.scrollTop(),c=this.element.height();
if(k<0){this.element.scrollTop(b+k)
}else{if(k>=c){this.element.scrollTop(b+k-c+f.height())
}}}this.active=f.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();
this._trigger("focus",g,{item:f})
},deactivate:function(){if(!this.active){return
}this.active.children("a").removeClass("ui-state-hover").removeAttr("id");
this._trigger("blur");
this.active=null
},next:function(b){this.move("next",".ui-menu-item:first",b)
},previous:function(b){this.move("prev",".ui-menu-item:last",b)
},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length
},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length
},move:function(g,f,c){if(!this.active){this.activate(c,this.element.children(f));
return
}var b=this.active[g+"All"](".ui-menu-item").eq(0);
if(b.length){this.activate(c,b)
}else{this.activate(c,this.element.children(f))
}},nextPage:function(f){if(this.hasScroll()){if(!this.active||this.last()){this.activate(f,this.element.children(".ui-menu-item:first"));
return
}var g=this.active.offset().top,c=this.element.height(),b=this.element.children(".ui-menu-item").filter(function(){var k=a(this).offset().top-g-c+a(this).height();
return k<10&&k>-10
});
if(!b.length){b=this.element.children(".ui-menu-item:last")
}this.activate(f,b)
}else{this.activate(f,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))
}},previousPage:function(c){if(this.hasScroll()){if(!this.active||this.first()){this.activate(c,this.element.children(".ui-menu-item:last"));
return
}var f=this.active.offset().top,b=this.element.height();
result=this.element.children(".ui-menu-item").filter(function(){var g=a(this).offset().top-f+b-a(this).height();
return g<10&&g>-10
});
if(!result.length){result=this.element.children(".ui-menu-item:first")
}this.activate(c,result)
}else{this.activate(c,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))
}},hasScroll:function(){return this.element.height()<this.element[a.fn.prop?"prop":"attr"]("scrollHeight")
},select:function(b){this._trigger("selected",b,{item:this.active})
}})
}(jQuery));
(function(k,b){var q,g,a,n,o="ui-button ui-widget ui-state-default ui-corner-all",c="ui-state-hover ui-state-active ",l="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",p=function(){var r=k(this).find(":ui-button");
setTimeout(function(){r.button("refresh")
},1)
},f=function(s){var r=s.name,u=s.form,w=k([]);
if(r){if(u){w=k(u).find("[name='"+r+"']")
}else{w=k("[name='"+r+"']",s.ownerDocument).filter(function(){return !this.form
})
}}return w
};
k.widget("ui.button",{options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",p);
if(typeof this.options.disabled!=="boolean"){this.options.disabled=!!this.element.propAttr("disabled")
}else{this.element.propAttr("disabled",this.options.disabled)
}this._determineButtonType();
this.hasTitle=!!this.buttonElement.attr("title");
var r=this,u=this.options,w=this.type==="checkbox"||this.type==="radio",z="ui-state-hover"+(!w?" ui-state-active":""),s="ui-state-focus";
if(u.label===null){u.label=this.buttonElement.html()
}this.buttonElement.addClass(o).attr("role","button").bind("mouseenter.button",function(){if(u.disabled){return
}k(this).addClass("ui-state-hover");
if(this===q){k(this).addClass("ui-state-active")
}}).bind("mouseleave.button",function(){if(u.disabled){return
}k(this).removeClass(z)
}).bind("click.button",function(A){if(u.disabled){A.preventDefault();
A.stopImmediatePropagation()
}});
this.element.bind("focus.button",function(){r.buttonElement.addClass(s)
}).bind("blur.button",function(){r.buttonElement.removeClass(s)
});
if(w){this.element.bind("change.button",function(){if(n){return
}r.refresh()
});
this.buttonElement.bind("mousedown.button",function(A){if(u.disabled){return
}n=false;
g=A.pageX;
a=A.pageY
}).bind("mouseup.button",function(A){if(u.disabled){return
}if(g!==A.pageX||a!==A.pageY){n=true
}})
}if(this.type==="checkbox"){this.buttonElement.bind("click.button",function(){if(u.disabled||n){return false
}k(this).toggleClass("ui-state-active");
r.buttonElement.attr("aria-pressed",r.element[0].checked)
})
}else{if(this.type==="radio"){this.buttonElement.bind("click.button",function(){if(u.disabled||n){return false
}k(this).addClass("ui-state-active");
r.buttonElement.attr("aria-pressed","true");
var A=r.element[0];
f(A).not(A).map(function(){return k(this).button("widget")[0]
}).removeClass("ui-state-active").attr("aria-pressed","false")
})
}else{this.buttonElement.bind("mousedown.button",function(){if(u.disabled){return false
}k(this).addClass("ui-state-active");
q=this;
k(document).one("mouseup",function(){q=null
})
}).bind("mouseup.button",function(){if(u.disabled){return false
}k(this).removeClass("ui-state-active")
}).bind("keydown.button",function(A){if(u.disabled){return false
}if(A.keyCode==k.ui.keyCode.SPACE||A.keyCode==k.ui.keyCode.ENTER){k(this).addClass("ui-state-active")
}}).bind("keyup.button",function(){k(this).removeClass("ui-state-active")
});
if(this.buttonElement.is("a")){this.buttonElement.keyup(function(A){if(A.keyCode===k.ui.keyCode.SPACE){k(this).click()
}})
}}}this._setOption("disabled",u.disabled);
this._resetButton()
},_determineButtonType:function(){if(this.element.is(":checkbox")){this.type="checkbox"
}else{if(this.element.is(":radio")){this.type="radio"
}else{if(this.element.is("input")){this.type="input"
}else{this.type="button"
}}}if(this.type==="checkbox"||this.type==="radio"){var r=this.element.parents().filter(":last"),u="label[for='"+this.element.attr("id")+"']";
this.buttonElement=r.find(u);
if(!this.buttonElement.length){r=r.length?r.siblings():this.element.siblings();
this.buttonElement=r.filter(u);
if(!this.buttonElement.length){this.buttonElement=r.find(u)
}}this.element.addClass("ui-helper-hidden-accessible");
var s=this.element.is(":checked");
if(s){this.buttonElement.addClass("ui-state-active")
}this.buttonElement.attr("aria-pressed",s)
}else{this.buttonElement=this.element
}},widget:function(){return this.buttonElement
},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");
this.buttonElement.removeClass(o+" "+c+" "+l).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
if(!this.hasTitle){this.buttonElement.removeAttr("title")
}k.Widget.prototype.destroy.call(this)
},_setOption:function(r,s){k.Widget.prototype._setOption.apply(this,arguments);
if(r==="disabled"){if(s){this.element.propAttr("disabled",true)
}else{this.element.propAttr("disabled",false)
}return
}this._resetButton()
},refresh:function(){var r=this.element.is(":disabled");
if(r!==this.options.disabled){this._setOption("disabled",r)
}if(this.type==="radio"){f(this.element[0]).each(function(){if(k(this).is(":checked")){k(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true")
}else{k(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")
}})
}else{if(this.type==="checkbox"){if(this.element.is(":checked")){this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true")
}else{this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false")
}}}},_resetButton:function(){if(this.type==="input"){if(this.options.label){this.element.val(this.options.label)
}return
}var z=this.buttonElement.removeClass(l),u=k("<span></span>",this.element[0].ownerDocument).addClass("ui-button-text").html(this.options.label).appendTo(z.empty()).text(),s=this.options.icons,r=s.primary&&s.secondary,w=[];
if(s.primary||s.secondary){if(this.options.text){w.push("ui-button-text-icon"+(r?"s":(s.primary?"-primary":"-secondary")))
}if(s.primary){z.prepend("<span class='ui-button-icon-primary ui-icon "+s.primary+"'></span>")
}if(s.secondary){z.append("<span class='ui-button-icon-secondary ui-icon "+s.secondary+"'></span>")
}if(!this.options.text){w.push(r?"ui-button-icons-only":"ui-button-icon-only");
if(!this.hasTitle){z.attr("title",u)
}}}else{w.push("ui-button-text-only")
}z.addClass(w.join(" "))
}});
k.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")
},_init:function(){this.refresh()
},_setOption:function(r,s){if(r==="disabled"){this.buttons.button("option",r,s)
}k.Widget.prototype._setOption.apply(this,arguments)
},refresh:function(){var r=this.element.css("direction")==="rtl";
this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return k(this).button("widget")[0]
}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(r?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(r?"ui-corner-left":"ui-corner-right").end().end()
},destroy:function(){this.element.removeClass("ui-buttonset");
this.buttons.map(function(){return k(this).button("widget")[0]
}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");
k.Widget.prototype.destroy.call(this)
}})
}(jQuery));
(function($,undefined){$.extend($.ui,{datepicker:{version:"1.8.18"}});
var PROP_NAME="datepicker";
var dpuuid=new Date().getTime();
var instActive;
function Datepicker(){this.debug=false;
this._curInst=null;
this._keyEvent=false;
this._disabledInputs=[];
this._datepickerShowing=false;
this._inDialog=false;
this._mainDivId="ui-datepicker-div";
this._inlineClass="ui-datepicker-inline";
this._appendClass="ui-datepicker-append";
this._triggerClass="ui-datepicker-trigger";
this._dialogClass="ui-datepicker-dialog";
this._disableClass="ui-datepicker-disabled";
this._unselectableClass="ui-datepicker-unselectable";
this._currentClass="ui-datepicker-current-day";
this._dayOverClass="ui-datepicker-days-cell-over";
this.regional=[];
this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false};
$.extend(this._defaults,this.regional[""]);
this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
}$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){if(this.debug){console.log.apply("",arguments)
}},_widgetDatepicker:function(){return this.dpDiv
},setDefaults:function(settings){extendRemove(this._defaults,settings||{});
return this
},_attachDatepicker:function(target,settings){var inlineSettings=null;
for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);
if(attrValue){inlineSettings=inlineSettings||{};
try{inlineSettings[attrName]=eval(attrValue)
}catch(err){inlineSettings[attrName]=attrValue
}}}var nodeName=target.nodeName.toLowerCase();
var inline=(nodeName=="div"||nodeName=="span");
if(!target.id){this.uuid+=1;
target.id="dp"+this.uuid
}var inst=this._newInst($(target),inline);
inst.settings=$.extend({},settings||{},inlineSettings||{});
if(nodeName=="input"){this._connectDatepicker(target,inst)
}else{if(inline){this._inlineDatepicker(target,inst)
}}},_newInst:function(target,inline){var id=target[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");
return{id:id,input:target,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:inline,dpDiv:(!inline?this.dpDiv:bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')))}
},_connectDatepicker:function(target,inst){var input=$(target);
inst.append=$([]);
inst.trigger=$([]);
if(input.hasClass(this.markerClassName)){return
}this._attachments(input,inst);
input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value
}).bind("getData.datepicker",function(event,key){return this._get(inst,key)
});
this._autoSize(inst);
$.data(target,PROP_NAME,inst);
if(inst.settings.disabled){this._disableDatepicker(target)
}},_attachments:function(input,inst){var appendText=this._get(inst,"appendText");
var isRTL=this._get(inst,"isRTL");
if(inst.append){inst.append.remove()
}if(appendText){inst.append=$('<span class="'+this._appendClass+'">'+appendText+"</span>");
input[isRTL?"before":"after"](inst.append)
}input.unbind("focus",this._showDatepicker);
if(inst.trigger){inst.trigger.remove()
}var showOn=this._get(inst,"showOn");
if(showOn=="focus"||showOn=="both"){input.focus(this._showDatepicker)
}if(showOn=="button"||showOn=="both"){var buttonText=this._get(inst,"buttonText");
var buttonImage=this._get(inst,"buttonImage");
inst.trigger=$(this._get(inst,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:buttonImage,alt:buttonText,title:buttonText}):$('<button type="button"></button>').addClass(this._triggerClass).html(buttonImage==""?buttonText:$("<img/>").attr({src:buttonImage,alt:buttonText,title:buttonText})));
input[isRTL?"before":"after"](inst.trigger);
inst.trigger.click(function(){if($.datepicker._datepickerShowing&&$.datepicker._lastInput==input[0]){$.datepicker._hideDatepicker()
}else{if($.datepicker._datepickerShowing&&$.datepicker._lastInput!=input[0]){$.datepicker._hideDatepicker();
$.datepicker._showDatepicker(input[0])
}else{$.datepicker._showDatepicker(input[0])
}}return false
})
}},_autoSize:function(inst){if(this._get(inst,"autoSize")&&!inst.inline){var date=new Date(2009,12-1,20);
var dateFormat=this._get(inst,"dateFormat");
if(dateFormat.match(/[DM]/)){var findMax=function(names){var max=0;
var maxI=0;
for(var i=0;
i<names.length;
i++){if(names[i].length>max){max=names[i].length;
maxI=i
}}return maxI
};
date.setMonth(findMax(this._get(inst,(dateFormat.match(/MM/)?"monthNames":"monthNamesShort"))));
date.setDate(findMax(this._get(inst,(dateFormat.match(/DD/)?"dayNames":"dayNamesShort")))+20-date.getDay())
}inst.input.attr("size",this._formatDate(inst,date).length)
}},_inlineDatepicker:function(target,inst){var divSpan=$(target);
if(divSpan.hasClass(this.markerClassName)){return
}divSpan.addClass(this.markerClassName).append(inst.dpDiv).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value
}).bind("getData.datepicker",function(event,key){return this._get(inst,key)
});
$.data(target,PROP_NAME,inst);
this._setDate(inst,this._getDefaultDate(inst),true);
this._updateDatepicker(inst);
this._updateAlternate(inst);
if(inst.settings.disabled){this._disableDatepicker(target)
}inst.dpDiv.css("display","block")
},_dialogDatepicker:function(input,date,onSelect,settings,pos){var inst=this._dialogInst;
if(!inst){this.uuid+=1;
var id="dp"+this.uuid;
this._dialogInput=$('<input type="text" id="'+id+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');
this._dialogInput.keydown(this._doKeyDown);
$("body").append(this._dialogInput);
inst=this._dialogInst=this._newInst(this._dialogInput,false);
inst.settings={};
$.data(this._dialogInput[0],PROP_NAME,inst)
}extendRemove(inst.settings,settings||{});
date=(date&&date.constructor==Date?this._formatDate(inst,date):date);
this._dialogInput.val(date);
this._pos=(pos?(pos.length?pos:[pos.pageX,pos.pageY]):null);
if(!this._pos){var browserWidth=document.documentElement.clientWidth;
var browserHeight=document.documentElement.clientHeight;
var scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;
var scrollY=document.documentElement.scrollTop||document.body.scrollTop;
this._pos=[(browserWidth/2)-100+scrollX,(browserHeight/2)-150+scrollY]
}this._dialogInput.css("left",(this._pos[0]+20)+"px").css("top",this._pos[1]+"px");
inst.settings.onSelect=onSelect;
this._inDialog=true;
this.dpDiv.addClass(this._dialogClass);
this._showDatepicker(this._dialogInput[0]);
if($.blockUI){$.blockUI(this.dpDiv)
}$.data(this._dialogInput[0],PROP_NAME,inst);
return this
},_destroyDatepicker:function(target){var $target=$(target);
var inst=$.data(target,PROP_NAME);
if(!$target.hasClass(this.markerClassName)){return
}var nodeName=target.nodeName.toLowerCase();
$.removeData(target,PROP_NAME);
if(nodeName=="input"){inst.append.remove();
inst.trigger.remove();
$target.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)
}else{if(nodeName=="div"||nodeName=="span"){$target.removeClass(this.markerClassName).empty()
}}},_enableDatepicker:function(target){var $target=$(target);
var inst=$.data(target,PROP_NAME);
if(!$target.hasClass(this.markerClassName)){return
}var nodeName=target.nodeName.toLowerCase();
if(nodeName=="input"){target.disabled=false;
inst.trigger.filter("button").each(function(){this.disabled=false
}).end().filter("img").css({opacity:"1.0",cursor:""})
}else{if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);
inline.children().removeClass("ui-state-disabled");
inline.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")
}}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)
})
},_disableDatepicker:function(target){var $target=$(target);
var inst=$.data(target,PROP_NAME);
if(!$target.hasClass(this.markerClassName)){return
}var nodeName=target.nodeName.toLowerCase();
if(nodeName=="input"){target.disabled=true;
inst.trigger.filter("button").each(function(){this.disabled=true
}).end().filter("img").css({opacity:"0.5",cursor:"default"})
}else{if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);
inline.children().addClass("ui-state-disabled");
inline.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled","disabled")
}}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)
});
this._disabledInputs[this._disabledInputs.length]=target
},_isDisabledDatepicker:function(target){if(!target){return false
}for(var i=0;
i<this._disabledInputs.length;
i++){if(this._disabledInputs[i]==target){return true
}}return false
},_getInst:function(target){try{return $.data(target,PROP_NAME)
}catch(err){throw"Missing instance data for this datepicker"
}},_optionDatepicker:function(target,name,value){var inst=this._getInst(target);
if(arguments.length==2&&typeof name=="string"){return(name=="defaults"?$.extend({},$.datepicker._defaults):(inst?(name=="all"?$.extend({},inst.settings):this._get(inst,name)):null))
}var settings=name||{};
if(typeof name=="string"){settings={};
settings[name]=value
}if(inst){if(this._curInst==inst){this._hideDatepicker()
}var date=this._getDateDatepicker(target,true);
var minDate=this._getMinMaxDate(inst,"min");
var maxDate=this._getMinMaxDate(inst,"max");
extendRemove(inst.settings,settings);
if(minDate!==null&&settings.dateFormat!==undefined&&settings.minDate===undefined){inst.settings.minDate=this._formatDate(inst,minDate)
}if(maxDate!==null&&settings.dateFormat!==undefined&&settings.maxDate===undefined){inst.settings.maxDate=this._formatDate(inst,maxDate)
}this._attachments($(target),inst);
this._autoSize(inst);
this._setDate(inst,date);
this._updateAlternate(inst);
this._updateDatepicker(inst)
}},_changeDatepicker:function(target,name,value){this._optionDatepicker(target,name,value)
},_refreshDatepicker:function(target){var inst=this._getInst(target);
if(inst){this._updateDatepicker(inst)
}},_setDateDatepicker:function(target,date){var inst=this._getInst(target);
if(inst){this._setDate(inst,date);
this._updateDatepicker(inst);
this._updateAlternate(inst)
}},_getDateDatepicker:function(target,noDefault){var inst=this._getInst(target);
if(inst&&!inst.inline){this._setDateFromField(inst,noDefault)
}return(inst?this._getDate(inst):null)
},_doKeyDown:function(event){var inst=$.datepicker._getInst(event.target);
var handled=true;
var isRTL=inst.dpDiv.is(".ui-datepicker-rtl");
inst._keyEvent=true;
if($.datepicker._datepickerShowing){switch(event.keyCode){case 9:$.datepicker._hideDatepicker();
handled=false;
break;
case 13:var sel=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",inst.dpDiv);
if(sel[0]){$.datepicker._selectDay(event.target,inst.selectedMonth,inst.selectedYear,sel[0])
}var onSelect=$.datepicker._get(inst,"onSelect");
if(onSelect){var dateStr=$.datepicker._formatDate(inst);
onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst])
}else{$.datepicker._hideDatepicker()
}return false;
break;
case 27:$.datepicker._hideDatepicker();
break;
case 33:$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M");
break;
case 34:$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M");
break;
case 35:if(event.ctrlKey||event.metaKey){$.datepicker._clearDate(event.target)
}handled=event.ctrlKey||event.metaKey;
break;
case 36:if(event.ctrlKey||event.metaKey){$.datepicker._gotoToday(event.target)
}handled=event.ctrlKey||event.metaKey;
break;
case 37:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?+1:-1),"D")
}handled=event.ctrlKey||event.metaKey;
if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M")
}break;
case 38:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,-7,"D")
}handled=event.ctrlKey||event.metaKey;
break;
case 39:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?-1:+1),"D")
}handled=event.ctrlKey||event.metaKey;
if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M")
}break;
case 40:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,+7,"D")
}handled=event.ctrlKey||event.metaKey;
break;
default:handled=false
}}else{if(event.keyCode==36&&event.ctrlKey){$.datepicker._showDatepicker(this)
}else{handled=false
}}if(handled){event.preventDefault();
event.stopPropagation()
}},_doKeyPress:function(event){var inst=$.datepicker._getInst(event.target);
if($.datepicker._get(inst,"constrainInput")){var chars=$.datepicker._possibleChars($.datepicker._get(inst,"dateFormat"));
var chr=String.fromCharCode(event.charCode==undefined?event.keyCode:event.charCode);
return event.ctrlKey||event.metaKey||(chr<" "||!chars||chars.indexOf(chr)>-1)
}},_doKeyUp:function(event){var inst=$.datepicker._getInst(event.target);
if(inst.input.val()!=inst.lastVal){try{var date=$.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),(inst.input?inst.input.val():null),$.datepicker._getFormatConfig(inst));
if(date){$.datepicker._setDateFromField(inst);
$.datepicker._updateAlternate(inst);
$.datepicker._updateDatepicker(inst)
}}catch(event){$.datepicker.log(event)
}}return true
},_showDatepicker:function(input){input=input.target||input;
if(input.nodeName.toLowerCase()!="input"){input=$("input",input.parentNode)[0]
}if($.datepicker._isDisabledDatepicker(input)||$.datepicker._lastInput==input){return
}var inst=$.datepicker._getInst(input);
if($.datepicker._curInst&&$.datepicker._curInst!=inst){$.datepicker._curInst.dpDiv.stop(true,true);
if(inst&&$.datepicker._datepickerShowing){$.datepicker._hideDatepicker($.datepicker._curInst.input[0])
}}var beforeShow=$.datepicker._get(inst,"beforeShow");
var beforeShowSettings=beforeShow?beforeShow.apply(input,[input,inst]):{};
if(beforeShowSettings===false){return
}extendRemove(inst.settings,beforeShowSettings);
inst.lastVal=null;
$.datepicker._lastInput=input;
$.datepicker._setDateFromField(inst);
if($.datepicker._inDialog){input.value=""
}if(!$.datepicker._pos){$.datepicker._pos=$.datepicker._findPos(input);
$.datepicker._pos[1]+=input.offsetHeight
}var isFixed=false;
$(input).parents().each(function(){isFixed|=$(this).css("position")=="fixed";
return !isFixed
});
if(isFixed&&$.browser.opera){$.datepicker._pos[0]-=document.documentElement.scrollLeft;
$.datepicker._pos[1]-=document.documentElement.scrollTop
}var offset={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};
$.datepicker._pos=null;
inst.dpDiv.empty();
inst.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});
$.datepicker._updateDatepicker(inst);
offset=$.datepicker._checkOffset(inst,offset,isFixed);
inst.dpDiv.css({position:($.datepicker._inDialog&&$.blockUI?"static":(isFixed?"fixed":"absolute")),display:"none",left:offset.left+"px",top:offset.top+"px"});
if(!inst.inline){var showAnim=$.datepicker._get(inst,"showAnim");
var duration=$.datepicker._get(inst,"duration");
var postProcess=function(){var cover=inst.dpDiv.find("iframe.ui-datepicker-cover");
if(!!cover.length){var borders=$.datepicker._getBorders(inst.dpDiv);
cover.css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()})
}};
inst.dpDiv.zIndex($(input).zIndex()+1);
$.datepicker._datepickerShowing=true;
if($.effects&&$.effects[showAnim]){inst.dpDiv.show(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)
}else{inst.dpDiv[showAnim||"show"]((showAnim?duration:null),postProcess)
}if(!showAnim||!duration){postProcess()
}if(inst.input.is(":visible")&&!inst.input.is(":disabled")){inst.input.focus()
}$.datepicker._curInst=inst
}},_updateDatepicker:function(inst){var self=this;
self.maxRows=4;
var borders=$.datepicker._getBorders(inst.dpDiv);
instActive=inst;
inst.dpDiv.empty().append(this._generateHTML(inst));
var cover=inst.dpDiv.find("iframe.ui-datepicker-cover");
if(!!cover.length){cover.css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()})
}inst.dpDiv.find("."+this._dayOverClass+" a").mouseover();
var numMonths=this._getNumberOfMonths(inst);
var cols=numMonths[1];
var width=17;
inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
if(cols>1){inst.dpDiv.addClass("ui-datepicker-multi-"+cols).css("width",(width*cols)+"em")
}inst.dpDiv[(numMonths[0]!=1||numMonths[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");
inst.dpDiv[(this._get(inst,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");
if(inst==$.datepicker._curInst&&$.datepicker._datepickerShowing&&inst.input&&inst.input.is(":visible")&&!inst.input.is(":disabled")&&inst.input[0]!=document.activeElement){inst.input.focus()
}if(inst.yearshtml){var origyearshtml=inst.yearshtml;
setTimeout(function(){if(origyearshtml===inst.yearshtml&&inst.yearshtml){inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml)
}origyearshtml=inst.yearshtml=null
},0)
}},_getBorders:function(elem){var convert=function(value){return{thin:1,medium:2,thick:3}[value]||value
};
return[parseFloat(convert(elem.css("border-left-width"))),parseFloat(convert(elem.css("border-top-width")))]
},_checkOffset:function(inst,offset,isFixed){var dpWidth=inst.dpDiv.outerWidth();
var dpHeight=inst.dpDiv.outerHeight();
var inputWidth=inst.input?inst.input.outerWidth():0;
var inputHeight=inst.input?inst.input.outerHeight():0;
var viewWidth=document.documentElement.clientWidth+$(document).scrollLeft();
var viewHeight=document.documentElement.clientHeight+$(document).scrollTop();
offset.left-=(this._get(inst,"isRTL")?(dpWidth-inputWidth):0);
offset.left-=(isFixed&&offset.left==inst.input.offset().left)?$(document).scrollLeft():0;
offset.top-=(isFixed&&offset.top==(inst.input.offset().top+inputHeight))?$(document).scrollTop():0;
offset.left-=Math.min(offset.left,(offset.left+dpWidth>viewWidth&&viewWidth>dpWidth)?Math.abs(offset.left+dpWidth-viewWidth):0);
offset.top-=Math.min(offset.top,(offset.top+dpHeight>viewHeight&&viewHeight>dpHeight)?Math.abs(dpHeight+inputHeight):0);
return offset
},_findPos:function(obj){var inst=this._getInst(obj);
var isRTL=this._get(inst,"isRTL");
while(obj&&(obj.type=="hidden"||obj.nodeType!=1||$.expr.filters.hidden(obj))){obj=obj[isRTL?"previousSibling":"nextSibling"]
}var position=$(obj).offset();
return[position.left,position.top]
},_hideDatepicker:function(input){var inst=this._curInst;
if(!inst||(input&&inst!=$.data(input,PROP_NAME))){return
}if(this._datepickerShowing){var showAnim=this._get(inst,"showAnim");
var duration=this._get(inst,"duration");
var self=this;
var postProcess=function(){$.datepicker._tidyDialog(inst);
self._curInst=null
};
if($.effects&&$.effects[showAnim]){inst.dpDiv.hide(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)
}else{inst.dpDiv[(showAnim=="slideDown"?"slideUp":(showAnim=="fadeIn"?"fadeOut":"hide"))]((showAnim?duration:null),postProcess)
}if(!showAnim){postProcess()
}this._datepickerShowing=false;
var onClose=this._get(inst,"onClose");
if(onClose){onClose.apply((inst.input?inst.input[0]:null),[(inst.input?inst.input.val():""),inst])
}this._lastInput=null;
if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});
if($.blockUI){$.unblockUI();
$("body").append(this.dpDiv)
}}this._inDialog=false
}},_tidyDialog:function(inst){inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
},_checkExternalClick:function(event){if(!$.datepicker._curInst){return
}var $target=$(event.target),inst=$.datepicker._getInst($target[0]);
if((($target[0].id!=$.datepicker._mainDivId&&$target.parents("#"+$.datepicker._mainDivId).length==0&&!$target.hasClass($.datepicker.markerClassName)&&!$target.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&!($.datepicker._inDialog&&$.blockUI)))||($target.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=inst)){$.datepicker._hideDatepicker()
}},_adjustDate:function(id,offset,period){var target=$(id);
var inst=this._getInst(target[0]);
if(this._isDisabledDatepicker(target[0])){return
}this._adjustInstDate(inst,offset+(period=="M"?this._get(inst,"showCurrentAtPos"):0),period);
this._updateDatepicker(inst)
},_gotoToday:function(id){var target=$(id);
var inst=this._getInst(target[0]);
if(this._get(inst,"gotoCurrent")&&inst.currentDay){inst.selectedDay=inst.currentDay;
inst.drawMonth=inst.selectedMonth=inst.currentMonth;
inst.drawYear=inst.selectedYear=inst.currentYear
}else{var date=new Date();
inst.selectedDay=date.getDate();
inst.drawMonth=inst.selectedMonth=date.getMonth();
inst.drawYear=inst.selectedYear=date.getFullYear()
}this._notifyChange(inst);
this._adjustDate(target)
},_selectMonthYear:function(id,select,period){var target=$(id);
var inst=this._getInst(target[0]);
inst["selected"+(period=="M"?"Month":"Year")]=inst["draw"+(period=="M"?"Month":"Year")]=parseInt(select.options[select.selectedIndex].value,10);
this._notifyChange(inst);
this._adjustDate(target)
},_selectDay:function(id,month,year,td){var target=$(id);
if($(td).hasClass(this._unselectableClass)||this._isDisabledDatepicker(target[0])){return
}var inst=this._getInst(target[0]);
inst.selectedDay=inst.currentDay=$("a",td).html();
inst.selectedMonth=inst.currentMonth=month;
inst.selectedYear=inst.currentYear=year;
this._selectDate(id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear))
},_clearDate:function(id){var target=$(id);
var inst=this._getInst(target[0]);
this._selectDate(target,"")
},_selectDate:function(id,dateStr){var target=$(id);
var inst=this._getInst(target[0]);
dateStr=(dateStr!=null?dateStr:this._formatDate(inst));
if(inst.input){inst.input.val(dateStr)
}this._updateAlternate(inst);
var onSelect=this._get(inst,"onSelect");
if(onSelect){onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst])
}else{if(inst.input){inst.input.trigger("change")
}}if(inst.inline){this._updateDatepicker(inst)
}else{this._hideDatepicker();
this._lastInput=inst.input[0];
if(typeof(inst.input[0])!="object"){inst.input.focus()
}this._lastInput=null
}},_updateAlternate:function(inst){var altField=this._get(inst,"altField");
if(altField){var altFormat=this._get(inst,"altFormat")||this._get(inst,"dateFormat");
var date=this._getDate(inst);
var dateStr=this.formatDate(altFormat,date,this._getFormatConfig(inst));
$(altField).each(function(){$(this).val(dateStr)
})
}},noWeekends:function(date){var day=date.getDay();
return[(day>0&&day<6),""]
},iso8601Week:function(date){var checkDate=new Date(date.getTime());
checkDate.setDate(checkDate.getDate()+4-(checkDate.getDay()||7));
var time=checkDate.getTime();
checkDate.setMonth(0);
checkDate.setDate(1);
return Math.floor(Math.round((time-checkDate)/86400000)/7)+1
},parseDate:function(format,value,settings){if(format==null||value==null){throw"Invalid arguments"
}value=(typeof value=="object"?value.toString():value+"");
if(value==""){return null
}var shortYearCutoff=(settings?settings.shortYearCutoff:null)||this._defaults.shortYearCutoff;
shortYearCutoff=(typeof shortYearCutoff!="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));
var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;
var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;
var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;
var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;
var year=-1;
var month=-1;
var day=-1;
var doy=-1;
var literal=false;
var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);
if(matches){iFormat++
}return matches
};
var getNumber=function(match){var isDoubled=lookAhead(match);
var size=(match=="@"?14:(match=="!"?20:(match=="y"&&isDoubled?4:(match=="o"?3:2))));
var digits=new RegExp("^\\d{1,"+size+"}");
var num=value.substring(iValue).match(digits);
if(!num){throw"Missing number at position "+iValue
}iValue+=num[0].length;
return parseInt(num[0],10)
};
var getName=function(match,shortNames,longNames){var names=$.map(lookAhead(match)?longNames:shortNames,function(v,k){return[[k,v]]
}).sort(function(a,b){return -(a[1].length-b[1].length)
});
var index=-1;
$.each(names,function(i,pair){var name=pair[1];
if(value.substr(iValue,name.length).toLowerCase()==name.toLowerCase()){index=pair[0];
iValue+=name.length;
return false
}});
if(index!=-1){return index+1
}else{throw"Unknown name at position "+iValue
}};
var checkLiteral=function(){if(value.charAt(iValue)!=format.charAt(iFormat)){throw"Unexpected literal at position "+iValue
}iValue++
};
var iValue=0;
for(var iFormat=0;
iFormat<format.length;
iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false
}else{checkLiteral()
}}else{switch(format.charAt(iFormat)){case"d":day=getNumber("d");
break;
case"D":getName("D",dayNamesShort,dayNames);
break;
case"o":doy=getNumber("o");
break;
case"m":month=getNumber("m");
break;
case"M":month=getName("M",monthNamesShort,monthNames);
break;
case"y":year=getNumber("y");
break;
case"@":var date=new Date(getNumber("@"));
year=date.getFullYear();
month=date.getMonth()+1;
day=date.getDate();
break;
case"!":var date=new Date((getNumber("!")-this._ticksTo1970)/10000);
year=date.getFullYear();
month=date.getMonth()+1;
day=date.getDate();
break;
case"'":if(lookAhead("'")){checkLiteral()
}else{literal=true
}break;
default:checkLiteral()
}}}if(iValue<value.length){throw"Extra/unparsed characters found in date: "+value.substring(iValue)
}if(year==-1){year=new Date().getFullYear()
}else{if(year<100){year+=new Date().getFullYear()-new Date().getFullYear()%100+(year<=shortYearCutoff?0:-100)
}}if(doy>-1){month=1;
day=doy;
do{var dim=this._getDaysInMonth(year,month-1);
if(day<=dim){break
}month++;
day-=dim
}while(true)
}var date=this._daylightSavingAdjust(new Date(year,month-1,day));
if(date.getFullYear()!=year||date.getMonth()+1!=month||date.getDate()!=day){throw"Invalid date"
}return date
},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*10000000),formatDate:function(format,date,settings){if(!date){return""
}var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;
var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;
var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;
var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;
var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);
if(matches){iFormat++
}return matches
};
var formatNumber=function(match,value,len){var num=""+value;
if(lookAhead(match)){while(num.length<len){num="0"+num
}}return num
};
var formatName=function(match,value,shortNames,longNames){return(lookAhead(match)?longNames[value]:shortNames[value])
};
var output="";
var literal=false;
if(date){for(var iFormat=0;
iFormat<format.length;
iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false
}else{output+=format.charAt(iFormat)
}}else{switch(format.charAt(iFormat)){case"d":output+=formatNumber("d",date.getDate(),2);
break;
case"D":output+=formatName("D",date.getDay(),dayNamesShort,dayNames);
break;
case"o":output+=formatNumber("o",Math.round((new Date(date.getFullYear(),date.getMonth(),date.getDate()).getTime()-new Date(date.getFullYear(),0,0).getTime())/86400000),3);
break;
case"m":output+=formatNumber("m",date.getMonth()+1,2);
break;
case"M":output+=formatName("M",date.getMonth(),monthNamesShort,monthNames);
break;
case"y":output+=(lookAhead("y")?date.getFullYear():(date.getYear()%100<10?"0":"")+date.getYear()%100);
break;
case"@":output+=date.getTime();
break;
case"!":output+=date.getTime()*10000+this._ticksTo1970;
break;
case"'":if(lookAhead("'")){output+="'"
}else{literal=true
}break;
default:output+=format.charAt(iFormat)
}}}}return output
},_possibleChars:function(format){var chars="";
var literal=false;
var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);
if(matches){iFormat++
}return matches
};
for(var iFormat=0;
iFormat<format.length;
iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false
}else{chars+=format.charAt(iFormat)
}}else{switch(format.charAt(iFormat)){case"d":case"m":case"y":case"@":chars+="0123456789";
break;
case"D":case"M":return null;
case"'":if(lookAhead("'")){chars+="'"
}else{literal=true
}break;
default:chars+=format.charAt(iFormat)
}}}return chars
},_get:function(inst,name){return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name]
},_setDateFromField:function(inst,noDefault){if(inst.input.val()==inst.lastVal){return
}var dateFormat=this._get(inst,"dateFormat");
var dates=inst.lastVal=inst.input?inst.input.val():null;
var date,defaultDate;
date=defaultDate=this._getDefaultDate(inst);
var settings=this._getFormatConfig(inst);
try{date=this.parseDate(dateFormat,dates,settings)||defaultDate
}catch(event){this.log(event);
dates=(noDefault?"":dates)
}inst.selectedDay=date.getDate();
inst.drawMonth=inst.selectedMonth=date.getMonth();
inst.drawYear=inst.selectedYear=date.getFullYear();
inst.currentDay=(dates?date.getDate():0);
inst.currentMonth=(dates?date.getMonth():0);
inst.currentYear=(dates?date.getFullYear():0);
this._adjustInstDate(inst)
},_getDefaultDate:function(inst){return this._restrictMinMax(inst,this._determineDate(inst,this._get(inst,"defaultDate"),new Date()))
},_determineDate:function(inst,date,defaultDate){var offsetNumeric=function(offset){var date=new Date();
date.setDate(date.getDate()+offset);
return date
};
var offsetString=function(offset){try{return $.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),offset,$.datepicker._getFormatConfig(inst))
}catch(e){}var date=(offset.toLowerCase().match(/^c/)?$.datepicker._getDate(inst):null)||new Date();
var year=date.getFullYear();
var month=date.getMonth();
var day=date.getDate();
var pattern=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;
var matches=pattern.exec(offset);
while(matches){switch(matches[2]||"d"){case"d":case"D":day+=parseInt(matches[1],10);
break;
case"w":case"W":day+=parseInt(matches[1],10)*7;
break;
case"m":case"M":month+=parseInt(matches[1],10);
day=Math.min(day,$.datepicker._getDaysInMonth(year,month));
break;
case"y":case"Y":year+=parseInt(matches[1],10);
day=Math.min(day,$.datepicker._getDaysInMonth(year,month));
break
}matches=pattern.exec(offset)
}return new Date(year,month,day)
};
var newDate=(date==null||date===""?defaultDate:(typeof date=="string"?offsetString(date):(typeof date=="number"?(isNaN(date)?defaultDate:offsetNumeric(date)):new Date(date.getTime()))));
newDate=(newDate&&newDate.toString()=="Invalid Date"?defaultDate:newDate);
if(newDate){newDate.setHours(0);
newDate.setMinutes(0);
newDate.setSeconds(0);
newDate.setMilliseconds(0)
}return this._daylightSavingAdjust(newDate)
},_daylightSavingAdjust:function(date){if(!date){return null
}date.setHours(date.getHours()>12?date.getHours()+2:0);
return date
},_setDate:function(inst,date,noChange){var clear=!date;
var origMonth=inst.selectedMonth;
var origYear=inst.selectedYear;
var newDate=this._restrictMinMax(inst,this._determineDate(inst,date,new Date()));
inst.selectedDay=inst.currentDay=newDate.getDate();
inst.drawMonth=inst.selectedMonth=inst.currentMonth=newDate.getMonth();
inst.drawYear=inst.selectedYear=inst.currentYear=newDate.getFullYear();
if((origMonth!=inst.selectedMonth||origYear!=inst.selectedYear)&&!noChange){this._notifyChange(inst)
}this._adjustInstDate(inst);
if(inst.input){inst.input.val(clear?"":this._formatDate(inst))
}},_getDate:function(inst){var startDate=(!inst.currentYear||(inst.input&&inst.input.val()=="")?null:this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));
return startDate
},_generateHTML:function(inst){var today=new Date();
today=this._daylightSavingAdjust(new Date(today.getFullYear(),today.getMonth(),today.getDate()));
var isRTL=this._get(inst,"isRTL");
var showButtonPanel=this._get(inst,"showButtonPanel");
var hideIfNoPrevNext=this._get(inst,"hideIfNoPrevNext");
var navigationAsDateFormat=this._get(inst,"navigationAsDateFormat");
var numMonths=this._getNumberOfMonths(inst);
var showCurrentAtPos=this._get(inst,"showCurrentAtPos");
var stepMonths=this._get(inst,"stepMonths");
var isMultiMonth=(numMonths[0]!=1||numMonths[1]!=1);
var currentDate=this._daylightSavingAdjust((!inst.currentDay?new Date(9999,9,9):new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));
var minDate=this._getMinMaxDate(inst,"min");
var maxDate=this._getMinMaxDate(inst,"max");
var drawMonth=inst.drawMonth-showCurrentAtPos;
var drawYear=inst.drawYear;
if(drawMonth<0){drawMonth+=12;
drawYear--
}if(maxDate){var maxDraw=this._daylightSavingAdjust(new Date(maxDate.getFullYear(),maxDate.getMonth()-(numMonths[0]*numMonths[1])+1,maxDate.getDate()));
maxDraw=(minDate&&maxDraw<minDate?minDate:maxDraw);
while(this._daylightSavingAdjust(new Date(drawYear,drawMonth,1))>maxDraw){drawMonth--;
if(drawMonth<0){drawMonth=11;
drawYear--
}}}inst.drawMonth=drawMonth;
inst.drawYear=drawYear;
var prevText=this._get(inst,"prevText");
prevText=(!navigationAsDateFormat?prevText:this.formatDate(prevText,this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepMonths,1)),this._getFormatConfig(inst)));
var prev=(this._canAdjustMonth(inst,-1,drawYear,drawMonth)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._adjustDate('#"+inst.id+"', -"+stepMonths+", 'M');\" title=\""+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>"));
var nextText=this._get(inst,"nextText");
nextText=(!navigationAsDateFormat?nextText:this.formatDate(nextText,this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepMonths,1)),this._getFormatConfig(inst)));
var next=(this._canAdjustMonth(inst,+1,drawYear,drawMonth)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._adjustDate('#"+inst.id+"', +"+stepMonths+", 'M');\" title=\""+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>"));
var currentText=this._get(inst,"currentText");
var gotoDate=(this._get(inst,"gotoCurrent")&&inst.currentDay?currentDate:today);
currentText=(!navigationAsDateFormat?currentText:this.formatDate(currentText,gotoDate,this._getFormatConfig(inst)));
var controls=(!inst.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+dpuuid+'.datepicker._hideDatepicker();">'+this._get(inst,"closeText")+"</button>":"");
var buttonPanel=(showButtonPanel)?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(isRTL?controls:"")+(this._isInRange(inst,gotoDate)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._gotoToday('#"+inst.id+"');\">"+currentText+"</button>":"")+(isRTL?"":controls)+"</div>":"";
var firstDay=parseInt(this._get(inst,"firstDay"),10);
firstDay=(isNaN(firstDay)?0:firstDay);
var showWeek=this._get(inst,"showWeek");
var dayNames=this._get(inst,"dayNames");
var dayNamesShort=this._get(inst,"dayNamesShort");
var dayNamesMin=this._get(inst,"dayNamesMin");
var monthNames=this._get(inst,"monthNames");
var monthNamesShort=this._get(inst,"monthNamesShort");
var beforeShowDay=this._get(inst,"beforeShowDay");
var showOtherMonths=this._get(inst,"showOtherMonths");
var selectOtherMonths=this._get(inst,"selectOtherMonths");
var calculateWeek=this._get(inst,"calculateWeek")||this.iso8601Week;
var defaultDate=this._getDefaultDate(inst);
var html="";
for(var row=0;
row<numMonths[0];
row++){var group="";
this.maxRows=4;
for(var col=0;
col<numMonths[1];
col++){var selectedDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,inst.selectedDay));
var cornerClass=" ui-corner-all";
var calender="";
if(isMultiMonth){calender+='<div class="ui-datepicker-group';
if(numMonths[1]>1){switch(col){case 0:calender+=" ui-datepicker-group-first";
cornerClass=" ui-corner-"+(isRTL?"right":"left");
break;
case numMonths[1]-1:calender+=" ui-datepicker-group-last";
cornerClass=" ui-corner-"+(isRTL?"left":"right");
break;
default:calender+=" ui-datepicker-group-middle";
cornerClass="";
break
}}calender+='">'
}calender+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+cornerClass+'">'+(/all|left/.test(cornerClass)&&row==0?(isRTL?next:prev):"")+(/all|right/.test(cornerClass)&&row==0?(isRTL?prev:next):"")+this._generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,row>0||col>0,monthNames,monthNamesShort)+'</div><table class="ui-datepicker-calendar"><thead><tr>';
var thead=(showWeek?'<th class="ui-datepicker-week-col">'+this._get(inst,"weekHeader")+"</th>":"");
for(var dow=0;
dow<7;
dow++){var day=(dow+firstDay)%7;
thead+="<th"+((dow+firstDay+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+dayNames[day]+'">'+dayNamesMin[day]+"</span></th>"
}calender+=thead+"</tr></thead><tbody>";
var daysInMonth=this._getDaysInMonth(drawYear,drawMonth);
if(drawYear==inst.selectedYear&&drawMonth==inst.selectedMonth){inst.selectedDay=Math.min(inst.selectedDay,daysInMonth)
}var leadDays=(this._getFirstDayOfMonth(drawYear,drawMonth)-firstDay+7)%7;
var curRows=Math.ceil((leadDays+daysInMonth)/7);
var numRows=(isMultiMonth?this.maxRows>curRows?this.maxRows:curRows:curRows);
this.maxRows=numRows;
var printDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1-leadDays));
for(var dRow=0;
dRow<numRows;
dRow++){calender+="<tr>";
var tbody=(!showWeek?"":'<td class="ui-datepicker-week-col">'+this._get(inst,"calculateWeek")(printDate)+"</td>");
for(var dow=0;
dow<7;
dow++){var daySettings=(beforeShowDay?beforeShowDay.apply((inst.input?inst.input[0]:null),[printDate]):[true,""]);
var otherMonth=(printDate.getMonth()!=drawMonth);
var unselectable=(otherMonth&&!selectOtherMonths)||!daySettings[0]||(minDate&&printDate<minDate)||(maxDate&&printDate>maxDate);
tbody+='<td class="'+((dow+firstDay+6)%7>=5?" ui-datepicker-week-end":"")+(otherMonth?" ui-datepicker-other-month":"")+((printDate.getTime()==selectedDate.getTime()&&drawMonth==inst.selectedMonth&&inst._keyEvent)||(defaultDate.getTime()==printDate.getTime()&&defaultDate.getTime()==selectedDate.getTime())?" "+this._dayOverClass:"")+(unselectable?" "+this._unselectableClass+" ui-state-disabled":"")+(otherMonth&&!showOtherMonths?"":" "+daySettings[1]+(printDate.getTime()==currentDate.getTime()?" "+this._currentClass:"")+(printDate.getTime()==today.getTime()?" ui-datepicker-today":""))+'"'+((!otherMonth||showOtherMonths)&&daySettings[2]?' title="'+daySettings[2]+'"':"")+(unselectable?"":' onclick="DP_jQuery_'+dpuuid+".datepicker._selectDay('#"+inst.id+"',"+printDate.getMonth()+","+printDate.getFullYear()+', this);return false;"')+">"+(otherMonth&&!showOtherMonths?"&#xa0;":(unselectable?'<span class="ui-state-default">'+printDate.getDate()+"</span>":'<a class="ui-state-default'+(printDate.getTime()==today.getTime()?" ui-state-highlight":"")+(printDate.getTime()==currentDate.getTime()?" ui-state-active":"")+(otherMonth?" ui-priority-secondary":"")+'" href="#">'+printDate.getDate()+"</a>"))+"</td>";
printDate.setDate(printDate.getDate()+1);
printDate=this._daylightSavingAdjust(printDate)
}calender+=tbody+"</tr>"
}drawMonth++;
if(drawMonth>11){drawMonth=0;
drawYear++
}calender+="</tbody></table>"+(isMultiMonth?"</div>"+((numMonths[0]>0&&col==numMonths[1]-1)?'<div class="ui-datepicker-row-break"></div>':""):"");
group+=calender
}html+=group
}html+=buttonPanel+($.browser.msie&&parseInt($.browser.version,10)<7&&!inst.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':"");
inst._keyEvent=false;
return html
},_generateMonthYearHeader:function(inst,drawMonth,drawYear,minDate,maxDate,secondary,monthNames,monthNamesShort){var changeMonth=this._get(inst,"changeMonth");
var changeYear=this._get(inst,"changeYear");
var showMonthAfterYear=this._get(inst,"showMonthAfterYear");
var html='<div class="ui-datepicker-title">';
var monthHtml="";
if(secondary||!changeMonth){monthHtml+='<span class="ui-datepicker-month">'+monthNames[drawMonth]+"</span>"
}else{var inMinYear=(minDate&&minDate.getFullYear()==drawYear);
var inMaxYear=(maxDate&&maxDate.getFullYear()==drawYear);
monthHtml+='<select class="ui-datepicker-month" onchange="DP_jQuery_'+dpuuid+".datepicker._selectMonthYear('#"+inst.id+"', this, 'M');\" >";
for(var month=0;
month<12;
month++){if((!inMinYear||month>=minDate.getMonth())&&(!inMaxYear||month<=maxDate.getMonth())){monthHtml+='<option value="'+month+'"'+(month==drawMonth?' selected="selected"':"")+">"+monthNamesShort[month]+"</option>"
}}monthHtml+="</select>"
}if(!showMonthAfterYear){html+=monthHtml+(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")
}if(!inst.yearshtml){inst.yearshtml="";
if(secondary||!changeYear){html+='<span class="ui-datepicker-year">'+drawYear+"</span>"
}else{var years=this._get(inst,"yearRange").split(":");
var thisYear=new Date().getFullYear();
var determineYear=function(value){var year=(value.match(/c[+-].*/)?drawYear+parseInt(value.substring(1),10):(value.match(/[+-].*/)?thisYear+parseInt(value,10):parseInt(value,10)));
return(isNaN(year)?thisYear:year)
};
var year=determineYear(years[0]);
var endYear=Math.max(year,determineYear(years[1]||""));
year=(minDate?Math.max(year,minDate.getFullYear()):year);
endYear=(maxDate?Math.min(endYear,maxDate.getFullYear()):endYear);
inst.yearshtml+='<select class="ui-datepicker-year" onchange="DP_jQuery_'+dpuuid+".datepicker._selectMonthYear('#"+inst.id+"', this, 'Y');\" >";
for(;
year<=endYear;
year++){inst.yearshtml+='<option value="'+year+'"'+(year==drawYear?' selected="selected"':"")+">"+year+"</option>"
}inst.yearshtml+="</select>";
html+=inst.yearshtml;
inst.yearshtml=null
}}html+=this._get(inst,"yearSuffix");
if(showMonthAfterYear){html+=(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")+monthHtml
}html+="</div>";
return html
},_adjustInstDate:function(inst,offset,period){var year=inst.drawYear+(period=="Y"?offset:0);
var month=inst.drawMonth+(period=="M"?offset:0);
var day=Math.min(inst.selectedDay,this._getDaysInMonth(year,month))+(period=="D"?offset:0);
var date=this._restrictMinMax(inst,this._daylightSavingAdjust(new Date(year,month,day)));
inst.selectedDay=date.getDate();
inst.drawMonth=inst.selectedMonth=date.getMonth();
inst.drawYear=inst.selectedYear=date.getFullYear();
if(period=="M"||period=="Y"){this._notifyChange(inst)
}},_restrictMinMax:function(inst,date){var minDate=this._getMinMaxDate(inst,"min");
var maxDate=this._getMinMaxDate(inst,"max");
var newDate=(minDate&&date<minDate?minDate:date);
newDate=(maxDate&&newDate>maxDate?maxDate:newDate);
return newDate
},_notifyChange:function(inst){var onChange=this._get(inst,"onChangeMonthYear");
if(onChange){onChange.apply((inst.input?inst.input[0]:null),[inst.selectedYear,inst.selectedMonth+1,inst])
}},_getNumberOfMonths:function(inst){var numMonths=this._get(inst,"numberOfMonths");
return(numMonths==null?[1,1]:(typeof numMonths=="number"?[1,numMonths]:numMonths))
},_getMinMaxDate:function(inst,minMax){return this._determineDate(inst,this._get(inst,minMax+"Date"),null)
},_getDaysInMonth:function(year,month){return 32-this._daylightSavingAdjust(new Date(year,month,32)).getDate()
},_getFirstDayOfMonth:function(year,month){return new Date(year,month,1).getDay()
},_canAdjustMonth:function(inst,offset,curYear,curMonth){var numMonths=this._getNumberOfMonths(inst);
var date=this._daylightSavingAdjust(new Date(curYear,curMonth+(offset<0?offset:numMonths[0]*numMonths[1]),1));
if(offset<0){date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()))
}return this._isInRange(inst,date)
},_isInRange:function(inst,date){var minDate=this._getMinMaxDate(inst,"min");
var maxDate=this._getMinMaxDate(inst,"max");
return((!minDate||date.getTime()>=minDate.getTime())&&(!maxDate||date.getTime()<=maxDate.getTime()))
},_getFormatConfig:function(inst){var shortYearCutoff=this._get(inst,"shortYearCutoff");
shortYearCutoff=(typeof shortYearCutoff!="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));
return{shortYearCutoff:shortYearCutoff,dayNamesShort:this._get(inst,"dayNamesShort"),dayNames:this._get(inst,"dayNames"),monthNamesShort:this._get(inst,"monthNamesShort"),monthNames:this._get(inst,"monthNames")}
},_formatDate:function(inst,day,month,year){if(!day){inst.currentDay=inst.selectedDay;
inst.currentMonth=inst.selectedMonth;
inst.currentYear=inst.selectedYear
}var date=(day?(typeof day=="object"?day:this._daylightSavingAdjust(new Date(year,month,day))):this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));
return this.formatDate(this._get(inst,"dateFormat"),date,this._getFormatConfig(inst))
}});
function bindHover(dpDiv){var selector="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
return dpDiv.bind("mouseout",function(event){var elem=$(event.target).closest(selector);
if(!elem.length){return
}elem.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")
}).bind("mouseover",function(event){var elem=$(event.target).closest(selector);
if($.datepicker._isDisabledDatepicker(instActive.inline?dpDiv.parent()[0]:instActive.input[0])||!elem.length){return
}elem.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
elem.addClass("ui-state-hover");
if(elem.hasClass("ui-datepicker-prev")){elem.addClass("ui-datepicker-prev-hover")
}if(elem.hasClass("ui-datepicker-next")){elem.addClass("ui-datepicker-next-hover")
}})
}function extendRemove(target,props){$.extend(target,props);
for(var name in props){if(props[name]==null||props[name]==undefined){target[name]=props[name]
}}return target
}function isArray(a){return(a&&(($.browser.safari&&typeof a=="object"&&a.length)||(a.constructor&&a.constructor.toString().match(/\Array\(\)/))))
}$.fn.datepicker=function(options){if(!this.length){return this
}if(!$.datepicker.initialized){$(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv);
$.datepicker.initialized=true
}var otherArgs=Array.prototype.slice.call(arguments,1);
if(typeof options=="string"&&(options=="isDisabled"||options=="getDate"||options=="widget")){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))
}if(options=="option"&&arguments.length==2&&typeof arguments[1]=="string"){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))
}return this.each(function(){typeof options=="string"?$.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this].concat(otherArgs)):$.datepicker._attachDatepicker(this,options)
})
};
$.datepicker=new Datepicker();
$.datepicker.initialized=false;
$.datepicker.uuid=new Date().getTime();
$.datepicker.version="1.8.18";
window["DP_jQuery_"+dpuuid]=$
})(jQuery);
(function(g,k){var c="ui-dialog ui-widget ui-widget-content ui-corner-all ",b={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},f={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true},a=g.attrFn||{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true,click:true};
g.widget("ui.dialog",{options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",collision:"fit",using:function(n){var l=g(this).css(n).offset().top;
if(l<0){g(this).css("top",n.top-l)
}}},resizable:true,show:null,stack:true,title:"",width:300,zIndex:1000},_create:function(){this.originalTitle=this.element.attr("title");
if(typeof this.originalTitle!=="string"){this.originalTitle=""
}this.options.title=this.options.title||this.originalTitle;
var w=this,z=w.options,s=z.title||"&#160;",n=g.ui.dialog.getTitleId(w.element),u=(w.uiDialog=g("<div></div>")).appendTo(document.body).hide().addClass(c+z.dialogClass).css({zIndex:z.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(A){if(z.closeOnEscape&&!A.isDefaultPrevented()&&A.keyCode&&A.keyCode===g.ui.keyCode.ESCAPE){w.close(A);
A.preventDefault()
}}).attr({role:"dialog","aria-labelledby":n}).mousedown(function(A){w.moveToTop(false,A)
}),p=w.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(u),o=(w.uiDialogTitlebar=g("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(u),r=g('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){r.addClass("ui-state-hover")
},function(){r.removeClass("ui-state-hover")
}).focus(function(){r.addClass("ui-state-focus")
}).blur(function(){r.removeClass("ui-state-focus")
}).click(function(A){w.close(A);
return false
}).appendTo(o),q=(w.uiDialogTitlebarCloseText=g("<span></span>")).addClass("ui-icon ui-icon-closethick").text(z.closeText).appendTo(r),l=g("<span></span>").addClass("ui-dialog-title").attr("id",n).html(s).prependTo(o);
if(g.isFunction(z.beforeclose)&&!g.isFunction(z.beforeClose)){z.beforeClose=z.beforeclose
}o.find("*").add(o).disableSelection();
if(z.draggable&&g.fn.draggable){w._makeDraggable()
}if(z.resizable&&g.fn.resizable){w._makeResizable()
}w._createButtons(z.buttons);
w._isOpen=false;
if(g.fn.bgiframe){u.bgiframe()
}},_init:function(){if(this.options.autoOpen){this.open()
}},destroy:function(){var l=this;
if(l.overlay){l.overlay.destroy()
}l.uiDialog.hide();
l.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");
l.uiDialog.remove();
if(l.originalTitle){l.element.attr("title",l.originalTitle)
}return l
},widget:function(){return this.uiDialog
},close:function(p){var l=this,o,n;
if(false===l._trigger("beforeClose",p)){return
}if(l.overlay){l.overlay.destroy()
}l.uiDialog.unbind("keypress.ui-dialog");
l._isOpen=false;
if(l.options.hide){l.uiDialog.hide(l.options.hide,function(){l._trigger("close",p)
})
}else{l.uiDialog.hide();
l._trigger("close",p)
}g.ui.dialog.overlay.resize();
if(l.options.modal){o=0;
g(".ui-dialog").each(function(){if(this!==l.uiDialog[0]){n=g(this).css("z-index");
if(!isNaN(n)){o=Math.max(o,n)
}}});
g.ui.dialog.maxZ=o
}return l
},isOpen:function(){return this._isOpen
},moveToTop:function(q,p){var l=this,o=l.options,n;
if((o.modal&&!q)||(!o.stack&&!o.modal)){return l._trigger("focus",p)
}if(o.zIndex>g.ui.dialog.maxZ){g.ui.dialog.maxZ=o.zIndex
}if(l.overlay){g.ui.dialog.maxZ+=1;
l.overlay.$el.css("z-index",g.ui.dialog.overlay.maxZ=g.ui.dialog.maxZ)
}n={scrollTop:l.element.scrollTop(),scrollLeft:l.element.scrollLeft()};
g.ui.dialog.maxZ+=1;
l.uiDialog.css("z-index",g.ui.dialog.maxZ);
l.element.attr(n);
l._trigger("focus",p);
return l
},open:function(){if(this._isOpen){return
}var n=this,o=n.options,l=n.uiDialog;
n.overlay=o.modal?new g.ui.dialog.overlay(n):null;
n._size();
n._position(o.position);
l.show(o.show);
n.moveToTop(true);
if(o.modal){l.bind("keydown.ui-dialog",function(r){if(r.keyCode!==g.ui.keyCode.TAB){return
}var q=g(":tabbable",this),s=q.filter(":first"),p=q.filter(":last");
if(r.target===p[0]&&!r.shiftKey){s.focus(1);
return false
}else{if(r.target===s[0]&&r.shiftKey){p.focus(1);
return false
}}})
}g(n.element.find(":tabbable").get().concat(l.find(".ui-dialog-buttonpane :tabbable").get().concat(l.get()))).eq(0).focus();
n._isOpen=true;
n._trigger("open");
return n
},_createButtons:function(p){var o=this,l=false,n=g("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),q=g("<div></div>").addClass("ui-dialog-buttonset").appendTo(n);
o.uiDialog.find(".ui-dialog-buttonpane").remove();
if(typeof p==="object"&&p!==null){g.each(p,function(){return !(l=true)
})
}if(l){g.each(p,function(r,u){u=g.isFunction(u)?{click:u,text:r}:u;
var s=g('<button type="button"></button>').click(function(){u.click.apply(o.element[0],arguments)
}).appendTo(q);
g.each(u,function(w,z){if(w==="click"){return
}if(w in a){s[w](z)
}else{s.attr(w,z)
}});
if(g.fn.button){s.button()
}});
n.appendTo(o.uiDialog)
}},_makeDraggable:function(){var l=this,p=l.options,q=g(document),o;
function n(r){return{position:r.position,offset:r.offset}
}l.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(r,s){o=p.height==="auto"?"auto":g(this).height();
g(this).height(g(this).height()).addClass("ui-dialog-dragging");
l._trigger("dragStart",r,n(s))
},drag:function(r,s){l._trigger("drag",r,n(s))
},stop:function(r,s){p.position=[s.position.left-q.scrollLeft(),s.position.top-q.scrollTop()];
g(this).removeClass("ui-dialog-dragging").height(o);
l._trigger("dragStop",r,n(s));
g.ui.dialog.overlay.resize()
}})
},_makeResizable:function(r){r=(r===k?this.options.resizable:r);
var n=this,q=n.options,l=n.uiDialog.css("position"),p=(typeof r==="string"?r:"n,e,s,w,se,sw,ne,nw");
function o(s){return{originalPosition:s.originalPosition,originalSize:s.originalSize,position:s.position,size:s.size}
}n.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:n.element,maxWidth:q.maxWidth,maxHeight:q.maxHeight,minWidth:q.minWidth,minHeight:n._minHeight(),handles:p,start:function(s,u){g(this).addClass("ui-dialog-resizing");
n._trigger("resizeStart",s,o(u))
},resize:function(s,u){n._trigger("resize",s,o(u))
},stop:function(s,u){g(this).removeClass("ui-dialog-resizing");
q.height=g(this).height();
q.width=g(this).width();
n._trigger("resizeStop",s,o(u));
g.ui.dialog.overlay.resize()
}}).css("position",l).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
},_minHeight:function(){var l=this.options;
if(l.height==="auto"){return l.minHeight
}else{return Math.min(l.minHeight,l.height)
}},_position:function(n){var o=[],p=[0,0],l;
if(n){if(typeof n==="string"||(typeof n==="object"&&"0" in n)){o=n.split?n.split(" "):[n[0],n[1]];
if(o.length===1){o[1]=o[0]
}g.each(["left","top"],function(r,q){if(+o[r]===o[r]){p[r]=o[r];
o[r]=q
}});
n={my:o.join(" "),at:o.join(" "),offset:p.join(" ")}
}n=g.extend({},g.ui.dialog.prototype.options.position,n)
}else{n=g.ui.dialog.prototype.options.position
}l=this.uiDialog.is(":visible");
if(!l){this.uiDialog.show()
}this.uiDialog.css({top:0,left:0}).position(g.extend({of:window},n));
if(!l){this.uiDialog.hide()
}},_setOptions:function(p){var n=this,l={},o=false;
g.each(p,function(q,r){n._setOption(q,r);
if(q in b){o=true
}if(q in f){l[q]=r
}});
if(o){this._size()
}if(this.uiDialog.is(":data(resizable)")){this.uiDialog.resizable("option",l)
}},_setOption:function(p,q){var n=this,l=n.uiDialog;
switch(p){case"beforeclose":p="beforeClose";
break;
case"buttons":n._createButtons(q);
break;
case"closeText":n.uiDialogTitlebarCloseText.text(""+q);
break;
case"dialogClass":l.removeClass(n.options.dialogClass).addClass(c+q);
break;
case"disabled":if(q){l.addClass("ui-dialog-disabled")
}else{l.removeClass("ui-dialog-disabled")
}break;
case"draggable":var o=l.is(":data(draggable)");
if(o&&!q){l.draggable("destroy")
}if(!o&&q){n._makeDraggable()
}break;
case"position":n._position(q);
break;
case"resizable":var r=l.is(":data(resizable)");
if(r&&!q){l.resizable("destroy")
}if(r&&typeof q==="string"){l.resizable("option","handles",q)
}if(!r&&q!==false){n._makeResizable(q)
}break;
case"title":g(".ui-dialog-title",n.uiDialogTitlebar).html(""+(q||"&#160;"));
break
}g.Widget.prototype._setOption.apply(n,arguments)
},_size:function(){var q=this.options,n,p,l=this.uiDialog.is(":visible");
this.element.show().css({width:"auto",minHeight:0,height:0});
if(q.minWidth>q.width){q.width=q.minWidth
}n=this.uiDialog.css({height:"auto",width:q.width}).height();
p=Math.max(0,q.minHeight-n);
if(q.height==="auto"){if(g.support.minHeight){this.element.css({minHeight:p,height:"auto"})
}else{this.uiDialog.show();
var o=this.element.css("height","auto").height();
if(!l){this.uiDialog.hide()
}this.element.height(Math.max(o,p))
}}else{this.element.height(Math.max(q.height-n,0))
}if(this.uiDialog.is(":data(resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight())
}}});
g.extend(g.ui.dialog,{version:"1.8.18",uuid:0,maxZ:0,getTitleId:function(l){var n=l.attr("id");
if(!n){this.uuid+=1;
n=this.uuid
}return"ui-dialog-title-"+n
},overlay:function(l){this.$el=g.ui.dialog.overlay.create(l)
}});
g.extend(g.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:g.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(l){return l+".dialog-overlay"
}).join(" "),create:function(n){if(this.instances.length===0){setTimeout(function(){if(g.ui.dialog.overlay.instances.length){g(document).bind(g.ui.dialog.overlay.events,function(o){if(g(o.target).zIndex()<g.ui.dialog.overlay.maxZ){return false
}})
}},1);
g(document).bind("keydown.dialog-overlay",function(o){if(n.options.closeOnEscape&&!o.isDefaultPrevented()&&o.keyCode&&o.keyCode===g.ui.keyCode.ESCAPE){n.close(o);
o.preventDefault()
}});
g(window).bind("resize.dialog-overlay",g.ui.dialog.overlay.resize)
}var l=(this.oldInstances.pop()||g("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),height:this.height()});
if(g.fn.bgiframe){l.bgiframe()
}this.instances.push(l);
return l
},destroy:function(l){var n=g.inArray(l,this.instances);
if(n!=-1){this.oldInstances.push(this.instances.splice(n,1)[0])
}if(this.instances.length===0){g([document,window]).unbind(".dialog-overlay")
}l.remove();
var o=0;
g.each(this.instances,function(){o=Math.max(o,this.css("z-index"))
});
this.maxZ=o
},height:function(){var n,l;
if(g.browser.msie&&g.browser.version<7){n=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);
l=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);
if(n<l){return g(window).height()+"px"
}else{return n+"px"
}}else{return g(document).height()+"px"
}},width:function(){var l,n;
if(g.browser.msie){l=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);
n=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);
if(l<n){return g(window).width()+"px"
}else{return l+"px"
}}else{return g(document).width()+"px"
}},resize:function(){var l=g([]);
g.each(g.ui.dialog.overlay.instances,function(){l=l.add(this)
});
l.css({width:0,height:0}).css({width:g.ui.dialog.overlay.width(),height:g.ui.dialog.overlay.height()})
}});
g.extend(g.ui.dialog.overlay.prototype,{destroy:function(){g.ui.dialog.overlay.destroy(this.$el)
}})
}(jQuery));
(function(l,n){l.ui=l.ui||{};
var f=/left|center|right/,g=/top|center|bottom/,a="center",k={},b=l.fn.position,c=l.fn.offset;
l.fn.position=function(p){if(!p||!p.of){return b.apply(this,arguments)
}p=l.extend({},p);
var u=l(p.of),s=u[0],z=(p.collision||"flip").split(" "),w=p.offset?p.offset.split(" "):[0,0],r,o,q;
if(s.nodeType===9){r=u.width();
o=u.height();
q={top:0,left:0}
}else{if(s.setTimeout){r=u.width();
o=u.height();
q={top:u.scrollTop(),left:u.scrollLeft()}
}else{if(s.preventDefault){p.at="left top";
r=o=0;
q={top:p.of.pageY,left:p.of.pageX}
}else{r=u.outerWidth();
o=u.outerHeight();
q=u.offset()
}}}l.each(["my","at"],function(){var A=(p[this]||"").split(" ");
if(A.length===1){A=f.test(A[0])?A.concat([a]):g.test(A[0])?[a].concat(A):[a,a]
}A[0]=f.test(A[0])?A[0]:a;
A[1]=g.test(A[1])?A[1]:a;
p[this]=A
});
if(z.length===1){z[1]=z[0]
}w[0]=parseInt(w[0],10)||0;
if(w.length===1){w[1]=w[0]
}w[1]=parseInt(w[1],10)||0;
if(p.at[0]==="right"){q.left+=r
}else{if(p.at[0]===a){q.left+=r/2
}}if(p.at[1]==="bottom"){q.top+=o
}else{if(p.at[1]===a){q.top+=o/2
}}q.left+=w[0];
q.top+=w[1];
return this.each(function(){var D=l(this),F=D.outerWidth(),C=D.outerHeight(),E=parseInt(l.curCSS(this,"marginLeft",true))||0,B=parseInt(l.curCSS(this,"marginTop",true))||0,H=F+E+(parseInt(l.curCSS(this,"marginRight",true))||0),I=C+B+(parseInt(l.curCSS(this,"marginBottom",true))||0),G=l.extend({},q),A;
if(p.my[0]==="right"){G.left-=F
}else{if(p.my[0]===a){G.left-=F/2
}}if(p.my[1]==="bottom"){G.top-=C
}else{if(p.my[1]===a){G.top-=C/2
}}if(!k.fractions){G.left=Math.round(G.left);
G.top=Math.round(G.top)
}A={left:G.left-E,top:G.top-B};
l.each(["left","top"],function(K,J){if(l.ui.position[z[K]]){l.ui.position[z[K]][J](G,{targetWidth:r,targetHeight:o,elemWidth:F,elemHeight:C,collisionPosition:A,collisionWidth:H,collisionHeight:I,offset:w,my:p.my,at:p.at})
}});
if(l.fn.bgiframe){D.bgiframe()
}D.offset(l.extend(G,{using:p.using}))
})
};
l.ui.position={fit:{left:function(o,p){var r=l(window),q=p.collisionPosition.left+p.collisionWidth-r.width()-r.scrollLeft();
o.left=q>0?o.left-q:Math.max(o.left-p.collisionPosition.left,o.left)
},top:function(o,p){var r=l(window),q=p.collisionPosition.top+p.collisionHeight-r.height()-r.scrollTop();
o.top=q>0?o.top-q:Math.max(o.top-p.collisionPosition.top,o.top)
}},flip:{left:function(p,r){if(r.at[0]===a){return
}var u=l(window),s=r.collisionPosition.left+r.collisionWidth-u.width()-u.scrollLeft(),o=r.my[0]==="left"?-r.elemWidth:r.my[0]==="right"?r.elemWidth:0,q=r.at[0]==="left"?r.targetWidth:-r.targetWidth,w=-2*r.offset[0];
p.left+=r.collisionPosition.left<0?o+q+w:s>0?o+q+w:0
},top:function(p,r){if(r.at[1]===a){return
}var u=l(window),s=r.collisionPosition.top+r.collisionHeight-u.height()-u.scrollTop(),o=r.my[1]==="top"?-r.elemHeight:r.my[1]==="bottom"?r.elemHeight:0,q=r.at[1]==="top"?r.targetHeight:-r.targetHeight,w=-2*r.offset[1];
p.top+=r.collisionPosition.top<0?o+q+w:s>0?o+q+w:0
}}};
if(!l.offset.setOffset){l.offset.setOffset=function(s,p){if(/static/.test(l.curCSS(s,"position"))){s.style.position="relative"
}var r=l(s),w=r.offset(),o=parseInt(l.curCSS(s,"top",true),10)||0,u=parseInt(l.curCSS(s,"left",true),10)||0,q={top:(p.top-w.top)+o,left:(p.left-w.left)+u};
if("using" in p){p.using.call(s,q)
}else{r.css(q)
}};
l.fn.offset=function(o){var p=this[0];
if(!p||!p.ownerDocument){return null
}if(o){return this.each(function(){l.offset.setOffset(this,o)
})
}return c.call(this)
}
}(function(){var o=document.getElementsByTagName("body")[0],z=document.createElement("div"),s,w,p,u,r;
s=document.createElement(o?"div":"body");
p={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};
if(o){l.extend(p,{position:"absolute",left:"-1000px",top:"-1000px"})
}for(var q in p){s.style[q]=p[q]
}s.appendChild(z);
w=o||document.documentElement;
w.insertBefore(s,w.firstChild);
z.style.cssText="position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;";
u=l(z).offset(function(A,B){return B
}).offset();
s.innerHTML="";
w.removeChild(s);
r=u.top+u.left+(o?2000:0);
k.fractions=r>21&&r<22
})()
}(jQuery));
(function(a,b){a.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()});
this.valueDiv=a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
this.oldValue=this._value();
this._refreshValue()
},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.valueDiv.remove();
a.Widget.prototype.destroy.apply(this,arguments)
},value:function(c){if(c===b){return this._value()
}this._setOption("value",c);
return this
},_setOption:function(c,f){if(c==="value"){this.options.value=f;
this._refreshValue();
if(this._value()===this.options.max){this._trigger("complete")
}}a.Widget.prototype._setOption.apply(this,arguments)
},_value:function(){var c=this.options.value;
if(typeof c!=="number"){c=0
}return Math.min(this.options.max,Math.max(this.min,c))
},_percentage:function(){return 100*this._value()/this.options.max
},_refreshValue:function(){var f=this.value();
var c=this._percentage();
if(this.oldValue!==f){this.oldValue=f;
this._trigger("change")
}this.valueDiv.toggle(f>this.min).toggleClass("ui-corner-right",f===this.options.max).width(c.toFixed(0)+"%");
this.element.attr("aria-valuenow",f)
}});
a.extend(a.ui.progressbar,{version:"1.8.18"})
})(jQuery);
(function(b,c){var a=5;
b.widget("ui.slider",b.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var g=this,q=this.options,p=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),n="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",f=(q.values&&q.values.length)||1,l=[];
this._keySliding=false;
this._mouseSliding=false;
this._animateOff=true;
this._handleIndex=null;
this._detectOrientation();
this._mouseInit();
this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"+(q.disabled?" ui-slider-disabled ui-disabled":""));
this.range=b([]);
if(q.range){if(q.range===true){if(!q.values){q.values=[this._valueMin(),this._valueMin()]
}if(q.values.length&&q.values.length!==2){q.values=[q.values[0],q.values[0]]
}}this.range=b("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+((q.range==="min"||q.range==="max")?" ui-slider-range-"+q.range:""))
}for(var k=p.length;
k<f;
k+=1){l.push(n)
}this.handles=p.add(b(l.join("")).appendTo(g.element));
this.handle=this.handles.eq(0);
this.handles.add(this.range).filter("a").click(function(o){o.preventDefault()
}).hover(function(){if(!q.disabled){b(this).addClass("ui-state-hover")
}},function(){b(this).removeClass("ui-state-hover")
}).focus(function(){if(!q.disabled){b(".ui-slider .ui-state-focus").removeClass("ui-state-focus");
b(this).addClass("ui-state-focus")
}else{b(this).blur()
}}).blur(function(){b(this).removeClass("ui-state-focus")
});
this.handles.each(function(o){b(this).data("index.ui-slider-handle",o)
});
this.handles.keydown(function(w){var r=b(this).data("index.ui-slider-handle"),z,s,o,u;
if(g.options.disabled){return
}switch(w.keyCode){case b.ui.keyCode.HOME:case b.ui.keyCode.END:case b.ui.keyCode.PAGE_UP:case b.ui.keyCode.PAGE_DOWN:case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:w.preventDefault();
if(!g._keySliding){g._keySliding=true;
b(this).addClass("ui-state-active");
z=g._start(w,r);
if(z===false){return
}}break
}u=g.options.step;
if(g.options.values&&g.options.values.length){s=o=g.values(r)
}else{s=o=g.value()
}switch(w.keyCode){case b.ui.keyCode.HOME:o=g._valueMin();
break;
case b.ui.keyCode.END:o=g._valueMax();
break;
case b.ui.keyCode.PAGE_UP:o=g._trimAlignValue(s+((g._valueMax()-g._valueMin())/a));
break;
case b.ui.keyCode.PAGE_DOWN:o=g._trimAlignValue(s-((g._valueMax()-g._valueMin())/a));
break;
case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:if(s===g._valueMax()){return
}o=g._trimAlignValue(s+u);
break;
case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:if(s===g._valueMin()){return
}o=g._trimAlignValue(s-u);
break
}g._slide(w,r,o)
}).keyup(function(r){var o=b(this).data("index.ui-slider-handle");
if(g._keySliding){g._keySliding=false;
g._stop(r,o);
g._change(r,o);
b(this).removeClass("ui-state-active")
}});
this._refreshValue();
this._animateOff=false
},destroy:function(){this.handles.remove();
this.range.remove();
this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");
this._mouseDestroy();
return this
},_mouseCapture:function(k){var l=this.options,q,s,g,n,w,r,u,p,f;
if(l.disabled){return false
}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};
this.elementOffset=this.element.offset();
q={x:k.pageX,y:k.pageY};
s=this._normValueFromMouse(q);
g=this._valueMax()-this._valueMin()+1;
w=this;
this.handles.each(function(o){var z=Math.abs(s-w.values(o));
if(g>z){g=z;
n=b(this);
r=o
}});
if(l.range===true&&this.values(1)===l.min){r+=1;
n=b(this.handles[r])
}u=this._start(k,r);
if(u===false){return false
}this._mouseSliding=true;
w._handleIndex=r;
n.addClass("ui-state-active").focus();
p=n.offset();
f=!b(k.target).parents().andSelf().is(".ui-slider-handle");
this._clickOffset=f?{left:0,top:0}:{left:k.pageX-p.left-(n.width()/2),top:k.pageY-p.top-(n.height()/2)-(parseInt(n.css("borderTopWidth"),10)||0)-(parseInt(n.css("borderBottomWidth"),10)||0)+(parseInt(n.css("marginTop"),10)||0)};
if(!this.handles.hasClass("ui-state-hover")){this._slide(k,r,s)
}this._animateOff=true;
return true
},_mouseStart:function(f){return true
},_mouseDrag:function(k){var f={x:k.pageX,y:k.pageY},g=this._normValueFromMouse(f);
this._slide(k,this._handleIndex,g);
return false
},_mouseStop:function(f){this.handles.removeClass("ui-state-active");
this._mouseSliding=false;
this._stop(f,this._handleIndex);
this._change(f,this._handleIndex);
this._handleIndex=null;
this._clickOffset=null;
this._animateOff=false;
return false
},_detectOrientation:function(){this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal"
},_normValueFromMouse:function(g){var f,n,l,k,o;
if(this.orientation==="horizontal"){f=this.elementSize.width;
n=g.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)
}else{f=this.elementSize.height;
n=g.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)
}l=(n/f);
if(l>1){l=1
}if(l<0){l=0
}if(this.orientation==="vertical"){l=1-l
}k=this._valueMax()-this._valueMin();
o=this._valueMin()+l*k;
return this._trimAlignValue(o)
},_start:function(k,g){var f={handle:this.handles[g],value:this.value()};
if(this.options.values&&this.options.values.length){f.value=this.values(g);
f.values=this.values()
}return this._trigger("start",k,f)
},_slide:function(n,l,k){var f,g,o;
if(this.options.values&&this.options.values.length){f=this.values(l?0:1);
if((this.options.values.length===2&&this.options.range===true)&&((l===0&&k>f)||(l===1&&k<f))){k=f
}if(k!==this.values(l)){g=this.values();
g[l]=k;
o=this._trigger("slide",n,{handle:this.handles[l],value:k,values:g});
f=this.values(l?0:1);
if(o!==false){this.values(l,k,true)
}}}else{if(k!==this.value()){o=this._trigger("slide",n,{handle:this.handles[l],value:k});
if(o!==false){this.value(k)
}}}},_stop:function(k,g){var f={handle:this.handles[g],value:this.value()};
if(this.options.values&&this.options.values.length){f.value=this.values(g);
f.values=this.values()
}this._trigger("stop",k,f)
},_change:function(k,g){if(!this._keySliding&&!this._mouseSliding){var f={handle:this.handles[g],value:this.value()};
if(this.options.values&&this.options.values.length){f.value=this.values(g);
f.values=this.values()
}this._trigger("change",k,f)
}},value:function(f){if(arguments.length){this.options.value=this._trimAlignValue(f);
this._refreshValue();
this._change(null,0);
return
}return this._value()
},values:function(g,n){var l,f,k;
if(arguments.length>1){this.options.values[g]=this._trimAlignValue(n);
this._refreshValue();
this._change(null,g);
return
}if(arguments.length){if(b.isArray(arguments[0])){l=this.options.values;
f=arguments[0];
for(k=0;
k<l.length;
k+=1){l[k]=this._trimAlignValue(f[k]);
this._change(null,k)
}this._refreshValue()
}else{if(this.options.values&&this.options.values.length){return this._values(g)
}else{return this.value()
}}}else{return this._values()
}},_setOption:function(g,k){var f,l=0;
if(b.isArray(this.options.values)){l=this.options.values.length
}b.Widget.prototype._setOption.apply(this,arguments);
switch(g){case"disabled":if(k){this.handles.filter(".ui-state-focus").blur();
this.handles.removeClass("ui-state-hover");
this.handles.propAttr("disabled",true);
this.element.addClass("ui-disabled")
}else{this.handles.propAttr("disabled",false);
this.element.removeClass("ui-disabled")
}break;
case"orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);
this._refreshValue();
break;
case"value":this._animateOff=true;
this._refreshValue();
this._change(null,0);
this._animateOff=false;
break;
case"values":this._animateOff=true;
this._refreshValue();
for(f=0;
f<l;
f+=1){this._change(null,f)
}this._animateOff=false;
break
}},_value:function(){var f=this.options.value;
f=this._trimAlignValue(f);
return f
},_values:function(f){var l,k,g;
if(arguments.length){l=this.options.values[f];
l=this._trimAlignValue(l);
return l
}else{k=this.options.values.slice();
for(g=0;
g<k.length;
g+=1){k[g]=this._trimAlignValue(k[g])
}return k
}},_trimAlignValue:function(l){if(l<=this._valueMin()){return this._valueMin()
}if(l>=this._valueMax()){return this._valueMax()
}var f=(this.options.step>0)?this.options.step:1,k=(l-this._valueMin())%f,g=l-k;
if(Math.abs(k)*2>=f){g+=(k>0)?f:(-f)
}return parseFloat(g.toFixed(5))
},_valueMin:function(){return this.options.min
},_valueMax:function(){return this.options.max
},_refreshValue:function(){var l=this.options.range,k=this.options,u=this,g=(!this._animateOff)?k.animate:false,n,f={},p,r,q,s;
if(this.options.values&&this.options.values.length){this.handles.each(function(w,o){n=(u.values(w)-u._valueMin())/(u._valueMax()-u._valueMin())*100;
f[u.orientation==="horizontal"?"left":"bottom"]=n+"%";
b(this).stop(1,1)[g?"animate":"css"](f,k.animate);
if(u.options.range===true){if(u.orientation==="horizontal"){if(w===0){u.range.stop(1,1)[g?"animate":"css"]({left:n+"%"},k.animate)
}if(w===1){u.range[g?"animate":"css"]({width:(n-p)+"%"},{queue:false,duration:k.animate})
}}else{if(w===0){u.range.stop(1,1)[g?"animate":"css"]({bottom:(n)+"%"},k.animate)
}if(w===1){u.range[g?"animate":"css"]({height:(n-p)+"%"},{queue:false,duration:k.animate})
}}}p=n
})
}else{r=this.value();
q=this._valueMin();
s=this._valueMax();
n=(s!==q)?(r-q)/(s-q)*100:0;
f[u.orientation==="horizontal"?"left":"bottom"]=n+"%";
this.handle.stop(1,1)[g?"animate":"css"](f,k.animate);
if(l==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[g?"animate":"css"]({width:n+"%"},k.animate)
}if(l==="max"&&this.orientation==="horizontal"){this.range[g?"animate":"css"]({width:(100-n)+"%"},{queue:false,duration:k.animate})
}if(l==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[g?"animate":"css"]({height:n+"%"},k.animate)
}if(l==="max"&&this.orientation==="vertical"){this.range[g?"animate":"css"]({height:(100-n)+"%"},{queue:false,duration:k.animate})
}}}});
b.extend(b.ui.slider,{version:"1.8.18"})
}(jQuery));
(function(f,k){var c=0,b=0;
function g(){return ++c
}function a(){return ++b
}f.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:false,cookie:null,collapsible:false,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(true)
},_setOption:function(l,n){if(l=="selected"){if(this.options.collapsible&&n==this.options.selected){return
}this.select(n)
}else{this.options[l]=n;
this._tabify()
}},_tabId:function(l){return l.title&&l.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+g()
},_sanitizeSelector:function(l){return l.replace(/:/g,"\\:")
},_cookie:function(){var l=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+a());
return f.cookie.apply(null,[l].concat(f.makeArray(arguments)))
},_ui:function(n,l){return{tab:n,panel:l,index:this.anchors.index(n)}
},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var l=f(this);
l.html(l.data("label.tabs")).removeData("label.tabs")
})
},_tabify:function(C){var D=this,p=this.options,n=/^#.+/;
this.list=this.element.find("ol,ul").eq(0);
this.lis=f(" > li:has(a[href])",this.list);
this.anchors=this.lis.map(function(){return f("a",this)[0]
});
this.panels=f([]);
this.anchors.each(function(F,o){var E=f(o).attr("href");
var G=E.split("#")[0],H;
if(G&&(G===location.toString().split("#")[0]||(H=f("base")[0])&&G===H.href)){E=o.hash;
o.href=E
}if(n.test(E)){D.panels=D.panels.add(D.element.find(D._sanitizeSelector(E)))
}else{if(E&&E!=="#"){f.data(o,"href.tabs",E);
f.data(o,"load.tabs",E.replace(/#.*$/,""));
var J=D._tabId(o);
o.href="#"+J;
var I=D.element.find("#"+J);
if(!I.length){I=f(p.panelTemplate).attr("id",J).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(D.panels[F-1]||D.list);
I.data("destroy.tabs",true)
}D.panels=D.panels.add(I)
}else{p.disabled.push(F)
}}});
if(C){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");
this.lis.addClass("ui-state-default ui-corner-top");
this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");
if(p.selected===k){if(location.hash){this.anchors.each(function(E,o){if(o.hash==location.hash){p.selected=E;
return false
}})
}if(typeof p.selected!=="number"&&p.cookie){p.selected=parseInt(D._cookie(),10)
}if(typeof p.selected!=="number"&&this.lis.filter(".ui-tabs-selected").length){p.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))
}p.selected=p.selected||(this.lis.length?0:-1)
}else{if(p.selected===null){p.selected=-1
}}p.selected=((p.selected>=0&&this.anchors[p.selected])||p.selected<0)?p.selected:0;
p.disabled=f.unique(p.disabled.concat(f.map(this.lis.filter(".ui-state-disabled"),function(E,o){return D.lis.index(E)
}))).sort();
if(f.inArray(p.selected,p.disabled)!=-1){p.disabled.splice(f.inArray(p.selected,p.disabled),1)
}this.panels.addClass("ui-tabs-hide");
this.lis.removeClass("ui-tabs-selected ui-state-active");
if(p.selected>=0&&this.anchors.length){D.element.find(D._sanitizeSelector(D.anchors[p.selected].hash)).removeClass("ui-tabs-hide");
this.lis.eq(p.selected).addClass("ui-tabs-selected ui-state-active");
D.element.queue("tabs",function(){D._trigger("show",null,D._ui(D.anchors[p.selected],D.element.find(D._sanitizeSelector(D.anchors[p.selected].hash))[0]))
});
this.load(p.selected)
}f(window).bind("unload",function(){D.lis.add(D.anchors).unbind(".tabs");
D.lis=D.anchors=D.panels=null
})
}else{p.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))
}this.element[p.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");
if(p.cookie){this._cookie(p.selected,p.cookie)
}for(var s=0,B;
(B=this.lis[s]);
s++){f(B)[f.inArray(s,p.disabled)!=-1&&!f(B).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled")
}if(p.cache===false){this.anchors.removeData("cache.tabs")
}this.lis.add(this.anchors).unbind(".tabs");
if(p.event!=="mouseover"){var r=function(E,o){if(o.is(":not(.ui-state-disabled)")){o.addClass("ui-state-"+E)
}};
var w=function(E,o){o.removeClass("ui-state-"+E)
};
this.lis.bind("mouseover.tabs",function(){r("hover",f(this))
});
this.lis.bind("mouseout.tabs",function(){w("hover",f(this))
});
this.anchors.bind("focus.tabs",function(){r("focus",f(this).closest("li"))
});
this.anchors.bind("blur.tabs",function(){w("focus",f(this).closest("li"))
})
}var l,u;
if(p.fx){if(f.isArray(p.fx)){l=p.fx[0];
u=p.fx[1]
}else{l=u=p.fx
}}function q(o,E){o.css("display","");
if(!f.support.opacity&&E.opacity){o[0].style.removeAttribute("filter")
}}var z=u?function(o,E){f(o).closest("li").addClass("ui-tabs-selected ui-state-active");
E.hide().removeClass("ui-tabs-hide").animate(u,u.duration||"normal",function(){q(E,u);
D._trigger("show",null,D._ui(o,E[0]))
})
}:function(o,E){f(o).closest("li").addClass("ui-tabs-selected ui-state-active");
E.removeClass("ui-tabs-hide");
D._trigger("show",null,D._ui(o,E[0]))
};
var A=l?function(E,o){o.animate(l,l.duration||"normal",function(){D.lis.removeClass("ui-tabs-selected ui-state-active");
o.addClass("ui-tabs-hide");
q(o,l);
D.element.dequeue("tabs")
})
}:function(E,o,F){D.lis.removeClass("ui-tabs-selected ui-state-active");
o.addClass("ui-tabs-hide");
D.element.dequeue("tabs")
};
this.anchors.bind(p.event+".tabs",function(){var E=this,G=f(E).closest("li"),o=D.panels.filter(":not(.ui-tabs-hide)"),F=D.element.find(D._sanitizeSelector(E.hash));
if((G.hasClass("ui-tabs-selected")&&!p.collapsible)||G.hasClass("ui-state-disabled")||G.hasClass("ui-state-processing")||D.panels.filter(":animated").length||D._trigger("select",null,D._ui(this,F[0]))===false){this.blur();
return false
}p.selected=D.anchors.index(this);
D.abort();
if(p.collapsible){if(G.hasClass("ui-tabs-selected")){p.selected=-1;
if(p.cookie){D._cookie(p.selected,p.cookie)
}D.element.queue("tabs",function(){A(E,o)
}).dequeue("tabs");
this.blur();
return false
}else{if(!o.length){if(p.cookie){D._cookie(p.selected,p.cookie)
}D.element.queue("tabs",function(){z(E,F)
});
D.load(D.anchors.index(this));
this.blur();
return false
}}}if(p.cookie){D._cookie(p.selected,p.cookie)
}if(F.length){if(o.length){D.element.queue("tabs",function(){A(E,o)
})
}D.element.queue("tabs",function(){z(E,F)
});
D.load(D.anchors.index(this))
}else{throw"jQuery UI Tabs: Mismatching fragment identifier."
}if(f.browser.msie){this.blur()
}});
this.anchors.bind("click.tabs",function(){return false
})
},_getIndex:function(l){if(typeof l=="string"){l=this.anchors.index(this.anchors.filter("[href$="+l+"]"))
}return l
},destroy:function(){var l=this.options;
this.abort();
this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");
this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");
this.anchors.each(function(){var n=f.data(this,"href.tabs");
if(n){this.href=n
}var o=f(this).unbind(".tabs");
f.each(["href","load","cache"],function(p,q){o.removeData(q+".tabs")
})
});
this.lis.unbind(".tabs").add(this.panels).each(function(){if(f.data(this,"destroy.tabs")){f(this).remove()
}else{f(this).removeClass(["ui-state-default","ui-corner-top","ui-tabs-selected","ui-state-active","ui-state-hover","ui-state-focus","ui-state-disabled","ui-tabs-panel","ui-widget-content","ui-corner-bottom","ui-tabs-hide"].join(" "))
}});
if(l.cookie){this._cookie(null,l.cookie)
}return this
},add:function(q,p,n){if(n===k){n=this.anchors.length
}var l=this,s=this.options,w=f(s.tabTemplate.replace(/#\{href\}/g,q).replace(/#\{label\}/g,p)),u=!q.indexOf("#")?q.replace("#",""):this._tabId(f("a",w)[0]);
w.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);
var r=l.element.find("#"+u);
if(!r.length){r=f(s.panelTemplate).attr("id",u).data("destroy.tabs",true)
}r.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");
if(n>=this.lis.length){w.appendTo(this.list);
r.appendTo(this.list[0].parentNode)
}else{w.insertBefore(this.lis[n]);
r.insertBefore(this.panels[n])
}s.disabled=f.map(s.disabled,function(z,o){return z>=n?++z:z
});
this._tabify();
if(this.anchors.length==1){s.selected=0;
w.addClass("ui-tabs-selected ui-state-active");
r.removeClass("ui-tabs-hide");
this.element.queue("tabs",function(){l._trigger("show",null,l._ui(l.anchors[0],l.panels[0]))
});
this.load(0)
}this._trigger("add",null,this._ui(this.anchors[n],this.panels[n]));
return this
},remove:function(l){l=this._getIndex(l);
var p=this.options,q=this.lis.eq(l).remove(),n=this.panels.eq(l).remove();
if(q.hasClass("ui-tabs-selected")&&this.anchors.length>1){this.select(l+(l+1<this.anchors.length?1:-1))
}p.disabled=f.map(f.grep(p.disabled,function(r,o){return r!=l
}),function(r,o){return r>=l?--r:r
});
this._tabify();
this._trigger("remove",null,this._ui(q.find("a")[0],n[0]));
return this
},enable:function(l){l=this._getIndex(l);
var n=this.options;
if(f.inArray(l,n.disabled)==-1){return
}this.lis.eq(l).removeClass("ui-state-disabled");
n.disabled=f.grep(n.disabled,function(p,o){return p!=l
});
this._trigger("enable",null,this._ui(this.anchors[l],this.panels[l]));
return this
},disable:function(n){n=this._getIndex(n);
var l=this,p=this.options;
if(n!=p.selected){this.lis.eq(n).addClass("ui-state-disabled");
p.disabled.push(n);
p.disabled.sort();
this._trigger("disable",null,this._ui(this.anchors[n],this.panels[n]))
}return this
},select:function(l){l=this._getIndex(l);
if(l==-1){if(this.options.collapsible&&this.options.selected!=-1){l=this.options.selected
}else{return this
}}this.anchors.eq(l).trigger(this.options.event+".tabs");
return this
},load:function(q){q=this._getIndex(q);
var n=this,s=this.options,l=this.anchors.eq(q)[0],p=f.data(l,"load.tabs");
this.abort();
if(!p||this.element.queue("tabs").length!==0&&f.data(l,"cache.tabs")){this.element.dequeue("tabs");
return
}this.lis.eq(q).addClass("ui-state-processing");
if(s.spinner){var r=f("span",l);
r.data("label.tabs",r.html()).html(s.spinner)
}this.xhr=f.ajax(f.extend({},s.ajaxOptions,{url:p,success:function(u,o){n.element.find(n._sanitizeSelector(l.hash)).html(u);
n._cleanup();
if(s.cache){f.data(l,"cache.tabs",true)
}n._trigger("load",null,n._ui(n.anchors[q],n.panels[q]));
try{s.ajaxOptions.success(u,o)
}catch(w){}},error:function(w,o,u){n._cleanup();
n._trigger("load",null,n._ui(n.anchors[q],n.panels[q]));
try{s.ajaxOptions.error(w,o,q,l)
}catch(u){}}}));
n.element.dequeue("tabs");
return this
},abort:function(){this.element.queue([]);
this.panels.stop(false,true);
this.element.queue("tabs",this.element.queue("tabs").splice(-2,2));
if(this.xhr){this.xhr.abort();
delete this.xhr
}this._cleanup();
return this
},url:function(n,l){this.anchors.eq(n).removeData("cache.tabs").data("load.tabs",l);
return this
},length:function(){return this.anchors.length
}});
f.extend(f.ui.tabs,{version:"1.8.18"});
f.extend(f.ui.tabs.prototype,{rotation:null,rotate:function(p,r){var l=this,s=this.options;
var n=l._rotate||(l._rotate=function(o){clearTimeout(l.rotation);
l.rotation=setTimeout(function(){var u=s.selected;
l.select(++u<l.anchors.length?u:0)
},p);
if(o){o.stopPropagation()
}});
var q=l._unrotate||(l._unrotate=!r?function(o){if(o.clientX){l.rotate(null)
}}:function(o){t=s.selected;
n()
});
if(p){this.element.bind("tabsshow",n);
this.anchors.bind(s.event+".tabs",q);
n()
}else{clearTimeout(l.rotation);
this.element.unbind("tabsshow",n);
this.anchors.unbind(s.event+".tabs",q);
delete this._rotate;
delete this._unrotate
}return this
}})
})(jQuery);
(function(a){a.extend(a.fn,{delayedObserver:function(f,c,b){return this.each(function(){var g=a(this);
var k=b||{};
g.data("oldval",g.val()).data("delay",c||0.5).data("condition",k.condition||function(){return(a(this).data("oldval")==a(this).val())
}).data("callback",f)[(k.event||"keyup")](function(){if(g.data("condition").apply(g)){return
}else{if(g.data("timer")){clearTimeout(g.data("timer"))
}g.data("timer",setTimeout(function(){g.data("callback").apply(g)
},g.data("delay")*1000));
g.data("oldval",g.val())
}})
})
}})
})(jQuery);
(function(a){a.fn.hoverIntent=function(q,p){var r={sensitivity:7,interval:100,timeout:0};
r=a.extend(r,p?{over:q,out:p}:q);
var u,s,n,k;
var l=function(f){u=f.pageX;
s=f.pageY
};
var c=function(g,f){f.hoverIntent_t=clearTimeout(f.hoverIntent_t);
if((Math.abs(n-u)+Math.abs(k-s))<r.sensitivity){a(f).unbind("mousemove",l);
f.hoverIntent_s=1;
return r.over.apply(f,[g])
}else{n=u;
k=s;
f.hoverIntent_t=setTimeout(function(){c(g,f)
},r.interval)
}};
var o=function(g,f){f.hoverIntent_t=clearTimeout(f.hoverIntent_t);
f.hoverIntent_s=0;
return r.out.apply(f,[g])
};
var b=function(w){var g=jQuery.extend({},w);
var f=this;
if(f.hoverIntent_t){f.hoverIntent_t=clearTimeout(f.hoverIntent_t)
}if(w.type=="mouseenter"){n=g.pageX;
k=g.pageY;
a(f).bind("mousemove",l);
if(f.hoverIntent_s!=1){f.hoverIntent_t=setTimeout(function(){c(g,f)
},r.interval)
}}else{a(f).unbind("mousemove",l);
if(f.hoverIntent_s==1){f.hoverIntent_t=setTimeout(function(){o(g,f)
},r.timeout)
}}};
return this.bind("mouseenter",b).bind("mouseleave",b)
}
})(jQuery);
(function(a){a.extend(a.event,{keyCodes:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}})
})(jQuery);
(function(window,undefined){var S={version:"3.0.3"};
var ua=navigator.userAgent.toLowerCase();
if(ua.indexOf("windows")>-1||ua.indexOf("win32")>-1){S.isWindows=true
}else{if(ua.indexOf("macintosh")>-1||ua.indexOf("mac os x")>-1){S.isMac=true
}else{if(ua.indexOf("linux")>-1){S.isLinux=true
}}}S.isIE=ua.indexOf("msie")>-1;
S.isIE6=ua.indexOf("msie 6")>-1;
S.isIE7=ua.indexOf("msie 7")>-1;
S.isGecko=ua.indexOf("gecko")>-1&&ua.indexOf("safari")==-1;
S.isWebKit=ua.indexOf("applewebkit/")>-1;
var inlineId=/#(.+)$/,galleryName=/^(light|shadow)box\[(.*?)\]/i,inlineParam=/\s*([a-z_]*?)\s*=\s*(.+)\s*/,fileExtension=/[0-9a-z]+$/i,scriptPath=/(.+\/)shadowbox\.js/i;
var open=false,initialized=false,lastOptions={},slideDelay=0,slideStart,slideTimer;
S.current=-1;
S.dimensions=null;
S.ease=function(state){return 1+Math.pow(state-1,3)
};
S.errorInfo={fla:{name:"Flash",url:"http://www.adobe.com/products/flashplayer/"},qt:{name:"QuickTime",url:"http://www.apple.com/quicktime/download/"},wmp:{name:"Windows Media Player",url:"http://www.microsoft.com/windows/windowsmedia/"},f4m:{name:"Flip4Mac",url:"http://www.flip4mac.com/wmv_download.htm"}};
S.gallery=[];
S.onReady=noop;
S.path=null;
S.player=null;
S.playerId="sb-player";
S.options={animate:true,animateFade:true,autoplayMovies:true,continuous:false,enableKeys:true,flashParams:{bgcolor:"#000000",allowfullscreen:true},flashVars:{},flashVersion:"9.0.115",handleOversize:"resize",handleUnsupported:"link",onChange:noop,onClose:noop,onFinish:noop,onOpen:noop,showMovieControls:true,skipSetup:false,slideshowDelay:0,viewportPadding:20};
S.getCurrent=function(){return S.current>-1?S.gallery[S.current]:null
};
S.hasNext=function(){return S.gallery.length>1&&(S.current!=S.gallery.length-1||S.options.continuous)
};
S.isOpen=function(){return open
};
S.isPaused=function(){return slideTimer=="pause"
};
S.applyOptions=function(options){lastOptions=apply({},S.options);
apply(S.options,options)
};
S.revertOptions=function(){apply(S.options,lastOptions)
};
S.init=function(options,callback){if(initialized){return
}initialized=true;
if(S.skin.options){apply(S.options,S.skin.options)
}if(options){apply(S.options,options)
}if(!S.path){var path,scripts=document.getElementsByTagName("script");
for(var i=0,len=scripts.length;
i<len;
++i){path=scriptPath.exec(scripts[i].src);
if(path){S.path=path[1];
break
}}}if(callback){S.onReady=callback
}bindLoad()
};
S.open=function(obj){if(open){return
}var gc=S.makeGallery(obj);
S.gallery=gc[0];
S.current=gc[1];
obj=S.getCurrent();
if(obj==null){return
}S.applyOptions(obj.options||{});
filterGallery();
if(S.gallery.length){obj=S.getCurrent();
if(S.options.onOpen(obj)===false){return
}open=true;
S.skin.onOpen(obj,load)
}};
S.close=function(){if(!open){return
}open=false;
if(S.player){S.player.remove();
S.player=null
}if(typeof slideTimer=="number"){clearTimeout(slideTimer);
slideTimer=null
}slideDelay=0;
listenKeys(false);
S.options.onClose(S.getCurrent());
S.skin.onClose();
S.revertOptions()
};
S.play=function(){if(!S.hasNext()){return
}if(!slideDelay){slideDelay=S.options.slideshowDelay*1000
}if(slideDelay){slideStart=now();
slideTimer=setTimeout(function(){slideDelay=slideStart=0;
S.next()
},slideDelay);
if(S.skin.onPlay){S.skin.onPlay()
}}};
S.pause=function(){if(typeof slideTimer!="number"){return
}slideDelay=Math.max(0,slideDelay-(now()-slideStart));
if(slideDelay){clearTimeout(slideTimer);
slideTimer="pause";
if(S.skin.onPause){S.skin.onPause()
}}};
S.change=function(index){if(!(index in S.gallery)){if(S.options.continuous){index=(index<0?S.gallery.length+index:0);
if(!(index in S.gallery)){return
}}else{return
}}S.current=index;
if(typeof slideTimer=="number"){clearTimeout(slideTimer);
slideTimer=null;
slideDelay=slideStart=0
}S.options.onChange(S.getCurrent());
load(true)
};
S.next=function(){S.change(S.current+1)
};
S.previous=function(){S.change(S.current-1)
};
S.setDimensions=function(height,width,maxHeight,maxWidth,topBottom,leftRight,padding,preserveAspect){var originalHeight=height,originalWidth=width;
var extraHeight=2*padding+topBottom;
if(height+extraHeight>maxHeight){height=maxHeight-extraHeight
}var extraWidth=2*padding+leftRight;
if(width+extraWidth>maxWidth){width=maxWidth-extraWidth
}var changeHeight=(originalHeight-height)/originalHeight,changeWidth=(originalWidth-width)/originalWidth,oversized=(changeHeight>0||changeWidth>0);
if(preserveAspect&&oversized){if(changeHeight>changeWidth){width=Math.round((originalWidth/originalHeight)*height)
}else{if(changeWidth>changeHeight){height=Math.round((originalHeight/originalWidth)*width)
}}}S.dimensions={height:height+topBottom,width:width+leftRight,innerHeight:height,innerWidth:width,top:Math.floor((maxHeight-(height+extraHeight))/2+padding),left:Math.floor((maxWidth-(width+extraWidth))/2+padding),oversized:oversized};
return S.dimensions
};
S.makeGallery=function(obj){var gallery=[],current=-1;
if(typeof obj=="string"){obj=[obj]
}if(typeof obj.length=="number"){each(obj,function(i,o){if(o.content){gallery[i]=o
}else{gallery[i]={content:o}
}});
current=0
}else{if(obj.tagName){var cacheObj=S.getCache(obj);
obj=cacheObj?cacheObj:S.makeObject(obj)
}if(obj.gallery){gallery=[];
var o;
for(var key in S.cache){o=S.cache[key];
if(o.gallery&&o.gallery==obj.gallery){if(current==-1&&o.content==obj.content){current=gallery.length
}gallery.push(o)
}}if(current==-1){gallery.unshift(obj);
current=0
}}else{gallery=[obj];
current=0
}}each(gallery,function(i,o){gallery[i]=apply({},o)
});
return[gallery,current]
};
S.makeObject=function(link,options){var obj={content:link.href,title:link.getAttribute("title")||"",link:link};
if(options){options=apply({},options);
each(["player","title","height","width","gallery"],function(i,o){if(typeof options[o]!="undefined"){obj[o]=options[o];
delete options[o]
}});
obj.options=options
}else{obj.options={}
}if(!obj.player){obj.player=S.getPlayer(obj.content)
}var rel=link.getAttribute("rel");
if(rel){var match=rel.match(galleryName);
if(match){obj.gallery=escape(match[2])
}each(rel.split(";"),function(i,p){match=p.match(inlineParam);
if(match){obj[match[1]]=match[2]
}})
}return obj
};
S.getPlayer=function(content){if(content.indexOf("#")>-1&&content.indexOf(document.location.href)==0){return"inline"
}var q=content.indexOf("?");
if(q>-1){content=content.substring(0,q)
}var ext,m=content.match(fileExtension);
if(m){ext=m[0].toLowerCase()
}if(ext){if(S.img&&S.img.ext.indexOf(ext)>-1){return"img"
}if(S.swf&&S.swf.ext.indexOf(ext)>-1){return"swf"
}if(S.flv&&S.flv.ext.indexOf(ext)>-1){return"flv"
}if(S.qt&&S.qt.ext.indexOf(ext)>-1){if(S.wmp&&S.wmp.ext.indexOf(ext)>-1){return"qtwmp"
}else{return"qt"
}}if(S.wmp&&S.wmp.ext.indexOf(ext)>-1){return"wmp"
}}return"iframe"
};
function filterGallery(){var err=S.errorInfo,plugins=S.plugins,obj,remove,needed,m,format,replace,inlineEl,flashVersion;
for(var i=0;
i<S.gallery.length;
++i){obj=S.gallery[i];
remove=false;
needed=null;
switch(obj.player){case"flv":case"swf":if(!plugins.fla){needed="fla"
}break;
case"qt":if(!plugins.qt){needed="qt"
}break;
case"wmp":if(S.isMac){if(plugins.qt&&plugins.f4m){obj.player="qt"
}else{needed="qtf4m"
}}else{if(!plugins.wmp){needed="wmp"
}}break;
case"qtwmp":if(plugins.qt){obj.player="qt"
}else{if(plugins.wmp){obj.player="wmp"
}else{needed="qtwmp"
}}break
}if(needed){if(S.options.handleUnsupported=="link"){switch(needed){case"qtf4m":format="shared";
replace=[err.qt.url,err.qt.name,err.f4m.url,err.f4m.name];
break;
case"qtwmp":format="either";
replace=[err.qt.url,err.qt.name,err.wmp.url,err.wmp.name];
break;
default:format="single";
replace=[err[needed].url,err[needed].name]
}obj.player="html";
obj.content='<div class="sb-message">'+sprintf(S.lang.errors[format],replace)+"</div>"
}else{remove=true
}}else{if(obj.player=="inline"){m=inlineId.exec(obj.content);
if(m){inlineEl=get(m[1]);
if(inlineEl){obj.content=inlineEl.innerHTML
}else{remove=true
}}else{remove=true
}}else{if(obj.player=="swf"||obj.player=="flv"){flashVersion=(obj.options&&obj.options.flashVersion)||S.options.flashVersion;
if(S.flash&&!S.flash.hasFlashPlayerVersion(flashVersion)){obj.width=310;
obj.height=177
}}}}if(remove){S.gallery.splice(i,1);
if(i<S.current){--S.current
}else{if(i==S.current){S.current=i>0?i-1:i
}}--i
}}}function listenKeys(on){if(!S.options.enableKeys){return
}(on?addEvent:removeEvent)(document,"keydown",handleKey)
}function handleKey(e){if(e.metaKey||e.shiftKey||e.altKey||e.ctrlKey){return
}var code=keyCode(e),handler;
switch(code){case 81:case 88:case 27:handler=S.close;
break;
case 37:handler=S.previous;
break;
case 39:handler=S.next;
break;
case 32:handler=typeof slideTimer=="number"?S.pause:S.play;
break
}if(handler){preventDefault(e);
handler()
}}function load(changing){listenKeys(false);
var obj=S.getCurrent();
var player=(obj.player=="inline"?"html":obj.player);
if(typeof S[player]!="function"){throw"unknown player "+player
}if(changing){S.player.remove();
S.revertOptions();
S.applyOptions(obj.options||{})
}S.player=new S[player](obj,S.playerId);
if(S.gallery.length>1){var next=S.gallery[S.current+1]||S.gallery[0];
if(next.player=="img"){var a=new Image();
a.src=next.content
}var prev=S.gallery[S.current-1]||S.gallery[S.gallery.length-1];
if(prev.player=="img"){var b=new Image();
b.src=prev.content
}}S.skin.onLoad(changing,waitReady)
}function waitReady(){if(!open){return
}if(typeof S.player.ready!="undefined"){var timer=setInterval(function(){if(open){if(S.player.ready){clearInterval(timer);
timer=null;
S.skin.onReady(show)
}}else{clearInterval(timer);
timer=null
}},10)
}else{S.skin.onReady(show)
}}function show(){if(!open){return
}S.player.append(S.skin.body,S.dimensions);
S.skin.onShow(finish)
}function finish(){if(!open){return
}if(S.player.onLoad){S.player.onLoad()
}S.options.onFinish(S.getCurrent());
if(!S.isPaused()){S.play()
}listenKeys(true)
}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(obj,from){var len=this.length>>>0;
from=from||0;
if(from<0){from+=len
}for(;
from<len;
++from){if(from in this&&this[from]===obj){return from
}}return -1
}
}function now(){return(new Date).getTime()
}function apply(original,extension){for(var property in extension){original[property]=extension[property]
}return original
}function each(obj,callback){var i=0,len=obj.length;
for(var value=obj[0];
i<len&&callback.call(value,i,value)!==false;
value=obj[++i]){}}function sprintf(str,replace){return str.replace(/\{(\w+?)\}/g,function(match,i){return replace[i]
})
}function noop(){}function get(id){return document.getElementById(id)
}function remove(el){el.parentNode.removeChild(el)
}var supportsOpacity=true,supportsFixed=true;
function checkSupport(){var body=document.body,div=document.createElement("div");
supportsOpacity=typeof div.style.opacity==="string";
div.style.position="fixed";
div.style.margin=0;
div.style.top="20px";
body.appendChild(div,body.firstChild);
supportsFixed=div.offsetTop==20;
body.removeChild(div)
}S.getStyle=(function(){var opacity=/opacity=([^)]*)/,getComputedStyle=document.defaultView&&document.defaultView.getComputedStyle;
return function(el,style){var ret;
if(!supportsOpacity&&style=="opacity"&&el.currentStyle){ret=opacity.test(el.currentStyle.filter||"")?(parseFloat(RegExp.$1)/100)+"":"";
return ret===""?"1":ret
}if(getComputedStyle){var computedStyle=getComputedStyle(el,null);
if(computedStyle){ret=computedStyle[style]
}if(style=="opacity"&&ret==""){ret="1"
}}else{ret=el.currentStyle[style]
}return ret
}
})();
S.appendHTML=function(el,html){if(el.insertAdjacentHTML){el.insertAdjacentHTML("BeforeEnd",html)
}else{if(el.lastChild){var range=el.ownerDocument.createRange();
range.setStartAfter(el.lastChild);
var frag=range.createContextualFragment(html);
el.appendChild(frag)
}else{el.innerHTML=html
}}};
S.getWindowSize=function(dimension){if(document.compatMode==="CSS1Compat"){return document.documentElement["client"+dimension]
}return document.body["client"+dimension]
};
S.setOpacity=function(el,opacity){var style=el.style;
if(supportsOpacity){style.opacity=(opacity==1?"":opacity)
}else{style.zoom=1;
if(opacity==1){if(typeof style.filter=="string"&&(/alpha/i).test(style.filter)){style.filter=style.filter.replace(/\s*[\w\.]*alpha\([^\)]*\);?/gi,"")
}}else{style.filter=(style.filter||"").replace(/\s*[\w\.]*alpha\([^\)]*\)/gi,"")+" alpha(opacity="+(opacity*100)+")"
}}};
S.clearOpacity=function(el){S.setOpacity(el,1)
};
function getTarget(e){return e.target
}function getPageXY(e){return[e.pageX,e.pageY]
}function preventDefault(e){e.preventDefault()
}function keyCode(e){return e.keyCode
}function addEvent(el,type,handler){jQuery(el).bind(type,handler)
}function removeEvent(el,type,handler){jQuery(el).unbind(type,handler)
}jQuery.fn.shadowbox=function(options){return this.each(function(){var el=jQuery(this);
var opts=jQuery.extend({},options||{},jQuery.metadata?el.metadata():jQuery.meta?el.data():{});
var cls=this.className||"";
opts.width=parseInt((cls.match(/w:(\d+)/)||[])[1])||opts.width;
opts.height=parseInt((cls.match(/h:(\d+)/)||[])[1])||opts.height;
Shadowbox.setup(el,opts)
})
};
var loaded=false,DOMContentLoaded;
if(document.addEventListener){DOMContentLoaded=function(){document.removeEventListener("DOMContentLoaded",DOMContentLoaded,false);
S.load()
}
}else{if(document.attachEvent){DOMContentLoaded=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",DOMContentLoaded);
S.load()
}}
}}function doScrollCheck(){if(loaded){return
}try{document.documentElement.doScroll("left")
}catch(e){setTimeout(doScrollCheck,1);
return
}S.load()
}function bindLoad(){if(document.readyState==="complete"){return S.load()
}if(document.addEventListener){document.addEventListener("DOMContentLoaded",DOMContentLoaded,false);
window.addEventListener("load",S.load,false)
}else{if(document.attachEvent){document.attachEvent("onreadystatechange",DOMContentLoaded);
window.attachEvent("onload",S.load);
var topLevel=false;
try{topLevel=window.frameElement===null
}catch(e){}if(document.documentElement.doScroll&&topLevel){doScrollCheck()
}}}}S.load=function(){if(loaded){return
}if(!document.body){return setTimeout(S.load,13)
}loaded=true;
checkSupport();
S.onReady();
if(!S.options.skipSetup){S.setup()
}S.skin.init()
};
S.plugins={};
if(navigator.plugins&&navigator.plugins.length){var names=[];
each(navigator.plugins,function(i,p){names.push(p.name)
});
names=names.join(",");
var f4m=names.indexOf("Flip4Mac")>-1;
S.plugins={fla:names.indexOf("Shockwave Flash")>-1,qt:names.indexOf("QuickTime")>-1,wmp:!f4m&&names.indexOf("Windows Media")>-1,f4m:f4m}
}else{var detectPlugin=function(name){var axo;
try{axo=new ActiveXObject(name)
}catch(e){}return !!axo
};
S.plugins={fla:detectPlugin("ShockwaveFlash.ShockwaveFlash"),qt:detectPlugin("QuickTime.QuickTime"),wmp:detectPlugin("wmplayer.ocx"),f4m:false}
}var relAttr=/^(light|shadow)box/i,expando="shadowboxCacheKey",cacheKey=1;
S.cache={};
S.select=function(selector){var links=[];
if(!selector){var rel;
each(document.getElementsByTagName("a"),function(i,el){rel=el.getAttribute("rel");
if(rel&&relAttr.test(rel)){links.push(el)
}})
}else{var length=selector.length;
if(length){if(typeof selector=="string"){if(S.find){links=S.find(selector)
}}else{if(length==2&&typeof selector[0]=="string"&&selector[1].nodeType){if(S.find){links=S.find(selector[0],selector[1])
}}else{for(var i=0;
i<length;
++i){links[i]=selector[i]
}}}}else{links.push(selector)
}}return links
};
S.setup=function(selector,options){each(S.select(selector),function(i,link){S.addCache(link,options)
})
};
S.teardown=function(selector){each(S.select(selector),function(i,link){S.removeCache(link)
})
};
S.addCache=function(link,options){var key=link[expando];
if(key==undefined){key=cacheKey++;
link[expando]=key;
addEvent(link,"click",handleClick)
}S.cache[key]=S.makeObject(link,options)
};
S.removeCache=function(link){removeEvent(link,"click",handleClick);
delete S.cache[link[expando]];
link[expando]=null
};
S.getCache=function(link){var key=link[expando];
return(key in S.cache&&S.cache[key])
};
S.clearCache=function(){for(var key in S.cache){S.removeCache(S.cache[key].link)
}S.cache={}
};
function handleClick(e){S.open(this);
if(S.gallery.length){preventDefault(e)
}}S.find=(function(){var chunker=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,done=0,toString=Object.prototype.toString,hasDuplicate=false,baseHasDuplicate=true;
[0,0].sort(function(){baseHasDuplicate=false;
return 0
});
var Sizzle=function(selector,context,results,seed){results=results||[];
var origContext=context=context||document;
if(context.nodeType!==1&&context.nodeType!==9){return[]
}if(!selector||typeof selector!=="string"){return results
}var parts=[],m,set,checkSet,extra,prune=true,contextXML=isXML(context),soFar=selector;
while((chunker.exec(""),m=chunker.exec(soFar))!==null){soFar=m[3];
parts.push(m[1]);
if(m[2]){extra=m[3];
break
}}if(parts.length>1&&origPOS.exec(selector)){if(parts.length===2&&Expr.relative[parts[0]]){set=posProcess(parts[0]+parts[1],context)
}else{set=Expr.relative[parts[0]]?[context]:Sizzle(parts.shift(),context);
while(parts.length){selector=parts.shift();
if(Expr.relative[selector]){selector+=parts.shift()
}set=posProcess(selector,set)
}}}else{if(!seed&&parts.length>1&&context.nodeType===9&&!contextXML&&Expr.match.ID.test(parts[0])&&!Expr.match.ID.test(parts[parts.length-1])){var ret=Sizzle.find(parts.shift(),context,contextXML);
context=ret.expr?Sizzle.filter(ret.expr,ret.set)[0]:ret.set[0]
}if(context){var ret=seed?{expr:parts.pop(),set:makeArray(seed)}:Sizzle.find(parts.pop(),parts.length===1&&(parts[0]==="~"||parts[0]==="+")&&context.parentNode?context.parentNode:context,contextXML);
set=ret.expr?Sizzle.filter(ret.expr,ret.set):ret.set;
if(parts.length>0){checkSet=makeArray(set)
}else{prune=false
}while(parts.length){var cur=parts.pop(),pop=cur;
if(!Expr.relative[cur]){cur=""
}else{pop=parts.pop()
}if(pop==null){pop=context
}Expr.relative[cur](checkSet,pop,contextXML)
}}else{checkSet=parts=[]
}}if(!checkSet){checkSet=set
}if(!checkSet){throw"Syntax error, unrecognized expression: "+(cur||selector)
}if(toString.call(checkSet)==="[object Array]"){if(!prune){results.push.apply(results,checkSet)
}else{if(context&&context.nodeType===1){for(var i=0;
checkSet[i]!=null;
i++){if(checkSet[i]&&(checkSet[i]===true||checkSet[i].nodeType===1&&contains(context,checkSet[i]))){results.push(set[i])
}}}else{for(var i=0;
checkSet[i]!=null;
i++){if(checkSet[i]&&checkSet[i].nodeType===1){results.push(set[i])
}}}}}else{makeArray(checkSet,results)
}if(extra){Sizzle(extra,origContext,results,seed);
Sizzle.uniqueSort(results)
}return results
};
Sizzle.uniqueSort=function(results){if(sortOrder){hasDuplicate=baseHasDuplicate;
results.sort(sortOrder);
if(hasDuplicate){for(var i=1;
i<results.length;
i++){if(results[i]===results[i-1]){results.splice(i--,1)
}}}}return results
};
Sizzle.matches=function(expr,set){return Sizzle(expr,null,null,set)
};
Sizzle.find=function(expr,context,isXML){var set,match;
if(!expr){return[]
}for(var i=0,l=Expr.order.length;
i<l;
i++){var type=Expr.order[i],match;
if((match=Expr.leftMatch[type].exec(expr))){var left=match[1];
match.splice(1,1);
if(left.substr(left.length-1)!=="\\"){match[1]=(match[1]||"").replace(/\\/g,"");
set=Expr.find[type](match,context,isXML);
if(set!=null){expr=expr.replace(Expr.match[type],"");
break
}}}}if(!set){set=context.getElementsByTagName("*")
}return{set:set,expr:expr}
};
Sizzle.filter=function(expr,set,inplace,not){var old=expr,result=[],curLoop=set,match,anyFound,isXMLFilter=set&&set[0]&&isXML(set[0]);
while(expr&&set.length){for(var type in Expr.filter){if((match=Expr.match[type].exec(expr))!=null){var filter=Expr.filter[type],found,item;
anyFound=false;
if(curLoop===result){result=[]
}if(Expr.preFilter[type]){match=Expr.preFilter[type](match,curLoop,inplace,result,not,isXMLFilter);
if(!match){anyFound=found=true
}else{if(match===true){continue
}}}if(match){for(var i=0;
(item=curLoop[i])!=null;
i++){if(item){found=filter(item,match,i,curLoop);
var pass=not^!!found;
if(inplace&&found!=null){if(pass){anyFound=true
}else{curLoop[i]=false
}}else{if(pass){result.push(item);
anyFound=true
}}}}}if(found!==undefined){if(!inplace){curLoop=result
}expr=expr.replace(Expr.match[type],"");
if(!anyFound){return[]
}break
}}}if(expr===old){if(anyFound==null){throw"Syntax error, unrecognized expression: "+expr
}else{break
}}old=expr
}return curLoop
};
var Expr=Sizzle.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(elem){return elem.getAttribute("href")
}},relative:{"+":function(checkSet,part){var isPartStr=typeof part==="string",isTag=isPartStr&&!/\W/.test(part),isPartStrNotTag=isPartStr&&!isTag;
if(isTag){part=part.toLowerCase()
}for(var i=0,l=checkSet.length,elem;
i<l;
i++){if((elem=checkSet[i])){while((elem=elem.previousSibling)&&elem.nodeType!==1){}checkSet[i]=isPartStrNotTag||elem&&elem.nodeName.toLowerCase()===part?elem||false:elem===part
}}if(isPartStrNotTag){Sizzle.filter(part,checkSet,true)
}},">":function(checkSet,part){var isPartStr=typeof part==="string";
if(isPartStr&&!/\W/.test(part)){part=part.toLowerCase();
for(var i=0,l=checkSet.length;
i<l;
i++){var elem=checkSet[i];
if(elem){var parent=elem.parentNode;
checkSet[i]=parent.nodeName.toLowerCase()===part?parent:false
}}}else{for(var i=0,l=checkSet.length;
i<l;
i++){var elem=checkSet[i];
if(elem){checkSet[i]=isPartStr?elem.parentNode:elem.parentNode===part
}}if(isPartStr){Sizzle.filter(part,checkSet,true)
}}},"":function(checkSet,part,isXML){var doneName=done++,checkFn=dirCheck;
if(typeof part==="string"&&!/\W/.test(part)){var nodeCheck=part=part.toLowerCase();
checkFn=dirNodeCheck
}checkFn("parentNode",part,doneName,checkSet,nodeCheck,isXML)
},"~":function(checkSet,part,isXML){var doneName=done++,checkFn=dirCheck;
if(typeof part==="string"&&!/\W/.test(part)){var nodeCheck=part=part.toLowerCase();
checkFn=dirNodeCheck
}checkFn("previousSibling",part,doneName,checkSet,nodeCheck,isXML)
}},find:{ID:function(match,context,isXML){if(typeof context.getElementById!=="undefined"&&!isXML){var m=context.getElementById(match[1]);
return m?[m]:[]
}},NAME:function(match,context){if(typeof context.getElementsByName!=="undefined"){var ret=[],results=context.getElementsByName(match[1]);
for(var i=0,l=results.length;
i<l;
i++){if(results[i].getAttribute("name")===match[1]){ret.push(results[i])
}}return ret.length===0?null:ret
}},TAG:function(match,context){return context.getElementsByTagName(match[1])
}},preFilter:{CLASS:function(match,curLoop,inplace,result,not,isXML){match=" "+match[1].replace(/\\/g,"")+" ";
if(isXML){return match
}for(var i=0,elem;
(elem=curLoop[i])!=null;
i++){if(elem){if(not^(elem.className&&(" "+elem.className+" ").replace(/[\t\n]/g," ").indexOf(match)>=0)){if(!inplace){result.push(elem)
}}else{if(inplace){curLoop[i]=false
}}}}return false
},ID:function(match){return match[1].replace(/\\/g,"")
},TAG:function(match,curLoop){return match[1].toLowerCase()
},CHILD:function(match){if(match[1]==="nth"){var test=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(match[2]==="even"&&"2n"||match[2]==="odd"&&"2n+1"||!/\D/.test(match[2])&&"0n+"+match[2]||match[2]);
match[2]=(test[1]+(test[2]||1))-0;
match[3]=test[3]-0
}match[0]=done++;
return match
},ATTR:function(match,curLoop,inplace,result,not,isXML){var name=match[1].replace(/\\/g,"");
if(!isXML&&Expr.attrMap[name]){match[1]=Expr.attrMap[name]
}if(match[2]==="~="){match[4]=" "+match[4]+" "
}return match
},PSEUDO:function(match,curLoop,inplace,result,not){if(match[1]==="not"){if((chunker.exec(match[3])||"").length>1||/^\w/.test(match[3])){match[3]=Sizzle(match[3],null,null,curLoop)
}else{var ret=Sizzle.filter(match[3],curLoop,inplace,true^not);
if(!inplace){result.push.apply(result,ret)
}return false
}}else{if(Expr.match.POS.test(match[0])||Expr.match.CHILD.test(match[0])){return true
}}return match
},POS:function(match){match.unshift(true);
return match
}},filters:{enabled:function(elem){return elem.disabled===false&&elem.type!=="hidden"
},disabled:function(elem){return elem.disabled===true
},checked:function(elem){return elem.checked===true
},selected:function(elem){elem.parentNode.selectedIndex;
return elem.selected===true
},parent:function(elem){return !!elem.firstChild
},empty:function(elem){return !elem.firstChild
},has:function(elem,i,match){return !!Sizzle(match[3],elem).length
},header:function(elem){return/h\d/i.test(elem.nodeName)
},text:function(elem){return"text"===elem.type
},radio:function(elem){return"radio"===elem.type
},checkbox:function(elem){return"checkbox"===elem.type
},file:function(elem){return"file"===elem.type
},password:function(elem){return"password"===elem.type
},submit:function(elem){return"submit"===elem.type
},image:function(elem){return"image"===elem.type
},reset:function(elem){return"reset"===elem.type
},button:function(elem){return"button"===elem.type||elem.nodeName.toLowerCase()==="button"
},input:function(elem){return/input|select|textarea|button/i.test(elem.nodeName)
}},setFilters:{first:function(elem,i){return i===0
},last:function(elem,i,match,array){return i===array.length-1
},even:function(elem,i){return i%2===0
},odd:function(elem,i){return i%2===1
},lt:function(elem,i,match){return i<match[3]-0
},gt:function(elem,i,match){return i>match[3]-0
},nth:function(elem,i,match){return match[3]-0===i
},eq:function(elem,i,match){return match[3]-0===i
}},filter:{PSEUDO:function(elem,match,i,array){var name=match[1],filter=Expr.filters[name];
if(filter){return filter(elem,i,match,array)
}else{if(name==="contains"){return(elem.textContent||elem.innerText||getText([elem])||"").indexOf(match[3])>=0
}else{if(name==="not"){var not=match[3];
for(var i=0,l=not.length;
i<l;
i++){if(not[i]===elem){return false
}}return true
}else{throw"Syntax error, unrecognized expression: "+name
}}}},CHILD:function(elem,match){var type=match[1],node=elem;
switch(type){case"only":case"first":while((node=node.previousSibling)){if(node.nodeType===1){return false
}}if(type==="first"){return true
}node=elem;
case"last":while((node=node.nextSibling)){if(node.nodeType===1){return false
}}return true;
case"nth":var first=match[2],last=match[3];
if(first===1&&last===0){return true
}var doneName=match[0],parent=elem.parentNode;
if(parent&&(parent.sizcache!==doneName||!elem.nodeIndex)){var count=0;
for(node=parent.firstChild;
node;
node=node.nextSibling){if(node.nodeType===1){node.nodeIndex=++count
}}parent.sizcache=doneName
}var diff=elem.nodeIndex-last;
if(first===0){return diff===0
}else{return(diff%first===0&&diff/first>=0)
}}},ID:function(elem,match){return elem.nodeType===1&&elem.getAttribute("id")===match
},TAG:function(elem,match){return(match==="*"&&elem.nodeType===1)||elem.nodeName.toLowerCase()===match
},CLASS:function(elem,match){return(" "+(elem.className||elem.getAttribute("class"))+" ").indexOf(match)>-1
},ATTR:function(elem,match){var name=match[1],result=Expr.attrHandle[name]?Expr.attrHandle[name](elem):elem[name]!=null?elem[name]:elem.getAttribute(name),value=result+"",type=match[2],check=match[4];
return result==null?type==="!=":type==="="?value===check:type==="*="?value.indexOf(check)>=0:type==="~="?(" "+value+" ").indexOf(check)>=0:!check?value&&result!==false:type==="!="?value!==check:type==="^="?value.indexOf(check)===0:type==="$="?value.substr(value.length-check.length)===check:type==="|="?value===check||value.substr(0,check.length+1)===check+"-":false
},POS:function(elem,match,i,array){var name=match[2],filter=Expr.setFilters[name];
if(filter){return filter(elem,i,match,array)
}}}};
var origPOS=Expr.match.POS;
for(var type in Expr.match){Expr.match[type]=new RegExp(Expr.match[type].source+/(?![^\[]*\])(?![^\(]*\))/.source);
Expr.leftMatch[type]=new RegExp(/(^(?:.|\r|\n)*?)/.source+Expr.match[type].source)
}var makeArray=function(array,results){array=Array.prototype.slice.call(array,0);
if(results){results.push.apply(results,array);
return results
}return array
};
try{Array.prototype.slice.call(document.documentElement.childNodes,0)
}catch(e){makeArray=function(array,results){var ret=results||[];
if(toString.call(array)==="[object Array]"){Array.prototype.push.apply(ret,array)
}else{if(typeof array.length==="number"){for(var i=0,l=array.length;
i<l;
i++){ret.push(array[i])
}}else{for(var i=0;
array[i];
i++){ret.push(array[i])
}}}return ret
}
}var sortOrder;
if(document.documentElement.compareDocumentPosition){sortOrder=function(a,b){if(!a.compareDocumentPosition||!b.compareDocumentPosition){if(a==b){hasDuplicate=true
}return a.compareDocumentPosition?-1:1
}var ret=a.compareDocumentPosition(b)&4?-1:a===b?0:1;
if(ret===0){hasDuplicate=true
}return ret
}
}else{if("sourceIndex" in document.documentElement){sortOrder=function(a,b){if(!a.sourceIndex||!b.sourceIndex){if(a==b){hasDuplicate=true
}return a.sourceIndex?-1:1
}var ret=a.sourceIndex-b.sourceIndex;
if(ret===0){hasDuplicate=true
}return ret
}
}else{if(document.createRange){sortOrder=function(a,b){if(!a.ownerDocument||!b.ownerDocument){if(a==b){hasDuplicate=true
}return a.ownerDocument?-1:1
}var aRange=a.ownerDocument.createRange(),bRange=b.ownerDocument.createRange();
aRange.setStart(a,0);
aRange.setEnd(a,0);
bRange.setStart(b,0);
bRange.setEnd(b,0);
var ret=aRange.compareBoundaryPoints(Range.START_TO_END,bRange);
if(ret===0){hasDuplicate=true
}return ret
}
}}}function getText(elems){var ret="",elem;
for(var i=0;
elems[i];
i++){elem=elems[i];
if(elem.nodeType===3||elem.nodeType===4){ret+=elem.nodeValue
}else{if(elem.nodeType!==8){ret+=getText(elem.childNodes)
}}}return ret
}(function(){var form=document.createElement("div"),id="script"+(new Date).getTime();
form.innerHTML="<a name='"+id+"'/>";
var root=document.documentElement;
root.insertBefore(form,root.firstChild);
if(document.getElementById(id)){Expr.find.ID=function(match,context,isXML){if(typeof context.getElementById!=="undefined"&&!isXML){var m=context.getElementById(match[1]);
return m?m.id===match[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===match[1]?[m]:undefined:[]
}};
Expr.filter.ID=function(elem,match){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");
return elem.nodeType===1&&node&&node.nodeValue===match
}
}root.removeChild(form);
root=form=null
})();
(function(){var div=document.createElement("div");
div.appendChild(document.createComment(""));
if(div.getElementsByTagName("*").length>0){Expr.find.TAG=function(match,context){var results=context.getElementsByTagName(match[1]);
if(match[1]==="*"){var tmp=[];
for(var i=0;
results[i];
i++){if(results[i].nodeType===1){tmp.push(results[i])
}}results=tmp
}return results
}
}div.innerHTML="<a href='#'></a>";
if(div.firstChild&&typeof div.firstChild.getAttribute!=="undefined"&&div.firstChild.getAttribute("href")!=="#"){Expr.attrHandle.href=function(elem){return elem.getAttribute("href",2)
}
}div=null
})();
if(document.querySelectorAll){(function(){var oldSizzle=Sizzle,div=document.createElement("div");
div.innerHTML="<p class='TEST'></p>";
if(div.querySelectorAll&&div.querySelectorAll(".TEST").length===0){return
}Sizzle=function(query,context,extra,seed){context=context||document;
if(!seed&&context.nodeType===9&&!isXML(context)){try{return makeArray(context.querySelectorAll(query),extra)
}catch(e){}}return oldSizzle(query,context,extra,seed)
};
for(var prop in oldSizzle){Sizzle[prop]=oldSizzle[prop]
}div=null
})()
}(function(){var div=document.createElement("div");
div.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!div.getElementsByClassName||div.getElementsByClassName("e").length===0){return
}div.lastChild.className="e";
if(div.getElementsByClassName("e").length===1){return
}Expr.order.splice(1,0,"CLASS");
Expr.find.CLASS=function(match,context,isXML){if(typeof context.getElementsByClassName!=="undefined"&&!isXML){return context.getElementsByClassName(match[1])
}};
div=null
})();
function dirNodeCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){for(var i=0,l=checkSet.length;
i<l;
i++){var elem=checkSet[i];
if(elem){elem=elem[dir];
var match=false;
while(elem){if(elem.sizcache===doneName){match=checkSet[elem.sizset];
break
}if(elem.nodeType===1&&!isXML){elem.sizcache=doneName;
elem.sizset=i
}if(elem.nodeName.toLowerCase()===cur){match=elem;
break
}elem=elem[dir]
}checkSet[i]=match
}}}function dirCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){for(var i=0,l=checkSet.length;
i<l;
i++){var elem=checkSet[i];
if(elem){elem=elem[dir];
var match=false;
while(elem){if(elem.sizcache===doneName){match=checkSet[elem.sizset];
break
}if(elem.nodeType===1){if(!isXML){elem.sizcache=doneName;
elem.sizset=i
}if(typeof cur!=="string"){if(elem===cur){match=true;
break
}}else{if(Sizzle.filter(cur,[elem]).length>0){match=elem;
break
}}}elem=elem[dir]
}checkSet[i]=match
}}}var contains=document.compareDocumentPosition?function(a,b){return a.compareDocumentPosition(b)&16
}:function(a,b){return a!==b&&(a.contains?a.contains(b):true)
};
var isXML=function(elem){var documentElement=(elem?elem.ownerDocument||elem:0).documentElement;
return documentElement?documentElement.nodeName!=="HTML":false
};
var posProcess=function(selector,context){var tmpSet=[],later="",match,root=context.nodeType?[context]:context;
while((match=Expr.match.PSEUDO.exec(selector))){later+=match[0];
selector=selector.replace(Expr.match.PSEUDO,"")
}selector=Expr.relative[selector]?selector+"*":selector;
for(var i=0,l=root.length;
i<l;
i++){Sizzle(selector,root[i],tmpSet)
}return Sizzle.filter(later,tmpSet)
};
return Sizzle
})();
S.flash=(function(){var swfobject=function(){var UNDEF="undefined",OBJECT="object",SHOCKWAVE_FLASH="Shockwave Flash",SHOCKWAVE_FLASH_AX="ShockwaveFlash.ShockwaveFlash",FLASH_MIME_TYPE="application/x-shockwave-flash",EXPRESS_INSTALL_ID="SWFObjectExprInst",win=window,doc=document,nav=navigator,domLoadFnArr=[],regObjArr=[],objIdArr=[],listenersArr=[],script,timer=null,storedAltContent=null,storedAltContentId=null,isDomLoaded=false,isExpressInstallActive=false;
var ua=function(){var w3cdom=typeof doc.getElementById!=UNDEF&&typeof doc.getElementsByTagName!=UNDEF&&typeof doc.createElement!=UNDEF,playerVersion=[0,0,0],d=null;
if(typeof nav.plugins!=UNDEF&&typeof nav.plugins[SHOCKWAVE_FLASH]==OBJECT){d=nav.plugins[SHOCKWAVE_FLASH].description;
if(d&&!(typeof nav.mimeTypes!=UNDEF&&nav.mimeTypes[FLASH_MIME_TYPE]&&!nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin)){d=d.replace(/^.*\s+(\S+\s+\S+$)/,"$1");
playerVersion[0]=parseInt(d.replace(/^(.*)\..*$/,"$1"),10);
playerVersion[1]=parseInt(d.replace(/^.*\.(.*)\s.*$/,"$1"),10);
playerVersion[2]=/r/.test(d)?parseInt(d.replace(/^.*r(.*)$/,"$1"),10):0
}}else{if(typeof win.ActiveXObject!=UNDEF){var a=null,fp6Crash=false;
try{a=new ActiveXObject(SHOCKWAVE_FLASH_AX+".7")
}catch(e){try{a=new ActiveXObject(SHOCKWAVE_FLASH_AX+".6");
playerVersion=[6,0,21];
a.AllowScriptAccess="always"
}catch(e){if(playerVersion[0]==6){fp6Crash=true
}}if(!fp6Crash){try{a=new ActiveXObject(SHOCKWAVE_FLASH_AX)
}catch(e){}}}if(!fp6Crash&&a){try{d=a.GetVariable("$version");
if(d){d=d.split(" ")[1].split(",");
playerVersion=[parseInt(d[0],10),parseInt(d[1],10),parseInt(d[2],10)]
}}catch(e){}}}}var u=nav.userAgent.toLowerCase(),p=nav.platform.toLowerCase(),webkit=/webkit/.test(u)?parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,ie=false,windows=p?/win/.test(p):/win/.test(u),mac=p?/mac/.test(p):/mac/.test(u);
/*@cc_on
			ie = true;
			@if (@_win32)
				windows = true;
			@elif (@_mac)
				mac = true;
			@end
		@*/
return{w3cdom:w3cdom,pv:playerVersion,webkit:webkit,ie:ie,win:windows,mac:mac}
}();
var onDomLoad=function(){if(!ua.w3cdom){return
}addDomLoadEvent(main);
if(ua.ie&&ua.win){try{doc.write("<script id=__ie_ondomload defer=true src=//:><\/script>");
script=getElementById("__ie_ondomload");
if(script){addListener(script,"onreadystatechange",checkReadyState)
}}catch(e){}}if(ua.webkit&&typeof doc.readyState!=UNDEF){timer=setInterval(function(){if(/loaded|complete/.test(doc.readyState)){callDomLoadFunctions()
}},10)
}if(typeof doc.addEventListener!=UNDEF){doc.addEventListener("DOMContentLoaded",callDomLoadFunctions,null)
}addLoadEvent(callDomLoadFunctions)
}();
function checkReadyState(){if(script.readyState=="complete"){script.parentNode.removeChild(script);
callDomLoadFunctions()
}}function callDomLoadFunctions(){if(isDomLoaded){return
}if(ua.ie&&ua.win){var s=createElement("span");
try{var t=doc.getElementsByTagName("body")[0].appendChild(s);
t.parentNode.removeChild(t)
}catch(e){return
}}isDomLoaded=true;
if(timer){clearInterval(timer);
timer=null
}var dl=domLoadFnArr.length;
for(var i=0;
i<dl;
i++){domLoadFnArr[i]()
}}function addDomLoadEvent(fn){if(isDomLoaded){fn()
}else{domLoadFnArr[domLoadFnArr.length]=fn
}}function addLoadEvent(fn){if(typeof win.addEventListener!=UNDEF){win.addEventListener("load",fn,false)
}else{if(typeof doc.addEventListener!=UNDEF){doc.addEventListener("load",fn,false)
}else{if(typeof win.attachEvent!=UNDEF){addListener(win,"onload",fn)
}else{if(typeof win.onload=="function"){var fnOld=win.onload;
win.onload=function(){fnOld();
fn()
}
}else{win.onload=fn
}}}}}function main(){var rl=regObjArr.length;
for(var i=0;
i<rl;
i++){var id=regObjArr[i].id;
if(ua.pv[0]>0){var obj=getElementById(id);
if(obj){regObjArr[i].width=obj.getAttribute("width")?obj.getAttribute("width"):"0";
regObjArr[i].height=obj.getAttribute("height")?obj.getAttribute("height"):"0";
if(hasPlayerVersion(regObjArr[i].swfVersion)){if(ua.webkit&&ua.webkit<312){fixParams(obj)
}setVisibility(id,true)
}else{if(regObjArr[i].expressInstall&&!isExpressInstallActive&&hasPlayerVersion("6.0.65")&&(ua.win||ua.mac)){showExpressInstall(regObjArr[i])
}else{displayAltContent(obj)
}}}}else{setVisibility(id,true)
}}}function fixParams(obj){var nestedObj=obj.getElementsByTagName(OBJECT)[0];
if(nestedObj){var e=createElement("embed"),a=nestedObj.attributes;
if(a){var al=a.length;
for(var i=0;
i<al;
i++){if(a[i].nodeName=="DATA"){e.setAttribute("src",a[i].nodeValue)
}else{e.setAttribute(a[i].nodeName,a[i].nodeValue)
}}}var c=nestedObj.childNodes;
if(c){var cl=c.length;
for(var j=0;
j<cl;
j++){if(c[j].nodeType==1&&c[j].nodeName=="PARAM"){e.setAttribute(c[j].getAttribute("name"),c[j].getAttribute("value"))
}}}obj.parentNode.replaceChild(e,obj)
}}function showExpressInstall(regObj){isExpressInstallActive=true;
var obj=getElementById(regObj.id);
if(obj){if(regObj.altContentId){var ac=getElementById(regObj.altContentId);
if(ac){storedAltContent=ac;
storedAltContentId=regObj.altContentId
}}else{storedAltContent=abstractAltContent(obj)
}if(!(/%$/.test(regObj.width))&&parseInt(regObj.width,10)<310){regObj.width="310"
}if(!(/%$/.test(regObj.height))&&parseInt(regObj.height,10)<137){regObj.height="137"
}doc.title=doc.title.slice(0,47)+" - Flash Player Installation";
var pt=ua.ie&&ua.win?"ActiveX":"PlugIn",dt=doc.title,fv="MMredirectURL="+win.location+"&MMplayerType="+pt+"&MMdoctitle="+dt,replaceId=regObj.id;
if(ua.ie&&ua.win&&obj.readyState!=4){var newObj=createElement("div");
replaceId+="SWFObjectNew";
newObj.setAttribute("id",replaceId);
obj.parentNode.insertBefore(newObj,obj);
obj.style.display="none";
var fn=function(){obj.parentNode.removeChild(obj)
};
addListener(win,"onload",fn)
}createSWF({data:regObj.expressInstall,id:EXPRESS_INSTALL_ID,width:regObj.width,height:regObj.height},{flashvars:fv},replaceId)
}}function displayAltContent(obj){if(ua.ie&&ua.win&&obj.readyState!=4){var el=createElement("div");
obj.parentNode.insertBefore(el,obj);
el.parentNode.replaceChild(abstractAltContent(obj),el);
obj.style.display="none";
var fn=function(){obj.parentNode.removeChild(obj)
};
addListener(win,"onload",fn)
}else{obj.parentNode.replaceChild(abstractAltContent(obj),obj)
}}function abstractAltContent(obj){var ac=createElement("div");
if(ua.win&&ua.ie){ac.innerHTML=obj.innerHTML
}else{var nestedObj=obj.getElementsByTagName(OBJECT)[0];
if(nestedObj){var c=nestedObj.childNodes;
if(c){var cl=c.length;
for(var i=0;
i<cl;
i++){if(!(c[i].nodeType==1&&c[i].nodeName=="PARAM")&&!(c[i].nodeType==8)){ac.appendChild(c[i].cloneNode(true))
}}}}}return ac
}function createSWF(attObj,parObj,id){var r,el=getElementById(id);
if(el){if(typeof attObj.id==UNDEF){attObj.id=id
}if(ua.ie&&ua.win){var att="";
for(var i in attObj){if(attObj[i]!=Object.prototype[i]){if(i.toLowerCase()=="data"){parObj.movie=attObj[i]
}else{if(i.toLowerCase()=="styleclass"){att+=' class="'+attObj[i]+'"'
}else{if(i.toLowerCase()!="classid"){att+=" "+i+'="'+attObj[i]+'"'
}}}}}var par="";
for(var j in parObj){if(parObj[j]!=Object.prototype[j]){par+='<param name="'+j+'" value="'+parObj[j]+'" />'
}}el.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+att+">"+par+"</object>";
objIdArr[objIdArr.length]=attObj.id;
r=getElementById(attObj.id)
}else{if(ua.webkit&&ua.webkit<312){var e=createElement("embed");
e.setAttribute("type",FLASH_MIME_TYPE);
for(var k in attObj){if(attObj[k]!=Object.prototype[k]){if(k.toLowerCase()=="data"){e.setAttribute("src",attObj[k])
}else{if(k.toLowerCase()=="styleclass"){e.setAttribute("class",attObj[k])
}else{if(k.toLowerCase()!="classid"){e.setAttribute(k,attObj[k])
}}}}}for(var l in parObj){if(parObj[l]!=Object.prototype[l]){if(l.toLowerCase()!="movie"){e.setAttribute(l,parObj[l])
}}}el.parentNode.replaceChild(e,el);
r=e
}else{var o=createElement(OBJECT);
o.setAttribute("type",FLASH_MIME_TYPE);
for(var m in attObj){if(attObj[m]!=Object.prototype[m]){if(m.toLowerCase()=="styleclass"){o.setAttribute("class",attObj[m])
}else{if(m.toLowerCase()!="classid"){o.setAttribute(m,attObj[m])
}}}}for(var n in parObj){if(parObj[n]!=Object.prototype[n]&&n.toLowerCase()!="movie"){createObjParam(o,n,parObj[n])
}}el.parentNode.replaceChild(o,el);
r=o
}}}return r
}function createObjParam(el,pName,pValue){var p=createElement("param");
p.setAttribute("name",pName);
p.setAttribute("value",pValue);
el.appendChild(p)
}function removeSWF(id){var obj=getElementById(id);
if(obj&&(obj.nodeName=="OBJECT"||obj.nodeName=="EMBED")){if(ua.ie&&ua.win){if(obj.readyState==4){removeObjectInIE(id)
}else{win.attachEvent("onload",function(){removeObjectInIE(id)
})
}}else{obj.parentNode.removeChild(obj)
}}}function removeObjectInIE(id){var obj=getElementById(id);
if(obj){for(var i in obj){if(typeof obj[i]=="function"){obj[i]=null
}}obj.parentNode.removeChild(obj)
}}function getElementById(id){var el=null;
try{el=doc.getElementById(id)
}catch(e){}return el
}function createElement(el){return doc.createElement(el)
}function addListener(target,eventType,fn){target.attachEvent(eventType,fn);
listenersArr[listenersArr.length]=[target,eventType,fn]
}function hasPlayerVersion(rv){var pv=ua.pv,v=rv.split(".");
v[0]=parseInt(v[0],10);
v[1]=parseInt(v[1],10)||0;
v[2]=parseInt(v[2],10)||0;
return(pv[0]>v[0]||(pv[0]==v[0]&&pv[1]>v[1])||(pv[0]==v[0]&&pv[1]==v[1]&&pv[2]>=v[2]))?true:false
}function createCSS(sel,decl){if(ua.ie&&ua.mac){return
}var h=doc.getElementsByTagName("head")[0],s=createElement("style");
s.setAttribute("type","text/css");
s.setAttribute("media","screen");
if(!(ua.ie&&ua.win)&&typeof doc.createTextNode!=UNDEF){s.appendChild(doc.createTextNode(sel+" {"+decl+"}"))
}h.appendChild(s);
if(ua.ie&&ua.win&&typeof doc.styleSheets!=UNDEF&&doc.styleSheets.length>0){var ls=doc.styleSheets[doc.styleSheets.length-1];
if(typeof ls.addRule==OBJECT){ls.addRule(sel,decl)
}}}function setVisibility(id,isVisible){var v=isVisible?"visible":"hidden";
if(isDomLoaded&&getElementById(id)){getElementById(id).style.visibility=v
}else{createCSS("#"+id,"visibility:"+v)
}}function urlEncodeIfNecessary(s){var regex=/[\\\"<>\.;]/;
var hasBadChars=regex.exec(s)!=null;
return hasBadChars?encodeURIComponent(s):s
}var cleanup=function(){if(ua.ie&&ua.win){window.attachEvent("onunload",function(){var ll=listenersArr.length;
for(var i=0;
i<ll;
i++){listenersArr[i][0].detachEvent(listenersArr[i][1],listenersArr[i][2])
}var il=objIdArr.length;
for(var j=0;
j<il;
j++){removeSWF(objIdArr[j])
}for(var k in ua){ua[k]=null
}ua=null;
for(var l in swfobject){swfobject[l]=null
}swfobject=null
})
}}();
return{registerObject:function(objectIdStr,swfVersionStr,xiSwfUrlStr){if(!ua.w3cdom||!objectIdStr||!swfVersionStr){return
}var regObj={};
regObj.id=objectIdStr;
regObj.swfVersion=swfVersionStr;
regObj.expressInstall=xiSwfUrlStr?xiSwfUrlStr:false;
regObjArr[regObjArr.length]=regObj;
setVisibility(objectIdStr,false)
},getObjectById:function(objectIdStr){var r=null;
if(ua.w3cdom){var o=getElementById(objectIdStr);
if(o){var n=o.getElementsByTagName(OBJECT)[0];
if(!n||(n&&typeof o.SetVariable!=UNDEF)){r=o
}else{if(typeof n.SetVariable!=UNDEF){r=n
}}}}return r
},embedSWF:function(swfUrlStr,replaceElemIdStr,widthStr,heightStr,swfVersionStr,xiSwfUrlStr,flashvarsObj,parObj,attObj){if(!ua.w3cdom||!swfUrlStr||!replaceElemIdStr||!widthStr||!heightStr||!swfVersionStr){return
}widthStr+="";
heightStr+="";
if(hasPlayerVersion(swfVersionStr)){setVisibility(replaceElemIdStr,false);
var att={};
if(attObj&&typeof attObj===OBJECT){for(var i in attObj){if(attObj[i]!=Object.prototype[i]){att[i]=attObj[i]
}}}att.data=swfUrlStr;
att.width=widthStr;
att.height=heightStr;
var par={};
if(parObj&&typeof parObj===OBJECT){for(var j in parObj){if(parObj[j]!=Object.prototype[j]){par[j]=parObj[j]
}}}if(flashvarsObj&&typeof flashvarsObj===OBJECT){for(var k in flashvarsObj){if(flashvarsObj[k]!=Object.prototype[k]){if(typeof par.flashvars!=UNDEF){par.flashvars+="&"+k+"="+flashvarsObj[k]
}else{par.flashvars=k+"="+flashvarsObj[k]
}}}}addDomLoadEvent(function(){createSWF(att,par,replaceElemIdStr);
if(att.id==replaceElemIdStr){setVisibility(replaceElemIdStr,true)
}})
}else{if(xiSwfUrlStr&&!isExpressInstallActive&&hasPlayerVersion("6.0.65")&&(ua.win||ua.mac)){isExpressInstallActive=true;
setVisibility(replaceElemIdStr,false);
addDomLoadEvent(function(){var regObj={};
regObj.id=regObj.altContentId=replaceElemIdStr;
regObj.width=widthStr;
regObj.height=heightStr;
regObj.expressInstall=xiSwfUrlStr;
showExpressInstall(regObj)
})
}}},getFlashPlayerVersion:function(){return{major:ua.pv[0],minor:ua.pv[1],release:ua.pv[2]}
},hasFlashPlayerVersion:hasPlayerVersion,createSWF:function(attObj,parObj,replaceElemIdStr){if(ua.w3cdom){return createSWF(attObj,parObj,replaceElemIdStr)
}else{return undefined
}},removeSWF:function(objElemIdStr){if(ua.w3cdom){removeSWF(objElemIdStr)
}},createCSS:function(sel,decl){if(ua.w3cdom){createCSS(sel,decl)
}},addDomLoadEvent:addDomLoadEvent,addLoadEvent:addLoadEvent,getQueryParamValue:function(param){var q=doc.location.search||doc.location.hash;
if(param==null){return urlEncodeIfNecessary(q)
}if(q){var pairs=q.substring(1).split("&");
for(var i=0;
i<pairs.length;
i++){if(pairs[i].substring(0,pairs[i].indexOf("="))==param){return urlEncodeIfNecessary(pairs[i].substring((pairs[i].indexOf("=")+1)))
}}}return""
},expressInstallCallback:function(){if(isExpressInstallActive&&storedAltContent){var obj=getElementById(EXPRESS_INSTALL_ID);
if(obj){obj.parentNode.replaceChild(storedAltContent,obj);
if(storedAltContentId){setVisibility(storedAltContentId,true);
if(ua.ie&&ua.win){storedAltContent.style.display="block"
}}storedAltContent=null;
storedAltContentId=null;
isExpressInstallActive=false
}}}}
}();
return swfobject
})();
S.lang={code:"en",of:"of",loading:"loading",cancel:"Cancel",next:"Next",previous:"Previous",play:"Play",pause:"Pause",close:"Close",errors:{single:'You must install the <a href="{0}">{1}</a> browser plugin to view this content.',shared:'You must install both the <a href="{0}">{1}</a> and <a href="{2}">{3}</a> browser plugins to view this content.',either:'You must install either the <a href="{0}">{1}</a> or the <a href="{2}">{3}</a> browser plugin to view this content.'}};
var pre,proxyId="sb-drag-proxy",dragData,dragProxy,dragTarget;
function resetDrag(){dragData={x:0,y:0,startX:null,startY:null}
}function updateProxy(){var dims=S.dimensions;
apply(dragProxy.style,{height:dims.innerHeight+"px",width:dims.innerWidth+"px"})
}function enableDrag(){resetDrag();
var style=["position:absolute","cursor:"+(S.isGecko?"-moz-grab":"move"),"background-color:"+(S.isIE?"#fff;filter:alpha(opacity=0)":"transparent")].join(";");
S.appendHTML(S.skin.body,'<div id="'+proxyId+'" style="'+style+'"></div>');
dragProxy=get(proxyId);
updateProxy();
addEvent(dragProxy,"mousedown",startDrag)
}function disableDrag(){if(dragProxy){removeEvent(dragProxy,"mousedown",startDrag);
remove(dragProxy);
dragProxy=null
}dragTarget=null
}function startDrag(e){preventDefault(e);
var xy=getPageXY(e);
dragData.startX=xy[0];
dragData.startY=xy[1];
dragTarget=get(S.player.id);
addEvent(document,"mousemove",positionDrag);
addEvent(document,"mouseup",endDrag);
if(S.isGecko){dragProxy.style.cursor="-moz-grabbing"
}}function positionDrag(e){var player=S.player,dims=S.dimensions,xy=getPageXY(e);
var moveX=xy[0]-dragData.startX;
dragData.startX+=moveX;
dragData.x=Math.max(Math.min(0,dragData.x+moveX),dims.innerWidth-player.width);
var moveY=xy[1]-dragData.startY;
dragData.startY+=moveY;
dragData.y=Math.max(Math.min(0,dragData.y+moveY),dims.innerHeight-player.height);
apply(dragTarget.style,{left:dragData.x+"px",top:dragData.y+"px"})
}function endDrag(){removeEvent(document,"mousemove",positionDrag);
removeEvent(document,"mouseup",endDrag);
if(S.isGecko){dragProxy.style.cursor="-moz-grab"
}}S.img=function(obj,id){this.obj=obj;
this.id=id;
this.ready=false;
var self=this;
pre=new Image();
pre.onload=function(){self.height=obj.height?parseInt(obj.height,10):pre.height;
self.width=obj.width?parseInt(obj.width,10):pre.width;
self.ready=true;
pre.onload=null;
pre=null
};
pre.src=obj.content
};
S.img.ext=["bmp","gif","jpg","jpeg","png"];
S.img.prototype={append:function(body,dims){var img=document.createElement("img");
img.id=this.id;
img.src=this.obj.content;
img.style.position="absolute";
var height,width;
if(dims.oversized&&S.options.handleOversize=="resize"){height=dims.innerHeight;
width=dims.innerWidth
}else{height=this.height;
width=this.width
}img.setAttribute("height",height);
img.setAttribute("width",width);
body.appendChild(img)
},remove:function(){var el=get(this.id);
if(el){remove(el)
}disableDrag();
if(pre){pre.onload=null;
pre=null
}},onLoad:function(){var dims=S.dimensions;
if(dims.oversized&&S.options.handleOversize=="drag"){enableDrag()
}},onWindowResize:function(){var dims=S.dimensions;
switch(S.options.handleOversize){case"resize":var el=get(this.id);
el.height=dims.innerHeight;
el.width=dims.innerWidth;
break;
case"drag":if(dragTarget){var top=parseInt(S.getStyle(dragTarget,"top")),left=parseInt(S.getStyle(dragTarget,"left"));
if(top+this.height<dims.innerHeight){dragTarget.style.top=dims.innerHeight-this.height+"px"
}if(left+this.width<dims.innerWidth){dragTarget.style.left=dims.innerWidth-this.width+"px"
}updateProxy()
}break
}}};
S.iframe=function(obj,id){this.obj=obj;
this.id=id;
var overlay=get("sb-overlay");
this.height=obj.height?parseInt(obj.height,10):overlay.offsetHeight;
this.width=obj.width?parseInt(obj.width,10):overlay.offsetWidth
};
S.iframe.prototype={append:function(body,dims){var html='<iframe id="'+this.id+'" name="'+this.id+'" height="100%" width="100%" frameborder="0" marginwidth="0" marginheight="0" style="visibility:hidden" onload="this.style.visibility=\'visible\'" scrolling="auto"';
if(S.isIE){html+=' allowtransparency="true"';
if(S.isIE6){html+=" src=\"javascript:false;document.write('');\""
}}html+="></iframe>";
body.innerHTML=html
},remove:function(){var el=get(this.id);
if(el){remove(el);
if(S.isGecko){delete window.frames[this.id]
}}},onLoad:function(){var win=S.isIE?get(this.id).contentWindow:window.frames[this.id];
win.location.href=this.obj.content
}};
S.html=function(obj,id){this.obj=obj;
this.id=id;
this.height=obj.height?parseInt(obj.height,10):300;
this.width=obj.width?parseInt(obj.width,10):500
};
S.html.prototype={append:function(body,dims){var div=document.createElement("div");
div.id=this.id;
div.className="html";
div.innerHTML=this.obj.content;
body.appendChild(div)
},remove:function(){var el=get(this.id);
if(el){remove(el)
}}};
S.swf=function(obj,id){this.obj=obj;
this.id=id;
this.height=obj.height?parseInt(obj.height,10):300;
this.width=obj.width?parseInt(obj.width,10):300
};
S.swf.ext=["swf"];
S.swf.prototype={append:function(body,dims){var tmp=document.createElement("div");
tmp.id=this.id;
body.appendChild(tmp);
var height=dims.innerHeight,width=dims.innerWidth,swf=this.obj.content,version=S.options.flashVersion,express=S.path+"expressInstall.swf",flashvars=S.options.flashVars,params=S.options.flashParams;
S.flash.embedSWF(swf,this.id,width,height,version,express,flashvars,params)
},remove:function(){S.flash.expressInstallCallback();
S.flash.removeSWF(this.id)
},onWindowResize:function(){var dims=S.dimensions,el=get(this.id);
el.height=dims.innerHeight;
el.width=dims.innerWidth
}};
var jwControllerHeight=20;
S.flv=function(obj,id){this.obj=obj;
this.id=id;
this.height=obj.height?parseInt(obj.height,10):300;
if(S.options.showMovieControls){this.height+=jwControllerHeight
}this.width=obj.width?parseInt(obj.width,10):300
};
S.flv.ext=["flv","m4v"];
S.flv.prototype={append:function(body,dims){var tmp=document.createElement("div");
tmp.id=this.id;
body.appendChild(tmp);
var height=dims.innerHeight,width=dims.innerWidth,swf=S.path+"player.swf",version=S.options.flashVersion,express=S.path+"expressInstall.swf",flashvars=apply({file:this.obj.content,height:height,width:width,autostart:(S.options.autoplayMovies?"true":"false"),controlbar:(S.options.showMovieControls?"bottom":"none"),backcolor:"0x000000",frontcolor:"0xCCCCCC",lightcolor:"0x557722"},S.options.flashVars),params=S.options.flashParams;
S.flash.embedSWF(swf,this.id,width,height,version,express,flashvars,params)
},remove:function(){S.flash.expressInstallCallback();
S.flash.removeSWF(this.id)
},onWindowResize:function(){var dims=S.dimensions,el=get(this.id);
el.height=dims.innerHeight;
el.width=dims.innerWidth
}};
var qtControllerHeight=16;
S.qt=function(obj,id){this.obj=obj;
this.id=id;
this.height=obj.height?parseInt(obj.height,10):300;
if(S.options.showMovieControls){this.height+=qtControllerHeight
}this.width=obj.width?parseInt(obj.width,10):300
};
S.qt.ext=["dv","mov","moov","movie","mp4","avi","mpg","mpeg"];
S.qt.prototype={append:function(body,dims){var opt=S.options,autoplay=String(opt.autoplayMovies),controls=String(opt.showMovieControls);
var html="<object",movie={id:this.id,name:this.id,height:this.height,width:this.width,kioskmode:"true"};
if(S.isIE){movie.classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B";
movie.codebase="http://www.apple.com/qtactivex/qtplugin.cab#version=6,0,2,0"
}else{movie.type="video/quicktime";
movie.data=this.obj.content
}for(var m in movie){html+=" "+m+'="'+movie[m]+'"'
}html+=">";
var params={src:this.obj.content,scale:"aspect",controller:controls,autoplay:autoplay};
for(var p in params){html+='<param name="'+p+'" value="'+params[p]+'">'
}html+="</object>";
body.innerHTML=html
},remove:function(){try{document[this.id].Stop()
}catch(e){}var el=get(this.id);
if(el){remove(el)
}}};
var wmpControllerHeight=(S.isIE?70:45);
S.wmp=function(obj,id){this.obj=obj;
this.id=id;
this.height=obj.height?parseInt(obj.height,10):300;
if(S.options.showMovieControls){this.height+=wmpControllerHeight
}this.width=obj.width?parseInt(obj.width,10):300
};
S.wmp.ext=["asf","avi","mpg","mpeg","wm","wmv"];
S.wmp.prototype={append:function(body,dims){var opt=S.options,autoplay=opt.autoplayMovies?1:0;
var movie='<object id="'+this.id+'" name="'+this.id+'" height="'+this.height+'" width="'+this.width+'"',params={autostart:opt.autoplayMovies?1:0};
if(S.isIE){movie+=' classid="clsid:6BF52A52-394A-11d3-B153-00C04F79FAA6"';
params.url=this.obj.content;
params.uimode=opt.showMovieControls?"full":"none"
}else{movie+=' type="video/x-ms-wmv"';
movie+=' data="'+this.obj.content+'"';
params.showcontrols=opt.showMovieControls?1:0
}movie+=">";
for(var p in params){movie+='<param name="'+p+'" value="'+params[p]+'">'
}movie+="</object>";
body.innerHTML=movie
},remove:function(){if(S.isIE){try{window[this.id].controls.stop();
window[this.id].URL="movie"+now()+".wmv";
window[this.id]=function(){}
}catch(e){}}var el=get(this.id);
if(el){setTimeout(function(){remove(el)
},10)
}}};
var overlayOn=false,visibilityCache=[],pngIds=["sb-nav-close","sb-nav-next","sb-nav-play","sb-nav-pause","sb-nav-previous"],container,overlay,wrapper,doWindowResize=true;
function animate(el,property,to,duration,callback){var isOpacity=(property=="opacity"),anim=isOpacity?S.setOpacity:function(el,value){el.style[property]=""+value+"px"
};
if(duration==0||(!isOpacity&&!S.options.animate)||(isOpacity&&!S.options.animateFade)){anim(el,to);
if(callback){callback()
}return
}var from=parseFloat(S.getStyle(el,property))||0;
var delta=to-from;
if(delta==0){if(callback){callback()
}return
}duration*=1000;
var begin=now(),ease=S.ease,end=begin+duration,time;
var interval=setInterval(function(){time=now();
if(time>=end){clearInterval(interval);
interval=null;
anim(el,to);
if(callback){callback()
}}else{anim(el,from+ease((time-begin)/duration)*delta)
}},10)
}function setSize(){container.style.height=S.getWindowSize("Height")+"px";
container.style.width=S.getWindowSize("Width")+"px"
}function setPosition(){container.style.top=document.documentElement.scrollTop+"px";
container.style.left=document.documentElement.scrollLeft+"px"
}function toggleTroubleElements(on){if(on){each(visibilityCache,function(i,el){el[0].style.visibility=el[1]||""
})
}else{visibilityCache=[];
each(S.options.troubleElements,function(i,tag){each(document.getElementsByTagName(tag),function(j,el){visibilityCache.push([el,el.style.visibility]);
el.style.visibility="hidden"
})
})
}}function toggleNav(id,on){var el=get("sb-nav-"+id);
if(el){el.style.display=on?"":"none"
}}function toggleLoading(on,callback){var loading=get("sb-loading"),playerName=S.getCurrent().player,anim=(playerName=="img"||playerName=="html");
if(on){S.setOpacity(loading,0);
loading.style.display="block";
var wrapped=function(){S.clearOpacity(loading);
if(callback){callback()
}};
if(anim){animate(loading,"opacity",1,S.options.fadeDuration,wrapped)
}else{wrapped()
}}else{var wrapped=function(){loading.style.display="none";
S.clearOpacity(loading);
if(callback){callback()
}};
if(anim){animate(loading,"opacity",0,S.options.fadeDuration,wrapped)
}else{wrapped()
}}}function buildBars(callback){var obj=S.getCurrent();
get("sb-title-inner").innerHTML=obj.title||"";
var close,next,play,pause,previous;
if(S.options.displayNav){close=true;
var len=S.gallery.length;
if(len>1){if(S.options.continuous){next=previous=true
}else{next=(len-1)>S.current;
previous=S.current>0
}}if(S.options.slideshowDelay>0&&S.hasNext()){pause=!S.isPaused();
play=!pause
}}else{close=next=play=pause=previous=false
}toggleNav("close",close);
toggleNav("next",next);
toggleNav("play",play);
toggleNav("pause",pause);
toggleNav("previous",previous);
var counter="";
if(S.options.displayCounter&&S.gallery.length>1){var len=S.gallery.length;
if(S.options.counterType=="skip"){var i=0,end=len,limit=parseInt(S.options.counterLimit)||0;
if(limit<len&&limit>2){var h=Math.floor(limit/2);
i=S.current-h;
if(i<0){i+=len
}end=S.current+(limit-h);
if(end>len){end-=len
}}while(i!=end){if(i==len){i=0
}counter+='<a onclick="Shadowbox.change('+i+');"';
if(i==S.current){counter+=' class="sb-counter-current"'
}counter+=">"+(++i)+"</a>"
}}else{counter=[S.current+1,S.lang.of,len].join(" ")
}}get("sb-counter").innerHTML=counter;
callback()
}function showBars(callback){var titleInner=get("sb-title-inner"),infoInner=get("sb-info-inner"),duration=0.35;
titleInner.style.visibility=infoInner.style.visibility="";
if(titleInner.innerHTML!=""){animate(titleInner,"marginTop",0,duration)
}animate(infoInner,"marginTop",0,duration,callback)
}function hideBars(anim,callback){var title=get("sb-title"),info=get("sb-info"),titleHeight=title.offsetHeight,infoHeight=info.offsetHeight,titleInner=get("sb-title-inner"),infoInner=get("sb-info-inner"),duration=(anim?0.35:0);
animate(titleInner,"marginTop",titleHeight,duration);
animate(infoInner,"marginTop",infoHeight*-1,duration,function(){titleInner.style.visibility=infoInner.style.visibility="hidden";
callback()
})
}function adjustHeight(height,top,anim,callback){var wrapperInner=get("sb-wrapper-inner"),duration=(anim?S.options.resizeDuration:0);
animate(wrapper,"top",top,duration);
animate(wrapperInner,"height",height,duration,callback)
}function adjustWidth(width,left,anim,callback){var duration=(anim?S.options.resizeDuration:0);
animate(wrapper,"left",left,duration);
animate(wrapper,"width",width,duration,callback)
}function setDimensions(height,width){var bodyInner=get("sb-body-inner"),height=parseInt(height),width=parseInt(width),topBottom=wrapper.offsetHeight-bodyInner.offsetHeight,leftRight=wrapper.offsetWidth-bodyInner.offsetWidth,maxHeight=overlay.offsetHeight,maxWidth=overlay.offsetWidth,padding=parseInt(S.options.viewportPadding)||20,preserveAspect=(S.player&&S.options.handleOversize!="drag");
return S.setDimensions(height,width,maxHeight,maxWidth,topBottom,leftRight,padding,preserveAspect)
}var K={};
K.markup='<div id="sb-container"><div id="sb-overlay"></div><div id="sb-wrapper"><div id="sb-title"><div id="sb-title-inner"></div></div><div id="sb-wrapper-inner"><div id="sb-body"><div id="sb-body-inner"></div><div id="sb-loading"><div id="sb-loading-inner"><span>{loading}</span></div></div></div></div><div id="sb-info"><div id="sb-info-inner"><div id="sb-counter"></div><div id="sb-nav"><a id="sb-nav-close" title="{close}" onclick="Shadowbox.close()"></a><a id="sb-nav-next" title="{next}" onclick="Shadowbox.next()"></a><a id="sb-nav-play" title="{play}" onclick="Shadowbox.play()"></a><a id="sb-nav-pause" title="{pause}" onclick="Shadowbox.pause()"></a><a id="sb-nav-previous" title="{previous}" onclick="Shadowbox.previous()"></a></div></div></div></div></div>';
K.options={animSequence:"sync",counterLimit:10,counterType:"default",displayCounter:true,displayNav:true,fadeDuration:0.35,initialHeight:160,initialWidth:320,modal:false,overlayColor:"#000",overlayOpacity:0.5,resizeDuration:0.35,showOverlay:true,troubleElements:["select","object","embed","canvas"]};
K.init=function(){S.appendHTML(document.body,sprintf(K.markup,S.lang));
K.body=get("sb-body-inner");
container=get("sb-container");
overlay=get("sb-overlay");
wrapper=get("sb-wrapper");
if(!supportsFixed){container.style.position="absolute"
}if(!supportsOpacity){var el,m,re=/url\("(.*\.png)"\)/;
each(pngIds,function(i,id){el=get(id);
if(el){m=S.getStyle(el,"backgroundImage").match(re);
if(m){el.style.backgroundImage="none";
el.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,src="+m[1]+",sizingMethod=scale);"
}}})
}var timer;
addEvent(window,"resize",function(){if(timer){clearTimeout(timer);
timer=null
}if(open){timer=setTimeout(K.onWindowResize,10)
}})
};
K.onOpen=function(obj,callback){doWindowResize=false;
container.style.display="block";
setSize();
var dims=setDimensions(S.options.initialHeight,S.options.initialWidth);
adjustHeight(dims.innerHeight,dims.top);
adjustWidth(dims.width,dims.left);
if(S.options.showOverlay){overlay.style.backgroundColor=S.options.overlayColor;
S.setOpacity(overlay,0);
if(!S.options.modal){addEvent(overlay,"click",S.close)
}overlayOn=true
}if(!supportsFixed){setPosition();
addEvent(window,"scroll",setPosition)
}toggleTroubleElements();
container.style.visibility="visible";
if(overlayOn){animate(overlay,"opacity",S.options.overlayOpacity,S.options.fadeDuration,callback)
}else{callback()
}};
K.onLoad=function(changing,callback){toggleLoading(true);
while(K.body.firstChild){remove(K.body.firstChild)
}hideBars(changing,function(){if(!open){return
}if(!changing){wrapper.style.visibility="visible"
}buildBars(callback)
})
};
K.onReady=function(callback){if(!open){return
}var player=S.player,dims=setDimensions(player.height,player.width);
var wrapped=function(){showBars(callback)
};
switch(S.options.animSequence){case"hw":adjustHeight(dims.innerHeight,dims.top,true,function(){adjustWidth(dims.width,dims.left,true,wrapped)
});
break;
case"wh":adjustWidth(dims.width,dims.left,true,function(){adjustHeight(dims.innerHeight,dims.top,true,wrapped)
});
break;
default:adjustWidth(dims.width,dims.left,true);
adjustHeight(dims.innerHeight,dims.top,true,wrapped)
}};
K.onShow=function(callback){toggleLoading(false,callback);
doWindowResize=true
};
K.onClose=function(){if(!supportsFixed){removeEvent(window,"scroll",setPosition)
}removeEvent(overlay,"click",S.close);
wrapper.style.visibility="hidden";
var callback=function(){container.style.visibility="hidden";
container.style.display="none";
toggleTroubleElements(true)
};
if(overlayOn){animate(overlay,"opacity",0,S.options.fadeDuration,callback)
}else{callback()
}};
K.onPlay=function(){toggleNav("play",false);
toggleNav("pause",true)
};
K.onPause=function(){toggleNav("pause",false);
toggleNav("play",true)
};
K.onWindowResize=function(){if(!doWindowResize){return
}setSize();
var player=S.player,dims=setDimensions(player.height,player.width);
adjustWidth(dims.width,dims.left);
adjustHeight(dims.innerHeight,dims.top);
if(player.onWindowResize){player.onWindowResize()
}};
S.skin=K;
window.Shadowbox=S
})(window);
if(window.$===window.jQuery){try{delete window.$
}catch(e){window["$"]=undefined
}}(function(a){window.is_ie=!!(window.attachEvent&&!window.opera);
if(!Array.prototype.push){Array.prototype.push=function(b){this[this.length]=b
}
}if(!String.prototype.startsWith){String.prototype.startsWith=function(b){return this.lastIndexOf(b,0)===0
}
}if(!String.prototype.endsWith){String.prototype.endsWith=function(b){var c=this.length-b.length;
return c>=0&&this.indexOf(b,c)===c
}
}window.redirectToGo=function(b,c){var f="/go/"+b;
f=f+"?goSearchReferer="+encodeURIComponent(window.location);
if(c){f=f+"&goSearchQuery="+c
}window.location=f
};
window.WRollback=function(c,b,f){this.element=c;
this.over=b;
this.out=f;
this.element.onmouseover=b;
this.element.onmouseout=f
};
WRollback.prototype.disable=function(){this.element.onmouseover=null;
this.element.onmouseout=null
};
WRollback.prototype.enable=function(){this.element.onmouseover=this.over;
this.element.onmouseout=this.out
};
window.WTogglePopup=function(b,g,c,f){this.$button=a("#"+b);
this.$div=a("#"+g);
this.duration=0.2;
this.closeOnDocumentClick=c||false;
this.callback=f||function(){};
this.$button.click(a.proxy(this.toggle,this))
};
WTogglePopup.prototype.toggle=function(c){if(c){c.preventDefault()
}var b;
if(this.closeOnDocumentClick){b=a.proxy(function(){if(this.$div.is(":visible")){a(document).click(a.proxy(this.hideIfVisible,this));
this.callback(true)
}else{a(document).unbind("click",a.proxy(this.hideIfVisible,this));
this.callback(false)
}},this)
}else{b=a.proxy(function(){if(this.$div.is(":visible")){this.callback(true)
}else{this.callback(false)
}},this)
}this.$div.toggle(this.duration,b);
return false
};
WTogglePopup.prototype.hideIfVisible=function(b){if(this.$div.is(":visible")){this.toggle(b)
}return true
};
window.WCookie=function(c,f,b,g){this.name=c;
this.expires="";
this.path="/";
this.value="";
if(f){this.value=f;
if(b){this.hours=b;
this.expires="; expires="+WCookie._getGMTStringForHoursAhead(b)
}else{this.expires=""
}if(g){this.path=g
}else{this.path="/"
}this.save()
}else{this.value=this.load()
}};
WCookie._getGMTStringForHoursAhead=function(b){var c=new Date();
c.setTime(c.getTime()+(b*60*60*1000));
return c.toGMTString()
};
WCookie.prototype.load=function(){var g=this.name+"=";
var b=document.cookie.split(";");
for(var f=0;
f<b.length;
f++){var k=b[f];
while(k.charAt(0)==" "){k=k.substring(1,k.length)
}if(k.indexOf(g)==0){return k.substring(g.length,k.length)
}}return null
};
WCookie.prototype.save=function(){document.cookie=this.name+"="+this.value+this.expires+"; path="+this.path
};
WCookie.prototype.erase=function(){this.value="";
this.hours=-1;
this.expires="; expires="+WCookie._getGMTStringForHoursAhead(this.hours);
this.save()
};
if(typeof(StringBuilder)=="undefined"){window.StringBuilder=function(b){this.strings=new Array("");
this.append(b)
};
StringBuilder.prototype.append=function(b){if(b){this.strings.push(b)
}};
StringBuilder.prototype.clear=function(){this.strings.length=1
};
StringBuilder.prototype.toString=function(){return this.strings.join("")
}
}String.prototype.postEncode=function(){var b=new StringBuilder();
var g=this.length;
for(var f=0;
f<g;
f++){var k=this.charCodeAt(f).toString();
if(k>127){b.append("%26%23");
b.append(k);
b.append("%3B")
}else{b.append(encodeURIComponent(this.substr(f,1)))
}}return b.toString()
};
String.prototype.characterEscape=function(){var b=new StringBuilder();
var g=this.length;
for(var f=0;
f<g;
f++){var k=this.charCodeAt(f).toString();
if(k>127){b.append("&#");
b.append(k);
b.append(";")
}else{b.append(this.substr(f,1))
}}return b.toString()
};
String.prototype.trim=function(){return this.replace(/^\s\s*/,"").replace(/\s\s*$/,"")
};
window.WForm={postEncode:function(b){return a(b).serializeArray().map(function(c,f){return f==null?null:jQuery.isArray(f)?jQuery.map(f,function(k,g){return{name:k.name,value:WForm.Element.postEncode(k.value)}
}):{name:f.name,value:WForm.Element.postEncode(f.value)}
}).join("&")
},Element:{postEncode:function(b){var c=a(b).val();
return c==null?null:jQuery.isArray(c)?jQuery.map(c,function(g,f){return{name:b.name,value:WForm.Element.postEncode(g)}
}):{name:b.name,value:WForm.Element.postEncode(c)}
}}};
window.addEvent=function(f,c,b){a(f).bind(c,b)
};
window.cancelDefaultEvents=function(b){if(b.preventDefault){b.preventDefault()
}b.returnValue=false
};
window.sbrToAbsoluteUrl=function(c){var f=c;
if(f.indexOf(":")<0){var g=""+window.location.href;
var b=document.getElementsByTagName("base");
if(b.length>0){g=b[0].href
}if(f.startsWith("//")){f=g.substring(0,g.indexOf(":")+1)+f
}else{if(f.indexOf("/")===0){f=f.substring(1);
g=g.substring(0,g.indexOf("/",7))
}if(g.charAt(g.length-1)!="/"){g+="/"
}f=g+f
}}return f
};
if(!window.Url){window.Url={}
}window.Url.unparam=function(k,l){if(typeof(k)=="undefined"||k==null){return{}
}var b=k.trim().match(/([^?#]*)(#.*)?$/);
if(!b){return{}
}var o={};
var g=b[1].split(l||"&");
for(var f=0;
f<g.length;
f++){var n=g[f].split("=",2);
var c=decodeURIComponent(n[0]);
var k=n.length==2?decodeURIComponent(n[1]):null;
o[c]=k
}return o
};
if(typeof window.Event=="undefined"){window.Event={}
}Event.onDOMReady=a.proxy(a(document).ready,a(document))
})(jQuery);
jQuery.fn.reverse=[].reverse;
Shadowbox.initialized=false;
var shadowboxOptions={overlayOpacity:0.7,overlayColor:"#fff",viewportPadding:40,counterType:"skip",onOpen:function(){(function(a){if(a("#sb-wrapper > :first-child").attr("id")=="sb-title"){a("#sb-info-inner").append(a("#sb-counter"));
a("#sb-info").after(a("#sb-title"));
a("#sb-nav-close").remove();
a("#sb-nav a").reverse().each(function(){$a=a(this);
$a.parent().append($a)
});
a("#sb-nav-next").html("&raquo;");
a("#sb-nav-previous").html("&laquo;");
if(a("#sb-wrapper .close-button").length==0){a("#sb-wrapper").prepend(a('<img class="close-button" src="/static_war/render/images/mediaplayers/closebox.png" />').click(function(){Shadowbox.close()
}))
}}})(jQuery)
}};
var initShadowbox=function(){if(jQuery("#main-content a[rel^=lightbox]").length>0){if(Shadowbox.initialized){Shadowbox.clearCache();
Shadowbox.setup(false,shadowboxOptions)
}else{Shadowbox.initialized=true;
Shadowbox.init(shadowboxOptions)
}}};
Event.onDOMReady(initShadowbox);
var initLightbox=initShadowbox;
var NavigableList=function(a){this.options={linkElement:null,listElement:null,inputElement:null,queryURL:null,jsonCallback:null,containerElement:null,selectFunction:null,enabledFunction:null,urlRewriterFunction:null,transition:"none",transitionSpeed:"fast"};
jQuery.extend(this.options,a);
this.isStaticList=(this.options.queryURL)?false:true;
jQuery(document).keydown(jQuery.proxy(this.handleKeyPress,this));
this.close(true);
if(this.isStaticList){this.closeTimer=null;
this.registerMouseListeners()
}else{var b=this;
this.options.inputElement.blur(function(){setTimeout(function(){b.close()
},500)
}).delayedObserver(function(){if(b.options.inputElement.val().length>0&&(!b.options.enabledFunction||b.options.enabledFunction())){var c=b.options.queryURL+b.options.inputElement.val();
if(b.options.urlRewriterFunction){c=b.options.urlRewriterFunction(c)
}if(b.options.jsonCallback){jQuery.ajax({url:c,dataType:(c.indexOf("callback=?")!=-1)?"jsonp":"json",crossDomain:(c.indexOf("callback=?")!=-1),success:function(f){jQuery.proxy(b.options.jsonCallback,b)(f);
if(b.options.containerElement.find("li").length>0){b.options.listElement=b.options.containerElement.find("ul");
b.registerMouseListeners();
b.open()
}else{b.close()
}}})
}else{jQuery.get(c,function(f){b.options.containerElement.empty().append(f);
if(b.options.containerElement.find("li").length>0){b.options.listElement=b.options.containerElement.find("ul");
b.registerMouseListeners();
b.open()
}else{b.close()
}})
}}else{b.close()
}},0.1)
}};
NavigableList.prototype.isVisible=function(){return this.options.containerElement.is(":visible")
};
NavigableList.prototype.handleKeyPress=function(a){if(this.isVisible()){switch(a.which){case jQuery.event.keyCodes.ENTER:return this.select(a);
break;
case jQuery.event.keyCodes.ESCAPE:a.preventDefault();
this.close();
break;
case jQuery.event.keyCodes.UP:a.preventDefault();
this.moveUp();
return false;
break;
case jQuery.event.keyCodes.DOWN:a.preventDefault();
this.moveDown();
return false;
break
}}};
NavigableList.prototype.select=function(a){if(!this.options.listElement){return
}if(this.isVisible()&&this.options.selectFunction&&this.options.listElement.find("li.hover").length>0){a.preventDefault();
return this.options.selectFunction(this.options.listElement.find("li.hover"))
}return true
};
NavigableList.prototype.moveUp=function(){if(!this.options.listElement){return
}if(this.options.listElement.find("li.hover").prevAll("li:not(.disabled,.separator)").length==0){this.options.listElement.find("li.hover").removeClass("hover");
this.options.listElement.find("li:last").addClass("hover")
}else{var a=this.options.listElement.find("li.hover");
a.prevAll("li:not(.disabled,.separator):first").addClass("hover");
a.removeClass("hover")
}};
NavigableList.prototype.moveDown=function(){if(!this.options.listElement){return
}if(this.options.listElement.find("li.hover").nextAll("li:not(.disabled,.separator)").length==0){this.options.listElement.find("li.hover").removeClass("hover");
this.options.listElement.find("li:first").addClass("hover")
}else{var a=this.options.listElement.find("li.hover");
a.nextAll("li:not(.disabled,.separator):first").addClass("hover");
a.removeClass("hover")
}};
NavigableList.prototype.open=function(){switch(this.options.transition){case"fade":this.options.containerElement.fadeIn(this.options.transitionSpeed).addClass("visible");
break;
case"slide":this.options.containerElement.slideDown(this.options.transitionSpeed).addClass("visible");
break;
case"none":default:this.options.containerElement.show().addClass("visible")
}};
NavigableList.prototype.close=function(a){if(a){this.options.containerElement.hide().removeClass("visible");
return
}switch(this.options.transition){case"fade":this.options.containerElement.fadeOut(this.options.transitionSpeed).removeClass("visible");
break;
case"slide":this.options.containerElement.slideUp(this.options.transitionSpeed).removeClass("visible");
break;
case"none":default:this.options.containerElement.hide().removeClass("visible")
}};
NavigableList.prototype.registerMouseListeners=function(){if(!this.options.listElement){return
}this.options.listElement.find("li:not(.disabled,.separator)").mouseover(jQuery.proxy(function(a){this.options.listElement.find("li.hover").removeClass("hover");
jQuery(a.currentTarget).addClass("hover")
},this)).mousedown(jQuery.proxy(function(a){this.select(a)
},this));
if(this.options.linkElement){jQuery.each([this.options.linkElement,this.options.listElement],jQuery.proxy(function(b,a){a.mouseenter(jQuery.proxy(function(){clearTimeout(this.closeTimer);
this.closeTimer=null;
this.open()
},this)).mouseleave(jQuery.proxy(function(){if(!this.closeTimer){this.closeTimer=setTimeout(jQuery.proxy(function(){this.close()
},this),500)
}},this))
},this))
}};
NavigableList.prototype.unregisterMouseListeners=function(){if(!this.options.listElement){return
}this.options.listElement.find("li:not(.disabled,.separator)").unbind("mouseover").unbind("mousedown");
if(this.options.linkElement){jQuery.each([this.options.linkElement,this.options.listElement],jQuery.proxy(function(b,a){a.unbind("mouseenter").unbind("mouseleave")
},this))
}};
(function(a){window.CtrlAltShortcuts={E:function(b){if(a("#edit-tool-container").length>0&&a("#edit-tool-container:visible").length==0){a("#edit-link").mouseenter()
}},T:function(b){if(typeof(textOnly)!="undefined"&&textOnly==true){window.location.href="?textOnly=false"
}else{window.location.href="?textOnly=true"
}}};
a(function(){a(document).keydown(function(g){var b=String.fromCharCode(g.which);
var f=g.altKey;
var c=g.ctrlKey;
if(c&&f&&CtrlAltShortcuts[b]){g.preventDefault();
CtrlAltShortcuts[b](g)
}})
})
})(jQuery);
var EmailOwnerForm={};
EmailOwnerForm.emailOwnerUrl="/sitebuilder2/api/ajax/emailOwner.htm";
EmailOwnerForm.pageUrlPath=null;
EmailOwnerForm.isLoaded=false;
EmailOwnerForm.spinnerImg='<img src="/static_war/images/tab-spinner.gif" align="middle" title="Please wait, loading">';
EmailOwnerForm.isInitialised=false;
EmailOwnerForm.isFrom403=false;
EmailOwnerForm.position="above";
EmailOwnerForm.init=function(a){if(!EmailOwnerForm.isInitialised){EmailOwnerForm.isInitialised=true;
EmailOwnerForm.pageUrlPath=a;
EmailOwnerForm.reposition();
jQuery("#email-owner-div").draggable();
jQuery("#email-owner-div").resizable({minHeight:150,minWidth:400,resize:EmailOwnerForm.resizeMessageBox})
}};
EmailOwnerForm.show=function(){jQuery("#email-owner-div").show();
EmailOwnerForm.reposition();
if(!EmailOwnerForm.isLoaded){var a=EmailOwnerForm.emailOwnerUrl;
var b="page="+EmailOwnerForm.pageUrlPath+"&seed="+(new Date().getTime());
EmailOwnerForm.showLoading();
jQuery.ajax(a,{data:b,success:function(c){EmailOwnerForm.isLoaded=true;
jQuery("#email-owner-div-content").html(c);
EmailOwnerForm.reposition();
EmailOwnerForm.decorateForm()
},error:EmailOwnerForm.reportError})
}};
EmailOwnerForm.reposition=function(){var c=jQuery("#email-owner-div");
var a=c.height();
var b=jQuery("#email-owner-link").offset();
var g=b.top;
if(EmailOwnerForm.position=="above"){g-=a
}if(g<0){g=0
}var f=b.left;
if(f<0){f=0
}c.offset({top:g,left:f})
};
EmailOwnerForm.hide=function(){jQuery("#email-owner-div").hide()
};
EmailOwnerForm.post=function(){var a=EmailOwnerForm.emailOwnerUrl;
var b=jQuery("#emailOwnerForm").serialize();
b+="&from403="+(EmailOwnerForm.isFrom403?"true":"false");
jQuery("#pageOwnerSubmit").attr("disabled","true");
jQuery("#pageOwnerCancel").attr("disabled","true");
jQuery.ajax(a,{data:b,type:"post",success:function(c){jQuery("#email-owner-div-content").html(c);
EmailOwnerForm.resizeMessageBox();
EmailOwnerForm.reposition();
EmailOwnerForm.decorateForm()
},error:EmailOwnerForm.reportError})
};
EmailOwnerForm.heightPadding=140;
EmailOwnerForm.decorateForm=function(){var a=jQuery("#pageOwnerCancel");
var b=jQuery("<input/>").attr({type:"button",value:a.html()}).click(function(c){c.preventDefault();
EmailOwnerForm.hide()
});
a.parent().append(b);
a.remove();
b.attr("id","pageOwnerCancel");
jQuery("#pageOwnerSubmit").click(function(c){c.preventDefault();
EmailOwnerForm.post()
});
EmailOwnerForm.heightPadding=jQuery("#email-owner-div").height()-jQuery("#message").height()
};
EmailOwnerForm.reportError=function(a,b){EmailOwnerForm.isLoaded=false;
jQuery("#email-owner-div-content").html('<p>There was a problem loading the email user form.</p><p><a href="#" onclick="showEmailOwnerForm()">Retry</a></p>')
};
EmailOwnerForm.showLoading=function(){if(!EmailOwnerForm.isLoaded){jQuery("#email-owner-div-content").html("<p>Loading... please wait "+EmailOwnerForm.spinnerImg+"</p>")
}};
EmailOwnerForm.resizeMessageBox=function(){var a=jQuery("#email-owner-div").height();
if(jQuery("#message").length>0){jQuery("#message").height(a-EmailOwnerForm.heightPadding)
}};
jQuery(document).ready(function(c){var a=c("#email-owner-link");
if(a.length>0){var b=function(f,k){if(k){a.unbind("click")
}else{a.click(function(n){var l=SitebuilderInfo.url;
if(!l){var o=(""+a.href).match(/page=(.+)(\b|&)/);
l=unescape(o[1])
}EmailOwnerForm.init(l);
EmailOwnerForm.show();
n.preventDefault()
});
var g=c("#email-owner-popup-close-button");
if(g.length>0){g.click(function(l){EmailOwnerForm.hide()
})
}}};
c(document.body).bind("smallscreen",b);
b(null,c(document.body).hasClass("is-smallscreen"))
}});
if(typeof FlashObject=="undefined"){FlashObject=function(f,k,a,c,b,g){this.swf=f;
this.id=k;
this.width=a;
this.height=c;
this.version=7;
this.align=g;
this.redirect="";
this.sq=document.location.search.split("?")[1]||"";
this.altTxt="Please <a href='http://www.macromedia.com/go/getflashplayer'>upgrade your Flash Player</a>.";
this.bypassTxt="<p>Already have Flash Player? <a href='?detectflash=false&"+this.sq+"'>Click here if you have Flash Player "+this.version+" installed</a>.</p>";
this.params=new Object();
this.variables=new Object();
this.addParam("quality","high");
this.doDetect="";
this.detectedVersion;
this.embedType=b||"flash";
this.addParam("AutoStart","true");
this.addParam("WindowLess","false");
this.addParam("VideoBorderWidth","0");
this.addParam("VideoBorderColor","ffffff");
this.addParam("ShowControls","true")
};
FlashObject.prototype.addParam=function(a,b){this.params[a]=b
};
FlashObject.prototype.getParams=function(){return this.params
};
FlashObject.prototype.getParam=function(a){return this.params[a]
};
FlashObject.prototype.addVariable=function(a,b){this.variables[a]=b
};
FlashObject.prototype.getVariable=function(a){return this.variables[a]
};
FlashObject.prototype.getVariables=function(){return this.variables
};
FlashObject.prototype.getParamTags=function(){var a="";
for(var b in this.getParams()){a+='<param name="'+b+'" value="'+this.getParam(b)+'" />'
}if(a==""){a=null
}return a
};
FlashObject.prototype.getHTML=function(){if(this.embedType=="slideShow"){imageDir=this.getParam("imageDir");
url="http://www2.warwick.ac.uk/sitebuilder2/render/tocImages.xml?sbrPage="+imageDir+"&showGallery=off&rn="+new Date().getTime();
this.addVariable("xmlPath",unescape(url))
}var a="";
if(window.ActiveXObject&&navigator.userAgent.indexOf("Mac")==-1){if(this.embedType=="flash"||this.embedType=="slideShow"){a+='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="'+this.width+'" height="'+this.height+'" id="'+this.id+'">';
a+='<param name="allowScriptAccess" value="sameDomain" />';
a+='<param name="movie" value="'+this.swf+'" />';
a+='<param name="quality" value="high" />';
if(this.getParamTags()!=null){a+=this.getParamTags()
}if(this.getVariablePairs()!=null){a+='<param name="flashVars" value="'+this.getVariablePairs()+'" />'
}a+="</object>"
}else{if(this.embedType=="mediaplayer"){a=this.getMplayerCode()
}else{a+="<p>embed type "+this.embedType+" not recognised!</p>"
}}}else{if(this.embedType=="flash"||this.embedType=="slideShow"){a+='<embed allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" src="'+this.swf+'" width="'+this.width+'" height="'+this.height+'" id="'+this.id+'" name="'+this.id+'"';
for(var b in this.getParams()){a+=" "+b+'="'+this.getParam(b)+'"'
}if(this.getVariablePairs()!=null){a+=' flashVars="'+this.getVariablePairs()+'"'
}a+="></embed>"
}else{if(this.embedType=="mediaplayer"){a=this.getMplayerCode()
}else{a+="<p>embed type "+this.embedType+" not recognised!</p>"
}}}if(this.align){a='<div align="'+this.align+'">'+a+"</div>"
}else{a="<div>"+a+"</div>"
}return a
};
FlashObject.prototype.getMplayerCode=function(){var a='<object id="'+this.id+'" ';
a+='width="'+this.width+'" ';
a+='height="'+this.height+'" ';
a+='vspace="0" standby="Loading Microsoft&amp;#65533;Windows&amp;#65533; Media Player components..." ';
a+='codebase="http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701" ';
a+='classid="CLSID:22D6F312-B0F6-11D0-94AB-0080C74C7E95" ';
a+='type="application/x-oleobject" ';
a+='hspace="0"> ';
a+='<param name="Filename" value="'+this.swf+'" /> ';
for(var b in this.getParams()){a+='<param name="'+b+'" value="'+this.getParam(b)+' ">'
}a+='<embed name="'+this.id+'" ';
a+='type="application/x-mplayer2" ';
a+='pluginspage="http://www.microsoft.com/Windows/Downloads/Contents/Products/MediaPlayer/" ';
a+="width="+this.width+" ";
a+="height="+this.height+" ";
a+='hspace="0" vspace="0" ';
a+='filename="'+this.swf+'" ';
for(var b in this.getParams()){value=this.getParam(b);
if(value=="true"||value=="false"){a+=b+"="+(value=="true"?"1":"0")+" "
}else{a+=b+"="+value+" "
}}a+="</embed></object>";
return a
};
FlashObject.prototype.getVariablePairs=function(){var b=new Array();
for(var a in this.getVariables()){b.push(a+"="+escape(this.getVariable(a)))
}if(b.length>0){return b.join("&")
}else{return null
}};
FlashObject.prototype.write=function(a){if(detectFlash(this.version)||this.doDetect=="false"){if(a){document.getElementById(a).innerHTML=this.getHTML()
}else{document.write(this.getHTML())
}}else{if(this.redirect!=""){document.location.replace(this.redirect)
}else{if(getFlashVersion()==0){var b=getQueryParamValueFromString(this.swf,"theFile");
this.altTxt="<p><a href='"+b+"'>"+getFilenameFromUrl(b)+"</a></p>"
}if(a){document.getElementById(a).innerHTML=this.altTxt
}else{document.write(this.altTxt+""+this.bypassTxt+"<p><a href='"+b+"'>"+getFilenameFromUrl(b)+"</a></p>")
}}}}
}function getFlashVersion(){var a=FlashVersionDetector.getMajorVersionInteger();
return(a<0)?0:a
}function detectFlash(a){if(getFlashVersion()>=a){return true
}else{return false
}}function getQueryParamValue(b){var a=document.location.search;
return(getQueryParamValueFromString(a,b))
}function getQueryParamValueFromString(a,f){var c=a;
var g=c.indexOf(f);
var b=(c.indexOf("&",g)!=-1)?c.indexOf("&",g):c.length;
if(c.length>1&&g!=-1){return c.substring(c.indexOf("=",g)+1,b)
}else{return""
}}function getFilenameFromUrl(b){var a=b.substring(b.lastIndexOf("/")+1);
return a
}if(Array.prototype.push==null){Array.prototype.push=function(a){this[this.length]=a;
return this.length
}
}if(String.prototype.toAbsoluteUrl==null){String.prototype.toAbsoluteUrl=function(){var b=this;
if(b.indexOf(":")<0){var c=""+window.location.href;
var a=document.getElementsByTagName("base");
if(a.length>0){c=a[0].href
}if(b.startsWith("//")){b=c.substring(0,c.indexOf(":")+1)+b
}else{if(b.indexOf("/")===0){b=b.substring(1);
c=c.substring(0,c.indexOf("/",7))
}if(c.charAt(c.length-1)!="/"){c+="/"
}b=c+b
}}return b
}
}if(typeof FlashVersionDetector=="undefined"){var isIE=(navigator.appVersion.indexOf("MSIE")!=-1)?true:false;
var isWin=(navigator.appVersion.toLowerCase().indexOf("win")!=-1)?true:false;
var isOpera=(navigator.userAgent.indexOf("Opera")!=-1)?true:false;
var FlashVersionDetector={getActiveXControlVersion:function(){var a;
var b;
var c;
try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
a=b.GetVariable("$version")
}catch(c){}if(!a){try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
a="WIN 6,0,21,0";
b.AllowScriptAccess="always";
a=b.GetVariable("$version")
}catch(c){}}if(!a){try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
a=b.GetVariable("$version")
}catch(c){}}if(!a){try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
a="WIN 3,0,18,0"
}catch(c){}}if(!a){try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
a="WIN 2,0,0,11"
}catch(c){a=-1
}}return a
},getVersion:function(){var l=-1;
if(navigator.plugins!=null&&navigator.plugins.length>0){if(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]){var k=navigator.plugins["Shockwave Flash 2.0"]?" 2.0":"";
var a=navigator.plugins["Shockwave Flash"+k].description;
var g=a.split(" ");
var c=g[2].split(".");
var n=c[0];
var b=c[1];
var f=g[3];
if(f==""){f=g[4]
}if(f[0]=="d"){f=f.substring(1)
}else{if(f[0]=="r"){f=f.substring(1);
if(f.indexOf("d")>0){f=f.substring(0,f.indexOf("d"))
}}}var l=n+"."+b+"."+f
}}else{if(navigator.userAgent.toLowerCase().indexOf("webtv/2.6")!=-1){l=4
}else{if(navigator.userAgent.toLowerCase().indexOf("webtv/2.5")!=-1){l=3
}else{if(navigator.userAgent.toLowerCase().indexOf("webtv")!=-1){l=2
}else{if(isIE&&isWin&&!isOpera){l=FlashVersionDetector.getActiveXControlVersion()
}}}}}return l
},isClientHasVersionString:function(a){versionArray=a.replace(/,/g,".").split(".");
if(versionArray.length==3){return FlashVersionDetector.isClientHasVersion(versionArray[0],versionArray[1],versionArray[2])
}else{if(versionArray.length==4){return FlashVersionDetector.isClientHasVersion(versionArray[0],versionArray[1],versionArray[3])
}else{return false
}}},isClientHasVersion:function(k,f,c){versionStr=FlashVersionDetector.getVersion();
if(versionStr==-1){return false
}else{if(versionStr!=0){if(isIE&&isWin&&!isOpera){tempArray=versionStr.split(" ");
tempString=tempArray[1];
versionArray=tempString.split(",")
}else{versionArray=versionStr.split(".")
}var g=versionArray[0];
var a=versionArray[1];
var b=versionArray[2];
if(g>parseFloat(k)){return true
}else{if(g==parseFloat(k)){if(a>parseFloat(f)){return true
}else{if(a==parseFloat(f)){if(b>=parseFloat(c)){return true
}}}}}return false
}}},getMajorVersionInteger:function(){versionStr=FlashVersionDetector.getVersion();
if(versionStr==-1){return -1
}else{if(versionStr!=0){if(isIE&&isWin&&!isOpera){tempArray=versionStr.split(" ");
tempString=tempArray[1];
versionArray=tempString.split(",")
}else{versionArray=versionStr.split(".")
}return parseInt(versionArray[0],10)
}}}}
}if(typeof WPopupBox==="undefined"){var jsLoadImage=function(b){var a=new Image();
a.src=b;
return a
};
var ie_lt7=/MSIE ((5\.5)|6)/.test(navigator.userAgent)&&navigator.platform==="Win32";
var WPopupBox=function(c,u){WPopupBox.jq=this.jq=(typeof jQuery!="undefined");
if(!c||(!c.images&&c.imageroot)){var s=this.imageroot=(c||WPopupBox.defaultConfig).imageroot||"/static_war/popup/";
c={images:{tl:jsLoadImage(s+"tl.png"),tr:jsLoadImage(s+"tr.png"),bl:jsLoadImage(s+"bl.png"),br:jsLoadImage(s+"br.png"),t:jsLoadImage(s+"t.png"),r:jsLoadImage(s+"r.png"),b:jsLoadImage(s+"b.png"),l:jsLoadImage(s+"l.png"),c:jsLoadImage(s+"c.png"),topArr:jsLoadImage(s+"toparr.png"),bottArr:jsLoadImage(s+"bottarr.png"),leftArr:jsLoadImage(s+"leftarr.png"),rightArr:jsLoadImage(s+"rightarr.png"),transparent:jsLoadImage(s+"shim.gif")},margin:[10,14,20,16],padding:[20,24,0,24],topArr:[38,18],bottArr:[37,20],leftArr:[19,39],rightArr:[20,39]}
}if(this.jq){this.config=[];
jQuery.extend(this.config,WPopupBox.defaultConfig);
jQuery.extend(this.config,c)
}else{this.config=$H(WPopupBox.defaultConfig).merge(c).toObject()
}u=u||{};
var q=this;
this.initialised=false;
this.showing=false;
this.glassElement=document.createElement("div");
this.glassElement.className="WPopupGlass";
this.width=null;
this.height=null;
this.x=null;
this.y=null;
this.inelastic=u.inelastic;
this.topArrowOn=false;
this.bottomArrowOn=false;
this.leftArrowOn=false;
this.rightArrowOn=false;
this.imageElements={};
this.imageElements.c=document.createElement("img");
this.imageElements.c.className="c";
this._setImage(this.imageElements.c,c.images.c.src);
var f=c.margin;
var n=f[0];
var l=f[1];
var b=f[2];
var k=f[3];
this.extraHeight=n+b+c.padding[0]+c.padding[2];
var g=this.imageElements;
var a=this.glassElement;
g.tl=this._makeDiv("tl alpha",c.images.tl,k,n);
g.tr=this._makeDiv("tr alpha",c.images.tr,l,n);
g.bl=this._makeDiv("bl alpha",c.images.bl,k,b);
g.br=this._makeDiv("br alpha",c.images.br,l,b);
g.t=this._makeEdge("t alpha",c.images.t,k,n);
g.r=this._makeEdge("r alpha",c.images.r,l,n);
g.b=this._makeEdge("b alpha",c.images.b,l,b);
g.l=this._makeEdge("l alpha",c.images.l,k,b);
g.ta=this._makeDiv("tArr alpha",c.images.topArr,c.topArr[0],c.topArr[1]);
g.ba=this._makeDiv("bArr alpha",c.images.bottArr,c.bottArr[0],c.bottArr[1]);
g.la=this._makeDiv("lArr alpha",c.images.leftArr,c.leftArr[0],c.leftArr[1]);
g.ra=this._makeDiv("rArr alpha",c.images.rightArr,c.rightArr[0],c.rightArr[1]);
var p=(this.jq)?jQuery.each:function(r,w){$A(r).each(function(z,A){w(A,z)
})
};
p([g.ta,g.ba,g.la,g.ra],function(w,r){r.style.display="none";
r.style.position="relative"
});
p([g.tl,g.tr,g.bl,g.br,g.t,g.r,g.b,g.l,g.c,g.ta,g.ba,g.la,g.ra],function(w,r){a.appendChild(r)
});
g.t.style.left=this.config.margin[3]+"px";
g.b.style.left=this.config.margin[3]+"px";
g.c.style.left=this.config.margin[3]+"px";
g.l.style.top=this.config.margin[0]+"px";
g.r.style.top=this.config.margin[0]+"px";
g.c.style.top=this.config.margin[0]+"px";
this.contentElement=document.createElement("div");
this.contentElement.className="WPopupBoxContent";
var o=u.element;
if(o){this.rootElement=o;
this.setContentFromElement(o)
}else{this.rootElement=document.createElement("div")
}this.rootElement.className="WPopupBox";
this.hide();
this.rootElement.appendChild(this.glassElement);
this.rootElement.appendChild(this.contentElement);
if(o){this.setSize(450,350);
this.setHeightToFit()
}else{document.body.appendChild(this.rootElement);
this.setSize(450,350)
}if(u.width){if(u.height){this.setSize(u.width,u.height)
}else{this.setSize(u.width,350);
this.setHeightToFit()
}}if(u.x&&u.y){this.setPosition(u.x,u.y)
}if(this.jq){jQuery(document).keydown(function(r){if(q.isShowing()&&r.keyCode==27){r.preventDefault();
q.hide()
}})
}else{Event.observe(document,"keydown",function(w){var r=(window.event)?window.event:w;
if(r.keyCode==Event.KEY_ESC){cancelDefaultEvents(r);
this.hide()
}}.bind(this))
}this.initialised=true
};
WPopupBox.defaultConfig={};
WPopupBox.prototype.setPosition=function(n,g){this.x=n;
this.y=g;
if(this.topArrowOn){g+=this.imageElements.ta.clientHeight
}if(this.leftArrowOn){n+=this.imageElements.la.clientWidth
}function p(){var s=[0,0];
if(typeof window.innerWidth!="undefined"){s=[window.innerWidth,window.innerHeight]
}else{if(typeof document.documentElement!="undefined"&&typeof document.documentElement.clientWidth!="undefined"&&document.documentElement.clientWidth!=0){s=[document.documentElement.clientWidth,document.documentElement.clientHeight]
}else{s=[document.getElementsByTagName("body")[0].clientWidth,document.getElementsByTagName("body")[0].clientHeight]
}}return s
}function k(){var s=[0,0];
if(typeof window.pageYOffset!="undefined"){s=[window.pageXOffset,window.pageYOffset]
}else{if(typeof document.documentElement.scrollTop!="undefined"&&document.documentElement.scrollTop>0){s=[document.documentElement.scrollLeft,document.documentElement.scrollTop]
}else{if(typeof document.body.scrollTop!="undefined"){s=[document.body.scrollLeft,document.body.scrollTop]
}}}return s
}var f=p();
var l=k();
var b=f[1]+l[1]-20;
var c=f[0]+l[0]-20;
var q=n+this.width;
var a=g+this.height;
if(q>c){n=c-this.width
}if(n<0){n=0
}if((a-b)>this.height){g-=this.height
}if(g<0){g=0
}if(this.jq){jQuery(this.rootElement).offset({top:g,left:n})
}else{this.rootElement.style.left=n+"px";
this.rootElement.style.top=g+"px"
}this.contentElement.style.left=(this.config.padding[3])+"px";
this.contentElement.style.top=(this.config.padding[0])+"px";
var o=this.imageElements.ta;
o.style.left=(this.width/2-o.clientWidth/2)+"px";
o.style.bottom="10px";
var r=this.imageElements.la.style;
r.top=(this.height/2-this.imageElements.la.clientHeight/2)+"px";
r.marginLeft="-5px";
r.marginTop="-"+Math.floor(this.config.leftArr[1]/2)+"px";
r=this.imageElements.ba.style;
r.left=((this.width-this.imageElements.ba.clientWidth)/2)+"px";
r.top=this.height+"px";
r.marginTop="-18px"
};
WPopupBox.prototype.setSize=function(a,b){var c=document.getElementsByTagName("body")[0];
if(c.className.indexOf("is-smallscreen")>=0){if(WPopupBox.jq){a=Math.min(a,jQuery("body").width())
}else{a=Math.min(a,$(c).getWidth())
}}this.width=a;
this.height=b;
this.glassElement.style.width=a+"px";
this.glassElement.style.height=b+"px";
this.contentElement.style.width=(a-this.config.padding[3]-this.config.padding[1])+"px";
if(this.inelastic){this.contentElement.style.height=(this.height-this.extraHeight)+"px";
this.contentElement.style.overflow="auto"
}this._repositionEdges()
};
WPopupBox.prototype.setHeightToFit=function(){if(!this.inelastic){if(this.everShown){var a=this.contentElement.clientHeight;
this.setSize(this.width,a+this.extraHeight)
}else{this.delayedSetHeight=true
}}};
WPopupBox.prototype.hide=function(){this.rootElement.className="WPopupBox";
this.showing=false;
WPopupBox.showSelectBoxes()
};
WPopupBox.prototype.show=function(){this.rootElement.className="WPopupBox visible";
this.showing=true;
if(!this.everShown){this.everShown=true;
this.setSize(this.width,this.height);
if(this.delayedSetHeight){this.setHeightToFit()
}}WPopupBox.hideSelectBoxes()
};
WPopupBox.prototype.toggle=function(){if(this.isShowing()){this.hide()
}else{this.show()
}};
WPopupBox.prototype.isShowing=function(){return this.showing
};
WPopupBox.prototype.setContent=function(a){this.contentElement.innerHTML=a;
this._afterContentSet()
};
WPopupBox.prototype.showUrl=function(c,b){b=b||{};
var k=b.method||"POST";
var a=this;
var g=function(n){document.body.style.cursor="auto";
a.show();
a.setContent(n);
if(typeof setupSubmitDisabling!=="undefined"){setupSubmitDisabling()
}if(b.target){var l=b.target;
if(b.position==="right"){a.positionRight(l)
}else{if(b.position==="above"){a.positionAbove(l)
}else{a.positionBelow(l)
}}}if(b.onComplete){b.onComplete(a.contentElement)
}};
var f=function(l){g(l.responseText)
};
if(this.jq){if(b.params){jQuery.ajax(c,{type:k,success:g,data:b.params,traditional:true})
}else{jQuery.ajax(c,{type:k,success:g,traditional:true})
}}else{if(b.params){new Ajax.Request(c,{method:k,onComplete:f,parameters:b.params})
}else{new Ajax.Request(c,{method:k,onComplete:f})
}}document.body.style.cursor="progress"
};
WPopupBox.prototype.setContentElement=function(a){this.contentElement.innerHTML="";
this.contentElement.appendChild(a);
this._afterContentSet()
};
WPopupBox.prototype.setContentFromElement=function(a){this.contentElement.innerHTML="";
while(a.firstChild){this.contentElement.appendChild(a.firstChild)
}this._afterContentSet()
};
WPopupBox.prototype._afterContentSet=function(){var a=this;
this.closeButton=document.createElement("a");
this.closeButton.setAttribute("style","cursor:pointer;cursor:hand;");
if(this.jq){jQuery(this.closeButton).click(function(b){a.hide();
b.preventDefault()
})
}else{this.closeButton.onclick=(function(){this.hide();
return false
}).bind(this)
}closeImg=document.createElement("img");
closeImg.src=this.imageroot+"close.png";
closeImg.title="Close this popup";
closeImg.border=0;
this.closeButton.className="WPopupCloseButton";
this.closeButton.appendChild(closeImg);
this.contentElement.insertBefore(this.closeButton,this.contentElement.firstChild);
if(this.initialised){this.setHeightToFit()
}};
WPopupBox.prototype._repositionEdges=function(){var a=(this.width-this.config.margin[3]-this.config.margin[1])+"px";
var c=(this.height-this.config.margin[0]-this.config.margin[2])+"px";
var b=this.imageElements;
b.t.style.width=a;
b.b.style.width=a;
b.l.style.height=c;
b.r.style.height=c;
b.c.style.width=a;
b.c.style.height=c;
if(this.jq){jQuery(b.l).attr("style",jQuery(b.l).attr("style").replace(/height:\s\d+px(\s*!important)*;/,"height: "+c+" !important;"));
jQuery(b.r).attr("style",jQuery(b.r).attr("style").replace(/height:\s\d+px(\s*!important)*;/,"height: "+c+" !important;"));
jQuery(b.c).attr("style",jQuery(b.c).attr("style").replace(/height:\s\d+px(\s*!important)*;/,"height: "+c+" !important;"))
}};
WPopupBox.prototype._setImage=function(a,b){var c=c;
if(c){a.src=this.config.images.transparent.src;
a.runtimeStyle.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+b+"',sizingMethod='scale')"
}else{a.src=b
}};
WPopupBox.prototype._setDivBg=function(c,a){var b=b;
if(b){c.runtimeStyle.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+a+"',sizingMethod='image')"
}else{this._setDivBgNoHack(c,a)
}};
WPopupBox.prototype._setDivBgNoHack=function(b,a){if(!ie_lt7){b.style.backgroundImage="url("+a+")";
b.style.backgroundPosition="top left";
b.style.backgroundRepeat="no-repeat"
}};
WPopupBox.prototype._makeDiv=function(b,g,f,a){var c=document.createElement("div");
c.className=b;
this._setDivBg(c,g.src);
c.style.width=f+"px";
c.style.height=a+"px";
return c
};
WPopupBox.prototype._makeEdge=function(b,g,f,a){var c=document.createElement("img");
this._setImage(c,g.src);
c.className=b;
c.style.width=f+"px";
c.style.height=a+"px";
return c
};
WPopupBox.prototype.setTopArrow=function(){this.imageElements.ta.style.display="block";
this.topArrowOn=true
};
WPopupBox.prototype.setBottomArrow=function(){this.imageElements.ba.style.display="block";
this.bottomArrowOn=true
};
WPopupBox.prototype.setLeftArrow=function(){this.imageElements.la.style.display="block";
this.leftArrowOn=true
};
WPopupBox.prototype.setRightArrow=function(){this.imageElements.ra.style.display="block";
this.rightArrowOn=true
};
WPopupBox.prototype.removeArrows=function(){this.topArrowOn=false;
this.bottomArrowOn=false;
this.leftArrowOn=false;
this.rightArrowOn=false;
this.imageElements.ra.style.display="none";
this.imageElements.la.style.display="none";
this.imageElements.ba.style.display="none";
this.imageElements.ta.style.display="none"
};
WPopupBox.prototype.positionBelow=function(b){this.removeArrows();
this.setTopArrow();
var a=this.getMidpoint(b);
this.setPosition(a.x-((this.width)/2),a.y)
};
WPopupBox.prototype.getMidpoint=function(f){if(f&&f.x&&f.y&&(!f.tagName||f.tagName.toString().toUpperCase()!=="IMG")){return f
}var o,a;
if(this.jq){$el=jQuery(f);
o=$el.offset();
var b=$el.outerWidth();
var p=$el.outerHeight();
if($el.css("display")==="inline"){var l=$el.css("position");
$el.css("position","absolute");
var n=$el.outerWidth();
var c=$el.outerHeight();
$el.css("position",l);
if(b!=n){b=(b+n)*0.5;
p=(p+c)*0.5
}}return{x:Math.floor(o.left+b/2),y:Math.floor(o.top+p/2),left:Math.floor(o.left),right:Math.floor(o.left+b),top:Math.floor(o.top),bottom:Math.floor(o.top+p)}
}else{f=$(f);
o=Position.cumulativeOffset(f);
a=Element.getDimensions(f);
var b=a.width;
var p=a.height;
if(f.getStyle("display")==="inline"){var k=f.style;
var l=k.position;
k.position="absolute";
var g=Element.getDimensions(f);
k.position=l;
if(a.width!=g.width){p=(g.height+a.height)/2;
b=(g.width+a.width)/2
}}return{x:Math.floor(o[0]+b/2),y:Math.floor(o[1]+p),left:Math.floor(o[0]),right:Math.floor(o[0]+b),top:Math.floor(o[1]),bottom:Math.floor(o[1]+p)}
}};
WPopupBox.prototype.positionAbove=function(c){this.removeArrows();
this.setBottomArrow();
if(!this.jq){c=$(c)
}var b=this.getMidpoint(c);
var a=b.x-this.width/2;
var f=Math.max(0,b.y-this.height-this.config.bottArr[1]);
this.setPosition(a,f)
};
WPopupBox.prototype.positionRight=function(b,f){if(f){this.removeArrows()
}else{this.setLeftArrow()
}var a=this.getMidpoint(b);
h=this.height;
var g;
if(this.jq){g=jQuery(document.body).scrollTop()
}else{g=$(document.body).cumulativeScrollOffset()[1]
}x=Math.floor(a.right);
y=Math.max(g,Math.floor(a.y-h/2));
this.setPosition(x,y);
if(this.jq){var c=jQuery(this.rootElement).offset();
jQuery(this.imageElements.la).css("top",a.y-c.top)
}else{var c=Position.cumulativeOffset(this.rootElement);
this.imageElements.la.style.top=parseInt(a.y-c[1])+"px"
}};
WPopupBox.hideSelectBoxes=function(){if(!ie_lt7){return
}if(WPopupBox.jq){jQuery("select").css("visibility","hidden")
}else{$A(document.getElementsByTagName("select")).each(function(a){a.style.visibility="hidden"
})
}};
WPopupBox.showSelectBoxes=function(){if(!ie_lt7){return
}if(WPopupBox.jq){jQuery("select").css("visibility","visible")
}else{$A(document.getElementsByTagName("select")).each(function(a){a.style.visibility="visible"
})
}}
}(function(){if(!
/*@cc_on!@*/
0){return
}var e="abbr,article,aside,audio,bb,canvas,datagrid,datalist,details,dialog,eventsource,figure,footer,header,hgroup,mark,menu,meter,nav,output,progress,section,time,video".split(",");
for(var i=0;
i<e.length;
i++){document.createElement(e[i])
}})();
(function(a){window.ButtonPlayer=function(c,b){this.$container=a("#"+b);
this.basename=c.getBasename();
this.$container.attr("title",this.basename+" | Click to play");
this.$container.addClass("buttonPlayer");
this.$playButton=a('<div class="play button"><div class="glyph"></div></div>');
this.$container.append(this.$playButton);
this.$pauseButton=a('<div class="pause button"><div class="glyph"></div></div>');
this.$container.append(this.$pauseButton);
this.$progressContainer=a('<div class="progressContainer" />');
this.$container.append(this.$progressContainer);
this.$progressLoading=a('<div class="progressLoading" />');
this.$progress=a('<div class="progress" />');
this.$progressLoading.append(this.$progress);
this.$progressContainer.append(this.$progressLoading);
this.$stopButton=a('<div class="stop button"><div class="glyph"></div></div>');
this.$container.append(this.$stopButton);
this.$pauseButton.hide();
this.audio=c;
this.duration=null;
this.executor=null;
this.$playButton.click(a.proxy(function(){this.$playButton.hide();
this.$pauseButton.show();
this.audio.play();
if(this.executor==null){this.executor=setTimeout(a.proxy(function(){var g=this.audio.a;
var f=0;
if(g.buffered.length>0){f=parseInt(((g.buffered.end(0)/g.duration)*100))
}this.$progressLoading.css({width:f+"%"})
},this),400);
this.$pauseButton.click(a.proxy(function(){this.$pauseButton.hide();
this.$playButton.show();
this.audio.pause()
},this));
this.$stopButton.click(a.proxy(function(){this.$pauseButton.hide();
this.$playButton.show();
this.audio.stop();
clearTimeout(this.executor)
},this));
this.audio.observeEnd(a.proxy(function(){this.$pauseButton.hide();
this.$playButton.show();
this.$progress.css({width:"0%"});
clearTimeout(this.executor)
},this));
this.audio.observeDurationchange(a.proxy(function(k){this.duration=k;
if(k!=NaN&&k!=Infinity){var f=parseInt(k);
var g="";
jQuery.each(new Array("s","m","h"),function(n,l){v=f%60;
g=""+v+l+" "+g;
f=(f-v)/60;
if(f<=0){return false
}});
this.$container.attr("title",this.basename+" | Duration: "+g)
}},this));
this.audio.observeTimeupdate(a.proxy(function(g){if(this.duration!=null){var f=(g*100)/this.duration;
this.$progress.css({width:f+"%"})
}},this))
}},this))
};
window.LongPlayer=function(f,c){var g=jQuery;
this.$container=g("#"+c);
this.$container.addClass("longPlayer");
this.added=false;
var b=g('<div class="clicktoplay"><div class="playicon"></div></div>');
this.$container.append(b);
b.click(g.proxy(function(k){b.hide();
if(!this.added){f.addSelf(this.$container)
}f.a.controls=true;
f.play()
},this))
};
window.NativeAudio=function(b){this.delayedSrc=b
};
NativeAudio.prototype.lazyInit=function(){if(!this.a){this.a=document.createElement("audio");
if(this.delayedSrc){this.a.src=this.delayedSrc;
this.delayedSrc=null
}}};
NativeAudio.prototype.play=function(){this.lazyInit();
this.a.play()
};
NativeAudio.prototype.getBasename=function(){var c=this.delayedSrc||this.a.src;
var b=c.lastIndexOf("/");
if(b>-1&&b<c.length){c=c.substring(b+1)
}return c
};
NativeAudio.prototype.pause=function(){this.lazyInit();
this.a.pause()
};
NativeAudio.prototype.stop=function(){this.a.pause();
this.a.currentTime=0
};
NativeAudio.prototype.seek=function(b){this.lazyInit();
this.a.currentTime=b
};
NativeAudio.prototype.observeTimeupdate=function(b){a(this.a).bind("timeupdate",a.proxy(function(){b(this.a.currentTime)
},this))
};
NativeAudio.prototype.observeDurationchange=function(b){a(this.a).bind("durationchange",a.proxy(function(){b(this.a.duration)
},this))
};
NativeAudio.prototype.observeEnd=function(b){a(this.a).bind("ended",b);
a(this.a).bind("timeupdate",a.proxy(function(){if(this.a.currentTime==this.a.duration){b()
}},this))
};
NativeAudio.prototype.addSelf=function(b){this.lazyInit();
b.append(this.a)
};
NativeAudio.canPlayType=function(c){var b=document.createElement("audio");
var f=navigator.userAgent;
var g=f.match(/Windows.+Safari/)&&!f.match(/Chrome/);
return !!(!g&&b.canPlayType&&b.canPlayType(c).replace(/no/,""))
};
NativeAudio.canPlayMp3=function(){return NativeAudio.canPlayType("audio/mpeg;")
}
})(jQuery);
(function(a){if(typeof window.Glossary=="undefined"){window.Glossary={APILocation:"/sitebuilder2/api/ajax/glossary.html",Popup:null,load:function(g,b,c){if(Glossary.Popup==null){Glossary.Popup=new WPopupBox()
}var f=Glossary.Popup.getMidpoint(c);
Glossary.Popup.show();
Glossary.Popup.setSize(550,100);
Glossary.Popup.setContent("<span class='loading'><img src='/static_war/images/tab-spinner.gif' title='Loading' alt='Loading'/></span>");
Glossary.Popup.positionBelow(f);
a.ajax({method:"GET",url:Glossary.APILocation,data:{page:g,term:b,rn:Math.round(Math.random()*10000)},success:function(k,n,l){Glossary.Popup.setContent(k);
Glossary.Popup.positionBelow(f)
}})
},loadContent:function(c,b){if(Glossary.Popup==null){Glossary.Popup=new WPopupBox()
}var f=Glossary.Popup.getMidpoint(b);
Glossary.Popup.show();
Glossary.Popup.setSize(550,100);
Glossary.Popup.setContent(c);
Glossary.Popup.positionBelow(f)
}}
}})(jQuery);
if(typeof SortableTables=="undefined"){var SortableTables={DATE_RE:/^(\d\d?)[\/\.-](\d\d?)[\/\.-]((\d\d)?\d\d)$/,FILESIZE_RE:/^\(?([\d\.]+)\s([KM]B)\)?$/,tables:{},init:function(){if(!document.getElementsByTagName){return
}tbls=document.getElementsByTagName("table");
for(ti=0;
ti<tbls.length;
ti++){thisTbl=tbls[ti];
if((" "+thisTbl.className+" ").indexOf("sitebuilder_sortable")!=-1){if(!thisTbl.id){var a="sortableTable_"+Math.floor(Math.random()*100000);
thisTbl.id=a
}SortableTables.tables[thisTbl.id]=new SortableTable(thisTbl)
}}},registerCallback:function(a,b){SortableTables.tables[a.id].callback=b
}};
var SortableTable=function(l){this.table=l;
if(l.rows&&l.rows.length>0){var p=l.rows[0]
}if(!p){return
}var n=jQuery.proxy(function(f,q){return jQuery.proxy(function(){this.resort(f,q);
return false
},this)
},this);
for(var k=0;
k<p.cells.length;
k++){var c=p.cells[k];
if((" "+c.className+" ").indexOf("sortable")!=-1){var b=this._getInnerText(c);
var o=(c.title)?c.title:b;
c.title="Click to sort by "+o.toLowerCase();
var g=document.createElement("a");
g.href="#";
g.className="sortheader";
g.onclick=n(g,k);
g.innerHTML=b+'<span class="sortarrow">&nbsp;&nbsp;&nbsp;</span>';
c.innerHTML="";
c.appendChild(g)
}}this.callback()
};
SortableTable.prototype.poundRegex=new RegExp("(\u00A3|&pound;)","g");
SortableTable.prototype.resort=function(l,o){var s;
for(var z=0;
z<l.childNodes.length;
z++){if(l.childNodes[z].tagName&&l.childNodes[z].tagName.toLowerCase()=="span"){s=l.childNodes[z]
}}var a=this._getInnerText(s);
var c=l.parentNode;
var f=o||c.cellIndex;
var w=this.table;
if(w.rows.length<=1){return
}var n=this._getInnerText(w.rows[1].cells[f]);
var r=this._sort_caseInsensitive;
if(n.match(/^[\d\.]+$/)){r=this._sort_numeric
}else{if(n.match(this.poundRegex)){r=this._sort_pounds
}}possdate=n.match(SortableTables.DATE_RE);
if(possdate){first=parseInt(possdate[1]);
second=parseInt(possdate[2]);
if(first>12){r=this._sort_ddmm
}else{if(second>12){r=this._sort_mmdd
}else{r=this._sort_ddmm
}}}if((" "+w.rows[0].cells[f].className+" ").indexOf("sortable_filesize")!=-1){r=this._sort_filesize
}this.sortColumn=f;
var g=new Array();
var k=new Array();
for(i=0;
i<w.rows[0].length;
i++){g[i]=w.rows[0][i]
}for(j=1;
j<w.rows.length;
j++){k[j-1]=w.rows[j]
}k.sort(jQuery.proxy(r,this));
var q;
if(s.getAttribute("sortdir")=="down"){q="&nbsp;&nbsp;&uarr;";
k.reverse();
s.setAttribute("sortdir","up");
l.className="sortheader sortup"
}else{q="&nbsp;&nbsp;&darr;";
s.setAttribute("sortdir","down");
l.className="sortheader sortdown"
}for(i=0;
i<k.length;
i++){if(!k[i].className||(k[i].className&&(k[i].className.indexOf("sortbottom")==-1))){w.tBodies[0].appendChild(k[i])
}}for(i=0;
i<k.length;
i++){if(k[i].className&&(k[i].className.indexOf("sortbottom")!=-1)){w.tBodies[0].appendChild(k[i])
}}var p=document.getElementsByTagName("span");
for(var z=0;
z<p.length;
z++){if(p[z].className=="sortarrow"){if(this._getParent(p[z],"table")==this._getParent(l,"table")){p[z].innerHTML="&nbsp;&nbsp;&nbsp;"
}}}var u=this._getParent(l,"tr");
var b=u.getElementsByTagName("a");
for(var z=0;
z<b.length;
z++){if(b[z]!=l){b[z].className="sortheader"
}}s.innerHTML=q;
this.callback()
};
SortableTable.prototype._sort_caseInsensitive=function(f,c){aa=this._getInnerText(f.cells[this.sortColumn]).toLowerCase();
bb=this._getInnerText(c.cells[this.sortColumn]).toLowerCase();
if(String.prototype.trim){aa=aa.trim();
bb=bb.trim()
}if(aa==bb){return 0
}if(aa<bb){return -1
}return 1
};
SortableTable.prototype._sort_default=function(f,c){aa=this._getInnerText(f.cells[this.sortColumn]);
bb=this._getInnerText(c.cells[this.sortColumn]);
if(aa==bb){return 0
}if(aa<bb){return -1
}return 1
};
SortableTable.prototype._sort_numeric=function(f,c){return this._doNumericSort(this._getInnerText(f.cells[this.sortColumn]),this._getInnerText(c.cells[this.sortColumn]))
};
SortableTable.prototype._sort_pounds=function(f,c){return this._doNumericSort(this._getInnerText(f.cells[this.sortColumn]).replace(this.poundRegex,"").replace(",",""),this._getInnerText(c.cells[this.sortColumn]).replace(this.poundRegex,"").replace(",",""))
};
SortableTable.prototype._sort_ddmm=function(f,c){aa=this._getInnerText(f.cells[this.sortColumn]);
bb=this._getInnerText(c.cells[this.sortColumn]);
mtch=aa.match(SortableTables.DATE_RE);
y=mtch[3];
m=mtch[2];
d=mtch[1];
if(m.length==1){m="0"+m
}if(d.length==1){d="0"+d
}dt1=y+m+d;
mtch=bb.match(SortableTables.DATE_RE);
y=mtch[3];
m=mtch[2];
d=mtch[1];
if(m.length==1){m="0"+m
}if(d.length==1){d="0"+d
}dt2=y+m+d;
if(dt1==dt2){return 0
}if(dt1<dt2){return -1
}return 1
};
SortableTable.prototype._sort_mmdd=function(f,c){aa=this._getInnerText(f.cells[this.sortColumn]);
bb=this._getInnerText(c.cells[this.sortColumn]);
mtch=aa.match(SortableTables.DATE_RE);
y=mtch[3];
d=mtch[2];
m=mtch[1];
if(m.length==1){m="0"+m
}if(d.length==1){d="0"+d
}dt1=y+m+d;
mtch=bb.match(SortableTables.DATE_RE);
y=mtch[3];
d=mtch[2];
m=mtch[1];
if(m.length==1){m="0"+m
}if(d.length==1){d="0"+d
}dt2=y+m+d;
if(dt1==dt2){return 0
}if(dt1<dt2){return -1
}return 1
};
SortableTable.prototype._sort_filesize=function(f,c){aa=this._getInnerText(f.cells[this.sortColumn]);
bb=this._getInnerText(c.cells[this.sortColumn]);
a_bytes=0;
b_bytes=0;
mtch=aa.match(SortableTables.FILESIZE_RE);
if(mtch){num=mtch[1];
units=mtch[2];
if(units=="MB"){a_bytes=num*1024*1024
}else{a_bytes=num*1024
}}mtch=bb.match(SortableTables.FILESIZE_RE);
if(mtch){num=mtch[1];
units=mtch[2];
if(units=="MB"){b_bytes=num*1024*1024
}else{b_bytes=num*1024
}}return this._doNumericSort(a_bytes,b_bytes)
};
SortableTable.prototype._doNumericSort=function(f,c){aa=parseFloat(f);
if(isNaN(aa)){aa=0
}bb=parseFloat(c);
if(isNaN(bb)){bb=0
}return aa-bb
};
SortableTable.prototype._getInnerText=function(f){if(typeof f=="string"){return f.trim()
}if(typeof f=="undefined"){return""
}if(f.innerText){return f.innerText.trim()
}var g="";
var c=f.childNodes;
var a=c.length;
for(var b=0;
b<a;
b++){switch(c[b].nodeType){case 1:g+=this._getInnerText(c[b]);
break;
case 3:g+=c[b].nodeValue;
break
}}return g.trim()
};
SortableTable.prototype._getParent=function(b,a){if(b==null){return null
}else{if(b.nodeType==1&&b.tagName.toLowerCase()==a.toLowerCase()){return b
}else{return this._getParent(b.parentNode,a)
}}};
SortableTable.prototype._zebraStripe=function(){var b=this.table;
rows=b.getElementsByTagName("tr");
var c=true;
for(var a=0;
a<rows.length;
a++){cells=rows[a].getElementsByTagName("td");
if(cells.length==0){continue
}rows[a].className=c?"odd":"even";
c=!c
}};
SortableTable.prototype.callback=function(){this._zebraStripe()
};
Event.onDOMReady(SortableTables.init)
}jQuery(document).ready(function(k){var a=jQuery("#page-comments-container");
if(a.length>0){var f=jQuery("#page-comments-container .commentsLink");
var b=Comments.showPageComments;
var c={};
var g=Url.unparam(window.location.href);
if(typeof g.comments!="undefined"){b="no"!=g.comments&&"false"!=g.comments&&"off"!=g.comments
}c.waitForClick=!b;
window.pageComments=Comments.fromLink(f,c)
}});
var Comments=function(c,a,b){this.url=c;
this.$div=a;
this.rootList=null;
this.$replyTo=null;
this.replyToId=null;
this.$link=b;
this.hideDeletedComments=null;
if(!Comments.C){Comments.C={PERMA_REGEX:/^#c([0-9a-f]){16,32}$/,URL:"/sitebuilder2/api/comment"};
Comments.L={SPINNER:'<img src="/static_war/images/tab-spinner.gif" >',LOADING:" Loading comments &hellip;",LOADINGFORM:"Loading form &hellip;",DENIED_MESSAGE:"<span class='permission_denied'>You do not have permission to view these comments.</span>",FAILED_MESSAGE:"<span class='error_unknown'>Sorry, there was a problem loading comments.</span>",REPLY_HEADING:"Reply to comment"}
}};
Comments.showPageComments=false;
Comments.fromLink=function(b,f){f=f||{};
var k=Url.unparam(b.attr("href")).page;
if(k){var n=f.divId||("commentsFor"+k.replace(/[^a-z0-9]+/g,"_"));
var a=jQuery("<div/>").attr("id",n);
var l=new Comments(k,a,b);
var g=!!((window.location.hash||"").match(Comments.C.PERMA_REGEX));
if(f.waitForClick&&!g&&b.length>0){b.click(jQuery.proxy(function(c){c.preventDefault();
c.stopPropagation();
this.open();
return false
},l))
}else{l.open()
}return l
}};
Comments.decorateLinks=function(){jQuery(".commentsLink").each(function(a,b){Comments.fromLink(jQuery(b))
})
};
Comments.prototype={init:function(){this._loadingMessage();
jQuery.ajax({url:Comments.C.URL,data:this.params({page:this.url,random:this._rand()}),success:jQuery.proxy(this.initDone,this),error:jQuery.proxy(this.initFail,this)})
},_rand:function(b){if(b){parseInt(Math.random()*999999999999999)
}var a=(window.SitebuilderInfo||{}).lastUpdated||parseInt(Math.random()*999999999999999);
if(new WCookie("WarwickSSO").value){a+="U"
}return a
},params:function(a){if(typeof this.hideDeletedComments=="boolean"){a.HideDeletedComments=this.hideDeletedComments
}return a
},setHideDeletedComments:function(a){if(a!=this.hideDeletedComments){this.hideDeletedComments=a;
this.init()
}},_loadingMessage:function(){this.$div.html(Comments.L.SPINNER+Comments.L.LOADING);
this.$div.trigger("comments:updated")
},initDone:function(a){this.$div.html(a);
this.$div.trigger("comments:updated",{refreshCount:true});
if((window.location.hash||"").match(Comments.C.PERMA_REGEX)){window.location.hash=window.location.hash
}this.decorateEverything();
this.initialHeading=this._getFormHolder().find("h2").html()[0];
this.initialSubmitText=this._getFormHolder().find("input[name=postSubmit]")?this._getFormHolder().find("input[name=postSubmit]").val():null
},initFail:function(a){if(a.status==403||((a.status==301||a.status==302)&&a.getResponseHeader("Location").indexOf("websignon")>-1)){this.$div.html(Comments.L.DENIED_MESSAGE)
}else{this.$div.html(Comments.L.FAILED_MESSAGE)
}this.$div.trigger("comments:updated")
},_paramsToObject:function(c){var b={};
for(var a=0;
a<c.length;
a++){b[c[a].name]=c[a].value
}return b
},previewClick:function(b){var a=b.target;
params=this._paramsToObject(jQuery(a).closest("form").serializeArray());
params.previewSubmit="Preview";
delete params.postSubmit;
jQuery.ajax({type:"POST",url:Comments.C.URL,data:jQuery.param(params),success:jQuery.proxy(function(c){var f=c;
var g=this.$div.find(".previewContainer");
jQuery(g).html("<h2>Preview</h2>"+f);
jQuery(g).effect("highlight");
this.$div.trigger("comments:updated")
},this)});
b.preventDefault();
b.stopPropagation()
},unfollowClick:function(b){var a=b.target;
params=jQuery(a).closest("form").serialize();
jQuery.ajax({url:Comments.C.URL,type:"POST",data:params,success:jQuery.proxy(function(c){this.$div.html(c);
this.$div.trigger("comments:updated",{refreshCount:true});
this.decorateEverything()
},this)});
b.preventDefault();
b.stopPropagation()
},decorateForm:function(){if(this.$div.find("input[name=previewSubmit]").length>0){this.$div.find("input[name=previewSubmit]").click(jQuery.proxy(this.previewClick,this))
}var b=this.$div.find("input[name=postSubmit]");
if(b.length>0){jQuery(b).removeAttr("disabled");
jQuery(b).click(jQuery.proxy(this.submitClick,this))
}var a=this.$div.find("input[name=unfollowSubmit]");
if(a.length>0){a.click(jQuery.proxy(this.unfollowClick,this))
}this._reassignFormTabindex()
},resetForm:function(){var a=this._getForm();
if(a.length>0){var b=this._getFormHolder();
a.find("textarea").val("");
this.$div.find(".previewContainer").html("");
this.$div.trigger("comments:updated");
jQuery(a.find("[input[name=postSubmit]")).removeAttr("disabled");
a.find(".user_error").remove();
a.find("input[name=commentId]").remove();
b.find(".editReplyText").remove();
b.find("h2").html(this.initialHeading);
b.find("input[name=postSubmit]").val(this.initialSubmitText)
}this.resetFlags()
},resetFlags:function(){this.$editing=null;
this.editingId=null;
this.$replyTo=null;
this.replyToId=null
},decorateListWithin:function(a){this.$rootList=this.$div.find("ul");
if(a.length>0){a.find("a.replyLink").each(jQuery.proxy(function(f,b){var g=jQuery(b);
var c=Url.unparam(g.attr("href")).replyTo;
g.click(jQuery.proxy(function(k){k.preventDefault();
k.stopPropagation();
if(c!=this.replyToId){this.resetForm();
this.$replyTo=jQuery("#pageComment_"+c).closest("li");
this.replyToId=c;
this.$replyTo.append(this._getFormHolder());
this._getFormHolder().find("h2").html(Comments.L.REPLY_HEADING);
this.$div.trigger("comments:updated")
}return false
},this))
},this));
a.find("a.permalink").each(jQuery.proxy(function(c,b){var f=jQuery(b);
var g=f.attr("href").match(/#(.+)/)[1];
if(g){f.click(jQuery.proxy(function(k){k.preventDefault();
k.stopPropagation();
window.location.hash=g;
return false
},this))
}},this))
}this._replaceClick(a,"a.deleteLink",true,function(g,c){var b="Are you sure you want to delete this comment? ";
var f=jQuery(g.target).closest("li").find("li").length;
if(f==1){b+=" one reply will also be deleted."
}else{if(f>1){b+=f+" replies will also be deleted."
}}if(confirm(b)){this.deleteComment(c)
}});
this._replaceClick(a,"a.approveLink",true,function(c,b){if(confirm("Are you sure you want to approve this comment?")){this.approveComment(b)
}});
this._replaceClick(a,"a.showDeletedCommentsLink",false,function(){this.setHideDeletedComments(false)
});
this._replaceClick(a,"a.hideDeletedCommentsLink",false,function(){this.setHideDeletedComments(true)
});
this._replaceClick(this.$div,"a.editLink",true,function(c,b){if(b!=this.editingId){this.resetForm();
this.$editing=jQuery(c.target).closest("li");
this.editingId=b;
jQuery.ajax({url:Comments.C.URL,type:"GET",data:jQuery.param({commentId:b,random:this._rand(true),page:this._getForm()?this._getForm().find("input[name=page]").val():""}),success:jQuery.proxy(function(f){this._getFormHolder().html(f);
this._getFormHolder().find(".cancelEditingLink").remove();
this.decorateForm();
this.$editing.append(this._getFormHolder());
var g=this.$editing.find("ul");
if(g.length>0){this.$editing.append(g)
}this.$div.trigger("comments:updated")
},this)})
}})
},_replaceClick:function(f,b,a,c){if(f.length>0){f.find(b).each(jQuery.proxy(function(n,k){var o=jQuery(k);
var l=null;
if(a){var g=o.closest(".pageComment");
l=this._commentIdFromDiv(g)
}o.click(jQuery.proxy(function(p){p.preventDefault();
p.stopPropagation();
(jQuery.proxy(c,this))(p,l);
return false
},this))
},this))
}},decorateList:function(){this.decorateListWithin(this.$div)
},decorateEverything:function(){this.decorateList();
this.decorateForm()
},deleteComment:function(a){jQuery.ajax({url:Comments.C.URL,type:"post",data:jQuery.param(this.params({action:"delete",commentId:a,page:this._getForm().find("input[name=page]").val()})),success:jQuery.proxy(this.onDeleteSuccess,this),error:jQuery.proxy(this.onDeleteFailure,this)})
},onDeleteSuccess:function(a){this.$div.html(a);
this.$div.trigger("comments:updated",{refreshCount:true});
this.decorateEverything()
},onDeleteFailure:function(a){},approveComment:function(a){jQuery.ajax({url:Comments.C.URL,type:"post",data:jQuery.param({action:"approve",commentId:a,page:this._getForm().find("input[name=page]").val()}),success:jQuery.proxy(this.onApproveSuccess,this),error:jQuery.proxy(this.onApproveFailure,this)})
},onApproveSuccess:function(a){this.$div.html(a);
this.$div.trigger("comments:updated",{refreshCount:true});
this.decorateEverything()
},onApproveFailure:function(a){},submitClick:function(b){b.preventDefault();
b.stopPropagation();
var a=b.target;
jQuery(a).attr("disabled","disabled");
var c=this._paramsToObject(this._getForm().serializeArray());
c.postSubmit="Submit";
delete c.previewSubmit;
if(this.replyToId){c.replyTo=this.replyToId
}jQuery.ajax({url:Comments.C.URL,type:"post",data:jQuery.param(c),success:jQuery.proxy(this.onSubmitSuccess,this),error:jQuery.proxy(this.onSubmitFailure,this)});
return false
},onSubmitSuccess:function(a){var b=(a.indexOf("user_error")!=-1);
if(b){this._getFormHolder().html(a);
this.decorateForm()
}else{this.$div.html(a);
this.$div.trigger("comments:updated",{refreshCount:true});
this.decorateEverything();
this.resetFlags()
}},onSubmitFailure:function(a){this._getFormHolder().html(a);
this.decorateForm()
},open:function(){if(this.$link.length>0&&!this.keepLink){this.$link.replaceWith(this.$div)
}this.init()
},resetFormPosition:function(){this._insertAfter(this._getListHolder(),this._getFormHolder())
},_commentIdFromDiv:function(a){return a.attr("id").substring("pageComment_".length)
},_greatestTabindex:function(){var a=0;
jQuery("[tabindex]").each(function(b,c){a=Math.max(a,jQuery(c).attr("tabindex"))
});
return a
},_reassignFormTabindex:function(){var b=this._greatestTabindex();
if(this._getForm().length>0){var a=this._getForm().find("[tabindex]");
a.each(function(c,f){jQuery(f).attr("tabindex",++b)
})
}},_getForm:function(){return this.$div.find("form")
},_getFormHolder:function(){return this.$div.find(".comment_form_holder")
},_getListHolder:function(){return this.$div.find(".comment_list_holder")
},_insertAfter:function(b,a){b.parentNode.insertBefore(a,b.nextSibling)
}};
(function(a){window.map=null;
window.RoomsMap={QUERY_URL:"/ajax/lvsch/rooms.json",popup:null,currentRoom:null,mapElement:null,generateId:function(){return"map"+Math.floor(Math.random()*10000)
},generateMapContainer:function(c,b){if(RoomsMap.mapElement){b.append('<div id="'+c+'Anchor"><div id="'+c+'ContainerWrapper" style="position:relative;"></div></div>')
}else{b.append('<div id="'+c+'Anchor"><div id="'+c+'ContainerWrapper" style="position:relative;"><div id="'+c+'Container" style="position:relative; width:381px; height:260px;">Loading map&hellip;</div></div></div>')
}},loadMapForRoom:function(c,b){if(!RoomsMap._loadPopup(c,b)){return
}a.ajax({method:"GET",url:RoomsMap.QUERY_URL,data:{room:b,exactMatch:true},dataType:"json",success:function(k){if(k.length>1){var f=new StringBuilder("<p>Found more than one room; disambiguation required.</p>");
a.each(k,function(n,o){RoomsMap._renderRoomDescription(o,f)
});
RoomsMap.popup.setContent(f.toString())
}else{if(k.length==1){var f=new StringBuilder("");
var g=k[0];
var l=RoomsMap.generateId();
RoomsMap._renderRoomDescription(g,f);
RoomsMap.generateMapContainer(l,f);
f.append("<p>");
if(g.buildingNumber>0){f.append('<a href="http://go.warwick.ac.uk/interactivemap?type=building&num='+g.buildingNumber+'">')
}else{f.append('<a href="http://go.warwick.ac.uk/interactivemap">')
}f.append("View full map");
f.append("</a></p>");
RoomsMap.popup.setContent(f.toString());
RoomsMap._doMap(l,g,"room")
}else{RoomsMap.popup.setContent("<p>The specified room could not be found.</p>")
}}}})
},loadMapForBuilding:function(g,c,b){if(!RoomsMap._loadPopup(g,c)){return
}var f=new StringBuilder("");
RoomsMap._loadMapsData(true,function(){var l=mapData.Buildings.detect(function(p){return p.num==c
});
var k=k||l.title;
var o=RoomsMap.generateId();
var n={buildingNumber:c,buildingName:k};
if(k){f.append("<p>");
if(n.buildingNumber>0){f.append('<a href="http://go.warwick.ac.uk/interactivemap?type=building&num='+n.buildingNumber+'">')
}else{f.append('<a href="http://go.warwick.ac.uk/interactivemap">')
}f.append("<strong>"+k+"</strong></a></p>")
}RoomsMap.generateMapContainer(o,f);
f.append("<p>");
if(n.buildingNumber>0){f.append('<a href="http://go.warwick.ac.uk/interactivemap?type=building&num='+n.buildingNumber+'">')
}else{f.append('<a href="http://go.warwick.ac.uk/interactivemap">')
}f.append("View full map</a></p>");
RoomsMap.popup.setContent(f.toString());
RoomsMap._doMap(o,n,"building")
})
},loadMapForSection:function(f,g,b){if(!RoomsMap._loadPopup(f,g+":"+b)){return
}var c=new StringBuilder("");
RoomsMap._loadMapsData(true,function(){var k=mapData[g].detect(function(n){return n.title==b
});
var l=RoomsMap.generateId();
c.append("<p><strong>"+k.title+"</strong></p>");
if(k.url){c.append('<p><a href="'+k.url+'" class="moreInformation">More information</a></p>')
}RoomsMap.generateMapContainer(l,c);
c.append('<p><a href="http://go.warwick.ac.uk/interactivemap">View full map</a></p>');
RoomsMap.popup.setContent(c.toString());
RoomsMap._doMap(l,k,"other")
})
},_loadMapsData:function(c,n){if(typeof VEMap=="undefined"){var l=["/static_war/render/scripts/legacy/proto-sc-packed.js."+SitebuilderInfo.buildTimestamp,"/static_war/apps/livemap/mapControl.js."+SitebuilderInfo.buildTimestamp,"//search.warwick.ac.uk/search/mapData.json?assign=mapData","/static_war/apps/livemap/mapnocontrol.min.js."+SitebuilderInfo.buildTimestamp];
var k=c?"":Math.floor(Math.random()*10000);
var f=document.getElementsByTagName("head")[0];
var b={};
function g(r){var p=l[r];
if(k!=""){p+=k
}var q=document.getElementsByTagName("head")[0];
var o=document.createElement("script");
o.src=p;
b[p]={done:false,script:o};
o.onload=o.onreadystatechange=function(u,s){return function(){if(!b[s].done&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){b[s].done=true;
if(u>=l.length-1){n();
return
}else{g(u+1)
}}}
}(r,p);
q.appendChild(b[p].script)
}g(0)
}else{n()
}},_loadPopup:function(b,c){if(RoomsMap.popup==null){RoomsMap.popup=new WPopupBox();
RoomsMap.popup.rootElement.className+=" popupMap";
RoomsMap.popup.rootElement.style.zIndex=50
}else{if(RoomsMap.currentRoom==c){RoomsMap.popup.show();
RoomsMap.popup.positionBelow(b);
return false
}}if(RoomsMap.mapElement){a(RoomsMap.mapElement).remove()
}RoomsMap.currentRoom=c;
RoomsMap.popup.setSize(450,400);
RoomsMap.popup.show();
RoomsMap.popup.setContent("Loading...");
RoomsMap.popup.positionBelow(b);
return true
},_doMap:function(f,c,b){if(RoomsMap.mapElement){a(f+"ContainerWrapper").update();
a(f+"ContainerWrapper").appendChild(RoomsMap.mapElement)
}RoomsMap.popup.setHeightToFit();
RoomsMap._loadMapsData(true,function(){RoomsMap._loadMap(f+"Container",c,b,{containerId:f+"Container",wrapperId:f+"ContainerWrapper",anchorId:f+"Anchor",showMoreInfoOnPopup:false,showInfoBoxOnHighlight:false,roadworksIconsLayer:13,carParksIconsLayer:16,buildingsIconsLayer:16,hallsIconsLayer:16,forcedZoomLevel:16})
})
},_loadMap:function(g,f,c,b){if(map&&a(map.ID)){b.containerId=map.options.containerId;
map.setOptions(b)
}else{if(!a(g)){alert(g+" does not exist")
}map=new VEMap(g);
map.setOptions(b);
map.SetDashboardSize(VEDashboardSize.Tiny);
map.LoadMap(new VELatLong(52.381625,-1.563518),14,"r",false,VEMapMode.Mode2D,false);
map.EnableShapeDisplayThreshold(false);
map.BuildObjectLookup();
map.DrawHideLabels();
map.DrawAllShapeLayers();
map.AttachEvent("onendzoom",map.ZoomOverride);
map.ZoomOverride();
RoomsMap.mapElement=a(map.ID)
}this._focusOn(map,f,c)
},_focusOn:function(k,g,f){if(f&&f=="building"){k.HighlightBuilding(g.buildingNumber)
}else{if(f&&f=="other"){if(g.onsearchselect){var c=g.onsearchselect[0];
var b=g.onsearchselect[1];
(k[c])(g[b])
}}else{k.SelectRoom(g)
}}},_renderRoomDescription:function(b,f){f.append("<p><strong>"+(b.alias||b.name)+"</strong> is a ");
var c=(b.type&&b.type!="None"&&b.type!="Locally timetabled room");
f.append(c?b.type.toLowerCase():"room");
if(b.floor){f.append(" on the ");
f.append(b.floor.toLowerCase());
switch(b.floor){case"1":f.append("st");
break;
case"2":f.append("nd");
break;
case"3":f.append("rd");
break;
case"4":case"5":f.append("th");
break
}f.append(" floor of ")
}else{f.append(" in ")
}if(b.buildingName.indexOf("Building")!=-1){f.append("the ")
}if(b.buildingNumber>0){f.append('<a href="http://go.warwick.ac.uk/interactivemap?type=building&num='+b.buildingNumber+'">')
}else{f.append('<a href="http://go.warwick.ac.uk/interactivemap">')
}f.append("<strong>"+b.buildingName+"</strong></a>");
f.append("</p>")
}}
})(jQuery);
var twitterList=function(){var E;
var f;
var a;
var r;
var o;
var g;
var F;
var k=function(){return E
};
var C=function(){return f
};
var B=function(){return a
};
var D=function(){return r
};
var c=function(){return o
};
var H=function(){return g
};
var p=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var n=["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"];
var q=function(I){for(i=0;
i<p.length;
i++){if(p[i]==I){return i
}}};
var s=0,u=this;
var A=function(){return $$("head")[0]
};
var G=function(J,L){var I=document.createElement("script"),K="__jsonp"+s;
u[K]=L;
I.src=J.replace(/\?(&|$)/,"__jsonp"+s+"$1");
I.onload=function(){I.remove();
I=null;
delete u[K]
};
F.appendChild(I);
s++
};
var l=function(S){var I=S.split(" ");
var U=I[3].split(":");
var L=new Date(I[5],q(I[1]),I[2],U[0],U[1],U[2],0);
var P=new Date();
var K="th";
var J=L.getDate();
if(J!=11&&J!=12&&J!=13){if(J>9){J=J%10
}if(J==1){K="st"
}if(J==2){K="nd"
}if(J==3){K="rd"
}}var O=true;
var R=L.getHours();
var M=L.getMinutes();
M=(M<10?"0":"")+M;
if(R>12){O=false;
R-=12
}else{if(R==12){O=false
}else{if(R==0){R=12
}}}var N=(O)?"am":"pm";
P.setHours(0,0,0,0);
L.setHours(0,0,0,0);
var T=(Math.floor((P-L)/(1000*60*60*24)));
var Q;
if(T==0){Q="Today"
}else{if(T==1){Q="Yesterday"
}else{Q=n[L.getDay()]+" "+L.getDate()+K+" "+p[L.getMonth()]+" "+L.getFullYear()
}}return Q+", "+R+":"+M+N
};
var w=function(N,J,M,O,L,I){var K=this;
E=N;
a=J;
r=M;
o=O;
g=L;
f=I;
if(typeof jQuery!="undefined"){if(typeof window.twitterLoaded=="undefined"||window.twitterLoaded[O]!==true){z(K);
if(typeof window.twitterLoaded=="undefined"){window.twitterLoaded=new Array()
}window.twitterLoaded[O]=true
}}else{if(typeof window.twitterLoaded=="undefined"||window.twitterLoaded[uniqueId]!==true){F=A();
b(K);
if(typeof window.twitterLoaded=="undefined"){window.twitterLoaded=new Array()
}window.twitterLoaded[O]=true
}}};
var b=function(I){var J="http://api.twitter.com/1/statuses/user_timeline/"+k()+".json";
if(C()){J="/sitebuilder2/api/twitter_timeline.json?account="+encodeURIComponent(C())
}if(J.indexOf("?")==-1){J+="?"
}else{J+="&"
}J+="count="+D()+20+"&include_entities=true&include_rts="+B()+"&callback=?";
I.pgetJSON(J,function(M){var L=0;
$A(M).each(function(O){if(L<D()){var P=O.text;
var N=l(O.created_at);
if(P.charAt(0)!="@"){if(O.entities){if(O.entities.hashtags&&O.entities.hashtags.length>0){$A(O.entities.hashtags).each(function(Q){P=P.replace(new RegExp("#"+Q.text,"g"),"<a target='_blank' title='Search for "+Q.text+" on Twitter' href='http://www.twitter.com/search?q="+Q.text+"'>#"+Q.text+"</a>")
})
}if(O.entities.urls&&O.entities.urls.length>0){$A(O.entities.urls).each(function(Q){P=P.replace(new RegExp(Q.url,"g"),"<a target='_blank' title='Link opens in a new window' href='"+Q.url+"'>"+Q.url+"</a>")
})
}if(O.entities.user_mentions&&O.entities.user_mentions.length>0){$A(O.entities.user_mentions).each(function(Q){P=P.replace(new RegExp("@"+Q.screen_name,"g"),"<a target='_blank' title='Read @"+Q.screen_name+"'s tweets on Twitter' href='http://www.twitter.com/"+Q.screen_name+"'>@"+Q.screen_name+"</a>")
})
}}var N=l(O.created_at);
P='<div class="tweet"><p class="tweet-text">'+P+'</p><span class="date-posted"><a href="http://twitter.com/'+k()+"/statuses/"+O.id_str+'" title="Read this tweet on Twitter">'+N+"</a></span>";
if(H()!="plaintext"){P=P+'<span class="tweet-actions"><a href="https://twitter.com/intent/tweet?in_reply_to='+O.id_str+'" class="tweet-reply"><i></i><span class="label">Reply</span></a><a href="https://twitter.com/intent/retweet?tweet_id='+O.id_str+'" class="tweet-retweet"><i></i><span class="label">Retweet</span></a><a href="https://twitter.com/intent/favorite?tweet_id='+O.id_str+'" class="tweet-fav"><i></i><span class="label">Favorite</span></a></span>'
}$("twitter-container-"+c()).insert(new Element("p").update(P));
L=L+1
}}});
var K=new Element("img",{src:M[0].user.profile_image_url});
$$("#twitter-container-"+c()+" .twitter-image-link")[0].insert(K);
$$("#twitter-container-"+c()+" .twitter-name")[0].insert(M[0].user.name)
})
};
var z=function(I){var J="http://api.twitter.com/1/statuses/user_timeline/"+k()+".json";
if(C()){J="/sitebuilder2/api/twitter_timeline.json?account="+encodeURIComponent(C())
}if(J.indexOf("?")==-1){J+="?"
}else{J+="&"
}J+="count="+D()+20+"&include_entities=true&include_rts="+B()+"&callback=?";
jQuery.getJSON(J,function(M){var L=0;
jQuery.each(M,function(N,P){if(L<D()){var Q=P.text;
if(P.entities){if(P.entities.hashtags&&P.entities.hashtags.length>0){jQuery.each(P.entities.hashtags,function(R,S){Q=Q.replace(new RegExp("#"+S.text,"g"),"<a target='_blank'  title='Search for "+S.text+" on Twitter' href='http://www.twitter.com/search?q="+S.text+"'>#"+S.text+"</a>")
})
}if(P.entities.urls&&P.entities.urls.length>0){jQuery.each(P.entities.urls,function(R,S){Q=Q.replace(new RegExp(S.url,"g"),"<a target='_blank' title='Link opens in a new window' href='"+S.url+"'>"+S.url+"</a>")
})
}if(P.entities.user_mentions&&P.entities.user_mentions.length>0){jQuery.each(P.entities.user_mentions,function(R,S){Q=Q.replace(new RegExp("@"+S.screen_name,"g"),"<a target='_blank' title='Read @"+S.screen_name+"'s tweets on Twitter' href='http://www.twitter.com/"+S.screen_name+"'>@"+S.screen_name+"</a>")
})
}}var O=l(P.created_at);
Q='<div class="tweet"><p class="tweet-text">'+Q+'</p><span class="date-posted"><a href="http://twitter.com/'+k()+"/statuses/"+P.id_str+'" title="Read this tweet on Twitter">'+O+"</a></span>";
if(H()!="plaintext"){Q=Q+'<span class="tweet-actions"><a href="https://twitter.com/intent/tweet?in_reply_to='+P.id_str+'" class="tweet-reply"><i></i><span class="label">Reply</span></a><a href="https://twitter.com/intent/retweet?tweet_id='+P.id_str+'" class="tweet-retweet"><i></i><span class="label">Retweet</span></a><a href="https://twitter.com/intent/favorite?tweet_id='+P.id_str+'" class="tweet-fav"><i></i><span class="label">Favorite</span></a></span>'
}jQuery("#twitter-container-"+c()).append(Q);
L=L+1
}});
var K=jQuery("<img />").attr("src",M[0].user.profile_image_url);
jQuery(K).appendTo("#twitter-container-"+c()+" .twitter-image-link");
jQuery("#twitter-container-"+c()+" .twitter-name").prepend(M[0].user.name)
})
};
return{init:w,pgetJSON:G}
};
SitebuilderHeaderSlideshow={beforeTransition:function(b,a){},afterTransition:function(a,b){}};
jQuery(document).ready(function(g){var n=function(o){var p=g.grep(o.get(0).className.split(" "),function(q){return q.match(/slide_\d+/)
});
if(p.length==0){return null
}else{return p[0]
}};
if(g("#header .slide").length>1&&(!g.browser.msie||parseInt(g.browser.version)>=7)){var l=g("#header").data("transition")||"slideshow";
var f=g("#header .slide");
var l=g("#header").data("transition")||"slide";
var c=g('<div class="slideshow-button slideshow-button-left" unselectable="on"><a href="#prev" title="View the previous slide" unselectable="on"></a></div>"');
var b=g('<div class="slideshow-button slideshow-button-right" unselectable="on"><a href="#next" title="View the next slide" unselectable="on"></a></div>"');
var k=g("#header .slide.active");
g("#header").addClass(n(k));
b.click(function(o){var u=g("#header .slide.active");
if(u.is(":animated")){o.stopPropagation();
o.preventDefault();
return false
}var r=u.next(".slide");
if(r.length==0){r=g("#header .slide").first()
}SitebuilderHeaderSlideshow.beforeTransition(u,r);
var q=g("#header").width();
if(l=="crossfade"){r.stop().hide().css({left:"0px"}).fadeTo(400,1,function(){g(this).addClass("active");
g("#header").removeClass(n(g("#header")));
g("#header").addClass(n(g(this)));
SitebuilderHeaderSlideshow.afterTransition(u,r)
});
u.stop().css({left:"0px"}).fadeTo(400,0,function(){g(this).removeClass("active")
})
}else{r.stop().css({left:q+"px"});
u.stop().css({left:"0px"});
g([u[0],r[0]]).animate({left:"-="+q},{duration:400,easing:"swing",complete:function(){u.removeClass("active").css({left:q+"px"});
r.addClass("active").css({left:"0px"});
g("#header").removeClass(n(g("#header")));
g("#header").addClass(n(g(this)));
SitebuilderHeaderSlideshow.afterTransition(u,r)
}})
}var s=r.find(".strapline");
if(s.length>0){var p=s.html();
if(p!=g("#strapline").html()){g("#strapline").fadeTo(200,0,function(){g(this).html(p).fadeTo(200,1)
})
}}o.stopPropagation();
o.preventDefault();
return false
});
c.click(function(o){var s=g("#header .slide.active");
if(s.is(":animated")){o.stopPropagation();
o.preventDefault();
return false
}var r=s.prev(".slide");
if(r.length==0){r=g("#header .slide").last()
}SitebuilderHeaderSlideshow.beforeTransition(s,r);
var q=g("#header").width();
if(l=="crossfade"){r.stop().hide().css({left:"0px"}).fadeTo(400,1,function(){g(this).addClass("active");
g("#header").removeClass(n(g("#header")));
g("#header").addClass(n(g(this)));
SitebuilderHeaderSlideshow.afterTransition(s,r)
});
s.stop().css({left:"0px"}).fadeTo(400,0,function(){g(this).removeClass("active")
})
}else{r.stop().css({left:"-"+q+"px"});
s.stop().css({left:"0px"});
g([s[0],r[0]]).animate({left:"+="+q},{duration:400,easing:"swing",complete:function(){s.removeClass("active").css({left:"-"+q+"x"});
r.addClass("active").css({left:"0px"});
g("#header").removeClass(n(g("#header")));
g("#header").addClass(n(g(this)));
SitebuilderHeaderSlideshow.afterTransition(s,r)
}})
}if(r.find(".strapline").length>0){var p=r.find(".strapline").html();
g("#strapline").fadeTo(200,0,function(){g(this).html(p).fadeTo(200,1)
})
}o.stopPropagation();
o.preventDefault();
return false
});
g("#header").prepend(c);
g("#header").append(b);
var a=g("#header").data("delay");
if(a){g("#header").mouseenter(function(){g(this).data("hover",true)
}).mouseleave(function(){g(this).data("hover",false)
});
window.setInterval(function(){if(!g("#header").data("hover")){b.click()
}},a*1000)
}}});
(function(k){var p=false;
var g=false;
var n=function(q,r){q.hover(function(){k(this).addClass(r)
},function(){k(this).removeClass(r)
})
};
jQuery.exist=function(){var q=true;
jQuery.each(arguments,function(){if(!this.length){q=false;
return false
}});
return q
};
window.SitebuilderInfo={url:null,lastContentUpdated:null,searchHasFocus:false,setupHeight:function(){var w=jQuery("#footer");
var r=jQuery("#navigation-and-content");
var q;
if(w.length){q=function(){var z=w.offset().top+w.outerHeight(true)+1;
return r.outerHeight(true)+(jQuery(window).height()-z)
}
}else{q=function(){return jQuery(window).height()-(r.offset().top+1)
}
}var s=q();
if(s<jQuery("#navigation.vertical").outerHeight(true)){s=jQuery("#navigation.vertical").outerHeight(true)
}r.css({"min-height":s+"px"});
if(w.length){footerHeight=w.offset().top+w.outerHeight(true)+1;
var u=jQuery(window).height()-footerHeight;
if(u>0){r.css({"min-height":(s+u)+"px"})
}}},setupSearch:function(){k("#search-container").mouseover(function(){k("#search-container #search-button").addClass("hover")
}).mouseout(function(){if(!SitebuilderInfo.searchHasFocus){k("#search-container #search-button").removeClass("hover")
}});
k("#search-box").focus(function(A){SitebuilderInfo.searchHasFocus=true
}).blur(function(A){SitebuilderInfo.searchHasFocus=false;
k("#search-container").mouseout()
});
var w=k("#search-container ul:nth(0)");
var z=k("#search-index-menu");
w.find("li").not(".more-link").appendTo(z).click(function(){r(k(this));
q();
k("#search-box").focus()
});
n(z.find("li"),"hover");
if(!k.browser.msie||parseInt(k.browser.version)>=8){var s,u=false;
var q=function(){z.fadeOut("fast")
};
w.find(".more-link").hover(function(A){if(s){clearTimeout(s)
}z.fadeIn("fast")
},function(A){if(s){clearTimeout(s)
}s=setTimeout(q,200)
}).bind("touchstart",function(A){u=true;
if(z.is(":visible")){return true
}else{A.preventDefault();
z.fadeIn("fast");
return false
}});
k(document.body).bind("touchstart",function(A){if(k(A.target).closest(".more-link").length==0){z.fadeOut("fast")
}})
}function r(D){var A,B,C;
B=k("#search-box");
w.find("> li").not(".more-link").remove();
$searchlink='<a title="View more search options" href="http://search.warwick.ac.uk/website" rel="nofollow">'+D.data("index-title")+"</a>";
D.clone().empty().prependTo(w).addClass("active").append($searchlink);
A=B.parent("form");
A.attr("action","http://search.warwick.ac.uk/"+D.data("index-section"));
A.find("input[name=source]").remove();
A.find("input[name=fileFormat]").remove();
if(D.data("source")){A.prepend(k('<input type="hidden" name="source">').val(D.data("source")))
}if(D.data("index-file-format")){k.each(D.data("index-file-format").split(";"),function(E,F){A.prepend(k('<input type="hidden" name="fileFormat">').val(F))
})
}A.find("input[name=urlPrefix]").remove();
if(D.data("url-prefix")){A.prepend(k('<input type="hidden" name="urlPrefix">').val(D.data("url-prefix")))
}C=D.text();
if(C.length>28){C=C.substring(0,28)+"\u2026"
}B.attr("placeholder",C)
}r(z.find("li.active"));
z.find("li.active").removeClass("active")
},setupWarwickLinks:function(){var q=k("#warwick-logo-container.on-hover");
if(q.length>0){var r=q.find("#warwick-site-links");
r.hide();
var s=function(u,w){if(w){q.unbind("mouseover").unbind("mouseout")
}else{q.mouseover(function(){r.stop().fadeTo("fast",1)
});
q.mouseout(function(){r.stop().fadeTo("fast",0)
})
}};
k(document.body).bind("smallscreen",s);
s(null,k(document.body).hasClass("is-smallscreen"))
}k("#masthead.transparent").mouseover(function(){k(this).removeClass("transparent")
}).mouseout(function(){k(this).addClass("transparent")
})
}};
var l=720;
var b=960;
var c=k(window).width();
var o=new WCookie("ForceTablet");
var f=k("html").hasClass("force-tablet-in-edit");
var a=f||(o.value&&o.value=="yes");
if(c>b){k("#meta-viewport").attr("content","width=device-width");
k("#meta-mobile-optimized").attr("content",b)
}else{if(c>=l||(c<l&&a)){k("#meta-viewport").attr("content","width="+b);
k("#meta-mobile-optimized").attr("content",b)
}}k(function(z){var u=z(document.body),r=z(window),A=z("#masthead"),D=z("#utility-container"),w=z("#search-container"),s=z("#warwick-logo-container"),C=z("#utility-bar"),B;
if(w.length>0){u.bind("smallscreen",function(E,F){if(F){if(z("#alternate-search").length==0){z("#content-wrapper").append(z('<div id="alternate-search"><hr /></div>'))
}z("#alternate-search").append(w)
}else{z("#utility-container").append(w)
}})
}var q=function(){var E=r.width();
var F=E<l&&!a;
if(F&&!p){u.addClass("is-smallscreen");
u.trigger("smallscreen",true)
}else{if(!F&&p){u.removeClass("is-smallscreen");
u.trigger("smallscreen",false)
}}p=F;
var G=E<=b&&(E>=l||a);
if(G&&!g){u.addClass("is-tablet");
if(a){u.addClass("force-tablet")
}u.trigger("tablet",true)
}else{if(!G&&g){u.removeClass("is-tablet");
if(a){u.removeClass("force-tablet")
}u.trigger("tablet",false)
}}g=G
};
r.resize(q);
q()
});
k(function(){var r=function(u,w){if(w&&k("#footer .mobile-switcher-link").length==0){var s=k('<div class="mobile-switcher-link"></div>');
k("#footer > .content").prepend(s);
s.append("View website in: ");
s.append(k('<a href="#force-tablet" />').html("Standard").click(function(z){o.value="yes";
o.expires="; expires=31 December 2034 23:54:30";
o.save();
z.stopPropagation();
z.preventDefault();
window.location.reload();
return false
}));
s.append(" | <strong>Mobile</strong>")
}};
var q=function(w,s){if(s&&k(document.body).hasClass("force-tablet")&&k("#footer .mobile-switcher-link").length==0){var u=k('<div class="mobile-switcher-link"></div>');
k("#footer > .content").prepend(u);
u.append("View website in: <strong>Standard</strong> | ");
u.append(k('<a href="#unforce-tablet" />').html("Mobile").click(function(z){o.value="";
o.expires="; expires=31 December 2034 23:54:30";
o.save();
z.stopPropagation();
z.preventDefault();
window.location.reload();
return false
}))
}};
k(document.body).bind("smallscreen",r);
k(document.body).bind("tablet",q);
if(k(document.body).hasClass("is-smallscreen")){r(null,true)
}if(k(document.body).hasClass("is-tablet")){q(null,true)
}});
k(function(){SitebuilderInfo.setupSearch();
SitebuilderInfo.setupWarwickLinks();
var w=k("#container");
var r=k("#edit-link");
if(r.length>0){var q=new NavigableList({linkElement:r,listElement:k("#edit-tool-menu"),containerElement:k("#edit-tool-container"),selectFunction:function(z){if(z.children("a.disabled").length==0){window.location=z.find("a").attr("href")
}else{return false
}},transition:"fade"});
var u=function(z,A){if(A){q.unregisterMouseListeners()
}else{q.registerMouseListeners()
}};
k(document.body).bind("smallscreen",u);
if(k(document.body).hasClass("is-smallscreen")){u(null,true)
}k(window).load(function(){var z=w.width()-(r.offset().left-w.offset().left)-r.width();
k("#edit-tool-container").css({right:z})
})
}if(k("#utility-bar").length>0){var s=function(z,A){if(A){k("#utility-bar").insertAfter(k("#page-footer-elements"))
}else{k("#utility-bar").prependTo(k("#utility-container"))
}};
k(document.body).bind("smallscreen",s);
if(k(document.body).hasClass("is-smallscreen")){s(null,true)
}}SitebuilderInfo.setupHeight();
if(!k.browser.msie||parseInt(k.browser.version)>=9){k(window).bind("resize orientationchange",SitebuilderInfo.setupHeight)
}if(k.browser.msie&&parseInt(k.browser.version)<=6){k.fx.off=true
}});
k(function(){k("#main-content img").load(function(){if(k(this).closest("a").length>0){return
}if(this.naturalWidth&&this.clientWidth&&this.naturalWidth>(this.clientWidth*1.33)){k(this).wrap(k("<a />").attr({href:this.src,rel:"lightbox"}));
initLightbox()
}})
});
k(window).load(function(){k("table").each(function(){var q=k(this);
if(q.width()>q.parent().width()){q.wrap(k('<div class="sb-wide-table-wrapper"></div>'))
}})
})
})(jQuery);
jQuery(function(a){new NavigableList({inputElement:a("#search-box"),queryURL:"/sitebuilder2/api/go/redirects.json?maxResults=6&prefix=",containerElement:a("#search-suggestions"),jsonCallback:function(f){this.options.containerElement.empty();
var b=a("<ul />");
var c=true;
a.each(f,function(k,l){var g=a("<li />");
if(c){g.addClass("odd")
}else{g.addClass("even")
}c=!c;
g.append(a('<span class="redirectpath" />').html(l.path));
g.append(a('<span class="redirectdescription" />').append(a('<span class="informal" />').html(l.description)));
b.append(g)
});
this.options.containerElement.append(b)
},selectFunction:function(b){window.location="/go/"+a(b).find(".redirectpath").html()+"?goSearchReferer="+encodeURIComponent(window.location)+"&goSearchQuery="+a("#search-box").val();
a("#search-container").submit(function(c){c.preventDefault();
return false
});
return false
},enabledFunction:function(){var b=a("#search-box").closest("form").find("li.active");
return !b.data("go-disabled")
},urlRewriterFunction:function(b){var c=a("#search-box").closest("form").find("li.active");
if(c.data("go-type")){b+="&type="+c.data("go-type")
}if(c.data("go-prefix")){b+="&urlPrefix="+c.data("go-prefix")
}return b+"&callback=?"
}})
});
(function(a){window.recalculateNavigation=function(){var b=0;
var f=0;
a("#navigation.horizontal ul#primary-navigation > li:visible").each(function(){b=Math.max(a(this).height(),b);
f+=a(this).width()
});
a("#navigation.horizontal ul#primary-navigation > li:visible").height(b);
var c=Math.ceil(f/a("#navigation.horizontal").width());
return b*c
};
window.repositionChildList=function(n){if(n.length==0){return
}n.width("auto").removeClass("column-nav").find("li").width("auto").css({"float":"none"});
var p=n.closest("li");
var q=p.position();
var r=q.top+p.height();
n.css({top:r});
var f=n.height();
var w=a("#container").height();
var l=a("#header").height();
var k=(a("body").scrollTop()>l)?0:l-a("body").scrollTop();
if(a(window).height()<w){w=a(window).height()
}if(f+r+k>w){var o=n.width();
var u=w-k-r;
var g=Math.ceil(f/u);
n.width(o*g).addClass("column-nav").find("li").width(o).css({"float":"left"})
}var c=p.position().left;
var b=n.width();
var s=a("#container").width();
if((c+b)>s){c=s-(b+2)
}n.css({left:c})
}
})(jQuery);
jQuery(function(o){var s=function(B,C){B.hover(function(){o(this).addClass(C)
},function(){o(this).removeClass(C)
})
};
var w=/msie|MSIE 6/.test(navigator.userAgent)||/msie|MSIE 7/.test(navigator.userAgent);
var n=(navigator.userAgent.match(/iPhone/i))||(navigator.userAgent.match(/iPod/i))||(navigator.userAgent.match(/iPad/i));
refixNavigation=function(D,C){if(C){o("#horizontal-nav-spacer").css("display","none")
}else{var B=o("#navigation").outerHeight(true);
if(n==null&&navigator.userAgent.match(/Android/i)==null&&w==false){o(window).scroll(r);
o(window).resize(r);
window.recalculateNavigation()
}}};
o(document.body).bind("smallscreen",refixNavigation);
if(o("#navigation.vertical").length>0){var A=o("#navigation").offset().top;
var q=o("#navigation").outerHeight(true);
var p=function(){var C=o(window).scrollTop();
var B=o("#navigation-wrapper").height()+A;
var D=o(window).height();
if(C<=A||D<q){o("#navigation").removeClass("fixed").removeClass("fixed-bottom")
}else{if(C>=A&&(C+q)<B){o("#navigation").removeClass("fixed-bottom").addClass("fixed")
}else{if((C+q)>B){o("#navigation").removeClass("fixed").addClass("fixed-bottom")
}}}};
if(n==null&&navigator.userAgent.match(/Android/i)==null&&w==false){o(window).scroll(p);
o(window).resize(p)
}o("#navigation.vertical .description.l1 span[data-href]").closest(".description").click(function(C){if(o(C.target).closest("span[data-href]").length>0){var B=o(C.target).closest("span[data-href]").data("href");
if(C.shiftKey||C.ctrlKey||C.which==2){window.open(B)
}else{window.location=B
}C.preventDefault();
C.stopPropagation();
return false
}});
o("#navigation.vertical div.rendered-link-content").each(function(B,C){if(C.scrollWidth&&C.offsetWidth&&C.scrollWidth>C.offsetWidth){C.title=o(C).text()
}})
}else{if(o("#navigation.horizontal").length>0){var z=o("#navigation.horizontal #secondary-navigation > li:not(.breadcrumb)");
if(z.length>0){var c=z.map(function(B,C){return o(C).position().left
});
var l=c.filter(function(B,C){return B!=0&&C===0
}).length>0;
if(l){var u=o('<ul class="children-list" />').hide();
z.appendTo(u);
s(z,"hover");
var b=o('<div class="link-content"><div class="title rendered-link-content"><span>Show all</span></div><div class="separator rendered-link-content"></div></div>').append(u);
var a=o('<li class="show-all-link rendered-link" />').append(b);
u.find(".rendered-link-content").removeClass("rendered-link-content");
o("#navigation.horizontal #secondary-navigation").append(a);
var g=a[0];
while(g.previousSibling&&g.previousSibling.nodeType===3){g.previousSibling.parentNode.removeChild(g.previousSibling)
}b.hoverIntent({timeout:400,over:function(){u.fadeIn("fast");
repositionChildList(u)
},out:function(){u.fadeOut("fast")
}})
}}o("#navigation.horizontal ul#primary-navigation > li > .link-content > a").closest("li").click(function(C){if(o(C.target).closest("span[data-href]").length>0){var B=o(C.target).closest("span[data-href]").data("href");
if(C.shiftKey||C.ctrlKey||C.which==2){window.open(B)
}else{window.location=B
}C.preventDefault();
C.stopPropagation();
return false
}if(o(C.target).closest("a").length>0){return true
}if(o(this).has(".link-content .title a")){var B=o(this).find(".link-content a").attr("href");
if(C.shiftKey||C.ctrlKey||C.which==2){window.open(B)
}else{window.location=B
}C.preventDefault();
C.stopPropagation();
return false
}});
var A=o("#navigation").offset().top;
var q=o("#navigation").outerHeight(true);
var r=function(){var D=o("#header").height();
var C=o(window).scrollTop();
var B=o("#navigation-wrapper").height()+D;
var E=o(window).height();
if(C>=D&&!o(document.body).hasClass("is-smallscreen")){o("#navigation").removeClass("fixed-bottom").addClass("fixed").removeClass("horizontal-nav-spacer");
if(o("#horizontal-nav-spacer").length==0){o("#navigation-wrapper").after('<div id="horizontal-nav-spacer" style="display:block; height:'+q+'px"></div>')
}}else{if(C<D){o("#navigation").removeClass("fixed");
o("#horizontal-nav-spacer").remove()
}}};
var w=/msie|MSIE 6/.test(navigator.userAgent)||/msie|MSIE 7/.test(navigator.userAgent);
if(n==null&&navigator.userAgent.match(/Android/i)==null&&w==false&&!o(document.body).hasClass("is-smallscreen")){o(window).scroll(r);
o(window).resize(r)
}var f=window.recalculateNavigation()+o("#navigation.horizontal ul#secondary-navigation").height();
anchors=o("#main-content a[name]:empty");
anchors.css({position:"relative",top:-(o("#navigation").height()+30)+"px",display:"block"});
if(window.location.hash&&o(window.location.hash).length){var k=window.location.hash.substr(1);
o(window.location.hash).append('<a id="'+k+'">&nbsp;</a>');
o('a[id="'+k+'"]').css({position:"relative",top:-(f+30)+"px",display:"block"});
window.scrollTo(0,o(window.location.hash).offset().top-(f+(f/3)));
o(window.location.hash).attr("id",k+"_")
}}}});
jQuery(function(f){var b=function(){};
if(!f(document.body).hasClass("site-root")){if(f("#navigation.vertical").length>0||f("#navigation.horizontal").length>0){var a;
if(f("#navigation.vertical").length>0){a=function(l){var n=f("#navigation li.current-page");
while(n.length>0){var g=f("<li />");
l.prepend(g);
if(n.hasClass("current-page")){g.addClass("current")
}var k=n.find("> a[data-page-url]").data("page-url");
var o=n.find("div.title").html().trim();
if(k){g.append(f("<a />").attr("href",k).html(o))
}else{g.html(o)
}g.prepend("&raquo; ");
n=n.parents("li.selected-section,li.breadcrumb")
}}
}else{a=function(l){var n=f("#secondary-navigation li.current-page");
while(n.length>0){var g=f("<li />");
l.prepend(g);
if(n.hasClass("current-page")){g.addClass("current")
}var k=n.find("a[data-page-url]").data("page-url");
var o=n.find("div.title").html().trim();
if(k){g.append(f("<a />").attr("href",k).html(o))
}else{g.html(o)
}g.find(".breadcrumb-icon").remove();
g.prepend("&raquo; ");
n=n.prev("li.breadcrumb")
}n=f("#navigation li.selected-section");
if(n.length>0){var g=f("<li />");
l.prepend(g);
if(n.hasClass("current-page")){g.addClass("current")
}var k=n.find("a[data-page-url]").data("page-url");
var o=n.find("div.title").html().trim();
if(k){g.append(f("<a />").attr("href",k).html(o))
}else{g.html(o)
}g.prepend("&raquo; ")
}}
}b=function(n,p){if(p){if(f(".alternate-breadcrumbs").length==0){var k=f("<ol />");
a(k);
var q=f("#current-site-header").find("a").attr("href");
var o="Home";
var l=f('#search-container .index-section li[data-index-section="website"][data-url-prefix]').data("index-title");
if(l){o=l
}else{var g=f("#current-site-header a,span").html();
if(g){o=g
}}k.prepend(f('<li class="home" />').append(f("<a />").attr("href",q).text(o)));
f("#content-wrapper").append(f('<div class="alternate-breadcrumbs bottom" />').append(k));
f("#content-wrapper").prepend(f('<div class="alternate-breadcrumbs top"><hr /></div>').prepend(k.clone()))
}}}
}f(document.body).bind("smallscreen",b);
if(f(document.body).hasClass("is-smallscreen")){b(null,true)
}}if(f("#navigation.vertical").length>0||f("#navigation.horizontal").length>0){var c;
if(f("#navigation.vertical").length>0){c=function(l,n){if(n){if(f("#alternate-navigation").length==0){var k=f('<select name="mobilesubnav" />');
var o=f('<option value="" />').html(f("#current-site-header a,#current-site-header span").html());
k.append(o);
if(f("#current-site-header a").length>0){o.val(f("#current-site-header a").attr("href"))
}var g=/l(\d+)\s?/;
f("#navigation.vertical li").each(function(s,p){$li=f(p);
var w=$li.find(".title.rendered-link-content").html().trim();
var r=$li.find("a[data-page-url]").data("page-url");
var q=g.exec($li[0].className);
if(q&&q[1]){var z=parseInt(q[1]);
for(var s=0;
s<z;
s++){w="- "+w
}}var u=f('<option value="">'+w+"</option>");
if($li.hasClass("current-page")){u.attr("selected","selected")
}else{if(r){u.attr("value",r)
}}k.append(u)
});
k.change(function(q){var p=k.val();
if(p){window.location=p
}});
f("#content-wrapper").append(f('<div id="alternate-navigation" />').append(f('<form method="post" action />').append(k)))
}}}
}else{c=function(k,l){if(l){if(f("#alternate-navigation").length==0){var g=f('<select name="mobilesubnav" />');
var n=f('<option value="" />').html(f("#current-site-header a,#current-site-header span").html());
g.append(n);
if(f("#current-site-header a").length>0){n.val(f("#current-site-header a").attr("href"))
}f("#primary-navigation > li").each(function(q,o){$li=f(o);
var s="- "+$li.find(".title.rendered-link-content").html().trim();
var p=$li.find("[data-page-url]").data("page-url");
var r=f('<option value="">'+s+"</option>");
if($li.hasClass("current-page")){r.attr("selected","selected")
}else{if(p){r.attr("value",p)
}}g.append(r);
if($li.hasClass("selected-section")){var u=1;
f("#secondary-navigation > li.breadcrumb").each(function(B,w){$li=f(w);
var z=$li.find(".title.rendered-link-content");
if(z.find("> span:not(.breadcrumb-icon)").length>0){z=z.find("> span:not(.breadcrumb-icon)")
}else{z=z.clone();
z.find(".breadcrumb-icon").remove()
}var D=z.html().trim();
var A=$li.find("[data-page-url]").data("page-url");
u++;
for(var B=0;
B<u;
B++){D="- "+D
}var C=f('<option value="">'+D+"</option>");
if($li.hasClass("current-page")){C.attr("selected","selected")
}else{if(A){C.attr("value",A)
}}g.append(C)
});
u++;
f("#secondary-navigation > li:not(.breadcrumb):not(.show-all-link), #secondary-navigation .show-all-link .children-list > li").each(function(A,w){$li=f(w);
var C=$li.find(".title").html().trim();
var z=$li.find("[data-page-url]").data("page-url");
for(var A=0;
A<u;
A++){C="- "+C
}var B=f('<option value="">'+C+"</option>");
if($li.hasClass("current-page")){B.attr("selected","selected")
}else{if(z){B.attr("value",z)
}}g.append(B)
})
}});
g.change(function(p){var o=g.val();
if(o){window.location=o
}});
f("#content-wrapper").append(f('<div id="alternate-navigation" />').append(f('<form method="post" action />').append(g)))
}}}
}f(document.body).bind("smallscreen",c);
if(f(document.body).hasClass("is-smallscreen")){c(null,true)
}}});
jQuery(function(b){var a=function(c,f){if(f&&b("#masthead .smallscreen-anchor-links").length==0){b("#masthead").append(b('<div class="smallscreen-anchor-links"><a href="'+window.location.pathname+'#alternate-search">Skip to navigation</a></div>'));
b("#footer > .content").prepend(b('<div class="smallscreen-anchor-links"><a href="'+window.location.pathname+'#masthead">Back to top</a></div>'))
}};
b(document.body).bind("smallscreen",a);
if(b(document.body).hasClass("is-smallscreen")){a(null,true)
}});
jQuery(function(k){var l=function(o,p){o.hover(function(){k(this).addClass(p)
},function(){k(this).removeClass(p)
})
};
if(k("#navigation.vertical").length>0){var g=k('<div id="navigation-children-popup"></div>');
var n;
k("#navigation.vertical").append(g).hoverIntent({timeout:600,over:function(){},out:function(){g.fadeOut("fast");
k("#navigation ul.l1 .hover").removeClass("hover")
}});
k("#navigation.vertical li .link-content").hoverIntent({timeout:400,over:function(){var q=k(this).closest("li");
if(q.hasClass("current-page")){return false
}var p=k(this).closest("[data-page-url]");
var o=p.data("page-url");
if(n){n.abort();
n=null
}n=k.ajax({method:"GET",url:"/sitebuilder2/api/ajax/id6/children.html",data:{page:SitebuilderInfo.url,context:o,ts:p.closest("li").data("lastmodified")},success:function(z,s,E){k("#navigation ul.l1 .hover").removeClass("hover");
n=null;
g.hide().html(z);
var A=g.find("li");
if(A.length>0){var r=k(window).height();
var D=p.find(".rendered-link-content").position();
var C=p.find(".rendered-link-content").offset();
var u=k(document).scrollTop();
var w=k(document).scrollTop()+r-5;
g.width("auto").find("li").width("auto").css({"float":"none"});
var B=function(){var F=g.height();
if(C.top+F<w){g.css({top:D.top})
}else{if(F<r){g.css({top:D.top-(C.top+F-w)})
}else{var I=g.find("li");
var J=g.width();
var H=J-I.css("paddingLeft").replace("px","")-I.css("paddingRight").replace("px","");
var G=Math.ceil(F/r);
g.width(J*G).find("li").width(H).css({"float":"left"});
B()
}}};
g.css({left:D.left+(k("#navigation").width()*0.5),top:D.top});
B();
g.hide().fadeIn("fast");
l(A,"hover");
p.addClass("hover")
}}})
},out:function(){}})
}else{if(k("#navigation.horizontal").length>0){var n;
var b=function(o){if(o.length==0){return
}var w=o.closest("li");
var u=w.position();
var s=u.top+w.height();
var r=u.left;
var p=o.width();
var q=k("#container").width();
if((r+p)>q){r=q-(p+2)
}o.css({top:s,left:r})
};
var a=function(){k(this).find(".children-list").fadeOut("fast")
};
var f=function(s,r){var p=k(this);
var q=p.find("a, .title span");
var o=q.data("page-url");
k("#navigation .children-list").filter(function(u){return k(this).closest("link-content")[0]!=p[0]
}).fadeOut("fast");
if(q.data("children-loaded")){p.find(".children-list").fadeIn("fast");
repositionChildList(p.find(".children-list"));
return
}if(n){n.abort();
n=null
}n=k.ajax({method:"GET",url:"/sitebuilder2/api/ajax/id6/children.html",data:{page:SitebuilderInfo.url,context:o,ts:p.closest("li").data("lastmodified")},success:function(w,A,z){q.data("children-loaded",true);
if(w){var u=k(w);
l(u.find("li"),"hover");
p.append(u.hide().fadeIn("fast"));
repositionChildList(u);
u.find(".link-content a, .title span").blur(function(){setTimeout(k.proxy(function(){var C=k(this).closest(".children-list");
var B=C.closest(".link-content");
if(C.find(".link-content a:focus,.title span:focus").length>0){return
}k.proxy(a,B[0])()
},this),50)
})
}else{if(r){window.location=o
}}}})
};
k("#navigation.horizontal .link-content a").focus(function(){console.log(k(this).closest(".link-content")[0]);
if(!k(this).parents().hasClass("show-all-link")){k.proxy(f,k(this).closest(".link-content")[0])()
}}).blur(function(){setTimeout(k.proxy(function(){if(k(this).closest(".link-content").find(".children-list").find(".link-content a:focus,.title span:focus").length>0){return
}k.proxy(a,k(this).closest(".link-content")[0])()
},this),50)
}).bind("touchstart",function(o){return c(this,o)
}).closest("li").filter(function(o){return k(this).closest(".show-all-link").length==0
}).hoverIntent({timeout:400,over:f,out:a});
function c(q,s){var r=k(q).closest(".link-content");
if(r.find(".children-list:visible").length>0){var p=k(q).data("page-url");
if(typeof p!="undefined"){window.location=p
}return true
}k.proxy(f,k(q).closest(".link-content")[0])(s,true);
s.preventDefault();
s.stopPropagation();
var o=function(u){if(k(u.target).closest(".children-list-link").length>0){return
}k.proxy(a,r[0])();
k(document.body).unbind("touchstart",o)
};
k(document.body).bind("touchstart",o);
return false
}}}});