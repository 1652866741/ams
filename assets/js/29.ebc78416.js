(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1073:function(e,o,t){"use strict";t.r(o);var n=t(244),i={defaultError:{type:"error"},buttonError:{type:"error",data:{title:"404",subtitle:"Page not found"},operations:{goIndex:{type:"button",label:"返回首页",props:{type:"danger",size:"medium",round:!0}}},actions:{goIndex:function(){this.$message("你点击了返回首页按钮")}}}},a=t(261),s=t.n(a),c=t(258),d=t.n(c),l={mixins:[n.a],mounted:function(){var e=s()(i[this.blockName]);this.configCode=d()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block(this.blockName,i[this.blockName]),this.init=!0)}},r=t(13),u=Object(r.a)(l,function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?t("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),t("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[t("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),t("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[t("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n    ")])],1)},[],!1,null,null,null);o.default=u.exports},238:function(e,o,t){"use strict";var n=t(0),i=(t(245),t(243)),a=t.n(i),s=t(239),c=t(250),d=t(246),l=t.n(d),r=(t(247),t(248)),u=t.n(r),f=t(249),g=t.n(f);n.default.use(a.a),n.default.use(s.default),console.log("ams init config"),n.default.use(u.a),n.default.use(g.a),"undefined"!=typeof window&&(window.Vue=n.default),n.default.use(c.a,{languages:{javascript:l.a}}),s.default.config({resource:{api:{withCredentials:!1}}})},244:function(e,o,t){"use strict";t(238);o.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String},methods:{toggleDemoCofig:function(){this.showConfig=!this.showConfig}}}}}]);