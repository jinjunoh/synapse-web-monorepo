import{r as s}from"./index-76fb7be0.js";const d=768;function u(r){const e=r??d,[t,i]=s.useState(window.innerWidth>e);return s.useEffect(()=>{const n=()=>{const o=window.innerWidth>e;o!==t&&i(o)};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}}),t}export{u};
//# sourceMappingURL=useShowDesktop-b2e7d235.js.map
