---
sidebar: auto
---

# 在 Vue 项目中安装 TailwindCSS

通过 Vue Cli 可以方便的来安装 `TailwindCSS`，并使用 `PostCSS` 以及 `autoprefixer` 插件。

## 创建 Vue 项目

使用 Vue Cli 创建一个 vue2 项目

    vue create tailwindcss-with-vue-cli
    
## 安装 TailwindCSS

    yarn add tailwindcss
    
## 创建 TailwindCSS 配置文件

    npx tailwindcss init
    
此命令将在根目录下创建 `tailwind.config.js` 。
    
## 安装 PostCSS 和 autoprefixer

    yarn add --dev postcss autoprefixer
    
## 创建 PostCSS 配置文件

在项目根目录下面创建 `postcss.config.js`

    // postcss.config.js
    module.exports = {
        plugins: [
            require('tailwindcss')(),
            require('autoprefixer')(),
        ]
    }

## 引入 TailwindCSS 

在 `src/assets` 目录下面创建 `tailwindcss.css`

    // src/assets/tailwindcss.css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

然后在 `src/main.js` 文件中引入

    // src/main.js
    import './assets/tailwindcss.css'

## 启动 Vue Cli 本地服务

    yarn serve
    
如果出现如下错误

    Syntax Error: Error: PostCSS plugin autoprefixer requires PostCSS 8.

说明 `PostCSS` 与 `autoprefixer` 的版本不兼容，卸载 `autoprefixer`，并重新安装上一个版本

    yarn remove autoprefixer
    yarn add --dev autoprefixer@^9

再次运行

    yarn serve

如果运行正常，则说明版本兼容性问题解决。

## 测试 TailwindCSS

在 `src/App.vue` 中添加如下代码

    <div class="p-3 bg-green-500 text-white">Hello Tailwind CSS</div>

然后打开 `http://localhost:8080/` 查看效果，如果出现了预期的样式，则说明集成 `Tailwind` 成功。

## 生产优化，减少代码体积

我们构建一下生产代码

    yarn build
    
查看一下 `dist/css` 下的 样式文件，体积有 3M 多。

这是因为默认配置下 `Tailwind` 的体积非常大，在部署到生产环境时，需要对引入的代码进行优化。

`Tailwind` 提供了方便的方法来移除没有使用的样式类，从而大大减少最后生成样式文件的体积。

打开 `tailwind.config.js`，在 `purge` 数组中添加所有需要优化的文件

    // tailwind.config.js
    module.exports = {
      purge: [
          'src/**/*.vue',
      ],
      darkMode: false, // or 'media' or 'class'
      theme: {
        extend: {},
      },
      variants: {
        extend: {},
      },
      plugins: [],
    }

这里我们添加了 `src/**/*.vue`，来匹配所有的 `Vue` 组件。

再次运行

    yarn build

然后查看 `dist/css` 目录下的样式文件，体积已经只有 3K 多了。

开始享用 `Tailwind` 强大的功能吧。
