(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{437:function(r,p,i){"use strict";i.r(p);var n=i(25),v=Object(n.a)({},(function(){var r=this,p=r.$createElement,i=r._self._c||p;return i("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[i("p",[i("RouterLink",{attrs:{to:"/framework/spring/"}},[r._v("back to index")])],1),r._v(" "),i("p",[r._v("Spring使创建Java企业应用程序变得很容易。它提供了在企业环境中使用Java语言所需要的一切，支持Groovy和Kotlin作为JVM上的替代语言，并根据应用程序的需求灵活地创建多种体系结构。从Spring Framework 5.0开始，Spring就需要JDK 8+ (Java SE 8+)，并且已经为JDK 9提供了开箱即用的支持。")]),r._v(" "),i("p",[r._v("Spring支持广泛的应用程序场景。在大型企业中，应用程序通常存在很长时间，并且必须运行在JDK和应用服务器上，升级周期超出了开发人员的控制。其他的可以作为一个单独的jar运行，并嵌入服务器，可能是在云环境中。还有一些可能是不需要服务器的独立应用程序(例如批处理或集成工作负载)。")]),r._v(" "),i("p",[r._v("Spring是开源的。它拥有一个大型且活跃的社区，该社区基于各种实际用例提供持续的反馈。这帮助Spring在很长一段时间内成功地进化。")]),r._v(" "),i("h2",{attrs:{id:"_1-我们所说的-spring-是什么意思"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-我们所说的-spring-是什么意思"}},[r._v("#")]),r._v(" 1. 我们所说的“Spring”是什么意思")]),r._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[r._v("“Spring”一词在不同的上下文中有不同的含义。它可以用来引用Spring Framework项目本身，这是它开始的地方。随着时间的推移，其他Spring项目已经构建在Spring框架之上。大多数情况下，当人们说“Spring”，他们指的是整个家庭的项目。这个参考文档主要关注基础:Spring框架本身。\n")])])]),i("p",[r._v("Spring框架被划分为多个模块。应用程序可以选择它们需要哪些模块。Core是核心容器的模块，包括配置模型和依赖注入机制。除此之外，Spring框架还为不同的应用程序体系结构提供了基础支持，包括消息传递、事务数据和持久性以及web。它还包括基于servlet的Spring MVC web框架，以及与之并行的Spring WebFlux反应性web框架。")]),r._v(" "),i("p",[r._v("关于模块的说明:Spring的框架jar允许部署到JDK 9的模块路径(“Jigsaw”)。为了在支持jigsaw的应用程序中使用，Spring Framework 5 jar附带了“Automatic-Module-Name”清单条目，其中定义了稳定的语言级模块名(“Spring”)。核心”、“春天。独立于jar工件名称(jar遵循相同的命名模式，使用“-”代替“”)。”,如。“spring核心”和“spring上下文”)。当然，Spring的框架jar在JDK 8和JDK 9的类路径上都能很好地工作。")]),r._v(" "),i("h2",{attrs:{id:"_2-spring的历史和spring框架"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2-spring的历史和spring框架"}},[r._v("#")]),r._v(" 2. Spring的历史和Spring框架")]),r._v(" "),i("p",[r._v("Spring是在2003年作为对早期J2EE规范复杂性的响应而出现的。虽然有些人认为Java EE和Spring是竞争对手，但Spring实际上是Java EE的补充。Spring编程模型不包含Java EE平台规范;相反，它集成了从EE保护伞中精心选择的各个规范:")]),r._v(" "),i("ul",[i("li",[i("p",[r._v("Servlet API (JSR 340)")])]),r._v(" "),i("li",[i("p",[r._v("WebSocket API (JSR 356)")])]),r._v(" "),i("li",[i("p",[r._v("并发实用程序(JSR 236)")])]),r._v(" "),i("li",[i("p",[r._v("JSON绑定API (JSR 367)")])]),r._v(" "),i("li",[i("p",[r._v("Bean验证(JSR 303)")])]),r._v(" "),i("li",[i("p",[r._v("JPA (JSR 338)")])]),r._v(" "),i("li",[i("p",[r._v("JMS (JSR 914)")])]),r._v(" "),i("li",[i("p",[r._v("以及JTA/JCA设置，以便在必要时进行事务协调。")])])]),r._v(" "),i("p",[r._v("Spring框架还支持依赖项注入(JSR 330)和公共注释(JSR 250)规范，应用程序开发人员可以选择使用这些规范，而不是Spring框架提供的特定于Spring的机制。")]),r._v(" "),i("p",[r._v("从Spring Framework 5.0开始，Spring至少需要Java EE 7级别(例如Servlet 3.1+、JPA 2.1+)，同时在运行时提供与Java EE 8级别(例如Servlet 4.0、JSON绑定API)较新的API的开箱即用集成。这使得Spring与Tomcat 8和Tomcat 9、WebSphere 9和JBoss EAP 7完全兼容。")]),r._v(" "),i("p",[r._v("随着时间的推移，Java EE在应用程序开发中的角色已经发生了变化。在Java EE和Spring的早期，创建应用程序是为了部署到应用服务器。今天，在Spring Boot的帮助下，应用程序以一种devops和云友好的方式创建，嵌入了Servlet容器，而且更改起来很简单。从Spring Framework 5开始，WebFlux应用程序甚至不直接使用Servlet API，并且可以运行在不是Servlet容器的服务器上(比如Netty)。")]),r._v(" "),i("p",[r._v("Spring继续创新和进化。除了Spring框架之外，还有其他项目，比如Spring Boot、Spring Security、Spring Data、Spring Cloud、Spring Batch等等。重要的是要记住，每个项目都有自己的源代码存储库、问题跟踪器和发布节奏。"),i("a",{attrs:{href:"https://spring.io/projects",target:"_blank",rel:"noopener noreferrer"}},[r._v("spring.io/projects"),i("OutboundLink")],1),r._v(" 项目的完整列表。")]),r._v(" "),i("h2",{attrs:{id:"_3-设计理念"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-设计理念"}},[r._v("#")]),r._v(" 3.设计理念")]),r._v(" "),i("p",[r._v("当您学习一个框架时，重要的是不仅要知道它做什么，还要知道它遵循什么原则。以下是Spring框架的指导原则:")]),r._v(" "),i("ul",[i("li",[i("p",[r._v("在每个层次上提供选择。Spring允许您尽可能推迟设计决策。例如，您可以通过配置切换持久性提供者，而无需更改代码。对于许多其他基础设施问题以及与第三方api的集成也是如此。")])]),r._v(" "),i("li",[i("p",[r._v("容纳不同的观点。Spring支持灵活性，并且不对应该如何做事情发表意见。它支持具有不同视角的广泛应用程序需求。")])]),r._v(" "),i("li",[i("p",[r._v("保持强大的向后兼容性。Spring的发展已经被小心地管理，以在版本之间强制进行很少的破坏性更改。Spring支持精心选择的JDK版本和第三方库，以方便维护依赖于Spring的应用程序和库。")])]),r._v(" "),i("li",[i("p",[r._v("关心API设计。Spring团队投入了大量的思想和时间来开发直观的api，并支持多个版本和许多年。")])]),r._v(" "),i("li",[i("p",[r._v("为代码质量设定高标准。Spring框架非常强调有意义的、当前的和准确的javadoc。它是极少数可以声明干净代码结构且包之间没有循环依赖关系的项目之一。")])])]),r._v(" "),i("p",[r._v("##4. 反馈和贡献\n对于how-to问题、诊断或调试问题，我们建议使用StackOverflow，并且我们有一个问题页面，列出了建议使用的标记。如果您非常确定Spring框架中存在一个问题，或者想建议一个特性，请使用JIRA问题跟踪器。")]),r._v(" "),i("p",[r._v("如果您心中有一个解决方案或建议的修复，您可以在Github上提交一个pull request。但是，请记住，除了最琐碎的问题外，我们希望在问题跟踪器中归档票据，在那里进行讨论，并留下记录供将来参考。")]),r._v(" "),i("p",[r._v("有关详细信息，请参阅提供内容的顶级项目页面中的指导原则。")]),r._v(" "),i("p",[r._v("##5. 开始\n​\t如果您刚刚开始使用Spring，您可能希望通过创建一个基于Spring boot的应用程序来开始使用Spring框架。Spring Boot提供了一种快速(且固执己见)的方法来创建基于Spring的可生产应用程序。它基于Spring框架，支持约定而不是配置，旨在让您尽可能快地启动和运行。")]),r._v(" "),i("p",[r._v("您可以使用"),i("a",{attrs:{href:"https://start.spring.io",target:"_blank",rel:"noopener noreferrer"}},[r._v("start.spring.io"),i("OutboundLink")],1),r._v("生成一个基本项目或遵循“入门”指南之一，例如开始构建RESTful Web服务。这些指南不仅更容易理解，而且非常专注于任务，其中大多数都是基于Spring Boot的。它们还涵盖了Spring portfolio中的其他项目，您在解决特定问题时可能需要考虑这些项目。")])])}),[],!1,null,null,null);p.default=v.exports}}]);