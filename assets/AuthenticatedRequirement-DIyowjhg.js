import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{k as c,I as m}from"./SynapseClient-D4M9LQNp.js";import{S as u}from"./SynapseConstants-JYtSvawC.js";import{P as p}from"./getEndpoint-CjoHA800.js";import"./index-Dl6G-zuu.js";import{R as d,a as s}from"./RequirementItem-BfMJ_PnE.js";import{T as n}from"./Typography-B88_J_TK.js";import{L as i}from"./Link-EkQ0dGSu.js";function o(){const{accessToken:a}=c(),{data:t}=m(),r=!!a;return e.jsxs(d,{status:r?s.COMPLETE:s.LOCKED,children:[!r&&e.jsx(e.Fragment,{children:e.jsxs(n,{variant:"body1",children:[e.jsx(i,{className:u,children:"Sign in"})," ","with a Sage Platform (Synapse) user account. If you do not have a Sage account, you can"," ",e.jsx(i,{href:`${p.PORTAL}RegisterAccount:0`,children:"register for free."})]})}),r&&e.jsxs(n,{variant:"body1",children:["You have signed in with the Sage Platform (Synapse) user account"," ",e.jsxs("b",{children:[t==null?void 0:t.userName,"@synapse.org"]})]})]})}try{o.displayName="AuthenticatedRequirement",o.__docgenInfo={description:"Displays a data access request requirement prompts the user to authenticate if not already signed in.",displayName:"AuthenticatedRequirement",props:{}}}catch{}export{o as A};
