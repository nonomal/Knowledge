(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[2354],{6789:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-cd0bfe1c",path:"/iOS/UIKit.html",title:"UIKit",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"1. UIView 和 CALayer",slug:"_1-uiview-和-calayer",children:[]},{level:2,title:"2. Frame 和 Bounds",slug:"_2-frame-和-bounds",children:[]},{level:2,title:"UITabBarController",slug:"uitabbarcontroller",children:[]}],filePathRelative:"iOS/UIKit.md",git:{updatedTime:1643017754e3,contributors:[]}}},58:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>p});const t=(0,a(6252).uE)('<h1 id="uikit" tabindex="-1"><a class="header-anchor" href="#uikit" aria-hidden="true">#</a> UIKit</h1><h2 id="_1-uiview-和-calayer" tabindex="-1"><a class="header-anchor" href="#_1-uiview-和-calayer" aria-hidden="true">#</a> 1. UIView 和 CALayer</h2><ul><li>UIView继承UIResponder，可以响应事件；</li><li>CALayer用来绘制内容；</li><li>UIView设置表现和位置时，内部实际是对所持有的layer的更改</li></ul><h2 id="_2-frame-和-bounds" tabindex="-1"><a class="header-anchor" href="#_2-frame-和-bounds" aria-hidden="true">#</a> 2. Frame 和 Bounds</h2><ul><li>在width和height上frame和bounds没有什么区别</li><li>frame设置控件在父控件坐标系中的位置；bounds更改控件自身的坐标系</li><li>默认坐标系是左上角为(0,0)，向右向下(x,y)变大，更改bounds的(x,y)可以改变坐标系左上角为(x,y)， 子控件自然随着控件自身坐标系的更改而改动位置</li></ul><h2 id="uitabbarcontroller" tabindex="-1"><a class="header-anchor" href="#uitabbarcontroller" aria-hidden="true">#</a> UITabBarController</h2><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">class</span> <span class="token class-name">TabBarController</span><span class="token punctuation">:</span> <span class="token builtin">UITabBarController</span><span class="token punctuation">,</span> <span class="token builtin">UITabBarControllerDelegate</span> <span class="token punctuation">{</span>\n    <span class="token keyword">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token keyword">init</span><span class="token punctuation">(</span>nibName<span class="token punctuation">:</span> <span class="token constant">nil</span><span class="token punctuation">,</span> bundle<span class="token punctuation">:</span> <span class="token constant">nil</span><span class="token punctuation">)</span>\n        \n        viewControllers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token builtin">map</span> <span class="token punctuation">{</span> text <span class="token keyword">in</span>\n            <span class="token function">ViewController</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span> text<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n        \n        delegate <span class="token operator">=</span> <span class="token keyword">self</span>\n    <span class="token punctuation">}</span>\n    \n    <span class="token keyword">required</span> <span class="token keyword">init</span><span class="token operator">?</span><span class="token punctuation">(</span>coder<span class="token punctuation">:</span> <span class="token builtin">NSCoder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">fatalError</span><span class="token punctuation">(</span><span class="token string">&quot;init(coder:) has not been implemented&quot;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    \n    <span class="token keyword">func</span> <span class="token function">tabBarController</span><span class="token punctuation">(</span><span class="token number">_</span> tabBarController<span class="token punctuation">:</span> <span class="token builtin">UITabBarController</span><span class="token punctuation">,</span> didSelect viewController<span class="token punctuation">:</span> <span class="token builtin">UIViewController</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">print</span><span class="token punctuation">(</span>viewControllers<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">firstIndex</span><span class="token punctuation">(</span>of<span class="token punctuation">:</span> viewController<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ViewController</span><span class="token punctuation">:</span> <span class="token builtin">UIViewController</span> <span class="token punctuation">{</span>\n    <span class="token keyword">init</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span> <span class="token builtin">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token keyword">init</span><span class="token punctuation">(</span>nibName<span class="token punctuation">:</span> <span class="token constant">nil</span><span class="token punctuation">,</span> bundle<span class="token punctuation">:</span> <span class="token constant">nil</span><span class="token punctuation">)</span>\n        \n        <span class="token keyword">let</span> label <span class="token operator">=</span> <span class="token function">UILabel</span><span class="token punctuation">(</span>frame<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token keyword">init</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        label<span class="token punctuation">.</span>text <span class="token operator">=</span> text\n        \n        view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>label<span class="token punctuation">)</span>\n        tabBarItem <span class="token operator">=</span> <span class="token function">UITabBarItem</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> text<span class="token punctuation">,</span> image<span class="token punctuation">:</span> <span class="token constant">nil</span><span class="token punctuation">,</span> tag<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    \n    <span class="token keyword">required</span> <span class="token keyword">init</span><span class="token operator">?</span><span class="token punctuation">(</span>coder<span class="token punctuation">:</span> <span class="token builtin">NSCoder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">fatalError</span><span class="token punctuation">(</span><span class="token string">&quot;init(coder:) has not been implemented&quot;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div>',7),p={render:function(n,s){return t}}}}]);