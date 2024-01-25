import{j as m}from"./jsx-runtime-9dc53467.js";import{l as w}from"./index-643c5ae5.js";import{M as E}from"./getEndpoint-ac94413e.js";import{T as i}from"./TwoFactorAuthEnabledRequirement-853c7f0b.js";import{S as A,F}from"./SynapseClient-ceb0e6d4.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./util-c0197ce2.js";import"./index-4166e284.js";import"./TwoFactorEnrollmentForm-5558f7f2.js";import"./LeftRightPanel-44366a7b.js";import"./Box-ddce9904.js";import"./styled-01bfb76d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./extendSxProp-e91f91cb.js";import"./Paper-b990f44f.js";import"./OrientationBanner-1c6f5b11.js";import"./FullWidthAlert-88a09c3d.js";import"./Alert-34cc4490.js";import"./createSvgIcon-af041161.js";import"./IconButton-e4815158.js";import"./ButtonBase-f3be4fb1.js";import"./emotion-react.browser.esm-04dee135.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-1474f578.js";import"./useForkRef-8feb2ebf.js";import"./useIsFocusVisible-e5f6c995.js";import"./Stack-b0292d83.js";import"./AlertTitle-1d33b140.js";import"./Typography-10432b83.js";import"./useTheme-541c21f5.js";import"./Grow-5b2ac6ed.js";import"./isHostComponent-fa76b8d9.js";import"./index-d3ea75b5.js";import"./utils-7ba61cee.js";import"./ClickAwayListener-3907f9d7.js";import"./Tooltip-3e2f7ab3.js";import"./Button-6cf38875.js";import"./TextField-2e900427.js";import"./StyledFormControl-539bab9f.js";import"./InputLabel-91f95ac8.js";import"./useFormControl-41ba3265.js";import"./inputBaseClasses-9710a733.js";import"./ownerWindow-2c76219e.js";import"./isMuiElement-bce4c331.js";import"./LoadingScreen-d62555af.js";import"./Backdrop-acbc2ec5.js";import"./Fade-7e0b73d6.js";import"./LinearProgress-8d1ab3ac.js";import"./useMutation-dd95c1dd.js";import"./IconSvg-3c89f0af.js";import"./ErrorOutlined-6b31cdea.js";import"./GetAppTwoTone-8acfb280.js";import"./InfoOutlined-1c91e984.js";import"./CheckCircleTwoTone-5c97bb6f.js";import"./Dialog-38c3998f.js";import"./Modal-7f809725.js";import"./getScrollbarSize-ac846fe6.js";import"./createChainedFunction-0bab83cf.js";import"./DialogTitle-5867ee56.js";import"./DialogContent-d93df19b.js";import"./Link-980677d0.js";import"./Divider-db784af9.js";import"./dividerClasses-5829bcb2.js";import"./RequirementItem-a63d4244.js";import"./ConditionalWrapper-28a47e51.js";import"./Avatar-b9207744.js";import"./Skeleton-c327557e.js";import"./CheckTwoTone-3ea78bb9.js";import"./SynapseConstants-567f6998.js";import"./InfoTwoTone-1a20b6d6.js";import"./_getTag-a0ec24ca.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./index-7db48dfb.js";import"./dayjs.min-f79c4412.js";import"./index-9d475cdf.js";import"./tiny-invariant-dd7d57d2.js";const Jr={title:"Governance/Data Access Request Flow/Requirements/TwoFactorAuthEnabledRequirement",component:i,parameters:{stack:"mock"},render:o=>m(A,{children:p=>m(F,{synapseContext:{...p,accessToken:"fake token"},children:m(i,{...o})})})};function l(o){return[w.rest.get(`${E}/auth/v1/2fa`,async(p,h,e)=>{const f={status:o?"ENABLED":"DISABLED"};return h(e.status(200),e.json(f))})]}const r={parameters:{msw:{handlers:[l(!0)]}}},t={parameters:{msw:{handlers:[l(!1)]}}};var s,a,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const Qr=["Enabled","Disabled"];export{t as Disabled,r as Enabled,Qr as __namedExportsOrder,Jr as default};
//# sourceMappingURL=TwoFactorAuthEnabledRequirement.stories-c9221ae9.js.map
