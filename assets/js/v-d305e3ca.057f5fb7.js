(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[150],{3802:(e,l,r)=>{"use strict";r.r(l),r.d(l,{data:()=>a});const a={key:"v-d305e3ca",path:"/Web/Taro.html",title:"Taro快速开始",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"是什么",slug:"是什么",children:[]},{level:2,title:"为什么",slug:"为什么",children:[]},{level:2,title:"怎么做 (MacOS 2020.11.27)",slug:"怎么做-macos-2020-11-27",children:[{level:3,title:"环境准备",slug:"环境准备",children:[]},{level:3,title:"仅使用Taro",slug:"仅使用taro",children:[]},{level:3,title:"同时使用Taro-UI",slug:"同时使用taro-ui",children:[]},{level:3,title:"代码编写",slug:"代码编写",children:[]}]}],filePathRelative:"Web/Taro.md",git:{updatedTime:1638959844e3,contributors:[]}}},9063:(e,l,r)=>{"use strict";r.r(l),r.d(l,{default:()=>x});var a=r(6252);const o=(0,a.uE)('<h1 id="taro快速开始" tabindex="-1"><a class="header-anchor" href="#taro快速开始" aria-hidden="true">#</a> Taro快速开始</h1><h2 id="是什么" tabindex="-1"><a class="header-anchor" href="#是什么" aria-hidden="true">#</a> 是什么</h2><p>基于React的 <strong>类小程序解释器</strong>。<br> 使用Taro组件编写代码，使用脚手架工具解释成对应平台的小程序代码，进而调试、测试、发布。</p><h2 id="为什么" tabindex="-1"><a class="header-anchor" href="#为什么" aria-hidden="true">#</a> 为什么</h2><p>微信小程序糟糕且特立独行的<s>架构设计</s>使得代码的编写异常困难，编写的代码难以复用。使用React开发微信小程序可以提升代码复用率，<strong>组件化</strong>、<strong>模块化</strong>开发小程序可以极大地提升开发效率，使开发者尽情享受小程序的商业成果。</p><h2 id="怎么做-macos-2020-11-27" tabindex="-1"><a class="header-anchor" href="#怎么做-macos-2020-11-27" aria-hidden="true">#</a> 怎么做 (MacOS 2020.11.27)</h2>',6),i=(0,a.Wm)("h3",{id:"环境准备",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#环境准备","aria-hidden":"true"},"#"),(0,a.Uk)(" 环境准备")],-1),d={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},t=(0,a.Uk)("Node.js官网"),n=(0,a.Uk)("下载安装包"),c=(0,a.Wm)("br",null,null,-1),p=(0,a.Uk)(" 双击下载的安装包node-v14.15.1.pkg按照指引安装"),s=(0,a.Wm)("br",null,null,-1),h=(0,a.Uk)(" （实测最新15.3.0版本无法使用Taro）"),u=(0,a.Wm)("br",null,null,-1),b=(0,a.Uk)(" 在终端输入"),m=(0,a.Wm)("code",null,"node",-1),g=(0,a.Uk)("和"),T=(0,a.Wm)("code",null,"npm",-1),f=(0,a.Uk)("检查Node.js环境"),k=(0,a.uE)('<li><h3 id="仅使用taro" tabindex="-1"><a class="header-anchor" href="#仅使用taro" aria-hidden="true">#</a> 仅使用Taro</h3><ol><li><p>新建Taro项目（使用npx）<br><code>npx @tarojs/cli init [项目名]</code></p></li><li><p>切换到项目目录，安装Node包<br><code>cd [项目路径]</code><br><code>npm install</code></p></li><li><p>解释React代码为目标平台代码<br><code>npx taro build --type [目标平台]</code></p></li></ol><ul><li><p>注意事项：</p><ul><li><p>安装Node包时要找对路径，例如云开发路径为<code>./[项目名]/client</code><br> 不确定时可以执行<code>npm list</code>，如果提示有许多包没有安装那就对了</p></li><li><p>[type: 目标平台] = [weapp: 微信, alipay: 支付宝, tt: 头条, qq: 腾讯, jd: 京东, swan: 百度, h5: Web]</p></li><li><p>第3条后加<code>--watch</code>并打开微信开发者工具可以边调试代码边查看模拟器</p></li><li><p><code>src</code>是源代码路径，<code>dist</code>是生成的解释代码路径</p></li><li><p>可能需要关闭微信开发者工具的 ES6 转 ES5 功能，关闭上传代码时样式自动补全，关闭代码压缩上传，否则可能报错</p></li></ul></li></ul></li><li><h3 id="同时使用taro-ui" tabindex="-1"><a class="header-anchor" href="#同时使用taro-ui" aria-hidden="true">#</a> 同时使用Taro-UI</h3><ul><li>目前Taro和Taro-UI的适配不是很好，文档也没有及时更新，使用Taro3的模版代码竟然使用的是Taro-UI2，导致会自动下载Taro-UI2。然而UI2的架构已经无法适配，只能手动切换目前还处于开发阶段的Taro-UI3</li></ul><ol><li><p>新建Taro项目（使用npx）<br><code>npx @tarojs/cli init [项目名]</code></p></li><li><p>切换到项目目录，修改packgage.json依赖，安装Node包<br><code>cd [项目路径]</code><br><code>修改dependencies &quot;taro-ui&quot;: &quot;^3.0.0-alpha&quot;</code><br><code>npm install</code><br> tips: 如果不幸按照仅使用Taro安装了，那就删掉所有的node_modules重新安装依赖</p></li><li><p>解释React代码为目标平台代码<br><code>npx taro build --type [目标平台]</code></p></li></ol></li><li><h3 id="代码编写" tabindex="-1"><a class="header-anchor" href="#代码编写" aria-hidden="true">#</a> 代码编写</h3><ul><li><p>Taro<br><code>import React, { Component } from &#39;react&#39;</code><br><code>import { View } from &#39;@tarojs/components&#39;</code></p></li><li><p>Taro-UI<br><code>在app.js全局引入一次 import &#39;taro-ui/dist/style/index.scss&#39;</code><br><code>import { AtButton } from &#39;taro-ui&#39;</code></p></li></ul></li>',3),x={render:function(e,l){const r=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.j4)(a.HY,null,[o,(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[i,(0,a.Wm)("p",null,[(0,a.Wm)("a",d,[t,(0,a.Wm)(r)]),n,c,p,s,h,u,b,m,g,T,f])]),k])],64)}}}}]);