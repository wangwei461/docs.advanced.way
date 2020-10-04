(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{537:function(a,s,t){"use strict";t.r(s);var n=t(25),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"静态代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#静态代理"}},[a._v("#")]),a._v(" 静态代理")]),a._v(" "),t("p",[a._v("代理类在程序运行前就已经存在")]),a._v(" "),t("h2",{attrs:{id:"动态代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动态代理"}},[a._v("#")]),a._v(" 动态代理")]),a._v(" "),t("blockquote",[t("p",[a._v("代理对象是在jvm运行时动态生成")])]),a._v(" "),t("h3",{attrs:{id:"jdk-动态代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jdk-动态代理"}},[a._v("#")]),a._v(" JDK 动态代理")]),a._v(" "),t("p",[a._v("在java的动态代理机制中，有两个重要的类或接口，一个是 "),t("code",[a._v("InvocationHandler(Interface)")]),a._v("、另一个则是 "),t("code",[a._v("Proxy(Class)")]),a._v("，这一个类和接口是实现我们动态代理所必须用到的")]),a._v(" "),t("h4",{attrs:{id:"invocationhandler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#invocationhandler"}},[a._v("#")]),a._v(" "),t("code",[a._v("InvocationHandler")])]),a._v(" "),t("p",[a._v("每一个动态代理类都必须要实现 "),t("code",[a._v("InvocationHandler")]),a._v(" 这个接口，并且每个代理类的实例都关联到了一个 "),t("code",[a._v("handler")]),a._v("，当我们通过代理对象调用一个方法的时候，这个方法的调用就会被转发为由 "),t("code",[a._v("InvocationHandler")]),a._v(" 这个接口的 "),t("code",[a._v("invoke")]),a._v(" 方法来进行调用")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("invoke")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" proxy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Method")]),a._v(" method"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Throwable")]),a._v("\n\nproxy"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("　指代我们所代理的那个真实对象\nmethod"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 指代的是我们所要调用真实对象的某个方法的"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Method")]),a._v("对象\nargs"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("　　指代的是调用真实对象某个方法时接受的参数\n")])])]),t("h4",{attrs:{id:"proxy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proxy"}},[a._v("#")]),a._v(" "),t("code",[a._v("Proxy")])]),a._v(" "),t("p",[a._v("用来动态创建一个代理对象的类")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("newProxyInstance")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClassLoader")]),a._v(" loader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Class")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" interfaces"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("InvocationHandler")]),a._v(" h"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("IllegalArgumentException")]),a._v("\n\nloader"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("　一个"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClassLoader")]),a._v("对象，定义了由哪个"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClassLoader")]),a._v("对象来对生成的代理对象进行加载\n\ninterfaces"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("　一个"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Interface")]),a._v("对象的数组，表示的是我将要给我需要代理的对象提供一组什么接口，如果我提供了一组接口给它，那么这个代理对象就宣称实现了该接口"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("多态"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("，这样我就能调用这组接口中的方法了\n\nh"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("　一个"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("InvocationHandler")]),a._v("对象，表示的是当我这个动态代理对象在调用方法的时候，会关联到哪一个"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("InvocationHandler")]),a._v("对象上\n")])])]),t("p",[t("code",[a._v("Proxy.newProxyInstance")]),a._v(" 创建的代理对象是在jvm运行时动态生成的一个对象")])])}),[],!1,null,null,null);s.default=e.exports}}]);