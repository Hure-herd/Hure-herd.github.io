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
  tagline: 'A Carpet Mod extension for recall features',
  favicon: 'img/icon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://Hure-herd.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Hure-herd', // Usually your GitHub org/user name.
  projectName: 'REMS Carpet Addition', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en','zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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
        title: 'REMS Carpet Addition',
        logo: {
          alt: 'REMS Carpet Addition Logo',
          src: 'img/icon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documents',
          },
          { to: '/blog',
            label: 'Post',
            position: 'left'},
          {
            to: 'eol',
            position: 'left',
            label: 'EOL'
          },{
              type: "localeDropdown",
              position:"right",
          },
          {
            href: 'https://github.com/Hure-herd/REMS-Carpet-Addition',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Download',
            items: [
              {
                label: 'Github Releases',
                to: 'https://github.com/Hure-herd/REMS-Carpet-Addition/releases',
              },
              {
                label: 'Modrinth',
                to: 'https://modrinth.com/mod/rems-carpet-addition',
              },
            ],
          },
          {
            title: 'Link',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/Hure-herd/REMS-Carpet-Addition',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/MBEJatefbz',
              },
            ],
          },
          {
            title: 'Friend Projects',

            items: [
              {
                label: 'Crystal Carpet Addition',
                to: 'https://crystal0404.github.io/cca-doc/docs/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} REMS Server, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
