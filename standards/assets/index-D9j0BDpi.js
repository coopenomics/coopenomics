const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomePage-BkKp7fSO.js","assets/HomePage-CBVpyQ9J.css","assets/ProcessPage-JTDL-qKD.js","assets/ProcessPage-D8FxSXcQ.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Xs(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const on={},st=[],ue=()=>{},qo=()=>!1,Pr=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),xr=n=>n.startsWith("onUpdate:"),En=Object.assign,Zs=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},il=Object.prototype.hasOwnProperty,X=(n,e)=>il.call(n,e),K=Array.isArray,it=n=>Xt(n)==="[object Map]",Ho=n=>Xt(n)==="[object Set]",Di=n=>Xt(n)==="[object Date]",q=n=>typeof n=="function",fn=n=>typeof n=="string",Vn=n=>typeof n=="symbol",Z=n=>n!==null&&typeof n=="object",zo=n=>(Z(n)||q(n))&&q(n.then)&&q(n.catch),Go=Object.prototype.toString,Xt=n=>Go.call(n),ol=n=>Xt(n).slice(8,-1),Wo=n=>Xt(n)==="[object Object]",Mr=n=>fn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ct=Xs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Dr=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},al=/-\w/g,Dn=Dr(n=>n.replace(al,e=>e.slice(1).toUpperCase())),cl=/\B([A-Z])/g,ze=Dr(n=>n.replace(cl,"-$1").toLowerCase()),Br=Dr(n=>n.charAt(0).toUpperCase()+n.slice(1)),as=Dr(n=>n?`on${Br(n)}`:""),Yn=(n,e)=>!Object.is(n,e),cs=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Yo=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},ll=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Bi;const $r=()=>Bi||(Bi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ni(n){if(K(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=fn(r)?dl(r):ni(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(fn(n)||Z(n))return n}const ul=/;(?![^(]*\))/g,pl=/:([^]+)/,fl=/\/\*[^]*?\*\//g;function dl(n){const e={};return n.replace(fl,"").split(ul).forEach(t=>{if(t){const r=t.split(pl);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function jr(n){let e="";if(fn(n))e=n;else if(K(n))for(let t=0;t<n.length;t++){const r=jr(n[t]);r&&(e+=r+" ")}else if(Z(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const hl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ml=Xs(hl);function Jo(n){return!!n||n===""}function gl(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=ei(n[r],e[r]);return t}function ei(n,e){if(n===e)return!0;let t=Di(n),r=Di(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=Vn(n),r=Vn(e),t||r)return n===e;if(t=K(n),r=K(e),t||r)return t&&r?gl(n,e):!1;if(t=Z(n),r=Z(e),t||r){if(!t||!r)return!1;const s=Object.keys(n).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in n){const a=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!ei(n[o],e[o]))return!1}}return String(n)===String(e)}const Qo=n=>!!(n&&n.__v_isRef===!0),Lt=n=>fn(n)?n:n==null?"":K(n)||Z(n)&&(n.toString===Go||!q(n.toString))?Qo(n)?Lt(n.value):JSON.stringify(n,Xo,2):String(n),Xo=(n,e)=>Qo(e)?Xo(n,e.value):it(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[ls(r,i)+" =>"]=s,t),{})}:Ho(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>ls(t))}:Vn(e)?ls(e):Z(e)&&!K(e)&&!Wo(e)?String(e):e,ls=(n,e="")=>{var t;return Vn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let An;class Zo{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=An,!e&&An&&(this.index=(An.scopes||(An.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=An;try{return An=this,e()}finally{An=t}}}on(){++this._on===1&&(this.prevScope=An,An=this)}off(){this._on>0&&--this._on===0&&(An=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Yh(n){return new Zo(n)}function _l(){return An}function Jh(n,e=!1){An&&An.cleanups.push(n)}let sn;const us=new WeakSet;class na{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,An&&An.active&&An.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,us.has(this)&&(us.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ta(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,$i(this),ra(this);const e=sn,t=Jn;sn=this,Jn=!0;try{return this.fn()}finally{sa(this),sn=e,Jn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)si(e);this.deps=this.depsTail=void 0,$i(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?us.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Rs(this)&&this.run()}get dirty(){return Rs(this)}}let ea=0,Pt,xt;function ta(n,e=!1){if(n.flags|=8,e){n.next=xt,xt=n;return}n.next=Pt,Pt=n}function ti(){ea++}function ri(){if(--ea>0)return;if(xt){let e=xt;for(xt=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Pt;){let e=Pt;for(Pt=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function ra(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function sa(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),si(r),yl(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function Rs(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ia(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function ia(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Kt)||(n.globalVersion=Kt,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Rs(n))))return;n.flags|=2;const e=n.dep,t=sn,r=Jn;sn=n,Jn=!0;try{ra(n);const s=n.fn(n._value);(e.version===0||Yn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{sn=t,Jn=r,sa(n),n.flags&=-3}}function si(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)si(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function yl(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Jn=!0;const oa=[];function ve(){oa.push(Jn),Jn=!1}function ke(){const n=oa.pop();Jn=n===void 0?!0:n}function $i(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=sn;sn=void 0;try{e()}finally{sn=t}}}let Kt=0;class bl{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Fr{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!sn||!Jn||sn===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==sn)t=this.activeLink=new bl(sn,this),sn.deps?(t.prevDep=sn.depsTail,sn.depsTail.nextDep=t,sn.depsTail=t):sn.deps=sn.depsTail=t,aa(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=sn.depsTail,t.nextDep=void 0,sn.depsTail.nextDep=t,sn.depsTail=t,sn.deps===t&&(sn.deps=r)}return t}trigger(e){this.version++,Kt++,this.notify(e)}notify(e){ti();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ri()}}}function aa(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)aa(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const kr=new WeakMap,Ve=Symbol(""),Is=Symbol(""),Vt=Symbol("");function Nn(n,e,t){if(Jn&&sn){let r=kr.get(n);r||kr.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new Fr),s.map=r,s.key=t),s.track()}}function ye(n,e,t,r,s,i){const o=kr.get(n);if(!o){Kt++;return}const a=c=>{c&&c.trigger()};if(ti(),e==="clear")o.forEach(a);else{const c=K(n),l=c&&Mr(t);if(c&&t==="length"){const u=Number(r);o.forEach((p,f)=>{(f==="length"||f===Vt||!Vn(f)&&f>=u)&&a(p)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),l&&a(o.get(Vt)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Ve)),it(n)&&a(o.get(Is)));break;case"delete":c||(a(o.get(Ve)),it(n)&&a(o.get(Is)));break;case"set":it(n)&&a(o.get(Ve));break}}ri()}function wl(n,e){const t=kr.get(n);return t&&t.get(e)}function Je(n){const e=Y(n);return e===n?e:(Nn(e,"iterate",Vt),Kn(n)?e:e.map(Xn))}function Ur(n){return Nn(n=Y(n),"iterate",Vt),n}function ce(n,e){return Se(n)?pt(qe(n)?Xn(e):e):Xn(e)}const vl={__proto__:null,[Symbol.iterator](){return ps(this,Symbol.iterator,n=>ce(this,n))},concat(...n){return Je(this).concat(...n.map(e=>K(e)?Je(e):e))},entries(){return ps(this,"entries",n=>(n[1]=ce(this,n[1]),n))},every(n,e){return he(this,"every",n,e,void 0,arguments)},filter(n,e){return he(this,"filter",n,e,t=>t.map(r=>ce(this,r)),arguments)},find(n,e){return he(this,"find",n,e,t=>ce(this,t),arguments)},findIndex(n,e){return he(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return he(this,"findLast",n,e,t=>ce(this,t),arguments)},findLastIndex(n,e){return he(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return he(this,"forEach",n,e,void 0,arguments)},includes(...n){return fs(this,"includes",n)},indexOf(...n){return fs(this,"indexOf",n)},join(n){return Je(this).join(n)},lastIndexOf(...n){return fs(this,"lastIndexOf",n)},map(n,e){return he(this,"map",n,e,void 0,arguments)},pop(){return Et(this,"pop")},push(...n){return Et(this,"push",n)},reduce(n,...e){return ji(this,"reduce",n,e)},reduceRight(n,...e){return ji(this,"reduceRight",n,e)},shift(){return Et(this,"shift")},some(n,e){return he(this,"some",n,e,void 0,arguments)},splice(...n){return Et(this,"splice",n)},toReversed(){return Je(this).toReversed()},toSorted(n){return Je(this).toSorted(n)},toSpliced(...n){return Je(this).toSpliced(...n)},unshift(...n){return Et(this,"unshift",n)},values(){return ps(this,"values",n=>ce(this,n))}};function ps(n,e,t){const r=Ur(n),s=r[e]();return r!==n&&!Kn(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=t(i.value)),i}),s}const kl=Array.prototype;function he(n,e,t,r,s,i){const o=Ur(n),a=o!==n&&!Kn(n),c=o[e];if(c!==kl[e]){const p=c.apply(n,i);return a?Xn(p):p}let l=t;o!==n&&(a?l=function(p,f){return t.call(this,ce(n,p),f,n)}:t.length>2&&(l=function(p,f){return t.call(this,p,f,n)}));const u=c.call(o,l,r);return a&&s?s(u):u}function ji(n,e,t,r){const s=Ur(n),i=s!==n&&!Kn(n);let o=t,a=!1;s!==n&&(i?(a=r.length===0,o=function(l,u,p){return a&&(a=!1,l=ce(n,l)),t.call(this,l,ce(n,u),p,n)}):t.length>3&&(o=function(l,u,p){return t.call(this,l,u,p,n)}));const c=s[e](o,...r);return a?ce(n,c):c}function fs(n,e,t){const r=Y(n);Nn(r,"iterate",Vt);const s=r[e](...t);return(s===-1||s===!1)&&Vr(t[0])?(t[0]=Y(t[0]),r[e](...t)):s}function Et(n,e,t=[]){ve(),ti();const r=Y(n)[e].apply(n,t);return ri(),ke(),r}const Sl=Xs("__proto__,__v_isRef,__isVue"),ca=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Vn));function El(n){Vn(n)||(n=String(n));const e=Y(this);return Nn(e,"has",n),e.hasOwnProperty(n)}class la{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?xl:da:i?fa:pa).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=K(e);if(!s){let c;if(o&&(c=vl[t]))return c;if(t==="hasOwnProperty")return El}const a=Reflect.get(e,t,yn(e)?e:r);if((Vn(t)?ca.has(t):Sl(t))||(s||Nn(e,"get",t),i))return a;if(yn(a)){const c=o&&Mr(t)?a:a.value;return s&&Z(c)?Ls(c):c}return Z(a)?s?Ls(a):Kr(a):a}}class ua extends la{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];const o=K(e)&&Mr(t);if(!this._isShallow){const l=Se(i);if(!Kn(r)&&!Se(r)&&(i=Y(i),r=Y(r)),!o&&yn(i)&&!yn(r))return l||(i.value=r),!0}const a=o?Number(t)<e.length:X(e,t),c=Reflect.set(e,t,r,yn(e)?e:s);return e===Y(s)&&(a?Yn(r,i)&&ye(e,"set",t,r):ye(e,"add",t,r)),c}deleteProperty(e,t){const r=X(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&ye(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!Vn(t)||!ca.has(t))&&Nn(e,"has",t),r}ownKeys(e){return Nn(e,"iterate",K(e)?"length":Ve),Reflect.ownKeys(e)}}class Al extends la{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Nl=new ua,Ol=new Al,Tl=new ua(!0);const Cs=n=>n,or=n=>Reflect.getPrototypeOf(n);function Rl(n,e,t){return function(...r){const s=this.__v_raw,i=Y(s),o=it(i),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,l=s[n](...r),u=t?Cs:e?pt:Xn;return!e&&Nn(i,"iterate",c?Is:Ve),En(Object.create(l),{next(){const{value:p,done:f}=l.next();return f?{value:p,done:f}:{value:a?[u(p[0]),u(p[1])]:u(p),done:f}}})}}function ar(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Il(n,e){const t={get(s){const i=this.__v_raw,o=Y(i),a=Y(s);n||(Yn(s,a)&&Nn(o,"get",s),Nn(o,"get",a));const{has:c}=or(o),l=e?Cs:n?pt:Xn;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!n&&Nn(Y(s),"iterate",Ve),s.size},has(s){const i=this.__v_raw,o=Y(i),a=Y(s);return n||(Yn(s,a)&&Nn(o,"has",s),Nn(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=Y(a),l=e?Cs:n?pt:Xn;return!n&&Nn(c,"iterate",Ve),a.forEach((u,p)=>s.call(i,l(u),l(p),o))}};return En(t,n?{add:ar("add"),set:ar("set"),delete:ar("delete"),clear:ar("clear")}:{add(s){const i=Y(this),o=or(i),a=Y(s),c=!e&&!Kn(s)&&!Se(s)?a:s;return o.has.call(i,c)||Yn(s,c)&&o.has.call(i,s)||Yn(a,c)&&o.has.call(i,a)||(i.add(c),ye(i,"add",c,c)),this},set(s,i){!e&&!Kn(i)&&!Se(i)&&(i=Y(i));const o=Y(this),{has:a,get:c}=or(o);let l=a.call(o,s);l||(s=Y(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,i),l?Yn(i,u)&&ye(o,"set",s,i):ye(o,"add",s,i),this},delete(s){const i=Y(this),{has:o,get:a}=or(i);let c=o.call(i,s);c||(s=Y(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&ye(i,"delete",s,void 0),l},clear(){const s=Y(this),i=s.size!==0,o=s.clear();return i&&ye(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Rl(s,n,e)}),t}function ii(n,e){const t=Il(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(X(t,s)&&s in r?t:r,s,i)}const Cl={get:ii(!1,!1)},Ll={get:ii(!1,!0)},Pl={get:ii(!0,!1)};const pa=new WeakMap,fa=new WeakMap,da=new WeakMap,xl=new WeakMap;function Ml(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dl(n){return n.__v_skip||!Object.isExtensible(n)?0:Ml(ol(n))}function Kr(n){return Se(n)?n:oi(n,!1,Nl,Cl,pa)}function ha(n){return oi(n,!1,Tl,Ll,fa)}function Ls(n){return oi(n,!0,Ol,Pl,da)}function oi(n,e,t,r,s){if(!Z(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=Dl(n);if(i===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,i===2?r:t);return s.set(n,a),a}function qe(n){return Se(n)?qe(n.__v_raw):!!(n&&n.__v_isReactive)}function Se(n){return!!(n&&n.__v_isReadonly)}function Kn(n){return!!(n&&n.__v_isShallow)}function Vr(n){return n?!!n.__v_raw:!1}function Y(n){const e=n&&n.__v_raw;return e?Y(e):n}function Bl(n){return!X(n,"__v_skip")&&Object.isExtensible(n)&&Yo(n,"__v_skip",!0),n}const Xn=n=>Z(n)?Kr(n):n,pt=n=>Z(n)?Ls(n):n;function yn(n){return n?n.__v_isRef===!0:!1}function qr(n){return ma(n,!1)}function $l(n){return ma(n,!0)}function ma(n,e){return yn(n)?n:new jl(n,e)}class jl{constructor(e,t){this.dep=new Fr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Y(e),this._value=t?e:Xn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||Kn(e)||Se(e);e=r?e:Y(e),Yn(e,t)&&(this._rawValue=e,this._value=r?e:Xn(e),this.dep.trigger())}}function vn(n){return yn(n)?n.value:n}function Qh(n){return q(n)?n():vn(n)}const Fl={get:(n,e,t)=>e==="__v_raw"?n:vn(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return yn(s)&&!yn(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function ga(n){return qe(n)?n:new Proxy(n,Fl)}class Ul{constructor(e){this.__v_isRef=!0,this._value=void 0;const t=this.dep=new Fr,{get:r,set:s}=e(t.track.bind(t),t.trigger.bind(t));this._get=r,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}}function Xh(n){return new Ul(n)}function Zh(n){const e=K(n)?new Array(n.length):{};for(const t in n)e[t]=_a(n,t);return e}class Kl{constructor(e,t,r){this._object=e,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._key=Vn(t)?t:String(t),this._raw=Y(e);let s=!0,i=e;if(!K(e)||Vn(this._key)||!Mr(this._key))do s=!Vr(i)||Kn(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=vn(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&yn(this._raw[this._key])){const t=this._object[this._key];if(yn(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return wl(this._raw,this._key)}}class Vl{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function nm(n,e,t){return yn(n)?n:q(n)?new Vl(n):Z(n)&&arguments.length>1?_a(n,e,t):qr(n)}function _a(n,e,t){return new Kl(n,e,t)}class ql{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Fr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Kt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&sn!==this)return ta(this,!0),!0}get value(){const e=this.dep.track();return ia(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Hl(n,e,t=!1){let r,s;return q(n)?r=n:(r=n.get,s=n.set),new ql(r,s,t)}const cr={},Sr=new WeakMap;let $e;function zl(n,e=!1,t=$e){if(t){let r=Sr.get(t);r||Sr.set(t,r=[]),r.push(n)}}function Gl(n,e,t=on){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=t,l=N=>s?N:Kn(N)||s===!1||s===0?Le(N,1):Le(N);let u,p,f,d,b=!1,g=!1;if(yn(n)?(p=()=>n.value,b=Kn(n)):qe(n)?(p=()=>l(n),b=!0):K(n)?(g=!0,b=n.some(N=>qe(N)||Kn(N)),p=()=>n.map(N=>{if(yn(N))return N.value;if(qe(N))return l(N);if(q(N))return c?c(N,2):N()})):q(n)?e?p=c?()=>c(n,2):n:p=()=>{if(f){ve();try{f()}finally{ke()}}const N=$e;$e=u;try{return c?c(n,3,[d]):n(d)}finally{$e=N}}:p=ue,e&&s){const N=p,L=s===!0?1/0:s;p=()=>Le(N(),L)}const y=_l(),v=()=>{u.stop(),y&&y.active&&Zs(y.effects,u)};if(i&&e){const N=e;e=(...L)=>{N(...L),v()}}let w=g?new Array(n.length).fill(cr):cr;const O=N=>{if(!(!(u.flags&1)||!u.dirty&&!N))if(e){const L=u.run();if(s||b||(g?L.some((U,M)=>Yn(U,w[M])):Yn(L,w))){f&&f();const U=$e;$e=u;try{const M=[L,w===cr?void 0:g&&w[0]===cr?[]:w,d];w=L,c?c(e,3,M):e(...M)}finally{$e=U}}}else u.run()};return a&&a(O),u=new na(p),u.scheduler=o?()=>o(O,!1):O,d=N=>zl(N,!1,u),f=u.onStop=()=>{const N=Sr.get(u);if(N){if(c)c(N,4);else for(const L of N)L();Sr.delete(u)}},e?r?O(!0):w=u.run():o?o(O.bind(null,!0),!0):u.run(),v.pause=u.pause.bind(u),v.resume=u.resume.bind(u),v.stop=v,v}function Le(n,e=1/0,t){if(e<=0||!Z(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,yn(n))Le(n.value,e,t);else if(K(n))for(let r=0;r<n.length;r++)Le(n[r],e,t);else if(Ho(n)||it(n))n.forEach(r=>{Le(r,e,t)});else if(Wo(n)){for(const r in n)Le(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&Le(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zt(n,e,t,r){try{return r?n(...r):n()}catch(s){Hr(s,e,t)}}function pe(n,e,t,r){if(q(n)){const s=Zt(n,e,t,r);return s&&zo(s)&&s.catch(i=>{Hr(i,e,t)}),s}if(K(n)){const s=[];for(let i=0;i<n.length;i++)s.push(pe(n[i],e,t,r));return s}}function Hr(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||on;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](n,c,l)===!1)return}a=a.parent}if(i){ve(),Zt(i,null,10,[n,c,l]),ke();return}}Wl(n,t,s,r,o)}function Wl(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const Ln=[];let oe=-1;const ot=[];let Re=null,Ze=0;const ya=Promise.resolve();let Er=null;function ba(n){const e=Er||ya;return n?e.then(this?n.bind(this):n):e}function Yl(n){let e=oe+1,t=Ln.length;for(;e<t;){const r=e+t>>>1,s=Ln[r],i=qt(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function ai(n){if(!(n.flags&1)){const e=qt(n),t=Ln[Ln.length-1];!t||!(n.flags&2)&&e>=qt(t)?Ln.push(n):Ln.splice(Yl(e),0,n),n.flags|=1,wa()}}function wa(){Er||(Er=ya.then(ka))}function Jl(n){K(n)?ot.push(...n):Re&&n.id===-1?Re.splice(Ze+1,0,n):n.flags&1||(ot.push(n),n.flags|=1),wa()}function Fi(n,e,t=oe+1){for(;t<Ln.length;t++){const r=Ln[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;Ln.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function va(n){if(ot.length){const e=[...new Set(ot)].sort((t,r)=>qt(t)-qt(r));if(ot.length=0,Re){Re.push(...e);return}for(Re=e,Ze=0;Ze<Re.length;Ze++){const t=Re[Ze];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Re=null,Ze=0}}const qt=n=>n.id==null?n.flags&2?-1:1/0:n.id;function ka(n){try{for(oe=0;oe<Ln.length;oe++){const e=Ln[oe];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Zt(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;oe<Ln.length;oe++){const e=Ln[oe];e&&(e.flags&=-2)}oe=-1,Ln.length=0,va(),Er=null,(Ln.length||ot.length)&&ka()}}let xn=null,Sa=null;function Ar(n){const e=xn;return xn=n,Sa=n&&n.type.__scopeId||null,e}function Ps(n,e=xn,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&Tr(-1);const i=Ar(e);let o;try{o=n(...s)}finally{Ar(i),r._d&&Tr(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function De(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(ve(),pe(c,t,8,[n.el,a,n,e]),ke())}}function mr(n,e){if(On){let t=On.provides;const r=On.parent&&On.parent.provides;r===t&&(t=On.provides=Object.create(r)),t[n]=e}}function Qn(n,e,t=!1){const r=nc();if(r||ct){let s=ct?ct._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&q(e)?e.call(r&&r.proxy):e}}const Ql=Symbol.for("v-scx"),Xl=()=>Qn(Ql);function Mt(n,e,t){return Ea(n,e,t)}function Ea(n,e,t=on){const{immediate:r,deep:s,flush:i,once:o}=t,a=En({},t),c=e&&r||!e&&i!=="post";let l;if(Gt){if(i==="sync"){const d=Xl();l=d.__watcherHandles||(d.__watcherHandles=[])}else if(!c){const d=()=>{};return d.stop=ue,d.resume=ue,d.pause=ue,d}}const u=On;a.call=(d,b,g)=>pe(d,u,b,g);let p=!1;i==="post"?a.scheduler=d=>{jn(d,u&&u.suspense)}:i!=="sync"&&(p=!0,a.scheduler=(d,b)=>{b?d():ai(d)}),a.augmentJob=d=>{e&&(d.flags|=4),p&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=Gl(n,e,a);return Gt&&(l?l.push(f):c&&f()),f}function Zl(n,e,t){const r=this.proxy,s=fn(n)?n.includes(".")?Aa(r,n):()=>r[n]:n.bind(r,r);let i;q(e)?i=e:(i=e.handler,t=e);const o=er(this),a=Ea(s,i.bind(r),t);return o(),a}function Aa(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const nu=Symbol("_vte"),eu=n=>n.__isTeleport,tu=Symbol("_leaveCb");function ci(n,e){n.shapeFlag&6&&n.component?(n.transition=e,ci(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function nr(n,e){return q(n)?En({name:n.name},e,{setup:n}):n}function Na(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Ui(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Nr=new WeakMap;function Dt(n,e,t,r,s=!1){if(K(n)){n.forEach((g,y)=>Dt(g,e&&(K(e)?e[y]:e),t,r,s));return}if(at(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Dt(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?hi(r.component):r.el,o=s?null:i,{i:a,r:c}=n,l=e&&e.r,u=a.refs===on?a.refs={}:a.refs,p=a.setupState,f=Y(p),d=p===on?qo:g=>Ui(u,g)?!1:X(f,g),b=(g,y)=>!(y&&Ui(u,y));if(l!=null&&l!==c){if(Ki(e),fn(l))u[l]=null,d(l)&&(p[l]=null);else if(yn(l)){const g=e;b(l,g.k)&&(l.value=null),g.k&&(u[g.k]=null)}}if(q(c))Zt(c,a,12,[o,u]);else{const g=fn(c),y=yn(c);if(g||y){const v=()=>{if(n.f){const w=g?d(c)?p[c]:u[c]:b()||!n.k?c.value:u[n.k];if(s)K(w)&&Zs(w,i);else if(K(w))w.includes(i)||w.push(i);else if(g)u[c]=[i],d(c)&&(p[c]=u[c]);else{const O=[i];b(c,n.k)&&(c.value=O),n.k&&(u[n.k]=O)}}else g?(u[c]=o,d(c)&&(p[c]=o)):y&&(b(c,n.k)&&(c.value=o),n.k&&(u[n.k]=o))};if(o){const w=()=>{v(),Nr.delete(n)};w.id=-1,Nr.set(n,w),jn(w,t)}else Ki(n),v()}}}function Ki(n){const e=Nr.get(n);e&&(e.flags|=8,Nr.delete(n))}$r().requestIdleCallback;$r().cancelIdleCallback;const at=n=>!!n.type.__asyncLoader,Oa=n=>n.type.__isKeepAlive;function ru(n,e){Ta(n,"a",e)}function su(n,e){Ta(n,"da",e)}function Ta(n,e,t=On){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(zr(e,r,t),t){let s=t.parent;for(;s&&s.parent;)Oa(s.parent.vnode)&&iu(r,e,t,s),s=s.parent}}function iu(n,e,t,r){const s=zr(e,n,r,!0);Ra(()=>{Zs(r[e],s)},t)}function zr(n,e,t=On,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...o)=>{ve();const a=er(t),c=pe(e,t,n,o);return a(),ke(),c});return r?s.unshift(i):s.push(i),i}}const Ae=n=>(e,t=On)=>{(!Gt||n==="sp")&&zr(n,(...r)=>e(...r),t)},ou=Ae("bm"),li=Ae("m"),au=Ae("bu"),cu=Ae("u"),ui=Ae("bum"),Ra=Ae("um"),lu=Ae("sp"),uu=Ae("rtg"),pu=Ae("rtc");function fu(n,e=On){zr("ec",n,e)}const Ia="components";function du(n,e){return La(Ia,n,!0,e)||n}const Ca=Symbol.for("v-ndc");function em(n){return fn(n)?La(Ia,n,!1)||n:n||Ca}function La(n,e,t=!0,r=!1){const s=xn||On;if(s){const i=s.type;{const a=Ju(i,!1);if(a&&(a===e||a===Dn(e)||a===Br(Dn(e))))return i}const o=Vi(s[n]||i[n],e)||Vi(s.appContext[n],e);return!o&&r?i:o}}function Vi(n,e){return n&&(n[e]||n[Dn(e)]||n[Br(Dn(e))])}function qi(n,e,t,r){let s;const i=t&&t[r],o=K(n);if(o||fn(n)){const a=o&&qe(n);let c=!1,l=!1;a&&(c=!Kn(n),l=Se(n),n=Ur(n)),s=new Array(n.length);for(let u=0,p=n.length;u<p;u++)s[u]=e(c?l?pt(Xn(n[u])):Xn(n[u]):n[u],u,void 0,i&&i[u])}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,i&&i[a])}else if(Z(n))if(n[Symbol.iterator])s=Array.from(n,(a,c)=>e(a,c,void 0,i&&i[c]));else{const a=Object.keys(n);s=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];s[c]=e(n[u],u,c,i&&i[c])}}else s=[];return t&&(t[r]=s),s}function tm(n,e,t={},r,s){if(xn.ce||xn.parent&&at(xn.parent)&&xn.parent.ce){const l=Object.keys(t).length>0;return e!=="default"&&(t.name=e),Cn(),Ht(Fn,null,[_n("slot",t,r&&r())],l?-2:64)}let i=n[e];i&&i._c&&(i._d=!1),Cn();const o=i&&Pa(i(t)),a=t.key||o&&o.key,c=Ht(Fn,{key:(a&&!Vn(a)?a:`_${e}`)+(!o&&r?"_fb":"")},o||(r?r():[]),o&&n._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function Pa(n){return n.some(e=>zt(e)?!(e.type===Ee||e.type===Fn&&!Pa(e.children)):!0)?n:null}const xs=n=>n?ec(n)?hi(n):xs(n.parent):null,Bt=En(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>xs(n.parent),$root:n=>xs(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Da(n),$forceUpdate:n=>n.f||(n.f=()=>{ai(n.update)}),$nextTick:n=>n.n||(n.n=ba.bind(n.proxy)),$watch:n=>Zl.bind(n)}),ds=(n,e)=>n!==on&&!n.__isScriptSetup&&X(n,e),hu={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=n;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(ds(r,e))return o[e]=1,r[e];if(s!==on&&X(s,e))return o[e]=2,s[e];if(X(i,e))return o[e]=3,i[e];if(t!==on&&X(t,e))return o[e]=4,t[e];Ms&&(o[e]=0)}}const l=Bt[e];let u,p;if(l)return e==="$attrs"&&Nn(n.attrs,"get",""),l(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==on&&X(t,e))return o[e]=4,t[e];if(p=c.config.globalProperties,X(p,e))return p[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return ds(s,e)?(s[e]=t,!0):r!==on&&X(r,e)?(r[e]=t,!0):X(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,props:i,type:o}},a){let c;return!!(t[a]||n!==on&&a[0]!=="$"&&X(n,a)||ds(e,a)||X(i,a)||X(r,a)||X(Bt,a)||X(s.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:X(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function rm(){return xa().slots}function sm(){return xa().attrs}function xa(n){const e=nc();return e.setupContext||(e.setupContext=rc(e))}function Hi(n){return K(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}function im(n,e){const t={};for(const r in n)e.includes(r)||Object.defineProperty(t,r,{enumerable:!0,get:()=>n[r]});return t}let Ms=!0;function mu(n){const e=Da(n),t=n.proxy,r=n.ctx;Ms=!1,e.beforeCreate&&zi(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:p,mounted:f,beforeUpdate:d,updated:b,activated:g,deactivated:y,beforeDestroy:v,beforeUnmount:w,destroyed:O,unmounted:N,render:L,renderTracked:U,renderTriggered:M,errorCaptured:B,serverPrefetch:z,expose:tn,inheritAttrs:bn,components:mn,directives:cn,filters:Ne}=e;if(l&&gu(l,r,null),o)for(const nn in o){const J=o[nn];q(J)&&(r[nn]=J.bind(t))}if(s){const nn=s.call(t,t);Z(nn)&&(n.data=Kr(nn))}if(Ms=!0,i)for(const nn in i){const J=i[nn],de=q(J)?J.bind(t,t):q(J.get)?J.get.bind(t,t):ue,Oe=!q(J)&&q(J.set)?J.set.bind(t):ue,ee=Pn({get:de,set:Oe});Object.defineProperty(r,nn,{enumerable:!0,configurable:!0,get:()=>ee.value,set:$n=>ee.value=$n})}if(a)for(const nn in a)Ma(a[nn],r,t,nn);if(c){const nn=q(c)?c.call(t):c;Reflect.ownKeys(nn).forEach(J=>{mr(J,nn[J])})}u&&zi(u,n,"c");function wn(nn,J){K(J)?J.forEach(de=>nn(de.bind(t))):J&&nn(J.bind(t))}if(wn(ou,p),wn(li,f),wn(au,d),wn(cu,b),wn(ru,g),wn(su,y),wn(fu,B),wn(pu,U),wn(uu,M),wn(ui,w),wn(Ra,N),wn(lu,z),K(tn))if(tn.length){const nn=n.exposed||(n.exposed={});tn.forEach(J=>{Object.defineProperty(nn,J,{get:()=>t[J],set:de=>t[J]=de,enumerable:!0})})}else n.exposed||(n.exposed={});L&&n.render===ue&&(n.render=L),bn!=null&&(n.inheritAttrs=bn),mn&&(n.components=mn),cn&&(n.directives=cn),z&&Na(n)}function gu(n,e,t=ue){K(n)&&(n=Ds(n));for(const r in n){const s=n[r];let i;Z(s)?"default"in s?i=Qn(s.from||r,s.default,!0):i=Qn(s.from||r):i=Qn(s),yn(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function zi(n,e,t){pe(K(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ma(n,e,t,r){let s=r.includes(".")?Aa(t,r):()=>t[r];if(fn(n)){const i=e[n];q(i)&&Mt(s,i)}else if(q(n))Mt(s,n.bind(t));else if(Z(n))if(K(n))n.forEach(i=>Ma(i,e,t,r));else{const i=q(n.handler)?n.handler.bind(t):e[n.handler];q(i)&&Mt(s,i,n)}}function Da(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=n.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!t&&!r?c=e:(c={},s.length&&s.forEach(l=>Or(c,l,o,!0)),Or(c,e,o)),Z(e)&&i.set(e,c),c}function Or(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&Or(n,i,t,!0),s&&s.forEach(o=>Or(n,o,t,!0));for(const o in e)if(!(r&&o==="expose")){const a=_u[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const _u={data:Gi,props:Wi,emits:Wi,methods:Tt,computed:Tt,beforeCreate:Tn,created:Tn,beforeMount:Tn,mounted:Tn,beforeUpdate:Tn,updated:Tn,beforeDestroy:Tn,beforeUnmount:Tn,destroyed:Tn,unmounted:Tn,activated:Tn,deactivated:Tn,errorCaptured:Tn,serverPrefetch:Tn,components:Tt,directives:Tt,watch:bu,provide:Gi,inject:yu};function Gi(n,e){return e?n?function(){return En(q(n)?n.call(this,this):n,q(e)?e.call(this,this):e)}:e:n}function yu(n,e){return Tt(Ds(n),Ds(e))}function Ds(n){if(K(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Tn(n,e){return n?[...new Set([].concat(n,e))]:e}function Tt(n,e){return n?En(Object.create(null),n,e):e}function Wi(n,e){return n?K(n)&&K(e)?[...new Set([...n,...e])]:En(Object.create(null),Hi(n),Hi(e??{})):e}function bu(n,e){if(!n)return e;if(!e)return n;const t=En(Object.create(null),n);for(const r in e)t[r]=Tn(n[r],e[r]);return t}function Ba(){return{app:null,config:{isNativeTag:qo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wu=0;function vu(n,e){return function(r,s=null){q(r)||(r=En({},r)),s!=null&&!Z(s)&&(s=null);const i=Ba(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:wu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Xu,get config(){return i.config},set config(u){},use(u,...p){return o.has(u)||(u&&q(u.install)?(o.add(u),u.install(l,...p)):q(u)&&(o.add(u),u(l,...p))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,p){return p?(i.components[u]=p,l):i.components[u]},directive(u,p){return p?(i.directives[u]=p,l):i.directives[u]},mount(u,p,f){if(!c){const d=l._ceVNode||_n(r,s);return d.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),n(d,u,f),c=!0,l._container=u,u.__vue_app__=l,hi(d.component)}},onUnmount(u){a.push(u)},unmount(){c&&(pe(a,l._instance,16),n(null,l._container),delete l._container.__vue_app__)},provide(u,p){return i.provides[u]=p,l},runWithContext(u){const p=ct;ct=l;try{return u()}finally{ct=p}}};return l}}let ct=null;const ku=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Dn(e)}Modifiers`]||n[`${ze(e)}Modifiers`];function Su(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||on;let s=t;const i=e.startsWith("update:"),o=i&&ku(r,e.slice(7));o&&(o.trim&&(s=t.map(u=>fn(u)?u.trim():u)),o.number&&(s=t.map(ll)));let a,c=r[a=as(e)]||r[a=as(Dn(e))];!c&&i&&(c=r[a=as(ze(e))]),c&&pe(c,n,6,s);const l=r[a+"Once"];if(l){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,pe(l,n,6,s)}}const Eu=new WeakMap;function $a(n,e,t=!1){const r=t?Eu:e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let o={},a=!1;if(!q(n)){const c=l=>{const u=$a(l,e,!0);u&&(a=!0,En(o,u))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!a?(Z(n)&&r.set(n,null),null):(K(i)?i.forEach(c=>o[c]=null):En(o,i),Z(n)&&r.set(n,o),o)}function Gr(n,e){return!n||!Pr(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(n,e[0].toLowerCase()+e.slice(1))||X(n,ze(e))||X(n,e))}function Yi(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:p,data:f,setupState:d,ctx:b,inheritAttrs:g}=n,y=Ar(n);let v,w;try{if(t.shapeFlag&4){const N=s||r,L=N;v=le(l.call(L,N,u,p,d,f,b)),w=a}else{const N=e;v=le(N.length>1?N(p,{attrs:a,slots:o,emit:c}):N(p,null)),w=e.props?a:Au(a)}}catch(N){$t.length=0,Hr(N,n,1),v=_n(Ee)}let O=v;if(w&&g!==!1){const N=Object.keys(w),{shapeFlag:L}=O;N.length&&L&7&&(i&&N.some(xr)&&(w=Nu(w,i)),O=dt(O,w,!1,!0))}return t.dirs&&(O=dt(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(t.dirs):t.dirs),t.transition&&ci(O,t.transition),v=O,Ar(y),v}const Au=n=>{let e;for(const t in n)(t==="class"||t==="style"||Pr(t))&&((e||(e={}))[t]=n[t]);return e},Nu=(n,e)=>{const t={};for(const r in n)(!xr(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function Ou(n,e,t){const{props:r,children:s,component:i}=n,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?Ji(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let p=0;p<u.length;p++){const f=u[p];if(ja(o,r,f)&&!Gr(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ji(r,o,l):!0:!!o;return!1}function Ji(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(ja(e,n,i)&&!Gr(t,i))return!0}return!1}function ja(n,e,t){const r=n[t],s=e[t];return t==="style"&&Z(r)&&Z(s)?!ei(r,s):r!==s}function Tu({vnode:n,parent:e,suspense:t},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=r,n=s),s===n)(n=e.vnode).el=r,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=r)}const Fa={},Ua=()=>Object.create(Fa),Ka=n=>Object.getPrototypeOf(n)===Fa;function Ru(n,e,t,r=!1){const s={},i=Ua();n.propsDefaults=Object.create(null),Va(n,e,s,i);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=r?s:ha(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function Iu(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=n,a=Y(s),[c]=n.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let p=0;p<u.length;p++){let f=u[p];if(Gr(n.emitsOptions,f))continue;const d=e[f];if(c)if(X(i,f))d!==i[f]&&(i[f]=d,l=!0);else{const b=Dn(f);s[b]=Bs(c,a,b,d,n,!1)}else d!==i[f]&&(i[f]=d,l=!0)}}}else{Va(n,e,s,i)&&(l=!0);let u;for(const p in a)(!e||!X(e,p)&&((u=ze(p))===p||!X(e,u)))&&(c?t&&(t[p]!==void 0||t[u]!==void 0)&&(s[p]=Bs(c,a,p,void 0,n,!0)):delete s[p]);if(i!==a)for(const p in i)(!e||!X(e,p))&&(delete i[p],l=!0)}l&&ye(n.attrs,"set","")}function Va(n,e,t,r){const[s,i]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ct(c))continue;const l=e[c];let u;s&&X(s,u=Dn(c))?!i||!i.includes(u)?t[u]=l:(a||(a={}))[u]=l:Gr(n.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=Y(t),l=a||on;for(let u=0;u<i.length;u++){const p=i[u];t[p]=Bs(s,c,p,l[p],n,!X(l,p))}}return o}function Bs(n,e,t,r,s,i){const o=n[t];if(o!=null){const a=X(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&q(c)){const{propsDefaults:l}=s;if(t in l)r=l[t];else{const u=er(s);r=l[t]=c.call(null,e),u()}}else r=c;s.ce&&s.ce._setProp(t,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===ze(t))&&(r=!0))}return r}const Cu=new WeakMap;function qa(n,e,t=!1){const r=t?Cu:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,o={},a=[];let c=!1;if(!q(n)){const u=p=>{c=!0;const[f,d]=qa(p,e,!0);En(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!i&&!c)return Z(n)&&r.set(n,st),st;if(K(i))for(let u=0;u<i.length;u++){const p=Dn(i[u]);Qi(p)&&(o[p]=on)}else if(i)for(const u in i){const p=Dn(u);if(Qi(p)){const f=i[u],d=o[p]=K(f)||q(f)?{type:f}:En({},f),b=d.type;let g=!1,y=!0;if(K(b))for(let v=0;v<b.length;++v){const w=b[v],O=q(w)&&w.name;if(O==="Boolean"){g=!0;break}else O==="String"&&(y=!1)}else g=q(b)&&b.name==="Boolean";d[0]=g,d[1]=y,(g||X(d,"default"))&&a.push(p)}}const l=[o,a];return Z(n)&&r.set(n,l),l}function Qi(n){return n[0]!=="$"&&!Ct(n)}const pi=n=>n==="_"||n==="_ctx"||n==="$stable",fi=n=>K(n)?n.map(le):[le(n)],Lu=(n,e,t)=>{if(e._n)return e;const r=Ps((...s)=>fi(e(...s)),t);return r._c=!1,r},Ha=(n,e,t)=>{const r=n._ctx;for(const s in n){if(pi(s))continue;const i=n[s];if(q(i))e[s]=Lu(s,i,r);else if(i!=null){const o=fi(i);e[s]=()=>o}}},za=(n,e)=>{const t=fi(e);n.slots.default=()=>t},Ga=(n,e,t)=>{for(const r in e)(t||!pi(r))&&(n[r]=e[r])},Pu=(n,e,t)=>{const r=n.slots=Ua();if(n.vnode.shapeFlag&32){const s=e._;s?(Ga(r,e,t),t&&Yo(r,"_",s,!0)):Ha(e,r)}else e&&za(n,e)},xu=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,o=on;if(r.shapeFlag&32){const a=e._;a?t&&a===1?i=!1:Ga(s,e,t):(i=!e.$stable,Ha(e,s)),o=e}else e&&(za(n,e),o={default:1});if(i)for(const a in s)!pi(a)&&o[a]==null&&delete s[a]},jn=ju;function Mu(n){return Du(n)}function Du(n,e){const t=$r();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:p,nextSibling:f,setScopeId:d=ue,insertStaticContent:b}=n,g=(h,m,_,k=null,A=null,S=null,C=void 0,I=null,R=!!m.dynamicChildren)=>{if(h===m)return;h&&!At(h,m)&&(k=E(h),$n(h,A,S,!0),h=null),m.patchFlag===-2&&(R=!1,m.dynamicChildren=null);const{type:T,ref:F,shapeFlag:x}=m;switch(T){case Wr:y(h,m,_,k);break;case Ee:v(h,m,_,k);break;case ms:h==null&&w(m,_,k,C);break;case Fn:mn(h,m,_,k,A,S,C,I,R);break;default:x&1?L(h,m,_,k,A,S,C,I,R):x&6?cn(h,m,_,k,A,S,C,I,R):(x&64||x&128)&&T.process(h,m,_,k,A,S,C,I,R,$)}F!=null&&A?Dt(F,h&&h.ref,S,m||h,!m):F==null&&h&&h.ref!=null&&Dt(h.ref,null,S,h,!0)},y=(h,m,_,k)=>{if(h==null)r(m.el=a(m.children),_,k);else{const A=m.el=h.el;m.children!==h.children&&l(A,m.children)}},v=(h,m,_,k)=>{h==null?r(m.el=c(m.children||""),_,k):m.el=h.el},w=(h,m,_,k)=>{[h.el,h.anchor]=b(h.children,m,_,k,h.el,h.anchor)},O=({el:h,anchor:m},_,k)=>{let A;for(;h&&h!==m;)A=f(h),r(h,_,k),h=A;r(m,_,k)},N=({el:h,anchor:m})=>{let _;for(;h&&h!==m;)_=f(h),s(h),h=_;s(m)},L=(h,m,_,k,A,S,C,I,R)=>{if(m.type==="svg"?C="svg":m.type==="math"&&(C="mathml"),h==null)U(m,_,k,A,S,C,I,R);else{const T=h.el&&h.el._isVueCE?h.el:null;try{T&&T._beginPatch(),z(h,m,A,S,C,I,R)}finally{T&&T._endPatch()}}},U=(h,m,_,k,A,S,C,I)=>{let R,T;const{props:F,shapeFlag:x,transition:j,dirs:V}=h;if(R=h.el=o(h.type,S,F&&F.is,F),x&8?u(R,h.children):x&16&&B(h.children,R,null,k,A,hs(h,S),C,I),V&&De(h,null,k,"created"),M(R,h,h.scopeId,C,k),F){for(const en in F)en!=="value"&&!Ct(en)&&i(R,en,null,F[en],S,k);"value"in F&&i(R,"value",null,F.value,S),(T=F.onVnodeBeforeMount)&&ie(T,k,h)}V&&De(h,null,k,"beforeMount");const W=Bu(A,j);W&&j.beforeEnter(R),r(R,m,_),((T=F&&F.onVnodeMounted)||W||V)&&jn(()=>{try{T&&ie(T,k,h),W&&j.enter(R),V&&De(h,null,k,"mounted")}finally{}},A)},M=(h,m,_,k,A)=>{if(_&&d(h,_),k)for(let S=0;S<k.length;S++)d(h,k[S]);if(A){let S=A.subTree;if(m===S||Qa(S.type)&&(S.ssContent===m||S.ssFallback===m)){const C=A.vnode;M(h,C,C.scopeId,C.slotScopeIds,A.parent)}}},B=(h,m,_,k,A,S,C,I,R=0)=>{for(let T=R;T<h.length;T++){const F=h[T]=I?_e(h[T]):le(h[T]);g(null,F,m,_,k,A,S,C,I)}},z=(h,m,_,k,A,S,C)=>{const I=m.el=h.el;let{patchFlag:R,dynamicChildren:T,dirs:F}=m;R|=h.patchFlag&16;const x=h.props||on,j=m.props||on;let V;if(_&&Be(_,!1),(V=j.onVnodeBeforeUpdate)&&ie(V,_,m,h),F&&De(m,h,_,"beforeUpdate"),_&&Be(_,!0),(x.innerHTML&&j.innerHTML==null||x.textContent&&j.textContent==null)&&u(I,""),T?tn(h.dynamicChildren,T,I,_,k,hs(m,A),S):C||J(h,m,I,null,_,k,hs(m,A),S,!1),R>0){if(R&16)bn(I,x,j,_,A);else if(R&2&&x.class!==j.class&&i(I,"class",null,j.class,A),R&4&&i(I,"style",x.style,j.style,A),R&8){const W=m.dynamicProps;for(let en=0;en<W.length;en++){const rn=W[en],hn=x[rn],kn=j[rn];(kn!==hn||rn==="value")&&i(I,rn,hn,kn,A,_)}}R&1&&h.children!==m.children&&u(I,m.children)}else!C&&T==null&&bn(I,x,j,_,A);((V=j.onVnodeUpdated)||F)&&jn(()=>{V&&ie(V,_,m,h),F&&De(m,h,_,"updated")},k)},tn=(h,m,_,k,A,S,C)=>{for(let I=0;I<m.length;I++){const R=h[I],T=m[I],F=R.el&&(R.type===Fn||!At(R,T)||R.shapeFlag&198)?p(R.el):_;g(R,T,F,null,k,A,S,C,!0)}},bn=(h,m,_,k,A)=>{if(m!==_){if(m!==on)for(const S in m)!Ct(S)&&!(S in _)&&i(h,S,m[S],null,A,k);for(const S in _){if(Ct(S))continue;const C=_[S],I=m[S];C!==I&&S!=="value"&&i(h,S,I,C,A,k)}"value"in _&&i(h,"value",m.value,_.value,A)}},mn=(h,m,_,k,A,S,C,I,R)=>{const T=m.el=h?h.el:a(""),F=m.anchor=h?h.anchor:a("");let{patchFlag:x,dynamicChildren:j,slotScopeIds:V}=m;V&&(I=I?I.concat(V):V),h==null?(r(T,_,k),r(F,_,k),B(m.children||[],_,F,A,S,C,I,R)):x>0&&x&64&&j&&h.dynamicChildren&&h.dynamicChildren.length===j.length?(tn(h.dynamicChildren,j,_,A,S,C,I),(m.key!=null||A&&m===A.subTree)&&Wa(h,m,!0)):J(h,m,_,F,A,S,C,I,R)},cn=(h,m,_,k,A,S,C,I,R)=>{m.slotScopeIds=I,h==null?m.shapeFlag&512?A.ctx.activate(m,_,k,C,R):Ne(m,_,k,A,S,C,R):Ge(h,m,R)},Ne=(h,m,_,k,A,S,C)=>{const I=h.component=zu(h,k,A);if(Oa(h)&&(I.ctx.renderer=$),Gu(I,!1,C),I.asyncDep){if(A&&A.registerDep(I,wn,C),!h.el){const R=I.subTree=_n(Ee);v(null,R,m,_),h.placeholder=R.el}}else wn(I,h,m,_,A,S,C)},Ge=(h,m,_)=>{const k=m.component=h.component;if(Ou(h,m,_))if(k.asyncDep&&!k.asyncResolved){nn(k,m,_);return}else k.next=m,k.update();else m.el=h.el,k.vnode=m},wn=(h,m,_,k,A,S,C)=>{const I=()=>{if(h.isMounted){let{next:x,bu:j,u:V,parent:W,vnode:en}=h;{const re=Ya(h);if(re){x&&(x.el=en.el,nn(h,x,C)),re.asyncDep.then(()=>{jn(()=>{h.isUnmounted||T()},A)});return}}let rn=x,hn;Be(h,!1),x?(x.el=en.el,nn(h,x,C)):x=en,j&&cs(j),(hn=x.props&&x.props.onVnodeBeforeUpdate)&&ie(hn,W,x,en),Be(h,!0);const kn=Yi(h),te=h.subTree;h.subTree=kn,g(te,kn,p(te.el),E(te),h,A,S),x.el=kn.el,rn===null&&Tu(h,kn.el),V&&jn(V,A),(hn=x.props&&x.props.onVnodeUpdated)&&jn(()=>ie(hn,W,x,en),A)}else{let x;const{el:j,props:V}=m,{bm:W,m:en,parent:rn,root:hn,type:kn}=h,te=at(m);Be(h,!1),W&&cs(W),!te&&(x=V&&V.onVnodeBeforeMount)&&ie(x,rn,m),Be(h,!0);{hn.ce&&hn.ce._hasShadowRoot()&&hn.ce._injectChildStyle(kn,h.parent?h.parent.type:void 0);const re=h.subTree=Yi(h);g(null,re,_,k,h,A,S),m.el=re.el}if(en&&jn(en,A),!te&&(x=V&&V.onVnodeMounted)){const re=m;jn(()=>ie(x,rn,re),A)}(m.shapeFlag&256||rn&&at(rn.vnode)&&rn.vnode.shapeFlag&256)&&h.a&&jn(h.a,A),h.isMounted=!0,m=_=k=null}};h.scope.on();const R=h.effect=new na(I);h.scope.off();const T=h.update=R.run.bind(R),F=h.job=R.runIfDirty.bind(R);F.i=h,F.id=h.uid,R.scheduler=()=>ai(F),Be(h,!0),T()},nn=(h,m,_)=>{m.component=h;const k=h.vnode.props;h.vnode=m,h.next=null,Iu(h,m.props,k,_),xu(h,m.children,_),ve(),Fi(h),ke()},J=(h,m,_,k,A,S,C,I,R=!1)=>{const T=h&&h.children,F=h?h.shapeFlag:0,x=m.children,{patchFlag:j,shapeFlag:V}=m;if(j>0){if(j&128){Oe(T,x,_,k,A,S,C,I,R);return}else if(j&256){de(T,x,_,k,A,S,C,I,R);return}}V&8?(F&16&&qn(T,A,S),x!==T&&u(_,x)):F&16?V&16?Oe(T,x,_,k,A,S,C,I,R):qn(T,A,S,!0):(F&8&&u(_,""),V&16&&B(x,_,k,A,S,C,I,R))},de=(h,m,_,k,A,S,C,I,R)=>{h=h||st,m=m||st;const T=h.length,F=m.length,x=Math.min(T,F);let j;for(j=0;j<x;j++){const V=m[j]=R?_e(m[j]):le(m[j]);g(h[j],V,_,null,A,S,C,I,R)}T>F?qn(h,A,S,!0,!1,x):B(m,_,k,A,S,C,I,R,x)},Oe=(h,m,_,k,A,S,C,I,R)=>{let T=0;const F=m.length;let x=h.length-1,j=F-1;for(;T<=x&&T<=j;){const V=h[T],W=m[T]=R?_e(m[T]):le(m[T]);if(At(V,W))g(V,W,_,null,A,S,C,I,R);else break;T++}for(;T<=x&&T<=j;){const V=h[x],W=m[j]=R?_e(m[j]):le(m[j]);if(At(V,W))g(V,W,_,null,A,S,C,I,R);else break;x--,j--}if(T>x){if(T<=j){const V=j+1,W=V<F?m[V].el:k;for(;T<=j;)g(null,m[T]=R?_e(m[T]):le(m[T]),_,W,A,S,C,I,R),T++}}else if(T>j)for(;T<=x;)$n(h[T],A,S,!0),T++;else{const V=T,W=T,en=new Map;for(T=W;T<=j;T++){const Un=m[T]=R?_e(m[T]):le(m[T]);Un.key!=null&&en.set(Un.key,T)}let rn,hn=0;const kn=j-W+1;let te=!1,re=0;const St=new Array(kn);for(T=0;T<kn;T++)St[T]=0;for(T=V;T<=x;T++){const Un=h[T];if(hn>=kn){$n(Un,A,S,!0);continue}let se;if(Un.key!=null)se=en.get(Un.key);else for(rn=W;rn<=j;rn++)if(St[rn-W]===0&&At(Un,m[rn])){se=rn;break}se===void 0?$n(Un,A,S,!0):(St[se-W]=T+1,se>=re?re=se:te=!0,g(Un,m[se],_,null,A,S,C,I,R),hn++)}const Pi=te?$u(St):st;for(rn=Pi.length-1,T=kn-1;T>=0;T--){const Un=W+T,se=m[Un],xi=m[Un+1],Mi=Un+1<F?xi.el||Ja(xi):k;St[T]===0?g(null,se,_,Mi,A,S,C,I,R):te&&(rn<0||T!==Pi[rn]?ee(se,_,Mi,2):rn--)}}},ee=(h,m,_,k,A=null)=>{const{el:S,type:C,transition:I,children:R,shapeFlag:T}=h;if(T&6){ee(h.component.subTree,m,_,k);return}if(T&128){h.suspense.move(m,_,k);return}if(T&64){C.move(h,m,_,$);return}if(C===Fn){r(S,m,_);for(let x=0;x<R.length;x++)ee(R[x],m,_,k);r(h.anchor,m,_);return}if(C===ms){O(h,m,_);return}if(k!==2&&T&1&&I)if(k===0)I.beforeEnter(S),r(S,m,_),jn(()=>I.enter(S),A);else{const{leave:x,delayLeave:j,afterLeave:V}=I,W=()=>{h.ctx.isUnmounted?s(S):r(S,m,_)},en=()=>{S._isLeaving&&S[tu](!0),x(S,()=>{W(),V&&V()})};j?j(S,W,en):en()}else r(S,m,_)},$n=(h,m,_,k=!1,A=!1)=>{const{type:S,props:C,ref:I,children:R,dynamicChildren:T,shapeFlag:F,patchFlag:x,dirs:j,cacheIndex:V,memo:W}=h;if(x===-2&&(A=!1),I!=null&&(ve(),Dt(I,null,_,h,!0),ke()),V!=null&&(m.renderCache[V]=void 0),F&256){m.ctx.deactivate(h);return}const en=F&1&&j,rn=!at(h);let hn;if(rn&&(hn=C&&C.onVnodeBeforeUnmount)&&ie(hn,m,h),F&6)Me(h.component,_,k);else{if(F&128){h.suspense.unmount(_,k);return}en&&De(h,null,m,"beforeUnmount"),F&64?h.type.remove(h,m,_,$,k):T&&!T.hasOnce&&(S!==Fn||x>0&&x&64)?qn(T,m,_,!1,!0):(S===Fn&&x&384||!A&&F&16)&&qn(R,m,_),k&&We(h)}const kn=W!=null&&V==null;(rn&&(hn=C&&C.onVnodeUnmounted)||en||kn)&&jn(()=>{hn&&ie(hn,m,h),en&&De(h,null,m,"unmounted"),kn&&(h.el=null)},_)},We=h=>{const{type:m,el:_,anchor:k,transition:A}=h;if(m===Fn){Ye(_,k);return}if(m===ms){N(h);return}const S=()=>{s(_),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(h.shapeFlag&1&&A&&!A.persisted){const{leave:C,delayLeave:I}=A,R=()=>C(_,S);I?I(h.el,S,R):R()}else S()},Ye=(h,m)=>{let _;for(;h!==m;)_=f(h),s(h),h=_;s(m)},Me=(h,m,_)=>{const{bum:k,scope:A,job:S,subTree:C,um:I,m:R,a:T}=h;Xi(R),Xi(T),k&&cs(k),A.stop(),S&&(S.flags|=8,$n(C,h,m,_)),I&&jn(I,m),jn(()=>{h.isUnmounted=!0},m)},qn=(h,m,_,k=!1,A=!1,S=0)=>{for(let C=S;C<h.length;C++)$n(h[C],m,_,k,A)},E=h=>{if(h.shapeFlag&6)return E(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const m=f(h.anchor||h.el),_=m&&m[nu];return _?f(_):m};let D=!1;const P=(h,m,_)=>{let k;h==null?m._vnode&&($n(m._vnode,null,null,!0),k=m._vnode.component):g(m._vnode||null,h,m,null,null,null,_),m._vnode=h,D||(D=!0,Fi(k),va(),D=!1)},$={p:g,um:$n,m:ee,r:We,mt:Ne,mc:B,pc:J,pbc:tn,n:E,o:n};return{render:P,hydrate:void 0,createApp:vu(P)}}function hs({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Be({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Bu(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Wa(n,e,t=!1){const r=n.children,s=e.children;if(K(r)&&K(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=_e(s[i]),a.el=o.el),!t&&a.patchFlag!==-2&&Wa(o,a)),a.type===Wr&&(a.patchFlag===-1&&(a=s[i]=_e(a)),a.el=o.el),a.type===Ee&&!a.el&&(a.el=o.el)}}function $u(n){const e=n.slice(),t=[0];let r,s,i,o,a;const c=n.length;for(r=0;r<c;r++){const l=n[r];if(l!==0){if(s=t[t.length-1],n[s]<l){e[r]=s,t.push(r);continue}for(i=0,o=t.length-1;i<o;)a=i+o>>1,n[t[a]]<l?i=a+1:o=a;l<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,o=t[i-1];i-- >0;)t[i]=o,o=e[o];return t}function Ya(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ya(e)}function Xi(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Ja(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Ja(e.subTree):null}const Qa=n=>n.__isSuspense;function ju(n,e){e&&e.pendingBranch?K(n)?e.effects.push(...n):e.effects.push(n):Jl(n)}const Fn=Symbol.for("v-fgt"),Wr=Symbol.for("v-txt"),Ee=Symbol.for("v-cmt"),ms=Symbol.for("v-stc"),$t=[];let Mn=null;function Cn(n=!1){$t.push(Mn=n?null:[])}function Fu(){$t.pop(),Mn=$t[$t.length-1]||null}let ft=1;function Tr(n,e=!1){ft+=n,n<0&&Mn&&e&&(Mn.hasOnce=!0)}function Xa(n){return n.dynamicChildren=ft>0?Mn||st:null,Fu(),ft>0&&Mn&&Mn.push(n),n}function ae(n,e,t,r,s,i){return Xa(Sn(n,e,t,r,s,i,!0))}function Ht(n,e,t,r,s){return Xa(_n(n,e,t,r,s,!0))}function zt(n){return n?n.__v_isVNode===!0:!1}function At(n,e){return n.type===e.type&&n.key===e.key}const Za=({key:n})=>n??null,gr=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?fn(n)||yn(n)||q(n)?{i:xn,r:n,k:e,f:!!t}:n:null);function Sn(n,e=null,t=null,r=0,s=null,i=n===Fn?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Za(e),ref:e&&gr(e),scopeId:Sa,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:xn};return a?(di(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=fn(t)?8:16),ft>0&&!o&&Mn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Mn.push(c),c}const _n=Uu;function Uu(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===Ca)&&(n=Ee),zt(n)){const a=dt(n,e,!0);return t&&di(a,t),ft>0&&!i&&Mn&&(a.shapeFlag&6?Mn[Mn.indexOf(n)]=a:Mn.push(a)),a.patchFlag=-2,a}if(Qu(n)&&(n=n.__vccOpts),e){e=Ku(e);let{class:a,style:c}=e;a&&!fn(a)&&(e.class=jr(a)),Z(c)&&(Vr(c)&&!K(c)&&(c=En({},c)),e.style=ni(c))}const o=fn(n)?1:Qa(n)?128:eu(n)?64:Z(n)?4:q(n)?2:0;return Sn(n,e,t,r,s,o,i,!0)}function Ku(n){return n?Vr(n)||Ka(n)?En({},n):n:null}function dt(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=n,l=e?Vu(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:l,key:l&&Za(l),ref:e&&e.ref?t&&i?K(i)?i.concat(gr(e)):[i,gr(e)]:gr(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Fn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&dt(n.ssContent),ssFallback:n.ssFallback&&dt(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&r&&ci(u,c.clone(u)),u}function _r(n=" ",e=0){return _n(Wr,null,n,e)}function Zi(n="",e=!1){return e?(Cn(),Ht(Ee,null,n)):_n(Ee,null,n)}function le(n){return n==null||typeof n=="boolean"?_n(Ee):K(n)?_n(Fn,null,n.slice()):zt(n)?_e(n):_n(Wr,null,String(n))}function _e(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:dt(n)}function di(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(K(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),di(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Ka(e)?e._ctx=xn:s===3&&xn&&(xn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else q(e)?(e={default:e,_ctx:xn},t=32):(e=String(e),r&64?(t=16,e=[_r(e)]):t=8);n.children=e,n.shapeFlag|=t}function Vu(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=jr([e.class,r.class]));else if(s==="style")e.style=ni([e.style,r.style]);else if(Pr(s)){const i=e[s],o=r[s];o&&i!==o&&!(K(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!xr(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function ie(n,e,t,r=null){pe(n,e,7,[t,r])}const qu=Ba();let Hu=0;function zu(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||qu,i={uid:Hu++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Zo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qa(r,s),emitsOptions:$a(r,s),emit:null,emitted:null,propsDefaults:on,inheritAttrs:r.inheritAttrs,ctx:on,data:on,props:on,attrs:on,slots:on,refs:on,setupState:on,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Su.bind(null,i),n.ce&&n.ce(i),i}let On=null;const nc=()=>On||xn;let Rr,$s;{const n=$r(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Rr=e("__VUE_INSTANCE_SETTERS__",t=>On=t),$s=e("__VUE_SSR_SETTERS__",t=>Gt=t)}const er=n=>{const e=On;return Rr(n),n.scope.on(),()=>{n.scope.off(),Rr(e)}},no=()=>{On&&On.scope.off(),Rr(null)};function ec(n){return n.vnode.shapeFlag&4}let Gt=!1;function Gu(n,e=!1,t=!1){e&&$s(e);const{props:r,children:s}=n.vnode,i=ec(n);Ru(n,r,i,e),Pu(n,s,t||e);const o=i?Wu(n,e):void 0;return e&&$s(!1),o}function Wu(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,hu);const{setup:r}=t;if(r){ve();const s=n.setupContext=r.length>1?rc(n):null,i=er(n),o=Zt(r,n,0,[n.props,s]),a=zo(o);if(ke(),i(),(a||n.sp)&&!at(n)&&Na(n),a){if(o.then(no,no),e)return o.then(c=>{eo(n,c)}).catch(c=>{Hr(c,n,0)});n.asyncDep=o}else eo(n,o)}else tc(n)}function eo(n,e,t){q(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Z(e)&&(n.setupState=ga(e)),tc(n)}function tc(n,e,t){const r=n.type;n.render||(n.render=r.render||ue);{const s=er(n);ve();try{mu(n)}finally{ke(),s()}}}const Yu={get(n,e){return Nn(n,"get",""),n[e]}};function rc(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Yu),slots:n.slots,emit:n.emit,expose:e}}function hi(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(ga(Bl(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Bt)return Bt[t](n)},has(e,t){return t in e||t in Bt}})):n.proxy}function Ju(n,e=!0){return q(n)?n.displayName||n.name:n.name||e&&n.__name}function Qu(n){return q(n)&&"__vccOpts"in n}const Pn=(n,e)=>Hl(n,e,Gt);function Wt(n,e,t){try{Tr(-1);const r=arguments.length;return r===2?Z(e)&&!K(e)?zt(e)?_n(n,null,[e]):_n(n,e):_n(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&zt(t)&&(t=[t]),_n(n,e,t))}finally{Tr(1)}}function om(n,e){const t=n.memo;if(t.length!=e.length)return!1;for(let r=0;r<t.length;r++)if(Yn(t[r],e[r]))return!1;return ft>0&&Mn&&Mn.push(n),!0}const Xu="3.5.31";/**
* @vue/runtime-dom v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let js;const to=typeof window<"u"&&window.trustedTypes;if(to)try{js=to.createPolicy("vue",{createHTML:n=>n})}catch{}const sc=js?n=>js.createHTML(n):n=>n,Zu="http://www.w3.org/2000/svg",np="http://www.w3.org/1998/Math/MathML",ge=typeof document<"u"?document:null,ro=ge&&ge.createElement("template"),ep={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?ge.createElementNS(Zu,n):e==="mathml"?ge.createElementNS(np,n):t?ge.createElement(n,{is:t}):ge.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>ge.createTextNode(n),createComment:n=>ge.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ge.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const o=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{ro.innerHTML=sc(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const a=ro.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},tp=Symbol("_vtc");function rp(n,e,t){const r=n[tp];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const so=Symbol("_vod"),sp=Symbol("_vsh"),ip=Symbol(""),op=/(?:^|;)\s*display\s*:/;function ap(n,e,t){const r=n.style,s=fn(t);let i=!1;if(t&&!s){if(e)if(fn(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&yr(r,a,"")}else for(const o in e)t[o]==null&&yr(r,o,"");for(const o in t)o==="display"&&(i=!0),yr(r,o,t[o])}else if(s){if(e!==t){const o=r[ip];o&&(t+=";"+o),r.cssText=t,i=op.test(t)}}else e&&n.removeAttribute("style");so in n&&(n[so]=i?r.display:"",n[sp]&&(r.display="none"))}const io=/\s*!important$/;function yr(n,e,t){if(K(t))t.forEach(r=>yr(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=cp(n,e);io.test(t)?n.setProperty(ze(r),t.replace(io,""),"important"):n[r]=t}}const oo=["Webkit","Moz","ms"],gs={};function cp(n,e){const t=gs[e];if(t)return t;let r=Dn(e);if(r!=="filter"&&r in n)return gs[e]=r;r=Br(r);for(let s=0;s<oo.length;s++){const i=oo[s]+r;if(i in n)return gs[e]=i}return e}const ao="http://www.w3.org/1999/xlink";function co(n,e,t,r,s,i=ml(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(ao,e.slice(6,e.length)):n.setAttributeNS(ao,e,t):t==null||i&&!Jo(t)?n.removeAttribute(e):n.setAttribute(e,i?"":Vn(t)?String(t):t)}function lo(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?sc(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(a!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Jo(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function lp(n,e,t,r){n.addEventListener(e,t,r)}function up(n,e,t,r){n.removeEventListener(e,t,r)}const uo=Symbol("_vei");function pp(n,e,t,r,s=null){const i=n[uo]||(n[uo]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=fp(e);if(r){const l=i[e]=mp(r,s);lp(n,a,l,c)}else o&&(up(n,a,o,c),i[e]=void 0)}}const po=/(?:Once|Passive|Capture)$/;function fp(n){let e;if(po.test(n)){e={};let r;for(;r=n.match(po);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ze(n.slice(2)),e]}let _s=0;const dp=Promise.resolve(),hp=()=>_s||(dp.then(()=>_s=0),_s=Date.now());function mp(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;pe(gp(r,t.value),e,5,[r])};return t.value=n,t.attached=hp(),t}function gp(n,e){if(K(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const fo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,_p=(n,e,t,r,s,i)=>{const o=s==="svg";e==="class"?rp(n,r,o):e==="style"?ap(n,t,r):Pr(e)?xr(e)||pp(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):yp(n,e,r,o))?(lo(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&co(n,e,r,o,i,e!=="value")):n._isVueCE&&(bp(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!fn(r)))?lo(n,Dn(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),co(n,e,r,o))};function yp(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&fo(e)&&q(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return fo(e)&&fn(t)?!1:e in n}function bp(n,e){const t=n._def.props;if(!t)return!1;const r=Dn(e);return Array.isArray(t)?t.some(s=>Dn(s)===r):Object.keys(t).some(s=>Dn(s)===r)}const wp=En({patchProp:_p},ep);let ho;function vp(){return ho||(ho=Mu(wp))}const kp=((...n)=>{const e=vp().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=Ep(r);if(!s)return;const i=e._component;!q(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Sp(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function Sp(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Ep(n){return fn(n)?document.querySelector(n):n}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const nt=typeof document<"u";function ic(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Ap(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&ic(n.default)}const Q=Object.assign;function ys(n,e){const t={};for(const r in e){const s=e[r];t[r]=Zn(s)?s.map(n):n(s)}return t}const jt=()=>{},Zn=Array.isArray;function mo(n,e){const t={};for(const r in n)t[r]=r in e?e[r]:n[r];return t}const oc=/#/g,Np=/&/g,Op=/\//g,Tp=/=/g,Rp=/\?/g,ac=/\+/g,Ip=/%5B/g,Cp=/%5D/g,cc=/%5E/g,Lp=/%60/g,lc=/%7B/g,Pp=/%7C/g,uc=/%7D/g,xp=/%20/g;function mi(n){return n==null?"":encodeURI(""+n).replace(Pp,"|").replace(Ip,"[").replace(Cp,"]")}function Mp(n){return mi(n).replace(lc,"{").replace(uc,"}").replace(cc,"^")}function Fs(n){return mi(n).replace(ac,"%2B").replace(xp,"+").replace(oc,"%23").replace(Np,"%26").replace(Lp,"`").replace(lc,"{").replace(uc,"}").replace(cc,"^")}function Dp(n){return Fs(n).replace(Tp,"%3D")}function Bp(n){return mi(n).replace(oc,"%23").replace(Rp,"%3F")}function $p(n){return Bp(n).replace(Op,"%2F")}function Yt(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const jp=/\/$/,Fp=n=>n.replace(jp,"");function bs(n,e,t="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return c=a>=0&&c>a?-1:c,c>=0&&(r=e.slice(0,c),i=e.slice(c,a>0?a:e.length),s=n(i.slice(1))),a>=0&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=qp(r??e,t),{fullPath:r+i+o,path:r,query:s,hash:Yt(o)}}function Up(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function go(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Kp(n,e,t){const r=e.matched.length-1,s=t.matched.length-1;return r>-1&&r===s&&ht(e.matched[r],t.matched[s])&&pc(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function ht(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function pc(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(var t in n)if(!Vp(n[t],e[t]))return!1;return!0}function Vp(n,e){return Zn(n)?_o(n,e):Zn(e)?_o(e,n):(n==null?void 0:n.valueOf())===(e==null?void 0:e.valueOf())}function _o(n,e){return Zn(e)?n.length===e.length&&n.every((t,r)=>t===e[r]):n.length===1&&n[0]===e}function qp(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),r=n.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=t.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return t.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Te={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Us=(function(n){return n.pop="pop",n.push="push",n})({}),ws=(function(n){return n.back="back",n.forward="forward",n.unknown="",n})({});function Hp(n){if(!n)if(nt){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Fp(n)}const zp=/^[^#]+#/;function Gp(n,e){return n.replace(zp,"#")+e}function Wp(n,e){const t=document.documentElement.getBoundingClientRect(),r=n.getBoundingClientRect();return{behavior:e.behavior,left:r.left-t.left-(e.left||0),top:r.top-t.top-(e.top||0)}}const Yr=()=>({left:window.scrollX,top:window.scrollY});function Yp(n){let e;if("el"in n){const t=n.el,r=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=Wp(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function yo(n,e){return(history.state?history.state.position-e:-1)+n}const Ks=new Map;function Jp(n,e){Ks.set(n,e)}function Qp(n){const e=Ks.get(n);return Ks.delete(n),e}function Xp(n){return typeof n=="string"||n&&typeof n=="object"}function fc(n){return typeof n=="string"||typeof n=="symbol"}let ln=(function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n})({});const dc=Symbol("");ln.MATCHER_NOT_FOUND+"",ln.NAVIGATION_GUARD_REDIRECT+"",ln.NAVIGATION_ABORTED+"",ln.NAVIGATION_CANCELLED+"",ln.NAVIGATION_DUPLICATED+"";function mt(n,e){return Q(new Error,{type:n,[dc]:!0},e)}function me(n,e){return n instanceof Error&&dc in n&&(e==null||!!(n.type&e))}const Zp=["params","query","hash"];function nf(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of Zp)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}function ef(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<t.length;++r){const s=t[r].replace(ac," "),i=s.indexOf("="),o=Yt(i<0?s:s.slice(0,i)),a=i<0?null:Yt(s.slice(i+1));if(o in e){let c=e[o];Zn(c)||(c=e[o]=[c]),c.push(a)}else e[o]=a}return e}function bo(n){let e="";for(let t in n){const r=n[t];if(t=Dp(t),r==null){r!==void 0&&(e+=(e.length?"&":"")+t);continue}(Zn(r)?r.map(s=>s&&Fs(s)):[r&&Fs(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function tf(n){const e={};for(const t in n){const r=n[t];r!==void 0&&(e[t]=Zn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const rf=Symbol(""),wo=Symbol(""),Jr=Symbol(""),gi=Symbol(""),Vs=Symbol("");function Nt(){let n=[];function e(r){return n.push(r),()=>{const s=n.indexOf(r);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Ie(n,e,t,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=f=>{f===!1?c(mt(ln.NAVIGATION_ABORTED,{from:t,to:e})):f instanceof Error?c(f):Xp(f)?c(mt(ln.NAVIGATION_GUARD_REDIRECT,{from:e,to:f})):(o&&r.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=i(()=>n.call(r&&r.instances[s],e,t,l));let p=Promise.resolve(u);n.length<3&&(p=p.then(l)),p.catch(f=>c(f))})}function vs(n,e,t,r,s=i=>i()){const i=[];for(const o of n)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(ic(c)){const l=(c.__vccOpts||c)[e];l&&i.push(Ie(l,t,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const p=Ap(u)?u.default:u;o.mods[a]=u,o.components[a]=p;const f=(p.__vccOpts||p)[e];return f&&Ie(f,t,r,o,a,s)()}))}}return i}function sf(n,e){const t=[],r=[],s=[],i=Math.max(e.matched.length,n.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(n.matched.find(l=>ht(l,a))?r.push(a):t.push(a));const c=n.matched[o];c&&(e.matched.find(l=>ht(l,c))||s.push(c))}return[t,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let of=()=>location.protocol+"//"+location.host;function hc(n,e){const{pathname:t,search:r,hash:s}=e,i=n.indexOf("#");if(i>-1){let o=s.includes(n.slice(i))?n.slice(i).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),go(a,"")}return go(t,n)+r+s}function af(n,e,t,r){let s=[],i=[],o=null;const a=({state:f})=>{const d=hc(n,location),b=t.value,g=e.value;let y=0;if(f){if(t.value=d,e.value=f,o&&o===b){o=null;return}y=g?f.position-g.position:0}else r(d);s.forEach(v=>{v(t.value,b,{delta:y,type:Us.pop,direction:y?y>0?ws.forward:ws.back:ws.unknown})})};function c(){o=t.value}function l(f){s.push(f);const d=()=>{const b=s.indexOf(f);b>-1&&s.splice(b,1)};return i.push(d),d}function u(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(Q({},f.state,{scroll:Yr()}),"")}}function p(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:c,listen:l,destroy:p}}function vo(n,e,t,r=!1,s=!1){return{back:n,current:e,forward:t,replaced:r,position:window.history.length,scroll:s?Yr():null}}function cf(n){const{history:e,location:t}=window,r={value:hc(n,t)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const p=n.indexOf("#"),f=p>-1?(t.host&&document.querySelector("base")?n:n.slice(p))+c:of()+n+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(d){console.error(d),t[u?"replace":"assign"](f)}}function o(c,l){i(c,Q({},e.state,vo(s.value.back,c,s.value.forward,!0),l,{position:s.value.position}),!0),r.value=c}function a(c,l){const u=Q({},s.value,e.state,{forward:c,scroll:Yr()});i(u.current,u,!0),i(c,Q({},vo(r.value,c,null),{position:u.position+1},l),!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function lf(n){n=Hp(n);const e=cf(n),t=af(n,e.state,e.location,e.replace);function r(i,o=!0){o||t.pauseListeners(),history.go(i)}const s=Q({location:"",base:n,go:r,createHref:Gp.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function uf(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),lf(n)}let Fe=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n})({});var gn=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n})(gn||{});const pf={type:Fe.Static,value:""},ff=/[a-zA-Z0-9_]/;function df(n){if(!n)return[[]];if(n==="/")return[[pf]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${l}": ${d}`)}let t=gn.Static,r=t;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function p(){l&&(t===gn.Static?i.push({type:Fe.Static,value:l}):t===gn.Param||t===gn.ParamRegExp||t===gn.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Fe.Param,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&t!==gn.ParamRegExp){r=t,t=gn.EscapeNext;continue}switch(t){case gn.Static:c==="/"?(l&&p(),o()):c===":"?(p(),t=gn.Param):f();break;case gn.EscapeNext:f(),t=r;break;case gn.Param:c==="("?t=gn.ParamRegExp:ff.test(c)?f():(p(),t=gn.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case gn.ParamRegExp:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:t=gn.ParamRegExpEnd:u+=c;break;case gn.ParamRegExpEnd:p(),t=gn.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===gn.ParamRegExp&&e(`Unfinished custom RegExp for param "${l}"`),p(),o(),s}const ko="[^/]+?",hf={sensitive:!1,strict:!1,start:!0,end:!0};var Rn=(function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n})(Rn||{});const mf=/[.+*?^${}()[\]/\\]/g;function gf(n,e){const t=Q({},hf,e),r=[];let s=t.start?"^":"";const i=[];for(const l of n){const u=l.length?[]:[Rn.Root];t.strict&&!l.length&&(s+="/");for(let p=0;p<l.length;p++){const f=l[p];let d=Rn.Segment+(t.sensitive?Rn.BonusCaseSensitive:0);if(f.type===Fe.Static)p||(s+="/"),s+=f.value.replace(mf,"\\$&"),d+=Rn.Static;else if(f.type===Fe.Param){const{value:b,repeatable:g,optional:y,regexp:v}=f;i.push({name:b,repeatable:g,optional:y});const w=v||ko;if(w!==ko){d+=Rn.BonusCustomRegExp;try{`${w}`}catch(N){throw new Error(`Invalid custom RegExp for param "${b}" (${w}): `+N.message)}}let O=g?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;p||(O=y&&l.length<2?`(?:/${O})`:"/"+O),y&&(O+="?"),s+=O,d+=Rn.Dynamic,y&&(d+=Rn.BonusOptional),g&&(d+=Rn.BonusRepeatable),w===".*"&&(d+=Rn.BonusWildcard)}u.push(d)}r.push(u)}if(t.strict&&t.end){const l=r.length-1;r[l][r[l].length-1]+=Rn.BonusStrict}t.strict||(s+="/?"),t.end?s+="$":t.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(l){const u=l.match(o),p={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",b=i[f-1];p[b.name]=d&&b.repeatable?d.split("/"):d}return p}function c(l){let u="",p=!1;for(const f of n){(!p||!u.endsWith("/"))&&(u+="/"),p=!1;for(const d of f)if(d.type===Fe.Static)u+=d.value;else if(d.type===Fe.Param){const{value:b,repeatable:g,optional:y}=d,v=b in l?l[b]:"";if(Zn(v)&&!g)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const w=Zn(v)?v.join("/"):v;if(!w)if(y)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):p=!0);else throw new Error(`Missing required param "${b}"`);u+=w}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function _f(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=e[t]-n[t];if(r)return r;t++}return n.length<e.length?n.length===1&&n[0]===Rn.Static+Rn.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===Rn.Static+Rn.Segment?1:-1:0}function mc(n,e){let t=0;const r=n.score,s=e.score;for(;t<r.length&&t<s.length;){const i=_f(r[t],s[t]);if(i)return i;t++}if(Math.abs(s.length-r.length)===1){if(So(r))return 1;if(So(s))return-1}return s.length-r.length}function So(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const yf={strict:!1,end:!0,sensitive:!1};function bf(n,e,t){const r=gf(df(n.path),t),s=Q(r,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function wf(n,e){const t=[],r=new Map;e=mo(yf,e);function s(p){return r.get(p)}function i(p,f,d){const b=!d,g=Ao(p);g.aliasOf=d&&d.record;const y=mo(e,p),v=[g];if("alias"in p){const N=typeof p.alias=="string"?[p.alias]:p.alias;for(const L of N)v.push(Ao(Q({},g,{components:d?d.record.components:g.components,path:L,aliasOf:d?d.record:g})))}let w,O;for(const N of v){const{path:L}=N;if(f&&L[0]!=="/"){const U=f.record.path,M=U[U.length-1]==="/"?"":"/";N.path=f.record.path+(L&&M+L)}if(w=bf(N,f,y),d?d.alias.push(w):(O=O||w,O!==w&&O.alias.push(w),b&&p.name&&!No(w)&&o(p.name)),gc(w)&&c(w),g.children){const U=g.children;for(let M=0;M<U.length;M++)i(U[M],w,d&&d.children[M])}d=d||w}return O?()=>{o(O)}:jt}function o(p){if(fc(p)){const f=r.get(p);f&&(r.delete(p),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(p);f>-1&&(t.splice(f,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function a(){return t}function c(p){const f=Sf(p,t);t.splice(f,0,p),p.record.name&&!No(p)&&r.set(p.record.name,p)}function l(p,f){let d,b={},g,y;if("name"in p&&p.name){if(d=r.get(p.name),!d)throw mt(ln.MATCHER_NOT_FOUND,{location:p});y=d.record.name,b=Q(Eo(f.params,d.keys.filter(O=>!O.optional).concat(d.parent?d.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),p.params&&Eo(p.params,d.keys.map(O=>O.name))),g=d.stringify(b)}else if(p.path!=null)g=p.path,d=t.find(O=>O.re.test(g)),d&&(b=d.parse(g),y=d.record.name);else{if(d=f.name?r.get(f.name):t.find(O=>O.re.test(f.path)),!d)throw mt(ln.MATCHER_NOT_FOUND,{location:p,currentLocation:f});y=d.record.name,b=Q({},f.params,p.params),g=d.stringify(b)}const v=[];let w=d;for(;w;)v.unshift(w.record),w=w.parent;return{name:y,path:g,params:b,matched:v,meta:kf(v)}}n.forEach(p=>i(p));function u(){t.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Eo(n,e){const t={};for(const r of e)r in n&&(t[r]=n[r]);return t}function Ao(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:vf(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function vf(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const r in n.components)e[r]=typeof t=="object"?t[r]:t;return e}function No(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function kf(n){return n.reduce((e,t)=>Q(e,t.meta),{})}function Sf(n,e){let t=0,r=e.length;for(;t!==r;){const i=t+r>>1;mc(n,e[i])<0?r=i:t=i+1}const s=Ef(n);return s&&(r=e.lastIndexOf(s,r-1)),r}function Ef(n){let e=n;for(;e=e.parent;)if(gc(e)&&mc(n,e)===0)return e}function gc({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Oo(n){const e=Qn(Jr),t=Qn(gi),r=Pn(()=>{const c=vn(n.to);return e.resolve(c)}),s=Pn(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],p=t.matched;if(!u||!p.length)return-1;const f=p.findIndex(ht.bind(null,u));if(f>-1)return f;const d=To(c[l-2]);return l>1&&To(u)===d&&p[p.length-1].path!==d?p.findIndex(ht.bind(null,c[l-2])):f}),i=Pn(()=>s.value>-1&&Tf(t.params,r.value.params)),o=Pn(()=>s.value>-1&&s.value===t.matched.length-1&&pc(t.params,r.value.params));function a(c={}){if(Of(c)){const l=e[vn(n.replace)?"replace":"push"](vn(n.to)).catch(jt);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:Pn(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function Af(n){return n.length===1?n[0]:n}const Nf=nr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Oo,setup(n,{slots:e}){const t=Kr(Oo(n)),{options:r}=Qn(Jr),s=Pn(()=>({[Ro(n.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[Ro(n.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=e.default&&Af(e.default(t));return n.custom?i:Wt("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},i)}}}),qs=Nf;function Of(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Tf(n,e){for(const t in e){const r=e[t],s=n[t];if(typeof r=="string"){if(r!==s)return!1}else if(!Zn(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function To(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Ro=(n,e,t)=>n??e??t,Rf=nr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const r=Qn(Vs),s=Pn(()=>n.route||r.value),i=Qn(wo,0),o=Pn(()=>{let l=vn(i);const{matched:u}=s.value;let p;for(;(p=u[l])&&!p.components;)l++;return l}),a=Pn(()=>s.value.matched[o.value]);mr(wo,Pn(()=>o.value+1)),mr(rf,a),mr(Vs,s);const c=qr();return Mt(()=>[c.value,a.value,n.name],([l,u,p],[f,d,b])=>{u&&(u.instances[p]=l,d&&d!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),l&&u&&(!d||!ht(u,d)||!f)&&(u.enterCallbacks[p]||[]).forEach(g=>g(l))},{flush:"post"}),()=>{const l=s.value,u=n.name,p=a.value,f=p&&p.components[u];if(!f)return Io(t.default,{Component:f,route:l});const d=p.props[u],b=d?d===!0?l.params:typeof d=="function"?d(l):d:null,y=Wt(f,Q({},b,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(p.instances[u]=null)},ref:c}));return Io(t.default,{Component:y,route:l})||y}}});function Io(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const If=Rf;function Cf(n){const e=wf(n.routes,n),t=n.parseQuery||ef,r=n.stringifyQuery||bo,s=n.history,i=Nt(),o=Nt(),a=Nt(),c=$l(Te);let l=Te;nt&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ys.bind(null,E=>""+E),p=ys.bind(null,$p),f=ys.bind(null,Yt);function d(E,D){let P,$;return fc(E)?(P=e.getRecordMatcher(E),$=D):$=E,e.addRoute($,P)}function b(E){const D=e.getRecordMatcher(E);D&&e.removeRoute(D)}function g(){return e.getRoutes().map(E=>E.record)}function y(E){return!!e.getRecordMatcher(E)}function v(E,D){if(D=Q({},D||c.value),typeof E=="string"){const _=bs(t,E,D.path),k=e.resolve({path:_.path},D),A=s.createHref(_.fullPath);return Q(_,k,{params:f(k.params),hash:Yt(_.hash),redirectedFrom:void 0,href:A})}let P;if(E.path!=null)P=Q({},E,{path:bs(t,E.path,D.path).path});else{const _=Q({},E.params);for(const k in _)_[k]==null&&delete _[k];P=Q({},E,{params:p(_)}),D.params=p(D.params)}const $=e.resolve(P,D),G=E.hash||"";$.params=u(f($.params));const h=Up(r,Q({},E,{hash:Mp(G),path:$.path})),m=s.createHref(h);return Q({fullPath:h,hash:G,query:r===bo?tf(E.query):E.query||{}},$,{redirectedFrom:void 0,href:m})}function w(E){return typeof E=="string"?bs(t,E,c.value.path):Q({},E)}function O(E,D){if(l!==E)return mt(ln.NAVIGATION_CANCELLED,{from:D,to:E})}function N(E){return M(E)}function L(E){return N(Q(w(E),{replace:!0}))}function U(E,D){const P=E.matched[E.matched.length-1];if(P&&P.redirect){const{redirect:$}=P;let G=typeof $=="function"?$(E,D):$;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=w(G):{path:G},G.params={}),Q({query:E.query,hash:E.hash,params:G.path!=null?{}:E.params},G)}}function M(E,D){const P=l=v(E),$=c.value,G=E.state,h=E.force,m=E.replace===!0,_=U(P,$);if(_)return M(Q(w(_),{state:typeof _=="object"?Q({},G,_.state):G,force:h,replace:m}),D||P);const k=P;k.redirectedFrom=D;let A;return!h&&Kp(r,$,P)&&(A=mt(ln.NAVIGATION_DUPLICATED,{to:k,from:$}),ee($,$,!0,!1)),(A?Promise.resolve(A):tn(k,$)).catch(S=>me(S)?me(S,ln.NAVIGATION_GUARD_REDIRECT)?S:Oe(S):J(S,k,$)).then(S=>{if(S){if(me(S,ln.NAVIGATION_GUARD_REDIRECT))return M(Q({replace:m},w(S.to),{state:typeof S.to=="object"?Q({},G,S.to.state):G,force:h}),D||k)}else S=mn(k,$,!0,m,G);return bn(k,$,S),S})}function B(E,D){const P=O(E,D);return P?Promise.reject(P):Promise.resolve()}function z(E){const D=Ye.values().next().value;return D&&typeof D.runWithContext=="function"?D.runWithContext(E):E()}function tn(E,D){let P;const[$,G,h]=sf(E,D);P=vs($.reverse(),"beforeRouteLeave",E,D);for(const _ of $)_.leaveGuards.forEach(k=>{P.push(Ie(k,E,D))});const m=B.bind(null,E,D);return P.push(m),qn(P).then(()=>{P=[];for(const _ of i.list())P.push(Ie(_,E,D));return P.push(m),qn(P)}).then(()=>{P=vs(G,"beforeRouteUpdate",E,D);for(const _ of G)_.updateGuards.forEach(k=>{P.push(Ie(k,E,D))});return P.push(m),qn(P)}).then(()=>{P=[];for(const _ of h)if(_.beforeEnter)if(Zn(_.beforeEnter))for(const k of _.beforeEnter)P.push(Ie(k,E,D));else P.push(Ie(_.beforeEnter,E,D));return P.push(m),qn(P)}).then(()=>(E.matched.forEach(_=>_.enterCallbacks={}),P=vs(h,"beforeRouteEnter",E,D,z),P.push(m),qn(P))).then(()=>{P=[];for(const _ of o.list())P.push(Ie(_,E,D));return P.push(m),qn(P)}).catch(_=>me(_,ln.NAVIGATION_CANCELLED)?_:Promise.reject(_))}function bn(E,D,P){a.list().forEach($=>z(()=>$(E,D,P)))}function mn(E,D,P,$,G){const h=O(E,D);if(h)return h;const m=D===Te,_=nt?history.state:{};P&&($||m?s.replace(E.fullPath,Q({scroll:m&&_&&_.scroll},G)):s.push(E.fullPath,G)),c.value=E,ee(E,D,P,m),Oe()}let cn;function Ne(){cn||(cn=s.listen((E,D,P)=>{if(!Me.listening)return;const $=v(E),G=U($,Me.currentRoute.value);if(G){M(Q(G,{replace:!0,force:!0}),$).catch(jt);return}l=$;const h=c.value;nt&&Jp(yo(h.fullPath,P.delta),Yr()),tn($,h).catch(m=>me(m,ln.NAVIGATION_ABORTED|ln.NAVIGATION_CANCELLED)?m:me(m,ln.NAVIGATION_GUARD_REDIRECT)?(M(Q(w(m.to),{force:!0}),$).then(_=>{me(_,ln.NAVIGATION_ABORTED|ln.NAVIGATION_DUPLICATED)&&!P.delta&&P.type===Us.pop&&s.go(-1,!1)}).catch(jt),Promise.reject()):(P.delta&&s.go(-P.delta,!1),J(m,$,h))).then(m=>{m=m||mn($,h,!1),m&&(P.delta&&!me(m,ln.NAVIGATION_CANCELLED)?s.go(-P.delta,!1):P.type===Us.pop&&me(m,ln.NAVIGATION_ABORTED|ln.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),bn($,h,m)}).catch(jt)}))}let Ge=Nt(),wn=Nt(),nn;function J(E,D,P){Oe(E);const $=wn.list();return $.length?$.forEach(G=>G(E,D,P)):console.error(E),Promise.reject(E)}function de(){return nn&&c.value!==Te?Promise.resolve():new Promise((E,D)=>{Ge.add([E,D])})}function Oe(E){return nn||(nn=!E,Ne(),Ge.list().forEach(([D,P])=>E?P(E):D()),Ge.reset()),E}function ee(E,D,P,$){const{scrollBehavior:G}=n;if(!nt||!G)return Promise.resolve();const h=!P&&Qp(yo(E.fullPath,0))||($||!P)&&history.state&&history.state.scroll||null;return ba().then(()=>G(E,D,h)).then(m=>m&&Yp(m)).catch(m=>J(m,E,D))}const $n=E=>s.go(E);let We;const Ye=new Set,Me={currentRoute:c,listening:!0,addRoute:d,removeRoute:b,clearRoutes:e.clearRoutes,hasRoute:y,getRoutes:g,resolve:v,options:n,push:N,replace:L,go:$n,back:()=>$n(-1),forward:()=>$n(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:wn.add,isReady:de,install(E){E.component("RouterLink",qs),E.component("RouterView",If),E.config.globalProperties.$router=Me,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>vn(c)}),nt&&!We&&c.value===Te&&(We=!0,N(s.location).catch($=>{}));const D={};for(const $ in Te)Object.defineProperty(D,$,{get:()=>c.value[$],enumerable:!0});E.provide(Jr,Me),E.provide(gi,ha(D)),E.provide(Vs,c);const P=E.unmount;Ye.add(E),E.unmount=function(){Ye.delete(E),Ye.size<1&&(l=Te,cn&&cn(),cn=null,c.value=Te,We=!1,nn=!1),P()}}};function qn(E){return E.reduce((D,P)=>D.then(()=>z(P)),Promise.resolve())}return Me}function am(){return Qn(Jr)}function Lf(n){return Qn(gi)}const Pf=`# ─────────────────────────────────────────────────────────────────────────────
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
`,xf=`# ─────────────────────────────────────────────────────────────────────────────
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
`,Mf=`# ─────────────────────────────────────────────────────────────────────────────
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

`,Df=`# ─────────────────────────────────────────────────────────────────────────────
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
`,Bf=`# ─────────────────────────────────────────────────────────────────────────────
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
`,$f=`# ─────────────────────────────────────────────────────────────────────────────
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

`,jf=`# ─────────────────────────────────────────────────────────────────────────────
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

`,Ff=`# ─────────────────────────────────────────────────────────────────────────────
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

`,Uf=`# ─────────────────────────────────────────────────────────────────────────────
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

`,Kf=`# ─────────────────────────────────────────────────────────────────────────────
# Стандарт «Утверждение редакции документа советом кооператива».
#
# Реестр документов платформы один на всю сеть: оператор выпускает новую
# редакцию шаблона для всех кооперативов сразу. Но пайщикам конкретного
# кооператива редакция предъявляется только после того, как её утвердил
# совет этого кооператива. До решения кооператив продолжает работать по
# прежней утверждённой редакции — и по тексту, и по реквизитам протокола.
#
# Источники в коде:
#   • cpp/draft/src/approve.cpp
#   • cpp/draft/src/upversion.cpp
#   • cpp/lib/domain/table_draft_approvals.hpp
#   • cpp/soviet/src/agreement/sndagreement.cpp (редакция подписи)
#   • cpp/wallet/src/agreement/signagree.cpp   (редакция подписи)
# ─────────────────────────────────────────────────────────────────────────────

process_type: drf.approve
id: public_draft_document_approval_process
title: Утверждение редакции документа советом кооператива
slug: document-approval
status: proposed
contract: draft
summary: >
  Оператор платформы выпускает новую редакцию документа. Председатель выносит
  её на совет, совет принимает решение по типовому процессу решения совета,
  после чего утверждение записывается за кооперативом. С этого момента
  пайщикам предъявляется и в их подписи ложится утверждённая редакция.
purpose: >
  Документы кооператива — политика конфиденциальности, положения целевых
  потребительских программ, оферты, формы заявлений и актов — действуют в
  кооперативе только в редакции, принятой его советом. Стандарт описывает,
  как новая редакция из общего реестра становится действующей в отдельном
  кооперативе, что происходит до решения совета и что — после.

roles:
  - operator            # Оператор платформы — выпускает редакции документов
  - chairman            # Председатель совета — выносит редакцию на совет
  - soviet_member       # Член совета — голосует
  - participant         # Пайщик — подписывает документы в утверждённой редакции

# ── Секция 2. Действия контракта ────────────────────────────────────────────
actions:
  - name: draft::upversion
    human: Выпустить новую редакцию
    actor: Оператор платформы
    role: opener
    purpose: >
      Оператор поднимает номер редакции документа в общем реестре сети.
      Для кооперативов это только сигнал: их пайщики продолжают видеть
      прежнюю утверждённую редакцию, а председатель получает уведомление
      о том, что редакцию нужно вынести на совет.

  - name: draft::approve
    human: Зафиксировать утверждение
    actor: Кооператив
    role: closer
    purpose: >
      После решения совета кооператив записывает за собой утверждённую
      редакцию: номер редакции, номер и дату протокола, отпечаток текста.
      Редакция обязана совпадать с текущей в общем реестре — утвердить
      несуществующую или уже сменённую редакцию нельзя. Утверждение без
      номера протокола допускается только при переносе прежних утверждений
      из настроек кооператива.

  - name: soviet::sndagreement
    human: Подписать соглашение
    actor: Пайщик
    role: progress
    purpose: >
      Подпись пайщика под документом получает утверждённую кооперативом
      редакцию, а не текущую редакцию сети. Так после утверждения новой
      редакции рабочий стол видит расхождение и просит подписать заново.

  - name: wallet::signagree
    human: Подписать соглашение целевой программы
    actor: Пайщик
    role: progress
    purpose: >
      То же для соглашений целевых потребительских программ: в подпись
      ложится редакция, утверждённая советом кооператива.

# ── Секция 3. Граф состояний ────────────────────────────────────────────────
entity: draft::approval
entity_human: Редакция документа в кооперативе
entity_source: cpp/lib/domain/table_draft_approvals.hpp

states:
  - name: not_approved
    human: Не утверждён
    description: >
      Совет кооператива ещё ни одной редакции документа не утверждал.
      Пайщикам документ не предъявляется.
    kind: normal

  - name: pending
    human: В повестке совета
    description: >
      Председатель вынес редакцию на совет; проект решения с текстом
      редакции ждёт голосования по типовому процессу решения совета.
    kind: normal

  - name: approved
    human: Утверждён
    description: >
      Утверждённая редакция совпадает с редакцией в общем реестре.
      Пайщики видят и подписывают её.
    kind: normal

  - name: outdated
    human: Вышла новая редакция
    description: >
      Оператор выпустил редакцию новее утверждённой. Кооператив продолжает
      работать по утверждённой, председателю нужно вынести новую на совет.
    kind: normal

  - name: not_required
    human: Утверждение не требуется
    description: >
      Служебные документы — повестка, протоколы решений, бюллетени: их форма
      задана уставом и законом, совет их не утверждает.
    kind: virtual
    virtual: true

transitions:
  - from: "∅"
    to: not_approved
    action: draft::createdraft
    actor: Оператор платформы
    guards:
      - Документ объявлен в реестре шаблонов кооператива ядром или установленным приложением.

  - from: not_approved
    to: pending
    action: soviet::freedecision
    actor: Председатель
    guards:
      - Проект решения содержит текст утверждаемой редакции и его отпечаток.

  - from: outdated
    to: pending
    action: soviet::freedecision
    actor: Председатель
    guards:
      - Проект решения содержит текст утверждаемой редакции и его отпечаток.

  - from: pending
    to: approved
    action: draft::approve
    actor: Кооператив
    guards:
      - Совет принял решение, председатель подписал протокол (типовой процесс решения совета).
      - Утверждаемая редакция совпадает с текущей редакцией общего реестра.

  - from: pending
    to: not_approved
    action: soviet::declinedec
    actor: Председатель
    guards:
      - Совет отклонил решение или оно снято как просроченное; прежних утверждений не было.

  - from: pending
    to: outdated
    action: soviet::declinedec
    actor: Председатель
    guards:
      - Совет отклонил решение или оно снято как просроченное; прежняя редакция остаётся действующей.

  - from: approved
    to: outdated
    action: draft::upversion
    actor: Оператор платформы
    guards:
      - Номер редакции в общем реестре стал больше утверждённого.

# ── Секция 4. Сценарий ──────────────────────────────────────────────────────
scenario:
  steps:
    - step: 1
      title: Выпуск новой редакции
      actor: Оператор платформы
      action: draft::upversion
      description: >
        Оператор поднимает номер редакции документа в общем реестре.
        Председатель получает уведомление, пайщики ничего не замечают:
        им по-прежнему предъявляется утверждённая редакция.
      pre:
        - Смысловое изменение документа; правки без смысла номер не поднимают.
      post:
        - Документ в кооперативе помечен как «Вышла новая редакция».

    - step: 2
      title: Вынесение на совет
      actor: Председатель
      action: soviet::freedecision
      description: >
        Председатель во вкладке «Шаблоны документов» выносит документ или
        пакет документов на совет. Проект решения собирается из текста
        редакции в общем реестре и содержит отпечаток текста.
      pre:
        - Документ не утверждён или утверждён в прежней редакции.
      post:
        - Документ в повестке совета.

    - step: 3
      title: Решение совета
      actor: Член совета
      action: soviet::votefor
      description: >
        Совет голосует, председатель подписывает протокол — по типовому
        процессу решения совета.
      pre:
        - Проект решения в повестке.
      post:
        - Решение принято и исполнено.

    - step: 4
      title: Фиксация утверждения
      actor: Кооператив
      action: draft::approve
      description: >
        Кооператив записывает утверждённую редакцию с номером и датой
        протокола. Реквизиты протокола попадают в шапки документов.
        Пайщиков, подписывавших прежнюю редакцию соглашения, рабочий стол
        просит подписать новую; формы и положения переподписания не требуют.
      pre:
        - Решение совета принято.
      post:
        - Пайщикам предъявляется утверждённая редакция.

  alternatives:
    - branch: Отклонение или просрочка
      at_step: 3
      action: soviet::declinedec
      actor: Председатель
      description: >
        Совет отклонил решение или оно снято как просроченное. Документ
        возвращается в прежнее состояние, председатель получает уведомление
        и может вынести редакцию снова.

    - branch: Перенос прежних утверждений
      at_step: 4
      action: draft::approve
      actor: Кооператив
      description: >
        Кооператив, заведённый до появления утверждений в цепи, получает
        утверждения текущих редакций с реквизитами протоколов из своих
        настроек — без нового решения совета и без переподписания.
`,Vf=`# ─────────────────────────────────────────────────────────────────────────────
# Стандарт «Гарантийная претензия поставщику» — вторая часть гарантийного
# возврата (решение владельца 08.09.2026, компонент 68 «Паевая модель
# заказчика», задача 99D-13).
#
# Кооператив оплатил поставщику имущество при приёмке, а пайщик вернул его по
# гарантии, и совет отменил сделку (стандарт p.mkt.return). Деньги за
# возвращённое остались у поставщика — ему выставляется претензия: рекламация
# пайщика с двумя подписями (получателя и оператора участка, принявшего
# имущество), фотографии, результат осмотра и сумма. По умолчанию поставщик
# не согласен: сумма лежит на кошельке непризнанных претензий как основание
# для иска, и кооператив ничего не делает. Если поставщик соглашается, сумма
# переходит на кошелёк признанного долга и гасится удержанием из следующих
# выплат ему. Несогласие в цепь не пишется: поставщик связывается с участком
# (решение владельца 08.09.2026, вторая редакция — два кошелька вместо трёх,
# без автоприёма).
#
# Претензию заводит контракт при исполнении решения совета, в той же
# транзакции, что и обратные операции возврата. По заказу из остатка
# кооператива претензии нет: поставщик там — сам кооператив.
#
# Канон формата:
#   coopenomics-docs/docs/standards/_spec/canon.md
# Источники правды в коде:
#   • cpp/marketplace/marketplace.hpp                    — actions
#   • cpp/marketplace/src/p.mkt.claim/                   — реализация
#   • cpp/marketplace/src/p.mkt.return/onmktrtauth.cpp   — выставление претензии
#   • cpp/marketplace/src/p.mkt.supply/payout.cpp        — удержание долга из выплаты
#   • cpp/lib/domain/table_marketplace_warranty_claims.hpp — сущность и статусы
#   • cpp/lib/core/ledger2/operations.hpp                — o.mkt.claim / admit / deduct
#   • cpp/lib/core/ledger2/wallets.hpp                   — w.mkt.claim / debt
# ─────────────────────────────────────────────────────────────────────────────

process_type: p.mkt.claim
id: public_marketplace_claim_process
title: Гарантийная претензия поставщику
slug: claim
status: proposed
contract: marketplace
purpose: >
  Когда совет отменяет сделку по гарантийному возврату, имущество уже оплачено
  поставщику, а вернулось на склад участка. Поставщику выставляется
  гарантийная претензия: та же рекламация, которую подал заказчик, с двумя
  подписями — заказчика и оператора участка, принявшего имущество, —
  фотографии, результат осмотра и сумма, на которую произошёл возврат.
  Поставщик видит претензию в разделе «Гарантийные возвраты» своего стола. По
  умолчанию он не согласен: сумма лежит на кошельке непризнанных претензий,
  кооператив ничего не предпринимает и при желании идёт с ней в суд. Кнопка
  «Не согласен» только показывает контакты участка, где лежит имущество, —
  разбираться поставщик едет туда. Если поставщик нажимает «Согласен», сумма
  переходит на кошелёк признанного долга и гасится удержанием из его следующих
  выплат за поставки; каждое удержание видно в истории выплат. Автоматических
  решений нет. Имущество ждёт поставщика на участке, а до этого кооператив
  распоряжается им как своим: списывает или публикует заново.
roles:
  - supplier       # поставщик, которому выставлена претензия
  - council        # совет кооператива — решением об отмене сделки выставляет претензию
  - backend        # кооператив: удержание долга при выплате

actions:
  - name: marketplace::onmktrtauth
    human: Выставить претензию поставщику
    actor: council
    role: opener
    purpose: >
      Исполняя решение совета об отмене сделки по гарантийному возврату,
      контракт выставляет поставщику претензию на стоимость возвращённого
      имущества: сумма встаёт на кошелёк непризнанных претензий поставщика —
      по умолчанию он не согласен. Поставщику уходит уведомление со ссылкой
      на раздел «Гарантийные возвраты».
    links:
      - process_type: p.mkt.return
        label: Гарантийный возврат имущества

  - name: marketplace::admitclaim
    human: Согласиться с претензией
    actor: supplier
    role: closer
    purpose: >
      Поставщик нажимает «Согласен». Сумма переходит с кошелька непризнанных
      претензий на кошелёк признанного долга поставщика; кооператив признаёт
      дебиторскую задолженность поставщика. Долг гасится удержанием из
      следующих выплат поставщику за поставки — деньгами возвращать ничего не
      нужно. Несогласие отдельным действием не оформляется: сумма просто
      остаётся непризнанной, а поставщик связывается с участком.

  - name: marketplace::payout
    human: Удержать долг из выплаты
    actor: backend
    role: progress
    purpose: >
      Каждая следующая выплата поставщику уменьшается на остаток его
      признанного гарантийного долга, но не больше самой выплаты. Удержанная
      часть гасит долг; если долг покрывает всю выплату, банковского перевода
      нет и выплата считается завершённой сразу.
    links:
      - process_type: p.mkt.supply
        label: Поставка и приобретение имущества пайщика

entity: marketplace::warranty_claim
entity_human: Гарантийная претензия поставщику
entity_source: cpp/marketplace/src/p.mkt.claim/

states:
  - name: pending
    human: Не признана
    description: >
      Претензия выставлена по решению совета; поставщик по умолчанию не
      согласен. Он видит рекламацию с подписями, фотографии, результат осмотра,
      сумму и контакты участка, где лежит имущество. Сумма учтена на кошельке
      непризнанных претензий как основание для иска и в выплаты не
      вмешивается. Может оставаться так сколько угодно.
    kind: normal

  - name: admitted
    human: Признана — долг к удержанию
    description: >
      Поставщик согласился с претензией. Сумма — признанный долг поставщика:
      каждая следующая выплата ему уменьшается на остаток долга, пока он не
      погашен.
    kind: final

transitions:
  - from: "∅"
    to: pending
    action: marketplace::onmktrtauth
    actor: council
    ledger_code: p.mkt.claim
    operations:
      - o.mkt.claim
    guards:
      - Совет принял решение об отмене сделки по гарантийному возврату.
      - Заказ поставлен внешним поставщиком, а не выдан из остатка кооператива.
      - Сумма возвращённого имущества больше нуля.

  - from: pending
    to: admitted
    action: marketplace::admitclaim
    actor: supplier
    ledger_code: p.mkt.claim
    operations:
      - o.mkt.admit
    guards:
      - Соглашается поставщик, которому выставлена претензия.
      - Претензия ещё не признана.

scenario:
  steps:
    - step: 1
      title: Претензия выставлена по решению совета
      actor: council
      action: marketplace::onmktrtauth
      description: >
        Совет отменил сделку по гарантийному возврату. В той же транзакции
        поставщику выставлена претензия на стоимость возвращённого имущества:
        рекламация заказчика с двумя подписями, фотографии, результат осмотра.
        Поставщику приходит уведомление.
      pre:
        - Имущество принято оператором участка по рекламации заказчика.
        - Совет решил отменить сделку.
      post:
        - Претензия не признана (поставщик по умолчанию не согласен); имущество — на участке.

    - step: 2
      title: Согласие поставщика
      actor: supplier
      action: marketplace::admitclaim
      description: >
        Поставщик открывает претензию в разделе «Гарантийные возвраты»,
        смотрит рекламацию, фотографии и результат осмотра и нажимает
        «Согласен». Сумма становится его долгом перед кооперативом.
      pre:
        - Претензия не признана.
      post:
        - Долг поставщика к удержанию из следующих выплат.

    - step: 3
      title: Удержание из выплаты
      actor: backend
      action: marketplace::payout
      description: >
        При следующей выплате поставщику за поставку сумма перевода
        уменьшается на остаток долга. Удержанная часть гасит долг; поставщик
        видит удержание в истории выплат.
      pre:
        - У поставщика есть признанный непогашенный долг.
        - Кооператив инициирует выплату по новой приёмке.
      post:
        - Долг уменьшен на удержанную часть; при полном покрытии выплата завершена без перевода.

  alternatives:
    - branch: Поставщик не согласен
      at_step: 2
      action: null
      actor: supplier
      description: >
        Поставщик нажимает «Не согласен» и видит контакты участка, где лежит
        имущество, — разбирается с оператором участка напрямую. В цепи ничего
        не происходит: сумма остаётся непризнанной, выплаты не затрагиваются,
        кооператив при желании идёт в суд, а имуществом распоряжается как
        своим.

documents:
  - action: marketplace::onmktrtauth
    title: Заявление о гарантийном возврате имущества (рекламация), подписи заказчика и оператора участка
    registry_id: 1106
    signed_by: [orderer, chairman]
    stored_in: claims.reclamation
    note: "Тот же документ, что подал заказчик (стандарт p.mkt.return, submretrn), дополненный второй подписью оператора участка при приёме имущества (accretrn) — без регенерации. Поставщику показывается с обеими подписями; протокол совета поставщику не показывается."

operations:
  - ledger_code: o.mkt.claim
    human_name: Гарантийная претензия поставщику выставлена (не признана)
    wallet_op: ISSUE
    debit: null
    credit: null
    wallet_from: null
    wallet_to: w.mkt.claim
    user_wallet: w.mkt.claim
    user_ref: warranty_claim.supplier
    available_delta: +warranty_claim.amount
    blocked_delta: null
    amount_ref: warranty_claim.amount
    triggered_by: marketplace::onmktrtauth
    description: >
      Сумма претензии встаёт на кошелёк непризнанных претензий поставщика —
      по умолчанию он не согласен. Проводки нет: до признания претензия — не
      актив кооператива, а основание для иска.

  - ledger_code: o.mkt.admit
    human_name: Претензия признана — долг к удержанию
    wallet_op: TRANSFER
    debit: 76                      # Расчёты с разными дебиторами и кредиторами — дебиторка поставщика
    credit: 91                     # Прочие доходы и расходы (предложение бухгалтеру, TBD-Standardization)
    wallet_from: w.mkt.claim
    wallet_to: w.mkt.debt
    l3:
      - user_wallet: w.mkt.claim
        user_ref: warranty_claim.supplier
        available_delta: -warranty_claim.amount
        blocked_delta: null
      - user_wallet: w.mkt.debt
        user_ref: warranty_claim.supplier
        available_delta: +warranty_claim.amount
        blocked_delta: null
    amount_ref: warranty_claim.amount
    triggered_by: marketplace::admitclaim
    description: >
      Поставщик согласился с претензией. Сумма переходит на кошелёк
      признанного долга поставщика; кооператив признаёт дебиторскую
      задолженность поставщика.

  - ledger_code: o.mkt.deduct
    human_name: Удержание долга поставщика из выплаты
    wallet_op: BURN
    debit: null
    credit: null
    wallet_from: w.mkt.debt
    wallet_to: null
    user_wallet: w.mkt.debt
    user_ref: order.offerer
    available_delta: -order.payout_withheld
    blocked_delta: null
    amount_ref: order.payout_withheld
    triggered_by: marketplace::payout
    description: >
      Часть выплаты поставщику, удержанная в счёт признанного долга, гасит
      долг. Идёт в нитке заказа, по которому выплата уменьшена (стандарт
      p.mkt.supply). Проводки нет: обязательство перед поставщиком и его
      дебиторская задолженность учтены на одном счёте расчётов и сворачиваются.
`,qf=`# ─────────────────────────────────────────────────────────────────────────────
# Стандарт «Гарантийный возврат имущества» — паевая модель (решение владельца
# проекта 06.09.2026, компонент 68 «Паевая модель заказчика»).
#
# Заказчик получил имущество как возврат паевого взноса. Гарантийный возврат
# — отмена этой сделки (решение владельца 08.09.2026 по разъяснению
# методолога, задача 99D-12): заказчик подаёт рекламацию, оператор участка
# осматривает имущество и принимает его под свою материальную ответственность,
# подавая в совет заявление об отмене сделки; совет легитимизирует решение
# оператора, и только по его решению идут обратные операции. При отказе совета
# или без решения имущество ждёт пайщика на участке, движений по средствам нет.
#
# Канон формата:
#   coopenomics-docs/docs/standards/_spec/canon.md
# ─────────────────────────────────────────────────────────────────────────────

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
  он подаёт рекламацию — заявление о гарантийном возврате имущества.
  Оператор участка сначала рассматривает рекламацию удалённо — по фото
  и описанию — и либо приглашает заказчика на участок, либо отказывает.
  На участке оператор осматривает товар и под свою материальную
  ответственность решает, принимать ли его. Если принимает — подписывает
  заявление в совет об отмене сделки, по которой заказчик получал это
  имущество; заказчик уходит домой и ждёт решения. Совет не разбирает
  случай заново, а легитимизирует решение оператора — обычно решение
  принимается автоматически за секунды. При согласии совета все движения
  по выданному заказу откатываются: имущество возвращается на склад
  участка, паевой взнос заказчика восстанавливается на свободном
  паевом Стола заказов, членский взнос участка за возвращённое
  возвращается на членский кошелёк заказчика, а поставщику выставляется
  гарантийная претензия с рекламацией в две подписи (стандарт
  p.mkt.claim). При отказе совета или пока решения нет, баланс заказчика
  не меняется, имущество ждёт его на участке — оператор звонит и
  предлагает забрать. Дальнейшая судьба принятого имущества (перепоставка,
  списание) — вне этого процесса.
roles:
  - orderer        # пайщик-заказчик, инициатор возврата
  - chairman       # председатель или оператор кооперативного участка выдачи
  - council        # совет кооператива (решение об отмене сделки и восстановлении взносов)

actions:
  - name: marketplace::submretrn
    human: Подать заявление на гарантийный возврат
    actor: orderer
    role: opener
    purpose: >
      Заказчик подаёт рекламацию — заявление о гарантийном возврате
      имущества: указывает причину обращения (некондиция, истёк срок
      годности, иное) и прикладывает фотографии товара. Подать заявление
      можно только пока не истёк гарантийный срок, заданный поставщиком.
      Рекламацию подписывает заказчик; больше от него подписей не
      потребуется.

  - name: marketplace::aprretrem
    human: Пригласить на участок
    actor: chairman
    role: progress
    purpose: >
      Оператор участка по результатам удалённого рассмотрения решает,
      что для разбора обращения нужен очный осмотр товара, и приглашает
      заказчика прийти на участок с продукцией.

  - name: marketplace::rejretrem
    human: Отказать удалённо
    actor: chairman
    role: reject
    purpose: >
      Оператор участка по результатам удалённого рассмотрения решает
      отказать в гарантийном возврате с указанием причины — без
      приглашения на очный осмотр. Движений по имуществу и средствам не
      происходит; спор уходит в отдельную процедуру.

  - name: marketplace::accretrn
    human: Принять имущество на участке
    actor: chairman
    role: progress
    purpose: >
      Оператор участка после очного осмотра принимает имущество под
      свою материальную ответственность и подписывает заявление в совет
      об отмене сделки: какой заказ, какое имущество и в каком количестве
      принято, результат осмотра, причина обращения заказчика, суммы
      паевого и членского взносов к восстановлению. Той же подписью он
      визирует рекламацию заказчика — с двумя подписями она уйдёт
      поставщику как гарантийная претензия. Заявление уходит совету по
      типовому процессу решений совета; заказчик уходит домой.
      Движений по средствам на этом шаге нет: имущество лежит на участке,
      баланс заказчика не меняется до решения совета.

  - name: marketplace::onmktrtauth
    human: Совет отменил сделку и восстановил взносы
    actor: council
    role: closer
    purpose: >
      Совет легитимизировал решение оператора: сделка по возврату паевого
      взноса имуществом отменена в части принятого имущества. Все
      движения по выданному заказу откатываются одной серией обратных
      операций: имущество возвращается на склад участка, паевой взнос за
      возвращённое восстанавливается на свободном паевом Стола заказов,
      членский взнос участка за возвращённое количество возвращается из
      общего кошелька участка на членский кошелёк заказчика. Протокол
      решения и заявление оператора публикуются в реестре документов
      пакетом повестки, рекламация — в пакете заказа. Гарантийный возврат
      завершён.

  - name: marketplace::onmktrtdecl
    human: Совет отказал в отмене сделки
    actor: council
    role: progress
    purpose: >
      Совет отказал по заявлению оператора. Баланс заказчика не меняется, имущество
      остаётся на участке; заказчику уходит уведомление, что его нужно
      забрать, оператор звонит и договаривается о времени.

  - name: marketplace::payretfee
    human: Довнести членский взнос по возврату
    actor: backend
    role: closer
    purpose: >
      Когда совет отменил сделку, а общий кошелёк участка к тому моменту был
      уже распределён, имущество и паевой взнос возвращены сразу, а членский
      взнос ждёт пополнения кошелька участка. Как только председатель его
      пополнил, взнос доводится до членского кошелька заказчика этим
      действием — по расписанию, без участия людей. Заявка закрывается.

  - name: marketplace::handback
    human: Выдать имущество обратно заказчику
    actor: chairman
    role: closer
    purpose: >
      Оператор участка отдаёт имущество заказчику обратно после отказа
      совета. Пока совет не решил, имущество ждёт решения на участке.
      Документа не требуется: имущество участок юридически
      не принимал. Заявка закрывается, заказ остаётся выданным с прежним
      гарантийным окном.

  - name: marketplace::rejretrn
    human: Отказать на месте
    actor: chairman
    role: reject
    purpose: >
      Оператор участка по результатам очного осмотра отказывает в
      гарантийном возврате с указанием причины, не принимая имущество.
      Заказчик забирает товар обратно. Движений по имуществу и средствам
      не происходит.

entity: marketplace::return_request
entity_human: Заявление на гарантийный возврат
entity_source: cpp/marketplace/src/p.mkt.return/

# Имена статусов — константы ReturnStatus контракта (retpend, retdecl — новые).
states:
  - name: pendrev
    human: Заявление на рассмотрении
    description: >
      Заявление подано заказчиком и ждёт удалённого рассмотрения
      оператором участка выдачи.
    kind: normal

  - name: approvvisit
    human: Приглашён на участок
    description: >
      Оператор одобрил очное рассмотрение. Заказчику предстоит прийти на
      участок с продукцией для осмотра.
    kind: normal

  - name: retpend
    human: Имущество принято, ждём совет
    description: >
      Оператор принял имущество и подписал заявление в совет об отмене сделки.
      Решение совета принимается по типовому процессу, обычно
      автоматически за секунды. Имущество лежит на участке, баланс
      заказчика не меняется.
    kind: normal

  - name: retdecl
    human: Совет отказал, имущество ждёт заказчика
    description: >
      Совет отказал в принятии имущества. Оно остаётся на участке,
      заказчику предложено прийти и забрать; после выдачи обратно
      заявка закрывается. Движений по средствам нет.
    kind: normal

  - name: feepend
    human: Взнос ждёт пополнения кошелька участка
    description: >
      Совет отменил сделку: имущество на складе участка, паевой взнос
      заказчика восстановлен. Членский взнос за возвращённое вернуть пока
      не из чего — общий кошелёк участка уже распределён. Председатель
      участка пополняет кошелёк, после чего взнос доходит до заказчика
      автоматически.
    kind: normal

transitions:
  - from: "∅"
    to: pendrev
    action: marketplace::submretrn
    actor: orderer
    guards:
      - Заявитель — заказчик-пайщик исходного заказа, по которому имущество уже выдано.
      - Гарантийный срок, заданный поставщиком в предложении, ещё не истёк.
      - К заявлению приложены фотографии товара и указана причина возврата.
      - Возвращаемое количество не больше выданного; сумма возврата считается
        от фактической суммы выдачи — от того, на что заказчик действительно
        вернул паевой взнос имуществом, а не от цены, по которой заказ размещался.

  - from: pendrev
    to: approvvisit
    action: marketplace::aprretrem
    actor: chairman
    guards:
      - Решение принимает кооперативный участок, на котором заказ был выдан.
      - Оператор решил пригласить заказчика на очный осмотр.

  - from: pendrev
    to: "∅"
    action: marketplace::rejretrem
    actor: chairman
    guards:
      - Решение принимает кооперативный участок, на котором заказ был выдан.
      - Оператор решил отказать в гарантийном возврате удалённо с указанием причины.

  - from: approvvisit
    to: retpend
    action: marketplace::accretrn
    actor: chairman
    guards:
      - Решение принимает кооперативный участок, на котором заказ был выдан.
      - Заказчик прибыл на участок с продукцией, оператор осмотрел имущество и решил начать приёмку.
      - Заявление в совет об отмене сделки подписано оператором, принявшим имущество.

  - from: approvvisit
    to: "∅"
    action: marketplace::rejretrn
    actor: chairman
    guards:
      - Решение принимает кооперативный участок, на котором заказ был выдан.
      - Оператор осмотрел имущество и решил отказать с указанием причины — заказчик
        забирает товар обратно, движений по имуществу и средствам не происходит.

  - from: retpend
    to: "∅"
    action: marketplace::onmktrtauth
    actor: council
    ledger_code: p.mkt.return
    operations:
      - o.mkt.return
      - o.brn.retfee
      - o.mkt.refund
    guards:
      - Совет принял решение об отмене сделки и восстановлении взносов по типовому процессу решений совета.
      - На общем кошельке кооперативного участка достаточно средств на возврат членского взноса за возвращаемое количество.
    human: >
      Согласие совета: имущество на складе участка, паевой взнос заказчика за
      возвращённое восстановлен на свободном паевом Стола заказов, членский
      взнос участка сторнирован. Выданный заказ уменьшается на возвращённое
      количество. Заявка закрыта.

  - from: retpend
    to: feepend
    action: marketplace::onmktrtauth
    actor: council
    ledger_code: p.mkt.return
    operations:
      - o.mkt.return
    guards:
      - Совет принял решение об отмене сделки и восстановлении взносов по типовому процессу решений совета.
      - На общем кошельке кооперативного участка не хватает средств на возврат членского взноса.
    human: >
      Решение совета исполняется в части имущества и паевого взноса сразу;
      членский взнос ждёт, пока председатель пополнит общий кошелёк участка.
      Решение из-за нехватки средств участка не падает.

  - from: feepend
    to: "∅"
    action: marketplace::payretfee
    actor: backend
    ledger_code: p.mkt.return
    operations:
      - o.brn.retfee
      - o.mkt.refund
    guards:
      - Общий кошелёк кооперативного участка пополнен на сумму взноса.
    human: >
      Членский взнос за возвращённое доходит до заказчика; заявка закрыта.

  - from: retpend
    to: retdecl
    action: marketplace::onmktrtdecl
    actor: council
    guards:
      - Совет отказал по заявлению; движений по имуществу и средствам нет.

  - from: retdecl
    to: "∅"
    action: marketplace::handback
    actor: chairman
    guards:
      - Заказчик пришёл за имуществом, оператор участка выдал его обратно.

scenario:
  steps:
    - step: 1
      title: Подача заявления
      actor: orderer
      action: marketplace::submretrn
      description: >
        Заказчик подаёт рекламацию — заявление о гарантийном возврате
        имущества: указывает причину обращения, прикладывает фотографии
        товара, ссылается на заказ, по которому получал имущество, и
        подписывает рекламацию. Подать её можно только пока не истёк
        гарантийный срок, заданный поставщиком.
      pre:
        - Заказ закрыт, имущество выдано заказчику.
        - Гарантийный срок ещё не истёк.
        - Приложены фотографии товара и указана причина обращения.
      post:
        - Заявление зарегистрировано и направлено оператору участка на рассмотрение.

    - step: 2
      title: Удалённое рассмотрение — приглашение на участок
      actor: chairman
      action: marketplace::aprretrem
      description: >
        Оператор участка изучает заявление и приложенные материалы и
        решает, что для разбора обращения нужен очный осмотр товара.
        Заказчику предстоит прийти на участок с продукцией.
      pre:
        - Заявление на рассмотрении.
      post:
        - Заказчик приглашён на участок.

    - step: 3
      title: Приём имущества на участке
      actor: chairman
      action: marketplace::accretrn
      description: >
        Заказчик приходит на участок с продукцией. Оператор осматривает
        товар и принимает имущество под свою материальную ответственность,
        подписывая заявление в совет об отмене сделки. Вопрос уходит
        совету по типовому процессу решений совета; заказчик уходит домой.
        Имущество лежит на участке, баланс заказчика пока не меняется.
      pre:
        - Заказчик приглашён на участок.
        - Заказчик прибыл на участок с продукцией.
      post:
        - Имущество принято на участок, заявление оператора об отмене сделки подписано.
        - Ожидается решение совета.

    - step: 4
      title: Решение совета — сделка отменена
      actor: council
      action: marketplace::onmktrtauth
      description: >
        Совет легитимизирует решение оператора об отмене сделки — обычно
        автоматически за секунды. Все движения по выданному заказу
        откатываются обратными операциями: имущество на складе участка,
        паевой взнос заказчика восстановлен на свободном паевом Стола
        заказов, членский взнос участка возвращён на членский кошелёк
        заказчика. Протокол решения и заявление оператора — в пакете
        повестки, рекламация — в пакете документов заказа.
      pre:
        - Имущество принято на участок, ожидается решение совета.
      post:
        - Имущество на складе участка.
        - Паевой взнос заказчика за возвращённое восстановлен; заказчик может направить его на следующий заказ или вывести в общий паевой.
        - Заявка закрыта.

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
        Оператор отказывает в гарантийном возврате удалённо с указанием
        причины — например, обращение очевидно не подпадает под гарантию.
        Движений по имуществу и средствам не происходит.

    - branch: Очный осмотр — отказ без приёма имущества
      at_step: 3
      action: marketplace::rejretrn
      actor: chairman
      description: >
        Оператор отказывает по результатам очного осмотра с указанием
        причины — например, характер повреждений не покрывается
        гарантией. Имущество не принимается, заказчик забирает товар
        обратно. Движений по имуществу и средствам не происходит.

    - branch: Совет отказал — имущество ждёт заказчика
      at_step: 4
      action: marketplace::onmktrtdecl
      actor: council
      description: >
        Совет отказал в отмене сделки. Баланс заказчика не меняется,
        имущество остаётся на участке. Оператор звонит заказчику и
        предлагает забрать; после выдачи обратно заявка закрывается.
        Пока совет не решил, выдать имущество обратно нельзя — оно ждёт
        решения на участке.

documents:
  - action: marketplace::submretrn
    title: Заявление о гарантийном возврате имущества (рекламация)
    registry_id: 1106
    signed_by: [orderer]
    stored_in: return_requests.statement
    note: "Рекламация заказчика, как в членской модели: причина обращения, фотографии через doc_data, возвращаемое количество и сумма от фактической выдачи. Публикуется в пакете документов заказа при подаче и отмечается исполненной при исполнении решения совета."

  - action: marketplace::accretrn
    title: Заявление об отмене сделки по гарантийному возврату имущества
    registry_id: 1116
    signed_by: [chairman]
    stored_in: return_requests.cancel_statement
    note: "Заявление оператора участка в совет (задача 99D-12): заказ и принятое имущество, результат осмотра, причина обращения заказчика, суммы паевого и членского взносов к восстановлению. Подписывает только оператор, принявший имущество; заказчик ничего не вносит. Оно же — документ повестки совета, публикуется пакетом повестки."

  - action: marketplace::accretrn
    title: Заявление о гарантийном возврате имущества (рекламация), вторая подпись оператора участка
    registry_id: 1106
    signed_by: [orderer, chairman]
    stored_in: return_requests.statement
    note: "Та же рекламация, что подал заказчик, дополненная подписью оператора, принявшего имущество, без регенерации (канон DocumentAggregate). С двумя подписями уходит поставщику как гарантийная претензия при исполнении решения совета (стандарт p.mkt.claim, задача 99D-13)."

  - action: marketplace::onmktrtauth
    title: Протокол решения совета об отмене сделки по гарантийному возврату имущества
    registry_id: 1117
    signed_by: [council]
    stored_in: null
    note: "Подписывается председателем совета по типовому процессу решений совета — обычно роботом решений совета; номер и дата решения берутся из цепи, деловые поля — из заявления оператора. Заявка после исполнения решения стирается, протокол остаётся в пакете повестки."

operations:
  - ledger_code: o.mkt.return
    human_name: Отмена сделки — имущество на склад, паевой взнос восстановлен
    wallet_op: ISSUE
    debit: 10                      # Материалы — имущество на складе
    credit: 80                     # Паевой фонд
    wallet_from: null              # эмиссия — источника нет
    wallet_to: w.mkt.share         # Свободный паевой Стола заказов пайщика
    user_wallet: w.mkt.share
    user_ref: return_request.orderer
    available_delta: +return_request.refund_cost
    blocked_delta: null
    amount_ref: return_request.refund_cost
    triggered_by: marketplace::onmktrtauth
    description: >
      Обратная операция к выдаче имущества по решению совета: паевой взнос
      заказчика за возвращённое количество восстанавливается на свободном
      паевом Стола заказов, имущество возвращается на склад участка.
      Двойная запись Дт 10 / Кт 80 — зеркало выдачи: паевой фонд растёт на
      стоимость принятого имущества. Исходные записи выдачи не меняются;
      возврат ссылается на них для трассировки. Выплата поставщику не
      отменяется — претензия поставщику идёт вне этого процесса.
      Восстановленная сумма остаётся в программе: идёт на следующие заказы
      либо выводится в общий паевой отдельным действием (TBD-Standardization).

  - ledger_code: o.brn.retfee
    human_name: Возврат членского взноса из общего кошелька кооперативного участка
    wallet_op: TRANSFER
    debit: null
    credit: null
    wallet_from: w.brn.common      # Общий кошелёк кооперативного участка
    wallet_to: w.mkt.fee           # Пул членских взносов «Стола заказов»
    user_wallet: w.brn.common
    user_ref: return_request.braname
    available_delta: -return_request.fee_refund
    blocked_delta: null
    amount_ref: return_request.fee_refund
    triggered_by: marketplace::onmktrtauth | marketplace::payretfee
    description: >
      Членский взнос за возвращаемое имущество уходит обратно из общего
      кошелька кооперативного участка — туда он был зачислен при выдаче
      заказа. Возвращается доля, приходящаяся на возвращаемое количество:
      при возврате всего выданного пайщик получает уплаченный взнос целиком.
      Средства должны быть на общем кошельке участка: взнос поступает туда
      сразу при выдаче, а возврат приходит в течение гарантийного срока, и
      участок мог успеть распределить или потратить эти средства. Тогда
      решение совета исполняется без взноса, заявка ждёт пополнения общего
      кошелька, и взнос доходит до заказчика позже (payretfee).

  - ledger_code: o.mkt.refund
    human_name: Сторно членского взноса участка на членский кошелёк программы
    wallet_op: TRANSFER
    # L1 — без проводки: оба кошелька на счёте 86, членский остаётся членским
    debit: null
    credit: null
    wallet_from: w.mkt.fee         # Пул членских взносов «Стола заказов»
    wallet_to: w.mkt.member        # Членский взнос пайщика в Столе заказов
    user_wallet: w.mkt.member
    user_ref: return_request.orderer
    available_delta: +return_request.fee_refund
    blocked_delta: null
    amount_ref: return_request.fee_refund
    triggered_by: marketplace::onmktrtauth | marketplace::payretfee
    description: >
      Вторая часть возврата взноса: средства доходят с пула членских взносов
      до членского кошелька заказчика в программе и остаются членскими —
      они зачитываются в счёт взноса по следующему заказу. Паевой взнос за
      имущество восстанавливается отдельно на свободном паевом. Возврат
      идёт двумя шагами, потому что общий кошелёк участка ведётся в разрезе
      участка, а членский — в разрезе пайщика, и одним переводом их не
      связать (TBD-Standardization).
`,Hf=`# ─────────────────────────────────────────────────────────────────────────────
# Стандарт «Прямая поставка-приобретение имущества» — кооперативный процесс,
# при котором поставщик-пайщик передаёт имущество кооперативу, а заказчик-
# пайщик получает его как возврат своего паевого взноса по ЦПП «Стол заказов».
#
# Паевая модель (решение владельца проекта 06.09.2026, компонент 68
# «Паевая модель заказчика»). Прежняя членская модель (резерв и остатки на
# счёте 86, заявление о конвертации, акт выдачи с первой подписью председателя)
# снята целиком; её редакция стандарта — в истории репозитория.
#
# Стандарт описывает целевое состояние: контракт на ветке dev до завершения
# компонента 68 исполняет прежнюю модель. Имена новых действий, статусов и
# операций — кандидаты, согласуются до кода (задачи 99D-3, 99D-4, 99D-6).
#
# **Движение средств:**
# Средства заказчика остаются паевым взносом от заказа до выдачи: с паевого
# кошелька Цифрового кошелька они переходят в паевой резерв под конкретный
# заказ, при отмене или недовыдаче — на свободный паевой Стола заказов, откуда
# идут на следующие заказы, доплаты или выводятся обратно в общий паевой.
# При выдаче резерв гасится возвратом паевого взноса имуществом. Отдельно
# от тела заказа с паевого берётся членский взнос кооперативного участка по
# единой ставке — он и остаётся единственным членским взносом процесса.
# Имущество отслеживается бухгалтерской аналитикой по счёту 10 (учёт по
# складу участка), без отдельного кошелька.
#
# **Денежные шаги процесса:**
# При создании заказа паевой взнос заказчика резервируется под заказ; при
# отмене резерв уходит на свободный паевой Стола заказов, членский взнос
# сторнируется; при приёмке имущество приходуется на склад с обязательством
# перед поставщиком; поставщику уходит оплата с расчётного счёта; при выдаче
# по заявлению, протоколу совета и акту паевой взнос возвращается имуществом.
#
# Проводки закупки (Дт 10 / Кт 76, Дт 76 / Кт 51), выдачи (Дт 80 / Кт 10) и
# сторно взноса (Дт 86 / Кт 80) — предложение бухгалтеру (TBD-Standardization).
# Расчёты с поставщиком идут по счёту 76 «Расчёты с разными дебиторами и
# кредиторами» (решение владельца 08.09.2026); счёт 60 в план не вводится.
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
  поставщика имущество и вносит под этот заказ паевой взнос, кооператив
  принимает имущество на склад участка и затем возвращает заказчику
  паевой взнос этим имуществом. Процесс описывает весь путь — от
  размещения заказа до передачи имущества на руки заказчику.

  Как это устроено по шагам.

  Поставщик-пайщик публикует предложение поставить имущество — в нём
  он указывает товар, цену, минимальное количество, при котором ему
  выгодно собрать партию, и срок, до которого собирает заказы. Это
  предложение и есть исходная точка процесса.

  Пока предложение открыто, заказчики-пайщики добавляют к нему свои
  заказы. Этот период называется циклом отсечки заявок — окно, в
  течение которого кооператив принимает заказы под одно предложение
  поставщика. При создании заказа часть паевого взноса заказчика
  переходит в паевой резерв под этот заказ — до конца цикла она не
  может быть использована. Вместе с ней с паевого берётся членский
  взнос кооперативного участка по единой ставке.

  Когда цикл завершается, кооператив смотрит, набрался ли минимальный
  порог поставки — заданное поставщиком количество заказов, при
  котором партию имеет смысл везти. Если порог набрался — все заказы
  цикла объединяются в одну консолидированную заявку, и она уходит
  поставщику на акцепт. Если не набрался — все заказы цикла
  отменяются, резерв возвращается заказчикам на свободный паевой
  Стола заказов.

  Поставщик соглашается выполнить консолидированную заявку, готовит
  партию и передаёт её на кооперативный участок. Приёмка оформляется
  актом приёма-передачи с двойной подписью: первой — поставщик
  подтверждает передачу, второй — председатель участка подтверждает
  приёмку. С этого момента кооператив юридически принял имущество,
  поставщику уходит оплата.

  Дальше имущество поступает на участок выдачи, и заказчик приходит на
  пункт выдачи. Оператор сверяет состав и отправляет факт на подпись.
  Заказчик одним нажатием подписывает заявление о возврате паевого
  взноса имуществом, совет принимает решение по типовому процессу
  (обычно за секунды, автоматически), заказчик первым подписывает акт
  приёма-передачи, а председатель участка закрывает выдачу второй
  подписью. Заказ закрыт, начинается гарантийное окно.
roles:
  - orderer        # пайщик-заказчик
  - offerer        # пайщик-поставщик
  - chairman       # председатель кооперативного участка (приёмка и выдача)
  - council        # совет кооператива (решение по возврату паевого взноса имуществом)
  - backend        # автоматизированная служба кооператива
  - gateway        # система процессинга платежей (подтверждает или отклоняет факт банковского перевода)

# ── Секция 2. Действия контракта (блокчейн-уровень) ─────────────────────────
# Имена actions ≤12 символов eosio::name.
actions:
  - name: marketplace::convert
    human: Перевести паевой взнос в программу
    actor: orderer
    role: opener
    purpose: >
      Заказчик подписывает заявление о переводе паевого взноса в программу
      на то, чего не хватило в его кошельках Стола заказов: остаток тела
      сверх свободного паевого и членский взнос за вычетом остатка членского
      кошелька. Членская часть переходит на членский кошелёк программы этой
      же транзакцией, паевая уйдёт в резерв при создании заказа. Если
      кошельков программы хватает, заявление не подаётся.

  - name: marketplace::createorder
    human: Создать заказ
    actor: orderer
    role: opener
    purpose: >
      Заказчик размещает заказ на товар из каталога: указывает количество
      и кооперативный участок, на котором заберёт товар. Часть паевого
      взноса заказчика переходит в паевой резерв под этот заказ — до
      окончания цикла поставки она не может быть использована. Вместе со
      стоимостью имущества заказчик уплачивает членский взнос кооперативного
      участка по единой ставке кооператива — его сумма явно фиксируется в
      заказе и входит в общую стоимость для заказчика. Само тело заказа
      заявления не требует: паевой взнос остаётся паевым в том же
      кооперативе. Два кошелька заказчика в Столе заказов оплачивают каждый
      свою часть: членский взнос участка — внутренний членский кошелёк, тело
      заказа — свободный паевой Стола заказов (туда возвращаются членские и
      паевые средства при отменах, недовыдачах и гарантийных возвратах);
      остаток тела резервируется с Цифрового кошелька. Если чего-то не
      хватает, заказчик подаёт заявление о переводе недостающего — перевод
      идёт первым действием той же транзакции, что и заказы оформления,
      поэтому при отказе в любом заказе откатывается вместе с ними.
      Заказ становится частью консолидированной
      заявки поставщику.

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
      выдаче на том же участке. Заказ со склада оплачивается со свободного
      паевого Стола заказов заказчика — из того, что вернулось ему за
      отмены и недовыдачи, а остаток тела — с Цифрового кошелька, взнос
      участка — с внутреннего членского кошелька. Если кошельков программы не
      хватает, заказчик у стойки подписывает заявление о переводе недостающего
      на весь бандл. Если паевого не хватает и на Цифровом кошельке, заказ не
      создаётся; заказчик
      пополняет паевой взнос и размещает обычный заказ.

  - name: marketplace::cancelorder
    human: Отменить заказ
    actor: orderer
    role: progress
    purpose: >
      Заказчик отменяет заказ до того, как поставщик принял
      консолидированную заявку в работу. Кооператив возвращает резерв на
      свободный паевой Стола заказов и сторнирует членский взнос — заказчик
      снова свободно распоряжается средствами в рамках программы. Заказ со
      склада кооператива отменяется до начала выдачи. После акцепта
      поставщиком отмена становится отказом от получения с удержанием
      половины; если имущество уже принято, а поставщику ещё не выплачено,
      заказ остаётся в состоянии «отказ» до подтверждения выплаты кассиром
      и закрывается вместе с ней.

  - name: marketplace::expireorder
    human: Закрыть цикл отсечки заявок
    actor: backend
    role: progress
    purpose: >
      Цикл отсечки заявок поставщика завершается. Кооператив сверяет
      количество заказов с минимальным порогом поставки, заданным
      поставщиком. Если порог набрался — заказы объединяются в
      консолидированную заявку и направляются поставщику для акцепта.
      Если порог не набрался — все заказы цикла отменяются, резерв
      возвращается заказчикам на свободный паевой Стола заказов. Тем же
      действием кооператив закрывает заказ, который поставщик принял, но не
      привёз за 48 часов: заказчику возвращаются резерв и членский взнос
      полностью, без удержания — вина не его.

  - name: marketplace::closeorder
    human: Закрыть выданный заказ по выходу гарантийного срока
    actor: backend
    role: closer
    purpose: >
      Автоматизированная служба по расписанию закрывает выданные заказы,
      по которым гарантийный срок вышел, выплата поставщику завершена и
      гарантийный возврат не открыт. Закрытие завершает жизненный цикл
      заказа — его запись удаляется, история заказа (документы, выплата,
      гарантия) сохраняется в журнале действий. До выхода гарантийного
      срока закрытие не допускается.

  - name: marketplace::acceptorder
    human: Акцептовать заказ в составе заявки
    actor: offerer
    role: progress
    purpose: >
      Поставщик соглашается выполнить консолидированную заявку и берёт
      на себя обязательство собрать и передать партию кооперативу.
      Акцепт ставится по каждому заказу заявки; заказ переходит от
      ожидания к подготовке отгрузки.

  - name: marketplace::declineorder
    human: Отказаться от заказа в составе заявки
    actor: offerer
    role: reject
    purpose: >
      Поставщик отказывается выполнить заказ из консолидированной заявки
      либо кооператив не принимает привезённую позицию на приёмке. Заказ
      отменяется, резерв возвращается заказчику на свободный паевой Стола
      заказов, членский взнос сторнируется. Договорные санкции при отказе —
      вне этого процесса, по регламенту кооператива.

  - name: marketplace::signsupp
    human: Поставщик передал партию
    actor: offerer
    role: progress
    purpose: >
      Поставщик первой подписью на акте приёма-передачи подтверждает,
      что передал партию кооперативу. Имущество физически на складе
      участка, но юридически ещё не оприходовано — выдача заказчикам
      открывается только после второй подписи председателя. При
      доставке через экспедитора партия сопровождается транспортной
      накладной, которую печатают из системы; подписи на ней ставятся
      на бумаге.

  - name: marketplace::signchair
    human: Председатель принял поставку
    actor: chairman
    role: progress
    purpose: >
      Председатель участка ставит вторую — завершающую — подпись на
      акте приёма-передачи. С этого момента партия юридически принята
      кооперативом, имущество приходуется на склад участка, а у
      кооператива возникает обязательство выплатить поставщику. Сама
      выплата — отдельным шагом по факту подтверждения кассиром
      банковского перевода. Двухподписный акт приёма-передачи
      публикуется в реестре документов кооператива в пакете процесса
      заказа.

  - name: marketplace::payout
    human: Инициировать выплату поставщику
    actor: backend
    role: progress
    purpose: >
      Кооператив регистрирует исходящий платёж поставщику в системе
      процессинга платежей на принятую по акту приёмки сумму (если на
      приёмке часть поставки отбраковали — поставщику причитается только
      за принятое, не за исходный заказ). Сколько потом выдали заказчику,
      на эту сумму не влияет: долг поставщику сложился на приёмке. Если у
      поставщика есть признанный
      гарантийный долг, перевод уменьшается на его остаток, но не больше
      самой выплаты; когда долг покрывает всю выплату, перевода нет и
      выплата завершается сразу. По этому запросу кассир увидит у себя в
      столе задачу — провести банковский перевод. Бухгалтерия по выплате
      на этом шаге ещё не двигается: обязательство перед поставщиком
      остаётся открытым до подтверждения кассиром.

  - name: marketplace::payconfirm
    human: Выплата поставщику подтверждена
    actor: gateway
    role: progress
    purpose: >
      После подтверждения кассиром обязательство перед поставщиком
      закрывается, а расход с расчётного счёта отражается в бухгалтерии.
      Удержанная в счёт гарантийного долга часть выплаты гасит этот долг.
      Статус заказа не меняется — выплата шла параллельно шагам выдачи.

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

  - name: marketplace::readyissue
    human: Имущество поступило на участок выдачи
    actor: chairman
    role: progress
    purpose: >
      Оператор участка выдачи отмечает, что имущество по заказу поступило
      на его участок и готово к передаче заказчику. Подписи и документов
      на этом шаге нет; заказчику уходит уведомление, что заказ можно
      забирать.

  - name: marketplace::issuestmt
    human: Заказчик подал заявление о возврате паевого взноса имуществом
    actor: orderer
    role: progress
    purpose: >
      Заказчик на пункте выдачи после сверки состава подписывает заявление
      о возврате паевого взноса имуществом на фактически выдаваемое
      количество. Фактические количество и цена фиксируются в заказе.
      Заявление уходит на решение совета по типовому процессу решений
      совета; обычно решение принимается автоматически за секунды. Если
      выдаётся больше заказанного и членского кошелька программы не
      хватает на довзнос участка, перед заявлением заказчик подписывает
      заявление о переводе недостающей суммы со свободного паевого. Под одним
      нажатием заказчика лежат и эти заявления, и последующая первая подпись
      акта.

  - name: marketplace::onmktisauth
    human: Совет решил вернуть паевой взнос имуществом
    actor: council
    role: progress
    purpose: >
      Совет кооператива принял решение о возврате паевого взноса
      имуществом по заявлению заказчика. Протокол решения ложится в
      заказ, и заказчику предлагается подписать акт приёма-передачи.

  - name: marketplace::onmktisdecl
    human: Совет отказал в возврате паевого взноса имуществом
    actor: council
    role: reject
    purpose: >
      Совет кооператива отказал по заявлению. Заказ возвращается в
      состояние «готов к выдаче», заявление снимается, движений по
      средствам и имуществу нет. Заказчик может обратиться повторно
      после разбора причин отказа.

  - name: marketplace::issueact1
    human: Заказчик подписал акт приёма-передачи
    actor: orderer
    role: progress
    purpose: >
      Заказчик первой подписью на акте приёма-передачи подтверждает
      готовность принять имущество во исполнение решения совета. Подпись
      ставится устройством заказчика без нового нажатия — как продолжение
      того же действия «Подписать и получить». Движений по средствам ещё
      нет: до закрывающей подписи председателя ничего не состоялось.

  - name: marketplace::issueact2
    human: Председатель участка передал имущество
    actor: chairman
    role: closer
    purpose: >
      Председатель участка выдачи ставит вторую — закрывающую — подпись
      на акте приёма-передачи; обычно она ставится автоматически, пока
      открыт экран выдачи, ручная кнопка остаётся запасным путём. Только
      на этой подписи паевой взнос заказчика возвращается имуществом, а
      имущество выбывает со склада. Если фактически выданное расходится
      с заказом, сумма корректируется до фактической: при меньшем
      количестве остаток резерва уходит на свободный паевой Стола заказов,
      при большем — доплата берётся оттуда же; при нехватке выдача не
      закрывается, и оператор корректирует состав до суммы, на которую
      хватает. Членский взнос участка пересчитывается пропорционально
      факту: излишек сторнируется на паевой, недостающее добирается со
      свободного паевого, и весь фактический взнос зачисляется в общий
      кошелёк кооперативного участка выдачи (типовой процесс членских
      взносов кооперативного участка). Заказ закрыт, открывается
      гарантийное окно. Заявление, протокол и двухподписный акт
      публикуются в реестре документов кооператива в пакете процесса
      заказа — рядом с актом приёмки. Имущество передаётся заказчику на
      руки только после того, как заказ показан как полученный на экране
      оператора.

  - name: marketplace::cancelissue
    human: Отменить начатую выдачу
    actor: chairman
    role: reject
    purpose: >
      Оператор участка отменяет начатую выдачу, если заказчик не подписал
      акт или ушёл: заказ возвращается в состояние «готов к выдаче»,
      заявление, протокол и акт снимаются, резерв не трогается. Пока
      совет не ответил по заявлению, отмена невозможна.


  - name: marketplace::markdown
    human: Списать уценку при выдаче
    actor: backend
    role: progress
    purpose: >
      Имущество оприходовано на склад по цене прибытия, а выдано пайщику
      могло быть дешевле: остаток кооператива публикуется с уценкой, а брак
      внутри неделимой упаковки оператор отражает ценой на месте. Поднять цену
      при выдаче нельзя, снизить можно. Чтобы на складе не зависала разница за
      имущество, которого физически уже нет, после выдачи она выбывает со
      склада в прочие расходы кооператива. Так выбытие проходит по полной
      стоимости прибытия: часть закрывается возвратом паевого взноса
      имуществом по акту выдачи, разница — расходом. Накопленный расход
      позже погашается отдельным решением — по образцу списания скоропорта.

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

# ── Секция 3. Граф состояний ────────────────────────────────────────────────
# Сущность: marketplace::order (таблица orders, scope=coopname).
# Имена статусов — константы OrderStatus контракта.
entity: marketplace::order
entity_human: Заказ на поставку
entity_source: cpp/marketplace/src/

states:
  - name: active
    human: Заказ размещён
    description: >
      Заказ создан и ждёт завершения цикла отсечки заявок и акцепта
      поставщика. Часть паевого взноса заказчика переведена в паевой
      резерв под этот заказ, членский взнос участка отложен.
    kind: normal

  # Отмена заказа (заказчиком до акцепта / кооперативом по итогам закрытия
  # цикла без достижения порога / поставщиком при отказе) — терминал
  # жизненного цикла: запись заказа удаляется, резерв уходит на свободный
  # паевой Стола заказов, история заказа сохраняется в журнале действий.
  - name: accepted
    human: Заявка акцептована
    description: >
      Поставщик согласился выполнить консолидированную заявку. Паевой
      резерв заказчика сохраняется; поставщик готовит партию к отгрузке
      и передаёт её на участок — сам или через экспедитора.
    kind: normal

  - name: supplyprep
    human: Имущество поставлено
    description: >
      Поставщик передал партию на участок и подтвердил это первой
      подписью на акте приёма-передачи. Имущество физически на складе
      участка, но юридически ещё не оприходовано — выдача заказчикам
      откроется только после второй подписи председателя.
    kind: normal

  - name: acceptcoop
    human: Поставка принята кооперативом
    description: >
      Председатель участка завершил приёмку второй подписью. Партия
      юридически принята кооперативом, имущество числится на складе
      участка и ждёт передачи на участок выдачи. Обязательство выплатить
      поставщику открыто; сама выплата проводится отдельным шагом после
      того, как кассир подтвердит банковский перевод.
    kind: normal

  - name: readyrecv
    human: Заказ готов к выдаче
    description: >
      Имущество на участке выдачи, заказчик может прийти и забрать заказ.
      На пункте выдачи оператор сверяет состав и отправляет факт на
      подпись заказчику.
    kind: normal

  - name: issuepend
    human: Заявление подано, ждём совет
    description: >
      Заказчик подписал заявление о возврате паевого взноса имуществом на
      фактический состав. Решение совета принимается по типовому процессу,
      обычно автоматически за секунды. Движений по средствам нет.
    kind: normal

  - name: issueauth
    human: Совет решил, ждём подпись заказчика
    description: >
      Протокол решения совета получен. Устройство заказчика подписывает
      акт приёма-передачи первой подписью без нового нажатия. Если
      связь оборвалась, подпись досылается при возвращении в приложение.
    kind: normal

  - name: issueact1
    human: Акт подписан заказчиком, ждём закрытие
    description: >
      На акте стоит первая подпись заказчика. Устройство оператора ставит
      закрывающую подпись автоматически, пока открыт экран выдачи; ручная
      кнопка «Закрыть выдачу» — запасной путь. До закрытия имущество
      заказчику не передаётся.
    kind: normal

  - name: received
    human: Имущество выдано
    description: >
      Заказчик получил имущество как возврат паевого взноса. Открыто
      гарантийное окно — в его пределах заказчик может подать заявление
      на возврат, если товар окажется некондиционным. После выхода
      гарантийного срока заказ закрывается автоматически: запись
      удаляется, история заказа сохраняется в журнале действий.
    kind: normal

  - name: refused
    human: Отказ, ждём расчёт с поставщиком
    description: >
      Заказчик отказался от получения уже после того, как кооператив
      принял имущество. Половина стоимости и взноса удержана в общий
      кошелёк участка, вторая половина вернулась заказчику, имущество
      осталось на складе участка обезличенным остатком. Долг поставщику
      за принятое никуда не делся: выплата идёт своим чередом, и как только
      кассир её подтвердит, запись заказа закрывается. Заказчику здесь
      делать больше нечего.
    kind: normal

transitions:
  - from: "∅"
    to: active
    action: marketplace::createorder
    actor: orderer
    ledger_code: p.mkt.supply
    operations:
      - o.mkt.fee
      - o.mkt.lockp
      - o.mkt.lock
    guards:
      - На внутреннем членском кошельке заказчика достаточно на членский взнос участка (недостающее переведено заранее по заявлению).
      - Свободного паевого Стола заказов вместе с Цифровым кошельком достаточно на тело заказа.
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
    to: acceptcoop
    action: marketplace::stockorder
    actor: orderer
    ledger_code: p.mkt.supply
    operations:
      - o.mkt.fee
      - o.mkt.lockp
      - o.mkt.lock
    guards:
      - Заказчик — активный пайщик кооператива.
      - Заказчик подписал Соглашение ЦПП «Стол заказов».
      - Имущество есть в свободном остатке склада участка и предложено к приобретению оператором участка.
      - На свободном паевом Стола заказов заказчика достаточно для стоимости заказа и недостающей до членского взноса части.
      - На внутреннем членском кошельке заказчика достаточно на членский взнос участка (недостающее переведено заранее по заявлению).
      - Пункт выдачи — тот же участок, на складе которого лежит остаток.

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
      обязательство и ничего не везёт — резерв возвращается заказчику на
      свободный паевой Стола заказов, членский взнос сторнируется.

  - from: acceptcoop
    to: "∅"
    action: marketplace::cancelorder
    actor: orderer
    ledger_code: p.mkt.supply
    operations:
      - o.mkt.unlock
      - o.mkt.refund
    guards:
      - Заказ сделан из свободного остатка склада кооператива (по нему поставщика нет).
      - Выдача по заказу ещё не начата.
    human: >
      Бесплатная отмена заказа из остатка склада: поставщика и риска перед ним
      нет, поэтому резерв и членский взнос возвращаются заказчику полностью.

  - from: accepted | supplyprep | acceptcoop
    to: "∅"
    action: marketplace::cancelorder
    actor: orderer
    ledger_code: p.mkt.supply
    operations:
      - o.mkt.unlock
      - o.mkt.penal
      - o.mkt.refund
      - o.brn.common
    guards:
      - Поставщик уже принял заявку в работу (для заказа из обычной поставки, не из остатка).
      - Выдача по заказу ещё не начата.
      - Если имущество уже принято кооперативом — выплата поставщику подтверждена.
    human: >
      Отказ от получения после того, как поставщик принял заявку. Поставщик уже
      обязался доставить имущество, а кооператив несёт риск его оплаты, поэтому
      кооператив удерживает половину стоимости заказа и половину членского
      взноса в общий кошелёк кооперативного участка; имущество остаётся на
      складе участка. Вторая половина возвращается заказчику на свободный
      паевой Стола заказов. Основание удержания в положении о ЦПП — вопрос
      методологу (TBD-Standardization).

  - from: acceptcoop
    to: refused
    action: marketplace::cancelorder
    actor: orderer
    ledger_code: p.mkt.supply
    operations:
      - o.mkt.unlock
      - o.mkt.penal
      - o.mkt.refund
      - o.brn.common
    guards:
      - Имущество принято кооперативом, выдача ещё не начата.
      - Выплата поставщику ещё не подтверждена кассиром.
    human: >
      Тот же отказ с удержанием половины, но долг поставщику за принятое
      имущество ещё открыт. Запись заказа остаётся, пока кассир не подтвердит
      выплату: подтверждение и отклонение перевода находят заказ именно по
      ней, а без неё подтверждение кассира откатывалось бы целиком и долг
      навсегда оставался бы на счёте расчётов с поставщиками.

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

  - from: accepted
    to: "∅"
    action: marketplace::expireorder
    actor: backend
    ledger_code: p.mkt.supply
    operations:
      - o.mkt.unlock
      - o.mkt.refund
    guards:
      - Поставщик принял заказ, и с момента принятия прошло 48 часов.
      - Поставщик не подписал акт приёмки — имущество не привезено.
    human: >
      Непоставка. Кооператив закрывает заказ без удержания: резерв возвращается
      заказчику на свободный паевой Стола заказов, членский взнос сторнируется
      полностью — вина не заказчика.

  - from: active
    to: accepted
    action: marketplace::acceptorder
    actor: offerer
    guards:
      - Минимальный порог поставки достигнут к концу цикла отсечки.
      - Действие выполняет тот поставщик, чьё предложение лежит в основе консолидированной заявки.

  - from: active
    to: "∅"
    action: marketplace::declineorder
    actor: offerer
    ledger_code: p.mkt.supply
    operations:
      - o.mkt.unlock
      - o.mkt.refund
    guards:
      - Поставщик ещё не акцептовал заказ.

  - from: accepted | supplyprep
    to: "∅"
    action: marketplace::declineorder
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
      этапе), заказчику полностью возвращаются резерв и членский взнос:
      непринятие — не его вина.

  - from: accepted
    to: supplyprep
    action: marketplace::signsupp
    actor: offerer
    guards:
      - На участок передана партия точно в составе акцептованной заявки — самовывозом поставщика или через экспедитора.
      - При самовывозе поставщик ставит первую подпись на акте приёма-передачи лично на участке.
      - При доставке через экспедитора председатель и экспедитор очно сверяют партию, и поставщик ставит первую подпись дистанционно в установленный кооперативом срок.

  - from: supplyprep
    to: acceptcoop
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
  - from: acceptcoop | refused
    to: acceptcoop | refused
    action: marketplace::payout
    actor: backend
    ledger_code: p.mkt.supply
    operations:
      - o.mkt.deduct
      - o.mkt.offset
    guards:
      - Приёмка поставки кооперативом завершена.
      - По этому заказу выплата ещё не идёт и не завершена.
    human: >
      Признанный гарантийный долг поставщика удерживается в момент, когда
      сумма перевода определена: так вторая выплата тому же поставщику видит
      уже уменьшенный долг и не удерживает его повторно. Если долг покрыл всю
      сумму, банковского перевода не будет и выплата закрывается сразу.

  - from: acceptcoop
    to: acceptcoop
    action: marketplace::payconfirm
    actor: gateway
    ledger_code: p.mkt.supply
    operations:
      - o.mkt.payout
    guards:
      - Подтверждение пришло из системы процессинга платежей.
      - По заказу ожидается подтверждение выплаты.
    human: >
      Выплата проводится на принятую по акту приёмки сумму за вычетом
      удержанного долга — ровно ту, что кассир перевёл в банк. Сколько к
      этому моменту выдано заказчику, значения не имеет.

  - from: refused
    to: "∅"
    action: marketplace::payconfirm
    actor: gateway
    ledger_code: p.mkt.supply
    operations:
      - o.mkt.payout
    guards:
      - Подтверждение пришло из системы процессинга платежей.
      - Заказчик отказался от получения после приёмки, выплата ожидала подтверждения.
    human: >
      Долг поставщику погашен, заказчик от имущества отказался раньше —
      запись заказа больше не нужна и удаляется, история остаётся в
      журнале действий.

  - from: acceptcoop | refused
    to: acceptcoop | refused
    action: marketplace::paydecline
    actor: gateway
    guards:
      - Сообщение об отказе пришло из системы процессинга платежей.
      - По заказу ожидается подтверждение выплаты.

  - from: acceptcoop
    to: readyrecv
    action: marketplace::readyissue
    actor: chairman
    guards:
      - Партия принята кооперативом и числится на складе.
      - Имущество по заказу поступило на участок выдачи; отмечает оператор этого участка.

  - from: readyrecv
    to: issuepend
    action: marketplace::issuestmt
    actor: orderer
    guards:
      - Заказчик лично присутствует на пункте выдачи участка.
      - Оператор сверил фактически выдаваемое имущество с составом заказа и отправил факт на подпись.
      - Заявление подписано заказчиком на фактические количество и цену.
      - Цена выдачи не выше цены, по которой имущество числится на складе участка; для заказа из остатка — не выше цены заказа. Снизить цену можно, поднять нельзя.

  - from: issuepend
    to: issueauth
    action: marketplace::onmktisauth
    actor: council
    guards:
      - Совет принял решение о возврате паевого взноса имуществом по типовому процессу решений совета.

  - from: issuepend
    to: readyrecv
    action: marketplace::onmktisdecl
    actor: council
    guards:
      - Совет отказал по заявлению; заявление снимается, движений нет.

  - from: issueauth
    to: issueact1
    action: marketplace::issueact1
    actor: orderer
    guards:
      - В заказе есть протокол решения совета.
      - Акт подписан заказчиком и ссылается на этот протокол.

  - from: issueact1
    to: received
    action: marketplace::issueact2
    actor: chairman
    ledger_code: p.mkt.supply
    operations:
      - o.mkt.unlock
      - o.mkt.lockp
      - o.mkt.lock
      - o.mkt.consum
      - o.mkt.refund
      - o.mkt.fee
      - o.brn.common
    guards:
      - На акте имеется первая подпись заказчика.
      - Закрывающую подпись ставит председатель, доверенное лицо или оператор участка выдачи.
      - При расхождении факта с заказом сумма скорректирована до фактической; при факте больше заказа на свободном паевом Стола заказов достаточно средств на доплату и довзнос.

  - from: issueauth | issueact1
    to: readyrecv
    action: marketplace::cancelissue
    actor: chairman
    guards:
      - Заказчик не подписал акт либо отказался от получения после решения совета.
      - Заявление, протокол и акт снимаются с заказа; резерв не трогается.

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

  # Уценка при выдаче: после завершения выдачи разница между стоимостью
  # прибытия выданного и фактической суммой выдачи выбывает со склада в прочие
  # расходы. Относится и к заказу из остатка, и к заказу поставщика, выданному
  # дешевле цены приёмки. Статус заказа не меняется.
  - from: received
    to: received
    action: marketplace::markdown
    actor: backend
    ledger_code: p.mkt.supply
    operations:
      - o.mkt.loss
    guards:
      - Выдача по заказу завершена обеими подписями акта дешевле цены, по которой имущество числится на складе.
      - Уценка по этому заказу ещё не списывалась.
      - Для заказа поставщика уценка вместе с суммой выдачи не превышает стоимость, по которой имущество принято кооперативом.

  # Перевод паевого взноса в программу по заявлению: действие пайщика до
  # заказа, вне жизненного цикла конкретного заказа.
  - from: "∅"
    to: "∅"
    action: marketplace::convert
    actor: orderer
    ledger_code: p.mkt.supply
    operations:
      - o.mkt.conv
    guards:
      - Заявление подписано заказчиком.
      - На Цифровом кошельке заказчика достаточно паевого на членскую часть перевода.
    human: >
      Заказчик по заявлению переводит с Цифрового кошелька то, чего не
      хватило в кошельках Стола заказов на следующий заказ; членская часть
      сразу переходит на членский кошелёк программы, паевая часть уйдёт в
      резерв при создании заказа. Перевод адресуется заказам, которые он
      оплачивает, и виден первой операцией их процессов — отдельного
      процесса по заявлению не заводится.

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
        превышает упрощённый порог приёма имущества, переводит часть
        паевого взноса заказчика в резерв под этот заказ и откладывает
        членский взнос участка. Заказ присоединяется к текущему циклу
        отсечки заявок поставщика.
      pre:
        - Заказчик — активный пайщик кооператива.
        - Заказчик подписал Соглашение ЦПП «Стол заказов».
        - На паевом взносе заказчика достаточно средств на заказ и членский взнос.
        - Стоимость заказа не превышает упрощённый порог приёма имущества.
      post:
        - Заказ размещён и активен.
        - Паевой резерв под заказ и членский взнос участка отложены.

    - step: 2
      title: Закрытие цикла отсечки заявок
      actor: backend
      action: marketplace::expireorder
      description: >
        Цикл отсечки заявок завершается. Кооператив сверяет количество
        собранных заказов с минимальным порогом поставки, заданным
        поставщиком. Если порог набрался — заказы объединяются в
        консолидированную заявку и направляются поставщику для акцепта.
        Если порог не набрался — все заказы цикла отменяются, резерв
        возвращается заказчикам на свободный паевой Стола заказов.
      pre:
        - Цикл отсечки заявок поставщика завершился.
      post:
        - При достижении порога — заказы активны, поставщику направлена консолидированная заявка.
        - При недостижении порога — заказы отменены, резерв возвращён.

    - step: 3
      title: Акцепт заявки поставщиком
      actor: offerer
      action: marketplace::acceptorder
      description: >
        Поставщик видит консолидированную заявку и подтверждает её к
        исполнению по каждому заказу. С этого момента он принимает на
        себя обязательство собрать и передать партию кооперативу точно
        в составе акцепта — заменять позиции запрещено.
      pre:
        - Минимальный порог поставки достигнут.
        - Действие выполняет тот поставщик, чьё предложение лежит в основе консолидированной заявки.
      post:
        - Заказы партии перешли к подготовке отгрузки.

    - step: 4
      title: Передача партии на участок
      actor: offerer
      action: marketplace::signsupp
      description: >
        Поставщик передаёт партию кооперативу. При самовывозе он лично
        сдаёт партию председателю и очно ставит первую подпись на акте
        приёма-передачи. При доставке через экспедитора председатель и
        экспедитор очно сверяют груз с составом партии, и по итогам этой
        сверки поставщик ставит первую подпись дистанционно в
        установленный кооперативом срок. В обоих случаях имущество уже
        физически на складе участка, но юридически ещё не оприходовано —
        выдача заказчикам пока не открыта.
      pre:
        - Заявка акцептована поставщиком.
        - Состав акта приёма-передачи в точности соответствует составу акцептованной заявки.
      post:
        - Имущество поставлено, первая подпись на акте приёма-передачи поставлена.

    - step: 5
      title: Приёмка поставки кооперативом
      actor: chairman
      action: marketplace::signchair
      description: >
        Председатель участка сверяет партию и ставит вторую —
        завершающую — подпись на акте приёма-передачи. Партия
        юридически принята кооперативом, имущество приходуется на склад
        участка, у кооператива возникает обязательство выплатить
        поставщику за фактически принятое.
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
        закрывается, расход с расчётного счёта отражается в бухгалтерии.
      pre:
        - Исходящий платёж зарегистрирован в системе процессинга и ожидает подтверждения.
        - Кассир подтвердил фактический банковский перевод поставщику.
      post:
        - Обязательство выплаты поставщику закрыто.
        - Заказ помечен как «выплата проведена».

    - step: 7
      title: Поступление на участок выдачи
      actor: chairman
      action: marketplace::readyissue
      description: >
        Имущество по заказу поступило на участок выдачи. Оператор
        отмечает готовность к выдаче, заказчику уходит уведомление, что
        заказ можно забирать.
      pre:
        - Поставка принята кооперативом.
        - Имущество числится на складе участка выдачи.
      post:
        - Заказ готов к выдаче.

    - step: 8
      title: Заявление о возврате паевого взноса имуществом
      actor: orderer
      action: marketplace::issuestmt
      description: >
        Заказчик приходит на пункт выдачи участка. Оператор сверяет
        фактически выдаваемое имущество с составом заказа, при
        расхождении правит факт и отправляет его на подпись без своей
        подписи. Заказчик нажимает «Подписать и получить»: устройство
        подписывает заявление о возврате паевого взноса имуществом на
        фактический состав, и заявление уходит совету по типовому
        процессу решений совета.
      pre:
        - Заказ готов к выдаче.
        - Заказчик лично присутствует на пункте выдачи.
      post:
        - Заявление подано, ожидается решение совета.

    - step: 9
      title: Решение совета
      actor: council
      action: marketplace::onmktisauth
      description: >
        Совет принимает решение о возврате паевого взноса имуществом —
        обычно автоматически за секунды. Протокол решения ложится в
        заказ, заказчику предлагается подписать акт.
      pre:
        - Заявление подано.
      post:
        - Протокол решения совета в заказе.

    - step: 10
      title: Первая подпись акта заказчиком
      actor: orderer
      action: marketplace::issueact1
      description: >
        Устройство заказчика по получении протокола подписывает акт
        приёма-передачи первой подписью без нового нажатия. Если связь
        оборвалась, подпись досылается при возвращении в приложение —
        процесс продолжается с того же места.
      pre:
        - Протокол решения совета в заказе.
      post:
        - Акт подписан заказчиком, ожидается закрывающая подпись.

    - step: 11
      title: Закрытие выдачи
      actor: chairman
      action: marketplace::issueact2
      description: >
        Устройство оператора ставит закрывающую подпись председателя
        участка автоматически, пока открыт экран выдачи; ручная кнопка
        «Закрыть выдачу» — запасной путь. Только на этой подписи паевой
        взнос заказчика возвращается имуществом, имущество выбывает со
        склада, членский взнос участка пересчитывается по факту и уходит
        в общий кошелёк участка. Оператор передаёт имущество заказчику
        после того, как заказ показан как полученный.
      pre:
        - Акт подписан заказчиком.
        - При расхождении факта с заказом сумма скорректирована до фактической.
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
        консолидированную заявку. Резерв возвращается на свободный паевой
        Стола заказов, членский взнос сторнируется.

    - branch: Цикл закрыт без достижения порога
      at_step: 2
      action: marketplace::expireorder
      actor: backend
      description: >
        Цикл отсечки заявок завершился, но минимальный порог поставки
        по количеству заказов не достигнут. Все заказы цикла отменяются,
        резерв возвращается заказчикам.

    - branch: Отказ поставщика от заказа
      at_step: 3
      action: marketplace::declineorder
      actor: offerer
      description: >
        Поставщик отказывается выполнить заказ до его акцепта либо
        кооператив не принимает привезённую позицию на приёмке. Заказ
        отменяется, резерв и членский взнос возвращаются заказчику.
        Договорные санкции при отказе — вне этого процесса, по регламенту
        кооператива.

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
      at_step: 4
      action: marketplace::signsupp
      actor: offerer
      description: >
        Партия доставлена на участок через экспедитора с транспортной
        накладной, напечатанной из системы. Председатель и экспедитор
        очно сверяют груз с составом партии. При расхождении председатель
        фиксирует фактический состав, экспедитор подтверждает это своей
        подписью на накладной. По итогам очной сверки поставщик
        дистанционно ставит первую подпись на акте приёма-передачи в
        установленный кооперативом срок. Дальнейшие шаги — как при
        самовывозе.

    - branch: Поставщик не подписал акт приёма-передачи в срок
      at_step: 4
      action: null
      actor: offerer
      description: >
        Поставщик не поставил дистанционную первую подпись на акте
        приёмки-передачи в установленный срок. Выдача заказчикам не
        открывается; дальнейшее решение — по регламенту кооператива
        (досверка, перепоставка, претензия).

    - branch: Совет отказал по заявлению
      at_step: 9
      action: marketplace::onmktisdecl
      actor: council
      description: >
        Совет отказал в возврате паевого взноса имуществом. Заказ
        возвращается в состояние «готов к выдаче», заявление снимается,
        движений по средствам и имуществу нет.

    - branch: Заказчик не подписал акт или ушёл
      at_step: 10
      action: marketplace::cancelissue
      actor: chairman
      description: >
        Заказчик не поставил подпись на акте после решения совета или
        отказался от получения. Оператор отменяет выдачу: заказ снова
        «готов к выдаче», документы сняты, резерв не тронут. Пока совет
        не ответил, отменить выдачу нельзя.

    - branch: Обрыв связи у заказчика
      at_step: 10
      action: null
      actor: orderer
      description: >
        Связь оборвалась или приложение свернулось после подписи
        заявления. Кооператив доводит процесс до точки, где нужна подпись
        заказчика; при возвращении в приложение экран открывается на этом
        этапе и подпись досылается. Дополнительных нажатий не требуется.

    - branch: Заказ из остатка склада кооператива
      at_step: 1
      action: marketplace::stockorder
      actor: orderer
      description: >
        Заказчик покупает имущество из свободного остатка склада участка.
        Заказ оплачивается со свободного паевого Стола заказов и сразу
        считается принятым кооперативом — дальше шаги 7–11 на том же
        участке; после выдачи уценка выбывает со склада отдельным шагом.

# ── Секция 5. Документы и подписи ───────────────────────────────────────────
# В процессе подписываются: АПП приёмки (двойная подпись поставщик →
# председатель), заявление о возврате паевого взноса имуществом (заказчик),
# протокол решения совета (по типовому процессу решений совета) и акт
# приёма-передачи выдачи (двойная подпись заказчик → председатель участка).
# Транспортная накладная при доставке экспедитором печатается из системы и
# подписывается на бумаге — в цепь не попадает. Соглашение ЦПП «Стол заказов»
# подписывается однократно при первом входе пайщика и относится к процессу
# подключения к ЦПП (не входит в этот процесс).
documents:
  - action: marketplace::convert
    title: Заявление о переводе паевого взноса в ЦПП «Стол заказов» с уплатой членского взноса
    registry_id: 1110
    signed_by: [orderer]
    stored_in: реестр документов, самостоятельный пакет (package = hash заявления); в таблице orders не хранится
    note: "Шаблон 1110.MarketplaceConvertStatement, текст только по словам владельца: «Прошу перевести с баланса моего Цифрового кошелька на баланс ЦПП «Стол заказов» {сумма}, из них членский взнос {взнос}». Пишется только на то, чего не хватило в кошельках программы: взнос за вычетом остатка членского кошелька и остаток тела сверх свободного паевого; если кошельков хватает, не подаётся. Подаётся первым действием транзакции оформления, перед заказами: контракт переводит членскую часть (o.mkt.conv) отдельной операцией на каждый оплачиваемый заказ — с хэшем этого заказа, чтобы перевод шёл первой операцией его процесса, — и публикует заявление через make_complete_document; паевая часть тела уходит своим путём при создании заказа."

  - action: marketplace::signsupp
    title: АПП приёмки имущества кооперативом (первая подпись поставщика)
    registry_id: 1104
    signed_by: [offerer]
    stored_in: orders.acceptance_act_signsupp
    note: "Шаблон 1104.MarketplaceAplReception. Документ с первой подписью хранится отдельным полем заказа; при партии из нескольких заказов копия акта лежит в каждом заказе."

  - action: marketplace::signchair
    title: АПП приёмки имущества кооперативом (финальная подпись председателя)
    registry_id: 1104
    signed_by: [offerer, chairman]
    stored_in: orders.acceptance_act_signchair
    note: "Тот же документ 1104, что подписал поставщик: председатель накладывает вторую подпись на исходник из стора документов без регенерации (канон DocumentAggregate); контракт проверяет обе подписи. Итоговый акт публикуется в реестр документов пакетом процесса заказа (package = order_hash)."

  - action: marketplace::issuestmt
    title: Заявление о возврате паевого взноса имуществом
    registry_id: 1113
    signed_by: [orderer]
    stored_in: orders.issue_statement
    note: "Шаблон 1113 (текст унаследован от 800.ReturnByAssetStatement). Подписывается заказчиком на фактические количество, цену и сумму после сверки на пункте выдачи; попадает в повестку совета и публикуется в реестре документов пакетом процесса заказа при исполнении решения. Создаётся задачей 99D-5."

  - action: marketplace::onmktisauth
    title: Протокол решения совета о возврате паевого взноса имуществом
    registry_id: 1114
    signed_by: [council]
    stored_in: orders.issue_protocol
    note: "Шаблон 1114 (текст унаследован от 801.ReturnByAssetDecision). Подписывается председателем совета по типовому процессу решений совета — обычно роботом решений совета по делегированным разрешениям членов совета; номер и дата решения берутся из цепи. Создаётся задачей 99D-5."

  - action: marketplace::issueact1
    title: Акт приёма-передачи имущества в счёт возврата паевого взноса (первая подпись заказчика)
    registry_id: 1115
    signed_by: [orderer]
    stored_in: orders.issue_act1
    note: "Шаблон 1115 (текст унаследован от 802.ReturnByAssetAct), ссылается на номер протокола. Первым подписывает заказчик — устройство ставит подпись по получении протокола без нового нажатия. Создаётся задачей 99D-5."

  - action: marketplace::issueact2
    title: Акт приёма-передачи имущества в счёт возврата паевого взноса (закрывающая подпись председателя участка)
    registry_id: 1115
    signed_by: [orderer, chairman]
    stored_in: orders.issue_act2
    note: "Тот же документ 1115 с двумя подписями: председатель, доверенное лицо или оператор участка выдачи накладывает вторую подпись на документ, подписанный заказчиком, без регенерации. Акт публикуется в реестр документов пакетом процесса заказа (package = order_hash) рядом с заявлением, протоколом и актом приёмки."

# ── Секция 6. Операции ───────────────────────────────────────────────────────
# Денежные движения процесса прямой поставки-приобретения (паевая модель):
#   • паевой резерв под заказ — при создании заказа часть паевого взноса
#     переводится в резерв под этот заказ (внутри паевого фонда, без проводки);
#   • членский взнос участка — единственный членский взнос процесса; из паевого
#     в членский он переходит только по заявлению о конвертации на членский
#     кошелёк программы, оттуда берётся под заказ, при отмене сторнируется
#     обратно на членский кошелёк (членский остаётся членским);
#   • возврат на свободный паевой Стола заказов — при отмене или недовыдаче
#     резерв остаётся паевым и остаётся в программе;
#   • доплата и заказ из остатка — со свободного паевого Стола заказов;
#   • приёмка имущества — имущество приходуется на склад с обязательством
#     перед поставщиком; оплата поставщику гасит обязательство с расчётного счёта;
#   • выдача — резерв гасится возвратом паевого взноса имуществом;
#   • вывод в общий паевой — остатки возвращаются в Цифровой кошелёк.
# Проводки, помеченные TBD-Standardization, ждут подписи бухгалтера.
operations:
  - ledger_code: o.mkt.lock
    human_name: Паевой резерв под заказ
    wallet_op: TRANSFER
    # L1 — без проводки: оба кошелька на счёте 80 (перевод внутри паевого фонда)
    debit: null
    credit: null
    # L2 — реальный перевод между двумя паевыми кошельками заказчика
    wallet_from: w.wal.share       # Паевой взнос пайщика в Цифровом кошельке
    wallet_to: w.mkt.order         # Паевой резерв под конкретный заказ
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
      При создании заказа часть паевого взноса заказчика переводится в
      паевой резерв под этот заказ — до окончания цикла она недоступна.
      Паевой взнос остаётся паевым, поэтому бухгалтерской проводки нет:
      перевод внутри паевого фонда между кошельками одного пайщика. Резерв
      гасится либо при выдаче (возврат паевого взноса имуществом), либо при
      отмене (уходит на свободный паевой Стола заказов).

  - ledger_code: o.mkt.conv
    human_name: Конвертация паевого взноса в членский по заявлению
    wallet_op: TRANSFER
    debit: 80                      # Паевой фонд
    credit: 86                     # Целевое финансирование
    wallet_from: w.wal.share       # Паевой взнос пайщика
    wallet_to: w.mkt.member        # Членский взнос пайщика в Столе заказов
    l3:
      - user_wallet: w.wal.share
        user_ref: order.orderer
        available_delta: -convert_amount
        blocked_delta: null
      - user_wallet: w.mkt.member
        user_ref: order.orderer
        available_delta: +convert_amount
        blocked_delta: null
    amount_ref: order.membership_fee − остаток членского кошелька (не меньше нуля)
    triggered_by: marketplace::convert
    description: >
      По заявлению о переводе заказчик переводит из паевого в членский
      кошелёк программы ровно ту часть членского взноса, которой не хватило
      на внутреннем членском кошельке: остаток кошелька зачитывается сам.
      Это единственный переход паевого в членский в процессе, идёт первым
      действием транзакции оформления перед заказами и только с
      подписанным заявлением: отказ в любом заказе откатывает и перевод.
      Заявление одно на всё оформление, а процесс ведётся по заказу, поэтому
      перевод разбит по заказам: на каждый идёт своя операция с хэшем этого
      заказа, и она становится первой операцией его процесса (уточнение
      владельца 08.09.2026). Двойная запись Дт 80 / Кт 86 — переход из
      паевого фонда в целевое финансирование.

  - ledger_code: o.mkt.fee
    human_name: Членский взнос кооперативного участка под заказ
    wallet_op: TRANSFER
    # L1 — без проводки: оба кошелька на счёте 86 (переход внутри целевого финансирования)
    debit: null
    credit: null
    wallet_from: w.mkt.member      # Членский взнос пайщика в Столе заказов
    wallet_to: w.mkt.fee           # Резерв членских взносов под заказы (кооперативный пул)
    user_wallet: w.mkt.member
    user_ref: order.orderer
    available_delta: -order.membership_fee
    blocked_delta: null
    amount_ref: order.membership_fee | fact_fee − order.membership_fee
    triggered_by: marketplace::createorder | marketplace::stockorder | marketplace::issueact2
    description: >
      Членский взнос кооперативного участка по единой ставке кооператива
      берётся с членского кошелька заказчика в программе при создании
      заказа (обычного или со склада), а при выдаче больше заказанного —
      довзнос по факту. Сумма взноса явно фиксируется в заказе и входит в
      общую стоимость для заказчика. После выдачи взнос уходит
      кооперативному участку выдачи; при отмене — сторнируется заказчику
      обратно на членский кошелёк.

  - ledger_code: o.mkt.lockp
    human_name: Паевой резерв из свободного паевого Стола заказов
    wallet_op: TRANSFER
    # L1 — без проводки: оба кошелька на счёте 80
    debit: null
    credit: null
    wallet_from: w.mkt.share       # Свободный паевой Стола заказов пайщика
    wallet_to: w.mkt.order         # Паевой резерв под конкретный заказ
    l3:
      - user_wallet: w.mkt.share
        user_ref: order.orderer
        available_delta: -diff
        blocked_delta: null
      - user_wallet: w.mkt.order
        user_ref: order.orderer
        available_delta: +diff
        blocked_delta: null
    amount_ref: order.total_cost | fact_cost - order.total_cost
    triggered_by: marketplace::stockorder | marketplace::issueact2
    description: >
      Резерв под заказ набирается из свободного паевого Стола заказов
      пайщика — из того, что вернулось ему за отмены, недовыдачи и
      гарантийные возвраты. Заказ имущества со склада кооператива
      фондируется так целиком; тем же шагом добирается резерв при доплате
      по факту, когда выдано больше заказанного. Автоматического добора с
      паевого Цифрового кошелька нет. Без проводки: перевод внутри паевого
      фонда. Заменяет прежнюю операцию добора с членского кошелька.

  - ledger_code: o.mkt.unlock
    human_name: Возврат резерва на свободный паевой Стола заказов
    wallet_op: TRANSFER
    # L1 — без проводки: оба кошелька на счёте 80
    debit: null
    credit: null
    wallet_from: w.mkt.order       # Паевой резерв под заказ
    wallet_to: w.mkt.share         # Свободный паевой Стола заказов пайщика
    l3:
      - user_wallet: w.mkt.order
        user_ref: order.orderer
        available_delta: -amount
        blocked_delta: null
      - user_wallet: w.mkt.share
        user_ref: order.orderer
        available_delta: +amount
        blocked_delta: null
    amount_ref: order.total_cost | order.total_cost - fact_cost
    triggered_by: marketplace::cancelorder | marketplace::expireorder | marketplace::declineorder | marketplace::issueact2
    description: >
      При отмене заказа (заказчиком до акцепта, при закрытии цикла без
      достижения порога, при отказе поставщика) или при недовыдаче резерв
      возвращается на свободный паевой Стола заказов заказчика — остаётся
      паевым и остаётся в программе: идёт на следующие заказы либо
      выводится в общий паевой отдельным действием. Без проводки: перевод
      внутри паевого фонда.

  - ledger_code: o.mkt.refund
    human_name: Сторно членского взноса участка на членский кошелёк программы
    wallet_op: TRANSFER
    # L1 — без проводки: оба кошелька на счёте 86, членский остаётся членским
    debit: null
    credit: null
    wallet_from: w.mkt.fee         # Резерв членских взносов под заказы
    wallet_to: w.mkt.member        # Членский взнос пайщика в Столе заказов
    user_wallet: w.mkt.member
    user_ref: order.orderer
    available_delta: +amount
    blocked_delta: null
    amount_ref: order.membership_fee | order.membership_fee × (1 − факт/заказ) | return_request.fee_refund
    triggered_by: marketplace::cancelorder | marketplace::expireorder | marketplace::declineorder | marketplace::issueact2 | marketplace::onmktrtauth
    description: >
      Неиспользованная часть членского взноса участка возвращается
      заказчику на членский кошелёк программы: при отмене заказа —
      полностью, при выдаче меньше заказанного — пропорционально
      невыданной части, при гарантийном возврате — доля за возвращённое
      имущество. Обратно в паевой членский не переводится — он
      зачитывается в счёт взноса по следующему заказу. Взнос ещё не получен
      участком (лежит в пуле) либо возвращён участком из общего кошелька,
      поэтому движение остаётся внутри целевого финансирования без проводки.

  - ledger_code: o.mkt.penal
    human_name: Удержание при отказе от получения
    wallet_op: TRANSFER
    debit: 80                      # Паевой фонд
    credit: 86                     # Целевое финансирование
    # L2 — удержанная половина тела заказа кладётся в пул членских взносов как
    # транзит, откуда тем же зачислением, что и взнос, уходит в общий кошелёк
    # кооперативного участка.
    wallet_from: w.mkt.order       # Паевой резерв под заказ
    wallet_to: w.mkt.fee           # Резерв членских взносов (транзит к кошельку участка)
    l3:
      - user_wallet: w.mkt.order
        user_ref: order.orderer
        available_delta: -order.total_cost / 2
        blocked_delta: null
    amount_ref: order.total_cost / 2
    triggered_by: marketplace::cancelorder
    description: >
      Если заказчик отказывается получить заказ после того, как поставщик
      принял заявку в работу, кооператив удерживает половину стоимости заказа
      как членский взнос участка: поставщик уже обязался доставить имущество,
      и кооператив несёт риск его оплаты. Удержанная половина переводится в
      общий кошелёк кооперативного участка вместе с половиной членского
      взноса, имущество остаётся на складе участка, вторая половина
      возвращается заказчику на свободный паевой Стола заказов. Двойная
      запись Дт 80 / Кт 86 — паевой взнос становится членским; основание в
      положении о ЦПП — вопрос методологу (TBD-Standardization).

  - ledger_code: o.mkt.purch
    human_name: Приёмка имущества кооперативом
    wallet_op: ISSUE
    debit: 10                      # Материалы
    credit: 76                     # Расчёты с разными дебиторами и кредиторами
    wallet_from: null
    wallet_to: w.mkt.topay         # К оплате поставщику
    user_wallet: w.mkt.topay
    user_ref: order.offerer
    available_delta: +order.accepted_cost
    blocked_delta: null
    amount_ref: order.accepted_cost
    triggered_by: marketplace::signchair
    description: >
      Имущество принято на склад участка по акту приёма-передачи (финальная
      подпись председателя). Двойная запись Дт 10 / Кт 76 — кооператив
      получил имущество и стал должен поставщику; источник средств на этом
      шаге не выбирается. Имущество учитывается бухгалтерской аналитикой по
      складу участка. Долг перед поставщиком висит на счёте расчётов с
      разными дебиторами и кредиторами (решение владельца 08.09.2026), а
      сумма к оплате видна на кошельке поставщика — сколько кооператив ему
      должен за принятое, без пересчёта по истории.

  - ledger_code: o.mkt.payout
    human_name: Оплата поставщику с расчётного счёта
    wallet_op: BURN
    debit: 76                      # Расчёты с разными дебиторами и кредиторами
    credit: 51                     # Расчётный счёт
    wallet_from: w.mkt.topay       # К оплате поставщику
    wallet_to: null
    user_wallet: w.mkt.topay
    user_ref: order.offerer
    available_delta: -(order.accepted_cost − order.payout_withheld)
    blocked_delta: null
    amount_ref: order.accepted_cost − order.payout_withheld
    triggered_by: marketplace::payconfirm
    description: >
      Оплата поставщику с расчётного счёта кооператива по факту реального
      банковского перевода — за вычетом удержанного гарантийного долга.
      Двойная запись Дт 76 / Кт 51 — долг перед поставщиком погашен
      деньгами, лежащими на счёте с момента внесения паевых взносов. Выплата
      идёт через систему процессинга платежей: кооператив инициирует
      исходящий платёж, кассир проводит банковский перевод и подтверждает
      его, и только после подтверждения расход отражается в бухгалтерии. До
      этого обязательство перед поставщиком остаётся открытым
      (TBD-Standardization).

  - ledger_code: o.mkt.deduct
    human_name: Удержание гарантийного долга поставщика из выплаты
    wallet_op: BURN
    debit: null
    credit: null
    wallet_from: w.mkt.debt
    wallet_to: null
    user_wallet: w.mkt.debt
    user_ref: order.offerer
    available_delta: -order.payout_withheld
    blocked_delta: null
    amount_ref: order.payout_withheld
    triggered_by: marketplace::payout
    description: >
      Часть выплаты, удержанная в счёт признанного гарантийного долга
      поставщика (стандарт p.mkt.claim), гасит этот долг в момент инициации
      выплаты — когда сумма перевода определена. Проводки нет: обязательство
      перед поставщиком и его дебиторская задолженность учтены на одном счёте
      расчётов и сворачиваются. Если долг покрыл всю выплату, банковского
      перевода не будет и выплата закрывается сразу. Отклонение перевода
      кассиром удержание не отменяет: зачёт состоялся, повторная инициация
      переводит остаток.

  - ledger_code: o.mkt.offset
    human_name: Зачёт удержанного долга против суммы к оплате поставщику
    wallet_op: BURN
    debit: null
    credit: null
    wallet_from: w.mkt.topay
    wallet_to: null
    user_wallet: w.mkt.topay
    user_ref: order.offerer
    available_delta: -order.payout_withheld
    blocked_delta: null
    amount_ref: order.payout_withheld
    triggered_by: marketplace::payout
    description: >
      Вместе с удержанием долга на ту же сумму уменьшается и сумма к оплате
      поставщику: кооператив должен ему меньше ровно на то, что поставщик
      должен кооперативу по признанной претензии. Проводки нет — обе стороны
      учтены на одном счёте расчётов. После выплаты остатка по заказу сумма
      к оплате по нему равна нулю.

  - ledger_code: o.mkt.consum
    human_name: Возврат паевого взноса имуществом по акту выдачи
    wallet_op: BURN
    debit: 80                      # Паевой фонд
    credit: 10                     # Материалы
    wallet_from: w.mkt.order       # Паевой резерв под заказ
    wallet_to: null                # BURN — без получателя
    user_wallet: w.mkt.order
    user_ref: order.orderer
    available_delta: -order.fact_cost
    blocked_delta: null
    amount_ref: order.fact_cost
    triggered_by: marketplace::issueact2
    description: >
      На закрывающей подписи акта паевой взнос заказчика возвращается
      имуществом: резерв гасится, имущество выбывает со склада. Двойная
      запись Дт 80 / Кт 10 — уменьшение паевого фонда на стоимость
      переданного имущества по протоколу совета. Если факт расходится с
      заказом, сумма заранее корректируется: при меньшем количестве остаток
      уходит на свободный паевой Стола заказов, при большем — доплата
      берётся оттуда же (TBD-Standardization).

  - ledger_code: o.mkt.recall
    human_name: Консолидация свободного паевого Стола заказов при выходе из кооператива
    wallet_op: TRANSFER
    # L1 — без проводки: оба кошелька на счёте 80
    debit: null
    credit: null
    wallet_from: w.mkt.share       # Свободный паевой Стола заказов пайщика
    wallet_to: w.wal.share         # Паевой взнос пайщика в Цифровом кошельке
    l3:
      - user_wallet: w.mkt.share
        user_ref: username
        available_delta: -quantity
        blocked_delta: null
      - user_wallet: w.wal.share
        user_ref: username
        available_delta: +quantity
        blocked_delta: null
    amount_ref: quantity
    triggered_by: registrator::confirmexit
    description: >
      Действия пайщика по выводу свободного паевого из Стола заказов нет:
      остаток живёт в программе и идёт на оплату следующих заказов; перевод
      между программами по заявлению — отдельная будущая задача. Единственный
      случай, когда свободный паевой уходит в общий паевой Цифрового кошелька,
      — выход пайщика из кооператива: при подтверждении выхода остаток
      собирается на главном паевом кошельке для возврата.


  - ledger_code: o.mkt.exfee
    human_name: Остаток членского кошелька Стола заказов в пул взносов при выходе из кооператива
    wallet_op: TRANSFER
    # L1 — без проводки: оба кошелька на счёте 86
    debit: null
    credit: null
    wallet_from: w.mkt.member      # Членский кошелёк пайщика в Столе заказов
    wallet_to: w.mkt.fee           # Пул членских взносов «Стола заказов»
    user_wallet: w.mkt.member
    user_ref: username
    available_delta: -quantity
    blocked_delta: null
    amount_ref: quantity
    triggered_by: registrator::completexit | registrator::confirmexit
    description: >
      Членский взнос при выходе из кооператива не возвращается и обратно в
      паевой не превращается: остаток членского кошелька программы уходит в
      пул взносов Стола заказов и той же операцией зачисления — в общий
      кошелёк кооперативного участка, к которому прикреплён пайщик; если
      пайщик ни к какому участку не прикреплён, остаток остаётся в пуле
      (решения владельца 10.09.2026). Перевод происходит, когда выход
      состоялся: при отклонении выплаты кассиром членский остаток остаётся у
      пайщика. Выход при незавершённых заказах и открытых заявлениях на
      гарантийный возврат невозможен.
  - ledger_code: o.mkt.loss
    human_name: Уценка при выдаче
    wallet_op: NONE
    debit: 91                      # Прочие доходы и расходы
    credit: 10                     # Материалы
    wallet_from: null
    wallet_to: null
    user_wallet: null
    user_ref: null
    available_delta: null
    blocked_delta: null
    amount_ref: order.markdown_cost
    triggered_by: marketplace::markdown
    description: >
      Разница между стоимостью прибытия выданного имущества и фактической
      суммой выдачи выбывает со склада в прочие расходы кооператива — и по
      заказу из остатка, и по заказу поставщика, выданному дешевле цены
      приёмки. Двойная запись Дт 91 / Кт 10. Накопленный расход позже
      погашается отдельным решением по образцу списания скоропорта.

  - ledger_code: o.brn.common
    human_name: Членский взнос в общий кошелёк кооперативного участка
    wallet_op: TRANSFER
    debit: null
    credit: null
    wallet_from: w.mkt.fee         # Пул членских взносов «Стола заказов»
    wallet_to: w.brn.common        # Общий кошелёк кооперативного участка
    user_wallet: w.brn.common
    user_ref: order.delivery_braname
    available_delta: +order.fact_fee
    blocked_delta: null
    amount_ref: order.fact_fee
    triggered_by: marketplace::issueact2 | marketplace::cancelorder | registrator::completexit | registrator::confirmexit
    description: >
      При закрытии выдачи фактический членский взнос целиком уходит в общий
      кошелёк кооперативного участка выдачи — участок распоряжается им сам:
      сперва расходы участка, затем распределение доверенным. Тем же
      зачислением при отказе от получения после акцепта в общий кошелёк
      уходит удержанная половина, а при выходе пайщика из кооператива —
      остаток его членского кошелька программы (в участок, к которому он
      прикреплён). Операция относится к экономике участка
      (её полное описание — в стандарте членских взносов участка), но
      происходит внутри процесса поставки: заказ и есть событие, по
      которому взнос поступил. Разрез ведётся по участку, не по пайщику.
`,zf=`# ─────────────────────────────────────────────────────────────────────────────
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
# событие через проводки счёта 10 (учёт имущества) и 91 (прочие расходы).
# Имущество отслеживается аналитикой по счёту 10 (per-КУ субсчета), без
# отдельного кошелька.
#
# Списание имущества со склада оформляется как прочий расход (бухгалтерская
# проводка Дт 91 / Кт 10) — имущество выбывает из учёта тем же путём, что
# уценка при выдаче; закрытие накопленных прочих расходов — отдельное
# решение (владелец, 10.09.2026).
#
# Канон формата:
#   coopenomics-docs/docs/standards/_spec/canon.md
# Источники правды в коде:
#   • cpp/marketplace/marketplace.hpp                 — actions (status: proposed)
#   • cpp/marketplace/src/p.mkt.wroff/                — реализация
#   • cpp/lib/core/ledger2/operations.hpp             — OPERATION_REGISTRY
#                                                       расширение o.mkt.wroff
#   • cpp/lib/core/ledger2/processes.hpp              — processes::marketplace::WRITEOFF
#   • cpp/lib/core/ledger2/accounts.hpp               — Прочие доходы и расходы (91),
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
  учётный расход: порча запаса выбывает в прочие расходы.
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
      пер-КУ): их стоимость уходит в прочие расходы кооператива.
      Когда подтверждены все участки проекта, проект считается завершённым.

  - name: marketplace::onmktwoauth
    human: Совет одобрил списание
    actor: council
    role: progress
    purpose: >
      Обратный вызов совета по типовому процессу решений: проект списания
      одобрен, протокол совета ложится в проект, и списание ждёт
      подтверждения председателей участков.

  - name: marketplace::onmktwodecl
    human: Совет отклонил списание
    actor: council
    role: closer
    purpose: >
      Обратный вызов совета: проект отклонён либо повестка просрочена, запись
      проекта закрывается, позиции остаются на складах участков и могут
      попасть в следующий цикл списания.

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
    action: marketplace::onmktwoauth
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
    action: marketplace::onmktwodecl
    actor: council
    guards:
      - Совет рассмотрел проект и отклонил его по типовому процессу решения
        совета — позиции остаются на складах участков и могут попасть в
        следующий цикл списания.

  # Низкоуровневый путь: исполнение одной позиции авторизованного проекта.
  - from: authorized
    to: "∅"
    action: marketplace::execwroff
    actor: chairman
    ledger_code: p.mkt.wroff
    operations:
      - o.mkt.wroff
    guards:
      - Проект авторизован советом; позиция ещё не исполнена.
      - Исполнение последней позиции закрывает проект.

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
        уходит в прочие расходы кооператива. По кошелькам
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

  - action: marketplace::onmktwoauth
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
# Одна операция — выбытие испорченного имущества со склада в прочие
# расходы, тем же путём, что уценка при выдаче (решение владельца
# 10.09.2026). Срабатывает по каждой позиции участка в транзакции
# подтверждения списания (confirmwroff). Закрытие накопленных прочих
# расходов — отдельное решение, в этот стандарт не входит.
operations:
  - ledger_code: o.mkt.wroff
    human_name: Утилизация скоропорта
    wallet_op: NONE                # только бухпроводка без движения по кошелькам
    # L1 — двойная запись: порча запаса выбывает со склада в прочие расходы.
    debit: 91                      # Прочие доходы и расходы
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
      председателем участка. Двойная запись Дт 91 / Кт 10 — порча запаса
      выбывает со склада в прочие расходы, как и уценка при выдаче. Кошельки
      не двигаются — расход чисто кооперативный. Применяется по каждой позиции участка —
      несколько последовательных операций в одной транзакции подтверждения.
`,Gf=`# ─────────────────────────────────────────────────────────────────────────────
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

`,Wf=`# ─────────────────────────────────────────────────────────────────────────────
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
`,Yf=`# ─────────────────────────────────────────────────────────────────────────────
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
`,Jf=`# ─────────────────────────────────────────────────────────────────────────────
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

`,Qf=`# ─────────────────────────────────────────────────────────────────────────────
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
`,Xf=`# ─────────────────────────────────────────────────────────────────────────────
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
`,Zf=`# ─────────────────────────────────────────────────────────────────────────────
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
`,nd=`# ─────────────────────────────────────────────────────────────────────────────
# Стандарт «Автоматизация решений совета (робот решений совета)».
#
# Робот решений совета голосует и подписывает протоколы от имени членов совета
# по тем типам решений, которые они заранее ему делегировали. Каждый голос и
# каждая подпись протокола остаются подписью конкретного члена совета: ставятся
# ключом отдельного разрешения его аккаунта, а контракт проверяет, что ключ
# действительно принадлежит этому разрешению и что делегирование по типу решения
# включено. Приватные ключи в цепи не хранятся.
#
# Источники в коде:
#   • cpp/soviet/src/automator/automate.cpp
#   • cpp/soviet/src/automator/disautomate.cpp
#   • cpp/soviet/src/automator/automation.hpp
#   • cpp/soviet/src/vote/votefor.cpp
#   • cpp/soviet/src/vote/voteagainst.cpp
#   • cpp/soviet/src/decision/authorize.cpp
# ─────────────────────────────────────────────────────────────────────────────

process_type: sov.robot
id: public_soviet_robot_process
title: Автоматизация решений совета
slug: robot
status: proposed
contract: soviet
summary: >
  Член совета заранее разрешает роботу голосовать за него по выбранным типам
  решений — сразу при появлении повестки или повтором за другим членом совета, —
  а председатель — подписывать протоколы по своим типам. Робот принимает такие
  решения за секунды, а совет видит, кто и как настроился.
purpose: >
  Типовые решения совета (приём пайщика, выдача имущества, списание, возврат
  паевого взноса) повторяются десятки раз в день, и ждать личного голосования
  каждого члена совета нельзя. Совет договаривается о правилах заранее: каждый
  член совета сам выбирает типы решений, по которым доверяет роботу свой голос,
  и как именно — «сразу», когда проверять нечего, или «как другой член совета»,
  когда документ проверяет конкретный человек и остальные повторяют его голос
  с тем же знаком и только после него. Председатель выбирает типы решений,
  протоколы которых робот подписывает за него.
  Юридически каждый голос и протокол остаются подписью конкретного человека:
  ключ подписи принадлежит его аккаунту, а область действия ключа ограничена
  списком типов решений. Отзыв делегирования мгновенно лишает робота права
  подписи, даже если ключ остался у него.

roles:
  - soviet_member     # Член совета — делегирует голос, отзывает делегирование
  - chairman          # Председатель совета — дополнительно делегирует подпись протоколов
  - cooperative       # Кооператив — от его имени робот подаёт голоса и утверждения в цепь

# ── Секция 2. Действия контракта ────────────────────────────────────────────
actions:
  - name: soviet::automate
    human: Делегировать роботу
    actor: Член совета
    role: opener
    purpose: >
      Член совета записывает в реестр автоматизаций имя отдельного разрешения
      своего аккаунта, ключом которого подписывает робот, и по каждому типу
      решения — как робот голосует за него: сразу при появлении повестки или
      повтором за названным членом совета (тем же голосом и только после него).
      Повторять за самим собой и за членом совета без права голоса нельзя; на
      один тип — один режим. Председатель отдельно перечисляет типы решений,
      протоколы которых робот подписывает от его имени. Можно задать лимит
      суммы на одно решение и срок действия. Повторный вызов заменяет
      настройки: у каждого члена совета одна запись.

  - name: soviet::votefor
    human: Голос «за» (в том числе голос робота)
    actor: Член совета или робот от его имени
    role: progress
    purpose: >
      Голос принимается, если подписанный хэш привязан именно к этому голосу
      (действие, кооператив, номер решения, время подписи) и ключ подписи
      принадлежит указанному разрешению аккаунта члена совета. Для ручного
      голоса это разрешение active. Для голоса робота — разрешение из реестра
      автоматизаций, и только по делегированному типу решения и в срок.

  - name: soviet::voteagainst
    human: Голос «против» (в том числе голос робота)
    actor: Член совета или робот от его имени
    role: progress
    purpose: >
      Проверяется так же, как голос «за». Робот голосует против только повтором:
      когда член совета, за которым он повторяет, проголосовал против.

  - name: soviet::authorize
    human: Утвердить протокол (в том числе подписью робота)
    actor: Председатель или робот от его имени
    role: closer
    purpose: >
      Кооператив проводит утверждение, приложив протокол с подписью
      председателя. Подпись обязана быть на протоколе, а её ключ — принадлежать
      указанному разрешению аккаунта председателя: active для ручной подписи,
      разрешение робота — только по делегированному типу решения.

  - name: soviet::disautomate
    human: Отозвать делегирование
    actor: Член совета
    role: reject
    purpose: >
      Запись члена совета стирается из реестра автоматизаций. Робот больше не
      может подписать ничего от его имени, даже если ключ разрешения остался у
      него. Само разрешение с аккаунта член совета удаляет отдельно.

# ── Секция 3. Граф состояний ────────────────────────────────────────────────
entity: soviet::automator
entity_human: Делегирование члена совета роботу
entity_source: cpp/soviet/src/automator/

states:
  - name: delegated
    human: Делегировано
    description: >
      В реестре есть запись члена совета: разрешение робота, типы решений для
      голосования, для председателя — типы решений для подписи протоколов,
      необязательные лимит и срок. Робот вправе подписывать по этим типам.
    kind: normal

  - name: expired
    human: Срок истёк
    description: >
      Срок действия делегирования прошёл. Запись остаётся в реестре, но подписи
      робота по ней не принимаются, пока член совета не продлит делегирование.
    kind: virtual
    virtual: true

  - name: revoked
    human: Отозвано
    description: >
      Член совета отозвал делегирование, запись удалена. Подписи робота от его
      имени не принимаются.
    kind: final

transitions:
  - from: "∅"
    to: delegated
    action: soviet::automate
    actor: Член совета
    guards:
      - Вызывающий — член совета кооператива.
      - Разрешение робота — отдельное, не active и не owner.
      - Указан хотя бы один тип решения; все типы — из допустимых типов повестки.
      - Типы для голосования — только у члена совета с правом голоса.
      - Типы для подписи протоколов — только у председателя.
      - Лимит в валюте кооператива; срок, если задан, в будущем.

  - from: delegated
    to: delegated
    action: soviet::automate
    actor: Член совета
    guards:
      - Те же проверки; настройки заменяются целиком.

  - from: delegated
    to: expired
    action: "время"
    actor: Цепь
    guards:
      - Наступил срок действия делегирования.

  - from: expired
    to: delegated
    action: soviet::automate
    actor: Член совета
    guards:
      - Новый срок в будущем либо бессрочно.

  - from: delegated
    to: revoked
    action: soviet::disautomate
    actor: Член совета
    guards:
      - Запись принадлежит вызывающему и относится к указанному совету.

# ── Секция 4. Сценарий ──────────────────────────────────────────────────────
scenario:
  steps:
    - step: 1
      title: Выпуск разрешения робота
      actor: Член совета
      action: eosio::updateauth
      description: >
        Член совета заводит на своём аккаунте отдельное разрешение с новым
        ключом и привязывает его только к голосованию в совете. Приватный ключ
        передаётся роботу в его хранилище, в цепь не попадает.
      pre:
        - Член совета состоит в совете кооператива.
      post:
        - На аккаунте есть разрешение робота с собственным ключом.

    - step: 2
      title: Делегирование
      actor: Член совета
      action: soviet::automate
      description: >
        Член совета выбирает типы решений, по которым робот голосует за него;
        председатель — типы решений, протоколы которых робот подписывает.
      pre:
        - Разрешение робота выпущено.
      post:
        - Запись в реестре автоматизаций.

    - step: 3
      title: Голос робота
      actor: Робот от имени члена совета
      action: soviet::votefor
      description: >
        Появилась повестка делегированного типа. Робот подписывает хэш голоса
        ключом разрешения члена совета и подаёт голос от имени кооператива.
      pre:
        - Тип решения делегирован, срок не истёк.
        - Ключ подписи принадлежит разрешению робота на аккаунте члена совета.
      post:
        - Голос учтён как голос члена совета.

    - step: 4
      title: Протокол робота
      actor: Робот от имени председателя
      action: soviet::authorize
      description: >
        Когда набран кворум, робот собирает протокол, подписывает его ключом
        разрешения председателя и утверждает решение от имени кооператива;
        следом исполняет его.
      pre:
        - Консенсус совета достигнут.
        - Подпись протоколов этого типа делегирована председателем.
      post:
        - Решение утверждено и исполнено.

  alternatives:
    - branch: Ручной голос при включённой автоматизации
      at_step: 3
      action: soviet::votefor
      actor: Член совета
      description: >
        Член совета вправе проголосовать сам своим активным ключом: ручная
        подпись принимается независимо от делегирования.

    - branch: Кворум без робота недостижим
      at_step: 3
      action: soviet::votefor
      actor: Члены совета
      description: >
        Если делегировали не все и голосов робота не хватает, решение остаётся
        в повестке до ручных голосов; протокол подписывается после кворума.

    - branch: Отзыв
      at_step: 2
      action: soviet::disautomate
      actor: Член совета
      description: >
        Член совета отзывает делегирование в любой момент; подписи робота от
        его имени с этого момента отклоняются.

# ── Секция 5. Документы и подписи ───────────────────────────────────────────
# Робот не вводит своих документов: протокол решения — тот же документ, что и
# при ручном утверждении, по шаблону типа решения (см. реестр типов решений).
documents:
  - action: soviet::authorize
    title: Протокол решения совета (по типу решения)
    registry_id: 600
    signed_by: [ Председатель ]
    stored_in: decisions.authorization

# ── Секция 6. Операции ──────────────────────────────────────────────────────
operations: []

# ── Секция 7. Связи ─────────────────────────────────────────────────────────
related:
  - process_type: sov.decision
    relation: affects
    note: >
      Голоса и утверждение робота идут тем же путём принятия решения совета;
      робот лишь подписывает от имени делегировавших.
  - process_type: sov.authpkg
    relation: affects
    note: >
      Повестки, которые формируют контракты-инициаторы, — основной поток робота.
`,ed=`# ─────────────────────────────────────────────────────────────────────────────
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

`,td=`# ─────────────────────────────────────────────────────────────────────────────
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

`,rd=`# ─────────────────────────────────────────────────────────────────────────────
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
`,_i=Symbol.for("yaml.alias"),Hs=Symbol.for("yaml.document"),xe=Symbol.for("yaml.map"),_c=Symbol.for("yaml.pair"),fe=Symbol.for("yaml.scalar"),yt=Symbol.for("yaml.seq"),Gn=Symbol.for("yaml.node.type"),bt=n=>!!n&&typeof n=="object"&&n[Gn]===_i,Qr=n=>!!n&&typeof n=="object"&&n[Gn]===Hs,tr=n=>!!n&&typeof n=="object"&&n[Gn]===xe,dn=n=>!!n&&typeof n=="object"&&n[Gn]===_c,an=n=>!!n&&typeof n=="object"&&n[Gn]===fe,rr=n=>!!n&&typeof n=="object"&&n[Gn]===yt;function un(n){if(n&&typeof n=="object")switch(n[Gn]){case xe:case yt:return!0}return!1}function pn(n){if(n&&typeof n=="object")switch(n[Gn]){case _i:case xe:case fe:case yt:return!0}return!1}const yc=n=>(an(n)||un(n))&&!!n.anchor,je=Symbol("break visit"),sd=Symbol("skip children"),Ft=Symbol("remove node");function wt(n,e){const t=id(e);Qr(n)?et(null,n.contents,t,Object.freeze([n]))===Ft&&(n.contents=null):et(null,n,t,Object.freeze([]))}wt.BREAK=je;wt.SKIP=sd;wt.REMOVE=Ft;function et(n,e,t,r){const s=od(n,e,t,r);if(pn(s)||dn(s))return ad(n,r,s),et(n,s,t,r);if(typeof s!="symbol"){if(un(e)){r=Object.freeze(r.concat(e));for(let i=0;i<e.items.length;++i){const o=et(i,e.items[i],t,r);if(typeof o=="number")i=o-1;else{if(o===je)return je;o===Ft&&(e.items.splice(i,1),i-=1)}}}else if(dn(e)){r=Object.freeze(r.concat(e));const i=et("key",e.key,t,r);if(i===je)return je;i===Ft&&(e.key=null);const o=et("value",e.value,t,r);if(o===je)return je;o===Ft&&(e.value=null)}}return s}function id(n){return typeof n=="object"&&(n.Collection||n.Node||n.Value)?Object.assign({Alias:n.Node,Map:n.Node,Scalar:n.Node,Seq:n.Node},n.Value&&{Map:n.Value,Scalar:n.Value,Seq:n.Value},n.Collection&&{Map:n.Collection,Seq:n.Collection},n):n}function od(n,e,t,r){var s,i,o,a,c;if(typeof t=="function")return t(n,e,r);if(tr(e))return(s=t.Map)==null?void 0:s.call(t,n,e,r);if(rr(e))return(i=t.Seq)==null?void 0:i.call(t,n,e,r);if(dn(e))return(o=t.Pair)==null?void 0:o.call(t,n,e,r);if(an(e))return(a=t.Scalar)==null?void 0:a.call(t,n,e,r);if(bt(e))return(c=t.Alias)==null?void 0:c.call(t,n,e,r)}function ad(n,e,t){const r=e[e.length-1];if(un(r))r.items[n]=t;else if(dn(r))n==="key"?r.key=t:r.value=t;else if(Qr(r))r.contents=t;else{const s=bt(r)?"alias":"scalar";throw new Error(`Cannot replace node with ${s} parent`)}}const cd={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},ld=n=>n.replace(/[!,[\]{}]/g,e=>cd[e]);class In{constructor(e,t){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},In.defaultYaml,e),this.tags=Object.assign({},In.defaultTags,t)}clone(){const e=new In(this.yaml,this.tags);return e.docStart=this.docStart,e}atDocument(){const e=new In(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:In.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},In.defaultTags);break}return e}add(e,t){this.atNextDocument&&(this.yaml={explicit:In.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},In.defaultTags),this.atNextDocument=!1);const r=e.trim().split(/[ \t]+/),s=r.shift();switch(s){case"%TAG":{if(r.length!==2&&(t(0,"%TAG directive should contain exactly two parts"),r.length<2))return!1;const[i,o]=r;return this.tags[i]=o,!0}case"%YAML":{if(this.yaml.explicit=!0,r.length!==1)return t(0,"%YAML directive should contain exactly one part"),!1;const[i]=r;if(i==="1.1"||i==="1.2")return this.yaml.version=i,!0;{const o=/^\d+\.\d+$/.test(i);return t(6,`Unsupported YAML version ${i}`,o),!1}}default:return t(0,`Unknown directive ${s}`,!0),!1}}tagName(e,t){if(e==="!")return"!";if(e[0]!=="!")return t(`Not a valid tag: ${e}`),null;if(e[1]==="<"){const o=e.slice(2,-1);return o==="!"||o==="!!"?(t(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==">"&&t("Verbatim tags must end with a >"),o)}const[,r,s]=e.match(/^(.*!)([^!]*)$/s);s||t(`The ${e} tag has no suffix`);const i=this.tags[r];if(i)try{return i+decodeURIComponent(s)}catch(o){return t(String(o)),null}return r==="!"?e:(t(`Could not resolve tag: ${e}`),null)}tagString(e){for(const[t,r]of Object.entries(this.tags))if(e.startsWith(r))return t+ld(e.substring(r.length));return e[0]==="!"?e:`!<${e}>`}toString(e){const t=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],r=Object.entries(this.tags);let s;if(e&&r.length>0&&pn(e.contents)){const i={};wt(e.contents,(o,a)=>{pn(a)&&a.tag&&(i[a.tag]=!0)}),s=Object.keys(i)}else s=[];for(const[i,o]of r)i==="!!"&&o==="tag:yaml.org,2002:"||(!e||s.some(a=>a.startsWith(o)))&&t.push(`%TAG ${i} ${o}`);return t.join(`
`)}}In.defaultYaml={explicit:!1,version:"1.2"};In.defaultTags={"!!":"tag:yaml.org,2002:"};function bc(n){if(/[\x00-\x19\s,[\]{}]/.test(n)){const t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(n)}`;throw new Error(t)}return!0}function wc(n){const e=new Set;return wt(n,{Value(t,r){r.anchor&&e.add(r.anchor)}}),e}function vc(n,e){for(let t=1;;++t){const r=`${n}${t}`;if(!e.has(r))return r}}function ud(n,e){const t=[],r=new Map;let s=null;return{onAnchor:i=>{t.push(i),s??(s=wc(n));const o=vc(e,s);return s.add(o),o},setAnchors:()=>{for(const i of t){const o=r.get(i);if(typeof o=="object"&&o.anchor&&(an(o.node)||un(o.node)))o.node.anchor=o.anchor;else{const a=new Error("Failed to resolve repeated object (this should not happen)");throw a.source=i,a}}},sourceObjects:r}}function tt(n,e,t,r){if(r&&typeof r=="object")if(Array.isArray(r))for(let s=0,i=r.length;s<i;++s){const o=r[s],a=tt(n,r,String(s),o);a===void 0?delete r[s]:a!==o&&(r[s]=a)}else if(r instanceof Map)for(const s of Array.from(r.keys())){const i=r.get(s),o=tt(n,r,s,i);o===void 0?r.delete(s):o!==i&&r.set(s,o)}else if(r instanceof Set)for(const s of Array.from(r)){const i=tt(n,r,s,s);i===void 0?r.delete(s):i!==s&&(r.delete(s),r.add(i))}else for(const[s,i]of Object.entries(r)){const o=tt(n,r,s,i);o===void 0?delete r[s]:o!==i&&(r[s]=o)}return n.call(e,t,r)}function zn(n,e,t){if(Array.isArray(n))return n.map((r,s)=>zn(r,String(s),t));if(n&&typeof n.toJSON=="function"){if(!t||!yc(n))return n.toJSON(e,t);const r={aliasCount:0,count:1,res:void 0};t.anchors.set(n,r),t.onCreate=i=>{r.res=i,delete t.onCreate};const s=n.toJSON(e,t);return t.onCreate&&t.onCreate(s),s}return typeof n=="bigint"&&!(t!=null&&t.keep)?Number(n):n}class yi{constructor(e){Object.defineProperty(this,Gn,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:r,onAnchor:s,reviver:i}={}){if(!Qr(e))throw new TypeError("A document argument is required");const o={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof r=="number"?r:100},a=zn(this,"",o);if(typeof s=="function")for(const{count:c,res:l}of o.anchors.values())s(l,c);return typeof i=="function"?tt(i,{"":a},"",a):a}}class bi extends yi{constructor(e){super(_i),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e,t){if((t==null?void 0:t.maxAliasCount)===0)throw new ReferenceError("Alias resolution is disabled");let r;t!=null&&t.aliasResolveCache?r=t.aliasResolveCache:(r=[],wt(e,{Node:(i,o)=>{(bt(o)||yc(o))&&r.push(o)}}),t&&(t.aliasResolveCache=r));let s;for(const i of r){if(i===this)break;i.anchor===this.source&&(s=i)}return s}toJSON(e,t){if(!t)return{source:this.source};const{anchors:r,doc:s,maxAliasCount:i}=t,o=this.resolve(s,t);if(!o){const c=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(c)}let a=r.get(o);if(a||(zn(o,null,t),a=r.get(o)),(a==null?void 0:a.res)===void 0){const c="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(c)}if(i>=0&&(a.count+=1,a.aliasCount===0&&(a.aliasCount=br(s,o,r)),a.count*a.aliasCount>i)){const c="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(c)}return a.res}toString(e,t,r){const s=`*${this.source}`;if(e){if(bc(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const i=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(i)}if(e.implicitKey)return`${s} `}return s}}function br(n,e,t){if(bt(e)){const r=e.resolve(n),s=t&&r&&t.get(r);return s?s.count*s.aliasCount:0}else if(un(e)){let r=0;for(const s of e.items){const i=br(n,s,t);i>r&&(r=i)}return r}else if(dn(e)){const r=br(n,e.key,t),s=br(n,e.value,t);return Math.max(r,s)}return 1}const kc=n=>!n||typeof n!="function"&&typeof n!="object";class H extends yi{constructor(e){super(fe),this.value=e}toJSON(e,t){return t!=null&&t.keep?this.value:zn(this.value,e,t)}toString(){return String(this.value)}}H.BLOCK_FOLDED="BLOCK_FOLDED";H.BLOCK_LITERAL="BLOCK_LITERAL";H.PLAIN="PLAIN";H.QUOTE_DOUBLE="QUOTE_DOUBLE";H.QUOTE_SINGLE="QUOTE_SINGLE";const pd="tag:yaml.org,2002:";function fd(n,e,t){if(e){const r=t.filter(i=>i.tag===e),s=r.find(i=>!i.format)??r[0];if(!s)throw new Error(`Tag ${e} not found`);return s}return t.find(r=>{var s;return((s=r.identify)==null?void 0:s.call(r,n))&&!r.format})}function Jt(n,e,t){var p,f,d;if(Qr(n)&&(n=n.contents),pn(n))return n;if(dn(n)){const b=(f=(p=t.schema[xe]).createNode)==null?void 0:f.call(p,t.schema,null,t);return b.items.push(n),b}(n instanceof String||n instanceof Number||n instanceof Boolean||typeof BigInt<"u"&&n instanceof BigInt)&&(n=n.valueOf());const{aliasDuplicateObjects:r,onAnchor:s,onTagObj:i,schema:o,sourceObjects:a}=t;let c;if(r&&n&&typeof n=="object"){if(c=a.get(n),c)return c.anchor??(c.anchor=s(n)),new bi(c.anchor);c={anchor:null,node:null},a.set(n,c)}e!=null&&e.startsWith("!!")&&(e=pd+e.slice(2));let l=fd(n,e,o.tags);if(!l){if(n&&typeof n.toJSON=="function"&&(n=n.toJSON()),!n||typeof n!="object"){const b=new H(n);return c&&(c.node=b),b}l=n instanceof Map?o[xe]:Symbol.iterator in Object(n)?o[yt]:o[xe]}i&&(i(l),delete t.onTagObj);const u=l!=null&&l.createNode?l.createNode(t.schema,n,t):typeof((d=l==null?void 0:l.nodeClass)==null?void 0:d.from)=="function"?l.nodeClass.from(t.schema,n,t):new H(n);return e?u.tag=e:l.default||(u.tag=l.tag),c&&(c.node=u),u}function Ir(n,e,t){let r=t;for(let s=e.length-1;s>=0;--s){const i=e[s];if(typeof i=="number"&&Number.isInteger(i)&&i>=0){const o=[];o[i]=r,r=o}else r=new Map([[i,r]])}return Jt(r,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:n,sourceObjects:new Map})}const Rt=n=>n==null||typeof n=="object"&&!!n[Symbol.iterator]().next().done;class Sc extends yi{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(r=>pn(r)||dn(r)?r.clone(e):r),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(Rt(e))this.add(t);else{const[r,...s]=e,i=this.get(r,!0);if(un(i))i.addIn(s,t);else if(i===void 0&&this.schema)this.set(r,Ir(this.schema,s,t));else throw new Error(`Expected YAML collection at ${r}. Remaining path: ${s}`)}}deleteIn(e){const[t,...r]=e;if(r.length===0)return this.delete(t);const s=this.get(t,!0);if(un(s))return s.deleteIn(r);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${r}`)}getIn(e,t){const[r,...s]=e,i=this.get(r,!0);return s.length===0?!t&&an(i)?i.value:i:un(i)?i.getIn(s,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!dn(t))return!1;const r=t.value;return r==null||e&&an(r)&&r.value==null&&!r.commentBefore&&!r.comment&&!r.tag})}hasIn(e){const[t,...r]=e;if(r.length===0)return this.has(t);const s=this.get(t,!0);return un(s)?s.hasIn(r):!1}setIn(e,t){const[r,...s]=e;if(s.length===0)this.set(r,t);else{const i=this.get(r,!0);if(un(i))i.setIn(s,t);else if(i===void 0&&this.schema)this.set(r,Ir(this.schema,s,t));else throw new Error(`Expected YAML collection at ${r}. Remaining path: ${s}`)}}}const dd=n=>n.replace(/^(?!$)(?: $)?/gm,"#");function be(n,e){return/^\n+$/.test(n)?n.substring(1):e?n.replace(/^(?! *$)/gm,e):n}const Ue=(n,e,t)=>n.endsWith(`
`)?be(t,e):t.includes(`
`)?`
`+be(t,e):(n.endsWith(" ")?"":" ")+t,Ec="flow",zs="block",wr="quoted";function Xr(n,e,t="flow",{indentAtStart:r,lineWidth:s=80,minContentWidth:i=20,onFold:o,onOverflow:a}={}){if(!s||s<0)return n;s<i&&(i=0);const c=Math.max(1+i,1+s-e.length);if(n.length<=c)return n;const l=[],u={};let p=s-e.length;typeof r=="number"&&(r>s-Math.max(2,i)?l.push(0):p=s-r);let f,d,b=!1,g=-1,y=-1,v=-1;t===zs&&(g=Co(n,g,e.length),g!==-1&&(p=g+c));for(let O;O=n[g+=1];){if(t===wr&&O==="\\"){switch(y=g,n[g+1]){case"x":g+=3;break;case"u":g+=5;break;case"U":g+=9;break;default:g+=1}v=g}if(O===`
`)t===zs&&(g=Co(n,g,e.length)),p=g+e.length+c,f=void 0;else{if(O===" "&&d&&d!==" "&&d!==`
`&&d!=="	"){const N=n[g+1];N&&N!==" "&&N!==`
`&&N!=="	"&&(f=g)}if(g>=p)if(f)l.push(f),p=f+c,f=void 0;else if(t===wr){for(;d===" "||d==="	";)d=O,O=n[g+=1],b=!0;const N=g>v+1?g-2:y-1;if(u[N])return n;l.push(N),u[N]=!0,p=N+c,f=void 0}else b=!0}d=O}if(b&&a&&a(),l.length===0)return n;o&&o();let w=n.slice(0,l[0]);for(let O=0;O<l.length;++O){const N=l[O],L=l[O+1]||n.length;N===0?w=`
${e}${n.slice(0,L)}`:(t===wr&&u[N]&&(w+=`${n[N]}\\`),w+=`
${e}${n.slice(N+1,L)}`)}return w}function Co(n,e,t){let r=e,s=e+1,i=n[s];for(;i===" "||i==="	";)if(e<s+t)i=n[++e];else{do i=n[++e];while(i&&i!==`
`);r=e,s=e+1,i=n[s]}return r}const Zr=(n,e)=>({indentAtStart:e?n.indent.length:n.indentAtStart,lineWidth:n.options.lineWidth,minContentWidth:n.options.minContentWidth}),ns=n=>/^(%|---|\.\.\.)/m.test(n);function hd(n,e,t){if(!e||e<0)return!1;const r=e-t,s=n.length;if(s<=r)return!1;for(let i=0,o=0;i<s;++i)if(n[i]===`
`){if(i-o>r)return!0;if(o=i+1,s-o<=r)return!1}return!0}function Ut(n,e){const t=JSON.stringify(n);if(e.options.doubleQuotedAsJSON)return t;const{implicitKey:r}=e,s=e.options.doubleQuotedMinMultiLineLength,i=e.indent||(ns(n)?"  ":"");let o="",a=0;for(let c=0,l=t[c];l;l=t[++c])if(l===" "&&t[c+1]==="\\"&&t[c+2]==="n"&&(o+=t.slice(a,c)+"\\ ",c+=1,a=c,l="\\"),l==="\\")switch(t[c+1]){case"u":{o+=t.slice(a,c);const u=t.substr(c+2,4);switch(u){case"0000":o+="\\0";break;case"0007":o+="\\a";break;case"000b":o+="\\v";break;case"001b":o+="\\e";break;case"0085":o+="\\N";break;case"00a0":o+="\\_";break;case"2028":o+="\\L";break;case"2029":o+="\\P";break;default:u.substr(0,2)==="00"?o+="\\x"+u.substr(2):o+=t.substr(c,6)}c+=5,a=c+1}break;case"n":if(r||t[c+2]==='"'||t.length<s)c+=1;else{for(o+=t.slice(a,c)+`

`;t[c+2]==="\\"&&t[c+3]==="n"&&t[c+4]!=='"';)o+=`
`,c+=2;o+=i,t[c+2]===" "&&(o+="\\"),c+=1,a=c+1}break;default:c+=1}return o=a?o+t.slice(a):t,r?o:Xr(o,i,wr,Zr(e,!1))}function Gs(n,e){if(e.options.singleQuote===!1||e.implicitKey&&n.includes(`
`)||/[ \t]\n|\n[ \t]/.test(n))return Ut(n,e);const t=e.indent||(ns(n)?"  ":""),r="'"+n.replace(/'/g,"''").replace(/\n+/g,`$&
${t}`)+"'";return e.implicitKey?r:Xr(r,t,Ec,Zr(e,!1))}function rt(n,e){const{singleQuote:t}=e.options;let r;if(t===!1)r=Ut;else{const s=n.includes('"'),i=n.includes("'");s&&!i?r=Gs:i&&!s?r=Ut:r=t?Gs:Ut}return r(n,e)}let Ws;try{Ws=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{Ws=/\n+(?!\n|$)/g}function vr({comment:n,type:e,value:t},r,s,i){const{blockQuote:o,commentString:a,lineWidth:c}=r.options;if(!o||/\n[\t ]+$/.test(t))return rt(t,r);const l=r.indent||(r.forceBlockIndent||ns(t)?"  ":""),u=o==="literal"?!0:o==="folded"||e===H.BLOCK_FOLDED?!1:e===H.BLOCK_LITERAL?!0:!hd(t,c,l.length);if(!t)return u?`|
`:`>
`;let p,f;for(f=t.length;f>0;--f){const L=t[f-1];if(L!==`
`&&L!=="	"&&L!==" ")break}let d=t.substring(f);const b=d.indexOf(`
`);b===-1?p="-":t===d||b!==d.length-1?(p="+",i&&i()):p="",d&&(t=t.slice(0,-d.length),d[d.length-1]===`
`&&(d=d.slice(0,-1)),d=d.replace(Ws,`$&${l}`));let g=!1,y,v=-1;for(y=0;y<t.length;++y){const L=t[y];if(L===" ")g=!0;else if(L===`
`)v=y;else break}let w=t.substring(0,v<y?v+1:y);w&&(t=t.substring(w.length),w=w.replace(/\n+/g,`$&${l}`));let N=(g?l?"2":"1":"")+p;if(n&&(N+=" "+a(n.replace(/ ?[\r\n]+/g," ")),s&&s()),!u){const L=t.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${l}`);let U=!1;const M=Zr(r,!0);o!=="folded"&&e!==H.BLOCK_FOLDED&&(M.onOverflow=()=>{U=!0});const B=Xr(`${w}${L}${d}`,l,zs,M);if(!U)return`>${N}
${l}${B}`}return t=t.replace(/\n+/g,`$&${l}`),`|${N}
${l}${w}${t}${d}`}function md(n,e,t,r){const{type:s,value:i}=n,{actualString:o,implicitKey:a,indent:c,indentStep:l,inFlow:u}=e;if(a&&i.includes(`
`)||u&&/[[\]{},]/.test(i))return rt(i,e);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(i))return a||u||!i.includes(`
`)?rt(i,e):vr(n,e,t,r);if(!a&&!u&&s!==H.PLAIN&&i.includes(`
`))return vr(n,e,t,r);if(ns(i)){if(c==="")return e.forceBlockIndent=!0,vr(n,e,t,r);if(a&&c===l)return rt(i,e)}const p=i.replace(/\n+/g,`$&
${c}`);if(o){const f=g=>{var y;return g.default&&g.tag!=="tag:yaml.org,2002:str"&&((y=g.test)==null?void 0:y.test(p))},{compat:d,tags:b}=e.doc.schema;if(b.some(f)||d!=null&&d.some(f))return rt(i,e)}return a?p:Xr(p,c,Ec,Zr(e,!1))}function wi(n,e,t,r){const{implicitKey:s,inFlow:i}=e,o=typeof n.value=="string"?n:Object.assign({},n,{value:String(n.value)});let{type:a}=n;a!==H.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value)&&(a=H.QUOTE_DOUBLE);const c=u=>{switch(u){case H.BLOCK_FOLDED:case H.BLOCK_LITERAL:return s||i?rt(o.value,e):vr(o,e,t,r);case H.QUOTE_DOUBLE:return Ut(o.value,e);case H.QUOTE_SINGLE:return Gs(o.value,e);case H.PLAIN:return md(o,e,t,r);default:return null}};let l=c(a);if(l===null){const{defaultKeyType:u,defaultStringType:p}=e.options,f=s&&u||p;if(l=c(f),l===null)throw new Error(`Unsupported default string type ${f}`)}return l}function Ac(n,e){const t=Object.assign({blockQuote:!0,commentString:dd,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trailingComma:!1,trueStr:"true",verifyAliasOrder:!0},n.schema.toStringOptions,e);let r;switch(t.collectionStyle){case"block":r=!1;break;case"flow":r=!0;break;default:r=null}return{anchors:new Set,doc:n,flowCollectionPadding:t.flowCollectionPadding?" ":"",indent:"",indentStep:typeof t.indent=="number"?" ".repeat(t.indent):"  ",inFlow:r,options:t}}function gd(n,e){var s;if(e.tag){const i=n.filter(o=>o.tag===e.tag);if(i.length>0)return i.find(o=>o.format===e.format)??i[0]}let t,r;if(an(e)){r=e.value;let i=n.filter(o=>{var a;return(a=o.identify)==null?void 0:a.call(o,r)});if(i.length>1){const o=i.filter(a=>a.test);o.length>0&&(i=o)}t=i.find(o=>o.format===e.format)??i.find(o=>!o.format)}else r=e,t=n.find(i=>i.nodeClass&&r instanceof i.nodeClass);if(!t){const i=((s=r==null?void 0:r.constructor)==null?void 0:s.name)??(r===null?"null":typeof r);throw new Error(`Tag not resolved for ${i} value`)}return t}function _d(n,e,{anchors:t,doc:r}){if(!r.directives)return"";const s=[],i=(an(n)||un(n))&&n.anchor;i&&bc(i)&&(t.add(i),s.push(`&${i}`));const o=n.tag??(e.default?null:e.tag);return o&&s.push(r.directives.tagString(o)),s.join(" ")}function gt(n,e,t,r){var c;if(dn(n))return n.toString(e,t,r);if(bt(n)){if(e.doc.directives)return n.toString(e);if((c=e.resolvedAliases)!=null&&c.has(n))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(n):e.resolvedAliases=new Set([n]),n=n.resolve(e.doc)}let s;const i=pn(n)?n:e.doc.createNode(n,{onTagObj:l=>s=l});s??(s=gd(e.doc.schema.tags,i));const o=_d(i,s,e);o.length>0&&(e.indentAtStart=(e.indentAtStart??0)+o.length+1);const a=typeof s.stringify=="function"?s.stringify(i,e,t,r):an(i)?wi(i,e,t,r):i.toString(e,t,r);return o?an(i)||a[0]==="{"||a[0]==="["?`${o} ${a}`:`${o}
${e.indent}${a}`:a}function yd({key:n,value:e},t,r,s){const{allNullValues:i,doc:o,indent:a,indentStep:c,options:{commentString:l,indentSeq:u,simpleKeys:p}}=t;let f=pn(n)&&n.comment||null;if(p){if(f)throw new Error("With simple keys, key nodes cannot have comments");if(un(n)||!pn(n)&&typeof n=="object"){const M="With simple keys, collection cannot be used as a key value";throw new Error(M)}}let d=!p&&(!n||f&&e==null&&!t.inFlow||un(n)||(an(n)?n.type===H.BLOCK_FOLDED||n.type===H.BLOCK_LITERAL:typeof n=="object"));t=Object.assign({},t,{allNullValues:!1,implicitKey:!d&&(p||!i),indent:a+c});let b=!1,g=!1,y=gt(n,t,()=>b=!0,()=>g=!0);if(!d&&!t.inFlow&&y.length>1024){if(p)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");d=!0}if(t.inFlow){if(i||e==null)return b&&r&&r(),y===""?"?":d?`? ${y}`:y}else if(i&&!p||e==null&&d)return y=`? ${y}`,f&&!b?y+=Ue(y,t.indent,l(f)):g&&s&&s(),y;b&&(f=null),d?(f&&(y+=Ue(y,t.indent,l(f))),y=`? ${y}
${a}:`):(y=`${y}:`,f&&(y+=Ue(y,t.indent,l(f))));let v,w,O;pn(e)?(v=!!e.spaceBefore,w=e.commentBefore,O=e.comment):(v=!1,w=null,O=null,e&&typeof e=="object"&&(e=o.createNode(e))),t.implicitKey=!1,!d&&!f&&an(e)&&(t.indentAtStart=y.length+1),g=!1,!u&&c.length>=2&&!t.inFlow&&!d&&rr(e)&&!e.flow&&!e.tag&&!e.anchor&&(t.indent=t.indent.substring(2));let N=!1;const L=gt(e,t,()=>N=!0,()=>g=!0);let U=" ";if(f||v||w){if(U=v?`
`:"",w){const M=l(w);U+=`
${be(M,t.indent)}`}L===""&&!t.inFlow?U===`
`&&O&&(U=`

`):U+=`
${t.indent}`}else if(!d&&un(e)){const M=L[0],B=L.indexOf(`
`),z=B!==-1,tn=t.inFlow??e.flow??e.items.length===0;if(z||!tn){let bn=!1;if(z&&(M==="&"||M==="!")){let mn=L.indexOf(" ");M==="&"&&mn!==-1&&mn<B&&L[mn+1]==="!"&&(mn=L.indexOf(" ",mn+1)),(mn===-1||B<mn)&&(bn=!0)}bn||(U=`
${t.indent}`)}}else(L===""||L[0]===`
`)&&(U="");return y+=U+L,t.inFlow?N&&r&&r():O&&!N?y+=Ue(y,t.indent,l(O)):g&&s&&s(),y}function Nc(n,e){(n==="debug"||n==="warn")&&console.warn(e)}const lr="<<",we={identify:n=>n===lr||typeof n=="symbol"&&n.description===lr,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new H(Symbol(lr)),{addToJSMap:Oc}),stringify:()=>lr},bd=(n,e)=>(we.identify(e)||an(e)&&(!e.type||e.type===H.PLAIN)&&we.identify(e.value))&&(n==null?void 0:n.doc.schema.tags.some(t=>t.tag===we.tag&&t.default));function Oc(n,e,t){const r=Tc(n,t);if(rr(r))for(const s of r.items)ks(n,e,s);else if(Array.isArray(r))for(const s of r)ks(n,e,s);else ks(n,e,r)}function ks(n,e,t){const r=Tc(n,t);if(!tr(r))throw new Error("Merge sources must be maps or map aliases");const s=r.toJSON(null,n,Map);for(const[i,o]of s)e instanceof Map?e.has(i)||e.set(i,o):e instanceof Set?e.add(i):Object.prototype.hasOwnProperty.call(e,i)||Object.defineProperty(e,i,{value:o,writable:!0,enumerable:!0,configurable:!0});return e}function Tc(n,e){return n&&bt(e)?e.resolve(n.doc,n):e}function Rc(n,e,{key:t,value:r}){if(pn(t)&&t.addToJSMap)t.addToJSMap(n,e,r);else if(bd(n,t))Oc(n,e,r);else{const s=zn(t,"",n);if(e instanceof Map)e.set(s,zn(r,s,n));else if(e instanceof Set)e.add(s);else{const i=wd(t,s,n),o=zn(r,i,n);i in e?Object.defineProperty(e,i,{value:o,writable:!0,enumerable:!0,configurable:!0}):e[i]=o}}return e}function wd(n,e,t){if(e===null)return"";if(typeof e!="object")return String(e);if(pn(n)&&(t!=null&&t.doc)){const r=Ac(t.doc,{});r.anchors=new Set;for(const i of t.anchors.keys())r.anchors.add(i.anchor);r.inFlow=!0,r.inStringifyKey=!0;const s=n.toString(r);if(!t.mapKeyWarned){let i=JSON.stringify(s);i.length>40&&(i=i.substring(0,36)+'..."'),Nc(t.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${i}. Set mapAsMap: true to use object keys.`),t.mapKeyWarned=!0}return s}return JSON.stringify(e)}function vi(n,e,t){const r=Jt(n,void 0,t),s=Jt(e,void 0,t);return new Bn(r,s)}class Bn{constructor(e,t=null){Object.defineProperty(this,Gn,{value:_c}),this.key=e,this.value=t}clone(e){let{key:t,value:r}=this;return pn(t)&&(t=t.clone(e)),pn(r)&&(r=r.clone(e)),new Bn(t,r)}toJSON(e,t){const r=t!=null&&t.mapAsMap?new Map:{};return Rc(t,r,this)}toString(e,t,r){return e!=null&&e.doc?yd(this,e,t,r):JSON.stringify(this)}}function Ic(n,e,t){return(e.inFlow??n.flow?kd:vd)(n,e,t)}function vd({comment:n,items:e},t,{blockItemPrefix:r,flowChars:s,itemIndent:i,onChompKeep:o,onComment:a}){const{indent:c,options:{commentString:l}}=t,u=Object.assign({},t,{indent:i,type:null});let p=!1;const f=[];for(let b=0;b<e.length;++b){const g=e[b];let y=null;if(pn(g))!p&&g.spaceBefore&&f.push(""),Cr(t,f,g.commentBefore,p),g.comment&&(y=g.comment);else if(dn(g)){const w=pn(g.key)?g.key:null;w&&(!p&&w.spaceBefore&&f.push(""),Cr(t,f,w.commentBefore,p))}p=!1;let v=gt(g,u,()=>y=null,()=>p=!0);y&&(v+=Ue(v,i,l(y))),p&&y&&(p=!1),f.push(r+v)}let d;if(f.length===0)d=s.start+s.end;else{d=f[0];for(let b=1;b<f.length;++b){const g=f[b];d+=g?`
${c}${g}`:`
`}}return n?(d+=`
`+be(l(n),c),a&&a()):p&&o&&o(),d}function kd({items:n},e,{flowChars:t,itemIndent:r}){const{indent:s,indentStep:i,flowCollectionPadding:o,options:{commentString:a}}=e;r+=i;const c=Object.assign({},e,{indent:r,inFlow:!0,type:null});let l=!1,u=0;const p=[];for(let b=0;b<n.length;++b){const g=n[b];let y=null;if(pn(g))g.spaceBefore&&p.push(""),Cr(e,p,g.commentBefore,!1),g.comment&&(y=g.comment);else if(dn(g)){const w=pn(g.key)?g.key:null;w&&(w.spaceBefore&&p.push(""),Cr(e,p,w.commentBefore,!1),w.comment&&(l=!0));const O=pn(g.value)?g.value:null;O?(O.comment&&(y=O.comment),O.commentBefore&&(l=!0)):g.value==null&&(w!=null&&w.comment)&&(y=w.comment)}y&&(l=!0);let v=gt(g,c,()=>y=null);l||(l=p.length>u||v.includes(`
`)),b<n.length-1?v+=",":e.options.trailingComma&&(e.options.lineWidth>0&&(l||(l=p.reduce((w,O)=>w+O.length+2,2)+(v.length+2)>e.options.lineWidth)),l&&(v+=",")),y&&(v+=Ue(v,r,a(y))),p.push(v),u=p.length}const{start:f,end:d}=t;if(p.length===0)return f+d;if(!l){const b=p.reduce((g,y)=>g+y.length+2,2);l=e.options.lineWidth>0&&b>e.options.lineWidth}if(l){let b=f;for(const g of p)b+=g?`
${i}${s}${g}`:`
`;return`${b}
${s}${d}`}else return`${f}${o}${p.join(" ")}${o}${d}`}function Cr({indent:n,options:{commentString:e}},t,r,s){if(r&&s&&(r=r.replace(/^\n+/,"")),r){const i=be(e(r),n);t.push(i.trimStart())}}function Ke(n,e){const t=an(e)?e.value:e;for(const r of n)if(dn(r)&&(r.key===e||r.key===t||an(r.key)&&r.key.value===t))return r}class Hn extends Sc{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super(xe,e),this.items=[]}static from(e,t,r){const{keepUndefined:s,replacer:i}=r,o=new this(e),a=(c,l)=>{if(typeof i=="function")l=i.call(t,c,l);else if(Array.isArray(i)&&!i.includes(c))return;(l!==void 0||s)&&o.items.push(vi(c,l,r))};if(t instanceof Map)for(const[c,l]of t)a(c,l);else if(t&&typeof t=="object")for(const c of Object.keys(t))a(c,t[c]);return typeof e.sortMapEntries=="function"&&o.items.sort(e.sortMapEntries),o}add(e,t){var o;let r;dn(e)?r=e:!e||typeof e!="object"||!("key"in e)?r=new Bn(e,e==null?void 0:e.value):r=new Bn(e.key,e.value);const s=Ke(this.items,r.key),i=(o=this.schema)==null?void 0:o.sortMapEntries;if(s){if(!t)throw new Error(`Key ${r.key} already set`);an(s.value)&&kc(r.value)?s.value.value=r.value:s.value=r.value}else if(i){const a=this.items.findIndex(c=>i(r,c)<0);a===-1?this.items.push(r):this.items.splice(a,0,r)}else this.items.push(r)}delete(e){const t=Ke(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){const r=Ke(this.items,e),s=r==null?void 0:r.value;return(!t&&an(s)?s.value:s)??void 0}has(e){return!!Ke(this.items,e)}set(e,t){this.add(new Bn(e,t),!0)}toJSON(e,t,r){const s=r?new r:t!=null&&t.mapAsMap?new Map:{};t!=null&&t.onCreate&&t.onCreate(s);for(const i of this.items)Rc(t,s,i);return s}toString(e,t,r){if(!e)return JSON.stringify(this);for(const s of this.items)if(!dn(s))throw new Error(`Map items must all be pairs; found ${JSON.stringify(s)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),Ic(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:r,onComment:t})}}const vt={collection:"map",default:!0,nodeClass:Hn,tag:"tag:yaml.org,2002:map",resolve(n,e){return tr(n)||e("Expected a mapping for this tag"),n},createNode:(n,e,t)=>Hn.from(n,e,t)};class He extends Sc{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(yt,e),this.items=[]}add(e){this.items.push(e)}delete(e){const t=ur(e);return typeof t!="number"?!1:this.items.splice(t,1).length>0}get(e,t){const r=ur(e);if(typeof r!="number")return;const s=this.items[r];return!t&&an(s)?s.value:s}has(e){const t=ur(e);return typeof t=="number"&&t<this.items.length}set(e,t){const r=ur(e);if(typeof r!="number")throw new Error(`Expected a valid index, not ${e}.`);const s=this.items[r];an(s)&&kc(t)?s.value=t:this.items[r]=t}toJSON(e,t){const r=[];t!=null&&t.onCreate&&t.onCreate(r);let s=0;for(const i of this.items)r.push(zn(i,String(s++),t));return r}toString(e,t,r){return e?Ic(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:r,onComment:t}):JSON.stringify(this)}static from(e,t,r){const{replacer:s}=r,i=new this(e);if(t&&Symbol.iterator in Object(t)){let o=0;for(let a of t){if(typeof s=="function"){const c=t instanceof Set?a:String(o++);a=s.call(t,c,a)}i.items.push(Jt(a,void 0,r))}}return i}}function ur(n){let e=an(n)?n.value:n;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}const kt={collection:"seq",default:!0,nodeClass:He,tag:"tag:yaml.org,2002:seq",resolve(n,e){return rr(n)||e("Expected a sequence for this tag"),n},createNode:(n,e,t)=>He.from(n,e,t)},es={identify:n=>typeof n=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:n=>n,stringify(n,e,t,r){return e=Object.assign({actualString:!0},e),wi(n,e,t,r)}},ts={identify:n=>n==null,createNode:()=>new H(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new H(null),stringify:({source:n},e)=>typeof n=="string"&&ts.test.test(n)?n:e.options.nullStr},ki={identify:n=>typeof n=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:n=>new H(n[0]==="t"||n[0]==="T"),stringify({source:n,value:e},t){if(n&&ki.test.test(n)){const r=n[0]==="t"||n[0]==="T";if(e===r)return n}return e?t.options.trueStr:t.options.falseStr}};function ne({format:n,minFractionDigits:e,tag:t,value:r}){if(typeof r=="bigint")return String(r);const s=typeof r=="number"?r:Number(r);if(!isFinite(s))return isNaN(s)?".nan":s<0?"-.inf":".inf";let i=Object.is(r,-0)?"-0":JSON.stringify(r);if(!n&&e&&(!t||t==="tag:yaml.org,2002:float")&&/^-?\d/.test(i)&&!i.includes("e")){let o=i.indexOf(".");o<0&&(o=i.length,i+=".");let a=e-(i.length-o-1);for(;a-- >0;)i+="0"}return i}const Cc={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:n=>n.slice(-3).toLowerCase()==="nan"?NaN:n[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:ne},Lc={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:n=>parseFloat(n),stringify(n){const e=Number(n.value);return isFinite(e)?e.toExponential():ne(n)}},Pc={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(n){const e=new H(parseFloat(n)),t=n.indexOf(".");return t!==-1&&n[n.length-1]==="0"&&(e.minFractionDigits=n.length-t-1),e},stringify:ne},rs=n=>typeof n=="bigint"||Number.isInteger(n),Si=(n,e,t,{intAsBigInt:r})=>r?BigInt(n):parseInt(n.substring(e),t);function xc(n,e,t){const{value:r}=n;return rs(r)&&r>=0?t+r.toString(e):ne(n)}const Mc={identify:n=>rs(n)&&n>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(n,e,t)=>Si(n,2,8,t),stringify:n=>xc(n,8,"0o")},Dc={identify:rs,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(n,e,t)=>Si(n,0,10,t),stringify:ne},Bc={identify:n=>rs(n)&&n>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(n,e,t)=>Si(n,2,16,t),stringify:n=>xc(n,16,"0x")},Sd=[vt,kt,es,ts,ki,Mc,Dc,Bc,Cc,Lc,Pc];function Lo(n){return typeof n=="bigint"||Number.isInteger(n)}const pr=({value:n})=>JSON.stringify(n),Ed=[{identify:n=>typeof n=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:n=>n,stringify:pr},{identify:n=>n==null,createNode:()=>new H(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:pr},{identify:n=>typeof n=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:n=>n==="true",stringify:pr},{identify:Lo,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(n,e,{intAsBigInt:t})=>t?BigInt(n):parseInt(n,10),stringify:({value:n})=>Lo(n)?n.toString():JSON.stringify(n)},{identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:n=>parseFloat(n),stringify:pr}],Ad={default:!0,tag:"",test:/^/,resolve(n,e){return e(`Unresolved plain scalar ${JSON.stringify(n)}`),n}},Nd=[vt,kt].concat(Ed,Ad),Ei={identify:n=>n instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(n,e){if(typeof atob=="function"){const t=atob(n.replace(/[\n\r]/g,"")),r=new Uint8Array(t.length);for(let s=0;s<t.length;++s)r[s]=t.charCodeAt(s);return r}else return e("This environment does not support reading binary tags; either Buffer or atob is required"),n},stringify({comment:n,type:e,value:t},r,s,i){if(!t)return"";const o=t;let a;if(typeof btoa=="function"){let c="";for(let l=0;l<o.length;++l)c+=String.fromCharCode(o[l]);a=btoa(c)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(e??(e=H.BLOCK_LITERAL),e!==H.QUOTE_DOUBLE){const c=Math.max(r.options.lineWidth-r.indent.length,r.options.minContentWidth),l=Math.ceil(a.length/c),u=new Array(l);for(let p=0,f=0;p<l;++p,f+=c)u[p]=a.substr(f,c);a=u.join(e===H.BLOCK_LITERAL?`
`:" ")}return wi({comment:n,type:e,value:a},r,s,i)}};function $c(n,e){if(rr(n))for(let t=0;t<n.items.length;++t){let r=n.items[t];if(!dn(r)){if(tr(r)){r.items.length>1&&e("Each pair must have its own sequence indicator");const s=r.items[0]||new Bn(new H(null));if(r.commentBefore&&(s.key.commentBefore=s.key.commentBefore?`${r.commentBefore}
${s.key.commentBefore}`:r.commentBefore),r.comment){const i=s.value??s.key;i.comment=i.comment?`${r.comment}
${i.comment}`:r.comment}r=s}n.items[t]=dn(r)?r:new Bn(r)}}else e("Expected a sequence for this tag");return n}function jc(n,e,t){const{replacer:r}=t,s=new He(n);s.tag="tag:yaml.org,2002:pairs";let i=0;if(e&&Symbol.iterator in Object(e))for(let o of e){typeof r=="function"&&(o=r.call(e,String(i++),o));let a,c;if(Array.isArray(o))if(o.length===2)a=o[0],c=o[1];else throw new TypeError(`Expected [key, value] tuple: ${o}`);else if(o&&o instanceof Object){const l=Object.keys(o);if(l.length===1)a=l[0],c=o[a];else throw new TypeError(`Expected tuple with one key, not ${l.length} keys`)}else a=o;s.items.push(vi(a,c,t))}return s}const Ai={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:$c,createNode:jc};class lt extends He{constructor(){super(),this.add=Hn.prototype.add.bind(this),this.delete=Hn.prototype.delete.bind(this),this.get=Hn.prototype.get.bind(this),this.has=Hn.prototype.has.bind(this),this.set=Hn.prototype.set.bind(this),this.tag=lt.tag}toJSON(e,t){if(!t)return super.toJSON(e);const r=new Map;t!=null&&t.onCreate&&t.onCreate(r);for(const s of this.items){let i,o;if(dn(s)?(i=zn(s.key,"",t),o=zn(s.value,i,t)):i=zn(s,"",t),r.has(i))throw new Error("Ordered maps must not include duplicate keys");r.set(i,o)}return r}static from(e,t,r){const s=jc(e,t,r),i=new this;return i.items=s.items,i}}lt.tag="tag:yaml.org,2002:omap";const Ni={collection:"seq",identify:n=>n instanceof Map,nodeClass:lt,default:!1,tag:"tag:yaml.org,2002:omap",resolve(n,e){const t=$c(n,e),r=[];for(const{key:s}of t.items)an(s)&&(r.includes(s.value)?e(`Ordered maps must not include duplicate keys: ${s.value}`):r.push(s.value));return Object.assign(new lt,t)},createNode:(n,e,t)=>lt.from(n,e,t)};function Fc({value:n,source:e},t){return e&&(n?Uc:Kc).test.test(e)?e:n?t.options.trueStr:t.options.falseStr}const Uc={identify:n=>n===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new H(!0),stringify:Fc},Kc={identify:n=>n===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new H(!1),stringify:Fc},Od={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:n=>n.slice(-3).toLowerCase()==="nan"?NaN:n[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:ne},Td={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:n=>parseFloat(n.replace(/_/g,"")),stringify(n){const e=Number(n.value);return isFinite(e)?e.toExponential():ne(n)}},Rd={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(n){const e=new H(parseFloat(n.replace(/_/g,""))),t=n.indexOf(".");if(t!==-1){const r=n.substring(t+1).replace(/_/g,"");r[r.length-1]==="0"&&(e.minFractionDigits=r.length)}return e},stringify:ne},sr=n=>typeof n=="bigint"||Number.isInteger(n);function ss(n,e,t,{intAsBigInt:r}){const s=n[0];if((s==="-"||s==="+")&&(e+=1),n=n.substring(e).replace(/_/g,""),r){switch(t){case 2:n=`0b${n}`;break;case 8:n=`0o${n}`;break;case 16:n=`0x${n}`;break}const o=BigInt(n);return s==="-"?BigInt(-1)*o:o}const i=parseInt(n,t);return s==="-"?-1*i:i}function Oi(n,e,t){const{value:r}=n;if(sr(r)){const s=r.toString(e);return r<0?"-"+t+s.substr(1):t+s}return ne(n)}const Id={identify:sr,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(n,e,t)=>ss(n,2,2,t),stringify:n=>Oi(n,2,"0b")},Cd={identify:sr,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(n,e,t)=>ss(n,1,8,t),stringify:n=>Oi(n,8,"0")},Ld={identify:sr,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(n,e,t)=>ss(n,0,10,t),stringify:ne},Pd={identify:sr,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(n,e,t)=>ss(n,2,16,t),stringify:n=>Oi(n,16,"0x")};class ut extends Hn{constructor(e){super(e),this.tag=ut.tag}add(e){let t;dn(e)?t=e:e&&typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?t=new Bn(e.key,null):t=new Bn(e,null),Ke(this.items,t.key)||this.items.push(t)}get(e,t){const r=Ke(this.items,e);return!t&&dn(r)?an(r.key)?r.key.value:r.key:r}set(e,t){if(typeof t!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);const r=Ke(this.items,e);r&&!t?this.items.splice(this.items.indexOf(r),1):!r&&t&&this.items.push(new Bn(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,r){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,r);throw new Error("Set items must all have null values")}static from(e,t,r){const{replacer:s}=r,i=new this(e);if(t&&Symbol.iterator in Object(t))for(let o of t)typeof s=="function"&&(o=s.call(t,o,o)),i.items.push(vi(o,null,r));return i}}ut.tag="tag:yaml.org,2002:set";const Ti={collection:"map",identify:n=>n instanceof Set,nodeClass:ut,default:!1,tag:"tag:yaml.org,2002:set",createNode:(n,e,t)=>ut.from(n,e,t),resolve(n,e){if(tr(n)){if(n.hasAllNullValues(!0))return Object.assign(new ut,n);e("Set items must all have null values")}else e("Expected a mapping for this tag");return n}};function Ri(n,e){const t=n[0],r=t==="-"||t==="+"?n.substring(1):n,s=o=>e?BigInt(o):Number(o),i=r.replace(/_/g,"").split(":").reduce((o,a)=>o*s(60)+s(a),s(0));return t==="-"?s(-1)*i:i}function Vc(n){let{value:e}=n,t=o=>o;if(typeof e=="bigint")t=o=>BigInt(o);else if(isNaN(e)||!isFinite(e))return ne(n);let r="";e<0&&(r="-",e*=t(-1));const s=t(60),i=[e%s];return e<60?i.unshift(0):(e=(e-i[0])/s,i.unshift(e%s),e>=60&&(e=(e-i[0])/s,i.unshift(e))),r+i.map(o=>String(o).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const qc={identify:n=>typeof n=="bigint"||Number.isInteger(n),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(n,e,{intAsBigInt:t})=>Ri(n,t),stringify:Vc},Hc={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:n=>Ri(n,!1),stringify:Vc},is={identify:n=>n instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(n){const e=n.match(is.test);if(!e)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,t,r,s,i,o,a]=e.map(Number),c=e[7]?Number((e[7]+"00").substr(1,3)):0;let l=Date.UTC(t,r-1,s,i||0,o||0,a||0,c);const u=e[8];if(u&&u!=="Z"){let p=Ri(u,!1);Math.abs(p)<30&&(p*=60),l-=6e4*p}return new Date(l)},stringify:({value:n})=>(n==null?void 0:n.toISOString().replace(/(T00:00:00)?\.000Z$/,""))??""},Po=[vt,kt,es,ts,Uc,Kc,Id,Cd,Ld,Pd,Od,Td,Rd,Ei,we,Ni,Ai,Ti,qc,Hc,is],xo=new Map([["core",Sd],["failsafe",[vt,kt,es]],["json",Nd],["yaml11",Po],["yaml-1.1",Po]]),Mo={binary:Ei,bool:ki,float:Pc,floatExp:Lc,floatNaN:Cc,floatTime:Hc,int:Dc,intHex:Bc,intOct:Mc,intTime:qc,map:vt,merge:we,null:ts,omap:Ni,pairs:Ai,seq:kt,set:Ti,timestamp:is},xd={"tag:yaml.org,2002:binary":Ei,"tag:yaml.org,2002:merge":we,"tag:yaml.org,2002:omap":Ni,"tag:yaml.org,2002:pairs":Ai,"tag:yaml.org,2002:set":Ti,"tag:yaml.org,2002:timestamp":is};function Ss(n,e,t){const r=xo.get(e);if(r&&!n)return t&&!r.includes(we)?r.concat(we):r.slice();let s=r;if(!s)if(Array.isArray(n))s=[];else{const i=Array.from(xo.keys()).filter(o=>o!=="yaml11").map(o=>JSON.stringify(o)).join(", ");throw new Error(`Unknown schema "${e}"; use one of ${i} or define customTags array`)}if(Array.isArray(n))for(const i of n)s=s.concat(i);else typeof n=="function"&&(s=n(s.slice()));return t&&(s=s.concat(we)),s.reduce((i,o)=>{const a=typeof o=="string"?Mo[o]:o;if(!a){const c=JSON.stringify(o),l=Object.keys(Mo).map(u=>JSON.stringify(u)).join(", ");throw new Error(`Unknown custom tag ${c}; use one of ${l}`)}return i.includes(a)||i.push(a),i},[])}const Md=(n,e)=>n.key<e.key?-1:n.key>e.key?1:0;class Ii{constructor({compat:e,customTags:t,merge:r,resolveKnownTags:s,schema:i,sortMapEntries:o,toStringDefaults:a}){this.compat=Array.isArray(e)?Ss(e,"compat"):e?Ss(null,e):null,this.name=typeof i=="string"&&i||"core",this.knownTags=s?xd:{},this.tags=Ss(t,this.name,r),this.toStringOptions=a??null,Object.defineProperty(this,xe,{value:vt}),Object.defineProperty(this,fe,{value:es}),Object.defineProperty(this,yt,{value:kt}),this.sortMapEntries=typeof o=="function"?o:o===!0?Md:null}clone(){const e=Object.create(Ii.prototype,Object.getOwnPropertyDescriptors(this));return e.tags=this.tags.slice(),e}}function Dd(n,e){var c;const t=[];let r=e.directives===!0;if(e.directives!==!1&&n.directives){const l=n.directives.toString(n);l?(t.push(l),r=!0):n.directives.docStart&&(r=!0)}r&&t.push("---");const s=Ac(n,e),{commentString:i}=s.options;if(n.commentBefore){t.length!==1&&t.unshift("");const l=i(n.commentBefore);t.unshift(be(l,""))}let o=!1,a=null;if(n.contents){if(pn(n.contents)){if(n.contents.spaceBefore&&r&&t.push(""),n.contents.commentBefore){const p=i(n.contents.commentBefore);t.push(be(p,""))}s.forceBlockIndent=!!n.comment,a=n.contents.comment}const l=a?void 0:()=>o=!0;let u=gt(n.contents,s,()=>a=null,l);a&&(u+=Ue(u,"",i(a))),(u[0]==="|"||u[0]===">")&&t[t.length-1]==="---"?t[t.length-1]=`--- ${u}`:t.push(u)}else t.push(gt(n.contents,s));if((c=n.directives)!=null&&c.docEnd)if(n.comment){const l=i(n.comment);l.includes(`
`)?(t.push("..."),t.push(be(l,""))):t.push(`... ${l}`)}else t.push("...");else{let l=n.comment;l&&o&&(l=l.replace(/^\n+/,"")),l&&((!o||a)&&t[t.length-1]!==""&&t.push(""),t.push(be(i(l),"")))}return t.join(`
`)+`
`}class os{constructor(e,t,r){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,Gn,{value:Hs});let s=null;typeof t=="function"||Array.isArray(t)?s=t:r===void 0&&t&&(r=t,t=void 0);const i=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},r);this.options=i;let{version:o}=i;r!=null&&r._directives?(this.directives=r._directives.atDocument(),this.directives.yaml.explicit&&(o=this.directives.yaml.version)):this.directives=new In({version:o}),this.setSchema(o,r),this.contents=e===void 0?null:this.createNode(e,s,r)}clone(){const e=Object.create(os.prototype,{[Gn]:{value:Hs}});return e.commentBefore=this.commentBefore,e.comment=this.comment,e.errors=this.errors.slice(),e.warnings=this.warnings.slice(),e.options=Object.assign({},this.options),this.directives&&(e.directives=this.directives.clone()),e.schema=this.schema.clone(),e.contents=pn(this.contents)?this.contents.clone(e.schema):this.contents,this.range&&(e.range=this.range.slice()),e}add(e){Qe(this.contents)&&this.contents.add(e)}addIn(e,t){Qe(this.contents)&&this.contents.addIn(e,t)}createAlias(e,t){if(!e.anchor){const r=wc(this);e.anchor=!t||r.has(t)?vc(t||"a",r):t}return new bi(e.anchor)}createNode(e,t,r){let s;if(typeof t=="function")e=t.call({"":e},"",e),s=t;else if(Array.isArray(t)){const y=w=>typeof w=="number"||w instanceof String||w instanceof Number,v=t.filter(y).map(String);v.length>0&&(t=t.concat(v)),s=t}else r===void 0&&t&&(r=t,t=void 0);const{aliasDuplicateObjects:i,anchorPrefix:o,flow:a,keepUndefined:c,onTagObj:l,tag:u}=r??{},{onAnchor:p,setAnchors:f,sourceObjects:d}=ud(this,o||"a"),b={aliasDuplicateObjects:i??!0,keepUndefined:c??!1,onAnchor:p,onTagObj:l,replacer:s,schema:this.schema,sourceObjects:d},g=Jt(e,u,b);return a&&un(g)&&(g.flow=!0),f(),g}createPair(e,t,r={}){const s=this.createNode(e,null,r),i=this.createNode(t,null,r);return new Bn(s,i)}delete(e){return Qe(this.contents)?this.contents.delete(e):!1}deleteIn(e){return Rt(e)?this.contents==null?!1:(this.contents=null,!0):Qe(this.contents)?this.contents.deleteIn(e):!1}get(e,t){return un(this.contents)?this.contents.get(e,t):void 0}getIn(e,t){return Rt(e)?!t&&an(this.contents)?this.contents.value:this.contents:un(this.contents)?this.contents.getIn(e,t):void 0}has(e){return un(this.contents)?this.contents.has(e):!1}hasIn(e){return Rt(e)?this.contents!==void 0:un(this.contents)?this.contents.hasIn(e):!1}set(e,t){this.contents==null?this.contents=Ir(this.schema,[e],t):Qe(this.contents)&&this.contents.set(e,t)}setIn(e,t){Rt(e)?this.contents=t:this.contents==null?this.contents=Ir(this.schema,Array.from(e),t):Qe(this.contents)&&this.contents.setIn(e,t)}setSchema(e,t={}){typeof e=="number"&&(e=String(e));let r;switch(e){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new In({version:"1.1"}),r={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=e:this.directives=new In({version:e}),r={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,r=null;break;default:{const s=JSON.stringify(e);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${s}`)}}if(t.schema instanceof Object)this.schema=t.schema;else if(r)this.schema=new Ii(Object.assign(r,t));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:e,jsonArg:t,mapAsMap:r,maxAliasCount:s,onAnchor:i,reviver:o}={}){const a={anchors:new Map,doc:this,keep:!e,mapAsMap:r===!0,mapKeyWarned:!1,maxAliasCount:typeof s=="number"?s:100},c=zn(this.contents,t??"",a);if(typeof i=="function")for(const{count:l,res:u}of a.anchors.values())i(u,l);return typeof o=="function"?tt(o,{"":c},"",c):c}toJSON(e,t){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:t})}toString(e={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){const t=JSON.stringify(e.indent);throw new Error(`"indent" option must be a positive integer, not ${t}`)}return Dd(this,e)}}function Qe(n){if(un(n))return!0;throw new Error("Expected a YAML collection as document contents")}class zc extends Error{constructor(e,t,r,s){super(),this.name=e,this.code=r,this.message=s,this.pos=t}}class It extends zc{constructor(e,t,r){super("YAMLParseError",e,t,r)}}class Bd extends zc{constructor(e,t,r){super("YAMLWarning",e,t,r)}}const Do=(n,e)=>t=>{if(t.pos[0]===-1)return;t.linePos=t.pos.map(a=>e.linePos(a));const{line:r,col:s}=t.linePos[0];t.message+=` at line ${r}, column ${s}`;let i=s-1,o=n.substring(e.lineStarts[r-1],e.lineStarts[r]).replace(/[\n\r]+$/,"");if(i>=60&&o.length>80){const a=Math.min(i-39,o.length-79);o="…"+o.substring(a),i-=a-1}if(o.length>80&&(o=o.substring(0,79)+"…"),r>1&&/^ *$/.test(o.substring(0,i))){let a=n.substring(e.lineStarts[r-2],e.lineStarts[r-1]);a.length>80&&(a=a.substring(0,79)+`…
`),o=a+o}if(/[^ ]/.test(o)){let a=1;const c=t.linePos[1];(c==null?void 0:c.line)===r&&c.col>s&&(a=Math.max(1,Math.min(c.col-s,80-i)));const l=" ".repeat(i)+"^".repeat(a);t.message+=`:

${o}
${l}
`}};function _t(n,{flow:e,indicator:t,next:r,offset:s,onError:i,parentIndent:o,startOnNewline:a}){let c=!1,l=a,u=a,p="",f="",d=!1,b=!1,g=null,y=null,v=null,w=null,O=null,N=null,L=null;for(const B of n)switch(b&&(B.type!=="space"&&B.type!=="newline"&&B.type!=="comma"&&i(B.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),b=!1),g&&(l&&B.type!=="comment"&&B.type!=="newline"&&i(g,"TAB_AS_INDENT","Tabs are not allowed as indentation"),g=null),B.type){case"space":!e&&(t!=="doc-start"||(r==null?void 0:r.type)!=="flow-collection")&&B.source.includes("	")&&(g=B),u=!0;break;case"comment":{u||i(B,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const z=B.source.substring(1)||" ";p?p+=f+z:p=z,f="",l=!1;break}case"newline":l?p?p+=B.source:(!N||t!=="seq-item-ind")&&(c=!0):f+=B.source,l=!0,d=!0,(y||v)&&(w=B),u=!0;break;case"anchor":y&&i(B,"MULTIPLE_ANCHORS","A node can have at most one anchor"),B.source.endsWith(":")&&i(B.offset+B.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),y=B,L??(L=B.offset),l=!1,u=!1,b=!0;break;case"tag":{v&&i(B,"MULTIPLE_TAGS","A node can have at most one tag"),v=B,L??(L=B.offset),l=!1,u=!1,b=!0;break}case t:(y||v)&&i(B,"BAD_PROP_ORDER",`Anchors and tags must be after the ${B.source} indicator`),N&&i(B,"UNEXPECTED_TOKEN",`Unexpected ${B.source} in ${e??"collection"}`),N=B,l=t==="seq-item-ind"||t==="explicit-key-ind",u=!1;break;case"comma":if(e){O&&i(B,"UNEXPECTED_TOKEN",`Unexpected , in ${e}`),O=B,l=!1,u=!1;break}default:i(B,"UNEXPECTED_TOKEN",`Unexpected ${B.type} token`),l=!1,u=!1}const U=n[n.length-1],M=U?U.offset+U.source.length:s;return b&&r&&r.type!=="space"&&r.type!=="newline"&&r.type!=="comma"&&(r.type!=="scalar"||r.source!=="")&&i(r.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),g&&(l&&g.indent<=o||(r==null?void 0:r.type)==="block-map"||(r==null?void 0:r.type)==="block-seq")&&i(g,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:O,found:N,spaceBefore:c,comment:p,hasNewline:d,anchor:y,tag:v,newlineAfterProp:w,end:M,start:L??M}}function Qt(n){if(!n)return null;switch(n.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(n.source.includes(`
`))return!0;if(n.end){for(const e of n.end)if(e.type==="newline")return!0}return!1;case"flow-collection":for(const e of n.items){for(const t of e.start)if(t.type==="newline")return!0;if(e.sep){for(const t of e.sep)if(t.type==="newline")return!0}if(Qt(e.key)||Qt(e.value))return!0}return!1;default:return!0}}function Ys(n,e,t){if((e==null?void 0:e.type)==="flow-collection"){const r=e.end[0];r.indent===n&&(r.source==="]"||r.source==="}")&&Qt(e)&&t(r,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function Gc(n,e,t){const{uniqueKeys:r}=n.options;if(r===!1)return!1;const s=typeof r=="function"?r:(i,o)=>i===o||an(i)&&an(o)&&i.value===o.value;return e.some(i=>s(i.key,t))}const Bo="All mapping items must start at the same column";function $d({composeNode:n,composeEmptyNode:e},t,r,s,i){var u;const o=(i==null?void 0:i.nodeClass)??Hn,a=new o(t.schema);t.atRoot&&(t.atRoot=!1);let c=r.offset,l=null;for(const p of r.items){const{start:f,key:d,sep:b,value:g}=p,y=_t(f,{indicator:"explicit-key-ind",next:d??(b==null?void 0:b[0]),offset:c,onError:s,parentIndent:r.indent,startOnNewline:!0}),v=!y.found;if(v){if(d&&(d.type==="block-seq"?s(c,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in d&&d.indent!==r.indent&&s(c,"BAD_INDENT",Bo)),!y.anchor&&!y.tag&&!b){l=y.end,y.comment&&(a.comment?a.comment+=`
`+y.comment:a.comment=y.comment);continue}(y.newlineAfterProp||Qt(d))&&s(d??f[f.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else((u=y.found)==null?void 0:u.indent)!==r.indent&&s(c,"BAD_INDENT",Bo);t.atKey=!0;const w=y.end,O=d?n(t,d,y,s):e(t,w,f,null,y,s);t.schema.compat&&Ys(r.indent,d,s),t.atKey=!1,Gc(t,a.items,O)&&s(w,"DUPLICATE_KEY","Map keys must be unique");const N=_t(b??[],{indicator:"map-value-ind",next:g,offset:O.range[2],onError:s,parentIndent:r.indent,startOnNewline:!d||d.type==="block-scalar"});if(c=N.end,N.found){v&&((g==null?void 0:g.type)==="block-map"&&!N.hasNewline&&s(c,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),t.options.strict&&y.start<N.found.offset-1024&&s(O.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const L=g?n(t,g,N,s):e(t,c,b,null,N,s);t.schema.compat&&Ys(r.indent,g,s),c=L.range[2];const U=new Bn(O,L);t.options.keepSourceTokens&&(U.srcToken=p),a.items.push(U)}else{v&&s(O.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),N.comment&&(O.comment?O.comment+=`
`+N.comment:O.comment=N.comment);const L=new Bn(O);t.options.keepSourceTokens&&(L.srcToken=p),a.items.push(L)}}return l&&l<c&&s(l,"IMPOSSIBLE","Map comment with trailing content"),a.range=[r.offset,c,l??c],a}function jd({composeNode:n,composeEmptyNode:e},t,r,s,i){const o=(i==null?void 0:i.nodeClass)??He,a=new o(t.schema);t.atRoot&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let c=r.offset,l=null;for(const{start:u,value:p}of r.items){const f=_t(u,{indicator:"seq-item-ind",next:p,offset:c,onError:s,parentIndent:r.indent,startOnNewline:!0});if(!f.found)if(f.anchor||f.tag||p)(p==null?void 0:p.type)==="block-seq"?s(f.end,"BAD_INDENT","All sequence items must start at the same column"):s(c,"MISSING_CHAR","Sequence item without - indicator");else{l=f.end,f.comment&&(a.comment=f.comment);continue}const d=p?n(t,p,f,s):e(t,f.end,u,null,f,s);t.schema.compat&&Ys(r.indent,p,s),c=d.range[2],a.items.push(d)}return a.range=[r.offset,c,l??c],a}function ir(n,e,t,r){let s="";if(n){let i=!1,o="";for(const a of n){const{source:c,type:l}=a;switch(l){case"space":i=!0;break;case"comment":{t&&!i&&r(a,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const u=c.substring(1)||" ";s?s+=o+u:s=u,o="";break}case"newline":s&&(o+=c),i=!0;break;default:r(a,"UNEXPECTED_TOKEN",`Unexpected ${l} at node end`)}e+=c.length}}return{comment:s,offset:e}}const Es="Block collections are not allowed within flow collections",As=n=>n&&(n.type==="block-map"||n.type==="block-seq");function Fd({composeNode:n,composeEmptyNode:e},t,r,s,i){var y;const o=r.start.source==="{",a=o?"flow map":"flow sequence",c=(i==null?void 0:i.nodeClass)??(o?Hn:He),l=new c(t.schema);l.flow=!0;const u=t.atRoot;u&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let p=r.offset+r.start.source.length;for(let v=0;v<r.items.length;++v){const w=r.items[v],{start:O,key:N,sep:L,value:U}=w,M=_t(O,{flow:a,indicator:"explicit-key-ind",next:N??(L==null?void 0:L[0]),offset:p,onError:s,parentIndent:r.indent,startOnNewline:!1});if(!M.found){if(!M.anchor&&!M.tag&&!L&&!U){v===0&&M.comma?s(M.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`):v<r.items.length-1&&s(M.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${a}`),M.comment&&(l.comment?l.comment+=`
`+M.comment:l.comment=M.comment),p=M.end;continue}!o&&t.options.strict&&Qt(N)&&s(N,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(v===0)M.comma&&s(M.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`);else if(M.comma||s(M.start,"MISSING_CHAR",`Missing , between ${a} items`),M.comment){let B="";n:for(const z of O)switch(z.type){case"comma":case"space":break;case"comment":B=z.source.substring(1);break n;default:break n}if(B){let z=l.items[l.items.length-1];dn(z)&&(z=z.value??z.key),z.comment?z.comment+=`
`+B:z.comment=B,M.comment=M.comment.substring(B.length+1)}}if(!o&&!L&&!M.found){const B=U?n(t,U,M,s):e(t,M.end,L,null,M,s);l.items.push(B),p=B.range[2],As(U)&&s(B.range,"BLOCK_IN_FLOW",Es)}else{t.atKey=!0;const B=M.end,z=N?n(t,N,M,s):e(t,B,O,null,M,s);As(N)&&s(z.range,"BLOCK_IN_FLOW",Es),t.atKey=!1;const tn=_t(L??[],{flow:a,indicator:"map-value-ind",next:U,offset:z.range[2],onError:s,parentIndent:r.indent,startOnNewline:!1});if(tn.found){if(!o&&!M.found&&t.options.strict){if(L)for(const cn of L){if(cn===tn.found)break;if(cn.type==="newline"){s(cn,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}M.start<tn.found.offset-1024&&s(tn.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else U&&("source"in U&&((y=U.source)==null?void 0:y[0])===":"?s(U,"MISSING_CHAR",`Missing space after : in ${a}`):s(tn.start,"MISSING_CHAR",`Missing , or : between ${a} items`));const bn=U?n(t,U,tn,s):tn.found?e(t,tn.end,L,null,tn,s):null;bn?As(U)&&s(bn.range,"BLOCK_IN_FLOW",Es):tn.comment&&(z.comment?z.comment+=`
`+tn.comment:z.comment=tn.comment);const mn=new Bn(z,bn);if(t.options.keepSourceTokens&&(mn.srcToken=w),o){const cn=l;Gc(t,cn.items,z)&&s(B,"DUPLICATE_KEY","Map keys must be unique"),cn.items.push(mn)}else{const cn=new Hn(t.schema);cn.flow=!0,cn.items.push(mn);const Ne=(bn??z).range;cn.range=[z.range[0],Ne[1],Ne[2]],l.items.push(cn)}p=bn?bn.range[2]:tn.end}}const f=o?"}":"]",[d,...b]=r.end;let g=p;if((d==null?void 0:d.source)===f)g=d.offset+d.source.length;else{const v=a[0].toUpperCase()+a.substring(1),w=u?`${v} must end with a ${f}`:`${v} in block collection must be sufficiently indented and end with a ${f}`;s(p,u?"MISSING_CHAR":"BAD_INDENT",w),d&&d.source.length!==1&&b.unshift(d)}if(b.length>0){const v=ir(b,g,t.options.strict,s);v.comment&&(l.comment?l.comment+=`
`+v.comment:l.comment=v.comment),l.range=[r.offset,g,v.offset]}else l.range=[r.offset,g,g];return l}function Ns(n,e,t,r,s,i){const o=t.type==="block-map"?$d(n,e,t,r,i):t.type==="block-seq"?jd(n,e,t,r,i):Fd(n,e,t,r,i),a=o.constructor;return s==="!"||s===a.tagName?(o.tag=a.tagName,o):(s&&(o.tag=s),o)}function Ud(n,e,t,r,s){var f;const i=r.tag,o=i?e.directives.tagName(i.source,d=>s(i,"TAG_RESOLVE_FAILED",d)):null;if(t.type==="block-seq"){const{anchor:d,newlineAfterProp:b}=r,g=d&&i?d.offset>i.offset?d:i:d??i;g&&(!b||b.offset<g.offset)&&s(g,"MISSING_CHAR","Missing newline after block sequence props")}const a=t.type==="block-map"?"map":t.type==="block-seq"?"seq":t.start.source==="{"?"map":"seq";if(!i||!o||o==="!"||o===Hn.tagName&&a==="map"||o===He.tagName&&a==="seq")return Ns(n,e,t,s,o);let c=e.schema.tags.find(d=>d.tag===o&&d.collection===a);if(!c){const d=e.schema.knownTags[o];if((d==null?void 0:d.collection)===a)e.schema.tags.push(Object.assign({},d,{default:!1})),c=d;else return d?s(i,"BAD_COLLECTION_TYPE",`${d.tag} used for ${a} collection, but expects ${d.collection??"scalar"}`,!0):s(i,"TAG_RESOLVE_FAILED",`Unresolved tag: ${o}`,!0),Ns(n,e,t,s,o)}const l=Ns(n,e,t,s,o,c),u=((f=c.resolve)==null?void 0:f.call(c,l,d=>s(i,"TAG_RESOLVE_FAILED",d),e.options))??l,p=pn(u)?u:new H(u);return p.range=l.range,p.tag=o,c!=null&&c.format&&(p.format=c.format),p}function Kd(n,e,t){const r=e.offset,s=Vd(e,n.options.strict,t);if(!s)return{value:"",type:null,comment:"",range:[r,r,r]};const i=s.mode===">"?H.BLOCK_FOLDED:H.BLOCK_LITERAL,o=e.source?qd(e.source):[];let a=o.length;for(let g=o.length-1;g>=0;--g){const y=o[g][1];if(y===""||y==="\r")a=g;else break}if(a===0){const g=s.chomp==="+"&&o.length>0?`
`.repeat(Math.max(1,o.length-1)):"";let y=r+s.length;return e.source&&(y+=e.source.length),{value:g,type:i,comment:s.comment,range:[r,y,y]}}let c=e.indent+s.indent,l=e.offset+s.length,u=0;for(let g=0;g<a;++g){const[y,v]=o[g];if(v===""||v==="\r")s.indent===0&&y.length>c&&(c=y.length);else{y.length<c&&t(l+y.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),s.indent===0&&(c=y.length),u=g,c===0&&!n.atRoot&&t(l,"BAD_INDENT","Block scalar values in collections must be indented");break}l+=y.length+v.length+1}for(let g=o.length-1;g>=a;--g)o[g][0].length>c&&(a=g+1);let p="",f="",d=!1;for(let g=0;g<u;++g)p+=o[g][0].slice(c)+`
`;for(let g=u;g<a;++g){let[y,v]=o[g];l+=y.length+v.length+1;const w=v[v.length-1]==="\r";if(w&&(v=v.slice(0,-1)),v&&y.length<c){const N=`Block scalar lines must not be less indented than their ${s.indent?"explicit indentation indicator":"first line"}`;t(l-v.length-(w?2:1),"BAD_INDENT",N),y=""}i===H.BLOCK_LITERAL?(p+=f+y.slice(c)+v,f=`
`):y.length>c||v[0]==="	"?(f===" "?f=`
`:!d&&f===`
`&&(f=`

`),p+=f+y.slice(c)+v,f=`
`,d=!0):v===""?f===`
`?p+=`
`:f=`
`:(p+=f+v,f=" ",d=!1)}switch(s.chomp){case"-":break;case"+":for(let g=a;g<o.length;++g)p+=`
`+o[g][0].slice(c);p[p.length-1]!==`
`&&(p+=`
`);break;default:p+=`
`}const b=r+s.length+e.source.length;return{value:p,type:i,comment:s.comment,range:[r,b,b]}}function Vd({offset:n,props:e},t,r){if(e[0].type!=="block-scalar-header")return r(e[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:s}=e[0],i=s[0];let o=0,a="",c=-1;for(let f=1;f<s.length;++f){const d=s[f];if(!a&&(d==="-"||d==="+"))a=d;else{const b=Number(d);!o&&b?o=b:c===-1&&(c=n+f)}}c!==-1&&r(c,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${s}`);let l=!1,u="",p=s.length;for(let f=1;f<e.length;++f){const d=e[f];switch(d.type){case"space":l=!0;case"newline":p+=d.source.length;break;case"comment":t&&!l&&r(d,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),p+=d.source.length,u=d.source.substring(1);break;case"error":r(d,"UNEXPECTED_TOKEN",d.message),p+=d.source.length;break;default:{const b=`Unexpected token in block scalar header: ${d.type}`;r(d,"UNEXPECTED_TOKEN",b);const g=d.source;g&&typeof g=="string"&&(p+=g.length)}}}return{mode:i,indent:o,chomp:a,comment:u,length:p}}function qd(n){const e=n.split(/\n( *)/),t=e[0],r=t.match(/^( *)/),i=[r!=null&&r[1]?[r[1],t.slice(r[1].length)]:["",t]];for(let o=1;o<e.length;o+=2)i.push([e[o],e[o+1]]);return i}function Hd(n,e,t){const{offset:r,type:s,source:i,end:o}=n;let a,c;const l=(f,d,b)=>t(r+f,d,b);switch(s){case"scalar":a=H.PLAIN,c=zd(i,l);break;case"single-quoted-scalar":a=H.QUOTE_SINGLE,c=Gd(i,l);break;case"double-quoted-scalar":a=H.QUOTE_DOUBLE,c=Wd(i,l);break;default:return t(n,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${s}`),{value:"",type:null,comment:"",range:[r,r+i.length,r+i.length]}}const u=r+i.length,p=ir(o,u,e,t);return{value:c,type:a,comment:p.comment,range:[r,u,p.offset]}}function zd(n,e){let t="";switch(n[0]){case"	":t="a tab character";break;case",":t="flow indicator character ,";break;case"%":t="directive indicator character %";break;case"|":case">":{t=`block scalar indicator ${n[0]}`;break}case"@":case"`":{t=`reserved character ${n[0]}`;break}}return t&&e(0,"BAD_SCALAR_START",`Plain value cannot start with ${t}`),Wc(n)}function Gd(n,e){return(n[n.length-1]!=="'"||n.length===1)&&e(n.length,"MISSING_CHAR","Missing closing 'quote"),Wc(n.slice(1,-1)).replace(/''/g,"'")}function Wc(n){let e,t;try{e=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),t=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{e=/(.*?)[ \t]*\r?\n/sy,t=/[ \t]*(.*?)[ \t]*\r?\n/sy}let r=e.exec(n);if(!r)return n;let s=r[1],i=" ",o=e.lastIndex;for(t.lastIndex=o;r=t.exec(n);)r[1]===""?i===`
`?s+=i:i=`
`:(s+=i+r[1],i=" "),o=t.lastIndex;const a=/[ \t]*(.*)/sy;return a.lastIndex=o,r=a.exec(n),s+i+((r==null?void 0:r[1])??"")}function Wd(n,e){let t="";for(let r=1;r<n.length-1;++r){const s=n[r];if(!(s==="\r"&&n[r+1]===`
`))if(s===`
`){const{fold:i,offset:o}=Yd(n,r);t+=i,r=o}else if(s==="\\"){let i=n[++r];const o=Jd[i];if(o)t+=o;else if(i===`
`)for(i=n[r+1];i===" "||i==="	";)i=n[++r+1];else if(i==="\r"&&n[r+1]===`
`)for(i=n[++r+1];i===" "||i==="	";)i=n[++r+1];else if(i==="x"||i==="u"||i==="U"){const a=i==="x"?2:i==="u"?4:8;t+=Qd(n,r+1,a,e),r+=a}else{const a=n.substr(r-1,2);e(r-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${a}`),t+=a}}else if(s===" "||s==="	"){const i=r;let o=n[r+1];for(;o===" "||o==="	";)o=n[++r+1];o!==`
`&&!(o==="\r"&&n[r+2]===`
`)&&(t+=r>i?n.slice(i,r+1):s)}else t+=s}return(n[n.length-1]!=='"'||n.length===1)&&e(n.length,"MISSING_CHAR",'Missing closing "quote'),t}function Yd(n,e){let t="",r=n[e+1];for(;(r===" "||r==="	"||r===`
`||r==="\r")&&!(r==="\r"&&n[e+2]!==`
`);)r===`
`&&(t+=`
`),e+=1,r=n[e+1];return t||(t=" "),{fold:t,offset:e}}const Jd={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function Qd(n,e,t,r){const s=n.substr(e,t),o=s.length===t&&/^[0-9a-fA-F]+$/.test(s)?parseInt(s,16):NaN;try{return String.fromCodePoint(o)}catch{const a=n.substr(e-2,t+2);return r(e-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${a}`),a}}function Yc(n,e,t,r){const{value:s,type:i,comment:o,range:a}=e.type==="block-scalar"?Kd(n,e,r):Hd(e,n.options.strict,r),c=t?n.directives.tagName(t.source,p=>r(t,"TAG_RESOLVE_FAILED",p)):null;let l;n.options.stringKeys&&n.atKey?l=n.schema[fe]:c?l=Xd(n.schema,s,c,t,r):e.type==="scalar"?l=Zd(n,s,e,r):l=n.schema[fe];let u;try{const p=l.resolve(s,f=>r(t??e,"TAG_RESOLVE_FAILED",f),n.options);u=an(p)?p:new H(p)}catch(p){const f=p instanceof Error?p.message:String(p);r(t??e,"TAG_RESOLVE_FAILED",f),u=new H(s)}return u.range=a,u.source=s,i&&(u.type=i),c&&(u.tag=c),l.format&&(u.format=l.format),o&&(u.comment=o),u}function Xd(n,e,t,r,s){var a;if(t==="!")return n[fe];const i=[];for(const c of n.tags)if(!c.collection&&c.tag===t)if(c.default&&c.test)i.push(c);else return c;for(const c of i)if((a=c.test)!=null&&a.test(e))return c;const o=n.knownTags[t];return o&&!o.collection?(n.tags.push(Object.assign({},o,{default:!1,test:void 0})),o):(s(r,"TAG_RESOLVE_FAILED",`Unresolved tag: ${t}`,t!=="tag:yaml.org,2002:str"),n[fe])}function Zd({atKey:n,directives:e,schema:t},r,s,i){const o=t.tags.find(a=>{var c;return(a.default===!0||n&&a.default==="key")&&((c=a.test)==null?void 0:c.test(r))})||t[fe];if(t.compat){const a=t.compat.find(c=>{var l;return c.default&&((l=c.test)==null?void 0:l.test(r))})??t[fe];if(o.tag!==a.tag){const c=e.tagString(o.tag),l=e.tagString(a.tag),u=`Value may be parsed as either ${c} or ${l}`;i(s,"TAG_RESOLVE_FAILED",u,!0)}}return o}function nh(n,e,t){if(e){t??(t=e.length);for(let r=t-1;r>=0;--r){let s=e[r];switch(s.type){case"space":case"comment":case"newline":n-=s.source.length;continue}for(s=e[++r];(s==null?void 0:s.type)==="space";)n+=s.source.length,s=e[++r];break}}return n}const eh={composeNode:Jc,composeEmptyNode:Ci};function Jc(n,e,t,r){const s=n.atKey,{spaceBefore:i,comment:o,anchor:a,tag:c}=t;let l,u=!0;switch(e.type){case"alias":l=th(n,e,r),(a||c)&&r(e,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":l=Yc(n,e,c,r),a&&(l.anchor=a.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":try{l=Ud(eh,n,e,t,r),a&&(l.anchor=a.source.substring(1))}catch(p){const f=p instanceof Error?p.message:String(p);r(e,"RESOURCE_EXHAUSTION",f)}break;default:{const p=e.type==="error"?e.message:`Unsupported token (type: ${e.type})`;r(e,"UNEXPECTED_TOKEN",p),u=!1}}return l??(l=Ci(n,e.offset,void 0,null,t,r)),a&&l.anchor===""&&r(a,"BAD_ALIAS","Anchor cannot be an empty string"),s&&n.options.stringKeys&&(!an(l)||typeof l.value!="string"||l.tag&&l.tag!=="tag:yaml.org,2002:str")&&r(c??e,"NON_STRING_KEY","With stringKeys, all keys must be strings"),i&&(l.spaceBefore=!0),o&&(e.type==="scalar"&&e.source===""?l.comment=o:l.commentBefore=o),n.options.keepSourceTokens&&u&&(l.srcToken=e),l}function Ci(n,e,t,r,{spaceBefore:s,comment:i,anchor:o,tag:a,end:c},l){const u={type:"scalar",offset:nh(e,t,r),indent:-1,source:""},p=Yc(n,u,a,l);return o&&(p.anchor=o.source.substring(1),p.anchor===""&&l(o,"BAD_ALIAS","Anchor cannot be an empty string")),s&&(p.spaceBefore=!0),i&&(p.comment=i,p.range[2]=c),p}function th({options:n},{offset:e,source:t,end:r},s){const i=new bi(t.substring(1));i.source===""&&s(e,"BAD_ALIAS","Alias cannot be an empty string"),i.source.endsWith(":")&&s(e+t.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const o=e+t.length,a=ir(r,o,n.strict,s);return i.range=[e,o,a.offset],a.comment&&(i.comment=a.comment),i}function rh(n,e,{offset:t,start:r,value:s,end:i},o){const a=Object.assign({_directives:e},n),c=new os(void 0,a),l={atKey:!1,atRoot:!0,directives:c.directives,options:c.options,schema:c.schema},u=_t(r,{indicator:"doc-start",next:s??(i==null?void 0:i[0]),offset:t,onError:o,parentIndent:0,startOnNewline:!0});u.found&&(c.directives.docStart=!0,s&&(s.type==="block-map"||s.type==="block-seq")&&!u.hasNewline&&o(u.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),c.contents=s?Jc(l,s,u,o):Ci(l,u.end,r,null,u,o);const p=c.contents.range[2],f=ir(i,p,!1,o);return f.comment&&(c.comment=f.comment),c.range=[t,p,f.offset],c}function Ot(n){if(typeof n=="number")return[n,n+1];if(Array.isArray(n))return n.length===2?n:[n[0],n[1]];const{offset:e,source:t}=n;return[e,e+(typeof t=="string"?t.length:1)]}function $o(n){var s;let e="",t=!1,r=!1;for(let i=0;i<n.length;++i){const o=n[i];switch(o[0]){case"#":e+=(e===""?"":r?`

`:`
`)+(o.substring(1)||" "),t=!0,r=!1;break;case"%":((s=n[i+1])==null?void 0:s[0])!=="#"&&(i+=1),t=!1;break;default:t||(r=!0),t=!1}}return{comment:e,afterEmptyLine:r}}class sh{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(t,r,s,i)=>{const o=Ot(t);i?this.warnings.push(new Bd(o,r,s)):this.errors.push(new It(o,r,s))},this.directives=new In({version:e.version||"1.2"}),this.options=e}decorate(e,t){const{comment:r,afterEmptyLine:s}=$o(this.prelude);if(r){const i=e.contents;if(t)e.comment=e.comment?`${e.comment}
${r}`:r;else if(s||e.directives.docStart||!i)e.commentBefore=r;else if(un(i)&&!i.flow&&i.items.length>0){let o=i.items[0];dn(o)&&(o=o.key);const a=o.commentBefore;o.commentBefore=a?`${r}
${a}`:r}else{const o=i.commentBefore;i.commentBefore=o?`${r}
${o}`:r}}if(t){for(let i=0;i<this.errors.length;++i)e.errors.push(this.errors[i]);for(let i=0;i<this.warnings.length;++i)e.warnings.push(this.warnings[i])}else e.errors=this.errors,e.warnings=this.warnings;this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:$o(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,t=!1,r=-1){for(const s of e)yield*this.next(s);yield*this.end(t,r)}*next(e){switch(e.type){case"directive":this.directives.add(e.source,(t,r,s)=>{const i=Ot(e);i[0]+=t,this.onError(i,"BAD_DIRECTIVE",r,s)}),this.prelude.push(e.source),this.atDirectives=!0;break;case"document":{const t=rh(this.options,this.directives,e,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(e,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(e.source);break;case"error":{const t=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,r=new It(Ot(e),"UNEXPECTED_TOKEN",t);this.atDirectives||!this.doc?this.errors.push(r):this.doc.errors.push(r);break}case"doc-end":{if(!this.doc){const r="Unexpected doc-end without preceding document";this.errors.push(new It(Ot(e),"UNEXPECTED_TOKEN",r));break}this.doc.directives.docEnd=!0;const t=ir(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){const r=this.doc.comment;this.doc.comment=r?`${r}
${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new It(Ot(e),"UNEXPECTED_TOKEN",`Unsupported token ${e.type}`))}}*end(e=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){const r=Object.assign({_directives:this.directives},this.options),s=new os(void 0,r);this.atDirectives&&this.onError(t,"MISSING_CHAR","Missing directives-end indicator line"),s.range=[0,t,t],this.decorate(s,!1),yield s}}}const Qc="\uFEFF",Xc="",Zc="",Js="";function ih(n){switch(n){case Qc:return"byte-order-mark";case Xc:return"doc-mode";case Zc:return"flow-error-end";case Js:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(n[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}function Wn(n){switch(n){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const jo=new Set("0123456789ABCDEFabcdef"),oh=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),fr=new Set(",[]{}"),ah=new Set(` ,[]{}
\r	`),Os=n=>!n||ah.has(n);class ch{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,t=!1){if(e){if(typeof e!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!t;let r=this.next??"stream";for(;r&&(t||this.hasChars(1));)r=yield*this.parseNext(r)}atLineEnd(){let e=this.pos,t=this.buffer[e];for(;t===" "||t==="	";)t=this.buffer[++e];return!t||t==="#"||t===`
`?!0:t==="\r"?this.buffer[e+1]===`
`:!1}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let t=this.buffer[e];if(this.indentNext>0){let r=0;for(;t===" ";)t=this.buffer[++r+e];if(t==="\r"){const s=this.buffer[r+e+1];if(s===`
`||!s&&!this.atEnd)return e+r+1}return t===`
`||r>=this.indentNext||!t&&!this.atEnd?e+r:-1}if(t==="-"||t==="."){const r=this.buffer.substr(e,3);if((r==="---"||r==="...")&&Wn(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!="number"||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]==="\r"&&(e-=1),this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext("stream");if(e[0]===Qc&&(yield*this.pushCount(1),e=e.substring(1)),e[0]==="%"){let t=e.length,r=e.indexOf("#");for(;r!==-1;){const i=e[r-1];if(i===" "||i==="	"){t=r-1;break}else r=e.indexOf("#",r+1)}for(;;){const i=e[t-1];if(i===" "||i==="	")t-=1;else break}const s=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-s),this.pushNewline(),"stream"}if(this.atLineEnd()){const t=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-t),yield*this.pushNewline(),"stream"}return yield Xc,yield*this.parseLineStart()}*parseLineStart(){const e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext("line-start");if(e==="-"||e==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const t=this.peek(3);if((t==="---"||t==="...")&&Wn(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,t==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!Wn(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[e,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext("block-start");if((e==="-"||e==="?"||e===":")&&Wn(t)){const r=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=r,"block-start"}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const e=this.getLine();if(e===null)return this.setNext("doc");let t=yield*this.pushIndicators();switch(e[t]){case"#":yield*this.pushCount(e.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(Os),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return t+=yield*this.parseBlockScalarHeader(),t+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,t,r=-1;do e=yield*this.pushNewline(),e>0?(t=yield*this.pushSpaces(!1),this.indentValue=r=t):t=0,t+=yield*this.pushSpaces(!0);while(e+t>0);const s=this.getLine();if(s===null)return this.setNext("flow");if((r!==-1&&r<this.indentNext&&s[0]!=="#"||r===0&&(s.startsWith("---")||s.startsWith("..."))&&Wn(s[3]))&&!(r===this.indentNext-1&&this.flowLevel===1&&(s[0]==="]"||s[0]==="}")))return this.flowLevel=0,yield Zc,yield*this.parseLineStart();let i=0;for(;s[i]===",";)i+=yield*this.pushCount(1),i+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(i+=yield*this.pushIndicators(),s[i]){case void 0:return"flow";case"#":return yield*this.pushCount(s.length-i),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(Os),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const o=this.charAt(1);if(this.flowKey||Wn(o)||o===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const e=this.charAt(0);let t=this.buffer.indexOf(e,this.pos+1);if(e==="'")for(;t!==-1&&this.buffer[t+1]==="'";)t=this.buffer.indexOf("'",t+2);else for(;t!==-1;){let i=0;for(;this.buffer[t-1-i]==="\\";)i+=1;if(i%2===0)break;t=this.buffer.indexOf('"',t+1)}const r=this.buffer.substring(0,t);let s=r.indexOf(`
`,this.pos);if(s!==-1){for(;s!==-1;){const i=this.continueScalar(s+1);if(i===-1)break;s=r.indexOf(`
`,i)}s!==-1&&(t=s-(r[s-1]==="\r"?2:1))}if(t===-1){if(!this.atEnd)return this.setNext("quoted-scalar");t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){const t=this.buffer[++e];if(t==="+")this.blockScalarKeep=!0;else if(t>"0"&&t<="9")this.blockScalarIndent=Number(t)-1;else if(t!=="-")break}return yield*this.pushUntil(t=>Wn(t)||t==="#")}*parseBlockScalar(){let e=this.pos-1,t=0,r;n:for(let i=this.pos;r=this.buffer[i];++i)switch(r){case" ":t+=1;break;case`
`:e=i,t=0;break;case"\r":{const o=this.buffer[i+1];if(!o&&!this.atEnd)return this.setNext("block-scalar");if(o===`
`)break}default:break n}if(!r&&!this.atEnd)return this.setNext("block-scalar");if(t>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=t:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const i=this.continueScalar(e+1);if(i===-1)break;e=this.buffer.indexOf(`
`,i)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext("block-scalar");e=this.buffer.length}}let s=e+1;for(r=this.buffer[s];r===" ";)r=this.buffer[++s];if(r==="	"){for(;r==="	"||r===" "||r==="\r"||r===`
`;)r=this.buffer[++s];e=s-1}else if(!this.blockScalarKeep)do{let i=e-1,o=this.buffer[i];o==="\r"&&(o=this.buffer[--i]);const a=i;for(;o===" ";)o=this.buffer[--i];if(o===`
`&&i>=this.pos&&i+1+t>a)e=i;else break}while(!0);return yield Js,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const e=this.flowLevel>0;let t=this.pos-1,r=this.pos-1,s;for(;s=this.buffer[++r];)if(s===":"){const i=this.buffer[r+1];if(Wn(i)||e&&fr.has(i))break;t=r}else if(Wn(s)){let i=this.buffer[r+1];if(s==="\r"&&(i===`
`?(r+=1,s=`
`,i=this.buffer[r+1]):t=r),i==="#"||e&&fr.has(i))break;if(s===`
`){const o=this.continueScalar(r+1);if(o===-1)break;r=Math.max(r,o-2)}}else{if(e&&fr.has(s))break;t=r}return!s&&!this.atEnd?this.setNext("plain-scalar"):(yield Js,yield*this.pushToIndex(t+1,!0),e?"flow":"doc")}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,t){const r=this.buffer.slice(this.pos,e);return r?(yield r,this.pos+=r.length,r.length):(t&&(yield""),0)}*pushIndicators(){let e=0;n:for(;;){switch(this.charAt(0)){case"!":e+=yield*this.pushTag(),e+=yield*this.pushSpaces(!0);continue n;case"&":e+=yield*this.pushUntil(Os),e+=yield*this.pushSpaces(!0);continue n;case"-":case"?":case":":{const t=this.flowLevel>0,r=this.charAt(1);if(Wn(r)||t&&fr.has(r)){t?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,e+=yield*this.pushCount(1),e+=yield*this.pushSpaces(!0);continue n}}}break n}return e}*pushTag(){if(this.charAt(1)==="<"){let e=this.pos+2,t=this.buffer[e];for(;!Wn(t)&&t!==">";)t=this.buffer[++e];return yield*this.pushToIndex(t===">"?e+1:e,!1)}else{let e=this.pos+1,t=this.buffer[e];for(;t;)if(oh.has(t))t=this.buffer[++e];else if(t==="%"&&jo.has(this.buffer[e+1])&&jo.has(this.buffer[e+2]))t=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){const e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let t=this.pos-1,r;do r=this.buffer[++t];while(r===" "||e&&r==="	");const s=t-this.pos;return s>0&&(yield this.buffer.substr(this.pos,s),this.pos=t),s}*pushUntil(e){let t=this.pos,r=this.buffer[t];for(;!e(r);)r=this.buffer[++t];return yield*this.pushToIndex(t,!1)}}class lh{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let t=0,r=this.lineStarts.length;for(;t<r;){const i=t+r>>1;this.lineStarts[i]<e?t=i+1:r=i}if(this.lineStarts[t]===e)return{line:t+1,col:1};if(t===0)return{line:0,col:e};const s=this.lineStarts[t-1];return{line:t,col:e-s+1}}}}function Ce(n,e){for(let t=0;t<n.length;++t)if(n[t].type===e)return!0;return!1}function Fo(n){for(let e=0;e<n.length;++e)switch(n[e].type){case"space":case"comment":case"newline":break;default:return e}return-1}function nl(n){switch(n==null?void 0:n.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function dr(n){switch(n.type){case"document":return n.start;case"block-map":{const e=n.items[n.items.length-1];return e.sep??e.start}case"block-seq":return n.items[n.items.length-1].start;default:return[]}}function Xe(n){var t;if(n.length===0)return[];let e=n.length;n:for(;--e>=0;)switch(n[e].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break n}for(;((t=n[++e])==null?void 0:t.type)==="space";);return n.splice(e,n.length)}function Lr(n,e){if(e.length<1e5)Array.prototype.push.apply(n,e);else for(let t=0;t<e.length;++t)n.push(e[t])}function Uo(n){if(n.start.type==="flow-seq-start")for(const e of n.items)e.sep&&!e.value&&!Ce(e.start,"explicit-key-ind")&&!Ce(e.sep,"map-value-ind")&&(e.key&&(e.value=e.key),delete e.key,nl(e.value)?e.value.end?Lr(e.value.end,e.sep):e.value.end=e.sep:Lr(e.start,e.sep),delete e.sep)}class uh{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new ch,this.onNewLine=e}*parse(e,t=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const r of this.lexer.lex(e,t))yield*this.next(r);t||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}const t=ih(e);if(t)if(t==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=t,yield*this.step(),t){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case"space":this.atNewLine&&e[0]===" "&&(this.indent+=e.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=e.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=e.length}else{const r=`Not a YAML token: ${e}`;yield*this.pop({type:"error",offset:this.offset,message:r,source:e}),this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const e=this.peek(1);if(this.type==="doc-end"&&(e==null?void 0:e.type)!=="doc-end"){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!e)return yield*this.stream();switch(e.type){case"document":return yield*this.document(e);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(e);case"block-scalar":return yield*this.blockScalar(e);case"block-map":return yield*this.blockMap(e);case"block-seq":return yield*this.blockSequence(e);case"flow-collection":return yield*this.flowCollection(e);case"doc-end":return yield*this.documentEnd(e)}yield*this.pop()}peek(e){return this.stack[this.stack.length-e]}*pop(e){const t=e??this.stack.pop();if(!t)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield t;else{const r=this.peek(1);switch(t.type==="block-scalar"?t.indent="indent"in r?r.indent:0:t.type==="flow-collection"&&r.type==="document"&&(t.indent=0),t.type==="flow-collection"&&Uo(t),r.type){case"document":r.value=t;break;case"block-scalar":r.props.push(t);break;case"block-map":{const s=r.items[r.items.length-1];if(s.value){r.items.push({start:[],key:t,sep:[]}),this.onKeyLine=!0;return}else if(s.sep)s.value=t;else{Object.assign(s,{key:t,sep:[]}),this.onKeyLine=!s.explicitKey;return}break}case"block-seq":{const s=r.items[r.items.length-1];s.value?r.items.push({start:[],value:t}):s.value=t;break}case"flow-collection":{const s=r.items[r.items.length-1];!s||s.value?r.items.push({start:[],key:t,sep:[]}):s.sep?s.value=t:Object.assign(s,{key:t,sep:[]});return}default:yield*this.pop(),yield*this.pop(t)}if((r.type==="document"||r.type==="block-map"||r.type==="block-seq")&&(t.type==="block-map"||t.type==="block-seq")){const s=t.items[t.items.length-1];s&&!s.sep&&!s.value&&s.start.length>0&&Fo(s.start)===-1&&(t.indent===0||s.start.every(i=>i.type!=="comment"||i.indent<t.indent))&&(r.type==="document"?r.end=s.start:r.items.push({start:s.start}),t.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const e={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case"doc-start":{Fo(e.start)!==-1?(yield*this.pop(),yield*this.step()):e.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":e.start.push(this.sourceToken);return}const t=this.startBlockValue(e);t?this.stack.push(t):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type==="map-value-ind"){const t=dr(this.peek(2)),r=Xe(t);let s;e.end?(s=e.end,s.push(this.sourceToken),delete e.end):s=[this.sourceToken];const i={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:r,key:e,sep:s}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=i}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case"space":case"comment":case"newline":e.props.push(this.sourceToken);return;case"scalar":if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){var r;const t=e.items[e.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,t.value){const s="end"in t.value?t.value.end:void 0,i=Array.isArray(s)?s[s.length-1]:void 0;(i==null?void 0:i.type)==="comment"?s==null||s.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,e.indent)){const s=e.items[e.items.length-2],i=(r=s==null?void 0:s.value)==null?void 0:r.end;if(Array.isArray(i)){Lr(i,t.start),i.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return}if(this.indent>=e.indent){const s=!this.onKeyLine&&this.indent===e.indent,i=s&&(t.sep||t.explicitKey)&&this.type!=="seq-item-ind";let o=[];if(i&&t.sep&&!t.value){const a=[];for(let c=0;c<t.sep.length;++c){const l=t.sep[c];switch(l.type){case"newline":a.push(c);break;case"space":break;case"comment":l.indent>e.indent&&(a.length=0);break;default:a.length=0}}a.length>=2&&(o=t.sep.splice(a[1]))}switch(this.type){case"anchor":case"tag":i||t.value?(o.push(this.sourceToken),e.items.push({start:o}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"explicit-key-ind":!t.sep&&!t.explicitKey?(t.start.push(this.sourceToken),t.explicitKey=!0):i||t.value?(o.push(this.sourceToken),e.items.push({start:o,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(t.explicitKey)if(t.sep)if(t.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(Ce(t.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:null,sep:[this.sourceToken]}]});else if(nl(t.key)&&!Ce(t.sep,"newline")){const a=Xe(t.start),c=t.key,l=t.sep;l.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:c,sep:l}]})}else o.length>0?t.sep=t.sep.concat(o,this.sourceToken):t.sep.push(this.sourceToken);else if(Ce(t.start,"newline"))Object.assign(t,{key:null,sep:[this.sourceToken]});else{const a=Xe(t.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:null,sep:[this.sourceToken]}]})}else t.sep?t.value||i?e.items.push({start:o,key:null,sep:[this.sourceToken]}):Ce(t.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const a=this.flowScalar(this.type);i||t.value?(e.items.push({start:o,key:a,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(a):(Object.assign(t,{key:a,sep:[]}),this.onKeyLine=!0);return}default:{const a=this.startBlockValue(e);if(a){if(a.type==="block-seq"){if(!t.explicitKey&&t.sep&&!Ce(t.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else s&&e.items.push({start:o});this.stack.push(a);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){var r;const t=e.items[e.items.length-1];switch(this.type){case"newline":if(t.value){const s="end"in t.value?t.value.end:void 0,i=Array.isArray(s)?s[s.length-1]:void 0;(i==null?void 0:i.type)==="comment"?s==null||s.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,e.indent)){const s=e.items[e.items.length-2],i=(r=s==null?void 0:s.value)==null?void 0:r.end;if(Array.isArray(i)){Lr(i,t.start),i.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return;case"anchor":case"tag":if(t.value||this.indent<=e.indent)break;t.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==e.indent)break;t.value||Ce(t.start,"seq-item-ind")?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return}if(this.indent>e.indent){const s=this.startBlockValue(e);if(s){this.stack.push(s);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){const t=e.items[e.items.length-1];if(this.type==="flow-error-end"){let r;do yield*this.pop(),r=this.peek(1);while((r==null?void 0:r.type)==="flow-collection")}else if(e.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!t||t.sep?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return;case"map-value-ind":!t||t.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!t||t.value?e.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const s=this.flowScalar(this.type);!t||t.value?e.items.push({start:[],key:s,sep:[]}):t.sep?this.stack.push(s):Object.assign(t,{key:s,sep:[]});return}case"flow-map-end":case"flow-seq-end":e.end.push(this.sourceToken);return}const r=this.startBlockValue(e);r?this.stack.push(r):(yield*this.pop(),yield*this.step())}else{const r=this.peek(2);if(r.type==="block-map"&&(this.type==="map-value-ind"&&r.indent===e.indent||this.type==="newline"&&!r.items[r.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&r.type!=="flow-collection"){const s=dr(r),i=Xe(s);Uo(e);const o=e.end.splice(1,e.end.length);o.push(this.sourceToken);const a={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:i,key:e,sep:o}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=a}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const t=dr(e),r=Xe(t);return r.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:r,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const t=dr(e),r=Xe(t);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:r,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,t){return this.type!=="comment"||this.indent<=t?!1:e.every(r=>r.type==="newline"||r.type==="space")}*documentEnd(e){this.type!=="doc-mode"&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function ph(n){const e=n.prettyErrors!==!1;return{lineCounter:n.lineCounter||e&&new lh||null,prettyErrors:e}}function fh(n,e={}){const{lineCounter:t,prettyErrors:r}=ph(e),s=new uh(t==null?void 0:t.addNewLine),i=new sh(e);let o=null;for(const a of i.compose(s.parse(n),!0,n.length))if(!o)o=a;else if(o.options.logLevel!=="silent"){o.errors.push(new It(a.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return r&&t&&(o.errors.forEach(Do(n,t)),o.warnings.forEach(Do(n,t))),o}function dh(n,e,t){let r;const s=fh(n,t);if(!s)return null;if(s.warnings.forEach(i=>Nc(s.options.logLevel,i)),s.errors.length>0){if(s.options.logLevel!=="silent")throw s.errors[0];s.errors=[]}return s.toJS(Object.assign({reviver:r},t))}const hh=Object.assign({"../../../cpp/branch/p.brn.aid.standard.yaml":Pf,"../../../cpp/branch/p.brn.decide.standard.yaml":xf,"../../../cpp/branch/p.brn.fees.standard.yaml":Mf,"../../../cpp/branch/p.brn.spend.standard.yaml":Df,"../../../cpp/branch/p.brn.trust.standard.yaml":Bf,"../../../cpp/capital/p.cap.debt.standard.yaml":$f,"../../../cpp/capital/p.cap.invest.standard.yaml":jf,"../../../cpp/capital/p.cap.prop.standard.yaml":Ff,"../../../cpp/capital/p.cap.rid.standard.yaml":Uf,"../../../cpp/draft/drf.approve.standard.yaml":Kf,"../../../cpp/marketplace/p.mkt.claim.standard.yaml":Vf,"../../../cpp/marketplace/p.mkt.return.standard.yaml":qf,"../../../cpp/marketplace/p.mkt.supply.standard.yaml":Hf,"../../../cpp/marketplace/p.mkt.wroff.standard.yaml":zf,"../../../cpp/meet/meet.hold.standard.yaml":Gf,"../../../cpp/registrator/p.reg.accept.standard.yaml":Wf,"../../../cpp/registrator/p.reg.refund.standard.yaml":Yf,"../../../cpp/registrator/reg.coop.standard.yaml":Jf,"../../../cpp/soviet/p.sov.tax.standard.yaml":Qf,"../../../cpp/soviet/sov.authpkg.standard.yaml":Xf,"../../../cpp/soviet/sov.decision.standard.yaml":Zf,"../../../cpp/soviet/sov.robot.standard.yaml":nd,"../../../cpp/soviet/sov.selectbranch.standard.yaml":ed,"../../../cpp/wallet/p.wal.depo.standard.yaml":td,"../../../cpp/wallet/p.wal.wthdrw.standard.yaml":rd});function mh(n){if(n===null||typeof n!="object")return!1;const e=n;return!!(e.process_type&&e.title&&e.contract&&e.slug)}function gh(){var r;const n={},e={};for(const[s,i]of Object.entries(hh)){let o;try{o=dh(i)}catch(c){console.error(`[standards] YAML parse error in ${s}:`,c);continue}if(!mh(o)){console.warn(`[standards] Файл ${s} не похож на standard-манифест (обязательные поля: process_type, title, contract, slug)`);continue}if(n[o.process_type]){console.warn(`[standards] Дубликат process_type "${o.process_type}" в ${s}`);continue}n[o.process_type]=o;const a={process_type:o.process_type,title:o.title,contract:o.contract,slug:o.slug,path:s,status:o.status};(e[r=o.contract]??(e[r]=[])).push(a)}for(const s of Object.values(e))s.sort((i,o)=>i.title.localeCompare(o.title,"ru"));const t=Object.keys(e).sort();return{byProcessType:n,byContract:e,contracts:t}}const Qs=gh();function cm(n){return Qs.byProcessType[n]}const _h={registrator:"Регистратор",wallet:"Главный кошелёк",capital:"«Благорост»",marketplace:"«Стол заказов»",soviet:"Совет",meet:"Общие собрания",ledger2:"Учёт операций"},lm={proposed:"предложен",approved:"утверждён",active:"действующий",deprecated:"устаревший"};/**
 * @license lucide-vue-next v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var hr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=({size:n,strokeWidth:e=2,absoluteStrokeWidth:t,color:r,iconNode:s,name:i,class:o,...a},{slots:c})=>Wt("svg",{...hr,width:n||hr.width,height:n||hr.height,stroke:r||hr.stroke,"stroke-width":t?Number(e)*24/Number(n):e,class:["lucide",`lucide-${yh(i??"icon")}`],...a},[...s.map(l=>Wt(...l)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=(n,e)=>(t,{slots:r})=>Wt(bh,{...t,iconNode:e,name:n},r);/**
 * @license lucide-vue-next v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=el("MoonIcon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=el("SunIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),tl="standards.theme";function rl(){try{const n=localStorage.getItem(tl);return n==="light"||n==="dark"?n:null}catch{return null}}function kh(){return typeof window>"u"||!window.matchMedia?"light":window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Li(n){typeof document<"u"&&(document.documentElement.dataset.theme=n)}const Pe=qr(rl()??kh());let Ko=!1;function Sh(){if(!Ko&&(Ko=!0,Li(Pe.value),typeof window<"u"&&window.matchMedia)){const n=window.matchMedia("(prefers-color-scheme: dark)"),e=t=>{rl()===null&&(Pe.value=t.matches?"dark":"light")};n.addEventListener("change",e)}}Mt(Pe,n=>{Li(n);try{localStorage.setItem(tl,n)}catch{}});typeof document<"u"&&Li(Pe.value);function Eh(){return li(Sh),ui(()=>{}),{theme:Pe,toggle:()=>{Pe.value=Pe.value==="dark"?"light":"dark"},setTheme:n=>{Pe.value=n}}}const Ah=["title","aria-label"],Nh=nr({__name:"ThemeToggle",setup(n){const{theme:e,toggle:t}=Eh();return(r,s)=>(Cn(),ae("button",{type:"button",class:"theme-toggle",title:vn(e)==="dark"?"Светлая тема":"Тёмная тема","aria-label":vn(e)==="dark"?"Светлая тема":"Тёмная тема",onClick:s[0]||(s[0]=(...i)=>vn(t)&&vn(t)(...i))},[vn(e)==="dark"?(Cn(),Ht(vn(vh),{key:0,size:16})):(Cn(),Ht(vn(wh),{key:1,size:16})),Sn("span",null,Lt(vn(e)==="dark"?"Светлая":"Тёмная"),1)],8,Ah))}}),sl=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},Oh=sl(Nh,[["__scopeId","data-v-736ff43a"]]),Th={class:"sidebar"},Rh={class:"sidebar-brand"},Ih={class:"sidebar-body"},Ch={key:0,class:"sidebar-empty"},Lh={class:"sidebar-group__head"},Ph={class:"sidebar-group__name"},xh={key:0,class:"sidebar-group__code"},Mh={class:"sidebar-group__list"},Dh={class:"sidebar-foot"},Bh=nr({__name:"Sidebar",setup(n){const e=Lf(),t=Pn(()=>Qs.contracts),r=Pn(()=>Qs.byContract),s=Pn(()=>t.value.length===0),i=Pn(()=>typeof e.params.processType=="string"?e.params.processType:null);function o(a){return _h[a]??""}return(a,c)=>(Cn(),ae("nav",Th,[Sn("div",Rh,[_n(vn(qs),{to:"/"},{default:Ps(()=>[...c[0]||(c[0]=[Sn("div",{class:"sidebar-brand__title"},"Кооперативные стандарты",-1),Sn("div",{class:"sidebar-brand__subtitle"},"Реестр v1",-1)])]),_:1})]),Sn("div",Ih,[s.value?(Cn(),ae("p",Ch,[...c[1]||(c[1]=[_r(" Стандарты не найдены. Добавьте ",-1),Sn("code",null,"*.standard.yaml",-1),_r(" рядом с кодом контракта. ",-1)])])):Zi("",!0),(Cn(!0),ae(Fn,null,qi(t.value,l=>(Cn(),ae("div",{key:l,class:"sidebar-group"},[Sn("div",Lh,[Sn("span",Ph,Lt(o(l)||l),1),o(l)?(Cn(),ae("code",xh,Lt(l),1)):Zi("",!0)]),Sn("ul",Mh,[(Cn(!0),ae(Fn,null,qi(r.value[l],u=>(Cn(),ae("li",{key:u.process_type},[_n(vn(qs),{to:{name:"process",params:{contract:u.contract,processType:u.process_type}},class:jr(["sidebar-item",{"sidebar-item--active":i.value===u.process_type}])},{default:Ps(()=>[_r(Lt(u.title),1)]),_:2},1032,["to","class"])]))),128))])]))),128))]),Sn("div",Dh,[_n(Oh)])]))}}),$h=sl(Bh,[["__scopeId","data-v-fff96373"]]),jh={key:0,class:"mobile-stub"},Fh={key:1,class:"app-shell"},Uh={class:"app-sidebar"},Kh={class:"app-main"},Vh=900,qh=nr({__name:"App",setup(n){const e=qr(!1);function t(){typeof window>"u"||(e.value=window.innerWidth<Vh)}return li(()=>{t(),window.addEventListener("resize",t)}),ui(()=>{window.removeEventListener("resize",t)}),(r,s)=>{const i=du("router-view");return e.value?(Cn(),ae("div",jh,[...s[0]||(s[0]=[Sn("div",{class:"mobile-stub__box"},[Sn("h1",null,"Только для десктопа"),Sn("p",null," Реестр кооперативных стандартов рассчитан на широкие экраны — BPMN-граф процесса не помещается на мобильных устройствах. Откройте сайт с компьютера или планшета. ")],-1)])])):(Cn(),ae("div",Fh,[Sn("aside",Uh,[_n($h)]),Sn("main",Kh,[_n(i)])]))}}}),Hh="modulepreload",zh=function(n){return"/standards/"+n},Vo={},Ts=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){let o=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=o(t.map(l=>{if(l=zh(l),l in Vo)return;Vo[l]=!0;const u=l.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${p}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":Hh,u||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),u)return new Promise((d,b)=>{f.addEventListener("load",d),f.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})},Gh=[{path:"/",name:"home",component:()=>Ts(()=>import("./HomePage-BkKp7fSO.js"),__vite__mapDeps([0,1]))},{path:"/:contract/:processType",name:"process",component:()=>Ts(()=>import("./ProcessPage-JTDL-qKD.js"),__vite__mapDeps([2,3])),props:!0},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>Ts(()=>import("./NotFoundPage-DpvShfEs.js"),[])}],Wh=Cf({history:uf(),routes:Gh,scrollBehavior(n,e){if(!(n.name!==e.name||n.params.processType!==e.params.processType))return!1;if(typeof document<"u"){const r=document.querySelector(".app-main");r?r.scrollTo({top:0,behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"})}return{top:0}}});kp(qh).use(Wh).mount("#app");export{am as $,nc as A,Yh as B,_h as C,ui as D,Qh as E,Fn as F,ni as G,Qn as H,Kr as I,yn as J,Zh as K,Xh as L,_l as M,ba as N,Ls as O,Bl as P,Jh as Q,qs as R,lm as S,om as T,mr as U,Wt as V,du as W,sm as X,Vu as Y,em as Z,sl as _,Sn as a,Eh as a0,Lf as a1,cm as a2,_r as b,ae as c,nr as d,Zi as e,Pn as f,Ht as g,el as h,rm as i,Ra as j,_n as k,tm as l,Mt as m,ou as n,Cn as o,li as p,jr as q,qi as r,Qs as s,Lt as t,vn as u,$l as v,Ps as w,nm as x,im as y,qr as z};
