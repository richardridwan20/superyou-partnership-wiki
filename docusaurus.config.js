const dotenv = require('dotenv');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

dotenv.config();

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Superyou Wiki',
  tagline: 'Guidelines for Superyou',
  url: process.env.WIKI_URL,
  baseUrl: process.env.WIKI_BASE_URL,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  organizationName: process.env.ORGANIZATION_NAME, // Usually your GitHub org/user name.
  projectName: process.env.PROJECT_NAME, // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Superyou Wiki',
      logo: {
        alt: 'Superyou Logo',
        src: 'img/superyou-logo-color.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'integration',
          position: 'left',
          label: 'Integration',
        },
        {
          to: '/blog', 
          label: 'Blog', 
          position: 'left'
        },
        {
          href: process.env.WIKI_GITHUB_URL,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Integration',
              to: '/docs/integration',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: process.env.WIKI_GITHUB_URL,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Superyou. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ]
};
