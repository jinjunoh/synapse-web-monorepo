import{a as N,g as E,_ as O,b as U,e as x,d as Q}from"./createTheme-CwlmBDro.js";import{_ as a}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import{r as B}from"./index-Dl6G-zuu.js";import{s as R,r as H,c as L,u as X}from"./styled-OgyJf9MH.js";import{u as Y}from"./useFormControl-EHw8eS4L.js";import{j as i}from"./jsx-runtime-Du8NFWEI.js";import{B as Z}from"./ButtonBase-5SeL_6IU.js";import{b as ee}from"./Grow-DYov3NPi.js";import{c as S}from"./createSvgIcon-BYNyJbGL.js";function oe(e){return N("PrivateSwitchBase",e)}E("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const te=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],ce=e=>{const{classes:o,checked:t,disabled:r,edge:c}=e,s={root:["root",t&&"checked",r&&"disabled",c&&`edge${x(c)}`],input:["input"]};return L(s,oe,o)},se=R(Z)(({ownerState:e})=>a({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),ne=R("input",{shouldForwardProp:H})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),ae=B.forwardRef(function(o,t){const{autoFocus:r,checked:c,checkedIcon:s,className:u,defaultChecked:C,disabled:I,disableFocusRipple:d=!1,edge:b=!1,icon:z,id:p,inputProps:P,inputRef:$,name:g,onBlur:h,onChange:m,onFocus:f,readOnly:V,required:q=!1,tabIndex:T,type:v,value:j}=o,W=O(o,te),[w,A]=ee({controlled:c,default:!!C,name:"SwitchBase",state:"checked"}),l=Y(),D=n=>{f&&f(n),l&&l.onFocus&&l.onFocus(n)},G=n=>{h&&h(n),l&&l.onBlur&&l.onBlur(n)},J=n=>{if(n.nativeEvent.defaultPrevented)return;const M=n.target.checked;A(M),m&&m(n,M)};let k=I;l&&typeof k>"u"&&(k=l.disabled);const K=v==="checkbox"||v==="radio",y=a({},o,{checked:w,disabled:k,disableFocusRipple:d,edge:b}),_=ce(y);return i.jsxs(se,a({component:"span",className:U(_.root,u),centerRipple:!0,focusRipple:!d,disabled:k,tabIndex:null,role:void 0,onFocus:D,onBlur:G,ownerState:y,ref:t},W,{children:[i.jsx(ne,a({autoFocus:r,checked:c,defaultChecked:C,className:_.input,disabled:k,id:K?p:void 0,name:g,onChange:J,readOnly:V,ref:$,required:q,ownerState:y,tabIndex:T,type:v},v==="checkbox"&&j===void 0?{}:{value:j},P)),w?s:z]}))}),ie=ae,re=S(i.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),le=S(i.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),de=S(i.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function ue(e){return N("MuiCheckbox",e)}const pe=E("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),F=pe,he=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],me=e=>{const{classes:o,indeterminate:t,color:r,size:c}=e,s={root:["root",t&&"indeterminate",`color${x(r)}`,`size${x(c)}`]},u=L(s,ue,o);return a({},o,u)},fe=R(ie,{shouldForwardProp:e=>H(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.indeterminate&&o.indeterminate,o[`size${x(t.size)}`],t.color!=="default"&&o[`color${x(t.color)}`]]}})(({theme:e,ownerState:o})=>a({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Q(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${F.checked}, &.${F.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${F.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),ke=i.jsx(le,{}),xe=i.jsx(re,{}),Ce=i.jsx(de,{}),be=B.forwardRef(function(o,t){var r,c;const s=X({props:o,name:"MuiCheckbox"}),{checkedIcon:u=ke,color:C="primary",icon:I=xe,indeterminate:d=!1,indeterminateIcon:b=Ce,inputProps:z,size:p="medium",className:P}=s,$=O(s,he),g=d?b:I,h=d?b:u,m=a({},s,{color:C,indeterminate:d,size:p}),f=me(m);return i.jsx(fe,a({type:"checkbox",inputProps:a({"data-indeterminate":d},z),icon:B.cloneElement(g,{fontSize:(r=g.props.fontSize)!=null?r:p}),checkedIcon:B.cloneElement(h,{fontSize:(c=h.props.fontSize)!=null?c:p}),ownerState:m,ref:t,className:U(f.root,P)},$,{classes:f}))}),Re=be;export{Re as C,ie as S};
