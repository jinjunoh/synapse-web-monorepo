import{k as n,p as a,q as i,o as y}from"./SynapseClient-Ihq4xrvb.js";import{u as c}from"./useMutation-C9F3oaw-.js";import"./OrientationBanner-BV5RFxzC.js";import"./getEndpoint-CjoHA800.js";import"./index-Dl6G-zuu.js";import{g as l}from"./QueryFilterUtils-Cw3lZhui.js";import"./jsx-runtime-Du8NFWEI.js";function w(e){const{accessToken:t}=n();return c({...e,mutationFn:()=>a.start2FAEnrollment(t)})}function f(e){const{accessToken:t,keyFactory:r}=n(),u=i();return c({...e,onSuccess:async(...s)=>{e!=null&&e.onSuccess&&e.onSuccess(...s),await Promise.all([u.invalidateQueries({queryKey:r.getTwoFactorAuthStatusQueryKey()}),u.invalidateQueries({queryKey:r.getAllAccessRequirementStatusesQueryKey()}),...l(r).map(o=>u.invalidateQueries(o))])},mutationFn:s=>a.complete2FAEnrollment(s,t)})}function K(e){const{accessToken:t,keyFactory:r}=n(),u=i();return c({...e,onSuccess:async(...s)=>(e!=null&&e.onSuccess&&e.onSuccess(...s),Promise.all([u.invalidateQueries({queryKey:r.getTwoFactorAuthStatusQueryKey()}),u.invalidateQueries({queryKey:r.getAllAccessRequirementStatusesQueryKey()}),...l(r).map(o=>u.invalidateQueries(o))])),mutationFn:()=>a.disableTwoFactorAuthForCurrentUser(t)})}function d(e){const{accessToken:t,keyFactory:r}=n();return y({queryKey:r.getTwoFactorAuthStatusQueryKey(),queryFn:()=>a.getCurrentUserTwoFactorEnrollmentStatus(t),...e})}function g(e){return c({...e,mutationFn:t=>a.resetTwoFactorAuth(t)})}export{K as a,g as b,w as c,f as d,d as u};