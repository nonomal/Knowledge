(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[56],{4267:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-2b67cc2d",path:"/iOS/String.html",title:"String",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"1. str[0]",slug:"_1-str-0",children:[]},{level:2,title:"2. split",slug:"_2-split",children:[]},{level:2,title:"3. join",slug:"_3-join",children:[]},{level:2,title:"4. contains",slug:"_4-contains",children:[]},{level:2,title:"5. 大小写",slug:"_5-大小写",children:[]},{level:2,title:"6. unicode",slug:"_6-unicode",children:[]},{level:2,title:"7. substring",slug:"_7-substring",children:[]}],filePathRelative:"iOS/String.md",git:{updatedTime:162556733e4,contributors:[]}}},3893:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>e});const t=(0,a(6252).uE)('<h1 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> String</h1><h2 id="_1-str-0" tabindex="-1"><a class="header-anchor" href="#_1-str-0" aria-hidden="true">#</a> 1. str[0]</h2><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token comment">//  扩展字符串使它可以像其他语言一样以下标方式修改获取字符</span>\n<span class="token keyword">extension</span> <span class="token builtin">String</span> <span class="token punctuation">{</span>\n    \n    <span class="token comment">//  String中的每个字符元素并不是等长的，而是由1~4个UTF-8组成，因此不能直接使用Int来索引</span>\n    <span class="token keyword">func</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token number">_</span> i<span class="token punctuation">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">Index</span> <span class="token punctuation">{</span>\n        <span class="token comment">//  根据首索引和偏移计算出真实的索引</span>\n        <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">.</span>startIndex<span class="token punctuation">,</span> offsetBy<span class="token punctuation">:</span> i<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    \n    <span class="token keyword">subscript</span><span class="token punctuation">(</span><span class="token number">_</span> i<span class="token punctuation">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">Character</span> <span class="token punctuation">{</span>\n        <span class="token keyword">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>at<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>\n            <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>newValue<span class="token punctuation">,</span> at<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">get</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token keyword">self</span><span class="token punctuation">[</span><span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="_2-split" tabindex="-1"><a class="header-anchor" href="#_2-split" aria-hidden="true">#</a> 2. split</h2><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token comment">//  split分割</span>\n<span class="token keyword">let</span> sentence <span class="token operator">=</span> <span class="token string">&quot;hello, my name is eric&quot;</span>\n<span class="token keyword">let</span> words <span class="token operator">=</span> sentence<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span>separator<span class="token punctuation">:</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span>\n<span class="token function">print</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_3-join" tabindex="-1"><a class="header-anchor" href="#_3-join" aria-hidden="true">#</a> 3. join</h2><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token comment">//  joined拼接</span>\n<span class="token keyword">let</span> words <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;hello,&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;my&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;is&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;liuzihao&quot;</span><span class="token punctuation">]</span>\n<span class="token keyword">let</span> sentence <span class="token operator">=</span> words<span class="token punctuation">.</span><span class="token function">joined</span><span class="token punctuation">(</span>separator<span class="token punctuation">:</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span>\n<span class="token function">print</span><span class="token punctuation">(</span>sentence<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_4-contains" tabindex="-1"><a class="header-anchor" href="#_4-contains" aria-hidden="true">#</a> 4. contains</h2><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token comment">//  是否包含</span>\n<span class="token string">&quot;abc&quot;</span><span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_5-大小写" tabindex="-1"><a class="header-anchor" href="#_5-大小写" aria-hidden="true">#</a> 5. 大小写</h2><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token string">&quot;abcd&quot;</span><span class="token punctuation">.</span><span class="token function">uppercased</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token string">&quot;ABCD&quot;</span><span class="token punctuation">.</span><span class="token function">lowercased</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_6-unicode" tabindex="-1"><a class="header-anchor" href="#_6-unicode" aria-hidden="true">#</a> 6. unicode</h2><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token string">&quot;abcd&quot;</span><span class="token punctuation">.</span>unicodeScalars<span class="token punctuation">.</span>forEach <span class="token punctuation">{</span> <span class="token punctuation">(</span>unicode<span class="token punctuation">)</span> <span class="token keyword">in</span>\n    <span class="token function">print</span><span class="token punctuation">(</span>unicode<span class="token punctuation">.</span>value<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_7-substring" tabindex="-1"><a class="header-anchor" href="#_7-substring" aria-hidden="true">#</a> 7. substring</h2><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token comment">//  前几位子字符串</span>\n<span class="token string">&quot;abcd&quot;</span><span class="token punctuation">.</span><span class="token keyword">prefix</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token comment">//  ab</span>\n<span class="token comment">//  后几位子字符串</span>\n<span class="token string">&quot;accd&quot;</span><span class="token punctuation">.</span><span class="token function">suffix</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token comment">//  cd</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',15),e={render:function(n,s){return t}}}}]);