(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{125:function(t,e,o){"use strict";var n=o(0),i=(o(131),o(130)),s=o.n(i),a=o(128),c=o.n(a),l=o(136),r=o(132),p=o.n(r),m=(o(133),o(134)),u=o.n(m),h=o(135),d=o.n(h);n.default.use(s.a),n.default.use(c.a),console.log("ams init config"),n.default.use(u.a),n.default.use(d.a),"undefined"!=typeof window&&(window.Vue=n.default),n.default.use(l.a,{languages:{javascript:p.a}}),c.a.config({resource:{api:{withCredentials:!1}}})},126:function(t,e,o){"use strict";o(125);e.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(t){"el-link--inner"!==t.target.className&&(this.showConfig=!this.showConfig)}}}},149:function(t,e,o){"use strict";function n(t,e,o){var n='<!DOCTYPE html>\n<html>\n<head>\n    <meta charset="utf-8">\n    <title>首页</title>\n    <script src="https://h5rsc.vipstatic.com/ams/babel-polyfill/7.4.0/polyfill.min.js"><\/script>\n</head>\n<body>\n    <script>\n        var amsConfigJson = '.concat(o,';\n    <\/script>\n\n    <link rel="stylesheet" href="https://h5rsc.vipstatic.com/ams/element-ui@2.11.1/theme-chalk/index.css" />\n    <script src="https://h5rsc.vipstatic.com/ams/vue@2.6.10.js"><\/script>\n    <script src="https://h5rsc.vipstatic.com/ams/element-ui@2.11.1/index.js"><\/script>\n    <script src="https://unpkg.com/@ams-team/ams/lib/ams.js"><\/script>\n    <script id="ams-config" src="http://h5rsc.vipstatic.com/ams/ams-init@0.1.5.js"><\/script>\n</body>\n</html>');t.download=e,t.href="data:text/plain,".concat(n)}o.d(e,"a",(function(){return n})),o.d(e,"b",(function(){return i}));var i="https://www.yournana.club/vipshop/"},329:function(t,e,o){},869:function(t,e,o){"use strict";var n=o(329);o.n(n).a},978:function(t,e,o){"use strict";o.r(e);var n=o(126),i={defaultRouter:{type:"router",resources:{routerRes:{api:{prefix:o(149).b,read:"read"},fields:{testDate:{type:"date",label:"日期"},testSwitch:{type:"switch",label:"开关"}}}},router:{routes:[{path:"",name:"首页",block:"formEditAll",meta:{icon:"el-icon-menu"}},{path:"/list",name:"列表页",block:"listComponent",meta:{icon:"ams-icon-watcher"}}]},blocks:{formEditAll:{type:"form",resource:"routerRes",ctx:"edit",style:{width:"50%"},data:{testRadio:"c"},events:{init:"@read",submit:"@validate @update"},operations:{submit:{type:"button",event:"submit",label:"提交",props:{type:"primary"}}}},listComponent:{type:"component",options:{is:"div",text:"我是插进来的TEXT内容",html:"<h3>我是插进来的HTML内容</h3>"}}}},menuTopRouter:{type:"router",router:{routes:[{path:"",name:"首页",block:"listComponent",meta:{icon:"el-icon-menu"}}]},blocks:{listComponent:{type:"component",options:{is:"div",text:"我是插进来的TEXT内容",html:"<h3>我是插进来的HTML内容</h3>"}},title1:{type:"component",options:{is:"h3",text:"AMS系统"},style:{color:"#fff","text-align":"center"},slot:"menuTop"}}},menuBottomRouter:{type:"router",router:{routes:[{path:"",name:"首页",block:"listComponent",meta:{icon:"el-icon-menu"}},{path:"/menu1",name:"菜单一",meta:{icon:"el-icon-user-solid"},children:[{name:"子菜单",path:"path1_0",block:"listComponent"}]},{path:"/menu2",name:"菜单二",block:"listComponent",meta:{icon:"el-icon-star-on"}},{path:"/menu3",name:"菜单三",block:"listComponent",meta:{icon:"el-icon-s-help"}}]},blocks:{listComponent:{type:"component",options:{is:"div",text:"我是插进来的TEXT内容",html:"<h3>我是插进来的HTML内容</h3>"}},menuBottomtext:{type:"component",options:{is:"div",text:"Copyright © 2008-2019 vip.com"},style:{color:"#aaa",padding:"10px","margin-top":"100px","font-size":"12px"},slot:"menuBottom"}}},navRouter:{type:"router",router:{routes:[{path:"",name:"首页",block:"listComponent",meta:{icon:"el-icon-menu"}}]},blocks:{listComponent:{type:"component",options:{is:"div",text:"我是插进来的TEXT内容",html:"<h3>我是插进来的HTML内容</h3>"}},title1:{type:"component",options:{is:"h3",text:"AMS系统"},style:{color:"#fff","text-align":"center"},slot:"menuTop"},navRouterTitle:{type:"component",options:{is:"div"},operations:{feedback:{type:"button",label:"反馈",style:{"margin-top":"5px","margin-right":"15px"},props:{type:"text",icon:"el-icon-document",size:"large"}},help:{type:"button",label:"帮助",style:{"margin-top":"5px"},props:{type:"text",icon:"el-icon-question",size:"large"}}},actions:{feedback:function(){window.location.href="https://github.com/vipshop/ams/issues"},help:function(){window.location.href="https://github.com/vipshop/ams"}},slot:"nav"}}}},s=o(138),a=o.n(s),c=o(137),l=o.n(c),r={mixins:[n.a],mounted:function(){var t=a()(i[this.blockName]);this.configCode=l()(t,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block(this.blockName,i[this.blockName]),this.init=!0)}},p=(o(869),o(1)),m=Object(p.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-card",{staticClass:"demo demo-card router-demo-card",attrs:{shadow:"hover"}},[t.init?o("ams-block",{staticClass:"demo-card-preview",attrs:{name:t.blockName}}):t._e(),t._v(" "),o("div",{class:"demo-card-config "+(t.showConfig?"open":"")},[o("highlight-code",{attrs:{lang:"javascript"}},[t._v("\n            "+t._s(t.configCode)+"\n        ")])],1),t._v(" "),o("div",{staticClass:"demo-card-config-btn",on:{click:t.toggleDemoCofig}},[o("i",{class:"el-icon-caret-"+(t.showConfig?"top":"bottom")}),t._v("\n         "+t._s(t.showConfig?"隐藏":"显示")+"配置\n        "),t.onlineDemo?o("el-link",{attrs:{href:t.onlineDemo,target:"_blank",type:"success"}},[t._v("在线运行")]):t._e()],1)],1)}),[],!1,null,"3b0fd385",null);e.default=m.exports}}]);