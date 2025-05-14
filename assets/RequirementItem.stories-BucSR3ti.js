import{j as a}from"./jsx-runtime-sFfnwXut.js";import{m as P}from"./mockWiki-B6wTqEDI.js";import{M as x}from"./MarkdownSynapse-Dc6X1srP.js";import{d as s}from"./ToastMessage-BiaXWqPD.js";import{R as n,a as t}from"./RequirementItem-CQz2rLeB.js";import{P as O}from"./Paper-D1M3GfB_.js";import"./index-DoX8G8Yn.js";import"./iframe-BOtctWXf.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-3wYKbysY.js";import"./VerificationSubmission-dxY1kvC5.js";import"./useFiles-BAztOM91.js";import"./SynapseConstants-BV1FnhM-.js";import"./OrientationBanner-DZLRXPBS.js";import"./index-C5AZOy6D.js";import"./spreadSx-CwcO6WA9.js";import"./react-Ci4EP5se.js";import"./FullWidthAlert-DdsNYV_r.js";import"./Alert-CQ28KUOq.js";import"./createTheme-DHcStZw4.js";import"./resolveComponentProps-sx1GxMoy.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BASbR04R.js";import"./createSvgIcon-Dfjq89og.js";import"./DefaultPropsProvider-C-RPZdZK.js";import"./Close-7a38B2Cx.js";import"./IconButton-BQJSsQhZ.js";import"./ButtonBase-BqN1Mknx.js";import"./useTimeout-2iA2BCss.js";import"./TransitionGroupContext-Cs50VxMP.js";import"./useIsFocusVisible-Ct3DzPDN.js";import"./useEventCallback-D_0zaytn.js";import"./Stack-CtPD3DEl.js";import"./getThemeProps-BBnWsZZg.js";import"./useTheme-CiPF9lgI.js";import"./Box-6xXXNy_r.js";import"./AlertTitle-D8uI4v6s.js";import"./Typography-jqLTKSXk.js";import"./useTheme-Cp3zXvWU.js";import"./Grow-DE65aWdL.js";import"./index-D7qSZK1D.js";import"./utils-DwWd54TM.js";import"./ClickAwayListener-Bz8ukuYa.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CS9uLZrQ.js";import"./index-K2IgKp72.js";import"./useControlled-CecgBugt.js";import"./useId-BvBS4gU1.js";import"./Popper-CcZx8wRW.js";import"./Button-98QRmISR.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-H8ocXwz_.js";import"./utils-Jbo6HY6n.js";import"./Link-Z9-Bxnys.js";import"./Collapse-hAUQrpq4.js";import"./isNil-Cu8hF2Sa.js";import"./_Uint8Array-DGr81fNM.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-W-5SY7AE.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-UpQwY295.js";import"./_getTag-Bg2ClzcD.js";import"./tinycolor-Begke6kS.js";import"./Fade-BdCl9RIG.js";import"./Skeleton-CMt54XYP.js";import"./inputBaseClasses-D5mHKxj0.js";import"./calculateFriendlyFileSize-Bdrarzqm.js";import"./CheckCircleTwoTone-757-9O45.js";import"./InfoTwoTone-DjAK_Iz5.js";import"./mutation-UdZ4-wHU.js";import"./dayjs.min-D152OlRy.js";import"./chunk-AYJ5UCUI-BO2N_b-R.js";import"./cloneDeep-C5yUkUZw.js";import"./_initCloneObject-B6hdgTGA.js";import"./isEqual-DHYe3gFh.js";import"./merge-DY6OYJwb.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-BjaLet9I.js";import"./SkeletonInlineBlock-CbmKnQpZ.js";import"./SkeletonTable-6coR2bK4.js";import"./times-voXjsHZL.js";import"./toInteger-s9L7yZI9.js";import"./isSymbol-u98OqEww.js";import"./SkeletonParagraph-QjDlxYhu.js";import"./uniqueId-DhyEOYfX.js";import"./toString-DPacUVIx.js";import"./CSSTransition-C0eeF2hM.js";import"./ConditionalWrapper-CZRWAmqf.js";import"./LockTwoTone-BIOnLOvq.js";import"./Avatar-CW3Ot355.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.COMPLETE,
    actions: [{
      variant: 'outlined',
      children: 'Learn More',
      onClick: () => {
        displayToast('Learn More clicked');
      }
    }]
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.PENDING,
    actions: [{
      variant: 'outlined',
      children: 'Learn More',
      onClick: () => {
        displayToast('Learn More clicked');
      }
    }]
  }
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var L,k,C;e.parameters={...e.parameters,docs:{...(L=e.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.LOADING,
    actions: []
  }
}`,...(C=(k=e.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var M,E,R;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.COMPLETE,
    actions: []
  }
}`,...(R=(E=i.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var S,I,q;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.LOCKED,
    actions: [{
      variant: 'outlined',
      children: 'Accept terms',
      onClick: () => {
        displayToast('Accept terms clicked');
      }
    }]
  }
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const ur=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,ur as __namedExportsOrder,dr as default};
