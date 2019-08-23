// 更新日志
export default [
    {
        version: '0.13.0',
        date: '2019.08.21',
        log: [
            'feat: field-image、field-headimage、field-file 增加默认上传地址；',
            'feat: block-list、field-object 增加支持 filed 的 changeConfig 配置，实现字段间联动；',
            'feat: field-image 支持显示已上传列表，新增默认图片列表；',
            'feat: element-ui 升级到 2.11.1 版本'
        ]
    },
    {
        version: '0.12.x',
        date: '2019.08.16',
        log: [
            'feat: block-list新增三个位置的 operations-slot（rightTop、leftBottom、rightBottom）',
            'feat: field-unitselect 增加 slot 显示位置和宽度配置的支持',
            'feat: field-text 增加文字类型的 slots 配置支持',
            'fix: field-input 的 slots 名字写错',
            'fix: 如果列表接口没有返回 list 字段时代表没有数据，而不是直接显示报错提示',
            'fix: block-collapse 在没有默认 active 时报错'
        ]
    },
    {
        version: '0.11.0',
        date: '2019.08.13',
        log: [
            'feat：router 支持 component 配置'
        ]
    },
    {
        version: '0.10.x',
        date: '2019.08.08',
        log: [
            'feat: 增加 block-carousel 组件',
            'fix: 远程搜索当 ctx=view 时增加 isInitRemoteOptions 判断 ',
            'fix: block-tabs 支持更多属性配置',
            'fix：list 的搜索传值需要兼容零',
            'fix：block-list 的 search 传值需要兼容0'
        ]
    },
    {
        version: '0.9.x',
        date: '2019.08.01',
        log: [
            'feat: 增加支持指定某几个 field 变成行内表单，并且支持设置宽度',
            'feat: 增加 block-grid 布局',
            'fix: package.json 的 element 版本没有更新，导致 npm 安装使用的效果不一致',
            'fix: block-card 的操作按钮样式问题',
            'fix: block-router 的字体样式问题',
            'fix: 修改ams-operations，避免在没有 operations 时也生成一个空的 div 节点'
        ]
    },
    {
        version: '0.8.x',
        date: '2019.07.22',
        log: [
            'feat: 远程搜索添加 isInitRemoteOptions 配置参数，默认为 true',
            'feat: 增加文字链接类型 field-link',
            'feat：block-collapse 绑定外部传入的on方法',
            'feat: field-file、field-video、field-audio 增加对按钮的文案 button-label 和 size 配置支持',
            'feat: block-list 增加对 align 配置支持',
            'feat: 更新 element-ui 至 2.9.1',
            'fix: element 时间格式化代码引用已兼容处理部分',
            'fix: 调整 field-array 类型在表格里的行高',
            'fix: 卡片区块如果 header 是通过 slotBlock 配置到，去掉 header 自带的 padding 和 border',
            'fix：列表的操作按钮在不同 size 时上下间距问题'
        ]
    },
    {
        version: '0.7.x',
        date: '2019.06.13',
        log: [
            'feat: 支持 Dropdown 下拉菜单区块',
            'feat: 列表区块增加 slot: "tableTop"，显示在搜索条和表格之间',
            'feat: 列表区块的搜索条支持按回车触发搜索',
            'feat: field-color 在 view 状态下优化成纯展示，不可点',
            'feat: operation 加入 tooltip 配置，支持 string 和 object 两种格式',
            'feat：新增树形控件 field-tree 及 demo',
            'feat: 增加 arraylist 的 collapseLimit 参数',
            'feat: form block 增加 field 实例的 ref 引用',
            'feat: SELECT_REMOTE远程select搜索重构优化',
            'feat: addItemAfter、addItemDialog、editItemAfter、editItemDialog 增加边距和滚动进入视图',
            'feat: dropdown operation优化',
            'feat: 增加isInitEmpty参数控制初始化的请求',
            'feat: 增加debounce参数控制请求的节流',
            'feat: 增加isCache参数控制缓存数据',
            'feat: 增加isLock参数控制多请求并发',
            'feat: 增加isMiniBackfill参数控制回填行为',
            'feat: 增加transform参数控制options组装定制',
            'feat: 增加request参数控制接口请求过程及参数定制',
            'feat: 支持checkbox、radio等options的异步获取',
            'feat: @list增加可以通过$arg修改当前页码（如搜索传入@list:1重置页码为1）',
            'fix: 图表BASE，删除title非必须参数',
            'fix: 级联选择器在view状态下 "\" 的颜色问题',
            'fix: 修复object、array、union三种特殊类型的默认值逻辑',
            'fix: 修复卡片区块的操作按钮样式问题',
            'fix: 修复field-array在没有label时的样式问题和显示NaN问题',
            'fix: 修复默认api action取值问题',
            'fix: block-form，在ctx为view时，去除必填标识等校验规则',
            'fix: show action增加延时等待子blocks渲染ready',
            'fix: 导航菜单增加子导航数量判断',
            'fix: 修复SELECT_REMOTE的传值被清空的问题',
            'fix: 修复list内的props内含有type属性时sort不生效的问题',
            'fix: 修复值在==时不会触发fieldChange',
            '...'
        ]
    },
    {
        version: '0.6.x',
        date: '2019.04.16',
        log: [
            'feat: 更新AMS_CONFIG可视化配置文件',
            'feat: 添加OA搜索示例DEMO',
            'feat: 增加form 的desc配置',
            'feat: title更新，增加函数比较，增加field的默认ctx',
            'feat: 增加list分页显示总数',
            'feat: 增加基础field类型共享共用逻辑',
            'feat: block内可以通过config选项配置全局配置',
            'feat: text、textarea支持显示折叠配置',
            'feat: 调整operations行间距',
            'feat: 新增union类型field',
            'fix: 默认action获取$arg的错误',
            'fix: 增加配置示例，修复使用对象值时equal的判断问题',
            'fix: 更新tabs样式',
            'fix：steps增加block.style，tabs去除内置visible，增加绑定element内置方法',
            'fix: radio如果有0值无法首先选中',
            'fix：tab block去除默认全部展开',
            'fix: 去除navbar的scoped限制'
        ]
    },
    {
        version: '0.5.x',
        date: '2019.04.02',
        log: [
            'feat: 多选类view状态统一改成纯文本方式',
            'feat: request responseInterceptor增加options返回',
            'feat: component支持html配置',
            'feat: 将card block集成到主框架内',
            'feat: 支持field的info提示信息配置',
            'feat: object类型支持layout配置和show条件、hidden配置',
            'feat: 优化layout配置，被合并的field可以不用再显式的写fieldName: false隐藏原field',
            'feat: 优化show条件配置，支持通过深层的key，如： show: "a.b.c"',
            'feat: 优化list共用逻辑共享方式，可以通过配置 ams.configs.baseBlockType.table = "list"',
            'fix: 多选值如果是0值view的问题',
            'fix: 多选值array类型的options的value会默认转成string，可以在field配置useStringValue为false关闭转换',
            'fix: on事件的this指向问题',
            'fix: 多选类0值无法匹配的问题',
            'fix: list的字段hidden设置失效',
            'fix: remote select内获取resource.api.successCode错误',
            '...'
        ]
    },
    {
        version: '0.4.x',
        date: '2019.02.05',
        log: [
            'feat: router菜单外链增加target配置，支持在本页打开',
            'feat: date和datetime增加支持传入view的format',
            'feat: 修复element-ui的dialog position:fixed 优先度不高可能会被覆盖的问题',
            'feat: 修复router block于项目已有vue-router可能的冲突问题',
            'feat: 增加全局参数拦截器',
            'feat: 把 element-ui 从 2.4.8 更新到 2.5.4',
            'feat: components支持打包单个',
            'feat: form 内的operation支持通过show条件控制显示条件',
            'feat: field支持配置hidden实现隐藏',
            'fix: selectOptions的错误图',
            'fix: select field兼容多选和单选',
            'fix: video field增加style透传',
            'fix: 非顶级field无默认get和set、view，增加兼容判断'
        ]
    },
    {
        version: '0.3.x',
        date: '2018.12.08',
        log: [
            'feat: fields不使用computed实现，方便运行时修改',
            'feat: config方法变成深度合并',
            'feat: resource增加foreignKeys用于资源关联',
            'feat: 内置api action支持深度合并修改请求params，方便定制重用',
            'feat: 默认的api action（@read、@list等）在code检查失败时会抛出error，使链式action调用中断',
            'feat: contentType:json | form（post数据格式） 和 withCredentials的配置支持在resource配置和通过ams.config全局配置',
            'feat: action只有在显式return数据的时候才会记录$prevReturn，方便使用者控制action参数的有序传递',
            'feat: $prevReturn支持在调用action时传入$prevReturn参数覆盖（如：列表operation场景）',
            'feat: resource增加key的配置，默认为id，方便做数据项标记和数据关联以及默认接口',
            'feat: operation的去除event参数配置，改用operation的key作为event参数',
            'feat: 实现block和resource的任意层级的简化配置机制，通过 { base: ams.configs.LIST } 或者 { base: "LIST" } 简化常用配置',
            'feat: 支持任意层级数组array和对象object复合field类型的描述',
            'feat: dialog弹窗配置功能实现',
            'feat: 跨block的事件event和动作action调用实现',
            'feat: action支持传入参数',
            'feat: select远程搜索可过滤的高级功能',
            'feat: 支持任意层级数组array复合field类型的描述',
            'feat: 支持任意层级对象object复合field类型的描述',
            'fix: radio和select的key问题',
            'fix: 修复多个action的$prevReturn问题',
        ]
    },
    {
        version: '0.2.x',
        date: '2018.11.09',
        log: [
            'feat: 规范化mixin、导出提供给自定义filed、block使用',
            'feat: 去除filter的props为"fieldOptions"的默认设置，修改为不传入filter.options则使用field.props.options',
            'feat: 增加render方法简化初始化配置',
            'feat: 实现block的循环嵌套结构',
            'feat: operation的实现和配置',
            'feat: 列表强化支持',
            'feat: 多filed联动实现',
            'fix: resource的props会被全部覆盖的问题',
            '...'
        ]
    },
    {
        version: '0.1.x',
        date: '2018.10.15-10.19',
        log: [
            'feat: 基础block支持',
            'feat: 基础resource支持',
            'feat: 基础field支持',
            'feat: 接口CURD等交互',
            'feat: 表单校验',
            '...'
        ]
    }
]
