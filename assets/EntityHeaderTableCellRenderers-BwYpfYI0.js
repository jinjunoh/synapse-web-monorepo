import{j as r}from"./jsx-runtime-Du8NFWEI.js";import{E as m}from"./EntityLink-BTfFERJB.js";import{P as C}from"./getEndpoint-CjoHA800.js";import{L as g}from"./Link-EkQ0dGSu.js";import{T as d}from"./Typography-B88_J_TK.js";import{C as p}from"./Checkbox-CXdDetMK.js";function c(e){const{cell:t}=e,{row:_}=t,{original:o}=_,{id:a,isDummy:y}=o;return y?r.jsx(g,{href:`${C.PORTAL}Synapse:${a}`,children:a}):r.jsx(m,{entity:o})}function n(e){const{cell:t}=e;return r.jsx(d,{variant:"body1",children:t.getContext().getValue()})}function l(e){const{cell:t}=e;return r.jsx(d,{variant:"body1",sx:{textTransform:"capitalize"},children:t.getContext().getValue()})}function i(e){const{table:t}=e;return r.jsx(p,{inputProps:{"aria-label":"Select All"},checked:t.getIsAllRowsSelected(),indeterminate:t.getIsSomeRowsSelected(),onClick:t.getToggleAllRowsSelectedHandler()})}function s(e){const{row:t}=e;return r.jsx(p,{checked:t.getIsSelected(),disabled:!t.getCanSelect(),indeterminate:t.getIsSomeSelected(),onClick:t.getToggleSelectedHandler()})}try{c.displayName="EntityHeaderNameCell",c.__docgenInfo={description:"",displayName:"EntityHeaderNameCell",props:{}}}catch{}try{n.displayName="EntityHeaderIDCell",n.__docgenInfo={description:"",displayName:"EntityHeaderIDCell",props:{}}}catch{}try{l.displayName="EntityHeaderTypeCell",l.__docgenInfo={description:"",displayName:"EntityHeaderTypeCell",props:{}}}catch{}try{i.displayName="CheckBoxHeader",i.__docgenInfo={description:"",displayName:"CheckBoxHeader",props:{}}}catch{}try{s.displayName="CheckBoxCell",s.__docgenInfo={description:"",displayName:"CheckBoxCell",props:{}}}catch{}export{i as C,c as E,s as a,n as b,l as c};
