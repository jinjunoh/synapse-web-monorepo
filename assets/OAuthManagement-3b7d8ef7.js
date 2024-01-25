import{j as e,F as v,a}from"./jsx-runtime-9dc53467.js";import{r as i}from"./index-76fb7be0.js";import{f as ne}from"./DateFormatter-de1e645f.js";import{d as ie}from"./dayjs.min-f79c4412.js";import{v as R,x as M,K}from"./SynapseClient-ceb0e6d4.js";import"./getEndpoint-ac94413e.js";import"./OrientationBanner-1c6f5b11.js";import{u as Y}from"./useMutation-dd95c1dd.js";import{u as Ie}from"./useInfiniteQuery-49bff1c8.js";import{d as k}from"./ToastMessage-02301a16.js";import{z as Ae}from"./index-7db48dfb.js";import{u as we}from"./UserSearchBoxV2-5c874494.js";import{W as ue}from"./WarningDialog-58e1d220.js";import{d as ae}from"./DeleteTwoTone-b77dc984.js";import{S as be}from"./LoadingScreen-d62555af.js";import{C as xe,d as oe}from"./SynapseTableCell-a0770d03.js";import{T as S}from"./TextField-0ffe3a62.js";import{I as Te}from"./InputAdornment-f3513781.js";import{I as Oe}from"./IconButton-e4815158.js";import{B as _}from"./Button-6cf38875.js";import{T as V}from"./Typography-10432b83.js";import{G as p}from"./Grid-3d403699.js";import{M as se}from"./MenuItem-3d7f51a8.js";import{B as ke}from"./Box-ddce9904.js";import{A as Re}from"./Alert-34cc4490.js";import{C as Me}from"./CopyToClipboardInput-22c1cc99.js";import{T as Ne}from"./Table-9e7fc977.js";import{L as Ee}from"./Link-980677d0.js";function De(n){const{accessToken:l,keyFactory:d}=R();return Ie(d.getMyOAuthClientsQueryKey(),async t=>await M.getOAuth2(l,t.pageParam),{...n,getNextPageParam:t=>t.nextPageToken})}function Ue(n){const l=K(),{accessToken:d,keyFactory:t}=R();return Y(s=>M.deleteOAuthClient(s,d),{...n,onSuccess:async(s,u,m)=>{await l.invalidateQueries(t.getMyOAuthClientsQueryKey()),n!=null&&n.onSuccess&&await n.onSuccess(s,u,m)}})}function qe(n){const l=K(),{accessToken:d,keyFactory:t}=R();return Y(s=>M.updateOAuthClient(s,d),{...n,onSuccess:async(s,u,m)=>{await l.invalidateQueries(t.getMyOAuthClientsQueryKey()),n!=null&&n.onSuccess&&await n.onSuccess(s,u,m)}})}function Be(n){const l=K(),{accessToken:d,keyFactory:t}=R();return Y(s=>M.createOAuthClient(s,d),{...n,onSuccess:async(s,u,m)=>{await l.invalidateQueries(t.getMyOAuthClientsQueryKey()),n!=null&&n.onSuccess&&await n.onSuccess(s,u,m)}})}const L="JSON",We="Are you absolutely sure?",Le="Editing this detail will render your client invalid and will require you to resubmit verification. This action cannot be undone.",Pe=500,f=12,g=6,le=1,ce=2,z=({isShowingModal:n=!1,isEdit:l,onClose:d,client:t,setIsShowingConfirmModal:s,isShowingConfirmModal:u,setIsShowingModal:m})=>{const{accessToken:I}=R(),[N,E]=i.useState(""),[o,y]=i.useState([{uri:""}]),[A,w]=i.useState(""),[b,D]=i.useState(""),[x,C]=i.useState(""),[U,q]=i.useState(""),[T,B]=i.useState(L),[Q,F]=i.useState(!1),[c,H]=i.useState(!1),[he,me]=i.useState(),[P,W]=i.useState(),O=i.useMemo(()=>({client_id:t==null?void 0:t.client_id,client_name:N,redirect_uris:(o==null?void 0:o.map(r=>r.uri))??[""],policy_uri:A,client_uri:b,sector_identifier_uri:x,userinfo_signed_response_alg:T===L?void 0:T,tos_uri:U,etag:t==null?void 0:t.etag}),[t==null?void 0:t.client_id,t==null?void 0:t.etag,N,b,A,o,x,T,U]);i.useEffect(()=>{E((t==null?void 0:t.client_name)??""),y((t==null?void 0:t.redirect_uris.map(r=>({uri:r})))??[{uri:""}]),w((t==null?void 0:t.policy_uri)??""),D((t==null?void 0:t.client_uri)??""),C((t==null?void 0:t.sector_identifier_uri)??""),B((t==null?void 0:t.userinfo_signed_response_alg)??L),q((t==null?void 0:t.tos_uri)??"")},[n,t]),we(()=>{I&&O.client_id&&M.isOAuthClientReverificationRequired(O,I).then(r=>{F(r.reverificationRequired)})},[I,O],Pe);const G=()=>{E(""),y([{uri:""}]),w(""),D(""),C(""),B(L),q(""),d()},J=()=>{s(!1),H(!1)},{mutate:pe}=Be({onSuccess:()=>{k("Successfully created","success"),W(void 0),G()},onError:r=>{W(r)}}),{mutate:Z,isLoading:$}=qe({onSuccess:()=>{k("Successfully saved","success"),W(void 0),G()},onError:r=>{W(r),m(!0)}}),{mutate:fe}=Ue({onSuccess:()=>{k("Successfully deleted","success"),G()},onError:r=>{k(r.reason,"danger")}}),ge=()=>{try{I&&(me(O),Q===!0?s(!0):l?Z(O):pe(O))}catch(r){k(r.reason,"danger")}},ye=()=>{o&&y([...o,{uri:""}])},Ce=r=>{if(o){const h=[...o];h.splice(r,1),y(h)}},Se=(r,h)=>{if(o){const{name:j,value:_e}=r.target,re=[...o];re[h][j]=_e,y(re)}},X={color:l?"error.main":void 0,"&.Mui-focused":{color:l?"error.main":void 0}},ee=e(S,{onChange:r=>C(r.target.value),placeholder:"https://",type:"text",value:x,id:"sectorURI",label:"Sector Identifier URI",margin:"normal",InputLabelProps:{sx:X},fullWidth:!0}),te=e(v,{children:o==null?void 0:o.map((r,h)=>a("div",{children:[e(S,{required:h===0,InputLabelProps:{sx:X},label:h===0&&"Redirect URI(s)",name:"uri",fullWidth:!0,id:`redirect-uri-${h}`,onChange:j=>Se(j,h),value:r.uri,placeholder:"https://",type:"text",InputProps:{endAdornment:o.length>1&&e(Te,{position:"end",children:e(Oe,{onClick:()=>Ce(h),children:e(ae,{sx:{color:"error.main"}})})})},margin:h===0?"normal":"dense"}),o.length-1===h&&e(_,{variant:"contained",color:"primary",onClick:ye,disabled:r.uri.length===0,sx:{my:"10px"},children:"Add URI"})]},h))}),ve=a(v,{children:[$&&e("div",{className:"SRC-center-text",children:e(be,{size:40})}),!$&&a(v,{children:[e(V,{variant:"body1",mb:"10px",children:"To protect you and your users, your consent screen and application will need to be verified by Sage Bionetworks. Before your consent screen and application are verified by Sage Bionetworks, you can still test your application with limitations."}),l&&a(V,{sx:{mt:"16px"},variant:"label",children:["Client ID: ",t==null?void 0:t.client_id]}),a(p,{container:!0,rowSpacing:le,columnSpacing:ce,children:[e(p,{item:!0,md:g,xs:f,children:e(S,{label:"Client Name",required:!0,onChange:r=>E(r.target.value),placeholder:"Client Name",type:"text",value:N,id:"clientName",margin:"normal",fullWidth:!0})}),e(p,{item:!0,md:g,xs:f,children:e(S,{label:"Client Homepage",onChange:r=>D(r.target.value),placeholder:"https://",type:"text",value:b,id:"clientUri",fullWidth:!0,margin:"normal"})}),!l&&a(v,{children:[e(p,{item:!0,md:g,xs:f,children:te}),e(p,{item:!0,md:g,xs:f,children:ee})]}),e(p,{item:!0,md:g,xs:f,children:e(S,{label:"Link to Privacy Policy",onChange:r=>w(r.target.value),placeholder:"https://",type:"text",value:A,fullWidth:!0,margin:"normal"})}),e(p,{item:!0,md:g,xs:f,children:e(S,{label:"Links to Terms of Service",onChange:r=>q(r.target.value),placeholder:"https://",type:"text",value:U,fullWidth:!0,margin:"normal"})}),e(p,{item:!0,md:g,xs:f,children:a(S,{label:"User Info Signed Response Algorithm",value:T,onChange:r=>B(r.target.value),select:!0,fullWidth:!0,margin:"normal",children:[e(se,{value:L,children:"JSON"}),e(se,{value:Ae.RS256,children:"JWT"})]})})]}),l&&a(ke,{sx:{backgroundColor:"rgb(178, 36, 42, 0.03)"},mt:"10px",padding:1,children:[e(V,{sx:{my:1},color:"error",variant:"headline3",children:"DANGER ZONE"}),e(V,{variant:"smallText1",children:"Editing the following information will render your client invalid and will require you to create it again and resubmit verification if needed."}),a(p,{container:!0,rowSpacing:le,columnSpacing:ce,children:[e(p,{item:!0,md:g,xs:f,children:te}),e(p,{item:!0,md:g,xs:f,children:ee})]}),e(_,{onClick:()=>{H(!0),s(!0)},color:"error",variant:"text",startIcon:e(ae,{}),sx:{padding:0,mb:1},children:"DELETE CLIENT"})]})]}),P&&e(Re,{severity:"error",children:P==null?void 0:P.reason})]});return a(v,{children:[e(xe,{open:n&&!u,onCancel:()=>{G(),W(void 0)},maxWidth:"md",title:l?"Client Details":"Create New OAuth Client",content:ve,onConfirm:ge,confirmButtonText:"Save"}),e(ue,{open:u,title:We,content:Le,onCancel:J,onConfirm:()=>{c?fe(t==null?void 0:t.client_id):Z(he),J()},confirmButtonColor:"error",confirmButtonText:"Yes, Continue"})]})};try{z.displayName="CreateOAuthModal",z.__docgenInfo={description:"",displayName:"CreateOAuthModal",props:{isShowingModal:{defaultValue:{value:"false"},description:"",name:"isShowingModal",required:!1,type:{name:"boolean"}},isEdit:{defaultValue:null,description:"",name:"isEdit",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},setIsShowingConfirmModal:{defaultValue:null,description:"",name:"setIsShowingConfirmModal",required:!0,type:{name:"(a: boolean) => void"}},isShowingConfirmModal:{defaultValue:null,description:"",name:"isShowingConfirmModal",required:!0,type:{name:"boolean"}},client:{defaultValue:null,description:"",name:"client",required:!1,type:{name:"OAuthClient"}},setIsShowingModal:{defaultValue:null,description:"",name:"setIsShowingModal",required:!0,type:{name:"(a: boolean) => void"}}}}}catch{}const de=()=>{const{accessToken:n}=R(),[l,d]=i.useState(!1),[t,s]=i.useState(!1),[u,m]=i.useState(),[I,N]=i.useState(!1),[E,o]=i.useState(!1),[y,A]=i.useState(!1),[w,b]=i.useState(),[D,x]=i.useState(!1),{data:C,hasNextPage:U,fetchNextPage:q}=De(),T=(C==null?void 0:C.pages.flatMap(c=>c.results))??[],B="Are you absolutely sure?",Q="If you have an existing secret, generating a new secret will make your application invalid after generation. This action cannot be undone.",F=async()=>{o(!1);try{const c=await M.createOAuthClientSecret(n,u==null?void 0:u.client_id);m(void 0),A(!0),b(c.client_secret)}catch(c){k(c.reason,"danger")}};return a("div",{className:"bootstrap-4-backport",children:[e(_,{variant:"contained",color:"primary",onClick:()=>{d(!0),s(!1)},sx:{float:"right"},children:"Create New Client"}),a(Ne,{striped:!0,children:[e("thead",{children:a("tr",{children:[e("th",{children:"Created"}),e("th",{children:"Modified"}),e("th",{children:"ID"}),e("th",{children:"Client"}),e("th",{children:"Verified"}),e("th",{children:"App Secret"}),e("th",{children:"Actions"})]})}),e("tbody",{children:T.map(c=>a("tr",{children:[e("td",{children:ne(ie(c.createdOn))}),e("td",{children:ne(ie(c.modifiedOn))}),e("td",{children:c.client_id}),e("td",{children:c.client_name}),e("td",{children:c.verified?"Yes":e(_,{variant:"outlined",size:"small",onClick:()=>x(!0),children:"SUBMIT VERIFICATION"})}),e("td",{children:e(_,{variant:"outlined",onClick:()=>{m(c),o(!0)},size:"small",children:"GENERATE SECRET"})}),e("td",{children:e(_,{variant:"outlined",onClick:()=>{m(c),s(!0),d(!0)},size:"small",children:"EDIT"})})]},c.client_id))})]}),U&&e("div",{className:"text-center",children:e(_,{variant:"contained",color:"primary",onClick:()=>{q()},children:"Load more"})}),e(z,{onClose:()=>{d(!1)},isShowingModal:l,client:t?u:void 0,isEdit:t,setIsShowingConfirmModal:N,isShowingConfirmModal:I,setIsShowingModal:d}),e(oe,{open:D,onCancel:()=>x(!1),title:"Submit Verification",content:a(v,{children:[a("p",{children:["In order to verify an OAuth client please submit a request to the"," ",e(Ee,{target:"_blank",rel:"noopener noreferrer",href:"https://sagebionetworks.jira.com/servicedesk/customer/portal/9",children:"Synapse Service Desk."})]}),e("b",{children:"Please list the following items in your request:"}),a("ul",{children:[e("li",{children:"Your name"}),a("li",{children:["The ID of the client to be verified ",e("br",{})]}),e("li",{children:"A description of your application"})]})]})}),e(ue,{open:E,title:B,content:Q,onCancel:()=>{o(!1),m(void 0)},onConfirm:F,confirmButtonColor:"error",confirmButtonText:"Yes, Continue"}),w&&e(oe,{open:y,title:"App Secret",onCancel:()=>{A(!1),b(void 0)},content:a(v,{children:[a("p",{children:[e("b",{children:"This secret will not be able to be retrieved again."})," If needed, in order to generate a new secret select Generate from the Client List."]}),e(Me,{value:w,inputWidth:"400px"})]})})]})};try{de.displayName="OAuthManagement",de.__docgenInfo={description:"",displayName:"OAuthManagement",props:{}}}catch{}export{de as O};
//# sourceMappingURL=OAuthManagement-3b7d8ef7.js.map
