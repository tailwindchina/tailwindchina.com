---
sidebar: auto
---

# 使用 Tailwind 构建可复用的 React 组件

原文作者： Tilo Mitra

原文链接：[https://www.smashingmagazine.com/2020/05/reusable-react-components-tailwind/](https://www.smashingmagazine.com/2020/05/reusable-react-components-tailwind/)


Tailwind CSS 是一个功能类优先的 CSS 框架，它为 web 开发人员提供底层的功能类名称。不需要任何 JavaScript，就可以与现有框架 (如 React、Vue、angle、Ember 等) 很好地配合使用，但对于新开发人员来说，理解如何在他们的应用程序中集成 Tailwind CSS 可能会令人困惑。在本文中，我们将探索使用 Tailwind CSS 构建可重用的 React 组件的方法。


为了更好地理解这篇文章，您需要和 React 一起工作。


[Tailwind CSS](http://www.tailwindcss.com/) 是一个非常流行的 CSS 框架，它提供底层的原子功能类来帮助开发人员构建自定义设计。在过去的几年里，它越来越受欢迎，因为它能很好地解决两个问题:

1. Tailwind CSS 使对 HTML 进行迭代更新变得更容易，无需挖掘样式表来查找匹配的 CSS 选择器。
2. Tailwind CSS 有明确而合理的约定和默认值，这使得人们无需从头开始编写 CSS 就可以轻松入门，加上官方全面的文档说明，Tailwind CSS 如此受欢迎也就不足为奇了。

这些方法将帮助您转换如下代码:


```html
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Enable
</button>
```


我们可以这样编写：


```html
<Button size="sm" textColor="white" bgColor="blue-500">
  Enable
</Button>
```


两个片段之间的区别在于，在第一个片段中，我们使用了标准的 HTML 按钮标签，而第二个片段使用了 `<Button>` 组件。`<Button>` 组件是为了可重用性而构建的，并且由于它具有更好的语义，因此更易于阅读。它使用属性来设置各种样式值，例如 size、textColor 和 bgColor，而不是一长串的类名称。让我们开始吧。


## 方法1: 使用 classnames 模块控制类


将 Tailwind CSS 调整为 React 应用程序的一个简单方法是接受类名并以编程方式切换它们。[classnames npm 模块](https://github.com/JedWatson/classnames)使在 React 中切换 CSS 类变得容易。为了演示如何使用它，让我们举个例子，其中您的 React 应用程序中有 `<Button>` 组件。


```html
// This could be hard to read.
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enable</button>

// This is more conventional React.
<Button size="sm" textColor="white" bgColor="blue-500">Enable</Button>
```


让我们看看如何分离 Tailwind CSS 类，以便使用此 `<Button>` 组件的人可以使用 React 属性，如 `size` 、 `textColor`  和 `bgColor` 。将 `bgColor`  和 `textColor` 等属性直接传递到类名字符串模板中。使用对象以编程方式切换类名 (就像我们对 `size`  ， `prop`  所做的那样)

在下面的示例代码中，我们将看一下这两种方法。


```jsx
// Button.jsx
import classnames from 'classnames';

function Button ({size, bgColor, textColor, children}) {
    return (
        <button className={classnames("bg-${bgColor} text-${textColor} font-bold py-2 px-4 rounded", {
    "text-xs": size === 'sm'
    "text-xl": size === 'lg',
    })}>
        {children}
    </button>
    )
};

export default Button;
```


在上面的代码中，我们定义了一个采用以下属性的按钮组件:


- `size`  

 定义按钮的大小并应用 Tailwind CSS text-xs 或 text-xl 类

- `bgColor` 

定义按钮的背景色并应用 Tailwind CSS [bg-* 类](https://docs.tailwindchina.com/docs/background-color)

- `textColor` 

定义按钮的文本颜色并应用 Tailwind CSS[ text-* 类](https://docs.tailwindchina.com/docs/text-color)

- `children` 

任何子组件都将通过这里。它通常包含 `<Button>` 中的文本


通过定义 Button.jsx，我们现在可以将其导入并使用 React 属性而不是类名，这使得我们的代码更易于阅读和重用。


```html
import Button from './Button';
<Button size="sm" textColor="white" bgColor="blue-500">Enable</Button>
```


### 使用交互式组件的类名


按钮是一个非常简单的用例。更复杂的事情呢？嗯，您可以进一步制作交互式组件。


例如，让我们看一下使用 Tailwind CSS 制作的下拉列表。


<video style="width:100%" loop controls src="https://res.cloudinary.com/indysigner/video/upload/v1589957574/tailwind-dropdown_zfwqtb.mp4" autoplay></video>

在本例中，我们使用 Tailwind CSS 的功能类创建了一个 HTML 组件，但我们暴露的 React 组件看起来像这样：


```jsx
<Dropdown
  options={\["Edit", "Duplicate", "Archive", "Move", "Delete"\]} 
  onOptionSelect={(option) => { 
    console.log("Selected Option", option)}
  } 
/>
```


查看上面的代码，您会注意到我们没有任何 Tailwind 功能类。它们都隐藏在 <Dropdown /> 的实现代码中。该下拉组件的用户只需提供选项列表和单击处理程序：onOptionSelect。


让我们看看如何使用 Tailwind CSS 构建此组件。


删除一些不相关的代码，这是逻辑的关键。您可以查看此 [Codepen](https://codepen.io/hobonumber1/pen/yLNGROX) 以获取完整示例。


```jsx
import classNames from 'classnames';

function Dropdown({ options, onOptionSelect }) {

  // Keep track of whether the dropdown is open or not.
  const [isActive, setActive] = useState(false);
  
  const buttonClasses = `inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-blue-500 active:text-gray-200 transition ease-in-out duration-150`;

  return (
    // Toggle the dropdown if the button is clicked
    <button onClick={() => setActive(!isActive)} className={buttonClasses}>
      Options
    </button>
    // Use the classnames module to toggle the Tailwind .block and .hidden classes
    <div class={classNames("origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg", {
      block: isActive,
      hidden: !isActive
    })}>
    // List items are rendered here.
    {options.map((option) => <div key={option} onClick={(e) => onOptionSelect(option)}>{option}</div>)}
   </div>
  )
}

export default Dropdown;

```


通过使用 `.hidden`  和 `.block`  类有选择地显示或隐藏下拉菜单，使其具有交互性。每当 `<button>` 被按下时，我们都会启动 `onClick`  处理程序来切换 `isActive`  状态。如果按钮处于活动状态（isActive === true），我们设置 `block` 类。否则，我们设置 `hide`  类。这些都是 Tailwind CSS 功能类，用于切换显示行为。


总之， `classnames` 模块是一种以编程方式简单有效的控制 Tailwind 类名的方法，它更方便的将逻辑分离成 React 属性，使您的组件更容易重用。它适用于简单和交互式的组件。


## 方法2: 使用常量定义设计系统


另一种使用 Tailwind CSS 和 React 在一起的方法是使用常量，并将属性映射到一个特定的常量，这对设计系统是有效的。让我们用一个例子来演示。


从一个 theme.js 文件开始，在那里您列出您的设计系统：


```javascript
// theme.js (you can call it whatever you want)
export const ButtonType = {
    primary: "bg-blue-500 hover:bg-blue-700 text-white font-bold rounded",
    secondary: "bg-blue-500 hover:bg-blue-700 text-white font-bold rounded",
    basic: "bg-white hover:bg-gray-700 text-gray-700 font-bold rounded",
  delete: "bg-red-300 hover:bg-red-500 text-white font-bold rounded"
};

export const ButtonSize = {
  sm: "py-2 px-4 text-xs",
  lg: "py-3 px-6 text-lg"
}

```


在这种情况下，我们有两组常量:


- `ButtonType` 定义了我们的应用程序中按钮的样式。
- `ButtonSize` 定义了我们应用程序中按钮的大小。



现在，让我们编写 `<Button>` 组件:


```javascript
import {ButtonType, ButtonSize} from './theme';

function Button({size, type, children}) {

  // This can be improved. I’m keeping it simple here by joining two strings.
  const classNames = ButtonType[type] + " " + ButtonSize[size];

  return (
    <button className={classNames}>{children}</button>
  )
}
export default Button;

```


我们使用 `ButtonType`  和 `ButtonSize`  常量创建类名称列表，这使得我们的 `<Button>` 界面更好，它允许我们使用大小和类型属性，而不是将所有内容放入类名字符串中。


```html
// Cleaner and well defined props.
<Button size="xs" type="primary">Enable</Button>
```


与之前的方法相比:


```html
// Exposing class names
<button className="py-2 px-4 text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">Enable</button>
```


如果您需要重新定义按钮在应用程序中的外观，只需编辑 `theme.js`  文件，应用程序中的所有按钮都会自动更新，这比在各种组件中搜索类名称更容易。


## 方法3: 用 @apply 编写功能类


提高 React 组件可读性的第三种方法是使用 CSS 和 PostCSS 中可用的 `@apply`  模式来提取重复类。这种模式涉及使用样式表和后处理器。


让我们通过一个例子来演示这是如何工作的。假设您有一个具有主按钮和辅助按钮的按钮组。

![image.png](https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/282ee887-9746-4a79-8b1a-4cd305f5e059/reusable-react-components-button.png)

```html
<button className="py-2 px-4 mr-4 text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">Update Now</button>

<button className="py-2 px-4 text-xs mr-4 hover:bg-gray-100 text-gray-700 border-gray-300 border font-bold rounded">Later</button>
```


使用 `@apply` ，您可以将此 HTML 编写为:


```html
<button className="btn btn-primary btn-xs">Update Now</button>
<button className="btn btn-secondary btn-xs">Later</button>
```


然后在 React 组件中:


```jsx
import classnames from "classnames";

function Button ({size, type, children}) {
  const bSize = "btn-" + size;
  const bType = "btn-" + type;
  return (
    <button className={classnames("btn", bSize, bType)}>{children}</button>
  )
}

Button.propTypes = {
  size: PropTypes.oneOf(['xs, xl']),
  type: PropTypes.oneOf(['primary', 'secondary'])
};


// Using the Button component.
<Button type="primary" size="xs">Update Now</Button>
<Button type="secondary" size="xs">Later</Button>

```


以下是如何创建这些 BEM 风格的类名，例如 `btn` , `btn-primary` 和其他。首先创建 `button.css`  文件:


```css
/\* button.css \*/ 
@tailwind base;
@tailwind components;

.btn {
  @apply py-2 px-4 mr-4 font-bold rounded;
}
.btn-primary {
  @apply bg-blue-500 hover:bg-blue-700 text-white;
}
.btn-secondary {
  @apply hover:bg-gray-700 text-gray-700 border-gray-300 border;
}
.btn-xs {
  @apply text-xs;
}
.btn-xl {
  @apply text-xl;
}

@tailwind utilities;

```


上面的代码不是真正的 CSS，但它将由 [PostCSS](https://postcss.org/) 编译生成。这里有[一个 GitHub 仓库](https://github.com/tailwindcss/designing-with-tailwindcss/tree/master/01-getting-up-and-running/05-composing-utilities-with-apply)，展示了如何为 JavaScript 项目设置 PostCSS 和 Tailwind CSS 。


还有一个[简短的视频](https://tailwindcss.com/course/composing-utilities-with-apply/#app)演示了如何进行设置。


### 使用 @apply 的缺点


将 Tailwind CSS 功能类提取到更高级别的 CSS 类中的概念似乎是有意义的，但是它有一些您应该注意的缺点，让我们用另一个例子来强调这些。


首先，通过提取这些类名，我们丢失了一些信息。例如，我们需要意识到这一点，必须将 `.btn-primary`  添加到一个已经应用了 `.btn`  的组件中，还有 `.btn-primary`  和 `.btn-secondary`  不能一起使用。这个信息光看类是看不出来的。


如果此组件更复杂，您还需要了解类之间的父子关系。在某种程度上，这是 Tailwind CSS 设计用来解决的问题，通过使用 `@apply` ，我们以不同的方式将问题带回来。


这是[一个视频](https://www.youtube.com/watch?v=ab8RePo5ZYU)，其中 Tailwind 的创建者 [Adam Wathan](https://twitter.com/adamwathan/) 探讨了使用 `@apply`  的利弊。


## 总结


在本文中，我们研究了将 Tailwind CSS 集成到 React 应用程序中用以构建可重用组件的三种方法。


这些方法可帮助您使用属性构建具有更简洁界面的 React 组件。


1. 使用 [`classnames`](https://github.com/JedWatson/classnames) 模块以编程方式切换类。
2. 定义一个常量文件，您可以在其中定义每个组件状态的类列表。
3. 使用 @apply 提取更高级别的 CSS 类。



如果您有任何问题，请在推特上给我发个信息，网址是 [@tilomitra](https://twitter.com/tilomitra)。
