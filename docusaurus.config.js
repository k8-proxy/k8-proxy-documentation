module.exports = {
  title: "Documentation",
  tagline: "",
  url: "https://k8-proxy.github.io",
  baseUrl: "/EAP-documentation/",
  favicon: "img/favicon.ico",
  organizationName: "k8-proxy", // Usually your GitHub org/user name.
  projectName: "k8-proxy-documentation", // Usually your repo name.
  onBrokenLinks: 'log',
  themeConfig: {
    algolia: {
      apiKey: '01c9e72fccaff68d7ef9b3424acb7b37',
      indexName: 'k8-proxy'    
    },
    navbar: {
      title: "Documentation",
      logo: {
        alt: "Glasswall Logo",
        src: "img/glasswall_logo_blue.png"
      },
      items: [
            
        {
          href: "https://github.com/k8-proxy",
          label: "GitHub",
          position: "right",
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
              label: "Getting Started",
              to: "docs/products",
            },
          ],
        },       
      
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Glasswall Solutions Ltd. Built with Docusaurus.`,
    },
    gtag: {
      trackingID: 'UA-165717322-1'
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.auto.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-auto-sidebars',    
  ],
};
