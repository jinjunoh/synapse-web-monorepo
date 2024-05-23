import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{I as v}from"./IconSvg-BZPixSS9.js";import{u as g,L as f,g as x}from"./LastLoginInfo-BDN1JmKA.js";import{B as r}from"./Button-mb55Lwfk.js";import{B as s}from"./Box-DRdN2jdb.js";const c={color:"grey.800",mb:"10px"},d={width:"28px",height:"28px"};function p(a){const{loginMethod:l,iconName:u,onClick:o}=a,{lastLoginMethod:t,...h}=g(),n=f({lastLoginMethod:t,display:"sentence",...h}),m=t===l&&n,i=`Sign in with ${x(l)}`;return e.jsx(e.Fragment,{children:m?e.jsx(r,{fullWidth:!0,variant:"outlined",onClick:o,sx:{...c,height:"74px",py:1.5},"data-testid":"button-with-last-login-info",children:e.jsxs(s,{flexDirection:"column",children:[e.jsxs(s,{display:"flex",justifyContent:"center",alignItems:"center",mb:"10px",children:[e.jsx(v,{icon:u,sx:{...d,mr:1,ml:-.5}}),i]}),n]})}):e.jsx(r,{fullWidth:!0,variant:"outlined",onClick:o,sx:{...c,height:"50px"},startIcon:e.jsx(v,{icon:u,sx:d}),"data-testid":"button-without-last-login-info",children:i})})}try{p.displayName="LoginMethodButton",p.__docgenInfo={description:"",displayName:"LoginMethodButton",props:{loginMethod:{defaultValue:null,description:"",name:"loginMethod",required:!0,type:{name:"enum",value:[{value:'"GOOGLE"'},{value:'"ORCID"'},{value:'"EMAIL"'}]}},iconName:{defaultValue:null,description:"",name:"iconName",required:!0,type:{name:"enum",value:[{value:'"clear"'},{value:'"filter"'},{value:'"visibility"'},{value:'"columns"'},{value:'"article"'},{value:'"code"'},{value:'"data"'},{value:'"label"'},{value:'"link"'},{value:'"search"'},{value:'"table"'},{value:'"time"'},{value:'"title"'},{value:'"circle"'},{value:'"image"'},{value:'"info"'},{value:'"warning"'},{value:'"accessOpen"'},{value:'"accessClosed"'},{value:'"actionKey"'},{value:'"arrowBack"'},{value:'"arrowForward"'},{value:'"arrowDropUp"'},{value:'"arrowDropDown"'},{value:'"cards"'},{value:'"check"'},{value:'"cart"'},{value:'"clock"'},{value:'"openInNewWindow"'},{value:'"dashboard"'},{value:'"delete"'},{value:'"deleteSweep"'},{value:'"addToCart"'},{value:'"addCircleOutline"'},{value:'"addCircleTwoTone"'},{value:'"reload"'},{value:'"team"'},{value:'"photoCamera"'},{value:'"favTwoTone"'},{value:'"favOutline"'},{value:'"fav"'},{value:'"peopleTwoTone"'},{value:'"challengesTwoTone"'},{value:'"download"'},{value:'"searchOutlined"'},{value:'"history"'},{value:'"login"'},{value:'"helpChatBubble"'},{value:'"helpOutlined"'},{value:'"helpOutlineTwoTone"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"rat"'},{value:'"chromatin"'},{value:'"clinical"'},{value:'"contentCopy"'},{value:'"dataLocked"'},{value:'"geneExpression"'},{value:'"geneVariants"'},{value:'"github"'},{value:'"imaging"'},{value:'"lineGraph"'},{value:'"kinomics"'},{value:'"proteomics"'},{value:'"packagableFile"'},{value:'"other"'},{value:'"wiki"'},{value:'"file"'},{value:'"fileOutlined"'},{value:'"folder"'},{value:'"public"'},{value:'"people"'},{value:'"entityview"'},{value:'"submissionview"'},{value:'"challenge"'},{value:'"discussion"'},{value:'"dataset"'},{value:'"datasetcollection"'},{value:'"docker"'},{value:'"accountCertified"'},{value:'"accountRegistered"'},{value:'"accountValidated"'},{value:'"warningOutlined"'},{value:'"removeCircle"'},{value:'"replyTwoTone"'},{value:'"chatTwoTone"'},{value:'"accessManagement"'},{value:'"chevronRight"'},{value:'"chevronLeft"'},{value:'"database"'},{value:'"close"'},{value:'"cross"'},{value:'"verticalEllipsis"'},{value:'"sync"'},{value:'"clipboard"'},{value:'"clipboardCheck"'},{value:'"add"'},{value:'"block"'},{value:'"checkCircle"'},{value:'"errorOutlined"'},{value:'"phone"'},{value:'"pushpin"'},{value:'"addBoxOutline"'},{value:'"minusBoxOutline"'},{value:'"italic"'},{value:'"bold"'},{value:'"visibilityOff"'},{value:'"strikethrough"'},{value:'"subscript"'},{value:'"superscript"'},{value:'"latex"'},{value:'"edit"'},{value:'"tag"'},{value:'"restore"'},{value:'"upload"'},{value:'"flag"'},{value:'"newFolder"'},{value:'"createVersion"'},{value:'"email"'},{value:'"addConditions"'},{value:'"sortUp"'},{value:'"sortDown"'},{value:'"orcid"'},{value:'"google24"'},{value:'"openInFull"'},{value:'"tableview"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}}}catch{}export{p as L};
