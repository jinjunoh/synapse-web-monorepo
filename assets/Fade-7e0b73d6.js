import{_ as A,b as c}from"./styled-01bfb76d.js";import{r as E}from"./index-76fb7be0.js";import{u as W}from"./useTheme-541c21f5.js";import{T as $,r as q,g as h}from"./utils-7ba61cee.js";import{j as B}from"./jsx-runtime-9dc53467.js";import{u as D}from"./useForkRef-8feb2ebf.js";const G=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],H={entering:{opacity:1},entered:{opacity:1}},J=E.forwardRef(function(l,y){const e=W(),g={enter:e.transitions.duration.enteringScreen,exit:e.transitions.duration.leavingScreen},{addEndListener:p,appear:T=!0,children:s,easing:f,in:m,onEnter:u,onEntered:L,onEntering:R,onExit:x,onExited:F,onExiting:P,style:a,timeout:d=g,TransitionComponent:w=$}=l,_=A(l,G),r=E.useRef(null),b=D(r,s.ref,y),i=n=>t=>{if(n){const o=r.current;t===void 0?n(o):n(o,t)}},j=i(R),C=i((n,t)=>{q(n);const o=h({style:a,timeout:d,easing:f},{mode:"enter"});n.style.webkitTransition=e.transitions.create("opacity",o),n.style.transition=e.transitions.create("opacity",o),u&&u(n,t)}),k=i(L),v=i(P),S=i(n=>{const t=h({style:a,timeout:d,easing:f},{mode:"exit"});n.style.webkitTransition=e.transitions.create("opacity",t),n.style.transition=e.transitions.create("opacity",t),x&&x(n)}),z=i(F);return B(w,c({appear:T,in:m,nodeRef:r,onEnter:C,onEntered:k,onEntering:j,onExit:S,onExited:z,onExiting:v,addEndListener:n=>{p&&p(r.current,n)},timeout:d},_,{children:(n,t)=>E.cloneElement(s,c({style:c({opacity:0,visibility:n==="exited"&&!m?"hidden":void 0},H[n],a,s.props.style),ref:b},t))}))}),Y=J;export{Y as F};
//# sourceMappingURL=Fade-7e0b73d6.js.map
