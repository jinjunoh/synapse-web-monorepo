import{A as j}from"./AccessRequirementRelatedProjectsList-e4133cc9.js";import{M as P}from"./getEndpoint-ac94413e.js";import{l as I}from"./index-3e3ec4b8.js";import{c as g}from"./ApplicationSessionManager-cde90ea0.js";import"./jsx-runtime-9dc53467.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./OrientationBanner-7be8199b.js";import"./FullWidthAlert-cd035080.js";import"./Alert-c3fe2b05.js";import"./styled-3c6f4d83.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./createSvgIcon-396e3e24.js";import"./Paper-411d859b.js";import"./IconButton-f820fa46.js";import"./ButtonBase-8587e55b.js";import"./emotion-react.browser.esm-5fddd3df.js";import"./TransitionGroupContext-e6fd87c7.js";import"./useForkRef-8feb2ebf.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./useIsFocusVisible-18cd238e.js";import"./Stack-4eda368b.js";import"./extendSxProp-1372051e.js";import"./Box-8faf86fd.js";import"./AlertTitle-aeea0d59.js";import"./Typography-1d068b0b.js";import"./useTheme-e79ecbc0.js";import"./Grow-263eeb9a.js";import"./isHostComponent-fa76b8d9.js";import"./index-d3ea75b5.js";import"./utils-6fa73630.js";import"./ClickAwayListener-3b20c94f.js";import"./Tooltip-fe9d0c3e.js";import"./Button-33299b2c.js";import"./useAccessRequirements-e3e38810.js";import"./useQueries-bd360569.js";import"./useMutation-356b06b5.js";import"./useInfiniteQuery-1e8d33dc.js";import"./useMediaQuery-009aa540.js";import"./sortBy-0326211f.js";import"./_baseFlatten-c291d7ab.js";import"./_getAllKeys-aca88255.js";import"./isArray-5e3f9107.js";import"./_Uint8Array-df44b265.js";import"./_Map-92f6da1c.js";import"./_baseTimes-8715be3e.js";import"./_getTag-559aebd9.js";import"./toString-cc90cb98.js";import"./isSymbol-7c514724.js";import"./_baseIteratee-49dd783e.js";import"./_getMatchData-2bcfacce.js";import"./_cacheHas-c48b7592.js";import"./_setToArray-3d6ec6fd.js";import"./identity-46f208ab.js";import"./_baseFor-d254fa1e.js";import"./_baseRest-c9d7baca.js";import"./_overRest-2155f832.js";import"./_isIterateeCall-9cddbe78.js";import"./EntityLink-8f9f60d7.js";import"./useEntity-9a71b5a0.js";import"./isEqualWith-40c9fc10.js";import"./pick-1a060884.js";import"./_baseIndexOf-c808ca38.js";import"./toInteger-5bb233f4.js";import"./_baseClone-7c94ad0c.js";import"./_initCloneObject-c3239c20.js";import"./_baseUnset-207a67b6.js";import"./_baseSlice-cf92e063.js";import"./isPlainObject-e233fb76.js";import"./InfiniteQueryUtils-54ae7e6b.js";import"./useGetEntityHeaders-5be71a72.js";import"./EntityIcon-c4090307.js";import"./index-41d58426.js";import"./IconSvg-2975083b.js";import"./ErrorOutlined-6f3ac166.js";import"./GetAppTwoTone-d672483d.js";import"./InfoOutlined-e9da64e0.js";import"./CheckCircleTwoTone-c37d81c7.js";import"./ErrorChip-7e522304.js";import"./Chip-c99cf170.js";import"./Avatar-a0e20416.js";import"./Link-6ae0d01e.js";import"./Skeleton-131bd473.js";import"./pluralize-9f2b9a2f.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./List-a6975dc7.js";import"./ListItem-55cd17a8.js";import"./listItemButtonClasses-a2f1e990.js";import"./isMuiElement-bce4c331.js";import"./util-1969ce74.js";import"./index-17a77bb8.js";import"./SynapseConstants-47358250.js";import"./InfoTwoTone-b17047a2.js";import"./inputBaseClasses-034b6b96.js";import"./Fade-240af196.js";import"./StringUtils-2ea3ab4d.js";import"./dayjs.min-f79c4412.js";import"./index-9d475cdf.js";import"./tiny-invariant-dd7d57d2.js";const Rt={title:"Governance/AccessRequirementRelatedProjectsList",component:j},r={args:{accessRequirementId:9603055}},t={args:{accessRequirementId:9605913}},o={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[I.rest.post(`${P}${g}`,async(A,u,e)=>{const l={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return u(e.status(200),e.json(l))})]}}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var s,a,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9605913
  }
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var c,d,R;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 1234567
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
      // searchAccessRequirements
      rest.post(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_SEARCH}\`, async (req, res, ctx) => {
        const zeroRelatedProjects = {
          results: [{
            id: '1234567',
            type: 'org.sagebionetworks.repo.model.ManagedACTAccessRequirement',
            createdOn: '2017-08-23T18:48:20.892Z',
            modifiedOn: '2023-12-14T00:43:41.315Z',
            name: 'Team AR without Related Projects',
            version: '1',
            relatedProjectIds: [],
            reviewerIds: []
          }]
        };
        return res(ctx.status(200), ctx.json(zeroRelatedProjects));
      })]
    }
  }
}`,...(R=(d=o.parameters)==null?void 0:d.docs)==null?void 0:R.source}}};const ut=["ManyProjects","OneProject","ZeroProjectsMock"];export{r as ManyProjects,t as OneProject,o as ZeroProjectsMock,ut as __namedExportsOrder,Rt as default};
