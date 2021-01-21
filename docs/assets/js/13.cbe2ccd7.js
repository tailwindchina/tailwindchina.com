(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{378:function(i,a,s){"use strict";s.r(a);var t=s(25),e=Object(t.a)({},(function(){var i=this,a=i.$createElement,s=i._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[s("h1",{attrs:{id:"tailwind-cli-用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tailwind-cli-用法"}},[i._v("#")]),i._v(" Tailwind Cli 用法")]),i._v(" "),s("p",[s("code",[i._v("TailwindCSS")]),i._v(" 安装包里自带了 "),s("code",[i._v("Tailwind Cli")]),i._v(" 工具，用来编译 "),s("code",[i._v("TailwindC CSS")]),i._v(" 文件和创建相关配置文件。")]),i._v(" "),s("p",[s("code",[i._v("Tailwind Cli")]),i._v(" 主要包含三个命令："),s("code",[i._v("help")]),i._v("， "),s("code",[i._v("init")]),i._v(" 和 "),s("code",[i._v("build")]),i._v("。")]),i._v(" "),s("p",[i._v("注：使用 "),s("code",[i._v("Tailwind Cli")]),i._v(" 命令前需要先安装 "),s("code",[i._v("tailwindcss")]),i._v(" 和 "),s("code",[i._v("autoprefixer")])]),i._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[i._v("yarn add tailwindcss autoprefixer\n")])])]),s("h2",{attrs:{id:"init-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#init-命令"}},[i._v("#")]),i._v(" "),s("code",[i._v("init")]),i._v(" 命令")]),i._v(" "),s("p",[s("code",[i._v("init")]),i._v(" 命令用法： "),s("code",[i._v("tailwind init [file]")])]),i._v(" "),s("p",[i._v("用来创建配置文件，主要有以下三种使用情况：")]),i._v(" "),s("h3",{attrs:{id:"创建-tailwind-默认配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建-tailwind-默认配置文件"}},[i._v("#")]),i._v(" 创建 "),s("code",[i._v("Tailwind")]),i._v(" 默认配置文件")]),i._v(" "),s("p",[i._v("使用 "),s("code",[i._v("npx tailwindcss init [file]")]),i._v(" 在项目根目录下创建 "),s("code",[i._v("Tailwind")]),i._v(" 默认配置文件")]),i._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[i._v("npx tailwindcss init\n")])])]),s("p",[i._v("默认创建的文件名为 "),s("code",[i._v("tailwind.config.js")]),i._v("。")]),i._v(" "),s("p",[i._v("如果想自定义配置文件名，使用如下命令")]),i._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[i._v("npx tailwindcss init tail.config.js\n")])])]),s("p",[i._v("则创建的文件为 "),s("code",[i._v("tail.config.js")])]),i._v(" "),s("h3",{attrs:{id:"创建-tailwind-包含全部配置项的配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建-tailwind-包含全部配置项的配置文件"}},[i._v("#")]),i._v(" 创建 "),s("code",[i._v("Tailwind")]),i._v(" 包含全部配置项的配置文件")]),i._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[i._v("npx tailwindcss init --full \n")])])]),s("p",[i._v("创建的文件里包含所有的可定制的配置项。")]),i._v(" "),s("h3",{attrs:{id:"创建-tailwind-和-postcss-配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建-tailwind-和-postcss-配置文件"}},[i._v("#")]),i._v(" 创建 "),s("code",[i._v("Tailwind")]),i._v(" 和 "),s("code",[i._v("PostCSS")]),i._v(" 配置文件")]),i._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[i._v("npx tailwindcss init -p\n")])])]),s("p",[i._v("会同时创建 "),s("code",[i._v("tailwind.config.js")]),i._v(" 和 "),s("code",[i._v("postcss.config.js")])]),i._v(" "),s("h2",{attrs:{id:"build-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-命令"}},[i._v("#")]),i._v(" "),s("code",[i._v("build")]),i._v(" 命令")]),i._v(" "),s("p",[s("code",[i._v("build")]),i._v(" 命令用法："),s("code",[i._v("tailwind build <file> [options]")])]),i._v(" "),s("p",[i._v("有三个选项：")]),i._v(" "),s("ul",[s("li",[s("code",[i._v("-o, --output <file>")]),i._v(" 指定输出的文件名")]),i._v(" "),s("li",[s("code",[i._v("-c, --config <file>")]),i._v(" 指定编译用的配置文件")]),i._v(" "),s("li",[s("code",[i._v("--no-autoprefixer")]),i._v(" 不使用 "),s("code",[i._v("autoprefixer")]),i._v(" 为 CSS 文件添加前缀")])]),i._v(" "),s("p",[i._v("用来编译 "),s("code",[i._v("Tailwind")]),i._v(" CSS 文件")]),i._v(" "),s("h3",{attrs:{id:"编译默认的-tailwind-css-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译默认的-tailwind-css-文件"}},[i._v("#")]),i._v(" 编译默认的 "),s("code",[i._v("Tailwind")]),i._v(" CSS 文件")]),i._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[i._v("npx tailwindcss build -o tailwindcss.css\n")])])]),s("p",[i._v("根据默认的配置生成 "),s("code",[i._v("Tailwind")]),i._v(" CSS 文件。")]),i._v(" "),s("h3",{attrs:{id:"根据指定的配置文件编译-tailwind-css-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#根据指定的配置文件编译-tailwind-css-文件"}},[i._v("#")]),i._v(" 根据指定的配置文件编译 "),s("code",[i._v("Tailwind")]),i._v(" CSS 文件")]),i._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[i._v("npx tailwindcss build -o tailwindcss.css -c tailwind.config.js\n")])])]),s("h3",{attrs:{id:"不使用-autoprefixer-添加前缀"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不使用-autoprefixer-添加前缀"}},[i._v("#")]),i._v(" 不使用 "),s("code",[i._v("autoprefixer")]),i._v(" 添加前缀")]),i._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[i._v("npx tailwindcss build -o tailwindcss.css -c tailwind.config.js\n")])])]),s("h3",{attrs:{id:"根据指定的文件编译-tailwind-css-文件。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#根据指定的文件编译-tailwind-css-文件。"}},[i._v("#")]),i._v(" 根据指定的文件编译 Tailwind CSS 文件。")]),i._v(" "),s("p",[i._v("默认情况下，"),s("code",[i._v("build")]),i._v(" 命令是根据安装包里默认的 "),s("code",[i._v("tailwind.css")]),i._v(" 文件来编译的")]),i._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[i._v("@tailwind base;\n\n@tailwind components;\n\n@tailwind utilities;\n")])])]),s("p",[i._v("如果我们需要自定义需要编译的内容，比如，我们不需要编译基本样式 "),s("code",[i._v("base")]),i._v(" 和 组件"),s("code",[i._v("components")]),i._v("，只编译工具类 "),s("code",[i._v("utilities")]),i._v("，首先新建一个 "),s("code",[i._v("tailwind.css")]),i._v(" 文件")]),i._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[i._v("@tailwind utilities;\n")])])]),s("p",[i._v("然后运行命令")]),i._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[i._v("npx tailwindcss build tailwind.css -o tailwindcss.css\n")])])]),s("p",[i._v("编译出来的 CSS 文件就只有 "),s("code",[i._v("utilities")]),i._v(" 的内容了。")]),i._v(" "),s("h2",{attrs:{id:"help-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#help-命令"}},[i._v("#")]),i._v(" "),s("code",[i._v("help")]),i._v(" 命令")]),i._v(" "),s("p",[i._v("用法："),s("code",[i._v("tailwind <command> [options]")])]),i._v(" "),s("h3",{attrs:{id:"查看帮助信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看帮助信息"}},[i._v("#")]),i._v(" 查看帮助信息")]),i._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[i._v("npx tailwindcss help\n")])])]),s("h3",{attrs:{id:"查看指定命令的帮助信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看指定命令的帮助信息"}},[i._v("#")]),i._v(" 查看指定命令的帮助信息")]),i._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[i._v("npx tailwindcss help build\n")])])]),s("h2",{attrs:{id:"交流社群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#交流社群"}},[i._v("#")]),i._v(" 交流社群")]),i._v(" "),s("p",[i._v("如果大家有什么问题，请访问下面的链接寻求帮助：")]),i._v(" "),s("p",[s("a",{attrs:{href:"https://tailwindchina.com/discussions/",target:"_blank",rel:"noopener noreferrer"}},[i._v("交流社群"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);