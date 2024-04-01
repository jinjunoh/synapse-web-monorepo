import{n as y,d as re,T as me,F as ve,M as pe,g as be}from"./DocsRenderer-K4EAMTCU-CgtBOFNv.js";import{R as c,r as g,g as xe}from"./index-Dl6G-zuu.js";import{c as _}from"./index-CDPnm3Yo.js";import{c as ne}from"./mapValues-BliEdlJP.js";import{t as _e,n as Ee}from"./now-CxJjrZE1.js";import"./iframe-DQsp86WF.js";import"../sb-preview/runtime.js";import"./react-18-Bamk9FSf.js";import"./index-D1_ZHIBm.js";import"./index-DMoHWj5j.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-Bw8VTzHM.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./isNativeReflectConstruct-CnNQtDHK.js";import"./uniq-0oAaZ0Sl.js";import"./index-BhaQ_E1E.js";import"./util-79FwwIvO.js";import"./index-DCjY2C6i.js";import"./index-DZ7m19C4.js";import"./index-DrFu-skq.js";function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function K(e,t){if(e==null)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t.indexOf(r=l[n])>=0||(a[r]=e[r]);return a}function B(e){var t=g.useRef(e),r=g.useRef(function(n){t.current&&t.current(n)});return t.current=e,r.current}var R=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=1),e>r?r:e<t?t:e},I=function(e){return"touches"in e},F=function(e){return e&&e.ownerDocument.defaultView||self},Y=function(e,t,r){var n=e.getBoundingClientRect(),a=I(t)?function(l,i){for(var o=0;o<l.length;o++)if(l[o].identifier===i)return l[o];return l[0]}(t.touches,r):t;return{left:R((a.pageX-(n.left+F(e).pageXOffset))/n.width),top:R((a.pageY-(n.top+F(e).pageYOffset))/n.height)}},J=function(e){!I(e)&&e.preventDefault()},q=c.memo(function(e){var t=e.onMove,r=e.onKey,n=K(e,["onMove","onKey"]),a=g.useRef(null),l=B(t),i=B(r),o=g.useRef(null),u=g.useRef(!1),s=g.useMemo(function(){var E=function(p){J(p),(I(p)?p.touches.length>0:p.buttons>0)&&a.current?l(Y(a.current,p,o.current)):w(!1)},N=function(){return w(!1)};function w(p){var h=u.current,x=F(a.current),k=p?x.addEventListener:x.removeEventListener;k(h?"touchmove":"mousemove",E),k(h?"touchend":"mouseup",N)}return[function(p){var h=p.nativeEvent,x=a.current;if(x&&(J(h),!function(j,S){return S&&!I(j)}(h,u.current)&&x)){if(I(h)){u.current=!0;var k=h.changedTouches||[];k.length&&(o.current=k[0].identifier)}x.focus(),l(Y(x,h,o.current)),w(!0)}},function(p){var h=p.which||p.keyCode;h<37||h>40||(p.preventDefault(),i({left:h===39?.05:h===37?-.05:0,top:h===40?.05:h===38?-.05:0}))},w]},[i,l]),m=s[0],d=s[1],f=s[2];return g.useEffect(function(){return f},[f]),c.createElement("div",$({},n,{onTouchStart:m,onMouseDown:m,className:"react-colorful__interactive",ref:a,onKeyDown:d,tabIndex:0,role:"slider"}))}),O=function(e){return e.filter(Boolean).join(" ")},A=function(e){var t=e.color,r=e.left,n=e.top,a=n===void 0?.5:n,l=O(["react-colorful__pointer",e.className]);return c.createElement("div",{className:l,style:{top:100*a+"%",left:100*r+"%"}},c.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},b=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=Math.pow(10,t)),Math.round(r*e)/r},we={grad:.9,turn:360,rad:360/(2*Math.PI)},Ce=function(e){return le(V(e))},V=function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?b(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?b(parseInt(e.substring(6,8),16)/255,2):1}},ye=function(e,t){return t===void 0&&(t="deg"),Number(e)*(we[t]||1)},ke=function(e){var t=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?$e({h:ye(t[1],t[2]),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)}):{h:0,s:0,v:0,a:1}},$e=function(e){var t=e.s,r=e.l;return{h:e.h,s:(t*=(r<50?r:100-r)/100)>0?2*t/(r+t)*100:0,v:r+t,a:e.a}},Ne=function(e){return Re(oe(e))},ae=function(e){var t=e.s,r=e.v,n=e.a,a=(200-t)*r/100;return{h:b(e.h),s:b(a>0&&a<200?t*r/100/(a<=100?a:200-a)*100:0),l:b(a/2),a:b(n,2)}},D=function(e){var t=ae(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},P=function(e){var t=ae(e);return"hsla("+t.h+", "+t.s+"%, "+t.l+"%, "+t.a+")"},oe=function(e){var t=e.h,r=e.s,n=e.v,a=e.a;t=t/360*6,r/=100,n/=100;var l=Math.floor(t),i=n*(1-r),o=n*(1-(t-l)*r),u=n*(1-(1-t+l)*r),s=l%6;return{r:b(255*[n,o,i,i,u,n][s]),g:b(255*[u,n,n,o,i,i][s]),b:b(255*[i,i,u,n,n,o][s]),a:b(a,2)}},Me=function(e){var t=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?le({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):{h:0,s:0,v:0,a:1}},H=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},Re=function(e){var t=e.r,r=e.g,n=e.b,a=e.a,l=a<1?H(b(255*a)):"";return"#"+H(t)+H(r)+H(n)+l},le=function(e){var t=e.r,r=e.g,n=e.b,a=e.a,l=Math.max(t,r,n),i=l-Math.min(t,r,n),o=i?l===t?(r-n)/i:l===r?2+(n-t)/i:4+(t-r)/i:0;return{h:b(60*(o<0?o+6:o)),s:b(l?i/l*100:0),v:b(l/255*100),a}},ie=c.memo(function(e){var t=e.hue,r=e.onChange,n=O(["react-colorful__hue",e.className]);return c.createElement("div",{className:n},c.createElement(q,{onMove:function(a){r({h:360*a.left})},onKey:function(a){r({h:R(t+360*a.left,0,360)})},"aria-label":"Hue","aria-valuenow":b(t),"aria-valuemax":"360","aria-valuemin":"0"},c.createElement(A,{className:"react-colorful__hue-pointer",left:t/360,color:D({h:t,s:100,v:100,a:1})})))}),ue=c.memo(function(e){var t=e.hsva,r=e.onChange,n={backgroundColor:D({h:t.h,s:100,v:100,a:1})};return c.createElement("div",{className:"react-colorful__saturation",style:n},c.createElement(q,{onMove:function(a){r({s:100*a.left,v:100-100*a.top})},onKey:function(a){r({s:R(t.s+100*a.left,0,100),v:R(t.v-100*a.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+b(t.s)+"%, Brightness "+b(t.v)+"%"},c.createElement(A,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:D(t)})))}),se=function(e,t){if(e===t)return!0;for(var r in e)if(e[r]!==t[r])return!1;return!0},ce=function(e,t){return e.replace(/\s/g,"")===t.replace(/\s/g,"")},Se=function(e,t){return e.toLowerCase()===t.toLowerCase()||se(V(e),V(t))};function fe(e,t,r){var n=B(r),a=g.useState(function(){return e.toHsva(t)}),l=a[0],i=a[1],o=g.useRef({color:t,hsva:l});g.useEffect(function(){if(!e.equal(t,o.current.color)){var s=e.toHsva(t);o.current={hsva:s,color:t},i(s)}},[t,e]),g.useEffect(function(){var s;se(l,o.current.hsva)||e.equal(s=e.fromHsva(l),o.current.color)||(o.current={hsva:l,color:s},n(s))},[l,e,n]);var u=g.useCallback(function(s){i(function(m){return Object.assign({},m,s)})},[]);return[l,u]}var Te=typeof window<"u"?g.useLayoutEffect:g.useEffect,Ie=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},Q=new Map,de=function(e){Te(function(){var t=e.current?e.current.ownerDocument:document;if(t!==void 0&&!Q.has(t)){var r=t.createElement("style");r.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,Q.set(t,r);var n=Ie();n&&r.setAttribute("nonce",n),t.head.appendChild(r)}},[])},Oe=function(e){var t=e.className,r=e.colorModel,n=e.color,a=n===void 0?r.defaultColor:n,l=e.onChange,i=K(e,["className","colorModel","color","onChange"]),o=g.useRef(null);de(o);var u=fe(r,a,l),s=u[0],m=u[1],d=O(["react-colorful",t]);return c.createElement("div",$({},i,{ref:o,className:d}),c.createElement(ue,{hsva:s,onChange:m}),c.createElement(ie,{hue:s.h,onChange:m,className:"react-colorful__last-control"}))},He={defaultColor:"000",toHsva:Ce,fromHsva:function(e){return Ne({h:e.h,s:e.s,v:e.v,a:1})},equal:Se},Le=function(e){return c.createElement(Oe,$({},e,{colorModel:He}))},ze=function(e){var t=e.className,r=e.hsva,n=e.onChange,a={backgroundImage:"linear-gradient(90deg, "+P(Object.assign({},r,{a:0}))+", "+P(Object.assign({},r,{a:1}))+")"},l=O(["react-colorful__alpha",t]),i=b(100*r.a);return c.createElement("div",{className:l},c.createElement("div",{className:"react-colorful__alpha-gradient",style:a}),c.createElement(q,{onMove:function(o){n({a:o.left})},onKey:function(o){n({a:R(r.a+o.left)})},"aria-label":"Alpha","aria-valuetext":i+"%","aria-valuenow":i,"aria-valuemin":"0","aria-valuemax":"100"},c.createElement(A,{className:"react-colorful__alpha-pointer",left:r.a,color:P(r)})))},he=function(e){var t=e.className,r=e.colorModel,n=e.color,a=n===void 0?r.defaultColor:n,l=e.onChange,i=K(e,["className","colorModel","color","onChange"]),o=g.useRef(null);de(o);var u=fe(r,a,l),s=u[0],m=u[1],d=O(["react-colorful",t]);return c.createElement("div",$({},i,{ref:o,className:d}),c.createElement(ue,{hsva:s,onChange:m}),c.createElement(ie,{hue:s.h,onChange:m}),c.createElement(ze,{hsva:s,onChange:m,className:"react-colorful__last-control"}))},Pe={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:ke,fromHsva:P,equal:ce},Xe=function(e){return c.createElement(he,$({},e,{colorModel:Pe}))},je={defaultColor:"rgba(0, 0, 0, 1)",toHsva:Me,fromHsva:function(e){var t=oe(e);return"rgba("+t.r+", "+t.g+", "+t.b+", "+t.a+")"},equal:ce},We=function(e){return c.createElement(he,$({},e,{colorModel:je}))},Be=ne,W=Ee,Z=_e,Fe="Expected a function",Ve=Math.max,De=Math.min;function Ge(e,t,r){var n,a,l,i,o,u,s=0,m=!1,d=!1,f=!0;if(typeof e!="function")throw new TypeError(Fe);t=Z(t)||0,Be(r)&&(m=!!r.leading,d="maxWait"in r,l=d?Ve(Z(r.maxWait)||0,t):l,f="trailing"in r?!!r.trailing:f);function E(v){var C=n,T=a;return n=a=void 0,s=v,i=e.apply(T,C),i}function N(v){return s=v,o=setTimeout(h,t),m?E(v):i}function w(v){var C=v-u,T=v-s,U=t-C;return d?De(U,l-T):U}function p(v){var C=v-u,T=v-s;return u===void 0||C>=t||C<0||d&&T>=l}function h(){var v=W();if(p(v))return x(v);o=setTimeout(h,w(v))}function x(v){return o=void 0,f&&n?E(v):(n=a=void 0,i)}function k(){o!==void 0&&clearTimeout(o),s=0,n=u=a=o=void 0}function j(){return o===void 0?i:x(W())}function S(){var v=W(),C=p(v);if(n=arguments,a=this,u=v,C){if(o===void 0)return N(u);if(d)return clearTimeout(o),o=setTimeout(h,t),E(u)}return o===void 0&&(o=setTimeout(h,t)),i}return S.cancel=k,S.flush=j,S}var Ke=Ge,qe=Ke,Ae=ne,Ue="Expected a function";function Ye(e,t,r){var n=!0,a=!0;if(typeof e!="function")throw new TypeError(Ue);return Ae(r)&&(n="leading"in r?!!r.leading:n,a="trailing"in r?!!r.trailing:a),qe(e,t,{leading:n,maxWait:t,trailing:a})}var Je=Ye;const Qe=xe(Je);var Ze=y.div({position:"relative",maxWidth:250}),et=y(re)({position:"absolute",zIndex:1,top:4,left:4}),tt=y.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),rt=y(me)(({theme:e})=>({fontFamily:e.typography.fonts.base})),nt=y.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),at=y.div(({theme:e,active:t})=>({width:16,height:16,boxShadow:t?`${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`:`${e.appBorderColor} 0 0 0 1px inset`,borderRadius:e.appBorderRadius})),ot=`url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,ee=({value:e,active:t,onClick:r,style:n,...a})=>{let l=`linear-gradient(${e}, ${e}), ${ot}, linear-gradient(#fff, #fff)`;return c.createElement(at,{...a,active:t,onClick:r,style:{...n,backgroundImage:l}})},lt=y(ve.Input)(({theme:e})=>({width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:e.typography.fonts.base})),it=y(pe)(({theme:e})=>({position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:e.input.color})),ge=(e=>(e.RGB="rgb",e.HSL="hsl",e.HEX="hex",e))(ge||{}),L=Object.values(ge),ut=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,st=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,ct=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,G=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,ft=/^\s*#?([0-9a-f]{3})\s*$/i,dt={hex:Le,rgb:We,hsl:Xe},z={hex:"transparent",rgb:"rgba(0, 0, 0, 0)",hsl:"hsla(0, 0%, 0%, 0)"},te=e=>{let t=e==null?void 0:e.match(ut);if(!t)return[0,0,0,1];let[,r,n,a,l=1]=t;return[r,n,a,l].map(Number)},M=e=>{if(!e)return;let t=!0;if(st.test(e)){let[i,o,u,s]=te(e),[m,d,f]=_.rgb.hsl([i,o,u])||[0,0,0];return{valid:t,value:e,keyword:_.rgb.keyword([i,o,u]),colorSpace:"rgb",rgb:e,hsl:`hsla(${m}, ${d}%, ${f}%, ${s})`,hex:`#${_.rgb.hex([i,o,u]).toLowerCase()}`}}if(ct.test(e)){let[i,o,u,s]=te(e),[m,d,f]=_.hsl.rgb([i,o,u])||[0,0,0];return{valid:t,value:e,keyword:_.hsl.keyword([i,o,u]),colorSpace:"hsl",rgb:`rgba(${m}, ${d}, ${f}, ${s})`,hsl:e,hex:`#${_.hsl.hex([i,o,u]).toLowerCase()}`}}let r=e.replace("#",""),n=_.keyword.rgb(r)||_.hex.rgb(r),a=_.rgb.hsl(n),l=e;if(/[^#a-f0-9]/i.test(e)?l=r:G.test(e)&&(l=`#${r}`),l.startsWith("#"))t=G.test(l);else try{_.keyword.hex(l)}catch{t=!1}return{valid:t,value:l,keyword:_.rgb.keyword(n),colorSpace:"hex",rgb:`rgba(${n[0]}, ${n[1]}, ${n[2]}, 1)`,hsl:`hsla(${a[0]}, ${a[1]}%, ${a[2]}%, 1)`,hex:l}},ht=(e,t,r)=>{if(!e||!(t!=null&&t.valid))return z[r];if(r!=="hex")return(t==null?void 0:t[r])||z[r];if(!t.hex.startsWith("#"))try{return`#${_.keyword.hex(t.hex)}`}catch{return z.hex}let n=t.hex.match(ft);if(!n)return G.test(t.hex)?t.hex:z.hex;let[a,l,i]=n[1].split("");return`#${a}${a}${l}${l}${i}${i}`},gt=(e,t)=>{let[r,n]=g.useState(e||""),[a,l]=g.useState(()=>M(r)),[i,o]=g.useState((a==null?void 0:a.colorSpace)||"hex");g.useEffect(()=>{let d=e||"",f=M(d);n(d),l(f),o((f==null?void 0:f.colorSpace)||"hex")},[e]);let u=g.useMemo(()=>ht(r,a,i).toLowerCase(),[r,a,i]),s=g.useCallback(d=>{let f=M(d),E=(f==null?void 0:f.value)||d||"";n(E),E===""&&(l(void 0),t(void 0)),f&&(l(f),o(f.colorSpace),t(f.value))},[t]),m=g.useCallback(()=>{let d=L.indexOf(i)+1;d>=L.length&&(d=0),o(L[d]);let f=(a==null?void 0:a[L[d]])||"";n(f),t(f)},[a,i,t]);return{value:r,realValue:u,updateValue:s,color:a,colorSpace:i,cycleColorSpace:m}},X=e=>e.replace(/\s*/,"").toLowerCase(),mt=(e,t,r)=>{let[n,a]=g.useState(t!=null&&t.valid?[t]:[]);g.useEffect(()=>{t===void 0&&a([])},[t]);let l=g.useMemo(()=>(e||[]).map(o=>typeof o=="string"?M(o):o.title?{...M(o.color),keyword:o.title}:M(o.color)).concat(n).filter(Boolean).slice(-27),[e,n]),i=g.useCallback(o=>{o!=null&&o.valid&&(l.some(u=>X(u[r])===X(o[r]))||a(u=>u.concat(o)))},[r,l]);return{presets:l,addPreset:i}},vt=({name:e,value:t,onChange:r,onFocus:n,onBlur:a,presetColors:l,startOpen:i=!1})=>{let o=g.useCallback(Qe(r,200),[r]),{value:u,realValue:s,updateValue:m,color:d,colorSpace:f,cycleColorSpace:E}=gt(t,o),{presets:N,addPreset:w}=mt(l,d,f),p=dt[f];return c.createElement(Ze,null,c.createElement(et,{startOpen:i,closeOnOutsideClick:!0,onVisibleChange:()=>w(d),tooltip:c.createElement(tt,null,c.createElement(p,{color:s==="transparent"?"#000000":s,onChange:m,onFocus:n,onBlur:a}),N.length>0&&c.createElement(nt,null,N.map((h,x)=>c.createElement(re,{key:`${h.value}-${x}`,hasChrome:!1,tooltip:c.createElement(rt,{note:h.keyword||h.value})},c.createElement(ee,{value:h[f],active:d&&X(h[f])===X(d[f]),onClick:()=>m(h.value)})))))},c.createElement(ee,{value:s,style:{margin:4}})),c.createElement(lt,{id:be(e),value:u,onChange:h=>m(h.target.value),onFocus:h=>h.target.select(),placeholder:"Choose color..."}),u?c.createElement(it,{onClick:E}):null)},jt=vt;export{vt as ColorControl,jt as default};
