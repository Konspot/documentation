// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Konspot Documentation',
  tagline: 'Meet, record & track online business conversations',
  url: 'https://docs.konspot.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Konspot', // Usually your GitHub org/user name.
  projectName: 'konspot', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Konspot',
        logo: {
          alt: 'Konspot',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Docs',
          // },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/konspot/documentation',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://documenter.getpostman.com/view/23637706/2s83tCKYin',
            label: 'Postman Collection',
            position: 'right',
            className: 'button button--primary button--lg _knspt-btn'
          },
        ],
      },
      footer: {
        style: 'dark',
         links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   // {
        //   //   title: 'More',
        //   //   items: [
        //   //     {
        //   //       label: 'Blog',
        //   //       to: '/blog',
        //   //     },
        //   //     {
        //   //       label: 'GitHub',
        //   //       href: 'https://github.com/facebook/docusaurus',
        //   //     },
        //   //   ],
        //   // },
            {
            html: `
                <a href="https://www.konspot.com" target="_blank" rel="noreferrer noopener" aria-label="Konspot">
                  <img src="https://demo.konspot.com/manage/images/logo.png" width="250px" alt="Konspot" />
                </a>
              `,
            },
         ],
        
        copyright: `Copyright © ${new Date().getFullYear()} Konspot`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
