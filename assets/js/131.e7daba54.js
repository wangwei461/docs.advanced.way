(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{666:function(a,s,t){"use strict";t.r(s);var n=t(27),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"native"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#native"}},[a._v("#")]),a._v(" native")]),a._v(" "),t("p",[a._v("作用于方法上，Native Method就是一个java调用非java代码的接口")]),a._v(" "),t("h3",{attrs:{id:"原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[a._v("#")]),a._v(" 原理")]),a._v(" "),t("p",[a._v("当一个类第一次被使用到时，这个类的字节码会被加载到内存，并且只会回载一次。\n在这个被加载的字节码的入口维持着一个该类所有方法描述符的list，这些方法描述符包含这样一些信息：方法代码存于何处，它有哪些参数，方法的描述符（public之类）等等。\n如果一个方法描述符内有native，这个描述符块将有一个指向该方法的实现的指针。\n这些实现在一些DLL文件内，但是它们会被操作系统加载到java程序的地址空间。当一个带有本地方法的类被加载时，其相关的DLL并未被加载，因此指向方法实现的指针并不会被设置。\n当本地方法被调用之前，这些DLL才会被加载，这是通过调用java.system.loadLibrary()实现的")]),a._v(" "),t("h2",{attrs:{id:"transient"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transient"}},[a._v("#")]),a._v(" transient")]),a._v(" "),t("p",[a._v("用transient关键字标记的成员变量不参与序列化过程")]),a._v(" "),t("h2",{attrs:{id:"final"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#final"}},[a._v("#")]),a._v(" final")]),a._v(" "),t("h3",{attrs:{id:"修饰一个引用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修饰一个引用"}},[a._v("#")]),a._v(" 修饰一个引用")]),a._v(" "),t("ul",[t("li",[a._v("修饰基本数据类型，则该引用为常量，该值无法修改；")]),a._v(" "),t("li",[a._v("修饰引用数据类型，比如对象、数组，则该对象、数组本身可以修改，但指向该对象或数组的地址的引用不能修改。")]),a._v(" "),t("li",[a._v("修饰类的成员变量，则必须当场赋值，否则编译会报错")])]),a._v(" "),t("h3",{attrs:{id:"修饰方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修饰方法"}},[a._v("#")]),a._v(" 修饰方法")]),a._v(" "),t("p",[a._v("这个方法将成为最终方法，无法被子类重写，可以被继承")]),a._v(" "),t("h3",{attrs:{id:"修饰类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修饰类"}},[a._v("#")]),a._v(" 修饰类")]),a._v(" "),t("p",[a._v("当用final修改类时，该类成为最终类，无法被继承")]),a._v(" "),t("h2",{attrs:{id:"abstract"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[a._v("#")]),a._v(" abstract")]),a._v(" "),t("ol",[t("li",[a._v("抽象类不能被实例化(初学者很容易犯的错)，如果被实例化，就会报错，编译无法通过。只有抽象类的非抽象子类可以创建对象。")]),a._v(" "),t("li",[a._v("抽象类中不一定包含抽象方法，但是有抽象方法的类必定是抽象类。")]),a._v(" "),t("li",[a._v("抽象类中的抽象方法只是声明，不包含方法体，就是不给出方法的具体实现也就是方法的具体功能。")]),a._v(" "),t("li",[a._v("构造方法，类方法（用 static 修饰的方法）不能声明为抽象方法。")]),a._v(" "),t("li",[a._v("抽象类的子类必须给出抽象类中的抽象方法的具体实现，除非该子类也是抽象类")])]),a._v(" "),t("h3",{attrs:{id:"抽象类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#抽象类"}},[a._v("#")]),a._v(" 抽象类")]),a._v(" "),t("blockquote",[t("p",[a._v("如果一个类中没有包含足够的信息来描绘一个具体的对象，这样的类就是抽象类。")])]),a._v(" "),t("p",[a._v("抽象类除了不能实例化对象之外，类的其它功能依然存在，成员变量、成员方法和构造方法的访问方式和普通类一样。\n由于抽象类不能实例化对象，所以抽象类必须被继承，才能被使用")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("abstract")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AbstractClassName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("  \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 必须被继承")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AbstractClassName")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClassName")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("案例:")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("abstract")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Demo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 编译警告: 'Demo' is abstract; cannot be instantiated")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Demo")]),a._v(" d "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Demo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("h3",{attrs:{id:"抽象方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#抽象方法"}},[a._v("#")]),a._v(" 抽象方法")]),a._v(" "),t("p",[a._v("抽象方法没有定义，方法名后面直接跟一个分号，而不是花括号")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("abstract")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AbstractClassName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("abstract")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("method")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("ul",[t("li",[a._v("如果一个类包含抽象方法，那么该类必须是抽象类。")]),a._v(" "),t("li",[a._v("任何子类必须重写父类的抽象方法，或者声明自身为抽象类")])]),a._v(" "),t("h2",{attrs:{id:"super"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#super"}},[a._v("#")]),a._v(" super")]),a._v(" "),t("p",[a._v("是一个指代变量，用于在子类中指代父类对象")]),a._v(" "),t("p",[a._v("三种使用情况:")]),a._v(" "),t("ul",[t("li",[a._v("访问父类的方法")]),a._v(" "),t("li",[a._v("调用父类构造方法")]),a._v(" "),t("li",[a._v("访问父类中的隐藏成员变量")])])])}),[],!1,null,null,null);s.default=e.exports}}]);