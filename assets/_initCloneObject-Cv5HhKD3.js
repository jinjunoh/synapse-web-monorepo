import{d as i,e as w,a as P,U as u}from"./_Uint8Array-BypDT5Ps.js";import{i as v,h as d,a as x,o as y}from"./_Map-W_LbVzGG.js";import{r as b}from"./isArray-D3Xc0Edl.js";var f=Object.create,A=function(){function r(){}return function(e){if(!v(e))return{};if(f)return f(e);r.prototype=e;var n=new r;return r.prototype=void 0,n}}();function D(r,e){var n=-1,t=r.length;for(e||(e=Array(t));++n<t;)e[n]=r[n];return e}function h(r,e,n){e=="__proto__"&&i?i(r,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):r[e]=n}var U=Object.prototype,_=U.hasOwnProperty;function C(r,e,n){var t=r[e];(!(_.call(r,e)&&w(t,n))||n===void 0&&!(e in r))&&h(r,e,n)}function F(r,e,n,t){var O=!n;n||(n={});for(var s=-1,m=e.length;++s<m;){var o=e[s],a=t?t(n[o],r[o],o,n,r):void 0;a===void 0&&(a=r[o]),O?h(n,o,a):C(n,o,a)}return n}function I(r){var e=[];if(r!=null)for(var n in Object(r))e.push(n);return e}var K=Object.prototype,L=K.hasOwnProperty;function T(r){if(!v(r))return I(r);var e=d(r),n=[];for(var t in r)t=="constructor"&&(e||!L.call(r,t))||n.push(t);return n}function G(r){return x(r)?P(r,!0):T(r)}var B=y(Object.getPrototypeOf,Object),g=typeof exports=="object"&&exports&&!exports.nodeType&&exports,l=g&&typeof module=="object"&&module&&!module.nodeType&&module,E=l&&l.exports===g,p=E?b.Buffer:void 0,c=p?p.allocUnsafe:void 0;function H(r,e){if(e)return r.slice();var n=r.length,t=c?c(n):new r.constructor(n);return r.copy(t),t}function $(r){var e=new r.constructor(r.byteLength);return new u(e).set(new u(r)),e}function J(r,e){var n=e?$(r.buffer):r.buffer;return new r.constructor(n,r.byteOffset,r.length)}function Q(r){return typeof r.constructor=="function"&&!d(r)?A(B(r)):{}}export{D as a,h as b,F as c,H as d,J as e,C as f,B as g,$ as h,Q as i,A as j,G as k};
