import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{r as a}from"./index-Dl6G-zuu.js";import{k as C,p as h}from"./SynapseClient-Ihq4xrvb.js";import"./OrientationBanner-BV5RFxzC.js";import"./getEndpoint-CjoHA800.js";import{C as g}from"./HelpPopover-F37HRDEf.js";import{F as y}from"./FullWidthAlert-xeBFwHL5.js";import{T as S}from"./TextField-BYZwcPau.js";import{M as x}from"./Alert-HJYNNEvY.js";const p=({isShowingModal:s=!1,onClose:m})=>{const{accessToken:u}=C(),[o,n]=a.useState(""),[f,i]=a.useState(!1),[c,r]=a.useState(),l=()=>{n(""),r(void 0),m()},d=async()=>{try{const e=await h.createProject(o,u);i(!0),l(),window.location.href=`/Synapse:${e.id}`}catch(e){e.reason?r(e.reason):r(e.toString())}},j=t.jsxs(t.Fragment,{children:[t.jsx(S,{id:"projectInput",label:"Project Name",value:o,fullWidth:!0,onChange:e=>{n(e.target.value)},inputProps:{onKeyDown:e=>{e.key==="Enter"&&o!==""&&d()}}}),c&&t.jsx(x,{severity:"error",children:c})]});return t.jsxs(t.Fragment,{children:[t.jsx(g,{open:s,title:"Create a new Project",content:j,confirmButtonProps:{children:"Save"},onConfirm:()=>{d()},onCancel:l,maxWidth:"md"}),t.jsx(y,{show:f,variant:"info",title:"Project created",description:"",autoCloseAfterDelayInSeconds:10,onClose:()=>{i(!1)}})]})};try{p.displayName="CreateProjectModal",p.__docgenInfo={description:"",displayName:"CreateProjectModal",props:{isShowingModal:{defaultValue:{value:"false"},description:"",name:"isShowingModal",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}export{p as C};