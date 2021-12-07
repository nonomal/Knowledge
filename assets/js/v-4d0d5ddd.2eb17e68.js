(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[994],{9090:(e,l,i)=>{"use strict";i.r(l),i.d(l,{data:()=>t});const t={key:"v-4d0d5ddd",path:"/Web/http.html",title:"http",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"1. TCP三次握手和四次挥手",slug:"_1-tcp三次握手和四次挥手",children:[{level:3,title:"三次握手",slug:"三次握手",children:[]},{level:3,title:"四次挥手",slug:"四次挥手",children:[]}]},{level:2,title:"2. 从输入 URL 到页面加载完成的过程中都发生了什么",slug:"_2-从输入-url-到页面加载完成的过程中都发生了什么",children:[]},{level:2,title:"3. RESTful API",slug:"_3-restful-api",children:[]}],filePathRelative:"Web/http.md",git:{updatedTime:163887235e4,contributors:[]}}},849:(e,l,i)=>{"use strict";i.r(l),i.d(l,{default:()=>a});const t=(0,i(6252).uE)('<h1 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> http</h1><h2 id="_1-tcp三次握手和四次挥手" tabindex="-1"><a class="header-anchor" href="#_1-tcp三次握手和四次挥手" aria-hidden="true">#</a> 1. TCP三次握手和四次挥手</h2><p>IP协议解决了主机IP之间的通信，TCP解决的是进程端口间的通信</p><ul><li><h3 id="三次握手" tabindex="-1"><a class="header-anchor" href="#三次握手" aria-hidden="true">#</a> 三次握手</h3></li></ul><ol><li>client --&gt; [SYN=1, seq = x]</li><li>[SYN=1, seq = y]; [ACK=1, seq = x + 1] &lt;-- server</li><li>client --&gt; [ACK=1, seq = y + 1]</li></ol><p>报文有可能重复发送，client发送了两个不同的序列号，那么服务端如何确定和哪一个连接呢，返回序列号加一让客户端得知我就和你这个序列号连接了。 反过来服务端也是相同的道理。客户端服务端通过协商序列号来建立连接，以及按序列号组装数据</p><ul><li><h3 id="四次挥手" tabindex="-1"><a class="header-anchor" href="#四次挥手" aria-hidden="true">#</a> 四次挥手</h3></li></ul><ol><li>client --&gt; [FIN=1, seq = x]</li><li>[ACK=1, seq = x + 1] &lt;-- server</li><li>[FIN=1, seq = y] &lt;-- server</li><li>client --&gt; [ACK=1, seq = y + 1]</li></ol><p>在二三次挥手之间服务端仍然可以发送数据，客户端只是停止发送数据但是可以接收数据。在接到客户端结束连接请求后，服务端仍然有可能有未发送的响应数据， 等待数据发送完毕，再发送结束连接请求，客户端同意那么这个服务就可以停止了。</p><h2 id="_2-从输入-url-到页面加载完成的过程中都发生了什么" tabindex="-1"><a class="header-anchor" href="#_2-从输入-url-到页面加载完成的过程中都发生了什么" aria-hidden="true">#</a> 2. 从输入 URL 到页面加载完成的过程中都发生了什么</h2><ol><li>查找域名对应的IP地址，按浏览器DNS缓存、操作系统DNS缓存、区域DNS服务器的顺序查找</li><li>根据IP地址与服务器建立TCP/IP连接</li><li>根据URL生成http请求，得到http响应，依据HTML渲染显示网页</li></ol><h2 id="_3-restful-api" tabindex="-1"><a class="header-anchor" href="#_3-restful-api" aria-hidden="true">#</a> 3. RESTful API</h2><ol><li>用URL定位资源</li><li>GET/POST/PUT/DELETE来描述操作</li><li>传输数据json,xml,yaml</li><li>Status Code表示操作结果</li></ol>',13),a={render:function(e,l){return t}}}}]);