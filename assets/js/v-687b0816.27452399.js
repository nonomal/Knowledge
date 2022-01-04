(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[3212],{4795:(e,i,l)=>{"use strict";l.r(i),l.d(i,{data:()=>c});const c={key:"v-687b0816",path:"/Tools/SwiftToolChain.html",title:"Swift工具链",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"swiftc",slug:"swiftc",children:[]},{level:2,title:"swift package",slug:"swift-package",children:[]},{level:2,title:"swift",slug:"swift",children:[]},{level:2,title:"xcode-select",slug:"xcode-select",children:[]},{level:2,title:"xcodebuild",slug:"xcodebuild",children:[]},{level:2,title:"xcode",slug:"xcode",children:[]}],filePathRelative:"Tools/SwiftToolChain.md",git:{updatedTime:1641278648e3,contributors:[]}}},6498:(e,i,l)=>{"use strict";l.r(i),l.d(i,{default:()=>d});const c=(0,l(6252).uE)('<h1 id="swift工具链" tabindex="-1"><a class="header-anchor" href="#swift工具链" aria-hidden="true">#</a> Swift工具链</h1><h2 id="swiftc" tabindex="-1"><a class="header-anchor" href="#swiftc" aria-hidden="true">#</a> swiftc</h2><ol><li><p>编译</p><p><code>swiftc main.swift -o main.out</code></p></li><li><p>输出语法树</p><p><code>swiftc -dump-ast main.swift</code></p></li><li><p>输出Swift Intermediate Language</p><p><code>swiftc -emit-sil main.swift</code></p></li><li><p>输出汇编</p><p><code>swiftc -emit-assembly main.swift</code></p></li><li><p>输出LLVM IR</p><p><code>swiftc -emit-ir main.swift</code></p></li></ol><h2 id="swift-package" tabindex="-1"><a class="header-anchor" href="#swift-package" aria-hidden="true">#</a> swift package</h2><ol><li><p>初始化包</p><p><code>swift package init</code></p><ul><li><p>初始化可执行包</p><p><code>swift package init --type executable</code></p></li></ul></li><li><p>解析包依赖，并抓取</p><p><code>swift package resolve</code></p></li><li><p>展示包依赖图</p><p><code>swift package show-dependencies</code></p></li><li><p>更新包依赖</p><p><code>swift package update</code></p></li><li><p>重置缓存的依赖</p><p><code>swift package reset</code></p></li><li><p>生成Xcode项目</p><p><code>swift package generate-xcodeproj</code></p></li></ol><h2 id="swift" tabindex="-1"><a class="header-anchor" href="#swift" aria-hidden="true">#</a> swift</h2><ol><li><p>编译</p><p><code>swift build</code></p><ul><li><p>编译发布版本</p><p><code>swift build -c release</code></p></li></ul></li><li><p>运行</p><p><code>swift run</code></p></li></ol><h2 id="xcode-select" tabindex="-1"><a class="header-anchor" href="#xcode-select" aria-hidden="true">#</a> xcode-select</h2><ol><li><p>显示当前使用的Xcode</p><p><code>xcode-select -p</code></p></li><li><p>切换指定的Xcode，工具链也会随之一同切换</p><p><code>sudo xcode-select -s /Applications/Xcode13.0-beta/Xcode-beta.app/Contents/Developer</code></p></li></ol><h2 id="xcodebuild" tabindex="-1"><a class="header-anchor" href="#xcodebuild" aria-hidden="true">#</a> xcodebuild</h2><ol><li><p>终端使用代理</p><p><code>export all_proxy=127.0.0.1:1087</code></p></li><li><p>Xcode通过系统Git拉取依赖</p><p><code>xcodebuild -resolvePackageDependencies -scmProvider system</code></p></li></ol><h2 id="xcode" tabindex="-1"><a class="header-anchor" href="#xcode" aria-hidden="true">#</a> xcode</h2><ol><li><p>Xcode添加本地Swift Package(必须是git仓库)</p><p><code>file:///Users/&lt;username&gt;/Workspace/&lt;packagename&gt;/</code></p></li></ol>',13),d={render:function(e,i){return c}}}}]);