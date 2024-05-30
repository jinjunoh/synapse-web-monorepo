import{j as e}from"./jsx-runtime-Du8NFWEI.js";import"./SynapseClient-Ihq4xrvb.js";import{m as R,a as F}from"./SynapseConstants-BVYQRCsB.js";import"./index-Dl6G-zuu.js";import"./getEndpoint-CjoHA800.js";import{g as m}from"./queryUtils-AiLKfwbw.js";import{u as A}from"./useEntity-C-5gRMam.js";import{u as S}from"./useGetQueryResultBundle-CLS5N-6K.js";import{u as T}from"./useShowDesktop-CPh-208G.js";import{E as U}from"./ExpandableContent-BrgcEX0V.js";import{L as C}from"./LargeButton-DoFTO_gz.js";import{K as k,L as Q,N as B}from"./HelpPopover-F37HRDEf.js";import{g as K}from"./ColorGradient-BJYx2bEb.js";function p({link:r,summary:n,title:l,color:o,fileHandleAssociation:t,exploreLink:i}){const d=e.jsxs("div",{className:"Programs__Mobile__Header",children:[e.jsx("span",{className:"Programs__Card__header__icon",children:t&&e.jsx(k,{fileHandleAssociation:t})}),e.jsxs("span",{className:"Programs__Mobile__Header__Title",children:[" ",l," "]})]}),u=e.jsxs("div",{className:"Programs__Mobile__Content",children:[r&&e.jsx("p",{className:"Programs__Card__header__info__link",children:e.jsx("a",{className:"highlight-link",href:r,target:"_blank",rel:"noreferrer",children:"Visit website"})}),e.jsx("p",{children:n}),e.jsx(C,{color:"secondary",variant:"contained",href:i,sx:{marginLeft:0},children:"Explore"})]});return e.jsx(U,{title:d,content:u})}try{p.displayName="ProgramsMobile",p.__docgenInfo={description:"",displayName:"ProgramsMobile",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},summary:{defaultValue:null,description:"",name:"summary",required:!0,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},exploreLink:{defaultValue:null,description:"",name:"exploreLink",required:!0,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},fileHandleAssociation:{defaultValue:null,description:"",name:"fileHandleAssociation",required:!1,type:{name:"FileHandleAssociation"}}}}}catch{}function _({link:r,summary:n,title:l,color:o,fileHandleAssociation:t,exploreLink:i}){return e.jsxs("div",{className:"Programs__Card",children:[e.jsxs("div",{className:"Programs__Card__header",style:{backgroundColor:o.replace(")",",.05)")},children:[e.jsx("div",{className:"Programs__Card__header__icon",children:t&&e.jsx(k,{fileHandleAssociation:t})}),e.jsxs("div",{className:"Programs__Card__header__info",children:[e.jsxs("span",{className:"Programs__Card__header__info__title",children:[" ",l," "]}),r&&e.jsx("p",{className:"Programs__Card__header__info__link",children:e.jsx("a",{className:"highlight-link",href:r,target:"_blank",rel:"noreferrer",children:"Visit website"})})]})]}),e.jsxs("div",{className:"Programs__Card__summary",children:[e.jsxs("p",{children:[" ",n," "]}),e.jsx(C,{color:"secondary",variant:"contained",href:i,sx:{width:"120px",marginLeft:0},children:"Explore"})]})]})}try{_.displayName="ProgramsDesktop",_.__docgenInfo={description:"",displayName:"ProgramsDesktop",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},summary:{defaultValue:null,description:"",name:"summary",required:!0,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},exploreLink:{defaultValue:null,description:"",name:"exploreLink",required:!0,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},fileHandleAssociation:{defaultValue:null,description:"",name:"fileHandleAssociation",required:!1,type:{name:"FileHandleAssociation"}}}}}catch{}const N=r=>{const{entityId:n,titleColumnName:l,linkColumnName:o,summaryColumnName:t,imageFileHandleColumnName:i,linkConfig:d,rgbIndex:u}=r,g=T(),P=A(n),j=K(u??0,2).colorPalette[0],q={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:n,partMask:R|F,query:{sql:`select * from ${n}`}},{data:a}=S(q),V=m(l,a),b=m(t,a),I=m(o,a),E=m(i,a);return e.jsx("div",{className:`Programs${g?"__Desktop":""}`,children:a==null?void 0:a.queryResult.queryResults.rows.map(f=>{const s=f.values;s.some(c=>c===null)&&console.warn("Row has null value(s) when no nulls expected");const L=s[V],v=s[b],y=s[I]??"",w=s[E],h={};a==null||a.queryResult.queryResults.headers.forEach((c,D)=>{h[c.name]=D});const{href:H}=Q(y,d,s,h),M=B(P.data,w,`syn${f.rowId}`),x={title:L,summary:v,link:y,color:j,exploreLink:H,fileHandleAssociation:M};return g?e.jsx(_,{...x}):e.jsx(p,{...x})})})};try{N.displayName="Programs",N.__docgenInfo={description:"",displayName:"Programs",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!0,type:{name:"number"}},titleColumnName:{defaultValue:null,description:"",name:"titleColumnName",required:!0,type:{name:"string"}},linkColumnName:{defaultValue:null,description:"",name:"linkColumnName",required:!0,type:{name:"string"}},summaryColumnName:{defaultValue:null,description:"",name:"summaryColumnName",required:!0,type:{name:"string"}},imageFileHandleColumnName:{defaultValue:null,description:"",name:"imageFileHandleColumnName",required:!0,type:{name:"string"}},linkConfig:{defaultValue:null,description:"",name:"linkConfig",required:!0,type:{name:"{ matchColumnName: string; overrideValueWithRowID?: boolean | undefined; isMarkdown: false; tooltipText?: string | undefined; target?: TargetEnum | undefined; } & ({ ...; } | { ...; })"}}}}}catch{}export{N as P};