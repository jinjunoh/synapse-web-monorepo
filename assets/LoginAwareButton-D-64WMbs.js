import{j as a}from"./jsx-runtime-Du8NFWEI.js";import{L as s}from"./react-router-dom-BM5QOYxp.js";import{S as c}from"./SynapseConstants-JYtSvawC.js";import{k as m}from"./SynapseClient-D4M9LQNp.js";import"./index-Dl6G-zuu.js";import"./getEndpoint-CjoHA800.js";import{B as p}from"./Button-mb55Lwfk.js";const i=t=>{const{accessToken:l}=m(),r=!!l,e={...t},n={to:t.to,replace:t.replace};delete e.to,delete e.replace,r||(delete e.href,e.className=c);let o=a.jsx(p,{...e,children:e.children});return r&&n.to&&!e.href&&(o=a.jsx(s,{to:n.to,replace:n.replace,children:o})),o};try{i.displayName="LoginAwareButton",i.__docgenInfo={description:"",displayName:"LoginAwareButton",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}export{i as L};
