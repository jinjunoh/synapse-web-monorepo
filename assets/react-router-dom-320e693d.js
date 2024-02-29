import{K as W,L as x,M as q,N as z,O as b,P as F,Q as G}from"./ApplicationSessionManager-99c1baec.js";import{_ as M}from"./inheritsLoose-c82a83d4.js";import{R as c}from"./index-76fb7be0.js";import{_ as g}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import{_ as H}from"./styled-3c6f4d83.js";import{i as O}from"./tiny-invariant-dd7d57d2.js";var tr=function(r){M(t,r);function t(){for(var a,i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return a=r.call.apply(r,[this].concat(o))||this,a.history=W(a.props),a}var e=t.prototype;return e.render=function(){return c.createElement(x,{history:this.history,children:this.props.children})},t}(c.Component);c.Component;var E=function(t,e){return typeof t=="function"?t(e):t},S=function(t,e){return typeof t=="string"?G(t,null,null,e):t},K=function(t){return t},v=c.forwardRef;typeof v>"u"&&(v=K);function I(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}var J=v(function(r,t){var e=r.innerRef,a=r.navigate,i=r.onClick,o=H(r,["innerRef","navigate","onClick"]),n=o.target,l=g({},o,{onClick:function(s){try{i&&i(s)}catch(u){throw s.preventDefault(),u}!s.defaultPrevented&&s.button===0&&(!n||n==="_self")&&!I(s)&&(s.preventDefault(),a())}});return K!==v?l.ref=t||e:l.ref=e,c.createElement("a",l)}),U=v(function(r,t){var e=r.component,a=e===void 0?J:e,i=r.replace,o=r.to,n=r.innerRef,l=H(r,["component","replace","to","innerRef"]);return c.createElement(z.Consumer,null,function(f){f||O(!1);var s=f.history,u=S(E(o,f.location),f.location),L=u?s.createHref(u):"",p=g({},l,{href:L,navigate:function(){var m=E(o,f.location),d=b(f.location)===b(S(m)),N=i||d?s.replace:s.push;N(m)}});return K!==v?p.ref=t||n:p.innerRef=n,c.createElement(a,p)})}),Q=function(t){return t},w=c.forwardRef;typeof w>"u"&&(w=Q);function V(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return t.filter(function(a){return a}).join(" ")}var er=w(function(r,t){var e=r["aria-current"],a=e===void 0?"page":e,i=r.activeClassName,o=i===void 0?"active":i,n=r.activeStyle,l=r.className,f=r.exact,s=r.isActive,u=r.location,L=r.sensitive,p=r.strict,h=r.style,m=r.to,d=r.innerRef,N=H(r,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return c.createElement(z.Consumer,null,function(B){B||O(!1);var y=u||B.location,T=S(E(m,y),y),j=T.pathname,D=j&&j.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),$=D?F(y.pathname,{path:D,exact:f,sensitive:L,strict:p}):null,R=!!(s?s($,y):$),C=typeof l=="function"?l(R):l,P=typeof h=="function"?h(R):h;R&&(C=V(C,o),P=g({},P,n));var A=g({"aria-current":R&&a||null,className:C,style:P,to:T},N);return Q!==w?A.ref=t||d:A.innerRef=d,c.createElement(U,A)})});export{tr as B,U as L,er as N};
