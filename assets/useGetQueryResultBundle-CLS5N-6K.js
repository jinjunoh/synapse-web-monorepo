import{r as k}from"./index-Dl6G-zuu.js";import{k as l,o as f,p as y}from"./SynapseClient-Ihq4xrvb.js";import{u as T}from"./useInfiniteQuery-rilHf7iP.js";import{a as g,b}from"./SynapseConstants-BVYQRCsB.js";import"./getEndpoint-CjoHA800.js";import"./jsx-runtime-Du8NFWEI.js";import{m as P}from"./merge-DTQPuav3.js";const c={staleTime:1e3*60*30};function B(e,t){const{accessToken:a,keyFactory:n}=l();return f({...c,...t,queryKey:n.getEntityTableQueryResultQueryKey(e,!1),queryFn:()=>y.getQueryTableResults(e,a)})}function S(e,t,a){const{accessToken:n,keyFactory:o}=l();return f({...c,...t,queryKey:o.getEntityTableQueryResultWithAsyncStatusQueryKey(e,!1),queryFn:()=>y.getQueryTableAsyncJobResults(e,n,a)})}function E(e,t,a){const n=e.partMask&g,o={...e,partMask:n},r=n>0?t==null?void 0:t.enabled:!1;return S(o,{...t,enabled:r},a)}function q(e,t,a){const n=e.partMask&~g,o={...e,query:{...e.query,offset:void 0,limit:void 0,sort:void 0},partMask:n},r=n>0?t==null?void 0:t.enabled:!1;return S(o,{...t,enabled:r},a)}function M(e){return k.useMemo(()=>({data:e.data,status:e.status,isError:e.isError,isLoading:e.isLoading,error:e.error,isSuccess:e.isSuccess,isPlaceholderData:e.isPlaceholderData,isPending:e.isPending}),[e.data,e.error,e.isError,e.isLoading,e.isPending,e.isPlaceholderData,e.isSuccess,e.status])}function w(e,t,a){const n=E(e,t,a),o=q(e,t,a),r=M(n),s=M(o);return k.useMemo(()=>r.status==="error"?r:s.status==="error"?s:r.isLoading?r:s.isLoading?s:r.isPending?P({},r,s):P({},s,r),[r,s])}function A(e,t,a){const{accessToken:n,keyFactory:o}=l();return T({...c,...t,queryKey:o.getEntityTableQueryResultQueryKey(e,!0),queryFn:r=>{const s=typeof r.pageParam=="string"?parseInt(r.pageParam):r.pageParam??0;return y.getQueryTableAsyncJobResults({...e,query:{...e.query,offset:s},partMask:s!==0?e.partMask&g:e.partMask},n,a)},select:r=>{const s=r==null?void 0:r.pages[0];if(s.responseBody)for(let i=0;i<r.pages.length;i++){const u=r.pages[i];u.responseBody!=null&&(r.pages[i].responseBody={...s.responseBody,queryResult:u.responseBody.queryResult})}return r},getPreviousPageParam:r=>{if(r.jobState!=="COMPLETE")return;const s=r.requestBody;if(s.query.offset==null||s.query.offset===0)return;const i=s.query.limit??b;return Math.max(s.query.offset-i,0)},initialPageParam:void 0,getNextPageParam:(r,s)=>{var m,p;if(r.jobState!=="COMPLETE")return;const i=r.requestBody,u=i.query.limit??b,d=(m=s[0].responseBody)==null?void 0:m.queryCount;if(!(d!=null&&(i.query.offset??0)+u>=d))return((p=r.responseBody.queryResult)==null?void 0:p.queryResults.rows.length)===u?(i.query.offset??0)+u:void 0}})}function D(e,t,a=!1){const{accessToken:n,keyFactory:o}=l();return f({...c,...t,queryKey:o.getFullTableQueryResultQueryKey(e,a),queryFn:()=>y.getFullQueryTableResults(e,a?void 0:n)})}export{D as a,w as b,A as c,B as u};