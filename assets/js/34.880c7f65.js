(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1004:function(e,o,t){"use strict";t.r(o);var n=t(126),i={iconBlock1:{type:"form",resource:{fields:{textFieldA:{type:"text",label:"输入框icon",props:{"prefix-icon":"el-icon-search","suffix-icon":"ams-icon-watcher"}},successLink:{type:"link",label:"链接Icon",default:"https://vip.com",ctx:"view",props:{type:"success",icon:"ams-icon-crown"}}}},ctx:"edit",operations:{editItem:{type:"button",label:"点赞",props:{type:"primary",icon:"ams-icon-heart"}}},blocks:{dropdownIconBLock:{type:"dropdown",options:{menu:"下拉菜单Icon",menuItems:[{text:"黄金糕",props:{command:"a",icon:"ams-icon-advocate"}},{text:"狮子头",props:{command:"b",icon:"ams-icon-fold"}}]}}}}},s=t(138),a=t.n(s),c=t(137),l=t.n(c),r={mixins:[n.a],mounted:function(){var e=a()(i[this.blockName]);this.configCode=l()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block(this.blockName,i[this.blockName]),this.init=!0)}},d=t(1),m=Object(d.a)(r,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?t("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),t("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[t("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),t("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[t("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?t("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);o.default=m.exports},125:function(e,o,t){"use strict";var n=t(0),i=(t(131),t(130)),s=t.n(i),a=t(128),c=t.n(a),l=t(136),r=t(132),d=t.n(r),m=(t(133),t(134)),p=t.n(m),u=t(135),f=t.n(u);n.default.use(s.a),n.default.use(c.a),console.log("ams init config"),n.default.use(p.a),n.default.use(f.a),"undefined"!=typeof window&&(window.Vue=n.default),n.default.use(l.a,{languages:{javascript:d.a}}),c.a.config({resource:{api:{withCredentials:!1}}})},126:function(e,o,t){"use strict";t(125);o.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}}}]);