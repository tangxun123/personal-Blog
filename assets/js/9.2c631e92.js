(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{355:function(t,s,a){"use strict";a.r(s);var e=a(42),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git工作流程及规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git工作流程及规范"}},[t._v("#")]),t._v(" Git工作流程及规范")]),t._v(" "),a("h2",{attrs:{id:"基本使用流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本使用流程"}},[t._v("#")]),t._v(" 基本使用流程")]),t._v(" "),a("p",[a("code",[t._v("新建分支->切换本地分支->进行开发->提交到feature->合并到develop->进行测试->合并到master")])]),t._v(" "),a("h2",{attrs:{id:"分支概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支概念"}},[t._v("#")]),t._v(" 分支概念")]),t._v(" "),a("p",[t._v("分支是git中最重要的概念，分支可以理解为工作区，每个分支各自独立，在一个分支上修改代码时不会影响其他分支，在分支上我们可以做修改，提交，回退，合并等操作。\n当我们要做某项工作时我们需要基于develop创建新分支，当工作完成时我们需要提交合并申请将修改提交到develop再由负责人合并到master分支。\n举个例子：\n假设你准备开发一个新功能，但是需要两周才能完成，第一周你写了50%的代码，如果立刻提交，由于代码还没写完，不完整的代码库会导致别人不能干活了。如果等代码全部写完再一次提交，又存在丢失每天进度的巨大风险。\n现在有了分支，就不用怕了。你创建了一个属于你自己的分支，别人看不到，还继续在原来的分支上正常工作，而你在自己的分支上干活，想提交就提交，直到开发完毕后，再一次性合并到原来的分支上，这样，既安全，又不影响别人工作。")]),t._v(" "),a("h2",{attrs:{id:"分支管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支管理"}},[t._v("#")]),t._v(" 分支管理")]),t._v(" "),a("p",[a("code",[t._v("分支主要分为master、develop、feature、hotfix")])]),t._v(" "),a("ol",[a("li",[t._v("feature分支为功能分支，当我们需要开发新功能时我们要基于develop创建自己的feature分支，格式为feature/xxxx（功能描述）。\n使用完毕后需要删除掉此分支。")]),t._v(" "),a("li",[t._v("develop分支为开发分支，当我们在feature分支开发完毕后要将代码提交到develop分支，develop的代码将发布到测试环境供测试人员测试。")]),t._v(" "),a("li",[t._v("master分支为项目的主分支，当develop分支的代码测试完成后会提交到master分支，master分支的代码为稳定版本供项目上线使用。")]),t._v(" "),a("li",[t._v("hotfix分支为补丁分支，当master上的代码出现bug时我们将基于master创建hotfix分支来修改紧急的bug，hotfix分支的格式为hotfix/xxxx(功能描述)，使用完毕后需要删除掉此分支。")])]),t._v(" "),a("h2",{attrs:{id:"git常用指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git常用指令"}},[t._v("#")]),t._v(" Git常用指令")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("add")]),t._v(" 将文件添加/移除暂存区")])]),t._v(" "),a("p",[a("strong",[t._v("add 前一定要"),a("code",[t._v("git diff .")]),t._v("检查一下自己的修改")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加")]),t._v("\ngit add 文件路径\ngit add "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代表将全部修改加入暂存区；")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 移除")]),t._v("\ngit checkout 文件路径\ngit checkout "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代表将修改全部移除暂存区；")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[a("code",[t._v("commit")]),t._v(" 将暂存区的文件修改记做一次提交并保存在本地分支")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("git commit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 保存一次提交")]),t._v("\ngit log "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("n第几次提交 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("p "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查看指定提交的具体提交内容；")]),t._v("\ngit log "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("n第几次提交 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("stat "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查看指定提交的提交内容列表")]),t._v("\n\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[a("code",[t._v("pull")]),t._v(" 拉取远程分支的代码")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("git pull origin xxx  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 拉取指定远程分支代码，(git pull)不指定具体分支时拉取本地分支对应的远程分支")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("如果是多人协作开发，拉取代码的时候可能会产生冲突，这时需要解决冲突 再次提交解决冲突后的最新代码，"),a("code",[t._v("即以下操作")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("git add "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" \ngit commit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'解决冲突'")]),t._v("\ngit push origin xxx "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将当前本地分支的修改推送到远程分支")]),t._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[a("code",[t._v("push")]),t._v(" 推送本地分支修改至远程分支")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("git push origin xxx "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将当前本地分支的修改推送到远程分支")]),t._v("\ngit push "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 为强制提交 如果本地分支落后于远程分支使用 git push -f 会覆盖掉远程分支的提交。慎用!")]),t._v("\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[a("code",[t._v("checkout")]),t._v(" 切换分支及创建新分支")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("git checkout "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'分支名'")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 切换分支；")]),t._v("\ngit checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("b "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'分支名'")]),t._v(" origin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("远程分支名 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建分支并关联远程分支；")]),t._v("\ngit checkout "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将修改移除暂存区")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("想要切换分支，vscode编辑器同样可以操作-----左下角源代码管理，点击可以切换分支及创建新分支")])]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[a("code",[t._v("reset")]),t._v(" 回退版本 及 回退已经加入暂存区的文件")])]),t._v(" "),a("p",[t._v("如果你想回到上一次commit的版本可以"),a("code",[t._v("git reset --hard")]),t._v("，\n如果想要回到指定版本可以"),a("code",[t._v('git reset --hard "版本哈希值"')]),t._v("，\n在回退版本时加 -- hard是将代码完全恢复到指定的版本，也就是说当前的修改将消失，如果不加-- hard的话你的修改也会被带到恢复的版本。")]),t._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[a("code",[t._v("branch")]),t._v(" 列出分支/创建分支/删除分支")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("git branch  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 列出本地所有分支,当前分支会被星号标示出。")]),t._v("\ngit branch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("v "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//可以看见每一个分支的最后一次提交。")]),t._v("\ngit branch "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'分支名'")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建一个新的分支(当你用这种方式创建分支的时候,分支是基于你的上一次提交建立的)。")]),t._v("\ngit branch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("d "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'分支名'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除一个分支")]),t._v("\ngit branch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'分支名'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 强制删除一个分支")]),t._v("\n\n")])])]),a("ol",{attrs:{start:"8"}},[a("li",[a("code",[t._v("log")]),t._v(" 查看一个分支的历史提交记录")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("git log "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("oneline "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("number  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//每条log只显示一行,显示number条.")]),t._v("\ngit log "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("oneline "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("graph  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以图形化地表示出分支合并历史.")]),t._v("\ngit log "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'分支名'")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以显示特定分支的log.")]),t._v("\ngit log "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("oneline branch1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v("branch2  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以查看在分支1,却不在分支2中的提交.^表示排除这个分支(Window下可能要给^branch2加上引号).")]),t._v("\ngit log "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("decorate  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//会显示出tag信息.")]),t._v("\ngit log "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("author"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("author name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以指定作者的提交历史.")]),t._v("\ngit log "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("since "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("before "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("until "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("after  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据提交时间筛选log")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);