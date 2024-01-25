import{v as r,x as u,J as y,K as c}from"./SynapseClient-ceb0e6d4.js";import{u as d}from"./useMutation-dd95c1dd.js";import{u as l}from"./useInfiniteQuery-49bff1c8.js";import"./getEndpoint-ac94413e.js";import"./OrientationBanner-1c6f5b11.js";function F(e,a,n){const{accessToken:o,keyFactory:t}=r(),s={concreteType:"org.sagebionetworks.repo.model.download.AvailableFilesRequest"};return e&&(s.sort=[e]),a&&(s.filter=a),l(t.getDownloadListAvailableFilesInfiniteQueryKey(s),async i=>u.getAvailableFilesToDownload({...s,nextPageToken:i.pageParam},o),{...n,getNextPageParam:i=>i.nextPageToken})}function f(e){const{accessToken:a,keyFactory:n}=r(),o={concreteType:"org.sagebionetworks.repo.model.download.ActionRequiredRequest"};return l(n.getDownloadListActionsRequiredInfiniteQueryKey(),async t=>await u.getDownloadListActionsRequired({...o,nextPageToken:t.pageParam},a),{...e,getNextPageParam:t=>t.nextPageToken})}function L(e){const{accessToken:a,keyFactory:n}=r();return y(n.getDownloadListStatisticsQueryKey(),()=>u.getDownloadListStatistics(a),e)}function k(e){const{accessToken:a,keyFactory:n}=r(),o=c();return d({...e,mutationFn:t=>u.addFileToDownloadListV2(t.entityId,t.entityVersionNumber,a),mutationKey:["addFileToDownloadList"],onSuccess:async(t,s,i)=>{if(await o.invalidateQueries(n.getDownloadListBaseQueryKey()),e!=null&&e.onSuccess)return e.onSuccess(t,s,i)}})}function Q(e){const{accessToken:a,keyFactory:n}=r(),o=c();return d({...e,mutationFn:t=>u.addFileBatchToDownloadListV2(t,a),mutationKey:["addFileBatchToDownloadList"],onSuccess:async(t,s,i)=>{if(await o.invalidateQueries(n.getDownloadListBaseQueryKey()),e!=null&&e.onSuccess)return e.onSuccess(t,s,i)}})}function S(e){const{accessToken:a,keyFactory:n}=r(),o=c();return d({...e,mutationFn:t=>u.addFilesToDownloadListV2(t,a),mutationKey:["addQueryToDownloadList"],onSuccess:async(t,s,i)=>{if(await o.invalidateQueries(n.getDownloadListBaseQueryKey()),e!=null&&e.onSuccess)return e.onSuccess(t,s,i)}})}export{Q as a,F as b,f as c,k as d,S as e,L as u};
//# sourceMappingURL=useDownloadList-cf18f04b.js.map
