import{k as Ae,d as ft,aM as ht,W as me,h as R,P as he,b as Be,z as o,ac as Et,a1 as Ht,a2 as Rt,a3 as Ze,a4 as pe,m as ce,ao as Ge,aK as zt,av as Xe,e as fe,aN as ne,l as Se,o as Bt,am as Ve,_ as jt,aI as Ke,aO as mt,aP as Wt,aQ as Gt,aR as Kt,g as gt,j as vt,aS as Ne,a6 as bt,aE as Ie,aT as Ut,aH as Yt,i as Me,t as E,S as Zt,aU as Xt,aL as Vt,aF as Qt,aV as Jt,aW as yt,N as kt,aX as $t,aY as es,a8 as ts,aZ as ss,a_ as as,a$ as is,b0 as ns,b1 as ls,b2 as rs,b3 as os,b4 as ds,b5 as cs,b6 as wt,w as _t,a5 as xt,a0 as St,b7 as ps,p as ge,c as V,s as G,I as N,r as Q,a as ve,f as Z,O as Te,J as us,K as be,G as De,v as Qe}from"./DpnQpA5O.js";import{w as fs}from"./BY_ESf0b.js";import{B as hs}from"./CcRCixzS.js";import{b as Je,d as ms,e as F,a as A,c as J,f as Tt}from"./e4tZFTDb.js";import{p as Y,i as j,_ as gs,b as $e}from"./DJy3iOxA.js";import{i as vs,c as bs,d as ys,n as ks,a as ws,s as Dt}from"./CUkO1pZw.js";function re(e,s){return s}function _s(e,s,t){for(var a=[],i=s.length,n,l=s.length,d=0;d<i;d++){let h=s[d];vt(h,()=>{if(n){if(n.pending.delete(h),n.done.add(h),n.pending.size===0){var m=e.outrogroups;je(Ke(n.done)),m.delete(n),m.size===0&&(e.outrogroups=null)}}else l-=1},!1)}if(l===0){var r=a.length===0&&t!==null;if(r){var p=t,c=p.parentNode;Yt(c),c.append(p),e.items.clear()}je(s,!r)}else n={pending:new Set(s),done:new Set},(e.outrogroups??=new Set).add(n)}function je(e,s=!0){for(var t=0;t<e.length;t++)Me(e[t],s)}var et;function oe(e,s,t,a,i,n=null){var l=e,d=new Map,r=(s&ht)!==0;if(r){var p=e;l=R?me(he(p)):p.appendChild(Ae())}R&&Be();var c=null,h=Et(()=>{var f=t();return mt(f)?f:f==null?[]:Ke(f)}),m,x=!0;function T(){u.fallback=c,xs(u,m,l,s,a),c!==null&&(m.length===0?(c.f&ne)===0?gt(c):(c.f^=ne,we(c,null,l)):vt(c,()=>{c=null}))}var _=ft(()=>{m=o(h);var f=m.length;let w=!1;if(R){var S=Ht(l)===Rt;S!==(f===0)&&(l=Ze(),me(l),pe(!1),w=!0)}for(var b=new Set,k=fe,v=Bt(),y=0;y<f;y+=1){R&&ce.nodeType===Ge&&ce.data===zt&&(l=ce,w=!0,pe(!1));var D=m[y],H=a(D,y),C=x?null:d.get(H);C?(C.v&&Xe(C.v,D),C.i&&Xe(C.i,y),v&&k.skipped_effects.delete(C.e)):(C=Ss(d,x?l:et??=Ae(),D,H,y,i,s,t),x||(C.e.f|=ne),d.set(H,C)),b.add(H)}if(f===0&&n&&!c&&(x?c=Se(()=>n(l)):(c=Se(()=>n(et??=Ae())),c.f|=ne)),R&&f>0&&me(Ze()),!x)if(v){for(const[X,te]of d)b.has(X)||k.skipped_effects.add(te.e);k.oncommit(T),k.ondiscard(()=>{})}else T();w&&pe(!0),o(h)}),u={effect:_,items:d,outrogroups:null,fallback:c};x=!1,R&&(l=ce)}function xs(e,s,t,a,i){var n=(a&Ut)!==0,l=s.length,d=e.items,r=e.effect.first,p,c=null,h,m=[],x=[],T,_,u,f;if(n)for(f=0;f<l;f+=1)T=s[f],_=i(T,f),u=d.get(_).e,(u.f&ne)===0&&(u.nodes?.a?.measure(),(h??=new Set).add(u));for(f=0;f<l;f+=1){if(T=s[f],_=i(T,f),u=d.get(_).e,e.outrogroups!==null)for(const C of e.outrogroups)C.pending.delete(u),C.done.delete(u);if((u.f&ne)!==0)if(u.f^=ne,u===r)we(u,null,t);else{var w=c?c.next:r;u===e.effect.last&&(e.effect.last=u.prev),u.prev&&(u.prev.next=u.next),u.next&&(u.next.prev=u.prev),le(e,c,u),le(e,u,w),we(u,w,t),c=u,m=[],x=[],r=c.next;continue}if((u.f&Ne)!==0&&(gt(u),n&&(u.nodes?.a?.unfix(),(h??=new Set).delete(u))),u!==r){if(p!==void 0&&p.has(u)){if(m.length<x.length){var S=x[0],b;c=S.prev;var k=m[0],v=m[m.length-1];for(b=0;b<m.length;b+=1)we(m[b],S,t);for(b=0;b<x.length;b+=1)p.delete(x[b]);le(e,k.prev,v.next),le(e,c,k),le(e,v,S),r=S,c=v,f-=1,m=[],x=[]}else p.delete(u),we(u,r,t),le(e,u.prev,u.next),le(e,u,c===null?e.effect.first:c.next),le(e,c,u),c=u;continue}for(m=[],x=[];r!==null&&r!==u;)(p??=new Set).add(r),x.push(r),r=r.next;if(r===null)continue}(u.f&ne)===0&&m.push(u),c=u,r=u.next}if(e.outrogroups!==null){for(const C of e.outrogroups)C.pending.size===0&&(je(Ke(C.done)),e.outrogroups?.delete(C));e.outrogroups.size===0&&(e.outrogroups=null)}if(r!==null||p!==void 0){var y=[];if(p!==void 0)for(u of p)(u.f&Ne)===0&&y.push(u);for(;r!==null;)(r.f&Ne)===0&&r!==e.fallback&&y.push(r),r=r.next;var D=y.length;if(D>0){var H=(a&ht)!==0&&l===0?t:null;if(n){for(f=0;f<D;f+=1)y[f].nodes?.a?.measure();for(f=0;f<D;f+=1)y[f].nodes?.a?.fix()}_s(e,y,H)}}n&&bt(()=>{if(h!==void 0)for(u of h)u.nodes?.a?.apply()})}function Ss(e,s,t,a,i,n,l,d){var r=(l&Wt)!==0?(l&Gt)===0?jt(t,!1,!1):Ve(t):null,p=(l&Kt)!==0?Ve(i):null;return{v:r,i:p,e:Se(()=>(n(s,r??t,p??i,d),()=>{e.delete(a)}))}}function we(e,s,t){if(e.nodes)for(var a=e.nodes.start,i=e.nodes.end,n=s&&(s.f&ne)===0?s.nodes.start:t;a!==null;){var l=Ie(a);if(n.before(a),a===i)return;a=l}}function le(e,s,t){s===null?e.effect.first=t:s.next=t,t===null?e.effect.last=s:t.prev=s}function Ct(e,s,t=!1,a=!1,i=!1){var n=e,l="";E(()=>{var d=Zt;if(l===(l=s()??"")){R&&Be();return}if(d.nodes!==null&&(Xt(d.nodes.start,d.nodes.end),d.nodes=null),l!==""){if(R){ce.data;for(var r=Be(),p=r;r!==null&&(r.nodeType!==Ge||r.data!=="");)p=r,r=Ie(r);if(r===null)throw Vt(),Qt;Je(ce,p),n=me(r);return}var c=l+"";t?c=`<svg>${c}</svg>`:a&&(c=`<math>${c}</math>`);var h=ms(c);if((t||a)&&(h=he(h)),Je(he(h),h.lastChild),t||a)for(;he(h);)n.before(he(h));else n.before(h)}})}function Zi(e,s){let t=null,a=R;var i;if(R){t=ce;for(var n=he(document.head);n!==null&&(n.nodeType!==Ge||n.data!==e);)n=Ie(n);if(n===null)pe(!1);else{var l=Ie(n);n.remove(),me(l)}}R||(i=document.head.appendChild(Ae()));try{ft(()=>s(i),Jt)}finally{a&&(pe(!0),me(t))}}function Ts(e,s){var t=void 0,a;yt(()=>{t!==(t=s())&&(a&&(Me(a),a=null),t&&(a=Se(()=>{kt(()=>t(e))})))})}function qt(e){var s,t,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(s=0;s<i;s++)e[s]&&(t=qt(e[s]))&&(a&&(a+=" "),a+=t)}else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function Ds(){for(var e,s,t=0,a="",i=arguments.length;t<i;t++)(e=arguments[t])&&(s=qt(e))&&(a&&(a+=" "),a+=s);return a}function Cs(e){return typeof e=="object"?Ds(e):e??""}const tt=[...` 	
\r\f \v\uFEFF`];function qs(e,s,t){var a=e==null?"":""+e;if(s&&(a=a?a+" "+s:s),t){for(var i in t)if(t[i])a=a?a+" "+i:i;else if(a.length)for(var n=i.length,l=0;(l=a.indexOf(i,l))>=0;){var d=l+n;(l===0||tt.includes(a[l-1]))&&(d===a.length||tt.includes(a[d]))?a=(l===0?"":a.substring(0,l))+a.substring(d+1):l=d}}return a===""?null:a}function st(e,s=!1){var t=s?" !important;":";",a="";for(var i in e){var n=e[i];n!=null&&n!==""&&(a+=" "+i+": "+n+t)}return a}function Oe(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function As(e,s){if(s){var t="",a,i;if(Array.isArray(s)?(a=s[0],i=s[1]):a=s,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var n=!1,l=0,d=!1,r=[];a&&r.push(...Object.keys(a).map(Oe)),i&&r.push(...Object.keys(i).map(Oe));var p=0,c=-1;const _=e.length;for(var h=0;h<_;h++){var m=e[h];if(d?m==="/"&&e[h-1]==="*"&&(d=!1):n?n===m&&(n=!1):m==="/"&&e[h+1]==="*"?d=!0:m==='"'||m==="'"?n=m:m==="("?l++:m===")"&&l--,!d&&n===!1&&l===0){if(m===":"&&c===-1)c=h;else if(m===";"||h===_-1){if(c!==-1){var x=Oe(e.substring(p,c).trim());if(!r.includes(x)){m!==";"&&h++;var T=e.substring(p,h).trim();t+=" "+T+";"}}p=h+1,c=-1}}}}return a&&(t+=st(a)),i&&(t+=st(i,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function Is(e,s,t,a,i,n){var l=e.__className;if(R||l!==t||l===void 0){var d=qs(t,a,n);(!R||d!==e.getAttribute("class"))&&(d==null?e.removeAttribute("class"):s?e.className=d:e.setAttribute("class",d)),e.__className=t}else if(n&&i!==n)for(var r in n){var p=!!n[r];(i==null||p!==!!i[r])&&e.classList.toggle(r,p)}return n}function Fe(e,s={},t,a){for(var i in t){var n=t[i];s[i]!==n&&(t[i]==null?e.style.removeProperty(i):e.style.setProperty(i,n,a))}}function At(e,s,t,a){var i=e.__style;if(R||i!==s){var n=As(s,a);(!R||n!==e.getAttribute("style"))&&(n==null?e.removeAttribute("style"):e.style.cssText=n),e.__style=s}else a&&(Array.isArray(a)?(Fe(e,t?.[0],a[0]),Fe(e,t?.[1],a[1],"important")):Fe(e,t,a));return a}function We(e,s,t=!1){if(e.multiple){if(s==null)return;if(!mt(s))return $t();for(var a of e.options)a.selected=s.includes(at(a));return}for(a of e.options){var i=at(a);if(es(i,s)){a.selected=!0;return}}(!t||s!==void 0)&&(e.selectedIndex=-1)}function Ms(e){var s=new MutationObserver(()=>{We(e,e.__value)});s.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ts(()=>{s.disconnect()})}function at(e){return"__value"in e?e.__value:e.value}const ye=Symbol("class"),ke=Symbol("style"),It=Symbol("is custom element"),Mt=Symbol("is html");function Ps(e){if(R){var s=!1,t=()=>{if(!s){if(s=!0,e.hasAttribute("value")){var a=e.value;g(e,"value",null),e.value=a}if(e.hasAttribute("checked")){var i=e.checked;g(e,"checked",null),e.checked=i}}};e.__on_r=t,bt(t),ds()}}function Xi(e,s){var t=Pe(e);t.value===(t.value=s??void 0)||e.value===s&&(s!==0||e.nodeName!=="PROGRESS")||(e.value=s??"")}function Vi(e,s){var t=Pe(e);t.checked!==(t.checked=s??void 0)&&(e.checked=s)}function Ls(e,s){s?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function g(e,s,t,a){var i=Pe(e);R&&(i[s]=e.getAttribute(s),s==="src"||s==="srcset"||s==="href"&&e.nodeName==="LINK")||i[s]!==(i[s]=t)&&(s==="loading"&&(e[cs]=t),t==null?e.removeAttribute(s):typeof t!="string"&&Pt(e).includes(s)?e[s]=t:e.setAttribute(s,t))}function Ns(e,s,t,a,i=!1,n=!1){if(R&&i&&e.tagName==="INPUT"){var l=e,d=l.type==="checkbox"?"defaultChecked":"defaultValue";d in t||Ps(l)}var r=Pe(e),p=r[It],c=!r[Mt];let h=R&&p;h&&pe(!1);var m=s||{},x=e.tagName==="OPTION";for(var T in s)T in t||(t[T]=null);t.class?t.class=Cs(t.class):(a||t[ye])&&(t.class=null),t[ke]&&(t.style??=null);var _=Pt(e);for(const v in t){let y=t[v];if(x&&v==="value"&&y==null){e.value=e.__value="",m[v]=y;continue}if(v==="class"){var u=e.namespaceURI==="http://www.w3.org/1999/xhtml";Is(e,u,y,a,s?.[ye],t[ye]),m[v]=y,m[ye]=t[ye];continue}if(v==="style"){At(e,y,s?.[ke],t[ke]),m[v]=y,m[ke]=t[ke];continue}var f=m[v];if(!(y===f&&!(y===void 0&&e.hasAttribute(v)))){m[v]=y;var w=v[0]+v[1];if(w!=="$$")if(w==="on"){const D={},H="$$"+v;let C=v.slice(2);var S=ws(C);if(vs(C)&&(C=C.slice(0,-7),D.capture=!0),!S&&f){if(y!=null)continue;e.removeEventListener(C,m[H],D),m[H]=null}if(y!=null)if(S)e[`__${C}`]=y,ys([C]);else{let X=function(te){m[v].call(this,te)};m[H]=bs(C,e,X,D)}else S&&(e[`__${C}`]=void 0)}else if(v==="style")g(e,v,y);else if(v==="autofocus")rs(e,!!y);else if(!p&&(v==="__value"||v==="value"&&y!=null))e.value=e.__value=y;else if(v==="selected"&&x)Ls(e,y);else{var b=v;c||(b=ks(b));var k=b==="defaultValue"||b==="defaultChecked";if(y==null&&!p&&!k)if(r[v]=null,b==="value"||b==="checked"){let D=e;const H=s===void 0;if(b==="value"){let C=D.defaultValue;D.removeAttribute(b),D.defaultValue=C,D.value=D.__value=H?C:null}else{let C=D.defaultChecked;D.removeAttribute(b),D.defaultChecked=C,D.checked=H?C:!1}}else e.removeAttribute(v);else k||_.includes(b)&&(p||typeof y!="string")?(e[b]=y,b in r&&(r[b]=os)):typeof y!="function"&&g(e,b,y)}}}return h&&pe(!0),m}function Qi(e,s,t=[],a=[],i=[],n,l=!1,d=!1){ss(i,t,a,r=>{var p=void 0,c={},h=e.nodeName==="SELECT",m=!1;if(yt(()=>{var T=s(...r.map(o)),_=Ns(e,p,T,n,l,d);m&&h&&"value"in T&&We(e,T.value);for(let f of Object.getOwnPropertySymbols(c))T[f]||Me(c[f]);for(let f of Object.getOwnPropertySymbols(T)){var u=T[f];f.description===ns&&(!p||u!==p[f])&&(c[f]&&Me(c[f]),c[f]=Se(()=>Ts(e,()=>u))),_[f]=u}p=_}),h){var x=e;kt(()=>{We(x,p.value,!0),Ms(x)})}m=!0})}function Pe(e){return e.__attributes??={[It]:e.nodeName.includes("-"),[Mt]:e.namespaceURI===as}}var it=new Map;function Pt(e){var s=e.getAttribute("is")||e.nodeName,t=it.get(s);if(t)return t;it.set(s,t=[]);for(var a,i=e,n=Element.prototype;n!==i;){a=ls(i);for(var l in a)a[l].set&&t.push(l);i=is(i)}return t}function Ji(e,s,t=s){var a=new WeakSet;wt(e,"input",async i=>{var n=i?e.defaultValue:e.value;if(n=Ee(e)?He(n):n,t(n),fe!==null&&a.add(fe),await St(),n!==(n=s())){var l=e.selectionStart,d=e.selectionEnd,r=e.value.length;if(e.value=n??"",d!==null){var p=e.value.length;l===d&&d===r&&p>r?(e.selectionStart=p,e.selectionEnd=p):(e.selectionStart=l,e.selectionEnd=Math.min(d,p))}}}),(R&&e.defaultValue!==e.value||_t(s)==null&&e.value)&&(t(Ee(e)?He(e.value):e.value),fe!==null&&a.add(fe)),xt(()=>{var i=s();if(e===document.activeElement){var n=ps??fe;if(a.has(n))return}Ee(e)&&i===He(e.value)||e.type==="date"&&!i&&!e.value||i!==e.value&&(e.value=i??"")})}function $i(e,s,t=s){wt(e,"change",a=>{var i=a?e.defaultChecked:e.checked;t(i)}),(R&&e.defaultChecked!==e.checked||_t(s)==null)&&t(e.checked),xt(()=>{var a=s();e.checked=!!a})}function Ee(e){var s=e.type;return s==="number"||s==="range"}function He(e){return e===""?null:+e}const Os=hs.accent,nt={default:"#969696"},en=[Os,"#E57373","#FFB74D","#FFF176","#81C784","#4DB6AC","#4DD0E1","#64B5F6","#BA68C8","#F06292","#90A4AE","#FFFFFF"];function Fs(e){const{name:s,category:t,description:a=`${s} block`,blockClass:i,importPath:n,inputs:l=["in 0"],outputs:d=["out 0"],minInputs:r=1,minOutputs:p=1,maxInputs:c=null,maxOutputs:h=null,syncPorts:m,shape:x,params:T={}}=e,_=Object.entries(T).map(([u,f])=>({name:u,type:f.type,default:f.default,description:f.description,min:f.min,max:f.max,options:f.options}));return{type:i,name:s,category:t,description:a,blockClass:i,importPath:n,shape:x,ports:{inputs:l.map(u=>({name:u,direction:"input",color:nt.default})),outputs:d.map(u=>({name:u,direction:"output",color:nt.default})),minInputs:r,minOutputs:p,maxInputs:c,maxOutputs:h,syncPorts:m},params:_}}const Es={Constant:{blockClass:"Constant",description:"Produces a constant output signal (SISO).",docstringHtml:`<p>Produces a constant output signal (SISO).</p>
<div class="math">
\\begin{equation*}
y(t) = const.
\\end{equation*}
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>value <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>constant defining block output</dd>
</dl>
</div>
`,params:{value:{type:"integer",default:"1",description:"constant defining block output"}},inputs:[],outputs:["out"]},Source:{blockClass:"Source",description:"Source that produces an arbitrary time dependent output defined by `func` (callable).",docstringHtml:`<p>Source that produces an arbitrary time dependent output defined by <cite>func</cite> (callable).</p>
<div class="math">
\\begin{equation*}
y(t) = \\mathrm{func}(t)
\\end{equation*}
</div>
<div class="section" id="note">
<h3>Note</h3>
<p>This block is purely algebraic and its internal function (<cite>func</cite>) will
be called multiple times per timestep, each time when <cite>Simulation._update(t)</cite>
is called in the global simulation loop.</p>
</div>
<div class="section" id="example">
<h3>Example</h3>
<p>For example a ramp:</p>
<pre class="code python literal-block">
from pathsim.blocks import Source

src = Source(lambda t : t)
</pre>
<p>or a simple sinusoid with some frequency:</p>
<pre class="code python literal-block">
import numpy as np
from pathsim.blocks import Source

#some parameter
omega = 100

#the function that gets evaluated
def f(t):
    return np.sin(omega * t)

src = Source(f)
</pre>
<p>Because the <cite>Source</cite> block only has a single argument, it can be
used to decorate a function and make it a <cite>PathSim</cite> block. This might
be handy in some cases to keep definitions concise and localized
in the code:</p>
<pre class="code python literal-block">
import numpy as np
from pathsim.blocks import Source

#does the same as the definition above

&#64;Source
def src(t):
    omega = 100
    return np.sin(omega * t)

#'src' is now a PathSim block
</pre>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>func <span class="classifier-delimiter">:</span> <span class="classifier">callable</span></dt>
<dd>function defining time dependent block output</dd>
</dl>
</div>
`,params:{func:{type:"callable",default:null,description:"function defining time dependent block output"}},inputs:[],outputs:["out"]},SinusoidalSource:{blockClass:"SinusoidalSource",description:"Source block that generates a sinusoid wave",docstringHtml:`<p>Source block that generates a sinusoid wave</p>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>frequency <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>frequency of the sinusoid</dd>
<dt>amplitude <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>amplitude of the sinusoid</dd>
<dt>phase <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>phase of the sinusoid</dd>
</dl>
</div>
`,params:{frequency:{type:"integer",default:"1",description:"frequency of the sinusoid"},amplitude:{type:"integer",default:"1",description:"amplitude of the sinusoid"},phase:{type:"integer",default:"0",description:"phase of the sinusoid"}},inputs:[],outputs:["out"]},StepSource:{blockClass:"StepSource",description:"Discrete time unit step (or multi step) source block.",docstringHtml:`<p>Discrete time unit step (or multi step) source block.</p>
<p>Utilizes a scheduled event to set the block output
to the specified output levels at the defined event times.</p>
<p>The arguments can be vectorial and in that case, the output is set to the
amplitude that corresponds to the defined delay like a zero-order-hold stage.
This functionality enables adding external or time series measurement data
into the system.</p>
<div class="section" id="examples">
<h3>Examples</h3>
<p>This is how to use the source as a unit step source:</p>
<pre class="code python literal-block">
from pathsim.blocks import StepSource

#default, starts at 0, jumps to 1
stp = StepSource()
</pre>
<p>And this is how to configure it with multiple consecutive steps:</p>
<pre class="code python literal-block">
from pathsim.blocks import StepSource

#starts at 0, jumps to 1 at 1, jumps to -1 at 2 and jumps back to 0 at 3
stp = StepSource(amplitude=[1, -1, 0], tau=[1, 2, 3])
</pre>
<p>Similarly implementing measured time series data via zoh:</p>
<pre class="code python literal-block">
import numpy as np
from pathsim.blocks import StepSource

#some random time series arrays
times, data = np.linspace(0, 100, 1000), np.random.rand(1000)

#pass them to the block
stp = StepSource(amplitude=data, tau=times)
</pre>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>amplitude <span class="classifier-delimiter">:</span> <span class="classifier">float | list[float]</span></dt>
<dd>amplitude of the step signal, or amplitudes / output
levels of the multiple steps</dd>
<dt>tau <span class="classifier-delimiter">:</span> <span class="classifier">float | list[float]</span></dt>
<dd>delay of the step, or delays of the different steps</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>Evt <span class="classifier-delimiter">:</span> <span class="classifier">ScheduleList</span></dt>
<dd>internal scheduled event directly accessible</dd>
<dt>events <span class="classifier-delimiter">:</span> <span class="classifier">list[ScheduleList]</span></dt>
<dd>list of interna events</dd>
</dl>
</div>
`,params:{amplitude:{type:"integer",default:"1",description:"amplitude of the step signal, or amplitudes / output levels of the multiple steps"},tau:{type:"number",default:"0.0",description:"delay of the step, or delays of the different steps"}},inputs:[],outputs:["out"]},PulseSource:{blockClass:"PulseSource",description:"Generates a periodic pulse waveform with defined rise and fall times.",docstringHtml:`<p>Generates a periodic pulse waveform with defined rise and fall times.</p>
<p>Scheduled events trigger phase changes (low, rising, high, falling),
and the <cite>update</cite> method calculates the output value based on the
current phase, performing linear interpolation during rise and fall.</p>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>amplitude <span class="classifier-delimiter">:</span> <span class="classifier">float, optional</span></dt>
<dd>Peak amplitude of the pulse. Default is 1.0.</dd>
<dt>T <span class="classifier-delimiter">:</span> <span class="classifier">float, optional</span></dt>
<dd>Period of the pulse train. Must be positive. Default is 1.0.</dd>
<dt>t_rise <span class="classifier-delimiter">:</span> <span class="classifier">float, optional</span></dt>
<dd>Duration of the rising edge. Default is 0.0.</dd>
<dt>t_fall <span class="classifier-delimiter">:</span> <span class="classifier">float, optional</span></dt>
<dd>Duration of the falling edge. Default is 0.0.</dd>
<dt>tau <span class="classifier-delimiter">:</span> <span class="classifier">float, optional</span></dt>
<dd>Initial delay before the first pulse cycle begins. Default is 0.0.</dd>
<dt>duty <span class="classifier-delimiter">:</span> <span class="classifier">float, optional</span></dt>
<dd>Duty cycle, ratio of the pulse ON duration (plateau time only)
to the total period T (must be between 0 and 1). Default is 0.5.
The high plateau duration is <cite>T * duty</cite>.</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>events <span class="classifier-delimiter">:</span> <span class="classifier">list[Schedule]</span></dt>
<dd>Internal scheduled events triggering phase transitions.</dd>
<dt>_phase <span class="classifier-delimiter">:</span> <span class="classifier">str</span></dt>
<dd>Current phase of the pulse ('low', 'rising', 'high', 'falling').</dd>
<dt>_phase_start_time <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>Simulation time when the current phase began.</dd>
</dl>
</div>
`,params:{amplitude:{type:"number",default:"1.0",description:"Peak amplitude of the pulse. Default is 1.0."},T:{type:"number",default:"1.0",description:"Period of the pulse train. Must be positive. Default is 1.0."},t_rise:{type:"number",default:"0.0",description:"Duration of the rising edge. Default is 0.0."},t_fall:{type:"number",default:"0.0",description:"Duration of the falling edge. Default is 0.0."},tau:{type:"number",default:"0.0",description:"Initial delay before the first pulse cycle begins. Default is 0.0."},duty:{type:"number",default:"0.5",description:"Duty cycle, ratio of the pulse ON duration (plateau time only) to the total period T (must be between 0 and 1). Default is 0.5. The high plateau duration is `T * duty`."}},inputs:[],outputs:["out"]},TriangleWaveSource:{blockClass:"TriangleWaveSource",description:"Source block that generates an analog triangle wave",docstringHtml:`<p>Source block that generates an analog triangle wave</p>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>frequency <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>frequency of the triangle wave</dd>
<dt>amplitude <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>amplitude of the triangle wave</dd>
<dt>phase <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>phase of the triangle wave</dd>
</dl>
</div>
`,params:{frequency:{type:"integer",default:"1",description:"frequency of the triangle wave"},amplitude:{type:"integer",default:"1",description:"amplitude of the triangle wave"},phase:{type:"integer",default:"0",description:"phase of the triangle wave"}},inputs:[],outputs:["out"]},SquareWaveSource:{blockClass:"SquareWaveSource",description:"Discrete time square wave source.",docstringHtml:`<p>Discrete time square wave source.</p>
<p>Utilizes scheduled events to periodically set
the block output at discrete times.</p>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>amplitude <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>amplitude of the square wave signal</dd>
<dt>frequency <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>frequency of the square wave signal</dd>
<dt>phase <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>phase of the square wave signal</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>events <span class="classifier-delimiter">:</span> <span class="classifier">list[Schedule]</span></dt>
<dd>internal scheduled events</dd>
</dl>
</div>
`,params:{amplitude:{type:"integer",default:"1",description:"amplitude of the square wave signal"},frequency:{type:"integer",default:"1",description:"frequency of the square wave signal"},phase:{type:"integer",default:"0",description:"phase of the square wave signal"}},inputs:[],outputs:["out"]},GaussianPulseSource:{blockClass:"GaussianPulseSource",description:"Source block that generates a gaussian pulse",docstringHtml:`<p>Source block that generates a gaussian pulse</p>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>amplitude <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>amplitude of the gaussian pulse</dd>
<dt>f_max <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>maximum frequency component of the gaussian pulse (steepness)</dd>
<dt>tau <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>time delay of the gaussian pulse</dd>
</dl>
</div>
`,params:{amplitude:{type:"integer",default:"1",description:"amplitude of the gaussian pulse"},f_max:{type:"number",default:"1000.0",description:"maximum frequency component of the gaussian pulse (steepness)"},tau:{type:"number",default:"0.0",description:"time delay of the gaussian pulse"}},inputs:[],outputs:["out"]},ChirpPhaseNoiseSource:{blockClass:"ChirpPhaseNoiseSource",description:"Chirp source, sinusoid with frequency ramp up and ramp down, plus phase noise.",docstringHtml:`<p>Chirp source, sinusoid with frequency ramp up and ramp down, plus phase noise.</p>
<p>This works by using a time dependent triangle wave for the frequency
and integrating it with a numerical integration engine to get a
continuous phase. This phase is then used to evaluate a sinusoid.</p>
<p>Additionally the chirp source can have white and cumulative phase noise.
Mathematically it looks like this for the contributions to the phase from
the triangular wave:</p>
<div class="math">
\\begin{equation*}
\\varphi_t(t) = \\int_0^t \\mathrm{tri}_{f_0, B, T}(\\tau) \\, d\\tau
\\end{equation*}
</div>
<p>And from the white (w) and cumulative (c) noise:</p>
<div class="math">
\\begin{equation*}
\\varphi_n(t) = \\sigma_w \\, n_w(t) + \\sigma_c \\int_0^t n_c(\\tau) \\, d\\tau
\\end{equation*}
</div>
<p>The phase contributions are then used to evaluate a sinusoid to get the final chirp signal:</p>
<div class="math">
\\begin{equation*}
y(t) = A \\sin(\\varphi_t(t) + \\varphi_n(t) + \\varphi_0)
\\end{equation*}
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>amplitude <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>amplitude of the chirp signal</dd>
<dt>f0 <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>start frequency of the chirp signal</dd>
<dt>BW <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>bandwidth of the frequency ramp of the chirp signal</dd>
<dt>T <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>period of the frequency ramp of the chirp signal</dd>
<dt>phase <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>phase of sinusoid (initial, radians)</dd>
<dt>sig_cum <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>weight for cumulative phase noise contribution</dd>
<dt>sig_white <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>weight for white phase noise contribution</dd>
<dt>sampling_period <span class="classifier-delimiter">:</span> <span class="classifier">float, None</span></dt>
<dd>time between phase noise samples. If None,
noise is sampled every timestep (default is 0.1)</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>noise_1 <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>internal noise value for white phase noise</dd>
<dt>noise_2 <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>internal noise value for cumulative phase noise</dd>
<dt>events <span class="classifier-delimiter">:</span> <span class="classifier">list[Schedule]</span></dt>
<dd>scheduled event for periodic sampling (only if sampling_period is set)</dd>
</dl>
</div>
`,params:{amplitude:{type:"integer",default:"1",description:"amplitude of the chirp signal"},f0:{type:"integer",default:"1",description:"start frequency of the chirp signal"},BW:{type:"integer",default:"1",description:"bandwidth of the frequency ramp of the chirp signal"},T:{type:"integer",default:"1",description:"period of the frequency ramp of the chirp signal"},phase:{type:"integer",default:"0",description:"phase of sinusoid (initial, radians)"},sig_cum:{type:"integer",default:"0",description:"weight for cumulative phase noise contribution"},sig_white:{type:"integer",default:"0",description:"weight for white phase noise contribution"},sampling_period:{type:"number",default:"0.1",description:"time between phase noise samples. If None, noise is sampled every timestep (default is 0.1)"}},inputs:[],outputs:["out"]},ClockSource:{blockClass:"ClockSource",description:"Discrete time clock source block.",docstringHtml:`<p>Discrete time clock source block.</p>
<p>Utilizes scheduled events to periodically set
the block output to 0 or 1 at discrete times.</p>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>T <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>period of the clock</dd>
<dt>tau <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>clock delay</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>events <span class="classifier-delimiter">:</span> <span class="classifier">list[Schedule]</span></dt>
<dd>internal scheduled event list</dd>
</dl>
</div>
`,params:{T:{type:"integer",default:"1",description:"period of the clock"},tau:{type:"integer",default:"0",description:"clock delay"}},inputs:[],outputs:["out"]},WhiteNoise:{blockClass:"WhiteNoise",description:"White noise source with Gaussian distribution.",docstringHtml:`<p>White noise source with Gaussian distribution.</p>
<p>Generates uncorrelated random samples with either constant amplitude
(<tt class="docutils literal">standard_deviation</tt> mode) or timestep-scaled amplitude for stochastic
integration (<tt class="docutils literal">spectral_density</tt> mode).</p>
<p>In spectral density mode, output is scaled as √(S₀/dt) so that integrating
the noise yields correct statistical properties (Wiener process).</p>
<div class="section" id="note">
<h3>Note</h3>
<p>If <tt class="docutils literal">spectral_density</tt> is provided, it takes precedence over <tt class="docutils literal">standard_deviation</tt>.
If <tt class="docutils literal">sampling_period</tt> is set, noise is sampled at fixed intervals (zero-order hold).</p>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>standard_deviation <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>output standard deviation for constant-amplitude mode (default: 1.0)</dd>
<dt>spectral_density <span class="classifier-delimiter">:</span> <span class="classifier">float, optional</span></dt>
<dd>power spectral density S₀ in [signal²/Hz]</dd>
<dt>sampling_period <span class="classifier-delimiter">:</span> <span class="classifier">float, optional</span></dt>
<dd>time between samples, if None samples every timestep</dd>
<dt>seed <span class="classifier-delimiter">:</span> <span class="classifier">int, optional</span></dt>
<dd>random seed for reproducibility</dd>
</dl>
</div>
`,params:{standard_deviation:{type:"number",default:"1.0",description:"output standard deviation for constant-amplitude mode (default: 1.0)"},spectral_density:{type:"any",default:null,description:"power spectral density S₀ in [signal²/Hz]"},sampling_period:{type:"any",default:null,description:"time between samples, if None samples every timestep"},seed:{type:"any",default:null,description:"random seed for reproducibility"}},inputs:[],outputs:["out"]},PinkNoise:{blockClass:"PinkNoise",description:"Pink noise (1/f noise) source using the Voss-McCartney algorithm.",docstringHtml:`<p>Pink noise (1/f noise) source using the Voss-McCartney algorithm.</p>
<p>Generates noise with power spectral density proportional to 1/f, where
lower frequencies have more power than higher frequencies.</p>
<p>The algorithm maintains <tt class="docutils literal">num_octaves</tt> independent random values representing
different frequency bands. At each sample, one octave is updated based on the
binary representation of the sample counter, creating the characteristic 1/f
spectrum through the superposition of different update rates.</p>
<div class="section" id="note">
<h3>Note</h3>
<p>If <tt class="docutils literal">spectral_density</tt> is provided, it takes precedence over <tt class="docutils literal">standard_deviation</tt>.
If <tt class="docutils literal">sampling_period</tt> is set, noise is sampled at fixed intervals (zero-order hold).</p>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>standard_deviation <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>approximate output standard deviation (default: 1.0)</dd>
<dt>spectral_density <span class="classifier-delimiter">:</span> <span class="classifier">float, optional</span></dt>
<dd>power spectral density, output scaled as √(S₀/(N·dt))</dd>
<dt>num_octaves <span class="classifier-delimiter">:</span> <span class="classifier">int</span></dt>
<dd>number of frequency bands in algorithm (default: 16)</dd>
<dt>sampling_period <span class="classifier-delimiter">:</span> <span class="classifier">float, optional</span></dt>
<dd>time between samples, if None samples every timestep</dd>
<dt>seed <span class="classifier-delimiter">:</span> <span class="classifier">int, optional</span></dt>
<dd>random seed for reproducibility</dd>
</dl>
</div>
`,params:{standard_deviation:{type:"number",default:"1.0",description:"approximate output standard deviation (default: 1.0)"},spectral_density:{type:"any",default:null,description:"power spectral density, output scaled as √(S₀/(N·dt))"},num_octaves:{type:"integer",default:"16",description:"number of frequency bands in algorithm (default: 16)"},sampling_period:{type:"any",default:null,description:"time between samples, if None samples every timestep"},seed:{type:"any",default:null,description:"random seed for reproducibility"}},inputs:[],outputs:["out"]},RandomNumberGenerator:{blockClass:"RandomNumberGenerator",description:"Generates a random output value using `numpy.random.rand`.",docstringHtml:`<p>Generates a random output value using <cite>numpy.random.rand</cite>.</p>
<p>If no <cite>sampling_period</cite> (None) is specified, every simulation timestep gets
a random value. Otherwise an internal <cite>Schedule</cite> event is used to periodically
sample a random value and set the output like a zero-order-hold stage.</p>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>sampling_period <span class="classifier-delimiter">:</span> <span class="classifier">float, None</span></dt>
<dd>time between random samples</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>_sample <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>internal random number state in case that
no <cite>sampling_period</cite> is provided</dd>
<dt>Evt <span class="classifier-delimiter">:</span> <span class="classifier">Schedule</span></dt>
<dd>internal event that periodically samples a random
value in case <cite>sampling_period</cite> is provided</dd>
</dl>
</div>
`,params:{sampling_period:{type:"any",default:null,description:"time between random samples"}},inputs:[],outputs:["out"]},Integrator:{blockClass:"Integrator",description:"Integrates the input signal.",docstringHtml:`<p>Integrates the input signal.</p>
<p>Uses a numerical integration engine like this:</p>
<div class="math">
\\begin{equation*}
y(t) = \\int_0^t u(\\tau) \\ d \\tau
\\end{equation*}
</div>
<p>or in differential form like this:</p>
<div class="math">
\\begin{equation*}
\\begin{align}
    \\dot{x}(t) &amp;= u(t) \\\\
           y(t) &amp;= x(t)
\\end{align}
\\end{equation*}
</div>
<p>The Integrator block is inherently MIMO capable, so <cite>u</cite>
and <cite>y</cite> can be vectors.</p>
<div class="section" id="example">
<h3>Example</h3>
<p>This is how to initialize the integrator:</p>
<pre class="code python literal-block">
#initial value 0.0
i1 = Integrator()

#initial value 2.5
i2 = Integrator(2.5)
</pre>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>initial_value <span class="classifier-delimiter">:</span> <span class="classifier">float, array</span></dt>
<dd>initial value of integrator</dd>
</dl>
</div>
`,params:{initial_value:{type:"number",default:"0.0",description:"initial value of integrator"}},inputs:null,outputs:null},Differentiator:{blockClass:"Differentiator",description:"Differentiates the input signal.",docstringHtml:`<p>Differentiates the input signal.</p>
<p>Uses a first order transfer function with a pole at the origin which implements
a high pass filter. Supports vector input.</p>
<div class="math">
\\begin{equation*}
H_\\mathrm{diff}(s) = \\frac{s}{1 + s / f_\\mathrm{max}}
\\end{equation*}
</div>
<p>The approximation holds for signals up to a frequency of approximately f_max.</p>
<div class="section" id="note">
<h3>Note</h3>
<p>Depending on <cite>f_max</cite>, the resulting system might become stiff or ill conditioned!
As a practical choice set <cite>f_max</cite> to 3x the highest expected signal frequency.</p>
</div>
<div class="section" id="note-1">
<h3>Note</h3>
<p>Since this is an approximation of real differentiation, the approximation will not hold
if there are high frequency components present in the signal. For example if you have
discontinuities such as steps or squere waves.</p>
</div>
<div class="section" id="example">
<h3>Example</h3>
<p>The block is initialized like this:</p>
<pre class="code python literal-block">
#cutoff at 1kHz
D = Differentiator(f_max=1e3)
</pre>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>f_max <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>highest expected signal frequency</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>op_dyn <span class="classifier-delimiter">:</span> <span class="classifier">DynamicOperator</span></dt>
<dd>internal dynamic operator for ODE component</dd>
<dt>op_alg <span class="classifier-delimiter">:</span> <span class="classifier">DynamicOperator</span></dt>
<dd>internal algebraic operator</dd>
</dl>
</div>
`,params:{f_max:{type:"number",default:"100.0",description:"highest expected signal frequency"}},inputs:null,outputs:null},Delay:{blockClass:"Delay",description:"Delays the input signal by a time constant 'tau' in seconds.",docstringHtml:`<p>Delays the input signal by a time constant 'tau' in seconds.</p>
<p>Supports two modes of operation:</p>
<p><strong>Continuous mode</strong> (default, <tt class="docutils literal">sampling_period=None</tt>):
Uses an adaptive interpolating buffer for continuous-time delay.</p>
<div class="math">
\\begin{equation*}
y(t) =
\\begin{cases}
x(t - \\tau) &amp; , t \\geq \\tau \\\\
0            &amp; , t &lt; \\tau
\\end{cases}
\\end{equation*}
</div>
<p><strong>Discrete mode</strong> (<tt class="docutils literal">sampling_period</tt> provided):
Uses a ring buffer with scheduled sampling events for N-sample delay,
where <tt class="docutils literal">N = round(tau / sampling_period)</tt>.</p>
<div class="math">
\\begin{equation*}
y[k] = x[k - N]
\\end{equation*}
</div>
<div class="section" id="note">
<h3>Note</h3>
<p>In continuous mode, the internal adaptive buffer uses interpolation for
the evaluation. This is required to be compatible with variable step solvers.
It has a drawback however. The order of the ode solver used will degrade
when this block is used, due to the interpolation.</p>
</div>
<div class="section" id="note-1">
<h3>Note</h3>
<p>This block supports vector input, meaning we can have multiple parallel
delay paths through this block.</p>
</div>
<div class="section" id="example">
<h3>Example</h3>
<p>Continuous-time delay:</p>
<pre class="code python literal-block">
#5 time units delay
D = Delay(tau=5)
</pre>
<p>Discrete-time N-sample delay (10 samples):</p>
<pre class="code python literal-block">
D = Delay(tau=0.01, sampling_period=0.001)
</pre>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>tau <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>delay time constant in seconds</dd>
<dt>sampling_period <span class="classifier-delimiter">:</span> <span class="classifier">float, None</span></dt>
<dd>sampling period for discrete mode, default is continuous mode</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>_buffer <span class="classifier-delimiter">:</span> <span class="classifier">AdaptiveBuffer</span></dt>
<dd>internal interpolatable adaptive rolling buffer (continuous mode)</dd>
<dt>_ring <span class="classifier-delimiter">:</span> <span class="classifier">deque</span></dt>
<dd>internal ring buffer for N-sample delay (discrete mode)</dd>
</dl>
</div>
`,params:{tau:{type:"number",default:"0.001",description:"delay time constant in seconds"},sampling_period:{type:"any",default:null,description:"sampling period for discrete mode, default is continuous mode"}},inputs:null,outputs:null},ODE:{blockClass:"ODE",description:"Ordinary differential equation (ODE) defined by its right hand side function.",docstringHtml:`<p>Ordinary differential equation (ODE) defined by its right hand side function.</p>
<div class="math">
\\begin{equation*}
\\begin{align}
    \\dot{x}(t) &amp;= \\mathrm{func}(x(t), u(t), t) \\\\
           y(t) &amp;= x(t)
\\end{align}
\\end{equation*}
</div>
<p>with inhomogenity (input) <cite>u</cite> and state vector <cite>x</cite>. The function can be nonlinear
and the ODE can be of arbitrary order. The block utilizes the integration engine
to solve the ODE by integrating the <cite>func</cite>, which is the right hand side function.</p>
<div class="section" id="example">
<h3>Example</h3>
<p>For example a linear 1st order ODE:</p>
<pre class="code python literal-block">
ode = ODE(lambda x, u, t: -x)
</pre>
<p>Or something more complex like the <cite>Van der Pol</cite> system, where it makes sense to
also specify the jacobian, which improves convergence for implicit solvers but is
not needed in most cases:</p>
<pre class="code python literal-block">
import numpy as np

#initial condition
x0 = np.array([2, 0])

#van der Pol parameter
mu = 1000

def func(x, u, t):
    return np.array([x[1], mu*(1 - x[0]**2)*x[1] - x[0]])

#analytical jacobian (optional)
def jac(x, u, t):
    return np.array(
        [[0                , 1               ],
         [-mu*2*x[0]*x[1]-1, mu*(1 - x[0]**2)]]
         )

#finally the block
vdp = ODE(func, x0, jac)
</pre>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>func <span class="classifier-delimiter">:</span> <span class="classifier">callable</span></dt>
<dd>right hand side function of ODE</dd>
<dt>initial_value <span class="classifier-delimiter">:</span> <span class="classifier">array[float]</span></dt>
<dd>initial state / initial condition</dd>
<dt>jac <span class="classifier-delimiter">:</span> <span class="classifier">callable, None</span></dt>
<dd>jacobian of 'func' or 'None'</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>op_dyn <span class="classifier-delimiter">:</span> <span class="classifier">DynamicOperator</span></dt>
<dd>internal dynamic operator for ODE right hand side 'func'</dd>
</dl>
</div>
`,params:{func:{type:"callable",default:null,description:"right hand side function of ODE"},initial_value:{type:"number",default:"0.0",description:"initial state / initial condition"},jac:{type:"any",default:null,description:"jacobian of 'func' or 'None'"}},inputs:null,outputs:null},DynamicalSystem:{blockClass:"DynamicalSystem",description:"This block implements a nonlinear dynamical system / nonlinear state space model.",docstringHtml:`<p>This block implements a nonlinear dynamical system / nonlinear state space model.</p>
<p>Its basically the same as the <cite>ODE</cite> block with the addition of an output equation
that takes the state, input and time as arguments:</p>
<div class="math">
\\begin{equation*}
\\begin{align}
    \\dot{x}(t) &amp;= \\mathrm{func}_\\mathrm{dyn}(x(t), u(t), t) \\\\
           y(t) &amp;= \\mathrm{func}_\\mathrm{alg}(x(t), u(t), t)
\\end{align}
\\end{equation*}
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>func_dyn <span class="classifier-delimiter">:</span> <span class="classifier">callable</span></dt>
<dd>right hand side function of ode-part of the system</dd>
<dt>func_alg <span class="classifier-delimiter">:</span> <span class="classifier">callable</span></dt>
<dd>output function of the system</dd>
<dt>initial_value <span class="classifier-delimiter">:</span> <span class="classifier">array[float]</span></dt>
<dd>initial state / initial condition</dd>
<dt>jac_dyn <span class="classifier-delimiter">:</span> <span class="classifier">callable | None</span></dt>
<dd>optional jacobian of <cite>func_dyn</cite> to improve convergence
for implicit ode solvers</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>op_dyn <span class="classifier-delimiter">:</span> <span class="classifier">DynamicOperator</span></dt>
<dd>internal dynamic operator for <cite>func_dyn</cite></dd>
<dt>op_alg <span class="classifier-delimiter">:</span> <span class="classifier">DynamicOperator</span></dt>
<dd>internal dynamic operator for <cite>func_alg</cite></dd>
</dl>
</div>
`,params:{func_dyn:{type:"callable",default:null,description:"right hand side function of ode-part of the system"},func_alg:{type:"callable",default:null,description:"output function of the system"},initial_value:{type:"number",default:"0.0",description:"initial state / initial condition"},jac_dyn:{type:"any",default:null,description:"optional jacobian of `func_dyn` to improve convergence for implicit ode solvers"}},inputs:null,outputs:null},StateSpace:{blockClass:"StateSpace",description:"Linear time invariant (LTI) multi input multi output (MIMO) state space model.",docstringHtml:`<p>Linear time invariant (LTI) multi input multi output (MIMO) state space model.</p>
<div class="math">
\\begin{equation*}
\\begin{align}
    \\dot{x} &amp;= \\mathbf{A} x + \\mathbf{B} u \\\\
           y &amp;= \\mathbf{C} x + \\mathbf{D} u
\\end{align}
\\end{equation*}
</div>
<p>where <cite>A</cite>, <cite>B</cite>, <cite>C</cite> and <cite>D</cite> are the state space matrices, <cite>x</cite> is the state,
<cite>u</cite> the input and <cite>y</cite> the output vector.</p>
<div class="section" id="example">
<h3>Example</h3>
<p>A SISO state space block with two internal states can be initialized
like this:</p>
<pre class="code python literal-block">
S = StateSpace(
    A=-np.eye(2),
    B=np.ones((2, 1)),
    C=np.ones((1, 2)),
    D=1.0
    )
</pre>
<p>and a MIMO (2 in, 2 out) state space block with three internal states
can be initialized like this:</p>
<pre class="code python literal-block">
S = StateSpace(
    A=-np.eye(3),
    B=np.ones((3, 2)),
    C=np.ones((2, 3)),
    D=np.ones((2, 2))
    )
</pre>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>A, B, C, D <span class="classifier-delimiter">:</span> <span class="classifier">array_like</span></dt>
<dd>real valued state space matrices</dd>
<dt>initial_value <span class="classifier-delimiter">:</span> <span class="classifier">array_like, None</span></dt>
<dd>initial state / initial condition</dd>
<dt>state_labels, input_labels, output_labels <span class="classifier-delimiter">:</span> <span class="classifier">list[str], None</span></dt>
<dd>optional identifiers for the states, inputs and outputs of the model.
Models assembled by 'Simulation.to_statespace' carry the block names
they were built from here. These are also exactly the 'states',
'inputs' and 'outputs' keyword arguments of 'control.StateSpace', so
the model hands over to python-control without an adapter.</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>op_dyn <span class="classifier-delimiter">:</span> <span class="classifier">DynamicOperator</span></dt>
<dd>internal dynamic operator for state equation</dd>
<dt>op_alg <span class="classifier-delimiter">:</span> <span class="classifier">DynamicOperator</span></dt>
<dd>internal algebraic operator for mapping to outputs</dd>
</dl>
</div>
`,params:{A:{type:"number",default:"-1.0",description:""},B:{type:"number",default:"1.0",description:""},C:{type:"number",default:"-1.0",description:""},D:{type:"number",default:"1.0",description:"real valued state space matrices"},initial_value:{type:"any",default:null,description:"initial state / initial condition state_labels, input_labels, output_labels : list[str], None optional identifiers for the states, inputs and outputs of the model. Models assembled by 'Simulation.to_statespace' carry the block names they were built from here. These are also exactly the 'states', 'inputs' and 'outputs' keyword arguments of 'control.StateSpace', so the model hands over to python-control without an adapter."},state_labels:{type:"any",default:null,description:""},input_labels:{type:"any",default:null,description:""},output_labels:{type:"any",default:null,description:"optional identifiers for the states, inputs and outputs of the model. Models assembled by 'Simulation.to_statespace' carry the block names they were built from here. These are also exactly the 'states', 'inputs' and 'outputs' keyword arguments of 'control.StateSpace', so the model hands over to python-control without an adapter."}},inputs:null,outputs:null},PT1:{blockClass:"PT1",description:"First-order lag element (PT1).",docstringHtml:`<p>First-order lag element (PT1).</p>
<p>The transfer function is defined as</p>
<div class="math">
\\begin{equation*}
H(s) = \\frac{K}{1 + T s}
\\end{equation*}
</div>
<p>where <cite>K</cite> is the static gain and <cite>T</cite> is the time constant.</p>
<div class="section" id="example">
<h3>Example</h3>
<p>The block is initialized like this:</p>
<pre class="code python literal-block">
pt1 = PT1(K=2.0, T=0.5)
</pre>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>K <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>static gain</dd>
<dt>T <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>time constant in seconds (must be &gt; 0)</dd>
</dl>
</div>
`,params:{K:{type:"number",default:"1.0",description:"static gain"},T:{type:"number",default:"1.0",description:"time constant in seconds (must be > 0)"}},inputs:["in"],outputs:["out"]},PT2:{blockClass:"PT2",description:"Second-order lag element (PT2).",docstringHtml:`<p>Second-order lag element (PT2).</p>
<p>The transfer function is defined as</p>
<div class="math">
\\begin{equation*}
H(s) = \\frac{K}{1 + 2 d T s + T^2 s^2}
\\end{equation*}
</div>
<p>where <cite>K</cite> is the static gain, <cite>T</cite> is the time constant
(related to the natural frequency by <span class="math">\\(\\omega_n = 1/T\\)</span>)
and <cite>d</cite> is the damping ratio.</p>
<p>The damping ratio <cite>d</cite> controls the transient behavior:</p>
<ul class="simple">
<li><span class="math">\\(d &lt; 1\\)</span>: underdamped (oscillatory)</li>
<li><span class="math">\\(d = 1\\)</span>: critically damped</li>
<li><span class="math">\\(d &gt; 1\\)</span>: overdamped</li>
</ul>
<div class="section" id="example">
<h3>Example</h3>
<p>The block is initialized like this:</p>
<pre class="code python literal-block">
#underdamped second-order system
pt2 = PT2(K=1.0, T=0.1, d=0.3)
</pre>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>K <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>static gain</dd>
<dt>T <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>time constant in seconds (must be &gt; 0)</dd>
<dt>d <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>damping ratio (must be &gt;= 0)</dd>
</dl>
</div>
`,params:{K:{type:"number",default:"1.0",description:"static gain"},T:{type:"number",default:"1.0",description:"time constant in seconds (must be > 0)"},d:{type:"number",default:"1.0",description:"damping ratio (must be >= 0)"}},inputs:["in"],outputs:["out"]},LeadLag:{blockClass:"LeadLag",description:"Lead-Lag compensator.",docstringHtml:`<p>Lead-Lag compensator.</p>
<p>The transfer function is defined as</p>
<div class="math">
\\begin{equation*}
H(s) = K \\frac{T_1 s + 1}{T_2 s + 1}
\\end{equation*}
</div>
<p>where <cite>K</cite> is the static gain, <cite>T1</cite> is the lead time constant
and <cite>T2</cite> is the lag time constant.</p>
<ul class="simple">
<li><span class="math">\\(T_1 &gt; T_2\\)</span>: lead compensator (phase advance)</li>
<li><span class="math">\\(T_1 &lt; T_2\\)</span>: lag compensator (phase lag)</li>
<li><span class="math">\\(T_1 = T_2\\)</span>: pure gain</li>
</ul>
<div class="section" id="example">
<h3>Example</h3>
<p>The block is initialized like this:</p>
<pre class="code python literal-block">
#lead compensator
ll = LeadLag(K=1.0, T1=0.5, T2=0.1)
</pre>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>K <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>static gain</dd>
<dt>T1 <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>lead (numerator) time constant in seconds</dd>
<dt>T2 <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>lag (denominator) time constant in seconds (must be &gt; 0)</dd>
</dl>
</div>
`,params:{K:{type:"number",default:"1.0",description:"static gain"},T1:{type:"number",default:"1.0",description:"lead (numerator) time constant in seconds"},T2:{type:"number",default:"1.0",description:"lag (denominator) time constant in seconds (must be > 0)"}},inputs:["in"],outputs:["out"]},PID:{blockClass:"PID",description:"Proportional-Integral-Differentiation (PID) controller.",docstringHtml:`<p>Proportional-Integral-Differentiation (PID) controller.</p>
<p>The transfer function is defined as</p>
<div class="math">
\\begin{equation*}
H(s) = K_p + K_i \\frac{1}{s} + K_d \\frac{s}{1 + s / f_\\mathrm{max}}
\\end{equation*}
</div>
<p>where the differentiation is approximated by a high pass filter that holds
for signals up to a frequency of approximately <cite>f_max</cite>.</p>
<p>Internally realized as a linear state space model with two states
(differentiator filter state and integrator state).</p>
<div class="section" id="note">
<h3>Note</h3>
<p>Depending on <cite>f_max</cite>, the resulting system might become stiff or ill conditioned!
As a practical choice set <cite>f_max</cite> to 3x the highest expected signal frequency.
Since this block uses an approximation of real differentiation, the approximation will
not hold if there are high frequency components present in the signal. For example if
you have discontinuities such as steps or square waves.</p>
</div>
<div class="section" id="example">
<h3>Example</h3>
<p>The block is initialized like this:</p>
<pre class="code python literal-block">
#cutoff at 1kHz
pid = PID(Kp=2, Ki=0.5, Kd=0.1, f_max=1e3)
</pre>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>Kp <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>proportional controller coefficient</dd>
<dt>Ki <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>integral controller coefficient</dd>
<dt>Kd <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>differentiator controller coefficient</dd>
<dt>f_max <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>highest expected signal frequency</dd>
</dl>
</div>
`,params:{Kp:{type:"integer",default:"0",description:"proportional controller coefficient"},Ki:{type:"integer",default:"0",description:"integral controller coefficient"},Kd:{type:"integer",default:"0",description:"differentiator controller coefficient"},f_max:{type:"integer",default:"100",description:"highest expected signal frequency"}},inputs:["in"],outputs:["out"]},AntiWindupPID:{blockClass:"AntiWindupPID",description:"Proportional-Integral-Differentiation (PID) controller with anti-windup mechanism (back-calculation).",docstringHtml:`<p>Proportional-Integral-Differentiation (PID) controller with anti-windup mechanism (back-calculation).</p>
<p>Anti-windup mechanisms are needed when the magnitude of the control signal
from the PID controller is limited by some real world saturation. In these cases,
the integrator will continue to accumulate the control error and &quot;wind itself up&quot;.
Once the setpoint is reached, this can result in significant overshoots. This
implementation adds a conditional feedback term to the internal integrator that
&quot;unwinds&quot; it when the PID output crosses some limits. This is pretty much a
deadzone feedback element for the integrator.</p>
<p>Mathematically, this block implements the following set of ODEs</p>
<div class="math">
\\begin{equation*}
\\begin{align}
\\dot{x}_1 &amp;= f_\\mathrm{max} (u - x_1) \\\\
\\dot{x}_2 &amp;= u - w
\\end{align}
\\end{equation*}
</div>
<p>with the anti-windup feedback (depending on the pid output)</p>
<div class="math">
\\begin{equation*}
w = K_s (y - \\min(\\max(y, y_\\mathrm{min}), y_\\mathrm{max}))
\\end{equation*}
</div>
<p>and the output itself</p>
<div class="math">
\\begin{equation*}
y = K_p u + K_d f_\\mathrm{max} (u - x_1) + K_i x_2
\\end{equation*}
</div>
<div class="section" id="note">
<h3>Note</h3>
<p>Depending on <cite>f_max</cite>, the resulting system might become stiff or ill conditioned!
As a practical choice set <cite>f_max</cite> to 3x the highest expected signal frequency.
Since this block uses an approximation of real differentiation, the approximation will
not hold if there are high frequency components present in the signal. For example if
you have discontinuities such as steps or square waves.</p>
</div>
<div class="section" id="example">
<h3>Example</h3>
<p>The block is initialized like this:</p>
<pre class="code python literal-block">
#cutoff at 1kHz, windup limits at [-5, 5]
pid = AntiWindupPID(Kp=2, Ki=0.5, Kd=0.1, f_max=1e3, limits=[-5, 5])
</pre>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>Kp <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>proportional controller coefficient</dd>
<dt>Ki <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>integral controller coefficient</dd>
<dt>Kd <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>differentiator controller coefficient</dd>
<dt>f_max <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>highest expected signal frequency</dd>
<dt>Ks <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>feedback term for back calculation for anti-windup control of integrator</dd>
<dt>limits <span class="classifier-delimiter">:</span> <span class="classifier">array_like[float]</span></dt>
<dd>lower and upper limit for PID output that triggers anti-windup of integrator</dd>
</dl>
</div>
`,params:{Kp:{type:"integer",default:"0",description:"proportional controller coefficient"},Ki:{type:"integer",default:"0",description:"integral controller coefficient"},Kd:{type:"integer",default:"0",description:"differentiator controller coefficient"},f_max:{type:"integer",default:"100",description:"highest expected signal frequency"},Ks:{type:"integer",default:"10",description:"feedback term for back calculation for anti-windup control of integrator"},limits:{type:"array",default:"[-10, 10]",description:"lower and upper limit for PID output that triggers anti-windup of integrator"}},inputs:["in"],outputs:["out"]},RateLimiter:{blockClass:"RateLimiter",description:"Rate limiter block that limits the rate of change of a signal.",docstringHtml:`<p>Rate limiter block that limits the rate of change of a signal.</p>
<p>Implements a continuous-time rate limiter as a first-order tracking system
with clipped rate of change:</p>
<div class="math">
\\begin{equation*}
\\dot{x} = \\mathrm{clip}\\left(f_\\mathrm{max} (u - x),\\; -r,\\; r\\right)
\\end{equation*}
</div>
<p>where <cite>r</cite> is the maximum allowed rate and <cite>f_max</cite> controls the tracking
bandwidth when the signal is not rate-limited. The output is the state
<span class="math">\\(y = x\\)</span>.</p>
<div class="section" id="note">
<h3>Note</h3>
<p>The parameter <cite>f_max</cite> should be set high enough that the output tracks
the input without lag when the rate is within limits.</p>
</div>
<div class="section" id="example">
<h3>Example</h3>
<p>The block is initialized like this:</p>
<pre class="code python literal-block">
#max rate of 10 units/s
rl = RateLimiter(rate=10.0, f_max=1e3)
</pre>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>rate <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>maximum rate of change (positive value)</dd>
<dt>f_max <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>tracking bandwidth parameter</dd>
</dl>
</div>
`,params:{rate:{type:"number",default:"1.0",description:"maximum rate of change (positive value)"},f_max:{type:"integer",default:"100",description:"tracking bandwidth parameter"}},inputs:["in"],outputs:["out"]},Backlash:{blockClass:"Backlash",description:"Backlash (mechanical play) element.",docstringHtml:`<p>Backlash (mechanical play) element.</p>
<p>Models the hysteresis-like behavior of mechanical backlash in gears,
couplings and other systems with play. The output only tracks the input
after the input has moved through the full backlash width.</p>
<div class="math">
\\begin{equation*}
\\dot{x} = f_\\mathrm{max} \\left((u - x) - \\mathrm{clip}(u - x,\\; -w/2,\\; w/2)\\right)
\\end{equation*}
</div>
<p>where <cite>w</cite> is the total backlash width. Inside the dead zone <span class="math">\\(|u - x| \\leq w/2\\)</span>
the output does not move. Once the input pushes past the edge, the output
tracks with bandwidth <cite>f_max</cite>.</p>
<div class="section" id="example">
<h3>Example</h3>
<p>The block is initialized like this:</p>
<pre class="code python literal-block">
#backlash with 0.5 units of total play
bl = Backlash(width=0.5, f_max=1e3)
</pre>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>width <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>total backlash width (play)</dd>
<dt>f_max <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>tracking bandwidth parameter when engaged</dd>
</dl>
</div>
`,params:{width:{type:"number",default:"1.0",description:"total backlash width (play)"},f_max:{type:"integer",default:"100",description:"tracking bandwidth parameter when engaged"}},inputs:["in"],outputs:["out"]},Deadband:{blockClass:"Deadband",description:"Deadband (dead zone) element.",docstringHtml:`<p>Deadband (dead zone) element.</p>
<p>Outputs zero when the input is within the dead zone, and passes
the signal shifted by the zone boundary otherwise:</p>
<div class="math">
\\begin{equation*}
y = \\begin{cases}
    u - u_\\mathrm{upper} &amp; \\text{if } u &gt; u_\\mathrm{upper} \\\\
    0 &amp; \\text{if } u_\\mathrm{lower} \\leq u \\leq u_\\mathrm{upper} \\\\
    u - u_\\mathrm{lower} &amp; \\text{if } u &lt; u_\\mathrm{lower}
\\end{cases}
\\end{equation*}
</div>
<p>or equivalently <span class="math">\\(y = u - \\mathrm{clip}(u,\\; u_\\mathrm{lower},\\; u_\\mathrm{upper})\\)</span>.</p>
<div class="section" id="example">
<h3>Example</h3>
<p>The block is initialized like this:</p>
<pre class="code python literal-block">
#symmetric dead zone of width 0.2
db = Deadband(lower=-0.1, upper=0.1)
</pre>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>lower <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>lower bound of the dead zone</dd>
<dt>upper <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>upper bound of the dead zone</dd>
</dl>
</div>
`,params:{lower:{type:"number",default:"-1.0",description:"lower bound of the dead zone"},upper:{type:"number",default:"1.0",description:"upper bound of the dead zone"}},inputs:["in"],outputs:["out"]},TransferFunctionNumDen:{blockClass:"TransferFunctionNumDen",description:"This block defines a LTI (SISO) transfer function.",docstringHtml:`<p>This block defines a LTI (SISO) transfer function.</p>
<p>The transfer function is defined in polynomial (numerator-denominator) form</p>
<div class="math">
\\begin{equation*}
\\mathbf{H}(s) = \\frac{b_n + b_{n-1} s + \\dots + b_{0} s^n}{a_m + a_{m-1} s + \\dots + a_{0} s^m}
\\end{equation*}
</div>
<p>where <cite>Num</cite> is the list of numerator polynomial coefficients and <cite>Den</cite> the
list of denominator coefficients.</p>
<p>Upon initialization, the state space realization of the transfer function is
computed using <cite>scipy.signal.TransferFunction(Num, Den).to_ss()</cite>.</p>
<p>The resulting state space model of the form</p>
<div class="math">
\\begin{equation*}
\\begin{align}
    \\dot{x} &amp;= \\mathbf{A} x + \\mathbf{B} u \\\\
           y &amp;= \\mathbf{C} x + \\mathbf{D} u
\\end{align}
\\end{equation*}
</div>
<p>is handled the same as the 'StateSpace' block, where <cite>A</cite>, <cite>B</cite>, <cite>C</cite> and <cite>D</cite>
are the state space matrices, <cite>x</cite> is the internal state, <cite>u</cite> the input and
<cite>y</cite> the output vector.</p>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>Num <span class="classifier-delimiter">:</span> <span class="classifier">array_like</span></dt>
<dd>numerator polynomial coefficients</dd>
<dt>Den <span class="classifier-delimiter">:</span> <span class="classifier">array_like</span></dt>
<dd>denominator polynomial coefficients</dd>
</dl>
</div>
`,params:{Num:{type:"array",default:"[1]",description:"numerator polynomial coefficients"},Den:{type:"array",default:"[1, 1]",description:"denominator polynomial coefficients"}},inputs:["in"],outputs:["out"]},TransferFunctionZPG:{blockClass:"TransferFunctionZPG",description:"This block defines a LTI (SISO) transfer function.",docstringHtml:`<p>This block defines a LTI (SISO) transfer function.</p>
<p>The transfer function is defined in zeros-poles-gain (ZPG) form</p>
<div class="math">
\\begin{equation*}
\\mathbf{H}(s) = k \\frac{(s - z_1)(s - z_2)\\cdots(s - z_m)}{(s - p_1)(s - p_2)\\cdots(s - p_n)}
\\end{equation*}
</div>
<p>where <cite>Zeros</cite> are the scalar (possibly complex conjugate) zeros of the
transfer function, and <cite>Poles</cite> are the poles (denominator zeros) of the
transfer function. <cite>Gain</cite> is the scalar factor <cite>k</cite>.</p>
<p>Upon initialization, the state space realization of the transfer function is
computed using <cite>scipy.signal.ZerosPolesGain(Zeros, Poles, Gain).to_ss()</cite>.</p>
<p>The resulting state space model of the form</p>
<div class="math">
\\begin{equation*}
\\begin{align}
    \\dot{x} &amp;= \\mathbf{A} x + \\mathbf{B} u \\\\
           y &amp;= \\mathbf{C} x + \\mathbf{D} u
\\end{align}
\\end{equation*}
</div>
<p>is handled the same as the 'StateSpace' block, where <cite>A</cite>, <cite>B</cite>, <cite>C</cite> and <cite>D</cite>
are the state space matrices, <cite>x</cite> is the internal state, <cite>u</cite> the input and
<cite>y</cite> the output vector.</p>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>Poles <span class="classifier-delimiter">:</span> <span class="classifier">array_like</span></dt>
<dd>transfer function poles</dd>
<dt>Zeros <span class="classifier-delimiter">:</span> <span class="classifier">array_like</span></dt>
<dd>transfer function zeros</dd>
<dt>Gain <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>gain term of transfer function</dd>
</dl>
</div>
`,params:{Zeros:{type:"array",default:"[]",description:"transfer function zeros"},Poles:{type:"array",default:"[-1]",description:"transfer function poles"},Gain:{type:"number",default:"1.0",description:"gain term of transfer function"}},inputs:["in"],outputs:["out"]},ButterworthLowpassFilter:{blockClass:"ButterworthLowpassFilter",description:"Direct implementation of a low pass butterworth filter block.",docstringHtml:`<p>Direct implementation of a low pass butterworth filter block.</p>
<p>Follows the same structure as the 'StateSpace' block in the
'pathsim.blocks' module. The numerator and denominator of the
filter transfer function are generated and then the transfer
function is realized as a state space model.</p>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>Fc <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>corner frequency of the filter in [Hz]</dd>
<dt>n <span class="classifier-delimiter">:</span> <span class="classifier">int</span></dt>
<dd>filter order</dd>
</dl>
</div>
`,params:{Fc:{type:"integer",default:"100",description:"corner frequency of the filter in [Hz]"},n:{type:"integer",default:"2",description:"filter order"}},inputs:["in"],outputs:["out"]},ButterworthHighpassFilter:{blockClass:"ButterworthHighpassFilter",description:"Direct implementation of a high pass butterworth filter block.",docstringHtml:`<p>Direct implementation of a high pass butterworth filter block.</p>
<p>Follows the same structure as the 'StateSpace' block in the
'pathsim.blocks' module. The numerator and denominator of the
filter transfer function are generated and then the transfer
function is realized as a state space model.</p>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>Fc <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>corner frequency of the filter in [Hz]</dd>
<dt>n <span class="classifier-delimiter">:</span> <span class="classifier">int</span></dt>
<dd>filter order</dd>
</dl>
</div>
`,params:{Fc:{type:"integer",default:"100",description:"corner frequency of the filter in [Hz]"},n:{type:"integer",default:"2",description:"filter order"}},inputs:["in"],outputs:["out"]},ButterworthBandpassFilter:{blockClass:"ButterworthBandpassFilter",description:"Direct implementation of a bandpass butterworth filter block.",docstringHtml:`<p>Direct implementation of a bandpass butterworth filter block.</p>
<p>Follows the same structure as the 'StateSpace' block in the
'pathsim.blocks' module. The numerator and denominator of the
filter transfer function are generated and then the transfer
function is realized as a state space model.</p>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>Fc <span class="classifier-delimiter">:</span> <span class="classifier">list[float]</span></dt>
<dd>corner frequencies (left, right) of the filter in [Hz]</dd>
<dt>n <span class="classifier-delimiter">:</span> <span class="classifier">int</span></dt>
<dd>filter order</dd>
</dl>
</div>
`,params:{Fc:{type:"array",default:"[50, 100]",description:"corner frequencies (left, right) of the filter in [Hz]"},n:{type:"integer",default:"2",description:"filter order"}},inputs:["in"],outputs:["out"]},ButterworthBandstopFilter:{blockClass:"ButterworthBandstopFilter",description:"Direct implementation of a bandstop butterworth filter block.",docstringHtml:`<p>Direct implementation of a bandstop butterworth filter block.</p>
<p>Follows the same structure as the 'StateSpace' block in the
'pathsim.blocks' module. The numerator and denominator of the
filter transfer function are generated and then the transfer
function is realized as a state space model.</p>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>Fc <span class="classifier-delimiter">:</span> <span class="classifier">tuple[float], list[float]</span></dt>
<dd>corner frequencies (left, right) of the filter in [Hz]</dd>
<dt>n <span class="classifier-delimiter">:</span> <span class="classifier">int</span></dt>
<dd>filter order</dd>
</dl>
</div>
`,params:{Fc:{type:"array",default:"[50, 100]",description:"corner frequencies (left, right) of the filter in [Hz]"},n:{type:"integer",default:"2",description:"filter order"}},inputs:["in"],outputs:["out"]},Adder:{blockClass:"Adder",description:"Summs / adds up all input signals to a single output signal (MISO)",docstringHtml:`<p>Summs / adds up all input signals to a single output signal (MISO)</p>
<p>This is how it works in the default case</p>
<div class="math">
\\begin{equation*}
y(t) = \\sum_i u_i(t)
\\end{equation*}
</div>
<p>and like this when additional operations are defined</p>
<div class="math">
\\begin{equation*}
y(t) = \\sum_i \\mathrm{op}_i \\cdot u_i(t)
\\end{equation*}
</div>
<div class="section" id="example">
<h3>Example</h3>
<p>This is the default initialization that just adds up all the inputs:</p>
<pre class="code python literal-block">
A = Adder()
</pre>
<p>and this is the initialization with specific operations that subtracts
the second from first input and neglects all others:</p>
<pre class="code python literal-block">
A = Adder('+-')
</pre>
</div>
<div class="section" id="note">
<h3>Note</h3>
<p>This block is purely algebraic and its operation (<cite>op_alg</cite>) will be called
multiple times per timestep, each time when <cite>Simulation._update(t)</cite> is
called in the global simulation loop.</p>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>operations <span class="classifier-delimiter">:</span> <span class="classifier">str, optional</span></dt>
<dd>optional string of operations to be applied before
summation, i.e. '+-' will compute the difference,
'None' will just perform regular sum</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>_ops <span class="classifier-delimiter">:</span> <span class="classifier">dict</span></dt>
<dd>dict that maps string operations to numerical</dd>
<dt>_ops_array <span class="classifier-delimiter">:</span> <span class="classifier">array_like</span></dt>
<dd>operations converted to array</dd>
<dt>op_alg <span class="classifier-delimiter">:</span> <span class="classifier">Operator</span></dt>
<dd>internal algebraic operator</dd>
</dl>
</div>
`,params:{operations:{type:"any",default:null,description:"optional string of operations to be applied before summation, i.e. '+-' will compute the difference, 'None' will just perform regular sum"}},inputs:null,outputs:["out"]},Multiplier:{blockClass:"Multiplier",description:"Multiplies all signals from all input ports (MISO).",docstringHtml:`<p>Multiplies all signals from all input ports (MISO).</p>
<div class="math">
\\begin{equation*}
y(t) = \\prod_i u_i(t)
\\end{equation*}
</div>
<div class="section" id="note">
<h3>Note</h3>
<p>This block is purely algebraic and its operation (<cite>op_alg</cite>) will be called
multiple times per timestep, each time when <cite>Simulation._update(t)</cite> is
called in the global simulation loop.</p>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>op_alg <span class="classifier-delimiter">:</span> <span class="classifier">Operator</span></dt>
<dd>internal algebraic operator that wraps 'prod'</dd>
</dl>
</div>
`,params:{},inputs:null,outputs:["out"]},Divider:{blockClass:"Divider",description:"Multiplies and divides input signals (MISO).",docstringHtml:`<p>Multiplies and divides input signals (MISO).</p>
<p>This is the default behavior (multiply all):</p>
<div class="math">
\\begin{equation*}
y(t) = \\prod_i u_i(t)
\\end{equation*}
</div>
<p>and this is the behavior with an operations string:</p>
<div class="math">
\\begin{equation*}
y(t) = \\frac{\\prod_{i \\in M} u_i(t)}{\\prod_{j \\in D} u_j(t)}
\\end{equation*}
</div>
<p>where <span class="math">\\(M\\)</span> is the set of inputs with <tt class="docutils literal">*</tt> and <span class="math">\\(D\\)</span> the set with <tt class="docutils literal">/</tt>.</p>
<div class="section" id="example">
<h3>Example</h3>
<p>Default initialization multiplies the first input and divides by the second:</p>
<pre class="code python literal-block">
D = Divider()
</pre>
<p>Multiply the first two inputs and divide by the third:</p>
<pre class="code python literal-block">
D = Divider('**/')
</pre>
<p>Raise an error instead of producing <tt class="docutils literal">inf</tt> when a denominator input is zero:</p>
<pre class="code python literal-block">
D = Divider('**/', zero_div='raise')
</pre>
<p>Clamp the denominator to machine epsilon so the output stays finite:</p>
<pre class="code python literal-block">
D = Divider('**/', zero_div='clamp')
</pre>
</div>
<div class="section" id="note">
<h3>Note</h3>
<p>This block is purely algebraic and its operation (<tt class="docutils literal">op_alg</tt>) will be called
multiple times per timestep, each time when <tt class="docutils literal">Simulation._update(t)</tt> is
called in the global simulation loop.</p>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>operations <span class="classifier-delimiter">:</span> <span class="classifier">str, optional</span></dt>
<dd>String of <tt class="docutils literal">*</tt> and <tt class="docutils literal">/</tt> characters indicating which inputs are
multiplied (<tt class="docutils literal">*</tt>) or divided (<tt class="docutils literal">/</tt>). Inputs beyond the length of
the string default to <tt class="docutils literal">*</tt>. Defaults to <tt class="docutils literal"><span class="pre">'*/'</span></tt> (divide second
input by first).</dd>
<dt>zero_div <span class="classifier-delimiter">:</span> <span class="classifier">str, optional</span></dt>
<dd><p class="first">Behaviour when a denominator input is zero. One of:</p>
<dl class="last docutils">
<dt><tt class="docutils literal">'warn'</tt> <em>(default)</em></dt>
<dd>Propagates <tt class="docutils literal">inf</tt> and emits a <tt class="docutils literal">RuntimeWarning</tt> — numpy's
standard behaviour.</dd>
<dt><tt class="docutils literal">'raise'</tt></dt>
<dd>Raises <tt class="docutils literal">ZeroDivisionError</tt>.</dd>
<dt><tt class="docutils literal">'clamp'</tt></dt>
<dd>Clamps the denominator magnitude to machine epsilon
(<tt class="docutils literal"><span class="pre">numpy.finfo(float).eps</span></tt>), preserving sign, so the output
stays large-but-finite rather than <tt class="docutils literal">inf</tt>.</dd>
</dl>
</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>_ops <span class="classifier-delimiter">:</span> <span class="classifier">dict</span></dt>
<dd>Maps operation characters to exponent values (<tt class="docutils literal">+1</tt> or <tt class="docutils literal"><span class="pre">-1</span></tt>).</dd>
<dt>_ops_array <span class="classifier-delimiter">:</span> <span class="classifier">numpy.ndarray</span></dt>
<dd>Exponents (+1 for <tt class="docutils literal">*</tt>, -1 for <tt class="docutils literal">/</tt>) converted to an array.</dd>
<dt>op_alg <span class="classifier-delimiter">:</span> <span class="classifier">Operator</span></dt>
<dd>Internal algebraic operator.</dd>
</dl>
</div>
`,params:{operations:{type:"string",default:'"*/"',description:"String of ``*`` and ``/`` characters indicating which inputs are multiplied (``*``) or divided (``/``). Inputs beyond the length of the string default to ``*``. Defaults to ``'*/'`` (divide second input by first)."},zero_div:{type:"string",default:'"warn"',description:"Behaviour when a denominator input is zero. One of:"}},inputs:null,outputs:["out"]},Amplifier:{blockClass:"Amplifier",description:"Amplifies the input signal by multiplication with a constant gain term.",docstringHtml:`<p>Amplifies the input signal by multiplication with a constant gain term.</p>
<p>Like this:</p>
<div class="math">
\\begin{equation*}
y(t) = \\mathrm{gain} \\cdot u(t)
\\end{equation*}
</div>
<div class="section" id="note">
<h3>Note</h3>
<p>This block is purely algebraic and its operation (<cite>op_alg</cite>) will be called
multiple times per timestep, each time when <cite>Simulation._update(t)</cite> is
called in the global simulation loop.</p>
</div>
<div class="section" id="example">
<h3>Example</h3>
<p>The block is initialized like this:</p>
<pre class="code python literal-block">
#amplification by factor 5
A = Amplifier(gain=5)
</pre>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>gain <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>amplifier gain</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>op_alg <span class="classifier-delimiter">:</span> <span class="classifier">Operator</span></dt>
<dd>internal algebraic operator</dd>
</dl>
</div>
`,params:{gain:{type:"number",default:"1.0",description:"amplifier gain"}},inputs:null,outputs:null},Function:{blockClass:"Function",description:"Arbitrary MIMO function block, defined by a function or `lambda` expression.",docstringHtml:`<p>Arbitrary MIMO function block, defined by a function or <cite>lambda</cite> expression.</p>
<p>The function can have multiple arguments that are then provided
by the input channels of the function block.</p>
<p>Form multi input, the function has to specify multiple arguments
and for multi output, the aoutputs have to be provided as a
tuple or list.</p>
<p>In the context of the global system, this block implements algebraic
components of the global system ODE/DAE.</p>
<div class="math">
\\begin{equation*}
\\vec{y} = \\mathrm{func}(\\vec{u})
\\end{equation*}
</div>
<div class="section" id="note">
<h3>Note</h3>
<p>This block is purely algebraic and its operation (<cite>op_alg</cite>) will be called
multiple times per timestep, each time when <cite>Simulation._update(t)</cite> is
called in the global simulation loop.
Therefore <cite>func</cite> must be purely algebraic and not introduce states,
delay, etc. For interfacing with external stateful APIs, use the
<cite>Wrapper</cite> block.</p>
</div>
<div class="section" id="note-1">
<h3>Note</h3>
<p>If the outputs are provided as a single numpy array, they are
considered a single output. For MIMO, output has to be tuple.</p>
</div>
<div class="section" id="example">
<h3>Example</h3>
<p>consider the function:</p>
<pre class="code python literal-block">
from pathsim.blocks import Function

def f(a, b, c):
    return a**2, a*b, b/c

fn = Function(f)
</pre>
<p>then, when the block is updated, the input channels of the block are
assigned to the function arguments following this scheme:</p>
<pre class="code literal-block">
inputs[0] -&gt; a
inputs[1] -&gt; b
inputs[2] -&gt; c
</pre>
<p>and the function outputs are assigned to the
output channels of the block in the same way:</p>
<pre class="code literal-block">
a**2 -&gt; outputs[0]
a*b  -&gt; outputs[1]
b/c  -&gt; outputs[2]
</pre>
<p>Because the <cite>Function</cite> block only has a single argument, it can be
used to decorate a function and make it a <cite>PathSim</cite> block. This might
be handy in some cases to keep definitions concise and localized
in the code:</p>
<pre class="code python literal-block">
from pathsim.blocks import Function

#does the same as the definition above

&#64;Function
def fn(a, b, c):
    return a**2, a*b, b/c

#'fn' is now a PathSim block
</pre>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>func <span class="classifier-delimiter">:</span> <span class="classifier">callable</span></dt>
<dd>MIMO function that defines algebraic block IO behaviour, signature <cite>func(*tuple)</cite></dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>op_alg <span class="classifier-delimiter">:</span> <span class="classifier">Operator</span></dt>
<dd>internal algebraic operator that wraps <cite>func</cite></dd>
</dl>
</div>
`,params:{func:{type:"callable",default:null,description:"MIMO function that defines algebraic block IO behaviour, signature `func(*tuple)`"}},inputs:null,outputs:null},Polynomial:{blockClass:"Polynomial",description:"Polynomial operator block.",docstringHtml:`<p>Polynomial operator block.</p>
<p>Evaluates a polynomial in the input. The coefficients follow the
<cite>numpy.polyval</cite> convention, with the highest order term first:</p>
<div class="math">
\\begin{equation*}
\\vec{y} = c_0 \\vec{u}^n + c_1 \\vec{u}^{n-1} + \\dots + c_{n-1} \\vec{u} + c_n
\\end{equation*}
</div>
<p>This block supports vector inputs (the polynomial is evaluated
element-wise).</p>
<div class="section" id="example">
<h3>Example</h3>
<p>Quadratic <span class="math">\\(y = 2 u^2 + 3 u + 1\\)</span>:</p>
<pre class="code python literal-block">
p = Polynomial(coeffs=[2, 3, 1])
</pre>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>coeffs <span class="classifier-delimiter">:</span> <span class="classifier">array_like</span></dt>
<dd>polynomial coefficients in descending order of power,
following the <tt class="docutils literal">numpy.polyval</tt> convention</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>op_alg <span class="classifier-delimiter">:</span> <span class="classifier">Operator</span></dt>
<dd>internal algebraic operator</dd>
</dl>
</div>
`,params:{coeffs:{type:"array",default:"[1.0, 0.0]",description:"polynomial coefficients in descending order of power, following the ``numpy.polyval`` convention"}},inputs:null,outputs:null},Sin:{blockClass:"Sin",description:"Sine operator block.",docstringHtml:`<p>Sine operator block.</p>
<p>This block supports vector inputs. This is the operation it does:</p>
<div class="math">
\\begin{equation*}
\\vec{y} = \\sin(\\vec{u})
\\end{equation*}
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>op_alg <span class="classifier-delimiter">:</span> <span class="classifier">Operator</span></dt>
<dd>internal algebraic operator</dd>
</dl>
</div>
`,params:{},inputs:null,outputs:null},Cos:{blockClass:"Cos",description:"Cosine operator block.",docstringHtml:`<p>Cosine operator block.</p>
<p>This block supports vector inputs. This is the operation it does:</p>
<div class="math">
\\begin{equation*}
\\vec{y} = \\cos(\\vec{u})
\\end{equation*}
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>op_alg <span class="classifier-delimiter">:</span> <span class="classifier">Operator</span></dt>
<dd>internal algebraic operator</dd>
</dl>
</div>
`,params:{},inputs:null,outputs:null},Tan:{blockClass:"Tan",description:"Tangent operator block.",docstringHtml:`<p>Tangent operator block.</p>
<p>This block supports vector inputs. This is the operation it does:</p>
<div class="math">
\\begin{equation*}
\\vec{y} = \\tan(\\vec{u})
\\end{equation*}
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>op_alg <span class="classifier-delimiter">:</span> <span class="classifier">Operator</span></dt>
<dd>internal algebraic operator</dd>
</dl>
</div>
`,params:{},inputs:null,outputs:null},Tanh:{blockClass:"Tanh",description:"Hyperbolic tangent operator block.",docstringHtml:`<p>Hyperbolic tangent operator block.</p>
<p>This block supports vector inputs. This is the operation it does:</p>
<div class="math">
\\begin{equation*}
\\vec{y} = \\tanh(\\vec{u})
\\end{equation*}
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>op_alg <span class="classifier-delimiter">:</span> <span class="classifier">Operator</span></dt>
<dd>internal algebraic operator</dd>
</dl>
</div>
`,params:{},inputs:null,outputs:null},Abs:{blockClass:"Abs",description:"Absolute value operator block.",docstringHtml:`<p>Absolute value operator block.</p>
<p>This block supports vector inputs. This is the operation it does:</p>
<div class="math">
\\begin{equation*}
\\vec{y} = \\vert| \\vec{u} \\vert|
\\end{equation*}
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>op_alg <span class="classifier-delimiter">:</span> <span class="classifier">Operator</span></dt>
<dd>internal algebraic operator</dd>
</dl>
</div>
`,params:{},inputs:null,outputs:null},Sqrt:{blockClass:"Sqrt",description:"Square root operator block.",docstringHtml:`<p>Square root operator block.</p>
<p>This block supports vector inputs. This is the operation it does:</p>
<div class="math">
\\begin{equation*}
\\vec{y} = \\sqrt{|\\vec{u}|}
\\end{equation*}
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>op_alg <span class="classifier-delimiter">:</span> <span class="classifier">Operator</span></dt>
<dd>internal algebraic operator</dd>
</dl>
</div>
`,params:{},inputs:null,outputs:null},Exp:{blockClass:"Exp",description:"Exponential operator block.",docstringHtml:`<p>Exponential operator block.</p>
<p>This block supports vector inputs. This is the operation it does:</p>
<div class="math">
\\begin{equation*}
\\vec{y} = e^{\\vec{u}}
\\end{equation*}
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>op_alg <span class="classifier-delimiter">:</span> <span class="classifier">Operator</span></dt>
<dd>internal algebraic operator</dd>
</dl>
</div>
`,params:{},inputs:null,outputs:null},Log:{blockClass:"Log",description:"Natural logarithm operator block.",docstringHtml:`<p>Natural logarithm operator block.</p>
<p>This block supports vector inputs. This is the operation it does:</p>
<div class="math">
\\begin{equation*}
\\vec{y} = \\ln(\\vec{u})
\\end{equation*}
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>op_alg <span class="classifier-delimiter">:</span> <span class="classifier">Operator</span></dt>
<dd>internal algebraic operator</dd>
</dl>
</div>
`,params:{},inputs:null,outputs:null},Log10:{blockClass:"Log10",description:"Base-10 logarithm operator block.",docstringHtml:`<p>Base-10 logarithm operator block.</p>
<p>This block supports vector inputs. This is the operation it does:</p>
<div class="math">
\\begin{equation*}
\\vec{y} = \\log_{10}(\\vec{u})
\\end{equation*}
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>op_alg <span class="classifier-delimiter">:</span> <span class="classifier">Operator</span></dt>
<dd>internal algebraic operator</dd>
</dl>
</div>
`,params:{},inputs:null,outputs:null},Mod:{blockClass:"Mod",description:"Modulo operator block.",docstringHtml:`<p>Modulo operator block.</p>
<p>This block supports vector inputs. This is the operation it does:</p>
<div class="math">
\\begin{equation*}
\\vec{y} = \\vec{u} \\bmod m
\\end{equation*}
</div>
<div class="section" id="note">
<h3>Note</h3>
<p>modulo is not differentiable at discontinuities</p>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>modulus <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>modulus value</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>op_alg <span class="classifier-delimiter">:</span> <span class="classifier">Operator</span></dt>
<dd>internal algebraic operator</dd>
</dl>
</div>
`,params:{modulus:{type:"number",default:"1.0",description:"modulus value Attributes ----------"}},inputs:null,outputs:null},Clip:{blockClass:"Clip",description:"Clipping/saturation operator block.",docstringHtml:`<p>Clipping/saturation operator block.</p>
<p>This block supports vector inputs. This is the operation it does:</p>
<div class="math">
\\begin{equation*}
\\vec{y} = \\text{clip}(\\vec{u}, u_{min}, u_{max})
\\end{equation*}
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>min_val <span class="classifier-delimiter">:</span> <span class="classifier">float, array_like</span></dt>
<dd>minimum clipping value</dd>
<dt>max_val <span class="classifier-delimiter">:</span> <span class="classifier">float, array_like</span></dt>
<dd>maximum clipping value</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>op_alg <span class="classifier-delimiter">:</span> <span class="classifier">Operator</span></dt>
<dd>internal algebraic operator</dd>
</dl>
</div>
`,params:{min_val:{type:"number",default:"-1.0",description:"minimum clipping value"},max_val:{type:"number",default:"1.0",description:"maximum clipping value Attributes ----------"}},inputs:null,outputs:null},Pow:{blockClass:"Pow",description:"Raise to power operator block.",docstringHtml:`<p>Raise to power operator block.</p>
<p>This block supports vector inputs. This is the operation it does:</p>
<div class="math">
\\begin{equation*}
\\vec{y} = \\vec{u}^{p}
\\end{equation*}
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>exponent <span class="classifier-delimiter">:</span> <span class="classifier">float, array_like</span></dt>
<dd>exponent to raise the input to the power of</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>op_alg <span class="classifier-delimiter">:</span> <span class="classifier">Operator</span></dt>
<dd>internal algebraic operator</dd>
</dl>
</div>
`,params:{exponent:{type:"integer",default:"2",description:"exponent to raise the input to the power of Attributes ----------"}},inputs:null,outputs:null},Atan2:{blockClass:"Atan2",description:"Two-argument arctangent block.",docstringHtml:`<p>Two-argument arctangent block.</p>
<p>Computes the four-quadrant arctangent of two inputs:</p>
<div class="math">
\\begin{equation*}
y = \\mathrm{atan2}(a, b)
\\end{equation*}
</div>
<div class="section" id="note">
<h3>Note</h3>
<p>This block takes exactly two inputs (a, b) and produces one output.
The first input is the y-coordinate, the second is the x-coordinate,
matching the convention of <tt class="docutils literal">numpy.arctan2(y, x)</tt>.</p>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>op_alg <span class="classifier-delimiter">:</span> <span class="classifier">Operator</span></dt>
<dd>internal algebraic operator</dd>
</dl>
</div>
`,params:{},inputs:["a","b"],outputs:["y"]},Rescale:{blockClass:"Rescale",description:"Linear rescaling / mapping block.",docstringHtml:`<p>Linear rescaling / mapping block.</p>
<p>Maps the input linearly from range <tt class="docutils literal">[i0, i1]</tt> to range <tt class="docutils literal">[o0, o1]</tt>.
Optionally saturates the output to <tt class="docutils literal">[o0, o1]</tt>.</p>
<div class="math">
\\begin{equation*}
y = o_0 + \\frac{(x - i_0) \\cdot (o_1 - o_0)}{i_1 - i_0}
\\end{equation*}
</div>
<p>This block supports vector inputs.</p>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>i0 <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>input range lower bound</dd>
<dt>i1 <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>input range upper bound</dd>
<dt>o0 <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>output range lower bound</dd>
<dt>o1 <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>output range upper bound</dd>
<dt>saturate <span class="classifier-delimiter">:</span> <span class="classifier">bool</span></dt>
<dd>if True, clamp output to [min(o0,o1), max(o0,o1)]</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>op_alg <span class="classifier-delimiter">:</span> <span class="classifier">Operator</span></dt>
<dd>internal algebraic operator</dd>
</dl>
</div>
`,params:{i0:{type:"number",default:"0.0",description:"input range lower bound"},i1:{type:"number",default:"1.0",description:"input range upper bound"},o0:{type:"number",default:"0.0",description:"output range lower bound"},o1:{type:"number",default:"1.0",description:"output range upper bound"},saturate:{type:"boolean",default:"false",description:"if True, clamp output to [min(o0,o1), max(o0,o1)]"}},inputs:null,outputs:null},Alias:{blockClass:"Alias",description:"Signal alias / pass-through block.",docstringHtml:`<p>Signal alias / pass-through block.</p>
<p>Passes the input directly to the output without modification.
This is useful for signal renaming in model composition.</p>
<div class="math">
\\begin{equation*}
y = x
\\end{equation*}
</div>
<p>This block supports vector inputs.</p>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>op_alg <span class="classifier-delimiter">:</span> <span class="classifier">Operator</span></dt>
<dd>internal algebraic operator</dd>
</dl>
</div>
`,params:{},inputs:null,outputs:null},Switch:{blockClass:"Switch",description:"Switch block that selects between its inputs.",docstringHtml:`<p>Switch block that selects between its inputs.</p>
<div class="section" id="example">
<h3>Example</h3>
<p>The block is initialized like this:</p>
<pre class="code python literal-block">
#default None -&gt; no passthrough
s1 = Switch()

#selecting port 2 as passthrough
s2 = Switch(2)

#change the state of the switch to port 3
s2.select(3)
</pre>
<p>Sets block output depending on <cite>self.switch_state</cite> like this:</p>
<pre class="code literal-block">
switch_state == None -&gt; outputs[0] = 0

switch_state == 0 -&gt; outputs[0] = inputs[0]

switch_state == 1 -&gt; outputs[0] = inputs[1]

switch_state == 2 -&gt; outputs[0] = inputs[2]

...
</pre>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>switch_state <span class="classifier-delimiter">:</span> <span class="classifier">int, None</span></dt>
<dd>state of the switch</dd>
</dl>
</div>
`,params:{switch_state:{type:"any",default:null,description:"state of the switch"}},inputs:null,outputs:["out"]},LUT:{blockClass:"LUT",description:"N-dimensional lookup table with linear interpolation functionality.",docstringHtml:`<p>N-dimensional lookup table with linear interpolation functionality.</p>
<p>This class implements a multi-dimensional lookup table that uses scipy's
LinearNDInterpolator <a class="footnote-reference" href="#scipy" id="footnote-reference-1">[1]</a> for piecewise linear interpolation in N-dimensional
space. The interpolation is based on Delaunay triangulation of the input points,
providing smooth linear interpolation between data points. For points outside
the convex hull of the input data, the interpolator returns NaN values.</p>
<p>The LUT acts as a Function block.</p>
<div class="section" id="references">
<h3>References</h3>
<table class="docutils footnote" frame="void" id="scipy" rules="none">
<colgroup><col class="label" /><col /></colgroup>
<tbody valign="top">
<tr><td class="label"><a class="fn-backref" href="#footnote-reference-1">[1]</a></td><td><a class="reference external" href="https://docs.scipy.org/doc/scipy-1.16.1/reference/generated/scipy.interpolate.LinearNDInterpolator.html">https://docs.scipy.org/doc/scipy-1.16.1/reference/generated/scipy.interpolate.LinearNDInterpolator.html</a></td></tr>
</tbody>
</table>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>points <span class="classifier-delimiter">:</span> <span class="classifier">array_like of shape (n, ndim)</span></dt>
<dd>2-D array of data point coordinates where n is the number of points
and ndim is the dimensionality of the space. Each row represents a
single data point in ndim-dimensional space.</dd>
<dt>values <span class="classifier-delimiter">:</span> <span class="classifier">array_like of shape (n,) or (n, m)</span></dt>
<dd>N-D array of data values at the corresponding points. If 1-D, represents
scalar values at each point. If 2-D, each column represents a different
output dimension (m output values per input point).</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>points <span class="classifier-delimiter">:</span> <span class="classifier">ndarray</span></dt>
<dd>Stored array of input point coordinates.</dd>
<dt>values <span class="classifier-delimiter">:</span> <span class="classifier">ndarray</span></dt>
<dd>Stored array of output values at each point.</dd>
<dt>inter <span class="classifier-delimiter">:</span> <span class="classifier">scipy.interpolate.LinearNDInterpolator</span></dt>
<dd>The scipy linear interpolator object used for interpolation.</dd>
</dl>
</div>
`,params:{points:{type:"any",default:null,description:"2-D array of data point coordinates where n is the number of points and ndim is the dimensionality of the space. Each row represents a single data point in ndim-dimensional space."},values:{type:"any",default:null,description:"N-D array of data values at the corresponding points. If 1-D, represents scalar values at each point. If 2-D, each column represents a different output dimension (m output values per input point)."}},inputs:null,outputs:null},LUT1D:{blockClass:"LUT1D",description:"One-dimensional lookup table with linear interpolation functionality.",docstringHtml:`<p>One-dimensional lookup table with linear interpolation functionality.</p>
<p>This class implements a 1-dimensional lookup table that uses scipy's interp1d <a class="footnote-reference" href="#scipy" id="footnote-reference-1">[1]</a>
for piecewise linear interpolation along a single axis. The interpolation
provides linear interpolation between adjacent data points and supports
extrapolation beyond the input data range using the 'extrapolate' fill mode.</p>
<p>The LUT1D acts as a Function block.</p>
<div class="section" id="references">
<h3>References</h3>
<table class="docutils footnote" frame="void" id="scipy" rules="none">
<colgroup><col class="label" /><col /></colgroup>
<tbody valign="top">
<tr><td class="label"><a class="fn-backref" href="#footnote-reference-1">[1]</a></td><td><a class="reference external" href="https://docs.scipy.org/doc/scipy-1.16.1/reference/generated/scipy.interpolate.interp1d.html">https://docs.scipy.org/doc/scipy-1.16.1/reference/generated/scipy.interpolate.interp1d.html</a></td></tr>
</tbody>
</table>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>points <span class="classifier-delimiter">:</span> <span class="classifier">array_like of shape (n,)</span></dt>
<dd>1-D array of monotonically increasing data point coordinates where n
is the number of points. These represent the independent variable values
at which the dependent values are known.</dd>
<dt>values <span class="classifier-delimiter">:</span> <span class="classifier">array_like of shape (n,) or (n, m)</span></dt>
<dd>1-D or 2-D array of data values at the corresponding points. If 1-D,
represents scalar values at each point. If 2-D with shape (n, m),
each column represents a different output dimension, allowing the
lookup table to return m-dimensional vectors.</dd>
<dt>fill_value <span class="classifier-delimiter">:</span> <span class="classifier">float or str, optional</span></dt>
<dd>The value to use for points outside the interpolation range. If &quot;extrapolate&quot;,
the interpolator will use linear extrapolation. Default is &quot;extrapolate&quot;.
See <a class="reference external" href="https://docs.scipy.org/doc/scipy-1.16.1/reference/generated/scipy.interpolate.interp1d.html">https://docs.scipy.org/doc/scipy-1.16.1/reference/generated/scipy.interpolate.interp1d.html</a> for more details</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>points <span class="classifier-delimiter">:</span> <span class="classifier">ndarray</span></dt>
<dd>Flattened array of input point coordinates, stored as 1-D array.</dd>
<dt>values <span class="classifier-delimiter">:</span> <span class="classifier">ndarray</span></dt>
<dd>Stored array of output values at each point, preserving original shape.</dd>
<dt>inter <span class="classifier-delimiter">:</span> <span class="classifier">scipy.interpolate.interp1d</span></dt>
<dd>The scipy 1D interpolator object used for linear interpolation with
extrapolation enabled beyond the data range.</dd>
</dl>
</div>
`,params:{points:{type:"any",default:null,description:"1-D array of monotonically increasing data point coordinates where n is the number of points. These represent the independent variable values at which the dependent values are known."},values:{type:"any",default:null,description:"1-D or 2-D array of data values at the corresponding points. If 1-D, represents scalar values at each point. If 2-D with shape (n, m), each column represents a different output dimension, allowing the lookup table to return m-dimensional vectors."},fill_value:{type:"string",default:'"extrapolate"',description:'The value to use for points outside the interpolation range. If "extrapolate", the interpolator will use linear extrapolation. Default is "extrapolate". See https://docs.scipy.org/doc/scipy-1.16.1/reference/generated/scipy.interpolate.interp1d.html for more details'}},inputs:null,outputs:null},GreaterThan:{blockClass:"GreaterThan",description:"Greater-than comparison block.",docstringHtml:`<p>Greater-than comparison block.</p>
<p>Compares two inputs and outputs 1.0 if a &gt; b, else 0.0.</p>
<div class="math">
\\begin{equation*}
y =
\\begin{cases}
1 &amp; , a &gt; b \\\\
0 &amp; , a \\leq b
\\end{cases}
\\end{equation*}
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>op_alg <span class="classifier-delimiter">:</span> <span class="classifier">Operator</span></dt>
<dd>internal algebraic operator</dd>
</dl>
</div>
`,params:{},inputs:["a","b"],outputs:["y"]},LessThan:{blockClass:"LessThan",description:"Less-than comparison block.",docstringHtml:`<p>Less-than comparison block.</p>
<p>Compares two inputs and outputs 1.0 if a &lt; b, else 0.0.</p>
<div class="math">
\\begin{equation*}
y =
\\begin{cases}
1 &amp; , a &lt; b \\\\
0 &amp; , a \\geq b
\\end{cases}
\\end{equation*}
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>op_alg <span class="classifier-delimiter">:</span> <span class="classifier">Operator</span></dt>
<dd>internal algebraic operator</dd>
</dl>
</div>
`,params:{},inputs:["a","b"],outputs:["y"]},Equal:{blockClass:"Equal",description:"Equality comparison block.",docstringHtml:`<p>Equality comparison block.</p>
<p>Compares two inputs and outputs 1.0 if |a - b| &lt;= tolerance, else 0.0.</p>
<div class="math">
\\begin{equation*}
y =
\\begin{cases}
1 &amp; , |a - b| \\leq \\epsilon \\\\
0 &amp; , |a - b| &gt; \\epsilon
\\end{cases}
\\end{equation*}
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>tolerance <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>comparison tolerance for floating point equality</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>op_alg <span class="classifier-delimiter">:</span> <span class="classifier">Operator</span></dt>
<dd>internal algebraic operator</dd>
</dl>
</div>
`,params:{tolerance:{type:"number",default:"1e-12",description:"comparison tolerance for floating point equality"}},inputs:["a","b"],outputs:["y"]},LogicAnd:{blockClass:"LogicAnd",description:"Logical AND block.",docstringHtml:`<p>Logical AND block.</p>
<p>Outputs 1.0 if both inputs are nonzero, else 0.0.</p>
<div class="math">
\\begin{equation*}
y = a \\land b
\\end{equation*}
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>op_alg <span class="classifier-delimiter">:</span> <span class="classifier">Operator</span></dt>
<dd>internal algebraic operator</dd>
</dl>
</div>
`,params:{},inputs:["a","b"],outputs:["y"]},LogicOr:{blockClass:"LogicOr",description:"Logical OR block.",docstringHtml:`<p>Logical OR block.</p>
<p>Outputs 1.0 if either input is nonzero, else 0.0.</p>
<div class="math">
\\begin{equation*}
y = a \\lor b
\\end{equation*}
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>op_alg <span class="classifier-delimiter">:</span> <span class="classifier">Operator</span></dt>
<dd>internal algebraic operator</dd>
</dl>
</div>
`,params:{},inputs:["a","b"],outputs:["y"]},LogicNot:{blockClass:"LogicNot",description:"Logical NOT block.",docstringHtml:`<p>Logical NOT block.</p>
<p>Outputs 1.0 if input is zero, else 0.0.</p>
<div class="math">
\\begin{equation*}
y = \\lnot x
\\end{equation*}
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>op_alg <span class="classifier-delimiter">:</span> <span class="classifier">Operator</span></dt>
<dd>internal algebraic operator</dd>
</dl>
</div>
`,params:{},inputs:null,outputs:null},SampleHold:{blockClass:"SampleHold",description:"Zero-order hold: samples the input periodically and holds it at the output.",docstringHtml:`<p>Zero-order hold: samples the input periodically and holds it at the output.</p>
<div class="math">
\\begin{equation*}
y(t) = u(k T + \\tau), \\quad k T + \\tau \\leq t &lt; (k+1) T + \\tau
\\end{equation*}
</div>
<div class="section" id="note">
<h3>Note</h3>
<p>Supports vector input — each channel is sampled independently.</p>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>T <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>sampling period</dd>
<dt>tau <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>delay before first sample</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>events <span class="classifier-delimiter">:</span> <span class="classifier">list[Schedule]</span></dt>
<dd>internal scheduled event for periodic sampling</dd>
</dl>
</div>
`,params:{T:{type:"number",default:"1.0",description:"sampling period"},tau:{type:"number",default:"0.0",description:"delay before first sample"}},inputs:null,outputs:null},FirstOrderHold:{blockClass:"FirstOrderHold",description:"First-order hold reconstructor.",docstringHtml:`<p>First-order hold reconstructor.</p>
<p>Reconstructs a continuous signal from periodic samples using linear
extrapolation across one sampling interval. Causal (one-sample-lag)
variant matching the Simulink <tt class="docutils literal"><span class="pre">First-Order</span> Hold</tt> block.</p>
<p>Between two consecutive sample times <span class="math">\\(t_{k-1}\\)</span> and <span class="math">\\(t_k\\)</span>,
the output is</p>
<div class="math">
\\begin{equation*}
y(t) = u_{k-1} + \\frac{u_{k-1} - u_{k-2}}{T} (t - t_{k-1})
\\end{equation*}
</div>
<p>During the very first interval (only one sample captured) the output
is held at the most recent sample.</p>
<div class="section" id="note">
<h3>Note</h3>
<p>Supports vector input — each channel is extrapolated independently.</p>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>T <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>sampling period</dd>
<dt>tau <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>delay before first sample</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>events <span class="classifier-delimiter">:</span> <span class="classifier">list[Schedule]</span></dt>
<dd>internal scheduled event for periodic sampling</dd>
</dl>
</div>
`,params:{T:{type:"number",default:"1.0",description:"sampling period"},tau:{type:"number",default:"0.0",description:"delay before first sample"}},inputs:null,outputs:null},FIR:{blockClass:"FIR",description:"Discrete-time Finite-Impulse-Response (FIR) filter.",docstringHtml:`<p>Discrete-time Finite-Impulse-Response (FIR) filter.</p>
<p>Applies an FIR filter to a periodically sampled input signal.</p>
<div class="math">
\\begin{equation*}
y[n] = b_0 x[n] + b_1 x[n-1] + \\dots + b_N x[n-N]
\\end{equation*}
</div>
<p>where <tt class="docutils literal">b</tt> are the filter coefficients and <tt class="docutils literal">N</tt> is the filter order
(number of coefficients minus one). The output is held constant
between sample times.</p>
<div class="section" id="note">
<h3>Note</h3>
<p>Supports vector input — the same coefficients are applied to each
channel in parallel.</p>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>coeffs <span class="classifier-delimiter">:</span> <span class="classifier">array_like</span></dt>
<dd>FIR filter coefficients <tt class="docutils literal">[b0, b1, <span class="pre">...,</span> bN]</tt></dd>
<dt>T <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>sampling period</dd>
<dt>tau <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>delay before first sample</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>events <span class="classifier-delimiter">:</span> <span class="classifier">list[Schedule]</span></dt>
<dd>internal scheduled event for periodic filter evaluation</dd>
</dl>
</div>
`,params:{coeffs:{type:"array",default:"[1.0]",description:"FIR filter coefficients ``[b0, b1, ..., bN]``"},T:{type:"number",default:"1.0",description:"sampling period"},tau:{type:"number",default:"0.0",description:"delay before first sample"}},inputs:null,outputs:null},DiscreteIntegrator:{blockClass:"DiscreteIntegrator",description:"Discrete-time integrator (forward Euler).",docstringHtml:`<p>Discrete-time integrator (forward Euler).</p>
<div class="math">
\\begin{equation*}
y[k+1] = y[k] + T \\, u[k]
\\end{equation*}
</div>
<p>The output at sample <tt class="docutils literal">k</tt> is the accumulated sum of past inputs;
the current input <tt class="docutils literal">u[k]</tt> only enters the next sample.</p>
<div class="section" id="note">
<h3>Note</h3>
<p>Supports vector input — each channel is integrated independently.
Pass an array as <tt class="docutils literal">initial_value</tt> to set per-channel initial values.</p>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>T <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>sampling period</dd>
<dt>tau <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>delay before first sample</dd>
<dt>initial_value <span class="classifier-delimiter">:</span> <span class="classifier">float, array_like</span></dt>
<dd>initial integrator output <tt class="docutils literal">y[0]</tt></dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>events <span class="classifier-delimiter">:</span> <span class="classifier">list[Schedule]</span></dt>
<dd>internal scheduled event for periodic update</dd>
</dl>
</div>
`,params:{T:{type:"number",default:"1.0",description:"sampling period"},tau:{type:"number",default:"0.0",description:"delay before first sample"},initial_value:{type:"number",default:"0.0",description:"initial integrator output ``y[0]``"}},inputs:null,outputs:null},DiscreteDerivative:{blockClass:"DiscreteDerivative",description:"Discrete-time backward-difference derivative.",docstringHtml:`<p>Discrete-time backward-difference derivative.</p>
<div class="math">
\\begin{equation*}
y[k] = \\frac{u[k] - u[k-1]}{T}
\\end{equation*}
</div>
<div class="section" id="note">
<h3>Note</h3>
<p>Supports vector input — each channel is differentiated independently.</p>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>T <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>sampling period</dd>
<dt>tau <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>delay before first sample</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>events <span class="classifier-delimiter">:</span> <span class="classifier">list[Schedule]</span></dt>
<dd>internal scheduled event for periodic update</dd>
</dl>
</div>
`,params:{T:{type:"number",default:"1.0",description:"sampling period"},tau:{type:"number",default:"0.0",description:"delay before first sample"}},inputs:null,outputs:null},DiscreteStateSpace:{blockClass:"DiscreteStateSpace",description:"Discrete-time MIMO state space block.",docstringHtml:`<p>Discrete-time MIMO state space block.</p>
<div class="math">
\\begin{equation*}
\\begin{align}
    x[k+1] &amp;= \\mathbf{A}\\, x[k] + \\mathbf{B}\\, u[k] \\\\
    y[k]   &amp;= \\mathbf{C}\\, x[k] + \\mathbf{D}\\, u[k]
\\end{align}
\\end{equation*}
</div>
<div class="section" id="note">
<h3>Note</h3>
<p>The output port reflects <tt class="docutils literal">y[k]</tt> for the duration of the current
sample interval (zero-order hold between updates). The direct
feedthrough term <tt class="docutils literal">D u[k]</tt> is computed at the sample event, so the
block has no algebraic passthrough between updates.</p>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>A, B, C, D <span class="classifier-delimiter">:</span> <span class="classifier">array_like</span></dt>
<dd>discrete state space matrices</dd>
<dt>T <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>sampling period</dd>
<dt>tau <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>delay before first sample</dd>
<dt>initial_value <span class="classifier-delimiter">:</span> <span class="classifier">array_like, None</span></dt>
<dd>initial state <tt class="docutils literal">x[0]</tt></dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>events <span class="classifier-delimiter">:</span> <span class="classifier">list[Schedule]</span></dt>
<dd>internal scheduled event for periodic update</dd>
</dl>
</div>
`,params:{A:{type:"number",default:"0.0",description:""},B:{type:"number",default:"1.0",description:""},C:{type:"number",default:"1.0",description:""},D:{type:"number",default:"0.0",description:"discrete state space matrices"},T:{type:"number",default:"1.0",description:"sampling period"},tau:{type:"number",default:"0.0",description:"delay before first sample"},initial_value:{type:"any",default:null,description:"initial state ``x[0]``"}},inputs:null,outputs:null},DiscreteTransferFunction:{blockClass:"DiscreteTransferFunction",description:"Discrete-time SISO transfer function in numerator/denominator form.",docstringHtml:`<p>Discrete-time SISO transfer function in numerator/denominator form.</p>
<div class="math">
\\begin{equation*}
H(z) = \\frac{b_0 z^M + b_1 z^{M-1} + \\dots + b_M}{a_0 z^N + a_1 z^{N-1} + \\dots + a_N}
\\end{equation*}
</div>
<p>Realized internally as a <tt class="docutils literal">DiscreteStateSpace</tt> via the controllable
canonical form returned by <tt class="docutils literal">scipy.signal.tf2ss</tt>.</p>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>Num <span class="classifier-delimiter">:</span> <span class="classifier">array_like</span></dt>
<dd>numerator polynomial coefficients (highest power of z first)</dd>
<dt>Den <span class="classifier-delimiter">:</span> <span class="classifier">array_like</span></dt>
<dd>denominator polynomial coefficients (highest power of z first)</dd>
<dt>T <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>sampling period</dd>
<dt>tau <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>delay before first sample</dd>
</dl>
</div>
`,params:{Num:{type:"array",default:"[1.0]",description:"numerator polynomial coefficients (highest power of z first)"},Den:{type:"array",default:"[1.0, 0.0]",description:"denominator polynomial coefficients (highest power of z first)"},T:{type:"number",default:"1.0",description:"sampling period"},tau:{type:"number",default:"0.0",description:"delay before first sample"}},inputs:["in"],outputs:["out"]},TappedDelay:{blockClass:"TappedDelay",description:"Tapped delay line.",docstringHtml:`<p>Tapped delay line.</p>
<p>Outputs the current and <tt class="docutils literal"><span class="pre">N-1</span></tt> past samples of the input as parallel
signals. The block has <tt class="docutils literal">N</tt> outputs:</p>
<div class="math">
\\begin{equation*}
y_i[k] = u[k - i], \\quad i = 0, 1, \\dots, N-1
\\end{equation*}
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>N <span class="classifier-delimiter">:</span> <span class="classifier">int</span></dt>
<dd>number of taps (output ports)</dd>
<dt>T <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>sampling period</dd>
<dt>tau <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>delay before first sample</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>events <span class="classifier-delimiter">:</span> <span class="classifier">list[Schedule]</span></dt>
<dd>internal scheduled event for periodic shift</dd>
</dl>
</div>
`,params:{N:{type:"integer",default:"2",description:"number of taps (output ports)"},T:{type:"number",default:"1.0",description:"sampling period"},tau:{type:"number",default:"0.0",description:"delay before first sample"}},inputs:["in"],outputs:null},ADC:{blockClass:"ADC",description:"Models an ideal Analog-to-Digital Converter (ADC).",docstringHtml:`<p>Models an ideal Analog-to-Digital Converter (ADC).</p>
<p>This block samples an analog input signal periodically, quantizes it
according to the specified number of bits and input span, and outputs
the resulting digital code on multiple output ports. The sampling
is triggered by a scheduled event.</p>
<p>Functionality:</p>
<ol class="arabic simple">
<li>Samples the analog input <cite>inputs[0]</cite> at intervals of <cite>T</cite>, starting after delay <cite>tau</cite>.</li>
<li>Clips the input voltage to the defined <cite>span</cite> [min_voltage, max_voltage].</li>
<li>Scales the clipped voltage to the range [0, 1].</li>
<li>Quantizes the scaled value to an integer code between 0 and 2^n_bits - 1 using flooring.</li>
<li>Converts the integer code to an n_bits binary representation.</li>
<li>Outputs the binary code on ports 0 (LSB) to n_bits-1 (MSB).</li>
</ol>
<p>Ideal characteristics:</p>
<ul class="simple">
<li>Instantaneous sampling at scheduled times.</li>
<li>Perfect, noise-free quantization.</li>
<li>No aperture jitter or other dynamic errors.</li>
</ul>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>n_bits <span class="classifier-delimiter">:</span> <span class="classifier">int, optional</span></dt>
<dd>Number of bits for the digital output code. Default is 4.</dd>
<dt>span <span class="classifier-delimiter">:</span> <span class="classifier">list[float] or tuple[float], optional</span></dt>
<dd>The valid analog input value range [min_voltage, max_voltage].
Inputs outside this range will be clipped. Default is [-1, 1].</dd>
<dt>T <span class="classifier-delimiter">:</span> <span class="classifier">float, optional</span></dt>
<dd>Sampling period (time between samples). Default is 1 time unit.</dd>
<dt>tau <span class="classifier-delimiter">:</span> <span class="classifier">float, optional</span></dt>
<dd>Initial delay before the first sample is taken. Default is 0.</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>events <span class="classifier-delimiter">:</span> <span class="classifier">list[Schedule]</span></dt>
<dd>Internal scheduled event responsible for periodic sampling and conversion.</dd>
</dl>
</div>
`,params:{n_bits:{type:"integer",default:"4",description:"Number of bits for the digital output code. Default is 4."},span:{type:"array",default:"[-1, 1]",description:"The valid analog input value range [min_voltage, max_voltage]. Inputs outside this range will be clipped. Default is [-1, 1]."},T:{type:"integer",default:"1",description:"Sampling period (time between samples). Default is 1 time unit."},tau:{type:"integer",default:"0",description:"Initial delay before the first sample is taken. Default is 0."}},inputs:["in"],outputs:null},DAC:{blockClass:"DAC",description:"Models an ideal Digital-to-Analog Converter (DAC).",docstringHtml:`<p>Models an ideal Digital-to-Analog Converter (DAC).</p>
<p>This block reads a digital input code periodically from its input ports,
reconstructs the corresponding analog value based on the number of bits
and output span, and holds the output constant between updates. The update
is triggered by a scheduled event.</p>
<p>Functionality:</p>
<ol class="arabic simple">
<li>Reads the digital code from input ports 0 (LSB) to n_bits-1 (MSB) at intervals of <cite>T</cite>, starting after delay <cite>tau</cite>.</li>
<li>Interprets the inputs as an unsigned binary integer code.</li>
<li>Converts the integer code to a fractional value between 0 and (2^n_bits - 1) / 2^n_bits.</li>
<li>Scales this fractional value to the specified analog output <cite>span</cite>.</li>
<li>Outputs the resulting analog value on <cite>outputs[0]</cite>.</li>
<li>Holds the output value constant until the next scheduled update.</li>
</ol>
<p>Ideal characteristics:</p>
<ul class="simple">
<li>Instantaneous update at scheduled times.</li>
<li>Perfect, noise-free reconstruction.</li>
<li>No glitches or settling time.</li>
</ul>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>n_bits <span class="classifier-delimiter">:</span> <span class="classifier">int, optional</span></dt>
<dd>Number of digital input bits expected. Default is 4.</dd>
<dt>span <span class="classifier-delimiter">:</span> <span class="classifier">list[float] or tuple[float], optional</span></dt>
<dd>The analog output value range [min_voltage, max_voltage] corresponding
to the digital codes 0 and 2^n_bits - 1, respectively (approximately).
Default is [-1, 1].</dd>
<dt>T <span class="classifier-delimiter">:</span> <span class="classifier">float, optional</span></dt>
<dd>Update period (time between output updates). Default is 1 time unit.</dd>
<dt>tau <span class="classifier-delimiter">:</span> <span class="classifier">float, optional</span></dt>
<dd>Initial delay before the first output update. Default is 0.</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>events <span class="classifier-delimiter">:</span> <span class="classifier">list[Schedule]</span></dt>
<dd>Internal scheduled event responsible for periodic updates.</dd>
</dl>
</div>
`,params:{n_bits:{type:"integer",default:"4",description:"Number of digital input bits expected. Default is 4."},span:{type:"array",default:"[-1, 1]",description:"The analog output value range [min_voltage, max_voltage] corresponding to the digital codes 0 and 2^n_bits - 1, respectively (approximately). Default is [-1, 1]."},T:{type:"integer",default:"1",description:"Update period (time between output updates). Default is 1 time unit."},tau:{type:"integer",default:"0",description:"Initial delay before the first output update. Default is 0."}},inputs:null,outputs:["out"]},Counter:{blockClass:"Counter",description:"Counts the number of detected bidirectional threshold crossings.",docstringHtml:`<p>Counts the number of detected bidirectional threshold crossings.</p>
<p>Uses zero-crossing events for the detection and sets the output
accordingly.</p>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>start <span class="classifier-delimiter">:</span> <span class="classifier">int</span></dt>
<dd>counter start (initial condition)</dd>
<dt>threshold <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>threshold for zero crossing</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>E <span class="classifier-delimiter">:</span> <span class="classifier">ZeroCrossing</span></dt>
<dd>internal event manager</dd>
<dt>events <span class="classifier-delimiter">:</span> <span class="classifier">list[ZeroCrossing]</span></dt>
<dd>internal zero crossing event</dd>
</dl>
</div>
`,params:{start:{type:"integer",default:"0",description:"counter start (initial condition)"},threshold:{type:"number",default:"0.0",description:"threshold for zero crossing Attributes ----------"}},inputs:["in"],outputs:["out"]},CounterUp:{blockClass:"CounterUp",description:"Counts the number of detected unidirectional (lo->hi) threshold crossings.",docstringHtml:`<p>Counts the number of detected unidirectional (lo-&gt;hi) threshold crossings.</p>
<div class="section" id="note">
<h3>Note</h3>
<p>This is a modification of 'Counter' which only counts
unidirectional zero-crossings (low -&gt; high)</p>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>start <span class="classifier-delimiter">:</span> <span class="classifier">int</span></dt>
<dd>counter start (initial condition)</dd>
<dt>threshold <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>threshold for zero crossing</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>E <span class="classifier-delimiter">:</span> <span class="classifier">ZeroCrossingUp</span></dt>
<dd>internal event manager</dd>
<dt>events <span class="classifier-delimiter">:</span> <span class="classifier">list[ZeroCrossing]</span></dt>
<dd>internal zero crossing event</dd>
</dl>
</div>
`,params:{start:{type:"integer",default:"0",description:"counter start (initial condition)"},threshold:{type:"number",default:"0.0",description:"threshold for zero crossing Attributes ----------"}},inputs:["in"],outputs:["out"]},CounterDown:{blockClass:"CounterDown",description:"Counts the number of detected unidirectional (hi->lo) threshold crossings.",docstringHtml:`<p>Counts the number of detected unidirectional (hi-&gt;lo) threshold crossings.</p>
<div class="section" id="note">
<h3>Note</h3>
<p>This is a modification of 'Counter' which only counts
unidirectional zero-crossings (high -&gt; low)</p>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>start <span class="classifier-delimiter">:</span> <span class="classifier">int</span></dt>
<dd>counter start (initial condition)</dd>
<dt>threshold <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>threshold for zero crossing</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>E <span class="classifier-delimiter">:</span> <span class="classifier">ZeroCrossingDown</span></dt>
<dd>internal event manager</dd>
<dt>events <span class="classifier-delimiter">:</span> <span class="classifier">list[ZeroCrossing]</span></dt>
<dd>internal zero crossing event</dd>
</dl>
</div>
`,params:{start:{type:"integer",default:"0",description:"counter start (initial condition)"},threshold:{type:"number",default:"0.0",description:"threshold for zero crossing Attributes ----------"}},inputs:["in"],outputs:["out"]},Relay:{blockClass:"Relay",description:"Relay block with hysteresis (Schmitt trigger).",docstringHtml:`<p>Relay block with hysteresis (Schmitt trigger).</p>
<p>Switches output between two values based on input crossing upper and lower
thresholds. The hysteresis prevents rapid switching when input is noisy.</p>
<p>When input rises above <cite>threshold_up</cite>, output switches to <cite>value_up</cite>.
When input falls below <cite>threshold_down</cite>, output switches to <cite>value_down</cite>.</p>
<div class="section" id="examples">
<h3>Examples</h3>
<p>Basic thermostat that turns heater on below 19°C, off above 21°C:</p>
<pre class="code python literal-block">
from pathsim.blocks import Relay

thermostat = Relay(
    threshold_up=21.0,
    threshold_down=19.0,
    value_up=0.0,
    value_down=1.0
    )
</pre>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>threshold_up <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>threshold for transitioning to upper relay state <cite>value_up</cite> (default: 1.0)</dd>
<dt>threshold_down <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>threshold for transitioning to lower relay state <cite>value_down</cite> (default: 0.0)</dd>
<dt>value_up <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>value for upper relay state (default: 1.0)</dd>
<dt>value_down <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>value for lower relay state (default: 0.0)</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>events <span class="classifier-delimiter">:</span> <span class="classifier">list[ZeroCrossingUp, ZeroCrossingDown]</span></dt>
<dd>internal zero crossing events for relay state transitions</dd>
</dl>
</div>
`,params:{threshold_up:{type:"number",default:"1.0",description:"threshold for transitioning to upper relay state `value_up` (default: 1.0)"},threshold_down:{type:"number",default:"0.0",description:"threshold for transitioning to lower relay state `value_down` (default: 0.0)"},value_up:{type:"number",default:"1.0",description:"value for upper relay state (default: 1.0)"},value_down:{type:"number",default:"0.0",description:"value for lower relay state (default: 0.0)"}},inputs:["in"],outputs:["out"]},Wrapper:{blockClass:"Wrapper",description:"Wrapper block for discrete implementation and external code integration.",docstringHtml:`<p>Wrapper block for discrete implementation and external code integration.</p>
<p>The <cite>Wrapper</cite> class is designed to call the internal <cite>func</cite> at fixed intervals
using an internal <cite>Schedule</cite> event. This makes it particularly useful for wrapping
external code or implementing discrete-time systems.</p>
<p>Essentially this block does the same as <cite>Function</cite> with the difference that its
not evaluated continuously but periodically at discrete times.</p>
<div class="section" id="example">
<h3>Example</h3>
<p>There are two ways to setup the <cite>Wrapper</cite>, first and standard way is to define
a function to be wrapped and pass it to the block initializer:</p>
<pre class="code python literal-block">
from pathsim.blocks import Wrapper

#function to be wrapped
def func(a, b, c):
    return a * (b + c)

wrp = Wrapper(func, T=0.1)
</pre>
<p>Another option is to use the <cite>dec</cite> classmethod, which might be more convenient
in some situations:</p>
<pre class="code python literal-block">
from pathsim.blocks import Wrapper

&#64;Wrapper.dec(T=0.1)
def wrp(a, b, c):
    return a * (b + c)
</pre>
<p>This way the internal function of the block <cite>wrp</cite> will be evaluated with a period
of <cite>T=0.1</cite> and its outputs updated accordingly.</p>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>func <span class="classifier-delimiter">:</span> <span class="classifier">callable</span></dt>
<dd>function that defines algebraic block IO behaviour</dd>
<dt>T <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>sampling period for the wrapped function</dd>
<dt>tau <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>delay time for the start time of the event</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>Evt <span class="classifier-delimiter">:</span> <span class="classifier">Schedule</span></dt>
<dd>internal event. Used for periodic sampling the wrapped method</dd>
</dl>
</div>
`,params:{func:{type:"callable",default:null,description:"function that defines algebraic block IO behaviour"},T:{type:"integer",default:"1",description:"sampling period for the wrapped function"},tau:{type:"integer",default:"0",description:"delay time for the start time of the event Attributes ----------"}},inputs:null,outputs:null},Scope:{blockClass:"Scope",description:"Block for recording time domain data with variable sampling period.",docstringHtml:`<p>Block for recording time domain data with variable sampling period.</p>
<p>A time threshold can be set by <cite>t_wait</cite> to start recording data after the simulation
time is larger then the specified waiting time, i.e. <cite>t - t_wait &gt; 0</cite>.
This is useful for recording data only after all the transients have settled.</p>
<p>The block uses an internal <cite>Schedule</cite> event, when <cite>sampling_period</cite> is provided,
otherwise it just samples at every simulation timestep.</p>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>sampling_period <span class="classifier-delimiter">:</span> <span class="classifier">float, None</span></dt>
<dd>time between samples, default is every timestep</dd>
<dt>t_wait <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>wait time before starting recording, optional</dd>
<dt>labels <span class="classifier-delimiter">:</span> <span class="classifier">list[str]</span></dt>
<dd>labels for the scope traces, and for the csv, optional</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>recording_time <span class="classifier-delimiter">:</span> <span class="classifier">list[float]</span></dt>
<dd>recorded time points</dd>
<dt>recording_data <span class="classifier-delimiter">:</span> <span class="classifier">list[float]</span></dt>
<dd>recorded data points</dd>
<dt>_incremental_idx <span class="classifier-delimiter">:</span> <span class="classifier">int</span></dt>
<dd>index for incremental reading of accumulated data since last
call of incremental read</dd>
<dt>events <span class="classifier-delimiter">:</span> <span class="classifier">list[Schedule]</span></dt>
<dd>internal scheduled event for periodic input sampling when
<cite>sampling_period</cite> is provided, recording directly in its action</dd>
</dl>
</div>
`,params:{sampling_period:{type:"any",default:null,description:"time between samples, default is every timestep"},t_wait:{type:"number",default:"0.0",description:"wait time before starting recording, optional"},labels:{type:"any",default:null,description:"labels for the scope traces, and for the csv, optional"}},inputs:null,outputs:[]},Spectrum:{blockClass:"Spectrum",description:"Block for fourier spectrum analysis (spectrum analyzer).",docstringHtml:`<p>Block for fourier spectrum analysis (spectrum analyzer).</p>
<p>Computes continuous time running fourier transform (RFT) of the incoming signal.</p>
<p>A time threshold can be set by 't_wait' to start recording data only after the
simulation time is larger then the specified waiting time, i.e. 't - t_wait &gt; dt'.
This is useful for recording the steady state after all the transients have settled.</p>
<p>An exponential forgetting factor 'alpha' can be specified for realtime spectral
analysis. It biases the spectral components exponentially to the most recent signal
values by applying a single sided exponential window like this:</p>
<div class="math">
\\begin{equation*}
\\int_0^t u(\\tau) \\exp(\\alpha (t-\\tau))  \\exp(-j \\omega \\tau)\\ d \\tau
\\end{equation*}
</div>
<p>It is also known as the 'exponentially forgetting transform' (EFT) and a form of
short time fourier transform (STFT). It is implemented as a 1st order statespace model</p>
<div class="math">
\\begin{equation*}
\\dot{x} = - \\alpha  x +  \\exp(-j \\omega t) u
\\end{equation*}
</div>
<p>where 'u' is the input signal and 'x' is the state variable that represents the
complex fourier coefficient to the frequency 'omega'. The ODE is integrated using the
numerical integration engine of the block.</p>
<div class="section" id="example">
<h3>Example</h3>
<p>This is how to initialize it:</p>
<pre class="code python literal-block">
import numpy as np

#linear frequencies (0Hz, DC -&gt; 1kHz)
sp1 = Spectrum(
    freq=np.linspace(0, 1e3, 100),
    labels=['x1', 'x2'] #labels for two inputs
    )

#log frequencies (1Hz -&gt; 1kHz)
sp2 = Spectrum(
    freq=np.logspace(0, 3, 100)
    )

#log frequencies including DC (0Hz, DC + 1Hz -&gt; 1kHz)
sp3 = Spectrum(
    freq=np.hstack([0.0, np.logspace(0, 3, 100)])
    )

#arbitrary frequencies
sp4 = Spectrum(
    freq=np.array([0, 0.5, 20, 1e3])
    )
</pre>
</div>
<div class="section" id="note">
<h3>Note</h3>
<p>This block is relatively slow! But it is valuable for long running simulations
with few evaluation frequencies, where just FFT'ing the time series data
wouldnt be efficient OR if only the evaluation at weirdly spaced frequencies
is required. Otherwise its more efficient to just do an FFT on the time
series recording after the simulation has finished.</p>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>freq <span class="classifier-delimiter">:</span> <span class="classifier">array[float]</span></dt>
<dd>list of evaluation frequencies for RFT, can be arbitrarily spaced</dd>
<dt>t_wait <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>wait time before starting RFT</dd>
<dt>alpha <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>exponential forgetting factor for realtime spectrum</dd>
<dt>labels <span class="classifier-delimiter">:</span> <span class="classifier">list[str]</span></dt>
<dd>labels for the inputs</dd>
</dl>
</div>
`,params:{freq:{type:"array",default:"[]",description:"list of evaluation frequencies for RFT, can be arbitrarily spaced"},t_wait:{type:"number",default:"0.0",description:"wait time before starting RFT"},alpha:{type:"number",default:"0.0",description:"exponential forgetting factor for realtime spectrum"},labels:{type:"array",default:"[]",description:"labels for the inputs"}},inputs:null,outputs:[]},Subsystem:{blockClass:"Subsystem",description:"Subsystem class that holds its own blocks and connecions and",docstringHtml:`<p>Subsystem class that holds its own blocks and connecions and
can natively interface with the main simulation loop.</p>
<p>IO interface is realized by a special 'Interface' block, that has extra
methods for setting and getting inputs and outputs and serves
as the interface of the internal blocks to the outside.</p>
<p>The subsystem doesnt use its 'inputs' and 'outputs' dicts directly.
It exclusively handles data transfer via the 'Interface' block.</p>
<p>This class can be used just like any other block during the simulation,
since it implements the required methods 'update' for the fixed-point
iteration (resolving algebraic loops with instant time blocks),
the 'step' method that performs timestepping (especially for dynamic
blocks with internal states) and the 'solve' method for solving the
implicit update equation for implicit solvers.</p>
<div class="section" id="example">
<h3>Example</h3>
<p>This is how we can wrap up multiple blocks within a subsystem.
In this case vanderpol system built from discrete components
instead of using an ODE block (in practice you should use
a monolithic ODE whenever possible due to performance).</p>
<pre class="code python literal-block">
from pathsim import Subsystem, Interface, Connection
from pathsim.blocks import Integrator, Function

#van der Pol parameter
mu = 1000

#blocks in the subsystem
If = Interface() # this is the interface to the outside
I1 = Integrator(2)
I2 = Integrator(0)
Fn = Function(lambda x1, x2: mu*(1 - x1**2)*x2 - x1)

sub_blocks = [If, I1, I2, Fn]

#connections in the subsystem
sub_connections = [
    Connection(I2, I1, Fn[1], If[1]),
    Connection(I1, Fn, If),
    Connection(Fn, I2)
    ]

#the subsystem acts just like a normal block
vdp = Subsystem(sub_blocks, sub_connections)
</pre>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>blocks <span class="classifier-delimiter">:</span> <span class="classifier">list[Block] | None</span></dt>
<dd>internal blocks of the subsystem</dd>
<dt>connections <span class="classifier-delimiter">:</span> <span class="classifier">list[Connection] | None</span></dt>
<dd>internal connections of the subsystem</dd>
</dl>
<p>events : list[Event] | None
tolerance_fpi : float</p>
<blockquote>
absolute tolerance for convergence of algebraic loops
default see ´SIM_TOLERANCE_FPI´ in ´_constants.py´</blockquote>
<dl class="docutils">
<dt>iterations_max <span class="classifier-delimiter">:</span> <span class="classifier">int</span></dt>
<dd>maximum allowed number of iterations for algebraic loop
solver, default see ´SIM_ITERATIONS_MAX´ in ´_constants.py´</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>interface <span class="classifier-delimiter">:</span> <span class="classifier">Interface</span></dt>
<dd>internal interface block for data transfer to the outside</dd>
<dt>graph <span class="classifier-delimiter">:</span> <span class="classifier">Graph</span></dt>
<dd>internal graph representation for fast system funcion
evluations using DAG with algebraic depths</dd>
<dt>boosters <span class="classifier-delimiter">:</span> <span class="classifier">None | list[ConnectionBooster]</span></dt>
<dd>list of boosters (fixed point accelerators) that wrap
algebraic loop closing connections assembled from the
system graph</dd>
</dl>
</div>
`,params:{},inputs:[],outputs:[]},Interface:{blockClass:"Interface",description:"Bare-bone block that serves as a data interface for the 'Subsystem' class.",docstringHtml:`<p>Bare-bone block that serves as a data interface for the 'Subsystem' class.</p>
<p>It works like this:</p>
<ul class="simple">
<li>Internal blocks of the subsystem are connected to the inputs and outputs
of this Interface block via the internal connections.</li>
<li>It behaves like a normal block (inherits the main 'Block' class methods).</li>
<li>It implements some special methods to get and set the inputs and outputs
of the blocks, that are used to translate between the internal blocks of the
subsystem and the inputs and outputs of the subsystem.</li>
<li>Handles data transfer to and from the internal subsystem blocks
to and from the inputs and outputs of the subsystem.</li>
</ul>
`,params:{},inputs:[],outputs:[]}},Hs={Sources:["Constant","Source","SinusoidalSource","StepSource","PulseSource","TriangleWaveSource","SquareWaveSource","GaussianPulseSource","ChirpPhaseNoiseSource","ClockSource","WhiteNoise","PinkNoise","RandomNumberGenerator"],Dynamic:["Integrator","Differentiator","Delay","ODE","DynamicalSystem","StateSpace","PT1","PT2","LeadLag","PID","AntiWindupPID","RateLimiter","Backlash","Deadband","TransferFunctionNumDen","TransferFunctionZPG","ButterworthLowpassFilter","ButterworthHighpassFilter","ButterworthBandpassFilter","ButterworthBandstopFilter"],Algebraic:["Adder","Multiplier","Divider","Amplifier","Function","Polynomial","Sin","Cos","Tan","Tanh","Abs","Sqrt","Exp","Log","Log10","Mod","Clip","Pow","Atan2","Rescale","Alias","Switch","LUT","LUT1D"],Logic:["GreaterThan","LessThan","Equal","LogicAnd","LogicOr","LogicNot"],Discrete:["SampleHold","FirstOrderHold","FIR","DiscreteIntegrator","DiscreteDerivative","DiscreteStateSpace","DiscreteTransferFunction","TappedDelay","ADC","DAC","Counter","CounterUp","CounterDown","Relay","Wrapper"],Recording:["Scope","Spectrum"]},tn={ADC:"pathsim.blocks",Abs:"pathsim.blocks",Adder:"pathsim.blocks",Alias:"pathsim.blocks",Amplifier:"pathsim.blocks",AntiWindupPID:"pathsim.blocks",Atan2:"pathsim.blocks",Backlash:"pathsim.blocks",ButterworthBandpassFilter:"pathsim.blocks",ButterworthBandstopFilter:"pathsim.blocks",ButterworthHighpassFilter:"pathsim.blocks",ButterworthLowpassFilter:"pathsim.blocks",ChirpPhaseNoiseSource:"pathsim.blocks",Clip:"pathsim.blocks",ClockSource:"pathsim.blocks",Constant:"pathsim.blocks",Cos:"pathsim.blocks",Counter:"pathsim.blocks",CounterDown:"pathsim.blocks",CounterUp:"pathsim.blocks",DAC:"pathsim.blocks",Deadband:"pathsim.blocks",Delay:"pathsim.blocks",Differentiator:"pathsim.blocks",DiscreteDerivative:"pathsim.blocks",DiscreteIntegrator:"pathsim.blocks",DiscreteStateSpace:"pathsim.blocks",DiscreteTransferFunction:"pathsim.blocks",Divider:"pathsim.blocks",DynamicalSystem:"pathsim.blocks",Equal:"pathsim.blocks",Exp:"pathsim.blocks",FIR:"pathsim.blocks",FirstOrderHold:"pathsim.blocks",Function:"pathsim.blocks",GaussianPulseSource:"pathsim.blocks",GreaterThan:"pathsim.blocks",Integrator:"pathsim.blocks",LUT:"pathsim.blocks",LUT1D:"pathsim.blocks",LeadLag:"pathsim.blocks",LessThan:"pathsim.blocks",Log:"pathsim.blocks",Log10:"pathsim.blocks",LogicAnd:"pathsim.blocks",LogicNot:"pathsim.blocks",LogicOr:"pathsim.blocks",Mod:"pathsim.blocks",Multiplier:"pathsim.blocks",ODE:"pathsim.blocks",PID:"pathsim.blocks",PT1:"pathsim.blocks",PT2:"pathsim.blocks",PinkNoise:"pathsim.blocks",Polynomial:"pathsim.blocks",Pow:"pathsim.blocks",PulseSource:"pathsim.blocks",RandomNumberGenerator:"pathsim.blocks",RateLimiter:"pathsim.blocks",Relay:"pathsim.blocks",Rescale:"pathsim.blocks",SampleHold:"pathsim.blocks",Scope:"pathsim.blocks",Sin:"pathsim.blocks",SinusoidalSource:"pathsim.blocks",Source:"pathsim.blocks",Spectrum:"pathsim.blocks",Sqrt:"pathsim.blocks",SquareWaveSource:"pathsim.blocks",StateSpace:"pathsim.blocks",StepSource:"pathsim.blocks",Switch:"pathsim.blocks",Tan:"pathsim.blocks",Tanh:"pathsim.blocks",TappedDelay:"pathsim.blocks",TransferFunctionNumDen:"pathsim.blocks",TransferFunctionZPG:"pathsim.blocks",TriangleWaveSource:"pathsim.blocks",WhiteNoise:"pathsim.blocks",Wrapper:"pathsim.blocks"};function lt(e){if(e==null||e==="None"||e==="")return null;let s=String(e).trim();return s.length===0||((s.startsWith("'")&&s.endsWith("'")||s.startsWith('"')&&s.endsWith('"'))&&(s=s.slice(1,-1)),s.length===0)?null:[...s]}const Rs={Scope:{param:"labels",direction:"input"},Spectrum:{param:"labels",direction:"input"},Adder:{param:"operations",direction:"input",parser:lt},Divider:{param:"operations",direction:"input",parser:lt}};function sn(e){const s=Rs[e];return s?Array.isArray(s)?s:[s]:[]}const zs=new Set(["Integrator","Differentiator","Delay","Amplifier","Sin","Cos","Tan","Tanh","Abs","Sqrt","Exp","Log","Log10","Mod","Clip","Pow","Polynomial","Rescale","Alias","LogicNot","SampleHold","FirstOrderHold","DiscreteIntegrator","DiscreteDerivative"]),Lt="builtin";class Bs{nodes=new Map;byCategory=new Map;bySource=new Map;register(s,t=Lt){this.nodes.has(s.type)&&(console.warn(`[nodeRegistry] replacing "${s.type}" (was ${this.nodes.get(s.type)?.source}, now ${t})`),this.removeFromIndexes(s.type)),this.nodes.set(s.type,{definition:s,source:t});const a=this.byCategory.get(s.category)??new Set;a.add(s.type),this.byCategory.set(s.category,a);const i=this.bySource.get(t)??new Set;i.add(s.type),this.bySource.set(t,i),rt()}unregisterSource(s){const t=Array.from(this.bySource.get(s)??[]);for(const a of t)this.removeFromIndexes(a),this.nodes.delete(a);return this.bySource.delete(s),t.length>0&&rt(),t}removeFromIndexes(s){const t=this.nodes.get(s);if(!t)return;const a=this.byCategory.get(t.definition.category);a&&(a.delete(s),a.size===0&&this.byCategory.delete(t.definition.category));const i=this.bySource.get(t.source);i&&(i.delete(s),i.size===0&&this.bySource.delete(t.source))}get(s){return this.nodes.get(s)?.definition}getSource(s){return this.nodes.get(s)?.source}getByCategory(s){const t=this.byCategory.get(s);return t?Array.from(t).map(a=>this.nodes.get(a)?.definition).filter(a=>!!a):[]}getBySource(s){const t=this.bySource.get(s);return t?Array.from(t).map(a=>this.nodes.get(a)?.definition).filter(a=>!!a):[]}getAllCategories(){return Array.from(this.byCategory.keys())}getAllSources(){return Array.from(this.bySource.keys())}getAll(){return Array.from(this.nodes.values()).map(s=>s.definition)}has(s){return this.nodes.has(s)}get size(){return this.nodes.size}}const Nt=fs(0);function rt(){Nt.update(e=>e+1)}const an={subscribe:Nt.subscribe},js=new Bs;function Ws(e,s,t){const a={};for(const[p,c]of Object.entries(t.params))a[p]={type:c.type,default:c.default,description:c.description,min:c.min,max:c.max,options:c.options};let i,n;t.inputs===null?(i=void 0,n=null):t.inputs.length>0?(i=t.inputs,n=t.inputs.length):(i=[],n=0);let l,d;t.outputs===null?(l=void 0,d=null):t.outputs.length>0?(l=t.outputs,d=t.outputs.length):(l=[],d=0);const r=Fs({name:e,category:s,blockClass:t.blockClass,description:t.description,inputs:i,outputs:l,maxInputs:n,maxOutputs:d,syncPorts:zs.has(e),params:a});t.docstringHtml&&(r.docstring=t.docstringHtml),js.register(r,Lt)}function Gs(){for(const[e,s]of Object.entries(Hs))for(const t of s){const a=Es[t];a?Ws(t,e,a):console.warn(`Block "${t}" not found in extracted blocks`)}}Gs();const Ks=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <path d="M 62 19 L 62 14 L 34 14 L 44 32 L 34 50 L 62 50 L 62 45"/>
</svg>
`,Us=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <line x1="18" y1="32" x2="34" y2="32"/>
  <line x1="62" y1="32" x2="78" y2="32"/>
  <path d="M 34 22 H 56 L 62 32 L 56 42 H 34 Z"/>
  <circle cx="40" cy="32" r="2" fill="currentColor" stroke="none"/>
</svg>
`,Ys=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="27,14 27,50 69,32"/>
</svg>
`,Zs=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <line x1="32" y1="32" x2="64" y2="32"/>
  <circle cx="48" cy="20" r="3" fill="currentColor" stroke="none"/>
  <circle cx="48" cy="44" r="3" fill="currentColor" stroke="none"/>
</svg>
`,Xs=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <line x1="32" y1="25" x2="64" y2="25"/>
  <line x1="32" y1="39" x2="64" y2="39"/>
</svg>
`,Vs=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <path d="M 36 17 L 62 32 L 36 47"/>
</svg>
`,Qs=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <line x1="48" y1="12" x2="48" y2="52" stroke-dasharray="4 3"/>
  <path d="M 24 22 L 42 22 M 36 16 L 42 22 L 36 28"/>
  <path d="M 54 42 L 72 42 M 66 36 L 72 42 L 66 48"/>
</svg>
`,Js=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <path d="M 60 17 L 34 32 L 60 47"/>
</svg>
`,$s=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <path d="M 34 14 H 48 A 18 18 0 0 1 48 50 H 34 Z"/>
</svg>
`,ea=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="30,14 30,50 58,32"/>
  <circle cx="62" cy="32" r="4"/>
</svg>
`,ta=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <path d="M 30 14 Q 41 32 30 50 Q 54 50 66 32 Q 54 14 30 14 Z"/>
</svg>
`,sa=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <path d="M 36 50 L 36 14 M 60 50 L 60 14 M 31 14 L 65 14"/>
</svg>
`,aa=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <rect x="6" y="8" width="84" height="48" rx="3" stroke-dasharray="4 3"/>
  <rect x="14" y="20" width="18" height="10" rx="1.5"/>
  <rect x="39" y="34" width="18" height="10" rx="1.5"/>
  <rect x="64" y="20" width="18" height="10" rx="1.5"/>
</svg>
`,ia=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <line x1="22" y1="22" x2="40" y2="22"/>
  <line x1="22" y1="42" x2="40" y2="42"/>
  <line x1="56" y1="32" x2="74" y2="32"/>
  <line x1="40" y1="22" x2="56" y2="32"/>
  <circle cx="40" cy="22" r="2.5" fill="currentColor" stroke="none"/>
  <circle cx="40" cy="42" r="2.5" fill="currentColor" stroke="none"/>
  <circle cx="56" cy="32" r="2.5" fill="currentColor" stroke="none"/>
</svg>
`,na=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <line x1="10" y1="56" x2="88" y2="56"/>
  <line x1="12" y1="8" x2="12" y2="58"/>
  <path d="M 16 18 L 22 18 L 22 13 L 32 13 L 32 18 L 80 18"/>
  <path d="M 16 28 L 34 28 L 34 23 L 44 23 L 44 28 L 80 28"/>
  <path d="M 16 38 L 46 38 L 46 33 L 56 33 L 56 38 L 80 38"/>
  <path d="M 16 48 L 58 48 L 58 43 L 68 43 L 68 48 L 80 48"/>
</svg>
`,la=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <rect x="22" y="12" width="52" height="40" rx="4" stroke-dasharray="4 3"/>
  <rect x="36" y="24" width="24" height="16" rx="2"/>
</svg>
`,U={x0:14,x1:82,y0:14,y1:50,get width(){return this.x1-this.x0},get height(){return this.y1-this.y0}},Ce=4,$={x0:U.x0-Ce,x1:U.x1+Ce,y0:U.y0-Ce,y1:U.y1+Ce};function _e(e,s=0,t=1){const a=(e-s)/(t-s);return U.x0+a*U.width}function xe(e,s=0,t=1){const a=(e-s)/(t-s);return U.y1-a*U.height}function ot(e,s=0,t=1,a=0,i=1){if(e.length===0)return"";const n=[];let l=!1;for(const[d,r]of e){if(!Number.isFinite(r)){l=!1;continue}const p=_e(d,s,t).toFixed(2),c=xe(r,a,i).toFixed(2);n.push(`${l?"L":"M"} ${p} ${c}`),l=!0}return n.join(" ")}function ra(e=1.5,s=64){const t=[];for(let a=0;a<s;a++){const i=a/(s-1);t.push([i,Math.sin(2*Math.PI*e*i)])}return t}function oa(e=2){const s=[],t=1/e;for(let a=0;a<e;a++){const i=a*t;s.push([i,1]),s.push([i+t/2,1]),s.push([i+t/2,-1]),s.push([i+t,-1]),a<e-1&&s.push([i+t,1])}return s}function da(e=2,s=81){const t=[];for(let a=0;a<s;a++){const i=a/(s-1),n=i*e*4%4,l=n<1?n:n<3?2-n:n-4;t.push([i,l])}return t}function ca(e=.6,s=.5,t=.05,a=.15,i=.07){const n=[[0,0]];let l=t;for(;l<1;){n.push([l,0]),n.push([Math.min(1,l+a),1]);const d=l+e*s;n.push([Math.min(1,d),1]),n.push([Math.min(1,d+i),0]),l+=e}return n.push([1,0]),n}function pa(e=.25){return[[0,0],[e,0],[e,1],[1,1]]}function ua(e=.5,s=.13,t=80){const a=[];for(let i=0;i<t;i++){const n=i/(t-1);a.push([n,Math.exp(-((n-e)**2)/(2*s*s))])}return a}function fa(e=1,s=6,t=120){const a=[];for(let i=0;i<t;i++){const n=i/(t-1),l=s-e,d=2*Math.PI*(e*n+.5*l*n*n);a.push([n,Math.sin(d)])}return a}function ha(e=28,s=5){let t=s;const a=()=>(t=(t*9301+49297)%233280,t/233280),i=[];for(let l=0;l<e;l++){const d=Math.max(1e-6,a()),r=a();i.push(Math.sqrt(-2*Math.log(d))*Math.cos(2*Math.PI*r))}const n=Math.max(...i.map(Math.abs));return i.map((l,d)=>[d/(e-1),l/n*.95])}function ma(e=35,s=11){let t=s;const a=()=>(t=(t*9301+49297)%233280,t/233280-.5),i=5,n=new Array(i).fill(0),l=new Array(i).fill(0),d=[];for(let p=0;p<e;p++){let c=0;for(let h=0;h<i;h++)l[h]===0&&(n[h]=a(),l[h]=1<<h),l[h]--,c+=n[h];d.push(c)}const r=Math.max(...d.map(Math.abs));return d.map((p,c)=>[c/(e-1),p/r*.9])}function ga(e=1){return[[0,e],[1,e]]}function va(e=.32,s=.06){const t=[[0,0]];let a=s;for(;a<1;){t.push([a,0]),t.push([a,1]);const i=Math.min(1,a+e/2);t.push([i,1]),t.push([i,0]),a+=e}return t.push([1,0]),t}function ba(e=.18,s=.15,t=60){const a=[];for(let i=0;i<t;i++){const n=i/(t-1);n<s?a.push([n,0]):a.push([n,1-Math.exp(-(n-s)/e)])}return a}function Ue(e=.25,s=22,t=.15,a=100){const i=[],n=s*Math.sqrt(1-e*e),l=Math.atan2(Math.sqrt(1-e*e),e);for(let d=0;d<a;d++){const r=d/(a-1);if(r<t)i.push([r,0]);else{const p=r-t,c=Math.exp(-e*s*p)/Math.sqrt(1-e*e);i.push([r,1-c*Math.sin(n*p+l)])}}return i}function ya(e=60){const s=[];for(let d=0;d<e;d++){const r=d/(e-1);if(r<.15)s.push([r,0]);else{const p=r-.15,c=1.4*Math.exp(-p/.06)+1*(1-Math.exp(-p/.25));s.push([r,c])}}return s}function ka(e=.15){return[[0,0],[e,0],[1,1-e]]}function wa(e=1,s=64){const t=[];for(let a=0;a<s;a++){const i=a/(s-1);t.push([i,Math.sin(2*Math.PI*e*i)])}return t}function _a(e=.25,s=1,t=56){const a=[[0,0],[e,0]];for(let i=1;i<t;i++){const n=e+(1-e)*(i/(t-1));a.push([n,Math.sin(2*Math.PI*s*(n-e))])}return a}function xa(e=4,s=80){const t=[];for(let n=0;n<s;n++){const l=n/(s-1),d=Math.pow(10,-1.2+l*(1.2- -1.2));t.push([l,1/Math.sqrt(1+Math.pow(d,2*e))])}return t}function Sa(e=4,s=80){const t=[];for(let n=0;n<s;n++){const l=n/(s-1),d=Math.pow(10,-1.2+l*(1.2- -1.2));t.push([l,Math.pow(d,e)/Math.sqrt(1+Math.pow(d,2*e))])}return t}function Ta(e=2,s=2,t=100){const a=[];for(let l=0;l<t;l++){const d=l/(t-1),r=Math.pow(10,-1.5+d*(1.5- -1.5)),p=Math.pow(r/s,e),c=Math.sqrt(Math.pow(1-r*r,2*e)+Math.pow(r/s,2*e));a.push([d,p/c])}return a}function Da(e=2,s=2,t=100){const a=[];for(let l=0;l<t;l++){const d=l/(t-1),r=Math.pow(10,-1.5+d*(1.5- -1.5)),p=Math.pow(Math.abs(1-r*r),e),c=Math.sqrt(Math.pow(1-r*r,2*e)+Math.pow(r/s,2*e));a.push([d,p/c])}return a}function Ca(e=80){const s=[],i=Math.pow(10,1.2);for(let n=0;n<e;n++){const l=n/(e-1),d=Math.pow(10,-1.2+l*(1.2- -1.2));s.push([l,d/i])}return s}function qa(e=80){const s=[];for(let t=0;t<e;t++){const a=t/(e-1),i=Math.pow(10,-1.2+a*2.4),n=Math.abs(Math.sin(i*1.2)/(i*1.2+1e-4)),l=1/Math.sqrt(1+Math.pow(i/1,6));s.push([a,n*l])}return s}function Aa(e=80){const s=[];for(let t=0;t<e;t++){const a=-Math.PI+2*Math.PI*t/(e-1);s.push([a,Math.sin(a)])}return s}function Ia(e=80){const s=[];for(let t=0;t<e;t++){const a=-Math.PI+2*Math.PI*t/(e-1);s.push([a,Math.cos(a)])}return s}function Ma(e=4,s=80){const t=[];for(let a=0;a<s;a++){const i=-1+2*a/(s-1);t.push([i,Math.atan(i*e)/(Math.PI/2)])}return t}function Pa(e=2,s=60){const t=[];for(let a=0;a<s;a++){const i=-1+2*a/(s-1);t.push([i,Math.pow(i,e)])}return t}function dt(e=6){const s=[];for(let t=0;t<e;t++){const a=t/e,i=(t+1)/e,n=t/(e-1);s.push([a,n]),s.push([i,n])}return s}function La(e=6){const s=[];for(let t=0;t<e;t++){const a=t/e,i=(t+1)/e,n=1-t/(e-1);s.push([a,n]),s.push([i,n])}return s}function Na(e=.12,s=100){return Ue(.4,18,e,s)}function Oa(e=3){const s=[],t=1/e;for(let a=0;a<e;a++){const i=a*t;s.push([i,0]),s.push([i+t,1]),a<e-1&&s.push([i+t,0])}return s}function Fa(e=1.55,s=240){const t=[];for(let a=0;a<s;a++){const i=-Math.PI+2*Math.PI*a/(s-1),n=Math.tan(i);!Number.isFinite(n)||Math.abs(n)>e?t.push([i,NaN]):t.push([i,n])}return t}function Ea(){return[[-1,-.6],[-.5,-.55],[-.05,0],[.4,.55],[.75,.75],[1,.78]]}function Ha(e=.4,s=80){const t=[];for(let n=0;n<s;n++){const l=n/(s-1),d=Math.pow(10,-1.2+l*(1.2- -1.2)),r=Math.sqrt(Math.pow(1-d*d,2)+Math.pow(2*e*d,2));t.push([l,1/r])}return t}function Ra(e=4,s=60){const t=[];for(let a=0;a<s;a++){const i=-1+2*(a/(s-1));t.push([i,Math.tanh(i*e)])}return t}function za(e=60){const s=[];for(let t=0;t<e;t++){const a=t/(e-1);s.push([a,(Math.exp(a*2.2)-1)/(Math.exp(2.2)-1)])}return s}function ct(e=60){const s=[];for(let t=0;t<e;t++){const a=t/(e-1);s.push([a,Math.log(1+9*a)/Math.log(10)])}return s}function Ba(e=60){const s=[];for(let t=0;t<e;t++){const a=t/(e-1);s.push([a,Math.sqrt(a)])}return s}function ja(e=60){const s=[];for(let t=0;t<e;t++){const a=-1+2*(t/(e-1));s.push([a,Math.abs(a)])}return s}function Wa(e=.6){return[[-1,-e],[-e,-e],[e,e],[1,e]]}function Ga(e=.3){return[[-1,-1+e],[-e,0],[e,0],[1,1-e]]}function Ka(e=.3){return[[-1,-1],[e,-1],[e,1],[1,1],[-e,1],[-e,-1],[-1,-1]]}function Ua(){return[[0,0],[.15,0],[.15+.45,1],[1,1]]}function Ya(e=6){const s=[],t=[.1,.3,.55,.75,.55,.85];for(let a=0;a<e;a++){const i=a/e,n=(a+1)/e;s.push([i,t[a]]),s.push([n,t[a]])}return s}function Za(e=6){const s=[.1,.3,.55,.75,.55,.85],t=[];for(let a=0;a<e;a++)t.push([a/(e-1),s[a]]);return t}function Xa(e=.42,s=.8){return[[-1,-s],[-1+2*e,-s],[1,s],[1-2*e,s],[-1,-s]]}function Va(e=11,s=7){let t=s;const a=()=>(t=(t*9301+49297)%233280,t/233280),i=[];for(let n=0;n<e;n++)i.push([(n+.5)/e,a()*1.8-.9]);return i}const Qa=.85,Ja=1.15;function Ye(e){return Qa*Math.sin(2*Math.PI*Ja*e)}function pt(e=90){return Array.from({length:e},(s,t)=>{const a=t/(e-1);return[a,Ye(a)]})}function $a(e=7){return Array.from({length:e},(s,t)=>{const a=(t+.5)/e;return[a,Ye(a)]})}function ei(e=7){const s=[];for(let t=0;t<e;t++){const a=Ye((t+.5)/e);s.push([t/e,a]),s.push([(t+1)/e,a])}return s}function ti(e=1.45,s=3,t=200){const a=[];for(let i=0;i<t;i++){const n=i/(t-1);a.push([n,Math.exp(-e*n)*Math.sin(2*Math.PI*s*n)])}return a}function si(){return[[.1,.28],[.22,1],[.34,.2],[.46,.62],[.58,.16],[.7,.4],[.82,.14],[.94,.24]]}function ai(e=.82,s=.12,t=100){return Ue(.4,18,s,t).map(([a,i])=>[a,Math.min(i,e)])}const ie=[-1.05,1.05],K=[-1.1,1.1],ut=[-.7,.7],Re=[0,1.5],ii=[0,1.6],ze=[-Math.PI*1.05,Math.PI*1.05],ni=[0,1.6],Ot={Constant:{kind:"plot",samples:()=>ga()},StepSource:{kind:"plot",samples:()=>pa()},SinusoidalSource:{kind:"plot",samples:()=>ra(),yRange:K},SquareWaveSource:{kind:"plot",samples:()=>oa(),yRange:K},TriangleWaveSource:{kind:"plot",samples:()=>da(),yRange:K},PulseSource:{kind:"plot",samples:()=>ca()},GaussianPulseSource:{kind:"plot",samples:()=>ua()},ChirpPhaseNoiseSource:{kind:"plot",samples:()=>fa(),yRange:K},WhiteNoise:{kind:"plot",samples:()=>ha(),yRange:K},PinkNoise:{kind:"plot",samples:()=>ma(),yRange:K},RandomNumberGenerator:{kind:"plot",samples:()=>Va(),yRange:K,stems:!0},ClockSource:{kind:"plot",samples:()=>va()},Source:{kind:"math",latex:"f(t)"},PT1:{kind:"plot",samples:()=>ba()},PT2:{kind:"plot",samples:()=>Ue(),yRange:Re},LeadLag:{kind:"plot",samples:()=>ya(),yRange:ii},Integrator:{kind:"plot",samples:()=>ka()},Differentiator:{kind:"plot",samples:()=>Ca()},Delay:{kind:"plot",samples:()=>_a(),samplesDashed:()=>wa(),yRange:K},PID:{kind:"plot",samples:()=>Na(),yRange:Re},AntiWindupPID:{kind:"plot",samples:()=>ai(),yRange:Re},ButterworthLowpassFilter:{kind:"plot",samples:()=>xa()},ButterworthHighpassFilter:{kind:"plot",samples:()=>Sa()},ButterworthBandpassFilter:{kind:"plot",samples:()=>Ta()},ButterworthBandstopFilter:{kind:"plot",samples:()=>Da()},FIR:{kind:"plot",samples:()=>qa()},TransferFunctionNumDen:{kind:"plot",samples:()=>Ha(.35),yRange:ni},TransferFunctionZPG:{kind:"pz"},Tanh:{kind:"plot",samples:()=>Ra(),xRange:ie,yRange:K},Exp:{kind:"plot",samples:()=>za()},Log:{kind:"plot",samples:()=>ct()},Log10:{kind:"plot",samples:()=>ct(),badge:"10"},Sqrt:{kind:"plot",samples:()=>Ba()},Abs:{kind:"plot",samples:()=>ja(),xRange:ie,axes:"baseline"},Clip:{kind:"plot",samples:()=>Wa(),xRange:ie,yRange:ut},Deadband:{kind:"plot",samples:()=>Ga(),xRange:ie,yRange:ut,axes:"yaxis"},Relay:{kind:"plot",samples:()=>Ka(.45),xRange:ie,yRange:K,axes:"none"},RateLimiter:{kind:"plot",samples:()=>Ua()},SampleHold:{kind:"plot",samples:()=>Ya()},Backlash:{kind:"plot",samples:()=>Xa(),xRange:ie,yRange:K},Sin:{kind:"plot",samples:()=>Aa(),xRange:ze,yRange:K},Cos:{kind:"plot",samples:()=>Ia(),xRange:ze,yRange:K},Tan:{kind:"plot",samples:()=>Fa(),xRange:ze,yRange:[-1.6,1.6],asymptotes:[-Math.PI/2,Math.PI/2]},Pow:{kind:"plot",samples:()=>Pa(2),xRange:ie},Mod:{kind:"plot",samples:()=>Oa()},Atan2:{kind:"plot",samples:()=>Ma(),xRange:ie,yRange:[-1.25,1.25]},ADC:{kind:"plot",samples:()=>$a(),samplesDashed:()=>pt(),yRange:K,stems:!0},DAC:{kind:"plot",samples:()=>ei(),samplesDashed:()=>pt(),yRange:K},Counter:{kind:"plot",samples:()=>dt()},CounterUp:{kind:"plot",samples:()=>dt(),decoration:"arrow-up"},CounterDown:{kind:"plot",samples:()=>La(),decoration:"arrow-down"},LUT1D:{kind:"plot",samples:()=>Ea(),xRange:ie,yRange:K,markers:!0},LUT:{kind:"surface",fn:(e,s)=>-.18*(e+s)+.3*e*s},ODE:{kind:"math",latex:"\\dot{x} = f(x, u, t)"},StateSpace:{kind:"math",latex:"\\dot{x} = Ax{+}Bu"},DynamicalSystem:{kind:"math",latex:"\\begin{aligned}\\dot{x} &= f\\\\ y &= g\\end{aligned}"},DynamicalFunction:{kind:"math",latex:"f(u, t)"},Function:{kind:"math",latex:"f(u)"},Polynomial:{kind:"math",latex:"\\sum c_k\\,u^{k}"},FirstOrderHold:{kind:"plot",samples:()=>Za(),markers:!0},DiscreteIntegrator:{kind:"math",latex:"\\dfrac{T}{z-1}"},DiscreteDerivative:{kind:"math",latex:"\\dfrac{z-1}{T\\,z}"},DiscreteStateSpace:{kind:"math",latex:"x_{k+1} = Ax_k{+}Bu_k"},DiscreteTransferFunction:{kind:"math",latex:"\\dfrac{B(z)}{A(z)}"},TappedDelay:{kind:"svg",name:"TappedDelay"},Adder:{kind:"svg",name:"Adder"},Multiplier:{kind:"svg",name:"Multiplier"},Amplifier:{kind:"svg",name:"Amplifier"},Rescale:{kind:"svg",name:"Amplifier"},Divider:{kind:"svg",name:"Divider"},LogicAnd:{kind:"svg",name:"LogicAnd"},LogicOr:{kind:"svg",name:"LogicOr"},LogicNot:{kind:"svg",name:"LogicNot"},Equal:{kind:"svg",name:"Equal"},GreaterThan:{kind:"svg",name:"GreaterThan"},LessThan:{kind:"svg",name:"LessThan"},Alias:{kind:"svg",name:"Alias"},Wrapper:{kind:"svg",name:"Wrapper"},Switch:{kind:"svg",name:"Switch"},Subsystem:{kind:"svg",name:"Subsystem"},Interface:{kind:"svg",name:"Interface"},Scope:{kind:"scope",samples:()=>ti(),yRange:[-1.15,1.15],gridX:4,gridY:2},Spectrum:{kind:"scope",samples:()=>si(),yRange:[0,1.12],gridX:0,gridY:2,bars:!0}};function li(e){return e?Ot[e]:void 0}function ri(e){return!!e&&e in Ot}var oi=F("<line></line>"),di=F("<line></line>"),ci=F('<g class="axis svelte-1384908"><!><!></g>'),pi=F('<line class="asymptote svelte-1384908"></line>'),ui=F('<path class="ghost svelte-1384908" stroke-dasharray="3.5 3"></path>'),fi=F('<line></line><circle r="2.4" fill="currentColor" stroke="none"></circle>',1),hi=F("<path></path>"),mi=F('<circle r="2.8" fill="currentColor" stroke="none"></circle>'),gi=F('<path d="M 86 44 L 86 22 M 82 26 L 86 22 L 90 26"></path>'),vi=F('<path d="M 86 22 L 86 44 M 82 40 L 86 44 L 90 40"></path>'),bi=F(`<text text-anchor="start" dominant-baseline="hanging" fill="currentColor" stroke="none" font-family="ui-monospace, 'JetBrains Mono', 'SF Mono', Menlo, monospace" font-size="11" font-weight="600"> </text>`),yi=F('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="svelte-1384908"><!><!><!><!><!><!><!></svg>');function ki(e,s){ge(s,!0);let t=Y(s,"xRange",19,()=>[0,1]),a=Y(s,"yRange",19,()=>[0,1]),i=Y(s,"axes",3,"cross"),n=Y(s,"markers",3,!1),l=Y(s,"stems",3,!1);const d=N(()=>ot(s.samples,t()[0],t()[1],a()[0],a()[1])),r=N(()=>s.samplesDashed?ot(s.samplesDashed,t()[0],t()[1],a()[0],a()[1]):""),p=N(()=>a()[0]<=0&&a()[1]>=0?xe(0,a()[0],a()[1]):$.y1),c=N(()=>t()[0]<0&&t()[1]>0?_e(0,t()[0],t()[1]):$.x0),h=N(()=>s.samples.filter(([,q])=>Number.isFinite(q))),m=N(()=>(s.asymptotes??[]).map(q=>_e(q,t()[0],t()[1])));var x=yi(),T=V(x);{var _=q=>{var P=ci(),I=V(P);{var M=W=>{var O=oi();E(()=>{g(O,"x1",$.x0),g(O,"y1",o(p)),g(O,"x2",$.x1),g(O,"y2",o(p))}),A(W,O)};j(I,W=>{(i()==="baseline"||i()==="cross")&&W(M)})}var L=G(I);{var z=W=>{var O=di();E(()=>{g(O,"x1",o(c)),g(O,"y1",$.y0),g(O,"x2",o(c)),g(O,"y2",$.y1)}),A(W,O)};j(L,W=>{(i()==="yaxis"||i()==="cross")&&W(z)})}Q(P),A(q,P)};j(T,q=>{i()!=="none"&&q(_)})}var u=G(T);oe(u,17,()=>o(m),re,(q,P)=>{var I=pi();E(()=>{g(I,"x1",o(P)),g(I,"y1",U.y0),g(I,"x2",o(P)),g(I,"y2",U.y1)}),A(q,I)});var f=G(u);{var w=q=>{var P=ui();E(()=>g(P,"d",o(r))),A(q,P)};j(f,q=>{o(r)&&q(w)})}var S=G(f);{var b=q=>{var P=J(),I=Z(P);oe(I,17,()=>o(h),re,(M,L)=>{var z=N(()=>Te(o(L),2));let W=()=>o(z)[0],O=()=>o(z)[1];const B=N(()=>_e(W(),t()[0],t()[1]));var se=fi(),ee=Z(se),ae=G(ee);E((de,ue)=>{g(ee,"x1",o(B)),g(ee,"y1",o(p)),g(ee,"x2",o(B)),g(ee,"y2",de),g(ae,"cx",o(B)),g(ae,"cy",ue)},[()=>xe(O(),a()[0],a()[1]),()=>xe(O(),a()[0],a()[1])]),A(M,se)}),A(q,P)},k=q=>{var P=hi();E(()=>g(P,"d",o(d))),A(q,P)};j(S,q=>{l()?q(b):q(k,!1)})}var v=G(S);{var y=q=>{var P=J(),I=Z(P);oe(I,17,()=>o(h),re,(M,L)=>{var z=N(()=>Te(o(L),2));let W=()=>o(z)[0],O=()=>o(z)[1];var B=mi();E((se,ee)=>{g(B,"cx",se),g(B,"cy",ee)},[()=>_e(W(),t()[0],t()[1]),()=>xe(O(),a()[0],a()[1])]),A(M,B)}),A(q,P)};j(v,q=>{n()&&q(y)})}var D=G(v);{var H=q=>{var P=gi();A(q,P)},C=q=>{var P=J(),I=Z(P);{var M=L=>{var z=vi();A(L,z)};j(I,L=>{s.decoration==="arrow-down"&&L(M)},!0)}A(q,P)};j(D,q=>{s.decoration==="arrow-up"?q(H):q(C,!1)})}var X=G(D);{var te=q=>{var P=bi(),I=V(P,!0);Q(P),E(()=>{g(P,"x",$.x0+4),g(P,"y",$.y0),Dt(I,s.badge)}),A(q,P)};j(X,q=>{s.badge&&q(te)})}Q(x),A(e,x),ve()}let qe=null;async function wi(){return qe||(qe=await gs(()=>import("./XbL3y5x-.js"),[],import.meta.url),qe)}function nn(){return"https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"}var _i=Tt('<span class="math svelte-1io0tjp"><span class="inner svelte-1io0tjp"><!></span></span>');function xi(e,s){ge(s,!0);let t=De(""),a=De(void 0),i=De(void 0),n=De(1);const l=1.6,d=.4,r=6,p=4;async function c(){if(await St(),!o(a)||!o(i))return;const _=o(i).clientWidth-2*r,u=o(i).clientHeight-2*p,f=o(a).scrollWidth,w=o(a).scrollHeight;if(f===0||w===0||_<=0||u<=0)return;const S=Math.min(_/f,u/w);be(n,Math.max(d,Math.min(l,S)),!0)}us(async()=>{const _=await wi();try{be(t,_.default.renderToString(s.latex,{displayMode:!0,throwOnError:!1,strict:!1,output:"html"}),!0)}catch{be(t,s.latex,!0)}await c()}),Qe(()=>{o(t)&&c()}),Qe(()=>{if(!o(i))return;const _=new ResizeObserver(()=>c());return _.observe(o(i)),()=>_.disconnect()});var h=_i(),m=V(h),x=V(m);{var T=_=>{var u=J(),f=Z(u);Ct(f,()=>o(t)),A(_,u)};j(x,_=>{o(t)&&_(T)})}Q(m),$e(m,_=>be(a,_),()=>o(a)),Q(h),$e(h,_=>be(i,_),()=>o(i)),E(()=>At(m,`transform: scale(${o(n)??""});`)),A(e,h),ve()}var Si=F(`<svg xmlns="http://www.w3.org/2000/svg" class="svelte-61qc8h"><text text-anchor="middle" dominant-baseline="central" fill="currentColor" stroke="none" font-family="ui-monospace, 'JetBrains Mono', 'SF Mono', Menlo, monospace" letter-spacing="-1"> </text></svg>`);function Ti(e,s){let t=Y(s,"size",3,.45),a=Y(s,"bold",3,!0);const i=96,n=64,l=N(()=>n*t());var d=Si();g(d,"viewBox","0 0 96 64");var r=V(d);g(r,"x",i/2),g(r,"y",n/2);var p=V(r,!0);Q(r),Q(d),E(()=>{g(r,"font-size",o(l)),g(r,"font-weight",a()?700:500),Dt(p,s.text)}),A(e,d)}var Di=F("<line></line>"),Ci=F("<line></line>"),qi=F('<line class="bar svelte-odzmgb"></line>'),Ai=F('<!><line class="baseline svelte-odzmgb"></line>',1),Ii=F('<path stroke-width="1.6" stroke-dasharray="4 4" stroke-dashoffset="2"></path>'),Mi=F('<path stroke-width="1.6"></path><!>',1),Pi=F('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="svelte-odzmgb"><rect rx="4" stroke-width="1.6"></rect><g class="grid svelte-odzmgb"><!><!></g><!></svg>');function Li(e,s){ge(s,!0);let t=Y(s,"yRange",19,()=>[-1.1,1.1]),a=Y(s,"gridX",3,4),i=Y(s,"gridY",3,3),n=Y(s,"bars",3,!1);const l={x0:6,x1:90,y0:7,y1:57},d=l.x1-l.x0,r=l.y1-l.y0,p=7,c=6,h=l.x0+p,m=l.x1-p,x=l.y0+c,T=l.y1-c;function _(I){return h+I*(m-h)}function u(I){const M=(I-t()[0])/(t()[1]-t()[0]);return T-M*(T-x)}function f(I){return I.map(([M,L],z)=>`${z===0?"M":"L"} ${_(M).toFixed(2)} ${u(L).toFixed(2)}`).join(" ")}const w=N(()=>n()?"":f(s.samples)),S=N(()=>s.samples2?f(s.samples2):""),b=N(()=>a()>1?Array.from({length:a()-1},(I,M)=>l.x0+(M+1)*d/a()):[]),k=N(()=>i()>1?Array.from({length:i()-1},(I,M)=>l.y0+(M+1)*r/i()):[]),v=N(()=>u(t()[0]));var y=Pi(),D=V(y),H=G(D),C=V(H);oe(C,17,()=>o(b),re,(I,M)=>{var L=Di();E(()=>{g(L,"x1",o(M)),g(L,"y1",l.y0+2),g(L,"x2",o(M)),g(L,"y2",l.y1-2)}),A(I,L)});var X=G(C);oe(X,17,()=>o(k),re,(I,M)=>{var L=Ci();E(()=>{g(L,"x1",l.x0+2),g(L,"y1",o(M)),g(L,"x2",l.x1-2),g(L,"y2",o(M))}),A(I,L)}),Q(H);var te=G(H);{var q=I=>{var M=Ai(),L=Z(M);oe(L,17,()=>s.samples,re,(W,O)=>{var B=N(()=>Te(o(O),2));let se=()=>o(B)[0],ee=()=>o(B)[1];var ae=qi();E((de,ue,Le)=>{g(ae,"x1",de),g(ae,"y1",o(v)),g(ae,"x2",ue),g(ae,"y2",Le)},[()=>_(se()),()=>_(se()),()=>u(ee())]),A(W,ae)});var z=G(L);E(()=>{g(z,"x1",h),g(z,"y1",o(v)),g(z,"x2",m),g(z,"y2",o(v))}),A(I,M)},P=I=>{var M=Mi(),L=Z(M),z=G(L);{var W=O=>{var B=Ii();E(()=>g(B,"d",o(S))),A(O,B)};j(z,O=>{o(S)&&O(W)})}E(()=>g(L,"d",o(w))),A(I,M)};j(te,I=>{n()?I(q):I(P,!1)})}Q(y),E(()=>{g(D,"x",l.x0),g(D,"y",l.y0),g(D,"width",d),g(D,"height",r)}),A(e,y),ve()}var Ni=F('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="svelte-16dl6zq"><path stroke-width="1.5"></path><path stroke-width="1.5"></path></svg>');function Oi(e,s){ge(s,!0);let t=Y(s,"rows",3,5),a=Y(s,"cols",3,5),i=Y(s,"fn",3,(w,S)=>.5*(w*w-S*S));const n=48,l=36,d=17,r=.45,p=11;function c(w,S,b){const k=n+(w-S)*d,v=l+(w+S)*d*r-b*p;return[k,v]}const h=N(()=>{const w=[];for(let S=0;S<t();S++){const b=-1+2*S/(t()-1),k=[];for(let v=0;v<a();v++){const y=-1+2*v/(a()-1);k.push(c(y,b,i()(y,b)))}w.push(k)}return w});function m(w){const S=[];for(let b=0;b<w.length;b++){S.push(`M ${w[b][0][0].toFixed(2)} ${w[b][0][1].toFixed(2)}`);for(let k=1;k<w[b].length;k++)S.push(`L ${w[b][k][0].toFixed(2)} ${w[b][k][1].toFixed(2)}`)}for(let b=0;b<w[0].length;b++){S.push(`M ${w[0][b][0].toFixed(2)} ${w[0][b][1].toFixed(2)}`);for(let k=1;k<w.length;k++)S.push(`L ${w[k][b][0].toFixed(2)} ${w[k][b][1].toFixed(2)}`)}return S.join(" ")}const x=N(()=>m(o(h))),T=N(()=>{if(o(h).length===0)return"";const w=t()-1,S=a()-1,b=[];for(let k=0;k<=S;k++)b.push(o(h)[0][k]);for(let k=1;k<=w;k++)b.push(o(h)[k][S]);for(let k=S-1;k>=0;k--)b.push(o(h)[w][k]);for(let k=w-1;k>=1;k--)b.push(o(h)[k][0]);return b.map(([k,v],y)=>`${y===0?"M":"L"} ${k.toFixed(2)} ${v.toFixed(2)}`).join(" ")+" Z"});var _=Ni(),u=V(_),f=G(u);Q(_),E(()=>{g(u,"d",o(x)),g(f,"d",o(T))}),A(e,_),ve()}var Fi=F("<path></path>"),Ei=F("<circle></circle>"),Hi=F('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="svelte-9ooiz"><g class="axis svelte-9ooiz"><line></line><line></line></g><!><!></svg>');function Ri(e,s){ge(s,!0);let t=Y(s,"poles",19,()=>[[-.55,.6],[-.55,-.6]]),a=Y(s,"zeros",19,()=>[[.45,0]]);const i=(U.x0+U.x1)/2,n=(U.y0+U.y1)/2,l=U.width/2,d=U.height/2,r=f=>i+f*l,p=f=>n-f*d,c=3.4;var h=Hi(),m=V(h),x=V(m),T=G(x);Q(m);var _=G(m);oe(_,17,t,re,(f,w)=>{var S=N(()=>Te(o(w),2));let b=()=>o(S)[0],k=()=>o(S)[1];const v=N(()=>r(b())),y=N(()=>p(k()));var D=Fi();E(()=>g(D,"d",`M ${o(v)-c} ${o(y)-c} L ${o(v)+c} ${o(y)+c} M ${o(v)+c} ${o(y)-c} L ${o(v)-c} ${o(y)+c}`)),A(f,D)});var u=G(_);oe(u,17,a,re,(f,w)=>{var S=N(()=>Te(o(w),2));let b=()=>o(S)[0],k=()=>o(S)[1];var v=Ei();g(v,"r",c),E((y,D)=>{g(v,"cx",y),g(v,"cy",D)},[()=>r(b()),()=>p(k())]),A(f,v)}),Q(h),E(()=>{g(x,"x1",$.x0),g(x,"y1",n),g(x,"x2",$.x1),g(x,"y2",n),g(T,"x1",i),g(T,"y1",$.y0),g(T,"x2",i),g(T,"y2",$.y1)}),A(e,h),ve()}const zi=Object.assign({"./blocks/svg/Adder.svg":Ks,"./blocks/svg/Alias.svg":Us,"./blocks/svg/Amplifier.svg":Ys,"./blocks/svg/Divider.svg":Zs,"./blocks/svg/Equal.svg":Xs,"./blocks/svg/GreaterThan.svg":Vs,"./blocks/svg/Interface.svg":Qs,"./blocks/svg/LessThan.svg":Js,"./blocks/svg/LogicAnd.svg":$s,"./blocks/svg/LogicNot.svg":ea,"./blocks/svg/LogicOr.svg":ta,"./blocks/svg/Multiplier.svg":sa,"./blocks/svg/Subsystem.svg":aa,"./blocks/svg/Switch.svg":ia,"./blocks/svg/TappedDelay.svg":na,"./blocks/svg/Wrapper.svg":la}),Ft=new Map;for(const[e,s]of Object.entries(zi)){const t=e.match(/\/([^/]+)\.svg$/);t&&Ft.set(t[1],s)}function ln(e){return ri(e)}var Bi=Tt('<span class="block-icon svelte-kd944p"><!></span>');function rn(e,s){ge(s,!0);const t=N(()=>li(s.blockClass)),a=N(()=>o(t)?.kind==="svg"?Ft.get(o(t).name):void 0);var i=J(),n=Z(i);{var l=d=>{var r=Bi(),p=V(r);{var c=m=>{{let x=N(()=>o(t).samples()),T=N(()=>o(t).samplesDashed?.());ki(m,{get samples(){return o(x)},get samplesDashed(){return o(T)},get xRange(){return o(t).xRange},get yRange(){return o(t).yRange},get axes(){return o(t).axes},get markers(){return o(t).markers},get decoration(){return o(t).decoration},get asymptotes(){return o(t).asymptotes},get badge(){return o(t).badge},get stems(){return o(t).stems}})}},h=m=>{var x=J(),T=Z(x);{var _=f=>{Ri(f,{get poles(){return o(t).poles},get zeros(){return o(t).zeros}})},u=f=>{var w=J(),S=Z(w);{var b=v=>{{let y=N(()=>o(t).samples()),D=N(()=>o(t).samples2?.());Li(v,{get samples(){return o(y)},get samples2(){return o(D)},get yRange(){return o(t).yRange},get gridX(){return o(t).gridX},get gridY(){return o(t).gridY},get bars(){return o(t).bars}})}},k=v=>{var y=J(),D=Z(y);{var H=X=>{Oi(X,{get fn(){return o(t).fn},get rows(){return o(t).rows},get cols(){return o(t).cols}})},C=X=>{var te=J(),q=Z(te);{var P=M=>{xi(M,{get latex(){return o(t).latex}})},I=M=>{var L=J(),z=Z(L);{var W=B=>{Ti(B,{get text(){return o(t).text},get size(){return o(t).size}})},O=B=>{var se=J(),ee=Z(se);{var ae=de=>{var ue=J(),Le=Z(ue);Ct(Le,()=>o(a)),A(de,ue)};j(ee,de=>{o(t).kind==="svg"&&o(a)&&de(ae)},!0)}A(B,se)};j(z,B=>{o(t).kind==="glyph"?B(W):B(O,!1)},!0)}A(M,L)};j(q,M=>{o(t).kind==="math"?M(P):M(I,!1)},!0)}A(X,te)};j(D,X=>{o(t).kind==="surface"?X(H):X(C,!1)},!0)}A(v,y)};j(S,v=>{o(t).kind==="scope"?v(b):v(k,!1)},!0)}A(f,w)};j(T,f=>{o(t).kind==="pz"?f(_):f(u,!1)},!0)}A(m,x)};j(p,m=>{o(t).kind==="plot"?m(c):m(h,!1)})}Q(r),E(()=>{g(r,"aria-label",s.title),g(r,"role",s.title?"img":void 0)}),A(d,r)};j(n,d=>{o(t)&&d(l)})}A(e,i),ve()}export{Fs as A,rn as B,ye as C,Os as D,Es as E,en as F,nt as P,ke as S,ln as a,$i as b,li as c,Is as d,oe as e,Xi as f,nn as g,Zi as h,re as i,tn as j,Cs as k,At as l,wi as m,js as n,Ct as o,sn as p,Vi as q,Ps as r,g as s,Ms as t,We as u,an as v,Hs as w,Ji as x,Lt as y,Qi as z};
