---
sidebar: auto
---

# 在 Tailwind CSS 中设置排版默认值的最佳方法

原文作者：Frank Spin ([https://twitter.com/Frankspin](https://twitter.com/Frankspin))

原文链接：[https://www.themes.dev/blog/typographic-defaults-in-tailwind-css/](https://www.themes.dev/blog/typographic-defaults-in-tailwind-css/)


你有没有想过如何使用像 Tailwind CSS 这样的功能优先的 CSS 框架来处理排版样式？在这篇文章中，我向您展示了设置默认值的最佳方法，以及如何处理来自您无法控制的源的内容样式，如内容管理系统或 markdown 文件。
## 定义基础排版样式
我们先来设置一下我们页面的全局排版默认值，以便我们以后可以对具体的元素进行微调。要想跟上这篇文章，建议你对 Tailwind CSS 的工作原理有一个基本的了解。


如果你对 Tailwind CSS 或其他功能优先的 CSS 框架完全陌生，这篇文章也许不适合你! 但还是请您放心地阅读吧。
### 字体家族
首先，您必须决定您要使用什么字体系列。Tailwind CSS 提供了 [3 个预定义的字体堆栈](https://docs.tailwindchina.com/docs/font-family)。


一个字体堆栈是一个相关字体家族的集合，大多数时候是用来定义首选字体家族的后备选项。


要应用 Tailwind CSS 默认的字体堆栈到您的页面上，在页面主体元素上设置首选类，这样页面上的每个元素都会使用它。


#### Sans-serif
```html
<body class="font-sans">...</body>
```
#### Serif
```html
<body class="font-serif">...</body>
```
#### Monospaced
```html
<body class="font-mono">...</body>
```
你很可能想修改或扩展默认的 Font Stacks 来匹配你自己的品牌。你可以在 `tailwind.config.js` 文件中轻松做到这一点，在编辑器中打开该文件并根据自己的喜好进行修改。


要用流行的 Roboto 字体来扩展默认的 SanS-Serif 字体堆栈，请编辑 `tailwind.config.js` 文件，如下所示：
```javascript
  // tailwind.config.js
  const { fontFamily } = require('tailwindcss/defaultTheme')

  module.exports = {
    theme: {
      extend: {
        fontFamily: {
          ...fontFamily,
          'sans': ['Roboto', ui-sans-serif', 'system-ui', ...],
        }
      }
    }
  }
```
如果你不知道如何修改你的 `tailwind.config.js` 文件，你可以在 Tailwind CSS 网站的[优秀文档](https://docs.tailwindchina.com/docs/configuration)中了解更多，或者现在坚持使用提供的默认值。


哦，不要忘了在您的文档的头部引用字体链接来加载字体。
```html
<head>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet">
  ....
</head>
```
### 字体大小和字体粗细
接下来，是时候定义你的基础字体大小和字体重量了。Tailwind CSS 提供了大量的字体大小和字体粗细功能类供您使用。这取决于你喜欢用什么默认值，但以下默认值在大多数情况下都很好用。
```html
<body class="font-sans font-base font-normal">...</body>
```
如果你希望更有冲击力，可以试试这个。
```html
<body class="font-sans font-lg font-medium">...</body>
```
像 Tailwind CSS 中的几乎所有东西一样，你可以修改或扩展它。说实话，我不记得上次我觉得需要扩展字体大小和字体粗细默认值是什么时候了。它们是相当稳固的，并且基于一个优秀的排版比例。
### 行高
现在我们已经定义了我们的字体系列、大小和粗细，然后我们要决定选择什么行高作为我们的默认值了。Tailwind CSS 定义了两种不同类型的[行高](https://docs.tailwindchina.com/docs/line-height)：相对行高和固定行高。


固定行高与当前的字体大小无关，对于非常精确的控制非常有用。对于我们的默认值，我们希望使用相对行高。这些都与所选的字体大小有关，非常适合我们的默认值。浏览器默认的 Line Height，`leading-normal` 功能类感觉是最合适的。我个人喜欢行与行之间的间距大一点，所以选择了`leading-relaxed`。
```html
<body class="font-sans font-base font-normal leading-relaxed">...</body>
```
### 文本颜色
最后我们要设置的是我们的文本颜色。Tailwind CSS 自带了许多[颜色功能类](https://docs.tailwindchina.com/docs/customizing-colors)，但你可能想从默认的灰度中选择一个。你想选择什么取决于你正在构建的东西。


当构建一个浅色主题时，你可以为你的文本选择一个较深的灰色，如`text-gray-800`，而对于一个较深的主题，则可以选择较浅的灰色，如`text-gray-200`。
```html
<body class="font-sans font-base font-normal leading-relaxed text-gray-800">...</body>
```
现在我们已经有了默认的排版风格，是时候微调特定的元素了，比如标题和按钮。
## 设置页面标题和其他元素的样式
一个好的显示页面层次的方法就是使用不同的字体大小，这样可以让人们从视觉上识别和扫描你的页面轮廓。因此，让我们的页面标题比我们的基础文字大一些是很有意义的，这样用户可以更好地看到我们页面的新部分何时开始。
### 标题
我们首先要决定我们想要的标题风格。我们要实现几个目标。增加字体大小，使其更粗壮，降低行高，并将文本颜色改为深灰色。让我们看看如何通过几个简单的功能类来实现这些目标。
```html
<h1 class="font-3xl font-bold leading-tight text-gray-900">...</h1>
```
这就对了。通过四个简单的类，我们已经改变了 `H1` 标题的外观和感觉。现在你可以将同样的原则应用到其他标题中。请注意，不要把所有的东西都用同样的样式。
```html
  <h1 class="font-3xl font-bold leading-tight text-gray-900">...</h1>
  <h1 class="font-4xl font-medium leading-tight text-blue-500">...</h1>
  <h2 class="font-2xl font-bold leading-tight text-gray-900">...</h2>
  <h3 class="font-xl font-bold leading-tight text-gray-900">...</h3>
```
### 超链接和按钮
另一个我们希望在视觉上看起来不同的元素是我们的超链接和按钮。我们可以用与标题相同的原则来设计它们。
```html
<a href="" class="text-green-500 hover:underline">...</a>
```
对于我们的按钮，我们再介绍几个功能类。如果你熟悉 CSS 的基础知识，我想你可以猜到大多数类代表什么。
```html
<button href="" class="bg-green-500 text-white py-2 px-3 rounded-lg inline-block">......</button>
```
`bg-green-500` 将我们的背景色设置为绿色，`text-white` 将我们的文本颜色设置为白色，`py-2` 设置顶部和底部的内边距，`px-3` 设置左右的内边距，`rounded-lg` 设置边框圆角半径。`inline-block` 使我们的按钮表现得像一个内联块元素。


这就是 Tailwind CSS 的真正魅力。如果你懂 CSS，基本上可以猜到 Tailwind 中对应的功能类是什么。
## 为 CMS 的内容设置默认值
从开发人员的角度来看，使用功能类是很好的，但对于文案人员来说，可能会感到恐惧和繁琐。你不想强迫任何人在他们写的每一个标题或段落中加入功能类。


幸运的是，Tailwind CSS 的创造者已经想出了一个解决方案。他们制作了一个插件，为那些不总是开发者控制的内容设置排版默认值。对于内容管理系统或 markdown 文件的内容来说是完美的。


### Tailwindcss-typography 插件
要开始使用该插件，我们首先要安装它，同时也要把它引入到我们的项目中。我们可以用 NPM 或者 Yarn 来安装这个插件。
```shell
npm install @tailwindcss/typography@latest --save-dev
```
接下来，我们只要在 `tailwind.config.js` 文件中引入这个插件，基本上就可以使用排版插件了。
```javascript
  // tailwind.config.js

  module.exports = {
    theme: {
      ...
    },
    variants: {},
    plugins: [
      require('@tailwindcss/typography'),
    ]
  }
```
通过引入该插件，我们收到了一个新的名为 `prose` 的特殊功能类。这个强大的类可以为任何普通的 HTML 提供排版样式。要使用这个功能，你所要做的就是将 `prose` 类添加到元素中。
```html
<article class="prose">
  <h2>This is a h2 heading, and will be styled by the prose class</h2>
  <p>This paragraph tag is also styled by the prose class</p>
  <ul>
    <li>Even this list item</li>
    <li>Cool he?</li>
  </ul>
</article>
```
现在 `article` 标签内的所有内容都有了很好的样式。
### 更改默认样式
让我们来看看如何扩展提供的样式，以便更接近你的品牌。在你的 `tailwind.config.js` 文件里面，你有一个排版插件的特殊键，你可以用它来设置覆盖默认配置的选项。
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      ...
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            h2: {
              color: theme('colors.gray.800'),
            },
            h3: {
              color: theme('colors.gray.800'),
            },
            strong: {
              color: theme('colors.gray.800'),
            },
            a: {
              color: theme('colors.green.500'),
              '&:hover': {
                color: theme('colors.green.600')
              },
            },
          },
        },
      })
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
```
不要被这段代码吓到。它看起来比实际情况更复杂。让我们用几个简单的步骤来分解它。首先，我们包含了 Tailwind 的默认的主题工具，这样我们可以很容易地引用颜色。
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      ...
      typography: (theme) => ({
        DEFAULT: {
          css: {
            ...
          },
        },
      })
    }
  },
}
```
我们先为我们的 `prose` 功能类里面的所有内容设置文本颜色。文本颜色应该是中灰色（灰色700）。
```javascript
// tailwind.config.js
  typography: (theme) => ({
    DEFAULT: {
      css: {
        color: theme('colors.gray.700'),
      },
    },
  })
```
现在我们定义了基础颜色，接下来就是微调元素，比如 `h2`、`h3` 和 `strong` 标签。对于这些标签，我们都选用稍微深一点的灰色（灰800）。这样我们的标题就会变得更有冲击力。
```javascript
// tailwind.config.js
  typography: (theme) => ({
    DEFAULT: {
      css: {
        ...
        h2: {
          color: theme('colors.gray.800'),
        },
        h3: {
          color: theme('colors.gray.800'),
        },
        strong: {
          color: theme('colors.gray.800'),
        },
      },
    },
  })
```
最后我们改变的是我们的文字链接颜色。请注意，我们还可以对链接的悬停外观和感觉进行样式设计。
```javascript
// tailwind.config.js
  typography: (theme) => ({
    DEFAULT: {
      css: {
        .....
        a: {
          color: theme('colors.green.500'),
          '&:hover': {
            color: theme('colors.green.600')
          },
        },
      },
    },
  })
```
官方的 Tailwindcss-typography 插件带有更多的样式选项。大多数时候，我只发现自己微调字体大小、颜色和粗细。但你也可以控制像行高、外边距和内边距。这完全取决于你想定制多少。
### 什么时候用 Prose，什么时候不用
你现在可能想知道什么时候使用 Prose 来为你的内容设置样式，什么时候用其他功能类（如`text-xl`、`text-gray-800`等）来手动为内容设置样式。


一般来说，我建议只使用 Prose 来为博客、长文章或产品描述中的内容设置样式。对于其他所有元素的样式，我更喜欢使用其他功能类，因为它可以让你更精细地控制你的样式。这只是我的观点，无关你同意或不同意。


## 为移动端设置不同的排版默认值
最后，我们来看看如何为移动设备应用不同的排版默认值。Tailwind 中的每个功能类都可以在不同的断点上[有条件的应用](https://docs.tailwindchina.com/docs/responsive-design)。


这使得为移动设备应用不同的排版默认值变得非常简单。


假设我们希望我们的内容和标题在移动设备上小一点。这样我们就可以在屏幕上容纳更多的内容，而且还能提供更好的用户体验。让我们从修改我们 body 的功能类开始。


### 响应式 body 类
```html
<body class="font-sans font-sm md:font-base font-normal leading-normal md:leading-relaxed text-gray-800">...</body>
```
Tailwind CSS 中的断点是建立在移动优先的原则上。这意味着我们从定义移动端的排版默认值开始，然后为大屏幕微调。


在上面的例子中，你可以看到这个原则的作用。请注意以下类 `font-sm`、 `md:font-base`、 `leading-normal` 和 `md:leading-relaxed`。


这在移动设备上转化为更小的字体大小和行高，在断点 `md(768px)` 上，字体大小被设置回我们最初的首选默认值。


### 响应式标题和 CMS 内容
最后，我们让我们的排版标题样式和 CMS 内容更适合我们的移动用户。
```html
<h1 class="font-xl md:font-2xl lg:font-3xl font-bold leading-tight text-gray-900">...</h1>
```
在上面的例子中，你可以看到三个类来控制我们的字体大小（`font-xl`、`md:font-2xl` 和 `lg:font-3xl`）。在本例中，我选择在 `lg` 断点上引入额外的字体大小。现在，我们的标题样式已经到位，我们只需要对 CMS 内容进行微调。
```html
<article class="prose md:prose-lg">...</article>
```
这完全取决于你需要多少控制和微调。我的建议是要谨慎的微调字体大小和其他细节。首先要确保你的基础样式，然后用实际的内容填充你的网站。随着你的内容填充完整，扫描页面，寻找任何不规则的地方，并相应地进行微调。


## 结束语
获得正确的排版风格是很困难的，也是一项耗时的工作。有了 尾风 CSS 与官方排版插件的结合，您就有了一个真正的省时工具。


大多数常见的排版案例都被默认覆盖，让您有足够的时间根据自己的喜好进行微调。
