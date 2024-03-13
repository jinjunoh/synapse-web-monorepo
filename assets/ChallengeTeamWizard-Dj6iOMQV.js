import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as c,R as pe}from"./index-CBqU2yxZ.js";import{C as he}from"./CreateChallengeTeam-Ch0VNzWM.js";import{f as ge}from"./DateFormatter-D3umJwZh.js";import{d as fe}from"./dayjs.min-BIwLhz4I.js";import{a as Te}from"./RadioGroup-Df7m18Og.js";import{d as xe}from"./Search-M3RFELn_.js";import{B as te}from"./Box-C_c9Pnug.js";import{b as Ce}from"./InputLabel-BCVTUiU1.js";import"./OrientationBanner-DFzKDcoJ.js";import{g as Ie,B as ye}from"./getEndpoint-CjoHA800.js";import{h as Y,l as ne,m as re,v as w,aC as be,T as _e}from"./ApplicationSessionManager-CoKgEkVZ.js";import{e as se,f as Se,c as ie,b as je}from"./useTeamMembers-CIln3O3p.js";import{L as ve}from"./Link-BXqr-BaG.js";import{M as oe}from"./Tooltip-XprEAl00.js";import{c as Ee}from"./createSvgIcon-ClnqzT54.js";import{B as y}from"./Box-qzYP1vnN.js";import{D as Me}from"./DataGrid-EqKFA5Sj.js";import{d as Ne}from"./AddCircleTwoTone-BagLZLHn.js";import{c as Re,S as we}from"./Stack-wDqeWMTC.js";import{T as I}from"./Typography-BhttL55U.js";import{B as j}from"./Button-BOCcoe4v.js";import{a as Q}from"./useTeam-4tWzInpD.js";import{S as R}from"./LoadingScreen-c9I5269y.js";import{M as v}from"./Alert-jLvJNeQC.js";import{M as qe}from"./TextField-OoewxiX7.js";import{n as z}from"./noop-DX6rZLP_.js";import{u as Ae}from"./useGetEntityChallenge-aop62Zku.js";import{u as Le}from"./useGetUserTeams-DklRYLMT.js";import{b as Oe}from"./HelpPopover-D2HKF4UC.js";import{a as Fe}from"./UserBadge-BtPjNMcX.js";import{U as Be}from"./UserOrTeamBadge-DknZfS2v.js";const ke=Re(),Ve=ke,Ue=Ee([e.jsx("path",{d:"m20 8-8 5-8-5v10h16zm0-2H4l8 4.99z",opacity:".3"},"0"),e.jsx("path",{d:"M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2M20 6l-8 4.99L4 6zM4 8l8 5 8-5v10H4z"},"1")],"EmailTwoTone");function Ge(t,s){const{accessToken:i,keyFactory:r}=Y();return ne({...s,queryKey:r.getTeamListQueryKey(t.sort().join()),queryFn:()=>re.getTeamList(t,i)})}function He(t,s){const{accessToken:i,keyFactory:r}=Y();return ne({...s,queryKey:r.getChallengeTeamListQueryKey(t),queryFn:()=>re.getAllChallengeTeams(i,t)})}function V(t){const{value:s,rowCount:i,onChange:r}=t,o=i>5?"calc(100% - 8px)":"100%";return e.jsxs(te,{sx:{p:"4px 4px",display:"flex",flexGrow:1,width:o,border:"1px solid #F2F2F2","& .Mui-focused":{border:"none",boxShadow:"none"}},children:[e.jsx(te,{sx:{margin:"0px 0 -4px 8px"},"aria-label":"search",children:e.jsx(xe,{sx:{color:"#878E95"}})}),e.jsx(Ce,{value:s,onChange:r,sx:{"& .MuiInputBase-input":{p:"1px 8px"},ml:1,flex:1,backgroundColor:"white"},placeholder:"Search all teams",inputProps:{"aria-label":"search all teams"}})]})}try{V.displayName="ChallengeTeamSearch",V.__docgenInfo={description:"",displayName:"ChallengeTeamSearch",props:{rowCount:{defaultValue:null,description:"",name:"rowCount",required:!0,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}}}}}catch{}function U(t){const{challengeId:s,onSelectTeam:i,selectedTeamId:r}=t,{data:o,isLoading:u}=He(s),{data:d}=w(),{data:a}=se(d==null?void 0:d.ownerId,{enabled:!!(d!=null&&d.ownerId)}),[l,f]=c.useState(""),b=(o==null?void 0:o.map(n=>n.teamId))??[],{data:h,isLoading:E}=Ge(b,{enabled:!!b.length}),_=c.useMemo(()=>{const n=l.toLowerCase(),N=(h==null?void 0:h.list.filter(g=>g.canPublicJoin||g.canRequestMembership!==!1||(a==null?void 0:a.some(x=>x.teamId===g.id))))??[];let p=N;return n.length&&(p=N.filter(g=>{var x;return g.name.toLowerCase().includes(n)||((x=g.description)==null?void 0:x.toLowerCase().includes(n))})),p.map(g=>({...g,hasInvitation:!!(a!=null&&a.some(x=>x.teamId===g.id))}))},[a,l,h==null?void 0:h.list]),T=u||E,M=c.useMemo(()=>[{field:"radiobutton",headerName:"",width:25,sortable:!1,filterable:!1,hideable:!1,disableColumnMenu:!0,renderCell:({row:n})=>e.jsx(Te,{value:n.id,checked:String(n.id)===r,onChange:N=>{i(N)},label:"","aria-label":`Select ${n.name}`})},{field:"name",headerName:"Team Name",flex:1,filterable:!1,hideable:!1,disableColumnMenu:!0,renderCell:({row:n})=>e.jsx(ve,{href:`${Ie(ye.PORTAL_ENDPOINT)}/#!Team:${n.id}`,target:"_blank",underline:"hover",children:n.name})},{field:"hasInvitation",headerName:"",width:15,filterable:!1,hideable:!1,disableColumnMenu:!0,align:"center",renderCell:({value:n})=>n?e.jsx(oe,{title:"You have been invited to join this team",children:e.jsx(Ue,{fontSize:"small",sx:{color:"grey.700"}})}):null},{field:"created",headerName:"Created On",width:100,filterable:!1,hideable:!1,disableColumnMenu:!0,renderCell:({value:n})=>ge(fe(n),"MM/DD/YY")},{field:"description",headerName:"Description",flex:1,filterable:!1,hideable:!1,disableColumnMenu:!0}],[i,r]);return e.jsxs(y,{sx:{height:220},children:[!T&&e.jsx(V,{value:l,onChange:n=>f(n.target.value),rowCount:_.length}),e.jsx(Me,{initialState:{sorting:{sortModel:[{field:"hasInvitation",sort:"desc"}]}},loading:T,rows:_,columns:M,rowCount:5,hideFooter:!0,density:"compact",rowBuffer:5,sx:{border:"none",height:"100%","& .MuiDataGrid-columnHeader":{backgroundColor:"#F1F3F5"},"& .Mui-odd":{backgroundColor:"#FBFBFC"},".MuiDataGrid-columnHeaderTitleContainer":{justifyContent:"space-between"},".radio":{display:"flex",alignItems:"center",height:"100%"}},getRowClassName:n=>n.indexRelativeToCurrentPage%2===0?"Mui-even":"Mui-odd"})]})}try{U.displayName="ChallengeTeamTable",U.__docgenInfo={description:`Table component that displays teams that
 1. are registered for the challenge specified by the challengeId prop
 2. the current user is able to join, create a request to join, or accept an invitation to join`,displayName:"ChallengeTeamTable",props:{challengeId:{defaultValue:null,description:"",name:"challengeId",required:!0,type:{name:"string"}},selectedTeamId:{defaultValue:null,description:"",name:"selectedTeamId",required:!1,type:{name:"string"}},onSelectTeam:{defaultValue:null,description:"",name:"onSelectTeam",required:!0,type:{name:"(teamId?: string | undefined) => void"}}}}}catch{}const De='To participate in a challenge, you need to create a new Team or join an existing one.   By default, the participant who creates a team is the "Team Captain" and has the ability to invite and remove members.   All team members will need a Synapse account so that they can login and accept the team invitation.',G=({challengeId:t,onCreateTeam:s,selectedTeamId:i,onSelectTeam:r})=>e.jsxs(Ve,{spacing:2,children:[e.jsx(I,{variant:"body1",sx:{lineHeight:"20px"},children:De}),e.jsx(y,{sx:{height:270},children:e.jsx(U,{challengeId:t,selectedTeamId:i,onSelectTeam:r})}),e.jsx(y,{children:e.jsx(j,{color:"primary",variant:"contained",onClick:s,startIcon:e.jsx(Ne,{}),children:"Create New Team"})})]});try{G.displayName="SelectChallengeTeam",G.__docgenInfo={description:"",displayName:"SelectChallengeTeam",props:{challengeId:{defaultValue:null,description:"",name:"challengeId",required:!0,type:{name:"string"}},onCreateTeam:{defaultValue:null,description:"",name:"onCreateTeam",required:!0,type:{name:"() => void"}},selectedTeamId:{defaultValue:null,description:"",name:"selectedTeamId",required:!1,type:{name:"string"}},onSelectTeam:{defaultValue:null,description:"",name:"onSelectTeam",required:!0,type:{name:"(teamId?: string | undefined) => void"}}}}}catch{}const H=({createdNewTeam:t,teamId:s})=>{const{data:i,status:r,error:o}=Q(s,{enabled:!!s});return s?r==="pending"?e.jsx(y,{display:"flex",flexDirection:"column",gap:1,children:e.jsx(R,{})}):r==="error"?e.jsx(v,{severity:"error",children:o.message}):e.jsxs(e.Fragment,{children:[e.jsxs(I,{variant:"body1",sx:{lineHeight:"20px"},children:["You have successfully ",t?"created":"joined"," team"," ",e.jsx("b",{children:i.name})," and have been added to this challenge."]}),t&&e.jsx(y,{children:"Invited team members will be automatically registered for the challenge as soon as they accept the team member invitation."})]}):null};try{H.displayName="RegistrationSuccessful",H.__docgenInfo={description:"",displayName:"RegistrationSuccessful",props:{createdNewTeam:{defaultValue:null,description:"",name:"createdNewTeam",required:!0,type:{name:"boolean"}},teamId:{defaultValue:null,description:"",name:"teamId",required:!0,type:{name:"string | undefined"}}}}}catch{}const D=pe.forwardRef(function(s,i){const{teamId:r,onRequestSubmitted:o=z}=s,[u,d]=c.useState(""),{data:a}=w(),{data:l,status:f,error:b}=Q(r,{enabled:!!r}),{mutate:h}=Se({onSuccess:()=>{o()}}),E=_=>{const T=_.target.value;d(T)};return c.useImperativeHandle(i,()=>({submit(){a&&h({teamId:r,userId:a.ownerId,message:u,expiresOn:void 0})}}),[u,h,r,a]),f==="pending"?e.jsx(y,{display:"flex",flexDirection:"column",gap:1,children:e.jsx(R,{})}):f==="error"?e.jsx(v,{severity:"error",children:b.message}):e.jsxs(e.Fragment,{children:[e.jsxs(I,{variant:"body1",sx:{lineHeight:"20px"},children:["The following message will be sent to the Team Manager(s) of the"," ",e.jsx("strong",{children:l.name})," team."]}),e.jsx(y,{children:e.jsx(qe,{label:"Your Message to Team Managers(s)",id:"membershipRequestMessage",value:u,fullWidth:!0,multiline:!0,rows:4,autoFocus:!0,onChange:E})})]})});try{D.displayName="MembershipRequestForm",D.__docgenInfo={description:"Component that provides a form that a user can use to create a MembershipRequest for a Team.\n\nTo submit the form, pass a ref and call the `submit` handle on the ref.",displayName:"MembershipRequestForm",props:{teamId:{defaultValue:null,description:"",name:"teamId",required:!0,type:{name:"string"}},onRequestSubmitted:{defaultValue:null,description:"",name:"onRequestSubmitted",required:!0,type:{name:"() => void"}}}}}catch{}function J(t){const{teamId:s,onSuccess:i=z,...r}=t,{data:o}=w(),{mutate:u,isPending:d}=ie({onSuccess:()=>{i()}}),a=!o||d,l=c.useCallback(()=>{o!=null&&o.ownerId&&u({teamId:s,userId:o.ownerId})},[o==null?void 0:o.ownerId,u,s]);return e.jsx(j,{variant:"contained",disabled:a,startIcon:d?e.jsx(R,{}):void 0,...r,onClick:l,children:"Accept Invitation"})}function P(t){const{teamId:s}=t,{data:i}=w(),{data:r,status:o,error:u}=se(i==null?void 0:i.ownerId,{enabled:!!(i!=null&&i.ownerId)}),{data:d}=Q(s,{enabled:!!s});if(o==="pending")return e.jsx(R,{});if(o==="error")return e.jsx(v,{severity:"error",children:u.message});const a=r.find(l=>l.teamId===s);return a==null?e.jsxs(v,{severity:"error",children:["No matching invitation for team ",d?d.name:`ID: ${s}`]}):e.jsxs(we,{gap:2,children:[e.jsxs(I,{variant:"body1",children:[e.jsx(Fe,{userId:a.createdBy})," has invited you to join"," ",e.jsx("span",{children:e.jsx(Be,{principalId:s})}),a.message?" with the following message:":"."]}),a.message&&e.jsx(I,{variant:"body1",component:"blockquote",children:a.message}),e.jsx(I,{variant:"body1",children:"Do you want to accept this invitation?"})]})}try{J.displayName="AcceptMembershipInvitationButton",J.__docgenInfo={description:"",displayName:"AcceptMembershipInvitationButton",props:{teamId:{defaultValue:null,description:"",name:"teamId",required:!0,type:{name:"string"}},onSuccess:{defaultValue:null,description:"",name:"onSuccess",required:!1,type:{name:"(() => void)"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}try{P.displayName="OpenMembershipInvitation",P.__docgenInfo={description:`For the current, authenticated user, displays the details of an open MembershipInvitation for the provided team ID.

This component requires
  1. The current user is logged-in
  2. The current user has an open invitation to join the teamId passed in via props

To prompt the user to accept the invitation, use the {@link AcceptMembershipInvitationButton} component.`,displayName:"OpenMembershipInvitation",props:{teamId:{defaultValue:null,description:"",name:"teamId",required:!0,type:{name:"string"}},onSuccess:{defaultValue:null,description:"",name:"onSuccess",required:!1,type:{name:"(() => void)"}}}}}catch{}function Je(t){switch(t){case"SELECT_YOUR_CHALLENGE_TEAM":return"Select Your Challenge Team";case"ACCEPT_INVITATION":return"Invitation to Join Team";case"JOIN_REQUEST_FORM":return"Request Team Membership";case"JOIN_REQUEST_SENT":return"Request Sent";case"CREATE_NEW_TEAM":return"Create Team";case"REGISTRATION_SUCCESSFUL":return"Registration Successful!"}}function ae(t){const{projectId:s,isShowingModal:i=!1,onClose:r}=t,{accessToken:o}=Y(),u=!!o,[d,a]=c.useState("SELECT_YOUR_CHALLENGE_TEAM"),[l,f]=c.useState(),[b,h]=c.useState(!1),[E,_]=c.useState(!1),T=c.useRef(null),M=c.useRef(null),{data:n,isLoading:N}=w({enabled:u}),{data:p,isLoading:g}=Ae(s),{mutateAsync:x,isPending:A,error:L}=ie(),{data:W,error:O}=Le(p==null?void 0:p.id,1,0,{enabled:!!(u&&p)}),F=W&&W.results.length>0,{data:C,isLoading:$,error:B}=je(l,String(n==null?void 0:n.ownerId),{enabled:u&&!!l&&!!n}),K=c.useCallback(async()=>{!l||!n||(await x({teamId:l,userId:n.ownerId}),a("REGISTRATION_SUCCESSFUL"))},[x,a,l,n]),le=c.useCallback(()=>{_(!1),f(void 0),r()},[r]),de=N||g,S=c.useMemo(()=>{switch(d){case"SELECT_YOUR_CHALLENGE_TEAM":case"JOIN_REQUEST_SENT":case"REGISTRATION_SUCCESSFUL":return e.jsx(e.Fragment,{});case"ACCEPT_INVITATION":case"JOIN_REQUEST_FORM":case"CREATE_NEW_TEAM":default:return e.jsx(j,{variant:"outlined",onClick:()=>{a("SELECT_YOUR_CHALLENGE_TEAM"),f(void 0)},children:"Back"})}},[d]),k=c.useMemo(()=>e.jsx(j,{variant:"contained",onClick:()=>{r()},children:"Close"}),[r]),{actions:ce=e.jsx(e.Fragment,{}),content:ue=e.jsx(e.Fragment,{})}=c.useMemo(()=>{if(!u)return{content:e.jsx(v,{severity:"error",children:e.jsx(be,{})})};if(F)return{content:e.jsx(v,{severity:"error",children:e.jsx(I,{children:"You are already a member of a registered submission team for this Challenge."})})};switch(d){case"SELECT_YOUR_CHALLENGE_TEAM":{let m="Join Team",Z=!1,q=z,ee="";return C&&C.hasOpenInvitation?(m="View Invitation to Join Team",q=()=>{a("ACCEPT_INVITATION")}):C&&C.hasOpenRequest?(m="Join Request Pending",Z=!0,ee="You have already submitted a request to join this team."):C&&C.membershipApprovalRequired?(m="Request to Join Team",q=()=>{a("JOIN_REQUEST_FORM")}):C&&C.canJoin&&(m="Join Team",q=()=>{K()}),{content:p&&!F&&e.jsx(G,{challengeId:p.id,onCreateTeam:()=>a("CREATE_NEW_TEAM"),selectedTeamId:l,onSelectTeam:me=>f(me)}),actions:e.jsxs(e.Fragment,{children:[S,e.jsx(oe,{title:ee,children:e.jsx("span",{children:e.jsx(j,{onClick:q,startIcon:A?e.jsx(R,{}):void 0,disabled:!l||$||A||Z,variant:"contained",children:m})})})]})}}case"ACCEPT_INVITATION":return{content:e.jsx(P,{teamId:l}),actions:e.jsxs(e.Fragment,{children:[S,e.jsx(J,{teamId:l,onSuccess:()=>{a("REGISTRATION_SUCCESSFUL")}})]})};case"JOIN_REQUEST_FORM":return{content:e.jsx(D,{ref:T,teamId:l,onRequestSubmitted:()=>{a("JOIN_REQUEST_SENT")}}),actions:e.jsxs(e.Fragment,{children:[S,e.jsx(j,{variant:"contained",onClick:()=>{var m;(m=T==null?void 0:T.current)==null||m.submit()},children:"Send Request"})]})};case"JOIN_REQUEST_SENT":return{content:e.jsx(I,{variant:"body1",sx:{lineHeight:"20px"},children:"Team Manager(s) have received your request. Check your Synapse email address for status of your request."}),actions:e.jsxs(e.Fragment,{children:[S,k]})};case"REGISTRATION_SUCCESSFUL":return{content:e.jsx(H,{createdNewTeam:E,teamId:l}),actions:e.jsxs(e.Fragment,{children:[S,k]})};case"CREATE_NEW_TEAM":return{content:e.jsx(he,{ref:M,challengeId:p==null?void 0:p.id,onCanSubmitChange:m=>h(m),onFinished:m=>{_(!0),f(m),a("REGISTRATION_SUCCESSFUL")}}),actions:e.jsxs(e.Fragment,{children:[S,e.jsx(j,{variant:"contained",disabled:!b,onClick:()=>{var m;(m=M==null?void 0:M.current)==null||m.submit()},children:"Create Team"})]})}}},[u,F,d,l,S,k,E,C,p,A,$,K,b]),X=(L==null?void 0:L.message)||(B==null?void 0:B.message)||(O==null?void 0:O.message);return e.jsx(Oe,{onCancel:le,open:i,actions:ce,title:Je(d),content:e.jsx(_e,{children:e.jsx(y,{display:"flex",flexDirection:"column",gap:1,children:de?e.jsx(R,{size:40}):e.jsxs(e.Fragment,{children:[ue,X&&e.jsx(v,{severity:"error",children:X})]})})})})}try{ae.displayName="ChallengeTeamWizard",ae.__docgenInfo={description:`The ChallengeTeamWizard is used to guide a user through the process of joining or creating a team for a challenge.

A required precondition is that the user is NOT on any registered submission team for the challenge.`,displayName:"ChallengeTeamWizard",props:{projectId:{defaultValue:null,description:"",name:"projectId",required:!0,type:{name:"string"}},isShowingModal:{defaultValue:null,description:"",name:"isShowingModal",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}export{ae as C};
