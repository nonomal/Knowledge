(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[511],{1396:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-2de2cfc5",path:"/iOS/Memory-management.html",title:"内存管理",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"1. ARC自动引用计数",slug:"_1-arc自动引用计数",children:[]},{level:2,title:"2. weak循环引用",slug:"_2-weak循环引用",children:[]},{level:2,title:"3. struct 和 class",slug:"_3-struct-和-class",children:[{level:3,title:"struct是值类型",slug:"struct是值类型",children:[]},{level:3,title:"class是引用类型",slug:"class是引用类型",children:[]}]},{level:2,title:"4. 深拷贝和浅拷贝",slug:"_4-深拷贝和浅拷贝",children:[]},{level:2,title:"5. 参数传递",slug:"_5-参数传递",children:[]},{level:2,title:"6. 写时复制",slug:"_6-写时复制",children:[]},{level:2,title:"7. BAD_ACCESS",slug:"_7-bad-access",children:[]}],filePathRelative:"iOS/Memory-management.md",git:{updatedTime:162556733e4,contributors:[]}}},612:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="内存管理" tabindex="-1"><a class="header-anchor" href="#内存管理" aria-hidden="true">#</a> 内存管理</h1><h2 id="_1-arc自动引用计数" tabindex="-1"><a class="header-anchor" href="#_1-arc自动引用计数" aria-hidden="true">#</a> 1. ARC自动引用计数</h2><p>初始化类的时候会分配内存，ARC自动计数实例被引用的次数，当不再被引用的时候释放内存； 默认创建的引用为强引用，只有当c1,c2,c3都取消对实例的引用时才会释放为实例分配的内存</p><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token punctuation">{</span>\n    <span class="token keyword">deinit</span> <span class="token punctuation">{</span>\n        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;deinit&quot;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> c1<span class="token punctuation">:</span> C<span class="token operator">?</span>\n<span class="token keyword">var</span> c2<span class="token punctuation">:</span> C<span class="token operator">?</span>\n<span class="token keyword">var</span> c3<span class="token punctuation">:</span> C<span class="token operator">?</span>\n\nc1 <span class="token operator">=</span> <span class="token function">C</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nc2 <span class="token operator">=</span> c1\nc3 <span class="token operator">=</span> c1\n\nc1 <span class="token operator">=</span> <span class="token constant">nil</span>\nc2 <span class="token operator">=</span> <span class="token constant">nil</span>\nc3 <span class="token operator">=</span> <span class="token constant">nil</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="_2-weak循环引用" tabindex="-1"><a class="header-anchor" href="#_2-weak循环引用" aria-hidden="true">#</a> 2. weak循环引用</h2><p>互相持有会引起循环引用，导致ARC引用计数永不为空，无法释放内存；添加weak关键字使用弱引用即可解决这个问题</p><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>\n    <span class="token keyword">weak</span> <span class="token keyword">var</span> b<span class="token punctuation">:</span> B<span class="token operator">?</span>\n    <span class="token keyword">deinit</span> <span class="token punctuation">{</span>\n        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;deinit A&quot;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> a<span class="token punctuation">:</span> A<span class="token operator">?</span>\n    <span class="token keyword">deinit</span> <span class="token punctuation">{</span>\n        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;deinit B&quot;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> a<span class="token punctuation">:</span> A<span class="token operator">?</span>\n<span class="token keyword">var</span> b<span class="token punctuation">:</span> B<span class="token operator">?</span>\n\na <span class="token operator">=</span> <span class="token function">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nb <span class="token operator">=</span> <span class="token function">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\na<span class="token operator">!</span><span class="token punctuation">.</span>b <span class="token operator">=</span> b\nb<span class="token operator">!</span><span class="token punctuation">.</span>a <span class="token operator">=</span> a\n\na <span class="token operator">=</span> <span class="token constant">nil</span>\nb <span class="token operator">=</span> <span class="token constant">nil</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="_3-struct-和-class" tabindex="-1"><a class="header-anchor" href="#_3-struct-和-class" aria-hidden="true">#</a> 3. struct 和 class</h2><ul><li><h3 id="struct是值类型" tabindex="-1"><a class="header-anchor" href="#struct是值类型" aria-hidden="true">#</a> struct是值类型</h3></li></ul><p>基础类型Int,String,Array等都是值类型；存放于栈区，不可继承</p><ul><li><h3 id="class是引用类型" tabindex="-1"><a class="header-anchor" href="#class是引用类型" aria-hidden="true">#</a> class是引用类型</h3></li></ul><p>存放于堆区，可继承</p><h2 id="_4-深拷贝和浅拷贝" tabindex="-1"><a class="header-anchor" href="#_4-深拷贝和浅拷贝" aria-hidden="true">#</a> 4. 深拷贝和浅拷贝</h2><ul><li>值类型深拷贝，像细胞分裂一样完全的复制一份出来</li></ul><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">struct</span> S <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> s1 <span class="token operator">=</span> <span class="token function">S</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">var</span> s2 <span class="token operator">=</span> s1\ns1<span class="token punctuation">.</span>s <span class="token operator">=</span> <span class="token number">1</span>\ns2<span class="token punctuation">.</span>s <span class="token operator">=</span> <span class="token number">2</span>\n<span class="token function">print</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span>s<span class="token punctuation">,</span> s2<span class="token punctuation">.</span>s<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>引用类型浅拷贝，仅复制对实例的引用，两个引用仍是同一个实例的引用</li></ul><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> c1 <span class="token operator">=</span> <span class="token function">C</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">let</span> c2 <span class="token operator">=</span> c1\nc1<span class="token punctuation">.</span>c <span class="token operator">=</span> <span class="token number">1</span>\nc2<span class="token punctuation">.</span>c <span class="token operator">=</span> <span class="token number">2</span>\n<span class="token function">print</span><span class="token punctuation">(</span>c1<span class="token punctuation">.</span>c<span class="token punctuation">,</span> c2<span class="token punctuation">.</span>c<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_5-参数传递" tabindex="-1"><a class="header-anchor" href="#_5-参数传递" aria-hidden="true">#</a> 5. 参数传递</h2><ul><li>值类型默认值传递，会复制一份传入函数内，如果想要修改外部变量必须显示声明inout，且在调用的时候添加&amp;</li></ul><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">struct</span> S <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token function">modify</span><span class="token punctuation">(</span><span class="token number">_</span> s<span class="token punctuation">:</span> <span class="token keyword">inout</span> S<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    s<span class="token punctuation">.</span>s <span class="token operator">=</span> <span class="token number">1</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token function">S</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token function">modify</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>s<span class="token punctuation">)</span>\n<span class="token function">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>s<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li>引用类型默认引用传递，会传入实例的引用，可以直接修改外部的实例</li></ul><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token function">modify</span><span class="token punctuation">(</span><span class="token number">_</span> c<span class="token punctuation">:</span> C<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    c<span class="token punctuation">.</span>c <span class="token operator">=</span> <span class="token number">1</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token function">C</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token function">modify</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>\n<span class="token function">print</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>c<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_6-写时复制" tabindex="-1"><a class="header-anchor" href="#_6-写时复制" aria-hidden="true">#</a> 6. 写时复制</h2><p>值类型数据在需要更改的时候才会真正的复制</p><h2 id="_7-bad-access" tabindex="-1"><a class="header-anchor" href="#_7-bad-access" aria-hidden="true">#</a> 7. BAD_ACCESS</h2><p>访问了已经释放的变量</p>',26),e={render:function(n,s){return p}}}}]);