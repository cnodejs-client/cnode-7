webpackJsonp([6],{O6XF:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n("1n8/"),c=r(o),a=n("1cmS"),u=n("jYI/"),i=n("AWhJ"),f=n("cZ/O"),l=r(f),d=n("mF8X"),m=function(e){var t=e.UserLogin,n=e.GetAccessToken,r=e.SetUserStatus,s=function(){var s=document.getElementById("submit-token").value;(0,l.default)("/accesstoken",{accesstoken:s}).then(function(o){void 0!==o?(0,l.default)("/user/"+o.loginname).then(function(o){t(o.data),n(s),r(!1),sessionStorage.setItem("USER_ON",JSON.stringify(o.data)),sessionStorage.setItem("Status",!1),sessionStorage.setItem("AccessToken",s),a.message.info("登陆成功，正在跳转"),setTimeout(function(){e.history.go(-1)},400)}).catch(function(e){a.message.error("网络错误")}):a.message.error("accesstoen错了")})};return c.default.createElement("div",{id:"submit"},c.default.createElement(i.Guide,{history:e.history,title:"登陆"}),c.default.createElement(a.Input,{type:"password",id:"submit-token",placeholder:"请输入access_token",defaultValue:"0356a904-b9cf-4ab0-9cac15a9e1b9"}),c.default.createElement("br",null),c.default.createElement(a.Button,{id:"submit-btn",onClick:s},"登陆"))},h=function(e){return s({},e.UserID)},p=function(e){return{UserLogin:function(t){return e((0,d.UserLogin)(t))},GetAccessToken:function(t){return e((0,d.GetAccessToekn)(t))},SetUserStatus:function(t){return e((0,d.SetUserStatus)(t))}}};t.default=(0,u.connect)(h,p)(m)},"cZ/O":function(e,t,n){"use strict";function r(e){if(e.status<200||e.status>300)throw new Error("出错了");return e.json()}function s(e,t){return void 0===t?fetch("https://cnodejs.org/api/v1"+e).then(function(e){return r(e)}).catch(function(e){o.message.error("请求失败")}):fetch("https://cnodejs.org/api/v1"+e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){return r(e)}).catch(function(e){o.message.error("请求失败")})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var o=n("1cmS")}});
//# sourceMappingURL=6.63eb7dc0cd06523ced25.chunk.js.map