import{j as l}from"./jsx-runtime-9dc53467.js";import{R as p}from"./index-76fb7be0.js";import{g as f,U as d}from"./UserBadge-8715cf96.js";import{M as R}from"./SynapseConstants-567f6998.js";import{C as h}from"./index-7db48dfb.js";import{w as y}from"./without-ecf2a23f.js";class c extends p.Component{constructor(e){super(e),this.state={userProfileMap:{}},this.update=this.update.bind(this)}componentDidMount(){const{list:e}=this.props;this.update(e)}componentDidUpdate(e){const t=e.list,i=y(this.props.list.filter(a=>a),...t);i.length>0&&this.update(i)}update(e){f(e.filter(t=>!!t)).then(t=>{const i={};t.list.forEach(a=>{const{ownerId:n}=a;i[n]=a}),this.setState({userProfileMap:{...this.state.userProfileMap,...i}})}).catch(t=>{console.error("Error on batch call =",t)})}manuallyExtractData(e){const t=e.queryResult.queryResults.headers.findIndex(s=>s.name==="firstName"),i=e.queryResult.queryResults.headers.findIndex(s=>s.name==="lastName"),a=e.queryResult.queryResults.headers.findIndex(s=>s.name==="institution"),n=e.queryResult.queryResults.headers.findIndex(s=>s.columnType===h.USERID);return e.queryResult.queryResults.rows.filter(s=>!s.values[n]).map(s=>{const r=s.values;return{firstName:r[t]??"",lastName:r[i]??"",company:r[a]??void 0,ownerId:null,userName:r[t]?r[t][0]??"":""}})}render(){const{size:e=R,data:t,list:i}=this.props,{userProfileMap:a={}}=this.state,n=t&&this.manuallyExtractData(t);let u=0;return l("div",{className:"SRC-card-grid-row",children:i.map(s=>{const r=s!=null?a[s]:null;if(r)return l("div",{className:"SRC-grid-item SRC-narrow-grid-item",children:l(d,{size:e,preSignedURL:r.clientPreSignedURL,userProfile:r})},JSON.stringify(r));const o=n&&n[u];return o?(u+=1,l("div",{className:"SRC-grid-item SRC-narrow-grid-item",children:l(d,{disableLink:!0,hideEmail:!0,size:e,userProfile:o})},JSON.stringify(o))):!1})})}}try{c.displayName="UserCardList",c.__docgenInfo={description:"",displayName:"UserCardList",props:{list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:"(string | null)[]"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"QueryResultBundle"}}}}}catch{}export{c as U};
//# sourceMappingURL=UserCardList-dc19cda6.js.map
