import{a as _,g as j,_ as y,b as R}from"./createTheme-2XtGYoE4.js";import{_ as e}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import{r as w}from"./index-CBqU2yxZ.js";import{s as S,u as M,c as N}from"./styled-CPWjInoX.js";import{j as d}from"./jsx-runtime-CKrituN3.js";import{F as T}from"./Fade--kK2ZsE4.js";function U(o){return _("MuiBackdrop",o)}j("MuiBackdrop",["root","invisible"]);const $=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],D=o=>{const{classes:t,invisible:s}=o;return N({root:["root",s&&"invisible"]},U,t)},E=S("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:s}=o;return[t.root,s.invisible&&t.invisible]}})(({ownerState:o})=>e({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},o.invisible&&{backgroundColor:"transparent"})),F=w.forwardRef(function(t,s){var n,a,l;const i=M({props:t,name:"MuiBackdrop"}),{children:u,className:f,component:c="div",components:b={},componentsProps:v={},invisible:k=!1,open:g,slotProps:x={},slots:C={},TransitionComponent:h=T,transitionDuration:B}=i,P=y(i,$),p=e({},i,{component:c,invisible:k}),m=D(p),r=(n=x.root)!=null?n:v.root;return d.jsx(h,e({in:g,timeout:B},P,{children:d.jsx(E,e({"aria-hidden":!0},r,{as:(a=(l=C.root)!=null?l:b.Root)!=null?a:c,className:R(m.root,f,r==null?void 0:r.className),ownerState:e({},p,r==null?void 0:r.ownerState),classes:m,ref:s,children:u}))}))}),A=F;export{A as B};
