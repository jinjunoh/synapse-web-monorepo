import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{u as I}from"./useFiles-BuhYbh1a.js";import{F as _}from"./FileUpload-Bx_rrzXS.js";import{I as s}from"./IconSvg-BZPixSS9.js";import{k as b,n as j}from"./SynapseClient-D4M9LQNp.js";import{B as m}from"./Button-mb55Lwfk.js";import{r as V}from"./index-Dl6G-zuu.js";import{B as U}from"./Box-DRdN2jdb.js";function f(l){const{fileHandleAssociation:n,fileName:r,...t}=l,{accessToken:i}=b(),o=async()=>{if(!n.fileHandleId||!i)return;const d=(await j({requestedFiles:[n],includePreSignedURLs:!0,includeFileHandles:!1,includePreviewPreSignedURLs:!1},i)).requestedFiles[0].preSignedURL;d?window.open(d):console.log("Fail to get file download link")};return e.jsx(m,{...t,onClick:()=>{o()},children:r})}try{f.displayName="DirectDownloadButton",f.__docgenInfo={description:"",displayName:"DirectDownloadButton",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},fileHandleAssociation:{defaultValue:null,description:"",name:"fileHandleAssociation",required:!0,type:{name:"FileHandleAssociation"}},fileName:{defaultValue:null,description:"",name:"fileName",required:!0,type:{name:"string | undefined"}}}}}catch{}function H(l){const{fileHandleAssociations:n=[],uploadCallback:r,id:t,documentName:i,isMultiFileUpload:o=!1,onClearAttachment:u,isLoading:y=!1,uploadBtnVariant:d="outlined"}=l,[q,g]=V.useState(!1),{data:c}=I({includeFileHandles:!0,includePreSignedURLs:!1,includePreviewPreSignedURLs:!1,requestedFiles:n},{enabled:n.length>0});return e.jsxs(U,{id:t,display:"flex",flexDirection:o?"column":"row",alignItems:o?"flex-start":"center",justifyContent:"flex-start",gap:2,sx:{my:2},children:[e.jsx(_,{id:`${t}-upload`,onUploadStart:()=>g(!0),onComplete:a=>{g(!1),r(a)},label:`Upload ${i}`,buttonProps:{disabled:y,variant:d,endIcon:e.jsx(s,{icon:"upload",wrap:!1})}}),n.map((a,x)=>{var F;const p=(F=c==null?void 0:c.requestedFiles.find(w=>w.fileHandleId===a.fileHandleId))==null?void 0:F.fileHandle;return e.jsxs(U,{children:[e.jsx(f,{id:`${t}-download-${x}`,variant:"text",endIcon:e.jsx(s,{icon:"download",wrap:!1}),color:"primary",fileHandleAssociation:a,fileName:p==null?void 0:p.fileName,sx:{textTransform:"none"}},x),u&&e.jsx(m,{className:"clear-x",variant:"text",onClick:()=>u(a.fileHandleId),children:e.jsx(s,{icon:"clear"})})]},a.fileHandleId)}),q&&e.jsx(m,{disabled:!0,variant:"text",endIcon:e.jsx(s,{icon:"download",wrap:!1}),children:"Uploading..."})]})}try{H.displayName="UploadDocumentField",H.__docgenInfo={description:"",displayName:"UploadDocumentField",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},documentName:{defaultValue:null,description:"",name:"documentName",required:!0,type:{name:"string"}},uploadCallback:{defaultValue:null,description:"",name:"uploadCallback",required:!0,type:{name:"(data: UploadCallbackResp) => void"}},fileHandleAssociations:{defaultValue:null,description:"",name:"fileHandleAssociations",required:!1,type:{name:"FileHandleAssociation[]"}},isMultiFileUpload:{defaultValue:null,description:"",name:"isMultiFileUpload",required:!1,type:{name:"boolean"}},onClearAttachment:{defaultValue:null,description:"",name:"onClearAttachment",required:!1,type:{name:"((fileHandleId: string) => void)"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},uploadBtnVariant:{defaultValue:null,description:"",name:"uploadBtnVariant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"outlined"'},{value:'"contained"'}]}}}}}catch{}export{f as D,H as U};
