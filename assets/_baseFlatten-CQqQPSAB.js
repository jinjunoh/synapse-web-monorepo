import{a as t}from"./_getAllKeys-D4jqnHbs.js";import{S as b,a as e}from"./isArray-D3Xc0Edl.js";import{b as h}from"./_Map-W_LbVzGG.js";var s=b?b.isConcatSpreadable:void 0;function y(n){return e(n)||h(n)||!!(s&&n&&n[s])}function S(n,f,a,m,o){var r=-1,g=n.length;for(a||(a=y),o||(o=[]);++r<g;){var i=n[r];f>0&&a(i)?f>1?S(i,f-1,a,m,o):t(o,i):m||(o[o.length]=i)}return o}export{S as b};
