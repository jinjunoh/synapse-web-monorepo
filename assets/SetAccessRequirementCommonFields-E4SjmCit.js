import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{R as l,d as L,M as V,b as Y}from"./index-Pxtlv3yl.js";import{p as J}from"./pluralize-CVwSCrA2.js";import{R as Q,r as i}from"./index-Dl6G-zuu.js";import"./SynapseClient-D4M9LQNp.js";import"./OrientationBanner-BV5RFxzC.js";import"./getEndpoint-CjoHA800.js";import{b as W,c as z,d as X}from"./useAccessRequirements-DaFxdnki.js";import{E as K}from"./EntitySubjectsSelector-3EBMv2cE.js";import{T as Z}from"./TeamSubjectsSelector-DmGgeYaT.js";import{R as ee}from"./RadioGroup-AMpK4AOs.js";import{C as te}from"./Checkbox-ByKpZRhl.js";import{S as E}from"./Skeleton-C2B0Utez.js";import{M as x}from"./TextField-BYBL0P0S.js";import{M as b}from"./Alert-HJYNNEvY.js";import{T as _}from"./Typography-B88_J_TK.js";import{S as se}from"./Stack-CkbmjR2j.js";import{M as re}from"./Tooltip-CYVQ1vhC.js";import{H as ne}from"./IconSvg-BZPixSS9.js";const oe="Please select at least one resource for this Access Requirement to be associated with.",g=c=>{const S=c===l.ENTITY?"Synapse":"Team",T=c[0].toUpperCase()+c.slice(1).toLowerCase();return`${S} IDs were specified but not added to the subjects list. Please either clear out the Add ${S} IDs textbox or click the Add ${J(T)} button.`},ae="Enter access requirement name. This will also be used when sending notifications for expiring or revoked approval. For example, 'The approval for the name access requirement was revoked...'",y={variant:"body1",fontWeight:700};function ie(c){switch(c){case l.ENTITY:return Y.DOWNLOAD;case l.TEAM:return Y.PARTICIPATE;default:throw new Error(`RestrictableObjectType ${c} does not have an access type specified.`)}}const k=Q.forwardRef(function(S,T){const{subject:n,accessRequirementId:C,onSave:B,onError:h}=S,d=!n,[u,j]=i.useState(n?[n]:[]),[A,G]=i.useState(!1),[I,m]=i.useState(null),[f,M]=i.useState(""),[o,N]=i.useState(!1),[R,q]=i.useState((n==null?void 0:n.type)===l.TEAM?L:V),[w,v]=i.useState(null),U=t=>{v(null),B(t.id.toString(),t.concreteType)},D=t=>{v(t.reason),h()},{mutate:F}=W({onSuccess:t=>U(t),onError:t=>D(t)}),{mutate:O}=z({onSuccess:t=>U(t),onError:t=>D(t)}),{data:s,isLoading:H,error:P}=X(C,{enabled:!!C});i.useEffect(()=>{s&&(q(s.concreteType),M(s.name),j(s.subjectIds),N(s.subjectsDefinedByAnnotations))},[s]);const a=i.useMemo(()=>{if(n)return n.type;if(s){const t=s.subjectIds;if(t.length>0)return t[0].type}return o?l.ENTITY:null},[n,s,o]),$=i.useMemo(()=>{if(!a)return e.jsx(e.Fragment,{});function t(r){m(null),j(r)}function p(r){m(null),G(r.trim()!=="")}if(o)return e.jsx(e.Fragment,{});switch(a){case l.TEAM:return e.jsx(Z,{subjects:u,onUpdate:r=>t(r),onUpdateTeamIDsTextbox:r=>p(r)});case l.ENTITY:return e.jsx(K,{subjects:u,onUpdate:r=>t(r),onUpdateEntityIDsTextbox:r=>p(r)});default:return console.error(`RestrictableObjectType ${a} does not have a selector implemented.`),e.jsx(e.Fragment,{})}},[a,u,o]);return i.useImperativeHandle(T,()=>({save(){const t=d&&!s||!a,p=!o&&(A||u.length===0);if(t||p){p&&!t&&(A?m(g(a)):u.length===0&&m(oe)),h();return}const r=ie(a);d||F({concreteType:R,subjectIds:u,name:f,accessType:r,subjectsDefinedByAnnotations:o}),d&&s&&O({...s,subjectIds:u,name:f,accessType:r,subjectsDefinedByAnnotations:o})}}),[A,a,u,f,R,s,d,h,F,O,o]),H||!a?e.jsxs(e.Fragment,{children:[e.jsx(E,{width:100,height:30}),e.jsx(E,{width:125,height:30}),e.jsx(E,{width:"100%",children:e.jsx(x,{})}),e.jsx(E,{width:100,height:30}),e.jsx(E,{width:"100%",children:e.jsx(x,{})})]}):P?e.jsx(b,{severity:"error",children:P.reason}):e.jsxs(e.Fragment,{children:[e.jsx(_,{...y,children:"Resources"}),a!==l.TEAM&&e.jsx(e.Fragment,{children:e.jsx(te,{label:"Associated entities should be defined by annotations (DUO)",checked:o,onChange:()=>{m(null);let t=[];o&&(s?t=s.subjectIds:n&&(t=[n])),j(t),N(!o)}})}),$,I&&e.jsx(b,{severity:"error",children:I}),e.jsxs(se,{direction:"row",gap:1,alignItems:"center",mb:1,mt:2,children:[e.jsx(_,{component:"label",htmlFor:"arName",...y,children:"Name"}),e.jsx(re,{title:ae,placement:"right",children:e.jsx(ne,{sx:{color:"grey.600"}})})]}),e.jsx(x,{id:"arName",name:"arName",value:f,placeholder:"Access requirement name",fullWidth:!0,onChange:t=>M(t.target.value)}),!d&&a!==l.TEAM&&e.jsxs(e.Fragment,{children:[e.jsx(_,{...y,mt:2,children:"Access requirement type"}),e.jsx(ee,{value:R,options:[{label:"Controlled - requests are in Synapse",value:V},{label:"Click wrap",value:L}],onChange:t=>q(t)})]}),w&&e.jsx(b,{severity:"error",sx:{marginTop:2},children:w})]})});try{g.displayName="UNSAVED_SUBJECTS_ERROR_MESSAGE",g.__docgenInfo={description:"",displayName:"UNSAVED_SUBJECTS_ERROR_MESSAGE",props:{}}}catch{}try{k.displayName="SetAccessRequirementCommonFields",k.__docgenInfo={description:"",displayName:"SetAccessRequirementCommonFields",props:{subject:{defaultValue:null,description:"",name:"subject",required:!1,type:{name:"RestrictableObjectDescriptor"}},accessRequirementId:{defaultValue:null,description:"",name:"accessRequirementId",required:!1,type:{name:"string"}},onSave:{defaultValue:null,description:"",name:"onSave",required:!0,type:{name:"(accessRequirementId: string, accessRequirementConreteType: ACCESS_REQUIREMENT_CONCRETE_TYPE) => void"}},onError:{defaultValue:null,description:"",name:"onError",required:!0,type:{name:"() => void"}}}}}catch{}export{k as S};
