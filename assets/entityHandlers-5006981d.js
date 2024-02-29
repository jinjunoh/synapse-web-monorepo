import{l}from"./index-096ee2ea.js";import{a5 as D,a6 as I,a7 as f,a8 as S,a9 as k,aa as _,ab as g,ac as N,ad as T}from"./ApplicationSessionManager-99c1baec.js";import{U as y}from"./index-01eb1463.js";import{m as p}from"./index-9d3f5b7a.js";import{a as $}from"./mockEntity-37044b80.js";import{m as v}from"./mockSchema-622ebc67.js";import{a as L}from"./mockProject-f1efd7e3.js";import"./getEndpoint-ac94413e.js";import"./OrientationBanner-a1ca5cdb.js";import{u as O}from"./uniqueId-4d05949d.js";const b=1111,w=2222,U=3333,j=4444,m={storageLocationId:D,uploadType:y.S3,banner:"",concreteType:"org.sagebionetworks.repo.model.file.S3UploadDestination"},E={...m,baseKey:"exampleS3BaseKey",stsEnabled:!0,concreteType:"org.sagebionetworks.repo.model.file.S3UploadDestination"},A={...E,storageLocationId:b,endpointUrl:"https://my-endpoint.fake",bucket:"myExternalS3Bucket",concreteType:"org.sagebionetworks.repo.model.file.ExternalS3UploadDestination"},C={...m,baseKey:"exampleGCPBaseKey",storageLocationId:w,uploadType:y.GOOGLECLOUDSTORAGE,bucket:"myExternalGCPBucket",concreteType:"org.sagebionetworks.repo.model.file.ExternalGoogleCloudUploadDestination"},M={...m,storageLocationId:U,uploadType:y.HTTPS,url:"https://myurl.fake",concreteType:"org.sagebionetworks.repo.model.file.ExternalUploadDestination"},h={...m,storageLocationId:j,uploadType:y.HTTPS,endpointUrl:"https://my-endpoint.fake",bucket:"myExternalObjectStoreBucket",keyPrefixUUID:"uuidKeyPrefix",concreteType:"org.sagebionetworks.repo.model.file.ExternalObjectStoreUploadDestination"},G=[E,A,C,M,h];function R(i,n){return l.rest.post(`${i}${T(":entityId")}`,async(a,t,s)=>{let e=404,o={reason:`Mock Service worker could not find a mock entity bundle with ID ${a.params.entityId}`};if(n)o=n,e=200;else{const r=p.find(d=>d.id===a.params.entityId);r!=null&&r.bundle&&(o=r.bundle,e=200)}return t(s.status(e),s.json(o))})}function B(i,n){return l.rest.post(`${i}${T(":entityId",":versionNumber")}`,async(a,t,s)=>{const e=a.params.entityId,o=parseInt(a.params.versionNumber);let r=404,d={reason:`Mock Service worker could not find a mock entity bundle with ID ${e}`};if(n)d=n,r=200;else{const c=p.find(u=>u.id===e);if(c){const u=c.bundle;c.versions&&c.versions[o]?d={...u,entity:c.versions[o]}:d=u,r=200}}return t(s.status(r),s.json(d))})}const F=i=>[l.rest.post(`${i}${I}`,async(n,a,t)=>{let s=200;const e=await n.json();let o={reason:"..."};return e?e.name===$?(o.reason="Invalid project name",s=403):o={id:O("syn"),...e}:(s=400,o={reason:`Mock service worker received the following malformed body for PUT ${I} : ${JSON.stringify(e)}`}),a(t.status(s),t.json(o))}),l.rest.get(`${i}${f(":entityId")}`,async(n,a,t)=>{let s=404,e={reason:`Mock Service worker could not find a mock entity with ID ${n.params.entityId}`};const o=p.find(r=>r.id===n.params.entityId);return o&&(e=o.entity,s=200),a(t.status(s),t.json(e))}),l.rest.get(`${i}${S(":entityId")}`,async(n,a,t)=>{let s=404,e={reason:`Mock Service worker could not find mock entity versions for ID ${n.params.entityId}`};const o=p.find(r=>r.id===n.params.entityId);return o&&o.versionInfo&&(e={results:o.versionInfo},s=200),a(t.status(s),t.json(e))}),l.rest.get(`${i}${k(":entityId",":versionNumber")}`,async(n,a,t)=>{let s=404;const e=n.params.entityId,o=n.params.versionNumber.toString(),r=parseInt(o);let d={reason:`Mock Service worker could not find a mock versioned entity with ID ${e}.${o}`};const c=p.find(u=>u.id===n.params.entityId);return c&&c.versions&&c.versions[r]&&(d=c.versions[r],s=200),a(t.status(s),t.json(d))}),R(i),B(i),l.rest.get(`${i}${_(":entityId")}`,async(n,a,t)=>a(t.status(200),t.json(v))),l.rest.get(`${i}${g(":entityId")}`,async(n,a,t)=>{let s=404,e={reason:`Mock Service worker could not find a mock entity bundle with ID ${n.params.entityId}`};const o=p.find(r=>r.id===n.params.entityId);return o!=null&&o.json&&(e=o.json,s=200),a(t.status(s),t.json(e))}),l.rest.post(`${i}${N}`,async(n,a,t)=>{let s=404,e={reason:`Mock Service worker could not find a mock entity bundle with ID ${n.params.entityId}`};const o=n.body,r=p.filter(d=>o.references.find(c=>c.targetId===d.id)).map(d=>d.entityHeader).filter(d=>!!d);return r&&(e={results:r},s=200),a(t.status(s),t.json(e))}),l.rest.get(`${i}${f(":entityId")}/path`,async(n,a,t)=>{let s=404,e={reason:`Mock Service worker could not find a mock entity path using ID ${n.params.entityId}`};const o=p.find(r=>n.params.entityId===r.id);return o&&o.path&&(e=o.path,s=200),a(t.status(s),t.json(e))}),l.rest.get(`${i}/file/v1/entity/:id/uploadDestination`,async(n,a,t)=>{const s={banner:"",storageLocationId:1,uploadType:y.S3,concreteType:"org.sagebionetworks.repo.model.file.S3UploadDestination"};return a(t.status(200),t.json(s))}),l.rest.get(`${i}/file/v1/entity/:id/uploadDestination/:storageLocationId`,async(n,a,t)=>{let s=404,e={reason:`Mock Service worker could not find an uploadDestination using storageLocationId ${n.params.storageLocationId}`};const o=G.find(r=>Number(n.params.storageLocationId)===r.storageLocationId);return o&&(e=o,s=200),a(t.status(s),t.json(e))}),l.rest.get(`${i}/repo/v1/projects`,async(n,a,t)=>{const s={results:L.map(e=>({name:e.name,id:e.id,lastActivity:"2024-01-04T21:11:59.000Z",modifiedBy:parseInt(e.entity.modifiedBy),modifiedOn:e.entity.modifiedOn}))};return a(t.status(200),t.json(s))})];export{F as g};
