import{j as n,a as o,F as r}from"./jsx-runtime-9dc53467.js";import{u as l}from"./useGetEntityHeaders-756f8a74.js";import{b as c}from"./SynapseConstants-eb00dc31.js";import{A as p}from"./ActionRequiredCard-43709c09.js";import{T as u}from"./Typography-1d068b0b.js";import{B as m}from"./Button-33299b2c.js";const w=e=>window.open(`https://www.synapse.org/#!Synapse:${e}`,"_blank"),f="Download Permission Required",i=({entityId:e,count:a,onViewSharingSettingsClicked:s=w})=>{const{data:t,isLoading:d}=l(e,void 0,{throwOnError:!0});return n(p,{isLoading:d,title:f,description:o(r,{children:["You must be granted the download permission on"," ",n("strong",{children:t==null?void 0:t.name})," in order to download this set of files."]}),iconType:c,count:a,actionNode:o(r,{children:[n(u,{variant:"smallText1",sx:{mb:1,color:"grey.700"},children:"Contact an administrator to request download permission"}),n(m,{variant:"outlined",onClick:()=>{s(e)},children:"View Sharing Settings"})]})})};try{i.displayName="RequestDownloadCard",i.__docgenInfo={description:"",displayName:"RequestDownloadCard",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!1,type:{name:"number"}},onViewSharingSettingsClicked:{defaultValue:{value:`benefactorEntityId =>
    window.open(
      \`https://www.synapse.org/#!Synapse:\${benefactorEntityId}\`,
      '_blank',
    )`},description:'Invoked when a user clicks "View Sharing Settings" for a set of files that require the Download permission',name:"onViewSharingSettingsClicked",required:!1,type:{name:"((benefactorId: string) => void)"}}}}}catch{}export{i as R};
