import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{b as P}from"./index-Pxtlv3yl.js";import{R as q,r as x}from"./index-Dl6G-zuu.js";import{bg as O,bh as U,bi as T}from"./SynapseClient-D4M9LQNp.js";import"./OrientationBanner-BV5RFxzC.js";import"./getEndpoint-CjoHA800.js";import{e as V,g as B,h as w,i as W}from"./useAccessRequirements-DaFxdnki.js";import{U as Y}from"./UserSearchBoxV2-B_LPSyit.js";import{U as D}from"./UserOrTeamBadge-BBc5SB4e.js";import{M as G}from"./TextField-BYBL0P0S.js";import{M as F}from"./MenuItem-BC9pRpBm.js";import{T as n}from"./Typography-B88_J_TK.js";import{I as X}from"./IconSvgButton-C3Xk-Z6I.js";import{S as f}from"./Stack-CkbmjR2j.js";import{i as k}from"./isEqual-CzWE5dRj.js";import{B as h}from"./Box-DRdN2jdb.js";import{S as H}from"./Skeleton-C2B0Utez.js";import{M as z}from"./Alert-HJYNNEvY.js";const y=o=>{const{currentAccessType:m,availablePermissionLevels:u,onChange:i}=o;return e.jsx(G,{value:O(m)||null,onChange:t=>{const d=U(t.target.value);d||console.error(`ACCESS_TYPE[] not found for PermissionLevel: ${t.target.value}`),i(d||null)},fullWidth:!0,select:!0,SelectProps:{renderValue:t=>T[t]},size:"small",children:Object.values(u).map(t=>e.jsx(F,{value:t,children:e.jsx(n,{variant:"smallText1",noWrap:!0,children:T[t]})},t))})};try{y.displayName="PermissionLevelMenu",y.__docgenInfo={description:"",displayName:"PermissionLevelMenu",props:{currentAccessType:{defaultValue:null,description:"",name:"currentAccessType",required:!0,type:{name:"ACCESS_TYPE[]"}},availablePermissionLevels:{defaultValue:null,description:"",name:"availablePermissionLevels",required:!0,type:{name:'("CAN_REVIEW_SUBMISSIONS" | "IS_EXEMPTION_ELIGIBLE" | "CAN_REVIEW_SUBMISSIONS_AND_IS_EXEMPTION_ELIGIBLE")[]'}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(accessTypes: ACCESS_TYPE[]) => void"}}}}}catch{}const $="Remove from AR Permissions",J=["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE","CAN_REVIEW_SUBMISSIONS_AND_IS_EXEMPTION_ELIGIBLE"],v=o=>{const{resourceAccess:m,onChange:u,onRemove:i}=o;return e.jsx(e.Fragment,{children:e.jsxs(f,{direction:"row",justifyContent:"space-between",alignItems:"center",gap:"10px",py:"6px",role:"row",children:[e.jsx(n,{fontSize:"16px",lineHeight:"20px",children:e.jsx(D,{principalId:m.principalId})}),e.jsxs(f,{direction:"row",gap:"10px",alignItems:"center",width:"225px",children:[e.jsx(y,{currentAccessType:m.accessType,availablePermissionLevels:J,onChange:u}),e.jsx(X,{"aria-label":$,onClick:()=>i(),icon:"delete",sx:{"&:hover":{color:"error.main"}}})]})]})})};try{v.displayName="ResourceAccessItem",v.__docgenInfo={description:"",displayName:"ResourceAccessItem",props:{resourceAccess:{defaultValue:null,description:"",name:"resourceAccess",required:!0,type:{name:"ResourceAccess"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(accessType: ACCESS_TYPE[]) => void"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!0,type:{name:"() => void"}}}}}catch{}const I={variant:"body1",lineHeight:"20px",color:"grey.800"},K="Only ACT has permissions on this AR.",Q="User or team already has permissions on this AR.",L=q.forwardRef(function(m,u){const{accessRequirementId:i,onSaveComplete:t}=m,[d,E]=x.useState(null),[a,S]=x.useState([]),A=()=>{E(null),t(!0)},_=s=>{E(s.reason),t(!1)},{data:r,isLoading:R}=V(i,{staleTime:1/0});x.useEffect(()=>{r&&S(r.resourceAccess)},[r]);const{mutate:g}=B({onSuccess:()=>A(),onError:s=>_(s)}),{mutate:C}=w({onSuccess:()=>A(),onError:s=>_(s)}),{mutate:j}=W({onSuccess:()=>A(),onError:s=>_(s)});x.useImperativeHandle(u,()=>({save(){const s=a.length===0?null:{...r,id:(r==null?void 0:r.id)||i,resourceAccess:a};r===null&&s==null||k(r==null?void 0:r.resourceAccess,a)&&(r==null?void 0:r.id)===(s==null?void 0:s.id)?t(!0):r===null&&s!==null?C(s):s===null?g(i):j(s)}}),[i,r,a,C,g,t,j]);const b=s=>{if(s)if(a.some(l=>l.principalId===Number(s)))E(Q);else{const l={principalId:Number(s),accessType:[P.REVIEW_SUBMISSIONS]},p=[...a,l];S(p)}else E(null)},M=(s,c)=>{const l=a.map(p=>p.principalId===s?{...p,accessType:c}:p);S(l)},N=s=>{const c=a.filter(l=>l.principalId!==s);S(c)};return e.jsxs(f,{gap:"20px",direction:"column",children:[e.jsxs(h,{children:[e.jsx(n,{variant:"headline3",mb:"10px",children:"Guide to AR permissions"}),e.jsxs(n,{sx:I,mb:"10px",children:[e.jsx("span",{style:{fontStyle:"italic"},children:"Can Review"})," means a user or team has access request review permission for this AR."]}),e.jsxs(n,{sx:I,mb:"10px",children:[e.jsx("span",{style:{fontStyle:"italic"},children:"Exempt Eligible"}),' users and teams can bypass access requirements for entities they have been granted "edit and delete" permission on, via the "Sharing Settings" dialog in the Project Settings.']}),e.jsx(n,{sx:{...I,color:"grey.900"},children:"ACT members always retain the ability to review or modify Access Requirements."})]}),e.jsxs(h,{children:[e.jsxs(h,{mb:"30px",children:[e.jsx(n,{variant:"headline3",mb:"10px",children:"Users and Teams with Permissions"}),R&&e.jsx(H,{variant:"rectangular",width:250,height:24}),!R&&a.length===0?e.jsx(n,{variant:"body1Italic",children:K}):e.jsx(e.Fragment,{children:a.map(s=>e.jsx(v,{resourceAccess:s,onChange:c=>M(s.principalId,c),onRemove:()=>N(s.principalId)},s.principalId))})]}),e.jsxs(h,{children:[e.jsx(n,{variant:"headline3",mb:"10px",children:"Add More"}),e.jsx(n,{sx:{...I,fontStyle:"italic",color:"grey.900"},mb:"20px",children:"Search for a username or team to add. You can search by username, first or last names, or team name"}),e.jsxs(h,{children:[e.jsx(n,{component:"label",variant:"smallText2",htmlFor:"reviewer-search",children:"Select a reviewer"}),e.jsx(Y,{inputId:"reviewer-search",placeholder:"Username, name (first and last) or team name.",onChange:b})]})]})]}),d&&e.jsx(z,{severity:"error",children:d})]})});try{L.displayName="AccessRequirementAclEditor",L.__docgenInfo={description:"",displayName:"AccessRequirementAclEditor",props:{accessRequirementId:{defaultValue:null,description:"",name:"accessRequirementId",required:!0,type:{name:"string"}},onSaveComplete:{defaultValue:null,description:"",name:"onSaveComplete",required:!0,type:{name:"(saveSuccessful: boolean) => void"}}}}}catch{}export{L as A};
