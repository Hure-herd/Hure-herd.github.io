import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

const commonSidebarConfig = {
    documentRootPath: '.',
    useTitleFromFrontmatter: true,
    useTitleFromFileHeading: true,
    collapsed: false,
    sortMenusByFrontmatterOrder: true
}

export default defineConfig({
  title: "Hureherd Blog",
  description: "Minecraft Mod开发与技术笔记",
  head: [
      ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
        {
            text: '文章分类',
            items: [
                { text: 'Minecraft Mod开发', link: '/posts/mc/' },
                { text: '生活随笔', link: '/posts/life/' }
            ]
        },
      { text: '关于作者', link: '/about' }
    ],

     sidebar: generateSidebar([
         {
             ...commonSidebarConfig,
             scanStartPath: 'posts/mc',
             resolvePath: '/posts/mc/',
         },
         {
             ...commonSidebarConfig,
             scanStartPath: 'posts/life',
             resolvePath: '/posts/life/',
         }
     ]),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hure-herd' }
    ]
  }
})
