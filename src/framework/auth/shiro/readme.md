---
---

Apache Shiro是一个强大且易用的Java安全框架,执行身份验证、授权、密码学和会话管理。使用Shiro的易于理解的API,您可以快速、轻松地获得任何应用程序,从最小的移动应用程序到最大的网络和企业应用程序。三个核心组件：Subject, SecurityManager 和 Realms。具体说明如下：

Subject：即“当前操作用户”。但是，在Shiro中，Subject这一概念并不仅仅指人，也可以是第三方进程、后台帐户（Daemon Account）或其他类似事物。它仅仅意味着“当前跟软件交互的东西”。但考虑到大多数目的和用途，你可以把它认为是Shiro的“用户”概念。Subject代表了当前用户的安全操作，SecurityManager则管理所有用户的安全操作。
SecurityManager：它是Shiro框架的核心，典型的Facade模式，Shiro通过SecurityManager来管理内部组件实例，并通过它来提供安全管理的各种服务。
Realm： Realm充当了Shiro与应用安全数据间的“桥梁”或者“连接器”。也就是说，当对用户执行认证（登录）和授权（访问控制）验证时，Shiro会从应用配置的Realm中查找用户及其权限信息。从这个意义上讲，Realm实质上是一个安全相关的DAO：它封装了数据源的连接细节，并在需要时将相关数据提供给Shiro。当配置Shiro时，你必须至少指定一个Realm，用于认证和（或）授权。配置多个Realm是可以的，但是至少需要一个。Shiro内置了可以连接大量安全数据源（又名目录）的Realm，如LDAP、关系数据库（JDBC）、类似INI的文本配置资源以及属性文件等。如果缺省的Realm不能满足需求，你还可以插入代表自定义数据源的自己的Realm实现。


 Subject：主体，可以看到主体可以是任何与应用交互的“用户”。
SecurityManager：相当于 SpringMVC 中的 DispatcherServlet 或者 Struts2 中的 FilterDispatcher。它是 Shiro 的核心，所有具体的交互都通过 SecurityManager 进行控制。它管理着所有 Subject、且负责进行认证和授权、及会话、缓存的管理。
Authenticator：认证器，负责主体认证的，这是一个扩展点，如果用户觉得 Shiro 默认的不好，我们可以自定义实现。其需要认证策略（Authentication Strategy），即什么情况下算用户认证通过了。
Authrizer：授权器，或者访问控制器。它用来决定主体是否有权限进行相应的操作，即控制着用户能访问应用中的哪些功能。
Realm：可以有1个或多个 Realm，可以认为是安全实体数据源，即用于获取安全实体的。它可以是 JDBC 实现，也可以是 LDAP 实现，或者内存实现等。
SessionManager：如果写过 Servlet 就应该知道 Session 的概念，Session 需要有人去管理它的生命周期，这个组件就是 SessionManager。而 Shiro 并不仅仅可以用在 Web 环境，也可以用在如普通的 JavaSE 环境。
SessionDAO：DAO 大家都用过，数据访问对象，用于会话的 CRUD。我们可以自定义 SessionDAO 的实现，控制 session 存储的位置。如通过 JDBC 写到数据库或通过 jedis 写入 redis 中。另外 SessionDAO 中可以使用 Cache 进行缓存，以提高性能。
CacheManager：缓存管理器。它来管理如用户、角色、权限等的缓存的。因为这些数据基本上很少去改变，放到缓存中后可以提高访问的性能。
Cryptography：密码模块，Shiro 提高了一些常见的加密组件用于如密码加密/解密的