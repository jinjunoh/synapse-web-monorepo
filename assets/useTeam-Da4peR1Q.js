import{k as u,o as m,p as n,q as o}from"./SynapseClient-Ihq4xrvb.js";import{u as i}from"./useMutation-C9F3oaw-.js";import"./OrientationBanner-BV5RFxzC.js";import"./getEndpoint-CjoHA800.js";import"./index-Dl6G-zuu.js";import"./jsx-runtime-Du8NFWEI.js";function Q(e,a){const{accessToken:r,keyFactory:s}=u();return m({...a,queryKey:s.getTeamQueryKey(e),queryFn:()=>n.getTeam(e,r)})}function S(e){const{accessToken:a,keyFactory:r}=u(),s=o();return i({...e,mutationFn:t=>n.createTeam(t,a),onSuccess:async(t,c,y)=>{e!=null&&e.onSuccess&&e.onSuccess(t,c,y),await s.invalidateQueries({queryKey:r.getAllUserTeamsQueryKey()})}})}export{S as a,Q as u};