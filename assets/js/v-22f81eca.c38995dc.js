(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[7425],{2494:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-22f81eca",path:"/Web/CSS.html",title:"CSS",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"1. css,html都不区分大小写",slug:"_1-css-html都不区分大小写",children:[]},{level:2,title:"2. @imoprt 引入CSS",slug:"_2-imoprt-引入css",children:[]},{level:2,title:"3. 元素居中",slug:"_3-元素居中",children:[{level:3,title:"水平居中",slug:"水平居中",children:[]},{level:3,title:"水平垂直居中",slug:"水平垂直居中",children:[]}]},{level:2,title:"4. margin,padding对block和inline元素的不同影响",slug:"_4-margin-padding对block和inline元素的不同影响",children:[{level:3,title:"总结来说，横向内外边距对所有元素都起作用，纵向内外边距只对块级元素和可替换行内元素起作用",slug:"总结来说-横向内外边距对所有元素都起作用-纵向内外边距只对块级元素和可替换行内元素起作用",children:[]},{level:3,title:"margin-top, margin-bottom对inline元素",slug:"margin-top-margin-bottom对inline元素",children:[]},{level:3,title:"padding-top,padding-bottom对inline元素",slug:"padding-top-padding-bottom对inline元素",children:[]}]},{level:2,title:"5. rem",slug:"_5-rem",children:[]},{level:2,title:'6. :checked用于选择<input type="radio"><input type="checkbox"><option>in<select>选中的样式',slug:"_6-checked用于选择-input-type-radio-input-type-checkbox-option-in-select-选中的样式",children:[]},{level:2,title:"7. :root选择文档的根元素",slug:"_7-root选择文档的根元素",children:[]},{level:2,title:"8. + 相邻兄弟选择器",slug:"_8-相邻兄弟选择器",children:[]},{level:2,title:"9. :after在标签后插入",slug:"_9-after在标签后插入",children:[]},{level:2,title:"10. transform: translate(x,y) scale(x,y)",slug:"_10-transform-translate-x-y-scale-x-y",children:[]},{level:2,title:"11. only 排除不支持媒体查询的浏览器",slug:"_11-only-排除不支持媒体查询的浏览器",children:[]},{level:2,title:"12. 媒体查询实现自适应布局",slug:"_12-媒体查询实现自适应布局",children:[]},{level:2,title:"13. display: none;会使元素彻底消失不显示，visibility: hidden;只是隐藏不显示，但所占据的区域并不会释放",slug:"_13-display-none-会使元素彻底消失不显示-visibility-hidden-只是隐藏不显示-但所占据的区域并不会释放",children:[]},{level:2,title:"14. 重置(reset)CSS，就是把一些具有默认样式的元素清除自带样式，可以消除不同浏览器带来的渲染差异",slug:"_14-重置-reset-css-就是把一些具有默认样式的元素清除自带样式-可以消除不同浏览器带来的渲染差异",children:[]},{level:2,title:"15. CSS sprites精灵图，把小图片整合到一张图里，可以减少http请求次数，再使用backgroud-image和background-position来定位图片",slug:"_15-css-sprites精灵图-把小图片整合到一张图里-可以减少http请求次数-再使用backgroud-image和background-position来定位图片",children:[]},{level:2,title:"16. 为获得统一的页面效果，给不同浏览器不同的版本写不同样式就叫做CSS hack",slug:"_16-为获得统一的页面效果-给不同浏览器不同的版本写不同样式就叫做css-hack",children:[]},{level:2,title:"17. 高效CSS选择，组合选择器是从右到左解析的，效率: #id > .class > tag",slug:"_17-高效css选择-组合选择器是从右到左解析的-效率-id-class-tag",children:[]},{level:2,title:"18. 选择器优先级: #id > .class > tag",slug:"_18-选择器优先级-id-class-tag",children:[]},{level:2,title:"19. float浮动",slug:"_19-float浮动",children:[]},{level:2,title:"20. 行内元素设置width和height无效",slug:"_20-行内元素设置width和height无效",children:[]},{level:2,title:"21. 块级格式上下文 BFC",slug:"_21-块级格式上下文-bfc",children:[{level:3,title:"触发BFC的条件",slug:"触发bfc的条件",children:[]},{level:3,title:"BFC能解决的问题",slug:"bfc能解决的问题",children:[]}]},{level:2,title:"22. CSS冲突问题",slug:"_22-css冲突问题",children:[{level:3,title:"使用CSS预处理器，用命名空间来隔离",slug:"使用css预处理器-用命名空间来隔离",children:[]},{level:3,title:"使用CSS in JS",slug:"使用css-in-js",children:[]},{level:3,title:"配置Webpack使CSS作用域为局部module",slug:"配置webpack使css作用域为局部module",children:[]}]}],filePathRelative:"Web/CSS.md",git:{updatedTime:164077377e4,contributors:[]}}},4316:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>p});const t=(0,a(6252).uE)('<h1 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h1><h2 id="_1-css-html都不区分大小写" tabindex="-1"><a class="header-anchor" href="#_1-css-html都不区分大小写" aria-hidden="true">#</a> 1. css,html都不区分大小写</h2><h2 id="_2-imoprt-引入css" tabindex="-1"><a class="header-anchor" href="#_2-imoprt-引入css" aria-hidden="true">#</a> 2. @imoprt 引入CSS</h2><h2 id="_3-元素居中" tabindex="-1"><a class="header-anchor" href="#_3-元素居中" aria-hidden="true">#</a> 3. 元素居中</h2><ul><li><h3 id="水平居中" tabindex="-1"><a class="header-anchor" href="#水平居中" aria-hidden="true">#</a> 水平居中</h3></li></ul><p>行内元素居中</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.parent</span> <span class="token punctuation">{</span>\n    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>块级元素居中</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.child</span> <span class="token punctuation">{</span>\n    <span class="token property">margin</span><span class="token punctuation">:</span> auto\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><h3 id="水平垂直居中" tabindex="-1"><a class="header-anchor" href="#水平垂直居中" aria-hidden="true">#</a> 水平垂直居中</h3></li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.parent</span> <span class="token punctuation">{</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.child</span> <span class="token punctuation">{</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.parent</span> <span class="token punctuation">{</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.child</span> <span class="token punctuation">{</span>\n    <span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span>\n    <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>\n    <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>\n    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.parent</span> <span class="token punctuation">{</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.parent</span> <span class="token punctuation">{</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.child</span> <span class="token punctuation">{</span>\n    <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_4-margin-padding对block和inline元素的不同影响" tabindex="-1"><a class="header-anchor" href="#_4-margin-padding对block和inline元素的不同影响" aria-hidden="true">#</a> 4. margin,padding对block和inline元素的不同影响</h2><ul><li><h3 id="总结来说-横向内外边距对所有元素都起作用-纵向内外边距只对块级元素和可替换行内元素起作用" tabindex="-1"><a class="header-anchor" href="#总结来说-横向内外边距对所有元素都起作用-纵向内外边距只对块级元素和可替换行内元素起作用" aria-hidden="true">#</a> 总结来说，横向内外边距对所有元素都起作用，纵向内外边距只对块级元素和可替换行内元素起作用</h3></li><li><h3 id="margin-top-margin-bottom对inline元素" tabindex="-1"><a class="header-anchor" href="#margin-top-margin-bottom对inline元素" aria-hidden="true">#</a> margin-top, margin-bottom对inline元素</h3></li></ul><p>margin-left,margin-right对所有元素都起作用； margin-top,margin-bottom只对块级(block)元素起作用，对大部分行内元素(inline)是不起作用的， 原因在于margin-top,margin-bottom影响不到inline元素的行高(line-height)，因此没有预期视觉效果； 不过对于可替换元素，margin-top,margin-bottom可以起作用</p><ul><li><h3 id="padding-top-padding-bottom对inline元素" tabindex="-1"><a class="header-anchor" href="#padding-top-padding-bottom对inline元素" aria-hidden="true">#</a> padding-top,padding-bottom对inline元素</h3></li></ul><p>几乎和margin一样，只不过padding-top,padding-bottom对inline元素时，设置背景可以看到内边距增大， 可惜依然影响不到行高，不会撑开它的父级元素</p><h2 id="_5-rem" tabindex="-1"><a class="header-anchor" href="#_5-rem" aria-hidden="true">#</a> 5. rem</h2><p>rem是以html中font-size为基准的相对度量单位，在这里给t类型设置宽度为10rem=10 * 20px = 200px</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">html</span> <span class="token punctuation">{</span>\n    <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.t</span> <span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 10rem<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_6-checked用于选择-input-type-radio-input-type-checkbox-option-in-select-选中的样式" tabindex="-1"><a class="header-anchor" href="#_6-checked用于选择-input-type-radio-input-type-checkbox-option-in-select-选中的样式" aria-hidden="true">#</a> 6. :checked用于选择<code>&lt;input type=&quot;radio&quot;&gt;&lt;input type=&quot;checkbox&quot;&gt;&lt;option&gt;in&lt;select&gt;</code>选中的样式</h2><h2 id="_7-root选择文档的根元素" tabindex="-1"><a class="header-anchor" href="#_7-root选择文档的根元素" aria-hidden="true">#</a> 7. :root选择文档的根元素</h2><h2 id="_8-相邻兄弟选择器" tabindex="-1"><a class="header-anchor" href="#_8-相邻兄弟选择器" aria-hidden="true">#</a> 8. + 相邻兄弟选择器</h2><h2 id="_9-after在标签后插入" tabindex="-1"><a class="header-anchor" href="#_9-after在标签后插入" aria-hidden="true">#</a> 9. :after在标签后插入</h2><h2 id="_10-transform-translate-x-y-scale-x-y" tabindex="-1"><a class="header-anchor" href="#_10-transform-translate-x-y-scale-x-y" aria-hidden="true">#</a> 10. transform: translate(x,y) scale(x,y)</h2><h2 id="_11-only-排除不支持媒体查询的浏览器" tabindex="-1"><a class="header-anchor" href="#_11-only-排除不支持媒体查询的浏览器" aria-hidden="true">#</a> 11. only 排除不支持媒体查询的浏览器</h2><h2 id="_12-媒体查询实现自适应布局" tabindex="-1"><a class="header-anchor" href="#_12-媒体查询实现自适应布局" aria-hidden="true">#</a> 12. 媒体查询实现自适应布局</h2><p>screen指的是浏览器窗口的大小，而不是物理设备屏幕的大小</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 2100px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\n\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_13-display-none-会使元素彻底消失不显示-visibility-hidden-只是隐藏不显示-但所占据的区域并不会释放" tabindex="-1"><a class="header-anchor" href="#_13-display-none-会使元素彻底消失不显示-visibility-hidden-只是隐藏不显示-但所占据的区域并不会释放" aria-hidden="true">#</a> 13. display: none;会使元素彻底消失不显示，visibility: hidden;只是隐藏不显示，但所占据的区域并不会释放</h2><h2 id="_14-重置-reset-css-就是把一些具有默认样式的元素清除自带样式-可以消除不同浏览器带来的渲染差异" tabindex="-1"><a class="header-anchor" href="#_14-重置-reset-css-就是把一些具有默认样式的元素清除自带样式-可以消除不同浏览器带来的渲染差异" aria-hidden="true">#</a> 14. 重置(reset)CSS，就是把一些具有默认样式的元素清除自带样式，可以消除不同浏览器带来的渲染差异</h2><h2 id="_15-css-sprites精灵图-把小图片整合到一张图里-可以减少http请求次数-再使用backgroud-image和background-position来定位图片" tabindex="-1"><a class="header-anchor" href="#_15-css-sprites精灵图-把小图片整合到一张图里-可以减少http请求次数-再使用backgroud-image和background-position来定位图片" aria-hidden="true">#</a> 15. CSS sprites精灵图，把小图片整合到一张图里，可以减少http请求次数，再使用backgroud-image和background-position来定位图片</h2><h2 id="_16-为获得统一的页面效果-给不同浏览器不同的版本写不同样式就叫做css-hack" tabindex="-1"><a class="header-anchor" href="#_16-为获得统一的页面效果-给不同浏览器不同的版本写不同样式就叫做css-hack" aria-hidden="true">#</a> 16. 为获得统一的页面效果，给不同浏览器不同的版本写不同样式就叫做CSS hack</h2><h2 id="_17-高效css选择-组合选择器是从右到左解析的-效率-id-class-tag" tabindex="-1"><a class="header-anchor" href="#_17-高效css选择-组合选择器是从右到左解析的-效率-id-class-tag" aria-hidden="true">#</a> 17. 高效CSS选择，组合选择器是从右到左解析的，效率: #id &gt; .class &gt; tag</h2><h2 id="_18-选择器优先级-id-class-tag" tabindex="-1"><a class="header-anchor" href="#_18-选择器优先级-id-class-tag" aria-hidden="true">#</a> 18. 选择器优先级: #id &gt; .class &gt; tag</h2><h2 id="_19-float浮动" tabindex="-1"><a class="header-anchor" href="#_19-float浮动" aria-hidden="true">#</a> 19. float浮动</h2><p>向左或向右浮动，直到边缘触碰到父元素的边框或者触碰到另一个浮动元素的边框</p><h2 id="_20-行内元素设置width和height无效" tabindex="-1"><a class="header-anchor" href="#_20-行内元素设置width和height无效" aria-hidden="true">#</a> 20. 行内元素设置width和height无效</h2><h2 id="_21-块级格式上下文-bfc" tabindex="-1"><a class="header-anchor" href="#_21-块级格式上下文-bfc" aria-hidden="true">#</a> 21. 块级格式上下文 BFC</h2><p>BFC的目的是为了形成一个完全独立的容器，让其中的子元素不会影响到外面的布局</p><ul><li><h3 id="触发bfc的条件" tabindex="-1"><a class="header-anchor" href="#触发bfc的条件" aria-hidden="true">#</a> 触发BFC的条件</h3><ol><li>float不为none</li><li>position: absolute/fixed</li><li>display: inline-box</li><li>overflow: hidden/auto/scroll</li></ol></li><li><h3 id="bfc能解决的问题" tabindex="-1"><a class="header-anchor" href="#bfc能解决的问题" aria-hidden="true">#</a> BFC能解决的问题</h3></li></ul><p>外边距垂直方向重合</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span><span class="token property">background</span><span class="token punctuation">:</span> lightblue<span class="token punctuation">;</span><span class="token property">margin</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span><span class="token property">background</span><span class="token punctuation">:</span> lightblue<span class="token punctuation">;</span><span class="token property">margin</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>浮动元素的父元素高度塌陷</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span> <span class="token property">overflow</span><span class="token punctuation">:</span> hidden</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span><span class="token property">background</span><span class="token punctuation">:</span> #eee<span class="token punctuation">;</span><span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>浮动元素覆盖</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span><span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span><span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span><span class="token property">background</span><span class="token punctuation">:</span> lightblue</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span><span class="token property">background</span><span class="token punctuation">:</span> #eee<span class="token punctuation">;</span><span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_22-css冲突问题" tabindex="-1"><a class="header-anchor" href="#_22-css冲突问题" aria-hidden="true">#</a> 22. CSS冲突问题</h2><p>CSS文件分离不等于CSS作用域分离，只要最终CSS被引入统一文件就会发生CSS污染</p><ul><li><h3 id="使用css预处理器-用命名空间来隔离" tabindex="-1"><a class="header-anchor" href="#使用css预处理器-用命名空间来隔离" aria-hidden="true">#</a> 使用CSS预处理器，用命名空间来隔离</h3></li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.componentA</span> <span class="token punctuation">{</span>\n    <span class="token selector">.title</span> <span class="token punctuation">{</span>\n        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.componentB</span> <span class="token punctuation">{</span>\n    <span class="token selector">.title</span> <span class="token punctuation">{</span>\n        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>componentA<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>title<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>componentB<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>title<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li><h3 id="使用css-in-js" tabindex="-1"><a class="header-anchor" href="#使用css-in-js" aria-hidden="true">#</a> 使用CSS in JS</h3></li><li><h3 id="配置webpack使css作用域为局部module" tabindex="-1"><a class="header-anchor" href="#配置webpack使css作用域为局部module" aria-hidden="true">#</a> 配置Webpack使CSS作用域为局部module</h3></li></ul>',55),p={render:function(n,s){return t}}}}]);