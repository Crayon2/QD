(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/set/set"],{1614:function(t,n,e){"use strict";e.r(n);var o=e("e9ed"),u=e.n(o);for(var r in o)"default"!==r&&function(t){e.d(n,t,function(){return o[t]})}(r);n["default"]=u.a},6578:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return u})},"6b4d":function(t,n,e){"use strict";var o=e("a6d1"),u=e.n(o);u.a},"8e9d":function(t,n,e){"use strict";e.r(n);var o=e("6578"),u=e("1614");for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);e("6b4d");var a=e("2877"),c=Object(a["a"])(u["default"],o["a"],o["b"],!1,null,null,null);n["default"]=c.exports},a6d1:function(t,n,e){},e9ed:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("2f62");function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(n){r(t,n,e[n])})}return t}function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var a={data:function(){return{}},methods:u({},(0,o.mapMutations)(["logout"]),{navTo:function(t){this.$api.msg("跳转到".concat(t))},toLogout:function(){var n=this;t.showModal({content:"确定要退出登录么",success:function(e){e.confirm&&(n.logout(),setTimeout(function(){t.navigateBack()},200))}})},switchChange:function(t){var n=t.detail.value?"打开":"关闭";this.$api.msg("".concat(n,"消息推送"))}})};n.default=a}).call(this,e("543d")["default"])}},[["3768","common/runtime","common/vendor"]]]);