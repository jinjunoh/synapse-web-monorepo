import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{R as T,r as S}from"./index-Dl6G-zuu.js";import{I as N}from"./IconSvg-Djvs0a91.js";import{N as Y}from"./SynapseClient-Ihq4xrvb.js";import{S as W}from"./index-S3N2_v0E.js";import{R as P,a as Q}from"./SynapseConstants-BVYQRCsB.js";import"./getEndpoint-CjoHA800.js";import{u as J}from"./useDataAccessSubmission-BB4JS-nl.js";import{a as V}from"./useGetQueryResultBundle-CLS5N-6K.js";import{S as X}from"./immutable.es-DHy1u56X.js";import{S as z}from"./LoadingScreen-Cp1NTgGu.js";import{F as K}from"./FullWidthAlert-xeBFwHL5.js";import{d as $}from"./ToastMessage-CyCjbTLE.js";import{M as H}from"./Dialog--0zFVEET.js";import{D as Z}from"./DialogTitle-VmdyF1RY.js";import{S as C}from"./Stack-CkbmjR2j.js";import{B as v}from"./Box-DRdN2jdb.js";import{I as ee}from"./IconButton-CgTC7RgJ.js";import{D as te,a as se}from"./DialogContent-BtEBz09g.js";import{B as I}from"./Button-mb55Lwfk.js";import{T as m}from"./Typography-B88_J_TK.js";import{F as oe}from"./InputLabel-D0wmCbAz.js";import{M as re}from"./TextField-BYBL0P0S.js";import{C as ne}from"./_getTag-B6zWmB6G.js";import{F as ae}from"./FormControlLabel-CX8AcD2-.js";import{C as ie}from"./Checkbox-CXdDetMK.js";const L="category",ce="category email prompt",le="rejection reason",de="email text",ue=`Thank you for submitting your data access request.
`,me=`
If you have questions, do not respond to this email address. Instead, reply to:
act@sagebionetworks.org`;function xe(l){const{category:x,rows:d,selectedRowIds:n,setSelectedRowIds:o,rejectionReasonFormTextIndex:i}=l,[c,p]=T.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(m,{variant:"body1",onClick:()=>p(!c),sx:{fontWeight:700,cursor:"pointer",my:1},children:[e.jsx(N,{icon:c?"expandMore":"chevronRight",sx:{color:"grey.700"},wrap:!1}),x]}),e.jsx(ne,{in:c,children:e.jsx(C,{sx:{ml:3},children:(d??[]).map(a=>e.jsx(ae,{control:e.jsx(ie,{checked:n.has(a.rowId),size:"small",onChange:u=>{u.target.checked?o(n.add(a.rowId)):o(n.remove(a.rowId))}}),label:e.jsx(m,{variant:"smallText1",children:a.values[i]})},a.rowId))})})]})}function pe(l){var j,f;const{tableQuery:x,selectedRowIds:d,setSelectedRowIds:n}=l,{data:o,isLoading:i,error:c}=x,p=(j=o==null?void 0:o.queryResult)==null?void 0:j.queryResults.headers.findIndex(r=>r.name.toLowerCase()===L),a=(f=o==null?void 0:o.queryResult)==null?void 0:f.queryResults.headers.findIndex(r=>r.name.toLowerCase()===le),u=o&&o.queryResult&&o.queryResult.queryResults.rows.reduce((r,R)=>{const s=R.values[p];return r[s]=[...r[s]||[],R],r},{});return e.jsxs(e.Fragment,{children:[e.jsx(m,{variant:"headline3",gutterBottom:!0,children:"Reasons for rejecting"}),e.jsx(m,{variant:"body1",gutterBottom:!0,children:"You may wish to reject the user's data access request for a specific reason. The list below contains some common rejection reasons. You will have a chance to edit the response before submitting it, including adding any rejection reason(s) not listed here."}),i&&e.jsx(C,{sx:{my:2},children:e.jsx(z,{size:30})}),c&&e.jsx(Y,{error:c}),u&&e.jsx(oe,{children:Object.keys(u).map(r=>e.jsx(xe,{category:r,rows:u[r],selectedRowIds:d,setSelectedRowIds:n,rejectionReasonFormTextIndex:a},r))}),e.jsx(m,{variant:"headline3",sx:{mt:1},gutterBottom:!0,children:"We’ll generate a response email message based on your selections."}),e.jsx(m,{variant:"body1",gutterBottom:!0,children:"If your reasons for rejecting are not shown here, that’s okay! You can edit the complete text of the message on the next screen before sending it."})]})}function fe(l){const{emailText:x,setEmailText:d}=l;return e.jsxs(e.Fragment,{children:[e.jsx(m,{variant:"headline3",gutterBottom:!0,children:"Edit the text of the rejection message"}),e.jsx(m,{variant:"body1",gutterBottom:!0,children:"This message will be sent to the data requester. You may edit it, or add custom text to the message."}),e.jsx(re,{multiline:!0,fullWidth:!0,rows:15,value:x,onChange:n=>{d(n.target.value)}})]})}function A(l){var q,w,b;const{open:x,tableId:d=P,onClose:n,submissionId:o}=l,[i,c]=T.useState(1),[p,a]=T.useState(null),[u,j]=S.useState(""),[f,r]=S.useState(X()),R=V({entityId:d,query:{sql:`SELECT * FROM ${d}`},partMask:Q,concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest"}),{data:s}=R,B=(q=s==null?void 0:s.queryResult)==null?void 0:q.queryResults.headers.findIndex(t=>t.name.toLowerCase()===L),F=(w=s==null?void 0:s.queryResult)==null?void 0:w.queryResults.headers.findIndex(t=>t.name.toLowerCase()===ce),k=(b=s==null?void 0:s.queryResult)==null?void 0:b.queryResults.headers.findIndex(t=>t.name.toLowerCase()===de),E=s&&s.queryResult&&f.reduce((t,h)=>{const g=s.queryResult.queryResults.rows.find(G=>G.rowId===h),y=g.values[B],U=g.values[F],M=g.values[k];return t[y]?t[y].reasons=[...t[y].reasons,M]:t[y]={sectionText:U,reasons:[M]},t},{}),_=E&&ue+Object.keys(E).reduce((t,h)=>{const g=E[h].sectionText;t+=`
`+g+`
`;for(const y of E[h].reasons)t+=`
* `+y+`
`;return t},"")+me;S.useEffect(()=>{_&&j(_)},[f]);const{mutate:D}=J();function O(t){D({submissionId:o.toString(),newState:W.REJECTED,rejectedReason:t},{onSuccess:()=>{a(null),$("Submission rejected and message sent to requester","info"),n()},onError:h=>{a(h)}})}return e.jsxs(H,{open:x,onClose:n,maxWidth:"md",fullWidth:!0,children:[e.jsx(Z,{children:e.jsxs(C,{direction:"row",alignItems:"center",gap:"5px",children:["Reject Request?",e.jsx(v,{sx:{flexGrow:1}}),e.jsx(ee,{onClick:n,children:e.jsx(N,{icon:"close",wrap:!1,sx:{color:"grey.700"}})})]})}),e.jsxs(te,{children:[i===1&&e.jsx(pe,{tableQuery:R,selectedRowIds:f,setSelectedRowIds:r}),i===2&&e.jsx(fe,{emailText:u,setEmailText:j}),p&&e.jsx(K,{variant:"danger",description:p.reason,isGlobal:!1})]}),e.jsxs(se,{children:[i===2&&e.jsx(I,{variant:"outlined",onClick:()=>c(1),children:"Back"}),e.jsx(v,{sx:{flexGrow:1}}),e.jsx(I,{variant:"outlined",onClick:n,children:"Cancel"}),i===1&&e.jsx(I,{variant:"contained",onClick:()=>c(2),children:"Generate Email"}),i===2&&e.jsx(I,{variant:"contained",onClick:()=>{O(u)},children:"Reject and Notify Requester"})]})]})}try{A.displayName="RejectDataAccessRequestModal",A.__docgenInfo={description:`Modal component presented to a data access submission reviewer when they decide to reject a request.
The modal contains a form for selecting rejection reasons and a text field for editing the rejection message.
After crafting a message, the user can reject the submission and send the message to the requester.`,displayName:"RejectDataAccessRequestModal",props:{submissionId:{defaultValue:null,description:"",name:"submissionId",required:!0,type:{name:"string | number"}},tableId:{defaultValue:null,description:"",name:"tableId",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}export{A as R};