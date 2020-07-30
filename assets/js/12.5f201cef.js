(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{367:function(e,v,_){"use strict";_.r(v);var o=_(42),t=Object(o.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"数据双向绑定原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据双向绑定原理"}},[e._v("#")]),e._v(" 数据双向绑定原理")]),e._v(" "),_("p",[_("code",[e._v("vue.js")]),e._v(" 是采用"),_("strong",[e._v("数据劫持")]),e._v("结合"),_("strong",[e._v("发布者-订阅者模式")]),e._v("的方式，\n通过 "),_("code",[e._v("Object.defineProperty()")]),e._v("来劫持各个属性的 "),_("code",[e._v("setter")]),e._v("，"),_("code",[e._v("getter")]),e._v("，\n在数据变动时发布消息给订阅者，触发相应的监听回调。")]),e._v(" "),_("ul",[_("li",[e._v("主要分为以下几个步骤：")])]),e._v(" "),_("blockquote",[_("ol",[_("li",[e._v("需要 "),_("code",[e._v("observe")]),e._v(" 的数据对象进行递归遍历，包括子属性对象的属性，\n都加上 "),_("code",[e._v("setter")]),e._v(" 和 "),_("code",[e._v("getter")]),e._v(" 这样的话，给这个对象的某个值赋值，就会触发 "),_("code",[e._v("setter")]),e._v("，那么就能监听到了数据变化")])])]),e._v(" "),_("blockquote",[_("ol",{attrs:{start:"2"}},[_("li",[_("code",[e._v("compile")]),e._v(" 解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，\n并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图")])])]),e._v(" "),_("blockquote",[_("ol",{attrs:{start:"3"}},[_("li",[_("p",[_("code",[e._v("Watcher")]),e._v(" 订阅者是 "),_("code",[e._v("Observer")]),e._v(" 和 "),_("code",[e._v("Compile")]),e._v(" 之间通信的桥梁，主要做的事情是:")]),e._v(" "),_("p",[e._v("① 在自身实例化时往属性订阅器(dep)里面添加自己")]),e._v(" "),_("p",[e._v("② 自身必须有一个 "),_("code",[e._v("update()")]),e._v("方法")]),e._v(" "),_("p",[e._v("③ 待属性变动 "),_("code",[e._v("dep.notice()")]),e._v("通知时，能调用自身的 "),_("code",[e._v("update()")]),e._v("方法，并触发 "),_("code",[e._v("Compile")]),e._v(" 中绑定的回调，则功成身退。")])])])]),e._v(" "),_("blockquote",[_("ol",{attrs:{start:"4"}},[_("li",[_("code",[e._v("MVVM")]),e._v(" 作为数据绑定的入口，整合 "),_("code",[e._v("Observer")]),e._v("、"),_("code",[e._v("Compile")]),e._v(" 和 "),_("code",[e._v("Watcher")]),e._v(" 三者，\n通过 "),_("code",[e._v("Observer")]),e._v(" 来监听自己的 "),_("code",[e._v("model")]),e._v(" 数据变化，通过 "),_("code",[e._v("Compile")]),e._v(" 来解析编译模板指令，\n最终利用 "),_("code",[e._v("Watcher")]),e._v(" 搭起 "),_("code",[e._v("Observer")]),e._v(" 和 "),_("code",[e._v("Compile")]),e._v(" 之间的通信桥梁，\n达到 "),_("strong",[e._v("数据变化 -> 视图更新")]),e._v("；"),_("strong",[e._v("视图交互变化"),_("code",[e._v("(input)")]),e._v(" -> 数据 "),_("code",[e._v("model")]),e._v(" 变更")]),e._v("的双向绑定效果。")])])])])}),[],!1,null,null,null);v.default=t.exports}}]);