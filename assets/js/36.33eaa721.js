(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1063:function(t,e,s){"use strict";s.r(e);var o=s(126),i=(s(65),s(150),{defaultSteps:{type:"steps",data:{active:0},options:{step1:"step1",step2:"step2",step3:"step3"},blocks:{step1:{type:"component",options:{is:"div",text:"我是step1的内容"},style:{padding:"100px"}},step2:{type:"component",options:{is:"div",text:"我是step2的内容"},style:{padding:"100px"}},step3:{type:"component",options:{is:"div",text:"我是step3的内容"},style:{padding:"100px"}}},operations:{next:{type:"button",label:"下一步",props:{type:"primary"}}},actions:{next:function(){var t=this.block.data.active=this.block.data.active+1;t>=Object.keys(this.block.blocks).length&&(this.block.data.active=0,t=0),this.setBlockData({active:t})}}}}),n=s(138),a=s.n(n),c=s(137),l=s.n(c),d={mixins:[o.a],mounted:function(){var t=a()(i[this.blockName]);this.configCode=l()(t,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block(this.blockName,i[this.blockName]),this.init=!0)}},p=s(1),r=Object(p.a)(d,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[t.init?s("ams-block",{staticClass:"demo-card-preview",attrs:{name:t.blockName}}):t._e(),t._v(" "),s("div",{class:"demo-card-config "+(t.showConfig?"open":"")},[s("highlight-code",{attrs:{lang:"javascript"}},[t._v("\n            "+t._s(t.configCode)+"\n        ")])],1),t._v(" "),s("div",{staticClass:"demo-card-config-btn",on:{click:t.toggleDemoCofig}},[s("i",{class:"el-icon-caret-"+(t.showConfig?"top":"bottom")}),t._v("\n         "+t._s(t.showConfig?"隐藏":"显示")+"配置\n        "),t.onlineDemo?s("el-link",{attrs:{href:t.onlineDemo,target:"_blank",type:"success"}},[t._v("在线运行")]):t._e()],1)],1)}),[],!1,null,null,null);e.default=r.exports},125:function(t,e,s){"use strict";var o=s(0),i=(s(131),s(130)),n=s.n(i),a=s(128),c=s(136),l=s(132),d=s.n(l),p=(s(133),s(134)),r=s.n(p),u=s(135),f=s.n(u);o.default.use(n.a),o.default.use(a.default),console.log("ams init config"),o.default.use(r.a),o.default.use(f.a),"undefined"!=typeof window&&(window.Vue=o.default),o.default.use(c.a,{languages:{javascript:d.a}}),a.default.config({resource:{api:{withCredentials:!1}}})},126:function(t,e,s){"use strict";s(125);e.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(t){"el-link--inner"!==t.target.className&&(this.showConfig=!this.showConfig)}}}}}]);