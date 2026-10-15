const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomePage-BW13JDg6.js","assets/HomePage-BghuQ2Oi.css","assets/ProcessPage-CFfB-Znr.js","assets/ProcessPage-Beov_L-m.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vo(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const an={},pt=[],ge=()=>{},ga=()=>!1,Yr=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Jr=n=>n.startsWith("onUpdate:"),Sn=Object.assign,ko=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},jl=Object.prototype.hasOwnProperty,rn=(n,e)=>jl.call(n,e),V=Array.isArray,ft=n=>ur(n)==="[object Map]",Qr=n=>ur(n)==="[object Set]",ei=n=>ur(n)==="[object Date]",G=n=>typeof n=="function",pn=n=>typeof n=="string",zn=n=>typeof n=="symbol",nn=n=>n!==null&&typeof n=="object",_a=n=>(nn(n)||G(n))&&G(n.then)&&G(n.catch),ba=Object.prototype.toString,ur=n=>ba.call(n),Ul=n=>ur(n).slice(8,-1),ya=n=>ur(n)==="[object Object]",Xr=n=>pn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ut=vo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zr=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Kl=/-\w/g,$n=Zr(n=>n.replace(Kl,e=>e.slice(1).toUpperCase())),Vl=/\B([A-Z])/g,et=Zr(n=>n.replace(Vl,"-$1").toLowerCase()),ns=Zr(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ns=Zr(n=>n?`on${ns(n)}`:""),Zn=(n,e)=>!Object.is(n,e),Or=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},wa=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},ql=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Hl=n=>{const e=pn(n)?Number(n):NaN;return isNaN(e)?n:e};let ti;const es=()=>ti||(ti=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function So(n){if(V(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=pn(r)?Yl(r):So(r);if(s)for(const o in s)e[o]=s[o]}return e}else if(pn(n)||nn(n))return n}const zl=/;(?![^(]*\))/g,Gl=/:([^]+)/,Wl=/\/\*[^]*?\*\//g;function Yl(n){const e={};return n.replace(Wl,"").split(zl).forEach(t=>{if(t){const r=t.split(Gl);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function dr(n){let e="";if(pn(n))e=n;else if(V(n))for(let t=0;t<n.length;t++){const r=dr(n[t]);r&&(e+=r+" ")}else if(nn(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Jl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ql=vo(Jl);function va(n){return!!n||n===""}function Xl(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=pr(n[r],e[r]);return t}function pr(n,e){if(n===e)return!0;let t=ei(n),r=ei(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=zn(n),r=zn(e),t||r)return n===e;if(t=V(n),r=V(e),t||r)return t&&r?Xl(n,e):!1;if(t=nn(n),r=nn(e),t||r){if(!t||!r)return!1;const s=Object.keys(n).length,o=Object.keys(e).length;if(s!==o)return!1;for(const i in n){const a=n.hasOwnProperty(i),c=e.hasOwnProperty(i);if(a&&!c||!a&&c||!pr(n[i],e[i]))return!1}}return String(n)===String(e)}function ka(n,e){return n.findIndex(t=>pr(t,e))}const Sa=n=>!!(n&&n.__v_isRef===!0),Kt=n=>pn(n)?n:n==null?"":V(n)||nn(n)&&(n.toString===ba||!G(n.toString))?Sa(n)?Kt(n.value):JSON.stringify(n,Ea,2):String(n),Ea=(n,e)=>Sa(e)?Ea(n,e.value):ft(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],o)=>(t[Ts(r,o)+" =>"]=s,t),{})}:Qr(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ts(t))}:zn(e)?Ts(e):nn(e)&&!V(e)&&!ya(e)?String(e):e,Ts=(n,e="")=>{var t;return zn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tn;class Aa{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Tn,!e&&Tn&&(this.index=(Tn.scopes||(Tn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Tn;try{return Tn=this,e()}finally{Tn=t}}}on(){++this._on===1&&(this.prevScope=Tn,Tn=this)}off(){this._on>0&&--this._on===0&&(Tn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function zh(n){return new Aa(n)}function Zl(){return Tn}function Gh(n,e=!1){Tn&&Tn.cleanups.push(n)}let ln;const xs=new WeakSet;class Na{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Tn&&Tn.active&&Tn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,xs.has(this)&&(xs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||xa(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ri(this),Oa(this);const e=ln,t=ne;ln=this,ne=!0;try{return this.fn()}finally{Ra(this),ln=e,ne=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)No(e);this.deps=this.depsTail=void 0,ri(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?xs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Js(this)&&this.run()}get dirty(){return Js(this)}}let Ta=0,Vt,qt;function xa(n,e=!1){if(n.flags|=8,e){n.next=qt,qt=n;return}n.next=Vt,Vt=n}function Eo(){Ta++}function Ao(){if(--Ta>0)return;if(qt){let e=qt;for(qt=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Vt;){let e=Vt;for(Vt=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function Oa(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ra(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),No(r),nu(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function Js(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ca(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Ca(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Xt)||(n.globalVersion=Xt,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Js(n))))return;n.flags|=2;const e=n.dep,t=ln,r=ne;ln=n,ne=!0;try{Oa(n);const s=n.fn(n._value);(e.version===0||Zn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{ln=t,ne=r,Ra(n),n.flags&=-3}}function No(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let o=t.computed.deps;o;o=o.nextDep)No(o,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function nu(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let ne=!0;const Ia=[];function xe(){Ia.push(ne),ne=!1}function Oe(){const n=Ia.pop();ne=n===void 0?!0:n}function ri(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ln;ln=void 0;try{e()}finally{ln=t}}}let Xt=0;class eu{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ts{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ln||!ne||ln===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ln)t=this.activeLink=new eu(ln,this),ln.deps?(t.prevDep=ln.depsTail,ln.depsTail.nextDep=t,ln.depsTail=t):ln.deps=ln.depsTail=t,La(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=ln.depsTail,t.nextDep=void 0,ln.depsTail.nextDep=t,ln.depsTail=t,ln.deps===t&&(ln.deps=r)}return t}trigger(e){this.version++,Xt++,this.notify(e)}notify(e){Eo();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ao()}}}function La(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)La(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Br=new WeakMap,Xe=Symbol(""),Qs=Symbol(""),Zt=Symbol("");function xn(n,e,t){if(ne&&ln){let r=Br.get(n);r||Br.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new ts),s.map=r,s.key=t),s.track()}}function Ee(n,e,t,r,s,o){const i=Br.get(n);if(!i){Xt++;return}const a=c=>{c&&c.trigger()};if(Eo(),e==="clear")i.forEach(a);else{const c=V(n),l=c&&Xr(t);if(c&&t==="length"){const u=Number(r);i.forEach((d,p)=>{(p==="length"||p===Zt||!zn(p)&&p>=u)&&a(d)})}else switch((t!==void 0||i.has(void 0))&&a(i.get(t)),l&&a(i.get(Zt)),e){case"add":c?l&&a(i.get("length")):(a(i.get(Xe)),ft(n)&&a(i.get(Qs)));break;case"delete":c||(a(i.get(Xe)),ft(n)&&a(i.get(Qs)));break;case"set":ft(n)&&a(i.get(Xe));break}}Ao()}function tu(n,e){const t=Br.get(n);return t&&t.get(e)}function st(n){const e=Z(n);return e===n?e:(xn(e,"iterate",Zt),Hn(n)?e:e.map(te))}function rs(n){return xn(n=Z(n),"iterate",Zt),n}function fe(n,e){return Re(n)?yt(Ze(n)?te(e):e):te(e)}const ru={__proto__:null,[Symbol.iterator](){return Os(this,Symbol.iterator,n=>fe(this,n))},concat(...n){return st(this).concat(...n.map(e=>V(e)?st(e):e))},entries(){return Os(this,"entries",n=>(n[1]=fe(this,n[1]),n))},every(n,e){return ye(this,"every",n,e,void 0,arguments)},filter(n,e){return ye(this,"filter",n,e,t=>t.map(r=>fe(this,r)),arguments)},find(n,e){return ye(this,"find",n,e,t=>fe(this,t),arguments)},findIndex(n,e){return ye(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return ye(this,"findLast",n,e,t=>fe(this,t),arguments)},findLastIndex(n,e){return ye(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return ye(this,"forEach",n,e,void 0,arguments)},includes(...n){return Rs(this,"includes",n)},indexOf(...n){return Rs(this,"indexOf",n)},join(n){return st(this).join(n)},lastIndexOf(...n){return Rs(this,"lastIndexOf",n)},map(n,e){return ye(this,"map",n,e,void 0,arguments)},pop(){return It(this,"pop")},push(...n){return It(this,"push",n)},reduce(n,...e){return si(this,"reduce",n,e)},reduceRight(n,...e){return si(this,"reduceRight",n,e)},shift(){return It(this,"shift")},some(n,e){return ye(this,"some",n,e,void 0,arguments)},splice(...n){return It(this,"splice",n)},toReversed(){return st(this).toReversed()},toSorted(n){return st(this).toSorted(n)},toSpliced(...n){return st(this).toSpliced(...n)},unshift(...n){return It(this,"unshift",n)},values(){return Os(this,"values",n=>fe(this,n))}};function Os(n,e,t){const r=rs(n),s=r[e]();return r!==n&&!Hn(n)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.done||(o.value=t(o.value)),o}),s}const su=Array.prototype;function ye(n,e,t,r,s,o){const i=rs(n),a=i!==n&&!Hn(n),c=i[e];if(c!==su[e]){const d=c.apply(n,o);return a?te(d):d}let l=t;i!==n&&(a?l=function(d,p){return t.call(this,fe(n,d),p,n)}:t.length>2&&(l=function(d,p){return t.call(this,d,p,n)}));const u=c.call(i,l,r);return a&&s?s(u):u}function si(n,e,t,r){const s=rs(n),o=s!==n&&!Hn(n);let i=t,a=!1;s!==n&&(o?(a=r.length===0,i=function(l,u,d){return a&&(a=!1,l=fe(n,l)),t.call(this,l,fe(n,u),d,n)}):t.length>3&&(i=function(l,u,d){return t.call(this,l,u,d,n)}));const c=s[e](i,...r);return a?fe(n,c):c}function Rs(n,e,t){const r=Z(n);xn(r,"iterate",Zt);const s=r[e](...t);return(s===-1||s===!1)&&os(t[0])?(t[0]=Z(t[0]),r[e](...t)):s}function It(n,e,t=[]){xe(),Eo();const r=Z(n)[e].apply(n,t);return Ao(),Oe(),r}const ou=vo("__proto__,__v_isRef,__isVue"),Pa=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(zn));function iu(n){zn(n)||(n=String(n));const e=Z(this);return xn(e,"has",n),e.hasOwnProperty(n)}class Da{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,o=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return o;if(t==="__v_raw")return r===(s?o?gu:$a:o?Fa:Ba).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const i=V(e);if(!s){let c;if(i&&(c=ru[t]))return c;if(t==="hasOwnProperty")return iu}const a=Reflect.get(e,t,kn(e)?e:r);if((zn(t)?Pa.has(t):ou(t))||(s||xn(e,"get",t),o))return a;if(kn(a)){const c=i&&Xr(t)?a:a.value;return s&&nn(c)?Zs(c):c}return nn(a)?s?Zs(a):ss(a):a}}class Ma extends Da{constructor(e=!1){super(!1,e)}set(e,t,r,s){let o=e[t];const i=V(e)&&Xr(t);if(!this._isShallow){const l=Re(o);if(!Hn(r)&&!Re(r)&&(o=Z(o),r=Z(r)),!i&&kn(o)&&!kn(r))return l||(o.value=r),!0}const a=i?Number(t)<e.length:rn(e,t),c=Reflect.set(e,t,r,kn(e)?e:s);return e===Z(s)&&(a?Zn(r,o)&&Ee(e,"set",t,r):Ee(e,"add",t,r)),c}deleteProperty(e,t){const r=rn(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&Ee(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!zn(t)||!Pa.has(t))&&xn(e,"has",t),r}ownKeys(e){return xn(e,"iterate",V(e)?"length":Xe),Reflect.ownKeys(e)}}class au extends Da{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const cu=new Ma,lu=new au,uu=new Ma(!0);const Xs=n=>n,wr=n=>Reflect.getPrototypeOf(n);function du(n,e,t){return function(...r){const s=this.__v_raw,o=Z(s),i=ft(o),a=n==="entries"||n===Symbol.iterator&&i,c=n==="keys"&&i,l=s[n](...r),u=t?Xs:e?yt:te;return!e&&xn(o,"iterate",c?Qs:Xe),Sn(Object.create(l),{next(){const{value:d,done:p}=l.next();return p?{value:d,done:p}:{value:a?[u(d[0]),u(d[1])]:u(d),done:p}}})}}function vr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function pu(n,e){const t={get(s){const o=this.__v_raw,i=Z(o),a=Z(s);n||(Zn(s,a)&&xn(i,"get",s),xn(i,"get",a));const{has:c}=wr(i),l=e?Xs:n?yt:te;if(c.call(i,s))return l(o.get(s));if(c.call(i,a))return l(o.get(a));o!==i&&o.get(s)},get size(){const s=this.__v_raw;return!n&&xn(Z(s),"iterate",Xe),s.size},has(s){const o=this.__v_raw,i=Z(o),a=Z(s);return n||(Zn(s,a)&&xn(i,"has",s),xn(i,"has",a)),s===a?o.has(s):o.has(s)||o.has(a)},forEach(s,o){const i=this,a=i.__v_raw,c=Z(a),l=e?Xs:n?yt:te;return!n&&xn(c,"iterate",Xe),a.forEach((u,d)=>s.call(o,l(u),l(d),i))}};return Sn(t,n?{add:vr("add"),set:vr("set"),delete:vr("delete"),clear:vr("clear")}:{add(s){const o=Z(this),i=wr(o),a=Z(s),c=!e&&!Hn(s)&&!Re(s)?a:s;return i.has.call(o,c)||Zn(s,c)&&i.has.call(o,s)||Zn(a,c)&&i.has.call(o,a)||(o.add(c),Ee(o,"add",c,c)),this},set(s,o){!e&&!Hn(o)&&!Re(o)&&(o=Z(o));const i=Z(this),{has:a,get:c}=wr(i);let l=a.call(i,s);l||(s=Z(s),l=a.call(i,s));const u=c.call(i,s);return i.set(s,o),l?Zn(o,u)&&Ee(i,"set",s,o):Ee(i,"add",s,o),this},delete(s){const o=Z(this),{has:i,get:a}=wr(o);let c=i.call(o,s);c||(s=Z(s),c=i.call(o,s)),a&&a.call(o,s);const l=o.delete(s);return c&&Ee(o,"delete",s,void 0),l},clear(){const s=Z(this),o=s.size!==0,i=s.clear();return o&&Ee(s,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=du(s,n,e)}),t}function To(n,e){const t=pu(n,e);return(r,s,o)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(rn(t,s)&&s in r?t:r,s,o)}const fu={get:To(!1,!1)},mu={get:To(!1,!0)},hu={get:To(!0,!1)};const Ba=new WeakMap,Fa=new WeakMap,$a=new WeakMap,gu=new WeakMap;function _u(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bu(n){return n.__v_skip||!Object.isExtensible(n)?0:_u(Ul(n))}function ss(n){return Re(n)?n:xo(n,!1,cu,fu,Ba)}function ja(n){return xo(n,!1,uu,mu,Fa)}function Zs(n){return xo(n,!0,lu,hu,$a)}function xo(n,e,t,r,s){if(!nn(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const o=bu(n);if(o===0)return n;const i=s.get(n);if(i)return i;const a=new Proxy(n,o===2?r:t);return s.set(n,a),a}function Ze(n){return Re(n)?Ze(n.__v_raw):!!(n&&n.__v_isReactive)}function Re(n){return!!(n&&n.__v_isReadonly)}function Hn(n){return!!(n&&n.__v_isShallow)}function os(n){return n?!!n.__v_raw:!1}function Z(n){const e=n&&n.__v_raw;return e?Z(e):n}function yu(n){return!rn(n,"__v_skip")&&Object.isExtensible(n)&&wa(n,"__v_skip",!0),n}const te=n=>nn(n)?ss(n):n,yt=n=>nn(n)?Zs(n):n;function kn(n){return n?n.__v_isRef===!0:!1}function nr(n){return Ua(n,!1)}function wu(n){return Ua(n,!0)}function Ua(n,e){return kn(n)?n:new vu(n,e)}class vu{constructor(e,t){this.dep=new ts,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Z(e),this._value=t?e:te(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||Hn(e)||Re(e);e=r?e:Z(e),Zn(e,t)&&(this._rawValue=e,this._value=r?e:te(e),this.dep.trigger())}}function yn(n){return kn(n)?n.value:n}function Wh(n){return G(n)?n():yn(n)}const ku={get:(n,e,t)=>e==="__v_raw"?n:yn(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return kn(s)&&!kn(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function Ka(n){return Ze(n)?n:new Proxy(n,ku)}class Su{constructor(e){this.__v_isRef=!0,this._value=void 0;const t=this.dep=new ts,{get:r,set:s}=e(t.track.bind(t),t.trigger.bind(t));this._get=r,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}}function Yh(n){return new Su(n)}function Jh(n){const e=V(n)?new Array(n.length):{};for(const t in n)e[t]=Va(n,t);return e}class Eu{constructor(e,t,r){this._object=e,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._key=zn(t)?t:String(t),this._raw=Z(e);let s=!0,o=e;if(!V(e)||zn(this._key)||!Xr(this._key))do s=!os(o)||Hn(o);while(s&&(o=o.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=yn(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&kn(this._raw[this._key])){const t=this._object[this._key];if(kn(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return tu(this._raw,this._key)}}class Au{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Qh(n,e,t){return kn(n)?n:G(n)?new Au(n):nn(n)&&arguments.length>1?Va(n,e,t):nr(n)}function Va(n,e,t){return new Eu(n,e,t)}class Nu{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new ts(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Xt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ln!==this)return xa(this,!0),!0}get value(){const e=this.dep.track();return Ca(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Tu(n,e,t=!1){let r,s;return G(n)?r=n:(r=n.get,s=n.set),new Nu(r,s,t)}const kr={},Fr=new WeakMap;let ze;function xu(n,e=!1,t=ze){if(t){let r=Fr.get(t);r||Fr.set(t,r=[]),r.push(n)}}function Ou(n,e,t=an){const{immediate:r,deep:s,once:o,scheduler:i,augmentJob:a,call:c}=t,l=A=>s?A:Hn(A)||s===!1||s===0?Ae(A,1):Ae(A);let u,d,p,f,y=!1,g=!1;if(kn(n)?(d=()=>n.value,y=Hn(n)):Ze(n)?(d=()=>l(n),y=!0):V(n)?(g=!0,y=n.some(A=>Ze(A)||Hn(A)),d=()=>n.map(A=>{if(kn(A))return A.value;if(Ze(A))return l(A);if(G(A))return c?c(A,2):A()})):G(n)?e?d=c?()=>c(n,2):n:d=()=>{if(p){xe();try{p()}finally{Oe()}}const A=ze;ze=u;try{return c?c(n,3,[f]):n(f)}finally{ze=A}}:d=ge,e&&s){const A=d,R=s===!0?1/0:s;d=()=>Ae(A(),R)}const b=Zl(),v=()=>{u.stop(),b&&b.active&&ko(b.effects,u)};if(o&&e){const A=e;e=(...R)=>{A(...R),v()}}let w=g?new Array(n.length).fill(kr):kr;const T=A=>{if(!(!(u.flags&1)||!u.dirty&&!A))if(e){const R=u.run();if(s||y||(g?R.some((j,M)=>Zn(j,w[M])):Zn(R,w))){p&&p();const j=ze;ze=u;try{const M=[R,w===kr?void 0:g&&w[0]===kr?[]:w,f];w=R,c?c(e,3,M):e(...M)}finally{ze=j}}}else u.run()};return a&&a(T),u=new Na(d),u.scheduler=i?()=>i(T,!1):T,f=A=>xu(A,!1,u),p=u.onStop=()=>{const A=Fr.get(u);if(A){if(c)c(A,4);else for(const R of A)R();Fr.delete(u)}},e?r?T(!0):w=u.run():i?i(T.bind(null,!0),!0):u.run(),v.pause=u.pause.bind(u),v.resume=u.resume.bind(u),v.stop=v,v}function Ae(n,e=1/0,t){if(e<=0||!nn(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,kn(n))Ae(n.value,e,t);else if(V(n))for(let r=0;r<n.length;r++)Ae(n[r],e,t);else if(Qr(n)||ft(n))n.forEach(r=>{Ae(r,e,t)});else if(ya(n)){for(const r in n)Ae(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&Ae(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function fr(n,e,t,r){try{return r?n(...r):n()}catch(s){is(s,e,t)}}function re(n,e,t,r){if(G(n)){const s=fr(n,e,t,r);return s&&_a(s)&&s.catch(o=>{is(o,e,t)}),s}if(V(n)){const s=[];for(let o=0;o<n.length;o++)s.push(re(n[o],e,t,r));return s}}function is(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:i}=e&&e.appContext.config||an;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,c,l)===!1)return}a=a.parent}if(o){xe(),fr(o,null,10,[n,c,l]),Oe();return}}Ru(n,t,s,r,i)}function Ru(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const Pn=[];let de=-1;const mt=[];let De=null,at=0;const qa=Promise.resolve();let $r=null;function Ha(n){const e=$r||qa;return n?e.then(this?n.bind(this):n):e}function Cu(n){let e=de+1,t=Pn.length;for(;e<t;){const r=e+t>>>1,s=Pn[r],o=er(s);o<n||o===n&&s.flags&2?e=r+1:t=r}return e}function Oo(n){if(!(n.flags&1)){const e=er(n),t=Pn[Pn.length-1];!t||!(n.flags&2)&&e>=er(t)?Pn.push(n):Pn.splice(Cu(e),0,n),n.flags|=1,za()}}function za(){$r||($r=qa.then(Wa))}function Iu(n){V(n)?mt.push(...n):De&&n.id===-1?De.splice(at+1,0,n):n.flags&1||(mt.push(n),n.flags|=1),za()}function oi(n,e,t=de+1){for(;t<Pn.length;t++){const r=Pn[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;Pn.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ga(n){if(mt.length){const e=[...new Set(mt)].sort((t,r)=>er(t)-er(r));if(mt.length=0,De){De.push(...e);return}for(De=e,at=0;at<De.length;at++){const t=De[at];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}De=null,at=0}}const er=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Wa(n){try{for(de=0;de<Pn.length;de++){const e=Pn[de];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),fr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;de<Pn.length;de++){const e=Pn[de];e&&(e.flags&=-2)}de=-1,Pn.length=0,Ga(),$r=null,(Pn.length||mt.length)&&Wa()}}let Nn=null,Ya=null;function jr(n){const e=Nn;return Nn=n,Ya=n&&n.type.__scopeId||null,e}function no(n,e=Nn,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&Vr(-1);const o=jr(e);let i;try{i=n(...s)}finally{jr(o),r._d&&Vr(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function Lu(n,e){if(Nn===null)return n;const t=fs(Nn),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[o,i,a,c=an]=e[s];o&&(G(o)&&(o={mounted:o,updated:o}),o.deep&&Ae(i),r.push({dir:o,instance:t,value:i,oldValue:void 0,arg:a,modifiers:c}))}return n}function Ke(n,e,t,r){const s=n.dirs,o=e&&e.dirs;for(let i=0;i<s.length;i++){const a=s[i];o&&(a.oldValue=o[i].value);let c=a.dir[r];c&&(xe(),re(c,t,8,[n.el,a,n,e]),Oe())}}function Rr(n,e){if(Rn){let t=Rn.provides;const r=Rn.parent&&Rn.parent.provides;r===t&&(t=Rn.provides=Object.create(r)),t[n]=e}}function ee(n,e,t=!1){const r=Lo();if(r||gt){let s=gt?gt._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&G(e)?e.call(r&&r.proxy):e}}const Pu=Symbol.for("v-scx"),Du=()=>ee(Pu);function Ht(n,e,t){return Ja(n,e,t)}function Ja(n,e,t=an){const{immediate:r,deep:s,flush:o,once:i}=t,a=Sn({},t),c=e&&r||!e&&o!=="post";let l;if(or){if(o==="sync"){const f=Du();l=f.__watcherHandles||(f.__watcherHandles=[])}else if(!c){const f=()=>{};return f.stop=ge,f.resume=ge,f.pause=ge,f}}const u=Rn;a.call=(f,y,g)=>re(f,u,y,g);let d=!1;o==="post"?a.scheduler=f=>{Kn(f,u&&u.suspense)}:o!=="sync"&&(d=!0,a.scheduler=(f,y)=>{y?f():Oo(f)}),a.augmentJob=f=>{e&&(f.flags|=4),d&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};const p=Ou(n,e,a);return or&&(l?l.push(p):c&&p()),p}function Mu(n,e,t){const r=this.proxy,s=pn(n)?n.includes(".")?Qa(r,n):()=>r[n]:n.bind(r,r);let o;G(e)?o=e:(o=e.handler,t=e);const i=hr(this),a=Ja(s,o.bind(r),t);return i(),a}function Qa(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const Bu=Symbol("_vte"),Xa=n=>n.__isTeleport,pe=Symbol("_leaveCb"),Lt=Symbol("_enterCb");function Fu(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ls(()=>{n.isMounted=!0}),us(()=>{n.isUnmounting=!0}),n}const Wn=[Function,Array],Za={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Wn,onEnter:Wn,onAfterEnter:Wn,onEnterCancelled:Wn,onBeforeLeave:Wn,onLeave:Wn,onAfterLeave:Wn,onLeaveCancelled:Wn,onBeforeAppear:Wn,onAppear:Wn,onAfterAppear:Wn,onAppearCancelled:Wn},nc=n=>{const e=n.subTree;return e.component?nc(e.component):e},$u={name:"BaseTransition",props:Za,setup(n,{slots:e}){const t=Lo(),r=Fu();return()=>{const s=e.default&&rc(e.default(),!0);if(!s||!s.length)return;const o=ec(s),i=Z(n),{mode:a}=i;if(r.isLeaving)return Cs(o);const c=ii(o);if(!c)return Cs(o);let l=eo(c,i,r,t,d=>l=d);c.type!==On&&tr(c,l);let u=t.subTree&&ii(t.subTree);if(u&&u.type!==On&&!We(u,c)&&nc(t).type!==On){let d=eo(u,i,r,t);if(tr(u,d),a==="out-in"&&c.type!==On)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,u=void 0},Cs(o);a==="in-out"&&c.type!==On?d.delayLeave=(p,f,y)=>{const g=tc(r,u);g[String(u.key)]=u,p[pe]=()=>{f(),p[pe]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{y(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return o}}};function ec(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==On){e=t;break}}return e}const ju=$u;function tc(n,e){const{leavingVNodes:t}=n;let r=t.get(e.type);return r||(r=Object.create(null),t.set(e.type,r)),r}function eo(n,e,t,r,s){const{appear:o,mode:i,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:p,onLeave:f,onAfterLeave:y,onLeaveCancelled:g,onBeforeAppear:b,onAppear:v,onAfterAppear:w,onAppearCancelled:T}=e,A=String(n.key),R=tc(t,n),j=(D,H)=>{D&&re(D,r,9,H)},M=(D,H)=>{const J=H[1];j(D,H),V(D)?D.every(I=>I.length<=1)&&J():D.length<=1&&J()},F={mode:i,persisted:a,beforeEnter(D){let H=c;if(!t.isMounted)if(o)H=b||c;else return;D[pe]&&D[pe](!0);const J=R[A];J&&We(n,J)&&J.el[pe]&&J.el[pe](),j(H,[D])},enter(D){if(R[A]===n)return;let H=l,J=u,I=d;if(!t.isMounted)if(o)H=v||l,J=w||u,I=T||d;else return;let Y=!1;D[Lt]=Vn=>{Y||(Y=!0,Vn?j(I,[D]):j(J,[D]),F.delayedLeave&&F.delayedLeave(),D[Lt]=void 0)};const fn=D[Lt].bind(null,!1);H?M(H,[D,fn]):fn()},leave(D,H){const J=String(n.key);if(D[Lt]&&D[Lt](!0),t.isUnmounting)return H();j(p,[D]);let I=!1;D[pe]=fn=>{I||(I=!0,H(),fn?j(g,[D]):j(y,[D]),D[pe]=void 0,R[J]===n&&delete R[J])};const Y=D[pe].bind(null,!1);R[J]=n,f?M(f,[D,Y]):Y()},clone(D){const H=eo(D,e,t,r,s);return s&&s(H),H}};return F}function Cs(n){if(as(n))return n=je(n),n.children=null,n}function ii(n){if(!as(n))return Xa(n.type)&&n.children?ec(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&G(t.default))return t.default()}}function tr(n,e){n.shapeFlag&6&&n.component?(n.transition=e,tr(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function rc(n,e=!1,t){let r=[],s=0;for(let o=0;o<n.length;o++){let i=n[o];const a=t==null?i.key:String(t)+String(i.key!=null?i.key:o);i.type===Dn?(i.patchFlag&128&&s++,r=r.concat(rc(i.children,e,a))):(e||i.type!==On)&&r.push(a!=null?je(i,{key:a}):i)}if(s>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}function mr(n,e){return G(n)?Sn({name:n.name},e,{setup:n}):n}function sc(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ai(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Ur=new WeakMap;function zt(n,e,t,r,s=!1){if(V(n)){n.forEach((g,b)=>zt(g,e&&(V(e)?e[b]:e),t,r,s));return}if(ht(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&zt(n,e,t,r.component.subTree);return}const o=r.shapeFlag&4?fs(r.component):r.el,i=s?null:o,{i:a,r:c}=n,l=e&&e.r,u=a.refs===an?a.refs={}:a.refs,d=a.setupState,p=Z(d),f=d===an?ga:g=>ai(u,g)?!1:rn(p,g),y=(g,b)=>!(b&&ai(u,b));if(l!=null&&l!==c){if(ci(e),pn(l))u[l]=null,f(l)&&(d[l]=null);else if(kn(l)){const g=e;y(l,g.k)&&(l.value=null),g.k&&(u[g.k]=null)}}if(G(c))fr(c,a,12,[i,u]);else{const g=pn(c),b=kn(c);if(g||b){const v=()=>{if(n.f){const w=g?f(c)?d[c]:u[c]:y()||!n.k?c.value:u[n.k];if(s)V(w)&&ko(w,o);else if(V(w))w.includes(o)||w.push(o);else if(g)u[c]=[o],f(c)&&(d[c]=u[c]);else{const T=[o];y(c,n.k)&&(c.value=T),n.k&&(u[n.k]=T)}}else g?(u[c]=i,f(c)&&(d[c]=i)):b&&(y(c,n.k)&&(c.value=i),n.k&&(u[n.k]=i))};if(i){const w=()=>{v(),Ur.delete(n)};w.id=-1,Ur.set(n,w),Kn(w,t)}else ci(n),v()}}}function ci(n){const e=Ur.get(n);e&&(e.flags|=8,Ur.delete(n))}es().requestIdleCallback;es().cancelIdleCallback;const ht=n=>!!n.type.__asyncLoader,as=n=>n.type.__isKeepAlive;function Uu(n,e){oc(n,"a",e)}function Ku(n,e){oc(n,"da",e)}function oc(n,e,t=Rn){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(cs(e,r,t),t){let s=t.parent;for(;s&&s.parent;)as(s.parent.vnode)&&Vu(r,e,t,s),s=s.parent}}function Vu(n,e,t,r){const s=cs(e,n,r,!0);ic(()=>{ko(r[e],s)},t)}function cs(n,e,t=Rn,r=!1){if(t){const s=t[n]||(t[n]=[]),o=e.__weh||(e.__weh=(...i)=>{xe();const a=hr(t),c=re(e,t,n,i);return a(),Oe(),c});return r?s.unshift(o):s.push(o),o}}const Ce=n=>(e,t=Rn)=>{(!or||n==="sp")&&cs(n,(...r)=>e(...r),t)},qu=Ce("bm"),ls=Ce("m"),Hu=Ce("bu"),zu=Ce("u"),us=Ce("bum"),ic=Ce("um"),Gu=Ce("sp"),Wu=Ce("rtg"),Yu=Ce("rtc");function Ju(n,e=Rn){cs("ec",n,e)}const ac="components";function Qu(n,e){return lc(ac,n,!0,e)||n}const cc=Symbol.for("v-ndc");function Xh(n){return pn(n)?lc(ac,n,!1)||n:n||cc}function lc(n,e,t=!0,r=!1){const s=Nn||Rn;if(s){const o=s.type;{const a=Pd(o,!1);if(a&&(a===e||a===$n(e)||a===ns($n(e))))return o}const i=li(s[n]||o[n],e)||li(s.appContext[n],e);return!i&&r?o:i}}function li(n,e){return n&&(n[e]||n[$n(e)]||n[ns($n(e))])}function ui(n,e,t,r){let s;const o=t&&t[r],i=V(n);if(i||pn(n)){const a=i&&Ze(n);let c=!1,l=!1;a&&(c=!Hn(n),l=Re(n),n=rs(n)),s=new Array(n.length);for(let u=0,d=n.length;u<d;u++)s[u]=e(c?l?yt(te(n[u])):te(n[u]):n[u],u,void 0,o&&o[u])}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,o&&o[a])}else if(nn(n))if(n[Symbol.iterator])s=Array.from(n,(a,c)=>e(a,c,void 0,o&&o[c]));else{const a=Object.keys(n);s=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];s[c]=e(n[u],u,c,o&&o[c])}}else s=[];return t&&(t[r]=s),s}function Zh(n,e,t={},r,s){if(Nn.ce||Nn.parent&&ht(Nn.parent)&&Nn.parent.ce){const l=Object.keys(t).length>0;return e!=="default"&&(t.name=e),Mn(),rr(Dn,null,[vn("slot",t,r&&r())],l?-2:64)}let o=n[e];o&&o._c&&(o._d=!1),Mn();const i=o&&uc(o(t)),a=t.key||i&&i.key,c=rr(Dn,{key:(a&&!zn(a)?a:`_${e}`)+(!i&&r?"_fb":"")},i||(r?r():[]),i&&n._===1?64:-2);return!s&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),o&&o._c&&(o._d=!0),c}function uc(n){return n.some(e=>sr(e)?!(e.type===On||e.type===Dn&&!uc(e.children)):!0)?n:null}const to=n=>n?Ic(n)?fs(n):to(n.parent):null,Gt=Sn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>to(n.parent),$root:n=>to(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>fc(n),$forceUpdate:n=>n.f||(n.f=()=>{Oo(n.update)}),$nextTick:n=>n.n||(n.n=Ha.bind(n.proxy)),$watch:n=>Mu.bind(n)}),Is=(n,e)=>n!==an&&!n.__isScriptSetup&&rn(n,e),Xu={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:o,accessCache:i,type:a,appContext:c}=n;if(e[0]!=="$"){const p=i[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return o[e]}else{if(Is(r,e))return i[e]=1,r[e];if(s!==an&&rn(s,e))return i[e]=2,s[e];if(rn(o,e))return i[e]=3,o[e];if(t!==an&&rn(t,e))return i[e]=4,t[e];ro&&(i[e]=0)}}const l=Gt[e];let u,d;if(l)return e==="$attrs"&&xn(n.attrs,"get",""),l(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==an&&rn(t,e))return i[e]=4,t[e];if(d=c.config.globalProperties,rn(d,e))return d[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:o}=n;return Is(s,e)?(s[e]=t,!0):r!==an&&rn(r,e)?(r[e]=t,!0):rn(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(o[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,props:o,type:i}},a){let c;return!!(t[a]||n!==an&&a[0]!=="$"&&rn(n,a)||Is(e,a)||rn(o,a)||rn(r,a)||rn(Gt,a)||rn(s.config.globalProperties,a)||(c=i.__cssModules)&&c[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:rn(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function ng(){return dc().slots}function eg(){return dc().attrs}function dc(n){const e=Lo();return e.setupContext||(e.setupContext=Pc(e))}function di(n){return V(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}function tg(n,e){const t={};for(const r in n)e.includes(r)||Object.defineProperty(t,r,{enumerable:!0,get:()=>n[r]});return t}let ro=!0;function Zu(n){const e=fc(n),t=n.proxy,r=n.ctx;ro=!1,e.beforeCreate&&pi(e.beforeCreate,n,"bc");const{data:s,computed:o,methods:i,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:p,beforeUpdate:f,updated:y,activated:g,deactivated:b,beforeDestroy:v,beforeUnmount:w,destroyed:T,unmounted:A,render:R,renderTracked:j,renderTriggered:M,errorCaptured:F,serverPrefetch:D,expose:H,inheritAttrs:J,components:I,directives:Y,filters:fn}=e;if(l&&nd(l,r,null),i)for(const sn in i){const en=i[sn];G(en)&&(r[sn]=en.bind(t))}if(s){const sn=s.call(t,t);nn(sn)&&(n.data=ss(sn))}if(ro=!0,o)for(const sn in o){const en=o[sn],be=G(en)?en.bind(t,t):G(en.get)?en.get.bind(t,t):ge,Ie=!G(en)&&G(en.set)?en.set.bind(t):ge,ie=Bn({get:be,set:Ie});Object.defineProperty(r,sn,{enumerable:!0,configurable:!0,get:()=>ie.value,set:Un=>ie.value=Un})}if(a)for(const sn in a)pc(a[sn],r,t,sn);if(c){const sn=G(c)?c.call(t):c;Reflect.ownKeys(sn).forEach(en=>{Rr(en,sn[en])})}u&&pi(u,n,"c");function mn(sn,en){V(en)?en.forEach(be=>sn(be.bind(t))):en&&sn(en.bind(t))}if(mn(qu,d),mn(ls,p),mn(Hu,f),mn(zu,y),mn(Uu,g),mn(Ku,b),mn(Ju,F),mn(Yu,j),mn(Wu,M),mn(us,w),mn(ic,A),mn(Gu,D),V(H))if(H.length){const sn=n.exposed||(n.exposed={});H.forEach(en=>{Object.defineProperty(sn,en,{get:()=>t[en],set:be=>t[en]=be,enumerable:!0})})}else n.exposed||(n.exposed={});R&&n.render===ge&&(n.render=R),J!=null&&(n.inheritAttrs=J),I&&(n.components=I),Y&&(n.directives=Y),D&&sc(n)}function nd(n,e,t=ge){V(n)&&(n=so(n));for(const r in n){const s=n[r];let o;nn(s)?"default"in s?o=ee(s.from||r,s.default,!0):o=ee(s.from||r):o=ee(s),kn(o)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):e[r]=o}}function pi(n,e,t){re(V(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function pc(n,e,t,r){let s=r.includes(".")?Qa(t,r):()=>t[r];if(pn(n)){const o=e[n];G(o)&&Ht(s,o)}else if(G(n))Ht(s,n.bind(t));else if(nn(n))if(V(n))n.forEach(o=>pc(o,e,t,r));else{const o=G(n.handler)?n.handler.bind(t):e[n.handler];G(o)&&Ht(s,o,n)}}function fc(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:i}}=n.appContext,a=o.get(e);let c;return a?c=a:!s.length&&!t&&!r?c=e:(c={},s.length&&s.forEach(l=>Kr(c,l,i,!0)),Kr(c,e,i)),nn(e)&&o.set(e,c),c}function Kr(n,e,t,r=!1){const{mixins:s,extends:o}=e;o&&Kr(n,o,t,!0),s&&s.forEach(i=>Kr(n,i,t,!0));for(const i in e)if(!(r&&i==="expose")){const a=ed[i]||t&&t[i];n[i]=a?a(n[i],e[i]):e[i]}return n}const ed={data:fi,props:mi,emits:mi,methods:Ft,computed:Ft,beforeCreate:Cn,created:Cn,beforeMount:Cn,mounted:Cn,beforeUpdate:Cn,updated:Cn,beforeDestroy:Cn,beforeUnmount:Cn,destroyed:Cn,unmounted:Cn,activated:Cn,deactivated:Cn,errorCaptured:Cn,serverPrefetch:Cn,components:Ft,directives:Ft,watch:rd,provide:fi,inject:td};function fi(n,e){return e?n?function(){return Sn(G(n)?n.call(this,this):n,G(e)?e.call(this,this):e)}:e:n}function td(n,e){return Ft(so(n),so(e))}function so(n){if(V(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Cn(n,e){return n?[...new Set([].concat(n,e))]:e}function Ft(n,e){return n?Sn(Object.create(null),n,e):e}function mi(n,e){return n?V(n)&&V(e)?[...new Set([...n,...e])]:Sn(Object.create(null),di(n),di(e??{})):e}function rd(n,e){if(!n)return e;if(!e)return n;const t=Sn(Object.create(null),n);for(const r in e)t[r]=Cn(n[r],e[r]);return t}function mc(){return{app:null,config:{isNativeTag:ga,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sd=0;function od(n,e){return function(r,s=null){G(r)||(r=Sn({},r)),s!=null&&!nn(s)&&(s=null);const o=mc(),i=new WeakSet,a=[];let c=!1;const l=o.app={_uid:sd++,_component:r,_props:s,_container:null,_context:o,_instance:null,version:Md,get config(){return o.config},set config(u){},use(u,...d){return i.has(u)||(u&&G(u.install)?(i.add(u),u.install(l,...d)):G(u)&&(i.add(u),u(l,...d))),l},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),l},component(u,d){return d?(o.components[u]=d,l):o.components[u]},directive(u,d){return d?(o.directives[u]=d,l):o.directives[u]},mount(u,d,p){if(!c){const f=l._ceVNode||vn(r,s);return f.appContext=o,p===!0?p="svg":p===!1&&(p=void 0),n(f,u,p),c=!0,l._container=u,u.__vue_app__=l,fs(f.component)}},onUnmount(u){a.push(u)},unmount(){c&&(re(a,l._instance,16),n(null,l._container),delete l._container.__vue_app__)},provide(u,d){return o.provides[u]=d,l},runWithContext(u){const d=gt;gt=l;try{return u()}finally{gt=d}}};return l}}let gt=null;const id=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${$n(e)}Modifiers`]||n[`${et(e)}Modifiers`];function ad(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||an;let s=t;const o=e.startsWith("update:"),i=o&&id(r,e.slice(7));i&&(i.trim&&(s=t.map(u=>pn(u)?u.trim():u)),i.number&&(s=t.map(ql)));let a,c=r[a=Ns(e)]||r[a=Ns($n(e))];!c&&o&&(c=r[a=Ns(et(e))]),c&&re(c,n,6,s);const l=r[a+"Once"];if(l){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,re(l,n,6,s)}}const cd=new WeakMap;function hc(n,e,t=!1){const r=t?cd:e.emitsCache,s=r.get(n);if(s!==void 0)return s;const o=n.emits;let i={},a=!1;if(!G(n)){const c=l=>{const u=hc(l,e,!0);u&&(a=!0,Sn(i,u))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!o&&!a?(nn(n)&&r.set(n,null),null):(V(o)?o.forEach(c=>i[c]=null):Sn(i,o),nn(n)&&r.set(n,i),i)}function ds(n,e){return!n||!Yr(e)?!1:(e=e.slice(2).replace(/Once$/,""),rn(n,e[0].toLowerCase()+e.slice(1))||rn(n,et(e))||rn(n,e))}function hi(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[o],slots:i,attrs:a,emit:c,render:l,renderCache:u,props:d,data:p,setupState:f,ctx:y,inheritAttrs:g}=n,b=jr(n);let v,w;try{if(t.shapeFlag&4){const A=s||r,R=A;v=he(l.call(R,A,u,d,f,p,y)),w=a}else{const A=e;v=he(A.length>1?A(d,{attrs:a,slots:i,emit:c}):A(d,null)),w=e.props?a:ld(a)}}catch(A){Wt.length=0,is(A,n,1),v=vn(On)}let T=v;if(w&&g!==!1){const A=Object.keys(w),{shapeFlag:R}=T;A.length&&R&7&&(o&&A.some(Jr)&&(w=ud(w,o)),T=je(T,w,!1,!0))}return t.dirs&&(T=je(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(t.dirs):t.dirs),t.transition&&tr(T,t.transition),v=T,jr(b),v}const ld=n=>{let e;for(const t in n)(t==="class"||t==="style"||Yr(t))&&((e||(e={}))[t]=n[t]);return e},ud=(n,e)=>{const t={};for(const r in n)(!Jr(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function dd(n,e,t){const{props:r,children:s,component:o}=n,{props:i,children:a,patchFlag:c}=e,l=o.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?gi(r,i,l):!!i;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(gc(i,r,p)&&!ds(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===i?!1:r?i?gi(r,i,l):!0:!!i;return!1}function gi(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const o=r[s];if(gc(e,n,o)&&!ds(t,o))return!0}return!1}function gc(n,e,t){const r=n[t],s=e[t];return t==="style"&&nn(r)&&nn(s)?!pr(r,s):r!==s}function pd({vnode:n,parent:e,suspense:t},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=r,n=s),s===n)(n=e.vnode).el=r,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=r)}const _c={},bc=()=>Object.create(_c),yc=n=>Object.getPrototypeOf(n)===_c;function fd(n,e,t,r=!1){const s={},o=bc();n.propsDefaults=Object.create(null),wc(n,e,s,o);for(const i in n.propsOptions[0])i in s||(s[i]=void 0);t?n.props=r?s:ja(s):n.type.props?n.props=s:n.props=o,n.attrs=o}function md(n,e,t,r){const{props:s,attrs:o,vnode:{patchFlag:i}}=n,a=Z(s),[c]=n.propsOptions;let l=!1;if((r||i>0)&&!(i&16)){if(i&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(ds(n.emitsOptions,p))continue;const f=e[p];if(c)if(rn(o,p))f!==o[p]&&(o[p]=f,l=!0);else{const y=$n(p);s[y]=oo(c,a,y,f,n,!1)}else f!==o[p]&&(o[p]=f,l=!0)}}}else{wc(n,e,s,o)&&(l=!0);let u;for(const d in a)(!e||!rn(e,d)&&((u=et(d))===d||!rn(e,u)))&&(c?t&&(t[d]!==void 0||t[u]!==void 0)&&(s[d]=oo(c,a,d,void 0,n,!0)):delete s[d]);if(o!==a)for(const d in o)(!e||!rn(e,d))&&(delete o[d],l=!0)}l&&Ee(n.attrs,"set","")}function wc(n,e,t,r){const[s,o]=n.propsOptions;let i=!1,a;if(e)for(let c in e){if(Ut(c))continue;const l=e[c];let u;s&&rn(s,u=$n(c))?!o||!o.includes(u)?t[u]=l:(a||(a={}))[u]=l:ds(n.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,i=!0)}if(o){const c=Z(t),l=a||an;for(let u=0;u<o.length;u++){const d=o[u];t[d]=oo(s,c,d,l[d],n,!rn(l,d))}}return i}function oo(n,e,t,r,s,o){const i=n[t];if(i!=null){const a=rn(i,"default");if(a&&r===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&G(c)){const{propsDefaults:l}=s;if(t in l)r=l[t];else{const u=hr(s);r=l[t]=c.call(null,e),u()}}else r=c;s.ce&&s.ce._setProp(t,r)}i[0]&&(o&&!a?r=!1:i[1]&&(r===""||r===et(t))&&(r=!0))}return r}const hd=new WeakMap;function vc(n,e,t=!1){const r=t?hd:e.propsCache,s=r.get(n);if(s)return s;const o=n.props,i={},a=[];let c=!1;if(!G(n)){const u=d=>{c=!0;const[p,f]=vc(d,e,!0);Sn(i,p),f&&a.push(...f)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!o&&!c)return nn(n)&&r.set(n,pt),pt;if(V(o))for(let u=0;u<o.length;u++){const d=$n(o[u]);_i(d)&&(i[d]=an)}else if(o)for(const u in o){const d=$n(u);if(_i(d)){const p=o[u],f=i[d]=V(p)||G(p)?{type:p}:Sn({},p),y=f.type;let g=!1,b=!0;if(V(y))for(let v=0;v<y.length;++v){const w=y[v],T=G(w)&&w.name;if(T==="Boolean"){g=!0;break}else T==="String"&&(b=!1)}else g=G(y)&&y.name==="Boolean";f[0]=g,f[1]=b,(g||rn(f,"default"))&&a.push(d)}}const l=[i,a];return nn(n)&&r.set(n,l),l}function _i(n){return n[0]!=="$"&&!Ut(n)}const Ro=n=>n==="_"||n==="_ctx"||n==="$stable",Co=n=>V(n)?n.map(he):[he(n)],gd=(n,e,t)=>{if(e._n)return e;const r=no((...s)=>Co(e(...s)),t);return r._c=!1,r},kc=(n,e,t)=>{const r=n._ctx;for(const s in n){if(Ro(s))continue;const o=n[s];if(G(o))e[s]=gd(s,o,r);else if(o!=null){const i=Co(o);e[s]=()=>i}}},Sc=(n,e)=>{const t=Co(e);n.slots.default=()=>t},Ec=(n,e,t)=>{for(const r in e)(t||!Ro(r))&&(n[r]=e[r])},_d=(n,e,t)=>{const r=n.slots=bc();if(n.vnode.shapeFlag&32){const s=e._;s?(Ec(r,e,t),t&&wa(r,"_",s,!0)):kc(e,r)}else e&&Sc(n,e)},bd=(n,e,t)=>{const{vnode:r,slots:s}=n;let o=!0,i=an;if(r.shapeFlag&32){const a=e._;a?t&&a===1?o=!1:Ec(s,e,t):(o=!e.$stable,kc(e,s)),i=e}else e&&(Sc(n,e),i={default:1});if(o)for(const a in s)!Ro(a)&&i[a]==null&&delete s[a]},Kn=Sd;function yd(n){return wd(n)}function wd(n,e){const t=es();t.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:i,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:p,setScopeId:f=ge,insertStaticContent:y}=n,g=(m,h,_,k=null,N=null,S=null,L=void 0,C=null,O=!!h.dynamicChildren)=>{if(m===h)return;m&&!We(m,h)&&(k=E(m),Un(m,N,S,!0),m=null),h.patchFlag===-2&&(O=!1,h.dynamicChildren=null);const{type:x,ref:q,shapeFlag:B}=h;switch(x){case ps:b(m,h,_,k);break;case On:v(m,h,_,k);break;case Ps:m==null&&w(h,_,k,L);break;case Dn:I(m,h,_,k,N,S,L,C,O);break;default:B&1?R(m,h,_,k,N,S,L,C,O):B&6?Y(m,h,_,k,N,S,L,C,O):(B&64||B&128)&&x.process(m,h,_,k,N,S,L,C,O,U)}q!=null&&N?zt(q,m&&m.ref,S,h||m,!h):q==null&&m&&m.ref!=null&&zt(m.ref,null,S,m,!0)},b=(m,h,_,k)=>{if(m==null)r(h.el=a(h.children),_,k);else{const N=h.el=m.el;h.children!==m.children&&l(N,h.children)}},v=(m,h,_,k)=>{m==null?r(h.el=c(h.children||""),_,k):h.el=m.el},w=(m,h,_,k)=>{[m.el,m.anchor]=y(m.children,h,_,k,m.el,m.anchor)},T=({el:m,anchor:h},_,k)=>{let N;for(;m&&m!==h;)N=p(m),r(m,_,k),m=N;r(h,_,k)},A=({el:m,anchor:h})=>{let _;for(;m&&m!==h;)_=p(m),s(m),m=_;s(h)},R=(m,h,_,k,N,S,L,C,O)=>{if(h.type==="svg"?L="svg":h.type==="math"&&(L="mathml"),m==null)j(h,_,k,N,S,L,C,O);else{const x=m.el&&m.el._isVueCE?m.el:null;try{x&&x._beginPatch(),D(m,h,N,S,L,C,O)}finally{x&&x._endPatch()}}},j=(m,h,_,k,N,S,L,C)=>{let O,x;const{props:q,shapeFlag:B,transition:K,dirs:z}=m;if(O=m.el=i(m.type,S,q&&q.is,q),B&8?u(O,m.children):B&16&&F(m.children,O,null,k,N,Ls(m,S),L,C),z&&Ke(m,null,k,"created"),M(O,m,m.scopeId,L,k),q){for(const on in q)on!=="value"&&!Ut(on)&&o(O,on,null,q[on],S,k);"value"in q&&o(O,"value",null,q.value,S),(x=q.onVnodeBeforeMount)&&ue(x,k,m)}z&&Ke(m,null,k,"beforeMount");const X=vd(N,K);X&&K.beforeEnter(O),r(O,h,_),((x=q&&q.onVnodeMounted)||X||z)&&Kn(()=>{try{x&&ue(x,k,m),X&&K.enter(O),z&&Ke(m,null,k,"mounted")}finally{}},N)},M=(m,h,_,k,N)=>{if(_&&f(m,_),k)for(let S=0;S<k.length;S++)f(m,k[S]);if(N){let S=N.subTree;if(h===S||xc(S.type)&&(S.ssContent===h||S.ssFallback===h)){const L=N.vnode;M(m,L,L.scopeId,L.slotScopeIds,N.parent)}}},F=(m,h,_,k,N,S,L,C,O=0)=>{for(let x=O;x<m.length;x++){const q=m[x]=C?Se(m[x]):he(m[x]);g(null,q,h,_,k,N,S,L,C)}},D=(m,h,_,k,N,S,L)=>{const C=h.el=m.el;let{patchFlag:O,dynamicChildren:x,dirs:q}=h;O|=m.patchFlag&16;const B=m.props||an,K=h.props||an;let z;if(_&&Ve(_,!1),(z=K.onVnodeBeforeUpdate)&&ue(z,_,h,m),q&&Ke(h,m,_,"beforeUpdate"),_&&Ve(_,!0),(B.innerHTML&&K.innerHTML==null||B.textContent&&K.textContent==null)&&u(C,""),x?H(m.dynamicChildren,x,C,_,k,Ls(h,N),S):L||en(m,h,C,null,_,k,Ls(h,N),S,!1),O>0){if(O&16)J(C,B,K,_,N);else if(O&2&&B.class!==K.class&&o(C,"class",null,K.class,N),O&4&&o(C,"style",B.style,K.style,N),O&8){const X=h.dynamicProps;for(let on=0;on<X.length;on++){const cn=X[on],bn=B[cn],An=K[cn];(An!==bn||cn==="value")&&o(C,cn,bn,An,N,_)}}O&1&&m.children!==h.children&&u(C,h.children)}else!L&&x==null&&J(C,B,K,_,N);((z=K.onVnodeUpdated)||q)&&Kn(()=>{z&&ue(z,_,h,m),q&&Ke(h,m,_,"updated")},k)},H=(m,h,_,k,N,S,L)=>{for(let C=0;C<h.length;C++){const O=m[C],x=h[C],q=O.el&&(O.type===Dn||!We(O,x)||O.shapeFlag&198)?d(O.el):_;g(O,x,q,null,k,N,S,L,!0)}},J=(m,h,_,k,N)=>{if(h!==_){if(h!==an)for(const S in h)!Ut(S)&&!(S in _)&&o(m,S,h[S],null,N,k);for(const S in _){if(Ut(S))continue;const L=_[S],C=h[S];L!==C&&S!=="value"&&o(m,S,C,L,N,k)}"value"in _&&o(m,"value",h.value,_.value,N)}},I=(m,h,_,k,N,S,L,C,O)=>{const x=h.el=m?m.el:a(""),q=h.anchor=m?m.anchor:a("");let{patchFlag:B,dynamicChildren:K,slotScopeIds:z}=h;z&&(C=C?C.concat(z):z),m==null?(r(x,_,k),r(q,_,k),F(h.children||[],_,q,N,S,L,C,O)):B>0&&B&64&&K&&m.dynamicChildren&&m.dynamicChildren.length===K.length?(H(m.dynamicChildren,K,_,N,S,L,C),(h.key!=null||N&&h===N.subTree)&&Ac(m,h,!0)):en(m,h,_,q,N,S,L,C,O)},Y=(m,h,_,k,N,S,L,C,O)=>{h.slotScopeIds=C,m==null?h.shapeFlag&512?N.ctx.activate(h,_,k,L,O):fn(h,_,k,N,S,L,O):Vn(m,h,O)},fn=(m,h,_,k,N,S,L)=>{const C=m.component=Rd(m,k,N);if(as(m)&&(C.ctx.renderer=U),Cd(C,!1,L),C.asyncDep){if(N&&N.registerDep(C,mn,L),!m.el){const O=C.subTree=vn(On);v(null,O,h,_),m.placeholder=O.el}}else mn(C,m,h,_,N,S,L)},Vn=(m,h,_)=>{const k=h.component=m.component;if(dd(m,h,_))if(k.asyncDep&&!k.asyncResolved){sn(k,h,_);return}else k.next=h,k.update();else h.el=m.el,k.vnode=h},mn=(m,h,_,k,N,S,L)=>{const C=()=>{if(m.isMounted){let{next:B,bu:K,u:z,parent:X,vnode:on}=m;{const ce=Nc(m);if(ce){B&&(B.el=on.el,sn(m,B,L)),ce.asyncDep.then(()=>{Kn(()=>{m.isUnmounted||x()},N)});return}}let cn=B,bn;Ve(m,!1),B?(B.el=on.el,sn(m,B,L)):B=on,K&&Or(K),(bn=B.props&&B.props.onVnodeBeforeUpdate)&&ue(bn,X,B,on),Ve(m,!0);const An=hi(m),ae=m.subTree;m.subTree=An,g(ae,An,d(ae.el),E(ae),m,N,S),B.el=An.el,cn===null&&pd(m,An.el),z&&Kn(z,N),(bn=B.props&&B.props.onVnodeUpdated)&&Kn(()=>ue(bn,X,B,on),N)}else{let B;const{el:K,props:z}=h,{bm:X,m:on,parent:cn,root:bn,type:An}=m,ae=ht(h);Ve(m,!1),X&&Or(X),!ae&&(B=z&&z.onVnodeBeforeMount)&&ue(B,cn,h),Ve(m,!0);{bn.ce&&bn.ce._hasShadowRoot()&&bn.ce._injectChildStyle(An,m.parent?m.parent.type:void 0);const ce=m.subTree=hi(m);g(null,ce,_,k,m,N,S),h.el=ce.el}if(on&&Kn(on,N),!ae&&(B=z&&z.onVnodeMounted)){const ce=h;Kn(()=>ue(B,cn,ce),N)}(h.shapeFlag&256||cn&&ht(cn.vnode)&&cn.vnode.shapeFlag&256)&&m.a&&Kn(m.a,N),m.isMounted=!0,h=_=k=null}};m.scope.on();const O=m.effect=new Na(C);m.scope.off();const x=m.update=O.run.bind(O),q=m.job=O.runIfDirty.bind(O);q.i=m,q.id=m.uid,O.scheduler=()=>Oo(q),Ve(m,!0),x()},sn=(m,h,_)=>{h.component=m;const k=m.vnode.props;m.vnode=h,m.next=null,md(m,h.props,k,_),bd(m,h.children,_),xe(),oi(m),Oe()},en=(m,h,_,k,N,S,L,C,O=!1)=>{const x=m&&m.children,q=m?m.shapeFlag:0,B=h.children,{patchFlag:K,shapeFlag:z}=h;if(K>0){if(K&128){Ie(x,B,_,k,N,S,L,C,O);return}else if(K&256){be(x,B,_,k,N,S,L,C,O);return}}z&8?(q&16&&Gn(x,N,S),B!==x&&u(_,B)):q&16?z&16?Ie(x,B,_,k,N,S,L,C,O):Gn(x,N,S,!0):(q&8&&u(_,""),z&16&&F(B,_,k,N,S,L,C,O))},be=(m,h,_,k,N,S,L,C,O)=>{m=m||pt,h=h||pt;const x=m.length,q=h.length,B=Math.min(x,q);let K;for(K=0;K<B;K++){const z=h[K]=O?Se(h[K]):he(h[K]);g(m[K],z,_,null,N,S,L,C,O)}x>q?Gn(m,N,S,!0,!1,B):F(h,_,k,N,S,L,C,O,B)},Ie=(m,h,_,k,N,S,L,C,O)=>{let x=0;const q=h.length;let B=m.length-1,K=q-1;for(;x<=B&&x<=K;){const z=m[x],X=h[x]=O?Se(h[x]):he(h[x]);if(We(z,X))g(z,X,_,null,N,S,L,C,O);else break;x++}for(;x<=B&&x<=K;){const z=m[B],X=h[K]=O?Se(h[K]):he(h[K]);if(We(z,X))g(z,X,_,null,N,S,L,C,O);else break;B--,K--}if(x>B){if(x<=K){const z=K+1,X=z<q?h[z].el:k;for(;x<=K;)g(null,h[x]=O?Se(h[x]):he(h[x]),_,X,N,S,L,C,O),x++}}else if(x>K)for(;x<=B;)Un(m[x],N,S,!0),x++;else{const z=x,X=x,on=new Map;for(x=X;x<=K;x++){const qn=h[x]=O?Se(h[x]):he(h[x]);qn.key!=null&&on.set(qn.key,x)}let cn,bn=0;const An=K-X+1;let ae=!1,ce=0;const Ct=new Array(An);for(x=0;x<An;x++)Ct[x]=0;for(x=z;x<=B;x++){const qn=m[x];if(bn>=An){Un(qn,N,S,!0);continue}let le;if(qn.key!=null)le=on.get(qn.key);else for(cn=X;cn<=K;cn++)if(Ct[cn-X]===0&&We(qn,h[cn])){le=cn;break}le===void 0?Un(qn,N,S,!0):(Ct[le-X]=x+1,le>=ce?ce=le:ae=!0,g(qn,h[le],_,null,N,S,L,C,O),bn++)}const Xo=ae?kd(Ct):pt;for(cn=Xo.length-1,x=An-1;x>=0;x--){const qn=X+x,le=h[qn],Zo=h[qn+1],ni=qn+1<q?Zo.el||Tc(Zo):k;Ct[x]===0?g(null,le,_,ni,N,S,L,C,O):ae&&(cn<0||x!==Xo[cn]?ie(le,_,ni,2):cn--)}}},ie=(m,h,_,k,N=null)=>{const{el:S,type:L,transition:C,children:O,shapeFlag:x}=m;if(x&6){ie(m.component.subTree,h,_,k);return}if(x&128){m.suspense.move(h,_,k);return}if(x&64){L.move(m,h,_,U);return}if(L===Dn){r(S,h,_);for(let B=0;B<O.length;B++)ie(O[B],h,_,k);r(m.anchor,h,_);return}if(L===Ps){T(m,h,_);return}if(k!==2&&x&1&&C)if(k===0)C.beforeEnter(S),r(S,h,_),Kn(()=>C.enter(S),N);else{const{leave:B,delayLeave:K,afterLeave:z}=C,X=()=>{m.ctx.isUnmounted?s(S):r(S,h,_)},on=()=>{S._isLeaving&&S[pe](!0),B(S,()=>{X(),z&&z()})};K?K(S,X,on):on()}else r(S,h,_)},Un=(m,h,_,k=!1,N=!1)=>{const{type:S,props:L,ref:C,children:O,dynamicChildren:x,shapeFlag:q,patchFlag:B,dirs:K,cacheIndex:z,memo:X}=m;if(B===-2&&(N=!1),C!=null&&(xe(),zt(C,null,_,m,!0),Oe()),z!=null&&(h.renderCache[z]=void 0),q&256){h.ctx.deactivate(m);return}const on=q&1&&K,cn=!ht(m);let bn;if(cn&&(bn=L&&L.onVnodeBeforeUnmount)&&ue(bn,h,m),q&6)Ue(m.component,_,k);else{if(q&128){m.suspense.unmount(_,k);return}on&&Ke(m,null,h,"beforeUnmount"),q&64?m.type.remove(m,h,_,U,k):x&&!x.hasOnce&&(S!==Dn||B>0&&B&64)?Gn(x,h,_,!1,!0):(S===Dn&&B&384||!N&&q&16)&&Gn(O,h,_),k&&tt(m)}const An=X!=null&&z==null;(cn&&(bn=L&&L.onVnodeUnmounted)||on||An)&&Kn(()=>{bn&&ue(bn,h,m),on&&Ke(m,null,h,"unmounted"),An&&(m.el=null)},_)},tt=m=>{const{type:h,el:_,anchor:k,transition:N}=m;if(h===Dn){rt(_,k);return}if(h===Ps){A(m);return}const S=()=>{s(_),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(m.shapeFlag&1&&N&&!N.persisted){const{leave:L,delayLeave:C}=N,O=()=>L(_,S);C?C(m.el,S,O):O()}else S()},rt=(m,h)=>{let _;for(;m!==h;)_=p(m),s(m),m=_;s(h)},Ue=(m,h,_)=>{const{bum:k,scope:N,job:S,subTree:L,um:C,m:O,a:x}=m;bi(O),bi(x),k&&Or(k),N.stop(),S&&(S.flags|=8,Un(L,m,h,_)),C&&Kn(C,h),Kn(()=>{m.isUnmounted=!0},h)},Gn=(m,h,_,k=!1,N=!1,S=0)=>{for(let L=S;L<m.length;L++)Un(m[L],h,_,k,N)},E=m=>{if(m.shapeFlag&6)return E(m.component.subTree);if(m.shapeFlag&128)return m.suspense.next();const h=p(m.anchor||m.el),_=h&&h[Bu];return _?p(_):h};let $=!1;const P=(m,h,_)=>{let k;m==null?h._vnode&&(Un(h._vnode,null,null,!0),k=h._vnode.component):g(h._vnode||null,m,h,null,null,null,_),h._vnode=m,$||($=!0,oi(k),Ga(),$=!1)},U={p:g,um:Un,m:ie,r:tt,mt:fn,mc:F,pc:en,pbc:H,n:E,o:n};return{render:P,hydrate:void 0,createApp:od(P)}}function Ls({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ve({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function vd(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Ac(n,e,t=!1){const r=n.children,s=e.children;if(V(r)&&V(s))for(let o=0;o<r.length;o++){const i=r[o];let a=s[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[o]=Se(s[o]),a.el=i.el),!t&&a.patchFlag!==-2&&Ac(i,a)),a.type===ps&&(a.patchFlag===-1&&(a=s[o]=Se(a)),a.el=i.el),a.type===On&&!a.el&&(a.el=i.el)}}function kd(n){const e=n.slice(),t=[0];let r,s,o,i,a;const c=n.length;for(r=0;r<c;r++){const l=n[r];if(l!==0){if(s=t[t.length-1],n[s]<l){e[r]=s,t.push(r);continue}for(o=0,i=t.length-1;o<i;)a=o+i>>1,n[t[a]]<l?o=a+1:i=a;l<n[t[o]]&&(o>0&&(e[r]=t[o-1]),t[o]=r)}}for(o=t.length,i=t[o-1];o-- >0;)t[o]=i,i=e[i];return t}function Nc(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Nc(e)}function bi(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Tc(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Tc(e.subTree):null}const xc=n=>n.__isSuspense;function Sd(n,e){e&&e.pendingBranch?V(n)?e.effects.push(...n):e.effects.push(n):Iu(n)}const Dn=Symbol.for("v-fgt"),ps=Symbol.for("v-txt"),On=Symbol.for("v-cmt"),Ps=Symbol.for("v-stc"),Wt=[];let Fn=null;function Mn(n=!1){Wt.push(Fn=n?null:[])}function Ed(){Wt.pop(),Fn=Wt[Wt.length-1]||null}let wt=1;function Vr(n,e=!1){wt+=n,n<0&&Fn&&e&&(Fn.hasOnce=!0)}function Oc(n){return n.dynamicChildren=wt>0?Fn||pt:null,Ed(),wt>0&&Fn&&Fn.push(n),n}function me(n,e,t,r,s,o){return Oc(En(n,e,t,r,s,o,!0))}function rr(n,e,t,r,s){return Oc(vn(n,e,t,r,s,!0))}function sr(n){return n?n.__v_isVNode===!0:!1}function We(n,e){return n.type===e.type&&n.key===e.key}const Rc=({key:n})=>n??null,Cr=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?pn(n)||kn(n)||G(n)?{i:Nn,r:n,k:e,f:!!t}:n:null);function En(n,e=null,t=null,r=0,s=null,o=n===Dn?0:1,i=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Rc(e),ref:e&&Cr(e),scopeId:Ya,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Nn};return a?(Io(c,t),o&128&&n.normalize(c)):t&&(c.shapeFlag|=pn(t)?8:16),wt>0&&!i&&Fn&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&Fn.push(c),c}const vn=Ad;function Ad(n,e=null,t=null,r=0,s=null,o=!1){if((!n||n===cc)&&(n=On),sr(n)){const a=je(n,e,!0);return t&&Io(a,t),wt>0&&!o&&Fn&&(a.shapeFlag&6?Fn[Fn.indexOf(n)]=a:Fn.push(a)),a.patchFlag=-2,a}if(Dd(n)&&(n=n.__vccOpts),e){e=Nd(e);let{class:a,style:c}=e;a&&!pn(a)&&(e.class=dr(a)),nn(c)&&(os(c)&&!V(c)&&(c=Sn({},c)),e.style=So(c))}const i=pn(n)?1:xc(n)?128:Xa(n)?64:nn(n)?4:G(n)?2:0;return En(n,e,t,r,s,i,o,!0)}function Nd(n){return n?os(n)||yc(n)?Sn({},n):n:null}function je(n,e,t=!1,r=!1){const{props:s,ref:o,patchFlag:i,children:a,transition:c}=n,l=e?Td(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:l,key:l&&Rc(l),ref:e&&e.ref?t&&o?V(o)?o.concat(Cr(e)):[o,Cr(e)]:Cr(e):o,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Dn?i===-1?16:i|16:i,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&je(n.ssContent),ssFallback:n.ssFallback&&je(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&r&&tr(u,c.clone(u)),u}function Ir(n=" ",e=0){return vn(ps,null,n,e)}function Cc(n="",e=!1){return e?(Mn(),rr(On,null,n)):vn(On,null,n)}function he(n){return n==null||typeof n=="boolean"?vn(On):V(n)?vn(Dn,null,n.slice()):sr(n)?Se(n):vn(ps,null,String(n))}function Se(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:je(n)}function Io(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(V(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Io(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!yc(e)?e._ctx=Nn:s===3&&Nn&&(Nn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else G(e)?(e={default:e,_ctx:Nn},t=32):(e=String(e),r&64?(t=16,e=[Ir(e)]):t=8);n.children=e,n.shapeFlag|=t}function Td(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=dr([e.class,r.class]));else if(s==="style")e.style=So([e.style,r.style]);else if(Yr(s)){const o=e[s],i=r[s];i&&o!==i&&!(V(o)&&o.includes(i))?e[s]=o?[].concat(o,i):i:i==null&&o==null&&!Jr(s)&&(e[s]=i)}else s!==""&&(e[s]=r[s])}return e}function ue(n,e,t,r=null){re(n,e,7,[t,r])}const xd=mc();let Od=0;function Rd(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||xd,o={uid:Od++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Aa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vc(r,s),emitsOptions:hc(r,s),emit:null,emitted:null,propsDefaults:an,inheritAttrs:r.inheritAttrs,ctx:an,data:an,props:an,attrs:an,slots:an,refs:an,setupState:an,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=ad.bind(null,o),n.ce&&n.ce(o),o}let Rn=null;const Lo=()=>Rn||Nn;let qr,io;{const n=es(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),o=>{s.length>1?s.forEach(i=>i(o)):s[0](o)}};qr=e("__VUE_INSTANCE_SETTERS__",t=>Rn=t),io=e("__VUE_SSR_SETTERS__",t=>or=t)}const hr=n=>{const e=Rn;return qr(n),n.scope.on(),()=>{n.scope.off(),qr(e)}},yi=()=>{Rn&&Rn.scope.off(),qr(null)};function Ic(n){return n.vnode.shapeFlag&4}let or=!1;function Cd(n,e=!1,t=!1){e&&io(e);const{props:r,children:s}=n.vnode,o=Ic(n);fd(n,r,o,e),_d(n,s,t||e);const i=o?Id(n,e):void 0;return e&&io(!1),i}function Id(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Xu);const{setup:r}=t;if(r){xe();const s=n.setupContext=r.length>1?Pc(n):null,o=hr(n),i=fr(r,n,0,[n.props,s]),a=_a(i);if(Oe(),o(),(a||n.sp)&&!ht(n)&&sc(n),a){if(i.then(yi,yi),e)return i.then(c=>{wi(n,c)}).catch(c=>{is(c,n,0)});n.asyncDep=i}else wi(n,i)}else Lc(n)}function wi(n,e,t){G(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:nn(e)&&(n.setupState=Ka(e)),Lc(n)}function Lc(n,e,t){const r=n.type;n.render||(n.render=r.render||ge);{const s=hr(n);xe();try{Zu(n)}finally{Oe(),s()}}}const Ld={get(n,e){return xn(n,"get",""),n[e]}};function Pc(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Ld),slots:n.slots,emit:n.emit,expose:e}}function fs(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Ka(yu(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Gt)return Gt[t](n)},has(e,t){return t in e||t in Gt}})):n.proxy}function Pd(n,e=!0){return G(n)?n.displayName||n.name:n.name||e&&n.__name}function Dd(n){return G(n)&&"__vccOpts"in n}const Bn=(n,e)=>Tu(n,e,or);function vt(n,e,t){try{Vr(-1);const r=arguments.length;return r===2?nn(e)&&!V(e)?sr(e)?vn(n,null,[e]):vn(n,e):vn(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&sr(t)&&(t=[t]),vn(n,e,t))}finally{Vr(1)}}function rg(n,e){const t=n.memo;if(t.length!=e.length)return!1;for(let r=0;r<t.length;r++)if(Zn(t[r],e[r]))return!1;return wt>0&&Fn&&Fn.push(n),!0}const Md="3.5.31";/**
* @vue/runtime-dom v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ao;const vi=typeof window<"u"&&window.trustedTypes;if(vi)try{ao=vi.createPolicy("vue",{createHTML:n=>n})}catch{}const Dc=ao?n=>ao.createHTML(n):n=>n,Bd="http://www.w3.org/2000/svg",Fd="http://www.w3.org/1998/Math/MathML",ke=typeof document<"u"?document:null,ki=ke&&ke.createElement("template"),$d={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?ke.createElementNS(Bd,n):e==="mathml"?ke.createElementNS(Fd,n):t?ke.createElement(n,{is:t}):ke.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>ke.createTextNode(n),createComment:n=>ke.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ke.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,o){const i=t?t.previousSibling:e.lastChild;if(s&&(s===o||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===o||!(s=s.nextSibling)););else{ki.innerHTML=Dc(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const a=ki.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[i?i.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Le="transition",Pt="animation",ir=Symbol("_vtc"),Mc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},jd=Sn({},Za,Mc),Ud=n=>(n.displayName="Transition",n.props=jd,n),sg=Ud((n,{slots:e})=>vt(ju,Kd(n),e)),qe=(n,e=[])=>{V(n)?n.forEach(t=>t(...e)):n&&n(...e)},Si=n=>n?V(n)?n.some(e=>e.length>1):n.length>1:!1;function Kd(n){const e={};for(const I in n)I in Mc||(e[I]=n[I]);if(n.css===!1)return e;const{name:t="v",type:r,duration:s,enterFromClass:o=`${t}-enter-from`,enterActiveClass:i=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:c=o,appearActiveClass:l=i,appearToClass:u=a,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:p=`${t}-leave-active`,leaveToClass:f=`${t}-leave-to`}=n,y=Vd(s),g=y&&y[0],b=y&&y[1],{onBeforeEnter:v,onEnter:w,onEnterCancelled:T,onLeave:A,onLeaveCancelled:R,onBeforeAppear:j=v,onAppear:M=w,onAppearCancelled:F=T}=e,D=(I,Y,fn,Vn)=>{I._enterCancelled=Vn,He(I,Y?u:a),He(I,Y?l:i),fn&&fn()},H=(I,Y)=>{I._isLeaving=!1,He(I,d),He(I,f),He(I,p),Y&&Y()},J=I=>(Y,fn)=>{const Vn=I?M:w,mn=()=>D(Y,I,fn);qe(Vn,[Y,mn]),Ei(()=>{He(Y,I?c:o),we(Y,I?u:a),Si(Vn)||Ai(Y,r,g,mn)})};return Sn(e,{onBeforeEnter(I){qe(v,[I]),we(I,o),we(I,i)},onBeforeAppear(I){qe(j,[I]),we(I,c),we(I,l)},onEnter:J(!1),onAppear:J(!0),onLeave(I,Y){I._isLeaving=!0;const fn=()=>H(I,Y);we(I,d),I._enterCancelled?(we(I,p),xi(I)):(xi(I),we(I,p)),Ei(()=>{I._isLeaving&&(He(I,d),we(I,f),Si(A)||Ai(I,r,b,fn))}),qe(A,[I,fn])},onEnterCancelled(I){D(I,!1,void 0,!0),qe(T,[I])},onAppearCancelled(I){D(I,!0,void 0,!0),qe(F,[I])},onLeaveCancelled(I){H(I),qe(R,[I])}})}function Vd(n){if(n==null)return null;if(nn(n))return[Ds(n.enter),Ds(n.leave)];{const e=Ds(n);return[e,e]}}function Ds(n){return Hl(n)}function we(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[ir]||(n[ir]=new Set)).add(e)}function He(n,e){e.split(/\s+/).forEach(r=>r&&n.classList.remove(r));const t=n[ir];t&&(t.delete(e),t.size||(n[ir]=void 0))}function Ei(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let qd=0;function Ai(n,e,t,r){const s=n._endId=++qd,o=()=>{s===n._endId&&r()};if(t!=null)return setTimeout(o,t);const{type:i,timeout:a,propCount:c}=Hd(n,e);if(!i)return r();const l=i+"end";let u=0;const d=()=>{n.removeEventListener(l,p),o()},p=f=>{f.target===n&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},a+1),n.addEventListener(l,p)}function Hd(n,e){const t=window.getComputedStyle(n),r=y=>(t[y]||"").split(", "),s=r(`${Le}Delay`),o=r(`${Le}Duration`),i=Ni(s,o),a=r(`${Pt}Delay`),c=r(`${Pt}Duration`),l=Ni(a,c);let u=null,d=0,p=0;e===Le?i>0&&(u=Le,d=i,p=o.length):e===Pt?l>0&&(u=Pt,d=l,p=c.length):(d=Math.max(i,l),u=d>0?i>l?Le:Pt:null,p=u?u===Le?o.length:c.length:0);const f=u===Le&&/\b(?:transform|all)(?:,|$)/.test(r(`${Le}Property`).toString());return{type:u,timeout:d,propCount:p,hasTransform:f}}function Ni(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,r)=>Ti(t)+Ti(n[r])))}function Ti(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function xi(n){return(n?n.ownerDocument:document).body.offsetHeight}function zd(n,e,t){const r=n[ir];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Hr=Symbol("_vod"),Bc=Symbol("_vsh"),Gd={name:"show",beforeMount(n,{value:e},{transition:t}){n[Hr]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Dt(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:r}){!e!=!t&&(r?e?(r.beforeEnter(n),Dt(n,!0),r.enter(n)):r.leave(n,()=>{Dt(n,!1)}):Dt(n,e))},beforeUnmount(n,{value:e}){Dt(n,e)}};function Dt(n,e){n.style.display=e?n[Hr]:"none",n[Bc]=!e}const Wd=Symbol(""),Yd=/(?:^|;)\s*display\s*:/;function Jd(n,e,t){const r=n.style,s=pn(t);let o=!1;if(t&&!s){if(e)if(pn(e))for(const i of e.split(";")){const a=i.slice(0,i.indexOf(":")).trim();t[a]==null&&Lr(r,a,"")}else for(const i in e)t[i]==null&&Lr(r,i,"");for(const i in t)i==="display"&&(o=!0),Lr(r,i,t[i])}else if(s){if(e!==t){const i=r[Wd];i&&(t+=";"+i),r.cssText=t,o=Yd.test(t)}}else e&&n.removeAttribute("style");Hr in n&&(n[Hr]=o?r.display:"",n[Bc]&&(r.display="none"))}const Oi=/\s*!important$/;function Lr(n,e,t){if(V(t))t.forEach(r=>Lr(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=Qd(n,e);Oi.test(t)?n.setProperty(et(r),t.replace(Oi,""),"important"):n[r]=t}}const Ri=["Webkit","Moz","ms"],Ms={};function Qd(n,e){const t=Ms[e];if(t)return t;let r=$n(e);if(r!=="filter"&&r in n)return Ms[e]=r;r=ns(r);for(let s=0;s<Ri.length;s++){const o=Ri[s]+r;if(o in n)return Ms[e]=o}return e}const Ci="http://www.w3.org/1999/xlink";function Ii(n,e,t,r,s,o=Ql(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Ci,e.slice(6,e.length)):n.setAttributeNS(Ci,e,t):t==null||o&&!va(t)?n.removeAttribute(e):n.setAttribute(e,o?"":zn(t)?String(t):t)}function Li(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Dc(t):t);return}const o=n.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(a!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let i=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=va(t):t==null&&a==="string"?(t="",i=!0):a==="number"&&(t=0,i=!0)}try{n[e]=t}catch{}i&&n.removeAttribute(s||e)}function Fc(n,e,t,r){n.addEventListener(e,t,r)}function Xd(n,e,t,r){n.removeEventListener(e,t,r)}const Pi=Symbol("_vei");function Zd(n,e,t,r,s=null){const o=n[Pi]||(n[Pi]={}),i=o[e];if(r&&i)i.value=r;else{const[a,c]=np(e);if(r){const l=o[e]=rp(r,s);Fc(n,a,l,c)}else i&&(Xd(n,a,i,c),o[e]=void 0)}}const Di=/(?:Once|Passive|Capture)$/;function np(n){let e;if(Di.test(n)){e={};let r;for(;r=n.match(Di);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):et(n.slice(2)),e]}let Bs=0;const ep=Promise.resolve(),tp=()=>Bs||(ep.then(()=>Bs=0),Bs=Date.now());function rp(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;re(sp(r,t.value),e,5,[r])};return t.value=n,t.attached=tp(),t}function sp(n,e){if(V(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Mi=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,op=(n,e,t,r,s,o)=>{const i=s==="svg";e==="class"?zd(n,r,i):e==="style"?Jd(n,t,r):Yr(e)?Jr(e)||Zd(n,e,t,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ip(n,e,r,i))?(Li(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ii(n,e,r,i,o,e!=="value")):n._isVueCE&&(ap(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!pn(r)))?Li(n,$n(e),r,o,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),Ii(n,e,r,i))};function ip(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&Mi(e)&&G(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Mi(e)&&pn(t)?!1:e in n}function ap(n,e){const t=n._def.props;if(!t)return!1;const r=$n(e);return Array.isArray(t)?t.some(s=>$n(s)===r):Object.keys(t).some(s=>$n(s)===r)}const Bi=n=>{const e=n.props["onUpdate:modelValue"]||!1;return V(e)?t=>Or(e,t):e},Fs=Symbol("_assign"),og={deep:!0,created(n,e,t){n[Fs]=Bi(t),Fc(n,"change",()=>{const r=n._modelValue,s=cp(n),o=n.checked,i=n[Fs];if(V(r)){const a=ka(r,s),c=a!==-1;if(o&&!c)i(r.concat(s));else if(!o&&c){const l=[...r];l.splice(a,1),i(l)}}else if(Qr(r)){const a=new Set(r);o?a.add(s):a.delete(s),i(a)}else i($c(n,o))})},mounted:Fi,beforeUpdate(n,e,t){n[Fs]=Bi(t),Fi(n,e,t)}};function Fi(n,{value:e,oldValue:t},r){n._modelValue=e;let s;if(V(e))s=ka(e,r.props.value)>-1;else if(Qr(e))s=e.has(r.props.value);else{if(e===t)return;s=pr(e,$c(n,!0))}n.checked!==s&&(n.checked=s)}function cp(n){return"_value"in n?n._value:n.value}function $c(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const lp=Sn({patchProp:op},$d);let $i;function up(){return $i||($i=yd(lp))}const dp=((...n)=>{const e=up().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=fp(r);if(!s)return;const o=e._component;!G(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const i=t(s,!1,pp(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},e});function pp(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function fp(n){return pn(n)?document.querySelector(n):n}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const ct=typeof document<"u";function jc(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function mp(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&jc(n.default)}const tn=Object.assign;function $s(n,e){const t={};for(const r in e){const s=e[r];t[r]=se(s)?s.map(n):n(s)}return t}const Yt=()=>{},se=Array.isArray;function ji(n,e){const t={};for(const r in n)t[r]=r in e?e[r]:n[r];return t}const Uc=/#/g,hp=/&/g,gp=/\//g,_p=/=/g,bp=/\?/g,Kc=/\+/g,yp=/%5B/g,wp=/%5D/g,Vc=/%5E/g,vp=/%60/g,qc=/%7B/g,kp=/%7C/g,Hc=/%7D/g,Sp=/%20/g;function Po(n){return n==null?"":encodeURI(""+n).replace(kp,"|").replace(yp,"[").replace(wp,"]")}function Ep(n){return Po(n).replace(qc,"{").replace(Hc,"}").replace(Vc,"^")}function co(n){return Po(n).replace(Kc,"%2B").replace(Sp,"+").replace(Uc,"%23").replace(hp,"%26").replace(vp,"`").replace(qc,"{").replace(Hc,"}").replace(Vc,"^")}function Ap(n){return co(n).replace(_p,"%3D")}function Np(n){return Po(n).replace(Uc,"%23").replace(bp,"%3F")}function Tp(n){return Np(n).replace(gp,"%2F")}function ar(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const xp=/\/$/,Op=n=>n.replace(xp,"");function js(n,e,t="/"){let r,s={},o="",i="";const a=e.indexOf("#");let c=e.indexOf("?");return c=a>=0&&c>a?-1:c,c>=0&&(r=e.slice(0,c),o=e.slice(c,a>0?a:e.length),s=n(o.slice(1))),a>=0&&(r=r||e.slice(0,a),i=e.slice(a,e.length)),r=Lp(r??e,t),{fullPath:r+o+i,path:r,query:s,hash:ar(i)}}function Rp(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Ui(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Cp(n,e,t){const r=e.matched.length-1,s=t.matched.length-1;return r>-1&&r===s&&kt(e.matched[r],t.matched[s])&&zc(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function kt(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function zc(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(var t in n)if(!Ip(n[t],e[t]))return!1;return!0}function Ip(n,e){return se(n)?Ki(n,e):se(e)?Ki(e,n):(n==null?void 0:n.valueOf())===(e==null?void 0:e.valueOf())}function Ki(n,e){return se(e)?n.length===e.length&&n.every((t,r)=>t===e[r]):n.length===1&&n[0]===e}function Lp(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),r=n.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let o=t.length-1,i,a;for(i=0;i<r.length;i++)if(a=r[i],a!==".")if(a==="..")o>1&&o--;else break;return t.slice(0,o).join("/")+"/"+r.slice(i).join("/")}const Pe={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let lo=(function(n){return n.pop="pop",n.push="push",n})({}),Us=(function(n){return n.back="back",n.forward="forward",n.unknown="",n})({});function Pp(n){if(!n)if(ct){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Op(n)}const Dp=/^[^#]+#/;function Mp(n,e){return n.replace(Dp,"#")+e}function Bp(n,e){const t=document.documentElement.getBoundingClientRect(),r=n.getBoundingClientRect();return{behavior:e.behavior,left:r.left-t.left-(e.left||0),top:r.top-t.top-(e.top||0)}}const ms=()=>({left:window.scrollX,top:window.scrollY});function Fp(n){let e;if("el"in n){const t=n.el,r=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=Bp(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Vi(n,e){return(history.state?history.state.position-e:-1)+n}const uo=new Map;function $p(n,e){uo.set(n,e)}function jp(n){const e=uo.get(n);return uo.delete(n),e}function Up(n){return typeof n=="string"||n&&typeof n=="object"}function Gc(n){return typeof n=="string"||typeof n=="symbol"}let dn=(function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n})({});const Wc=Symbol("");dn.MATCHER_NOT_FOUND+"",dn.NAVIGATION_GUARD_REDIRECT+"",dn.NAVIGATION_ABORTED+"",dn.NAVIGATION_CANCELLED+"",dn.NAVIGATION_DUPLICATED+"";function St(n,e){return tn(new Error,{type:n,[Wc]:!0},e)}function ve(n,e){return n instanceof Error&&Wc in n&&(e==null||!!(n.type&e))}const Kp=["params","query","hash"];function Vp(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of Kp)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}function qp(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<t.length;++r){const s=t[r].replace(Kc," "),o=s.indexOf("="),i=ar(o<0?s:s.slice(0,o)),a=o<0?null:ar(s.slice(o+1));if(i in e){let c=e[i];se(c)||(c=e[i]=[c]),c.push(a)}else e[i]=a}return e}function qi(n){let e="";for(let t in n){const r=n[t];if(t=Ap(t),r==null){r!==void 0&&(e+=(e.length?"&":"")+t);continue}(se(r)?r.map(s=>s&&co(s)):[r&&co(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function Hp(n){const e={};for(const t in n){const r=n[t];r!==void 0&&(e[t]=se(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const zp=Symbol(""),Hi=Symbol(""),hs=Symbol(""),Do=Symbol(""),po=Symbol("");function Mt(){let n=[];function e(r){return n.push(r),()=>{const s=n.indexOf(r);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Me(n,e,t,r,s,o=i=>i()){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=p=>{p===!1?c(St(dn.NAVIGATION_ABORTED,{from:t,to:e})):p instanceof Error?c(p):Up(p)?c(St(dn.NAVIGATION_GUARD_REDIRECT,{from:e,to:p})):(i&&r.enterCallbacks[s]===i&&typeof p=="function"&&i.push(p),a())},u=o(()=>n.call(r&&r.instances[s],e,t,l));let d=Promise.resolve(u);n.length<3&&(d=d.then(l)),d.catch(p=>c(p))})}function Ks(n,e,t,r,s=o=>o()){const o=[];for(const i of n)for(const a in i.components){let c=i.components[a];if(!(e!=="beforeRouteEnter"&&!i.instances[a]))if(jc(c)){const l=(c.__vccOpts||c)[e];l&&o.push(Me(l,t,r,i,a,s))}else{let l=c();o.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);const d=mp(u)?u.default:u;i.mods[a]=u,i.components[a]=d;const p=(d.__vccOpts||d)[e];return p&&Me(p,t,r,i,a,s)()}))}}return o}function Gp(n,e){const t=[],r=[],s=[],o=Math.max(e.matched.length,n.matched.length);for(let i=0;i<o;i++){const a=e.matched[i];a&&(n.matched.find(l=>kt(l,a))?r.push(a):t.push(a));const c=n.matched[i];c&&(e.matched.find(l=>kt(l,c))||s.push(c))}return[t,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Wp=()=>location.protocol+"//"+location.host;function Yc(n,e){const{pathname:t,search:r,hash:s}=e,o=n.indexOf("#");if(o>-1){let i=s.includes(n.slice(o))?n.slice(o).length:1,a=s.slice(i);return a[0]!=="/"&&(a="/"+a),Ui(a,"")}return Ui(t,n)+r+s}function Yp(n,e,t,r){let s=[],o=[],i=null;const a=({state:p})=>{const f=Yc(n,location),y=t.value,g=e.value;let b=0;if(p){if(t.value=f,e.value=p,i&&i===y){i=null;return}b=g?p.position-g.position:0}else r(f);s.forEach(v=>{v(t.value,y,{delta:b,type:lo.pop,direction:b?b>0?Us.forward:Us.back:Us.unknown})})};function c(){i=t.value}function l(p){s.push(p);const f=()=>{const y=s.indexOf(p);y>-1&&s.splice(y,1)};return o.push(f),f}function u(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(tn({},p.state,{scroll:ms()}),"")}}function d(){for(const p of o)p();o=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:c,listen:l,destroy:d}}function zi(n,e,t,r=!1,s=!1){return{back:n,current:e,forward:t,replaced:r,position:window.history.length,scroll:s?ms():null}}function Jp(n){const{history:e,location:t}=window,r={value:Yc(n,t)},s={value:e.state};s.value||o(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(c,l,u){const d=n.indexOf("#"),p=d>-1?(t.host&&document.querySelector("base")?n:n.slice(d))+c:Wp()+n+c;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(f){console.error(f),t[u?"replace":"assign"](p)}}function i(c,l){o(c,tn({},e.state,zi(s.value.back,c,s.value.forward,!0),l,{position:s.value.position}),!0),r.value=c}function a(c,l){const u=tn({},s.value,e.state,{forward:c,scroll:ms()});o(u.current,u,!0),o(c,tn({},zi(r.value,c,null),{position:u.position+1},l),!1),r.value=c}return{location:r,state:s,push:a,replace:i}}function Qp(n){n=Pp(n);const e=Jp(n),t=Yp(n,e.state,e.location,e.replace);function r(o,i=!0){i||t.pauseListeners(),history.go(o)}const s=tn({location:"",base:n,go:r,createHref:Mp.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Xp(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),Qp(n)}let Ye=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n})({});var wn=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n})(wn||{});const Zp={type:Ye.Static,value:""},nf=/[a-zA-Z0-9_]/;function ef(n){if(!n)return[[]];if(n==="/")return[[Zp]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(f){throw new Error(`ERR (${t})/"${l}": ${f}`)}let t=wn.Static,r=t;const s=[];let o;function i(){o&&s.push(o),o=[]}let a=0,c,l="",u="";function d(){l&&(t===wn.Static?o.push({type:Ye.Static,value:l}):t===wn.Param||t===wn.ParamRegExp||t===wn.ParamRegExpEnd?(o.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),o.push({type:Ye.Param,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&t!==wn.ParamRegExp){r=t,t=wn.EscapeNext;continue}switch(t){case wn.Static:c==="/"?(l&&d(),i()):c===":"?(d(),t=wn.Param):p();break;case wn.EscapeNext:p(),t=r;break;case wn.Param:c==="("?t=wn.ParamRegExp:nf.test(c)?p():(d(),t=wn.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case wn.ParamRegExp:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:t=wn.ParamRegExpEnd:u+=c;break;case wn.ParamRegExpEnd:d(),t=wn.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===wn.ParamRegExp&&e(`Unfinished custom RegExp for param "${l}"`),d(),i(),s}const Gi="[^/]+?",tf={sensitive:!1,strict:!1,start:!0,end:!0};var In=(function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n})(In||{});const rf=/[.+*?^${}()[\]/\\]/g;function sf(n,e){const t=tn({},tf,e),r=[];let s=t.start?"^":"";const o=[];for(const l of n){const u=l.length?[]:[In.Root];t.strict&&!l.length&&(s+="/");for(let d=0;d<l.length;d++){const p=l[d];let f=In.Segment+(t.sensitive?In.BonusCaseSensitive:0);if(p.type===Ye.Static)d||(s+="/"),s+=p.value.replace(rf,"\\$&"),f+=In.Static;else if(p.type===Ye.Param){const{value:y,repeatable:g,optional:b,regexp:v}=p;o.push({name:y,repeatable:g,optional:b});const w=v||Gi;if(w!==Gi){f+=In.BonusCustomRegExp;try{`${w}`}catch(A){throw new Error(`Invalid custom RegExp for param "${y}" (${w}): `+A.message)}}let T=g?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;d||(T=b&&l.length<2?`(?:/${T})`:"/"+T),b&&(T+="?"),s+=T,f+=In.Dynamic,b&&(f+=In.BonusOptional),g&&(f+=In.BonusRepeatable),w===".*"&&(f+=In.BonusWildcard)}u.push(f)}r.push(u)}if(t.strict&&t.end){const l=r.length-1;r[l][r[l].length-1]+=In.BonusStrict}t.strict||(s+="/?"),t.end?s+="$":t.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const i=new RegExp(s,t.sensitive?"":"i");function a(l){const u=l.match(i),d={};if(!u)return null;for(let p=1;p<u.length;p++){const f=u[p]||"",y=o[p-1];d[y.name]=f&&y.repeatable?f.split("/"):f}return d}function c(l){let u="",d=!1;for(const p of n){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const f of p)if(f.type===Ye.Static)u+=f.value;else if(f.type===Ye.Param){const{value:y,repeatable:g,optional:b}=f,v=y in l?l[y]:"";if(se(v)&&!g)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const w=se(v)?v.join("/"):v;if(!w)if(b)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${y}"`);u+=w}}return u||"/"}return{re:i,score:r,keys:o,parse:a,stringify:c}}function of(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=e[t]-n[t];if(r)return r;t++}return n.length<e.length?n.length===1&&n[0]===In.Static+In.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===In.Static+In.Segment?1:-1:0}function Jc(n,e){let t=0;const r=n.score,s=e.score;for(;t<r.length&&t<s.length;){const o=of(r[t],s[t]);if(o)return o;t++}if(Math.abs(s.length-r.length)===1){if(Wi(r))return 1;if(Wi(s))return-1}return s.length-r.length}function Wi(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const af={strict:!1,end:!0,sensitive:!1};function cf(n,e,t){const r=sf(ef(n.path),t),s=tn(r,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function lf(n,e){const t=[],r=new Map;e=ji(af,e);function s(d){return r.get(d)}function o(d,p,f){const y=!f,g=Ji(d);g.aliasOf=f&&f.record;const b=ji(e,d),v=[g];if("alias"in d){const A=typeof d.alias=="string"?[d.alias]:d.alias;for(const R of A)v.push(Ji(tn({},g,{components:f?f.record.components:g.components,path:R,aliasOf:f?f.record:g})))}let w,T;for(const A of v){const{path:R}=A;if(p&&R[0]!=="/"){const j=p.record.path,M=j[j.length-1]==="/"?"":"/";A.path=p.record.path+(R&&M+R)}if(w=cf(A,p,b),f?f.alias.push(w):(T=T||w,T!==w&&T.alias.push(w),y&&d.name&&!Qi(w)&&i(d.name)),Qc(w)&&c(w),g.children){const j=g.children;for(let M=0;M<j.length;M++)o(j[M],w,f&&f.children[M])}f=f||w}return T?()=>{i(T)}:Yt}function i(d){if(Gc(d)){const p=r.get(d);p&&(r.delete(d),t.splice(t.indexOf(p),1),p.children.forEach(i),p.alias.forEach(i))}else{const p=t.indexOf(d);p>-1&&(t.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function a(){return t}function c(d){const p=pf(d,t);t.splice(p,0,d),d.record.name&&!Qi(d)&&r.set(d.record.name,d)}function l(d,p){let f,y={},g,b;if("name"in d&&d.name){if(f=r.get(d.name),!f)throw St(dn.MATCHER_NOT_FOUND,{location:d});b=f.record.name,y=tn(Yi(p.params,f.keys.filter(T=>!T.optional).concat(f.parent?f.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),d.params&&Yi(d.params,f.keys.map(T=>T.name))),g=f.stringify(y)}else if(d.path!=null)g=d.path,f=t.find(T=>T.re.test(g)),f&&(y=f.parse(g),b=f.record.name);else{if(f=p.name?r.get(p.name):t.find(T=>T.re.test(p.path)),!f)throw St(dn.MATCHER_NOT_FOUND,{location:d,currentLocation:p});b=f.record.name,y=tn({},p.params,d.params),g=f.stringify(y)}const v=[];let w=f;for(;w;)v.unshift(w.record),w=w.parent;return{name:b,path:g,params:y,matched:v,meta:df(v)}}n.forEach(d=>o(d));function u(){t.length=0,r.clear()}return{addRoute:o,resolve:l,removeRoute:i,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Yi(n,e){const t={};for(const r of e)r in n&&(t[r]=n[r]);return t}function Ji(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:uf(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function uf(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const r in n.components)e[r]=typeof t=="object"?t[r]:t;return e}function Qi(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function df(n){return n.reduce((e,t)=>tn(e,t.meta),{})}function pf(n,e){let t=0,r=e.length;for(;t!==r;){const o=t+r>>1;Jc(n,e[o])<0?r=o:t=o+1}const s=ff(n);return s&&(r=e.lastIndexOf(s,r-1)),r}function ff(n){let e=n;for(;e=e.parent;)if(Qc(e)&&Jc(n,e)===0)return e}function Qc({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Xi(n){const e=ee(hs),t=ee(Do),r=Bn(()=>{const c=yn(n.to);return e.resolve(c)}),s=Bn(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],d=t.matched;if(!u||!d.length)return-1;const p=d.findIndex(kt.bind(null,u));if(p>-1)return p;const f=Zi(c[l-2]);return l>1&&Zi(u)===f&&d[d.length-1].path!==f?d.findIndex(kt.bind(null,c[l-2])):p}),o=Bn(()=>s.value>-1&&_f(t.params,r.value.params)),i=Bn(()=>s.value>-1&&s.value===t.matched.length-1&&zc(t.params,r.value.params));function a(c={}){if(gf(c)){const l=e[yn(n.replace)?"replace":"push"](yn(n.to)).catch(Yt);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:Bn(()=>r.value.href),isActive:o,isExactActive:i,navigate:a}}function mf(n){return n.length===1?n[0]:n}const hf=mr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Xi,setup(n,{slots:e}){const t=ss(Xi(n)),{options:r}=ee(hs),s=Bn(()=>({[na(n.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[na(n.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const o=e.default&&mf(e.default(t));return n.custom?o:vt("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},o)}}}),fo=hf;function gf(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function _f(n,e){for(const t in e){const r=e[t],s=n[t];if(typeof r=="string"){if(r!==s)return!1}else if(!se(s)||s.length!==r.length||r.some((o,i)=>o.valueOf()!==s[i].valueOf()))return!1}return!0}function Zi(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const na=(n,e,t)=>n??e??t,bf=mr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const r=ee(po),s=Bn(()=>n.route||r.value),o=ee(Hi,0),i=Bn(()=>{let l=yn(o);const{matched:u}=s.value;let d;for(;(d=u[l])&&!d.components;)l++;return l}),a=Bn(()=>s.value.matched[i.value]);Rr(Hi,Bn(()=>i.value+1)),Rr(zp,a),Rr(po,s);const c=nr();return Ht(()=>[c.value,a.value,n.name],([l,u,d],[p,f,y])=>{u&&(u.instances[d]=l,f&&f!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),l&&u&&(!f||!kt(u,f)||!p)&&(u.enterCallbacks[d]||[]).forEach(g=>g(l))},{flush:"post"}),()=>{const l=s.value,u=n.name,d=a.value,p=d&&d.components[u];if(!p)return ea(t.default,{Component:p,route:l});const f=d.props[u],y=f?f===!0?l.params:typeof f=="function"?f(l):f:null,b=vt(p,tn({},y,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return ea(t.default,{Component:b,route:l})||b}}});function ea(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const yf=bf;function wf(n){const e=lf(n.routes,n),t=n.parseQuery||qp,r=n.stringifyQuery||qi,s=n.history,o=Mt(),i=Mt(),a=Mt(),c=wu(Pe);let l=Pe;ct&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=$s.bind(null,E=>""+E),d=$s.bind(null,Tp),p=$s.bind(null,ar);function f(E,$){let P,U;return Gc(E)?(P=e.getRecordMatcher(E),U=$):U=E,e.addRoute(U,P)}function y(E){const $=e.getRecordMatcher(E);$&&e.removeRoute($)}function g(){return e.getRoutes().map(E=>E.record)}function b(E){return!!e.getRecordMatcher(E)}function v(E,$){if($=tn({},$||c.value),typeof E=="string"){const _=js(t,E,$.path),k=e.resolve({path:_.path},$),N=s.createHref(_.fullPath);return tn(_,k,{params:p(k.params),hash:ar(_.hash),redirectedFrom:void 0,href:N})}let P;if(E.path!=null)P=tn({},E,{path:js(t,E.path,$.path).path});else{const _=tn({},E.params);for(const k in _)_[k]==null&&delete _[k];P=tn({},E,{params:d(_)}),$.params=d($.params)}const U=e.resolve(P,$),Q=E.hash||"";U.params=u(p(U.params));const m=Rp(r,tn({},E,{hash:Ep(Q),path:U.path})),h=s.createHref(m);return tn({fullPath:m,hash:Q,query:r===qi?Hp(E.query):E.query||{}},U,{redirectedFrom:void 0,href:h})}function w(E){return typeof E=="string"?js(t,E,c.value.path):tn({},E)}function T(E,$){if(l!==E)return St(dn.NAVIGATION_CANCELLED,{from:$,to:E})}function A(E){return M(E)}function R(E){return A(tn(w(E),{replace:!0}))}function j(E,$){const P=E.matched[E.matched.length-1];if(P&&P.redirect){const{redirect:U}=P;let Q=typeof U=="function"?U(E,$):U;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=w(Q):{path:Q},Q.params={}),tn({query:E.query,hash:E.hash,params:Q.path!=null?{}:E.params},Q)}}function M(E,$){const P=l=v(E),U=c.value,Q=E.state,m=E.force,h=E.replace===!0,_=j(P,U);if(_)return M(tn(w(_),{state:typeof _=="object"?tn({},Q,_.state):Q,force:m,replace:h}),$||P);const k=P;k.redirectedFrom=$;let N;return!m&&Cp(r,U,P)&&(N=St(dn.NAVIGATION_DUPLICATED,{to:k,from:U}),ie(U,U,!0,!1)),(N?Promise.resolve(N):H(k,U)).catch(S=>ve(S)?ve(S,dn.NAVIGATION_GUARD_REDIRECT)?S:Ie(S):en(S,k,U)).then(S=>{if(S){if(ve(S,dn.NAVIGATION_GUARD_REDIRECT))return M(tn({replace:h},w(S.to),{state:typeof S.to=="object"?tn({},Q,S.to.state):Q,force:m}),$||k)}else S=I(k,U,!0,h,Q);return J(k,U,S),S})}function F(E,$){const P=T(E,$);return P?Promise.reject(P):Promise.resolve()}function D(E){const $=rt.values().next().value;return $&&typeof $.runWithContext=="function"?$.runWithContext(E):E()}function H(E,$){let P;const[U,Q,m]=Gp(E,$);P=Ks(U.reverse(),"beforeRouteLeave",E,$);for(const _ of U)_.leaveGuards.forEach(k=>{P.push(Me(k,E,$))});const h=F.bind(null,E,$);return P.push(h),Gn(P).then(()=>{P=[];for(const _ of o.list())P.push(Me(_,E,$));return P.push(h),Gn(P)}).then(()=>{P=Ks(Q,"beforeRouteUpdate",E,$);for(const _ of Q)_.updateGuards.forEach(k=>{P.push(Me(k,E,$))});return P.push(h),Gn(P)}).then(()=>{P=[];for(const _ of m)if(_.beforeEnter)if(se(_.beforeEnter))for(const k of _.beforeEnter)P.push(Me(k,E,$));else P.push(Me(_.beforeEnter,E,$));return P.push(h),Gn(P)}).then(()=>(E.matched.forEach(_=>_.enterCallbacks={}),P=Ks(m,"beforeRouteEnter",E,$,D),P.push(h),Gn(P))).then(()=>{P=[];for(const _ of i.list())P.push(Me(_,E,$));return P.push(h),Gn(P)}).catch(_=>ve(_,dn.NAVIGATION_CANCELLED)?_:Promise.reject(_))}function J(E,$,P){a.list().forEach(U=>D(()=>U(E,$,P)))}function I(E,$,P,U,Q){const m=T(E,$);if(m)return m;const h=$===Pe,_=ct?history.state:{};P&&(U||h?s.replace(E.fullPath,tn({scroll:h&&_&&_.scroll},Q)):s.push(E.fullPath,Q)),c.value=E,ie(E,$,P,h),Ie()}let Y;function fn(){Y||(Y=s.listen((E,$,P)=>{if(!Ue.listening)return;const U=v(E),Q=j(U,Ue.currentRoute.value);if(Q){M(tn(Q,{replace:!0,force:!0}),U).catch(Yt);return}l=U;const m=c.value;ct&&$p(Vi(m.fullPath,P.delta),ms()),H(U,m).catch(h=>ve(h,dn.NAVIGATION_ABORTED|dn.NAVIGATION_CANCELLED)?h:ve(h,dn.NAVIGATION_GUARD_REDIRECT)?(M(tn(w(h.to),{force:!0}),U).then(_=>{ve(_,dn.NAVIGATION_ABORTED|dn.NAVIGATION_DUPLICATED)&&!P.delta&&P.type===lo.pop&&s.go(-1,!1)}).catch(Yt),Promise.reject()):(P.delta&&s.go(-P.delta,!1),en(h,U,m))).then(h=>{h=h||I(U,m,!1),h&&(P.delta&&!ve(h,dn.NAVIGATION_CANCELLED)?s.go(-P.delta,!1):P.type===lo.pop&&ve(h,dn.NAVIGATION_ABORTED|dn.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),J(U,m,h)}).catch(Yt)}))}let Vn=Mt(),mn=Mt(),sn;function en(E,$,P){Ie(E);const U=mn.list();return U.length?U.forEach(Q=>Q(E,$,P)):console.error(E),Promise.reject(E)}function be(){return sn&&c.value!==Pe?Promise.resolve():new Promise((E,$)=>{Vn.add([E,$])})}function Ie(E){return sn||(sn=!E,fn(),Vn.list().forEach(([$,P])=>E?P(E):$()),Vn.reset()),E}function ie(E,$,P,U){const{scrollBehavior:Q}=n;if(!ct||!Q)return Promise.resolve();const m=!P&&jp(Vi(E.fullPath,0))||(U||!P)&&history.state&&history.state.scroll||null;return Ha().then(()=>Q(E,$,m)).then(h=>h&&Fp(h)).catch(h=>en(h,E,$))}const Un=E=>s.go(E);let tt;const rt=new Set,Ue={currentRoute:c,listening:!0,addRoute:f,removeRoute:y,clearRoutes:e.clearRoutes,hasRoute:b,getRoutes:g,resolve:v,options:n,push:A,replace:R,go:Un,back:()=>Un(-1),forward:()=>Un(1),beforeEach:o.add,beforeResolve:i.add,afterEach:a.add,onError:mn.add,isReady:be,install(E){E.component("RouterLink",fo),E.component("RouterView",yf),E.config.globalProperties.$router=Ue,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>yn(c)}),ct&&!tt&&c.value===Pe&&(tt=!0,A(s.location).catch(U=>{}));const $={};for(const U in Pe)Object.defineProperty($,U,{get:()=>c.value[U],enumerable:!0});E.provide(hs,Ue),E.provide(Do,ja($)),E.provide(po,c);const P=E.unmount;rt.add(E),E.unmount=function(){rt.delete(E),rt.size<1&&(l=Pe,Y&&Y(),Y=null,c.value=Pe,tt=!1,sn=!1),P()}}};function Gn(E){return E.reduce(($,P)=>$.then(()=>D(P)),Promise.resolve())}return Ue}function ig(){return ee(hs)}function vf(n){return ee(Do)}const kf=`# ─────────────────────────────────────────────────────────────────────────────
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

# ── Связи с другими процессами ──────────────────────────────────────────
# Только по межконтрактным вызовам: consumes — процесс вызывает другой,
# provides — другой процесс вызывает этот.
related:
  - process_type: sov.authpkg
    relation: consumes
    note: >
      Вопрос выносится в повестку совета: голосование и решение идут по
      типовому порядку решений совета, итог возвращается в процесс.
`,Sf=`# ─────────────────────────────────────────────────────────────────────────────
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

# ── Граф состояний ──────────────────────────────────────────────────────────
# Статусы — значения поля status записи решения (cpp/branch/src/*dec.cpp).
# Свободное решение завершается закрытием собрания, решение об учреждении
# участка — решением совета; в обоих случаях запись решения удаляется,
# протокол и документы остаются в реестре документов.
entity: branch::decisions
entity_human: Решение собрания участка
entity_source: cpp/branch/src/

states:
  - name: opened
    human: Собрание объявлено
    description: >
      Повестка сформирована, собрание открыто для присоединения пайщиков.
    kind: initial

  - name: voting
    human: Идёт голосование
    description: >
      Председатель собрания открыл голосование; участники подают бюллетени
      в течение окна голосования.
    kind: normal

  - name: approved
    human: Протокол утверждён
    description: >
      Решение об учреждении участка принято собранием и утверждено
      протоколом. Ждёт, пока избранный председатель участка направит
      заявление в совет.
    kind: normal

  - name: onapproval
    human: На утверждении совета
    description: >
      Заявление об учреждении участка с договором и доверенностью
      председателя участка стоит в повестке совета.
    kind: normal

transitions:
  - from: "∅"
    to: opened
    action: branch::createdec
    actor: Пайщик
    guards:
      - Предложение о проведении собрания подписано инициатором.
      - Тип решения — свободное либо учреждение кооперативного участка.
      - Повестка не пустая, в ней не больше 10 вопросов, у каждого есть заголовок и проект решения.
      - Для учреждения участка указан аккаунт участка.
      - Решение с таким идентификатором ещё не создавалось.

  - from: opened
    to: opened
    action: branch::joindec
    actor: Пайщик
    guards:
      - Голосование ещё не начато.
      - Пайщик ещё не участник собрания.

  - from: opened
    to: voting
    action: branch::startdec
    actor: Пайщик
    guards:
      - У собрания не меньше трёх участников.
      - Избираемый председатель участка — участник собрания.
      - Для учреждения участка указан адрес привязки.

  - from: voting
    to: voting
    action: branch::votedec
    actor: Пайщик
    guards:
      - Голосует участник собрания, в окне голосования.
      - Бюллетень подписан голосующим и содержит голос по каждому вопросу.
      - Голос по вопросу ещё не учтён.

  - from: voting
    to: "∅"
    action: branch::closedec
    actor: Пайщик
    guards:
      - Свободное решение.
      - Подано не меньше трёх бюллетеней.
      - Окно голосования истекло либо проголосовали все участники.

  - from: voting
    to: approved
    action: branch::closedec
    actor: Пайщик
    guards:
      - Решение об учреждении участка.
      - Подано не меньше трёх бюллетеней.
      - Окно голосования истекло либо проголосовали все участники.

  - from: approved
    to: onapproval
    action: branch::exec
    actor: Пайщик
    guards:
      - Заявление, договор о материальной ответственности и доверенность подписаны избранным председателем участка.

  - from: onapproval
    to: "∅"
    action: branch::confirmdec
    actor: Совет
    guards:
      - Совет утвердил учреждение участка.
      - Избранный председатель — физическое лицо и не возглавляет другой участок.

  - from: onapproval
    to: "∅"
    action: branch::declinedec
    actor: Совет
    guards:
      - Совет отказал в учреждении участка.

  - from: opened | voting | approved
    to: "∅"
    action: branch::canceldec
    actor: Пайщик
    guards:
      - Решение ещё не на утверждении совета.

# ── Сценарий ────────────────────────────────────────────────────────────────
scenario:
  steps:
    - step: 1
      title: Объявление собрания
      actor: Пайщик
      action: branch::createdec
      description: >
        Инициатор формирует повестку и подписывает предложение о проведении
        собрания. Собрание открыто для присоединения.
      post:
        - Собрание объявлено.

    - step: 2
      title: Присоединение участников
      actor: Пайщик
      action: branch::joindec
      description: >
        Пайщики присоединяются к собранию до начала голосования.
      post:
        - Участников не меньше трёх — можно открывать голосование.

    - step: 3
      title: Открытие голосования
      actor: Пайщик
      action: branch::startdec
      description: >
        Председатель собрания открывает голосование, указывает избираемого
        председателя участка и, для учреждения участка, адрес привязки.
        Повестку можно дополнить вопросами участников.
      post:
        - Идёт голосование.

    - step: 4
      title: Голосование бюллетенями
      actor: Пайщик
      action: branch::votedec
      description: >
        Участники подают подписанные бюллетени: за, против или воздержался по
        каждому вопросу.
      post:
        - Голоса учтены.

    - step: 5
      title: Утверждение протокола
      actor: Пайщик
      action: branch::closedec
      description: >
        Председатель собрания закрывает голосование и подписывает протокол.
        Свободное решение на этом завершается. Решение об учреждении участка
        переходит к заявлению в совет.
      post:
        - Протокол в реестре документов вместе с бюллетенями.

    - step: 6
      title: Заявление в совет
      actor: Пайщик
      action: branch::exec
      description: >
        Избранный председатель участка подписывает заявление об учреждении
        участка, договор о материальной ответственности и доверенность.
        Вопрос ставится в повестку совета.
      post:
        - Учреждение участка на утверждении совета.

    - step: 7
      title: Учреждение участка советом
      actor: Совет
      action: branch::confirmdec
      description: >
        Совет утверждает учреждение. Участок создаётся с адресом привязки,
        избранный председатель возглавляет его.
      post:
        - Кооперативный участок создан.

  alternatives:
    - branch: Отмена собрания
      at_step: 3
      action: branch::canceldec
      actor: Пайщик
      description: >
        Инициатор отменяет собрание, пока решение не ушло в совет. Так
        закрывают собрание, на котором не набралось трёх участников.

    - branch: Совет отказал в учреждении
      at_step: 7
      action: branch::declinedec
      actor: Совет
      description: >
        Совет отказал в учреждении участка. Решение закрывается, участок не
        создаётся.

# ── Документы ───────────────────────────────────────────────────────────────
documents:
  - action: branch::createdec
    title: Предложение повестки собрания пайщиков кооперативного участка
    registry_id: 320
    signed_by: [Пайщик]
    stored_in: decisions.proposal

  - action: branch::votedec
    title: Бюллетень для голосования на собрании пайщиков кооперативного участка
    registry_id: 322
    signed_by: [Пайщик]
    stored_in: реестр документов кооператива (пакет собрания)

  - action: branch::closedec
    title: Протокол решения собрания пайщиков
    registry_id: 323
    signed_by: [Пайщик]
    stored_in: decisions.protocol
    note: Подписывает председатель собрания; протокол завершает пакет собрания вместе с бюллетенями.

  - action: branch::exec
    title: Заявление председателя собрания в совет об учреждении кооперативного участка
    registry_id: 324
    signed_by: [Пайщик]
    stored_in: decisions.petition
    note: Контракт проверяет подпись избранного председателя участка.

  - action: branch::exec
    title: Договор о материальной ответственности председателя кооперативного участка
    registry_id: 328
    signed_by: [Пайщик]
    stored_in: decisions.liability
    note: Подписывает избранный председатель участка.

  - action: branch::exec
    title: Доверенность председателю кооперативного участка
    registry_id: 329
    signed_by: [Пайщик]
    stored_in: decisions.authority
    note: Подписывает избранный председатель участка.

  - action: branch::confirmdec
    title: Решение совета об учреждении кооперативного участка
    registry_id: 325
    signed_by: [Совет]
    stored_in: реестр документов кооператива

operations: []

# ── Связи с другими процессами ──────────────────────────────────────────
# Только по межконтрактным вызовам: consumes — процесс вызывает другой,
# provides — другой процесс вызывает этот.
related:
  - process_type: sov.authpkg
    relation: consumes
    note: >
      Вопрос выносится в повестку совета: голосование и решение идут по
      типовому порядку решений совета, итог возвращается в процесс.
`,Ef=`# ─────────────────────────────────────────────────────────────────────────────
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

# ── Связи с другими процессами ──────────────────────────────────────────
# Только по межконтрактным вызовам: consumes — процесс вызывает другой,
# provides — другой процесс вызывает этот.
related:
  - process_type: p.mkt.claim
    relation: provides
    note: >
      Начисляет или возвращает членский взнос участка.
  - process_type: p.mkt.return
    relation: provides
    note: >
      Начисляет или возвращает членский взнос участка.
  - process_type: p.mkt.supply
    relation: provides
    note: >
      Начисляет или возвращает членский взнос участка.
  - process_type: p.reg.exit
    relation: provides
    note: >
      Начисляет или возвращает членский взнос участка.
`,Af=`# ─────────────────────────────────────────────────────────────────────────────
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
    triggered_by: expense::payexp
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
    triggered_by: expense::payexp
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
    triggered_by: expense::reportexp
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
    triggered_by: expense::returnexp
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
    triggered_by: expense::overspendexp
    description: >
      Пайщик потратил больше выданного аванса — кооператив доплачивает
      разницу, после чего подотчёт закрывается на полную сумму.

# ── Связи с другими процессами ──────────────────────────────────────────
# Только по межконтрактным вызовам: consumes — процесс вызывает другой,
# provides — другой процесс вызывает этот.
related:
  - process_type: p.exp.expns
    relation: consumes
    note: >
      Расход подаётся в общий процесс «Расход по служебной записке»: там
      оформляются служебная записка и протокол совета, кассир оплачивает
      позиции, получатели авансов отчитываются; по завершении процесс сообщает
      итог.
`,Nf=`# ─────────────────────────────────────────────────────────────────────────────
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
      подписанные договор о полной материальной ответственности и доверенность
      доверенному лицу участка.

  - name: branch::apprtrusted
    human: Одобрить доверенного
    actor: Председатель участка
    role: closer
    purpose: >
      Председатель участка ставит встречную подпись на договоре материальной
      ответственности и на доверенности. Оба документа уходят в реестр
      документов кооператива, пайщик входит в состав доверенных лиц участка.

  - name: branch::decltrusted
    human: Отклонить заявку доверенного
    actor: Председатель участка
    role: reject
    purpose: >
      Председатель участка отклоняет заявку; причина фиксируется в журнале.

# ── Граф состояний ──────────────────────────────────────────────────────────
# Заявка живёт, пока её не рассмотрел председатель участка: одобрение и отказ
# удаляют запись. Отдельного поля статуса в таблице нет — существование
# записи и есть статус «на рассмотрении».
entity: branch::trustreqs
entity_human: Заявка доверенного лица
entity_source: cpp/branch/src/

states:
  - name: pending
    human: На рассмотрении
    description: >
      Заявка подана с подписанными договором и доверенностью и ждёт решения
      председателя участка.
    kind: initial

transitions:
  - from: "∅"
    to: pending
    action: branch::reqtrusted
    actor: Пайщик
    guards:
      - Договор и доверенность подписаны самим заявителем.
      - Заявитель — активный пайщик кооператива.
      - Заявитель не председатель этого участка и ещё не его доверенное лицо.
      - У участка меньше трёх доверенных лиц.
      - Заявка с таким идентификатором ещё не подавалась.

  - from: pending
    to: "∅"
    action: branch::apprtrusted
    actor: Председатель участка
    guards:
      - Договор и доверенность подписаны и заявителем, и председателем участка.
      - Заявитель ещё не доверенное лицо участка.
      - У участка меньше трёх доверенных лиц.

  - from: pending
    to: "∅"
    action: branch::decltrusted
    actor: Председатель участка
    guards:
      - Заявка существует.

# ── Сценарий ────────────────────────────────────────────────────────────────
scenario:
  steps:
    - step: 1
      title: Подача заявки
      actor: Пайщик
      action: branch::reqtrusted
      description: >
        Пайщик выбирает участок и подписывает договор о полной материальной
        ответственности и доверенность доверенному лицу участка. Заявка
        уходит председателю участка.
      pre:
        - Пайщик активен в кооперативе.
        - У участка меньше трёх доверенных лиц.
      post:
        - Заявка на рассмотрении у председателя участка.

    - step: 2
      title: Одобрение председателем участка
      actor: Председатель участка
      action: branch::apprtrusted
      description: >
        Председатель участка ставит встречную подпись на договоре и
        доверенности. Пайщик становится доверенным лицом участка, документы
        с двумя подписями сохраняются в реестре документов кооператива.
      post:
        - Пайщик — доверенное лицо участка.
        - Договор и доверенность подписаны обеими сторонами.

  alternatives:
    - branch: Председатель отклонил заявку
      at_step: 2
      action: branch::decltrusted
      actor: Председатель участка
      description: >
        Председатель участка отказывает с указанием причины. Заявка
        закрывается, пайщик может подать её снова.

# ── Документы ───────────────────────────────────────────────────────────────
documents:
  - action: branch::reqtrusted
    title: Договор о материальной ответственности доверенного лица кооперативного участка
    registry_id: 327
    signed_by: [Пайщик]
    stored_in: trustreqs.application

  - action: branch::reqtrusted
    title: Доверенность доверенному лицу кооперативного участка
    registry_id: 330
    signed_by: [Пайщик]
    stored_in: trustreqs.authority

  - action: branch::apprtrusted
    title: Договор о материальной ответственности доверенного лица кооперативного участка (обе подписи)
    registry_id: 327
    signed_by: [Пайщик, Председатель участка]
    stored_in: реестр документов кооператива
    note: Тот же договор со встречной подписью председателя участка.

  - action: branch::apprtrusted
    title: Доверенность доверенному лицу кооперативного участка (обе подписи)
    registry_id: 330
    signed_by: [Пайщик, Председатель участка]
    stored_in: реестр документов кооператива
    note: Та же доверенность со встречной подписью председателя участка.

operations: []
`,Tf=`# ─────────────────────────────────────────────────────────────────────────────
# Стандарт «Заём пайщику под обеспечение имуществом на ответственном хранении» —
# кооператив выдаёт исполнителю проекта «Благороста» беспроцентный заём под
# обеспечение результатами его работы, переданными кооперативу на ответственное
# хранение, и получает заём обратно при сдаче результата.
#
# Это не общий заём под залог паевого взноса (p.dbt.loan): обеспечение здесь —
# имущество на ответственном хранении, возврат — результатом, а не деньгами.
# С общим реестром займов процесс связан вызовами: выплаченный заём встаёт в
# реестр (debt::regloan), сдача результата гасит его там (p.cap.rid).
#
# Порядок общий с займом под паевой взнос (компонент 73): заявление и договор
# пайщика, решение совета, подпись договора председателем, выплата кассиром.
# Выданный заём встаёт в общий реестр беспроцентных займов.
# ─────────────────────────────────────────────────────────────────────────────

# ── Секция 1. Паспорт ───────────────────────────────────────────────────────
process_type: p.cap.debt
id: public_capital_debt_process
title: Заём пайщику под обеспечение имуществом на ответственном хранении
slug: debt
status: proposed
contract: capital
purpose: >
  Кооператив выдаёт исполнителю проекта «Благороста» беспроцентный заём под
  обеспечение имуществом на ответственном хранении — результатами его работы
  по проекту, переданными кооперативу на хранение. Сумма займа не больше
  того, что этим имуществом обеспечено в проекте. Пайщик подписывает
  заявление и договор займа, совет принимает решение, председатель
  подписывает договор, кассир перечисляет деньги. Заём виден в общем реестре
  займов кооператива и закрывается при сдаче результата работы — отдельного
  заявления о возврате не нужно.
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
      Пайщик подаёт заявление на беспроцентный заём с суммой и сроком возврата.
      Заявление зарегистрировано, под него занята часть суммы, обеспеченной
      долей пайщика в проекте.
  - name: capital::debtcontract
    human: Приложить договор
    actor: contributor
    role: progress
    purpose: >
      Вместе с заявлением пайщик подписывает договор займа под обеспечение
      имуществом на ответственном хранении. С договором заявление уходит
      на рассмотрение совета.
  - name: capital::debtauthcnfr
    human: Разрешить выдачу
    actor: soviet
    role: progress
    purpose: >
      Совет принимает решение о предоставлении займа. Решение сохраняется,
      договор уходит председателю на подпись.
  - name: capital::debtsigned
    human: Подписать договор
    actor: chairman
    role: progress
    purpose: >
      Председатель подписывает договор займа после решения совета. Кассир
      получает поручение на выплату с номером договора.
  - name: capital::debtpaycnfrm
    human: Подтвердить выплату
    actor: gateway_operator
    role: closer
    purpose: >
      Кассир подтверждает перечисление займа пайщику. Заём выдан и записан
      в общий реестр беспроцентных займов кооператива. Запись остаётся до
      возврата — он происходит при сдаче результата работы.
  - name: capital::debtpaydcln
    human: Отклонить выплату
    actor: gateway_operator
    role: progress
    purpose: >
      Платёж не прошёл по реквизитам. Решение совета и подписанный договор
      остаются в силе, причина отказа сохраняется, заём ждёт повтора платежа.
  - name: capital::debtretry
    human: Повторить платёж
    actor: chairman
    role: progress
    purpose: >
      После проверки реквизитов заём снова передаётся кассиру по тому же
      решению совета.
  - name: capital::declinedebt
    human: Отклонить
    actor: soviet
    role: reject
    purpose: >
      Совет отказывает в займе либо председатель отказывается подписать
      договор. Занятая под заём сумма доли пайщика освобождается, заявление
      удаляется, денежных движений нет.

# ── Секция 3. Граф состояний ────────────────────────────────────────────────
entity: capital::debt
entity_human: Заём пайщика
entity_source: app/debt_managment/create_debt/

states:
  - name: created
    human: Заявление подано
    description: >
      Заявление зарегистрировано, договор ещё не приложен. Состояние живёт
      внутри одной транзакции: заявление и договор подаются вместе.
    kind: normal
  - name: pending
    human: На рассмотрении совета
    description: >
      Заявление и договор с подписью пайщика переданы совету. Под заём занята
      часть суммы, обеспеченной долей пайщика в проекте.
    kind: normal
  - name: authorized
    human: Ожидает подписи председателя
    description: >
      Совет разрешил выдачу. Договор ждёт подписи председателя в запросах
      одобрений.
    kind: normal
  - name: paying
    human: Передан на выплату
    description: >
      Договор подписан председателем, кассир получил поручение на выплату.
    kind: normal
  - name: signed
    human: Ожидает повтора платежа
    description: >
      Кассир отклонил платёж по реквизитам. Решение совета и договор действуют,
      причина отказа сохранена; после проверки реквизитов платёж повторяется.
    kind: normal
  - name: paid
    human: Заём выплачен
    description: >
      Кассир подтвердил перечисление. Заём числится за пайщиком в общем реестре
      займов до возврата при сдаче результата работы.
    kind: final
  - name: removed
    human: Отклонено
    description: >
      В займе отказано; запись удалена, денежных движений не было.
    kind: virtual
    virtual: true

transitions:
  - from: "∅"
    to: created
    action: capital::createdebt
    actor: contributor
    guards:
      - Пайщик участвует в проекте и подписал приложение к договору об участии.
      - Доля пайщика в проекте обновлена.
      - Сумма займа вместе с прежними займами в пределах суммы, обеспеченной долей.
      - Заявление подписано ключом пайщика.

  - from: created
    to: pending
    action: capital::debtcontract
    actor: contributor
    guards:
      - Договор подписан ключом пайщика.
      - Договор подаётся той же транзакцией, что и заявление.

  - from: pending
    to: authorized
    action: capital::debtauthcnfr
    actor: soviet
    guards:
      - Совет принял решение о предоставлении займа.

  - from: authorized
    to: paying
    action: capital::debtsigned
    actor: chairman
    guards:
      - Председатель подписал тот же договор, что подписал пайщик.

  - from: paying
    to: paid
    action: capital::debtpaycnfrm
    actor: gateway_operator
    ledger_code: o.cap.lend
    operations:
      - o.cap.lend
    guards:
      - Кассир подтвердил перечисление займа пайщику.

  - from: paying
    to: signed
    action: capital::debtpaydcln
    actor: gateway_operator
    guards:
      - Кассир отклонил платёж по реквизитам.

  - from: signed
    to: paying
    action: capital::debtretry
    actor: chairman
    guards:
      - Платёж повторяется по тому же решению совета.

  - from: pending
    to: removed
    action: capital::declinedebt
    actor: soviet
    guards:
      - Совет отказал в займе.

  - from: authorized
    to: removed
    action: capital::declinedebt
    actor: chairman
    guards:
      - Председатель отказался подписать договор.

# ── Секция 4. Сценарий ──────────────────────────────────────────────────────
scenario:
  steps:
    - step: 1
      title: Заявление и договор
      actor: contributor
      action: capital::createdebt
      description: >
        Исполнитель проекта выбирает сумму в пределах обеспеченной его долей,
        срок возврата и реквизиты, подписывает заявление и договор займа.
        Оба документа уходят одной транзакцией, заявление встаёт в повестку
        совета.

    - step: 2
      title: Решение совета
      actor: soviet
      action: capital::debtauthcnfr
      description: >
        Совет голосует и принимает решение о предоставлении займа. Договор
        уходит председателю на подпись.

    - step: 3
      title: Подпись договора председателем
      actor: chairman
      action: capital::debtsigned
      description: >
        Председатель подписывает договор в запросах одобрений. Кассир получает
        поручение на выплату с назначением «заём по договору № …».

    - step: 4
      title: Выплата
      actor: gateway_operator
      action: capital::debtpaycnfrm
      description: >
        Кассир перечисляет деньги и подтверждает выплату. Заём выдан и виден
        пайщику и совету в общем реестре займов. Возврат происходит при сдаче
        результата работы.

  alternatives:
    - branch: Отказ совета или председателя
      at_step: 2
      action: capital::declinedebt
      actor: soviet
      description: >
        В займе отказано. Занятая под заём сумма доли освобождается, заявление
        удаляется, денежных движений нет.
    - branch: Отказ платежа по реквизитам
      at_step: 4
      action: capital::debtpaydcln
      actor: gateway_operator
      description: >
        Кассир отклонил платёж. Решение совета и договор действуют, причина
        сохранена; после проверки реквизитов председатель повторяет платёж.

# ── Секция 5. Документы и подписи ───────────────────────────────────────────
documents:
  - action: capital::createdebt
    title: Заявление на получение беспроцентного займа под обеспечение имуществом на ответственном хранении
    registry_id: 1058
    signed_by: [contributor]
    stored_in: debts.statement

  - action: capital::debtcontract
    title: Договор о беспроцентном займе под обеспечение имуществом на ответственном хранении
    registry_id: 1052
    signed_by: [contributor]
    stored_in: debts.contract

  - action: capital::debtauthcnfr
    title: Протокол решения совета о предоставлении беспроцентного займа
    registry_id: 1051
    signed_by: [soviet]
    stored_in: debts.authorization

  - action: capital::debtsigned
    title: Договор о беспроцентном займе под обеспечение имуществом на ответственном хранении (подпись председателя)
    registry_id: 1052
    signed_by: [contributor, chairman]
    stored_in: debts.signed_contract

# ── Секция 6. Операции ──────────────────────────────────────────────────────
operations:
  - ledger_code: o.cap.lend
    human_name: Выдача пайщику беспроцентного займа
    wallet_op: ISSUE
    wallet_from: ''
    wallet_to: w.dbt.issued          # Выданные пайщикам беспроцентные займы
    debit: 58                  # Финансовые вложения
    credit: 51                 # Расчётный счёт
    amount_ref: debt.amount
    triggered_by: capital::debtpaycnfrm
    description: >
      Выдача беспроцентного займа пайщику. Деньги уходят с расчётного счёта
      кооператива и учитываются как финансовое вложение. Кошелёк выданных
      займов общий для всех видов займа и показывает, сколько пайщик должен
      кооперативу.

# Возврат займа (o.cap.repay) не описывается в этом стандарте: он происходит
# при сдаче акта приёма-передачи проекта и относится к процессу «Приём РИД»
# (p.cap.rid) — там и описан. Запись в общем реестре займов закрывается тогда же.

# ── Связи с другими процессами ──────────────────────────────────────────
# Только по межконтрактным вызовам: consumes — процесс вызывает другой,
# provides — другой процесс вызывает этот.
related:
  - process_type: p.dbt.loan
    relation: consumes
    note: >
      Выплаченный заём встаёт в общий реестр беспроцентных займов кооператива;
      там видны все займы пайщика.
  - process_type: sov.authpkg
    relation: consumes
    note: >
      Вопрос выносится в повестку совета: голосование и решение идут по
      типовому порядку решений совета, итог возвращается в процесс.
`,xf=`# ─────────────────────────────────────────────────────────────────────────────
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

`,Of=`# ─────────────────────────────────────────────────────────────────────────────
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

# ── Связи с другими процессами ──────────────────────────────────────────
# Только по межконтрактным вызовам: consumes — процесс вызывает другой,
# provides — другой процесс вызывает этот.
related:
  - process_type: sov.authpkg
    relation: consumes
    note: >
      Вопрос выносится в повестку совета: голосование и решение идут по
      типовому порядку решений совета, итог возвращается в процесс.
`,Rf=`# ─────────────────────────────────────────────────────────────────────────────
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
#   • cpp/lib/core/ledger2/operations.hpp                                 — o.cap.commit/accept/ridshr/repay/cnvshr/cnvbl
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
      - o.cap.ridshr
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
    wallet_to: w.cap.gen           # кошелёк участника по программе «Генератор»
    debit: 8                   # Вложения во внеоборотные активы
    credit: 76                 # Расчёты с разными дебиторами и кредиторами
    amount_ref: commit.delta_amount
    triggered_by: capital::approvecmmt
    description: >
      Приём одобренного мастером коммита на ответственное хранение. Результат
      передан кооперативу как объект и учитывается вложением во внеоборотные
      активы, а на его стоимость возникает обязательство кооператива перед
      участником — владельцем коммита. Паевым взносом результат становится
      позже — по заявлению участника, решению совета и акту-2 (o.cap.ridshr).

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

  - ledger_code: o.cap.ridshr
    human_name: Паевой взнос результатом интеллектуальной деятельности по программе «Благорост»
    wallet_op: NONE
    wallet_from: ''                # кошелёк переносит конвертация сегмента
    wallet_to: ''
    debit: 76                  # Расчёты с разными дебиторами и кредиторами
    credit: 80                 # Паевой фонд (складочный капитал)
    amount_ref: segment.available_for_program
    triggered_by: capital::signact2
    description: >
      Признание паевого взноса участника по принятому результату. Обязательство,
      возникшее при приёме коммита на ответственное хранение, гасится ростом
      паевого фонда на ту же сумму. Кошелёк переносится отдельным шагом —
      конвертацией сегмента.

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

# ── Связи с другими процессами ──────────────────────────────────────────
# Только по межконтрактным вызовам: consumes — процесс вызывает другой,
# provides — другой процесс вызывает этот.
related:
  - process_type: p.dbt.loan
    relation: consumes
    note: >
      При сдаче результата заём пайщика гасится, и запись о нём закрывается в
      общем реестре беспроцентных займов.
  - process_type: sov.authpkg
    relation: consumes
    note: >
      Вопрос выносится в повестку совета: голосование и решение идут по
      типовому порядку решений совета, итог возвращается в процесс.
`,Cf=`# ──────────────────────────────────────────────────────────────────
# Стандарт «Беспроцентный заём пайщику» — кооператив выдаёт пайщику
# беспроцентный заём под обеспечение его паевым взносом в целевой программе
# и получает его обратно деньгами, а при невозврате — обращает обеспечение.
#
# Контракт займов ведёт единый реестр: сюда же попадают займы, которые
# выдают другие приложения кооператива (Генерация в «Благоросте»).
# ──────────────────────────────────────────────────────────────────

# ── Секция 1. Паспорт ───────────────────────────────────────────────────────
process_type: p.dbt.loan
id: public_debt_loan_process
title: Беспроцентный заём пайщику под залог паевого взноса
slug: loan
status: proposed
contract: debt
purpose: >
  Пайщик получает от кооператива беспроцентный заём под обеспечение
  паевым взносом в целевой программе: с подписью заявления, договора займа
  и договора залога сумма обеспечения переходит на кошелёк обеспечения и в
  программе больше не участвует. Совет принимает решение, председатель
  подписывает договор займа, договор залога и акт передачи права в залог,
  пайщик подписывает акт со своей стороны, кассир выплачивает деньги. Заём
  возвращается с главного кошелька целиком или частями, обеспечение
  возвращается в программу на ту же сумму. Если срок прошёл и за пять дней
  расчёт не состоялся, обеспечение переходит кооперативу и заём закрывается.
roles:
  - member
  - soviet
  - chairman
  - gateway_operator

# ── Секция 2. Действия контракта ────────────────────────────────────────────
actions:
  - name: debt::createloan
    human: Подать заявление
    actor: Пайщик
    role: opener
    purpose: >
      Пайщик выбирает программу, паевой взнос в которой станет обеспечением,
      сумму и срок возврата, подписывает заявление и договор о беспроцентном
      займе. Кооператив проверяет, что пайщик состоит в программе по
      подписанному договору об участии и что средств в программе хватает,
      переводит сумму обеспечения на кошелёк обеспечения и передаёт заявление
      в совет.
    links:
      - process_type: sov.authpkg
        label: Решение совета
  - name: debt::loanpledge
    human: Приложить договор залога
    actor: Пайщик
    role: progress
    purpose: >
      Договор залога имущественного права с подписью пайщика идёт одной
      транзакцией с заявлением и попадает в тот же пакет документов совета.
      Без договора залога совет выдачу не разрешит.
  - name: debt::loanauth
    human: Разрешить выдачу
    actor: Совет
    role: progress
    purpose: >
      Совет принял положительное решение. Решение сохраняется в займе, договор
      с подписью пайщика поступает председателю на подпись.
  - name: debt::loandecl
    human: Отказать
    actor: Совет
    role: closer
    purpose: >
      Совет отказал. Обеспечение возвращается пайщику в программу, запись о
      займе закрывается.
  - name: debt::loanchsign
    human: Подписать договор залога и акт
    actor: Председатель
    role: progress
    purpose: >
      Председатель ставит вторую подпись под договором залога и первую под
      актом передачи права в залог. Идёт одной транзакцией с подписью договора
      займа.
  - name: debt::loansigned
    human: Подписать договор
    actor: Председатель
    role: progress
    purpose: >
      Председатель подписал договор займа. Заём ждёт подписи пайщика под актом
      передачи права в залог; до неё деньги кассиру не уходят.
  - name: debt::loanactsign
    human: Подписать акт
    actor: Пайщик
    role: progress
    purpose: >
      Пайщик подписал акт передачи права в залог. Сумма займа начислена
      пайщику к выдаче, платёж передан кассиру с назначением «заём по
      договору № …».
  - name: debt::loansgndecl
    human: Отказать в подписи
    actor: Председатель
    role: closer
    purpose: >
      Председатель отказался подписывать договор. Обеспечение возвращается
      пайщику в программу, запись о займе закрывается.
  - name: debt::loanpaid
    human: Подтвердить выплату
    actor: Кассир
    role: progress
    purpose: >
      Кассир подтвердил перечисление денег пайщику. Заём выдан, идёт срок
      возврата, общий долг пайщика увеличен на сумму займа.
  - name: debt::loanpaydecl
    human: Отклонить платёж
    actor: Кассир
    role: progress
    purpose: >
      Платёж не прошёл по реквизитам. Решение совета и подпись председателя
      остаются в силе, причина сохраняется, заём ждёт повторной отправки.
  - name: debt::retrypay
    human: Повторить платёж
    actor: Кооператив
    role: progress
    purpose: >
      После отказа по реквизитам платёж отправляется кассиру повторно тем же
      решением — новое заседание и новая подпись не нужны.
  - name: debt::cancelloan
    human: Отменить выдачу
    actor: Кооператив
    role: closer
    purpose: >
      Выдача отменяется до выплаты: обеспечение возвращается в программу,
      начисление к выдаче снимается, запись закрывается. Платёж, уже
      переданный кассиру, отменяет кассир.
  - name: debt::repayloan
    human: Вернуть заём
    actor: Пайщик
    role: progress
    purpose: >
      Пайщик возвращает заём с главного кошелька по заявлению — досрочно,
      целиком или частью. Остаток уменьшается, обеспечение на ту же сумму
      возвращается в программу. При нулевом остатке заём закрыт.
  - name: debt::extendloan
    human: Продлить срок
    actor: Пайщик
    role: progress
    purpose: >
      Пайщик подаёт заявление о новом сроке возврата. Срок меняется после
      подтверждения председателем.
  - name: debt::loanextok
    human: Подтвердить продление
    actor: Председатель
    role: progress
    purpose: >
      Председатель подтвердил новый срок. Заём в просрочке возвращается в
      выданные.
  - name: debt::loanextdecl
    human: Отказать в продлении
    actor: Председатель
    role: progress
    purpose: >
      Председатель отказал в продлении, срок остаётся прежним.
  - name: debt::sweep
    human: Сверить сроки
    actor: Кооператив
    role: progress
    purpose: >
      Ежедневная сверка. Выданный заём с прошедшим сроком переходит в
      просрочку, пайщик получает уведомление. Заём, пробывший в просрочке пять
      дней, закрывается: обеспечение переходит кооперативу. За один вызов
      обрабатывается не больше 25 займов.
  - name: debt::regloan
    human: Зарегистрировать заём приложения
    actor: Приложение кооператива
    role: opener
    purpose: >
      Приложение, которое выдало заём своими средствами (Генерация в
      «Благоросте»), записывает его в общий реестр выданным: пайщик, сумма,
      срок, источник. Обеспечение остаётся у приложения.
  - name: debt::settleloan
    human: Погасить заём приложения
    actor: Приложение кооператива
    role: progress
    purpose: >
      Приложение сообщило о погашении своего займа на сумму. Остаток
      уменьшается, при нуле запись закрывается.
  - name: debt::wroffloan
    human: Закрыть заём приложения
    actor: Приложение кооператива
    role: closer
    purpose: >
      Приложение обратило своё обеспечение и закрыло заём без денег. В реестре
      заём закрывается, общий долг пайщика уменьшается на остаток.

# ── Секция 3. Граф состояний ────────────────────────────────────────────────
entity: debt::debt
entity_human: Заём

states:
  - name: created
    human: Заявление подано
    description: >
      Заявление, договор займа и договор залога подписаны пайщиком,
      обеспечение переведено на кошелёк обеспечения и в программе не
      участвует. Заявление на рассмотрении совета.
    kind: normal
  - name: authorized
    human: Разрешён советом
    description: >
      Совет разрешил выдачу. Договор займа, договор залога и акт ждут подписи
      председателя.
    kind: normal
  - name: signed
    human: Ожидает подписи акта
    description: >
      Председатель подписал договор займа, договор залога и акт передачи права
      в залог. Акт ждёт подписи пайщика.
    kind: normal
  - name: paying
    human: Передан на выплату
    description: >
      Акт подписан обеими сторонами, сумма начислена к выдаче, платёж у
      кассира.
    kind: normal
  - name: paydeclined
    human: Платёж не прошёл
    description: >
      Кассир отклонил платёж по реквизитам. Решение и подписи в силе, заём
      ждёт повторной отправки платежа или отмены.
    kind: normal
  - name: issued
    human: Выдан
    description: >
      Деньги у пайщика, идёт срок возврата. Заём возвращается с главного
      кошелька целиком или частями, срок можно продлить.
    kind: normal
  - name: overdue
    human: Просрочен
    description: >
      Срок возврата прошёл. Пять дней на расчёт; затем обеспечение переходит
      кооперативу и заём закрывается.
    kind: normal
  - name: settled
    human: Возвращён
    description: >
      Остаток долга нулевой, обеспечение возвращено в программу. Запись о
      займе удалена, история — в выписке.
    kind: final
  - name: writeoff
    human: Закрыт обеспечением
    description: >
      Обеспечение перешло кооперативу, заём закрыт. Запись удалена, история —
      в выписке.
    kind: final
  - name: declined
    human: Отклонён
    description: >
      Выдача не состоялась: совет или председатель отказали либо кооператив
      отменил выдачу. Обеспечение возвращено пайщику в программу.
    kind: virtual
    virtual: true

transitions:
  - from: "∅"
    to: created
    action: debt::createloan
    actor: Пайщик
    guards:
      - Обеспечение из реестра обеспечения.
      - Пайщик состоит в программе по подписанному договору об участии.
      - Средств пайщика в программе хватает на сумму займа.
      - Срок возврата в будущем.
  - from: created
    to: created
    action: debt::loanpledge
    actor: Пайщик
    guards:
      - Договор залога подписан тем же пайщиком и ещё не приложен.
  - from: created
    to: authorized
    action: debt::loanauth
    actor: Совет
    guards:
      - К заявлению приложен договор залога.
  - from: created
    to: declined
    action: debt::loandecl
    actor: Совет
  - from: authorized
    to: authorized
    action: debt::loanchsign
    actor: Председатель
    guards:
      - Подписан тот же договор залога, что подписал пайщик.
      - Акт подписан председателем совета.
  - from: authorized
    to: signed
    action: debt::loansigned
    actor: Председатель
    guards:
      - Подписан тот же договор, что подписал пайщик.
      - Договор залога и акт уже подписаны председателем.
  - from: signed
    to: paying
    action: debt::loanactsign
    actor: Пайщик
    guards:
      - Подписан тот же акт, что подписал председатель.
  - from: authorized
    to: declined
    action: debt::loansgndecl
    actor: Председатель
  - from: paying
    to: issued
    action: debt::loanpaid
    actor: Кассир
  - from: paying
    to: paydeclined
    action: debt::loanpaydecl
    actor: Кассир
  - from: paydeclined
    to: paying
    action: debt::retrypay
    actor: Кооператив
  - from: created
    to: declined
    action: debt::cancelloan
    actor: Кооператив
  - from: authorized
    to: declined
    action: debt::cancelloan
    actor: Кооператив
  - from: signed
    to: declined
    action: debt::cancelloan
    actor: Кооператив
  - from: paydeclined
    to: declined
    action: debt::cancelloan
    actor: Кооператив
  - from: issued
    to: issued
    action: debt::repayloan
    actor: Пайщик
    guards:
      - Сумма не больше остатка займа и свободного на главном кошельке.
  - from: issued
    to: settled
    action: debt::repayloan
    actor: Пайщик
    guards:
      - Возвращён весь остаток.
  - from: overdue
    to: settled
    action: debt::repayloan
    actor: Пайщик
  - from: issued
    to: overdue
    action: debt::sweep
    actor: Кооператив
    guards:
      - Срок возврата прошёл.
  - from: overdue
    to: issued
    action: debt::loanextok
    actor: Председатель
  - from: overdue
    to: writeoff
    action: debt::sweep
    actor: Кооператив
    guards:
      - В просрочке пять дней и больше.
  - from: "∅"
    to: issued
    action: debt::regloan
    actor: Приложение кооператива
  - from: issued
    to: settled
    action: debt::settleloan
    actor: Приложение кооператива
  - from: issued
    to: writeoff
    action: debt::wroffloan
    actor: Приложение кооператива

# ── Сценарий ────────────────────────────────────────────────────────────────
# Основной путь — заём под залог паевого взноса от заявления до возврата.
# Займы, которые выдают приложения кооператива своими средствами (Генерация в
# «Благоросте»), входят в реестр сразу выданными и закрываются приложением —
# это ответвления первого и последнего шагов.
scenario:
  steps:
    - step: 1
      title: Заявление и договор займа
      actor: Пайщик
      action: debt::createloan
      description: >
        Пайщик выбирает программу, паевой взнос в которой станет залогом,
        сумму и срок возврата, подписывает заявление и договор о
        беспроцентном займе. Сумма залога уходит с паевого взноса программы на
        кошелёк залога и в программе больше не участвует. Вопрос ставится в
        повестку совета.
      pre:
        - Пайщик состоит в программе по подписанному договору.
        - Паевого взноса в программе хватает на сумму займа.
      post:
        - Заявление подано, залог выделен.

    - step: 2
      title: Договор залога
      actor: Пайщик
      action: debt::loanpledge
      description: >
        Той же транзакцией пайщик прикладывает договор залога имущественного
        права со своей подписью. Без него совет выдачу не разрешит.
      post:
        - Договор залога в пакете документов совета.

    - step: 3
      title: Решение совета
      actor: Совет
      action: debt::loanauth
      description: >
        Совет разрешает выдачу. Решение сохраняется в займе, договор с подписью
        пайщика поступает председателю на подпись.
      post:
        - Заём разрешён советом.

    - step: 4
      title: Подпись договора залога и акта председателем
      actor: Председатель
      action: debt::loanchsign
      description: >
        Председатель ставит вторую подпись под договором залога и первую под
        актом передачи права в залог.

    - step: 5
      title: Подпись договора займа председателем
      actor: Председатель
      action: debt::loansigned
      description: >
        Той же транзакцией председатель подписывает договор займа. Заём ждёт
        подписи пайщика под актом передачи права в залог.
      post:
        - Договор займа подписан обеими сторонами.

    - step: 6
      title: Подпись акта пайщиком
      actor: Пайщик
      action: debt::loanactsign
      description: >
        Пайщик подписывает акт передачи права в залог. Сумма займа начисляется
        ему к выдаче, платёж уходит кассиру.
      post:
        - Платёж передан кассиру.

    - step: 7
      title: Выплата
      actor: Кассир
      action: debt::loanpaid
      description: >
        Кассир подтверждает перечисление денег пайщику. Заём выдан, идёт срок
        возврата, общий долг пайщика вырос на сумму займа.
      post:
        - Заём выдан.

    - step: 8
      title: Возврат займа
      actor: Пайщик
      action: debt::repayloan
      description: >
        Пайщик возвращает заём с главного кошелька по заявлению — досрочно,
        целиком или частями. На каждую возвращённую сумму залог возвращается
        в программу. При нулевом остатке заём закрыт.
      post:
        - Заём возвращён, залог вернулся в программу.

  alternatives:
    - branch: Заём приложения регистрируется в реестре
      at_step: 1
      action: debt::regloan
      actor: Приложение кооператива
      description: >
        Приложение, которое выдало заём своими средствами (Генерация в
        «Благоросте»), записывает его в реестр сразу выданным. Залог остаётся
        у приложения.

    - branch: Совет отказал
      at_step: 3
      action: debt::loandecl
      actor: Совет
      description: >
        Совет отказал в выдаче. Залог возвращается в программу, заём закрыт.

    - branch: Председатель отказал в подписи
      at_step: 5
      action: debt::loansgndecl
      actor: Председатель
      description: >
        Председатель отказался подписывать договор. Залог возвращается в
        программу, заём закрыт.

    - branch: Платёж не прошёл
      at_step: 7
      action: debt::loanpaydecl
      actor: Кассир
      description: >
        Платёж не прошёл по реквизитам. Решение совета и подписи остаются в
        силе, заём ждёт повторной отправки.

    - branch: Повторная отправка платежа
      at_step: 7
      action: debt::retrypay
      actor: Кооператив
      description: >
        Платёж отправляется кассиру повторно тем же решением — новое заседание
        и новая подпись не нужны.

    - branch: Отмена выдачи до выплаты
      at_step: 7
      action: debt::cancelloan
      actor: Кооператив
      description: >
        Выдача отменяется до выплаты: залог возвращается в программу,
        начисление к выдаче снимается, заём закрыт.

    - branch: Продление срока
      at_step: 8
      action: debt::extendloan
      actor: Пайщик
      description: >
        Пайщик подаёт заявление о новом сроке возврата. Срок меняется после
        подтверждения председателем.

    - branch: Председатель подтвердил продление
      at_step: 8
      action: debt::loanextok
      actor: Председатель
      description: >
        Новый срок подтверждён. Заём в просрочке возвращается в выданные.

    - branch: Председатель отказал в продлении
      at_step: 8
      action: debt::loanextdecl
      actor: Председатель
      description: >
        Срок остаётся прежним.

    - branch: Просрочка и обращение залога
      at_step: 8
      action: debt::sweep
      actor: Кооператив
      description: >
        Ежедневная сверка переводит заём с прошедшим сроком в просрочку и
        уведомляет пайщика. Через пять дней просрочки залог переходит
        кооперативу, заём закрывается.

    - branch: Заём приложения погашен
      at_step: 8
      action: debt::settleloan
      actor: Приложение кооператива
      description: >
        Приложение сообщает о погашении своего займа — в «Благоросте» это
        сдача результата. Остаток уменьшается, при нуле заём закрыт.

    - branch: Заём приложения закрыт его залогом
      at_step: 8
      action: debt::wroffloan
      actor: Приложение кооператива
      description: >
        Приложение обратило свой залог и закрыло заём без денег. Общий долг
        пайщика уменьшается на остаток.

# ── Секция 4. Документы ─────────────────────────────────────────────────────
documents:
  - action: debt::createloan
    title: Заявление на получение займа
    registry_id: 1050
    signed_by: [ Пайщик ]
    stored_in: debts.statement
  - action: debt::createloan
    title: Договор о беспроцентном займе под обеспечение паевым взносом
    registry_id: 1053
    signed_by: [ Пайщик ]
    stored_in: debts.contract
    note: Уходит в совет в одном пакете с заявлением, совет видит оба документа.
  - action: debt::loanpledge
    title: Договор залога имущественного права
    registry_id: 1056
    signed_by: [ Пайщик ]
    stored_in: debts.pledge_contract
    note: Той же транзакцией, что заявление; в пакете совета вместе с ним.
  - action: debt::loanauth
    title: Решение совета о предоставлении займа
    registry_id: 1051
    signed_by: [ Совет ]
    stored_in: debts.decision
  - action: debt::loansigned
    title: Договор о беспроцентном займе под обеспечение паевым взносом
    registry_id: 1053
    signed_by: [ Пайщик, Председатель ]
    stored_in: debts.signed_contract
    note: Тот же договор, что подписал пайщик, со второй подписью председателя.
  - action: debt::loanchsign
    title: Договор залога имущественного права
    registry_id: 1056
    signed_by: [ Пайщик, Председатель ]
    stored_in: debts.signed_pledge_contract
  - action: debt::loanchsign
    title: Акт приёма-передачи имущественного права в залог
    registry_id: 1057
    signed_by: [ Председатель ]
    stored_in: debts.act
    note: Первая подпись; акт с двумя подписями кладёт loanactsign.
  - action: debt::loanactsign
    title: Акт приёма-передачи имущественного права в залог
    registry_id: 1057
    signed_by: [ Председатель, Пайщик ]
    stored_in: debts.act
  - action: debt::repayloan
    title: Заявление о возврате беспроцентного займа
    registry_id: 1054
    signed_by: [ Пайщик ]
    stored_in: null
    note: Документ остаётся в истории действия, в записи займа не хранится.
  - action: debt::extendloan
    title: Заявление о продлении срока возврата беспроцентного займа
    registry_id: 1055
    signed_by: [ Пайщик ]
    stored_in: debts.extension_statement
  - action: debt::loanextok
    title: Заявление о продлении срока возврата беспроцентного займа
    registry_id: 1055
    signed_by: [ Пайщик, Председатель ]
    stored_in: debts.extension_statement
  - action: debt::regloan
    title: Заявление на получение займа под обеспечение имуществом на ответственном хранении
    registry_id: 1058
    signed_by: [ Пайщик ]
    stored_in: debts.statement
    note: Передаёт приложение-источник; у Генерации обеспечение — имущество на ответственном хранении.
  - action: debt::regloan
    title: Договор о беспроцентном займе под обеспечение имуществом на ответственном хранении
    registry_id: 1052
    signed_by: [ Пайщик, Председатель ]
    stored_in: debts.contract

# ── Секция 5. Операции (Ledger2) ────────────────────────────────────────────
operations:
  - ledger_code: o.cap.pledge
    human_name: Обеспечение займа паевым взносом
    wallet_op: TRANSFER
    debit: null
    credit: null
    wallet_from: w.cap.blago
    wallet_to: w.cap.pledge
    l3:
      - user_wallet: w.cap.blago
        user_ref: debt.username
        available_delta: -debt.amount
      - user_wallet: w.cap.pledge
        user_ref: debt.username
        available_delta: +debt.amount
    amount_ref: debt.amount
    triggered_by: debt::createloan
    description: >
      Сумма обеспечения переходит из программы на кошелёк обеспечения
      пайщика. Паевой взнос остаётся паевым, в распределении программы эти
      средства больше не участвуют.
  - ledger_code: o.cap.unpldg
    human_name: Возврат обеспечения в программу
    wallet_op: TRANSFER
    debit: null
    credit: null
    wallet_from: w.cap.pledge
    wallet_to: w.cap.blago
    l3:
      - user_wallet: w.cap.pledge
        user_ref: debt.username
        available_delta: -amount
      - user_wallet: w.cap.blago
        user_ref: debt.username
        available_delta: +amount
    amount_ref: amount
    triggered_by: debt::repayloan
    description: >
      Обеспечение возвращается пайщику в программу — на сумму возврата или
      целиком при отказе и отмене выдачи.
  - ledger_code: o.dbt.accrue
    human_name: Начисление займа к выдаче
    wallet_op: ISSUE
    debit: 58
    credit: 76
    wallet_from: null
    wallet_to: w.dbt.pend
    user_wallet: w.dbt.pend
    user_ref: debt.username
    available_delta: +debt.amount
    blocked_delta: null
    amount_ref: debt.amount
    triggered_by: debt::loansigned
    description: >
      Договор подписан обеими сторонами: у кооператива возникло финансовое
      вложение и обязательство перечислить заём пайщику.
  - ledger_code: o.dbt.lend
    human_name: Выдача займа
    wallet_op: TRANSFER
    debit: 76
    credit: 51
    wallet_from: w.dbt.pend
    wallet_to: w.dbt.issued
    l3:
      - user_wallet: w.dbt.pend
        user_ref: debt.username
        available_delta: -debt.amount
      - user_wallet: w.dbt.issued
        user_ref: debt.username
        available_delta: +debt.amount
    amount_ref: debt.amount
    triggered_by: debt::loanpaid
    description: >
      Деньги ушли пайщику с расчётного счёта, обязательство выплатить
      закрыто, заём числится выданным.
  - ledger_code: o.dbt.cancel
    human_name: Отмена выдачи
    wallet_op: BURN
    debit: 76
    credit: 58
    wallet_from: w.dbt.pend
    wallet_to: null
    user_wallet: w.dbt.pend
    user_ref: debt.username
    available_delta: -debt.amount
    blocked_delta: null
    amount_ref: debt.amount
    triggered_by: debt::cancelloan
    description: >
      Выдача отменена до выплаты: начисление к выдаче снимается обратной
      записью.
  - ledger_code: o.dbt.repay
    human_name: Возврат займа с главного кошелька
    wallet_op: BURN
    debit: 80
    credit: 58
    wallet_from: w.wal.share
    wallet_to: null
    user_wallet: w.wal.share
    user_ref: debt.username
    available_delta: -amount
    blocked_delta: null
    amount_ref: amount
    triggered_by: debt::repayloan
    description: >
      Пайщик возвращает заём своим паевым взносом с главного кошелька:
      паевой фонд уменьшается, финансовое вложение кооператива закрывается на
      сумму возврата.
  - ledger_code: o.dbt.wroff
    human_name: Закрытие выданного займа
    wallet_op: BURN
    debit: null
    credit: null
    wallet_from: w.dbt.issued
    wallet_to: null
    user_wallet: w.dbt.issued
    user_ref: debt.username
    available_delta: -amount
    blocked_delta: null
    amount_ref: amount
    triggered_by: debt::repayloan
    description: >
      Выданный заём уменьшается на сумму возврата или списания. Проводку
      делает парная операция — возврат или обращение обеспечения.
  - ledger_code: o.cap.seize
    human_name: Обращение обеспечения в пользу кооператива
    wallet_op: BURN
    debit: 80
    credit: 58
    wallet_from: w.cap.pledge
    wallet_to: null
    user_wallet: w.cap.pledge
    user_ref: debt.username
    available_delta: -debt.remaining
    blocked_delta: null
    amount_ref: debt.remaining
    triggered_by: debt::sweep
    description: >
      Срок прошёл, пять дней на расчёт истекли: обеспечение переходит
      кооперативу, паевой взнос пайщика уменьшается, заём закрыт.

# ── Связи с другими процессами ──────────────────────────────────────────
# Только по межконтрактным вызовам: consumes — процесс вызывает другой,
# provides — другой процесс вызывает этот.
related:
  - process_type: sov.authpkg
    relation: consumes
    note: >
      Вопрос выносится в повестку совета: голосование и решение идут по
      типовому порядку решений совета, итог возвращается в процесс.
  - process_type: p.cap.debt
    relation: provides
    note: >
      Ставит выплаченный заём в общий реестр займов.
  - process_type: p.cap.rid
    relation: provides
    note: >
      Сдачей результата гасит заём пайщика в общем реестре займов.
`,If=`# ─────────────────────────────────────────────────────────────────────────────
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
`,Lf=`# ─────────────────────────────────────────────────────────────────────────────
# Стандарт «Доступ к курсу» — кооперативный процесс оплаты обучения по целевой
# потребительской программе «Образование» (приложение «Образовательный мост»).
#
# Пайщик (ученик) оплачивает доступ обучающегося к курсу
# членским взносом программы. Членский взнос вносится только конвертацией
# паевого взноса: пайщик подаёт Заявление о конвертации, и сумма с его
# паевого кошелька переходит в членский кошелёк программы «Образование».
# После внесения взноса кооператив открывает подписку на курс на оплаченный
# период (месяц либо весь курс разом); следующий период оплачивается новым заявлением и
# продлевает подписку. По истечении оплаченного срока подписка закрывается.
#
# **Все суммы считает контракт.** Администратор задаёт условия курса: плановую
# ставку часа, целевой членский взнос за месяц, расписание, скидку за взнос
# разом, гарантийный срок, дату начала занятий и способ расчёта с
# преподавателем. По ним контракт сам считает взнос участника, оплаченный
# срок, удержание, резерв преподавателям и возврат. Приложение сумм не
# передаёт: оно называет период и сумму из подписанного заявления, и при
# расхождении с расчётом взнос не принимается.
#
# **Удержание взноса.** Пока идёт гарантийный срок участника, взнос удержан
# целиком: возврат по гарантии — полный. Длительность срока объявляет
# кооператив в курсе, а отсчёт у каждого участника свой: от более поздней из
# двух дат — начала занятий и дня открытия подписки. Продление срок заново не
# запускает. После срока удержанной остаётся сумма возможного возврата при
# отказе — половина остаточной стоимости подписки от полного взноса. Она
# уменьшается с каждым проведённым занятием, и удержание освобождается тем же
# ходом. Возврат обеспечивают удержание и резерв за непроведённые занятия
# вместе, поэтому удерживается только недостающая разница.
#
# **Резерв выплат преподавателям.** Во взнос каждого участника заложена оплата
# занятий по плановой ставке курса. При оплате она откладывается в резерв
# подписки и расходуется по одному занятию: проведённое занятие переносит
# оплату из резерва подписки во взнос преподавателя (процесс «Паевой взнос
# результатом»). Остаток резерва за непроведённые занятия при закрытии
# подписки возвращается на кошелёк программы.
#
# **Учёт по курсу.** Кошельки фонда и резерва общие на кооператив, поэтому по
# каждому курсу кооператив ведёт три суммы: собрано взносов учеников за вычетом
# возвратов, остаток резерва выплат преподавателям и выплачено преподавателям.
# Учёт курса открывается первым взносом и сохраняется после закрытия подписок.
# Результат преподавателя оплачивается только из резерва своего курса;
# целевой членский взнос по курсу равен собранному за вычетом резерва и
# выплаченного.
#
# **Модель кошельков:** восемь движений. Конвертация паевого в членский взнос
# (Дт 80 / Кт 86) и списание внесённого взноса на кошелёк программы — он
# переходит в распоряжение кооператива. Пока идёт гарантийный срок, взнос
# удержан; после срока оплата занятий выделяется в резерв преподавателям, а
# удержание уменьшается до суммы возможного возврата. При отмене подписки
# взнос возвращается с кошелька программы на кошелёк членских взносов
# участника и идёт на новые подписки. В паевой (Дт 86 / Кт 80) членский взнос
# программы возвращается при отмене курса по недобору, по решению совета по
# гарантийным условиям и с прекращением участия в программе. Подписка
# фиксирует, кто и до какой даты оплатил доступ, сколько по ней собрано,
# удержано и отложено преподавателям, сколько занятий оплачено и проведено.
#
# Канон формата:
#   coopenomics-docs/docs/standards/_spec/canon.md
# Источники правды в коде:
#   • cpp/edubridge/edubridge.hpp                     — actions
#   • cpp/edubridge/src/p.edu.access/                 — реализация
#   • cpp/lib/core/ledger2/operations.hpp             — OPERATION_REGISTRY
#                                                       расширение o.edu.conv,
#                                                       o.edu.fee, o.edu.lock,
#                                                       o.edu.unlock, o.edu.allot,
#                                                       o.edu.free, o.edu.refund,
#                                                       o.edu.retshr
#   • cpp/lib/core/ledger2/processes.hpp              — processes::edubridge::ACCESS
#   • cpp/lib/core/ledger2/wallets.hpp                — w.edu.member, w.edu.fund,
#                                                       w.edu.escrow, w.edu.teach
#   • cpp/lib/core/ledger2/accounts.hpp               — Паевой фонд (80),
#                                                       Целевое финансирование (86)
# ─────────────────────────────────────────────────────────────────────────────

# ── Секция 1. Паспорт ───────────────────────────────────────────────────────
process_type: p.edu.access
id: public_edubridge_access_process
title: Доступ к курсу
slug: access
status: proposed
contract: edubridge
purpose: >
  Штатный путь оплаты обучения по программе «Образование». Пайщик, чей
  ребёнок или он сам проходит курс, вносит членский взнос программы за
  оплачиваемый период — месяц либо весь курс разом. Взнос вносится конвертацией паевого
  взноса: пайщик подписывает Заявление о конвертации, и указанная сумма с
  его паевого кошелька переходит в членский кошелёк программы
  «Образование». По внесённому взносу кооператив открывает обучающемуся
  подписку на курс до конца оплаченного периода.

  Следующий период оплачивается так же — новым Заявлением о конвертации,
  после которого подписка продлевается. Когда оплаченный срок истёк и
  продления не было, кооператив закрывает подписку: доступ к курсу
  прекращается, история оплат сохраняется в реестре документов и журнале
  действий.

  Внесённый членский взнос переходит в фонд программы — в распоряжение
  кооператива, который ведёт на эти средства обучение. Паевой взнос пайщика
  при этом уменьшается ровно на сумму конвертации.

  Подписку можно отменить. До начала занятий взнос возвращается целиком;
  если кооператив не набрал группу и отменил курс — целиком и сразу в паевой
  взнос; при отказе в ходе обучения возвращается половина стоимости
  неиспользованных занятий. Возврат ложится на кошелёк программы участника и
  идёт на другие подписки. В паевой взнос членский взнос программы
  возвращается при выходе пайщика из кооператива: подписки закрываются с
  возвратом по Положению, и весь остаток кошелька программы переходит в
  паевой.
roles:
  - member          # пайщик — ученик, плательщик по курсу
  - cooperative     # кооператив (ведёт подписки по внесённым взносам)
  - council         # совет кооператива (рассматривает заявление по гарантийным условиям)

# ── Секция 2. Действия контракта (блокчейн-уровень) ─────────────────────────
# Имена actions ≤12 символов eosio::name. Документ подписывает пайщик,
# в кооперативную сеть его передаёт кооператив.
actions:
  - name: edubridge::convert
    human: Внести членский взнос конвертацией паевого
    actor: member
    role: opener
    purpose: >
      Пайщик подаёт Заявление о конвертации паевого взноса в членский взнос
      по программе «Образование» на сумму оплачиваемого периода курса.
      Сумма переходит с паевого кошелька пайщика в членский кошелёк
      программы. Заявление публикуется в реестре документов кооператива.
      Требуется достаточный остаток паевого взноса.

  - name: edubridge::setcourse
    human: Задать условия курса
    actor: cooperative
    role: progress
    purpose: >
      Администратор задаёт условия курса: плановую ставку часа, целевой
      членский взнос за месяц, расписание, скидку за взнос разом, гарантийный
      срок, дату начала занятий и способ расчёта с преподавателем — за каждого
      участника либо фиксированный за занятие. По этим условиям считаются все
      суммы процесса. Пока по курсу есть действующие подписки, денежные
      условия остаются прежними: участники вносили взнос по ним.

  - name: edubridge::chargefee
    human: Принять членский взнос за период
    actor: cooperative
    role: progress
    purpose: >
      Участник оплачивает месяц либо весь курс разом. Сумму взноса и дату, до
      которой оплачен доступ, определяют условия курса; сумма сверяется с
      подписанным заявлением, и при расхождении взнос не принимается. Взнос
      переходит в распоряжение кооператива, из него откладывается оплата
      занятий преподавателям. Пока идёт гарантийный срок участника, взнос
      удерживается целиком; после срока удерживается сумма возможного возврата
      при отказе. Повторный взнос по действующей подписке продлевает её.

  - name: edubridge::unlockfee
    human: Закрыть гарантийный срок участника
    actor: cooperative
    role: progress
    purpose: >
      Гарантийный срок участника истёк, полного возврата по гарантии уже не
      будет. Оплата занятий выделяется в резерв преподавателям, удержанной
      остаётся сумма возможного возврата при отказе, остальное становится
      свободными средствами программы. Дальше удержание уменьшается с каждым
      проведённым занятием.

  - name: edubridge::regstatement
    human: Опубликовать заявление о взносе с кошелька программы
    actor: member
    role: progress
    purpose: >
      Когда взнос за период целиком покрыт остатком кошелька программы
      участника, конвертации паевого взноса нет. Подписанное участником
      заявление публикуется в реестре документов отдельно — в той же операции,
      что открытие либо продление подписки.

  - name: edubridge::warrclaim
    human: Подать заявление об аннулировании подписки по гарантийным условиям
    actor: member
    role: progress
    purpose: >
      Пока действуют гарантийные условия подписки, участник вправе
      аннулировать её обоснованным заявлением (п. 4.4.2 Положения). Заявление
      с причиной публикуется в реестре документов и выносится на рассмотрение
      совета. Взнос участника замораживается до решения совета: если
      гарантийный срок группы истечёт за время рассмотрения, преподавателям
      он не направляется. Подписка и доступ действуют до решения совета;
      обычный отказ от подписки в это время закрыт.

  - name: edubridge::onwarrauth
    human: Удовлетворить заявление по гарантийным условиям
    actor: council
    role: closer
    purpose: >
      Совет удовлетворил заявление участника (п. 4.4.3–4.4.4 Положения):
      подписка аннулируется, весь взнос по ней возвращается на паевой кошелёк
      участника, протокол решения совета публикуется в реестре документов.
      Занятия, проведённые этому участнику, в сумму взноса преподавателя за
      гарантийный срок не входят.

  - name: edubridge::warrdecline
    human: Отказать по заявлению по гарантийным условиям
    actor: council
    role: progress
    purpose: >
      Совет отклонил заявление участника либо не принял решение в срок.
      Взнос участника перестаёт быть замороженным, подписка продолжает
      действовать, у участника сохраняется обычный отказ от подписки. Если
      гарантийный срок группы к этому времени вышел, оплата занятий,
      проведённых участнику за гарантийный срок, остаётся на кошельке
      программы и преподавателю не направляется.

  - name: edubridge::opensub
    human: Открыть подписку на курс
    actor: cooperative
    role: progress
    purpose: >
      Кооператив открывает обучающемуся подписку на курс: фиксируется
      плательщик, обучающийся и курс. Оплаченный срок появляется вместе с
      первым взносом — он принимается в той же операции.

  - name: edubridge::cancelsub
    human: Отменить подписку с возвратом взноса
    actor: cooperative
    role: closer
    purpose: >
      Подписка отменяется по просьбе пайщика либо вместе с курсом, на который
      кооператив не набрал группу. Основание и сумму возврата определяют
      условия курса: до начала занятий и при недоборе — взнос целиком, при
      отказе в ходе обучения — половина остаточной стоимости подписки, то
      есть доли всего взноса за ещё не проведённые занятия. Возврат приходит
      на кошелёк программы участника; при недоборе — сразу в его паевой
      взнос. Остаток по подписке расходится тем же ходом: резерв за
      непроведённые занятия возвращается в свободные средства программы,
      оплата проведённых занятий остаётся преподавателям. Доступ к курсу
      прекращается.

  - name: edubridge::retshare
    human: Вернуть остаток кошелька программы в паевой взнос
    actor: member
    role: closer
    purpose: >
      Весь остаток кошелька программы переходит на паевой кошелёк пайщика,
      соглашение об участии в программе аннулируется, заявление пайщика
      публикуется в реестре документов. Действие проводится, когда у пайщика
      нет действующих подписок. При выходе пайщика из кооператива остаток
      возвращает сам процесс выхода той же операцией, отдельного заявления
      по программе для этого не нужно. Пока пайщик состоит в кооперативе,
      остаток кошелька программы идёт на новые подписки.

  - name: edubridge::expiresub
    human: Закрыть подписку
    actor: cooperative
    role: closer
    purpose: >
      По истечении оплаченного срока без продления (или досрочно по решению
      кооператива) кооператив закрывает подписку — доступ к курсу
      прекращается. Возврата участнику нет. Удержанное и резерв за
      непроведённые занятия становятся свободными средствами программы,
      оплата проведённых занятий остаётся преподавателям.

# ── Секция 3. Граф состояний ────────────────────────────────────────────────
# Сущность: edubridge::edu_subscription (таблица edusubs, scope=coopname).
# Запись живёт, пока подписка активна; закрытие стирает запись, история
# оплат — в реестре документов и журнале действий.
entity: edubridge::edu_subscription
entity_human: Подписка на курс
entity_source: cpp/edubridge/src/p.edu.access/

states:
  - name: active
    human: Подписка активна
    description: >
      Членский взнос за период внесён, обучающийся имеет доступ к курсу до
      даты окончания оплаченного периода. Подписка может быть продлена
      очередным взносом.
    kind: normal

transitions:
  - from: "∅"
    to: active
    action: edubridge::opensub
    actor: cooperative
    ledger_code: p.edu.access
    operations:
      - o.edu.conv
      - o.edu.fee
      - o.edu.lock
      - o.edu.allot
    guards:
      - Условия курса заданы (edubridge::setcourse).
      - Пайщик — действующий член кооператива.
      - Пайщик подписал Заявление о конвертации на сумму периода, и сумма
        переведена с паевого в членский кошелёк программы (edubridge::convert).
      - Первый взнос принимается в той же операции (edubridge::chargefee) —
        он задаёт оплаченный срок.

  - from: active
    to: active
    action: edubridge::chargefee
    actor: cooperative
    ledger_code: p.edu.access
    operations:
      - o.edu.conv
      - o.edu.fee
      - o.edu.lock
      - o.edu.allot
    guards:
      - Сумма в подписанном заявлении равна расчёту по условиям курса.
      - На кошельке членских взносов участника достаточно средств.
      - Период — месяц либо весь курс разом; взнос за курс принимается, когда
        кооператив его разрешил и у курса есть конечная программа.
      - Пока идёт гарантийный срок участника, взнос удерживается целиком;
        после срока оплата занятий выделяется в резерв преподавателям, а
        удержание приводится к сумме возможного возврата.

  - from: active
    to: "∅"
    action: edubridge::cancelsub
    actor: cooperative
    ledger_code: p.edu.access
    operations:
      - o.edu.unlock
      - o.edu.free
      - o.edu.allot
      - o.edu.refund
      - o.edu.retshr
    guards:
      - Подписка принадлежит пайщику, по чьей просьбе она отменяется, либо
        отменяется вместе с курсом по недобору.
      - Основание и сумму возврата определяют условия курса; сумма не больше
        собранного по подписке, собранное по курсу уменьшается на неё.
      - Отмена по недобору возможна только до первого занятия.
      - По подписке завершён расчёт за занятие, по которому преподаватель уже
        отчитался.
      - Резерв и выплаты преподавателям по курсу после возврата не превышают
        собранного по курсу — средства других курсов не используются.
      - Перевод в паевой взнос (o.edu.retshr) выполняется при отмене по
        недобору и по решению совета по гарантийным условиям.

  - from: active
    to: active
    action: edubridge::unlockfee
    actor: cooperative
    ledger_code: p.edu.access
    operations:
      - o.edu.unlock
      - o.edu.allot
    guards:
      - Гарантийный срок участника истёк и ещё не закрыт.
      - Удержанной остаётся сумма возможного возврата при отказе за вычетом
        резерва за непроведённые занятия.

  - from: active
    to: "∅"
    action: edubridge::expiresub
    actor: cooperative
    ledger_code: p.edu.access
    operations:
      - o.edu.unlock
      - o.edu.free
      - o.edu.allot
    guards:
      - Оплаченный срок истёк и продления не было, либо кооператив закрывает
        подписку досрочно по своему решению.
      - По подписке завершён расчёт за занятие, по которому преподаватель уже
        отчитался.
      - Возврата участнику нет; суммы учёта курса сохраняются.

# ── Секция 4. Сценарий ──────────────────────────────────────────────────────
scenario:
  steps:
    - step: 1
      title: Внесение членского взноса за период
      actor: member
      action: edubridge::convert
      description: >
        Пайщик выбирает курс и период оплаты (месяц либо весь курс разом) и подписывает
        Заявление о конвертации паевого взноса в членский взнос по программе
        «Образование» на сумму периода. Сумма переходит с его паевого
        кошелька в членский кошелёк программы. Заявление публикуется в
        реестре документов.
      pre:
        - Пайщик — действующий член кооператива.
        - На паевом кошельке пайщика достаточно средств.
      post:
        - Членский взнос за период внесён (Дт 80 / Кт 86).
        - Взнос списан в фонд программы — в распоряжение кооператива — и
          удержан целиком.
        - Заявление о конвертации опубликовано в реестре документов.

    - step: 2
      title: Открытие подписки
      actor: cooperative
      action: edubridge::opensub
      description: >
        По внесённому взносу кооператив открывает обучающемуся подписку на
        курс и в той же операции принимает первый взнос. Обучающийся получает
        доступ к материалам курса до конца оплаченного периода.
      pre:
        - Условия курса заданы.
        - Членский взнос за период внесён.
      post:
        - Подписка активна до даты окончания оплаченного периода.

    - step: 3
      title: Продление подписки
      actor: cooperative
      action: edubridge::chargefee
      description: >
        Перед окончанием оплаченного периода пайщик вносит членский взнос за
        следующий период новым Заявлением о конвертации (шаг 1), и кооператив
        принимает его по действующей подписке — дата окончания доступа
        сдвигается вперёд. Шаг повторяется столько раз, сколько периодов
        оплачивает пайщик.
      pre:
        - Подписка активна.
        - Внесён членский взнос за следующий период.
      post:
        - Дата окончания оплаченного доступа сдвинута вперёд.

    - step: 4
      title: Закрытие подписки
      actor: cooperative
      action: edubridge::expiresub
      description: >
        Оплаченный срок истёк, нового взноса не поступило — кооператив
        закрывает подписку, доступ к курсу прекращается. История оплат
        остаётся в реестре документов и журнале действий.
      pre:
        - Оплаченный срок истёк, продления не было.
      post:
        - Подписка закрыта, доступ к курсу прекращён.

  alternatives:
    - branch: Недостаточно паевых средств
      at_step: 1
      action: edubridge::convert
      actor: member
      description: >
        Остатка паевого взноса не хватает на сумму периода — конвертация не
        проходит. Пайщик пополняет паевой взнос штатным внесением средств
        и повторяет заявление.

    - branch: Аннулирование подписки по гарантийным условиям
      at_step: 3
      action: edubridge::warrclaim
      actor: member
      description: >
        Наполнение подписки не отвечает ожиданиям участника, и для подписки
        объявлены гарантийные условия. Участник подаёт заявление с причиной и,
        при необходимости, ссылками на материалы. Совет рассматривает
        заявление: удовлетворяет — подписка аннулируется, вся списанная
        стоимость возвращается на паевой кошелёк участника; отклоняет — у
        участника остаётся обычный отказ от подписки с возвратом по Положению.

    - branch: Досрочное закрытие подписки
      at_step: 3
      action: edubridge::expiresub
      actor: cooperative
      description: >
        Кооператив закрывает подписку до окончания оплаченного срока без
        возврата участнику — например, когда расчёт по ней уже сделан иначе.
        Удержанное по подписке возвращается в фонд. Когда участнику положен
        возврат (отказ от обучения, недобор группы, выход из кооператива),
        подписка закрывается отменой с возвратом.

    - branch: Конец гарантийного срока участника
      at_step: 3
      action: edubridge::unlockfee
      actor: cooperative
      description: >
        Гарантийный срок участника вышел: прошло объявленное число дней от
        начала занятий либо, если он вписался в идущий курс, от дня открытия
        подписки. Оплата занятий выделяется в резерв преподавателям,
        удержанной остаётся сумма возможного возврата при отказе. Дальше она
        уменьшается с каждым проведённым занятием.

    - branch: Отмена подписки участником
      at_step: 3
      action: edubridge::cancelsub
      actor: cooperative
      description: >
        Пайщик отказывается от подписки. До начала занятий взнос
        возвращается целиком, в ходе обучения — половина стоимости
        неиспользованных занятий. Возврат приходит на кошелёк программы
        участника, доступ к курсу прекращается.

    - branch: Отмена курса по недобору
      at_step: 2
      action: edubridge::cancelsub
      actor: cooperative
      description: >
        Кооператив не набрал группу и отменяет курс до первого занятия. Все
        подписки на него закрываются, взносы возвращаются целиком и сразу в
        паевой взнос участников — заявления от них не требуется.

    - branch: Выход пайщика из кооператива
      at_step: 4
      action: edubridge::retshare
      actor: member
      description: >
        Возвращённые средства лежат на кошельке программы участника и идут на
        другие подписки. Когда участник выходит из кооператива, его подписки
        закрываются с возвратом по Положению (edubridge::cancelsub), весь
        остаток кошелька программы переходит в паевой взнос, соглашение о
        программе аннулируется.

# ── Секция 5. Документы и подписи ───────────────────────────────────────────
# Положение о программе и шаблон оферты принимает совет; оферту подписывает
# пайщик при вступлении в программу; Заявление о конвертации — при каждой
# оплате периода.
documents:
  - action: null
    title: Положение о ЦПП «Образование»
    registry_id: 3000
    signed_by: [council]
    stored_in: "реестр документов кооператива"
    note: "Принимается советом при открытии программы. Источник правды — components/cooptypes/src/cooperative/registry/3000.EducationProgramTemplate"

  - action: null
    title: Оферта ученика
    registry_id: 3002
    signed_by: [member]
    stored_in: "реестр документов кооператива"
    note: "Подписывается пайщиком один раз при вступлении в программу; включает согласие на передачу почты обучающегося образовательной площадке. Редакцию оферты утверждает совет. Источник правды — components/cooptypes/src/cooperative/registry/3002.EducationParentOffer"

  - action: edubridge::convert
    title: Заявление о конвертации паевого взноса в членский взнос по ЦПП «Образование»
    registry_id: 3011
    signed_by: [member]
    stored_in: "реестр документов (package = хэш подписки)"
    note: "Подписывается пайщиком при оплате каждого периода курса. Содержит сумму, название курса и период. Подписка хранит hash последнего заявления (edusubs.statement_hash). Источник правды — components/cooptypes/src/cooperative/registry/3011.EducationConvertStatement"

  - action: edubridge::warrclaim
    title: Заявление об аннулировании Подписки по Гарантийным условиям
    registry_id: 3013
    signed_by: [member]
    stored_in: "реестр документов (package = хэш подписки)"
    note: "Подписывается участником в гарантийный срок подписки. Содержит причину аннулирования и стоимость подписки."

  - action: edubridge::onwarrauth
    title: Протокол решения Совета об аннулировании Подписки по Гарантийным условиям
    registry_id: 3014
    signed_by: [council]
    stored_in: "реестр документов (package = хэш подписки)"
    note: "Формируется при удовлетворении заявления советом; публикуется вместе с возвратом стоимости подписки."

  - action: edubridge::retshare
    title: Заявление об аннулировании соглашений об участии в целевых потребительских программах
    registry_id: 190
    signed_by: [member]
    stored_in: "реестр документов (package = хэш подписки)"
    note: "Подписывается при выходе из кооператива вместе с заявлением на выход. В таблице все программы пайщика; по программе «Образование» — остаток кошелька программы и возврат по действующим подпискам на день подписания (пп. 4.2.4, 4.2.5 Положения). Источник правды — components/cooptypes/src/cooperative/registry/190.ProgramAgreementsAnnulmentStatement"

# ── Секция 6. Операции (Ledger2) ────────────────────────────────────────────
# Восемь операций: конвертация паевого в членский взнос, списание взноса в
# фонд программы, удержание до конца гарантийного срока и разблокировка,
# выделение резерва выплат преподавателям и его высвобождение,
# возврат из фонда при отмене и перевод остатка обратно в паевой. Открытие, продление и закрытие подписки сами средства не двигают.
operations:
  - ledger_code: o.edu.conv
    human_name: Конвертация паевого в членский взнос по ЦПП «Образование»
    wallet_op: TRANSFER
    # L1 — двойная запись: паевой фонд уменьшается, целевое финансирование
    # программы растёт.
    debit: 80                      # Паевой фонд
    credit: 86                     # Целевое финансирование
    # L2 — перевод между кошельками кооператива
    wallet_from: w.wal.share       # Паевой взнос пайщика
    wallet_to: w.edu.member        # Членский взнос ЦПП «Образование»
    # L3 — движение по кошелькам пайщика
    user_wallet: w.wal.share → w.edu.member
    user_ref: member
    available_delta: "-amount на w.wal.share; +amount на w.edu.member"
    blocked_delta: null
    amount_ref: convert.amount
    triggered_by: edubridge::convert
    description: >
      Конвертация паевого взноса пайщика в членский взнос программы
      «Образование» по подписанному Заявлению. Двойная запись Дт 80 / Кт 86
      — паевой фонд уменьшается, целевое финансирование программы растёт на
      ту же сумму. Паевой кошелёк пайщика уменьшается, членский кошелёк
      программы пополняется. Одна операция на одно заявление.

  - ledger_code: o.edu.fee
    human_name: Списание членского взноса в фонд программы
    wallet_op: TRANSFER
    debit: null                    # оба кошелька на счёте 86
    credit: null
    wallet_from: w.edu.member      # Членский взнос ЦПП «Образование»
    wallet_to: w.edu.fund          # Фонд ЦПП «Образование»
    user_wallet: w.edu.member
    user_ref: member
    available_delta: "-amount на w.edu.member"
    blocked_delta: null
    amount_ref: взнос по условиям курса за оплаченный период
    triggered_by: edubridge::chargefee
    description: >
      Стоимость оплаченного периода переходит с кошелька программы участника
      в фонд программы — в распоряжение кооператива. Проводки нет: обе
      стороны на счёте целевого финансирования.

  - ledger_code: o.edu.lock
    human_name: Удержание взноса до конца гарантийного срока ученика
    wallet_op: TRANSFER
    debit: null                    # оба кошелька на счёте 86
    credit: null
    wallet_from: w.edu.fund        # Фонд ЦПП «Образование» — свободные средства
    wallet_to: w.edu.escrow        # Удержано до конца гарантийного срока
    amount_ref: весь взнос, пока идёт гарантийный срок | недостающее до суммы возможного возврата после него
    triggered_by: edubridge::chargefee
    description: >
      Пока идёт гарантийный срок участника, взнос сразу после списания
      удерживается целиком и на расходы программы не идёт. После срока новый
      взнос удерживается только в части возможного возврата при отказе.

  - ledger_code: o.edu.unlock
    human_name: Разблокировка удержанного взноса
    wallet_op: TRANSFER
    debit: null                    # оба кошелька на счёте 86
    credit: null
    wallet_from: w.edu.escrow
    wallet_to: w.edu.fund
    amount_ref: удержанное сверх суммы возможного возврата | всё удержанное при закрытии подписки
    triggered_by: edubridge::unlockfee, edubridge::chargelesson, edubridge::chargefee, edubridge::cancelsub, edubridge::onwarrauth, edubridge::warrdecline, edubridge::expiresub
    description: >
      Часть удержанного, которую участник уже не может потребовать назад,
      становится свободными средствами программы: после гарантийного срока —
      всё сверх суммы возможного возврата при отказе, и далее с каждым
      проведённым занятием. При отмене и закрытии подписки удержанное
      освобождается целиком тем же ходом, и возврат участнику идёт уже из
      свободных средств.

  - ledger_code: o.edu.allot
    human_name: Резерв выплат преподавателям из членского взноса
    wallet_op: TRANSFER
    debit: null                    # оба кошелька на счёте 86
    credit: null
    wallet_from: w.edu.fund        # Фонд ЦПП «Образование» — свободные средства
    wallet_to: w.edu.teach         # Резерв выплат преподавателям
    amount_ref: оплата занятий по плановой ставке | взнос преподавателей за проведённые занятия
    triggered_by: edubridge::chargefee, edubridge::unlockfee, edubridge::cancelsub, edubridge::onwarrauth, edubridge::expiresub
    description: >
      Оплата занятий, заложенная во взнос участника, выделяется в резерв
      выплат преподавателям: сразу при взносе, если гарантийный срок истёк,
      либо когда он закрывается. При закрытии подписки тем же ходом
      выделяется оплата уже проведённых занятий. Сумма прибавляется к резерву
      курса подписки.

  - ledger_code: o.edu.free
    human_name: Высвобождение резерва выплат преподавателям в фонд
    wallet_op: TRANSFER
    debit: null                    # оба кошелька на счёте 86
    credit: null
    wallet_from: w.edu.teach
    wallet_to: w.edu.fund
    amount_ref: резерв подписки за непроведённые занятия | разница между плановой ставкой и ставкой преподавателя
    triggered_by: edubridge::cancelsub, edubridge::onwarrauth, edubridge::expiresub, edubridge::chargelesson
    description: >
      Подписка отменена либо закрыта — резерв за её непроведённые занятия
      возвращается в свободные средства программы. При расчёте занятия тем же
      ходом возвращается разница между плановой ставкой курса и ставкой
      преподавателя. Резерв курса уменьшается на ту же сумму.

  - ledger_code: o.edu.refund
    human_name: Возврат членского взноса из фонда программы
    wallet_op: TRANSFER
    debit: null                    # оба кошелька на счёте 86
    credit: null
    wallet_from: w.edu.fund
    wallet_to: w.edu.member
    user_wallet: w.edu.member
    user_ref: member
    available_delta: "+refund на w.edu.member"
    blocked_delta: null
    amount_ref: cancelsub.refund
    triggered_by: edubridge::cancelsub, edubridge::onwarrauth
    description: >
      При отмене подписки сумма возврата, посчитанная по Положению о
      программе, переходит из фонда на кошелёк программы участника.

  - ledger_code: o.edu.retshr
    human_name: Возврат членского взноса программы в паевой взнос
    wallet_op: TRANSFER
    debit: 86                      # Целевое финансирование
    credit: 80                     # Паевой фонд
    wallet_from: w.edu.member
    wallet_to: w.wal.share
    user_wallet: w.edu.member → w.wal.share
    user_ref: member
    available_delta: "-amount на w.edu.member; +amount на w.wal.share"
    blocked_delta: null
    amount_ref: cancelsub.refund | retshare.amount (весь остаток w.edu.member)
    triggered_by: edubridge::cancelsub, edubridge::onwarrauth, edubridge::retshare
    description: >
      Обратная конвертация: членский взнос программы возвращается в паевой
      взнос участника только с прекращением участия в программе. При отмене
      курса по недобору — сразу; при выходе из кооператива — весь остаток
      кошелька программы целиком.

# ── Выход пайщика из кооператива ────────────────────────────────────────────
# Выход закрывает участие в программе целиком (процесс p.reg.exit, registrator):
#   • подписки обучающихся закрываются с расчётом возврата по Положению — тем же,
#     что при отказе участника; возврат ложится на кошелёк членских взносов
#     программы (w.edu.member) и входит в сумму выхода;
#   • остаток w.edu.member возвращается на главный паевой операцией o.edu.retshr —
#     так записано в таблице политики кошельков EXIT_WALLET_POLICY (п. 4.2.5
#     Положения ЦПП делает членский взнос программы возвратным);
#   • соглашения об участии в программах 5 «Обучение» и 6 «Преподавание»
#     аннулируются в финале выхода (wallet::revokeagree) по заявлению пайщика
#     registry 190;
#   • преподавателю выход закрыт, пока он ведёт курс либо не закрыт расчёт по
#     его занятиям — причины ядро спрашивает у расширения перед подачей заявления.
#
# Отказ совета или кассы подписки не восстанавливает: членство кончается с
# заявлением о выходе, а не с возвратом денег.

# ── Связи с другими процессами ──────────────────────────────────────────
# Только по межконтрактным вызовам: consumes — процесс вызывает другой,
# provides — другой процесс вызывает этот.
related:
  - process_type: sov.authpkg
    relation: consumes
    note: >
      Вопрос выносится в повестку совета: голосование и решение идут по
      типовому порядку решений совета, итог возвращается в процесс.
`,Pf=`# ─────────────────────────────────────────────────────────────────────────────
# Стандарт «Паевой взнос преподавателя результатом интеллектуальной
# деятельности» — кооперативный процесс от приёма материалов занятия на
# ответственное хранение до приёма результата в паевой фонд по целевой
# потребительской программе «Образование».
#
# Преподаватель — пайщик кооператива, участвующий в хозяйственной
# деятельности по договору. Проведя занятие, он отчитывается материалами и
# передаёт их кооперативу на ответственное хранение: по договору имущество
# сперва лежит на хранении и становится паевым взносом после гарантийного
# срока. Срок истёк — преподаватель подаёт Заявление о паевом взносе, совет
# рассматривает его и принимает решение. При положительном решении
# преподаватель и председатель подписывают Акт приёма-передачи: результат
# принимается как нематериальный актив кооператива, а преподавателю
# зачисляется паевой взнос на его паевой кошелёк программы. В ЦПП «Цифровой
# Кошелёк» взнос переходит по Заявлению преподавателя о трансляции паевого
# взноса, и возврат идёт уже оттуда. Гарантийный случай внутри срока и отказ
# совета снимают материалы с хранения и возвращают их преподавателю.
#
# **Модель кошельков:** материалы весь гарантийный срок числятся за
# преподавателем на кошельке ответственного хранения (Дт 08 / Кт 76 —
# кооператив принял имущество и принял обязательство перед автором). Приём в
# паевой фонд закрывает обе стороны: результат встаёт на учёт нематериальных
# активов (Дт 04 / Кт 08), обязательство гасится паевым фондом (Дт 76 / Кт 80),
# и сумма переходит на паевой кошелёк программы — баланс договора участия в
# хозяйственной деятельности. По Заявлению о трансляции преподаватель
# переводит её целиком или частью на главный паевой кошелёк ЦПП «Цифровой
# Кошелёк» (без проводки — оба кошелька в паевом фонде); возврат паевого
# взноса идёт оттуда штатным механизмом платформы по заявлению о возврате.
# Возврат материалов с хранения закрывает обязательство и актив встречно
# (Дт 76 / Кт 08), паевой фонд при этом не затрагивается.
#
# Канон формата:
#   coopenomics-docs/docs/standards/_spec/canon.md
# Источники правды в коде:
#   • cpp/edubridge/edubridge.hpp                     — actions
#   • cpp/edubridge/src/p.edu.rid/                    — реализация
#   • cpp/lib/core/ledger2/operations.hpp             — OPERATION_REGISTRY
#                                                       o.edu.hold, o.edu.rid,
#                                                       o.edu.ridshr, o.edu.settle,
#                                                       o.edu.retrid, o.edu.wthshr
#   • cpp/lib/core/ledger2/processes.hpp              — processes::edubridge::RID
#   • cpp/lib/core/ledger2/wallets.hpp                — w.edu.hold, w.edu.share,
#                                                       w.wal.share, w.edu.teach
#   • cpp/lib/core/ledger2/accounts.hpp               — Нематериальные активы (04),
#                                                       Вложения во внеоборотные
#                                                       активы (08), Расчёты с
#                                                       разными дебиторами и
#                                                       кредиторами (76),
#                                                       Паевой фонд (80)
# ─────────────────────────────────────────────────────────────────────────────

# ── Секция 1. Паспорт ───────────────────────────────────────────────────────
process_type: p.edu.rid
id: public_edubridge_rid_process
title: Паевой взнос преподавателя результатом интеллектуальной деятельности
slug: rid
status: proposed
contract: edubridge
purpose: >
  Штатный путь, которым преподаватель вносит в кооператив результат своей
  работы по курсу — методику, программу, учебные материалы — как паевой
  взнос.

  Работа овеществляется материалами занятия. Проведя занятие, преподаватель
  отчитывается и подписывает Акт передачи материалов на ответственное
  хранение: кооператив принимает материалы как имущество, а преподаватель
  сохраняет за собой их стоимость на кошельке ответственного хранения.
  Гарантийный срок один на курс — он идёт от даты начала занятий и длится
  столько дней, сколько объявил кооператив. Пока он идёт, материалы лежат на
  хранении, и в совет по ним ничего не уходит; когда срок курса вышел,
  результаты преподавателя идут в совет сразу.

  Гарантийный срок истёк — преподаватель подаёт Заявление о паевом взносе
  результатом интеллектуальной деятельности. Совет рассматривает заявление и
  принимает решение, оформляемое протоколом. При положительном решении
  преподаватель и председатель подписывают Акт приёма-передачи: результат
  принимается кооперативом как нематериальный актив, а преподавателю
  зачисляется паевой взнос на его паевой кошелёк программы. Этот взнос —
  право требования. Чтобы вернуть его, преподаватель подаёт Заявление о
  трансляции паевого взноса в целевую потребительскую программу «Цифровой
  Кошелёк» — на весь остаток или его часть, — и уже оттуда возвращает взнос
  штатным заявлением о возврате паевого взноса.

  Гарантийный случай, подтверждённый внутри срока, и отказ совета снимают
  материалы с хранения: они возвращаются преподавателю, паевой взнос по ним
  не оформляется, паевой фонд кооператива остаётся нетронутым.
roles:
  - teacher         # пайщик-преподаватель, автор результата
  - council         # совет кооператива (принимает решение по заявлению)
  - chairman        # председатель кооператива (подписывает акт со стороны кооператива)

# ── Секция 2. Действия контракта (блокчейн-уровень) ─────────────────────────
# Имена actions ≤12 символов eosio::name. Документы подписывают участники,
# в кооперативную сеть их передаёт кооператив.
actions:
  - name: edubridge::openlesson
    human: Отчитаться о проведённом занятии
    actor: teacher
    role: opener
    purpose: >
      Преподаватель отчитывается об одном занятии из календаря группы: номер
      занятия в программе, дата и длительность названы календарём. Фиксируется
      его ставка на курсе на этот момент — по ней считается взнос за занятие.
      Занятие длиннее занятия курса занимает в программе несколько занятий.
      Порядка отчётов нет: занятия группы отчитываются в любой очерёдности,
      каждый номер занимается один раз.

  - name: edubridge::chargelesson
    human: Рассчитать занятие с участником
    actor: cooperative
    role: progress
    purpose: >
      Участник с оплаченным доступом на дату занятия оплачивает его из
      резерва своей подписки. На курсе с расчётом за каждого участника взнос
      преподавателя растёт с каждой подпиской; на курсе с фиксированным
      расчётом сумма занятия одна и набирается с подписок по очереди. Разница
      между плановой ставкой курса и ставкой преподавателя становится
      свободными средствами программы. Занятие проведено — возможный возврат
      участнику уменьшился, и удержанное по его подписке освобождается.
      Расчёт идёт по одной подписке за действие; число рассчитанных
      участников и сумма занятия — срез курса на дату занятия.

  - name: edubridge::closecharge
    human: Закрыть окно расчёта по занятию
    actor: cooperative
    role: progress
    purpose: >
      Все подписки группы по занятию рассчитаны. Пока окно открыто, подписки
      группы не закрываются, чтобы оплата занятия не ушла мимо преподавателя.
      Кооператив закрывает окно сразу после расчёта, тем же проходом.

  - name: edubridge::droplesson
    human: Отозвать отчёт о занятии
    actor: cooperative
    role: progress
    purpose: >
      Отчёт подан с ошибкой либо на дату занятия нет участников с оплаченным
      доступом. Пока расчёт с участниками не начат, отчёт отзывается, номер
      занятия возвращается группе, и занятие можно отчитать заново.

  - name: edubridge::holdrid
    human: Передать материалы занятия на ответственное хранение
    actor: teacher
    role: progress
    purpose: >
      Расчёт с участниками завершён. Преподаватель подписывает Акт передачи
      материалов на ответственное хранение на сумму, которая получилась по
      расчёту занятия. Кооператив принимает материалы, и на срок гарантии
      курса их стоимость числится за преподавателем на кошельке
      ответственного хранения. За материалами сохраняется курс занятия: из
      резерва выплат преподавателям этого курса результат оплачивается при
      приёме.

  - name: edubridge::submitrid
    human: Подать заявление о паевом взносе результатом работы
    actor: teacher
    role: transit
    purpose: >
      Гарантийный срок по материалам истёк, и преподаватель просит принять их
      в паевой фонд: подаёт Заявление о паевом взносе результатом
      интеллектуальной деятельности. Заявление публикуется в реестре
      документов и поступает на рассмотрение совета. Движений по средствам
      нет, материалы остаются на ответственном хранении.

  - name: edubridge::onridauth
    human: Совет принял решение по заявлению
    actor: council
    role: transit
    purpose: >
      Совет рассмотрел заявление преподавателя и подписал Протокол о приёме
      паевого взноса. Контракт совета сообщает об этом контракту программы;
      движений по средствам нет — паевой фонд признаётся по Акту
      приёма-передачи, который подписывают преподаватель и председатель.

  - name: edubridge::onriddecl
    human: Совет не принял решение по заявлению
    actor: council
    role: transit
    purpose: >
      Совет отказал в приёме либо снял вопрос с повестки по сроку.
      Отрицательного протокола у совета не бывает, движений по средствам нет:
      материалы остаются на ответственном хранении, снять их — дело
      председателя (edubridge::recallrid).

  - name: edubridge::signridact
    human: Подписать акт приёма-передачи
    actor: teacher
    role: transit
    purpose: >
      После решения совета преподаватель подписывает Акт приёма-передачи
      результата — первая подпись. Протокол совета публикуется в реестре
      документов, акт уходит на вторую подпись председателю совета через
      запросы одобрений, как договор участия. Движений по средствам нет.

  - name: edubridge::apprvridact
    human: Подписать акт председателем
    actor: chairman
    role: closer
    purpose: >
      Председатель совета подписал акт вторым в запросах одобрений, и контракт
      совета сообщает об этом контракту программы: результат принимается в
      паевой фонд так же, как по действию «Принять результат в паевой фонд».

  - name: edubridge::dclridact
    human: Отказать в подписи акта
    actor: chairman
    role: transit
    purpose: >
      Председатель отказал в подписи акта в запросах одобрений. Движений по
      средствам нет: материалы остаются на ответственном хранении, заявление
      закрывается протоколом совета либо снятием с хранения.

  - name: edubridge::acceptrid
    human: Принять результат в паевой фонд
    actor: chairman
    role: closer
    purpose: >
      По положительному решению совета (Протокол) и подписанному обеими
      сторонами Акту приёма-передачи результат принимается кооперативом как
      нематериальный актив, ответственное хранение закрывается, а
      преподавателю зачисляется паевой взнос на сумму оценки — на его паевой
      кошелёк программы. Протокол и акт публикуются в реестре документов.
      Стоимость результата списывается из резерва выплат преподавателям его
      курса: резерв курса уменьшается, выплаченное по курсу растёт. Когда
      резерва курса меньше стоимости результата, приём отклоняется — средства
      других курсов и свободные средства программы на него не идут.

  - name: edubridge::declinerid
    human: Отказать в приёме результата
    actor: chairman
    role: reject
    purpose: >
      Совет принял решение по заявлению, но приём не состоялся — акт
      приёма-передачи не подписан. По Протоколу совета заявление закрывается,
      материалы снимаются с ответственного хранения и возвращаются
      преподавателю. Протокол публикуется в реестре документов. Паевой фонд
      не затрагивается; преподаватель может доработать результат и передать
      материалы заново. Когда решения совета нет вовсе, материалы снимаются
      с хранения без протокола (edubridge::recallrid).

  - name: edubridge::recallrid
    human: Снять материалы с хранения без приёма
    actor: chairman
    role: reject
    purpose: >
      Два основания. Гарантийный случай, подтверждённый внутри срока,
      прекращает приём до совета. И заявление, по которому совет решения о
      приёме не принял — оно не набрало голосов либо истекло: отрицательного
      протокола у совета не бывает, поэтому отказ оформляется снятием с
      хранения с указанием основания. Материалы возвращаются преподавателю,
      паевой взнос не оформляется.

  - name: edubridge::wthshare
    human: Транслировать паевой взнос в «Цифровой Кошелёк»
    actor: teacher
    role: transit
    purpose: >
      Преподаватель подписывает Заявление о трансляции паевого взноса из
      целевой потребительской программы «Образование» в целевую
      потребительскую программу «Цифровой Кошелёк» — на весь остаток паевого
      кошелька программы или его часть. Сумма переходит на главный паевой
      кошелёк, заявление публикуется в реестре документов. Решения совета
      для этого не требуется. Возврат паевого взноса идёт уже с главного
      паевого кошелька штатным заявлением о возврате.

# ── Секция 3. Граф состояний ────────────────────────────────────────────────
# Сущность: edubridge::edu_rid (таблица edurids, scope=coopname). Запись живёт
# от приёма материалов на хранение до решения совета; приём, отказ и
# рекламация завершают жизненный цикл — запись удаляется, история остаётся в
# реестре документов и журнале действий. Трансляция паевого взноса в
# «Цифровой Кошелёк» записи не заводит: заявление исполняется сразу.
entity: edubridge::edu_rid
entity_human: Материалы занятия на ответственном хранении
entity_source: cpp/edubridge/src/p.edu.rid/

states:
  - name: held
    human: На ответственном хранении
    description: >
      Материалы приняты кооперативом, идёт гарантийный срок курса. Их
      стоимость числится за преподавателем на кошельке ответственного
      хранения; в совет по ним ничего не уходит.
    kind: normal

  - name: submitted
    human: На рассмотрении совета
    description: >
      Гарантийный срок истёк, заявление подано и опубликовано. Материалы
      остаются на ответственном хранении до решения совета по типовому
      процессу решения совета.
    kind: normal

transitions:
  - from: "∅"
    to: held
    action: edubridge::holdrid
    actor: teacher
    ledger_code: p.edu.rid
    operations:
      - o.edu.hold
    guards:
      - Преподаватель — действующий член кооператива с договором участия в
        хозяйственной деятельности.
      - Преподаватель отчитался о занятии (edubridge::openlesson), по нему
        рассчитан хотя бы один участник с оплаченным доступом
        (edubridge::chargelesson), окно расчёта закрыто (edubridge::closecharge).
      - Акт передачи материалов подписан преподавателем; сумма берётся из
        расчёта занятия.
      - Дата окончания гарантийного срока задана курсом — дата начала занятий
        плюс объявленный срок; она может быть уже истёкшей, когда срок курса
        вышел либо гарантия не объявлена.
      - Курс занятия сохраняется за материалами до решения по ним.

  - from: held
    to: submitted
    action: edubridge::submitrid
    actor: teacher
    guards:
      - Гарантийный срок по материалам истёк.
      - Заявление подписано преподавателем; задание, вид и оценка результата
        совпадают с принятыми на хранение.
      - Заявление по этим материалам подаётся впервые.

  - from: submitted
    to: "∅"
    action: edubridge::acceptrid
    actor: chairman
    ledger_code: p.edu.rid
    operations:
      - o.edu.rid
      - o.edu.ridshr
      - o.edu.settle
    guards:
      - В резерве выплат преподавателям по курсу результата достаточно средств
        на его стоимость; при нехватке приём отклоняется, средства других
        курсов и свободные средства программы на результат не идут.
      - Резерв курса уменьшен на стоимость результата, выплаченное
        преподавателям курса увеличено на неё же.
      - Совет принял положительное решение, Протокол подписан.
      - Акт приёма-передачи подписан преподавателем и председателем.
      - Результат принят как нематериальный актив, ответственное хранение
        закрыто, преподавателю зачислен паевой взнос на сумму оценки на
        паевой кошелёк программы.

  - from: "∅"
    to: "∅"
    action: edubridge::wthshare
    actor: teacher
    ledger_code: p.edu.rid
    operations:
      - o.edu.wthshr
    guards:
      - Заявление о трансляции паевого взноса подписано преподавателем.
      - Преподаватель — действующий член кооператива.
      - Сумма больше нуля и не превышает остаток паевого кошелька программы.

  - from: submitted
    to: "∅"
    action: edubridge::declinerid
    actor: chairman
    ledger_code: p.edu.rid
    operations:
      - o.edu.retrid
    guards:
      - Заявление по материалам подано; Протокол совета подписан.
      - Материалы сняты с ответственного хранения и возвращены преподавателю.

  - from: held
    to: "∅"
    action: edubridge::recallrid
    actor: chairman
    ledger_code: p.edu.rid
    operations:
      - o.edu.retrid
    guards:
      - Гарантийный случай подтверждён внутри срока, основание указано.
      - Материалы сняты с ответственного хранения и возвращены преподавателю.

  - from: submitted
    to: "∅"
    action: edubridge::recallrid
    actor: chairman
    ledger_code: p.edu.rid
    operations:
      - o.edu.retrid
    guards:
      - Совет решения о приёме не принял — заявление не набрало голосов либо
        истекло; основание указано.
      - Материалы сняты с ответственного хранения и возвращены преподавателю.

# ── Секция 4. Сценарий ──────────────────────────────────────────────────────
scenario:
  steps:
    - step: 1
      title: Отчёт по занятию и передача материалов на хранение
      actor: teacher
      action: edubridge::holdrid
      description: >
        Проведя занятие, преподаватель отчитывается материалами — записями,
        конспектами, заданиями — и подписывает Акт передачи материалов на
        ответственное хранение. Оценку считает контракт: время занятия по
        ставке преподавателя на курсе — за каждого участника с оплаченным
        доступом на дату занятия либо фиксированно, по условиям курса.
        Кооператив принимает материалы как имущество: их стоимость числится
        за преподавателем на кошельке ответственного хранения до конца
        гарантийного срока курса.
      pre:
        - Преподаватель — действующий член кооператива, участвующий в
          хозяйственной деятельности по договору.
        - Занятие есть в плане курса, отчёт по нему подаётся впервые.
      post:
        - Материалы приняты на ответственное хранение (Дт 08 / Кт 76).
        - Акт хранения опубликован в реестре документов.

    - step: 2
      title: Подача заявления по истечении гарантийного срока
      actor: teacher
      action: edubridge::submitrid
      description: >
        Гарантийный срок по материалам истёк, и преподаватель просит принять
        их в паевой фонд: подписанное заявление публикуется в реестре
        документов и поступает на рассмотрение совета. Материалы всё это
        время остаются на ответственном хранении.
      pre:
        - Гарантийный срок по материалам истёк.
        - Рекламаций по занятию нет.
      post:
        - Заявление опубликовано в реестре документов.
        - Заявление ожидает решения совета.

    - step: 3
      title: Рассмотрение заявления советом
      actor: council
      action: null
      description: >
        Совет рассматривает заявление по типовому процессу решения совета
        и принимает решение, оформляемое Протоколом. При положительном
        решении стороны переходят к подписанию акта; если решение не
        принято — материалы снимаются с хранения (см. альтернативу).
      pre:
        - Заявление ожидает решения совета.
      post:
        - Протокол совета подписан.

    - step: 4
      title: Подписание акта и приём результата в паевой фонд
      actor: chairman
      action: edubridge::acceptrid
      description: >
        Преподаватель и председатель подписывают Акт приёма-передачи
        паевого взноса. Результат принимается кооперативом как
        нематериальный актив, ответственное хранение закрывается, а
        преподавателю зачисляется паевой взнос на сумму оценки на его
        паевой кошелёк программы. Протокол и акт публикуются в реестре
        документов. Стоимость результата списывается из резерва выплат
        преподавателям его курса.
      pre:
        - Совет принял положительное решение, Протокол подписан.
        - Акт подписан обеими сторонами.
        - В резерве выплат преподавателям по курсу результата достаточно
          средств на его стоимость.
      post:
        - Результат учтён как нематериальный актив кооператива (Дт 04 / Кт 08).
        - Обязательство перед преподавателем погашено паевым фондом
          (Дт 76 / Кт 80), взнос зачислен на паевой кошелёк программы.

    - step: 5
      title: Трансляция паевого взноса в «Цифровой Кошелёк»
      actor: teacher
      action: edubridge::wthshare
      description: >
        Преподаватель подписывает Заявление о трансляции паевого взноса из
        целевой потребительской программы «Образование» в целевую
        потребительскую программу «Цифровой Кошелёк» и указывает сумму —
        весь остаток паевого кошелька программы или его часть. Сумма
        переходит на главный паевой кошелёк, заявление публикуется в реестре
        документов. Проводки нет: оба кошелька учитываются в паевом фонде.
      pre:
        - На паевом кошельке программы есть остаток.
      post:
        - Сумма заявления зачислена на главный паевой кошелёк преподавателя.
        - Заявление опубликовано в реестре документов.

  alternatives:
    - branch: Гарантийный случай внутри срока
      at_step: 1
      action: edubridge::recallrid
      actor: chairman
      description: >
        Рекламация по занятию подтверждена, пока идёт гарантийный срок.
        Материалы снимаются с ответственного хранения и возвращаются
        преподавателю (Дт 76 / Кт 08), заявление в совет по ним не уходит,
        паевой взнос не оформляется. Паевой фонд кооператива не
        затрагивается.

    - branch: Совет не принял решение о приёме
      at_step: 3
      action: edubridge::recallrid
      actor: chairman
      description: >
        Заявление не набрало голосов совета либо истекло — например, оценка
        результата не обоснована или результат не соответствует заданию.
        Протокола в этом случае нет. Председатель снимает материалы с
        ответственного хранения с указанием основания, они возвращаются
        преподавателю (Дт 76 / Кт 08). Преподаватель может доработать
        результат и передать материалы заново.

    - branch: Приём не состоялся после решения совета
      at_step: 4
      action: edubridge::declinerid
      actor: chairman
      description: >
        Решение совета есть, но акт приёма-передачи не подписан — например,
        преподаватель отозвал результат. По Протоколу совета заявление
        закрывается, протокол публикуется в реестре документов, материалы
        снимаются с ответственного хранения (Дт 76 / Кт 08).

    - branch: Возврат паевого взноса преподавателю
      at_step: 5
      action: null
      actor: teacher
      description: >
        Паевой взнос на главном паевом кошельке — право требования
        преподавателя к кооперативу. Возврат идёт штатным процессом возврата
        паевого взноса по заявлению пайщика; отдельного пути возврата у
        настоящего процесса нет.

    - branch: Выход преподавателя из кооператива
      at_step: 5
      action: null
      actor: teacher
      description: >
        При выходе из кооператива остаток паевого кошелька программы
        переходит на главный паевой кошелёк самим процессом выхода, той же
        операцией; отдельного заявления о трансляции для этого не нужно.

# ── Секция 5. Документы и подписи ───────────────────────────────────────────
# Договор участия подписывается до начала работы;
# акт хранения, заявление, протокол, акт приёма-передачи и заявление о
# трансляции паевого взноса — документы самого процесса.
documents:
  - action: null
    title: Оферта преподавателя
    registry_id: 3004
    signed_by: [teacher]
    stored_in: "реестр документов кооператива"
    note: "Подписывается преподавателем при вступлении в программу. Редакцию оферты совет принимает в бланке, с прочерками на месте данных пайщика. Источник правды — components/cooptypes/src/cooperative/registry/3004.EducationTeacherOffer"

  - action: null
    title: Договор участия в хозяйственной деятельности
    registry_id: 3006
    signed_by: [teacher]
    stored_in: "реестр документов кооператива"
    note: "Подписывается преподавателем до начала работы по курсам. Редакцию договора совет принимает в бланке, с прочерками на месте данных пайщика. Источник правды — components/cooptypes/src/cooperative/registry/3006.EducationParticipationContract"

  - action: edubridge::holdrid
    title: Акт передачи материалов занятия на ответственное хранение
    registry_id: 3012
    signed_by: [teacher]
    stored_in: "реестр документов (package = rid_hash); hash — edurids.storage_act_hash"
    note: "Подписывается преподавателем вместе с отчётом по занятию. Содержит занятие, перечень материалов, оценку и дату окончания гарантийного срока. Источник правды — components/cooptypes/src/cooperative/registry/3012.EducationRidStorageAct"

  - action: edubridge::submitrid
    title: Заявление о паевом взносе результатом интеллектуальной деятельности
    registry_id: 3008
    signed_by: [teacher]
    stored_in: "реестр документов (package = rid_hash); hash — edurids.statement_hash"
    note: "Подписывается преподавателем вместе с актом хранения и публикуется по истечении гарантийного срока. Содержит задание, вид и оценку результата, описание результата со ссылками. Источник правды — components/cooptypes/src/cooperative/registry/3008.EducationRidStatement"

  - action: edubridge::acceptrid
    title: Протокол совета о приёме паевого взноса РИД
    registry_id: 3009
    signed_by: [chairman]
    stored_in: "реестр документов (package = rid_hash)"
    note: "Протокол по типовому процессу решения совета; протокол решения совета сопровождает и приём (acceptrid), и закрытие заявления после решения (declinerid); отказ без решения совета протокола не имеет. Источник правды — components/cooptypes/src/cooperative/registry/3009.EducationRidDecision"

  - action: edubridge::acceptrid
    title: Акт приёма-передачи паевого взноса РИД
    registry_id: 3010
    signed_by: [teacher, chairman]
    stored_in: "реестр документов (package = rid_hash)"
    note: "Двухподписный акт: первым подписывает преподаватель, вторым — председатель по хэшу. Источник правды — components/cooptypes/src/cooperative/registry/3010.EducationRidAct"

  - action: edubridge::wthshare
    title: Заявление о трансляции паевого взноса из ЦПП «Образование» в ЦПП «Цифровой Кошелёк»
    registry_id: 3015
    signed_by: [teacher]
    stored_in: "реестр документов (package = hash заявления)"
    note: "Подписывается преподавателем при каждом переводе паевого взноса с кошелька программы на главный паевой кошелёк. Содержит сумму трансляции. Источник правды — components/cooptypes/src/cooperative/registry/3015.EducationShareWithdrawStatement"

# ── Секция 6. Операции (Ledger2) ────────────────────────────────────────────
# Шесть операций: приём на хранение, приём результата в состав активов,
# зачисление паевого взноса, расчёт за счёт резерва выплат преподавателям,
# возврат с хранения и трансляция паевого взноса в «Цифровой Кошелёк».
operations:
  - ledger_code: o.edu.hold
    human_name: Приём материалов занятия на ответственное хранение по ЦПП «Образование»
    wallet_op: ISSUE
    # L1 — двойная запись: имущество принято, у кооператива возникло
    # обязательство перед преподавателем.
    debit: 8                       # Вложения во внеоборотные активы
    credit: 76                     # Расчёты с разными дебиторами и кредиторами
    # L2 — первичный вход имущества в систему (источник вне системы)
    wallet_from: null
    wallet_to: w.edu.hold          # Материалы на ответственном хранении
    # L3 — движение по кошельку преподавателя
    user_wallet: w.edu.hold
    user_ref: teacher
    available_delta: "+amount"
    blocked_delta: null
    amount_ref: сумма расчёта занятия (edu_lesson.amount)
    triggered_by: edubridge::holdrid
    description: >
      Приём материалов занятия на ответственное хранение по акту
      преподавателя. Двойная запись Дт 08 / Кт 76 — имущество принято
      кооперативом, и на его стоимость возникло обязательство перед
      преподавателем: паевым взносом материалы станут после гарантийного
      срока, по заявлению и решению совета.

  - ledger_code: o.edu.rid
    human_name: Приём результата интеллектуальной деятельности преподавателя в состав нематериальных активов
    wallet_op: NONE
    # L1 — двойная запись: хранение закрыто, результат учтён как актив.
    debit: 4                       # Нематериальные активы
    credit: 8                      # Вложения во внеоборотные активы
    # L2 — кошельки не двигаются, их переносит o.edu.ridshr
    wallet_from: null
    wallet_to: null
    user_wallet: null
    user_ref: teacher
    available_delta: null
    blocked_delta: null
    amount_ref: edu_rid.amount
    triggered_by: edubridge::acceptrid
    description: >
      Приём результата интеллектуальной деятельности преподавателя в состав
      нематериальных активов кооператива по решению совета и акту
      приёма-передачи. Двойная запись Дт 04 / Кт 08 — ответственное хранение
      закрывается, результат встаёт на учёт как нематериальный актив.

  - ledger_code: o.edu.ridshr
    human_name: Паевой взнос преподавателя результатом интеллектуальной деятельности
    wallet_op: TRANSFER
    # L1 — двойная запись: обязательство перед преподавателем погашено
    # признанием паевого фонда.
    debit: 76                      # Расчёты с разными дебиторами и кредиторами
    credit: 80                     # Паевой фонд
    # L2 — стоимость материалов переходит с хранения на паевой кошелёк программы
    wallet_from: w.edu.hold        # Материалы на ответственном хранении
    wallet_to: w.edu.share         # Паевой взнос преподавателя по программе
    # L3 — движение по кошелькам преподавателя
    user_wallet: w.edu.share
    user_ref: teacher
    available_delta: "+amount"
    blocked_delta: null
    amount_ref: edu_rid.amount
    triggered_by: edubridge::acceptrid
    description: >
      Зачисление паевого взноса преподавателю по принятому результату.
      Двойная запись Дт 76 / Кт 80 — обязательство перед преподавателем
      гасится ростом паевого фонда, а стоимость материалов переходит с
      ответственного хранения на его паевой кошелёк программы. Это право
      требования: по заявлению преподавателя оно транслируется в «Цифровой
      Кошелёк» и возвращается оттуда штатным заявлением о возврате паевого
      взноса.

  - ledger_code: o.edu.settle
    human_name: Расчёт с преподавателем за счёт резерва программы
    wallet_op: BURN
    debit: null
    credit: null
    wallet_from: w.edu.teach       # Резерв выплат преподавателям
    wallet_to: null
    amount_ref: стоимость принятого результата
    triggered_by: edubridge::acceptrid
    description: >
      Результат преподавателя принят, его стоимость зачислена преподавателю
      паевым взносом — обязательство программы исполнено. Средства,
      зарезервированные под эту выплату из взносов учеников, перестают
      числиться за программой. Списывается вся стоимость результата из
      резерва его курса; при нехватке резерва курса приём отклоняется.

  - ledger_code: o.edu.retrid
    human_name: Снятие материалов занятия с ответственного хранения
    wallet_op: BURN
    # L1 — двойная запись: обязательство и принятый актив закрываются встречно.
    debit: 76                      # Расчёты с разными дебиторами и кредиторами
    credit: 8                      # Вложения во внеоборотные активы
    # L2 — стоимость уходит с кошелька хранения из системы
    wallet_from: w.edu.hold        # Материалы на ответственном хранении
    wallet_to: null
    # L3 — движение по кошельку преподавателя
    user_wallet: w.edu.hold
    user_ref: teacher
    available_delta: "−amount"
    blocked_delta: null
    amount_ref: edu_rid.amount
    triggered_by: edubridge::recallrid, edubridge::declinerid
    description: >
      Снятие материалов занятия с ответственного хранения при подтверждённом
      гарантийном случае и при отказе совета в приёме результата. Двойная
      запись Дт 76 / Кт 08 — обязательство перед преподавателем и принятое
      имущество закрываются встречно, материалы возвращаются автору, паевой
      фонд кооператива остаётся нетронутым.

  - ledger_code: o.edu.wthshr
    human_name: Трансляция паевого взноса из ЦПП «Образование» в ЦПП «Цифровой Кошелёк»
    wallet_op: TRANSFER
    # L1 — проводки нет: оба кошелька учитываются в паевом фонде (счёт 80).
    debit: null
    credit: null
    # L2 — паевой взнос переходит с кошелька программы на главный паевой
    wallet_from: w.edu.share       # Паевой взнос преподавателя по программе
    wallet_to: w.wal.share         # Паевой взнос пайщика
    # L3 — движение по кошелькам преподавателя
    user_wallet: w.edu.share → w.wal.share
    user_ref: teacher
    available_delta: "-amount на w.edu.share; +amount на w.wal.share"
    blocked_delta: null
    amount_ref: wthshare.amount
    triggered_by: edubridge::wthshare
    description: >
      Преподаватель по своему заявлению переводит паевой взнос с кошелька
      программы на главный паевой кошелёк целевой потребительской программы
      «Цифровой Кошелёк» — целиком или частью. Проводки нет: взнос остаётся
      в паевом фонде, меняется только кошелёк. При выходе преподавателя из
      кооператива остаток переносится той же операцией без заявления.

# ── Связи с другими процессами ──────────────────────────────────────────
# Только по межконтрактным вызовам: consumes — процесс вызывает другой,
# provides — другой процесс вызывает этот.
related:
  - process_type: sov.authpkg
    relation: consumes
    note: >
      Вопрос выносится в повестку совета: голосование и решение идут по
      типовому порядку решений совета, итог возвращается в процесс.
`,Df=`# ─────────────────────────────────────────────────────────────────────────────
# Стандарт «Расход ЦПП „Образование“» — оплата расходов программы деньгами из
# её фонда.
#
# Фонд программы пополняется членскими взносами учеников: при подключении
# подписки её стоимость переходит в распоряжение кооператива (типовой процесс
# «Доступ к курсу»). Из этих средств кооператив ведёт обучение — платит за
# площадки, материалы, хозяйственные нужды школы.
#
# **Движение средств:** председатель подаёт расход — сумма сразу уходит из
# фонда программы в пул расходов и перестаёт быть свободной. Дальше расходом
# занимается общесистемная подсистема расходов кооператива: совет принимает
# решение, кассир платит по реквизитам получателя либо выдаёт аванс под отчёт,
# получатель отчитывается документами. Когда расход завершён — отклонён
# советом или закрыт после отчёта — всё, что не было потрачено, возвращается
# в фонд программы.
#
# Пул расходов программы транзитный: он показывает, сколько средств отдано под
# расходы прямо сейчас, и технически необходим — подсистема расходов работает
# с кооперативным пулом.
#
# Канон формата:
#   coopenomics-docs/docs/standards/_spec/canon.md
# ─────────────────────────────────────────────────────────────────────────────

# ── Секция 1. Паспорт ───────────────────────────────────────────────────────
process_type: p.edu.spend
id: public_edubridge_spend_process
title: Расход ЦПП «Образование»
slug: spend
status: proposed
contract: edubridge
purpose: >
  Кооператив оплачивает расходы образовательной программы — доступ к
  площадкам обучения, методические материалы, хозяйственные нужды школы — из
  фонда программы, куда поступают членские взносы учеников. Фонд держит
  только свободные средства. Всё, что ученики могут потребовать назад,
  удержано отдельно: весь взнос, пока идёт гарантийный срок ученика, после
  него — сумма возврата по Положению. Обязательство перед преподавателями по
  курсу выделено в отдельный резерв выплат, и расходы программы его не
  затрагивают.

  Председатель подаёт расход со служебной запиской: суммой, назначением и
  получателями по каждой позиции. Средства программы сразу выделяются под
  этот расход. Решение о самой выплате принимает совет; после одобрения
  кассир платит по реквизитам получателя либо выдаёт пайщику аванс под
  отчёт, а пайщик отчитывается документами. Неизрасходованное возвращается
  в фонд программы.
roles:
  - chairman   # председатель — подаёт расход программы
  - council    # совет кооператива — принимает решение о выплате
  - cashier    # кассир кооператива — проводит банковский перевод
  - backend    # Автоматизированная служба кооператива

# ── Секция 2. Действия контракта (блокчейн-уровень) ─────────────────────────
actions:
  - name: edubridge::createexp
    human: Подать расход программы
    actor: chairman
    role: opener
    purpose: >
      Средства программы на сумму расхода уходят из фонда в пул расходов, а
      сама служебная записка передаётся общесистемной подсистеме расходов —
      на решение совета и последующую оплату.
    links:
      - process_type: p.exp.expns
        label: Расход по служебной записке

  - name: edubridge::onexpdone
    human: Расход завершён
    actor: backend
    role: closer
    purpose: >
      Подсистема расходов сообщает программе, что расход закрыт после отчёта
      либо отклонён советом. Всё, что не было потрачено, возвращается в фонд
      программы. Если получатель аванса потратил больше выделенного и
      кооператив доплатил ему разницу, превышение докрывается из фонда
      программы.

# ── Секция 3. Граф состояний ────────────────────────────────────────────────
entity: edubridge::expenses
entity_human: Расход программы
entity_source: cpp/edubridge/src/p.edu.spend/

states:
  - name: in_progress
    human: В работе
    description: >
      Средства программы выделены под расход; расход рассматривается советом,
      оплачивается кассиром либо ожидает отчёта получателя аванса.

transitions:
  - from: "∅"
    to: in_progress
    action: edubridge::createexp
    actor: chairman
    ledger_code: p.edu.spend
    operations:
      - o.edu.expfnd
    guards:
      - Служебная записка подписана тем, от чьего имени подана.
      - Расход содержит хотя бы одну позицию, сумма каждой больше нуля.
      - В фонде программы достаточно средств на сумму расхода.
      - Расход с таким идентификатором ещё не подавался.

  - from: in_progress
    to: "∅"
    action: edubridge::onexpdone
    actor: backend
    ledger_code: p.edu.spend
    operations:
      - o.edu.expunf
      - o.edu.expfnd
    guards:
      - Сообщение пришло от подсистемы расходов кооператива.
      - Расход закрыт после отчёта либо отклонён советом; у отклонённого
        расхода оплат нет.
      - При перерасходе в фонде программы достаточно свободных средств, чтобы
        докрыть превышение; иначе закрытие ждёт пополнения фонда.

# ── Секция 4. Операции ledger2 ──────────────────────────────────────────────
operations:
  - ledger_code: o.edu.expfnd
    human_name: Выделение средств программы под расход
    wallet_op: TRANSFER
    # Оба кошелька — целевое финансирование, движения по счетам нет.
    debit: null
    credit: null
    wallet_from: w.edu.fund        # Фонд ЦПП «Образование»
    wallet_to: w.edu.expns         # Пул расходов программы
    amount_ref: сумма расхода | превышение факта над выделенным
    triggered_by: edubridge::createexp, edubridge::onexpdone
    description: >
      При подаче расхода его сумма уходит из фонда программы в пул расходов и
      перестаёт быть свободной. При закрытии расхода с перерасходом той же
      операцией из фонда докрывается превышение: доплата получателю аванса
      шла из пула расходов сверх выделенного под этот расход.

  - ledger_code: o.edu.expunf
    human_name: Возврат неизрасходованных средств в фонд программы
    wallet_op: TRANSFER
    debit: null
    credit: null
    wallet_from: w.edu.expns
    wallet_to: w.edu.fund
    amount_ref: разница между выделенным и фактически потраченным
    triggered_by: edubridge::onexpdone
    description: >
      Совет отклонил расход либо расход закрыт на сумму меньше выделенной —
      остаток возвращается в фонд программы.

  - ledger_code: o.edu.spend
    human_name: Прямая оплата расхода программы по реквизитам
    wallet_op: BURN
    # Дт 86 / Кт 51: целевое финансирование уменьшается, деньги уходят
    # с расчётного счёта кооператива.
    debit: 86
    credit: 51
    wallet_from: w.edu.expns
    wallet_to: null
    amount_ref: сумма позиции расхода
    triggered_by: expense::payexp
    description: >
      Кассир подтвердил банковский перевод получателю-организации по
      реквизитам, указанным в расходе.

  - ledger_code: o.edu.expadv
    human_name: Выдача аванса под отчёт по расходу программы
    wallet_op: TRANSFER
    debit: 86
    credit: 51
    wallet_from: w.edu.expns
    wallet_to: w.exp.adv           # Подотчётные средства пайщика
    l3:
      - user_wallet: w.exp.adv
        user_ref: получатель аванса
        available_delta: +amount
        blocked_delta: null
    amount_ref: сумма позиции расхода
    triggered_by: expense::payexp
    description: >
      Кассир выдал пайщику аванс под отчёт на его реквизиты. За пайщиком
      числится подотчётная сумма до того, как он отчитается документами.

  - ledger_code: o.edu.exprpt
    human_name: Закрытие подотчёта по расходу программы
    wallet_op: BURN
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
    triggered_by: expense::reportexp
    description: >
      Пайщик отчитался документами о потраченном — подотчётная сумма с него
      снимается.

  - ledger_code: o.edu.expret
    human_name: Возврат неиспользованного аванса в пул расходов программы
    wallet_op: TRANSFER
    debit: 51
    credit: 86
    wallet_from: w.exp.adv
    wallet_to: w.edu.expns
    l3:
      - user_wallet: w.exp.adv
        user_ref: получатель аванса
        available_delta: -amount
        blocked_delta: null
    amount_ref: неиспользованная часть аванса
    triggered_by: expense::returnexp
    description: >
      Пайщик вернул неиспользованную часть аванса — деньги пришли на
      расчётный счёт кооператива и вернулись в пул расходов программы.

  - ledger_code: o.edu.expovr
    human_name: Доплата сверх выданного аванса по расходу программы
    wallet_op: TRANSFER
    debit: 86
    credit: 51
    wallet_from: w.edu.expns
    wallet_to: w.exp.adv
    l3:
      - user_wallet: w.exp.adv
        user_ref: получатель аванса
        available_delta: +amount
        blocked_delta: null
    amount_ref: сумма перерасхода
    triggered_by: expense::overspendexp
    description: >
      Пайщик потратил больше выданного аванса — кооператив доплачивает
      разницу, после чего подотчёт закрывается на полную сумму.

# ── Связи с другими процессами ──────────────────────────────────────────
# Только по межконтрактным вызовам: consumes — процесс вызывает другой,
# provides — другой процесс вызывает этот.
related:
  - process_type: p.exp.expns
    relation: consumes
    note: >
      Расход подаётся в общий процесс «Расход по служебной записке»: там
      оформляются служебная записка и протокол совета, кассир оплачивает
      позиции, получатели авансов отчитываются; по завершении процесс сообщает
      итог.
`,Mf=`# ─────────────────────────────────────────────────────────────────────────────
# Стандарт «Участие преподавателя в хозяйственной деятельности» — договор
# преподавателя с кооперативом по целевой потребительской программе
# «Образование» и допуск преподавателя к ведению конкретных курсов.
#
# Преподаватель — пайщик кооператива. Чтобы вести курсы и вносить в паевой
# фонд результаты своей работы, он заключает с кооперативом Договор участия в
# хозяйственной деятельности (УХД). Договор подписывают две стороны:
# преподаватель — первым, председатель совета от лица кооператива — вторым,
# со своего рабочего стола в разделе «Запросы одобрений». К каждому курсу
# преподавателя допускает администратор программы: ставит его на курс с
# расписанием, ожидаемым результатом и периодом ведения. Допуск — рабочее
# назначение кооператива; отдельного документа и подписей он не требует:
# условия участия преподавателя целиком определяет договор.
#
# Движений по средствам в процессе нет — это документный процесс. Паевой
# взнос результатом работы по курсу — отдельный процесс «Паевой взнос
# преподавателя результатом интеллектуальной деятельности».
#
# Канон формата:
#   coopenomics-docs/docs/standards/_spec/canon.md
# Источники правды в коде:
#   • cpp/edubridge/edubridge.hpp                     — actions
#   • cpp/edubridge/src/p.edu.teach/                  — реализация
#   • cpp/lib/domain/table_edubridge_contracts.hpp    — договоры (анкер)
#   • cpp/lib/core/ledger2/processes.hpp              — processes::edubridge::TEACH
# ─────────────────────────────────────────────────────────────────────────────

# ── Секция 1. Паспорт ───────────────────────────────────────────────────────
process_type: p.edu.teach
id: public_edubridge_teach_process
title: Участие преподавателя в хозяйственной деятельности
slug: teach
status: proposed
contract: edubridge
purpose: >
  Штатный путь, которым преподаватель-пайщик заключает с кооперативом Договор
  участия в хозяйственной деятельности и получает допуск к ведению конкретных
  курсов. Договор подписывают обе стороны: сначала преподаватель, затем
  председатель совета от лица кооператива — со своего рабочего стола, где
  собраны все запросы на его подпись. Пока второй подписи нет, договор
  считается ожидающим; после неё — действующим.

  К курсу преподавателя допускает администратор программы: ставит его на
  курс с расписанием, ожидаемым результатом и периодом ведения. Допуск
  действует сразу и отдельного документа не требует — условия участия
  определяет договор. Только по действующему допуску преподаватель ведёт курс
  и может внести результат своей работы как паевой взнос: допуски ведёт
  кооператив и сверяет с ними каждый отчёт о занятии. Допуск снимается, когда
  администратор убирает преподавателя из курса. Отказ председателя в подписи
  договора закрывает его без последствий: преподаватель может подписать
  договор заново.
roles:
  - teacher         # пайщик-преподаватель
  - chairman        # председатель совета (подписывает от лица кооператива)
  - admin           # администратор программы (допускает преподавателя к курсам)
  - cooperative     # кооператив (прекращает договор при выходе пайщика либо по соглашению)

# ── Секция 2. Действия контракта (блокчейн-уровень) ─────────────────────────
# Имена actions ≤12 символов eosio::name. Документы подписывают участники,
# в кооперативную сеть их передаёт кооператив; вторую подпись председателя
# принимает контракт совета и передаёт сюда.
actions:
  - name: edubridge::signcontract
    human: Подписать договор
    actor: teacher
    role: opener
    purpose: >
      Преподаватель подписывает Договор участия в хозяйственной деятельности.
      Договор регистрируется как ожидающий и поступает председателю совета
      на подпись со стороны кооператива. У преподавателя может быть только
      один договор.

  - name: edubridge::apprvcontr
    human: Подписать договор от кооператива
    actor: chairman
    role: closer
    purpose: >
      Председатель совета ставит вторую подпись — договор становится
      действующим и публикуется в реестре документов уже с двумя подписями.
      С этого момента преподаватель может отчитываться по занятиям курсов,
      к которым допущен.

  - name: edubridge::dclinecontr
    human: Отказать в подписи договора
    actor: chairman
    role: reject
    purpose: >
      Председатель отказывает в подписи с указанием причины. Ожидающий
      договор закрывается; преподаватель может подписать договор заново.

  - name: edubridge::termcontract
    human: Прекратить договор
    actor: cooperative
    role: closer
    purpose: >
      Договор прекращается вместе с членством преподавателя в кооперативе
      либо по соглашению сторон, с указанием основания. К этому моменту
      расчёт по проведённым занятиям закрыт и допуски к курсам сняты.
      Вернувшийся в кооператив преподаватель подписывает договор заново.

  - name: edubridge::setassign
    human: Допустить преподавателя к курсу и задать ставку
    actor: cooperative
    role: progress
    purpose: >
      Администратор допускает преподавателя к курсу и задаёт его ставку часа
      на этом курсе. Ставка не выше плановой ставки курса: оплата занятия
      заложена во взнос участника по плановой. Ставку можно менять по ходу
      курса — новая действует на занятия, по которым преподаватель отчитается
      после правки. Допуск выдаётся преподавателю с действующим договором.

  - name: edubridge::delassign
    human: Снять допуск к курсу
    actor: cooperative
    role: progress
    purpose: >
      Администратор убирает преподавателя из курса. Новых занятий по этому
      курсу он не отчитает; занятие, по которому расчёт уже идёт, доводится
      до конца по зафиксированной ставке.

# ── Секция 3. Граф состояний ────────────────────────────────────────────────
# Сущность: edubridge::edu_contract (таблица educontracts, scope=coopname).
# Договор живёт, пока преподаватель участвует в хозяйственной деятельности.
# Допуск преподавателя к курсу и его ставка на курсе хранятся в таблице
# eduassigns: по ставке считается взнос преподавателя за занятие.
entity: edubridge::edu_contract
entity_human: Договор участия в хозяйственной деятельности
entity_source: cpp/edubridge/src/p.edu.teach/

states:
  - name: pending
    human: Ожидает подписи председателя
    description: >
      Договор подписан преподавателем и лежит у председателя совета в
      запросах на подпись. Отчитываться по занятиям пока нельзя.
    kind: normal

  - name: active
    human: Действует
    description: >
      Договор подписан обеими сторонами и опубликован в реестре документов.
      Преподаватель ведёт курсы, к которым допущен, и вносит результат своей
      работы как паевой взнос.
    kind: normal

transitions:
  - from: "∅"
    to: pending
    action: edubridge::signcontract
    actor: teacher
    guards:
      - Преподаватель — действующий член кооператива.
      - Договор подписан преподавателем.
      - У преподавателя ещё нет договора — ни действующего, ни ожидающего.

  - from: pending
    to: active
    action: edubridge::apprvcontr
    actor: chairman
    guards:
      - Председатель совета подписал договор со своего рабочего стола.

  - from: pending
    to: "∅"
    action: edubridge::dclinecontr
    actor: chairman
    guards:
      - Председатель отказал в подписи с указанием причины.

  - from: active
    to: "∅"
    action: edubridge::termcontract
    actor: cooperative
    guards:
      - Основание прекращения указано — выход преподавателя из кооператива
        либо соглашение сторон.
      - У преподавателя нет материалов на ответственном хранении.
      - Допуски преподавателя к курсам сняты.

# ── Секция 4. Сценарий ──────────────────────────────────────────────────────
scenario:
  steps:
    - step: 1
      title: Подпись договора преподавателем
      actor: teacher
      action: edubridge::signcontract
      description: >
        Преподаватель, вступивший в кооператив по оферте преподавателя,
        читает Договор участия в хозяйственной деятельности целиком на
        странице подключения к преподаванию (следующий шаг после оферты),
        соглашается и подписывает его. Договор регистрируется как ожидающий
        и поступает председателю совета на подпись; стол преподавания
        открывается сразу, с пометкой об ожидании второй подписи.
      pre:
        - Преподаватель — действующий член кооператива, подписавший оферту
          преподавателя по программе «Образование».
      post:
        - Договор ожидает подписи председателя.

    - step: 2
      title: Подпись договора председателем
      actor: chairman
      action: edubridge::apprvcontr
      description: >
        Председатель совета видит договор в запросах на подпись, знакомится
        с ним и ставит подпись от лица кооператива. Договор становится
        действующим и публикуется в реестре документов с двумя подписями.
      pre:
        - Договор ожидает подписи председателя.
      post:
        - Договор действует и опубликован.

    - step: 3
      title: Допуск преподавателя к курсу
      actor: admin
      action: null
      description: >
        Администратор программы ставит преподавателя на курс — с расписанием,
        ожидаемым результатом и периодом ведения. Допуск действует сразу:
        преподаватель видит курс у себя, ведёт занятия и отчитывается по ним,
        а по завершении работы может внести её результат как паевой взнос
        (отдельный процесс). Документа и подписей допуск не требует. Чтобы
        снять допуск, администратор убирает преподавателя из курса.
      pre:
        - Договор подписан преподавателем; отчитываться по занятиям можно,
          когда договор действует.
        - Ставка часа преподавателя не выше плановой ставки курса. Взносы
          учеников посчитаны от плановой ставки, поэтому замена преподавателя
          по действующим подпискам идёт по той же ставке; более высокая ставка
          требует сначала поднять плановую ставку курса для новых подписок.
      post:
        - Преподаватель допущен к курсу.

  alternatives:
    - branch: Прекращение договора
      at_step: 3
      action: edubridge::termcontract
      actor: cooperative
      description: >
        Преподаватель выходит из кооператива либо стороны договорились
        прекратить сотрудничество. Кооператив снимает допуски к курсам,
        дожидается закрытия расчёта по проведённым занятиям и прекращает
        договор. Вернувшийся пайщик подписывает договор заново — в том числе
        с новой ставкой часа.

    - branch: Председатель отказал в подписи договора
      at_step: 2
      action: edubridge::dclinecontr
      actor: chairman
      description: >
        Председатель отказывает в подписи с указанием причины — например,
        преподаватель не подтвердил квалификацию. Ожидающий договор
        закрывается; преподаватель может подписать договор заново.

# ── Секция 5. Документы ─────────────────────────────────────────────────────
documents:
  - action: edubridge::signcontract
    title: Договор участия в хозяйственной деятельности (образование)
    registry_id: 3006
    signed_by: [ teacher ]
    stored_in: educontracts.contract_hash
    note: >
      Первая подпись. В реестр документов попадает после второй подписи
      председателя (apprvcontr) — уже с двумя подписями.

  - action: edubridge::apprvcontr
    title: Договор участия в хозяйственной деятельности (образование)
    registry_id: 3006
    signed_by: [ teacher, chairman ]
    stored_in: educontracts.contract_hash
    note: Тот же документ с присоединённой подписью председателя; публикуется в реестре.

# ── Секция 6. Операции (Ledger2) ────────────────────────────────────────────
# Документный процесс: движений по кошелькам и проводок нет.
operations: []
`,Bf=`# ─────────────────────────────────────────────────────────────────────────────
# Стандарт «Расход по служебной записке» — общий для кооператива порядок
# оплаты расходов: служебная записка-смета → решение совета → оплата по
# позициям → отчёт → закрытие.
#
# Процесс обслуживает программы и участки кооператива. Программа подаёт
# расход своим действием и выделяет под него средства в свой пул расходов;
# дальше расход идёт по этому стандарту, а по завершении (закрытие или отказ
# совета) программа получает итог и возвращает себе неизрасходованное.
# Сейчас процесс вызывают:
#   • «Расход кооперативного участка» (p.brn.spend) — пул w.brn.expns;
#   • «Расход ЦПП «Образование»» (p.edu.spend)      — пул w.edu.expns;
#   • программные расходы ЦПП «Благорост»          — пул w.cap.pgexp
#     (capital::createpgexp; отдельного стандарта пока нет).
#
# Операции по кошелькам и проводки процесс берёт из набора своего пула:
# у каждого пула свои коды (выдача аванса, прямая оплата, отчёт, возврат,
# доплата). Здесь описан набор пула «Благороста» — он принадлежит самому
# процессу. Наборы участков и «Образования» описаны в их стандартах и
# привязаны к действиям этого процесса через triggered_by.
#
# Источники правды в коде:
#   • cpp/expense/expense.{hpp,cpp}                        — действия и статусы
#   • cpp/lib/core/ledger2/operations.hpp                  — EXPENSE_OPERATION_SETS
#   • cpp/lib/core/ledger2/processes.hpp                   — processes::expense::PROPOSAL
#   • cooptypes/src/cooperative/registry/2010, 2011        — документы
# ─────────────────────────────────────────────────────────────────────────────

# ── Секция 1. Паспорт ───────────────────────────────────────────────────────
process_type: p.exp.expns
id: public_expense_proposal_process
title: Расход по служебной записке
slug: expns
status: proposed
contract: expense
area: expenses
purpose: >
  Общий порядок, по которому кооператив оплачивает расходы своих программ
  и участков. Автор расхода составляет служебную записку-смету: что
  оплатить, кому и сколько по каждой позиции. Совет рассматривает записку
  и принимает решение. После одобрения кассир оплачивает позиции:
  организации — по счёту напрямую, пайщику — авансом под отчёт. Пайщик
  отчитывается чеками, возвращает неизрасходованное или получает доплату,
  если потратил больше. Когда по всем позициям есть отчёт, расход
  закрывается, и программа, подавшая его, получает итог.
roles:
  - Автор служебной записки
  - Совет
  - Кассир
  - Получатель аванса
  - Кооператив

# ── Секция 2. Действия контракта ────────────────────────────────────────────
actions:
  - name: expense::createexp
    human: Подать служебную записку
    actor: Автор служебной записки
    role: opener
    purpose: >
      Служебная записка-смета подана: позиции расхода с получателями и
      суммами, источник средств и программа, которой нужно сообщить итог.
      Вопрос сразу ставится в повестку совета. Записку подаёт программа или
      участок своим действием — тогда средства под расход уже выделены.
    links:
      - process_type: sov.authpkg
        label: Решение совета по повестке

  - name: expense::authexp
    human: Совет одобрил
    actor: Совет
    role: progress
    purpose: >
      Совет одобрил расход и подписал протокол решения. С этого момента
      кассир может оплачивать позиции.

  - name: expense::declexp
    human: Совет отказал
    actor: Совет
    role: reject
    purpose: >
      Совет отказал в расходе — голосами против либо по истечении срока
      повестки. Отказ возможен, пока не оплачена ни одна позиция. Программа,
      подавшая расход, получает отказ и возвращает себе выделенные средства.

  - name: expense::payexp
    human: Оплатить позицию
    actor: Кассир
    role: progress
    purpose: >
      Кассир оплатил одну позицию. Организации деньги уходят по счёту
      напрямую, и позиция сразу считается закрытой. Пайщику выдаётся аванс
      под отчёт: деньги переходят в его подотчёт, пока он не отчитается.
      Оплатить больше, чем запланировано в позиции, нельзя — для этого есть
      доплата.

  - name: expense::returnexp
    human: Вернуть остаток аванса
    actor: Получатель аванса
    role: progress
    purpose: >
      Пайщик вернул часть аванса, которую не потратил. Деньги возвращаются в
      пул расходов программы; потраченная часть закрывается отчётом.

  - name: expense::overspendexp
    human: Доплатить сверх аванса
    actor: Кассир
    role: progress
    purpose: >
      Пайщик потратил больше выданного аванса, и кассир доплатил разницу.
      Доплата добавляется к подотчёту; отчёт закрывает его на полную сумму.

  - name: expense::reportexp
    human: Отчитаться по позиции
    actor: Получатель аванса
    role: progress
    purpose: >
      Пайщик отчитался по авансу чеками. Подотчёт по позиции закрывается на
      фактически потраченную сумму. Когда отчёт есть по всем позициям,
      расход готов к закрытию.

  - name: expense::closeexp
    human: Закрыть расход
    actor: Кооператив
    role: closer
    purpose: >
      Кооператив закрывает расход, по всем позициям которого есть отчёт.
      Программа, подавшая расход, получает итог — сколько фактически
      потрачено — и возвращает себе неизрасходованное.

# ── Секция 3. Граф состояний ────────────────────────────────────────────────
entity: expense::proposals
entity_human: Служебная записка на расход
entity_source: cpp/expense/

# Закрытые и отклонённые записки остаются в таблице (правил очистки нет),
# поэтому у процесса два настоящих финала.
states:
  - name: created
    human: На рассмотрении совета
    description: >
      Служебная записка подана и стоит в повестке совета. Средства под
      расход выделены программой, но ещё не тратятся.
    kind: initial

  - name: authorized
    human: Одобрено советом
    description: >
      Совет одобрил расход и подписал протокол. Кассир может оплачивать
      позиции.
    kind: normal

  - name: partially_paid
    human: Оплачивается
    description: >
      Часть позиций оплачена. По выданным авансам пайщики отчитываются,
      возвращают остаток или получают доплату.
    kind: normal

  - name: report_submitted
    human: Отчёт по всем позициям
    description: >
      Все позиции оплачены и закрыты: прямые оплаты — сразу, авансы —
      отчётами пайщиков. Расход готов к закрытию.
    kind: normal

  - name: closed
    human: Расход закрыт
    description: >
      Расход завершён. Программа получила итог и вернула себе всё, что не
      было потрачено. Записка, протокол совета и движения средств остаются
      в истории.
    kind: final

  - name: declined
    human: Отказано
    description: >
      Совет отказал в расходе до первой оплаты. Деньги не тратились;
      программа вернула себе выделенные средства.
    kind: virtual
    virtual: true

transitions:
  - from: "∅"
    to: created
    action: expense::createexp
    actor: Автор служебной записки
    guards:
      - Записку подписал тот, от чьего имени она подана.
      - Записку подаёт кооператив либо программа кооператива своим действием.
      - В записке есть хотя бы одна позиция, сумма каждой больше нуля.
      - Для источника средств настроен набор операций расходов.
      - Организации назначена только оплата по счёту, пайщику — только аванс под отчёт.
      - Пайщик-получатель существует.
      - Записка с таким идентификатором ещё не подавалась.

  - from: created
    to: authorized
    action: expense::authexp
    actor: Совет
    guards:
      - Решение принято советом и утверждено председателем.
      - Протокол решения совета подписан.

  - from: created | authorized
    to: declined
    action: expense::declexp
    actor: Совет
    guards:
      - Ни одна позиция ещё не оплачена.

  - from: authorized | partially_paid
    to: partially_paid
    action: expense::payexp
    actor: Кассир
    operations:
      - o.exp.blgadv
      - o.exp.blgdir
    guards:
      - Позиция ещё не оплачена.
      - Сумма оплаты больше нуля и не превышает план позиции.

  - from: authorized | partially_paid
    to: report_submitted
    action: expense::payexp
    actor: Кассир
    guards:
      - Оплачена последняя позиция, и все позиции закрыты — расход только из оплат по счёту.

  - from: partially_paid
    to: partially_paid
    action: expense::returnexp
    actor: Получатель аванса
    operations:
      - o.exp.advret
    guards:
      - Позиция оплачена авансом и ещё не закрыта отчётом.
      - Возвращается не больше выданного.

  - from: partially_paid
    to: partially_paid
    action: expense::overspendexp
    actor: Кассир
    operations:
      - o.exp.over
    guards:
      - Позиция оплачена авансом и ещё не закрыта отчётом.
      - Сумма доплаты больше нуля.

  - from: partially_paid
    to: report_submitted
    action: expense::reportexp
    actor: Получатель аванса
    operations:
      - o.exp.advrpt
    guards:
      - Позиция оплачена авансом.
      - Отчёт закрывает последнюю открытую позицию; иначе записка остаётся в оплате.

  - from: report_submitted
    to: closed
    action: expense::closeexp
    actor: Кооператив
    guards:
      - По всем позициям есть отчёт.

# ── Секция 4. Сценарий ──────────────────────────────────────────────────────
scenario:
  steps:
    - step: 1
      title: Подача служебной записки
      actor: Автор служебной записки
      action: expense::createexp
      description: >
        Автор расхода — председатель участка, председатель кооператива или
        участник программы — составляет служебную записку-смету и
        подписывает её. В каждой позиции указаны назначение, сумма и
        получатель: организация или пайщик. Программа, от которой подан
        расход, уже выделила под него средства в свой пул расходов. Вопрос
        ставится в повестку совета.
      pre:
        - Программа выделила средства под расход.
      post:
        - Записка на рассмотрении совета.

    - step: 2
      title: Решение совета
      actor: Совет
      action: expense::authexp
      description: >
        Совет рассматривает записку по типовому порядку решений совета.
        При одобрении председатель утверждает решение, протокол
        подписывается, и расход переходит к оплате.
      post:
        - Расход одобрен, кассир может платить.

    - step: 3
      title: Оплата позиций
      actor: Кассир
      action: expense::payexp
      description: >
        Кассир оплачивает позиции по одной. Организации деньги уходят по
        счёту, и позиция закрывается сразу. Пайщику выдаётся аванс под
        отчёт — деньги переходят в его подотчёт. Если все позиции были
        оплатами по счёту, расход после последней оплаты сразу готов к
        закрытию.
      post:
        - Позиции оплачены; авансы ждут отчёта.

    - step: 4
      title: Отчёт по авансу
      actor: Получатель аванса
      action: expense::reportexp
      description: >
        Пайщик отчитывается чеками за потраченное. До отчёта он может
        вернуть неизрасходованную часть или получить доплату, если
        потратил больше. Отчёт закрывает подотчёт на фактическую сумму.
      post:
        - Позиция закрыта отчётом.

    - step: 5
      title: Закрытие расхода
      actor: Кооператив
      action: expense::closeexp
      description: >
        Когда по всем позициям есть отчёт, кооператив закрывает расход.
        Программа получает итог — сколько фактически потрачено — и
        возвращает себе всё, что осталось от выделенных средств.
      post:
        - Расход закрыт, программа вернула себе неизрасходованное.

  alternatives:
    - branch: Совет отказал
      at_step: 2
      action: expense::declexp
      actor: Совет
      description: >
        Совет отказал голосами против либо срок повестки истёк. Отказ
        возможен только до первой оплаты. Программа получает отказ и
        возвращает себе выделенные средства целиком.

    - branch: Возврат неизрасходованного аванса
      at_step: 4
      action: expense::returnexp
      actor: Получатель аванса
      description: >
        Пайщик потратил меньше выданного и вернул остаток. Остаток уходит в
        пул расходов программы, потраченное закрывается отчётом.

    - branch: Доплата сверх аванса
      at_step: 4
      action: expense::overspendexp
      actor: Кассир
      description: >
        Пайщик потратил больше выданного. Кассир доплачивает разницу, и
        отчёт закрывает подотчёт на полную сумму.

# ── Секция 5. Документы ─────────────────────────────────────────────────────
documents:
  - action: expense::createexp
    title: Служебная записка-смета о расходах
    registry_id: 2010
    signed_by: [Автор служебной записки]
    stored_in: proposals.statement_doc

  - action: expense::authexp
    title: Протокол решения совета о расходах
    registry_id: 2011
    signed_by: [Совет]
    stored_in: proposals.decision_doc

# ── Секция 6. Операции ──────────────────────────────────────────────────────
# Набор пула программных расходов ЦПП «Благорост». У участков и программы
# «Образование» свои наборы — в стандартах p.brn.spend и p.edu.spend.
operations:
  - ledger_code: o.exp.blgadv
    human_name: Выдача аванса под отчёт из пула расходов «Благороста»
    wallet_op: TRANSFER
    wallet_from: w.cap.pgexp
    wallet_to: w.exp.adv
    debit: 8
    credit: 51
    amount_ref: сумма позиции расхода
    triggered_by: expense::payexp
    description: >
      Пайщику выдан аванс по позиции: деньги ушли с расчётного счёта и
      числятся на нём подотчётом до отчёта.

  - ledger_code: o.exp.blgdir
    human_name: Прямая оплата из пула расходов «Благороста»
    wallet_op: BURN
    wallet_from: w.cap.pgexp
    wallet_to: null
    debit: 8
    credit: 51
    amount_ref: сумма позиции расхода
    triggered_by: expense::payexp
    description: >
      Организации оплачен счёт по позиции. Подотчёта нет, позиция
      закрывается сразу.

  - ledger_code: o.exp.advrpt
    human_name: Закрытие подотчёта отчётом
    wallet_op: BURN
    wallet_from: w.exp.adv
    wallet_to: null
    debit: null
    credit: null
    amount_ref: фактически потраченная сумма позиции
    triggered_by: expense::reportexp
    description: >
      Пайщик отчитался чеками, подотчёт закрыт. Проводки нет: она сделана
      при выдаче аванса.

  - ledger_code: o.exp.advret
    human_name: Возврат неизрасходованного аванса
    wallet_op: TRANSFER
    wallet_from: w.exp.adv
    wallet_to: w.cap.pgexp
    debit: 51
    credit: 8
    amount_ref: неиспользованная часть аванса
    triggered_by: expense::returnexp
    description: >
      Пайщик вернул неизрасходованную часть аванса на расчётный счёт; она
      снова в пуле расходов.

  - ledger_code: o.exp.over
    human_name: Доплата сверх выданного аванса
    wallet_op: TRANSFER
    wallet_from: w.cap.pgexp
    wallet_to: w.exp.adv
    debit: 8
    credit: 51
    amount_ref: сумма перерасхода
    triggered_by: expense::overspendexp
    description: >
      Пайщику доплачена разница сверх аванса; подотчёт растёт на сумму
      доплаты и закрывается отчётом.

# ── Связи с другими процессами ──────────────────────────────────────────
# Только по межконтрактным вызовам: consumes — процесс вызывает другой,
# provides — другой процесс вызывает этот.
related:
  - process_type: sov.authpkg
    relation: consumes
    note: >
      Вопрос выносится в повестку совета: голосование и решение идут по
      типовому порядку решений совета, итог возвращается в процесс.
  - process_type: p.brn.spend
    relation: provides
    note: >
      Подаёт свой расход в этот процесс и получает его итог.
  - process_type: p.edu.spend
    relation: provides
    note: >
      Подаёт свой расход в этот процесс и получает его итог.
`,Ff=`# ─────────────────────────────────────────────────────────────────────────────
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

# ── Связи с другими процессами ──────────────────────────────────────────
# Только по межконтрактным вызовам: consumes — процесс вызывает другой,
# provides — другой процесс вызывает этот.
related:
  - process_type: p.brn.fees
    relation: consumes
    note: >
      Процесс возвращает членский взнос кооперативного участка, на котором
      исполнен заказ или числится пайщик.
`,$f=`# ─────────────────────────────────────────────────────────────────────────────
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

# ── Связи с другими процессами ──────────────────────────────────────────
# Только по межконтрактным вызовам: consumes — процесс вызывает другой,
# provides — другой процесс вызывает этот.
related:
  - process_type: p.brn.fees
    relation: consumes
    note: >
      Процесс возвращает членский взнос кооперативного участка, на котором
      исполнен заказ или числится пайщик.
  - process_type: sov.authpkg
    relation: consumes
    note: >
      Вопрос выносится в повестку совета: голосование и решение идут по
      типовому порядку решений совета, итог возвращается в процесс.
`,jf=`# ─────────────────────────────────────────────────────────────────────────────
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

# ── Связи с другими процессами ──────────────────────────────────────────
# Только по межконтрактным вызовам: consumes — процесс вызывает другой,
# provides — другой процесс вызывает этот.
related:
  - process_type: p.brn.fees
    relation: consumes
    note: >
      Процесс начисляет членский взнос кооперативного участка, на котором
      исполнен заказ или числится пайщик.
  - process_type: sov.authpkg
    relation: consumes
    note: >
      Вопрос выносится в повестку совета: голосование и решение идут по
      типовому порядку решений совета, итог возвращается в процесс.
`,Uf=`# ─────────────────────────────────────────────────────────────────────────────
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

# ── Связи с другими процессами ──────────────────────────────────────────
# Только по межконтрактным вызовам: consumes — процесс вызывает другой,
# provides — другой процесс вызывает этот.
related:
  - process_type: sov.authpkg
    relation: consumes
    note: >
      Вопрос выносится в повестку совета: голосование и решение идут по
      типовому порядку решений совета, итог возвращается в процесс.
`,Kf=`# ─────────────────────────────────────────────────────────────────────────────
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

# ── Связи с другими процессами ──────────────────────────────────────────
# Только по межконтрактным вызовам: consumes — процесс вызывает другой,
# provides — другой процесс вызывает этот.
related:
  - process_type: sov.authpkg
    relation: consumes
    note: >
      Вопрос выносится в повестку совета: голосование и решение идут по
      типовому порядку решений совета, итог возвращается в процесс.
`,Vf=`# ─────────────────────────────────────────────────────────────────────────────
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

# ── Связи с другими процессами ──────────────────────────────────────────
# Только по межконтрактным вызовам: consumes — процесс вызывает другой,
# provides — другой процесс вызывает этот.
related:
  - process_type: sov.authpkg
    relation: consumes
    note: >
      Вопрос выносится в повестку совета: голосование и решение идут по
      типовому порядку решений совета, итог возвращается в процесс.
`,qf=`# ─────────────────────────────────────────────────────────────────────────────
# Стандарт «Выход пайщика из кооператива» — прекращение членства с возвратом
# паевых взносов и аннулированием соглашений об участии в целевых
# потребительских программах.
#
# Пайщик подаёт два заявления сразу: о выходе (registry 200) и об аннулировании
# соглашений ЦПП (registry 190). Совет рассматривает их одной повесткой
# \`leavecoop\`. По одобрении контракт собирает средства пайщика по всем
# программам на главный паевой кошелёк и ставит их на выплату; касса проводит
# перевод, и только тогда участие прекращается: соглашения аннулируются, пайщик
# удаляется из реестра совета, аккаунт блокируется.
#
# Что именно возвращается, определяет таблица политики кошельков, а не вид
# взноса: членский взнос ЦПП «Образование» возвратен по п. 4.2.5 её Положения,
# членский взнос «Стола заказов» остаётся кооперативу.
#
# Источники правды в коде:
#   • cpp/registrator/registrator.hpp                 — действия exitcoop / exitagree / confirmexit / completexit / declinexit
#   • cpp/registrator/src/exit/exitcoop.cpp           — подача заявления, повестка совета
#   • cpp/registrator/src/exit/exitagree.cpp          — приём заявления об аннулировании соглашений
#   • cpp/registrator/src/exit/confirmexit.cpp        — одобрение советом, сбор кошельков, резерв и платёж
#   • cpp/registrator/src/exit/completexit.cpp        — подтверждение выплаты кассой, финал выхода
#   • cpp/registrator/src/exit/declinexit.cpp         — отказ совета или кассы, снятие резерва
#   • cpp/registrator/src/exit/exit_helpers.hpp       — перенос остатков на главный паевой, финализация
#   • cpp/lib/core/ledger2/exit_policy.hpp            — EXIT_WALLET_POLICY: что выход делает с каждым кошельком
#   • cpp/lib/core/registrator/exit.hpp               — проверки программ, аннулирование соглашений
#   • cpp/lib/domain/table_registrator_exits.hpp      — таблица exits
# ─────────────────────────────────────────────────────────────────────────────

# ── Секция 1. Паспорт ───────────────────────────────────────────────────────
process_type: p.reg.exit
id: public_registrator_exit_process
title: Выход пайщика из кооператива
slug: exit
status: proposed
contract: registrator
summary: >
  Пайщик выходит из состава кооператива: подаёт заявление о выходе и заявление
  об аннулировании соглашений ЦПП, совет рассматривает их одним решением,
  кооператив собирает его средства по программам на главный паевой кошелёк и
  выплачивает их на реквизиты пайщика.
purpose: >
  «Выход пайщика» прекращает членство и участие во всех целевых потребительских
  программах разом. Средства пайщика живут на кошельках программ, поэтому
  возврат собирается по таблице политики кошельков: паевые взносы и возвратные
  членские идут на главный паевой кошелёк и выплачиваются одним платежом,
  невозвратные остаются кооперативу по Положениям своих программ.
  Незавершённые обязательства — резерв под заказы, незакрытый подотчёт,
  открытая заявка на гарантийный возврат — выход держат: сначала их завершают.
roles:
  - member             # пайщик, выходящий из кооператива
  - soviet             # совет кооператива (рассматривает заявления)
  - chairman           # председатель / кассир (проводит выплату)

# ── Секция 2. Действия контракта (блокчейн-уровень) ─────────────────────────
actions:
  - name: registrator::exitcoop
    human: Подать заявление о выходе
    actor: member
    role: opener
    purpose: >
      Действующий пайщик подаёт подписанное заявление о выходе (registry 200).
      Контракт проверяет, что ни один кошелёк и ни одна программа не держат
      незавершённого, создаёт запись выхода и ставит повестку совета
      \`leavecoop\` с коллбэками confirmexit / declinexit.

  - name: registrator::exitagree
    human: Приложить заявление об аннулировании соглашений
    actor: member
    role: participant
    purpose: >
      К поданному заявлению о выходе прикладывается заявление об аннулировании
      соглашений об участии в целевых потребительских программах (registry 190)
      — одно на все программы пайщика. Приходит отдельным действием в одной
      транзакции с exitcoop и попадает в реестр документов: совет видит оба
      заявления, а аннулирование опирается на подписанное основание.

  - name: registrator::confirmexit
    human: Одобрить выход советом
    actor: soviet
    role: participant
    purpose: >
      Совет одобрил выход. Контракт сам считает сумму возврата по L3-балансам
      ledger2: обходит таблицу EXIT_WALLET_POLICY, переносит остатки
      возвращаемых кошельков на главный паевой, резервирует всю сумму
      (o.wal.wthreq) и создаёт исходящий платёж в кассу. Возвращать нечего —
      выход завершается сразу, без платежа.

  - name: registrator::completexit
    human: Подтвердить выплату
    actor: chairman
    role: closer
    purpose: >
      Касса провела перевод пайщику и подтверждает это. Контракт списывает
      резерв (o.wal.wthcpl, Дт 80 / Кт 51), программы закрывают свои
      невозвратные кошельки, соглашения ЦПП аннулируются, пайщик удаляется из
      реестра совета, аккаунт блокируется. Возврата назад нет.

  - name: registrator::declinexit
    human: Отказать в выходе
    actor: soviet
    role: guard
    purpose: >
      Совет отказал либо касса отклонила платёж. Резерв возвращается на главный
      паевой (o.wal.wthdec), запись выхода стирается. Пайщик остаётся членом
      кооператива, его соглашения продолжают действовать.

# ── Секция 3. Граф состояний ────────────────────────────────────────────────
entity: "registrator::exit"
entity_human: "Выход пайщика"
entity_source: cpp/lib/domain/table_registrator_exits.hpp

states:
  - name: pending
    human: Заявление подано
    description: >
      Пайщик подал заявление о выходе и заявление об аннулировании соглашений.
      Повестка \`leavecoop\` ждёт решения совета. Средства пайщика остаются на
      кошельках программ и доступны ему до решения.
    kind: normal

  - name: authorized
    human: Выход одобрен, деньги зарезервированы
    description: >
      Совет одобрил выход. Остатки возвращаемых кошельков собраны на главный
      паевой и зарезервированы под выплату (w.wal.wpend); касса получила
      исходящий платёж. Пайщик остаётся членом, пока перевод не проведён.
    kind: normal

  - name: completed
    human: Выход состоялся
    description: >
      Касса подтвердила перевод. Проводка Дт 80 / Кт 51 закрыла паевой взнос,
      соглашения ЦПП аннулированы, пайщик удалён из реестра совета, аккаунт
      заблокирован. Запись выхода стёрта.
    kind: final

  - name: declined
    human: Выход отклонён
    description: >
      Совет отказал либо касса отклонила платёж. Резерв снят, запись выхода
      стёрта, членство и соглашения продолжают действовать.
    kind: virtual
    virtual: true

transitions:
  - from: "∅"
    to: pending
    action: registrator::exitcoop
    actor: member
    operations: []
    guards:
      - Заявитель — действующий пайщик кооператива.
      - Заявление о выходе подписано ключом самого пайщика.
      - Кошельки-блокеры пусты: нет резерва под заказы и незакрытого подотчёта.
      - Нет открытой заявки на гарантийный возврат в «Столе заказов».
      - Другого процесса выхода у пайщика нет.

  - from: pending
    to: pending
    action: registrator::exitagree
    actor: member
    operations: []
    guards:
      - Заявление о выходе уже подано и ждёт решения совета.
      - Заявление об аннулировании подписано ключом самого пайщика.
      - Второй раз приложить заявление нельзя.

  - from: pending
    to: authorized
    action: registrator::confirmexit
    actor: soviet
    ledger_code: p.wal.wthdrw
    operations:
      - o.reg.mvmin
      - o.cap.wthcap
      - o.mkt.recall
      - o.edu.retshr
      - o.edu.wthshr
      - o.wal.wthreq
    guards:
      - Совет принял положительное решение по повестке \`leavecoop\`.
      - Проверки программ и кошельков-блокеров пройдены повторно.
      - У пайщика с программными соглашениями приложено заявление об аннулировании.

  - from: pending
    to: completed
    action: registrator::confirmexit
    actor: soviet
    guards:
      - Совет одобрил выход.
      - Возвращать пайщику нечего — платёж не создаётся, выход завершается сразу.

  - from: authorized
    to: completed
    action: registrator::completexit
    actor: chairman
    ledger_code: p.wal.wthdrw
    operations:
      - o.wal.wthcpl
      - o.mkt.exfee
    guards:
      - Касса фактически провела перевод пайщику.

  - from: pending
    to: declined
    action: registrator::declinexit
    actor: soviet
    operations: []
    guards:
      - Совет отказал в выходе.

  - from: authorized
    to: declined
    action: registrator::declinexit
    actor: chairman
    ledger_code: p.wal.wthdrw
    operations:
      - o.wal.wthdec
    guards:
      - Касса отклонила исходящий платёж.

# ── Секция 4. Сценарий ──────────────────────────────────────────────────────
scenario:
  steps:
    - step: 1
      title: Пайщик подаёт заявления
      actor: member
      action: registrator::exitcoop
      description: >
        Пайщик видит, сколько получит при выходе: суммы разложены по программам,
        рядом названы кошельки, остатки которых остаются кооперативу. Он
        подписывает заявление о выходе и заявление об аннулировании соглашений
        ЦПП, и оба уходят одной транзакцией. Контракт ставит повестку совета.
      pre:
        - Пайщик действующий, обязательств по программам нет.
        - У пайщика заданы платёжные реквизиты для выплаты.
      post:
        - Запись выхода в статусе \`pending\`.
        - Оба заявления в реестре документов.
        - Повестка \`leavecoop\` ждёт решения совета.

    - step: 2
      title: Совет одобряет выход
      actor: soviet
      action: registrator::confirmexit
      description: >
        Совет рассматривает оба заявления и одобряет выход. Контракт обходит
        таблицу политики кошельков: остатки возвращаемых переносит на главный
        паевой (минимальный паевой, «Благорост», паевой «Стола заказов»,
        членский взнос и паевой взнос преподавателя «Образования»), затем
        резервирует всю сумму и поручает
        кассе выплату. Решение совета (registry 201) фиксируется в реестре.
      pre:
        - Запись выхода в статусе \`pending\`.
        - Совет проголосовал за.
      post:
        - Запись выхода в статусе \`authorized\`, сумма возврата зафиксирована.
        - Средства собраны на главном паевом и зарезервированы (w.wal.wpend).
        - Касса получила исходящий платёж.

    - step: 3
      title: Касса выплачивает и выход завершается
      actor: chairman
      action: registrator::completexit
      description: >
        Касса переводит деньги пайщику и подтверждает перевод. Контракт
        проводит списание (Дт 80 / Кт 51), «Стол заказов» уводит остаток
        членского кошелька в пул взносов участка, соглашения ЦПП аннулируются,
        пайщик удаляется из реестра совета, аккаунт блокируется.
      pre:
        - Запись выхода в статусе \`authorized\`.
        - Касса фактически провела перевод.
      post:
        - Паевой взнос списан со счёта, пайщик получил деньги.
        - Соглашений об участии в программах у пайщика нет.
        - Аккаунт заблокирован, запись выхода стёрта.

# ── Секция 5. Документы и подписи ───────────────────────────────────────────
documents:
  - action: registrator::exitcoop
    title: Заявление на выход из кооператива
    registry_id: 200
    signed_by: [ Пайщик ]
    stored_in: "registrator::exits.statement"

  - action: registrator::exitagree
    title: Заявление об аннулировании соглашений об участии в целевых потребительских программах
    registry_id: 190
    signed_by: [ Пайщик ]
    stored_in: "registrator::exits.annulment_statement"

  - action: registrator::confirmexit
    title: Решение совета о выходе пайщика из кооператива
    registry_id: 201
    signed_by: [ Председатель совета ]
    stored_in: "registrator::exits.approved_statement"

# ── Секция 6. Операции ──────────────────────────────────────────────────────
# Состав операций зависит от того, на каких кошельках у пайщика есть остаток:
# обходится таблица EXIT_WALLET_POLICY, и для каждого возвращаемого кошелька
# применяется его операция переноса на главный паевой. Ниже — все возможные.
operations:
  - ledger_code: o.reg.mvmin
    human_name: Перенос минимального паевого взноса на главный
    wallet_op: TRANSFER
    wallet_from: w.reg.minshr
    wallet_to: w.wal.share
    amount_ref: userwallet(w.reg.minshr).available
    triggered_by: registrator::confirmexit

  - ledger_code: o.cap.wthcap
    human_name: Возврат паевого взноса ЦПП «Благорост» на главный паевой
    wallet_op: TRANSFER
    wallet_from: w.cap.blago
    wallet_to: w.wal.share
    amount_ref: userwallet(w.cap.blago).available
    triggered_by: registrator::confirmexit

  - ledger_code: o.mkt.recall
    human_name: Возврат свободного паевого ЦПП «Стол заказов» на главный паевой
    wallet_op: TRANSFER
    wallet_from: w.mkt.share
    wallet_to: w.wal.share
    amount_ref: userwallet(w.mkt.share).available
    triggered_by: registrator::confirmexit

  - ledger_code: o.edu.retshr
    human_name: Возврат членского взноса ЦПП «Образование» в паевой
    wallet_op: TRANSFER
    wallet_from: w.edu.member
    wallet_to: w.wal.share
    debit: 86
    credit: 80
    amount_ref: userwallet(w.edu.member).available
    triggered_by: registrator::confirmexit
    description: >
      Членский взнос программы возвратен по п. 4.2.5 её Положения: при выходе
      остаток кошелька программы переводится в паевой взнос пайщика и уходит
      ему вместе с ним.

  - ledger_code: o.edu.wthshr
    human_name: Трансляция паевого взноса из ЦПП «Образование» в ЦПП «Цифровой Кошелёк»
    wallet_op: TRANSFER
    wallet_from: w.edu.share
    wallet_to: w.wal.share
    amount_ref: userwallet(w.edu.share).available
    triggered_by: registrator::confirmexit
    description: >
      Паевой взнос преподавателя по программе: по п. 9.8 договора участия в
      хозяйственной деятельности при выходе баланс договора переносится на
      «Цифровой Кошелёк». Проводки нет — оба кошелька в паевом фонде.

  - ledger_code: o.wal.wthreq
    human_name: Резерв паевого взноса под выплату при выходе
    wallet_op: TRANSFER
    wallet_from: w.wal.share
    wallet_to: w.wal.wpend
    amount_ref: exit.quantity
    triggered_by: registrator::confirmexit

  - ledger_code: o.wal.wthcpl
    human_name: Выплата паевого взноса при выходе
    wallet_op: BURN
    wallet_from: w.wal.wpend
    wallet_to: ''
    debit: 80
    credit: 51
    amount_ref: exit.quantity
    triggered_by: registrator::completexit

  - ledger_code: o.mkt.exfee
    human_name: Остаток членского кошелька «Стола заказов» в пул взносов
    wallet_op: TRANSFER
    wallet_from: w.mkt.member
    wallet_to: w.mkt.fee
    amount_ref: userwallet(w.mkt.member).available
    triggered_by: registrator::completexit
    description: >
      Членский взнос «Стола заказов» его Положением не возвращается: остаток
      уходит в пул взносов и далее в общий кошелёк участка пайщика.

  - ledger_code: o.wal.wthdec
    human_name: Снятие резерва при отказе в выходе
    wallet_op: TRANSFER
    wallet_from: w.wal.wpend
    wallet_to: w.wal.share
    amount_ref: exit.quantity
    triggered_by: registrator::declinexit

# ── Связи с другими процессами ──────────────────────────────────────────
# Только по межконтрактным вызовам: consumes — процесс вызывает другой,
# provides — другой процесс вызывает этот.
related:
  - process_type: p.brn.fees
    relation: consumes
    note: >
      Процесс начисляет членский взнос кооперативного участка, на котором
      исполнен заказ или числится пайщик.
  - process_type: sov.authpkg
    relation: consumes
    note: >
      Вопрос выносится в повестку совета: голосование и решение идут по
      типовому порядку решений совета, итог возвращается в процесс.
`,Hf=`# ─────────────────────────────────────────────────────────────────────────────
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
`,zf=`# ─────────────────────────────────────────────────────────────────────────────
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
`,Gf=`# ─────────────────────────────────────────────────────────────────────────────
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
`,Wf=`# ─────────────────────────────────────────────────────────────────────────────
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

# ── Связи с другими процессами ──────────────────────────────────────────
# Только по межконтрактным вызовам: consumes — процесс вызывает другой,
# provides — другой процесс вызывает этот.
related:
  - process_type: brn.decide
    relation: provides
    note: >
      Ставит вопрос в повестку совета и получает решение.
  - process_type: meet.hold
    relation: provides
    note: >
      Ставит вопрос в повестку совета и получает решение.
  - process_type: p.brn.aid
    relation: provides
    note: >
      Ставит вопрос в повестку совета и получает решение.
  - process_type: p.cap.debt
    relation: provides
    note: >
      Ставит вопрос в повестку совета и получает решение.
  - process_type: p.cap.prop
    relation: provides
    note: >
      Ставит вопрос в повестку совета и получает решение.
  - process_type: p.cap.rid
    relation: provides
    note: >
      Ставит вопрос в повестку совета и получает решение.
  - process_type: p.dbt.loan
    relation: provides
    note: >
      Ставит вопрос в повестку совета и получает решение.
  - process_type: p.edu.access
    relation: provides
    note: >
      Ставит вопрос в повестку совета и получает решение.
  - process_type: p.edu.rid
    relation: provides
    note: >
      Ставит вопрос в повестку совета и получает решение.
  - process_type: p.exp.expns
    relation: provides
    note: >
      Ставит вопрос в повестку совета и получает решение.
  - process_type: p.mkt.return
    relation: provides
    note: >
      Ставит вопрос в повестку совета и получает решение.
  - process_type: p.mkt.supply
    relation: provides
    note: >
      Ставит вопрос в повестку совета и получает решение.
  - process_type: p.mkt.wroff
    relation: provides
    note: >
      Ставит вопрос в повестку совета и получает решение.
  - process_type: p.reg.accept
    relation: provides
    note: >
      Ставит вопрос в повестку совета и получает решение.
  - process_type: p.reg.exit
    relation: provides
    note: >
      Ставит вопрос в повестку совета и получает решение.
  - process_type: p.wal.wthdrw
    relation: provides
    note: >
      Ставит вопрос в повестку совета и получает решение.
`,Yf=`# ─────────────────────────────────────────────────────────────────────────────
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
`,Jf=`# ─────────────────────────────────────────────────────────────────────────────
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
      Статус не хранится отдельно: контракт сравнивает срок с текущим временем.
    kind: normal

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

  - from: delegated | expired
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
`,Qf=`# ─────────────────────────────────────────────────────────────────────────────
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

`,Xf=`# ─────────────────────────────────────────────────────────────────────────────
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

`,Zf=`# ─────────────────────────────────────────────────────────────────────────────
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

# ── Связи с другими процессами ──────────────────────────────────────────
# Только по межконтрактным вызовам: consumes — процесс вызывает другой,
# provides — другой процесс вызывает этот.
related:
  - process_type: sov.authpkg
    relation: consumes
    note: >
      Вопрос выносится в повестку совета: голосование и решение идут по
      типовому порядку решений совета, итог возвращается в процесс.
`,Mo=Symbol.for("yaml.alias"),mo=Symbol.for("yaml.document"),$e=Symbol.for("yaml.map"),Xc=Symbol.for("yaml.pair"),_e=Symbol.for("yaml.scalar"),Nt=Symbol.for("yaml.seq"),Qn=Symbol.for("yaml.node.type"),Tt=n=>!!n&&typeof n=="object"&&n[Qn]===Mo,gs=n=>!!n&&typeof n=="object"&&n[Qn]===mo,gr=n=>!!n&&typeof n=="object"&&n[Qn]===$e,_n=n=>!!n&&typeof n=="object"&&n[Qn]===Xc,un=n=>!!n&&typeof n=="object"&&n[Qn]===_e,_r=n=>!!n&&typeof n=="object"&&n[Qn]===Nt;function hn(n){if(n&&typeof n=="object")switch(n[Qn]){case $e:case Nt:return!0}return!1}function gn(n){if(n&&typeof n=="object")switch(n[Qn]){case Mo:case $e:case _e:case Nt:return!0}return!1}const Zc=n=>(un(n)||hn(n))&&!!n.anchor,Ge=Symbol("break visit"),nm=Symbol("skip children"),Jt=Symbol("remove node");function xt(n,e){const t=em(e);gs(n)?lt(null,n.contents,t,Object.freeze([n]))===Jt&&(n.contents=null):lt(null,n,t,Object.freeze([]))}xt.BREAK=Ge;xt.SKIP=nm;xt.REMOVE=Jt;function lt(n,e,t,r){const s=tm(n,e,t,r);if(gn(s)||_n(s))return rm(n,r,s),lt(n,s,t,r);if(typeof s!="symbol"){if(hn(e)){r=Object.freeze(r.concat(e));for(let o=0;o<e.items.length;++o){const i=lt(o,e.items[o],t,r);if(typeof i=="number")o=i-1;else{if(i===Ge)return Ge;i===Jt&&(e.items.splice(o,1),o-=1)}}}else if(_n(e)){r=Object.freeze(r.concat(e));const o=lt("key",e.key,t,r);if(o===Ge)return Ge;o===Jt&&(e.key=null);const i=lt("value",e.value,t,r);if(i===Ge)return Ge;i===Jt&&(e.value=null)}}return s}function em(n){return typeof n=="object"&&(n.Collection||n.Node||n.Value)?Object.assign({Alias:n.Node,Map:n.Node,Scalar:n.Node,Seq:n.Node},n.Value&&{Map:n.Value,Scalar:n.Value,Seq:n.Value},n.Collection&&{Map:n.Collection,Seq:n.Collection},n):n}function tm(n,e,t,r){var s,o,i,a,c;if(typeof t=="function")return t(n,e,r);if(gr(e))return(s=t.Map)==null?void 0:s.call(t,n,e,r);if(_r(e))return(o=t.Seq)==null?void 0:o.call(t,n,e,r);if(_n(e))return(i=t.Pair)==null?void 0:i.call(t,n,e,r);if(un(e))return(a=t.Scalar)==null?void 0:a.call(t,n,e,r);if(Tt(e))return(c=t.Alias)==null?void 0:c.call(t,n,e,r)}function rm(n,e,t){const r=e[e.length-1];if(hn(r))r.items[n]=t;else if(_n(r))n==="key"?r.key=t:r.value=t;else if(gs(r))r.contents=t;else{const s=Tt(r)?"alias":"scalar";throw new Error(`Cannot replace node with ${s} parent`)}}const sm={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},om=n=>n.replace(/[!,[\]{}]/g,e=>sm[e]);class Ln{constructor(e,t){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},Ln.defaultYaml,e),this.tags=Object.assign({},Ln.defaultTags,t)}clone(){const e=new Ln(this.yaml,this.tags);return e.docStart=this.docStart,e}atDocument(){const e=new Ln(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:Ln.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},Ln.defaultTags);break}return e}add(e,t){this.atNextDocument&&(this.yaml={explicit:Ln.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},Ln.defaultTags),this.atNextDocument=!1);const r=e.trim().split(/[ \t]+/),s=r.shift();switch(s){case"%TAG":{if(r.length!==2&&(t(0,"%TAG directive should contain exactly two parts"),r.length<2))return!1;const[o,i]=r;return this.tags[o]=i,!0}case"%YAML":{if(this.yaml.explicit=!0,r.length!==1)return t(0,"%YAML directive should contain exactly one part"),!1;const[o]=r;if(o==="1.1"||o==="1.2")return this.yaml.version=o,!0;{const i=/^\d+\.\d+$/.test(o);return t(6,`Unsupported YAML version ${o}`,i),!1}}default:return t(0,`Unknown directive ${s}`,!0),!1}}tagName(e,t){if(e==="!")return"!";if(e[0]!=="!")return t(`Not a valid tag: ${e}`),null;if(e[1]==="<"){const i=e.slice(2,-1);return i==="!"||i==="!!"?(t(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==">"&&t("Verbatim tags must end with a >"),i)}const[,r,s]=e.match(/^(.*!)([^!]*)$/s);s||t(`The ${e} tag has no suffix`);const o=this.tags[r];if(o)try{return o+decodeURIComponent(s)}catch(i){return t(String(i)),null}return r==="!"?e:(t(`Could not resolve tag: ${e}`),null)}tagString(e){for(const[t,r]of Object.entries(this.tags))if(e.startsWith(r))return t+om(e.substring(r.length));return e[0]==="!"?e:`!<${e}>`}toString(e){const t=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],r=Object.entries(this.tags);let s;if(e&&r.length>0&&gn(e.contents)){const o={};xt(e.contents,(i,a)=>{gn(a)&&a.tag&&(o[a.tag]=!0)}),s=Object.keys(o)}else s=[];for(const[o,i]of r)o==="!!"&&i==="tag:yaml.org,2002:"||(!e||s.some(a=>a.startsWith(i)))&&t.push(`%TAG ${o} ${i}`);return t.join(`
`)}}Ln.defaultYaml={explicit:!1,version:"1.2"};Ln.defaultTags={"!!":"tag:yaml.org,2002:"};function nl(n){if(/[\x00-\x19\s,[\]{}]/.test(n)){const t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(n)}`;throw new Error(t)}return!0}function el(n){const e=new Set;return xt(n,{Value(t,r){r.anchor&&e.add(r.anchor)}}),e}function tl(n,e){for(let t=1;;++t){const r=`${n}${t}`;if(!e.has(r))return r}}function im(n,e){const t=[],r=new Map;let s=null;return{onAnchor:o=>{t.push(o),s??(s=el(n));const i=tl(e,s);return s.add(i),i},setAnchors:()=>{for(const o of t){const i=r.get(o);if(typeof i=="object"&&i.anchor&&(un(i.node)||hn(i.node)))i.node.anchor=i.anchor;else{const a=new Error("Failed to resolve repeated object (this should not happen)");throw a.source=o,a}}},sourceObjects:r}}function ut(n,e,t,r){if(r&&typeof r=="object")if(Array.isArray(r))for(let s=0,o=r.length;s<o;++s){const i=r[s],a=ut(n,r,String(s),i);a===void 0?delete r[s]:a!==i&&(r[s]=a)}else if(r instanceof Map)for(const s of Array.from(r.keys())){const o=r.get(s),i=ut(n,r,s,o);i===void 0?r.delete(s):i!==o&&r.set(s,i)}else if(r instanceof Set)for(const s of Array.from(r)){const o=ut(n,r,s,s);o===void 0?r.delete(s):o!==s&&(r.delete(s),r.add(o))}else for(const[s,o]of Object.entries(r)){const i=ut(n,r,s,o);i===void 0?delete r[s]:i!==o&&(r[s]=i)}return n.call(e,t,r)}function Jn(n,e,t){if(Array.isArray(n))return n.map((r,s)=>Jn(r,String(s),t));if(n&&typeof n.toJSON=="function"){if(!t||!Zc(n))return n.toJSON(e,t);const r={aliasCount:0,count:1,res:void 0};t.anchors.set(n,r),t.onCreate=o=>{r.res=o,delete t.onCreate};const s=n.toJSON(e,t);return t.onCreate&&t.onCreate(s),s}return typeof n=="bigint"&&!(t!=null&&t.keep)?Number(n):n}class Bo{constructor(e){Object.defineProperty(this,Qn,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:r,onAnchor:s,reviver:o}={}){if(!gs(e))throw new TypeError("A document argument is required");const i={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof r=="number"?r:100},a=Jn(this,"",i);if(typeof s=="function")for(const{count:c,res:l}of i.anchors.values())s(l,c);return typeof o=="function"?ut(o,{"":a},"",a):a}}class Fo extends Bo{constructor(e){super(Mo),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e,t){if((t==null?void 0:t.maxAliasCount)===0)throw new ReferenceError("Alias resolution is disabled");let r;t!=null&&t.aliasResolveCache?r=t.aliasResolveCache:(r=[],xt(e,{Node:(o,i)=>{(Tt(i)||Zc(i))&&r.push(i)}}),t&&(t.aliasResolveCache=r));let s;for(const o of r){if(o===this)break;o.anchor===this.source&&(s=o)}return s}toJSON(e,t){if(!t)return{source:this.source};const{anchors:r,doc:s,maxAliasCount:o}=t,i=this.resolve(s,t);if(!i){const c=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(c)}let a=r.get(i);if(a||(Jn(i,null,t),a=r.get(i)),(a==null?void 0:a.res)===void 0){const c="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(c)}if(o>=0&&(a.count+=1,a.aliasCount===0&&(a.aliasCount=Pr(s,i,r)),a.count*a.aliasCount>o)){const c="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(c)}return a.res}toString(e,t,r){const s=`*${this.source}`;if(e){if(nl(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const o=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(o)}if(e.implicitKey)return`${s} `}return s}}function Pr(n,e,t){if(Tt(e)){const r=e.resolve(n),s=t&&r&&t.get(r);return s?s.count*s.aliasCount:0}else if(hn(e)){let r=0;for(const s of e.items){const o=Pr(n,s,t);o>r&&(r=o)}return r}else if(_n(e)){const r=Pr(n,e.key,t),s=Pr(n,e.value,t);return Math.max(r,s)}return 1}const rl=n=>!n||typeof n!="function"&&typeof n!="object";class W extends Bo{constructor(e){super(_e),this.value=e}toJSON(e,t){return t!=null&&t.keep?this.value:Jn(this.value,e,t)}toString(){return String(this.value)}}W.BLOCK_FOLDED="BLOCK_FOLDED";W.BLOCK_LITERAL="BLOCK_LITERAL";W.PLAIN="PLAIN";W.QUOTE_DOUBLE="QUOTE_DOUBLE";W.QUOTE_SINGLE="QUOTE_SINGLE";const am="tag:yaml.org,2002:";function cm(n,e,t){if(e){const r=t.filter(o=>o.tag===e),s=r.find(o=>!o.format)??r[0];if(!s)throw new Error(`Tag ${e} not found`);return s}return t.find(r=>{var s;return((s=r.identify)==null?void 0:s.call(r,n))&&!r.format})}function cr(n,e,t){var d,p,f;if(gs(n)&&(n=n.contents),gn(n))return n;if(_n(n)){const y=(p=(d=t.schema[$e]).createNode)==null?void 0:p.call(d,t.schema,null,t);return y.items.push(n),y}(n instanceof String||n instanceof Number||n instanceof Boolean||typeof BigInt<"u"&&n instanceof BigInt)&&(n=n.valueOf());const{aliasDuplicateObjects:r,onAnchor:s,onTagObj:o,schema:i,sourceObjects:a}=t;let c;if(r&&n&&typeof n=="object"){if(c=a.get(n),c)return c.anchor??(c.anchor=s(n)),new Fo(c.anchor);c={anchor:null,node:null},a.set(n,c)}e!=null&&e.startsWith("!!")&&(e=am+e.slice(2));let l=cm(n,e,i.tags);if(!l){if(n&&typeof n.toJSON=="function"&&(n=n.toJSON()),!n||typeof n!="object"){const y=new W(n);return c&&(c.node=y),y}l=n instanceof Map?i[$e]:Symbol.iterator in Object(n)?i[Nt]:i[$e]}o&&(o(l),delete t.onTagObj);const u=l!=null&&l.createNode?l.createNode(t.schema,n,t):typeof((f=l==null?void 0:l.nodeClass)==null?void 0:f.from)=="function"?l.nodeClass.from(t.schema,n,t):new W(n);return e?u.tag=e:l.default||(u.tag=l.tag),c&&(c.node=u),u}function zr(n,e,t){let r=t;for(let s=e.length-1;s>=0;--s){const o=e[s];if(typeof o=="number"&&Number.isInteger(o)&&o>=0){const i=[];i[o]=r,r=i}else r=new Map([[o,r]])}return cr(r,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:n,sourceObjects:new Map})}const $t=n=>n==null||typeof n=="object"&&!!n[Symbol.iterator]().next().done;class sl extends Bo{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(r=>gn(r)||_n(r)?r.clone(e):r),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if($t(e))this.add(t);else{const[r,...s]=e,o=this.get(r,!0);if(hn(o))o.addIn(s,t);else if(o===void 0&&this.schema)this.set(r,zr(this.schema,s,t));else throw new Error(`Expected YAML collection at ${r}. Remaining path: ${s}`)}}deleteIn(e){const[t,...r]=e;if(r.length===0)return this.delete(t);const s=this.get(t,!0);if(hn(s))return s.deleteIn(r);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${r}`)}getIn(e,t){const[r,...s]=e,o=this.get(r,!0);return s.length===0?!t&&un(o)?o.value:o:hn(o)?o.getIn(s,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!_n(t))return!1;const r=t.value;return r==null||e&&un(r)&&r.value==null&&!r.commentBefore&&!r.comment&&!r.tag})}hasIn(e){const[t,...r]=e;if(r.length===0)return this.has(t);const s=this.get(t,!0);return hn(s)?s.hasIn(r):!1}setIn(e,t){const[r,...s]=e;if(s.length===0)this.set(r,t);else{const o=this.get(r,!0);if(hn(o))o.setIn(s,t);else if(o===void 0&&this.schema)this.set(r,zr(this.schema,s,t));else throw new Error(`Expected YAML collection at ${r}. Remaining path: ${s}`)}}}const lm=n=>n.replace(/^(?!$)(?: $)?/gm,"#");function Ne(n,e){return/^\n+$/.test(n)?n.substring(1):e?n.replace(/^(?! *$)/gm,e):n}const Je=(n,e,t)=>n.endsWith(`
`)?Ne(t,e):t.includes(`
`)?`
`+Ne(t,e):(n.endsWith(" ")?"":" ")+t,ol="flow",ho="block",Dr="quoted";function _s(n,e,t="flow",{indentAtStart:r,lineWidth:s=80,minContentWidth:o=20,onFold:i,onOverflow:a}={}){if(!s||s<0)return n;s<o&&(o=0);const c=Math.max(1+o,1+s-e.length);if(n.length<=c)return n;const l=[],u={};let d=s-e.length;typeof r=="number"&&(r>s-Math.max(2,o)?l.push(0):d=s-r);let p,f,y=!1,g=-1,b=-1,v=-1;t===ho&&(g=ta(n,g,e.length),g!==-1&&(d=g+c));for(let T;T=n[g+=1];){if(t===Dr&&T==="\\"){switch(b=g,n[g+1]){case"x":g+=3;break;case"u":g+=5;break;case"U":g+=9;break;default:g+=1}v=g}if(T===`
`)t===ho&&(g=ta(n,g,e.length)),d=g+e.length+c,p=void 0;else{if(T===" "&&f&&f!==" "&&f!==`
`&&f!=="	"){const A=n[g+1];A&&A!==" "&&A!==`
`&&A!=="	"&&(p=g)}if(g>=d)if(p)l.push(p),d=p+c,p=void 0;else if(t===Dr){for(;f===" "||f==="	";)f=T,T=n[g+=1],y=!0;const A=g>v+1?g-2:b-1;if(u[A])return n;l.push(A),u[A]=!0,d=A+c,p=void 0}else y=!0}f=T}if(y&&a&&a(),l.length===0)return n;i&&i();let w=n.slice(0,l[0]);for(let T=0;T<l.length;++T){const A=l[T],R=l[T+1]||n.length;A===0?w=`
${e}${n.slice(0,R)}`:(t===Dr&&u[A]&&(w+=`${n[A]}\\`),w+=`
${e}${n.slice(A+1,R)}`)}return w}function ta(n,e,t){let r=e,s=e+1,o=n[s];for(;o===" "||o==="	";)if(e<s+t)o=n[++e];else{do o=n[++e];while(o&&o!==`
`);r=e,s=e+1,o=n[s]}return r}const bs=(n,e)=>({indentAtStart:e?n.indent.length:n.indentAtStart,lineWidth:n.options.lineWidth,minContentWidth:n.options.minContentWidth}),ys=n=>/^(%|---|\.\.\.)/m.test(n);function um(n,e,t){if(!e||e<0)return!1;const r=e-t,s=n.length;if(s<=r)return!1;for(let o=0,i=0;o<s;++o)if(n[o]===`
`){if(o-i>r)return!0;if(i=o+1,s-i<=r)return!1}return!0}function Qt(n,e){const t=JSON.stringify(n);if(e.options.doubleQuotedAsJSON)return t;const{implicitKey:r}=e,s=e.options.doubleQuotedMinMultiLineLength,o=e.indent||(ys(n)?"  ":"");let i="",a=0;for(let c=0,l=t[c];l;l=t[++c])if(l===" "&&t[c+1]==="\\"&&t[c+2]==="n"&&(i+=t.slice(a,c)+"\\ ",c+=1,a=c,l="\\"),l==="\\")switch(t[c+1]){case"u":{i+=t.slice(a,c);const u=t.substr(c+2,4);switch(u){case"0000":i+="\\0";break;case"0007":i+="\\a";break;case"000b":i+="\\v";break;case"001b":i+="\\e";break;case"0085":i+="\\N";break;case"00a0":i+="\\_";break;case"2028":i+="\\L";break;case"2029":i+="\\P";break;default:u.substr(0,2)==="00"?i+="\\x"+u.substr(2):i+=t.substr(c,6)}c+=5,a=c+1}break;case"n":if(r||t[c+2]==='"'||t.length<s)c+=1;else{for(i+=t.slice(a,c)+`

`;t[c+2]==="\\"&&t[c+3]==="n"&&t[c+4]!=='"';)i+=`
`,c+=2;i+=o,t[c+2]===" "&&(i+="\\"),c+=1,a=c+1}break;default:c+=1}return i=a?i+t.slice(a):t,r?i:_s(i,o,Dr,bs(e,!1))}function go(n,e){if(e.options.singleQuote===!1||e.implicitKey&&n.includes(`
`)||/[ \t]\n|\n[ \t]/.test(n))return Qt(n,e);const t=e.indent||(ys(n)?"  ":""),r="'"+n.replace(/'/g,"''").replace(/\n+/g,`$&
${t}`)+"'";return e.implicitKey?r:_s(r,t,ol,bs(e,!1))}function dt(n,e){const{singleQuote:t}=e.options;let r;if(t===!1)r=Qt;else{const s=n.includes('"'),o=n.includes("'");s&&!o?r=go:o&&!s?r=Qt:r=t?go:Qt}return r(n,e)}let _o;try{_o=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{_o=/\n+(?!\n|$)/g}function Mr({comment:n,type:e,value:t},r,s,o){const{blockQuote:i,commentString:a,lineWidth:c}=r.options;if(!i||/\n[\t ]+$/.test(t))return dt(t,r);const l=r.indent||(r.forceBlockIndent||ys(t)?"  ":""),u=i==="literal"?!0:i==="folded"||e===W.BLOCK_FOLDED?!1:e===W.BLOCK_LITERAL?!0:!um(t,c,l.length);if(!t)return u?`|
`:`>
`;let d,p;for(p=t.length;p>0;--p){const R=t[p-1];if(R!==`
`&&R!=="	"&&R!==" ")break}let f=t.substring(p);const y=f.indexOf(`
`);y===-1?d="-":t===f||y!==f.length-1?(d="+",o&&o()):d="",f&&(t=t.slice(0,-f.length),f[f.length-1]===`
`&&(f=f.slice(0,-1)),f=f.replace(_o,`$&${l}`));let g=!1,b,v=-1;for(b=0;b<t.length;++b){const R=t[b];if(R===" ")g=!0;else if(R===`
`)v=b;else break}let w=t.substring(0,v<b?v+1:b);w&&(t=t.substring(w.length),w=w.replace(/\n+/g,`$&${l}`));let A=(g?l?"2":"1":"")+d;if(n&&(A+=" "+a(n.replace(/ ?[\r\n]+/g," ")),s&&s()),!u){const R=t.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${l}`);let j=!1;const M=bs(r,!0);i!=="folded"&&e!==W.BLOCK_FOLDED&&(M.onOverflow=()=>{j=!0});const F=_s(`${w}${R}${f}`,l,ho,M);if(!j)return`>${A}
${l}${F}`}return t=t.replace(/\n+/g,`$&${l}`),`|${A}
${l}${w}${t}${f}`}function dm(n,e,t,r){const{type:s,value:o}=n,{actualString:i,implicitKey:a,indent:c,indentStep:l,inFlow:u}=e;if(a&&o.includes(`
`)||u&&/[[\]{},]/.test(o))return dt(o,e);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(o))return a||u||!o.includes(`
`)?dt(o,e):Mr(n,e,t,r);if(!a&&!u&&s!==W.PLAIN&&o.includes(`
`))return Mr(n,e,t,r);if(ys(o)){if(c==="")return e.forceBlockIndent=!0,Mr(n,e,t,r);if(a&&c===l)return dt(o,e)}const d=o.replace(/\n+/g,`$&
${c}`);if(i){const p=g=>{var b;return g.default&&g.tag!=="tag:yaml.org,2002:str"&&((b=g.test)==null?void 0:b.test(d))},{compat:f,tags:y}=e.doc.schema;if(y.some(p)||f!=null&&f.some(p))return dt(o,e)}return a?d:_s(d,c,ol,bs(e,!1))}function $o(n,e,t,r){const{implicitKey:s,inFlow:o}=e,i=typeof n.value=="string"?n:Object.assign({},n,{value:String(n.value)});let{type:a}=n;a!==W.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(i.value)&&(a=W.QUOTE_DOUBLE);const c=u=>{switch(u){case W.BLOCK_FOLDED:case W.BLOCK_LITERAL:return s||o?dt(i.value,e):Mr(i,e,t,r);case W.QUOTE_DOUBLE:return Qt(i.value,e);case W.QUOTE_SINGLE:return go(i.value,e);case W.PLAIN:return dm(i,e,t,r);default:return null}};let l=c(a);if(l===null){const{defaultKeyType:u,defaultStringType:d}=e.options,p=s&&u||d;if(l=c(p),l===null)throw new Error(`Unsupported default string type ${p}`)}return l}function il(n,e){const t=Object.assign({blockQuote:!0,commentString:lm,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trailingComma:!1,trueStr:"true",verifyAliasOrder:!0},n.schema.toStringOptions,e);let r;switch(t.collectionStyle){case"block":r=!1;break;case"flow":r=!0;break;default:r=null}return{anchors:new Set,doc:n,flowCollectionPadding:t.flowCollectionPadding?" ":"",indent:"",indentStep:typeof t.indent=="number"?" ".repeat(t.indent):"  ",inFlow:r,options:t}}function pm(n,e){var s;if(e.tag){const o=n.filter(i=>i.tag===e.tag);if(o.length>0)return o.find(i=>i.format===e.format)??o[0]}let t,r;if(un(e)){r=e.value;let o=n.filter(i=>{var a;return(a=i.identify)==null?void 0:a.call(i,r)});if(o.length>1){const i=o.filter(a=>a.test);i.length>0&&(o=i)}t=o.find(i=>i.format===e.format)??o.find(i=>!i.format)}else r=e,t=n.find(o=>o.nodeClass&&r instanceof o.nodeClass);if(!t){const o=((s=r==null?void 0:r.constructor)==null?void 0:s.name)??(r===null?"null":typeof r);throw new Error(`Tag not resolved for ${o} value`)}return t}function fm(n,e,{anchors:t,doc:r}){if(!r.directives)return"";const s=[],o=(un(n)||hn(n))&&n.anchor;o&&nl(o)&&(t.add(o),s.push(`&${o}`));const i=n.tag??(e.default?null:e.tag);return i&&s.push(r.directives.tagString(i)),s.join(" ")}function Et(n,e,t,r){var c;if(_n(n))return n.toString(e,t,r);if(Tt(n)){if(e.doc.directives)return n.toString(e);if((c=e.resolvedAliases)!=null&&c.has(n))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(n):e.resolvedAliases=new Set([n]),n=n.resolve(e.doc)}let s;const o=gn(n)?n:e.doc.createNode(n,{onTagObj:l=>s=l});s??(s=pm(e.doc.schema.tags,o));const i=fm(o,s,e);i.length>0&&(e.indentAtStart=(e.indentAtStart??0)+i.length+1);const a=typeof s.stringify=="function"?s.stringify(o,e,t,r):un(o)?$o(o,e,t,r):o.toString(e,t,r);return i?un(o)||a[0]==="{"||a[0]==="["?`${i} ${a}`:`${i}
${e.indent}${a}`:a}function mm({key:n,value:e},t,r,s){const{allNullValues:o,doc:i,indent:a,indentStep:c,options:{commentString:l,indentSeq:u,simpleKeys:d}}=t;let p=gn(n)&&n.comment||null;if(d){if(p)throw new Error("With simple keys, key nodes cannot have comments");if(hn(n)||!gn(n)&&typeof n=="object"){const M="With simple keys, collection cannot be used as a key value";throw new Error(M)}}let f=!d&&(!n||p&&e==null&&!t.inFlow||hn(n)||(un(n)?n.type===W.BLOCK_FOLDED||n.type===W.BLOCK_LITERAL:typeof n=="object"));t=Object.assign({},t,{allNullValues:!1,implicitKey:!f&&(d||!o),indent:a+c});let y=!1,g=!1,b=Et(n,t,()=>y=!0,()=>g=!0);if(!f&&!t.inFlow&&b.length>1024){if(d)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");f=!0}if(t.inFlow){if(o||e==null)return y&&r&&r(),b===""?"?":f?`? ${b}`:b}else if(o&&!d||e==null&&f)return b=`? ${b}`,p&&!y?b+=Je(b,t.indent,l(p)):g&&s&&s(),b;y&&(p=null),f?(p&&(b+=Je(b,t.indent,l(p))),b=`? ${b}
${a}:`):(b=`${b}:`,p&&(b+=Je(b,t.indent,l(p))));let v,w,T;gn(e)?(v=!!e.spaceBefore,w=e.commentBefore,T=e.comment):(v=!1,w=null,T=null,e&&typeof e=="object"&&(e=i.createNode(e))),t.implicitKey=!1,!f&&!p&&un(e)&&(t.indentAtStart=b.length+1),g=!1,!u&&c.length>=2&&!t.inFlow&&!f&&_r(e)&&!e.flow&&!e.tag&&!e.anchor&&(t.indent=t.indent.substring(2));let A=!1;const R=Et(e,t,()=>A=!0,()=>g=!0);let j=" ";if(p||v||w){if(j=v?`
`:"",w){const M=l(w);j+=`
${Ne(M,t.indent)}`}R===""&&!t.inFlow?j===`
`&&T&&(j=`

`):j+=`
${t.indent}`}else if(!f&&hn(e)){const M=R[0],F=R.indexOf(`
`),D=F!==-1,H=t.inFlow??e.flow??e.items.length===0;if(D||!H){let J=!1;if(D&&(M==="&"||M==="!")){let I=R.indexOf(" ");M==="&"&&I!==-1&&I<F&&R[I+1]==="!"&&(I=R.indexOf(" ",I+1)),(I===-1||F<I)&&(J=!0)}J||(j=`
${t.indent}`)}}else(R===""||R[0]===`
`)&&(j="");return b+=j+R,t.inFlow?A&&r&&r():T&&!A?b+=Je(b,t.indent,l(T)):g&&s&&s(),b}function al(n,e){(n==="debug"||n==="warn")&&console.warn(e)}const Sr="<<",Te={identify:n=>n===Sr||typeof n=="symbol"&&n.description===Sr,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new W(Symbol(Sr)),{addToJSMap:cl}),stringify:()=>Sr},hm=(n,e)=>(Te.identify(e)||un(e)&&(!e.type||e.type===W.PLAIN)&&Te.identify(e.value))&&(n==null?void 0:n.doc.schema.tags.some(t=>t.tag===Te.tag&&t.default));function cl(n,e,t){const r=ll(n,t);if(_r(r))for(const s of r.items)Vs(n,e,s);else if(Array.isArray(r))for(const s of r)Vs(n,e,s);else Vs(n,e,r)}function Vs(n,e,t){const r=ll(n,t);if(!gr(r))throw new Error("Merge sources must be maps or map aliases");const s=r.toJSON(null,n,Map);for(const[o,i]of s)e instanceof Map?e.has(o)||e.set(o,i):e instanceof Set?e.add(o):Object.prototype.hasOwnProperty.call(e,o)||Object.defineProperty(e,o,{value:i,writable:!0,enumerable:!0,configurable:!0});return e}function ll(n,e){return n&&Tt(e)?e.resolve(n.doc,n):e}function ul(n,e,{key:t,value:r}){if(gn(t)&&t.addToJSMap)t.addToJSMap(n,e,r);else if(hm(n,t))cl(n,e,r);else{const s=Jn(t,"",n);if(e instanceof Map)e.set(s,Jn(r,s,n));else if(e instanceof Set)e.add(s);else{const o=gm(t,s,n),i=Jn(r,o,n);o in e?Object.defineProperty(e,o,{value:i,writable:!0,enumerable:!0,configurable:!0}):e[o]=i}}return e}function gm(n,e,t){if(e===null)return"";if(typeof e!="object")return String(e);if(gn(n)&&(t!=null&&t.doc)){const r=il(t.doc,{});r.anchors=new Set;for(const o of t.anchors.keys())r.anchors.add(o.anchor);r.inFlow=!0,r.inStringifyKey=!0;const s=n.toString(r);if(!t.mapKeyWarned){let o=JSON.stringify(s);o.length>40&&(o=o.substring(0,36)+'..."'),al(t.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${o}. Set mapAsMap: true to use object keys.`),t.mapKeyWarned=!0}return s}return JSON.stringify(e)}function jo(n,e,t){const r=cr(n,void 0,t),s=cr(e,void 0,t);return new jn(r,s)}class jn{constructor(e,t=null){Object.defineProperty(this,Qn,{value:Xc}),this.key=e,this.value=t}clone(e){let{key:t,value:r}=this;return gn(t)&&(t=t.clone(e)),gn(r)&&(r=r.clone(e)),new jn(t,r)}toJSON(e,t){const r=t!=null&&t.mapAsMap?new Map:{};return ul(t,r,this)}toString(e,t,r){return e!=null&&e.doc?mm(this,e,t,r):JSON.stringify(this)}}function dl(n,e,t){return(e.inFlow??n.flow?bm:_m)(n,e,t)}function _m({comment:n,items:e},t,{blockItemPrefix:r,flowChars:s,itemIndent:o,onChompKeep:i,onComment:a}){const{indent:c,options:{commentString:l}}=t,u=Object.assign({},t,{indent:o,type:null});let d=!1;const p=[];for(let y=0;y<e.length;++y){const g=e[y];let b=null;if(gn(g))!d&&g.spaceBefore&&p.push(""),Gr(t,p,g.commentBefore,d),g.comment&&(b=g.comment);else if(_n(g)){const w=gn(g.key)?g.key:null;w&&(!d&&w.spaceBefore&&p.push(""),Gr(t,p,w.commentBefore,d))}d=!1;let v=Et(g,u,()=>b=null,()=>d=!0);b&&(v+=Je(v,o,l(b))),d&&b&&(d=!1),p.push(r+v)}let f;if(p.length===0)f=s.start+s.end;else{f=p[0];for(let y=1;y<p.length;++y){const g=p[y];f+=g?`
${c}${g}`:`
`}}return n?(f+=`
`+Ne(l(n),c),a&&a()):d&&i&&i(),f}function bm({items:n},e,{flowChars:t,itemIndent:r}){const{indent:s,indentStep:o,flowCollectionPadding:i,options:{commentString:a}}=e;r+=o;const c=Object.assign({},e,{indent:r,inFlow:!0,type:null});let l=!1,u=0;const d=[];for(let y=0;y<n.length;++y){const g=n[y];let b=null;if(gn(g))g.spaceBefore&&d.push(""),Gr(e,d,g.commentBefore,!1),g.comment&&(b=g.comment);else if(_n(g)){const w=gn(g.key)?g.key:null;w&&(w.spaceBefore&&d.push(""),Gr(e,d,w.commentBefore,!1),w.comment&&(l=!0));const T=gn(g.value)?g.value:null;T?(T.comment&&(b=T.comment),T.commentBefore&&(l=!0)):g.value==null&&(w!=null&&w.comment)&&(b=w.comment)}b&&(l=!0);let v=Et(g,c,()=>b=null);l||(l=d.length>u||v.includes(`
`)),y<n.length-1?v+=",":e.options.trailingComma&&(e.options.lineWidth>0&&(l||(l=d.reduce((w,T)=>w+T.length+2,2)+(v.length+2)>e.options.lineWidth)),l&&(v+=",")),b&&(v+=Je(v,r,a(b))),d.push(v),u=d.length}const{start:p,end:f}=t;if(d.length===0)return p+f;if(!l){const y=d.reduce((g,b)=>g+b.length+2,2);l=e.options.lineWidth>0&&y>e.options.lineWidth}if(l){let y=p;for(const g of d)y+=g?`
${o}${s}${g}`:`
`;return`${y}
${s}${f}`}else return`${p}${i}${d.join(" ")}${i}${f}`}function Gr({indent:n,options:{commentString:e}},t,r,s){if(r&&s&&(r=r.replace(/^\n+/,"")),r){const o=Ne(e(r),n);t.push(o.trimStart())}}function Qe(n,e){const t=un(e)?e.value:e;for(const r of n)if(_n(r)&&(r.key===e||r.key===t||un(r.key)&&r.key.value===t))return r}class Yn extends sl{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super($e,e),this.items=[]}static from(e,t,r){const{keepUndefined:s,replacer:o}=r,i=new this(e),a=(c,l)=>{if(typeof o=="function")l=o.call(t,c,l);else if(Array.isArray(o)&&!o.includes(c))return;(l!==void 0||s)&&i.items.push(jo(c,l,r))};if(t instanceof Map)for(const[c,l]of t)a(c,l);else if(t&&typeof t=="object")for(const c of Object.keys(t))a(c,t[c]);return typeof e.sortMapEntries=="function"&&i.items.sort(e.sortMapEntries),i}add(e,t){var i;let r;_n(e)?r=e:!e||typeof e!="object"||!("key"in e)?r=new jn(e,e==null?void 0:e.value):r=new jn(e.key,e.value);const s=Qe(this.items,r.key),o=(i=this.schema)==null?void 0:i.sortMapEntries;if(s){if(!t)throw new Error(`Key ${r.key} already set`);un(s.value)&&rl(r.value)?s.value.value=r.value:s.value=r.value}else if(o){const a=this.items.findIndex(c=>o(r,c)<0);a===-1?this.items.push(r):this.items.splice(a,0,r)}else this.items.push(r)}delete(e){const t=Qe(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){const r=Qe(this.items,e),s=r==null?void 0:r.value;return(!t&&un(s)?s.value:s)??void 0}has(e){return!!Qe(this.items,e)}set(e,t){this.add(new jn(e,t),!0)}toJSON(e,t,r){const s=r?new r:t!=null&&t.mapAsMap?new Map:{};t!=null&&t.onCreate&&t.onCreate(s);for(const o of this.items)ul(t,s,o);return s}toString(e,t,r){if(!e)return JSON.stringify(this);for(const s of this.items)if(!_n(s))throw new Error(`Map items must all be pairs; found ${JSON.stringify(s)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),dl(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:r,onComment:t})}}const Ot={collection:"map",default:!0,nodeClass:Yn,tag:"tag:yaml.org,2002:map",resolve(n,e){return gr(n)||e("Expected a mapping for this tag"),n},createNode:(n,e,t)=>Yn.from(n,e,t)};class nt extends sl{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(Nt,e),this.items=[]}add(e){this.items.push(e)}delete(e){const t=Er(e);return typeof t!="number"?!1:this.items.splice(t,1).length>0}get(e,t){const r=Er(e);if(typeof r!="number")return;const s=this.items[r];return!t&&un(s)?s.value:s}has(e){const t=Er(e);return typeof t=="number"&&t<this.items.length}set(e,t){const r=Er(e);if(typeof r!="number")throw new Error(`Expected a valid index, not ${e}.`);const s=this.items[r];un(s)&&rl(t)?s.value=t:this.items[r]=t}toJSON(e,t){const r=[];t!=null&&t.onCreate&&t.onCreate(r);let s=0;for(const o of this.items)r.push(Jn(o,String(s++),t));return r}toString(e,t,r){return e?dl(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:r,onComment:t}):JSON.stringify(this)}static from(e,t,r){const{replacer:s}=r,o=new this(e);if(t&&Symbol.iterator in Object(t)){let i=0;for(let a of t){if(typeof s=="function"){const c=t instanceof Set?a:String(i++);a=s.call(t,c,a)}o.items.push(cr(a,void 0,r))}}return o}}function Er(n){let e=un(n)?n.value:n;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}const Rt={collection:"seq",default:!0,nodeClass:nt,tag:"tag:yaml.org,2002:seq",resolve(n,e){return _r(n)||e("Expected a sequence for this tag"),n},createNode:(n,e,t)=>nt.from(n,e,t)},ws={identify:n=>typeof n=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:n=>n,stringify(n,e,t,r){return e=Object.assign({actualString:!0},e),$o(n,e,t,r)}},vs={identify:n=>n==null,createNode:()=>new W(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new W(null),stringify:({source:n},e)=>typeof n=="string"&&vs.test.test(n)?n:e.options.nullStr},Uo={identify:n=>typeof n=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:n=>new W(n[0]==="t"||n[0]==="T"),stringify({source:n,value:e},t){if(n&&Uo.test.test(n)){const r=n[0]==="t"||n[0]==="T";if(e===r)return n}return e?t.options.trueStr:t.options.falseStr}};function oe({format:n,minFractionDigits:e,tag:t,value:r}){if(typeof r=="bigint")return String(r);const s=typeof r=="number"?r:Number(r);if(!isFinite(s))return isNaN(s)?".nan":s<0?"-.inf":".inf";let o=Object.is(r,-0)?"-0":JSON.stringify(r);if(!n&&e&&(!t||t==="tag:yaml.org,2002:float")&&/^-?\d/.test(o)&&!o.includes("e")){let i=o.indexOf(".");i<0&&(i=o.length,o+=".");let a=e-(o.length-i-1);for(;a-- >0;)o+="0"}return o}const pl={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:n=>n.slice(-3).toLowerCase()==="nan"?NaN:n[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:oe},fl={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:n=>parseFloat(n),stringify(n){const e=Number(n.value);return isFinite(e)?e.toExponential():oe(n)}},ml={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(n){const e=new W(parseFloat(n)),t=n.indexOf(".");return t!==-1&&n[n.length-1]==="0"&&(e.minFractionDigits=n.length-t-1),e},stringify:oe},ks=n=>typeof n=="bigint"||Number.isInteger(n),Ko=(n,e,t,{intAsBigInt:r})=>r?BigInt(n):parseInt(n.substring(e),t);function hl(n,e,t){const{value:r}=n;return ks(r)&&r>=0?t+r.toString(e):oe(n)}const gl={identify:n=>ks(n)&&n>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(n,e,t)=>Ko(n,2,8,t),stringify:n=>hl(n,8,"0o")},_l={identify:ks,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(n,e,t)=>Ko(n,0,10,t),stringify:oe},bl={identify:n=>ks(n)&&n>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(n,e,t)=>Ko(n,2,16,t),stringify:n=>hl(n,16,"0x")},ym=[Ot,Rt,ws,vs,Uo,gl,_l,bl,pl,fl,ml];function ra(n){return typeof n=="bigint"||Number.isInteger(n)}const Ar=({value:n})=>JSON.stringify(n),wm=[{identify:n=>typeof n=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:n=>n,stringify:Ar},{identify:n=>n==null,createNode:()=>new W(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:Ar},{identify:n=>typeof n=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:n=>n==="true",stringify:Ar},{identify:ra,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(n,e,{intAsBigInt:t})=>t?BigInt(n):parseInt(n,10),stringify:({value:n})=>ra(n)?n.toString():JSON.stringify(n)},{identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:n=>parseFloat(n),stringify:Ar}],vm={default:!0,tag:"",test:/^/,resolve(n,e){return e(`Unresolved plain scalar ${JSON.stringify(n)}`),n}},km=[Ot,Rt].concat(wm,vm),Vo={identify:n=>n instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(n,e){if(typeof atob=="function"){const t=atob(n.replace(/[\n\r]/g,"")),r=new Uint8Array(t.length);for(let s=0;s<t.length;++s)r[s]=t.charCodeAt(s);return r}else return e("This environment does not support reading binary tags; either Buffer or atob is required"),n},stringify({comment:n,type:e,value:t},r,s,o){if(!t)return"";const i=t;let a;if(typeof btoa=="function"){let c="";for(let l=0;l<i.length;++l)c+=String.fromCharCode(i[l]);a=btoa(c)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(e??(e=W.BLOCK_LITERAL),e!==W.QUOTE_DOUBLE){const c=Math.max(r.options.lineWidth-r.indent.length,r.options.minContentWidth),l=Math.ceil(a.length/c),u=new Array(l);for(let d=0,p=0;d<l;++d,p+=c)u[d]=a.substr(p,c);a=u.join(e===W.BLOCK_LITERAL?`
`:" ")}return $o({comment:n,type:e,value:a},r,s,o)}};function yl(n,e){if(_r(n))for(let t=0;t<n.items.length;++t){let r=n.items[t];if(!_n(r)){if(gr(r)){r.items.length>1&&e("Each pair must have its own sequence indicator");const s=r.items[0]||new jn(new W(null));if(r.commentBefore&&(s.key.commentBefore=s.key.commentBefore?`${r.commentBefore}
${s.key.commentBefore}`:r.commentBefore),r.comment){const o=s.value??s.key;o.comment=o.comment?`${r.comment}
${o.comment}`:r.comment}r=s}n.items[t]=_n(r)?r:new jn(r)}}else e("Expected a sequence for this tag");return n}function wl(n,e,t){const{replacer:r}=t,s=new nt(n);s.tag="tag:yaml.org,2002:pairs";let o=0;if(e&&Symbol.iterator in Object(e))for(let i of e){typeof r=="function"&&(i=r.call(e,String(o++),i));let a,c;if(Array.isArray(i))if(i.length===2)a=i[0],c=i[1];else throw new TypeError(`Expected [key, value] tuple: ${i}`);else if(i&&i instanceof Object){const l=Object.keys(i);if(l.length===1)a=l[0],c=i[a];else throw new TypeError(`Expected tuple with one key, not ${l.length} keys`)}else a=i;s.items.push(jo(a,c,t))}return s}const qo={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:yl,createNode:wl};class _t extends nt{constructor(){super(),this.add=Yn.prototype.add.bind(this),this.delete=Yn.prototype.delete.bind(this),this.get=Yn.prototype.get.bind(this),this.has=Yn.prototype.has.bind(this),this.set=Yn.prototype.set.bind(this),this.tag=_t.tag}toJSON(e,t){if(!t)return super.toJSON(e);const r=new Map;t!=null&&t.onCreate&&t.onCreate(r);for(const s of this.items){let o,i;if(_n(s)?(o=Jn(s.key,"",t),i=Jn(s.value,o,t)):o=Jn(s,"",t),r.has(o))throw new Error("Ordered maps must not include duplicate keys");r.set(o,i)}return r}static from(e,t,r){const s=wl(e,t,r),o=new this;return o.items=s.items,o}}_t.tag="tag:yaml.org,2002:omap";const Ho={collection:"seq",identify:n=>n instanceof Map,nodeClass:_t,default:!1,tag:"tag:yaml.org,2002:omap",resolve(n,e){const t=yl(n,e),r=[];for(const{key:s}of t.items)un(s)&&(r.includes(s.value)?e(`Ordered maps must not include duplicate keys: ${s.value}`):r.push(s.value));return Object.assign(new _t,t)},createNode:(n,e,t)=>_t.from(n,e,t)};function vl({value:n,source:e},t){return e&&(n?kl:Sl).test.test(e)?e:n?t.options.trueStr:t.options.falseStr}const kl={identify:n=>n===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new W(!0),stringify:vl},Sl={identify:n=>n===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new W(!1),stringify:vl},Sm={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:n=>n.slice(-3).toLowerCase()==="nan"?NaN:n[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:oe},Em={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:n=>parseFloat(n.replace(/_/g,"")),stringify(n){const e=Number(n.value);return isFinite(e)?e.toExponential():oe(n)}},Am={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(n){const e=new W(parseFloat(n.replace(/_/g,""))),t=n.indexOf(".");if(t!==-1){const r=n.substring(t+1).replace(/_/g,"");r[r.length-1]==="0"&&(e.minFractionDigits=r.length)}return e},stringify:oe},br=n=>typeof n=="bigint"||Number.isInteger(n);function Ss(n,e,t,{intAsBigInt:r}){const s=n[0];if((s==="-"||s==="+")&&(e+=1),n=n.substring(e).replace(/_/g,""),r){switch(t){case 2:n=`0b${n}`;break;case 8:n=`0o${n}`;break;case 16:n=`0x${n}`;break}const i=BigInt(n);return s==="-"?BigInt(-1)*i:i}const o=parseInt(n,t);return s==="-"?-1*o:o}function zo(n,e,t){const{value:r}=n;if(br(r)){const s=r.toString(e);return r<0?"-"+t+s.substr(1):t+s}return oe(n)}const Nm={identify:br,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(n,e,t)=>Ss(n,2,2,t),stringify:n=>zo(n,2,"0b")},Tm={identify:br,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(n,e,t)=>Ss(n,1,8,t),stringify:n=>zo(n,8,"0")},xm={identify:br,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(n,e,t)=>Ss(n,0,10,t),stringify:oe},Om={identify:br,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(n,e,t)=>Ss(n,2,16,t),stringify:n=>zo(n,16,"0x")};class bt extends Yn{constructor(e){super(e),this.tag=bt.tag}add(e){let t;_n(e)?t=e:e&&typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?t=new jn(e.key,null):t=new jn(e,null),Qe(this.items,t.key)||this.items.push(t)}get(e,t){const r=Qe(this.items,e);return!t&&_n(r)?un(r.key)?r.key.value:r.key:r}set(e,t){if(typeof t!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);const r=Qe(this.items,e);r&&!t?this.items.splice(this.items.indexOf(r),1):!r&&t&&this.items.push(new jn(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,r){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,r);throw new Error("Set items must all have null values")}static from(e,t,r){const{replacer:s}=r,o=new this(e);if(t&&Symbol.iterator in Object(t))for(let i of t)typeof s=="function"&&(i=s.call(t,i,i)),o.items.push(jo(i,null,r));return o}}bt.tag="tag:yaml.org,2002:set";const Go={collection:"map",identify:n=>n instanceof Set,nodeClass:bt,default:!1,tag:"tag:yaml.org,2002:set",createNode:(n,e,t)=>bt.from(n,e,t),resolve(n,e){if(gr(n)){if(n.hasAllNullValues(!0))return Object.assign(new bt,n);e("Set items must all have null values")}else e("Expected a mapping for this tag");return n}};function Wo(n,e){const t=n[0],r=t==="-"||t==="+"?n.substring(1):n,s=i=>e?BigInt(i):Number(i),o=r.replace(/_/g,"").split(":").reduce((i,a)=>i*s(60)+s(a),s(0));return t==="-"?s(-1)*o:o}function El(n){let{value:e}=n,t=i=>i;if(typeof e=="bigint")t=i=>BigInt(i);else if(isNaN(e)||!isFinite(e))return oe(n);let r="";e<0&&(r="-",e*=t(-1));const s=t(60),o=[e%s];return e<60?o.unshift(0):(e=(e-o[0])/s,o.unshift(e%s),e>=60&&(e=(e-o[0])/s,o.unshift(e))),r+o.map(i=>String(i).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const Al={identify:n=>typeof n=="bigint"||Number.isInteger(n),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(n,e,{intAsBigInt:t})=>Wo(n,t),stringify:El},Nl={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:n=>Wo(n,!1),stringify:El},Es={identify:n=>n instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(n){const e=n.match(Es.test);if(!e)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,t,r,s,o,i,a]=e.map(Number),c=e[7]?Number((e[7]+"00").substr(1,3)):0;let l=Date.UTC(t,r-1,s,o||0,i||0,a||0,c);const u=e[8];if(u&&u!=="Z"){let d=Wo(u,!1);Math.abs(d)<30&&(d*=60),l-=6e4*d}return new Date(l)},stringify:({value:n})=>(n==null?void 0:n.toISOString().replace(/(T00:00:00)?\.000Z$/,""))??""},sa=[Ot,Rt,ws,vs,kl,Sl,Nm,Tm,xm,Om,Sm,Em,Am,Vo,Te,Ho,qo,Go,Al,Nl,Es],oa=new Map([["core",ym],["failsafe",[Ot,Rt,ws]],["json",km],["yaml11",sa],["yaml-1.1",sa]]),ia={binary:Vo,bool:Uo,float:ml,floatExp:fl,floatNaN:pl,floatTime:Nl,int:_l,intHex:bl,intOct:gl,intTime:Al,map:Ot,merge:Te,null:vs,omap:Ho,pairs:qo,seq:Rt,set:Go,timestamp:Es},Rm={"tag:yaml.org,2002:binary":Vo,"tag:yaml.org,2002:merge":Te,"tag:yaml.org,2002:omap":Ho,"tag:yaml.org,2002:pairs":qo,"tag:yaml.org,2002:set":Go,"tag:yaml.org,2002:timestamp":Es};function qs(n,e,t){const r=oa.get(e);if(r&&!n)return t&&!r.includes(Te)?r.concat(Te):r.slice();let s=r;if(!s)if(Array.isArray(n))s=[];else{const o=Array.from(oa.keys()).filter(i=>i!=="yaml11").map(i=>JSON.stringify(i)).join(", ");throw new Error(`Unknown schema "${e}"; use one of ${o} or define customTags array`)}if(Array.isArray(n))for(const o of n)s=s.concat(o);else typeof n=="function"&&(s=n(s.slice()));return t&&(s=s.concat(Te)),s.reduce((o,i)=>{const a=typeof i=="string"?ia[i]:i;if(!a){const c=JSON.stringify(i),l=Object.keys(ia).map(u=>JSON.stringify(u)).join(", ");throw new Error(`Unknown custom tag ${c}; use one of ${l}`)}return o.includes(a)||o.push(a),o},[])}const Cm=(n,e)=>n.key<e.key?-1:n.key>e.key?1:0;class Yo{constructor({compat:e,customTags:t,merge:r,resolveKnownTags:s,schema:o,sortMapEntries:i,toStringDefaults:a}){this.compat=Array.isArray(e)?qs(e,"compat"):e?qs(null,e):null,this.name=typeof o=="string"&&o||"core",this.knownTags=s?Rm:{},this.tags=qs(t,this.name,r),this.toStringOptions=a??null,Object.defineProperty(this,$e,{value:Ot}),Object.defineProperty(this,_e,{value:ws}),Object.defineProperty(this,Nt,{value:Rt}),this.sortMapEntries=typeof i=="function"?i:i===!0?Cm:null}clone(){const e=Object.create(Yo.prototype,Object.getOwnPropertyDescriptors(this));return e.tags=this.tags.slice(),e}}function Im(n,e){var c;const t=[];let r=e.directives===!0;if(e.directives!==!1&&n.directives){const l=n.directives.toString(n);l?(t.push(l),r=!0):n.directives.docStart&&(r=!0)}r&&t.push("---");const s=il(n,e),{commentString:o}=s.options;if(n.commentBefore){t.length!==1&&t.unshift("");const l=o(n.commentBefore);t.unshift(Ne(l,""))}let i=!1,a=null;if(n.contents){if(gn(n.contents)){if(n.contents.spaceBefore&&r&&t.push(""),n.contents.commentBefore){const d=o(n.contents.commentBefore);t.push(Ne(d,""))}s.forceBlockIndent=!!n.comment,a=n.contents.comment}const l=a?void 0:()=>i=!0;let u=Et(n.contents,s,()=>a=null,l);a&&(u+=Je(u,"",o(a))),(u[0]==="|"||u[0]===">")&&t[t.length-1]==="---"?t[t.length-1]=`--- ${u}`:t.push(u)}else t.push(Et(n.contents,s));if((c=n.directives)!=null&&c.docEnd)if(n.comment){const l=o(n.comment);l.includes(`
`)?(t.push("..."),t.push(Ne(l,""))):t.push(`... ${l}`)}else t.push("...");else{let l=n.comment;l&&i&&(l=l.replace(/^\n+/,"")),l&&((!i||a)&&t[t.length-1]!==""&&t.push(""),t.push(Ne(o(l),"")))}return t.join(`
`)+`
`}class As{constructor(e,t,r){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,Qn,{value:mo});let s=null;typeof t=="function"||Array.isArray(t)?s=t:r===void 0&&t&&(r=t,t=void 0);const o=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},r);this.options=o;let{version:i}=o;r!=null&&r._directives?(this.directives=r._directives.atDocument(),this.directives.yaml.explicit&&(i=this.directives.yaml.version)):this.directives=new Ln({version:i}),this.setSchema(i,r),this.contents=e===void 0?null:this.createNode(e,s,r)}clone(){const e=Object.create(As.prototype,{[Qn]:{value:mo}});return e.commentBefore=this.commentBefore,e.comment=this.comment,e.errors=this.errors.slice(),e.warnings=this.warnings.slice(),e.options=Object.assign({},this.options),this.directives&&(e.directives=this.directives.clone()),e.schema=this.schema.clone(),e.contents=gn(this.contents)?this.contents.clone(e.schema):this.contents,this.range&&(e.range=this.range.slice()),e}add(e){ot(this.contents)&&this.contents.add(e)}addIn(e,t){ot(this.contents)&&this.contents.addIn(e,t)}createAlias(e,t){if(!e.anchor){const r=el(this);e.anchor=!t||r.has(t)?tl(t||"a",r):t}return new Fo(e.anchor)}createNode(e,t,r){let s;if(typeof t=="function")e=t.call({"":e},"",e),s=t;else if(Array.isArray(t)){const b=w=>typeof w=="number"||w instanceof String||w instanceof Number,v=t.filter(b).map(String);v.length>0&&(t=t.concat(v)),s=t}else r===void 0&&t&&(r=t,t=void 0);const{aliasDuplicateObjects:o,anchorPrefix:i,flow:a,keepUndefined:c,onTagObj:l,tag:u}=r??{},{onAnchor:d,setAnchors:p,sourceObjects:f}=im(this,i||"a"),y={aliasDuplicateObjects:o??!0,keepUndefined:c??!1,onAnchor:d,onTagObj:l,replacer:s,schema:this.schema,sourceObjects:f},g=cr(e,u,y);return a&&hn(g)&&(g.flow=!0),p(),g}createPair(e,t,r={}){const s=this.createNode(e,null,r),o=this.createNode(t,null,r);return new jn(s,o)}delete(e){return ot(this.contents)?this.contents.delete(e):!1}deleteIn(e){return $t(e)?this.contents==null?!1:(this.contents=null,!0):ot(this.contents)?this.contents.deleteIn(e):!1}get(e,t){return hn(this.contents)?this.contents.get(e,t):void 0}getIn(e,t){return $t(e)?!t&&un(this.contents)?this.contents.value:this.contents:hn(this.contents)?this.contents.getIn(e,t):void 0}has(e){return hn(this.contents)?this.contents.has(e):!1}hasIn(e){return $t(e)?this.contents!==void 0:hn(this.contents)?this.contents.hasIn(e):!1}set(e,t){this.contents==null?this.contents=zr(this.schema,[e],t):ot(this.contents)&&this.contents.set(e,t)}setIn(e,t){$t(e)?this.contents=t:this.contents==null?this.contents=zr(this.schema,Array.from(e),t):ot(this.contents)&&this.contents.setIn(e,t)}setSchema(e,t={}){typeof e=="number"&&(e=String(e));let r;switch(e){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new Ln({version:"1.1"}),r={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=e:this.directives=new Ln({version:e}),r={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,r=null;break;default:{const s=JSON.stringify(e);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${s}`)}}if(t.schema instanceof Object)this.schema=t.schema;else if(r)this.schema=new Yo(Object.assign(r,t));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:e,jsonArg:t,mapAsMap:r,maxAliasCount:s,onAnchor:o,reviver:i}={}){const a={anchors:new Map,doc:this,keep:!e,mapAsMap:r===!0,mapKeyWarned:!1,maxAliasCount:typeof s=="number"?s:100},c=Jn(this.contents,t??"",a);if(typeof o=="function")for(const{count:l,res:u}of a.anchors.values())o(u,l);return typeof i=="function"?ut(i,{"":c},"",c):c}toJSON(e,t){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:t})}toString(e={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){const t=JSON.stringify(e.indent);throw new Error(`"indent" option must be a positive integer, not ${t}`)}return Im(this,e)}}function ot(n){if(hn(n))return!0;throw new Error("Expected a YAML collection as document contents")}class Tl extends Error{constructor(e,t,r,s){super(),this.name=e,this.code=r,this.message=s,this.pos=t}}class jt extends Tl{constructor(e,t,r){super("YAMLParseError",e,t,r)}}class Lm extends Tl{constructor(e,t,r){super("YAMLWarning",e,t,r)}}const aa=(n,e)=>t=>{if(t.pos[0]===-1)return;t.linePos=t.pos.map(a=>e.linePos(a));const{line:r,col:s}=t.linePos[0];t.message+=` at line ${r}, column ${s}`;let o=s-1,i=n.substring(e.lineStarts[r-1],e.lineStarts[r]).replace(/[\n\r]+$/,"");if(o>=60&&i.length>80){const a=Math.min(o-39,i.length-79);i="…"+i.substring(a),o-=a-1}if(i.length>80&&(i=i.substring(0,79)+"…"),r>1&&/^ *$/.test(i.substring(0,o))){let a=n.substring(e.lineStarts[r-2],e.lineStarts[r-1]);a.length>80&&(a=a.substring(0,79)+`…
`),i=a+i}if(/[^ ]/.test(i)){let a=1;const c=t.linePos[1];(c==null?void 0:c.line)===r&&c.col>s&&(a=Math.max(1,Math.min(c.col-s,80-o)));const l=" ".repeat(o)+"^".repeat(a);t.message+=`:

${i}
${l}
`}};function At(n,{flow:e,indicator:t,next:r,offset:s,onError:o,parentIndent:i,startOnNewline:a}){let c=!1,l=a,u=a,d="",p="",f=!1,y=!1,g=null,b=null,v=null,w=null,T=null,A=null,R=null;for(const F of n)switch(y&&(F.type!=="space"&&F.type!=="newline"&&F.type!=="comma"&&o(F.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),y=!1),g&&(l&&F.type!=="comment"&&F.type!=="newline"&&o(g,"TAB_AS_INDENT","Tabs are not allowed as indentation"),g=null),F.type){case"space":!e&&(t!=="doc-start"||(r==null?void 0:r.type)!=="flow-collection")&&F.source.includes("	")&&(g=F),u=!0;break;case"comment":{u||o(F,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const D=F.source.substring(1)||" ";d?d+=p+D:d=D,p="",l=!1;break}case"newline":l?d?d+=F.source:(!A||t!=="seq-item-ind")&&(c=!0):p+=F.source,l=!0,f=!0,(b||v)&&(w=F),u=!0;break;case"anchor":b&&o(F,"MULTIPLE_ANCHORS","A node can have at most one anchor"),F.source.endsWith(":")&&o(F.offset+F.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),b=F,R??(R=F.offset),l=!1,u=!1,y=!0;break;case"tag":{v&&o(F,"MULTIPLE_TAGS","A node can have at most one tag"),v=F,R??(R=F.offset),l=!1,u=!1,y=!0;break}case t:(b||v)&&o(F,"BAD_PROP_ORDER",`Anchors and tags must be after the ${F.source} indicator`),A&&o(F,"UNEXPECTED_TOKEN",`Unexpected ${F.source} in ${e??"collection"}`),A=F,l=t==="seq-item-ind"||t==="explicit-key-ind",u=!1;break;case"comma":if(e){T&&o(F,"UNEXPECTED_TOKEN",`Unexpected , in ${e}`),T=F,l=!1,u=!1;break}default:o(F,"UNEXPECTED_TOKEN",`Unexpected ${F.type} token`),l=!1,u=!1}const j=n[n.length-1],M=j?j.offset+j.source.length:s;return y&&r&&r.type!=="space"&&r.type!=="newline"&&r.type!=="comma"&&(r.type!=="scalar"||r.source!=="")&&o(r.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),g&&(l&&g.indent<=i||(r==null?void 0:r.type)==="block-map"||(r==null?void 0:r.type)==="block-seq")&&o(g,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:T,found:A,spaceBefore:c,comment:d,hasNewline:f,anchor:b,tag:v,newlineAfterProp:w,end:M,start:R??M}}function lr(n){if(!n)return null;switch(n.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(n.source.includes(`
`))return!0;if(n.end){for(const e of n.end)if(e.type==="newline")return!0}return!1;case"flow-collection":for(const e of n.items){for(const t of e.start)if(t.type==="newline")return!0;if(e.sep){for(const t of e.sep)if(t.type==="newline")return!0}if(lr(e.key)||lr(e.value))return!0}return!1;default:return!0}}function bo(n,e,t){if((e==null?void 0:e.type)==="flow-collection"){const r=e.end[0];r.indent===n&&(r.source==="]"||r.source==="}")&&lr(e)&&t(r,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function xl(n,e,t){const{uniqueKeys:r}=n.options;if(r===!1)return!1;const s=typeof r=="function"?r:(o,i)=>o===i||un(o)&&un(i)&&o.value===i.value;return e.some(o=>s(o.key,t))}const ca="All mapping items must start at the same column";function Pm({composeNode:n,composeEmptyNode:e},t,r,s,o){var u;const i=(o==null?void 0:o.nodeClass)??Yn,a=new i(t.schema);t.atRoot&&(t.atRoot=!1);let c=r.offset,l=null;for(const d of r.items){const{start:p,key:f,sep:y,value:g}=d,b=At(p,{indicator:"explicit-key-ind",next:f??(y==null?void 0:y[0]),offset:c,onError:s,parentIndent:r.indent,startOnNewline:!0}),v=!b.found;if(v){if(f&&(f.type==="block-seq"?s(c,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in f&&f.indent!==r.indent&&s(c,"BAD_INDENT",ca)),!b.anchor&&!b.tag&&!y){l=b.end,b.comment&&(a.comment?a.comment+=`
`+b.comment:a.comment=b.comment);continue}(b.newlineAfterProp||lr(f))&&s(f??p[p.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else((u=b.found)==null?void 0:u.indent)!==r.indent&&s(c,"BAD_INDENT",ca);t.atKey=!0;const w=b.end,T=f?n(t,f,b,s):e(t,w,p,null,b,s);t.schema.compat&&bo(r.indent,f,s),t.atKey=!1,xl(t,a.items,T)&&s(w,"DUPLICATE_KEY","Map keys must be unique");const A=At(y??[],{indicator:"map-value-ind",next:g,offset:T.range[2],onError:s,parentIndent:r.indent,startOnNewline:!f||f.type==="block-scalar"});if(c=A.end,A.found){v&&((g==null?void 0:g.type)==="block-map"&&!A.hasNewline&&s(c,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),t.options.strict&&b.start<A.found.offset-1024&&s(T.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const R=g?n(t,g,A,s):e(t,c,y,null,A,s);t.schema.compat&&bo(r.indent,g,s),c=R.range[2];const j=new jn(T,R);t.options.keepSourceTokens&&(j.srcToken=d),a.items.push(j)}else{v&&s(T.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),A.comment&&(T.comment?T.comment+=`
`+A.comment:T.comment=A.comment);const R=new jn(T);t.options.keepSourceTokens&&(R.srcToken=d),a.items.push(R)}}return l&&l<c&&s(l,"IMPOSSIBLE","Map comment with trailing content"),a.range=[r.offset,c,l??c],a}function Dm({composeNode:n,composeEmptyNode:e},t,r,s,o){const i=(o==null?void 0:o.nodeClass)??nt,a=new i(t.schema);t.atRoot&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let c=r.offset,l=null;for(const{start:u,value:d}of r.items){const p=At(u,{indicator:"seq-item-ind",next:d,offset:c,onError:s,parentIndent:r.indent,startOnNewline:!0});if(!p.found)if(p.anchor||p.tag||d)(d==null?void 0:d.type)==="block-seq"?s(p.end,"BAD_INDENT","All sequence items must start at the same column"):s(c,"MISSING_CHAR","Sequence item without - indicator");else{l=p.end,p.comment&&(a.comment=p.comment);continue}const f=d?n(t,d,p,s):e(t,p.end,u,null,p,s);t.schema.compat&&bo(r.indent,d,s),c=f.range[2],a.items.push(f)}return a.range=[r.offset,c,l??c],a}function yr(n,e,t,r){let s="";if(n){let o=!1,i="";for(const a of n){const{source:c,type:l}=a;switch(l){case"space":o=!0;break;case"comment":{t&&!o&&r(a,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const u=c.substring(1)||" ";s?s+=i+u:s=u,i="";break}case"newline":s&&(i+=c),o=!0;break;default:r(a,"UNEXPECTED_TOKEN",`Unexpected ${l} at node end`)}e+=c.length}}return{comment:s,offset:e}}const Hs="Block collections are not allowed within flow collections",zs=n=>n&&(n.type==="block-map"||n.type==="block-seq");function Mm({composeNode:n,composeEmptyNode:e},t,r,s,o){var b;const i=r.start.source==="{",a=i?"flow map":"flow sequence",c=(o==null?void 0:o.nodeClass)??(i?Yn:nt),l=new c(t.schema);l.flow=!0;const u=t.atRoot;u&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let d=r.offset+r.start.source.length;for(let v=0;v<r.items.length;++v){const w=r.items[v],{start:T,key:A,sep:R,value:j}=w,M=At(T,{flow:a,indicator:"explicit-key-ind",next:A??(R==null?void 0:R[0]),offset:d,onError:s,parentIndent:r.indent,startOnNewline:!1});if(!M.found){if(!M.anchor&&!M.tag&&!R&&!j){v===0&&M.comma?s(M.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`):v<r.items.length-1&&s(M.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${a}`),M.comment&&(l.comment?l.comment+=`
`+M.comment:l.comment=M.comment),d=M.end;continue}!i&&t.options.strict&&lr(A)&&s(A,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(v===0)M.comma&&s(M.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`);else if(M.comma||s(M.start,"MISSING_CHAR",`Missing , between ${a} items`),M.comment){let F="";n:for(const D of T)switch(D.type){case"comma":case"space":break;case"comment":F=D.source.substring(1);break n;default:break n}if(F){let D=l.items[l.items.length-1];_n(D)&&(D=D.value??D.key),D.comment?D.comment+=`
`+F:D.comment=F,M.comment=M.comment.substring(F.length+1)}}if(!i&&!R&&!M.found){const F=j?n(t,j,M,s):e(t,M.end,R,null,M,s);l.items.push(F),d=F.range[2],zs(j)&&s(F.range,"BLOCK_IN_FLOW",Hs)}else{t.atKey=!0;const F=M.end,D=A?n(t,A,M,s):e(t,F,T,null,M,s);zs(A)&&s(D.range,"BLOCK_IN_FLOW",Hs),t.atKey=!1;const H=At(R??[],{flow:a,indicator:"map-value-ind",next:j,offset:D.range[2],onError:s,parentIndent:r.indent,startOnNewline:!1});if(H.found){if(!i&&!M.found&&t.options.strict){if(R)for(const Y of R){if(Y===H.found)break;if(Y.type==="newline"){s(Y,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}M.start<H.found.offset-1024&&s(H.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else j&&("source"in j&&((b=j.source)==null?void 0:b[0])===":"?s(j,"MISSING_CHAR",`Missing space after : in ${a}`):s(H.start,"MISSING_CHAR",`Missing , or : between ${a} items`));const J=j?n(t,j,H,s):H.found?e(t,H.end,R,null,H,s):null;J?zs(j)&&s(J.range,"BLOCK_IN_FLOW",Hs):H.comment&&(D.comment?D.comment+=`
`+H.comment:D.comment=H.comment);const I=new jn(D,J);if(t.options.keepSourceTokens&&(I.srcToken=w),i){const Y=l;xl(t,Y.items,D)&&s(F,"DUPLICATE_KEY","Map keys must be unique"),Y.items.push(I)}else{const Y=new Yn(t.schema);Y.flow=!0,Y.items.push(I);const fn=(J??D).range;Y.range=[D.range[0],fn[1],fn[2]],l.items.push(Y)}d=J?J.range[2]:H.end}}const p=i?"}":"]",[f,...y]=r.end;let g=d;if((f==null?void 0:f.source)===p)g=f.offset+f.source.length;else{const v=a[0].toUpperCase()+a.substring(1),w=u?`${v} must end with a ${p}`:`${v} in block collection must be sufficiently indented and end with a ${p}`;s(d,u?"MISSING_CHAR":"BAD_INDENT",w),f&&f.source.length!==1&&y.unshift(f)}if(y.length>0){const v=yr(y,g,t.options.strict,s);v.comment&&(l.comment?l.comment+=`
`+v.comment:l.comment=v.comment),l.range=[r.offset,g,v.offset]}else l.range=[r.offset,g,g];return l}function Gs(n,e,t,r,s,o){const i=t.type==="block-map"?Pm(n,e,t,r,o):t.type==="block-seq"?Dm(n,e,t,r,o):Mm(n,e,t,r,o),a=i.constructor;return s==="!"||s===a.tagName?(i.tag=a.tagName,i):(s&&(i.tag=s),i)}function Bm(n,e,t,r,s){var p;const o=r.tag,i=o?e.directives.tagName(o.source,f=>s(o,"TAG_RESOLVE_FAILED",f)):null;if(t.type==="block-seq"){const{anchor:f,newlineAfterProp:y}=r,g=f&&o?f.offset>o.offset?f:o:f??o;g&&(!y||y.offset<g.offset)&&s(g,"MISSING_CHAR","Missing newline after block sequence props")}const a=t.type==="block-map"?"map":t.type==="block-seq"?"seq":t.start.source==="{"?"map":"seq";if(!o||!i||i==="!"||i===Yn.tagName&&a==="map"||i===nt.tagName&&a==="seq")return Gs(n,e,t,s,i);let c=e.schema.tags.find(f=>f.tag===i&&f.collection===a);if(!c){const f=e.schema.knownTags[i];if((f==null?void 0:f.collection)===a)e.schema.tags.push(Object.assign({},f,{default:!1})),c=f;else return f?s(o,"BAD_COLLECTION_TYPE",`${f.tag} used for ${a} collection, but expects ${f.collection??"scalar"}`,!0):s(o,"TAG_RESOLVE_FAILED",`Unresolved tag: ${i}`,!0),Gs(n,e,t,s,i)}const l=Gs(n,e,t,s,i,c),u=((p=c.resolve)==null?void 0:p.call(c,l,f=>s(o,"TAG_RESOLVE_FAILED",f),e.options))??l,d=gn(u)?u:new W(u);return d.range=l.range,d.tag=i,c!=null&&c.format&&(d.format=c.format),d}function Fm(n,e,t){const r=e.offset,s=$m(e,n.options.strict,t);if(!s)return{value:"",type:null,comment:"",range:[r,r,r]};const o=s.mode===">"?W.BLOCK_FOLDED:W.BLOCK_LITERAL,i=e.source?jm(e.source):[];let a=i.length;for(let g=i.length-1;g>=0;--g){const b=i[g][1];if(b===""||b==="\r")a=g;else break}if(a===0){const g=s.chomp==="+"&&i.length>0?`
`.repeat(Math.max(1,i.length-1)):"";let b=r+s.length;return e.source&&(b+=e.source.length),{value:g,type:o,comment:s.comment,range:[r,b,b]}}let c=e.indent+s.indent,l=e.offset+s.length,u=0;for(let g=0;g<a;++g){const[b,v]=i[g];if(v===""||v==="\r")s.indent===0&&b.length>c&&(c=b.length);else{b.length<c&&t(l+b.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),s.indent===0&&(c=b.length),u=g,c===0&&!n.atRoot&&t(l,"BAD_INDENT","Block scalar values in collections must be indented");break}l+=b.length+v.length+1}for(let g=i.length-1;g>=a;--g)i[g][0].length>c&&(a=g+1);let d="",p="",f=!1;for(let g=0;g<u;++g)d+=i[g][0].slice(c)+`
`;for(let g=u;g<a;++g){let[b,v]=i[g];l+=b.length+v.length+1;const w=v[v.length-1]==="\r";if(w&&(v=v.slice(0,-1)),v&&b.length<c){const A=`Block scalar lines must not be less indented than their ${s.indent?"explicit indentation indicator":"first line"}`;t(l-v.length-(w?2:1),"BAD_INDENT",A),b=""}o===W.BLOCK_LITERAL?(d+=p+b.slice(c)+v,p=`
`):b.length>c||v[0]==="	"?(p===" "?p=`
`:!f&&p===`
`&&(p=`

`),d+=p+b.slice(c)+v,p=`
`,f=!0):v===""?p===`
`?d+=`
`:p=`
`:(d+=p+v,p=" ",f=!1)}switch(s.chomp){case"-":break;case"+":for(let g=a;g<i.length;++g)d+=`
`+i[g][0].slice(c);d[d.length-1]!==`
`&&(d+=`
`);break;default:d+=`
`}const y=r+s.length+e.source.length;return{value:d,type:o,comment:s.comment,range:[r,y,y]}}function $m({offset:n,props:e},t,r){if(e[0].type!=="block-scalar-header")return r(e[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:s}=e[0],o=s[0];let i=0,a="",c=-1;for(let p=1;p<s.length;++p){const f=s[p];if(!a&&(f==="-"||f==="+"))a=f;else{const y=Number(f);!i&&y?i=y:c===-1&&(c=n+p)}}c!==-1&&r(c,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${s}`);let l=!1,u="",d=s.length;for(let p=1;p<e.length;++p){const f=e[p];switch(f.type){case"space":l=!0;case"newline":d+=f.source.length;break;case"comment":t&&!l&&r(f,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),d+=f.source.length,u=f.source.substring(1);break;case"error":r(f,"UNEXPECTED_TOKEN",f.message),d+=f.source.length;break;default:{const y=`Unexpected token in block scalar header: ${f.type}`;r(f,"UNEXPECTED_TOKEN",y);const g=f.source;g&&typeof g=="string"&&(d+=g.length)}}}return{mode:o,indent:i,chomp:a,comment:u,length:d}}function jm(n){const e=n.split(/\n( *)/),t=e[0],r=t.match(/^( *)/),o=[r!=null&&r[1]?[r[1],t.slice(r[1].length)]:["",t]];for(let i=1;i<e.length;i+=2)o.push([e[i],e[i+1]]);return o}function Um(n,e,t){const{offset:r,type:s,source:o,end:i}=n;let a,c;const l=(p,f,y)=>t(r+p,f,y);switch(s){case"scalar":a=W.PLAIN,c=Km(o,l);break;case"single-quoted-scalar":a=W.QUOTE_SINGLE,c=Vm(o,l);break;case"double-quoted-scalar":a=W.QUOTE_DOUBLE,c=qm(o,l);break;default:return t(n,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${s}`),{value:"",type:null,comment:"",range:[r,r+o.length,r+o.length]}}const u=r+o.length,d=yr(i,u,e,t);return{value:c,type:a,comment:d.comment,range:[r,u,d.offset]}}function Km(n,e){let t="";switch(n[0]){case"	":t="a tab character";break;case",":t="flow indicator character ,";break;case"%":t="directive indicator character %";break;case"|":case">":{t=`block scalar indicator ${n[0]}`;break}case"@":case"`":{t=`reserved character ${n[0]}`;break}}return t&&e(0,"BAD_SCALAR_START",`Plain value cannot start with ${t}`),Ol(n)}function Vm(n,e){return(n[n.length-1]!=="'"||n.length===1)&&e(n.length,"MISSING_CHAR","Missing closing 'quote"),Ol(n.slice(1,-1)).replace(/''/g,"'")}function Ol(n){let e,t;try{e=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),t=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{e=/(.*?)[ \t]*\r?\n/sy,t=/[ \t]*(.*?)[ \t]*\r?\n/sy}let r=e.exec(n);if(!r)return n;let s=r[1],o=" ",i=e.lastIndex;for(t.lastIndex=i;r=t.exec(n);)r[1]===""?o===`
`?s+=o:o=`
`:(s+=o+r[1],o=" "),i=t.lastIndex;const a=/[ \t]*(.*)/sy;return a.lastIndex=i,r=a.exec(n),s+o+((r==null?void 0:r[1])??"")}function qm(n,e){let t="";for(let r=1;r<n.length-1;++r){const s=n[r];if(!(s==="\r"&&n[r+1]===`
`))if(s===`
`){const{fold:o,offset:i}=Hm(n,r);t+=o,r=i}else if(s==="\\"){let o=n[++r];const i=zm[o];if(i)t+=i;else if(o===`
`)for(o=n[r+1];o===" "||o==="	";)o=n[++r+1];else if(o==="\r"&&n[r+1]===`
`)for(o=n[++r+1];o===" "||o==="	";)o=n[++r+1];else if(o==="x"||o==="u"||o==="U"){const a=o==="x"?2:o==="u"?4:8;t+=Gm(n,r+1,a,e),r+=a}else{const a=n.substr(r-1,2);e(r-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${a}`),t+=a}}else if(s===" "||s==="	"){const o=r;let i=n[r+1];for(;i===" "||i==="	";)i=n[++r+1];i!==`
`&&!(i==="\r"&&n[r+2]===`
`)&&(t+=r>o?n.slice(o,r+1):s)}else t+=s}return(n[n.length-1]!=='"'||n.length===1)&&e(n.length,"MISSING_CHAR",'Missing closing "quote'),t}function Hm(n,e){let t="",r=n[e+1];for(;(r===" "||r==="	"||r===`
`||r==="\r")&&!(r==="\r"&&n[e+2]!==`
`);)r===`
`&&(t+=`
`),e+=1,r=n[e+1];return t||(t=" "),{fold:t,offset:e}}const zm={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function Gm(n,e,t,r){const s=n.substr(e,t),i=s.length===t&&/^[0-9a-fA-F]+$/.test(s)?parseInt(s,16):NaN;try{return String.fromCodePoint(i)}catch{const a=n.substr(e-2,t+2);return r(e-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${a}`),a}}function Rl(n,e,t,r){const{value:s,type:o,comment:i,range:a}=e.type==="block-scalar"?Fm(n,e,r):Um(e,n.options.strict,r),c=t?n.directives.tagName(t.source,d=>r(t,"TAG_RESOLVE_FAILED",d)):null;let l;n.options.stringKeys&&n.atKey?l=n.schema[_e]:c?l=Wm(n.schema,s,c,t,r):e.type==="scalar"?l=Ym(n,s,e,r):l=n.schema[_e];let u;try{const d=l.resolve(s,p=>r(t??e,"TAG_RESOLVE_FAILED",p),n.options);u=un(d)?d:new W(d)}catch(d){const p=d instanceof Error?d.message:String(d);r(t??e,"TAG_RESOLVE_FAILED",p),u=new W(s)}return u.range=a,u.source=s,o&&(u.type=o),c&&(u.tag=c),l.format&&(u.format=l.format),i&&(u.comment=i),u}function Wm(n,e,t,r,s){var a;if(t==="!")return n[_e];const o=[];for(const c of n.tags)if(!c.collection&&c.tag===t)if(c.default&&c.test)o.push(c);else return c;for(const c of o)if((a=c.test)!=null&&a.test(e))return c;const i=n.knownTags[t];return i&&!i.collection?(n.tags.push(Object.assign({},i,{default:!1,test:void 0})),i):(s(r,"TAG_RESOLVE_FAILED",`Unresolved tag: ${t}`,t!=="tag:yaml.org,2002:str"),n[_e])}function Ym({atKey:n,directives:e,schema:t},r,s,o){const i=t.tags.find(a=>{var c;return(a.default===!0||n&&a.default==="key")&&((c=a.test)==null?void 0:c.test(r))})||t[_e];if(t.compat){const a=t.compat.find(c=>{var l;return c.default&&((l=c.test)==null?void 0:l.test(r))})??t[_e];if(i.tag!==a.tag){const c=e.tagString(i.tag),l=e.tagString(a.tag),u=`Value may be parsed as either ${c} or ${l}`;o(s,"TAG_RESOLVE_FAILED",u,!0)}}return i}function Jm(n,e,t){if(e){t??(t=e.length);for(let r=t-1;r>=0;--r){let s=e[r];switch(s.type){case"space":case"comment":case"newline":n-=s.source.length;continue}for(s=e[++r];(s==null?void 0:s.type)==="space";)n+=s.source.length,s=e[++r];break}}return n}const Qm={composeNode:Cl,composeEmptyNode:Jo};function Cl(n,e,t,r){const s=n.atKey,{spaceBefore:o,comment:i,anchor:a,tag:c}=t;let l,u=!0;switch(e.type){case"alias":l=Xm(n,e,r),(a||c)&&r(e,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":l=Rl(n,e,c,r),a&&(l.anchor=a.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":try{l=Bm(Qm,n,e,t,r),a&&(l.anchor=a.source.substring(1))}catch(d){const p=d instanceof Error?d.message:String(d);r(e,"RESOURCE_EXHAUSTION",p)}break;default:{const d=e.type==="error"?e.message:`Unsupported token (type: ${e.type})`;r(e,"UNEXPECTED_TOKEN",d),u=!1}}return l??(l=Jo(n,e.offset,void 0,null,t,r)),a&&l.anchor===""&&r(a,"BAD_ALIAS","Anchor cannot be an empty string"),s&&n.options.stringKeys&&(!un(l)||typeof l.value!="string"||l.tag&&l.tag!=="tag:yaml.org,2002:str")&&r(c??e,"NON_STRING_KEY","With stringKeys, all keys must be strings"),o&&(l.spaceBefore=!0),i&&(e.type==="scalar"&&e.source===""?l.comment=i:l.commentBefore=i),n.options.keepSourceTokens&&u&&(l.srcToken=e),l}function Jo(n,e,t,r,{spaceBefore:s,comment:o,anchor:i,tag:a,end:c},l){const u={type:"scalar",offset:Jm(e,t,r),indent:-1,source:""},d=Rl(n,u,a,l);return i&&(d.anchor=i.source.substring(1),d.anchor===""&&l(i,"BAD_ALIAS","Anchor cannot be an empty string")),s&&(d.spaceBefore=!0),o&&(d.comment=o,d.range[2]=c),d}function Xm({options:n},{offset:e,source:t,end:r},s){const o=new Fo(t.substring(1));o.source===""&&s(e,"BAD_ALIAS","Alias cannot be an empty string"),o.source.endsWith(":")&&s(e+t.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const i=e+t.length,a=yr(r,i,n.strict,s);return o.range=[e,i,a.offset],a.comment&&(o.comment=a.comment),o}function Zm(n,e,{offset:t,start:r,value:s,end:o},i){const a=Object.assign({_directives:e},n),c=new As(void 0,a),l={atKey:!1,atRoot:!0,directives:c.directives,options:c.options,schema:c.schema},u=At(r,{indicator:"doc-start",next:s??(o==null?void 0:o[0]),offset:t,onError:i,parentIndent:0,startOnNewline:!0});u.found&&(c.directives.docStart=!0,s&&(s.type==="block-map"||s.type==="block-seq")&&!u.hasNewline&&i(u.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),c.contents=s?Cl(l,s,u,i):Jo(l,u.end,r,null,u,i);const d=c.contents.range[2],p=yr(o,d,!1,i);return p.comment&&(c.comment=p.comment),c.range=[t,d,p.offset],c}function Bt(n){if(typeof n=="number")return[n,n+1];if(Array.isArray(n))return n.length===2?n:[n[0],n[1]];const{offset:e,source:t}=n;return[e,e+(typeof t=="string"?t.length:1)]}function la(n){var s;let e="",t=!1,r=!1;for(let o=0;o<n.length;++o){const i=n[o];switch(i[0]){case"#":e+=(e===""?"":r?`

`:`
`)+(i.substring(1)||" "),t=!0,r=!1;break;case"%":((s=n[o+1])==null?void 0:s[0])!=="#"&&(o+=1),t=!1;break;default:t||(r=!0),t=!1}}return{comment:e,afterEmptyLine:r}}class nh{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(t,r,s,o)=>{const i=Bt(t);o?this.warnings.push(new Lm(i,r,s)):this.errors.push(new jt(i,r,s))},this.directives=new Ln({version:e.version||"1.2"}),this.options=e}decorate(e,t){const{comment:r,afterEmptyLine:s}=la(this.prelude);if(r){const o=e.contents;if(t)e.comment=e.comment?`${e.comment}
${r}`:r;else if(s||e.directives.docStart||!o)e.commentBefore=r;else if(hn(o)&&!o.flow&&o.items.length>0){let i=o.items[0];_n(i)&&(i=i.key);const a=i.commentBefore;i.commentBefore=a?`${r}
${a}`:r}else{const i=o.commentBefore;o.commentBefore=i?`${r}
${i}`:r}}if(t){for(let o=0;o<this.errors.length;++o)e.errors.push(this.errors[o]);for(let o=0;o<this.warnings.length;++o)e.warnings.push(this.warnings[o])}else e.errors=this.errors,e.warnings=this.warnings;this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:la(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,t=!1,r=-1){for(const s of e)yield*this.next(s);yield*this.end(t,r)}*next(e){switch(e.type){case"directive":this.directives.add(e.source,(t,r,s)=>{const o=Bt(e);o[0]+=t,this.onError(o,"BAD_DIRECTIVE",r,s)}),this.prelude.push(e.source),this.atDirectives=!0;break;case"document":{const t=Zm(this.options,this.directives,e,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(e,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(e.source);break;case"error":{const t=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,r=new jt(Bt(e),"UNEXPECTED_TOKEN",t);this.atDirectives||!this.doc?this.errors.push(r):this.doc.errors.push(r);break}case"doc-end":{if(!this.doc){const r="Unexpected doc-end without preceding document";this.errors.push(new jt(Bt(e),"UNEXPECTED_TOKEN",r));break}this.doc.directives.docEnd=!0;const t=yr(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){const r=this.doc.comment;this.doc.comment=r?`${r}
${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new jt(Bt(e),"UNEXPECTED_TOKEN",`Unsupported token ${e.type}`))}}*end(e=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){const r=Object.assign({_directives:this.directives},this.options),s=new As(void 0,r);this.atDirectives&&this.onError(t,"MISSING_CHAR","Missing directives-end indicator line"),s.range=[0,t,t],this.decorate(s,!1),yield s}}}const Il="\uFEFF",Ll="",Pl="",yo="";function eh(n){switch(n){case Il:return"byte-order-mark";case Ll:return"doc-mode";case Pl:return"flow-error-end";case yo:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(n[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}function Xn(n){switch(n){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const ua=new Set("0123456789ABCDEFabcdef"),th=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),Nr=new Set(",[]{}"),rh=new Set(` ,[]{}
\r	`),Ws=n=>!n||rh.has(n);class sh{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,t=!1){if(e){if(typeof e!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!t;let r=this.next??"stream";for(;r&&(t||this.hasChars(1));)r=yield*this.parseNext(r)}atLineEnd(){let e=this.pos,t=this.buffer[e];for(;t===" "||t==="	";)t=this.buffer[++e];return!t||t==="#"||t===`
`?!0:t==="\r"?this.buffer[e+1]===`
`:!1}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let t=this.buffer[e];if(this.indentNext>0){let r=0;for(;t===" ";)t=this.buffer[++r+e];if(t==="\r"){const s=this.buffer[r+e+1];if(s===`
`||!s&&!this.atEnd)return e+r+1}return t===`
`||r>=this.indentNext||!t&&!this.atEnd?e+r:-1}if(t==="-"||t==="."){const r=this.buffer.substr(e,3);if((r==="---"||r==="...")&&Xn(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!="number"||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]==="\r"&&(e-=1),this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext("stream");if(e[0]===Il&&(yield*this.pushCount(1),e=e.substring(1)),e[0]==="%"){let t=e.length,r=e.indexOf("#");for(;r!==-1;){const o=e[r-1];if(o===" "||o==="	"){t=r-1;break}else r=e.indexOf("#",r+1)}for(;;){const o=e[t-1];if(o===" "||o==="	")t-=1;else break}const s=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-s),this.pushNewline(),"stream"}if(this.atLineEnd()){const t=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-t),yield*this.pushNewline(),"stream"}return yield Ll,yield*this.parseLineStart()}*parseLineStart(){const e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext("line-start");if(e==="-"||e==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const t=this.peek(3);if((t==="---"||t==="...")&&Xn(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,t==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!Xn(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[e,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext("block-start");if((e==="-"||e==="?"||e===":")&&Xn(t)){const r=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=r,"block-start"}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const e=this.getLine();if(e===null)return this.setNext("doc");let t=yield*this.pushIndicators();switch(e[t]){case"#":yield*this.pushCount(e.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(Ws),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return t+=yield*this.parseBlockScalarHeader(),t+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,t,r=-1;do e=yield*this.pushNewline(),e>0?(t=yield*this.pushSpaces(!1),this.indentValue=r=t):t=0,t+=yield*this.pushSpaces(!0);while(e+t>0);const s=this.getLine();if(s===null)return this.setNext("flow");if((r!==-1&&r<this.indentNext&&s[0]!=="#"||r===0&&(s.startsWith("---")||s.startsWith("..."))&&Xn(s[3]))&&!(r===this.indentNext-1&&this.flowLevel===1&&(s[0]==="]"||s[0]==="}")))return this.flowLevel=0,yield Pl,yield*this.parseLineStart();let o=0;for(;s[o]===",";)o+=yield*this.pushCount(1),o+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(o+=yield*this.pushIndicators(),s[o]){case void 0:return"flow";case"#":return yield*this.pushCount(s.length-o),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(Ws),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const i=this.charAt(1);if(this.flowKey||Xn(i)||i===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const e=this.charAt(0);let t=this.buffer.indexOf(e,this.pos+1);if(e==="'")for(;t!==-1&&this.buffer[t+1]==="'";)t=this.buffer.indexOf("'",t+2);else for(;t!==-1;){let o=0;for(;this.buffer[t-1-o]==="\\";)o+=1;if(o%2===0)break;t=this.buffer.indexOf('"',t+1)}const r=this.buffer.substring(0,t);let s=r.indexOf(`
`,this.pos);if(s!==-1){for(;s!==-1;){const o=this.continueScalar(s+1);if(o===-1)break;s=r.indexOf(`
`,o)}s!==-1&&(t=s-(r[s-1]==="\r"?2:1))}if(t===-1){if(!this.atEnd)return this.setNext("quoted-scalar");t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){const t=this.buffer[++e];if(t==="+")this.blockScalarKeep=!0;else if(t>"0"&&t<="9")this.blockScalarIndent=Number(t)-1;else if(t!=="-")break}return yield*this.pushUntil(t=>Xn(t)||t==="#")}*parseBlockScalar(){let e=this.pos-1,t=0,r;n:for(let o=this.pos;r=this.buffer[o];++o)switch(r){case" ":t+=1;break;case`
`:e=o,t=0;break;case"\r":{const i=this.buffer[o+1];if(!i&&!this.atEnd)return this.setNext("block-scalar");if(i===`
`)break}default:break n}if(!r&&!this.atEnd)return this.setNext("block-scalar");if(t>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=t:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const o=this.continueScalar(e+1);if(o===-1)break;e=this.buffer.indexOf(`
`,o)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext("block-scalar");e=this.buffer.length}}let s=e+1;for(r=this.buffer[s];r===" ";)r=this.buffer[++s];if(r==="	"){for(;r==="	"||r===" "||r==="\r"||r===`
`;)r=this.buffer[++s];e=s-1}else if(!this.blockScalarKeep)do{let o=e-1,i=this.buffer[o];i==="\r"&&(i=this.buffer[--o]);const a=o;for(;i===" ";)i=this.buffer[--o];if(i===`
`&&o>=this.pos&&o+1+t>a)e=o;else break}while(!0);return yield yo,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const e=this.flowLevel>0;let t=this.pos-1,r=this.pos-1,s;for(;s=this.buffer[++r];)if(s===":"){const o=this.buffer[r+1];if(Xn(o)||e&&Nr.has(o))break;t=r}else if(Xn(s)){let o=this.buffer[r+1];if(s==="\r"&&(o===`
`?(r+=1,s=`
`,o=this.buffer[r+1]):t=r),o==="#"||e&&Nr.has(o))break;if(s===`
`){const i=this.continueScalar(r+1);if(i===-1)break;r=Math.max(r,i-2)}}else{if(e&&Nr.has(s))break;t=r}return!s&&!this.atEnd?this.setNext("plain-scalar"):(yield yo,yield*this.pushToIndex(t+1,!0),e?"flow":"doc")}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,t){const r=this.buffer.slice(this.pos,e);return r?(yield r,this.pos+=r.length,r.length):(t&&(yield""),0)}*pushIndicators(){let e=0;n:for(;;){switch(this.charAt(0)){case"!":e+=yield*this.pushTag(),e+=yield*this.pushSpaces(!0);continue n;case"&":e+=yield*this.pushUntil(Ws),e+=yield*this.pushSpaces(!0);continue n;case"-":case"?":case":":{const t=this.flowLevel>0,r=this.charAt(1);if(Xn(r)||t&&Nr.has(r)){t?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,e+=yield*this.pushCount(1),e+=yield*this.pushSpaces(!0);continue n}}}break n}return e}*pushTag(){if(this.charAt(1)==="<"){let e=this.pos+2,t=this.buffer[e];for(;!Xn(t)&&t!==">";)t=this.buffer[++e];return yield*this.pushToIndex(t===">"?e+1:e,!1)}else{let e=this.pos+1,t=this.buffer[e];for(;t;)if(th.has(t))t=this.buffer[++e];else if(t==="%"&&ua.has(this.buffer[e+1])&&ua.has(this.buffer[e+2]))t=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){const e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let t=this.pos-1,r;do r=this.buffer[++t];while(r===" "||e&&r==="	");const s=t-this.pos;return s>0&&(yield this.buffer.substr(this.pos,s),this.pos=t),s}*pushUntil(e){let t=this.pos,r=this.buffer[t];for(;!e(r);)r=this.buffer[++t];return yield*this.pushToIndex(t,!1)}}class oh{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let t=0,r=this.lineStarts.length;for(;t<r;){const o=t+r>>1;this.lineStarts[o]<e?t=o+1:r=o}if(this.lineStarts[t]===e)return{line:t+1,col:1};if(t===0)return{line:0,col:e};const s=this.lineStarts[t-1];return{line:t,col:e-s+1}}}}function Be(n,e){for(let t=0;t<n.length;++t)if(n[t].type===e)return!0;return!1}function da(n){for(let e=0;e<n.length;++e)switch(n[e].type){case"space":case"comment":case"newline":break;default:return e}return-1}function Dl(n){switch(n==null?void 0:n.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function Tr(n){switch(n.type){case"document":return n.start;case"block-map":{const e=n.items[n.items.length-1];return e.sep??e.start}case"block-seq":return n.items[n.items.length-1].start;default:return[]}}function it(n){var t;if(n.length===0)return[];let e=n.length;n:for(;--e>=0;)switch(n[e].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break n}for(;((t=n[++e])==null?void 0:t.type)==="space";);return n.splice(e,n.length)}function Wr(n,e){if(e.length<1e5)Array.prototype.push.apply(n,e);else for(let t=0;t<e.length;++t)n.push(e[t])}function pa(n){if(n.start.type==="flow-seq-start")for(const e of n.items)e.sep&&!e.value&&!Be(e.start,"explicit-key-ind")&&!Be(e.sep,"map-value-ind")&&(e.key&&(e.value=e.key),delete e.key,Dl(e.value)?e.value.end?Wr(e.value.end,e.sep):e.value.end=e.sep:Wr(e.start,e.sep),delete e.sep)}class ih{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new sh,this.onNewLine=e}*parse(e,t=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const r of this.lexer.lex(e,t))yield*this.next(r);t||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}const t=eh(e);if(t)if(t==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=t,yield*this.step(),t){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case"space":this.atNewLine&&e[0]===" "&&(this.indent+=e.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=e.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=e.length}else{const r=`Not a YAML token: ${e}`;yield*this.pop({type:"error",offset:this.offset,message:r,source:e}),this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const e=this.peek(1);if(this.type==="doc-end"&&(e==null?void 0:e.type)!=="doc-end"){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!e)return yield*this.stream();switch(e.type){case"document":return yield*this.document(e);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(e);case"block-scalar":return yield*this.blockScalar(e);case"block-map":return yield*this.blockMap(e);case"block-seq":return yield*this.blockSequence(e);case"flow-collection":return yield*this.flowCollection(e);case"doc-end":return yield*this.documentEnd(e)}yield*this.pop()}peek(e){return this.stack[this.stack.length-e]}*pop(e){const t=e??this.stack.pop();if(!t)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield t;else{const r=this.peek(1);switch(t.type==="block-scalar"?t.indent="indent"in r?r.indent:0:t.type==="flow-collection"&&r.type==="document"&&(t.indent=0),t.type==="flow-collection"&&pa(t),r.type){case"document":r.value=t;break;case"block-scalar":r.props.push(t);break;case"block-map":{const s=r.items[r.items.length-1];if(s.value){r.items.push({start:[],key:t,sep:[]}),this.onKeyLine=!0;return}else if(s.sep)s.value=t;else{Object.assign(s,{key:t,sep:[]}),this.onKeyLine=!s.explicitKey;return}break}case"block-seq":{const s=r.items[r.items.length-1];s.value?r.items.push({start:[],value:t}):s.value=t;break}case"flow-collection":{const s=r.items[r.items.length-1];!s||s.value?r.items.push({start:[],key:t,sep:[]}):s.sep?s.value=t:Object.assign(s,{key:t,sep:[]});return}default:yield*this.pop(),yield*this.pop(t)}if((r.type==="document"||r.type==="block-map"||r.type==="block-seq")&&(t.type==="block-map"||t.type==="block-seq")){const s=t.items[t.items.length-1];s&&!s.sep&&!s.value&&s.start.length>0&&da(s.start)===-1&&(t.indent===0||s.start.every(o=>o.type!=="comment"||o.indent<t.indent))&&(r.type==="document"?r.end=s.start:r.items.push({start:s.start}),t.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const e={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case"doc-start":{da(e.start)!==-1?(yield*this.pop(),yield*this.step()):e.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":e.start.push(this.sourceToken);return}const t=this.startBlockValue(e);t?this.stack.push(t):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type==="map-value-ind"){const t=Tr(this.peek(2)),r=it(t);let s;e.end?(s=e.end,s.push(this.sourceToken),delete e.end):s=[this.sourceToken];const o={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:r,key:e,sep:s}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=o}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case"space":case"comment":case"newline":e.props.push(this.sourceToken);return;case"scalar":if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){var r;const t=e.items[e.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,t.value){const s="end"in t.value?t.value.end:void 0,o=Array.isArray(s)?s[s.length-1]:void 0;(o==null?void 0:o.type)==="comment"?s==null||s.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,e.indent)){const s=e.items[e.items.length-2],o=(r=s==null?void 0:s.value)==null?void 0:r.end;if(Array.isArray(o)){Wr(o,t.start),o.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return}if(this.indent>=e.indent){const s=!this.onKeyLine&&this.indent===e.indent,o=s&&(t.sep||t.explicitKey)&&this.type!=="seq-item-ind";let i=[];if(o&&t.sep&&!t.value){const a=[];for(let c=0;c<t.sep.length;++c){const l=t.sep[c];switch(l.type){case"newline":a.push(c);break;case"space":break;case"comment":l.indent>e.indent&&(a.length=0);break;default:a.length=0}}a.length>=2&&(i=t.sep.splice(a[1]))}switch(this.type){case"anchor":case"tag":o||t.value?(i.push(this.sourceToken),e.items.push({start:i}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"explicit-key-ind":!t.sep&&!t.explicitKey?(t.start.push(this.sourceToken),t.explicitKey=!0):o||t.value?(i.push(this.sourceToken),e.items.push({start:i,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(t.explicitKey)if(t.sep)if(t.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(Be(t.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:i,key:null,sep:[this.sourceToken]}]});else if(Dl(t.key)&&!Be(t.sep,"newline")){const a=it(t.start),c=t.key,l=t.sep;l.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:c,sep:l}]})}else i.length>0?t.sep=t.sep.concat(i,this.sourceToken):t.sep.push(this.sourceToken);else if(Be(t.start,"newline"))Object.assign(t,{key:null,sep:[this.sourceToken]});else{const a=it(t.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:null,sep:[this.sourceToken]}]})}else t.sep?t.value||o?e.items.push({start:i,key:null,sep:[this.sourceToken]}):Be(t.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const a=this.flowScalar(this.type);o||t.value?(e.items.push({start:i,key:a,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(a):(Object.assign(t,{key:a,sep:[]}),this.onKeyLine=!0);return}default:{const a=this.startBlockValue(e);if(a){if(a.type==="block-seq"){if(!t.explicitKey&&t.sep&&!Be(t.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else s&&e.items.push({start:i});this.stack.push(a);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){var r;const t=e.items[e.items.length-1];switch(this.type){case"newline":if(t.value){const s="end"in t.value?t.value.end:void 0,o=Array.isArray(s)?s[s.length-1]:void 0;(o==null?void 0:o.type)==="comment"?s==null||s.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,e.indent)){const s=e.items[e.items.length-2],o=(r=s==null?void 0:s.value)==null?void 0:r.end;if(Array.isArray(o)){Wr(o,t.start),o.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return;case"anchor":case"tag":if(t.value||this.indent<=e.indent)break;t.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==e.indent)break;t.value||Be(t.start,"seq-item-ind")?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return}if(this.indent>e.indent){const s=this.startBlockValue(e);if(s){this.stack.push(s);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){const t=e.items[e.items.length-1];if(this.type==="flow-error-end"){let r;do yield*this.pop(),r=this.peek(1);while((r==null?void 0:r.type)==="flow-collection")}else if(e.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!t||t.sep?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return;case"map-value-ind":!t||t.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!t||t.value?e.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const s=this.flowScalar(this.type);!t||t.value?e.items.push({start:[],key:s,sep:[]}):t.sep?this.stack.push(s):Object.assign(t,{key:s,sep:[]});return}case"flow-map-end":case"flow-seq-end":e.end.push(this.sourceToken);return}const r=this.startBlockValue(e);r?this.stack.push(r):(yield*this.pop(),yield*this.step())}else{const r=this.peek(2);if(r.type==="block-map"&&(this.type==="map-value-ind"&&r.indent===e.indent||this.type==="newline"&&!r.items[r.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&r.type!=="flow-collection"){const s=Tr(r),o=it(s);pa(e);const i=e.end.splice(1,e.end.length);i.push(this.sourceToken);const a={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:o,key:e,sep:i}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=a}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const t=Tr(e),r=it(t);return r.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:r,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const t=Tr(e),r=it(t);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:r,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,t){return this.type!=="comment"||this.indent<=t?!1:e.every(r=>r.type==="newline"||r.type==="space")}*documentEnd(e){this.type!=="doc-mode"&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function ah(n){const e=n.prettyErrors!==!1;return{lineCounter:n.lineCounter||e&&new oh||null,prettyErrors:e}}function ch(n,e={}){const{lineCounter:t,prettyErrors:r}=ah(e),s=new ih(t==null?void 0:t.addNewLine),o=new nh(e);let i=null;for(const a of o.compose(s.parse(n),!0,n.length))if(!i)i=a;else if(i.options.logLevel!=="silent"){i.errors.push(new jt(a.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return r&&t&&(i.errors.forEach(aa(n,t)),i.warnings.forEach(aa(n,t))),i}function lh(n,e,t){let r;const s=ch(n,t);if(!s)return null;if(s.warnings.forEach(o=>al(s.options.logLevel,o)),s.errors.length>0){if(s.options.logLevel!=="silent")throw s.errors[0];s.errors=[]}return s.toJS(Object.assign({reviver:r},t))}const uh=Object.assign({"../../../cpp/branch/p.brn.aid.standard.yaml":kf,"../../../cpp/branch/p.brn.decide.standard.yaml":Sf,"../../../cpp/branch/p.brn.fees.standard.yaml":Ef,"../../../cpp/branch/p.brn.spend.standard.yaml":Af,"../../../cpp/branch/p.brn.trust.standard.yaml":Nf,"../../../cpp/capital/p.cap.debt.standard.yaml":Tf,"../../../cpp/capital/p.cap.invest.standard.yaml":xf,"../../../cpp/capital/p.cap.prop.standard.yaml":Of,"../../../cpp/capital/p.cap.rid.standard.yaml":Rf,"../../../cpp/debt/p.dbt.loan.standard.yaml":Cf,"../../../cpp/draft/drf.approve.standard.yaml":If,"../../../cpp/edubridge/p.edu.access.standard.yaml":Lf,"../../../cpp/edubridge/p.edu.rid.standard.yaml":Pf,"../../../cpp/edubridge/p.edu.spend.standard.yaml":Df,"../../../cpp/edubridge/p.edu.teach.standard.yaml":Mf,"../../../cpp/expense/p.exp.expns.standard.yaml":Bf,"../../../cpp/marketplace/p.mkt.claim.standard.yaml":Ff,"../../../cpp/marketplace/p.mkt.return.standard.yaml":$f,"../../../cpp/marketplace/p.mkt.supply.standard.yaml":jf,"../../../cpp/marketplace/p.mkt.wroff.standard.yaml":Uf,"../../../cpp/meet/meet.hold.standard.yaml":Kf,"../../../cpp/registrator/p.reg.accept.standard.yaml":Vf,"../../../cpp/registrator/p.reg.exit.standard.yaml":qf,"../../../cpp/registrator/p.reg.refund.standard.yaml":Hf,"../../../cpp/registrator/reg.coop.standard.yaml":zf,"../../../cpp/soviet/p.sov.tax.standard.yaml":Gf,"../../../cpp/soviet/sov.authpkg.standard.yaml":Wf,"../../../cpp/soviet/sov.decision.standard.yaml":Yf,"../../../cpp/soviet/sov.robot.standard.yaml":Jf,"../../../cpp/soviet/sov.selectbranch.standard.yaml":Qf,"../../../cpp/wallet/p.wal.depo.standard.yaml":Xf,"../../../cpp/wallet/p.wal.wthdrw.standard.yaml":Zf});function dh(n){if(n===null||typeof n!="object")return!1;const e=n;return!!(e.process_type&&e.title&&e.contract&&e.slug)}function ph(){var r;const n={},e={};for(const[s,o]of Object.entries(uh)){let i;try{i=lh(o)}catch(c){console.error(`[standards] YAML parse error in ${s}:`,c);continue}if(!dh(i)){console.warn(`[standards] Файл ${s} не похож на standard-манифест (обязательные поля: process_type, title, contract, slug)`);continue}if(n[i.process_type]){console.warn(`[standards] Дубликат process_type "${i.process_type}" в ${s}`);continue}n[i.process_type]=i;const a={process_type:i.process_type,title:i.title,contract:i.contract,slug:i.slug,path:s,status:i.status};(e[r=i.contract]??(e[r]=[])).push(a)}for(const s of Object.values(e))s.sort((o,i)=>o.title.localeCompare(i.title,"ru"));const t=Object.keys(e).sort();return{byProcessType:n,byContract:e,contracts:t}}const wo=ph();function ag(n){return wo.byProcessType[n]}const fh={registrator:"Регистратор",wallet:"Главный кошелёк",capital:"«Благорост»",marketplace:"«Стол заказов»",edubridge:"«Образование»",branch:"Кооперативные участки",draft:"Шаблоны документов",soviet:"Совет",meet:"Общие собрания",ledger2:"Учёт операций",gateway:"Платёжный шлюз",fund:"Фонды",loan:"Займы",debt:"Займы пайщикам",expense:"Расходы кооператива"};function mh(n){return fh[n]??n}const hh={candidate:"Кандидат",contributor:"Пайщик",member:"Пайщик",orderer:"Заказчик",offerer:"Поставщик",supplier:"Поставщик",teacher:"Преподаватель",chairman:"Председатель",branch_chairman:"Председатель участка",soviet:"Совет",council:"Совет",soviet_members:"Члены совета",meet:"Общее собрание",gateway_operator:"Кассир",gateway:"Кассир",cashier:"Кассир",accountant:"Бухгалтер",trusted:"Доверенное лицо",administrator:"Администратор",admin:"Администратор",backend:"Платформа",cooperative:"Кооператив",chairman_or_soviet:"Председатель / Совет"};function cg(n){return n?hh[n]??n:""}const lg={ISSUE:"зачисление",TRANSFER:"перевод",BLOCK:"блокировка",UNBLOCK:"разблокировка",BURN:"списание",NONE:"без движения"};/**
 * @license lucide-vue-next v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=({size:n,strokeWidth:e=2,absoluteStrokeWidth:t,color:r,iconNode:s,name:o,class:i,...a},{slots:c})=>vt("svg",{...xr,width:n||xr.width,height:n||xr.height,stroke:r||xr.stroke,"stroke-width":t?Number(e)*24/Number(n):e,class:["lucide",`lucide-${gh(o??"icon")}`],...a},[...s.map(l=>vt(...l)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=(n,e)=>(t,{slots:r})=>vt(_h,{...t,iconNode:e,name:n},r);/**
 * @license lucide-vue-next v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=Ml("MoonIcon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=Ml("SunIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),Bl="standards.theme";function Fl(){try{const n=localStorage.getItem(Bl);return n==="light"||n==="dark"?n:null}catch{return null}}function wh(){return typeof window>"u"||!window.matchMedia?"light":window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Qo(n){typeof document<"u"&&(document.documentElement.dataset.theme=n)}const Fe=nr(Fl()??wh());let fa=!1;function vh(){if(!fa&&(fa=!0,Qo(Fe.value),typeof window<"u"&&window.matchMedia)){const n=window.matchMedia("(prefers-color-scheme: dark)"),e=t=>{Fl()===null&&(Fe.value=t.matches?"dark":"light")};n.addEventListener("change",e)}}Ht(Fe,n=>{Qo(n);try{localStorage.setItem(Bl,n)}catch{}});typeof document<"u"&&Qo(Fe.value);function kh(){return ls(vh),us(()=>{}),{theme:Fe,toggle:()=>{Fe.value=Fe.value==="dark"?"light":"dark"},setTheme:n=>{Fe.value=n}}}const Sh=["title","aria-label"],Eh=mr({__name:"ThemeToggle",setup(n){const{theme:e,toggle:t}=kh();return(r,s)=>(Mn(),me("button",{type:"button",class:"theme-toggle",title:yn(e)==="dark"?"Светлая тема":"Тёмная тема","aria-label":yn(e)==="dark"?"Светлая тема":"Тёмная тема",onClick:s[0]||(s[0]=(...o)=>yn(t)&&yn(t)(...o))},[yn(e)==="dark"?(Mn(),rr(yn(yh),{key:0,size:16})):(Mn(),rr(yn(bh),{key:1,size:16})),En("span",null,Kt(yn(e)==="dark"?"Светлая":"Тёмная"),1)],8,Sh))}}),$l=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},Ah=$l(Eh,[["__scopeId","data-v-736ff43a"]]),Nh={class:"sidebar"},Th={class:"sidebar-brand"},xh={class:"sidebar-brand__subtitle"},Oh={class:"sidebar-body"},Rh={key:0,class:"sidebar-empty"},Ch=["title"],Ih={class:"sidebar-group__name"},Lh={class:"sidebar-group__list"},Ph={class:"sidebar-foot"},Dh=mr({__name:"Sidebar",emits:["collapse"],setup(n,{emit:e}){const t="2026.10.15",r=vf(),s=e,o=Bn(()=>wo.contracts),i=Bn(()=>wo.byContract),a=Bn(()=>o.value.length===0),c=Bn(()=>typeof r.params.processType=="string"?r.params.processType:null);return(l,u)=>(Mn(),me("nav",Nh,[En("div",Th,[vn(yn(fo),{to:"/",class:"sidebar-brand__link"},{default:no(()=>[u[1]||(u[1]=En("span",{class:"sidebar-brand__title"},"Кооперативные стандарты",-1)),En("span",xh,"v"+Kt(yn(t)),1)]),_:1}),En("button",{type:"button",class:"sidebar-collapse",title:"Скрыть список стандартов","aria-label":"Скрыть список стандартов",onClick:u[0]||(u[0]=d=>s("collapse"))},"‹")]),En("div",Oh,[a.value?(Mn(),me("p",Rh,[...u[2]||(u[2]=[Ir(" Стандарты не найдены. Добавьте ",-1),En("code",null,"*.standard.yaml",-1),Ir(" рядом с кодом контракта. ",-1)])])):Cc("",!0),(Mn(!0),me(Dn,null,ui(o.value,d=>(Mn(),me("div",{key:d,class:"sidebar-group"},[En("div",{class:"sidebar-group__head",title:`Контракт ${d}`},[En("span",Ih,Kt(yn(mh)(d)),1)],8,Ch),En("ul",Lh,[(Mn(!0),me(Dn,null,ui(i.value[d],p=>(Mn(),me("li",{key:p.process_type},[vn(yn(fo),{to:{name:"process",params:{contract:p.contract,processType:p.process_type}},class:dr(["sidebar-item",{"sidebar-item--active":c.value===p.process_type}])},{default:no(()=>[Ir(Kt(p.title),1)]),_:2},1032,["to","class"])]))),128))])]))),128))]),En("div",Ph,[vn(Ah)])]))}}),Mh=$l(Dh,[["__scopeId","data-v-341accca"]]),Bh={key:0,class:"mobile-stub"},Fh={class:"app-sidebar"},$h={class:"app-main"},jh=900,ma="standards.sidebarCollapsed",Uh=mr({__name:"App",setup(n){const e=nr(!1),t=nr(typeof localStorage<"u"&&localStorage.getItem(ma)==="1");function r(){t.value=!t.value;try{localStorage.setItem(ma,t.value?"1":"0")}catch{}}function s(){typeof window>"u"||(e.value=window.innerWidth<jh)}return ls(()=>{s(),window.addEventListener("resize",s)}),us(()=>{window.removeEventListener("resize",s)}),(o,i)=>{const a=Qu("router-view");return e.value?(Mn(),me("div",Bh,[...i[0]||(i[0]=[En("div",{class:"mobile-stub__box"},[En("h1",null,"Только для десктопа"),En("p",null," Кооперативные стандарты рассчитаны на широкие экраны — схема процесса не помещается на мобильных устройствах. Откройте сайт с компьютера или планшета. ")],-1)])])):(Mn(),me("div",{key:1,class:dr(["app-shell",{"app-shell--collapsed":t.value}])},[Lu(En("aside",Fh,[vn(Mh,{onCollapse:r})],512),[[Gd,!t.value]]),En("main",$h,[t.value?(Mn(),me("button",{key:0,type:"button",class:"sidebar-toggle",title:"Показать список стандартов",onClick:r},"›")):Cc("",!0),vn(a)])],2))}}}),Kh="modulepreload",Vh=function(n){return"/standards/"+n},ha={},Ys=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){let i=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=i(t.map(l=>{if(l=Vh(l),l in ha)return;ha[l]=!0;const u=l.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":Kh,u||(p.as="script"),p.crossOrigin="",p.href=l,c&&p.setAttribute("nonce",c),document.head.appendChild(p),u)return new Promise((f,y)=>{p.addEventListener("load",f),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return s.then(i=>{for(const a of i||[])a.status==="rejected"&&o(a.reason);return e().catch(o)})},qh=[{path:"/",name:"home",component:()=>Ys(()=>import("./HomePage-BW13JDg6.js"),__vite__mapDeps([0,1]))},{path:"/:contract/:processType",name:"process",component:()=>Ys(()=>import("./ProcessPage-CFfB-Znr.js").then(n=>n.P),__vite__mapDeps([2,3])),props:!0},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>Ys(()=>import("./NotFoundPage-D7sOMUp5.js"),[])}],Hh=wf({history:Xp(),routes:qh,scrollBehavior(n,e){if(!(n.name!==e.name||n.params.processType!==e.params.processType))return!1;if(typeof document<"u"){const r=document.querySelector(".app-main");r?r.scrollTo({top:0,behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"})}return{top:0}}});dp(Uh).use(Hh).mount("#app");export{kh as $,dr as A,wu as B,fh as C,Qh as D,tg as E,Dn as F,Lo as G,zh as H,ee as I,Rr as J,vt as K,Wh as L,ss as M,kn as N,Jh as O,Yh as P,Zl as Q,fo as R,Zs as S,yu as T,Gh as U,Qu as V,eg as W,Td as X,Xh as Y,ig as Z,$l as _,En as a,cg as a0,sg as a1,lg as a2,Lu as a3,Gd as a4,Ys as a5,og as a6,vf as a7,mh as a8,ag as a9,Ir as b,me as c,mr as d,Cc as e,Bn as f,rr as g,Ml as h,ng as i,ic as j,vn as k,Zh as l,Ht as m,qu as n,Mn as o,ls as p,So as q,ui as r,wo as s,Kt as t,yn as u,Ha as v,no as w,us as x,rg as y,nr as z};
