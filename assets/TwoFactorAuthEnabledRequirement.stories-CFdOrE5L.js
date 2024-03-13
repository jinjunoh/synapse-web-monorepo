import{j as m}from"./jsx-runtime-CKrituN3.js";import{l as w}from"./index-CNew_s9A.js";import{M as E}from"./getEndpoint-CjoHA800.js";import{T as e}from"./TwoFactorAuthEnabledRequirement-DU2jeDWl.js";import{S as x,F as A}from"./ApplicationSessionManager-CoKgEkVZ.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DMoHWj5j.js";import"./events-CXH2uRM3.js";import"./util-HBHsAbUw.js";import"./index-Dkma3SP6.js";import"./TwoFactorEnrollmentForm-SCJvvdTb.js";import"./LeftRightPanel-CHH-CaMP.js";import"./styled-CPWjInoX.js";import"./createTheme-2XtGYoE4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./Box-qzYP1vnN.js";import"./Paper-DYLu205z.js";import"./OrientationBanner-DFzKDcoJ.js";import"./FullWidthAlert-Dm349vLy.js";import"./Alert-jLvJNeQC.js";import"./mergeSlotProps-ih6DGlm4.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BSLA1zlB.js";import"./createSvgIcon-ClnqzT54.js";import"./IconButton-DUzhqGqo.js";import"./ButtonBase-xB_9igmm.js";import"./TransitionGroupContext-B1FFUpIO.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./useIsFocusVisible-Chjat8DO.js";import"./Stack-wDqeWMTC.js";import"./AlertTitle-DGMjNv9d.js";import"./Typography-BhttL55U.js";import"./utils-SU9mu0D7.js";import"./index-BtM5VmRH.js";import"./Grow-DHJeVGyA.js";import"./ClickAwayListener-CVXPLwF5.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-XprEAl00.js";import"./index-CJ-wfEIf.js";import"./Button-BOCcoe4v.js";import"./TextField-Bf_k_3vK.js";import"./StyledFormControl-CkGaCXh8.js";import"./InputLabel-BCVTUiU1.js";import"./useFormControl-Bd6AoRoF.js";import"./inputBaseClasses-DIwNn5yR.js";import"./ownerWindow-BN2rbQ_G.js";import"./isMuiElement-BxNAcTwJ.js";import"./LoadingScreen-c9I5269y.js";import"./Backdrop-BvN9j_Hy.js";import"./Fade--kK2ZsE4.js";import"./LinearProgress-388Oxog8.js";import"./useMutation-B1vezw_x.js";import"./QueryFilterUtils-CNR-kueb.js";import"./SynapseConstants-Dbq7Gtj7.js";import"./_Map-W_LbVzGG.js";import"./isArray-D3Xc0Edl.js";import"./isNumber-IkxNlUCJ.js";import"./IconSvg-sfHaiTJJ.js";import"./ErrorOutlined-BhDYotgP.js";import"./GetAppTwoTone-DGNvw6OX.js";import"./InfoOutlined-G1tbAqgK.js";import"./CheckCircleTwoTone-B5Iaww82.js";import"./Dialog-DNnL_zdg.js";import"./Modal-BbYTGd2V.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-C7S83cIL.js";import"./DialogContent-CDhosuGR.js";import"./Link-BXqr-BaG.js";import"./Divider-DDkVRX30.js";import"./dividerClasses-UDilKsZe.js";import"./RequirementItem-Di_JOP1b.js";import"./ConditionalWrapper-CiWFj8WY.js";import"./Avatar-1vKdsY-O.js";import"./Skeleton-BQPHOfbB.js";import"./colorManipulator-CieAV1Z7.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-CBfzdnva.js";import"./index-C-UbkUMQ.js";import"./dayjs.min-BIwLhz4I.js";import"./index-Dk74W0Oi.js";import"./tiny-invariant-CopsF_GD.js";import"./_getTag-7fqy2l2P.js";import"./StringUtils-D4kDWP8q.js";const Zr={title:"Governance/Data Access Request Flow/Requirements/TwoFactorAuthEnabledRequirement",component:e,parameters:{stack:"mock"},render:o=>m.jsx(x,{children:p=>m.jsx(A,{synapseContext:{...p,accessToken:"fake token"},children:m.jsx(e,{...o})})})};function l(o){return[w.rest.get(`${E}/auth/v1/2fa`,async(p,h,i)=>{const f={status:o?"ENABLED":"DISABLED"};return h(i.status(200),i.json(f))})]}const r={parameters:{msw:{handlers:[l(!0)]}}},t={parameters:{msw:{handlers:[l(!1)]}}};var s,a,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getTwoFactorAuthStatusHandler(true)]
    }
  }
}`,...(n=(a=r.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var c,u,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getTwoFactorAuthStatusHandler(false)]
    }
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const rt=["Enabled","Disabled"];export{t as Disabled,r as Enabled,rt as __namedExportsOrder,Zr as default};
