(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1100:function(e,a,l){"use strict";l.r(a);var t=l(156),r=(l(165),l(128)),i=(l(125),l(159)),s={blocks:{echartPieBlock:{type:"chart",style:{width:"100%",height:"500px"},data:{legend:["直接访问","邮件营销","联盟广告","视频广告","搜索引擎"],xAxis:["周二","周二","周二","周四","周五","周六","周日"],series:[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:234,name:"联盟广告"},{value:135,name:"视频广告"},{value:1548,name:"搜索引擎"}]},options:{BASE:"PIE",series:[{name:"访问来源",type:"pie",radius:["50%","70%"],data:"data.series"}]}}}},o={data:function(){return{init:!1}},mounted:function(){if(r.default&&r.default.blocks&&r.default.blocks["chart-pie"])this.init=!0;else{["text","inputnumber","select"].reduce((function(e,a){return Object.assign(e,Object(t.a)({},a,i.b[a]))}),{});r.default.block("chart-pie",s),this.init=!0}}},c=l(1),n=Object(c.a)(o,(function(){var e=this.$createElement,a=this._self._c||e;return this.init?a("ams-block",{staticClass:"demo",attrs:{name:"chart-pie"}}):this._e()}),[],!1,null,null,null);a.default=n.exports},125:function(e,a,l){"use strict";var t=l(0),r=(l(131),l(130)),i=l.n(r),s=l(128),o=l(136),c=l(132),n=l.n(c),p=(l(133),l(134)),u=l.n(p),b=l(135),d=l.n(b);t.default.use(i.a),t.default.use(s.default),console.log("ams init config"),t.default.use(u.a),t.default.use(d.a),"undefined"!=typeof window&&(window.Vue=t.default),t.default.use(o.a,{languages:{javascript:n.a}}),s.default.config({resource:{api:{withCredentials:!1}}})},143:function(e,a,l){"use strict";function t(e,a,l){var t='<!DOCTYPE html>\n<html>\n<head>\n    <meta charset="utf-8">\n    <title>首页</title>\n    <script src="https//h5rsc.vipstatic.com/ams/babel-polyfill/7.4.0/polyfill.min.js"><\/script>\n</head>\n<body>\n    <script>\n        var amsConfigJson = '.concat(l,';\n    <\/script>\n\n    <link rel="stylesheet" href="https://h5rsc.vipstatic.com/ams/element-ui@2.11.1/theme-chalk/index.css" />\n    <script src="https://h5rsc.vipstatic.com/ams/vue@2.6.10.js"><\/script>\n    <script src="https://h5rsc.vipstatic.com/ams/element-ui@2.11.1/index.js"><\/script>\n    <script src="https://unpkg.com/@ams-team/ams/lib/ams.js"><\/script>\n    <script id="ams-config" src="http://h5rsc.vipstatic.com/ams/ams-init@0.1.5.js"><\/script>\n</body>\n</html>');e.download=a,e.href="data:text/plain,".concat(t)}l.d(a,"a",(function(){return t})),l.d(a,"b",(function(){return r}));var r="//rap2api.taobao.org/app/mock/231578/ams/mock/"},159:function(e,a,l){"use strict";l.d(a,"a",(function(){return r})),l.d(a,"b",(function(){return i}));var t=l(143),r={id:1,text:"双11活动",date:1539792e6,time:"11:23",datetime:1539772664e3,switch:1,password:"abcdefg",textarea:"双11活动双11活动双11活动双11活动双11活动双11活动双11活动双11活动双11活动",color:"#f00",rate:3.7,radio:"d",checkbox:"b,c",select:"a,b,c",cascader:"zujian,form,checkbox",transfer:"b,c",datetimerange:"1547568120000,1551290400000",slider:55,progress:80,number:28,union:"aaa",inputnumber:1,image:"//b.appsimg.com/upload/vivaadmin/2018/11/07/69/1541579376290922128.png",headimage:"//b.appsimg.com/upload/vivaadmin/2018/11/07/69/1541579376290922128.png",file:"http://b.appsimg.com/upload/vivaadmin/2018/11/07/69/1541579376290922128.png",video:"https://1251962819.vod2.myqcloud.com/54067453vodtransgzp125",audio:"https://a.vpimg2.com/upload/upimg2/i/9b0e909ed263b25c.mp3",simpleObject:{text:"2",date:15438528e5},multiObject:{date:15444576e5,checkbox:"1",ArrayArray:[["4","324","234"]],ArrayObject:[{text:"2342",date:15457536e5},{text:"234",date:15451488e5}]},simpleArray:["3","1","2"],ArrayArray:[["23","23"]],editor:"<h1>Editor 编辑器</h1><h2>二级标题</h2><h3>三级标题</h3><h4>四级标题</h4><p>普通段落</p>",markdown:"# Markdown 编辑器",tag:[{id:"2001",name:"aaaa.bbb"}]},i={id:{type:"text",label:"id"},text:{type:"text",label:"文本",rules:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],props:{"suffix-icon":"el-icon-service"}},date:{type:"date",label:"日期"},time:{type:"time",label:"时间"},datetime:{type:"datetime",label:"日期时间"},switch:{type:"switch",label:"开关"},password:{type:"password",label:"密码"},textarea:{type:"textarea",label:"文本框"},color:{type:"color",label:"颜色"},rate:{type:"rate",label:"评分"},radio:{type:"radio",label:"单选",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"}}},checkbox:{type:"checkbox",label:"多选",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"}}},select:{type:"select",label:"select多选",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"}}},cascader:{type:"cascader",label:"级联选择",props:{options:[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"},{value:"xiaolv",label:"效率"},{value:"kekong",label:"可控"}]},{value:"daohang",label:"导航",children:[{value:"cexiangdaohang",label:"侧向导航"},{value:"dingbudaohang",label:"顶部导航"}]}]},{value:"zujian",label:"组件",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout 布局"},{value:"color",label:"Color 色彩"},{value:"typography",label:"Typography 字体"},{value:"icon",label:"Icon 图标"},{value:"button",label:"Button 按钮"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio 单选框"},{value:"checkbox",label:"Checkbox 多选框"},{value:"input",label:"Input 输入框"},{value:"input-number",label:"InputNumber 计数器"},{value:"select",label:"Select 选择器"},{value:"cascader",label:"Cascader 级联选择器"},{value:"switch",label:"Switch 开关"},{value:"slider",label:"Slider 滑块"},{value:"time-picker",label:"TimePicker 时间选择器"},{value:"date-picker",label:"DatePicker 日期选择器"},{value:"datetime-picker",label:"DateTimePicker 日期时间选择器"},{value:"upload",label:"Upload 上传"},{value:"rate",label:"Rate 评分"},{value:"form",label:"Form 表单"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table 表格"},{value:"tag",label:"Tag 标签"},{value:"progress",label:"Progress 进度条"},{value:"tree",label:"Tree 树形控件"},{value:"pagination",label:"Pagination 分页"},{value:"badge",label:"Badge 标记"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert 警告"},{value:"loading",label:"Loading 加载"},{value:"message",label:"Message 消息提示"},{value:"message-box",label:"MessageBox 弹框"},{value:"notification",label:"Notification 通知"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"NavMenu 导航菜单"},{value:"tabs",label:"Tabs 标签页"},{value:"breadcrumb",label:"Breadcrumb 面包屑"},{value:"dropdown",label:"Dropdown 下拉菜单"},{value:"steps",label:"Steps 步骤条"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog 对话框"},{value:"tooltip",label:"Tooltip 文字提示"},{value:"popover",label:"Popover 弹出框"},{value:"card",label:"Card 卡片"},{value:"carousel",label:"Carousel 走马灯"},{value:"collapse",label:"Collapse 折叠面板"}]}]},{value:"ziyuan",label:"资源",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"组件交互文档"}]}]}},transfer:{type:"transfer",label:"穿梭框",props:{options:[{value:"a",label:"黄金糕"},{value:"b",label:"双皮奶"},{value:"c",label:"蚵仔煎"},{value:"d",label:"龙须面"},{value:"e",label:"北京烤鸭"}]}},datetimerange:{type:"datetimerange",label:"时间范围",props:{type:"datetimerange"}},slider:{type:"slider",label:"滑块"},progress:{type:"progress",label:"进度"},inputnumber:{type:"inputnumber",label:"数字输入"},image:{type:"image",label:"图片上传",tip:"只能上传jpg/png文件，且不超过500kb",successUrlKey:"url",props:{action:"https://jsonplaceholder.typicode.com/posts/"}},headimage:{type:"headimage",label:"头像",tip:"只能上传jpg/png文件，且不超过500kb",successUrlKey:"url",props:{action:"https://jsonplaceholder.typicode.com/posts/"}},file:{type:"file",label:"文件上传",tip:"只能上传jpg/png文件，且不超过500kb",successUrlKey:"url",props:{action:"https://jsonplaceholder.typicode.com/posts/"}},video:{type:"video",label:"视频",tip:"只能上传jpg/png文件，且不超过500kb",successUrlKey:"url",props:{action:"https://jsonplaceholder.typicode.com/posts/"}},audio:{type:"audio",label:"音频",tip:"只能上传jpg/png文件，且不超过500kb",successUrlKey:"url",props:{action:"https://jsonplaceholder.typicode.com/posts/"}},editor:{type:"editor",label:"富文本"},markdown:{type:"markdown",label:"内容"},simpleObject:{type:"object",label:"simpleObject",fields:{text:{type:"text",label:"rule2",rules:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}]},date:{type:"date",label:"date"}}},multiObject:{type:"object",label:"multiObject",fields:{date:{type:"date",label:"date"},checkbox:{type:"checkbox",label:"checkbox",props:{options:{1:"黄金屋"}}},ArrayArray:{type:"array",label:"ArrayArray",field:{type:"array",label:"array",field:{type:"text",label:"text"}}},ArrayObject:{type:"array",label:"ArrayObject",field:{type:"object",label:"object",fields:{text:{type:"text",label:"text",rules:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}]},date:{type:"date",label:"date"}}}}}},simpleArray:{type:"array",label:"simpleArray",field:{type:"text",label:"text"}},ArrayArray:{type:"array",label:"ArrayArray",field:{type:"array",label:"array",field:{type:"text",label:"text"}}},union:{type:"union",label:"union",current:"text",fields:{date:{type:"timerange",label:"timerange1"},text:{type:"text",label:"text1",default:"sss"}}},tag:{type:"tag",label:"标签",props:{placeholder:"请输入标签",action:"".concat(t.b,"tag"),successCode:200,closable:!0}}}},165:function(e,a,l){"use strict";var t=l(64),r=l(166);t(t.P+t.F*!l(154)([].reduce,!0),"Array",{reduce:function(e){return r(this,e,arguments.length,arguments[1],!1)}})},166:function(e,a,l){var t=l(70),r=l(67),i=l(68),s=l(66);e.exports=function(e,a,l,o,c){t(a);var n=r(e),p=i(n),u=s(n.length),b=c?u-1:0,d=c?-1:1;if(l<2)for(;;){if(b in p){o=p[b],b+=d;break}if(b+=d,c?b<0:u<=b)throw TypeError("Reduce of empty array with no initial value")}for(;c?b>=0:u>b;b+=d)b in p&&(o=a(o,p[b],b,n));return o}}}]);