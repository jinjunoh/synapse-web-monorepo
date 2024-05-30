import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{r as o}from"./index-Dl6G-zuu.js";import{S as F}from"./createSvgIcon-BYNyJbGL.js";import{F as D}from"./index-S3N2_v0E.js";import"./SkeletonButton-2OUtbWJw.js";import{M as E,J as M}from"./HelpPopover-F37HRDEf.js";import"./SkeletonTable-CULGn8eZ.js";import{a as G}from"./useFiles-Dg_b1f2o.js";import{L as w}from"./Link-EkQ0dGSu.js";import{t as O}from"./times-Z7TOiV6C.js";import{S as q}from"./Skeleton-C2B0Utez.js";import{y as B,a as H}from"./SynapseConstants-BVYQRCsB.js";import"./SynapseClient-Ihq4xrvb.js";import"./getEndpoint-CjoHA800.js";import{a as U}from"./useGetQueryResultBundle-CLS5N-6K.js";import{B as $}from"./Button-mb55Lwfk.js";const S=t=>e.jsx(F,{...t,height:15,viewBox:"0 0 19 15",children:e.jsx("path",{d:"M18.7184 1.81746L6.05903 14.6667L0.256836 8.77744L1.74431 7.26766L6.05903 11.6364L17.2309 0.307678L18.7184 1.81746Z",fill:"white"})});try{S.displayName="CheckIcon",S.__docgenInfo={description:"",displayName:"CheckIcon",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const T=t=>{const{id:i,item:p,enabled:d,checked:m,onChange:b,termsAndConditionsTableID:l}=t,{iconFileHandleId:C,label:k,description:a}=p,{data:x}=G({associateObjectId:l,associateObjectType:D.TableEntity,fileHandleId:C},!0),[r,h]=o.useState(!1),[y,f]=o.useState(!1);let g=!0;o.useEffect(()=>(g&&f(m),()=>{g=!1}),[d,m]);const I=s=>{s.preventDefault(),d&&h(!r)},n=s=>{d&&b(i)};return e.jsxs("li",{className:d?"terms-enabled":"",children:[e.jsx("span",{className:"terms-icon",dangerouslySetInnerHTML:{__html:x??""}}),e.jsxs("span",{className:"terms-desc",children:[e.jsx("label",{id:`toc-item-${i}`,children:e.jsx(E,{markdown:k})}),r&&a&&e.jsx("div",{className:"terms-desc-content",children:e.jsx(E,{markdown:a})}),a&&e.jsx("div",{children:e.jsx(w,{className:"terms-show-desc highlight-link",href:"",onClick:I,children:r?"Show Less":"Show More"})})]}),e.jsxs("span",{className:"terms-checkbox",children:[e.jsx("span",{role:"checkbox","aria-labelledby":`toc-item-${i}`,className:y?"terms-circle terms-checked":"terms-circle",onClick:n,children:e.jsx(S,{})}),"I agree"]})]})};function L(t){const{numLoadingItems:i}=t;return e.jsx(e.Fragment,{children:O(i).map(p=>e.jsxs("li",{"aria-busy":"true","aria-live":"polite","data-testid":"loading-terms-and-conditions",children:[e.jsx("span",{className:"terms-icon",children:e.jsx(q,{variant:"rectangular",height:"30px",width:"30px",sx:{margin:"auto"}})}),e.jsx("span",{className:"terms-desc",children:e.jsx(M,{numRows:5})}),e.jsx("span",{className:"terms-checkbox",children:e.jsx(q,{variant:"circular",height:"40px",width:"40px",sx:{margin:"auto"}})})]},p))})}try{L.displayName="LoadingItem",L.__docgenInfo={description:"",displayName:"LoadingItem",props:{numLoadingItems:{defaultValue:null,description:"",name:"numLoadingItems",required:!0,type:{name:"number"}}}}}catch{}try{T.displayName="TermsAndConditionsItem",T.__docgenInfo={description:"",displayName:"TermsAndConditionsItem",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"number"}},enabled:{defaultValue:null,description:"",name:"enabled",required:!0,type:{name:"boolean"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"tcItem"}},termsAndConditionsTableID:{defaultValue:null,description:"",name:"termsAndConditionsTableID",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(id: number) => void"}}}}}catch{}const v=({termsAndConditionsTableID:t="syn51718002",termsAndConditionsTableVersion:i="4",onFormChange:p,hideLinkToFullTC:d=!1})=>{const[m,b]=o.useState([]),{data:l,isLoading:C}=U({entityId:t,query:{sql:`SELECT * FROM ${t}.${i} ORDER BY order asc`},partMask:H,concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest"},{staleTime:1/0},!0);o.useEffect(()=>{if(l&&l.queryResult&&l.queryResult.queryResults){const{rows:n,headers:s}=l.queryResult.queryResults,u=s.findIndex(c=>c.name==="icon"),V=s.findIndex(c=>c.name==="label"),R=s.findIndex(c=>c.name==="description"),_=[];n.forEach(c=>{const{values:j}=c,A={iconFileHandleId:j[u]??"",label:j[V]??"",description:j[R]??""};_.push(A)}),b(_);const N=_.length;h(a(N)),f(a(N).fill(!0,0,1))}},[l]);const k="https://help.synapse.org/docs/Synapse-Governance.2004255211.html",a=n=>Array.from(Array(n).fill(!1));let x=!0;const[r,h]=o.useState([]),[y,f]=o.useState([]);o.useEffect(()=>(x&&g(),()=>{x=!1}),[y,r]);const g=()=>{const n=r.length>0&&!r.includes(!1);p(n)},I=n=>{const s=!r[n],u=r.length;s?(h(a(u).fill(!0,0,n+1)),n+2<=m.length&&f(a(u).fill(!0,0,n+2))):(h(a(u).fill(!0,0,n)),f(a(u).fill(!0,0,n+1)))};return e.jsxs("section",{className:"terms-conditions",children:[e.jsx("h3",{className:"page-header",children:"Synapse Pledge"}),e.jsxs("form",{children:[e.jsxs("label",{children:["I affirm my commitment to all"," ",e.jsx(w,{target:"_blank",href:k,children:"Sage Governance policies"})," ","for responsible research and data handling (linked below), including:"]}),e.jsxs("ul",{className:"term-list",children:[C&&e.jsx(L,{numLoadingItems:6}),m.length>0&&m.map((n,s)=>e.jsx(T,{item:n,id:s,checked:r[s],enabled:y[s],termsAndConditionsTableID:t,onChange:I},`tc-item-${s}`))]}),!d&&e.jsx("div",{className:"view-terms",children:e.jsx($,{variant:"contained",href:B,target:"_blank",children:"View Complete Terms and Conditions for Use"})})]})]})};try{v.displayName="TermsAndConditions",v.__docgenInfo={description:"",displayName:"TermsAndConditions",props:{onFormChange:{defaultValue:null,description:"",name:"onFormChange",required:!0,type:{name:"(formComplete: boolean) => void"}},termsAndConditionsTableID:{defaultValue:{value:"syn51718002"},description:"",name:"termsAndConditionsTableID",required:!1,type:{name:"string"}},termsAndConditionsTableVersion:{defaultValue:{value:"4"},description:"",name:"termsAndConditionsTableVersion",required:!1,type:{name:"string"}},hideLinkToFullTC:{defaultValue:{value:"false"},description:"",name:"hideLinkToFullTC",required:!1,type:{name:"boolean"}}}}}catch{}export{v as T};