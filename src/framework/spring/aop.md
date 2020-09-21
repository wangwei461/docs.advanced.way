---
title: 'spring aop'
---

## spring aop
> 在软件业，AOP为Aspect Oriented Programming的缩写，意为：面向切面编程，通过预编译方
式和运行期动态代理实现程序功能的统一维护的一种技术。AOP是OOP的延续，是软件开发中的一个
热点，也是Spring框架中的一个重要内容，是函数式编程的一种衍生范型。利用AOP可以对业务逻辑
的各个部分进行隔离，从而使得业务逻辑各部分之间的耦合度降低，提高程序的可重用性，同时提高
了开发的效率。

> 通俗的讲减少重复代码，少写代码达到相同的目的。面向切面编程（AOP, Aspect Oriented Programming）就是一种减重复代码方式。我们都知道JAVA是一门面向对象编程（OOP, Object Oriented Programming）语言,在java中将一个个功能模块抽象成一个个对象。这些对象通过一定的联系完成我们所看到的一个个应用，一个个服务。它的核心就是对象（Object


###概念
1. Aspect（切面）
	Aspect 声明类似于 Java 中的类声明，在 Aspect 中会包含着一些 Pointcut 以及相应的Advice。  
2. Joint point（连接点）
   所有可能的需要注入切面的地方。
	表示在程序中明确定义的点，典型的包括方法调用，对类成员的访问以及异常处理程序块的执行等等，它自身还可以嵌套其它 joint point。  
3. Pointcut（切点）
	表示一组 joint point，这些 joint point 或是通过逻辑关系组合起来，或是通过通配、正则表达式等方式集中起来，它定义了相应的 Advice 将要发生的地方。  
4.	Advice（通知）
	Advice 定义了在 Pointcut 里面定义的程序点具体要做的操作，它通过 before、after 和 around 来区别是在每个 joint point 之前、之后还是代替执行的代码。  
5. Target（目标对象）
	织入 Advice 的目标对象.。  
6. Weaving（织入）
	将 Aspect 和其他对象连接起来, 并创建 Adviced object 的过程  
### 原理-代理模式
#### 代理概念
简单的理解就是通过为某一个对象创建一个代理对象，我们不直接引用原本的对象，而是由创建的代理对象来控制对原对象的引用。  
按照代理的创建时期，代理类可以分为两种。

1. 静态代理    

	由程序员创建或特定工具自动生成源代码，再对其编译。在程序运行前，代理类的.class文件就已经存在了。
	
2. 动态代理  

	在程序运行时，运用反射机制动态创建而成，无需手动编写代码。动态代理不仅简化了编程工作，而且提高了软件系统的可扩展性，因为Java反射机制可以生成任意类型的动态代理类。

代理原理：代理对象内部含有对真实对象的引用，从而可以操作真实对象，同时代理对象提供与真实对象相同的接口以便在任何时刻都能代替真实对象。同时，代理对象可以在执行真实对象操作时，附加其他的操作，相当于对真实对象进行封装





实例
```java
@Aspect
@Configuration
public class AopConfiguration {

    Logger logger = LoggerFactory.getLogger(getClass());

    /**
     * 指定切入点 controller包下所有方法
     */
    @Pointcut("execution(public * com.ww.myapp.controller..*.*(..))")
    public void executeService(){}

    @Before("executeService()")
    public void doBefore(JoinPoint joinPoint) throws Throwable {
        ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        HttpServletRequest httpServletRequest = servletRequestAttributes.getRequest();

        logger.info("URL : " + httpServletRequest.getRequestURL().toString());
        logger.info("HTTP_METHOD : " + httpServletRequest.getMethod());
        logger.info("IP : " + httpServletRequest.getRemoteAddr());
        logger.info("CLASS_METHOD : " + joinPoint.getSignature().getDeclaringTypeName() + "." + joinPoint.getSignature().getName());
        logger.info("ARGS : " + Arrays.toString(joinPoint.getArgs()));
    }

    @Around("executeService()")
    public void doAround(){

    }

    @After("executeService()")
    public void doAfter(){
        logger.info("end");
    }

    @AfterReturning("executeService()")
    public void doAfterReturning(){

    }
}
```

Spring AOP支持在切入点表达式中使用如下的切入点指示符：　　　　

execution - 匹配方法执行的连接点，这是你将会用到的Spring的最主要的切入点指示符。
within - 限定匹配特定类型的连接点（在使用Spring AOP的时候，在匹配的类型中定义的方法的执行）。
this - 限定匹配特定的连接点（使用Spring AOP的时候方法的执行），其中bean reference（Spring AOP 代理）是指定类型的实例。
target - 限定匹配特定的连接点（使用Spring AOP的时候方法的执行），其中目标对象（被代理的应用对象）是指定类型的实例。
args - 限定匹配特定的连接点（使用Spring AOP的时候方法的执行），其中参数是指定类型的实例。
@target - 限定匹配特定的连接点（使用Spring AOP的时候方法的执行），其中正执行对象的类持有指定类型的注解。
@args - 限定匹配特定的连接点（使用Spring AOP的时候方法的执行），其中实际传入参数的运行时类型持有指定类型的注解。
@within - 限定匹配特定的连接点，其中连接点所在类型已指定注解（在使用Spring AOP的时候，所执行的方法所在类型已指定注解）。
@annotation - 限定匹配特定的连接点（使用Spring AOP的时候方法的执行），其中连接点的主题持有指定的注解。

切入点表达式的格式：execution([可见性] 返回类型 [声明类型].方法名(参数) [异常])
其中【】中的为可选，其他的还支持通配符的使用:
*：匹配所有字符
..：一般用于匹配多个包，多个参数
+：表示类及其子类
运算符有：&&、||、!