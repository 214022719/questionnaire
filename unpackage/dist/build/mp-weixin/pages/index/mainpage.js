(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/mainpage"],{"0b2e":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{ifShow:!1}},methods:{getUserInfo:function(t){var e=this;wx.getSetting({success:function(t){t.authSetting["scope.userInfo"]?(console.log("已授权====="),wx.getUserInfo({success:function(t){console.log("获取用户信息成功",t),n.navigateTo({url:"index",animationType:"zoom-fade-out",animationDuration:2e3})},fail:function(n){console.log("获取用户信息失败",n)}})):(console.log("未授权====="),e.showSettingToast("请授权"))}})},showSettingToast:function(n){wx.showModal({title:"提示！",confirmText:"去设置",showCancel:!1,content:n,success:function(n){n.confirm&&console.log("ads")}})}},mounted:function(){}};t.default=e}).call(this,e("543d")["default"])},"32f9":function(n,t,e){"use strict";e.r(t);var o=e("0b2e"),u=e.n(o);for(var c in o)"default"!==c&&function(n){e.d(t,n,(function(){return o[n]}))}(c);t["default"]=u.a},"3ac9":function(n,t,e){"use strict";(function(n){e("ed1a"),e("921b");o(e("66fd"));var t=o(e("9360"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},9360:function(n,t,e){"use strict";e.r(t);var o=e("a49e"),u=e("32f9");for(var c in u)"default"!==c&&function(n){e.d(t,n,(function(){return u[n]}))}(c);var a,i=e("f0c5"),f=Object(i["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);t["default"]=f.exports},a49e:function(n,t,e){"use strict";var o,u=function(){var n=this,t=n.$createElement;n._self._c},c=[];e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return c})),e.d(t,"a",(function(){return o}))}},[["3ac9","common/runtime","common/vendor"]]]);