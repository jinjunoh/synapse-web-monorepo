import{j as a}from"./jsx-runtime-9dc53467.js";import{L as c}from"./react-router-dom-a6963e8b.js";import{S as s}from"./SynapseConstants-567f6998.js";import{v as p}from"./SynapseClient-ceb0e6d4.js";import{B as m}from"./Button-6cf38875.js";const l=t=>{const{accessToken:i}=p(),r=!!i,e={...t},n={to:t.to,replace:t.replace};delete e.to,delete e.replace,r||(delete e.href,e.className=s);let o=a(m,{...e,children:e.children});return r&&n.to&&!e.href&&(o=a(c,{to:n.to,replace:n.replace,children:o})),o};try{l.displayName="LoginAwareButton",l.__docgenInfo={description:"",displayName:"LoginAwareButton",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}}}}}catch{}export{l as L};
//# sourceMappingURL=LoginAwareButton-dd44d54b.js.map
