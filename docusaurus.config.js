// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Konspot Documentation",
  tagline: "Meet, record & track online business conversations",
  url: "https://docs.konspot.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Konspot", // Usually your GitHub org/user name.
  projectName: "konspot", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          sidebarCollapsible: false,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "",
        logo: {
          alt: "Konspot",
          src: "https://demo.konspot.com/manage/images/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          {
            to: "api-reference/integration",
            label: "API Reference",
            position: "left",
          },
          {
            href: "https://github.com/konspot/documentation",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://documenter.getpostman.com/view/23637706/2s83tCKYin",
            label: "Postman Collection",
            position: "right",
            className: "button button--primary _knspt-btn",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/",
              },
              {
                label: "API Reference",
                to: "api-reference/integration",
              },
            ],
          },
          {
            title: "Contact",
            items: [
              {
                label: "Linkedin",
                href: "https://linkedin.com/company/konspot",
              },
              {
                label: "Contact Us",
                href: "https://konspot.com/contact-us/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Privacy Policy",
                href: "https://konspot.com/privacy-policy/",
              },
              {
                label: "Terms & Conditions",
                href: "https://konspot.com/terms-and-conditions/",
              },
            ],
          },
          // {
          //   html: `
          //       <a href="https://www.konspot.com" target="_blank" rel="noreferrer noopener" aria-label="Konspot">
          //         <img src="https://demo.konspot.com/manage/images/logo.png" width="250px" alt="Konspot" />
          //       </a>
          //     `,
          // },
        ],

        copyright: `Copyright © ${new Date().getFullYear()} Konspot. All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
