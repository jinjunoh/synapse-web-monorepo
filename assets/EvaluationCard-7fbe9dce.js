import{j as t,a as n,F as h}from"./jsx-runtime-9dc53467.js";import{r as l}from"./index-76fb7be0.js";import{h as y,C as g,z as w,D}from"./ApplicationSessionManager-7024b1a7.js";import{C as f,a as S}from"./CreatedOnByUserDiv-34138cfc.js";import{W as k}from"./WarningDialog-c1edf5ce.js";import{I}from"./IconSvg-dc6fa014.js";import{R as A}from"./Row-3bc5f961.js";import{C as E}from"./Col-d85ccfcb.js";import{B as _}from"./Button-065a21d4.js";import{D as r}from"./Dropdown-38810c77.js";const C=({evaluation:e,onEdit:c,onModifyAccess:d,onSubmit:s,onDeleteSuccess:u})=>{const{accessToken:o}=y(),[p,i]=l.useState(),[a,v]=l.useState();l.useEffect(()=>{i(void 0),g(e.id,o).then(m=>{v(m)}).catch(m=>i(m))},[e,o]);const b=()=>{i(void 0),D(e.id,o).then(u).catch(i)};return t("div",{className:"bootstrap-4-backport evaluation-card",children:t(f,{children:n(f.Body,{children:[p&&t(w,{error:p}),a&&n(h,{children:[n(A,{children:[t(E,{children:t("label",{children:"EVALUATION QUEUE"})}),t(E,{children:t(x,{permissions:a,onDelete:b,onEdit:c,onModifyAccess:d})})]}),n("h4",{children:[e.name," (",e.id,")"]}),t("label",{children:"Description"}),t("p",{children:e.description}),t("label",{children:"Instructions"}),t("p",{children:e.submissionInstructionsMessage}),t(S,{userId:e.ownerId,date:new Date(e.createdOn)}),(a==null?void 0:a.canSubmit)&&t(_,{className:"submit-button",color:"primary",variant:"contained",onClick:s,children:"Submit"})]})]})})})},x=({permissions:e,onEdit:c,onModifyAccess:d,onDelete:s})=>{const[u,o]=l.useState(!1);return e.canEdit||e.canChangePermissions||e.canDelete?n(h,{children:[(e==null?void 0:e.canDelete)&&t(k,{title:"Delete Evaluation Queue",content:"Are you sure you want to delete the Evaluation Queue?",open:u,confirmButtonText:"Delete",onConfirm:()=>{s(),o(!1)},onConfirmCallbackArgs:[],onCancel:()=>{o(!1)},confirmButtonColor:"error"}),n(r,{className:"float-right",children:[t(r.Toggle,{role:"menu","aria-label":"Options",variant:"link",className:"dropdown-no-caret",children:t(I,{icon:"verticalEllipsis"})}),n(r.Menu,{alignRight:!0,children:[e.canEdit&&t(r.Item,{role:"menuitem",onClick:c,children:"Edit"}),e.canChangePermissions&&t(r.Item,{role:"menuitem",onClick:d,children:"Modify Access"}),e.canDelete&&n(h,{children:[t(r.Divider,{}),t(r.Item,{role:"menuitem",onClick:()=>o(!0),children:"Delete"})," "]})]})]})]}):null};try{C.displayName="EvaluationCard",C.__docgenInfo={description:`This component is currently only intended to be used in Synapse.org.
For this reason, the dropdown menu items are unimplemented as no components
in this project implement their behavior. The dropdown options are also
not shown if the current user does not have permissions for the action

All Evaluation metadata must be provided to this component; it will not
retrieve an Evaluation via a REST API call`,displayName:"EvaluationCard",props:{evaluation:{defaultValue:null,description:"properties of the Evaluation to show",name:"evaluation",required:!0,type:{name:"ExistingEvaluation"}},onEdit:{defaultValue:null,description:"Callback when the Edit option in the dropdown is clicked",name:"onEdit",required:!0,type:{name:"() => void"}},onModifyAccess:{defaultValue:null,description:"Callback when the Modify Access option in the dropdown is clicked",name:"onModifyAccess",required:!0,type:{name:"() => void"}},onSubmit:{defaultValue:null,description:"Callback when the Submit button is clicked",name:"onSubmit",required:!0,type:{name:"() => void"}},onDeleteSuccess:{defaultValue:null,description:"Callback when the Delete option is successful",name:"onDeleteSuccess",required:!0,type:{name:"() => void"}}}}}catch{}export{C as E};
