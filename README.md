<script>
(function(){
"use strict";

var W=window,D=document,N=navigator;
var _raf=W.requestAnimationFrame.bind(W);
var _now=performance.now.bind(performance);
var _origDpr=W.devicePixelRatio||1;
var lastFrame=0;
var TARGET_MS=8;

var _m0="TWlub3dWbg==";
var _m1="Qk4gQ29kZSBNaW5vd1Zu";
var _m2=1907;
var _m3="data-minowvn";
var _m4="booster-v1";

function _atob(s){try{return decodeURIComponent(escape(atob(s)))}catch(e){return""}}

W[atob("X19NSU5PV1ZO")]={a:_atob(_m1),v:_m4,t:Date.now(),k:_m2};
if(D.documentElement)D.documentElement.setAttribute(_m3,_m4);

try{Object.defineProperty(W,"devicePixelRatio",{get:function(){return 1},configurable:true})}catch(e){}

W.requestAnimationFrame=function(cb){
  return _raf(function(t){
    if(t-lastFrame<TARGET_MS-0.5)return W.requestAnimationFrame(cb);
    lastFrame=t;
    try{cb(t)}catch(e){}
  });
};

var css=D.createElement("style");
css.setAttribute(_m3,"style-"+_m2);
css.textContent=[
"*{animation:none!important;transition:none!important;",
"filter:none!important;box-shadow:none!important;",
"backdrop-filter:none!important;text-shadow:none!important;",
"scroll-behavior:auto!important;",
"transform-style:flat!important;perspective:none!important;",
"backface-visibility:hidden!important;",
"contain:layout style paint!important;",
"content-visibility:auto!important}",
"html,body{overscroll-behavior:none!important;",
"overflow-anchor:none!important;",
"touch-action:manipulation!important;",
"-webkit-overflow-scrolling:touch!important;",
"-webkit-tap-highlight-color:transparent!important;",
"user-select:none!important;-webkit-user-select:none!important;",
"-webkit-touch-callout:none!important}",
"canvas,video{image-rendering:pixelated!important;",
"transform:translateZ(0)!important}",
"img{decoding:async!important;loading:lazy!important}",
"iframe[src*='ads'],iframe[src*='doubleclick'],",
"iframe[src*='googlesyndication'],",
"ins.adsbygoogle,div[id^='google_ads'],",
"div[class*='ad-container'],div[class*='ad-wrapper']",
"{display:none!important;pointer-events:none!important;",
"width:0!important;height:0!important}",
"button,a,input,select,textarea{",
"touch-action:manipulation!important;",
"-webkit-tap-highlight-color:transparent!important}",
"::-webkit-scrollbar{width:0!important;height:0!important}"
].join("");

function attachCss(){
  if(D.head)D.head.appendChild(css);
  else D.addEventListener("DOMContentLoaded",function(){D.head.appendChild(css)},{once:true});
}
attachCss();

function killAds(){
  try{
    var sel="iframe[src*='ads'],iframe[src*='doubleclick'],iframe[src*='googlesyndication'],ins.adsbygoogle,div[id^='google_ads'],div[class*='ad-container'],div[class*='ad-wrapper']";
    D.querySelectorAll(sel).forEach(function(el){try{el.remove()}catch(e){}});
  }catch(e){}
}
killAds();
setInterval(killAds,3000);

try{
  if(N.serviceWorker){
    N.serviceWorker.getRegistrations().then(function(rs){
      rs.forEach(function(r){try{r.unregister()}catch(e){}});
    }).catch(function(){});
  }
}catch(e){}

try{
  if("caches" in W){
    caches.keys().then(function(k){
      k.forEach(function(n){try{caches.delete(n)}catch(e){}});
    }).catch(function(){});
  }
}catch(e){}

function applyLight(root){
  if(!root||root.nodeType!==1)return;
  try{
    var s=getComputedStyle(root);
    if(s.animationName&&s.animationName!=="none")root.style.animation="none";
    if(s.transition&&s.transition!=="all 0s ease 0s")root.style.transition="none";
    if(s.filter&&s.filter!=="none")root.style.filter="none";
    if(s.boxShadow&&s.boxShadow!=="none")root.style.boxShadow="none";
    if(s.backdropFilter&&s.backdropFilter!=="none")root.style.backdropFilter="none";
  }catch(e){}
  if(root.tagName==="CANVAS"){
    try{root.getContext("2d",{alpha:false,desynchronized:true,powerPreference:"high-performance",lowLatency:true})}catch(e){}
  }
}

try{D.querySelectorAll("*").forEach(applyLight)}catch(e){}

try{
  var mo=new MutationObserver(function(muts){
    for(var i=0;i<muts.length;i++){
      var arr=muts[i].addedNodes;
      for(var j=0;j<arr.length;j++){
        var n=arr[j];
        if(n.nodeType!==1)continue;
        applyLight(n);
        if(n.querySelectorAll)n.querySelectorAll("*").forEach(applyLight);
      }
    }
  });
  if(D.documentElement)mo.observe(D.documentElement,{childList:true,subtree:true});
}catch(e){}

D.addEventListener("visibilitychange",function(){
  if(D.hidden){
    try{D.querySelectorAll("canvas,video").forEach(function(el){el.style.visibility="hidden"})}catch(e){}
    try{if(W.gc)W.gc()}catch(e){}
  }else{
    try{D.querySelectorAll("canvas,video").forEach(function(el){el.style.visibility="visible"})}catch(e){}
  }
});

W.addEventListener("blur",function(){
  try{D.querySelectorAll("canvas,video").forEach(function(el){el.style.visibility="hidden"})}catch(e){}
});
W.addEventListener("focus",function(){
  try{D.querySelectorAll("canvas,video").forEach(function(el){el.style.visibility="visible"})}catch(e){}
});

try{
  if("wakeLock" in N){
    var req=function(){N.wakeLock.request("screen").catch(function(){})};
    req();
    D.addEventListener("visibilitychange",function(){
      if(D.visibilityState==="visible")req();
    });
  }
}catch(e){}

try{
  if(D.documentElement){
    D.documentElement.style.setProperty("-webkit-tap-highlight-color","transparent");
    D.documentElement.style.setProperty("-webkit-touch-callout","none");
  }
}catch(e){}

setTimeout(function(){
  try{D.querySelectorAll("img").forEach(function(img){
    img.decoding="async";
    img.loading="lazy";
  })}catch(e){}
  try{D.querySelectorAll("iframe").forEach(function(fr){
    var s=fr.getAttribute("src")||"";
    if(/ads|doubleclick|googlesyndication|analytics/i.test(s))fr.remove();
  })}catch(e){}
},800);

try{
  var _s="%c";
  console.log(_s+"\u004d\u0069\u006e\u006f\u0077\u0056\u006e","color:#0f0;font-weight:bold");
}catch(e){}

})();
</script>
