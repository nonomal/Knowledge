(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[2517],{3718:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-22306a9a",path:"/Swift/ReferenceManual/Types.html",title:"类型",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"类型标注",slug:"类型标注",children:[]},{level:2,title:"类型标识符",slug:"类型标识符",children:[]},{level:2,title:"元组类型",slug:"元组类型",children:[]},{level:2,title:"函数类型",slug:"函数类型",children:[]},{level:2,title:"数组类型",slug:"数组类型",children:[]},{level:2,title:"字典类型",slug:"字典类型",children:[]},{level:2,title:"可选类型",slug:"可选类型",children:[]},{level:2,title:"隐式展开可选类型",slug:"隐式展开可选类型",children:[]},{level:2,title:"协议组合类型",slug:"协议组合类型",children:[]},{level:2,title:"不透明类型",slug:"不透明类型",children:[]},{level:2,title:"元类型",slug:"元类型",children:[]},{level:2,title:"任意类型",slug:"任意类型",children:[]},{level:2,title:"自身类型",slug:"自身类型",children:[]},{level:2,title:"类型继承子句",slug:"类型继承子句",children:[]},{level:2,title:"类型推断",slug:"类型推断",children:[]}],filePathRelative:"Swift/ReferenceManual/Types.md",git:{updatedTime:163999608e4,contributors:[]}}},4497:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="类型" tabindex="-1"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> 类型</h1><p>命名类型和复合类型</p><p>命名类型包含内置类型和自定义类型</p><p>复合类型包含函数类型和元组类型</p><h2 id="类型标注" tabindex="-1"><a class="header-anchor" href="#类型标注" aria-hidden="true">#</a> 类型标注</h2><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">let</span> x<span class="token punctuation">:</span> <span class="token builtin">Int</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// 显式指定变量类型</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="类型标识符" tabindex="-1"><a class="header-anchor" href="#类型标识符" aria-hidden="true">#</a> 类型标识符</h2><p>类型标识符指代命名类型或命名类型和复合类型的别名</p><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token builtin">Int</span> <span class="token comment">// Int指代Int类型</span>\n<span class="token keyword">typealias</span> <span class="token builtin">Point</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token builtin">Int</span><span class="token punctuation">,</span> <span class="token builtin">Int</span><span class="token punctuation">)</span> <span class="token comment">// Point指代(Int, Int)类型的别名</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="元组类型" tabindex="-1"><a class="header-anchor" href="#元组类型" aria-hidden="true">#</a> 元组类型</h2><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">let</span> point<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token builtin">Int</span><span class="token punctuation">,</span> <span class="token builtin">Int</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>\npoint<span class="token punctuation">.</span><span class="token number">0</span>\npoint<span class="token punctuation">.</span><span class="token number">1</span>\n\n<span class="token keyword">let</span> point<span class="token punctuation">:</span> <span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token builtin">Int</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>\npoint<span class="token punctuation">.</span>x <span class="token comment">// 命名元组中的元素，用名称来指代元素</span>\npoint<span class="token punctuation">.</span>y\n\n<span class="token keyword">func</span> <span class="token function">getPosition</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token builtin">Int</span><span class="token punctuation">,</span> <span class="token builtin">Int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// 函数多返回值</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">let</span> pos <span class="token operator">=</span> <span class="token function">getPosition</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">let</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token function">getPosition</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token builtin">Void</span> <span class="token comment">// 空元组 typealias Void = ()</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="函数类型" tabindex="-1"><a class="header-anchor" href="#函数类型" aria-hidden="true">#</a> 函数类型</h2><p>函数类型表示函数、方法或闭包的类型</p><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">let</span> closure<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token builtin">Int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">Void</span>\n<span class="token keyword">let</span> closure<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token number">_</span> x<span class="token punctuation">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">Void</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">_</span> number<span class="token punctuation">:</span> <span class="token builtin">Int</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">Int</span> <span class="token punctuation">{</span> <span class="token comment">// 可变参数</span>\n    <span class="token keyword">return</span> number<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">+</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">print</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 6</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function">increase</span><span class="token punctuation">(</span><span class="token number">_</span> variable<span class="token punctuation">:</span> <span class="token keyword">inout</span> <span class="token builtin">Int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 输入输出参数</span>\n    variable <span class="token operator">+</span><span class="token operator">=</span> <span class="token number">1</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> variable <span class="token operator">=</span> <span class="token number">0</span>\n\n<span class="token function">increase</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>variable<span class="token punctuation">)</span>\n\n<span class="token function">print</span><span class="token punctuation">(</span>variable<span class="token punctuation">)</span> <span class="token comment">// 1</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function">addTo</span><span class="token punctuation">(</span><span class="token number">_</span> adder<span class="token punctuation">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token builtin">Int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">Int</span> <span class="token punctuation">{</span> <span class="token comment">// 返回值为函数类型</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span> num <span class="token keyword">in</span>\n        adder <span class="token operator">+</span> num\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> addToOne <span class="token operator">=</span> <span class="token function">addTo</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n<span class="token keyword">let</span> addToTwo <span class="token operator">=</span> <span class="token function">addTo</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\n\n<span class="token function">print</span><span class="token punctuation">(</span><span class="token function">addToOne</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 11</span>\n<span class="token function">print</span><span class="token punctuation">(</span><span class="token function">addToTwo</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 12</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function">makeError</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">Int</span> <span class="token punctuation">{</span> <span class="token comment">// 抛出异常</span>\n    <span class="token number">0</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">try</span> <span class="token function">makeError</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="数组类型" tabindex="-1"><a class="header-anchor" href="#数组类型" aria-hidden="true">#</a> 数组类型</h2><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">let</span> array<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n\n<span class="token keyword">let</span> array<span class="token punctuation">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">Int</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n\n<span class="token keyword">let</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">Int</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="字典类型" tabindex="-1"><a class="header-anchor" href="#字典类型" aria-hidden="true">#</a> 字典类型</h2><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">let</span> dictionary<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token builtin">String</span><span class="token punctuation">:</span> <span class="token builtin">String</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span>\n\n<span class="token keyword">let</span> dictionary<span class="token punctuation">:</span> <span class="token builtin">Dictionary</span><span class="token operator">&lt;</span><span class="token builtin">String</span><span class="token punctuation">,</span> <span class="token builtin">String</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span>\n\n<span class="token keyword">let</span> dictionary <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">String</span><span class="token punctuation">:</span> <span class="token builtin">String</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="可选类型" tabindex="-1"><a class="header-anchor" href="#可选类型" aria-hidden="true">#</a> 可选类型</h2><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">let</span> option<span class="token punctuation">:</span> <span class="token builtin">Int</span><span class="token operator">?</span> <span class="token operator">=</span> <span class="token constant">nil</span>\n\n<span class="token keyword">let</span> option<span class="token punctuation">:</span> <span class="token builtin">Optional</span><span class="token operator">&lt;</span><span class="token builtin">Int</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token constant">nil</span>\n\n<span class="token keyword">let</span> option <span class="token operator">=</span> <span class="token builtin">Int</span><span class="token operator">?</span><span class="token punctuation">(</span><span class="token constant">nil</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="隐式展开可选类型" tabindex="-1"><a class="header-anchor" href="#隐式展开可选类型" aria-hidden="true">#</a> 隐式展开可选类型</h2><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">let</span> option<span class="token punctuation">:</span> <span class="token builtin">Int</span><span class="token operator">!</span> <span class="token operator">=</span> <span class="token constant">nil</span>\n<span class="token keyword">let</span> unwrapped<span class="token punctuation">:</span> <span class="token builtin">Int</span> <span class="token operator">=</span> option <span class="token comment">// Fatal error: Unexpectedly found nil while implicitly unwrapping an Optional value</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="协议组合类型" tabindex="-1"><a class="header-anchor" href="#协议组合类型" aria-hidden="true">#</a> 协议组合类型</h2><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">typealias</span> <span class="token builtin">Codable</span> <span class="token operator">=</span> <span class="token builtin">Decodable</span> <span class="token operator">&amp;</span> <span class="token builtin">Encodable</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="不透明类型" tabindex="-1"><a class="header-anchor" href="#不透明类型" aria-hidden="true">#</a> 不透明类型</h2><p>不透明类型可以理解为反向范型，范型是由调用者来决定具体类型，不透明类型是由实现来决定具体类型</p><p>不透明类型抛弃了协议的动态性，编译时就确定其具体类型</p><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">protocol</span> <span class="token builtin">View</span> <span class="token punctuation">{</span>\n    associatedtype <span class="token builtin">Body</span>\n    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token builtin">Body</span> <span class="token punctuation">{</span> <span class="token keyword">get</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">struct</span> <span class="token builtin">AnyView</span><span class="token operator">&lt;</span>V<span class="token operator">&gt;</span><span class="token punctuation">:</span> <span class="token builtin">View</span> <span class="token punctuation">{</span>\n    <span class="token keyword">typealias</span> <span class="token builtin">Body</span> <span class="token operator">=</span> V\n    \n    <span class="token keyword">let</span> view<span class="token punctuation">:</span> V\n    \n    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token builtin">Body</span> <span class="token punctuation">{</span>\n        view\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">some</span> <span class="token builtin">View</span> <span class="token punctuation">{</span>\n    <span class="token function">AnyView</span><span class="token punctuation">(</span>view<span class="token punctuation">:</span> <span class="token string">&quot;Hello, world!&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="元类型" tabindex="-1"><a class="header-anchor" href="#元类型" aria-hidden="true">#</a> 元类型</h2><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">let</span> x<span class="token punctuation">:</span> <span class="token builtin">Int</span> <span class="token operator">=</span> <span class="token number">1</span>\n\n<span class="token keyword">let</span> type<span class="token punctuation">:</span> <span class="token builtin">Int</span><span class="token punctuation">.</span><span class="token keyword">Type</span> <span class="token operator">=</span> <span class="token builtin">Int</span><span class="token punctuation">.</span><span class="token keyword">self</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="任意类型" tabindex="-1"><a class="header-anchor" href="#任意类型" aria-hidden="true">#</a> 任意类型</h2><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">let</span> x<span class="token punctuation">:</span> <span class="token builtin">Any</span> <span class="token operator">=</span> <span class="token number">1</span>\n\n<span class="token keyword">if</span> <span class="token keyword">let</span> x <span class="token operator">=</span> x <span class="token keyword">as</span><span class="token operator">?</span> <span class="token builtin">Int</span> <span class="token punctuation">{</span>\n    \n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="自身类型" tabindex="-1"><a class="header-anchor" href="#自身类型" aria-hidden="true">#</a> 自身类型</h2><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token builtin">Car</span> <span class="token punctuation">{</span>\n    <span class="token keyword">static</span> <span class="token keyword">func</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">Self</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    \n    <span class="token keyword">func</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">Self</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    \n    <span class="token keyword">func</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        \n        <span class="token keyword">let</span> car<span class="token punctuation">:</span> <span class="token keyword">Self</span> <span class="token operator">=</span> <span class="token keyword">self</span>\n        <span class="token keyword">let</span> type<span class="token punctuation">:</span> <span class="token keyword">Self</span><span class="token punctuation">.</span><span class="token keyword">Type</span> <span class="token operator">=</span> <span class="token keyword">Self</span><span class="token punctuation">.</span><span class="token keyword">self</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="类型继承子句" tabindex="-1"><a class="header-anchor" href="#类型继承子句" aria-hidden="true">#</a> 类型继承子句</h2><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">class</span> <span class="token class-name">View</span><span class="token punctuation">:</span> <span class="token builtin">UIView</span><span class="token punctuation">,</span> <span class="token builtin">UICollectionViewDelegate</span><span class="token punctuation">,</span> <span class="token builtin">UITableViewDelegate</span><span class="token punctuation">,</span> <span class="token builtin">UITextViewDelegate</span> <span class="token punctuation">{</span>\n\n<span class="token punctuation">}</span>\n\n<span class="token keyword">enum</span> <span class="token builtin">Network</span><span class="token punctuation">:</span> <span class="token builtin">String</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> wifi <span class="token operator">=</span> <span class="token string">&quot;en0&quot;</span>\n    <span class="token keyword">case</span> cellular <span class="token operator">=</span> <span class="token string">&quot;pdp_ip0&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="类型推断" tabindex="-1"><a class="header-anchor" href="#类型推断" aria-hidden="true">#</a> 类型推断</h2><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',42),e={render:function(n,s){return p}}}}]);