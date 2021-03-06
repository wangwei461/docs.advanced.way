module.exports = {
  title: '进阶之路',
  tagline: '',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'wangwei461', // Usually your GitHub org/user name.
  projectName: 'docs.advanced.way', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    liveCodeBlock: {
      playgroundPosition: 'bottom',
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    navbar: {
      hideOnScroll: true,
      title: '进阶之路',
      logo: {
        alt: '进阶之路 Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/java/',
          label: 'Java',
          position: 'left',
        },
        {
          label: '常用框架',
          position: 'left',
          items: [
            {
              label: '常用框架',
              to: 'docs/framework/spring/'
            },
            {
              label: 'Mybatis',
              to: 'docs/framework/mybatis/'
            },
            {
              label: '权限管理',
              to: 'docs/framework/auth/'
            }
          ]
        },
        {
          label: '中间件',
          position: 'left',
          items: [
            {
              label: '分布式',
              to: 'docs/framework/spring/'
            },
            {
              label: '事务',
              to: 'docs/framework/spring/'
            },
            {
              label: '服务网格',
              to: 'docs/framework/spring/'
            },
            {
              label: '消息队列',
              to: 'docs/framework/spring/'
            },
          ]
        },
        {
          label: '云原生',
          position: 'left',
          items: [
            {
              label: 'Docker容器',
              to: 'docs/framework/spring/'
            },
            {
              label: 'K8s',
              to: 'docs/framework/spring/'
            },
            {
              label: 'Serverless',
              to: 'docs/framework/spring/'
            },
          ]
        },
        {
          label: '服务器',
          position: 'left',
          items: [
            {
              label: 'Linux',
              to: 'docs/framework/spring/'
            },
            {
              label: '缓存',
              to: 'docs/framework/spring/'
            },
            {
              label: '数据库',
              to: 'docs/framework/spring/'
            },
            {
              label: '计算机系统',
              to: 'docs/framework/spring/'
            },
          ]
        },
        {
          label: '编码实践',
          position: 'left',
          items: [
            {
              label: '算法/数据结构',
              to: 'docs/algorithm/algorithm/'
            },
            {
              label: '设计模式',
              to: 'docs/framework/spring/'
            },
            {
              label: '架构设计',
              to: 'docs/framework/spring/'
            },
            {
              label: '面试',
              to: 'docs/framework/spring/'
            },
            {
              label: '备忘',
              to: 'docs/framework/spring/'
            },
          ]
        },
        {
          label: '小百科',
          position: 'left',
          items: [
            {
              label: '课堂笔记',
              to: 'docs/cyclopedia/chinese/notes/dingding/'
            },
            {
              label: '大中国',
              to: 'docs/cyclopedia/chinese/lan/idiom/'
            },
          ]
        },
        { to: 'blog', label: '博客', position: 'right' },
        {
          href: 'https://github.com/wangwei461/docs.advanced.way.git',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 进阶之路, Inc. Built with Docusaurus.`,
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
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          postsPerPage: 3,
          blogSidebarCount: 'ALL',
          // blogSidebarTitle: 'All our posts',
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
