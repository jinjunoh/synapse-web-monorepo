import{j as r}from"./jsx-runtime-Du8NFWEI.js";import{r as a,R as p}from"./index-Dl6G-zuu.js";import{X as m,Y as y,Z as f,n as c,_ as C,a as k,$ as S,a0 as h,a1 as g,W as x,a2 as w,a3 as E}from"./ApplicationSessionManager-wuJS70CK.js";import"./OrientationBanner-tb7WDFcR.js";import{S as b}from"./getEndpoint-CjoHA800.js";import{S as _}from"./ToastMessage-CyCjbTLE.js";import{d as v}from"./dayjs.min-d18Up55D.js";var T=function(){return null};async function R(){let e=await h(),o;try{o=await g(e)}catch(t){throw t instanceof x&&t.status===401&&(console.error("Encountered error fetching profile: ",t,"Signing out..."),await w(),e=void 0),t}let n;return e&&E(e).then(t=>{n=v(t.authenticatedOn).format("L LT")}),{accessToken:e,profile:o,authenticatedOn:n}}const i=new m(y);function j(e){const o=b[e];window.SRC={OVERRIDE_ENDPOINT_CONFIG:o}}function d(e){const{storybookContext:o}=e,n=o.globals.stack||o.parameters.stack;a.useEffect(()=>{j(n)},[n]);const[t,l]=p.useState(void 0);f(),a.useEffect(()=>{R().then(s=>{l(s.accessToken)})}),a.useEffect(()=>{async function s(){await i.cancelQueries(),await i.resetQueries()}s()},[t,n]);const u=a.useMemo(()=>({accessToken:t,isInExperimentalMode:c.isInSynapseExperimentalMode(),utcTime:c.getUseUtcTimeFromCookie(),withErrorBoundary:!0,downloadCartPageUrl:"/?path=/story/download-downloadcartpage--demo"}),[t]);return r.jsx(C,{client:i,children:r.jsxs(k,{synapseContext:u,children:[o.globals.showReactQueryDevtools&&r.jsx(T,{}),r.jsxs(S,{children:[r.jsx(_,{}),r.jsx("main",{children:e.children})]})]})})}try{d.displayName="StorybookComponentWrapper",d.__docgenInfo={description:"Wraps storybook story components to ensure that all components receive required context.",displayName:"StorybookComponentWrapper",props:{storybookContext:{defaultValue:null,description:"",name:"storybookContext",required:!0,type:{name:"{ globals: { stack?: SynapseStack | undefined; showReactQueryDevtools?: boolean | undefined; }; parameters: { stack?: SynapseStack | undefined; }; }"}}}}}catch{}export{d as S,R as s};
