import{g as U,a as V,s as p,q as b,t as S,r as z,b as a,h as F,_ as Z,j as q,k as D}from"./styled-01bfb76d.js";import{r as G}from"./index-76fb7be0.js";import{c}from"./createSvgIcon-af041161.js";import{j as l,a as J}from"./jsx-runtime-9dc53467.js";import{P as K}from"./Paper-b990f44f.js";import{I as Q}from"./IconButton-e4815158.js";function X(o){return V("MuiAlert",o)}const Y=U("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),L=Y,oo=c(l("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),to=c(l("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),so=c(l("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),lo=c(l("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),ro=c(l("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),eo=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],no=o=>{const{variant:s,color:r,severity:e,classes:t}=o,d={root:["root",`${s}${b(r||e)}`,`${s}`],icon:["icon"],message:["message"],action:["action"]};return D(d,X,t)},ao=p(K,{name:"MuiAlert",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:r}=o;return[s.root,s[r.variant],s[`${r.variant}${b(r.color||r.severity)}`]]}})(({theme:o,ownerState:s})=>{const r=o.palette.mode==="light"?S:z,e=o.palette.mode==="light"?z:S,t=s.color||s.severity;return a({},o.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},t&&s.variant==="standard"&&{color:o.vars?o.vars.palette.Alert[`${t}Color`]:r(o.palette[t].light,.6),backgroundColor:o.vars?o.vars.palette.Alert[`${t}StandardBg`]:e(o.palette[t].light,.9),[`& .${L.icon}`]:o.vars?{color:o.vars.palette.Alert[`${t}IconColor`]}:{color:o.palette[t].main}},t&&s.variant==="outlined"&&{color:o.vars?o.vars.palette.Alert[`${t}Color`]:r(o.palette[t].light,.6),border:`1px solid ${(o.vars||o).palette[t].light}`,[`& .${L.icon}`]:o.vars?{color:o.vars.palette.Alert[`${t}IconColor`]}:{color:o.palette[t].main}},t&&s.variant==="filled"&&a({fontWeight:o.typography.fontWeightMedium},o.vars?{color:o.vars.palette.Alert[`${t}FilledColor`],backgroundColor:o.vars.palette.Alert[`${t}FilledBg`]}:{backgroundColor:o.palette.mode==="dark"?o.palette[t].dark:o.palette[t].main,color:o.palette.getContrastText(o.palette[t].main)}))}),io=p("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(o,s)=>s.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),co=p("div",{name:"MuiAlert",slot:"Message",overridesResolver:(o,s)=>s.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),P=p("div",{name:"MuiAlert",slot:"Action",overridesResolver:(o,s)=>s.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),B={success:l(oo,{fontSize:"inherit"}),warning:l(to,{fontSize:"inherit"}),error:l(so,{fontSize:"inherit"}),info:l(lo,{fontSize:"inherit"})},po=G.forwardRef(function(s,r){var e,t,d,f,C,A;const u=F({props:s,name:"MuiAlert"}),{action:g,children:R,className:k,closeText:m="Close",color:_,components:I={},componentsProps:M={},icon:x,iconMapping:O=B,onClose:$,role:N="alert",severity:v="success",slotProps:h={},slots:y={},variant:W="standard"}=u,w=Z(u,eo),n=a({},u,{color:_,severity:v,variant:W}),i=no(n),E=(e=(t=y.closeButton)!=null?t:I.CloseButton)!=null?e:Q,j=(d=(f=y.closeIcon)!=null?f:I.CloseIcon)!=null?d:ro,H=(C=h.closeButton)!=null?C:M.closeButton,T=(A=h.closeIcon)!=null?A:M.closeIcon;return J(ao,a({role:N,elevation:0,ownerState:n,className:q(i.root,k),ref:r},w,{children:[x!==!1?l(io,{ownerState:n,className:i.icon,children:x||O[v]||B[v]}):null,l(co,{ownerState:n,className:i.message,children:R}),g!=null?l(P,{ownerState:n,className:i.action,children:g}):null,g==null&&$?l(P,{ownerState:n,className:i.action,children:l(E,a({size:"small","aria-label":m,title:m,color:"inherit",onClick:$},H,{children:l(j,a({fontSize:"small"},T))}))}):null]}))}),mo=po;export{mo as A,ro as C};
//# sourceMappingURL=Alert-34cc4490.js.map
