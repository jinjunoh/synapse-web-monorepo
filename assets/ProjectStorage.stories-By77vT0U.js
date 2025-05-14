import{g as s}from"./entityHandlers-Cvn9ntyO.js";import{x as C,g as L,b9 as d,B as k,M as r}from"./useFiles-BAztOM91.js";import"./VerificationSubmission-dxY1kvC5.js";import"./StringUtils-lE31obNl.js";import{l as O}from"./index-CPqnTWqX.js";import{g as a}from"./userProfileHandlers-B3ZZOlJL.js";import{P as N}from"./ProjectDataAvailability-JeDMm0hd.js";import"./index-CmBfNxOa.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-a6Ogh8UH.js";import"./mockTeam-DI6s6vZA.js";import"./SynapseConstants-BV1FnhM-.js";import"./OrientationBanner-DZLRXPBS.js";import"./jsx-runtime-sFfnwXut.js";import"./index-DoX8G8Yn.js";import"./iframe-BOtctWXf.js";import"./index-C5AZOy6D.js";import"./spreadSx-CwcO6WA9.js";import"./react-Ci4EP5se.js";import"./FullWidthAlert-DdsNYV_r.js";import"./Alert-CQ28KUOq.js";import"./createTheme-DHcStZw4.js";import"./resolveComponentProps-sx1GxMoy.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BASbR04R.js";import"./createSvgIcon-Dfjq89og.js";import"./DefaultPropsProvider-C-RPZdZK.js";import"./Close-7a38B2Cx.js";import"./IconButton-BQJSsQhZ.js";import"./ButtonBase-BqN1Mknx.js";import"./useTimeout-2iA2BCss.js";import"./TransitionGroupContext-Cs50VxMP.js";import"./useIsFocusVisible-Ct3DzPDN.js";import"./useEventCallback-D_0zaytn.js";import"./Paper-D1M3GfB_.js";import"./Stack-CtPD3DEl.js";import"./getThemeProps-BBnWsZZg.js";import"./useTheme-CiPF9lgI.js";import"./Box-6xXXNy_r.js";import"./AlertTitle-D8uI4v6s.js";import"./Typography-jqLTKSXk.js";import"./useTheme-Cp3zXvWU.js";import"./Grow-DE65aWdL.js";import"./index-D7qSZK1D.js";import"./utils-DwWd54TM.js";import"./ClickAwayListener-Bz8ukuYa.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CS9uLZrQ.js";import"./index-K2IgKp72.js";import"./useControlled-CecgBugt.js";import"./useId-BvBS4gU1.js";import"./Popper-CcZx8wRW.js";import"./Button-98QRmISR.js";import"./uniqueId-DhyEOYfX.js";import"./toString-DPacUVIx.js";import"./isObjectLike-W-5SY7AE.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-u98OqEww.js";import"./times-voXjsHZL.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-s9L7yZI9.js";import"./mockTableEntity-DfPcxHzQ.js";import"./mockFileEntityACLVariants-Cf8aNf9A.js";import"./fakerUtils-OKy3eAog.js";import"./mockFileEntity-DK0xPSSx.js";import"./mock_file_handle-3wYKbysY.js";import"./mockEntity-Bae1okuU.js";import"./mockSchema-YTNkxl9b.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-H8ocXwz_.js";import"./utils-Jbo6HY6n.js";import"./Link-Z9-Bxnys.js";import"./Collapse-hAUQrpq4.js";import"./isNil-Cu8hF2Sa.js";import"./_Uint8Array-DGr81fNM.js";import"./_baseIsEqual-UpQwY295.js";import"./_getTag-Bg2ClzcD.js";import"./tinycolor-Begke6kS.js";import"./Fade-BdCl9RIG.js";import"./Skeleton-CMt54XYP.js";import"./inputBaseClasses-D5mHKxj0.js";import"./calculateFriendlyFileSize-Bdrarzqm.js";import"./CheckCircleTwoTone-757-9O45.js";import"./InfoTwoTone-DjAK_Iz5.js";import"./mutation-UdZ4-wHU.js";import"./dayjs.min-D152OlRy.js";import"./chunk-AYJ5UCUI-BO2N_b-R.js";import"./cloneDeep-C5yUkUZw.js";import"./_initCloneObject-B6hdgTGA.js";import"./isEqual-DHYe3gFh.js";import"./merge-DY6OYJwb.js";import"./util-BSbMtqI1.js";import"./HelpPopover-ZpDVREmu.js";import"./MarkdownPopover-BDFOvQVR.js";import"./LightTooltip-0EJRxtBi.js";import"./MarkdownSynapse-Dc6X1srP.js";import"./SkeletonButton-BjaLet9I.js";import"./SkeletonInlineBlock-CbmKnQpZ.js";import"./SkeletonTable-6coR2bK4.js";import"./SkeletonParagraph-QjDlxYhu.js";import"./HelpOutlineTwoTone-DFePhH1s.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    projectId: UNDER_LIMIT_PROJECT_ID,
    sx: {
      backgroundColor: '#375574'
    }
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(_=(I=o.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var P,E,R;e.parameters={...e.parameters,docs:{...(P=e.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    projectId: OVER_LIMIT_PROJECT_ID,
    sx: {
      backgroundColor: '#375574'
    }
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(R=(E=e.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var u,j,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    projectId: 'syn31415123'
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(y=(j=i.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const Lt=["ProjectDataUnderLimit","ProjectDataOverLimit","ProjectDataStorageNotSet"];export{e as ProjectDataOverLimit,i as ProjectDataStorageNotSet,o as ProjectDataUnderLimit,Lt as __namedExportsOrder,St as default};
