import{u as k}from"./useQueries-Cj-iM2Bg.js";import{as as F,k as u,o,p as y,q as m,at as S,au as g,av as f,aw as l,ax as K}from"./SynapseClient-D4M9LQNp.js";import{u as q}from"./useMutation-C_5c4ONT.js";import{u as Q}from"./useInfiniteQuery-CYIffITO.js";import"./OrientationBanner-BV5RFxzC.js";import"./getEndpoint-CjoHA800.js";import"./index-Dl6G-zuu.js";import{g as A}from"./QueryFilterUtils-BurTTSIs.js";import{u as d}from"./utils-C1pLSGi5.js";import{u as T}from"./useMediaQuery-BVccMj50.js";import{s as C}from"./sortBy-DLfoUNR6.js";import"./jsx-runtime-Du8NFWEI.js";const P=async(e,t)=>{const c=t.map(s=>F(e,s)),r=await Promise.all(c);return C(t,s=>-1*Number(r.find(n=>s===n.accessRequirementId).isApproved))};function I(){const e=d();return T(e.breakpoints.up("md"))}function M(e,t){const{accessToken:c,keyFactory:r}=u();return o({...t,queryKey:r.getAccessRequirementQueryKey(String(e)),queryFn:()=>y.getAccessRequirementById(c,e)})}function b(e,t){const{accessToken:c,keyFactory:r}=u();return o({...t,queryKey:r.getEntityAccessRequirementsQueryKey(e),queryFn:()=>y.getAllAccessRequirements(c,e)})}function N(e,t){const{accessToken:c,keyFactory:r}=u();return o({...t,queryKey:r.getTeamAccessRequirementsQueryKey(e),queryFn:()=>y.getTeamAccessRequirements(c,e)})}function z(e,t){const{accessToken:c,keyFactory:r}=u();return o({...t,queryKey:r.getAccessRequirementWikiPageKey(e),queryFn:()=>y.getWikiPageKeyForAccessRequirement(c,e)})}function O(e){const t=m(),{accessToken:c,keyFactory:r}=u();return q({...e,mutationFn:s=>S(c,s),onSuccess:async(s,n,a)=>{const i=r.getAccessRequirementQueryKey(s.id.toString());if(t.setQueryData(i,s),e!=null&&e.onSuccess)return await e.onSuccess(s,n,a)}})}function H(e){const t=m(),{accessToken:c,keyFactory:r}=u();return q({...e,mutationFn:s=>g(c,s),onSuccess:async(s,n,a)=>{const i=r.getAccessRequirementQueryKey(s.id.toString());if(t.setQueryData(i,s),e!=null&&e.onSuccess)return await e.onSuccess(s,n,a)}})}function J(e,t){const{accessToken:c,keyFactory:r}=u();return o({...t,queryKey:r.getAccessRequirementAclQueryKey(e),queryFn:()=>y.getAccessRequirementAcl(c,e)})}function V(e){const t=m(),{accessToken:c,keyFactory:r}=u();return q({...e,mutationFn:s=>f(c,s),onSuccess:async(s,n,a)=>{await t.invalidateQueries({queryKey:r.getAccessRequirementAclQueryKey(n)}),e!=null&&e.onSuccess&&await e.onSuccess(s,n,a)}})}function X(e){const t=m(),{accessToken:c,keyFactory:r}=u();return q({...e,mutationFn:s=>l(c,s),onSuccess:async(s,n,a)=>{const i=r.getAccessRequirementAclQueryKey(s.id);if(t.setQueryData(i,s),e!=null&&e.onSuccess)return await e.onSuccess(s,n,a)}})}function Y(e){const t=m(),{accessToken:c,keyFactory:r}=u();return q({...e,mutationFn:s=>K(c,s),onSuccess:async(s,n,a)=>{const i=r.getAccessRequirementAclQueryKey(s.id);if(t.setQueryData(i,s),e!=null&&e.onSuccess)return await e.onSuccess(s,n,a)}})}function Z(e,t){const{accessToken:c,keyFactory:r}=u();return Q({...t,queryKey:r.searchAccessRequirementsQueryKey(e),queryFn:async s=>await y.searchAccessRequirements(c,{...e,nextPageToken:s.pageParam}),initialPageParam:void 0,getNextPageParam:s=>s.nextPageToken})}function _(e,t){const{accessToken:c,keyFactory:r}=u();return o({...t,queryKey:r.getAccessRequirementRestrictionInformationQueryKey(e),queryFn:()=>y.getRestrictionInformation(e,c)})}function $(e){const{accessToken:t}=u(),c=m(),{keyFactory:r}=u();return q({...e,mutationFn:s=>y.createLockAccessRequirement(s,t),mutationKey:["createLockAccessRequirement"],onSuccess:async(s,n,a)=>{if(await Promise.all([c.invalidateQueries({queryKey:r.getAccessRequirementQueryKey()}),c.invalidateQueries({queryKey:r.getAllEntityDataQueryKey()}),...A(r).map(i=>c.invalidateQueries(i))]),e!=null&&e.onSuccess)return e.onSuccess(s,n,a)}})}function R(e,t,c){return{queryKey:e.getAccessRequirementStatusQueryKey(c),queryFn:()=>y.getAccessRequirementStatus(t,c)}}function p(e,t){const{accessToken:c,keyFactory:r}=u();return o({...t,...R(r,c,e)})}function ee(e){const{accessToken:t,keyFactory:c}=u();return k({queries:e.map(r=>R(c,t,r))})}function se(e,t){const{accessToken:c,keyFactory:r}=u();return o({...t,queryKey:r.getSortedAccessRequirementsAndStatusQueryKey(e),queryFn:()=>P(c,e)})}function ce(e,t){const{accessToken:c,keyFactory:r}=u();return o({...t,queryKey:r.getAccessRequirementResearchProjectQueryKey(e),queryFn:()=>y.getResearchProject(e,c)})}function te(e){const{accessToken:t}=u(),c=m(),{keyFactory:r}=u();return q({...e,mutationFn:s=>y.updateResearchProject(s,t),onSuccess:async(s,n,a)=>{if(await c.invalidateQueries({queryKey:r.getAccessRequirementResearchProjectQueryKey(s.accessRequirementId)}),e!=null&&e.onSuccess)return e.onSuccess(s,n,a)}})}function re(e,t){const{accessToken:c,keyFactory:r}=u();return o({...t,queryKey:r.getDataAccessRequestForUpdateQueryKey(e),queryFn:()=>y.getDataAccessRequestForUpdate(e,c)})}function ue(e){const{accessToken:t}=u(),c=m(),{keyFactory:r}=u();return q({...e,mutationFn:s=>y.updateDataAccessRequest(s,t),onSuccess:async(s,n,a)=>{if(await c.invalidateQueries({queryKey:r.getDataAccessRequestForUpdateQueryKey(s.accessRequirementId)}),e!=null&&e.onSuccess)return e.onSuccess(s,n,a)}})}function ne(e){const{accessToken:t}=u(),c=m(),{keyFactory:r}=u();return q({...e,mutationFn:s=>y.createAccessApproval(t,s),onSuccess:async(s,n,a)=>{if(await Promise.all([c.invalidateQueries({queryKey:r.getAccessRequirementStatusQueryKey(String(n.requirementId))}),...A(r).map(i=>c.invalidateQueries(i))]),e!=null&&e.onSuccess)return e.onSuccess(s,n,a)}})}function ae(e){const{accessToken:t}=u(),c=m(),{keyFactory:r}=u();return q({...e,mutationFn:s=>y.cancelDataAccessRequest(s.submissionId,t),onSuccess:async(s,n,a)=>{if(await c.invalidateQueries({queryKey:r.getAccessRequirementStatusQueryKey(String(n.accessRequirementId))}),e!=null&&e.onSuccess)return e.onSuccess(s,n,a)}})}export{Z as a,O as b,H as c,M as d,J as e,z as f,V as g,X as h,Y as i,N as j,ee as k,ue as l,I as m,ce as n,te as o,re as p,p as q,ae as r,ne as s,b as t,$ as u,se as v,_ as w};
