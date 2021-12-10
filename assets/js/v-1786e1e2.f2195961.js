(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[9444],{9946:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-1786e1e2",path:"/Swift/ReferenceManual/Attributes.html",title:"特性",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"resultBuilder",slug:"resultbuilder",children:[]}],filePathRelative:"Swift/ReferenceManual/Attributes.md",git:{updatedTime:1639131999e3,contributors:[]}}},5249:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const e=(0,a(6252).uE)('<h1 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h1><h2 id="resultbuilder" tabindex="-1"><a class="header-anchor" href="#resultbuilder" aria-hidden="true">#</a> resultBuilder</h2><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code>@resultBuilder <span class="token keyword">struct</span> <span class="token builtin">Paragraph</span> <span class="token punctuation">{</span>\n    <span class="token keyword">static</span> <span class="token keyword">func</span> <span class="token function">buildBlock</span><span class="token punctuation">(</span><span class="token number">_</span> sentences<span class="token punctuation">:</span> <span class="token builtin">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">String</span> <span class="token punctuation">{</span>\n        sentences<span class="token punctuation">.</span><span class="token function">joined</span><span class="token punctuation">(</span>separator<span class="token punctuation">:</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n@<span class="token builtin">Paragraph</span>\n<span class="token keyword">func</span> <span class="token function">makeParagraph</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">String</span> <span class="token punctuation">{</span>\n    <span class="token string">&quot;resultBuilder&quot;</span>\n    <span class="token string">&quot;hello&quot;</span>\n    <span class="token string">&quot;world&quot;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">print</span><span class="token punctuation">(</span><span class="token function">makeParagraph</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token comment">// resultBuilder</span>\n<span class="token comment">// hello</span>\n<span class="token comment">// world</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>',3),t={render:function(n,s){return e}}}}]);