module.exports = {
    title: 'TailWindCSS 中文网',
    description: 'TailwindCSS 使用教程、TailwindCSS 中文文档及 TailwindCSS 相关资源',
    head: [
        ['meta', {name: 'keywords', content: 'TailwindCSS中文网, TailwindCSS中文文档, TailwindCSS文档, TailwindCSS中国, TailwindCSS教程'}],
        ['meta', {name: 'google-site-verification', content: 'K6lmDHP95YNtBrmzbE8A5HivIoXC9kPq47XvdBM3jVY'}],
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    dest: './docs',
    themeConfig: {
        nav: [
            { text: '网站首页', link: '/' },
            { text: '使用教程', link: '/guides/' },
            { text: '中文文档', link: 'http://docs.tailwindchina.com' },
            { text: '相关资源', link: '/resources/' },
            { text: '交流社群', link: '/discussions/' },
            { text: '关于我们', link: '/about' },
            { text: '英文网站', link: 'https://tailwindcss.com/' },
            { text: 'GitHub', link: 'https://github.com/tailwindchina/tailwindchina.com' }
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