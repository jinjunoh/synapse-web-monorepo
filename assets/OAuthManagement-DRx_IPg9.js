import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{r as i}from"./index-Dl6G-zuu.js";import{f as ie}from"./DateFormatter-BB-wk6UA.js";import{d as ae}from"./dayjs.min-d18Up55D.js";import{k as O,p as T,q as J}from"./SynapseClient-Ihq4xrvb.js";import"./OrientationBanner-BV5RFxzC.js";import"./getEndpoint-CjoHA800.js";import{u as $}from"./useMutation-C9F3oaw-.js";import{u as _e}from"./useInfiniteQuery-rilHf7iP.js";import{d as M}from"./ToastMessage-CyCjbTLE.js";import{I as Ie}from"./index-S3N2_v0E.js";import{u as be}from"./UserSearchBoxV2-DMiEGNfQ.js";import{W as pe}from"./WarningDialog-DY7P0_8l.js";import{d as oe}from"./DeleteTwoTone-X54GIKhD.js";import{S as Ae}from"./LoadingScreen-Cp1NTgGu.js";import{C as Re,w as C,u as Me,v as le,b as ce,y as Oe,x as Te}from"./HelpPopover-F37HRDEf.js";import{M as S}from"./TextField-BYBL0P0S.js";import{I as ke}from"./InputAdornment-BrA2GMI5.js";import{I as Ne}from"./IconButton-CgTC7RgJ.js";import{B as j}from"./Button-mb55Lwfk.js";import{T as z}from"./Typography-B88_J_TK.js";import{G as p}from"./Grid-BIUd9Pes.js";import{M as ue}from"./MenuItem-BC9pRpBm.js";import{B as fe}from"./Box-DRdN2jdb.js";import{M as De}from"./Alert-HJYNNEvY.js";import{C as qe}from"./CopyToClipboardInput-DeJ_7HLz.js";import{S as Pe}from"./StyledTableContainer-DdS89Q-3.js";import{A as Ue}from"./IconSvg-Djvs0a91.js";import{L as Ee}from"./Link-EkQ0dGSu.js";function We(s){const{accessToken:l,keyFactory:u}=O();return _e({...s,queryKey:u.getMyOAuthClientsQueryKey(),queryFn:async t=>await T.getOAuth2(l,t.pageParam),initialPageParam:void 0,getNextPageParam:t=>t.nextPageToken})}function Be(s){const l=J(),{accessToken:u,keyFactory:t}=O();return $({...s,mutationFn:o=>T.deleteOAuthClient(o,u),onSuccess:async(o,d,h)=>{await l.invalidateQueries({queryKey:t.getMyOAuthClientsQueryKey()}),s!=null&&s.onSuccess&&await s.onSuccess(o,d,h)}})}function Fe(s){const l=J(),{accessToken:u,keyFactory:t}=O();return $({...s,mutationFn:o=>T.updateOAuthClient(o,u),onSuccess:async(o,d,h)=>{await l.invalidateQueries({queryKey:t.getMyOAuthClientsQueryKey()}),s!=null&&s.onSuccess&&await s.onSuccess(o,d,h)}})}function Ve(s){const l=J(),{accessToken:u,keyFactory:t}=O();return $({...s,mutationFn:o=>T.createOAuthClient(o,u),onSuccess:async(o,d,h)=>{await l.invalidateQueries({queryKey:t.getMyOAuthClientsQueryKey()}),s!=null&&s.onSuccess&&await s.onSuccess(o,d,h)}})}const B="JSON",Le="Are you absolutely sure?",ze="Editing this detail will render your client invalid and will require you to resubmit verification. This action cannot be undone.",Ge=500,f=12,g=6,de=1,me=2,Y=({isShowingModal:s=!1,isEdit:l,onClose:u,client:t,setIsShowingConfirmModal:o,isShowingConfirmModal:d,setIsShowingModal:h})=>{const{accessToken:v}=O(),[k,N]=i.useState(""),[a,y]=i.useState([{uri:""}]),[w,_]=i.useState(""),[I,D]=i.useState(""),[b,x]=i.useState(""),[q,P]=i.useState(""),[A,U]=i.useState(B),[G,H]=i.useState(!1),[Q,E]=i.useState(!1),[r,c]=i.useState(),[V,W]=i.useState(),R=i.useMemo(()=>({client_id:t==null?void 0:t.client_id,client_name:k,redirect_uris:(a==null?void 0:a.map(n=>n.uri))??[""],policy_uri:w,client_uri:I,sector_identifier_uri:b,userinfo_signed_response_alg:A===B?void 0:A,tos_uri:q,etag:t==null?void 0:t.etag}),[t==null?void 0:t.client_id,t==null?void 0:t.etag,k,I,w,a,b,A,q]);i.useEffect(()=>{N((t==null?void 0:t.client_name)??""),y((t==null?void 0:t.redirect_uris.map(n=>({uri:n})))??[{uri:""}]),_((t==null?void 0:t.policy_uri)??""),D((t==null?void 0:t.client_uri)??""),x((t==null?void 0:t.sector_identifier_uri)??""),U((t==null?void 0:t.userinfo_signed_response_alg)??B),P((t==null?void 0:t.tos_uri)??"")},[s,t]),be(()=>{v&&R.client_id&&T.isOAuthClientReverificationRequired(R,v).then(n=>{H(n.reverificationRequired)})},[v,R],Ge);const L=()=>{N(""),y([{uri:""}]),_(""),D(""),x(""),U(B),P(""),u()},Z=()=>{o(!1),E(!1)},{mutate:ge}=Ve({onSuccess:()=>{M("Successfully created","success"),W(void 0),L()},onError:n=>{W(n)}}),{mutate:X,isPending:ee}=Fe({onSuccess:()=>{M("Successfully saved","success"),W(void 0),L()},onError:n=>{W(n),h(!0)}}),{mutate:xe}=Be({onSuccess:()=>{M("Successfully deleted","success"),L()},onError:n=>{M(n.reason,"danger")}}),ye=()=>{try{v&&(c(R),G===!0?o(!0):l?X(R):ge(R))}catch(n){M(n.reason,"danger")}},Ce=()=>{a&&y([...a,{uri:""}])},Se=n=>{if(a){const m=[...a];m.splice(n,1),y(m)}},je=(n,m)=>{if(a){const{name:K,value:we}=n.target,se=[...a];se[m][K]=we,y(se)}},te={color:l?"error.main":void 0,"&.Mui-focused":{color:l?"error.main":void 0}},re=e.jsx(S,{onChange:n=>x(n.target.value),placeholder:"https://",type:"text",value:b,id:"sectorURI",label:"Sector Identifier URI",margin:"normal",InputLabelProps:{sx:te},fullWidth:!0}),ne=e.jsx(e.Fragment,{children:a==null?void 0:a.map((n,m)=>e.jsxs("div",{children:[e.jsx(S,{required:m===0,InputLabelProps:{sx:te},label:m===0&&"Redirect URI(s)",name:"uri",fullWidth:!0,id:`redirect-uri-${m}`,onChange:K=>je(K,m),value:n.uri,placeholder:"https://",type:"text",InputProps:{endAdornment:a.length>1&&e.jsx(ke,{position:"end",children:e.jsx(Ne,{onClick:()=>Se(m),children:e.jsx(oe,{sx:{color:"error.main"}})})})},margin:m===0?"normal":"dense"}),a.length-1===m&&e.jsx(j,{variant:"contained",color:"primary",onClick:Ce,disabled:n.uri.length===0,sx:{my:"10px"},children:"Add URI"})]},m))}),ve=e.jsxs(e.Fragment,{children:[ee&&e.jsx("div",{className:"SRC-center-text",children:e.jsx(Ae,{size:40})}),!ee&&e.jsxs(e.Fragment,{children:[e.jsx(z,{variant:"body1",mb:"10px",children:"To protect you and your users, your consent screen and application will need to be verified by Sage Bionetworks. Before your consent screen and application are verified by Sage Bionetworks, you can still test your application with limitations."}),l&&e.jsxs(z,{sx:{mt:"16px"},variant:"label",children:["Client ID: ",t==null?void 0:t.client_id]}),e.jsxs(p,{container:!0,rowSpacing:de,columnSpacing:me,children:[e.jsx(p,{item:!0,md:g,xs:f,children:e.jsx(S,{label:"Client Name",required:!0,onChange:n=>N(n.target.value),placeholder:"Client Name",type:"text",value:k,id:"clientName",margin:"normal",fullWidth:!0})}),e.jsx(p,{item:!0,md:g,xs:f,children:e.jsx(S,{label:"Client Homepage",onChange:n=>D(n.target.value),placeholder:"https://",type:"text",value:I,id:"clientUri",fullWidth:!0,margin:"normal"})}),!l&&e.jsxs(e.Fragment,{children:[e.jsx(p,{item:!0,md:g,xs:f,children:ne}),e.jsx(p,{item:!0,md:g,xs:f,children:re})]}),e.jsx(p,{item:!0,md:g,xs:f,children:e.jsx(S,{label:"Link to Privacy Policy",onChange:n=>_(n.target.value),placeholder:"https://",type:"text",value:w,fullWidth:!0,margin:"normal"})}),e.jsx(p,{item:!0,md:g,xs:f,children:e.jsx(S,{label:"Links to Terms of Service",onChange:n=>P(n.target.value),placeholder:"https://",type:"text",value:q,fullWidth:!0,margin:"normal"})}),e.jsx(p,{item:!0,md:g,xs:f,children:e.jsxs(S,{label:"User Info Signed Response Algorithm",value:A,onChange:n=>U(n.target.value),select:!0,fullWidth:!0,margin:"normal",children:[e.jsx(ue,{value:B,children:"JSON"}),e.jsx(ue,{value:Ie.RS256,children:"JWT"})]})})]}),l&&e.jsxs(fe,{sx:{backgroundColor:"rgb(178, 36, 42, 0.03)"},mt:"10px",padding:1,children:[e.jsx(z,{sx:{my:1},color:"error",variant:"headline3",children:"DANGER ZONE"}),e.jsx(z,{variant:"smallText1",children:"Editing the following information will render your client invalid and will require you to create it again and resubmit verification if needed."}),e.jsxs(p,{container:!0,rowSpacing:de,columnSpacing:me,children:[e.jsx(p,{item:!0,md:g,xs:f,children:ne}),e.jsx(p,{item:!0,md:g,xs:f,children:re})]}),e.jsx(j,{onClick:()=>{E(!0),o(!0)},color:"error",variant:"text",startIcon:e.jsx(oe,{}),sx:{padding:0,mb:1},children:"DELETE CLIENT"})]})]}),V&&e.jsx(De,{severity:"error",children:V==null?void 0:V.reason})]});return e.jsxs(e.Fragment,{children:[e.jsx(Re,{open:s&&!d,onCancel:()=>{L(),W(void 0)},maxWidth:"md",title:l?"Client Details":"Create New OAuth Client",content:ve,onConfirm:ye,confirmButtonProps:{children:"Save"}}),e.jsx(pe,{open:d,title:Le,content:ze,onCancel:Z,onConfirm:()=>{Q?xe(t==null?void 0:t.client_id):X(r),Z()},confirmButtonColor:"error",confirmButtonText:"Yes, Continue"})]})};try{Y.displayName="CreateOAuthModal",Y.__docgenInfo={description:"",displayName:"CreateOAuthModal",props:{isShowingModal:{defaultValue:{value:"false"},description:"",name:"isShowingModal",required:!1,type:{name:"boolean"}},isEdit:{defaultValue:null,description:"",name:"isEdit",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},setIsShowingConfirmModal:{defaultValue:null,description:"",name:"setIsShowingConfirmModal",required:!0,type:{name:"(a: boolean) => void"}},isShowingConfirmModal:{defaultValue:null,description:"",name:"isShowingConfirmModal",required:!0,type:{name:"boolean"}},client:{defaultValue:null,description:"",name:"client",required:!1,type:{name:"OAuthClient"}},setIsShowingModal:{defaultValue:null,description:"",name:"setIsShowingModal",required:!0,type:{name:"(a: boolean) => void"}}}}}catch{}const F=Oe(),he=()=>{const{accessToken:s}=O(),[l,u]=i.useState(!1),[t,o]=i.useState(!1),[d,h]=i.useState(),[v,k]=i.useState(!1),[N,a]=i.useState(!1),[y,w]=i.useState(!1),[_,I]=i.useState(),[D,b]=i.useState(!1),{data:x,hasNextPage:q,fetchNextPage:P}=We(),A=i.useMemo(()=>(x==null?void 0:x.pages.flatMap(r=>r.results))??[],[x]),U="Are you absolutely sure?",G="If you have an existing secret, generating a new secret will make your application invalid after generation. This action cannot be undone.",H=async()=>{a(!1);try{const r=await T.createOAuthClientSecret(s,d==null?void 0:d.client_id);h(void 0),w(!0),I(r.client_secret)}catch(r){M(r.reason,"danger")}},Q=i.useMemo(()=>[F.accessor("createdOn",{header:r=>e.jsx(C,{...r,title:"Created"}),cell:r=>ie(ae(r.getValue()))}),F.accessor("modifiedOn",{header:r=>e.jsx(C,{...r,title:"Modified"}),cell:r=>ie(ae(r.getValue()))}),F.accessor("client_id",{header:r=>e.jsx(C,{...r,title:"ID"})}),F.accessor("client_name",{header:r=>e.jsx(C,{...r,title:"Client"})}),F.accessor("verified",{header:r=>e.jsx(C,{...r,title:"Verified"}),cell:({getValue:r})=>r()?"Yes":e.jsx(j,{variant:"outlined",size:"small",onClick:()=>b(!0),children:"Submit Verification"})}),{id:"generateSecret",header:r=>e.jsx(C,{...r,title:"App Secret"}),cell:({row:r})=>e.jsx(j,{variant:"outlined",onClick:()=>{h(r.original),a(!0)},size:"small",children:"Generate Secret"})},{id:"actions",header:r=>e.jsx(C,{...r,title:"Actions"}),cell:({row:r})=>e.jsx(j,{variant:"outlined",onClick:()=>{h(r.original),o(!0),u(!0)},size:"small",children:"Edit"})}],[]),E=Me({data:A,columns:Q,getRowId:r=>r.client_id,enableRowSelection:!0,enableSorting:!1,getCoreRowModel:Te(),columnResizeMode:"onChange"});return e.jsxs("div",{children:[e.jsx(fe,{display:"flex",width:"100%",justifyContent:"flex-end",mb:2,children:e.jsx(j,{variant:"contained",color:"primary",onClick:()=>{u(!0),o(!1)},sx:{float:"right"},startIcon:e.jsx(Ue,{}),children:"Create New Client"})}),e.jsx(Pe,{sx:{td:{py:1}},children:e.jsxs("table",{style:{borderCollapse:"collapse",width:"100%"},children:[e.jsx("thead",{children:E.getHeaderGroups().map(r=>e.jsx("tr",{children:r.headers.map(c=>e.jsxs("th",{colSpan:c.colSpan,style:{width:c.getSize()},children:[c.isPlaceholder?null:le(c.column.columnDef.header,c.getContext()),c.column.getCanResize()&&e.jsx("div",{className:`resizer ${c.column.getIsResizing()?"isResizing":""}`,onMouseDown:c.getResizeHandler(),onTouchStart:c.getResizeHandler()})]},c.id))},r.id))}),e.jsx("tbody",{children:E.getRowModel().rows.map(r=>e.jsx("tr",{children:r.getVisibleCells().map(c=>e.jsx("td",{style:{width:c.column.getSize()},children:le(c.column.columnDef.cell,c.getContext())},c.id))},r.id))})]})}),q&&e.jsx("div",{className:"text-center",children:e.jsx(j,{variant:"contained",color:"primary",onClick:()=>{P()},children:"Load more"})}),e.jsx(Y,{onClose:()=>{u(!1)},isShowingModal:l,client:t?d:void 0,isEdit:t,setIsShowingConfirmModal:k,isShowingConfirmModal:v,setIsShowingModal:u}),e.jsx(ce,{open:D,onCancel:()=>b(!1),title:"Submit Verification",content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["In order to verify an OAuth client please submit a request to the"," ",e.jsx(Ee,{target:"_blank",rel:"noopener noreferrer",href:"https://sagebionetworks.jira.com/servicedesk/customer/portal/9",children:"Synapse Service Desk."})]}),e.jsx("b",{children:"Please list the following items in your request:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Your name"}),e.jsxs("li",{children:["The ID of the client to be verified ",e.jsx("br",{})]}),e.jsx("li",{children:"A description of your application"})]})]})}),e.jsx(pe,{open:N,title:U,content:G,onCancel:()=>{a(!1),h(void 0)},onConfirm:H,confirmButtonColor:"error",confirmButtonText:"Yes, Continue"}),_&&e.jsx(ce,{open:y,title:"App Secret",onCancel:()=>{w(!1),I(void 0)},content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("b",{children:"This secret will not be able to be retrieved again."})," If needed, in order to generate a new secret select Generate from the Client List."]}),e.jsx(qe,{value:_,inputWidth:"400px"})]})})]})};try{he.displayName="OAuthManagement",he.__docgenInfo={description:"",displayName:"OAuthManagement",props:{}}}catch{}export{he as O};