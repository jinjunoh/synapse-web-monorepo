import{T as t}from"./TimelinePlot-892bb560.js";import{l as a}from"./index-643c5ae5.js";import{M as o}from"./getEndpoint-ac94413e.js";import{g as m}from"./tableQueryHandlers-2d747abd.js";import{m as c}from"./mockTableEntity-85b5b6b2.js";import{g as u}from"./userProfileHandlers-93fdd083.js";import{e as p}from"./index-7db48dfb.js";import"./jsx-runtime-9dc53467.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./SynapseClient-ceb0e6d4.js";import"./SynapseConstants-567f6998.js";import"./OrientationBanner-1c6f5b11.js";import"./FullWidthAlert-88a09c3d.js";import"./Alert-34cc4490.js";import"./styled-01bfb76d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./createSvgIcon-af041161.js";import"./Paper-b990f44f.js";import"./IconButton-e4815158.js";import"./ButtonBase-f3be4fb1.js";import"./emotion-react.browser.esm-04dee135.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-1474f578.js";import"./useForkRef-8feb2ebf.js";import"./useIsFocusVisible-e5f6c995.js";import"./Stack-b0292d83.js";import"./extendSxProp-e91f91cb.js";import"./Box-ddce9904.js";import"./AlertTitle-1d33b140.js";import"./Typography-10432b83.js";import"./useTheme-541c21f5.js";import"./Grow-5b2ac6ed.js";import"./isHostComponent-fa76b8d9.js";import"./index-d3ea75b5.js";import"./utils-7ba61cee.js";import"./ClickAwayListener-3907f9d7.js";import"./Tooltip-3e2f7ab3.js";import"./Button-6cf38875.js";import"./InfoTwoTone-1a20b6d6.js";import"./CheckCircleTwoTone-5c97bb6f.js";import"./inputBaseClasses-9710a733.js";import"./Fade-7e0b73d6.js";import"./Link-980677d0.js";import"./_getTag-a0ec24ca.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./dayjs.min-f79c4412.js";import"./index-9d475cdf.js";import"./tiny-invariant-dd7d57d2.js";import"./queryUtils-d25c846d.js";import"./isNil-dc54881d.js";import"./_baseIsEqual-5ae1325b.js";import"./_Uint8Array-98add9bc.js";import"./_baseTimes-8715be3e.js";import"./_cacheHas-9c553a57.js";import"./_setToArray-3d6ec6fd.js";import"./_getMatchData-806f8014.js";import"./cloneDeep-8a8b372e.js";import"./_baseClone-dc93fc3a.js";import"./isEqual-592f8fa4.js";import"./SqlFunctions-2b88feb0.js";import"./RegularExpressions-bc0adf55.js";import"./useGetQueryResultBundle-f00431cf.js";import"./useInfiniteQuery-49bff1c8.js";import"./merge-21407079.js";import"./_baseFor-d254fa1e.js";import"./isArrayLikeObject-044d0a87.js";import"./isPlainObject-75ceb805.js";import"./_baseRest-b81a47b3.js";import"./identity-46f208ab.js";import"./_overRest-1404b737.js";import"./_isIterateeCall-ce2bb82d.js";import"./factory-33ef2009.js";import"./ObservationCard-1ff818b1.js";import"./IconSvg-3c89f0af.js";import"./ErrorOutlined-6b31cdea.js";import"./GetAppTwoTone-8acfb280.js";import"./InfoOutlined-1c91e984.js";import"./index-7172c875.js";import"./Icon-946b3719.js";import"./ShowMore-0d3229ca.js";import"./SkeletonTable-d1c3c025.js";import"./times-39c4125c.js";import"./isSymbol-7c514724.js";import"./Skeleton-c327557e.js";import"./UserBadge-8715cf96.js";import"./Popover-f3a8cf5d.js";import"./Modal-7f809725.js";import"./Backdrop-acbc2ec5.js";import"./getScrollbarSize-ac846fe6.js";import"./ownerWindow-2c76219e.js";import"./createChainedFunction-0bab83cf.js";import"./ToastMessage-02301a16.js";import"./CSSTransition-d4a63f6f.js";import"./hasClass-ec9efd32.js";import"./uniqueId-4d05949d.js";import"./toString-cc90cb98.js";import"./Avatar-b9207744.js";import"./Dialog-38c3998f.js";import"./ColorGradient-3d3e1969.js";import"./colorPalette-c43701fe.js";import"./Box-12d95f26.js";import"./LeftRightPanel-44366a7b.js";import"./StyledFormControl-539bab9f.js";import"./InputLabel-91f95ac8.js";import"./useFormControl-41ba3265.js";import"./isMuiElement-bce4c331.js";import"./WideButton-2dd27cba.js";import"./InputSizedButton-35908433.js";import"./Select-9a32f20b.js";import"./index-c71daf5e.js";import"./MenuList-7ef70bf3.js";import"./List-94bb762a.js";import"./MenuItem-3d7f51a8.js";import"./dividerClasses-5829bcb2.js";import"./util-c0197ce2.js";import"./index-4166e284.js";import"./mock_user_profile-2f3a933e.js";import"./mockProject-892446d8.js";import"./mockEntity-fd052684.js";import"./mockFileEntity-590984d1.js";import"./mock_file_handle-5fea814e.js";const d={concreteType:"org.sagebionetworks.repo.model.table.QueryResultBundle",maxRowsPerPage:50,queryResult:{concreteType:"org.sagebionetworks.repo.model.table.QueryResult",queryResults:{concreteType:"org.sagebionetworks.repo.model.table.RowSet",tableId:"syn51735464",etag:"DEFAULT",headers:[{name:"observationId",columnType:"STRING",id:"194093"},{name:"synapseId",columnType:"STRING",id:"194094"},{name:"resourceId",columnType:"STRING",id:"171992"},{name:"species",columnType:"STRING_LIST",id:"202728"},{name:"observationText",columnType:"STRING",id:"194096"},{name:"observationType",columnType:"STRING_LIST",id:"202379"},{name:"observationTime",columnType:"STRING",id:"194098"},{name:"observationTimeUnits",columnType:"STRING",id:"197336"},{name:"observationSubmitterName",columnType:"STRING",id:"201670"},{name:"observationLink",columnType:"STRING",id:"194097"},{name:"observationPhase",columnType:"STRING",id:"197331"},{name:"doi",columnType:"STRING",id:"194239"},{name:"authors",columnType:"STRING_LIST",id:"173180"},{name:"publicationTitle",columnType:"LARGETEXT",id:"188689"},{name:"journal",columnType:"STRING",id:"194253"},{name:"pmid",columnType:"INTEGER",id:"111873"},{name:"citation",columnType:"LARGETEXT",id:"171127"},{name:"abstract",columnType:"LARGETEXT",id:"87725"},{name:"publicationDate",columnType:"STRING",id:"169896"},{name:"publicationDateUnix",columnType:"DATE",id:"173178"}],rows:[{rowId:3,versionNumber:0,values:["a","3410323","fbf11ec4-1d12-4feb-a6fc-9faf6bc9c9db",'["Mus musculus"]',"Reduced size of olfactory bulb (P18). Reduced neurogenesis in subventricular zone.",'["Organ Development"]',"3","weeks","James Goss",null,"prenatal",null,null,null,null,null,null,null,null,null]},{rowId:4,versionNumber:0,values:["b","3410323","fbf11ec4-1d12-4feb-a6fc-9faf6bc9c9db",'["Mus musculus"]',"Gross optic nerve and/or chiasm enlargement. Increased cellularity with GFAP-immunoreactive astrocytes and mild Ki67 proliferative indices. Increase in isolectin-B4 positive microglia.",'["Organ Development"]',"3","weeks","James Goss",null,"prenatal",null,null,null,null,null,null,null,null,null]},{rowId:5,versionNumber:0,values:["c","3410323","fbf11ec4-1d12-4feb-a6fc-9faf6bc9c9db",'["Mus musculus"]',"Optic glioma, focal expansion of prechiasmatic optic nerves and chiasm. Low proliferative indices. Lack of eosinophilic granular bodies, Rosenthal fibers or microcystic structures commonly seen in humans (therefore not juvenile pilocytic astrocytomas). Decrease in IPL-GCL and RNFL thickness by SD-OCT",'["Organ Development"]',"8.5","days","James Goss",null,"neonatal",null,null,null,null,null,null,null,null,null]},{rowId:6,versionNumber:0,values:["d","3410323","fbf11ec4-1d12-4feb-a6fc-9faf6bc9c9db",'["Mus musculus"]',"Optic glioma, focal expansion of prechiasmatic optic nerves and chiasm. Low proliferative indices. Lack of eosinophilic granular bodies, Rosenthal fibers or microcystic structures commonly seen in humans (therefore not juvenile pilocytic astrocytomas). Decrease in IPL-GCL and RNFL thickness by SD-OCT",'["Organ Development"]',"1","months","James Goss",null,"neonatal",null,null,null,null,null,null,null,null,null]},{rowId:7,versionNumber:0,values:["e","3410323","fbf11ec4-1d12-4feb-a6fc-9faf6bc9c9db",'["Mus musculus"]',"Optic glioma, focal expansion of prechiasmatic optic nerves and chiasm. Low proliferative indices. Lack of eosinophilic granular bodies, Rosenthal fibers or microcystic structures commonly seen in humans (therefore not juvenile pilocytic astrocytomas). Decrease in IPL-GCL and RNFL thickness by SD-OCT",'["Organ Development"]',"7","days","James Goss",null,"weanling",null,null,null,null,null,null,null,null,null]},{rowId:8,versionNumber:0,values:["f","3410323","fbf11ec4-1d12-4feb-a6fc-9faf6bc9c9db",'["Mus musculus"]',"Optic glioma, focal expansion of prechiasmatic optic nerves and chiasm. Low proliferative indices. Lack of eosinophilic granular bodies, Rosenthal fibers or microcystic structures commonly seen in humans (therefore not juvenile pilocytic astrocytomas). Decrease in IPL-GCL and RNFL thickness by SD-OCT",'["Organ Development"]',"1","months","James Goss",null,"weanling",null,null,null,null,null,null,null,null,null]},{rowId:9,versionNumber:0,values:["g","3410323","fbf11ec4-1d12-4feb-a6fc-9faf6bc9c9db",'["Mus musculus"]',"Optic glioma, focal expansion of prechiasmatic optic nerves and chiasm. Low proliferative indices. Lack of eosinophilic granular bodies, Rosenthal fibers or microcystic structures commonly seen in humans (therefore not juvenile pilocytic astrocytomas). Decrease in IPL-GCL and RNFL thickness by SD-OCT",'["Organ Development"]',"6","days","James Goss",null,"juvenile",null,null,null,null,null,null,null,null,null]},{rowId:10,versionNumber:0,values:["h","3410323","fbf11ec4-1d12-4feb-a6fc-9faf6bc9c9db",'["Mus musculus"]',"Optic glioma, focal expansion of prechiasmatic optic nerves and chiasm. Low proliferative indices. Lack of eosinophilic granular bodies, Rosenthal fibers or microcystic structures commonly seen in humans (therefore not juvenile pilocytic astrocytomas). Decrease in IPL-GCL and RNFL thickness by SD-OCT",'["Organ Development"]',"4","weeks","James Goss",null,"juvenile",null,null,null,null,null,null,null,null,null]},{rowId:11,versionNumber:0,values:["i","3410323","fbf11ec4-1d12-4feb-a6fc-9faf6bc9c9db",'["Mus musculus"]',"Optic glioma, focal expansion of prechiasmatic optic nerves and chiasm. Low proliferative indices. Lack of eosinophilic granular bodies, Rosenthal fibers or microcystic structures commonly seen in humans (therefore not juvenile pilocytic astrocytomas). Decrease in IPL-GCL and RNFL thickness by SD-OCT",'["Organ Development"]',"1","month","James Goss",null,"adolescent",null,null,null,null,null,null,null,null,null]},{rowId:12,versionNumber:0,values:["j","3410323","fbf11ec4-1d12-4feb-a6fc-9faf6bc9c9db",'["Mus musculus"]',"Optic glioma, focal expansion of prechiasmatic optic nerves and chiasm. Low proliferative indices. Lack of eosinophilic granular bodies, Rosenthal fibers or microcystic structures commonly seen in humans (therefore not juvenile pilocytic astrocytomas). Decrease in IPL-GCL and RNFL thickness by SD-OCT",'["Organ Development"]',"2","months","James Goss",null,"adolescent",null,null,null,null,null,null,null,null,null]},{rowId:13,versionNumber:0,values:["k","3410323","fbf11ec4-1d12-4feb-a6fc-9faf6bc9c9db",'["Mus musculus"]',"Optic glioma, focal expansion of prechiasmatic optic nerves and chiasm. Low proliferative indices. Lack of eosinophilic granular bodies, Rosenthal fibers or microcystic structures commonly seen in humans (therefore not juvenile pilocytic astrocytomas). Decrease in IPL-GCL and RNFL thickness by SD-OCT",'["Organ Development"]',"6","days","James Goss",null,"adolescent",null,null,null,null,null,null,null,null,null]},{rowId:14,versionNumber:0,values:["l","3410323","fbf11ec4-1d12-4feb-a6fc-9faf6bc9c9db",'["Mus musculus"]',"Optic glioma, focal expansion of prechiasmatic optic nerves and chiasm. Low proliferative indices. Lack of eosinophilic granular bodies, Rosenthal fibers or microcystic structures commonly seen in humans (therefore not juvenile pilocytic astrocytomas). Decrease in IPL-GCL and RNFL thickness by SD-OCT",'["Organ Development"]',"12","months","James Goss",null,"adolescent",null,null,null,null,null,null,null,null,null]}]}}},Po={title:"Components/TimelinePlot",component:t,parameters:{stack:"mock"}},e={args:{sql:"SELECT * FROM syn51735464",searchParams:{resourceId:"9971e47e-976a-4631-8edd-5cae04304b01"},sqlOperator:p.EQUAL,defaultSpecies:"Mus musculus"},parameters:{msw:{handlers:[a.rest.get(o+"/repo/v1/entity/syn51735464",(f,s,n)=>s(n.status(200),n.json({...c,id:"syn51735464"}))),...m(d,o),...u(o)]}}};var i,l,r;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    sql: \`SELECT * FROM syn51735464\`,
    searchParams: {
      resourceId: '9971e47e-976a-4631-8edd-5cae04304b01'
    },
    sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
    defaultSpecies: 'Mus musculus'
  },
  parameters: {
    msw: {
      handlers: [rest.get(MOCK_REPO_ORIGIN + '/repo/v1/entity/syn51735464', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({
          ...mockTableEntity,
          id: 'syn51735464'
        }));
      }), ...getHandlersForTableQuery(queryResultBundleJson, MOCK_REPO_ORIGIN), ...getUserProfileHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(r=(l=e.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const Eo=["Demo"];export{e as Demo,Eo as __namedExportsOrder,Po as default};
//# sourceMappingURL=TimelinePlot.stories-0e770081.js.map
