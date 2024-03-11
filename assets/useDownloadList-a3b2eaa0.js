import{h as r,m as u,l,n as c}from"./ApplicationSessionManager-7024b1a7.js";import{u as y}from"./useMutation-7f675b66.js";import{u as d}from"./useInfiniteQuery-80b98059.js";import"./getEndpoint-ac94413e.js";import"./OrientationBanner-450e6652.js";function q(e,a,n){const{accessToken:o,keyFactory:t}=r(),s={concreteType:"org.sagebionetworks.repo.model.download.AvailableFilesRequest"};return e&&(s.sort=[e]),a&&(s.filter=a),d({...n,queryKey:t.getDownloadListAvailableFilesInfiniteQueryKey(s),queryFn:async i=>u.getAvailableFilesToDownload({...s,nextPageToken:i.pageParam},o),initialPageParam:void 0,getNextPageParam:i=>i.nextPageToken})}function g(e){const{accessToken:a,keyFactory:n}=r(),o={concreteType:"org.sagebionetworks.repo.model.download.ActionRequiredRequest"};return l({...e,queryKey:n.getDownloadListActionsRequiredQueryKey(),queryFn:()=>u.getAllDownloadListActionsRequired(o,a)})}function L(e){const{accessToken:a,keyFactory:n}=r();return l({...e,queryKey:n.getDownloadListStatisticsQueryKey(),queryFn:()=>u.getDownloadListStatistics(a)})}function f(e){const{accessToken:a,keyFactory:n}=r(),o=c();return y({...e,mutationFn:t=>u.addFileToDownloadListV2(t.entityId,t.entityVersionNumber,a),mutationKey:["addFileToDownloadList"],onSuccess:async(t,s,i)=>{if(await o.invalidateQueries({queryKey:n.getDownloadListBaseQueryKey()}),e!=null&&e.onSuccess)return e.onSuccess(t,s,i)}})}function k(e){const{accessToken:a,keyFactory:n}=r(),o=c();return y({...e,mutationFn:t=>u.addFileBatchToDownloadListV2(t,a),mutationKey:["addFileBatchToDownloadList"],onSuccess:async(t,s,i)=>{if(await o.invalidateQueries({queryKey:n.getDownloadListBaseQueryKey()}),e!=null&&e.onSuccess)return e.onSuccess(t,s,i)}})}function K(e){const{accessToken:a,keyFactory:n}=r(),o=c();return y({...e,mutationFn:t=>u.addFilesToDownloadListV2(t,a),mutationKey:["addQueryToDownloadList"],onSuccess:async(t,s,i)=>{if(await o.invalidateQueries({queryKey:n.getDownloadListBaseQueryKey()}),e!=null&&e.onSuccess)return e.onSuccess(t,s,i)}})}export{k as a,q as b,g as c,K as d,f as e,L as u};
