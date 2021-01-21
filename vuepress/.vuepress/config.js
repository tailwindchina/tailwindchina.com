module.exports = {
    title: 'TailWindCSS 中文网',
    description: 'TailwindCSS 使用教程、TailwindCSS 中文文档及 TailwindCSS 相关资源',
    head: [
        ['meta', {name: 'keywords', content: 'TailwindCSS中文网, TailwindCSS中文文档, TailwindCSS文档, TailwindCSS中国, TailwindCSS教程'}],
        ['meta', {name: 'google-site-verification', content: 'K6lmDHP95YNtBrmzbE8A5HivIoXC9kPq47XvdBM3jVY'}],
        ['meta', {name: 'baidu-site-verification', content: 'code-V90DG5kO93'}],
        ['link', {rel: 'icon', href: '/logo.png'}]
    ],
    dest: './docs',
    themeConfig: {
        logo: '/logo.png',
        nav: [
            {text: '首页', link: '/'},
            {
                text: '学习',
                ariaLabel: '学习',
                items: [
                    {text: '使用教程', link: '/guides/'},
                    {text: '翻译文章', link: '/translations/'}
                ]
            },
            {
                text: '文档',
                ariaLabel: '文档',
                items: [
                    {text: '中文文档', link: 'http://docs.tailwindchina.com'},
                    {text: '英文文档', link: 'https://tailwindcss.com/'},
                ]
            },
            {
                text: '资源',
                ariaLabel: '资源',
                items: [
                    {text: '模板组件', link: '/resources/ui'},
                    {text: '工具', link: '/resources/tools'},
                    {text: 'CDN', link: '/resources/cdn'},
                ]
            },
            {text: '社群', link: '/discussions/'},
            {text: '关于我们', link: '/about'},
            {text: 'GitHub', link: 'https://github.com/tailwindchina/tailwindchina.com'}
        ],
        lastUpdated: true,
        smoothScroll: true,
    },
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': 'G-F7SM6GQ27L'
            }
        ],
        [
            'vuepress-plugin-sitemap',
            {
                'hostname': 'https://tailwindchina.com'
            }
        ],
        ['@vuepress/back-to-top'],
    ]
}