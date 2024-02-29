import{a as M,j as a}from"./jsx-runtime-9dc53467.js";import{r as o,R as F}from"./index-76fb7be0.js";import{T as E}from"./TextField-12f5946f.js";import{h as N,l as V,n as q,T as O}from"./ApplicationSessionManager-99c1baec.js";import{u as k}from"./useMutation-a59e22c8.js";import"./OrientationBanner-a1ca5cdb.js";import"./getEndpoint-ac94413e.js";import{u as W}from"./useTeam-150f59ba.js";import{a as j}from"./useTeamMembers-27f4e578.js";import{p as B}from"./papaparse.min-8c9ba15c.js";import{B as p}from"./Box-8faf86fd.js";import{T as P}from"./Typography-1d068b0b.js";import{M as Q}from"./Alert-c3fe2b05.js";import{n as S}from"./noop-cb277961.js";function U(n){const{accessToken:f,keyFactory:d}=N(),u=V();return k({...n,mutationFn:l=>q.registerChallengeTeam(l,f),onSuccess:async(l,r,t)=>{if(n!=null&&n.onSuccess)return n.onSuccess(l,r,t);await u.invalidateQueries({queryKey:d.getChallengeTeamListQueryKey(r.challengeId)})}})}function D(){const{mutateAsync:n,isPending:f,error:d}=W(),{mutateAsync:u,isPending:l,error:r}=j(),{mutateAsync:t,isPending:R,error:c}=U(),C=o.useCallback(async(h,g,i)=>{const y=[];for(const s of g){const m=await u({teamId:h,inviteeEmail:s.trim(),message:i});y.push(m)}return y},[u]),v=o.useCallback(async(h,g,i,y)=>{const s=await n(h),m=t({teamId:s.id,challengeId:g}),I=C(s.id,i,y);return Promise.all([Promise.resolve(s),m,I])},[n,C,t]),x=o.useMemo(()=>d||r||c?[d,r,c].filter(i=>i!=null):void 0,[c,d,r]);return{createAndRegisterTeam:v,isPending:f||l||R,errors:x}}const H=3,K="Please limit the initial number of invited members to three. You may add additional members after the team has been created.",_=F.forwardRef(function(f,d){const{challengeId:u,onCanSubmitChange:l=S,onFinished:r=S}=f,[t,R]=o.useState({name:"",description:""}),[c,C]=o.useState(""),[v,x]=o.useState(""),h=e=>{const T={...t,...e};R(T)},{inviteesParseResult:g,parsedInvitees:i}=o.useMemo(()=>{const e=B.parse(v,{delimiter:",",transform(A){return A.trim()}}),T=e.data[0]||[];return{inviteesParseResult:e,parsedInvitees:T}},[v]),s=i.length>H,m=!!(t&&t.name&&t.name.length>1&&!s);o.useEffect(()=>{l(m)},[m,l]);const{createAndRegisterTeam:I,isPending:b,errors:w}=D();return o.useImperativeHandle(d,()=>({submit(){if(!m){console.warn("Attempted to submit when form data was not valid. Nothing will happen.");return}I(t,u,i,c).then(([e])=>{r(e.id)}).catch(()=>{})}}),[m,i,I,t,u,c,r]),M(p,{children:[a(P,{variant:"body1",sx:{lineHeight:"20px"},children:"Create a new team for this Challenge!"}),a(E,{id:"name",label:"Team Name",value:t.name,fullWidth:!0,autoFocus:!0,required:!0,onChange:e=>h({name:e.target.value}),disabled:b}),a(p,{display:"flex",children:a(E,{id:"description",label:a(p,{display:"flex",gap:2,children:a(p,{children:"Team Description"})}),value:t.description,fullWidth:!0,multiline:!0,rows:4,onChange:e=>h({description:e.target.value}),disabled:b})}),a(p,{display:"flex",children:a(E,{id:"message",label:a(p,{display:"flex",gap:2,children:a(p,{children:"Recruitment Message"})}),value:c,fullWidth:!0,multiline:!0,rows:4,onChange:e=>C(e.target.value),disabled:b})}),a(E,{id:"invitees",label:"Emails of Additional Members to Invite (max 3)",placeholder:"Enter emails separated by comma",value:v,fullWidth:!0,onChange:e=>x(e.target.value),disabled:b}),(s||!O(g.errors)||w)&&M(Q,{severity:"error",children:[s&&a(P,{variant:"body1",children:K}),g.errors.map((e,T)=>a(P,{variant:"body1",children:e.message},T)),w&&w.map(e=>a(P,{variant:"body1",children:e.reason},e.reason))]})]})});try{_.displayName="CreateChallengeTeam",_.__docgenInfo={description:"",displayName:"CreateChallengeTeam",props:{challengeId:{defaultValue:null,description:"",name:"challengeId",required:!0,type:{name:"string"}},onCanSubmitChange:{defaultValue:null,description:"",name:"onCanSubmitChange",required:!1,type:{name:"((canSubmit: boolean) => void)"}},onFinished:{defaultValue:null,description:"",name:"onFinished",required:!1,type:{name:"((teamId: string) => void)"}}}}}catch{}export{_ as C};
