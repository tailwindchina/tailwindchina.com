---
sidebar: auto
---

# Tailwind Cli 用法

`TailwindCSS` 安装包里自带了 `Tailwind Cli` 工具，用来编译 `TailwindC CSS` 文件和创建相关配置文件。

`Tailwind Cli` 主要包含三个命令：`help`， `init` 和 `build`。

注：使用 `Tailwind Cli` 命令前需要先安装 `tailwindcss` 和 `autoprefixer`

    yarn add tailwindcss autoprefixer

## `init` 命令

`init` 命令用法： `tailwind init [file]`

用来创建配置文件，主要有以下三种使用情况：

### 创建 `Tailwind` 默认配置文件

使用 `npx tailwindcss init [file]` 在项目根目录下创建 `Tailwind` 默认配置文件

    npx tailwindcss init

默认创建的文件名为 `tailwind.config.js`。

如果想自定义配置文件名，使用如下命令

    npx tailwindcss init tail.config.js
    
则创建的文件为 `tail.config.js`

### 创建 `Tailwind` 包含全部配置项的配置文件

    npx tailwindcss init --full 
    
创建的文件里包含所有的可定制的配置项。

### 创建 `Tailwind` 和 `PostCSS` 配置文件

    npx tailwindcss init -p

会同时创建 `tailwind.config.js` 和 `postcss.config.js`

## `build` 命令

`build` 命令用法：`tailwind build <file> [options]`

有三个选项：

- `-o, --output <file>` 指定输出的文件名
- `-c, --config <file>` 指定编译用的配置文件
- `--no-autoprefixer` 不使用 `autoprefixer` 为 CSS 文件添加前缀

用来编译 `Tailwind` CSS 文件

### 编译默认的 `Tailwind` CSS 文件

    npx tailwindcss build -o tailwindcss.css
    
根据默认的配置生成 `Tailwind` CSS 文件。

### 根据指定的配置文件编译 `Tailwind` CSS 文件

    npx tailwindcss build -o tailwindcss.css -c tailwind.config.js
    
### 不使用 `autoprefixer` 添加前缀

    npx tailwindcss build -o tailwindcss.css -c tailwind.config.js

### 根据指定的文件编译 Tailwind CSS 文件。

默认情况下，`build` 命令是根据安装包里默认的 `tailwind.css` 文件来编译的

    @tailwind base;
    
    @tailwind components;
    
    @tailwind utilities;

如果我们需要自定义需要编译的内容，比如，我们不需要编译基本样式 `base` 和 组件`components`，只编译工具类 `utilities`，首先新建一个 `tailwind.css` 文件

    @tailwind utilities;
    
然后运行命令

    npx tailwindcss build tailwind.css -o tailwindcss.css
    
编译出来的 CSS 文件就只有 `utilities` 的内容了。

## `help` 命令

用法：`tailwind <command> [options]`

### 查看帮助信息

    npx tailwindcss help

### 查看指定命令的帮助信息

    npx tailwindcss help build

## 交流社群

如果大家有什么问题，请访问下面的链接寻求帮助：

[交流社群](https://tailwindchina.com/discussions/)
