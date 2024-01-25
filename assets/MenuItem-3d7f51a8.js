import{g as f,a as g,s as N,G as P,b as r,f as c,h as U,_ as j,j as x,k as w}from"./styled-01bfb76d.js";import{r as d}from"./index-76fb7be0.js";import{a as $}from"./List-94bb762a.js";import{j as M}from"./jsx-runtime-9dc53467.js";import{B as S}from"./ButtonBase-f3be4fb1.js";import{d as O}from"./dividerClasses-5829bcb2.js";import{a as _,u as E}from"./useForkRef-8feb2ebf.js";function ae(e){return g("MuiListItemIcon",e)}const H=f("MuiListItemIcon",["root","alignItemsFlexStart"]),k=H;function oe(e){return g("MuiListItemText",e)}const z=f("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),L=z;function D(e){return g("MuiMenuItem",e)}const W=f("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),n=W,q=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],A=(e,t)=>{const{ownerState:s}=e;return[t.root,s.dense&&t.dense,s.divider&&t.divider,!s.disableGutters&&t.gutters]},J=e=>{const{disabled:t,dense:s,divider:a,disableGutters:l,selected:p,classes:o}=e,i=w({root:["root",s&&"dense",t&&"disabled",!l&&"gutters",a&&"divider",p&&"selected"]},D,o);return r({},o,i)},K=N(S,{shouldForwardProp:e=>P(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:A})(({theme:e,ownerState:t})=>r({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${n.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:c(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${n.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:c(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${n.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:c(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:c(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${n.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${n.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${O.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${O.inset}`]:{marginLeft:52},[`& .${L.root}`]:{marginTop:0,marginBottom:0},[`& .${L.inset}`]:{paddingLeft:36},[`& .${k.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&r({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${k.root} svg`]:{fontSize:"1.25rem"}}))),Q=d.forwardRef(function(t,s){const a=U({props:t,name:"MuiMenuItem"}),{autoFocus:l=!1,component:p="li",dense:o=!1,divider:b=!1,disableGutters:i=!1,focusVisibleClassName:T,role:R="menuitem",tabIndex:v,className:B}=a,V=j(a,q),y=d.useContext($),C=d.useMemo(()=>({dense:o||y.dense||!1,disableGutters:i}),[y.dense,o,i]),u=d.useRef(null);_(()=>{l&&u.current&&u.current.focus()},[l]);const F=r({},a,{dense:C.dense,divider:b,disableGutters:i}),m=J(a),G=E(u,s);let I;return a.disabled||(I=v!==void 0?v:-1),M($.Provider,{value:C,children:M(K,r({ref:G,role:R,tabIndex:I,component:p,focusVisibleClassName:x(m.focusVisible,T),className:x(m.root,B)},V,{ownerState:F,classes:m}))})}),ie=Q;export{ie as M,oe as a,ae as g,L as l};
//# sourceMappingURL=MenuItem-3d7f51a8.js.map
