(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[435],{4988:(e,a,t)=>{"use strict";t.r(a),t.d(a,{data:()=>i});const i={key:"v-5e38719b",path:"/Web/Performance-optimization.html",title:"性能优化",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"1. 减少http请求",slug:"_1-减少http请求",children:[]},{level:2,title:"2. 使用http2",slug:"_2-使用http2",children:[]},{level:2,title:"3. 服务端渲染",slug:"_3-服务端渲染",children:[]},{level:2,title:"4. 静态资源CDN加速",slug:"_4-静态资源cdn加速",children:[]},{level:2,title:"5. CSS和JavaScript标签位置",slug:"_5-css和javascript标签位置",children:[]},{level:2,title:"6. 使用字体图iconfont标代替图片图标",slug:"_6-使用字体图iconfont标代替图片图标",children:[]},{level:2,title:"7. 缓存静态资源",slug:"_7-缓存静态资源",children:[]},{level:2,title:"8. 压缩文件",slug:"_8-压缩文件",children:[]},{level:2,title:"9. 图片优化",slug:"_9-图片优化",children:[]}],filePathRelative:"Web/Performance-optimization.md",git:{updatedTime:1625641077e3,contributors:[]}}},97:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>h});const i=(0,t(6252).uE)('<h1 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化" aria-hidden="true">#</a> 性能优化</h1><h2 id="_1-减少http请求" tabindex="-1"><a class="header-anchor" href="#_1-减少http请求" aria-hidden="true">#</a> 1. 减少http请求</h2><h2 id="_2-使用http2" tabindex="-1"><a class="header-anchor" href="#_2-使用http2" aria-hidden="true">#</a> 2. 使用http2</h2><h2 id="_3-服务端渲染" tabindex="-1"><a class="header-anchor" href="#_3-服务端渲染" aria-hidden="true">#</a> 3. 服务端渲染</h2><p>客户端渲染：获取html,执行js,渲染 服务端渲染：返回html,解析html,渲染</p><h2 id="_4-静态资源cdn加速" tabindex="-1"><a class="header-anchor" href="#_4-静态资源cdn加速" aria-hidden="true">#</a> 4. 静态资源CDN加速</h2><h2 id="_5-css和javascript标签位置" tabindex="-1"><a class="header-anchor" href="#_5-css和javascript标签位置" aria-hidden="true">#</a> 5. CSS和JavaScript标签位置</h2><p><code>&lt;head&gt;</code>标签里的CSS和JavaScript会阻塞渲染，但为了防止用户看到没有样式的丑陋的html骨架，CSS只能放到<code>&lt;head&gt;</code>里， JavaScript则可以放到<code>&lt;body&gt;</code>标签的最底部</p><h2 id="_6-使用字体图iconfont标代替图片图标" tabindex="-1"><a class="header-anchor" href="#_6-使用字体图iconfont标代替图片图标" aria-hidden="true">#</a> 6. 使用字体图iconfont标代替图片图标</h2><h2 id="_7-缓存静态资源" tabindex="-1"><a class="header-anchor" href="#_7-缓存静态资源" aria-hidden="true">#</a> 7. 缓存静态资源</h2><p>添加过期时间以使得浏览器在过期时间内都使用缓存资源，另外在资源的URL中添加数据摘要(MD5)，当服务器资源更新时更新URL， 以使得浏览器加载新资源。</p><p>URL不能写死在页面中，比如要访问商品信息，可以通过访问商品接口得到要展示的商品图片的URL，每次 访问商品信息都会重新得到URL，那么图片更新的时候，就会得到新的URL，以使得浏览器重新加载资源。</p><p>小程序甚至iOS也是一样的思想，可以手动写缓存，保存资源数据和摘要，下一次访问接口比对摘要，有变化则更新缓存</p><h2 id="_8-压缩文件" tabindex="-1"><a class="header-anchor" href="#_8-压缩文件" aria-hidden="true">#</a> 8. 压缩文件</h2><p>Webpack压缩 JavaScript：UglifyPlugin CSS ：MiniCssExtractPlugin HTML：HtmlWebpackPlugin</p><h2 id="_9-图片优化" tabindex="-1"><a class="header-anchor" href="#_9-图片优化" aria-hidden="true">#</a> 9. 图片优化</h2><ol><li>图片延迟加载，只有当图片在可视区域才真正加载</li><li>根据屏幕大小自动加载合适的图片</li><li>使用WebP格式的图片</li></ol>',17),h={render:function(e,a){return i}}}}]);