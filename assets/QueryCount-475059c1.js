import{j as l}from"./jsx-runtime-9dc53467.js";import{R as i}from"./index-76fb7be0.js";import{a as c}from"./SynapseConstants-eb00dc31.js";import"./getEndpoint-ac94413e.js";import"./ApplicationSessionManager-99c1baec.js";import{p as m}from"./SqlFunctions-88356349.js";import{u as d}from"./useGetQueryResultBundle-a3f58838.js";function n(r){var a;const{query:o,parens:s}=r,u=m(o.sql),p={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",query:o,entityId:u,partMask:c},{data:e}=d(p),t=(a=e==null?void 0:e.queryCount)==null?void 0:a.toLocaleString();return l(i.Fragment,{children:t&&(s?`(${t})`:t)})}try{n.displayName="QueryCount",n.__docgenInfo={description:"Shows the total count of results for a table query.",displayName:"QueryCount",props:{query:{defaultValue:null,description:"",name:"query",required:!0,type:{name:"Query"}},parens:{defaultValue:null,description:"",name:"parens",required:!1,type:{name:"boolean"}}}}}catch{}export{n as Q};
