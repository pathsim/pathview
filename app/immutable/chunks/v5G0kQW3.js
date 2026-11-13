import{x as E,b as pe,aM as ue,m as N,h as w,V as Le,i as qe,G as z,ad as Me,j as Ae,H as Ie,k as ee,n as D,z as B,ao as fe,aK as Be,av as te,o as q,aN as H,y as O,B as Pe,am as se,a4 as Ne,aI as J,aO as he,aP as Oe,aQ as Ee,aR as ze,q as me,w as ge,aS as V,a7 as ve,aE as $,aT as Fe,aH as je,v as F,aU as Ze,aV as be,T as Te,aW as Re,aX as Ve,a9 as Ke,aY as We,aZ as Ue,a_ as Ge,a$ as $e,b0 as Ye,b1 as Xe,b2 as Je,b3 as et,b4 as tt,b5 as ye,g as Qe,a6 as we,a5 as st,b6 as it,t as nt,P as at}from"./DJrf5Ipz.js";import{w as lt}from"./Bwu2X9-q.js";import{B as rt}from"./CcRCixzS.js";import{f as ot,a as dt}from"./DQWTtD12.js";import{i as ct,c as pt,d as ut,n as Lt,a as ft}from"./BfVtbEo9.js";function Rt(e,t){return t}function ht(e,t,s){for(var i=[],n=t.length,a,l=t.length,p=0;p<n;p++){let g=t[p];ge(g,()=>{if(a){if(a.pending.delete(g),a.done.add(g),a.pending.size===0){var c=e.outrogroups;Y(J(a.done)),c.delete(a),c.size===0&&(e.outrogroups=null)}}else l-=1},!1)}if(l===0){var o=i.length===0&&s!==null;if(o){var u=s,d=u.parentNode;je(d),d.append(u),e.items.clear()}Y(t,!o)}else a={pending:new Set(t),done:new Set},(e.outrogroups??=new Set).add(a)}function Y(e,t=!0){for(var s=0;s<e.length;s++)F(e[s],t)}var ie;function Vt(e,t,s,i,n,a=null){var l=e,p=new Map,o=(t&ue)!==0;if(o){var u=e;l=w?N(Le(u)):u.appendChild(E())}w&&qe();var d=null,g=Me(()=>{var L=s();return he(L)?L:L==null?[]:J(L)}),c,b=!0;function T(){r.fallback=d,mt(r,c,l,t,i),d!==null&&(c.length===0?(d.f&H)===0?me(d):(d.f^=H,P(d,null,l)):ge(d,()=>{d=null}))}var x=pe(()=>{c=z(g);var L=c.length;let Q=!1;if(w){var k=Ae(l)===Ie;k!==(L===0)&&(l=ee(),N(l),D(!1),Q=!0)}for(var v=new Set,C=q,m=Pe(),f=0;f<L;f+=1){w&&B.nodeType===fe&&B.data===Be&&(l=B,Q=!0,D(!1));var y=c[f],_=i(y,f),h=b?null:p.get(_);h?(h.v&&te(h.v,y),h.i&&te(h.i,f),m&&C.skipped_effects.delete(h.e)):(h=gt(p,b?l:ie??=E(),y,_,f,n,t,s),b||(h.e.f|=H),p.set(_,h)),v.add(_)}if(L===0&&a&&!d&&(b?d=O(()=>a(l)):(d=O(()=>a(ie??=E())),d.f|=H)),w&&L>0&&N(ee()),!b)if(m){for(const[Z,R]of p)v.has(Z)||C.skipped_effects.add(R.e);C.oncommit(T),C.ondiscard(()=>{})}else T();Q&&D(!0),z(g)}),r={effect:x,items:p,outrogroups:null,fallback:d};b=!1,w&&(l=B)}function mt(e,t,s,i,n){var a=(i&Fe)!==0,l=t.length,p=e.items,o=e.effect.first,u,d=null,g,c=[],b=[],T,x,r,L;if(a)for(L=0;L<l;L+=1)T=t[L],x=n(T,L),r=p.get(x).e,(r.f&H)===0&&(r.nodes?.a?.measure(),(g??=new Set).add(r));for(L=0;L<l;L+=1){if(T=t[L],x=n(T,L),r=p.get(x).e,e.outrogroups!==null)for(const h of e.outrogroups)h.pending.delete(r),h.done.delete(r);if((r.f&H)!==0)if(r.f^=H,r===o)P(r,null,s);else{var Q=d?d.next:o;r===e.effect.last&&(e.effect.last=r.prev),r.prev&&(r.prev.next=r.next),r.next&&(r.next.prev=r.prev),S(e,d,r),S(e,r,Q),P(r,Q,s),d=r,c=[],b=[],o=d.next;continue}if((r.f&V)!==0&&(me(r),a&&(r.nodes?.a?.unfix(),(g??=new Set).delete(r))),r!==o){if(u!==void 0&&u.has(r)){if(c.length<b.length){var k=b[0],v;d=k.prev;var C=c[0],m=c[c.length-1];for(v=0;v<c.length;v+=1)P(c[v],k,s);for(v=0;v<b.length;v+=1)u.delete(b[v]);S(e,C.prev,m.next),S(e,d,C),S(e,m,k),o=k,d=m,L-=1,c=[],b=[]}else u.delete(r),P(r,o,s),S(e,r.prev,r.next),S(e,r,d===null?e.effect.first:d.next),S(e,d,r),d=r;continue}for(c=[],b=[];o!==null&&o!==r;)(u??=new Set).add(o),b.push(o),o=o.next;if(o===null)continue}(r.f&H)===0&&c.push(r),d=r,o=r.next}if(e.outrogroups!==null){for(const h of e.outrogroups)h.pending.size===0&&(Y(J(h.done)),e.outrogroups?.delete(h));e.outrogroups.size===0&&(e.outrogroups=null)}if(o!==null||u!==void 0){var f=[];if(u!==void 0)for(r of u)(r.f&V)===0&&f.push(r);for(;o!==null;)(o.f&V)===0&&o!==e.fallback&&f.push(o),o=o.next;var y=f.length;if(y>0){var _=(i&ue)!==0&&l===0?s:null;if(a){for(L=0;L<y;L+=1)f[L].nodes?.a?.measure();for(L=0;L<y;L+=1)f[L].nodes?.a?.fix()}ht(e,f,_)}}a&&ve(()=>{if(g!==void 0)for(r of g)r.nodes?.a?.apply()})}function gt(e,t,s,i,n,a,l,p){var o=(l&Oe)!==0?(l&Ee)===0?Ne(s,!1,!1):se(s):null,u=(l&ze)!==0?se(n):null;return{v:o,i:u,e:O(()=>(a(t,o??s,u??n,p),()=>{e.delete(i)}))}}function P(e,t,s){if(e.nodes)for(var i=e.nodes.start,n=e.nodes.end,a=t&&(t.f&H)===0?t.nodes.start:s;i!==null;){var l=$(i);if(a.before(i),i===n)return;i=l}}function S(e,t,s){t===null?e.effect.first=s:t.next=s,s===null?e.effect.last=t:s.prev=t}function Kt(e,t){let s=null,i=w;var n;if(w){s=B;for(var a=Le(document.head);a!==null&&(a.nodeType!==fe||a.data!==e);)a=$(a);if(a===null)D(!1);else{var l=$(a);a.remove(),N(l)}}w||(n=document.head.appendChild(E()));try{pe(()=>t(n),Ze)}finally{i&&(D(!0),N(s))}}function vt(e,t){var s=void 0,i;be(()=>{s!==(s=t())&&(i&&(F(i),i=null),s&&(i=O(()=>{Te(()=>s(e))})))})}function ke(e){var t,s,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(t=0;t<n;t++)e[t]&&(s=ke(e[t]))&&(i&&(i+=" "),i+=s)}else for(s in e)e[s]&&(i&&(i+=" "),i+=s);return i}function bt(){for(var e,t,s=0,i="",n=arguments.length;s<n;s++)(e=arguments[s])&&(t=ke(e))&&(i&&(i+=" "),i+=t);return i}function Tt(e){return typeof e=="object"?bt(e):e??""}const ne=[...` 	
\r\f \v\uFEFF`];function yt(e,t,s){var i=e==null?"":""+e;if(t&&(i=i?i+" "+t:t),s){for(var n in s)if(s[n])i=i?i+" "+n:n;else if(i.length)for(var a=n.length,l=0;(l=i.indexOf(n,l))>=0;){var p=l+a;(l===0||ne.includes(i[l-1]))&&(p===i.length||ne.includes(i[p]))?i=(l===0?"":i.substring(0,l))+i.substring(p+1):l=p}}return i===""?null:i}function ae(e,t=!1){var s=t?" !important;":";",i="";for(var n in e){var a=e[n];a!=null&&a!==""&&(i+=" "+n+": "+a+s)}return i}function K(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Qt(e,t){if(t){var s="",i,n;if(Array.isArray(t)?(i=t[0],n=t[1]):i=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=!1,l=0,p=!1,o=[];i&&o.push(...Object.keys(i).map(K)),n&&o.push(...Object.keys(n).map(K));var u=0,d=-1;const x=e.length;for(var g=0;g<x;g++){var c=e[g];if(p?c==="/"&&e[g-1]==="*"&&(p=!1):a?a===c&&(a=!1):c==="/"&&e[g+1]==="*"?p=!0:c==='"'||c==="'"?a=c:c==="("?l++:c===")"&&l--,!p&&a===!1&&l===0){if(c===":"&&d===-1)d=g;else if(c===";"||g===x-1){if(d!==-1){var b=K(e.substring(u,d).trim());if(!o.includes(b)){c!==";"&&g++;var T=e.substring(u,g).trim();s+=" "+T+";"}}u=g+1,d=-1}}}}return i&&(s+=ae(i)),n&&(s+=ae(n,!0)),s=s.trim(),s===""?null:s}return e==null?null:String(e)}function wt(e,t,s,i,n,a){var l=e.__className;if(w||l!==s||l===void 0){var p=yt(s,i,a);(!w||p!==e.getAttribute("class"))&&(p==null?e.removeAttribute("class"):t?e.className=p:e.setAttribute("class",p)),e.__className=s}else if(a&&n!==a)for(var o in a){var u=!!a[o];(n==null||u!==!!n[o])&&e.classList.toggle(o,u)}return a}function W(e,t={},s,i){for(var n in s){var a=s[n];t[n]!==a&&(s[n]==null?e.style.removeProperty(n):e.style.setProperty(n,a,i))}}function xe(e,t,s,i){var n=e.__style;if(w||n!==t){var a=Qt(t,i);(!w||a!==e.getAttribute("style"))&&(a==null?e.removeAttribute("style"):e.style.cssText=a),e.__style=t}else i&&(Array.isArray(i)?(W(e,s?.[0],i[0]),W(e,s?.[1],i[1],"important")):W(e,s,i));return i}function X(e,t,s=!1){if(e.multiple){if(t==null)return;if(!he(t))return Re();for(var i of e.options)i.selected=t.includes(le(i));return}for(i of e.options){var n=le(i);if(Ve(n,t)){i.selected=!0;return}}(!s||t!==void 0)&&(e.selectedIndex=-1)}function kt(e){var t=new MutationObserver(()=>{X(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ke(()=>{t.disconnect()})}function le(e){return"__value"in e?e.__value:e.value}const A=Symbol("class"),I=Symbol("style"),_e=Symbol("is custom element"),Ce=Symbol("is html");function xt(e){if(w){var t=!1,s=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var i=e.value;M(e,"value",null),e.value=i}if(e.hasAttribute("checked")){var n=e.checked;M(e,"checked",null),e.checked=n}}};e.__on_r=s,ve(s),Ye()}}function Wt(e,t){var s=j(e);s.value===(s.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function Ut(e,t){var s=j(e);s.checked!==(s.checked=t??void 0)&&(e.checked=t)}function _t(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function M(e,t,s,i){var n=j(e);w&&(n[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||n[t]!==(n[t]=s)&&(t==="loading"&&(e[et]=s),s==null?e.removeAttribute(t):typeof s!="string"&&He(e).includes(t)?e[t]=s:e.setAttribute(t,s))}function Ct(e,t,s,i,n=!1,a=!1){if(w&&n&&e.tagName==="INPUT"){var l=e,p=l.type==="checkbox"?"defaultChecked":"defaultValue";p in s||xt(l)}var o=j(e),u=o[_e],d=!o[Ce];let g=w&&u;g&&D(!1);var c=t||{},b=e.tagName==="OPTION";for(var T in t)T in s||(s[T]=null);s.class?s.class=Tt(s.class):(i||s[A])&&(s.class=null),s[I]&&(s.style??=null);var x=He(e);for(const m in s){let f=s[m];if(b&&m==="value"&&f==null){e.value=e.__value="",c[m]=f;continue}if(m==="class"){var r=e.namespaceURI==="http://www.w3.org/1999/xhtml";wt(e,r,f,i,t?.[A],s[A]),c[m]=f,c[A]=s[A];continue}if(m==="style"){xe(e,f,t?.[I],s[I]),c[m]=f,c[I]=s[I];continue}var L=c[m];if(!(f===L&&!(f===void 0&&e.hasAttribute(m)))){c[m]=f;var Q=m[0]+m[1];if(Q!=="$$")if(Q==="on"){const y={},_="$$"+m;let h=m.slice(2);var k=ft(h);if(ct(h)&&(h=h.slice(0,-7),y.capture=!0),!k&&L){if(f!=null)continue;e.removeEventListener(h,c[_],y),c[_]=null}if(f!=null)if(k)e[`__${h}`]=f,ut([h]);else{let Z=function(R){c[m].call(this,R)};c[_]=pt(h,e,Z,y)}else k&&(e[`__${h}`]=void 0)}else if(m==="style")M(e,m,f);else if(m==="autofocus")Ge(e,!!f);else if(!u&&(m==="__value"||m==="value"&&f!=null))e.value=e.__value=f;else if(m==="selected"&&b)_t(e,f);else{var v=m;d||(v=Lt(v));var C=v==="defaultValue"||v==="defaultChecked";if(f==null&&!u&&!C)if(o[m]=null,v==="value"||v==="checked"){let y=e;const _=t===void 0;if(v==="value"){let h=y.defaultValue;y.removeAttribute(v),y.defaultValue=h,y.value=y.__value=_?h:null}else{let h=y.defaultChecked;y.removeAttribute(v),y.defaultChecked=h,y.checked=_?h:!1}}else e.removeAttribute(m);else C||x.includes(v)&&(u||typeof f!="string")?(e[v]=f,v in o&&(o[v]=$e)):typeof f!="function"&&M(e,v,f)}}}return g&&D(!0),c}function Gt(e,t,s=[],i=[],n=[],a,l=!1,p=!1){We(n,s,i,o=>{var u=void 0,d={},g=e.nodeName==="SELECT",c=!1;if(be(()=>{var T=t(...o.map(z)),x=Ct(e,u,T,a,l,p);c&&g&&"value"in T&&X(e,T.value);for(let L of Object.getOwnPropertySymbols(d))T[L]||F(d[L]);for(let L of Object.getOwnPropertySymbols(T)){var r=T[L];L.description===Ue&&(!u||r!==u[L])&&(d[L]&&F(d[L]),d[L]=O(()=>vt(e,()=>r))),x[L]=r}u=x}),g){var b=e;Te(()=>{X(b,u.value,!0),kt(b)})}c=!0})}function j(e){return e.__attributes??={[_e]:e.nodeName.includes("-"),[Ce]:e.namespaceURI===Xe}}var re=new Map;function He(e){var t=e.getAttribute("is")||e.nodeName,s=re.get(t);if(s)return s;re.set(t,s=[]);for(var i,n=e,a=Element.prototype;a!==n;){i=tt(n);for(var l in i)i[l].set&&s.push(l);n=Je(n)}return s}function $t(e,t,s=t){var i=new WeakSet;ye(e,"input",async n=>{var a=n?e.defaultValue:e.value;if(a=U(e)?G(a):a,s(a),q!==null&&i.add(q),await st(),a!==(a=t())){var l=e.selectionStart,p=e.selectionEnd,o=e.value.length;if(e.value=a??"",p!==null){var u=e.value.length;l===p&&p===o&&u>o?(e.selectionStart=u,e.selectionEnd=u):(e.selectionStart=l,e.selectionEnd=Math.min(p,u))}}}),(w&&e.defaultValue!==e.value||Qe(t)==null&&e.value)&&(s(U(e)?G(e.value):e.value),q!==null&&i.add(q)),we(()=>{var n=t();if(e===document.activeElement){var a=it??q;if(i.has(a))return}U(e)&&n===G(e.value)||e.type==="date"&&!n&&!e.value||n!==e.value&&(e.value=n??"")})}function Yt(e,t,s=t){ye(e,"change",i=>{var n=i?e.defaultChecked:e.checked;s(n)}),(w&&e.defaultChecked!==e.checked||Qe(t)==null)&&s(e.checked),we(()=>{var i=t();e.checked=!!i})}function U(e){var t=e.type;return t==="number"||t==="range"}function G(e){return e===""?null:+e}const Ht=rt.accent,oe={default:"#969696"},Xt=[Ht,"#E57373","#FFB74D","#FFF176","#81C784","#4DB6AC","#4DD0E1","#64B5F6","#BA68C8","#F06292","#90A4AE","#FFFFFF"];function St(e){const{name:t,category:s,description:i=`${t} block`,blockClass:n,importPath:a,inputs:l=["in 0"],outputs:p=["out 0"],inputBuses:o={},outputBuses:u={},minInputs:d=1,minOutputs:g=1,maxInputs:c=null,maxOutputs:b=null,syncPorts:T,shape:x,params:r={}}=e,L=Object.entries(r).map(([Q,k])=>({name:Q,type:k.type,default:k.default,description:k.description,min:k.min,max:k.max,options:k.options}));return{type:n,name:t,category:s,description:i,blockClass:n,importPath:a,shape:x,ports:{inputs:l.map(Q=>({name:Q,direction:"input",color:oe.default,...o[Q]?{bus:o[Q]}:{}})),outputs:p.map(Q=>({name:Q,direction:"output",color:oe.default,...u[Q]?{bus:u[Q]}:{}})),minInputs:d,minOutputs:g,maxInputs:c,maxOutputs:b,syncPorts:T},params:L}}const Dt={Constant:{blockClass:"Constant",description:"Produces a constant output signal (SISO).",docstringHtml:`<p>Produces a constant output signal (SISO).</p>
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
`,params:{value:{type:"integer",default:"1",description:"constant defining block output"}},inputs:[],outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="50" x2="86" y2="50"/><line x1="10" y1="10" x2="10" y2="54"/><path d="M 14 14 L 82 14"/></svg>
`},Source:{blockClass:"Source",description:"Source that produces an arbitrary time dependent output defined by `func` (callable).",docstringHtml:`<p>Source that produces an arbitrary time dependent output defined by <cite>func</cite> (callable).</p>
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
`,params:{func:{type:"callable",default:null,description:"function defining time dependent block output"}},inputs:[],outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><svg x="30.81" y="21.82" width="34.39" height="20.36" viewBox="0 -750 1689 1000"><g fill="currentColor" stroke="currentColor" stroke-width="40" transform="scale(1,-1)"><g><g><path d="M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z"></path></g><g transform="translate(550,0)"><path d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path></g><g transform="translate(939,0)"><path d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"></path></g><g transform="translate(1300,0)"><path d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path></g></g></g></svg></svg>
`},SinusoidalSource:{blockClass:"SinusoidalSource",description:"Source block that generates a sinusoid wave",docstringHtml:`<p>Source block that generates a sinusoid wave</p>
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
`,params:{frequency:{type:"integer",default:"1",description:"frequency of the sinusoid"},amplitude:{type:"integer",default:"1",description:"amplitude of the sinusoid"},phase:{type:"integer",default:"0",description:"phase of the sinusoid"}},inputs:[],outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="32" x2="86" y2="32"/><line x1="10" y1="10" x2="10" y2="54"/><path d="M 14 32 L 15.08 29.56 L 16.16 27.18 L 17.24 24.9 L 18.32 22.78 L 19.4 20.87 L 20.48 19.21 L 21.56 17.83 L 22.63 16.77 L 23.71 16.05 L 24.79 15.68 L 25.87 15.68 L 26.95 16.05 L 28.03 16.77 L 29.11 17.83 L 30.19 19.21 L 31.27 20.87 L 32.35 22.78 L 33.43 24.9 L 34.51 27.18 L 35.59 29.56 L 36.67 32 L 37.75 34.44 L 38.83 36.82 L 39.9 39.1 L 40.98 41.22 L 42.06 43.13 L 43.14 44.79 L 44.22 46.17 L 45.3 47.23 L 46.38 47.95 L 47.46 48.32 L 48.54 48.32 L 49.62 47.95 L 50.7 47.23 L 51.78 46.17 L 52.86 44.79 L 53.94 43.13 L 55.02 41.22 L 56.1 39.1 L 57.17 36.82 L 58.25 34.44 L 59.33 32 L 60.41 29.56 L 61.49 27.18 L 62.57 24.9 L 63.65 22.78 L 64.73 20.87 L 65.81 19.21 L 66.89 17.83 L 67.97 16.77 L 69.05 16.05 L 70.13 15.68 L 71.21 15.68 L 72.29 16.05 L 73.37 16.77 L 74.44 17.83 L 75.52 19.21 L 76.6 20.87 L 77.68 22.78 L 78.76 24.9 L 79.84 27.18 L 80.92 29.56 L 82 32"/></svg>
`},StepSource:{blockClass:"StepSource",description:"Discrete time unit step (or multi step) source block.",docstringHtml:`<p>Discrete time unit step (or multi step) source block.</p>
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
`,params:{amplitude:{type:"integer",default:"1",description:"amplitude of the step signal, or amplitudes / output levels of the multiple steps"},tau:{type:"number",default:"0.0",description:"delay of the step, or delays of the different steps"}},inputs:[],outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="50" x2="86" y2="50"/><line x1="10" y1="10" x2="10" y2="54"/><path d="M 14 50 L 31 50 L 31 14 L 82 14"/></svg>
`},PulseSource:{blockClass:"PulseSource",description:"Generates a periodic pulse waveform with defined rise and fall times.",docstringHtml:`<p>Generates a periodic pulse waveform with defined rise and fall times.</p>
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
`,params:{amplitude:{type:"number",default:"1.0",description:"Peak amplitude of the pulse. Default is 1.0."},T:{type:"number",default:"1.0",description:"Period of the pulse train. Must be positive. Default is 1.0."},t_rise:{type:"number",default:"0.0",description:"Duration of the rising edge. Default is 0.0."},t_fall:{type:"number",default:"0.0",description:"Duration of the falling edge. Default is 0.0."},tau:{type:"number",default:"0.0",description:"Initial delay before the first pulse cycle begins. Default is 0.0."},duty:{type:"number",default:"0.5",description:"Duty cycle, ratio of the pulse ON duration (plateau time only) to the total period T (must be between 0 and 1). Default is 0.5. The high plateau duration is `T * duty`."}},inputs:[],outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="50" x2="86" y2="50"/><line x1="10" y1="10" x2="10" y2="54"/><path d="M 14 50 L 17.4 50 L 27.6 14 L 37.8 14 L 42.56 50 L 58.2 50 L 68.4 14 L 78.6 14 L 82 50 L 82 50"/></svg>
`},TriangleWaveSource:{blockClass:"TriangleWaveSource",description:"Source block that generates an analog triangle wave",docstringHtml:`<p>Source block that generates an analog triangle wave</p>
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
`,params:{frequency:{type:"integer",default:"1",description:"frequency of the triangle wave"},amplitude:{type:"integer",default:"1",description:"amplitude of the triangle wave"},phase:{type:"integer",default:"0",description:"phase of the triangle wave"}},inputs:[],outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="32" x2="86" y2="32"/><line x1="10" y1="10" x2="10" y2="54"/><path d="M 14 32 L 14.85 30.36 L 15.7 28.73 L 16.55 27.09 L 17.4 25.45 L 18.25 23.82 L 19.1 22.18 L 19.95 20.55 L 20.8 18.91 L 21.65 17.27 L 22.5 15.64 L 23.35 17.27 L 24.2 18.91 L 25.05 20.55 L 25.9 22.18 L 26.75 23.82 L 27.6 25.45 L 28.45 27.09 L 29.3 28.73 L 30.15 30.36 L 31 32 L 31.85 33.64 L 32.7 35.27 L 33.55 36.91 L 34.4 38.55 L 35.25 40.18 L 36.1 41.82 L 36.95 43.45 L 37.8 45.09 L 38.65 46.73 L 39.5 48.36 L 40.35 46.73 L 41.2 45.09 L 42.05 43.45 L 42.9 41.82 L 43.75 40.18 L 44.6 38.55 L 45.45 36.91 L 46.3 35.27 L 47.15 33.64 L 48 32 L 48.85 30.36 L 49.7 28.73 L 50.55 27.09 L 51.4 25.45 L 52.25 23.82 L 53.1 22.18 L 53.95 20.55 L 54.8 18.91 L 55.65 17.27 L 56.5 15.64 L 57.35 17.27 L 58.2 18.91 L 59.05 20.55 L 59.9 22.18 L 60.75 23.82 L 61.6 25.45 L 62.45 27.09 L 63.3 28.73 L 64.15 30.36 L 65 32 L 65.85 33.64 L 66.7 35.27 L 67.55 36.91 L 68.4 38.55 L 69.25 40.18 L 70.1 41.82 L 70.95 43.45 L 71.8 45.09 L 72.65 46.73 L 73.5 48.36 L 74.35 46.73 L 75.2 45.09 L 76.05 43.45 L 76.9 41.82 L 77.75 40.18 L 78.6 38.55 L 79.45 36.91 L 80.3 35.27 L 81.15 33.64 L 82 32"/></svg>
`},SquareWaveSource:{blockClass:"SquareWaveSource",description:"Discrete time square wave source.",docstringHtml:`<p>Discrete time square wave source.</p>
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
`,params:{amplitude:{type:"integer",default:"1",description:"amplitude of the square wave signal"},frequency:{type:"integer",default:"1",description:"frequency of the square wave signal"},phase:{type:"integer",default:"0",description:"phase of the square wave signal"}},inputs:[],outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="32" x2="86" y2="32"/><line x1="10" y1="10" x2="10" y2="54"/><path d="M 14 15.64 L 31 15.64 L 31 48.36 L 48 48.36 L 48 15.64 L 48 15.64 L 65 15.64 L 65 48.36 L 82 48.36"/></svg>
`},GaussianPulseSource:{blockClass:"GaussianPulseSource",description:"Source block that generates a gaussian pulse",docstringHtml:`<p>Source block that generates a gaussian pulse</p>
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
`,params:{amplitude:{type:"integer",default:"1",description:"amplitude of the gaussian pulse"},f_max:{type:"number",default:"1000.0",description:"maximum frequency component of the gaussian pulse (steepness)"},tau:{type:"number",default:"0.0",description:"time delay of the gaussian pulse"}},inputs:[],outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="50" x2="86" y2="50"/><line x1="10" y1="10" x2="10" y2="54"/><path d="M 14 49.98 L 14.86 49.97 L 15.72 49.95 L 16.58 49.93 L 17.44 49.91 L 18.3 49.87 L 19.16 49.82 L 20.03 49.76 L 20.89 49.67 L 21.75 49.56 L 22.61 49.42 L 23.47 49.23 L 24.33 49 L 25.19 48.71 L 26.05 48.35 L 26.91 47.91 L 27.77 47.37 L 28.63 46.73 L 29.49 45.98 L 30.35 45.09 L 31.22 44.06 L 32.08 42.89 L 32.94 41.57 L 33.8 40.1 L 34.66 38.47 L 35.52 36.71 L 36.38 34.83 L 37.24 32.84 L 38.1 30.77 L 38.96 28.65 L 39.82 26.53 L 40.68 24.44 L 41.54 22.43 L 42.41 20.53 L 43.27 18.81 L 44.13 17.3 L 44.99 16.03 L 45.85 15.05 L 46.71 14.38 L 47.57 14.04 L 48.43 14.04 L 49.29 14.38 L 50.15 15.05 L 51.01 16.03 L 51.87 17.3 L 52.73 18.81 L 53.59 20.53 L 54.46 22.43 L 55.32 24.44 L 56.18 26.53 L 57.04 28.65 L 57.9 30.77 L 58.76 32.84 L 59.62 34.83 L 60.48 36.71 L 61.34 38.47 L 62.2 40.1 L 63.06 41.57 L 63.92 42.89 L 64.78 44.06 L 65.65 45.09 L 66.51 45.98 L 67.37 46.73 L 68.23 47.37 L 69.09 47.91 L 69.95 48.35 L 70.81 48.71 L 71.67 49 L 72.53 49.23 L 73.39 49.42 L 74.25 49.56 L 75.11 49.67 L 75.97 49.76 L 76.84 49.82 L 77.7 49.87 L 78.56 49.91 L 79.42 49.93 L 80.28 49.95 L 81.14 49.97 L 82 49.98"/></svg>
`},ChirpPhaseNoiseSource:{blockClass:"ChirpPhaseNoiseSource",description:"Chirp source, sinusoid with frequency ramp up and ramp down, plus phase noise.",docstringHtml:`<p>Chirp source, sinusoid with frequency ramp up and ramp down, plus phase noise.</p>
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
`,params:{amplitude:{type:"integer",default:"1",description:"amplitude of the chirp signal"},f0:{type:"integer",default:"1",description:"start frequency of the chirp signal"},BW:{type:"integer",default:"1",description:"bandwidth of the frequency ramp of the chirp signal"},T:{type:"integer",default:"1",description:"period of the frequency ramp of the chirp signal"},phase:{type:"integer",default:"0",description:"phase of sinusoid (initial, radians)"},sig_cum:{type:"integer",default:"0",description:"weight for cumulative phase noise contribution"},sig_white:{type:"integer",default:"0",description:"weight for white phase noise contribution"},sampling_period:{type:"number",default:"0.1",description:"time between phase noise samples. If None, noise is sampled every timestep (default is 0.1)"}},inputs:[],outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="32" x2="86" y2="32"/><line x1="10" y1="10" x2="10" y2="54"/><path d="M 14 32 L 14.57 31.12 L 15.14 30.2 L 15.71 29.26 L 16.29 28.29 L 16.86 27.29 L 17.43 26.29 L 18 25.27 L 18.57 24.25 L 19.14 23.24 L 19.71 22.24 L 20.29 21.27 L 20.86 20.34 L 21.43 19.45 L 22 18.63 L 22.57 17.87 L 23.14 17.21 L 23.71 16.64 L 24.29 16.19 L 24.86 15.86 L 25.43 15.68 L 26 15.64 L 26.57 15.77 L 27.14 16.07 L 27.71 16.55 L 28.29 17.21 L 28.86 18.07 L 29.43 19.11 L 30 20.34 L 30.57 21.74 L 31.14 23.32 L 31.71 25.05 L 32.29 26.91 L 32.86 28.89 L 33.43 30.95 L 34 33.07 L 34.57 35.2 L 35.14 37.31 L 35.71 39.36 L 36.29 41.3 L 36.86 43.1 L 37.43 44.69 L 38 46.05 L 38.57 47.13 L 39.14 47.89 L 39.71 48.3 L 40.29 48.33 L 40.86 47.97 L 41.43 47.21 L 42 46.05 L 42.57 44.51 L 43.14 42.61 L 43.71 40.39 L 44.29 37.9 L 44.86 35.21 L 45.43 32.39 L 46 29.52 L 46.57 26.69 L 47.14 24 L 47.71 21.54 L 48.29 19.41 L 48.86 17.68 L 49.43 16.45 L 50 15.76 L 50.57 15.67 L 51.14 16.21 L 51.71 17.36 L 52.29 19.1 L 52.86 21.39 L 53.43 24.15 L 54 27.27 L 54.57 30.62 L 55.14 34.07 L 55.71 37.47 L 56.29 40.65 L 56.86 43.45 L 57.43 45.73 L 58 47.35 L 58.57 48.23 L 59.14 48.28 L 59.71 47.49 L 60.29 45.87 L 60.86 43.49 L 61.43 40.45 L 62 36.9 L 62.57 33.05 L 63.14 29.1 L 63.71 25.28 L 64.29 21.84 L 64.86 18.99 L 65.43 16.93 L 66 15.81 L 66.57 15.73 L 67.14 16.73 L 67.71 18.75 L 68.29 21.7 L 68.86 25.38 L 69.43 29.56 L 70 33.95 L 70.57 38.23 L 71.14 42.09 L 71.71 45.22 L 72.29 47.36 L 72.86 48.32 L 73.43 48 L 74 46.4 L 74.57 43.62 L 75.14 39.85 L 75.71 35.39 L 76.29 30.62 L 76.86 25.93 L 77.43 21.73 L 78 18.43 L 78.57 16.32 L 79.14 15.64 L 79.71 16.47 L 80.29 18.78 L 80.86 22.37 L 81.43 26.92 L 82 32"/></svg>
`},ClockSource:{blockClass:"ClockSource",description:"Discrete time clock source block.",docstringHtml:`<p>Discrete time clock source block.</p>
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
`,params:{T:{type:"integer",default:"1",description:"period of the clock"},tau:{type:"integer",default:"0",description:"clock delay"}},inputs:[],outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="50" x2="86" y2="50"/><line x1="10" y1="10" x2="10" y2="54"/><path d="M 14 50 L 18.08 50 L 18.08 14 L 28.96 14 L 28.96 50 L 39.84 50 L 39.84 14 L 50.72 14 L 50.72 50 L 61.6 50 L 61.6 14 L 72.48 14 L 72.48 50 L 82 50"/></svg>
`},WhiteNoise:{blockClass:"WhiteNoise",description:"White noise source with Gaussian distribution.",docstringHtml:`<p>White noise source with Gaussian distribution.</p>
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
`,params:{standard_deviation:{type:"number",default:"1.0",description:"output standard deviation for constant-amplitude mode (default: 1.0)"},spectral_density:{type:"any",default:null,description:"power spectral density S₀ in [signal²/Hz]"},sampling_period:{type:"any",default:null,description:"time between samples, if None samples every timestep"},seed:{type:"any",default:null,description:"random seed for reproducibility"}},inputs:[],outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="32" x2="86" y2="32"/><line x1="10" y1="10" x2="10" y2="54"/><path d="M 14 21.9 L 16.52 27.61 L 19.04 39.86 L 21.56 16.45 L 24.07 33.73 L 26.59 31.95 L 29.11 24.95 L 31.63 46.93 L 34.15 38.45 L 36.67 39.87 L 39.19 38.99 L 41.7 30.61 L 44.22 22.24 L 46.74 22.96 L 49.26 27.34 L 51.78 23.7 L 54.3 30.77 L 56.81 29.3 L 59.33 33.66 L 61.85 38.44 L 64.37 18.78 L 66.89 37.91 L 69.41 45.02 L 71.93 46.02 L 74.44 25.2 L 76.96 23.39 L 79.48 23.43 L 82 22.05"/></svg>
`},PinkNoise:{blockClass:"PinkNoise",description:"Pink noise (1/f noise) source using the Voss-McCartney algorithm.",docstringHtml:`<p>Pink noise (1/f noise) source using the Voss-McCartney algorithm.</p>
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
`,params:{standard_deviation:{type:"number",default:"1.0",description:"approximate output standard deviation (default: 1.0)"},spectral_density:{type:"any",default:null,description:"power spectral density, output scaled as √(S₀/(N·dt))"},num_octaves:{type:"integer",default:"16",description:"number of frequency bands in algorithm (default: 16)"},sampling_period:{type:"any",default:null,description:"time between samples, if None samples every timestep"},seed:{type:"any",default:null,description:"random seed for reproducibility"}},inputs:[],outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="32" x2="86" y2="32"/><line x1="10" y1="10" x2="10" y2="54"/><path d="M 14 35.45 L 16 34.25 L 18 46.73 L 20 40.09 L 22 36.01 L 24 29.3 L 26 37.55 L 28 38.27 L 30 33.9 L 32 37.47 L 34 36.19 L 36 41.27 L 38 30.72 L 40 28.39 L 42 29.36 L 44 28.24 L 46 43.38 L 48 35.26 L 50 28.18 L 52 31.06 L 54 25.35 L 56 26.39 L 58 29.33 L 60 24.26 L 62 29.19 L 64 35.07 L 66 37.37 L 68 37.2 L 70 30.94 L 72 30.59 L 74 31.22 L 76 25.31 L 78 35.1 L 80 36.22 L 82 41.18"/></svg>
`},RandomNumberGenerator:{blockClass:"RandomNumberGenerator",description:"Generates a random output value using `numpy.random.rand`.",docstringHtml:`<p>Generates a random output value using <cite>numpy.random.rand</cite>.</p>
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
`,params:{sampling_period:{type:"any",default:null,description:"time between random samples"}},inputs:[],outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="32" x2="86" y2="32"/><line x1="10" y1="10" x2="10" y2="54"/><line x1="17.09" y1="32" x2="17.09" y2="32.28"/><circle r="2.4" fill="currentColor" stroke="none" cx="17.09" cy="32.28"/><line x1="23.27" y1="32" x2="23.27" y2="30.21"/><circle r="2.4" fill="currentColor" stroke="none" cx="23.27" cy="30.21"/><line x1="29.45" y1="32" x2="29.45" y2="43.33"/><circle r="2.4" fill="currentColor" stroke="none" cx="29.45" cy="43.33"/><line x1="35.64" y1="32" x2="35.64" y2="39.54"/><circle r="2.4" fill="currentColor" stroke="none" cx="35.64" cy="39.54"/><line x1="41.82" y1="32" x2="41.82" y2="33.67"/><circle r="2.4" fill="currentColor" stroke="none" cx="41.82" cy="33.67"/><line x1="48" y1="32" x2="48" y2="31.81"/><circle r="2.4" fill="currentColor" stroke="none" cx="48" cy="31.81"/><line x1="54.18" y1="32" x2="54.18" y2="44.41"/><circle r="2.4" fill="currentColor" stroke="none" cx="54.18" cy="44.41"/><line x1="60.36" y1="32" x2="60.36" y2="20.84"/><circle r="2.4" fill="currentColor" stroke="none" cx="60.36" cy="20.84"/><line x1="66.55" y1="32" x2="66.55" y2="29.37"/><circle r="2.4" fill="currentColor" stroke="none" cx="66.55" cy="29.37"/><line x1="72.73" y1="32" x2="72.73" y2="34.63"/><circle r="2.4" fill="currentColor" stroke="none" cx="72.73" cy="34.63"/><line x1="78.91" y1="32" x2="78.91" y2="38.35"/><circle r="2.4" fill="currentColor" stroke="none" cx="78.91" cy="38.35"/></svg>
`},Integrator:{blockClass:"Integrator",description:"Integrates the input signal.",docstringHtml:`<p>Integrates the input signal.</p>
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
`,params:{initial_value:{type:"number",default:"0.0",description:"initial value of integrator"}},inputs:null,outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="50" x2="86" y2="50"/><line x1="10" y1="10" x2="10" y2="54"/><path d="M 14 50 L 24.2 50 L 82 19.4"/></svg>
`},Differentiator:{blockClass:"Differentiator",description:"Differentiates the input signal.",docstringHtml:`<p>Differentiates the input signal.</p>
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
`,params:{f_max:{type:"number",default:"100.0",description:"highest expected signal frequency"}},inputs:null,outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="50" x2="86" y2="50"/><line x1="10" y1="10" x2="10" y2="54"/><path d="M 14 49.86 L 14.86 49.85 L 15.72 49.84 L 16.58 49.82 L 17.44 49.81 L 18.3 49.8 L 19.16 49.78 L 20.03 49.77 L 20.89 49.75 L 21.75 49.73 L 22.61 49.71 L 23.47 49.69 L 24.33 49.67 L 25.19 49.64 L 26.05 49.62 L 26.91 49.59 L 27.77 49.56 L 28.63 49.53 L 29.49 49.5 L 30.35 49.46 L 31.22 49.42 L 32.08 49.38 L 32.94 49.33 L 33.8 49.28 L 34.66 49.23 L 35.52 49.18 L 36.38 49.12 L 37.24 49.05 L 38.1 48.98 L 38.96 48.91 L 39.82 48.83 L 40.68 48.75 L 41.54 48.66 L 42.41 48.56 L 43.27 48.45 L 44.13 48.34 L 44.99 48.22 L 45.85 48.09 L 46.71 47.95 L 47.57 47.81 L 48.43 47.65 L 49.29 47.48 L 50.15 47.29 L 51.01 47.1 L 51.87 46.89 L 52.73 46.66 L 53.59 46.42 L 54.46 46.16 L 55.32 45.88 L 56.18 45.59 L 57.04 45.27 L 57.9 44.92 L 58.76 44.55 L 59.62 44.16 L 60.48 43.74 L 61.34 43.28 L 62.2 42.8 L 63.06 42.27 L 63.92 41.71 L 64.78 41.11 L 65.65 40.47 L 66.51 39.78 L 67.37 39.04 L 68.23 38.24 L 69.09 37.39 L 69.95 36.48 L 70.81 35.5 L 71.67 34.45 L 72.53 33.32 L 73.39 32.11 L 74.25 30.82 L 75.11 29.43 L 75.97 27.94 L 76.84 26.34 L 77.7 24.63 L 78.56 22.79 L 79.42 20.81 L 80.28 18.7 L 81.14 16.43 L 82 14"/></svg>
`},Delay:{blockClass:"Delay",description:"Delays the input signal by a time constant 'tau' in seconds.",docstringHtml:`<p>Delays the input signal by a time constant 'tau' in seconds.</p>
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
`,params:{tau:{type:"number",default:"0.001",description:"delay time constant in seconds"},sampling_period:{type:"any",default:null,description:"sampling period for discrete mode, default is continuous mode"}},inputs:null,outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="32" x2="86" y2="32"/><line x1="10" y1="10" x2="10" y2="54"/><path stroke-dasharray="3.5 3" d="M 14 32 L 15.08 30.37 L 16.16 28.76 L 17.24 27.18 L 18.32 25.64 L 19.4 24.17 L 20.48 22.78 L 21.56 21.48 L 22.63 20.29 L 23.71 19.21 L 24.79 18.25 L 25.87 17.44 L 26.95 16.77 L 28.03 16.25 L 29.11 15.88 L 30.19 15.68 L 31.27 15.64 L 32.35 15.76 L 33.43 16.05 L 34.51 16.49 L 35.59 17.08 L 36.67 17.83 L 37.75 18.71 L 38.83 19.73 L 39.9 20.87 L 40.98 22.12 L 42.06 23.47 L 43.14 24.9 L 44.22 26.4 L 45.3 27.96 L 46.38 29.56 L 47.46 31.18 L 48.54 32.82 L 49.62 34.44 L 50.7 36.04 L 51.78 37.6 L 52.86 39.1 L 53.94 40.53 L 55.02 41.88 L 56.1 43.13 L 57.17 44.27 L 58.25 45.29 L 59.33 46.17 L 60.41 46.92 L 61.49 47.51 L 62.57 47.95 L 63.65 48.24 L 64.73 48.36 L 65.81 48.32 L 66.89 48.12 L 67.97 47.75 L 69.05 47.23 L 70.13 46.56 L 71.21 45.75 L 72.29 44.79 L 73.37 43.71 L 74.44 42.52 L 75.52 41.22 L 76.6 39.83 L 77.68 38.36 L 78.76 36.82 L 79.84 35.24 L 80.92 33.63 L 82 32" opacity="0.5"/><path d="M 14 32 L 31 32 L 31.93 30.6 L 32.85 29.21 L 33.78 27.84 L 34.71 26.5 L 35.64 25.2 L 36.56 23.95 L 37.49 22.76 L 38.42 21.64 L 39.35 20.6 L 40.27 19.63 L 41.2 18.76 L 42.13 17.99 L 43.05 17.32 L 43.98 16.75 L 44.91 16.3 L 45.84 15.96 L 46.76 15.74 L 47.69 15.64 L 48.62 15.66 L 49.55 15.8 L 50.47 16.06 L 51.4 16.44 L 52.33 16.93 L 53.25 17.53 L 54.18 18.23 L 55.11 19.04 L 56.04 19.94 L 56.96 20.94 L 57.89 22.01 L 58.82 23.15 L 59.75 24.36 L 60.67 25.63 L 61.6 26.94 L 62.53 28.29 L 63.45 29.67 L 64.38 31.07 L 65.31 32.47 L 66.24 33.87 L 67.16 35.25 L 68.09 36.61 L 69.02 37.94 L 69.95 39.22 L 70.87 40.45 L 71.8 41.62 L 72.73 42.72 L 73.65 43.73 L 74.58 44.67 L 75.51 45.51 L 76.44 46.25 L 77.36 46.88 L 78.29 47.41 L 79.22 47.83 L 80.15 48.12 L 81.07 48.3 L 82 48.36"/></svg>
`},ODE:{blockClass:"ODE",description:"Ordinary differential equation (ODE) defined by its right hand side function.",docstringHtml:`<p>Ordinary differential equation (ODE) defined by its right hand side function.</p>
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
`,params:{func:{type:"callable",default:null,description:"right hand side function of ODE"},initial_value:{type:"number",default:"0.0",description:"initial state / initial condition"},jac:{type:"any",default:null,description:"jacobian of 'func' or 'None'"}},inputs:null,outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><svg x="3.00" y="23.87" width="90.00" height="16.26" viewBox="0 -767 5627.9 1017"><g fill="currentColor" stroke="currentColor" stroke-width="40" transform="scale(1,-1)"><g><g><g><g><path d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path></g><g transform="translate(313.8,-2) translate(-250 0)"><path d="M190 609Q190 637 208 653T252 669Q275 667 292 652T309 609Q309 579 292 564T250 549Q225 549 208 564T190 609Z"></path></g></g></g><g transform="translate(849.8,0)"><path d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path></g><g transform="translate(1905.6,0)"><path d="M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z"></path></g><g transform="translate(2455.6,0)"><path d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path></g><g transform="translate(2844.6,0)"><path d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path></g><g transform="translate(3416.6,0)"><path d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path></g><g transform="translate(3861.2,0)"><path d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path></g><g transform="translate(4433.2,0)"><path d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path></g><g transform="translate(4877.9,0)"><path d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"></path></g><g transform="translate(5238.9,0)"><path d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path></g></g></g></svg></svg>
`},DynamicalSystem:{blockClass:"DynamicalSystem",description:"This block implements a nonlinear dynamical system / nonlinear state space model.",docstringHtml:`<p>This block implements a nonlinear dynamical system / nonlinear state space model.</p>
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
`,params:{func_dyn:{type:"callable",default:null,description:"right hand side function of ode-part of the system"},func_alg:{type:"callable",default:null,description:"output function of the system"},initial_value:{type:"number",default:"0.0",description:"initial state / initial condition"},jac_dyn:{type:"any",default:null,description:"optional jacobian of `func_dyn` to improve convergence for implicit ode solvers"}},inputs:null,outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><svg x="23.00" y="8.41" width="50.00" height="47.18" viewBox="0 -1408.5 2455.6 2317"><g fill="currentColor" stroke="currentColor" stroke-width="40" transform="scale(1,-1)"><g><g><g transform="translate(0,641.5)"><g><g><g><g><path d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path></g><g transform="translate(313.8,-2) translate(-250 0)"><path d="M190 609Q190 637 208 653T252 669Q275 667 292 652T309 609Q309 579 292 564T250 549Q225 549 208 564T190 609Z"></path></g></g></g></g><g transform="translate(572,0)"><g></g><g transform="translate(277.8,0)"><path d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path></g><g transform="translate(1333.6,0)"><path d="M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z"></path></g></g></g><g transform="translate(0,-658.5)"><g transform="translate(82,0)"><g><path d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path></g></g><g transform="translate(572,0)"><g></g><g transform="translate(277.8,0)"><path d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path></g><g transform="translate(1333.6,0)"><path d="M311 43Q296 30 267 15T206 0Q143 0 105 45T66 160Q66 265 143 353T314 442Q361 442 401 394L404 398Q406 401 409 404T418 412T431 419T447 422Q461 422 470 413T480 394Q480 379 423 152T363 -80Q345 -134 286 -169T151 -205Q10 -205 10 -137Q10 -111 28 -91T74 -71Q89 -71 102 -80T116 -111Q116 -121 114 -130T107 -144T99 -154T92 -162L90 -164H91Q101 -167 151 -167Q189 -167 211 -155Q234 -144 254 -122T282 -75Q288 -56 298 -13Q311 35 311 43ZM384 328L380 339Q377 350 375 354T369 368T359 382T346 393T328 402T306 405Q262 405 221 352Q191 313 171 233T151 117Q151 38 213 38Q269 38 323 108L331 118L384 328Z"></path></g></g></g></g></g></g></svg></svg>
`},StateSpace:{blockClass:"StateSpace",description:"Linear time invariant (LTI) multi input multi output (MIMO) state space model.",docstringHtml:`<p>Linear time invariant (LTI) multi input multi output (MIMO) state space model.</p>
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
`,params:{A:{type:"number",default:"-1.0",description:""},B:{type:"number",default:"1.0",description:""},C:{type:"number",default:"-1.0",description:""},D:{type:"number",default:"1.0",description:"real valued state space matrices"},initial_value:{type:"any",default:null,description:"initial state / initial condition state_labels, input_labels, output_labels : list[str], None optional identifiers for the states, inputs and outputs of the model. Models assembled by 'Simulation.to_statespace' carry the block names they were built from here. These are also exactly the 'states', 'inputs' and 'outputs' keyword arguments of 'control.StateSpace', so the model hands over to python-control without an adapter."},state_labels:{type:"any",default:null,description:""},input_labels:{type:"any",default:null,description:""},output_labels:{type:"any",default:null,description:"optional identifiers for the states, inputs and outputs of the model. Models assembled by 'Simulation.to_statespace' carry the block names they were built from here. These are also exactly the 'states', 'inputs' and 'outputs' keyword arguments of 'control.StateSpace', so the model hands over to python-control without an adapter."}},inputs:null,outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><svg x="3.00" y="24.84" width="90.00" height="14.32" viewBox="0 -767 5336.6 849"><g fill="currentColor" stroke="currentColor" stroke-width="40" transform="scale(1,-1)"><g><g><g><g><path d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path></g><g transform="translate(313.8,-2) translate(-250 0)"><path d="M190 609Q190 637 208 653T252 669Q275 667 292 652T309 609Q309 579 292 564T250 549Q225 549 208 564T190 609Z"></path></g></g></g><g transform="translate(849.8,0)"><path d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path></g><g transform="translate(1905.6,0)"><path d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path></g><g transform="translate(2655.6,0)"><path d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path></g><g transform="translate(3227.6,0)"><g><path d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"></path></g></g><g transform="translate(4005.6,0)"><path d="M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z"></path></g><g transform="translate(4764.6,0)"><path d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path></g></g></g></svg></svg>
`},PT1:{blockClass:"PT1",description:"First-order lag element (PT1).",docstringHtml:`<p>First-order lag element (PT1).</p>
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
`,params:{K:{type:"number",default:"1.0",description:"static gain"},T:{type:"number",default:"1.0",description:"time constant in seconds (must be > 0)"}},inputs:["in"],outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="50" x2="86" y2="50"/><line x1="10" y1="10" x2="10" y2="54"/><path d="M 14 50 L 15.15 50 L 16.31 50 L 17.46 50 L 18.61 50 L 19.76 50 L 20.92 50 L 22.07 50 L 23.22 50 L 24.37 49.5 L 25.53 46.31 L 26.68 43.4 L 27.83 40.76 L 28.98 38.36 L 30.14 36.17 L 31.29 34.17 L 32.44 32.36 L 33.59 30.71 L 34.75 29.21 L 35.9 27.84 L 37.05 26.6 L 38.2 25.47 L 39.36 24.44 L 40.51 23.5 L 41.66 22.64 L 42.81 21.87 L 43.97 21.16 L 45.12 20.52 L 46.27 19.93 L 47.42 19.4 L 48.58 18.91 L 49.73 18.47 L 50.88 18.07 L 52.03 17.7 L 53.19 17.37 L 54.34 17.07 L 55.49 16.79 L 56.64 16.54 L 57.8 16.31 L 58.95 16.11 L 60.1 15.92 L 61.25 15.74 L 62.41 15.59 L 63.56 15.44 L 64.71 15.31 L 65.86 15.2 L 67.02 15.09 L 68.17 14.99 L 69.32 14.9 L 70.47 14.82 L 71.63 14.75 L 72.78 14.68 L 73.93 14.62 L 75.08 14.56 L 76.24 14.51 L 77.39 14.47 L 78.54 14.42 L 79.69 14.39 L 80.85 14.35 L 82 14.32"/></svg>
`},PT2:{blockClass:"PT2",description:"Second-order lag element (PT2).",docstringHtml:`<p>Second-order lag element (PT2).</p>
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
`,params:{K:{type:"number",default:"1.0",description:"static gain"},T:{type:"number",default:"1.0",description:"time constant in seconds (must be > 0)"},d:{type:"number",default:"1.0",description:"damping ratio (must be >= 0)"}},inputs:["in"],outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="50" x2="86" y2="50"/><line x1="10" y1="10" x2="10" y2="54"/><path d="M 14 50 L 14.69 50 L 15.37 50 L 16.06 50 L 16.75 50 L 17.43 50 L 18.12 50 L 18.81 50 L 19.49 50 L 20.18 50 L 20.87 50 L 21.56 50 L 22.24 50 L 22.93 50 L 23.62 50 L 24.3 49.99 L 24.99 49.25 L 25.68 47.51 L 26.36 44.96 L 27.05 41.78 L 27.74 38.21 L 28.42 34.45 L 29.11 30.69 L 29.8 27.1 L 30.48 23.84 L 31.17 21.03 L 31.86 18.74 L 32.55 17.03 L 33.23 15.92 L 33.92 15.39 L 34.61 15.41 L 35.29 15.93 L 35.98 16.86 L 36.67 18.11 L 37.35 19.6 L 38.04 21.24 L 38.73 22.92 L 39.41 24.57 L 40.1 26.11 L 40.79 27.48 L 41.47 28.65 L 42.16 29.56 L 42.85 30.22 L 43.54 30.6 L 44.22 30.74 L 44.91 30.64 L 45.6 30.33 L 46.28 29.86 L 46.97 29.25 L 47.66 28.56 L 48.34 27.82 L 49.03 27.07 L 49.72 26.36 L 50.4 25.7 L 51.09 25.12 L 51.78 24.65 L 52.46 24.29 L 53.15 24.04 L 53.84 23.92 L 54.53 23.9 L 55.21 23.98 L 55.9 24.15 L 56.59 24.39 L 57.27 24.67 L 57.96 24.99 L 58.65 25.32 L 59.33 25.65 L 60.02 25.96 L 60.71 26.24 L 61.39 26.48 L 62.08 26.67 L 62.77 26.81 L 63.45 26.9 L 64.14 26.93 L 64.83 26.92 L 65.52 26.87 L 66.2 26.78 L 66.89 26.67 L 67.58 26.53 L 68.26 26.39 L 68.95 26.24 L 69.64 26.1 L 70.32 25.97 L 71.01 25.85 L 71.7 25.75 L 72.38 25.67 L 73.07 25.62 L 73.76 25.59 L 74.44 25.58 L 75.13 25.6 L 75.82 25.63 L 76.51 25.67 L 77.19 25.73 L 77.88 25.79 L 78.57 25.85 L 79.25 25.92 L 79.94 25.98 L 80.63 26.04 L 81.31 26.09 L 82 26.13"/></svg>
`},LeadLag:{blockClass:"LeadLag",description:"Lead-Lag compensator.",docstringHtml:`<p>Lead-Lag compensator.</p>
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
`,params:{K:{type:"number",default:"1.0",description:"static gain"},T1:{type:"number",default:"1.0",description:"lead (numerator) time constant in seconds"},T2:{type:"number",default:"1.0",description:"lag (denominator) time constant in seconds (must be > 0)"}},inputs:["in"],outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="50" x2="86" y2="50"/><line x1="10" y1="10" x2="10" y2="54"/><path d="M 14 50 L 15.15 50 L 16.31 50 L 17.46 50 L 18.61 50 L 19.76 50 L 20.92 50 L 22.07 50 L 23.22 50 L 24.37 19.58 L 25.53 25.55 L 26.68 29.79 L 27.83 32.74 L 28.98 34.73 L 30.14 36.02 L 31.29 36.78 L 32.44 37.18 L 33.59 37.3 L 34.75 37.22 L 35.9 37.02 L 37.05 36.72 L 38.2 36.35 L 39.36 35.96 L 40.51 35.54 L 41.66 35.12 L 42.81 34.7 L 43.97 34.29 L 45.12 33.89 L 46.27 33.5 L 47.42 33.13 L 48.58 32.78 L 49.73 32.45 L 50.88 32.14 L 52.03 31.84 L 53.19 31.56 L 54.34 31.3 L 55.49 31.06 L 56.64 30.83 L 57.8 30.61 L 58.95 30.41 L 60.1 30.22 L 61.25 30.04 L 62.41 29.87 L 63.56 29.72 L 64.71 29.57 L 65.86 29.44 L 67.02 29.31 L 68.17 29.19 L 69.32 29.08 L 70.47 28.98 L 71.63 28.88 L 72.78 28.79 L 73.93 28.71 L 75.08 28.63 L 76.24 28.55 L 77.39 28.48 L 78.54 28.42 L 79.69 28.36 L 80.85 28.3 L 82 28.25"/></svg>
`},PID:{blockClass:"PID",description:"Proportional-Integral-Differentiation (PID) controller.",docstringHtml:`<p>Proportional-Integral-Differentiation (PID) controller.</p>
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
`,params:{Kp:{type:"integer",default:"0",description:"proportional controller coefficient"},Ki:{type:"integer",default:"0",description:"integral controller coefficient"},Kd:{type:"integer",default:"0",description:"differentiator controller coefficient"},f_max:{type:"integer",default:"100",description:"highest expected signal frequency"}},inputs:["in"],outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="50" x2="86" y2="50"/><line x1="10" y1="10" x2="10" y2="54"/><path d="M 14 50 L 14.69 50 L 15.37 50 L 16.06 50 L 16.75 50 L 17.43 50 L 18.12 50 L 18.81 50 L 19.49 50 L 20.18 50 L 20.87 50 L 21.56 50 L 22.24 49.99 L 22.93 49.53 L 23.62 48.41 L 24.3 46.75 L 24.99 44.68 L 25.68 42.31 L 26.36 39.77 L 27.05 37.15 L 27.74 34.54 L 28.42 32.02 L 29.11 29.66 L 29.8 27.5 L 30.48 25.59 L 31.17 23.96 L 31.86 22.6 L 32.55 21.54 L 33.23 20.75 L 33.92 20.23 L 34.61 19.96 L 35.29 19.92 L 35.98 20.06 L 36.67 20.37 L 37.35 20.81 L 38.04 21.34 L 38.73 21.95 L 39.41 22.6 L 40.1 23.27 L 40.79 23.93 L 41.47 24.56 L 42.16 25.16 L 42.85 25.69 L 43.54 26.17 L 44.22 26.57 L 44.91 26.91 L 45.6 27.17 L 46.28 27.36 L 46.97 27.48 L 47.66 27.54 L 48.34 27.54 L 49.03 27.5 L 49.72 27.42 L 50.4 27.3 L 51.09 27.16 L 51.78 27 L 52.46 26.84 L 53.15 26.67 L 53.84 26.5 L 54.53 26.34 L 55.21 26.19 L 55.9 26.06 L 56.59 25.94 L 57.27 25.84 L 57.96 25.76 L 58.65 25.7 L 59.33 25.65 L 60.02 25.62 L 60.71 25.61 L 61.39 25.61 L 62.08 25.62 L 62.77 25.64 L 63.45 25.67 L 64.14 25.71 L 64.83 25.75 L 65.52 25.79 L 66.2 25.84 L 66.89 25.88 L 67.58 25.92 L 68.26 25.96 L 68.95 25.99 L 69.64 26.02 L 70.32 26.04 L 71.01 26.06 L 71.7 26.08 L 72.38 26.09 L 73.07 26.1 L 73.76 26.1 L 74.44 26.1 L 75.13 26.1 L 75.82 26.09 L 76.51 26.08 L 77.19 26.07 L 77.88 26.06 L 78.57 26.05 L 79.25 26.04 L 79.94 26.03 L 80.63 26.02 L 81.31 26.01 L 82 26"/></svg>
`},AntiWindupPID:{blockClass:"AntiWindupPID",description:"Proportional-Integral-Differentiation (PID) controller with anti-windup mechanism (back-calculation).",docstringHtml:`<p>Proportional-Integral-Differentiation (PID) controller with anti-windup mechanism (back-calculation).</p>
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
`,params:{Kp:{type:"integer",default:"0",description:"proportional controller coefficient"},Ki:{type:"integer",default:"0",description:"integral controller coefficient"},Kd:{type:"integer",default:"0",description:"differentiator controller coefficient"},f_max:{type:"integer",default:"100",description:"highest expected signal frequency"},Ks:{type:"integer",default:"10",description:"feedback term for back calculation for anti-windup control of integrator"},limits:{type:"array",default:"[-10, 10]",description:"lower and upper limit for PID output that triggers anti-windup of integrator"}},inputs:["in"],outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="50" x2="86" y2="50"/><line x1="10" y1="10" x2="10" y2="54"/><path d="M 14 50 L 14.69 50 L 15.37 50 L 16.06 50 L 16.75 50 L 17.43 50 L 18.12 50 L 18.81 50 L 19.49 50 L 20.18 50 L 20.87 50 L 21.56 50 L 22.24 49.99 L 22.93 49.53 L 23.62 48.41 L 24.3 46.75 L 24.99 44.68 L 25.68 42.31 L 26.36 39.77 L 27.05 37.15 L 27.74 34.54 L 28.42 32.02 L 29.11 30.32 L 29.8 30.32 L 30.48 30.32 L 31.17 30.32 L 31.86 30.32 L 32.55 30.32 L 33.23 30.32 L 33.92 30.32 L 34.61 30.32 L 35.29 30.32 L 35.98 30.32 L 36.67 30.32 L 37.35 30.32 L 38.04 30.32 L 38.73 30.32 L 39.41 30.32 L 40.1 30.32 L 40.79 30.32 L 41.47 30.32 L 42.16 30.32 L 42.85 30.32 L 43.54 30.32 L 44.22 30.32 L 44.91 30.32 L 45.6 30.32 L 46.28 30.32 L 46.97 30.32 L 47.66 30.32 L 48.34 30.32 L 49.03 30.32 L 49.72 30.32 L 50.4 30.32 L 51.09 30.32 L 51.78 30.32 L 52.46 30.32 L 53.15 30.32 L 53.84 30.32 L 54.53 30.32 L 55.21 30.32 L 55.9 30.32 L 56.59 30.32 L 57.27 30.32 L 57.96 30.32 L 58.65 30.32 L 59.33 30.32 L 60.02 30.32 L 60.71 30.32 L 61.39 30.32 L 62.08 30.32 L 62.77 30.32 L 63.45 30.32 L 64.14 30.32 L 64.83 30.32 L 65.52 30.32 L 66.2 30.32 L 66.89 30.32 L 67.58 30.32 L 68.26 30.32 L 68.95 30.32 L 69.64 30.32 L 70.32 30.32 L 71.01 30.32 L 71.7 30.32 L 72.38 30.32 L 73.07 30.32 L 73.76 30.32 L 74.44 30.32 L 75.13 30.32 L 75.82 30.32 L 76.51 30.32 L 77.19 30.32 L 77.88 30.32 L 78.57 30.32 L 79.25 30.32 L 79.94 30.32 L 80.63 30.32 L 81.31 30.32 L 82 30.32"/></svg>
`},RateLimiter:{blockClass:"RateLimiter",description:"Rate limiter block that limits the rate of change of a signal.",docstringHtml:`<p>Rate limiter block that limits the rate of change of a signal.</p>
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
`,params:{rate:{type:"number",default:"1.0",description:"maximum rate of change (positive value)"},f_max:{type:"integer",default:"100",description:"tracking bandwidth parameter"}},inputs:["in"],outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="50" x2="86" y2="50"/><line x1="10" y1="10" x2="10" y2="54"/><path d="M 14 50 L 24.2 50 L 54.8 14 L 82 14"/></svg>
`},Backlash:{blockClass:"Backlash",description:"Backlash (mechanical play) element.",docstringHtml:`<p>Backlash (mechanical play) element.</p>
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
`,params:{width:{type:"number",default:"1.0",description:"total backlash width (play)"},f_max:{type:"integer",default:"100",description:"tracking bandwidth parameter when engaged"}},inputs:["in"],outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="32" x2="86" y2="32"/><line x1="48" y1="10" x2="48" y2="54"/><path d="M 15.62 45.09 L 42.82 45.09 L 80.38 18.91 L 53.18 18.91 L 15.62 45.09"/></svg>
`},Deadband:{blockClass:"Deadband",description:"Deadband (dead zone) element.",docstringHtml:`<p>Deadband (dead zone) element.</p>
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
`,params:{lower:{type:"number",default:"-1.0",description:"lower bound of the dead zone"},upper:{type:"number",default:"1.0",description:"upper bound of the dead zone"}},inputs:["in"],outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="48" y1="10" x2="48" y2="54"/><path d="M 15.62 50 L 38.29 32 L 57.71 32 L 80.38 14"/></svg>
`},TransferFunctionNumDen:{blockClass:"TransferFunctionNumDen",description:"This block defines a LTI (SISO) transfer function.",docstringHtml:`<p>This block defines a LTI (SISO) transfer function.</p>
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
`,params:{Num:{type:"array",default:"[1]",description:"numerator polynomial coefficients"},Den:{type:"array",default:"[1, 1]",description:"denominator polynomial coefficients"}},inputs:["in"],outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="50" x2="86" y2="50"/><line x1="10" y1="10" x2="10" y2="54"/><path d="M 14 27.43 L 14.86 27.42 L 15.72 27.41 L 16.58 27.4 L 17.44 27.38 L 18.3 27.36 L 19.16 27.34 L 20.03 27.32 L 20.89 27.29 L 21.75 27.26 L 22.61 27.22 L 23.47 27.18 L 24.33 27.13 L 25.19 27.08 L 26.05 27.01 L 26.91 26.94 L 27.77 26.85 L 28.63 26.76 L 29.49 26.64 L 30.35 26.51 L 31.22 26.36 L 32.08 26.18 L 32.94 25.97 L 33.8 25.73 L 34.66 25.46 L 35.52 25.13 L 36.38 24.76 L 37.24 24.32 L 38.1 23.81 L 38.96 23.21 L 39.82 22.52 L 40.68 21.72 L 41.54 20.8 L 42.41 19.77 L 43.27 18.65 L 44.13 17.5 L 44.99 16.47 L 45.85 15.79 L 46.71 15.81 L 47.57 16.88 L 48.43 19.12 L 49.29 22.28 L 50.15 25.88 L 51.01 29.45 L 51.87 32.68 L 52.73 35.48 L 53.59 37.82 L 54.46 39.78 L 55.32 41.39 L 56.18 42.73 L 57.04 43.83 L 57.9 44.76 L 58.76 45.53 L 59.62 46.18 L 60.48 46.73 L 61.34 47.19 L 62.2 47.59 L 63.06 47.92 L 63.92 48.21 L 64.78 48.46 L 65.65 48.67 L 66.51 48.85 L 67.37 49 L 68.23 49.14 L 69.09 49.25 L 69.95 49.35 L 70.81 49.44 L 71.67 49.51 L 72.53 49.58 L 73.39 49.63 L 74.25 49.68 L 75.11 49.72 L 75.97 49.76 L 76.84 49.79 L 77.7 49.82 L 78.56 49.84 L 79.42 49.86 L 80.28 49.88 L 81.14 49.9 L 82 49.91"/></svg>
`},TransferFunctionZPG:{blockClass:"TransferFunctionZPG",description:"This block defines a LTI (SISO) transfer function.",docstringHtml:`<p>This block defines a LTI (SISO) transfer function.</p>
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
`,params:{Zeros:{type:"array",default:"[]",description:"transfer function zeros"},Poles:{type:"array",default:"[-1]",description:"transfer function poles"},Gain:{type:"number",default:"1.0",description:"gain term of transfer function"}},inputs:["in"],outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="32" x2="86" y2="32"/><line x1="48" y1="10" x2="48" y2="54"/><path d="M 25.9 17.8 L 32.7 24.6 M 32.7 17.8 L 25.9 24.6"/><path d="M 25.9 39.4 L 32.7 46.2 M 32.7 39.4 L 25.9 46.2"/><circle r="3.4" cx="63.3" cy="32"/></svg>
`},ButterworthLowpassFilter:{blockClass:"ButterworthLowpassFilter",description:"Direct implementation of a low pass butterworth filter block.",docstringHtml:`<p>Direct implementation of a low pass butterworth filter block.</p>
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
`,params:{Fc:{type:"integer",default:"100",description:"corner frequency of the filter in [Hz]"},n:{type:"integer",default:"2",description:"filter order"}},inputs:["in"],outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="50" x2="86" y2="50"/><line x1="10" y1="10" x2="10" y2="54"/><path d="M 14 14 L 14.86 14 L 15.72 14 L 16.58 14 L 17.44 14 L 18.3 14 L 19.16 14 L 20.03 14 L 20.89 14 L 21.75 14 L 22.61 14 L 23.47 14 L 24.33 14 L 25.19 14 L 26.05 14 L 26.91 14 L 27.77 14 L 28.63 14 L 29.49 14 L 30.35 14 L 31.22 14 L 32.08 14 L 32.94 14 L 33.8 14 L 34.66 14 L 35.52 14.01 L 36.38 14.01 L 37.24 14.02 L 38.1 14.03 L 38.96 14.05 L 39.82 14.09 L 40.68 14.15 L 41.54 14.27 L 42.41 14.46 L 43.27 14.8 L 44.13 15.37 L 44.99 16.3 L 45.85 17.76 L 46.71 19.92 L 47.57 22.83 L 48.43 26.38 L 49.29 30.23 L 50.15 33.98 L 51.01 37.34 L 51.87 40.17 L 52.73 42.45 L 53.59 44.24 L 54.46 45.62 L 55.32 46.68 L 56.18 47.48 L 57.04 48.1 L 57.9 48.56 L 58.76 48.91 L 59.62 49.18 L 60.48 49.38 L 61.34 49.53 L 62.2 49.64 L 63.06 49.73 L 63.92 49.8 L 64.78 49.85 L 65.65 49.88 L 66.51 49.91 L 67.37 49.93 L 68.23 49.95 L 69.09 49.96 L 69.95 49.97 L 70.81 49.98 L 71.67 49.98 L 72.53 49.99 L 73.39 49.99 L 74.25 49.99 L 75.11 49.99 L 75.97 50 L 76.84 50 L 77.7 50 L 78.56 50 L 79.42 50 L 80.28 50 L 81.14 50 L 82 50"/></svg>
`},ButterworthHighpassFilter:{blockClass:"ButterworthHighpassFilter",description:"Direct implementation of a high pass butterworth filter block.",docstringHtml:`<p>Direct implementation of a high pass butterworth filter block.</p>
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
`,params:{Fc:{type:"integer",default:"100",description:"corner frequency of the filter in [Hz]"},n:{type:"integer",default:"2",description:"filter order"}},inputs:["in"],outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="50" x2="86" y2="50"/><line x1="10" y1="10" x2="10" y2="54"/><path d="M 14 50 L 14.86 50 L 15.72 50 L 16.58 50 L 17.44 50 L 18.3 50 L 19.16 50 L 20.03 50 L 20.89 49.99 L 21.75 49.99 L 22.61 49.99 L 23.47 49.99 L 24.33 49.98 L 25.19 49.98 L 26.05 49.97 L 26.91 49.96 L 27.77 49.95 L 28.63 49.93 L 29.49 49.91 L 30.35 49.88 L 31.22 49.85 L 32.08 49.8 L 32.94 49.73 L 33.8 49.64 L 34.66 49.53 L 35.52 49.38 L 36.38 49.18 L 37.24 48.91 L 38.1 48.56 L 38.96 48.1 L 39.82 47.48 L 40.68 46.68 L 41.54 45.62 L 42.41 44.24 L 43.27 42.45 L 44.13 40.17 L 44.99 37.34 L 45.85 33.98 L 46.71 30.23 L 47.57 26.38 L 48.43 22.83 L 49.29 19.92 L 50.15 17.76 L 51.01 16.3 L 51.87 15.37 L 52.73 14.8 L 53.59 14.46 L 54.46 14.27 L 55.32 14.15 L 56.18 14.09 L 57.04 14.05 L 57.9 14.03 L 58.76 14.02 L 59.62 14.01 L 60.48 14.01 L 61.34 14 L 62.2 14 L 63.06 14 L 63.92 14 L 64.78 14 L 65.65 14 L 66.51 14 L 67.37 14 L 68.23 14 L 69.09 14 L 69.95 14 L 70.81 14 L 71.67 14 L 72.53 14 L 73.39 14 L 74.25 14 L 75.11 14 L 75.97 14 L 76.84 14 L 77.7 14 L 78.56 14 L 79.42 14 L 80.28 14 L 81.14 14 L 82 14"/></svg>
`},ButterworthBandpassFilter:{blockClass:"ButterworthBandpassFilter",description:"Direct implementation of a bandpass butterworth filter block.",docstringHtml:`<p>Direct implementation of a bandpass butterworth filter block.</p>
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
`,params:{Fc:{type:"array",default:"[50, 100]",description:"corner frequencies (left, right) of the filter in [Hz]"},n:{type:"integer",default:"2",description:"filter order"}},inputs:["in"],outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="50" x2="86" y2="50"/><line x1="10" y1="10" x2="10" y2="54"/><path d="M 14 49.99 L 14.69 49.99 L 15.37 49.99 L 16.06 49.99 L 16.75 49.98 L 17.43 49.98 L 18.12 49.98 L 18.81 49.98 L 19.49 49.97 L 20.18 49.97 L 20.87 49.96 L 21.56 49.96 L 22.24 49.95 L 22.93 49.94 L 23.62 49.94 L 24.3 49.93 L 24.99 49.91 L 25.68 49.9 L 26.36 49.89 L 27.05 49.87 L 27.74 49.85 L 28.42 49.82 L 29.11 49.8 L 29.8 49.77 L 30.48 49.73 L 31.17 49.69 L 31.86 49.63 L 32.55 49.57 L 33.23 49.5 L 33.92 49.42 L 34.61 49.32 L 35.29 49.2 L 35.98 49.06 L 36.67 48.89 L 37.35 48.68 L 38.04 48.42 L 38.73 48.1 L 39.41 47.7 L 40.1 47.18 L 40.79 46.5 L 41.47 45.6 L 42.16 44.37 L 42.85 42.65 L 43.54 40.17 L 44.22 36.51 L 44.91 31.17 L 45.6 24.2 L 46.28 17.7 L 46.97 14.54 L 47.66 14.01 L 48.34 14.01 L 49.03 14.54 L 49.72 17.7 L 50.4 24.2 L 51.09 31.17 L 51.78 36.51 L 52.46 40.17 L 53.15 42.65 L 53.84 44.37 L 54.53 45.6 L 55.21 46.5 L 55.9 47.18 L 56.59 47.7 L 57.27 48.1 L 57.96 48.42 L 58.65 48.68 L 59.33 48.89 L 60.02 49.06 L 60.71 49.2 L 61.39 49.32 L 62.08 49.42 L 62.77 49.5 L 63.45 49.57 L 64.14 49.63 L 64.83 49.69 L 65.52 49.73 L 66.2 49.77 L 66.89 49.8 L 67.58 49.82 L 68.26 49.85 L 68.95 49.87 L 69.64 49.89 L 70.32 49.9 L 71.01 49.91 L 71.7 49.93 L 72.38 49.94 L 73.07 49.94 L 73.76 49.95 L 74.44 49.96 L 75.13 49.96 L 75.82 49.97 L 76.51 49.97 L 77.19 49.98 L 77.88 49.98 L 78.57 49.98 L 79.25 49.98 L 79.94 49.99 L 80.63 49.99 L 81.31 49.99 L 82 49.99"/></svg>
`},ButterworthBandstopFilter:{blockClass:"ButterworthBandstopFilter",description:"Direct implementation of a bandstop butterworth filter block.",docstringHtml:`<p>Direct implementation of a bandstop butterworth filter block.</p>
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
`,params:{Fc:{type:"array",default:"[50, 100]",description:"corner frequencies (left, right) of the filter in [Hz]"},n:{type:"integer",default:"2",description:"filter order"}},inputs:["in"],outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="50" x2="86" y2="50"/><line x1="10" y1="10" x2="10" y2="54"/><path d="M 14 14 L 14.69 14 L 15.37 14 L 16.06 14 L 16.75 14 L 17.43 14 L 18.12 14 L 18.81 14 L 19.49 14 L 20.18 14 L 20.87 14 L 21.56 14 L 22.24 14 L 22.93 14 L 23.62 14 L 24.3 14 L 24.99 14 L 25.68 14 L 26.36 14 L 27.05 14 L 27.74 14 L 28.42 14 L 29.11 14 L 29.8 14 L 30.48 14 L 31.17 14 L 31.86 14 L 32.55 14 L 33.23 14 L 33.92 14 L 34.61 14.01 L 35.29 14.01 L 35.98 14.01 L 36.67 14.02 L 37.35 14.02 L 38.04 14.03 L 38.73 14.05 L 39.41 14.07 L 40.1 14.11 L 40.79 14.17 L 41.47 14.27 L 42.16 14.44 L 42.85 14.76 L 43.54 15.37 L 44.22 16.62 L 44.91 19.31 L 45.6 24.89 L 46.28 34.11 L 46.97 43.76 L 47.66 49.3 L 48.34 49.3 L 49.03 43.76 L 49.72 34.11 L 50.4 24.89 L 51.09 19.31 L 51.78 16.62 L 52.46 15.37 L 53.15 14.76 L 53.84 14.44 L 54.53 14.27 L 55.21 14.17 L 55.9 14.11 L 56.59 14.07 L 57.27 14.05 L 57.96 14.03 L 58.65 14.02 L 59.33 14.02 L 60.02 14.01 L 60.71 14.01 L 61.39 14.01 L 62.08 14 L 62.77 14 L 63.45 14 L 64.14 14 L 64.83 14 L 65.52 14 L 66.2 14 L 66.89 14 L 67.58 14 L 68.26 14 L 68.95 14 L 69.64 14 L 70.32 14 L 71.01 14 L 71.7 14 L 72.38 14 L 73.07 14 L 73.76 14 L 74.44 14 L 75.13 14 L 75.82 14 L 76.51 14 L 77.19 14 L 77.88 14 L 78.57 14 L 79.25 14 L 79.94 14 L 80.63 14 L 81.31 14 L 82 14"/></svg>
`},Adder:{blockClass:"Adder",description:"Summs / adds up all input signals to a single output signal (MISO)",docstringHtml:`<p>Summs / adds up all input signals to a single output signal (MISO)</p>
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
`,params:{operations:{type:"any",default:null,description:"optional string of operations to be applied before summation, i.e. '+-' will compute the difference, 'None' will just perform regular sum"}},inputs:null,outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <path d="M 62 19 L 62 14 L 34 14 L 44 32 L 34 50 L 62 50 L 62 45"/>
</svg>
`},Multiplier:{blockClass:"Multiplier",description:"Multiplies all signals from all input ports (MISO).",docstringHtml:`<p>Multiplies all signals from all input ports (MISO).</p>
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
`,params:{},inputs:null,outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <path d="M 36 50 L 36 14 M 60 50 L 60 14 M 31 14 L 65 14"/>
</svg>
`},Divider:{blockClass:"Divider",description:"Multiplies and divides input signals (MISO).",docstringHtml:`<p>Multiplies and divides input signals (MISO).</p>
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
`,params:{operations:{type:"string",default:'"*/"',description:"String of ``*`` and ``/`` characters indicating which inputs are multiplied (``*``) or divided (``/``). Inputs beyond the length of the string default to ``*``. Defaults to ``'*/'`` (divide second input by first)."},zero_div:{type:"string",default:'"warn"',description:"Behaviour when a denominator input is zero. One of:"}},inputs:null,outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <line x1="32" y1="32" x2="64" y2="32"/>
  <circle cx="48" cy="20" r="3" fill="currentColor" stroke="none"/>
  <circle cx="48" cy="44" r="3" fill="currentColor" stroke="none"/>
</svg>
`},Amplifier:{blockClass:"Amplifier",description:"Amplifies the input signal by multiplication with a constant gain term.",docstringHtml:`<p>Amplifies the input signal by multiplication with a constant gain term.</p>
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
`,params:{gain:{type:"number",default:"1.0",description:"amplifier gain"}},inputs:null,outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="27,14 27,50 69,32"/>
</svg>
`},Function:{blockClass:"Function",description:"Arbitrary MIMO function block, defined by a function or `lambda` expression.",docstringHtml:`<p>Arbitrary MIMO function block, defined by a function or <cite>lambda</cite> expression.</p>
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
`,params:{func:{type:"callable",default:null,description:"MIMO function that defines algebraic block IO behaviour, signature `func(*tuple)`"}},inputs:null,outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><svg x="28.65" y="21.82" width="38.69" height="20.36" viewBox="0 -750 1900 1000"><g fill="currentColor" stroke="currentColor" stroke-width="40" transform="scale(1,-1)"><g><g><path d="M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z"></path></g><g transform="translate(550,0)"><path d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path></g><g transform="translate(939,0)"><path d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path></g><g transform="translate(1511,0)"><path d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path></g></g></g></svg></svg>
`},Polynomial:{blockClass:"Polynomial",description:"Polynomial operator block.",docstringHtml:`<p>Polynomial operator block.</p>
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
`,params:{coeffs:{type:"array",default:"[1.0, 0.0]",description:"polynomial coefficients in descending order of power, following the ``numpy.polyval`` convention"}},inputs:null,outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><svg x="10.48" y="17.75" width="75.04" height="28.50" viewBox="0 -950 3685.5 1400"><g fill="currentColor" stroke="currentColor" stroke-width="40" transform="scale(1,-1)"><g><g><path d="M60 948Q63 950 665 950H1267L1325 815Q1384 677 1388 669H1348L1341 683Q1320 724 1285 761Q1235 809 1174 838T1033 881T882 898T699 902H574H543H251L259 891Q722 258 724 252Q725 250 724 246Q721 243 460 -56L196 -356Q196 -357 407 -357Q459 -357 548 -357T676 -358Q812 -358 896 -353T1063 -332T1204 -283T1307 -196Q1328 -170 1348 -124H1388Q1388 -125 1381 -145T1356 -210T1325 -294L1267 -449L666 -450Q64 -450 61 -448Q55 -446 55 -439Q55 -437 57 -433L590 177Q590 178 557 222T452 366T322 544L56 909L55 924Q55 945 60 948Z"></path></g><g transform="translate(1610.7,0)"><g><path d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"></path></g><g transform="translate(466,-150) scale(0.707)"><path d="M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z"></path></g></g><g transform="translate(2495.1,0)"><g></g></g><g transform="translate(2662.1,0)"><g><path d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path></g><g transform="translate(605,413) scale(0.707)"><g><path d="M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z"></path></g></g></g></g></g></svg></svg>
`},Sin:{blockClass:"Sin",description:"Sine operator block.",docstringHtml:`<p>Sine operator block.</p>
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
`,params:{},inputs:null,outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="32" x2="86" y2="32"/><line x1="48" y1="10" x2="48" y2="54"/><path d="M 15.62 32 L 16.44 33.3 L 17.26 34.59 L 18.08 35.87 L 18.9 37.12 L 19.72 38.34 L 20.54 39.52 L 21.36 40.65 L 22.18 41.72 L 23 42.74 L 23.82 43.69 L 24.64 44.56 L 25.46 45.35 L 26.28 46.06 L 27.1 46.68 L 27.92 47.21 L 28.74 47.64 L 29.56 47.97 L 30.37 48.21 L 31.19 48.33 L 32.01 48.36 L 32.83 48.28 L 33.65 48.1 L 34.47 47.82 L 35.29 47.44 L 36.11 46.96 L 36.93 46.38 L 37.75 45.72 L 38.57 44.97 L 39.39 44.13 L 40.21 43.22 L 41.03 42.24 L 41.85 41.19 L 42.67 40.09 L 43.49 38.93 L 44.31 37.73 L 45.13 36.5 L 45.95 35.23 L 46.77 33.95 L 47.59 32.65 L 48.41 31.35 L 49.23 30.05 L 50.05 28.77 L 50.87 27.5 L 51.69 26.27 L 52.51 25.07 L 53.33 23.91 L 54.15 22.81 L 54.97 21.76 L 55.79 20.78 L 56.61 19.87 L 57.43 19.03 L 58.25 18.28 L 59.07 17.62 L 59.89 17.04 L 60.71 16.56 L 61.53 16.18 L 62.35 15.9 L 63.17 15.72 L 63.99 15.64 L 64.81 15.67 L 65.63 15.79 L 66.44 16.03 L 67.26 16.36 L 68.08 16.79 L 68.9 17.32 L 69.72 17.94 L 70.54 18.65 L 71.36 19.44 L 72.18 20.31 L 73 21.26 L 73.82 22.28 L 74.64 23.35 L 75.46 24.48 L 76.28 25.66 L 77.1 26.88 L 77.92 28.13 L 78.74 29.41 L 79.56 30.7 L 80.38 32"/></svg>
`},Cos:{blockClass:"Cos",description:"Cosine operator block.",docstringHtml:`<p>Cosine operator block.</p>
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
`,params:{},inputs:null,outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="32" x2="86" y2="32"/><line x1="48" y1="10" x2="48" y2="54"/><path d="M 15.62 48.36 L 16.44 48.31 L 17.26 48.16 L 18.08 47.9 L 18.9 47.54 L 19.72 47.09 L 20.54 46.54 L 21.36 45.89 L 22.18 45.16 L 23 44.35 L 23.82 43.46 L 24.64 42.49 L 25.46 41.46 L 26.28 40.37 L 27.1 39.23 L 27.92 38.04 L 28.74 36.81 L 29.56 35.55 L 30.37 34.27 L 31.19 32.98 L 32.01 31.67 L 32.83 30.38 L 33.65 29.09 L 34.47 27.82 L 35.29 26.57 L 36.11 25.36 L 36.93 24.2 L 37.75 23.08 L 38.57 22.02 L 39.39 21.02 L 40.21 20.09 L 41.03 19.24 L 41.85 18.46 L 42.67 17.77 L 43.49 17.18 L 44.31 16.67 L 45.13 16.27 L 45.95 15.96 L 46.77 15.75 L 47.59 15.65 L 48.41 15.65 L 49.23 15.75 L 50.05 15.96 L 50.87 16.27 L 51.69 16.67 L 52.51 17.18 L 53.33 17.77 L 54.15 18.46 L 54.97 19.24 L 55.79 20.09 L 56.61 21.02 L 57.43 22.02 L 58.25 23.08 L 59.07 24.2 L 59.89 25.36 L 60.71 26.57 L 61.53 27.82 L 62.35 29.09 L 63.17 30.38 L 63.99 31.67 L 64.81 32.98 L 65.63 34.27 L 66.44 35.55 L 67.26 36.81 L 68.08 38.04 L 68.9 39.23 L 69.72 40.37 L 70.54 41.46 L 71.36 42.49 L 72.18 43.46 L 73 44.35 L 73.82 45.16 L 74.64 45.89 L 75.46 46.54 L 76.28 47.09 L 77.1 47.54 L 77.92 47.9 L 78.74 48.16 L 79.56 48.31 L 80.38 48.36"/></svg>
`},Tan:{blockClass:"Tan",description:"Tangent operator block.",docstringHtml:`<p>Tangent operator block.</p>
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
`,params:{},inputs:null,outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="32" x2="86" y2="32"/><line x1="48" y1="10" x2="48" y2="54"/><line x1="31.81" y1="14" x2="31.81" y2="50" stroke-width="1.2" opacity="0.55" stroke-dasharray="3 3"/><line x1="64.19" y1="14" x2="64.19" y2="50" stroke-width="1.2" opacity="0.55" stroke-dasharray="3 3"/><path d="M 15.62 32 L 15.89 31.7 L 16.16 31.41 L 16.43 31.11 L 16.7 30.81 L 16.97 30.51 L 17.24 30.21 L 17.52 29.91 L 17.79 29.6 L 18.06 29.29 L 18.33 28.97 L 18.6 28.65 L 18.87 28.33 L 19.14 28 L 19.41 27.66 L 19.68 27.32 L 19.95 26.97 L 20.23 26.61 L 20.5 26.24 L 20.77 25.86 L 21.04 25.47 L 21.31 25.07 L 21.58 24.66 L 21.85 24.23 L 22.12 23.78 L 22.39 23.32 L 22.66 22.84 L 22.94 22.33 L 23.21 21.81 L 23.48 21.26 L 23.75 20.68 L 24.02 20.06 L 24.29 19.42 L 24.56 18.73 L 24.83 18 L 25.1 17.22 L 25.37 16.39 L 25.64 15.49 M 37.84 48.99 L 38.11 48.05 L 38.38 47.19 L 38.65 46.38 L 38.92 45.63 L 39.19 44.92 L 39.46 44.25 L 39.74 43.63 L 40.01 43.03 L 40.28 42.46 L 40.55 41.93 L 40.82 41.41 L 41.09 40.92 L 41.36 40.45 L 41.63 39.99 L 41.9 39.56 L 42.17 39.14 L 42.45 38.73 L 42.72 38.33 L 42.99 37.95 L 43.26 37.57 L 43.53 37.21 L 43.8 36.86 L 44.07 36.51 L 44.34 36.17 L 44.61 35.84 L 44.88 35.51 L 45.15 35.19 L 45.43 34.87 L 45.7 34.56 L 45.97 34.25 L 46.24 33.94 L 46.51 33.64 L 46.78 33.34 L 47.05 33.04 L 47.32 32.74 L 47.59 32.44 L 47.86 32.15 L 48.14 31.85 L 48.41 31.56 L 48.68 31.26 L 48.95 30.96 L 49.22 30.66 L 49.49 30.36 L 49.76 30.06 L 50.03 29.75 L 50.3 29.44 L 50.57 29.13 L 50.85 28.81 L 51.12 28.49 L 51.39 28.16 L 51.66 27.83 L 51.93 27.49 L 52.2 27.14 L 52.47 26.79 L 52.74 26.43 L 53.01 26.05 L 53.28 25.67 L 53.55 25.27 L 53.83 24.86 L 54.1 24.44 L 54.37 24.01 L 54.64 23.55 L 54.91 23.08 L 55.18 22.59 L 55.45 22.07 L 55.72 21.54 L 55.99 20.97 L 56.26 20.37 L 56.54 19.75 L 56.81 19.08 L 57.08 18.37 L 57.35 17.62 L 57.62 16.81 L 57.89 15.95 L 58.16 15.01 M 70.36 48.51 L 70.63 47.61 L 70.9 46.78 L 71.17 46 L 71.44 45.27 L 71.71 44.58 L 71.98 43.94 L 72.25 43.32 L 72.52 42.74 L 72.79 42.19 L 73.06 41.67 L 73.34 41.16 L 73.61 40.68 L 73.88 40.22 L 74.15 39.77 L 74.42 39.34 L 74.69 38.93 L 74.96 38.53 L 75.23 38.14 L 75.5 37.76 L 75.77 37.39 L 76.05 37.03 L 76.32 36.68 L 76.59 36.34 L 76.86 36 L 77.13 35.67 L 77.4 35.35 L 77.67 35.03 L 77.94 34.71 L 78.21 34.4 L 78.48 34.09 L 78.76 33.79 L 79.03 33.49 L 79.3 33.19 L 79.57 32.89 L 79.84 32.59 L 80.11 32.3 L 80.38 32"/></svg>
`},Tanh:{blockClass:"Tanh",description:"Hyperbolic tangent operator block.",docstringHtml:`<p>Hyperbolic tangent operator block.</p>
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
`,params:{},inputs:null,outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="32" x2="86" y2="32"/><line x1="48" y1="10" x2="48" y2="54"/><path d="M 15.62 48.35 L 16.72 48.35 L 17.81 48.34 L 18.91 48.34 L 20.01 48.33 L 21.11 48.32 L 22.21 48.31 L 23.3 48.29 L 24.4 48.27 L 25.5 48.24 L 26.6 48.2 L 27.69 48.15 L 28.79 48.08 L 29.89 47.99 L 30.99 47.88 L 32.08 47.73 L 33.18 47.54 L 34.28 47.3 L 35.38 46.98 L 36.47 46.57 L 37.57 46.05 L 38.67 45.4 L 39.77 44.58 L 40.87 43.57 L 41.96 42.35 L 43.06 40.91 L 44.16 39.23 L 45.26 37.34 L 46.35 35.28 L 47.45 33.11 L 48.55 30.89 L 49.65 28.72 L 50.74 26.66 L 51.84 24.77 L 52.94 23.09 L 54.04 21.65 L 55.13 20.43 L 56.23 19.42 L 57.33 18.6 L 58.43 17.95 L 59.53 17.43 L 60.62 17.02 L 61.72 16.7 L 62.82 16.46 L 63.92 16.27 L 65.01 16.12 L 66.11 16.01 L 67.21 15.92 L 68.31 15.85 L 69.4 15.8 L 70.5 15.76 L 71.6 15.73 L 72.7 15.71 L 73.79 15.69 L 74.89 15.68 L 75.99 15.67 L 77.09 15.66 L 78.19 15.66 L 79.28 15.65 L 80.38 15.65"/></svg>
`},Abs:{blockClass:"Abs",description:"Absolute value operator block.",docstringHtml:`<p>Absolute value operator block.</p>
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
`,params:{},inputs:null,outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="50" x2="86" y2="50"/><path d="M 15.62 14 L 16.72 15.22 L 17.81 16.44 L 18.91 17.66 L 20.01 18.88 L 21.11 20.1 L 22.21 21.32 L 23.3 22.54 L 24.4 23.76 L 25.5 24.98 L 26.6 26.2 L 27.69 27.42 L 28.79 28.64 L 29.89 29.86 L 30.99 31.08 L 32.08 32.31 L 33.18 33.53 L 34.28 34.75 L 35.38 35.97 L 36.47 37.19 L 37.57 38.41 L 38.67 39.63 L 39.77 40.85 L 40.87 42.07 L 41.96 43.29 L 43.06 44.51 L 44.16 45.73 L 45.26 46.95 L 46.35 48.17 L 47.45 49.39 L 48.55 49.39 L 49.65 48.17 L 50.74 46.95 L 51.84 45.73 L 52.94 44.51 L 54.04 43.29 L 55.13 42.07 L 56.23 40.85 L 57.33 39.63 L 58.43 38.41 L 59.53 37.19 L 60.62 35.97 L 61.72 34.75 L 62.82 33.53 L 63.92 32.31 L 65.01 31.08 L 66.11 29.86 L 67.21 28.64 L 68.31 27.42 L 69.4 26.2 L 70.5 24.98 L 71.6 23.76 L 72.7 22.54 L 73.79 21.32 L 74.89 20.1 L 75.99 18.88 L 77.09 17.66 L 78.19 16.44 L 79.28 15.22 L 80.38 14"/></svg>
`},Sqrt:{blockClass:"Sqrt",description:"Square root operator block.",docstringHtml:`<p>Square root operator block.</p>
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
`,params:{},inputs:null,outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="50" x2="86" y2="50"/><line x1="10" y1="10" x2="10" y2="54"/><path d="M 14 50 L 15.15 45.31 L 16.31 43.37 L 17.46 41.88 L 18.61 40.63 L 19.76 39.52 L 20.92 38.52 L 22.07 37.6 L 23.22 36.74 L 24.37 35.94 L 25.53 35.18 L 26.68 34.46 L 27.83 33.76 L 28.98 33.1 L 30.14 32.46 L 31.29 31.85 L 32.44 31.25 L 33.59 30.68 L 34.75 30.12 L 35.9 29.57 L 37.05 29.04 L 38.2 28.52 L 39.36 28.02 L 40.51 27.52 L 41.66 27.04 L 42.81 26.57 L 43.97 26.1 L 45.12 25.65 L 46.27 25.2 L 47.42 24.76 L 48.58 24.33 L 49.73 23.9 L 50.88 23.49 L 52.03 23.08 L 53.19 22.67 L 54.34 22.27 L 55.49 21.88 L 56.64 21.49 L 57.8 21.11 L 58.95 20.73 L 60.1 20.36 L 61.25 19.99 L 62.41 19.63 L 63.56 19.27 L 64.71 18.91 L 65.86 18.56 L 67.02 18.21 L 68.17 17.87 L 69.32 17.53 L 70.47 17.19 L 71.63 16.86 L 72.78 16.53 L 73.93 16.2 L 75.08 15.88 L 76.24 15.56 L 77.39 15.24 L 78.54 14.93 L 79.69 14.62 L 80.85 14.31 L 82 14"/></svg>
`},Exp:{blockClass:"Exp",description:"Exponential operator block.",docstringHtml:`<p>Exponential operator block.</p>
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
`,params:{},inputs:null,outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="50" x2="86" y2="50"/><line x1="10" y1="10" x2="10" y2="54"/><path d="M 14 50 L 15.15 49.83 L 16.31 49.65 L 17.46 49.47 L 18.61 49.28 L 19.76 49.08 L 20.92 48.88 L 22.07 48.66 L 23.22 48.44 L 24.37 48.21 L 25.53 47.97 L 26.68 47.73 L 27.83 47.47 L 28.98 47.2 L 30.14 46.93 L 31.29 46.64 L 32.44 46.34 L 33.59 46.03 L 34.75 45.71 L 35.9 45.38 L 37.05 45.03 L 38.2 44.67 L 39.36 44.3 L 40.51 43.91 L 41.66 43.51 L 42.81 43.09 L 43.97 42.66 L 45.12 42.21 L 46.27 41.74 L 47.42 41.26 L 48.58 40.76 L 49.73 40.23 L 50.88 39.69 L 52.03 39.13 L 53.19 38.55 L 54.34 37.94 L 55.49 37.31 L 56.64 36.66 L 57.8 35.98 L 58.95 35.28 L 60.1 34.55 L 61.25 33.79 L 62.41 33.01 L 63.56 32.19 L 64.71 31.34 L 65.86 30.47 L 67.02 29.55 L 68.17 28.61 L 69.32 27.62 L 70.47 26.6 L 71.63 25.54 L 72.78 24.44 L 73.93 23.3 L 75.08 22.12 L 76.24 20.89 L 77.39 19.61 L 78.54 18.28 L 79.69 16.91 L 80.85 15.48 L 82 14"/></svg>
`},Log:{blockClass:"Log",description:"Natural logarithm operator block.",docstringHtml:`<p>Natural logarithm operator block.</p>
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
`,params:{},inputs:null,outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="50" x2="86" y2="50"/><line x1="10" y1="10" x2="10" y2="54"/><path d="M 14 50 L 15.15 47.78 L 16.31 45.84 L 17.46 44.11 L 18.61 42.55 L 19.76 41.14 L 20.92 39.84 L 22.07 38.64 L 23.22 37.53 L 24.37 36.49 L 25.53 35.52 L 26.68 34.6 L 27.83 33.73 L 28.98 32.91 L 30.14 32.13 L 31.29 31.39 L 32.44 30.68 L 33.59 30 L 34.75 29.35 L 35.9 28.73 L 37.05 28.13 L 38.2 27.55 L 39.36 26.99 L 40.51 26.45 L 41.66 25.93 L 42.81 25.43 L 43.97 24.94 L 45.12 24.47 L 46.27 24.01 L 47.42 23.57 L 48.58 23.13 L 49.73 22.71 L 50.88 22.3 L 52.03 21.9 L 53.19 21.51 L 54.34 21.13 L 55.49 20.76 L 56.64 20.39 L 57.8 20.04 L 58.95 19.69 L 60.1 19.35 L 61.25 19.02 L 62.41 18.69 L 63.56 18.37 L 64.71 18.06 L 65.86 17.76 L 67.02 17.46 L 68.17 17.16 L 69.32 16.87 L 70.47 16.59 L 71.63 16.31 L 72.78 16.03 L 73.93 15.77 L 75.08 15.5 L 76.24 15.24 L 77.39 14.98 L 78.54 14.73 L 79.69 14.48 L 80.85 14.24 L 82 14"/></svg>
`},Log10:{blockClass:"Log10",description:"Base-10 logarithm operator block.",docstringHtml:`<p>Base-10 logarithm operator block.</p>
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
`,params:{},inputs:null,outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="50" x2="86" y2="50"/><line x1="10" y1="10" x2="10" y2="54"/><path d="M 14 50 L 15.15 47.78 L 16.31 45.84 L 17.46 44.11 L 18.61 42.55 L 19.76 41.14 L 20.92 39.84 L 22.07 38.64 L 23.22 37.53 L 24.37 36.49 L 25.53 35.52 L 26.68 34.6 L 27.83 33.73 L 28.98 32.91 L 30.14 32.13 L 31.29 31.39 L 32.44 30.68 L 33.59 30 L 34.75 29.35 L 35.9 28.73 L 37.05 28.13 L 38.2 27.55 L 39.36 26.99 L 40.51 26.45 L 41.66 25.93 L 42.81 25.43 L 43.97 24.94 L 45.12 24.47 L 46.27 24.01 L 47.42 23.57 L 48.58 23.13 L 49.73 22.71 L 50.88 22.3 L 52.03 21.9 L 53.19 21.51 L 54.34 21.13 L 55.49 20.76 L 56.64 20.39 L 57.8 20.04 L 58.95 19.69 L 60.1 19.35 L 61.25 19.02 L 62.41 18.69 L 63.56 18.37 L 64.71 18.06 L 65.86 17.76 L 67.02 17.46 L 68.17 17.16 L 69.32 16.87 L 70.47 16.59 L 71.63 16.31 L 72.78 16.03 L 73.93 15.77 L 75.08 15.5 L 76.24 15.24 L 77.39 14.98 L 78.54 14.73 L 79.69 14.48 L 80.85 14.24 L 82 14"/><text text-anchor="start" dominant-baseline="hanging" fill="currentColor" stroke="none" font-family="ui-monospace, &quot;JetBrains Mono&quot;, &quot;SF Mono&quot;, Menlo, monospace" font-size="11px" font-weight="600" x="14" y="10">10</text></svg>
`},Mod:{blockClass:"Mod",description:"Modulo operator block.",docstringHtml:`<p>Modulo operator block.</p>
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
`,params:{modulus:{type:"number",default:"1.0",description:"modulus value Attributes ----------"}},inputs:null,outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="50" x2="86" y2="50"/><line x1="10" y1="10" x2="10" y2="54"/><path d="M 14 50 L 36.67 14 L 36.67 50 L 36.67 50 L 59.33 14 L 59.33 50 L 59.33 50 L 82 14"/></svg>
`},Clip:{blockClass:"Clip",description:"Clipping/saturation operator block.",docstringHtml:`<p>Clipping/saturation operator block.</p>
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
`,params:{min_val:{type:"number",default:"-1.0",description:"minimum clipping value"},max_val:{type:"number",default:"1.0",description:"maximum clipping value Attributes ----------"}},inputs:null,outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="32" x2="86" y2="32"/><line x1="48" y1="10" x2="48" y2="54"/><path d="M 15.62 47.43 L 28.57 47.43 L 67.43 16.57 L 80.38 16.57"/></svg>
`},Pow:{blockClass:"Pow",description:"Raise to power operator block.",docstringHtml:`<p>Raise to power operator block.</p>
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
`,params:{exponent:{type:"integer",default:"2",description:"exponent to raise the input to the power of Attributes ----------"}},inputs:null,outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="50" x2="86" y2="50"/><line x1="48" y1="10" x2="48" y2="54"/><path d="M 15.62 14 L 16.72 16.4 L 17.81 18.72 L 18.91 20.95 L 20.01 23.1 L 21.11 25.17 L 22.21 27.15 L 23.3 29.06 L 24.4 30.88 L 25.5 32.62 L 26.6 34.27 L 27.69 35.84 L 28.79 37.33 L 29.89 38.74 L 30.99 40.06 L 32.08 41.3 L 33.18 42.46 L 34.28 43.54 L 35.38 44.53 L 36.47 45.44 L 37.57 46.27 L 38.67 47.01 L 39.77 47.67 L 40.87 48.25 L 41.96 48.75 L 43.06 49.16 L 44.16 49.49 L 45.26 49.74 L 46.35 49.91 L 47.45 49.99 L 48.55 49.99 L 49.65 49.91 L 50.74 49.74 L 51.84 49.49 L 52.94 49.16 L 54.04 48.75 L 55.13 48.25 L 56.23 47.67 L 57.33 47.01 L 58.43 46.27 L 59.53 45.44 L 60.62 44.53 L 61.72 43.54 L 62.82 42.46 L 63.92 41.3 L 65.01 40.06 L 66.11 38.74 L 67.21 37.33 L 68.31 35.84 L 69.4 34.27 L 70.5 32.62 L 71.6 30.88 L 72.7 29.06 L 73.79 27.15 L 74.89 25.17 L 75.99 23.1 L 77.09 20.95 L 78.19 18.72 L 79.28 16.4 L 80.38 14"/></svg>
`},Atan2:{blockClass:"Atan2",description:"Two-argument arctangent block.",docstringHtml:`<p>Two-argument arctangent block.</p>
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
`,params:{},inputs:["a","b"],outputs:["y"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="32" x2="86" y2="32"/><line x1="48" y1="10" x2="48" y2="54"/><path d="M 15.62 44.15 L 16.44 44.1 L 17.26 44.04 L 18.08 43.98 L 18.9 43.91 L 19.72 43.84 L 20.54 43.77 L 21.36 43.7 L 22.18 43.62 L 23 43.53 L 23.82 43.44 L 24.64 43.34 L 25.46 43.24 L 26.28 43.13 L 27.1 43.01 L 27.92 42.89 L 28.74 42.75 L 29.56 42.61 L 30.37 42.45 L 31.19 42.28 L 32.01 42.1 L 32.83 41.91 L 33.65 41.69 L 34.47 41.46 L 35.29 41.2 L 36.11 40.92 L 36.93 40.61 L 37.75 40.27 L 38.57 39.9 L 39.39 39.48 L 40.21 39.02 L 41.03 38.52 L 41.85 37.95 L 42.67 37.34 L 43.49 36.66 L 44.31 35.92 L 45.13 35.12 L 45.95 34.27 L 46.77 33.38 L 47.59 32.46 L 48.41 31.54 L 49.23 30.62 L 50.05 29.73 L 50.87 28.88 L 51.69 28.08 L 52.51 27.34 L 53.33 26.66 L 54.15 26.05 L 54.97 25.48 L 55.79 24.98 L 56.61 24.52 L 57.43 24.1 L 58.25 23.73 L 59.07 23.39 L 59.89 23.08 L 60.71 22.8 L 61.53 22.54 L 62.35 22.31 L 63.17 22.09 L 63.99 21.9 L 64.81 21.72 L 65.63 21.55 L 66.44 21.39 L 67.26 21.25 L 68.08 21.11 L 68.9 20.99 L 69.72 20.87 L 70.54 20.76 L 71.36 20.66 L 72.18 20.56 L 73 20.47 L 73.82 20.38 L 74.64 20.3 L 75.46 20.23 L 76.28 20.16 L 77.1 20.09 L 77.92 20.02 L 78.74 19.96 L 79.56 19.9 L 80.38 19.85"/></svg>
`},Rescale:{blockClass:"Rescale",description:"Linear rescaling / mapping block.",docstringHtml:`<p>Linear rescaling / mapping block.</p>
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
`,params:{i0:{type:"number",default:"0.0",description:"input range lower bound"},i1:{type:"number",default:"1.0",description:"input range upper bound"},o0:{type:"number",default:"0.0",description:"output range lower bound"},o1:{type:"number",default:"1.0",description:"output range upper bound"},saturate:{type:"boolean",default:"false",description:"if True, clamp output to [min(o0,o1), max(o0,o1)]"}},inputs:null,outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="27,14 27,50 69,32"/>
</svg>
`},Alias:{blockClass:"Alias",description:"Signal alias / pass-through block.",docstringHtml:`<p>Signal alias / pass-through block.</p>
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
`,params:{},inputs:null,outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <line x1="18" y1="32" x2="34" y2="32"/>
  <line x1="62" y1="32" x2="78" y2="32"/>
  <path d="M 34 22 H 56 L 62 32 L 56 42 H 34 Z"/>
  <circle cx="40" cy="32" r="2" fill="currentColor" stroke="none"/>
</svg>
`},Switch:{blockClass:"Switch",description:"Switch block that selects between its inputs.",docstringHtml:`<p>Switch block that selects between its inputs.</p>
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
`,params:{switch_state:{type:"any",default:null,description:"state of the switch"}},inputs:null,outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <line x1="22" y1="22" x2="40" y2="22"/>
  <line x1="22" y1="42" x2="40" y2="42"/>
  <line x1="56" y1="32" x2="74" y2="32"/>
  <line x1="40" y1="22" x2="56" y2="32"/>
  <circle cx="40" cy="22" r="2.5" fill="currentColor" stroke="none"/>
  <circle cx="40" cy="42" r="2.5" fill="currentColor" stroke="none"/>
  <circle cx="56" cy="32" r="2.5" fill="currentColor" stroke="none"/>
</svg>
`},Splitter:{blockClass:"Splitter",description:"Splits the input into multiple outputs, weighted with fractions (SIMO).",docstringHtml:`<p>Splits the input into multiple outputs, weighted with fractions (SIMO).</p>
<div class="math">
\\begin{equation*}
y_i(t) = f_i \\cdot u(t)
\\end{equation*}
</div>
<p>The fractions have to sum up to one, so the splitter conserves what flows
through it, for example a mass or molar flow.</p>
<div class="section" id="example">
<h3>Example</h3>
<p>Split a flow into two outputs with 90 and 10 percent:</p>
<pre class="code python literal-block">
S = Splitter([0.9, 0.1])

C = Connection(S[&quot;out_1&quot;], B)
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
<dt>fractions <span class="classifier-delimiter">:</span> <span class="classifier">array_like</span></dt>
<dd>fractions of the input for each output, must sum up to one</dd>
</dl>
</div>
<div class="section" id="attributes">
<h3>Attributes</h3>
<dl class="docutils">
<dt>op_alg <span class="classifier-delimiter">:</span> <span class="classifier">Operator</span></dt>
<dd>internal algebraic operator</dd>
</dl>
</div>
`,params:{fractions:{type:"any",default:null,description:"fractions of the input for each output, must sum up to one"}},inputs:["in"],outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <path d="M 18 32 H 40 C 52 32 50 20 62 20 H 78"/>
  <path d="M 40 32 C 52 32 50 44 62 44 H 78"/>
  <circle cx="40" cy="32" r="2.5" fill="currentColor" stroke="none"/>
</svg>
`},LUT:{blockClass:"LUT",description:"N-dimensional lookup table with linear interpolation functionality.",docstringHtml:`<p>N-dimensional lookup table with linear interpolation functionality.</p>
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
`,params:{points:{type:"any",default:null,description:"2-D array of data point coordinates where n is the number of points and ndim is the dimensionality of the space. Each row represents a single data point in ndim-dimensional space."},values:{type:"any",default:null,description:"N-D array of data values at the corresponding points. If 1-D, represents scalar values at each point. If 2-D, each column represents a different output dimension (m output values per input point)."}},inputs:null,outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path stroke-width="1.5" d="M 48 13.44 L 56.5 19.9 L 65 26.37 L 73.5 32.83 L 82 39.3 M 39.5 19.9 L 48 25.55 L 56.5 31.18 L 65 36.83 L 73.5 42.47 M 31 26.37 L 39.5 31.18 L 48 36 L 56.5 40.82 L 65 45.63 M 22.5 32.83 L 31 36.83 L 39.5 40.82 L 48 44.8 L 56.5 48.8 M 14 39.3 L 22.5 42.47 L 31 45.63 L 39.5 48.8 L 48 51.96 M 48 13.44 L 39.5 19.9 L 31 26.37 L 22.5 32.83 L 14 39.3 M 56.5 19.9 L 48 25.55 L 39.5 31.18 L 31 36.83 L 22.5 42.47 M 65 26.37 L 56.5 31.18 L 48 36 L 39.5 40.82 L 31 45.63 M 73.5 32.83 L 65 36.83 L 56.5 40.82 L 48 44.8 L 39.5 48.8 M 82 39.3 L 73.5 42.47 L 65 45.63 L 56.5 48.8 L 48 51.96"/><path stroke-width="1.5" d="M 48 13.44 L 56.5 19.9 L 65 26.37 L 73.5 32.83 L 82 39.3 L 73.5 42.47 L 65 45.63 L 56.5 48.8 L 48 51.96 L 39.5 48.8 L 31 45.63 L 22.5 42.47 L 14 39.3 L 22.5 32.83 L 31 26.37 L 39.5 19.9 Z"/></svg>
`},LUT1D:{blockClass:"LUT1D",description:"One-dimensional lookup table with linear interpolation functionality.",docstringHtml:`<p>One-dimensional lookup table with linear interpolation functionality.</p>
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
`,params:{points:{type:"any",default:null,description:"1-D array of monotonically increasing data point coordinates where n is the number of points. These represent the independent variable values at which the dependent values are known."},values:{type:"any",default:null,description:"1-D or 2-D array of data values at the corresponding points. If 1-D, represents scalar values at each point. If 2-D with shape (n, m), each column represents a different output dimension, allowing the lookup table to return m-dimensional vectors."},fill_value:{type:"string",default:'"extrapolate"',description:'The value to use for points outside the interpolation range. If "extrapolate", the interpolator will use linear extrapolation. Default is "extrapolate". See https://docs.scipy.org/doc/scipy-1.16.1/reference/generated/scipy.interpolate.interp1d.html for more details'}},inputs:null,outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="32" x2="86" y2="32"/><line x1="48" y1="10" x2="48" y2="54"/><path d="M 15.62 41.82 L 31.81 41 L 46.38 32 L 60.95 23 L 72.29 19.73 L 80.38 19.24"/><circle r="2.8" fill="currentColor" stroke="none" cx="15.62" cy="41.82"/><circle r="2.8" fill="currentColor" stroke="none" cx="31.81" cy="41"/><circle r="2.8" fill="currentColor" stroke="none" cx="46.38" cy="32"/><circle r="2.8" fill="currentColor" stroke="none" cx="60.95" cy="23"/><circle r="2.8" fill="currentColor" stroke="none" cx="72.29" cy="19.73"/><circle r="2.8" fill="currentColor" stroke="none" cx="80.38" cy="19.24"/></svg>
`},GreaterThan:{blockClass:"GreaterThan",description:"Greater-than comparison block.",docstringHtml:`<p>Greater-than comparison block.</p>
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
`,params:{},inputs:["a","b"],outputs:["y"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <path d="M 36 17 L 62 32 L 36 47"/>
</svg>
`},LessThan:{blockClass:"LessThan",description:"Less-than comparison block.",docstringHtml:`<p>Less-than comparison block.</p>
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
`,params:{},inputs:["a","b"],outputs:["y"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <path d="M 60 17 L 34 32 L 60 47"/>
</svg>
`},Equal:{blockClass:"Equal",description:"Equality comparison block.",docstringHtml:`<p>Equality comparison block.</p>
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
`,params:{tolerance:{type:"number",default:"1e-12",description:"comparison tolerance for floating point equality"}},inputs:["a","b"],outputs:["y"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <line x1="32" y1="25" x2="64" y2="25"/>
  <line x1="32" y1="39" x2="64" y2="39"/>
</svg>
`},LogicAnd:{blockClass:"LogicAnd",description:"Logical AND block.",docstringHtml:`<p>Logical AND block.</p>
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
`,params:{},inputs:["a","b"],outputs:["y"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <path d="M 34 14 H 48 A 18 18 0 0 1 48 50 H 34 Z"/>
</svg>
`},LogicOr:{blockClass:"LogicOr",description:"Logical OR block.",docstringHtml:`<p>Logical OR block.</p>
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
`,params:{},inputs:["a","b"],outputs:["y"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <path d="M 30 14 Q 41 32 30 50 Q 54 50 66 32 Q 54 14 30 14 Z"/>
</svg>
`},LogicNot:{blockClass:"LogicNot",description:"Logical NOT block.",docstringHtml:`<p>Logical NOT block.</p>
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
`,params:{},inputs:null,outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="30,14 30,50 58,32"/>
  <circle cx="62" cy="32" r="4"/>
</svg>
`},SampleHold:{blockClass:"SampleHold",description:"Zero-order hold: samples the input periodically and holds it at the output.",docstringHtml:`<p>Zero-order hold: samples the input periodically and holds it at the output.</p>
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
`,params:{T:{type:"number",default:"1.0",description:"sampling period"},tau:{type:"number",default:"0.0",description:"delay before first sample"}},inputs:null,outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="50" x2="86" y2="50"/><line x1="10" y1="10" x2="10" y2="54"/><path d="M 14 46.4 L 25.33 46.4 L 25.33 39.2 L 36.67 39.2 L 36.67 30.2 L 48 30.2 L 48 23 L 59.33 23 L 59.33 30.2 L 70.67 30.2 L 70.67 19.4 L 82 19.4"/></svg>
`},FirstOrderHold:{blockClass:"FirstOrderHold",description:"First-order hold reconstructor.",docstringHtml:`<p>First-order hold reconstructor.</p>
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
`,params:{T:{type:"number",default:"1.0",description:"sampling period"},tau:{type:"number",default:"0.0",description:"delay before first sample"}},inputs:null,outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="50" x2="86" y2="50"/><line x1="10" y1="10" x2="10" y2="54"/><path d="M 14 46.4 L 27.6 39.2 L 41.2 30.2 L 54.8 23 L 68.4 30.2 L 82 19.4"/><circle r="2.8" fill="currentColor" stroke="none" cx="14" cy="46.4"/><circle r="2.8" fill="currentColor" stroke="none" cx="27.6" cy="39.2"/><circle r="2.8" fill="currentColor" stroke="none" cx="41.2" cy="30.2"/><circle r="2.8" fill="currentColor" stroke="none" cx="54.8" cy="23"/><circle r="2.8" fill="currentColor" stroke="none" cx="68.4" cy="30.2"/><circle r="2.8" fill="currentColor" stroke="none" cx="82" cy="19.4"/></svg>
`},FIR:{blockClass:"FIR",description:"Discrete-time Finite-Impulse-Response (FIR) filter.",docstringHtml:`<p>Discrete-time Finite-Impulse-Response (FIR) filter.</p>
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
`,params:{coeffs:{type:"array",default:"[1.0]",description:"FIR filter coefficients ``[b0, b1, ..., bN]``"},T:{type:"number",default:"1.0",description:"sampling period"},tau:{type:"number",default:"0.0",description:"delay before first sample"}},inputs:null,outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="50" x2="86" y2="50"/><line x1="10" y1="10" x2="10" y2="54"/><path d="M 14 14.08 L 14.86 14.08 L 15.72 14.09 L 16.58 14.09 L 17.44 14.1 L 18.3 14.1 L 19.16 14.11 L 20.03 14.12 L 20.89 14.13 L 21.75 14.15 L 22.61 14.16 L 23.47 14.18 L 24.33 14.2 L 25.19 14.23 L 26.05 14.26 L 26.91 14.3 L 27.77 14.34 L 28.63 14.39 L 29.49 14.44 L 30.35 14.5 L 31.22 14.58 L 32.08 14.66 L 32.94 14.76 L 33.8 14.88 L 34.66 15.01 L 35.52 15.17 L 36.38 15.36 L 37.24 15.58 L 38.1 15.85 L 38.96 16.17 L 39.82 16.56 L 40.68 17.04 L 41.54 17.64 L 42.41 18.4 L 43.27 19.36 L 44.13 20.58 L 44.99 22.11 L 45.85 24 L 46.71 26.26 L 47.57 28.85 L 48.43 31.65 L 49.29 34.52 L 50.15 37.3 L 51.01 39.85 L 51.87 42.08 L 52.73 43.97 L 53.59 45.52 L 54.46 46.77 L 55.32 47.74 L 56.18 48.49 L 57.04 49.06 L 57.9 49.47 L 58.76 49.76 L 59.62 49.96 L 60.48 49.91 L 61.34 49.84 L 62.2 49.82 L 63.06 49.82 L 63.92 49.84 L 64.78 49.87 L 65.65 49.91 L 66.51 49.94 L 67.37 49.97 L 68.23 50 L 69.09 49.99 L 69.95 49.98 L 70.81 49.98 L 71.67 49.99 L 72.53 49.99 L 73.39 50 L 74.25 50 L 75.11 50 L 75.97 50 L 76.84 50 L 77.7 50 L 78.56 50 L 79.42 50 L 80.28 50 L 81.14 50 L 82 50"/></svg>
`},DiscreteIntegrator:{blockClass:"DiscreteIntegrator",description:"Discrete-time integrator (forward Euler).",docstringHtml:`<p>Discrete-time integrator (forward Euler).</p>
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
`,params:{T:{type:"number",default:"1.0",description:"sampling period"},tau:{type:"number",default:"0.0",description:"delay before first sample"},initial_value:{type:"number",default:"0.0",description:"initial integrator output ``y[0]``"}},inputs:null,outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><svg x="21.25" y="10.40" width="53.50" height="43.19" viewBox="0 -1353 2627.4 2121"><g fill="currentColor" stroke="currentColor" stroke-width="40" transform="scale(1,-1)"><g><g><g><g transform="translate(961.7,676)"><path d="M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z"></path></g><g transform="translate(220,-686)"><g><path d="M347 338Q337 338 294 349T231 360Q211 360 197 356T174 346T162 335T155 324L153 320Q150 317 138 317Q117 317 117 325Q117 330 120 339Q133 378 163 406T229 440Q241 442 246 442Q271 442 291 425T329 392T367 375Q389 375 411 408T434 441Q435 442 449 442H462Q468 436 468 434Q468 430 463 420T449 399T432 377T418 358L411 349Q368 298 275 214T160 106L148 94L163 93Q185 93 227 82T290 71Q328 71 360 90T402 140Q406 149 409 151T424 153Q443 153 443 143Q443 138 442 134Q425 72 376 31T278 -11Q252 -11 232 6T193 40T155 57Q111 57 76 -3Q70 -11 59 -11H54H41Q35 -5 35 -2Q35 13 93 84Q132 129 225 214T340 322Q352 338 347 338Z"></path></g><g transform="translate(687.2,0)"><path d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path></g><g transform="translate(1687.4,0)"><path d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path></g></g><rect width="2387.4" height="60" x="120" y="220"></rect></g></g></g></g></svg></svg>
`},DiscreteDerivative:{blockClass:"DiscreteDerivative",description:"Discrete-time backward-difference derivative.",docstringHtml:`<p>Discrete-time backward-difference derivative.</p>
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
`,params:{T:{type:"number",default:"1.0",description:"sampling period"},tau:{type:"number",default:"0.0",description:"delay before first sample"}},inputs:null,outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><svg x="21.25" y="11.24" width="53.50" height="41.52" viewBox="0 -1342 2627.4 2039"><g fill="currentColor" stroke="currentColor" stroke-width="40" transform="scale(1,-1)"><g><g><g><g transform="translate(220,676)"><g><path d="M347 338Q337 338 294 349T231 360Q211 360 197 356T174 346T162 335T155 324L153 320Q150 317 138 317Q117 317 117 325Q117 330 120 339Q133 378 163 406T229 440Q241 442 246 442Q271 442 291 425T329 392T367 375Q389 375 411 408T434 441Q435 442 449 442H462Q468 436 468 434Q468 430 463 420T449 399T432 377T418 358L411 349Q368 298 275 214T160 106L148 94L163 93Q185 93 227 82T290 71Q328 71 360 90T402 140Q406 149 409 151T424 153Q443 153 443 143Q443 138 442 134Q425 72 376 31T278 -11Q252 -11 232 6T193 40T155 57Q111 57 76 -3Q70 -11 59 -11H54H41Q35 -5 35 -2Q35 13 93 84Q132 129 225 214T340 322Q352 338 347 338Z"></path></g><g transform="translate(687.2,0)"><path d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path></g><g transform="translate(1687.4,0)"><path d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path></g></g><g transform="translate(645.7,-686)"><g><path d="M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z"></path></g><g transform="translate(704,0)"><g></g></g><g transform="translate(871,0)"><path d="M347 338Q337 338 294 349T231 360Q211 360 197 356T174 346T162 335T155 324L153 320Q150 317 138 317Q117 317 117 325Q117 330 120 339Q133 378 163 406T229 440Q241 442 246 442Q271 442 291 425T329 392T367 375Q389 375 411 408T434 441Q435 442 449 442H462Q468 436 468 434Q468 430 463 420T449 399T432 377T418 358L411 349Q368 298 275 214T160 106L148 94L163 93Q185 93 227 82T290 71Q328 71 360 90T402 140Q406 149 409 151T424 153Q443 153 443 143Q443 138 442 134Q425 72 376 31T278 -11Q252 -11 232 6T193 40T155 57Q111 57 76 -3Q70 -11 59 -11H54H41Q35 -5 35 -2Q35 13 93 84Q132 129 225 214T340 322Q352 338 347 338Z"></path></g></g><rect width="2387.4" height="60" x="120" y="220"></rect></g></g></g></g></svg></svg>
`},DiscreteStateSpace:{blockClass:"DiscreteStateSpace",description:"Discrete-time MIMO state space block.",docstringHtml:`<p>Discrete-time MIMO state space block.</p>
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
`,params:{A:{type:"number",default:"0.0",description:""},B:{type:"number",default:"1.0",description:""},C:{type:"number",default:"1.0",description:""},D:{type:"number",default:"0.0",description:"discrete state space matrices"},T:{type:"number",default:"1.0",description:"sampling period"},tau:{type:"number",default:"0.0",description:"delay before first sample"},initial_value:{type:"any",default:null,description:"initial state ``x[0]``"}},inputs:null,outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><svg x="3.00" y="26.53" width="90.00" height="10.95" viewBox="0 -716 7594.4 924"><g fill="currentColor" stroke="currentColor" stroke-width="40" transform="scale(1,-1)"><g><g><g><path d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path></g><g transform="translate(605,-150) scale(0.707)"><g><path d="M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z"></path></g><g transform="translate(521,0)"><path d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"></path></g><g transform="translate(1299,0)"><path d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path></g></g></g><g transform="translate(2204.9,0)"><path d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path></g><g transform="translate(3260.6,0)"><path d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path></g><g transform="translate(4010.6,0)"><g><path d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path></g><g transform="translate(605,-150) scale(0.707)"><path d="M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z"></path></g></g><g transform="translate(5034,0)"><g><path d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"></path></g></g><g transform="translate(5812,0)"><path d="M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z"></path></g><g transform="translate(6571,0)"><g><path d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path></g><g transform="translate(605,-150) scale(0.707)"><path d="M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z"></path></g></g></g></g></svg></svg>
`},DiscreteTransferFunction:{blockClass:"DiscreteTransferFunction",description:"Discrete-time SISO transfer function in numerator/denominator form.",docstringHtml:`<p>Discrete-time SISO transfer function in numerator/denominator form.</p>
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
`,params:{Num:{type:"array",default:"[1.0]",description:"numerator polynomial coefficients (highest power of z first)"},Den:{type:"array",default:"[1.0, 0.0]",description:"denominator polynomial coefficients (highest power of z first)"},T:{type:"number",default:"1.0",description:"sampling period"},tau:{type:"number",default:"0.0",description:"delay before first sample"}},inputs:["in"],outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><svg x="23.14" y="7.36" width="49.73" height="49.27" viewBox="0 -1460 2442 2420"><g fill="currentColor" stroke="currentColor" stroke-width="40" transform="scale(1,-1)"><g><g><g><g transform="translate(220,710)"><g><path d="M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z"></path></g><g transform="translate(759,0)"><path d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path></g><g transform="translate(1148,0)"><path d="M347 338Q337 338 294 349T231 360Q211 360 197 356T174 346T162 335T155 324L153 320Q150 317 138 317Q117 317 117 325Q117 330 120 339Q133 378 163 406T229 440Q241 442 246 442Q271 442 291 425T329 392T367 375Q389 375 411 408T434 441Q435 442 449 442H462Q468 436 468 434Q468 430 463 420T449 399T432 377T418 358L411 349Q368 298 275 214T160 106L148 94L163 93Q185 93 227 82T290 71Q328 71 360 90T402 140Q406 149 409 151T424 153Q443 153 443 143Q443 138 442 134Q425 72 376 31T278 -11Q252 -11 232 6T193 40T155 57Q111 57 76 -3Q70 -11 59 -11H54H41Q35 -5 35 -2Q35 13 93 84Q132 129 225 214T340 322Q352 338 347 338Z"></path></g><g transform="translate(1613,0)"><path d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path></g></g><g transform="translate(224.5,-710)"><g><path d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path></g><g transform="translate(750,0)"><path d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path></g><g transform="translate(1139,0)"><path d="M347 338Q337 338 294 349T231 360Q211 360 197 356T174 346T162 335T155 324L153 320Q150 317 138 317Q117 317 117 325Q117 330 120 339Q133 378 163 406T229 440Q241 442 246 442Q271 442 291 425T329 392T367 375Q389 375 411 408T434 441Q435 442 449 442H462Q468 436 468 434Q468 430 463 420T449 399T432 377T418 358L411 349Q368 298 275 214T160 106L148 94L163 93Q185 93 227 82T290 71Q328 71 360 90T402 140Q406 149 409 151T424 153Q443 153 443 143Q443 138 442 134Q425 72 376 31T278 -11Q252 -11 232 6T193 40T155 57Q111 57 76 -3Q70 -11 59 -11H54H41Q35 -5 35 -2Q35 13 93 84Q132 129 225 214T340 322Q352 338 347 338Z"></path></g><g transform="translate(1604,0)"><path d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path></g></g><rect width="2202" height="60" x="120" y="220"></rect></g></g></g></g></svg></svg>
`},TappedDelay:{blockClass:"TappedDelay",description:"Tapped delay line.",docstringHtml:`<p>Tapped delay line.</p>
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
`,params:{N:{type:"integer",default:"2",description:"number of taps (output ports)"},T:{type:"number",default:"1.0",description:"sampling period"},tau:{type:"number",default:"0.0",description:"delay before first sample"}},inputs:["in"],outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <line x1="10" y1="56" x2="88" y2="56"/>
  <line x1="12" y1="8" x2="12" y2="58"/>
  <path d="M 16 18 L 22 18 L 22 13 L 32 13 L 32 18 L 80 18"/>
  <path d="M 16 28 L 34 28 L 34 23 L 44 23 L 44 28 L 80 28"/>
  <path d="M 16 38 L 46 38 L 46 33 L 56 33 L 56 38 L 80 38"/>
  <path d="M 16 48 L 58 48 L 58 43 L 68 43 L 68 48 L 80 48"/>
</svg>
`},ADC:{blockClass:"ADC",description:"Models an ideal Analog-to-Digital Converter (ADC).",docstringHtml:`<p>Models an ideal Analog-to-Digital Converter (ADC).</p>
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
`,params:{n_bits:{type:"integer",default:"4",description:"Number of bits for the digital output code. Default is 4."},span:{type:"array",default:"[-1, 1]",description:"The valid analog input value range [min_voltage, max_voltage]. Inputs outside this range will be clipped. Default is [-1, 1]."},T:{type:"integer",default:"1",description:"Sampling period (time between samples). Default is 1 time unit."},tau:{type:"integer",default:"0",description:"Initial delay before the first sample is taken. Default is 0."}},inputs:["in"],outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="32" x2="86" y2="32"/><line x1="10" y1="10" x2="10" y2="54"/><path stroke-dasharray="3.5 3" d="M 14 32 L 14.76 30.87 L 15.53 29.75 L 16.29 28.65 L 17.06 27.56 L 17.82 26.51 L 18.58 25.49 L 19.35 24.51 L 20.11 23.59 L 20.88 22.72 L 21.64 21.91 L 22.4 21.16 L 23.17 20.49 L 23.93 19.9 L 24.7 19.38 L 25.46 18.95 L 26.22 18.6 L 26.99 18.34 L 27.75 18.17 L 28.52 18.1 L 29.28 18.11 L 30.04 18.22 L 30.81 18.41 L 31.57 18.7 L 32.34 19.07 L 33.1 19.53 L 33.87 20.07 L 34.63 20.69 L 35.39 21.38 L 36.16 22.15 L 36.92 22.98 L 37.69 23.86 L 38.45 24.81 L 39.21 25.8 L 39.98 26.82 L 40.74 27.89 L 41.51 28.98 L 42.27 30.09 L 43.03 31.21 L 43.8 32.34 L 44.56 33.47 L 45.33 34.59 L 46.09 35.69 L 46.85 36.76 L 47.62 37.81 L 48.38 38.81 L 49.15 39.77 L 49.91 40.68 L 50.67 41.54 L 51.44 42.33 L 52.2 43.05 L 52.97 43.7 L 53.73 44.27 L 54.49 44.76 L 55.26 45.17 L 56.02 45.49 L 56.79 45.72 L 57.55 45.86 L 58.31 45.91 L 59.08 45.87 L 59.84 45.73 L 60.61 45.51 L 61.37 45.2 L 62.13 44.8 L 62.9 44.31 L 63.66 43.75 L 64.43 43.11 L 65.19 42.39 L 65.96 41.61 L 66.72 40.76 L 67.48 39.85 L 68.25 38.9 L 69.01 37.9 L 69.78 36.85 L 70.54 35.78 L 71.3 34.68 L 72.07 33.57 L 72.83 32.44 L 73.6 31.31 L 74.36 30.19 L 75.12 29.08 L 75.89 27.98 L 76.65 26.92 L 77.42 25.88 L 78.18 24.89 L 78.94 23.94 L 79.71 23.05 L 80.47 22.22 L 81.24 21.45 L 82 20.75" opacity="0.5"/><line x1="18.86" y1="32" x2="18.86" y2="25.14"/><circle r="2.4" fill="currentColor" stroke="none" cx="18.86" cy="25.14"/><line x1="28.57" y1="32" x2="28.57" y2="18.09"/><circle r="2.4" fill="currentColor" stroke="none" cx="28.57" cy="18.09"/><line x1="38.29" y1="32" x2="38.29" y2="24.6"/><circle r="2.4" fill="currentColor" stroke="none" cx="38.29" cy="24.6"/><line x1="48" y1="32" x2="48" y2="38.31"/><circle r="2.4" fill="currentColor" stroke="none" cx="48" cy="38.31"/><line x1="57.71" y1="32" x2="57.71" y2="45.88"/><circle r="2.4" fill="currentColor" stroke="none" cx="57.71" cy="45.88"/><line x1="67.43" y1="32" x2="67.43" y2="39.92"/><circle r="2.4" fill="currentColor" stroke="none" cx="67.43" cy="39.92"/><line x1="77.14" y1="32" x2="77.14" y2="26.25"/><circle r="2.4" fill="currentColor" stroke="none" cx="77.14" cy="26.25"/></svg>
`},DAC:{blockClass:"DAC",description:"Models an ideal Digital-to-Analog Converter (DAC).",docstringHtml:`<p>Models an ideal Digital-to-Analog Converter (DAC).</p>
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
`,params:{n_bits:{type:"integer",default:"4",description:"Number of digital input bits expected. Default is 4."},span:{type:"array",default:"[-1, 1]",description:"The analog output value range [min_voltage, max_voltage] corresponding to the digital codes 0 and 2^n_bits - 1, respectively (approximately). Default is [-1, 1]."},T:{type:"integer",default:"1",description:"Update period (time between output updates). Default is 1 time unit."},tau:{type:"integer",default:"0",description:"Initial delay before the first output update. Default is 0."}},inputs:null,outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="32" x2="86" y2="32"/><line x1="10" y1="10" x2="10" y2="54"/><path stroke-dasharray="3.5 3" d="M 14 32 L 14.76 30.87 L 15.53 29.75 L 16.29 28.65 L 17.06 27.56 L 17.82 26.51 L 18.58 25.49 L 19.35 24.51 L 20.11 23.59 L 20.88 22.72 L 21.64 21.91 L 22.4 21.16 L 23.17 20.49 L 23.93 19.9 L 24.7 19.38 L 25.46 18.95 L 26.22 18.6 L 26.99 18.34 L 27.75 18.17 L 28.52 18.1 L 29.28 18.11 L 30.04 18.22 L 30.81 18.41 L 31.57 18.7 L 32.34 19.07 L 33.1 19.53 L 33.87 20.07 L 34.63 20.69 L 35.39 21.38 L 36.16 22.15 L 36.92 22.98 L 37.69 23.86 L 38.45 24.81 L 39.21 25.8 L 39.98 26.82 L 40.74 27.89 L 41.51 28.98 L 42.27 30.09 L 43.03 31.21 L 43.8 32.34 L 44.56 33.47 L 45.33 34.59 L 46.09 35.69 L 46.85 36.76 L 47.62 37.81 L 48.38 38.81 L 49.15 39.77 L 49.91 40.68 L 50.67 41.54 L 51.44 42.33 L 52.2 43.05 L 52.97 43.7 L 53.73 44.27 L 54.49 44.76 L 55.26 45.17 L 56.02 45.49 L 56.79 45.72 L 57.55 45.86 L 58.31 45.91 L 59.08 45.87 L 59.84 45.73 L 60.61 45.51 L 61.37 45.2 L 62.13 44.8 L 62.9 44.31 L 63.66 43.75 L 64.43 43.11 L 65.19 42.39 L 65.96 41.61 L 66.72 40.76 L 67.48 39.85 L 68.25 38.9 L 69.01 37.9 L 69.78 36.85 L 70.54 35.78 L 71.3 34.68 L 72.07 33.57 L 72.83 32.44 L 73.6 31.31 L 74.36 30.19 L 75.12 29.08 L 75.89 27.98 L 76.65 26.92 L 77.42 25.88 L 78.18 24.89 L 78.94 23.94 L 79.71 23.05 L 80.47 22.22 L 81.24 21.45 L 82 20.75" opacity="0.5"/><path d="M 14 25.14 L 23.71 25.14 L 23.71 18.09 L 33.43 18.09 L 33.43 24.6 L 43.14 24.6 L 43.14 38.31 L 52.86 38.31 L 52.86 45.88 L 62.57 45.88 L 62.57 39.92 L 72.29 39.92 L 72.29 26.25 L 82 26.25"/></svg>
`},Counter:{blockClass:"Counter",description:"Counts the number of detected bidirectional threshold crossings.",docstringHtml:`<p>Counts the number of detected bidirectional threshold crossings.</p>
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
`,params:{start:{type:"integer",default:"0",description:"counter start (initial condition)"},threshold:{type:"number",default:"0.0",description:"threshold for zero crossing Attributes ----------"}},inputs:["in"],outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="50" x2="86" y2="50"/><line x1="10" y1="10" x2="10" y2="54"/><path d="M 14 50 L 25.33 50 L 25.33 42.8 L 36.67 42.8 L 36.67 35.6 L 48 35.6 L 48 28.4 L 59.33 28.4 L 59.33 21.2 L 70.67 21.2 L 70.67 14 L 82 14"/></svg>
`},CounterUp:{blockClass:"CounterUp",description:"Counts the number of detected unidirectional (lo->hi) threshold crossings.",docstringHtml:`<p>Counts the number of detected unidirectional (lo-&gt;hi) threshold crossings.</p>
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
`,params:{start:{type:"integer",default:"0",description:"counter start (initial condition)"},threshold:{type:"number",default:"0.0",description:"threshold for zero crossing Attributes ----------"}},inputs:["in"],outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="50" x2="86" y2="50"/><line x1="10" y1="10" x2="10" y2="54"/><path d="M 14 50 L 25.33 50 L 25.33 42.8 L 36.67 42.8 L 36.67 35.6 L 48 35.6 L 48 28.4 L 59.33 28.4 L 59.33 21.2 L 70.67 21.2 L 70.67 14 L 82 14"/><path d="M 86 44 L 86 22 M 82 26 L 86 22 L 90 26"/></svg>
`},CounterDown:{blockClass:"CounterDown",description:"Counts the number of detected unidirectional (hi->lo) threshold crossings.",docstringHtml:`<p>Counts the number of detected unidirectional (hi-&gt;lo) threshold crossings.</p>
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
`,params:{start:{type:"integer",default:"0",description:"counter start (initial condition)"},threshold:{type:"number",default:"0.0",description:"threshold for zero crossing Attributes ----------"}},inputs:["in"],outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="50" x2="86" y2="50"/><line x1="10" y1="10" x2="10" y2="54"/><path d="M 14 14 L 25.33 14 L 25.33 21.2 L 36.67 21.2 L 36.67 28.4 L 48 28.4 L 48 35.6 L 59.33 35.6 L 59.33 42.8 L 70.67 42.8 L 70.67 50 L 82 50"/><path d="M 86 22 L 86 44 M 82 40 L 86 44 L 90 40"/></svg>
`},Relay:{blockClass:"Relay",description:"Relay block with hysteresis (Schmitt trigger).",docstringHtml:`<p>Relay block with hysteresis (Schmitt trigger).</p>
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
`,params:{threshold_up:{type:"number",default:"1.0",description:"threshold for transitioning to upper relay state `value_up` (default: 1.0)"},threshold_down:{type:"number",default:"0.0",description:"threshold for transitioning to lower relay state `value_down` (default: 0.0)"},value_up:{type:"number",default:"1.0",description:"value for upper relay state (default: 1.0)"},value_down:{type:"number",default:"0.0",description:"value for lower relay state (default: 0.0)"}},inputs:["in"],outputs:["out"],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M 15.62 48.36 L 62.57 48.36 L 62.57 15.64 L 80.38 15.64 L 33.43 15.64 L 33.43 48.36 L 15.62 48.36"/></svg>
`},Wrapper:{blockClass:"Wrapper",description:"Wrapper block for discrete implementation and external code integration.",docstringHtml:`<p>Wrapper block for discrete implementation and external code integration.</p>
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
`,params:{func:{type:"callable",default:null,description:"function that defines algebraic block IO behaviour"},T:{type:"integer",default:"1",description:"sampling period for the wrapped function"},tau:{type:"integer",default:"0",description:"delay time for the start time of the event Attributes ----------"}},inputs:null,outputs:null,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <rect x="22" y="12" width="52" height="40" rx="4" stroke-dasharray="4 3"/>
  <rect x="36" y="24" width="24" height="16" rx="2"/>
</svg>
`},Scope:{blockClass:"Scope",description:"Block for recording time domain data with variable sampling period.",docstringHtml:`<p>Block for recording time domain data with variable sampling period.</p>
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
`,params:{sampling_period:{type:"any",default:null,description:"time between samples, default is every timestep"},t_wait:{type:"number",default:"0.0",description:"wait time before starting recording, optional"},labels:{type:"any",default:null,description:"labels for the scope traces, and for the csv, optional"}},inputs:null,outputs:[],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><rect rx="4" stroke-width="1.6" x="6" y="7" width="84" height="50"/><g stroke-width="0.8" opacity="0.35"><line x1="27" y1="9" x2="27" y2="55"/><line x1="48" y1="9" x2="48" y2="55"/><line x1="69" y1="9" x2="69" y2="55"/><line x1="8" y1="32" x2="88" y2="32"/></g><path stroke-width="1.6" d="M 13 32 L 13.35 30.45 L 13.7 28.93 L 14.06 27.47 L 14.41 26.06 L 14.76 24.73 L 15.11 23.49 L 15.46 22.34 L 15.81 21.29 L 16.17 20.35 L 16.52 19.53 L 16.87 18.83 L 17.22 18.27 L 17.57 17.83 L 17.92 17.52 L 18.28 17.36 L 18.63 17.32 L 18.98 17.41 L 19.33 17.64 L 19.68 17.99 L 20.04 18.46 L 20.39 19.05 L 20.74 19.74 L 21.09 20.53 L 21.44 21.41 L 21.79 22.38 L 22.15 23.42 L 22.5 24.52 L 22.85 25.67 L 23.2 26.86 L 23.55 28.08 L 23.9 29.31 L 24.26 30.56 L 24.61 31.79 L 24.96 33.02 L 25.31 34.21 L 25.66 35.37 L 26.02 36.48 L 26.37 37.54 L 26.72 38.53 L 27.07 39.44 L 27.42 40.28 L 27.77 41.03 L 28.13 41.69 L 28.48 42.26 L 28.83 42.72 L 29.18 43.08 L 29.53 43.34 L 29.88 43.49 L 30.24 43.53 L 30.59 43.47 L 30.94 43.31 L 31.29 43.06 L 31.64 42.7 L 31.99 42.26 L 32.35 41.73 L 32.7 41.12 L 33.05 40.43 L 33.4 39.69 L 33.75 38.88 L 34.11 38.02 L 34.46 37.13 L 34.81 36.2 L 35.16 35.24 L 35.51 34.27 L 35.86 33.3 L 36.22 32.32 L 36.57 31.36 L 36.92 30.42 L 37.27 29.5 L 37.62 28.62 L 37.97 27.79 L 38.33 27 L 38.68 26.27 L 39.03 25.6 L 39.38 25 L 39.73 24.47 L 40.09 24.01 L 40.44 23.64 L 40.79 23.34 L 41.14 23.13 L 41.49 22.99 L 41.84 22.94 L 42.2 22.98 L 42.55 23.09 L 42.9 23.28 L 43.25 23.54 L 43.6 23.88 L 43.95 24.29 L 44.31 24.76 L 44.66 25.28 L 45.01 25.86 L 45.36 26.49 L 45.71 27.15 L 46.07 27.85 L 46.42 28.58 L 46.77 29.33 L 47.12 30.09 L 47.47 30.85 L 47.82 31.62 L 48.18 32.38 L 48.53 33.12 L 48.88 33.84 L 49.23 34.54 L 49.58 35.2 L 49.93 35.83 L 50.29 36.41 L 50.64 36.94 L 50.99 37.42 L 51.34 37.85 L 51.69 38.22 L 52.05 38.52 L 52.4 38.77 L 52.75 38.95 L 53.1 39.06 L 53.45 39.11 L 53.8 39.1 L 54.16 39.02 L 54.51 38.88 L 54.86 38.68 L 55.21 38.42 L 55.56 38.11 L 55.91 37.75 L 56.27 37.35 L 56.62 36.9 L 56.97 36.41 L 57.32 35.89 L 57.67 35.35 L 58.03 34.78 L 58.38 34.2 L 58.73 33.6 L 59.08 33 L 59.43 32.4 L 59.78 31.8 L 60.14 31.22 L 60.49 30.65 L 60.84 30.1 L 61.19 29.57 L 61.54 29.07 L 61.89 28.61 L 62.25 28.19 L 62.6 27.8 L 62.95 27.46 L 63.3 27.16 L 63.65 26.91 L 64.01 26.72 L 64.36 26.57 L 64.71 26.47 L 65.06 26.42 L 65.41 26.42 L 65.76 26.48 L 66.12 26.58 L 66.47 26.73 L 66.82 26.92 L 67.17 27.16 L 67.52 27.43 L 67.87 27.75 L 68.23 28.09 L 68.58 28.47 L 68.93 28.87 L 69.28 29.3 L 69.63 29.74 L 69.98 30.2 L 70.34 30.66 L 70.69 31.14 L 71.04 31.61 L 71.39 32.08 L 71.74 32.54 L 72.1 32.99 L 72.45 33.42 L 72.8 33.84 L 73.15 34.23 L 73.5 34.6 L 73.85 34.94 L 74.21 35.25 L 74.56 35.52 L 74.91 35.76 L 75.26 35.96 L 75.61 36.13 L 75.96 36.25 L 76.32 36.33 L 76.67 36.38 L 77.02 36.38 L 77.37 36.35 L 77.72 36.27 L 78.08 36.16 L 78.43 36.02 L 78.78 35.84 L 79.13 35.63 L 79.48 35.38 L 79.83 35.12 L 80.19 34.82 L 80.54 34.51 L 80.89 34.18 L 81.24 33.83 L 81.59 33.48 L 81.94 33.11 L 82.3 32.74 L 82.65 32.37 L 83 32"/></svg>
`},Spectrum:{blockClass:"Spectrum",description:"Block for fourier spectrum analysis (spectrum analyzer).",docstringHtml:`<p>Block for fourier spectrum analysis (spectrum analyzer).</p>
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
`,params:{freq:{type:"array",default:"[]",description:"list of evaluation frequencies for RFT, can be arbitrarily spaced"},t_wait:{type:"number",default:"0.0",description:"wait time before starting RFT"},alpha:{type:"number",default:"0.0",description:"exponential forgetting factor for realtime spectrum"},labels:{type:"array",default:"[]",description:"labels for the inputs"}},inputs:null,outputs:[],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><rect rx="4" stroke-width="1.6" x="6" y="7" width="84" height="50"/><g stroke-width="0.8" opacity="0.35"><line x1="8" y1="32" x2="88" y2="32"/></g><line x1="20" y1="51" x2="20" y2="41.5" stroke-width="3.2"/><line x1="28.4" y1="51" x2="28.4" y2="17.07" stroke-width="3.2"/><line x1="36.8" y1="51" x2="36.8" y2="44.21" stroke-width="3.2"/><line x1="45.2" y1="51" x2="45.2" y2="29.96" stroke-width="3.2"/><line x1="53.6" y1="51" x2="53.6" y2="45.57" stroke-width="3.2"/><line x1="62" y1="51" x2="62" y2="37.43" stroke-width="3.2"/><line x1="70.4" y1="51" x2="70.4" y2="46.25" stroke-width="3.2"/><line x1="78.8" y1="51" x2="78.8" y2="42.86" stroke-width="3.2"/><line x1="13" y1="51" x2="83" y2="51" stroke-width="1.2" opacity="0.5"/></svg>
`},Subsystem:{blockClass:"Subsystem",description:"Subsystem class that holds its own blocks and connecions and",docstringHtml:`<p>Subsystem class that holds its own blocks and connecions and
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
`,params:{},inputs:[],outputs:[],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <rect x="6" y="8" width="84" height="48" rx="3" stroke-dasharray="4 3"/>
  <rect x="14" y="20" width="18" height="10" rx="1.5"/>
  <rect x="39" y="34" width="18" height="10" rx="1.5"/>
  <rect x="64" y="20" width="18" height="10" rx="1.5"/>
</svg>
`},Interface:{blockClass:"Interface",description:"Bare-bone block that serves as a data interface for the 'Subsystem' class.",docstringHtml:`<p>Bare-bone block that serves as a data interface for the 'Subsystem' class.</p>
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
`,params:{},inputs:[],outputs:[],icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <line x1="48" y1="12" x2="48" y2="52" stroke-dasharray="4 3"/>
  <path d="M 24 22 L 42 22 M 36 16 L 42 22 L 36 28"/>
  <path d="M 54 42 L 72 42 M 66 36 L 72 42 L 66 48"/>
</svg>
`}},qt={Sources:["Constant","Source","SinusoidalSource","StepSource","PulseSource","TriangleWaveSource","SquareWaveSource","GaussianPulseSource","ChirpPhaseNoiseSource","ClockSource","WhiteNoise","PinkNoise","RandomNumberGenerator"],Dynamic:["Integrator","Differentiator","Delay","ODE","DynamicalSystem","StateSpace","PT1","PT2","LeadLag","PID","AntiWindupPID","RateLimiter","Backlash","Deadband","TransferFunctionNumDen","TransferFunctionZPG","ButterworthLowpassFilter","ButterworthHighpassFilter","ButterworthBandpassFilter","ButterworthBandstopFilter"],Algebraic:["Adder","Multiplier","Divider","Amplifier","Function","Polynomial","Sin","Cos","Tan","Tanh","Abs","Sqrt","Exp","Log","Log10","Mod","Clip","Pow","Atan2","Rescale","Alias","Switch","Splitter","LUT","LUT1D"],Logic:["GreaterThan","LessThan","Equal","LogicAnd","LogicOr","LogicNot"],Discrete:["SampleHold","FirstOrderHold","FIR","DiscreteIntegrator","DiscreteDerivative","DiscreteStateSpace","DiscreteTransferFunction","TappedDelay","ADC","DAC","Counter","CounterUp","CounterDown","Relay","Wrapper"],Recording:["Scope","Spectrum"]},Jt={ADC:"pathsim.blocks",Abs:"pathsim.blocks",Adder:"pathsim.blocks",Alias:"pathsim.blocks",Amplifier:"pathsim.blocks",AntiWindupPID:"pathsim.blocks",Atan2:"pathsim.blocks",Backlash:"pathsim.blocks",ButterworthBandpassFilter:"pathsim.blocks",ButterworthBandstopFilter:"pathsim.blocks",ButterworthHighpassFilter:"pathsim.blocks",ButterworthLowpassFilter:"pathsim.blocks",ChirpPhaseNoiseSource:"pathsim.blocks",Clip:"pathsim.blocks",ClockSource:"pathsim.blocks",Constant:"pathsim.blocks",Cos:"pathsim.blocks",Counter:"pathsim.blocks",CounterDown:"pathsim.blocks",CounterUp:"pathsim.blocks",DAC:"pathsim.blocks",Deadband:"pathsim.blocks",Delay:"pathsim.blocks",Differentiator:"pathsim.blocks",DiscreteDerivative:"pathsim.blocks",DiscreteIntegrator:"pathsim.blocks",DiscreteStateSpace:"pathsim.blocks",DiscreteTransferFunction:"pathsim.blocks",Divider:"pathsim.blocks",DynamicalSystem:"pathsim.blocks",Equal:"pathsim.blocks",Exp:"pathsim.blocks",FIR:"pathsim.blocks",FirstOrderHold:"pathsim.blocks",Function:"pathsim.blocks",GaussianPulseSource:"pathsim.blocks",GreaterThan:"pathsim.blocks",Integrator:"pathsim.blocks",LUT:"pathsim.blocks",LUT1D:"pathsim.blocks",LeadLag:"pathsim.blocks",LessThan:"pathsim.blocks",Log:"pathsim.blocks",Log10:"pathsim.blocks",LogicAnd:"pathsim.blocks",LogicNot:"pathsim.blocks",LogicOr:"pathsim.blocks",Mod:"pathsim.blocks",Multiplier:"pathsim.blocks",ODE:"pathsim.blocks",PID:"pathsim.blocks",PT1:"pathsim.blocks",PT2:"pathsim.blocks",PinkNoise:"pathsim.blocks",Polynomial:"pathsim.blocks",Pow:"pathsim.blocks",PulseSource:"pathsim.blocks",RandomNumberGenerator:"pathsim.blocks",RateLimiter:"pathsim.blocks",Relay:"pathsim.blocks",Rescale:"pathsim.blocks",SampleHold:"pathsim.blocks",Scope:"pathsim.blocks",Sin:"pathsim.blocks",SinusoidalSource:"pathsim.blocks",Source:"pathsim.blocks",Spectrum:"pathsim.blocks",Splitter:"pathsim.blocks",Sqrt:"pathsim.blocks",SquareWaveSource:"pathsim.blocks",StateSpace:"pathsim.blocks",StepSource:"pathsim.blocks",Switch:"pathsim.blocks",Tan:"pathsim.blocks",Tanh:"pathsim.blocks",TappedDelay:"pathsim.blocks",TransferFunctionNumDen:"pathsim.blocks",TransferFunctionZPG:"pathsim.blocks",TriangleWaveSource:"pathsim.blocks",WhiteNoise:"pathsim.blocks",Wrapper:"pathsim.blocks"};function de(e){if(e==null||e==="None"||e==="")return null;let t=String(e).trim();return t.length===0||((t.startsWith("'")&&t.endsWith("'")||t.startsWith('"')&&t.endsWith('"'))&&(t=t.slice(1,-1)),t.length===0)?null:[...t]}const Mt={Scope:{param:"labels",direction:"input"},Spectrum:{param:"labels",direction:"input"},Adder:{param:"operations",direction:"input",parser:de},Divider:{param:"operations",direction:"input",parser:de}};function es(e){const t=Mt[e];return t?Array.isArray(t)?t:[t]:[]}const At=new Set(["Integrator","Differentiator","Delay","Amplifier","Sin","Cos","Tan","Tanh","Abs","Sqrt","Exp","Log","Log10","Mod","Clip","Pow","Polynomial","Rescale","Alias","LogicNot","SampleHold","FirstOrderHold","DiscreteIntegrator","DiscreteDerivative"]),Se="builtin";class It{nodes=new Map;byCategory=new Map;bySource=new Map;register(t,s=Se){this.nodes.has(t.type)&&(console.warn(`[nodeRegistry] replacing "${t.type}" (was ${this.nodes.get(t.type)?.source}, now ${s})`),this.removeFromIndexes(t.type)),this.nodes.set(t.type,{definition:t,source:s});const i=this.byCategory.get(t.category)??new Set;i.add(t.type),this.byCategory.set(t.category,i);const n=this.bySource.get(s)??new Set;n.add(t.type),this.bySource.set(s,n),ce()}unregisterSource(t){const s=Array.from(this.bySource.get(t)??[]);for(const i of s)this.removeFromIndexes(i),this.nodes.delete(i);return this.bySource.delete(t),s.length>0&&ce(),s}removeFromIndexes(t){const s=this.nodes.get(t);if(!s)return;const i=this.byCategory.get(s.definition.category);i&&(i.delete(t),i.size===0&&this.byCategory.delete(s.definition.category));const n=this.bySource.get(s.source);n&&(n.delete(t),n.size===0&&this.bySource.delete(s.source))}get(t){return this.nodes.get(t)?.definition}getSource(t){return this.nodes.get(t)?.source}getByCategory(t){const s=this.byCategory.get(t);return s?Array.from(s).map(i=>this.nodes.get(i)?.definition).filter(i=>!!i):[]}getBySource(t){const s=this.bySource.get(t);return s?Array.from(s).map(i=>this.nodes.get(i)?.definition).filter(i=>!!i):[]}getAllCategories(){return Array.from(this.byCategory.keys())}getAllSources(){return Array.from(this.bySource.keys())}getAll(){return Array.from(this.nodes.values()).map(t=>t.definition)}has(t){return this.nodes.has(t)}get size(){return this.nodes.size}}const De=lt(0);function ce(){De.update(e=>e+1)}const ts={subscribe:De.subscribe},Bt=new It;function Pt(e,t,s){const i={};for(const[u,d]of Object.entries(s.params))i[u]={type:d.type,default:d.default,description:d.description,min:d.min,max:d.max,options:d.options};let n,a;s.inputs===null?(n=void 0,a=null):s.inputs.length>0?(n=s.inputs,a=s.inputs.length):(n=[],a=0);let l,p;s.outputs===null?(l=void 0,p=null):s.outputs.length>0?(l=s.outputs,p=s.outputs.length):(l=[],p=0);const o=St({name:e,category:t,blockClass:s.blockClass,description:s.description,inputs:n,outputs:l,inputBuses:s.inputBuses,outputBuses:s.outputBuses,maxInputs:a,maxOutputs:p,syncPorts:At.has(e),params:i});s.docstringHtml&&(o.docstring=s.docstringHtml),s.icon&&(o.icon=s.icon),Bt.register(o,Se)}function Nt(){for(const[e,t]of Object.entries(qt))for(const s of t){const i=Dt[s];i?Pt(s,e,i):console.warn(`Block "${s}" not found in extracted blocks`)}}Nt();var Ot=ot('<span class="block-icon svelte-kd944p"></span>');function ss(e,t){const s=at(()=>`url("data:image/svg+xml,${encodeURIComponent(t.icon)}")`);var i=Ot();let n;nt(()=>{M(i,"role",t.title?"img":void 0),M(i,"aria-label",t.title),n=xe(i,"",n,{"--icon-mask":z(s)})}),dt(e,i)}export{ss as B,A as C,Ht as D,oe as P,I as S,wt as a,Yt as b,Wt as c,Jt as d,Vt as e,Tt as f,xe as g,Kt as h,Rt as i,es as j,Ut as k,kt as l,X as m,Bt as n,ts as o,qt as p,$t as q,xt as r,M as s,Se as t,Gt as u,St as v,Dt as w,Xt as x};
