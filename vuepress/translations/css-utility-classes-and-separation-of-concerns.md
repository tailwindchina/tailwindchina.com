---
sidebar: auto
---

# CSS功能类与关注点分离

原作者： Adam Wathan 发表于 2017年8月7日

原文链接：[https://adamwathan.me/css-utility-classes-and-separation-of-concerns/](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/)


在过去的几年里，我编写 CSS 的方式已经从一种非常“语义”的方法过渡到更像通常所说的“功能性 CSS”。


以这种方式编写 CSS 会引起很多开发人员[内心直接的抵触](https://twitter.com/mezzoblue/status/794419442272714752)，所以我想解释一下自己是如何走到这一步的，并分享在这一过程中所获得的一些经验和见解。


## 第一阶段：“语义”CSS


当试图学习如何做好 CSS 时，你会听到的最佳实践之一就是“关注点分离”。


这个想法是 HTML 应该只包含关于内容的信息，而所有的样式决定都应该在 CSS 中进行。


看看这个 HTML：


```html
<p class="text-center">
    Hello there!
</p>
```


看到那个 .text-center 类了吗？将文本居中是一个设计决定，所以这段代码违反了“关注点分离”，因为我们让样式信息混入到了 HTML 中。


相反，推荐的做法是根据元素的内容给它们起类名，并在 CSS 中使用这些类作为钩子来设计 HTML 的样式。 
 
```html
<style>
.greeting {
    text-align: center;
}
</style>

<p class="greeting">
    Hello there!
</p>
```


这种方法的典型例子就是 [CSS Zen Garden](http://www.csszengarden.com/)，这个网站旨在表明，如果你“分开你的关注点”， 只需更换样式表，你就可以完全重新设计一个网站。


而我的工作流程看起来是这样的：


先写下我需要的一些新 UI 的 HTML（在这种情况下是作者的简历卡）：


```html
<div>
  <img src="https://cdn-images-1.medium.com/max/1600/0*o3c1g40EXj65Fq9k." alt="">
  <div>
    <h2>Adam Wathan</h2>
    <p>
      Adam is a rad dude who likes TDD, Active Record, and garlic bread with cheese. He also hosts a decent podcast and has never had a really great haircut.
    </p>
  </div>
</div>
```


根据内容添加一两个描述类：


```html
- <div>
+ <div class="author-bio">
    <img src="https://cdn-images-1.medium.com/max/1600/0*o3c1g40EXj65Fq9k." alt="">
    <div>
      <h2>Adam Wathan</h2>
      <p>
        Adam is a rad dude who likes TDD, Active Record, and garlic bread with cheese. He also hosts a decent podcast and has never had a really great haircut.
      </p>
    </div>
  </div>
```
   

在 CSS/Less/Sass 中使用这些类作为"钩子"，来设计新的 HTML 。


```css
.author-bio {
  background-color: white;
  border: 1px solid hsl(0,0%,85%);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow: hidden;
  > img {
    display: block;
    width: 100%;
    height: auto;
  }
  > div {
    padding: 1rem;
    > h2 {
      font-size: 1.25rem;
      color: rgba(0,0,0,0.8);
    }
    > p {
      font-size: 1rem;
      color: rgba(0,0,0,0.75);
      line-height: 1.5;
    }
  }
}
```


下面是最终结果的演示：

<p class="codepen" data-height="563" data-theme-id="dark" data-default-tab="html,result" data-user="adamwathan" data-slug-hash="ZJeWBY" style="height: 563px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Author Bio, nested selectors">
  <span>See the Pen <a href="https://codepen.io/adamwathan/pen/ZJeWBY">
  Author Bio, nested selectors</a> by Adam Wathan (<a href="https://codepen.io/adamwathan">@adamwathan</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>


这种方法对我来说很有意义，有一段时间，我就是这样写 HTML 和 CSS 的。


不过最后，我开始觉得有些不对劲。


我已经“分离了我的关注点”，但 CSS 和 HTML 之间仍然存在着非常明显的耦合。大多数时候，CSS 就像 HTML 的一面镜子一样，嵌套的 CSS 选择器完美地映射了 HTML 结构。


**HTML 并不关心样式决定，但 CSS 却非常关心 HTML 结构。**


也许我的关注点并没有那么泾渭分明。


## 第二阶段：将样式从结构中解耦


在四处寻找这种耦合问题的解决方案之后，我开始发现越来越多的建议，即在你的 HTML 中添加更多的类，这样就可以直接针对它们，保持选择器的低特异性，并使 CSS 不那么依赖于特定 DOM 结构。


最著名的方法论就是 [Block Element Modifer](http://getbem.com/introduction/)，或者简称 BEM。


采用类似 BEM 的方法，上面的作者简历的 HTML 看起来更像是这样：


```html
<div class="author-bio">
  <img class="author-bio__image" src="https://cdn-images-1.medium.com/max/1600/0*o3c1g40EXj65Fq9k." alt="">
  <div class="author-bio__content">
    <h2 class="author-bio__name">Adam Wathan</h2>
    <p class="author-bio__body">
      Adam is a rad dude who likes TDD, Active Record, and garlic bread with cheese. He also hosts a decent podcast and has never had a really great haircut.
    </p>
  </div>
</div>
```


...而 CSS 会是这样的：
```css
.author-bio {
  background-color: white;
  border: 1px solid hsl(0,0%,85%);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow: hidden;
}
.author-bio__image {
  display: block;
  width: 100%;
  height: auto;
}
.author-bio__content {
  padding: 1rem;
}
.author-bio__name {
  font-size: 1.25rem;
  color: rgba(0,0,0,0.8);
}
.author-bio__body {
  font-size: 1rem;
  color: rgba(0,0,0,0.75);
  line-height: 1.5;
}
```


[在 CodePen 上查看](https://codepen.io/adamwathan/pen/ZJepYj)


这对我来说是一个巨大的进步，我的 HTML 仍然是“语义的”，而且不包含任何样式决定，现在我的 CSS 感觉与我的 HTML 结构解耦了，而且还能避免不必要的选择器特异性。


但后来我遇到了一个难题。


## 处理类似的组件


假设需要给网站增加一个新的功能：以卡片的形式显示文章的预览，


假设文章的预览卡顶部有一个完整的出血图像，下面有一个填充的内容部分，一个粗体标题和一些较小的正文，


假设让它尽可能看起来像一个作者的简历：


![29088772-342696c0-7c48-11e7-877d-9f28b52a7a51.png](https://user-images.githubusercontent.com/4323180/29088772-342696c0-7c48-11e7-877d-9f28b52a7a51.png)


如何处理这些问题，同时又能分离我们的关注点呢？


我们不能把 .author-bio 类应用到文章预览中，那样就不符合语义了，所以我们一定要让 .article-preview 成为独立的组件。


下面是 HTML 可以成为的样子：


```html
<div class="article-preview">
  <img class="article-preview__image" src="https://i.vimeocdn.com/video/585037904_1280x720.webp" alt="">
  <div class="article-preview__content">
    <h2 class="article-preview__title">Stubbing Eloquent Relations for Faster Tests</h2>
    <p class="article-preview__body">
      In this quick blog post and screencast, I share a trick I use to speed up tests that use Eloquent relationships but don't really depend on database functionality.
    </p>
  </div>
</div>
```


但是我们应该如何处理 CSS 呢？


### 方案1：复制样式


一种方法是直接复制 .author-bio 样式并重命名这些类：


```css
.article-preview {
  background-color: white;
  border: 1px solid hsl(0,0%,85%);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow: hidden;
}
.article-preview__image {
  display: block;
  width: 100%;
  height: auto;
}
.article-preview__content {
  padding: 1rem;
}
.article-preview__title {
  font-size: 1.25rem;
  color: rgba(0,0,0,0.8);
}
.article-preview__body {
  font-size: 1rem;
  color: rgba(0,0,0,0.75);
  line-height: 1.5;
}
```
这可以工作，但当然不是很 DRY。对于这些组件而言，以稍微不同的方式（可能是不同的填充或字体颜色）进行差异化也可能太容易了，但这可能导致外观的不一致。


### 方案2: @extend 作者简历组件 


另一种方法是使用你所选择的预处理器的 @extend  功能，复用 .author-bio 组件中已经定义的样式：


```css
.article-preview {
@extend  .author-bio; 
}
.article-preview__image {
@extend  .author-bio__image; 
}
.article-preview__content {
@extend  .author-bio__content; 
}
.article-preview__title {
@extend  .author-bio__name; 
}
.article-preview__body {
@extend  .author-bio__body; 
}
```


[在CodePen上查看](https://codepen.io/adamwathan/pen/ZJepLq)


一般情况下，[根本不建议使用 @extend](https://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/)，但是除此之外，这似乎可以解决我们的问题，对吗？


我们已经删除了 CSS 中的重复内容，我们的 HTML 仍然不受样式决定的影响。


但我们再来看看另外一个方案......


### 方案3：创建一个与内容无关的组件


从“语义”角度来看，我们的 .author-bio 和 .article-preview 组件并没有任何共同之处，一个是作者的简历，另一个是文章的预览。


但正如我们已经看到的，从设计的角度来看，它们有很多共同点。


因此，如果愿意，我们可以创建一个以它们的共同点命名的新组件，并为这两种类型的内容重复使用该组件。


让我们称它为 .media-card 吧。


下面是 CSS 的内容：


```css
.media-card {
  background-color: white;
  border: 1px solid hsl(0,0%,85%);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow: hidden;
}
.media-card__image {
  display: block;
  width: 100%;
  height: auto;
}
.media-card__content {
  padding: 1rem;
}
.media-card__title {
  font-size: 1.25rem;
  color: rgba(0,0,0,0.8);
}
.media-card__body {
  font-size: 1rem;
  color: rgba(0,0,0,0.75);
  line-height: 1.5;
}
```


...这里是作者简历的 HTML：
```html
<div class="media-card">
  <img class="media-card__image" src="https://cdn-images-1.medium.com/max/1600/0*o3c1g40EXj65Fq9k." alt="">
  <div class="media-card__content">
    <h2 class="media-card__title">Adam Wathan</h2>
    <p class="media-card__body">
      Adam is a rad dude who likes TDD, Active Record, and garlic bread with cheese. He also hosts a decent podcast and has never had a really great haircut.
    </p>
  </div>
</div>
```
 
这里是文章预览的 HTML 。
```html
<div class="media-card">
  <img class="media-card__image" src="https://i.vimeocdn.com/video/585037904_1280x720.webp" alt="">
  <div class="media-card__content">
    <h2 class="media-card__title">Stubbing Eloquent Relations for Faster Tests</h2>
    <p class="media-card__body">
      In this quick blog post and screencast, I share a trick I use to speed up tests that use Eloquent relationships but don't really depend on database functionality.
    </p>
  </div>
</div>
```
   
这种方法也消除了我们 CSS 中的重复，但我们现在不是“混合关注”了吗？


我们的 HTML 突然知道，我们希望这两篇内容的样式都是媒体卡，可是如果我们想在不改变文章预览外观的情况下改变作者简历的外观呢？


之前，我们可以直接打开样式表，为这两个组件中的任何一个选择新的样式。现在，却需要编辑 HTML 了！


但我们反过来想一想。


**如果我们需要添加一种新的内容类型，而这种内容也需要同样的样式呢？**


使用“语义”方法，我们需要编写新的 HTML，添加一些特定于内容的类作为样式“钩子”，打开我们的样式表，为新的内容类型创建一个新的 CSS 组件，并通过复制或使用 [@extend ](/extend ) 或 mixin 应用共享样式。 


使用我们的内容无关的 .media-card 类，我们需要写的只是新的 HTML，我们根本不需要打开样式表。


如果我们真的是“混合了关注点”，我们是否不应该在多个地方进行更改？


## “关注点分离”是个稻草人


当你从“关注点分离”的角度来思考 HTML 和 CSS 之间的关系时，它们是黑白分明的。


你要么有关注点分离（好！），要么没有（坏！）。


这不是思考 HTML 和 CSS 的正确方式。


相反，要考虑依赖的方向。


有两种方法可以编写 HTML 和 CSS。


### 1. ～“关注点分离”～


**依赖于 HTML 的 CSS。**


根据你的内容来命名你的类（比如.author-bio），将你的 HTML 视为你的 CSS 的依赖。


HTML 是独立的，它并不关心你如何让它看起来，它只是暴露了 HTML 所控制的钩子，比如 .author-bio。


另一方面，你的 CSS 不是独立的，它需要知道你的 HTML 决定暴露哪些类，并需要针对这些类来为 HTML 设计样式。


在这个模型中，你的 HTML 可以重新样式化，但是你的 CSS 是不可重用的。


### 2. ～“混合关注”～

**依赖于 CSS 的 HTML。**


以内容无关的方式将类命名为你的 UI 中的重复模式（比如 .media-card ），将 CSS 视为你的 HTML 的依赖。


CSS 是独立的，它并不关心被应用于什么内容，而只是暴露了一组可以应用于 HTML 的构件。


 HTML 不是独立的，它使用的是 CSS 提供的类，它需要知道有哪些类存在，以便根据需要将它们组合起来，以实现所需的设计。


在这种模式下，CSS 可以重用，但 HTML 不能重新设计。


CSS Zen Garden 采用的是第一种方法，而像 [Bootstrap](http://v4-alpha.getbootstrap.com/) 或 [Bulma](http://bulma.io/) 这样的 UI 框架采用的是第二种方法。


这本质上都不是“错误”的，它们仅仅是根据在特定的环境中什么对你更重要而做出的决定。


对于你正在做的项目，什么更有价值：可重塑的 HTML，还是可重用的 CSS？
#### 
### 选择可重用性


当我读到 Nicolas Gallagher 的[《关于 HTML 语义和前端架构》](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/)时，我的思维迎来了转变。


我不会在这里重申他的所有观点，但不用说，我从那篇博文中完全相信，为可重用的 CSS 进行优化将是我所从事项目的正确选择。


## 第三阶段：与内容无关的 CSS 组件


这时，我的目标是明确避免创建基于我的内容的类，而是试图以一种尽可能可重用的方式来命名所有的东西。


这就导致了像这样的类名：


- .card
- .btn, .btn--primary, .btn--secondary
- .badge
- .card-list, .card-list-item
- .img--round
- .modal-form, .modal-form-section

...等等


当我开始关注创建可重用的类时，也注意到了另外一件事。


**一个组件做的事情越多，或者一个组件越具体，就越难重用。**


这里有一个很直观的例子。


假设我们正在构建一个表单，有几个表单部分，底部有一个提交按钮。


如果我们把所有的表单内容都看作是 .stacked-form 组件的一部分，我们可以给提交按钮一个类似 .stacked-form__button 的类。


```html
<form class="stacked-form" action="#">
  <div class="stacked-form__section">
    <!-- ... -->
  </div>
  <div class="stacked-form__section">
    <!-- ... -->
  </div>
  <div class="stacked-form__section">
    <button class="stacked-form__button">Submit</button>
  </div>
</form>
```


但也许在我们的网站上还有另一个按钮，它不是表单的一部分，我们需要用同样的方式来实现。


在那个按钮上使用 .stacked-form__button 类是没有意义的，因为它不是堆叠表单的一部分。


不过这两个按钮都是各自页面上的主要操作，所以如果我们根据组件的共同点来命名按钮，并将其称为 .btn--primary，完全去掉 .stacked-form__ 前缀，会怎么样呢？


```html
 <form class="stacked-form" action="#">
    <!-- ... -->
    <div class="stacked-form__section">
-     <button class="stacked-form__button">Submit</button>
+     <button class="btn btn--primary">Submit</button>
    </div>
  </form>
```


现在假设我们想让这个堆叠的表单看起来像在一个浮动的卡片中。


一种方法是创建一个修饰符并将其应用到这个表单中。


```html
- <form class="stacked-form" action="#">
+ <form class="stacked-form stacked-form--card" action="#">
    <!-- ... -->
  </form>
```


但是如果我们已经有了一个 .card 类，为什么不使用现有的 card 和 stacked form 来组成这个新的 UI 呢？


```html
+ <div class="card">
    <form class="stacked-form" action="#">
      <!-- ... -->
    </form>
+ </div>
```


通过采取这种方法，我们有一个 .card，可以成为任何内容的家，还有一个不经意的 .stacked-form，可以在任何容器里面使用。


我们从组件中得到了更多的重用，**而且我们不必编写任何新的 CSS。**


## 基于子组件的组合


```html
<form class="stacked-form" action="#">
  <!-- ... -->
  <div class="stacked-form__section">
    <button class="btn btn--secondary">Cancel</button>
    <!-- Need some space in here -->
    <button class="btn btn--primary">Submit</button>
  </div>
</form>
```


假设我们需要在堆栈式表单的底部添加另一个按钮，并且我们希望它与现有的按钮有一定的间隔。
一种方法是创建一个新的子组件，


比如 .stacked-form__footer，为每个按钮添加一个额外的类，


比如 .stacked-form__footer-item，并使用子代选择器来添加一些边距：


```html
<form class="stacked-form" action="#">
  <!-- ... -->
  <div class="stacked-form__section">
    <button class="btn btn--secondary">Cancel</button>
    <!-- Need some space in here -->
    <button class="btn btn--primary">Submit</button>
  </div>
</form>
```


下面是CSS的样子：


```css
.stacked-form__footer {
  text-align: right;
}
.stacked-form__footer-item {
  margin-right: 1rem;
  &:last-child {
    margin-right: 0;
  }
}
```


但是如果我们在某个子导航或者头文件中也有同样的问题呢？


我们不能在 .stacked-form 之外重复使用 .stacked-form__footer，所以也许我们可以在头文件中创建一个新的子组件。


```html
  <header class="header-bar">
    <h2 class="header-bar__title">New Product</h2>
+   <div class="header-bar__actions">
+     <button class="header-bar__action btn btn--secondary">Cancel</button>
+     <button class="header-bar__action btn btn--primary">Save</button>
+   </div>
  </header>
```


...但现在我们不得不重复我们在新的 .header-bar__actions 组件中构建 .stacked-form__footer 的努力。


这感觉很像我们在一开始使用内容驱动类名时遇到的问题，不是吗？


解决这个问题的一个方法是想出一个全新的组件，更容易重用，并使用组合。


也许我们可以做一个类似 .actions-list 的东西。


```css
.actions-list {
  text-align: right;
}
.actions-list__item {
  margin-right: 1rem;
  &:last-child {
    margin-right: 0;
  }
}
```


现在我们可以完全摆脱 .stacked-form__footer 和 .header-bar__actions  组件，而在这两种情况下使用 .actions-list。


```html
<!-- Stacked form -->
<form class="stacked-form" action="#">
  <!-- ... -->
  <div class="stacked-form__section">
    <div class="actions-list">
      <button class="actions-list__item btn btn--secondary">Cancel</button>
      <button class="actions-list__item btn btn--primary">Submit</button>
    </div>
  </div>
</form>

<!-- Header bar -->
<header class="header-bar">
  <h2 class="header-bar__title">New Product</h2>
  <div class="actions-list">
    <button class="actions-list__item btn btn--secondary">Cancel</button>
    <button class="actions-list__item btn btn--primary">Save</button>
  </div>
</header>
```


但如果其中一个动作列表应该是左对齐的，而另一个应该是右对齐的呢？我们是否要让 .actions-list--left 和. actions-list--right 成为修饰符？


## 第四阶段：与内容无关的组件+功能类


想出一个合适的组件名称是件很折磨人的事情。


当你使用 .actions-list__left 这样的修饰符时，你会创建一个全新的组件修饰符，只是为了分配一个单一的 CSS 属性。它的名字中已经有了 left，所以你也不会欺骗任何人说它是“语义”的。


如果我们有另一个组件需要左对齐和右对齐的修饰符，我们是否也要为它创建新的组件修饰符呢？


这又回到了我们决定杀死 .stacked-form__footer 和 .header-bar__actions，并用一个单一的 .actions-list 来代替它们时所面临的问题。


**比起重复，我们更喜欢组合。**


那么，如果我们有两个动作列表，一个需要左对齐，另一个需要右对齐，我们如何用组合解决这个问题呢？


### 排列功能类


为了解决组合问题，我们需要能够给我们的组件添加一个新的可重用的类，让我们得到想要的效果。


我们已经打算把我们的修改器称为 .action-list__left 和 .action-list__right，所以没有理由不把这些新类称为类似 .align-left 和 .align-right 的东西。


```css
.align-left {
  text-align: left;
}
.align-right {
  text-align: right;
}
```


现在，我们可以使用组合来使我们的堆叠表单按钮左对齐。


```html
<form class="stacked-form" action="#">
  <!-- ... -->
  <div class="stacked-form__section">
    <div class="actions-list align-left">
      <button class="actions-list__item btn btn--secondary">Cancel</button>
      <button class="actions-list__item btn btn--primary">Submit</button>
    </div>
  </div>
</form>
```


...我们的标题按钮右对齐:


```html
<header class="header-bar">
  <h2 class="header-bar__title">New Product</h2>
  <div class="actions-list align-right">
    <button class="actions-list__item btn btn--secondary">Cancel</button>
    <button class="actions-list__item btn btn--primary">Save</button>
  </div>
</header>
```


### 不要害怕


如果在 HTML 中看到“左”和“右”这两个词让你感到不舒服，请记住，其实我们在 UI 中使用以视觉模式命名的组件已经很久了。


我们不能假装 .stacked-form 比 .align-right 更有“语义”，它们都是根据它们如何影响 HTML 的呈现来命名的，我们在 HTML 中使用这些类来实现特定的呈现效果。


我们正在编写依赖于 CSS 的 HTML。如果我们想把表单从 .stacked-form 改成 .horizontal-form，我们在 HTML 中做，而不是在 CSS 中做。


### 删除无用的抽象


这个解决方案的有趣之处在于，我们的 .action-list 组件现在基本没用了，它之前所做的只是将内容向右对齐。


让我们删除它吧。


```css
- .actions-list {
-   text-align: right;
- }
  .actions-list__item {
    margin-right: 1rem;
    &:last-child {
      margin-right: 0;
    }
  }
```


但是现在有一个 .actions-list__item 却没有一个 .actions-list，这就有点奇怪了。有没有其他方法可以解决我们原来的问题，而不需要创建一个 .actions-list__item 组件？


如果你回想一下，我们创建这个组件的全部原因是为了在两个按钮之间增加一点间距。.actions-list 对于按钮列表来说是一个相当不错的隐喻，因为它是通用的，且相当可重用，但当然也有可能在一些情况下，我们需要在不是   “acition” 的项目之间有相同的间距。


也许一个更可重用的名字会是类似 .spaced-horizontal-list 这样的名字，我们已经删除了实际的 .actions-list 组件，因为只有子组件才真正需要设置样式。


### 间距功能类


如果仅仅需要给孩子元素设置样式，比起使用奇特的伪选择器将它们作为组来设置，对他们进行独立的样式设置也许会更加简单。


在元素旁边添加一些间距的最可重用的方法是一个类，让我们说“这个元素旁边应该有一些空间”。


我们已经添加了像 .align-left 和 .align-right 这样的功能类，何不做一个新的功能类来添加一些右边距呢？


让我们创建一个新的功能类，类似于 .mar-r-sm，用于在元素的右边添加少量的边距。


```css
- .actions-list__item {
-   margin-right: 1rem;
-   &:last-child {
-     margin-right: 0;
-   }
- }
+ .mar-r-sm {
+   margin-right: 1rem;
+ }
```

下面是我们的表单和头像。


```html
<!-- Stacked form -->
<form class="stacked-form" action="#">
  <!-- ... -->
  <div class="stacked-form__section align-left">
    <button class="btn btn--secondary mar-r-sm">Cancel</button>
    <button class="btn btn--primary">Submit</button>
  </div>
</form>

<!-- Header bar -->
<header class="header-bar">
  <h2 class="header-bar__title">New Product</h2>
  <div class="align-right">
    <button class="btn btn--secondary mar-r-sm">Cancel</button>
    <button class="btn btn--primary">Save</button>
  </div>
</header>
```


整个 .actions-list 的概念现在都看不到了，我们的 CSS 更小，我们的类更可重用。


## 第五阶段：功能类优先的 CSS


沿着这个思路，不久之后，我就建立起了一整套的功能类，用于我所需要的常见视觉调整，比如：


- 文字大小、颜色和权重
- 边框颜色、宽度和位置
- 背景色
- FlexBox 功能类
- 衬垫和页边距辅助功能类



令人惊奇的是，在你意识到这一点之前，你可以在不编写任何新的 CSS 的情况下构建全新的 UI 组件。


看看我的一个项目中的这种“产品卡”组件：


![29088813-62ff9b86-7c48-11e7-9854-9c966ffbf9c4.png](https://user-images.githubusercontent.com/4323180/29088813-62ff9b86-7c48-11e7-9854-9c966ffbf9c4.png)


我的 HTML 是这样的：


```html
<div class="card rounded shadow">
    <a href="..." class="block">
        <img class="block fit" src="...">
    </a>
    <div class="py-3 px-4 border-b border-dark-soft flex-spaced flex-y-center">
        <div class="text-ellipsis mr-4">
            <a href="..." class="text-lg text-medium">
                Test-Driven Laravel
            </a>
        </div>
        <a href="..." class="link-softer">
            @icon('link')
        </a>
    </div>
    <div class="flex text-lg text-dark">
        <div class="py-2 px-4 border-r border-dark-soft">
            @icon('currency-dollar', 'icon-sm text-dark-softest mr-4')
            <span>$3,475</span>
        </div>
        <div class="py-2 px-4">
            @icon('user', 'icon-sm text-dark-softest mr-4')
            <span>25</span>
        </div>
    </div>
</div>
```


这里所使用的类的数量可能会让你一开始不屑一顾，但如果我们真的想把它做成一个真正的 CSS 组件，而不是用功能类来组成它，我们该怎么称呼它呢？


我们不想使用特定内容的名字，因为这样我们的组件只能在一个上下文中使用。


也许像这样？


```css
.image-card-with-a-full-width-section-and-a-split-section { .... }
```


当然不是，那太荒谬了。相反，我们可能会想用更小的组件来组成它，就像我们之前说的那样。


这些组件可能是什么？


好吧，也许它被装在一张卡片里。不过并不是所有的卡片都有阴影，所以我们可以用 .card--shadowed 修改器，或者我们可以创建一个 .shadow 功能类，可以应用到任何元素上。这听起来更可重用，所以我们就这么做吧。


事实证明，我们网站上的一些卡片没有圆角，但这个有。我们可以把它做成 .card--rounded，但是我们网站上的其他元素有时也会有同样的圆角，而这些都不是卡片。圆角的实用性会更强，可以重复使用。


那顶部的图片呢？也许那是类似于. img--fitted 的东西，这样就把卡片填满了？在网站上还有一些其他的地方，我们需要将一些东西贴合到它的上级宽度，而且不一定是图片，也许只是一个 .fit helper 会更好。


...你可能明白我的意思了。


如果你在关注可重用性的前提下，沿着这条线索走得足够远，那么用可重用的功能类来构建这个组件就是自然而然的事情了。


## 强制一致性


使用小型、可组合的功能类的最大好处之一是，你团队中的每个开发人员总是从一组固定的选项中选择值。


有多少次，你需要对一些 HTML 进行样式设计，然后想："这个文本需要更深一点"，然后用 darken() 函数来调整一些基础的 $text-color？


又或者，"这个字体应该再小一点"，然后给你正在处理的组件添加了 font-size: .85em？


感觉上你做的事情是"正确的"，因为你使用的是相对的颜色或相对的字体大小，而不仅仅是任意的数值。


但是，如果你决定将你的组件中的文本颜色调暗 10%，而别人的组件中的文本颜色调暗 12%，那该怎么办？在你意识到这一点之前，你的样式表中已经有 402 种独特的文本颜色了。


这种情况在每个代码库中都会发生，因为你需要编写新的 CSS。


- [GitLab](http://cssstats.com/stats?link=https%3A%2F%2Fgist.githubusercontent.com%2Fadamwathan%2F51ce5f8445dece60ef49d6b7dcc4e538%2Fraw%2Fe5349db6f1ccbd175f7dd7c581e061b4d49c1ff4%2Fgitlab.css)：402种文本颜色，239种背景颜色，59种字体大小
- [Buffer](http://cssstats.com/stats?link=https%3A%2F%2Fgist.githubusercontent.com%2Fadamwathan%2F51ce5f8445dece60ef49d6b7dcc4e538%2Fraw%2Fd560c4dadb9e85197d6e33ac0cb55c2435c45c65%2Fbuffer.css): 124种文字颜色，86种背景颜色，54种字体大小
- [HelpScout](http://cssstats.com/stats?link=https%3A%2F%2Fgist.githubusercontent.com%2Fadamwathan%2F51ce5f8445dece60ef49d6b7dcc4e538%2Fraw%2F1a12773f211891f4199d03c59bde97e814e044f0%2Fhelpscout.css)：198种文字颜色，133种背景颜色，67种字体大小
- [Gumroad](http://cssstats.com/stats?link=https%3A%2F%2Fstatic-1.gumroad.com%2Fres%2Fgumroad%2Fassets%2Fapplication-f7ade6b83ca73dcd02cc9762068df43c4ea824e0c94babde8e4c9ecfc2653acb.css): 91种文字颜色，28种背景颜色，48种字体大小
- [Stripe](http://cssstats.com/stats?link=https%3A%2F%2Fgist.githubusercontent.com%2Fadamwathan%2Fca146a9dbe99754159c07c6599ea45d2%2Fraw%2F90d64ed31422e9c4fc8b08b035b47ea048275ad1%2Fstripe.css): 189种文字颜色，90种背景颜色，35种字体大小
- [GitHub](http://cssstats.com/stats?url=http%3A%2F%2Fgithub.com&name=GitHub)：163种文字颜色，147种背景颜色，56种字体大小
- [ConvertKit](http://cssstats.com/stats?link=https%3A%2F%2Fgist.githubusercontent.com%2Fadamwathan%2F4ca6aafc50342ad87a98970204053b71%2Fraw%2Fbb42e4fda01d9933afff7225b33e77dbfbd559ff%2Fconvertkit.css)：128种文本颜色，124种背景颜色，70种字体大小



这是因为你写的每一个新的 CSS 块都是一个空白的画布；没有什么能阻止你使用任何你想要的值。


你可以尝试通过变量或混搭来加强一致性，**但每一行新的 CSS 仍然是一个新的复杂性的机会**；添加更多的 CSS 永远不会使你的 CSS 更简单。


如果相反，解决风格化的东西是应用现有的类，那么突然间那个空白画布的问题就消失了。


想把一些深色的文字静音一下？添加 .text-dark-soft 类。


需要让字体大小小一点？使用 .text-sm 类。


当项目中的每个人都从一组有限的选项中选择自己的样式时，你的 CSS 就不会再随着项目的大小而线性增长了，你可以免费获得一致性。


### 你仍然应该创建组件

我的观点与一些真正死忠的功能类 CSS 倡导者有些不同，其中一个方面是我认为你不应该只用功能类来构建东西。


如果你看看一些流行的基于功能类的框架，比如 [Tachyons](http://tachyons.io/)（这是一个很棒的项目），你会发现他们甚至用纯功能类来创建按钮样式。


```html
<button class="f6 br3 ph3 pv2 white bg-purple hover-bg-light-purple">
  Button Text
</button>
```


让我来分析一下这个问题：


- f6：使用字体大小标尺中的第六个字体大小（在 Tachyons 中为0.875rem）
- br3：使用半径标尺中的第三条边框半径（.5rem），使用半径标尺中的第三条边框半径（.5rem）
- ph3：使用padding标尺中的第三种尺寸作为水平 padding（1rem）
- pv2: 使用衬垫尺度中的第二个尺寸作为垂直衬垫(.5rem)
- white：使用白色文字
- bg-purple：使用紫色背景
- hover-bg-light-purple：悬停时使用浅紫色背景



如果你需要多个按钮有这种相同的类组合，推荐使用 Tachyons 的方法，通过模板而不是通过 CSS 创建一个抽象。


例如，如果你使用的是 [Vue.js](https://vuejs.org)，你可以创建一个像这样的组件。


```html
<ui-button color="purple">Save</ui-button>
```


...并定义如下：
```vue
<template>
  <button class="f6 br3 ph3 pv2" :class="colorClasses">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['color'],
  computed: {
    colorClasses() {
      return {
        purple: 'white bg-purple hover-bg-light-purple',
        lightGray: 'mid-gray bg-light-gray hover-bg-light-silver',
        // ...
      }[this.color]
    }
  }
}
</script>
```


对于很多项目来说，这是一个很好的方法，但我仍然认为在很多情况下，**创建一个 CSS 组件比创建一个基于模板的组件更实用。**


对于我所做的项目来说，创建一个新的 .btn-purple 类来捆绑这7个功能类，通常比将网站上的每个小部件模板化要简单得多。


### ......但先用功能类来构建它们吧


我之所以把我对 CSS 采取的方法称为功能类优先，是因为我试图从功能类中构建一切可以构建的东西，并且**只在出现重复的模式时提取它们。**


如果你使用 [Less](http://lesscss.org/) 作为你的预处理器，你可以使用现有的类作为 mixins。这意味着，创建这个 .btn-purple 组件只需要在你的编辑器中使用一点多光标向导。


![29084097-f16c97c6-7c38-11e7-92dd-d20c1364d869.gif](https://user-images.githubusercontent.com/4323180/29084097-f16c97c6-7c38-11e7-92dd-d20c1364d869.gif)


不幸的是，在 Sass 或 Stylus 中，如果不为每个功能类创建一个单独的 mixin，你就无法做到这一点，所以在那里要多做一些工作。


当然，组件中的每一个声明并不总是可能来自一个功能类。元素之间复杂的交互，比如当悬停在父元素上时改变子元素的属性，只用功能类很难做到，所以用你最好的判断，做任何感觉更简单的事情。


### 不再过早的抽象化

在 CSS 中采用组件优先的方法意味着你要为一些东西创建组件，即使它们永远不会被重复使用。这种过早的抽象是导致样式表臃肿和复杂的根源。


以导航条为例，在你的应用中，你为主导航重写了多少次 HTML ？


在我的项目中，我通常只做一次，在我的主布局文件中。


如果你先用功能类构建东西，并且只在看到令人担忧的重复时才提取组件，**你可能永远不需要提取导航条组件**。


相反，你的导航条可能看起来像这样。


```html
<nav class="bg-brand py-4 flex-spaced">
  <div><!-- Logo goes here --></div>
  <div>
    <!-- Menu items go here -->
  </div>
</nav>
```


只是那里没有什么值得提取的东西。


## 这不就是内联样式吗？

我们很容易看到这种方法，并认为它就像在你的 HTML 元素上扔上样式标签，然后添加任何你需要的属性一样，但根据我的经验，它是非常不同的。


使用内联样式，你选择什么值没有任何限制。


一个标签可以是 font-size: 14px，另一个可以是 font-size: 13px，另一个可以是 font-size: .9em，还有一个可以是 font-size: .85rem。


**当你为每一个新的组件编写新的 CSS 时，你也会面临同样的空白画布问题。**


功能类迫使你选择。


这是 text-sm 还是 text-xs？


我应该使用 py-3 还是 py-4？


我是想要 text-dark-soft 还是 text-dark-faint？


你不能随便选择任何想要的值；你必须从一个精选的列表中选择。


与其说是380种文本颜色，不如说是10或12种。


我的经验是，与组件优先相比，以功能类为先的方式构建事物会带来更一致的外观设计，尽管一开始听起来可能并不直观。


## 从哪里开始呢？


如果你对这种方法感兴趣，这里有几个框架值得一试：


- [Tachyons](http://tachyons.io/)
- [Basscss](http://basscss.com/)
- [Beard](http://buildwithbeard.com/)
- [turretcss](http://turretcss.com/)



最近，我还发布了自己的免费开源 PostCSS 框架，名为 Tailwind CSS，它是围绕着这种功能类优先的理念设计的，并从重复的模式中提取组件。


如果你对此感兴趣，可以去 [Tailwind CSS](https://docs.tailwindchina.com/) 网站了解一下。


