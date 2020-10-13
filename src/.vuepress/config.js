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
  description: "架构师",
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
    editLinks: false,
    editLinkText: '在 GitHub 编辑此页',
    displayAllHeaders: true,
    smoothScroll: true,
    search: false,
    sidebarDepth: 0,
    lastUpdated: false,
    // lastUpdated: '最后更新时间',
    nav: [
      {
        text: 'Java',
        link: '/java/',
      },
      {
        text: '常用框架',
        items: [
          { text: 'Spring', link: '/framework/spring/' },
          { text: 'Mybatis', link: '/framework/mybatis/' },
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
              },
              {
                text: '服务网格',
                link: '/distributed/servicemesh/'
              },
              {
                text: '消息队列',
                link: '/distributed/mq/'
              }
            ],
          },
        ]
      },
      {
        text: '云原生',
        items: [
          { text: 'Docker容器', link: '/cloud/docker/' },
          { text: 'Kubernetes', link: '/cloud/k8s/' },
        ]
      },
      {
        text: '服务器',
        items: [
          { text: 'Linux', link: '/linux/' },
          { text: '缓存', link: '/cache/' },
          { text: '数据库', link: '/db/' },
          { text: '计算机系统', link: '/cs/' },
        ]
      },
      {
        text: '编码实践',
        items: [
          { text: '算法/数据结构', link: '/algorithm/' },
          { text: '设计模式', link: '/patterns/' },
          { text: '面试', link: '/job/' },
        ]
      },
    ],
    sidebar: {
      '/java/': [{
        title: '基础内容',
        children: [
          'base/object',
          'base/关键字',
          'base/数据类型',
          'base/lambda',
          'base/io',
          // 'base/nio',
          'base/代理',
          'base/函数式接口',
          'base/反射',
          'base/String',
          'base/Reference',
        ]
      },
      {
        title: '集合',
        children: [
          "collection/Collection",
          "collection/List",
          "collection/Map",
        ]
      },
      {
        title: '高并发',
        children: [
          'hc/高并发',
          'hc/多线程',
          'hc/并发编程的艺术',
          'hc/内存模型',
          'hc/原子类',
          'hc/并发容器',
          'hc/并发工具类',
          'hc/线程池',
          'hc/锁',
        ]
      },
      {
        title: 'JVM',
        children: [
          'jvm/对象创建过程',
          'jvm/对象回收机制',
          'jvm/jvm参数',
          'jvm/jvm内存模型',
          'jvm/内存优化',
          'jvm/垃圾收集器',
        ]
      }],
      '/linux/': [
        {
          title: 'Linux',
          children: [
            'command/常用命令',
            'command/lvm',
          ]
        },
        {
          title: 'Shell编程',
          children: [
            'shell/Shell',
          ]
        },
        {
          title: '内核',
          children: [
            'kernel/',
          ]
        },
      ],
      '/cloud/docker/': [
        {
          title: '基础篇',
          children: [
            'base/镜像',
            'base/Dockerfile',
            'base/Compose',
            'base/YAML',
          ]
        },
        {
          title: '实战篇',
          children: [
          ]
        }
      ],
      '/cloud/k8s/': [
        {
          title: 'Kubernetes',
          children: [
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
            'redis/复制',
            'redis/集群',
            'redis/Sentinel',
            'redis/常见问题',
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
            'spring/IOC',
            'spring/AOP',
            'spring/core',
            'spring/事务管理',
            'spring/BeanFactory',
            'spring/BeanDefinition',
            'spring/spring启动流程',
            'spring/问题',
          ]
        },
        {
          title: 'Spring MVC',
          children: [
            'springmvc/简介',
            'springmvc/核心组件',
            'springmvc/Servlet',
            'springmvc/Session',
            'springmvc/DispatcherServlet',
            'springmvc/RequestMapping',
          ]
        },
        {
          title: 'Spring Boot',
          children: [
            'springboot/简介',
            'springboot/起步依赖',
            'springboot/自动配置',
            'springboot/系统指标监控',
            'springboot/spi',
            'springboot/springboot启动',
            'springboot/常用注解',
            'springboot/基本特性',
          ]
        },
      ],
      '/framework/mybatis/': [
        {
          title: 'Mybatis',
          children: [
            'mybatis/入门',
            'mybatis/配置',
            'mybatis/核心组件',
            'mybatis/映射器',
            'mybatis/动态 SQL',
            'mybatis/Cache',
            'mybatis/插件',
            'mybatis/代码生成器',
            'mybatis/springboot_mybatis',
          ]
        },
        {
          title: 'Mybatis Plus',
          children: [
            'mybatisplus/',
          ]
        }
      ],
      '/distributed/tranctional/': [
        {
          title: '事务',
          children: [
          ]
        },
        {
          title: 'Redis事务',
          children: [
          ]
        },
        {
          title: 'Mysql事务',
          children: [
          ]
        },
        {
          title: 'Spring事务',
          children: [
          ]
        },
        {
          title: 'seata',
          children: [
            'seata/介绍'
          ]
        },
      ],
      '/distributed/springcloud/': [
        {
          title: '分布式消息',
          children: [
          ]
        },
        {
          title: '服务调用',
          children: [
          ]
        },
        {
          title: '服务注册和发现',
          children: [
          ]
        },
        {
          title: '配置中心',
          children: [
          ]
        },
        {
          title: '网关/路由',
          children: [
          ]
        },
      ],
      '/distributed/k8s/': [
        {
          title: 'K8S',
          children: [
          ]
        }
      ],
      '/distributed/servicemesh/': [
        {
          title: '服务网格',
          children: [
          ]
        }
      ],
      '/cs/': [
        {
          title: '网络协议',
          children: [
            'network/tcpip',
            'network/http',
          ]
        },
        {
          title: '操作系统原理',
          children: [
          ]
        }
      ],
      '/distributed/mq/': [
        {
          title: 'Redis的队列',
          children: [
          ]
        },
        {
          title: 'RabbitMQ',
          children: [
          ]
        },
        {
          title: 'Kafka',
          children: [
          ]
        },
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
          title: '数据结构',
          children: [
            'structure/tree/树',
            'structure/queue/队列',
          ]
        },
        {
          title: 'leetcode',
          children: [
            'leetcode/',
          ]
        }
      ],
      '/patterns/': [
        {
          title: '设计模式',
          children: [
            'other/设计模式原则',
          ]
        },
        {
          title: '创建型模式',
          children: [
            'build/单利模式',
            'build/工厂模式',
            'build/建造者模式',
            'build/原型模式',
          ]
        },
        {
          title: '结构型模式',
          children: [
            'structured/亨元模式',
            'structured/代理模式',
            'structured/外观模式',
            'structured/桥接模式',
            'structured/组合模式',
            'structured/装饰模式',
            'structured/适配器模式',
          ]
        },
        {
          title: '行为型模式',
          children: [
            'behavior/中介者模式',
            'behavior/命令模式',
            'behavior/备忘录模式',
            'behavior/模板方法模式',
            'behavior/状态模式',
            'behavior/策略模式',
            'behavior/职责链模式',
            'behavior/观察者模式',
            'behavior/解释器模式',
            'behavior/访问者模式',
            'behavior/迭代器模式',
          ]
        },
      ],
      '/job/': [
        {
          title: 'Java开发',
          children: [
            'java',
            'jvm',
            'mybatis',
            'mysql',
            'redis',
            'rabbitmq',
            'spring',
            'linux',
            '网络协议',
            '分布式',
            '算法',
            '服务器',
          ]
        },
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    // '@vuepress/last-updated',
    // {
    //   transformer: (timestamp, lang) => {
    //     moment.locale('zh-CN')
    //     return moment(timestamp).format('lll');
    //   }
    // },
  ],
  markdown: {
    extendMarkdown: md => {
    }
  }
}
