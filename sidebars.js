module.exports = {
  java: {
    基础: [
      'java/README',
      'java/base/base64',
      'java/base/io',
      'java/base/nio',
      'java/base/object',
      'java/base/String',
      'java/base/Reference',
      'java/base/代理',
      'java/base/关键字',
      'java/base/函数式接口',
      'java/base/反射',
      'java/base/数据类型',
    ],
    集合: [
      'java/collection/Collection',
      'java/collection/List',
      'java/collection/Map',
    ],
    高并发: [
      'java/hc/高并发',
      'java/hc/多线程',
      'java/hc/并发编程的艺术',
      'java/hc/内存模型',
      'java/hc/原子类',
      'java/hc/并发容器',
      'java/hc/并发工具类',
      'java/hc/线程池',
      'java/hc/锁'
    ],
    JVM: [
      'java/jvm/对象创建过程',
      'java/jvm/对象回收机制',
      'java/jvm/jvm参数',
      'java/jvm/jvm内存模型',
      'java/jvm/内存优化',
      'java/jvm/垃圾收集器',
    ]
  },
  spring: {
    Spring: [
      'framework/spring/README',
      'framework/spring/spring/IOC',
      'framework/spring/spring/AOP',
      'framework/spring/spring/core',
      'framework/spring/spring/事务管理',
      'framework/spring/spring/BeanFactory',
      'framework/spring/spring/BeanDefinition',
      'framework/spring/spring/spring启动流程',
      'framework/spring/spring/问题',
      'framework/spring/spring/importbean',
      'framework/spring/spring/getbean'
    ]
    ,
    SpringMVC: [
      'framework/spring/springmvc/简介',
      'framework/spring/springmvc/核心组件',
      'framework/spring/springmvc/Servlet',
      'framework/spring/springmvc/Session',
      'framework/spring/springmvc/DispatcherServlet',
      'framework/spring/springmvc/RequestMapping',
    ],
    SpringJMS: [],
    SpringBoot: [
      'framework/spring/springboot/简介',
      'framework/spring/springboot/起步依赖',
      'framework/spring/springboot/自动配置',
      'framework/spring/springboot/系统指标监控',
      'framework/spring/springboot/spi',
      'framework/spring/springboot/springboot启动',
      'framework/spring/springboot/常用注解',
      'framework/spring/springboot/基本特性',
    ]
  },
  Mybatis: {
    Mybatis: [
      'framework/mybatis/README',
      'framework/mybatis/mybatis/配置',
      'framework/mybatis/mybatis/核心组件',
      'framework/mybatis/mybatis/映射器',
      'framework/mybatis/mybatis/动态 SQL',
      'framework/mybatis/mybatis/Cache',
      'framework/mybatis/mybatis/插件',
      'framework/mybatis/mybatis/扩展',
      'framework/mybatis/mybatis/代码生成器',
    ],
    MybatisPlus: [
      'framework/mybatis/mybatisplus/README',
    ]
  },
  auth: {
    'Auth2.0': [
      'framework/auth/readme',
      'framework/auth/oauth2'
    ],
    'Shiro': []
  },
  chinese: {
    语文: [
      'cyclopedia/chinese/lan/idiom',
      'cyclopedia/chinese/noun/economics'
    ]
  },
  classnotes: {
    法律常识: [],
    云课堂: [
      'cyclopedia/classnotes/notes/dingding'
    ]
  },
  memo: {
    软件安装: [
      'memo/tool/系统初始化',
      'memo/tool/sublime',
      'memo/tool/idea',
    ],
    使用教程: [
      'memo/course/maven',
      'memo/course/git',
      'memo/course/docker',
    ]
  },
  job: {
    'Java后端开发': [
      'job/java',
      'job/jvm',
      'job/mybatis',
      'job/mysql',
      'job/redis',
      'job/rabbitmq',
      'job/spring',
      'job/linux',
      'job/网络协议',
      'job/分布式',
      'job/算法',
      'job/服务器',
      'job/面经',
    ]
  },
  patterns: {
    设计模式: [
      'patterns/other/设计模式原则',
    ],
    创建型模式: [
      'patterns/build/单利模式',
      'patterns/build/工厂模式',
      'patterns/build/建造者模式',
      'patterns/build/原型模式',
    ],
    结构型模式: [
      'patterns/structured/亨元模式',
      'patterns/structured/代理模式',
      'patterns/structured/外观模式',
      'patterns/structured/桥接模式',
      'patterns/structured/组合模式',
      'patterns/structured/装饰模式',
      'patterns/structured/适配器模式',
    ],
    行为型模式: [
      'patterns/behavior/中介者模式',
      'patterns/behavior/命令模式',
      'patterns/behavior/备忘录模式',
      'patterns/behavior/模板方法模式',
      'patterns/behavior/状态模式',
      'patterns/behavior/策略模式',
      'patterns/behavior/职责链模式',
      'patterns/behavior/观察者模式',
      'patterns/behavior/解释器模式',
      'patterns/behavior/访问者模式',
      'patterns/behavior/迭代器模式',
    ],
  },
  algorithm: {
    算法: [
      'algorithm/algorithm/README',
    ],
    数据结构: [
      'algorithm/structure/tree/树',
      'algorithm/structure/queue/队列',
    ],
    leetcode: [
      'algorithm/leetcode/README',
    ]
  },
  cs: {
    网络协议: [
      'cs/network/tcpip',
      'cs/network/http',
    ],
    操作系统原理: []
  },
  mq: {
    JMS: [
      'middleware/mq/jms/jms',
      'middleware/mq/jms/事件驱动模型'
    ],
    ActiveMQ: [
      'middleware/mq/active/架构'
    ],
    Redis的队列: [],
    Kafka: [],
    RabbitMQ: [],
  },
  distributed: {
    组件: [
      'middleware/distributed/module/consul'
    ],
    SpringCloud: [
      'middleware/distributed/springcloud/feign'
    ],
    Dubbo: [],
  },
  k8s: {
    K8S: []
  },
  servicemesh: {
    服务网格: []
  },
  tranctional: {
    事务: [
      'middleware/tranctional/简介',
      'middleware/tranctional/spring事务',
      'middleware/tranctional/mysql事务',
      'middleware/tranctional/redis事务',
    ],
    分布式事务: [
      'middleware/tranctional/seata/介绍'
    ]
  }
};
