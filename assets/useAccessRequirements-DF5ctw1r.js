import{u as k}from"./useQueries-C0ML6EDC.js";import{ad as g,h as u,l as y,m as n,n as o}from"./ApplicationSessionManager-CoKgEkVZ.js";import{u as m}from"./useMutation-B1vezw_x.js";import{u as F}from"./useInfiniteQuery-Dh-hjlcD.js";import"./OrientationBanner-DFzKDcoJ.js";import"./getEndpoint-CjoHA800.js";import"./index-CBqU2yxZ.js";import"./jsx-runtime-CKrituN3.js";import{u as f}from"./utils-SU9mu0D7.js";import{u as l}from"./useMediaQuery-DuJLfkgp.js";import{s as K}from"./sortBy-Dub1191j.js";import{g as A}from"./QueryFilterUtils-CNR-kueb.js";const S=async(e,t)=>{const s=t.map(r=>g(e,r)),c=await Promise.all(s);return K(t,r=>-1*Number(c.find(a=>r===a.accessRequirementId).isApproved))};function B(){const e=f();return l(e.breakpoints.up("md"))}function U(e,t){const{accessToken:s,keyFactory:c}=u();return y({...t,queryKey:c.getAccessRequirementQueryKey(String(e)),queryFn:()=>n.getAccessRequirementById(s,e)})}function x(e,t){const{accessToken:s,keyFactory:c}=u();return y({...t,queryKey:c.getEntityAccessRequirementsQueryKey(e),queryFn:()=>n.getAllAccessRequirements(s,e)})}function W(e,t){const{accessToken:s,keyFactory:c}=u();return y({...t,queryKey:c.getTeamAccessRequirementsQueryKey(e),queryFn:()=>n.getTeamAccessRequirements(s,e)})}function I(e,t){const{accessToken:s,keyFactory:c}=u();return y({...t,queryKey:c.getAccessRequirementWikiPageKey(e),queryFn:()=>n.getWikiPageKeyForAccessRequirement(s,e)})}function L(e,t){const{accessToken:s,keyFactory:c}=u();return y({...t,queryKey:c.getAccessRequirementAclQueryKey(e),queryFn:()=>n.getAccessRequirementAcl(s,e)})}function E(e,t){const{accessToken:s,keyFactory:c}=u();return F({...t,queryKey:c.searchAccessRequirementsQueryKey(e),queryFn:async r=>await n.searchAccessRequirements(s,{...e,nextPageToken:r.pageParam}),initialPageParam:void 0,getNextPageParam:r=>r.nextPageToken})}function M(e,t){const{accessToken:s,keyFactory:c}=u();return y({...t,queryKey:c.getAccessRequirementRestrictionInformationQueryKey(e),queryFn:()=>n.getRestrictionInformation(e,s)})}function b(e){const{accessToken:t}=u(),s=o(),{keyFactory:c}=u();return m({...e,mutationFn:r=>n.createLockAccessRequirement(r,t),mutationKey:["createLockAccessRequirement"],onSuccess:async(r,a,i)=>{if(await Promise.all([s.invalidateQueries({queryKey:c.getAccessRequirementQueryKey()}),s.invalidateQueries({queryKey:c.getAllEntityDataQueryKey()}),...A(c).map(q=>s.invalidateQueries(q))]),e!=null&&e.onSuccess)return e.onSuccess(r,a,i)}})}function R(e,t,s){return{queryKey:e.getAccessRequirementStatusQueryKey(s),queryFn:()=>n.getAccessRequirementStatus(t,s)}}function N(e,t){const{accessToken:s,keyFactory:c}=u();return y({...t,...R(c,s,e)})}function z(e){const{accessToken:t,keyFactory:s}=u();return k({queries:e.map(c=>R(s,t,c))})}function O(e,t){const{accessToken:s,keyFactory:c}=u();return y({...t,queryKey:c.getSortedAccessRequirementsAndStatusQueryKey(e),queryFn:()=>S(s,e)})}function H(e,t){const{accessToken:s,keyFactory:c}=u();return y({...t,queryKey:c.getAccessRequirementResearchProjectQueryKey(e),queryFn:()=>n.getResearchProject(e,s)})}function J(e){const{accessToken:t}=u(),s=o(),{keyFactory:c}=u();return m({...e,mutationFn:r=>n.updateResearchProject(r,t),onSuccess:async(r,a,i)=>{if(await s.invalidateQueries({queryKey:c.getAccessRequirementResearchProjectQueryKey(r.accessRequirementId)}),e!=null&&e.onSuccess)return e.onSuccess(r,a,i)}})}function V(e,t){const{accessToken:s,keyFactory:c}=u();return y({...t,queryKey:c.getDataAccessRequestForUpdateQueryKey(e),queryFn:()=>n.getDataAccessRequestForUpdate(e,s)})}function X(e){const{accessToken:t}=u(),s=o(),{keyFactory:c}=u();return m({...e,mutationFn:r=>n.updateDataAccessRequest(r,t),onSuccess:async(r,a,i)=>{if(await s.invalidateQueries({queryKey:c.getDataAccessRequestForUpdateQueryKey(r.accessRequirementId)}),e!=null&&e.onSuccess)return e.onSuccess(r,a,i)}})}function Y(e){const{accessToken:t}=u(),s=o(),{keyFactory:c}=u();return m({...e,mutationFn:r=>n.createAccessApproval(t,r),onSuccess:async(r,a,i)=>{if(await Promise.all([s.invalidateQueries({queryKey:c.getAccessRequirementStatusQueryKey(String(a.requirementId))}),...A(c).map(q=>s.invalidateQueries(q))]),e!=null&&e.onSuccess)return e.onSuccess(r,a,i)}})}function Z(e){const{accessToken:t}=u(),s=o(),{keyFactory:c}=u();return m({...e,mutationFn:r=>n.cancelDataAccessRequest(r.submissionId,t),onSuccess:async(r,a,i)=>{if(await s.invalidateQueries({queryKey:c.getAccessRequirementStatusQueryKey(String(a.accessRequirementId))}),e!=null&&e.onSuccess)return e.onSuccess(r,a,i)}})}export{E as a,U as b,L as c,I as d,W as e,z as f,X as g,B as h,H as i,J as j,V as k,N as l,Z as m,Y as n,x as o,O as p,M as q,b as u};
