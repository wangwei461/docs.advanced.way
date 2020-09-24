(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{461:function(a,t,s){"use strict";s.r(t);var r=s(25),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"native"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#native"}},[a._v("#")]),a._v(" native")]),a._v(" "),s("p",[a._v("作用于方法上，Native Method就是一个java调用非java代码的接口")]),a._v(" "),s("h3",{attrs:{id:"原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[a._v("#")]),a._v(" 原理")]),a._v(" "),s("p",[a._v("当一个类第一次被使用到时，这个类的字节码会被加载到内存，并且只会回载一次。\n在这个被加载的字节码的入口维持着一个该类所有方法描述符的list，这些方法描述符包含这样一些信息：方法代码存于何处，它有哪些参数，方法的描述符（public之类）等等。\n如果一个方法描述符内有native，这个描述符块将有一个指向该方法的实现的指针。\n这些实现在一些DLL文件内，但是它们会被操作系统加载到java程序的地址空间。当一个带有本地方法的类被加载时，其相关的DLL并未被加载，因此指向方法实现的指针并不会被设置。\n当本地方法被调用之前，这些DLL才会被加载，这是通过调用java.system.loadLibrary()实现的")]),a._v(" "),s("h2",{attrs:{id:"transient"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transient"}},[a._v("#")]),a._v(" transient")]),a._v(" "),s("p",[a._v("用transient关键字标记的成员变量不参与序列化过程")]),a._v(" "),s("h2",{attrs:{id:"final"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#final"}},[a._v("#")]),a._v(" final")]),a._v(" "),s("h3",{attrs:{id:"修饰一个引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修饰一个引用"}},[a._v("#")]),a._v(" 修饰一个引用")]),a._v(" "),s("ul",[s("li",[a._v("修饰基本数据类型，则该引用为常量，该值无法修改；")]),a._v(" "),s("li",[a._v("修饰引用数据类型，比如对象、数组，则该对象、数组本身可以修改，但指向该对象或数组的地址的引用不能修改。")]),a._v(" "),s("li",[a._v("修饰类的成员变量，则必须当场赋值，否则编译会报错")])]),a._v(" "),s("h3",{attrs:{id:"修饰方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修饰方法"}},[a._v("#")]),a._v(" 修饰方法")]),a._v(" "),s("p",[a._v("这个方法将成为最终方法，无法被子类重写，可以被继承")]),a._v(" "),s("h3",{attrs:{id:"修饰类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修饰类"}},[a._v("#")]),a._v(" 修饰类")]),a._v(" "),s("p",[a._v("当用final修改类时，该类成为最终类，无法被继承")])])}),[],!1,null,null,null);t.default=e.exports}}]);