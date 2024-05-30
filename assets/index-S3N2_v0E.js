var _=(E=>(E.APPROVED="APPROVED",E.REVOKED="REVOKED",E))(_||{}),I=(E=>(E.MODIFIED_ON="MODIFIED_ON",E.EXPIRED_ON="EXPIRED_ON",E))(I||{}),A=(E=>(E.MODIFIED_ON="MODIFIED_ON",E.CREATED_ON="CREATED_ON",E))(A||{}),S=(E=>(E.GAIN_ACCESS="GAIN_ACCESS",E.RENEW_ACCESS="RENEW_ACCESS",E.REVOKE_ACCESS="REVOKE_ACCESS",E))(S||{}),H="Basic",f="org.sagebionetworks.repo.model.ACTAccessRequirement",x="Lock",K="org.sagebionetworks.repo.model.LockAccessRequirement",b="Managed",J="org.sagebionetworks.repo.model.ManagedACTAccessRequirement",T=(E=>(E.SUBMITTED="SUBMITTED",E.APPROVED="APPROVED",E.REJECTED="REJECTED",E.CANCELLED="CANCELLED",E))(T||{}),X="Click-Wrap",q="org.sagebionetworks.repo.model.SelfSignAccessRequirement",z="Terms of Use",$="org.sagebionetworks.repo.model.TermsOfUseAccessRequirement",Z={openid:{displayName:"OpenID",description:"Access to your Synapse identity and certain user information"},view:{displayName:"View",description:"Permission to view the content which you can view"},modify:{displayName:"Modify",description:"Permission to modify the content which you can modify (create, change, delete)"},download:{displayName:"Download",description:"Permission to download the content which you can download"},authorize:{displayName:"Authorize",description:"Permission to authorize others to access the resources you control"},offline_access:{displayName:"Offline Access",description:"Permission to access the resources authorized here when you are not logged in, until you explicitly revoke access"},email:{displayName:"Email",description:"Permission to access the email address associated to your account"},profile:{displayName:"User Profile",description:"Permission to access your user profile information"}},a=(E=>(E.CREATE="CREATE",E.READ="READ",E.UPDATE="UPDATE",E.DELETE="DELETE",E.CHANGE_PERMISSIONS="CHANGE_PERMISSIONS",E.DOWNLOAD="DOWNLOAD",E.UPLOAD="UPLOAD",E.PARTICIPATE="PARTICIPATE",E.SUBMIT="SUBMIT",E.READ_PRIVATE_SUBMISSION="READ_PRIVATE_SUBMISSION",E.UPDATE_SUBMISSION="UPDATE_SUBMISSION",E.DELETE_SUBMISSION="DELETE_SUBMISSION",E.TEAM_MEMBERSHIP_UPDATE="TEAM_MEMBERSHIP_UPDATE",E.SEND_MESSAGE="SEND_MESSAGE",E.CHANGE_SETTINGS="CHANGE_SETTINGS",E.MODERATE="MODERATE",E.REVIEW_SUBMISSIONS="REVIEW_SUBMISSIONS",E.EXEMPTION_ELIGIBLE="EXEMPTION_ELIGIBLE",E))(a||{}),r=(E=>(E[E.STRING=0]="STRING",E[E.DOUBLE=1]="DOUBLE",E[E.LONG=2]="LONG",E[E.TIMESTAMP_MS=3]="TIMESTAMP_MS",E))(r||{}),j="org.sagebionetworks.repo.model.quiz.MultichoiceResponse",R=(E=>(E.NUMBER_OF_REPLIES="NUMBER_OF_REPLIES",E.NUMBER_OF_VIEWS="NUMBER_OF_VIEWS",E.PINNED_AND_LAST_ACTIVITY="PINNED_AND_LAST_ACTIVITY",E.THREAD_TITLE="THREAD_TITLE",E))(R||{}),N=(E=>(E.CREATED_ON="CREATED_ON",E))(N||{}),e=(E=>(E.NO_FILTER="NO_FILTER",E.DELETED_ONLY="DELETED_ONLY",E.EXCLUDE_DELETED="EXCLUDE_DELETED",E))(e||{}),p="org.sagebionetworks.repo.model.docker.DockerRepository",y="org.sagebionetworks.repo.model.FileEntity",L="org.sagebionetworks.repo.model.table.MaterializedView",EE=1,_E=2,IE=4,AE=8,SE=32,TE=128,O="org.sagebionetworks.repo.model.table.EntityView",s="org.sagebionetworks.repo.model.table.SubmissionView",o="org.sagebionetworks.repo.model.table.Dataset",C="org.sagebionetworks.repo.model.table.DatasetCollection",D="org.sagebionetworks.repo.model.table.VirtualTable",U="org.sagebionetworks.repo.model.table.TableEntity",t=[O,s,o,C],aE=[U,...t,L,D],rE="org.sagebionetworks.repo.model.Folder",RE="org.sagebionetworks.repo.model.Link",NE="org.sagebionetworks.repo.model.Project",eE={includeEntity:!0,includeEntityPath:!0,includeAnnotations:!0,includePermissions:!0,includeHasChildren:!0,includeAccessControlList:!0,includeFileHandles:!0,includeTableBundle:!0,includeRootWikiId:!0,includeBenefactorACL:!0,includeDOIAssociation:!0,includeFileName:!0,includeThreadCount:!0,includeRestrictionInformation:!0},i=(E=>(E.NAME="NAME",E.CREATED_ON="CREATED_ON",E.MODIFIED_ON="MODIFIED_ON",E))(i||{}),M=(E=>(E.ASC="ASC",E.DESC="DESC",E))(M||{}),n=(E=>(E.PROJECT="project",E.FOLDER="folder",E.FILE="file",E.TABLE="table",E.LINK="link",E.ENTITY_VIEW="entityview",E.DOCKER_REPO="dockerrepo",E.SUBMISSION_VIEW="submissionview",E.DATASET="dataset",E.DATASET_COLLECTION="datasetcollection",E.MATERIALIZED_VIEW="materializedview",E.VIRTUAL_TABLE="virtualtable",E))(n||{}),P=(E=>(E.PASSWORD_RESET_VIA_EMAIL_REQUIRED="PASSWORD_RESET_VIA_EMAIL_REQUIRED",E.USER_CERTIFICATION_REQUIRED="USER_CERTIFICATION_REQUIRED",E.INVALID_TABLE_QUERY_FACET_COLUMN_REQUEST="INVALID_TABLE_QUERY_FACET_COLUMN_REQUEST",E.OAUTH_CLIENT_NOT_VERIFIED="OAUTH_CLIENT_NOT_VERIFIED",E.TWO_FA_REQUIRED="TWO_FA_REQUIRED",E))(P||{}),V=(E=>(E.DESCRIPTION_FIELD="DESCRIPTION_FIELD",E.CHANGE_PASSWORD_2FA_CHECK="CHANGE_PASSWORD_2FA_CHECK",E.VIRTUALTABLE_SUPPORT="VIRTUALTABLE_SUPPORT",E.JSONSCHEMA_VALIDATION_STATUS="JSONSCHEMA_VALIDATION_STATUS",E))(V||{}),LE="org.sagebionetworks.repo.model.file.S3FileHandle",OE="org.sagebionetworks.repo.model.file.GoogleCloudFileHandle",sE="org.sagebionetworks.repo.model.file.ExternalFileHandle",oE="org.sagebionetworks.repo.model.file.ExternalObjectStoreFileHandle",CE="org.sagebionetworks.repo.model.file.ProxyFileHandle",l=(E=>(E.S3="S3",E.GOOGLECLOUDSTORAGE="GOOGLECLOUDSTORAGE",E.SFTP="SFTP",E.HTTPS="HTTPS",E.PROXYLOCAL="PROXYLOCAL",E.NONE="NONE",E))(l||{}),v=(E=>(E.FileEntity="FileEntity",E.TableEntity="TableEntity",E.WikiAttachment="WikiAttachment",E.WikiMarkdown="WikiMarkdown",E.UserProfileAttachment="UserProfileAttachment",E.MessageAttachment="MessageAttachment",E.TeamAttachment="TeamAttachment",E.SubmissionAttachment="SubmissionAttachment",E.VerificationSubmission="VerificationSubmission",E.AccessRequirementAttachment="AccessRequirementAttachment",E.DataAccessRequestAttachment="DataAccessRequestAttachment",E.DataAccessSubmissionAttachment="DataAccessSubmissionAttachment",E))(v||{}),d=(E=>(E.WAITING_FOR_SUBMISSION="WAITING_FOR_SUBMISSION",E.SUBMITTED_WAITING_FOR_REVIEW="SUBMITTED_WAITING_FOR_REVIEW",E.ACCEPTED="ACCEPTED",E.REJECTED="REJECTED",E))(d||{}),DE=["title","bold","italic","strikethrough","code","latex","subscript","superscript","link","image"],UE={title:{openSyntax:"###",closeSyntax:""},bold:{openSyntax:"**",closeSyntax:"**"},italic:{openSyntax:"_",closeSyntax:"_"},strikethrough:{openSyntax:"--",closeSyntax:"--"},code:{openSyntax:"```",closeSyntax:"```"},latex:{openSyntax:"$$\\(",closeSyntax:"\\)$$"},subscript:{openSyntax:"~",closeSyntax:"~"},superscript:{openSyntax:"^",closeSyntax:"^"},link:{openSyntax:"[",closeSyntax:"](url)"},image:{openSyntax:"![",closeSyntax:"](image-url)"}},c=(E=>(E.RS256="RS256",E))(c||{}),Y=(E=>(E.ENTITY="ENTITY",E.ENTITY_CONTAINER="ENTITY_CONTAINER",E.PRINCIPAL="PRINCIPAL",E.ACTIVITY="ACTIVITY",E.EVALUATION="EVALUATION",E.SUBMISSION="SUBMISSION",E.EVALUATION_SUBMISSIONS="EVALUATION_SUBMISSIONS",E.FILE="FILE",E.MESSAGE="MESSAGE",E.WIKI="WIKI",E.FAVORITE="FAVORITE",E.ACCESS_REQUIREMENT="ACCESS_REQUIREMENT",E.ACCESS_APPROVAL="ACCESS_APPROVAL",E.TEAM="TEAM",E.TABLE="TABLE",E.ACCESS_CONTROL_LIST="ACCESS_CONTROL_LIST",E.PROJECT_SETTING="PROJECT_SETTING",E.VERIFICATION_SUBMISSION="VERIFICATION_SUBMISSION",E.CERTIFIED_USER_PASSING_RECORD="CERTIFIED_USER_PASSING_RECORD",E.FORUM="FORUM",E.THREAD="THREAD",E.REPLY="REPLY",E.FORM_GROUP="FORM_GROUP",E.FORM_DATA="FORM_DATA",E.ENTITY_VIEW="ENTITY_VIEW",E.USER_PROFILE="USER_PROFILE",E.DATA_ACCESS_REQUEST="DATA_ACCESS_REQUEST",E.DATA_ACCESS_SUBMISSION="DATA_ACCESS_SUBMISSION",E.DATA_ACCESS_SUBMISSION_STATUS="DATA_ACCESS_SUBMISSION_STATUS",E.MEMBERSHIP_INVITATION="MEMBERSHIP_INVITATION",E))(Y||{}),B=(E=>(E.USER_NAME="USER_NAME",E.TEAM_NAME="TEAM_NAME",E.USER_EMAIL="USER_EMAIL",E.USER_OPEN_ID="USER_OPEN_ID",E.USER_ORCID="USER_ORCID",E))(B||{}),tE="org.sagebionetworks.repo.model.provenance.UsedEntity",g=(E=>(E.ENTITY="ENTITY",E.EVALUATION="EVALUATION",E.TEAM="TEAM",E))(g||{}),F=(E=>(E.OPEN="OPEN",E.RESTRICTED_BY_TERMS_OF_USE="RESTRICTED_BY_TERMS_OF_USE",E.CONTROLLED_BY_ACT="CONTROLLED_BY_ACT",E))(F||{}),G=(E=>(E.entity="entity",E))(G||{}),k=(E=>(E.entity="entity",E))(k||{}),m=(E=>(E.FORUM="FORUM",E.THREAD="THREAD",E.DATA_ACCESS_SUBMISSION="DATA_ACCESS_SUBMISSION",E.DATA_ACCESS_SUBMISSION_STATUS="DATA_ACCESS_SUBMISSION_STATUS",E))(m||{}),w=(E=>(E.SUBSCRIPTION_ID="SUBSCRIPTION_ID",E.SUBSCRIBER_ID="SUBSCRIBER_ID",E.OBJECT_ID="OBJECT_ID",E.OBJECT_TYPE="OBJECT_TYPE",E.CREATED_ON="CREATED_ON",E))(w||{}),u=(E=>(E.STRING="STRING",E.DOUBLE="DOUBLE",E.BOOLEAN="BOOLEAN",E.INTEGER="INTEGER",E.DATE="DATE",E.FILEHANDLEID="FILEHANDLEID",E.ENTITYID="ENTITYID",E.LINK="LINK",E.MEDIUMTEXT="MEDIUMTEXT",E.LARGETEXT="LARGETEXT",E.USERID="USERID",E.STRING_LIST="STRING_LIST",E.INTEGER_LIST="INTEGER_LIST",E.BOOLEAN_LIST="BOOLEAN_LIST",E.DATE_LIST="DATE_LIST",E.USERID_LIST="USERID_LIST",E.ENTITYID_LIST="ENTITYID_LIST",E.EVALUATIONID="EVALUATIONID",E.SUBMISSIONID="SUBMISSIONID",E.JSON="JSON",E))(u||{}),iE="org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",ME="org.sagebionetworks.repo.model.table.FacetColumnRangeRequest",W=(E=>(E.LIKE="LIKE",E.EQUAL="EQUAL",E.IN="IN",E))(W||{}),h=(E=>(E.HAS="HAS",E.HAS_LIKE="HAS_LIKE",E))(h||{}),nE="org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter",PE="org.sagebionetworks.repo.model.table.ColumnMultiValueFunctionQueryFilter",VE="org.sagebionetworks.repo.model.table.TextMatchesQueryFilter",Q=(E=>(E.USERS_ONLY="USERS_ONLY",E.TEAMS_ONLY="TEAMS_ONLY",E.ALL="ALL",E))(Q||{});export{X as $,_ as A,G as B,u as C,M as D,oE as E,v as F,OE as G,j as H,c as I,Z as J,V as K,K as L,J as M,i as N,Y as O,CE as P,y as Q,g as R,T as S,$ as T,l as U,NE as V,A as W,I as X,x as Y,H as Z,b as _,k as a,z as a0,B as a1,t as a2,p as a3,iE as a4,nE as a5,PE as a6,RE as a7,ME as a8,VE as a9,D as aa,L as ab,C as ac,o as ad,O as ae,U as af,aE as ag,s as ah,rE as ai,N as aj,tE as ak,DE as al,UE as am,a as b,f as c,q as d,n as e,r as f,F as g,h,W as i,w as j,P as k,EE as l,AE as m,IE as n,TE as o,SE as p,Q as q,S as r,eE as s,m as t,R as u,e as v,LE as w,sE as x,_E as y,d as z};