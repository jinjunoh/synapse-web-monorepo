import{B as l}from"./SynapseConstants-JYtSvawC.js";import{m as a}from"./SynapseClient-D4M9LQNp.js";import{i as y}from"./isEqual-CzWE5dRj.js";import{i}from"./_Map-W_LbVzGG.js";import{i as n}from"./isNumber-IkxNlUCJ.js";function m(r,t,u,e){return r.resetQueries({queryKey:t.getAllTableQueryResultsKey()}),r.invalidateQueries({queryKey:t.getEntityQueryKey(u),predicate:s=>e&&y(s.queryKey,e)?!1:!a({queryKey:t.getAllTableQueryResultsKey()},s)})}function d(r){return[{queryKey:r.getAllEntityActionsRequiredQueryKey()},{queryKey:r.getDownloadListBaseQueryKey()},{queryKey:r.getAllTableQueryResultsKey(),predicate:t=>{const u=t.queryKey;for(const e of u)if(i(e)&&"tableQueryBundleRequest"in e&&i(e.tableQueryBundleRequest)&&"partMask"in e.tableQueryBundleRequest&&n(e.tableQueryBundleRequest.partMask)&&e.tableQueryBundleRequest.partMask&l)return!0;return!1}}]}export{d as g,m as i};
