import{l as o}from"./index-664a1d3f.js";import{M as l}from"./mock_user_profile-cefba5e4.js";import{M as f,b as v,c as q,d as C,e as _,m as R,f as j,h as H}from"./userProfileHandlers-90f81d72.js";import{u as p}from"./uniqueId-4d05949d.js";import{aX as A}from"./ApplicationSessionManager-5437b60d.js";const i="1234",O="syn12345678",S="f1b29c62-e987-4e69-9cec-198bf017a586",h=e=>{const s=Math.pow(10,e-1);return Math.floor(Math.random()*9*s+s)},Z={id:i,etag:S,projectId:O,participantTeamId:String(f)},c=e=>{const s=h(6).toString(),a=h(6).toString();return{id:s,etag:S,challengeId:i,teamId:a,message:`Message for team ${a}`,...e}},g=[c({teamId:String(v),challengeId:i}),c({teamId:String(q),challengeId:i}),c({teamId:String(C),challengeId:i}),c({teamId:String(_),challengeId:i})];function E(e){return o.rest.get(`${e}/repo/v1/entity/:id/challenge`,async(s,a,t)=>{const n={id:i,etag:"f5e9df54-360b-4ede-9a17-f7f5680c8dd4",projectId:s.params.id,participantTeamId:String(f)};return a(t.status(200),t.json(n))})}function $(e){return o.rest.get(`${e}/repo/v1/challenge/:challengeId/challengeTeam`,async(s,a,t)=>{const n={results:g,totalNumberOfResults:g.length};return a(t.status(200),t.json(n))})}function w(e){return o.rest.post(`${e}/repo/v1/challenge/:challengeId/challengeTeam`,async(s,a,t)=>{const r={...await s.json(),id:p(),etag:"abcdef0987654321"};return g.push(r),a(t.status(200),t.json(r))})}function B(e){return o.rest.get(`${e}/repo/v1/challenge/:challengeId/submissionTeams`,async(s,a,t)=>{const n={results:[],totalNumberOfResults:0};return a(t.status(200),t.json(n))})}function k(e){return[E(e),B(e),w(e),$(e)]}const T=[...j];function d(e){return T.find(s=>s.id===e)}const I=[...H];function D(e,s){return I.find(a=>a.teamId===e&&a.userId===s)}function K(e){I.push(e)}const M=[...R];function L(e){return o.rest.get(`${e}/repo/v1/team/:teamId`,async(s,a,t)=>{const n=d(s.params.teamId);return a(t.status(200),t.json(n))})}function N(e){return o.rest.post(`${e}/repo/v1/teamList`,async(s,a,t)=>{const m={concreteType:"org.sagebionetworks.repo.model.Team",list:(await s.json()).list.map(u=>d(String(u))).filter(u=>!!u)};return a(t.status(200),t.json(m))})}function U(e){return o.rest.post(`${e}/repo/v1/team`,async(s,a,t)=>{const r={...await s.json(),createdBy:String(l),createdOn:new Date().toISOString(),etag:"etag",id:p(),modifiedBy:String(l),modifiedOn:new Date().toISOString()};return T.push(r),I.push({teamId:r.id,userId:String(l),isMember:!0,hasOpenInvitation:!1,hasOpenRequest:!1,canJoin:!1,membershipApprovalRequired:!1,hasUnmetAccessRequirement:!1,canSendEmail:!0}),await A(250),a(t.status(201),t.json(d(r.id)))})}function J(e){return o.rest.get(`${e}/repo/v1/team/:teamId/member/:memberId/membershipStatus`,async(s,a,t)=>{const n=s.params.teamId,r=s.params.memberId;let m,u;return d(n)?(m=D(n,r)??{teamId:n,userId:r,isMember:!1,hasOpenInvitation:!1,hasOpenRequest:!1,canJoin:!0,membershipApprovalRequired:!1,hasUnmetAccessRequirement:!1,canSendEmail:!1},u=200):(m={reason:`getTeamMembershipStatusHandler could not locate a team with ID ${n}`},u=404),a(t.status(u),t.json(m))})}function G(e){return o.rest.put(`${e}/repo/v1/team/:teamId/member/:memberId`,async(s,a,t)=>{const n=s.params.teamId,r=s.params.memberId;let m,u;return d(n)?(K({teamId:n,userId:r,isMember:!0,hasOpenInvitation:!1,hasOpenRequest:!1,canJoin:!0,membershipApprovalRequired:!1,hasUnmetAccessRequirement:!1,canSendEmail:!1}),m="",u=201):(m={reason:`getTeamMembershipStatusHandler could not locate a team with ID ${n}`},u=404),a(t.status(u),t.json(m))})}function P(e){return o.rest.post(`${e}/repo/v1/membershipRequest`,async(s,a,t)=>{const r={...await s.json(),id:p(),createdOn:new Date().toISOString(),createdBy:String(l)};return a(t.status(201),t.json(r))})}function F(e){return o.rest.post(`${e}/repo/v1/membershipInvitation`,async(s,a,t)=>{const r={...await s.json(),id:p(),createdOn:new Date().toISOString(),createdBy:String(l)};return M.push(r),a(t.status(201),t.json(r))})}function X(e){return o.rest.get(`${e}/repo/v1/user/:userId/openInvitation`,async(s,a,t)=>{const n=M.filter(m=>String(m.inviteeId)===String(s.params.userId)),r={results:n,totalNumberOfResults:n.length};return a(t.status(200),t.json(r))})}function x(e){return[L(e),N(e),U(e),J(e),G(e),P(e),F(e),X(e)]}export{k as a,x as g,Z as m};
