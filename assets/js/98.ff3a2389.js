(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{527:function(t,a,s){"use strict";s.r(a);var r=s(25),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"javap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javap"}},[t._v("#")]),t._v(" javap")]),t._v(" "),s("p",[t._v("javap是jdk自带的反解析工具。")]),t._v(" "),s("p",[t._v("它的作用就是根据class字节码文件，反解析出当前类对应的code区（汇编指令）、本地变量表、异常表和代码行偏移量映射表、常量池等等信息。")]),t._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("help  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("help  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("        输出此用法消息\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("version                 版本信息，其实是当前javap所在jdk的版本信息，不是"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v("在哪个jdk下生成的。\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("v  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("verbose             输出附加信息（包括行号、本地变量表，反汇编等详细信息）\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("l                         输出行号和本地变量表\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v("                    仅显示公共类和成员\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v("               显示受保护的"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("公共类和成员\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v("                 显示程序包"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("受保护的"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("公共类 和成员 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("默认"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("p  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v("             显示所有类和成员\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("c                       对代码进行反汇编\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("s                       输出内部类型签名\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("sysinfo                 显示正在处理的类的系统信息 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("路径"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 大小"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 日期"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MD5 散列"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("constants               显示静态最终常量\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("classpath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("        指定查找用户类文件的位置\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bootclasspath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("    覆盖引导类文件的位置\n")])])]),s("h4",{attrs:{id:"常量池"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常量池"}},[t._v("#")]),t._v(" 常量池")]),t._v(" "),s("p",[t._v("JVM 维护了一个按类型区分的常量池，一个类似于符号表的运行时数据结构。尽管它包含更多数据。Java 字节码需要数据。这个数据经常因为太大不能直接存储在字节码中，取而代之的是存储在常量池中，字节码包含这个常量池的引用。")]),t._v(" "),s("p",[t._v("常量池中可以存储多种类型的数据：")]),t._v(" "),s("ul",[s("li",[t._v("数字型")]),t._v(" "),s("li",[t._v("字符串型")]),t._v(" "),s("li",[t._v("类引用型")]),t._v(" "),s("li",[t._v("域引用型")]),t._v(" "),s("li",[t._v("方法引用")])]),t._v(" "),s("h4",{attrs:{id:"方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),s("p",[t._v("每一个方法包含四个区域：")]),t._v(" "),s("ul",[s("li",[t._v("签名和访问标签")]),t._v(" "),s("li",[t._v("字节码")]),t._v(" "),s("li",[t._v("LineNumberTable：为调试器提供源码中的每一行对应的字节码信息。")]),t._v(" "),s("li",[t._v("LocalVariableTable：列出了所有栈帧中的局部变量。")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("操作码")]),t._v(" "),s("th",[t._v("作用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("aload0")]),t._v(" "),s("td",[t._v("这个操作码是aload格式操作码中的一个。它们用来把对象引用加载到操作码栈。 表示正在被访问的局部变量数组的位置，但只能是0、1、2、3 中的一个。还有一些其它类似的操作码用来载入非对象引用的数据，如iload, lload, float 和 dload。其中 i 表示 int，l 表示 long，f 表示 float，d 表示 double。局部变量数组位置大于 3 的局部变量可以用 iload, lload, float, dload 和 aload 载入。这些操作码都只需要一个操作数，即数组中的位置")])]),t._v(" "),s("tr",[s("td",[t._v("ldc")]),t._v(" "),s("td",[t._v("这个操作码用来将常量从运行时常量池压栈到操作数栈")])]),t._v(" "),s("tr",[s("td",[t._v("getstatic")]),t._v(" "),s("td",[t._v("这个操作码用来把一个静态变量从运行时常量池的静态变量列表中压栈到操作数栈")])]),t._v(" "),s("tr",[s("td",[t._v("return")]),t._v(" "),s("td",[t._v("这个操作码属于ireturn、lreturn、freturn、dreturn、areturn 和 return 操作码组。每个操作码返回一种类型的返回值，其中 i 表示 int，l 表示 long，f 表示 float，d 表示 double，a 表示 对象引用。没有前缀类型字母的 return 表示返回 void")])])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("函数调用操作码")]),t._v(" "),s("th",[t._v("作用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("invokestatic")]),t._v(" "),s("td",[t._v("调用类方法（静态绑定，速度快）")])]),t._v(" "),s("tr",[s("td",[t._v("invokevirtual")]),t._v(" "),s("td",[t._v("指令调用一个对象的实例方法（动态绑定）")])]),t._v(" "),s("tr",[s("td",[t._v("invokespecial")]),t._v(" "),s("td",[t._v("指令调用实例初始化方法、私有方法、父类方法。（静态绑定，速度快）")])]),t._v(" "),s("tr",[s("td",[t._v("invokeinterface")]),t._v(" "),s("td",[t._v("调用引用类型为interface的实例方法（动态绑定）")])]),t._v(" "),s("tr",[s("td",[t._v("invokedynamic")]),t._v(" "),s("td",[t._v("JDK 7引入的，主要是为了支持动态语言的方法调用")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);