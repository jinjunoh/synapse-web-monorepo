import{a as f,F as y,j as r}from"./jsx-runtime-9dc53467.js";import{r as h}from"./index-76fb7be0.js";import"./OrientationBanner-a1ca5cdb.js";import{P as U}from"./getEndpoint-ac94413e.js";import{h as R,n as _,D as j,br as x,V as b}from"./ApplicationSessionManager-99c1baec.js";import{I as L}from"./IconSvg-83f0daf8.js";import{u as I}from"./index-e4fc7078.js";import{u as k}from"./useInfiniteQuery-80920e59.js";import{S as w}from"./SkeletonTable-fdb2ca5b.js";import{a as O}from"./useGetUserTeams-9178b84a.js";import{T as C}from"./Typography-1d068b0b.js";import{S}from"./Skeleton-131bd473.js";function F(s,l){const{accessToken:c,keyFactory:a}=R();return k({...l,initialPageParam:void 0,queryKey:a.getUserChallengesQueryKey(s),queryFn:async o=>{const e=await _.getUserChallenges(c,s,o.pageParam,10);if(e.results.length>0){const t=Array.from(e.results,i=>i.projectId),u=await _.getEntityHeadersByIds(t);return{results:Array.from(e.results,(i,d)=>({challenge:i,projectHeader:u.results[d]})),totalNumberOfResults:e.totalNumberOfResults}}return{results:[],totalNumberOfResults:e.totalNumberOfResults}},getNextPageParam:(o,e)=>{if(o.results.length>0)return e.length*10}})}function V(s,l,c){const{accessToken:a,keyFactory:o}=R();return k({...c,queryKey:o.getUserProjectsQueryKey(s,l),queryFn:async e=>_.getUserProjects(s,{...l,nextPageToken:e.pageParam},a),initialPageParam:void 0,getNextPageParam:e=>e.nextPageToken})}function N({userId:s}){const l=j(),{ref:c,inView:a}=I(),{data:o,status:e,isFetching:t,isLoading:u,hasNextPage:g,fetchNextPage:i,isError:d,error:m}=F(s);h.useEffect(()=>{d&&m&&l(m)},[d,m,l]),h.useEffect(()=>{e==="success"&&!t&&g&&i&&a&&i()},[e,t,g,i,a]);const p=(o==null?void 0:o.pages.flatMap(n=>n.results))??[];return f(y,{children:[p.length>0&&f(y,{children:[p.map(n=>n&&n.challenge&&n.projectHeader?r("p",{children:r("a",{target:"_self",rel:"noopener noreferrer",href:`${U.PORTAL}#!Synapse:${n.challenge.projectId}/challenge`,children:n.projectHeader.name})},`user-challenge-list-item-${n.challenge.projectId}`):!1),r("div",{ref:c})]}),!t&&p.length==0&&r("div",{children:"Empty"}),u&&r(w,{numRows:5,numCols:1})]})}try{N.displayName="UserChallenges",N.__docgenInfo={description:"",displayName:"UserChallenges",props:{userId:{defaultValue:null,description:"",name:"userId",required:!0,type:{name:"string"}}}}}catch{}function T({userId:s}){const l=j(),{ref:c,inView:a}=I(),o={},{data:e,status:t,isFetching:u,isLoading:g,hasNextPage:i,fetchNextPage:d,isError:m,error:p}=V(s,o);h.useEffect(()=>{m&&p&&l(p)},[m,p,l]),h.useEffect(()=>{t==="success"&&!u&&i&&d&&a&&d()},[t,u,i,d,a]);const n=(e==null?void 0:e.pages.flatMap(P=>P.results))??[];return f(y,{children:[n.length>0&&f(y,{children:[n.map(P=>P?r("p",{children:r("a",{target:"_self",rel:"noopener noreferrer",href:`${U.PORTAL}#!Synapse:${P.id}`,children:P.name})},`user-project-list-item-${P.id}`):!1),r("div",{ref:c})]}),!u&&n.length==0&&r("div",{children:"Empty"}),g&&r(w,{numRows:5,numCols:1})]})}try{T.displayName="UserProjects",T.__docgenInfo={description:"",displayName:"UserProjects",props:{userId:{defaultValue:null,description:"",name:"userId",required:!0,type:{name:"string"}}}}}catch{}function E({userId:s}){const l=j(),{ref:c,inView:a}=I(),{data:o,status:e,isFetching:t,isLoading:u,hasNextPage:g,fetchNextPage:i,isError:d,error:m}=O(s);h.useEffect(()=>{d&&m&&l(m)},[d,m,l]),h.useEffect(()=>{e==="success"&&!t&&g&&i&&a&&i()},[e,t,g,i,a]);const p=(o==null?void 0:o.pages.flatMap(n=>n.results))??[];return f(y,{children:[p.length>0&&f(y,{children:[p.map(n=>n?r("p",{children:r("a",{target:"_self",rel:"noopener noreferrer",href:`${U.PORTAL}#!Team:${n.id}`,children:n.name})},`user-team-list-item-${n.id}`):!1),r("div",{ref:c})]}),!t&&p.length==0&&r("div",{children:"Empty"}),u&&r(w,{numRows:5,numCols:1})]})}try{E.displayName="UserTeams",E.__docgenInfo={description:"",displayName:"UserTeams",props:{userId:{defaultValue:null,description:"",name:"userId",required:!0,type:{name:"string"}}}}}catch{}function v({userId:s}){var e;const[l,c]=h.useState("Projects"),{data:a}=x(s),o=h.useMemo(()=>[{name:"Projects",iconName:"dashboard",render:r(T,{userId:s})},{name:"Teams",iconName:"peopleTwoTone",render:r(E,{userId:s})},{name:"Challenges",iconName:"challengesTwoTone",render:r(N,{userId:s})}],[s]);return f("div",{className:"UserProfileLinks",children:[f(C,{variant:"headline2",className:"title",children:[a&&f(y,{children:[a==null?void 0:a.userName,"'s Items"]}),!a&&r(S,{width:"75%"})]}),r("div",{className:"Tabs",children:o.map(t=>r("div",{className:"Tab",role:"tab",onClick:u=>{u.stopPropagation(),c(t.name)},"aria-selected":l===t.name,children:f(C,{variant:"buttonLink",children:[r(L,{icon:t.iconName})," ",t.name]})},t.name))}),r("div",{className:"TabContent",children:r(b,{children:(e=o.find(t=>l===t.name))==null?void 0:e.render})})]})}try{v.displayName="UserProfileLinks",v.__docgenInfo={description:"",displayName:"UserProfileLinks",props:{userId:{defaultValue:null,description:"",name:"userId",required:!0,type:{name:"string"}}}}}catch{}export{v as U};
