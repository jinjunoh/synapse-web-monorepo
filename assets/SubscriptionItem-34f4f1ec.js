import{j as r,F as _}from"./jsx-runtime-9dc53467.js";import{p as s}from"./index-7db48dfb.js";import{T as m}from"./Topic-5d8bf7f6.js";import{b as f}from"./useForum-cf949d56.js";import"./SynapseClient-ceb0e6d4.js";import{g as b,B as l}from"./getEndpoint-ac94413e.js";import"./OrientationBanner-1c6f5b11.js";import{u as y}from"./useEntity-00649ded.js";import"./index-76fb7be0.js";import{a as T}from"./useSubscription-b20c5a8a.js";import{u as S}from"./useThread-4746ecfe.js";function a(o){const{subscription:i}=o,{data:e}=f(i.objectId),{data:t}=y(e==null?void 0:e.projectId,void 0,{enabled:!!e}),{isSubscribed:c,isLoading:p,toggleSubscribed:n}=T(i.objectId,s.FORUM);let u;return e&&(u=`${b(l.PORTAL_ENDPOINT)}#!Synapse:${e.projectId}/discussion`),r(m,{isLoading:p,isSubscribed:c,icon:"dashboard",name:t==null?void 0:t.name,nameHref:u,onToggleSubscribe:n})}try{a.displayName="ForumTopic",a.__docgenInfo={description:"",displayName:"ForumTopic",props:{subscription:{defaultValue:null,description:"",name:"subscription",required:!0,type:{name:"Subscription"}}}}}catch{}function g(o){const{subscription:i}=o,{threadData:e}=S(i.objectId),{isSubscribed:t,isLoading:c,toggleSubscribed:p}=T(i.objectId,s.THREAD);let n;return e&&(n=`${b(l.PORTAL_ENDPOINT)}#!Synapse:${e.projectId}/discussion/threadId=${i.objectId}`),r(m,{isLoading:c,isSubscribed:t,icon:"discussion",name:e==null?void 0:e.title,nameHref:n,onToggleSubscribe:p})}try{ThreadTopic.displayName="ThreadTopic",ThreadTopic.__docgenInfo={description:"",displayName:"ThreadTopic",props:{subscription:{defaultValue:null,description:"",name:"subscription",required:!0,type:{name:"Subscription"}}}}}catch{}function d(o){const{subscription:i}=o;switch(i.objectType){case s.FORUM:return r(a,{subscription:i});case s.THREAD:return r(g,{subscription:i});default:return console.warn(`Subscription type ${o.subscription.objectType} not supported in UI`),r(_,{})}}try{d.displayName="SubscriptionItem",d.__docgenInfo={description:`Simple discriminator component that maps a {@link Subscription} rendered on the {@link SubscriptionPage } to
a {@link Topic } component`,displayName:"SubscriptionItem",props:{subscription:{defaultValue:null,description:"",name:"subscription",required:!0,type:{name:"Subscription"}}}}}catch{}export{d as S};
//# sourceMappingURL=SubscriptionItem-34f4f1ec.js.map
