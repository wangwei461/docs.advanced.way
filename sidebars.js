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
  }
};
