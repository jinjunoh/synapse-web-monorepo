import{j as e}from"./jsx-runtime-CKrituN3.js";import{d as c}from"./dayjs.min-BIwLhz4I.js";import{r as v,R as u}from"./index-CBqU2yxZ.js";import{B as D,T as F}from"./ApplicationSessionManager-CoKgEkVZ.js";import{f}from"./DateFormatter-D3umJwZh.js";import{a as q,u as T}from"./useDataAccessSubmission-DH56TtNG.js";import{b as C,c as U,d as B}from"./useAccessRequirements-DF5ctw1r.js";import{l as N}from"./SynapseConstants-Dbq7Gtj7.js";import{F as O,S as P}from"./index-C-UbkUMQ.js";import{k as E,F as H,M as K}from"./HelpPopover-D2HKF4UC.js";import{W as _}from"./WarningDialog-B0iFG3jc.js";import{U as I}from"./UserOrTeamBadge-DknZfS2v.js";import{R as k}from"./RejectDataAccessRequestModal-BZsVjR8v.js";import{a as x}from"./UserBadge-BtPjNMcX.js";import{T as s}from"./Typography-BhttL55U.js";import{S as n}from"./Skeleton-BQPHOfbB.js";import{B as y}from"./Button-BOCcoe4v.js";import{u as M,t as L}from"./ThemesPlot-BDIxAQtM.js";c.extend(E);function j(d){const{submissionId:t,fileHandleId:l}=d,o=u.useMemo(()=>({fileHandleId:l,associateObjectId:t,associateObjectType:O.DataAccessSubmissionAttachment}),[l,t]);return e.jsx(H,{showDownloadIcon:!0,fileHandleAssociation:o},l)}function V(d){return e.jsx(_,{open:d.open,title:"Approve Request?",content:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"body1",sx:{marginBottom:"10px"},children:"Approving the request will grant access to controlled data."}),e.jsx(s,{variant:"body1",children:"In addition, the user will receive an email notification alerting them that the request has been granted."})]}),onConfirm:d.onConfirm,onConfirmCallbackArgs:[],onCancel:d.onCancel,confirmButtonText:"Approve"})}function W(d){const{data:t}=B(d.accessRequirementId,{throwOnError:!0});return t?e.jsx("div",{className:"AccessRequirementWikiContainer",children:e.jsxs("div",{className:"AccessRequirementWikiContent",children:[e.jsx(s,{variant:"headline1",children:"Access Requirement"}),e.jsx("hr",{}),e.jsx(K,{wikiId:t==null?void 0:t.wikiPageId,ownerId:t==null?void 0:t.ownerObjectId,objectType:t==null?void 0:t.ownerObjectType})]})}):e.jsx(n,{width:"100%",height:"600px"})}function S(d){var p;const{submissionId:t}=d,[l,o]=v.useState(!1),b=D(),{data:a,refetch:A}=q(t,{throwOnError:!0}),{mutateAsync:R}=T(),{data:i}=C(parseInt(a==null?void 0:a.accessRequirementId),{enabled:!!a}),{data:m}=U(a==null?void 0:a.accessRequirementId,{enabled:!!a,throwOnError:!0}),[w,h]=v.useState(!1);function g(){return R({submissionId:(a==null?void 0:a.id)??"",newState:P.APPROVED})}return e.jsxs("div",{className:"SubmissionPage",children:[e.jsx(V,{open:w,onCancel:()=>{h(!1)},onConfirm:async()=>{try{await g()}catch(r){b(r)}h(!1),A()}}),e.jsx(k,{submissionId:t,open:l,onClose:()=>o(!1)},t),e.jsxs("div",{className:"SubmissionSummary",children:[e.jsx(s,{variant:"dataFieldKey",children:"Status"}),e.jsx(s,{variant:"headline3",children:a?a.state:e.jsx(n,{width:100})}),e.jsx("br",{}),a?a.state==="SUBMITTED"&&e.jsxs("div",{className:"ButtonContainer",children:[e.jsx(y,{onClick:()=>{h(!0)},color:"success",variant:"contained",children:"Approve"}),e.jsx(y,{onClick:()=>{o(!0)},color:"error",variant:"contained",children:"Reject"})]}):e.jsx(n,{width:200}),e.jsx(s,{variant:"dataFieldKey",children:"Access Requirement Name"}),e.jsx(s,{variant:"smallText1",children:(i==null?void 0:i.name)??e.jsx(n,{width:100})}),e.jsx("br",{}),e.jsx(s,{variant:"dataFieldKey",children:"Assigned Reviewer"}),e.jsx(s,{variant:"smallText1",children:m!==void 0?m!==null?m.resourceAccess.map(r=>e.jsx(I,{principalId:r.principalId},r.principalId)):e.jsx(I,{principalId:N}):e.jsx(n,{width:100})}),e.jsx("br",{}),e.jsx(s,{variant:"dataFieldKey",children:"Conditions"}),i?e.jsx(s,{variant:"smallText1",component:"div",children:e.jsxs("ul",{children:[e.jsxs("li",{children:["Expiration period:"," ",c.duration({milliseconds:i.expirationPeriod}).asDays()," ","day(s)",i.expirationPeriod===0&&" (no expiration)"]}),i.isCertifiedUserRequired&&e.jsx("li",{children:"User must be Certified"}),i.isValidatedProfileRequired&&e.jsx("li",{children:"User Profile must be Validated"}),i.isDUCRequired&&e.jsx("li",{children:"DUC is required"}),i.isIDURequired&&e.jsx("li",{children:"IDU is required"}),i.isIDUPublic&&e.jsx("li",{children:"IDU will be made public"}),i.isIRBApprovalRequired&&e.jsx("li",{children:"IRB Approval is required"}),i.areOtherAttachmentsRequired&&e.jsx("li",{children:"Other attachments are required"})]})}):e.jsx(n,{width:100}),e.jsx("br",{}),e.jsxs("div",{className:"SubmissionSummaryGrid",children:[e.jsx(s,{variant:"dataFieldKey",children:"Submitted By"}),e.jsx(s,{variant:"smallText1",children:a?e.jsx(x,{userId:a.submittedBy}):e.jsx(n,{width:100})}),e.jsx(s,{variant:"dataFieldKey",children:"Submitted On"}),e.jsx(s,{variant:"smallText1",children:a?f(c(a.submittedOn)):e.jsx(n,{width:100})}),e.jsx(s,{variant:"dataFieldKey",children:"Modified By"}),e.jsx(s,{variant:"smallText1",children:a?e.jsx(x,{userId:a.modifiedBy}):e.jsx(n,{width:100})}),e.jsx(s,{variant:"dataFieldKey",children:"Modified On"}),e.jsx(s,{variant:"smallText1",children:a?f(c(a.modifiedOn)):e.jsx(n,{width:100})}),e.jsxs(s,{className:"Key",variant:"dataFieldKey",children:["Data Requesters",`${a?` (${a.accessorChanges.length})`:""}`]}),a?a.accessorChanges.map(r=>e.jsxs(u.Fragment,{children:[e.jsx(s,{className:"Key DataAccessor",variant:"smallText1",children:e.jsx("span",{style:{whiteSpace:"nowrap"},children:e.jsx(x,{userId:r.userId},r.userId)})}),e.jsx(s,{className:"Value DataAccessor",variant:"smallText1",children:M(L(r.type.substring(0,r.type.indexOf("_"))))})]},r.userId)):e.jsx(n,{width:100}),e.jsx(s,{className:"Key",variant:"dataFieldKey",children:"Institution"}),e.jsx(s,{className:"Value",variant:"smallText1",children:a?a.researchProjectSnapshot.institution:e.jsx(n,{width:100})}),e.jsx(s,{className:"Key",variant:"dataFieldKey",children:"Project Lead"}),e.jsx(s,{className:"Value",variant:"smallText1",children:a?a.researchProjectSnapshot.projectLead:e.jsx(n,{width:100})})]})]}),e.jsxs("div",{className:"SubmissionRightPane",children:[e.jsx(F,{children:a?e.jsx(W,{accessRequirementId:a.accessRequirementId}):e.jsx(e.Fragment,{})}),e.jsxs("div",{children:[(a==null?void 0:a.rejectedReason)&&e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"headline1",children:"Reason for rejection given by reviewer"}),e.jsx("hr",{}),e.jsx(s,{variant:"body1",style:{whiteSpace:"pre-line"},children:a.rejectedReason})]}),e.jsx(s,{variant:"headline1",children:"Contents of the Access Request"}),e.jsx("hr",{}),((p=a==null?void 0:a.researchProjectSnapshot)==null?void 0:p.intendedDataUseStatement)&&e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"headline2",children:"Intended Data Use Statement"}),e.jsx(s,{variant:"body1",style:{whiteSpace:"pre-line"},children:a.researchProjectSnapshot.intendedDataUseStatement})]}),e.jsx(s,{variant:"headline2",children:"Documents"}),(a==null?void 0:a.ducFileHandleId)&&e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"smallText2",children:"Data Use Certificate (DUC)"}),e.jsx(j,{submissionId:a.id,fileHandleId:a.ducFileHandleId})]}),(a==null?void 0:a.irbFileHandleId)&&e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"smallText2",children:"IRB Approval Letter"}),e.jsx(j,{submissionId:a.id,fileHandleId:a.irbFileHandleId})]}),(a==null?void 0:a.attachments)&&e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"smallText2",children:"Other Attachments"}),a.attachments.map(r=>e.jsxs(u.Fragment,{children:[e.jsx(j,{submissionId:a.id,fileHandleId:r}),e.jsx("br",{})]},r))]})]})]})]})}try{S.displayName="SubmissionPage",S.__docgenInfo={description:"Page for a Data Access Submission that a designated reviewer can view, and choose to approve or reject.",displayName:"SubmissionPage",props:{submissionId:{defaultValue:null,description:"The ID of the submission to view",name:"submissionId",required:!0,type:{name:"string | number"}}}}}catch{}export{S};
