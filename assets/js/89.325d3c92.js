(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{515:function(t,n,e){"use strict";e.r(n);var r=e(25),s=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("1，拦截器的概念\njava里的拦截器是动态拦截Action调用的对象，它提供了一种机制可以使开发者在一个Action执行的前后执行一段代码，也可以在一个Action\n执行前阻止其执行，同时也提供了一种可以提取Action中可重用部分代码的方式。在AOP中，拦截器用于在某个方法或者字段被访问之前，进行拦截\n然后再之前或者之后加入某些操作。目前，我们需要掌握的主要是Spring的拦截器，Struts2的拦截器不用深究，知道即可。")]),t._v(" "),e("p",[t._v("2，拦截器的原理\n大部分时候，拦截器方法都是通过代理的方式来调用的。Struts2的拦截器实现相对简单。当请求到达Struts2的ServletDispatcher时，Struts2\n会查找配置文件，并根据配置实例化相对的拦截器对象，然后串成一个列表（List），最后一个一个的调用列表中的拦截器。Struts2的拦截器是可\n插拔的，拦截器是AOP的一个实现。Struts2拦截器栈就是将拦截器按一定的顺序连接成一条链。在访问被拦截的方法或者字段时，Struts2拦截器链\n中的拦截器就会按照之前定义的顺序进行调用。")]),t._v(" "),e("p",[t._v("3，自定义拦截器的步骤\n第一步：自定义一个实现了Interceptor接口的类，或者继承抽象类AbstractInterceptor。\n第二步：在配置文件中注册定义的拦截器。\n第三步：在需要使用Action中引用上述定义的拦截器，为了方便也可以将拦截器定义为默认的拦截器，这样在不加特殊说明的情况下，所有的\nAction都被这个拦截器拦截。")]),t._v(" "),e("p",[t._v("4，过滤器与拦截器的区别\n过滤器可以简单的理解为“取你所想取”，过滤器关注的是web请求；拦截器可以简单的理解为“拒你所想拒”，拦截器关注的是方法调用，比如拦截\n敏感词汇。\n4.1，拦截器是基于java反射机制来实现的，而过滤器是基于函数回调来实现的。（有人说，拦截器是基于动态代理来实现的）\n4.2，拦截器不依赖servlet容器，过滤器依赖于servlet容器。\n4.3，拦截器只对Action起作用，过滤器可以对所有请求起作用。\n4.4，拦截器可以访问Action上下文和值栈中的对象，过滤器不能。\n4.5，在Action的生命周期中，拦截器可以多次调用，而过滤器只能在容器初始化时调用一次。")]),t._v(" "),e("p",[t._v("1.过滤器（Filter）：所谓过滤器顾名思义是用来过滤的，Java的过滤器能够为我们提供系统级别的过滤，也就是说，能过滤所有的web请求，\n这一点，是拦截器无法做到的。在Java Web中，你传入的request,response提前过滤掉一些信息，或者提前设置一些参数，然后再传入servlet或\n者struts的action进行业务逻辑，比如过滤掉非法url（不是login.do的地址请求，如果用户没有登陆都过滤掉）,或者在传入servlet或者struts\n的action前统一设置字符集，或者去除掉一些非法字符（聊天室经常用到的，一些骂人的话）。filter 流程是线性的，url传来之后，检查之后，\n可保持原来的流程继续向下执行，被下一个filter, servlet接收。\n2.监听器（Listener）：Java的监听器，也是系统级别的监听。监听器随web应用的启动而启动。Java的监听器在c/s模式里面经常用到，它\n会对特定的事件产生产生一个处理。监听在很多模式下用到，比如说观察者模式，就是一个使用监听器来实现的，在比如统计网站的在线人数。\n又比如struts2可以用监听来启动。Servlet监听器用于监听一些重要事件的发生，监听器对象可以在事情发生前、发生后可以做一些必要的处理。\n3.拦截器（Interceptor）：java里的拦截器提供的是非系统级别的拦截，也就是说，就覆盖面来说，拦截器不如过滤器强大，但是更有针对性。\nJava中的拦截器是基于Java反射机制实现的，更准确的划分，应该是基于JDK实现的动态代理。它依赖于具体的接口，在运行期间动态生成字节码。\n拦截器是动态拦截Action调用的对象，它提供了一种机制可以使开发者在一个Action执行的前后执行一段代码，也可以在一个Action执行前阻止其\n执行，同时也提供了一种可以提取Action中可重用部分代码的方式。在AOP中，拦截器用于在某个方法或者字段被访问之前，进行拦截然后再之前或\n者之后加入某些操作。java的拦截器主要是用在插件上，扩展件上比如 Hibernate Spring Struts2等，有点类似面向切片的技术，在用之前先要在\n配置文件即xml，文件里声明一段的那个东西。")])])}),[],!1,null,null,null);n.default=s.exports}}]);