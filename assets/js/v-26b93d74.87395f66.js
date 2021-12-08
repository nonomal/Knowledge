(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[22],{4229:(e,i,l)=>{"use strict";l.r(i),l.d(i,{data:()=>p});const p={key:"v-26b93d74",path:"/Tools/Git.html",title:"Git",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"本地仓库",slug:"本地仓库",children:[{level:3,title:"基础操作",slug:"基础操作",children:[]},{level:3,title:"分支操作",slug:"分支操作",children:[]}]},{level:2,title:"远程仓库",slug:"远程仓库",children:[]},{level:2,title:"查看信息",slug:"查看信息",children:[]},{level:2,title:"配置",slug:"配置",children:[]}],filePathRelative:"Tools/Git.md",git:{updatedTime:1638959844e3,contributors:[]}}},9477:(e,i,l)=>{"use strict";l.r(i),l.d(i,{default:()=>d});const p=(0,l(6252).uE)('<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h1><h2 id="本地仓库" tabindex="-1"><a class="header-anchor" href="#本地仓库" aria-hidden="true">#</a> 本地仓库</h2><ul><li><h3 id="基础操作" tabindex="-1"><a class="header-anchor" href="#基础操作" aria-hidden="true">#</a> 基础操作</h3></li></ul><ol><li><p>初始化仓库</p><p><code>git init</code></p></li><li><p>添加新文件到暂存区</p><p><code>git add README.md</code></p></li><li><p>删除暂存区某文件</p><p><code>git rm --cache README.md</code></p></li><li><p>添加文件的更改到暂存区</p><p><code>git add README.md</code></p></li><li><p>恢复对暂存区文件的更改</p><p><code>git restore --staged README.md</code></p></li><li><p>从暂存区恢复工作区的文件更改</p><p><code>git restore README.md</code></p></li><li><p>将暂存区提交到本地仓库</p><p><code>git commit -m &#39;message&#39;</code></p></li><li><p>重置本地仓库到指定版本，并将暂存区恢复为对应版本</p><p><code>git reset HEAD^</code></p></li><li><p>重提某个版本，将工作区恢复为某个版本之前的版本；并生成新的提交用于恢复远程仓库</p><p><code>git revert HEAD</code></p></li></ol><ul><li><h3 id="分支操作" tabindex="-1"><a class="header-anchor" href="#分支操作" aria-hidden="true">#</a> 分支操作</h3></li></ul><ol><li><p>添加分支</p><p><code>git branch develop</code></p></li><li><p>删除分支</p><p><code>git branch -d develop</code></p></li><li><p>重命名分支</p><p><code>git branch -M main</code></p></li><li><p>强行改变某分支指向指定版本</p><p><code>git branch -f develop HEAD^</code></p></li><li><p>切换分支，并检出本地仓库某分支文件内容到工作区</p><p><code>git checkout develop</code></p><p><code>git switch develop</code></p></li><li><p>添加并切换分支</p><p><code>git checkout -b develop</code></p><p><code>git switch -c develop</code></p></li><li><p>当前分支合并某分支</p><p><code>git merge develop</code></p></li><li><p>变基当前分支到指定分支 (建议此种方式合并分支)</p><p><code>git rebase develop</code></p></li><li><p>交互式变基，从某个版本起开始选择</p><p><code>git rebase -i HEAD~3</code></p></li><li><p>检出到某个版本，检出实际上就是改变HEAD的指向，检出到某分支，HEAD指向某分支； 检出到某个版本而不是分支，HEAD指向某个版本，进入HEAD与分支分离的模式</p><p><code>git checkout HEAD^</code></p></li></ol><h2 id="远程仓库" tabindex="-1"><a class="header-anchor" href="#远程仓库" aria-hidden="true">#</a> 远程仓库</h2><ol><li><p>克隆远程仓库到本地</p><p><code>git clone http://localhost:3000/ericliuhusky/test.git</code></p></li><li><p>推送本地仓库到远程仓库</p><p><code>git push</code></p></li><li><p>抓取远程仓库到本地的远程分支，并不与本地分支合并</p><p><code>git fetch</code></p></li><li><p>拉取远程仓库到本地并与本地分支合并 = <code>git fetch</code> + <code>git merge</code></p><p><code>git pull</code></p></li><li><p>拉取远程仓库到本地并变基本地分支到远程分支</p><p><code>git pull --rebase</code></p></li></ol><h2 id="查看信息" tabindex="-1"><a class="header-anchor" href="#查看信息" aria-hidden="true">#</a> 查看信息</h2><ol><li><p>查看有哪些分支</p><p><code>git branch</code></p></li><li><p>查看包括远程分支的所有分支</p><p><code>git branch -al</code></p></li><li><p>查看最近一次的提交记录以及最近一次提交相比上次提交的文件内容具体更改的不同</p><p><code>git show</code></p></li><li><p>查看工作区相比暂存区有哪些文件更改</p><p><code>git status</code></p></li><li><p>查看工作区相比暂存区的文件内容具体更改的不同</p><p><code>git diff</code></p></li><li><p>查看提交记录 (同时显示出版本哈希值和HEAD以及分支指向)</p><p><code>git log</code></p></li><li><p>责查用户对文件的修改记录</p><p><code>git blame README.md</code></p></li><li><p>查看有哪些远程仓库</p><p><code>git remote</code></p></li><li><p>查看远程仓库的url地址</p><p><code>git remote get-url origin</code></p></li></ol><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><ol><li><p>设置提交用户信息</p><p><code>git config --global user.name &#39;ericliuhusky&#39;</code></p><p><code>git config --global user.email &#39;ericliuhusky@qq.com&#39;</code></p></li></ol>',12),d={render:function(e,i){return p}}}}]);