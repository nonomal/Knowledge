(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[10],{7925:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-001f4e9c",path:"/CS/DesignPatterns.html",title:"设计模式",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"1. 观察者模式",slug:"_1-观察者模式",children:[]}],filePathRelative:"CS/DesignPatterns.md",git:{updatedTime:163887235e4,contributors:[]}}},1445:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h1 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式" aria-hidden="true">#</a> 设计模式</h1><h2 id="_1-观察者模式" tabindex="-1"><a class="header-anchor" href="#_1-观察者模式" aria-hidden="true">#</a> 1. 观察者模式</h2><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">class</span> <span class="token class-name">Subject</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> state <span class="token operator">=</span> <span class="token number">0</span>\n\n    <span class="token keyword">var</span> observers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">Observer</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n    <span class="token keyword">func</span> <span class="token function">append</span><span class="token punctuation">(</span>observer<span class="token punctuation">:</span> <span class="token builtin">Observer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        observers<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">func</span> <span class="token function">remove</span><span class="token punctuation">(</span>observer<span class="token punctuation">:</span> <span class="token builtin">Observer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        observers<span class="token punctuation">.</span><span class="token function">removeAll</span><span class="token punctuation">(</span><span class="token keyword">where</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> $<span class="token number">0</span> <span class="token operator">===</span> observer <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n\n\n    <span class="token keyword">func</span> <span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        observers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">{</span> $<span class="token number">0</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>subject<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n\n<span class="token keyword">protocol</span> <span class="token builtin">Observer</span><span class="token punctuation">:</span> <span class="token keyword">class</span> <span class="token punctuation">{</span>\n    <span class="token keyword">func</span> <span class="token function">update</span><span class="token punctuation">(</span>subject<span class="token punctuation">:</span> <span class="token builtin">Subject</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n\n<span class="token keyword">class</span> <span class="token class-name">ObserverA</span><span class="token punctuation">:</span> <span class="token builtin">Observer</span> <span class="token punctuation">{</span>\n    <span class="token keyword">func</span> <span class="token function">update</span><span class="token punctuation">(</span>subject<span class="token punctuation">:</span> <span class="token builtin">Subject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> subject<span class="token punctuation">.</span>state<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ObserverB</span><span class="token punctuation">:</span> <span class="token builtin">Observer</span> <span class="token punctuation">{</span>\n    <span class="token keyword">func</span> <span class="token function">update</span><span class="token punctuation">(</span>subject<span class="token punctuation">:</span> <span class="token builtin">Subject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> subject<span class="token punctuation">.</span>state<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> subject <span class="token operator">=</span> <span class="token function">Subject</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">let</span> observerA <span class="token operator">=</span> <span class="token function">ObserverA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">let</span> observerB <span class="token operator">=</span> <span class="token function">ObserverB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\nsubject<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>observer<span class="token punctuation">:</span> observerA<span class="token punctuation">)</span>\nsubject<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>observer<span class="token punctuation">:</span> observerB<span class="token punctuation">)</span>\n\nsubject<span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token number">1</span>\nsubject<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">// print: A 1</span>\n<span class="token comment">//        B 1</span>\nsubject<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>observer<span class="token punctuation">:</span> observerA<span class="token punctuation">)</span>\nsubject<span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token number">2</span>\nsubject<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">// print: B 2</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div>',3),t={render:function(n,s){return p}}}}]);