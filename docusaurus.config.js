// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rancher Manager Docs',
  tagline: 'Rancher Manager Docs',
  url: 'https://rancher.com/docs/rancher/v2.6/en/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'rancher/rancher', // Usually your GitHub org/user name.
  projectName: 'rancher/docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/rancher/docs/edit/master',
        },
        blog: false,
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
        logo: {
          alt: 'Rancher Manager Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://rancher.com/docs/rancher/v2.6/en/',
            label: 'Rancher Manager Home',
            target: '_self',
            position: 'right',
          },
          {
            href: 'https://github.com/rancher/docs/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} SUSE. Rancher Desktop is an open source project of the SUSE Rancher Engineering group. This docs site is built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
      [require.resolve('docusaurus-lunr-search'),
          {
              indexBaseUrl: true
          }
      ]
    ],
};

module.exports = config;
