---
sidebar: auto
---

# 在 TailwindCSS 中自定义动画

原文作者：Tony Lea

原文链接：[https://devdojo.com/tnylea/custom-animations-in-tailwindcss](https://devdojo.com/tnylea/custom-animations-in-tailwindcss)

![image.png](https://cdn.devdojo.com/posts/images/January2021/custom-animations-in-tailwindcss1.jpg?auto=format&q=70&w=680)

Tailwind 提供了一些简单的开箱即用的动画。如果您不熟悉这些动画，请查看我关于 [TailwindCSS 动画](https://devdojo.com/tnylea/tailwindcss-animations)的文章。

这些简单的动画非常酷，然而，我们可能想在我们的网站和应用程序中添加一些自定义动画。这很简单😉，让我们来了解一下如何实现。
## 摆动动画
在 Tailwind 文档中，他们向我们展示了如何通过添加以下关键帧和动画属性到我们的 Tailwind 配置中来应用一个简单的摆动动画。
```javascript
module.exports = {
    theme: {
        extend: {
            keyframes: {
                wiggle: {
                    '0%, 100%': {
                        transform: 'rotate(-3deg)'
                    },
                    '50%': {
                        transform: 'rotate(3deg)'
                    },
                }
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
            }
        },
    },
    variants: {},
    plugins: [],
}
```
然后，我们可以在页面中添加以下 HTML，并在元素中添加 `animate-wiggle` 类。
```html
<div class="flex justify-center items-center h-screen w-screen">
  <div class="w-10 h-10 bg-black animate-wiggle"></div>
</div>
```
于是我们会看到下面的动画。
![wiggle.gif](https://cdn.devdojo.com/images/january2021/wiggle.gif)
你可以在这里查看动画的现场演示：[https://play.tailwindcss.com/9imEThVLFd](https://play.tailwindcss.com/9imEThVLFd)。


很酷，对吗？让我们看看如何应用一些其他的自定义动画到 Tailwind 中。
## 淡入淡出动画
我们可以使用与摆动动画相同的技术，并应用许多其他类型的动画，如淡入淡出动画。
```javascript
module.exports = {
    theme: {
        extend: {
            keyframes: {
                'fade-in-down': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                }
            },
            animation: {
                'fade-in-down': 'fade-in-down 0.5s ease-out'
            }
        },
    },
    variants: {},
    plugins: [],
}
```
如果我们在页面中添加以下HTML：
```html
<div class="flex justify-center items-center w-screen h-screen">
    <div class="w-10 h-10 bg-black animate-fade-in-down"></div>
</div>
```
我们将最终得到以下动画：
![fade-in-down.gif](https://cdn.devdojo.com/images/january2021/fade-in-down.gif)
你可以在这里观看这个动画的现场演示：[https://play.tailwindcss.com/YE27rVbPCd](https://play.tailwindcss.com/YE27rVbPCd)。


看，动画的创建很简单。接下来，我们可以应用这个同样的示例动画来淡出一个元素并改变方向。


## 更多的动画
在上一步的 `fade-in-down` 动画的基础上，我们还可以添加 `fade-out-down`、`fade-in-up` 或 `fade-out-up` 的功能。


下面是一个例子，将所有这些动画添加到我们的 Tailwind 配置中：
```javascript
module.exports = {
    theme: {
        extend: {
            keyframes: {
                'fade-in-down': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
                'fade-out-down': {
                    'from': {
                        opacity: '1',
                        transform: 'translateY(0px)'
                    },
                    'to': {
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                },
                'fade-in-up': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
                'fade-out-up': {
                    'from': {
                        opacity: '1',
                        transform: 'translateY(0px)'
                    },
                    'to': {
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                }
            },
            animation: {
                'fade-in-down': 'fade-in-down 0.5s ease-out',
                'fade-out-down': 'fade-out-down 0.5s ease-out',
                'fade-in-up': 'fade-in-up 0.5s ease-out',
                'fade-out-up': 'fade-out-up 0.5s ease-out'
            }
        },
    },
    variants: {},
    plugins: [],
}
```
如果我们将这些动画类应用到我们的元素中，就像这样：
```http
<div class="flex justify-center items-center w-screen h-screen space-x-2">
    <div class="w-10 h-10 bg-black animate-fade-in-down"></div>
    <div class="w-10 h-10 bg-black animate-fade-out-down"></div>
    <div class="w-10 h-10 bg-black animate-fade-in-up"></div>
    <div class="w-10 h-10 bg-black animate-fade-out-up"></div>
</div>
```
我们最终的动画会是这样的：
![animations-all.gif](https://cdn.devdojo.com/images/january2021/animations-all.gif)
您可以访问[https://play.tailwindcss.com/YeZIs0aejf](https://play.tailwindcss.com/YeZIs0aejf)，查看这些动画的现场演示。


现在，我们的元素正在淡入、淡出、逐渐上升和逐渐下降。
## 结束语
我们可以将任何类型的动画应用到 Tailwind，我们可以通过把任何响应式功能或悬停状态与我们的动画一起使用。


所以，去吧! 令人敬畏。创造。并制作动画🤓！
