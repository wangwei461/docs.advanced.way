const { description } = require('../../package')
const moment = require('moment');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '进阶之路',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "进阶之路",
  port: 3000,
  dest: "dist",
  base: '/docs.advanced.way/',
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/wangwei461/docs.advanced.way.git',
    editLinks: true,
    docsDir: 'src',
    editLinkText: '在 GitHub 编辑此页',
    navbar: true,
    displayAllHeaders: true,
    smoothScroll: true,
    search: true,
    sidebarDepth: 0,
    lastUpdated: true,
    lastUpdated: '最后更新时间',
    nav: [
      {
        text: 'Java',
        link: '/java/',
      },
      {
        text: '框架',
        items: [
          { text: 'Spring', link: '/framwork/spring/' },
          { text: 'Spring-mvc', link: '/framwork/springmvc/' },
          { text: 'SpringBoot', link: '/framwork/springboot/' },
          { text: 'Mybatis', link: '/framwork/mybatis/' },
          { text: 'Mybatis-plus', link: '/framwork/mybatis-plus/' },
        ]
      },
      {
        text: '分布式/架构',
        items: [
          { text: '架构设计', link: '/architecture/' },
          { text: 'SpringCloud', link: '/distributed/springcloud/' },
        ]
      },
      {
        text: '服务器',
        items: [
          { text: 'Linux', link: '/linux/' },
          { text: '缓存', link: '/cache/' },
          { text: '数据库', link: '/db/' },
        ]
      },
      {
        text: '编码实践',
        items: [
          { text: '算法', link: '/algorithm/' },
          { text: '设计模式', link: '/patterns/' },
        ]
      },
    ],
    sidebar: {
      '/java/': [{
        title: '基础内容',
        collapsable: true,
        children: [
          'base/object',
          'base/io',
        ]
      },
      {
        title: '集合',
        collapsable: true,
        children: [
          'hc/thread',
        ]
      },
      {
        title: '高并发',
        collapsable: true,
        children: [
          'hc/thread',
        ]
      },
      {
        title: 'JVM',
        collapsable: true,
        children: [
          'jvm/class',
        ]
      }],
      '/linux/': [
        {
          title: '常用命令',
          collapsable: true,
          children: [
            'command/',
          ]
        },
        {
          title: 'Shell脚本',
          collapsable: true,
          children: [
            'shell/',
          ]
        },
        {
          title: '内核',
          collapsable: true,
          children: [
            'kernel/',
          ]
        }
      ],
      '/db/': [
        {
          title: 'SQL',
          collapsable: true,
          children: [
            'sql/',
          ]
        },
      ],
      '/cache/': [
        {
          title: 'Redis',
          collapsable: true,
          children: [
            'redis/',
          ]
        },
        {
          title: 'Redisson',
          collapsable: true,
          children: [
            'redisson/',
          ]
        }
      ],
      '/framwork/spring/': [
        {
          title: 'spring',
          collapsable: true,
          children: [
            '',
          ]
        }
      ],
      '/framwork/springboot/': [
        {
          title: 'spring',
          collapsable: true,
          children: [
            '',
          ]
        }
      ],
      '/framwork/mybatis/': [
        {
          title: 'spring',
          collapsable: true,
          children: [
            '',
          ]
        }
      ],
      '/framwork/mybatis-plus/': [
        {
          title: 'spring',
          collapsable: true,
          children: [
            '',
          ]
        }
      ],
      '/framwork/springmvc/': [
        {
          title: 'spring',
          collapsable: true,
          children: [
            '',
          ]
        }
      ],
      '/architecture/': [
        {
          title: '基础理论',
          collapsable: true,
          children: [
            '',
          ]
        }
      ],
      '/algorithm/': [
        {
          title: '算法',
          collapsable: true,
          children: [
            'algorithm/',
          ]
        },
        {
          title: 'leetcode',
          collapsable: true,
          children: [
            'leetcode/',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/last-updated',
    {
      transformer: (timestamp, lang) => {
        moment.locale('zh-CN')
        return moment(timestamp).format('lll');
      }
    },
  ],
  markdown: {
    extendMarkdown: md => {
    }
  }
}
