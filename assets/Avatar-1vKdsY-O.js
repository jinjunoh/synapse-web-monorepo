import{a as C,g as I,_ as D,b as F}from"./createTheme-2XtGYoE4.js";import{_ as l}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import{r as v}from"./index-CBqU2yxZ.js";import{u as M,c as N}from"./Alert-jLvJNeQC.js";import{c as z}from"./createSvgIcon-ClnqzT54.js";import{j as p}from"./jsx-runtime-CKrituN3.js";import{s as g,c as U}from"./styled-CPWjInoX.js";const _=z(p.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function T(o){return C("MuiAvatar",o)}I("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const E=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],L=N(),q=o=>{const{classes:r,variant:t,colorDefault:a}=o;return U({root:["root",t,a&&"colorDefault"],img:["img"],fallback:["fallback"]},T,r)},B=g("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:t}=o;return[r.root,r[t.variant],t.colorDefault&&r.colorDefault]}})(({theme:o})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:o.typography.fontFamily,fontSize:o.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(o.vars||o).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:l({color:(o.vars||o).palette.background.default},o.vars?{backgroundColor:o.vars.palette.Avatar.defaultBg}:l({backgroundColor:o.palette.grey[400]},o.applyStyles("dark",{backgroundColor:o.palette.grey[600]})))}]})),H=g("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(o,r)=>r.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),W=g(_,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(o,r)=>r.fallback})({width:"75%",height:"75%"});function $({crossOrigin:o,referrerPolicy:r,src:t,srcSet:a}){const[n,s]=v.useState(!1);return v.useEffect(()=>{if(!t&&!a)return;s(!1);let i=!0;const e=new Image;return e.onload=()=>{i&&s("loaded")},e.onerror=()=>{i&&s("error")},e.crossOrigin=o,e.referrerPolicy=r,e.src=t,a&&(e.srcset=a),()=>{i=!1}},[o,r,t,a]),n}const G=v.forwardRef(function(r,t){const a=L({props:r,name:"MuiAvatar"}),{alt:n,children:s,className:i,component:e="div",slots:x={},slotProps:A={},imgProps:y,sizes:P,src:u,srcSet:f,variant:k="circular"}=a,R=D(a,E);let c=null;const S=$(l({},y,{src:u,srcSet:f})),b=u||f,h=b&&S!=="error",d=l({},a,{colorDefault:!h,component:e,variant:k}),m=q(d),[j,w]=M("img",{className:m.img,elementType:H,externalForwardedProps:{slots:x,slotProps:{img:l({},y,A.img)}},additionalProps:{alt:n,src:u,srcSet:f,sizes:P},ownerState:d});return h?c=p.jsx(j,l({},w)):s||s===0?c=s:b&&n?c=n[0]:c=p.jsx(W,{ownerState:d,className:m.fallback}),p.jsx(B,l({as:e,ownerState:d,className:F(m.root,i),ref:t},R,{children:c}))}),Z=G;export{Z as A};
