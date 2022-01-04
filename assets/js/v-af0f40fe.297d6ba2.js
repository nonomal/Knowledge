(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[6840],{9707:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-af0f40fe",path:"/iOS/Concurrency.html",title:"并发编程",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"异步函数的定义和调用",slug:"异步函数的定义和调用",children:[]},{level:2,title:"串行",slug:"串行",children:[]},{level:2,title:"并行",slug:"并行",children:[{level:3,title:"循环并行",slug:"循环并行",children:[]},{level:3,title:"异步序列",slug:"异步序列",children:[]}]},{level:2,title:"群组",slug:"群组",children:[]},{level:2,title:"数据竞争",slug:"数据竞争",children:[{level:3,title:"数据未隔离",slug:"数据未隔离",children:[]},{level:3,title:"参与者",slug:"参与者",children:[]}]},{level:2,title:"结构化任务",slug:"结构化任务",children:[{level:3,title:"串行",slug:"串行-1",children:[]},{level:3,title:"并行",slug:"并行-1",children:[]},{level:3,title:"群组",slug:"群组-1",children:[]}]}],filePathRelative:"iOS/Concurrency.md",git:{updatedTime:1641278648e3,contributors:[]}}},8346:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h1 id="并发编程" tabindex="-1"><a class="header-anchor" href="#并发编程" aria-hidden="true">#</a> 并发编程</h1><h2 id="异步函数的定义和调用" tabindex="-1"><a class="header-anchor" href="#异步函数的定义和调用" aria-hidden="true">#</a> 异步函数的定义和调用</h2><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token number">_</span> number<span class="token punctuation">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span> async <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">Int</span> <span class="token punctuation">{</span>\n    await <span class="token builtin">Task</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1_000_000_000</span><span class="token punctuation">)</span>\n    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Concurrency! <span class="token interpolation"><span class="token delimiter variable">\\(</span>number<span class="token delimiter variable">)</span></span>&quot;</span><span class="token punctuation">)</span>\n    \n    <span class="token keyword">return</span> number\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> n <span class="token operator">=</span> await <span class="token function">hello</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n<span class="token function">print</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="串行" tabindex="-1"><a class="header-anchor" href="#串行" aria-hidden="true">#</a> 串行</h2><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">let</span> n0 <span class="token operator">=</span> await <span class="token function">hello</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n<span class="token keyword">let</span> n1 <span class="token operator">=</span> await <span class="token function">hello</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n<span class="token keyword">let</span> n2 <span class="token operator">=</span> await <span class="token function">hello</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\n\n<span class="token function">print</span><span class="token punctuation">(</span>n0 <span class="token operator">+</span> n1 <span class="token operator">+</span> n2<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="并行" tabindex="-1"><a class="header-anchor" href="#并行" aria-hidden="true">#</a> 并行</h2><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code>async <span class="token keyword">let</span> n3 <span class="token operator">=</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>\nasync <span class="token keyword">let</span> n4 <span class="token operator">=</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>\nasync <span class="token keyword">let</span> n5 <span class="token operator">=</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>\n\n<span class="token function">print</span><span class="token punctuation">(</span>await <span class="token punctuation">(</span>n3 <span class="token operator">+</span> n4 <span class="token operator">+</span> n5<span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="循环并行" tabindex="-1"><a class="header-anchor" href="#循环并行" aria-hidden="true">#</a> 循环并行</h3><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code>await <span class="token function">withTaskGroup</span><span class="token punctuation">(</span>of<span class="token punctuation">:</span> <span class="token builtin">Int</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> group <span class="token keyword">in</span>\n    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token number">10</span> <span class="token punctuation">{</span>\n        group<span class="token punctuation">.</span>async <span class="token punctuation">{</span>\n            <span class="token keyword">let</span> n <span class="token operator">=</span> await <span class="token function">hello</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>\n            <span class="token keyword">return</span> n\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="异步序列" tabindex="-1"><a class="header-anchor" href="#异步序列" aria-hidden="true">#</a> 异步序列</h3><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token number">0</span>\n    \n<span class="token keyword">for</span> await result <span class="token keyword">in</span> group <span class="token punctuation">{</span>\n    sum <span class="token operator">+</span><span class="token operator">=</span> result\n<span class="token punctuation">}</span>\n\n<span class="token function">print</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="群组" tabindex="-1"><a class="header-anchor" href="#群组" aria-hidden="true">#</a> 群组</h2><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token comment">// 保证群组内的相对顺序，不保证群组间的顺序</span>\nasync <span class="token keyword">let</span> g0<span class="token punctuation">:</span> <span class="token builtin">Int</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> n0 <span class="token operator">=</span> await <span class="token function">hello</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n    <span class="token keyword">let</span> n1 <span class="token operator">=</span> await <span class="token function">hello</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n    <span class="token keyword">let</span> n2 <span class="token operator">=</span> await <span class="token function">hello</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span> n0 <span class="token operator">+</span> n1 <span class="token operator">+</span> n2\n<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\nasync <span class="token keyword">let</span> g1<span class="token punctuation">:</span> <span class="token builtin">Int</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> n3 <span class="token operator">=</span> await <span class="token function">hello</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>\n    <span class="token keyword">let</span> n4 <span class="token operator">=</span> await <span class="token function">hello</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>\n    <span class="token keyword">let</span> n5 <span class="token operator">=</span> await <span class="token function">hello</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span> n3 <span class="token operator">+</span> n4 <span class="token operator">+</span> n5\n<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\nasync <span class="token keyword">let</span> g2<span class="token punctuation">:</span> <span class="token builtin">Int</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> n6 <span class="token operator">=</span> await <span class="token function">hello</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>\n    <span class="token keyword">let</span> n7 <span class="token operator">=</span> await <span class="token function">hello</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span>\n    <span class="token keyword">let</span> n8 <span class="token operator">=</span> await <span class="token function">hello</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span> n6 <span class="token operator">+</span> n7 <span class="token operator">+</span> n8\n<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token function">print</span><span class="token punctuation">(</span>await <span class="token punctuation">(</span>g0 <span class="token operator">+</span> g1 <span class="token operator">+</span> g2<span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="数据竞争" tabindex="-1"><a class="header-anchor" href="#数据竞争" aria-hidden="true">#</a> 数据竞争</h2><h3 id="数据未隔离" tabindex="-1"><a class="header-anchor" href="#数据未隔离" aria-hidden="true">#</a> 数据未隔离</h3><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token number">0</span>\n\nawait <span class="token function">withTaskGroup</span><span class="token punctuation">(</span>of<span class="token punctuation">:</span> <span class="token builtin">Void</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> group <span class="token keyword">in</span>\n    <span class="token keyword">for</span> <span class="token number">_</span> <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token number">10000</span> <span class="token punctuation">{</span>\n        group<span class="token punctuation">.</span>async <span class="token punctuation">{</span>\n            data <span class="token operator">+</span><span class="token operator">=</span> <span class="token number">1</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">print</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="参与者" tabindex="-1"><a class="header-anchor" href="#参与者" aria-hidden="true">#</a> 参与者</h3><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token comment">// 参与者也是引用类型</span>\nactor <span class="token builtin">SafeData</span> <span class="token punctuation">{</span>\n    <span class="token keyword">private</span><span class="token punctuation">(</span><span class="token keyword">set</span><span class="token punctuation">)</span> <span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token number">0</span>\n    \n    <span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">_</span> number<span class="token punctuation">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 将可能引起数据竞争的逻辑放到参与者中</span>\n        \n        <span class="token keyword">self</span><span class="token punctuation">.</span>data <span class="token operator">+</span><span class="token operator">=</span> number\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> safeData <span class="token operator">=</span> <span class="token function">SafeData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\nawait <span class="token function">withTaskGroup</span><span class="token punctuation">(</span>of<span class="token punctuation">:</span> <span class="token builtin">Void</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> group <span class="token keyword">in</span>\n    <span class="token keyword">for</span> <span class="token number">_</span> <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token number">10000</span> <span class="token punctuation">{</span>\n        group<span class="token punctuation">.</span>async <span class="token punctuation">{</span>\n            await safeData<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">print</span><span class="token punctuation">(</span>await safeData<span class="token punctuation">.</span>data<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="结构化任务" tabindex="-1"><a class="header-anchor" href="#结构化任务" aria-hidden="true">#</a> 结构化任务</h2><h3 id="串行-1" tabindex="-1"><a class="header-anchor" href="#串行-1" aria-hidden="true">#</a> 串行</h3><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code>await <span class="token function">withTaskGroup</span><span class="token punctuation">(</span>of<span class="token punctuation">:</span> <span class="token builtin">Int</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> group0 <span class="token keyword">in</span>\n        \n    group0<span class="token punctuation">.</span>async <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> n0 <span class="token operator">=</span> await <span class="token function">hello</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n        await <span class="token function">withTaskGroup</span><span class="token punctuation">(</span>of<span class="token punctuation">:</span> <span class="token builtin">Int</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> group1 <span class="token keyword">in</span>\n            \n            group1<span class="token punctuation">.</span>async <span class="token punctuation">{</span>\n                <span class="token keyword">let</span> n1 <span class="token operator">=</span> await <span class="token function">hello</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n                await <span class="token function">withTaskGroup</span><span class="token punctuation">(</span>of<span class="token punctuation">:</span> <span class="token builtin">Int</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> group2 <span class="token keyword">in</span>\n                    \n                    group2<span class="token punctuation">.</span>async <span class="token punctuation">{</span>\n                        <span class="token keyword">let</span> n2 <span class="token operator">=</span> await <span class="token function">hello</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\n                        <span class="token keyword">return</span> n2\n                    <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span>\n                <span class="token keyword">return</span> n1\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> n0\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="并行-1" tabindex="-1"><a class="header-anchor" href="#并行-1" aria-hidden="true">#</a> 并行</h3><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code>await <span class="token function">withTaskGroup</span><span class="token punctuation">(</span>of<span class="token punctuation">:</span> <span class="token builtin">Int</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> group <span class="token keyword">in</span>\n    group<span class="token punctuation">.</span>async <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> n <span class="token operator">=</span> await <span class="token function">hello</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>\n        <span class="token keyword">return</span> n\n    <span class="token punctuation">}</span>\n    group<span class="token punctuation">.</span>async <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> n <span class="token operator">=</span> await <span class="token function">hello</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>\n        <span class="token keyword">return</span> n\n    <span class="token punctuation">}</span>\n    group<span class="token punctuation">.</span>async <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> n <span class="token operator">=</span> await <span class="token function">hello</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>\n        <span class="token keyword">return</span> n\n    <span class="token punctuation">}</span>\n    \n    <span class="token function">print</span><span class="token punctuation">(</span>await <span class="token punctuation">(</span>group<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span> <span class="token operator">+</span> group<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span> <span class="token operator">+</span> group<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="群组-1" tabindex="-1"><a class="header-anchor" href="#群组-1" aria-hidden="true">#</a> 群组</h3><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code>await <span class="token function">withTaskGroup</span><span class="token punctuation">(</span>of<span class="token punctuation">:</span> <span class="token builtin">Int</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> group <span class="token keyword">in</span>\n    group<span class="token punctuation">.</span>async <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> n0 <span class="token operator">=</span> await <span class="token function">hello</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n        <span class="token keyword">let</span> n1 <span class="token operator">=</span> await <span class="token function">hello</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n        <span class="token keyword">let</span> n2 <span class="token operator">=</span> await <span class="token function">hello</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\n        <span class="token keyword">return</span> n0 <span class="token operator">+</span> n1 <span class="token operator">+</span> n2\n    <span class="token punctuation">}</span>\n    group<span class="token punctuation">.</span>async <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> n3 <span class="token operator">=</span> await <span class="token function">hello</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>\n        <span class="token keyword">let</span> n4 <span class="token operator">=</span> await <span class="token function">hello</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>\n        <span class="token keyword">let</span> n5 <span class="token operator">=</span> await <span class="token function">hello</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>\n        <span class="token keyword">return</span> n3 <span class="token operator">+</span> n4 <span class="token operator">+</span> n5\n    <span class="token punctuation">}</span>\n    group<span class="token punctuation">.</span>async <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> n6 <span class="token operator">=</span> await <span class="token function">hello</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>\n        <span class="token keyword">let</span> n7 <span class="token operator">=</span> await <span class="token function">hello</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span>\n        <span class="token keyword">let</span> n8 <span class="token operator">=</span> await <span class="token function">hello</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>\n        <span class="token keyword">return</span> n6 <span class="token operator">+</span> n7 <span class="token operator">+</span> n8\n    <span class="token punctuation">}</span>\n    \n    <span class="token function">print</span><span class="token punctuation">(</span>await <span class="token punctuation">(</span>group<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span> <span class="token operator">+</span> group<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span> <span class="token operator">+</span> group<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>',25),t={render:function(n,s){return p}}}}]);