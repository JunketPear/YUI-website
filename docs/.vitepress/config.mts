import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "YUI动漫社",
  description: "西北农林科技大学YUI动漫社官方网站",
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'stylesheet', href: '/style.css' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '活动展示', link: '/markdown-examples' },
      { text: '关于我们', link: '/api-examples' }
    ],

    sidebar: [
      {
        text: '社团介绍',
        items: [
          { text: '社团历史', link: '/markdown-examples' },
          { text: '成员介绍', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JunketPear/YUI-website/' }
    ],

    footer: {
      message: '西北农林科技大学YUI动漫社',
      copyright: 'Copyright © 2025 YUI动漫社'
    },

    outlineTitle: '页面导航',
    lastUpdatedText: '最后更新',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  },

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN'
    }
  }
})