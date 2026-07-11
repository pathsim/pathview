import{b as Ud,e as m0,f as be,a as _,d as Y,t as g0,c as X}from"./BpbZmbul.js";import{aS as Uc,aT as Zp,aU as v0,j as pt,R as $r,aV as y0,n as Zc,h as Wr,y as l,aC as b0,ac as Zd,b as w0,i as sr,l as _0,U as sa,as as Jc,a0 as Jd,Y as x0,aW as k0,aX as S0,aY as I0,M as ea,aw as E0,a5 as T0,ad as Qd,ap as gs,k as fs,a4 as Qc,au as C0,aZ as En,d as Jp,g as Qp,a_ as Zl,an as el,ar as N0,e as tl,a3 as $p,a$ as ef,b0 as P0,t as F,P as M0,b1 as A0,av as D0,ao as O0,b2 as R0,ax as Il,v as Zn,a1 as L0,z as z0,D as H0,b3 as tf,b4 as F0,b5 as B0,aj as q0,b6 as V0,b7 as W0,b8 as K0,b9 as G0,ba as j0,bb as Y0,bc as X0,bd as U0,be as nf,bf as Z0,bg as $c,p as Ne,u as sf,a as Pe,c as ue,r as ce,I as y,C as _a,aR as xa,f as j,s as ye,L as El,bh as of,q as je,F as ve,J as H,aP as Dn,bi as Pt,aQ as Lt,bj as J0,G as qt,H as ed,Z as af,bk as Q0}from"./EfQMP3nO.js";import{i as $0,c as eb,d as zn,n as tb,b as nb,s as mt,f as sb,o as yc,e as Et}from"./Br2BvTcy.js";import{p as te,r as Ts,i as V,b as tn,c as td,d as nl,_ as ib,a as ob,s as ab}from"./D_hm8dWP.js";import{g as U,w as Ie,d as Zt}from"./BGJujGDL.js";import{B as rb}from"./BGdq28rP.js";import{s as Hn,B as rf}from"./ByDtRWQE.js";import{i as lb}from"./DyomNF2V.js";const cb=[];function lf(e,t=!1,n=!1){return Kr(e,new Map,"",cb,null,n)}function Kr(e,t,n,s,i=null,o=!1){if(typeof e=="object"&&e!==null){var a=t.get(e);if(a!==void 0)return a;if(e instanceof Map)return new Map(e);if(e instanceof Set)return new Set(e);if(Uc(e)){var r=Array(e.length);t.set(e,r),i!==null&&t.set(i,r);for(var c=0;c<e.length;c+=1){var d=e[c];c in e&&(r[c]=Kr(d,t,n,s,null,o))}return r}if(Zp(e)===v0){r={},t.set(e,r),i!==null&&t.set(i,r);for(var u in e)r[u]=Kr(e[u],t,n,s,null,o);return r}if(e instanceof Date)return structuredClone(e);if(typeof e.toJSON=="function"&&!o)return Kr(e.toJSON(),t,n,s,e)}if(e instanceof EventTarget)return e;try{return structuredClone(e)}catch{return e}}function $d(e,t,n){pt&&$r();var s=new rb(e),i=!y0();Zc(()=>{var o=t();i&&o!==null&&typeof o=="object"&&(o={}),s.ensure(o,n)})}function mn(e,t){return t}function db(e,t,n){for(var s=[],i=t.length,o,a=t.length,r=0;r<i;r++){let f=t[r];Qp(f,()=>{if(o){if(o.pending.delete(f),o.done.add(f),o.pending.size===0){var p=e.outrogroups;bc(Jc(o.done)),p.delete(o),p.size===0&&(e.outrogroups=null)}}else a-=1},!1)}if(a===0){var c=s.length===0&&n!==null;if(c){var d=n,u=d.parentNode;N0(u),u.append(d),e.items.clear()}bc(t,!c)}else o={pending:new Set(t),done:new Set},(e.outrogroups??=new Set).add(o)}function bc(e,t=!0){for(var n=0;n<e.length;n++)tl(e[n],t)}var eu;function _t(e,t,n,s,i,o=null){var a=e,r=new Map,c=(t&ef)!==0;if(c){var d=e;a=pt?sa(ea(d)):d.appendChild(Wr())}pt&&$r();var u=null,f=b0(()=>{var x=n();return Uc(x)?x:x==null?[]:Jc(x)}),p,h=!0;function g(){b.fallback=u,ub(b,p,a,t,s),u!==null&&(p.length===0?(u.f&En)===0?Jp(u):(u.f^=En,qa(u,null,a)):Qp(u,()=>{u=null}))}var v=Zc(()=>{p=l(f);var x=p.length;let S=!1;if(pt){var A=E0(a)===T0;A!==(x===0)&&(a=Qd(),sa(a),gs(!1),S=!0)}for(var m=new Set,D=w0,I=_0(),P=0;P<x;P+=1){pt&&fs.nodeType===Qc&&fs.data===C0&&(a=fs,S=!0,gs(!1));var N=p[P],L=s(N,P),W=h?null:r.get(L);W?(W.v&&Zd(W.v,N),W.i&&Zd(W.i,P),I&&D.skipped_effects.delete(W.e)):(W=pb(r,h?a:eu??=Wr(),N,L,P,i,t,n),h||(W.e.f|=En),r.set(L,W)),m.add(L)}if(x===0&&o&&!u&&(h?u=sr(()=>o(a)):(u=sr(()=>o(eu??=Wr())),u.f|=En)),pt&&x>0&&sa(Qd()),!h)if(I){for(const[O,T]of r)m.has(O)||D.skipped_effects.add(T.e);D.oncommit(g),D.ondiscard(()=>{})}else g();S&&gs(!0),l(f)}),b={effect:v,items:r,outrogroups:null,fallback:u};h=!1,pt&&(a=fs)}function ub(e,t,n,s,i){var o=(s&P0)!==0,a=t.length,r=e.items,c=e.effect.first,d,u=null,f,p=[],h=[],g,v,b,x;if(o)for(x=0;x<a;x+=1)g=t[x],v=i(g,x),b=r.get(v).e,(b.f&En)===0&&(b.nodes?.a?.measure(),(f??=new Set).add(b));for(x=0;x<a;x+=1){if(g=t[x],v=i(g,x),b=r.get(v).e,e.outrogroups!==null)for(const W of e.outrogroups)W.pending.delete(b),W.done.delete(b);if((b.f&En)!==0)if(b.f^=En,b===c)qa(b,null,n);else{var S=u?u.next:c;b===e.effect.last&&(e.effect.last=b.prev),b.prev&&(b.prev.next=b.next),b.next&&(b.next.prev=b.prev),Vn(e,u,b),Vn(e,b,S),qa(b,S,n),u=b,p=[],h=[],c=u.next;continue}if((b.f&Zl)!==0&&(Jp(b),o&&(b.nodes?.a?.unfix(),(f??=new Set).delete(b))),b!==c){if(d!==void 0&&d.has(b)){if(p.length<h.length){var A=h[0],m;u=A.prev;var D=p[0],I=p[p.length-1];for(m=0;m<p.length;m+=1)qa(p[m],A,n);for(m=0;m<h.length;m+=1)d.delete(h[m]);Vn(e,D.prev,I.next),Vn(e,u,D),Vn(e,I,A),c=A,u=I,x-=1,p=[],h=[]}else d.delete(b),qa(b,c,n),Vn(e,b.prev,b.next),Vn(e,b,u===null?e.effect.first:u.next),Vn(e,u,b),u=b;continue}for(p=[],h=[];c!==null&&c!==b;)(d??=new Set).add(c),h.push(c),c=c.next;if(c===null)continue}(b.f&En)===0&&p.push(b),u=b,c=b.next}if(e.outrogroups!==null){for(const W of e.outrogroups)W.pending.size===0&&(bc(Jc(W.done)),e.outrogroups?.delete(W));e.outrogroups.size===0&&(e.outrogroups=null)}if(c!==null||d!==void 0){var P=[];if(d!==void 0)for(b of d)(b.f&Zl)===0&&P.push(b);for(;c!==null;)(c.f&Zl)===0&&c!==e.fallback&&P.push(c),c=c.next;var N=P.length;if(N>0){var L=(s&ef)!==0&&a===0?n:null;if(o){for(x=0;x<N;x+=1)P[x].nodes?.a?.measure();for(x=0;x<N;x+=1)P[x].nodes?.a?.fix()}db(e,P,L)}}o&&$p(()=>{if(f!==void 0)for(b of f)b.nodes?.a?.apply()})}function pb(e,t,n,s,i,o,a,r){var c=(a&S0)!==0?(a&I0)===0?x0(n,!1,!1):Jd(n):null,d=(a&k0)!==0?Jd(i):null;return{v:c,i:d,e:sr(()=>(o(t,c??n,d??i,r),()=>{e.delete(s)}))}}function qa(e,t,n){if(e.nodes)for(var s=e.nodes.start,i=e.nodes.end,o=t&&(t.f&En)===0?t.nodes.start:n;s!==null;){var a=el(s);if(o.before(s),s===i)return;s=a}}function Vn(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function Tl(e,t,n=!1,s=!1,i=!1){var o=e,a="";F(()=>{var r=M0;if(a===(a=t()??"")){pt&&$r();return}if(r.nodes!==null&&(A0(r.nodes.start,r.nodes.end),r.nodes=null),a!==""){if(pt){fs.data;for(var c=$r(),d=c;c!==null&&(c.nodeType!==Qc||c.data!=="");)d=c,c=el(c);if(c===null)throw D0(),O0;Ud(fs,d),o=sa(c);return}var u=a+"";n?u=`<svg>${u}</svg>`:s&&(u=`<math>${u}</math>`);var f=m0(u);if((n||s)&&(f=ea(f)),Ud(ea(f),f.lastChild),n||s)for(;ea(f);)o.before(ea(f));else o.before(f)}})}function cf(e,t){let n=null,s=pt;var i;if(pt){n=fs;for(var o=ea(document.head);o!==null&&(o.nodeType!==Qc||o.data!==e);)o=el(o);if(o===null)gs(!1);else{var a=el(o);o.remove(),sa(a)}}pt||(i=document.head.appendChild(Wr()));try{Zc(()=>t(i),R0)}finally{s&&(gs(!0),sa(n))}}function vt(e,t,n){Il(()=>{var s=Zn(()=>t(e,n?.())||{});if(n&&s?.update){var i=!1,o={};L0(()=>{var a=n();z0(a),i&&H0(o,a)&&(o=a,s.update(a))}),i=!0}if(s?.destroy)return()=>s.destroy()})}function fb(e,t){var n=void 0,s;tf(()=>{n!==(n=t())&&(s&&(tl(s),s=null),n&&(s=sr(()=>{Il(()=>n(e))})))})}function df(e){var t,n,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=df(e[t]))&&(s&&(s+=" "),s+=n)}else for(n in e)e[n]&&(s&&(s+=" "),s+=n);return s}function hb(){for(var e,t,n=0,s="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=df(e))&&(s&&(s+=" "),s+=t);return s}function Cs(e){return typeof e=="object"?hb(e):e??""}const tu=[...` 	
\r\f \v\uFEFF`];function mb(e,t,n){var s=e==null?"":""+e;if(t&&(s=s?s+" "+t:t),n){for(var i in n)if(n[i])s=s?s+" "+i:i;else if(s.length)for(var o=i.length,a=0;(a=s.indexOf(i,a))>=0;){var r=a+o;(a===0||tu.includes(s[a-1]))&&(r===s.length||tu.includes(s[r]))?s=(a===0?"":s.substring(0,a))+s.substring(r+1):a=r}}return s===""?null:s}function nu(e,t=!1){var n=t?" !important;":";",s="";for(var i in e){var o=e[i];o!=null&&o!==""&&(s+=" "+i+": "+o+n)}return s}function Jl(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function gb(e,t){if(t){var n="",s,i;if(Array.isArray(t)?(s=t[0],i=t[1]):s=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,a=0,r=!1,c=[];s&&c.push(...Object.keys(s).map(Jl)),i&&c.push(...Object.keys(i).map(Jl));var d=0,u=-1;const v=e.length;for(var f=0;f<v;f++){var p=e[f];if(r?p==="/"&&e[f-1]==="*"&&(r=!1):o?o===p&&(o=!1):p==="/"&&e[f+1]==="*"?r=!0:p==='"'||p==="'"?o=p:p==="("?a++:p===")"&&a--,!r&&o===!1&&a===0){if(p===":"&&u===-1)u=f;else if(p===";"||f===v-1){if(u!==-1){var h=Jl(e.substring(d,u).trim());if(!c.includes(h)){p!==";"&&f++;var g=e.substring(d,f).trim();n+=" "+g+";"}}d=f+1,u=-1}}}}return s&&(n+=nu(s)),i&&(n+=nu(i,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function Qe(e,t,n,s,i,o){var a=e.__className;if(pt||a!==n||a===void 0){var r=mb(n,s,o);(!pt||r!==e.getAttribute("class"))&&(r==null?e.removeAttribute("class"):t?e.className=r:e.setAttribute("class",r)),e.__className=n}else if(o&&i!==o)for(var c in o){var d=!!o[c];(i==null||d!==!!i[c])&&e.classList.toggle(c,d)}return o}function Ql(e,t={},n,s){for(var i in n){var o=n[i];t[i]!==o&&(n[i]==null?e.style.removeProperty(i):e.style.setProperty(i,o,s))}}function st(e,t,n,s){var i=e.__style;if(pt||i!==t){var o=gb(t,s);(!pt||o!==e.getAttribute("style"))&&(o==null?e.removeAttribute("style"):e.style.cssText=o),e.__style=t}else s&&(Array.isArray(s)?(Ql(e,n?.[0],s[0]),Ql(e,n?.[1],s[1],"important")):Ql(e,n,s));return s}function wc(e,t,n=!1){if(e.multiple){if(t==null)return;if(!Uc(t))return F0();for(var s of e.options)s.selected=t.includes(su(s));return}for(s of e.options){var i=su(s);if(B0(i,t)){s.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function vb(e){var t=new MutationObserver(()=>{wc(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),q0(()=>{t.disconnect()})}function su(e){return"__value"in e?e.__value:e.value}const Xn=Symbol("class"),In=Symbol("style"),uf=Symbol("is custom element"),pf=Symbol("is html");function nd(e){if(pt){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var s=e.value;k(e,"value",null),e.value=s}if(e.hasAttribute("checked")){var i=e.checked;k(e,"checked",null),e.checked=i}}};e.__on_r=n,$p(n),j0()}}function sd(e,t){var n=Cl(e);n.value===(n.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function N3(e,t){var n=Cl(e);n.checked!==(n.checked=t??void 0)&&(e.checked=t)}function yb(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function k(e,t,n,s){var i=Cl(e);pt&&(i[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||i[t]!==(i[t]=n)&&(t==="loading"&&(e[X0]=n),n==null?e.removeAttribute(t):typeof n!="string"&&ff(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function bb(e,t,n,s,i=!1,o=!1){if(pt&&i&&e.tagName==="INPUT"){var a=e,r=a.type==="checkbox"?"defaultChecked":"defaultValue";r in n||nd(a)}var c=Cl(e),d=c[uf],u=!c[pf];let f=pt&&d;f&&gs(!1);var p=t||{},h=e.tagName==="OPTION";for(var g in t)g in n||(n[g]=null);n.class?n.class=Cs(n.class):(s||n[Xn])&&(n.class=null),n[In]&&(n.style??=null);var v=ff(e);for(const I in n){let P=n[I];if(h&&I==="value"&&P==null){e.value=e.__value="",p[I]=P;continue}if(I==="class"){var b=e.namespaceURI==="http://www.w3.org/1999/xhtml";Qe(e,b,P,s,t?.[Xn],n[Xn]),p[I]=P,p[Xn]=n[Xn];continue}if(I==="style"){st(e,P,t?.[In],n[In]),p[I]=P,p[In]=n[In];continue}var x=p[I];if(!(P===x&&!(P===void 0&&e.hasAttribute(I)))){p[I]=P;var S=I[0]+I[1];if(S!=="$$")if(S==="on"){const N={},L="$$"+I;let W=I.slice(2);var A=nb(W);if($0(W)&&(W=W.slice(0,-7),N.capture=!0),!A&&x){if(P!=null)continue;e.removeEventListener(W,p[L],N),p[L]=null}if(P!=null)if(A)e[`__${W}`]=P,zn([W]);else{let O=function(T){p[I].call(this,T)};p[L]=eb(W,e,O,N)}else A&&(e[`__${W}`]=void 0)}else if(I==="style")k(e,I,P);else if(I==="autofocus")K0(e,!!P);else if(!d&&(I==="__value"||I==="value"&&P!=null))e.value=e.__value=P;else if(I==="selected"&&h)yb(e,P);else{var m=I;u||(m=tb(m));var D=m==="defaultValue"||m==="defaultChecked";if(P==null&&!d&&!D)if(c[I]=null,m==="value"||m==="checked"){let N=e;const L=t===void 0;if(m==="value"){let W=N.defaultValue;N.removeAttribute(m),N.defaultValue=W,N.value=N.__value=L?W:null}else{let W=N.defaultChecked;N.removeAttribute(m),N.defaultChecked=W,N.checked=L?W:!1}}else e.removeAttribute(I);else D||v.includes(m)&&(d||typeof P!="string")?(e[m]=P,m in c&&(c[m]=G0)):typeof P!="function"&&k(e,m,P)}}}return f&&gs(!0),p}function ns(e,t,n=[],s=[],i=[],o,a=!1,r=!1){V0(i,n,s,c=>{var d=void 0,u={},f=e.nodeName==="SELECT",p=!1;if(tf(()=>{var g=t(...c.map(l)),v=bb(e,d,g,o,a,r);p&&f&&"value"in g&&wc(e,g.value);for(let x of Object.getOwnPropertySymbols(u))g[x]||tl(u[x]);for(let x of Object.getOwnPropertySymbols(g)){var b=g[x];x.description===W0&&(!d||b!==d[x])&&(u[x]&&tl(u[x]),u[x]=sr(()=>fb(e,()=>b))),v[x]=b}d=v}),f){var h=e;Il(()=>{wc(h,d.value,!0),vb(h)})}p=!0})}function Cl(e){return e.__attributes??={[uf]:e.nodeName.includes("-"),[pf]:e.namespaceURI===Y0}}var iu=new Map;function ff(e){var t=e.getAttribute("is")||e.nodeName,n=iu.get(t);if(n)return n;iu.set(t,n=[]);for(var s,i=e,o=Element.prototype;o!==i;){s=U0(i);for(var a in s)s[a].set&&n.push(a);i=Zp(i)}return n}class id{#e=new WeakMap;#t;#n;static entries=new WeakMap;constructor(t){this.#n=t}observe(t,n){var s=this.#e.get(t)||new Set;return s.add(n),this.#e.set(t,s),this.#s().observe(t,this.#n),()=>{var i=this.#e.get(t);i.delete(n),i.size===0&&(this.#e.delete(t),this.#t.unobserve(t))}}#s(){return this.#t??(this.#t=new ResizeObserver(t=>{for(var n of t){id.entries.set(n.target,n);for(var s of this.#e.get(n.target)||[])s(n)}}))}}var wb=new id({box:"border-box"});function ou(e,t,n){var s=wb.observe(e,()=>n(e[t]));Il(()=>(Zn(()=>n(e[t])),s))}var _b={value:()=>{}};function Nl(){for(var e=0,t=arguments.length,n={},s;e<t;++e){if(!(s=arguments[e]+"")||s in n||/[\s.]/.test(s))throw new Error("illegal type: "+s);n[s]=[]}return new Gr(n)}function Gr(e){this._=e}function xb(e,t){return e.trim().split(/^|\s+/).map(function(n){var s="",i=n.indexOf(".");if(i>=0&&(s=n.slice(i+1),n=n.slice(0,i)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:s}})}Gr.prototype=Nl.prototype={constructor:Gr,on:function(e,t){var n=this._,s=xb(e+"",n),i,o=-1,a=s.length;if(arguments.length<2){for(;++o<a;)if((i=(e=s[o]).type)&&(i=kb(n[i],e.name)))return i;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++o<a;)if(i=(e=s[o]).type)n[i]=au(n[i],e.name,t);else if(t==null)for(i in n)n[i]=au(n[i],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new Gr(e)},call:function(e,t){if((i=arguments.length-2)>0)for(var n=new Array(i),s=0,i,o;s<i;++s)n[s]=arguments[s+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(o=this._[e],s=0,i=o.length;s<i;++s)o[s].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var s=this._[e],i=0,o=s.length;i<o;++i)s[i].value.apply(t,n)}};function kb(e,t){for(var n=0,s=e.length,i;n<s;++n)if((i=e[n]).name===t)return i.value}function au(e,t,n){for(var s=0,i=e.length;s<i;++s)if(e[s].name===t){e[s]=_b,e=e.slice(0,s).concat(e.slice(s+1));break}return n!=null&&e.push({name:t,value:n}),e}var _c="http://www.w3.org/1999/xhtml";const ru={svg:"http://www.w3.org/2000/svg",xhtml:_c,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Pl(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),ru.hasOwnProperty(t)?{space:ru[t],local:e}:e}function Sb(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===_c&&t.documentElement.namespaceURI===_c?t.createElement(e):t.createElementNS(n,e)}}function Ib(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function hf(e){var t=Pl(e);return(t.local?Ib:Sb)(t)}function Eb(){}function od(e){return e==null?Eb:function(){return this.querySelector(e)}}function Tb(e){typeof e!="function"&&(e=od(e));for(var t=this._groups,n=t.length,s=new Array(n),i=0;i<n;++i)for(var o=t[i],a=o.length,r=s[i]=new Array(a),c,d,u=0;u<a;++u)(c=o[u])&&(d=e.call(c,c.__data__,u,o))&&("__data__"in c&&(d.__data__=c.__data__),r[u]=d);return new Wt(s,this._parents)}function Cb(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function Nb(){return[]}function mf(e){return e==null?Nb:function(){return this.querySelectorAll(e)}}function Pb(e){return function(){return Cb(e.apply(this,arguments))}}function Mb(e){typeof e=="function"?e=Pb(e):e=mf(e);for(var t=this._groups,n=t.length,s=[],i=[],o=0;o<n;++o)for(var a=t[o],r=a.length,c,d=0;d<r;++d)(c=a[d])&&(s.push(e.call(c,c.__data__,d,a)),i.push(c));return new Wt(s,i)}function gf(e){return function(){return this.matches(e)}}function vf(e){return function(t){return t.matches(e)}}var Ab=Array.prototype.find;function Db(e){return function(){return Ab.call(this.children,e)}}function Ob(){return this.firstElementChild}function Rb(e){return this.select(e==null?Ob:Db(typeof e=="function"?e:vf(e)))}var Lb=Array.prototype.filter;function zb(){return Array.from(this.children)}function Hb(e){return function(){return Lb.call(this.children,e)}}function Fb(e){return this.selectAll(e==null?zb:Hb(typeof e=="function"?e:vf(e)))}function Bb(e){typeof e!="function"&&(e=gf(e));for(var t=this._groups,n=t.length,s=new Array(n),i=0;i<n;++i)for(var o=t[i],a=o.length,r=s[i]=[],c,d=0;d<a;++d)(c=o[d])&&e.call(c,c.__data__,d,o)&&r.push(c);return new Wt(s,this._parents)}function yf(e){return new Array(e.length)}function qb(){return new Wt(this._enter||this._groups.map(yf),this._parents)}function sl(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}sl.prototype={constructor:sl,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Vb(e){return function(){return e}}function Wb(e,t,n,s,i,o){for(var a=0,r,c=t.length,d=o.length;a<d;++a)(r=t[a])?(r.__data__=o[a],s[a]=r):n[a]=new sl(e,o[a]);for(;a<c;++a)(r=t[a])&&(i[a]=r)}function Kb(e,t,n,s,i,o,a){var r,c,d=new Map,u=t.length,f=o.length,p=new Array(u),h;for(r=0;r<u;++r)(c=t[r])&&(p[r]=h=a.call(c,c.__data__,r,t)+"",d.has(h)?i[r]=c:d.set(h,c));for(r=0;r<f;++r)h=a.call(e,o[r],r,o)+"",(c=d.get(h))?(s[r]=c,c.__data__=o[r],d.delete(h)):n[r]=new sl(e,o[r]);for(r=0;r<u;++r)(c=t[r])&&d.get(p[r])===c&&(i[r]=c)}function Gb(e){return e.__data__}function jb(e,t){if(!arguments.length)return Array.from(this,Gb);var n=t?Kb:Wb,s=this._parents,i=this._groups;typeof e!="function"&&(e=Vb(e));for(var o=i.length,a=new Array(o),r=new Array(o),c=new Array(o),d=0;d<o;++d){var u=s[d],f=i[d],p=f.length,h=Yb(e.call(u,u&&u.__data__,d,s)),g=h.length,v=r[d]=new Array(g),b=a[d]=new Array(g),x=c[d]=new Array(p);n(u,f,v,b,x,h,t);for(var S=0,A=0,m,D;S<g;++S)if(m=v[S]){for(S>=A&&(A=S+1);!(D=b[A])&&++A<g;);m._next=D||null}}return a=new Wt(a,s),a._enter=r,a._exit=c,a}function Yb(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Xb(){return new Wt(this._exit||this._groups.map(yf),this._parents)}function Ub(e,t,n){var s=this.enter(),i=this,o=this.exit();return typeof e=="function"?(s=e(s),s&&(s=s.selection())):s=s.append(e+""),t!=null&&(i=t(i),i&&(i=i.selection())),n==null?o.remove():n(o),s&&i?s.merge(i).order():i}function Zb(e){for(var t=e.selection?e.selection():e,n=this._groups,s=t._groups,i=n.length,o=s.length,a=Math.min(i,o),r=new Array(i),c=0;c<a;++c)for(var d=n[c],u=s[c],f=d.length,p=r[c]=new Array(f),h,g=0;g<f;++g)(h=d[g]||u[g])&&(p[g]=h);for(;c<i;++c)r[c]=n[c];return new Wt(r,this._parents)}function Jb(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var s=e[t],i=s.length-1,o=s[i],a;--i>=0;)(a=s[i])&&(o&&a.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(a,o),o=a);return this}function Qb(e){e||(e=$b);function t(f,p){return f&&p?e(f.__data__,p.__data__):!f-!p}for(var n=this._groups,s=n.length,i=new Array(s),o=0;o<s;++o){for(var a=n[o],r=a.length,c=i[o]=new Array(r),d,u=0;u<r;++u)(d=a[u])&&(c[u]=d);c.sort(t)}return new Wt(i,this._parents).order()}function $b(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function e1(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function t1(){return Array.from(this)}function n1(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var s=e[t],i=0,o=s.length;i<o;++i){var a=s[i];if(a)return a}return null}function s1(){let e=0;for(const t of this)++e;return e}function i1(){return!this.node()}function o1(e){for(var t=this._groups,n=0,s=t.length;n<s;++n)for(var i=t[n],o=0,a=i.length,r;o<a;++o)(r=i[o])&&e.call(r,r.__data__,o,i);return this}function a1(e){return function(){this.removeAttribute(e)}}function r1(e){return function(){this.removeAttributeNS(e.space,e.local)}}function l1(e,t){return function(){this.setAttribute(e,t)}}function c1(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function d1(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function u1(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function p1(e,t){var n=Pl(e);if(arguments.length<2){var s=this.node();return n.local?s.getAttributeNS(n.space,n.local):s.getAttribute(n)}return this.each((t==null?n.local?r1:a1:typeof t=="function"?n.local?u1:d1:n.local?c1:l1)(n,t))}function bf(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function f1(e){return function(){this.style.removeProperty(e)}}function h1(e,t,n){return function(){this.style.setProperty(e,t,n)}}function m1(e,t,n){return function(){var s=t.apply(this,arguments);s==null?this.style.removeProperty(e):this.style.setProperty(e,s,n)}}function g1(e,t,n){return arguments.length>1?this.each((t==null?f1:typeof t=="function"?m1:h1)(e,t,n??"")):la(this.node(),e)}function la(e,t){return e.style.getPropertyValue(t)||bf(e).getComputedStyle(e,null).getPropertyValue(t)}function v1(e){return function(){delete this[e]}}function y1(e,t){return function(){this[e]=t}}function b1(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function w1(e,t){return arguments.length>1?this.each((t==null?v1:typeof t=="function"?b1:y1)(e,t)):this.node()[e]}function wf(e){return e.trim().split(/^|\s+/)}function ad(e){return e.classList||new _f(e)}function _f(e){this._node=e,this._names=wf(e.getAttribute("class")||"")}_f.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function xf(e,t){for(var n=ad(e),s=-1,i=t.length;++s<i;)n.add(t[s])}function kf(e,t){for(var n=ad(e),s=-1,i=t.length;++s<i;)n.remove(t[s])}function _1(e){return function(){xf(this,e)}}function x1(e){return function(){kf(this,e)}}function k1(e,t){return function(){(t.apply(this,arguments)?xf:kf)(this,e)}}function S1(e,t){var n=wf(e+"");if(arguments.length<2){for(var s=ad(this.node()),i=-1,o=n.length;++i<o;)if(!s.contains(n[i]))return!1;return!0}return this.each((typeof t=="function"?k1:t?_1:x1)(n,t))}function I1(){this.textContent=""}function E1(e){return function(){this.textContent=e}}function T1(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function C1(e){return arguments.length?this.each(e==null?I1:(typeof e=="function"?T1:E1)(e)):this.node().textContent}function N1(){this.innerHTML=""}function P1(e){return function(){this.innerHTML=e}}function M1(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function A1(e){return arguments.length?this.each(e==null?N1:(typeof e=="function"?M1:P1)(e)):this.node().innerHTML}function D1(){this.nextSibling&&this.parentNode.appendChild(this)}function O1(){return this.each(D1)}function R1(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function L1(){return this.each(R1)}function z1(e){var t=typeof e=="function"?e:hf(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function H1(){return null}function F1(e,t){var n=typeof e=="function"?e:hf(e),s=t==null?H1:typeof t=="function"?t:od(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),s.apply(this,arguments)||null)})}function B1(){var e=this.parentNode;e&&e.removeChild(this)}function q1(){return this.each(B1)}function V1(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function W1(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function K1(e){return this.select(e?W1:V1)}function G1(e){return arguments.length?this.property("__data__",e):this.node().__data__}function j1(e){return function(t){e.call(this,t,this.__data__)}}function Y1(e){return e.trim().split(/^|\s+/).map(function(t){var n="",s=t.indexOf(".");return s>=0&&(n=t.slice(s+1),t=t.slice(0,s)),{type:t,name:n}})}function X1(e){return function(){var t=this.__on;if(t){for(var n=0,s=-1,i=t.length,o;n<i;++n)o=t[n],(!e.type||o.type===e.type)&&o.name===e.name?this.removeEventListener(o.type,o.listener,o.options):t[++s]=o;++s?t.length=s:delete this.__on}}}function U1(e,t,n){return function(){var s=this.__on,i,o=j1(t);if(s){for(var a=0,r=s.length;a<r;++a)if((i=s[a]).type===e.type&&i.name===e.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=o,i.options=n),i.value=t;return}}this.addEventListener(e.type,o,n),i={type:e.type,name:e.name,value:t,listener:o,options:n},s?s.push(i):this.__on=[i]}}function Z1(e,t,n){var s=Y1(e+""),i,o=s.length,a;if(arguments.length<2){var r=this.node().__on;if(r){for(var c=0,d=r.length,u;c<d;++c)for(i=0,u=r[c];i<o;++i)if((a=s[i]).type===u.type&&a.name===u.name)return u.value}return}for(r=t?U1:X1,i=0;i<o;++i)this.each(r(s[i],t,n));return this}function Sf(e,t,n){var s=bf(e),i=s.CustomEvent;typeof i=="function"?i=new i(t,n):(i=s.document.createEvent("Event"),n?(i.initEvent(t,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(t,!1,!1)),e.dispatchEvent(i)}function J1(e,t){return function(){return Sf(this,e,t)}}function Q1(e,t){return function(){return Sf(this,e,t.apply(this,arguments))}}function $1(e,t){return this.each((typeof t=="function"?Q1:J1)(e,t))}function*ew(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var s=e[t],i=0,o=s.length,a;i<o;++i)(a=s[i])&&(yield a)}var If=[null];function Wt(e,t){this._groups=e,this._parents=t}function hr(){return new Wt([[document.documentElement]],If)}function tw(){return this}Wt.prototype=hr.prototype={constructor:Wt,select:Tb,selectAll:Mb,selectChild:Rb,selectChildren:Fb,filter:Bb,data:jb,enter:qb,exit:Xb,join:Ub,merge:Zb,selection:tw,order:Jb,sort:Qb,call:e1,nodes:t1,node:n1,size:s1,empty:i1,each:o1,attr:p1,style:g1,property:w1,classed:S1,text:C1,html:A1,raise:O1,lower:L1,append:z1,insert:F1,remove:q1,clone:K1,datum:G1,on:Z1,dispatch:$1,[Symbol.iterator]:ew};function jt(e){return typeof e=="string"?new Wt([[document.querySelector(e)]],[document.documentElement]):new Wt([[e]],If)}function nw(e){let t;for(;t=e.sourceEvent;)e=t;return e}function pn(e,t){if(e=nw(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var s=n.createSVGPoint();return s.x=e.clientX,s.y=e.clientY,s=s.matrixTransform(t.getScreenCTM().inverse()),[s.x,s.y]}if(t.getBoundingClientRect){var i=t.getBoundingClientRect();return[e.clientX-i.left-t.clientLeft,e.clientY-i.top-t.clientTop]}}return[e.pageX,e.pageY]}const sw={passive:!1},ir={capture:!0,passive:!1};function $l(e){e.stopImmediatePropagation()}function ia(e){e.preventDefault(),e.stopImmediatePropagation()}function Ef(e){var t=e.document.documentElement,n=jt(e).on("dragstart.drag",ia,ir);"onselectstart"in t?n.on("selectstart.drag",ia,ir):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function Tf(e,t){var n=e.document.documentElement,s=jt(e).on("dragstart.drag",null);t&&(s.on("click.drag",ia,ir),setTimeout(function(){s.on("click.drag",null)},0)),"onselectstart"in n?s.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}const Ir=e=>()=>e;function xc(e,{sourceEvent:t,subject:n,target:s,identifier:i,active:o,x:a,y:r,dx:c,dy:d,dispatch:u}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:s,enumerable:!0,configurable:!0},identifier:{value:i,enumerable:!0,configurable:!0},active:{value:o,enumerable:!0,configurable:!0},x:{value:a,enumerable:!0,configurable:!0},y:{value:r,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:d,enumerable:!0,configurable:!0},_:{value:u}})}xc.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function iw(e){return!e.ctrlKey&&!e.button}function ow(){return this.parentNode}function aw(e,t){return t??{x:e.x,y:e.y}}function rw(){return navigator.maxTouchPoints||"ontouchstart"in this}function Cf(){var e=iw,t=ow,n=aw,s=rw,i={},o=Nl("start","drag","end"),a=0,r,c,d,u,f=0;function p(m){m.on("mousedown.drag",h).filter(s).on("touchstart.drag",b).on("touchmove.drag",x,sw).on("touchend.drag touchcancel.drag",S).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function h(m,D){if(!(u||!e.call(this,m,D))){var I=A(this,t.call(this,m,D),m,D,"mouse");I&&(jt(m.view).on("mousemove.drag",g,ir).on("mouseup.drag",v,ir),Ef(m.view),$l(m),d=!1,r=m.clientX,c=m.clientY,I("start",m))}}function g(m){if(ia(m),!d){var D=m.clientX-r,I=m.clientY-c;d=D*D+I*I>f}i.mouse("drag",m)}function v(m){jt(m.view).on("mousemove.drag mouseup.drag",null),Tf(m.view,d),ia(m),i.mouse("end",m)}function b(m,D){if(e.call(this,m,D)){var I=m.changedTouches,P=t.call(this,m,D),N=I.length,L,W;for(L=0;L<N;++L)(W=A(this,P,m,D,I[L].identifier,I[L]))&&($l(m),W("start",m,I[L]))}}function x(m){var D=m.changedTouches,I=D.length,P,N;for(P=0;P<I;++P)(N=i[D[P].identifier])&&(ia(m),N("drag",m,D[P]))}function S(m){var D=m.changedTouches,I=D.length,P,N;for(u&&clearTimeout(u),u=setTimeout(function(){u=null},500),P=0;P<I;++P)(N=i[D[P].identifier])&&($l(m),N("end",m,D[P]))}function A(m,D,I,P,N,L){var W=o.copy(),O=pn(L||I,D),T,M,w;if((w=n.call(m,new xc("beforestart",{sourceEvent:I,target:p,identifier:N,active:a,x:O[0],y:O[1],dx:0,dy:0,dispatch:W}),P))!=null)return T=w.x-O[0]||0,M=w.y-O[1]||0,function E(C,z,K){var B=O,Z;switch(C){case"start":i[N]=E,Z=a++;break;case"end":delete i[N],--a;case"drag":O=pn(K||z,D),Z=a;break}W.call(C,m,new xc(C,{sourceEvent:z,subject:w,target:p,identifier:N,active:Z,x:O[0]+T,y:O[1]+M,dx:O[0]-B[0],dy:O[1]-B[1],dispatch:W}),P)}}return p.filter=function(m){return arguments.length?(e=typeof m=="function"?m:Ir(!!m),p):e},p.container=function(m){return arguments.length?(t=typeof m=="function"?m:Ir(m),p):t},p.subject=function(m){return arguments.length?(n=typeof m=="function"?m:Ir(m),p):n},p.touchable=function(m){return arguments.length?(s=typeof m=="function"?m:Ir(!!m),p):s},p.on=function(){var m=o.on.apply(o,arguments);return m===o?p:m},p.clickDistance=function(m){return arguments.length?(f=(m=+m)*m,p):Math.sqrt(f)},p}function rd(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function Nf(e,t){var n=Object.create(e.prototype);for(var s in t)n[s]=t[s];return n}function mr(){}var or=.7,il=1/or,oa="\\s*([+-]?\\d+)\\s*",ar="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",vn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",lw=/^#([0-9a-f]{3,8})$/,cw=new RegExp(`^rgb\\(${oa},${oa},${oa}\\)$`),dw=new RegExp(`^rgb\\(${vn},${vn},${vn}\\)$`),uw=new RegExp(`^rgba\\(${oa},${oa},${oa},${ar}\\)$`),pw=new RegExp(`^rgba\\(${vn},${vn},${vn},${ar}\\)$`),fw=new RegExp(`^hsl\\(${ar},${vn},${vn}\\)$`),hw=new RegExp(`^hsla\\(${ar},${vn},${vn},${ar}\\)$`),lu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};rd(mr,ws,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:cu,formatHex:cu,formatHex8:mw,formatHsl:gw,formatRgb:du,toString:du});function cu(){return this.rgb().formatHex()}function mw(){return this.rgb().formatHex8()}function gw(){return Pf(this).formatHsl()}function du(){return this.rgb().formatRgb()}function ws(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=lw.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?uu(t):n===3?new zt(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Er(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Er(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=cw.exec(e))?new zt(t[1],t[2],t[3],1):(t=dw.exec(e))?new zt(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=uw.exec(e))?Er(t[1],t[2],t[3],t[4]):(t=pw.exec(e))?Er(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=fw.exec(e))?hu(t[1],t[2]/100,t[3]/100,1):(t=hw.exec(e))?hu(t[1],t[2]/100,t[3]/100,t[4]):lu.hasOwnProperty(e)?uu(lu[e]):e==="transparent"?new zt(NaN,NaN,NaN,0):null}function uu(e){return new zt(e>>16&255,e>>8&255,e&255,1)}function Er(e,t,n,s){return s<=0&&(e=t=n=NaN),new zt(e,t,n,s)}function vw(e){return e instanceof mr||(e=ws(e)),e?(e=e.rgb(),new zt(e.r,e.g,e.b,e.opacity)):new zt}function kc(e,t,n,s){return arguments.length===1?vw(e):new zt(e,t,n,s??1)}function zt(e,t,n,s){this.r=+e,this.g=+t,this.b=+n,this.opacity=+s}rd(zt,kc,Nf(mr,{brighter(e){return e=e==null?il:Math.pow(il,e),new zt(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?or:Math.pow(or,e),new zt(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new zt(vs(this.r),vs(this.g),vs(this.b),ol(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:pu,formatHex:pu,formatHex8:yw,formatRgb:fu,toString:fu}));function pu(){return`#${hs(this.r)}${hs(this.g)}${hs(this.b)}`}function yw(){return`#${hs(this.r)}${hs(this.g)}${hs(this.b)}${hs((isNaN(this.opacity)?1:this.opacity)*255)}`}function fu(){const e=ol(this.opacity);return`${e===1?"rgb(":"rgba("}${vs(this.r)}, ${vs(this.g)}, ${vs(this.b)}${e===1?")":`, ${e})`}`}function ol(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function vs(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function hs(e){return e=vs(e),(e<16?"0":"")+e.toString(16)}function hu(e,t,n,s){return s<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new $t(e,t,n,s)}function Pf(e){if(e instanceof $t)return new $t(e.h,e.s,e.l,e.opacity);if(e instanceof mr||(e=ws(e)),!e)return new $t;if(e instanceof $t)return e;e=e.rgb();var t=e.r/255,n=e.g/255,s=e.b/255,i=Math.min(t,n,s),o=Math.max(t,n,s),a=NaN,r=o-i,c=(o+i)/2;return r?(t===o?a=(n-s)/r+(n<s)*6:n===o?a=(s-t)/r+2:a=(t-n)/r+4,r/=c<.5?o+i:2-o-i,a*=60):r=c>0&&c<1?0:a,new $t(a,r,c,e.opacity)}function bw(e,t,n,s){return arguments.length===1?Pf(e):new $t(e,t,n,s??1)}function $t(e,t,n,s){this.h=+e,this.s=+t,this.l=+n,this.opacity=+s}rd($t,bw,Nf(mr,{brighter(e){return e=e==null?il:Math.pow(il,e),new $t(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?or:Math.pow(or,e),new $t(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,s=n+(n<.5?n:1-n)*t,i=2*n-s;return new zt(ec(e>=240?e-240:e+120,i,s),ec(e,i,s),ec(e<120?e+240:e-120,i,s),this.opacity)},clamp(){return new $t(mu(this.h),Tr(this.s),Tr(this.l),ol(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=ol(this.opacity);return`${e===1?"hsl(":"hsla("}${mu(this.h)}, ${Tr(this.s)*100}%, ${Tr(this.l)*100}%${e===1?")":`, ${e})`}`}}));function mu(e){return e=(e||0)%360,e<0?e+360:e}function Tr(e){return Math.max(0,Math.min(1,e||0))}function ec(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const ld=e=>()=>e;function ww(e,t){return function(n){return e+n*t}}function _w(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(s){return Math.pow(e+s*t,n)}}function xw(e){return(e=+e)==1?Mf:function(t,n){return n-t?_w(t,n,e):ld(isNaN(t)?n:t)}}function Mf(e,t){var n=t-e;return n?ww(e,n):ld(isNaN(e)?t:e)}const al=(function e(t){var n=xw(t);function s(i,o){var a=n((i=kc(i)).r,(o=kc(o)).r),r=n(i.g,o.g),c=n(i.b,o.b),d=Mf(i.opacity,o.opacity);return function(u){return i.r=a(u),i.g=r(u),i.b=c(u),i.opacity=d(u),i+""}}return s.gamma=e,s})(1);function kw(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,s=t.slice(),i;return function(o){for(i=0;i<n;++i)s[i]=e[i]*(1-o)+t[i]*o;return s}}function Sw(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Iw(e,t){var n=t?t.length:0,s=e?Math.min(n,e.length):0,i=new Array(s),o=new Array(n),a;for(a=0;a<s;++a)i[a]=Za(e[a],t[a]);for(;a<n;++a)o[a]=t[a];return function(r){for(a=0;a<s;++a)o[a]=i[a](r);return o}}function Ew(e,t){var n=new Date;return e=+e,t=+t,function(s){return n.setTime(e*(1-s)+t*s),n}}function fn(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function Tw(e,t){var n={},s={},i;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(i in t)i in e?n[i]=Za(e[i],t[i]):s[i]=t[i];return function(o){for(i in n)s[i]=n[i](o);return s}}var Sc=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,tc=new RegExp(Sc.source,"g");function Cw(e){return function(){return e}}function Nw(e){return function(t){return e(t)+""}}function Af(e,t){var n=Sc.lastIndex=tc.lastIndex=0,s,i,o,a=-1,r=[],c=[];for(e=e+"",t=t+"";(s=Sc.exec(e))&&(i=tc.exec(t));)(o=i.index)>n&&(o=t.slice(n,o),r[a]?r[a]+=o:r[++a]=o),(s=s[0])===(i=i[0])?r[a]?r[a]+=i:r[++a]=i:(r[++a]=null,c.push({i:a,x:fn(s,i)})),n=tc.lastIndex;return n<t.length&&(o=t.slice(n),r[a]?r[a]+=o:r[++a]=o),r.length<2?c[0]?Nw(c[0].x):Cw(t):(t=c.length,function(d){for(var u=0,f;u<t;++u)r[(f=c[u]).i]=f.x(d);return r.join("")})}function Za(e,t){var n=typeof t,s;return t==null||n==="boolean"?ld(t):(n==="number"?fn:n==="string"?(s=ws(t))?(t=s,al):Af:t instanceof ws?al:t instanceof Date?Ew:Sw(t)?kw:Array.isArray(t)?Iw:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?Tw:fn)(e,t)}var gu=180/Math.PI,Ic={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Df(e,t,n,s,i,o){var a,r,c;return(a=Math.sqrt(e*e+t*t))&&(e/=a,t/=a),(c=e*n+t*s)&&(n-=e*c,s-=t*c),(r=Math.sqrt(n*n+s*s))&&(n/=r,s/=r,c/=r),e*s<t*n&&(e=-e,t=-t,c=-c,a=-a),{translateX:i,translateY:o,rotate:Math.atan2(t,e)*gu,skewX:Math.atan(c)*gu,scaleX:a,scaleY:r}}var Cr;function Pw(e){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?Ic:Df(t.a,t.b,t.c,t.d,t.e,t.f)}function Mw(e){return e==null||(Cr||(Cr=document.createElementNS("http://www.w3.org/2000/svg","g")),Cr.setAttribute("transform",e),!(e=Cr.transform.baseVal.consolidate()))?Ic:(e=e.matrix,Df(e.a,e.b,e.c,e.d,e.e,e.f))}function Of(e,t,n,s){function i(d){return d.length?d.pop()+" ":""}function o(d,u,f,p,h,g){if(d!==f||u!==p){var v=h.push("translate(",null,t,null,n);g.push({i:v-4,x:fn(d,f)},{i:v-2,x:fn(u,p)})}else(f||p)&&h.push("translate("+f+t+p+n)}function a(d,u,f,p){d!==u?(d-u>180?u+=360:u-d>180&&(d+=360),p.push({i:f.push(i(f)+"rotate(",null,s)-2,x:fn(d,u)})):u&&f.push(i(f)+"rotate("+u+s)}function r(d,u,f,p){d!==u?p.push({i:f.push(i(f)+"skewX(",null,s)-2,x:fn(d,u)}):u&&f.push(i(f)+"skewX("+u+s)}function c(d,u,f,p,h,g){if(d!==f||u!==p){var v=h.push(i(h)+"scale(",null,",",null,")");g.push({i:v-4,x:fn(d,f)},{i:v-2,x:fn(u,p)})}else(f!==1||p!==1)&&h.push(i(h)+"scale("+f+","+p+")")}return function(d,u){var f=[],p=[];return d=e(d),u=e(u),o(d.translateX,d.translateY,u.translateX,u.translateY,f,p),a(d.rotate,u.rotate,f,p),r(d.skewX,u.skewX,f,p),c(d.scaleX,d.scaleY,u.scaleX,u.scaleY,f,p),d=u=null,function(h){for(var g=-1,v=p.length,b;++g<v;)f[(b=p[g]).i]=b.x(h);return f.join("")}}}var Aw=Of(Pw,"px, ","px)","deg)"),Dw=Of(Mw,", ",")",")"),Ow=1e-12;function vu(e){return((e=Math.exp(e))+1/e)/2}function Rw(e){return((e=Math.exp(e))-1/e)/2}function Lw(e){return((e=Math.exp(2*e))-1)/(e+1)}const jr=(function e(t,n,s){function i(o,a){var r=o[0],c=o[1],d=o[2],u=a[0],f=a[1],p=a[2],h=u-r,g=f-c,v=h*h+g*g,b,x;if(v<Ow)x=Math.log(p/d)/t,b=function(P){return[r+P*h,c+P*g,d*Math.exp(t*P*x)]};else{var S=Math.sqrt(v),A=(p*p-d*d+s*v)/(2*d*n*S),m=(p*p-d*d-s*v)/(2*p*n*S),D=Math.log(Math.sqrt(A*A+1)-A),I=Math.log(Math.sqrt(m*m+1)-m);x=(I-D)/t,b=function(P){var N=P*x,L=vu(D),W=d/(n*S)*(L*Lw(t*N+D)-Rw(D));return[r+W*h,c+W*g,d*L/vu(t*N+D)]}}return b.duration=x*1e3*t/Math.SQRT2,b}return i.rho=function(o){var a=Math.max(.001,+o),r=a*a,c=r*r;return e(a,r,c)},i})(Math.SQRT2,2,4);var ca=0,Va=0,Oa=0,Rf=1e3,rl,Wa,ll=0,_s=0,Ml=0,rr=typeof performance=="object"&&performance.now?performance:Date,Lf=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function cd(){return _s||(Lf(zw),_s=rr.now()+Ml)}function zw(){_s=0}function cl(){this._call=this._time=this._next=null}cl.prototype=zf.prototype={constructor:cl,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?cd():+n)+(t==null?0:+t),!this._next&&Wa!==this&&(Wa?Wa._next=this:rl=this,Wa=this),this._call=e,this._time=n,Ec()},stop:function(){this._call&&(this._call=null,this._time=1/0,Ec())}};function zf(e,t,n){var s=new cl;return s.restart(e,t,n),s}function Hw(){cd(),++ca;for(var e=rl,t;e;)(t=_s-e._time)>=0&&e._call.call(void 0,t),e=e._next;--ca}function yu(){_s=(ll=rr.now())+Ml,ca=Va=0;try{Hw()}finally{ca=0,Bw(),_s=0}}function Fw(){var e=rr.now(),t=e-ll;t>Rf&&(Ml-=t,ll=e)}function Bw(){for(var e,t=rl,n,s=1/0;t;)t._call?(s>t._time&&(s=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:rl=n);Wa=e,Ec(s)}function Ec(e){if(!ca){Va&&(Va=clearTimeout(Va));var t=e-_s;t>24?(e<1/0&&(Va=setTimeout(yu,e-rr.now()-Ml)),Oa&&(Oa=clearInterval(Oa))):(Oa||(ll=rr.now(),Oa=setInterval(Fw,Rf)),ca=1,Lf(yu))}}function bu(e,t,n){var s=new cl;return t=t==null?0:+t,s.restart(i=>{s.stop(),e(i+t)},t,n),s}var qw=Nl("start","end","cancel","interrupt"),Vw=[],Hf=0,wu=1,Tc=2,Yr=3,_u=4,Cc=5,Xr=6;function Al(e,t,n,s,i,o){var a=e.__transition;if(!a)e.__transition={};else if(n in a)return;Ww(e,n,{name:t,index:s,group:i,on:qw,tween:Vw,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:Hf})}function dd(e,t){var n=nn(e,t);if(n.state>Hf)throw new Error("too late; already scheduled");return n}function bn(e,t){var n=nn(e,t);if(n.state>Yr)throw new Error("too late; already running");return n}function nn(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function Ww(e,t,n){var s=e.__transition,i;s[t]=n,n.timer=zf(o,0,n.time);function o(d){n.state=wu,n.timer.restart(a,n.delay,n.time),n.delay<=d&&a(d-n.delay)}function a(d){var u,f,p,h;if(n.state!==wu)return c();for(u in s)if(h=s[u],h.name===n.name){if(h.state===Yr)return bu(a);h.state===_u?(h.state=Xr,h.timer.stop(),h.on.call("interrupt",e,e.__data__,h.index,h.group),delete s[u]):+u<t&&(h.state=Xr,h.timer.stop(),h.on.call("cancel",e,e.__data__,h.index,h.group),delete s[u])}if(bu(function(){n.state===Yr&&(n.state=_u,n.timer.restart(r,n.delay,n.time),r(d))}),n.state=Tc,n.on.call("start",e,e.__data__,n.index,n.group),n.state===Tc){for(n.state=Yr,i=new Array(p=n.tween.length),u=0,f=-1;u<p;++u)(h=n.tween[u].value.call(e,e.__data__,n.index,n.group))&&(i[++f]=h);i.length=f+1}}function r(d){for(var u=d<n.duration?n.ease.call(null,d/n.duration):(n.timer.restart(c),n.state=Cc,1),f=-1,p=i.length;++f<p;)i[f].call(e,u);n.state===Cc&&(n.on.call("end",e,e.__data__,n.index,n.group),c())}function c(){n.state=Xr,n.timer.stop(),delete s[t];for(var d in s)return;delete e.__transition}}function Ur(e,t){var n=e.__transition,s,i,o=!0,a;if(n){t=t==null?null:t+"";for(a in n){if((s=n[a]).name!==t){o=!1;continue}i=s.state>Tc&&s.state<Cc,s.state=Xr,s.timer.stop(),s.on.call(i?"interrupt":"cancel",e,e.__data__,s.index,s.group),delete n[a]}o&&delete e.__transition}}function Kw(e){return this.each(function(){Ur(this,e)})}function Gw(e,t){var n,s;return function(){var i=bn(this,e),o=i.tween;if(o!==n){s=n=o;for(var a=0,r=s.length;a<r;++a)if(s[a].name===t){s=s.slice(),s.splice(a,1);break}}i.tween=s}}function jw(e,t,n){var s,i;if(typeof n!="function")throw new Error;return function(){var o=bn(this,e),a=o.tween;if(a!==s){i=(s=a).slice();for(var r={name:t,value:n},c=0,d=i.length;c<d;++c)if(i[c].name===t){i[c]=r;break}c===d&&i.push(r)}o.tween=i}}function Yw(e,t){var n=this._id;if(e+="",arguments.length<2){for(var s=nn(this.node(),n).tween,i=0,o=s.length,a;i<o;++i)if((a=s[i]).name===e)return a.value;return null}return this.each((t==null?Gw:jw)(n,e,t))}function ud(e,t,n){var s=e._id;return e.each(function(){var i=bn(this,s);(i.value||(i.value={}))[t]=n.apply(this,arguments)}),function(i){return nn(i,s).value[t]}}function Ff(e,t){var n;return(typeof t=="number"?fn:t instanceof ws?al:(n=ws(t))?(t=n,al):Af)(e,t)}function Xw(e){return function(){this.removeAttribute(e)}}function Uw(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Zw(e,t,n){var s,i=n+"",o;return function(){var a=this.getAttribute(e);return a===i?null:a===s?o:o=t(s=a,n)}}function Jw(e,t,n){var s,i=n+"",o;return function(){var a=this.getAttributeNS(e.space,e.local);return a===i?null:a===s?o:o=t(s=a,n)}}function Qw(e,t,n){var s,i,o;return function(){var a,r=n(this),c;return r==null?void this.removeAttribute(e):(a=this.getAttribute(e),c=r+"",a===c?null:a===s&&c===i?o:(i=c,o=t(s=a,r)))}}function $w(e,t,n){var s,i,o;return function(){var a,r=n(this),c;return r==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),c=r+"",a===c?null:a===s&&c===i?o:(i=c,o=t(s=a,r)))}}function e_(e,t){var n=Pl(e),s=n==="transform"?Dw:Ff;return this.attrTween(e,typeof t=="function"?(n.local?$w:Qw)(n,s,ud(this,"attr."+e,t)):t==null?(n.local?Uw:Xw)(n):(n.local?Jw:Zw)(n,s,t))}function t_(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function n_(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function s_(e,t){var n,s;function i(){var o=t.apply(this,arguments);return o!==s&&(n=(s=o)&&n_(e,o)),n}return i._value=t,i}function i_(e,t){var n,s;function i(){var o=t.apply(this,arguments);return o!==s&&(n=(s=o)&&t_(e,o)),n}return i._value=t,i}function o_(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var s=Pl(e);return this.tween(n,(s.local?s_:i_)(s,t))}function a_(e,t){return function(){dd(this,e).delay=+t.apply(this,arguments)}}function r_(e,t){return t=+t,function(){dd(this,e).delay=t}}function l_(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?a_:r_)(t,e)):nn(this.node(),t).delay}function c_(e,t){return function(){bn(this,e).duration=+t.apply(this,arguments)}}function d_(e,t){return t=+t,function(){bn(this,e).duration=t}}function u_(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?c_:d_)(t,e)):nn(this.node(),t).duration}function p_(e,t){if(typeof t!="function")throw new Error;return function(){bn(this,e).ease=t}}function f_(e){var t=this._id;return arguments.length?this.each(p_(t,e)):nn(this.node(),t).ease}function h_(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;bn(this,e).ease=n}}function m_(e){if(typeof e!="function")throw new Error;return this.each(h_(this._id,e))}function g_(e){typeof e!="function"&&(e=gf(e));for(var t=this._groups,n=t.length,s=new Array(n),i=0;i<n;++i)for(var o=t[i],a=o.length,r=s[i]=[],c,d=0;d<a;++d)(c=o[d])&&e.call(c,c.__data__,d,o)&&r.push(c);return new On(s,this._parents,this._name,this._id)}function v_(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,s=t.length,i=n.length,o=Math.min(s,i),a=new Array(s),r=0;r<o;++r)for(var c=t[r],d=n[r],u=c.length,f=a[r]=new Array(u),p,h=0;h<u;++h)(p=c[h]||d[h])&&(f[h]=p);for(;r<s;++r)a[r]=t[r];return new On(a,this._parents,this._name,this._id)}function y_(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function b_(e,t,n){var s,i,o=y_(t)?dd:bn;return function(){var a=o(this,e),r=a.on;r!==s&&(i=(s=r).copy()).on(t,n),a.on=i}}function w_(e,t){var n=this._id;return arguments.length<2?nn(this.node(),n).on.on(e):this.each(b_(n,e,t))}function __(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function x_(){return this.on("end.remove",__(this._id))}function k_(e){var t=this._name,n=this._id;typeof e!="function"&&(e=od(e));for(var s=this._groups,i=s.length,o=new Array(i),a=0;a<i;++a)for(var r=s[a],c=r.length,d=o[a]=new Array(c),u,f,p=0;p<c;++p)(u=r[p])&&(f=e.call(u,u.__data__,p,r))&&("__data__"in u&&(f.__data__=u.__data__),d[p]=f,Al(d[p],t,n,p,d,nn(u,n)));return new On(o,this._parents,t,n)}function S_(e){var t=this._name,n=this._id;typeof e!="function"&&(e=mf(e));for(var s=this._groups,i=s.length,o=[],a=[],r=0;r<i;++r)for(var c=s[r],d=c.length,u,f=0;f<d;++f)if(u=c[f]){for(var p=e.call(u,u.__data__,f,c),h,g=nn(u,n),v=0,b=p.length;v<b;++v)(h=p[v])&&Al(h,t,n,v,p,g);o.push(p),a.push(u)}return new On(o,a,t,n)}var I_=hr.prototype.constructor;function E_(){return new I_(this._groups,this._parents)}function T_(e,t){var n,s,i;return function(){var o=la(this,e),a=(this.style.removeProperty(e),la(this,e));return o===a?null:o===n&&a===s?i:i=t(n=o,s=a)}}function Bf(e){return function(){this.style.removeProperty(e)}}function C_(e,t,n){var s,i=n+"",o;return function(){var a=la(this,e);return a===i?null:a===s?o:o=t(s=a,n)}}function N_(e,t,n){var s,i,o;return function(){var a=la(this,e),r=n(this),c=r+"";return r==null&&(c=r=(this.style.removeProperty(e),la(this,e))),a===c?null:a===s&&c===i?o:(i=c,o=t(s=a,r))}}function P_(e,t){var n,s,i,o="style."+t,a="end."+o,r;return function(){var c=bn(this,e),d=c.on,u=c.value[o]==null?r||(r=Bf(t)):void 0;(d!==n||i!==u)&&(s=(n=d).copy()).on(a,i=u),c.on=s}}function M_(e,t,n){var s=(e+="")=="transform"?Aw:Ff;return t==null?this.styleTween(e,T_(e,s)).on("end.style."+e,Bf(e)):typeof t=="function"?this.styleTween(e,N_(e,s,ud(this,"style."+e,t))).each(P_(this._id,e)):this.styleTween(e,C_(e,s,t),n).on("end.style."+e,null)}function A_(e,t,n){return function(s){this.style.setProperty(e,t.call(this,s),n)}}function D_(e,t,n){var s,i;function o(){var a=t.apply(this,arguments);return a!==i&&(s=(i=a)&&A_(e,a,n)),s}return o._value=t,o}function O_(e,t,n){var s="style."+(e+="");if(arguments.length<2)return(s=this.tween(s))&&s._value;if(t==null)return this.tween(s,null);if(typeof t!="function")throw new Error;return this.tween(s,D_(e,t,n??""))}function R_(e){return function(){this.textContent=e}}function L_(e){return function(){var t=e(this);this.textContent=t??""}}function z_(e){return this.tween("text",typeof e=="function"?L_(ud(this,"text",e)):R_(e==null?"":e+""))}function H_(e){return function(t){this.textContent=e.call(this,t)}}function F_(e){var t,n;function s(){var i=e.apply(this,arguments);return i!==n&&(t=(n=i)&&H_(i)),t}return s._value=e,s}function B_(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,F_(e))}function q_(){for(var e=this._name,t=this._id,n=qf(),s=this._groups,i=s.length,o=0;o<i;++o)for(var a=s[o],r=a.length,c,d=0;d<r;++d)if(c=a[d]){var u=nn(c,t);Al(c,e,n,d,a,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new On(s,this._parents,e,n)}function V_(){var e,t,n=this,s=n._id,i=n.size();return new Promise(function(o,a){var r={value:a},c={value:function(){--i===0&&o()}};n.each(function(){var d=bn(this,s),u=d.on;u!==e&&(t=(e=u).copy(),t._.cancel.push(r),t._.interrupt.push(r),t._.end.push(c)),d.on=t}),i===0&&o()})}var W_=0;function On(e,t,n,s){this._groups=e,this._parents=t,this._name=n,this._id=s}function qf(){return++W_}var xn=hr.prototype;On.prototype={constructor:On,select:k_,selectAll:S_,selectChild:xn.selectChild,selectChildren:xn.selectChildren,filter:g_,merge:v_,selection:E_,transition:q_,call:xn.call,nodes:xn.nodes,node:xn.node,size:xn.size,empty:xn.empty,each:xn.each,on:w_,attr:e_,attrTween:o_,style:M_,styleTween:O_,text:z_,textTween:B_,remove:x_,tween:Yw,delay:l_,duration:u_,ease:f_,easeVarying:m_,end:V_,[Symbol.iterator]:xn[Symbol.iterator]};function K_(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var G_={time:null,delay:0,duration:250,ease:K_};function j_(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function Y_(e){var t,n;e instanceof On?(t=e._id,e=e._name):(t=qf(),(n=G_).time=cd(),e=e==null?null:e+"");for(var s=this._groups,i=s.length,o=0;o<i;++o)for(var a=s[o],r=a.length,c,d=0;d<r;++d)(c=a[d])&&Al(c,e,t,d,a,n||j_(c,t));return new On(s,this._parents,e,t)}hr.prototype.interrupt=Kw;hr.prototype.transition=Y_;const Nr=e=>()=>e;function X_(e,{sourceEvent:t,target:n,transform:s,dispatch:i}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:s,enumerable:!0,configurable:!0},_:{value:i}})}function Tn(e,t,n){this.k=e,this.x=t,this.y=n}Tn.prototype={constructor:Tn,scale:function(e){return e===1?this:new Tn(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Tn(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Dl=new Tn(1,0,0);Vf.prototype=Tn.prototype;function Vf(e){for(;!e.__zoom;)if(!(e=e.parentNode))return Dl;return e.__zoom}function nc(e){e.stopImmediatePropagation()}function Ra(e){e.preventDefault(),e.stopImmediatePropagation()}function U_(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function Z_(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function xu(){return this.__zoom||Dl}function J_(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function Q_(){return navigator.maxTouchPoints||"ontouchstart"in this}function $_(e,t,n){var s=e.invertX(t[0][0])-n[0][0],i=e.invertX(t[1][0])-n[1][0],o=e.invertY(t[0][1])-n[0][1],a=e.invertY(t[1][1])-n[1][1];return e.translate(i>s?(s+i)/2:Math.min(0,s)||Math.max(0,i),a>o?(o+a)/2:Math.min(0,o)||Math.max(0,a))}function ex(){var e=U_,t=Z_,n=$_,s=J_,i=Q_,o=[0,1/0],a=[[-1/0,-1/0],[1/0,1/0]],r=250,c=jr,d=Nl("start","zoom","end"),u,f,p,h=500,g=150,v=0,b=10;function x(w){w.property("__zoom",xu).on("wheel.zoom",N,{passive:!1}).on("mousedown.zoom",L).on("dblclick.zoom",W).filter(i).on("touchstart.zoom",O).on("touchmove.zoom",T).on("touchend.zoom touchcancel.zoom",M).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}x.transform=function(w,E,C,z){var K=w.selection?w.selection():w;K.property("__zoom",xu),w!==K?D(w,E,C,z):K.interrupt().each(function(){I(this,arguments).event(z).start().zoom(null,typeof E=="function"?E.apply(this,arguments):E).end()})},x.scaleBy=function(w,E,C,z){x.scaleTo(w,function(){var K=this.__zoom.k,B=typeof E=="function"?E.apply(this,arguments):E;return K*B},C,z)},x.scaleTo=function(w,E,C,z){x.transform(w,function(){var K=t.apply(this,arguments),B=this.__zoom,Z=C==null?m(K):typeof C=="function"?C.apply(this,arguments):C,Q=B.invert(Z),ee=typeof E=="function"?E.apply(this,arguments):E;return n(A(S(B,ee),Z,Q),K,a)},C,z)},x.translateBy=function(w,E,C,z){x.transform(w,function(){return n(this.__zoom.translate(typeof E=="function"?E.apply(this,arguments):E,typeof C=="function"?C.apply(this,arguments):C),t.apply(this,arguments),a)},null,z)},x.translateTo=function(w,E,C,z,K){x.transform(w,function(){var B=t.apply(this,arguments),Z=this.__zoom,Q=z==null?m(B):typeof z=="function"?z.apply(this,arguments):z;return n(Dl.translate(Q[0],Q[1]).scale(Z.k).translate(typeof E=="function"?-E.apply(this,arguments):-E,typeof C=="function"?-C.apply(this,arguments):-C),B,a)},z,K)};function S(w,E){return E=Math.max(o[0],Math.min(o[1],E)),E===w.k?w:new Tn(E,w.x,w.y)}function A(w,E,C){var z=E[0]-C[0]*w.k,K=E[1]-C[1]*w.k;return z===w.x&&K===w.y?w:new Tn(w.k,z,K)}function m(w){return[(+w[0][0]+ +w[1][0])/2,(+w[0][1]+ +w[1][1])/2]}function D(w,E,C,z){w.on("start.zoom",function(){I(this,arguments).event(z).start()}).on("interrupt.zoom end.zoom",function(){I(this,arguments).event(z).end()}).tween("zoom",function(){var K=this,B=arguments,Z=I(K,B).event(z),Q=t.apply(K,B),ee=C==null?m(Q):typeof C=="function"?C.apply(K,B):C,de=Math.max(Q[1][0]-Q[0][0],Q[1][1]-Q[0][1]),oe=K.__zoom,Se=typeof E=="function"?E.apply(K,B):E,he=c(oe.invert(ee).concat(de/oe.k),Se.invert(ee).concat(de/Se.k));return function(q){if(q===1)q=Se;else{var G=he(q),se=de/G[2];q=new Tn(se,ee[0]-G[0]*se,ee[1]-G[1]*se)}Z.zoom(null,q)}})}function I(w,E,C){return!C&&w.__zooming||new P(w,E)}function P(w,E){this.that=w,this.args=E,this.active=0,this.sourceEvent=null,this.extent=t.apply(w,E),this.taps=0}P.prototype={event:function(w){return w&&(this.sourceEvent=w),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(w,E){return this.mouse&&w!=="mouse"&&(this.mouse[1]=E.invert(this.mouse[0])),this.touch0&&w!=="touch"&&(this.touch0[1]=E.invert(this.touch0[0])),this.touch1&&w!=="touch"&&(this.touch1[1]=E.invert(this.touch1[0])),this.that.__zoom=E,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(w){var E=jt(this.that).datum();d.call(w,this.that,new X_(w,{sourceEvent:this.sourceEvent,target:x,transform:this.that.__zoom,dispatch:d}),E)}};function N(w,...E){if(!e.apply(this,arguments))return;var C=I(this,E).event(w),z=this.__zoom,K=Math.max(o[0],Math.min(o[1],z.k*Math.pow(2,s.apply(this,arguments)))),B=pn(w);if(C.wheel)(C.mouse[0][0]!==B[0]||C.mouse[0][1]!==B[1])&&(C.mouse[1]=z.invert(C.mouse[0]=B)),clearTimeout(C.wheel);else{if(z.k===K)return;C.mouse=[B,z.invert(B)],Ur(this),C.start()}Ra(w),C.wheel=setTimeout(Z,g),C.zoom("mouse",n(A(S(z,K),C.mouse[0],C.mouse[1]),C.extent,a));function Z(){C.wheel=null,C.end()}}function L(w,...E){if(p||!e.apply(this,arguments))return;var C=w.currentTarget,z=I(this,E,!0).event(w),K=jt(w.view).on("mousemove.zoom",ee,!0).on("mouseup.zoom",de,!0),B=pn(w,C),Z=w.clientX,Q=w.clientY;Ef(w.view),nc(w),z.mouse=[B,this.__zoom.invert(B)],Ur(this),z.start();function ee(oe){if(Ra(oe),!z.moved){var Se=oe.clientX-Z,he=oe.clientY-Q;z.moved=Se*Se+he*he>v}z.event(oe).zoom("mouse",n(A(z.that.__zoom,z.mouse[0]=pn(oe,C),z.mouse[1]),z.extent,a))}function de(oe){K.on("mousemove.zoom mouseup.zoom",null),Tf(oe.view,z.moved),Ra(oe),z.event(oe).end()}}function W(w,...E){if(e.apply(this,arguments)){var C=this.__zoom,z=pn(w.changedTouches?w.changedTouches[0]:w,this),K=C.invert(z),B=C.k*(w.shiftKey?.5:2),Z=n(A(S(C,B),z,K),t.apply(this,E),a);Ra(w),r>0?jt(this).transition().duration(r).call(D,Z,z,w):jt(this).call(x.transform,Z,z,w)}}function O(w,...E){if(e.apply(this,arguments)){var C=w.touches,z=C.length,K=I(this,E,w.changedTouches.length===z).event(w),B,Z,Q,ee;for(nc(w),Z=0;Z<z;++Z)Q=C[Z],ee=pn(Q,this),ee=[ee,this.__zoom.invert(ee),Q.identifier],K.touch0?!K.touch1&&K.touch0[2]!==ee[2]&&(K.touch1=ee,K.taps=0):(K.touch0=ee,B=!0,K.taps=1+!!u);u&&(u=clearTimeout(u)),B&&(K.taps<2&&(f=ee[0],u=setTimeout(function(){u=null},h)),Ur(this),K.start())}}function T(w,...E){if(this.__zooming){var C=I(this,E).event(w),z=w.changedTouches,K=z.length,B,Z,Q,ee;for(Ra(w),B=0;B<K;++B)Z=z[B],Q=pn(Z,this),C.touch0&&C.touch0[2]===Z.identifier?C.touch0[0]=Q:C.touch1&&C.touch1[2]===Z.identifier&&(C.touch1[0]=Q);if(Z=C.that.__zoom,C.touch1){var de=C.touch0[0],oe=C.touch0[1],Se=C.touch1[0],he=C.touch1[1],q=(q=Se[0]-de[0])*q+(q=Se[1]-de[1])*q,G=(G=he[0]-oe[0])*G+(G=he[1]-oe[1])*G;Z=S(Z,Math.sqrt(q/G)),Q=[(de[0]+Se[0])/2,(de[1]+Se[1])/2],ee=[(oe[0]+he[0])/2,(oe[1]+he[1])/2]}else if(C.touch0)Q=C.touch0[0],ee=C.touch0[1];else return;C.zoom("touch",n(A(Z,Q,ee),C.extent,a))}}function M(w,...E){if(this.__zooming){var C=I(this,E).event(w),z=w.changedTouches,K=z.length,B,Z;for(nc(w),p&&clearTimeout(p),p=setTimeout(function(){p=null},h),B=0;B<K;++B)Z=z[B],C.touch0&&C.touch0[2]===Z.identifier?delete C.touch0:C.touch1&&C.touch1[2]===Z.identifier&&delete C.touch1;if(C.touch1&&!C.touch0&&(C.touch0=C.touch1,delete C.touch1),C.touch0)C.touch0[1]=this.__zoom.invert(C.touch0[0]);else if(C.end(),C.taps===2&&(Z=pn(Z,this),Math.hypot(f[0]-Z[0],f[1]-Z[1])<b)){var Q=jt(this).on("dblclick.zoom");Q&&Q.apply(this,arguments)}}}return x.wheelDelta=function(w){return arguments.length?(s=typeof w=="function"?w:Nr(+w),x):s},x.filter=function(w){return arguments.length?(e=typeof w=="function"?w:Nr(!!w),x):e},x.touchable=function(w){return arguments.length?(i=typeof w=="function"?w:Nr(!!w),x):i},x.extent=function(w){return arguments.length?(t=typeof w=="function"?w:Nr([[+w[0][0],+w[0][1]],[+w[1][0],+w[1][1]]]),x):t},x.scaleExtent=function(w){return arguments.length?(o[0]=+w[0],o[1]=+w[1],x):[o[0],o[1]]},x.translateExtent=function(w){return arguments.length?(a[0][0]=+w[0][0],a[1][0]=+w[1][0],a[0][1]=+w[0][1],a[1][1]=+w[1][1],x):[[a[0][0],a[0][1]],[a[1][0],a[1][1]]]},x.constrain=function(w){return arguments.length?(n=w,x):n},x.duration=function(w){return arguments.length?(r=+w,x):r},x.interpolate=function(w){return arguments.length?(c=w,x):c},x.on=function(){var w=d.on.apply(d,arguments);return w===d?x:w},x.clickDistance=function(w){return arguments.length?(v=(w=+w)*w,x):Math.sqrt(v)},x.tapDistance=function(w){return arguments.length?(b=+w,x):b},x}const lr={error001:()=>"[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The React Flow parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:t,sourceHandle:n,targetHandle:s})=>`Couldn't create edge for ${e} handle id: "${e==="source"?n:s}", edge id: ${t}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs."},Nc=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],Wf=["Enter"," ","Escape"],tx={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:e,x:t,y:n})=>`Moved selected node ${e}. New position, x: ${t}, y: ${n}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"};var da;(function(e){e.Strict="strict",e.Loose="loose"})(da||(da={}));var aa;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(aa||(aa={}));var dl;(function(e){e.Partial="partial",e.Full="full"})(dl||(dl={}));const Pc={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null};var Un;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(Un||(Un={}));var ul;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(ul||(ul={}));var ke;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(ke||(ke={}));const ku={[ke.Left]:ke.Right,[ke.Right]:ke.Left,[ke.Top]:ke.Bottom,[ke.Bottom]:ke.Top};function nx(e,t){if(!e&&!t)return!0;if(!e||!t||e.size!==t.size)return!1;if(!e.size&&!t.size)return!0;for(const n of e.keys())if(!t.has(n))return!1;return!0}function Su(e,t,n){if(!n)return;const s=[];e.forEach((i,o)=>{t?.has(o)||s.push(i)}),s.length&&n(s)}function sx(e){return e===null?null:e?"valid":"invalid"}const Kf=e=>"id"in e&&"source"in e&&"target"in e,ix=e=>"id"in e&&"position"in e&&!("source"in e)&&!("target"in e),pd=e=>"id"in e&&"internals"in e&&!("source"in e)&&!("target"in e),gr=(e,t=[0,0])=>{const{width:n,height:s}=Ns(e),i=e.origin??t,o=n*i[0],a=s*i[1];return{x:e.position.x-o,y:e.position.y-a}},ox=(e,t={nodeOrigin:[0,0]})=>{if(e.length===0)return{x:0,y:0,width:0,height:0};const n=e.reduce((s,i)=>{const o=typeof i=="string";let a=!t.nodeLookup&&!o?i:void 0;t.nodeLookup&&(a=o?t.nodeLookup.get(i):pd(i)?i:t.nodeLookup.get(i.id));const r=a?pl(a,t.nodeOrigin):{x:0,y:0,x2:0,y2:0};return Rl(s,r)},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return Ll(n)},Ol=(e,t={})=>{let n={x:1/0,y:1/0,x2:-1/0,y2:-1/0},s=!1;return e.forEach(i=>{(t.filter===void 0||t.filter(i))&&(n=Rl(n,pl(i)),s=!0)}),s?Ll(n):{x:0,y:0,width:0,height:0}},fd=(e,t,[n,s,i]=[0,0,1],o=!1,a=!1)=>{const r={...yr(t,[n,s,i]),width:t.width/i,height:t.height/i},c=[];for(const d of e.values()){const{measured:u,selectable:f=!0,hidden:p=!1}=d;if(a&&!f||p)continue;const h=u.width??d.width??d.initialWidth??null,g=u.height??d.height??d.initialHeight??null,v=cr(r,pa(d)),b=(h??0)*(g??0),x=o&&v>0;(!d.internals.handleBounds||x||v>=b||d.dragging)&&c.push(d)}return c},ax=(e,t)=>{const n=new Set;return e.forEach(s=>{n.add(s.id)}),t.filter(s=>n.has(s.source)||n.has(s.target))};function rx(e,t){const n=new Map,s=t?.nodes?new Set(t.nodes.map(i=>i.id)):null;return e.forEach(i=>{i.measured.width&&i.measured.height&&(t?.includeHiddenNodes||!i.hidden)&&(!s||s.has(i.id))&&n.set(i.id,i)}),n}async function lx({nodes:e,width:t,height:n,panZoom:s,minZoom:i,maxZoom:o},a){if(e.size===0)return Promise.resolve(!0);const r=rx(e,a),c=Ol(r),d=hd(c,t,n,a?.minZoom??i,a?.maxZoom??o,a?.padding??.1);return await s.setViewport(d,{duration:a?.duration,ease:a?.ease,interpolate:a?.interpolate}),Promise.resolve(!0)}function Gf({nodeId:e,nextPosition:t,nodeLookup:n,nodeOrigin:s=[0,0],nodeExtent:i,onError:o}){const a=n.get(e),r=a.parentId?n.get(a.parentId):void 0,{x:c,y:d}=r?r.internals.positionAbsolute:{x:0,y:0},u=a.origin??s;let f=a.extent||i;if(a.extent==="parent"&&!a.expandParent)if(!r)o?.("005",lr.error005());else{const h=r.measured.width,g=r.measured.height;h&&g&&(f=[[c,d],[c+h,d+g]])}else r&&fa(a.extent)&&(f=[[a.extent[0][0]+c,a.extent[0][1]+d],[a.extent[1][0]+c,a.extent[1][1]+d]]);const p=fa(f)?xs(t,f,a.measured):t;return(a.measured.width===void 0||a.measured.height===void 0)&&o?.("015",lr.error015()),{position:{x:p.x-c+(a.measured.width??0)*u[0],y:p.y-d+(a.measured.height??0)*u[1]},positionAbsolute:p}}async function cx({nodesToRemove:e=[],edgesToRemove:t=[],nodes:n,edges:s,onBeforeDelete:i}){const o=new Set(e.map(p=>p.id)),a=[];for(const p of n){if(p.deletable===!1)continue;const h=o.has(p.id),g=!h&&p.parentId&&a.find(v=>v.id===p.parentId);(h||g)&&a.push(p)}const r=new Set(t.map(p=>p.id)),c=s.filter(p=>p.deletable!==!1),u=ax(a,c);for(const p of c)r.has(p.id)&&!u.find(g=>g.id===p.id)&&u.push(p);if(!i)return{edges:u,nodes:a};const f=await i({nodes:a,edges:u});return typeof f=="boolean"?f?{edges:u,nodes:a}:{edges:[],nodes:[]}:f}const ua=(e,t=0,n=1)=>Math.min(Math.max(e,t),n),xs=(e={x:0,y:0},t,n)=>({x:ua(e.x,t[0][0],t[1][0]-(n?.width??0)),y:ua(e.y,t[0][1],t[1][1]-(n?.height??0))});function jf(e,t,n){const{width:s,height:i}=Ns(n),{x:o,y:a}=n.internals.positionAbsolute;return xs(e,[[o,a],[o+s,a+i]],t)}const Iu=(e,t,n)=>e<t?ua(Math.abs(e-t),1,t)/t:e>n?-ua(Math.abs(e-n),1,t)/t:0,Yf=(e,t,n=15,s=40)=>{const i=Iu(e.x,s,t.width-s)*n,o=Iu(e.y,s,t.height-s)*n;return[i,o]},Rl=(e,t)=>({x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),x2:Math.max(e.x2,t.x2),y2:Math.max(e.y2,t.y2)}),Mc=({x:e,y:t,width:n,height:s})=>({x:e,y:t,x2:e+n,y2:t+s}),Ll=({x:e,y:t,x2:n,y2:s})=>({x:e,y:t,width:n-e,height:s-t}),pa=(e,t=[0,0])=>{const{x:n,y:s}=pd(e)?e.internals.positionAbsolute:gr(e,t);return{x:n,y:s,width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}},pl=(e,t=[0,0])=>{const{x:n,y:s}=pd(e)?e.internals.positionAbsolute:gr(e,t);return{x:n,y:s,x2:n+(e.measured?.width??e.width??e.initialWidth??0),y2:s+(e.measured?.height??e.height??e.initialHeight??0)}},dx=(e,t)=>Ll(Rl(Mc(e),Mc(t))),cr=(e,t)=>{const n=Math.max(0,Math.min(e.x+e.width,t.x+t.width)-Math.max(e.x,t.x)),s=Math.max(0,Math.min(e.y+e.height,t.y+t.height)-Math.max(e.y,t.y));return Math.ceil(n*s)},Eu=e=>Cn(e.width)&&Cn(e.height)&&Cn(e.x)&&Cn(e.y),Cn=e=>!isNaN(e)&&isFinite(e),ux=(e,t)=>{},vr=(e,t=[1,1])=>({x:t[0]*Math.round(e.x/t[0]),y:t[1]*Math.round(e.y/t[1])}),yr=({x:e,y:t},[n,s,i],o=!1,a=[1,1])=>{const r={x:(e-n)/i,y:(t-s)/i};return o?vr(r,a):r},fl=({x:e,y:t},[n,s,i])=>({x:e*i+n,y:t*i+s});function Xo(e,t){if(typeof e=="number")return Math.floor((t-t/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){const n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(n)}if(typeof e=="string"&&e.endsWith("%")){const n=parseFloat(e);if(!Number.isNaN(n))return Math.floor(t*n*.01)}return console.error(`[React Flow] The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function px(e,t,n){if(typeof e=="string"||typeof e=="number"){const s=Xo(e,n),i=Xo(e,t);return{top:s,right:i,bottom:s,left:i,x:i*2,y:s*2}}if(typeof e=="object"){const s=Xo(e.top??e.y??0,n),i=Xo(e.bottom??e.y??0,n),o=Xo(e.left??e.x??0,t),a=Xo(e.right??e.x??0,t);return{top:s,right:a,bottom:i,left:o,x:o+a,y:s+i}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function fx(e,t,n,s,i,o){const{x:a,y:r}=fl(e,[t,n,s]),{x:c,y:d}=fl({x:e.x+e.width,y:e.y+e.height},[t,n,s]),u=i-c,f=o-d;return{left:Math.floor(a),top:Math.floor(r),right:Math.floor(u),bottom:Math.floor(f)}}const hd=(e,t,n,s,i,o)=>{const a=px(o,t,n),r=(t-a.x)/e.width,c=(n-a.y)/e.height,d=Math.min(r,c),u=ua(d,s,i),f=e.x+e.width/2,p=e.y+e.height/2,h=t/2-f*u,g=n/2-p*u,v=fx(e,h,g,u,t,n),b={left:Math.min(v.left-a.left,0),top:Math.min(v.top-a.top,0),right:Math.min(v.right-a.right,0),bottom:Math.min(v.bottom-a.bottom,0)};return{x:h-b.left+b.right,y:g-b.top+b.bottom,zoom:u}},hl=()=>typeof navigator<"u"&&navigator?.userAgent?.indexOf("Mac")>=0;function fa(e){return e!=null&&e!=="parent"}function Ns(e){return{width:e.measured?.width??e.width??e.initialWidth??0,height:e.measured?.height??e.height??e.initialHeight??0}}function hx(e){return(e.measured?.width??e.width??e.initialWidth)!==void 0&&(e.measured?.height??e.height??e.initialHeight)!==void 0}function mx(e,t={width:0,height:0},n,s,i){const o={...e},a=s.get(n);if(a){const r=a.origin||i;o.x+=a.internals.positionAbsolute.x-(t.width??0)*r[0],o.y+=a.internals.positionAbsolute.y-(t.height??0)*r[1]}return o}function gx(e){return{...tx,...e||{}}}function Ja(e,{snapGrid:t=[0,0],snapToGrid:n=!1,transform:s,containerBounds:i}){const{x:o,y:a}=en(e),r=yr({x:o-(i?.left??0),y:a-(i?.top??0)},s),{x:c,y:d}=n?vr(r,t):r;return{xSnapped:c,ySnapped:d,...r}}const Xf=e=>({width:e.offsetWidth,height:e.offsetHeight}),Uf=e=>e?.getRootNode?.()||window?.document,vx=["INPUT","SELECT","TEXTAREA"];function Zf(e){const t=e.composedPath?.()?.[0]||e.target;return t?.nodeType!==1?!1:vx.includes(t.nodeName)||t.hasAttribute("contenteditable")||!!t.closest(".nokey")}const Jf=e=>"clientX"in e,en=(e,t)=>{const n=Jf(e),s=n?e.clientX:e.touches?.[0].clientX,i=n?e.clientY:e.touches?.[0].clientY;return{x:s-(t?.left??0),y:i-(t?.top??0)}},Tu=(e,t,n,s,i)=>{const o=t.querySelectorAll(`.${e}`);return!o||!o.length?null:Array.from(o).map(a=>{const r=a.getBoundingClientRect();return{id:a.getAttribute("data-handleid"),type:e,nodeId:i,position:a.getAttribute("data-handlepos"),x:(r.left-n.left)/s,y:(r.top-n.top)/s,...Xf(a)}})};function yx({sourceX:e,sourceY:t,targetX:n,targetY:s,sourceControlX:i,sourceControlY:o,targetControlX:a,targetControlY:r}){const c=e*.125+i*.375+a*.375+n*.125,d=t*.125+o*.375+r*.375+s*.125,u=Math.abs(c-e),f=Math.abs(d-t);return[c,d,u,f]}function Pr(e,t){return e>=0?.5*e:t*25*Math.sqrt(-e)}function Cu({pos:e,x1:t,y1:n,x2:s,y2:i,c:o}){switch(e){case ke.Left:return[t-Pr(t-s,o),n];case ke.Right:return[t+Pr(s-t,o),n];case ke.Top:return[t,n-Pr(n-i,o)];case ke.Bottom:return[t,n+Pr(i-n,o)]}}function Qf({sourceX:e,sourceY:t,sourcePosition:n=ke.Bottom,targetX:s,targetY:i,targetPosition:o=ke.Top,curvature:a=.25}){const[r,c]=Cu({pos:n,x1:e,y1:t,x2:s,y2:i,c:a}),[d,u]=Cu({pos:o,x1:s,y1:i,x2:e,y2:t,c:a}),[f,p,h,g]=yx({sourceX:e,sourceY:t,targetX:s,targetY:i,sourceControlX:r,sourceControlY:c,targetControlX:d,targetControlY:u});return[`M${e},${t} C${r},${c} ${d},${u} ${s},${i}`,f,p,h,g]}function $f({sourceX:e,sourceY:t,targetX:n,targetY:s}){const i=Math.abs(n-e)/2,o=n<e?n+i:n-i,a=Math.abs(s-t)/2,r=s<t?s+a:s-a;return[o,r,i,a]}function bx({sourceNode:e,targetNode:t,selected:n=!1,zIndex:s=0,elevateOnSelect:i=!1,zIndexMode:o="basic"}){if(o==="manual")return s;const a=i&&n?s+1e3:s,r=Math.max(e.parentId||i&&e.selected?e.internals.z:0,t.parentId||i&&t.selected?t.internals.z:0);return a+r}function wx({sourceNode:e,targetNode:t,width:n,height:s,transform:i}){const o=Rl(pl(e),pl(t));o.x===o.x2&&(o.x2+=1),o.y===o.y2&&(o.y2+=1);const a={x:-i[0]/i[2],y:-i[1]/i[2],width:n/i[2],height:s/i[2]};return cr(a,Ll(o))>0}const _x=({source:e,sourceHandle:t,target:n,targetHandle:s})=>`xy-edge__${e}${t||""}-${n}${s||""}`,xx=(e,t)=>t.some(n=>n.source===e.source&&n.target===e.target&&(n.sourceHandle===e.sourceHandle||!n.sourceHandle&&!e.sourceHandle)&&(n.targetHandle===e.targetHandle||!n.targetHandle&&!e.targetHandle)),kx=(e,t,n={})=>{if(!e.source||!e.target)return t;const s=n.getEdgeId||_x;let i;return Kf(e)?i={...e}:i={...e,id:s(e)},xx(i,t)?t:(i.sourceHandle===null&&delete i.sourceHandle,i.targetHandle===null&&delete i.targetHandle,t.concat(i))};function eh({sourceX:e,sourceY:t,targetX:n,targetY:s}){const[i,o,a,r]=$f({sourceX:e,sourceY:t,targetX:n,targetY:s});return[`M ${e},${t}L ${n},${s}`,i,o,a,r]}const Nu={[ke.Left]:{x:-1,y:0},[ke.Right]:{x:1,y:0},[ke.Top]:{x:0,y:-1},[ke.Bottom]:{x:0,y:1}},Sx=({source:e,sourcePosition:t=ke.Bottom,target:n})=>t===ke.Left||t===ke.Right?e.x<n.x?{x:1,y:0}:{x:-1,y:0}:e.y<n.y?{x:0,y:1}:{x:0,y:-1},Pu=(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));function Ix({source:e,sourcePosition:t=ke.Bottom,target:n,targetPosition:s=ke.Top,center:i,offset:o,stepPosition:a}){const r=Nu[t],c=Nu[s],d={x:e.x+r.x*o,y:e.y+r.y*o},u={x:n.x+c.x*o,y:n.y+c.y*o},f=Sx({source:d,sourcePosition:t,target:u}),p=f.x!==0?"x":"y",h=f[p];let g=[],v,b;const x={x:0,y:0},S={x:0,y:0},[,,A,m]=$f({sourceX:e.x,sourceY:e.y,targetX:n.x,targetY:n.y});if(r[p]*c[p]===-1){p==="x"?(v=i.x??d.x+(u.x-d.x)*a,b=i.y??(d.y+u.y)/2):(v=i.x??(d.x+u.x)/2,b=i.y??d.y+(u.y-d.y)*a);const I=[{x:v,y:d.y},{x:v,y:u.y}],P=[{x:d.x,y:b},{x:u.x,y:b}];r[p]===h?g=p==="x"?I:P:g=p==="x"?P:I}else{const I=[{x:d.x,y:u.y}],P=[{x:u.x,y:d.y}];if(p==="x"?g=r.x===h?P:I:g=r.y===h?I:P,t===s){const T=Math.abs(e[p]-n[p]);if(T<=o){const M=Math.min(o-1,o-T);r[p]===h?x[p]=(d[p]>e[p]?-1:1)*M:S[p]=(u[p]>n[p]?-1:1)*M}}if(t!==s){const T=p==="x"?"y":"x",M=r[p]===c[T],w=d[T]>u[T],E=d[T]<u[T];(r[p]===1&&(!M&&w||M&&E)||r[p]!==1&&(!M&&E||M&&w))&&(g=p==="x"?I:P)}const N={x:d.x+x.x,y:d.y+x.y},L={x:u.x+S.x,y:u.y+S.y},W=Math.max(Math.abs(N.x-g[0].x),Math.abs(L.x-g[0].x)),O=Math.max(Math.abs(N.y-g[0].y),Math.abs(L.y-g[0].y));W>=O?(v=(N.x+L.x)/2,b=g[0].y):(v=g[0].x,b=(N.y+L.y)/2)}return[[e,{x:d.x+x.x,y:d.y+x.y},...g,{x:u.x+S.x,y:u.y+S.y},n],v,b,A,m]}function Ex(e,t,n,s){const i=Math.min(Pu(e,t)/2,Pu(t,n)/2,s),{x:o,y:a}=t;if(e.x===o&&o===n.x||e.y===a&&a===n.y)return`L${o} ${a}`;if(e.y===a){const d=e.x<n.x?-1:1,u=e.y<n.y?1:-1;return`L ${o+i*d},${a}Q ${o},${a} ${o},${a+i*u}`}const r=e.x<n.x?1:-1,c=e.y<n.y?-1:1;return`L ${o},${a+i*c}Q ${o},${a} ${o+i*r},${a}`}function zl({sourceX:e,sourceY:t,sourcePosition:n=ke.Bottom,targetX:s,targetY:i,targetPosition:o=ke.Top,borderRadius:a=5,centerX:r,centerY:c,offset:d=20,stepPosition:u=.5}){const[f,p,h,g,v]=Ix({source:{x:e,y:t},sourcePosition:n,target:{x:s,y:i},targetPosition:o,center:{x:r,y:c},offset:d,stepPosition:u});return[f.reduce((x,S,A)=>{let m="";return A>0&&A<f.length-1?m=Ex(f[A-1],S,f[A+1],a):m=`${A===0?"M":"L"}${S.x} ${S.y}`,x+=m,x},""),p,h,g,v]}function Mu(e){return e&&!!(e.internals.handleBounds||e.handles?.length)&&!!(e.measured.width||e.width||e.initialWidth)}function Tx(e){const{sourceNode:t,targetNode:n}=e;if(!Mu(t)||!Mu(n))return null;const s=t.internals.handleBounds||Au(t.handles),i=n.internals.handleBounds||Au(n.handles),o=Du(s?.source??[],e.sourceHandle),a=Du(e.connectionMode===da.Strict?i?.target??[]:(i?.target??[]).concat(i?.source??[]),e.targetHandle);if(!o||!a)return e.onError?.("008",lr.error008(o?"target":"source",{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;const r=o?.position||ke.Bottom,c=a?.position||ke.Top,d=ks(t,o,r),u=ks(n,a,c);return{sourceX:d.x,sourceY:d.y,targetX:u.x,targetY:u.y,sourcePosition:r,targetPosition:c}}function Au(e){if(!e)return null;const t=[],n=[];for(const s of e)s.width=s.width??1,s.height=s.height??1,s.type==="source"?t.push(s):s.type==="target"&&n.push(s);return{source:t,target:n}}function ks(e,t,n=ke.Left,s=!1){const i=(t?.x??0)+e.internals.positionAbsolute.x,o=(t?.y??0)+e.internals.positionAbsolute.y,{width:a,height:r}=t??Ns(e);if(s)return{x:i+a/2,y:o+r/2};switch(t?.position??n){case ke.Top:return{x:i+a/2,y:o};case ke.Right:return{x:i+a,y:o+r/2};case ke.Bottom:return{x:i+a/2,y:o+r};case ke.Left:return{x:i,y:o+r/2}}}function Du(e,t){return e&&(t?e.find(n=>n.id===t):e[0])||null}function Ac(e,t){return e?typeof e=="string"?e:`${t?`${t}__`:""}${Object.keys(e).sort().map(s=>`${s}=${e[s]}`).join("&")}`:""}function Cx(e,{id:t,defaultColor:n,defaultMarkerStart:s,defaultMarkerEnd:i}){const o=new Set;return e.reduce((a,r)=>([r.markerStart||s,r.markerEnd||i].forEach(c=>{if(c&&typeof c=="object"){const d=Ac(c,t);o.has(d)||(a.push({id:d,color:c.color||n,...c}),o.add(d))}}),a),[]).sort((a,r)=>a.id.localeCompare(r.id))}const th=1e3,Nx=10,md={nodeOrigin:[0,0],nodeExtent:Nc,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},Px={...md,checkEquality:!0};function gd(e,t){const n={...e};for(const s in t)t[s]!==void 0&&(n[s]=t[s]);return n}function Mx(e,t,n){const s=gd(md,n);for(const i of e.values())if(i.parentId)yd(i,e,t,s);else{const o=gr(i,s.nodeOrigin),a=fa(i.extent)?i.extent:s.nodeExtent,r=xs(o,a,Ns(i));i.internals.positionAbsolute=r}}function Ax(e,t){if(!e.handles)return e.measured?t?.internals.handleBounds:void 0;const n=[],s=[];for(const i of e.handles){const o={id:i.id,width:i.width??1,height:i.height??1,nodeId:e.id,x:i.x,y:i.y,position:i.position,type:i.type};i.type==="source"?n.push(o):i.type==="target"&&s.push(o)}return{source:n,target:s}}function vd(e){return e==="manual"}function Dx(e,t,n,s={}){const i=gd(Px,s),o={i:0},a=new Map(t),r=i?.elevateNodesOnSelect&&!vd(i.zIndexMode)?th:0;let c=e.length>0;t.clear(),n.clear();for(const d of e){let u=a.get(d.id);if(i.checkEquality&&d===u?.internals.userNode)t.set(d.id,u);else{const f=gr(d,i.nodeOrigin),p=fa(d.extent)?d.extent:i.nodeExtent,h=xs(f,p,Ns(d));u={...i.defaults,...d,measured:{width:d.measured?.width,height:d.measured?.height},internals:{positionAbsolute:h,handleBounds:Ax(d,u),z:nh(d,r,i.zIndexMode),userNode:d}},t.set(d.id,u)}(u.measured===void 0||u.measured.width===void 0||u.measured.height===void 0)&&!u.hidden&&(c=!1),d.parentId&&yd(u,t,n,s,o)}return c}function Ox(e,t){if(!e.parentId)return;const n=t.get(e.parentId);n?n.set(e.id,e):t.set(e.parentId,new Map([[e.id,e]]))}function yd(e,t,n,s,i){const{elevateNodesOnSelect:o,nodeOrigin:a,nodeExtent:r,zIndexMode:c}=gd(md,s),d=e.parentId,u=t.get(d);if(!u){console.warn(`Parent node ${d} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}Ox(e,n),i&&!u.parentId&&u.internals.rootParentIndex===void 0&&c==="auto"&&(u.internals.rootParentIndex=++i.i,u.internals.z=u.internals.z+i.i*Nx),i&&u.internals.rootParentIndex!==void 0&&(i.i=u.internals.rootParentIndex);const f=o&&!vd(c)?th:0,{x:p,y:h,z:g}=Rx(e,u,a,r,f,c),{positionAbsolute:v}=e.internals,b=p!==v.x||h!==v.y;(b||g!==e.internals.z)&&t.set(e.id,{...e,internals:{...e.internals,positionAbsolute:b?{x:p,y:h}:v,z:g}})}function nh(e,t,n){const s=Cn(e.zIndex)?e.zIndex:0;return vd(n)?s:s+(e.selected?t:0)}function Rx(e,t,n,s,i,o){const{x:a,y:r}=t.internals.positionAbsolute,c=Ns(e),d=gr(e,n),u=fa(e.extent)?xs(d,e.extent,c):d;let f=xs({x:a+u.x,y:r+u.y},s,c);e.extent==="parent"&&(f=jf(f,c,t));const p=nh(e,i,o),h=t.internals.z??0;return{x:f.x,y:f.y,z:h>=p?h+1:p}}function Lx(e,t,n,s=[0,0]){const i=[],o=new Map;for(const a of e){const r=t.get(a.parentId);if(!r)continue;const c=o.get(a.parentId)?.expandedRect??pa(r),d=dx(c,a.rect);o.set(a.parentId,{expandedRect:d,parent:r})}return o.size>0&&o.forEach(({expandedRect:a,parent:r},c)=>{const d=r.internals.positionAbsolute,u=Ns(r),f=r.origin??s,p=a.x<d.x?Math.round(Math.abs(d.x-a.x)):0,h=a.y<d.y?Math.round(Math.abs(d.y-a.y)):0,g=Math.max(u.width,Math.round(a.width)),v=Math.max(u.height,Math.round(a.height)),b=(g-u.width)*f[0],x=(v-u.height)*f[1];(p>0||h>0||b||x)&&(i.push({id:c,type:"position",position:{x:r.position.x-p+b,y:r.position.y-h+x}}),n.get(c)?.forEach(S=>{e.some(A=>A.id===S.id)||i.push({id:S.id,type:"position",position:{x:S.position.x+p,y:S.position.y+h}})})),(u.width<a.width||u.height<a.height||p||h)&&i.push({id:c,type:"dimensions",setAttributes:!0,dimensions:{width:g+(p?f[0]*p-b:0),height:v+(h?f[1]*h-x:0)}})}),i}function zx(e,t,n,s,i,o,a){const r=s?.querySelector(".xyflow__viewport");let c=!1;if(!r)return{changes:[],updatedInternals:c};const d=[],u=window.getComputedStyle(r),{m22:f}=new window.DOMMatrixReadOnly(u.transform),p=[];for(const h of e.values()){const g=t.get(h.id);if(!g)continue;if(g.hidden){t.set(g.id,{...g,internals:{...g.internals,handleBounds:void 0}}),c=!0;continue}const v=Xf(h.nodeElement),b=g.measured.width!==v.width||g.measured.height!==v.height;if(!!(v.width&&v.height&&(b||!g.internals.handleBounds||h.force))){const S=h.nodeElement.getBoundingClientRect(),A=fa(g.extent)?g.extent:o;let{positionAbsolute:m}=g.internals;g.parentId&&g.extent==="parent"?m=jf(m,v,t.get(g.parentId)):A&&(m=xs(m,A,v));const D={...g,measured:v,internals:{...g.internals,positionAbsolute:m,handleBounds:{source:Tu("source",h.nodeElement,S,f,g.id),target:Tu("target",h.nodeElement,S,f,g.id)}}};t.set(g.id,D),g.parentId&&yd(D,t,n,{nodeOrigin:i,zIndexMode:a}),c=!0,b&&(d.push({id:g.id,type:"dimensions",dimensions:v}),g.expandParent&&g.parentId&&p.push({id:g.id,parentId:g.parentId,rect:pa(D,i)}))}}if(p.length>0){const h=Lx(p,t,n,i);d.push(...h)}return{changes:d,updatedInternals:c}}async function Hx({delta:e,panZoom:t,transform:n,translateExtent:s,width:i,height:o}){if(!t||!e.x&&!e.y)return Promise.resolve(!1);const a=await t.setViewportConstrained({x:n[0]+e.x,y:n[1]+e.y,zoom:n[2]},[[0,0],[i,o]],s),r=!!a&&(a.x!==n[0]||a.y!==n[1]||a.k!==n[2]);return Promise.resolve(r)}function Ou(e,t,n,s,i,o){let a=i;const r=s.get(a)||new Map;s.set(a,r.set(n,t)),a=`${i}-${e}`;const c=s.get(a)||new Map;if(s.set(a,c.set(n,t)),o){a=`${i}-${e}-${o}`;const d=s.get(a)||new Map;s.set(a,d.set(n,t))}}function Fx(e,t,n){e.clear(),t.clear();for(const s of n){const{source:i,target:o,sourceHandle:a=null,targetHandle:r=null}=s,c={edgeId:s.id,source:i,target:o,sourceHandle:a,targetHandle:r},d=`${i}-${a}--${o}-${r}`,u=`${o}-${r}--${i}-${a}`;Ou("source",c,u,e,i,a),Ou("target",c,d,e,o,r),t.set(s.id,s)}}function sh(e,t){if(!e.parentId)return!1;const n=t.get(e.parentId);return n?n.selected?!0:sh(n,t):!1}function Ru(e,t,n){let s=e;do{if(s?.matches?.(t))return!0;if(s===n)return!1;s=s?.parentElement}while(s);return!1}function Bx(e,t,n,s){const i=new Map;for(const[o,a]of e)if((a.selected||a.id===s)&&(!a.parentId||!sh(a,e))&&(a.draggable||t&&typeof a.draggable>"u")){const r=e.get(o);r&&i.set(o,{id:o,position:r.position||{x:0,y:0},distance:{x:n.x-r.internals.positionAbsolute.x,y:n.y-r.internals.positionAbsolute.y},extent:r.extent,parentId:r.parentId,origin:r.origin,expandParent:r.expandParent,internals:{positionAbsolute:r.internals.positionAbsolute||{x:0,y:0}},measured:{width:r.measured.width??0,height:r.measured.height??0}})}return i}function sc({nodeId:e,dragItems:t,nodeLookup:n,dragging:s=!0}){const i=[];for(const[a,r]of t){const c=n.get(a)?.internals.userNode;c&&i.push({...c,position:r.position,dragging:s})}if(!e)return[i[0],i];const o=n.get(e)?.internals.userNode;return[o?{...o,position:t.get(e)?.position||o.position,dragging:s}:i[0],i]}function qx({dragItems:e,snapGrid:t,x:n,y:s}){const i=e.values().next().value;if(!i)return null;const o={x:n-i.distance.x,y:s-i.distance.y},a=vr(o,t);return{x:a.x-o.x,y:a.y-o.y}}function Vx({onNodeMouseDown:e,getStoreItems:t,onDragStart:n,onDrag:s,onDragStop:i}){let o={x:null,y:null},a=0,r=new Map,c=!1,d={x:0,y:0},u=null,f=!1,p=null,h=!1,g=!1,v=null;function b({noDragClassName:S,handleSelector:A,domNode:m,isSelectable:D,nodeId:I,nodeClickDistance:P=0}){p=jt(m);function N({x:T,y:M}){const{nodeLookup:w,nodeExtent:E,snapGrid:C,snapToGrid:z,nodeOrigin:K,onNodeDrag:B,onSelectionDrag:Z,onError:Q,updateNodePositions:ee}=t();o={x:T,y:M};let de=!1;const oe=r.size>1,Se=oe&&E?Mc(Ol(r)):null,he=oe&&z?qx({dragItems:r,snapGrid:C,x:T,y:M}):null;for(const[q,G]of r){if(!w.has(q))continue;let se={x:T-G.distance.x,y:M-G.distance.y};z&&(se=he?{x:Math.round(se.x+he.x),y:Math.round(se.y+he.y)}:vr(se,C));let we=null;if(oe&&E&&!G.extent&&Se){const{positionAbsolute:pe}=G.internals,Ee=pe.x-Se.x+E[0][0],_e=pe.x+G.measured.width-Se.x2+E[1][0],xe=pe.y-Se.y+E[0][1],Ce=pe.y+G.measured.height-Se.y2+E[1][1];we=[[Ee,xe],[_e,Ce]]}const{position:ie,positionAbsolute:me}=Gf({nodeId:q,nextPosition:se,nodeLookup:w,nodeExtent:we||E,nodeOrigin:K,onError:Q});de=de||G.position.x!==ie.x||G.position.y!==ie.y,G.position=ie,G.internals.positionAbsolute=me}if(g=g||de,!!de&&(ee(r,!0),v&&(s||B||!I&&Z))){const[q,G]=sc({nodeId:I,dragItems:r,nodeLookup:w});s?.(v,r,q,G),B?.(v,q,G),I||Z?.(v,G)}}async function L(){if(!u)return;const{transform:T,panBy:M,autoPanSpeed:w,autoPanOnNodeDrag:E}=t();if(!E){c=!1,cancelAnimationFrame(a);return}const[C,z]=Yf(d,u,w);(C!==0||z!==0)&&(o.x=(o.x??0)-C/T[2],o.y=(o.y??0)-z/T[2],await M({x:C,y:z})&&N(o)),a=requestAnimationFrame(L)}function W(T){const{nodeLookup:M,multiSelectionActive:w,nodesDraggable:E,transform:C,snapGrid:z,snapToGrid:K,selectNodesOnDrag:B,onNodeDragStart:Z,onSelectionDragStart:Q,unselectNodesAndEdges:ee}=t();f=!0,(!B||!D)&&!w&&I&&(M.get(I)?.selected||ee()),D&&B&&I&&e?.(I);const de=Ja(T.sourceEvent,{transform:C,snapGrid:z,snapToGrid:K,containerBounds:u});if(o=de,r=Bx(M,E,de,I),r.size>0&&(n||Z||!I&&Q)){const[oe,Se]=sc({nodeId:I,dragItems:r,nodeLookup:M});n?.(T.sourceEvent,r,oe,Se),Z?.(T.sourceEvent,oe,Se),I||Q?.(T.sourceEvent,Se)}}const O=Cf().clickDistance(P).on("start",T=>{const{domNode:M,nodeDragThreshold:w,transform:E,snapGrid:C,snapToGrid:z}=t();u=M?.getBoundingClientRect()||null,h=!1,g=!1,v=T.sourceEvent,w===0&&W(T),o=Ja(T.sourceEvent,{transform:E,snapGrid:C,snapToGrid:z,containerBounds:u}),d=en(T.sourceEvent,u)}).on("drag",T=>{const{autoPanOnNodeDrag:M,transform:w,snapGrid:E,snapToGrid:C,nodeDragThreshold:z,nodeLookup:K}=t(),B=Ja(T.sourceEvent,{transform:w,snapGrid:E,snapToGrid:C,containerBounds:u});if(v=T.sourceEvent,(T.sourceEvent.type==="touchmove"&&T.sourceEvent.touches.length>1||I&&!K.has(I))&&(h=!0),!h){if(!c&&M&&f&&(c=!0,L()),!f){const Z=en(T.sourceEvent,u),Q=Z.x-d.x,ee=Z.y-d.y;Math.sqrt(Q*Q+ee*ee)>z&&W(T)}(o.x!==B.xSnapped||o.y!==B.ySnapped)&&r&&f&&(d=en(T.sourceEvent,u),N(B))}}).on("end",T=>{if(!(!f||h)&&(c=!1,f=!1,cancelAnimationFrame(a),r.size>0)){const{nodeLookup:M,updateNodePositions:w,onNodeDragStop:E,onSelectionDragStop:C}=t();if(g&&(w(r,!1),g=!1),i||E||!I&&C){const[z,K]=sc({nodeId:I,dragItems:r,nodeLookup:M,dragging:!1});i?.(T.sourceEvent,r,z,K),E?.(T.sourceEvent,z,K),I||C?.(T.sourceEvent,K)}}}).filter(T=>{const M=T.target;return!T.button&&(!S||!Ru(M,`.${S}`,m))&&(!A||Ru(M,A,m))});p.call(O)}function x(){p?.on(".drag",null)}return{update:b,destroy:x}}function Wx(e,t,n){const s=[],i={x:e.x-n,y:e.y-n,width:n*2,height:n*2};for(const o of t.values())cr(i,pa(o))>0&&s.push(o);return s}const Kx=250;function Gx(e,t,n,s){let i=[],o=1/0;const a=Wx(e,n,t+Kx);for(const r of a){const c=[...r.internals.handleBounds?.source??[],...r.internals.handleBounds?.target??[]];for(const d of c){if(s.nodeId===d.nodeId&&s.type===d.type&&s.id===d.id)continue;const{x:u,y:f}=ks(r,d,d.position,!0),p=Math.sqrt(Math.pow(u-e.x,2)+Math.pow(f-e.y,2));p>t||(p<o?(i=[{...d,x:u,y:f}],o=p):p===o&&i.push({...d,x:u,y:f}))}}if(!i.length)return null;if(i.length>1){const r=s.type==="source"?"target":"source";return i.find(c=>c.type===r)??i[0]}return i[0]}function ih(e,t,n,s,i,o=!1){const a=s.get(e);if(!a)return null;const r=i==="strict"?a.internals.handleBounds?.[t]:[...a.internals.handleBounds?.source??[],...a.internals.handleBounds?.target??[]],c=(n?r?.find(d=>d.id===n):r?.[0])??null;return c&&o?{...c,...ks(a,c,c.position,!0)}:c}function oh(e,t){return e||(t?.classList.contains("target")?"target":t?.classList.contains("source")?"source":null)}function jx(e,t){let n=null;return t?n=!0:e&&!t&&(n=!1),n}const ah=()=>!0;function Yx(e,{connectionMode:t,connectionRadius:n,handleId:s,nodeId:i,edgeUpdaterType:o,isTarget:a,domNode:r,nodeLookup:c,lib:d,autoPanOnConnect:u,flowId:f,panBy:p,cancelConnection:h,onConnectStart:g,onConnect:v,onConnectEnd:b,isValidConnection:x=ah,onReconnectEnd:S,updateConnection:A,getTransform:m,getFromHandle:D,autoPanSpeed:I,dragThreshold:P=1,handleDomNode:N}){const L=Uf(e.target);let W=0,O;const{x:T,y:M}=en(e),w=oh(o,N),E=r?.getBoundingClientRect();let C=!1;if(!E||!w)return;const z=ih(i,w,s,c,t);if(!z)return;let K=en(e,E),B=!1,Z=null,Q=!1,ee=null;function de(){if(!u||!E)return;const[ie,me]=Yf(K,E,I);p({x:ie,y:me}),W=requestAnimationFrame(de)}const oe={...z,nodeId:i,type:w,position:z.position},Se=c.get(i);let q={inProgress:!0,isValid:null,from:ks(Se,oe,ke.Left,!0),fromHandle:oe,fromPosition:oe.position,fromNode:Se,to:K,toHandle:null,toPosition:ku[oe.position],toNode:null,pointer:K};function G(){C=!0,A(q),g?.(e,{nodeId:i,handleId:s,handleType:w})}P===0&&G();function se(ie){if(!C){const{x:Ce,y:Te}=en(ie),Ve=Ce-T,ct=Te-M;if(!(Ve*Ve+ct*ct>P*P))return;G()}if(!D()||!oe){we(ie);return}const me=m();K=en(ie,E),O=Gx(yr(K,me,!1,[1,1]),n,c,oe),B||(de(),B=!0);const pe=rh(ie,{handle:O,connectionMode:t,fromNodeId:i,fromHandleId:s,fromType:a?"target":"source",isValidConnection:x,doc:L,lib:d,flowId:f,nodeLookup:c});ee=pe.handleDomNode,Z=pe.connection,Q=jx(!!O,pe.isValid);const Ee=c.get(i),_e=Ee?ks(Ee,oe,ke.Left,!0):q.from,xe={...q,from:_e,isValid:Q,to:pe.toHandle&&Q?fl({x:pe.toHandle.x,y:pe.toHandle.y},me):K,toHandle:pe.toHandle,toPosition:Q&&pe.toHandle?pe.toHandle.position:ku[oe.position],toNode:pe.toHandle?c.get(pe.toHandle.nodeId):null,pointer:K};A(xe),q=xe}function we(ie){if(!("touches"in ie&&ie.touches.length>0)){if(C){(O||ee)&&Z&&Q&&v?.(Z);const{inProgress:me,...pe}=q,Ee={...pe,toPosition:q.toHandle?q.toPosition:null};b?.(ie,Ee),o&&S?.(ie,Ee)}h(),cancelAnimationFrame(W),B=!1,Q=!1,Z=null,ee=null,L.removeEventListener("mousemove",se),L.removeEventListener("mouseup",we),L.removeEventListener("touchmove",se),L.removeEventListener("touchend",we)}}L.addEventListener("mousemove",se),L.addEventListener("mouseup",we),L.addEventListener("touchmove",se),L.addEventListener("touchend",we)}function rh(e,{handle:t,connectionMode:n,fromNodeId:s,fromHandleId:i,fromType:o,doc:a,lib:r,flowId:c,isValidConnection:d=ah,nodeLookup:u}){const f=o==="target",p=t?a.querySelector(`.${r}-flow__handle[data-id="${c}-${t?.nodeId}-${t?.id}-${t?.type}"]`):null,{x:h,y:g}=en(e),v=a.elementFromPoint(h,g),b=v?.classList.contains(`${r}-flow__handle`)?v:p,x={handleDomNode:b,isValid:!1,connection:null,toHandle:null};if(b){const S=oh(void 0,b),A=b.getAttribute("data-nodeid"),m=b.getAttribute("data-handleid"),D=b.classList.contains("connectable"),I=b.classList.contains("connectableend");if(!A||!S)return x;const P={source:f?A:s,sourceHandle:f?m:i,target:f?s:A,targetHandle:f?i:m};x.connection=P;const L=D&&I&&(n===da.Strict?f&&S==="source"||!f&&S==="target":A!==s||m!==i);x.isValid=L&&d(P),x.toHandle=ih(A,S,m,u,n,!0)}return x}const Lu={onPointerDown:Yx,isValid:rh},Hl=e=>({x:e.x,y:e.y,zoom:e.k}),ic=({x:e,y:t,zoom:n})=>Dl.translate(e,t).scale(n),ta=(e,t)=>e.target.closest(`.${t}`),lh=(e,t)=>t===2&&Array.isArray(e)&&e.includes(2),Xx=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,oc=(e,t=0,n=Xx,s=()=>{})=>{const i=typeof t=="number"&&t>0;return i||s(),i?e.transition().duration(t).ease(n).on("end",s):e},ch=e=>{const t=e.ctrlKey&&hl()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*t};function Ux({zoomPanValues:e,noWheelClassName:t,d3Selection:n,d3Zoom:s,panOnScrollMode:i,panOnScrollSpeed:o,zoomOnPinch:a,onPanZoomStart:r,onPanZoom:c,onPanZoomEnd:d}){return u=>{if(ta(u,t))return u.ctrlKey&&u.preventDefault(),!1;u.preventDefault(),u.stopImmediatePropagation();const f=n.property("__zoom").k||1;if(u.ctrlKey&&a){const b=pn(u),x=ch(u),S=f*Math.pow(2,x);s.scaleTo(n,S,b,u);return}const p=u.deltaMode===1?20:1;let h=i===aa.Vertical?0:u.deltaX*p,g=i===aa.Horizontal?0:u.deltaY*p;!hl()&&u.shiftKey&&i!==aa.Vertical&&(h=u.deltaY*p,g=0),s.translateBy(n,-(h/f)*o,-(g/f)*o,{internal:!0});const v=Hl(n.property("__zoom"));clearTimeout(e.panScrollTimeout),e.isPanScrolling?(c?.(u,v),e.panScrollTimeout=setTimeout(()=>{d?.(u,v),e.isPanScrolling=!1},150)):(e.isPanScrolling=!0,r?.(u,v))}}function Zx({noWheelClassName:e,preventScrolling:t,d3ZoomHandler:n}){return function(s,i){const o=s.type==="wheel",a=!t&&o&&!s.ctrlKey,r=ta(s,e);if(s.ctrlKey&&o&&r&&s.preventDefault(),a||r)return null;s.preventDefault(),n.call(this,s,i)}}function Jx({zoomPanValues:e,onDraggingChange:t,onPanZoomStart:n}){return s=>{if(s.sourceEvent?.internal)return;const i=Hl(s.transform);e.mouseButton=s.sourceEvent?.button||0,e.isZoomingOrPanning=!0,e.prevViewport=i,s.sourceEvent?.type==="mousedown"&&t(!0),n&&n?.(s.sourceEvent,i)}}function Qx({zoomPanValues:e,panOnDrag:t,onPaneContextMenu:n,onTransformChange:s,onPanZoom:i}){return o=>{e.usedRightMouseButton=!!(n&&lh(t,e.mouseButton??0)),o.sourceEvent?.sync||s([o.transform.x,o.transform.y,o.transform.k]),i&&!o.sourceEvent?.internal&&i?.(o.sourceEvent,Hl(o.transform))}}function $x({zoomPanValues:e,panOnDrag:t,panOnScroll:n,onDraggingChange:s,onPanZoomEnd:i,onPaneContextMenu:o}){return a=>{if(!a.sourceEvent?.internal&&(e.isZoomingOrPanning=!1,o&&lh(t,e.mouseButton??0)&&!e.usedRightMouseButton&&a.sourceEvent&&o(a.sourceEvent),e.usedRightMouseButton=!1,s(!1),i)){const r=Hl(a.transform);e.prevViewport=r,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{i?.(a.sourceEvent,r)},n?150:0)}}}function ek({zoomActivationKeyPressed:e,zoomOnScroll:t,zoomOnPinch:n,panOnDrag:s,panOnScroll:i,zoomOnDoubleClick:o,userSelectionActive:a,noWheelClassName:r,noPanClassName:c,lib:d,connectionInProgress:u}){return f=>{const p=e||t,h=n&&f.ctrlKey,g=f.type==="wheel";if(f.button===1&&f.type==="mousedown"&&(ta(f,`${d}-flow__node`)||ta(f,`${d}-flow__edge`)))return!0;if(!s&&!p&&!i&&!o&&!n||a||u&&!g||ta(f,r)&&g||ta(f,c)&&(!g||i&&g&&!e)||!n&&f.ctrlKey&&g)return!1;if(!n&&f.type==="touchstart"&&f.touches?.length>1)return f.preventDefault(),!1;if(!p&&!i&&!h&&g||!s&&(f.type==="mousedown"||f.type==="touchstart")||Array.isArray(s)&&!s.includes(f.button)&&f.type==="mousedown")return!1;const v=Array.isArray(s)&&s.includes(f.button)||!f.button||f.button<=1;return(!f.ctrlKey||g)&&v}}function tk({domNode:e,minZoom:t,maxZoom:n,translateExtent:s,viewport:i,onPanZoom:o,onPanZoomStart:a,onPanZoomEnd:r,onDraggingChange:c}){const d={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},u=e.getBoundingClientRect(),f=ex().scaleExtent([t,n]).translateExtent(s),p=jt(e).call(f);S({x:i.x,y:i.y,zoom:ua(i.zoom,t,n)},[[0,0],[u.width,u.height]],s);const h=p.on("wheel.zoom"),g=p.on("dblclick.zoom");f.wheelDelta(ch);function v(O,T){return p?new Promise(M=>{f?.interpolate(T?.interpolate==="linear"?Za:jr).transform(oc(p,T?.duration,T?.ease,()=>M(!0)),O)}):Promise.resolve(!1)}function b({noWheelClassName:O,noPanClassName:T,onPaneContextMenu:M,userSelectionActive:w,panOnScroll:E,panOnDrag:C,panOnScrollMode:z,panOnScrollSpeed:K,preventScrolling:B,zoomOnPinch:Z,zoomOnScroll:Q,zoomOnDoubleClick:ee,zoomActivationKeyPressed:de,lib:oe,onTransformChange:Se,connectionInProgress:he,paneClickDistance:q,selectionOnDrag:G}){w&&!d.isZoomingOrPanning&&x();const se=E&&!de&&!w;f.clickDistance(G?1/0:!Cn(q)||q<0?0:q);const we=se?Ux({zoomPanValues:d,noWheelClassName:O,d3Selection:p,d3Zoom:f,panOnScrollMode:z,panOnScrollSpeed:K,zoomOnPinch:Z,onPanZoomStart:a,onPanZoom:o,onPanZoomEnd:r}):Zx({noWheelClassName:O,preventScrolling:B,d3ZoomHandler:h});if(p.on("wheel.zoom",we,{passive:!1}),!w){const me=Jx({zoomPanValues:d,onDraggingChange:c,onPanZoomStart:a});f.on("start",me);const pe=Qx({zoomPanValues:d,panOnDrag:C,onPaneContextMenu:!!M,onPanZoom:o,onTransformChange:Se});f.on("zoom",pe);const Ee=$x({zoomPanValues:d,panOnDrag:C,panOnScroll:E,onPaneContextMenu:M,onPanZoomEnd:r,onDraggingChange:c});f.on("end",Ee)}const ie=ek({zoomActivationKeyPressed:de,panOnDrag:C,zoomOnScroll:Q,panOnScroll:E,zoomOnDoubleClick:ee,zoomOnPinch:Z,userSelectionActive:w,noPanClassName:T,noWheelClassName:O,lib:oe,connectionInProgress:he});f.filter(ie),ee?p.on("dblclick.zoom",g):p.on("dblclick.zoom",null)}function x(){f.on("zoom",null)}async function S(O,T,M){const w=ic(O),E=f?.constrain()(w,T,M);return E&&await v(E),new Promise(C=>C(E))}async function A(O,T){const M=ic(O);return await v(M,T),new Promise(w=>w(M))}function m(O){if(p){const T=ic(O),M=p.property("__zoom");(M.k!==O.zoom||M.x!==O.x||M.y!==O.y)&&f?.transform(p,T,null,{sync:!0})}}function D(){const O=p?Vf(p.node()):{x:0,y:0,k:1};return{x:O.x,y:O.y,zoom:O.k}}function I(O,T){return p?new Promise(M=>{f?.interpolate(T?.interpolate==="linear"?Za:jr).scaleTo(oc(p,T?.duration,T?.ease,()=>M(!0)),O)}):Promise.resolve(!1)}function P(O,T){return p?new Promise(M=>{f?.interpolate(T?.interpolate==="linear"?Za:jr).scaleBy(oc(p,T?.duration,T?.ease,()=>M(!0)),O)}):Promise.resolve(!1)}function N(O){f?.scaleExtent(O)}function L(O){f?.translateExtent(O)}function W(O){const T=!Cn(O)||O<0?0:O;f?.clickDistance(T)}return{update:b,destroy:x,setViewport:A,setViewportConstrained:S,getViewport:D,scaleTo:I,scaleBy:P,setScaleExtent:N,setTranslateExtent:L,syncViewport:m,setClickDistance:W}}var dr;(function(e){e.Line="line",e.Handle="handle"})(dr||(dr={}));const nk=["top-left","top-right","bottom-left","bottom-right"],sk=["top","right","bottom","left"];function ik({width:e,prevWidth:t,height:n,prevHeight:s,affectsX:i,affectsY:o}){const a=e-t,r=n-s,c=[a>0?1:a<0?-1:0,r>0?1:r<0?-1:0];return a&&i&&(c[0]=c[0]*-1),r&&o&&(c[1]=c[1]*-1),c}function zu(e){const t=e.includes("right")||e.includes("left"),n=e.includes("bottom")||e.includes("top"),s=e.includes("left"),i=e.includes("top");return{isHorizontal:t,isVertical:n,affectsX:s,affectsY:i}}function Wn(e,t){return Math.max(0,t-e)}function Kn(e,t){return Math.max(0,e-t)}function Mr(e,t,n){return Math.max(0,t-e,e-n)}function Hu(e,t){return e?!t:t}function ok(e,t,n,s,i,o,a,r){let{affectsX:c,affectsY:d}=t;const{isHorizontal:u,isVertical:f}=t,p=u&&f,{xSnapped:h,ySnapped:g}=n,{minWidth:v,maxWidth:b,minHeight:x,maxHeight:S}=s,{x:A,y:m,width:D,height:I,aspectRatio:P}=e;let N=Math.floor(u?h-e.pointerX:0),L=Math.floor(f?g-e.pointerY:0);const W=D+(c?-N:N),O=I+(d?-L:L),T=-o[0]*D,M=-o[1]*I;let w=Mr(W,v,b),E=Mr(O,x,S);if(a){let K=0,B=0;c&&N<0?K=Wn(A+N+T,a[0][0]):!c&&N>0&&(K=Kn(A+W+T,a[1][0])),d&&L<0?B=Wn(m+L+M,a[0][1]):!d&&L>0&&(B=Kn(m+O+M,a[1][1])),w=Math.max(w,K),E=Math.max(E,B)}if(r){let K=0,B=0;c&&N>0?K=Kn(A+N,r[0][0]):!c&&N<0&&(K=Wn(A+W,r[1][0])),d&&L>0?B=Kn(m+L,r[0][1]):!d&&L<0&&(B=Wn(m+O,r[1][1])),w=Math.max(w,K),E=Math.max(E,B)}if(i){if(u){const K=Mr(W/P,x,S)*P;if(w=Math.max(w,K),a){let B=0;!c&&!d||c&&!d&&p?B=Kn(m+M+W/P,a[1][1])*P:B=Wn(m+M+(c?N:-N)/P,a[0][1])*P,w=Math.max(w,B)}if(r){let B=0;!c&&!d||c&&!d&&p?B=Wn(m+W/P,r[1][1])*P:B=Kn(m+(c?N:-N)/P,r[0][1])*P,w=Math.max(w,B)}}if(f){const K=Mr(O*P,v,b)/P;if(E=Math.max(E,K),a){let B=0;!c&&!d||d&&!c&&p?B=Kn(A+O*P+T,a[1][0])/P:B=Wn(A+(d?L:-L)*P+T,a[0][0])/P,E=Math.max(E,B)}if(r){let B=0;!c&&!d||d&&!c&&p?B=Wn(A+O*P,r[1][0])/P:B=Kn(A+(d?L:-L)*P,r[0][0])/P,E=Math.max(E,B)}}}L=L+(L<0?E:-E),N=N+(N<0?w:-w),i&&(p?W>O*P?L=(Hu(c,d)?-N:N)/P:N=(Hu(c,d)?-L:L)*P:u?(L=N/P,d=c):(N=L*P,c=d));const C=c?A+N:A,z=d?m+L:m;return{width:D+(c?-N:N),height:I+(d?-L:L),x:o[0]*N*(c?-1:1)+C,y:o[1]*L*(d?-1:1)+z}}const dh={width:0,height:0,x:0,y:0},ak={...dh,pointerX:0,pointerY:0,aspectRatio:1};function rk(e){return[[0,0],[e.measured.width,e.measured.height]]}function lk(e,t,n){const s=t.position.x+e.position.x,i=t.position.y+e.position.y,o=e.measured.width??0,a=e.measured.height??0,r=n[0]*o,c=n[1]*a;return[[s-r,i-c],[s+o-r,i+a-c]]}function ck({domNode:e,nodeId:t,getStoreItems:n,onChange:s,onEnd:i}){const o=jt(e);let a={controlDirection:zu("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function r({controlPosition:d,boundaries:u,keepAspectRatio:f,resizeDirection:p,onResizeStart:h,onResize:g,onResizeEnd:v,shouldResize:b}){let x={...dh},S={...ak};a={boundaries:u,resizeDirection:p,keepAspectRatio:f,controlDirection:zu(d)};let A,m=null,D=[],I,P,N,L=!1;const W=Cf().on("start",O=>{const{nodeLookup:T,transform:M,snapGrid:w,snapToGrid:E,nodeOrigin:C,paneDomNode:z}=n();if(A=T.get(t),!A)return;m=z?.getBoundingClientRect()??null;const{xSnapped:K,ySnapped:B}=Ja(O.sourceEvent,{transform:M,snapGrid:w,snapToGrid:E,containerBounds:m});x={width:A.measured.width??0,height:A.measured.height??0,x:A.position.x??0,y:A.position.y??0},S={...x,pointerX:K,pointerY:B,aspectRatio:x.width/x.height},I=void 0,A.parentId&&(A.extent==="parent"||A.expandParent)&&(I=T.get(A.parentId),P=I&&A.extent==="parent"?rk(I):void 0),D=[],N=void 0;for(const[Z,Q]of T)if(Q.parentId===t&&(D.push({id:Z,position:{...Q.position},extent:Q.extent}),Q.extent==="parent"||Q.expandParent)){const ee=lk(Q,A,Q.origin??C);N?N=[[Math.min(ee[0][0],N[0][0]),Math.min(ee[0][1],N[0][1])],[Math.max(ee[1][0],N[1][0]),Math.max(ee[1][1],N[1][1])]]:N=ee}h?.(O,{...x})}).on("drag",O=>{const{transform:T,snapGrid:M,snapToGrid:w,nodeOrigin:E}=n(),C=Ja(O.sourceEvent,{transform:T,snapGrid:M,snapToGrid:w,containerBounds:m}),z=[];if(!A)return;const{x:K,y:B,width:Z,height:Q}=x,ee={},de=A.origin??E,{width:oe,height:Se,x:he,y:q}=ok(S,a.controlDirection,C,a.boundaries,a.keepAspectRatio,de,P,N),G=oe!==Z,se=Se!==Q,we=he!==K&&G,ie=q!==B&&se;if(!we&&!ie&&!G&&!se)return;if((we||ie||de[0]===1||de[1]===1)&&(ee.x=we?he:x.x,ee.y=ie?q:x.y,x.x=ee.x,x.y=ee.y,D.length>0)){const _e=he-K,xe=q-B;for(const Ce of D)Ce.position={x:Ce.position.x-_e+de[0]*(oe-Z),y:Ce.position.y-xe+de[1]*(Se-Q)},z.push(Ce)}if((G||se)&&(ee.width=G&&(!a.resizeDirection||a.resizeDirection==="horizontal")?oe:x.width,ee.height=se&&(!a.resizeDirection||a.resizeDirection==="vertical")?Se:x.height,x.width=ee.width,x.height=ee.height),I&&A.expandParent){const _e=de[0]*(ee.width??0);ee.x&&ee.x<_e&&(x.x=_e,S.x=S.x-(ee.x-_e));const xe=de[1]*(ee.height??0);ee.y&&ee.y<xe&&(x.y=xe,S.y=S.y-(ee.y-xe))}const me=ik({width:x.width,prevWidth:Z,height:x.height,prevHeight:Q,affectsX:a.controlDirection.affectsX,affectsY:a.controlDirection.affectsY}),pe={...x,direction:me};b?.(O,pe)!==!1&&(L=!0,g?.(O,pe),s(ee,z))}).on("end",O=>{L&&(v?.(O,{...x}),i?.({...x}),L=!1)});o.call(W)}function c(){o.on(".drag",null)}return{update:r,destroy:c}}function bd(){const e={};return[t=>{if(t&&!Z0(e))throw new Error(t);return $c(e)},t=>nf(e,t)]}const[wd,dk]=bd(),[uk,pk]=bd(),[fk,hk]=bd();var mk=be("<div><!></div>");function ha(e,t){Ne(t,!0);let n=te(t,"id",3,null),s=te(t,"type",3,"source"),i=te(t,"position",19,()=>ke.Top),o=te(t,"isConnectableStart",3,!0),a=te(t,"isConnectableEnd",3,!0),r=Ts(t,["$$slots","$$events","$$legacy","id","type","position","style","class","isConnectable","isConnectableStart","isConnectableEnd","isValidConnection","onconnect","ondisconnect","children"]);const c=wd("Handle must be used within a Custom Node component"),d=uk("Handle must be used within a Custom Node component");let u=y(()=>s()==="target"),f=y(()=>t.isConnectable!==void 0?t.isConnectable:d.value),p=ss(),h=y(()=>p.ariaLabelConfig),g=null;sf(()=>{if(t.onconnect||t.ondisconnect){p.edges;let T=p.connectionLookup.get(`${c}-${s()}${n()?`-${n()}`:""}`);if(g&&!nx(T,g)){const M=T??new Map;Su(g,M,t.ondisconnect),Su(M,g,t.onconnect)}g=new Map(T)}});let v=y(()=>{if(!p.connection.inProgress)return[!1,!1,!1,!1,null];const{fromHandle:T,toHandle:M,isValid:w}=p.connection,E=T&&T.nodeId===c&&T.type===s()&&T.id===n(),C=M&&M.nodeId===c&&M.type===s()&&M.id===n(),z=p.connectionMode===da.Strict?T?.type!==s():c!==T?.nodeId||n()!==T?.id;return[!0,E,C,z,C&&w]}),b=y(()=>xa(l(v),5)),x=y(()=>l(b)[0]),S=y(()=>l(b)[1]),A=y(()=>l(b)[2]),m=y(()=>l(b)[3]),D=y(()=>l(b)[4]);function I(T){const M=p.onbeforeconnect?p.onbeforeconnect(T):T;M&&(p.addEdge(M),p.onconnect?.(T))}function P(T){const M=Jf(T);T.currentTarget&&(M&&T.button===0||!M)&&Lu.onPointerDown(T,{handleId:n(),nodeId:c,isTarget:l(u),connectionRadius:p.connectionRadius,domNode:p.domNode,nodeLookup:p.nodeLookup,connectionMode:p.connectionMode,lib:"svelte",autoPanOnConnect:p.autoPanOnConnect,autoPanSpeed:p.autoPanSpeed,flowId:p.flowId,isValidConnection:t.isValidConnection??p.isValidConnection,updateConnection:p.updateConnection,cancelConnection:p.cancelConnection,panBy:p.panBy,onConnect:I,onConnectStart:(w,E)=>{p.onconnectstart?.(w,{nodeId:E.nodeId,handleId:E.handleId,handleType:E.handleType})},onConnectEnd:(w,E)=>{p.onconnectend?.(w,E)},getTransform:()=>[p.viewport.x,p.viewport.y,p.viewport.zoom],getFromHandle:()=>p.connection.fromHandle,dragThreshold:p.connectionDragThreshold,handleDomNode:T.currentTarget})}function N(T){if(!c||!p.clickConnectStartHandle&&!o())return;if(!p.clickConnectStartHandle){p.onclickconnectstart?.(T,{nodeId:c,handleId:n(),handleType:s()}),p.clickConnectStartHandle={nodeId:c,type:s(),id:n()};return}const M=Uf(T.target),w=t.isValidConnection??p.isValidConnection,{connectionMode:E,clickConnectStartHandle:C,flowId:z,nodeLookup:K}=p,{connection:B,isValid:Z}=Lu.isValid(T,{handle:{nodeId:c,id:n(),type:s()},connectionMode:E,fromNodeId:C.nodeId,fromHandleId:C.id??null,fromType:C.type,isValidConnection:w,flowId:z,doc:M,lib:"svelte",nodeLookup:K});Z&&B&&I(B);const Q=structuredClone(lf(p.connection));delete Q.inProgress,Q.toPosition=Q.toHandle?Q.toHandle.position:null,p.onclickconnectend?.(T,Q),p.clickConnectStartHandle=null}var L=mk(),W=()=>{};ns(L,()=>({"data-handleid":n(),"data-nodeid":c,"data-handlepos":i(),"data-id":`${p.flowId??""}-${c??""}-${n()??"null"??""}-${s()??""}`,class:["svelte-flow__handle",`svelte-flow__handle-${i()}`,p.noDragClass,p.noPanClass,i(),t.class],onmousedown:P,ontouchstart:P,onclick:p.clickConnect?N:void 0,onkeypress:W,style:t.style,role:"button","aria-label":l(h)["handle.ariaLabel"],tabindex:"-1",...r,[Xn]:{valid:l(D),connectingto:l(A),connectingfrom:l(S),source:!l(u),target:l(u),connectablestart:o(),connectableend:a(),connectable:l(f),connectionindicator:l(f)&&(!l(x)||l(m))&&(l(x)||p.clickConnectStartHandle?a():o())}}));var O=ue(L);Hn(O,()=>t.children??_a),ce(L),_(e,L),Pe()}var gk=be("<!> <!>",1);function uh(e,t){Ne(t,!0);let n=te(t,"targetPosition",19,()=>ke.Top),s=te(t,"sourcePosition",19,()=>ke.Bottom);var i=gk(),o=j(i);ha(o,{type:"target",get position(){return n()}});var a=ye(o),r=ye(a);ha(r,{type:"source",get position(){return s()}}),F(()=>mt(a,` ${t.data?.label??""} `)),_(e,i),Pe()}var vk=be(" <!>",1);function yk(e,t){Ne(t,!0);let n=te(t,"data",19,()=>({label:"Node"})),s=te(t,"sourcePosition",19,()=>ke.Bottom);El();var i=vk(),o=j(i),a=ye(o);ha(a,{type:"source",get position(){return s()}}),F(()=>mt(o,`${n()?.label??""} `)),_(e,i),Pe()}var bk=be(" <!>",1);function wk(e,t){Ne(t,!0);let n=te(t,"data",19,()=>({label:"Node"})),s=te(t,"targetPosition",19,()=>ke.Top);El();var i=bk(),o=j(i),a=ye(o);ha(a,{type:"target",get position(){return s()}}),F(()=>mt(o,`${n()?.label??""} `)),_(e,i),Pe()}function _k(e,t){}function ac(e,t,n){if(!n||!t)return;const s=n==="root"?t:t.querySelector(`.svelte-flow__${n}`);s&&s.appendChild(e)}function xk(e,t){const n=y(ss),s=y(()=>l(n).domNode);let i;return l(s)?ac(e,l(s),t):i=of(()=>{je(()=>{ac(e,l(s),t),i?.()})}),{async update(o){ac(e,l(s),o)},destroy(){e.parentNode&&e.parentNode.removeChild(e),i?.()}}}function kk(){let e=ve(typeof window>"u");if(l(e)){const t=of(()=>{je(()=>{H(e,!1),t?.()})})}return{get value(){return l(e)}}}const Fu=e=>ix(e),Sk=e=>Kf(e);function yn(e){return e===void 0?void 0:`${e}px`}const ml={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}};var Ik=be("<div><!></div>");function Ek(e,t){Ne(t,!0);let n=te(t,"x",3,0),s=te(t,"y",3,0),i=te(t,"selectEdgeOnClick",3,!1),o=te(t,"transparent",3,!1),a=Ts(t,["$$slots","$$events","$$legacy","x","y","width","height","selectEdgeOnClick","transparent","class","children"]);const r=ss(),c=fk("EdgeLabel must be used within a Custom Edge component");let d=y(()=>r.visible.edges.get(c)?.zIndex);var u=Ik(),f=()=>{i()&&c&&r.handleEdgeSelection(c)};ns(u,h=>({class:["svelte-flow__edge-label",{transparent:o()},t.class],tabindex:"-1",onclick:f,...a,[In]:h}),[()=>({display:kk().value?"none":void 0,cursor:i()?"pointer":void 0,transform:`translate(-50%, -50%) translate(${n()??""}px,${s()??""}px)`,"pointer-events":"all",width:yn(t.width),height:yn(t.height),"z-index":l(d)})],void 0,void 0,"svelte-1wg91mu");var p=ue(u);Hn(p,()=>t.children??_a),ce(u),vt(u,(h,g)=>xk?.(h,g),()=>"edge-labels"),_(e,u),Pe()}var Tk=Y("<path></path>"),Ck=Y('<path fill="none"></path><!><!>',1);function br(e,t){let n=te(t,"interactionWidth",3,20),s=Ts(t,["$$slots","$$events","$$legacy","id","path","label","labelX","labelY","labelStyle","markerStart","markerEnd","style","interactionWidth","class"]);var i=Ck(),o=j(i),a=ye(o);{var r=u=>{var f=Tk();ns(f,()=>({d:t.path,"stroke-opacity":0,"stroke-width":n(),fill:"none",class:"svelte-flow__edge-interaction",...s})),_(u,f)};V(a,u=>{n()>0&&u(r)})}var c=ye(a);{var d=u=>{Ek(u,{get x(){return t.labelX},get y(){return t.labelY},get style(){return t.labelStyle},selectEdgeOnClick:!0,children:(f,p)=>{El();var h=g0();F(()=>mt(h,t.label)),_(f,h)},$$slots:{default:!0}})};V(c,u=>{t.label&&u(d)})}F(()=>{k(o,"id",t.id),k(o,"d",t.path),Qe(o,0,Cs(["svelte-flow__edge-path",t.class])),k(o,"marker-start",t.markerStart),k(o,"marker-end",t.markerEnd),st(o,t.style)}),_(e,i)}function ph(e,t){Ne(t,!0);let n=y(()=>Qf({sourceX:t.sourceX,sourceY:t.sourceY,targetX:t.targetX,targetY:t.targetY,sourcePosition:t.sourcePosition,targetPosition:t.targetPosition,curvature:t.pathOptions?.curvature})),s=y(()=>xa(l(n),3)),i=y(()=>l(s)[0]),o=y(()=>l(s)[1]),a=y(()=>l(s)[2]);br(e,{get id(){return t.id},get path(){return l(i)},get labelX(){return l(o)},get labelY(){return l(a)},get label(){return t.label},get labelStyle(){return t.labelStyle},get markerStart(){return t.markerStart},get markerEnd(){return t.markerEnd},get interactionWidth(){return t.interactionWidth},get style(){return t.style}}),Pe()}function Nk(e,t){Ne(t,!0);let n=y(()=>zl({sourceX:t.sourceX,sourceY:t.sourceY,targetX:t.targetX,targetY:t.targetY,sourcePosition:t.sourcePosition,targetPosition:t.targetPosition})),s=y(()=>xa(l(n),3)),i=y(()=>l(s)[0]),o=y(()=>l(s)[1]),a=y(()=>l(s)[2]);br(e,{get path(){return l(i)},get labelX(){return l(o)},get labelY(){return l(a)},get label(){return t.label},get labelStyle(){return t.labelStyle},get markerStart(){return t.markerStart},get markerEnd(){return t.markerEnd},get interactionWidth(){return t.interactionWidth},get style(){return t.style}}),Pe()}function Pk(e,t){Ne(t,!0);let n=y(()=>eh({sourceX:t.sourceX,sourceY:t.sourceY,targetX:t.targetX,targetY:t.targetY})),s=y(()=>xa(l(n),3)),i=y(()=>l(s)[0]),o=y(()=>l(s)[1]),a=y(()=>l(s)[2]);br(e,{get path(){return l(i)},get labelX(){return l(o)},get labelY(){return l(a)},get label(){return t.label},get labelStyle(){return t.labelStyle},get markerStart(){return t.markerStart},get markerEnd(){return t.markerEnd},get interactionWidth(){return t.interactionWidth},get style(){return t.style}}),Pe()}function Mk(e,t){Ne(t,!0);let n=y(()=>zl({sourceX:t.sourceX,sourceY:t.sourceY,targetX:t.targetX,targetY:t.targetY,sourcePosition:t.sourcePosition,targetPosition:t.targetPosition,borderRadius:0})),s=y(()=>xa(l(n),3)),i=y(()=>l(s)[0]),o=y(()=>l(s)[1]),a=y(()=>l(s)[2]);br(e,{get path(){return l(i)},get labelX(){return l(o)},get labelY(){return l(a)},get label(){return t.label},get labelStyle(){return t.labelStyle},get markerStart(){return t.markerStart},get markerEnd(){return t.markerEnd},get interactionWidth(){return t.interactionWidth},get style(){return t.style}}),Pe()}class Ak{#e;#t;constructor(t,n){this.#e=t,this.#t=sb(n)}get current(){return this.#t(),this.#e()}}const Dk=/\(.+\)/,Ok=new Set(["all","print","screen","and","or","not","only"]);class Rk extends Ak{constructor(t,n){let s=Dk.test(t)||t.split(/[\s,]+/).some(o=>Ok.has(o.trim()))?t:`(${t})`;const i=window.matchMedia(s);super(()=>i.matches,o=>yc(i,"change",o))}}function Lk(e,t,n,s){const i=new Map;return fd(e,{x:0,y:0,width:n,height:s},t,!0).forEach(o=>{i.set(o.id,o)}),i}function Bu(e){const{edges:t,defaultEdgeOptions:n,nodeLookup:s,previousEdges:i,connectionMode:o,onerror:a,onlyRenderVisible:r,elevateEdgesOnSelect:c,zIndexMode:d}=e,u=new Map;for(const f of t){const p=s.get(f.source),h=s.get(f.target);if(!p||!h)continue;if(r){const{visibleNodes:b,transform:x,width:S,height:A}=e;if(wx({sourceNode:p,targetNode:h,width:S,height:A,transform:x}))b.set(p.id,p),b.set(h.id,h);else continue}const g=i.get(f.id);if(g&&f===g.edge&&p==g.sourceNode&&h==g.targetNode){u.set(f.id,g);continue}const v=Tx({id:f.id,sourceNode:p,targetNode:h,sourceHandle:f.sourceHandle||null,targetHandle:f.targetHandle||null,connectionMode:o,onError:a});v&&u.set(f.id,{...n,...f,...v,zIndex:bx({selected:f.selected,zIndex:f.zIndex??n.zIndex,sourceNode:p,targetNode:h,elevateOnSelect:c,zIndexMode:d}),sourceNode:p,targetNode:h,edge:f})}return u}const fh={input:yk,output:wk,default:uh,group:_k},hh={straight:Pk,smoothstep:Nk,default:ph,step:Mk};function zk(e,t,n,s,i,o){if(t&&!n&&s&&i){const a=Ol(o,{filter:r=>!!((r.width||r.initialWidth)&&(r.height||r.initialHeight))});return hd(a,s,i,.5,2,.1)}else return n??{x:0,y:0,zoom:1}}function Hk(e){class t{#e=y(()=>e.props.id??"1");get flowId(){return l(this.#e)}set flowId(s){H(this.#e,s)}#t=ve(null);get domNode(){return l(this.#t)}set domNode(s){H(this.#t,s)}#n=ve(null);get panZoom(){return l(this.#n)}set panZoom(s){H(this.#n,s)}#s=ve(e.width??0);get width(){return l(this.#s)}set width(s){H(this.#s,s)}#i=ve(e.height??0);get height(){return l(this.#i)}set height(s){H(this.#i,s)}#o=ve(e.props.zIndexMode??"basic");get zIndexMode(){return l(this.#o)}set zIndexMode(s){H(this.#o,s)}#a=y(()=>{const s=Dx(e.nodes,this.nodeLookup,this.parentLookup,{nodeExtent:this.nodeExtent,nodeOrigin:this.nodeOrigin,elevateNodesOnSelect:e.props.elevateNodesOnSelect??!0,checkEquality:!0,zIndexMode:this.zIndexMode});return this.fitViewQueued&&s&&(this.fitViewOptions?.duration?this.resolveFitView():queueMicrotask(()=>{this.resolveFitView()})),s});get nodesInitialized(){return l(this.#a)}set nodesInitialized(s){H(this.#a,s)}#r=y(()=>this.panZoom!==null);get viewportInitialized(){return l(this.#r)}set viewportInitialized(s){H(this.#r,s)}#l=y(()=>(Fx(this.connectionLookup,this.edgeLookup,e.edges),e.edges));get _edges(){return l(this.#l)}set _edges(s){H(this.#l,s)}get nodes(){return this.nodesInitialized,e.nodes}set nodes(s){e.nodes=s}get edges(){return this._edges}set edges(s){e.edges=s}_prevSelectedNodes=[];_prevSelectedNodeIds=new Set;#c=y(()=>{const s=this._prevSelectedNodeIds.size,i=new Set,o=this.nodes.filter(a=>(a.selected&&(i.add(a.id),this._prevSelectedNodeIds.delete(a.id)),a.selected));return(s!==i.size||this._prevSelectedNodeIds.size>0)&&(this._prevSelectedNodes=o),this._prevSelectedNodeIds=i,this._prevSelectedNodes});get selectedNodes(){return l(this.#c)}set selectedNodes(s){H(this.#c,s)}_prevSelectedEdges=[];_prevSelectedEdgeIds=new Set;#d=y(()=>{const s=this._prevSelectedEdgeIds.size,i=new Set,o=this.edges.filter(a=>(a.selected&&(i.add(a.id),this._prevSelectedEdgeIds.delete(a.id)),a.selected));return(s!==i.size||this._prevSelectedEdgeIds.size>0)&&(this._prevSelectedEdges=o),this._prevSelectedEdgeIds=i,this._prevSelectedEdges});get selectedEdges(){return l(this.#d)}set selectedEdges(s){H(this.#d,s)}selectionChangeHandlers=new Map;nodeLookup=new Map;parentLookup=new Map;connectionLookup=new Map;edgeLookup=new Map;_prevVisibleEdges=new Map;#u=y(()=>{const{nodes:s,_edges:i,_prevVisibleEdges:o,nodeLookup:a,connectionMode:r,onerror:c,onlyRenderVisibleElements:d,defaultEdgeOptions:u,zIndexMode:f}=this;let p,h;const g={edges:i,defaultEdgeOptions:u,previousEdges:o,nodeLookup:a,connectionMode:r,elevateEdgesOnSelect:e.props.elevateEdgesOnSelect??!0,zIndexMode:f,onerror:c};if(d){const{viewport:v,width:b,height:x}=this,S=[v.x,v.y,v.zoom];p=Lk(a,S,b,x),h=Bu({...g,onlyRenderVisible:!0,visibleNodes:p,transform:S,width:b,height:x})}else p=this.nodeLookup,h=Bu(g);return{nodes:p,edges:h}});get visible(){return l(this.#u)}set visible(s){H(this.#u,s)}#p=y(()=>e.props.nodesDraggable??!0);get nodesDraggable(){return l(this.#p)}set nodesDraggable(s){H(this.#p,s)}#f=y(()=>e.props.nodesConnectable??!0);get nodesConnectable(){return l(this.#f)}set nodesConnectable(s){H(this.#f,s)}#h=y(()=>e.props.elementsSelectable??!0);get elementsSelectable(){return l(this.#h)}set elementsSelectable(s){H(this.#h,s)}#m=y(()=>e.props.nodesFocusable??!0);get nodesFocusable(){return l(this.#m)}set nodesFocusable(s){H(this.#m,s)}#g=y(()=>e.props.edgesFocusable??!0);get edgesFocusable(){return l(this.#g)}set edgesFocusable(s){H(this.#g,s)}#v=y(()=>e.props.disableKeyboardA11y??!1);get disableKeyboardA11y(){return l(this.#v)}set disableKeyboardA11y(s){H(this.#v,s)}#y=y(()=>e.props.minZoom??.5);get minZoom(){return l(this.#y)}set minZoom(s){H(this.#y,s)}#b=y(()=>e.props.maxZoom??2);get maxZoom(){return l(this.#b)}set maxZoom(s){H(this.#b,s)}#w=y(()=>e.props.nodeOrigin??[0,0]);get nodeOrigin(){return l(this.#w)}set nodeOrigin(s){H(this.#w,s)}#_=y(()=>e.props.nodeExtent??Nc);get nodeExtent(){return l(this.#_)}set nodeExtent(s){H(this.#_,s)}#x=y(()=>e.props.translateExtent??Nc);get translateExtent(){return l(this.#x)}set translateExtent(s){H(this.#x,s)}#k=y(()=>e.props.defaultEdgeOptions??{});get defaultEdgeOptions(){return l(this.#k)}set defaultEdgeOptions(s){H(this.#k,s)}#S=y(()=>e.props.nodeDragThreshold??1);get nodeDragThreshold(){return l(this.#S)}set nodeDragThreshold(s){H(this.#S,s)}#I=y(()=>e.props.autoPanOnNodeDrag??!0);get autoPanOnNodeDrag(){return l(this.#I)}set autoPanOnNodeDrag(s){H(this.#I,s)}#E=y(()=>e.props.autoPanOnConnect??!0);get autoPanOnConnect(){return l(this.#E)}set autoPanOnConnect(s){H(this.#E,s)}#T=y(()=>e.props.autoPanOnNodeFocus??!0);get autoPanOnNodeFocus(){return l(this.#T)}set autoPanOnNodeFocus(s){H(this.#T,s)}#C=y(()=>e.props.autoPanSpeed??15);get autoPanSpeed(){return l(this.#C)}set autoPanSpeed(s){H(this.#C,s)}#N=y(()=>e.props.connectionDragThreshold??1);get connectionDragThreshold(){return l(this.#N)}set connectionDragThreshold(s){H(this.#N,s)}fitViewQueued=e.props.fitView??!1;fitViewOptions=e.props.fitViewOptions;fitViewResolver=null;#P=y(()=>e.props.snapGrid??null);get snapGrid(){return l(this.#P)}set snapGrid(s){H(this.#P,s)}#M=ve(!1);get dragging(){return l(this.#M)}set dragging(s){H(this.#M,s)}#A=ve(null);get selectionRect(){return l(this.#A)}set selectionRect(s){H(this.#A,s)}#D=ve(!1);get selectionKeyPressed(){return l(this.#D)}set selectionKeyPressed(s){H(this.#D,s)}#O=ve(!1);get multiselectionKeyPressed(){return l(this.#O)}set multiselectionKeyPressed(s){H(this.#O,s)}#R=ve(!1);get deleteKeyPressed(){return l(this.#R)}set deleteKeyPressed(s){H(this.#R,s)}#L=ve(!1);get panActivationKeyPressed(){return l(this.#L)}set panActivationKeyPressed(s){H(this.#L,s)}#z=ve(!1);get zoomActivationKeyPressed(){return l(this.#z)}set zoomActivationKeyPressed(s){H(this.#z,s)}#H=ve(null);get selectionRectMode(){return l(this.#H)}set selectionRectMode(s){H(this.#H,s)}#F=ve("");get ariaLiveMessage(){return l(this.#F)}set ariaLiveMessage(s){H(this.#F,s)}#B=y(()=>e.props.selectionMode??dl.Partial);get selectionMode(){return l(this.#B)}set selectionMode(s){H(this.#B,s)}#q=y(()=>({...fh,...e.props.nodeTypes}));get nodeTypes(){return l(this.#q)}set nodeTypes(s){H(this.#q,s)}#V=y(()=>({...hh,...e.props.edgeTypes}));get edgeTypes(){return l(this.#V)}set edgeTypes(s){H(this.#V,s)}#W=y(()=>e.props.noPanClass??"nopan");get noPanClass(){return l(this.#W)}set noPanClass(s){H(this.#W,s)}#K=y(()=>e.props.noDragClass??"nodrag");get noDragClass(){return l(this.#K)}set noDragClass(s){H(this.#K,s)}#G=y(()=>e.props.noWheelClass??"nowheel");get noWheelClass(){return l(this.#G)}set noWheelClass(s){H(this.#G,s)}#j=y(()=>gx(e.props.ariaLabelConfig));get ariaLabelConfig(){return l(this.#j)}set ariaLabelConfig(s){H(this.#j,s)}#Y=ve(zk(this.nodesInitialized,e.props.fitView,e.props.initialViewport,this.width,this.height,this.nodeLookup));get _viewport(){return l(this.#Y)}set _viewport(s){H(this.#Y,s)}get viewport(){return e.viewport??this._viewport}set viewport(s){e.viewport&&(e.viewport=s),this._viewport=s}#X=ve(Pc);get _connection(){return l(this.#X)}set _connection(s){H(this.#X,s)}#U=y(()=>this._connection.inProgress?{...this._connection,to:yr(this._connection.to,[this.viewport.x,this.viewport.y,this.viewport.zoom])}:this._connection);get connection(){return l(this.#U)}set connection(s){H(this.#U,s)}#Z=y(()=>e.props.connectionMode??da.Strict);get connectionMode(){return l(this.#Z)}set connectionMode(s){H(this.#Z,s)}#J=y(()=>e.props.connectionRadius??20);get connectionRadius(){return l(this.#J)}set connectionRadius(s){H(this.#J,s)}#Q=y(()=>e.props.isValidConnection??(()=>!0));get isValidConnection(){return l(this.#Q)}set isValidConnection(s){H(this.#Q,s)}#$=y(()=>e.props.selectNodesOnDrag??!0);get selectNodesOnDrag(){return l(this.#$)}set selectNodesOnDrag(s){H(this.#$,s)}#ee=y(()=>e.props.defaultMarkerColor===void 0?"#b1b1b7":e.props.defaultMarkerColor);get defaultMarkerColor(){return l(this.#ee)}set defaultMarkerColor(s){H(this.#ee,s)}#te=y(()=>Cx(e.edges,{defaultColor:this.defaultMarkerColor,id:this.flowId,defaultMarkerStart:this.defaultEdgeOptions.markerStart,defaultMarkerEnd:this.defaultEdgeOptions.markerEnd}));get markers(){return l(this.#te)}set markers(s){H(this.#te,s)}#ne=y(()=>e.props.onlyRenderVisibleElements??!1);get onlyRenderVisibleElements(){return l(this.#ne)}set onlyRenderVisibleElements(s){H(this.#ne,s)}#se=y(()=>e.props.onflowerror??ux);get onerror(){return l(this.#se)}set onerror(s){H(this.#se,s)}#ie=y(()=>e.props.ondelete);get ondelete(){return l(this.#ie)}set ondelete(s){H(this.#ie,s)}#oe=y(()=>e.props.onbeforedelete);get onbeforedelete(){return l(this.#oe)}set onbeforedelete(s){H(this.#oe,s)}#ae=y(()=>e.props.onbeforeconnect);get onbeforeconnect(){return l(this.#ae)}set onbeforeconnect(s){H(this.#ae,s)}#re=y(()=>e.props.onconnect);get onconnect(){return l(this.#re)}set onconnect(s){H(this.#re,s)}#le=y(()=>e.props.onconnectstart);get onconnectstart(){return l(this.#le)}set onconnectstart(s){H(this.#le,s)}#ce=y(()=>e.props.onconnectend);get onconnectend(){return l(this.#ce)}set onconnectend(s){H(this.#ce,s)}#de=y(()=>e.props.onbeforereconnect);get onbeforereconnect(){return l(this.#de)}set onbeforereconnect(s){H(this.#de,s)}#ue=y(()=>e.props.onreconnect);get onreconnect(){return l(this.#ue)}set onreconnect(s){H(this.#ue,s)}#pe=y(()=>e.props.onreconnectstart);get onreconnectstart(){return l(this.#pe)}set onreconnectstart(s){H(this.#pe,s)}#fe=y(()=>e.props.onreconnectend);get onreconnectend(){return l(this.#fe)}set onreconnectend(s){H(this.#fe,s)}#he=y(()=>e.props.clickConnect??!0);get clickConnect(){return l(this.#he)}set clickConnect(s){H(this.#he,s)}#me=y(()=>e.props.onclickconnectstart);get onclickconnectstart(){return l(this.#me)}set onclickconnectstart(s){H(this.#me,s)}#ge=y(()=>e.props.onclickconnectend);get onclickconnectend(){return l(this.#ge)}set onclickconnectend(s){H(this.#ge,s)}#ve=ve(null);get clickConnectStartHandle(){return l(this.#ve)}set clickConnectStartHandle(s){H(this.#ve,s)}#ye=y(()=>e.props.onselectiondrag);get onselectiondrag(){return l(this.#ye)}set onselectiondrag(s){H(this.#ye,s)}#be=y(()=>e.props.onselectiondragstart);get onselectiondragstart(){return l(this.#be)}set onselectiondragstart(s){H(this.#be,s)}#we=y(()=>e.props.onselectiondragstop);get onselectiondragstop(){return l(this.#we)}set onselectiondragstop(s){H(this.#we,s)}resolveFitView=async()=>{this.panZoom&&(await lx({nodes:this.nodeLookup,width:this.width,height:this.height,panZoom:this.panZoom,minZoom:this.minZoom,maxZoom:this.maxZoom},this.fitViewOptions),this.fitViewResolver?.resolve(!0),this.fitViewQueued=!1,this.fitViewOptions=void 0,this.fitViewResolver=null)};_prefersDark=new Rk("(prefers-color-scheme: dark)",e.props.colorModeSSR==="dark");#_e=y(()=>e.props.colorMode==="system"?this._prefersDark.current?"dark":"light":e.props.colorMode??"light");get colorMode(){return l(this.#_e)}set colorMode(s){H(this.#_e,s)}constructor(){}resetStoreValues(){this.dragging=!1,this.selectionRect=null,this.selectionRectMode=null,this.selectionKeyPressed=!1,this.multiselectionKeyPressed=!1,this.deleteKeyPressed=!1,this.panActivationKeyPressed=!1,this.zoomActivationKeyPressed=!1,this._connection=Pc,this.clickConnectStartHandle=null,this.viewport=e.props.initialViewport??{x:0,y:0,zoom:1},this.ariaLiveMessage=""}}return new t}function ss(){const e=$c(Dc);if(!e)throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");return e.getStore()}const Dc=Symbol();function Fk(e){const t=Hk(e);function n(O){t.nodeTypes={...fh,...O}}function s(O){t.edgeTypes={...hh,...O}}function i(O){t.edges=kx(O,t.edges)}const o=(O,T=!1)=>{t.nodes=t.nodes.map(M=>{if(t.connection.inProgress&&t.connection.fromNode.id===M.id){const E=t.nodeLookup.get(M.id);E&&(t.connection={...t.connection,from:ks(E,t.connection.fromHandle,ke.Left,!0)})}const w=O.get(M.id);return w?{...M,position:w.position,dragging:T}:M})};function a(O){const{changes:T,updatedInternals:M}=zx(O,t.nodeLookup,t.parentLookup,t.domNode,t.nodeOrigin,t.nodeExtent,t.zIndexMode);if(!M)return;Mx(t.nodeLookup,t.parentLookup,{nodeOrigin:t.nodeOrigin,nodeExtent:t.nodeExtent,zIndexMode:t.zIndexMode}),t.fitViewQueued&&t.resolveFitView();const w=new Map;for(const E of T){const C=t.nodeLookup.get(E.id)?.internals.userNode;if(!C)continue;const z={...C};switch(E.type){case"dimensions":{const K={...z.measured,...E.dimensions};E.setAttributes&&(z.width=E.dimensions?.width??z.width,z.height=E.dimensions?.height??z.height),z.measured=K;break}case"position":z.position=E.position??z.position;break}w.set(E.id,z)}t.nodes=t.nodes.map(E=>w.get(E.id)??E)}function r(O){const T=t.fitViewResolver??Promise.withResolvers();return t.fitViewQueued=!0,t.fitViewOptions=O,t.fitViewResolver=T,t.nodes=[...t.nodes],T.promise}async function c(O,T,M){const w=typeof M?.zoom<"u"?M.zoom:t.maxZoom,E=t.panZoom;return E?(await E.setViewport({x:t.width/2-O*w,y:t.height/2-T*w,zoom:w},{duration:M?.duration,ease:M?.ease,interpolate:M?.interpolate}),Promise.resolve(!0)):Promise.resolve(!1)}function d(O,T){const M=t.panZoom;return M?M.scaleBy(O,T):Promise.resolve(!1)}function u(O){return d(1.2,O)}function f(O){return d(1/1.2,O)}function p(O){const T=t.panZoom;T&&(T.setScaleExtent([O,t.maxZoom]),t.minZoom=O)}function h(O){const T=t.panZoom;T&&(T.setScaleExtent([t.minZoom,O]),t.maxZoom=O)}function g(O){const T=t.panZoom;T&&(T.setTranslateExtent(O),t.translateExtent=O)}function v(O,T=null){let M=!1;const w=O.map(E=>(T?T.has(E.id):!0)&&E.selected?(M=!0,{...E,selected:!1}):E);return[M,w]}function b(O){const T=O?.nodes?new Set(O.nodes.map(K=>K.id)):null,[M,w]=v(t.nodes,T);M&&(t.nodes=w);const E=O?.edges?new Set(O.edges.map(K=>K.id)):null,[C,z]=v(t.edges,E);C&&(t.edges=z)}function x(O){const T=t.multiselectionKeyPressed;t.nodes=t.nodes.map(M=>{const w=O.includes(M.id),E=T&&M.selected||w;return!!M.selected!==E?{...M,selected:E}:M}),T||b({nodes:[]})}function S(O){const T=t.multiselectionKeyPressed;t.edges=t.edges.map(M=>{const w=O.includes(M.id),E=T&&M.selected||w;return!!M.selected!==E?{...M,selected:E}:M}),T||b({edges:[]})}function A(O,T,M){const w=t.nodeLookup.get(O);if(!w){console.warn("012",lr.error012(O));return}t.selectionRect=null,t.selectionRectMode=null,w.selected?(T||w.selected&&t.multiselectionKeyPressed)&&(b({nodes:[w],edges:[]}),requestAnimationFrame(()=>M?.blur())):x([O])}function m(O){const T=t.edgeLookup.get(O);if(!T){console.warn("012",lr.error012(O));return}(T.selectable||t.elementsSelectable&&typeof T.selectable>"u")&&(t.selectionRect=null,t.selectionRectMode=null,T.selected?T.selected&&t.multiselectionKeyPressed&&b({nodes:[],edges:[T]}):S([O]))}function D(O,T){const{nodeExtent:M,snapGrid:w,nodeOrigin:E,nodeLookup:C,nodesDraggable:z,onerror:K}=t,B=new Map,Z=w?.[0]??5,Q=w?.[1]??5,ee=O.x*Z*T,de=O.y*Q*T;for(const oe of C.values()){if(!(oe.selected&&(oe.draggable||z&&typeof oe.draggable>"u")))continue;let he={x:oe.internals.positionAbsolute.x+ee,y:oe.internals.positionAbsolute.y+de};w&&(he=vr(he,w));const{position:q,positionAbsolute:G}=Gf({nodeId:oe.id,nextPosition:he,nodeLookup:C,nodeExtent:M,nodeOrigin:E,onError:K});oe.position=q,oe.internals.positionAbsolute=G,B.set(oe.id,oe)}o(B)}function I(O){return Hx({delta:O,panZoom:t.panZoom,transform:[t.viewport.x,t.viewport.y,t.viewport.zoom],translateExtent:t.translateExtent,width:t.width,height:t.height})}const P=O=>{t._connection={...O}};function N(){t._connection=Pc}function L(){t.resetStoreValues(),b()}return Object.assign(t,{setNodeTypes:n,setEdgeTypes:s,addEdge:i,updateNodePositions:o,updateNodeInternals:a,zoomIn:u,zoomOut:f,fitView:r,setCenter:c,setMinZoom:p,setMaxZoom:h,setTranslateExtent:g,unselectNodesAndEdges:b,addSelectedNodes:x,addSelectedEdges:S,handleNodeSelection:A,handleEdgeSelection:m,moveSelectedNodes:D,panBy:I,updateConnection:P,cancelConnection:N,reset:L})}function Bk(e,t){const{minZoom:n,maxZoom:s,initialViewport:i,onPanZoomStart:o,onPanZoom:a,onPanZoomEnd:r,translateExtent:c,setPanZoomInstance:d,onDraggingChange:u,onTransformChange:f}=t,p=tk({domNode:e,minZoom:n,maxZoom:s,translateExtent:c,viewport:i,onPanZoom:a,onPanZoomStart:o,onPanZoomEnd:r,onDraggingChange:u}),h=p.getViewport();return(i.x!==h.x||i.y!==h.y||i.zoom!==h.zoom)&&f([h.x,h.y,h.zoom]),d(p),p.update(t),{update(g){p.update(g)}}}var qk=be('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');function Vk(e,t){Ne(t,!0);let n=te(t,"store",15),s=y(()=>n().panActivationKeyPressed||t.panOnDrag),i=y(()=>n().panActivationKeyPressed||t.panOnScroll);const{viewport:o}=n();let a=!1;je(()=>{!a&&n().viewportInitialized&&(t.oninit?.(),a=!0)});var r=qk(),c=ue(r);Hn(c,()=>t.children),ce(r),vt(r,(d,u)=>Bk?.(d,u),()=>({viewport:n().viewport,minZoom:n().minZoom,maxZoom:n().maxZoom,initialViewport:o,onDraggingChange:d=>{n(n().dragging=d,!0)},setPanZoomInstance:d=>{n(n().panZoom=d,!0)},onPanZoomStart:t.onmovestart,onPanZoom:t.onmove,onPanZoomEnd:t.onmoveend,zoomOnScroll:t.zoomOnScroll,zoomOnDoubleClick:t.zoomOnDoubleClick,zoomOnPinch:t.zoomOnPinch,panOnScroll:l(i),panOnDrag:l(s),panOnScrollSpeed:t.panOnScrollSpeed,panOnScrollMode:t.panOnScrollMode,zoomActivationKeyPressed:n().zoomActivationKeyPressed,preventScrolling:typeof t.preventScrolling=="boolean"?t.preventScrolling:!0,noPanClassName:n().noPanClass,noWheelClassName:n().noWheelClass,userSelectionActive:!!n().selectionRect,translateExtent:n().translateExtent,lib:"svelte",paneClickDistance:t.paneClickDistance,selectionOnDrag:t.selectionOnDrag,onTransformChange:d=>{n(n().viewport={x:d[0],y:d[1],zoom:d[2]},!0)},connectionInProgress:n().connection.inProgress})),_(e,r),Pe()}function qu(e,t){return n=>{n.target===t&&e?.(n)}}function Vu(e){return t=>{const n=e.has(t.id);return!!t.selected!==n?{...t,selected:n}:t}}function Wu(e,t){if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0}var Wk=be("<div><!></div>");function Kk(e,t){Ne(t,!0);let n=te(t,"store",15),s=te(t,"panOnDrag",3,!0),i=te(t,"paneClickDistance",3,1),o,a=null,r=new Set,c=new Set,d=y(()=>n().panActivationKeyPressed||s()),u=y(()=>n().selectionKeyPressed||!!n().selectionRect||t.selectionOnDrag&&l(d)!==!0),f=y(()=>n().elementsSelectable&&(l(u)||n().selectionRectMode==="user")),p=!1;function h(N){if(a=o?.getBoundingClientRect(),!a)return;const L=N.target===o,W=!L&&!!N.target.closest(".nokey"),O=t.selectionOnDrag&&L||n().selectionKeyPressed;if(W||!l(u)||!O||N.button!==0||!N.isPrimary)return;N.target?.setPointerCapture?.(N.pointerId),p=!1;const{x:T,y:M}=en(N,a);n(n().selectionRect={width:0,height:0,startX:T,startY:M,x:T,y:M},!0),L||(N.stopPropagation(),N.preventDefault())}function g(N){if(!l(u)||!a||!n().selectionRect)return;const L=en(N,a),{startX:W=0,startY:O=0}=n().selectionRect;if(!p){const C=n().selectionKeyPressed?0:i();if(Math.hypot(L.x-W,L.y-O)<=C)return;n().unselectNodesAndEdges(),t.onselectionstart?.(N)}p=!0;const T={...n().selectionRect,x:L.x<W?L.x:W,y:L.y<O?L.y:O,width:Math.abs(L.x-W),height:Math.abs(L.y-O)},M=r,w=c;r=new Set(fd(n().nodeLookup,T,[n().viewport.x,n().viewport.y,n().viewport.zoom],n().selectionMode===dl.Partial,!0).map(C=>C.id));const E=n().defaultEdgeOptions.selectable??!0;c=new Set;for(const C of r){const z=n().connectionLookup.get(C);if(z)for(const{edgeId:K}of z.values()){const B=n().edgeLookup.get(K);B&&(B.selectable??E)&&c.add(K)}}Wu(M,r)||n(n().nodes=n().nodes.map(Vu(r)),!0),Wu(w,c)||n(n().edges=n().edges.map(Vu(c)),!0),n(n().selectionRectMode="user",!0),n(n().selectionRect=T,!0)}function v(N){N.button===0&&(N.target?.releasePointerCapture?.(N.pointerId),!p&&N.target===o&&S?.(N),n(n().selectionRect=null,!0),p&&n(n().selectionRectMode=r.size>0?"nodes":null,!0),p&&t.onselectionend?.(N))}const b=N=>{if(Array.isArray(l(d))&&l(d).includes(2)){N.preventDefault();return}t.onpanecontextmenu?.({event:N})},x=N=>{p&&(N.stopPropagation(),p=!1)};function S(N){if(p||n().connection.inProgress){p=!1;return}t.onpaneclick?.({event:N}),n().unselectNodesAndEdges(),n(n().selectionRectMode=null,!0),n(n().selectionRect=null,!0)}var A=Wk();let m;var D=y(()=>l(f)?void 0:qu(S,o));A.__click=function(...N){l(D)?.apply(this,N)},A.__pointermove=function(...N){(l(f)?g:void 0)?.apply(this,N)},A.__pointerup=function(...N){(l(f)?v:void 0)?.apply(this,N)};var I=y(()=>qu(b,o));A.__contextmenu=function(...N){l(I)?.apply(this,N)};var P=ue(A);Hn(P,()=>t.children),ce(A),tn(A,N=>o=N,()=>o),F(N=>m=Qe(A,1,"svelte-flow__pane svelte-flow__container",null,m,N),[()=>({draggable:s()===!0||Array.isArray(s())&&s().includes(0),dragging:n().dragging,selection:l(u)})]),Et("pointerdown",A,function(...N){(l(f)?h:void 0)?.apply(this,N)},!0),Et("click",A,function(...N){(l(f)?x:void 0)?.apply(this,N)},!0),_(e,A),Pe()}zn(["click","pointermove","pointerup","contextmenu"]);var Gk=be('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');function jk(e,t){Ne(t,!0);var n=Gk();let s;var i=ue(n);Hn(i,()=>t.children),ce(n),F(()=>s=st(n,"",s,{transform:`translate(${t.store.viewport.x??""}px, ${t.store.viewport.y??""}px) scale(${t.store.viewport.zoom??""})`})),_(e,n),Pe()}function mh(e,t){const{store:n,onDrag:s,onDragStart:i,onDragStop:o,onNodeMouseDown:a}=t,r=Vx({onDrag:s,onDragStart:i,onDragStop:o,onNodeMouseDown:a,getStoreItems:()=>{const{snapGrid:d,viewport:u}=n;return{nodes:n.nodes,nodeLookup:n.nodeLookup,edges:n.edges,nodeExtent:n.nodeExtent,snapGrid:d||[0,0],snapToGrid:!!d,nodeOrigin:n.nodeOrigin,multiSelectionActive:n.multiselectionKeyPressed,domNode:n.domNode,transform:[u.x,u.y,u.zoom],autoPanOnNodeDrag:n.autoPanOnNodeDrag,nodesDraggable:n.nodesDraggable,selectNodesOnDrag:n.selectNodesOnDrag,nodeDragThreshold:n.nodeDragThreshold,unselectNodesAndEdges:n.unselectNodesAndEdges,updateNodePositions:n.updateNodePositions,onSelectionDrag:n.onselectiondrag,onSelectionDragStart:n.onselectiondragstart,onSelectionDragStop:n.onselectiondragstop,panBy:n.panBy}}});function c(d,u){if(u.disabled){r.destroy();return}r.update({domNode:d,noDragClassName:u.noDragClass,handleSelector:u.handleSelector,nodeId:u.nodeId,isSelectable:u.isSelectable,nodeClickDistance:u.nodeClickDistance})}return c(e,t),{update(d){c(e,d)},destroy(){r.destroy()}}}var Yk=be('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-13pq11u"> </div>'),Xk=be('<div class="a11y-hidden svelte-13pq11u"> </div> <div class="a11y-hidden svelte-13pq11u"> </div> <!>',1);function Uk(e,t){Ne(t,!0);var n=Xk(),s=j(n),i=ue(s,!0);ce(s);var o=ye(s,2),a=ue(o,!0);ce(o);var r=ye(o,2);{var c=d=>{var u=Yk(),f=ue(u,!0);ce(u),F(()=>{k(u,"id",`${Zk}-${t.store.flowId}`),mt(f,t.store.ariaLiveMessage)}),_(d,u)};V(r,d=>{t.store.disableKeyboardA11y||d(c)})}F(()=>{k(s,"id",`${gh}-${t.store.flowId}`),mt(i,t.store.disableKeyboardA11y?t.store.ariaLabelConfig["node.a11yDescription.default"]:t.store.ariaLabelConfig["node.a11yDescription.keyboardDisabled"]),k(o,"id",`${vh}-${t.store.flowId}`),mt(a,t.store.ariaLabelConfig["edge.a11yDescription.default"])}),_(e,n),Pe()}const gh="svelte-flow__node-desc",vh="svelte-flow__edge-desc",Zk="svelte-flow__aria-live";var Jk=be("<div><!></div>");function Qk(e,t){Ne(t,!0);let n=te(t,"store",15),s=y(()=>Pt(t.node.data,()=>({}),!0)),i=y(()=>Pt(t.node.selected,!1)),o=y(()=>t.node.draggable),a=y(()=>t.node.selectable),r=y(()=>Pt(t.node.deletable,!0)),c=y(()=>t.node.connectable),d=y(()=>t.node.focusable),u=y(()=>Pt(t.node.hidden,!1)),f=y(()=>Pt(t.node.dragging,!1)),p=y(()=>Pt(t.node.style,"")),h=y(()=>t.node.class),g=y(()=>Pt(t.node.type,"default")),v=y(()=>t.node.parentId),b=y(()=>t.node.sourcePosition),x=y(()=>t.node.targetPosition),S=y(()=>Pt(t.node.measured,()=>({width:0,height:0}),!0).width),A=y(()=>Pt(t.node.measured,()=>({width:0,height:0}),!0).height),m=y(()=>t.node.initialWidth),D=y(()=>t.node.initialHeight),I=y(()=>t.node.width),P=y(()=>t.node.height),N=y(()=>t.node.dragHandle),L=y(()=>Pt(t.node.internals.z,0)),W=y(()=>t.node.internals.positionAbsolute.x),O=y(()=>t.node.internals.positionAbsolute.y),T=y(()=>t.node.internals.userNode),{id:M}=t.node,w=y(()=>l(o)??n().nodesDraggable),E=y(()=>l(a)??n().elementsSelectable),C=y(()=>l(c)??n().nodesConnectable),z=y(()=>hx(t.node)),K=y(()=>!!t.node.internals.handleBounds),B=y(()=>l(z)&&l(K)),Z=y(()=>l(d)??n().nodesFocusable);function Q(Te){return n().parentLookup.has(Te)}let ee=y(()=>Q(M)),de=ve(null),oe=null,Se=l(g),he=l(b),q=l(x),G=y(()=>n().nodeTypes[l(g)]??uh),se=y(()=>n().ariaLabelConfig),we={get value(){return l(C)}};dk(M),pk(we);let ie=y(()=>{const Te=l(S)===void 0?l(I)??l(m):l(I),Ve=l(A)===void 0?l(P)??l(D):l(P);if(!(Te===void 0&&Ve===void 0&&l(p)===void 0))return`${l(p)};${Te?`width:${yn(Te)};`:""}${Ve?`height:${yn(Ve)};`:""}`});je(()=>{(l(g)!==Se||l(b)!==he||l(x)!==q)&&l(de)!==null&&requestAnimationFrame(()=>{l(de)!==null&&n().updateNodeInternals(new Map([[M,{id:M,nodeElement:l(de),force:!0}]]))}),Se=l(g),he=l(b),q=l(x)}),je(()=>{t.resizeObserver&&(!l(B)||l(de)!==oe)&&(oe&&t.resizeObserver.unobserve(oe),l(de)&&t.resizeObserver.observe(l(de)),oe=l(de))}),Dn(()=>{oe&&t.resizeObserver?.unobserve(oe)});function me(Te){l(E)&&(!n().selectNodesOnDrag||!l(w)||n().nodeDragThreshold>0)&&n().handleNodeSelection(M),t.onnodeclick?.({node:l(T),event:Te})}function pe(Te){if(!(Zf(Te)||n().disableKeyboardA11y))if(Wf.includes(Te.key)&&l(E)){const Ve=Te.key==="Escape";n().handleNodeSelection(M,Ve,l(de))}else l(w)&&t.node.selected&&Object.prototype.hasOwnProperty.call(ml,Te.key)&&(Te.preventDefault(),n(n().ariaLiveMessage=l(se)["node.a11yDescription.ariaLiveMessage"]({direction:Te.key.replace("Arrow","").toLowerCase(),x:~~t.node.internals.positionAbsolute.x,y:~~t.node.internals.positionAbsolute.y}),!0),n().moveSelectedNodes(ml[Te.key],Te.shiftKey?4:1))}const Ee=()=>{if(n().disableKeyboardA11y||!n().autoPanOnNodeFocus||!l(de)?.matches(":focus-visible"))return;const{width:Te,height:Ve,viewport:ct}=n();fd(new Map([[M,t.node]]),{x:0,y:0,width:Te,height:Ve},[ct.x,ct.y,ct.zoom],!0).length>0||n().setCenter(t.node.position.x+(t.node.measured.width??0)/2,t.node.position.y+(t.node.measured.height??0)/2,{zoom:ct.zoom})};var _e=X(),xe=j(_e);{var Ce=Te=>{var Ve=Jk();ns(Ve,()=>({"data-id":M,class:["svelte-flow__node",`svelte-flow__node-${l(g)}`,l(h)],style:l(ie),onclick:me,onpointerenter:t.onnodepointerenter?Re=>t.onnodepointerenter({node:l(T),event:Re}):void 0,onpointerleave:t.onnodepointerleave?Re=>t.onnodepointerleave({node:l(T),event:Re}):void 0,onpointermove:t.onnodepointermove?Re=>t.onnodepointermove({node:l(T),event:Re}):void 0,oncontextmenu:t.onnodecontextmenu?Re=>t.onnodecontextmenu({node:l(T),event:Re}):void 0,onkeydown:l(Z)?pe:void 0,onfocus:l(Z)?Ee:void 0,tabIndex:l(Z)?0:void 0,role:t.node.ariaRole??(l(Z)?"group":void 0),"aria-roledescription":"node","aria-describedby":n().disableKeyboardA11y?void 0:`${gh}-${n().flowId}`,...t.node.domAttributes,[Xn]:{dragging:l(f),selected:l(i),draggable:l(w),connectable:l(C),selectable:l(E),nopan:l(w),parent:l(ee)},[In]:{"z-index":l(L),transform:`translate(${l(W)??""}px, ${l(O)??""}px)`,visibility:l(z)?"visible":"hidden"}}));var ct=ue(Ve);td(ct,()=>l(G),(Re,it)=>{it(Re,{get data(){return l(s)},get id(){return M},get selected(){return l(i)},get selectable(){return l(E)},get deletable(){return l(r)},get sourcePosition(){return l(b)},get targetPosition(){return l(x)},get zIndex(){return l(L)},get dragging(){return l(f)},get draggable(){return l(w)},get dragHandle(){return l(N)},get parentId(){return l(v)},get type(){return l(g)},get isConnectable(){return l(C)},get positionAbsoluteX(){return l(W)},get positionAbsoluteY(){return l(O)},get width(){return l(I)},get height(){return l(P)}})}),ce(Ve),vt(Ve,(Re,it)=>mh?.(Re,it),()=>({nodeId:M,isSelectable:l(E),disabled:!l(w),handleSelector:l(N),noDragClass:n().noDragClass,nodeClickDistance:t.nodeClickDistance,onNodeMouseDown:n().handleNodeSelection,onDrag:(Re,it,Ot,Ft)=>{t.onnodedrag?.({event:Re,targetNode:Ot,nodes:Ft})},onDragStart:(Re,it,Ot,Ft)=>{t.onnodedragstart?.({event:Re,targetNode:Ot,nodes:Ft})},onDragStop:(Re,it,Ot,Ft)=>{t.onnodedragstop?.({event:Re,targetNode:Ot,nodes:Ft})},store:n()})),tn(Ve,Re=>H(de,Re),()=>l(de)),_(Te,Ve)};V(xe,Te=>{l(u)||Te(Ce)})}_(e,_e),Pe()}var $k=be('<div class="svelte-flow__nodes"></div>');function e2(e,t){Ne(t,!0);let n=te(t,"store",15);const s=typeof ResizeObserver>"u"?null:new ResizeObserver(o=>{const a=new Map;o.forEach(r=>{const c=r.target.getAttribute("data-id");a.set(c,{id:c,nodeElement:r.target,force:!0})}),n().updateNodeInternals(a)});Dn(()=>{s?.disconnect()});var i=$k();_t(i,21,()=>n().visible.nodes.values(),o=>o.id,(o,a)=>{Qk(o,{get node(){return l(a)},get resizeObserver(){return s},get nodeClickDistance(){return t.nodeClickDistance},get onnodeclick(){return t.onnodeclick},get onnodepointerenter(){return t.onnodepointerenter},get onnodepointermove(){return t.onnodepointermove},get onnodepointerleave(){return t.onnodepointerleave},get onnodedrag(){return t.onnodedrag},get onnodedragstart(){return t.onnodedragstart},get onnodedragstop(){return t.onnodedragstop},get onnodecontextmenu(){return t.onnodecontextmenu},get store(){return n()},set store(r){n(r)}})}),ce(i),_(e,i),Pe()}var t2=Y('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');function n2(e,t){Ne(t,!0);let n=y(()=>t.edge.id),s=y(()=>t.edge.source),i=y(()=>t.edge.target),o=y(()=>t.edge.sourceX),a=y(()=>t.edge.sourceY),r=y(()=>t.edge.targetX),c=y(()=>t.edge.targetY),d=y(()=>t.edge.sourcePosition),u=y(()=>t.edge.targetPosition),f=y(()=>Pt(t.edge.animated,!1)),p=y(()=>Pt(t.edge.selected,!1)),h=y(()=>t.edge.label),g=y(()=>t.edge.labelStyle),v=y(()=>Pt(t.edge.data,()=>({}),!0)),b=y(()=>t.edge.style),x=y(()=>t.edge.interactionWidth),S=y(()=>Pt(t.edge.type,"default")),A=y(()=>t.edge.sourceHandle),m=y(()=>t.edge.targetHandle),D=y(()=>t.edge.markerStart),I=y(()=>t.edge.markerEnd),P=y(()=>t.edge.selectable),N=y(()=>t.edge.focusable),L=y(()=>Pt(t.edge.deletable,!0)),W=y(()=>t.edge.hidden),O=y(()=>t.edge.zIndex),T=y(()=>t.edge.class),M=y(()=>t.edge.ariaLabel);hk(l(n));let w=null,E=y(()=>l(P)??t.store.elementsSelectable),C=y(()=>l(N)??t.store.edgesFocusable),z=y(()=>t.store.edgeTypes[l(S)]??ph),K=y(()=>l(D)?`url('#${Ac(l(D),t.store.flowId)}')`:void 0),B=y(()=>l(I)?`url('#${Ac(l(I),t.store.flowId)}')`:void 0);function Z(he){const q=t.store.edgeLookup.get(l(n));q&&(l(E)&&t.store.handleEdgeSelection(l(n)),t.onedgeclick?.({event:he,edge:q}))}function Q(he,q){const G=t.store.edgeLookup.get(l(n));G&&q({event:he,edge:G})}function ee(he){if(!t.store.disableKeyboardA11y&&Wf.includes(he.key)&&l(E)){const{unselectNodesAndEdges:q,addSelectedEdges:G}=t.store;he.key==="Escape"?(w?.blur(),q({edges:[t.edge]})):G([l(n)])}}var de=X(),oe=j(de);{var Se=he=>{var q=t2();let G;var se=ue(q);ns(se,()=>({class:["svelte-flow__edge",l(T)],"data-id":l(n),onclick:Z,oncontextmenu:t.onedgecontextmenu?ie=>{Q(ie,t.onedgecontextmenu)}:void 0,onpointerenter:t.onedgepointerenter?ie=>{Q(ie,t.onedgepointerenter)}:void 0,onpointerleave:t.onedgepointerleave?ie=>{Q(ie,t.onedgepointerleave)}:void 0,"aria-label":l(M)===null?void 0:l(M)?l(M):`Edge from ${l(s)} to ${l(i)}`,"aria-describedby":l(C)?`${vh}-${t.store.flowId}`:void 0,role:t.edge.ariaRole??(l(C)?"group":"img"),"aria-roledescription":"edge",onkeydown:l(C)?ee:void 0,tabindex:l(C)?0:void 0,...t.edge.domAttributes,[Xn]:{animated:l(f),selected:l(p),selectable:l(E)}}));var we=ue(se);td(we,()=>l(z),(ie,me)=>{me(ie,{get id(){return l(n)},get source(){return l(s)},get target(){return l(i)},get sourceX(){return l(o)},get sourceY(){return l(a)},get targetX(){return l(r)},get targetY(){return l(c)},get sourcePosition(){return l(d)},get targetPosition(){return l(u)},get animated(){return l(f)},get selected(){return l(p)},get label(){return l(h)},get labelStyle(){return l(g)},get data(){return l(v)},get style(){return l(b)},get interactionWidth(){return l(x)},get selectable(){return l(E)},get deletable(){return l(L)},get type(){return l(S)},get sourceHandleId(){return l(A)},get targetHandleId(){return l(m)},get markerStart(){return l(K)},get markerEnd(){return l(B)}})}),ce(se),tn(se,ie=>w=ie,()=>w),ce(q),F(()=>G=st(q,"",G,{"z-index":l(O)})),_(he,q)};V(oe,he=>{l(W)||he(Se)})}_(e,de),Pe()}var s2=Y("<defs></defs>");function i2(e,t){Ne(t,!1);const n=ss();lb();var s=s2();_t(s,5,()=>n.markers,i=>i.id,(i,o)=>{l2(i,nl(()=>l(o)))}),ce(s),_(e,s),Pe()}var o2=Y('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'),a2=Y('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'),r2=Y('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');function l2(e,t){Ne(t,!0);let n=te(t,"width",3,12.5),s=te(t,"height",3,12.5),i=te(t,"markerUnits",3,"strokeWidth"),o=te(t,"orient",3,"auto-start-reverse"),a=te(t,"color",3,"none");var r=r2(),c=ue(r);{var d=f=>{var p=o2();let h;F(()=>{k(p,"stroke-width",t.strokeWidth),h=st(p,"",h,{stroke:a()})}),_(f,p)},u=f=>{var p=X(),h=j(p);{var g=v=>{var b=a2();let x;F(()=>{k(b,"stroke-width",t.strokeWidth),x=st(b,"",x,{stroke:a(),fill:a()})}),_(v,b)};V(h,v=>{t.type===ul.ArrowClosed&&v(g)},!0)}_(f,p)};V(c,f=>{t.type===ul.Arrow?f(d):f(u,!1)})}ce(r),F(()=>{k(r,"id",t.id),k(r,"markerWidth",`${n()}`),k(r,"markerHeight",`${s()}`),k(r,"markerUnits",i()),k(r,"orient",o())}),_(e,r),Pe()}var c2=be('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');function d2(e,t){Ne(t,!0);let n=te(t,"store",15);var s=c2(),i=ue(s),o=ue(i);i2(o,{}),ce(i);var a=ye(i,2);_t(a,17,()=>n().visible.edges.values(),r=>r.id,(r,c)=>{n2(r,{get edge(){return l(c)},get onedgeclick(){return t.onedgeclick},get onedgecontextmenu(){return t.onedgecontextmenu},get onedgepointerenter(){return t.onedgepointerenter},get onedgepointerleave(){return t.onedgepointerleave},get store(){return n()},set store(d){n(d)}})}),ce(s),_(e,s),Pe()}var u2=be('<div class="svelte-flow__selection svelte-1vr3gfi"></div>');function yh(e,t){Ne(t,!0);let n=te(t,"x",3,0),s=te(t,"y",3,0),i=te(t,"width",3,0),o=te(t,"height",3,0),a=te(t,"isVisible",3,!0);var r=X(),c=j(r);{var d=u=>{var f=u2();let p;F(h=>p=st(f,"",p,h),[()=>({width:typeof i()=="string"?i():yn(i()),height:typeof o()=="string"?o():yn(o()),transform:`translate(${n()}px, ${s()}px)`})]),_(u,f)};V(c,u=>{a()&&u(d)})}_(e,r),Pe()}var p2=be("<div><!></div>");function f2(e,t){Ne(t,!0);let n=ve(void 0);je(()=>{t.store.disableKeyboardA11y||l(n)?.focus({preventScroll:!0})});let s=y(()=>{if(t.store.selectionRectMode==="nodes"){t.store.nodes;const u=Ol(t.store.nodeLookup,{filter:f=>!!f.selected});if(u.width>0&&u.height>0)return u}return null});function i(u){const f=t.store.nodes.filter(p=>p.selected);t.onselectioncontextmenu?.({nodes:f,event:u})}function o(u){const f=t.store.nodes.filter(p=>p.selected);t.onselectionclick?.({nodes:f,event:u})}function a(u){Object.prototype.hasOwnProperty.call(ml,u.key)&&(u.preventDefault(),t.store.moveSelectedNodes(ml[u.key],u.shiftKey?4:1))}var r=X(),c=j(r);{var d=u=>{var f=p2();f.__contextmenu=i,f.__click=o,f.__keydown=function(...g){(t.store.disableKeyboardA11y?void 0:a)?.apply(this,g)};let p;var h=ue(f);yh(h,{width:"100%",height:"100%",x:0,y:0}),ce(f),vt(f,(g,v)=>mh?.(g,v),()=>({disabled:!1,store:t.store,onDrag:(g,v,b,x)=>{t.onnodedrag?.({event:g,targetNode:null,nodes:x})},onDragStart:(g,v,b,x)=>{t.onnodedragstart?.({event:g,targetNode:null,nodes:x})},onDragStop:(g,v,b,x)=>{t.onnodedragstop?.({event:g,targetNode:null,nodes:x})}})),tn(f,g=>H(n,g),()=>l(n)),F(g=>{Qe(f,1,Cs(["svelte-flow__selection-wrapper",t.store.noPanClass]),"svelte-sf2y5e"),k(f,"role",t.store.disableKeyboardA11y?void 0:"button"),k(f,"tabindex",t.store.disableKeyboardA11y?void 0:-1),p=st(f,"",p,g)},[()=>({width:yn(l(s).width),height:yn(l(s).height),transform:`translate(${l(s).x??""}px, ${l(s).y??""}px)`})]),_(u,f)};V(c,u=>{t.store.selectionRectMode==="nodes"&&l(s)&&Cn(l(s).x)&&Cn(l(s).y)&&u(d)})}_(e,r),Pe()}zn(["contextmenu","click","keydown"]);function h2(e){switch(e){case"ctrl":return 8;case"shift":return 4;case"alt":return 2;case"meta":return 1}}function cn(e,t){let{enabled:n=!0,trigger:s,type:i="keydown"}=t;function o(r){const c=Array.isArray(s)?s:[s],d=[r.metaKey,r.altKey,r.shiftKey,r.ctrlKey].reduce((u,f,p)=>f?u|1<<p:u,0);for(const u of c){const f={preventDefault:!1,enabled:!0,...u},{modifier:p,key:h,callback:g,preventDefault:v,enabled:b}=f;if(b){if(r.key!==h)continue;if(p===null||p===!1){if(d!==0)continue}else if(p!==void 0&&p?.[0]?.length>0){const S=Array.isArray(p)?p:[p];let A=!1;for(const m of S)if((Array.isArray(m)?m:[m]).reduce((I,P)=>I|h2(P),0)===d){A=!0;break}if(!A)continue}v&&r.preventDefault();const x={node:e,trigger:f,originalEvent:r};e.dispatchEvent(new CustomEvent("shortcut",{detail:x})),g?.(x)}}}let a;return n&&(a=yc(e,i,o)),{update:r=>{const{enabled:c=!0,type:d="keydown"}=r;n&&(!c||i!==d)?a?.():!n&&c&&(a=yc(e,d,o)),n=c,i=d,s=r.trigger},destroy:()=>{a?.()}}}function bh(){const e=y(ss),t=o=>{const a=Fu(o)?o:l(e).nodeLookup.get(o.id),r=a.parentId?mx(a.position,a.measured,a.parentId,l(e).nodeLookup,l(e).nodeOrigin):a.position,c={...a,position:r,width:a.measured?.width??a.width,height:a.measured?.height??a.height};return pa(c)};function n(o,a,r={replace:!1}){l(e).nodes=Zn(()=>l(e).nodes).map(c=>{if(c.id===o){const d=typeof a=="function"?a(c):a;return r?.replace&&Fu(d)?d:{...c,...d}}return c})}function s(o,a,r={replace:!1}){l(e).edges=Zn(()=>l(e).edges).map(c=>{if(c.id===o){const d=typeof a=="function"?a(c):a;return r.replace&&Sk(d)?d:{...c,...d}}return c})}const i=o=>l(e).nodeLookup.get(o);return{zoomIn:l(e).zoomIn,zoomOut:l(e).zoomOut,getInternalNode:i,getNode:o=>i(o)?.internals.userNode,getNodes:o=>o===void 0?l(e).nodes:Ku(l(e).nodeLookup,o),getEdge:o=>l(e).edgeLookup.get(o),getEdges:o=>o===void 0?l(e).edges:Ku(l(e).edgeLookup,o),setZoom:(o,a)=>{const r=l(e).panZoom;return r?r.scaleTo(o,{duration:a?.duration}):Promise.resolve(!1)},getZoom:()=>l(e).viewport.zoom,setViewport:async(o,a)=>{const r=l(e).viewport;return l(e).panZoom?(await l(e).panZoom.setViewport({x:o.x??r.x,y:o.y??r.y,zoom:o.zoom??r.zoom},a),Promise.resolve(!0)):Promise.resolve(!1)},getViewport:()=>lf(l(e).viewport),setCenter:async(o,a,r)=>l(e).setCenter(o,a,r),fitView:o=>l(e).fitView(o),fitBounds:async(o,a)=>{if(!l(e).panZoom)return Promise.resolve(!1);const r=hd(o,l(e).width,l(e).height,l(e).minZoom,l(e).maxZoom,a?.padding??.1);return await l(e).panZoom.setViewport(r,{duration:a?.duration,ease:a?.ease,interpolate:a?.interpolate}),Promise.resolve(!0)},getIntersectingNodes:(o,a=!0,r)=>{const c=Eu(o),d=c?o:t(o);return d?(r||l(e).nodes).filter(u=>{const f=l(e).nodeLookup.get(u.id);if(!f||!c&&u.id===o.id)return!1;const p=pa(f),h=cr(p,d);return a&&h>0||h>=p.width*p.height||h>=d.width*d.height}):[]},isNodeIntersecting:(o,a,r=!0)=>{const d=Eu(o)?o:t(o);if(!d)return!1;const u=cr(d,a);return r&&u>0||u>=a.width*a.height||u>=d.width*d.height},deleteElements:async({nodes:o=[],edges:a=[]})=>{const{nodes:r,edges:c}=await cx({nodesToRemove:o,edgesToRemove:a,nodes:l(e).nodes,edges:l(e).edges,onBeforeDelete:l(e).onbeforedelete});return r&&(l(e).nodes=Zn(()=>l(e).nodes).filter(d=>!r.some(({id:u})=>u===d.id))),c&&(l(e).edges=Zn(()=>l(e).edges).filter(d=>!c.some(({id:u})=>u===d.id))),(r.length>0||c.length>0)&&l(e).ondelete?.({nodes:r,edges:c}),{deletedNodes:r,deletedEdges:c}},screenToFlowPosition:(o,a={snapToGrid:!0})=>{if(!l(e).domNode)return o;const r=a.snapToGrid?l(e).snapGrid:!1,{x:c,y:d,zoom:u}=l(e).viewport,{x:f,y:p}=l(e).domNode.getBoundingClientRect(),h={x:o.x-f,y:o.y-p};return yr(h,[c,d,u],r!==null,r||[1,1])},flowToScreenPosition:o=>{if(!l(e).domNode)return o;const{x:a,y:r,zoom:c}=l(e).viewport,{x:d,y:u}=l(e).domNode.getBoundingClientRect(),f=fl(o,[a,r,c]);return{x:f.x+d,y:f.y+u}},toObject:()=>structuredClone({nodes:[...l(e).nodes],edges:[...l(e).edges],viewport:{...l(e).viewport}}),updateNode:n,updateNodeData:(o,a,r)=>{const c=l(e).nodeLookup.get(o)?.internals.userNode;if(!c)return;const d=typeof a=="function"?a(c):a;n(o,u=>({...u,data:r?.replace?d:{...u.data,...d}}))},updateEdge:s,getNodesBounds:o=>ox(o,{nodeLookup:l(e).nodeLookup,nodeOrigin:l(e).nodeOrigin}),getHandleConnections:({type:o,id:a,nodeId:r})=>Array.from(l(e).connectionLookup.get(`${r}-${o}-${a??null}`)?.values()??[])}}function Ku(e,t){const n=[];for(const s of t){const i=e.get(s);if(i){const o="internals"in i?i.internals?.userNode:i;n.push(o)}}return n}function m2(e,t){Ne(t,!0);let n=te(t,"store",15),s=te(t,"selectionKey",3,"Shift"),i=te(t,"multiSelectionKey",19,()=>hl()?"Meta":"Control"),o=te(t,"deleteKey",3,"Backspace"),a=te(t,"panActivationKey",3," "),r=te(t,"zoomActivationKey",19,()=>hl()?"Meta":"Control"),{deleteElements:c}=bh();function d(v){return v!==null&&typeof v=="object"}function u(v){return d(v)?v.modifier||[]:[]}function f(v){return v==null?"":d(v)?v.key:v}function p(v,b){return(Array.isArray(v)?v:[v]).map(S=>{const A=f(S);return{key:A,modifier:u(S),enabled:A!==null,callback:b}})}function h(){n(n().selectionRect=null,!0),n(n().selectionKeyPressed=!1,!0),n(n().multiselectionKeyPressed=!1,!0),n(n().deleteKeyPressed=!1,!0),n(n().panActivationKeyPressed=!1,!0),n(n().zoomActivationKeyPressed=!1,!0)}function g(){const v=n().nodes.filter(x=>x.selected),b=n().edges.filter(x=>x.selected);c({nodes:v,edges:b})}Et("blur",Lt,h),Et("contextmenu",Lt,h),vt(Lt,(v,b)=>cn?.(v,b),()=>({trigger:p(s(),()=>n(n().selectionKeyPressed=!0,!0)),type:"keydown"})),vt(Lt,(v,b)=>cn?.(v,b),()=>({trigger:p(s(),()=>n(n().selectionKeyPressed=!1,!0)),type:"keyup"})),vt(Lt,(v,b)=>cn?.(v,b),()=>({trigger:p(i(),()=>{n(n().multiselectionKeyPressed=!0,!0)}),type:"keydown"})),vt(Lt,(v,b)=>cn?.(v,b),()=>({trigger:p(i(),()=>n(n().multiselectionKeyPressed=!1,!0)),type:"keyup"})),vt(Lt,(v,b)=>cn?.(v,b),()=>({trigger:p(o(),v=>{!(v.originalEvent.ctrlKey||v.originalEvent.metaKey||v.originalEvent.shiftKey)&&!Zf(v.originalEvent)&&(n(n().deleteKeyPressed=!0,!0),g())}),type:"keydown"})),vt(Lt,(v,b)=>cn?.(v,b),()=>({trigger:p(o(),()=>n(n().deleteKeyPressed=!1,!0)),type:"keyup"})),vt(Lt,(v,b)=>cn?.(v,b),()=>({trigger:p(a(),()=>n(n().panActivationKeyPressed=!0,!0)),type:"keydown"})),vt(Lt,(v,b)=>cn?.(v,b),()=>({trigger:p(a(),()=>n(n().panActivationKeyPressed=!1,!0)),type:"keyup"})),vt(Lt,(v,b)=>cn?.(v,b),()=>({trigger:p(r(),()=>n(n().zoomActivationKeyPressed=!0,!0)),type:"keydown"})),vt(Lt,(v,b)=>cn?.(v,b),()=>({trigger:p(r(),()=>n(n().zoomActivationKeyPressed=!1,!0)),type:"keyup"})),Pe()}var g2=Y('<path fill="none" class="svelte-flow__connection-path"></path>'),v2=Y('<svg class="svelte-flow__connectionline"><g><!></g></svg>');function y2(e,t){Ne(t,!0);let n=y(()=>{if(!t.store.connection.inProgress)return"";const a={sourceX:t.store.connection.from.x,sourceY:t.store.connection.from.y,sourcePosition:t.store.connection.fromPosition,targetX:t.store.connection.to.x,targetY:t.store.connection.to.y,targetPosition:t.store.connection.toPosition};switch(t.type){case Un.Bezier:{const[r]=Qf(a);return r}case Un.Straight:{const[r]=eh(a);return r}case Un.Step:case Un.SmoothStep:{const[r]=zl({...a,borderRadius:t.type===Un.Step?0:void 0});return r}}});var s=X(),i=j(s);{var o=a=>{var r=v2(),c=ue(r),d=ue(c);{var u=p=>{var h=X(),g=j(h);td(g,()=>t.LineComponent,(v,b)=>{b(v,{})}),_(p,h)},f=p=>{var h=g2();F(()=>{k(h,"d",l(n)),st(h,t.style)}),_(p,h)};V(d,p=>{t.LineComponent?p(u):p(f,!1)})}ce(c),ce(r),F(p=>{k(r,"width",t.store.width),k(r,"height",t.store.height),st(r,t.containerStyle),Qe(c,0,p)},[()=>Cs(["svelte-flow__connection",sx(t.store.connection.isValid)])]),_(a,r)};V(i,a=>{t.store.connection.inProgress&&a(o)})}_(e,s),Pe()}var b2=be("<div><!></div>");function w2(e,t){Ne(t,!0);let n=te(t,"position",3,"top-right"),s=Ts(t,["$$slots","$$events","$$legacy","position","style","class","children"]),i=y(()=>`${n()}`.split("-"));var o=b2();ns(o,r=>({class:r,style:t.style,...s}),[()=>["svelte-flow__panel",t.class,...l(i)]]);var a=ue(o);Hn(a,()=>t.children??_a),ce(o),_(e,o),Pe()}var _2=be('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');function x2(e,t){Ne(t,!0);let n=te(t,"position",3,"bottom-right");var s=X(),i=j(s);{var o=a=>{w2(a,{get position(){return n()},class:"svelte-flow__attribution","data-message":"Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",children:(r,c)=>{var d=_2();_(r,d)},$$slots:{default:!0}})};V(i,a=>{t.proOptions?.hideAttribution||a(o)})}_(e,s),Pe()}var k2=be("<div><!></div>");function S2(e,t){Ne(t,!0);let n=te(t,"domNode",15),s=te(t,"clientWidth",15),i=te(t,"clientHeight",15),o=y(()=>t.rest.class),a=y(()=>J0(t.rest,["id","class","nodeTypes","edgeTypes","colorMode","isValidConnection","onmove","onmovestart","onmoveend","onflowerror","ondelete","onbeforedelete","onbeforeconnect","onconnect","onconnectstart","onconnectend","onbeforereconnect","onreconnect","onreconnectstart","onreconnectend","onclickconnectstart","onclickconnectend","oninit","onselectionchange","onselectiondragstart","onselectiondrag","onselectiondragstop","onselectionstart","onselectionend","clickConnect","fitView","fitViewOptions","nodeOrigin","nodeDragThreshold","connectionDragThreshold","minZoom","maxZoom","initialViewport","connectionRadius","connectionMode","selectionMode","selectNodesOnDrag","snapGrid","defaultMarkerColor","translateExtent","nodeExtent","onlyRenderVisibleElements","autoPanOnConnect","autoPanOnNodeDrag","colorModeSSR","defaultEdgeOptions","elevateNodesOnSelect","elevateEdgesOnSelect","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","elementsSelectable","nodesFocusable","edgesFocusable","disableKeyboardA11y","noDragClass","noPanClass","noWheelClass","ariaLabelConfig","autoPanSpeed","panOnScrollSpeed","zIndexMode"]));function r(u){u.currentTarget.scrollTo({top:0,left:0,behavior:"auto"}),t.rest.onscroll&&t.rest.onscroll(u)}var c=k2();ns(c,u=>({class:["svelte-flow","svelte-flow__container",l(o),t.colorMode],"data-testid":"svelte-flow__wrapper",role:"application",onscroll:r,...l(a),[In]:u}),[()=>({width:yn(t.width),height:yn(t.height)})],void 0,void 0,"svelte-mkap6j");var d=ue(c);Hn(d,()=>t.children??_a),ce(c),tn(c,u=>n(u),()=>n()),ou(c,"clientHeight",i),ou(c,"clientWidth",s),_(e,c),Pe()}var I2=be('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>',1),E2=be("<!> <!>",1),T2=be("<!> <!> <!> <!> <!>",1);function C2(e,t){Ne(t,!0);let n=te(t,"paneClickDistance",3,1),s=te(t,"nodeClickDistance",3,1),i=te(t,"panOnScrollMode",19,()=>aa.Free),o=te(t,"preventScrolling",3,!0),a=te(t,"zoomOnScroll",3,!0),r=te(t,"zoomOnDoubleClick",3,!0),c=te(t,"zoomOnPinch",3,!0),d=te(t,"panOnScroll",3,!1),u=te(t,"panOnScrollSpeed",3,.5),f=te(t,"panOnDrag",3,!0),p=te(t,"selectionOnDrag",3,!1),h=te(t,"connectionLineType",19,()=>Un.Bezier),g=te(t,"nodes",31,()=>qt([])),v=te(t,"edges",31,()=>qt([])),b=te(t,"viewport",15,void 0),x=Ts(t,["$$slots","$$events","$$legacy","width","height","proOptions","selectionKey","deleteKey","panActivationKey","multiSelectionKey","zoomActivationKey","paneClickDistance","nodeClickDistance","onmovestart","onmoveend","onmove","oninit","onnodeclick","onnodecontextmenu","onnodedrag","onnodedragstart","onnodedragstop","onnodepointerenter","onnodepointermove","onnodepointerleave","onselectionclick","onselectioncontextmenu","onselectionstart","onselectionend","onedgeclick","onedgecontextmenu","onedgepointerenter","onedgepointerleave","onpaneclick","onpanecontextmenu","panOnScrollMode","preventScrolling","zoomOnScroll","zoomOnDoubleClick","zoomOnPinch","panOnScroll","panOnScrollSpeed","panOnDrag","selectionOnDrag","connectionLineComponent","connectionLineStyle","connectionLineContainerStyle","connectionLineType","attributionPosition","children","nodes","edges","viewport"]),S=Fk({props:x,width:t.width,height:t.height,get nodes(){return g()},set nodes(m){g(m)},get edges(){return v()},set edges(m){v(m)},get viewport(){return b()},set viewport(m){b(m)}});const A=$c(Dc);A&&A.setStore&&A.setStore(S),nf(Dc,{provider:!1,getStore(){return S}}),je(()=>{const m={nodes:S.selectedNodes,edges:S.selectedEdges};Zn(()=>t.onselectionchange)?.(m);for(const D of S.selectionChangeHandlers.values())D(m)}),Dn(()=>{S.reset()}),S2(e,{get colorMode(){return S.colorMode},get width(){return t.width},get height(){return t.height},get rest(){return x},get domNode(){return S.domNode},set domNode(m){S.domNode=m},get clientWidth(){return S.width},set clientWidth(m){S.width=m},get clientHeight(){return S.height},set clientHeight(m){S.height=m},children:(m,D)=>{var I=T2(),P=j(I);m2(P,{get selectionKey(){return t.selectionKey},get deleteKey(){return t.deleteKey},get panActivationKey(){return t.panActivationKey},get multiSelectionKey(){return t.multiSelectionKey},get zoomActivationKey(){return t.zoomActivationKey},get store(){return S},set store(T){S=T}});var N=ye(P,2);Vk(N,{get panOnScrollMode(){return i()},get preventScrolling(){return o()},get zoomOnScroll(){return a()},get zoomOnDoubleClick(){return r()},get zoomOnPinch(){return c()},get panOnScroll(){return d()},get panOnScrollSpeed(){return u()},get panOnDrag(){return f()},get paneClickDistance(){return n()},get selectionOnDrag(){return p()},get onmovestart(){return t.onmovestart},get onmove(){return t.onmove},get onmoveend(){return t.onmoveend},get oninit(){return t.oninit},get store(){return S},set store(T){S=T},children:(T,M)=>{Kk(T,{get onpaneclick(){return t.onpaneclick},get onpanecontextmenu(){return t.onpanecontextmenu},get onselectionstart(){return t.onselectionstart},get onselectionend(){return t.onselectionend},get panOnDrag(){return f()},get paneClickDistance(){return n()},get selectionOnDrag(){return p()},get store(){return S},set store(w){S=w},children:(w,E)=>{var C=E2(),z=j(C);jk(z,{get store(){return S},set store(B){S=B},children:(B,Z)=>{var Q=I2(),ee=ye(j(Q),2);d2(ee,{get onedgeclick(){return t.onedgeclick},get onedgecontextmenu(){return t.onedgecontextmenu},get onedgepointerenter(){return t.onedgepointerenter},get onedgepointerleave(){return t.onedgepointerleave},get store(){return S},set store(he){S=he}});var de=ye(ee,4);y2(de,{get type(){return h()},get LineComponent(){return t.connectionLineComponent},get containerStyle(){return t.connectionLineContainerStyle},get style(){return t.connectionLineStyle},get store(){return S},set store(he){S=he}});var oe=ye(de,2);e2(oe,{get nodeClickDistance(){return s()},get onnodeclick(){return t.onnodeclick},get onnodecontextmenu(){return t.onnodecontextmenu},get onnodepointerenter(){return t.onnodepointerenter},get onnodepointermove(){return t.onnodepointermove},get onnodepointerleave(){return t.onnodepointerleave},get onnodedrag(){return t.onnodedrag},get onnodedragstart(){return t.onnodedragstart},get onnodedragstop(){return t.onnodedragstop},get store(){return S},set store(he){S=he}});var Se=ye(oe,2);f2(Se,{get onselectionclick(){return t.onselectionclick},get onselectioncontextmenu(){return t.onselectioncontextmenu},get onnodedrag(){return t.onnodedrag},get onnodedragstart(){return t.onnodedragstart},get onnodedragstop(){return t.onnodedragstop},get store(){return S},set store(he){S=he}}),El(2),_(B,Q)},$$slots:{default:!0}});var K=ye(z,2);{let B=y(()=>!!(S.selectionRect&&S.selectionRectMode==="user")),Z=y(()=>S.selectionRect?.width),Q=y(()=>S.selectionRect?.height),ee=y(()=>S.selectionRect?.x),de=y(()=>S.selectionRect?.y);yh(K,{get isVisible(){return l(B)},get width(){return l(Z)},get height(){return l(Q)},get x(){return l(ee)},get y(){return l(de)}})}_(w,C)},$$slots:{default:!0}})},$$slots:{default:!0}});var L=ye(N,2);x2(L,{get proOptions(){return t.proOptions},get position(){return t.attributionPosition}});var W=ye(L,2);Uk(W,{get store(){return S}});var O=ye(W,2);Hn(O,()=>t.children??_a),_(m,I)},$$slots:{default:!0}}),Pe()}var Pn;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(Pn||(Pn={}));var N2=Y("<circle></circle>");function P2(e,t){var n=N2();F(()=>{k(n,"cx",t.radius),k(n,"cy",t.radius),k(n,"r",t.radius),Qe(n,0,Cs(["svelte-flow__background-pattern","dots",t.class]))}),_(e,n)}var M2=Y("<path></path>");function A2(e,t){Ne(t,!0);var n=M2();F(()=>{k(n,"stroke-width",t.lineWidth),k(n,"d",`M${t.dimensions[0]/2} 0 V${t.dimensions[1]} M0 ${t.dimensions[1]/2} H${t.dimensions[0]}`),Qe(n,0,Cs(["svelte-flow__background-pattern",t.variant,t.class]))}),_(e,n),Pe()}const D2={[Pn.Dots]:1,[Pn.Lines]:1,[Pn.Cross]:6};var O2=Y('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');function R2(e,t){Ne(t,!0);let n=te(t,"variant",19,()=>Pn.Dots),s=te(t,"gap",3,20),i=te(t,"lineWidth",3,1),o=y(ss),a=y(()=>n()===Pn.Dots),r=y(()=>n()===Pn.Cross),c=y(()=>Array.isArray(s())?s():[s(),s()]),d=y(()=>`background-pattern-${l(o).flowId}-${t.id??""}`),u=y(()=>[l(c)[0]*l(o).viewport.zoom||1,l(c)[1]*l(o).viewport.zoom||1]),f=y(()=>(t.size??D2[n()])*l(o).viewport.zoom),p=y(()=>l(r)?[l(f),l(f)]:l(u)),h=y(()=>l(a)?[l(f)/2,l(f)/2]:[l(p)[0]/2,l(p)[1]/2]);var g=O2();let v;var b=ue(g),x=ue(b);{var S=D=>{{let I=y(()=>l(f)/2);P2(D,{get radius(){return l(I)},get class(){return t.patternClass}})}},A=D=>{A2(D,{get dimensions(){return l(p)},get variant(){return n()},get lineWidth(){return i()},get class(){return t.patternClass}})};V(x,D=>{l(a)?D(S):D(A,!1)})}ce(b);var m=ye(b);ce(g),F(()=>{Qe(g,0,Cs(["svelte-flow__background","svelte-flow__container",t.class])),v=st(g,"",v,{"--xy-background-color-props":t.bgColor,"--xy-background-pattern-color-props":t.patternColor}),k(b,"id",l(d)),k(b,"x",l(o).viewport.x%l(u)[0]),k(b,"y",l(o).viewport.y%l(u)[1]),k(b,"width",l(u)[0]),k(b,"height",l(u)[1]),k(b,"patternTransform",`translate(-${l(h)[0]},-${l(h)[1]})`),k(m,"fill",`url(#${l(d)})`)}),_(e,g),Pe()}var L2=be("<div><!></div>");function Gu(e,t){Ne(t,!0);let n=te(t,"variant",19,()=>dr.Handle),s=te(t,"minWidth",3,10),i=te(t,"minHeight",3,10),o=te(t,"maxWidth",19,()=>Number.MAX_VALUE),a=te(t,"maxHeight",19,()=>Number.MAX_VALUE),r=te(t,"keepAspectRatio",3,!1),c=te(t,"autoScale",3,!0),d=Ts(t,["$$slots","$$events","$$legacy","nodeId","position","variant","color","minWidth","minHeight","maxWidth","maxHeight","keepAspectRatio","resizeDirection","autoScale","shouldResize","onResizeStart","onResize","onResizeEnd","class","children"]);const u=ss(),f=wd();let p=y(()=>typeof t.nodeId=="string"?t.nodeId:f);if(!l(p))throw new Error("Either pass a nodeId or use within a Custom Node component");let h,g=ve(null),v=y(()=>n()===dr.Line),b=y(()=>{let m=l(v)?"right":"bottom-right";return t.position??m}),x=y(()=>l(b).split("-"));ed(()=>(h&&H(g,ck({domNode:h,nodeId:l(p),getStoreItems:()=>({nodeLookup:u.nodeLookup,transform:[u.viewport.x,u.viewport.y,u.viewport.zoom],snapGrid:u.snapGrid??void 0,snapToGrid:!!u.snapGrid,nodeOrigin:u.nodeOrigin,paneDomNode:u.domNode}),onChange:(m,D)=>{const I=new Map;I.set(l(p),m);for(const P of D)I.set(P.id,{x:P.position.x,y:P.position.y});u.nodes=u.nodes.map(P=>{const N=I.get(P.id),L=!t.resizeDirection||t.resizeDirection==="horizontal",W=!t.resizeDirection||t.resizeDirection==="vertical";return N?{...P,position:{x:L?N.x??P.position.x:P.position.x,y:W?N.y??P.position.y:P.position.y},width:L?N.width??P.width:P.width,height:W?N.height??P.height:P.height}:P})}}),!0),()=>{l(g)?.destroy()})),sf(()=>{l(g)?.update({controlPosition:l(b),boundaries:{minWidth:s(),minHeight:i(),maxWidth:o(),maxHeight:a()},keepAspectRatio:!!r(),resizeDirection:t.resizeDirection,onResizeStart:t.onResizeStart,onResize:t.onResize,onResizeEnd:t.onResizeEnd,shouldResize:t.shouldResize})});var S=L2();ns(S,(m,D)=>({class:m,...d,[In]:D}),[()=>["svelte-flow__resize-control",u.noDragClass,...l(x),n(),t.class],()=>({"border-color":l(v)?t.color:void 0,"background-color":l(v)?void 0:t.color,scale:l(v)||!c()?void 0:Math.max(1/u.viewport.zoom,1)})]);var A=ue(S);Hn(A,()=>t.children??_a),ce(S),tn(S,m=>h=m,()=>h),_(e,S),Pe()}var z2=be("<!> <!>",1);function H2(e,t){Ne(t,!0);let n=te(t,"isVisible",3,!0),s=te(t,"autoScale",3,!0),i=Ts(t,["$$slots","$$events","$$legacy","isVisible","nodeId","handleClass","handleStyle","lineClass","lineStyle","autoScale"]);var o=X(),a=j(o);{var r=c=>{var d=z2(),u=j(d);_t(u,16,()=>sk,p=>p,(p,h)=>{Gu(p,nl({get class(){return t.lineClass},get style(){return t.lineStyle},get nodeId(){return t.nodeId},get position(){return h},get autoScale(){return s()},get variant(){return dr.Line}},()=>i))});var f=ye(u,2);_t(f,16,()=>nk,p=>p,(p,h)=>{Gu(p,nl({get class(){return t.handleClass},get style(){return t.handleStyle},get nodeId(){return t.nodeId},get position(){return h},get autoScale(){return s()}},()=>i))}),_(c,d)};V(a,c=>{n()&&c(r)})}_(e,o),Pe()}function wh(){const e=y(ss),t=y(()=>l(e).domNode),n=y(()=>l(e).updateNodeInternals),s=wd();return o=>{if(!o&&!s)throw new Error("When using outside of a node, you must provide an id.");const a=o?Array.isArray(o)?o:[o]:[s],r=new Map;a.forEach(c=>{const d=l(t)?.querySelector(`.svelte-flow__node[data-id="${c}"]`);d&&r.set(c,{id:c,nodeElement:d,force:!0})}),requestAnimationFrame(()=>l(n)(r))}}function F2(e){return e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||!!e.target?.closest?.(".cm-editor")}const B2=Ie("normal"),q2=()=>U(B2)==="tour",V2="1.0.0",W2={dt:{pathsim_name:"dt",type:"number",default:"0.01",description:"transient simulation timestep in time units, default see ´SIM_TIMESTEP´ in ´_constants.py´"},dt_min:{pathsim_name:"dt_min",type:"number",default:"1e-16",description:"lower bound for transient simulation timestep, default see ´SIM_TIMESTEP_MIN´ in ´_constants.py´"},dt_max:{pathsim_name:"dt_max",type:"any",default:null,description:"upper bound for transient simulation timestep, default see ´SIM_TIMESTEP_MAX´ in ´_constants.py´"},solver:{pathsim_name:"Solver",type:"string",default:'"SSPRK22"',description:"ODE solver class for numerical integration from ´pathsim.solvers´, default is ´pathsim.solvers.ssprk22.SSPRK22´ (2nd order expl. Runge Kutta)"},ftol:{pathsim_name:"tolerance_fpi",type:"number",default:"1e-10",description:"absolute tolerance for convergence of algebraic loops and internal optimizers of implicit ODE solvers, default see ´SIM_TOLERANCE_FPI´ in ´_constants.py´"},iterations_max:{pathsim_name:"iterations_max",type:"integer",default:"200",description:"maximum allowed number of iterations for implicit ODE solver optimizers and algebraic loop solver, default see ´SIM_ITERATIONS_MAX´ in ´_constants.py´"},log:{pathsim_name:"log",type:"boolean",default:"True",description:"flag to enable logging, default see ´LOG_ENABLE´ in ´_constants.py´ (alternatively a path to a log file can be specified)"},diagnostics:{pathsim_name:"diagnostics",type:"boolean",default:"False",description:""},rtol:{pathsim_name:"tolerance_lte_rel",type:"number",default:"0.0001",description:"Relative error tolerance for adaptive timestep control"},atol:{pathsim_name:"tolerance_lte_abs",type:"number",default:"1e-08",description:"Absolute error tolerance for adaptive timestep control"},duration:{pathsim_name:"duration",type:"number",default:"10.0",description:"Total simulation time"}},ju={ghostTraces:{default:"0"},plotResults:{default:"true"}};function Gn(e){return W2[e]?.default??""}const P3={duration:Gn("duration"),dt:Gn("dt"),solver:Gn("solver")||"SSPRK22",adaptive:!0,atol:Gn("atol"),rtol:Gn("rtol"),ftol:Gn("ftol"),dt_min:Gn("dt_min"),dt_max:Gn("dt_max"),ghostTraces:parseInt(ju.ghostTraces?.default),plotResults:ju.plotResults?.default==="true"},Nt={duration:"",dt:"",solver:"SSPRK22",adaptive:!0,atol:"",rtol:"",ftol:"",dt_min:"",dt_max:"",ghostTraces:0,plotResults:!0},Qa=rf.accent,ur={default:"#969696"},K2=[Qa,"#E57373","#FFB74D","#FFF176","#81C784","#4DB6AC","#4DD0E1","#64B5F6","#BA68C8","#F06292","#90A4AE","#FFFFFF"];function Fl(e){const{name:t,category:n,description:s=`${t} block`,blockClass:i,importPath:o,inputs:a=["in 0"],outputs:r=["out 0"],minInputs:c=1,minOutputs:d=1,maxInputs:u=null,maxOutputs:f=null,syncPorts:p,shape:h,params:g={}}=e,v=Object.entries(g).map(([b,x])=>({name:b,type:x.type,default:x.default,description:x.description,min:x.min,max:x.max,options:x.options}));return{type:i,name:t,category:n,description:s,blockClass:i,importPath:o,shape:h,ports:{inputs:a.map(b=>({name:b,direction:"input",color:ur.default})),outputs:r.map(b=>({name:b,direction:"output",color:ur.default})),minInputs:c,minOutputs:d,maxInputs:u,maxOutputs:f,syncPorts:p},params:v}}const Oc={Constant:{blockClass:"Constant",description:"Produces a constant output signal (SISO).",docstringHtml:`<p>Produces a constant output signal (SISO).</p>
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
`,params:{A:{type:"number",default:"-1.0",description:""},B:{type:"number",default:"1.0",description:""},C:{type:"number",default:"-1.0",description:""},D:{type:"number",default:"1.0",description:"real valued state space matrices"},initial_value:{type:"any",default:null,description:"initial state / initial condition"}},inputs:null,outputs:null},PT1:{blockClass:"PT1",description:"First-order lag element (PT1).",docstringHtml:`<p>First-order lag element (PT1).</p>
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
<dt>_sample_next_timestep <span class="classifier-delimiter">:</span> <span class="classifier">bool</span></dt>
<dd>flag to indicate this is a timestep to sample, only used for
event based sampling when <cite>sampling_period</cite> is provided as an arg</dd>
<dt>events <span class="classifier-delimiter">:</span> <span class="classifier">list[Schedule]</span></dt>
<dd>internal scheduled event for periodic input sampling when
<cite>sampling_period</cite> is provided</dd>
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
`,params:{},inputs:[],outputs:[]}},G2={Sources:["Constant","Source","SinusoidalSource","StepSource","PulseSource","TriangleWaveSource","SquareWaveSource","GaussianPulseSource","ChirpPhaseNoiseSource","ClockSource","WhiteNoise","PinkNoise","RandomNumberGenerator"],Dynamic:["Integrator","Differentiator","Delay","ODE","DynamicalSystem","StateSpace","PT1","PT2","LeadLag","PID","AntiWindupPID","RateLimiter","Backlash","Deadband","TransferFunctionNumDen","TransferFunctionZPG","ButterworthLowpassFilter","ButterworthHighpassFilter","ButterworthBandpassFilter","ButterworthBandstopFilter"],Algebraic:["Adder","Multiplier","Divider","Amplifier","Function","Polynomial","Sin","Cos","Tan","Tanh","Abs","Sqrt","Exp","Log","Log10","Mod","Clip","Pow","Atan2","Rescale","Alias","Switch","LUT","LUT1D"],Logic:["GreaterThan","LessThan","Equal","LogicAnd","LogicOr","LogicNot"],Discrete:["SampleHold","FirstOrderHold","FIR","DiscreteIntegrator","DiscreteDerivative","DiscreteStateSpace","DiscreteTransferFunction","TappedDelay","ADC","DAC","Counter","CounterUp","CounterDown","Relay","Wrapper"],Recording:["Scope","Spectrum"]},M3={ADC:"pathsim.blocks",Abs:"pathsim.blocks",Adder:"pathsim.blocks",Alias:"pathsim.blocks",Amplifier:"pathsim.blocks",AntiWindupPID:"pathsim.blocks",Atan2:"pathsim.blocks",Backlash:"pathsim.blocks",ButterworthBandpassFilter:"pathsim.blocks",ButterworthBandstopFilter:"pathsim.blocks",ButterworthHighpassFilter:"pathsim.blocks",ButterworthLowpassFilter:"pathsim.blocks",ChirpPhaseNoiseSource:"pathsim.blocks",Clip:"pathsim.blocks",ClockSource:"pathsim.blocks",Constant:"pathsim.blocks",Cos:"pathsim.blocks",Counter:"pathsim.blocks",CounterDown:"pathsim.blocks",CounterUp:"pathsim.blocks",DAC:"pathsim.blocks",Deadband:"pathsim.blocks",Delay:"pathsim.blocks",Differentiator:"pathsim.blocks",DiscreteDerivative:"pathsim.blocks",DiscreteIntegrator:"pathsim.blocks",DiscreteStateSpace:"pathsim.blocks",DiscreteTransferFunction:"pathsim.blocks",Divider:"pathsim.blocks",DynamicalSystem:"pathsim.blocks",Equal:"pathsim.blocks",Exp:"pathsim.blocks",FIR:"pathsim.blocks",FirstOrderHold:"pathsim.blocks",Function:"pathsim.blocks",GaussianPulseSource:"pathsim.blocks",GreaterThan:"pathsim.blocks",Integrator:"pathsim.blocks",LUT:"pathsim.blocks",LUT1D:"pathsim.blocks",LeadLag:"pathsim.blocks",LessThan:"pathsim.blocks",Log:"pathsim.blocks",Log10:"pathsim.blocks",LogicAnd:"pathsim.blocks",LogicNot:"pathsim.blocks",LogicOr:"pathsim.blocks",Mod:"pathsim.blocks",Multiplier:"pathsim.blocks",ODE:"pathsim.blocks",PID:"pathsim.blocks",PT1:"pathsim.blocks",PT2:"pathsim.blocks",PinkNoise:"pathsim.blocks",Polynomial:"pathsim.blocks",Pow:"pathsim.blocks",PulseSource:"pathsim.blocks",RandomNumberGenerator:"pathsim.blocks",RateLimiter:"pathsim.blocks",Relay:"pathsim.blocks",Rescale:"pathsim.blocks",SampleHold:"pathsim.blocks",Scope:"pathsim.blocks",Sin:"pathsim.blocks",SinusoidalSource:"pathsim.blocks",Source:"pathsim.blocks",Spectrum:"pathsim.blocks",Sqrt:"pathsim.blocks",SquareWaveSource:"pathsim.blocks",StateSpace:"pathsim.blocks",StepSource:"pathsim.blocks",Switch:"pathsim.blocks",Tan:"pathsim.blocks",Tanh:"pathsim.blocks",TappedDelay:"pathsim.blocks",TransferFunctionNumDen:"pathsim.blocks",TransferFunctionZPG:"pathsim.blocks",TriangleWaveSource:"pathsim.blocks",WhiteNoise:"pathsim.blocks",Wrapper:"pathsim.blocks"};function Yu(e){if(e==null||e==="None"||e==="")return null;let t=String(e).trim();return t.length===0||((t.startsWith("'")&&t.endsWith("'")||t.startsWith('"')&&t.endsWith('"'))&&(t=t.slice(1,-1)),t.length===0)?null:[...t]}const j2={Scope:{param:"labels",direction:"input"},Spectrum:{param:"labels",direction:"input"},Adder:{param:"operations",direction:"input",parser:Yu},Divider:{param:"operations",direction:"input",parser:Yu}};function _h(e){const t=j2[e];return t?Array.isArray(t)?t:[t]:[]}const Y2=new Set(["Integrator","Differentiator","Delay","Amplifier","Sin","Cos","Tan","Tanh","Abs","Sqrt","Exp","Log","Log10","Mod","Clip","Pow","Polynomial","Rescale","Alias","LogicNot","SampleHold","FirstOrderHold","DiscreteIntegrator","DiscreteDerivative"]),_d="builtin";class X2{nodes=new Map;byCategory=new Map;bySource=new Map;register(t,n=_d){this.nodes.has(t.type)&&(console.warn(`[nodeRegistry] replacing "${t.type}" (was ${this.nodes.get(t.type)?.source}, now ${n})`),this.removeFromIndexes(t.type)),this.nodes.set(t.type,{definition:t,source:n});const s=this.byCategory.get(t.category)??new Set;s.add(t.type),this.byCategory.set(t.category,s);const i=this.bySource.get(n)??new Set;i.add(t.type),this.bySource.set(n,i),Xu()}unregisterSource(t){const n=Array.from(this.bySource.get(t)??[]);for(const s of n)this.removeFromIndexes(s),this.nodes.delete(s);return this.bySource.delete(t),n.length>0&&Xu(),n}removeFromIndexes(t){const n=this.nodes.get(t);if(!n)return;const s=this.byCategory.get(n.definition.category);s&&(s.delete(t),s.size===0&&this.byCategory.delete(n.definition.category));const i=this.bySource.get(n.source);i&&(i.delete(t),i.size===0&&this.bySource.delete(n.source))}get(t){return this.nodes.get(t)?.definition}getSource(t){return this.nodes.get(t)?.source}getByCategory(t){const n=this.byCategory.get(t);return n?Array.from(n).map(s=>this.nodes.get(s)?.definition).filter(s=>!!s):[]}getBySource(t){const n=this.bySource.get(t);return n?Array.from(n).map(s=>this.nodes.get(s)?.definition).filter(s=>!!s):[]}getAllCategories(){return Array.from(this.byCategory.keys())}getAllSources(){return Array.from(this.bySource.keys())}getAll(){return Array.from(this.nodes.values()).map(t=>t.definition)}has(t){return this.nodes.has(t)}get size(){return this.nodes.size}}const xh=Ie(0);function Xu(){xh.update(e=>e+1)}const U2={subscribe:xh.subscribe},Dt=new X2;function Z2(e,t,n){const s={};for(const[d,u]of Object.entries(n.params))s[d]={type:u.type,default:u.default,description:u.description,min:u.min,max:u.max,options:u.options};let i,o;n.inputs===null?(i=void 0,o=null):n.inputs.length>0?(i=n.inputs,o=n.inputs.length):(i=[],o=0);let a,r;n.outputs===null?(a=void 0,r=null):n.outputs.length>0?(a=n.outputs,r=n.outputs.length):(a=[],r=0);const c=Fl({name:e,category:t,blockClass:n.blockClass,description:n.description,inputs:i,outputs:a,maxInputs:o,maxOutputs:r,syncPorts:Y2.has(e),params:s});n.docstringHtml&&(c.docstring=n.docstringHtml),Dt.register(c,_d)}function J2(){for(const[e,t]of Object.entries(G2))for(const n of t){const s=Oc[n];s?Z2(n,e,s):console.warn(`Block "${n}" not found in extracted blocks`)}}J2();const rc=Fl({name:"Subsystem",category:"Subsystem",description:"",blockClass:"Subsystem",inputs:[],outputs:[],minInputs:0,minOutputs:0,maxInputs:null,maxOutputs:null,shape:"rect",params:{}}),lc=Fl({name:"Interface",category:"Subsystem",description:"",blockClass:"Interface",inputs:[],outputs:[],minInputs:0,minOutputs:0,maxInputs:null,maxOutputs:null,shape:"rect",params:{}});function Q2(){const e=Oc.Subsystem,t=Oc.Interface;e&&(rc.description=e.description,rc.docstring=e.docstringHtml),t&&(lc.description=t.description,lc.docstring=t.docstringHtml),Dt.register(rc),Dt.register(lc)}Q2();const kh=new Map;function ka(e){kh.set(e.id,e)}function Uu(e){return kh.get(e)}ka({id:"pill",name:"Pill",cssClass:"shape-pill",borderRadius:"20px",svgRadius:20});ka({id:"rect",name:"Rectangle",cssClass:"shape-rect",borderRadius:"4px",svgRadius:4});ka({id:"circle",name:"Circle",cssClass:"shape-circle",borderRadius:"16px",svgRadius:16});ka({id:"diamond",name:"Diamond",cssClass:"shape-diamond",borderRadius:"4px",svgRadius:4});ka({id:"mixed",name:"Mixed",cssClass:"shape-mixed",borderRadius:"12px 4px 12px 4px",svgRadius:[12,4,12,4]});ka({id:"default",name:"Default",cssClass:"shape-default",borderRadius:"8px",svgRadius:8});const $2={Sources:"pill",Dynamic:"rect",Algebraic:"rect",Logic:"rect",Discrete:"mixed",Recording:"pill",Subsystem:"rect",Chemical:"rect"};function eS(e){return $2[e]||"default"}const We={SUBSYSTEM:"Subsystem",INTERFACE:"Interface"};function tS(e){if(e.shape){const s=Uu(e.shape);if(s)return s.cssClass}const t=eS(e.category);return Uu(t)?.cssClass||"shape-default"}function Sh(e){return("type"in e,e.type)===We.SUBSYSTEM}function A3(e){return("type"in e,e.type)===We.INTERFACE}const La=Ie(null),Ih={subscribe:La.subscribe,open(e){La.set(e)},close(){La.set(null)},isOpen(){return U(La)!==null},getOpenId(){return U(La)}},nS=e=>Ih.open(e),D3=()=>Ih.close();function Tt(){return crypto.randomUUID()}const lt=Ie(new Map),is=Ie([]),Sa=Ie(new Map),qe=Ie([]),xt=Ie(new Set);function sS(e){if(e.length===0)return null;let t=U(lt),n=null;for(let s=0;s<e.length;s++){const i=t.get(e[s]);if(!i||i.type!==We.SUBSYSTEM)return null;n=i,s<e.length-1&&i.graph&&(t=new Map(i.graph.nodes.map(o=>[o.id,o])))}return n}function ft(){const e=U(qe);if(e.length===0)return{nodes:U(lt),connections:U(is),annotations:U(Sa),events:new Map};const t=sS(e);if(!t||!t.graph)return{nodes:new Map,connections:[],annotations:new Map,events:new Map};const n=t.graph.nodes.map(s=>s.type===We.INTERFACE?{...s,name:t.name,color:t.color,outputs:t.inputs.map((i,o)=>({id:`${s.id}-output-${o}`,nodeId:s.id,name:i.name,direction:"output",index:o,color:i.color})),inputs:t.outputs.map((i,o)=>({id:`${s.id}-input-${o}`,nodeId:s.id,name:i.name,direction:"input",index:o,color:i.color}))}:s);return{nodes:new Map(n.map(s=>[s.id,s])),connections:t.graph.connections,annotations:new Map((t.graph.annotations||[]).map(s=>[s.id,s])),events:new Map((t.graph.events||[]).map(s=>[s.id,s]))}}function Kt(e,t){e.length!==0&&lt.update(n=>{const s=new Map(n),i=(o,a)=>{if(a.length===0)return o;const[r,...c]=a,d=o.get(r);if(!d||d.type!==We.SUBSYSTEM)return o;const u=new Map(o);if(c.length===0){const f=t(d.graph||{nodes:[],connections:[]});u.set(r,{...d,graph:f})}else{const f=new Map((d.graph?.nodes||[]).map(h=>[h.id,h])),p=i(f,c);u.set(r,{...d,graph:{nodes:Array.from(p.values()),connections:d.graph?.connections||[],annotations:d.graph?.annotations,events:d.graph?.events}})}return u};return i(s,e)})}function xd(e,t){const n=U(qe);n.length===0?lt.update(e):Kt(n,s=>({...s,nodes:t(s.nodes)}))}function os(e,t){xd(n=>{const s=n.get(e);if(s){const i=new Map(n);return i.set(e,t(s)),i}return n},n=>n.map(s=>s.id===e?t(s):s))}function iS(e){xd(t=>{const n=new Map(t);return n.set(e.id,e),n},t=>[...t,e])}function kd(e){const t=U(qe);t.length===0?is.update(e):Kt(t,n=>({...n,connections:e(n.connections)}))}function Bl(e,t,n){const s=U(qe);s.length===0?(lt.update(e),is.update(n)):Kt(s,i=>({...i,nodes:t(i.nodes),connections:n(i.connections)}))}function ql(e,t){const n=U(qe);n.length===0?Sa.update(e):Kt(n,s=>({...s,annotations:t(s.annotations||[])}))}function oS(){return U(qe).length===0}const Sd=Zt([lt,qe],()=>ft().nodes),aS=Zt([lt,is,qe],()=>ft().connections),rS=Zt([lt,Sa,qe],()=>ft().annotations),lS=Zt([lt,qe],()=>ft().events),cS=Zt(Sd,e=>Array.from(e.values())),dS=Zt([Sd,xt],([e,t])=>Array.from(t).map(n=>e.get(n)).filter(n=>n!==void 0)),uS=Zt([lt,qe],([e,t])=>{const n=[{id:"",name:"Root"}];let s=e;for(const i of t){const o=s.get(i);o&&o.type===We.SUBSYSTEM&&(n.push({id:i,name:o.name}),o.graph&&(s=new Map(o.graph.nodes.map(a=>[a.id,a]))))}return n});function Eh(e,t){const n=[];for(const s of e){if(s.type!==We.SUBSYSTEM)continue;const i=[...t,s.id],o=s.graph?.nodes??[];n.push({id:s.id,name:s.name,color:s.color,path:i,children:Eh(o,i)})}return n.sort((s,i)=>s.name.localeCompare(i.name)),n}const pS=Zt(lt,e=>Eh(e.values(),[])),kn={DEFAULT:11,MIN:8,MAX:24,STEP:1};function fS(e){const t=Tt(),n={id:t,position:e,content:"",width:200,height:100,fontSize:kn.DEFAULT};return ql(s=>{const i=new Map(s);return i.set(t,n),i},s=>[...s,n]),t}function Th(e,t){ql(n=>{const s=n.get(e);if(s){const i=new Map(n);return i.set(e,{...s,...t}),i}return n},n=>n.map(s=>s.id===e?{...s,...t}:s))}function hS(e,t){Th(e,{position:t})}function mS(e){ql(t=>{const n=new Map(t);return n.delete(e),n},t=>t.filter(n=>n.id!==e))}function gS(e){return ft().annotations.get(e)}const Zr=Ie({top:100,right:20,bottom:20,left:70});function O3(e){Zr.set(e)}const Ch=Ie(0);function wr(){Ch.update(e=>e+1)}const Nh=Ie(0),Ph=Ie(0);function R3(){Nh.update(e=>e+1)}function L3(){Ph.update(e=>e+1)}const Mh=Ie({x:0,y:0,id:0});function z3(e){Mh.update(t=>({...e,id:t.id+1}))}const Ah=Ie({nodeId:"",id:0});function H3(e){Ah.update(t=>({nodeId:e,id:t.id+1}))}const Dh=Ie(0);function Oh(){Dh.update(e=>e+1)}const Rh=Ie({x:0,y:0,id:0});function F3(e){Rh.update(t=>({...e,id:t.id+1}))}const Lh=Ie({nodeIds:[],addToSelection:!1,id:0});function gn(e,t=!1){Lh.update(n=>({nodeIds:e,addToSelection:t,id:n.id+1}))}const zh=Ie({annotationId:"",id:0});function B3(e){zh.update(t=>({annotationId:e,id:t.id+1}))}const Hh=Ie({nodeId:"",position:{x:0,y:0},cursorScreen:null,id:0});function q3(e,t,n){Hh.update(s=>({nodeId:e,position:t,cursorScreen:n??null,id:s.id+1}))}let Rc=null,Lc=null;function vS(e){Rc=e}function $a(e){return Rc?Rc(e):e}function yS(e){Lc=e}function V3(){return Lc?Lc():!1}function W3(){const e=document.querySelector(".svelte-flow");if(!e)return{x:400,y:300};const t=e.getBoundingClientRect(),n={x:t.left+t.width/2,y:t.top+t.height/2};return $a(n)}function bS(e){qe.update(t=>[...t,e]),xt.set(new Set),setTimeout(()=>wr(),0)}function wS(){qe.update(e=>e.slice(0,-1)),xt.set(new Set),setTimeout(()=>wr(),0)}function _S(e){const t=U(qe).length;e!==t&&(qe.update(n=>n.slice(0,e)),xt.set(new Set),setTimeout(()=>wr(),0))}function xS(e){qe.set(e),xt.set(new Set),setTimeout(()=>wr(),0)}function kS(){return U(qe).length===0}function SS(){return U(qe)}function Zu(e,t,n){return n.map((s,i)=>({id:`${e}-${t}-${i}`,nodeId:e,name:s.name,direction:t,index:i,color:s.color||ur.default}))}function IS(e,t){for(const n of e)if(n.type===We.SUBSYSTEM&&n.graph){if(n.graph.nodes.some(o=>o.id===t))return n;const i=IS(n.graph.nodes,t);if(i)return i}return null}function ES(e,t,n){const s=n??Tt(),i={...e,id:s,position:{...t},inputs:e.inputs.map((o,a)=>({...o,id:`${s}-input-${a}`,nodeId:s})),outputs:e.outputs.map((o,a)=>({...o,id:`${s}-output-${a}`,nodeId:s}))};return i.graph&&(i.graph=Id(i.graph)),i}function Id(e){const t=new Map,n=e.nodes.map(a=>{const r=Tt();t.set(a.id,r);const c={...a,id:r,inputs:a.inputs.map((d,u)=>({...d,id:`${r}-input-${u}`,nodeId:r})),outputs:a.outputs.map((d,u)=>({...d,id:`${r}-output-${u}`,nodeId:r}))};return c.graph&&(c.graph=Id(c.graph)),c}),s=e.connections.map(a=>({...a,id:Tt(),sourceNodeId:t.get(a.sourceNodeId)||a.sourceNodeId,targetNodeId:t.get(a.targetNodeId)||a.targetNodeId})),i=e.events?.map(a=>({...a,id:Tt()})),o=e.annotations?.map(a=>({...a,id:Tt()}));return{nodes:n,connections:s,events:i,annotations:o}}const Ju={input:e=>`in ${e}`,output:e=>`out ${e}`},TS=/-input-(\d+)$/,CS=/-output-(\d+)$/,ma={input:(e,t)=>`${e}-input-${t}`,output:(e,t)=>`${e}-output-${t}`,parseIndex:(e,t)=>{const n=t==="input"?TS:CS,s=e.match(n);return s?parseInt(s[1],10):null},parseConnection:(e,t)=>({sourceIndex:ma.parseIndex(e,"output"),targetIndex:ma.parseIndex(t,"input")})};function K3(e,t,n={}){const{multiLine:s=!1,indent:i="    ",skipInternal:o=!1}=n,a=[];for(const[r,c]of Object.entries(e))c==null||c===""||o&&r.startsWith("_")||t.has(r)&&a.push(`${r}=${c}`);return s&&a.length>0?`
`+a.map(r=>i+r).join(`,
`)+`
`:a.join(", ")}function G3(e,t,n="conn"){const s=[],i=[],o=new Map;let a=0;for(const r of e){const c=t.get(r.sourceNodeId),d=t.get(r.targetNodeId);if(!c||!d)continue;const u=`${n}_${a}`;s.push(`${u} = Connection(${c}[${r.sourcePortIndex}], ${d}[${r.targetPortIndex}])`),i.push(u),o.set(r.id,u),a++}return{lines:s,varNames:i,connVars:o}}function j3(e,t,n="    "){const s=[];s.push(`${e} = [`);for(const i of t)s.push(`${n}${i},`);return s.push("]"),s}function NS(e){if(!e)return"";let t="";for(const n of e)/[a-zA-Z0-9_]/.test(n)?t+=n:n===" "&&(t+="_");return t&&/^[0-9]/.test(t)&&(t="n_"+t),t.toLowerCase()}let Rn=new Map,gl=new Map,Ed=0;const Ln=[],$n=new Map,ga=new Map,PS=Ie(0);function Fn(){PS.set(Ln.length+$n.size+ga.size)}function Vl(){return Rn.size>0}function MS(e,t){Rn=new Map(e),gl=new Map(t),Ed=0,Ln.length=0,$n.clear(),ga.clear(),Fn()}function AS(){Ln.length=0,$n.clear(),ga.clear(),Fn()}function Fh(){const e=[];for(const n of ga.values())e.push(n);for(const n of Ln)e.push(n);for(const n of $n.values())e.push(n);return Ln.length=0,$n.clear(),ga.clear(),Fn(),e.length===0?null:`_apply_mutations(${JSON.stringify(JSON.stringify(e))})`}function Td(e){if(!Vl()||Sh(e))return;const t=Dt.get(e.type);if(!t)return;const n=new Set(Rn.values());let s=NS(e.name);(!s||n.has(s))&&(s=`block_dyn_${Ed++}`),Rn.set(e.id,s);const i=new Set(t.params.map(a=>a.name)),o={};for(const[a,r]of Object.entries(e.params))r==null||r===""||a.startsWith("_")||i.has(a)&&(o[a]=String(r));Ln.push({type:"add_block",var:s,blockClass:t.blockClass,params:o,nodeId:e.id,nodeName:e.name}),Fn()}function DS(e){const t=Rn.get(e);if(t){Ln.push({type:"remove_block",var:t,nodeId:e}),Rn.delete(e);for(const n of $n.keys())n.startsWith(e+":")&&$n.delete(n);Fn()}}function Cd(e){if(!Vl())return;const t=Rn.get(e.sourceNodeId),n=Rn.get(e.targetNodeId);if(!t||!n)return;const s=`conn_dyn_${Ed++}`;gl.set(e.id,s),Ln.push({type:"add_connection",var:s,sourceVar:t,sourcePort:e.sourcePortIndex,targetVar:n,targetPort:e.targetPortIndex}),Fn()}function Nd(e){const t=gl.get(e);t&&(Ln.push({type:"remove_connection",var:t}),gl.delete(e),Fn())}function OS(e,t,n){const s=Rn.get(e);s&&($n.set(`${e}:${t}`,{type:"set_param",var:s,param:t,value:n}),Fn())}function Bh(e,t){Vl()&&(ga.set(e,{type:"set_setting",code:t}),Fn())}function qh(e){return{portsKey:e==="input"?"inputs":"outputs",oppositeKey:e==="input"?"outputs":"inputs",minKey:e==="input"?"minInputs":"minOutputs",maxKey:e==="input"?"maxInputs":"maxOutputs",connectionKey:e==="input"?"targetNodeId":"sourceNodeId",connectionIndexKey:e==="input"?"targetPortIndex":"sourcePortIndex",defaultName:e==="input"?"in":"out"}}function Pd(e,t,n){const s=i=>{const o=i.get(t);if(!o)return i;const a=new Map(i);return a.set(t,n(o)),a};e.length===0?lt.update(s):Kt(e,i=>({...i,nodes:Array.from(s(new Map(i.nodes.map(o=>[o.id,o]))).values())}))}function Md(e,t,n=!1){const i=ft().nodes.get(e);if(!i)return!1;const o=qh(t),a=U(qe);if(i.type===We.INTERFACE&&a.length>0){const h=a[a.length-1],g=a.slice(0,-1),v=o.oppositeKey,b=t==="input"?"output":"input";return Pd(g,h,x=>{const S=x[v],A=S.length;return{...x,[v]:[...S,{id:ma[b](h,A),nodeId:h,name:Ju[b](A),direction:b,index:A,color:ur.default}]}}),!0}const r=Dt.get(i.type),c=r?.ports[o.maxKey],d=i[o.portsKey];if(c!=null&&d.length>=c)return!1;const u=d.length,f=r?.ports[o.portsKey]?.[u],p={id:ma[t](e,u),nodeId:e,name:f?.name||Ju[t](u),direction:t,index:u,color:f?.color||ur.default};return os(e,h=>({...h,[o.portsKey]:[...h[o.portsKey],p]})),!n&&t==="input"&&r?.ports.syncPorts&&Md(e,"output",!0),!0}function Ad(e,t,n=!1){const i=ft().nodes.get(e);if(!i)return!1;const o=qh(t),a=Dt.get(i.type),r=a?.ports[o.minKey]??1,c=i[o.portsKey];if(c.length<=r)return!1;const d=U(qe);if(i.type===We.INTERFACE&&d.length>0){const p=d[d.length-1],h=d.slice(0,-1),g=o.oppositeKey;Pd(h,p,v=>{const b=v[g];return b.length===0?v:{...v,[g]:b.slice(0,-1)}})}const u=c.length-1,f=ft();for(const p of f.connections)(o.connectionKey==="targetNodeId"?p.targetNodeId===e&&p.targetPortIndex>=u:p.sourceNodeId===e&&p.sourcePortIndex>=u)&&Nd(p.id);return Bl(p=>{const h=p.get(e);if(!h)return p;const g=new Map(p);return g.set(e,{...h,[o.portsKey]:h[o.portsKey].slice(0,-1)}),g},p=>p.map(h=>h.id===e?{...h,[o.portsKey]:h[o.portsKey].slice(0,-1)}:h),p=>p.filter(h=>{const g=h[o.connectionKey],v=h[o.connectionIndexKey];return!(g===e&&v>=u)})),!n&&t==="input"&&a?.ports.syncPorts&&Ad(e,"output",!0),!0}function RS(e){return Md(e,"input")}function LS(e){return Md(e,"output")}function zS(e){return Ad(e,"input")}function HS(e){return Ad(e,"output")}function FS(e){if(e==null||e==="None"||e==="")return null;const t=String(e).trim();if(!t.startsWith("[")||!t.endsWith("]"))return null;try{const n=t.replace(/'/g,'"'),s=JSON.parse(n);if(Array.isArray(s)&&s.every(i=>typeof i=="string"))return s}catch{}return null}function Vh(e){let t=e;for(const n of _h(e.type)){const s=n.direction==="input"?"inputs":"outputs",i=n.direction==="input"?"in":"out",o=(n.parser??FS)(t.params?.[n.param]);if(!o)continue;const a=t[s],r=a.map((d,u)=>{const f=u<o.length?o[u]:`${i} ${u}`;return d.name===f?d:{...d,name:f}});r.some((d,u)=>d.name!==a[u].name)&&(t={...t,[s]:r})}return t}function BS(e,t,n,s){const o=ft().nodes.get(e);if(!o)return;const a=Vh(o);a!==o&&os(e,()=>a)}function qS(e,t,n,s){const o=ft().nodes.get(e);if(!o)return;const a=U(qe);if(o.type===We.INTERFACE&&a.length>0){const r=a[a.length-1],c=a.slice(0,-1),d=t==="input"?"outputs":"inputs";Pd(c,r,u=>{const f=u[d];if(n<0||n>=f.length||f[n].name===s)return u;const p=f.map((h,g)=>g===n?{...h,name:s}:h);return{...u,[d]:p}});return}os(e,r=>{const c=t==="input"?"inputs":"outputs",d=r[c];if(n<0||n>=d.length||d[n].name===s)return r;const u=d.map((f,p)=>p===n?{...f,name:s}:f);return{...r,[c]:u}})}function VS(e,t,n){const s=Dt.get(e);if(!s)return console.error(`Unknown node type: ${e}`),null;const i=Tt(),o={id:i,type:e,name:n||s.name,position:t,inputs:Zu(i,"input",s.ports.inputs),outputs:Zu(i,"output",s.ports.outputs),params:{}};if(e===We.SUBSYSTEM){const r={id:Tt(),type:We.INTERFACE,name:o.name,position:{x:100,y:100},inputs:[],outputs:[],params:{}};o.graph={nodes:[r],connections:[]}}return iS(o),Td(o),o}function WS(e){const t=ft(),n=t.nodes.get(e);if(n){if(n.type===We.INTERFACE){console.warn("Interface blocks cannot be deleted");return}for(const s of t.connections)(s.sourceNodeId===e||s.targetNodeId===e)&&Nd(s.id);DS(e),Bl(s=>{const i=new Map(s);return i.delete(e),i},s=>s.filter(i=>i.id!==e),s=>s.filter(i=>i.sourceNodeId!==e&&i.targetNodeId!==e)),xt.update(s=>{const i=new Set(s);return i.delete(e),i})}}function KS(e,t){os(e,n=>({...n,position:{...t}}))}function GS(e,t){const s=ft().nodes.get(e);if(!s)return;const i=U(qe);if(s.type===We.INTERFACE&&i.length>0){const o=i.slice(0,-1),a=i[i.length-1];o.length===0?lt.update(r=>{const c=r.get(a);if(c){const d=new Map(r);return d.set(a,{...c,name:t}),d}return r}):Kt(o,r=>({...r,nodes:r.nodes.map(c=>c.id===a?{...c,name:t}:c)}));return}os(e,o=>({...o,name:t}))}function jS(e,t){const s=ft().nodes.get(e);if(!s)return;const i=U(qe);if(s.type===We.INTERFACE&&i.length>0){const o=i.slice(0,-1),a=i[i.length-1];o.length===0?lt.update(r=>{const c=r.get(a);if(c){const d=new Map(r);return d.set(a,{...c,color:t}),d}return r}):Kt(o,r=>({...r,nodes:r.nodes.map(c=>c.id===a?{...c,color:t}:c)}));return}os(e,o=>({...o,color:t}))}function YS(e,t){os(e,s=>({...s,params:{...s.params,...t}}));for(const[s,i]of Object.entries(t))i==null||i===""||s.startsWith("_")||OS(e,s,String(i));const n=ft().nodes.get(e);if(n)for(const s of _h(n.type))s.param in t&&BS(e,t[s.param],s.direction,s.parser)}function XS(e,t){os(e,n=>({...n,...t}))}function US(e){return ft().nodes.get(e)}function ZS(){const e=[],t=n=>{for(const s of n)e.push(s),s.graph&&t(s.graph.nodes)};return t(Array.from(U(lt).values())),e}function JS(){const e=U(xt);if(e.size===0)return[];const t=ft(),n=[],s=[],i={x:50,y:50},o=new Map,a=[],r=[];e.forEach(f=>{const p=t.annotations.get(f);if(p){const b=Tt(),x={...p,id:b,position:{x:p.position.x+i.x,y:p.position.y+i.y}};r.push(x),s.push(b);return}const h=t.nodes.get(f);if(!h||h.type===We.INTERFACE)return;const g=Tt();o.set(f,g);const v={id:g,type:h.type,name:h.name,position:{x:h.position.x+i.x,y:h.position.y+i.y},inputs:h.inputs.map((b,x)=>({...b,id:`${g}-input-${x}`,nodeId:g})),outputs:h.outputs.map((b,x)=>({...b,id:`${g}-output-${x}`,nodeId:g})),params:structuredClone(h.params),pinnedParams:h.pinnedParams?[...h.pinnedParams]:void 0,color:h.color};if(h.graph){const b=structuredClone(h.graph);v.graph=Id(b)}a.push(v),n.push(g)});const c=t.connections,d=[];for(const f of c){const p=o.get(f.sourceNodeId),h=o.get(f.targetNodeId);p&&h&&d.push({id:Tt(),sourceNodeId:p,sourcePortIndex:f.sourcePortIndex,targetNodeId:h,targetPortIndex:f.targetPortIndex})}for(const f of a)Td(f);for(const f of d)Cd(f);(a.length>0||d.length>0)&&Bl(f=>{const p=new Map(f);for(const h of a)p.set(h.id,h);return p},f=>[...f,...a],f=>[...f,...d]),r.length>0&&ql(f=>{const p=new Map(f);for(const h of r)p.set(h.id,h);return p},f=>[...f,...r]);const u=[...n,...s];return u.length>0&&gn(u,!1),u}function QS(e){const t=U(xt);if(t.size===0)return;const n=s=>({...s,position:{x:s.position.x+e.x,y:s.position.y+e.y}});xd(s=>{const i=new Map(s);return t.forEach(o=>{const a=i.get(o);a&&i.set(o,n(a))}),i},s=>s.map(i=>t.has(i.id)?n(i):i))}function $S(e,t){if(e.length===0)return[];const n=e.map(s=>s.id);for(const s of e)Td(s);for(const s of t)Cd(s);return Bl(s=>{const i=new Map(s);for(const o of e)i.set(o.id,o);return i},s=>[...s,...e],s=>[...s,...t]),gn(n,!1),n}function eI(e,t,n,s){const i=ft(),o=i.nodes.get(e),a=i.nodes.get(n);if(!o||!a)return console.error("Invalid node IDs for connection"),null;if(t>=o.outputs.length||s>=a.inputs.length)return console.error("Invalid port indices for connection"),null;if(i.connections.some(u=>u.targetNodeId===n&&u.targetPortIndex===s))return console.warn("Target port already has a connection"),null;const d={id:Tt(),sourceNodeId:e,sourcePortIndex:t,targetNodeId:n,targetPortIndex:s};return kd(u=>[...u,d]),Cd(d),d}function tI(e){Nd(e),kd(t=>t.filter(n=>n.id!==e))}function nI(){const e=[];for(const n of U(is))e.push({connection:n});const t=(n,s)=>{const i=n instanceof Map?Array.from(n.values()):n;for(const o of i)if(o.graph){for(const a of o.graph.connections)e.push({connection:a,subsystemId:o.id});t(o.graph.nodes,o.id)}};return t(U(lt)),e}function sI(e,t){kd(n=>n.map(s=>s.id===e?{...s,waypoints:t}:s))}function iI(e){const t=U(qe);return t.length===0?!1:(Kt(t,n=>({...n,events:[...n.events||[],e]})),!0)}function oI(e){const t=U(qe);t.length!==0&&Kt(t,n=>({...n,events:(n.events||[]).filter(s=>s.id!==e)}))}function aI(e,t){const n=U(qe);n.length!==0&&Kt(n,s=>({...s,events:(s.events||[]).map(i=>i.id===e?{...i,position:{...t}}:i)}))}function rI(e,t){const n=U(qe);n.length!==0&&Kt(n,s=>({...s,events:(s.events||[]).map(i=>i.id===e?{...i,name:t}:i)}))}function lI(e,t){const n=U(qe);n.length!==0&&Kt(n,s=>({...s,events:(s.events||[]).map(i=>i.id===e?{...i,params:{...i.params,...t}}:i)}))}function cI(e,t){const n=U(qe);n.length!==0&&Kt(n,s=>({...s,events:(s.events||[]).map(i=>i.id===e?{...i,color:t}:i)}))}function dI(e){return ft().events.get(e)}function uI(){return Array.from(ft().events.values())}const pI=[{type:"pathsim.events.ZeroCrossing",name:"ZeroCrossing",eventClass:"ZeroCrossing",description:"Subclass of base 'Event' that triggers if the event function crosses zero.",docstringHtml:`<p>Subclass of base 'Event' that triggers if the event function crosses zero.
This is a bidirectional zero-crossing detector.</p>
<p>Monitors system state by evaluating an event function (func_evt) with scalar output and
testing for zero crossings (sign changes).</p>
<pre class="code literal-block">
func_evt(time) -&gt; event?
</pre>
<p>If an event is detected, some action (func_act) is performed on the system state.</p>
<pre class="code literal-block">
func_evt(time) == 0 -&gt; event -&gt; func_act(time)
</pre>
<div class="section" id="example">
<h3>Example</h3>
<p>Initialize a zero-crossing event handler like this:</p>
<pre class="code python literal-block">
# define the event function
def evt(t):
    # here we have a zero-crossing at 't==10'
    return t - 10

# define the action function (callback)
def act(t):
    # do something at event resolution
    pass

# initialize the event manager
E = ZeroCrossing(
    func_evt=evt,  # the event function
    func_act=act   # the action function
    )
</pre>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>func_evt <span class="classifier-delimiter">:</span> <span class="classifier">callable</span></dt>
<dd>event function, where zeros are events</dd>
<dt>func_act <span class="classifier-delimiter">:</span> <span class="classifier">callable</span></dt>
<dd>action function for event resolution</dd>
<dt>tolerance <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>tolerance to check if detection is close to actual event</dd>
</dl>
</div>
`,params:[{name:"func_evt",type:"callable",default:"None",description:"event function, where zeros are events"},{name:"func_act",type:"callable",default:"None",description:"action function for event resolution"},{name:"tolerance",type:"number",default:"0.0001",description:"tolerance to check if detection is close to actual event"}]},{type:"pathsim.events.ZeroCrossingUp",name:"ZeroCrossingUp",eventClass:"ZeroCrossingUp",description:"Modification of standard 'ZeroCrossing' event where events are only triggered",docstringHtml:`<p>Modification of standard 'ZeroCrossing' event where events are only triggered
if the event function changes sign from negative to positive (up). Also called
unidirectional zero-crossing.</p>
`,params:[{name:"func_evt",type:"callable",default:"None",description:""},{name:"func_act",type:"callable",default:"None",description:""},{name:"tolerance",type:"number",default:"0.0001",description:""}]},{type:"pathsim.events.ZeroCrossingDown",name:"ZeroCrossingDown",eventClass:"ZeroCrossingDown",description:"Modification of standard 'ZeroCrossing' event where events are only triggered",docstringHtml:`<p>Modification of standard 'ZeroCrossing' event where events are only triggered
if the event function changes sign from positive to negative (down). Also called
unidirectional zero-crossing.</p>
`,params:[{name:"func_evt",type:"callable",default:"None",description:""},{name:"func_act",type:"callable",default:"None",description:""},{name:"tolerance",type:"number",default:"0.0001",description:""}]},{type:"pathsim.events.Schedule",name:"Schedule",eventClass:"Schedule",description:"Subclass of base 'Event' that triggers dependent on the evaluation time.",docstringHtml:`<p>Subclass of base 'Event' that triggers dependent on the evaluation time.</p>
<p>Monitors time in every timestep and triggers periodically (period). This event
does not have an event function as the event condition only depends on time.</p>
<pre class="code literal-block">
time == next_schedule_time -&gt; event
</pre>
<div class="section" id="example">
<h3>Example</h3>
<p>Initialize a scheduled event handler like this:</p>
<pre class="code python literal-block">
#define the action function (callback)
def act(t):
    #do something at event resolution
    pass

#initialize the event manager
E = Schedule(
    t_start=0,    #starting at t=0
    t_end=None,   #never ending
    t_period=3,   #triggering every 3 time units
    func_act=act  #resulting in a callback
    )
</pre>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>t_start <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>starting time for schedule</dd>
<dt>t_end <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>termination time for schedule</dd>
<dt>t_period <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>time period of schedule, when events are triggered</dd>
<dt>func_act <span class="classifier-delimiter">:</span> <span class="classifier">callable</span></dt>
<dd>action function for event resolution</dd>
<dt>tolerance <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>tolerance to check if detection is close to actual event</dd>
</dl>
</div>
`,params:[{name:"t_start",type:"number",default:"0",description:"starting time for schedule"},{name:"t_end",type:"number",default:"None",description:"termination time for schedule"},{name:"t_period",type:"number",default:"1",description:"time period of schedule, when events are triggered"},{name:"func_act",type:"callable",default:"None",description:"action function for event resolution"},{name:"tolerance",type:"number",default:"1e-16",description:"tolerance to check if detection is close to actual event"}]},{type:"pathsim.events.ScheduleList",name:"ScheduleList",eventClass:"ScheduleList",description:"Subclass of base 'Schedule' that triggers dependent on the evaluation time.",docstringHtml:`<p>Subclass of base 'Schedule' that triggers dependent on the evaluation time.</p>
<p>Monitors time in every timestep and triggers at the next event time from the
time list. This event does not have an event function as the event condition
only depends on time.</p>
<pre class="code literal-block">
time == next_scheduled_time -&gt; event
</pre>
<div class="section" id="example">
<h3>Example</h3>
<p>Initialize a scheduled event handler like this:</p>
<pre class="code python literal-block">
#define the action function (callback)
def act(t):
    #do something at event resolution
    pass

#initialize the event manager
E = ScheduleList(
    times_evt=[1, 5, 12, 300],  #event times where to trigger
    func_act=act                #resulting in a callback
    )
</pre>
</div>
<div class="section" id="parameters">
<h3>Parameters</h3>
<dl class="docutils">
<dt>times_evt <span class="classifier-delimiter">:</span> <span class="classifier">list[float]</span></dt>
<dd>list of event times in ascending order</dd>
<dt>func_act <span class="classifier-delimiter">:</span> <span class="classifier">callable</span></dt>
<dd>action function for event resolution</dd>
<dt>tolerance <span class="classifier-delimiter">:</span> <span class="classifier">float</span></dt>
<dd>tolerance to check if detection is close to actual event</dd>
</dl>
</div>
`,params:[{name:"times_evt",type:"array",default:"None",description:"list of event times in ascending order"},{name:"func_act",type:"callable",default:"None",description:"action function for event resolution"},{name:"tolerance",type:"number",default:"1e-16",description:"tolerance to check if detection is close to actual event"}]},{type:"pathsim.events.Condition",name:"Condition",eventClass:"Condition",description:"Subclass of base 'Event' that triggers if the event function evaluates to 'True',",docstringHtml:`<p>Subclass of base 'Event' that triggers if the event function evaluates to 'True',
i.e. the condition is satisfied.</p>
<p>Monitors system state by evaluating an event function (func_evt) with boolean output.
The event is considered detected when the event function evaluates to 'True' for the
first time. Subsequent evaluations to 'True' are not considered unless the event is reset.</p>
<pre class="code literal-block">
func_evt(time) -&gt; event?
</pre>
<p>If an event is detected, some action (func_act) is performed on the system state.</p>
<pre class="code literal-block">
func_evt(time) == True -&gt; event -&gt; func_act(time)
</pre>
<div class="section" id="note">
<h3>Note</h3>
<p>Condition event functions evaluate to boolean and are therefore not smooth.
Therefore uses bisection method for event location instead of secant method.</p>
</div>
<div class="section" id="example">
<h3>Example</h3>
<p>Initialize a conditional event handler like this:</p>
<pre class="code python literal-block">
#define the event function
def evt(t):
    return t &gt; 10

#define the action function (callback)
def act(t):
    #do something at event resolution
    pass

#initialize the event manager
E = Condition(
    func_evt=evt,  #the event function
    func_act=act   #the action function
    )
</pre>
</div>
`,params:[{name:"func_evt",type:"callable",default:"None",description:""},{name:"func_act",type:"callable",default:"None",description:""},{name:"tolerance",type:"number",default:"0.0001",description:""}]}],fI=pI,Qu="builtin";class hI{events=new Map;bySource=new Map;constructor(){for(const t of fI)this.register(t,Qu)}register(t,n=Qu){this.events.has(t.type)&&this.removeFromSourceIndex(t.type),this.events.set(t.type,{definition:t,source:n});const s=this.bySource.get(n)??new Set;s.add(t.type),this.bySource.set(n,s),$u()}unregisterSource(t){const n=Array.from(this.bySource.get(t)??[]);for(const s of n)this.events.delete(s);return this.bySource.delete(t),n.length>0&&$u(),n}removeFromSourceIndex(t){const n=this.events.get(t);if(!n)return;const s=this.bySource.get(n.source);s&&(s.delete(t),s.size===0&&this.bySource.delete(n.source))}get(t){return this.events.get(t)?.definition}getSource(t){return this.events.get(t)?.source}getBySource(t){const n=this.bySource.get(t);return n?Array.from(n).map(s=>this.events.get(s)?.definition).filter(s=>!!s):[]}getAll(){return Array.from(this.events.values()).map(t=>t.definition)}has(t){return this.events.has(t)}}const Wh=Ie(0);function $u(){Wh.update(e=>e+1)}const Y3={subscribe:Wh.subscribe},va=new hI,ht=Ie(new Map),Gt=Ie(new Set);function cc(e){Gt.set(e)}const mI=Zt(ht,e=>Array.from(e.values())),gI=Zt([ht,Gt],([e,t])=>Array.from(t).map(n=>e.get(n)).filter(n=>n!==void 0)),Mt={events:{subscribe:ht.subscribe},eventsArray:{subscribe:mI.subscribe},selectedEventIds:{subscribe:Gt.subscribe},selectedEvents:{subscribe:gI.subscribe},addEvent(e,t,n){const s=va.get(e);if(!s)return console.error(`Unknown event type: ${e}`),null;const i=Tt(),o={id:i,type:e,name:n||s.name,position:t,params:{}};return ht.update(a=>{const r=new Map(a);return r.set(i,o),r}),o},removeEvent(e){ht.update(t=>{const n=new Map(t);return n.delete(e),n}),Gt.update(t=>{const n=new Set(t);return n.delete(e),n})},updateEventPosition(e,t){ht.update(n=>{const s=n.get(e);if(s){const i=new Map(n);return i.set(e,{...s,position:{...t}}),i}return n})},updateEventName(e,t){ht.update(n=>{const s=n.get(e);if(s){const i=new Map(n);return i.set(e,{...s,name:t}),i}return n})},updateEventParams(e,t){ht.update(n=>{const s=n.get(e);if(s){const i=new Map(n);return i.set(e,{...s,params:{...s.params,...t}}),i}return n})},updateEventColor(e,t){ht.update(n=>{const s=n.get(e);if(s){const i=new Map(n);return i.set(e,{...s,color:t}),i}return n})},selectEvent(e,t=!1){if(t){const n=U(Gt);gn([...n,e],!0)}else gn([e],!1)},deselectEvent(e){const n=[...U(Gt)].filter(s=>s!==e);gn(n,!1)},clearSelection(){Oh()},hasSelection(){return U(Gt).size>0},clear(){ht.set(new Map),Gt.set(new Set)},getEvent(e){return U(ht).get(e)},getAll(){return Array.from(U(ht).values())},selectAll(){const e=Array.from(U(ht).keys());Gt.set(new Set(e))},duplicateSelected(){const e=U(Gt);if(e.size===0)return[];const t=U(ht),n=[],s={x:50,y:50};return e.forEach(i=>{const o=t.get(i);if(!o)return;const a=Tt(),r={id:a,type:o.type,name:o.name,position:{x:o.position.x+s.x,y:o.position.y+s.y},params:structuredClone(o.params),color:o.color};ht.update(c=>{const d=new Map(c);return d.set(a,r),d}),n.push(a)}),n.length>0&&gn(n,!1),n},nudgeSelectedEvents(e){const t=U(Gt);t.size!==0&&ht.update(n=>{const s=new Map(n);return t.forEach(i=>{const o=s.get(i);o&&s.set(i,{...o,position:{x:o.position.x+e.x,y:o.position.y+e.y}})}),s})},toJSON(){return Array.from(U(ht).values())},fromJSON(e){!e||!Array.isArray(e)?ht.set(new Map):ht.set(new Map(e.map(t=>[t.id,t]))),Gt.set(new Set)}};function vI(e,t=!1){if(t){const n=U(xt);gn([...n,e],!0)}else gn([e],!1)}function yI(e){const n=[...U(xt)].filter(s=>s!==e);gn(n,!1)}function bI(){Oh()}function wI(){return U(xt).size>0}function _I(){const e=ft(),t=Array.from(e.nodes.keys()),n=oS()?Array.from(U(Mt.events).keys()):Array.from(e.events.keys());gn([...t,...n],!1)}function xI(){lt.set(new Map),is.set([]),Sa.set(new Map),qe.set([]),xt.set(new Set)}function kI(){return{nodes:Array.from(U(lt).values()),connections:U(is),annotations:Array.from(U(Sa).values())}}function Kh(e){return e.map(t=>{const n=Vh(t);return n.graph?{...n,graph:{...n.graph,nodes:Kh(n.graph.nodes)}}:n})}function SI(e,t,n){if(!e||!Array.isArray(e))lt.set(new Map);else{const s=Kh(e);lt.set(new Map(s.map(i=>[i.id,i])))}is.set(t||[]),Sa.set(new Map((n||[]).map(s=>[s.id,s]))),qe.set([]),xt.set(new Set)}function II(){const e=[],t=(n,s,i)=>{for(const o of n)o.type!==We.INTERFACE&&(e.push({node:o,path:[...s],pathNames:[...i],depth:s.length}),o.graph&&t(o.graph.nodes,[...s,o.id],[...i,o.name]))};return t(Array.from(U(lt).values()),[],["Root"]),e}const le={nodes:{subscribe:Sd.subscribe},connections:{subscribe:aS.subscribe},annotations:{subscribe:rS.subscribe},subsystemEvents:{subscribe:lS.subscribe},selectedNodeIds:{subscribe:xt.subscribe},nodesArray:{subscribe:cS.subscribe},selectedNodes:{subscribe:dS.subscribe},currentPath:{subscribe:qe.subscribe},breadcrumbs:{subscribe:uS.subscribe},subsystemTree:{subscribe:pS.subscribe},drillDown:bS,drillUp:wS,navigateTo:_S,navigateToPath:xS,isAtRoot:kS,getCurrentPath:SS,addNode:VS,removeNode:WS,updateNodePosition:KS,updateNodeName:GS,updateNodeColor:jS,updateNodeParams:YS,updateNode:XS,getNode:US,getAllNodes:ZS,duplicateSelected:JS,nudgeSelectedNodes:QS,pasteNodes:$S,addConnection:eI,removeConnection:tI,getAllConnections:nI,updateConnectionWaypoints:sI,addInputPort:RS,removeInputPort:zS,addOutputPort:LS,removeOutputPort:HS,updateNodePortName:qS,addAnnotation:fS,updateAnnotation:Th,updateAnnotationPosition:hS,removeAnnotation:mS,getAnnotation:gS,addSubsystemEvent:iI,removeSubsystemEvent:oI,updateSubsystemEventPosition:aI,updateSubsystemEventName:rI,updateSubsystemEventParams:lI,updateSubsystemEventColor:cI,getSubsystemEvent:dI,getSubsystemEvents:uI,selectNode:vI,deselectNode:yI,clearSelection:bI,hasSelection:wI,selectAll:_I,clear:xI,toJSON:kI,fromJSON:SI,getAllNodesWithPaths:II},EI=50;let Mn=[],Ss=[],Ut=!1,ra=null,zc=!1,Yt=0,Nn=null;const Gh=Ie({undoStack:[],redoStack:[],canUndo:!1,canRedo:!1});function Wl(){Gh.set({undoStack:Mn,redoStack:Ss,canUndo:Mn.length>0,canRedo:Ss.length>0})}function _r(){return{graph:le.toJSON(),events:Mt.toJSON()}}function Dd(e){Mn.push(e),Mn.length>EI&&Mn.shift(),Ss=[],Wl()}function jh(e){zc=!0;try{le.fromJSON(e.graph.nodes,e.graph.connections,e.graph.annotations),Mt.fromJSON(e.events)}finally{queueMicrotask(()=>{zc=!1})}}function TI(){return zc}function CI(e){if(Ut)return e();const t=Yt===0;t&&(Nn=_r()),Yt++;try{const n=e();return t&&Nn&&Dd(Nn),n}catch(n){throw n}finally{Yt--,Yt===0&&(Nn=null)}}async function NI(e){if(Ut)return e();const t=Yt===0;t&&(Nn=_r()),Yt++;try{const n=await e();return t&&Nn&&Dd(Nn),n}catch(n){throw n}finally{Yt--,Yt===0&&(Nn=null)}}function PI(){return Yt>0||Ut}function MI(){Ut||(Ut=!0,ra=_r())}function AI(){Ut&&(Ut=!1,ra&&(Dd(ra),ra=null))}function DI(){Ut=!1,ra=null}function OI(){if(Ut||Yt>0||Mn.length===0)return!1;const e=_r(),t=Mn.pop();return Ss.push(e),jh(t),Wl(),!0}function RI(){if(Ut||Yt>0||Ss.length===0)return!1;const e=_r(),t=Ss.pop();return Mn.push(e),jh(t),Wl(),!0}function LI(){Mn=[],Ss=[],Ut=!1,ra=null,Yt=0,Nn=null,Wl()}function zI(){return Ut}const Fe={subscribe:Gh.subscribe,mutate:CI,mutateAsync:NI,isInMutation:PI,beginDrag:MI,endDrag:AI,cancelDrag:DI,undo:OI,redo:RI,clear:LI,isInDrag:zI,isRestoringState:TI},dc=Ie(!1),Yh={subscribe:dc.subscribe,toggle(){dc.update(e=>!e)},set(e){dc.set(e)}},Xh="pathview-portLabels";function HI(){return localStorage.getItem(Xh)==="true"}const Ka=Ie(HI());Ka.subscribe(e=>{localStorage.setItem(Xh,String(e))});const FI={subscribe:Ka.subscribe,toggle(){Ka.update(e=>!e)},set(e){Ka.set(e)},get(){return U(Ka)}},Uh="pathview-iconMode";function BI(){return localStorage.getItem(Uh)==="true"}const Ga=Ie(BI());Ga.subscribe(e=>{localStorage.setItem(Uh,String(e))});const qI={subscribe:Ga.subscribe,toggle(){Ga.update(e=>!e)},set(e){Ga.set(e)},get(){return U(Ga)}},VI=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M 60 18 L 60 14 L 36 14 L 44 32 L 36 50 L 60 50 L 60 46"/>
</svg>
`,WI=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="26,10 26,54 78,32"/>
</svg>
`,KI=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14 14 H 32 A 18 18 0 0 1 32 50 H 14 Z"/>
</svg>
`,GI=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="14,14 14,50 46,32"/>
  <circle cx="50" cy="32" r="4"/>
</svg>
`,jI=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 14 Q 24 32, 12 50 Q 32 50, 50 32 Q 32 14, 12 14 Z"/>
</svg>
`,YI=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M 36 50 L 36 16 M 60 50 L 60 16 M 32 16 L 64 16"/>
</svg>
`,XI=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="6" y="8" width="84" height="48" rx="3" stroke-dasharray="4 3"/>
  <rect x="14" y="20" width="18" height="10" rx="1.5"/>
  <rect x="39" y="34" width="18" height="10" rx="1.5"/>
  <rect x="64" y="20" width="18" height="10" rx="1.5"/>
</svg>
`,UI=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="22" y1="22" x2="40" y2="22"/>
  <line x1="22" y1="42" x2="40" y2="42"/>
  <line x1="56" y1="32" x2="74" y2="32"/>
  <line x1="40" y1="22" x2="56" y2="32"/>
  <circle cx="40" cy="22" r="2.5" fill="currentColor" stroke="none"/>
  <circle cx="40" cy="42" r="2.5" fill="currentColor" stroke="none"/>
  <circle cx="56" cy="32" r="2.5" fill="currentColor" stroke="none"/>
</svg>
`,ZI=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="10" y1="56" x2="88" y2="56"/>
  <line x1="12" y1="8" x2="12" y2="58"/>
  <path d="M 16 18 L 22 18 L 22 13 L 32 13 L 32 18 L 80 18"/>
  <path d="M 16 28 L 34 28 L 34 23 L 44 23 L 44 28 L 80 28"/>
  <path d="M 16 38 L 46 38 L 46 33 L 56 33 L 56 38 L 80 38"/>
  <path d="M 16 48 L 58 48 L 58 43 L 68 43 L 68 48 L 80 48"/>
</svg>
`,hn={x0:12,x1:88,y0:8,y1:56},Ar=8,vl={x0:hn.x0+Ar/2,x1:hn.x1-Ar,y0:hn.y0+Ar,y1:hn.y1-Ar/2,get width(){return this.x1-this.x0},get height(){return this.y1-this.y0}};function Hc(e,t=0,n=1){const s=(e-t)/(n-t);return vl.x0+s*vl.width}function Fc(e,t=0,n=1){const s=(e-t)/(n-t);return vl.y1-s*vl.height}function ep(e,t=0,n=1,s=0,i=1){if(e.length===0)return"";const o=[];let a=!1;for(const[r,c]of e){if(!Number.isFinite(c)){a=!1;continue}const d=Hc(r,t,n).toFixed(2),u=Fc(c,s,i).toFixed(2);o.push(`${a?"L":"M"} ${d} ${u}`),a=!0}return o.join(" ")}function JI(e=1.5,t=64){const n=[];for(let s=0;s<t;s++){const i=s/(t-1);n.push([i,Math.sin(2*Math.PI*e*i)])}return n}function QI(e=1.5){const t=[],n=1/e;let s=0;for(t.push([0,1]);s<1;){const i=Math.min(1,s+n/2);t.push([i,1]),t.push([i,-1]);const o=Math.min(1,s+n);t.push([o,-1]),o<1&&t.push([o,1]),s+=n}return t}function $I(e=1.5,t=80){const n=[];for(let s=0;s<t;s++){const i=s/(t-1),o=i*e*2%2,a=o<1?o:2-o;n.push([i,a*2-1])}return n}function eE(e=.6,t=.5,n=.05,s=.15,i=.07){const o=[[0,0]];let a=n;for(;a<1;){o.push([a,0]),o.push([Math.min(1,a+s),1]);const r=a+e*t;o.push([Math.min(1,r),1]),o.push([Math.min(1,r+i),0]),a+=e}return o.push([1,0]),o}function tE(e=.25){return[[0,0],[e,0],[e,1],[1,1]]}function nE(e=.5,t=.13,n=80){const s=[];for(let i=0;i<n;i++){const o=i/(n-1);s.push([o,Math.exp(-((o-e)**2)/(2*t*t))])}return s}function sE(e=1,t=6,n=120){const s=[];for(let i=0;i<n;i++){const o=i/(n-1),a=t-e,r=2*Math.PI*(e*o+.5*a*o*o);s.push([o,Math.sin(r)])}return s}function tp(e=28,t=5){let n=t;const s=()=>(n=(n*9301+49297)%233280,n/233280),i=[];for(let a=0;a<e;a++){const r=Math.max(1e-6,s()),c=s();i.push(Math.sqrt(-2*Math.log(r))*Math.cos(2*Math.PI*c))}const o=Math.max(...i.map(Math.abs));return i.map((a,r)=>[r/(e-1),a/o*.95])}function iE(e=35,t=11){let n=t;const s=()=>(n=(n*9301+49297)%233280,n/233280-.5),i=5,o=new Array(i).fill(0),a=new Array(i).fill(0),r=[];for(let d=0;d<e;d++){let u=0;for(let f=0;f<i;f++)a[f]===0&&(o[f]=s(),a[f]=1<<f),a[f]--,u+=o[f];r.push(u)}const c=Math.max(...r.map(Math.abs));return r.map((d,u)=>[u/(e-1),d/c*.9])}function oE(e=1){return[[0,e],[1,e]]}function aE(e=.32,t=.06){const n=[[0,0]];let s=t;for(;s<1;){n.push([s,0]),n.push([s,1]);const i=Math.min(1,s+e/2);n.push([i,1]),n.push([i,0]),s+=e}return n.push([1,0]),n}function np(e=.18,t=.15,n=60){const s=[];for(let i=0;i<n;i++){const o=i/(n-1);o<t?s.push([o,0]):s.push([o,1-Math.exp(-(o-t)/e)])}return s}function Zh(e=.25,t=22,n=.15,s=100){const i=[],o=t*Math.sqrt(1-e*e),a=Math.atan2(Math.sqrt(1-e*e),e);for(let r=0;r<s;r++){const c=r/(s-1);if(c<n)i.push([c,0]);else{const d=c-n,u=Math.exp(-e*t*d)/Math.sqrt(1-e*e);i.push([c,1-u*Math.sin(o*d+a)])}}return i}function rE(e=60){const t=[];for(let r=0;r<e;r++){const c=r/(e-1);if(c<.15)t.push([c,0]);else{const d=c-.15,u=1.4*Math.exp(-d/.06)+1*(1-Math.exp(-d/.25));t.push([c,u])}}return t}function lE(e=.15){return[[0,0],[e,0],[1,1-e]]}function cE(e=1,t=64){const n=[];for(let s=0;s<t;s++){const i=s/(t-1);n.push([i,Math.sin(2*Math.PI*e*i)])}return n}function dE(e=.25,t=1,n=56){const s=[[0,0],[e,0]];for(let i=1;i<n;i++){const o=e+(1-e)*(i/(n-1));s.push([o,Math.sin(2*Math.PI*t*(o-e))])}return s}function uE(e=4,t=80){const n=[];for(let o=0;o<t;o++){const a=o/(t-1),r=Math.pow(10,-1.2+a*(1.2- -1.2));n.push([a,1/Math.sqrt(1+Math.pow(r,2*e))])}return n}function pE(e=4,t=80){const n=[];for(let o=0;o<t;o++){const a=o/(t-1),r=Math.pow(10,-1.2+a*(1.2- -1.2));n.push([a,Math.pow(r,e)/Math.sqrt(1+Math.pow(r,2*e))])}return n}function fE(e=2,t=2,n=100){const s=[];for(let a=0;a<n;a++){const r=a/(n-1),c=Math.pow(10,-1.5+r*(1.5- -1.5)),d=Math.pow(c/t,e),u=Math.sqrt(Math.pow(1-c*c,2*e)+Math.pow(c/t,2*e));s.push([r,d/u])}return s}function hE(e=2,t=2,n=100){const s=[];for(let a=0;a<n;a++){const r=a/(n-1),c=Math.pow(10,-1.5+r*(1.5- -1.5)),d=Math.pow(Math.abs(1-c*c),e),u=Math.sqrt(Math.pow(1-c*c,2*e)+Math.pow(c/t,2*e));s.push([r,d/u])}return s}function mE(e=80){const t=[],i=Math.pow(10,1.2);for(let o=0;o<e;o++){const a=o/(e-1),r=Math.pow(10,-1.2+a*(1.2- -1.2));t.push([a,r/i])}return t}function gE(e=80){const t=[];for(let n=0;n<e;n++){const s=n/(e-1),i=Math.pow(10,-1.2+s*2.4),o=Math.abs(Math.sin(i*1.2)/(i*1.2+1e-4)),a=1/Math.sqrt(1+Math.pow(i/1,6));t.push([s,o*a])}return t}function vE(e=80){const t=[];for(let n=0;n<e;n++){const s=-Math.PI+2*Math.PI*n/(e-1);t.push([s,Math.sin(s)])}return t}function yE(e=80){const t=[];for(let n=0;n<e;n++){const s=-Math.PI+2*Math.PI*n/(e-1);t.push([s,Math.cos(s)])}return t}function bE(e=2,t=60){const n=[];for(let s=0;s<t;s++){const i=-1+2*s/(t-1);n.push([i,Math.pow(i,e)])}return n}function sp(e=6){const t=[];for(let n=0;n<e;n++){const s=-1+2*n/e,i=-1+2*(n+1)/e,o=-1+2*(n+.5)/e;t.push([s,o]),t.push([i,o])}return t}function uc(e=6){const t=[];for(let n=0;n<e;n++){const s=n/e,i=(n+1)/e,o=n/(e-1);t.push([s,o]),t.push([i,o])}return t}function wE(e=.12,t=100){return Zh(.4,18,e,t)}function _E(e=.3){const t=[];let n=0;for(;n<1;){t.push([n,0]);const s=Math.min(1,n+e);t.push([s,(s-n)/e]),s<1&&t.push([s,0]),n=s}return t}function xE(e=1.55,t=240){const n=[];for(let s=0;s<t;s++){const i=-Math.PI+2*Math.PI*s/(t-1),o=Math.tan(i);!Number.isFinite(o)||Math.abs(o)>e?n.push([i,NaN]):n.push([i,o])}return n}function kE(){return[[-1,-.6],[-.5,-.55],[-.05,0],[.4,.55],[.75,.75],[1,.78]]}function ip(e=.4,t=80){const n=[];for(let o=0;o<t;o++){const a=o/(t-1),r=Math.pow(10,-1.2+a*(1.2- -1.2)),c=Math.sqrt(Math.pow(1-r*r,2)+Math.pow(2*e*r,2));n.push([a,1/c])}return n}function SE(e=4,t=60){const n=[];for(let s=0;s<t;s++){const i=-1+2*(s/(t-1));n.push([i,Math.tanh(i*e)])}return n}function IE(e=60){const t=[];for(let n=0;n<e;n++){const s=n/(e-1);t.push([s,(Math.exp(s*2.2)-1)/(Math.exp(2.2)-1)])}return t}function op(e=60){const t=[];for(let n=0;n<e;n++){const s=n/(e-1);t.push([s,Math.log(1+9*s)/Math.log(10)])}return t}function EE(e=60){const t=[];for(let n=0;n<e;n++){const s=n/(e-1);t.push([s,Math.sqrt(s)])}return t}function TE(e=60){const t=[];for(let n=0;n<e;n++){const s=-1+2*(n/(e-1));t.push([s,Math.abs(s)])}return t}function CE(e=.6){return[[-1,-e],[-e,-e],[e,e],[1,e]]}function NE(e=.3){return[[-1,-1+e],[-e,0],[e,0],[1,1-e]]}function PE(e=.3){return[[-1,-1],[e,-1],[e,1],[1,1],[-e,1],[-e,-1],[-1,-1]]}function ME(){return[[0,0],[.15,0],[.15+.45,1],[1,1]]}function AE(e=6){const t=[],n=[.1,.3,.55,.75,.55,.85];for(let s=0;s<e;s++){const i=s/e,o=(s+1)/e;t.push([i,n[s]]),t.push([o,n[s]])}return t}function DE(e=6){const t=[.1,.3,.55,.75,.55,.85],n=[];for(let s=0;s<e;s++)n.push([s/(e-1),t[s]]);return n}function OE(){return[[-1,-.7],[-.3,-.7],[.3,.7],[1,.7]]}function RE(e=220){const t=[];for(let n=0;n<e;n++){const s=n/(e-1),i=.55*Math.sin(2*Math.PI*1.2*s)+.4*Math.sin(2*Math.PI*5.2*s+.4)+.08*Math.cos(2*Math.PI*11*s);t.push([s,i])}return t}function LE(){const e=[[.08,.15],[.18,.55],[.28,.85],[.38,.65],[.5,.4],[.62,.7],[.74,.3],[.86,.5],[.94,.18]],t=[[0,0]];for(const[n,s]of e)t.push([n,0]),t.push([n,s]),t.push([n,0]);return t.push([1,0]),t}const dn=[-1.05,1.05],St=[-1.1,1.1],ap=[-.7,.7],rp=[0,1.5],zE=[0,1.6],pc=[-Math.PI*1.05,Math.PI*1.05],lp=[0,1.6],Jh={Constant:{kind:"plot",samples:()=>oE()},StepSource:{kind:"plot",samples:()=>tE()},SinusoidalSource:{kind:"plot",samples:()=>JI(),yRange:St},SquareWaveSource:{kind:"plot",samples:()=>QI(),yRange:St},TriangleWaveSource:{kind:"plot",samples:()=>$I(),yRange:St},PulseSource:{kind:"plot",samples:()=>eE()},GaussianPulseSource:{kind:"plot",samples:()=>nE()},ChirpPhaseNoiseSource:{kind:"plot",samples:()=>sE(),yRange:St},WhiteNoise:{kind:"plot",samples:()=>tp(),yRange:St},PinkNoise:{kind:"plot",samples:()=>iE(),yRange:St},RandomNumberGenerator:{kind:"plot",samples:()=>tp(16,13),yRange:St},ClockSource:{kind:"plot",samples:()=>aE()},Source:{kind:"math",latex:"f(t)"},PT1:{kind:"plot",samples:()=>np()},PT2:{kind:"plot",samples:()=>Zh(),yRange:rp},LeadLag:{kind:"plot",samples:()=>rE(),yRange:zE},Integrator:{kind:"plot",samples:()=>lE()},Differentiator:{kind:"plot",samples:()=>mE()},Delay:{kind:"plot",samples:()=>dE(),samplesDashed:()=>cE(),yRange:St},PID:{kind:"plot",samples:()=>wE(),yRange:rp},AntiWindupPID:{kind:"plot",samples:()=>np(.12,.12)},ButterworthLowpassFilter:{kind:"plot",samples:()=>uE()},ButterworthHighpassFilter:{kind:"plot",samples:()=>pE()},ButterworthBandpassFilter:{kind:"plot",samples:()=>fE()},ButterworthBandstopFilter:{kind:"plot",samples:()=>hE()},FIR:{kind:"plot",samples:()=>gE()},TransferFunctionNumDen:{kind:"plot",samples:()=>ip(.35),yRange:lp},TransferFunctionZPG:{kind:"plot",samples:()=>ip(.35),yRange:lp},Tanh:{kind:"plot",samples:()=>SE(),xRange:dn,yRange:St},Exp:{kind:"plot",samples:()=>IE()},Log:{kind:"plot",samples:()=>op()},Log10:{kind:"plot",samples:()=>op()},Sqrt:{kind:"plot",samples:()=>EE()},Abs:{kind:"plot",samples:()=>TE(),xRange:dn},Clip:{kind:"plot",samples:()=>CE(),xRange:dn,yRange:ap},Deadband:{kind:"plot",samples:()=>NE(),xRange:dn,yRange:ap},Relay:{kind:"plot",samples:()=>PE(),xRange:dn,yRange:St},RateLimiter:{kind:"plot",samples:()=>ME()},SampleHold:{kind:"plot",samples:()=>AE()},Backlash:{kind:"plot",samples:()=>OE(),xRange:dn,yRange:St},Sin:{kind:"plot",samples:()=>vE(),xRange:pc,yRange:St},Cos:{kind:"plot",samples:()=>yE(),xRange:pc,yRange:St},Tan:{kind:"plot",samples:()=>xE(),xRange:pc,yRange:[-1.6,1.6]},Pow:{kind:"plot",samples:()=>bE(2),xRange:dn},Mod:{kind:"plot",samples:()=>_E()},ADC:{kind:"plot",samples:()=>sp(),xRange:dn,yRange:St},DAC:{kind:"plot",samples:()=>sp(),xRange:dn,yRange:St},Counter:{kind:"plot",samples:()=>uc()},CounterUp:{kind:"plot",samples:()=>uc(),decoration:"arrow-up"},CounterDown:{kind:"plot",samples:()=>uc(),decoration:"arrow-down"},LUT1D:{kind:"plot",samples:()=>kE(),xRange:dn,yRange:St,markers:!0},LUT:{kind:"surface",fn:(e,t)=>-.18*(e+t)+.3*e*t},ODE:{kind:"math",latex:"\\dot{x} = f(x, u, t)"},StateSpace:{kind:"math",latex:"\\begin{aligned}\\dot{x} &= Ax{+}Bu\\\\ y &= Cx{+}Du\\end{aligned}"},DynamicalSystem:{kind:"math",latex:"\\begin{aligned}\\dot{x} &= f(x, u, t)\\\\ y &= g(x, u, t)\\end{aligned}"},DynamicalFunction:{kind:"math",latex:"f(u, t)"},Function:{kind:"math",latex:"f(u)"},Polynomial:{kind:"math",latex:"y = \\sum_{k=0}^{n} c_k\\,u^{n-k}"},FirstOrderHold:{kind:"plot",samples:()=>DE()},DiscreteIntegrator:{kind:"math",latex:"\\dfrac{T}{z-1}"},DiscreteDerivative:{kind:"math",latex:"\\dfrac{z-1}{T\\,z}"},DiscreteStateSpace:{kind:"math",latex:"\\begin{aligned}x[k{+}1] &= Ax[k]{+}Bu[k]\\\\ y[k] &= Cx[k]{+}Du[k]\\end{aligned}"},DiscreteTransferFunction:{kind:"math",latex:"H(z) = \\dfrac{B(z)}{A(z)}"},TappedDelay:{kind:"svg",name:"TappedDelay"},Adder:{kind:"svg",name:"Adder"},Multiplier:{kind:"svg",name:"Multiplier"},Amplifier:{kind:"svg",name:"Amplifier"},Rescale:{kind:"svg",name:"Amplifier"},LogicAnd:{kind:"svg",name:"LogicAnd"},LogicOr:{kind:"svg",name:"LogicOr"},LogicNot:{kind:"svg",name:"LogicNot"},Switch:{kind:"svg",name:"Switch"},Subsystem:{kind:"svg",name:"Subsystem"},Scope:{kind:"scope",samples:()=>RE(),yRange:[-1.05,1.05],gridX:0,gridY:0},Spectrum:{kind:"scope",samples:()=>LE(),yRange:[0,1],gridX:0,gridY:0}};function HE(e){return e?Jh[e]:void 0}function FE(e){return!!e&&e in Jh}var BE=Y("<line></line>"),qE=Y("<line></line>"),VE=Y('<path stroke-dasharray="3 2.5"></path>'),WE=Y('<circle r="3" fill="currentColor" stroke="none"></circle>'),KE=Y('<path d="M 88 40 L 88 24 M 84 28 L 88 24 L 92 28"></path>'),GE=Y('<path d="M 88 24 L 88 40 M 84 36 L 88 40 L 92 36"></path>'),jE=Y('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="svelte-1384908"><!><!><!><path></path><!><!></svg>');function YE(e,t){Ne(t,!0);let n=te(t,"xRange",19,()=>[0,1]),s=te(t,"yRange",19,()=>[0,1]),i=te(t,"axes",3,"cross"),o=te(t,"markers",3,!1);const a=y(()=>ep(t.samples,n()[0],n()[1],s()[0],s()[1])),r=y(()=>t.samplesDashed?ep(t.samplesDashed,n()[0],n()[1],s()[0],s()[1]):""),c=y(()=>s()[0]<=0&&s()[1]>=0?Fc(0,s()[0],s()[1]):hn.y1),d=y(()=>n()[0]<=0&&n()[1]>=0?Hc(0,n()[0],n()[1]):hn.x0),u=y(()=>t.samples.filter(([,N])=>Number.isFinite(N)));var f=jE(),p=ue(f);{var h=N=>{var L=BE();F(()=>{k(L,"x1",hn.x0),k(L,"y1",l(c)),k(L,"x2",hn.x1),k(L,"y2",l(c))}),_(N,L)};V(p,N=>{(i()==="baseline"||i()==="cross")&&N(h)})}var g=ye(p);{var v=N=>{var L=qE();F(()=>{k(L,"x1",l(d)),k(L,"y1",hn.y0),k(L,"x2",l(d)),k(L,"y2",hn.y1)}),_(N,L)};V(g,N=>{i()==="cross"&&N(v)})}var b=ye(g);{var x=N=>{var L=VE();F(()=>k(L,"d",l(r))),_(N,L)};V(b,N=>{l(r)&&N(x)})}var S=ye(b),A=ye(S);{var m=N=>{var L=X(),W=j(L);_t(W,17,()=>l(u),mn,(O,T)=>{var M=y(()=>xa(l(T),2));let w=()=>l(M)[0],E=()=>l(M)[1];var C=WE();F((z,K)=>{k(C,"cx",z),k(C,"cy",K)},[()=>Hc(w(),n()[0],n()[1]),()=>Fc(E(),s()[0],s()[1])]),_(O,C)}),_(N,L)};V(A,N=>{o()&&N(m)})}var D=ye(A);{var I=N=>{var L=KE();_(N,L)},P=N=>{var L=X(),W=j(L);{var O=T=>{var M=GE();_(T,M)};V(W,T=>{t.decoration==="arrow-down"&&T(O)},!0)}_(N,L)};V(D,N=>{t.decoration==="arrow-up"?N(I):N(P,!1)})}ce(f),F(()=>k(S,"d",l(a))),_(e,f),Pe()}let Dr=null;async function Od(){return Dr||(Dr=await ib(()=>import("./XbL3y5x-.js"),[],import.meta.url),Dr)}function Qh(){return"https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"}var XE=be('<span class="math svelte-1io0tjp"><span class="inner svelte-1io0tjp"><!></span></span>');function UE(e,t){Ne(t,!0);let n=ve(""),s=ve(void 0),i=ve(void 0),o=ve(1);const a=1.6,r=.4,c=6,d=4;async function u(){if(await af(),!l(s)||!l(i))return;const v=l(i).clientWidth-2*c,b=l(i).clientHeight-2*d,x=l(s).scrollWidth,S=l(s).scrollHeight;if(x===0||S===0||v<=0||b<=0)return;const A=Math.min(v/x,b/S);H(o,Math.max(r,Math.min(a,A)),!0)}ed(async()=>{const v=await Od();try{H(n,v.default.renderToString(t.latex,{displayMode:!0,throwOnError:!1,strict:!1,output:"html"}),!0)}catch{H(n,t.latex,!0)}await u()}),je(()=>{l(n)&&u()}),je(()=>{if(!l(i))return;const v=new ResizeObserver(()=>u());return v.observe(l(i)),()=>v.disconnect()});var f=XE(),p=ue(f),h=ue(p);{var g=v=>{var b=X(),x=j(b);Tl(x,()=>l(n)),_(v,b)};V(h,v=>{l(n)&&v(g)})}ce(p),tn(p,v=>H(s,v),()=>l(s)),ce(f),tn(f,v=>H(i,v),()=>l(i)),F(()=>st(p,`transform: scale(${l(o)??""});`)),_(e,f),Pe()}var ZE=Y(`<svg xmlns="http://www.w3.org/2000/svg" class="svelte-61qc8h"><text text-anchor="middle" dominant-baseline="central" fill="currentColor" stroke="none" font-family="ui-monospace, 'JetBrains Mono', 'SF Mono', Menlo, monospace" letter-spacing="-1"> </text></svg>`);function JE(e,t){let n=te(t,"size",3,.45),s=te(t,"bold",3,!0);const i=96,o=64,a=y(()=>o*n());var r=ZE();k(r,"viewBox","0 0 96 64");var c=ue(r);k(c,"x",i/2),k(c,"y",o/2);var d=ue(c,!0);ce(c),ce(r),F(()=>{k(c,"font-size",l(a)),k(c,"font-weight",s()?700:500),mt(d,t.text)}),_(e,r)}var QE=Y("<line></line>"),$E=Y("<line></line>"),eT=Y('<path stroke-width="1.5" stroke-dasharray="4 4" stroke-dashoffset="2"></path>'),tT=Y('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="svelte-odzmgb"><rect rx="3" stroke-width="1.5"></rect><g stroke-width="0.6" opacity="0.4"><!><!></g><path stroke-width="1.5"></path><!></svg>');function nT(e,t){Ne(t,!0);let n=te(t,"yRange",19,()=>[-1.1,1.1]),s=te(t,"gridX",3,4),i=te(t,"gridY",3,3);const o={x0:5,x1:91,y0:6,y1:58},a=o.x1-o.x0,r=o.y1-o.y0,c=7,d=o.x0+c,u=o.x1-c,f=o.y0+c,p=o.y1-c;function h(T){return d+T*(u-d)}function g(T){const M=(T-n()[0])/(n()[1]-n()[0]);return p-M*(p-f)}function v(T){return T.map(([M,w],E)=>`${E===0?"M":"L"} ${h(M).toFixed(2)} ${g(w).toFixed(2)}`).join(" ")}const b=y(()=>v(t.samples)),x=y(()=>t.samples2?v(t.samples2):""),S=y(()=>Array.from({length:s()-1},(T,M)=>o.x0+(M+1)*a/s())),A=y(()=>Array.from({length:i()-1},(T,M)=>o.y0+(M+1)*r/i()));var m=tT(),D=ue(m),I=ye(D),P=ue(I);_t(P,17,()=>l(S),mn,(T,M)=>{var w=QE();F(()=>{k(w,"x1",l(M)),k(w,"y1",o.y0+1),k(w,"x2",l(M)),k(w,"y2",o.y1-1)}),_(T,w)});var N=ye(P);_t(N,17,()=>l(A),mn,(T,M)=>{var w=$E();F(()=>{k(w,"x1",o.x0+1),k(w,"y1",l(M)),k(w,"x2",o.x1-1),k(w,"y2",l(M))}),_(T,w)}),ce(I);var L=ye(I),W=ye(L);{var O=T=>{var M=eT();F(()=>k(M,"d",l(x))),_(T,M)};V(W,T=>{l(x)&&T(O)})}ce(m),F(()=>{k(D,"x",o.x0),k(D,"y",o.y0),k(D,"width",a),k(D,"height",r),k(L,"d",l(b))}),_(e,m),Pe()}var sT=Y('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="svelte-16dl6zq"><path stroke-width="1.5"></path><path stroke-width="1.5"></path></svg>');function iT(e,t){Ne(t,!0);let n=te(t,"rows",3,5),s=te(t,"cols",3,5),i=te(t,"fn",3,(S,A)=>.5*(S*S-A*A));const o=48,a=36,r=17,c=.45,d=11;function u(S,A,m){const D=o+(S-A)*r,I=a+(S+A)*r*c-m*d;return[D,I]}const f=y(()=>{const S=[];for(let A=0;A<n();A++){const m=-1+2*A/(n()-1),D=[];for(let I=0;I<s();I++){const P=-1+2*I/(s()-1);D.push(u(P,m,i()(P,m)))}S.push(D)}return S});function p(S){const A=[];for(let m=0;m<S.length;m++){A.push(`M ${S[m][0][0].toFixed(2)} ${S[m][0][1].toFixed(2)}`);for(let D=1;D<S[m].length;D++)A.push(`L ${S[m][D][0].toFixed(2)} ${S[m][D][1].toFixed(2)}`)}for(let m=0;m<S[0].length;m++){A.push(`M ${S[0][m][0].toFixed(2)} ${S[0][m][1].toFixed(2)}`);for(let D=1;D<S.length;D++)A.push(`L ${S[D][m][0].toFixed(2)} ${S[D][m][1].toFixed(2)}`)}return A.join(" ")}const h=y(()=>p(l(f))),g=y(()=>{if(l(f).length===0)return"";const S=n()-1,A=s()-1,m=[];for(let D=0;D<=A;D++)m.push(l(f)[0][D]);for(let D=1;D<=S;D++)m.push(l(f)[D][A]);for(let D=A-1;D>=0;D--)m.push(l(f)[S][D]);for(let D=S-1;D>=1;D--)m.push(l(f)[D][0]);return m.map(([D,I],P)=>`${P===0?"M":"L"} ${D.toFixed(2)} ${I.toFixed(2)}`).join(" ")+" Z"});var v=sT(),b=ue(v),x=ye(b);ce(v),F(()=>{k(b,"d",l(h)),k(x,"d",l(g))}),_(e,v),Pe()}const oT=Object.assign({"./blocks/svg/Adder.svg":VI,"./blocks/svg/Amplifier.svg":WI,"./blocks/svg/LogicAnd.svg":KI,"./blocks/svg/LogicNot.svg":GI,"./blocks/svg/LogicOr.svg":jI,"./blocks/svg/Multiplier.svg":YI,"./blocks/svg/Subsystem.svg":XI,"./blocks/svg/Switch.svg":UI,"./blocks/svg/TappedDelay.svg":ZI}),$h=new Map;for(const[e,t]of Object.entries(oT)){const n=e.match(/\/([^/]+)\.svg$/);n&&$h.set(n[1],t)}function aT(e){return FE(e)}var rT=be('<span class="block-icon svelte-kd944p"><!></span>');function lT(e,t){Ne(t,!0);const n=y(()=>HE(t.blockClass)),s=y(()=>l(n)?.kind==="svg"?$h.get(l(n).name):void 0);var i=X(),o=j(i);{var a=r=>{var c=rT(),d=ue(c);{var u=p=>{{let h=y(()=>l(n).samples()),g=y(()=>l(n).samplesDashed?.());YE(p,{get samples(){return l(h)},get samplesDashed(){return l(g)},get xRange(){return l(n).xRange},get yRange(){return l(n).yRange},get axes(){return l(n).axes},get markers(){return l(n).markers},get decoration(){return l(n).decoration}})}},f=p=>{var h=X(),g=j(h);{var v=x=>{{let S=y(()=>l(n).samples()),A=y(()=>l(n).samples2?.());nT(x,{get samples(){return l(S)},get samples2(){return l(A)},get yRange(){return l(n).yRange},get gridX(){return l(n).gridX},get gridY(){return l(n).gridY}})}},b=x=>{var S=X(),A=j(S);{var m=I=>{iT(I,{get fn(){return l(n).fn},get rows(){return l(n).rows},get cols(){return l(n).cols}})},D=I=>{var P=X(),N=j(P);{var L=O=>{UE(O,{get latex(){return l(n).latex}})},W=O=>{var T=X(),M=j(T);{var w=C=>{JE(C,{get text(){return l(n).text},get size(){return l(n).size}})},E=C=>{var z=X(),K=j(z);{var B=Z=>{var Q=X(),ee=j(Q);Tl(ee,()=>l(s)),_(Z,Q)};V(K,Z=>{l(n).kind==="svg"&&l(s)&&Z(B)},!0)}_(C,z)};V(M,C=>{l(n).kind==="glyph"?C(w):C(E,!1)},!0)}_(O,T)};V(N,O=>{l(n).kind==="math"?O(L):O(W,!1)},!0)}_(I,P)};V(A,I=>{l(n).kind==="surface"?I(m):I(D,!1)},!0)}_(x,S)};V(g,x=>{l(n).kind==="scope"?x(v):x(b,!1)},!0)}_(p,h)};V(d,p=>{l(n).kind==="plot"?p(u):p(f,!1)})}ce(c),F(()=>{k(c,"aria-label",t.title),k(c,"role",t.title?"img":void 0)}),_(r,c)};V(o,r=>{l(n)&&r(a)})}_(e,i),Pe()}const cT=15,dT=400,fc=.5,uT=.2;function pT(e,t){if(t<=1)return fc;const n=fc-uT;return fc-e/(t-1)*n}const cp=rf.tracePalette;function fT(e,t){return e===0?t:cp[(e-1)%cp.length]}function hT(){return typeof document>"u"?"#0070C0":getComputedStyle(document.documentElement).getPropertyValue("--accent").trim()||"#0070C0"}const X3={solid:"solid",dash:"dash",dot:"dot"},mT={solid:"",dash:"6,3",dot:"2,2"},U3={circle:"circle",square:"square","triangle-up":"triangle-up"},er=224,tr=96,em=8,ja=12;function tm(e){switch(e){case 1:return"bottom";case 2:return"left";case 3:return"top";default:return"right"}}function gT(e,t){const n=(e.left+e.right)/2,s=(e.top+e.bottom)/2,i=er/2,o=tr/2;switch(t){case"right":return{left:e.left,top:Math.min(e.top,s-o),right:e.right+ja+er,bottom:Math.max(e.bottom,s+o)};case"left":return{left:e.left-ja-er,top:Math.min(e.top,s-o),right:e.right,bottom:Math.max(e.bottom,s+o)};case"bottom":return{left:Math.min(e.left,n-i),top:e.top,right:Math.max(e.right,n+i),bottom:e.bottom+ja+tr};case"top":return{left:Math.min(e.left,n-i),top:e.top-ja-tr,right:Math.max(e.right,n+i),bottom:e.bottom}}}const Jo=Ie(null),Bc=Ie(null),Rd=Ie({text:"",x:0,y:0,visible:!1,position:"bottom"});let Jr=null,Qr=null;function qc(e,t,n="bottom",s,i){Qr&&(clearTimeout(Qr),Qr=null),Jr=setTimeout(()=>{const o=t.getBoundingClientRect(),a=i??240,r=28,c=8,d=8;let u=n,f,p;switch(n==="bottom"&&o.bottom+c+r>window.innerHeight-d?u="top":n==="top"&&o.top-c-r<d?u="bottom":n==="right"&&o.right+c+a>window.innerWidth-d?u="left":n==="left"&&o.left-c-a<d&&(u="right"),u){case"left":f=o.left-c,p=o.top+o.height/2;break;case"right":f=o.right+c,p=o.top+o.height/2;break;case"top":f=o.left+o.width/2,p=o.top-c;break;default:f=o.left+o.width/2,p=o.bottom+c;break}Rd.set({text:e,shortcut:s,maxWidth:i,x:f,y:p,visible:!0,position:u})},50)}function yl(){Jr&&(clearTimeout(Jr),Jr=null),Qr=setTimeout(()=>{Rd.update(e=>({...e,visible:!1}))},50)}function Vc(e,t){if(typeof window>"u")return{destroy:()=>{}};let n=typeof t=="string"?t:t.text,s=typeof t=="string"?void 0:t.shortcut,i=typeof t=="string"?void 0:t.maxWidth,o=typeof t=="string"?"bottom":t.position??"bottom";function a(){n&&qc(n,e,o,s,i)}function r(){yl()}return e.addEventListener("mouseenter",a),e.addEventListener("mouseleave",r),{update(c){n=typeof c=="string"?c:c.text,s=typeof c=="string"?void 0:c.shortcut,i=typeof c=="string"?void 0:c.maxWidth,o=typeof c=="string"?"bottom":c.position??"bottom"},destroy(){e.removeEventListener("mouseenter",a),e.removeEventListener("mouseleave",r),yl()}}}var vT=be('<span class="shortcut svelte-11extwn"> </span>'),yT=be('<div><span class="text"> </span> <!></div>');function Z3(e,t){Ne(t,!0);let n=ve(qt({text:"",x:0,y:0,visible:!1,position:"bottom"})),s=ve(void 0);Rd.subscribe(r=>{H(n,r,!0)}),je(()=>{if(!l(n).visible||!l(s))return;l(n).text,l(n).shortcut,l(n).position;const r=8;l(s).style.left=`${l(n).x}px`,l(s).style.top=`${l(n).y}px`;const c=l(s).getBoundingClientRect();let d=0,u=0;c.left<r?d=r-c.left:c.right>window.innerWidth-r&&(d=window.innerWidth-r-c.right),c.top<r?u=r-c.top:c.bottom>window.innerHeight-r&&(u=window.innerHeight-r-c.bottom),d!==0&&(l(s).style.left=`${l(n).x+d}px`),u!==0&&(l(s).style.top=`${l(n).y+u}px`)});var i=X(),o=j(i);{var a=r=>{var c=yT(),d=ue(c),u=ue(d,!0);ce(d);var f=ye(d,2);{var p=h=>{var g=vT(),v=ue(g,!0);ce(g),F(()=>mt(v,l(n).shortcut)),_(h,g)};V(f,h=>{l(n).shortcut&&h(p)})}ce(c),tn(c,h=>H(s,h),()=>l(s)),F(()=>{Qe(c,1,`tooltip tooltip-${l(n).position??""}`,"svelte-11extwn"),st(c,`left: ${l(n).x??""}px; top: ${l(n).y??""}px;${l(n).maxWidth?` max-width: ${l(n).maxWidth}px;`:""}`),mt(u,l(n).text)}),_(r,c)};V(o,r=>{l(n).visible&&r(a)})}_(e,i),Pe()}const dp={blurOnEscape:!0,blurOnEnter:!1};function bT(e,t={}){const n={...dp,...t};function s(i){const o=i;o.key==="Escape"&&n.blurOnEscape&&(o.stopPropagation(),e.blur()),o.key==="Enter"&&n.blurOnEnter&&!(e instanceof HTMLTextAreaElement)&&(o.stopPropagation(),e.blur())}return e.addEventListener("keydown",s),e.setAttribute("autocomplete","off"),{update(i){Object.assign(n,dp,i)},destroy(){e.removeEventListener("keydown",s)}}}let wT=0;const up=500;function _T(){const{subscribe:e,set:t,update:n}=Ie([]);let s=[],i=null;const o=50;function a(){if(s.length===0)return;const c=s;s=[],i=null,n(d=>{const u=[...d,...c];return u.length>up?u.slice(-up):u})}function r(){i===null&&(i=setTimeout(a,o))}return{subscribe:e,log(c,d="info"){s.push({id:wT++,timestamp:new Date,level:d,message:c}),r()},info(c){this.log(c,"info")},warn(c){this.log(c,"warning")},error(c){this.log(c,"error")},output(c){this.log(c,"output")},clear(){s=[],i&&(clearTimeout(i),i=null),t([])},getAll(){return U({subscribe:e})},flush(){i&&clearTimeout(i),a()}}}const $e=_T(),xT={dt:e=>({attr:"dt",code:`sim.dt = ${e}`}),dt_min:e=>({attr:"dt_min",code:`sim.dt_min = ${e}`}),dt_max:e=>({attr:"dt_max",code:`sim.dt_max = ${e}`}),rtol:e=>({attr:"rtol",code:`sim.tolerance_lte_rel = ${e}`}),atol:e=>({attr:"atol",code:`sim.tolerance_lte_abs = ${e}`}),ftol:e=>({attr:"ftol",code:`sim.tolerance_fpi = ${e}`}),solver:e=>({attr:"solver",code:`sim._set_solver(${e})`})};function hc(e){for(const[t,n]of Object.entries(e)){if(n==null||n==="")continue;const s=xT[t];if(s){const{attr:i,code:o}=s(String(n));Bh(i,o)}}}const jn=Ie({...Nt}),es={subscribe:jn.subscribe,update(e){jn.update(t=>({...t,...e})),hc(e)},setDuration(e){jn.update(t=>({...t,duration:e}))},setDt(e){jn.update(t=>({...t,dt:e})),hc({dt:e})},setSolver(e){jn.update(t=>({...t,solver:e})),hc({solver:e})},reset(){jn.set({...Nt})},get(){return U(jn)},set(e){jn.set(e)}},J3=["Sources","Dynamic","DAE","Algebraic","Logic","Discrete","FMI","Recording","Subsystem"],Q3="".split(",").map(e=>e.trim()).filter(Boolean),Vt={SIMULATION:3e5,INIT:12e4,VALIDATION:3e4},nm={STARTING_WORKER:"Starting worker...",STARTING_SIMULATION:"Starting simulation..."},Is={READY:"Ready",COMPLETE:"Complete",STOPPED:"Stopped",RUNNING:"Running"},kT={SIMULATION_COMPLETED:"Simulation completed successfully"},sm={initialized:!1,loading:!1,error:null,progress:""},za=Ie(sm),yt={subscribe:za.subscribe,get:()=>U(za),set:za.set,update:za.update,reset:()=>za.set(sm)};class im{messageId=0;stdoutCallback=null;stderrCallback=null;getState(){return yt.get()}subscribe(t){return yt.subscribe(t)}isReady(){return this.getState().initialized}isLoading(){return this.getState().loading}getError(){return this.getState().error}onStdout(t){this.stdoutCallback=t}onStderr(t){this.stderrCallback=t}generateId(){return`repl_${++this.messageId}`}}async function ST(){return null}class IT extends im{worker=null;pendingRequests=new Map;streamState={id:null,onData:null,onDone:null,onError:null};async init(){const t=this.getState();if(!(this.worker&&(t.initialized||t.loading))){this.worker&&(this.worker.terminate(),this.worker=null),yt.update(n=>({...n,loading:!0,error:null,progress:nm.STARTING_WORKER}));try{this.worker=new Worker(new URL(""+new URL("../workers/worker-BzucwLUT.js",import.meta.url).href,import.meta.url),{type:"module"}),this.worker.onmessage=s=>{this.handleResponse(s.data)},this.worker.onerror=s=>{yt.update(i=>({...i,loading:!1,error:s.message||"Worker error"}))};const n=await ST();this.sendRequest({type:"init",token:n}),await new Promise((s,i)=>{const o=setTimeout(()=>i(new Error("Initialization timeout")),Vt.INIT),a=yt.subscribe(r=>{r.initialized&&(clearTimeout(o),a(),s()),r.error&&(clearTimeout(o),a(),i(new Error(r.error)))})})}catch(n){throw yt.update(s=>({...s,loading:!1,error:n instanceof Error?n.message:String(n)})),n}}}terminate(){for(const[,t]of this.pendingRequests)clearTimeout(t.timeoutId),t.reject(new Error("Backend terminated"));this.pendingRequests.clear(),this.streamState={id:null,onData:null,onDone:null,onError:null},this.worker&&(this.worker.terminate(),this.worker=null),yt.reset()}async exec(t,n=Vt.SIMULATION){if(this.worker||await this.init(),!this.isReady())throw new Error("Backend not initialized");const s=this.generateId();return new Promise((i,o)=>{const a=setTimeout(()=>{this.pendingRequests.has(s)&&(this.pendingRequests.delete(s),o(new Error("Execution timeout")))},n);this.pendingRequests.set(s,{resolve:()=>i(),reject:o,timeoutId:a}),this.sendRequest({type:"exec",id:s,code:t})})}async evaluate(t,n=Vt.SIMULATION){if(this.worker||await this.init(),!this.isReady())throw new Error("Backend not initialized");const s=this.generateId();return new Promise((i,o)=>{const a=setTimeout(()=>{this.pendingRequests.has(s)&&(this.pendingRequests.delete(s),o(new Error("Evaluation timeout")))},n);this.pendingRequests.set(s,{resolve:r=>{if(r===void 0){o(new Error("No value returned from eval"));return}try{i(JSON.parse(r))}catch{o(new Error(`Failed to parse eval result: ${r}`))}},reject:o,timeoutId:a}),this.sendRequest({type:"eval",id:s,expr:t})})}startStreaming(t,n,s,i){if(!this.worker){i(new Error("Backend not initialized"));return}if(!this.isReady()){i(new Error("Backend not initialized"));return}this.streamState.id&&this.stopStreaming();const o=this.generateId();this.streamState={id:o,onData:n,onDone:s,onError:i},this.sendRequest({type:"stream-start",id:o,expr:t})}stopStreaming(){!this.worker||!this.streamState.id||this.sendRequest({type:"stream-stop"})}isStreaming(){return this.streamState.id!==null}execDuringStreaming(t){if(!this.worker||!this.streamState.id){console.warn("Cannot exec during streaming: no active stream");return}this.sendRequest({type:"stream-exec",code:t})}sendRequest(t){if(!this.worker)throw new Error("Worker not initialized");this.worker.postMessage(t)}handleResponse(t){switch(t.type){case"ready":yt.update(n=>({...n,initialized:!0,loading:!1,progress:Is.READY}));break;case"progress":yt.update(n=>({...n,progress:t.value||""}));break;case"ok":if(t.id&&this.pendingRequests.has(t.id)){const n=this.pendingRequests.get(t.id);clearTimeout(n.timeoutId),n.resolve(void 0),this.pendingRequests.delete(t.id)}break;case"value":if(t.id&&this.pendingRequests.has(t.id)){const n=this.pendingRequests.get(t.id);clearTimeout(n.timeoutId),n.resolve(t.value),this.pendingRequests.delete(t.id)}break;case"error":this.handleError(t);break;case"stdout":t.value&&this.stdoutCallback&&this.stdoutCallback(t.value);break;case"stderr":t.value&&this.stderrCallback&&this.stderrCallback(t.value);break;case"stream-data":if(t.id===this.streamState.id&&this.streamState.onData&&t.value)try{this.streamState.onData(JSON.parse(t.value))}catch{this.stderrCallback?.(`[stream] dropped an unparseable data frame
`)}break;case"stream-done":t.id===this.streamState.id&&this.streamState.onDone&&(this.streamState.onDone(),this.streamState={id:null,onData:null,onDone:null,onError:null});break}}handleError(t){const{id:n,error:s,traceback:i}=t,o=i?`${s}
${i}`:s||"Unknown error";if(n&&this.pendingRequests.has(n)){const a=this.pendingRequests.get(n);clearTimeout(a.timeoutId),a.reject(new Error(o)),this.pendingRequests.delete(n)}n===this.streamState.id&&this.streamState.onError&&(this.streamState.onError(new Error(o)),this.streamState={id:null,onData:null,onDone:null,onError:null}),yt.update(a=>({...a,error:s||"Unknown error"}))}}const $3="0.16.1",ET=[{pip:"pathsim",required:!0,pre:!1,import:"pathsim"}],TT=5,CT="flask-session";class NT extends im{host;sessionId;_isStreaming=!1;streamPollTimer=null;serverInitPromise=null;broadcastChannel=null;streamState={onData:null,onDone:null,onError:null};constructor(t){super(),this.host=t.replace(/\/$/,"");const n=typeof localStorage<"u"?localStorage.getItem("flask-session-id"):null;n?this.sessionId=n:(this.sessionId=crypto.randomUUID(),typeof localStorage<"u"&&localStorage.setItem("flask-session-id",this.sessionId)),typeof BroadcastChannel<"u"&&(this.broadcastChannel=new BroadcastChannel(CT),this.broadcastChannel.onmessage=s=>{s.data?.type==="session-terminated"&&(this.serverInitPromise=null,yt.reset())})}async init(){const t=this.getState();if(!(t.initialized||t.loading)){yt.update(n=>({...n,loading:!0,error:null,progress:"Connecting to Flask server..."}));try{const n=await fetch(`${this.host}/api/health`,{signal:AbortSignal.timeout(Vt.INIT)});if(!n.ok)throw new Error(`Server health check failed: ${n.status}`);yt.update(s=>({...s,progress:"Initializing Python worker..."})),await this.postInit({updateProgress:!0}),this.serverInitPromise=Promise.resolve(),yt.update(s=>({...s,initialized:!0,loading:!1,progress:Is.READY}))}catch(n){const s=n instanceof Error?n.message:String(n);throw yt.update(i=>({...i,loading:!1,error:`Flask backend error: ${s}`})),n}}}terminate(){this.stopStreaming(),this.streamPollTimer&&(clearTimeout(this.streamPollTimer),this.streamPollTimer=null),this._isStreaming=!1,this.streamState={onData:null,onDone:null,onError:null},fetch(`${this.host}/api/session`,{method:"DELETE",headers:{"X-Session-ID":this.sessionId}}).catch(()=>{}),this.broadcastChannel?.postMessage({type:"session-terminated"}),this.serverInitPromise=null,yt.reset()}ensureServerInit(){return this.serverInitPromise?this.serverInitPromise:(this.serverInitPromise=this.postInit({updateProgress:!1}),this.serverInitPromise.catch(()=>{this.serverInitPromise=null}),this.serverInitPromise)}async exec(t,n=Vt.SIMULATION){await this.ensureServerInit();const s=this.generateId(),o=await(await fetch(`${this.host}/api/exec`,{method:"POST",headers:{"Content-Type":"application/json","X-Session-ID":this.sessionId},body:JSON.stringify({id:s,code:t}),signal:AbortSignal.timeout(n)})).json();if(o.stdout&&this.stdoutCallback&&this.stdoutCallback(o.stdout),o.stderr&&this.stderrCallback&&this.stderrCallback(o.stderr),o.type==="error"){this.handleWorkerError(o);const a=o.traceback?`${o.error}
${o.traceback}`:o.error;throw new Error(a)}}async evaluate(t,n=Vt.SIMULATION){await this.ensureServerInit();const s=this.generateId(),o=await(await fetch(`${this.host}/api/eval`,{method:"POST",headers:{"Content-Type":"application/json","X-Session-ID":this.sessionId},body:JSON.stringify({id:s,expr:t}),signal:AbortSignal.timeout(n)})).json();if(o.stdout&&this.stdoutCallback&&this.stdoutCallback(o.stdout),o.stderr&&this.stderrCallback&&this.stderrCallback(o.stderr),o.type==="error"){this.handleWorkerError(o);const a=o.traceback?`${o.error}
${o.traceback}`:o.error;throw new Error(a)}if(o.value===void 0)throw new Error("No value returned from eval");return JSON.parse(o.value)}startStreaming(t,n,s,i){this._isStreaming&&this.stopStreaming(),this.streamPollTimer&&(clearTimeout(this.streamPollTimer),this.streamPollTimer=null);const o=this.generateId();this._isStreaming=!0,this.streamState={onData:n,onDone:s,onError:i},this.ensureServerInit().then(()=>fetch(`${this.host}/api/stream/start`,{method:"POST",headers:{"Content-Type":"application/json","X-Session-ID":this.sessionId},body:JSON.stringify({id:o,expr:t})})).then(a=>a.json()).then(a=>{if(a.type==="error")throw new Error(a.error);this.pollStreamResults()}).catch(a=>{this._isStreaming=!1,i(a instanceof Error?a:new Error(String(a))),this.streamState={onData:null,onDone:null,onError:null}})}stopStreaming(){this._isStreaming&&fetch(`${this.host}/api/stream/stop`,{method:"POST",headers:{"Content-Type":"application/json","X-Session-ID":this.sessionId}}).catch(()=>{})}isStreaming(){return this._isStreaming}execDuringStreaming(t){if(!this._isStreaming){console.warn("Cannot exec during streaming: no active stream");return}fetch(`${this.host}/api/stream/exec`,{method:"POST",headers:{"Content-Type":"application/json","X-Session-ID":this.sessionId},body:JSON.stringify({code:t})}).catch(()=>{})}async postInit(t){const s=await(await fetch(`${this.host}/api/init`,{method:"POST",headers:{"Content-Type":"application/json","X-Session-ID":this.sessionId},body:JSON.stringify({packages:ET}),signal:AbortSignal.timeout(Vt.INIT)})).json();if(s.type==="error")throw new Error(s.error);if(s.messages)for(const i of s.messages)i.type==="stdout"&&this.stdoutCallback&&this.stdoutCallback(i.value),i.type==="stderr"&&this.stderrCallback&&this.stderrCallback(i.value),i.type==="progress"&&t.updateProgress&&yt.update(o=>({...o,progress:i.value}))}handleWorkerError(t){const n=t.errorType;(n==="worker-crashed"||n==="timeout")&&(this.serverInitPromise=null,this.stderrCallback&&this.stderrCallback(`Python worker crashed, restarting on next request...
`))}async pollStreamResults(){if(this._isStreaming)try{const n=await(await fetch(`${this.host}/api/stream/poll`,{method:"POST",headers:{"Content-Type":"application/json","X-Session-ID":this.sessionId}})).json();if(!Array.isArray(n?.messages))throw new Error(n?.error||"Invalid poll response");for(const s of n.messages)if(this.handleStreamMessage(s),!this._isStreaming)return;this._isStreaming&&(this.streamPollTimer=setTimeout(()=>this.pollStreamResults(),TT))}catch(t){this._isStreaming=!1,this.streamState.onError&&this.streamState.onError(t instanceof Error?t:new Error(String(t))),this.streamState={onData:null,onDone:null,onError:null}}}handleStreamMessage(t){switch(t.type){case"stream-data":{if(this.streamState.onData&&t.value)try{this.streamState.onData(JSON.parse(t.value))}catch{this.stderrCallback?.(`[stream] dropped an unparseable data frame
`)}break}case"stream-done":{this._isStreaming=!1,this.streamState.onDone&&this.streamState.onDone(),this.streamState={onData:null,onDone:null,onError:null};break}case"stdout":{this.stdoutCallback&&t.value&&this.stdoutCallback(t.value);break}case"stderr":{this.stderrCallback&&t.value&&this.stderrCallback(t.value);break}case"error":{if(this._isStreaming=!1,this.streamState.onError){const s=t.traceback?`${t.error}
${t.traceback}`:t.error||"Unknown error";this.streamState.onError(new Error(s))}this.streamState={onData:null,onDone:null,onError:null};break}}}}let ms=null,Ld=null,om="http://localhost:5000";function pp(e){om=e}function Ia(){return ms||(ms=am("pyodide"),Ld="pyodide"),ms}function am(e){switch(e){case"pyodide":return new IT;case"flask":return new NT(om);case"remote":throw new Error(`Backend type '${e}' not yet implemented`);default:throw new Error(`Unknown backend type: ${e}`)}}function fp(e){return ms&&ms.terminate(),ms=am(e),Ld=e,ms}function rm(){return Ld}async function eA(){if(typeof window>"u")return;const e=new URLSearchParams(window.location.search);if(e.get("backend")==="flask"){const t=e.get("host");t&&pp(t),fp("flask"),await bl();return}try{const t=await fetch("/api/health",{method:"GET",signal:AbortSignal.timeout(2e3)});if(t.ok&&(await t.json())?.status==="ok"){pp(window.location.origin),fp("flask"),await bl();return}}catch{}}const xr={subscribe:yt.subscribe};async function bl(){const e=Ia();if(e.isReady())return;e.onStdout(n=>$e.output(n)),e.onStderr(n=>$e.error(n));const t=e.subscribe(n=>{n.progress&&n.loading&&$e.info(n.progress)});try{$e.info("Initializing Python REPL..."),await e.init(),$e.info("Python REPL ready")}finally{t()}}async function Ue(e,t){return Ia().exec(e,t)}async function Bn(e,t){return Ia().evaluate(e,t)}function PT(e,t,n,s){Ia().startStreaming(e,t,n,s)}function lm(){Ia().stopStreaming()}function MT(e){Ia().execDuringStreaming(e)}const AT=`
import json
import gc
import numpy as np

def _to_json(obj):
    """Convert Python object to JSON-serializable form."""
    if hasattr(obj, 'tolist'):
        return obj.tolist()
    if isinstance(obj, (set, frozenset)):
        return list(obj)
    if isinstance(obj, bytes):
        return obj.decode('utf-8', errors='replace')
    return obj

def _block_key(b):
    """Stable identity for a block, robust across engine wrappers.

    fastsim re-wraps a block on every Rust-to-Python access (e.g.
    subsystem.blocks), so Python id() is NOT stable; it exposes a stable
    block_id (the underlying pointer). pathsim has no block_id, so fall back
    to id(). Keying maps on this keeps subsystem-nested scopes mappable.
    """
    return getattr(b, 'block_id', None) or id(b)

def _step_streaming_gen():
    """Step the streaming generator and return result dict."""
    global _sim_streaming, _sim_gen
    if '_sim_gen' not in globals() or not _sim_streaming:
        return {'done': True, 'result': None}
    try:
        result = next(_sim_gen)
        return {'done': False, 'result': result}
    except StopIteration:
        _sim_streaming = False
        return {'done': True, 'result': None}

def _apply_mutations(json_str):
    """Apply a batch of structured mutation commands.
    Each mutation is isolated — errors in one do not prevent others from running.
    """
    import json as _json
    mutations = _json.loads(json_str)
    for mut in mutations:
        try:
            _apply_single_mutation(mut)
        except Exception as _e:
            print(f"Mutation error ({mut.get('type', '?')}): {_e}", file=__import__('sys').stderr)

def _apply_single_mutation(mut):
    """Dispatch a single mutation command by type."""
    g = globals()
    t = mut['type']

    if t == 'set_param':
        block = g[mut['var']]
        setattr(block, mut['param'], eval(mut['value'], g))

    elif t == 'set_setting':
        exec(mut['code'], g)

    elif t == 'add_block':
        block_class = eval(mut['blockClass'], g)
        params = {k: eval(v, g) for k, v in mut['params'].items()}
        block = block_class(**params)
        g[mut['var']] = block
        sim.add_block(block)
        blocks.append(block)
        _node_id_map[_block_key(block)] = mut['nodeId']
        _node_name_map[mut['nodeId']] = mut['nodeName']

    elif t == 'remove_block':
        block = g[mut['var']]
        sim.remove_block(block)
        blocks.remove(block)
        _node_id_map.pop(_block_key(block), None)
        _node_name_map.pop(mut['nodeId'], None)

    elif t == 'add_connection':
        source = g[mut['sourceVar']]
        target = g[mut['targetVar']]
        conn = Connection(source[mut['sourcePort']], target[mut['targetPort']])
        g[mut['var']] = conn
        sim.add_connection(conn)
        connections.append(conn)

    elif t == 'remove_connection':
        conn = g[mut['var']]
        sim.remove_connection(conn)
        connections.remove(conn)

    else:
        raise ValueError(f"Unknown mutation type: {t}")


def _extract_scope_data(blocks, node_id_map, incremental=False):
    """Extract data from Scope blocks recursively.

    If incremental=True, only returns data accumulated since last read.
    """
    scope_data = {}

    def find_scopes(block_list):
        for block in block_list:
            # Prefer the engine's type_name: fastsim blocks are all of Python
            # type "Block" and carry the real kind in .type_name; pathsim blocks
            # have no type_name, so fall back to the class name.
            block_name = getattr(block, 'type_name', None) or type(block).__name__
            block_id = node_id_map.get(_block_key(block), str(_block_key(block)))

            if block_name == 'Scope':
                try:
                    data = block.read(incremental=incremental)
                    if data is not None:
                        time_arr, signals = data
                        labels = list(block.labels) if hasattr(block, 'labels') and block.labels else []
                        scope_data[block_id] = {
                            'time': time_arr.tolist() if hasattr(time_arr, 'tolist') else list(time_arr),
                            'signals': [s.tolist() if hasattr(s, 'tolist') else list(s) for s in signals],
                            'labels': labels
                        }
                except Exception as e:
                    # stderr (not stdout) so a failing recorder surfaces as an
                    # error in the console instead of an unexplained empty plot.
                    print(f"Error reading Scope: {e}", file=__import__('sys').stderr)
            elif block_name == 'Subsystem':
                if hasattr(block, 'blocks'):
                    find_scopes(block.blocks)

    find_scopes(blocks)
    return scope_data


def _extract_spectrum_data(blocks, node_id_map):
    """Extract data from Spectrum blocks recursively."""
    spectrum_data = {}

    def find_spectrums(block_list):
        for block in block_list:
            # Prefer the engine's type_name: fastsim blocks are all of Python
            # type "Block" and carry the real kind in .type_name; pathsim blocks
            # have no type_name, so fall back to the class name.
            block_name = getattr(block, 'type_name', None) or type(block).__name__
            block_id = node_id_map.get(_block_key(block), str(_block_key(block)))

            if block_name == 'Spectrum':
                try:
                    data = block.read()
                    if data is not None:
                        freq_arr, magnitude = data

                        # Convert complex to magnitude if needed
                        if np.iscomplexobj(magnitude):
                            magnitude = np.abs(magnitude)

                        freq_list = freq_arr.tolist() if hasattr(freq_arr, 'tolist') else list(freq_arr)

                        # Handle both single array and list of arrays
                        if hasattr(magnitude, 'ndim') and magnitude.ndim == 1:
                            mag_list = [magnitude.tolist()]
                        elif hasattr(magnitude, 'ndim') and magnitude.ndim == 2:
                            mag_list = [m.tolist() for m in magnitude]
                        else:
                            mag_list = [m.tolist() if hasattr(m, 'tolist') else list(m) for m in magnitude]

                        labels = list(block.labels) if hasattr(block, 'labels') and block.labels else []
                        spectrum_data[block_id] = {
                            'frequency': freq_list,
                            'magnitude': mag_list,
                            'labels': labels
                        }
                except Exception as e:
                    # stderr (not stdout) so a failing recorder surfaces as an
                    # error in the console instead of an unexplained empty plot.
                    print(f"Error reading Spectrum: {e}", file=__import__('sys').stderr)
            elif block_name == 'Subsystem':
                if hasattr(block, 'blocks'):
                    find_spectrums(block.blocks)

    find_spectrums(blocks)
    return spectrum_data


def _extract_all_data(blocks, node_id_map, node_name_map=None, incremental=False):
    """Extract all recording block data.

    If incremental=True, only returns data accumulated since last read.
    """
    return {
        'scopeData': _extract_scope_data(blocks, node_id_map, incremental=incremental),
        'spectrumData': _extract_spectrum_data(blocks, node_id_map),
        'nodeNames': node_name_map or {}
    }
`;function DT(e){return`
import sys
import traceback

_simulation_error = None

try:
${HT(e,4)}
except Exception as e:
    tb = traceback.format_exc()
    _simulation_error = f"{type(e).__name__}: {e}"
    print("=" * 60, file=sys.stderr)
    print("SIMULATION ERROR", file=sys.stderr)
    print("=" * 60, file=sys.stderr)
    print(tb, file=sys.stderr)
    print("=" * 60, file=sys.stderr)
    raise
`}function OT(e){return`
import base64

_validation_namespace = {'np': np}
_validation_errors = []

# Decode and execute code context
_code_context = base64.b64decode("${e}").decode('utf-8')
try:
    exec(_code_context, _validation_namespace)
except Exception as e:
    _validation_errors.append({
        'nodeId': '__code_context__',
        'param': '',
        'error': f"Code context error: {type(e).__name__}: {e}"
    })
`}function RT(e){return`
import json
import base64

if not _validation_errors:
    _node_params = json.loads(base64.b64decode("${e}").decode('utf-8'))

    for node_id, params in _node_params.items():
        for param_name, expr in params.items():
            if expr is None or expr == '':
                continue
            try:
                eval(str(expr), _validation_namespace)
            except Exception as e:
                _validation_errors.append({
                    'nodeId': node_id,
                    'param': param_name,
                    'error': f"{type(e).__name__}: {e}"
                })
`}const LT="{'valid': len(_validation_errors) == 0, 'errors': _validation_errors}",cm=`
import gc
_cg = globals().get('_clean_globals', None)
if _cg is not None:
    for _var in list(globals().keys()):
        if _var not in _cg and _var != '_cg':
            try:
                del globals()[_var]
            except:
                pass
    del _cg
gc.collect()
`,dm=`
import gc
for _var in ['_simulation_error', '_validation_errors', '_validation_namespace']:
    if _var in globals():
        try:
            del globals()[_var]
        except:
            pass
gc.collect()
`;function um(e,t=10,n=!0){return`
_sim_gen = sim.run_streaming(
    duration=${e},
    reset=${n?"True":"False"},
    tickrate=${t},
    func_callback=lambda: _extract_all_data(blocks, _node_id_map, _node_name_map if '_node_name_map' in globals() else {}, incremental=True)
)
_sim_streaming = True
`}const zT="_step_streaming_gen()",ya=`
_sim_streaming = False
if '_sim_gen' in globals():
    try:
        _sim_gen.close()
    except:
        pass
`;function HT(e,t){const n=" ".repeat(t);return e.split(`
`).map(s=>n+s).join(`
`)}function hp(e){return btoa(unescape(encodeURIComponent(e)))}const mp={phase:"idle",progress:"",error:null,result:null,resultHistory:[]},At={...Ie({...mp}),reset(){this.set({...mp,resultHistory:[]})}};function FT(e){return e?{scopeData:Object.fromEntries(Object.entries(e.scopeData).map(([t,n])=>[t,{time:[],signals:n.signals.map(()=>[]),labels:n.labels}])),spectrumData:Object.fromEntries(Object.entries(e.spectrumData).map(([t,n])=>[t,{frequency:[],magnitude:n.magnitude.map(()=>[]),labels:n.labels}])),nodeNames:{...e.nodeNames}}:{scopeData:{},spectrumData:{},nodeNames:{}}}let wl=!1,wt=!1;function pm(e,t,n){return n===0?[]:e?[e,...t].slice(0,n):t}function gp(e,t){if(!e)return t;const n={...e.scopeData};for(const[s,i]of Object.entries(t.scopeData)){const o=n[s];if(o){for(let a=0;a<i.time.length;a++)o.time.push(i.time[a]);for(let a=0;a<o.signals.length;a++){const r=i.signals[a];if(!r)continue;const c=o.signals[a];for(let d=0;d<r.length;d++)c.push(r[d])}n[s]={time:o.time,signals:o.signals,labels:i.labels||o.labels}}else n[s]=i}return{scopeData:n,spectrumData:t.spectrumData,nodeNames:{...e.nodeNames,...t.nodeNames}}}async function zd(){wl||(await Ue(AT),wl=!0)}async function fm(){await bl(),await zd()}const hm=10,BT=10;async function mm(e,t){let n=e;const s=[];let i=null,o=0,a=e;function r(c){if(s.length>0&&c-o>=1e3/BT){for(;s.length>0;){const d=s.shift();n=gp(n,d)}a=n,o=c,wt&&At.update(d=>({...d,result:n}))}wt&&(i=requestAnimationFrame(r))}for(i=requestAnimationFrame(r),await new Promise((c,d)=>{PT(zT,u=>{u.result&&s.push(u.result)},()=>c(),u=>d(u))});s.length>0;){const c=s.shift();n=gp(n,c)}return a=n,i!==null&&cancelAnimationFrame(i),a}async function tA(e,t,n,s,i){U(xr).initialized||await bl(),s&&i?MS(s,i):AS(),wt=!0;const a=es.get().ghostTraces;At.update(r=>({...r,phase:"starting",progress:nm.STARTING_SIMULATION,error:null,result:a>0?FT(r.result):r.result,resultHistory:pm(r.result,r.resultHistory,a)}));try{await Ue(cm),wl=!1,await zd();const r=DT(e);await Ue(r),await Ue(um(t,hm)),At.update(d=>({...d,phase:"running"})),$e.info("Streaming simulation started");const c=await mm(null,n);return await Ue(ya),await Ue(dm),At.update(d=>!wt&&d.result===null?d:{...d,phase:wt?"complete":"idle",progress:wt?Is.COMPLETE:Is.STOPPED,result:c}),wt&&$e.info(kT.SIMULATION_COMPLETED),c}catch(r){const c=r instanceof Error?r.message:String(r);$e.error(`Streaming simulation failed: ${c}`);try{await Ue(ya)}catch{}throw At.update(d=>({...d,phase:"error",error:c})),r}finally{wt=!1,$e.flush()}}async function nA(e,t){if(!U(xr).initialized)throw new Error("No simulation to continue. Run a simulation first.");await zd(),wt=!0,At.update(s=>({...s,phase:"starting",progress:"Continuing simulation...",error:null,resultHistory:pm(s.result,s.resultHistory,es.get().ghostTraces)}));try{await Ue(`
if 'sim' not in dir() or sim is None:
    raise RuntimeError("No simulation to continue. Run a simulation first.")
		`);const s=Fh();s&&(await Ue(s),$e.info("Applied graph mutations")),await Ue(um(e,hm,!1)),At.update(a=>({...a,phase:"running"})),$e.info("Continuing simulation (streaming)...");const i=U(At).result,o=await mm(i,t);return await Ue(ya),At.update(a=>!wt&&a.result===null?a:{...a,phase:wt?"complete":"idle",progress:wt?Is.COMPLETE:Is.STOPPED,result:o}),wt&&$e.info("Simulation continued successfully"),o}catch(s){const i=s instanceof Error?s.message:String(s);$e.error(`Continue simulation failed: ${i}`);try{await Ue(ya)}catch{}throw At.update(o=>({...o,phase:"error",error:i})),s}finally{wt=!1,$e.flush()}}async function sA(){const e=Fh();return e?(wt?(MT(e),$e.info("Staged changes (applied during streaming)")):(await Ue(e),$e.info("Staged changes applied")),!0):!1}async function gm(){if(lm(),wt=!1,At.reset(),U(xr).initialized)try{await Ue(ya,Vt.VALIDATION),await Ue(cm)}catch{}wl=!1}async function iA(e,t){U(xr).initialized||await fm();try{const s=hp(e);await Ue(OT(s),Vt.VALIDATION);const i=hp(JSON.stringify(t));await Ue(RT(i),Vt.VALIDATION);const o=await Bn(LT,Vt.VALIDATION);return await Ue(dm),o}catch(s){return{valid:!1,errors:[{nodeId:"__validation__",param:"",error:s instanceof Error?s.message:String(s)}]}}}async function oA(){if(lm(),wt=!1,At.update(t=>({...t,phase:"idle",progress:Is.STOPPED,error:null})),!!U(xr).initialized)try{await Ue(ya,Vt.VALIDATION),await Ue(`
if 'sim' in dir() and sim is not None:
    sim.stop()
		`,Vt.VALIDATION)}catch{}}function aA(e){At.update(t=>({...t,resultHistory:t.resultHistory.slice(0,e)}))}const vp={lineStyle:"solid",markerStyle:null},yp={xAxisScale:"linear",yAxisScale:"linear",showLegend:!1},vm={traces:{},blocks:{}},us=Ie({...vm}),ps={subscribe:us.subscribe,getTraceSettings(e){return U(us).traces[e]??{...vp}},getBlockSettings(e){return U(us).blocks[e]??{...yp}},setTraceSettings(e,t){us.update(n=>{const s=n.traces[e]??{...vp};return{...n,traces:{...n.traces,[e]:{...s,...t}}}})},setBlockSettings(e,t){us.update(n=>{const s=n.blocks[e]??{...yp};return{...n,blocks:{...n.blocks,[e]:{...s,...t}}}})},setTraceLineStyle(e,t){this.setTraceSettings(e,{lineStyle:t})},setTraceMarkerStyle(e,t){this.setTraceSettings(e,{markerStyle:t})},setBlockXAxisScale(e,t){this.setBlockSettings(e,{xAxisScale:t})},setBlockYAxisScale(e,t){this.setBlockSettings(e,{yAxisScale:t})},setBlockShowLegend(e,t){this.setBlockSettings(e,{showLegend:t})},reset(){us.set({...vm})},get(){return U(us)}};function bp(e,t){return`${e}-${t}`}function qT(e,t,n=dT){const s=e.length;if(s===0)return{x:[],y:[],xMin:0,xMax:1,yMin:0,yMax:1};if(s<=n*2){let f=t[0],p=t[0];for(let h=1;h<s;h++)t[h]<f&&(f=t[h]),t[h]>p&&(p=t[h]);return{x:e,y:t,xMin:e[0],xMax:e[s-1],yMin:f,yMax:p}}const i=s/n,o=[],a=[];let r=1/0,c=-1/0;for(let f=0;f<n;f++){const p=Math.floor(f*i),h=Math.floor((f+1)*i);let g=p,v=p,b=t[p],x=t[p];for(let S=p+1;S<h&&S<s;S++)t[S]<b&&(b=t[S],g=S),t[S]>x&&(x=t[S],v=S);g<=v?(o.push(e[g]),a.push(t[g]),v!==g&&(o.push(e[v]),a.push(t[v]))):(o.push(e[v]),a.push(t[v]),o.push(e[g]),a.push(t[g])),b<r&&(r=b),x>c&&(c=x)}const d=e[s-1],u=t[s-1];return o[o.length-1]!==d&&(o.push(d),a.push(u)),{x:o,y:a,xMin:e[0],xMax:e[s-1],yMin:r,yMax:c}}function VT(e){let t=1/0,n=-1/0,s=1/0,i=-1/0;for(const{x:o,y:a}of e)for(let r=0;r<o.length;r++)o[r]<t&&(t=o[r]),o[r]>n&&(n=o[r]),a[r]<s&&(s=a[r]),a[r]>i&&(i=a[r]);return isFinite(t)||(t=0),isFinite(n)||(n=1),isFinite(s)||(s=0),isFinite(i)||(i=1),{xMin:t,xMax:n,yMin:s,yMax:i}}function rA(e){return e>=1e6?(e/1e6).toFixed(1)+"M":e>=1e3?(e/1e3).toFixed(1)+"k":e>=1?e.toFixed(1):e.toExponential(1)}function lA(e){return typeof document>"u"?"":getComputedStyle(document.documentElement).getPropertyValue(e).trim()}function wp(e,t){if(t==="scope"){const n=e;return{x:n.time||[],ys:n.signals||[],labels:n.labels}}else{const n=e;return{x:n.frequency?Array.from({length:n.frequency.length},(i,o)=>o):[],ys:n.magnitude||[],labels:n.labels}}}function _p(e,t,n,s,i,o,a){const r=fT(e,o),c={lineStyle:i.lineStyle,markerStyle:i.markerStyle,color:r,visible:i.lineStyle!==null||i.markerStyle!==null};if(!c.visible)return null;const d=qT(t,n);return{signalIndex:e,label:s,x:t,y:n,xDecimated:d.x,yDecimated:d.y,style:c,ghost:a}}function xp(e){const{nodeId:t,type:n,title:s,data:i,ghostData:o,getTraceSettings:a,blockSettings:r,accentColor:c}=e,d=[],u=[],f=o.length;for(let g=f-1;g>=0;g--){const v=o[g];if(!v)continue;const{x:b,ys:x,labels:S}=wp(v,n);if(b.length===0)continue;const A=pT(g,f);for(let m=0;m<x.length;m++){const D=x[m];if(!D||D.length===0)continue;const I=S?.[m]??`port ${m}`,P=a(m),N=_p(m,b,D,I,P,c,{index:g,total:f,opacity:A});N&&(d.push(N),u.push({x:b,y:D}))}}if(i){const{x:g,ys:v,labels:b}=wp(i,n);if(g.length>0)for(let x=0;x<v.length;x++){const S=v[x];if(!S||S.length===0)continue;const A=b?.[x]??`port ${x}`,m=a(x),D=_p(x,g,S,A,m,c,null);D&&(d.push(D),u.push({x:g,y:S}))}}const p=VT(u);let h;return n==="spectrum"&&i&&(h=i.frequency),{nodeId:t,type:n,title:s,traces:d,layout:{xAxisScale:r.xAxisScale,yAxisScale:r.yAxisScale,showLegend:r.showLegend},bounds:p,frequencies:h}}function WT(e){const{fps:t,name:n="RenderQueue"}=e,s=1e3/t,i=new Map;let o=null,a=0,r=!0;function c(){r=document.visibilityState==="visible",r&&i.size>0&&o===null&&d()}typeof document<"u"&&document.addEventListener("visibilitychange",c);function d(){o===null&&(o=requestAnimationFrame(u))}function u(f){if(o=null,!r||i.size===0)return;if(f-a<s){d();return}a=f;const p=Array.from(i.values());i.clear();for(const h of p)try{h()}catch(g){console.error(`[${n}] Task error:`,g)}i.size>0&&d()}return{enqueue(f,p){i.set(f,p),r&&d()},cancel(f){i.delete(f)},isVisible(){return r},destroy(){o!==null&&(cancelAnimationFrame(o),o=null),i.clear(),typeof document<"u"&&document.removeEventListener("visibilitychange",c)}}}const KT=WT({fps:cT,name:"PlotRenderQueue"}),Ya=Ie({plots:new Map,isStreaming:!1,lastUpdateTime:0}),GT=Symbol("plotDataStore");function jT(e,t,n){const s=new Map;if(!e)return s;const i=hT(),o=(r,c)=>e.nodeNames?.[r]||c,a=(r,c)=>t.slice(0,n).map(u=>c==="scope"?u.scopeData?.[r]:u.spectrumData?.[r]).filter(u=>u!=null);if(e.scopeData)for(const[r,c]of Object.entries(e.scopeData)){const d=xp({nodeId:r,type:"scope",title:o(r,"Scope"),data:c,ghostData:a(r,"scope"),getTraceSettings:u=>ps.getTraceSettings(bp(r,u)),blockSettings:ps.getBlockSettings(r),accentColor:i});s.set(r,d)}if(e.spectrumData)for(const[r,c]of Object.entries(e.spectrumData)){U(ps).blocks[r]||ps.setBlockYAxisScale(r,"log");const u=xp({nodeId:r,type:"spectrum",title:o(r,"Spectrum"),data:c,ghostData:a(r,"spectrum"),getTraceSettings:f=>ps.getTraceSettings(bp(r,f)),blockSettings:ps.getBlockSettings(r),accentColor:i});s.set(r,u)}return s}let kp=null,Sp=[],Ip=0;function Hd(){KT.enqueue(GT,()=>{const e=U(At),n=U(es).ghostTraces??0,s=jT(e.result,e.resultHistory,n);Ya.set({plots:s,isStreaming:e.phase==="running",lastUpdateTime:Date.now()})})}At.subscribe(e=>{(e.result!==kp||e.resultHistory!==Sp)&&(kp=e.result,Sp=e.resultHistory,Hd())});es.subscribe(e=>{(e.ghostTraces??0)!==Ip&&(Ip=e.ghostTraces??0,Hd())});ps.subscribe(()=>{Hd()});const Fd={subscribe:Ya.subscribe,getPlot(e){return U(Ya).plots.get(e)},getAllPlots(){return Array.from(U(Ya).plots.values())},isStreaming(){return U(Ya).isStreaming}},tt=10,Ht={unit:tt,x2:tt*2,x4:tt*4,x10:tt*10,px:e=>e*tt},YT=[tt,tt],XT=Ht.x2,ys={baseWidth:Ht.px(8),baseHeight:Ht.x4,portSpacing:Ht.x2},Wc=ys.baseWidth,Kc=ys.baseHeight,cA=Ht.x4;function Or(e){return Math.ceil(e/Ht.x2)*Ht.x2}function UT(e,t){return t<=0||t===1?0:-((t-1)*ys.portSpacing)/2+e*ys.portSpacing}function Ha(e,t){const n=UT(e,t);return n===0?"50%":`calc(50% + ${n}px)`}const ZT=14,JT=Ht.px(7),QT=Ht.px(6);function $T(e,t,n,s,i,o,a,r){const c=i===1||i===3,d=Math.max(t,n),u=Math.max(1,d)*ys.portSpacing,f=s>0?7+24*s:0,p=s>0?160:0,h=o?o.length*5+20:0,g=r?5:6,v=r?14:20,b=a?Or(a.width+24):e.length*g+v;let x=Or(Math.max(ys.baseWidth,b,r?0:h,p,r?JT:0,c?u:0)),S;r?S=QT+f:a&&a.height>ZT*1.2?S=a.height+24+f:S=ys.baseHeight+f;const A=x,m=Or(c?S:Math.max(S,u));return{width:A,height:m}}function dA(e,t){const n=e.params?._showInputLabels??t,s=e.params?._showOutputLabels??t;return{inputs:n&&e.inputs.length>0,outputs:s&&e.outputs.length>0}}function Ep(e,t=8){return e.length>t?e.slice(0,t):e}const eC=500,Sn=new Map;function ym(e){const t=Sn.get(e);return t!==void 0&&(Sn.delete(e),Sn.set(e,t)),t}function Tp(e,t){if(Sn.has(e)&&Sn.delete(e),Sn.set(e,t),Sn.size>eC){const n=Sn.keys().next().value;n!==void 0&&Sn.delete(n)}}function bm(e){return/\$[^$\n]+\$/.test(e)}async function tC(e){if(!e?.trim())return{html:"",hasMath:!1};const t=ym(e);if(t)return t;if(!bm(e)){const a={html:Np(e),hasMath:!1};return Tp(e,a),a}const n=await Od();let s=!1;const o={html:e.replace(/\$([^$\n]+)\$/g,(a,r)=>{s=!0;try{return n.default.renderToString(r.trim(),{displayMode:!1,throwOnError:!1,strict:!1,output:"html"})}catch{return`<code class="math-error">${Np(r)}</code>`}}),hasMath:s};return Tp(e,o),o}function nC(e){return ym(e)??null}function Cp(e){const t=document.createElement("span");t.style.cssText=`
		position: absolute;
		visibility: hidden;
		white-space: nowrap;
		font-size: 10px;
		font-weight: 600;
		font-family: system-ui, -apple-system, sans-serif;
		letter-spacing: -0.2px;
	`,t.innerHTML=e,document.body.appendChild(t);const n={width:Math.ceil(t.scrollWidth),height:Math.ceil(t.scrollHeight)};return document.body.removeChild(t),n}function Np(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const sC=1e-10;function Pp(e,t){return t==="log"?Math.log10(Math.max(e,sC)):e}function Mp(e,t,n){if(n==="log"){const i=e>0?e:1,o=Math.max(t,i),a=Math.log10(i),r=Math.log10(o),c=r-a||1;return{scaledMin:a,scaledMax:r,range:c}}const s=t-e||1;return{scaledMin:e,scaledMax:t,range:s}}function iC(e,t=er,n=tr,s=em){const{traces:i,bounds:o,layout:a}=e;if(i.length===0)return[];const{xMin:r,xMax:c,yMin:d,yMax:u}=o,f=a.xAxisScale,p=a.yAxisScale,h=Mp(r,c,f),g=Mp(d,u,p),v=t-s*2,b=n-s*2;return i.map(x=>{const{xDecimated:S,yDecimated:A,style:m,ghost:D}=x,I=[];for(let P=0;P<S.length;P++){const N=S[P],L=A[P];if(f==="log"&&N<=0||p==="log"&&L<=0)continue;const W=Pp(N,f),O=Pp(L,p),T=s+(W-h.scaledMin)/h.range*v,M=n-s-(O-g.scaledMin)/g.range*b,w=Math.max(s,Math.min(t-s,T)),E=Math.max(s,Math.min(n-s,M)),C=I.length===0?"M":"L";I.push(`${C}${w.toFixed(1)},${E.toFixed(1)}`)}return{d:I.join(" "),color:m.color,opacity:D?.opacity??1,strokeWidth:D?.7:1,dasharray:m.lineStyle?mT[m.lineStyle]:""}})}var oC=Y('<path fill="none" stroke-linecap="round" stroke-linejoin="round"></path>'),aC=Y('<text text-anchor="middle" class="no-data-text svelte-1i5tbyr" font-size="11" font-family="Inter, sans-serif">No data</text>'),rC=be('<div class="preview-container svelte-1i5tbyr"><svg class="svelte-1i5tbyr"><rect x="0" y="0" rx="4" class="plot-bg svelte-1i5tbyr"></rect><!></svg></div>');function lC(e,t){Ne(t,!0);const n=er,s=tr,i=em;let o=ve(qt([]));const a=Fd.subscribe(g=>{const v=g.plots.get(t.nodeId);v?H(o,iC(v,n,s,i),!0):H(o,[],!0)});Dn(()=>{a()});const r=y(()=>()=>l(o).length>0);var c=rC(),d=ue(c),u=ue(d),f=ye(u);{var p=g=>{var v=X(),b=j(v);_t(b,17,()=>l(o),mn,(x,S)=>{var A=oC();F(()=>{k(A,"d",l(S).d),k(A,"stroke",l(S).color),k(A,"stroke-width",l(S).strokeWidth),k(A,"stroke-dasharray",l(S).dasharray),k(A,"opacity",l(S).opacity)}),_(x,A)}),_(g,v)},h=g=>{var v=aC();F(()=>{k(v,"x",n/2),k(v,"y",s/2+4)}),_(g,v)};V(f,g=>{l(r)()?g(p):g(h,!1)})}ce(d),ce(c),F(()=>{k(d,"width",n),k(d,"height",s),k(d,"viewBox",`0 0 ${n} ${s}`),k(u,"width",n),k(u,"height",s)}),_(e,c),Pe()}var cC=be('<link rel="stylesheet"/>'),dC=be("<div><!></div>"),uC=be('<div class="selection-glow svelte-1d5s31p"></div>'),pC=be('<span class="node-name svelte-1d5s31p"><!></span>'),fC=be('<span class="node-name svelte-1d5s31p"> </span>'),hC=be('<div class="node-icon svelte-1d5s31p"><!></div>'),mC=be('<span class="node-type svelte-1d5s31p"> </span>'),gC=be('<span class="node-type missing svelte-1d5s31p"> </span>'),vC=be('<div class="pinned-param svelte-1d5s31p"><label class="svelte-1d5s31p"> </label> <input type="text" class="svelte-1d5s31p"/></div>'),yC=be('<div class="pinned-params svelte-1d5s31p"></div>'),bC=be("<span> </span>"),wC=be("<span> </span>"),_C=be('<div><button class="port-btn svelte-1d5s31p" title="Add input">+</button> <button class="port-btn svelte-1d5s31p" title="Remove input">-</button></div>'),xC=be('<div><button class="port-btn svelte-1d5s31p" title="Add output">+</button> <button class="port-btn svelte-1d5s31p" title="Remove output">-</button></div>'),kC=be('<div><!> <!> <div class="node-clip svelte-1d5s31p"><div><!> <!></div> <!></div> <!> <!> <!> <!> <!> <!></div>');function SC(e,t){Ne(t,!0);const n=()=>ab(Jo,"$hoveredHandle",s),[s,i]=ob();let o=te(t,"selected",3,!1);const a=wh();let r=ve(0);const c=U2.subscribe($=>H(r,$,!0)),d=y(()=>(l(r),Dt.get(t.data.type))),u=y(()=>l(d)?.category||"Algebraic"),f=y(()=>()=>{if(!t.data.pinnedParams?.length||!l(d))return[];const $=new Set(l(d).params.map(re=>re.name));return t.data.pinnedParams.filter(re=>$.has(re))}),p=y(()=>l(u)==="Recording");let h=ve(!1),g=null,v=ve(!1),b=ve(!1),x=ve(!1),S=ve(!1);const A=Yh.subscribe($=>{H(x,$,!0)}),m=Fd.subscribe($=>{H(S,$.plots.has(t.id),!0)});let D=ve(!1);const I=FI.subscribe($=>{H(D,$,!0)});let P=ve(!1);const N=qI.subscribe($=>{H(P,$,!0)}),L=y(()=>t.data.params?._showInputLabels),W=y(()=>t.data.params?._showOutputLabels),O=y(()=>t.data.params?._iconMode),T=y(()=>l(O)??l(P)),M=y(()=>l(d)?.blockClass??l(d)?.type),w=y(()=>l(T)&&aT(l(M))),E=y(()=>l(L)??l(D)),C=y(()=>l(W)??l(D)),z=y(()=>l(E)&&t.data.inputs.length>0),K=y(()=>l(C)&&t.data.outputs.length>0);je(()=>{(l(E)!==void 0||l(C)!==void 0)&&a(t.id)}),je(()=>{l(w),a(t.id)}),Dn(()=>{c(),A(),m(),I(),N(),g&&clearTimeout(g)}),je(()=>{l(x)&&l(S)&&H(v,!0)});function B(){l(p)&&(H(h,!0),g=setTimeout(()=>{l(h)&&(H(v,!0),H(b,!0))},300))}function Z(){H(h,!1),H(b,!1),g&&(clearTimeout(g),g=null)}const Q=y(()=>bm(t.data.name));let ee=ve(null),de=ve(null),oe=ve(null);je(()=>{if(l(Q)){const $=nC(t.data.name);if($){H(ee,$.html,!0);const re=Cp($.html);H(de,re.width,!0),H(oe,re.height,!0),a(t.id)}else tC(t.data.name).then(re=>{H(ee,re.html,!0);const Ae=Cp(re.html);H(de,Ae.width,!0),H(oe,Ae.height,!0),a(t.id)})}else H(ee,null),H(de,null),H(oe,null)});const Se=y(()=>l(d)?.ports.maxInputs===null),he=y(()=>l(d)?.ports.maxOutputs===null),q=y(()=>l(d)?.ports.syncPorts??!1),G=y(()=>t.data.params?._rotation||0),se=y(()=>()=>{switch(l(G)){case 1:return ke.Top;case 2:return ke.Right;case 3:return ke.Bottom;default:return ke.Left}}),we=y(()=>()=>{switch(l(G)){case 1:return ke.Bottom;case 2:return ke.Left;case 3:return ke.Top;default:return ke.Right}}),ie=y(()=>l(G)===1||l(G)===3),me=y(()=>()=>tm(l(G))),pe=y(()=>l(f)().length),Ee=y(()=>l(Q)&&l(de)!==null&&l(oe)!==null?{width:l(de),height:l(oe)}:null),_e=y(()=>$T(t.data.name,t.data.inputs.length,t.data.outputs.length,l(pe),l(G),l(d)?.name,l(Ee),l(w)));function xe($,re,Ae){const Le=Ha(re,Ae),ze=10,He=5;let Oe;switch(l(G)===0?Oe=$?"left":"right":l(G)===2?Oe=$?"right":"left":l(G)===1?Oe=$?"top":"bottom":Oe=$?"bottom":"top",Oe){case"left":return`right: 100%; margin-right: ${ze}px; top: ${Le}; transform: translateY(calc(-100% - ${He}px)); text-align: right;`;case"right":return`left: 100%; margin-left: ${ze}px; top: ${Le}; transform: translateY(calc(-100% - ${He}px)); text-align: left;`;case"top":return`bottom: 100%; margin-bottom: ${ze}px; left: ${Le}; writing-mode: sideways-lr; transform: translateX(calc(-100% - ${He}px)); text-align: end;`;case"bottom":return`top: 100%; margin-top: ${ze}px; left: ${Le}; writing-mode: sideways-rl; transform: translateX(${He}px); text-align: start;`}}const Ce=y(()=>Sh(t.data)),Te=y(()=>t.data.type===We.INTERFACE),Ve=y(()=>l(Ce)||l(Te));function ct($){$.stopPropagation(),l(Ce)?le.drillDown(t.id):nS(t.id)}function Re($){$.stopPropagation(),Fe.mutate(()=>le.addInputPort(t.id))}const it=y(()=>l(d)?.ports.minInputs??1),Ot=y(()=>l(d)?.ports.minOutputs??1);function Ft($){$.stopPropagation(),t.data.inputs.length>l(it)&&Fe.mutate(()=>le.removeInputPort(t.id))}function as($){$.stopPropagation(),Fe.mutate(()=>le.addOutputPort(t.id))}function sn($){$.stopPropagation(),t.data.outputs.length>l(Ot)&&Fe.mutate(()=>le.removeOutputPort(t.id))}const gt=y(()=>()=>l(d)?tS(l(d)):"shape-default"),wn=y(()=>!l(d)&&t.data.type!==We.SUBSYSTEM&&t.data.type!==We.INTERFACE?"var(--error)":t.data.color||"var(--accent)");function Ca($,re){Fe.mutate(()=>le.updateNodeParams(t.id,{[$]:re}))}function Na($){return $==null?"":typeof $=="object"?JSON.stringify($):String($)}function R($){return $==null?"None":typeof $=="object"?JSON.stringify($):String($)}function ne(){switch(l(G)){case 1:return"top";case 2:return"right";case 3:return"bottom";default:return"left"}}function J(){switch(l(G)){case 1:return"bottom";case 2:return"left";case 3:return"top";default:return"right"}}function ae($,re){Jo.set({nodeId:t.id,handleId:re.id,color:l(wn)}),l(z)||qc(re.name,$.currentTarget,ne())}function fe($){Jo.set(null),yl()}function De($,re){Jo.set({nodeId:t.id,handleId:re.id,color:l(wn)}),l(K)||qc(re.name,$.currentTarget,J())}function Ke($){Jo.set(null),yl()}je(()=>{o()?Bc.set({nodeId:t.id,color:l(wn)}):Bc.update($=>$?.nodeId===t.id?null:$)});var Me=kC();cf("1d5s31p",$=>{var re=cC();F(Ae=>k(re,"href",Ae),[Qh]),_($,re)});let Ye;Me.__dblclick=ct;var kt=ue(Me);{var ge=$=>{var re=dC();let Ae;var Le=ue(re);lC(Le,{get nodeId(){return t.id}}),ce(re),F(ze=>Ae=Qe(re,1,`plot-preview-popup preview-${ze??""}`,"svelte-1d5s31p",Ae,{visible:l(b)||l(x)}),[()=>l(me)()]),_($,re)};V(kt,$=>{(l(v)||l(x))&&l(S)&&$(ge)})}var Be=ye(kt,2);{var et=$=>{var re=uC();_($,re)};V(Be,$=>{o()&&$(et)})}var Xe=ye(Be,2),Ze=ue(Xe);let Je;var ot=ue(Ze);{var rs=$=>{var re=pC(),Ae=ue(re);Tl(Ae,()=>l(ee)),ce(re),_($,re)},ls=$=>{var re=fC(),Ae=ue(re,!0);ce(re),F(()=>mt(Ae,t.data.name)),_($,re)};V(ot,$=>{l(ee)?$(rs):$(ls,!1)})}var Pa=ye(ot,2);{var on=$=>{var re=hC(),Ae=ue(re);{let Le=y(()=>l(d)?.name);lT(Ae,{get blockClass(){return l(M)},get title(){return l(Le)}})}ce(re),_($,re)},an=$=>{var re=X(),Ae=j(re);{var Le=He=>{var Oe=mC(),nt=ue(Oe,!0);ce(Oe),F(()=>mt(nt,l(d).name)),_(He,Oe)},ze=He=>{var Oe=X(),nt=j(Oe);{var bt=Bt=>{var Rt=gC(),ln=ue(Rt);ce(Rt),F(()=>mt(ln,`${t.data.type??""} (missing)`)),_(Bt,Rt)};V(nt,Bt=>{t.data.type!==We.SUBSYSTEM&&t.data.type!==We.INTERFACE&&Bt(bt)},!0)}_(He,Oe)};V(Ae,He=>{l(d)?He(Le):He(ze,!1)},!0)}_($,re)};V(Pa,$=>{l(w)?$(on):$(an,!1)})}ce(Ze);var Ma=ye(Ze,2);{var Aa=$=>{var re=yC();re.__click=Ae=>Ae.stopPropagation(),re.__dblclick=Ae=>Ae.stopPropagation(),_t(re,21,()=>l(f)(),mn,(Ae,Le)=>{const ze=y(()=>l(d).params.find(bt=>bt.name===l(Le)));var He=X(),Oe=j(He);{var nt=bt=>{var Bt=vC(),Rt=ue(Bt),ln=ue(Rt,!0);ce(Rt);var Ct=ye(Rt,2);nd(Ct),Ct.__input=Jt=>Ca(l(Le),Jt.currentTarget.value),Ct.__mousedown=Jt=>Jt.stopPropagation(),vt(Ct,Jt=>bT?.(Jt)),ce(Bt),F((Jt,Ul)=>{k(Rt,"for",`pinned-${t.id??""}-${l(Le)??""}`),mt(ln,l(Le)),k(Ct,"id",`pinned-${t.id??""}-${l(Le)??""}`),sd(Ct,Jt),k(Ct,"placeholder",Ul)},[()=>Na(t.data.params[l(Le)]),()=>R(l(ze).default)]),Et("focus",Ct,Jt=>Jt.stopPropagation()),_(bt,Bt)};V(Oe,bt=>{l(ze)&&bt(nt)})}_(Ae,He)}),ce(re),_($,re)};V(Ma,$=>{l(f)().length>0&&l(d)&&$(Aa)})}ce(Xe);var Ps=ye(Xe,2);{var dt=$=>{var re=X(),Ae=j(re);_t(Ae,17,()=>t.data.inputs,mn,(Le,ze,He)=>{var Oe=bC();let nt;var bt=ue(Oe,!0);ce(Oe),F((Bt,Rt)=>{nt=Qe(Oe,1,"port-label svelte-1d5s31p",null,nt,{hovered:n()?.handleId===l(ze).id}),st(Oe,Bt),mt(bt,Rt)},[()=>xe(!0,He,t.data.inputs.length),()=>Ep(l(ze).name)]),_(Le,Oe)}),_($,re)};V(Ps,$=>{l(z)&&$(dt)})}var rn=ye(Ps,2);{var Ms=$=>{var re=X(),Ae=j(re);_t(Ae,17,()=>t.data.outputs,mn,(Le,ze,He)=>{var Oe=wC();let nt;var bt=ue(Oe,!0);ce(Oe),F((Bt,Rt)=>{nt=Qe(Oe,1,"port-label svelte-1d5s31p",null,nt,{hovered:n()?.handleId===l(ze).id}),st(Oe,Bt),mt(bt,Rt)},[()=>xe(!1,He,t.data.outputs.length),()=>Ep(l(ze).name)]),_(Le,Oe)}),_($,re)};V(rn,$=>{l(K)&&$(Ms)})}var cs=ye(rn,2);{var Da=$=>{var re=_C();let Ae;var Le=ue(re);Le.__click=Re,Le.__dblclick=He=>He.stopPropagation();var ze=ye(Le,2);ze.__click=Ft,ze.__dblclick=He=>He.stopPropagation(),ce(re),F(()=>{Ae=Qe(re,1,"port-controls port-controls-input svelte-1d5s31p",null,Ae,{"port-controls-left":l(G)===0,"port-controls-top":l(G)===1,"port-controls-right":l(G)===2,"port-controls-bottom":l(G)===3}),ze.disabled=t.data.inputs.length<=l(it)}),_($,re)};V(cs,$=>{l(Se)&&o()&&$(Da)})}var _n=ye(cs,2);{var qn=$=>{var re=xC();let Ae;var Le=ue(re);Le.__click=as,Le.__dblclick=He=>He.stopPropagation();var ze=ye(Le,2);ze.__click=sn,ze.__dblclick=He=>He.stopPropagation(),ce(re),F(()=>{Ae=Qe(re,1,"port-controls port-controls-output svelte-1d5s31p",null,Ae,{"port-controls-right":l(G)===0,"port-controls-bottom":l(G)===1,"port-controls-left":l(G)===2,"port-controls-top":l(G)===3}),ze.disabled=t.data.outputs.length<=l(Ot)}),_($,re)};V(_n,$=>{l(he)&&o()&&!l(q)&&$(qn)})}var Sr=ye(_n,2);$d(Sr,()=>`${l(G)}-${t.data.inputs.length}`,$=>{var re=X(),Ae=j(re);_t(Ae,17,()=>t.data.inputs,mn,(Le,ze,He)=>{{let Oe=y(()=>l(se)()),nt=y(()=>l(ie)?`left: ${Ha(He,t.data.inputs.length)};`:`top: ${Ha(He,t.data.inputs.length)};`);ha(Le,{type:"target",get position(){return l(Oe)},get id(){return l(ze).id},get style(){return l(nt)},class:"handle handle-input",onmouseenter:bt=>ae(bt,l(ze)),onmouseleave:()=>fe(l(ze))})}}),_($,re)});var Xl=ye(Sr,2);$d(Xl,()=>`${l(G)}-${t.data.outputs.length}`,$=>{var re=X(),Ae=j(re);_t(Ae,17,()=>t.data.outputs,mn,(Le,ze,He)=>{{let Oe=y(()=>l(we)()),nt=y(()=>l(ie)?`left: ${Ha(He,t.data.outputs.length)};`:`top: ${Ha(He,t.data.outputs.length)};`);ha(Le,{type:"source",get position(){return l(Oe)},get id(){return l(ze).id},get style(){return l(nt)},class:"handle handle-output",onmouseenter:bt=>De(bt,l(ze)),onmouseleave:()=>Ke(l(ze))})}}),_($,re)}),ce(Me),F($=>{Ye=Qe(Me,1,`node ${$??""}`,"svelte-1d5s31p",Ye,{selected:o(),vertical:l(ie),"preview-hovered":l(b),"subsystem-type":l(Ve),"missing-type":!l(d)&&t.data.type!==We.SUBSYSTEM&&t.data.type!==We.INTERFACE}),k(Me,"data-rotation",l(G)),st(Me,`width: ${l(_e).width??""}px; height: ${l(_e).height??""}px; --node-color: ${l(wn)??""}; --preview-gap: ${ja}px;`),Je=Qe(Ze,1,"node-content svelte-1d5s31p",null,Je,{"has-icon":l(w)})},[()=>l(gt)()]),Et("mouseenter",Me,B),Et("mouseleave",Me,Z),_(e,Me),Pe(),i()}zn(["dblclick","click","input","mousedown"]);const Fa=Ie(null),wm={subscribe:Fa.subscribe,open(e){Fa.set(e)},close(){Fa.set(null)},isOpen(){return U(Fa)!==null},getOpenId(){return U(Fa)}},IC=e=>wm.open(e),uA=()=>wm.close();var EC=be('<span class="event-type svelte-7puem2"> </span>'),TC=be('<div><div class="diamond svelte-7puem2"><div class="diamond-inner svelte-7puem2"><span class="event-name svelte-7puem2"> </span> <!></div></div></div>');function CC(e,t){Ne(t,!0);let n=te(t,"selected",3,!1);const s=y(()=>va.get(t.data.type)),i=y(()=>t.data.color||"var(--accent)");function o(g){g.stopPropagation(),IC(t.id)}var a=TC();let r;a.__dblclick=o;var c=ue(a);c.__dblclick=o;var d=ue(c),u=ue(d),f=ue(u,!0);ce(u);var p=ye(u,2);{var h=g=>{var v=EC(),b=ue(v,!0);ce(v),F(()=>mt(b,l(s).name)),_(g,v)};V(p,g=>{l(s)&&g(h)})}ce(d),ce(c),ce(a),F(()=>{r=Qe(a,1,"event-node svelte-7puem2",null,r,{selected:n()}),st(a,`--event-color: ${l(i)??""};`),mt(f,t.data.name)}),_(e,a),Pe()}zn(["dblclick"]);async function NC(e){if(!e?.trim())return"";const t=await Od(),n=[];let s=e.replace(/\$\$([\s\S]*?)\$\$/g,(i,o)=>{const a=`%%MATH_BLOCK_${n.length}%%`;try{n.push(t.default.renderToString(o.trim(),{displayMode:!0,throwOnError:!1,strict:!1}))}catch{n.push(`<code class="math-error">${Ap(o)}</code>`)}return a});return s=s.replace(/\$([^\$\n]+?)\$/g,(i,o)=>{const a=`%%MATH_BLOCK_${n.length}%%`;try{n.push(t.default.renderToString(o.trim(),{displayMode:!1,throwOnError:!1,strict:!1}))}catch{n.push(`<code class="math-error">${Ap(o)}</code>`)}return a}),s=PC(s),n.forEach((i,o)=>{s=s.replace(`%%MATH_BLOCK_${o}%%`,i)}),s}function PC(e){let t=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return t=t.replace(/%%MATH_BLOCK_(\d+)%%/g,"%%MATH_BLOCK_$1%%"),t=t.replace(/```(\w*)\n([\s\S]*?)```/g,(n,s,i)=>`<pre><code>${i.trim()}</code></pre>`),t=t.replace(/^### (.*)$/gm,"<h3>$1</h3>"),t=t.replace(/^## (.*)$/gm,"<h2>$1</h2>"),t=t.replace(/^# (.*)$/gm,"<h1>$1</h1>"),t=t.replace(/^([-*_]){3,}\s*$/gm,"<hr>"),t=t.replace(/^&gt; (.*)$/gm,"<blockquote>$1</blockquote>"),t=t.replace(/<\/blockquote>\n<blockquote>/g,`
`),t=t.replace(/^[-*] (.*)$/gm,"<li>$1</li>"),t=t.replace(/((?:<li>.*<\/li>\n?)+)/g,"<ul>$1</ul>"),t=t.replace(/^\d+\. (.*)$/gm,"<oli>$1</oli>"),t=t.replace(/((?:<oli>.*<\/oli>\n?)+)/g,n=>"<ol>"+n.replace(/<\/?oli>/g,s=>s.replace("oli","li"))+"</ol>"),t=t.replace(/\*\*\*(.+?)\*\*\*/g,"<strong><em>$1</em></strong>"),t=t.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),t=t.replace(new RegExp("(?<![<])\\*([^*\\n]+?)\\*(?![>])","g"),"<em>$1</em>"),t=t.replace(/`([^`]+)`/g,"<code>$1</code>"),t=t.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>'),t=t.split(/\n\n+/).map(n=>n.trim()).filter(n=>n.length>0).map(n=>/^<(h[1-6]|ul|ol|blockquote|pre|hr)/.test(n)?n:`<p>${n.replace(/\n/g,"<br>")}</p>`).join(""),t}function Ap(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var MC=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>'),AC=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>'),DC=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>'),OC=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><path d="M23 4v6h-6"></path><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>'),RC=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>'),LC=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>'),zC=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M9 12l2 2 4-4"></path></svg>'),HC=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><path d="M3 7v6h6"></path><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"></path></svg>'),FC=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><path d="M21 7v6h-6"></path><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3L21 13"></path></svg>'),BC=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>'),qC=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>'),VC=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>'),WC=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1"></rect></svg>'),KC=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>'),GC=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><line x1="12" y1="17" x2="12" y2="22"></line><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"></path></svg>'),jC=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle></svg>'),YC=Y('<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><line x1="12" y1="17" x2="12" y2="22"></line><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"></path></svg>'),XC=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'),UC=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><polyline points="20 6 9 17 4 12"></polyline></svg>'),ZC=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>'),JC=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><polyline points="6 9 12 15 18 9"></polyline></svg>'),QC=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><polyline points="18 15 12 9 6 15"></polyline></svg>'),$C=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><polyline points="9 18 15 12 9 6"></polyline></svg>'),eN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><polyline points="15 18 9 12 15 6"></polyline></svg>'),tN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>'),nN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>'),sN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line><circle cx="22" cy="3" r="1.5" fill="currentColor" stroke="none"></circle></svg>'),iN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>'),oN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>'),aN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>'),rN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>'),lN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>'),cN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>'),dN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>'),uN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>'),pN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>'),fN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>'),hN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>'),mN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>'),gN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><path d="M6 8h.001"></path><path d="M10 8h.001"></path><path d="M14 8h.001"></path><path d="M18 8h.001"></path><path d="M8 12h.001"></path><path d="M12 12h.001"></path><path d="M16 12h.001"></path><path d="M7 16h10"></path></svg>'),vN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>'),yN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>'),bN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>'),wN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>'),_N=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>'),xN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>'),kN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>'),SN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><line x1="2" y1="5" x2="8" y2="5"></line><line x1="5" y1="2" x2="5" y2="8"></line><path d="M13 5h8v16H5V13"></path></svg>'),IN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><rect x="2" y="8" width="20" height="8" rx="2"></rect></svg>'),EN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>'),TN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>'),CN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'),NN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'),PN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>'),MN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><rect x="3" y="12" width="4" height="9"></rect><rect x="10" y="8" width="4" height="13"></rect><rect x="17" y="4" width="4" height="17"></rect></svg>'),AN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><rect x="3" y="3" width="18" height="18" rx="2"></rect><rect x="12" y="12" width="7" height="7" rx="1"></rect></svg>'),DN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>'),ON=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>'),RN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><rect x="3" y="3" width="18" height="18" rx="2"></rect></svg>'),LN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>'),zN=Y('<svg viewBox="0 0 24 24" fill="currentColor" stroke="none" class="svelte-1aaflua"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>'),HN=Y('<svg viewBox="0 0 24 24" fill="currentColor" stroke="none" class="svelte-1aaflua"><rect x="6" y="6" width="12" height="12" rx="1"></rect></svg>'),FN=Y('<svg viewBox="0 0 24 24" fill="currentColor" stroke="none" class="svelte-1aaflua"><path d="M5 4l10 8-10 8V4z"></path><rect x="17" y="5" width="3" height="14" rx="1"></rect></svg>'),BN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"></path></svg>'),qN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path></svg>'),VN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>'),WN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1"></path><path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1"></path></svg>'),KN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line><line x1="9" y1="3" x2="9" y2="21"></line></svg>'),GN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>'),jN=Y('<svg viewBox="0 0 24 24" fill="currentColor" class="svelte-1aaflua"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>'),YN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>'),XN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>'),UN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>'),ZN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><path d="M9 3h6"></path><path d="M10 3v6l-5 10h14l-5-10V3"></path></svg>'),JN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>'),QN=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>'),$N=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>'),eP=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line><line x1="4" y1="21" x2="20" y2="21"></line></svg>'),tP=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><path d="M7 3H6a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1"></path><path d="M17 3h1a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1"></path><text x="12" y="16" text-anchor="middle" fill="currentColor" stroke="none" font-size="12" font-weight="700" font-family="var(--font-mono), monospace">C</text></svg>'),nP=Y('<svg viewBox="0 0 24 24" fill="currentColor" stroke="none" class="svelte-1aaflua"><text x="2" y="18" font-size="16" font-weight="700" font-family="system-ui, sans-serif">A</text><text x="14" y="18" font-size="16" font-weight="700" font-family="system-ui, sans-serif">a</text></svg>'),sP=Y('<svg viewBox="0 0 24 24" fill="currentColor" stroke="none" class="svelte-1aaflua"><text x="2" y="18" font-size="11" font-weight="700" font-family="system-ui, sans-serif">A</text><text x="10" y="18" font-size="11" font-weight="700" font-family="system-ui, sans-serif">a</text></svg>'),iP=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>'),oP=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><circle cx="6" cy="18" r="3.5"></circle><rect x="13" y="13" width="8" height="8" rx="1"></rect><polygon points="12 1 18 10 6 10"></polygon></svg>'),aP=Y('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1aaflua"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>'),rP=be('<span class="text-icon svelte-1aaflua"> </span>');function Gc(e,t){let n=te(t,"size",3,14);var s=X(),i=j(s);{var o=r=>{var c=MC();F(()=>{k(c,"width",n()),k(c,"height",n())}),_(r,c)},a=r=>{var c=X(),d=j(c);{var u=p=>{var h=AC();F(()=>{k(h,"width",n()),k(h,"height",n())}),_(p,h)},f=p=>{var h=X(),g=j(h);{var v=x=>{var S=DC();F(()=>{k(S,"width",n()),k(S,"height",n())}),_(x,S)},b=x=>{var S=X(),A=j(S);{var m=I=>{var P=OC();F(()=>{k(P,"width",n()),k(P,"height",n())}),_(I,P)},D=I=>{var P=X(),N=j(P);{var L=O=>{var T=RC();F(()=>{k(T,"width",n()),k(T,"height",n())}),_(O,T)},W=O=>{var T=X(),M=j(T);{var w=C=>{var z=LC();F(()=>{k(z,"width",n()),k(z,"height",n())}),_(C,z)},E=C=>{var z=X(),K=j(z);{var B=Q=>{var ee=zC();F(()=>{k(ee,"width",n()),k(ee,"height",n())}),_(Q,ee)},Z=Q=>{var ee=X(),de=j(ee);{var oe=he=>{var q=HC();F(()=>{k(q,"width",n()),k(q,"height",n())}),_(he,q)},Se=he=>{var q=X(),G=j(q);{var se=ie=>{var me=FC();F(()=>{k(me,"width",n()),k(me,"height",n())}),_(ie,me)},we=ie=>{var me=X(),pe=j(me);{var Ee=xe=>{var Ce=BC();F(()=>{k(Ce,"width",n()),k(Ce,"height",n())}),_(xe,Ce)},_e=xe=>{var Ce=X(),Te=j(Ce);{var Ve=Re=>{var it=qC();F(()=>{k(it,"width",n()),k(it,"height",n())}),_(Re,it)},ct=Re=>{var it=X(),Ot=j(it);{var Ft=sn=>{var gt=VC();F(()=>{k(gt,"width",n()),k(gt,"height",n())}),_(sn,gt)},as=sn=>{var gt=X(),wn=j(gt);{var Ca=R=>{var ne=WC();F(()=>{k(ne,"width",n()),k(ne,"height",n())}),_(R,ne)},Na=R=>{var ne=X(),J=j(ne);{var ae=De=>{var Ke=KC();F(()=>{k(Ke,"width",n()),k(Ke,"height",n())}),_(De,Ke)},fe=De=>{var Ke=X(),Me=j(Ke);{var Ye=ge=>{var Be=GC();F(()=>{k(Be,"width",n()),k(Be,"height",n())}),_(ge,Be)},kt=ge=>{var Be=X(),et=j(Be);{var Xe=Je=>{var ot=jC();F(()=>{k(ot,"width",n()),k(ot,"height",n())}),_(Je,ot)},Ze=Je=>{var ot=X(),rs=j(ot);{var ls=on=>{var an=YC();F(()=>{k(an,"width",n()),k(an,"height",n())}),_(on,an)},Pa=on=>{var an=X(),Ma=j(an);{var Aa=dt=>{var rn=XC();F(()=>{k(rn,"width",n()),k(rn,"height",n())}),_(dt,rn)},Ps=dt=>{var rn=X(),Ms=j(rn);{var cs=_n=>{var qn=UC();F(()=>{k(qn,"width",n()),k(qn,"height",n())}),_(_n,qn)},Da=_n=>{var qn=X(),Sr=j(qn);{var Xl=re=>{var Ae=ZC();F(()=>{k(Ae,"width",n()),k(Ae,"height",n())}),_(re,Ae)},$=re=>{var Ae=X(),Le=j(Ae);{var ze=Oe=>{var nt=JC();F(()=>{k(nt,"width",n()),k(nt,"height",n())}),_(Oe,nt)},He=Oe=>{var nt=X(),bt=j(nt);{var Bt=ln=>{var Ct=QC();F(()=>{k(Ct,"width",n()),k(Ct,"height",n())}),_(ln,Ct)},Rt=ln=>{var Ct=X(),Jt=j(Ct);{var Ul=As=>{var Ds=$C();F(()=>{k(Ds,"width",n()),k(Ds,"height",n())}),_(As,Ds)},jm=As=>{var Ds=X(),Ym=j(Ds);{var Xm=Os=>{var Rs=eN();F(()=>{k(Rs,"width",n()),k(Rs,"height",n())}),_(Os,Rs)},Um=Os=>{var Rs=X(),Zm=j(Rs);{var Jm=Ls=>{var zs=tN();F(()=>{k(zs,"width",n()),k(zs,"height",n())}),_(Ls,zs)},Qm=Ls=>{var zs=X(),$m=j(zs);{var eg=Hs=>{var Fs=nN();F(()=>{k(Fs,"width",n()),k(Fs,"height",n())}),_(Hs,Fs)},tg=Hs=>{var Fs=X(),ng=j(Fs);{var sg=Bs=>{var qs=sN();F(()=>{k(qs,"width",n()),k(qs,"height",n())}),_(Bs,qs)},ig=Bs=>{var qs=X(),og=j(qs);{var ag=Vs=>{var Ws=iN();F(()=>{k(Ws,"width",n()),k(Ws,"height",n())}),_(Vs,Ws)},rg=Vs=>{var Ws=X(),lg=j(Ws);{var cg=Ks=>{var Gs=oN();F(()=>{k(Gs,"width",n()),k(Gs,"height",n())}),_(Ks,Gs)},dg=Ks=>{var Gs=X(),ug=j(Gs);{var pg=js=>{var Ys=aN();F(()=>{k(Ys,"width",n()),k(Ys,"height",n())}),_(js,Ys)},fg=js=>{var Ys=X(),hg=j(Ys);{var mg=Xs=>{var Us=rN();F(()=>{k(Us,"width",n()),k(Us,"height",n())}),_(Xs,Us)},gg=Xs=>{var Us=X(),vg=j(Us);{var yg=Zs=>{var Js=lN();F(()=>{k(Js,"width",n()),k(Js,"height",n())}),_(Zs,Js)},bg=Zs=>{var Js=X(),wg=j(Js);{var _g=Qs=>{var $s=cN();F(()=>{k($s,"width",n()),k($s,"height",n())}),_(Qs,$s)},xg=Qs=>{var $s=X(),kg=j($s);{var Sg=ei=>{var ti=dN();F(()=>{k(ti,"width",n()),k(ti,"height",n())}),_(ei,ti)},Ig=ei=>{var ti=X(),Eg=j(ti);{var Tg=ni=>{var si=uN();F(()=>{k(si,"width",n()),k(si,"height",n())}),_(ni,si)},Cg=ni=>{var si=X(),Ng=j(si);{var Pg=ii=>{var oi=pN();F(()=>{k(oi,"width",n()),k(oi,"height",n())}),_(ii,oi)},Mg=ii=>{var oi=X(),Ag=j(oi);{var Dg=ai=>{var ri=fN();F(()=>{k(ri,"width",n()),k(ri,"height",n())}),_(ai,ri)},Og=ai=>{var ri=X(),Rg=j(ri);{var Lg=li=>{var ci=hN();F(()=>{k(ci,"width",n()),k(ci,"height",n())}),_(li,ci)},zg=li=>{var ci=X(),Hg=j(ci);{var Fg=di=>{var ui=mN();F(()=>{k(ui,"width",n()),k(ui,"height",n())}),_(di,ui)},Bg=di=>{var ui=X(),qg=j(ui);{var Vg=pi=>{var fi=gN();F(()=>{k(fi,"width",n()),k(fi,"height",n())}),_(pi,fi)},Wg=pi=>{var fi=X(),Kg=j(fi);{var Gg=hi=>{var mi=vN();F(()=>{k(mi,"width",n()),k(mi,"height",n())}),_(hi,mi)},jg=hi=>{var mi=X(),Yg=j(mi);{var Xg=gi=>{var vi=yN();F(()=>{k(vi,"width",n()),k(vi,"height",n())}),_(gi,vi)},Ug=gi=>{var vi=X(),Zg=j(vi);{var Jg=yi=>{var bi=bN();F(()=>{k(bi,"width",n()),k(bi,"height",n())}),_(yi,bi)},Qg=yi=>{var bi=X(),$g=j(bi);{var ev=wi=>{var _i=wN();F(()=>{k(_i,"width",n()),k(_i,"height",n())}),_(wi,_i)},tv=wi=>{var _i=X(),nv=j(_i);{var sv=xi=>{var ki=_N();F(()=>{k(ki,"width",n()),k(ki,"height",n())}),_(xi,ki)},iv=xi=>{var ki=X(),ov=j(ki);{var av=Si=>{var Ii=xN();F(()=>{k(Ii,"width",n()),k(Ii,"height",n())}),_(Si,Ii)},rv=Si=>{var Ii=X(),lv=j(Ii);{var cv=Ei=>{var Ti=kN();F(()=>{k(Ti,"width",n()),k(Ti,"height",n())}),_(Ei,Ti)},dv=Ei=>{var Ti=X(),uv=j(Ti);{var pv=Ci=>{var Ni=SN();F(()=>{k(Ni,"width",n()),k(Ni,"height",n())}),_(Ci,Ni)},fv=Ci=>{var Ni=X(),hv=j(Ni);{var mv=Pi=>{var Mi=IN();F(()=>{k(Mi,"width",n()),k(Mi,"height",n())}),_(Pi,Mi)},gv=Pi=>{var Mi=X(),vv=j(Mi);{var yv=Ai=>{var Di=EN();F(()=>{k(Di,"width",n()),k(Di,"height",n())}),_(Ai,Di)},bv=Ai=>{var Di=X(),wv=j(Di);{var _v=Oi=>{var Ri=TN();F(()=>{k(Ri,"width",n()),k(Ri,"height",n())}),_(Oi,Ri)},xv=Oi=>{var Ri=X(),kv=j(Ri);{var Sv=Li=>{var zi=CN();F(()=>{k(zi,"width",n()),k(zi,"height",n())}),_(Li,zi)},Iv=Li=>{var zi=X(),Ev=j(zi);{var Tv=Hi=>{var Fi=NN();F(()=>{k(Fi,"width",n()),k(Fi,"height",n())}),_(Hi,Fi)},Cv=Hi=>{var Fi=X(),Nv=j(Fi);{var Pv=Bi=>{var qi=PN();F(()=>{k(qi,"width",n()),k(qi,"height",n())}),_(Bi,qi)},Mv=Bi=>{var qi=X(),Av=j(qi);{var Dv=Vi=>{var Wi=MN();F(()=>{k(Wi,"width",n()),k(Wi,"height",n())}),_(Vi,Wi)},Ov=Vi=>{var Wi=X(),Rv=j(Wi);{var Lv=Ki=>{var Gi=AN();F(()=>{k(Gi,"width",n()),k(Gi,"height",n())}),_(Ki,Gi)},zv=Ki=>{var Gi=X(),Hv=j(Gi);{var Fv=ji=>{var Yi=DN();F(()=>{k(Yi,"width",n()),k(Yi,"height",n())}),_(ji,Yi)},Bv=ji=>{var Yi=X(),qv=j(Yi);{var Vv=Xi=>{var Ui=ON();F(()=>{k(Ui,"width",n()),k(Ui,"height",n())}),_(Xi,Ui)},Wv=Xi=>{var Ui=X(),Kv=j(Ui);{var Gv=Zi=>{var Ji=RN();F(()=>{k(Ji,"width",n()),k(Ji,"height",n())}),_(Zi,Ji)},jv=Zi=>{var Ji=X(),Yv=j(Ji);{var Xv=Qi=>{var $i=LN();F(()=>{k($i,"width",n()),k($i,"height",n())}),_(Qi,$i)},Uv=Qi=>{var $i=X(),Zv=j($i);{var Jv=eo=>{var to=zN();F(()=>{k(to,"width",n()),k(to,"height",n())}),_(eo,to)},Qv=eo=>{var to=X(),$v=j(to);{var ey=no=>{var so=HN();F(()=>{k(so,"width",n()),k(so,"height",n())}),_(no,so)},ty=no=>{var so=X(),ny=j(so);{var sy=io=>{var oo=FN();F(()=>{k(oo,"width",n()),k(oo,"height",n())}),_(io,oo)},iy=io=>{var oo=X(),oy=j(oo);{var ay=ao=>{var ro=BN();F(()=>{k(ro,"width",n()),k(ro,"height",n())}),_(ao,ro)},ry=ao=>{var ro=X(),ly=j(ro);{var cy=lo=>{var co=qN();F(()=>{k(co,"width",n()),k(co,"height",n())}),_(lo,co)},dy=lo=>{var co=X(),uy=j(co);{var py=uo=>{var po=VN();F(()=>{k(po,"width",n()),k(po,"height",n())}),_(uo,po)},fy=uo=>{var po=X(),hy=j(po);{var my=fo=>{var ho=WN();F(()=>{k(ho,"width",n()),k(ho,"height",n())}),_(fo,ho)},gy=fo=>{var ho=X(),vy=j(ho);{var yy=mo=>{var go=KN();F(()=>{k(go,"width",n()),k(go,"height",n())}),_(mo,go)},by=mo=>{var go=X(),wy=j(go);{var _y=vo=>{var yo=GN();F(()=>{k(yo,"width",n()),k(yo,"height",n())}),_(vo,yo)},xy=vo=>{var yo=X(),ky=j(yo);{var Sy=bo=>{var wo=jN();F(()=>{k(wo,"width",n()),k(wo,"height",n())}),_(bo,wo)},Iy=bo=>{var wo=X(),Ey=j(wo);{var Ty=_o=>{var xo=YN();F(()=>{k(xo,"width",n()),k(xo,"height",n())}),_(_o,xo)},Cy=_o=>{var xo=X(),Ny=j(xo);{var Py=ko=>{var So=XN();F(()=>{k(So,"width",n()),k(So,"height",n())}),_(ko,So)},My=ko=>{var So=X(),Ay=j(So);{var Dy=Io=>{var Eo=UN();F(()=>{k(Eo,"width",n()),k(Eo,"height",n())}),_(Io,Eo)},Oy=Io=>{var Eo=X(),Ry=j(Eo);{var Ly=To=>{var Co=ZN();F(()=>{k(Co,"width",n()),k(Co,"height",n())}),_(To,Co)},zy=To=>{var Co=X(),Hy=j(Co);{var Fy=No=>{var Po=JN();F(()=>{k(Po,"width",n()),k(Po,"height",n())}),_(No,Po)},By=No=>{var Po=X(),qy=j(Po);{var Vy=Mo=>{var Ao=QN();F(()=>{k(Ao,"width",n()),k(Ao,"height",n())}),_(Mo,Ao)},Wy=Mo=>{var Ao=X(),Ky=j(Ao);{var Gy=Do=>{var Oo=$N();F(()=>{k(Oo,"width",n()),k(Oo,"height",n())}),_(Do,Oo)},jy=Do=>{var Oo=X(),Yy=j(Oo);{var Xy=Ro=>{var Lo=eP();F(()=>{k(Lo,"width",n()),k(Lo,"height",n())}),_(Ro,Lo)},Uy=Ro=>{var Lo=X(),Zy=j(Lo);{var Jy=zo=>{var Ho=tP();F(()=>{k(Ho,"width",n()),k(Ho,"height",n())}),_(zo,Ho)},Qy=zo=>{var Ho=X(),$y=j(Ho);{var e0=Fo=>{var Bo=nP();F(()=>{k(Bo,"width",n()),k(Bo,"height",n())}),_(Fo,Bo)},t0=Fo=>{var Bo=X(),n0=j(Bo);{var s0=qo=>{var Vo=sP();F(()=>{k(Vo,"width",n()),k(Vo,"height",n())}),_(qo,Vo)},i0=qo=>{var Vo=X(),o0=j(Vo);{var a0=Wo=>{var Ko=iP();F(()=>{k(Ko,"width",n()),k(Ko,"height",n())}),_(Wo,Ko)},r0=Wo=>{var Ko=X(),l0=j(Ko);{var c0=Go=>{var jo=oP();F(()=>{k(jo,"width",n()),k(jo,"height",n())}),_(Go,jo)},d0=Go=>{var jo=X(),u0=j(jo);{var p0=Yo=>{var ds=aP();F(()=>{k(ds,"width",n()),k(ds,"height",n())}),_(Yo,ds)},f0=Yo=>{var ds=rP(),h0=ue(ds,!0);ce(ds),F(()=>mt(h0,t.name)),_(Yo,ds)};V(u0,Yo=>{t.name==="play-circle"?Yo(p0):Yo(f0,!1)},!0)}_(Go,jo)};V(l0,Go=>{t.name==="shapes"?Go(c0):Go(d0,!1)},!0)}_(Wo,Ko)};V(o0,Wo=>{t.name==="compass"?Wo(a0):Wo(r0,!1)},!0)}_(qo,Vo)};V(n0,qo=>{t.name==="font-size-decrease"?qo(s0):qo(i0,!1)},!0)}_(Fo,Bo)};V($y,Fo=>{t.name==="font-size-increase"?Fo(e0):Fo(t0,!1)},!0)}_(zo,Ho)};V(Zy,zo=>{t.name==="codegen"?zo(Jy):zo(Qy,!1)},!0)}_(Ro,Lo)};V(Yy,Ro=>{t.name==="stage"?Ro(Xy):Ro(Uy,!1)},!0)}_(Do,Oo)};V(Ky,Do=>{t.name==="tag"?Do(Gy):Do(jy,!1)},!0)}_(Mo,Ao)};V(qy,Mo=>{t.name==="image"?Mo(Vy):Mo(Wy,!1)},!0)}_(No,Po)};V(Hy,No=>{t.name==="car"?No(Fy):No(By,!1)},!0)}_(To,Co)};V(Ry,To=>{t.name==="flask"?To(Ly):To(zy,!1)},!0)}_(Io,Eo)};V(Ay,Io=>{t.name==="box"?Io(Dy):Io(Oy,!1)},!0)}_(ko,So)};V(Ny,ko=>{t.name==="arrow-left"?ko(Py):ko(My,!1)},!0)}_(_o,xo)};V(Ey,_o=>{t.name==="arrow-right"?_o(Ty):_o(Cy,!1)},!0)}_(bo,wo)};V(ky,bo=>{t.name==="github"?bo(Sy):bo(Iy,!1)},!0)}_(vo,yo)};V(wy,vo=>{t.name==="heart"?vo(_y):vo(xy,!1)},!0)}_(mo,go)};V(vy,mo=>{t.name==="table"?mo(yy):mo(by,!1)},!0)}_(fo,ho)};V(hy,fo=>{t.name==="braces"?fo(my):fo(gy,!1)},!0)}_(uo,po)};V(uy,uo=>{t.name==="list"?uo(py):uo(fy,!1)},!0)}_(lo,co)};V(ly,lo=>{t.name==="clipboard"?lo(cy):lo(dy,!1)},!0)}_(ao,ro)};V(oy,ao=>{t.name==="crosshair"?ao(ay):ao(ry,!1)},!0)}_(io,oo)};V(ny,io=>{t.name==="skip-forward-filled"?io(sy):io(iy,!1)},!0)}_(no,so)};V($v,no=>{t.name==="stop-filled"?no(ey):no(ty,!1)},!0)}_(eo,to)};V(Zv,eo=>{t.name==="play-filled"?eo(Jv):eo(Qv,!1)},!0)}_(Qi,$i)};V(Yv,Qi=>{t.name==="skip-forward"?Qi(Xv):Qi(Uv,!1)},!0)}_(Zi,Ji)};V(Kv,Zi=>{t.name==="square"?Zi(Gv):Zi(jv,!1)},!0)}_(Xi,Ui)};V(qv,Xi=>{t.name==="zoom-out"?Xi(Vv):Xi(Wv,!1)},!0)}_(ji,Yi)};V(Hv,ji=>{t.name==="zoom-in"?ji(Fv):ji(Bv,!1)},!0)}_(Ki,Gi)};V(Rv,Ki=>{t.name==="map"?Ki(Lv):Ki(zv,!1)},!0)}_(Vi,Wi)};V(Av,Vi=>{t.name==="bar-chart-2"?Vi(Dv):Vi(Ov,!1)},!0)}_(Bi,qi)};V(Nv,Bi=>{t.name==="bar-chart"?Bi(Pv):Bi(Mv,!1)},!0)}_(Hi,Fi)};V(Ev,Hi=>{t.name==="moon"?Hi(Tv):Hi(Cv,!1)},!0)}_(Li,zi)};V(kv,Li=>{t.name==="sun"?Li(Sv):Li(Iv,!1)},!0)}_(Oi,Ri)};V(wv,Oi=>{t.name==="loader"?Oi(_v):Oi(xv,!1)},!0)}_(Ai,Di)};V(vv,Ai=>{t.name==="help-circle"?Ai(yv):Ai(bv,!1)},!0)}_(Pi,Mi)};V(hv,Pi=>{t.name==="spacebar"?Pi(mv):Pi(gv,!1)},!0)}_(Ci,Ni)};V(uv,Ci=>{t.name==="new-canvas"?Ci(pv):Ci(fv,!1)},!0)}_(Ei,Ti)};V(lv,Ei=>{t.name==="file-plus"?Ei(cv):Ei(dv,!1)},!0)}_(Si,Ii)};V(ov,Si=>{t.name==="activity"?Si(av):Si(rv,!1)},!0)}_(xi,ki)};V(nv,xi=>{t.name==="layers"?xi(sv):xi(iv,!1)},!0)}_(wi,_i)};V($g,wi=>{t.name==="book"?wi(ev):wi(tv,!1)},!0)}_(yi,bi)};V(Zg,yi=>{t.name==="home"?yi(Jg):yi(Qg,!1)},!0)}_(gi,vi)};V(Yg,gi=>{t.name==="menu"?gi(Xg):gi(Ug,!1)},!0)}_(hi,mi)};V(Kg,hi=>{t.name==="external-link"?hi(Gg):hi(jg,!1)},!0)}_(pi,fi)};V(qg,pi=>{t.name==="keyboard"?pi(Vg):pi(Wg,!1)},!0)}_(di,ui)};V(Hg,di=>{t.name==="save"?di(Fg):di(Bg,!1)},!0)}_(li,ci)};V(Rg,li=>{t.name==="file"?li(Lg):li(zg,!1)},!0)}_(ai,ri)};V(Ag,ai=>{t.name==="folder"?ai(Dg):ai(Og,!1)},!0)}_(ii,oi)};V(Ng,ii=>{t.name==="alert-triangle"?ii(Pg):ii(Mg,!1)},!0)}_(ni,si)};V(Eg,ni=>{t.name==="info"?ni(Tg):ni(Cg,!1)},!0)}_(ei,ti)};V(kg,ei=>{t.name==="terminal"?ei(Sg):ei(Ig,!1)},!0)}_(Qs,$s)};V(wg,Qs=>{t.name==="code"?Qs(_g):Qs(xg,!1)},!0)}_(Zs,Js)};V(vg,Zs=>{t.name==="eye-off"?Zs(yg):Zs(bg,!1)},!0)}_(Xs,Us)};V(hg,Xs=>{t.name==="eye"?Xs(mg):Xs(gg,!1)},!0)}_(js,Ys)};V(ug,js=>{t.name==="stop"?js(pg):js(fg,!1)},!0)}_(Ks,Gs)};V(lg,Ks=>{t.name==="pause"?Ks(cg):Ks(dg,!1)},!0)}_(Vs,Ws)};V(og,Vs=>{t.name==="play"?Vs(ag):Vs(rg,!1)},!0)}_(Bs,qs)};V(ng,Bs=>{t.name==="upload-plus"?Bs(sg):Bs(ig,!1)},!0)}_(Hs,Fs)};V($m,Hs=>{t.name==="upload"?Hs(eg):Hs(tg,!1)},!0)}_(Ls,zs)};V(Zm,Ls=>{t.name==="download"?Ls(Jm):Ls(Qm,!1)},!0)}_(Os,Rs)};V(Ym,Os=>{t.name==="chevron-left"?Os(Xm):Os(Um,!1)},!0)}_(As,Ds)};V(Jt,As=>{t.name==="chevron-right"?As(Ul):As(jm,!1)},!0)}_(ln,Ct)};V(bt,ln=>{t.name==="chevron-up"?ln(Bt):ln(Rt,!1)},!0)}_(Oe,nt)};V(Le,Oe=>{t.name==="chevron-down"?Oe(ze):Oe(He,!1)},!0)}_(re,Ae)};V(Sr,re=>{t.name==="search"?re(Xl):re($,!1)},!0)}_(_n,qn)};V(Ms,_n=>{t.name==="check"?_n(cs):_n(Da,!1)},!0)}_(dt,rn)};V(Ma,dt=>{t.name==="x"?dt(Aa):dt(Ps,!1)},!0)}_(on,an)};V(rs,on=>{t.name==="pin-filled"?on(ls):on(Pa,!1)},!0)}_(Je,ot)};V(et,Je=>{t.name==="palette"?Je(Xe):Je(Ze,!1)},!0)}_(ge,Be)};V(Me,ge=>{t.name==="pin"?ge(Ye):ge(kt,!1)},!0)}_(De,Ke)};V(J,De=>{t.name==="type"?De(ae):De(fe,!1)},!0)}_(R,ne)};V(wn,R=>{t.name==="grid"?R(Ca):R(Na,!1)},!0)}_(sn,gt)};V(Ot,sn=>{t.name==="zap"?sn(Ft):sn(as,!1)},!0)}_(Re,it)};V(Te,Re=>{t.name==="exit"?Re(Ve):Re(ct,!1)},!0)}_(xe,Ce)};V(pe,xe=>{t.name==="enter"?xe(Ee):xe(_e,!1)},!0)}_(ie,me)};V(G,ie=>{t.name==="redo"?ie(se):ie(we,!1)},!0)}_(he,q)};V(de,he=>{t.name==="undo"?he(oe):he(Se,!1)},!0)}_(Q,ee)};V(K,Q=>{t.name==="select-all"?Q(B):Q(Z,!1)},!0)}_(C,z)};V(M,C=>{t.name==="maximize"?C(w):C(E,!1)},!0)}_(O,T)};V(N,O=>{t.name==="plus"?O(L):O(W,!1)},!0)}_(I,P)};V(A,I=>{t.name==="rotate"?I(m):I(D,!1)},!0)}_(x,S)};V(g,x=>{t.name==="copy"?x(v):x(b,!1)},!0)}_(p,h)};V(d,p=>{t.name==="settings"?p(u):p(f,!1)},!0)}_(r,c)};V(i,r=>{t.name==="trash"?r(o):r(a,!1)})}_(e,s)}var lP=Y('<svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke-width="4"><polyline points="20 6 9 17 4 12"></polyline></svg>'),cP=be("<button><!></button>"),dP=be('<div role="dialog" tabindex="-1"><div class="color-grid svelte-10xj43v"></div> <div class="color-custom svelte-10xj43v"><label for="custom-color" class="svelte-10xj43v">CUSTOM:</label> <input id="custom-color" type="color" class="custom-color-input svelte-10xj43v"/></div></div>'),uP=be('<div class="color-picker-wrapper svelte-10xj43v" data-tour="block-color-picker"><button aria-label="Change color"><span class="icon-wrap svelte-10xj43v"><!></span></button> <!></div>');function pP(e,t){Ne(t,!0);let n=te(t,"defaultColor",3,Qa),s=te(t,"popupPosition",3,"bottom"),i=te(t,"tooltipPosition",3,"bottom"),o=te(t,"iconSize",3,16),a=te(t,"variant",3,"default"),r=ve(!1);function c(){H(r,!l(r))}function d(A){A===n()?t.onSelect(void 0):t.onSelect(A),H(r,!1)}function u(A){const m=A.target;t.onSelect(m.value)}function f(A){A.target.closest(".color-picker-wrapper")||H(r,!1)}var p=uP();Et("click",Lt,f);var h=ue(p);let g;h.__click=c;var v=ue(h),b=ue(v);Gc(b,{name:"palette",get size(){return o()}}),ce(v),ce(h),vt(h,(A,m)=>Vc?.(A,m),()=>({text:"Color",position:i()}));var x=ye(h,2);{var S=A=>{var m=dP();m.__click=N=>N.stopPropagation();var D=ue(m);_t(D,21,()=>K2,mn,(N,L)=>{var W=cP();let O;W.__click=()=>d(l(L));var T=ue(W);{var M=w=>{var E=lP();F(()=>k(E,"stroke",l(L)==="#FFFFFF"||l(L)==="#FFF176"?"#333":"#fff")),_(w,E)};V(T,w=>{t.currentColor===l(L)&&w(M)})}ce(W),F(()=>{O=Qe(W,1,"color-option svelte-10xj43v",null,O,{selected:t.currentColor===l(L)}),st(W,`background: ${l(L)??""};`),k(W,"title",l(L)===n()?"Default":l(L))}),_(N,W)}),ce(D);var I=ye(D,2),P=ye(ue(I),2);nd(P),P.__input=u,ce(I),ce(m),F(()=>{Qe(m,1,`color-picker-popup popup-${s()??""}`,"svelte-10xj43v"),sd(P,t.currentColor)}),_(A,m)};V(x,A=>{l(r)&&A(S)})}ce(p),F(()=>{g=Qe(h,1,"picker-btn svelte-10xj43v",null,g,{ghost:a()==="ghost"}),st(v,t.iconColor?`color: ${t.iconColor};`:"")}),_(e,p),Pe()}zn(["click","input"]);var fP=be('<link rel="stylesheet"/>'),hP=be('<div class="toolbar svelte-pxdwwx"><button class="toolbar-btn svelte-pxdwwx"><!></button> <button class="toolbar-btn svelte-pxdwwx"><!></button> <!></div>'),mP=be('<textarea placeholder="Markdown with $math$..." spellcheck="false" class="svelte-pxdwwx"></textarea>'),gP=be('<span class="placeholder svelte-pxdwwx">Double-click to add note...</span>'),vP=be('<div class="rendered svelte-pxdwwx"><!></div>'),yP=be('<div><!> <div class="annotation svelte-pxdwwx"><!> <!></div></div>');function bP(e,t){Ne(t,!0);let n=te(t,"selected",3,!1),s=ve(qt(t.data.content||"")),i=ve(qt(t.data.color||Qa)),o=ve(qt(t.data.fontSize||kn.DEFAULT));const a=le.annotations.subscribe(E=>{const C=E.get(t.id);C&&(H(s,C.content||"",!0),H(i,C.color||Qa,!0),H(o,C.fontSize||kn.DEFAULT,!0))});let r=0;const c=zh.subscribe(E=>{E.id>r&&E.annotationId===t.id&&(r=E.id,H(f,!0))});Dn(()=>{a(),c()});let d=ve(""),u=ve(void 0),f=ve(!1);je(()=>{l(s)?NC(l(s)).then(E=>{H(d,E,!0)}):H(d,"")}),je(()=>{l(f)&&l(u)&&(l(u).focus(),l(u).selectionStart=l(u).value.length)}),je(()=>{n()||H(f,!1)});function p(){Fe.beginDrag()}function h(){Fe.endDrag()}function g(E){const C=E.target.value;le.updateAnnotation(t.id,{content:C})}function v(E){if(E.key==="Escape"){H(f,!1),E.stopPropagation();return}E.stopPropagation()}function b(E){n()&&(E.target.closest(".color-picker-wrapper")||H(f,!0))}function x(E){Fe.mutate(()=>le.updateAnnotation(t.id,{color:E}))}function S(){const E=Math.min(l(o)+kn.STEP,kn.MAX);Fe.mutate(()=>le.updateAnnotation(t.id,{fontSize:E}))}function A(){const E=Math.max(l(o)-kn.STEP,kn.MIN);Fe.mutate(()=>le.updateAnnotation(t.id,{fontSize:E}))}function m(E){const C=E.currentTarget;C.scrollHeight>C.clientHeight&&E.stopPropagation()}function D(E,C){const z=Math.round(C.width/tt)*tt,K=Math.round(C.height/tt)*tt;Fe.mutate(()=>le.updateAnnotation(t.id,{width:Math.max(100,z),height:Math.max(50,K)}))}var I=yP();cf("pxdwwx",E=>{var C=fP();F(z=>k(C,"href",z),[Qh]),_(E,C)});let P;var N=ue(I);H2(N,{minWidth:100,minHeight:50,get isVisible(){return n()},onResizeEnd:D});var L=ye(N,2);L.__dblclick=b;var W=ue(L);{var O=E=>{var C=hP(),z=ue(C);z.__click=S;var K=ue(z);Gc(K,{name:"font-size-increase",size:14}),ce(z),vt(z,(ee,de)=>Vc?.(ee,de),()=>({text:"Increase font size",position:"top"}));var B=ye(z,2);B.__click=A;var Z=ue(B);Gc(Z,{name:"font-size-decrease",size:14}),ce(B),vt(B,(ee,de)=>Vc?.(ee,de),()=>({text:"Decrease font size",position:"top"}));var Q=ye(B,2);pP(Q,{get currentColor(){return l(i)},get defaultColor(){return Qa},onSelect:x,popupPosition:"top",tooltipPosition:"top",get iconColor(){return l(i)},iconSize:14,variant:"ghost"}),ce(C),F(()=>{z.disabled=l(o)>=kn.MAX,B.disabled=l(o)<=kn.MIN}),_(E,C)};V(W,E=>{n()&&E(O)})}var T=ye(W,2);{var M=E=>{var C=mP();Q0(C),C.__input=g,C.__keydown=v,tn(C,z=>H(u,z),()=>l(u)),F(()=>sd(C,l(s))),Et("focus",C,p),Et("blur",C,h),Et("wheel",C,m),_(E,C)},w=E=>{var C=vP(),z=ue(C);{var K=Z=>{var Q=X(),ee=j(Q);Tl(ee,()=>l(d)),_(Z,Q)},B=Z=>{var Q=gP();_(Z,Q)};V(z,Z=>{l(s)?Z(K):Z(B,!1)})}ce(C),Et("wheel",C,m),_(E,C)};V(T,E=>{l(f)?E(M):E(w,!1)})}ce(L),ce(I),F(()=>{P=Qe(I,1,"annotation-wrapper svelte-pxdwwx",null,P,{nodrag:l(f)}),st(I,`--annotation-color: ${l(i)??""}; --annotation-font-size: ${l(o)??""}px;`)}),_(e,I),Pe()}zn(["dblclick","click","input","keydown"]);const _m={up:{x:0,y:-1},down:{x:0,y:1},left:{x:-1,y:0},right:{x:1,y:0}},wP={up:"down",down:"up",left:"right",right:"left"},Jn=Ht.unit,Bd=0,qd=Ht.unit,Ge=Ht.unit,Dp=Ht.unit/2,_P=Ht.unit/4,xP=8,kP=15,SP=5,IP=100,EP=.5,TP=4.5,CP=5,Uo=10;function Op(e,t){return(e+1e4)*20001+(t+1e4)}function It(e){return Math.round(e/Ge)}function Rp(e){return e*Ge}function Lp(e,t,n){const s={x:e.x-Jn,y:e.y-Jn,width:e.width+2*Jn,height:e.height+2*Jn};return{minGx:It(s.x-t),minGy:It(s.y-n),maxGx:It(s.x+s.width-t),maxGy:It(s.y+s.height-n)}}class NP{offsetX=0;offsetY=0;nodeObstacles=new Map;portStubObstacles=[];spatialHash=new Map;constructor(t){t&&this.initFromContext(t)}getBucketKey(t,n){const s=Math.floor(t/Uo),i=Math.floor(n/Uo);return Op(s,i)}getObstacleBuckets(t){const n=[],s=Math.floor(t.minGx/Uo),i=Math.floor(t.maxGx/Uo),o=Math.floor(t.minGy/Uo),a=Math.floor(t.maxGy/Uo);for(let r=s;r<=i;r++)for(let c=o;c<=a;c++)n.push(Op(r,c));return n}addToSpatialHash(t,n){for(const s of this.getObstacleBuckets(n))this.spatialHash.has(s)||this.spatialHash.set(s,new Set),this.spatialHash.get(s).add(t)}removeFromSpatialHash(t,n){for(const s of this.getObstacleBuckets(n))this.spatialHash.get(s)?.delete(t)}initFromContext(t){const{canvasBounds:n}=t;this.offsetX=Math.floor(n.x/Ge)*Ge,this.offsetY=Math.floor(n.y/Ge)*Ge,this.nodeObstacles.clear(),this.spatialHash.clear();for(const[s,i]of t.nodeBounds){const o=Lp(i,this.offsetX,this.offsetY);this.nodeObstacles.set(s,o),this.addToSpatialHash(s,o)}this.updatePortStubs(t.portStubs)}updateBounds(t){this.offsetX=Math.floor(t.x/Ge)*Ge,this.offsetY=Math.floor(t.y/Ge)*Ge}updateNode(t,n){const s=this.nodeObstacles.get(t);s&&this.removeFromSpatialHash(t,s);const i=Lp(n,this.offsetX,this.offsetY);this.nodeObstacles.set(t,i),this.addToSpatialHash(t,i)}removeNode(t){const n=this.nodeObstacles.get(t);n&&this.removeFromSpatialHash(t,n),this.nodeObstacles.delete(t)}updatePortStubs(t){if(this.portStubObstacles=[],t)for(const n of t){const s=_m[n.direction],i=n.position.x+s.x*Ge,o=n.position.y+s.y*Ge,a=It(i-this.offsetX),r=It(o-this.offsetY);this.portStubObstacles.push({minGx:a,minGy:r,maxGx:a,maxGy:r})}}isWalkableAt(t,n){const s=this.getBucketKey(t,n),i=this.spatialHash.get(s);if(i)for(const o of i){const a=this.nodeObstacles.get(o);if(a&&t>=a.minGx&&t<=a.maxGx&&n>=a.minGy&&n<=a.maxGy)return!1}for(const o of this.portStubObstacles)if(t>=o.minGx&&t<=o.maxGx&&n>=o.minGy&&n<=o.maxGy)return!1;return!0}getOffset(){return{x:this.offsetX,y:this.offsetY}}}const PP=2,MP=20,AP=2,DP=3,OP=1e4,RP={right:0,left:1,down:2,up:3},zp=[{dx:1,dy:0,dir:"right",dirIdx:0},{dx:-1,dy:0,dir:"left",dirIdx:1},{dx:0,dy:1,dir:"down",dirIdx:2},{dx:0,dy:-1,dir:"up",dirIdx:3}];function Hp(e,t,n){return((e+1e4)*20001+(t+1e4))*4+n}function Rr(e,t){return(e+1e4)*20001+(t+1e4)}class LP{heap=[];index=new Map;push(t){t.heapIdx=this.heap.length,this.heap.push(t),this.index.set(t.stateKey,t),this.bubbleUp(t.heapIdx)}pop(){if(this.heap.length===0)return;const t=this.heap[0];this.index.delete(t.stateKey);const n=this.heap.pop();return this.heap.length>0&&(n.heapIdx=0,this.heap[0]=n,this.bubbleDown(0)),t}get length(){return this.heap.length}updateIfBetter(t,n,s,i){const o=this.index.get(t);return o&&n<o.g?(o.g=n,o.f=n+o.h,o.parent=i,this.bubbleUp(o.heapIdx),!0):!1}has(t){return this.index.has(t)}bubbleUp(t){const n=this.heap;for(;t>0;){const s=t-1>>1;if(n[t].f>=n[s].f)break;this.swap(t,s),t=s}}bubbleDown(t){const n=this.heap,s=n.length;for(;;){const i=2*t+1,o=2*t+2;let a=t;if(i<s&&n[i].f<n[a].f&&(a=i),o<s&&n[o].f<n[a].f&&(a=o),a===t)break;this.swap(t,a),t=a}}swap(t,n){const s=this.heap,i=s[t],o=s[n];s[t]=o,s[n]=i,i.heapIdx=n,o.heapIdx=t}}function jc(e,t,n,s,i,o){const a=It(e.x-s.x),r=It(e.y-s.y),c=It(t.x-s.x),d=It(t.y-s.y),u=It(s.x),f=It(s.y),p=new Set;p.add(Rr(a,r)),p.add(Rr(c,d));const h=zp.find(I=>I.dir===i);if(h)for(let I=1;I<=DP;I++)p.add(Rr(a+h.dx*I,r+h.dy*I));const g=(I,P)=>p.has(Rr(I,P))?!0:n.isWalkableAt(I,P),v=new LP,b=new Set,x=RP[i],S=Hp(a,r,x),A=Fp(a,r,c,d),m={x:a,y:r,g:0,h:A,f:A,parent:null,direction:i,dirIdx:x,stateKey:S,heapIdx:0};v.push(m);let D=0;for(;v.length>0&&D<OP;){D++;const I=v.pop();if(I.x===c&&I.y===d)return{path:zP(I,s),isFallback:!1};if(b.has(I.stateKey))continue;b.add(I.stateKey);const P=wP[I.direction],N=I.parent===null;for(const{dx:L,dy:W,dir:O,dirIdx:T}of zp){if(O===P||N&&O!==i)continue;const M=I.x+L,w=I.y+W;if(!g(M,w))continue;const E=Hp(M,w,T);if(b.has(E))continue;let C=1;if(I.direction!==O&&(C+=PP),o){const K=M+u,B=w+f,Z=o.get(`${K},${B}`);if(Z){const ee=O==="left"||O==="right"?Z.has("up")||Z.has("down"):Z.has("left")||Z.has("right");C+=ee?AP:MP}}const z=I.g+C;if(!v.updateIfBetter(E,z,0,I)&&!v.has(E)){const K=Fp(M,w,c,d);v.push({x:M,y:w,g:z,h:K,f:z+K,parent:I,direction:O,dirIdx:T,stateKey:E,heapIdx:0})}}}return i==="right"||i==="left"?{path:[e,{x:t.x,y:e.y},t],isFallback:!0}:{path:[e,{x:e.x,y:t.y},t],isFallback:!0}}function Fp(e,t,n,s){return Math.abs(e-n)+Math.abs(t-s)}function zP(e,t){const n=[];let s=e;for(;s!==null;)n.push({x:Rp(s.x)+t.x,y:Rp(s.y)+t.y}),s=s.parent;return n.reverse(),n}function xm(e){if(e.length<3)return e;const t=[e[0]];for(let n=1;n<e.length-1;n++){const s=t[t.length-1],i=e[n],o=e[n+1],a=Math.sign(i.x-s.x),r=Math.sign(i.y-s.y),c=Math.sign(o.x-i.x),d=Math.sign(o.y-i.y);(a!==c||r!==d)&&t.push(i)}return t.push(e[e.length-1]),t}function _l(e){return{x:Math.round(e.x/Ge)*Ge,y:Math.round(e.y/Ge)*Ge}}function ba(e,t,n){const s=_m[t],i={x:e.x+s.x*n,y:e.y+s.y*n};return _l(i)}function km(e,t,n,s,i,o){const a=ba(e,n,Bd),r=ba(t,s,qd),c=i.getOffset(),d=jc(a,r,i,c,n,o);return{path:xm(d.path),waypoints:[],isFallback:d.isFallback}}function HP(e,t,n="right",s="left"){const i=ba(e,n,Bd),o=ba(t,s,qd),a=[i];return i.x!==o.x&&i.y!==o.y&&(n==="right"||n==="left"?a.push(_l({x:o.x,y:i.y})):a.push(_l({x:i.x,y:o.y}))),a.push(o),{path:a,waypoints:[]}}function FP(e,t=2){const n=new Map;let s=0;for(let i=0;i<e.length-1;i++){const o=e[i],a=e[i+1],r=a.x-o.x,c=a.y-o.y;let d;Math.abs(r)>Math.abs(c)?d=r>0?"right":"left":d=c>0?"down":"up";const u=It(o.x),f=It(o.y),p=It(a.x),h=It(a.y),g=Math.min(u,p),v=Math.max(u,p),b=Math.min(f,h),x=Math.max(f,h);for(let S=g;S<=v;S++)for(let A=b;A<=x;A++)if(s++,s>t){const m=`${S},${A}`;n.has(m)||n.set(m,new Set),n.get(m).add(d)}}return n}function Sm(e,t){const n=t.x-e.x,s=t.y-e.y;return Math.abs(n)>Math.abs(s)?n>0?"right":"left":s>0?"down":"up"}function BP(e){if(e.length<2)return"right";const t=e[e.length-1],n=e[e.length-2];return Sm(n,t)}function qP(e,t,n,s,i,o,a){if(o.length===0)return km(e,t,n,s,i,a);const r=i.getOffset(),c=[];let d=ba(e,n,Bd),u=n,f=!1;for(let v=0;v<o.length;v++){const b=o[v],x=_l(b.position),S=jc(d,x,i,r,u,a);if(S.isFallback&&(f=!0),c.length===0?c.push(...S.path):S.path.length>0&&c.push(...S.path.slice(1)),d=x,S.path.length>=2)u=BP(S.path);else{const A=v<o.length-1?o[v+1].position:t;u=Sm(x,A)}}const p=ba(t,s,qd),h=jc(d,p,i,r,u,a);return h.isFallback&&(f=!0),c.length===0?c.push(...h.path):h.path.length>0&&c.push(...h.path.slice(1)),{path:xm(c),waypoints:o,isFallback:f}}function Yn(e){return(e||[]).filter(t=>t.isUserWaypoint)}function Qo(e,t,n,s,i,o,a){return i?o.length>0?qP(e,t,n,s,i,o,a):km(e,t,n,s,i,a):HP(e,t,n,s)}function Bp(e,t,n,s,i){const o=i.map(a=>`${a.position.x},${a.position.y}`).join(";");return`${e.x},${e.y}|${t.x},${t.y}|${n}|${s}|${o}`}const rt=Ie({routes:new Map,context:null,grid:null,routeInputHashes:new Map});let Lr=0;function zr(e){return U(le.connections).find(t=>t.id===e)}function Hr(e,t,n){if(le.updateConnectionWaypoints(e.id,t),n){const s=U(rt),i=n(e.sourceNodeId,e.sourcePortIndex,!0),o=n(e.targetNodeId,e.targetPortIndex,!1);if(i&&o){const a=Yn(t),r=Qo(i.position,o.position,i.direction,o.direction,s.grid,a);rt.update(c=>{const d=new Map(c.routes);return d.set(e.id,r),{...c,routes:d}});return}}ut.invalidateRoute(e.id)}const ut={subscribe:rt.subscribe,setContext(e,t,n){const s={nodeBounds:e,canvasBounds:t,portStubs:n};rt.update(i=>{let o=i.grid;if(!o)o=new NP(s);else{o.updateBounds(t);const a=new Set(e.keys()),r=new Set;if(i.context)for(const c of i.context.nodeBounds.keys())r.add(c);for(const[c,d]of e)o.updateNode(c,d);for(const c of r)a.has(c)||o.removeNode(c);o.updatePortStubs(n)}return{...i,context:s,grid:o}})},updateNodeBounds(e,t){rt.update(n=>(n.grid&&n.grid.updateNode(e,t),n.context&&n.context.nodeBounds.set(e,t),n))},recalculateRoutesForNodes(e,t,n){const s=U(rt);if(!s.grid)return;const i=t.filter(d=>e.has(d.sourceNodeId)||e.has(d.targetNodeId));if(i.length===0)return;const o=new Map,a=(d,u,f)=>{const p=`${d}:${u}:${f}`;return o.has(p)||o.set(p,n(d,u,f)),o.get(p)},r=new Map(s.routes),c=new Map(s.routeInputHashes);for(const d of i){const u=a(d.sourceNodeId,d.sourcePortIndex,!0),f=a(d.targetNodeId,d.targetPortIndex,!1);if(!u||!f)continue;const p=Yn(d.waypoints),h=Bp(u.position,f.position,u.direction,f.direction,p);if(h===s.routeInputHashes.get(d.id)&&r.has(d.id))continue;const g=Qo(u.position,f.position,u.direction,f.direction,s.grid,p);r.set(d.id,g),c.set(d.id,h)}rt.update(d=>({...d,routes:r,routeInputHashes:c}))},getRoute(e){return Zt(rt,t=>t.routes.get(e)||null)},getRouteSync(e){return U(rt).routes.get(e)||null},calcRoute(e,t,n,s="right",i="left"){const o=U(rt),a=Yn(e.waypoints),r=Qo(t,n,s,i,o.grid,a);return rt.update(c=>{const d=new Map(c.routes);return d.set(e.id,r),{...c,routes:d}}),r},recalculateAllRoutes(e,t){const n=U(rt),s=++Lr,i=new Map,o=(f,p,h)=>{const g=`${f}:${p}:${h}`;return i.has(g)||i.set(g,t(f,p,h)),i.get(g)},a=new Map(n.routes),r=new Map,c=[...e].sort((f,p)=>{const h=o(f.sourceNodeId,f.sourcePortIndex,!0),g=o(f.targetNodeId,f.targetPortIndex,!1),v=o(p.sourceNodeId,p.sourcePortIndex,!0),b=o(p.targetNodeId,p.targetPortIndex,!1),x=h&&g?Math.abs(g.position.x-h.position.x)+Math.abs(g.position.y-h.position.y):0;return(v&&b?Math.abs(b.position.x-v.position.x)+Math.abs(b.position.y-v.position.y):0)-x}),d=new Map;for(const f of c){const p=`${f.sourceNodeId}:${f.sourcePortIndex}`,h=d.get(p)||[];h.push(f),d.set(p,h)}const u=[];for(const[,f]of d)u.push(...f);for(const f of u){const p=o(f.sourceNodeId,f.sourcePortIndex,!0),h=o(f.targetNodeId,f.targetPortIndex,!1);if(!p||!h)continue;const g=Yn(f.waypoints),v=Qo(p.position,h.position,p.direction,h.direction,n.grid,g);a.set(f.id,v),r.set(f.id,Bp(p.position,h.position,p.direction,h.direction,g))}rt.update(f=>({...f,routes:a,routeInputHashes:r})),u.length>1&&this._refineRoutesAsync(s,u,d,o,r)},async _refineRoutesAsync(e,t,n,s,i){const o=new Map,a=new Map;let r=0;for(const[,c]of n){const d=[];for(const u of c){if(e!==Lr)return;const f=U(rt),p=s(u.sourceNodeId,u.sourcePortIndex,!0),h=s(u.targetNodeId,u.targetPortIndex,!1);if(!p||!h)continue;const g=Yn(u.waypoints),v=Qo(p.position,h.position,p.direction,h.direction,f.grid,g,o);if(a.set(u.id,v),v.path.length>0&&d.push(FP(v.path,2)),r++,r%xP===0&&(await new Promise(b=>requestAnimationFrame(()=>b())),e!==Lr))return}for(const u of d)for(const[f,p]of u){o.has(f)||o.set(f,new Set);for(const h of p)o.get(f).add(h)}}e===Lr&&rt.update(c=>{const d=new Map(c.routes);for(const[u,f]of a)d.set(u,f);return{...c,routes:d,routeInputHashes:new Map(i)}})},invalidateRoute(e){rt.update(t=>{const n=new Map(t.routes),s=new Map(t.routeInputHashes);return n.delete(e),s.delete(e),{...t,routes:n,routeInputHashes:s}})},invalidateRoutesForNodes(e){const n=U(le.connections).filter(s=>e.has(s.sourceNodeId)||e.has(s.targetNodeId));rt.update(s=>{const i=new Map(s.routes),o=new Map(s.routeInputHashes);for(const a of n)i.delete(a.id),o.delete(a.id);return{...s,routes:i,routeInputHashes:o}})},addUserWaypoint(e,t,n){let s=null;return Fe.mutate(()=>{const i=zr(e);if(!i)return;s=Tt();const o={id:s,position:t,isUserWaypoint:!0},r=[...Yn(i.waypoints),o];Hr(i,r,n)}),s},addUserWaypointAtIndex(e,t,n,s){let i=null;return Fe.mutate(()=>{const o=zr(e);if(!o)return;i=Tt();const a={id:i,position:t,isUserWaypoint:!0},r=Yn(o.waypoints),c=[...r.slice(0,n),a,...r.slice(n)];Hr(o,c,s)}),i},removeUserWaypoint(e,t,n){Fe.mutate(()=>{const s=zr(e);if(!s?.waypoints)return;const i=s.waypoints.filter(o=>o.id!==t||!o.isUserWaypoint);Hr(s,i,n)})},moveWaypoint(e,t,n,s){const i=zr(e);if(!i?.waypoints)return;const o=i.waypoints.map(a=>a.id===t?{...a,position:n}:a);Hr(i,o,s)},cleanupWaypoints(e,t){const s=U(le.connections).find(m=>m.id===e);if(!s?.waypoints)return;const i=Yn(s.waypoints);if(i.length===0)return;let o=null,a=null;t&&(o=t(s.sourceNodeId,s.sourcePortIndex,!0),a=t(s.targetNodeId,s.targetPortIndex,!1));const r=o?.position||null,c=a?.position||null,d=kP,u=SP,f=(m,D,I)=>{const P=I.x-m.x,N=I.y-m.y,L=Math.sqrt(P*P+N*N);return L<1?!0:Math.abs((D.x-m.x)*N-(D.y-m.y)*P)/L<u},p=(m,D)=>Math.sqrt((m.x-D.x)**2+(m.y-D.y)**2);let h=[...i],g=!1;for(let m=h.length-1;m>0;m--)p(h[m].position,h[m-1].position)<d&&(h.splice(m,1),g=!0);const v=[];r&&v.push(r),v.push(...h.map(m=>m.position)),c&&v.push(c);const b=r?1:0,x=c?v.length-1:v.length,S=new Set;for(let m=b;m<x;m++){const D=r?m-1:m;if(D<0||D>=h.length)continue;const I=v[m-1],P=v[m],N=v[m+1];I&&N&&f(I,P,N)&&(S.add(D),g=!0)}const A=Array.from(S).sort((m,D)=>D-m);for(const m of A)h.splice(m,1);if(g){le.updateConnectionWaypoints(e,h);const m=U(rt);if(o&&a){const D=Qo(o.position,a.position,o.direction,a.direction,m.grid,h);rt.update(I=>{const P=new Map(I.routes);return P.set(e,D),{...I,routes:P}})}}},resetRoute(e){Fe.mutate(()=>{le.updateConnectionWaypoints(e,[]),ut.invalidateRoute(e)})},clearRoutes(){rt.update(e=>({...e,routes:new Map,routeInputHashes:new Map}))},clearContext(){rt.update(e=>({...e,routes:new Map,routeInputHashes:new Map,context:null,grid:null}))}};function VP(e,t=IP){const n=new Map;let s=1/0,i=1/0,o=-1/0,a=-1/0;for(const c of e){const d=c.measured?.width??c.width??Wc,u=c.measured?.height??c.height??Kc,f=c.position.x-d/2,p=c.position.y-u/2;n.set(c.id,{x:f,y:p,width:d,height:u}),s=Math.min(s,f-Jn),i=Math.min(i,p-Jn),o=Math.max(o,f+d+Jn),a=Math.max(a,p+u+Jn)}const r={x:s-t,y:i-t,width:o-s+2*t,height:a-i+2*t};return{nodeBounds:n,canvasBounds:r}}const $o=Ie(null);let at=null;$o.subscribe(e=>at=e);var WP=Y('<circle r="4"></circle>'),KP=Y('<circle r="3" class="segment-midpoint svelte-5viyfv"></circle>'),GP=Y('<g><!><g class="waypoint-group svelte-5viyfv"><!><!></g><g><path d="M -5 -2.5 L -1 -0.5 Q 0 0 -1 0.5 L -5 2.5 Q -6 3 -6 2 L -6 -2 Q -6 -3 -5 -2.5 Z"></path></g></g>');function jP(e,t){Ne(t,!0);function n(q){switch(q){case ke.Left:return"left";case ke.Right:return"right";case ke.Top:return"up";case ke.Bottom:return"down";default:return"right"}}function s(q,G,se){return se&&q===t.source?{position:{x:t.sourceX,y:t.sourceY},direction:n(t.sourcePosition)}:!se&&q===t.target?{position:{x:t.targetX,y:t.targetY},direction:n(t.targetPosition)}:null}let i=ve(null);$o.subscribe(q=>H(i,q,!0));const o=y(()=>l(i)?.edgeId===t.id),a=y(()=>l(i)?.edgeId===t.id?l(i).waypointId:null);function r(q,G){q.stopPropagation(),q.preventDefault();const se=ie=>{if(!at||at.edgeId!==t.id)return;ie.stopPropagation(),ie.preventDefault();const me=$a({x:ie.clientX,y:ie.clientY}),pe={x:Math.round(me.x/Ge)*Ge,y:Math.round(me.y/Ge)*Ge};pe.x===at.lastSnappedPos.x&&pe.y===at.lastSnappedPos.y||(at.lastSnappedPos=pe,ut.moveWaypoint(at.edgeId,at.waypointId,pe,at.getPortInfo))},we=ie=>{if(!at)return;ie.stopPropagation(),ie.preventDefault(),document.removeEventListener("pointermove",se,{capture:!0}),document.removeEventListener("pointerup",we,{capture:!0});const me=at;$o.set(null),Fe.endDrag(),ut.cleanupWaypoints(me.edgeId,me.getPortInfo)};$o.set({edgeId:t.id,waypointId:G.id,lastSnappedPos:{...G.position},getPortInfo:s,cleanup:()=>{document.removeEventListener("pointermove",se,{capture:!0}),document.removeEventListener("pointerup",we,{capture:!0})}}),Fe.beginDrag(),document.addEventListener("pointermove",se,{capture:!0}),document.addEventListener("pointerup",we,{capture:!0})}function c(q,G){q.stopPropagation(),q.preventDefault(),ut.removeUserWaypoint(t.id,G.id,s)}let d=ve(null),u=null;je(()=>{u&&u(),u=ut.getRoute(t.id).subscribe(q=>H(d,q,!0))});let f=ve(null);const p=Jo.subscribe(q=>H(f,q,!0));let h=ve(null);const g=Bc.subscribe(q=>H(h,q,!0));Dn(()=>{u&&u(),p(),g()});const v=y(()=>()=>l(f)?t.source===l(f).nodeId&&t.sourceHandleId===l(f).handleId||t.target===l(f).nodeId&&t.targetHandleId===l(f).handleId:!1),b=y(()=>()=>l(h)?t.source===l(h).nodeId||t.target===l(h).nodeId:!1),x=y(()=>()=>l(v)()||l(b)()),S=y(()=>()=>l(v)()?l(f)?.color||"var(--accent)":l(b)()&&l(h)?.color||"var(--accent)"),A=EP,m=TP,D=y(()=>()=>{let q=t.sourceX,G=t.sourceY;return t.sourcePosition==="right"?q-=A:t.sourcePosition==="left"?q+=A:t.sourcePosition==="bottom"?G-=A:t.sourcePosition==="top"&&(G+=A),{x:q,y:G}}),I=y(()=>()=>{let q=t.targetX,G=t.targetY;return t.targetPosition==="right"?q+=m:t.targetPosition==="left"?q-=m:t.targetPosition==="bottom"?G+=m:t.targetPosition==="top"&&(G-=m),{x:q,y:G}}),P=CP;function N(q,G){if(q.length<2)return"";if(q.length===2)return`M ${q[0].x} ${q[0].y} L ${q[1].x} ${q[1].y}`;let se=`M ${q[0].x} ${q[0].y}`;for(let ie=1;ie<q.length-1;ie++){const me=q[ie-1],pe=q[ie],Ee=q[ie+1],_e=Math.hypot(pe.x-me.x,pe.y-me.y),xe=Math.hypot(Ee.x-pe.x,Ee.y-pe.y),Ce=Math.min(G,_e/2,xe/2);if(Ce<.5){se+=` L ${pe.x} ${pe.y}`;continue}const Te=(me.x-pe.x)/_e,Ve=(me.y-pe.y)/_e,ct=(Ee.x-pe.x)/xe,Re=(Ee.y-pe.y)/xe,it=pe.x+Te*Ce,Ot=pe.y+Ve*Ce,Ft=pe.x+ct*Ce,as=pe.y+Re*Ce;se+=` L ${it} ${Ot} Q ${pe.x} ${pe.y} ${Ft} ${as}`}const we=q[q.length-1];return se+=` L ${we.x} ${we.y}`,se}let L=ve("");je(()=>{if(l(d)?.path&&l(d).path.length>=1&&!l(d).isFallback){const q=l(D)(),G=l(I)(),se=[q,...l(d).path,G];H(L,N(se,P),!0)}});const W=y(()=>()=>{const q=l(D)(),G=l(I)(),[se]=zl({sourceX:q.x,sourceY:q.y,sourcePosition:t.sourcePosition,targetX:G.x,targetY:G.y,targetPosition:t.targetPosition,borderRadius:8});return se}),O=y(()=>()=>l(L)?{path:l(L),isFallback:!1}:{path:l(W)(),isFallback:!0}),T=y(()=>()=>l(d)?.waypoints?l(d).waypoints.filter(G=>G.isUserWaypoint):t.data?.waypoints?.filter(G=>G.isUserWaypoint)||[]),M=y(()=>()=>{if(!l(d)?.path||l(d).path.length<1)return[];const q=l(D)(),G=l(I)(),se=[q,...l(d).path,G],we=l(T)(),ie=20,me=(Ee,_e)=>{for(const xe of we)if(Math.hypot(xe.position.x-Ee,xe.position.y-_e)<ie)return!0;return!1},pe=[];for(let Ee=0;Ee<se.length-1;Ee++){const _e=se[Ee],xe=se[Ee+1];if(Math.hypot(xe.x-_e.x,xe.y-_e.y)>30){const Te=(_e.x+xe.x)/2,Ve=(_e.y+xe.y)/2;me(Te,Ve)||pe.push({x:Te,y:Ve,segmentIndex:Ee})}}return pe}),w=y(()=>()=>t.selected||l(o));function E(q,G){q.stopPropagation(),q.preventDefault();const se=$a({x:q.clientX,y:q.clientY}),we={x:Math.round(se.x/Ge)*Ge,y:Math.round(se.y/Ge)*Ge},ie=l(T)(),me=C(G,ie),pe=ut.addUserWaypointAtIndex(t.id,we,me,s);if(pe){const Ee=xe=>{if(!at||at.edgeId!==t.id)return;xe.stopPropagation(),xe.preventDefault();const Ce=$a({x:xe.clientX,y:xe.clientY}),Te={x:Math.round(Ce.x/Ge)*Ge,y:Math.round(Ce.y/Ge)*Ge};Te.x===at.lastSnappedPos.x&&Te.y===at.lastSnappedPos.y||(at.lastSnappedPos=Te,ut.moveWaypoint(at.edgeId,at.waypointId,Te,at.getPortInfo))},_e=xe=>{if(!at)return;xe.stopPropagation(),xe.preventDefault(),document.removeEventListener("pointermove",Ee,{capture:!0}),document.removeEventListener("pointerup",_e,{capture:!0});const Ce=at;$o.set(null),Fe.endDrag(),ut.cleanupWaypoints(Ce.edgeId,Ce.getPortInfo)};$o.set({edgeId:t.id,waypointId:pe,lastSnappedPos:we,getPortInfo:s,cleanup:()=>{document.removeEventListener("pointermove",Ee,{capture:!0}),document.removeEventListener("pointerup",_e,{capture:!0})}}),Fe.beginDrag(),document.addEventListener("pointermove",Ee,{capture:!0}),document.addEventListener("pointerup",_e,{capture:!0})}}function C(q,G){if(G.length===0||!l(d)?.path)return 0;const se=l(D)(),we=l(I)(),ie=[se,...l(d).path,we],me=[0];for(let _e=1;_e<ie.length;_e++){const xe=ie[_e-1],Ce=ie[_e];me.push(me[_e-1]+Math.hypot(Ce.x-xe.x,Ce.y-xe.y))}const pe=(me[q]+me[q+1])/2;let Ee=0;for(const _e of G){let xe=1/0,Ce=0;for(let Te=0;Te<ie.length;Te++){const Ve=ie[Te],ct=Math.hypot(Ve.x-_e.position.x,Ve.y-_e.position.y);ct<xe&&(xe=ct,Ce=me[Te])}Ce<pe&&Ee++}return Ee}const z=y(()=>()=>{const q=l(I)(),{isFallback:G}=l(O)();if(!G&&l(d)?.path&&l(d).path.length>=1){const we=l(d).path,ie=q,me=we[we.length-1],pe=ie.x-me.x,Ee=ie.y-me.y,_e=Math.atan2(Ee,pe)*(180/Math.PI);return{x:ie.x,y:ie.y,angle:_e}}const{path:se}=l(O)();if(se){const we=document.createElementNS("http://www.w3.org/2000/svg","path");we.setAttribute("d",se);const ie=we.getTotalLength(),me=we.getPointAtLength(ie),pe=we.getPointAtLength(ie-5),Ee=Math.atan2(me.y-pe.y,me.x-pe.x)*(180/Math.PI);return{x:me.x,y:me.y,angle:Ee}}return{x:q.x,y:q.y,angle:0}});var K=GP();let B;var Z=ue(K);{let q=y(()=>l(O)().path);br(Z,{get id(){return t.id},get path(){return l(q)},get style(){return t.style}})}var Q=ye(Z),ee=ue(Q);_t(ee,17,()=>l(T)(),q=>q.id,(q,G)=>{var se=WP();let we;se.__pointerdown=ie=>r(ie,l(G)),se.__dblclick=ie=>c(ie,l(G)),F(()=>{k(se,"cx",l(G).position.x),k(se,"cy",l(G).position.y),we=Qe(se,0,"waypoint-marker svelte-5viyfv",null,we,{dragging:l(o)&&l(a)===l(G).id})}),_(q,se)});var de=ye(ee);_t(de,17,()=>l(M)(),q=>q.segmentIndex,(q,G)=>{var se=KP();se.__pointerdown=we=>E(we,l(G).segmentIndex),F(()=>{k(se,"cx",l(G).x),k(se,"cy",l(G).y)}),_(q,se)}),ce(Q);var oe=ye(Q),Se=ue(oe);let he;ce(oe),ce(K),F((q,G,se,we,ie,me,pe,Ee)=>{st(K,`--highlight-color: ${q??""}`),B=Qe(K,0,"svelte-5viyfv",null,B,G),st(Q,`opacity: ${se??""}; pointer-events: ${we??""};`),k(oe,"transform",`translate(${ie??""}, ${me??""}) rotate(${pe??""}) translate(5, 0)`),he=Qe(Se,0,"edge-arrow svelte-5viyfv",null,he,Ee)},[()=>l(S)(),()=>({highlighted:l(x)()}),()=>l(w)()?1:0,()=>l(w)()?"all":"none",()=>l(z)().x,()=>l(z)().y,()=>l(z)().angle,()=>({selected:t.selected,highlighted:l(x)()})]),_(e,K),Pe()}zn(["pointerdown","dblclick"]);let mc=null;const Im={registerDropHandler(e){mc=e},handleDrop(e){mc&&mc(e)}},Qt={nodeDuration:500,nodeStagger:50,flyDistanceMargin:100,edgeDuration:300,arrowDuration:150,initialDelay:100,fitViewDelay:50};function YP(){return typeof window>"u"?!1:new URLSearchParams(window.location.search).get("fancyloading")!=="false"}const Vd=Ie(0);let na=new Map,xl=new Map,nr=new Map,ts=!1,Xt=null;function Em(e){e.code==="Space"&&!e.repeat&&ts&&(e.preventDefault(),Nm())}function Tm(e){if(!ts)return;e.target.closest(".svelte-flow__pane")&&Nm()}function XP(){window.addEventListener("keydown",Em),document.addEventListener("click",Tm,!0)}function Cm(){window.removeEventListener("keydown",Em),document.removeEventListener("click",Tm,!0)}function UP(){Vd.update(e=>e+1)}function Nm(){ts&&(Xt&&(clearTimeout(Xt),Xt=null),Pm())}function ZP(e,t,n,s){YP()&&((ts||Xt)&&(Xt&&(clearTimeout(Xt),Xt=null),document.querySelectorAll(".assembling").forEach(i=>{i.classList.remove("assembling")}),ts=!1,Cm()),document.body.classList.add("assembly-pending"),setTimeout(()=>{n(),setTimeout(()=>{const i=e(),o=t(),a=s();if(i.length===0){document.body.classList.remove("assembly-pending");return}JP(i,o,a),document.body.classList.remove("assembly-pending"),QP()},Qt.fitViewDelay)},Qt.initialDelay))}function JP(e,t,n){const s=[...e].sort(()=>Math.random()-.5),i=-n.x/n.zoom,o=-n.y/n.zoom,a=Qt.flyDistanceMargin,r=i-a,c=o-a;na=new Map,xl=new Map,s.forEach((p,h)=>{na.set(p.id,h*Qt.nodeStagger),xl.set(p.id,{x:r-p.x,y:c-p.y})}),nr=new Map,t.forEach(p=>{const h=na.get(p.source)??0,g=na.get(p.target)??0,v=Math.max(h,g)+Qt.nodeDuration*.7;nr.set(p.id,v)}),Xt&&(clearTimeout(Xt),Xt=null),ts=!0,XP();const d=s.length*Qt.nodeStagger,u=Math.max(...Array.from(nr.values()),0),f=Math.max(d,u)+Qt.nodeDuration+Qt.edgeDuration+Qt.arrowDuration+200;Xt=setTimeout(Pm,f)}function QP(){if(!ts)return;const e=document.querySelectorAll(".svelte-flow__node"),t=document.querySelectorAll(".svelte-flow__edge");e.forEach(n=>{const s=n.getAttribute("data-id");if(!s)return;const i=na.get(s)??0,o=xl.get(s)??{x:0,y:-100},a=n;a.style.setProperty("--assembly-delay",`${i}ms`),a.style.setProperty("--assembly-duration",`${Qt.nodeDuration}ms`),a.style.setProperty("--fly-from-x",`${o.x}px`),a.style.setProperty("--fly-from-y",`${o.y}px`),n.classList.add("assembling")}),t.forEach(n=>{const s=n.getAttribute("data-id");if(!s)return;const i=nr.get(s)??0,o=n,a=n.querySelector("path.svelte-flow__edge-path");if(a){const r=a.getTotalLength();o.style.setProperty("--edge-length",`${r}`)}o.style.setProperty("--assembly-delay",`${i}ms`),o.style.setProperty("--assembly-duration",`${Qt.edgeDuration}ms`),n.classList.add("assembling")})}function Pm(){document.querySelectorAll(".assembling").forEach(e=>{e.classList.remove("assembling");const t=e;t.style.removeProperty("--assembly-delay"),t.style.removeProperty("--assembly-duration"),t.style.removeProperty("--fly-from-x"),t.style.removeProperty("--fly-from-y"),t.style.removeProperty("--edge-length")}),document.body.classList.remove("assembly-pending"),na=new Map,xl=new Map,nr=new Map,ts=!1,Xt=null,Cm()}const gc={duration:300,flyDistanceMargin:100};function $P(e,t,n,s,i){let o,a;if(s&&i){const u=i(s);o=u.x-t.x,a=u.y-t.y}else{const u=n();o=-u.x/u.zoom-gc.flyDistanceMargin-t.x,a=0}let r=0;const c=20;function d(){const u=document.querySelector(`[data-id="${e}"]`);if(!u){r++,r<c&&requestAnimationFrame(d);return}u.style.translate=`${o}px ${a}px`,u.style.scale="0.8",u.style.opacity="0",u.style.setProperty("--fly-from-x",`${o}px`),u.style.setProperty("--fly-from-y",`${a}px`),u.style.setProperty("--assembly-duration",`${gc.duration}ms`),u.style.setProperty("--assembly-delay","0ms"),requestAnimationFrame(()=>{u.style.removeProperty("translate"),u.style.removeProperty("scale"),u.style.removeProperty("opacity"),u.classList.add("assembling"),setTimeout(()=>{u.classList.remove("assembling"),u.style.removeProperty("--fly-from-x"),u.style.removeProperty("--fly-from-y"),u.style.removeProperty("--assembly-duration"),u.style.removeProperty("--assembly-delay")},gc.duration+50)})}requestAnimationFrame(d)}const Yc=[".blk",".sub",".pvm",".json"],eM="1.0";function tM(e){const t=Dt.get(e.type),n=new Set(t?.params.map(i=>i.name)||[]),s={};for(const[i,o]of Object.entries(e.params))if(!(o==null||o==="")){if(i.startsWith("_")){s[i]=o;continue}n.has(i)&&(s[i]=o)}return s}function Mm(e){const t={...e,params:tM(e)};return t.graph?.nodes&&(t.graph={...t.graph,nodes:t.graph.nodes.map(n=>Mm(n))}),t}const Xa=Ie(""),Ba=Ie(null),vc=Zt(Xa,e=>{const t=[],n=e.matchAll(/def\s+(\w+)\s*\(/g);for(const i of n)t.push(i[1]);const s=e.matchAll(/^(\w+)\s*=/gm);for(const i of s)t.push(i[1]);return[...new Set(t)]}),kl={code:{subscribe:Xa.subscribe},lastError:{subscribe:Ba.subscribe},definedNames:{subscribe:vc.subscribe},setCode(e){Xa.set(e),Ba.set(null),Vl()&&e.trim()&&Bh("code_context",e.trim())},getCode(){return U(Xa)},setError(e){Ba.set(e)},clearError(){Ba.set(null)},hasName(e){return U(vc).includes(e)},getDefinedNames(){return U(vc)},clear(){Xa.set(""),Ba.set(null)}},Am="pathview.toolboxes.v1",Dm=[{id:"pathsim-chem",displayName:"pathsim-chem",source:{type:"pypi",pkg:"pathsim-chem"},importPath:"pathsim_chem",defaultCategory:"Chemical",preloaded:!0},{id:"pathsim-batt",displayName:"pathsim-batt",source:{type:"pypi",pkg:"pathsim-batt"},importPath:"pathsim_batt",defaultCategory:"Battery"},{id:"pathsim-flight",displayName:"pathsim-flight",source:{type:"pypi",pkg:"pathsim-flight"},importPath:"pathsim_flight",defaultCategory:"Flight"},{id:"pathsim-vehicle",displayName:"pathsim-vehicle",source:{type:"pypi",pkg:"pathsim-vehicle"},importPath:"pathsim_vehicle",defaultCategory:"Vehicle"},{id:"pathsim-rf",displayName:"pathsim-rf",source:{type:"pypi",pkg:"pathsim-rf"},importPath:"pathsim_rf",defaultCategory:"RF"},{id:"pathsim-fmi",displayName:"pathsim-fmi",source:{type:"pypi",pkg:"pathsim-fmi"},importPath:"pathsim_fmi",defaultCategory:"FMI"}];function nM(e){return Dm.find(t=>t.id===e)}function sM(e){if(!e||typeof e!="object")return!1;const t=e;return typeof t.id=="string"&&typeof t.displayName=="string"&&typeof t.importPath=="string"&&Array.isArray(t.blocks)&&Array.isArray(t.events)&&!!t.source&&typeof t.source=="object"&&typeof t.source.type=="string"}function iM(){if(typeof localStorage>"u")return{toolboxes:[],seededIds:[]};const e=localStorage.getItem(Am);if(!e)return{toolboxes:[],seededIds:[]};try{const t=JSON.parse(e);if(t?.version!==1||!Array.isArray(t.toolboxes))return{toolboxes:[],seededIds:[]};const n=t.toolboxes.filter(sM);return n.length!==t.toolboxes.length&&console.warn(`[toolbox] dropped ${t.toolboxes.length-n.length} malformed entries from persisted state`),{toolboxes:n,seededIds:Array.isArray(t.seededIds)?t.seededIds.filter(s=>typeof s=="string"):[]}}catch{return{toolboxes:[],seededIds:[]}}}function oM(e){if(typeof localStorage>"u")return;const t={version:1,toolboxes:e.toolboxes,seededIds:e.seededIds};try{localStorage.setItem(Am,JSON.stringify(t))}catch(n){console.error("[toolbox] failed to persist:",n)}}const bs=Ie(iM());bs.subscribe(oM);const Wd={subscribe:(e,t)=>bs.subscribe(n=>e(n.toolboxes),t)};function aM(e){bs.update(t=>{const n=t.toolboxes.findIndex(i=>i.id===e.id),s=n===-1?[...t.toolboxes,e]:t.toolboxes.map((i,o)=>o===n?e:i);return{...t,toolboxes:s}})}function pA(e){const t=U(bs).toolboxes.length;return bs.update(n=>({...n,toolboxes:n.toolboxes.filter(s=>s.id!==e)})),U(bs).toolboxes.length!==t}function fA(){bs.update(e=>{const t=new Set(e.seededIds),n=new Set(e.toolboxes.map(o=>o.id)),s=[...e.toolboxes],i=[...e.seededIds];for(const o of Dm)!o.preloaded||t.has(o.id)||(n.has(o.id)||s.push({id:o.id,displayName:o.displayName,source:o.source,importPath:o.importPath,eventsImportPath:o.eventsImportPath,blocks:[],events:[]}),i.push(o.id));return{toolboxes:s,seededIds:i}})}const rM=`"""
Shared block/event introspection used by both:

  - scripts/extract.py at build time (for built-in pathsim blocks)
  - src/lib/toolbox/python.ts at runtime (for user-installed toolboxes,
    inlined into Pyodide via Vite's ?raw import)

Single source of truth for: RST-docstring parsing, parameter type inference,
default-value formatting, block/event class detection, and the canonical
extracted-metadata dict shape consumed by the TypeScript registry layer.
"""

import inspect
import json
import re

# --- Optional docutils for RST->HTML --------------------------------------

_publish_parts = None
_docutils_checked = False


def rst_to_html(rst):
    """Convert an RST docstring to HTML using docutils when available.

    Returns "" if docutils isn't installed or conversion fails. Build-time
    bundles docutils via requirements-build.txt; runtime falls back gracefully.
    """
    global _publish_parts, _docutils_checked
    if not rst:
        return ""
    if not _docutils_checked:
        _docutils_checked = True
        try:
            from docutils.core import publish_parts  # type: ignore
            _publish_parts = publish_parts
        except Exception:
            _publish_parts = None
    if _publish_parts is None:
        return ""
    try:
        cleaned = inspect.cleandoc(rst)
        parts = _publish_parts(
            cleaned,
            writer_name="html",
            settings_overrides={
                "report_level": 5,
                "halt_level": 5,
                "initial_header_level": 3,
                "math_output": "MathJax",
            },
        )
        return parts.get("body") or ""
    except Exception:
        return ""


def first_line(docstring):
    """First sentence of a docstring (used as the short description)."""
    if not docstring:
        return ""
    for line in docstring.strip().split("\\n"):
        s = line.strip()
        if not s:
            continue
        if ". " in s:
            return s.split(". ")[0] + "."
        return s
    return ""


def param_desc(docstring, name):
    """Extract a \`:param name:\` description from an RST docstring."""
    if not docstring:
        return ""
    pattern = (
        re.escape(name)
        + r"\\s*:\\s*[^\\n]*\\n\\s+(.+?)(?=\\n\\s*\\w+\\s*:|\\n\\n|$)"
    )
    m = re.search(pattern, docstring, re.DOTALL)
    if m:
        return re.sub(r"\\s+", " ", m.group(1).strip())
    return ""


# --- Parameter helpers ----------------------------------------------------


def infer_type(value, name=""):
    """Infer the param type for a default value, matching ParamType in TS."""
    if name and (name.startswith("func_") or name.startswith("func")):
        return "callable"
    if callable(value) and not isinstance(value, type):
        return "callable"
    if isinstance(value, bool):
        return "boolean"
    if isinstance(value, int):
        return "integer"
    if isinstance(value, float):
        return "number"
    if isinstance(value, str):
        return "string"
    if isinstance(value, (list, tuple)):
        return "array"
    return "any"


def format_default(value):
    """Format a default as a TypeScript-compatible source string (or None)."""
    if value is None or value is inspect.Parameter.empty:
        return None
    if callable(value) and not isinstance(value, type):
        return None
    if isinstance(value, bool):
        return "true" if value else "false"
    if isinstance(value, (int, float)):
        return repr(value)
    if isinstance(value, str):
        return json.dumps(value)
    if isinstance(value, (list, tuple)):
        try:
            return json.dumps(list(value))
        except Exception:
            return repr(list(value))
    if isinstance(value, type):
        return json.dumps(value.__name__)
    try:
        return repr(value)
    except Exception:
        return None


def extract_params_from_signature(cls, docstring):
    """Extract parameters by introspecting the class __init__ signature."""
    out = []
    try:
        sig = inspect.signature(cls.__init__)
    except (TypeError, ValueError):
        return out
    for pname, p in sig.parameters.items():
        if pname == "self":
            continue
        if p.kind in (
            inspect.Parameter.VAR_POSITIONAL,
            inspect.Parameter.VAR_KEYWORD,
        ):
            continue
        out.append({
            "name": pname,
            "default": format_default(p.default),
            "type": infer_type(p.default, pname),
            "description": param_desc(docstring, pname),
        })
    return out


# --- Port-label normalisation --------------------------------------------


def process_port_labels(labels):
    """Normalise the \`*_port_labels\` value into the canonical shape:

    - None -> None (variable/unlimited ports)
    - {}   -> []   (no ports of this type)
    - dict -> sorted list of names
    - list -> the list itself
    """
    if labels is None:
        return None
    if isinstance(labels, dict):
        if not labels:
            return []
        return [name for name, _ in sorted(labels.items(), key=lambda x: x[1])]
    if isinstance(labels, (list, tuple)):
        return list(labels)
    return None


# --- Class detection (runtime needs heuristics) --------------------------


def is_block(cls):
    """Best-effort check: subclass of pathsim's Block."""
    if not inspect.isclass(cls):
        return False
    for base in cls.__mro__[1:]:
        if base.__name__ == "Block" and base.__module__.startswith("pathsim"):
            return True
    return False


def is_event(cls):
    """Best-effort check: pathsim Event subclass or *Event-named class."""
    if not inspect.isclass(cls):
        return False
    name = cls.__name__
    if name.startswith("_"):
        return False
    for base in cls.__mro__[1:]:
        if base.__name__.endswith("Event") and "pathsim" in base.__module__:
            return True
    return name.endswith("Event")


# --- Canonical extraction ------------------------------------------------


def extract_block(cls):
    """Extract canonical block metadata from a class.

    Uses \`cls.info()\` when available (the convention for pathsim Block
    subclasses); falls back to signature introspection otherwise.
    """
    raw_doc = cls.__doc__ or ""

    info = None
    info_fn = getattr(cls, "info", None)
    if callable(info_fn):
        try:
            info = info_fn()
        except Exception:
            info = None

    if info is not None:
        rst = (info.get("description") or raw_doc).strip()
        params = []
        for pname, meta in (info.get("parameters") or {}).items():
            default = meta.get("default") if isinstance(meta, dict) else None
            params.append({
                "name": pname,
                "default": format_default(default),
                "type": infer_type(default, pname),
                "description": param_desc(rst, pname),
            })
        return {
            "className": cls.__name__,
            "description": first_line(rst),
            "docstringHtml": rst_to_html(rst),
            "inputs": process_port_labels(info.get("input_port_labels")),
            "outputs": process_port_labels(info.get("output_port_labels")),
            "params": params,
        }

    # Fallback: signature introspection + class attribute port labels
    return {
        "className": cls.__name__,
        "description": first_line(raw_doc),
        "docstringHtml": rst_to_html(raw_doc),
        "inputs": process_port_labels(getattr(cls, "input_port_labels", None)),
        "outputs": process_port_labels(getattr(cls, "output_port_labels", None)),
        "params": extract_params_from_signature(cls, raw_doc),
    }


def extract_event(cls):
    """Extract canonical event metadata from a class."""
    raw_doc = cls.__doc__ or ""
    return {
        "className": cls.__name__,
        "description": first_line(raw_doc),
        "docstringHtml": rst_to_html(raw_doc),
        "params": extract_params_from_signature(cls, raw_doc),
    }
`,lM=`"""Shared package-install primitives for the Pyodide and Flask backends.

Single source of truth for "is this importable?" + "install this package",
used by BOTH the engine-install seam (worker boot, via engineInstall.ts) and
the runtime toolbox installer (via TOOLBOX_PYTHON_HELPERS). Defined here, in
one place, so there is exactly one micropip / pip code path with one
error-classification scheme instead of three inline copies.

The engine seam injects this before the worker snapshots \`\`_clean_globals\`\`,
so these names survive a simulation reset; the toolbox layer re-injects the
same source (idempotent) on demand.
"""

import sys as _pv_sys
import importlib as _pv_importlib


def _pv_already_installed(import_path):
    """Return True if the given module path is already importable."""
    if not import_path:
        return False
    try:
        _pv_importlib.import_module(import_path)
        return True
    except Exception:
        return False


async def _pv_install_micropip(spec, pre=False, keep_going=True):
    """Pyodide-side install via micropip (top-level await).

    micropip can only install pure-Python wheels (or packages Pyodide ships
    pre-built), so toolboxes with compiled/native code fail here even though
    they install fine in the standalone (pip-backed) build. On failure we
    classify the error and prefix it with PV_INCOMPATIBLE (browser-runtime
    limitation) or PV_INSTALL_ERROR (genuine failure) so the JS side can show
    a useful hint instead of a raw traceback.

    \`\`pre\`\` allows pre-release wheels (used by the engine seam); \`\`keep_going\`\`
    keeps resolving the rest of the dependency set after a single miss.
    """
    import micropip
    try:
        await micropip.install(spec, keep_going=keep_going, pre=pre)
    except Exception as e:
        msg = str(e)
        low = msg.lower()
        incompatible = (
            "pure python" in low
            or "can't find" in low
            or "cannot find" in low
            or "no matching distribution" in low
            or "no known package" in low
        )
        tag = "PV_INCOMPATIBLE" if incompatible else "PV_INSTALL_ERROR"
        raise RuntimeError(tag + ": " + msg)
    return {"ok": True, "spec": spec, "via": "micropip"}


def _pv_install_pip(spec):
    """CPython-side install via subprocess pip (Flask backend)."""
    import subprocess as _pv_subprocess
    res = _pv_subprocess.run(
        [_pv_sys.executable, "-m", "pip", "install", spec],
        capture_output=True,
        text=True,
    )
    if res.returncode != 0:
        raise RuntimeError("pip install failed:\\n" + (res.stderr or res.stdout))
    return {"ok": True, "spec": spec, "via": "pip"}
`,cM=`
import sys as _pv_sys
import importlib as _pv_importlib
import types as _pv_types

_PV_INLINE_PREFIX = "pathview_inline_"


def _pv_load_inline(module_name, code):
    """Exec a single-file Python module string into sys.modules."""
    if not module_name.startswith(_PV_INLINE_PREFIX):
        module_name = _PV_INLINE_PREFIX + module_name
    mod = _pv_types.ModuleType(module_name)
    mod.__file__ = "<inline:" + module_name + ">"
    try:
        exec(compile(code, mod.__file__, "exec"), mod.__dict__)
    except Exception as e:
        return {"ok": False, "error": str(e), "module": module_name}
    _pv_sys.modules[module_name] = mod
    return {"ok": True, "module": module_name}


def _pv_drop_module(import_path):
    """Drop a module + submodules from sys.modules."""
    dropped = []
    prefix = import_path + "."
    for name in list(_pv_sys.modules.keys()):
        if name == import_path or name.startswith(prefix):
            try:
                del _pv_sys.modules[name]
                dropped.append(name)
            except KeyError:
                pass
    return dropped


def pathview_introspect_blocks(import_path):
    """Walk the module and return all Block subclasses with metadata."""
    try:
        mod = _pv_importlib.import_module(import_path)
    except Exception as e:
        return {"ok": False, "error": str(e)}
    blocks = []
    for name in dir(mod):
        if name.startswith("_"):
            continue
        obj = getattr(mod, name)
        if not is_block(obj):
            continue
        if obj.__module__ != mod.__name__ and not obj.__module__.startswith(mod.__name__ + "."):
            continue
        try:
            blocks.append(extract_block(obj))
        except Exception as e:
            blocks.append({"className": name, "error": str(e)})
    return {"ok": True, "blocks": blocks}


def pathview_introspect_events(import_path):
    """Walk the events submodule and list event classes with their params."""
    try:
        mod = _pv_importlib.import_module(import_path)
    except Exception as e:
        return {"ok": False, "error": str(e)}
    events = []
    for name in dir(mod):
        if name.startswith("_"):
            continue
        obj = getattr(mod, name)
        if not is_event(obj):
            continue
        if obj.__module__ != mod.__name__ and not obj.__module__.startswith(mod.__name__ + "."):
            continue
        events.append(extract_event(obj))
    return {"ok": True, "events": events}


def pathview_uninstall(import_path):
    """Drop a module + submodules from sys.modules."""
    return {"ok": True, "dropped": _pv_drop_module(import_path)}


def _pv_module_version(import_path):
    """Best-effort version lookup for an imported module.
    Tries module.__version__ first, falls back to importlib.metadata,
    returns None if nothing works."""
    try:
        mod = _pv_importlib.import_module(import_path)
    except Exception:
        return None
    v = getattr(mod, "__version__", None)
    if isinstance(v, str) and v:
        return v
    try:
        import importlib.metadata as _pv_md
    except Exception:
        return None
    # Walk up the dotted path so submodule imports still resolve to their
    # owning distribution (e.g. pathsim_chem.blocks → pathsim-chem).
    parts = import_path.split(".")
    for i in range(len(parts), 0, -1):
        candidate = parts[0] if i == 1 else ".".join(parts[:i])
        for name in (candidate, candidate.replace("_", "-"), candidate.replace("-", "_")):
            try:
                return _pv_md.version(name)
            except Exception:
                continue
    return None


_pv_helpers_loaded = True
`,dM=rM+lM+cM,uM="'_pv_helpers_loaded' in dir()";async function Ea(){await fm(),await Bn(uM)||(await Ue(dM),await pM())}async function pM(){try{if(await Bn('_pv_already_installed("docutils")'))return;rm()==="pyodide"?await Ue('await _pv_install_micropip("docutils")'):await Ue('_pv_install_pip("docutils")')}catch(e){console.warn("[toolbox] could not install docutils:",e)}}function An(e){return JSON.stringify(e)}function fM(e,t){const n=t instanceof Error?t.message:String(t);if(!n.includes("PV_INCOMPATIBLE"))return new Error(n.replace(/PV_INSTALL_ERROR:\s*/,""));const s=n.split("PV_INCOMPATIBLE:").pop()?.trim()||n;return new Error(`"${e}" can't be installed in the PathView web app.

The web version runs Python in your browser via Pyodide, which can
only install pure-Python packages (or packages Pyodide ships
pre-built). This toolbox needs compiled or native code that isn't
available in the browser.

To use it, install the standalone PathView desktop app:
    pip install pathview
    pathview
It runs a real Python environment and can install any pip package.

micropip: ${s}`)}async function qp(e,t){if(await Ea(),t&&await Bn(`_pv_already_installed(${An(t)})`))return;if(rm()==="pyodide")try{await Ue(`await _pv_install_micropip(${An(e)})`)}catch(s){throw fM(e,s)}else await Ue(`_pv_install_pip(${An(e)})`)}async function hM(e,t){await Ea();const n=await Bn(`_pv_load_inline(${An(e)}, ${An(t)})`);if(!n.ok)throw new Error(`Failed to load inline module: ${n.error??"unknown error"}`);return n.module}async function mM(e){await Ea();const t=await Bn(`pathview_introspect_blocks(${An(e)})`);if(!t.ok||!t.blocks)throw new Error(`Introspection failed for "${e}": ${t.error??"unknown error"}`);return t.blocks}async function gM(e){await Ea();const t=await Bn(`pathview_introspect_events(${An(e)})`);if(!t.ok||!t.events)throw new Error(`Event introspection failed for "${e}": ${t.error??"unknown error"}`);return t.events}async function Om(e){await Ea();try{return await Bn(`_pv_module_version(${An(e)})`)}catch{return null}}async function Vp(e){await Ea();const t=await Bn(`pathview_uninstall(${An(e)})`);if(!t.ok)throw new Error(`Failed to drop module "${e}"`);return t.dropped}function Wp(e){if(e==null)return{ports:void 0,max:null};if(Array.isArray(e))return e.length===0?{ports:[],max:0}:{ports:e,max:e.length};const t=Object.entries(e);if(t.length===0)return{ports:[],max:0};t.sort((s,i)=>s[1]-i[1]);const n=t.map(([s])=>s);return{ports:n,max:n.length}}const vM=new Set(["number","integer","boolean","string","array","callable","any"]);function yM(e){return vM.has(e)?e:"any"}function bM(e){return e==="callable"||e==="array"?e:e==="number"||e==="integer"?"number":"string"}const wM=new Set(["pill","rect","circle","diamond","mixed"]);function _M(e){if(e)return wM.has(e)?e:void 0}function xM(e,t,n,s){const{ports:i,max:o}=Wp(e.inputs),{ports:a,max:r}=Wp(e.outputs),c={};for(const u of e.params)c[u.name]={type:yM(u.type),default:u.default,description:u.description||void 0};const d=Fl({name:t.override?.name??e.className,category:t.override?.category??n,blockClass:e.className,importPath:s,description:e.description,inputs:i,outputs:a,maxInputs:o,maxOutputs:r,shape:_M(t.override?.shape),syncPorts:t.override?.syncPorts||void 0,params:c});return e.docstringHtml&&(d.docstring=e.docstringHtml),d}function kM(e,t,n){const s=e.params.map(o=>({name:o.name,type:bM(o.type),default:o.default,description:o.description||void 0})),i={type:`${n}.${e.className}`,name:t.override?.name??e.className,description:e.description,params:s,eventClass:e.className};return e.docstringHtml&&(i.docstringHtml=e.docstringHtml),i}async function SM(e,t){let n;if(e.type==="pypi"){const i=e.version?`${e.pkg}==${e.version}`:e.pkg;n=t??e.pkg.replace(/-/g,"_"),await qp(i,n)}else if(e.type==="url"){if(!t)throw new Error("importPath is required when installing from URL");await qp(e.url,t),n=t}else if(e.type==="inline"){const i=e.filename.replace(/\.py$/,"").replace(/[^A-Za-z0-9_]/g,"_");n=await hM(i,e.code)}else throw new Error(`Unknown toolbox source type: ${e.type}`);const s=await Om(n);return{importPath:n,installedVersion:s}}async function IM(e){const t=await mM(e.importPath);let n=[];if(e.eventsImportPath)try{n=await gM(e.eventsImportPath)}catch(s){console.warn(`[toolbox] event introspection skipped for "${e.eventsImportPath}":`,s)}return{blocks:t,events:n}}function EM(e,t){Dt.unregisterSource(e.id),va.unregisterSource(e.id);const n=new Map(t.blocks.map(i=>[i.className,i])),s=new Map(t.events.map(i=>[i.className,i]));for(const i of e.blocks){if(!i.enabled)continue;const o=n.get(i.className);if(!o||o.error)continue;const a=t.categoryByClass?.[i.className]??t.defaultCategory??e.displayName,r=xM(o,i,a,e.importPath);Dt.register(r,e.id)}for(const i of e.events){if(!i.enabled)continue;const o=s.get(i.className);if(!o)continue;const a=e.eventsImportPath??e.importPath,r=kM(o,i,a);va.register(r,e.id)}}function TM(e,t,n={}){EM(e,{blocks:t.blocks,events:t.events,defaultCategory:n.defaultCategory,categoryByClass:n.categoryByClass}),aM(e)}async function hA(e){Dt.unregisterSource(e.id),va.unregisterSource(e.id);try{await Vp(e.importPath),e.eventsImportPath&&await Vp(e.eventsImportPath)}catch{}}const Fr=new Map;async function CM(e){const t=Fr.get(e.id);if(t)return t;const n=(async()=>{const s=await SM(e.source,e.importPath),i=await IM({importPath:s.importPath,eventsImportPath:e.eventsImportPath}),o=U(Wd).find(c=>c.id===e.id),a={id:e.id,displayName:e.displayName,source:e.source,importPath:s.importPath,eventsImportPath:e.eventsImportPath,installedVersion:s.installedVersion,blocks:i.blocks.map(c=>o?.blocks.find(d=>d.className===c.className)??{className:c.className,enabled:!0}),events:i.events.map(c=>o?.events.find(d=>d.className===c.className)??{className:c.className,enabled:!0})},r=nM(e.id);return TM(a,i,{defaultCategory:r?.defaultCategory,categoryByClass:r?.categoryByClass}),a})();return Fr.set(e.id,n),n.catch(()=>{}).finally(()=>{Fr.get(e.id)===n&&Fr.delete(e.id)}),n}let Xc=null,Kp=!1;async function mA(){if(!Kp){try{Xc=await Om("pathsim")}catch{Xc=null}Kp=!0}}function NM(){return Xc}const PM="pathsim",MM=PM;function gA(e){return e}function AM(e){let t=5381;for(let n=0;n<e.length;n++)t=t*33^e.charCodeAt(n);return(t>>>0).toString(36)}function DM(e){return e.trim().toLowerCase().replace(/[-_.]+/g,"-")}function Gp(e){if(!e||typeof e!="object")return"unknown:";switch(e.type){case"pypi":return`pypi:${DM(e.pkg)}`;case"url":return`url:${e.url.trim()}`;case"inline":return`inline:${AM(e.code)}`;default:return`unknown:${JSON.stringify(e)}`}}const jp=new Set(["pathsim","fastsim",MM]);function Rm(e){const t=e.source??{};return[e.importPath,e.id,t.pkg,t.url].filter(Boolean).map(String).some(s=>jp.has(s)||jp.has(s.replace(/-/g,"_")))}function Lm(e,t){for(const n of e)n.type!==We.SUBSYSTEM&&n.type!==We.INTERFACE&&t.add(n.type),n.graph?.nodes&&Lm(n.graph.nodes,t)}function OM(e){return{id:e.id,displayName:e.displayName,source:e.source,importPath:e.importPath,eventsImportPath:e.eventsImportPath,installedVersion:e.installedVersion??null}}function zm(e){const t=new Set;Lm(e,t);const n=new Set;for(const o of t){const a=Dt.getSource(o);a&&a!==_d&&n.add(a)}const s=U(Wd),i=[];for(const o of n){const a=s.find(r=>r.id===o);a&&i.push(OM(a))}return i.filter(o=>!Rm(o))}function RM(e){if(!e||e.length===0)return[];const t=new Set(U(Wd).map(n=>Gp(n.source)));return e.filter(n=>!Rm(n)&&!t.has(Gp(n.source)))}const Kl={JSON:"application/json",CSV:"text/csv;charset=utf-8;",SVG:"image/svg+xml",PYTHON:"text/x-python"};function Gl(e,t,n){const s=new Blob([e],{type:n}),i=URL.createObjectURL(s),o=document.createElement("a");o.href=i,o.download=t,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(i)}function LM(e,t){const n=typeof e=="string"?e:JSON.stringify(e,null,"	");Gl(n,t,Kl.JSON)}function vA(e,t){Gl(e,t,Kl.CSV)}function yA(e,t){Gl(e,t,Kl.SVG)}function bA(e,t){Gl(e,t,Kl.PYTHON)}const Kd={open:!1,options:null,resolve:null},jl=Ie(Kd);function zM(e){return new Promise(t=>{jl.set({open:!0,options:{confirmText:"Confirm",cancelText:"Cancel",...e},resolve:t})})}function HM(){jl.update(e=>(e.resolve&&e.resolve(!0),Kd))}function FM(){jl.update(e=>(e.resolve&&e.resolve(!1),Kd))}const Hm={subscribe:jl.subscribe,show:zM,confirm:HM,cancel:FM},BM="pathview",qM=1,pr="kv",wa="recents",Yp=10,Fm="autosave";let Br=null;function VM(){return Br||(Br=new Promise((e,t)=>{const n=indexedDB.open(BM,qM);n.onupgradeneeded=()=>{const s=n.result;s.objectStoreNames.contains(pr)||s.createObjectStore(pr),s.objectStoreNames.contains(wa)||s.createObjectStore(wa,{keyPath:"id"}).createIndex("lastOpened","lastOpened")},n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error),n.onblocked=()=>t(new Error("IndexedDB open blocked"))}),Br)}function Es(e,t,n){return VM().then(s=>new Promise((i,o)=>{const a=s.transaction(e,t),r=a.objectStore(e);let c;Promise.resolve(n(r)).then(d=>{if(d&&typeof d.addEventListener=="function"){const u=d;u.onsuccess=()=>{c=u.result},u.onerror=()=>o(u.error)}else c=d}),a.oncomplete=()=>i(c),a.onerror=()=>o(a.error),a.onabort=()=>o(a.error)}))}async function wA(e){return Es(pr,"readonly",t=>t.get(e))}async function WM(e,t){await Es(pr,"readwrite",n=>n.put(t,e))}async function KM(e){await Es(pr,"readwrite",t=>t.delete(e))}async function Gd(){return(await Es(wa,"readonly",t=>t.getAll())).sort((t,n)=>n.lastOpened-t.lastOpened)}async function GM(e){const t=Date.now();await Es(wa,"readwrite",s=>s.put({...e,lastOpened:t}));const n=await Gd();if(n.length>Yp){const s=n.slice(Yp);await Es(wa,"readwrite",i=>(s.forEach(o=>i.delete(o.id)),i.count()))}}async function Bm(e){await Es(wa,"readwrite",t=>t.delete(e))}function jM(e){return`${e.kind}:${e.name}`}function _A(){return typeof window<"u"&&"showOpenFilePicker"in window}const YM="pathview_autosave",XM=".pvm";let qr=null,Qn=null;const Ta=Ie(null);function kr(){return"showSaveFilePicker"in window&&"showOpenFilePicker"in window}const xA={subscribe:Ta.subscribe};function qm(){let e=null;return Ta.subscribe(t=>e=t)(),e}function UM(){Qn=null,Ta.set(null)}function Yl(e){const{nodes:t,connections:n,annotations:s}=le.toJSON(),i=Mt.toJSON(),o=es.get(),a=kl.getCode(),r=t.map(f=>Mm(f)),c=Object.fromEntries(Object.entries(o).map(([f,p])=>[f,p===""?null:p])),d=zm(t),u=NM();return{version:V2,metadata:{created:new Date().toISOString(),modified:new Date().toISOString(),name:e||"Untitled",...u?{pathsimVersion:u}:{}},graph:{nodes:r,connections:n,annotations:s},events:i,codeContext:{code:a},simulationSettings:c,...d.length>0?{requiredToolboxes:d}:{}}}function ZM(e){if(e.startsWith("pathsim.")){const t=e.split(".");return t[t.length-1]}return e}function JM(e){const t=n=>n.map(s=>{const i={...s,type:ZM(s.type)};return i.graph&&(i.graph={nodes:t(i.graph.nodes||[]),connections:i.graph.connections||[],annotations:i.graph.annotations,events:i.graph.events}),i});return{...e,graph:e.graph?{...e.graph,nodes:t(e.graph.nodes||[])}:e.graph}}async function jd(e){const t=RM(e);if(t.length===0)return;const n=t.map(i=>`· ${i.displayName}${i.installedVersion?` (saved with v${i.installedVersion})`:""}`).join(`
`);if(!await Hm.show({title:"Install required toolboxes?",message:`This file uses ${t.length} toolbox${t.length===1?"":"es"} that ${t.length===1?"is":"are"} not installed:

${n}

Install now?`,confirmText:"Install",cancelText:"Skip"})){$e.warn(`[toolbox] skipped install of: ${t.map(i=>i.id).join(", ")}. Affected blocks will render as placeholders.`);return}for(const i of t)try{await CM({id:i.id,displayName:i.displayName,source:i.source,importPath:i.importPath||void 0,eventsImportPath:i.eventsImportPath}),$e.info(`[toolbox] installed ${i.displayName}`)}catch(o){const a=o instanceof Error?o.message:String(o);$e.error(`[toolbox] failed to install ${i.displayName}: ${a}`)}}async function QM(e,t={}){if(e=JM(e),!e.version)throw new Error("Invalid file: missing version");if(gm(),le.clear(),Mt.clear(),$e.clear(),await af(),le.fromJSON(e.graph?.nodes||[],e.graph?.connections||[],e.graph?.annotations||[]),e.events&&e.events.length>0&&Mt.fromJSON(e.events),e.codeContext?.code?kl.setCode(e.codeContext.code):kl.clear(),e.simulationSettings){const s=e.simulationSettings,i={...Nt,solver:s.solver??Nt.solver,ghostTraces:s.ghostTraces??Nt.ghostTraces,plotResults:s.plotResults??Nt.plotResults,adaptive:s.adaptive??Nt.adaptive,duration:s.duration!=null?String(s.duration):Nt.duration,dt:s.dt!=null?String(s.dt):Nt.dt,rtol:s.rtol!=null?String(s.rtol):Nt.rtol,atol:s.atol!=null?String(s.atol):Nt.atol,ftol:s.ftol!=null?String(s.ftol):Nt.ftol,dt_min:s.dt_min!=null?String(s.dt_min):Nt.dt_min,dt_max:s.dt_max!=null?String(s.dt_max):Nt.dt_max};es.set(i)}else es.reset();Fe.clear(),UP();const n=async()=>{e.requiredToolboxes&&e.requiredToolboxes.length>0&&await jd(e.requiredToolboxes);const s=fr(e.graph?.nodes||[]);s.length>0&&$e.warn(`[toolbox] unknown block types in this file: ${s.join(", ")}. They will render as placeholders.`)};t.deferToolboxInstall?(async()=>{try{t.backendReady&&await t.backendReady,await n()}catch(s){const i=s instanceof Error?s.message:String(s);$e.error(`[toolbox] deferred install failed: ${i}`)}})():await n()}async function kA(){const{nodes:e}=le.toJSON();if(e.length===0)return;await jd(zm(e));const t=fr(e);t.length>0&&$e.warn(`[toolbox] unknown block types in this file: ${t.join(", ")}. They will render as placeholders.`)}async function Vm(){try{const e=Yl("Autosave");await WM(Fm,e)}catch(e){console.warn("Autosave failed:",e)}}function SA(e=500){qr&&clearTimeout(qr),qr=setTimeout(()=>{Vm(),qr=null},e)}async function $M(){await KM(Fm),localStorage.removeItem(YM)}async function IA(){if(Qn&&kr())try{const e=Yl(qm()||void 0),t=JSON.stringify(e,null,2),n=await Qn.createWritable();return await n.write(t),await n.close(),Yd(Qn),!0}catch(e){console.warn("Failed to save to current file:",e)}return e3()}async function e3(){const e=(qm()||"pathview_graph")+XM;if(kr())try{const t=await window.showSaveFilePicker({suggestedName:e,types:[{description:"PathView Model",accept:{"application/json":[".pvm",".json"]}}]}),n=t.name.replace(/\.(pvm|json)$/,""),s=Yl(n),i=JSON.stringify(s,null,2),o=await t.createWritable();return await o.write(i),await o.close(),Qn=t,Ta.set(n),Yd(t),!0}catch(t){if(t.name==="AbortError")return!1;console.error("Failed to save file:",t)}return t3(e),!0}function t3(e){const t=e.replace(/\.(pvm|json)$/,""),n=Yl(t);LM(n,e),Ta.set(t)}function EA(){gm(),le.clear(),Mt.clear(),kl.clear(),$e.clear(),es.reset(),Fe.clear(),$M(),UM()}function TA(e=3e4){const t=setInterval(()=>{Vm()},e);return()=>clearInterval(t)}function n3(e){if(typeof e!="object"||e===null)return"unknown";const t=e;return"type"in t&&["block","subsystem","model"].includes(t.type)?"component":"graph"in t&&"version"in t?"legacy-model":"unknown"}function Wm(e,t){const n=JSON.parse(e),s=n3(n);if(s==="unknown")throw new Error("Invalid file format");return s==="legacy-model"?{version:eM,type:"model",metadata:{name:n.metadata?.name||t.replace(/\.(json|pvm)$/,""),created:n.metadata?.created||new Date().toISOString(),modified:n.metadata?.modified||new Date().toISOString()},content:{graph:n.graph,events:n.events,codeContext:n.codeContext,simulationSettings:n.simulationSettings}}:n}function fr(e){const t=[];for(const n of e){if(n.type===We.SUBSYSTEM||n.type===We.INTERFACE){n.graph?.nodes&&t.push(...fr(n.graph.nodes));continue}Dt.has(n.type)||t.push(n.type),n.graph?.nodes&&t.push(...fr(n.graph.nodes))}return[...new Set(t)]}async function s3(e,t){const n=e.node;e.requiredToolboxes&&e.requiredToolboxes.length>0&&await jd(e.requiredToolboxes);const s=fr([n]);if(s.length>0)throw new Error(`Unknown block type(s): ${s.join(", ")}`);const i=ES(n,t);return Fe.mutate(()=>{le.clearSelection(),Mt.clearSelection(),le.pasteNodes([i],[])}),[i.id]}async function i3(e,t){if(U(le.nodesArray).length>0&&!await Hm.show({title:"Unsaved Changes",message:"Opening this file will discard your current work. Continue?",confirmText:"Discard & Open",cancelText:"Cancel"}))return{success:!1,type:"model",cancelled:!0};const s=e.content,i={version:e.version,metadata:e.metadata,graph:s.graph||{nodes:[],connections:[]},events:s.events,codeContext:s.codeContext||{code:""},simulationSettings:s.simulationSettings||Nt};return await QM(i,{deferToolboxInstall:t.deferToolboxInstall,backendReady:t.backendReady}),Qn=t.fileHandle||null,Ta.set(t.fileName?.replace(/\.(pvm|json)$/,"")||e.metadata.name||null),Qn&&Yd(Qn),{success:!0,type:"model"}}async function Km(e,t){switch(e.type){case"block":case"subsystem":{const n=t.position||{x:100,y:100},s=await s3(e.content,n);return{success:!0,type:e.type,nodeIds:s}}case"model":return i3(e,t);default:return{success:!1,type:e.type,error:`Unknown component type: ${e.type}`}}}async function Sl(e,t={}){try{const n=await e.text(),s=Wm(n,e.name);return Km(s,{...t,fileName:t.fileName||e.name})}catch(n){return{success:!1,type:"model",error:n instanceof Error?n.message:"Unknown error"}}}async function CA(e,t={}){try{const n=await fetch(e);if(!n.ok)throw new Error(`Failed to fetch file: ${n.status} ${n.statusText}`);const s=await n.text(),i=t.fileName||e.split("/").pop()||"model.pvm",o=Wm(s,i);return Km(o,{...t,fileName:i})}catch(n){return{success:!1,type:"model",error:n instanceof Error?n.message:"Unknown error"}}}async function NA(e){if(kr())try{const[t]=await window.showOpenFilePicker({types:[{description:"PathView Files",accept:{"application/json":Yc}}],multiple:!1}),n=await t.getFile();return Sl(n,{position:e,fileHandle:t,fileName:t.name})}catch(t){return t.name==="AbortError"?{success:!1,type:"model",cancelled:!0}:(console.error("Failed to open file:",t),{success:!1,type:"model",error:"Failed to open file. Make sure it is a valid PathView file."})}return new Promise(t=>{const n=document.createElement("input");n.type="file",n.accept=Yc.join(","),n.onchange=async()=>{const s=n.files?.[0];if(!s){t({success:!1,type:"model",cancelled:!0});return}const i=await Sl(s,{position:e,fileName:s.name});t(i)},n.oncancel=()=>t({success:!1,type:"model",cancelled:!0}),n.click()})}async function Yd(e){try{await GM({id:jM(e),name:e.name,handle:e})}catch(t){console.warn("Failed to remember recent file:",t)}}async function PA(){if(!kr())return[];try{return await Gd()}catch(e){return console.warn("Failed to list recent files:",e),[]}}async function MA(e,t={}){if(!kr())return{success:!1,type:"model",error:"File System Access API not available"};let n;try{n=(await Gd()).find(i=>i.id===e)}catch(s){return{success:!1,type:"model",error:s instanceof Error?s.message:"Failed to read recent files"}}if(!n)return{success:!1,type:"model",error:"Recent file no longer tracked"};try{const s=n.handle;if(s.queryPermission&&s.requestPermission){let o=await s.queryPermission({mode:"readwrite"});if(o!=="granted"&&(o=await s.requestPermission({mode:"readwrite"})),o!=="granted")return{success:!1,type:"model",cancelled:!0}}const i=await s.getFile();return Sl(i,{...t,fileHandle:s,fileName:s.name})}catch(s){return await Bm(e).catch(()=>{}),{success:!1,type:"model",error:s instanceof Error?s.message:"Failed to open recent file"}}}async function AA(e){await Bm(e)}function o3(e,t){Ne(t,!0),te(t,"edges",19,()=>[]);let n=te(t,"embedded",3,!1);const{getNodes:s,getEdges:i,fitView:o,zoomIn:a,zoomOut:r,getViewport:c,setViewport:d,screenToFlowPosition:u}=bh(),f=wh();function p(m,D=300){const I=s();if(I.length===0)return;if(n()){o({padding:.1,duration:D});return}const P=U(Yh),N=U(Fd);let L=1/0,W=1/0,O=-1/0,T=-1/0;for(const se of I){const we=se.measured?.width??se.width??160,ie=se.measured?.height??se.height??60,me=se.origin??[.5,.5],pe=se.position.x-we*me[0],Ee=se.position.y-ie*me[1];let _e={left:pe,top:Ee,right:pe+we,bottom:Ee+ie};if(P&&se.type==="pathview"&&N.plots.has(se.id)){const Ce=se.data.params?._rotation||0;_e=gT(_e,tm(Ce))}L=Math.min(L,_e.left),W=Math.min(W,_e.top),O=Math.max(O,_e.right),T=Math.max(T,_e.bottom)}const M=10;L-=M,W-=M,O+=M,T+=M;const w=O-L,E=T-W,C=window.innerWidth,z=window.innerHeight,K=C-m.left-m.right,B=z-m.top-m.bottom;if(K<=0||B<=0){o({padding:.1,duration:D});return}const Z=K/w,Q=B/E,ee=Math.min(Z,Q,1.5),de=(L+O)/2,oe=(W+T)/2,Se=m.left+K/2,he=m.top+B/2,q=Se-de*ee,G=he-oe*ee;d({x:q,y:G,zoom:ee},{duration:D})}ed(()=>{setTimeout(()=>{const m=U(Zr);p(m,300)},200),vS(u),Im.registerDropHandler(async m=>{const D=u({x:m.clientX,y:m.clientY}),I=m.dataTransfer?.files;if(I&&I.length>0){const L=I[0],W="."+L.name.split(".").pop()?.toLowerCase();if(Yc.includes(W)){const O=await Sl(L,{position:{x:D.x-80,y:D.y-30},fileName:L.name});!O.success&&!O.cancelled&&O.error&&alert(`Failed to import: ${O.error}`);return}}const P=m.dataTransfer?.getData("application/pathview-node");if(P){const L=Math.round(D.x/tt)*tt,W=Math.round(D.y/tt)*tt;Fe.mutate(()=>{le.addNode(P,{x:L,y:W})});return}const N=m.dataTransfer?.getData("application/pathview-event");if(N){const L={x:D.x-40,y:D.y-40};Fe.mutate(()=>{if(le.isAtRoot())Mt.addEvent(N,L);else{const W=va.get(N);if(W){const O={id:crypto.randomUUID(),type:N,name:W.name,position:L,params:{}};le.addSubsystemEvent(O)}}});return}})});let h=0;Ch.subscribe(m=>{if(m>h){const D=U(Zr);p(D,300),h=m}});let g=0;Nh.subscribe(m=>{m>g&&(a({duration:200}),g=m)});let v=0;Ph.subscribe(m=>{m>v&&(r({duration:200}),v=m)});let b=0;Mh.subscribe(m=>{if(m.id>b){const D=c();d({x:D.x+m.x,y:D.y+m.y,zoom:D.zoom}),b=m.id}});let x=0;Ah.subscribe(m=>{m.id>x&&m.nodeId&&(o({nodes:[{id:m.nodeId}],padding:.5,duration:300,maxZoom:1.5}),x=m.id)}),je(()=>{t.pendingUpdates.length>0&&setTimeout(()=>{t.pendingUpdates.forEach(m=>{typeof f=="function"&&f(m)}),t.onUpdatesProcessed()},10)}),je(()=>{const m=setInterval(()=>{s().forEach(I=>{if(I.position){const P=le.getNode(I.id);P&&(Math.abs(P.position.x-I.position.x)>1||Math.abs(P.position.y-I.position.y)>1)&&le.updateNodePosition(I.id,I.position)}})},2e3);return()=>clearInterval(m)});let S=0;Vd.subscribe(m=>{if(m>S){S=m;const D=U(Zr);ZP(()=>s().map(I=>({id:I.id,x:I.position.x,y:I.position.y})),()=>i().map(I=>({id:I.id,source:I.source,target:I.target})),()=>p(D,0),()=>{const I=c(),P=document.querySelector(".svelte-flow");return{zoom:I.zoom,x:I.x,y:I.y,width:P?.clientWidth??window.innerWidth,height:P?.clientHeight??window.innerHeight}})}});let A=0;Hh.subscribe(m=>{m.id>A&&m.nodeId&&(A=m.id,$P(m.nodeId,m.position,()=>{const D=c(),I=document.querySelector(".svelte-flow");return{zoom:D.zoom,x:D.x,y:D.y,width:I?.clientWidth??window.innerWidth,height:I?.clientHeight??window.innerHeight}},m.cursorScreen,u))}),Pe()}function a3(){const e=new URL(window.location.href).searchParams.get("theme");if(e==="dark"||e==="light")return localStorage.setItem("pathview-theme",e),document.documentElement.setAttribute("data-theme",e),e;const t=localStorage.getItem("pathview-theme");return t==="light"||t==="dark"?t:window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}const Ua=Ie(a3());Ua.subscribe(e=>{document.documentElement.setAttribute("data-theme",e),localStorage.setItem("pathview-theme",e)});const Gm={subscribe:Ua.subscribe,toggle(){Ua.update(e=>e==="dark"?"light":"dark")},set(e){Ua.set(e)},get(){let e="dark";return Ua.subscribe(t=>e=t)(),e}},un=Ie({open:!1,position:{x:0,y:0},target:null}),Zo={subscribe:un.subscribe,openForNode(e,t){un.set({open:!0,position:t,target:{type:"node",nodeId:e}})},openForEvent(e,t){un.set({open:!0,position:t,target:{type:"event",eventId:e}})},openForSelection(e,t){un.set({open:!0,position:t,target:{type:"selection",nodeIds:e}})},openForEdge(e,t){un.set({open:!0,position:t,target:{type:"edge",edgeId:e}})},openForCanvas(e){un.set({open:!0,position:e,target:{type:"canvas"}})},openForAnnotation(e,t){un.set({open:!0,position:t,target:{type:"annotation",annotationId:e}})},openForPlot(e,t,n){un.set({open:!0,position:n,target:{type:"plot",nodeId:e,plotEl:t}})},close(){un.set({open:!1,position:{x:0,y:0},target:null})},getState(){return U(un)}},Vr=Ie([]),Xp={subscribe:Vr.subscribe,queueUpdate(e){Vr.update(t=>[...t,...e])},clear(){Vr.set([])},get(){return U(Vr)}};function r3(e,t){if(e===t)return!0;if(!e||!t||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function l3(e,t){if(e===t)return!0;if(!e||!t)return!1;const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(const s of n)if(e[s]!==t[s])return!1;return!0}function c3(e){return{id:e.id,type:"eventNode",position:{...e.position},data:e,origin:[.5,.5],selectable:!0,draggable:!0,connectable:!1,deletable:!0}}function d3(e){return{id:e.id,type:"annotation",position:{...e.position},data:e,width:e.width,height:e.height,origin:[0,0],selectable:!0,draggable:!0,connectable:!1,deletable:!0}}function Up(e){return{id:e.id,source:e.sourceNodeId,sourceHandle:ma.output(e.sourceNodeId,e.sourcePortIndex),target:e.targetNodeId,targetHandle:ma.input(e.targetNodeId,e.targetPortIndex),type:"orthogonal",data:{waypoints:e.waypoints},selectable:!0,deletable:!0,animated:!1}}function Xd(e){return le.getNode(e)?.params?._rotation||0}function u3(e){return(e+1)%4}function p3(e){return e===0?2:e===2?0:e}function f3(e){return e===1?3:e===3?1:e}function h3(e){const t=e.filter(n=>n.selected);return t.length===0?[]:Fe.mutate(()=>{const n=[];for(const s of t){const i=Xd(s.id),o=u3(i);le.updateNodeParams(s.id,{_rotation:o}),n.push(s.id)}return n})}function m3(e){const t=e.filter(n=>n.selected);return t.length===0?[]:Fe.mutate(()=>{const n=[];for(const s of t){const i=Xd(s.id),o=p3(i);o!==i&&(le.updateNodeParams(s.id,{_rotation:o}),n.push(s.id))}return n})}function g3(e){const t=e.filter(n=>n.selected);return t.length===0?[]:Fe.mutate(()=>{const n=[];for(const s of t){const i=Xd(s.id),o=f3(i);o!==i&&(le.updateNodeParams(s.id,{_rotation:o}),n.push(s.id))}return n})}function v3(e){const n=U(le.nodesArray).find(o=>o.id===e);if(!n)return null;const s=U(le.connections),i=new Set(s.filter(o=>o.targetNodeId===e).map(o=>o.targetPortIndex));for(let o=0;o<n.inputs.length;o++)if(!i.has(o))return o;return null}var y3=be('<div class="drop-zone-overlay svelte-5kezjk"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></div>'),b3=be("<!> <!>",1),w3=be('<div class="flow-canvas svelte-5kezjk" role="application" aria-label="Flow canvas"><!> <!></div>');function DA(e,t){Ne(t,!0);let n=te(t,"readonly",3,!1),s=ve("dark");const i=Gm.subscribe(R=>{H(s,R,!0)});let o=null;function a(){o!==null&&clearTimeout(o),o=setTimeout(()=>{o=null,P()},0)}let r={x:0,y:0};function c(R){r={x:R.clientX,y:R.clientY}}function d(R){if(q2()||F2(R))return;if(R.key==="Delete"){const ae=l(M).filter(De=>De.selected),fe=l(w).filter(De=>De.selected);(ae.length>0||fe.length>0)&&(R.preventDefault(),me({nodes:ae,edges:fe}));return}if(R.key==="\\"){const ae=l(w).find(fe=>fe.selected);if(ae){R.preventDefault();const fe=$a(r),De=10,Ke=Math.round(fe.x/De)*De,Me=Math.round(fe.y/De)*De;ut.addUserWaypoint(ae.id,{x:Ke,y:Me},I)}return}if(!l(M).some(ae=>ae.selected))return;let J=[];R.key==="r"||R.key==="R"?(R.preventDefault(),J=h3(l(M))):R.key==="x"||R.key==="X"?(R.preventDefault(),J=m3(l(M))):(R.key==="y"||R.key==="Y")&&(R.preventDefault(),J=g3(l(M))),J.length>0&&(H(f,[...J],!0),setTimeout(()=>{const ae=U(le.connections);ut.recalculateRoutesForNodes(new Set(J),ae,I)},0))}let u=new Map,f=ve(qt([]));const p=Xp.subscribe(R=>{R.length>0&&(H(f,[...l(f),...R],!0),Xp.clear())});yS(()=>l(M).some(R=>R.selected));let h=0;const g=Dh.subscribe(R=>{R>h&&(h=R,H(M,l(M).map(ne=>({...ne,selected:!1})),!0),H(w,l(w).map(ne=>({...ne,selected:!1})),!0),xt.set(new Set),cc(new Set))});let v=0;const b=Rh.subscribe(R=>{if(R.id>v){v=R.id;const ne={x:R.x,y:R.y};H(M,l(M).map(J=>J.selected?{...J,position:{x:J.position.x+ne.x,y:J.position.y+ne.y}}:J),!0),Fe.mutate(()=>{l(M).forEach(J=>{J.selected&&(J.type==="eventNode"?le.isAtRoot()?Mt.updateEventPosition(J.id,J.position):le.updateSubsystemEventPosition(J.id,J.position):J.type==="annotation"?le.updateAnnotationPosition(J.id,J.position):le.updateNodePosition(J.id,J.position))})})}});let x=0;const S=Lh.subscribe(R=>{if(R.id>x){x=R.id;const ne=new Set(R.nodeIds);H(M,l(M).map(J=>ne.has(J.id)?{...J,selected:!0}:R.addToSelection?J:{...J,selected:!1}),!0),R.addToSelection||H(w,l(w).map(J=>({...J,selected:!1})),!0),A()}});function A(){const R=l(M).filter(ae=>ae.selected),ne=new Set,J=new Set;R.forEach(ae=>{ae.type==="eventNode"?J.add(ae.id):ae.type!=="annotation"&&ne.add(ae.id)}),xt.set(ne),cc(J)}const m=[i,p,g,b,S];Dn(()=>{m.forEach(R=>R()),o!==null&&clearTimeout(o)});function D(){H(f,[],!0)}function I(R,ne,J){const ae=l(E).get(R);if(!ae)return null;const fe=ae.data,De=J?fe.outputs:fe.inputs;if(ne>=De.length)return null;const Ke=fe.params?._rotation||0,Me=ae.measured?.width??ae.width??Wc,Ye=ae.measured?.height??ae.height??Kc,kt=De.length,ge=20,et=-((kt-1)*ge)/2+ne*ge;let Xe=ae.position.x,Ze=ae.position.y,Je;const ot=J?Dp:Dp+_P;if(J)switch(Ke){case 1:Xe+=et,Ze+=Ye/2+ot,Je="down";break;case 2:Xe-=Me/2+ot,Ze+=et,Je="left";break;case 3:Xe+=et,Ze-=Ye/2+ot,Je="up";break;default:Xe+=Me/2+ot,Ze+=et,Je="right";break}else switch(Ke){case 1:Xe+=et,Ze-=Ye/2+ot,Je="up";break;case 2:Xe+=Me/2+ot,Ze+=et,Je="right";break;case 3:Xe+=et,Ze+=Ye/2+ot,Je="down";break;default:Xe-=Me/2+ot,Ze+=et,Je="left";break}return{position:{x:Xe,y:Ze},direction:Je}}function P(){const R=l(M).filter(De=>De.type==="pathview");if(R.length===0){ut.clearRoutes();return}const{nodeBounds:ne,canvasBounds:J}=VP(R),ae=[];for(const De of R){const Ke=De.data;for(let Me=0;Me<Ke.inputs.length;Me++){const Ye=I(De.id,Me,!1);Ye&&ae.push({position:Ye.position,direction:Ye.direction})}for(let Me=0;Me<Ke.outputs.length;Me++){const Ye=I(De.id,Me,!0);Ye&&ae.push({position:Ye.position,direction:Ye.direction})}}ut.setContext(ne,J,ae);const fe=U(le.connections);ut.recalculateAllRoutes(fe,I)}const N={pathview:SC,eventNode:CC,annotation:bP},L={orthogonal:jP};let W=ve(qt([])),O=ve(qt([])),T=ve(qt([])),M=ve(qt([])),w=ve(qt([])),E=y(()=>new Map(l(M).map(R=>[R.id,R])));je(()=>{const R=Zn(()=>new Map(l(M).map(J=>[J.id,J]))),ne=Fe.isRestoringState();H(M,[...l(W),...l(O),...l(T)].map(J=>{const ae=R.get(J.id);return ae&&!ne?{...J,position:ae.position,selected:ae.selected}:J}),!0)});const C=new Map;je(()=>{const R=new Set;for(const ne of l(M)){if(ne.type!=="pathview")continue;const J=ne.measured?.width,ae=ne.measured?.height;if(J===void 0||ae===void 0)continue;const fe=C.get(ne.id);(!fe||fe.w!==J||fe.h!==ae)&&(fe&&R.add(ne.id),C.set(ne.id,{w:J,h:ae}),ut.updateNodeBounds(ne.id,{x:ne.position.x-J/2,y:ne.position.y-ae/2,width:J,height:ae}))}if(R.size>0){const ne=U(le.connections);ut.recalculateRoutesForNodes(R,ne,I)}});let z=0;const K=Vd.subscribe(R=>{R>z&&(z=R,setTimeout(()=>P(),400))});Dn(()=>K());let B=!1,Z=!1,Q=new Set;je(()=>{const R=new Set(l(M).map(J=>J.id)),ne=[...Q].filter(J=>!R.has(J));ne.length>0&&!B&&(B=!0,ne.forEach(J=>{const ae=le.getNode(J),fe=Mt.getEvent(J);!ae&&!fe&&u.delete(J)}),B=!1),Q=R}),je(()=>{B||l(M).forEach(R=>{if(R.type==="annotation"&&R.width&&R.height){const ne=le.getAnnotation(R.id);ne&&(ne.width!==R.width||ne.height!==R.height)&&(B=!0,le.updateAnnotation(R.id,{width:R.width,height:R.height}),B=!1)}})}),m.push(le.nodes.subscribe(R=>{if(B)return;const ne=Array.from(R.values()).filter(ge=>!ge.params?._hidden),J=[],ae=new Map(l(M).map(ge=>[ge.id,ge])),fe=new Set(ne.map(ge=>ge.id)),De=new Set(l(M).map(ge=>ge.id)),Ke=ne.some(ge=>!De.has(ge.id)),Me=l(M).some(ge=>!fe.has(ge.id)),Ye=ne.some(ge=>{const Be=ae.get(ge.id);if(!Be)return!1;const et=Be.data,Xe=u.get(ge.id),Ze={inputs:ge.inputs.length,outputs:ge.outputs.length};return!!(Xe&&(Xe.inputs!==Ze.inputs||Xe.outputs!==Ze.outputs)||et.name!==ge.name||et.color!==ge.color||!l3(et.params,ge.params)||!r3(et.pinnedParams,ge.pinnedParams))});if(!Ke&&!Me&&!Ye&&Z)return;const kt=ne.map(ge=>{const Be=ae.get(ge.id),et=u.get(ge.id),Xe={inputs:ge.inputs.length,outputs:ge.outputs.length};if(et&&(et.inputs!==Xe.inputs||et.outputs!==Xe.outputs)&&J.push(ge.id),u.set(ge.id,Xe),Be){const rs=Be.data?.params?._rotation??0,ls=ge.params?._rotation??0;rs!==ls&&J.push(ge.id)}const Ze=Be&&!Fe.isRestoringState()?Be.position:{...ge.position},Je=ge.type===We.INTERFACE;return Be?{id:Be.id,type:Be.type,position:Ze,data:ge,origin:[.5,.5],selectable:Be.selectable,draggable:Be.draggable,deletable:!Je}:{id:ge.id,type:"pathview",position:Ze,data:ge,origin:[.5,.5],selectable:!0,draggable:!0,deletable:!Je}});for(const ge of u.keys())fe.has(ge)||u.delete(ge);H(W,kt,!0),J.length>0&&(H(f,[...J],!0),setTimeout(()=>{const ge=U(le.connections);ut.recalculateRoutesForNodes(new Set(J),ge,I)},0)),ne.length>0&&!Z&&setTimeout(()=>{Z=!0},100)}));let ee=[],de=[],oe=[];function Se(){const R=ee.length===0?de:oe;H(O,R.map(c3),!0)}m.push(le.currentPath.subscribe(R=>{ee=R,Se(),ut.clearContext()})),m.push(Mt.eventsArray.subscribe(R=>{de=R,Se()})),m.push(le.subsystemEvents.subscribe(R=>{oe=Array.from(R.values()),Se()})),m.push(le.annotations.subscribe(R=>{H(T,Array.from(R.values()).map(d3),!0)}));function he(){const R=U(le.nodes),ne=new Set;for(const J of R.values())J.params?._hidden||ne.add(J.id);return ne}function q(R){const ne=he(),J=new Map(l(w).map(ae=>[ae.id,ae.selected]));H(w,R.filter(ae=>ne.has(ae.sourceNodeId)&&ne.has(ae.targetNodeId)).map(ae=>{const fe=Up(ae);return J.get(ae.id)&&(fe.selected=!0),fe}),!0)}m.push(le.connections.subscribe(R=>{B||(q(R),a())})),m.push(le.nodes.subscribe(()=>{B||q(U(le.connections))}));let G=new Map;function se({nodes:R}){Fe.beginDrag(),G.clear();for(const ne of R){const J=Math.round(ne.position.x/tt)*tt,ae=Math.round(ne.position.y/tt)*tt;G.set(ne.id,{x:J,y:ae})}}function we({nodes:R}){const ne=new Set;for(const J of R){if(J.type!=="pathview")continue;const ae=Math.round(J.position.x/tt)*tt,fe=Math.round(J.position.y/tt)*tt,De=G.get(J.id);if(!De||De.x!==ae||De.y!==fe){G.set(J.id,{x:ae,y:fe}),ne.add(J.id);const Ke=J.measured?.width??J.width??Wc,Me=J.measured?.height??J.height??Kc;ut.updateNodeBounds(J.id,{x:ae-Ke/2,y:fe-Me/2,width:Ke,height:Me})}}if(ne.size>0){const J=U(le.connections);ut.recalculateRoutesForNodes(ne,J,I)}}function ie({targetNode:R}){G.clear(),R?.id&&R?.position&&(B=!0,R.type==="eventNode"?le.isAtRoot()?Mt.updateEventPosition(R.id,R.position):le.updateSubsystemEventPosition(R.id,R.position):R.type==="annotation"?le.updateAnnotationPosition(R.id,R.position):le.updateNodePosition(R.id,R.position),B=!1),Fe.endDrag(),P()}function me({nodes:R,edges:ne}){if(R.length===0&&ne.length===0)return;B=!0,Fe.mutate(()=>{R.forEach(fe=>{fe.type==="eventNode"?le.isAtRoot()?Mt.getEvent(fe.id)&&Mt.removeEvent(fe.id):le.getSubsystemEvent(fe.id)&&le.removeSubsystemEvent(fe.id):fe.type==="annotation"?le.getAnnotation(fe.id)&&le.removeAnnotation(fe.id):le.getNode(fe.id)&&(le.removeNode(fe.id),u.delete(fe.id))}),ne.forEach(fe=>{const De=U(le.connections);let Ke=De.find(Me=>Me.id===fe.id);if(!Ke&&fe.sourceHandle&&fe.targetHandle){const Me=fe.sourceHandle.match(/-output-(\d+)$/),Ye=fe.targetHandle.match(/-input-(\d+)$/);if(Me&&Ye){const kt=parseInt(Me[1],10),ge=parseInt(Ye[1],10);Ke=De.find(Be=>Be.sourceNodeId===fe.source&&Be.sourcePortIndex===kt&&Be.targetNodeId===fe.target&&Be.targetPortIndex===ge)}}Ke&&le.removeConnection(Ke.id)})});const J=new Set(R.map(fe=>fe.id));H(W,l(W).filter(fe=>!J.has(fe.id)),!0),H(O,l(O).filter(fe=>!J.has(fe.id)),!0),H(T,l(T).filter(fe=>!J.has(fe.id)),!0);const ae=U(le.connections);H(w,ae.map(Up),!0),B=!1}function pe(R){if(!R.source||!R.target||!R.sourceHandle||!R.targetHandle)return;const ne=R.sourceHandle.match(/-output-(\d+)$/),J=R.targetHandle.match(/-input-(\d+)$/);ne&&J&&Fe.mutate(()=>{const ae=parseInt(ne[1],10);let fe=parseInt(J[1],10);if(U(le.connections).some(Me=>Me.targetNodeId===R.target&&Me.targetPortIndex===fe)){const Me=v3(R.target);if(Me!==null)fe=Me;else{const kt=U(le.nodesArray).find(Be=>Be.id===R.target);if(!kt)return;const ge=Dt.get(kt.type);if(!ge||ge.ports.maxInputs!==null)return;le.addInputPort(R.target),fe=kt.inputs.length}}le.addConnection(R.source,ae,R.target,fe)})}function Ee({nodes:R}){const ne=new Set,J=new Set;R?.forEach(ae=>{ae.type==="eventNode"?J.add(ae.id):ne.add(ae.id)}),xt.set(ne),cc(J)}let _e=ve(!1),xe=0;function Ce(R){return R.dataTransfer?.types.includes("Files")??!1}function Te(R){Ce(R)&&(xe++,H(_e,!0))}function Ve(R){Ce(R)&&(xe--,xe===0&&H(_e,!1))}function ct(R){R.preventDefault(),xe=0,H(_e,!1),Im.handleDrop(R)}function Re(R){R.preventDefault(),R.dataTransfer&&(R.dataTransfer.dropEffect="copy")}let it;function Ot({event:R,node:ne}){if(R.preventDefault(),ne.type==="eventNode"){Zo.openForEvent(ne.id,{x:R.clientX,y:R.clientY});return}if(ne.type==="annotation"){Zo.openForAnnotation(ne.id,{x:R.clientX,y:R.clientY});return}const J=l(M).filter(ae=>ae.selected);J.length>1&&J.some(ae=>ae.id===ne.id)?Zo.openForSelection(J.map(ae=>ae.id),{x:R.clientX,y:R.clientY}):Zo.openForNode(ne.id,{x:R.clientX,y:R.clientY})}function Ft({event:R,edge:ne}){R.preventDefault(),Zo.openForEdge(ne.id,{x:R.clientX,y:R.clientY})}function as({event:R}){R.preventDefault(),Zo.openForCanvas({x:R.clientX,y:R.clientY})}function sn(R){R.target.closest(".svelte-flow__pane")&&wr()}var gt=w3();Et("keydown",Lt,function(...R){(n()?void 0:d)?.apply(this,R)}),gt.__dblclick=function(...R){(n()?void 0:sn)?.apply(this,R)},gt.__mousemove=function(...R){(n()?void 0:c)?.apply(this,R)};var wn=ue(gt);{var Ca=R=>{var ne=y3();_(R,ne)};V(wn,R=>{l(_e)&&R(Ca)})}var Na=ye(wn,2);{let R=y(()=>n()?void 0:pe),ne=y(()=>n()?void 0:se),J=y(()=>n()?void 0:we),ae=y(()=>n()?void 0:ie),fe=y(()=>n()?void 0:me),De=y(()=>n()?void 0:Ee),Ke=y(()=>n()?void 0:dt=>ct(dt.event||dt)),Me=y(()=>n()?void 0:dt=>Re(dt.event||dt)),Ye=y(()=>n()?void 0:Ot),kt=y(()=>n()?void 0:Ft),ge=y(()=>n()?void 0:as),Be=y(()=>n()?null:["Delete","Backspace"]),et=y(()=>n()?null:["Shift"]),Xe=y(()=>n()?null:["Shift","Meta","Control"]),Ze=y(()=>!n()),Je=y(()=>!n()),ot=y(()=>!n()),rs=y(()=>!n()),ls=y(()=>!n()),Pa=y(()=>!n()),on=y(()=>!n()),an=y(()=>!n()),Ma=y(()=>!n()),Aa=y(()=>!n()),Ps=y(()=>!n());C2(Na,nl({get nodeTypes(){return N},get edgeTypes(){return L},get onconnect(){return l(R)},get onnodedragstart(){return l(ne)},get onnodedrag(){return l(J)},get onnodedragstop(){return l(ae)},get ondelete(){return l(fe)},get onselectionchange(){return l(De)},get ondrop(){return l(Ke)},get ondragover(){return l(Me)},get onnodecontextmenu(){return l(Ye)},get onedgecontextmenu(){return l(kt)},get onpanecontextmenu(){return l(ge)},nodeOrigin:[.5,.5]},()=>({snapToGrid:!0,snapGrid:YT}),{get deleteKeyCode(){return l(Be)},get selectionKeyCode(){return l(et)},get multiSelectionKeyCode(){return l(Xe)},get colorMode(){return l(s)},get connectOnClick(){return l(Ze)},get nodesDraggable(){return l(Je)},get nodesConnectable(){return l(ot)},get elementsSelectable(){return l(rs)},get edgesReconnectable(){return l(ls)},get edgesFocusable(){return l(Pa)},get edgesSelectable(){return l(on)},get panOnDrag(){return l(an)},get zoomOnScroll(){return l(Ma)},get zoomOnPinch(){return l(Aa)},get preventScrolling(){return l(Ps)},get fitView(){return n()},zoomOnDoubleClick:!1,elevateEdgesOnSelect:!1,proOptions:{hideAttribution:!0},get nodes(){return l(M)},set nodes(dt){H(M,dt,!0)},get edges(){return l(w)},set edges(dt){H(w,dt,!0)},children:(dt,rn)=>{var Ms=b3(),cs=j(Ms);o3(cs,{get pendingUpdates(){return l(f)},onUpdatesProcessed:D,get embedded(){return n()}});var Da=ye(cs,2);R2(Da,{get variant(){return Pn.Dots},get gap(){return XT},size:1}),_(dt,Ms)},$$slots:{default:!0}}))}ce(gt),tn(gt,R=>it=R,()=>it),Et("dragover",gt,function(...R){(n()?void 0:Re)?.apply(this,R)}),Et("dragenter",gt,function(...R){(n()?void 0:Te)?.apply(this,R)}),Et("dragleave",gt,function(...R){(n()?void 0:Ve)?.apply(this,R)}),_(e,gt),Pe()}zn(["dblclick","mousemove"]);function OA(e,t){const n=()=>Gm.toggle();if(!document.startViewTransition){n();return}let s,i;if(e)s=e.clientX,i=e.clientY;else if(t){const r=t.getBoundingClientRect();s=r.left+r.width/2,i=r.top+r.height/2}else{n();return}const o=Math.hypot(Math.max(s,innerWidth-s),Math.max(i,innerHeight-i));document.startViewTransition(n).ready.then(()=>{document.documentElement.animate({clipPath:[`circle(0px at ${s}px ${i}px)`,`circle(${o}px at ${s}px ${i}px)`]},{duration:500,easing:"ease-out",pseudoElement:"::view-transition-new(root)"})})}export{Tl as $,Fm as A,Sh as B,va as C,P3 as D,MM as E,DA as F,A3 as G,J3 as H,Gc as I,NS as J,j3 as K,G3 as L,Dt as M,gA as N,M3 as O,$3 as P,K3 as Q,iA as R,tA as S,Z3 as T,We as U,le as V,IS as W,Cs as X,st as Y,Od as Z,Qh as _,wr as a,bA as a$,kr as a0,Mm as a1,zm as a2,eM as a3,LM as a4,At as a5,vA as a6,Ih as a7,D3 as a8,Qa as a9,Qu as aA,SM as aB,IM as aC,hA as aD,pA as aE,Gp as aF,Dm as aG,N3 as aH,TM as aI,fr as aJ,Tt as aK,ES as aL,tt as aM,cA as aN,ps as aO,yp as aP,kn as aQ,B3 as aR,ut as aS,IC as aT,nS as aU,NA as aV,yA as aW,FI as aX,dA as aY,aT as aZ,qI as a_,_h as aa,pP as ab,kl as ac,Fe as ad,Ju as ae,vb as af,wc as ag,wm as ah,Mt as ai,uA as aj,lA as ak,rA as al,X3 as am,U3 as an,Fd as ao,Zo as ap,tS as aq,U2 as ar,G2 as as,rm as at,Q3 as au,Y3 as av,$a as aw,Ha as ax,$T as ay,_d as az,PA as b,bp as b0,mT as b1,vp as b2,fT as b3,hT as b4,H3 as b5,Hm as b6,CA as b7,B2 as b8,O3 as b9,Oh as ba,Yh as bb,IA as bc,e3 as bd,nA as be,EA as bf,eA as bg,fm as bh,kA as bi,xr as bj,TA as bk,SA as bl,$M as bm,xA as bn,q2 as bo,F2 as bp,L3 as bq,R3 as br,V3 as bs,oA as bt,PS as bu,F3 as bv,z3 as bw,sA as bx,W3 as by,q3 as bz,vt as c,Vc as d,OA as e,_t as f,_A as g,cf as h,$e as i,fA as j,wA as k,QM as l,Wd as m,CM as n,MA as o,mA as p,es as q,AA as r,k as s,Gm as t,nd as u,bT as v,Qe as w,mn as x,sd as y,aA as z};
