import{a as b,g as L,s as x,b as i,h as f,_ as C,j as P,k as j}from"./styled-01bfb76d.js";import{r}from"./index-76fb7be0.js";import{j as v,a as M}from"./jsx-runtime-9dc53467.js";const R=r.createContext({}),U=R;function _(s){return b("MuiList",s)}L("MuiList",["root","padding","dense","subheader"]);const w=["children","className","component","dense","disablePadding","subheader"],y=s=>{const{classes:e,disablePadding:t,dense:o,subheader:a}=s;return j({root:["root",!t&&"padding",o&&"dense",a&&"subheader"]},_,e)},N=x("ul",{name:"MuiList",slot:"Root",overridesResolver:(s,e)=>{const{ownerState:t}=s;return[e.root,!t.disablePadding&&e.padding,t.dense&&e.dense,t.subheader&&e.subheader]}})(({ownerState:s})=>i({listStyle:"none",margin:0,padding:0,position:"relative"},!s.disablePadding&&{paddingTop:8,paddingBottom:8},s.subheader&&{paddingTop:0})),S=r.forwardRef(function(e,t){const o=f({props:e,name:"MuiList"}),{children:a,className:d,component:c="ul",dense:n=!1,disablePadding:u=!1,subheader:p}=o,m=C(o,w),g=r.useMemo(()=>({dense:n}),[n]),l=i({},o,{component:c,dense:n,disablePadding:u}),h=y(l);return v(U.Provider,{value:g,children:M(N,i({as:c,className:P(h.root,d),ref:t,ownerState:l},m,{children:[p,a]}))})}),B=S;export{B as L,U as a};
//# sourceMappingURL=List-94bb762a.js.map
