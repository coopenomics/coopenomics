const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomePage-CVtqI5my.js","assets/HomePage-CBVpyQ9J.css","assets/ProcessPage-osqO5PVK.js","assets/ProcessPage-D8FxSXcQ.css"])))=>i.map(i=>d[i]);
(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Xs(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const ie={},st=[],un=()=>{},qo=()=>!1,Pr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),xr=e=>e.startsWith("onUpdate:"),Se=Object.assign,Zs=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},il=Object.prototype.hasOwnProperty,X=(e,n)=>il.call(e,n),K=Array.isArray,it=e=>Xt(e)==="[object Map]",Ho=e=>Xt(e)==="[object Set]",Di=e=>Xt(e)==="[object Date]",q=e=>typeof e=="function",fe=e=>typeof e=="string",Ke=e=>typeof e=="symbol",Z=e=>e!==null&&typeof e=="object",Go=e=>(Z(e)||q(e))&&q(e.then)&&q(e.catch),zo=Object.prototype.toString,Xt=e=>zo.call(e),ol=e=>Xt(e).slice(8,-1),Wo=e=>Xt(e)==="[object Object]",Mr=e=>fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ct=Xs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Dr=e=>{const n=Object.create(null);return(t=>n[t]||(n[t]=e(t)))},al=/-\w/g,Me=Dr(e=>e.replace(al,n=>n.slice(1).toUpperCase())),cl=/\B([A-Z])/g,Gn=Dr(e=>e.replace(cl,"-$1").toLowerCase()),$r=Dr(e=>e.charAt(0).toUpperCase()+e.slice(1)),as=Dr(e=>e?`on${$r(e)}`:""),We=(e,n)=>!Object.is(e,n),cs=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},Yo=(e,n,t,r=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:r,value:t})},ll=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let $i;const jr=()=>$i||($i=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ei(e){if(K(e)){const n={};for(let t=0;t<e.length;t++){const r=e[t],s=fe(r)?dl(r):ei(r);if(s)for(const i in s)n[i]=s[i]}return n}else if(fe(e)||Z(e))return e}const ul=/;(?![^(]*\))/g,fl=/:([^]+)/,pl=/\/\*[^]*?\*\//g;function dl(e){const n={};return e.replace(pl,"").split(ul).forEach(t=>{if(t){const r=t.split(fl);r.length>1&&(n[r[0].trim()]=r[1].trim())}}),n}function Br(e){let n="";if(fe(e))n=e;else if(K(e))for(let t=0;t<e.length;t++){const r=Br(e[t]);r&&(n+=r+" ")}else if(Z(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const hl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ml=Xs(hl);function Jo(e){return!!e||e===""}function gl(e,n){if(e.length!==n.length)return!1;let t=!0;for(let r=0;t&&r<e.length;r++)t=ni(e[r],n[r]);return t}function ni(e,n){if(e===n)return!0;let t=Di(e),r=Di(n);if(t||r)return t&&r?e.getTime()===n.getTime():!1;if(t=Ke(e),r=Ke(n),t||r)return e===n;if(t=K(e),r=K(n),t||r)return t&&r?gl(e,n):!1;if(t=Z(e),r=Z(n),t||r){if(!t||!r)return!1;const s=Object.keys(e).length,i=Object.keys(n).length;if(s!==i)return!1;for(const o in e){const a=e.hasOwnProperty(o),c=n.hasOwnProperty(o);if(a&&!c||!a&&c||!ni(e[o],n[o]))return!1}}return String(e)===String(n)}const Qo=e=>!!(e&&e.__v_isRef===!0),Lt=e=>fe(e)?e:e==null?"":K(e)||Z(e)&&(e.toString===zo||!q(e.toString))?Qo(e)?Lt(e.value):JSON.stringify(e,Xo,2):String(e),Xo=(e,n)=>Qo(n)?Xo(e,n.value):it(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[r,s],i)=>(t[ls(r,i)+" =>"]=s,t),{})}:Ho(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>ls(t))}:Ke(n)?ls(n):Z(n)&&!K(n)&&!Wo(n)?String(n):n,ls=(e,n="")=>{var t;return Ke(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};/**
* @vue/reactivity v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ee;class Zo{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Ee,!n&&Ee&&(this.index=(Ee.scopes||(Ee.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].pause();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].resume();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].resume()}}run(n){if(this._active){const t=Ee;try{return Ee=this,n()}finally{Ee=t}}}on(){++this._on===1&&(this.prevScope=Ee,Ee=this)}off(){this._on>0&&--this._on===0&&(Ee=this.prevScope,this.prevScope=void 0)}stop(n){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Gh(e){return new Zo(e)}function _l(){return Ee}function zh(e,n=!1){Ee&&Ee.cleanups.push(e)}let se;const us=new WeakSet;class ea{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ee&&Ee.active&&Ee.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,us.has(this)&&(us.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ta(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ji(this),ra(this);const n=se,t=Ye;se=this,Ye=!0;try{return this.fn()}finally{sa(this),se=n,Ye=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)si(n);this.deps=this.depsTail=void 0,ji(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?us.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Rs(this)&&this.run()}get dirty(){return Rs(this)}}let na=0,Pt,xt;function ta(e,n=!1){if(e.flags|=8,n){e.next=xt,xt=e;return}e.next=Pt,Pt=e}function ti(){na++}function ri(){if(--na>0)return;if(xt){let n=xt;for(xt=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;Pt;){let n=Pt;for(Pt=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(r){e||(e=r)}n=t}}if(e)throw e}function ra(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function sa(e){let n,t=e.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),si(r),yl(r)):n=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=n,e.depsTail=t}function Rs(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(ia(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function ia(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Kt)||(e.globalVersion=Kt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Rs(e))))return;e.flags|=2;const n=e.dep,t=se,r=Ye;se=e,Ye=!0;try{ra(e);const s=e.fn(e._value);(n.version===0||We(s,e._value))&&(e.flags|=128,e._value=s,n.version++)}catch(s){throw n.version++,s}finally{se=t,Ye=r,sa(e),e.flags&=-3}}function si(e,n=!1){const{dep:t,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),t.subs===e&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)si(i,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function yl(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let Ye=!0;const oa=[];function vn(){oa.push(Ye),Ye=!1}function kn(){const e=oa.pop();Ye=e===void 0?!0:e}function ji(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=se;se=void 0;try{n()}finally{se=t}}}let Kt=0;class bl{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Fr{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!se||!Ye||se===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==se)t=this.activeLink=new bl(se,this),se.deps?(t.prevDep=se.depsTail,se.depsTail.nextDep=t,se.depsTail=t):se.deps=se.depsTail=t,aa(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=se.depsTail,t.nextDep=void 0,se.depsTail.nextDep=t,se.depsTail=t,se.deps===t&&(se.deps=r)}return t}trigger(n){this.version++,Kt++,this.notify(n)}notify(n){ti();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ri()}}}function aa(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let r=n.deps;r;r=r.nextDep)aa(r)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const kr=new WeakMap,Vn=Symbol(""),Is=Symbol(""),Vt=Symbol("");function Ae(e,n,t){if(Ye&&se){let r=kr.get(e);r||kr.set(e,r=new Map);let s=r.get(t);s||(r.set(t,s=new Fr),s.map=r,s.key=t),s.track()}}function yn(e,n,t,r,s,i){const o=kr.get(e);if(!o){Kt++;return}const a=c=>{c&&c.trigger()};if(ti(),n==="clear")o.forEach(a);else{const c=K(e),l=c&&Mr(t);if(c&&t==="length"){const u=Number(r);o.forEach((f,p)=>{(p==="length"||p===Vt||!Ke(p)&&p>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),l&&a(o.get(Vt)),n){case"add":c?l&&a(o.get("length")):(a(o.get(Vn)),it(e)&&a(o.get(Is)));break;case"delete":c||(a(o.get(Vn)),it(e)&&a(o.get(Is)));break;case"set":it(e)&&a(o.get(Vn));break}}ri()}function wl(e,n){const t=kr.get(e);return t&&t.get(n)}function Jn(e){const n=Y(e);return n===e?n:(Ae(n,"iterate",Vt),Ue(e)?n:n.map(Qe))}function Ur(e){return Ae(e=Y(e),"iterate",Vt),e}function cn(e,n){return Sn(e)?ft(qn(e)?Qe(n):n):Qe(n)}const vl={__proto__:null,[Symbol.iterator](){return fs(this,Symbol.iterator,e=>cn(this,e))},concat(...e){return Jn(this).concat(...e.map(n=>K(n)?Jn(n):n))},entries(){return fs(this,"entries",e=>(e[1]=cn(this,e[1]),e))},every(e,n){return hn(this,"every",e,n,void 0,arguments)},filter(e,n){return hn(this,"filter",e,n,t=>t.map(r=>cn(this,r)),arguments)},find(e,n){return hn(this,"find",e,n,t=>cn(this,t),arguments)},findIndex(e,n){return hn(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return hn(this,"findLast",e,n,t=>cn(this,t),arguments)},findLastIndex(e,n){return hn(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return hn(this,"forEach",e,n,void 0,arguments)},includes(...e){return ps(this,"includes",e)},indexOf(...e){return ps(this,"indexOf",e)},join(e){return Jn(this).join(e)},lastIndexOf(...e){return ps(this,"lastIndexOf",e)},map(e,n){return hn(this,"map",e,n,void 0,arguments)},pop(){return Et(this,"pop")},push(...e){return Et(this,"push",e)},reduce(e,...n){return Bi(this,"reduce",e,n)},reduceRight(e,...n){return Bi(this,"reduceRight",e,n)},shift(){return Et(this,"shift")},some(e,n){return hn(this,"some",e,n,void 0,arguments)},splice(...e){return Et(this,"splice",e)},toReversed(){return Jn(this).toReversed()},toSorted(e){return Jn(this).toSorted(e)},toSpliced(...e){return Jn(this).toSpliced(...e)},unshift(...e){return Et(this,"unshift",e)},values(){return fs(this,"values",e=>cn(this,e))}};function fs(e,n,t){const r=Ur(e),s=r[n]();return r!==e&&!Ue(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=t(i.value)),i}),s}const kl=Array.prototype;function hn(e,n,t,r,s,i){const o=Ur(e),a=o!==e&&!Ue(e),c=o[n];if(c!==kl[n]){const f=c.apply(e,i);return a?Qe(f):f}let l=t;o!==e&&(a?l=function(f,p){return t.call(this,cn(e,f),p,e)}:t.length>2&&(l=function(f,p){return t.call(this,f,p,e)}));const u=c.call(o,l,r);return a&&s?s(u):u}function Bi(e,n,t,r){const s=Ur(e),i=s!==e&&!Ue(e);let o=t,a=!1;s!==e&&(i?(a=r.length===0,o=function(l,u,f){return a&&(a=!1,l=cn(e,l)),t.call(this,l,cn(e,u),f,e)}):t.length>3&&(o=function(l,u,f){return t.call(this,l,u,f,e)}));const c=s[n](o,...r);return a?cn(e,c):c}function ps(e,n,t){const r=Y(e);Ae(r,"iterate",Vt);const s=r[n](...t);return(s===-1||s===!1)&&Vr(t[0])?(t[0]=Y(t[0]),r[n](...t)):s}function Et(e,n,t=[]){vn(),ti();const r=Y(e)[n].apply(e,t);return ri(),kn(),r}const Sl=Xs("__proto__,__v_isRef,__isVue"),ca=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ke));function El(e){Ke(e)||(e=String(e));const n=Y(this);return Ae(n,"has",e),n.hasOwnProperty(e)}class la{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,r){if(t==="__v_skip")return n.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?xl:da:i?pa:fa).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(r)?n:void 0;const o=K(n);if(!s){let c;if(o&&(c=vl[t]))return c;if(t==="hasOwnProperty")return El}const a=Reflect.get(n,t,_e(n)?n:r);if((Ke(t)?ca.has(t):Sl(t))||(s||Ae(n,"get",t),i))return a;if(_e(a)){const c=o&&Mr(t)?a:a.value;return s&&Z(c)?Ls(c):c}return Z(a)?s?Ls(a):Kr(a):a}}class ua extends la{constructor(n=!1){super(!1,n)}set(n,t,r,s){let i=n[t];const o=K(n)&&Mr(t);if(!this._isShallow){const l=Sn(i);if(!Ue(r)&&!Sn(r)&&(i=Y(i),r=Y(r)),!o&&_e(i)&&!_e(r))return l||(i.value=r),!0}const a=o?Number(t)<n.length:X(n,t),c=Reflect.set(n,t,r,_e(n)?n:s);return n===Y(s)&&(a?We(r,i)&&yn(n,"set",t,r):yn(n,"add",t,r)),c}deleteProperty(n,t){const r=X(n,t);n[t];const s=Reflect.deleteProperty(n,t);return s&&r&&yn(n,"delete",t,void 0),s}has(n,t){const r=Reflect.has(n,t);return(!Ke(t)||!ca.has(t))&&Ae(n,"has",t),r}ownKeys(n){return Ae(n,"iterate",K(n)?"length":Vn),Reflect.ownKeys(n)}}class Al extends la{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const Nl=new ua,Ol=new Al,Tl=new ua(!0);const Cs=e=>e,or=e=>Reflect.getPrototypeOf(e);function Rl(e,n,t){return function(...r){const s=this.__v_raw,i=Y(s),o=it(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=s[e](...r),u=t?Cs:n?ft:Qe;return!n&&Ae(i,"iterate",c?Is:Vn),Se(Object.create(l),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}}})}}function ar(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function Il(e,n){const t={get(s){const i=this.__v_raw,o=Y(i),a=Y(s);e||(We(s,a)&&Ae(o,"get",s),Ae(o,"get",a));const{has:c}=or(o),l=n?Cs:e?ft:Qe;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!e&&Ae(Y(s),"iterate",Vn),s.size},has(s){const i=this.__v_raw,o=Y(i),a=Y(s);return e||(We(s,a)&&Ae(o,"has",s),Ae(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=Y(a),l=n?Cs:e?ft:Qe;return!e&&Ae(c,"iterate",Vn),a.forEach((u,f)=>s.call(i,l(u),l(f),o))}};return Se(t,e?{add:ar("add"),set:ar("set"),delete:ar("delete"),clear:ar("clear")}:{add(s){const i=Y(this),o=or(i),a=Y(s),c=!n&&!Ue(s)&&!Sn(s)?a:s;return o.has.call(i,c)||We(s,c)&&o.has.call(i,s)||We(a,c)&&o.has.call(i,a)||(i.add(c),yn(i,"add",c,c)),this},set(s,i){!n&&!Ue(i)&&!Sn(i)&&(i=Y(i));const o=Y(this),{has:a,get:c}=or(o);let l=a.call(o,s);l||(s=Y(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,i),l?We(i,u)&&yn(o,"set",s,i):yn(o,"add",s,i),this},delete(s){const i=Y(this),{has:o,get:a}=or(i);let c=o.call(i,s);c||(s=Y(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&yn(i,"delete",s,void 0),l},clear(){const s=Y(this),i=s.size!==0,o=s.clear();return i&&yn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Rl(s,e,n)}),t}function ii(e,n){const t=Il(e,n);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(X(t,s)&&s in r?t:r,s,i)}const Cl={get:ii(!1,!1)},Ll={get:ii(!1,!0)},Pl={get:ii(!0,!1)};const fa=new WeakMap,pa=new WeakMap,da=new WeakMap,xl=new WeakMap;function Ml(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dl(e){return e.__v_skip||!Object.isExtensible(e)?0:Ml(ol(e))}function Kr(e){return Sn(e)?e:oi(e,!1,Nl,Cl,fa)}function ha(e){return oi(e,!1,Tl,Ll,pa)}function Ls(e){return oi(e,!0,Ol,Pl,da)}function oi(e,n,t,r,s){if(!Z(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const i=Dl(e);if(i===0)return e;const o=s.get(e);if(o)return o;const a=new Proxy(e,i===2?r:t);return s.set(e,a),a}function qn(e){return Sn(e)?qn(e.__v_raw):!!(e&&e.__v_isReactive)}function Sn(e){return!!(e&&e.__v_isReadonly)}function Ue(e){return!!(e&&e.__v_isShallow)}function Vr(e){return e?!!e.__v_raw:!1}function Y(e){const n=e&&e.__v_raw;return n?Y(n):e}function $l(e){return!X(e,"__v_skip")&&Object.isExtensible(e)&&Yo(e,"__v_skip",!0),e}const Qe=e=>Z(e)?Kr(e):e,ft=e=>Z(e)?Ls(e):e;function _e(e){return e?e.__v_isRef===!0:!1}function qr(e){return ma(e,!1)}function jl(e){return ma(e,!0)}function ma(e,n){return _e(e)?e:new Bl(e,n)}class Bl{constructor(n,t){this.dep=new Fr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:Y(n),this._value=t?n:Qe(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,r=this.__v_isShallow||Ue(n)||Sn(n);n=r?n:Y(n),We(n,t)&&(this._rawValue=n,this._value=r?n:Qe(n),this.dep.trigger())}}function we(e){return _e(e)?e.value:e}function Wh(e){return q(e)?e():we(e)}const Fl={get:(e,n,t)=>n==="__v_raw"?e:we(Reflect.get(e,n,t)),set:(e,n,t,r)=>{const s=e[n];return _e(s)&&!_e(t)?(s.value=t,!0):Reflect.set(e,n,t,r)}};function ga(e){return qn(e)?e:new Proxy(e,Fl)}class Ul{constructor(n){this.__v_isRef=!0,this._value=void 0;const t=this.dep=new Fr,{get:r,set:s}=n(t.track.bind(t),t.trigger.bind(t));this._get=r,this._set=s}get value(){return this._value=this._get()}set value(n){this._set(n)}}function Yh(e){return new Ul(e)}function Jh(e){const n=K(e)?new Array(e.length):{};for(const t in e)n[t]=_a(e,t);return n}class Kl{constructor(n,t,r){this._object=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._key=Ke(t)?t:String(t),this._raw=Y(n);let s=!0,i=n;if(!K(n)||Ke(this._key)||!Mr(this._key))do s=!Vr(i)||Ue(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let n=this._object[this._key];return this._shallow&&(n=we(n)),this._value=n===void 0?this._defaultValue:n}set value(n){if(this._shallow&&_e(this._raw[this._key])){const t=this._object[this._key];if(_e(t)){t.value=n;return}}this._object[this._key]=n}get dep(){return wl(this._raw,this._key)}}class Vl{constructor(n){this._getter=n,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Qh(e,n,t){return _e(e)?e:q(e)?new Vl(e):Z(e)&&arguments.length>1?_a(e,n,t):qr(e)}function _a(e,n,t){return new Kl(e,n,t)}class ql{constructor(n,t,r){this.fn=n,this.setter=t,this._value=void 0,this.dep=new Fr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Kt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&se!==this)return ta(this,!0),!0}get value(){const n=this.dep.track();return ia(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function Hl(e,n,t=!1){let r,s;return q(e)?r=e:(r=e.get,s=e.set),new ql(r,s,t)}const cr={},Sr=new WeakMap;let jn;function Gl(e,n=!1,t=jn){if(t){let r=Sr.get(t);r||Sr.set(t,r=[]),r.push(e)}}function zl(e,n,t=ie){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=t,l=N=>s?N:Ue(N)||s===!1||s===0?Ln(N,1):Ln(N);let u,f,p,d,b=!1,g=!1;if(_e(e)?(f=()=>e.value,b=Ue(e)):qn(e)?(f=()=>l(e),b=!0):K(e)?(g=!0,b=e.some(N=>qn(N)||Ue(N)),f=()=>e.map(N=>{if(_e(N))return N.value;if(qn(N))return l(N);if(q(N))return c?c(N,2):N()})):q(e)?n?f=c?()=>c(e,2):e:f=()=>{if(p){vn();try{p()}finally{kn()}}const N=jn;jn=u;try{return c?c(e,3,[d]):e(d)}finally{jn=N}}:f=un,n&&s){const N=f,L=s===!0?1/0:s;f=()=>Ln(N(),L)}const y=_l(),v=()=>{u.stop(),y&&y.active&&Zs(y.effects,u)};if(i&&n){const N=n;n=(...L)=>{N(...L),v()}}let w=g?new Array(e.length).fill(cr):cr;const O=N=>{if(!(!(u.flags&1)||!u.dirty&&!N))if(n){const L=u.run();if(s||b||(g?L.some((U,M)=>We(U,w[M])):We(L,w))){p&&p();const U=jn;jn=u;try{const M=[L,w===cr?void 0:g&&w[0]===cr?[]:w,d];w=L,c?c(n,3,M):n(...M)}finally{jn=U}}}else u.run()};return a&&a(O),u=new ea(f),u.scheduler=o?()=>o(O,!1):O,d=N=>Gl(N,!1,u),p=u.onStop=()=>{const N=Sr.get(u);if(N){if(c)c(N,4);else for(const L of N)L();Sr.delete(u)}},n?r?O(!0):w=u.run():o?o(O.bind(null,!0),!0):u.run(),v.pause=u.pause.bind(u),v.resume=u.resume.bind(u),v.stop=v,v}function Ln(e,n=1/0,t){if(n<=0||!Z(e)||e.__v_skip||(t=t||new Map,(t.get(e)||0)>=n))return e;if(t.set(e,n),n--,_e(e))Ln(e.value,n,t);else if(K(e))for(let r=0;r<e.length;r++)Ln(e[r],n,t);else if(Ho(e)||it(e))e.forEach(r=>{Ln(r,n,t)});else if(Wo(e)){for(const r in e)Ln(e[r],n,t);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Ln(e[r],n,t)}return e}/**
* @vue/runtime-core v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zt(e,n,t,r){try{return r?e(...r):e()}catch(s){Hr(s,n,t)}}function fn(e,n,t,r){if(q(e)){const s=Zt(e,n,t,r);return s&&Go(s)&&s.catch(i=>{Hr(i,n,t)}),s}if(K(e)){const s=[];for(let i=0;i<e.length;i++)s.push(fn(e[i],n,t,r));return s}}function Hr(e,n,t,r=!0){const s=n?n.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=n&&n.appContext.config||ie;if(n){let a=n.parent;const c=n.proxy,l=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,c,l)===!1)return}a=a.parent}if(i){vn(),Zt(i,null,10,[e,c,l]),kn();return}}Wl(e,t,s,r,o)}function Wl(e,n,t,r=!0,s=!1){if(s)throw e;console.error(e)}const Ce=[];let on=-1;const ot=[];let Rn=null,Zn=0;const ya=Promise.resolve();let Er=null;function ba(e){const n=Er||ya;return e?n.then(this?e.bind(this):e):n}function Yl(e){let n=on+1,t=Ce.length;for(;n<t;){const r=n+t>>>1,s=Ce[r],i=qt(s);i<e||i===e&&s.flags&2?n=r+1:t=r}return n}function ai(e){if(!(e.flags&1)){const n=qt(e),t=Ce[Ce.length-1];!t||!(e.flags&2)&&n>=qt(t)?Ce.push(e):Ce.splice(Yl(n),0,e),e.flags|=1,wa()}}function wa(){Er||(Er=ya.then(ka))}function Jl(e){K(e)?ot.push(...e):Rn&&e.id===-1?Rn.splice(Zn+1,0,e):e.flags&1||(ot.push(e),e.flags|=1),wa()}function Fi(e,n,t=on+1){for(;t<Ce.length;t++){const r=Ce[t];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Ce.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function va(e){if(ot.length){const n=[...new Set(ot)].sort((t,r)=>qt(t)-qt(r));if(ot.length=0,Rn){Rn.push(...n);return}for(Rn=n,Zn=0;Zn<Rn.length;Zn++){const t=Rn[Zn];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Rn=null,Zn=0}}const qt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ka(e){try{for(on=0;on<Ce.length;on++){const n=Ce[on];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Zt(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;on<Ce.length;on++){const n=Ce[on];n&&(n.flags&=-2)}on=-1,Ce.length=0,va(),Er=null,(Ce.length||ot.length)&&ka()}}let Pe=null,Sa=null;function Ar(e){const n=Pe;return Pe=e,Sa=e&&e.type.__scopeId||null,n}function Ps(e,n=Pe,t){if(!n||e._n)return e;const r=(...s)=>{r._d&&Tr(-1);const i=Ar(n);let o;try{o=e(...s)}finally{Ar(i),r._d&&Tr(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Dn(e,n,t,r){const s=e.dirs,i=n&&n.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(vn(),fn(c,t,8,[e.el,a,e,n]),kn())}}function mr(e,n){if(Ne){let t=Ne.provides;const r=Ne.parent&&Ne.parent.provides;r===t&&(t=Ne.provides=Object.create(r)),t[e]=n}}function Je(e,n,t=!1){const r=ec();if(r||ct){let s=ct?ct._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return t&&q(n)?n.call(r&&r.proxy):n}}const Ql=Symbol.for("v-scx"),Xl=()=>Je(Ql);function Mt(e,n,t){return Ea(e,n,t)}function Ea(e,n,t=ie){const{immediate:r,deep:s,flush:i,once:o}=t,a=Se({},t),c=n&&r||!n&&i!=="post";let l;if(zt){if(i==="sync"){const d=Xl();l=d.__watcherHandles||(d.__watcherHandles=[])}else if(!c){const d=()=>{};return d.stop=un,d.resume=un,d.pause=un,d}}const u=Ne;a.call=(d,b,g)=>fn(d,u,b,g);let f=!1;i==="post"?a.scheduler=d=>{je(d,u&&u.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(d,b)=>{b?d():ai(d)}),a.augmentJob=d=>{n&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const p=zl(e,n,a);return zt&&(l?l.push(p):c&&p()),p}function Zl(e,n,t){const r=this.proxy,s=fe(e)?e.includes(".")?Aa(r,e):()=>r[e]:e.bind(r,r);let i;q(n)?i=n:(i=n.handler,t=n);const o=nr(this),a=Ea(s,i.bind(r),t);return o(),a}function Aa(e,n){const t=n.split(".");return()=>{let r=e;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const eu=Symbol("_vte"),nu=e=>e.__isTeleport,tu=Symbol("_leaveCb");function ci(e,n){e.shapeFlag&6&&e.component?(e.transition=n,ci(e.component.subTree,n)):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function er(e,n){return q(e)?Se({name:e.name},n,{setup:e}):e}function Na(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Ui(e,n){let t;return!!((t=Object.getOwnPropertyDescriptor(e,n))&&!t.configurable)}const Nr=new WeakMap;function Dt(e,n,t,r,s=!1){if(K(e)){e.forEach((g,y)=>Dt(g,n&&(K(n)?n[y]:n),t,r,s));return}if(at(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Dt(e,n,t,r.component.subTree);return}const i=r.shapeFlag&4?hi(r.component):r.el,o=s?null:i,{i:a,r:c}=e,l=n&&n.r,u=a.refs===ie?a.refs={}:a.refs,f=a.setupState,p=Y(f),d=f===ie?qo:g=>Ui(u,g)?!1:X(p,g),b=(g,y)=>!(y&&Ui(u,y));if(l!=null&&l!==c){if(Ki(n),fe(l))u[l]=null,d(l)&&(f[l]=null);else if(_e(l)){const g=n;b(l,g.k)&&(l.value=null),g.k&&(u[g.k]=null)}}if(q(c))Zt(c,a,12,[o,u]);else{const g=fe(c),y=_e(c);if(g||y){const v=()=>{if(e.f){const w=g?d(c)?f[c]:u[c]:b()||!e.k?c.value:u[e.k];if(s)K(w)&&Zs(w,i);else if(K(w))w.includes(i)||w.push(i);else if(g)u[c]=[i],d(c)&&(f[c]=u[c]);else{const O=[i];b(c,e.k)&&(c.value=O),e.k&&(u[e.k]=O)}}else g?(u[c]=o,d(c)&&(f[c]=o)):y&&(b(c,e.k)&&(c.value=o),e.k&&(u[e.k]=o))};if(o){const w=()=>{v(),Nr.delete(e)};w.id=-1,Nr.set(e,w),je(w,t)}else Ki(e),v()}}}function Ki(e){const n=Nr.get(e);n&&(n.flags|=8,Nr.delete(e))}jr().requestIdleCallback;jr().cancelIdleCallback;const at=e=>!!e.type.__asyncLoader,Oa=e=>e.type.__isKeepAlive;function ru(e,n){Ta(e,"a",n)}function su(e,n){Ta(e,"da",n)}function Ta(e,n,t=Ne){const r=e.__wdc||(e.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Gr(n,r,t),t){let s=t.parent;for(;s&&s.parent;)Oa(s.parent.vnode)&&iu(r,n,t,s),s=s.parent}}function iu(e,n,t,r){const s=Gr(n,e,r,!0);Ra(()=>{Zs(r[n],s)},t)}function Gr(e,n,t=Ne,r=!1){if(t){const s=t[e]||(t[e]=[]),i=n.__weh||(n.__weh=(...o)=>{vn();const a=nr(t),c=fn(n,t,e,o);return a(),kn(),c});return r?s.unshift(i):s.push(i),i}}const An=e=>(n,t=Ne)=>{(!zt||e==="sp")&&Gr(e,(...r)=>n(...r),t)},ou=An("bm"),li=An("m"),au=An("bu"),cu=An("u"),ui=An("bum"),Ra=An("um"),lu=An("sp"),uu=An("rtg"),fu=An("rtc");function pu(e,n=Ne){Gr("ec",e,n)}const Ia="components";function du(e,n){return La(Ia,e,!0,n)||e}const Ca=Symbol.for("v-ndc");function Xh(e){return fe(e)?La(Ia,e,!1)||e:e||Ca}function La(e,n,t=!0,r=!1){const s=Pe||Ne;if(s){const i=s.type;{const a=Ju(i,!1);if(a&&(a===n||a===Me(n)||a===$r(Me(n))))return i}const o=Vi(s[e]||i[e],n)||Vi(s.appContext[e],n);return!o&&r?i:o}}function Vi(e,n){return e&&(e[n]||e[Me(n)]||e[$r(Me(n))])}function qi(e,n,t,r){let s;const i=t&&t[r],o=K(e);if(o||fe(e)){const a=o&&qn(e);let c=!1,l=!1;a&&(c=!Ue(e),l=Sn(e),e=Ur(e)),s=new Array(e.length);for(let u=0,f=e.length;u<f;u++)s[u]=n(c?l?ft(Qe(e[u])):Qe(e[u]):e[u],u,void 0,i&&i[u])}else if(typeof e=="number"){s=new Array(e);for(let a=0;a<e;a++)s[a]=n(a+1,a,void 0,i&&i[a])}else if(Z(e))if(e[Symbol.iterator])s=Array.from(e,(a,c)=>n(a,c,void 0,i&&i[c]));else{const a=Object.keys(e);s=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];s[c]=n(e[u],u,c,i&&i[c])}}else s=[];return t&&(t[r]=s),s}function Zh(e,n,t={},r,s){if(Pe.ce||Pe.parent&&at(Pe.parent)&&Pe.parent.ce){const l=Object.keys(t).length>0;return n!=="default"&&(t.name=n),Ie(),Ht(Be,null,[ge("slot",t,r&&r())],l?-2:64)}let i=e[n];i&&i._c&&(i._d=!1),Ie();const o=i&&Pa(i(t)),a=t.key||o&&o.key,c=Ht(Be,{key:(a&&!Ke(a)?a:`_${n}`)+(!o&&r?"_fb":"")},o||(r?r():[]),o&&e._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function Pa(e){return e.some(n=>Gt(n)?!(n.type===En||n.type===Be&&!Pa(n.children)):!0)?e:null}const xs=e=>e?nc(e)?hi(e):xs(e.parent):null,$t=Se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>xs(e.parent),$root:e=>xs(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Da(e),$forceUpdate:e=>e.f||(e.f=()=>{ai(e.update)}),$nextTick:e=>e.n||(e.n=ba.bind(e.proxy)),$watch:e=>Zl.bind(e)}),ds=(e,n)=>e!==ie&&!e.__isScriptSetup&&X(e,n),hu={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;if(n[0]!=="$"){const p=o[n];if(p!==void 0)switch(p){case 1:return r[n];case 2:return s[n];case 4:return t[n];case 3:return i[n]}else{if(ds(r,n))return o[n]=1,r[n];if(s!==ie&&X(s,n))return o[n]=2,s[n];if(X(i,n))return o[n]=3,i[n];if(t!==ie&&X(t,n))return o[n]=4,t[n];Ms&&(o[n]=0)}}const l=$t[n];let u,f;if(l)return n==="$attrs"&&Ae(e.attrs,"get",""),l(e);if((u=a.__cssModules)&&(u=u[n]))return u;if(t!==ie&&X(t,n))return o[n]=4,t[n];if(f=c.config.globalProperties,X(f,n))return f[n]},set({_:e},n,t){const{data:r,setupState:s,ctx:i}=e;return ds(s,n)?(s[n]=t,!0):r!==ie&&X(r,n)?(r[n]=t,!0):X(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(i[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:r,appContext:s,props:i,type:o}},a){let c;return!!(t[a]||e!==ie&&a[0]!=="$"&&X(e,a)||ds(n,a)||X(i,a)||X(r,a)||X($t,a)||X(s.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:X(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function em(){return xa().slots}function nm(){return xa().attrs}function xa(e){const n=ec();return n.setupContext||(n.setupContext=rc(n))}function Hi(e){return K(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}function tm(e,n){const t={};for(const r in e)n.includes(r)||Object.defineProperty(t,r,{enumerable:!0,get:()=>e[r]});return t}let Ms=!0;function mu(e){const n=Da(e),t=e.proxy,r=e.ctx;Ms=!1,n.beforeCreate&&Gi(n.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:d,updated:b,activated:g,deactivated:y,beforeDestroy:v,beforeUnmount:w,destroyed:O,unmounted:N,render:L,renderTracked:U,renderTriggered:M,errorCaptured:$,serverPrefetch:G,expose:te,inheritAttrs:ye,components:he,directives:ae,filters:Nn}=n;if(l&&gu(l,r,null),o)for(const ee in o){const J=o[ee];q(J)&&(r[ee]=J.bind(t))}if(s){const ee=s.call(t,t);Z(ee)&&(e.data=Kr(ee))}if(Ms=!0,i)for(const ee in i){const J=i[ee],dn=q(J)?J.bind(t,t):q(J.get)?J.get.bind(t,t):un,On=!q(J)&&q(J.set)?J.set.bind(t):un,en=Le({get:dn,set:On});Object.defineProperty(r,ee,{enumerable:!0,configurable:!0,get:()=>en.value,set:$e=>en.value=$e})}if(a)for(const ee in a)Ma(a[ee],r,t,ee);if(c){const ee=q(c)?c.call(t):c;Reflect.ownKeys(ee).forEach(J=>{mr(J,ee[J])})}u&&Gi(u,e,"c");function be(ee,J){K(J)?J.forEach(dn=>ee(dn.bind(t))):J&&ee(J.bind(t))}if(be(ou,f),be(li,p),be(au,d),be(cu,b),be(ru,g),be(su,y),be(pu,$),be(fu,U),be(uu,M),be(ui,w),be(Ra,N),be(lu,G),K(te))if(te.length){const ee=e.exposed||(e.exposed={});te.forEach(J=>{Object.defineProperty(ee,J,{get:()=>t[J],set:dn=>t[J]=dn,enumerable:!0})})}else e.exposed||(e.exposed={});L&&e.render===un&&(e.render=L),ye!=null&&(e.inheritAttrs=ye),he&&(e.components=he),ae&&(e.directives=ae),G&&Na(e)}function gu(e,n,t=un){K(e)&&(e=Ds(e));for(const r in e){const s=e[r];let i;Z(s)?"default"in s?i=Je(s.from||r,s.default,!0):i=Je(s.from||r):i=Je(s),_e(i)?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):n[r]=i}}function Gi(e,n,t){fn(K(e)?e.map(r=>r.bind(n.proxy)):e.bind(n.proxy),n,t)}function Ma(e,n,t,r){let s=r.includes(".")?Aa(t,r):()=>t[r];if(fe(e)){const i=n[e];q(i)&&Mt(s,i)}else if(q(e))Mt(s,e.bind(t));else if(Z(e))if(K(e))e.forEach(i=>Ma(i,n,t,r));else{const i=q(e.handler)?e.handler.bind(t):n[e.handler];q(i)&&Mt(s,i,e)}}function Da(e){const n=e.type,{mixins:t,extends:r}=n,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(n);let c;return a?c=a:!s.length&&!t&&!r?c=n:(c={},s.length&&s.forEach(l=>Or(c,l,o,!0)),Or(c,n,o)),Z(n)&&i.set(n,c),c}function Or(e,n,t,r=!1){const{mixins:s,extends:i}=n;i&&Or(e,i,t,!0),s&&s.forEach(o=>Or(e,o,t,!0));for(const o in n)if(!(r&&o==="expose")){const a=_u[o]||t&&t[o];e[o]=a?a(e[o],n[o]):n[o]}return e}const _u={data:zi,props:Wi,emits:Wi,methods:Tt,computed:Tt,beforeCreate:Oe,created:Oe,beforeMount:Oe,mounted:Oe,beforeUpdate:Oe,updated:Oe,beforeDestroy:Oe,beforeUnmount:Oe,destroyed:Oe,unmounted:Oe,activated:Oe,deactivated:Oe,errorCaptured:Oe,serverPrefetch:Oe,components:Tt,directives:Tt,watch:bu,provide:zi,inject:yu};function zi(e,n){return n?e?function(){return Se(q(e)?e.call(this,this):e,q(n)?n.call(this,this):n)}:n:e}function yu(e,n){return Tt(Ds(e),Ds(n))}function Ds(e){if(K(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function Oe(e,n){return e?[...new Set([].concat(e,n))]:n}function Tt(e,n){return e?Se(Object.create(null),e,n):n}function Wi(e,n){return e?K(e)&&K(n)?[...new Set([...e,...n])]:Se(Object.create(null),Hi(e),Hi(n??{})):n}function bu(e,n){if(!e)return n;if(!n)return e;const t=Se(Object.create(null),e);for(const r in n)t[r]=Oe(e[r],n[r]);return t}function $a(){return{app:null,config:{isNativeTag:qo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wu=0;function vu(e,n){return function(r,s=null){q(r)||(r=Se({},r)),s!=null&&!Z(s)&&(s=null);const i=$a(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:wu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Xu,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&q(u.install)?(o.add(u),u.install(l,...f)):q(u)&&(o.add(u),u(l,...f))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,f){return f?(i.components[u]=f,l):i.components[u]},directive(u,f){return f?(i.directives[u]=f,l):i.directives[u]},mount(u,f,p){if(!c){const d=l._ceVNode||ge(r,s);return d.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),e(d,u,p),c=!0,l._container=u,u.__vue_app__=l,hi(d.component)}},onUnmount(u){a.push(u)},unmount(){c&&(fn(a,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(u,f){return i.provides[u]=f,l},runWithContext(u){const f=ct;ct=l;try{return u()}finally{ct=f}}};return l}}let ct=null;const ku=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${Me(n)}Modifiers`]||e[`${Gn(n)}Modifiers`];function Su(e,n,...t){if(e.isUnmounted)return;const r=e.vnode.props||ie;let s=t;const i=n.startsWith("update:"),o=i&&ku(r,n.slice(7));o&&(o.trim&&(s=t.map(u=>fe(u)?u.trim():u)),o.number&&(s=t.map(ll)));let a,c=r[a=as(n)]||r[a=as(Me(n))];!c&&i&&(c=r[a=as(Gn(n))]),c&&fn(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,fn(l,e,6,s)}}const Eu=new WeakMap;function ja(e,n,t=!1){const r=t?Eu:n.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!q(e)){const c=l=>{const u=ja(l,n,!0);u&&(a=!0,Se(o,u))};!t&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(Z(e)&&r.set(e,null),null):(K(i)?i.forEach(c=>o[c]=null):Se(o,i),Z(e)&&r.set(e,o),o)}function zr(e,n){return!e||!Pr(n)?!1:(n=n.slice(2).replace(/Once$/,""),X(e,n[0].toLowerCase()+n.slice(1))||X(e,Gn(n))||X(e,n))}function Yi(e){const{type:n,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:p,setupState:d,ctx:b,inheritAttrs:g}=e,y=Ar(e);let v,w;try{if(t.shapeFlag&4){const N=s||r,L=N;v=ln(l.call(L,N,u,f,d,p,b)),w=a}else{const N=n;v=ln(N.length>1?N(f,{attrs:a,slots:o,emit:c}):N(f,null)),w=n.props?a:Au(a)}}catch(N){jt.length=0,Hr(N,e,1),v=ge(En)}let O=v;if(w&&g!==!1){const N=Object.keys(w),{shapeFlag:L}=O;N.length&&L&7&&(i&&N.some(xr)&&(w=Nu(w,i)),O=dt(O,w,!1,!0))}return t.dirs&&(O=dt(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(t.dirs):t.dirs),t.transition&&ci(O,t.transition),v=O,Ar(y),v}const Au=e=>{let n;for(const t in e)(t==="class"||t==="style"||Pr(t))&&((n||(n={}))[t]=e[t]);return n},Nu=(e,n)=>{const t={};for(const r in e)(!xr(r)||!(r.slice(9)in n))&&(t[r]=e[r]);return t};function Ou(e,n,t){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=n,l=i.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?Ji(r,o,l):!!o;if(c&8){const u=n.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(Ba(o,r,p)&&!zr(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ji(r,o,l):!0:!!o;return!1}function Ji(e,n,t){const r=Object.keys(n);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(Ba(n,e,i)&&!zr(t,i))return!0}return!1}function Ba(e,n,t){const r=e[t],s=n[t];return t==="style"&&Z(r)&&Z(s)?!ni(r,s):r!==s}function Tu({vnode:e,parent:n,suspense:t},r){for(;n;){const s=n.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=r,e=s),s===e)(e=n.vnode).el=r,n=n.parent;else break}t&&t.activeBranch===e&&(t.vnode.el=r)}const Fa={},Ua=()=>Object.create(Fa),Ka=e=>Object.getPrototypeOf(e)===Fa;function Ru(e,n,t,r=!1){const s={},i=Ua();e.propsDefaults=Object.create(null),Va(e,n,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);t?e.props=r?s:ha(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function Iu(e,n,t,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=Y(s),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(zr(e.emitsOptions,p))continue;const d=n[p];if(c)if(X(i,p))d!==i[p]&&(i[p]=d,l=!0);else{const b=Me(p);s[b]=$s(c,a,b,d,e,!1)}else d!==i[p]&&(i[p]=d,l=!0)}}}else{Va(e,n,s,i)&&(l=!0);let u;for(const f in a)(!n||!X(n,f)&&((u=Gn(f))===f||!X(n,u)))&&(c?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=$s(c,a,f,void 0,e,!0)):delete s[f]);if(i!==a)for(const f in i)(!n||!X(n,f))&&(delete i[f],l=!0)}l&&yn(e.attrs,"set","")}function Va(e,n,t,r){const[s,i]=e.propsOptions;let o=!1,a;if(n)for(let c in n){if(Ct(c))continue;const l=n[c];let u;s&&X(s,u=Me(c))?!i||!i.includes(u)?t[u]=l:(a||(a={}))[u]=l:zr(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=Y(t),l=a||ie;for(let u=0;u<i.length;u++){const f=i[u];t[f]=$s(s,c,f,l[f],e,!X(l,f))}}return o}function $s(e,n,t,r,s,i){const o=e[t];if(o!=null){const a=X(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&q(c)){const{propsDefaults:l}=s;if(t in l)r=l[t];else{const u=nr(s);r=l[t]=c.call(null,n),u()}}else r=c;s.ce&&s.ce._setProp(t,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Gn(t))&&(r=!0))}return r}const Cu=new WeakMap;function qa(e,n,t=!1){const r=t?Cu:n.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!q(e)){const u=f=>{c=!0;const[p,d]=qa(f,n,!0);Se(o,p),d&&a.push(...d)};!t&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return Z(e)&&r.set(e,st),st;if(K(i))for(let u=0;u<i.length;u++){const f=Me(i[u]);Qi(f)&&(o[f]=ie)}else if(i)for(const u in i){const f=Me(u);if(Qi(f)){const p=i[u],d=o[f]=K(p)||q(p)?{type:p}:Se({},p),b=d.type;let g=!1,y=!0;if(K(b))for(let v=0;v<b.length;++v){const w=b[v],O=q(w)&&w.name;if(O==="Boolean"){g=!0;break}else O==="String"&&(y=!1)}else g=q(b)&&b.name==="Boolean";d[0]=g,d[1]=y,(g||X(d,"default"))&&a.push(f)}}const l=[o,a];return Z(e)&&r.set(e,l),l}function Qi(e){return e[0]!=="$"&&!Ct(e)}const fi=e=>e==="_"||e==="_ctx"||e==="$stable",pi=e=>K(e)?e.map(ln):[ln(e)],Lu=(e,n,t)=>{if(n._n)return n;const r=Ps((...s)=>pi(n(...s)),t);return r._c=!1,r},Ha=(e,n,t)=>{const r=e._ctx;for(const s in e){if(fi(s))continue;const i=e[s];if(q(i))n[s]=Lu(s,i,r);else if(i!=null){const o=pi(i);n[s]=()=>o}}},Ga=(e,n)=>{const t=pi(n);e.slots.default=()=>t},za=(e,n,t)=>{for(const r in n)(t||!fi(r))&&(e[r]=n[r])},Pu=(e,n,t)=>{const r=e.slots=Ua();if(e.vnode.shapeFlag&32){const s=n._;s?(za(r,n,t),t&&Yo(r,"_",s,!0)):Ha(n,r)}else n&&Ga(e,n)},xu=(e,n,t)=>{const{vnode:r,slots:s}=e;let i=!0,o=ie;if(r.shapeFlag&32){const a=n._;a?t&&a===1?i=!1:za(s,n,t):(i=!n.$stable,Ha(n,s)),o=n}else n&&(Ga(e,n),o={default:1});if(i)for(const a in s)!fi(a)&&o[a]==null&&delete s[a]},je=Bu;function Mu(e){return Du(e)}function Du(e,n){const t=jr();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:d=un,insertStaticContent:b}=e,g=(h,m,_,k=null,A=null,S=null,C=void 0,I=null,R=!!m.dynamicChildren)=>{if(h===m)return;h&&!At(h,m)&&(k=E(h),$e(h,A,S,!0),h=null),m.patchFlag===-2&&(R=!1,m.dynamicChildren=null);const{type:T,ref:F,shapeFlag:x}=m;switch(T){case Wr:y(h,m,_,k);break;case En:v(h,m,_,k);break;case ms:h==null&&w(m,_,k,C);break;case Be:he(h,m,_,k,A,S,C,I,R);break;default:x&1?L(h,m,_,k,A,S,C,I,R):x&6?ae(h,m,_,k,A,S,C,I,R):(x&64||x&128)&&T.process(h,m,_,k,A,S,C,I,R,j)}F!=null&&A?Dt(F,h&&h.ref,S,m||h,!m):F==null&&h&&h.ref!=null&&Dt(h.ref,null,S,h,!0)},y=(h,m,_,k)=>{if(h==null)r(m.el=a(m.children),_,k);else{const A=m.el=h.el;m.children!==h.children&&l(A,m.children)}},v=(h,m,_,k)=>{h==null?r(m.el=c(m.children||""),_,k):m.el=h.el},w=(h,m,_,k)=>{[h.el,h.anchor]=b(h.children,m,_,k,h.el,h.anchor)},O=({el:h,anchor:m},_,k)=>{let A;for(;h&&h!==m;)A=p(h),r(h,_,k),h=A;r(m,_,k)},N=({el:h,anchor:m})=>{let _;for(;h&&h!==m;)_=p(h),s(h),h=_;s(m)},L=(h,m,_,k,A,S,C,I,R)=>{if(m.type==="svg"?C="svg":m.type==="math"&&(C="mathml"),h==null)U(m,_,k,A,S,C,I,R);else{const T=h.el&&h.el._isVueCE?h.el:null;try{T&&T._beginPatch(),G(h,m,A,S,C,I,R)}finally{T&&T._endPatch()}}},U=(h,m,_,k,A,S,C,I)=>{let R,T;const{props:F,shapeFlag:x,transition:B,dirs:V}=h;if(R=h.el=o(h.type,S,F&&F.is,F),x&8?u(R,h.children):x&16&&$(h.children,R,null,k,A,hs(h,S),C,I),V&&Dn(h,null,k,"created"),M(R,h,h.scopeId,C,k),F){for(const ne in F)ne!=="value"&&!Ct(ne)&&i(R,ne,null,F[ne],S,k);"value"in F&&i(R,"value",null,F.value,S),(T=F.onVnodeBeforeMount)&&sn(T,k,h)}V&&Dn(h,null,k,"beforeMount");const W=$u(A,B);W&&B.beforeEnter(R),r(R,m,_),((T=F&&F.onVnodeMounted)||W||V)&&je(()=>{try{T&&sn(T,k,h),W&&B.enter(R),V&&Dn(h,null,k,"mounted")}finally{}},A)},M=(h,m,_,k,A)=>{if(_&&d(h,_),k)for(let S=0;S<k.length;S++)d(h,k[S]);if(A){let S=A.subTree;if(m===S||Qa(S.type)&&(S.ssContent===m||S.ssFallback===m)){const C=A.vnode;M(h,C,C.scopeId,C.slotScopeIds,A.parent)}}},$=(h,m,_,k,A,S,C,I,R=0)=>{for(let T=R;T<h.length;T++){const F=h[T]=I?_n(h[T]):ln(h[T]);g(null,F,m,_,k,A,S,C,I)}},G=(h,m,_,k,A,S,C)=>{const I=m.el=h.el;let{patchFlag:R,dynamicChildren:T,dirs:F}=m;R|=h.patchFlag&16;const x=h.props||ie,B=m.props||ie;let V;if(_&&$n(_,!1),(V=B.onVnodeBeforeUpdate)&&sn(V,_,m,h),F&&Dn(m,h,_,"beforeUpdate"),_&&$n(_,!0),(x.innerHTML&&B.innerHTML==null||x.textContent&&B.textContent==null)&&u(I,""),T?te(h.dynamicChildren,T,I,_,k,hs(m,A),S):C||J(h,m,I,null,_,k,hs(m,A),S,!1),R>0){if(R&16)ye(I,x,B,_,A);else if(R&2&&x.class!==B.class&&i(I,"class",null,B.class,A),R&4&&i(I,"style",x.style,B.style,A),R&8){const W=m.dynamicProps;for(let ne=0;ne<W.length;ne++){const re=W[ne],de=x[re],ve=B[re];(ve!==de||re==="value")&&i(I,re,de,ve,A,_)}}R&1&&h.children!==m.children&&u(I,m.children)}else!C&&T==null&&ye(I,x,B,_,A);((V=B.onVnodeUpdated)||F)&&je(()=>{V&&sn(V,_,m,h),F&&Dn(m,h,_,"updated")},k)},te=(h,m,_,k,A,S,C)=>{for(let I=0;I<m.length;I++){const R=h[I],T=m[I],F=R.el&&(R.type===Be||!At(R,T)||R.shapeFlag&198)?f(R.el):_;g(R,T,F,null,k,A,S,C,!0)}},ye=(h,m,_,k,A)=>{if(m!==_){if(m!==ie)for(const S in m)!Ct(S)&&!(S in _)&&i(h,S,m[S],null,A,k);for(const S in _){if(Ct(S))continue;const C=_[S],I=m[S];C!==I&&S!=="value"&&i(h,S,I,C,A,k)}"value"in _&&i(h,"value",m.value,_.value,A)}},he=(h,m,_,k,A,S,C,I,R)=>{const T=m.el=h?h.el:a(""),F=m.anchor=h?h.anchor:a("");let{patchFlag:x,dynamicChildren:B,slotScopeIds:V}=m;V&&(I=I?I.concat(V):V),h==null?(r(T,_,k),r(F,_,k),$(m.children||[],_,F,A,S,C,I,R)):x>0&&x&64&&B&&h.dynamicChildren&&h.dynamicChildren.length===B.length?(te(h.dynamicChildren,B,_,A,S,C,I),(m.key!=null||A&&m===A.subTree)&&Wa(h,m,!0)):J(h,m,_,F,A,S,C,I,R)},ae=(h,m,_,k,A,S,C,I,R)=>{m.slotScopeIds=I,h==null?m.shapeFlag&512?A.ctx.activate(m,_,k,C,R):Nn(m,_,k,A,S,C,R):zn(h,m,R)},Nn=(h,m,_,k,A,S,C)=>{const I=h.component=Gu(h,k,A);if(Oa(h)&&(I.ctx.renderer=j),zu(I,!1,C),I.asyncDep){if(A&&A.registerDep(I,be,C),!h.el){const R=I.subTree=ge(En);v(null,R,m,_),h.placeholder=R.el}}else be(I,h,m,_,A,S,C)},zn=(h,m,_)=>{const k=m.component=h.component;if(Ou(h,m,_))if(k.asyncDep&&!k.asyncResolved){ee(k,m,_);return}else k.next=m,k.update();else m.el=h.el,k.vnode=m},be=(h,m,_,k,A,S,C)=>{const I=()=>{if(h.isMounted){let{next:x,bu:B,u:V,parent:W,vnode:ne}=h;{const tn=Ya(h);if(tn){x&&(x.el=ne.el,ee(h,x,C)),tn.asyncDep.then(()=>{je(()=>{h.isUnmounted||T()},A)});return}}let re=x,de;$n(h,!1),x?(x.el=ne.el,ee(h,x,C)):x=ne,B&&cs(B),(de=x.props&&x.props.onVnodeBeforeUpdate)&&sn(de,W,x,ne),$n(h,!0);const ve=Yi(h),nn=h.subTree;h.subTree=ve,g(nn,ve,f(nn.el),E(nn),h,A,S),x.el=ve.el,re===null&&Tu(h,ve.el),V&&je(V,A),(de=x.props&&x.props.onVnodeUpdated)&&je(()=>sn(de,W,x,ne),A)}else{let x;const{el:B,props:V}=m,{bm:W,m:ne,parent:re,root:de,type:ve}=h,nn=at(m);$n(h,!1),W&&cs(W),!nn&&(x=V&&V.onVnodeBeforeMount)&&sn(x,re,m),$n(h,!0);{de.ce&&de.ce._hasShadowRoot()&&de.ce._injectChildStyle(ve,h.parent?h.parent.type:void 0);const tn=h.subTree=Yi(h);g(null,tn,_,k,h,A,S),m.el=tn.el}if(ne&&je(ne,A),!nn&&(x=V&&V.onVnodeMounted)){const tn=m;je(()=>sn(x,re,tn),A)}(m.shapeFlag&256||re&&at(re.vnode)&&re.vnode.shapeFlag&256)&&h.a&&je(h.a,A),h.isMounted=!0,m=_=k=null}};h.scope.on();const R=h.effect=new ea(I);h.scope.off();const T=h.update=R.run.bind(R),F=h.job=R.runIfDirty.bind(R);F.i=h,F.id=h.uid,R.scheduler=()=>ai(F),$n(h,!0),T()},ee=(h,m,_)=>{m.component=h;const k=h.vnode.props;h.vnode=m,h.next=null,Iu(h,m.props,k,_),xu(h,m.children,_),vn(),Fi(h),kn()},J=(h,m,_,k,A,S,C,I,R=!1)=>{const T=h&&h.children,F=h?h.shapeFlag:0,x=m.children,{patchFlag:B,shapeFlag:V}=m;if(B>0){if(B&128){On(T,x,_,k,A,S,C,I,R);return}else if(B&256){dn(T,x,_,k,A,S,C,I,R);return}}V&8?(F&16&&Ve(T,A,S),x!==T&&u(_,x)):F&16?V&16?On(T,x,_,k,A,S,C,I,R):Ve(T,A,S,!0):(F&8&&u(_,""),V&16&&$(x,_,k,A,S,C,I,R))},dn=(h,m,_,k,A,S,C,I,R)=>{h=h||st,m=m||st;const T=h.length,F=m.length,x=Math.min(T,F);let B;for(B=0;B<x;B++){const V=m[B]=R?_n(m[B]):ln(m[B]);g(h[B],V,_,null,A,S,C,I,R)}T>F?Ve(h,A,S,!0,!1,x):$(m,_,k,A,S,C,I,R,x)},On=(h,m,_,k,A,S,C,I,R)=>{let T=0;const F=m.length;let x=h.length-1,B=F-1;for(;T<=x&&T<=B;){const V=h[T],W=m[T]=R?_n(m[T]):ln(m[T]);if(At(V,W))g(V,W,_,null,A,S,C,I,R);else break;T++}for(;T<=x&&T<=B;){const V=h[x],W=m[B]=R?_n(m[B]):ln(m[B]);if(At(V,W))g(V,W,_,null,A,S,C,I,R);else break;x--,B--}if(T>x){if(T<=B){const V=B+1,W=V<F?m[V].el:k;for(;T<=B;)g(null,m[T]=R?_n(m[T]):ln(m[T]),_,W,A,S,C,I,R),T++}}else if(T>B)for(;T<=x;)$e(h[T],A,S,!0),T++;else{const V=T,W=T,ne=new Map;for(T=W;T<=B;T++){const Fe=m[T]=R?_n(m[T]):ln(m[T]);Fe.key!=null&&ne.set(Fe.key,T)}let re,de=0;const ve=B-W+1;let nn=!1,tn=0;const St=new Array(ve);for(T=0;T<ve;T++)St[T]=0;for(T=V;T<=x;T++){const Fe=h[T];if(de>=ve){$e(Fe,A,S,!0);continue}let rn;if(Fe.key!=null)rn=ne.get(Fe.key);else for(re=W;re<=B;re++)if(St[re-W]===0&&At(Fe,m[re])){rn=re;break}rn===void 0?$e(Fe,A,S,!0):(St[rn-W]=T+1,rn>=tn?tn=rn:nn=!0,g(Fe,m[rn],_,null,A,S,C,I,R),de++)}const Pi=nn?ju(St):st;for(re=Pi.length-1,T=ve-1;T>=0;T--){const Fe=W+T,rn=m[Fe],xi=m[Fe+1],Mi=Fe+1<F?xi.el||Ja(xi):k;St[T]===0?g(null,rn,_,Mi,A,S,C,I,R):nn&&(re<0||T!==Pi[re]?en(rn,_,Mi,2):re--)}}},en=(h,m,_,k,A=null)=>{const{el:S,type:C,transition:I,children:R,shapeFlag:T}=h;if(T&6){en(h.component.subTree,m,_,k);return}if(T&128){h.suspense.move(m,_,k);return}if(T&64){C.move(h,m,_,j);return}if(C===Be){r(S,m,_);for(let x=0;x<R.length;x++)en(R[x],m,_,k);r(h.anchor,m,_);return}if(C===ms){O(h,m,_);return}if(k!==2&&T&1&&I)if(k===0)I.beforeEnter(S),r(S,m,_),je(()=>I.enter(S),A);else{const{leave:x,delayLeave:B,afterLeave:V}=I,W=()=>{h.ctx.isUnmounted?s(S):r(S,m,_)},ne=()=>{S._isLeaving&&S[tu](!0),x(S,()=>{W(),V&&V()})};B?B(S,W,ne):ne()}else r(S,m,_)},$e=(h,m,_,k=!1,A=!1)=>{const{type:S,props:C,ref:I,children:R,dynamicChildren:T,shapeFlag:F,patchFlag:x,dirs:B,cacheIndex:V,memo:W}=h;if(x===-2&&(A=!1),I!=null&&(vn(),Dt(I,null,_,h,!0),kn()),V!=null&&(m.renderCache[V]=void 0),F&256){m.ctx.deactivate(h);return}const ne=F&1&&B,re=!at(h);let de;if(re&&(de=C&&C.onVnodeBeforeUnmount)&&sn(de,m,h),F&6)Mn(h.component,_,k);else{if(F&128){h.suspense.unmount(_,k);return}ne&&Dn(h,null,m,"beforeUnmount"),F&64?h.type.remove(h,m,_,j,k):T&&!T.hasOnce&&(S!==Be||x>0&&x&64)?Ve(T,m,_,!1,!0):(S===Be&&x&384||!A&&F&16)&&Ve(R,m,_),k&&Wn(h)}const ve=W!=null&&V==null;(re&&(de=C&&C.onVnodeUnmounted)||ne||ve)&&je(()=>{de&&sn(de,m,h),ne&&Dn(h,null,m,"unmounted"),ve&&(h.el=null)},_)},Wn=h=>{const{type:m,el:_,anchor:k,transition:A}=h;if(m===Be){Yn(_,k);return}if(m===ms){N(h);return}const S=()=>{s(_),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(h.shapeFlag&1&&A&&!A.persisted){const{leave:C,delayLeave:I}=A,R=()=>C(_,S);I?I(h.el,S,R):R()}else S()},Yn=(h,m)=>{let _;for(;h!==m;)_=p(h),s(h),h=_;s(m)},Mn=(h,m,_)=>{const{bum:k,scope:A,job:S,subTree:C,um:I,m:R,a:T}=h;Xi(R),Xi(T),k&&cs(k),A.stop(),S&&(S.flags|=8,$e(C,h,m,_)),I&&je(I,m),je(()=>{h.isUnmounted=!0},m)},Ve=(h,m,_,k=!1,A=!1,S=0)=>{for(let C=S;C<h.length;C++)$e(h[C],m,_,k,A)},E=h=>{if(h.shapeFlag&6)return E(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const m=p(h.anchor||h.el),_=m&&m[eu];return _?p(_):m};let D=!1;const P=(h,m,_)=>{let k;h==null?m._vnode&&($e(m._vnode,null,null,!0),k=m._vnode.component):g(m._vnode||null,h,m,null,null,null,_),m._vnode=h,D||(D=!0,Fi(k),va(),D=!1)},j={p:g,um:$e,m:en,r:Wn,mt:Nn,mc:$,pc:J,pbc:te,n:E,o:e};return{render:P,hydrate:void 0,createApp:vu(P)}}function hs({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function $n({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function $u(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function Wa(e,n,t=!1){const r=e.children,s=n.children;if(K(r)&&K(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=_n(s[i]),a.el=o.el),!t&&a.patchFlag!==-2&&Wa(o,a)),a.type===Wr&&(a.patchFlag===-1&&(a=s[i]=_n(a)),a.el=o.el),a.type===En&&!a.el&&(a.el=o.el)}}function ju(e){const n=e.slice(),t=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=t[t.length-1],e[s]<l){n[r]=s,t.push(r);continue}for(i=0,o=t.length-1;i<o;)a=i+o>>1,e[t[a]]<l?i=a+1:o=a;l<e[t[i]]&&(i>0&&(n[r]=t[i-1]),t[i]=r)}}for(i=t.length,o=t[i-1];i-- >0;)t[i]=o,o=n[o];return t}function Ya(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Ya(n)}function Xi(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}function Ja(e){if(e.placeholder)return e.placeholder;const n=e.component;return n?Ja(n.subTree):null}const Qa=e=>e.__isSuspense;function Bu(e,n){n&&n.pendingBranch?K(e)?n.effects.push(...e):n.effects.push(e):Jl(e)}const Be=Symbol.for("v-fgt"),Wr=Symbol.for("v-txt"),En=Symbol.for("v-cmt"),ms=Symbol.for("v-stc"),jt=[];let xe=null;function Ie(e=!1){jt.push(xe=e?null:[])}function Fu(){jt.pop(),xe=jt[jt.length-1]||null}let pt=1;function Tr(e,n=!1){pt+=e,e<0&&xe&&n&&(xe.hasOnce=!0)}function Xa(e){return e.dynamicChildren=pt>0?xe||st:null,Fu(),pt>0&&xe&&xe.push(e),e}function an(e,n,t,r,s,i){return Xa(ke(e,n,t,r,s,i,!0))}function Ht(e,n,t,r,s){return Xa(ge(e,n,t,r,s,!0))}function Gt(e){return e?e.__v_isVNode===!0:!1}function At(e,n){return e.type===n.type&&e.key===n.key}const Za=({key:e})=>e??null,gr=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?fe(e)||_e(e)||q(e)?{i:Pe,r:e,k:n,f:!!t}:e:null);function ke(e,n=null,t=null,r=0,s=null,i=e===Be?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Za(n),ref:n&&gr(n),scopeId:Sa,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Pe};return a?(di(c,t),i&128&&e.normalize(c)):t&&(c.shapeFlag|=fe(t)?8:16),pt>0&&!o&&xe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&xe.push(c),c}const ge=Uu;function Uu(e,n=null,t=null,r=0,s=null,i=!1){if((!e||e===Ca)&&(e=En),Gt(e)){const a=dt(e,n,!0);return t&&di(a,t),pt>0&&!i&&xe&&(a.shapeFlag&6?xe[xe.indexOf(e)]=a:xe.push(a)),a.patchFlag=-2,a}if(Qu(e)&&(e=e.__vccOpts),n){n=Ku(n);let{class:a,style:c}=n;a&&!fe(a)&&(n.class=Br(a)),Z(c)&&(Vr(c)&&!K(c)&&(c=Se({},c)),n.style=ei(c))}const o=fe(e)?1:Qa(e)?128:nu(e)?64:Z(e)?4:q(e)?2:0;return ke(e,n,t,r,s,o,i,!0)}function Ku(e){return e?Vr(e)||Ka(e)?Se({},e):e:null}function dt(e,n,t=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=e,l=n?Vu(s||{},n):s,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Za(l),ref:n&&n.ref?t&&i?K(i)?i.concat(gr(n)):[i,gr(n)]:gr(n):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Be?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&dt(e.ssContent),ssFallback:e.ssFallback&&dt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&ci(u,c.clone(u)),u}function _r(e=" ",n=0){return ge(Wr,null,e,n)}function Zi(e="",n=!1){return n?(Ie(),Ht(En,null,e)):ge(En,null,e)}function ln(e){return e==null||typeof e=="boolean"?ge(En):K(e)?ge(Be,null,e.slice()):Gt(e)?_n(e):ge(Wr,null,String(e))}function _n(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:dt(e)}function di(e,n){let t=0;const{shapeFlag:r}=e;if(n==null)n=null;else if(K(n))t=16;else if(typeof n=="object")if(r&65){const s=n.default;s&&(s._c&&(s._d=!1),di(e,s()),s._c&&(s._d=!0));return}else{t=32;const s=n._;!s&&!Ka(n)?n._ctx=Pe:s===3&&Pe&&(Pe.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else q(n)?(n={default:n,_ctx:Pe},t=32):(n=String(n),r&64?(t=16,n=[_r(n)]):t=8);e.children=n,e.shapeFlag|=t}function Vu(...e){const n={};for(let t=0;t<e.length;t++){const r=e[t];for(const s in r)if(s==="class")n.class!==r.class&&(n.class=Br([n.class,r.class]));else if(s==="style")n.style=ei([n.style,r.style]);else if(Pr(s)){const i=n[s],o=r[s];o&&i!==o&&!(K(i)&&i.includes(o))?n[s]=i?[].concat(i,o):o:o==null&&i==null&&!xr(s)&&(n[s]=o)}else s!==""&&(n[s]=r[s])}return n}function sn(e,n,t,r=null){fn(e,n,7,[t,r])}const qu=$a();let Hu=0;function Gu(e,n,t){const r=e.type,s=(n?n.appContext:e.appContext)||qu,i={uid:Hu++,vnode:e,type:r,parent:n,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Zo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(s.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qa(r,s),emitsOptions:ja(r,s),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:r.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=n?n.root:i,i.emit=Su.bind(null,i),e.ce&&e.ce(i),i}let Ne=null;const ec=()=>Ne||Pe;let Rr,js;{const e=jr(),n=(t,r)=>{let s;return(s=e[t])||(s=e[t]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Rr=n("__VUE_INSTANCE_SETTERS__",t=>Ne=t),js=n("__VUE_SSR_SETTERS__",t=>zt=t)}const nr=e=>{const n=Ne;return Rr(e),e.scope.on(),()=>{e.scope.off(),Rr(n)}},eo=()=>{Ne&&Ne.scope.off(),Rr(null)};function nc(e){return e.vnode.shapeFlag&4}let zt=!1;function zu(e,n=!1,t=!1){n&&js(n);const{props:r,children:s}=e.vnode,i=nc(e);Ru(e,r,i,n),Pu(e,s,t||n);const o=i?Wu(e,n):void 0;return n&&js(!1),o}function Wu(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,hu);const{setup:r}=t;if(r){vn();const s=e.setupContext=r.length>1?rc(e):null,i=nr(e),o=Zt(r,e,0,[e.props,s]),a=Go(o);if(kn(),i(),(a||e.sp)&&!at(e)&&Na(e),a){if(o.then(eo,eo),n)return o.then(c=>{no(e,c)}).catch(c=>{Hr(c,e,0)});e.asyncDep=o}else no(e,o)}else tc(e)}function no(e,n,t){q(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Z(n)&&(e.setupState=ga(n)),tc(e)}function tc(e,n,t){const r=e.type;e.render||(e.render=r.render||un);{const s=nr(e);vn();try{mu(e)}finally{kn(),s()}}}const Yu={get(e,n){return Ae(e,"get",""),e[n]}};function rc(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Yu),slots:e.slots,emit:e.emit,expose:n}}function hi(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ga($l(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in $t)return $t[t](e)},has(n,t){return t in n||t in $t}})):e.proxy}function Ju(e,n=!0){return q(e)?e.displayName||e.name:e.name||n&&e.__name}function Qu(e){return q(e)&&"__vccOpts"in e}const Le=(e,n)=>Hl(e,n,zt);function Wt(e,n,t){try{Tr(-1);const r=arguments.length;return r===2?Z(n)&&!K(n)?Gt(n)?ge(e,null,[n]):ge(e,n):ge(e,null,n):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&Gt(t)&&(t=[t]),ge(e,n,t))}finally{Tr(1)}}function rm(e,n){const t=e.memo;if(t.length!=n.length)return!1;for(let r=0;r<t.length;r++)if(We(t[r],n[r]))return!1;return pt>0&&xe&&xe.push(e),!0}const Xu="3.5.31";/**
* @vue/runtime-dom v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bs;const to=typeof window<"u"&&window.trustedTypes;if(to)try{Bs=to.createPolicy("vue",{createHTML:e=>e})}catch{}const sc=Bs?e=>Bs.createHTML(e):e=>e,Zu="http://www.w3.org/2000/svg",ef="http://www.w3.org/1998/Math/MathML",gn=typeof document<"u"?document:null,ro=gn&&gn.createElement("template"),nf={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,r)=>{const s=n==="svg"?gn.createElementNS(Zu,e):n==="mathml"?gn.createElementNS(ef,e):t?gn.createElement(e,{is:t}):gn.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>gn.createTextNode(e),createComment:e=>gn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>gn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,r,s,i){const o=t?t.previousSibling:n.lastChild;if(s&&(s===i||s.nextSibling))for(;n.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{ro.innerHTML=sc(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=ro.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}n.insertBefore(a,t)}return[o?o.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},tf=Symbol("_vtc");function rf(e,n,t){const r=e[tf];r&&(n=(n?[n,...r]:[...r]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const so=Symbol("_vod"),sf=Symbol("_vsh"),of=Symbol(""),af=/(?:^|;)\s*display\s*:/;function cf(e,n,t){const r=e.style,s=fe(t);let i=!1;if(t&&!s){if(n)if(fe(n))for(const o of n.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&yr(r,a,"")}else for(const o in n)t[o]==null&&yr(r,o,"");for(const o in t)o==="display"&&(i=!0),yr(r,o,t[o])}else if(s){if(n!==t){const o=r[of];o&&(t+=";"+o),r.cssText=t,i=af.test(t)}}else n&&e.removeAttribute("style");so in e&&(e[so]=i?r.display:"",e[sf]&&(r.display="none"))}const io=/\s*!important$/;function yr(e,n,t){if(K(t))t.forEach(r=>yr(e,n,r));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const r=lf(e,n);io.test(t)?e.setProperty(Gn(r),t.replace(io,""),"important"):e[r]=t}}const oo=["Webkit","Moz","ms"],gs={};function lf(e,n){const t=gs[n];if(t)return t;let r=Me(n);if(r!=="filter"&&r in e)return gs[n]=r;r=$r(r);for(let s=0;s<oo.length;s++){const i=oo[s]+r;if(i in e)return gs[n]=i}return n}const ao="http://www.w3.org/1999/xlink";function co(e,n,t,r,s,i=ml(n)){r&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(ao,n.slice(6,n.length)):e.setAttributeNS(ao,n,t):t==null||i&&!Jo(t)?e.removeAttribute(n):e.setAttribute(n,i?"":Ke(t)?String(t):t)}function lo(e,n,t,r,s){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?sc(t):t);return}const i=e.tagName;if(n==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?e.getAttribute("value")||"":e.value,c=t==null?e.type==="checkbox"?"on":"":String(t);(a!==c||!("_value"in e))&&(e.value=c),t==null&&e.removeAttribute(n),e._value=t;return}let o=!1;if(t===""||t==null){const a=typeof e[n];a==="boolean"?t=Jo(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{e[n]=t}catch{}o&&e.removeAttribute(s||n)}function uf(e,n,t,r){e.addEventListener(n,t,r)}function ff(e,n,t,r){e.removeEventListener(n,t,r)}const uo=Symbol("_vei");function pf(e,n,t,r,s=null){const i=e[uo]||(e[uo]={}),o=i[n];if(r&&o)o.value=r;else{const[a,c]=df(n);if(r){const l=i[n]=gf(r,s);uf(e,a,l,c)}else o&&(ff(e,a,o,c),i[n]=void 0)}}const fo=/(?:Once|Passive|Capture)$/;function df(e){let n;if(fo.test(e)){n={};let r;for(;r=e.match(fo);)e=e.slice(0,e.length-r[0].length),n[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Gn(e.slice(2)),n]}let _s=0;const hf=Promise.resolve(),mf=()=>_s||(hf.then(()=>_s=0),_s=Date.now());function gf(e,n){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;fn(_f(r,t.value),n,5,[r])};return t.value=e,t.attached=mf(),t}function _f(e,n){if(K(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(r=>s=>!s._stopped&&r&&r(s))}else return n}const po=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,yf=(e,n,t,r,s,i)=>{const o=s==="svg";n==="class"?rf(e,r,o):n==="style"?cf(e,t,r):Pr(n)?xr(n)||pf(e,n,t,r,i):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):bf(e,n,r,o))?(lo(e,n,r),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&co(e,n,r,o,i,n!=="value")):e._isVueCE&&(wf(e,n)||e._def.__asyncLoader&&(/[A-Z]/.test(n)||!fe(r)))?lo(e,Me(n),r,i,n):(n==="true-value"?e._trueValue=r:n==="false-value"&&(e._falseValue=r),co(e,n,r,o))};function bf(e,n,t,r){if(r)return!!(n==="innerHTML"||n==="textContent"||n in e&&po(n)&&q(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return po(n)&&fe(t)?!1:n in e}function wf(e,n){const t=e._def.props;if(!t)return!1;const r=Me(n);return Array.isArray(t)?t.some(s=>Me(s)===r):Object.keys(t).some(s=>Me(s)===r)}const vf=Se({patchProp:yf},nf);let ho;function kf(){return ho||(ho=Mu(vf))}const Sf=((...e)=>{const n=kf().createApp(...e),{mount:t}=n;return n.mount=r=>{const s=Af(r);if(!s)return;const i=n._component;!q(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Ef(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},n});function Ef(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Af(e){return fe(e)?document.querySelector(e):e}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const et=typeof document<"u";function ic(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Nf(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&ic(e.default)}const Q=Object.assign;function ys(e,n){const t={};for(const r in n){const s=n[r];t[r]=Xe(s)?s.map(e):e(s)}return t}const Bt=()=>{},Xe=Array.isArray;function mo(e,n){const t={};for(const r in e)t[r]=r in n?n[r]:e[r];return t}const oc=/#/g,Of=/&/g,Tf=/\//g,Rf=/=/g,If=/\?/g,ac=/\+/g,Cf=/%5B/g,Lf=/%5D/g,cc=/%5E/g,Pf=/%60/g,lc=/%7B/g,xf=/%7C/g,uc=/%7D/g,Mf=/%20/g;function mi(e){return e==null?"":encodeURI(""+e).replace(xf,"|").replace(Cf,"[").replace(Lf,"]")}function Df(e){return mi(e).replace(lc,"{").replace(uc,"}").replace(cc,"^")}function Fs(e){return mi(e).replace(ac,"%2B").replace(Mf,"+").replace(oc,"%23").replace(Of,"%26").replace(Pf,"`").replace(lc,"{").replace(uc,"}").replace(cc,"^")}function $f(e){return Fs(e).replace(Rf,"%3D")}function jf(e){return mi(e).replace(oc,"%23").replace(If,"%3F")}function Bf(e){return jf(e).replace(Tf,"%2F")}function Yt(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Ff=/\/$/,Uf=e=>e.replace(Ff,"");function bs(e,n,t="/"){let r,s={},i="",o="";const a=n.indexOf("#");let c=n.indexOf("?");return c=a>=0&&c>a?-1:c,c>=0&&(r=n.slice(0,c),i=n.slice(c,a>0?a:n.length),s=e(i.slice(1))),a>=0&&(r=r||n.slice(0,a),o=n.slice(a,n.length)),r=Hf(r??n,t),{fullPath:r+i+o,path:r,query:s,hash:Yt(o)}}function Kf(e,n){const t=n.query?e(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function go(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function Vf(e,n,t){const r=n.matched.length-1,s=t.matched.length-1;return r>-1&&r===s&&ht(n.matched[r],t.matched[s])&&fc(n.params,t.params)&&e(n.query)===e(t.query)&&n.hash===t.hash}function ht(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function fc(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(var t in e)if(!qf(e[t],n[t]))return!1;return!0}function qf(e,n){return Xe(e)?_o(e,n):Xe(n)?_o(n,e):(e==null?void 0:e.valueOf())===(n==null?void 0:n.valueOf())}function _o(e,n){return Xe(n)?e.length===n.length&&e.every((t,r)=>t===n[r]):e.length===1&&e[0]===n}function Hf(e,n){if(e.startsWith("/"))return e;if(!e)return n;const t=n.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=t.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return t.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Tn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Us=(function(e){return e.pop="pop",e.push="push",e})({}),ws=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Gf(e){if(!e)if(et){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Uf(e)}const zf=/^[^#]+#/;function Wf(e,n){return e.replace(zf,"#")+n}function Yf(e,n){const t=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:n.behavior,left:r.left-t.left-(n.left||0),top:r.top-t.top-(n.top||0)}}const Yr=()=>({left:window.scrollX,top:window.scrollY});function Jf(e){let n;if("el"in e){const t=e.el,r=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;n=Yf(s,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function yo(e,n){return(history.state?history.state.position-n:-1)+e}const Ks=new Map;function Qf(e,n){Ks.set(e,n)}function Xf(e){const n=Ks.get(e);return Ks.delete(e),n}function Zf(e){return typeof e=="string"||e&&typeof e=="object"}function pc(e){return typeof e=="string"||typeof e=="symbol"}let ce=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const dc=Symbol("");ce.MATCHER_NOT_FOUND+"",ce.NAVIGATION_GUARD_REDIRECT+"",ce.NAVIGATION_ABORTED+"",ce.NAVIGATION_CANCELLED+"",ce.NAVIGATION_DUPLICATED+"";function mt(e,n){return Q(new Error,{type:e,[dc]:!0},n)}function mn(e,n){return e instanceof Error&&dc in e&&(n==null||!!(e.type&n))}const ep=["params","query","hash"];function np(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const n={};for(const t of ep)t in e&&(n[t]=e[t]);return JSON.stringify(n,null,2)}function tp(e){const n={};if(e===""||e==="?")return n;const t=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<t.length;++r){const s=t[r].replace(ac," "),i=s.indexOf("="),o=Yt(i<0?s:s.slice(0,i)),a=i<0?null:Yt(s.slice(i+1));if(o in n){let c=n[o];Xe(c)||(c=n[o]=[c]),c.push(a)}else n[o]=a}return n}function bo(e){let n="";for(let t in e){const r=e[t];if(t=$f(t),r==null){r!==void 0&&(n+=(n.length?"&":"")+t);continue}(Xe(r)?r.map(s=>s&&Fs(s)):[r&&Fs(r)]).forEach(s=>{s!==void 0&&(n+=(n.length?"&":"")+t,s!=null&&(n+="="+s))})}return n}function rp(e){const n={};for(const t in e){const r=e[t];r!==void 0&&(n[t]=Xe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return n}const sp=Symbol(""),wo=Symbol(""),Jr=Symbol(""),gi=Symbol(""),Vs=Symbol("");function Nt(){let e=[];function n(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function t(){e=[]}return{add:n,list:()=>e.slice(),reset:t}}function In(e,n,t,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=p=>{p===!1?c(mt(ce.NAVIGATION_ABORTED,{from:t,to:n})):p instanceof Error?c(p):Zf(p)?c(mt(ce.NAVIGATION_GUARD_REDIRECT,{from:n,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},u=i(()=>e.call(r&&r.instances[s],n,t,l));let f=Promise.resolve(u);e.length<3&&(f=f.then(l)),f.catch(p=>c(p))})}function vs(e,n,t,r,s=i=>i()){const i=[];for(const o of e)for(const a in o.components){let c=o.components[a];if(!(n!=="beforeRouteEnter"&&!o.instances[a]))if(ic(c)){const l=(c.__vccOpts||c)[n];l&&i.push(In(l,t,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=Nf(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const p=(f.__vccOpts||f)[n];return p&&In(p,t,r,o,a,s)()}))}}return i}function ip(e,n){const t=[],r=[],s=[],i=Math.max(n.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=n.matched[o];a&&(e.matched.find(l=>ht(l,a))?r.push(a):t.push(a));const c=e.matched[o];c&&(n.matched.find(l=>ht(l,c))||s.push(c))}return[t,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let op=()=>location.protocol+"//"+location.host;function hc(e,n){const{pathname:t,search:r,hash:s}=n,i=e.indexOf("#");if(i>-1){let o=s.includes(e.slice(i))?e.slice(i).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),go(a,"")}return go(t,e)+r+s}function ap(e,n,t,r){let s=[],i=[],o=null;const a=({state:p})=>{const d=hc(e,location),b=t.value,g=n.value;let y=0;if(p){if(t.value=d,n.value=p,o&&o===b){o=null;return}y=g?p.position-g.position:0}else r(d);s.forEach(v=>{v(t.value,b,{delta:y,type:Us.pop,direction:y?y>0?ws.forward:ws.back:ws.unknown})})};function c(){o=t.value}function l(p){s.push(p);const d=()=>{const b=s.indexOf(p);b>-1&&s.splice(b,1)};return i.push(d),d}function u(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(Q({},p.state,{scroll:Yr()}),"")}}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:c,listen:l,destroy:f}}function vo(e,n,t,r=!1,s=!1){return{back:e,current:n,forward:t,replaced:r,position:window.history.length,scroll:s?Yr():null}}function cp(e){const{history:n,location:t}=window,r={value:hc(e,t)},s={value:n.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=e.indexOf("#"),p=f>-1?(t.host&&document.querySelector("base")?e:e.slice(f))+c:op()+e+c;try{n[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(d){console.error(d),t[u?"replace":"assign"](p)}}function o(c,l){i(c,Q({},n.state,vo(s.value.back,c,s.value.forward,!0),l,{position:s.value.position}),!0),r.value=c}function a(c,l){const u=Q({},s.value,n.state,{forward:c,scroll:Yr()});i(u.current,u,!0),i(c,Q({},vo(r.value,c,null),{position:u.position+1},l),!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function lp(e){e=Gf(e);const n=cp(e),t=ap(e,n.state,n.location,n.replace);function r(i,o=!0){o||t.pauseListeners(),history.go(i)}const s=Q({location:"",base:e,go:r,createHref:Wf.bind(null,e)},n,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>n.state.value}),s}function up(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),lp(e)}let Fn=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var me=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(me||{});const fp={type:Fn.Static,value:""},pp=/[a-zA-Z0-9_]/;function dp(e){if(!e)return[[]];if(e==="/")return[[fp]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(d){throw new Error(`ERR (${t})/"${l}": ${d}`)}let t=me.Static,r=t;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(t===me.Static?i.push({type:Fn.Static,value:l}):t===me.Param||t===me.ParamRegExp||t===me.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&n(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Fn.Param,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):n("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&t!==me.ParamRegExp){r=t,t=me.EscapeNext;continue}switch(t){case me.Static:c==="/"?(l&&f(),o()):c===":"?(f(),t=me.Param):p();break;case me.EscapeNext:p(),t=r;break;case me.Param:c==="("?t=me.ParamRegExp:pp.test(c)?p():(f(),t=me.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case me.ParamRegExp:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:t=me.ParamRegExpEnd:u+=c;break;case me.ParamRegExpEnd:f(),t=me.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:n("Unknown state");break}}return t===me.ParamRegExp&&n(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}const ko="[^/]+?",hp={sensitive:!1,strict:!1,start:!0,end:!0};var Te=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Te||{});const mp=/[.+*?^${}()[\]/\\]/g;function gp(e,n){const t=Q({},hp,n),r=[];let s=t.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[Te.Root];t.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const p=l[f];let d=Te.Segment+(t.sensitive?Te.BonusCaseSensitive:0);if(p.type===Fn.Static)f||(s+="/"),s+=p.value.replace(mp,"\\$&"),d+=Te.Static;else if(p.type===Fn.Param){const{value:b,repeatable:g,optional:y,regexp:v}=p;i.push({name:b,repeatable:g,optional:y});const w=v||ko;if(w!==ko){d+=Te.BonusCustomRegExp;try{`${w}`}catch(N){throw new Error(`Invalid custom RegExp for param "${b}" (${w}): `+N.message)}}let O=g?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;f||(O=y&&l.length<2?`(?:/${O})`:"/"+O),y&&(O+="?"),s+=O,d+=Te.Dynamic,y&&(d+=Te.BonusOptional),g&&(d+=Te.BonusRepeatable),w===".*"&&(d+=Te.BonusWildcard)}u.push(d)}r.push(u)}if(t.strict&&t.end){const l=r.length-1;r[l][r[l].length-1]+=Te.BonusStrict}t.strict||(s+="/?"),t.end?s+="$":t.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const d=u[p]||"",b=i[p-1];f[b.name]=d&&b.repeatable?d.split("/"):d}return f}function c(l){let u="",f=!1;for(const p of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of p)if(d.type===Fn.Static)u+=d.value;else if(d.type===Fn.Param){const{value:b,repeatable:g,optional:y}=d,v=b in l?l[b]:"";if(Xe(v)&&!g)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const w=Xe(v)?v.join("/"):v;if(!w)if(y)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${b}"`);u+=w}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function _p(e,n){let t=0;for(;t<e.length&&t<n.length;){const r=n[t]-e[t];if(r)return r;t++}return e.length<n.length?e.length===1&&e[0]===Te.Static+Te.Segment?-1:1:e.length>n.length?n.length===1&&n[0]===Te.Static+Te.Segment?1:-1:0}function mc(e,n){let t=0;const r=e.score,s=n.score;for(;t<r.length&&t<s.length;){const i=_p(r[t],s[t]);if(i)return i;t++}if(Math.abs(s.length-r.length)===1){if(So(r))return 1;if(So(s))return-1}return s.length-r.length}function So(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const yp={strict:!1,end:!0,sensitive:!1};function bp(e,n,t){const r=gp(dp(e.path),t),s=Q(r,{record:e,parent:n,children:[],alias:[]});return n&&!s.record.aliasOf==!n.record.aliasOf&&n.children.push(s),s}function wp(e,n){const t=[],r=new Map;n=mo(yp,n);function s(f){return r.get(f)}function i(f,p,d){const b=!d,g=Ao(f);g.aliasOf=d&&d.record;const y=mo(n,f),v=[g];if("alias"in f){const N=typeof f.alias=="string"?[f.alias]:f.alias;for(const L of N)v.push(Ao(Q({},g,{components:d?d.record.components:g.components,path:L,aliasOf:d?d.record:g})))}let w,O;for(const N of v){const{path:L}=N;if(p&&L[0]!=="/"){const U=p.record.path,M=U[U.length-1]==="/"?"":"/";N.path=p.record.path+(L&&M+L)}if(w=bp(N,p,y),d?d.alias.push(w):(O=O||w,O!==w&&O.alias.push(w),b&&f.name&&!No(w)&&o(f.name)),gc(w)&&c(w),g.children){const U=g.children;for(let M=0;M<U.length;M++)i(U[M],w,d&&d.children[M])}d=d||w}return O?()=>{o(O)}:Bt}function o(f){if(pc(f)){const p=r.get(f);p&&(r.delete(f),t.splice(t.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=t.indexOf(f);p>-1&&(t.splice(p,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function c(f){const p=Sp(f,t);t.splice(p,0,f),f.record.name&&!No(f)&&r.set(f.record.name,f)}function l(f,p){let d,b={},g,y;if("name"in f&&f.name){if(d=r.get(f.name),!d)throw mt(ce.MATCHER_NOT_FOUND,{location:f});y=d.record.name,b=Q(Eo(p.params,d.keys.filter(O=>!O.optional).concat(d.parent?d.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),f.params&&Eo(f.params,d.keys.map(O=>O.name))),g=d.stringify(b)}else if(f.path!=null)g=f.path,d=t.find(O=>O.re.test(g)),d&&(b=d.parse(g),y=d.record.name);else{if(d=p.name?r.get(p.name):t.find(O=>O.re.test(p.path)),!d)throw mt(ce.MATCHER_NOT_FOUND,{location:f,currentLocation:p});y=d.record.name,b=Q({},p.params,f.params),g=d.stringify(b)}const v=[];let w=d;for(;w;)v.unshift(w.record),w=w.parent;return{name:y,path:g,params:b,matched:v,meta:kp(v)}}e.forEach(f=>i(f));function u(){t.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Eo(e,n){const t={};for(const r of n)r in e&&(t[r]=e[r]);return t}function Ao(e){const n={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:vp(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function vp(e){const n={},t=e.props||!1;if("component"in e)n.default=t;else for(const r in e.components)n[r]=typeof t=="object"?t[r]:t;return n}function No(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function kp(e){return e.reduce((n,t)=>Q(n,t.meta),{})}function Sp(e,n){let t=0,r=n.length;for(;t!==r;){const i=t+r>>1;mc(e,n[i])<0?r=i:t=i+1}const s=Ep(e);return s&&(r=n.lastIndexOf(s,r-1)),r}function Ep(e){let n=e;for(;n=n.parent;)if(gc(n)&&mc(e,n)===0)return n}function gc({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Oo(e){const n=Je(Jr),t=Je(gi),r=Le(()=>{const c=we(e.to);return n.resolve(c)}),s=Le(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=t.matched;if(!u||!f.length)return-1;const p=f.findIndex(ht.bind(null,u));if(p>-1)return p;const d=To(c[l-2]);return l>1&&To(u)===d&&f[f.length-1].path!==d?f.findIndex(ht.bind(null,c[l-2])):p}),i=Le(()=>s.value>-1&&Tp(t.params,r.value.params)),o=Le(()=>s.value>-1&&s.value===t.matched.length-1&&fc(t.params,r.value.params));function a(c={}){if(Op(c)){const l=n[we(e.replace)?"replace":"push"](we(e.to)).catch(Bt);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:Le(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function Ap(e){return e.length===1?e[0]:e}const Np=er({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Oo,setup(e,{slots:n}){const t=Kr(Oo(e)),{options:r}=Je(Jr),s=Le(()=>({[Ro(e.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[Ro(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=n.default&&Ap(n.default(t));return e.custom?i:Wt("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},i)}}}),qs=Np;function Op(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function Tp(e,n){for(const t in n){const r=n[t],s=e[t];if(typeof r=="string"){if(r!==s)return!1}else if(!Xe(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function To(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ro=(e,n,t)=>e??n??t,Rp=er({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:t}){const r=Je(Vs),s=Le(()=>e.route||r.value),i=Je(wo,0),o=Le(()=>{let l=we(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Le(()=>s.value.matched[o.value]);mr(wo,Le(()=>o.value+1)),mr(sp,a),mr(Vs,s);const c=qr();return Mt(()=>[c.value,a.value,e.name],([l,u,f],[p,d,b])=>{u&&(u.instances[f]=l,d&&d!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),l&&u&&(!d||!ht(u,d)||!p)&&(u.enterCallbacks[f]||[]).forEach(g=>g(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,f=a.value,p=f&&f.components[u];if(!p)return Io(t.default,{Component:p,route:l});const d=f.props[u],b=d?d===!0?l.params:typeof d=="function"?d(l):d:null,y=Wt(p,Q({},b,n,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return Io(t.default,{Component:y,route:l})||y}}});function Io(e,n){if(!e)return null;const t=e(n);return t.length===1?t[0]:t}const Ip=Rp;function Cp(e){const n=wp(e.routes,e),t=e.parseQuery||tp,r=e.stringifyQuery||bo,s=e.history,i=Nt(),o=Nt(),a=Nt(),c=jl(Tn);let l=Tn;et&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ys.bind(null,E=>""+E),f=ys.bind(null,Bf),p=ys.bind(null,Yt);function d(E,D){let P,j;return pc(E)?(P=n.getRecordMatcher(E),j=D):j=E,n.addRoute(j,P)}function b(E){const D=n.getRecordMatcher(E);D&&n.removeRoute(D)}function g(){return n.getRoutes().map(E=>E.record)}function y(E){return!!n.getRecordMatcher(E)}function v(E,D){if(D=Q({},D||c.value),typeof E=="string"){const _=bs(t,E,D.path),k=n.resolve({path:_.path},D),A=s.createHref(_.fullPath);return Q(_,k,{params:p(k.params),hash:Yt(_.hash),redirectedFrom:void 0,href:A})}let P;if(E.path!=null)P=Q({},E,{path:bs(t,E.path,D.path).path});else{const _=Q({},E.params);for(const k in _)_[k]==null&&delete _[k];P=Q({},E,{params:f(_)}),D.params=f(D.params)}const j=n.resolve(P,D),z=E.hash||"";j.params=u(p(j.params));const h=Kf(r,Q({},E,{hash:Df(z),path:j.path})),m=s.createHref(h);return Q({fullPath:h,hash:z,query:r===bo?rp(E.query):E.query||{}},j,{redirectedFrom:void 0,href:m})}function w(E){return typeof E=="string"?bs(t,E,c.value.path):Q({},E)}function O(E,D){if(l!==E)return mt(ce.NAVIGATION_CANCELLED,{from:D,to:E})}function N(E){return M(E)}function L(E){return N(Q(w(E),{replace:!0}))}function U(E,D){const P=E.matched[E.matched.length-1];if(P&&P.redirect){const{redirect:j}=P;let z=typeof j=="function"?j(E,D):j;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=w(z):{path:z},z.params={}),Q({query:E.query,hash:E.hash,params:z.path!=null?{}:E.params},z)}}function M(E,D){const P=l=v(E),j=c.value,z=E.state,h=E.force,m=E.replace===!0,_=U(P,j);if(_)return M(Q(w(_),{state:typeof _=="object"?Q({},z,_.state):z,force:h,replace:m}),D||P);const k=P;k.redirectedFrom=D;let A;return!h&&Vf(r,j,P)&&(A=mt(ce.NAVIGATION_DUPLICATED,{to:k,from:j}),en(j,j,!0,!1)),(A?Promise.resolve(A):te(k,j)).catch(S=>mn(S)?mn(S,ce.NAVIGATION_GUARD_REDIRECT)?S:On(S):J(S,k,j)).then(S=>{if(S){if(mn(S,ce.NAVIGATION_GUARD_REDIRECT))return M(Q({replace:m},w(S.to),{state:typeof S.to=="object"?Q({},z,S.to.state):z,force:h}),D||k)}else S=he(k,j,!0,m,z);return ye(k,j,S),S})}function $(E,D){const P=O(E,D);return P?Promise.reject(P):Promise.resolve()}function G(E){const D=Yn.values().next().value;return D&&typeof D.runWithContext=="function"?D.runWithContext(E):E()}function te(E,D){let P;const[j,z,h]=ip(E,D);P=vs(j.reverse(),"beforeRouteLeave",E,D);for(const _ of j)_.leaveGuards.forEach(k=>{P.push(In(k,E,D))});const m=$.bind(null,E,D);return P.push(m),Ve(P).then(()=>{P=[];for(const _ of i.list())P.push(In(_,E,D));return P.push(m),Ve(P)}).then(()=>{P=vs(z,"beforeRouteUpdate",E,D);for(const _ of z)_.updateGuards.forEach(k=>{P.push(In(k,E,D))});return P.push(m),Ve(P)}).then(()=>{P=[];for(const _ of h)if(_.beforeEnter)if(Xe(_.beforeEnter))for(const k of _.beforeEnter)P.push(In(k,E,D));else P.push(In(_.beforeEnter,E,D));return P.push(m),Ve(P)}).then(()=>(E.matched.forEach(_=>_.enterCallbacks={}),P=vs(h,"beforeRouteEnter",E,D,G),P.push(m),Ve(P))).then(()=>{P=[];for(const _ of o.list())P.push(In(_,E,D));return P.push(m),Ve(P)}).catch(_=>mn(_,ce.NAVIGATION_CANCELLED)?_:Promise.reject(_))}function ye(E,D,P){a.list().forEach(j=>G(()=>j(E,D,P)))}function he(E,D,P,j,z){const h=O(E,D);if(h)return h;const m=D===Tn,_=et?history.state:{};P&&(j||m?s.replace(E.fullPath,Q({scroll:m&&_&&_.scroll},z)):s.push(E.fullPath,z)),c.value=E,en(E,D,P,m),On()}let ae;function Nn(){ae||(ae=s.listen((E,D,P)=>{if(!Mn.listening)return;const j=v(E),z=U(j,Mn.currentRoute.value);if(z){M(Q(z,{replace:!0,force:!0}),j).catch(Bt);return}l=j;const h=c.value;et&&Qf(yo(h.fullPath,P.delta),Yr()),te(j,h).catch(m=>mn(m,ce.NAVIGATION_ABORTED|ce.NAVIGATION_CANCELLED)?m:mn(m,ce.NAVIGATION_GUARD_REDIRECT)?(M(Q(w(m.to),{force:!0}),j).then(_=>{mn(_,ce.NAVIGATION_ABORTED|ce.NAVIGATION_DUPLICATED)&&!P.delta&&P.type===Us.pop&&s.go(-1,!1)}).catch(Bt),Promise.reject()):(P.delta&&s.go(-P.delta,!1),J(m,j,h))).then(m=>{m=m||he(j,h,!1),m&&(P.delta&&!mn(m,ce.NAVIGATION_CANCELLED)?s.go(-P.delta,!1):P.type===Us.pop&&mn(m,ce.NAVIGATION_ABORTED|ce.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),ye(j,h,m)}).catch(Bt)}))}let zn=Nt(),be=Nt(),ee;function J(E,D,P){On(E);const j=be.list();return j.length?j.forEach(z=>z(E,D,P)):console.error(E),Promise.reject(E)}function dn(){return ee&&c.value!==Tn?Promise.resolve():new Promise((E,D)=>{zn.add([E,D])})}function On(E){return ee||(ee=!E,Nn(),zn.list().forEach(([D,P])=>E?P(E):D()),zn.reset()),E}function en(E,D,P,j){const{scrollBehavior:z}=e;if(!et||!z)return Promise.resolve();const h=!P&&Xf(yo(E.fullPath,0))||(j||!P)&&history.state&&history.state.scroll||null;return ba().then(()=>z(E,D,h)).then(m=>m&&Jf(m)).catch(m=>J(m,E,D))}const $e=E=>s.go(E);let Wn;const Yn=new Set,Mn={currentRoute:c,listening:!0,addRoute:d,removeRoute:b,clearRoutes:n.clearRoutes,hasRoute:y,getRoutes:g,resolve:v,options:e,push:N,replace:L,go:$e,back:()=>$e(-1),forward:()=>$e(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:be.add,isReady:dn,install(E){E.component("RouterLink",qs),E.component("RouterView",Ip),E.config.globalProperties.$router=Mn,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>we(c)}),et&&!Wn&&c.value===Tn&&(Wn=!0,N(s.location).catch(j=>{}));const D={};for(const j in Tn)Object.defineProperty(D,j,{get:()=>c.value[j],enumerable:!0});E.provide(Jr,Mn),E.provide(gi,ha(D)),E.provide(Vs,c);const P=E.unmount;Yn.add(E),E.unmount=function(){Yn.delete(E),Yn.size<1&&(l=Tn,ae&&ae(),ae=null,c.value=Tn,Wn=!1,ee=!1),P()}}};function Ve(E){return E.reduce((D,P)=>D.then(()=>G(P)),Promise.resolve())}return Mn}function sm(){return Je(Jr)}function Lp(e){return Je(gi)}const Pp=`# ─────────────────────────────────────────────────────────────────────────────
# Стандарт «Материальная помощь доверенного кооперативного участка» —
# выплата доверенному (или председателю) участка денег с его персонального
# кошелька членских средств на его расчётный счёт.
#
# Персональный кошелёк пополняется распределением членских взносов с
# исполненных заказов участка (типовой процесс «Распределение членских
# взносов кооперативного участка»). Из общего кошелька участка сначала
# оплачиваются плановые расходы, и только свободный остаток сверх планового
# резерва председатель распределяет между собой и доверенными. Получатель
# сам решает, как распорядиться распределённым: заказать имущество через
# Стол заказов (перевод в членский кошелёк программы — решения совета не
# требует) или получить деньги материальной помощью — а это уже выплата
# кооператива, и она проходит через решение совета.
#
# Почему через совет. Перевод в Стол заказов оставляет средства внутри
# кооператива — меняется только программа, по которой они учитываются.
# Материальная помощь выводит деньги из кооператива на личный счёт пайщика,
# то есть уменьшает имущество кооператива. Решение о такой выплате —
# компетенция совета, а не самого получателя; распределение средств на
# персональный кошелёк такого решения не заменяет.
#
# НДФЛ удерживает кооператив: он выступает налоговым агентом, выплачивает
# получателю сумму заявления за вычетом налога по ставке 13 % и сам
# перечисляет удержанное в бюджет (решение владельца 2026-08-13; отменяет
# прежний порядок «налог платит получатель сам»). Вычеты не применяются —
# получатель не работник кооператива, облагается вся сумма.
#
# Удержанный налог не уходит с расчётного счёта в момент выплаты: кооператив
# просто перечислил получателю меньше, а разница осталась долгом перед
# бюджетом. Гасится долг отдельным процессом бухгалтерии — «Перечисление
# удержанного налога в бюджет». Он общий для кооператива: в один и тот же
# долг попадают удержания любой программы, выплатившей доход физлицу, и
# платёж закрывает их разом.
#
# **Движение средств:** заявление получателя → решение совета → исходящий
# платёж кассиру → подтверждение кассиром фактического банковского
# перевода → списание с персонального кошелька (Дт 86 / Кт 51 — целевое
# финансирование уменьшается, деньги уходят с расчётного счёта). Если совет
# отказал — средства остаются на персональном кошельке. После положительного
# решения совета выплата не отменяется: кассир решение не пересматривает.
#
# Канон формата:
#   coopenomics-docs/docs/standards/_spec/canon.md
# ─────────────────────────────────────────────────────────────────────────────

# ── Секция 1. Паспорт ───────────────────────────────────────────────────────
process_type: p.brn.aid
id: public_branch_aid_process
title: Материальная помощь доверенного кооперативного участка
slug: aid
status: proposed
contract: branch
purpose: >
  Доверенный или председатель кооперативного участка получает деньги со
  своего персонального кошелька членских средств на свой расчётный счёт.

  Получить материальную помощь может только тот пайщик, который состоит
  доверенным лицом либо председателем кооперативного участка, и только в
  пределах средств, ранее распределённых на него по этому участку.

  Процесс состоит из трёх шагов. Получатель подписывает заявление на
  материальную помощь и вносит его на рассмотрение совета. Совет
  рассматривает заявление по типовому процессу решения совета и принимает
  решение — выплата денег из кооператива относится к его компетенции, а не
  к усмотрению самого получателя. По принятому решению кассир кооператива
  видит заявку у себя, проводит банковский перевод с расчётного счёта
  кооператива и подтверждает его — в этот момент сумма списывается с
  персонального кошелька получателя. Налог на доходы физических лиц
  кооператив удерживает сам: с кошелька уходит вся сумма заявления, на счёт
  получателя — за вычетом 13 %, а удержанное остаётся долгом перед бюджетом
  и перечисляется туда отдельным процессом бухгалтерии.
roles:
  - trusted    # доверенный/председатель участка — получатель помощи
  - council    # совет кооператива — принимает решение о выплате
  - cashier    # кассир кооператива — проводит и подтверждает банковский перевод
  - gateway    # Система процессинга платежей (фиксирует факт банковского перевода)

# ── Секция 2. Действия контракта (блокчейн-уровень) ─────────────────────────
# Рассмотрение заявления советом идёт по типовому процессу «Решение совета»
# (стандарт sov.decision), поэтому здесь перечислены только специфические для
# материальной помощи действия — внесение заявления, фиксация решения совета
# и подтверждение банковского перевода.
actions:
  - name: branch::createaid
    human: Внести заявление на рассмотрение совета
    actor: trusted
    role: opener
    purpose: >
      Получатель подписывает заявление на материальную помощь и вносит его
      на рассмотрение совета. Средства при подаче не блокируются: если к
      моменту выплаты их уже не хватает (получатель параллельно перевёл их
      в Стол заказов), выплата не пройдёт.
    links:
      - process_type: sov.decision
        label: Принятие решения советом

  - name: branch::onaidauth
    human: Совет одобрил выплату
    actor: council
    role: progress
    purpose: >
      Совет рассмотрел заявление и принял положительное решение, председатель
      подписал протокол. Заявка передаётся кассиру: она появляется у него в
      реестре исходящих платежей и ждёт фактического банковского перевода.

  - name: branch::onaiddecl
    human: Совет отказал в выплате
    actor: council
    role: closer
    purpose: >
      Совет рассмотрел заявление и отказал — либо срок рассмотрения истёк.
      Средства остаются на персональном кошельке получателя, заявка
      закрывается; получатель может подать новое заявление.

  - name: branch::aidconfirm
    human: Кассир подтвердил банковский перевод
    actor: gateway
    role: closer
    purpose: >
      Кассир провёл банковский перевод получателю и подтвердил его. В
      этот момент — и только в этот — сумма списывается с персонального
      кошелька получателя и уходит с расчётного счёта кооператива.
      Удержанный налог остаётся долгом кооператива перед бюджетом и
      перечисляется туда отдельным процессом бухгалтерии.
    links:
      - process_type: p.sov.tax
        label: Перечисление удержанного налога в бюджет

  - name: branch::aiddecline
    human: Отмена выплаты запрещена
    actor: gateway
    role: aux
    purpose: >
      Отмены выплаты в этом процессе нет: любая попытка отменить одобренную
      советом выплату отклоняется с ошибкой. Принятое советом решение
      исполняется, кассир его не пересматривает — при неверных реквизитах он
      уточняет их у получателя и проводит перевод. Отказать можно только до
      выплаты и только советом.


# ── Секция 3. Граф состояний ────────────────────────────────────────────────
entity: branch::aids
entity_human: Заявление на материальную помощь
entity_source: cpp/branch/src/

# Запись заявления живёт, пока оно на рассмотрении совета или ожидает
# выплаты кассиром. Финал — выплата либо отказ совета — завершает жизненный
# цикл: запись удаляется, история заявления, решение совета и причина отказа
# сохраняются в журнале действий и в решении совета.
states:
  - name: proposed
    human: На рассмотрении совета
    description: >
      Заявление подписано получателем и внесено на рассмотрение совета.
      Ожидается решение совета по типовому процессу решения совета.
      Средства остаются на персональном кошельке и доступны получателю.
    kind: normal

  - name: authorized
    human: Решение принято, ожидает выплаты
    description: >
      Совет принял положительное решение по заявлению и подписал протокол.
      Заявка передана кассиру и ждёт фактического банковского перевода.
      Средства остаются на персональном кошельке до подтверждения перевода:
      если получатель израсходует их раньше, выплата не пройдёт.
    kind: normal

transitions:
  - from: "∅"
    to: proposed
    action: branch::createaid
    actor: trusted
    guards:
      - Получатель — активный пайщик кооператива.
      - Получатель состоит доверенным лицом либо председателем указанного кооперативного участка.
      - Заявление подписано самим получателем.
      - На персональном кошельке получателя достаточно средств на момент подачи.
      - Заявление с таким идентификатором ещё не подавалось.

  - from: proposed
    to: authorized
    action: branch::onaidauth
    actor: council
    guards:
      - Совет рассмотрел заявление и принял положительное решение по типовому процессу решения совета.
      - Председатель подписал Протокол совета о выплате материальной помощи.

  - from: proposed
    to: "∅"
    action: branch::onaiddecl
    actor: council
    guards:
      - Совет рассмотрел заявление и отказал в выплате — либо срок рассмотрения
        истёк. Заявление закрывается, деньги с персонального кошелька не
        списывались и остаются доступны получателю в полном объёме — он может
        распорядиться ими иначе или подать заявление заново.

  - from: authorized
    to: "∅"
    action: branch::aidconfirm
    actor: gateway
    ledger_code: p.brn.aid
    operations:
      - o.brn.aid
    guards:
      - Решение совета по заявлению принято и протокол подписан.
      - Кассир подтвердил фактический банковский перевод получателю.
      - На персональном кошельке получателя достаточно средств.


# ── Секция 4. Сценарий ──────────────────────────────────────────────────────
scenario:
  steps:
    - step: 1
      title: Подача заявления на рассмотрение совета
      actor: trusted
      action: branch::createaid
      description: >
        Доверенный или председатель кооперативного участка видит на своём
        столе сумму, распределённую на него по итогам исполненных заказов
        участка. Он выбирает, какую её часть получить деньгами, подписывает
        заявление на материальную помощь и вносит его на рассмотрение совета.
      pre:
        - Получатель состоит доверенным лицом либо председателем участка.
        - На персональном кошельке получателя есть распределённые средства.
      post:
        - Заявление подписано получателем.
        - Заявление внесено на рассмотрение совета.

    - step: 2
      title: Рассмотрение заявления советом
      actor: council
      action: branch::onaidauth
      description: >
        Совет рассматривает заявление по типовому процессу решения совета —
        на очном заседании или в форме заочного голосования — и принимает
        решение. При положительном решении председатель подписывает протокол,
        и заявка передаётся кассиру. При отрицательном — заявление
        отклоняется, средства остаются на персональном кошельке.
      pre:
        - Заявление внесено на рассмотрение совета.
      post:
        - Совет принял решение по заявлению и подписал протокол.
        - Заявка передана кассиру в реестр исходящих платежей.

    - step: 3
      title: Выплата и подтверждение кассиром
      actor: cashier
      action: branch::aidconfirm
      description: >
        Кассир видит заявку в реестре исходящих платежей вместе с реквизитами,
        которые указал получатель, проводит банковский перевод с расчётного
        счёта кооператива и подтверждает его. В заявке к оплате стоит сумма за
        вычетом налога — именно её кассир и перечисляет. Только после
        подтверждения сумма заявления списывается с персонального кошелька
        получателя: выплаченная часть уходит из кооператива, удержанный налог
        остаётся долгом перед бюджетом.
      pre:
        - Совет принял положительное решение по заявлению.
        - На персональном кошельке получателя достаточно средств.
      post:
        - Деньги перечислены получателю с расчётного счёта кооператива.
        - Персональный кошелёк получателя уменьшен на сумму заявления.
        - Удержанный налог учтён как долг кооператива перед бюджетом.

  alternatives:
    - branch: Совет отказал в выплате
      at_step: 2
      action: branch::onaiddecl
      actor: council
      description: >
        Совет отклонил заявление — например, посчитал выплату
        несвоевременной — либо срок рассмотрения истёк. Движений по
        кошелькам не происходит: средства остаются на персональном кошельке
        получателя, он может распорядиться ими иначе (заказать имущество
        через Стол заказов) или подать заявление повторно.

    - branch: Реквизиты получателя указаны неверно
      at_step: 3
      action: null
      actor: cashier
      description: >
        Если по указанным реквизитам перевод не проходит, отменить выплату
        нельзя — попытка отмены отклоняется с ошибкой. Кассир связывается с
        получателем, уточняет реквизиты и проводит перевод. Отдельной
        процедуры смены реквизитов по заявлению пока нет.

    - branch: Альтернатива — заказать имущество вместо выплаты
      at_step: 1
      action: null
      actor: trusted
      description: >
        Вместо материальной помощи получатель может перевести распределённые
        средства в членский кошелёк Стола заказов и заказать на них
        имущество как обычный пайщик. Такой перевод оставляет средства внутри
        кооператива, поэтому решения совета и заявления не требует — это
        отдельная команда типового процесса распределения членских взносов
        участка.

# ── Секция 5. Документы и подписи ───────────────────────────────────────────
# Заявление получателя — собственный документ процесса (вносится на
# рассмотрение совета). Протокол совета — документ типового процесса решения
# совета (по стандарту sov.decision), подписывается председателем после
# принятия положительного решения.
documents:
  - action: branch::createaid
    title: Заявление на выплату материальной помощи
    registry_id: 1109
    signed_by: [trusted]
    stored_in: aids.statement
    note: "Подписывается получателем перед внесением заявления на рассмотрение совета. Содержит участок, сумму выплаты и оговорку об удержании налога кооперативом. Источник правды — components/cooptypes/src/cooperative/registry/1109.BranchFinancialAidStatement"

  - action: null
    title: Протокол совета о выплате материальной помощи
    registry_id: 1112
    signed_by: [chairman]
    stored_in: aids.protocol
    note: "Протокол по типовому процессу решения совета (стандарт sov.decision). Подписывается председателем после принятия советом положительного решения. Источник правды — components/cooptypes/src/cooperative/registry/1112.BranchFinancialAidProtocol"

# ── Секция 6. Операции (Ledger2) ────────────────────────────────────────────
operations:
  - ledger_code: o.brn.aid
    human_name: Материальная помощь доверенному участка
    wallet_op: BURN
    # L1 — двойная запись (целевое финансирование → расчётный счёт)
    debit: 86                      # Целевое финансирование
    credit: 51                     # Расчётный счёт
    wallet_from: w.brn.person      # Персональный кошелёк доверенного участка
    wallet_to: null                # деньги уходят из системы банковским переводом
    l3:
      - user_wallet: w.brn.person
        user_ref: aids.username
        available_delta: -(aids.amount - налог)
        blocked_delta: null
    amount_ref: aids.amount − налог
    triggered_by: branch::aidconfirm
    description: >
      Выплата материальной помощи с расчётного счёта кооператива по решению
      совета: персональный кошелёк получателя уменьшается, деньги уходят из
      системы. Дт 86 / Кт 51 — использование целевого финансирования. Сумма
      операции — заявление за вычетом удержанного налога: именно её получил
      кассир в заявке и перечислил получателю. Пока совет не принял решение и
      кассир не подтвердил перевод, движения по кошельку не происходит.

  - ledger_code: o.brn.aidtax
    human_name: Удержание налога из материальной помощи
    wallet_op: TRANSFER
    # L1 — двойная запись (целевое финансирование → расчёты с бюджетом)
    debit: 86                      # Целевое финансирование
    credit: 68                     # Расчёты по налогам и сборам
    wallet_from: w.brn.person      # Персональный кошелёк доверенного участка
    wallet_to: w.sov.ndfl          # Удержанный налог к перечислению (общекооперативный)
    l3:
      - user_wallet: w.brn.person
        user_ref: aids.username
        available_delta: -налог
        blocked_delta: null
    amount_ref: налог (13 % от aids.amount, в полных рублях)
    triggered_by: branch::aidconfirm
    description: >
      Кооператив как налоговый агент удерживает налог на доходы физических лиц
      из материальной помощи. Проводится той же транзакцией, что и выплата:
      с персонального кошелька получателя уходит вся сумма заявления, но
      удержанная часть не покидает кооператив — она становится обязательством
      перед бюджетом. Дт 86 / Кт 68. Налог считается по ставке 13 % и
      округляется до полного рубля, как того требует налоговый учёт.
`,xp=`# ─────────────────────────────────────────────────────────────────────────────
# Стандарт «Собрание пайщиков и решение участка».
#
# Контракт branch ведёт универсальный механизм собраний пайщиков: от объявления
# собрания и присоединения участников до голосования бюллетенями и утверждения
# протокола председателем собрания. Свободное решение фиксируется протоколом и
# на этом завершается. Решение об учреждении кооперативного участка дополнительно
# выносится на рассмотрение совета и по его утверждению создаёт участок.
#
# Источники в коде:
#   • cpp/branch/src/createdec.cpp   — объявление собрания и повестки
#   • cpp/branch/src/joindec.cpp     — присоединение участника
#   • cpp/branch/src/startdec.cpp    — открытие голосования (с назначением председателя)
#   • cpp/branch/src/votedec.cpp     — бюллетень участника
#   • cpp/branch/src/closedec.cpp    — утверждение протокола председателем
#   • cpp/branch/src/exec.cpp        — заявление в совет (для учреждения участка)
#   • cpp/branch/src/confirmdec.cpp  — учреждение участка по решению совета
# ─────────────────────────────────────────────────────────────────────────────

process_type: brn.decide
id: public_branch_decide_process
title: Собрание пайщиков и решение участка
slug: decide
status: proposed
contract: branch
summary: >
  От объявления собрания пайщиков и присоединения участников до голосования
  бюллетенями и утверждения протокола председателем. Свободное решение
  фиксируется протоколом; решение об учреждении кооперативного участка
  выносится на совет и по его утверждению создаёт участок.
purpose: >
  «Собрание пайщиков и решение участка» — способ для пайщиков собраться в
  любой момент и принять решение по своей повестке. Инициатор объявляет
  собрание, желающие присоединяются, председатель собрания открывает
  голосование, участники голосуют бюллетенями (за / против / воздержался по
  каждому вопросу), председатель утверждает протокол. Свободное решение на
  этом завершается как документ. Решение об учреждении кооперативного участка
  председатель направляет на рассмотрение совета; по утверждению советом
  участок создаётся с указанными реквизитами.

roles:
  - participant       # Пайщик-инициатор / участник / голосующий
  - chairman          # Председатель собрания (для учреждения участка — будущий председатель участка)
  - soviet            # Совет — утверждение учреждения участка

# ── Действия контракта ───────────────────────────────────────────────────────
actions:
  - name: branch::createdec
    human: Объявить собрание
    actor: Пайщик
    role: opener
    purpose: >
      Инициатор формирует повестку дня и подписывает предложение о проведении
      собрания. Для учреждения кооперативного участка повестка включает вопросы
      об организации участка, адресе привязки и избрании председателя. Собрание
      открывается для присоединения участников.

  - name: branch::joindec
    human: Присоединиться к собранию
    actor: Пайщик
    role: progress
    purpose: >
      Пайщик входит в состав участников собрания.

  - name: branch::startdec
    human: Открыть голосование
    actor: Пайщик
    role: progress
    purpose: >
      Организатор собрания — он же председатель собрания по праву его создания —
      открывает голосование, указывая избираемого собранием председателя
      кооперативного участка из числа присоединившихся участников, а также
      адрес привязки участка, определённый собранием. Повестку в этот момент
      можно дополнить вопросами, внесёнными участниками на собрании. Открыть
      голосование можно только при наличии не менее трёх участников собрания —
      иначе кворум недостижим и собрание можно лишь отменить. Окно голосования
      отмеряется автоматически и составляет 15 минут — голосование проходит прямо
      на собрании.

  - name: branch::votedec
    human: Подать бюллетень
    actor: Пайщик
    role: progress
    purpose: >
      Участник подаёт подписанный бюллетень с волеизъявлением (за / против /
      воздержался) по каждому вопросу повестки. Подсчёт голосов ведёт система.
      Бюллетень публикуется в реестре документов и привязывается к собранию.

  - name: branch::closedec
    human: Утвердить протокол
    actor: Пайщик
    role: closer
    purpose: >
      Председатель собрания закрывает голосование и утверждает протокол решения
      своей подписью. Протокол публикуется в реестре документов и завершает
      пакет документов собрания (бюллетени и протокол собираются вместе).
      Свободное решение на этом завершается. Решение об учреждении участка
      переходит к исполнению.

  - name: branch::exec
    human: Направить заявление в совет
    actor: Пайщик
    role: progress
    purpose: >
      Председатель собрания формирует заявление в совет об учреждении
      кооперативного участка; к нему прилагаются протокол собрания и бюллетени.
      Вопрос выносится на рассмотрение совета.
    links:
      - process_type: sov.authpkg
        label: Типовой процесс решения совета

  - name: branch::confirmdec
    human: Учредить участок по решению совета
    actor: Совет
    role: closer
    purpose: >
      По утверждению советом кооперативный участок создаётся с указанными
      реквизитами (наименование, адрес привязки, избранный председатель).

  - name: branch::declinedec
    human: Отклонить решением совета
    actor: Совет
    role: rollback
    purpose: >
      При отказе совета вопрос об учреждении участка снимается; причина
      фиксируется в журнале.

  - name: branch::canceldec
    human: Отменить собрание
    actor: Пайщик
    role: rollback
    purpose: >
      Инициатор сворачивает собрание до вынесения вопроса на совет.

operations: []
`,Mp=`# ─────────────────────────────────────────────────────────────────────────────
# Стандарт «Членские взносы кооперативного участка» — экономика участка:
# как накапливается общий кошелёк участка и как формируется доходная часть
# председателя и доверенных из потока членских взносов через их участок.
#
# Приоритет общего кошелька. Когда заказ Стола заказов исполнен окончательно
# (заказчик получил имущество и поставил финальную подпись на акте выдачи),
# членский взнос по заказу принимается окончательно и ПОЛНОСТЬЮ зачисляется
# в общий кошелёк участка выдачи. Из общего кошелька в первую очередь
# оплачиваются плановые расходы участка, и только остаток сверх планового
# резерва ближайших 30 дней председатель распределяет между собой и
# доверенными — отдельной командой, на выбранную сумму, частично и сколько
# угодно раз.
#
# Плановые расходы участка ведутся в учётной системе кооператива (вне
# блокчейна): автоматизированная служба не пропустит распределение, после
# которого в общем кошельке осталось бы меньше, чем нужно на плановые
# расходы ближайших 30 дней. Оплата расходов разрешена всегда — в этом и
# состоит их приоритет.
#
# Веса вместо процентов: доля участника = его вес / сумма весов. Добавление
# или удаление доверенного перебалансирует доли автоматически на следующих
# распределениях — ничего не блокируется и никуда не переносится; чтобы
# сохранить прежние условия, председатель меняет веса.
#
# Условия распределения универсальны: они задаются на участке для каждого
# контракта-источника отдельно (сегодня источник один — Стол заказов; другие
# потребительские программы смогут использовать ту же методику со своими
# условиями).
#
# Распределённым доверенный распоряжается двумя способами. Перевести в
# членский кошелёк Стола заказов и заказать имущество как обычный пайщик он
# может сам — средства остаются внутри кооператива. Получить деньги
# материальной помощью на свой счёт можно только по решению совета —
# отдельный типовой процесс «Материальная помощь доверенного кооперативного
# участка».
#
# Общий кошелёк участка — источник оплаты расходов участка (типовой процесс
# «Оплата расхода кооперативного участка»), закупки впрок (заказ участка от
# имени кооператива для пополнения витрины-остатка) и распределений.
#
# **Движение средств:** членский взнос заказа лежит в кооперативном пуле
# резервов взносов с момента создания заказа; при финализации он целиком
# уходит в общий кошелёк участка; при распределении выбранная председателем
# сумма расходится по персональным кошелькам доверенных через транзитный
# пул распределения — все движения внутри целевого финансирования
# (счёт 86), без бухгалтерских проводок.
#
# Канон формата:
#   coopenomics-docs/docs/standards/_spec/canon.md
# ─────────────────────────────────────────────────────────────────────────────

# ── Секция 1. Паспорт ───────────────────────────────────────────────────────
process_type: p.brn.fees
id: public_branch_fees_process
title: Членские взносы кооперативного участка
slug: fees
status: proposed
contract: branch
purpose: >
  Определяет, как живёт экономика кооперативного участка: каждый исполненный
  заказ Стола заказов приносит участку членский взнос, который целиком
  накапливается в общем кошельке участка. Сначала из общего кошелька
  оплачиваются плановые расходы участка, и только свободный остаток сверх
  планового резерва ближайших 30 дней председатель распределяет между собой
  и доверенными.

  Председатель участка назначает веса участникам распределения — себе и
  доверенным. Распределение — его осознанная команда: он сам решает, какую
  сумму и когда раздать; сумма раскладывается пропорционально весам. Можно
  распределять не всё и несколько раз; нераспределённое остаётся в общем
  кошельке на расходы и закупку впрок.

  Накопления формируют только взносы исполненных заказов: пока заказ не
  закрыт финальной подписью заказчика, его взнос лежит в резерве и в общий
  кошелёк участка не попадает. При отмене заказа взнос возвращается
  заказчику.

  Распределённым доверенный распоряжается двояко. Заказать на эти средства
  имущество через Стол заказов он может сам, без решения совета: перевод в
  членский кошелёк программы оставляет средства внутри кооператива —
  меняется лишь программа, по которой они учитываются. А получить деньги
  материальной помощью на свой счёт можно только по решению совета: такая
  выплата выводит средства из кооператива, и решение о ней принимает совет,
  а не сам получатель.
roles:
  - chairman   # председатель кооперативного участка — назначает веса, распределяет
  - trusted    # доверенный кооперативного участка — получатель распределения
  - backend    # Автоматизированная служба кооператива

# ── Секция 2. Действия контракта (блокчейн-уровень) ─────────────────────────
actions:
  - name: branch::accrue
    human: Зачислить членский взнос в общий кошелёк участка
    actor: backend
    role: progress
    purpose: >
      При финализации заказа Стол заказов зачисляет фактический членский
      взнос целиком в общий кошелёк участка выдачи. Никакого немедленного
      персонального распределения не происходит — средства сперва работают
      на участок. Зачисление происходит внутри процесса поставки: заказ и
      есть то событие, по которому взнос поступил, поэтому процессом эту
      операцию называет Стол заказов, а не экономика участка.

  - name: branch::setweight
    human: Назначить вес участника распределения
    actor: chairman
    role: progress
    purpose: >
      Председатель участка назначает или меняет вес участника —
      себе или доверенному — в распределении членских взносов от
      выбранного контракта-источника. Доля участника равна его весу,
      делённому на сумму всех весов участка по этому источнику.

  - name: branch::delweight
    human: Исключить участника из распределения
    actor: chairman
    role: progress
    purpose: >
      Участник исключается из распределения: его вес удаляется, сумма
      весов уменьшается, доли остальных вырастают автоматически на
      следующих распределениях. Уже распределённые средства остаются на
      персональном кошельке исключённого. При удалении доверенного из
      участка его веса по всем источникам снимаются сами.

  - name: branch::distribute
    human: Распределить средства общего кошелька между участниками
    actor: chairman
    role: closer
    purpose: >
      Председатель указывает сумму из общего кошелька участка — она
      раскладывается между участниками пропорционально весам. Команда
      проходит только если после неё в общем кошельке остаётся не меньше
      планового резерва расходов ближайших 30 дней (контролирует
      автоматизированная служба). Копеечные остатки округления остаются
      в общем кошельке. История распределений видна по самим командам —
      отдельного реестра раундов не ведётся.

  - name: branch::convert
    human: Перевести персональные средства в кошелёк Стола заказов
    actor: trusted
    role: progress
    purpose: >
      Доверенный (или председатель) переводит средства со своего
      персонального кошелька в членский кошелёк Стола заказов — и
      дальше заказывает на них имущество как обычный пайщик.

# ── Секция 3. Сущность и состояния ──────────────────────────────────────────
# Собственной сущности с жизненным циклом у процесса нет: зачисление взноса
# привязано к заказу Стола заказов, а каждое распределение — одноактовая
# команда председателя, история которой сохраняется в журнале действий
# автоматически. Реестр весов branch::weights + агрегат branch::weighttotals —
# настройки без жизненного цикла: запись либо есть (участник в распределении),
# либо отсутствует.
entity: null
entity_human: null
entity_source: cpp/branch/src/

states: []

transitions: []

# Условия команды распределения (branch::distribute):
#   - команду подаёт председатель этого кооперативного участка
#     (проверяет автоматизированная служба);
#   - после распределения общий кошелёк покрывает плановые расходы
#     ближайших 30 дней (проверяет автоматизированная служба);
#   - веса распределения настроены (сумма весов больше нуля);
#   - в общем кошельке достаточно средств на распределяемую сумму.

# ── Секция 4. Операции ledger2 ──────────────────────────────────────────────
operations:
  - ledger_code: o.brn.common
    human_name: Членский взнос в общий кошелёк участка
    wallet_op: TRANSFER
    # L1 — без проводки (оба кошелька на 86)
    debit: null
    credit: null
    wallet_from: w.mkt.fee         # Резерв членских взносов под заказы (кооперативный пул)
    wallet_to: w.brn.common        # Общий кошелёк членских взносов участка
    l3:
      - user_wallet: w.brn.common
        user_ref: braname          # разрез ведётся по участку, не по пайщику
        available_delta: +взнос
        blocked_delta: null
    amount_ref: фактический членский взнос исполненного заказа (100%)
    triggered_by: branch::accrue
    description: >
      Весь членский взнос исполненного заказа накапливается в общем
      кошельке участка — приоритет общего кошелька: сначала расходы
      участка, затем распределения и закупка впрок. По бухгалтерии — без
      проводки (движение внутри целевого финансирования, счёт 86).

  - ledger_code: o.brn.retfee
    human_name: Возврат членского взноса из общего кошелька участка
    wallet_op: TRANSFER
    debit: null
    credit: null
    wallet_from: w.brn.common      # Общий кошелёк членских взносов участка
    wallet_to: w.mkt.fee           # Резерв членских взносов под заказы (кооперативный пул)
    l3:
      - user_wallet: w.brn.common
        user_ref: braname          # разрез ведётся по участку, не по пайщику
        available_delta: -возвращаемая доля взноса
        blocked_delta: null
    amount_ref: доля членского взноса, приходящаяся на возвращаемое имущество
    triggered_by: branch::retfee
    description: >
      Обратный ход зачисления: когда пайщик возвращает имущество по гарантии,
      участок возвращает и полученный за него членский взнос — заказчику
      возвращается полная уплаченная сумма, а не только стоимость имущества.
      Взнос уходит тем же путём, каким пришёл, и дальше доходит до членского
      кошелька заказчика уже в процессе возврата. По бухгалтерии — без
      проводки (движение внутри целевого финансирования, счёт 86).
      Средства должны быть на общем кошельке участка: взнос поступает туда
      сразу при выдаче заказа, а возврат приходит в течение гарантийного
      срока, и участок мог успеть распределить или потратить эти средства.
      Тогда приём возврата не проходит, и председатель сперва пополняет общий
      кошелёк участка.

  - ledger_code: o.brn.release
    human_name: Изъятие из общего кошелька участка на распределение
    wallet_op: TRANSFER
    debit: null
    credit: null
    wallet_from: w.brn.common      # Общий кошелёк членских взносов участка
    wallet_to: w.brn.pool          # Транзитный пул распределения участка
    l3:
      - user_wallet: w.brn.common
        user_ref: braname
        available_delta: -доля
        blocked_delta: null
    amount_ref: доля участника = сумма раунда × вес / Σ весов
    triggered_by: branch::distribute
    description: >
      Первая половина шага распределения: доля участника изымается из
      общего кошелька участка в транзитный пул. Транзитный пул пуст вне
      команды распределения — обе половины выполняются вместе. По
      бухгалтерии — без проводки (счёт 86).

  - ledger_code: o.brn.person
    human_name: Распределение членского взноса доверенному участка
    wallet_op: TRANSFER
    debit: null
    credit: null
    wallet_from: w.brn.pool        # Транзитный пул распределения участка
    wallet_to: w.brn.person        # Персональный кошелёк доверенного участка
    l3:
      - user_wallet: w.brn.person
        user_ref: weights.username
        available_delta: +доля
        blocked_delta: null
    amount_ref: доля участника = сумма раунда × вес / Σ весов
    triggered_by: branch::distribute
    description: >
      Вторая половина шага распределения: доля из транзитного пула
      зачисляется на персональный кошелёк участника. По бухгалтерии —
      без проводки (движение внутри целевого финансирования, счёт 86).

  - ledger_code: o.brn.conv
    human_name: Перевод персональных средств в членский кошелёк Стола заказов
    wallet_op: TRANSFER
    debit: null
    credit: null
    wallet_from: w.brn.person      # Персональный кошелёк доверенного
    wallet_to: w.mkt.member        # Членский кошелёк «Стола заказов» пайщика
    l3:
      - user_wallet: w.brn.person
        user_ref: username
        available_delta: -amount
        blocked_delta: null
      - user_wallet: w.mkt.member
        user_ref: username
        available_delta: +amount
        blocked_delta: null
    amount_ref: сумма перевода
    triggered_by: branch::convert
    description: >
      Доверенный направляет заработанное на заказы для себя: средства
      переходят в членский кошелёк Стола заказов, и дальше он действует
      как обычный пайщик программы. Требуется подписанное соглашение
      ЦПП «Стол заказов». По бухгалтерии — без проводки (оба кошелька
      на счёте 86).
`,Dp=`# ─────────────────────────────────────────────────────────────────────────────
# Стандарт «Расход кооперативного участка» — оплата расхода участка деньгами
# из его общего кошелька членских взносов.
#
# Общий кошелёк участка пополняется членскими взносами исполненных заказов
# (типовой процесс «Членские взносы кооперативного участка») и имеет
# приоритет расходов: плановые расходы участка оплачиваются в первую
# очередь, и только остаток сверх планового резерва ближайших 30 дней
# распределяется между председателем и доверенными или направляется на
# закупку впрок.
#
# Плановые расходы участка (что, когда, сколько и по каким реквизитам
# оплатить) ведутся в учётной системе кооператива, вне блокчейна: участок
# планирует расходы вперёд, автоматизированная служба считает резерв
# ближайших 30 дней и не пропускает использование общего кошелька, после
# которого резерв оказался бы непокрыт.
#
# **Движение средств:** председатель участка подаёт расход — сумма сразу
# уходит из общего кошелька участка в пул расходов участка и перестаёт быть
# доступной распределению. Дальше расходом занимается общесистемная
# подсистема расходов кооператива (типовой процесс «Расход по служебной
# записке»): совет принимает решение, кассир платит по реквизитам получателя
# либо выдаёт аванс под отчёт, получатель отчитывается документами. Когда
# расход завершён — отклонён советом или закрыт после отчёта — всё, что не
# было потрачено, возвращается в общий кошелёк участка и снова доступно
# распределению.
#
# Пул расходов участка — транзитный: он показывает, сколько средств участка
# отдано под расходы прямо сейчас. Он же технически необходим, поскольку
# подсистема расходов работает с кооперативным пулом, а общий кошелёк
# участка ведёт разрез по участку.
#
# Канон формата:
#   coopenomics-docs/docs/standards/_spec/canon.md
# ─────────────────────────────────────────────────────────────────────────────

# ── Секция 1. Паспорт ───────────────────────────────────────────────────────
process_type: p.brn.spend
id: public_branch_spend_process
title: Расход кооперативного участка
slug: spend
status: proposed
contract: branch
purpose: >
  Кооперативный участок оплачивает свой расход — аренду, коммунальные
  услуги, хозяйственные нужды — из общего кошелька членских взносов
  участка.

  Председатель участка подаёт расход со служебной запиской: суммой,
  назначением и получателями по каждой позиции. Средства участка сразу
  выделяются под этот расход и перестают быть доступными распределению.
  Решение о самой выплате принимает совет; после одобрения кассир платит
  по реквизитам получателя либо выдаёт пайщику аванс под отчёт, а пайщик
  отчитывается документами. Неизрасходованное возвращается участку.
roles:
  - chairman   # председатель участка — планирует и подаёт расходы участка
  - council    # совет кооператива — принимает решение о выплате
  - cashier    # кассир кооператива — проводит банковский перевод
  - backend    # Автоматизированная служба кооператива

# ── Секция 2. Действия контракта (блокчейн-уровень) ─────────────────────────
actions:
  - name: branch::createexp
    human: Подать расход участка
    actor: chairman
    role: opener
    purpose: >
      Средства участка на сумму расхода уходят из общего кошелька в пул
      расходов участка, а сама служебная записка передаётся общесистемной
      подсистеме расходов — на решение совета и последующую оплату.
    links:
      - process_type: p.exp.expns
        label: Расход по служебной записке

  - name: branch::onexpdone
    human: Расход завершён
    actor: backend
    role: closer
    purpose: >
      Подсистема расходов сообщает участку, что расход закрыт после отчёта
      либо отклонён советом. Всё, что не было потрачено, возвращается в
      общий кошелёк участка и снова доступно распределению.

# ── Секция 3. Граф состояний ────────────────────────────────────────────────
entity: branch::expenses
entity_human: Расход участка
entity_source: cpp/branch/src/

# Запись расхода живёт только пока расход в работе; завершение расхода —
# терминал жизненного цикла: запись удаляется, история движений средств
# сохраняется в журнале действий.
states:
  - name: in_progress
    human: В работе
    description: >
      Средства участка выделены под расход; расход рассматривается советом,
      оплачивается кассиром либо ожидает отчёта получателя аванса.

transitions:
  - from: "∅"
    to: in_progress
    action: branch::createexp
    actor: chairman
    guards:
      - Служебная записка подписана подавшим её председателем участка.
      - Расход содержит хотя бы одну позицию, сумма каждой больше нуля.
      - Подающий — председатель этого кооперативного участка.
      - На общем кошельке участка достаточно средств на сумму расхода.
      - Расход с таким идентификатором ещё не подавался.

  - from: in_progress
    to: "∅"
    action: branch::onexpdone
    actor: backend
    guards:
      - Сообщение пришло от подсистемы расходов кооператива.
      - Фактически потрачено не больше, чем участок выделил под расход.

# ── Секция 4. Операции ledger2 ──────────────────────────────────────────────
operations:
  - ledger_code: o.brn.expfnd
    human_name: Выделение средств участка под расход
    wallet_op: TRANSFER
    # Оба кошелька — целевое финансирование, движения по счетам нет.
    debit: null
    credit: null
    wallet_from: w.brn.common      # Общий кошелёк членских взносов участка
    wallet_to: w.brn.expns         # Пул расходов участка
    l3:
      - user_wallet: w.brn.common
        user_ref: braname          # разрез ведётся по участку
        available_delta: -amount
        blocked_delta: null
    amount_ref: сумма расхода
    triggered_by: branch::createexp
    description: >
      При подаче расхода его сумма уходит из общего кошелька участка в пул
      расходов и перестаёт быть доступной распределению между участниками.

  - ledger_code: o.brn.expunf
    human_name: Возврат неизрасходованных средств участку
    wallet_op: TRANSFER
    debit: null
    credit: null
    wallet_from: w.brn.expns
    wallet_to: w.brn.common
    l3:
      - user_wallet: w.brn.common
        user_ref: braname
        available_delta: +amount
        blocked_delta: null
    amount_ref: разница между выделенным и фактически потраченным
    triggered_by: branch::onexpdone
    description: >
      Совет отклонил расход либо расход закрыт на сумму меньше выделенной —
      остаток возвращается участку и снова доступен распределению.

  - ledger_code: o.brn.spend
    human_name: Прямая оплата расхода участка по реквизитам
    wallet_op: BURN
    # L1 — Дт 86 / Кт 51: целевое финансирование уменьшается,
    # деньги уходят с расчётного счёта кооператива.
    debit: 86
    credit: 51
    wallet_from: w.brn.expns
    wallet_to: null
    amount_ref: сумма позиции расхода
    triggered_by: подсистема расходов кооператива
    description: >
      Кассир подтвердил банковский перевод получателю-организации по
      реквизитам, указанным в расходе. Деньги уходят из системы; получателя
      на цепи нет — расчёт идёт по реквизитам из служебной записки.

  - ledger_code: o.brn.expadv
    human_name: Выдача аванса под отчёт по расходу участка
    wallet_op: TRANSFER
    debit: 86
    credit: 51
    wallet_from: w.brn.expns
    wallet_to: w.exp.adv           # Подотчётные средства пайщика
    l3:
      - user_wallet: w.exp.adv
        user_ref: получатель аванса
        available_delta: +amount
        blocked_delta: null
    amount_ref: сумма позиции расхода
    triggered_by: подсистема расходов кооператива
    description: >
      Кассир выдал пайщику аванс под отчёт на его реквизиты. За пайщиком
      числится подотчётная сумма до того, как он отчитается документами.

  - ledger_code: o.brn.exprpt
    human_name: Закрытие подотчёта по расходу участка
    wallet_op: BURN
    # Проводка сделана при выдаче аванса — отчёт её не повторяет.
    debit: null
    credit: null
    wallet_from: w.exp.adv
    wallet_to: null
    l3:
      - user_wallet: w.exp.adv
        user_ref: получатель аванса
        available_delta: -amount
        blocked_delta: null
    amount_ref: фактически потраченная сумма
    triggered_by: подсистема расходов кооператива
    description: >
      Пайщик отчитался документами о потраченном — подотчётная сумма с него
      снимается.

  - ledger_code: o.brn.expret
    human_name: Возврат неиспользованного аванса
    wallet_op: TRANSFER
    debit: 51
    credit: 86
    wallet_from: w.exp.adv
    wallet_to: w.brn.expns
    l3:
      - user_wallet: w.exp.adv
        user_ref: получатель аванса
        available_delta: -amount
        blocked_delta: null
    amount_ref: неиспользованная часть аванса
    triggered_by: подсистема расходов кооператива
    description: >
      Пайщик вернул неиспользованную часть аванса — деньги пришли на
      расчётный счёт кооператива и вернулись в пул расходов участка.

  - ledger_code: o.brn.expovr
    human_name: Доплата сверх выданного аванса
    wallet_op: TRANSFER
    debit: 86
    credit: 51
    wallet_from: w.brn.expns
    wallet_to: w.exp.adv
    l3:
      - user_wallet: w.exp.adv
        user_ref: получатель аванса
        available_delta: +amount
        blocked_delta: null
    amount_ref: сумма перерасхода
    triggered_by: подсистема расходов кооператива
    description: >
      Пайщик потратил больше выданного аванса — кооператив доплачивает
      разницу, после чего подотчёт закрывается на полную сумму.
`,$p=`# ─────────────────────────────────────────────────────────────────────────────
# Стандарт «Приём доверенного лица кооперативного участка».
#
# Контракт branch ведёт приём доверенных лиц участка по заявлению: пайщик
# подаёт заявление и договор о полной материальной ответственности, председатель
# участка одобряет встречной подписью, и пайщик становится доверенным лицом.
#
# Источники в коде:
#   • cpp/branch/src/reqtrusted.cpp  — подача заявки
#   • cpp/branch/src/apprtrusted.cpp — одобрение председателем участка
#   • cpp/branch/src/decltrusted.cpp — отклонение председателем участка
# ─────────────────────────────────────────────────────────────────────────────

process_type: brn.trust
id: public_branch_trust_process
title: Приём доверенного лица кооперативного участка
slug: trust
status: proposed
contract: branch
summary: >
  Пайщик подаёт заявление и договор о полной материальной ответственности;
  председатель кооперативного участка одобряет встречной подписью, и пайщик
  входит в состав доверенных лиц участка (не более трёх).
purpose: >
  «Приём доверенного лица кооперативного участка» позволяет пайщику стать
  доверенным лицом участка по заявлению. Заявитель подписывает заявление и
  договор о полной материальной ответственности; председатель участка
  рассматривает заявку и одобряет её встречной подписью на договоре, после
  чего пайщик получает права доверенного лица.

roles:
  - participant       # Пайщик-заявитель
  - chairman          # Председатель кооперативного участка

# ── Действия контракта ───────────────────────────────────────────────────────
actions:
  - name: branch::reqtrusted
    human: Подать заявку доверенного
    actor: Пайщик
    role: opener
    purpose: >
      Пайщик подаёт заявку на приём доверенным лицом выбранного участка, прилагая
      подписанные заявление и договор о полной материальной ответственности.

  - name: branch::apprtrusted
    human: Одобрить доверенного
    actor: Председатель участка
    role: closer
    purpose: >
      Председатель участка одобряет заявку встречной подписью на договоре
      материальной ответственности; пайщик входит в состав доверенных лиц
      участка.

  - name: branch::decltrusted
    human: Отклонить заявку доверенного
    actor: Председатель участка
    role: rollback
    purpose: >
      Председатель участка отклоняет заявку; причина фиксируется в журнале.

operations: []
`,jp=`# ─────────────────────────────────────────────────────────────────────────────
# Стандарт «Заём пайщику» — кооператив выдаёт беспроцентный целевой заём из
# паевого фонда и получает его обратно при сдаче проекта.
#
# Заём выдаётся в момент авторизации советом; возврат происходит при приёме
# результата работы (акт приёма-передачи).
# ─────────────────────────────────────────────────────────────────────────────

# ── Секция 1. Паспорт ───────────────────────────────────────────────────────
process_type: p.cap.debt
id: public_capital_debt_process
title: Выдача займа пайщику
slug: debt
status: proposed
contract: capital
purpose: >
  «Заём пайщику» — кооператив выдаёт пайщику беспроцентный целевой заём
  из паевого фонда на срок проекта. Заявку последовательно одобряют
  председатель и совет, выплата уходит пайщику через кассира. Возврат
  происходит автоматически при сдаче акта приёма-передачи проекта —
  отдельная заявка на возврат не нужна.
roles:
  - contributor
  - chairman
  - soviet
  - gateway_operator

# ── Секция 2. Действия контракта ────────────────────────────────────────────
actions:
  - name: capital::createdebt
    human: Подать заявление
    actor: contributor
    role: opener
    purpose: >
      Пайщик создаёт заявку на беспроцентный целевой заём. Заявка на заём
      зарегистрирована. Под неё резервируется часть доступного пайщику лимита
      на сумму займа.
  - name: capital::approvedebt
    human: Одобрить решением председателя
    actor: chairman
    role: progress
    purpose: >
      Председатель добавляет к заявке документ-одобрение займа. Заявка переходит
      в состояние «Председатель одобрил» и ждёт авторизации советом.
  - name: capital::debtauthcnfr
    human: Авторизовать выплату
    actor: soviet
    role: progress
    purpose: >
      Совет авторизует выдачу займа. С этого момента заём считается выданным:
      деньги списываются с расчётного счёта кооператива и направляются пайщику,
      а кассир получает поручение на выплату.
  - name: capital::debtpaycnfrm
    human: Подтвердить выплату
    actor: gateway_operator
    role: closer
    purpose: >
      Кассир подтверждает зачисление займа на банковский счёт пайщика. Заявка
      переходит в состояние «Заём выплачен».
      Это завершающее действие: запись о займе сохраняется до момента его
      возврата — возврат происходит автоматически при сдаче результата работы
      (акт приёма-передачи проекта).
  - name: capital::declinedebt
    human: Отклонить
    actor: chairman
    role: reject
    purpose: >
      Председатель или совет отклоняет заявку на заём. Зарезервированный под заём
      лимит пайщика возвращается, заявка удаляется, никаких денежных движений
      не происходит.
  - name: capital::debtpaydcln
    human: Отклонить выплату
    actor: gateway_operator
    role: reject
    purpose: >
      Платёжная система не смогла провести выплату займа (техническая ошибка
      или возврат). Заявка на заём аннулируется.

# ── Секция 3. Граф состояний ────────────────────────────────────────────────
entity: capital::debt
entity_human: Долг пайщика
entity_source: app/debt_managment/create_debt/

states:
  - name: created
    human: Заявление подано
    description: >
      Заявка на заём создана. Под неё зарезервирована часть доступного пайщику
      лимита на запрошенную сумму.
    kind: normal
  - name: approved
    human: Председатель одобрил
    description: >
      К заявке добавлен документ-одобрение председателя. Заявка ждёт авторизации
      советом.
    kind: normal
  - name: authorized
    human: Совет авторизовал
    description: >
      Совет авторизовал заём: деньги списываются с расчётного счёта кооператива
      и учитываются как финансовое вложение, а кассир получил поручение на
      выплату пайщику.
    kind: normal
  - name: paid
    human: Заём выплачен
    description: >
      Кассир подтвердил зачисление займа пайщику. Заём числится за пайщиком
      до момента возврата при сдаче акта приёма-передачи проекта.
    kind: final
  - name: removed
    human: Отклонено
    description: >
      Заявка отклонена на одном из этапов; запись удалена, никаких денежных
      движений по займу не было.
    kind: virtual
    virtual: true

transitions:
  - from: "∅"
    to: created
    action: capital::createdebt
    actor: contributor
    guards:
      - Пайщик имеет статус active и участвует в проекте.
      - Доступный пайщику лимит подтверждён и актуален.
      - Доступного пайщику лимита достаточно для запрошенной суммы займа.
      - Заявление подписано ЭЦП.

  - from: created
    to: approved
    action: capital::approvedebt
    actor: chairman
    guards:
      - Документ одобрения председателя подписан.

  - from: approved
    to: authorized
    action: capital::debtauthcnfr
    actor: soviet
    guards:
      - Документ авторизации совета подписан.

  - from: authorized
    to: paid
    action: capital::debtpaycnfrm
    actor: gateway_operator
    ledger_code: o.cap.lend
    operations:
      - o.cap.lend
    guards:
      - Кассир (платёжная система) подтвердил зачисление займа пайщику.

  - from: created
    to: removed
    action: capital::declinedebt
    actor: chairman
    guards:
      - Председатель или совет отклонили заявку.

  - from: approved
    to: removed
    action: capital::declinedebt
    actor: soviet
    guards:
      - Совет отклонил заявку.

  - from: authorized
    to: removed
    action: capital::debtpaydcln
    actor: gateway_operator
    guards:
      - Платёж не прошёл / отклонён платёжной системой.

# ── Секция 4. Сценарий ──────────────────────────────────────────────────────
scenario:
  steps:
    - step: 1
      title: Подача заявления на заём
      actor: contributor
      action: capital::createdebt
      description: >
        Пайщик подаёт заявление на беспроцентный целевой заём.
        Заявка на заём регистрируется, под неё резервируется часть доступного
        пайщику лимита на запрошенную сумму.

    - step: 2
      title: Одобрение председателем
      actor: chairman
      action: capital::approvedebt
      description: >
        Председатель добавляет к заявке документ-одобрение. Заявка переходит
        в состояние «Председатель одобрил».

    - step: 3
      title: Авторизация советом и выдача займа
      actor: soviet
      action: capital::debtauthcnfr
      description: >
        Совет авторизует выплату. Заём считается выданным: деньги списываются
        с расчётного счёта кооператива и учитываются как финансовое вложение,
        а кассир получает поручение на выплату пайщику.
        Заявка переходит в состояние «Совет авторизовал».

    - step: 4
      title: Подтверждение выплаты
      actor: gateway_operator
      action: capital::debtpaycnfrm
      description: >
        Кассир подтверждает зачисление средств пайщику. Заявка переходит
        в состояние «Заём выплачен».
        Запись о займе остаётся в реестре до его возврата — возврат происходит
        автоматически при сдаче результата работы (акт приёма-передачи проекта).

  alternatives:
    - branch: Отказ председателя или совета
      at_step: 2
      action: capital::declinedebt
      actor: chairman
      description: >
        Заявка отклонена. Зарезервированный под заём лимит пайщика возвращается,
        заявка удаляется, денежных движений не происходит.
    - branch: Отказ платёжной системы
      at_step: 4
      action: capital::debtpaydcln
      actor: gateway_operator
      description: >
        Платёж не прошёл или отклонён. Заявка на заём аннулируется.

# ── Секция 5. Документы и подписи ───────────────────────────────────────────
documents:
  - step: 1
    title: Заявление на получение займа
    registry_id: 1050
    signed_by: [contributor]
    stored_in: debts.statement

  - step: 2
    title: Решение совета о предоставлении займа (одобрение председателем)
    registry_id: 1051
    signed_by: [chairman]
    stored_in: debts.approved_statement

  - step: 3
    title: Решение совета о предоставлении займа (авторизация совета)
    registry_id: 1051
    signed_by: [soviet]
    stored_in: debts.authorization

# ── Секция 6. Операции ──────────────────────────────────────────────────────
operations:
  - ledger_code: o.cap.lend
    human_name: Выдача пайщику беспроцентного займа
    wallet_op: ISSUE
    wallet_from: ''
    wallet_to: w.cap.loan            # Выданные пайщикам беспроцентные займы
    debit: 58                  # Финансовые вложения
    credit: 51                 # Расчётный счёт
    amount_ref: debt.amount
    triggered_by: capital::debtpaycnfrm
    description: >
      Выдача беспроцентного займа пайщику. Деньги уходят с расчётного счёта
      кооператива (Кт 51) и появляются как финансовое вложение Дт 58.
      Кошелёк «Выданные пайщикам беспроцентные займы» фиксирует
      обязательство пайщика перед кооперативом.

# Возврат займа (o.cap.repay) не описывается в этом стандарте: он происходит
# при сдаче акта приёма-передачи проекта и относится к процессу «Приём РИД»
# (p.cap.rid) — там и описан.

`,Bp=`# ─────────────────────────────────────────────────────────────────────────────
# Стандарт «Инвестиция в ЦПП «Благорост»» — пайщик переводит часть своего
# паевого взноса в инвестицию в программу «Благорост». Деньги остаются на
# расчётном счёте кооператива, бухгалтерские проводки не возникают; меняется
# только то, как средства учитываются у пайщика.
#
# Процесс состоит из одного действия. Средства переходят между двумя
# аналитическими кошельками одного пайщика и не затрагивают бухгалтерские
# счета (оба относятся к паевому фонду).
# ─────────────────────────────────────────────────────────────────────────────

# ── Секция 1. Паспорт ───────────────────────────────────────────────────────
process_type: p.cap.invest
id: public_capital_invest_process
title: Приём инвестиции в программу
slug: invest
status: proposed
contract: capital
purpose: >
  «Приём инвестиции в программу» — пайщик переводит часть своих ранее
  внесённых паевых средств в инвестицию в программу «Благорост».
  Бухгалтерских проводок нет: деньги остаются на расчётном счёте
  кооператива, но в учёте пайщика они теперь считаются инвестицией.
  После этого пайщик может участвовать в проектах программы как
  исполнитель.
roles:
  - contributor

# ── Секция 2. Действия контракта ────────────────────────────────────────────
actions:
  - name: capital::createpinv
    human: Создать инвестицию
    actor: contributor
    role: closer
    purpose: >
      Завершающее одношаговое действие: пайщик подписывает заявление об
      инвестировании в «Благорост», и указанная сумма переходит из его
      свободных паевых средств в инвестицию в программу «Благорост».
      Бухгалтерские проводки при этом не возникают.

# ── Секция 3. Граф состояний ────────────────────────────────────────────────
entity: capital::invest
entity_human: Инвестиция
entity_source: cpp/capital/app/invests_managment/invest_in_program/invest_to_program/createpinv.cpp

states:
  - name: invested
    human: Инвестировано
    description: >
      Сумма переведена из свободных паевых средств пайщика в его инвестицию
      в программу «Благорост». Бухгалтерия не затронута — это перенос внутри
      паевого фонда.
    kind: final

transitions:
  - from: "∅"
    to: invested
    action: capital::createpinv
    actor: contributor
    ledger_code: o.cap.invest
    operations:
      - o.cap.invest
    guards:
      - Пайщик состоит в кооперативе и активен.
      - Сумма не больше доступного остатка свободных паевых средств пайщика.
      - Заявление об инвестировании не повторяет ранее поданное (нет дубля).
      - Заявление об инвестировании подписано пайщиком.

# ── Секция 4. Сценарий ──────────────────────────────────────────────────────
scenario:
  steps:
    - step: 1
      title: Создание инвестиции в «Благорост»
      actor: contributor
      action: capital::createpinv
      description: >
        Пайщик подписывает заявление об инвестировании. Указанная сумма
        переходит из его свободных паевых средств в инвестицию в программу
        «Благорост»; бухгалтерские проводки не возникают, средства остаются
        в паевом фонде. Факт инвестиции фиксируется в учёте.
      pre:
        - Пайщик активен в кооперативе.
        - Достаточно свободных паевых средств у пайщика.
        - Заявление подписано ЭЦП.
      post:
        - Сумма переведена из свободных паевых средств пайщика в его инвестицию в программу «Благорост».
        - Сумма зачислена в инвестицию пайщика в программу «Благорост».
        - Создана запись инвестиции в таблице.

  alternatives: []

# ── Секция 5. Документы и подписи ───────────────────────────────────────────
documents:
  - action: capital::createpinv
    title: Заявление об инвестировании денежных средств в Благорост
    registry_id: 1030
    signed_by: [ Участник ]
    stored_in: invests.statement

# ── Секция 6. Операции ──────────────────────────────────────────────────────
operations:
  - ledger_code: o.cap.invest
    human_name: Инвестиция в ЦПП «Благорост» (перенос между кошельками)
    wallet_op: TRANSFER
    wallet_from: w.wal.share   # ЦК — паевая часть пайщика
    wallet_to: w.cap.blago     # ЦПП «Благорост» — единый кошелёк программы у пайщика
    debit: null
    credit: null
    amount_ref: invest.quantity
    triggered_by: capital::createpinv
    description: >
      Аналитический перенос средств между двумя кошельками одного пайщика.
      Бухгалтерских проводок нет — деньги остаются на расчётном счёте
      кооператива, но в учёте пайщика они теперь считаются инвестицией
      в «Благорост», а не свободными паевыми средствами.

`,Fp=`# ─────────────────────────────────────────────────────────────────────────────
# Стандарт «Приём имущественного паевого взноса» — оформление имущества
# (не РИД, не деньги) как паевого взноса в программу «Благорост».
#
# Процесс приёма имущества: предложение пайщика, одобрение председателя и
# совета, затем оформление приёма-передачи двумя подписями. На завершающей
# подписи имущество зачисляется пайщику в программу «Благорост» как паевой
# взнос.
# ─────────────────────────────────────────────────────────────────────────────

# ── Секция 1. Паспорт ───────────────────────────────────────────────────────
process_type: p.cap.prop
id: public_capital_property_process
title: Приём имущественного паевого взноса
slug: property
status: proposed
contract: capital
purpose: >
  «Приём имущественного паевого взноса» — пайщик передаёт кооперативу
  имущество (не деньги, не результат интеллектуальной деятельности)
  как паевой взнос в программу «Благорост». Председатель и совет
  одобряют предложение, передача оформляется двумя последовательными
  подписями на акте приёма-передачи: сначала пайщик, затем председатель.
roles:
  - contributor
  - chairman
  - soviet

# ── Секция 2. Действия контракта ────────────────────────────────────────────
actions:
  - name: capital::createpgprp
    human: Подать предложение
    actor: contributor
    role: opener
    purpose: >
      Пайщик создаёт предложение о внесении имущества как паевого взноса.
      Контракт фиксирует запись со статусом \`created\`, в реестр сохраняется
      описание имущества и сумма оценки.
  - name: capital::approvepgprp
    human: Одобрить решением председателя
    actor: chairman
    role: progress
    purpose: >
      Председатель добавляет к предложению документ-одобрение. Статус → \`approved\`.
  - name: capital::authpgprp
    human: Авторизовать советом
    actor: soviet
    role: progress
    purpose: >
      Совет авторизует приём имущества. Статус → \`authorized\`.
  - name: capital::act1pgprp
    human: Подписать акт (первая подпись)
    actor: contributor
    role: progress
    purpose: >
      Пайщик ставит первую подпись на акте приёма-передачи имущества —
      передача имущества от пайщика. Статус → \`act1\`.
  - name: capital::act2pgprp
    human: Принять имущество
    actor: chairman
    role: closer
    purpose: >
      Председатель ставит вторую подпись на акте приёма-передачи — это
      завершающее действие. После него имущество (по сумме оценки) зачисляется
      пайщику в программу «Благорост» как паевой взнос.
  - name: capital::declinepgprp
    human: Отклонить
    actor: chairman
    role: reject
    purpose: >
      Председатель или совет отклоняет предложение. Запись удаляется,
      имущество как паевой взнос не зачисляется.

# ── Секция 3. Граф состояний ────────────────────────────────────────────────
entity: capital::program_property
entity_human: Имущественный взнос
entity_source: cpp/capital/src/property/

states:
  - name: created
    human: Предложение подано
    description: >
      Пайщик подал предложение о внесении имущества. Запись содержит
      описание имущества, сумму оценки и hash.
    kind: normal
  - name: approved
    human: Председатель одобрил
    description: К предложению добавлен документ-одобрение председателя.
    kind: normal
  - name: authorized
    human: Совет авторизовал
    description: Совет авторизовал приём имущества.
    kind: normal
  - name: act1
    human: Первая подпись на акте
    description: Пайщик поставил первую подпись на акте приёма-передачи имущества.
    kind: normal
  - name: act2
    human: Имущество принято
    description: >
      Председатель поставил вторую подпись на акте приёма-передачи: имущество
      учтено как паевой взнос пайщика в программе «Благорост».
    kind: final
  - name: removed
    human: Отклонено
    description: >
      Предложение отклонено на одном из этапов; запись удалена,
      имущество как паевой взнос не зачислялось.
    kind: virtual
    virtual: true

transitions:
  - from: "∅"
    to: created
    action: capital::createpgprp
    actor: contributor
    guards:
      - Пайщик имеет статус active.
      - Это имущество ещё не подавалось ранее, а сумма его оценки больше нуля.
      - Описание имущества не пусто.
      - Заявление подписано ЭЦП.

  - from: created
    to: approved
    action: capital::approvepgprp
    actor: chairman
    guards:
      - Документ одобрения председателя подписан.

  - from: approved
    to: authorized
    action: capital::authpgprp
    actor: soviet
    guards:
      - Документ авторизации совета подписан.

  - from: authorized
    to: act1
    action: capital::act1pgprp
    actor: contributor
    guards:
      - Первая подпись на акте приёма-передачи поставлена пайщиком.

  - from: act1
    to: act2
    action: capital::act2pgprp
    actor: chairman
    ledger_code: o.cap.actprp
    operations:
      - o.cap.actprp
    guards:
      - Вторая подпись на акте приёма-передачи поставлена председателем.

  - from: created
    to: removed
    action: capital::declinepgprp
    actor: chairman
    guards:
      - Председатель или совет отклонили предложение.

  - from: approved
    to: removed
    action: capital::declinepgprp
    actor: soviet
    guards:
      - Совет отклонил приём имущества.

# ── Секция 4. Сценарий ──────────────────────────────────────────────────────
scenario:
  steps:
    - step: 1
      title: Подача предложения
      actor: contributor
      action: capital::createpgprp
      description: >
        Пайщик подаёт предложение о внесении имущества: описание, оценка,
        property_hash. Контракт создаёт запись со статусом \`created\`.

    - step: 2
      title: Одобрение председателем
      actor: chairman
      action: capital::approvepgprp
      description: Председатель добавляет документ-одобрение. Статус → \`approved\`.

    - step: 3
      title: Авторизация советом
      actor: soviet
      action: capital::authpgprp
      description: Совет авторизует приём имущества. Статус → \`authorized\`.

    - step: 4
      title: Подписание акта-1
      actor: contributor
      action: capital::act1pgprp
      description: >
        Пайщик ставит первую подпись на акте приёма-передачи имущества — передача имущества от пайщика. Статус → \`act1\`.

    - step: 5
      title: Приём имущества (вторая подпись)
      actor: chairman
      action: capital::act2pgprp
      description: >
        Председатель ставит вторую подпись на акте приёма-передачи —
        завершающее действие. После него имущество учтено как паевой взнос
        пайщика в программе «Благорост».

  alternatives:
    - branch: Отказ председателя или совета
      at_step: 2
      action: capital::declinepgprp
      actor: chairman
      description: >
        Предложение отклонено. Запись удаляется, имущество как паевой взнос
        не зачисляется.

# ── Секция 5. Документы и подписи ───────────────────────────────────────────
documents:
  - step: 1
    title: Заявление об инвестировании имущества в благорост
    registry_id: 1070
    signed_by: [contributor]
    stored_in: pgproperties.statement

  - step: 3
    title: Решение совета об инвестировании имущества в благорост
    registry_id: 1071
    signed_by: [soviet]
    stored_in: pgproperties.authorization

  - step: 4
    title: Акт приема-передачи имущества в благорост (первая подпись пайщика)
    registry_id: 1072
    signed_by: [contributor]
    stored_in: pgproperties.act

  - step: 5
    title: Акт приема-передачи имущества в благорост (вторая подпись председателя)
    registry_id: 1072
    signed_by: [contributor, chairman]
    stored_in: pgproperties.act          # то же поле act: вторая подпись ложится на документ первого (статус act1 → act2)

# ── Секция 6. Операции ──────────────────────────────────────────────────────
operations:
  - ledger_code: o.cap.actprp
    human_name: Паевой взнос (имущественный) по программе «Благорост»
    wallet_op: ISSUE
    wallet_from: ''
    wallet_to: w.cap.blago            # ЦПП «Благорост» — единый кошелёк программы у пайщика
    debit: 4                   # Нематериальные активы
    credit: 80                 # Паевой фонд (складочный капитал)
    amount_ref: property.amount
    triggered_by: capital::act2pgprp
    description: >
      Зачисление имущества (по сумме оценки) в программу «Благорост» как
      паевой взнос пайщика: кооператив принял имущество, и оно учтено как
      часть паевого фонда.

`,Up=`# ─────────────────────────────────────────────────────────────────────────────
# Стандарт «Приём результата интеллектуальной деятельности» — оформление РИД
# участника проекта программы «Благорост» как имущественного паевого взноса
# с финальной конвертацией сегмента между ЦК и программой.
#
# Многоэтапный процесс с пятью ключевыми денежными событиями:
# зачисление РИД в паевой фонд при одобрении; приём РИД в нематериальные
# активы кооператива по акту приёма-передачи; при необходимости — закрытие
# беспроцентного займа участника; и финальное распределение паевого взноса
# между Цифровым Кошельком участника и программой «Благорост».
#
# Запись результата сопровождает процесс от подачи заявления до финального
# распределения паевого взноса.
#
# Источники правды в коде:
#   • cpp/capital/capital.hpp                                            — actions
#   • cpp/capital/app/generation/create_commit/{createcmmt,approvecmmt,declinecmmt}.cpp — коммит
#   • cpp/capital/app/result_submission/push_result/{pushrslt,approverslt,authrslt,declrslt,signact1,signact2,convertsegm}.cpp — приём + конвертация
#   • cpp/lib/core/ledger2/operations.hpp                                 — o.cap.commit/accept/repay/cnvshr/cnvbl
# ─────────────────────────────────────────────────────────────────────────────

# ── Секция 1. Паспорт ───────────────────────────────────────────────────────
process_type: p.cap.rid
id: public_capital_rid_process
title: Приём результата интеллектуальной деятельности
slug: rid
status: proposed
contract: capital
purpose: >
  «Приём результата интеллектуальной деятельности» — участник проекта
  программы «Благорост» оформляет результат своей работы (РИД) как
  имущественный паевой взнос. Сначала фиксируется коммит работы по
  проекту, по завершении проекта — заявление участника, одобрение
  председателя, авторизация совета и акт приёма-передачи в двух
  подписях. Если у участника был беспроцентный заём проекта, он
  закрывается в момент приёма РИД — без отдельной заявки.
  Завершающее действие — распределение полученного паевого взноса:
  часть участник может забрать в Цифровой Кошелёк, часть оставить
  в программе «Благорост».

roles:
  - contributor       # Участник проекта (исполнитель РИД)
  - master            # Мастер проекта — одобряет коммит
  - chairman          # Председатель — одобряет результат и подписывает акт-2
  - soviet            # Совет — авторизует приём РИД

# ── Секция 2. Действия контракта ────────────────────────────────────────────
actions:
  - name: capital::createcmmt
    human: Создать коммит РИД
    actor: Участник
    role: opener
    purpose: >
      Участник проекта подаёт коммит результата интеллектуальной деятельности.
      Контракт создаёт запись коммита, рассчитывает delta-распределение
      по формуле проекта.

  - name: capital::approvecmmt
    human: Одобрить коммит
    actor: Мастер
    role: progress
    purpose: >
      Мастер проекта одобряет коммит. На этом этапе РИД зачисляется в паевой
      фонд участника и учитывается как вложение во внеоборотные активы
      кооператива.

  - name: capital::declinecmmt
    human: Отклонить коммит
    actor: Мастер
    role: reject
    purpose: >
      Мастер отказывает в одобрении коммита. Запись удаляется, зачисление
      РИД в паевой фонд не происходит.

  - name: capital::pushrslt
    human: Подать заявление
    actor: Участник
    role: progress
    purpose: >
      После завершения проекта участник подаёт заявление о результате —
      указывает сумму взноса и сумму долга к погашению. Контракт создаёт
      запись результата (status \`created\`) и направляет заявление председателю
      на одобрение.

  - name: capital::approverslt
    human: Одобрить результат
    actor: Председатель
    role: progress
    purpose: >
      Председатель одобряет заявление участника о результате. Прикладывается
      одобренное заявление, статус результата → \`approved\`. Заявление
      направляется в совет на авторизацию.

  - name: capital::authrslt
    human: Авторизовать советом
    actor: Совет
    role: progress
    purpose: >
      Совет авторизует приём результата (через sov.authpkg). Прикладывается
      протокол решения совета (registry_id=1041), статус результата →
      \`authorized\`. Открывается возможность подписания акта приёма-передачи.

  - name: capital::declrslt
    human: Отклонить результат
    actor: Совет
    role: reject
    purpose: >
      Совет отклоняет результат на любой стадии (created/approved/authorized).
      Запись результата удаляется, статус сегмента возвращается в \`ready\` —
      участник может повторно подать заявление.

  - name: capital::signact1
    human: Подписать акт (исполнитель)
    actor: Участник
    role: progress
    purpose: >
      Участник ставит первую подпись на акте приёма-передачи РИД —
      подтверждение передачи РИД от исполнителя.

  - name: capital::signact2
    human: Принять РИД в паевой фонд
    actor: Председатель
    role: progress
    purpose: >
      Председатель ставит вторую подпись на акте приёма-передачи. РИД
      принимается в нематериальные активы кооператива; накопленный паевой
      взнос участника пока остаётся неразделённым — до финального
      распределения. Если у участника был беспроцентный заём проекта, он
      закрывается в этот же момент. Запись результата сохраняется до
      финального распределения паевого взноса.

  - name: capital::convertsegm
    human: Распределить паевой взнос
    actor: Участник
    role: closer
    purpose: >
      Участник распределяет накопленный паевой взнос между Цифровым
      Кошельком и программой «Благорост». Бухгалтерская запись уже была
      сделана при приёме РИД в нематериальные активы, поэтому новых
      проводок не возникает — это только перераспределение средств
      участника. После распределения процесс по этому результату завершён.

# ── Секция 3. Граф состояний ────────────────────────────────────────────────
entity: "capital::commit → capital::result"
entity_human: "Коммит РИД → принятый РИД"
entity_source: "cpp/capital/app/generation/create_commit/, cpp/capital/app/result_submission/push_result/"

states:
  - name: commit_created
    human: Коммит подан
    description: >
      Участник зафиксировал коммит РИД в проекте, рассчитаны delta-распределения
      по формуле. Ожидается одобрение мастера.
    kind: normal

  - name: commit_approved
    human: Коммит одобрен
    description: >
      Мастер одобрил коммит. РИД зачислен в паевой фонд участника.
      Ожидается завершение проекта и подача заявления о результате.
    kind: normal

  - name: pushed
    human: Заявление подано
    description: >
      Участник подал заявление о результате (после завершения проекта).
      Запись результата в статусе \`created\`, заявление направлено
      председателю на одобрение.
    kind: normal

  - name: result_approved
    human: Председатель одобрил
    description: >
      Председатель одобрил заявление участника. Заявление приложено
      к результату, направлено в совет для авторизации.
    kind: normal

  - name: result_authorized
    human: Совет авторизовал
    description: >
      Совет авторизовал приём РИД. Протокол решения совета приложен.
      Открывается этап подписания акта приёма-передачи.
    kind: normal

  - name: act1_signed
    human: Первая подпись на акте
    description: >
      Участник поставил первую подпись на акте приёма-передачи РИД.
      Ожидается вторая подпись от председателя.
    kind: normal

  - name: accepted
    human: РИД принят в паевой фонд
    description: >
      Председатель поставил вторую подпись на акте приёма-передачи: РИД
      принят в нематериальные активы кооператива. Накопленный паевой взнос
      участника пока остаётся неразделённым — до финального распределения.
      Если у участника был беспроцентный заём проекта, он закрылся.
      Запись результата хранится до распределения паевого взноса.
    kind: normal

  - name: converted
    human: Паевой взнос распределён
    description: >
      Участник распределил полученный паевой взнос между Цифровым Кошельком
      и программой «Благорост». Накопленный по этому результату взнос
      полностью разнесён. Процесс РИД завершён.
    kind: final

  - name: removed
    human: Отклонено
    description: >
      Коммит отклонён мастером, либо результат отклонён советом. Запись
      удалена. Если коммит ранее был одобрен мастером, ранее зачисленный
      в паевой фонд РИД остаётся учтённым до момента признания результата.
    kind: virtual
    virtual: true

transitions:
  - from: "∅"
    to: commit_created
    action: capital::createcmmt
    actor: Участник
    guards:
      - Проект и пайщик активны.
      - commit_hash уникален, creator_hours > 0.
      - Подписано приложение к проекту.

  - from: commit_created
    to: commit_approved
    action: capital::approvecmmt
    actor: Мастер
    ledger_code: o.cap.commit
    operations:
      - o.cap.commit
    guards:
      - Мастер проекта валиден.

  - from: commit_created
    to: removed
    action: capital::declinecmmt
    actor: Мастер
    guards:
      - Мастер отказал в одобрении коммита.

  - from: commit_approved
    to: pushed
    action: capital::pushrslt
    actor: Участник
    guards:
      - Заявление о результате подписано ЭЦП участника (registry_id=1040).
      - Сегмент в статусе READY, проект завершён (RESULT).
      - Сумма взноса соответствует intellectual_cost сегмента.

  - from: pushed
    to: result_approved
    action: capital::approverslt
    actor: Председатель
    guards:
      - Одобренное заявление подписано председателем.
      - Результат в статусе CREATED, сегмент в STATEMENT.

  - from: result_approved
    to: result_authorized
    action: capital::authrslt
    actor: Совет
    guards:
      - Документ-протокол решения совета подписан (registry_id=1041).
      - Результат в статусе APPROVED, сегмент в APPROVED.

  - from: result_authorized
    to: act1_signed
    action: capital::signact1
    actor: Участник
    guards:
      - Акт-1 подписан исполнителем (registry_id=1042).
      - Результат в статусе AUTHORIZED.

  - from: act1_signed
    to: accepted
    action: capital::signact2
    actor: Председатель
    ledger_code: o.cap.accept
    operations:
      - o.cap.accept
      - o.cap.repay
    guards:
      - Акт-2 подписан председателем (registry_id=1042).

  - from: accepted
    to: converted
    action: capital::convertsegm
    actor: Участник
    ledger_code: o.cap.cnvshr
    operations:
      - o.cap.cnvshr
      - o.cap.cnvbl
    guards:
      - Заявление о конвертации подписано участником.
      - Сегмент актуален (rfrshsegment до вызова).
      - Сумма wallet_amount + capital_amount равна доступной части паевого взноса.

  - from: pushed
    to: removed
    action: capital::declrslt
    actor: Совет
    guards:
      - Совет отклоняет результат.

  - from: result_approved
    to: removed
    action: capital::declrslt
    actor: Совет
    guards:
      - Совет отклоняет результат.

  - from: result_authorized
    to: removed
    action: capital::declrslt
    actor: Совет
    guards:
      - Совет отклоняет результат после авторизации.

# ── Секция 4. Сценарий ──────────────────────────────────────────────────────
scenario:
  steps:
    - step: 1
      title: Создание коммита РИД
      actor: Участник
      action: capital::createcmmt
      description: >
        Участник проекта оформляет коммит результата интеллектуальной
        деятельности: контракт создаёт запись со статусом \`commit_created\`,
        рассчитывает delta-распределение по формуле проекта.
      pre:
        - Пайщик подписал приложение к проекту.
      post:
        - Запись commits в статусе \`created\`.

    - step: 2
      title: Одобрение коммита мастером
      actor: Мастер
      action: capital::approvecmmt
      description: >
        Мастер проекта одобряет коммит. РИД зачисляется в паевой фонд
        участника.
      pre:
        - Коммит в статусе \`created\`.
      post:
        - Коммит в статусе \`approved\`.
        - РИД зачислен в паевой фонд участника.

    - step: 3
      title: Заявление о результате
      actor: Участник
      action: capital::pushrslt
      description: >
        После завершения проекта участник подаёт заявление о результате
        (registry_id=1040), указывая сумму взноса и сумму долга к погашению.
      pre:
        - Проект в статусе RESULT, сегмент в READY.
      post:
        - Создана запись results в статусе CREATED.

    - step: 4
      title: Одобрение результата председателем
      actor: Председатель
      action: capital::approverslt
      description: >
        Председатель одобряет заявление участника, прикладывает одобренное
        заявление, направляет результат в совет для авторизации.
      pre:
        - Результат в статусе CREATED.
      post:
        - Результат в статусе APPROVED.

    - step: 5
      title: Авторизация советом
      actor: Совет
      action: capital::authrslt
      description: >
        Совет (через sov.authpkg) принимает решение об авторизации приёма
        РИД, прикладывает протокол (registry_id=1041).
      pre:
        - Результат в статусе APPROVED.
      post:
        - Результат в статусе AUTHORIZED.

    - step: 6
      title: Первая подпись на акте приёма-передачи
      actor: Участник
      action: capital::signact1
      description: >
        Участник ставит первую подпись на акте приёма-передачи —
        подтверждение передачи РИД исполнителем.
      pre:
        - Результат в статусе AUTHORIZED.
      post:
        - Результат в статусе ACT1.

    - step: 7
      title: Приём РИД в паевой фонд (вторая подпись)
      actor: Председатель
      action: capital::signact2
      description: >
        Председатель ставит вторую подпись на акте приёма-передачи. РИД
        принимается в нематериальные активы кооператива; накопленный паевой
        взнос участника пока остаётся неразделённым. Если у участника был
        беспроцентный заём проекта, он закрывается в этот же момент, а
        высвобожденная сумма становится доступной на паевом взносе участника.
      pre:
        - Результат в статусе ACT1.
      post:
        - Результат в статусе ACT2 (анкер процесса до конвертации).
        - РИД принят в нематериальные активы кооператива (при наличии займа проекта он закрыт).
        - Сегмент в статусе CONTRIBUTED.

    - step: 8
      title: Распределение паевого взноса (конвертация сегмента)
      actor: Участник
      action: capital::convertsegm
      description: >
        Участник распределяет полученный паевой взнос: часть направляет в
        свой Цифровой Кошелёк, часть оставляет в программе «Благорост».
        Новых проводок не возникает — бухгалтерская запись уже была сделана
        при приёме РИД в нематериальные активы. После распределения процесс
        по этому результату завершён.
      pre:
        - Результат в статусе ACT2, сегмент в CONTRIBUTED.
      post:
        - Накопленный по этому результату паевой взнос участника полностью распределён.
        - Сегмент удалён, объект результата удалён.
        - Паевой взнос распределён между Цифровым Кошельком и программой «Благорост» (любая из частей может быть нулевой).

  alternatives:
    - branch: Отказ мастера на коммите
      at_step: 2
      action: capital::declinecmmt
      actor: Мастер
      description: >
        Мастер не одобрил коммит. Запись удаляется, никаких зачислений
        в паевой фонд не происходит.

    - branch: Отказ совета на результате
      at_step: 5
      action: capital::declrslt
      actor: Совет
      description: >
        Совет отклоняет результат на любой стадии (created/approved/authorized).
        Запись результата удаляется, сегмент возвращается в \`ready\`,
        возможна повторная подача заявления.

# ── Секция 5. Документы и подписи ───────────────────────────────────────────
documents:
  - action: capital::pushrslt
    title: Заявление о взносе результата интеллектуальной деятельности
    registry_id: 1040
    signed_by: [ Участник ]
    stored_in: results.statement

  - action: capital::approverslt
    title: Заявление о взносе результата интеллектуальной деятельности (вторая подпись председателя)
    registry_id: 1040
    signed_by: [ Участник, Председатель ]
    stored_in: results.approved_statement

  - action: capital::authrslt
    title: Протокол решения совета о приеме паевого взноса РИД
    registry_id: 1041
    signed_by: [ Совет ]
    stored_in: results.authorization

  - action: capital::signact1
    title: Акт приема-передачи результата интеллектуальной деятельности (первая подпись участника)
    registry_id: 1042
    signed_by: [ Участник ]
    stored_in: results.act1

  - action: capital::signact2
    title: Акт приема-передачи результата интеллектуальной деятельности (вторая подпись председателя)
    registry_id: 1042
    signed_by: [ Участник, Председатель ]
    stored_in: results.act2

  - action: capital::convertsegm
    title: Заявление о распределении паевого взноса по результату
    registry_id: 1080
    signed_by: [ Участник ]
    stored_in: action_payload.convert_statement

# ── Секция 6. Операции ──────────────────────────────────────────────────────
operations:
  - ledger_code: o.cap.commit
    human_name: Коммит РИД по программе «Благорост»
    wallet_op: ISSUE
    wallet_from: ''
    wallet_to: w.cap.gen           # паевой фонд участника по программе «Благорост»
    debit: 8                   # Вложения во внеоборотные активы
    credit: 80                 # Паевой фонд (складочный капитал)
    amount_ref: commit.delta_amount
    triggered_by: capital::approvecmmt
    description: >
      Зачисление РИД в паевой фонд участника при одобрении мастером.
      РИД учитывается как вложение во внеоборотные активы кооператива
      и формирует паевой фонд.

  - ledger_code: o.cap.accept
    human_name: Приём РИД в паевой фонд
    wallet_op: NONE
    wallet_from: ''                # движения средств участника не происходит — приём идёт только в бухучёте
    wallet_to: ''
    debit: 4                   # Нематериальные активы
    credit: 8                  # Вложения во внеоборотные активы
    amount_ref: segment.available_for_program
    triggered_by: capital::signact2
    description: >
      Приём РИД в нематериальные активы кооператива на полную стоимость
      результата. Накопленный паевой взнос участника при этом остаётся
      неразделённым — до финального распределения.

  - ledger_code: o.cap.repay
    human_name: Возврат беспроцентного займа пайщика по акту-2
    wallet_op: TRANSFER
    wallet_from: w.cap.loan          # Выданные пайщикам беспроцентные займы
    wallet_to: w.wal.share            # ЦК — паевой взнос пайщика
    debit: 80                  # Паевой фонд (складочный капитал)
    credit: 58                 # Финансовые вложения
    amount_ref: debt.amount
    triggered_by: capital::signact2
    description: >
      Опциональная операция при наличии у участника беспроцентного займа
      проекта (см. p.cap.debt). На акте-2 закрытый РИД зачитывает заём:
      финансовое вложение списывается (Кт 58), паевой фонд закрывает
      обязательство (Дт 80), сумма становится доступной на паевом
      взносе пайщика.

  - ledger_code: o.cap.cnvshr
    human_name: 'Конвертация сегмента: РИД → главный кошелёк'
    wallet_op: TRANSFER
    wallet_from: w.cap.gen         # паевой фонд участника по программе «Благорост»
    wallet_to: w.wal.share         # ЦК — паевой взнос пайщика
    debit: ''                  # без бухпроводки — Дт 4 / Кт 8 уже сделана в o.cap.accept
    credit: ''
    amount_ref: convertsegm.wallet_amount
    triggered_by: capital::convertsegm
    description: >
      Часть паевого взноса по результату направляется в Цифровой Кошелёк
      участника. Новой проводки не возникает — бухгалтерская запись была
      сделана ранее при приёме РИД в нематериальные активы.

  - ledger_code: o.cap.cnvbl
    human_name: 'Конвертация сегмента: РИД → ЦПП «Благорост»'
    wallet_op: TRANSFER
    wallet_from: w.cap.gen         # паевой фонд участника по программе «Благорост»
    wallet_to: w.cap.blago         # ЦПП «Благорост» — единый кошелёк программы у пайщика
    debit: ''                  # без бухпроводки — Дт 4 / Кт 8 уже сделана в o.cap.accept
    credit: ''
    amount_ref: convertsegm.capital_amount
    triggered_by: capital::convertsegm
    description: >
      Часть паевого взноса по результату остаётся в программе «Благорост».
      Новой проводки не возникает — бухгалтерская запись была сделана ранее
      при приёме РИД в нематериальные активы.

`,Kp=`# ─────────────────────────────────────────────────────────────────────────────
# Стандарт «Гарантийный возврат имущества» — кооперативный процесс возврата
# имущества пайщиком на склад КУ в пределах гарантийного срока.
#
# Возврат реализован как **compensating forward** — отдельная именованная
# операция o.mkt.return с собственными проводками, семантически обратными
# исходной выдаче (o.mkt.consum). Откат через ledger2::revert НЕ
# используется (упрощение реализации MVP — реверты исключены из системы).
#
# **Модель кошельков:** возврат суммы при гарантии происходит на членский
# кошелёк «Стола заказов» пайщика (w.mkt.member.available восстанавливается);
# средства остаются в программе — заказчик направляет их на следующие заказы
# либо отдельным действием выводит в универсальный членский.
#
# Идентификация кошельков — eosio::name с префиксом w.<contract>.<waltype>.
# Sentinel '' (пустая строка) — «кошелёк вне системы» для ISSUE.
#
# Возврат поставщику и работа с поставщиком по претензиям — out of MVP;
# вернувшееся имущество остаётся на складе КУ как материальный остаток,
# его дальнейшая судьба вне этого процесса.
#
# В процессе участвует 1 ledger2-операция (compensating forward к выдаче):
#   • o.mkt.return  — ISSUE ∅ → w.mkt.member (восстановление .available
#                     на членском «Стола заказов» заказчика) + Дт 10 / Кт 86
#                     (имущество назад на склад через целевое финансирование).
#
# Канон формата:
#   coopenomics-docs/docs/standards/_spec/canon.md
# Источники правды в коде:
#   • cpp/marketplace/marketplace.hpp                 — actions (status: proposed)
#   • cpp/marketplace/src/p.mkt.return/               — реализация
#   • cpp/lib/core/ledger2/operations.hpp             — OPERATION_REGISTRY
#                                                       расширение o.mkt.return
#   • cpp/lib/core/ledger2/processes.hpp              — processes::marketplace::RETURN
#   • cpp/lib/core/ledger2/wallets.hpp                — w.mkt.member (членский «Стола заказов»)
#   • cpp/lib/core/ledger2/accounts.hpp               — Целевое финансирование (86),
#                                                       Материалы (10)
# ─────────────────────────────────────────────────────────────────────────────

# ── Секция 1. Паспорт ───────────────────────────────────────────────────────
process_type: p.mkt.return
id: public_marketplace_return_process
title: Гарантийный возврат имущества
slug: return
status: proposed
contract: marketplace
purpose: >
  Гарантийная защита заказчика по сделкам «Стола заказов». Если после
  получения товара заказчик обнаружил дефект, недокомплект или
  истечение срока годности в пределах гарантии, заданной поставщиком,
  он подаёт заявление на гарантийный возврат. Председатель участка
  сначала рассматривает заявление удалённо — по фото и описанию — и
  принимает одно из двух решений: одобрить очный визит или отказать
  удалённо. Если визит одобрен, заказчик приходит с продукцией на
  участок, председатель очно осматривает товар и выносит финальное
  решение — принять возврат или отказать на месте. При принятии
  возврата товар остаётся на складе участка, а сумма заказа
  возвращается заказчику на программный членский кошелёк Стола
  заказов: он может направить её на следующий заказ программы либо
  вывести в универсальный членский кошелёк отдельным действием.
  При отказе — на этом гарантийный возврат завершён, движений по
  имуществу и средствам не происходит. Дальнейшая судьба возвращённого
  имущества (возврат поставщику, перепоставка, списание) — вне этого
  процесса.
roles:
  - orderer        # пайщик-заказчик, инициатор возврата
  - chairman        # председатель кооперативного участка (КУ)

# ── Секция 2. Действия контракта (блокчейн-уровень) ─────────────────────────
# Имена actions ≤12 символов eosio::name. Контракт описан в целевом виде —
# реализация в .cpp предстоит после согласования стандарта.
actions:
  - name: marketplace::submretrn
    human: Подать заявление на гарантийный возврат
    actor: orderer
    role: opener
    purpose: >
      Заказчик подаёт заявление на гарантийный возврат имущества:
      указывает причину обращения (некондиция, истёк срок годности,
      иное) и прикладывает фотографии товара. Подать заявление можно
      только пока не истёк гарантийный срок, заданный поставщиком.
      Заявление публикуется в реестре документов кооператива в пакете
      процесса заказа со статусом «подан»; итог рассмотрения доводит
      статус до «решён» (принятие) либо «отклонён» (отказ).

  - name: marketplace::aprretrem
    human: Одобрить очный визит
    actor: chairman
    role: progress
    purpose: >
      Председатель участка по результатам удалённого рассмотрения
      решает, что для разбора обращения нужен очный осмотр товара, и
      приглашает заказчика прийти на участок с продукцией.

  - name: marketplace::rejretrem
    human: Отказать удалённо
    actor: chairman
    role: reject
    purpose: >
      Председатель участка по результатам удалённого рассмотрения
      решает отказать в гарантийном возврате с указанием причины — без
      приглашения на очный осмотр. Решение финальное, движений по
      имуществу и средствам не происходит.

  - name: marketplace::accretrn
    human: Принять возврат
    actor: chairman
    role: closer
    purpose: >
      Председатель по результатам очного осмотра принимает гарантийный
      возврат: товар остаётся на складе участка, сумма заказа
      возвращается заказчику на программный членский кошелёк Стола
      заказов.

  - name: marketplace::rejretrn
    human: Отказать на месте
    actor: chairman
    role: reject
    purpose: >
      Председатель по результатам очного осмотра отказывает в
      гарантийном возврате с указанием причины. Заказчик забирает
      товар обратно. Решение финальное, движений по имуществу и
      средствам не происходит.

# ── Секция 3. Граф состояний ────────────────────────────────────────────────
# Сущность: marketplace::return_request (таблица return_requests, scope=coopname).
# Запись заявления живёт только пока решение не принято; любое финальное
# решение (принятие возврата либо отказ) завершает жизненный цикл — запись
# удаляется, история заявления и причины отказов сохраняются в журнале
# действий. Повторный возврат по тому же заказу не открывается.
entity: marketplace::return_request
entity_human: Заявление на гарантийный возврат
entity_source: cpp/marketplace/src/return/

states:
  - name: pending_review
    human: Заявление на рассмотрении
    description: >
      Заявление подано заказчиком и ждёт решения председателя участка.
    kind: normal

  - name: approved_for_visit
    human: Очный визит одобрен
    description: >
      Председатель одобрил очное рассмотрение. Заказчику предстоит
      прийти на участок с продукцией для очного осмотра.
    kind: normal

transitions:
  - from: "∅"
    to: pending_review
    action: marketplace::submretrn
    actor: orderer
    guards:
      - Заявитель — заказчик-пайщик исходного заказа, по которому имущество уже выдано.
      - Гарантийный срок, заданный поставщиком в предложении, ещё не истёк.
      - К заявлению приложены фотографии товара и указана причина возврата.
      - Возвращаемое количество не больше выданного; сумма возврата считается
        от фактической суммы выдачи — от того, что заказчик действительно
        заплатил, а не от цены, по которой заказ размещался.

  - from: pending_review
    to: approved_for_visit
    action: marketplace::aprretrem
    actor: chairman
    guards:
      - Решение принимает кооперативный участок, на котором заказ был выдан.
      - Председатель решил пригласить заказчика на очный осмотр.

  - from: pending_review
    to: "∅"
    action: marketplace::rejretrem
    actor: chairman
    guards:
      - Решение принимает кооперативный участок, на котором заказ был выдан.
      - Председатель решил отказать в гарантийном возврате удалённо с указанием причины.

  - from: approved_for_visit
    to: "∅"
    action: marketplace::accretrn
    actor: chairman
    ledger_code: p.mkt.return
    operations:
      - o.mkt.return
    guards:
      - Решение принимает кооперативный участок, на котором заказ был выдан.
      - Заказчик прибыл на участок с продукцией.
      - Председатель очно осмотрел имущество и решил принять гарантийный
        возврат — сумма заказа возвращается заказчику на программный
        членский кошелёк Стола заказов; дальнейшая судьба возвращённого
        имущества (возврат поставщику, перепоставка, списание) — отдельная
        процедура по регламенту кооператива.

  - from: approved_for_visit
    to: "∅"
    action: marketplace::rejretrn
    actor: chairman
    guards:
      - Решение принимает кооперативный участок, на котором заказ был выдан.
      - Председатель очно осмотрел имущество и решил отказать в гарантийном
        возврате с указанием причины — заказчик забирает товар обратно,
        движений по имуществу и средствам не происходит.

# ── Секция 4. Сценарий ──────────────────────────────────────────────────────
scenario:
  steps:
    - step: 1
      title: Подача заявления
      actor: orderer
      action: marketplace::submretrn
      description: >
        Заказчик подаёт заявление на гарантийный возврат имущества:
        указывает причину обращения, прикладывает фотографии товара,
        ссылается на акт приёма-передачи, по которому получал имущество.
        Подать заявление
        можно только пока не истёк гарантийный срок, заданный
        поставщиком.
      pre:
        - Заказ закрыт, имущество выдано заказчику.
        - Гарантийный срок ещё не истёк.
        - Приложены фотографии товара и указана причина обращения.
      post:
        - Заявление зарегистрировано и направлено председателю на рассмотрение.

    - step: 2
      title: Удалённое рассмотрение — приглашение на очный визит
      actor: chairman
      action: marketplace::aprretrem
      description: >
        Председатель участка изучает заявление и приложенные материалы
        и решает, что для разбора обращения нужен очный осмотр товара.
        Заказчику предстоит прийти на участок с продукцией.
      pre:
        - Заявление на рассмотрении.
      post:
        - Очный визит одобрен.

    - step: 3
      title: Очный осмотр — принятие возврата
      actor: chairman
      action: marketplace::accretrn
      description: >
        Заказчик приходит на участок с продукцией. Председатель очно
        осматривает товар и принимает гарантийный возврат: товар
        остаётся на складе участка, сумма заказа возвращается
        заказчику на программный членский кошелёк Стола заказов.
      pre:
        - Очный визит одобрен.
        - Заказчик прибыл на участок с продукцией.
      post:
        - Товар остаётся на складе участка.
        - Сумма заказа возвращена заказчику на программный членский кошелёк.

  alternatives:
    - branch: Гарантийный срок истёк
      at_step: 1
      action: null
      actor: orderer
      description: >
        Если гарантийный срок поставщика истёк, заявление на гарантийный
        возврат подать нельзя.

    - branch: Удалённое рассмотрение — отказ
      at_step: 2
      action: marketplace::rejretrem
      actor: chairman
      description: >
        Председатель отказывает в гарантийном возврате удалённо с
        указанием причины — например, обращение очевидно не подпадает
        под гарантию. Решение финальное, движений по имуществу и
        средствам не происходит.

    - branch: Очный осмотр — отказ
      at_step: 3
      action: marketplace::rejretrn
      actor: chairman
      description: >
        Председатель отказывает в гарантийном возврате по результатам
        очного осмотра с указанием причины — например, характер
        повреждений не покрывается гарантией. Заказчик забирает товар
        обратно. Решение финальное, движений по имуществу и средствам
        не происходит.

# ── Секция 5. Документы и подписи ───────────────────────────────────────────
# В процессе один документ — заявление пайщика на гарантийный возврат с
# приложенными фотографиями товара. Пайщик подписывает заявление при подаче.
# Принимая возврат на очном осмотре, председатель кооперативного участка
# подписывает то же заявление второй подписью — отдельный документ решения
# не создаётся. Удалённое рассмотрение и отказы оформляются как действия в
# системе (кто, когда и с какой причиной решил), без подписи документа.
documents:
  - action: marketplace::submretrn
    title: Заявление пайщика на гарантийный возврат имущества
    registry_id: 1104
    signed_by: [orderer, chairman]
    stored_in: return_requests.statement
    note: "Пайщик подписывает заявление при подаче. При принятии возврата на очном осмотре председатель кооперативного участка накладывает на то же заявление вторую подпись — это и есть его решение о приёмке, отдельного документа нет."

# ── Секция 6. Операции (Ledger2) ────────────────────────────────────────────
# Возврат полный: пайщику возвращается и стоимость имущества, и уплаченный за
# него членский взнос — иначе гарантийный возврат обходился бы заказчику в
# размер взноса. Отсюда три операции вместо одной:
#   1) o.mkt.return  — стоимость имущества (compensating forward к выдаче,
#      без использования ledger2::revert): восстановление доступных средств на
#      членском кошельке «Стола заказов» заказчика и возврат имущества на склад;
#   2) o.brn.retfee  — членский взнос возвращается из общего кошелька
#      кооперативного участка, куда он был зачислен при выдаче заказа;
#   3) o.mkt.refund  — тот же взнос доходит с пула взносов до членского
#      кошелька заказчика.
# Взнос возвращается ровно тем путём, каким пришёл, только в обратную сторону;
# новых бухгалтерских проводок это не создаёт — средства не покидают целевое
# финансирование, а перекладываются обратно между кошельками.
operations:
  - ledger_code: o.mkt.return
    human_name: Гарантийный возврат — восстановление средств и имущества
    wallet_op: ISSUE
    # L1 — двойная запись: имущество возвращается на склад через целевое
    # финансирование (обратная к выдаче, одной операцией).
    debit: 10                      # Материалы — имущество на складе
    credit: 86                     # Целевое финансирование
    # L2 — восстановление средств на членском кошельке «Стола заказов» заказчика
    wallet_from: null              # эмиссия — источника нет
    wallet_to: w.mkt.member        # Членский кошелёк «Стола заказов» пайщика
    # L3 — пайщику восстанавливается available на членском «Стола заказов»
    user_wallet: w.mkt.member
    user_ref: return_request.orderer
    available_delta: +order.fact_cost
    blocked_delta: null
    amount_ref: order.fact_cost
    triggered_by: marketplace::accretrn
    description: >
      Compensating forward к выдаче имущества (o.mkt.consum). ISSUE на
      членский кошелёк «Стола заказов» заказчика (w.mkt.member) — .available
      +fact_cost (восстановление ранее списанной суммы). Двойная запись
      Дт 10 / Кт 86 — имущество возвращается на склад за счёт целевого
      финансирования (зеркало выдачи). Журнал содержит прикладное поле
      original_consume_op_id (ссылка на исходный o.mkt.consum для
      трассировки) — это не часть инфраструктуры revert. Возвращённая сумма
      остаётся в программе «Стол заказов» — на следующие заказы.

  - ledger_code: o.brn.retfee
    human_name: Возврат членского взноса из общего кошелька кооперативного участка
    wallet_op: TRANSFER
    # Бухгалтерских проводок нет — обе стороны в целевом финансировании.
    debit: null
    credit: null
    wallet_from: w.brn.common      # Общий кошелёк кооперативного участка
    wallet_to: w.mkt.fee           # Пул членских взносов «Стола заказов»
    user_wallet: w.brn.common
    user_ref: return_request.braname
    available_delta: -return_request.fee_refund
    blocked_delta: null
    amount_ref: return_request.fee_refund
    triggered_by: marketplace::accretrn
    description: >
      Членский взнос за возвращаемое имущество уходит обратно из общего
      кошелька кооперативного участка — туда он был зачислен при выдаче
      заказа. Возвращается доля, приходящаяся на возвращаемое количество:
      при возврате всего выданного пайщик получает уплаченный взнос целиком.
      Средства должны быть на общем кошельке участка: взнос поступает туда
      сразу при выдаче, а возврат приходит в течение гарантийного срока, и
      участок мог успеть распределить или потратить эти средства. Тогда приём
      возврата не проходит, и председатель сперва пополняет общий кошелёк.

  - ledger_code: o.mkt.refund
    human_name: Возврат членского взноса пайщику
    wallet_op: TRANSFER
    # Бухгалтерских проводок нет — обе стороны в целевом финансировании.
    debit: null
    credit: null
    wallet_from: w.mkt.fee         # Пул членских взносов «Стола заказов»
    wallet_to: w.mkt.member        # Членский кошелёк «Стола заказов» пайщика
    user_wallet: w.mkt.member
    user_ref: return_request.orderer
    available_delta: +return_request.fee_refund
    blocked_delta: null
    amount_ref: return_request.fee_refund
    triggered_by: marketplace::accretrn
    description: >
      Вторая часть возврата взноса: средства доходят с пула членских взносов
      до членского кошелька «Стола заказов» заказчика. Вместе с возвратом
      стоимости имущества пайщик получает обратно ровно ту сумму, которую
      заплатил за возвращаемое имущество. Возврат идёт двумя шагами, потому
      что общий кошелёк участка ведётся в разрезе участка, а членский —
      в разрезе пайщика, и одним переводом их не связать.

`,Vp=`# ─────────────────────────────────────────────────────────────────────────────
# Стандарт «Прямая поставка-приобретение имущества» — кооперативный процесс,
# при котором поставщик-пайщик передаёт имущество кооперативу, а заказчик-
# пайщик получает его в счёт членского взноса по ЦПП «Стол заказов».
#
# Это базовый процесс контракта Marketplace в режиме членских взносов
# (закупка имущества кооперативом + потребление пайщиком). Содержит
# атомарную серию операций по программному кошельку при создании заказа,
# цикл отсечки заявок поставщика, двухвариантную модель передачи партии
# на участок (самовывоз или через экспедитора), двойные подписи на двух
# актах приёма-передачи — приёмки кооперативом от поставщика и выдачи
# заказчику от кооператива.
#
# **Движение средств:**
# Средства заказчика проходят три состояния внутри программы: паевой взнос
# (откуда берутся деньги при размещении заказа), резерв под конкретный заказ
# (куда они переводятся на время сбора партии) и членский кошелёк Стола
# заказов (куда возвращаются при отмене или недовыдаче и откуда добирается
# доплата). Деньги не покидают программу — остаток идёт на следующие заказы.
# Имущество отслеживается бухгалтерской аналитикой по счёту 10 (учёт по
# складу участка), без отдельного кошелька.
#
# **Денежные шаги процесса:**
# При создании заказа средства заказчика резервируются под заказ; при отмене
# резерв возвращается на членский кошелёк Стола заказов; при доплате
# недостающая сумма вносится дополнительным паевым взносом; при приёмке
# имущество приходуется на склад; поставщику уходит оплата с расчётного
# счёта; при выдаче зарезервированные средства списываются как целевой
# членский взнос.
#
# Канон формата:
#   coopenomics-docs/docs/standards/_spec/canon.md
# ─────────────────────────────────────────────────────────────────────────────

# ── Секция 1. Паспорт ───────────────────────────────────────────────────────
process_type: p.mkt.supply
id: public_marketplace_supply_process
title: Прямая поставка-приобретение имущества
slug: supply
status: proposed
contract: marketplace
purpose: >
  Базовый процесс «Стола заказов»: пайщик-заказчик выбирает у пайщика-
  поставщика имущество, направляет на этот заказ свой членский взнос,
  кооператив принимает имущество на склад участка и затем выдаёт его
  заказчику. Процесс описывает весь путь — от размещения заказа до
  передачи имущества на руки заказчику.

  Как это устроено по шагам.

  Поставщик-пайщик публикует предложение поставить имущество — в нём
  он указывает товар, цену, минимальное количество, при котором ему
  выгодно собрать партию, и срок, до которого собирает заказы. Это
  предложение и есть исходная точка процесса.

  Пока предложение открыто, заказчики-пайщики добавляют к нему свои
  заказы. Этот период называется циклом отсечки заявок — окно, в
  течение которого кооператив принимает заказы под одно предложение
  поставщика. При создании заказа кооператив резервирует средства
  заказчика на программном членском кошельке Стола заказов — до конца
  цикла они не могут быть использованы.

  Когда цикл завершается, кооператив смотрит, набрался ли минимальный
  порог поставки — заданное поставщиком количество заказов, при
  котором партию имеет смысл везти. Если порог набрался — все заказы
  цикла объединяются в одну консолидированную заявку, и она уходит
  поставщику на акцепт. Если не набрался — все заказы цикла
  отменяются, резерв со средств заказчиков снимается.

  Поставщик соглашается выполнить консолидированную заявку, готовит
  партию и передаёт её на кооперативный участок. Приёмка оформляется
  актом приёма-передачи с двойной подписью: первой — поставщик
  подтверждает передачу, второй — председатель участка подтверждает
  приёмку. С этого момента кооператив юридически принял имущество,
  поставщику уходит оплата.

  Дальше председатель открывает выдачу, заказчик приходит на пункт
  выдачи участка. Выдача оформляется отдельным актом приёма-передачи
  также с двойной подписью: первой — председатель подтверждает
  передачу имущества заказчику, финальной — заказчик подтверждает
  приёмку. Заказ закрыт, начинается гарантийное окно.
roles:
  - orderer        # пайщик-заказчик
  - offerer        # пайщик-поставщик
  - chairman        # председатель кооперативного участка (КУ-приёмщик/КУ-выдающий)
  - backend         # Автоматизированная служба кооператива
  - gateway         # Система процессинга платежей (подтверждает или отклоняет факт банковского перевода)

# ── Секция 2. Действия контракта (блокчейн-уровень) ─────────────────────────
# Имена actions ≤12 символов eosio::name. Контракт описан в целевом виде —
# реализация в .cpp предстоит после согласования стандарта.
actions:
  - name: marketplace::createorder
    human: Создать заказ
    actor: orderer
    role: opener
    purpose: >
      Заказчик размещает заказ на товар из каталога: указывает количество
      и кооперативный участок, на котором заберёт товар. Кооператив
      резервирует средства заказчика под этот заказ — до окончания цикла
      поставки они не могут быть использованы. Вместе со стоимостью
      имущества резервируется членский взнос по единой ставке кооператива —
      его сумма явно фиксируется в заказе и входит в общую стоимость для
      заказчика. Заказ становится частью консолидированной заявки поставщику.
      Вместе с заказом заказчик подписывает заявление о конвертации паевого
      взноса в членский взнос по программе «Стол заказов» — оно публикуется
      в реестре документов кооператива самостоятельным пакетом.

  - name: marketplace::stockorder
    human: Заказать имущество со склада кооператива
    actor: orderer
    role: opener
    purpose: >
      Заказчик приобретает имущество из свободного остатка склада
      кооперативного участка — то, что осталось у кооператива после
      недовыдач и отказов и было заново предложено пайщикам по цене
      прибытия или с уценкой. Поставщик здесь не участвует: имущество
      уже принято и оплачено кооперативом при первичной приёмке, поэтому
      заказ сразу считается принятым кооперативом и идёт напрямую к
      выдаче на том же участке. Заказ со склада всегда оплачивается из
      членских средств заказчика по программе «Стол заказов» — и тело
      заказа, и членский взнос по единой ставке резервируются из них.
      Пайщик пополняет членские средства паевым взносом заранее отдельным
      действием «Конвертация» (с подписанным заявлением). Когда заказом со
      склада замещают непоставленное по заказу заказчика, возвращённые ему
      за непоставку средства уже лежат в членских — замена в пределах их
      суммы проходит без конвертации и без доплаты.

  - name: marketplace::convert
    human: Перевести паевой взнос в членский «Стола заказов»
    actor: orderer
    role: opener
    purpose: >
      Заказчик подаёт заявление с просьбой перевести часть своего паевого
      взноса с программы «Цифровой кошелёк» в членский взнос по программе
      «Стол заказов». Переведённые средства становятся доступны для заказа
      имущества со склада кооператива. Это пополнение нужно, когда членских
      средств не хватает на такой заказ — на всю его сумму или только на
      ту часть, что превышает уже возвращённое заказчику за непоставку при
      замене. Заявление о конвертации публикуется в реестре документов
      кооператива самостоятельным пакетом.

  - name: marketplace::cancelorder
    human: Отменить заказ
    actor: orderer
    role: progress
    purpose: >
      Заказчик отменяет заказ до того, как поставщик принял
      консолидированную заявку в работу. Кооператив снимает резерв со
      средств, включая зарезервированный членский взнос, — заказчик снова
      свободно ими распоряжается в рамках программы. Заказ со склада
      кооператива отменяется до открытия выдачи — так оператор пункта
      выдачи может переформировать докладку, пока не поставил свою
      подпись на акте.

  - name: marketplace::expireorder
    human: Закрыть цикл отсечки заявок
    actor: backend
    role: progress
    purpose: >
      Цикл отсечки заявок поставщика завершается. Кооператив сверяет
      количество заказов с минимальным порогом поставки, заданным
      поставщиком. Если порог набрался — заказы объединяются в
      консолидированную заявку и направляются поставщику для акцепта.
      Если порог не набрался — все заказы цикла отменяются, резерв со
      средств заказчиков снимается.

  - name: marketplace::closeorder
    human: Закрыть выданный заказ по выходу гарантийного срока
    actor: backend
    role: closer
    purpose: >
      Автоматизированная служба по расписанию закрывает выданные заказы,
      по которым гарантийный срок вышел, выплата поставщику завершена и
      гарантийный возврат не открыт. Закрытие завершает жизненный цикл
      заказа — его запись удаляется, история заказа (акты, выплата,
      гарантия) сохраняется в журнале действий. До выхода гарантийного
      срока закрытие не допускается.

  - name: marketplace::acceptbatch
    human: Акцептовать консолидированную заявку
    actor: offerer
    role: progress
    purpose: >
      Поставщик соглашается выполнить консолидированную заявку и берёт
      на себя обязательство собрать и передать партию кооперативу.
      Заказы переходят от ожидания к подготовке отгрузки.

  - name: marketplace::declinebatch
    human: Отказаться от консолидированной заявки
    actor: offerer
    role: reject
    purpose: >
      Поставщик отказывается выполнить консолидированную заявку. Все
      заказы партии отменяются, резерв со средств заказчиков снимается.
      Договорные санкции при отказе — вне этого процесса, по регламенту
      кооператива.

  - name: marketplace::prepship
    human: Собрать партию к отгрузке
    actor: offerer
    role: progress
    purpose: >
      Поставщик собирает партию: распределяет заказы по кооперативным
      участкам и выбирает способ доставки — везёт сам или передаёт через
      экспедитора. Состав партии должен в точности соответствовать тому,
      что поставщик акцептовал: заменять или подменять позиции запрещено
      (жёсткий акцепт).

  - name: marketplace::signsupp
    human: Поставщик передал партию
    actor: offerer
    role: progress
    purpose: >
      Поставщик первой подписью на акте приёма-передачи подтверждает,
      что передал партию кооперативу. Имущество физически на складе
      участка, но юридически ещё не оприходовано — выдача заказчикам
      открывается только после второй подписи председателя.

  - name: marketplace::signchair
    human: Председатель принял поставку
    actor: chairman
    role: progress
    purpose: >
      Председатель участка ставит вторую — завершающую — подпись на
      акте приёма-передачи. С этого момента партия юридически принята
      кооперативом, имущество приходуется на склад участка и становится
      доступным к выдаче заказчикам, а у кооператива возникает обязательство
      выплатить поставщику. Сама выплата — отдельным шагом по факту
      подтверждения кассиром банковского перевода. Двухподписный акт
      приёма-передачи публикуется в реестре документов кооператива в пакете
      процесса заказа.

  - name: marketplace::payout
    human: Инициировать выплату поставщику
    actor: backend
    role: progress
    purpose: >
      Кооператив регистрирует исходящий платёж поставщику в системе
      процессинга платежей на фактически принятую сумму (если на приёмке
      часть поставки отбраковали — поставщику причитается только за
      принятое, не за исходный заказ). По этому запросу кассир увидит у
      себя в столе задачу — провести банковский перевод. Бухгалтерия по
      выплате на этом шаге ещё не двигается: обязательство перед
      поставщиком остаётся открытым до подтверждения кассиром.

  - name: marketplace::payconfirm
    human: Выплата поставщику подтверждена
    actor: gateway
    role: progress
    purpose: >
      После подтверждения кассиром обязательство перед поставщиком
      закрывается, а расход целевых средств с расчётного счёта
      отражается в бухгалтерии. Статус заказа не меняется — выплата
      шла параллельно шагам выдачи.

  - name: marketplace::paydecline
    human: Выплата поставщику отклонена
    actor: gateway
    role: reject
    purpose: >
      Кассир отметил в столе процессинга, что банковский перевод
      поставщику не состоялся — нет реквизитов, ошибка ввода, банк
      отклонил. Обязательство перед поставщиком остаётся открытым,
      причина отказа сохраняется. Кооператив может повторно инициировать
      выплату после исправления реквизитов.

  - name: marketplace::signiss1
    human: Председатель открыл выдачу
    actor: chairman
    role: progress
    purpose: >
      Председатель открывает выдачу: подтверждает, что готов передать
      имущество заказчику. Заказ становится готов к получению на пункте
      выдачи участка.

  - name: marketplace::markdown
    human: Списать уценку при выдаче со склада кооператива
    actor: backend
    role: progress
    purpose: >
      Имущество остатка оприходовано на склад по цене прибытия, а выдано
      пайщику могло быть с уценкой. Чтобы на складе не зависала разница за
      имущество, которого физически уже нет, после выдачи она выбывает со
      склада в прочие расходы кооператива. Так выбытие проходит по полной
      стоимости прибытия: часть закрывается средствами заказчика по акту
      выдачи, разница — расходом. Накопленный расход позже погашается
      целевым финансированием отдельным решением — по образцу списания
      скоропорта.

  - name: marketplace::setfee
    human: Установить единую ставку членского взноса
    actor: backend
    role: progress
    purpose: >
      Администратор кооператива устанавливает единую ставку членского
      взноса Стола заказов — один и тот же процент от стоимости заказа на
      всех кооперативных участках, без различий по участкам и категориям:
      так исключаются спекуляции и конкуренция между участками. Ставка
      применяется к заказам, созданным после установки; в уже созданных
      заказах сумма взноса зафиксирована при создании.

  - name: marketplace::signiss2
    human: Заказчик получил имущество
    actor: orderer
    role: closer
    purpose: >
      Заказчик пришёл на пункт выдачи и финальной подписью на акте
      выдачи забрал свой заказ. Если фактически выданное расходится с
      заказом — сумма заранее корректируется до фактического: при
      меньшем количестве остаток возвращается на программный членский
      кошелёк «Стола заказов», при большем — доплата берётся из членских
      средств «Стола заказов» пайщика. На выдаче паевой взнос не
      списывается и не конвертируется: если членских средств не хватает,
      пайщик заранее переводит паевой взнос в членский отдельным
      Заявлением о конвертации. Вместе с фактом выдачи окончательно
      принимается членский взнос: он пересчитывается пропорционально
      факту (излишек возвращается заказчику на членский кошелёк программы,
      недостающая часть добирается тоже из членских средств) и целиком зачисляется в
      общий кошелёк кооперативного участка выдачи — сначала средства
      работают на участок (плановые расходы), и только потом председатель
      распределяет остаток между собой и доверенными отдельной командой
      (типовой процесс членских взносов кооперативного участка). Заказ
      закрыт, открывается гарантийное окно. Двухподписный акт выдачи
      публикуется в реестре документов кооператива в пакете процесса
      заказа — рядом с актом приёмки.

# ── Секция 3. Граф состояний ────────────────────────────────────────────────
# Сущность: marketplace::order (таблица orders, scope=coopname).
# Граф спрямлён: статус pending_offerer_sign модели B описан в сценарии,
# в графе сворачивается в supply_prepared с разными путями входа.
entity: marketplace::order
entity_human: Заказ на поставку
entity_source: cpp/marketplace/src/

states:
  - name: active
    human: Заказ размещён
    description: >
      Заказ создан и ждёт завершения цикла отсечки заявок и акцепта
      поставщика. Средства заказчика зарезервированы под этот заказ на
      программном членском кошельке Стола заказов.
    kind: normal

  # Отмена заказа (заказчиком до акцепта / кооперативом по итогам закрытия
  # цикла без достижения порога / поставщиком при отказе от заявки) —
  # терминал жизненного цикла: запись заказа удаляется, резерв со средств
  # заказчика снимается, история заказа сохраняется в журнале действий.
  - name: accepted
    human: Заявка акцептована
    description: >
      Поставщик согласился выполнить консолидированную заявку. Средства
      заказчика по-прежнему зарезервированы; поставщик готовит партию к
      отгрузке.
    kind: normal

  - name: ship_ready
    human: Партия собрана к отгрузке
    description: >
      Поставщик собрал партию точно по составу акцептованной заявки и
      выбрал способ доставки на участок — самовывоз или через
      экспедитора. Имущество ещё не передано кооперативу.
    kind: normal

  - name: supply_prepared
    human: Имущество поставлено
    description: >
      Поставщик передал партию на участок и подтвердил это первой
      подписью на акте приёма-передачи. Имущество физически на складе
      участка, но юридически ещё не оприходовано — выдача заказчикам
      откроется только после второй подписи председателя.
    kind: normal

  - name: accepted_to_coop
    human: Поставка принята кооперативом
    description: >
      Председатель участка завершил приёмку второй подписью. Партия
      юридически принята кооперативом, имущество числится на складе
      участка и ждёт открытия выдачи. Обязательство выплатить поставщику
      открыто; сама выплата проводится отдельным шагом после того, как
      кассир подтвердит банковский перевод.
    kind: normal

  - name: ready_to_receive
    human: Заказ готов к выдаче
    description: >
      Председатель открыл выдачу. Имущество готово к передаче заказчику
      на пункте выдачи участка.
    kind: normal

  - name: received
    human: Имущество выдано
    description: >
      Заказчик получил имущество. Открыто гарантийное окно — в его
      пределах заказчик может подать заявление на возврат, если товар
      окажется некондиционным. После выхода гарантийного срока заказ
      закрывается автоматически: запись удаляется, история заказа
      сохраняется в журнале действий.
    kind: normal

transitions:
  - from: "∅"
    to: active
    action: marketplace::createorder
    actor: orderer
    ledger_code: p.mkt.supply
    operations:
      - o.mkt.lock
      - o.mkt.fee
    guards:
      - Заказчик — активный пайщик кооператива.
      - Заказчик подписал Соглашение ЦПП «Стол заказов».
      - Стоимость заказа не превышает упрощённый порог приёма имущества (100 000 ₽).
      - На паевом взносе заказчика достаточно средств для полной стоимости заказа вместе с членским взносом.
      - Указанный пункт выдачи принадлежит тому же кооперативу.

  # Заказ из свободного остатка склада кооператива: имущество уже принято
  # и оплачено кооперативом при первичной приёмке, поэтому заказ рождается
  # сразу в состоянии «Поставка принята кооперативом» и идёт напрямую к
  # выдаче. Выплата поставщику по такому заказу не существует.
  - from: "∅"
    to: accepted_to_coop
    action: marketplace::stockorder
    actor: orderer
    ledger_code: p.mkt.supply
    operations:
      - o.mkt.lockm
      - o.mkt.lockmf
    guards:
      - Заказчик — активный пайщик кооператива.
      - Заказчик подписал Соглашение ЦПП «Стол заказов».
      - Имущество есть в свободном остатке склада участка и предложено к приобретению оператором участка.
      - На членских средствах «Стола заказов» заказчика достаточно для полной стоимости заказа вместе с членским взносом (паевой пополняет их заранее действием «Конвертация»).
      - Пункт выдачи — тот же участок, на складе которого лежит остаток.

  # Пополнение членских средств паевым взносом под заказ со склада: отдельное
  # действие по заявлению пайщика. Выполняется перед stockorder, когда членских
  # средств не хватает (на всю сумму или на дельту превышения при замене).
  - from: "∅"
    to: "∅"
    action: marketplace::convert
    actor: orderer
    ledger_code: p.mkt.supply
    operations:
      - o.mkt.conv
    guards:
      - Заказчик — активный пайщик кооператива.
      - На паевом взносе заказчика достаточно средств на сумму конвертации.
      - Подписано заявление о конвертации паевого взноса в членский «Стола заказов».
    human: >
      Пайщик переводит часть паевого взноса в членский взнос Стола заказов,
      чтобы оплатить им заказ имущества со склада кооператива без доплаты
      на месте. Конвертируется либо вся требуемая сумма, либо только та
      часть, что превышает уже возвращённое заказчику за непоставку при замене.

  - from: active
    to: "∅"
    action: marketplace::cancelorder
    actor: orderer
    ledger_code: p.mkt.supply
    operations:
      - o.mkt.unlock
      - o.mkt.refund
    guards:
      - Поставщик ещё не принял заявку в работу.
    human: >
      Бесплатная отмена. Пока поставщик не принял заявку, он не взял на себя
      обязательство и ничего не везёт — кооператив полностью возвращает
      заказчику зарезервированные средства и членский взнос.

  - from: accepted_to_coop
    to: "∅"
    action: marketplace::cancelorder
    actor: orderer
    ledger_code: p.mkt.supply
    operations:
      - o.mkt.unlock
      - o.mkt.refund
    guards:
      - Заказ сделан из свободного остатка склада кооператива (по нему поставщика нет).
      - Выдача по заказу ещё не открыта — оператор участка не поставил свою подпись на акте выдачи.
    human: >
      Бесплатная отмена заказа из остатка склада: поставщика и риска перед ним
      нет, поэтому средства и членский взнос возвращаются заказчику полностью.

  - from: accepted | supply_prepared | accepted_to_coop
    to: "∅"
    action: marketplace::cancelorder
    actor: orderer
    ledger_code: p.mkt.supply
    operations:
      - o.mkt.unlock
      - o.mkt.penal
      - o.mkt.refund
    guards:
      - Поставщик уже принял заявку в работу (для заказа из обычной поставки, не из остатка).
      - Акт выдачи по заказу ещё не открыт.
    human: >
      Отказ от получения после того, как поставщик принял заявку. Поставщик уже
      обязался доставить имущество, а кооператив несёт риск его оплаты, поэтому
      кооператив удерживает половину стоимости заказа и половину членского
      взноса в общий кошелёк кооперативного участка; имущество остаётся на складе
      участка. Вторую половину кооператив возвращает заказчику на его членский
      счёт в программе.

  - from: active
    to: "∅"
    action: marketplace::expireorder
    actor: backend
    ledger_code: p.mkt.supply
    operations:
      - o.mkt.unlock
      - o.mkt.refund
    guards:
      - Цикл отсечки заявок поставщика завершился.
      - Минимальный порог поставки по количеству заказов не достигнут.

  - from: active
    to: accepted
    action: marketplace::acceptbatch
    actor: offerer
    guards:
      - Минимальный порог поставки достигнут к концу цикла отсечки.
      - Действие выполняет тот поставщик, чьё предложение лежит в основе консолидированной заявки.

  - from: active
    to: "∅"
    action: marketplace::declinebatch
    actor: offerer
    ledger_code: p.mkt.supply
    operations:
      - o.mkt.unlock
      - o.mkt.refund
    guards:
      - Поставщик ещё не акцептовал консолидированную заявку.

  - from: accepted | supply_prepared
    to: "∅"
    action: marketplace::declinebatch
    actor: offerer
    ledger_code: p.mkt.supply
    operations:
      - o.mkt.unlock
      - o.mkt.refund
    guards:
      - Имущество ещё не принято кооперативом на склад (закрывающая подпись приёмки не поставлена).
    human: >
      Отказ в приёмке: поставщик привёз позицию, которую кооператив не
      принимает (например, некондицию). Кооператив снимает позицию с приёмки —
      она не попадает в акт, — а поставщик подтверждает отмену поставки этой
      позиции и забирает имущество обратно. Штрафа поставщику нет (на текущем
      этапе), заказчику полностью возвращаются стоимость и членский взнос:
      непринятие — не его вина.

  - from: accepted
    to: ship_ready
    action: marketplace::prepship
    actor: offerer
    guards:
      - Состав отгрузки в точности равен составу акцептованной заявки (жёсткий акцепт; замены номенклатуры запрещены).
      - Поставщик выбрал способ доставки на участок — самовывоз или через экспедитора.

  - from: ship_ready
    to: supply_prepared
    action: marketplace::signsupp
    actor: offerer
    guards:
      - На участок передана партия точно в составе акцептованной заявки — самовывозом поставщика или через экспедитора.
      - При самовывозе поставщик ставит первую подпись на акте приёма-передачи лично на участке.
      - При доставке через экспедитора председатель и экспедитор очно сверяют партию, и поставщик ставит первую подпись дистанционно в установленный кооперативом срок.

  - from: supply_prepared
    to: accepted_to_coop
    action: marketplace::signchair
    actor: chairman
    ledger_code: p.mkt.supply
    operations:
      - o.mkt.purch
    guards:
      - На акте приёма-передачи имеется первая подпись поставщика.
      - Действие выполняет председатель того участка, который принимает поставку.

  # Выплата поставщику идёт отдельной веткой параллельно выдаче:
  # кооператив инициирует платёж, кассир проводит перевод и подтверждает
  # (или отклоняет) его. Статус самого заказа при этом не меняется.
  - from: accepted_to_coop
    to: accepted_to_coop
    action: marketplace::payout
    actor: backend
    guards:
      - Приёмка поставки кооперативом завершена (signchair выполнен).
      - По этому заказу выплата ещё не идёт и не завершена.

  - from: accepted_to_coop
    to: accepted_to_coop
    action: marketplace::payconfirm
    actor: gateway
    ledger_code: p.mkt.supply
    operations:
      - o.mkt.payout
    guards:
      - Подтверждение пришло из системы процессинга платежей.
      - По заказу ожидается подтверждение выплаты.

  - from: accepted_to_coop
    to: accepted_to_coop
    action: marketplace::paydecline
    actor: gateway
    guards:
      - Сообщение об отказе пришло из системы процессинга платежей.
      - По заказу ожидается подтверждение выплаты.

  - from: accepted_to_coop
    to: ready_to_receive
    action: marketplace::signiss1
    actor: chairman
    guards:
      - Партия принята кооперативом и числится на складе участка.

  # Закрытие выданного заказа по расписанию: жизненный цикл завершён,
  # запись заказа удаляется, история — в журнале действий.
  - from: received
    to: "∅"
    action: marketplace::closeorder
    actor: backend
    guards:
      - Гарантийный срок по заказу вышел (для заказов без гарантии — сразу).
      - Гарантийный возврат по заказу не открыт.
      - Выплата поставщику завершена (заказ из остатка кооператива выплаты не предполагает).

  # Уценка по заказу из остатка кооператива: после завершения выдачи разница
  # между стоимостью прибытия и фактической суммой выдачи выбывает со склада
  # в прочие расходы. Статус заказа не меняется.
  - from: received
    to: received
    action: marketplace::markdown
    actor: backend
    ledger_code: p.mkt.supply
    operations:
      - o.mkt.loss
    guards:
      - Заказ сделан из свободного остатка склада кооператива.
      - Выдача по заказу завершена обеими подписями акта.
      - Уценка по этому заказу ещё не списывалась.
      - Сумма уценки не превышает фактическую сумму выдачи.

  - from: ready_to_receive
    to: received
    action: marketplace::signiss2
    actor: orderer
    ledger_code: p.mkt.supply
    operations:
      - o.mkt.consum
      - o.mkt.refund
      - o.mkt.fee
    guards:
      - Заказчик лично присутствует на пункте выдачи участка.
      - Председатель сверил фактически выдаваемое имущество с составом заказа.
      - При расхождении факта с заказом сумма заказа предварительно скорректирована до фактической в пределах допустимого регламентом отклонения.

# ── Секция 4. Сценарий ──────────────────────────────────────────────────────
scenario:
  steps:
    - step: 1
      title: Создание заказа
      actor: orderer
      action: marketplace::createorder
      description: >
        Заказчик выбирает позицию из каталога своего кооператива,
        указывает количество и пункт выдачи на участке, на котором
        заберёт товар. Кооператив проверяет, что стоимость заказа не
        превышает упрощённый порог приёма имущества, и резервирует под
        этот заказ необходимую сумму со средств заказчика. Заказ
        присоединяется к текущему циклу отсечки заявок поставщика.
      pre:
        - Заказчик — активный пайщик кооператива.
        - Заказчик подписал Соглашение ЦПП «Стол заказов».
        - Совокупных средств заказчика — на паевом и членских кошельках — достаточно.
        - Стоимость заказа не превышает упрощённый порог приёма имущества.
      post:
        - Заказ размещён и активен.
        - Средства заказчика зарезервированы под заказ.

    - step: 2
      title: Закрытие цикла отсечки заявок
      actor: backend
      action: marketplace::expireorder
      description: >
        Цикл отсечки заявок завершается. Кооператив сверяет количество
        собранных заказов с минимальным порогом поставки, заданным
        поставщиком. Если порог набрался — заказы объединяются в
        консолидированную заявку и направляются поставщику для акцепта.
        Если порог не набрался — все заказы цикла отменяются, резерв со
        средств заказчиков снимается.
      pre:
        - Цикл отсечки заявок поставщика завершился.
      post:
        - При достижении порога — заказы активны, поставщику направлена консолидированная заявка.
        - При недостижении порога — заказы отменены, резерв со средств снят.

    - step: 3
      title: Акцепт консолидированной заявки
      actor: offerer
      action: marketplace::acceptbatch
      description: >
        Поставщик видит консолидированную заявку и подтверждает её к
        исполнению. С этого момента он принимает на себя обязательство
        собрать и передать партию кооперативу.
      pre:
        - Минимальный порог поставки достигнут.
        - Действие выполняет тот поставщик, чьё предложение лежит в основе консолидированной заявки.
      post:
        - Заказы партии перешли к подготовке отгрузки.

    - step: 4
      title: Подготовка партии к отгрузке
      actor: offerer
      action: marketplace::prepship
      description: >
        Поставщик собирает партию по составу акцептованной заявки —
        точно в той же номенклатуре, без замен — и выбирает способ
        доставки на участок: самовывоз или через экспедитора.
      pre:
        - Заявка акцептована поставщиком.
        - Состав партии в точности соответствует составу акцепта.
      post:
        - Партия собрана к отгрузке.
        - Способ доставки выбран.

    - step: 5
      title: Передача партии на участок
      actor: offerer
      action: marketplace::signsupp
      description: >
        Поставщик передаёт партию кооперативу. При самовывозе он лично
        сдаёт партию председателю и очно ставит первую подпись на акте
        приёмки-передачи. При доставке через экспедитора председатель и
        экспедитор очно сверяют груз с составом партии, и по итогам этой
        сверки поставщик ставит первую подпись дистанционно в
        установленный кооперативом срок. В обоих случаях имущество уже
        физически на складе участка, но юридически ещё не оприходовано —
        выдача заказчикам пока не открыта.
      pre:
        - Партия собрана к отгрузке.
        - Состав акта приёма-передачи в точности соответствует составу акцептованной заявки.
      post:
        - Имущество поставлено, первая подпись на акте приёма-передачи поставлена.
        - Выдача заказчикам не открыта до второй подписи председателя.

    - step: 6
      title: Приёмка поставки председателем
      actor: chairman
      action: marketplace::signchair
      description: >
        Председатель участка ставит вторую — завершающую — подпись на
        акте приёма-передачи. С этого момента партия юридически принята
        кооперативом, имущество приходуется на склад участка, у кооператива
        возникает обязательство выплатить поставщику. Сама выплата —
        отдельным шагом, после того как кассир подтвердит банковский
        перевод.
      pre:
        - На акте приёма-передачи имеется первая подпись поставщика.
        - Действие выполняет председатель того участка, который принимает поставку.
      post:
        - Поставка принята кооперативом.
        - Обязательство выплаты поставщику открыто и ждёт фактического банковского перевода.

    - step: 6a
      title: Инициация выплаты поставщику
      actor: backend
      action: marketplace::payout
      description: >
        Кооператив регистрирует исходящий платёж поставщику в системе
        процессинга платежей. У кассира появляется задача — провести
        банковский перевод. Бухгалтерия по выплате на этом шаге не
        двигается — обязательство перед поставщиком остаётся открытым
        вплоть до подтверждения банковского перевода кассиром.
      pre:
        - Поставка принята кооперативом (приёмка завершена).
        - Выплата по этому заказу не в процессе и не завершена.
      post:
        - В системе процессинга платежей появилась запись об исходящем платеже, ожидающем подтверждения.
        - Заказ помечен как «выплата ожидает подтверждения».

    - step: 6b
      title: Подтверждение выплаты поставщику
      actor: gateway
      action: marketplace::payconfirm
      description: >
        Кассир провёл реальный банковский перевод поставщику и
        подтвердил это в столе процессинга. После подтверждения
        кооператив фиксирует выплату — обязательство перед поставщиком
        закрывается, расход целевых средств с расчётного счёта
        отражается в бухгалтерии.
      pre:
        - Исходящий платёж зарегистрирован в системе процессинга и ожидает подтверждения.
        - Кассир подтвердил фактический банковский перевод поставщику.
      post:
        - Обязательство выплаты поставщику закрыто.
        - Заказ помечен как «выплата проведена».

    - step: 7
      title: Открытие выдачи
      actor: chairman
      action: marketplace::signiss1
      description: >
        Председатель открывает выдачу первой подписью на акте
        приёма-передачи. Заказ становится готов к получению на пункте
        выдачи участка.
      pre:
        - Поставка принята кооперативом.
        - Имущество числится на складе участка.
      post:
        - Заказ готов к выдаче.

    - step: 8
      title: Выдача заказа
      actor: orderer
      action: marketplace::signiss2
      description: >
        Заказчик приходит на пункт выдачи участка. Председатель сверяет
        фактически выдаваемое имущество с составом заказа. Если факт
        совпадает с заказом — выдача проходит без корректировок. При
        расхождении (например, развесной товар: фактический вес меньше
        заказанного) сумма заказа предварительно корректируется до
        фактической: при меньшем количестве остаток возвращается на
        программный членский кошелёк «Стола заказов» заказчика, при большем —
        недостающая сумма вносится дополнительным паевым взносом, который
        конвертируется в членский «Стола заказов» и им добирается доплата
        (напрямую с паевого не списываем). Заказчик ставит финальную
        подпись на акте приёма-передачи и забирает заказ.
      pre:
        - Заказ готов к выдаче.
        - Заказчик лично присутствует на пункте выдачи.
      post:
        - Имущество выдано заказчику.
        - Заказ закрыт.
        - Гарантийное окно открыто — в его пределах заказчик может подать заявление на возврат.

  alternatives:
    - branch: Отмена заказчиком до акцепта
      at_step: 2
      action: marketplace::cancelorder
      actor: orderer
      description: >
        Заказчик отменяет заказ до того, как поставщик принял
        консолидированную заявку. Кооператив снимает резерв со средств,
        и заказчик снова свободно ими распоряжается в рамках программы.

    - branch: Цикл закрыт без достижения порога
      at_step: 2
      action: marketplace::expireorder
      actor: backend
      description: >
        Цикл отсечки заявок завершился, но минимальный порог поставки
        по количеству заказов не достигнут. Все заказы цикла отменяются,
        резерв со средств заказчиков снимается.

    - branch: Отказ поставщика от консолидированной заявки
      at_step: 3
      action: marketplace::declinebatch
      actor: offerer
      description: >
        Поставщик отказывается выполнить консолидированную заявку до её
        акцепта. Все заказы партии отменяются, резерв со средств
        заказчиков снимается. Договорные санкции при отказе — вне этого
        процесса, по регламенту кооператива.

    - branch: Кассир отклонил банковский перевод поставщику
      at_step: 6b
      action: marketplace::paydecline
      actor: gateway
      description: >
        Кассир в столе процессинга отметил, что банковский перевод
        поставщику не состоялся — нет реквизитов, ошибка ввода, банк
        отклонил. Бухгалтерия не двигается — обязательство перед
        поставщиком остаётся открытым, причина отказа сохраняется.
        Кооператив может повторно инициировать выплату после исправления
        реквизитов.

    - branch: Передача партии через экспедитора
      at_step: 5
      action: marketplace::signsupp
      actor: offerer
      description: >
        Партия доставлена на участок через экспедитора. Председатель и
        экспедитор очно сверяют груз с составом партии. При расхождении
        председатель фиксирует фактический состав, экспедитор
        подтверждает это своей подписью на сопроводительных документах.
        По итогам очной сверки поставщик дистанционно ставит первую
        подпись на акте приёма-передачи в установленный кооперативом
        срок. Дальнейшие шаги — как при самовывозе.

    - branch: Поставщик не подписал акт приёма-передачи в срок
      at_step: 5
      action: null
      actor: offerer
      description: >
        Поставщик не поставил дистанционную первую подпись на акте
        приёмки-передачи в установленный срок. Выдача заказчикам не
        открывается; дальнейшее решение — по регламенту кооператива
        (досверка, перепоставка, претензия).

# ── Секция 5. Документы и подписи ───────────────────────────────────────────
# В процессе подписываются два юридически значимых документа: АПП приёмки
# (двойная подпись поставщик → председатель) и АПП выдачи (двойная подпись
# председатель → заказчик). Дополнительно в модели B печатается и подписывается
# бумажная ТТН (вне блокчейна) с фотофиксацией для целей дистанционной ЭЦП
# поставщика. Соглашение ЦПП «Стол заказов» подписывается ОДНОКРАТНО при
# первом входе пайщика и относится к процессу подключения к ЦПП (не входит
# в этот процесс).
documents:
  - action: marketplace::signsupp
    title: АПП приёмки имущества кооперативом (первая подпись поставщика)
    registry_id: 702
    signed_by: [offerer]
    stored_in: orders.acceptance_act
    note: "Используется существующий шаблон 702.AssetContributionAct из cooptypes/cooperative/registry/. Оригинально создан под клиринговую модель donor'а; форма акта приёма имущества кооперативом структурно подходит и для членской модели. При необходимости методолог может создать специализированный шаблон в новой серии (1100+) — тогда registry_id обновится."

  - action: marketplace::signchair
    title: АПП приёмки имущества кооперативом (финальная подпись председателя)
    registry_id: 702
    signed_by: [chairman]
    stored_in: orders.acceptance_act
    note: "Тот же шаблон что у signsupp (registry_id 702). На тот же акт приёма-передачи добавляется вторая подпись."

  - action: marketplace::signiss1
    title: АПП выдачи имущества пайщику (первая подпись председателя)
    registry_id: 802
    signed_by: [chairman]
    stored_in: orders.issue_act
    note: "Используется существующий шаблон 802.ReturnByAssetAct из cooptypes/cooperative/registry/. Оригинально создан под клиринговую модель «возврат паевого взноса имуществом»; форма акта передачи имущества от кооператива пайщику структурно подходит и для членской модели выдачи. При необходимости методолог может создать специализированный шаблон."

  - action: marketplace::signiss2
    title: АПП выдачи имущества пайщику (финальная подпись заказчика)
    registry_id: 802
    signed_by: [orderer]
    stored_in: orders.issue_act
    note: "Тот же шаблон что у signiss1 (registry_id 802)."

  - action: marketplace::prepship
    title: Товарно-транспортная накладная (при доставке через экспедитора)
    registry_id: 0
    signed_by: [offerer, chairman, expediter]
    stored_in: shipments.ttn_pdf
    note: "TODO: создать шаблон ТТН в registry. При самовывозе не используется. Подписи проставляются вне блокчейна (на бумажном носителе); фотофиксация председателя по результатам очной сверки сохраняется как основание для дистанционной подписи поставщика."

# ── Секция 6. Операции ───────────────────────────────────────────────────────
# Денежные движения процесса прямой поставки-приобретения:
#   • резерв под заказ — при создании заказа средства заказчика переводятся
#     с паевого взноса в резерв под этот заказ;
#   • возврат на членский кошелёк Стола заказов — при отмене заказа или
#     недовыдаче резерв возвращается на членский кошелёк и остаётся в программе;
#   • доплата паевым взносом — при выдаче большего количества недостающая
#     сумма вносится дополнительным паевым взносом и через членский кошелёк
#     добирает резерв заказа;
#   • приёмка имущества — при приёмке кооперативом имущество приходуется на склад;
#   • оплата поставщику — выплата поставщику с расчётного счёта;
#   • списание при выдаче — при выдаче имущества зарезервированная сумма
#     списывается как целевой членский взнос.
operations:
  - ledger_code: o.mkt.lock
    human_name: Резервирование средств под заказ
    wallet_op: TRANSFER
    # L1 — двойная запись (паевой → целевое финансирование)
    debit: 80                      # Паевой фонд
    credit: 86                     # Целевое финансирование
    # L2 — реальный перевод между двумя кошельками заказчика
    wallet_from: w.wal.share       # Паевой взнос пайщика
    wallet_to: w.mkt.order         # Резерв под конкретный Order
    # L3 — две стороны движения у одного и того же пайщика
    l3:
      - user_wallet: w.wal.share
        user_ref: order.orderer
        available_delta: -order.total_cost
        blocked_delta: null
      - user_wallet: w.mkt.order
        user_ref: order.orderer
        available_delta: +order.total_cost
        blocked_delta: null
    amount_ref: order.total_cost
    triggered_by: marketplace::createorder
    description: >
      При создании заказа средства заказчика переводятся с его паевого
      взноса в резерв под этот заказ — до окончания цикла они недоступны.
      Двойная запись Дт 80 / Кт 86 — переход из складочного капитала в
      целевое финансирование. Резерв снимается либо при выдаче имущества
      (засчитывается как целевой членский взнос), либо при отмене заказа
      (возвращается на членский кошелёк Стола заказов).

  - ledger_code: o.mkt.unlock
    human_name: Снятие резерва при отмене заказа
    wallet_op: TRANSFER
    # L1 — без проводки (оба кошелька на 86, фиктивная Дт=Кт игнорируется)
    debit: null
    credit: null
    # L2 — обратный перевод из резерва в членский «Стола заказов» пайщика
    wallet_from: w.mkt.order       # Резерв под Order
    wallet_to: w.mkt.member        # Членский кошелёк «Стола заказов» пайщика
    # L3 — две стороны движения у одного и того же пайщика
    l3:
      - user_wallet: w.mkt.order
        user_ref: order.orderer
        available_delta: -order.total_cost
        blocked_delta: null
      - user_wallet: w.mkt.member
        user_ref: order.orderer
        available_delta: +order.total_cost
        blocked_delta: null
    amount_ref: order.total_cost
    triggered_by: marketplace::cancelorder | marketplace::expireorder | marketplace::declinebatch
    description: >
      При отмене заказа (заказчиком до акцепта, при закрытии цикла без
      достижения порога, при отказе поставщика) или при недовыдаче
      зарезервированные средства возвращаются на членский кошелёк Стола
      заказов заказчика — остаются в программе и идут на следующие заказы.
      По бухгалтерии — без проводки (оба кошелька на счёте 86 — перевод
      внутри одной аналитики).

  - ledger_code: o.mkt.penal
    human_name: Удержание при отказе от получения
    wallet_op: TRANSFER
    # L1 — без проводки (оба кошелька на 86, фиктивная Дт=Кт игнорируется)
    debit: null
    credit: null
    # L2 — удержанная половина тела заказа кладётся в пул членских взносов как
    # транзит, откуда тем же зачислением, что и взнос, уходит в общий кошелёк
    # кооперативного участка. Прямой перевод из резерва пайщика в кошелёк участка
    # невозможен — у движения одна сторона-пайщик, другая — участок.
    wallet_from: w.mkt.order       # Резерв под Order
    wallet_to: w.mkt.fee           # Резерв членских взносов (транзит к кошельку участка)
    # L3 — списание у пайщика; у пула разреза по пайщику нет.
    l3:
      - user_wallet: w.mkt.order
        user_ref: order.orderer
        available_delta: -order.total_cost / 2
        blocked_delta: null
    amount_ref: order.total_cost / 2
    triggered_by: marketplace::cancelorder
    description: >
      Если заказчик отказывается получить заказ после того, как поставщик
      принял заявку в работу, кооператив удерживает половину стоимости заказа.
      Поставщик уже обязался доставить имущество, и кооператив несёт риск его
      оплаты, поэтому удержанная половина остаётся в кооперативе — переводится
      в общий кошелёк кооперативного участка (вместе с удержанной половиной
      членского взноса), а имущество остаётся на складе участка. Вторая половина
      возвращается заказчику. По бухгалтерии — без проводки (перевод внутри
      счёта 86).

  - ledger_code: o.mkt.fee
    human_name: Членский взнос по заказу
    wallet_op: TRANSFER
    # L1 — двойная запись (паевой → целевое финансирование)
    debit: 80                      # Паевой фонд
    credit: 86                     # Целевое финансирование
    # L2 — перевод с паевого заказчика в кооперативный пул резервов взносов
    wallet_from: w.wal.share       # Паевой взнос пайщика
    wallet_to: w.mkt.fee           # Резерв членских взносов под заказы (кооперативный пул)
    # L3 — у пула разреза по пайщику нет: per-заказ разрез держит поле
    # membership_fee самого заказа
    l3:
      - user_wallet: w.wal.share
        user_ref: order.orderer
        available_delta: -order.membership_fee
        blocked_delta: null
    amount_ref: order.membership_fee
    triggered_by: marketplace::createorder | marketplace::signiss2
    description: >
      Членский взнос по единой ставке кооператива резервируется вместе со
      стоимостью имущества при создании заказа; его сумма явно фиксируется
      в заказе и входит в общую стоимость для заказчика. Если фактическая
      выдача оказывается больше заказа, недостающая часть взноса
      дособирается этой же операцией при финальной подписи акта выдачи.
      Двойная запись Дт 80 / Кт 86 — переход из складочного капитала в
      целевое финансирование. После исполнения заказа взнос распределяется
      кооперативному участку выдачи; при отмене — возвращается заказчику.

  - ledger_code: o.mkt.refund
    human_name: Возврат членского взноса по заказу
    wallet_op: TRANSFER
    # L1 — без проводки (оба кошелька на 86)
    debit: null
    credit: null
    # L2 — возврат из пула резервов взносов на членский «Стола заказов» пайщика
    wallet_from: w.mkt.fee         # Резерв членских взносов под заказы
    wallet_to: w.mkt.member        # Членский кошелёк «Стола заказов» пайщика
    l3:
      - user_wallet: w.mkt.member
        user_ref: order.orderer
        available_delta: +amount
        blocked_delta: null
    amount_ref: order.membership_fee | order.membership_fee × (1 − факт/заказ)
    triggered_by: marketplace::cancelorder | marketplace::expireorder | marketplace::declinebatch | marketplace::signiss2
    description: >
      Неиспользованная часть членского взноса возвращается заказчику на
      членский кошелёк Стола заказов: при отмене заказа — полностью, при
      выдаче меньше заказанного — пропорционально невыданной части.
      По бухгалтерии — без проводки (оба кошелька на счёте 86).

  - ledger_code: o.mkt.conv
    human_name: Конвертация паевого в членский «Стола заказов» под доплату
    wallet_op: TRANSFER
    # L1 — двойная запись (паевой → целевое финансирование)
    debit: 80                      # Паевой фонд
    credit: 86                     # Целевое финансирование
    # L2 — паевой взнос пайщика конвертируется в членский программы
    wallet_from: w.wal.share       # Паевой взнос пайщика
    wallet_to: w.mkt.member        # Членский кошелёк «Стола заказов» пайщика
    # L3 — две стороны движения у одного и того же пайщика
    l3:
      - user_wallet: w.wal.share
        user_ref: order.orderer
        available_delta: -diff
        blocked_delta: null
      - user_wallet: w.mkt.member
        user_ref: order.orderer
        available_delta: +diff
        blocked_delta: null
    amount_ref: fact_cost - order.total_cost | сумма заявления о конвертации
    triggered_by: marketplace::convert | marketplace::signiss2
    description: >
      Паевой взнос заказчика переводится в членский взнос Стола заказов.
      Применяется в двух случаях: (1) пайщик заранее пополняет членские
      средства под заказ имущества со склада (действие «Конвертация» по
      заявлению — на всю сумму либо на дельту превышения над возвращённым
      при замене); (2) доплата по факту при выдаче большего количества/по
      большей цене не списывается с паевого напрямую, а сперва конвертируется
      сюда. Двойная запись Дт 80 / Кт 86 — переход из складочного капитала в
      целевое финансирование. Если на паевом не хватает средств — не проводится.

  - ledger_code: o.mkt.lockm
    human_name: Добор резерва заказа с членского «Стола заказов»
    wallet_op: TRANSFER
    # L1 — без проводки (оба кошелька на 86, фиктивная Дт=Кт игнорируется)
    debit: null
    credit: null
    # L2 — перевод из членского «Стола заказов» в резерв под Order
    wallet_from: w.mkt.member      # Членский кошелёк «Стола заказов» пайщика
    wallet_to: w.mkt.order         # Резерв под конкретный Order
    # L3 — две стороны движения у одного и того же пайщика
    l3:
      - user_wallet: w.mkt.member
        user_ref: order.orderer
        available_delta: -diff
        blocked_delta: null
      - user_wallet: w.mkt.order
        user_ref: order.orderer
        available_delta: +diff
        blocked_delta: null
    amount_ref: fact_cost - order.total_cost | order.total_cost
    triggered_by: marketplace::stockorder | marketplace::signiss2
    description: >
      Резерв под заказ набирается из членского кошелька «Стола заказов»
      пайщика. Заказ имущества со склада кооператива (stockorder) фондируется
      так целиком — тело заказа берётся из членских средств начисто. Тем же
      шагом добирается резерв при доплате по факту, когда выдано больше
      заказанного. Списание под заказ идёт именно с членского кошелька
      программы, не с паевого напрямую. По бухгалтерии — без проводки (оба
      кошелька на счёте 86 — перевод внутри одной аналитики).

  - ledger_code: o.mkt.lockmf
    human_name: Членский взнос «Стола заказов» из внесённых средств
    wallet_op: TRANSFER
    # L1 — без проводки (оба кошелька на 86, фиктивная Дт=Кт игнорируется)
    debit: null
    credit: null
    # L2 — членский взнос под заказ резервируется из членского кошелька пайщика
    wallet_from: w.mkt.member      # Членский кошелёк «Стола заказов» пайщика
    wallet_to: w.mkt.fee           # Резерв членских взносов под заказы
    # L3 — у пула резервов взносов разреза по пайщику нет (см. o.mkt.fee)
    l3:
      - user_wallet: w.mkt.member
        user_ref: order.orderer
        available_delta: -order.membership_fee
        blocked_delta: null
    amount_ref: order.membership_fee
    triggered_by: marketplace::stockorder
    description: >
      Членский взнос по заказу имущества со склада кооператива резервируется
      из уже внесённых членских средств пайщика, а не с паевого. Парный по
      взносу к набору тела заказа из членского кошелька: заказ со склада
      оплачивается из членских средств начисто. Паевой пополняет членский
      кошелёк заранее отдельным действием «Конвертация». По бухгалтерии —
      без проводки (оба кошелька на счёте 86 — перевод внутри одной аналитики).

  - ledger_code: o.mkt.purch
    human_name: Приёмка имущества кооперативом
    wallet_op: NONE
    # L1 — двойная запись приёмки имущества
    debit: 10                      # Материалы
    credit: 86                     # Целевое финансирование
    # L2 — без движения по кошелькам кооператива (имущество — не кошелёк)
    wallet_from: null
    wallet_to: null
    # L3 — без движения по кошелькам пайщиков
    user_wallet: null
    user_ref: null
    available_delta: null
    blocked_delta: null
    amount_ref: order.total_cost
    triggered_by: marketplace::signchair
    description: >
      Имущество принято на склад участка по акту приёма-передачи (финальная
      подпись председателя) и приходуется за счёт целевых средств кооператива.
      Двойная запись Дт 10 / Кт 86 — приобретение имущества за счёт целевых
      средств кооператива. Имущество учитывается бухгалтерской аналитикой по
      складу участка.

  - ledger_code: o.mkt.payout
    human_name: Оплата поставщику с расчётного счёта
    wallet_op: ISSUE
    # L1
    debit: 86                      # Целевое финансирование
    credit: 51                     # Расчётный счёт
    # L2 — эмиссия суммы в платформенный кошелёк выплат поставщикам
    wallet_from: null              # ISSUE: источника нет
    wallet_to: w.mkt.payout        # Выплаты поставщикам (платформенный)
    # L3 — w.mkt.payout агрегатный (не USER_SHARED), L3 не заполняется
    user_wallet: null
    user_ref: null
    available_delta: null
    blocked_delta: null
    amount_ref: order.total_cost
    triggered_by: marketplace::payconfirm
    description: >
      Оплата поставщику с расчётного счёта кооператива по факту реального
      банковского перевода. Двойная запись Дт 86 / Кт 51 — расход целевых
      средств на оплату поставки (упрощённая модель без счёта 60 «Расчёты
      с поставщиками»). Выплата идёт через систему процессинга платежей:
      кооператив инициирует исходящий платёж, кассир проводит банковский
      перевод и подтверждает его, и только после подтверждения расход
      целевых средств отражается в бухгалтерии. До этого обязательство
      перед поставщиком остаётся открытым.

  - ledger_code: o.mkt.consum
    human_name: Выдача имущества пайщику по АПП выдачи
    wallet_op: BURN
    # L1 — двойная запись: целевое финансирование расходуется на выбытие
    # имущества со склада (одной операцией, без транзита)
    debit: 86                      # Целевое финансирование
    credit: 10                     # Материалы
    # L2 — BURN на кошельке-резерве (резерв сжигается, средства уходят из системы)
    wallet_from: w.mkt.order       # Резерв под Order
    wallet_to: null                # BURN — без получателя
    # L3 — резерв заказчика обнуляется (целевое расходование)
    user_wallet: w.mkt.order
    user_ref: order.orderer
    available_delta: -order.fact_cost
    blocked_delta: null
    amount_ref: order.fact_cost
    triggered_by: marketplace::signiss2
    description: >
      При выдаче имущества заказчику зарезервированная сумма списывается
      как целевое расходование членского взноса. Двойная запись Дт 86 / Кт 10 —
      расход целевых средств на выбытие имущества со склада. Если факт
      расходится с заказом, сумма заранее корректируется: при меньшем
      количестве остаток возвращается на членский кошелёк Стола заказов,
      при большем — недостающая сумма вносится дополнительным паевым взносом,
      который переводится в членский и им добирается резерв.

  - ledger_code: o.brn.common
    human_name: Членский взнос в общий кошелёк кооперативного участка
    wallet_op: TRANSFER
    # Бухгалтерских проводок нет — обе стороны в целевом финансировании.
    debit: null
    credit: null
    wallet_from: w.mkt.fee         # Пул членских взносов «Стола заказов»
    wallet_to: w.brn.common        # Общий кошелёк кооперативного участка
    user_wallet: w.brn.common
    user_ref: order.delivery_braname
    available_delta: +order.fact_fee
    blocked_delta: null
    amount_ref: order.fact_fee
    triggered_by: marketplace::signiss2
    description: >
      При выдаче заказа фактический членский взнос целиком уходит в общий
      кошелёк кооперативного участка выдачи — участок распоряжается им сам:
      сперва расходы участка, затем распределение доверенным. Операция
      относится к экономике участка (её полное описание — в стандарте
      членских взносов участка), но происходит внутри процесса поставки:
      заказ и есть событие, по которому взнос поступил. Разрез ведётся по
      участку, не по пайщику.
`,qp=`# ─────────────────────────────────────────────────────────────────────────────
# Стандарт «Утилизация скоропорта» — кооперативный процесс периодического
# списания со склада участка имущества, которое физически пропало или стало
# непригодным к выдаче заказчику (просрочка, повреждения, малоценные позиции).
#
# Процесс инициируется кооперативом (вручную председателем или по расписанию;
# точную дату согласовывает бухгалтер). По итогам опроса складов оформляется
# проект списания, который вносится на рассмотрение совета через типовой
# процесс решения совета (стандарт sov.decision). Совет рассматривает проект
# и принимает решение. По принятому решению фактическое списание со склада
# каждого кооперативного участка подтверждает председатель этого участка,
# подписывая Служебную записку о списании, — только после этой подписи
# имущество выбывает со склада.
#
# Совет лишь признаёт списание допустимым; физическое выбытие имущества
# инициирует ответственный за склад председатель кооперативного участка.
# Подтверждение — пер-КУ: проект может охватывать несколько участков, и
# председатель каждого участка подтверждает только свою часть.
#
# Списание фиксирует, что имущество безвозвратно исчезло из кооператива
# (а не передано пайщику). По кошелькам заказчиков движений не происходит —
# это чисто кооперативный учётный расход.
#
# **Модель кошельков:** процесс не двигает кошельки — это бухгалтерское
# событие через проводки счёта 10 (учёт имущества) и 86 (ЦФ программы).
# Имущество отслеживается аналитикой по счёту 10 (per-КУ субсчета), без
# отдельного кошелька.
#
# Списание имущества со склада оформляется как расход целевых средств
# программы (бухгалтерская проводка Дт 86 / Кт 10) — имущество выбывает
# из учёта.
#
# Канон формата:
#   coopenomics-docs/docs/standards/_spec/canon.md
# Источники правды в коде:
#   • cpp/marketplace/marketplace.hpp                 — actions (status: proposed)
#   • cpp/marketplace/src/p.mkt.wroff/                — реализация
#   • cpp/lib/core/ledger2/operations.hpp             — OPERATION_REGISTRY
#                                                       расширение o.mkt.wroff
#   • cpp/lib/core/ledger2/processes.hpp              — processes::marketplace::WRITEOFF
#   • cpp/lib/core/ledger2/accounts.hpp               — Целевое финансирование (86),
#                                                       Материалы (10)
# ─────────────────────────────────────────────────────────────────────────────

# ── Секция 1. Паспорт ───────────────────────────────────────────────────────
process_type: p.mkt.wroff
id: public_marketplace_writeoff_process
title: Утилизация скоропорта
slug: writeoff
status: proposed
contract: marketplace
purpose: >
  Штатный путь корректно отразить в учёте имущество, которое физически
  пропало или стало непригодным к выдаче. Применяется, когда товар на
  складе участка просрочился, испортился или иначе не может быть передан
  заказчику. Без этого процесса такие позиции висели бы на складе
  бесконечно — здесь кооператив честно фиксирует свои потери через
  решение совета.

  Процесс состоит из трёх шагов. На первом шаге кооператив (вручную
  председателем или по расписанию; точную дату согласовывает бухгалтер)
  опрашивает склады участков и собирает позиции, удовлетворяющие
  критериям списания. Председатель оформляет проект списания и вносит его
  на рассмотрение совета. На втором шаге совет по типовому процессу
  решения совета рассматривает проект и принимает решение. На третьем шаге
  фактическое списание со склада каждого участка подтверждает председатель
  этого участка, подписывая Служебную записку о списании: только после
  подписи имущество выбывает со склада как безвозвратные потери. При
  отрицательном решении совета проект отклоняется и позиции остаются на
  складе.

  По кошелькам заказчиков движений не происходит — это чисто кооперативный
  учётный расход на счёт целевого финансирования программы.
roles:
  - chairman        # председатель кооператива (вносит проект на рассмотрение совета)
  - council         # совет кооператива (принимает решение по проекту)
  - branch_chairman # председатель кооперативного участка (подтверждает фактическое списание со своего склада)

# ── Секция 2. Действия контракта (блокчейн-уровень) ─────────────────────────
# Имена actions ≤12 символов eosio::name. Внесение проекта на рассмотрение
# совета идёт по типовому процессу «Решение совета» (стандарт sov.decision),
# поэтому здесь перечислены только специфические для списания действия —
# внесение проекта и подтверждение фактического списания по участкам.
actions:
  - name: marketplace::propwroff
    human: Внести проект списания на рассмотрение совета
    actor: chairman
    role: opener
    purpose: >
      Председатель оформляет проект списания скоропорта — список позиций,
      которые невозможно выдать заказчику (просроченные и не востребованные,
      повреждённые, малоценные), — и вносит его на рассмотрение совета.
      Дальнейшее движение проекта (повестка совета, голосование, подписание
      протокола) — по типовому процессу решения совета.

  - name: marketplace::confirmwroff
    human: Подтвердить фактическое списание со склада участка
    actor: branch_chairman
    role: closer
    purpose: >
      После принятия советом положительного решения председатель
      кооперативного участка подтверждает фактическое выбытие имущества со
      склада своего участка, подписывая Служебную записку о списании. Один
      вызов закрывает все позиции данного участка в проекте (гранулярность —
      пер-КУ): их стоимость относится на расход целевых средств программы.
      Когда подтверждены все участки проекта, проект считается завершённым.

  - name: marketplace::execwroff
    human: Исполнить отдельную позицию списания (низкоуровневый примитив)
    actor: chairman
    role: aux
    purpose: >
      Низкоуровневый per-item примитив списания одной позиции авторизованного
      проекта. В штатном пути не используется: фактическое списание идёт через
      подтверждение председателя участка (confirmwroff). Оставлен для
      совместимости и сервисных сценариев.

# ── Секция 3. Граф состояний ────────────────────────────────────────────────
# Сущность: marketplace::writeoff_proposal (таблица wroffprops, scope=coopname).
# Запись агрегирует список позиций, попавших в один цикл списания, и живёт
# только пока проект на повестке совета или ожидает подтверждения складов.
# Подтверждение последнего участка либо отказ совета завершают жизненный цикл —
# запись удаляется, история проекта сохраняется в журнале действий и решении
# совета.
entity: marketplace::writeoff_proposal
entity_human: Проект списания скоропорта
entity_source: cpp/marketplace/src/p.mkt.wroff/

states:
  - name: proposed
    human: На рассмотрении совета
    description: >
      Проект списания внесён на рассмотрение совета. Ожидается решение
      совета по типовому процессу решения совета.
    kind: normal

  - name: authorized
    human: Решение совета принято, ожидает подтверждения складов
    description: >
      Совет принял положительное решение по проекту и подписал протокол.
      Фактическое списание ожидает подтверждения председателя каждого
      кооперативного участка, чьё имущество входит в проект. Позиции
      участка списываются, когда его председатель подписывает Служебную
      записку о списании.
    kind: normal

transitions:
  - from: "∅"
    to: proposed
    action: marketplace::propwroff
    actor: chairman
    guards:
      - Наступил регламентный срок очередного цикла списания (или ручной запуск председателем).
      - На складах участков найдены позиции, удовлетворяющие критериям списания.

  - from: proposed
    to: authorized
    actor: council
    guards:
      - Совет рассмотрел проект и принял положительное решение по типовому процессу решения совета.
      - Председатель подписал Протокол совета о списании скоропорта.

  - from: authorized
    to: "∅"
    action: marketplace::confirmwroff
    actor: branch_chairman
    ledger_code: p.mkt.wroff
    operations:
      - o.mkt.wroff
    guards:
      - Решение совета по проекту принято и протокол подписан.
      - Председатель каждого участка подтвердил фактическое списание со своего
        склада, подписав Служебную записку о списании.
      - Когда подтверждены все участки проекта — имущество ушло из учёта как
        безвозвратные потери, по кошелькам заказчиков движений не было.

  - from: proposed
    to: "∅"
    actor: council
    guards:
      - Совет рассмотрел проект и отклонил его по типовому процессу решения
        совета — позиции остаются на складах участков и могут попасть в
        следующий цикл списания.

# ── Секция 4. Сценарий ──────────────────────────────────────────────────────
scenario:
  steps:
    - step: 1
      title: Формирование и внесение проекта на рассмотрение совета
      actor: chairman
      action: marketplace::propwroff
      description: >
        Кооператив (вручную председателем или по расписанию; точную дату
        согласовывает бухгалтер) опрашивает склады участков и собирает
        позиции, которые невозможно выдать заказчику: просроченные и не
        востребованные, повреждённые, малоценные. Председатель оформляет
        проект списания со списком позиций и вносит проект на рассмотрение
        совета.
      pre:
        - Наступил регламентный срок очередного цикла списания (или ручной запуск).
        - На складах участков найдены позиции, удовлетворяющие критериям списания.
      post:
        - Проект списания сформирован.
        - Проект внесён на рассмотрение совета.

    - step: 2
      title: Рассмотрение проекта советом
      actor: council
      action: null
      description: >
        Совет рассматривает проект по типовому процессу решения совета —
        на очном заседании или в форме заочного голосования — и принимает
        решение. При положительном решении председатель подписывает протокол
        о списании, и проект переходит в ожидание подтверждения складов. При
        отрицательном — проект отклоняется.
      pre:
        - Проект внесён на рассмотрение совета.
      post:
        - Совет принял решение по проекту и подписал протокол.

    - step: 3
      title: Подтверждение фактического списания председателем участка
      actor: branch_chairman
      action: marketplace::confirmwroff
      description: >
        По принятому советом решению председатель каждого кооперативного
        участка, чьё имущество входит в проект, подтверждает фактическое
        списание со своего склада, подписывая Служебную записку о списании.
        После подписи позиции этого участка выбывают со склада; их стоимость
        закрывается на счёт целевого финансирования программы. По кошелькам
        заказчиков движений нет. Когда подтверждены все участки проекта,
        проект завершён.
      pre:
        - Совет принял положительное решение по проекту.
        - Протокол совета о списании подписан.
        - Председатель участка подписал Служебную записку о списании.
      post:
        - Позиции участка списаны со склада.
        - Когда подтверждены все участки — имущество ушло из учёта как безвозвратные потери.

  alternatives:
    - branch: Совет отклонил проект
      at_step: 2
      action: null
      actor: council
      description: >
        Совет отклонил проект списания — например, требуется
        дополнительная экспертиза — либо отложил рассмотрение. Позиции
        остаются на складах участков и могут попасть в следующий цикл
        списания. Движений по имуществу и средствам не происходит.

    - branch: Альтернатива — переуступка имущества по сниженной цене
      at_step: 1
      action: null
      actor: chairman
      description: >
        Альтернативный путь для имущества, ещё пригодного к выдаче —
        например, накануне истечения срока годности: кооператив сам
        выступает поставщиком в новом предложении по сниженной цене и
        ставит имущество на следующий цикл отсечки заявок. В MVP только
        помечен; реализуется отдельным процессом в более поздней фазе.

# ── Секция 5. Документы и подписи ───────────────────────────────────────────
# Заявление председателя — собственный документ процесса (вносится советом
# на рассмотрение). Протокол совета — документ типового процесса решения
# совета (по стандарту sov.decision). Служебная записка о списании —
# собственный документ процесса, подписывается председателем участка при
# подтверждении фактического списания.
documents:
  - action: marketplace::propwroff
    title: Заявление о списании скоропорта
    registry_id: 1108
    signed_by: [chairman]
    stored_in: writeoff_proposals.statement
    note: "Подписывается председателем перед внесением проекта на рассмотрение совета. Содержит список позиций к списанию (участок, наименование, количество, сумма, причина). Источник правды — components/cooptypes/src/cooperative/registry/1108.MarketplaceWriteoffStatement"

  - action: null
    title: Протокол совета о списании скоропорта
    registry_id: 1107
    signed_by: [chairman]
    stored_in: writeoff_proposals.protocol
    note: "Протокол по типовому процессу решения совета (стандарт sov.decision). Подписывается председателем после принятия советом положительного решения. Источник правды — components/cooptypes/src/cooperative/registry/1107.MarketplaceWriteoffProtocol"

  - action: marketplace::confirmwroff
    title: Служебная записка о списании
    registry_id: 1111
    signed_by: [branch_chairman]
    stored_in: "реестр документов (package = proposal_hash)"
    note: "Подписывается председателем кооперативного участка при подтверждении фактического списания со своего склада. Завершающий документ пути; одна записка на один участок. Источник правды — components/cooptypes/src/cooperative/registry/1111.MarketplaceWriteoffServiceMemo"

# ── Секция 6. Операции (Ledger2) ────────────────────────────────────────────
# Одна операция — списание имущества со склада через целевое
# финансирование программы. Срабатывает по каждой позиции участка в
# транзакции подтверждения списания (confirmwroff).
operations:
  - ledger_code: o.mkt.wroff
    human_name: Утилизация скоропорта
    wallet_op: NONE                # только бухпроводка без движения по кошелькам
    # L1 — двойная запись: целевое финансирование расходуется на выбытие
    # имущества со склада (одной операцией).
    debit: 86                      # Целевое финансирование
    credit: 10                     # Материалы
    # L2 — без перевода между кошельками кооператива
    wallet_from: null
    wallet_to: null
    # L3 — без движения по кошелькам пайщиков (чисто кооперативный расход)
    user_wallet: null
    user_ref: null
    available_delta: null
    blocked_delta: null
    amount_ref: wroff_item.amount
    triggered_by: marketplace::confirmwroff
    description: >
      Списание имущества со склада участка по решению совета, подтверждённому
      председателем участка. Двойная запись Дт 86 / Кт 10 — расход целевых
      средств программы на выбытие имущества со склада. Кошельки не двигаются —
      расход чисто кооперативный. Применяется по каждой позиции участка —
      несколько последовательных операций в одной транзакции подтверждения.
`,Hp=`# ─────────────────────────────────────────────────────────────────────────────
# Стандарт «Проведение общего собрания пайщиков».
#
# Контракт meet ведёт жизненный цикл собрания: от подачи повестки и
# авторизации советом до сбора бюллетеней, подписи протокола секретарём
# и председателем. Перезапуск возможен при недостижении кворума.
#
# Источники в коде:
#   • cpp/meet/src/createmeet.cpp     — повестка
#   • cpp/meet/src/authmeet.cpp       — авторизация советом
#   • cpp/meet/src/gmnotify.cpp       — уведомления пайщиков
#   • cpp/meet/src/vote.cpp           — бюллетень
#   • cpp/meet/src/signbysecr.cpp     — подпись секретаря
#   • cpp/meet/src/signbypresid.cpp   — подпись председателя
#   • cpp/meet/src/restartmeet.cpp    — перезапуск
# ─────────────────────────────────────────────────────────────────────────────

process_type: meet.hold
id: public_meet_hold_process
title: Проведение общего собрания пайщиков
slug: hold
status: proposed
contract: meet
purpose: >
  «Проведение общего собрания пайщиков» — высший орган управления
  кооперативом в действии. Инициатор формирует повестку, совет
  авторизует созыв, пайщики уведомляются и голосуют бюллетенями,
  секретарь и председатель подписывают протокол. Если кворум не
  собран — собрание перезапускается с понижением требования к кворуму.

roles:
  - participant       # Пайщик-инициатор / голосующий
  - soviet            # Совет — авторизация созыва
  - secretary         # Секретарь собрания
  - presider          # Председатель собрания

# ── Секция 2. Действия контракта ────────────────────────────────────────────
actions:
  - name: meet::createmeet
    human: Создать собрание
    actor: Пайщик
    role: opener
    purpose: >
      Инициатор формирует повестку дня (список вопросов до 10 шт.), назначает
      председателя и секретаря собрания, указывает даты открытия/закрытия
      голосования (открытие — не ранее чем через 15 дней) и подписывает
      документ предложения повестки. Контракт создаёт запись собрания со
      статусом \`created\` и направляет повестку в совет на авторизацию.
    links:
      - process_type: sov.authpkg
        label: Автоматизированное принятие решения

  - name: meet::authmeet
    human: Авторизовать советом
    actor: Совет
    role: progress
    purpose: >
      Совет (по итогам автоматизированного принятия решения) подписывает
      решение о созыве и переводит собрание в статус \`authorized\` —
      начинается этап оповещений и голосования.

  - name: meet::gmnotify
    human: Оповестить о собрании
    actor: Пайщик
    role: progress
    purpose: >
      Пайщик подписывает уведомление о собрании и фиксируется в списке
      оповещённых. Повторно уведомлять нельзя.

  - name: meet::vote
    human: Подать бюллетень
    actor: Пайщик
    role: progress
    purpose: >
      В окне голосования пайщик подписывает бюллетень с голосами по всем
      вопросам повестки (за/против/воздержался) и подаёт его. Контракт
      обновляет счётчики голосов и пересчитывает текущий процент кворума.

  - name: meet::signbysecr
    human: Подписать секретарю
    actor: Секретарь
    role: progress
    purpose: >
      После закрытия окна голосования и при достижении кворума секретарь
      подписывает протокол собрания и переводит его в статус \`preclosed\` —
      ожидает подписи председателя.

  - name: meet::signbypresid
    human: Подписать председателю
    actor: Председатель
    role: closer
    purpose: >
      Председатель подписывает протокол собрания. По каждому вопросу
      подсчитывается итог (принято/отклонено по правилу 50% +1).
      Собрание переводится в статус «Собрание состоялось», решения
      общего собрания фиксируются как принятые.

  - name: meet::restartmeet
    human: Перезапустить собрание
    actor: Пайщик
    role: progress
    purpose: >
      Если по итогам собрания кворум не достигнут, инициатор подаёт
      новое предложение повестки с новыми датами. Цикл собрания
      увеличивается, требование к явке понижается: первый перезапуск —
      50%, каждый следующий — вдвое от предыдущего, но не ниже 25%.
      Ниже четверти пайщиков планка не опускается никогда. Статус
      собрания переводится в \`onrestart\`, повестка снова направляется
      в совет на авторизацию.

# ── Секция 3. Граф состояний ────────────────────────────────────────────────
entity: meet::genmeet
entity_human: Общее собрание
entity_source: cpp/meet/src/

states:
  - name: created
    human: Повестка подана
    description: >
      Создана запись собрания, повестка дня направлена в совет
      на авторизацию.
    kind: normal

  - name: authorized
    human: Совет авторизовал
    description: >
      Совет принял решение о созыве. Идёт период оповещения пайщиков
      и приём бюллетеней в окне голосования (между датами открытия
      и закрытия).
    kind: normal

  - name: preclosed
    human: Подписано секретарём
    description: >
      Секретарь подписал протокол собрания. Ожидается подпись
      председателя для окончательного закрытия.
    kind: normal

  - name: closed
    human: Собрание состоялось
    description: >
      Председатель подписал протокол, по каждому вопросу зафиксирован
      итог голосования, решения общего собрания приняты.
      Собрание состоялось.
    kind: final

  - name: onrestart
    human: Перезапуск
    description: >
      Кворум не был достигнут — собрание перезапущено с новыми датами.
      Требования к кворуму понижены, повестка снова на авторизации совета.
    kind: virtual
    virtual: true

transitions:
  - from: "∅"
    to: created
    action: meet::createmeet
    actor: Пайщик
    guards:
      - Дата открытия — не ранее чем через 15 дней.
      - Дата закрытия — после даты открытия.
      - Все 4 участника (initiator/presider/secretary + coopname) валидны.
      - Документ повестки подписан ЭЦП.
      - На повестке не более 10 вопросов.

  - from: created
    to: authorized
    action: meet::authmeet
    actor: Совет
    guards:
      - Документ авторизации подписан советом.
      - Собрание в статусе \`created\` или \`onrestart\`.

  - from: authorized
    to: authorized
    action: meet::gmnotify
    actor: Пайщик
    guards:
      - Пайщик ещё не подписывал уведомление.

  - from: authorized
    to: authorized
    action: meet::vote
    actor: Пайщик
    guards:
      - Текущее время в окне [open_at..close_at].
      - Пайщик ещё не голосовал.
      - В режиме «по участкам» голосует только уполномоченный.

  - from: authorized
    to: preclosed
    action: meet::signbysecr
    actor: Секретарь
    guards:
      - Окно голосования закрыто (наступила дата закрытия).
      - Кворум достигнут.
      - Подписывает назначенный секретарь собрания.

  - from: preclosed
    to: closed
    action: meet::signbypresid
    actor: Председатель
    guards:
      - Кворум достигнут.
      - Подписывает назначенный председатель собрания.
      - Протокол подписан и секретарём, и председателем.

  - from: authorized
    to: onrestart
    action: meet::restartmeet
    actor: Пайщик
    guards:
      - Окно голосования закрыто (наступила дата закрытия).
      - Кворум не достигнут.
      - Подаётся новая повестка (отличается от прежней).

# ── Секция 4. Сценарий ──────────────────────────────────────────────────────
scenario:
  steps:
    - step: 1
      title: Создание повестки
      actor: Пайщик
      action: meet::createmeet
      description: >
        Инициатор подаёт повестку дня (вопросы), назначает председателя
        и секретаря, указывает окно голосования (с заделом ≥15 дней
        до открытия). Контракт создаёт запись собрания и направляет
        повестку в совет.
      pre:
        - Документ подписан ЭЦП.
      post:
        - Запись собрания в статусе \`created\`.
        - В совете создана повестка на рассмотрение: авторизовать созыв либо отклонить.

    - step: 2
      title: Авторизация советом
      actor: Совет
      action: meet::authmeet
      description: >
        Совет принимает решение о созыве (типовой процесс автоматизированного
        решения совета) и подписывает авторизацию. Собрание переходит в статус
        «Совет авторизовал» — открыта стадия оповещения и голосования.
      pre:
        - Собрание в статусе \`created\` или \`onrestart\`.
      post:
        - Собрание в статусе «Совет авторизовал».

    - step: 3
      title: Оповещение пайщиков
      actor: Пайщик
      action: meet::gmnotify
      description: >
        Пайщики поочерёдно подписывают уведомления о предстоящем собрании
        (фиксируются в списке оповещённых). Идёт параллельно с подачей
        бюллетеней в окне голосования.
      pre:
        - Собрание в статусе «Совет авторизовал».
      post:
        - Пайщик добавлен в список оповещённых.

    - step: 4
      title: Голосование
      actor: Пайщик
      action: meet::vote
      description: >
        В окне [open_at..close_at] пайщик подписывает бюллетень со всеми
        своими голосами и подаёт его. Контракт обновляет счётчики и
        кворум.
      pre:
        - Собрание в статусе «Совет авторизовал».
        - Время в окне голосования.
      post:
        - Бюллетень учтён; пересчитаны достигнутый процент кворума и признак, достигнут ли кворум.

    - step: 5
      title: Подпись секретаря
      actor: Секретарь
      action: meet::signbysecr
      description: >
        После закрытия окна и при достижении кворума секретарь подписывает
        протокол. Собрание переходит в \`preclosed\`.
      pre:
        - Окно голосования закрыто (наступила дата закрытия).
        - Кворум достигнут.
      post:
        - Собрание в статусе «Подписано секретарём».
        - Зафиксирована подпись секретаря на протоколе.

    - step: 6
      title: Подпись председателя
      actor: Председатель
      action: meet::signbypresid
      description: >
        Председатель подписывает финальный протокол. Подсчитывается
        итог по каждому вопросу (по правилу большинства 50% + 1 голос),
        решения общего собрания фиксируются как принятые — собрание состоялось.
      pre:
        - Собрание в статусе «Подписано секретарём».
      post:
        - Собрание в статусе «Собрание состоялось».
        - Зафиксирована подпись председателя на протоколе.
        - Решения общего собрания приняты.

  alternatives:
    - branch: Перезапуск собрания
      at_step: 4
      action: meet::restartmeet
      actor: Пайщик
      description: >
        Если по окончании окна кворум не собран, инициатор подаёт новое
        предложение повестки с новыми датами. Цикл собрания увеличивается,
        требование к явке понижается, но не ниже 25%. Статус становится
        \`onrestart\`, процесс возвращается на шаг авторизации советом.

# ── Секция 5. Документы и подписи ───────────────────────────────────────────
documents:
  - action: meet::createmeet
    title: Предложение повестки дня общего собрания
    registry_id: 300
    signed_by: [ Пайщик ]
    stored_in: genmeets.proposal

  - action: meet::authmeet
    title: Решение совета о созыве общего собрания
    registry_id: 301
    signed_by: [ Совет ]
    stored_in: genmeets.authorization

  - action: meet::gmnotify
    title: Уведомление о проведении общего собрания
    registry_id: 302
    signed_by: [ Пайщик ]
    stored_in: documents-registry (по hash собрания)

  - action: meet::vote
    title: Заявление с бюллетенем для голосования на общем собрании
    registry_id: 303
    signed_by: [ Пайщик ]
    stored_in: documents-registry (по hash собрания)

  - action: meet::signbysecr
    title: Протокол решения общего собрания (подпись секретаря)
    registry_id: 304
    signed_by: [ Секретарь ]
    stored_in: genmeets.decision1

  - action: meet::signbypresid
    title: Протокол решения общего собрания (подпись председателя)
    registry_id: 304
    signed_by: [ Секретарь, Председатель ]
    stored_in: genmeets.decision2

  - action: meet::restartmeet
    title: Предложение повестки дня общего собрания (повторное)
    registry_id: 300
    signed_by: [ Пайщик ]
    stored_in: genmeets.proposal

# ── Секция 6. Операции ──────────────────────────────────────────────────────
# Общее собрание не двигает кошельки и не делает проводок —
# принятые решения исполняются вне контракта meet.
operations: []

`,Gp=`# ─────────────────────────────────────────────────────────────────────────────
# Стандарт «Приём пайщика» — корневой кооперативный процесс приёма в кооператив.
#
# Манифест в стиле «двухуровневое описание»: каждая описательная секция
# содержит короткий tagline и развёрнутый абзац — для тех, кто пробегает
# глазами, и для тех, кто читает вдумчиво.
#
# Источники правды в коде:
#   • cpp/registrator/registrator.hpp                 — actions
#   • cpp/registrator/src/user/{reguser,confirmpay,confirmreg,declinepay,declinereg}.cpp
#   • cpp/lib/core/ledger2/operations.hpp             — OPERATION_REGISTRY (o.reg.inpay, o.reg.setmin, o.reg.setent)
#   • cpp/lib/core/ledger2/processes.hpp              — processes::registrator::ACCEPT
#   • cpp/lib/core/ledger2/wallets.hpp                — w.reg.pend, w.reg.entry, w.reg.minshr
#   • cpp/lib/core/ledger2/accounts.hpp               — 51 / 76 / 80 / 86
# ─────────────────────────────────────────────────────────────────────────────

# ── Секция 1. Паспорт ───────────────────────────────────────────────────────
process_type: p.reg.accept
id: public_registrator_accept_process
title: Приём пайщика
slug: accept
status: proposed
contract: registrator
summary: >
  От подписанного заявления о вступлении до карточки активного пайщика
  и двух взносов, поставленных на учёт в книге Ledger2.
purpose: >
  «Приём пайщика» — корневой кооперативный процесс. Им человек или
  организация входят в кооператив и получают доступ ко всем остальным
  процессам: внесению и возврату паевых взносов, займам, инвестициям
  в программу «Благорост», голосованию в совете и на общих собраниях.
roles:
  - contributor        # будущий пайщик
  - chairman           # председатель / администратор (запускает reguser от имени coopname)
  - gateway_operator   # кассир (роль человека, работающего с контрактом Gateway)
  - soviet             # совет кооператива

# ── Секция 2. Действия контракта (блокчейн-уровень) ─────────────────────────
actions:
  - name: registrator::reguser
    human: Подать заявление
    actor: contributor
    role: opener
    purpose: >
      Кандидат подписывает заявление, контракт открывает карточку и
      поручает кассиру выпустить счёт. В совет уходит повестка \`joincoop\`.

  - name: registrator::confirmpay
    human: Подтвердить оплату
    actor: gateway_operator
    role: progress
    purpose: >
      Кассир подтверждает зачисление взносов: карточка переходит в \`payed\`,
      повестка \`joincoop\` с колбэками отправлена в совет. Деньги получены,
      но взнос ещё не признан — он ставится на расчёты с пайщиком
      (Дт 51 / Кт 76) и ждёт решения совета.

  - name: registrator::declinepay
    human: Отклонить оплату
    actor: gateway_operator
    role: reject
    purpose: >
      Кассир отклоняет платёж: запись кандидата удаляется, операции в книге
      Ledger2 не создаются (деньги ещё не были приняты). Кандидат может
      подать заявление повторно.

  - name: registrator::confirmreg
    human: Утвердить советом
    actor: soviet
    role: closer
    purpose: >
      Совет утверждает приём: статус карточки → \`active\`, взнос признаётся —
      сумма с расчётов с пайщиком (счёт 76) переносится на паевой фонд (80)
      и целевое финансирование (86) операциями \`o.reg.setmin\` и
      \`o.reg.setent\`. Кандидат добавлен в список участников.

  - name: registrator::declinereg
    human: Отклонить советом
    actor: soviet
    role: reject
    purpose: >
      Совет отказывает в приёме: процесс приёма взноса прерывается и
      начинается отдельный процесс возврата «Возврат регистрационного
      взноса» (p.reg.refund) — полученная сумма возвращается кандидату.

# ── Секция 3. Граф состояний ────────────────────────────────────────────────
# Составная сущность: статус отслеживается в таблице \`candidates\` (created / payed),
# финальный \`active\` проставляется в таблице \`accounts\` в действии confirmreg.
# Для BPMN-графа мы показываем единый жизненный цикл процесса.
entity: "registrator::candidate → registrator::account"
entity_human: "Кандидат → пайщик"
entity_source: cpp/registrator/src/user/

states:
  - name: created
    human: Заявление подано
    description: >
      Запись кандидата открыта, документ заявления (#100) сохранён,
      контракт Gateway держит счёт на \`initial + minimum\`.
    kind: normal

  - name: payed
    human: Взносы оплачены
    description: >
      Деньги получены, карточка в \`payed\`, в совет ушла повестка \`joincoop\`.
      Полученная сумма стоит на расчётах с пайщиком (Дт 51 / Кт 76) и ждёт
      решения совета: при одобрении — признаётся взносом, при отказе —
      возвращается.
    kind: normal

  - name: active
    human: Пайщик активен
    description: >
      \`accounts.status\` = \`active\`, карточка кандидата удалена, в книге
      Ledger2 взнос признан — сумма перенесена со счёта 76 на 80 и 86
      операциями \`o.reg.setmin\` и \`o.reg.setent\`. С этого момента доступны
      все остальные кооперативные процессы.
    kind: final

  - name: removed
    human: Отклонено
    description: >
      Запись кандидата удалена на этапе оплаты (платёж не поступил/отклонён) —
      деньги не принимались, проводок не было.
    kind: virtual
    virtual: true

  - name: refunding
    human: Возврат в процессе
    description: >
      Совет отказал кандидату, чьи деньги уже стоят на счёте 76. Процесс
      приёма прерывается, и управление переходит в отдельный процесс
      «Возврат регистрационного взноса» (p.reg.refund), где касса проводит
      возврат и подтверждает его.
    kind: virtual
    virtual: true

transitions:
  - from: "∅"
    to: created
    action: registrator::reguser
    actor: contributor
    guards:
      - Участник не состоит в кооперативе и не имеет активной карточки участника.
      - Тип пользователя ∈ {individual, entrepreneur, organization}.
      - Заявление подписано ЭЦП.

  - from: created
    to: payed
    action: registrator::confirmpay
    actor: gateway_operator
    ledger_code: p.reg.accept
    operations:
      - o.reg.inpay
    guards:
      - Кассир подтвердил зачисление суммы = initial + minimum.

  - from: created
    to: removed
    action: registrator::declinepay
    actor: gateway_operator
    guards:
      - Оплата не поступила / отклонена.

  - from: payed
    to: active
    action: registrator::confirmreg
    actor: soviet
    ledger_code: p.reg.accept
    operations:
      - o.reg.setmin
      - o.reg.setent
    guards:
      - Совет принял положительное решение по повестке.

  - from: payed
    to: refunding
    action: registrator::declinereg
    actor: soviet
    operations: []
    guards:
      - Совет принял отрицательное решение по повестке.
      - >
        Проводок здесь нет: процесс приёма прерывается и управление переходит
        в отдельный процесс «Возврат регистрационного взноса» (p.reg.refund),
        где возврат проводится на шаге подтверждения кассой (o.reg.refund).

# ── Секция 4. Сценарий ──────────────────────────────────────────────────────
scenario:
  steps:
    - step: 1
      title: Подача заявления
      actor: contributor
      action: registrator::reguser
      description: >
        Кандидат подписывает заявление, контракт открывает карточку.

        Будущий пайщик оформляет и подписывает заявление о вступлении.
        Приложение кооператива вызывает \`registrator::reguser\`
        (с подписью \`coopname\`), указывая тип пользователя и
        территориальный участок. Контракт создаёт запись кандидата
        в статусе \`created\` и поручает контракту Gateway выпустить
        счёт на сумму «вступительный + минимальный паевой взнос».
      pre:
        - Участник ещё не имеет карточки в картотеке и не состоит в кооперативе.
        - Тип пользователя валиден.
      post:
        - В таблице candidates создана запись со статусом \`created\`.
        - Контракт Gateway выпустил счёт с колбэками confirmpay / declinepay.
        - В совет ушла повестка \`joincoop\`.

    - step: 2
      title: Оплата взносов
      actor: gateway_operator
      action: registrator::confirmpay
      description: >
        Деньги пришли — встают на расчёты с пайщиком, карточка движется к совету.

        Кандидат оплачивает счёт (банковский перевод или криптоплатёж).
        Кассир, получив подтверждение зачисления от платёжной системы,
        вызывает \`confirmpay\`. Контракт переводит кандидата в статус
        \`payed\`, создаёт повестку в совете с колбэками
        \`confirmreg\` / \`declinereg\` и ставит полученную сумму на учёт
        операцией \`o.reg.inpay\` (Дт 51 / Кт 76) — деньги получены, но
        взнос ещё не признан и ждёт решения совета.
      pre:
        - Кандидат в статусе \`created\`.
        - На расчётный счёт получена сумма initial + minimum.
      post:
        - Кандидат в статусе \`payed\`.
        - В совете открыта повестка \`joincoop\`.
        - В книге Ledger2 проведена o.reg.inpay (Дт 51 / Кт 76).

    - step: 3
      title: Утверждение советом
      actor: soviet
      action: registrator::confirmreg
      description: >
        Совет утверждает приём — взнос признаётся, кандидат становится пайщиком.

        Совет рассматривает повестку \`joincoop\`. При положительном
        решении контракт \`confirmreg\`: (1) меняет \`accounts.status\`
        на \`active\`; (2) добавляет нового пайщика в список участников
        совета (\`soviet::addpartcpnt\`); (3) признаёт взнос — переносит
        сумму с расчётов с пайщиком (76) на паевой фонд и целевое
        финансирование двумя операциями: \`o.reg.setmin\` (минимальный
        паевой, Дт 76 / Кт 80) и \`o.reg.setent\` (вступительный, Дт 76 / Кт 86).
        Запись кандидата удаляется.
      pre:
        - Кандидат в статусе \`payed\`.
        - Документ \`authorization\` от совета подписан.
      post:
        - accounts.status = \`active\` — пайщик стал активным членом кооператива.
        - Пайщик добавлен в soviet::participants.
        - В книге Ledger2 проведены o.reg.setmin + o.reg.setent.
        - Запись кандидата удалена из таблицы candidates.

  alternatives:
    - branch: Отказ на этапе оплаты
      at_step: 2
      action: registrator::declinepay
      actor: gateway_operator
      description: >
        Платёж не прошёл или был отменён.

        Кассир вызывает \`declinepay\`, кандидат удаляется, операции
        в книге Ledger2 не создаются (деньги ещё не приняты). Кандидат
        может повторить подачу заявления.

    - branch: Отказ совета
      at_step: 3
      action: registrator::declinereg
      actor: soviet
      description: >
        Совет отказывает кандидату.

        Процесс приёма взноса прерывается и начинается отдельный процесс
        «Возврат регистрационного взноса» (p.reg.refund): кандидат переводится
        в состояние возврата, кассе поручается вернуть деньги. Сама проводка
        Дт 76 / Кт 51 и удаление кандидата происходят там — на шаге, когда
        касса фактически проведёт возврат и подтвердит его.

# ── Секция 5. Документы и подписи ───────────────────────────────────────────
documents:
  - action: registrator::reguser
    title: Заявление на вступление в кооператив
    registry_id: 100
    signed_by: [ Кандидат ]
    stored_in: candidates.statement

  - action: registrator::confirmreg
    title: Решение совета о приёме пайщика в кооператив
    registry_id: 501
    signed_by: [ Совет ]
    stored_in: "(authorization — в параметре действия, не хранится в candidates после удаления записи)"

# ── Секция 6. Операции ──────────────────────────────────────────────────────
# Процесс мульти-операционный: три записи OPERATION_REGISTRY с process_type = p.reg.accept.
# Двухфазный учёт: на приёме денег (confirmpay) сумма ставится на расчёты с
# пайщиком (76), на одобрении совета (confirmreg) — признаётся взносом (80/86).
#
# ПЕРЕХОДНЫЙ ПЕРИОД (до 30.07.2026): кандидаты, чей платёж был принят ДО релиза
# двухфазного учёта, не имеют суспенса на счёте 76. Для них одобрение совета
# проводится по старому одношаговому пути — прямой ISSUE Дт 51 / Кт 80
# (o.reg.putmin) и Дт 51 / Кт 86 (o.reg.payent), без переноса с 76. Признак —
# отсутствие баланса кандидата на w.reg.pend (см. registration_migration.hpp).
operations:
  - ledger_code: o.reg.inpay
    human_name: Приём регистрационного взноса в ожидание решения совета
    wallet_op: ISSUE
    wallet_from: ''
    wallet_to: w.reg.pend
    debit: 51
    credit: 76
    amount_ref: candidate.initial + candidate.minimum
    triggered_by: registrator::confirmpay
    description: >
      Постановка полученного регистрационного взноса на учёт. Сумма
      «вступительный + минимальный паевой» зачисляется на кошелёк
      «Регистрационный взнос в ожидании решения совета» (w.reg.pend);
      двойная запись Дт 51 / Кт 76 — деньги на расчётном счёте, обязательство
      перед пайщиком на счёте расчётов. Признание или возврат — позже.

  - ledger_code: o.reg.setmin
    human_name: Зачисление минимального паевого взноса по решению совета
    wallet_op: TRANSFER
    wallet_from: w.reg.pend
    wallet_to: w.reg.minshr
    debit: 76
    credit: 80
    amount_ref: candidate.minimum
    triggered_by: registrator::confirmreg
    description: >
      Признание минимального паевого взноса по решению совета. Сумма
      \`candidate.minimum\` переносится с кошелька ожидания (w.reg.pend) на
      «Минимальный паевой взнос» (w.reg.minshr); двойная запись Дт 76 / Кт 80 —
      стартовый вклад в паевой фонд.

  - ledger_code: o.reg.setent
    human_name: Зачисление вступительного взноса по решению совета
    wallet_op: TRANSFER
    wallet_from: w.reg.pend
    wallet_to: w.reg.entry
    debit: 76
    credit: 86
    amount_ref: candidate.initial
    triggered_by: registrator::confirmreg
    description: >
      Признание вступительного взноса по решению совета. Сумма
      \`candidate.initial\` переносится с кошелька ожидания (w.reg.pend) на
      «Вступительные взносы» (w.reg.entry); двойная запись Дт 76 / Кт 86 —
      целевые поступления в кооперативный фонд.

# ── Секция 7. Связи ─────────────────────────────────────────────────────────
related:
  - process_type: p.reg.refund
    id: public_registrator_refund_process
    relation: triggers
    note: >
      При отрицательном решении совета процесс приёма прерывается и
      запускается «Возврат регистрационного взноса» (p.reg.refund): сумма,
      стоящая на расчётах с пайщиком (счёт 76), возвращается кандидату.

  - process_type: p.wal.depo
    id: public_wallet_deposit_process
    relation: triggers
    note: >
      После статуса \`active\` пайщик может вносить дополнительные паевые
      взносы через процесс «Внесение паевого взноса» (p.wal.depo). Каждый
      такой взнос пополняет кошелёк SHARE_FUND_PAY (w.wal.share) — основу
      для дальнейших операций пайщика (займы, проекты, выходы).

  - process_type: p.wal.wthdrw
    id: public_wallet_withdraw_process
    relation: affects
    note: >
      Выход из кооператива (или частичный возврат паевого взноса деньгами)
      оформляется обратным процессом «Возврат паевого взноса»
      (p.wal.wthdrw) — он списывает средства с кошелька SHARE_FUND_PAY
      по авторизации совета.
`,zp=`# ─────────────────────────────────────────────────────────────────────────────
# Стандарт «Возврат регистрационного взноса» — процесс возврата кандидату
# полученного регистрационного взноса при отказе совета в приёме.
#
# Это самостоятельный процесс: приём пайщика (p.reg.accept) прерывается на
# решении совета, и вместо признания взноса начинается его возврат. Возврат
# идёт в два шага: совет выносит отказ и поручает кассе вернуть деньги, а
# списание со счёта происходит только после того, как касса фактически проведёт
# исходящий перевод кандидату и подтвердит это. До подтверждения деньги стоят
# на расчётах с пайщиком (счёт 76).
#
# Источники правды в коде:
#   • cpp/registrator/registrator.hpp                 — действия declinereg / refundpay
#   • cpp/registrator/src/user/declinereg.cpp         — отказ совета, создание исходящего возврата
#   • cpp/registrator/src/user/refundpay.cpp          — подтверждение возврата кассой, проводка и закрытие
#   • cpp/registrator/src/user/declinerfnd.cpp        — страж: отмена возврата невозможна
#   • cpp/lib/core/ledger2/operations.hpp             — OPERATION_REGISTRY (o.reg.refund)
#   • cpp/lib/core/ledger2/processes.hpp              — processes::registrator::REFUND
#   • cpp/lib/core/ledger2/wallets.hpp                — w.reg.pend
#   • cpp/lib/core/ledger2/accounts.hpp               — 51 / 76
# ─────────────────────────────────────────────────────────────────────────────

# ── Секция 1. Паспорт ───────────────────────────────────────────────────────
process_type: p.reg.refund
id: public_registrator_refund_process
title: Возврат регистрационного взноса
slug: refund
status: proposed
contract: registrator
summary: >
  Когда совет отказывает кандидату в приёме, полученный регистрационный
  взнос возвращается ему: совет поручает возврат, касса проводит перевод и
  подтверждает его, после чего запись кандидата закрывается.
purpose: >
  «Возврат регистрационного взноса» — терминальный процесс приёма пайщика
  по отрицательному решению. Полученные кассой деньги стоят на расчётах
  с пайщиком (счёт 76) в ожидании решения; при отказе совета они
  возвращаются кандидату. Возврат денег не может быть отменён — права
  кандидата на свои средства безусловны.
roles:
  - contributor        # несостоявшийся пайщик (получатель возврата)
  - soviet             # совет кооператива (выносит отказ и поручает возврат)
  - chairman           # председатель / кассир (проводит и подтверждает возврат)

# ── Секция 2. Действия контракта (блокчейн-уровень) ─────────────────────────
actions:
  - name: registrator::declinereg
    human: Отклонить советом
    actor: soviet
    role: opener
    purpose: >
      Совет отказывает кандидату в приёме. Процесс приёма прерывается:
      контракт переводит кандидата в состояние возврата и поручает кассе
      вернуть полученный взнос. Деньги остаются на расчётах с пайщиком
      (счёт 76) — со счёта они ещё не уходят.

  - name: registrator::refundpay
    human: Подтвердить возврат
    actor: chairman
    role: closer
    purpose: >
      Касса фактически провела исходящий перевод денег кандидату и
      подтверждает это. Контракт проводит возврат обратной проводкой
      (Дт 76 / Кт 51) операцией \`o.reg.refund\` и закрывает запись кандидата.
      После этого аккаунт освобождается для повторной подачи заявления на
      том же аккаунте: несостоявшийся пайщик может подать заявку заново.

  - name: registrator::declinerfnd
    human: Отклонить возврат (недопустимо)
    actor: chairman
    role: guard
    purpose: >
      Отмена возврата регистрационного взноса невозможна — действие всегда
      завершается ошибкой. Существует только как обязательная развилка
      процессинга; в интерфейсе кассы кнопки отклонения возврата нет.

# ── Секция 3. Граф состояний ────────────────────────────────────────────────
entity: "registrator::candidate"
entity_human: "Кандидат"
entity_source: cpp/registrator/src/user/declinereg.cpp

states:
  - name: payed
    human: Взносы оплачены
    description: >
      Входное состояние процесса: деньги получены и стоят на расчётах
      с пайщиком (w.reg.pend, счёт 76), повестка \`joincoop\` рассмотрена
      советом с отрицательным решением.
    kind: normal

  - name: refunding
    human: Возврат в процессе
    description: >
      Совет отказал и поручил кассе вернуть взнос. Создан исходящий платёж
      возврата; деньги по-прежнему стоят на расчётах с пайщиком (w.reg.pend,
      счёт 76) и ждут, пока касса фактически проведёт перевод и подтвердит его.
    kind: normal

  - name: refunded
    human: Взнос возвращён
    description: >
      Касса подтвердила исходящий перевод. В книге Ledger2 проведена
      обратная операция \`o.reg.refund\` (Дт 76 / Кт 51) — обязательство перед
      кандидатом закрыто, деньги ушли со счёта. Запись кандидата удалена.
    kind: final

transitions:
  - from: payed
    to: refunding
    action: registrator::declinereg
    actor: soviet
    operations: []
    guards:
      - Совет принял отрицательное решение по повестке \`joincoop\`.
      - Кандидат в статусе \`payed\` (деньги были получены и стоят на счёте 76).

  - from: refunding
    to: refunded
    action: registrator::refundpay
    actor: chairman
    ledger_code: p.reg.refund
    operations:
      - o.reg.refund
    guards:
      - Касса фактически провела исходящий перевод денег кандидату.
      - Кандидат в статусе \`refunding\`.

# ── Секция 4. Сценарий ──────────────────────────────────────────────────────
scenario:
  steps:
    - step: 1
      title: Отказ совета и поручение на возврат
      actor: soviet
      action: registrator::declinereg
      description: >
        Совет рассматривает повестку \`joincoop\` и принимает отрицательное
        решение. Процесс приёма прерывается: кандидат переводится в состояние
        «возврат в процессе», и кассе поручается вернуть полученный
        регистрационный взнос. Деньги остаются на расчётах с пайщиком
        (w.reg.pend, счёт 76) — со счёта они ещё не уходят. Кандидат получает
        уведомление об отказе.
      pre:
        - Кандидат в статусе \`payed\` — деньги получены и стоят на счёте 76.
        - Совет принял отрицательное решение.
      post:
        - Кандидат в статусе \`refunding\`.
        - Создан исходящий платёж возврата на сумму взноса.
        - Деньги по-прежнему на счёте 76 (проводки ещё нет).

    - step: 2
      title: Касса возвращает деньги и подтверждает
      actor: chairman
      action: registrator::refundpay
      description: >
        Касса проводит фактический перевод денег кандидату и подтверждает,
        что возврат выполнен. Контракт возвращает полученный регистрационный
        взнос обратной проводкой \`o.reg.refund\` (Дт 76 / Кт 51): сумма
        «вступительный + минимальный паевой» списывается с кошелька ожидания
        (w.reg.pend), обязательство перед кандидатом закрывается, деньги
        уходят со счёта. Запись кандидата удаляется. Отменить возврат нельзя.
      pre:
        - Кандидат в статусе \`refunding\`.
        - Касса фактически провела исходящий перевод кандидату.
      post:
        - В книге Ledger2 проведена o.reg.refund (Дт 76 / Кт 51).
        - Запись кандидата удалена из картотеки кандидатов.
        - Кандидат получил свои деньги.

# ── Секция 5. Документы и подписи ───────────────────────────────────────────
documents:
  - action: registrator::declinereg
    title: Решение совета об отказе в приёме пайщика
    registry_id: 501
    signed_by: [ Совет ]
    stored_in: "(решение совета — в повестке joincoop)"

# ── Секция 6. Операции ──────────────────────────────────────────────────────
# Возврат проводится одной операцией o.reg.refund — на шаге подтверждения кассой
# (registrator::refundpay), не на решении совета. Отмена возврата невозможна
# (действие-страж declinerfnd всегда завершается ошибкой).
#
# ПЕРЕХОДНЫЙ ПЕРИОД (до 30.07.2026): кандидаты, чей платёж был принят ДО релиза
# двухфазного учёта, суспенса на счёте 76 не имеют — для них on-chain проводки
# возврата нет (как было раньше), деньги возвращает бэкенд банковским переводом,
# а запись кандидата закрывается сразу при отказе совета. Операция o.reg.refund
# проводится только при наличии баланса на w.reg.pend.
operations:
  - ledger_code: o.reg.refund
    human_name: Возврат регистрационного взноса при отказе совета
    wallet_op: BURN
    wallet_from: w.reg.pend
    wallet_to: ''
    debit: 76
    credit: 51
    amount_ref: candidate.initial + candidate.minimum
    triggered_by: registrator::refundpay
    description: >
      Возврат полученного регистрационного взноса. Сумма «вступительный +
      минимальный паевой» списывается с кошелька «Регистрационный взнос
      в ожидании решения совета» (w.reg.pend); двойная запись Дт 76 / Кт 51 —
      закрытие обязательства перед кандидатом и уход денег с расчётного
      счёта. Получателя на цепи нет — деньги фактически переводит касса.

# ── Секция 7. Связи ─────────────────────────────────────────────────────────
related:
  - process_type: p.reg.accept
    id: public_registrator_accept_process
    relation: interrupts
    note: >
      Возврат — отрицательная развилка процесса «Приём пайщика»
      (p.reg.accept). Деньги, поставленные на расчёты с пайщиком операцией
      \`o.reg.inpay\` на этапе оплаты, при отказе совета не признаются
      взносом, а возвращаются этим процессом.
`,Wp=`# ─────────────────────────────────────────────────────────────────────────────
# Стандарт «Присоединение к платформе кооперативной экономики».
# Объединяет два шага:
#   • кооператив-член платформы подписывает соглашение о присоединении;
#   • часть паевого взноса конвертируется в членский взнос платформы (AXON) —
#     оплата ресурсов платформы.
# ─────────────────────────────────────────────────────────────────────────────

process_type: reg.coop
id: public_registrator_coop_process
title: Присоединение к платформе кооперативной экономики
slug: coop
status: proposed
contract: registrator
purpose: >
  «Присоединение к платформе» — кооператив подключается к цифровой
  платформе «Кооперативная Экономика». Председатель подписывает
  соглашение о присоединении, часть паевого взноса конвертируется
  в членский взнос платформы (AXON) для оплаты её ресурсов:
  документооборота, операций, хранения.

roles:
  - chairman          # Председатель/регистратор кооператива (подписант)
  - soviet            # Совет провайдера платформы — авторизация присоединения

# ── Секция 2. Действия контракта ────────────────────────────────────────────
actions:
  - name: registrator::regcoop
    human: Подписать соглашение
    actor: Председатель
    role: opener
    purpose: >
      Председатель кооператива (или регистратор) подписывает пользовательское
      соглашение о присоединении к платформе и фиксирует в реестре платформы
      параметры кооператива (взносы, описание). Запись кооператива переходит
      в статус «pending» и ожидает авторизации советом провайдера.

  - name: soviet::converttoaxn
    human: Конвертировать в AXON
    actor: Совет
    role: progress
    purpose: >
      Совет провайдера выполняет конвертацию указанной суммы из паевого
      фонда кооператива в членский взнос платформы (AXON). Часть средств
      паевого фонда кооператива переводится в фонд членских (делегатских)
      взносов платформы (Дт 80 / Кт 86). После этого кооперативу начислен
      членский взнос платформы (AXON). Статус кооператива при этом не
      меняется — активацию выполняет отдельное закрывающее действие.
    links:
      - process_type: sov.authpkg
        label: Автоматизированное принятие решения

  - name: registrator::stcoopstatus
    human: Активировать кооператив
    actor: Оператор провайдера
    role: closer
    purpose: >
      Оператор провайдера переводит кооператив в статус «активен» — с этого
      момента кооператив является полноправным членом платформы и может
      пользоваться её ресурсами. Это закрывающее действие процесса
      присоединения.

# ── Секция 3. Граф состояний ────────────────────────────────────────────────
entity: registrator::cooperative
entity_human: Кооператив на платформе
entity_source: cpp/registrator/src/coop/

states:
  - name: pending
    human: Соглашение подписано
    description: >
      Кооператив подписал пользовательское соглашение о присоединении
      и зарегистрирован в реестре платформы. Ожидает авторизации советом
      провайдера для активации членства и получения AXON-ресурсов.
    kind: normal

  - name: active
    human: Кооператив активен
    description: >
      Совет провайдера утвердил присоединение, выполнена конвертация паевого
      взноса в AXON. Кооператив — активный член платформы, может пользоваться
      её ресурсами (документооборот, операции, хранение).
    kind: final

transitions:
  - from: "∅"
    to: pending
    action: registrator::regcoop
    actor: Председатель
    guards:
      - Аккаунт уже зарегистрирован как пользователь (через reguser).
      - Тип аккаунта = organization, is_cooperative = true.
      - Все четыре взноса (initial/minimum/org_initial/org_minimum) положительные и в RUB.
      - Соглашение о присоединении подписано ЭЦП председателя.

  - from: pending
    to: active
    action: registrator::stcoopstatus
    actor: Оператор провайдера
    guards:
      - Присоединение кооператива авторизовано советом провайдера.
      - Конвертация паевого взноса в членский (AXON) выполнена.

# ── Секция 4. Сценарий ──────────────────────────────────────────────────────
scenario:
  steps:
    - step: 1
      title: Подписание соглашения
      actor: Председатель
      action: registrator::regcoop
      description: >
        Председатель кооператива подписывает пользовательское соглашение
        о присоединении к платформе и направляет его в контракт регистратора.
        Контракт создаёт/обновляет запись кооператива в реестре, фиксирует
        параметры взносов и кладёт документ соглашения в картотеку.
      pre:
        - Кооператив существует как организация в registrator-картотеке (после reguser).
        - Соглашение подписано ЭЦП.
      post:
        - Кооператив зарегистрирован на платформе в статусе «Соглашение подписано» (ожидает авторизации совета).
        - Подписанное соглашение о присоединении сохранено в реестре документов платформы.

    - step: 2
      title: Конвертация в AXON
      actor: Совет
      action: soviet::converttoaxn
      description: >
        Совет провайдера выполняет конвертацию указанной суммы из паевого
        взноса кооператива в членский взнос платформы (AXON) по курсу 10:1.
        Часть средств паевого фонда кооператива переводится в фонд членских
        (делегатских) взносов платформы, кооперативу начисляется членский
        взнос платформы (AXON), а заявление о конвертации сохраняется
        в реестре документов.
      pre:
        - Кооператив в статусе \`pending\`.
        - Заявление о конвертации паевого взноса в членский взнос корректно оформлено и подписано председателем.
      post:
        - Кооперативу начислен членский взнос платформы (AXON).
        - Средства паевого фонда переведены в фонд членских (делегатских) взносов платформы.
        - Заявление о конвертации зафиксировано в реестре.
        - Кооператив всё ещё в статусе \`pending\` — ожидает активации.

    - step: 3
      title: Активация кооператива
      actor: Оператор провайдера
      action: registrator::stcoopstatus
      description: >
        Оператор провайдера переводит кооператив в статус «активен».
        С этого момента кооператив — полноправный член платформы и может
        пользоваться её ресурсами.
      pre:
        - Присоединение авторизовано советом, конвертация в AXON выполнена.
      post:
        - Кооператив активен на платформе.

# ── Секция 5. Документы и подписи ───────────────────────────────────────────
documents:
  - action: registrator::regcoop
    title: Пользовательское соглашение (оферта) о присоединении к платформе «Кооперативная Экономика»
    registry_id: 50
    signed_by: [ Председатель ]
    stored_in: cooperatives2.document

  - action: soviet::converttoaxn
    title: Заявление о конвертации паевого взноса в членский взнос
    registry_id: 51
    signed_by: [ Председатель ]
    stored_in: documents-registry (по statement.hash)

# ── Секция 6. Операции ───────────────────────────────────────────────────────
# Движение средств при конвертации паевого взноса в членский.
operations:
  - ledger_code: o.sov.axncnv
    human_name: Конвертация паевого взноса в членский взнос
    wallet_op: TRANSFER
    wallet_from: w.wal.share  # ЦПП «Цифровой Кошелёк» — паевые взносы деньгами
    wallet_to: w.sov.delgte    # Делегатские членские взносы
    debit: 80                 # Паевой фонд
    credit: 86                # Целевое финансирование
    amount_ref: amount
    triggered_by: soviet::converttoaxn
    description: >
      Перенос средств из паевого фонда кооператива в фонд делегатских
      (членских) взносов. Двойная запись Дт 80 / Кт 86 — паевой капитал
      превращается в целевые поступления провайдера платформы.

`,Yp=`# ─────────────────────────────────────────────────────────────────────────────
# Стандарт «Перечисление удержанного налога в бюджет» — кооператив как
# налоговый агент гасит долг перед бюджетом единым платежом за период.
#
# Выплачивая доход физическому лицу, кооператив удерживает налог на доходы
# физических лиц: получателю уходит сумма за вычетом налога, а удержанное
# остаётся у кооператива долгом перед бюджетом. Деньги в момент удержания с
# расчётного счёта не уходят — кооператив просто выплатил меньше.
#
# Процесс общий для кооператива, а не для отдельной программы. Сегодня
# удержания возникают при выплате материальной помощи доверенному участка,
# завтра — при выплатах по другим программам; попадают они все в один и тот
# же долг, и платёж закрывает их разом. Поэтому и распоряжается им
# бухгалтерия кооператива, а не программа, где возникла выплата.
#
# Налоги так и платятся: не по каждой выплате, а общей суммой на счёт
# налоговой, с последующим уведомлением о том, как её разнести по видам
# налогов и периодам. Уведомление подаётся за расчётный период — с 1 по 22
# число месяца и с 23 по последнее; платёж бухгалтера привязывается к тому
# периоду, в который он отправлен.
#
# Решение совета не требуется: перечисление удержанного налога — прямая
# обязанность налогового агента, а не распоряжение средствами кооператива.
# Эти деньги получателю уже не принадлежат — они вычтены из его выплаты.
#
# **Движение средств:** заявка бухгалтера → исходящий платёж кассиру →
# подтверждение кассиром фактического перевода по реквизитам налоговой →
# уменьшение долга перед бюджетом (Дт 68 / Кт 51). Если платёж не прошёл —
# долг остаётся в полном объёме, и бухгалтер создаёт заявку заново.

# ── Секция 1. Паспорт ───────────────────────────────────────────────────────
process_type: p.sov.tax
title: Перечисление удержанного налога в бюджет
slug: tax
status: proposed
contract: soviet
purpose: >
  Кооператив, выплачивая доход физическому лицу, удерживает налог и обязан
  перечислить его в бюджет. Бухгалтер видит накопленный долг, отправляет
  сумму на оплату, кассир перечисляет её по реквизитам налоговой и
  подтверждает перевод — в этот момент долг уменьшается. Отправить больше
  удержанного нельзя: перечислить можно только то, что действительно
  удержано с выплат.
roles:
  - accountant # бухгалтер кооператива — отправляет накопленный налог на оплату
  - cashier    # кассир кооператива — перечисляет по реквизитам налоговой
  - gateway    # Система процессинга платежей (фиксирует факт банковского перевода)

# ── Секция 2. Действия контракта (блокчейн-уровень) ─────────────────────────
actions:
  - name: soviet::createtax
    human: Отправить налог на оплату
    actor: accountant
    role: opener
    purpose: >
      Бухгалтер отправляет накопленный удержанный налог в бюджет одним
      платежом за период. Заявка появляется у кассира в реестре исходящих
      платежей вместе с реквизитами налоговой. Отправить больше, чем
      удержано по выплатам, нельзя — в том числе если часть суммы уже
      отправлена и ждёт подтверждения кассиром.

  - name: soviet::taxconfirm
    human: Кассир подтвердил перечисление
    actor: gateway
    role: closer
    purpose: >
      Кассир перечислил налог по реквизитам налоговой и подтвердил перевод.
      В этот момент долг кооператива перед бюджетом уменьшается на сумму
      платежа, а деньги уходят с расчётного счёта.

  - name: soviet::taxdecline
    human: Платёж в бюджет не состоялся
    actor: gateway
    role: closer
    purpose: >
      Кассир не смог провести платёж — например, ошибка в реквизитах или
      банк отклонил перевод. Заявка закрывается, долг перед бюджетом
      остаётся в полном объёме; бухгалтер создаёт заявку заново с
      исправленными данными. Этим налоговый платёж отличается от выплаты по
      решению совета: там отказ кассира невозможен, здесь это обычное
      банковское поручение бухгалтерии.

# ── Секция 3. Граф состояний ────────────────────────────────────────────────
entity: soviet::taxes
entity_human: Заявка на перечисление налога
entity_source: cpp/soviet/src/tax/

# Запись заявки живёт, пока платёж не подтверждён кассиром. Любой финал —
# перечислено или не смогли — стирает запись; история остаётся в журнале
# действий, а состояние платежа видно бухгалтеру в реестре перечислений.
states:
  - name: pending
    human: Отправлена кассиру
    description: >
      Бухгалтер отправил сумму на оплату, заявка ждёт перечисления кассиром.
      Долг перед бюджетом ещё не уменьшен: пока платёж не прошёл, обязательство
      сохраняется. Отправленная сумма при этом больше не доступна к повторной
      отправке — иначе те же деньги ушли бы в бюджет дважды.
    kind: normal

transitions:
  - from: "∅"
    to: pending
    action: soviet::createtax
    actor: accountant
    guards:
      - Сумма платежа больше нуля и указана в валюте кооператива.
      - Заявка с таким идентификатором ещё не создавалась.
      - Сумма не превышает остаток удержанного налога.

  - from: pending
    to: "∅"
    action: soviet::taxconfirm
    actor: gateway
    ledger_code: p.sov.tax
    operations:
      - o.sov.taxpay
    guards:
      - Кассир подтвердил фактический перевод по реквизитам налоговой.
      - Заявка найдена по идентификатору из подтверждения.

  - from: pending
    to: "∅"
    action: soviet::taxdecline
    actor: gateway
    guards:
      - Кассир не смог провести платёж и указал причину.
      - Заявка найдена по идентификатору из отказа. Долг перед бюджетом не уменьшается.

# ── Секция 4. Сценарий ──────────────────────────────────────────────────────
scenario:
  steps:
    - step: 1
      title: Отправка накопленного налога на оплату
      actor: accountant
      action: soviet::createtax
      description: >
        Бухгалтер видит у себя сумму удержанного налога, накопленную по всем
        выплатам кооператива, и сумму, уже отправленную кассиру. Он
        отправляет на оплату остаток — целиком или часть, если часть
        относится к следующему сроку перечисления. Заявка попадает кассиру
        вместе с реквизитами бюджета и назначением платежа.
      pre:
        - По выплатам доходов физическим лицам удержан налог.
      post:
        - Заявка передана кассиру в реестр исходящих платежей.
        - Отправленная сумма исключена из доступной к повторной отправке.

    - step: 2
      title: Перечисление и подтверждение кассиром
      actor: cashier
      action: soviet::taxconfirm
      description: >
        Кассир видит заявку с готовыми реквизитами налоговой, перечисляет
        сумму с расчётного счёта кооператива и подтверждает перевод, приложив
        чек. Только после подтверждения долг перед бюджетом уменьшается.
      pre:
        - Заявка отправлена бухгалтером и ждёт перечисления.
      post:
        - Налог перечислен в бюджет с расчётного счёта кооператива.
        - Долг кооператива перед бюджетом уменьшен на сумму платежа.

  alternatives:
    - branch: Платёж в бюджет не прошёл
      at_step: 2
      action: soviet::taxdecline
      actor: cashier
      description: >
        Не сошлись реквизиты, ошиблись суммой, банк отклонил перевод — заявка
        закрывается, движений по кошелькам не происходит. Долг перед бюджетом
        остаётся в полном объёме, и бухгалтер отправляет платёж заново с
        исправленными данными.

# ── Секция 5. Документы и подписи ───────────────────────────────────────────
# Собственных подписываемых документов у процесса нет: перечисление налога —
# обязанность налогового агента, а не сделка. Подтверждением служит чек об
# оплате, который кассир прикладывает к платежу, и уведомление об исчисленных
# суммах, которое бухгалтер подаёт в налоговую за расчётный период отдельно.
documents: []

# ── Секция 6. Операции (Ledger2) ────────────────────────────────────────────
operations:
  - ledger_code: o.sov.taxpay
    human_name: Перечисление удержанного налога в бюджет
    wallet_op: BURN
    # L1 — двойная запись (расчёты с бюджетом → расчётный счёт)
    debit: 68                      # Расчёты по налогам и сборам
    credit: 51                     # Расчётный счёт
    # L2 — кошельки кооператива
    wallet_from: w.sov.ndfl        # Удержанный налог к перечислению
    wallet_to: null                # деньги уходят из системы банковским переводом
    amount_ref: taxes.amount
    triggered_by: soviet::taxconfirm
    description: >
      Кооператив перечисляет удержанный налог в бюджет единым платежом.
      Бухгалтер отправляет накопленное на оплату, кассир платит по реквизитам
      налоговой и подтверждает перевод — обязательство перед бюджетом
      закрывается. Дт 68 / Кт 51. Перечислить больше удержанного нельзя:
      сумма платежа ограничена остатком кошелька удержанного налога.
`,Jp=`# ─────────────────────────────────────────────────────────────────────────────
# Стандарт «Автоматизированное принятие решений советом».
#
# Универсальный механизм, который любой контракт-инициатор использует, чтобы
# получить от совета согласие на выполнение действия. Поток:
#
#   контракт-инициатор → newpackage / create_agenda → soviet::decisions
#       ↓ голосование (votefor / voteagainst)
#   approved=true → authorize (председатель)
#       ↓
#   authorized=true → exec → callback в исходный контракт (confirmreg /
#                            authmeet / approvereg / authpgprp / authrslt
#                            / authcontrib / authwthd / ... — конкретный
#                            handler заранее зашит в decision.type).
#
# Документ повестки приходит из контракта-инициатора (без registry_id —
# каждое родительское действие приносит свой). Документ авторизации —
# протокол совета, чаще всего FreeDecision (registry_id=600).
#
# Источники в коде:
#   • cpp/soviet/src/doc/newpackage.cpp
#   • cpp/soviet/src/vote/{votefor,voteagainst}.cpp
#   • cpp/soviet/src/decision/{authorize,cancelexprd,declinedec,exec}.cpp
# ─────────────────────────────────────────────────────────────────────────────

process_type: sov.authpkg
id: public_soviet_auto_authorization_process
title: Автоматизированное принятие решений советом
slug: authpkg
status: proposed
contract: soviet
summary: >
  Универсальный путь автоматизированного утверждения решений советом:
  контракт-инициатор подаёт пакет документов, совет голосует, председатель
  авторизует протокол, exec возвращает управление в исходный контракт через
  заранее зашитый callback.
purpose: >
  «Автоматизированное принятие решений» — общий механизм, которым
  пользуются все остальные процессы, требующие согласия совета.
  Контракт-инициатор кладёт пакет документов в очередь совета, члены
  совета голосуют, председатель подписывает протокол, и управление
  возвращается обратно в исходный контракт через заранее зашитый
  callback. Так работают приём пайщика, общие собрания, займы,
  расходы, инвестиции, маркетплейс.

roles:
  - contract_initiator   # Контракт-инициатор пакета (registrator/capital/wallet/meet/…)
  - soviet_member        # Член совета — голосует
  - chairman             # Председатель — подписывает протокол

# ── Секция 2. Действия контракта ────────────────────────────────────────────
actions:
  - name: soviet::newpackage
    human: Подать пакет
    actor: Контракт-инициатор
    role: opener
    purpose: >
      Контракт-инициатор кладёт пакет документов в очередь решений совета.
      В пакете уже зафиксировано, какой callback вызвать при утверждении
      и какой — при отклонении (например, registrator::confirmreg /
      registrator::declinereg). Совет получает повестку.

  - name: soviet::votefor
    human: Голос «за»
    actor: Член совета
    role: progress
    purpose: >
      Член совета голосует «за» по конкретному решению. При достижении
      кворума и большинства голос «за» статус решения переводится в
      approved.

  - name: soviet::voteagainst
    human: Голос «против»
    actor: Член совета
    role: reject
    purpose: >
      Член совета голосует «против». Голос фиксируется; решение само не
      закрывается. Когда против высказалось больше половины состава совета,
      председатель снимает решение явным действием (см. «Отклонить решение»).

  - name: soviet::authorize
    human: Утвердить протокол
    actor: Председатель
    role: closer
    purpose: >
      Председатель подписывает документ-протокол авторизации решения и
      прикладывает его к записи. После этого решение готово к исполнению.

  - name: soviet::exec
    human: Исполнить решение
    actor: Любой триггер
    role: closer
    purpose: >
      Любой пайщик или системный триггер запускает исполнение
      авторизованного решения. exec по полю \`decision.type\` определяет,
      какой именно handler вызвать (withdraw_effect / subaccum_effect /
      authorize_action_effect и т.д.) — это и есть callback в исходный
      контракт, заранее зашитый при формировании пакета.

  - name: soviet::cancelexprd
    human: Отменить просроченное
    actor: Кооператив
    role: reject
    purpose: >
      Если решение не было утверждено в срок, оно отменяется как
      просроченное: в исходный процесс уходит уведомление об отказе,
      решение закрывается. Снятие просроченных решений происходит
      автоматически по истечении срока.

  - name: soviet::declinedec
    human: Отклонить решение
    actor: Председатель
    role: reject
    purpose: >
      Если против решения проголосовало больше половины состава совета,
      председатель явно отклоняет его, не дожидаясь истечения срока: в
      исходный процесс уходит уведомление об отказе, решение закрывается.

# ── Секция 3. Граф состояний ────────────────────────────────────────────────
entity: soviet::decision
entity_human: Решение совета (автоматизированное)
entity_source: cpp/soviet/src/decision/

states:
  - name: pending
    human: Пакет получен
    description: >
      Пакет документов от контракта-инициатора получен советом, идёт
      голосование членов совета.
    kind: normal

  - name: approved
    human: Совет проголосовал «за»
    description: >
      Достигнут консенсус «за». Ожидается подпись протокола председателем.
    kind: normal

  - name: authorized
    human: Протокол утверждён
    description: >
      Председатель подписал протокол. Решение готово к исполнению —
      callback в исходный контракт.
    kind: normal

  - name: executed
    human: Решение исполнено
    description: >
      exec вызвал зашитый в пакете callback (confirm/authorize/approve)
      в исходном контракте. Запись решения удалена. Исходный процесс
      получил утверждение и продолжает свой жизненный цикл.
    kind: final

  - name: rejected
    human: Отклонено
    description: >
      Председатель отклонил решение по большинству «против» (declinedec) либо
      решение отменено как просроченное (cancelexprd, автоматически по сроку).
      В обоих случаях в исходный контракт уходит decline-callback.
    kind: virtual
    virtual: true

transitions:
  - from: "∅"
    to: pending
    action: soviet::newpackage
    actor: Контракт-инициатор
    guards:
      - Контракт-инициатор присутствует в whitelist.
      - Пакет содержит пользователя, тип решения и хеш повестки.

  - from: pending
    to: approved
    action: soviet::votefor
    actor: Член совета
    guards:
      - Достигнут кворум и большинство голосов «за».

  - from: pending
    to: rejected
    action: soviet::declinedec
    actor: Председатель
    guards:
      - Большинство голосов «против».

  - from: pending
    to: rejected
    action: soviet::cancelexprd
    actor: Кооператив
    guards:
      - Истёк срок принятия решения.

  - from: approved
    to: authorized
    action: soviet::authorize
    actor: Председатель
    guards:
      - decision.approved == true.
      - Документ-протокол подписан.

  - from: authorized
    to: executed
    action: soviet::exec
    actor: Любой триггер
    guards:
      - decision.authorized == true.
      - Решение ещё не исполнено.

# ── Секция 4. Сценарий ──────────────────────────────────────────────────────
scenario:
  steps:
    - step: 1
      title: Поступление пакета
      actor: Контракт-инициатор
      action: soviet::newpackage
      description: >
        Контракт-инициатор (registrator/capital/meet/wallet/...) кладёт
        пакет документов в очередь совета и заранее указывает, какой
        callback вызвать при утверждении и при отклонении.
      pre:
        - Инициатор в whitelist контрактов.
      post:
        - В таблице decisions новая запись со статусом \`pending\`.

    - step: 2
      title: Голосование совета
      actor: Член совета
      action: soviet::votefor
      description: >
        Члены совета голосуют по решению (votefor / voteagainst).
        При достижении большинства «за» — approved=true.
      pre:
        - Решение в \`pending\`.
      post:
        - decision.approved (true/false) или решение отменено как просроченное.

    - step: 3
      title: Подписание протокола
      actor: Председатель
      action: soviet::authorize
      description: >
        Председатель подписывает документ-протокол авторизации решения
        и прикладывает его к записи.
      pre:
        - decision.approved == true.
      post:
        - decision.authorized = true.

    - step: 4
      title: Исполнение
      actor: Любой триггер
      action: soviet::exec
      description: >
        exec по \`decision.type\` вызывает зашитый callback в исходном
        контракте. Запись решения удаляется. В исходном процессе срабатывает
        confirm/authorize-handler (например, registrator::confirmreg).
      pre:
        - decision.authorized == true.
      post:
        - В исходном контракте сработал callback по результатам голосования.
        - Запись decisions удалена.

  alternatives:
    - branch: Отказ совета
      at_step: 2
      action: soviet::declinedec
      actor: Председатель
      description: >
        Когда против высказалось больше половины состава совета, голос «против»
        лишь фиксируется. Председатель явно отклоняет решение (declinedec), не
        дожидаясь срока: в исходный контракт уходит decline-callback (например,
        registrator::declinereg), запись решения удаляется.

    - branch: Просрочка
      at_step: 2
      action: soviet::cancelexprd
      actor: Кооператив
      description: >
        Решение не принято в срок — автоматически отменяется по истечении
        срока: в исходный контракт уходит decline-callback, запись удаляется.

# ── Секция 5. Документы и подписи ───────────────────────────────────────────
# Документ повестки приходит из исходного процесса — конкретный registry_id
# у него «свой» (заявление о приёме, заявление на займ и т.д.).
# В этом стандарте мы фиксируем только документ протокола авторизации.
documents:
  - action: soviet::authorize
    title: Протокол решения совета
    registry_id: 600
    signed_by: [ Председатель ]
    stored_in: decisions.authorization
    note: >
      В большинстве автоматизированных процессов документ авторизации —
      «Протокол решения совета» (FreeDecision). В отдельных процессах
      может использоваться специфичный шаблон (например,
      «Решение совета о приёме пайщика» — registry_id=501); в таком случае
      родительский стандарт уточняет это в своей секции documents[].

# ── Секция 6. Операции ──────────────────────────────────────────────────────
# Сам путь голосования не двигает кошельки и не делает проводок.
# Все операции возникают в callback'ах исходных контрактов.
operations: []

# ── Секция 7. Связи ─────────────────────────────────────────────────────────
related:
  - process_type: p.reg.accept
    relation: provides
    note: Через этот путь утверждается приём пайщика в кооператив.

  - process_type: meet.hold
    relation: provides
    note: Через этот путь авторизуется созыв общего собрания.

  - process_type: reg.coop
    relation: provides
    note: Через этот путь утверждается присоединение кооператива к платформе.

  - process_type: sov.decision
    relation: affects
    note: >
      Альтернативный путь — sov.decision — для свободных решений по
      произвольной повестке, поданной пайщиком вручную.
`,Qp=`# ─────────────────────────────────────────────────────────────────────────────
# Стандарт «Принятие свободного решения советом».
#
# Свободное решение — это решение совета по произвольному вопросу повестки,
# которую инициатор формирует и подаёт сам (в отличие от автоматизированных
# решений, которые формируются контрактом-инициатором — см. sov.authpkg).
#
# Источники в коде:
#   • cpp/soviet/src/decision/freedecision.cpp
#   • cpp/soviet/src/vote/votefor.cpp
#   • cpp/soviet/src/vote/voteagainst.cpp
#   • cpp/soviet/src/decision/authorize.cpp
#   • cpp/soviet/src/decision/exec.cpp
#   • cpp/soviet/src/decision/cancelexprd.cpp
#   • cpp/soviet/src/decision/declinedec.cpp (внутри cancelexprd.cpp)
# ─────────────────────────────────────────────────────────────────────────────

process_type: sov.decision
id: public_soviet_free_decision_process
title: Принятие свободного решения советом
slug: decision
status: proposed
contract: soviet
summary: >
  Инициатор предлагает повестку дня собрания совета. Совет голосует, при
  достижении консенсуса председатель утверждает протокол решения, после чего
  решение исполняется.
purpose: >
  «Свободное решение совета» — путь, по которому совет голосует по
  произвольному вопросу: пайщик-инициатор сам формирует и подаёт
  повестку, совет голосует, председатель подписывает протокол.
  Используется для решений, не привязанных к стандартизованному
  контрактному процессу — для тех есть отдельный механизм
  автоматизированного принятия решений.

roles:
  - participant       # Инициатор (член совета или пайщик)
  - soviet_member     # Член совета — голосует
  - chairman          # Председатель совета — авторизует протокол

# ── Секция 2. Действия контракта ────────────────────────────────────────────
actions:
  - name: soviet::freedecision
    human: Подать повестку
    actor: Инициатор
    role: opener
    purpose: >
      Инициатор формирует документ предложения повестки дня собрания совета
      и подаёт его. Контракт вызывает createagenda — создаёт запись решения
      и оповещает членов совета о новом вопросе на голосование.

  - name: soviet::votefor
    human: Голос «за»
    actor: Член совета
    role: progress
    purpose: >
      Член совета голосует «за» по конкретному решению. При достижении
      кворума и консенсуса (большинства голосов «за») статус решения
      переводится в approved, и совет переходит к утверждению протокола.

  - name: soviet::voteagainst
    human: Голос «против»
    actor: Член совета
    role: reject
    purpose: >
      Член совета голосует «против». Голос фиксируется; решение само не
      закрывается. Когда против высказалось больше половины состава совета,
      председатель снимает решение явным действием (см. «Отклонить решение»).

  - name: soviet::authorize
    human: Утвердить протокол
    actor: Председатель
    role: closer
    purpose: >
      Председатель совета подписывает протокол решения совета и прикладывает
      его к утверждённому решению. После этого решение считается
      авторизованным и может быть исполнено.

  - name: soviet::exec
    human: Исполнить решение
    actor: Любой триггер
    role: closer
    purpose: >
      Любой пайщик или системный триггер запускает исполнение авторизованного
      решения. Для свободного решения вызывается freedecision_effect:
      эмитируются служебные события newresolved/newdecision, и запись
      решения удаляется из таблицы decisions.

  - name: soviet::cancelexprd
    human: Отменить просроченное
    actor: Кооператив
    role: reject
    purpose: >
      Если решение не было утверждено в срок, оно отменяется как
      просроченное. Запись удаляется без исполнения. Снятие просроченных
      решений происходит автоматически по истечении срока.

  - name: soviet::declinedec
    human: Отклонить решение
    actor: Председатель
    role: reject
    purpose: >
      Если против решения проголосовало больше половины состава совета,
      председатель явно отклоняет его, не дожидаясь истечения срока.
      Запись удаляется без исполнения.

# ── Секция 3. Граф состояний ────────────────────────────────────────────────
entity: soviet::decision
entity_human: Решение совета (свободное)
entity_source: cpp/soviet/src/decision/

states:
  - name: created
    human: Повестка подана
    description: >
      Документ повестки зарегистрирован, члены совета оповещены через
      createagenda. Идёт голосование.
    kind: normal

  - name: approved
    human: Совет проголосовал «за»
    description: >
      Достигнут консенсус «за». Решение ожидает подписания протокола
      председателем совета.
    kind: normal

  - name: authorized
    human: Протокол утверждён
    description: >
      Председатель подписал протокол решения совета. Решение готово
      к исполнению.
    kind: normal

  - name: executed
    human: Решение исполнено
    description: >
      Решение исполнено: эмитированы события newresolved/newdecision,
      запись удалена из таблицы decisions. Внешний эффект свободного
      решения — фиксация факта; конкретное действие может быть выполнено
      вне контракта (это «свободная воля» совета).
    kind: final

  - name: rejected
    human: Отклонено
    description: >
      Совет проголосовал «против» либо решение было отменено как просроченное.
      Протокол не оформлен, исполнения нет.
    kind: virtual
    virtual: true

transitions:
  - from: "∅"
    to: created
    action: soviet::freedecision
    actor: Инициатор
    guards:
      - Документ повестки подписан ЭЦП инициатора.
      - Инициатор имеет право подавать решения (как член совета или пайщик).

  - from: created
    to: approved
    action: soviet::votefor
    actor: Член совета
    guards:
      - Достигнут кворум.
      - Большинство голосов «за».

  - from: created
    to: rejected
    action: soviet::declinedec
    actor: Председатель
    guards:
      - Большинство голосов «против».

  - from: created
    to: rejected
    action: soviet::cancelexprd
    actor: Кооператив
    guards:
      - Истёк срок принятия решения.

  - from: approved
    to: authorized
    action: soviet::authorize
    actor: Председатель
    guards:
      - decision.approved == true (консенсус совета достигнут).
      - Документ протокола подписан председателем.

  - from: authorized
    to: executed
    action: soviet::exec
    actor: Любой триггер
    guards:
      - decision.authorized == true.
      - Решение ещё не исполнено.

# ── Секция 4. Сценарий ──────────────────────────────────────────────────────
scenario:
  steps:
    - step: 1
      title: Подача повестки
      actor: Инициатор
      action: soviet::freedecision
      description: >
        Инициатор формирует и подаёт документ предложения повестки дня
        собрания совета. Контракт вызывает createagenda и оповещает
        членов совета о новом вопросе.
      pre:
        - Документ повестки подписан ЭЦП.
      post:
        - Запись decisions со статусом ожидает голосов.

    - step: 2
      title: Голосование
      actor: Член совета
      action: soviet::votefor
      description: >
        Члены совета поочерёдно голосуют (votefor / voteagainst).
        При достижении большинства «за» решение помечается как approved.
      pre:
        - Решение ещё не закрыто (created).
      post:
        - decision.approved = true (или решение отклонено / просрочено).

    - step: 3
      title: Утверждение протокола
      actor: Председатель
      action: soviet::authorize
      description: >
        Председатель совета подписывает протокол решения и прикладывает
        его к записи решения.
      pre:
        - decision.approved == true.
        - Протокол подписан председателем.
      post:
        - decision.authorized = true.

    - step: 4
      title: Исполнение решения
      actor: Любой триггер
      action: soviet::exec
      description: >
        Запускается freedecision_effect: эмитируются newresolved/newdecision,
        запись решения удаляется из таблицы.
      pre:
        - decision.authorized == true.
      post:
        - Запись decisions удалена.
        - События newresolved/newdecision разосланы.

  alternatives:
    - branch: Отклонение советом
      at_step: 2
      action: soviet::declinedec
      actor: Председатель
      description: >
        Когда против высказалось большинство состава совета, голос «против»
        лишь фиксируется. Председатель явно отклоняет решение (declinedec) —
        запись удаляется, протокол не оформляется.

    - branch: Просрочка
      at_step: 2
      action: soviet::cancelexprd
      actor: Кооператив
      description: >
        Если решение не было принято в срок, оно автоматически отменяется
        по истечении срока — запись удаляется как просроченная.

# ── Секция 5. Документы и подписи ───────────────────────────────────────────
documents:
  - action: soviet::freedecision
    title: Предложение повестки дня собрания совета
    registry_id: 599
    signed_by: [ Инициатор ]
    stored_in: decisions.statement

  - action: soviet::authorize
    title: Протокол решения совета
    registry_id: 600
    signed_by: [ Председатель ]
    stored_in: decisions.authorization

# ── Секция 6. Операции ──────────────────────────────────────────────────────
# Свободное решение само по себе не двигает кошельки и не делает проводок —
# это путь принятия решения. Конкретные побочные эффекты зависят от того,
# что именно совет решил, и оформляются вне рамок этого процесса.
operations: []

# ── Секция 7. Связи ─────────────────────────────────────────────────────────
related:
  - process_type: sov.authpkg
    relation: affects
    note: >
      Альтернативный путь принятия решений — sov.authpkg — для случаев,
      когда повестку формирует контракт-инициатор автоматически.
`,Xp=`# ─────────────────────────────────────────────────────────────────────────────
# Стандарт «Прикрепление пайщика к кооперативному участку».
#
# Концептуально это часть процесса регистрации пайщика, но action физически
# реализован в контракте Soviet (там лежит реестр participants и веток).
# Файл размещён под cpp/soviet/, contract = soviet.
#
# Источник в коде:
#   • cpp/soviet/src/participant/selectbranch.cpp
# ─────────────────────────────────────────────────────────────────────────────

process_type: sov.selectbranch
id: public_soviet_selectbranch_process
title: Прикрепление пайщика к кооперативному участку
slug: selectbranch
status: proposed
contract: soviet
purpose: >
  «Прикрепление пайщика к кооперативному участку» — пайщик выбирает
  территориальную единицу кооператива (филиал), к которой будет
  относиться. Участок организует местные собрания и решения по своей
  территории. Заявление подписывается одним действием, без отдельной
  авторизации совета.

roles:
  - participant       # Пайщик
  - chairman          # Председатель кооператива (подписывает action от имени coopname)

# ── Секция 2. Действия контракта ────────────────────────────────────────────
actions:
  - name: soviet::selectbranch
    human: Прикрепить к участку
    actor: Пайщик
    role: opener
    purpose: >
      Пайщик подписывает заявление о выборе кооперативного участка.
      Кооператив проверяет, что выбранный участок существует и что пайщик
      состоит в кооперативе, после чего закрепляет пайщика за участком.
      Заявление принимается сразу, одним действием, без отдельного решения совета.

# ── Секция 3. Граф состояний ────────────────────────────────────────────────
entity: soviet::participant
entity_human: Пайщик кооператива
entity_source: cpp/soviet/src/participant/

states:
  - name: attached
    human: Пайщик прикреплён
    description: >
      Пайщик закреплён за выбранным кооперативным участком.
      Заявление о выборе участка зафиксировано в реестре документов кооператива.
    kind: final

transitions:
  - from: "∅"
    to: attached
    action: soviet::selectbranch
    actor: Пайщик
    guards:
      - Пайщик состоит в кооперативе.
      - Выбранный кооперативный участок существует.
      - Заявление подписано ЭЦП.
      - Если участок приватный — пайщик должен быть в белом списке участка.
      - >-
        Председатель кооперативного участка заявление не подаёт: он относится к собственному
        участку с момента избрания и не может выбрать другой, пока исполняет обязанности.

# ── Секция 4. Сценарий ──────────────────────────────────────────────────────
scenario:
  steps:
    - step: 1
      title: Подача заявления о выборе участка
      actor: Пайщик
      action: soviet::selectbranch
      description: >
        Пайщик оформляет и подписывает заявление о выборе кооперативного
        участка. Кооператив закрепляет пайщика за выбранным участком и сразу
        фиксирует заявление в реестре документов — отдельного решения совета
        не требуется.
      pre:
        - Пайщик состоит в кооперативе.
        - Выбранный кооперативный участок существует.
        - Заявление подписано ЭЦП.
        - Приватный участок доступен к выбору только пайщикам из его белого списка.
        - >-
          Действующий председатель участка заявление не подаёт — он закреплён за своим
          участком с момента избрания, и смена участка ему закрыта.
      post:
        - Пайщик закреплён за выбранным кооперативным участком.
        - Документ заявления зафиксирован в реестрах документов.

# ── Секция 5. Документы и подписи ───────────────────────────────────────────
documents:
  - action: soviet::selectbranch
    title: Заявление пайщика о выборе кооперативного участка
    registry_id: 101
    signed_by: [ Пайщик ]
    stored_in: documents-registry (newsubmitted/newresolved)

# ── Секция 6. Операции ──────────────────────────────────────────────────────
operations: []

`,Zp=`# ─────────────────────────────────────────────────────────────────────────────
# Стандарт «Внесение паевого взноса» — деньгами, через целевую потребительскую
# программу «Цифровой Кошелёк».
#
# Одноактовый процесс: один платёж — одно зачисление взноса. Документ не
# подписывается — взнос не требует оформления договора, он подтверждается
# самим фактом платежа.
#
# Канон формата:
#   coopenomics-docs/docs/standards/_spec/canon.md
# Источники правды в коде:
#   • cpp/wallet/wallet.hpp                                 — actions
#   • cpp/wallet/src/deposit/{createdpst,completedpst,declinedpst}.cpp
#   • cpp/lib/core/ledger2/operations.hpp                   — o.wal.depcpl
#   • cpp/lib/core/ledger2/processes.hpp                    — processes::wallet::DEPOSIT
# ─────────────────────────────────────────────────────────────────────────────

# ── Секция 1. Паспорт ───────────────────────────────────────────────────────
process_type: p.wal.depo
id: public_wallet_deposit_process
title: Внесение паевого взноса
slug: deposit
status: proposed
contract: wallet
purpose: >
  «Внесение паевого взноса» — пайщик пополняет свой паевой кошелёк
  деньгами. Это самый частый кооперативный процесс: документ не
  оформляется, факт взноса подтверждается самим платежом через кассира.
  После подтверждения деньги становятся доступны пайщику для остальных
  кооперативных процессов — займов, инвестиций, поставок, выходов.
roles:
  - contributor
  - gateway_operator

# ── Секция 2. Действия контракта (блокчейн-уровень) ─────────────────────────
actions:
  - name: wallet::createdpst
    human: Создать заявку
    actor: contributor
    role: opener
    purpose: >
      Создать заявку на внесение паевого взноса. Пайщику выставляется
      платёжный счёт через кассира. Дальше процесс идёт по одному из двух
      путей: оплата подтверждена либо платёж отклонён.
  - name: wallet::completedpst
    human: Подтвердить оплату
    actor: gateway_operator
    role: closer
    purpose: >
      Кассир подтвердил поступление платежа. Это закрывающее действие: сумма
      взноса зачисляется на паевой кошелёк пайщика, а заявка закрывается.
  - name: wallet::declinedpst
    human: Отклонить оплату
    actor: gateway_operator
    role: reject
    purpose: Отклонить платёж (неверные реквизиты, возврат, тайм-аут).

# ── Секция 3. Граф состояний ────────────────────────────────────────────────
# Заявка на взнос. Статус «учтён» — виртуально-финальный: после подтверждения
# оплаты заявка закрывается, узел в графе нужен лишь чтобы обозначить успешное
# завершение.
entity: wallet::deposit
entity_human: Заявка на взнос
entity_source: cpp/wallet/src/deposit/

states:
  - name: pending
    human: Ожидает оплаты
    description: Заявка создана, пайщику выставлен платёжный счёт, ожидается оплата.
    kind: normal
  - name: completed
    human: Взнос учтён
    description: >
      Оплата подтверждена, средства учтены на паевом кошельке пайщика
      и в бухгалтерии (счета 51 / 80). Заявка закрыта.
    kind: final
  - name: removed
    human: Отклонено
    description: Платёж не прошёл или был отменён — заявка закрыта, взнос не зачислён.
    kind: virtual
    virtual: true

transitions:
  - from: "∅"
    to: pending
    action: wallet::createdpst
    actor: contributor
    guards:
      - Пайщик имеет статус active в кооперативе.
      - Сумма взноса валидна (положительна, в системном символе).
      - Заявка на этот взнос ещё не создавалась (нет повторной подачи).

  - from: pending
    to: completed
    action: wallet::completedpst
    actor: gateway_operator
    ledger_code: o.wal.depcpl
    operations:
      - o.wal.depcpl
    guards:
      - Кассир подтвердил поступление платежа от пайщика.

  - from: pending
    to: removed
    action: wallet::declinedpst
    actor: gateway_operator
    guards:
      - Платёж не прошёл или был отклонён платёжной системой.

# ── Секция 4. Сценарий ──────────────────────────────────────────────────────
scenario:
  steps:
    - step: 1
      title: Создание заявки на взнос
      actor: contributor
      action: wallet::createdpst
      description: >
        Пайщик инициирует внесение взноса с указанием суммы. Создаётся заявка
        в статусе «ожидает оплаты», и пайщику выставляется платёжный счёт.
      pre:
        - Пайщик — активный участник кооператива.
        - Эта заявка ещё не подавалась (нет дубля).
      post:
        - Создана заявка в статусе «ожидает оплаты».
        - Пайщику выставлен платёжный счёт; по нему возможны два исхода — оплата подтверждена либо отклонена.

    - step: 2
      title: Подтверждение платежа
      actor: gateway_operator
      action: wallet::completedpst
      description: >
        После поступления денег на расчётный счёт кооператива кассир
        подтверждает оплату. В результате сумма взноса зачисляется на паевой
        кошелёк пайщика, в бухгалтерии формируется проводка Дт 51 / Кт 80,
        а заявка закрывается.
      pre:
        - Заявка в статусе \`pending\`.
        - Кассир получил оплату от пайщика.
      post:
        - Паевой кошелёк пайщика пополнен на сумму взноса.
        - Взнос зачислён на паевой фонд пайщика (с бухгалтерской проводкой).
        - Заявка закрыта.

  alternatives:
    - branch: Отклонение платежа
      at_step: 2
      action: wallet::declinedpst
      actor: gateway_operator
      description: >
        Платёж не поступил или был отменён платёжной системой. Кассир отклоняет
        оплату — заявка закрывается, взнос не зачисляется. Пайщик может подать
        заявку заново.

# ── Секция 5. Документы и подписи ───────────────────────────────────────────
# Для внесения взноса документ не оформляется — факт внесения подтверждается
# самим платежом. Секция оставлена пустой намеренно.
documents: []

# ── Секция 6. Операции ──────────────────────────────────────────────────────
# Одноактовый процесс: одна операция — зачисление взноса.
# (Технические подробности реестра — в коде.)
operations:
  - ledger_code: o.wal.depcpl
    human_name: Внесение пайщиком паевого взноса
    wallet_op: ISSUE
    wallet_from: ''
    wallet_to: w.wal.share          # ЦПП «Цифровой Кошелёк» — паевые взносы деньгами
    debit: 51                # Расчётный счёт
    credit: 80               # Паевой фонд (складочный капитал)
    amount_ref: deposit.quantity
    triggered_by: wallet::completedpst
    description: >
      Первичный вход средств на кошелёк пайщика «ЦПП Цифровой Кошелёк».
      Двойная запись Дт 51 / Кт 80 — деньги пайщика поступили на расчётный
      счёт и увеличили складочный капитал кооператива. Средства доступны
      пайщику для дальнейших операций (инвестиции в программы, конвертации,
      возврат).

`,ed=`# ─────────────────────────────────────────────────────────────────────────────
# Стандарт «Возврат паевого взноса» — деньгами, через целевую потребительскую
# программу «Цифровой Кошелёк» (паевой кошелёк пайщика).
#
# Четырёхактовый процесс с одной авторизацией советом. Запись заявки живёт в
# таблице \`withdraws\` от создания до выплаты или отказа. На подаче заявки сумма
# переводится в кошелёк-резерв выплат. После подтверждения выплаты сумма
# списывается из резерва и уходит пайщику банковским переводом.
#
# Источники правды в коде:
#   • cpp/wallet/wallet.hpp                                 — actions
#   • cpp/wallet/src/withdraw/{createwthd,authwthd,completewthd,declinewthd}.cpp
#   • cpp/lib/domain/table_wallet_withdraws.hpp             — entity withdraws
#   • cpp/lib/core/ledger2/operations.hpp                   — o.wal.wthcpl
#   • cpp/lib/core/ledger2/processes.hpp                    — processes::wallet::WITHDRAW
# ─────────────────────────────────────────────────────────────────────────────

# ── Секция 1. Паспорт ───────────────────────────────────────────────────────
process_type: p.wal.wthdrw
id: public_wallet_withdraw_process
title: Возврат паевого взноса
slug: withdraw
status: proposed
contract: wallet
summary: >
  Пайщик получает обратно ранее внесённый паевой взнос деньгами. Заявку
  авторизует совет, кассир подтверждает выплату через платёжную систему.
purpose: >
  «Возврат паевого взноса» — пайщик получает обратно ранее внесённые
  деньги. Заявку рассматривает совет, после авторизации выплата
  отправляется через кассира. Это обратный процесс к «Внесению паевого
  взноса».
roles:
  - contributor
  - soviet
  - gateway_operator

# ── Секция 2. Действия контракта ────────────────────────────────────────────
actions:
  - name: wallet::createwthd
    human: Подать заявление
    actor: contributor
    role: opener
    purpose: >
      Сумма возврата резервируется: переводится с паевого кошелька пайщика
      в кошелёк-резерв выплат, и вопрос о возврате выносится на рассмотрение
      совета.
  - name: wallet::authwthd
    human: Авторизовать выплату
    actor: soviet
    role: progress
    purpose: >
      Совет авторизует выплату единым решением: заявка переходит в статус
      «Выплата отправлена», и в платёжную систему передаётся поручение на
      выплату пайщику.
  - name: wallet::completewthd
    human: Подтвердить выплату
    actor: gateway_operator
    role: closer
    purpose: >
      Платёжная система подтвердила выплату пайщику. Это завершающее
      действие: зарезервированная сумма списывается из резерва выплат —
      деньги ушли пайщику. Заявка закрывается.
  - name: wallet::declinewthd
    human: Отклонить
    actor: soviet
    role: reject
    purpose: >
      Отказ на любом из этапов до выплаты. Зарезервированная сумма
      возвращается из резерва выплат обратно на паевой кошелёк пайщика,
      заявка закрывается.

# ── Секция 3. Граф состояний ────────────────────────────────────────────────
entity: wallet::withdraw
entity_human: Заявка на возврат
entity_source: cpp/wallet/src/withdraw/

states:
  - name: pending
    human: Ожидает решения совета
    description: >
      Заявка создана, сумма возврата зарезервирована (переведена с паевого
      кошелька пайщика в кошелёк-резерв выплат), вопрос вынесен на
      рассмотрение совета.
    kind: normal
  - name: authorized
    human: Выплата отправлена
    description: >
      Совет авторизовал выплату, в платёжную систему передано поручение на
      выплату пайщику, ожидается подтверждение выплаты.
    kind: normal
  - name: completed
    human: Возврат выплачен
    description: >
      Платёжная система подтвердила выплату, зарезервированная сумма
      списана из резерва выплат — деньги ушли пайщику. Заявка закрыта.
    kind: final
  - name: removed
    human: Отклонено
    description: >
      Возврат не состоялся: зарезервированная сумма возвращена из резерва
      выплат обратно на паевой кошелёк пайщика, заявка закрыта.
    kind: virtual
    virtual: true

transitions:
  - from: "∅"
    to: pending
    action: wallet::createwthd
    actor: contributor
    ledger_code: o.wal.wthreq
    operations:
      - o.wal.wthreq
    guards:
      - Пайщик имеет статус active.
      - Сумма возврата не превышает доступного остатка на паевом кошельке пайщика.
      - withdraw_hash уникален.
      - Заявление подписано ЭЦП пайщика.

  - from: pending
    to: authorized
    action: wallet::authwthd
    actor: soviet
    guards:
      - Решение совета по повестке возврата подписано и авторизовано.

  - from: authorized
    to: completed
    action: wallet::completewthd
    actor: gateway_operator
    ledger_code: o.wal.wthcpl
    operations:
      - o.wal.wthcpl
    guards:
      - Платёжная система подтвердила выплату пайщику.

  - from: pending
    to: removed
    action: wallet::declinewthd
    actor: soviet
    ledger_code: o.wal.wthdec
    operations:
      - o.wal.wthdec
    guards:
      - Совет отклонил возврат.

  - from: authorized
    to: removed
    action: wallet::declinewthd
    actor: gateway_operator
    ledger_code: o.wal.wthdec
    operations:
      - o.wal.wthdec
    guards:
      - Выплата не прошла или была отклонена платёжной системой.

# ── Секция 4. Сценарий ──────────────────────────────────────────────────────
scenario:
  steps:
    - step: 1
      title: Подача заявления о возврате
      actor: contributor
      action: wallet::createwthd
      description: >
        Пайщик оформляет и подписывает заявление о возврате паевого взноса.
        Заявка регистрируется, сумма возврата резервируется на паевом
        кошельке пайщика, а вопрос о возврате выносится на рассмотрение
        совета.
      pre:
        - Пайщик — активный участник кооператива.
        - Сумма возврата ≤ доступного остатка.
      post:
        - Заявка зарегистрирована со статусом «Ожидает решения совета».
        - Сумма возврата переведена с паевого кошелька пайщика в кошелёк-резерв выплат.
        - Совет получил повестку о возврате.

    - step: 2
      title: Авторизация выплаты советом
      actor: soviet
      action: wallet::authwthd
      description: >
        Совет принимает положительное решение по повестке возврата и
        авторизует выплату единым шагом. В платёжную систему передаётся
        поручение на выплату пайщику. Заявка переходит в статус «Выплата
        отправлена».
      pre:
        - Заявка в статусе \`pending\`.
        - Решение совета подписано и авторизовано председателем.
      post:
        - Статус заявки \`authorized\`.
        - В платёжную систему передано поручение на выплату пайщику.

    - step: 3
      title: Подтверждение выплаты
      actor: gateway_operator
      action: wallet::completewthd
      description: >
        Платёжная система подтверждает выплату пайщику. Зарезервированная
        сумма списывается из резерва выплат — деньги ушли пайщику, заявка
        закрывается.
      pre:
        - Заявка в статусе \`authorized\`.
        - Платёжная система подтвердила выплату.
      post:
        - Зарезервированная сумма списана из резерва выплат — деньги ушли пайщику.
        - Выплата проведена; деньги списаны из резерва выплат.
        - Запись заявки удалена.

  alternatives:
    - branch: Отказ совета или платёжной системы
      at_step: 2
      action: wallet::declinewthd
      actor: soviet
      description: >
        Совет принял отрицательное решение либо платёжная система отклонила
        выплату. Зарезервированная сумма возвращена из резерва выплат на
        паевой кошелёк пайщика, заявка закрыта.

# ── Секция 5. Документы и подписи ───────────────────────────────────────────
documents:
  - step: 1
    title: Заявление на возврат паевого взноса денежными средствами
    registry_id: 900
    signed_by: [contributor]
    stored_in: withdraws.statement

  - step: 2
    title: Решение совета о возврате паевого взноса (авторизация на выплату)
    registry_id: 901
    signed_by: [soviet]
    stored_in: "(authorization — параметр действия)"

# ── Секция 6. Операции ──────────────────────────────────────────────────────
operations:
  - ledger_code: o.wal.wthreq
    human_name: Резервирование паевого под запрос на возврат
    wallet_op: TRANSFER
    wallet_from: w.wal.share
    wallet_to: w.wal.wpend
    debit: ~
    credit: ~
    amount_ref: withdraw.quantity
    triggered_by: wallet::createwthd
    description: >
      При создании заявки сумма возврата переводится с паевого кошелька
      пайщика в кошелёк-резерв выплат. Бухгалтерская проводка не создаётся —
      движение идёт по кошелькам, бухгалтерский счёт не меняется.

  - ledger_code: o.wal.wthdec
    human_name: Снятие резерва паевого после отклонения запроса на возврат
    wallet_op: TRANSFER
    wallet_from: w.wal.wpend
    wallet_to: w.wal.share
    debit: ~
    credit: ~
    amount_ref: withdraw.quantity
    triggered_by: wallet::declinewthd
    description: >
      Зеркальная операция к резервированию: сумма возвращается из
      кошелька-резерва выплат на паевой кошелёк пайщика. Бухгалтерская
      проводка не создаётся.

  - ledger_code: o.wal.wthcpl
    human_name: Возврат паевого взноса пайщику
    wallet_op: BURN
    wallet_from: w.wal.wpend           # кошелёк-резерв возвратов
    wallet_to: ~                       # деньги уходят из системы, получателя на цепи нет
    debit: 80                  # Паевой фонд (складочный капитал)
    credit: 51                 # Расчётный счёт
    amount_ref: withdraw.quantity
    triggered_by: wallet::completewthd
    description: >
      Завершение возврата: зарезервированная сумма списывается из
      кошелька-резерва выплат — деньги уходят пайщику банковским переводом.
      В бухгалтерии прошла проводка Дт 80 / Кт 51 — паевой фонд уменьшился,
      деньги ушли с расчётного счёта пайщику.

# ── Секция 7. Связи ─────────────────────────────────────────────────────────
related:
  - process_type: p.wal.depo
    id: public_wallet_deposit_process
    relation: affects
    note: >
      Прямой процесс — внесение паевого взноса (p.wal.depo). Возврат
      списывается с того же паевого кошелька пайщика, который пополняется
      при внесении взноса.

  - process_type: p.reg.accept
    id: public_registrator_accept_process
    relation: provides
    note: >
      Возврат возможен только если пайщик прошёл «Приём пайщика» и имеет
      статус активного пайщика с положительным остатком на паевом кошельке.
`,_i=Symbol.for("yaml.alias"),Hs=Symbol.for("yaml.document"),xn=Symbol.for("yaml.map"),_c=Symbol.for("yaml.pair"),pn=Symbol.for("yaml.scalar"),yt=Symbol.for("yaml.seq"),Ge=Symbol.for("yaml.node.type"),bt=e=>!!e&&typeof e=="object"&&e[Ge]===_i,Qr=e=>!!e&&typeof e=="object"&&e[Ge]===Hs,tr=e=>!!e&&typeof e=="object"&&e[Ge]===xn,pe=e=>!!e&&typeof e=="object"&&e[Ge]===_c,oe=e=>!!e&&typeof e=="object"&&e[Ge]===pn,rr=e=>!!e&&typeof e=="object"&&e[Ge]===yt;function le(e){if(e&&typeof e=="object")switch(e[Ge]){case xn:case yt:return!0}return!1}function ue(e){if(e&&typeof e=="object")switch(e[Ge]){case _i:case xn:case pn:case yt:return!0}return!1}const yc=e=>(oe(e)||le(e))&&!!e.anchor,Bn=Symbol("break visit"),nd=Symbol("skip children"),Ft=Symbol("remove node");function wt(e,n){const t=td(n);Qr(e)?nt(null,e.contents,t,Object.freeze([e]))===Ft&&(e.contents=null):nt(null,e,t,Object.freeze([]))}wt.BREAK=Bn;wt.SKIP=nd;wt.REMOVE=Ft;function nt(e,n,t,r){const s=rd(e,n,t,r);if(ue(s)||pe(s))return sd(e,r,s),nt(e,s,t,r);if(typeof s!="symbol"){if(le(n)){r=Object.freeze(r.concat(n));for(let i=0;i<n.items.length;++i){const o=nt(i,n.items[i],t,r);if(typeof o=="number")i=o-1;else{if(o===Bn)return Bn;o===Ft&&(n.items.splice(i,1),i-=1)}}}else if(pe(n)){r=Object.freeze(r.concat(n));const i=nt("key",n.key,t,r);if(i===Bn)return Bn;i===Ft&&(n.key=null);const o=nt("value",n.value,t,r);if(o===Bn)return Bn;o===Ft&&(n.value=null)}}return s}function td(e){return typeof e=="object"&&(e.Collection||e.Node||e.Value)?Object.assign({Alias:e.Node,Map:e.Node,Scalar:e.Node,Seq:e.Node},e.Value&&{Map:e.Value,Scalar:e.Value,Seq:e.Value},e.Collection&&{Map:e.Collection,Seq:e.Collection},e):e}function rd(e,n,t,r){var s,i,o,a,c;if(typeof t=="function")return t(e,n,r);if(tr(n))return(s=t.Map)==null?void 0:s.call(t,e,n,r);if(rr(n))return(i=t.Seq)==null?void 0:i.call(t,e,n,r);if(pe(n))return(o=t.Pair)==null?void 0:o.call(t,e,n,r);if(oe(n))return(a=t.Scalar)==null?void 0:a.call(t,e,n,r);if(bt(n))return(c=t.Alias)==null?void 0:c.call(t,e,n,r)}function sd(e,n,t){const r=n[n.length-1];if(le(r))r.items[e]=t;else if(pe(r))e==="key"?r.key=t:r.value=t;else if(Qr(r))r.contents=t;else{const s=bt(r)?"alias":"scalar";throw new Error(`Cannot replace node with ${s} parent`)}}const id={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},od=e=>e.replace(/[!,[\]{}]/g,n=>id[n]);class Re{constructor(n,t){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},Re.defaultYaml,n),this.tags=Object.assign({},Re.defaultTags,t)}clone(){const n=new Re(this.yaml,this.tags);return n.docStart=this.docStart,n}atDocument(){const n=new Re(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:Re.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},Re.defaultTags);break}return n}add(n,t){this.atNextDocument&&(this.yaml={explicit:Re.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},Re.defaultTags),this.atNextDocument=!1);const r=n.trim().split(/[ \t]+/),s=r.shift();switch(s){case"%TAG":{if(r.length!==2&&(t(0,"%TAG directive should contain exactly two parts"),r.length<2))return!1;const[i,o]=r;return this.tags[i]=o,!0}case"%YAML":{if(this.yaml.explicit=!0,r.length!==1)return t(0,"%YAML directive should contain exactly one part"),!1;const[i]=r;if(i==="1.1"||i==="1.2")return this.yaml.version=i,!0;{const o=/^\d+\.\d+$/.test(i);return t(6,`Unsupported YAML version ${i}`,o),!1}}default:return t(0,`Unknown directive ${s}`,!0),!1}}tagName(n,t){if(n==="!")return"!";if(n[0]!=="!")return t(`Not a valid tag: ${n}`),null;if(n[1]==="<"){const o=n.slice(2,-1);return o==="!"||o==="!!"?(t(`Verbatim tags aren't resolved, so ${n} is invalid.`),null):(n[n.length-1]!==">"&&t("Verbatim tags must end with a >"),o)}const[,r,s]=n.match(/^(.*!)([^!]*)$/s);s||t(`The ${n} tag has no suffix`);const i=this.tags[r];if(i)try{return i+decodeURIComponent(s)}catch(o){return t(String(o)),null}return r==="!"?n:(t(`Could not resolve tag: ${n}`),null)}tagString(n){for(const[t,r]of Object.entries(this.tags))if(n.startsWith(r))return t+od(n.substring(r.length));return n[0]==="!"?n:`!<${n}>`}toString(n){const t=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],r=Object.entries(this.tags);let s;if(n&&r.length>0&&ue(n.contents)){const i={};wt(n.contents,(o,a)=>{ue(a)&&a.tag&&(i[a.tag]=!0)}),s=Object.keys(i)}else s=[];for(const[i,o]of r)i==="!!"&&o==="tag:yaml.org,2002:"||(!n||s.some(a=>a.startsWith(o)))&&t.push(`%TAG ${i} ${o}`);return t.join(`
`)}}Re.defaultYaml={explicit:!1,version:"1.2"};Re.defaultTags={"!!":"tag:yaml.org,2002:"};function bc(e){if(/[\x00-\x19\s,[\]{}]/.test(e)){const t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(e)}`;throw new Error(t)}return!0}function wc(e){const n=new Set;return wt(e,{Value(t,r){r.anchor&&n.add(r.anchor)}}),n}function vc(e,n){for(let t=1;;++t){const r=`${e}${t}`;if(!n.has(r))return r}}function ad(e,n){const t=[],r=new Map;let s=null;return{onAnchor:i=>{t.push(i),s??(s=wc(e));const o=vc(n,s);return s.add(o),o},setAnchors:()=>{for(const i of t){const o=r.get(i);if(typeof o=="object"&&o.anchor&&(oe(o.node)||le(o.node)))o.node.anchor=o.anchor;else{const a=new Error("Failed to resolve repeated object (this should not happen)");throw a.source=i,a}}},sourceObjects:r}}function tt(e,n,t,r){if(r&&typeof r=="object")if(Array.isArray(r))for(let s=0,i=r.length;s<i;++s){const o=r[s],a=tt(e,r,String(s),o);a===void 0?delete r[s]:a!==o&&(r[s]=a)}else if(r instanceof Map)for(const s of Array.from(r.keys())){const i=r.get(s),o=tt(e,r,s,i);o===void 0?r.delete(s):o!==i&&r.set(s,o)}else if(r instanceof Set)for(const s of Array.from(r)){const i=tt(e,r,s,s);i===void 0?r.delete(s):i!==s&&(r.delete(s),r.add(i))}else for(const[s,i]of Object.entries(r)){const o=tt(e,r,s,i);o===void 0?delete r[s]:o!==i&&(r[s]=o)}return e.call(n,t,r)}function He(e,n,t){if(Array.isArray(e))return e.map((r,s)=>He(r,String(s),t));if(e&&typeof e.toJSON=="function"){if(!t||!yc(e))return e.toJSON(n,t);const r={aliasCount:0,count:1,res:void 0};t.anchors.set(e,r),t.onCreate=i=>{r.res=i,delete t.onCreate};const s=e.toJSON(n,t);return t.onCreate&&t.onCreate(s),s}return typeof e=="bigint"&&!(t!=null&&t.keep)?Number(e):e}class yi{constructor(n){Object.defineProperty(this,Ge,{value:n})}clone(){const n=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(n.range=this.range.slice()),n}toJS(n,{mapAsMap:t,maxAliasCount:r,onAnchor:s,reviver:i}={}){if(!Qr(n))throw new TypeError("A document argument is required");const o={anchors:new Map,doc:n,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof r=="number"?r:100},a=He(this,"",o);if(typeof s=="function")for(const{count:c,res:l}of o.anchors.values())s(l,c);return typeof i=="function"?tt(i,{"":a},"",a):a}}class bi extends yi{constructor(n){super(_i),this.source=n,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(n,t){if((t==null?void 0:t.maxAliasCount)===0)throw new ReferenceError("Alias resolution is disabled");let r;t!=null&&t.aliasResolveCache?r=t.aliasResolveCache:(r=[],wt(n,{Node:(i,o)=>{(bt(o)||yc(o))&&r.push(o)}}),t&&(t.aliasResolveCache=r));let s;for(const i of r){if(i===this)break;i.anchor===this.source&&(s=i)}return s}toJSON(n,t){if(!t)return{source:this.source};const{anchors:r,doc:s,maxAliasCount:i}=t,o=this.resolve(s,t);if(!o){const c=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(c)}let a=r.get(o);if(a||(He(o,null,t),a=r.get(o)),(a==null?void 0:a.res)===void 0){const c="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(c)}if(i>=0&&(a.count+=1,a.aliasCount===0&&(a.aliasCount=br(s,o,r)),a.count*a.aliasCount>i)){const c="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(c)}return a.res}toString(n,t,r){const s=`*${this.source}`;if(n){if(bc(this.source),n.options.verifyAliasOrder&&!n.anchors.has(this.source)){const i=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(i)}if(n.implicitKey)return`${s} `}return s}}function br(e,n,t){if(bt(n)){const r=n.resolve(e),s=t&&r&&t.get(r);return s?s.count*s.aliasCount:0}else if(le(n)){let r=0;for(const s of n.items){const i=br(e,s,t);i>r&&(r=i)}return r}else if(pe(n)){const r=br(e,n.key,t),s=br(e,n.value,t);return Math.max(r,s)}return 1}const kc=e=>!e||typeof e!="function"&&typeof e!="object";class H extends yi{constructor(n){super(pn),this.value=n}toJSON(n,t){return t!=null&&t.keep?this.value:He(this.value,n,t)}toString(){return String(this.value)}}H.BLOCK_FOLDED="BLOCK_FOLDED";H.BLOCK_LITERAL="BLOCK_LITERAL";H.PLAIN="PLAIN";H.QUOTE_DOUBLE="QUOTE_DOUBLE";H.QUOTE_SINGLE="QUOTE_SINGLE";const cd="tag:yaml.org,2002:";function ld(e,n,t){if(n){const r=t.filter(i=>i.tag===n),s=r.find(i=>!i.format)??r[0];if(!s)throw new Error(`Tag ${n} not found`);return s}return t.find(r=>{var s;return((s=r.identify)==null?void 0:s.call(r,e))&&!r.format})}function Jt(e,n,t){var f,p,d;if(Qr(e)&&(e=e.contents),ue(e))return e;if(pe(e)){const b=(p=(f=t.schema[xn]).createNode)==null?void 0:p.call(f,t.schema,null,t);return b.items.push(e),b}(e instanceof String||e instanceof Number||e instanceof Boolean||typeof BigInt<"u"&&e instanceof BigInt)&&(e=e.valueOf());const{aliasDuplicateObjects:r,onAnchor:s,onTagObj:i,schema:o,sourceObjects:a}=t;let c;if(r&&e&&typeof e=="object"){if(c=a.get(e),c)return c.anchor??(c.anchor=s(e)),new bi(c.anchor);c={anchor:null,node:null},a.set(e,c)}n!=null&&n.startsWith("!!")&&(n=cd+n.slice(2));let l=ld(e,n,o.tags);if(!l){if(e&&typeof e.toJSON=="function"&&(e=e.toJSON()),!e||typeof e!="object"){const b=new H(e);return c&&(c.node=b),b}l=e instanceof Map?o[xn]:Symbol.iterator in Object(e)?o[yt]:o[xn]}i&&(i(l),delete t.onTagObj);const u=l!=null&&l.createNode?l.createNode(t.schema,e,t):typeof((d=l==null?void 0:l.nodeClass)==null?void 0:d.from)=="function"?l.nodeClass.from(t.schema,e,t):new H(e);return n?u.tag=n:l.default||(u.tag=l.tag),c&&(c.node=u),u}function Ir(e,n,t){let r=t;for(let s=n.length-1;s>=0;--s){const i=n[s];if(typeof i=="number"&&Number.isInteger(i)&&i>=0){const o=[];o[i]=r,r=o}else r=new Map([[i,r]])}return Jt(r,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:e,sourceObjects:new Map})}const Rt=e=>e==null||typeof e=="object"&&!!e[Symbol.iterator]().next().done;class Sc extends yi{constructor(n,t){super(n),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(n){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return n&&(t.schema=n),t.items=t.items.map(r=>ue(r)||pe(r)?r.clone(n):r),this.range&&(t.range=this.range.slice()),t}addIn(n,t){if(Rt(n))this.add(t);else{const[r,...s]=n,i=this.get(r,!0);if(le(i))i.addIn(s,t);else if(i===void 0&&this.schema)this.set(r,Ir(this.schema,s,t));else throw new Error(`Expected YAML collection at ${r}. Remaining path: ${s}`)}}deleteIn(n){const[t,...r]=n;if(r.length===0)return this.delete(t);const s=this.get(t,!0);if(le(s))return s.deleteIn(r);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${r}`)}getIn(n,t){const[r,...s]=n,i=this.get(r,!0);return s.length===0?!t&&oe(i)?i.value:i:le(i)?i.getIn(s,t):void 0}hasAllNullValues(n){return this.items.every(t=>{if(!pe(t))return!1;const r=t.value;return r==null||n&&oe(r)&&r.value==null&&!r.commentBefore&&!r.comment&&!r.tag})}hasIn(n){const[t,...r]=n;if(r.length===0)return this.has(t);const s=this.get(t,!0);return le(s)?s.hasIn(r):!1}setIn(n,t){const[r,...s]=n;if(s.length===0)this.set(r,t);else{const i=this.get(r,!0);if(le(i))i.setIn(s,t);else if(i===void 0&&this.schema)this.set(r,Ir(this.schema,s,t));else throw new Error(`Expected YAML collection at ${r}. Remaining path: ${s}`)}}}const ud=e=>e.replace(/^(?!$)(?: $)?/gm,"#");function bn(e,n){return/^\n+$/.test(e)?e.substring(1):n?e.replace(/^(?! *$)/gm,n):e}const Un=(e,n,t)=>e.endsWith(`
`)?bn(t,n):t.includes(`
`)?`
`+bn(t,n):(e.endsWith(" ")?"":" ")+t,Ec="flow",Gs="block",wr="quoted";function Xr(e,n,t="flow",{indentAtStart:r,lineWidth:s=80,minContentWidth:i=20,onFold:o,onOverflow:a}={}){if(!s||s<0)return e;s<i&&(i=0);const c=Math.max(1+i,1+s-n.length);if(e.length<=c)return e;const l=[],u={};let f=s-n.length;typeof r=="number"&&(r>s-Math.max(2,i)?l.push(0):f=s-r);let p,d,b=!1,g=-1,y=-1,v=-1;t===Gs&&(g=Co(e,g,n.length),g!==-1&&(f=g+c));for(let O;O=e[g+=1];){if(t===wr&&O==="\\"){switch(y=g,e[g+1]){case"x":g+=3;break;case"u":g+=5;break;case"U":g+=9;break;default:g+=1}v=g}if(O===`
`)t===Gs&&(g=Co(e,g,n.length)),f=g+n.length+c,p=void 0;else{if(O===" "&&d&&d!==" "&&d!==`
`&&d!=="	"){const N=e[g+1];N&&N!==" "&&N!==`
`&&N!=="	"&&(p=g)}if(g>=f)if(p)l.push(p),f=p+c,p=void 0;else if(t===wr){for(;d===" "||d==="	";)d=O,O=e[g+=1],b=!0;const N=g>v+1?g-2:y-1;if(u[N])return e;l.push(N),u[N]=!0,f=N+c,p=void 0}else b=!0}d=O}if(b&&a&&a(),l.length===0)return e;o&&o();let w=e.slice(0,l[0]);for(let O=0;O<l.length;++O){const N=l[O],L=l[O+1]||e.length;N===0?w=`
${n}${e.slice(0,L)}`:(t===wr&&u[N]&&(w+=`${e[N]}\\`),w+=`
${n}${e.slice(N+1,L)}`)}return w}function Co(e,n,t){let r=n,s=n+1,i=e[s];for(;i===" "||i==="	";)if(n<s+t)i=e[++n];else{do i=e[++n];while(i&&i!==`
`);r=n,s=n+1,i=e[s]}return r}const Zr=(e,n)=>({indentAtStart:n?e.indent.length:e.indentAtStart,lineWidth:e.options.lineWidth,minContentWidth:e.options.minContentWidth}),es=e=>/^(%|---|\.\.\.)/m.test(e);function fd(e,n,t){if(!n||n<0)return!1;const r=n-t,s=e.length;if(s<=r)return!1;for(let i=0,o=0;i<s;++i)if(e[i]===`
`){if(i-o>r)return!0;if(o=i+1,s-o<=r)return!1}return!0}function Ut(e,n){const t=JSON.stringify(e);if(n.options.doubleQuotedAsJSON)return t;const{implicitKey:r}=n,s=n.options.doubleQuotedMinMultiLineLength,i=n.indent||(es(e)?"  ":"");let o="",a=0;for(let c=0,l=t[c];l;l=t[++c])if(l===" "&&t[c+1]==="\\"&&t[c+2]==="n"&&(o+=t.slice(a,c)+"\\ ",c+=1,a=c,l="\\"),l==="\\")switch(t[c+1]){case"u":{o+=t.slice(a,c);const u=t.substr(c+2,4);switch(u){case"0000":o+="\\0";break;case"0007":o+="\\a";break;case"000b":o+="\\v";break;case"001b":o+="\\e";break;case"0085":o+="\\N";break;case"00a0":o+="\\_";break;case"2028":o+="\\L";break;case"2029":o+="\\P";break;default:u.substr(0,2)==="00"?o+="\\x"+u.substr(2):o+=t.substr(c,6)}c+=5,a=c+1}break;case"n":if(r||t[c+2]==='"'||t.length<s)c+=1;else{for(o+=t.slice(a,c)+`

`;t[c+2]==="\\"&&t[c+3]==="n"&&t[c+4]!=='"';)o+=`
`,c+=2;o+=i,t[c+2]===" "&&(o+="\\"),c+=1,a=c+1}break;default:c+=1}return o=a?o+t.slice(a):t,r?o:Xr(o,i,wr,Zr(n,!1))}function zs(e,n){if(n.options.singleQuote===!1||n.implicitKey&&e.includes(`
`)||/[ \t]\n|\n[ \t]/.test(e))return Ut(e,n);const t=n.indent||(es(e)?"  ":""),r="'"+e.replace(/'/g,"''").replace(/\n+/g,`$&
${t}`)+"'";return n.implicitKey?r:Xr(r,t,Ec,Zr(n,!1))}function rt(e,n){const{singleQuote:t}=n.options;let r;if(t===!1)r=Ut;else{const s=e.includes('"'),i=e.includes("'");s&&!i?r=zs:i&&!s?r=Ut:r=t?zs:Ut}return r(e,n)}let Ws;try{Ws=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{Ws=/\n+(?!\n|$)/g}function vr({comment:e,type:n,value:t},r,s,i){const{blockQuote:o,commentString:a,lineWidth:c}=r.options;if(!o||/\n[\t ]+$/.test(t))return rt(t,r);const l=r.indent||(r.forceBlockIndent||es(t)?"  ":""),u=o==="literal"?!0:o==="folded"||n===H.BLOCK_FOLDED?!1:n===H.BLOCK_LITERAL?!0:!fd(t,c,l.length);if(!t)return u?`|
`:`>
`;let f,p;for(p=t.length;p>0;--p){const L=t[p-1];if(L!==`
`&&L!=="	"&&L!==" ")break}let d=t.substring(p);const b=d.indexOf(`
`);b===-1?f="-":t===d||b!==d.length-1?(f="+",i&&i()):f="",d&&(t=t.slice(0,-d.length),d[d.length-1]===`
`&&(d=d.slice(0,-1)),d=d.replace(Ws,`$&${l}`));let g=!1,y,v=-1;for(y=0;y<t.length;++y){const L=t[y];if(L===" ")g=!0;else if(L===`
`)v=y;else break}let w=t.substring(0,v<y?v+1:y);w&&(t=t.substring(w.length),w=w.replace(/\n+/g,`$&${l}`));let N=(g?l?"2":"1":"")+f;if(e&&(N+=" "+a(e.replace(/ ?[\r\n]+/g," ")),s&&s()),!u){const L=t.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${l}`);let U=!1;const M=Zr(r,!0);o!=="folded"&&n!==H.BLOCK_FOLDED&&(M.onOverflow=()=>{U=!0});const $=Xr(`${w}${L}${d}`,l,Gs,M);if(!U)return`>${N}
${l}${$}`}return t=t.replace(/\n+/g,`$&${l}`),`|${N}
${l}${w}${t}${d}`}function pd(e,n,t,r){const{type:s,value:i}=e,{actualString:o,implicitKey:a,indent:c,indentStep:l,inFlow:u}=n;if(a&&i.includes(`
`)||u&&/[[\]{},]/.test(i))return rt(i,n);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(i))return a||u||!i.includes(`
`)?rt(i,n):vr(e,n,t,r);if(!a&&!u&&s!==H.PLAIN&&i.includes(`
`))return vr(e,n,t,r);if(es(i)){if(c==="")return n.forceBlockIndent=!0,vr(e,n,t,r);if(a&&c===l)return rt(i,n)}const f=i.replace(/\n+/g,`$&
${c}`);if(o){const p=g=>{var y;return g.default&&g.tag!=="tag:yaml.org,2002:str"&&((y=g.test)==null?void 0:y.test(f))},{compat:d,tags:b}=n.doc.schema;if(b.some(p)||d!=null&&d.some(p))return rt(i,n)}return a?f:Xr(f,c,Ec,Zr(n,!1))}function wi(e,n,t,r){const{implicitKey:s,inFlow:i}=n,o=typeof e.value=="string"?e:Object.assign({},e,{value:String(e.value)});let{type:a}=e;a!==H.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value)&&(a=H.QUOTE_DOUBLE);const c=u=>{switch(u){case H.BLOCK_FOLDED:case H.BLOCK_LITERAL:return s||i?rt(o.value,n):vr(o,n,t,r);case H.QUOTE_DOUBLE:return Ut(o.value,n);case H.QUOTE_SINGLE:return zs(o.value,n);case H.PLAIN:return pd(o,n,t,r);default:return null}};let l=c(a);if(l===null){const{defaultKeyType:u,defaultStringType:f}=n.options,p=s&&u||f;if(l=c(p),l===null)throw new Error(`Unsupported default string type ${p}`)}return l}function Ac(e,n){const t=Object.assign({blockQuote:!0,commentString:ud,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trailingComma:!1,trueStr:"true",verifyAliasOrder:!0},e.schema.toStringOptions,n);let r;switch(t.collectionStyle){case"block":r=!1;break;case"flow":r=!0;break;default:r=null}return{anchors:new Set,doc:e,flowCollectionPadding:t.flowCollectionPadding?" ":"",indent:"",indentStep:typeof t.indent=="number"?" ".repeat(t.indent):"  ",inFlow:r,options:t}}function dd(e,n){var s;if(n.tag){const i=e.filter(o=>o.tag===n.tag);if(i.length>0)return i.find(o=>o.format===n.format)??i[0]}let t,r;if(oe(n)){r=n.value;let i=e.filter(o=>{var a;return(a=o.identify)==null?void 0:a.call(o,r)});if(i.length>1){const o=i.filter(a=>a.test);o.length>0&&(i=o)}t=i.find(o=>o.format===n.format)??i.find(o=>!o.format)}else r=n,t=e.find(i=>i.nodeClass&&r instanceof i.nodeClass);if(!t){const i=((s=r==null?void 0:r.constructor)==null?void 0:s.name)??(r===null?"null":typeof r);throw new Error(`Tag not resolved for ${i} value`)}return t}function hd(e,n,{anchors:t,doc:r}){if(!r.directives)return"";const s=[],i=(oe(e)||le(e))&&e.anchor;i&&bc(i)&&(t.add(i),s.push(`&${i}`));const o=e.tag??(n.default?null:n.tag);return o&&s.push(r.directives.tagString(o)),s.join(" ")}function gt(e,n,t,r){var c;if(pe(e))return e.toString(n,t,r);if(bt(e)){if(n.doc.directives)return e.toString(n);if((c=n.resolvedAliases)!=null&&c.has(e))throw new TypeError("Cannot stringify circular structure without alias nodes");n.resolvedAliases?n.resolvedAliases.add(e):n.resolvedAliases=new Set([e]),e=e.resolve(n.doc)}let s;const i=ue(e)?e:n.doc.createNode(e,{onTagObj:l=>s=l});s??(s=dd(n.doc.schema.tags,i));const o=hd(i,s,n);o.length>0&&(n.indentAtStart=(n.indentAtStart??0)+o.length+1);const a=typeof s.stringify=="function"?s.stringify(i,n,t,r):oe(i)?wi(i,n,t,r):i.toString(n,t,r);return o?oe(i)||a[0]==="{"||a[0]==="["?`${o} ${a}`:`${o}
${n.indent}${a}`:a}function md({key:e,value:n},t,r,s){const{allNullValues:i,doc:o,indent:a,indentStep:c,options:{commentString:l,indentSeq:u,simpleKeys:f}}=t;let p=ue(e)&&e.comment||null;if(f){if(p)throw new Error("With simple keys, key nodes cannot have comments");if(le(e)||!ue(e)&&typeof e=="object"){const M="With simple keys, collection cannot be used as a key value";throw new Error(M)}}let d=!f&&(!e||p&&n==null&&!t.inFlow||le(e)||(oe(e)?e.type===H.BLOCK_FOLDED||e.type===H.BLOCK_LITERAL:typeof e=="object"));t=Object.assign({},t,{allNullValues:!1,implicitKey:!d&&(f||!i),indent:a+c});let b=!1,g=!1,y=gt(e,t,()=>b=!0,()=>g=!0);if(!d&&!t.inFlow&&y.length>1024){if(f)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");d=!0}if(t.inFlow){if(i||n==null)return b&&r&&r(),y===""?"?":d?`? ${y}`:y}else if(i&&!f||n==null&&d)return y=`? ${y}`,p&&!b?y+=Un(y,t.indent,l(p)):g&&s&&s(),y;b&&(p=null),d?(p&&(y+=Un(y,t.indent,l(p))),y=`? ${y}
${a}:`):(y=`${y}:`,p&&(y+=Un(y,t.indent,l(p))));let v,w,O;ue(n)?(v=!!n.spaceBefore,w=n.commentBefore,O=n.comment):(v=!1,w=null,O=null,n&&typeof n=="object"&&(n=o.createNode(n))),t.implicitKey=!1,!d&&!p&&oe(n)&&(t.indentAtStart=y.length+1),g=!1,!u&&c.length>=2&&!t.inFlow&&!d&&rr(n)&&!n.flow&&!n.tag&&!n.anchor&&(t.indent=t.indent.substring(2));let N=!1;const L=gt(n,t,()=>N=!0,()=>g=!0);let U=" ";if(p||v||w){if(U=v?`
`:"",w){const M=l(w);U+=`
${bn(M,t.indent)}`}L===""&&!t.inFlow?U===`
`&&O&&(U=`

`):U+=`
${t.indent}`}else if(!d&&le(n)){const M=L[0],$=L.indexOf(`
`),G=$!==-1,te=t.inFlow??n.flow??n.items.length===0;if(G||!te){let ye=!1;if(G&&(M==="&"||M==="!")){let he=L.indexOf(" ");M==="&"&&he!==-1&&he<$&&L[he+1]==="!"&&(he=L.indexOf(" ",he+1)),(he===-1||$<he)&&(ye=!0)}ye||(U=`
${t.indent}`)}}else(L===""||L[0]===`
`)&&(U="");return y+=U+L,t.inFlow?N&&r&&r():O&&!N?y+=Un(y,t.indent,l(O)):g&&s&&s(),y}function Nc(e,n){(e==="debug"||e==="warn")&&console.warn(n)}const lr="<<",wn={identify:e=>e===lr||typeof e=="symbol"&&e.description===lr,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new H(Symbol(lr)),{addToJSMap:Oc}),stringify:()=>lr},gd=(e,n)=>(wn.identify(n)||oe(n)&&(!n.type||n.type===H.PLAIN)&&wn.identify(n.value))&&(e==null?void 0:e.doc.schema.tags.some(t=>t.tag===wn.tag&&t.default));function Oc(e,n,t){const r=Tc(e,t);if(rr(r))for(const s of r.items)ks(e,n,s);else if(Array.isArray(r))for(const s of r)ks(e,n,s);else ks(e,n,r)}function ks(e,n,t){const r=Tc(e,t);if(!tr(r))throw new Error("Merge sources must be maps or map aliases");const s=r.toJSON(null,e,Map);for(const[i,o]of s)n instanceof Map?n.has(i)||n.set(i,o):n instanceof Set?n.add(i):Object.prototype.hasOwnProperty.call(n,i)||Object.defineProperty(n,i,{value:o,writable:!0,enumerable:!0,configurable:!0});return n}function Tc(e,n){return e&&bt(n)?n.resolve(e.doc,e):n}function Rc(e,n,{key:t,value:r}){if(ue(t)&&t.addToJSMap)t.addToJSMap(e,n,r);else if(gd(e,t))Oc(e,n,r);else{const s=He(t,"",e);if(n instanceof Map)n.set(s,He(r,s,e));else if(n instanceof Set)n.add(s);else{const i=_d(t,s,e),o=He(r,i,e);i in n?Object.defineProperty(n,i,{value:o,writable:!0,enumerable:!0,configurable:!0}):n[i]=o}}return n}function _d(e,n,t){if(n===null)return"";if(typeof n!="object")return String(n);if(ue(e)&&(t!=null&&t.doc)){const r=Ac(t.doc,{});r.anchors=new Set;for(const i of t.anchors.keys())r.anchors.add(i.anchor);r.inFlow=!0,r.inStringifyKey=!0;const s=e.toString(r);if(!t.mapKeyWarned){let i=JSON.stringify(s);i.length>40&&(i=i.substring(0,36)+'..."'),Nc(t.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${i}. Set mapAsMap: true to use object keys.`),t.mapKeyWarned=!0}return s}return JSON.stringify(n)}function vi(e,n,t){const r=Jt(e,void 0,t),s=Jt(n,void 0,t);return new De(r,s)}class De{constructor(n,t=null){Object.defineProperty(this,Ge,{value:_c}),this.key=n,this.value=t}clone(n){let{key:t,value:r}=this;return ue(t)&&(t=t.clone(n)),ue(r)&&(r=r.clone(n)),new De(t,r)}toJSON(n,t){const r=t!=null&&t.mapAsMap?new Map:{};return Rc(t,r,this)}toString(n,t,r){return n!=null&&n.doc?md(this,n,t,r):JSON.stringify(this)}}function Ic(e,n,t){return(n.inFlow??e.flow?bd:yd)(e,n,t)}function yd({comment:e,items:n},t,{blockItemPrefix:r,flowChars:s,itemIndent:i,onChompKeep:o,onComment:a}){const{indent:c,options:{commentString:l}}=t,u=Object.assign({},t,{indent:i,type:null});let f=!1;const p=[];for(let b=0;b<n.length;++b){const g=n[b];let y=null;if(ue(g))!f&&g.spaceBefore&&p.push(""),Cr(t,p,g.commentBefore,f),g.comment&&(y=g.comment);else if(pe(g)){const w=ue(g.key)?g.key:null;w&&(!f&&w.spaceBefore&&p.push(""),Cr(t,p,w.commentBefore,f))}f=!1;let v=gt(g,u,()=>y=null,()=>f=!0);y&&(v+=Un(v,i,l(y))),f&&y&&(f=!1),p.push(r+v)}let d;if(p.length===0)d=s.start+s.end;else{d=p[0];for(let b=1;b<p.length;++b){const g=p[b];d+=g?`
${c}${g}`:`
`}}return e?(d+=`
`+bn(l(e),c),a&&a()):f&&o&&o(),d}function bd({items:e},n,{flowChars:t,itemIndent:r}){const{indent:s,indentStep:i,flowCollectionPadding:o,options:{commentString:a}}=n;r+=i;const c=Object.assign({},n,{indent:r,inFlow:!0,type:null});let l=!1,u=0;const f=[];for(let b=0;b<e.length;++b){const g=e[b];let y=null;if(ue(g))g.spaceBefore&&f.push(""),Cr(n,f,g.commentBefore,!1),g.comment&&(y=g.comment);else if(pe(g)){const w=ue(g.key)?g.key:null;w&&(w.spaceBefore&&f.push(""),Cr(n,f,w.commentBefore,!1),w.comment&&(l=!0));const O=ue(g.value)?g.value:null;O?(O.comment&&(y=O.comment),O.commentBefore&&(l=!0)):g.value==null&&(w!=null&&w.comment)&&(y=w.comment)}y&&(l=!0);let v=gt(g,c,()=>y=null);l||(l=f.length>u||v.includes(`
`)),b<e.length-1?v+=",":n.options.trailingComma&&(n.options.lineWidth>0&&(l||(l=f.reduce((w,O)=>w+O.length+2,2)+(v.length+2)>n.options.lineWidth)),l&&(v+=",")),y&&(v+=Un(v,r,a(y))),f.push(v),u=f.length}const{start:p,end:d}=t;if(f.length===0)return p+d;if(!l){const b=f.reduce((g,y)=>g+y.length+2,2);l=n.options.lineWidth>0&&b>n.options.lineWidth}if(l){let b=p;for(const g of f)b+=g?`
${i}${s}${g}`:`
`;return`${b}
${s}${d}`}else return`${p}${o}${f.join(" ")}${o}${d}`}function Cr({indent:e,options:{commentString:n}},t,r,s){if(r&&s&&(r=r.replace(/^\n+/,"")),r){const i=bn(n(r),e);t.push(i.trimStart())}}function Kn(e,n){const t=oe(n)?n.value:n;for(const r of e)if(pe(r)&&(r.key===n||r.key===t||oe(r.key)&&r.key.value===t))return r}class qe extends Sc{static get tagName(){return"tag:yaml.org,2002:map"}constructor(n){super(xn,n),this.items=[]}static from(n,t,r){const{keepUndefined:s,replacer:i}=r,o=new this(n),a=(c,l)=>{if(typeof i=="function")l=i.call(t,c,l);else if(Array.isArray(i)&&!i.includes(c))return;(l!==void 0||s)&&o.items.push(vi(c,l,r))};if(t instanceof Map)for(const[c,l]of t)a(c,l);else if(t&&typeof t=="object")for(const c of Object.keys(t))a(c,t[c]);return typeof n.sortMapEntries=="function"&&o.items.sort(n.sortMapEntries),o}add(n,t){var o;let r;pe(n)?r=n:!n||typeof n!="object"||!("key"in n)?r=new De(n,n==null?void 0:n.value):r=new De(n.key,n.value);const s=Kn(this.items,r.key),i=(o=this.schema)==null?void 0:o.sortMapEntries;if(s){if(!t)throw new Error(`Key ${r.key} already set`);oe(s.value)&&kc(r.value)?s.value.value=r.value:s.value=r.value}else if(i){const a=this.items.findIndex(c=>i(r,c)<0);a===-1?this.items.push(r):this.items.splice(a,0,r)}else this.items.push(r)}delete(n){const t=Kn(this.items,n);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(n,t){const r=Kn(this.items,n),s=r==null?void 0:r.value;return(!t&&oe(s)?s.value:s)??void 0}has(n){return!!Kn(this.items,n)}set(n,t){this.add(new De(n,t),!0)}toJSON(n,t,r){const s=r?new r:t!=null&&t.mapAsMap?new Map:{};t!=null&&t.onCreate&&t.onCreate(s);for(const i of this.items)Rc(t,s,i);return s}toString(n,t,r){if(!n)return JSON.stringify(this);for(const s of this.items)if(!pe(s))throw new Error(`Map items must all be pairs; found ${JSON.stringify(s)} instead`);return!n.allNullValues&&this.hasAllNullValues(!1)&&(n=Object.assign({},n,{allNullValues:!0})),Ic(this,n,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:n.indent||"",onChompKeep:r,onComment:t})}}const vt={collection:"map",default:!0,nodeClass:qe,tag:"tag:yaml.org,2002:map",resolve(e,n){return tr(e)||n("Expected a mapping for this tag"),e},createNode:(e,n,t)=>qe.from(e,n,t)};class Hn extends Sc{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(n){super(yt,n),this.items=[]}add(n){this.items.push(n)}delete(n){const t=ur(n);return typeof t!="number"?!1:this.items.splice(t,1).length>0}get(n,t){const r=ur(n);if(typeof r!="number")return;const s=this.items[r];return!t&&oe(s)?s.value:s}has(n){const t=ur(n);return typeof t=="number"&&t<this.items.length}set(n,t){const r=ur(n);if(typeof r!="number")throw new Error(`Expected a valid index, not ${n}.`);const s=this.items[r];oe(s)&&kc(t)?s.value=t:this.items[r]=t}toJSON(n,t){const r=[];t!=null&&t.onCreate&&t.onCreate(r);let s=0;for(const i of this.items)r.push(He(i,String(s++),t));return r}toString(n,t,r){return n?Ic(this,n,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(n.indent||"")+"  ",onChompKeep:r,onComment:t}):JSON.stringify(this)}static from(n,t,r){const{replacer:s}=r,i=new this(n);if(t&&Symbol.iterator in Object(t)){let o=0;for(let a of t){if(typeof s=="function"){const c=t instanceof Set?a:String(o++);a=s.call(t,c,a)}i.items.push(Jt(a,void 0,r))}}return i}}function ur(e){let n=oe(e)?e.value:e;return n&&typeof n=="string"&&(n=Number(n)),typeof n=="number"&&Number.isInteger(n)&&n>=0?n:null}const kt={collection:"seq",default:!0,nodeClass:Hn,tag:"tag:yaml.org,2002:seq",resolve(e,n){return rr(e)||n("Expected a sequence for this tag"),e},createNode:(e,n,t)=>Hn.from(e,n,t)},ns={identify:e=>typeof e=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify(e,n,t,r){return n=Object.assign({actualString:!0},n),wi(e,n,t,r)}},ts={identify:e=>e==null,createNode:()=>new H(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new H(null),stringify:({source:e},n)=>typeof e=="string"&&ts.test.test(e)?e:n.options.nullStr},ki={identify:e=>typeof e=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:e=>new H(e[0]==="t"||e[0]==="T"),stringify({source:e,value:n},t){if(e&&ki.test.test(e)){const r=e[0]==="t"||e[0]==="T";if(n===r)return e}return n?t.options.trueStr:t.options.falseStr}};function Ze({format:e,minFractionDigits:n,tag:t,value:r}){if(typeof r=="bigint")return String(r);const s=typeof r=="number"?r:Number(r);if(!isFinite(s))return isNaN(s)?".nan":s<0?"-.inf":".inf";let i=Object.is(r,-0)?"-0":JSON.stringify(r);if(!e&&n&&(!t||t==="tag:yaml.org,2002:float")&&/^-?\d/.test(i)&&!i.includes("e")){let o=i.indexOf(".");o<0&&(o=i.length,i+=".");let a=n-(i.length-o-1);for(;a-- >0;)i+="0"}return i}const Cc={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()==="nan"?NaN:e[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Ze},Lc={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e),stringify(e){const n=Number(e.value);return isFinite(n)?n.toExponential():Ze(e)}},Pc={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(e){const n=new H(parseFloat(e)),t=e.indexOf(".");return t!==-1&&e[e.length-1]==="0"&&(n.minFractionDigits=e.length-t-1),n},stringify:Ze},rs=e=>typeof e=="bigint"||Number.isInteger(e),Si=(e,n,t,{intAsBigInt:r})=>r?BigInt(e):parseInt(e.substring(n),t);function xc(e,n,t){const{value:r}=e;return rs(r)&&r>=0?t+r.toString(n):Ze(e)}const Mc={identify:e=>rs(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(e,n,t)=>Si(e,2,8,t),stringify:e=>xc(e,8,"0o")},Dc={identify:rs,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(e,n,t)=>Si(e,0,10,t),stringify:Ze},$c={identify:e=>rs(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(e,n,t)=>Si(e,2,16,t),stringify:e=>xc(e,16,"0x")},wd=[vt,kt,ns,ts,ki,Mc,Dc,$c,Cc,Lc,Pc];function Lo(e){return typeof e=="bigint"||Number.isInteger(e)}const fr=({value:e})=>JSON.stringify(e),vd=[{identify:e=>typeof e=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify:fr},{identify:e=>e==null,createNode:()=>new H(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:fr},{identify:e=>typeof e=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:e=>e==="true",stringify:fr},{identify:Lo,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(e,n,{intAsBigInt:t})=>t?BigInt(e):parseInt(e,10),stringify:({value:e})=>Lo(e)?e.toString():JSON.stringify(e)},{identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:e=>parseFloat(e),stringify:fr}],kd={default:!0,tag:"",test:/^/,resolve(e,n){return n(`Unresolved plain scalar ${JSON.stringify(e)}`),e}},Sd=[vt,kt].concat(vd,kd),Ei={identify:e=>e instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(e,n){if(typeof atob=="function"){const t=atob(e.replace(/[\n\r]/g,"")),r=new Uint8Array(t.length);for(let s=0;s<t.length;++s)r[s]=t.charCodeAt(s);return r}else return n("This environment does not support reading binary tags; either Buffer or atob is required"),e},stringify({comment:e,type:n,value:t},r,s,i){if(!t)return"";const o=t;let a;if(typeof btoa=="function"){let c="";for(let l=0;l<o.length;++l)c+=String.fromCharCode(o[l]);a=btoa(c)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(n??(n=H.BLOCK_LITERAL),n!==H.QUOTE_DOUBLE){const c=Math.max(r.options.lineWidth-r.indent.length,r.options.minContentWidth),l=Math.ceil(a.length/c),u=new Array(l);for(let f=0,p=0;f<l;++f,p+=c)u[f]=a.substr(p,c);a=u.join(n===H.BLOCK_LITERAL?`
`:" ")}return wi({comment:e,type:n,value:a},r,s,i)}};function jc(e,n){if(rr(e))for(let t=0;t<e.items.length;++t){let r=e.items[t];if(!pe(r)){if(tr(r)){r.items.length>1&&n("Each pair must have its own sequence indicator");const s=r.items[0]||new De(new H(null));if(r.commentBefore&&(s.key.commentBefore=s.key.commentBefore?`${r.commentBefore}
${s.key.commentBefore}`:r.commentBefore),r.comment){const i=s.value??s.key;i.comment=i.comment?`${r.comment}
${i.comment}`:r.comment}r=s}e.items[t]=pe(r)?r:new De(r)}}else n("Expected a sequence for this tag");return e}function Bc(e,n,t){const{replacer:r}=t,s=new Hn(e);s.tag="tag:yaml.org,2002:pairs";let i=0;if(n&&Symbol.iterator in Object(n))for(let o of n){typeof r=="function"&&(o=r.call(n,String(i++),o));let a,c;if(Array.isArray(o))if(o.length===2)a=o[0],c=o[1];else throw new TypeError(`Expected [key, value] tuple: ${o}`);else if(o&&o instanceof Object){const l=Object.keys(o);if(l.length===1)a=l[0],c=o[a];else throw new TypeError(`Expected tuple with one key, not ${l.length} keys`)}else a=o;s.items.push(vi(a,c,t))}return s}const Ai={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:jc,createNode:Bc};class lt extends Hn{constructor(){super(),this.add=qe.prototype.add.bind(this),this.delete=qe.prototype.delete.bind(this),this.get=qe.prototype.get.bind(this),this.has=qe.prototype.has.bind(this),this.set=qe.prototype.set.bind(this),this.tag=lt.tag}toJSON(n,t){if(!t)return super.toJSON(n);const r=new Map;t!=null&&t.onCreate&&t.onCreate(r);for(const s of this.items){let i,o;if(pe(s)?(i=He(s.key,"",t),o=He(s.value,i,t)):i=He(s,"",t),r.has(i))throw new Error("Ordered maps must not include duplicate keys");r.set(i,o)}return r}static from(n,t,r){const s=Bc(n,t,r),i=new this;return i.items=s.items,i}}lt.tag="tag:yaml.org,2002:omap";const Ni={collection:"seq",identify:e=>e instanceof Map,nodeClass:lt,default:!1,tag:"tag:yaml.org,2002:omap",resolve(e,n){const t=jc(e,n),r=[];for(const{key:s}of t.items)oe(s)&&(r.includes(s.value)?n(`Ordered maps must not include duplicate keys: ${s.value}`):r.push(s.value));return Object.assign(new lt,t)},createNode:(e,n,t)=>lt.from(e,n,t)};function Fc({value:e,source:n},t){return n&&(e?Uc:Kc).test.test(n)?n:e?t.options.trueStr:t.options.falseStr}const Uc={identify:e=>e===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new H(!0),stringify:Fc},Kc={identify:e=>e===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new H(!1),stringify:Fc},Ed={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()==="nan"?NaN:e[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Ze},Ad={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e.replace(/_/g,"")),stringify(e){const n=Number(e.value);return isFinite(n)?n.toExponential():Ze(e)}},Nd={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(e){const n=new H(parseFloat(e.replace(/_/g,""))),t=e.indexOf(".");if(t!==-1){const r=e.substring(t+1).replace(/_/g,"");r[r.length-1]==="0"&&(n.minFractionDigits=r.length)}return n},stringify:Ze},sr=e=>typeof e=="bigint"||Number.isInteger(e);function ss(e,n,t,{intAsBigInt:r}){const s=e[0];if((s==="-"||s==="+")&&(n+=1),e=e.substring(n).replace(/_/g,""),r){switch(t){case 2:e=`0b${e}`;break;case 8:e=`0o${e}`;break;case 16:e=`0x${e}`;break}const o=BigInt(e);return s==="-"?BigInt(-1)*o:o}const i=parseInt(e,t);return s==="-"?-1*i:i}function Oi(e,n,t){const{value:r}=e;if(sr(r)){const s=r.toString(n);return r<0?"-"+t+s.substr(1):t+s}return Ze(e)}const Od={identify:sr,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(e,n,t)=>ss(e,2,2,t),stringify:e=>Oi(e,2,"0b")},Td={identify:sr,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(e,n,t)=>ss(e,1,8,t),stringify:e=>Oi(e,8,"0")},Rd={identify:sr,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(e,n,t)=>ss(e,0,10,t),stringify:Ze},Id={identify:sr,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(e,n,t)=>ss(e,2,16,t),stringify:e=>Oi(e,16,"0x")};class ut extends qe{constructor(n){super(n),this.tag=ut.tag}add(n){let t;pe(n)?t=n:n&&typeof n=="object"&&"key"in n&&"value"in n&&n.value===null?t=new De(n.key,null):t=new De(n,null),Kn(this.items,t.key)||this.items.push(t)}get(n,t){const r=Kn(this.items,n);return!t&&pe(r)?oe(r.key)?r.key.value:r.key:r}set(n,t){if(typeof t!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);const r=Kn(this.items,n);r&&!t?this.items.splice(this.items.indexOf(r),1):!r&&t&&this.items.push(new De(n))}toJSON(n,t){return super.toJSON(n,t,Set)}toString(n,t,r){if(!n)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},n,{allNullValues:!0}),t,r);throw new Error("Set items must all have null values")}static from(n,t,r){const{replacer:s}=r,i=new this(n);if(t&&Symbol.iterator in Object(t))for(let o of t)typeof s=="function"&&(o=s.call(t,o,o)),i.items.push(vi(o,null,r));return i}}ut.tag="tag:yaml.org,2002:set";const Ti={collection:"map",identify:e=>e instanceof Set,nodeClass:ut,default:!1,tag:"tag:yaml.org,2002:set",createNode:(e,n,t)=>ut.from(e,n,t),resolve(e,n){if(tr(e)){if(e.hasAllNullValues(!0))return Object.assign(new ut,e);n("Set items must all have null values")}else n("Expected a mapping for this tag");return e}};function Ri(e,n){const t=e[0],r=t==="-"||t==="+"?e.substring(1):e,s=o=>n?BigInt(o):Number(o),i=r.replace(/_/g,"").split(":").reduce((o,a)=>o*s(60)+s(a),s(0));return t==="-"?s(-1)*i:i}function Vc(e){let{value:n}=e,t=o=>o;if(typeof n=="bigint")t=o=>BigInt(o);else if(isNaN(n)||!isFinite(n))return Ze(e);let r="";n<0&&(r="-",n*=t(-1));const s=t(60),i=[n%s];return n<60?i.unshift(0):(n=(n-i[0])/s,i.unshift(n%s),n>=60&&(n=(n-i[0])/s,i.unshift(n))),r+i.map(o=>String(o).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const qc={identify:e=>typeof e=="bigint"||Number.isInteger(e),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(e,n,{intAsBigInt:t})=>Ri(e,t),stringify:Vc},Hc={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:e=>Ri(e,!1),stringify:Vc},is={identify:e=>e instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(e){const n=e.match(is.test);if(!n)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,t,r,s,i,o,a]=n.map(Number),c=n[7]?Number((n[7]+"00").substr(1,3)):0;let l=Date.UTC(t,r-1,s,i||0,o||0,a||0,c);const u=n[8];if(u&&u!=="Z"){let f=Ri(u,!1);Math.abs(f)<30&&(f*=60),l-=6e4*f}return new Date(l)},stringify:({value:e})=>(e==null?void 0:e.toISOString().replace(/(T00:00:00)?\.000Z$/,""))??""},Po=[vt,kt,ns,ts,Uc,Kc,Od,Td,Rd,Id,Ed,Ad,Nd,Ei,wn,Ni,Ai,Ti,qc,Hc,is],xo=new Map([["core",wd],["failsafe",[vt,kt,ns]],["json",Sd],["yaml11",Po],["yaml-1.1",Po]]),Mo={binary:Ei,bool:ki,float:Pc,floatExp:Lc,floatNaN:Cc,floatTime:Hc,int:Dc,intHex:$c,intOct:Mc,intTime:qc,map:vt,merge:wn,null:ts,omap:Ni,pairs:Ai,seq:kt,set:Ti,timestamp:is},Cd={"tag:yaml.org,2002:binary":Ei,"tag:yaml.org,2002:merge":wn,"tag:yaml.org,2002:omap":Ni,"tag:yaml.org,2002:pairs":Ai,"tag:yaml.org,2002:set":Ti,"tag:yaml.org,2002:timestamp":is};function Ss(e,n,t){const r=xo.get(n);if(r&&!e)return t&&!r.includes(wn)?r.concat(wn):r.slice();let s=r;if(!s)if(Array.isArray(e))s=[];else{const i=Array.from(xo.keys()).filter(o=>o!=="yaml11").map(o=>JSON.stringify(o)).join(", ");throw new Error(`Unknown schema "${n}"; use one of ${i} or define customTags array`)}if(Array.isArray(e))for(const i of e)s=s.concat(i);else typeof e=="function"&&(s=e(s.slice()));return t&&(s=s.concat(wn)),s.reduce((i,o)=>{const a=typeof o=="string"?Mo[o]:o;if(!a){const c=JSON.stringify(o),l=Object.keys(Mo).map(u=>JSON.stringify(u)).join(", ");throw new Error(`Unknown custom tag ${c}; use one of ${l}`)}return i.includes(a)||i.push(a),i},[])}const Ld=(e,n)=>e.key<n.key?-1:e.key>n.key?1:0;class Ii{constructor({compat:n,customTags:t,merge:r,resolveKnownTags:s,schema:i,sortMapEntries:o,toStringDefaults:a}){this.compat=Array.isArray(n)?Ss(n,"compat"):n?Ss(null,n):null,this.name=typeof i=="string"&&i||"core",this.knownTags=s?Cd:{},this.tags=Ss(t,this.name,r),this.toStringOptions=a??null,Object.defineProperty(this,xn,{value:vt}),Object.defineProperty(this,pn,{value:ns}),Object.defineProperty(this,yt,{value:kt}),this.sortMapEntries=typeof o=="function"?o:o===!0?Ld:null}clone(){const n=Object.create(Ii.prototype,Object.getOwnPropertyDescriptors(this));return n.tags=this.tags.slice(),n}}function Pd(e,n){var c;const t=[];let r=n.directives===!0;if(n.directives!==!1&&e.directives){const l=e.directives.toString(e);l?(t.push(l),r=!0):e.directives.docStart&&(r=!0)}r&&t.push("---");const s=Ac(e,n),{commentString:i}=s.options;if(e.commentBefore){t.length!==1&&t.unshift("");const l=i(e.commentBefore);t.unshift(bn(l,""))}let o=!1,a=null;if(e.contents){if(ue(e.contents)){if(e.contents.spaceBefore&&r&&t.push(""),e.contents.commentBefore){const f=i(e.contents.commentBefore);t.push(bn(f,""))}s.forceBlockIndent=!!e.comment,a=e.contents.comment}const l=a?void 0:()=>o=!0;let u=gt(e.contents,s,()=>a=null,l);a&&(u+=Un(u,"",i(a))),(u[0]==="|"||u[0]===">")&&t[t.length-1]==="---"?t[t.length-1]=`--- ${u}`:t.push(u)}else t.push(gt(e.contents,s));if((c=e.directives)!=null&&c.docEnd)if(e.comment){const l=i(e.comment);l.includes(`
`)?(t.push("..."),t.push(bn(l,""))):t.push(`... ${l}`)}else t.push("...");else{let l=e.comment;l&&o&&(l=l.replace(/^\n+/,"")),l&&((!o||a)&&t[t.length-1]!==""&&t.push(""),t.push(bn(i(l),"")))}return t.join(`
`)+`
`}class os{constructor(n,t,r){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,Ge,{value:Hs});let s=null;typeof t=="function"||Array.isArray(t)?s=t:r===void 0&&t&&(r=t,t=void 0);const i=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},r);this.options=i;let{version:o}=i;r!=null&&r._directives?(this.directives=r._directives.atDocument(),this.directives.yaml.explicit&&(o=this.directives.yaml.version)):this.directives=new Re({version:o}),this.setSchema(o,r),this.contents=n===void 0?null:this.createNode(n,s,r)}clone(){const n=Object.create(os.prototype,{[Ge]:{value:Hs}});return n.commentBefore=this.commentBefore,n.comment=this.comment,n.errors=this.errors.slice(),n.warnings=this.warnings.slice(),n.options=Object.assign({},this.options),this.directives&&(n.directives=this.directives.clone()),n.schema=this.schema.clone(),n.contents=ue(this.contents)?this.contents.clone(n.schema):this.contents,this.range&&(n.range=this.range.slice()),n}add(n){Qn(this.contents)&&this.contents.add(n)}addIn(n,t){Qn(this.contents)&&this.contents.addIn(n,t)}createAlias(n,t){if(!n.anchor){const r=wc(this);n.anchor=!t||r.has(t)?vc(t||"a",r):t}return new bi(n.anchor)}createNode(n,t,r){let s;if(typeof t=="function")n=t.call({"":n},"",n),s=t;else if(Array.isArray(t)){const y=w=>typeof w=="number"||w instanceof String||w instanceof Number,v=t.filter(y).map(String);v.length>0&&(t=t.concat(v)),s=t}else r===void 0&&t&&(r=t,t=void 0);const{aliasDuplicateObjects:i,anchorPrefix:o,flow:a,keepUndefined:c,onTagObj:l,tag:u}=r??{},{onAnchor:f,setAnchors:p,sourceObjects:d}=ad(this,o||"a"),b={aliasDuplicateObjects:i??!0,keepUndefined:c??!1,onAnchor:f,onTagObj:l,replacer:s,schema:this.schema,sourceObjects:d},g=Jt(n,u,b);return a&&le(g)&&(g.flow=!0),p(),g}createPair(n,t,r={}){const s=this.createNode(n,null,r),i=this.createNode(t,null,r);return new De(s,i)}delete(n){return Qn(this.contents)?this.contents.delete(n):!1}deleteIn(n){return Rt(n)?this.contents==null?!1:(this.contents=null,!0):Qn(this.contents)?this.contents.deleteIn(n):!1}get(n,t){return le(this.contents)?this.contents.get(n,t):void 0}getIn(n,t){return Rt(n)?!t&&oe(this.contents)?this.contents.value:this.contents:le(this.contents)?this.contents.getIn(n,t):void 0}has(n){return le(this.contents)?this.contents.has(n):!1}hasIn(n){return Rt(n)?this.contents!==void 0:le(this.contents)?this.contents.hasIn(n):!1}set(n,t){this.contents==null?this.contents=Ir(this.schema,[n],t):Qn(this.contents)&&this.contents.set(n,t)}setIn(n,t){Rt(n)?this.contents=t:this.contents==null?this.contents=Ir(this.schema,Array.from(n),t):Qn(this.contents)&&this.contents.setIn(n,t)}setSchema(n,t={}){typeof n=="number"&&(n=String(n));let r;switch(n){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new Re({version:"1.1"}),r={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=n:this.directives=new Re({version:n}),r={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,r=null;break;default:{const s=JSON.stringify(n);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${s}`)}}if(t.schema instanceof Object)this.schema=t.schema;else if(r)this.schema=new Ii(Object.assign(r,t));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:n,jsonArg:t,mapAsMap:r,maxAliasCount:s,onAnchor:i,reviver:o}={}){const a={anchors:new Map,doc:this,keep:!n,mapAsMap:r===!0,mapKeyWarned:!1,maxAliasCount:typeof s=="number"?s:100},c=He(this.contents,t??"",a);if(typeof i=="function")for(const{count:l,res:u}of a.anchors.values())i(u,l);return typeof o=="function"?tt(o,{"":c},"",c):c}toJSON(n,t){return this.toJS({json:!0,jsonArg:n,mapAsMap:!1,onAnchor:t})}toString(n={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in n&&(!Number.isInteger(n.indent)||Number(n.indent)<=0)){const t=JSON.stringify(n.indent);throw new Error(`"indent" option must be a positive integer, not ${t}`)}return Pd(this,n)}}function Qn(e){if(le(e))return!0;throw new Error("Expected a YAML collection as document contents")}class Gc extends Error{constructor(n,t,r,s){super(),this.name=n,this.code=r,this.message=s,this.pos=t}}class It extends Gc{constructor(n,t,r){super("YAMLParseError",n,t,r)}}class xd extends Gc{constructor(n,t,r){super("YAMLWarning",n,t,r)}}const Do=(e,n)=>t=>{if(t.pos[0]===-1)return;t.linePos=t.pos.map(a=>n.linePos(a));const{line:r,col:s}=t.linePos[0];t.message+=` at line ${r}, column ${s}`;let i=s-1,o=e.substring(n.lineStarts[r-1],n.lineStarts[r]).replace(/[\n\r]+$/,"");if(i>=60&&o.length>80){const a=Math.min(i-39,o.length-79);o="…"+o.substring(a),i-=a-1}if(o.length>80&&(o=o.substring(0,79)+"…"),r>1&&/^ *$/.test(o.substring(0,i))){let a=e.substring(n.lineStarts[r-2],n.lineStarts[r-1]);a.length>80&&(a=a.substring(0,79)+`…
`),o=a+o}if(/[^ ]/.test(o)){let a=1;const c=t.linePos[1];(c==null?void 0:c.line)===r&&c.col>s&&(a=Math.max(1,Math.min(c.col-s,80-i)));const l=" ".repeat(i)+"^".repeat(a);t.message+=`:

${o}
${l}
`}};function _t(e,{flow:n,indicator:t,next:r,offset:s,onError:i,parentIndent:o,startOnNewline:a}){let c=!1,l=a,u=a,f="",p="",d=!1,b=!1,g=null,y=null,v=null,w=null,O=null,N=null,L=null;for(const $ of e)switch(b&&($.type!=="space"&&$.type!=="newline"&&$.type!=="comma"&&i($.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),b=!1),g&&(l&&$.type!=="comment"&&$.type!=="newline"&&i(g,"TAB_AS_INDENT","Tabs are not allowed as indentation"),g=null),$.type){case"space":!n&&(t!=="doc-start"||(r==null?void 0:r.type)!=="flow-collection")&&$.source.includes("	")&&(g=$),u=!0;break;case"comment":{u||i($,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const G=$.source.substring(1)||" ";f?f+=p+G:f=G,p="",l=!1;break}case"newline":l?f?f+=$.source:(!N||t!=="seq-item-ind")&&(c=!0):p+=$.source,l=!0,d=!0,(y||v)&&(w=$),u=!0;break;case"anchor":y&&i($,"MULTIPLE_ANCHORS","A node can have at most one anchor"),$.source.endsWith(":")&&i($.offset+$.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),y=$,L??(L=$.offset),l=!1,u=!1,b=!0;break;case"tag":{v&&i($,"MULTIPLE_TAGS","A node can have at most one tag"),v=$,L??(L=$.offset),l=!1,u=!1,b=!0;break}case t:(y||v)&&i($,"BAD_PROP_ORDER",`Anchors and tags must be after the ${$.source} indicator`),N&&i($,"UNEXPECTED_TOKEN",`Unexpected ${$.source} in ${n??"collection"}`),N=$,l=t==="seq-item-ind"||t==="explicit-key-ind",u=!1;break;case"comma":if(n){O&&i($,"UNEXPECTED_TOKEN",`Unexpected , in ${n}`),O=$,l=!1,u=!1;break}default:i($,"UNEXPECTED_TOKEN",`Unexpected ${$.type} token`),l=!1,u=!1}const U=e[e.length-1],M=U?U.offset+U.source.length:s;return b&&r&&r.type!=="space"&&r.type!=="newline"&&r.type!=="comma"&&(r.type!=="scalar"||r.source!=="")&&i(r.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),g&&(l&&g.indent<=o||(r==null?void 0:r.type)==="block-map"||(r==null?void 0:r.type)==="block-seq")&&i(g,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:O,found:N,spaceBefore:c,comment:f,hasNewline:d,anchor:y,tag:v,newlineAfterProp:w,end:M,start:L??M}}function Qt(e){if(!e)return null;switch(e.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(e.source.includes(`
`))return!0;if(e.end){for(const n of e.end)if(n.type==="newline")return!0}return!1;case"flow-collection":for(const n of e.items){for(const t of n.start)if(t.type==="newline")return!0;if(n.sep){for(const t of n.sep)if(t.type==="newline")return!0}if(Qt(n.key)||Qt(n.value))return!0}return!1;default:return!0}}function Ys(e,n,t){if((n==null?void 0:n.type)==="flow-collection"){const r=n.end[0];r.indent===e&&(r.source==="]"||r.source==="}")&&Qt(n)&&t(r,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function zc(e,n,t){const{uniqueKeys:r}=e.options;if(r===!1)return!1;const s=typeof r=="function"?r:(i,o)=>i===o||oe(i)&&oe(o)&&i.value===o.value;return n.some(i=>s(i.key,t))}const $o="All mapping items must start at the same column";function Md({composeNode:e,composeEmptyNode:n},t,r,s,i){var u;const o=(i==null?void 0:i.nodeClass)??qe,a=new o(t.schema);t.atRoot&&(t.atRoot=!1);let c=r.offset,l=null;for(const f of r.items){const{start:p,key:d,sep:b,value:g}=f,y=_t(p,{indicator:"explicit-key-ind",next:d??(b==null?void 0:b[0]),offset:c,onError:s,parentIndent:r.indent,startOnNewline:!0}),v=!y.found;if(v){if(d&&(d.type==="block-seq"?s(c,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in d&&d.indent!==r.indent&&s(c,"BAD_INDENT",$o)),!y.anchor&&!y.tag&&!b){l=y.end,y.comment&&(a.comment?a.comment+=`
`+y.comment:a.comment=y.comment);continue}(y.newlineAfterProp||Qt(d))&&s(d??p[p.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else((u=y.found)==null?void 0:u.indent)!==r.indent&&s(c,"BAD_INDENT",$o);t.atKey=!0;const w=y.end,O=d?e(t,d,y,s):n(t,w,p,null,y,s);t.schema.compat&&Ys(r.indent,d,s),t.atKey=!1,zc(t,a.items,O)&&s(w,"DUPLICATE_KEY","Map keys must be unique");const N=_t(b??[],{indicator:"map-value-ind",next:g,offset:O.range[2],onError:s,parentIndent:r.indent,startOnNewline:!d||d.type==="block-scalar"});if(c=N.end,N.found){v&&((g==null?void 0:g.type)==="block-map"&&!N.hasNewline&&s(c,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),t.options.strict&&y.start<N.found.offset-1024&&s(O.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const L=g?e(t,g,N,s):n(t,c,b,null,N,s);t.schema.compat&&Ys(r.indent,g,s),c=L.range[2];const U=new De(O,L);t.options.keepSourceTokens&&(U.srcToken=f),a.items.push(U)}else{v&&s(O.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),N.comment&&(O.comment?O.comment+=`
`+N.comment:O.comment=N.comment);const L=new De(O);t.options.keepSourceTokens&&(L.srcToken=f),a.items.push(L)}}return l&&l<c&&s(l,"IMPOSSIBLE","Map comment with trailing content"),a.range=[r.offset,c,l??c],a}function Dd({composeNode:e,composeEmptyNode:n},t,r,s,i){const o=(i==null?void 0:i.nodeClass)??Hn,a=new o(t.schema);t.atRoot&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let c=r.offset,l=null;for(const{start:u,value:f}of r.items){const p=_t(u,{indicator:"seq-item-ind",next:f,offset:c,onError:s,parentIndent:r.indent,startOnNewline:!0});if(!p.found)if(p.anchor||p.tag||f)(f==null?void 0:f.type)==="block-seq"?s(p.end,"BAD_INDENT","All sequence items must start at the same column"):s(c,"MISSING_CHAR","Sequence item without - indicator");else{l=p.end,p.comment&&(a.comment=p.comment);continue}const d=f?e(t,f,p,s):n(t,p.end,u,null,p,s);t.schema.compat&&Ys(r.indent,f,s),c=d.range[2],a.items.push(d)}return a.range=[r.offset,c,l??c],a}function ir(e,n,t,r){let s="";if(e){let i=!1,o="";for(const a of e){const{source:c,type:l}=a;switch(l){case"space":i=!0;break;case"comment":{t&&!i&&r(a,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const u=c.substring(1)||" ";s?s+=o+u:s=u,o="";break}case"newline":s&&(o+=c),i=!0;break;default:r(a,"UNEXPECTED_TOKEN",`Unexpected ${l} at node end`)}n+=c.length}}return{comment:s,offset:n}}const Es="Block collections are not allowed within flow collections",As=e=>e&&(e.type==="block-map"||e.type==="block-seq");function $d({composeNode:e,composeEmptyNode:n},t,r,s,i){var y;const o=r.start.source==="{",a=o?"flow map":"flow sequence",c=(i==null?void 0:i.nodeClass)??(o?qe:Hn),l=new c(t.schema);l.flow=!0;const u=t.atRoot;u&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let f=r.offset+r.start.source.length;for(let v=0;v<r.items.length;++v){const w=r.items[v],{start:O,key:N,sep:L,value:U}=w,M=_t(O,{flow:a,indicator:"explicit-key-ind",next:N??(L==null?void 0:L[0]),offset:f,onError:s,parentIndent:r.indent,startOnNewline:!1});if(!M.found){if(!M.anchor&&!M.tag&&!L&&!U){v===0&&M.comma?s(M.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`):v<r.items.length-1&&s(M.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${a}`),M.comment&&(l.comment?l.comment+=`
`+M.comment:l.comment=M.comment),f=M.end;continue}!o&&t.options.strict&&Qt(N)&&s(N,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(v===0)M.comma&&s(M.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`);else if(M.comma||s(M.start,"MISSING_CHAR",`Missing , between ${a} items`),M.comment){let $="";e:for(const G of O)switch(G.type){case"comma":case"space":break;case"comment":$=G.source.substring(1);break e;default:break e}if($){let G=l.items[l.items.length-1];pe(G)&&(G=G.value??G.key),G.comment?G.comment+=`
`+$:G.comment=$,M.comment=M.comment.substring($.length+1)}}if(!o&&!L&&!M.found){const $=U?e(t,U,M,s):n(t,M.end,L,null,M,s);l.items.push($),f=$.range[2],As(U)&&s($.range,"BLOCK_IN_FLOW",Es)}else{t.atKey=!0;const $=M.end,G=N?e(t,N,M,s):n(t,$,O,null,M,s);As(N)&&s(G.range,"BLOCK_IN_FLOW",Es),t.atKey=!1;const te=_t(L??[],{flow:a,indicator:"map-value-ind",next:U,offset:G.range[2],onError:s,parentIndent:r.indent,startOnNewline:!1});if(te.found){if(!o&&!M.found&&t.options.strict){if(L)for(const ae of L){if(ae===te.found)break;if(ae.type==="newline"){s(ae,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}M.start<te.found.offset-1024&&s(te.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else U&&("source"in U&&((y=U.source)==null?void 0:y[0])===":"?s(U,"MISSING_CHAR",`Missing space after : in ${a}`):s(te.start,"MISSING_CHAR",`Missing , or : between ${a} items`));const ye=U?e(t,U,te,s):te.found?n(t,te.end,L,null,te,s):null;ye?As(U)&&s(ye.range,"BLOCK_IN_FLOW",Es):te.comment&&(G.comment?G.comment+=`
`+te.comment:G.comment=te.comment);const he=new De(G,ye);if(t.options.keepSourceTokens&&(he.srcToken=w),o){const ae=l;zc(t,ae.items,G)&&s($,"DUPLICATE_KEY","Map keys must be unique"),ae.items.push(he)}else{const ae=new qe(t.schema);ae.flow=!0,ae.items.push(he);const Nn=(ye??G).range;ae.range=[G.range[0],Nn[1],Nn[2]],l.items.push(ae)}f=ye?ye.range[2]:te.end}}const p=o?"}":"]",[d,...b]=r.end;let g=f;if((d==null?void 0:d.source)===p)g=d.offset+d.source.length;else{const v=a[0].toUpperCase()+a.substring(1),w=u?`${v} must end with a ${p}`:`${v} in block collection must be sufficiently indented and end with a ${p}`;s(f,u?"MISSING_CHAR":"BAD_INDENT",w),d&&d.source.length!==1&&b.unshift(d)}if(b.length>0){const v=ir(b,g,t.options.strict,s);v.comment&&(l.comment?l.comment+=`
`+v.comment:l.comment=v.comment),l.range=[r.offset,g,v.offset]}else l.range=[r.offset,g,g];return l}function Ns(e,n,t,r,s,i){const o=t.type==="block-map"?Md(e,n,t,r,i):t.type==="block-seq"?Dd(e,n,t,r,i):$d(e,n,t,r,i),a=o.constructor;return s==="!"||s===a.tagName?(o.tag=a.tagName,o):(s&&(o.tag=s),o)}function jd(e,n,t,r,s){var p;const i=r.tag,o=i?n.directives.tagName(i.source,d=>s(i,"TAG_RESOLVE_FAILED",d)):null;if(t.type==="block-seq"){const{anchor:d,newlineAfterProp:b}=r,g=d&&i?d.offset>i.offset?d:i:d??i;g&&(!b||b.offset<g.offset)&&s(g,"MISSING_CHAR","Missing newline after block sequence props")}const a=t.type==="block-map"?"map":t.type==="block-seq"?"seq":t.start.source==="{"?"map":"seq";if(!i||!o||o==="!"||o===qe.tagName&&a==="map"||o===Hn.tagName&&a==="seq")return Ns(e,n,t,s,o);let c=n.schema.tags.find(d=>d.tag===o&&d.collection===a);if(!c){const d=n.schema.knownTags[o];if((d==null?void 0:d.collection)===a)n.schema.tags.push(Object.assign({},d,{default:!1})),c=d;else return d?s(i,"BAD_COLLECTION_TYPE",`${d.tag} used for ${a} collection, but expects ${d.collection??"scalar"}`,!0):s(i,"TAG_RESOLVE_FAILED",`Unresolved tag: ${o}`,!0),Ns(e,n,t,s,o)}const l=Ns(e,n,t,s,o,c),u=((p=c.resolve)==null?void 0:p.call(c,l,d=>s(i,"TAG_RESOLVE_FAILED",d),n.options))??l,f=ue(u)?u:new H(u);return f.range=l.range,f.tag=o,c!=null&&c.format&&(f.format=c.format),f}function Bd(e,n,t){const r=n.offset,s=Fd(n,e.options.strict,t);if(!s)return{value:"",type:null,comment:"",range:[r,r,r]};const i=s.mode===">"?H.BLOCK_FOLDED:H.BLOCK_LITERAL,o=n.source?Ud(n.source):[];let a=o.length;for(let g=o.length-1;g>=0;--g){const y=o[g][1];if(y===""||y==="\r")a=g;else break}if(a===0){const g=s.chomp==="+"&&o.length>0?`
`.repeat(Math.max(1,o.length-1)):"";let y=r+s.length;return n.source&&(y+=n.source.length),{value:g,type:i,comment:s.comment,range:[r,y,y]}}let c=n.indent+s.indent,l=n.offset+s.length,u=0;for(let g=0;g<a;++g){const[y,v]=o[g];if(v===""||v==="\r")s.indent===0&&y.length>c&&(c=y.length);else{y.length<c&&t(l+y.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),s.indent===0&&(c=y.length),u=g,c===0&&!e.atRoot&&t(l,"BAD_INDENT","Block scalar values in collections must be indented");break}l+=y.length+v.length+1}for(let g=o.length-1;g>=a;--g)o[g][0].length>c&&(a=g+1);let f="",p="",d=!1;for(let g=0;g<u;++g)f+=o[g][0].slice(c)+`
`;for(let g=u;g<a;++g){let[y,v]=o[g];l+=y.length+v.length+1;const w=v[v.length-1]==="\r";if(w&&(v=v.slice(0,-1)),v&&y.length<c){const N=`Block scalar lines must not be less indented than their ${s.indent?"explicit indentation indicator":"first line"}`;t(l-v.length-(w?2:1),"BAD_INDENT",N),y=""}i===H.BLOCK_LITERAL?(f+=p+y.slice(c)+v,p=`
`):y.length>c||v[0]==="	"?(p===" "?p=`
`:!d&&p===`
`&&(p=`

`),f+=p+y.slice(c)+v,p=`
`,d=!0):v===""?p===`
`?f+=`
`:p=`
`:(f+=p+v,p=" ",d=!1)}switch(s.chomp){case"-":break;case"+":for(let g=a;g<o.length;++g)f+=`
`+o[g][0].slice(c);f[f.length-1]!==`
`&&(f+=`
`);break;default:f+=`
`}const b=r+s.length+n.source.length;return{value:f,type:i,comment:s.comment,range:[r,b,b]}}function Fd({offset:e,props:n},t,r){if(n[0].type!=="block-scalar-header")return r(n[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:s}=n[0],i=s[0];let o=0,a="",c=-1;for(let p=1;p<s.length;++p){const d=s[p];if(!a&&(d==="-"||d==="+"))a=d;else{const b=Number(d);!o&&b?o=b:c===-1&&(c=e+p)}}c!==-1&&r(c,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${s}`);let l=!1,u="",f=s.length;for(let p=1;p<n.length;++p){const d=n[p];switch(d.type){case"space":l=!0;case"newline":f+=d.source.length;break;case"comment":t&&!l&&r(d,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),f+=d.source.length,u=d.source.substring(1);break;case"error":r(d,"UNEXPECTED_TOKEN",d.message),f+=d.source.length;break;default:{const b=`Unexpected token in block scalar header: ${d.type}`;r(d,"UNEXPECTED_TOKEN",b);const g=d.source;g&&typeof g=="string"&&(f+=g.length)}}}return{mode:i,indent:o,chomp:a,comment:u,length:f}}function Ud(e){const n=e.split(/\n( *)/),t=n[0],r=t.match(/^( *)/),i=[r!=null&&r[1]?[r[1],t.slice(r[1].length)]:["",t]];for(let o=1;o<n.length;o+=2)i.push([n[o],n[o+1]]);return i}function Kd(e,n,t){const{offset:r,type:s,source:i,end:o}=e;let a,c;const l=(p,d,b)=>t(r+p,d,b);switch(s){case"scalar":a=H.PLAIN,c=Vd(i,l);break;case"single-quoted-scalar":a=H.QUOTE_SINGLE,c=qd(i,l);break;case"double-quoted-scalar":a=H.QUOTE_DOUBLE,c=Hd(i,l);break;default:return t(e,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${s}`),{value:"",type:null,comment:"",range:[r,r+i.length,r+i.length]}}const u=r+i.length,f=ir(o,u,n,t);return{value:c,type:a,comment:f.comment,range:[r,u,f.offset]}}function Vd(e,n){let t="";switch(e[0]){case"	":t="a tab character";break;case",":t="flow indicator character ,";break;case"%":t="directive indicator character %";break;case"|":case">":{t=`block scalar indicator ${e[0]}`;break}case"@":case"`":{t=`reserved character ${e[0]}`;break}}return t&&n(0,"BAD_SCALAR_START",`Plain value cannot start with ${t}`),Wc(e)}function qd(e,n){return(e[e.length-1]!=="'"||e.length===1)&&n(e.length,"MISSING_CHAR","Missing closing 'quote"),Wc(e.slice(1,-1)).replace(/''/g,"'")}function Wc(e){let n,t;try{n=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),t=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{n=/(.*?)[ \t]*\r?\n/sy,t=/[ \t]*(.*?)[ \t]*\r?\n/sy}let r=n.exec(e);if(!r)return e;let s=r[1],i=" ",o=n.lastIndex;for(t.lastIndex=o;r=t.exec(e);)r[1]===""?i===`
`?s+=i:i=`
`:(s+=i+r[1],i=" "),o=t.lastIndex;const a=/[ \t]*(.*)/sy;return a.lastIndex=o,r=a.exec(e),s+i+((r==null?void 0:r[1])??"")}function Hd(e,n){let t="";for(let r=1;r<e.length-1;++r){const s=e[r];if(!(s==="\r"&&e[r+1]===`
`))if(s===`
`){const{fold:i,offset:o}=Gd(e,r);t+=i,r=o}else if(s==="\\"){let i=e[++r];const o=zd[i];if(o)t+=o;else if(i===`
`)for(i=e[r+1];i===" "||i==="	";)i=e[++r+1];else if(i==="\r"&&e[r+1]===`
`)for(i=e[++r+1];i===" "||i==="	";)i=e[++r+1];else if(i==="x"||i==="u"||i==="U"){const a=i==="x"?2:i==="u"?4:8;t+=Wd(e,r+1,a,n),r+=a}else{const a=e.substr(r-1,2);n(r-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${a}`),t+=a}}else if(s===" "||s==="	"){const i=r;let o=e[r+1];for(;o===" "||o==="	";)o=e[++r+1];o!==`
`&&!(o==="\r"&&e[r+2]===`
`)&&(t+=r>i?e.slice(i,r+1):s)}else t+=s}return(e[e.length-1]!=='"'||e.length===1)&&n(e.length,"MISSING_CHAR",'Missing closing "quote'),t}function Gd(e,n){let t="",r=e[n+1];for(;(r===" "||r==="	"||r===`
`||r==="\r")&&!(r==="\r"&&e[n+2]!==`
`);)r===`
`&&(t+=`
`),n+=1,r=e[n+1];return t||(t=" "),{fold:t,offset:n}}const zd={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function Wd(e,n,t,r){const s=e.substr(n,t),o=s.length===t&&/^[0-9a-fA-F]+$/.test(s)?parseInt(s,16):NaN;try{return String.fromCodePoint(o)}catch{const a=e.substr(n-2,t+2);return r(n-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${a}`),a}}function Yc(e,n,t,r){const{value:s,type:i,comment:o,range:a}=n.type==="block-scalar"?Bd(e,n,r):Kd(n,e.options.strict,r),c=t?e.directives.tagName(t.source,f=>r(t,"TAG_RESOLVE_FAILED",f)):null;let l;e.options.stringKeys&&e.atKey?l=e.schema[pn]:c?l=Yd(e.schema,s,c,t,r):n.type==="scalar"?l=Jd(e,s,n,r):l=e.schema[pn];let u;try{const f=l.resolve(s,p=>r(t??n,"TAG_RESOLVE_FAILED",p),e.options);u=oe(f)?f:new H(f)}catch(f){const p=f instanceof Error?f.message:String(f);r(t??n,"TAG_RESOLVE_FAILED",p),u=new H(s)}return u.range=a,u.source=s,i&&(u.type=i),c&&(u.tag=c),l.format&&(u.format=l.format),o&&(u.comment=o),u}function Yd(e,n,t,r,s){var a;if(t==="!")return e[pn];const i=[];for(const c of e.tags)if(!c.collection&&c.tag===t)if(c.default&&c.test)i.push(c);else return c;for(const c of i)if((a=c.test)!=null&&a.test(n))return c;const o=e.knownTags[t];return o&&!o.collection?(e.tags.push(Object.assign({},o,{default:!1,test:void 0})),o):(s(r,"TAG_RESOLVE_FAILED",`Unresolved tag: ${t}`,t!=="tag:yaml.org,2002:str"),e[pn])}function Jd({atKey:e,directives:n,schema:t},r,s,i){const o=t.tags.find(a=>{var c;return(a.default===!0||e&&a.default==="key")&&((c=a.test)==null?void 0:c.test(r))})||t[pn];if(t.compat){const a=t.compat.find(c=>{var l;return c.default&&((l=c.test)==null?void 0:l.test(r))})??t[pn];if(o.tag!==a.tag){const c=n.tagString(o.tag),l=n.tagString(a.tag),u=`Value may be parsed as either ${c} or ${l}`;i(s,"TAG_RESOLVE_FAILED",u,!0)}}return o}function Qd(e,n,t){if(n){t??(t=n.length);for(let r=t-1;r>=0;--r){let s=n[r];switch(s.type){case"space":case"comment":case"newline":e-=s.source.length;continue}for(s=n[++r];(s==null?void 0:s.type)==="space";)e+=s.source.length,s=n[++r];break}}return e}const Xd={composeNode:Jc,composeEmptyNode:Ci};function Jc(e,n,t,r){const s=e.atKey,{spaceBefore:i,comment:o,anchor:a,tag:c}=t;let l,u=!0;switch(n.type){case"alias":l=Zd(e,n,r),(a||c)&&r(n,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":l=Yc(e,n,c,r),a&&(l.anchor=a.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":try{l=jd(Xd,e,n,t,r),a&&(l.anchor=a.source.substring(1))}catch(f){const p=f instanceof Error?f.message:String(f);r(n,"RESOURCE_EXHAUSTION",p)}break;default:{const f=n.type==="error"?n.message:`Unsupported token (type: ${n.type})`;r(n,"UNEXPECTED_TOKEN",f),u=!1}}return l??(l=Ci(e,n.offset,void 0,null,t,r)),a&&l.anchor===""&&r(a,"BAD_ALIAS","Anchor cannot be an empty string"),s&&e.options.stringKeys&&(!oe(l)||typeof l.value!="string"||l.tag&&l.tag!=="tag:yaml.org,2002:str")&&r(c??n,"NON_STRING_KEY","With stringKeys, all keys must be strings"),i&&(l.spaceBefore=!0),o&&(n.type==="scalar"&&n.source===""?l.comment=o:l.commentBefore=o),e.options.keepSourceTokens&&u&&(l.srcToken=n),l}function Ci(e,n,t,r,{spaceBefore:s,comment:i,anchor:o,tag:a,end:c},l){const u={type:"scalar",offset:Qd(n,t,r),indent:-1,source:""},f=Yc(e,u,a,l);return o&&(f.anchor=o.source.substring(1),f.anchor===""&&l(o,"BAD_ALIAS","Anchor cannot be an empty string")),s&&(f.spaceBefore=!0),i&&(f.comment=i,f.range[2]=c),f}function Zd({options:e},{offset:n,source:t,end:r},s){const i=new bi(t.substring(1));i.source===""&&s(n,"BAD_ALIAS","Alias cannot be an empty string"),i.source.endsWith(":")&&s(n+t.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const o=n+t.length,a=ir(r,o,e.strict,s);return i.range=[n,o,a.offset],a.comment&&(i.comment=a.comment),i}function eh(e,n,{offset:t,start:r,value:s,end:i},o){const a=Object.assign({_directives:n},e),c=new os(void 0,a),l={atKey:!1,atRoot:!0,directives:c.directives,options:c.options,schema:c.schema},u=_t(r,{indicator:"doc-start",next:s??(i==null?void 0:i[0]),offset:t,onError:o,parentIndent:0,startOnNewline:!0});u.found&&(c.directives.docStart=!0,s&&(s.type==="block-map"||s.type==="block-seq")&&!u.hasNewline&&o(u.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),c.contents=s?Jc(l,s,u,o):Ci(l,u.end,r,null,u,o);const f=c.contents.range[2],p=ir(i,f,!1,o);return p.comment&&(c.comment=p.comment),c.range=[t,f,p.offset],c}function Ot(e){if(typeof e=="number")return[e,e+1];if(Array.isArray(e))return e.length===2?e:[e[0],e[1]];const{offset:n,source:t}=e;return[n,n+(typeof t=="string"?t.length:1)]}function jo(e){var s;let n="",t=!1,r=!1;for(let i=0;i<e.length;++i){const o=e[i];switch(o[0]){case"#":n+=(n===""?"":r?`

`:`
`)+(o.substring(1)||" "),t=!0,r=!1;break;case"%":((s=e[i+1])==null?void 0:s[0])!=="#"&&(i+=1),t=!1;break;default:t||(r=!0),t=!1}}return{comment:n,afterEmptyLine:r}}class nh{constructor(n={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(t,r,s,i)=>{const o=Ot(t);i?this.warnings.push(new xd(o,r,s)):this.errors.push(new It(o,r,s))},this.directives=new Re({version:n.version||"1.2"}),this.options=n}decorate(n,t){const{comment:r,afterEmptyLine:s}=jo(this.prelude);if(r){const i=n.contents;if(t)n.comment=n.comment?`${n.comment}
${r}`:r;else if(s||n.directives.docStart||!i)n.commentBefore=r;else if(le(i)&&!i.flow&&i.items.length>0){let o=i.items[0];pe(o)&&(o=o.key);const a=o.commentBefore;o.commentBefore=a?`${r}
${a}`:r}else{const o=i.commentBefore;i.commentBefore=o?`${r}
${o}`:r}}if(t){for(let i=0;i<this.errors.length;++i)n.errors.push(this.errors[i]);for(let i=0;i<this.warnings.length;++i)n.warnings.push(this.warnings[i])}else n.errors=this.errors,n.warnings=this.warnings;this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:jo(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(n,t=!1,r=-1){for(const s of n)yield*this.next(s);yield*this.end(t,r)}*next(n){switch(n.type){case"directive":this.directives.add(n.source,(t,r,s)=>{const i=Ot(n);i[0]+=t,this.onError(i,"BAD_DIRECTIVE",r,s)}),this.prelude.push(n.source),this.atDirectives=!0;break;case"document":{const t=eh(this.options,this.directives,n,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(n,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(n.source);break;case"error":{const t=n.source?`${n.message}: ${JSON.stringify(n.source)}`:n.message,r=new It(Ot(n),"UNEXPECTED_TOKEN",t);this.atDirectives||!this.doc?this.errors.push(r):this.doc.errors.push(r);break}case"doc-end":{if(!this.doc){const r="Unexpected doc-end without preceding document";this.errors.push(new It(Ot(n),"UNEXPECTED_TOKEN",r));break}this.doc.directives.docEnd=!0;const t=ir(n.end,n.offset+n.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){const r=this.doc.comment;this.doc.comment=r?`${r}
${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new It(Ot(n),"UNEXPECTED_TOKEN",`Unsupported token ${n.type}`))}}*end(n=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(n){const r=Object.assign({_directives:this.directives},this.options),s=new os(void 0,r);this.atDirectives&&this.onError(t,"MISSING_CHAR","Missing directives-end indicator line"),s.range=[0,t,t],this.decorate(s,!1),yield s}}}const Qc="\uFEFF",Xc="",Zc="",Js="";function th(e){switch(e){case Qc:return"byte-order-mark";case Xc:return"doc-mode";case Zc:return"flow-error-end";case Js:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(e[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}function ze(e){switch(e){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const Bo=new Set("0123456789ABCDEFabcdef"),rh=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),pr=new Set(",[]{}"),sh=new Set(` ,[]{}
\r	`),Os=e=>!e||sh.has(e);class ih{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(n,t=!1){if(n){if(typeof n!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+n:n,this.lineEndPos=null}this.atEnd=!t;let r=this.next??"stream";for(;r&&(t||this.hasChars(1));)r=yield*this.parseNext(r)}atLineEnd(){let n=this.pos,t=this.buffer[n];for(;t===" "||t==="	";)t=this.buffer[++n];return!t||t==="#"||t===`
`?!0:t==="\r"?this.buffer[n+1]===`
`:!1}charAt(n){return this.buffer[this.pos+n]}continueScalar(n){let t=this.buffer[n];if(this.indentNext>0){let r=0;for(;t===" ";)t=this.buffer[++r+n];if(t==="\r"){const s=this.buffer[r+n+1];if(s===`
`||!s&&!this.atEnd)return n+r+1}return t===`
`||r>=this.indentNext||!t&&!this.atEnd?n+r:-1}if(t==="-"||t==="."){const r=this.buffer.substr(n,3);if((r==="---"||r==="...")&&ze(this.buffer[n+3]))return-1}return n}getLine(){let n=this.lineEndPos;return(typeof n!="number"||n!==-1&&n<this.pos)&&(n=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=n),n===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[n-1]==="\r"&&(n-=1),this.buffer.substring(this.pos,n))}hasChars(n){return this.pos+n<=this.buffer.length}setNext(n){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=n,null}peek(n){return this.buffer.substr(this.pos,n)}*parseNext(n){switch(n){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let n=this.getLine();if(n===null)return this.setNext("stream");if(n[0]===Qc&&(yield*this.pushCount(1),n=n.substring(1)),n[0]==="%"){let t=n.length,r=n.indexOf("#");for(;r!==-1;){const i=n[r-1];if(i===" "||i==="	"){t=r-1;break}else r=n.indexOf("#",r+1)}for(;;){const i=n[t-1];if(i===" "||i==="	")t-=1;else break}const s=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(n.length-s),this.pushNewline(),"stream"}if(this.atLineEnd()){const t=yield*this.pushSpaces(!0);return yield*this.pushCount(n.length-t),yield*this.pushNewline(),"stream"}return yield Xc,yield*this.parseLineStart()}*parseLineStart(){const n=this.charAt(0);if(!n&&!this.atEnd)return this.setNext("line-start");if(n==="-"||n==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const t=this.peek(3);if((t==="---"||t==="...")&&ze(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,t==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!ze(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[n,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext("block-start");if((n==="-"||n==="?"||n===":")&&ze(t)){const r=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=r,"block-start"}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const n=this.getLine();if(n===null)return this.setNext("doc");let t=yield*this.pushIndicators();switch(n[t]){case"#":yield*this.pushCount(n.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(Os),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return t+=yield*this.parseBlockScalarHeader(),t+=yield*this.pushSpaces(!0),yield*this.pushCount(n.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let n,t,r=-1;do n=yield*this.pushNewline(),n>0?(t=yield*this.pushSpaces(!1),this.indentValue=r=t):t=0,t+=yield*this.pushSpaces(!0);while(n+t>0);const s=this.getLine();if(s===null)return this.setNext("flow");if((r!==-1&&r<this.indentNext&&s[0]!=="#"||r===0&&(s.startsWith("---")||s.startsWith("..."))&&ze(s[3]))&&!(r===this.indentNext-1&&this.flowLevel===1&&(s[0]==="]"||s[0]==="}")))return this.flowLevel=0,yield Zc,yield*this.parseLineStart();let i=0;for(;s[i]===",";)i+=yield*this.pushCount(1),i+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(i+=yield*this.pushIndicators(),s[i]){case void 0:return"flow";case"#":return yield*this.pushCount(s.length-i),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(Os),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const o=this.charAt(1);if(this.flowKey||ze(o)||o===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const n=this.charAt(0);let t=this.buffer.indexOf(n,this.pos+1);if(n==="'")for(;t!==-1&&this.buffer[t+1]==="'";)t=this.buffer.indexOf("'",t+2);else for(;t!==-1;){let i=0;for(;this.buffer[t-1-i]==="\\";)i+=1;if(i%2===0)break;t=this.buffer.indexOf('"',t+1)}const r=this.buffer.substring(0,t);let s=r.indexOf(`
`,this.pos);if(s!==-1){for(;s!==-1;){const i=this.continueScalar(s+1);if(i===-1)break;s=r.indexOf(`
`,i)}s!==-1&&(t=s-(r[s-1]==="\r"?2:1))}if(t===-1){if(!this.atEnd)return this.setNext("quoted-scalar");t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let n=this.pos;for(;;){const t=this.buffer[++n];if(t==="+")this.blockScalarKeep=!0;else if(t>"0"&&t<="9")this.blockScalarIndent=Number(t)-1;else if(t!=="-")break}return yield*this.pushUntil(t=>ze(t)||t==="#")}*parseBlockScalar(){let n=this.pos-1,t=0,r;e:for(let i=this.pos;r=this.buffer[i];++i)switch(r){case" ":t+=1;break;case`
`:n=i,t=0;break;case"\r":{const o=this.buffer[i+1];if(!o&&!this.atEnd)return this.setNext("block-scalar");if(o===`
`)break}default:break e}if(!r&&!this.atEnd)return this.setNext("block-scalar");if(t>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=t:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const i=this.continueScalar(n+1);if(i===-1)break;n=this.buffer.indexOf(`
`,i)}while(n!==-1);if(n===-1){if(!this.atEnd)return this.setNext("block-scalar");n=this.buffer.length}}let s=n+1;for(r=this.buffer[s];r===" ";)r=this.buffer[++s];if(r==="	"){for(;r==="	"||r===" "||r==="\r"||r===`
`;)r=this.buffer[++s];n=s-1}else if(!this.blockScalarKeep)do{let i=n-1,o=this.buffer[i];o==="\r"&&(o=this.buffer[--i]);const a=i;for(;o===" ";)o=this.buffer[--i];if(o===`
`&&i>=this.pos&&i+1+t>a)n=i;else break}while(!0);return yield Js,yield*this.pushToIndex(n+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const n=this.flowLevel>0;let t=this.pos-1,r=this.pos-1,s;for(;s=this.buffer[++r];)if(s===":"){const i=this.buffer[r+1];if(ze(i)||n&&pr.has(i))break;t=r}else if(ze(s)){let i=this.buffer[r+1];if(s==="\r"&&(i===`
`?(r+=1,s=`
`,i=this.buffer[r+1]):t=r),i==="#"||n&&pr.has(i))break;if(s===`
`){const o=this.continueScalar(r+1);if(o===-1)break;r=Math.max(r,o-2)}}else{if(n&&pr.has(s))break;t=r}return!s&&!this.atEnd?this.setNext("plain-scalar"):(yield Js,yield*this.pushToIndex(t+1,!0),n?"flow":"doc")}*pushCount(n){return n>0?(yield this.buffer.substr(this.pos,n),this.pos+=n,n):0}*pushToIndex(n,t){const r=this.buffer.slice(this.pos,n);return r?(yield r,this.pos+=r.length,r.length):(t&&(yield""),0)}*pushIndicators(){let n=0;e:for(;;){switch(this.charAt(0)){case"!":n+=yield*this.pushTag(),n+=yield*this.pushSpaces(!0);continue e;case"&":n+=yield*this.pushUntil(Os),n+=yield*this.pushSpaces(!0);continue e;case"-":case"?":case":":{const t=this.flowLevel>0,r=this.charAt(1);if(ze(r)||t&&pr.has(r)){t?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,n+=yield*this.pushCount(1),n+=yield*this.pushSpaces(!0);continue e}}}break e}return n}*pushTag(){if(this.charAt(1)==="<"){let n=this.pos+2,t=this.buffer[n];for(;!ze(t)&&t!==">";)t=this.buffer[++n];return yield*this.pushToIndex(t===">"?n+1:n,!1)}else{let n=this.pos+1,t=this.buffer[n];for(;t;)if(rh.has(t))t=this.buffer[++n];else if(t==="%"&&Bo.has(this.buffer[n+1])&&Bo.has(this.buffer[n+2]))t=this.buffer[n+=3];else break;return yield*this.pushToIndex(n,!1)}}*pushNewline(){const n=this.buffer[this.pos];return n===`
`?yield*this.pushCount(1):n==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(n){let t=this.pos-1,r;do r=this.buffer[++t];while(r===" "||n&&r==="	");const s=t-this.pos;return s>0&&(yield this.buffer.substr(this.pos,s),this.pos=t),s}*pushUntil(n){let t=this.pos,r=this.buffer[t];for(;!n(r);)r=this.buffer[++t];return yield*this.pushToIndex(t,!1)}}class oh{constructor(){this.lineStarts=[],this.addNewLine=n=>this.lineStarts.push(n),this.linePos=n=>{let t=0,r=this.lineStarts.length;for(;t<r;){const i=t+r>>1;this.lineStarts[i]<n?t=i+1:r=i}if(this.lineStarts[t]===n)return{line:t+1,col:1};if(t===0)return{line:0,col:n};const s=this.lineStarts[t-1];return{line:t,col:n-s+1}}}}function Cn(e,n){for(let t=0;t<e.length;++t)if(e[t].type===n)return!0;return!1}function Fo(e){for(let n=0;n<e.length;++n)switch(e[n].type){case"space":case"comment":case"newline":break;default:return n}return-1}function el(e){switch(e==null?void 0:e.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function dr(e){switch(e.type){case"document":return e.start;case"block-map":{const n=e.items[e.items.length-1];return n.sep??n.start}case"block-seq":return e.items[e.items.length-1].start;default:return[]}}function Xn(e){var t;if(e.length===0)return[];let n=e.length;e:for(;--n>=0;)switch(e[n].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;((t=e[++n])==null?void 0:t.type)==="space";);return e.splice(n,e.length)}function Lr(e,n){if(n.length<1e5)Array.prototype.push.apply(e,n);else for(let t=0;t<n.length;++t)e.push(n[t])}function Uo(e){if(e.start.type==="flow-seq-start")for(const n of e.items)n.sep&&!n.value&&!Cn(n.start,"explicit-key-ind")&&!Cn(n.sep,"map-value-ind")&&(n.key&&(n.value=n.key),delete n.key,el(n.value)?n.value.end?Lr(n.value.end,n.sep):n.value.end=n.sep:Lr(n.start,n.sep),delete n.sep)}class ah{constructor(n){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new ih,this.onNewLine=n}*parse(n,t=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const r of this.lexer.lex(n,t))yield*this.next(r);t||(yield*this.end())}*next(n){if(this.source=n,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=n.length;return}const t=th(n);if(t)if(t==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=t,yield*this.step(),t){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+n.length);break;case"space":this.atNewLine&&n[0]===" "&&(this.indent+=n.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=n.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=n.length}else{const r=`Not a YAML token: ${n}`;yield*this.pop({type:"error",offset:this.offset,message:r,source:n}),this.offset+=n.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const n=this.peek(1);if(this.type==="doc-end"&&(n==null?void 0:n.type)!=="doc-end"){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!n)return yield*this.stream();switch(n.type){case"document":return yield*this.document(n);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(n);case"block-scalar":return yield*this.blockScalar(n);case"block-map":return yield*this.blockMap(n);case"block-seq":return yield*this.blockSequence(n);case"flow-collection":return yield*this.flowCollection(n);case"doc-end":return yield*this.documentEnd(n)}yield*this.pop()}peek(n){return this.stack[this.stack.length-n]}*pop(n){const t=n??this.stack.pop();if(!t)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield t;else{const r=this.peek(1);switch(t.type==="block-scalar"?t.indent="indent"in r?r.indent:0:t.type==="flow-collection"&&r.type==="document"&&(t.indent=0),t.type==="flow-collection"&&Uo(t),r.type){case"document":r.value=t;break;case"block-scalar":r.props.push(t);break;case"block-map":{const s=r.items[r.items.length-1];if(s.value){r.items.push({start:[],key:t,sep:[]}),this.onKeyLine=!0;return}else if(s.sep)s.value=t;else{Object.assign(s,{key:t,sep:[]}),this.onKeyLine=!s.explicitKey;return}break}case"block-seq":{const s=r.items[r.items.length-1];s.value?r.items.push({start:[],value:t}):s.value=t;break}case"flow-collection":{const s=r.items[r.items.length-1];!s||s.value?r.items.push({start:[],key:t,sep:[]}):s.sep?s.value=t:Object.assign(s,{key:t,sep:[]});return}default:yield*this.pop(),yield*this.pop(t)}if((r.type==="document"||r.type==="block-map"||r.type==="block-seq")&&(t.type==="block-map"||t.type==="block-seq")){const s=t.items[t.items.length-1];s&&!s.sep&&!s.value&&s.start.length>0&&Fo(s.start)===-1&&(t.indent===0||s.start.every(i=>i.type!=="comment"||i.indent<t.indent))&&(r.type==="document"?r.end=s.start:r.items.push({start:s.start}),t.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const n={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&n.start.push(this.sourceToken),this.stack.push(n);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(n){if(n.value)return yield*this.lineEnd(n);switch(this.type){case"doc-start":{Fo(n.start)!==-1?(yield*this.pop(),yield*this.step()):n.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":n.start.push(this.sourceToken);return}const t=this.startBlockValue(n);t?this.stack.push(t):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(n){if(this.type==="map-value-ind"){const t=dr(this.peek(2)),r=Xn(t);let s;n.end?(s=n.end,s.push(this.sourceToken),delete n.end):s=[this.sourceToken];const i={type:"block-map",offset:n.offset,indent:n.indent,items:[{start:r,key:n,sep:s}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=i}else yield*this.lineEnd(n)}*blockScalar(n){switch(this.type){case"space":case"comment":case"newline":n.props.push(this.sourceToken);return;case"scalar":if(n.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(n){var r;const t=n.items[n.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,t.value){const s="end"in t.value?t.value.end:void 0,i=Array.isArray(s)?s[s.length-1]:void 0;(i==null?void 0:i.type)==="comment"?s==null||s.push(this.sourceToken):n.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)n.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,n.indent)){const s=n.items[n.items.length-2],i=(r=s==null?void 0:s.value)==null?void 0:r.end;if(Array.isArray(i)){Lr(i,t.start),i.push(this.sourceToken),n.items.pop();return}}t.start.push(this.sourceToken)}return}if(this.indent>=n.indent){const s=!this.onKeyLine&&this.indent===n.indent,i=s&&(t.sep||t.explicitKey)&&this.type!=="seq-item-ind";let o=[];if(i&&t.sep&&!t.value){const a=[];for(let c=0;c<t.sep.length;++c){const l=t.sep[c];switch(l.type){case"newline":a.push(c);break;case"space":break;case"comment":l.indent>n.indent&&(a.length=0);break;default:a.length=0}}a.length>=2&&(o=t.sep.splice(a[1]))}switch(this.type){case"anchor":case"tag":i||t.value?(o.push(this.sourceToken),n.items.push({start:o}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"explicit-key-ind":!t.sep&&!t.explicitKey?(t.start.push(this.sourceToken),t.explicitKey=!0):i||t.value?(o.push(this.sourceToken),n.items.push({start:o,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(t.explicitKey)if(t.sep)if(t.value)n.items.push({start:[],key:null,sep:[this.sourceToken]});else if(Cn(t.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:null,sep:[this.sourceToken]}]});else if(el(t.key)&&!Cn(t.sep,"newline")){const a=Xn(t.start),c=t.key,l=t.sep;l.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:c,sep:l}]})}else o.length>0?t.sep=t.sep.concat(o,this.sourceToken):t.sep.push(this.sourceToken);else if(Cn(t.start,"newline"))Object.assign(t,{key:null,sep:[this.sourceToken]});else{const a=Xn(t.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:null,sep:[this.sourceToken]}]})}else t.sep?t.value||i?n.items.push({start:o,key:null,sep:[this.sourceToken]}):Cn(t.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const a=this.flowScalar(this.type);i||t.value?(n.items.push({start:o,key:a,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(a):(Object.assign(t,{key:a,sep:[]}),this.onKeyLine=!0);return}default:{const a=this.startBlockValue(n);if(a){if(a.type==="block-seq"){if(!t.explicitKey&&t.sep&&!Cn(t.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else s&&n.items.push({start:o});this.stack.push(a);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(n){var r;const t=n.items[n.items.length-1];switch(this.type){case"newline":if(t.value){const s="end"in t.value?t.value.end:void 0,i=Array.isArray(s)?s[s.length-1]:void 0;(i==null?void 0:i.type)==="comment"?s==null||s.push(this.sourceToken):n.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)n.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,n.indent)){const s=n.items[n.items.length-2],i=(r=s==null?void 0:s.value)==null?void 0:r.end;if(Array.isArray(i)){Lr(i,t.start),i.push(this.sourceToken),n.items.pop();return}}t.start.push(this.sourceToken)}return;case"anchor":case"tag":if(t.value||this.indent<=n.indent)break;t.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==n.indent)break;t.value||Cn(t.start,"seq-item-ind")?n.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return}if(this.indent>n.indent){const s=this.startBlockValue(n);if(s){this.stack.push(s);return}}yield*this.pop(),yield*this.step()}*flowCollection(n){const t=n.items[n.items.length-1];if(this.type==="flow-error-end"){let r;do yield*this.pop(),r=this.peek(1);while((r==null?void 0:r.type)==="flow-collection")}else if(n.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!t||t.sep?n.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return;case"map-value-ind":!t||t.value?n.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!t||t.value?n.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const s=this.flowScalar(this.type);!t||t.value?n.items.push({start:[],key:s,sep:[]}):t.sep?this.stack.push(s):Object.assign(t,{key:s,sep:[]});return}case"flow-map-end":case"flow-seq-end":n.end.push(this.sourceToken);return}const r=this.startBlockValue(n);r?this.stack.push(r):(yield*this.pop(),yield*this.step())}else{const r=this.peek(2);if(r.type==="block-map"&&(this.type==="map-value-ind"&&r.indent===n.indent||this.type==="newline"&&!r.items[r.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&r.type!=="flow-collection"){const s=dr(r),i=Xn(s);Uo(n);const o=n.end.splice(1,n.end.length);o.push(this.sourceToken);const a={type:"block-map",offset:n.offset,indent:n.indent,items:[{start:i,key:n,sep:o}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=a}else yield*this.lineEnd(n)}}flowScalar(n){if(this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}return{type:n,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(n){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const t=dr(n),r=Xn(t);return r.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:r,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const t=dr(n),r=Xn(t);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:r,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(n,t){return this.type!=="comment"||this.indent<=t?!1:n.every(r=>r.type==="newline"||r.type==="space")}*documentEnd(n){this.type!=="doc-mode"&&(n.end?n.end.push(this.sourceToken):n.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(n){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:n.end?n.end.push(this.sourceToken):n.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function ch(e){const n=e.prettyErrors!==!1;return{lineCounter:e.lineCounter||n&&new oh||null,prettyErrors:n}}function lh(e,n={}){const{lineCounter:t,prettyErrors:r}=ch(n),s=new ah(t==null?void 0:t.addNewLine),i=new nh(n);let o=null;for(const a of i.compose(s.parse(e),!0,e.length))if(!o)o=a;else if(o.options.logLevel!=="silent"){o.errors.push(new It(a.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return r&&t&&(o.errors.forEach(Do(e,t)),o.warnings.forEach(Do(e,t))),o}function uh(e,n,t){let r;const s=lh(e,t);if(!s)return null;if(s.warnings.forEach(i=>Nc(s.options.logLevel,i)),s.errors.length>0){if(s.options.logLevel!=="silent")throw s.errors[0];s.errors=[]}return s.toJS(Object.assign({reviver:r},t))}const fh=Object.assign({"../../../cpp/branch/p.brn.aid.standard.yaml":Pp,"../../../cpp/branch/p.brn.decide.standard.yaml":xp,"../../../cpp/branch/p.brn.fees.standard.yaml":Mp,"../../../cpp/branch/p.brn.spend.standard.yaml":Dp,"../../../cpp/branch/p.brn.trust.standard.yaml":$p,"../../../cpp/capital/p.cap.debt.standard.yaml":jp,"../../../cpp/capital/p.cap.invest.standard.yaml":Bp,"../../../cpp/capital/p.cap.prop.standard.yaml":Fp,"../../../cpp/capital/p.cap.rid.standard.yaml":Up,"../../../cpp/marketplace/p.mkt.return.standard.yaml":Kp,"../../../cpp/marketplace/p.mkt.supply.standard.yaml":Vp,"../../../cpp/marketplace/p.mkt.wroff.standard.yaml":qp,"../../../cpp/meet/meet.hold.standard.yaml":Hp,"../../../cpp/registrator/p.reg.accept.standard.yaml":Gp,"../../../cpp/registrator/p.reg.refund.standard.yaml":zp,"../../../cpp/registrator/reg.coop.standard.yaml":Wp,"../../../cpp/soviet/p.sov.tax.standard.yaml":Yp,"../../../cpp/soviet/sov.authpkg.standard.yaml":Jp,"../../../cpp/soviet/sov.decision.standard.yaml":Qp,"../../../cpp/soviet/sov.selectbranch.standard.yaml":Xp,"../../../cpp/wallet/p.wal.depo.standard.yaml":Zp,"../../../cpp/wallet/p.wal.wthdrw.standard.yaml":ed});function ph(e){if(e===null||typeof e!="object")return!1;const n=e;return!!(n.process_type&&n.title&&n.contract&&n.slug)}function dh(){var r;const e={},n={};for(const[s,i]of Object.entries(fh)){let o;try{o=uh(i)}catch(c){console.error(`[standards] YAML parse error in ${s}:`,c);continue}if(!ph(o)){console.warn(`[standards] Файл ${s} не похож на standard-манифест (обязательные поля: process_type, title, contract, slug)`);continue}if(e[o.process_type]){console.warn(`[standards] Дубликат process_type "${o.process_type}" в ${s}`);continue}e[o.process_type]=o;const a={process_type:o.process_type,title:o.title,contract:o.contract,slug:o.slug,path:s,status:o.status};(n[r=o.contract]??(n[r]=[])).push(a)}for(const s of Object.values(n))s.sort((i,o)=>i.title.localeCompare(o.title,"ru"));const t=Object.keys(n).sort();return{byProcessType:e,byContract:n,contracts:t}}const Qs=dh();function im(e){return Qs.byProcessType[e]}const hh={registrator:"Регистратор",wallet:"Главный кошелёк",capital:"«Благорост»",marketplace:"«Стол заказов»",soviet:"Совет",meet:"Общие собрания",ledger2:"Учёт операций"},om={proposed:"предложен",approved:"утверждён",active:"действующий",deprecated:"устаревший"};/**
 * @license lucide-vue-next v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var hr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=({size:e,strokeWidth:n=2,absoluteStrokeWidth:t,color:r,iconNode:s,name:i,class:o,...a},{slots:c})=>Wt("svg",{...hr,width:e||hr.width,height:e||hr.height,stroke:r||hr.stroke,"stroke-width":t?Number(n)*24/Number(e):n,class:["lucide",`lucide-${mh(i??"icon")}`],...a},[...s.map(l=>Wt(...l)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=(e,n)=>(t,{slots:r})=>Wt(gh,{...t,iconNode:n,name:e},r);/**
 * @license lucide-vue-next v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=nl("MoonIcon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=nl("SunIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),tl="standards.theme";function rl(){try{const e=localStorage.getItem(tl);return e==="light"||e==="dark"?e:null}catch{return null}}function bh(){return typeof window>"u"||!window.matchMedia?"light":window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Li(e){typeof document<"u"&&(document.documentElement.dataset.theme=e)}const Pn=qr(rl()??bh());let Ko=!1;function wh(){if(!Ko&&(Ko=!0,Li(Pn.value),typeof window<"u"&&window.matchMedia)){const e=window.matchMedia("(prefers-color-scheme: dark)"),n=t=>{rl()===null&&(Pn.value=t.matches?"dark":"light")};e.addEventListener("change",n)}}Mt(Pn,e=>{Li(e);try{localStorage.setItem(tl,e)}catch{}});typeof document<"u"&&Li(Pn.value);function vh(){return li(wh),ui(()=>{}),{theme:Pn,toggle:()=>{Pn.value=Pn.value==="dark"?"light":"dark"},setTheme:e=>{Pn.value=e}}}const kh=["title","aria-label"],Sh=er({__name:"ThemeToggle",setup(e){const{theme:n,toggle:t}=vh();return(r,s)=>(Ie(),an("button",{type:"button",class:"theme-toggle",title:we(n)==="dark"?"Светлая тема":"Тёмная тема","aria-label":we(n)==="dark"?"Светлая тема":"Тёмная тема",onClick:s[0]||(s[0]=(...i)=>we(t)&&we(t)(...i))},[we(n)==="dark"?(Ie(),Ht(we(yh),{key:0,size:16})):(Ie(),Ht(we(_h),{key:1,size:16})),ke("span",null,Lt(we(n)==="dark"?"Светлая":"Тёмная"),1)],8,kh))}}),sl=(e,n)=>{const t=e.__vccOpts||e;for(const[r,s]of n)t[r]=s;return t},Eh=sl(Sh,[["__scopeId","data-v-736ff43a"]]),Ah={class:"sidebar"},Nh={class:"sidebar-brand"},Oh={class:"sidebar-body"},Th={key:0,class:"sidebar-empty"},Rh={class:"sidebar-group__head"},Ih={class:"sidebar-group__name"},Ch={key:0,class:"sidebar-group__code"},Lh={class:"sidebar-group__list"},Ph={class:"sidebar-foot"},xh=er({__name:"Sidebar",setup(e){const n=Lp(),t=Le(()=>Qs.contracts),r=Le(()=>Qs.byContract),s=Le(()=>t.value.length===0),i=Le(()=>typeof n.params.processType=="string"?n.params.processType:null);function o(a){return hh[a]??""}return(a,c)=>(Ie(),an("nav",Ah,[ke("div",Nh,[ge(we(qs),{to:"/"},{default:Ps(()=>[...c[0]||(c[0]=[ke("div",{class:"sidebar-brand__title"},"Кооперативные стандарты",-1),ke("div",{class:"sidebar-brand__subtitle"},"Реестр v1",-1)])]),_:1})]),ke("div",Oh,[s.value?(Ie(),an("p",Th,[...c[1]||(c[1]=[_r(" Стандарты не найдены. Добавьте ",-1),ke("code",null,"*.standard.yaml",-1),_r(" рядом с кодом контракта. ",-1)])])):Zi("",!0),(Ie(!0),an(Be,null,qi(t.value,l=>(Ie(),an("div",{key:l,class:"sidebar-group"},[ke("div",Rh,[ke("span",Ih,Lt(o(l)||l),1),o(l)?(Ie(),an("code",Ch,Lt(l),1)):Zi("",!0)]),ke("ul",Lh,[(Ie(!0),an(Be,null,qi(r.value[l],u=>(Ie(),an("li",{key:u.process_type},[ge(we(qs),{to:{name:"process",params:{contract:u.contract,processType:u.process_type}},class:Br(["sidebar-item",{"sidebar-item--active":i.value===u.process_type}])},{default:Ps(()=>[_r(Lt(u.title),1)]),_:2},1032,["to","class"])]))),128))])]))),128))]),ke("div",Ph,[ge(Eh)])]))}}),Mh=sl(xh,[["__scopeId","data-v-fff96373"]]),Dh={key:0,class:"mobile-stub"},$h={key:1,class:"app-shell"},jh={class:"app-sidebar"},Bh={class:"app-main"},Fh=900,Uh=er({__name:"App",setup(e){const n=qr(!1);function t(){typeof window>"u"||(n.value=window.innerWidth<Fh)}return li(()=>{t(),window.addEventListener("resize",t)}),ui(()=>{window.removeEventListener("resize",t)}),(r,s)=>{const i=du("router-view");return n.value?(Ie(),an("div",Dh,[...s[0]||(s[0]=[ke("div",{class:"mobile-stub__box"},[ke("h1",null,"Только для десктопа"),ke("p",null," Реестр кооперативных стандартов рассчитан на широкие экраны — BPMN-граф процесса не помещается на мобильных устройствах. Откройте сайт с компьютера или планшета. ")],-1)])])):(Ie(),an("div",$h,[ke("aside",jh,[ge(Mh)]),ke("main",Bh,[ge(i)])]))}}}),Kh="modulepreload",Vh=function(e){return"/standards/"+e},Vo={},Ts=function(n,t,r){let s=Promise.resolve();if(t&&t.length>0){let o=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=o(t.map(l=>{if(l=Vh(l),l in Vo)return;Vo[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":Kh,u||(p.as="script"),p.crossOrigin="",p.href=l,c&&p.setAttribute("nonce",c),document.head.appendChild(p),u)return new Promise((d,b)=>{p.addEventListener("load",d),p.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return n().catch(i)})},qh=[{path:"/",name:"home",component:()=>Ts(()=>import("./HomePage-CVtqI5my.js"),__vite__mapDeps([0,1]))},{path:"/:contract/:processType",name:"process",component:()=>Ts(()=>import("./ProcessPage-osqO5PVK.js"),__vite__mapDeps([2,3])),props:!0},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>Ts(()=>import("./NotFoundPage-BTBLO6yn.js"),[])}],Hh=Cp({history:up(),routes:qh,scrollBehavior(e,n){if(!(e.name!==n.name||e.params.processType!==n.params.processType))return!1;if(typeof document<"u"){const r=document.querySelector(".app-main");r?r.scrollTo({top:0,behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"})}return{top:0}}});Sf(Uh).use(Hh).mount("#app");export{sm as $,ec as A,Gh as B,hh as C,ui as D,Wh as E,Be as F,ei as G,Je as H,Kr as I,_e as J,Jh as K,Yh as L,_l as M,ba as N,Ls as O,$l as P,zh as Q,qs as R,om as S,rm as T,mr as U,Wt as V,du as W,nm as X,Vu as Y,Xh as Z,sl as _,ke as a,vh as a0,Lp as a1,im as a2,_r as b,an as c,er as d,Zi as e,Le as f,Ht as g,nl as h,em as i,Ra as j,ge as k,Zh as l,Mt as m,ou as n,Ie as o,li as p,Br as q,qi as r,Qs as s,Lt as t,we as u,jl as v,Ps as w,Qh as x,tm as y,qr as z};
