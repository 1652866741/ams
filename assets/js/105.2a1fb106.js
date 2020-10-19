(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1050:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"资源（resource）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#资源（resource）"}},[t._v("#")]),t._v(" 资源（resource）")]),t._v(" "),a("p",[t._v("资源（resource）主要是用于描述接口的字段（field）组成以及请求配置参数，同一个资源可以被多个 "),a("code",[t._v("block")]),t._v(" 共享使用")]),t._v(" "),a("ClientOnly",[a("scrimba",{attrs:{href:"https://scrimba.com/c/cV8vRKuR",title:"字段和区块"}})],1),t._v(" "),a("h2",{attrs:{id:"注册资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册资源"}},[t._v("#")]),t._v(" 注册资源")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ams"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("通过"),a("code",[t._v("ams.resource")]),t._v("这个方法可以注册资源，"),a("code",[t._v("name")]),t._v("是某个资源的唯一标识，已经注册的资源可以通过这个"),a("code",[t._v("name")]),t._v("在任何区块里被引用，不可重复注册同一个资源。")]),t._v(" "),a("p",[t._v("举个例子：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ams"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'demo-resource'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    foreignKeys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'testArrays'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数据接口相关")]),t._v("\n        prefix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//rap2api.taobao.org/app/mock/231578/ams/mock/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        create"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'create'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        update"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'update'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'read'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'delete'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// list: 'list', 方法1")]),t._v("\n        list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方法2：可以给每个内置action单独配置path,method,successCode等")]),t._v("\n            path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'list'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'post'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            successCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 仅list和read有transform方法，用于在AMS赋值给区块前，转化接口返回数据")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" data\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    fields"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 字段")]),t._v("\n        id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            label"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        testArrays"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'array'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            label"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'testTexts'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                label"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'testTexts'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'suffix-icon'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'el-icon-service'")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("以上注册了名字为 "),a("code",[t._v("demo-resource")]),t._v(" 的资源，而这个资源由三部分组成，分别时"),a("code",[t._v("key")]),t._v(" "),a("code",[t._v("api")]),t._v(" "),a("code",[t._v("fields")]),t._v("，其中这三部分的意义为：")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("key")]),t._v("： 【非必须】标识该resource的"),a("code",[t._v("keyName")]),t._v("，有些场景需要通过 "),a("code",[t._v("queryString")]),t._v(" 传入，通过解析 "),a("code",[t._v("key=value")]),t._v(" 获取")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("foreignKeys")]),t._v("： 发起resource里的api接口时，可以附带传的参数，接收数组的字段格式，同"),a("code",[t._v("key")]),t._v("一样会通过"),a("code",[t._v("queryString")]),t._v(" 传入")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("api")]),t._v("： 对resource的一些内置方法，"),a("code",[t._v("prefix")]),t._v("为接口地址，目前提供了"),a("code",[t._v("create")]),t._v(" "),a("code",[t._v("update")]),t._v(" "),a("code",[t._v("read")]),t._v(" "),a("code",[t._v("delete")]),t._v(" "),a("code",[t._v("list")]),t._v(" 几个内置请求方法")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("fields")]),t._v("： resource里的详细的字段描述，点击前往"),a("router-link",{attrs:{to:"/field/"}},[t._v("更深入的了解fields")])],1)])]),t._v(" "),a("h2",{attrs:{id:"field通用配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#field通用配置"}},[t._v("#")]),t._v(" field通用配置")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("是否必传")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("field的类型，比如"),a("code",[t._v("text")]),t._v("、"),a("code",[t._v("textarea")]),t._v("、"),a("code",[t._v("rate")]),t._v("...")])]),t._v(" "),a("tr",[a("td",[t._v("ctx")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("field的状态，可取值："),a("code",[t._v("eidt")]),t._v("、"),a("code",[t._v("view")]),t._v("。默认是当前field所在的"),a("code",[t._v("block")]),t._v("的"),a("code",[t._v("ctx")]),t._v("配置决定")])]),t._v(" "),a("tr",[a("td",[t._v("label")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("标签文本")])]),t._v(" "),a("tr",[a("td",[t._v("hidden")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("是否隐藏field，默认为false")])]),t._v(" "),a("tr",[a("td",[t._v("show")]),t._v(" "),a("td",[t._v("string、object、function")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("联动显示条件，string为目标field名、如'a.b'，object为{name:'a.b', value:'2'}，function返回false则隐藏")])]),t._v(" "),a("tr",[a("td",[t._v("info")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("提示信息tooltip，会显示的form的label旁")])]),t._v(" "),a("tr",[a("td",[t._v("props")]),t._v(" "),a("td",[t._v("object")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("补充属性，用于添加DOM属性或者透传至element组件，如disabled")])]),t._v(" "),a("tr",[a("td",[t._v("on")]),t._v(" "),a("td",[t._v("object")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("事件绑定，将会把事件透传至element组件，如click")])]),t._v(" "),a("tr",[a("td",[t._v("rules")]),t._v(" "),a("td",[t._v("array")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("校验规则，详见"),a("a",{attrs:{href:"https://github.com/yiminghe/async-validator",target:"_blank",rel:"noopener noreferrer"}},[t._v("async-validator"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("default")]),t._v(" "),a("td",[t._v("any")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("默认值")])]),t._v(" "),a("tr",[a("td",[t._v("get")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("get函数，编辑状态下生效（"),a("code",[t._v("ctx: 'eidt'")]),t._v("）")])]),t._v(" "),a("tr",[a("td",[t._v("set")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("set函数，编辑状态下生效（"),a("code",[t._v("ctx: 'eidt'")]),t._v("）")])]),t._v(" "),a("tr",[a("td",[t._v("view")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("view函数，显示状态下生效（"),a("code",[t._v("ctx: 'view'")]),t._v("）")])]),t._v(" "),a("tr",[a("td",[t._v("labelWidth")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("form内label的显示宽度")])])])]),t._v(" "),a("h2",{attrs:{id:"使用资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用资源"}},[t._v("#")]),t._v(" 使用资源")]),t._v(" "),a("p",[t._v("根据资源名字来使用某个资源，在注册"),a("code",[t._v("block")]),t._v("时指定资源名字来使用")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("ams"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("block")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'demo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  resource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'demo-resource'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("接下来，我们将介绍AMS另外一个核心概念"),a("code",[t._v("区块")])]),t._v(" "),a("p",[a("router-link",{attrs:{to:"/api/block.html"}},[t._v("下一节：区块")])],1)],1)}),[],!1,null,null,null);s.default=e.exports}}]);