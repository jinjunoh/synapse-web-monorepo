import{j as i}from"./jsx-runtime-CKrituN3.js";import{r as p}from"./index-CBqU2yxZ.js";import{p as N,g as x}from"./SqlFunctions-Dz44qNt9.js";import{e as T,a as V}from"./SynapseConstants-Dbq7Gtj7.js";import"./getEndpoint-CjoHA800.js";import{h as j,m as w}from"./ApplicationSessionManager-CoKgEkVZ.js";import{u as F}from"./use-deep-compare-effect.esm-Cke5E8XK.js";import{C as O}from"./index-C-UbkUMQ.js";import{U as k}from"./UserCardList-06ULcHcC.js";import{L as M}from"./LargeButton-DX_u8epv.js";import{L as Q}from"./UserBadge-BtPjNMcX.js";const b="sage_rotate_uids",J=3,B=(e=[],s=J,r)=>{let o=[],t=[];const u=localStorage.getItem(r);if(u!=null&&(o=JSON.parse(u)),o.length){const a=e.filter(n=>!o.includes(n));if(a.length>=s)return t=a.slice(0,s),localStorage.setItem(r,JSON.stringify(o.concat(t))),t;{localStorage.removeItem(r);const n=e.slice(0,s-a.length);return localStorage.setItem(r,JSON.stringify(n)),a.concat(n)}}else return t=e.slice(0,s),localStorage.setItem(r,JSON.stringify(t)),t},L=({sql:e,count:s,useQueryResultUserData:r=!1,size:o=T,summaryLink:t,summaryLinkText:u,selectedFacets:a,searchParams:n,sqlOperator:f,additionalFiltersSessionStorageKey:I})=>{const{accessToken:y}=j(),[c,E]=p.useState([]),[U,C]=p.useState(),[m,g]=p.useState();let S=!0;const _=`${b}-${e}-${JSON.stringify(a)}`;return F(()=>(async function(){g(!0);const D=N(e),q=x(I,n,f),A={partMask:V,concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:D,query:{sql:e,additionalFilters:q,selectedFacets:a}},R=await w.getFullQueryTableResults(A,y),{queryResult:d}=R;if(d!=null&&d.queryResults.rows){const v=d.queryResults.headers.findIndex(l=>l.columnType===O.USERID),h=d.queryResults.rows.map(l=>l.values[v]).filter(l=>l!==null);if(S){const l=B(h,s,_);E(l),r&&C(R),g(!1)}}else console.log("UserCardListRotate: Error getting data")}(),()=>{S=!1}),[e,a,s,y,n,f]),i.jsxs("div",{className:"UserCardListRotate",children:[m&&i.jsx(Q,{}),!m&&c.length===0&&i.jsx("p",{className:"font-italic",children:"No one was found."}),!m&&c.length>0&&i.jsx(k,{list:c,size:o,data:U}),t&&u&&i.jsx("div",{className:"UserCardListRotate__summary",children:i.jsx(M,{color:"secondary",variant:"contained",href:t,children:u})})]})};try{L.displayName="UserCardListRotate",L.__docgenInfo={description:"",displayName:"UserCardListRotate",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},useQueryResultUserData:{defaultValue:{value:"false"},description:"",name:"useQueryResultUserData",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"LARGE USER CARD"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},summaryLink:{defaultValue:null,description:"",name:"summaryLink",required:!1,type:{name:"string"}},summaryLinkText:{defaultValue:null,description:"",name:"summaryLinkText",required:!1,type:{name:"string"}},selectedFacets:{defaultValue:null,description:"",name:"selectedFacets",required:!1,type:{name:"FacetColumnRequest[]"}},sqlOperator:{defaultValue:null,description:"",name:"sqlOperator",required:!1,type:{name:"enum",value:[{value:'"LIKE"'},{value:'"EQUAL"'},{value:'"IN"'},{value:'"HAS"'},{value:'"HAS_LIKE"'}]}},searchParams:{defaultValue:null,description:"",name:"searchParams",required:!1,type:{name:"Record<string, string>"}},additionalFiltersSessionStorageKey:{defaultValue:null,description:"",name:"additionalFiltersSessionStorageKey",required:!1,type:{name:"string"}}}}}catch{}export{L as U};
