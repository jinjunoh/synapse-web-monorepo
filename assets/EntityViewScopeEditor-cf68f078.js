import{a as l,F as d,j as o}from"./jsx-runtime-9dc53467.js";import{r as m}from"./index-76fb7be0.js";import{E}from"./EntityHeaderTable-5a45b5b1.js";import{b as u}from"./index-01eb1463.js";import{V as y,F as T}from"./useEntitySelection-7028c713.js";import{U as f}from"./ApplicationSessionManager-99c1baec.js";import{T as n}from"./Typography-1d068b0b.js";const S=f.CONTAINER,g=[u.PROJECT];function a(r){const{scopeIds:e,isProjectView:i=!1,onChange:s}=r,p=m.useMemo(()=>e.map(t=>({targetId:t})),[e]);return l(d,{children:[o(n,{variant:"body1",mb:1.25,sx:{fontWeight:700},children:"Scope"}),e.length===0&&o(n,{variant:"smallText1",color:"grey.600",children:"Empty! Add items to populate your view"}),o(E,{references:p,isEditable:!0,onUpdate:t=>{s(t.map(c=>c.targetId))},removeSelectedRowsButtonText:"Remove Selected Items from View Scope",objectNameCopy:i?"project":"container",hideTextFieldToPasteValue:!0,entityFinderConfiguration:{selectMultiple:!0,versionSelection:y.DISALLOWED,initialScope:T.ALL_PROJECTS,initialContainer:"root",selectableTypes:i?g:S}})]})}try{a.displayName="EntityViewScopeEditor",a.__docgenInfo={description:"",displayName:"EntityViewScopeEditor",props:{scopeIds:{defaultValue:null,description:"",name:"scopeIds",required:!0,type:{name:"string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(scopeIds: string[]) => void"}},isProjectView:{defaultValue:null,description:"",name:"isProjectView",required:!1,type:{name:"boolean"}}}}}catch{}export{a as E};
