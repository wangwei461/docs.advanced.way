---
title: 'Spring'
---

# spring 学习记录
----
### 一、入门
### 1. 简介
[Spring](http://spring.io)框架，由Rod Johnson开发，是一个非常强大的反转控制(IOC)框架，以帮助分离项目组件之间的依赖关系。
### 2. 框架图
![](http://static.oschina.net/uploads/img/201403/19135321_1cQf.png)
### 二、装配Bean
#### 1. 声明Bean
`<bean id="" class="" />` id 代表对象实例， class 引入Class 类
#### 2. 创建spring 配置文件
`<beans>` 作为根节点，java 自带多种的命名空间。
#### 3. 注入参数
1. 构造器注入
  `<constructor-arg value="">` 或 `<constructor-arg ref="">`
2. 属性注入
3. 装配集合
	* `list`
	* `set` 不允许重复值
	* `map`
	* `props`
4. 装配空值  
设置`<null />`
5. 实用表达式装配
	
#### 4. 作用域
由 score=“” 设置  
默认的 单例模式（singleton）
#### 5. 初始化和销毁bean
`init-method` `destory-method`
##### 小结：
> spring 容器是spring框架的核心，可以分为两类。  
> BeanFactory 提供基础的依赖注入和Bean装配服务。  
> ApplicationCotext 作为更加高级的服务。

### 三、spring XML 配置
#### 1. 自动装配Bean属性
1. 4种装配类型  
	* ByName -- 把与Bean属性相同的名称的其他的Bean装配到bean的对应的属性中
	* ByType -- 
	* construcator
	* autodetect
2. 默认自动装配类型
采用注解形式配置Bean，需要设置装配Bean的方式，可以在`<bean />`设置，default-autowire="ByName"。

#### 2. 使用注解
1. 使用注解装配
	* `<context:annotation-config />` 打开注解装配方式
	* `@Autowired` 将此注解的Bean自动装配
	* `@Inject` 基于标准的自动装配，与`@Autowired`功能相同，但`@Inject`的依赖关系必须存在，否则报错。
	* `@Value` 使用注解装配String和基本类型的值。也可以引入表达式
2. 自动检测Bean
使用`<contetx:component-scan />` 将自动检测项目的Bean，需要标注Bean  
	* `@Component` 通用的构造性注解，表明这是一个spring的组件
	* `@Controller` 定义该类为Spring MVC 的控制器
	* `@Repository` 定义该类是一个数据仓库
	* `@Service` 定义该类为服务

##### 小结：
> spring 简化了企业级的开发难度，但spring 的配置文件需要配置大量的冗长的xml.  
> 使用注解方式，大大简化的spring的配置文件。

### 五、数据库访问
> dao (data access object) 数据访问对象的缩写。  

#### 1. spring 的数据库访问异常体系  
1. SQL异常种类
	* 应用程序无法访问数据库
	* 要执行的语句语法错误
	* 查询或插入的表不存在
	* 试图插入的数据违反数据库的唯一约束条件
2. 数据访问模板化  
	将大量重复的代码集成到一个模板类,模板--回调机制
	* JdbcTemplate
	* NameParamterJdbcTemplate
	* HibernateJdbcTemplate
	* SqlMapClientTemplate
	* JdoTemplate
3. dao 支持类  

#### 2. 配置数据源
1. 基于JDBC驱动的数据源
2. 基于JNDI驱动的数据源
3. 数据源连接池（DBCP）


### 六、事务管理
#### 1. 事务简介
1. 事务特性
	* 原子性 由一个或多个的活动组成的单元
	* 一致性 建模的业务处于相同的状态
	* 隔离型 事务之间不影响
	* 持久性 事务完成，数据永久保存
2. 事务管理器
	sprig并不管理事务，提供事务管理器处理事务
	* jdbc 事务
	* hibernate 事务
	* java持久化API事务

#### 2. 声明式事务
1. 定义事务属性
	* 传播行为
	* 隔离级别
		+ 脏读 事务访问不存在的数据
		+ 不可重复读 一个事务执行查询两次或多次的，返回数据都不同
		+ 幻读
	* 回滚规则
	* 只读
	* 事务超时
2. 事务定义的方式
	* 在XML中配置
	* 注解驱动

##### 小结：
 > 事务使程序更加健壮，防止数据处于不同的状态.  
 > 支持编码式和声明式事务管理  