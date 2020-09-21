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
    editLinkText: '在 GitHub 编辑此页',
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
          { text: 'Spring', link: '/framework/spring/' },
          { text: 'Spring MVC', link: '/framework/springmvc/' },
          { text: 'Spring Boot', link: '/framework/springboot/' },
          { text: 'Mybatis', link: '/framework/mybatis/' },
          { text: 'Mybatis Plus', link: '/framework/mybatis-plus/' },
        ]
      },
      {
        text: '分布式/架构',
        items: [
          {
            text: '架构师之路',
            items: [
              {
                text: '架构设计',
                link: '/architecture/'
              },
              {
                text: '开发模式',
                link: '/dev'
              },
              {
                text: '集群',
                link: '/cluster'
              }
            ]
          },
          {
            text: '分布式',
            items: [
              {
                text: '事务',
                link: '/distributed/tranctional/'
              },
              {
                text: 'SpringCloud',
                link: '/distributed/springcloud/'
              }
            ],
          },
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
          { text: '算法/数据结构', link: '/algorithm/' },
          { text: '设计模式', link: '/patterns/' },
        ]
      },
    ],
    sidebar: {
      '/java/': [{
        title: '基础内容',
        children: [
          'base/object',
          'base/lambda',
          'base/io',
          'base/nio',
          'base/代理',
          'base/函数式接口',
        ]
      },
      {
        title: '集合',
        children: [
        ]
      },
      {
        title: '高并发',
        children: [
          'hc/多线程',
          'hc/并发编程的艺术',
          'hc/高并发',
        ]
      },
      {
        title: 'JVM',
        children: [
          'jvm/对象创建过程',
          'jvm/对象回收机制',
          'jvm/jvm参数',
        ]
      }],
      '/linux/': [
        {
          title: '常用命令',
          children: [
            'command/crontab',
            'command/Linux',
            'command/linux常用命令',
            'command/常用命令',
            'command/ubuntu',
            'command/lvm',
          ]
        },
        {
          title: 'Shell脚本',
          children: [
            'shell/',
          ]
        },
        {
          title: '内核',
          children: [
            'kernel/',
          ]
        }
      ],
      '/db/': [
        {
          title: 'SQL',
          children: [
            'sql/',
          ]
        },
        {
          title: 'Mysql',
          children: [
            'mysql/mysql',
            'mysql/数据类型',
            'mysql/数据库索引',
            'mysql/InnoDB',
            'mysql/复制',
            'mysql/性能优化',
          ]
        },
      ],
      '/cache/': [
        {
          title: 'Redis',
          children: [
            'redis/概述',
            'redis/数据类型',
            'redis/数据结构',
            'redis/持久化',
            'redis/事件',
            'redis/事务',
            'redis/Sentinel',
          ]
        },
        {
          title: 'Redisson',
          children: [
            'redisson/',
          ]
        }
      ],
      '/framework/spring/': [
        {
          title: 'Spring',
          children: [
            'aop',
            'core',
            'overview',
            'spring源码分析',
            'spring源码编译',
            '事务管理',
          ]
        }
      ],
      '/framework/springboot/': [
        {
          title: 'spring',
          children: [
            '',
          ]
        }
      ],
      '/framework/mybatis/': [
        {
          title: 'spring',
          children: [
            '',
          ]
        }
      ],
      '/framework/mybatis-plus/': [
        {
          title: 'spring',
          children: [
            '',
          ]
        }
      ],
      '/framework/springmvc/': [
        {
          title: 'spring',
          children: [
            '',
          ]
        }
      ],
      '/architecture/': [
        {
          title: '基础理论',
          children: [
            '',
          ]
        }
      ],
      '/algorithm/': [
        {
          title: '算法',
          children: [
            'algorithm/',
          ]
        },
        {
          title: 'leetcode',
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
