(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{364:function(t,a,s){"use strict";s.r(a);var n=s(45),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"docc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docc"}},[t._v("#")]),t._v(" DocC")]),t._v(" "),s("p",[t._v("DocC是Swift框架或包的文档编译器 (Documentation Compiler)。\n文档标记语法 (Documentation Markup)基于Markdown，增加了特性如：标识符链接、术语定义列表、代码列表和旁注。\n另可提供交互式指引。生成的文档不仅可以直接在Xcode文档窗口中查看，还可以托管在网站上。")]),t._v(" "),s("h2",{attrs:{id:"requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),s("ul",[s("li",[t._v("Xcode 13+")]),t._v(" "),s("li",[t._v("Swift 5.5+")])]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"使用源代码中的文档注释来构建简单文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用源代码中的文档注释来构建简单文档"}},[t._v("#")]),t._v(" 使用源代码中的文档注释来构建简单文档")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("为代码添加文档注释")]),t._v(" "),s("p",[s("kbd",[t._v("Command")]),t._v("+"),s("kbd",[t._v("Option")]),t._v("+"),s("kbd",[t._v("/")])])]),t._v(" "),s("li",[s("p",[t._v("文档编译")]),t._v(" "),s("p",[t._v("Product -> Build Documentation")]),t._v(" "),s("p",[s("kbd",[t._v("Ctrl")]),t._v("+"),s("kbd",[t._v("Shift")]),t._v("+"),s("kbd",[t._v("Command")]),t._v("+"),s("kbd",[t._v("D")])])])]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"配置体验更丰富的文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置体验更丰富的文档"}},[t._v("#")]),t._v(" 配置体验更丰富的文档")]),t._v(" "),s("p",[t._v("当你想要提供额外的内容（如：引导页、扩展页、文章、教程页、图片资源）时，使用文档目录 (Documentation Catalog)")]),t._v(" "),s("p",[t._v('文档目录是后缀名为".docc"的文件夹，引导页、扩展页和文章都是Markdown文件，\n它们的区别就在于页面标题不同，分别为目标名标识符链接、待扩展的绝对路径标识符链接、纯文本')]),t._v(" "),s("p",[t._v("引导页是整个文档的第一个页面，扩展页用来扩展由每个标识符的文档注释生成的文档。\n项目内的每个目标都可以有自己的文档目录，编译生成的文档与目标一一对应。")]),t._v(" "),s("h3",{attrs:{id:"格式化文档内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#格式化文档内容"}},[t._v("#")]),t._v(" 格式化文档内容")]),t._v(" "),s("h4",{attrs:{id:"markdown原生"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown原生"}},[t._v("#")]),t._v(" Markdown原生")]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 一级标题")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" 二级标题")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("###")]),t._v(" 三级标题")]),t._v("\n\n普通文本\n"),s("span",{pre:!0,attrs:{class:"token bold"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")]),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("粗体")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token italic"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("斜体")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("*")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token strike"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("~~")]),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("删除")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("~~")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" 列表\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v(" 序号列表\n\n"),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("常规链接")]),t._v("]("),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("URL")]),t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token url"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("图像描述")]),t._v("]("),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("URL")]),t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("`单行代码`")]),t._v("\n\\```\n代码块\n\\```\n\n表头 |\n--- |\n单元格 |\n\n\\转义字符\n")])])]),s("h4",{attrs:{id:"documentation-markup特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#documentation-markup特性"}},[t._v("#")]),t._v(" Documentation Markup特性")]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("``标识符链接``")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("doc:")]),t._v("文章链接")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n<doc:/tutorials/教程链接>\n\n"),s("span",{pre:!0,attrs:{class:"token url"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("图像描述")]),t._v("]("),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("图像名称")]),t._v(")")]),t._v("\n图像文件名：图像名称~dark@2x.png\n\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" term 术语: 定义\n"),s("span",{pre:!0,attrs:{class:"token blockquote punctuation"}},[t._v(">")]),t._v(" Tip: 旁白\n旁白类型：Note, Important, Warning, Tip, Experiment\n\n代码块使用空格而不是Tab缩进\n")])])]),s("h3",{attrs:{id:"文档页面结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文档页面结构"}},[t._v("#")]),t._v(" 文档页面结构")]),t._v(" "),s("p",[t._v("文章无需多言就是普通的Markdown。")]),t._v(" "),s("p",[t._v("引导页和扩展页都要有一个页面标题，引导页标题为目标名标识符链接，扩展页标题为待扩展文档的标识符链接。")]),t._v(" "),s("p",[t._v('紧跟着页面标题是摘要，如果不编写摘要，文档就会显示 "No overview available."')]),t._v(" "),s("p",[t._v("Overview和Discussion都是可有可无的部分，可以换用其它的名字，Topics之上的部分是对页面的解释说明类似于文章非常自由。")]),t._v(" "),s("p",[t._v("Topics部分就是文档的层次结构了，如果不进行配置，就会使用默认的层次结构，按照protocol, struct, class等类型分类。配置之后可以使文档可以更好的按照逻辑来分类，拥有更易理解的层次结构。Topics的名字不可以随意更改，只能使用"),s("code",[t._v("Topics")])]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" ")]),s("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("``目标名/标识符链接``")]),t._v("\n\n摘要\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" Overview概览")]),t._v("\n\n概览\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" Discussion详述")]),t._v("\n\n详述\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" Topics")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("###")]),t._v(" Group分组1")]),t._v("\n\n- "),s("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("``标识符链接``")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("###")]),t._v(" Group分组2")]),t._v("\n\n- "),s("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("``标识符链接``")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"发布部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布部署"}},[t._v("#")]),t._v(" 发布部署")]),t._v(" "),s("p",[t._v("在Xcode文档窗口中手动导出")]),t._v(" "),s("p",[t._v("xcodebuild docbuild -scheme SlothCreator -derivedDataPath ~/Desktop/SlothCreatorBuild")])])}),[],!1,null,null,null);a.default=r.exports}}]);