import{k as a,p as y,q as i,o,w as d}from"./SynapseClient-Ihq4xrvb.js";import{u as m}from"./useMutation-C9F3oaw-.js";import"./OrientationBanner-BV5RFxzC.js";import"./getEndpoint-CjoHA800.js";import"./index-Dl6G-zuu.js";import"./jsx-runtime-Du8NFWEI.js";function I(e,t,n){const{accessToken:u,keyFactory:r}=a();return o({...n,queryKey:r.getIsUserMemberOfTeamQueryKey(e,t),queryFn:()=>y.getIsUserMemberOfTeam(e,t,u)})}function S(e,t,n){const{accessToken:u,keyFactory:r}=a();return o({...n,queryKey:r.getMembershipStatusQueryKey(e,t),queryFn:()=>y.getMembershipStatus(e,t,u)})}function F(e,t){const{accessToken:n,keyFactory:u}=a();return o({...t,queryKey:u.getAllOpenMembershipInvitationsForUserQueryKey(e),queryFn:()=>y.getAllOpenMembershipInvitationsForUser(e,n)})}function k(e){const{accessToken:t}=a();return m({...e,mutationFn:n=>y.createMembershipInvitation(n,t)})}function l(e){const t=i(),{accessToken:n,keyFactory:u}=a();return m({...e,mutationFn:({teamId:r,userId:s})=>y.addTeamMemberAsAuthenticatedUserOrAdmin(r,s,n),onSuccess:async(r,s,c)=>{e!=null&&e.onSuccess&&e.onSuccess(r,s,c),await Promise.all([t.invalidateQueries({queryKey:u.getMembershipStatusQueryKey(s.teamId,s.userId)}),t.invalidateQueries({queryKey:u.getIsUserMemberOfTeamQueryKey(s.teamId,s.userId)}),t.invalidateQueries({queryKey:u.getTeamMembersQueryKey(s.teamId)}),t.invalidateQueries({queryKey:u.getAllSubmissionTeamsQueryKeys()})])}})}function g(e){const t=i(),{accessToken:n,keyFactory:u}=a();return m({...e,mutationFn:r=>y.createMembershipRequest(r,n),onSuccess:async(r,s,c)=>{if(await t.invalidateQueries({queryKey:u.getMembershipStatusQueryKey(s.teamId,s.userId)}),e.onSuccess)return e.onSuccess(r,s,c)}})}function h(e){const t=i(),{accessToken:n,keyFactory:u}=a();return m({...e,mutationFn:r=>d(r.teamId,r.userId,n),onSuccess:async(r,s,c)=>{await Promise.all([t.invalidateQueries({queryKey:u.getIsUserMemberOfTeamQueryKey(s.teamId,s.userId)}),t.invalidateQueries({queryKey:u.getMembershipStatusQueryKey(s.teamId,s.userId)})]),e!=null&&e.onSuccess&&await e.onSuccess(r,s,c)}})}export{k as a,S as b,l as c,h as d,F as e,g as f,I as u};