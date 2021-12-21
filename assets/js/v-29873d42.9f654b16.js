(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[1285],{368:(s,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>e});const e={key:"v-29873d42",path:"/iOS/OC-%3ESwift.html",title:"Objective-C组件库用Swift转写的方法论",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"OC库重构拆分",slug:"oc库重构拆分",children:[]},{level:2,title:"使用Swift转写替换",slug:"使用swift转写替换",children:[]}],filePathRelative:"iOS/OC->Swift.md",git:{updatedTime:1640082093e3,contributors:[]}}},147:(s,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>t});const e=(0,a(6252).uE)('<h1 id="objective-c组件库用swift转写的方法论" tabindex="-1"><a class="header-anchor" href="#objective-c组件库用swift转写的方法论" aria-hidden="true">#</a> Objective-C组件库用Swift转写的方法论</h1><h2 id="oc库重构拆分" tabindex="-1"><a class="header-anchor" href="#oc库重构拆分" aria-hidden="true">#</a> OC库重构拆分</h2><p>目的为将组件库拆分为OC特性和可用Swift替换的两部分</p><p>进入组件Pod目录，复制Classes文件夹下所有文件并重命名为Classes_Swift，新建空的Classes_OC文件夹。 全局搜索#define、typedef、static，将所有搜索到的头文件拆分（.m文件可以忽略），将#define宏拆分出来在原文件名基础上加上后缀_Macro，将typedef拆分出来再原文件名基础上加上后缀_TypeDef，将static拆分出来在原文件名基础上加上后缀_Global。 整个文件本身全部都是#define宏、typedef、static静态变量的，直接将文件移动至Classes_OC文件夹。新建三个目录，Macro、TypeDef、Global，将拆分出来的文件分类放入。</p><p>此外还有Swift无法表示的NSInvocation，Swift类无法被OC继承ObjcSubclassingRestricted</p><p>最后修改podspec<code>s.source_files = &#39;Pod/Classes_Swift/**/*.{h,m}&#39;, &#39;Pod/Classes_OC/**/*&#39;</code></p><h2 id="使用swift转写替换" tabindex="-1"><a class="header-anchor" href="#使用swift转写替换" aria-hidden="true">#</a> 使用Swift转写替换</h2><p>文件命名和类命名和函数命名要与原组件库完全一致，此部分作为接口兼容外部业务的调用，可起名叫做OCDerecated。向外再抽一层，作为Swift风格的实现。</p><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code>@objcMembers\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token operator">&lt;</span>#<span class="token builtin">NSClass</span>#<span class="token operator">&gt;</span><span class="token punctuation">:</span> <span class="token builtin">NSObject</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">func</span> <span class="token operator">&lt;</span>#function#<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        \n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token atrule">@objc</span> <span class="token keyword">public</span> <span class="token keyword">extension</span> <span class="token operator">&lt;</span>#<span class="token builtin">NSObject</span>#<span class="token operator">&gt;</span> <span class="token punctuation">{</span>\n    \n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token atrule">@objc</span> <span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token operator">&lt;</span>#<span class="token builtin">NSEnum</span>#<span class="token operator">&gt;</span><span class="token punctuation">:</span> <span class="token builtin">Int</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> <span class="token operator">&lt;</span>#one#<span class="token operator">&gt;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>最后修改podspec<code>s.source_files = &#39;Pod/Classes_Swift/**/*.{swift}&#39;, &#39;Pod/Classes_OC/**/*&#39;</code></p>',12),t={render:function(s,n){return e}}}}]);