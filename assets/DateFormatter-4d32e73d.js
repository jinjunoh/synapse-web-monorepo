import{n as m}from"./ApplicationSessionManager-99c1baec.js";import"./getEndpoint-ac94413e.js";import"./OrientationBanner-a1ca5cdb.js";import{d as e}from"./dayjs.min-f79c4412.js";import{u as r,t as a,a as i,l as s}from"./timezone-f53425a4.js";e.extend(r);e.extend(a);e.extend(i);e.extend(s);function z(t,o){return o||(o="M/D/YYYY h:mm A",m.getUseUtcTimeFromCookie()&&(o+=" z")),m.getUseUtcTimeFromCookie()?e(t).tz("utc").format(o):e(t).tz(e.tz.guess()).format(o)}export{z as f};
