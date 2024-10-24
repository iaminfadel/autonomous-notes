// docusaurus.config.js
const config = {
  title: 'Autonomous Systems & Robotics',
  tagline: 'Resources and Notes',
  url: 'https://your-domain.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'iaminfadel',
  projectName: 'robotics-course',

  // Remove duplicate theme declaration and only use it in preset
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/iaminfadel/robotics-course/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    // Color mode config
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    // Navbar configuration
    navbar: {
      title: 'Autonomous Systems',
      logo: {
        alt: 'Course Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Notes',
        },
        {
          type: 'doc',
          docId: 'resources',
          position: 'left',
          label: 'Resources',
        },
        {
          href: 'https://github.com/iaminfadel',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Content',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Resources',
              to: '/docs/resources',
            },
          ],
        },

      ],
      copyright: `Copyright © ${new Date().getFullYear()}`,
    },
    // Algolia DocSearch Configuration
    algolia: {
      // Replace with your own values
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_SEARCH_API_KEY',
      indexName: 'YOUR_INDEX_NAME',
    },
    // Sidebar configuration
    sidebar: {
      hideable: true,
      autoCollapseCategories: true,
    },
  },
};

module.exports = config;