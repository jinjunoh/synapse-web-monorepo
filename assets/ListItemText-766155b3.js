import{_ as h,c as L}from"./createTheme-d609db80.js";import{_ as r}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import{r as y}from"./index-76fb7be0.js";import{s as v,u as C,c as b}from"./styled-bb145c31.js";import{g as w,l as T,a as _}from"./MenuItem-9dd34ee5.js";import{a as N}from"./List-81115ae1.js";import{j as I,a as $}from"./jsx-runtime-9dc53467.js";import{T as d}from"./Typography-f217f607.js";const j=["className"],M=s=>{const{alignItems:t,classes:e}=s;return b({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},w,e)},U=v("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:e}=s;return[t.root,e.alignItems==="flex-start"&&t.alignItemsFlexStart]}})(({theme:s,ownerState:t})=>r({minWidth:56,color:(s.vars||s).palette.action.active,flexShrink:0,display:"inline-flex"},t.alignItems==="flex-start"&&{marginTop:8})),k=y.forwardRef(function(t,e){const o=C({props:t,name:"MuiListItemIcon"}),{className:c}=o,m=h(o,j),a=y.useContext(N),l=r({},o,{alignItems:a.alignItems}),p=M(l);return I(U,r({className:L(p.root,c),ownerState:l,ref:e},m))}),O=k,W=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],B=s=>{const{classes:t,inset:e,primary:o,secondary:c,dense:m}=s;return b({root:["root",e&&"inset",m&&"dense",o&&c&&"multiline"],primary:["primary"],secondary:["secondary"]},_,t)},F=v("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:e}=s;return[{[`& .${T.primary}`]:t.primary},{[`& .${T.secondary}`]:t.secondary},t.root,e.inset&&t.inset,e.primary&&e.secondary&&t.multiline,e.dense&&t.dense]}})(({ownerState:s})=>r({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},s.primary&&s.secondary&&{marginTop:6,marginBottom:6},s.inset&&{paddingLeft:56})),E=y.forwardRef(function(t,e){const o=C({props:t,name:"MuiListItemText"}),{children:c,className:m,disableTypography:a=!1,inset:l=!1,primary:p,primaryTypographyProps:u,secondary:P,secondaryTypographyProps:R}=o,S=h(o,W),{dense:f}=y.useContext(N);let n=p??c,i=P;const g=r({},o,{disableTypography:a,inset:l,primary:!!n,secondary:!!i,dense:f}),x=B(g);return n!=null&&n.type!==d&&!a&&(n=I(d,r({variant:f?"body2":"body1",className:x.primary,component:u!=null&&u.variant?void 0:"span",display:"block"},u,{children:n}))),i!=null&&i.type!==d&&!a&&(i=I(d,r({variant:"body2",className:x.secondary,color:"text.secondary",display:"block"},R,{children:i}))),$(F,r({className:L(x.root,m),ownerState:g,ref:e},S,{children:[n,i]}))}),Q=E;export{O as L,Q as a};
