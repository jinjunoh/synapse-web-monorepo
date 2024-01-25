var g=Object.defineProperty;var C=(t,i,r)=>i in t?g(t,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[i]=r;var h=(t,i,r)=>(C(t,typeof i!="symbol"?i+"":i,r),r);import{j as a,a as c,F as w}from"./jsx-runtime-9dc53467.js";import{R as y}from"./index-76fb7be0.js";import{I as f}from"./IconSvg-3c89f0af.js";import{D as N}from"./RegularExpressions-bc0adf55.js";import{I as _}from"./Icon-946b3719.js";import"./ShowMore-0d3229ca.js";class u extends y.Component{constructor(r){super(r);h(this,"renderRowValue",(r,e,o)=>{const s=this.props.columnIconOptions;if(!e.match||!e.trim)return e;if(e=e.trim(),e.match(N))return a("a",{"data-search-handle":r,target:"_blank",rel:"noopener noreferrer",href:`https://dx.doi.org/${e}`,children:e});if(s&&s.columns&&Object.keys(s.columns).includes(o)){const n=s.columns[o][e];return n?(n.sx={...n.sx,paddingRight:"0.2rem"},c(w,{children:[a(f,{...n}),a("span",{style:{verticalAlign:"middle"},children:e})]})):a("span",{children:e})}return e});h(this,"renderRows",(r,e,o)=>r.map((s,n)=>{const d=n>=e?"SRC-hidden":"",l=s[0],p=this.renderRowValue(l,s[1],s[2]);return o?c("tr",{className:"SRC-cardRowDesktop "+d,children:[a("td",{className:"SRC-verticalAlignTop SRC-row-label",children:l}),a("td",{"data-search-handle":l,className:"SRC-row-data SRC-limitMaxWidth ",children:p})]},n):c(y.Fragment,{children:[a("tr",{className:"SRC-cardRowMobile "+d,children:a("td",{className:"SRC-verticalAlignTop SRC-row-label",children:l})}),a("tr",{className:"SRC-cardRowMobile "+d,children:a("td",{"data-search-handle":l,className:"SRC-row-data SRC-limitMaxWidth",children:p})})]},n)}));this.state={isShowMoreOn:!1,isDesktop:!1},this.toggleShowMore=this.toggleShowMore.bind(this),this.updatePredicate=this.updatePredicate.bind(this)}toggleShowMore(){this.setState({isShowMoreOn:!this.state.isShowMoreOn})}componentDidMount(){this.updatePredicate(),window.addEventListener("resize",this.updatePredicate)}componentWillUnmount(){window.removeEventListener("resize",this.updatePredicate)}updatePredicate(){this.setState({isDesktop:window.innerWidth>600})}render(){const{values:r,secondaryLabelLimit:e=3}=this.props,{isShowMoreOn:o,isDesktop:s}=this.state,n=r.filter(p=>p[1]),d=n.length>e,l=!d||o?1/0:e;return a("div",{"data-testid":"CardFooter",className:`SRC-cardMetadata ${this.props.className??""}`,children:a("table",{children:c("tbody",{children:[this.renderRows(n,l,s),d&&a("tr",{className:"SRC-cardRow",children:a("td",{children:c("a",{style:{textAlign:"left",margin:0,padding:0},onClick:this.toggleShowMore,className:"highlight-link",children:["Show ",o?"Less":"More",a(f,{icon:o?"expandLess":"expandMore"})]})})})]})})})}}try{u.displayName="CardFooter",u.__docgenInfo={description:"",displayName:"CardFooter",props:{values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"any[]"}},isHeader:{defaultValue:null,description:"",name:"isHeader",required:!0,type:{name:"boolean"}},secondaryLabelLimit:{defaultValue:null,description:"",name:"secondaryLabelLimit",required:!1,type:{name:"number"}},columnIconOptions:{defaultValue:null,description:"",name:"columnIconOptions",required:!1,type:{name:"ColumnIconConfigs"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const m=({chips:t})=>{const i=t.map((r,e)=>r?c("span",{children:[" ",r]},e):!1);return a(y.Fragment,{children:i})};try{m.displayName="ChipContainer",m.__docgenInfo={description:"",displayName:"ChipContainer",props:{chips:{defaultValue:null,description:"",name:"chips",required:!0,type:{name:"any[]"}}}}}catch{}try{u.displayName="CardFooter",u.__docgenInfo={description:"",displayName:"CardFooter",props:{values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"any[]"}},isHeader:{defaultValue:null,description:"",name:"isHeader",required:!0,type:{name:"boolean"}},secondaryLabelLimit:{defaultValue:null,description:"",name:"secondaryLabelLimit",required:!1,type:{name:"number"}},columnIconOptions:{defaultValue:null,description:"",name:"columnIconOptions",required:!1,type:{name:"ColumnIconConfigs"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{_.displayName="Icon",_.__docgenInfo={description:"",displayName:"Icon",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},iconOptions:{defaultValue:null,description:"",name:"iconOptions",required:!1,type:{name:"IconOptions"}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},isHeader:{defaultValue:null,description:"",name:"isHeader",required:!1,type:{name:"boolean"}},cssClass:{defaultValue:null,description:"",name:"cssClass",required:!1,type:{name:"string"}}}}}catch{}try{utils.displayName="utils",utils.__docgenInfo={description:"",displayName:"utils",props:{summary:{defaultValue:null,description:"",name:"summary",required:!0,type:{name:"string"}},maxCharacterCount:{defaultValue:null,description:"",name:"maxCharacterCount",required:!1,type:{name:"number"}}}}}catch{}try{m.displayName="ChipContainer",m.__docgenInfo={description:"",displayName:"ChipContainer",props:{chips:{defaultValue:null,description:"",name:"chips",required:!0,type:{name:"any[]"}}}}}catch{}export{m as C,u as a};
//# sourceMappingURL=index-7172c875.js.map
