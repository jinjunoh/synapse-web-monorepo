import{j as s,a as d,F as P}from"./jsx-runtime-9dc53467.js";import{r as T}from"./index-76fb7be0.js";import{v as E,K as x,x as y,J as N}from"./SynapseClient-ceb0e6d4.js";import{u as A}from"./useInfiniteQuery-49bff1c8.js";import"./OrientationBanner-1c6f5b11.js";import"./getEndpoint-ac94413e.js";import{g as C}from"./InfiniteQueryUtils-54ae7e6b.js";import{H as _}from"./SynapseTableCell-a0770d03.js";import{C as M}from"./Checkbox-47042b61.js";import{L as D}from"./LinearProgress-8d1ab3ac.js";import{A as B}from"./Alert-34cc4490.js";import{F}from"./InputLabel-91f95ac8.js";import{F as O}from"./FormGroup-4afb0bf2.js";import{T as k}from"./Typography-10432b83.js";import{B as R}from"./Box-ddce9904.js";import{B as p}from"./Button-6cf38875.js";function ee(r,o){const{accessToken:u,keyFactory:t}=E();return N(t.getEvaluationByIdQueryKey(r),()=>y.getEvaluation(r,u),o)}function b(r={},o){const{accessToken:t,keyFactory:i}=E(),n=x();return A(i.getEvaluationsQueryKey(r),async l=>{const a=await y.getEvaluations({...r,limit:20,offset:l.pageParam},t);return a.results.forEach(c=>{n.setQueryData(i.getEvaluationByIdQueryKey(c.id),c)}),a},{...o,getNextPageParam:C})}function g(r){var m;const{accessType:o,activeOnly:u,selectedIds:t=[],onChange:i}=r,[n,l]=T.useState(0),{data:a,isLoading:c,hasNextPage:f,fetchNextPage:I,isFetchingNextPage:v}=b({accessType:o,activeOnly:u},{keepPreviousData:!0,useErrorBoundary:!0});if(c)return s(D,{});if(!(a!=null&&a.pages))return s(B,{severity:"error",children:"An unexpected error occurred and evaluations could not be loaded"});const S=a.pages.length-1>n||f&&!v;return d(P,{children:[s(F,{children:s(O,{sx:{gap:1},children:(m=a.pages[n])==null?void 0:m.results.map(e=>s(M,{label:d(k,{variant:"smallText1",component:"span",children:[e.name," ",e.submissionInstructionsMessage&&e.submissionInstructionsMessage.length>0&&s(_,{markdownText:e.submissionInstructionsMessage,placement:"right"})]}),"aria-label":e.name,checked:t.includes(e.id),onChange:()=>{t.includes(e.id)?i(t.filter(h=>h!==e.id)):i([...t,e.id])}},e.id))})}),d(R,{display:"flex",my:2,gap:1,children:[n>0&&s(p,{variant:"outlined",onClick:()=>l(e=>e-1),children:"Previous"}),s(p,{variant:"outlined",disabled:!S,onClick:()=>{a.pages[n+1]?l(e=>e+1):I().then(()=>l(e=>e+1)).catch(()=>{console.error("Error fetching next page of evaluations")})},children:"Next"})]})]})}try{g.displayName="EvaluationFinder",g.__docgenInfo={description:"",displayName:"EvaluationFinder",props:{accessType:{defaultValue:null,description:"",name:"accessType",required:!1,type:{name:"enum",value:[{value:'"CREATE"'},{value:'"READ"'},{value:'"UPDATE"'},{value:'"DELETE"'},{value:'"CHANGE_PERMISSIONS"'},{value:'"DOWNLOAD"'},{value:'"UPLOAD"'},{value:'"PARTICIPATE"'},{value:'"SUBMIT"'},{value:'"READ_PRIVATE_SUBMISSION"'},{value:'"UPDATE_SUBMISSION"'},{value:'"DELETE_SUBMISSION"'},{value:'"TEAM_MEMBERSHIP_UPDATE"'},{value:'"SEND_MESSAGE"'},{value:'"CHANGE_SETTINGS"'},{value:'"MODERATE"'},{value:'"REVIEW_SUBMISSIONS"'}]}},activeOnly:{defaultValue:null,description:"",name:"activeOnly",required:!1,type:{name:"boolean"}},selectedIds:{defaultValue:null,description:"",name:"selectedIds",required:!0,type:{name:"string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(newSelectedIds: string[]) => void"}}}}}catch{}export{g as E,ee as u};
//# sourceMappingURL=EvaluationFinder-d725ebb2.js.map
