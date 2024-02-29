import{j as e,a as s,F as h}from"./jsx-runtime-9dc53467.js";import{r as c}from"./index-76fb7be0.js";import{M as b,a as x}from"./HelpPopover-ae761a76.js";import{L as g}from"./LightTooltip-3e86e28c.js";import{T as m}from"./Typography-1d068b0b.js";import{B as u}from"./Box-8faf86fd.js";import{H as E}from"./IconSvg-83f0daf8.js";import{B as L}from"./Button-33299b2c.js";import{C as y}from"./_getTag-559aebd9.js";import{L as S}from"./List-a6975dc7.js";import{L as M}from"./ListItem-55cd17a8.js";import{M as A}from"./MenuItem-4ee45934.js";import{M as T}from"./TextField-259737a9.js";import{n as v}from"./noop-cb277961.js";function d(a){const{text:o,tooltipMarkdownText:t}=a;return s(h,{children:[o,t&&e(g,{title:e(m,{variant:"body1",mb:0,children:e(b,{markdown:t})}),children:e(E,{sx:{ml:1,color:"grey.600",fontSize:"16px"}})})]})}function w(a){const{evaluations:o}=a,[t,l]=c.useState(!1);return s(u,{mt:2,children:[e(L,{variant:"contained",sx:{mb:1},onClick:()=>l(!t),children:`${t?"Hide":"Show"} All Available Evaluation Queues`}),s(y,{in:t,children:[e(m,{variant:"body1",children:"Available Evaluation Queues:"}),e(S,{dense:!0,children:o.map(n=>e(M,{children:e(d,{text:n.name,tooltipMarkdownText:n.submissionInstructionsMessage})},n.id))})]})]})}function I(a){const{evaluations:o,onChangeSelectedEvaluation:t=v}=a,[l,n]=c.useState(null);return e(x,{disablePortal:!1,value:l,onChange:(i,r)=>{n(r),t(r)},options:o,getOptionLabel:i=>i.name,renderOption:(i,r,Q,f)=>e(A,{...i,children:e(d,{text:f.getOptionLabel(r),tooltipMarkdownText:r.submissionInstructionsMessage})}),renderInput:i=>e(T,{...i,label:"Selected Evaluation Queue"})})}function p(a){const{isSelectable:o=!0,onChangeSelectedEvaluation:t=v,evaluations:l}=a,n=l.length;if(c.useEffect(()=>{n===1&&o&&t(l[0])},[l,o,n,t]),n===0)return e(m,{variant:"body1",children:"No evaluations found"});if(n===1){const i=l[0];return e(u,{display:"flex",alignItems:"center",children:e(d,{text:i.name,tooltipMarkdownText:i.submissionInstructionsMessage})})}return s(u,{className:"AvailableEvaluationQueueList",children:[o&&e(I,{...a}),e(w,{...a})]})}try{p.displayName="AvailableEvaluationQueueList",p.__docgenInfo={description:"",displayName:"AvailableEvaluationQueueList",props:{evaluations:{defaultValue:null,description:"",name:"evaluations",required:!0,type:{name:"Evaluation[]"}},isSelectable:{defaultValue:null,description:"",name:"isSelectable",required:!1,type:{name:"boolean"}},onChangeSelectedEvaluation:{defaultValue:null,description:"",name:"onChangeSelectedEvaluation",required:!1,type:{name:"((evaluation: Evaluation | null) => void)"}}}}}catch{}export{p as A};
