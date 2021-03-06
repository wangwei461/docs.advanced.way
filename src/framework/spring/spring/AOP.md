---
title: 'AOP'
---
## AOP
在软件业，AOP为 `Aspect Oriented Programming` 的缩写，意为：面向切面编程，通过预编译方式和运行期动态代理实现程序功能的统一维护的一种技术。

AOP是OOP的延续，是软件开发中的一个
热点，也是Spring框架中的一个重要内容，是函数式编程的一种衍生范型。利用AOP可以对业务逻辑
的各个部分进行隔离，从而使得业务逻辑各部分之间的耦合度降低，提高程序的可重用性，同时提高
了开发的效率。

> 通俗的讲减少重复代码，少写代码达到相同的目的。面向切面编程（AOP, Aspect Oriented Programming）就是一种减重复代码方式。我们都知道JAVA是一门面向对象编程（OOP, Object Oriented Programming）语言,在java中将一个个功能模块抽象成一个个对象。这些对象通过一定的联系完成我们所看到的一个个应用，一个个服务。它的核心就是对象（Object

### 概念

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

* 前置通知:在我们执行目标方法之前运行(@Before)
* 后置通知:在我们目标方法运行结束之后 ,不管有没有异常(@After)
* 返回通知:在我们的目标方法正常返回值后运行(@AfterReturning)
* 异常通知:在我们的目标方法出现异常后运行(@AfterThrowing)
* 环绕通知:动态代理, 需要手动执行joinPoint.procced()(其实就是执行我们的目标方法执行之前相当于前置通知, 执行之后就相当于我们后置通知(@Around)

### 原理-代理模式

简单的理解就是通过为某一个对象创建一个代理对象，我们不直接引用原本的对象，而是由创建的代理对象来控制对原对象的引用。  
按照代理的创建时期，代理类可以分为两种。

1. 静态代理
在程序运行前，代理类的.class文件就已经存在了。
	
2. 动态代理

在程序运行时，运用反射机制动态创建而成，无需手动编写代码。动态代理不仅简化了编程工作，而且提高了软件系统的可扩展性，因为Java反射机制可以生成任意类型的动态代理类。

代理原理：代理对象内部含有对真实对象的引用，从而可以操作真实对象，同时代理对象提供与真实对象相同的接口以便在任何时刻都能代替真实对象。同时，代理对象可以在执行真实对象操作时，附加其他的操作，相当于对真实对象进行封装
