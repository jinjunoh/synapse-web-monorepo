import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{r as u}from"./index-Dl6G-zuu.js";import{T as f}from"./SynapseTableConstants-2qH3fDlQ.js";import{k as h,L as w}from"./SynapseClient-D4M9LQNp.js";import{u as x}from"./useDownloadList-AepPRhu5.js";import{I as g}from"./IconSvg-BZPixSS9.js";import{L as y}from"./react-router-dom-BM5QOYxp.js";import{L}from"./Link-EkQ0dGSu.js";import{M as j}from"./Tooltip-CYVQ1vhC.js";function c({to:a,className:l=""}){const{accessToken:o}=h(),s=w(),m="Click to view items in your download cart.",{data:t,isLoading:d,isError:n,error:r}=x();if(u.useEffect(()=>{n&&r&&o&&s(r)},[n,r,s,o]),!o||d)return e.jsx(e.Fragment,{});const i=(t==null?void 0:t.totalNumberOfFiles)??0;if(i===0)return e.jsx(e.Fragment,{});const p=e.jsx(j,{title:m,placement:"bottom",enterNextDelay:f,children:e.jsxs("span",{children:[e.jsx("span",{className:"SRC-primary-text-color",children:e.jsx(g,{icon:"cart"})}),e.jsx("span",{className:"download-cart-size",children:i})]})});return e.jsx(L,{to:a,component:y,className:`Download-Link v2 ${l}`,children:p})}try{c.displayName="ShowDownloadV2",c.__docgenInfo={description:`Nav bar item, displayed when files have been added to the Download Cart.
This must be configured with the URL of a page dedicated to showing the Download Cart.`,displayName:"ShowDownloadV2",props:{to:{defaultValue:null,description:"",name:"to",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{c as S};
