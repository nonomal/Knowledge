(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{369:function(v,_,e){"use strict";e.r(_);var t=e(45),i=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[v._v("#")]),v._v(" Git")]),v._v(" "),e("h2",{attrs:{id:"本地仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地仓库"}},[v._v("#")]),v._v(" 本地仓库")]),v._v(" "),e("ul",[e("li",[e("h3",{attrs:{id:"基础操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础操作"}},[v._v("#")]),v._v(" 基础操作")])])]),v._v(" "),e("ol",[e("li",[e("p",[v._v("初始化仓库")]),v._v(" "),e("p",[e("code",[v._v("git init")])])]),v._v(" "),e("li",[e("p",[v._v("添加新文件到暂存区")]),v._v(" "),e("p",[e("code",[v._v("git add README.md")])])]),v._v(" "),e("li",[e("p",[v._v("删除暂存区某文件")]),v._v(" "),e("p",[e("code",[v._v("git rm --cache README.md")])])]),v._v(" "),e("li",[e("p",[v._v("添加文件的更改到暂存区")]),v._v(" "),e("p",[e("code",[v._v("git add README.md")])])]),v._v(" "),e("li",[e("p",[v._v("恢复对暂存区文件的更改")]),v._v(" "),e("p",[e("code",[v._v("git restore --staged README.md")])])]),v._v(" "),e("li",[e("p",[v._v("从暂存区恢复工作区的文件更改")]),v._v(" "),e("p",[e("code",[v._v("git restore README.md")])])]),v._v(" "),e("li",[e("p",[v._v("将暂存区提交到本地仓库")]),v._v(" "),e("p",[e("code",[v._v("git commit -m 'message'")])])]),v._v(" "),e("li",[e("p",[v._v("重置本地仓库到指定版本，并将暂存区恢复为对应版本")]),v._v(" "),e("p",[e("code",[v._v("git reset HEAD^")])])]),v._v(" "),e("li",[e("p",[v._v("重提某个版本，将工作区恢复为某个版本之前的版本；并生成新的提交用于恢复远程仓库")]),v._v(" "),e("p",[e("code",[v._v("git revert HEAD")])])])]),v._v(" "),e("ul",[e("li",[e("h3",{attrs:{id:"分支操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支操作"}},[v._v("#")]),v._v(" 分支操作")])])]),v._v(" "),e("ol",[e("li",[e("p",[v._v("添加分支")]),v._v(" "),e("p",[e("code",[v._v("git branch develop")])])]),v._v(" "),e("li",[e("p",[v._v("删除分支")]),v._v(" "),e("p",[e("code",[v._v("git branch -d develop")])])]),v._v(" "),e("li",[e("p",[v._v("重命名分支")]),v._v(" "),e("p",[e("code",[v._v("git branch -M main")])])]),v._v(" "),e("li",[e("p",[v._v("强行改变某分支指向指定版本")]),v._v(" "),e("p",[e("code",[v._v("git branch -f develop HEAD^")])])]),v._v(" "),e("li",[e("p",[v._v("切换分支，并检出本地仓库某分支文件内容到工作区")]),v._v(" "),e("p",[e("code",[v._v("git checkout develop")])]),v._v(" "),e("p",[e("code",[v._v("git switch develop")])])]),v._v(" "),e("li",[e("p",[v._v("添加并切换分支")]),v._v(" "),e("p",[e("code",[v._v("git checkout -b develop")])]),v._v(" "),e("p",[e("code",[v._v("git switch -c develop")])])]),v._v(" "),e("li",[e("p",[v._v("当前分支合并某分支")]),v._v(" "),e("p",[e("code",[v._v("git merge develop")])])]),v._v(" "),e("li",[e("p",[v._v("变基当前分支到指定分支\n(建议此种方式合并分支)")]),v._v(" "),e("p",[e("code",[v._v("git rebase develop")])])]),v._v(" "),e("li",[e("p",[v._v("交互式变基，从某个版本起开始选择")]),v._v(" "),e("p",[e("code",[v._v("git rebase -i HEAD~3")])])]),v._v(" "),e("li",[e("p",[v._v("检出到某个版本，检出实际上就是改变HEAD的指向，检出到某分支，HEAD指向某分支；\n检出到某个版本而不是分支，HEAD指向某个版本，进入HEAD与分支分离的模式")]),v._v(" "),e("p",[e("code",[v._v("git checkout HEAD^")])])])]),v._v(" "),e("h2",{attrs:{id:"远程仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库"}},[v._v("#")]),v._v(" 远程仓库")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("克隆远程仓库到本地")]),v._v(" "),e("p",[e("code",[v._v("git clone http://localhost:3000/ericliuhusky/test.git")])])]),v._v(" "),e("li",[e("p",[v._v("推送本地仓库到远程仓库")]),v._v(" "),e("p",[e("code",[v._v("git push")])])]),v._v(" "),e("li",[e("p",[v._v("抓取远程仓库到本地的远程分支，并不与本地分支合并")]),v._v(" "),e("p",[e("code",[v._v("git fetch")])])]),v._v(" "),e("li",[e("p",[v._v("拉取远程仓库到本地并与本地分支合并 = "),e("code",[v._v("git fetch")]),v._v(" + "),e("code",[v._v("git merge")])]),v._v(" "),e("p",[e("code",[v._v("git pull")])])]),v._v(" "),e("li",[e("p",[v._v("拉取远程仓库到本地并变基本地分支到远程分支")]),v._v(" "),e("p",[e("code",[v._v("git pull --rebase")])])])]),v._v(" "),e("h2",{attrs:{id:"查看信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看信息"}},[v._v("#")]),v._v(" 查看信息")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("查看有哪些分支")]),v._v(" "),e("p",[e("code",[v._v("git branch")])])]),v._v(" "),e("li",[e("p",[v._v("查看包括远程分支的所有分支")]),v._v(" "),e("p",[e("code",[v._v("git branch -al")])])]),v._v(" "),e("li",[e("p",[v._v("查看最近一次的提交记录以及最近一次提交相比上次提交的文件内容具体更改的不同")]),v._v(" "),e("p",[e("code",[v._v("git show")])])]),v._v(" "),e("li",[e("p",[v._v("查看工作区相比暂存区有哪些文件更改")]),v._v(" "),e("p",[e("code",[v._v("git status")])])]),v._v(" "),e("li",[e("p",[v._v("查看工作区相比暂存区的文件内容具体更改的不同")]),v._v(" "),e("p",[e("code",[v._v("git diff")])])]),v._v(" "),e("li",[e("p",[v._v("查看提交记录\n(同时显示出版本哈希值和HEAD以及分支指向)")]),v._v(" "),e("p",[e("code",[v._v("git log")])])]),v._v(" "),e("li",[e("p",[v._v("责查用户对文件的修改记录")]),v._v(" "),e("p",[e("code",[v._v("git blame README.md")])])]),v._v(" "),e("li",[e("p",[v._v("查看有哪些远程仓库")]),v._v(" "),e("p",[e("code",[v._v("git remote")])])]),v._v(" "),e("li",[e("p",[v._v("查看远程仓库的url地址")]),v._v(" "),e("p",[e("code",[v._v("git remote get-url origin")])])])]),v._v(" "),e("h2",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[v._v("#")]),v._v(" 配置")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("设置提交用户信息")]),v._v(" "),e("p",[e("code",[v._v("git config --global user.name 'ericliuhusky'")])]),v._v(" "),e("p",[e("code",[v._v("git config --global user.email 'ericliuhusky@qq.com'")])])])])])}),[],!1,null,null,null);_.default=i.exports}}]);