import{j as s}from"./jsx-runtime-Du8NFWEI.js";import{F as P}from"./index-S3N2_v0E.js";import{R as C,r as a}from"./index-Dl6G-zuu.js";import{V as F}from"./SynapseClient-Ihq4xrvb.js";import{D as U}from"./SynapseConstants-BVYQRCsB.js";import"./getEndpoint-CjoHA800.js";import{d as M,c as H}from"./useAccessRequirements-CyQgobKp.js";import{U as O}from"./UploadDocumentField-BKOJwp7-.js";import{S as B}from"./LoadingScreen-Cp1NTgGu.js";import{A as k,a as V}from"./SetBasicAccessRequirementFields-D4RerXo9.js";import{C as o}from"./Checkbox-ByKpZRhl.js";import{M as x}from"./Alert-HJYNNEvY.js";import{B as u}from"./Box-DRdN2jdb.js";import{T as j}from"./Typography-B88_J_TK.js";import{M as N}from"./TextField-BYBL0P0S.js";const $="There was an error uploading the DUC template. ",p=t=>{if(t==="")return 0;const n="Please enter a valid expiration period (in days): ";if(/^[-]?\d+$/.test(t)){const l=Number(t);return l<0?`${n}If expiration period is set, then it must be greater than 0.`:l*U}return`${n}For input string: "${t}"`},A=C.forwardRef(function(n,l){const{accessRequirementId:D,onSave:T,onError:m}=n,{data:d,error:g}=M(D,{staleTime:1/0});a.useEffect(()=>{d&&(i(d),I((d.expirationPeriod/U).toString()))},[d]);const[h,R]=a.useState(null),[q,f]=a.useState(null),[e,i]=a.useState(null),[c,I]=a.useState(""),y=a.useMemo(()=>{if(e!=null&&e.ducTemplateFileHandleId)return{fileHandleId:e.ducTemplateFileHandleId,associateObjectType:P.AccessRequirementAttachment,associateObjectId:e.id.toString()}},[e==null?void 0:e.ducTemplateFileHandleId,e==null?void 0:e.id]),_=r=>{if(r.resp&&r.success&&e){R(null);const S=r.resp;i({...e,ducTemplateFileHandleId:S.fileHandleId})}else!r.success&&r.error&&R(`${$} ${r.error.reason}`)},{mutate:E,isPending:v,error:b}=H({onSuccess:()=>T(),onError:()=>m()});return a.useImperativeHandle(l,()=>({save(){if(e){const r=p(c);typeof r=="string"?(f(r),m()):E({...e,expirationPeriod:r})}}}),[c,e,E,m]),e?s.jsxs(s.Fragment,{children:[s.jsx(k,{accessRequirement:e}),s.jsxs(u,{children:[s.jsx(j,{bgcolor:"#f5f5f5",borderBottom:"1px solid #ddd",color:"#333",px:2,py:1,children:"Data Access Request Parameters"}),s.jsxs(u,{mt:2,mb:4,children:[s.jsx(V,{accessRequirement:e,onChange:r=>i(r)}),s.jsxs(u,{mb:2,children:[s.jsx(j,{variant:"body1",fontWeight:700,children:"DUC"}),s.jsx(o,{label:"DUC is required.",checked:e.isDUCRequired,onChange:r=>i({...e,isDUCRequired:r})}),s.jsxs(F,{children:[s.jsx(O,{id:"duc",isLoading:v,uploadCallback:r=>_(r),documentName:"Template DUC",fileHandleAssociations:y?[y]:void 0,isMultiFileUpload:!1,uploadBtnVariant:"contained"}),h&&s.jsx(x,{severity:"error",sx:{marginTop:2},children:h})]}),s.jsx(o,{label:"IRB approval is required.",checked:e.isIRBApprovalRequired,onChange:r=>i({...e,isIRBApprovalRequired:r})}),s.jsx(o,{label:"Other documents are required.",checked:e.areOtherAttachmentsRequired,onChange:r=>i({...e,areOtherAttachmentsRequired:r})}),s.jsx(N,{id:"expirationPeriod",name:"expirationPeriod",label:"Expiration period (days)",value:c,error:!!q,helperText:q,sx:{mt:1},fullWidth:!0,onChange:r=>{f(null),I(r.target.value)},onBlur:()=>{const r=p(c);typeof r=="string"&&f(r)}}),s.jsxs(u,{mt:1,children:[s.jsx(o,{label:"Intended Data Use statement is required.",checked:e.isIDURequired,onChange:r=>{i(r?{...e,isIDURequired:!0}:{...e,isIDURequired:!1,isIDUPublic:!1})}}),s.jsx(o,{label:"Intended Data Use statements will be publicly available.",checked:e.isIDUPublic,disabled:!e.isIDURequired,onChange:r=>i({...e,isIDUPublic:r})})]})]})]})]}),b&&s.jsx(x,{severity:"error",sx:{marginTop:2},children:b.reason})]}):g?s.jsx(x,{severity:"error",children:g.reason}):s.jsx(B,{})});try{p.displayName="getValidExpirationPeriodOrErrorMessage",p.__docgenInfo={description:"",displayName:"getValidExpirationPeriodOrErrorMessage",props:{}}}catch{}try{A.displayName="SetManagedAccessRequirementFields",A.__docgenInfo={description:"",displayName:"SetManagedAccessRequirementFields",props:{accessRequirementId:{defaultValue:null,description:"",name:"accessRequirementId",required:!0,type:{name:"string"}},onSave:{defaultValue:null,description:"",name:"onSave",required:!0,type:{name:"() => void"}},onError:{defaultValue:null,description:"",name:"onError",required:!0,type:{name:"() => void"}}}}}catch{}export{A as S};