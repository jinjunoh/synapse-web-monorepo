import{M as m,a as d,i as I}from"./_Uint8Array-98add9bc.js";import{a as o,S as h}from"./isArray-5e3f9107.js";import{d as l,h as P}from"./_getTag-a0ec24ca.js";import{i as p}from"./isSymbol-7c514724.js";import{t as C}from"./toString-cc90cb98.js";var E=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,w=/^\w*$/;function x(n,r){if(o(n))return!1;var t=typeof n;return t=="number"||t=="symbol"||t=="boolean"||n==null||p(n)?!0:w.test(n)||!E.test(n)||r!=null&&n in Object(r)}var S="Expected a function";function u(n,r){if(typeof n!="function"||r!=null&&typeof r!="function")throw new TypeError(S);var t=function(){var e=arguments,a=r?r.apply(this,e):e[0],i=t.cache;if(i.has(a))return i.get(a);var s=n.apply(this,e);return t.cache=i.set(a,s)||i,s};return t.cache=new(u.Cache||m),t}u.Cache=m;var T=500;function M(n){var r=u(n,function(e){return t.size===T&&t.clear(),e}),t=r.cache;return r}var $=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,z=/\\(\\)?/g,A=M(function(n){var r=[];return n.charCodeAt(0)===46&&r.push(""),n.replace($,function(t,e,a,i){r.push(a?i.replace(z,"$1"):e||t)}),r});const F=A;function g(n,r){return o(n)?n:x(n,r)?[n]:F(C(n))}var N=1/0;function y(n){if(typeof n=="string"||p(n))return n;var r=n+"";return r=="0"&&1/n==-N?"-0":r}function H(n,r){r=g(r,n);for(var t=0,e=r.length;n!=null&&t<e;)n=n[y(r[t++])];return t&&t==e?n:void 0}var c=h?h.isConcatSpreadable:void 0;function O(n){return o(n)||l(n)||!!(c&&n&&n[c])}function _(n,r,t,e,a){var i=-1,s=n.length;for(t||(t=O),a||(a=[]);++i<s;){var f=n[i];r>0&&t(f)?r>1?_(f,r-1,t,e,a):d(a,f):e||(a[a.length]=f)}return a}function R(n,r){return n!=null&&r in Object(n)}function K(n,r,t){r=g(r,n);for(var e=-1,a=r.length,i=!1;++e<a;){var s=y(r[e]);if(!(i=n!=null&&t(n,s)))break;n=n[s]}return i||++e!=a?i:(a=n==null?0:n.length,!!a&&P(a)&&I(s,a)&&(o(n)||l(n)))}function L(n,r){return n!=null&&K(n,r,R)}export{H as a,_ as b,g as c,K as d,L as h,x as i,u as m,F as s,y as t};
//# sourceMappingURL=hasIn-9f27088b.js.map
