module.exports = {
  title: "K8 Proxy Documentation",
  tagline: "",
  url: "https://k8-proxy.github.io",
  baseUrl: "/k8-proxy-documentation/",
  favicon: "img/favicon.ico",
  organizationName: "k8-proxy", // Usually your GitHub org/user name.
  projectName: "k8-proxy-documentation", // Usually your repo name.
  onBrokenLinks: 'log',
  themeConfig: {
    navbar: {
      title: "K8 Proxy Documentation",
      logo: {
        alt: "Glasswall Logo",
        src: "img/glasswall_logo_blue.png"
      },
      items: [
        {
          to: "docs/dashboards/websites/production",
          activeBasePath: "docs",
          label: "Documentation",
          position: "left",
        },       
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
              to: "docs/dashboards/websites/production",
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
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
