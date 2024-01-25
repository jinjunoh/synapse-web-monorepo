import{g as B,a as j,F as y,f as M,s as N,q as x,b as a,h as P,_ as U,j as _,k as z}from"./styled-01bfb76d.js";import{r as h}from"./index-76fb7be0.js";import{j as W}from"./jsx-runtime-9dc53467.js";import{T as H}from"./Typography-10432b83.js";import{u as q}from"./useIsFocusVisible-e5f6c995.js";import{u as w}from"./useForkRef-8feb2ebf.js";function E(e){return j("MuiLink",e)}const I=B("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),O=I,g={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},S=e=>g[e]||e,G=({theme:e,ownerState:o})=>{const n=S(o.color),r=y(e,`palette.${n}`,!1)||o.color,s=y(e,`palette.${n}Channel`);return"vars"in e&&s?`rgba(${s} / 0.4)`:M(r,.4)},J=G,K=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Q=e=>{const{classes:o,component:n,focusVisible:r,underline:s}=e,t={root:["root",`underline${x(s)}`,n==="button"&&"button",r&&"focusVisible"]};return z(t,E,o)},X=N(H,{name:"MuiLink",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[`underline${x(n.underline)}`],n.component==="button"&&o.button]}})(({theme:e,ownerState:o})=>a({},o.underline==="none"&&{textDecoration:"none"},o.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},o.underline==="always"&&a({textDecoration:"underline"},o.color!=="inherit"&&{textDecorationColor:J({theme:e,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),o.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${O.focusVisible}`]:{outline:"auto"}})),Y=h.forwardRef(function(o,n){const r=P({props:o,name:"MuiLink"}),{className:s,color:t="primary",component:c="a",onBlur:u,onFocus:p,TypographyClasses:k,underline:C="always",variant:d="inherit",sx:l}=r,F=U(r,K),{isFocusVisibleRef:m,onBlur:L,onFocus:V,ref:v}=q(),[D,f]=h.useState(!1),R=w(n,v),T=i=>{L(i),m.current===!1&&f(!1),u&&u(i)},$=i=>{V(i),m.current===!0&&f(!0),p&&p(i)},b=a({},r,{color:t,component:c,focusVisible:D,underline:C,variant:d}),A=Q(b);return W(X,a({color:t,className:_(A.root,s),classes:k,component:c,onBlur:T,onFocus:$,ref:R,ownerState:b,variant:d,sx:[...Object.keys(g).includes(t)?[]:[{color:t}],...Array.isArray(l)?l:[l]]},F))}),to=Y;export{to as L,O as l};
//# sourceMappingURL=Link-980677d0.js.map
