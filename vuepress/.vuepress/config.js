module.exports = {
    title: 'TailWindCSS 中文网',
    description: 'TailwindCSS 使用教程、TailwindCSS 中文文档及 TailwindCSS 相关资源',
    head: [
        ['meta', {name: 'keywords', content: 'TailwindCSS中文网, TailwindCCSS中文文档, TailwindCCSS文档, TailwindCSS中国, TailwindCSS教程'}],
    ],
    dest: './docs',
    themeConfig: {
        nav: [
            { text: '网站首页', link: '/' },
            { text: '使用教程', link: '/guides/' },
            { text: '中文文档', link: 'http://docs.tailwindchina.com' },
            { text: '相关资源', link: '/resources/' },
            { text: '交流社群', link: '/discussions/' },
            { text: '英文网站', link: 'https://tailwindcss.com/' },
            { text: 'GitHub', link: 'https://github.com/tailwindchina/tailwindchina.com' }
        ]
    },
    plugins: [
        [
          '@vuepress/google-analytics',
          {
            'ga': 'G-F7SM6GQ27L'
          }
        ]
    ]
}