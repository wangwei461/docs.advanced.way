(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{469:function(a,s,t){a.exports=t.p+"assets/img/12234310-6bf928fc2231465a.c4ec33e9.png"},653:function(a,s,t){"use strict";t.r(s);var n=t(28),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h2",{attrs:{id:"beanfactory"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#beanfactory"}},[a._v("#")]),a._v(" BeanFactory")]),a._v(" "),n("p",[a._v("BeanFactory负责配置、创建、管理Bean。它有一个子接口ApplicationContext，也被称为Spring上下文，容器同时还管理着Bean和Bean之间的依赖关系")]),a._v(" "),n("h3",{attrs:{id:"结构图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结构图"}},[a._v("#")]),a._v(" 结构图")]),a._v(" "),n("p",[n("img",{attrs:{src:t(469),alt:""}})]),a._v(" "),n("h4",{attrs:{id:"beanfactory的三个子接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#beanfactory的三个子接口"}},[a._v("#")]),a._v(" BeanFactory的三个子接口：")]),a._v(" "),n("ul",[n("li",[a._v("HierarchicalBeanFactory：提供父容器的访问功能")]),a._v(" "),n("li",[a._v("ListableBeanFactory：提供了批量获取Bean的方法")]),a._v(" "),n("li",[a._v("AutowireCapableBeanFactory：在BeanFactory基础上实现对已存在实例的管理")])]),a._v(" "),n("h4",{attrs:{id:"configurablebeanfactory"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configurablebeanfactory"}},[a._v("#")]),a._v(" ConfigurableBeanFactory")]),a._v(" "),n("p",[a._v("主要单例bean的注册，生成实例，以及统计单例bean")]),a._v(" "),n("h4",{attrs:{id:"configurablelistablebeanfactory"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configurablelistablebeanfactory"}},[a._v("#")]),a._v(" ConfigurableListableBeanFactory")]),a._v(" "),n("p",[a._v("继承了上述的所有接口，增加了其他功能：比如类加载器,类型转化,属性编辑器,BeanPostProcessor,作用域,bean定义,处理bean依赖关系, bean如何销毁")]),a._v(" "),n("h4",{attrs:{id:"defaultlistablebeanfactory"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#defaultlistablebeanfactory"}},[a._v("#")]),a._v(" DefaultListableBeanFactory")]),a._v(" "),n("p",[a._v("实现了 ConfigurableListableBeanFactory，实现上述BeanFactory所有功能。它还可以注册BeanDefinition")]),a._v(" "),n("h3",{attrs:{id:"源码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#源码"}},[a._v("#")]),a._v(" 源码")]),a._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("interface")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BeanFactory")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" FACTORY_BEAN_PREFIX "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"&"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 获取 Bean")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BeansException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Class")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" requiredType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BeansException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BeansException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Class")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" requiredType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BeansException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Class")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" requiredType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BeansException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ObjectProvider")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBeanProvider")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Class")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" requiredType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ObjectProvider")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBeanProvider")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ResolvableType")]),a._v(" requiredType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 是否含有bean")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("containsBean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 是否单利")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("isSingleton")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("NoSuchBeanDefinitionException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 是否原型")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("isPrototype")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("NoSuchBeanDefinitionException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("isTypeMatch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ResolvableType")]),a._v(" typeToMatch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("NoSuchBeanDefinitionException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("isTypeMatch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Class")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" typeToMatch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("NoSuchBeanDefinitionException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 获取 bean的类型")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Class")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("getType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("NoSuchBeanDefinitionException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Class")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("getType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" allowFactoryBeanInit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("NoSuchBeanDefinitionException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// bean 别名")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("getAliases")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),n("h2",{attrs:{id:"defaultlistablebeanfactory-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#defaultlistablebeanfactory-2"}},[a._v("#")]),a._v(" DefaultListableBeanFactory")]),a._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DefaultListableBeanFactory")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AbstractAutowireCapableBeanFactory")]),a._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ConfigurableListableBeanFactory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BeanDefinitionRegistry")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Serializable")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DefaultListableBeanFactory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// AbstractAutowireCapableBeanFactory()")]),a._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("super")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),n("h4",{attrs:{id:"abstractautowirecapablebeanfactory"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#abstractautowirecapablebeanfactory"}},[a._v("#")]),a._v(" AbstractAutowireCapableBeanFactory")]),a._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("abstract")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AbstractAutowireCapableBeanFactory")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AbstractBeanFactory")]),a._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AutowireCapableBeanFactory")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AbstractAutowireCapableBeanFactory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// AbstractBeanFactory()")]),a._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("super")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 需要被忽视的Bean")]),a._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("ignoreDependencyInterface")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BeanNameAware")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("ignoreDependencyInterface")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BeanFactoryAware")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("ignoreDependencyInterface")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BeanClassLoaderAware")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),n("h4",{attrs:{id:"abstractbeanfactory"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#abstractbeanfactory"}},[a._v("#")]),a._v(" AbstractBeanFactory")]),a._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("abstract")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AbstractBeanFactory")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FactoryBeanRegistrySupport")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ConfigurableBeanFactory")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AbstractBeanFactory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);