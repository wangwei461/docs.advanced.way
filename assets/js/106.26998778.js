(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{619:function(_,a,v){"use strict";v.r(a);var t=v(27),e=Object(t.a)({},(function(){var _=this,a=_.$createElement,v=_._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"spring-学习记录"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#spring-学习记录"}},[_._v("#")]),_._v(" spring 学习记录")]),_._v(" "),v("hr"),_._v(" "),v("h3",{attrs:{id:"一、入门"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、入门"}},[_._v("#")]),_._v(" 一、入门")]),_._v(" "),v("h3",{attrs:{id:"_1-简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[_._v("#")]),_._v(" 1. 简介")]),_._v(" "),v("p",[v("a",{attrs:{href:"http://spring.io",target:"_blank",rel:"noopener noreferrer"}},[_._v("Spring"),v("OutboundLink")],1),_._v("框架，由Rod Johnson开发，是一个非常强大的反转控制(IOC)框架，以帮助分离项目组件之间的依赖关系。")]),_._v(" "),v("h3",{attrs:{id:"_2-框架图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-框架图"}},[_._v("#")]),_._v(" 2. 框架图")]),_._v(" "),v("p",[v("img",{attrs:{src:"http://static.oschina.net/uploads/img/201403/19135321_1cQf.png",alt:""}})]),_._v(" "),v("h3",{attrs:{id:"二、装配bean"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、装配bean"}},[_._v("#")]),_._v(" 二、装配Bean")]),_._v(" "),v("h4",{attrs:{id:"_1-声明bean"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-声明bean"}},[_._v("#")]),_._v(" 1. 声明Bean")]),_._v(" "),v("p",[v("code",[_._v('<bean id="" class="" />')]),_._v(" id 代表对象实例， class 引入Class 类")]),_._v(" "),v("h4",{attrs:{id:"_2-创建spring-配置文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建spring-配置文件"}},[_._v("#")]),_._v(" 2. 创建spring 配置文件")]),_._v(" "),v("p",[v("code",[_._v("<beans>")]),_._v(" 作为根节点，java 自带多种的命名空间。")]),_._v(" "),v("h4",{attrs:{id:"_3-注入参数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-注入参数"}},[_._v("#")]),_._v(" 3. 注入参数")]),_._v(" "),v("ol",[v("li",[_._v("构造器注入\n"),v("code",[_._v('<constructor-arg value="">')]),_._v(" 或 "),v("code",[_._v('<constructor-arg ref="">')])]),_._v(" "),v("li",[_._v("属性注入")]),_._v(" "),v("li",[_._v("装配集合\n"),v("ul",[v("li",[v("code",[_._v("list")])]),_._v(" "),v("li",[v("code",[_._v("set")]),_._v(" 不允许重复值")]),_._v(" "),v("li",[v("code",[_._v("map")])]),_._v(" "),v("li",[v("code",[_._v("props")])])])]),_._v(" "),v("li",[_._v("装配空值"),v("br"),_._v("\n设置"),v("code",[_._v("<null />")])]),_._v(" "),v("li",[_._v("实用表达式装配")])]),_._v(" "),v("h4",{attrs:{id:"_4-作用域"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-作用域"}},[_._v("#")]),_._v(" 4. 作用域")]),_._v(" "),v("p",[_._v("由 score=“” 设置"),v("br"),_._v("\n默认的 单例模式（singleton）")]),_._v(" "),v("h4",{attrs:{id:"_5-初始化和销毁bean"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-初始化和销毁bean"}},[_._v("#")]),_._v(" 5. 初始化和销毁bean")]),_._v(" "),v("p",[v("code",[_._v("init-method")]),_._v(" "),v("code",[_._v("destory-method")])]),_._v(" "),v("h5",{attrs:{id:"小结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[_._v("#")]),_._v(" 小结：")]),_._v(" "),v("blockquote",[v("p",[_._v("spring 容器是spring框架的核心，可以分为两类。"),v("br"),_._v("\nBeanFactory 提供基础的依赖注入和Bean装配服务。"),v("br"),_._v("\nApplicationCotext 作为更加高级的服务。")])]),_._v(" "),v("h3",{attrs:{id:"三、spring-xml-配置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三、spring-xml-配置"}},[_._v("#")]),_._v(" 三、spring XML 配置")]),_._v(" "),v("h4",{attrs:{id:"_1-自动装配bean属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-自动装配bean属性"}},[_._v("#")]),_._v(" 1. 自动装配Bean属性")]),_._v(" "),v("ol",[v("li",[_._v("4种装配类型\n"),v("ul",[v("li",[_._v("ByName -- 把与Bean属性相同的名称的其他的Bean装配到bean的对应的属性中")]),_._v(" "),v("li",[_._v("ByType --")]),_._v(" "),v("li",[_._v("construcator")]),_._v(" "),v("li",[_._v("autodetect")])])]),_._v(" "),v("li",[_._v("默认自动装配类型\n采用注解形式配置Bean，需要设置装配Bean的方式，可以在"),v("code",[_._v("<bean />")]),_._v('设置，default-autowire="ByName"。')])]),_._v(" "),v("h4",{attrs:{id:"_2-使用注解"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用注解"}},[_._v("#")]),_._v(" 2. 使用注解")]),_._v(" "),v("ol",[v("li",[_._v("使用注解装配\n"),v("ul",[v("li",[v("code",[_._v("<context:annotation-config />")]),_._v(" 打开注解装配方式")]),_._v(" "),v("li",[v("code",[_._v("@Autowired")]),_._v(" 将此注解的Bean自动装配")]),_._v(" "),v("li",[v("code",[_._v("@Inject")]),_._v(" 基于标准的自动装配，与"),v("code",[_._v("@Autowired")]),_._v("功能相同，但"),v("code",[_._v("@Inject")]),_._v("的依赖关系必须存在，否则报错。")]),_._v(" "),v("li",[v("code",[_._v("@Value")]),_._v(" 使用注解装配String和基本类型的值。也可以引入表达式")])])]),_._v(" "),v("li",[_._v("自动检测Bean\n使用"),v("code",[_._v("<contetx:component-scan />")]),_._v(" 将自动检测项目的Bean，需要标注Bean\n"),v("ul",[v("li",[v("code",[_._v("@Component")]),_._v(" 通用的构造性注解，表明这是一个spring的组件")]),_._v(" "),v("li",[v("code",[_._v("@Controller")]),_._v(" 定义该类为Spring MVC 的控制器")]),_._v(" "),v("li",[v("code",[_._v("@Repository")]),_._v(" 定义该类是一个数据仓库")]),_._v(" "),v("li",[v("code",[_._v("@Service")]),_._v(" 定义该类为服务")])])])]),_._v(" "),v("h5",{attrs:{id:"小结-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#小结-2"}},[_._v("#")]),_._v(" 小结：")]),_._v(" "),v("blockquote",[v("p",[_._v("spring 简化了企业级的开发难度，但spring 的配置文件需要配置大量的冗长的xml."),v("br"),_._v("\n使用注解方式，大大简化的spring的配置文件。")])]),_._v(" "),v("h3",{attrs:{id:"五、数据库访问"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#五、数据库访问"}},[_._v("#")]),_._v(" 五、数据库访问")]),_._v(" "),v("blockquote",[v("p",[_._v("dao (data access object) 数据访问对象的缩写。")])]),_._v(" "),v("h4",{attrs:{id:"_1-spring-的数据库访问异常体系"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-spring-的数据库访问异常体系"}},[_._v("#")]),_._v(" 1. spring 的数据库访问异常体系")]),_._v(" "),v("ol",[v("li",[_._v("SQL异常种类\n"),v("ul",[v("li",[_._v("应用程序无法访问数据库")]),_._v(" "),v("li",[_._v("要执行的语句语法错误")]),_._v(" "),v("li",[_._v("查询或插入的表不存在")]),_._v(" "),v("li",[_._v("试图插入的数据违反数据库的唯一约束条件")])])]),_._v(" "),v("li",[_._v("数据访问模板化"),v("br"),_._v("\n将大量重复的代码集成到一个模板类,模板--回调机制\n"),v("ul",[v("li",[_._v("JdbcTemplate")]),_._v(" "),v("li",[_._v("NameParamterJdbcTemplate")]),_._v(" "),v("li",[_._v("HibernateJdbcTemplate")]),_._v(" "),v("li",[_._v("SqlMapClientTemplate")]),_._v(" "),v("li",[_._v("JdoTemplate")])])]),_._v(" "),v("li",[_._v("dao 支持类")])]),_._v(" "),v("h4",{attrs:{id:"_2-配置数据源"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置数据源"}},[_._v("#")]),_._v(" 2. 配置数据源")]),_._v(" "),v("ol",[v("li",[_._v("基于JDBC驱动的数据源")]),_._v(" "),v("li",[_._v("基于JNDI驱动的数据源")]),_._v(" "),v("li",[_._v("数据源连接池（DBCP）")])]),_._v(" "),v("h3",{attrs:{id:"六、事务管理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#六、事务管理"}},[_._v("#")]),_._v(" 六、事务管理")]),_._v(" "),v("h4",{attrs:{id:"_1-事务简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-事务简介"}},[_._v("#")]),_._v(" 1. 事务简介")]),_._v(" "),v("ol",[v("li",[_._v("事务特性\n"),v("ul",[v("li",[_._v("原子性 由一个或多个的活动组成的单元")]),_._v(" "),v("li",[_._v("一致性 建模的业务处于相同的状态")]),_._v(" "),v("li",[_._v("隔离型 事务之间不影响")]),_._v(" "),v("li",[_._v("持久性 事务完成，数据永久保存")])])]),_._v(" "),v("li",[_._v("事务管理器\nsprig并不管理事务，提供事务管理器处理事务\n"),v("ul",[v("li",[_._v("jdbc 事务")]),_._v(" "),v("li",[_._v("hibernate 事务")]),_._v(" "),v("li",[_._v("java持久化API事务")])])])]),_._v(" "),v("h4",{attrs:{id:"_2-声明式事务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-声明式事务"}},[_._v("#")]),_._v(" 2. 声明式事务")]),_._v(" "),v("ol",[v("li",[_._v("定义事务属性\n"),v("ul",[v("li",[_._v("传播行为")]),_._v(" "),v("li",[_._v("隔离级别\n"),v("ul",[v("li",[_._v("脏读 事务访问不存在的数据")]),_._v(" "),v("li",[_._v("不可重复读 一个事务执行查询两次或多次的，返回数据都不同")]),_._v(" "),v("li",[_._v("幻读")])])]),_._v(" "),v("li",[_._v("回滚规则")]),_._v(" "),v("li",[_._v("只读")]),_._v(" "),v("li",[_._v("事务超时")])])]),_._v(" "),v("li",[_._v("事务定义的方式\n"),v("ul",[v("li",[_._v("在XML中配置")]),_._v(" "),v("li",[_._v("注解驱动")])])])]),_._v(" "),v("h5",{attrs:{id:"小结-3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#小结-3"}},[_._v("#")]),_._v(" 小结：")]),_._v(" "),v("blockquote",[v("p",[_._v("事务使程序更加健壮，防止数据处于不同的状态."),v("br"),_._v("\n支持编码式和声明式事务管理")])])])}),[],!1,null,null,null);a.default=e.exports}}]);