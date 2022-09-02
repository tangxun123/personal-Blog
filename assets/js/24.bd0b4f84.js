(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{368:function(s,t,a){"use strict";a.r(t);var e=a(42),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"dist包无法在浏览器中直接打开"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dist包无法在浏览器中直接打开"}},[s._v("#")]),s._v(" dist包无法在浏览器中直接打开")]),s._v(" "),a("h2",{attrs:{id:"index-html为什么打不开？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#index-html为什么打不开？"}},[s._v("#")]),s._v(" index.html为什么打不开？")]),s._v(" "),a("p",[s._v("Vue打包后生成的dist文件中的index.html，双击在浏览器中打开后发现一片空白，打开控制台有很多报错：“Failed to load resource: net::ERR_FILE_NOT_FOUND”。\n这是因为dist文件是需要放在服务器上运行的，资源默认放在根目录下。打开index.html可以发现，css和js文件的引用使用的是绝对路径，例如：\n"),a("code",[s._v("<link href=/css/chunk-00d5eabc.f78fa75d.css rel=prefetch>")]),s._v("，对本地磁盘来说，/指向磁盘根目录，所以找不到引用的文件。")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("有以下解决方案；")]),s._v(" "),a("ol",[a("li",[s._v("使用 http-server 创建一个服务器来访问资源")]),s._v(" "),a("li",[s._v("手写一个简单的node服务器")])]),s._v(" "),a("h3",{attrs:{id:"_1-使用-http-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用-http-server"}},[s._v("#")]),s._v(" 1. 使用 http-server")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("安装：npm install http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("server "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g\n进入dist文件夹：cd dist\n执行命令：http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("server\n")])])]),a("p",[s._v("如此，进入"),a("code",[s._v("localhost:8080")]),s._v("就可以查看了")]),s._v(" "),a("h3",{attrs:{id:"_2-使用-express模块-搭建服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用-express模块-搭建服务"}},[s._v("#")]),s._v(" 2. 使用 express模块 搭建服务")]),s._v(" "),a("p",[s._v("在dist文件夹"),a("strong",[s._v("同级目录")]),s._v("创建一个"),a("code",[s._v("server.js")]),s._v("文件，"),a("code",[s._v("npm init")]),s._v(" 初始化项目")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// server.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" express "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'express'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("express")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("express"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("static")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dist"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("安装express的包，"),a("code",[s._v("npm i express --save")]),s._v("控制台输入 "),a("code",[s._v("node server.js")]),s._v("，如此，进入"),a("code",[s._v("localhost:8080")]),s._v("就可以查看了")])])])}),[],!1,null,null,null);t.default=n.exports}}]);