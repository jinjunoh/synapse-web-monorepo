import{g as be}from"./_commonjsHelpers-de833af9.js";import{f as _e,g as Je,k as $e,c as F,h as me,j as en,l as nn,e as tn,n as Ae,o as rn,b as Ie,s as an,p as on,q as sn,r as cn,t as z,a as xe,u as ke,v as Te,w as ln,x as un,y as fn,i as gn,z as pn,A as Oe,B as yn,C as vn,D as Se,E as dn,F as hn,G as bn}from"./mapValues-c1561695.js";import{r as M}from"./index-76fb7be0.js";function _n(e,t){for(var r=-1,o=e==null?0:e.length;++r<o&&t(e[r],r,e)!==!1;);return e}var $n=_n,mn=_e,An=Je,In=Object.prototype,xn=In.hasOwnProperty;function kn(e,t,r){var o=e[t];(!(xn.call(e,t)&&An(o,r))||r===void 0&&!(t in e))&&mn(e,t,r)}var Z=kn,Tn=Z,On=_e;function Sn(e,t,r,o){var l=!r;r||(r={});for(var u=-1,c=t.length;++u<c;){var i=t[u],f=o?o(r[i],e[i],i,r,e):void 0;f===void 0&&(f=e[i]),l?On(r,i,f):Tn(r,i,f)}return r}var G=Sn,wn=G,jn=$e;function Cn(e,t){return e&&wn(t,jn(t),e)}var En=Cn;function Ln(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var Mn=Ln,Bn=F,Hn=me,Pn=Mn,Fn=Object.prototype,Gn=Fn.hasOwnProperty;function Un(e){if(!Bn(e))return Pn(e);var t=Hn(e),r=[];for(var o in e)o=="constructor"&&(t||!Gn.call(e,o))||r.push(o);return r}var Nn=Un,Dn=en,Rn=Nn,Kn=nn;function Wn(e){return Kn(e)?Dn(e,!0):Rn(e)}var V=Wn,qn=G,Xn=V;function zn(e,t){return e&&qn(t,Xn(t),e)}var Zn=zn,P={exports:{}};P.exports;(function(e,t){var r=tn,o=t&&!t.nodeType&&t,l=o&&!0&&e&&!e.nodeType&&e,u=l&&l.exports===o,c=u?r.Buffer:void 0,i=c?c.allocUnsafe:void 0;function f(v,_){if(_)return v.slice();var $=v.length,k=i?i($):new v.constructor($);return v.copy(k),k}e.exports=f})(P,P.exports);var Vn=P.exports;function Yn(e,t){var r=-1,o=e.length;for(t||(t=Array(o));++r<o;)t[r]=e[r];return t}var Qn=Yn,Jn=G,et=Ae;function nt(e,t){return Jn(e,et(e),t)}var tt=nt,rt=rn,at=Ie,ot=Ae,st=an,it=Object.getOwnPropertySymbols,ct=it?function(e){for(var t=[];e;)rt(t,ot(e)),e=at(e);return t}:st,we=ct,lt=G,ut=we;function ft(e,t){return lt(e,ut(e),t)}var gt=ft,pt=on,yt=we,vt=V;function dt(e){return pt(e,vt,yt)}var ht=dt,bt=Object.prototype,_t=bt.hasOwnProperty;function $t(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&_t.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var mt=$t,ne=sn;function At(e){var t=new e.constructor(e.byteLength);return new ne(t).set(new ne(e)),t}var Y=At,It=Y;function xt(e,t){var r=t?It(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var kt=xt,Tt=/\w*$/;function Ot(e){var t=new e.constructor(e.source,Tt.exec(e));return t.lastIndex=e.lastIndex,t}var St=Ot,te=cn,re=te?te.prototype:void 0,ae=re?re.valueOf:void 0;function wt(e){return ae?Object(ae.call(e)):{}}var jt=wt,Ct=Y;function Et(e,t){var r=t?Ct(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var Lt=Et,Mt=Y,Bt=kt,Ht=St,Pt=jt,Ft=Lt,Gt="[object Boolean]",Ut="[object Date]",Nt="[object Map]",Dt="[object Number]",Rt="[object RegExp]",Kt="[object Set]",Wt="[object String]",qt="[object Symbol]",Xt="[object ArrayBuffer]",zt="[object DataView]",Zt="[object Float32Array]",Vt="[object Float64Array]",Yt="[object Int8Array]",Qt="[object Int16Array]",Jt="[object Int32Array]",er="[object Uint8Array]",nr="[object Uint8ClampedArray]",tr="[object Uint16Array]",rr="[object Uint32Array]";function ar(e,t,r){var o=e.constructor;switch(t){case Xt:return Mt(e);case Gt:case Ut:return new o(+e);case zt:return Bt(e,r);case Zt:case Vt:case Yt:case Qt:case Jt:case er:case nr:case tr:case rr:return Ft(e,r);case Nt:return new o;case Dt:case Wt:return new o(e);case Rt:return Ht(e);case Kt:return new o;case qt:return Pt(e)}}var or=ar,sr=F,oe=Object.create,ir=function(){function e(){}return function(t){if(!sr(t))return{};if(oe)return oe(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}(),cr=ir,lr=cr,ur=Ie,fr=me;function gr(e){return typeof e.constructor=="function"&&!fr(e)?lr(ur(e)):{}}var pr=gr,yr=z,vr=xe,dr="[object Map]";function hr(e){return vr(e)&&yr(e)==dr}var br=hr,_r=br,$r=Te,se=ke,ie=se&&se.isMap,mr=ie?$r(ie):_r,Ar=mr,Ir=z,xr=xe,kr="[object Set]";function Tr(e){return xr(e)&&Ir(e)==kr}var Or=Tr,Sr=Or,wr=Te,ce=ke,le=ce&&ce.isSet,jr=le?wr(le):Sr,Cr=jr,Er=ln,Lr=$n,Mr=Z,Br=En,Hr=Zn,Pr=Vn,Fr=Qn,Gr=tt,Ur=gt,Nr=fn,Dr=ht,Rr=z,Kr=mt,Wr=or,qr=pr,Xr=gn,zr=un,Zr=Ar,Vr=F,Yr=Cr,Qr=$e,Jr=V,ea=1,na=2,ta=4,je="[object Arguments]",ra="[object Array]",aa="[object Boolean]",oa="[object Date]",sa="[object Error]",Ce="[object Function]",ia="[object GeneratorFunction]",ca="[object Map]",la="[object Number]",Ee="[object Object]",ua="[object RegExp]",fa="[object Set]",ga="[object String]",pa="[object Symbol]",ya="[object WeakMap]",va="[object ArrayBuffer]",da="[object DataView]",ha="[object Float32Array]",ba="[object Float64Array]",_a="[object Int8Array]",$a="[object Int16Array]",ma="[object Int32Array]",Aa="[object Uint8Array]",Ia="[object Uint8ClampedArray]",xa="[object Uint16Array]",ka="[object Uint32Array]",h={};h[je]=h[ra]=h[va]=h[da]=h[aa]=h[oa]=h[ha]=h[ba]=h[_a]=h[$a]=h[ma]=h[ca]=h[la]=h[Ee]=h[ua]=h[fa]=h[ga]=h[pa]=h[Aa]=h[Ia]=h[xa]=h[ka]=!0;h[sa]=h[Ce]=h[ya]=!1;function B(e,t,r,o,l,u){var c,i=t&ea,f=t&na,v=t&ta;if(r&&(c=l?r(e,o,l,u):r(e)),c!==void 0)return c;if(!Vr(e))return e;var _=Xr(e);if(_){if(c=Kr(e),!i)return Fr(e,c)}else{var $=Rr(e),k=$==Ce||$==ia;if(zr(e))return Pr(e,i);if($==Ee||$==je||k&&!l){if(c=f||k?{}:qr(e),!i)return f?Ur(e,Hr(c,e)):Gr(e,Br(c,e))}else{if(!h[$])return l?e:{};c=Wr(e,$,i)}}u||(u=new Er);var n=u.get(e);if(n)return n;u.set(e,c),Yr(e)?e.forEach(function(g){c.add(B(g,t,r,g,e,u))}):Zr(e)&&e.forEach(function(g,p){c.set(p,B(g,t,r,p,e,u))});var s=v?f?Dr:Nr:f?Jr:Qr,a=_?void 0:s(e);return Lr(a||e,function(g,p){a&&(p=g,g=e[p]),Mr(c,p,B(g,t,r,p,e,u))}),c}var Ta=B;function Oa(e,t,r,o){for(var l=e.length,u=r+(o?1:-1);o?u--:++u<l;)if(t(e[u],u,e))return u;return-1}var Sa=Oa;function wa(e){return e!==e}var ja=wa;function Ca(e,t,r){for(var o=r-1,l=e.length;++o<l;)if(e[o]===t)return o;return-1}var Ea=Ca,La=Sa,Ma=ja,Ba=Ea;function Ha(e,t,r){return t===t?Ba(e,t,r):La(e,Ma,r)}var Pa=Ha,Fa=Pa;function Ga(e,t){var r=e==null?0:e.length;return!!r&&Fa(e,t,0)>-1}var Ua=Ga;function Na(e,t,r){for(var o=-1,l=e==null?0:e.length;++o<l;)if(r(t,e[o]))return!0;return!1}var Da=Na;function Ra(){}var Ka=Ra,N=pn,Wa=Ka,qa=Oe,Xa=1/0,za=N&&1/qa(new N([,-0]))[1]==Xa?function(e){return new N(e)}:Wa,Za=za,Va=yn,Ya=Ua,Qa=Da,Ja=vn,eo=Za,no=Oe,to=200;function ro(e,t,r){var o=-1,l=Ya,u=e.length,c=!0,i=[],f=i;if(r)c=!1,l=Qa;else if(u>=to){var v=t?null:eo(e);if(v)return no(v);c=!1,l=Ja,f=new Va}else f=t?[]:i;e:for(;++o<u;){var _=e[o],$=t?t(_):_;if(_=r||_!==0?_:0,c&&$===$){for(var k=f.length;k--;)if(f[k]===$)continue e;t&&f.push($),i.push(_)}else l(f,$,r)||(f!==i&&f.push($),i.push(_))}return i}var ao=ro,oo=Ta,so=1,io=4;function co(e){return oo(e,so|io)}var lo=co;const js=be(lo);var uo=Z,fo=Se,go=dn,ue=F,po=hn;function yo(e,t,r,o){if(!ue(e))return e;t=fo(t,e);for(var l=-1,u=t.length,c=u-1,i=e;i!=null&&++l<u;){var f=po(t[l]),v=r;if(f==="__proto__"||f==="constructor"||f==="prototype")return e;if(l!=c){var _=i[f];v=o?o(_,f,i):void 0,v===void 0&&(v=ue(_)?_:go(t[l+1])?[]:{})}uo(i,f,v),i=i[f]}return e}var vo=yo,ho=bn,bo=vo,_o=Se;function $o(e,t,r){for(var o=-1,l=t.length,u={};++o<l;){var c=t[o],i=ho(e,c);r(i,c)&&bo(u,_o(c,e),i)}return u}var Cs=$o,mo=ao;function Ao(e){return e&&e.length?mo(e):[]}var Io=Ao;const Es=be(Io);function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},C.apply(this,arguments)}const xo=["children","options"],fe=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce((e,t)=>(e[t.toLowerCase()]=t,e),{for:"htmlFor"}),ge={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},ko=["style","script"],To=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,Oo=/mailto:/i,So=/\n{2,}$/,Le=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,wo=/^ *> ?/gm,jo=/^ {2,}\n/,Co=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,Me=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,Be=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,Eo=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,Lo=/^(?:\n *)*\n/,Mo=/\r\n?/g,Bo=/^\[\^([^\]]+)](:.*)\n/,Ho=/^\[\^([^\]]+)]/,Po=/\f/g,Fo=/^\s*?\[(x|\s)\]/,He=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,Pe=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,Fe=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,q=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,Go=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,Ge=/^<!--[\s\S]*?(?:-->)/,Uo=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,X=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,No=/^\{.*\}$/,Do=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,Ro=/^<([^ >]+@[^ >]+)>/,Ko=/^<([^ >]+:\/[^ >]+)>/,Wo=/-([a-z])?/gi,Ue=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,qo=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,Xo=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,zo=/^\[([^\]]*)\] ?\[([^\]]*)\]/,Zo=/(\[|\])/g,Vo=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,Yo=/\t/g,Qo=/^ *\| */,Jo=/(^ *\||\| *$)/g,es=/ *$/,ns=/^ *:-+: *$/,ts=/^ *:-+ *$/,rs=/^ *-+: *$/,as=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,os=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,ss=/^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,is=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,cs=/^\\([^0-9A-Za-z\s])/,ls=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,us=/^\n+/,fs=/^([ \t]*)/,gs=/\\([^\\])/g,pe=/ *\n+$/,ps=/(?:^|\n)( *)$/,Q="(?:\\d+\\.)",J="(?:[*+-])";function Ne(e){return"( *)("+(e===1?Q:J)+") +"}const De=Ne(1),Re=Ne(2);function Ke(e){return new RegExp("^"+(e===1?De:Re))}const ys=Ke(1),vs=Ke(2);function We(e){return new RegExp("^"+(e===1?De:Re)+"[^\\n]*(?:\\n(?!\\1"+(e===1?Q:J)+" )[^\\n]*)*(\\n|$)","gm")}const qe=We(1),Xe=We(2);function ze(e){const t=e===1?Q:J;return new RegExp("^( *)("+t+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+t+" (?!"+t+" ))\\n*|\\s*\\n*$)")}const Ze=ze(1),Ve=ze(2);function ye(e,t){const r=t===1,o=r?Ze:Ve,l=r?qe:Xe,u=r?ys:vs;return{t(c,i,f){const v=ps.exec(f);return v&&(i.o||!i._&&!i.u)?o.exec(c=v[1]+c):null},i:y.HIGH,l(c,i,f){const v=r?+c[2]:void 0,_=c[0].replace(So,`
`).match(l);let $=!1;return{p:_.map(function(k,n){const s=u.exec(k)[0].length,a=new RegExp("^ {1,"+s+"}","gm"),g=k.replace(a,"").replace(u,""),p=n===_.length-1,b=g.indexOf(`

`)!==-1||p&&$;$=b;const d=f._,x=f.o;let I;f.o=!0,b?(f._=!1,I=g.replace(pe,`

`)):(f._=!0,I=g.replace(pe,""));const T=i(I,f);return f._=d,f.o=x,T}),m:r,g:v}},h:(c,i,f)=>e(c.m?"ol":"ul",{key:f.k,start:c.g},c.p.map(function(v,_){return e("li",{key:_},i(v,f))}))}}const ds=/^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,hs=/^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,Ye=[Le,Me,Be,He,Fe,Pe,Ge,Ue,qe,Ze,Xe,Ve],bs=[...Ye,/^[^\n]+(?:  \n|\n{2,})/,q,X];function _s(e){return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function $s(e){return rs.test(e)?"right":ns.test(e)?"center":ts.test(e)?"left":null}function ve(e,t,r){const o=r.$;r.$=!0;const l=t(e.trim(),r);r.$=o;let u=[[]];return l.forEach(function(c,i){c.type==="tableSeparator"?i!==0&&i!==l.length-1&&u.push([]):(c.type!=="text"||l[i+1]!=null&&l[i+1].type!=="tableSeparator"||(c.v=c.v.replace(es,"")),u[u.length-1].push(c))}),u}function ms(e,t,r){r._=!0;const o=ve(e[1],t,r),l=e[2].replace(Jo,"").split("|").map($s),u=function(c,i,f){return c.trim().split(`
`).map(function(v){return ve(v,i,f)})}(e[3],t,r);return r._=!1,{S:l,A:u,L:o,type:"table"}}function de(e,t){return e.S[t]==null?{}:{textAlign:e.S[t]}}function w(e){return function(t,r){return r._?e.exec(t):null}}function j(e){return function(t,r){return r._||r.u?e.exec(t):null}}function O(e){return function(t,r){return r._||r.u?null:e.exec(t)}}function L(e){return function(t){return e.exec(t)}}function As(e,t,r){if(t._||t.u||r&&!r.endsWith(`
`))return null;let o="";e.split(`
`).every(u=>!Ye.some(c=>c.test(u))&&(o+=u+`
`,u.trim()));const l=o.trimEnd();return l==""?null:[o,l]}function E(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return}catch{return null}return e}function he(e){return e.replace(gs,"$1")}function H(e,t,r){const o=r._||!1,l=r.u||!1;r._=!0,r.u=!0;const u=e(t,r);return r._=o,r.u=l,u}function Is(e,t,r){const o=r._||!1,l=r.u||!1;r._=!1,r.u=!0;const u=e(t,r);return r._=o,r.u=l,u}function xs(e,t,r){return r._=!1,e(t,r)}const D=(e,t,r)=>({v:H(t,e[1],r)});function R(){return{}}function K(){return null}function ks(...e){return e.filter(Boolean).join(" ")}function W(e,t,r){let o=e;const l=t.split(".");for(;l.length&&(o=o[l[0]],o!==void 0);)l.shift();return o||r}var y;function Ts(e,t={}){t.overrides=t.overrides||{},t.slugify=t.slugify||_s,t.namedCodesToUnicode=t.namedCodesToUnicode?C({},ge,t.namedCodesToUnicode):ge;const r=t.createElement||M.createElement;function o(n,s,...a){const g=W(t.overrides,`${n}.props`,{});return r(function(p,b){const d=W(b,p);return d?typeof d=="function"||typeof d=="object"&&"render"in d?d:W(b,`${p}.component`,p):p}(n,t.overrides),C({},s,g,{className:ks(s==null?void 0:s.className,g.className)||void 0}),...a)}function l(n){let s=!1;t.forceInline?s=!0:t.forceBlock||(s=Vo.test(n)===!1);const a=_(v(s?n:`${n.trimEnd().replace(us,"")}

`,{_:s}));for(;typeof a[a.length-1]=="string"&&!a[a.length-1].trim();)a.pop();if(t.wrapper===null)return a;const g=t.wrapper||(s?"span":"div");let p;if(a.length>1||t.forceWrapper)p=a;else{if(a.length===1)return p=a[0],typeof p=="string"?o("span",{key:"outer"},p):p;p=null}return M.createElement(g,{key:"outer"},p)}function u(n){const s=n.match(To);return s?s.reduce(function(a,g,p){const b=g.indexOf("=");if(b!==-1){const d=function(m){return m.indexOf("-")!==-1&&m.match(Uo)===null&&(m=m.replace(Wo,function(A,S){return S.toUpperCase()})),m}(g.slice(0,b)).trim(),x=function(m){const A=m[0];return(A==='"'||A==="'")&&m.length>=2&&m[m.length-1]===A?m.slice(1,-1):m}(g.slice(b+1).trim()),I=fe[d]||d,T=a[I]=function(m,A){return m==="style"?A.split(/;\s?/).reduce(function(S,U){const ee=U.slice(0,U.indexOf(":"));return S[ee.replace(/(-[a-z])/g,Qe=>Qe[1].toUpperCase())]=U.slice(ee.length+1).trim(),S},{}):m==="href"?E(A):(A.match(No)&&(A=A.slice(1,A.length-1)),A==="true"||A!=="false"&&A)}(d,x);typeof T=="string"&&(q.test(T)||X.test(T))&&(a[I]=M.cloneElement(l(T.trim()),{key:p}))}else g!=="style"&&(a[fe[g]||g]=!0);return a},{}):null}const c=[],i={},f={blockQuote:{t:O(Le),i:y.HIGH,l:(n,s,a)=>({v:s(n[0].replace(wo,""),a)}),h:(n,s,a)=>o("blockquote",{key:a.k},s(n.v,a))},breakLine:{t:L(jo),i:y.HIGH,l:R,h:(n,s,a)=>o("br",{key:a.k})},breakThematic:{t:O(Co),i:y.HIGH,l:R,h:(n,s,a)=>o("hr",{key:a.k})},codeBlock:{t:O(Be),i:y.MAX,l:n=>({v:n[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),M:void 0}),h:(n,s,a)=>o("pre",{key:a.k},o("code",C({},n.O,{className:n.M?`lang-${n.M}`:""}),n.v))},codeFenced:{t:O(Me),i:y.MAX,l:n=>({O:u(n[3]||""),v:n[4],M:n[2]||void 0,type:"codeBlock"})},codeInline:{t:j(Eo),i:y.LOW,l:n=>({v:n[2]}),h:(n,s,a)=>o("code",{key:a.k},n.v)},footnote:{t:O(Bo),i:y.MAX,l:n=>(c.push({I:n[2],j:n[1]}),{}),h:K},footnoteReference:{t:w(Ho),i:y.HIGH,l:n=>({v:n[1],B:`#${t.slugify(n[1])}`}),h:(n,s,a)=>o("a",{key:a.k,href:E(n.B)},o("sup",{key:a.k},n.v))},gfmTask:{t:w(Fo),i:y.HIGH,l:n=>({R:n[1].toLowerCase()==="x"}),h:(n,s,a)=>o("input",{checked:n.R,key:a.k,readOnly:!0,type:"checkbox"})},heading:{t:O(t.enforceAtxHeadings?Pe:He),i:y.HIGH,l:(n,s,a)=>({v:H(s,n[2],a),T:t.slugify(n[2]),C:n[1].length}),h:(n,s,a)=>o(`h${n.C}`,{id:n.T,key:a.k},s(n.v,a))},headingSetext:{t:O(Fe),i:y.MAX,l:(n,s,a)=>({v:H(s,n[1],a),C:n[2]==="="?1:2,type:"heading"})},htmlComment:{t:L(Ge),i:y.HIGH,l:()=>({}),h:K},image:{t:j(hs),i:y.HIGH,l:n=>({D:n[1],B:he(n[2]),F:n[3]}),h:(n,s,a)=>o("img",{key:a.k,alt:n.D||void 0,title:n.F||void 0,src:E(n.B)})},link:{t:w(ds),i:y.LOW,l:(n,s,a)=>({v:Is(s,n[1],a),B:he(n[2]),F:n[3]}),h:(n,s,a)=>o("a",{key:a.k,href:E(n.B),title:n.F},s(n.v,a))},linkAngleBraceStyleDetector:{t:w(Ko),i:y.MAX,l:n=>({v:[{v:n[1],type:"text"}],B:n[1],type:"link"})},linkBareUrlDetector:{t:(n,s)=>s.N?null:w(Do)(n,s),i:y.MAX,l:n=>({v:[{v:n[1],type:"text"}],B:n[1],F:void 0,type:"link"})},linkMailtoDetector:{t:w(Ro),i:y.MAX,l(n){let s=n[1],a=n[1];return Oo.test(a)||(a="mailto:"+a),{v:[{v:s.replace("mailto:",""),type:"text"}],B:a,type:"link"}}},orderedList:ye(o,1),unorderedList:ye(o,2),newlineCoalescer:{t:O(Lo),i:y.LOW,l:R,h:()=>`
`},paragraph:{t:As,i:y.LOW,l:D,h:(n,s,a)=>o("p",{key:a.k},s(n.v,a))},ref:{t:w(qo),i:y.MAX,l:n=>(i[n[1]]={B:n[2],F:n[4]},{}),h:K},refImage:{t:j(Xo),i:y.MAX,l:n=>({D:n[1]||void 0,P:n[2]}),h:(n,s,a)=>o("img",{key:a.k,alt:n.D,src:E(i[n.P].B),title:i[n.P].F})},refLink:{t:w(zo),i:y.MAX,l:(n,s,a)=>({v:s(n[1],a),Z:s(n[0].replace(Zo,"\\$1"),a),P:n[2]}),h:(n,s,a)=>i[n.P]?o("a",{key:a.k,href:E(i[n.P].B),title:i[n.P].F},s(n.v,a)):o("span",{key:a.k},s(n.Z,a))},table:{t:O(Ue),i:y.HIGH,l:ms,h:(n,s,a)=>o("table",{key:a.k},o("thead",null,o("tr",null,n.L.map(function(g,p){return o("th",{key:p,style:de(n,p)},s(g,a))}))),o("tbody",null,n.A.map(function(g,p){return o("tr",{key:p},g.map(function(b,d){return o("td",{key:d,style:de(n,d)},s(b,a))}))})))},tableSeparator:{t:function(n,s){return s.$?(s._=!0,Qo.exec(n)):null},i:y.HIGH,l:function(){return{type:"tableSeparator"}},h:()=>" | "},text:{t:L(ls),i:y.MIN,l:n=>({v:n[0].replace(Go,(s,a)=>t.namedCodesToUnicode[a]?t.namedCodesToUnicode[a]:s)}),h:n=>n.v},textBolded:{t:j(as),i:y.MED,l:(n,s,a)=>({v:s(n[2],a)}),h:(n,s,a)=>o("strong",{key:a.k},s(n.v,a))},textEmphasized:{t:j(os),i:y.LOW,l:(n,s,a)=>({v:s(n[2],a)}),h:(n,s,a)=>o("em",{key:a.k},s(n.v,a))},textEscaped:{t:j(cs),i:y.HIGH,l:n=>({v:n[1],type:"text"})},textMarked:{t:j(ss),i:y.LOW,l:D,h:(n,s,a)=>o("mark",{key:a.k},s(n.v,a))},textStrikethroughed:{t:j(is),i:y.LOW,l:D,h:(n,s,a)=>o("del",{key:a.k},s(n.v,a))}};t.disableParsingRawHTML!==!0&&(f.htmlBlock={t:L(q),i:y.HIGH,l(n,s,a){const[,g]=n[3].match(fs),p=new RegExp(`^${g}`,"gm"),b=n[3].replace(p,""),d=(x=b,bs.some(A=>A.test(x))?xs:H);var x;const I=n[1].toLowerCase(),T=ko.indexOf(I)!==-1;a.N=a.N||I==="a";const m=T?n[3]:d(s,b,a);return a.N=!1,{O:u(n[2]),v:m,G:T,H:T?I:n[1]}},h:(n,s,a)=>o(n.H,C({key:a.k},n.O),n.G?n.v:s(n.v,a))},f.htmlSelfClosing={t:L(X),i:y.HIGH,l:n=>({O:u(n[2]||""),H:n[1]}),h:(n,s,a)=>o(n.H,C({},n.O,{key:a.k}))});const v=function(n){let s=Object.keys(n);function a(g,p){let b=[],d="";for(;g;){let x=0;for(;x<s.length;){const I=s[x],T=n[I],m=T.t(g,p,d);if(m){const A=m[0];g=g.substring(A.length);const S=T.l(m,a,p);S.type==null&&(S.type=I),b.push(S),d=A;break}x++}}return b}return s.sort(function(g,p){let b=n[g].i,d=n[p].i;return b!==d?b-d:g<p?-1:1}),function(g,p){return a(function(b){return b.replace(Mo,`
`).replace(Po,"").replace(Yo,"    ")}(g),p)}}(f),_=($=function(n){return function(s,a,g){return n[s.type].h(s,a,g)}}(f),function n(s,a={}){if(Array.isArray(s)){const g=a.k,p=[];let b=!1;for(let d=0;d<s.length;d++){a.k=d;const x=n(s[d],a),I=typeof x=="string";I&&b?p[p.length-1]+=x:x!==null&&p.push(x),b=I}return a.k=g,p}return $(s,n,a)});var $;const k=l(e);return c.length?o("div",null,k,o("footer",{key:"footer"},c.map(function(n){return o("div",{id:t.slugify(n.j),key:n.j},n.j,_(v(n.I,{_:!0})))}))):k}(function(e){e[e.MAX=0]="MAX",e[e.HIGH=1]="HIGH",e[e.MED=2]="MED",e[e.LOW=3]="LOW",e[e.MIN=4]="MIN"})(y||(y={}));const Ls=e=>{let{children:t,options:r}=e,o=function(l,u){if(l==null)return{};var c,i,f={},v=Object.keys(l);for(i=0;i<v.length;i++)u.indexOf(c=v[i])>=0||(f[c]=l[c]);return f}(e,xo);return M.cloneElement(Ts(t,r),o)};export{Ls as M,Cs as _,ht as a,Ta as b,js as c,$n as d,cr as e,ao as f,Sa as g,G as h,Vn as i,Lt as j,V as k,Qn as l,pr as m,Z as n,lo as o,vo as p,Ua as q,Da as r,Io as s,Pa as t,Es as u};
//# sourceMappingURL=index.modern-42b48b42.js.map
