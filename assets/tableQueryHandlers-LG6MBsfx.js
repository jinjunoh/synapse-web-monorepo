import{l}from"./index-CGGsuVLc.js";import{ba as I,bb as f,bc as D}from"./SynapseClient-D4M9LQNp.js";import{g as T,B as d}from"./getEndpoint-CjoHA800.js";import{a as R,d as g,m as O,u as b,r as M,s as U,v as A,t as B}from"./SynapseConstants-JYtSvawC.js";import{u as _}from"./uniqueId-DePWDRrE.js";import{c as L}from"./cloneDeep-CwQXpD5Z.js";const E=new Map;function S(a,t,e,o=T(d.REPO_ENDPOINT),m=201){return[l.rest.post(`${o}${a}`,async(r,i,n)=>{const s=_();return E.set(s,{request:await r.json(),response:e}),i(n.status(201),n.json({token:s}))}),l.rest.get(`${o}${I(":id")}`,async(r,i,n)=>{const s=r.params.id,c=E.get(s);if(!s||!c)return i(n.status(404),n.json({message:"The mocked asynchronous job was not found"}));const{request:p,response:u}=c,y=typeof u=="function"?u(p):u,N=m<400?"COMPLETE":"FAILED";return i(n.status(200),n.json({jobState:N,jobCanceling:!1,requestBody:p,etag:"00000000-0000-0000-0000-000000000000",jobId:s,responseBody:y,startedByUserId:0,startedOn:"",changedOn:"",progressMessage:"",progressCurrent:100,progressTotal:100,exception:"",errorMessage:"",errorDetails:"",runtimeMS:100}))}),l.rest.get(`${o}${t(":asyncJobToken")}`,async(r,i,n)=>{const s=r.params.asyncJobToken,c=E.get(s);if(!s||!c)return i(n.status(404),n.json({message:"The mocked asynchronous job was not found"}));const{request:p,response:u}=c,y=typeof u=="function"?u(p):u;return i(n.status(m),n.json(y))})]}const C=[{name:"id",columnType:"ENTITYID",id:"81721"},{name:"name",columnType:"STRING",id:"81722",maximumSize:256},{name:"description",columnType:"STRING",id:"87941",maximumSize:1e3},{name:"createdOn",columnType:"DATE",facetType:"range",id:"81723"},{name:"createdBy",columnType:"USERID",facetType:"enumeration",id:"81724"},{name:"etag",columnType:"STRING",id:"81725",maximumSize:36},{name:"modifiedOn",columnType:"DATE",facetType:"range",id:"81726"},{name:"modifiedBy",columnType:"USERID",facetType:"enumeration",id:"81727"},{name:"type",columnType:"STRING",facetType:"enumeration",id:"196992",maximumSize:20},{name:"currentVersion",columnType:"INTEGER",id:"81729"},{name:"parentId",columnType:"ENTITYID",facetType:"enumeration",id:"81730"},{name:"benefactorId",columnType:"ENTITYID",id:"81731"},{name:"projectId",columnType:"ENTITYID",facetType:"enumeration",id:"81732"},{name:"dataFileHandleId",columnType:"FILEHANDLEID",id:"81733"},{name:"dataFileName",columnType:"STRING",id:"199088",maximumSize:256},{name:"dataFileSizeBytes",columnType:"INTEGER",id:"112368"},{name:"dataFileMD5Hex",columnType:"STRING",id:"112369",maximumSize:100},{name:"dataFileConcreteType",columnType:"STRING",facetType:"enumeration",id:"196995",maximumSize:65},{name:"dataFileBucket",columnType:"STRING",facetType:"enumeration",id:"196996",maximumSize:100},{name:"dataFileKey",columnType:"STRING",id:"184972",maximumSize:700}],j={[R]:"queryResult",[g]:"queryCount",[O]:"selectColumns",[b]:"maxRowsPerPage",[M]:"columnModels",[U]:"facets",[A]:"sumFileSizes",[B]:"lastUpdatedOn"};function P(a,t){const e=L(a);return Object.entries(j).forEach(([o,m])=>{t&parseInt(o)||delete e[m]}),e}function K(a,t=T(d.REPO_ENDPOINT)){return S(D(":id"),e=>f(":entityId",e),e=>P(a,e.partMask),t)}function h(a,t=T(d.REPO_ENDPOINT)){return S("/repo/v1/column/view/scope/async/start",e=>`/repo/v1/column/view/scope/async/get/${e}`,a,t)}function H(a=T(d.REPO_ENDPOINT)){return[l.rest.get(`${a}/repo/v1/column/tableview/defaults`,async(t,e,o)=>e(o.status(200),o.json({concreteType:"org.sagebionetworks.repo.model.table.ColumnModel",list:C})))]}function J(a=T(d.REPO_ENDPOINT)){return l.rest.post(`${a}/repo/v1/column/batch`,async(t,e,o)=>{const{list:m}=await t.json();return m.forEach(r=>{r.id||(r.id=_())}),e(o.status(201),o.json({concreteType:"org.sagebionetworks.repo.model.table.ColumnModel",list:m}))})}export{H as a,h as b,J as c,K as g};
