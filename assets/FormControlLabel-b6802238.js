import{a as O,g as T,_ as H,c as q,f as v,e as oe}from"./createTheme-d609db80.js";import{_ as s}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import{r as B}from"./index-76fb7be0.js";import{s as w,r as G,c as j,u as J}from"./styled-bb145c31.js";import{u as K,f as te}from"./useFormControl-41ba3265.js";import{a as N,j as u}from"./jsx-runtime-9dc53467.js";import{B as re}from"./ButtonBase-0719e676.js";import{c as ae}from"./Grow-2f9de6a4.js";import{c as V}from"./createSvgIcon-b657d91b.js";import{T as W}from"./Typography-f217f607.js";import{S as ne}from"./Stack-9fb6382b.js";function se(e){return O("PrivateSwitchBase",e)}T("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const le=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],ce=e=>{const{classes:o,checked:t,disabled:n,edge:a}=e,r={root:["root",t&&"checked",n&&"disabled",a&&`edge${v(a)}`],input:["input"]};return j(r,se,o)},ie=w(re)(({ownerState:e})=>s({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),de=w("input",{shouldForwardProp:G})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),pe=B.forwardRef(function(o,t){const{autoFocus:n,checked:a,checkedIcon:r,className:c,defaultChecked:x,disabled:m,disableFocusRipple:l=!1,edge:P=!1,icon:I,id:k,inputProps:y,inputRef:S,name:$,onBlur:i,onChange:h,onFocus:d,readOnly:M,required:_=!1,tabIndex:R,type:b,value:F}=o,f=H(o,le),[g,Q]=ae({controlled:a,default:!!x,name:"SwitchBase",state:"checked"}),C=K(),X=p=>{d&&d(p),C&&C.onFocus&&C.onFocus(p)},Y=p=>{i&&i(p),C&&C.onBlur&&C.onBlur(p)},Z=p=>{if(p.nativeEvent.defaultPrevented)return;const D=p.target.checked;Q(D),h&&h(p,D)};let z=m;C&&typeof z>"u"&&(z=C.disabled);const ee=b==="checkbox"||b==="radio",U=s({},o,{checked:g,disabled:z,disableFocusRipple:l,edge:P}),A=ce(U);return N(ie,s({component:"span",className:q(A.root,c),centerRipple:!0,focusRipple:!l,disabled:z,tabIndex:null,role:void 0,onFocus:X,onBlur:Y,ownerState:U,ref:t},f,{children:[u(de,s({autoFocus:n,checked:a,defaultChecked:x,className:A.input,disabled:z,id:ee?k:void 0,name:$,onChange:Z,readOnly:M,ref:S,required:_,ownerState:U,tabIndex:R,type:b},b==="checkbox"&&F===void 0?{}:{value:F},y)),g?r:I]}))}),ue=pe,me=V(u("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),he=V(u("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),be=V(u("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function fe(e){return O("MuiCheckbox",e)}const Ce=T("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),E=Ce,ke=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],ge=e=>{const{classes:o,indeterminate:t,color:n,size:a}=e,r={root:["root",t&&"indeterminate",`color${v(n)}`,`size${v(a)}`]},c=j(r,fe,o);return s({},o,c)},ve=w(ue,{shouldForwardProp:e=>G(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.indeterminate&&o.indeterminate,o[`size${v(t.size)}`],t.color!=="default"&&o[`color${v(t.color)}`]]}})(({theme:e,ownerState:o})=>s({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:oe(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${E.checked}, &.${E.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${E.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),xe=u(he,{}),Pe=u(me,{}),ye=u(be,{}),$e=B.forwardRef(function(o,t){var n,a;const r=J({props:o,name:"MuiCheckbox"}),{checkedIcon:c=xe,color:x="primary",icon:m=Pe,indeterminate:l=!1,indeterminateIcon:P=ye,inputProps:I,size:k="medium",className:y}=r,S=H(r,ke),$=l?P:m,i=l?P:c,h=s({},r,{color:x,indeterminate:l,size:k}),d=ge(h);return u(ve,s({type:"checkbox",inputProps:s({"data-indeterminate":l},I),icon:B.cloneElement($,{fontSize:(n=$.props.fontSize)!=null?n:k}),checkedIcon:B.cloneElement(i,{fontSize:(a=i.props.fontSize)!=null?a:k}),ownerState:h,ref:t,className:q(d.root,y)},S,{classes:d}))}),Ve=$e;function Fe(e){return O("MuiFormControlLabel",e)}const Be=T("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),L=Be,Ie=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],Se=e=>{const{classes:o,disabled:t,labelPlacement:n,error:a,required:r}=e,c={root:["root",t&&"disabled",`labelPlacement${v(n)}`,a&&"error",r&&"required"],label:["label",t&&"disabled"],asterisk:["asterisk",a&&"error"]};return j(c,Fe,o)},Re=w("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[{[`& .${L.label}`]:o.label},o.root,o[`labelPlacement${v(t.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>s({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${L.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${L.label}`]:{[`&.${L.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),ze=w("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${L.error}`]:{color:(e.vars||e).palette.error.main}})),Le=B.forwardRef(function(o,t){var n,a;const r=J({props:o,name:"MuiFormControlLabel"}),{className:c,componentsProps:x={},control:m,disabled:l,disableTypography:P,label:I,labelPlacement:k="end",required:y,slotProps:S={}}=r,$=H(r,Ie),i=K(),h=(n=l??m.props.disabled)!=null?n:i==null?void 0:i.disabled,d=y??m.props.required,M={disabled:h,required:d};["checked","name","onChange","value","inputRef"].forEach(g=>{typeof m.props[g]>"u"&&typeof r[g]<"u"&&(M[g]=r[g])});const _=te({props:r,muiFormControl:i,states:["error"]}),R=s({},r,{disabled:h,labelPlacement:k,required:d,error:_.error}),b=Se(R),F=(a=S.typography)!=null?a:x.typography;let f=I;return f!=null&&f.type!==W&&!P&&(f=u(W,s({component:"span"},F,{className:q(b.label,F==null?void 0:F.className),children:f}))),N(Re,s({className:q(b.root,c),ownerState:R,ref:t},$,{children:[B.cloneElement(m,M),d?N(ne,{display:"block",children:[f,N(ze,{ownerState:R,"aria-hidden":!0,className:b.asterisk,children:[" ","*"]})]}):f]}))}),Ae=Le;export{Ve as C,Ae as F,ue as S};
