(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[95],{707:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-689ac808",path:"/iOS/WebKit.html",title:"WebKit",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"1. JS 和 swift 互相调用",slug:"_1-js-和-swift-互相调用",children:[]}],filePathRelative:"iOS/WebKit.md",git:{updatedTime:1625287762e3,contributors:[]}}},905:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>e});const t=(0,a(6252).uE)('<h1 id="webkit" tabindex="-1"><a class="header-anchor" href="#webkit" aria-hidden="true">#</a> WebKit</h1><h2 id="_1-js-和-swift-互相调用" tabindex="-1"><a class="header-anchor" href="#_1-js-和-swift-互相调用" aria-hidden="true">#</a> 1. JS 和 swift 互相调用</h2><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">import</span> <span class="token builtin">JavaScriptCore</span>\n\n<span class="token keyword">let</span> context<span class="token punctuation">:</span> <span class="token builtin">JSContext</span> <span class="token operator">=</span> <span class="token function">JSContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\ncontext<span class="token punctuation">.</span><span class="token function">evaluateScript</span><span class="token punctuation">(</span><span class="token string">&quot;function sum(a,b) { return a+b }&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">let</span> result <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">evaluateScript</span><span class="token punctuation">(</span><span class="token string">&quot;sum(1,1)&quot;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',3),e={render:function(n,s){return t}}}}]);