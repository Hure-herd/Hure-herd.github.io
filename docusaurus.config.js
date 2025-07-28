// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'REMS Carpet Addition',
  tagline: '',
  favicon: 'img/icon.png',

  // Set the production url of your site here
  url: 'https://Hure-herd.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Hureherd', // Usually your GitHub org/user name.
  projectName: 'Rems-Carpet', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js'
        },
        blog: {
          blogTitle: '文章',
          blogDescription: 'Hello World!'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/icon.png',
      navbar: {
        title: 'REMS-Carpet-Addition',
        logo: {
          alt: 'REMS-Carpet-Addition Logo',
          src: 'img/icon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
          { to: '/blog',
            position: 'left',
            label: '文章'
          },
          {
            type: 'localeDropdown',
            position: 'right'
          },
          {
            to: 'eol',
            position: 'left',
            label: '生命周期终点'
          },
          {
            href: 'https://github.com/Hure-herd/REMS-Carpet-Addition',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '模组下载',
            items: [
              {
                label: 'Modrinth',
                to: 'https://modrinth.com/mod/rems-carpet-addition',
              },
              {
                label: 'Github',
                to: 'https://github.com/Hure-herd/REMS-Carpet-Addition/releases',
              }
            ],
          },
          {
            title: '相关项目',
            items: [
              {
                label: 'Fabric Carpet',
                to: 'https://github.com/gnembon/fabric-carpet',
              },
              {
                label: 'Docusaurus',
                to: 'https://docusaurus.io/',
              }
            ],
          },
          {
            title: '网站源码',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Hure-herd/Hure-herd.github.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hureherd, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
