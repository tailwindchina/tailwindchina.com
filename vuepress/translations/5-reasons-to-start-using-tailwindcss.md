---
sidebar: auto
---

# 开始使用 TailwindCSS 的 5 个理由

- 原文作者：Tony Lea
- 原文链接：[https://devdojo.com/tnylea/5-reasons-to-start-using-tailwindcss](https://devdojo.com/tnylea/5-reasons-to-start-using-tailwindcss)

![image.png](https://cdn.devdojo.com/posts/images/January2021/5-reasons-to-start-using-tailwindcss2.jpg?auto=format&q=70&w=680)

现在是2021年，是时候改变了。[Bootstrap](https://getbootstrap.com/) 作为顶级CSS框架的统治地位已经持续了相当长的时间，然而，这一切都将改变。

[TailwindCSS](https://tailwindcss.com/) 是猫的睡衣，它是蜜蜂的膝盖，它是花生酱和果冻之后最酷的东西🍇。如果你不相信，也许这篇文章会改变这一点。

## 再也不写 CSS 了

听起来很奇怪，你可以使用 CSS 库不再编写 CSS，这是因为你需要实现的任何样式都可以使用 TailwindCSS 功能类来创建。

Tailwind有一大套功能类，可以为 HTML 元素添加 padding、margin、width、height 和其他 CSS 属性。下面是一个利用 Tailwind 创建一个小黑方块的快速示例。

```html
<div class="w-10 h-10 bg-black"></div>
```

这些功能类可以用来制作一些漂亮的网站。另一个很好的原因是，你再也不用创建一个新的类名了。

Woah Woah Woah! 你告诉我停止使用传统的 CSS，并开始完全依赖 Tailwind？

我对采用这种只使用类来设计网站的新思路有点犹豫。但是，当我回过头来看，我曾经用 bootstrap 这样做，并在上面写自定义 CSS。这将导致臃肿的 CSS 文件和沉重的网站。

拥抱 Tailwind 后，您的生产力将突飞猛进🚀。您将能够在创纪录的时间内制作出漂亮的界面，而且会比以前更有趣。

如果你想尝试一下，你可以通过访问官方的 TailwindCSS 运行环境 [https://play.tailwindcss.com](https://play.tailwindcss.com)。

## 响应式设计

使用 TailwindCSS 创建移动优先的响应式设计是超级容易的。每个功能类都可以和响应式修改器一起使用。看看下面的CSS。
```html
<div class="w-10 h-10 md:w-16 md:h-16 bg-black"></div>
```
如果你在一个中等大小的屏幕（768px）上查看上述HTML，你会看到一个较大的方块。如果您在较小的屏幕（小于768px）上查看，您将看到一个较小的方块。

利用响应式类，您可以为任何屏幕尺寸创建很棒的设计。一定要查看 [Tailwind 的响应式设计文档来了解更多](https://tailwindcss.com/docs/responsive-design)。

## 精美的调色板

Tailwind 有一个精美的调色板，包括 8 种基本颜色和 10 种不同的色调。
![image.png](https://cdn.devdojo.com/images/january2021/color-palette.png)
我们可以在网站的任何元素上使用这些颜色。我们可以将一种颜色应用到我们的背景、文本、边框等。这里是我们的正方形元素，有蓝色背景和白色文本。

```html
<div class="w-10 h-10 bg-blue text-white">YO</div>
```
在最新版本的 Tailwind 中，我们还可以使用扩展的颜色调色板。
![image.png](https://cdn.devdojo.com/images/january2021/extended-colors.png)
要使用这些扩展的颜色，您需要在您的 [Tailwind配置文件](https://tailwindcss.com/docs/configuration) 中包含一些额外的颜色。

这是一个完美的开始使用 Tailwind 的最后一个原因。您可以自定义颜色、间距以及 Tailwind 内部的其他一切。定制 Tailwind 的每一个环节的能力是真正强大的。🤯

## 完全可定制
Tailwind 中的所有东西都是完全可配置的，你可以覆盖、扩展和添加你自己的功能类。所有这些定制都存在一个名为 `tailwind.config.js` 的文件中。

这个配置文件通常位于您的项目的根目录下。如果你修改了配置文件，你可以重新构建你的新样式，并将它们应用到你的网站上。

自定义的数量是无穷的，您也可以从多个 [Tailwind 插件](https://github.com/aniftyco/awesome-tailwindcss#plugins)中受益。

## 极小的 CSS 文件

Tailwind 有大量的功能类，这意味着初始文件的尺寸是相当大的，然而，Tailwind 利用 PurgeCSS 来扫描您的文件，并检测您正在使用的类，这意味着您的最终 CSS 文件将只包含您正在使用的功能类。这将产生一个非常小的 CSS 文件尺寸。

更小的CSS文件大小将导致更快的页面加载，更好的用户体验和更好的 SEO。

TailwindCSS 真是神奇! 🏆

在过去，如果你正在编写自定义 CSS，并且你有多个开发人员（添加他们自己的自定义 CSS），你将最终得到臃肿和庞大的 CSS 文件。所有这一切都可以通过使用 Tailwind 来解决。

如果你还没有加入 Tailwind 的行列，我强烈建议你穿上你的靴子，并骑上马鞍🐴，，因为 Tailwind 将在未来几年内主导 CSS 开发领域。


