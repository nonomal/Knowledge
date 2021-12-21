(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[4321],{5259:(a,n,s)=>{"use strict";s.r(n),s.d(n,{data:()=>e});const e={key:"v-0bf8ab8e",path:"/iOS/Data-structure.html",title:"数据结构",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"1. 数据存储(物理)结构",slug:"_1-数据存储-物理-结构",children:[{level:3,title:"顺序",slug:"顺序",children:[]},{level:3,title:"链式",slug:"链式",children:[]},{level:3,title:"哈希(散列)",slug:"哈希-散列",children:[]},{level:3,title:"索引",slug:"索引",children:[]}]},{level:2,title:"2. 数据逻辑结构",slug:"_2-数据逻辑结构",children:[{level:3,title:"集合",slug:"集合",children:[]},{level:3,title:"线性",slug:"线性",children:[]},{level:3,title:"树形",slug:"树形",children:[]},{level:3,title:"图形",slug:"图形",children:[]}]},{level:2,title:"3. 表、堆、栈和队列",slug:"_3-表、堆、栈和队列",children:[{level:3,title:"表",slug:"表",children:[]},{level:3,title:"堆",slug:"堆",children:[]},{level:3,title:"栈",slug:"栈",children:[]},{level:3,title:"队列",slug:"队列",children:[]}]},{level:2,title:"4. 二叉树的深度",slug:"_4-二叉树的深度",children:[]}],filePathRelative:"iOS/Data-structure.md",git:{updatedTime:1640082093e3,contributors:[]}}},6477:(a,n,s)=>{"use strict";s.r(n),s.d(n,{default:()=>p});const e=(0,s(6252).uE)('<h1 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构" aria-hidden="true">#</a> 数据结构</h1><h2 id="_1-数据存储-物理-结构" tabindex="-1"><a class="header-anchor" href="#_1-数据存储-物理-结构" aria-hidden="true">#</a> 1. 数据存储(物理)结构</h2><ul><li><h3 id="顺序" tabindex="-1"><a class="header-anchor" href="#顺序" aria-hidden="true">#</a> 顺序</h3><p>把逻辑上相邻的结点按顺序存储在物理上相邻的连续存储单元中，结点逻辑关系由存储单元的邻接关系体现。查找快，插入、删除慢。</p></li><li><h3 id="链式" tabindex="-1"><a class="header-anchor" href="#链式" aria-hidden="true">#</a> 链式</h3><p>用一组任意的存储单元存储逻辑上相邻的结点（存储单元可以连续也可以不连续），逻辑关系记录在指针域中。查找慢，插入、删除快。</p></li><li><h3 id="哈希-散列" tabindex="-1"><a class="header-anchor" href="#哈希-散列" aria-hidden="true">#</a> 哈希(散列)</h3><p>根据存储数据的内容计算哈希值来决定存储地址，根据内容查找时快</p></li><li><h3 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引</h3><p>另外设置一个索引表来存储结点的地址，分开存放数据结点和结点逻辑关系</p></li></ul><h2 id="_2-数据逻辑结构" tabindex="-1"><a class="header-anchor" href="#_2-数据逻辑结构" aria-hidden="true">#</a> 2. 数据逻辑结构</h2><ul><li><h3 id="集合" tabindex="-1"><a class="header-anchor" href="#集合" aria-hidden="true">#</a> 集合</h3><p>无序、不重复的元素构成集合</p></li><li><h3 id="线性" tabindex="-1"><a class="header-anchor" href="#线性" aria-hidden="true">#</a> 线性</h3><p>具有唯一前驱和唯一后继的“一对一”关系的有序线性结构</p></li><li><h3 id="树形" tabindex="-1"><a class="header-anchor" href="#树形" aria-hidden="true">#</a> 树形</h3><p>具有唯一前驱但可以有一个或多个后继的“一对多”关系的树形结构</p></li><li><h3 id="图形" tabindex="-1"><a class="header-anchor" href="#图形" aria-hidden="true">#</a> 图形</h3><p>具有多个前驱和多个后继的“多对多”关系的图形结构</p></li></ul><h2 id="_3-表、堆、栈和队列" tabindex="-1"><a class="header-anchor" href="#_3-表、堆、栈和队列" aria-hidden="true">#</a> 3. 表、堆、栈和队列</h2><ul><li><h3 id="表" tabindex="-1"><a class="header-anchor" href="#表" aria-hidden="true">#</a> 表</h3><p>具有线性逻辑结构的就是线性表简称表，线性表又根据不同的物理实现方式分为：顺序表、链表。</p></li><li><h3 id="堆" tabindex="-1"><a class="header-anchor" href="#堆" aria-hidden="true">#</a> 堆</h3><p>堆是一种经过排序的树形结构。根结点最大的，父结点比子结点大的叫最大堆；根结点最小的叫最小堆。</p></li><li><h3 id="栈" tabindex="-1"><a class="header-anchor" href="#栈" aria-hidden="true">#</a> 栈</h3><p>栈是只允许在栈顶进行插入和删除操作的特殊线性表，栈又根据不同的物理实现方式分为：顺序栈、链式栈。具有“后进先出”的特性</p></li><li><h3 id="队列" tabindex="-1"><a class="header-anchor" href="#队列" aria-hidden="true">#</a> 队列</h3><p>队列是只允许在队尾插入，在队首删除的特殊线性表，队列又根据不同的物理实现方式分为：顺序队列、链式队列。具有“先进先出”的特性</p></li></ul><h2 id="_4-二叉树的深度" tabindex="-1"><a class="header-anchor" href="#_4-二叉树的深度" aria-hidden="true">#</a> 4. 二叉树的深度</h2><p>当前结点的深度为左右子树深度较大的值+1</p><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">class</span> <span class="token class-name">BinaryTreeNode</span><span class="token operator">&lt;</span>T<span class="token operator">&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> data<span class="token punctuation">:</span> T\n    <span class="token keyword">var</span> <span class="token keyword">left</span><span class="token punctuation">:</span> <span class="token builtin">BinaryTreeNode</span><span class="token operator">?</span>\n    <span class="token keyword">var</span> <span class="token keyword">right</span><span class="token punctuation">:</span> <span class="token builtin">BinaryTreeNode</span><span class="token operator">?</span>\n    <span class="token keyword">init</span><span class="token punctuation">(</span><span class="token number">_</span> data<span class="token punctuation">:</span> T<span class="token punctuation">,</span> <span class="token number">_</span> <span class="token keyword">left</span><span class="token punctuation">:</span> <span class="token builtin">BinaryTreeNode</span><span class="token operator">?</span> <span class="token operator">=</span> <span class="token constant">nil</span><span class="token punctuation">,</span> <span class="token number">_</span> <span class="token keyword">right</span><span class="token punctuation">:</span> <span class="token builtin">BinaryTreeNode</span><span class="token operator">?</span> <span class="token operator">=</span> <span class="token constant">nil</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">self</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data\n        <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token keyword">left</span> <span class="token operator">=</span> <span class="token keyword">left</span>\n        <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token keyword">right</span> <span class="token operator">=</span> <span class="token keyword">right</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> depth<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token number">_</span> node<span class="token punctuation">:</span> <span class="token builtin">BinaryTreeNode</span><span class="token operator">&lt;</span>T<span class="token operator">&gt;</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">Int</span> <span class="token punctuation">{</span>\n    <span class="token keyword">guard</span> <span class="token keyword">let</span> node <span class="token operator">=</span> node <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">0</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">let</span> <span class="token keyword">left</span> <span class="token operator">=</span> <span class="token function">depth</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token keyword">left</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>\n    <span class="token keyword">let</span> <span class="token keyword">right</span> <span class="token operator">=</span> <span class="token function">depth</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token keyword">right</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>\n\n    <span class="token keyword">return</span> <span class="token keyword">left</span> <span class="token operator">&gt;</span> <span class="token keyword">right</span> <span class="token operator">?</span> <span class="token keyword">left</span> <span class="token punctuation">:</span> <span class="token keyword">right</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>',10),p={render:function(a,n){return e}}}}]);