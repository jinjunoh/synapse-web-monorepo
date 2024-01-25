import{g as _t,c as It}from"./index-4166e284.js";import{a as Lt}from"./_commonjsHelpers-de833af9.js";const Tt={},At=Object.freeze(Object.defineProperty({__proto__:null,default:Tt},Symbol.toStringTag,{value:"Module"})),Rt=Lt(At);var K=typeof Map=="function"&&Map.prototype,x=Object.getOwnPropertyDescriptor&&K?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,T=K&&x&&typeof x.get=="function"?x.get:null,ot=K&&Map.prototype.forEach,Q=typeof Set=="function"&&Set.prototype,z=Object.getOwnPropertyDescriptor&&Q?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,A=Q&&z&&typeof z.get=="function"?z.get:null,ft=Q&&Set.prototype.forEach,qt=typeof WeakMap=="function"&&WeakMap.prototype,w=qt?WeakMap.prototype.has:null,Nt=typeof WeakSet=="function"&&WeakSet.prototype,M=Nt?WeakSet.prototype.has:null,Bt=typeof WeakRef=="function"&&WeakRef.prototype,ut=Bt?WeakRef.prototype.deref:null,Ct=Boolean.prototype.valueOf,Dt=Object.prototype.toString,Pt=Function.prototype.toString,xt=String.prototype.match,X=String.prototype.slice,s=String.prototype.replace,zt=String.prototype.toUpperCase,lt=String.prototype.toLowerCase,mt=RegExp.prototype.test,ct=Array.prototype.concat,c=Array.prototype.join,Ht=Array.prototype.slice,pt=Math.floor,G=typeof BigInt=="function"?BigInt.prototype.valueOf:null,H=Object.getOwnPropertySymbols,F=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,m=typeof Symbol=="function"&&typeof Symbol.iterator=="object",o=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===m||"symbol")?Symbol.toStringTag:null,dt=Object.prototype.propertyIsEnumerable,yt=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(t){return t.__proto__}:null);function st(t,e){if(t===1/0||t===-1/0||t!==t||t&&t>-1e3&&t<1e3||mt.call(/e/,e))return e;var n=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof t=="number"){var a=t<0?-pt(-t):pt(t);if(a!==t){var i=String(a),r=X.call(e,i.length+1);return s.call(i,n,"$&_")+"."+s.call(s.call(r,/([0-9]{3})/g,"$&_"),/_$/,"")}}return s.call(e,n,"$&_")}var V=Rt,vt=V.custom,gt=$t(vt)?vt:null,kt=function t(e,n,a,i){var r=n||{};if(y(r,"quoteStyle")&&r.quoteStyle!=="single"&&r.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(y(r,"maxStringLength")&&(typeof r.maxStringLength=="number"?r.maxStringLength<0&&r.maxStringLength!==1/0:r.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var u=y(r,"customInspect")?r.customInspect:!0;if(typeof u!="boolean"&&u!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(y(r,"indent")&&r.indent!==null&&r.indent!=="	"&&!(parseInt(r.indent,10)===r.indent&&r.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(y(r,"numericSeparator")&&typeof r.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var g=r.numericSeparator;if(typeof e>"u")return"undefined";if(e===null)return"null";if(typeof e=="boolean")return e?"true":"false";if(typeof e=="string")return Mt(e,r);if(typeof e=="number"){if(e===0)return 1/0/e>0?"0":"-0";var f=String(e);return g?st(e,f):f}if(typeof e=="bigint"){var p=String(e)+"n";return g?st(e,p):p}var R=typeof r.depth>"u"?5:r.depth;if(typeof a>"u"&&(a=0),a>=R&&R>0&&typeof e=="object")return J(e)?"[Array]":"[Object]";var S=ie(r,a);if(typeof i>"u")i=[];else if(wt(i,e)>=0)return"[Circular]";function l(h,W,Wt){if(W&&(i=Ht.call(i),i.push(W)),Wt){var it={depth:r.depth};return y(r,"quoteStyle")&&(it.quoteStyle=r.quoteStyle),t(h,it,a+1,i)}return t(h,r,a+1,i)}if(typeof e=="function"&&!St(e)){var b=Yt(e),j=_(e,l);return"[Function"+(b?": "+b:" (anonymous)")+"]"+(j.length>0?" { "+c.call(j,", ")+" }":"")}if($t(e)){var tt=m?s.call(String(e),/^(Symbol\(.*\))_[^)]*$/,"$1"):F.call(e);return typeof e=="object"&&!m?$(tt):tt}if(re(e)){for(var O="<"+lt.call(String(e.nodeName)),q=e.attributes||[],E=0;E<q.length;E++)O+=" "+q[E].name+"="+Ot(Gt(q[E].value),"double",r);return O+=">",e.childNodes&&e.childNodes.length&&(O+="..."),O+="</"+lt.call(String(e.nodeName))+">",O}if(J(e)){if(e.length===0)return"[]";var N=_(e,l);return S&&!ae(N)?"["+U(N,S)+"]":"[ "+c.call(N,", ")+" ]"}if(Vt(e)){var B=_(e,l);return!("cause"in Error.prototype)&&"cause"in e&&!dt.call(e,"cause")?"{ ["+String(e)+"] "+c.call(ct.call("[cause]: "+l(e.cause),B),", ")+" }":B.length===0?"["+String(e)+"]":"{ ["+String(e)+"] "+c.call(B,", ")+" }"}if(typeof e=="object"&&u){if(gt&&typeof e[gt]=="function"&&V)return V(e,{depth:R-a});if(u!=="symbol"&&typeof e.inspect=="function")return e.inspect()}if(Zt(e)){var et=[];return ot&&ot.call(e,function(h,W){et.push(l(W,e,!0)+" => "+l(h,e))}),ht("Map",T.call(e),et,S)}if(te(e)){var rt=[];return ft&&ft.call(e,function(h){rt.push(l(h,e))}),ht("Set",A.call(e),rt,S)}if(bt(e))return k("WeakMap");if(ee(e))return k("WeakSet");if(jt(e))return k("WeakRef");if(Ut(e))return $(l(Number(e)));if(Qt(e))return $(l(G.call(e)));if(Kt(e))return $(Ct.call(e));if(Jt(e))return $(l(String(e)));if(!Ft(e)&&!St(e)){var C=_(e,l),nt=yt?yt(e)===Object.prototype:e instanceof Object||e.constructor===Object,D=e instanceof Object?"":"null prototype",at=!nt&&o&&Object(e)===e&&o in e?X.call(v(e),8,-1):D?"Object":"",Et=nt||typeof e.constructor!="function"?"":e.constructor.name?e.constructor.name+" ":"",P=Et+(at||D?"["+c.call(ct.call([],at||[],D||[]),": ")+"] ":"");return C.length===0?P+"{}":S?P+"{"+U(C,S)+"}":P+"{ "+c.call(C,", ")+" }"}return String(e)};function Ot(t,e,n){var a=(n.quoteStyle||e)==="double"?'"':"'";return a+t+a}function Gt(t){return s.call(String(t),/"/g,"&quot;")}function J(t){return v(t)==="[object Array]"&&(!o||!(typeof t=="object"&&o in t))}function Ft(t){return v(t)==="[object Date]"&&(!o||!(typeof t=="object"&&o in t))}function St(t){return v(t)==="[object RegExp]"&&(!o||!(typeof t=="object"&&o in t))}function Vt(t){return v(t)==="[object Error]"&&(!o||!(typeof t=="object"&&o in t))}function Jt(t){return v(t)==="[object String]"&&(!o||!(typeof t=="object"&&o in t))}function Ut(t){return v(t)==="[object Number]"&&(!o||!(typeof t=="object"&&o in t))}function Kt(t){return v(t)==="[object Boolean]"&&(!o||!(typeof t=="object"&&o in t))}function $t(t){if(m)return t&&typeof t=="object"&&t instanceof Symbol;if(typeof t=="symbol")return!0;if(!t||typeof t!="object"||!F)return!1;try{return F.call(t),!0}catch{}return!1}function Qt(t){if(!t||typeof t!="object"||!G)return!1;try{return G.call(t),!0}catch{}return!1}var Xt=Object.prototype.hasOwnProperty||function(t){return t in this};function y(t,e){return Xt.call(t,e)}function v(t){return Dt.call(t)}function Yt(t){if(t.name)return t.name;var e=xt.call(Pt.call(t),/^function\s*([\w$]+)/);return e?e[1]:null}function wt(t,e){if(t.indexOf)return t.indexOf(e);for(var n=0,a=t.length;n<a;n++)if(t[n]===e)return n;return-1}function Zt(t){if(!T||!t||typeof t!="object")return!1;try{T.call(t);try{A.call(t)}catch{return!0}return t instanceof Map}catch{}return!1}function bt(t){if(!w||!t||typeof t!="object")return!1;try{w.call(t,w);try{M.call(t,M)}catch{return!0}return t instanceof WeakMap}catch{}return!1}function jt(t){if(!ut||!t||typeof t!="object")return!1;try{return ut.call(t),!0}catch{}return!1}function te(t){if(!A||!t||typeof t!="object")return!1;try{A.call(t);try{T.call(t)}catch{return!0}return t instanceof Set}catch{}return!1}function ee(t){if(!M||!t||typeof t!="object")return!1;try{M.call(t,M);try{w.call(t,w)}catch{return!0}return t instanceof WeakSet}catch{}return!1}function re(t){return!t||typeof t!="object"?!1:typeof HTMLElement<"u"&&t instanceof HTMLElement?!0:typeof t.nodeName=="string"&&typeof t.getAttribute=="function"}function Mt(t,e){if(t.length>e.maxStringLength){var n=t.length-e.maxStringLength,a="... "+n+" more character"+(n>1?"s":"");return Mt(X.call(t,0,e.maxStringLength),e)+a}var i=s.call(s.call(t,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,ne);return Ot(i,"single",e)}function ne(t){var e=t.charCodeAt(0),n={8:"b",9:"t",10:"n",12:"f",13:"r"}[e];return n?"\\"+n:"\\x"+(e<16?"0":"")+zt.call(e.toString(16))}function $(t){return"Object("+t+")"}function k(t){return t+" { ? }"}function ht(t,e,n,a){var i=a?U(n,a):c.call(n,", ");return t+" ("+e+") {"+i+"}"}function ae(t){for(var e=0;e<t.length;e++)if(wt(t[e],`
`)>=0)return!1;return!0}function ie(t,e){var n;if(t.indent==="	")n="	";else if(typeof t.indent=="number"&&t.indent>0)n=c.call(Array(t.indent+1)," ");else return null;return{base:n,prev:c.call(Array(e+1),n)}}function U(t,e){if(t.length===0)return"";var n=`
`+e.prev+e.base;return n+c.call(t,","+n)+`
`+e.prev}function _(t,e){var n=J(t),a=[];if(n){a.length=t.length;for(var i=0;i<t.length;i++)a[i]=y(t,i)?e(t[i],t):""}var r=typeof H=="function"?H(t):[],u;if(m){u={};for(var g=0;g<r.length;g++)u["$"+r[g]]=r[g]}for(var f in t)y(t,f)&&(n&&String(Number(f))===f&&f<t.length||m&&u["$"+f]instanceof Symbol||(mt.call(/[^\w$]/,f)?a.push(e(f,t)+": "+e(t[f],t)):a.push(f+": "+e(t[f],t))));if(typeof H=="function")for(var p=0;p<r.length;p++)dt.call(t,r[p])&&a.push("["+e(r[p])+"]: "+e(t[r[p]],t));return a}var Y=_t,d=It,oe=kt,fe=Y("%TypeError%"),I=Y("%WeakMap%",!0),L=Y("%Map%",!0),ue=d("WeakMap.prototype.get",!0),le=d("WeakMap.prototype.set",!0),ce=d("WeakMap.prototype.has",!0),pe=d("Map.prototype.get",!0),ye=d("Map.prototype.set",!0),se=d("Map.prototype.has",!0),Z=function(t,e){for(var n=t,a;(a=n.next)!==null;n=a)if(a.key===e)return n.next=a.next,a.next=t.next,t.next=a,a},ve=function(t,e){var n=Z(t,e);return n&&n.value},ge=function(t,e,n){var a=Z(t,e);a?a.value=n:t.next={key:e,next:t.next,value:n}},Se=function(t,e){return!!Z(t,e)},de=function(){var e,n,a,i={assert:function(r){if(!i.has(r))throw new fe("Side channel does not contain "+oe(r))},get:function(r){if(I&&r&&(typeof r=="object"||typeof r=="function")){if(e)return ue(e,r)}else if(L){if(n)return pe(n,r)}else if(a)return ve(a,r)},has:function(r){if(I&&r&&(typeof r=="object"||typeof r=="function")){if(e)return ce(e,r)}else if(L){if(n)return se(n,r)}else if(a)return Se(a,r);return!1},set:function(r,u){I&&r&&(typeof r=="object"||typeof r=="function")?(e||(e=new I),le(e,r,u)):L?(n||(n=new L),ye(n,r,u)):(a||(a={key:{},next:null}),ge(a,r,u))}};return i};export{Rt as r,de as s};
//# sourceMappingURL=index-26a12fa0.js.map
