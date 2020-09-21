(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{443:function(t,r,n){"use strict";n.r(r);var i=n(25),a=Object(i.a)({},(function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"string-相关类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#string-相关类"}},[t._v("#")]),t._v(" String 相关类")]),t._v(" "),n("blockquote",[n("p",[t._v("String 被声明为 final，因此它不可被继承。"),n("br"),t._v("\n在 Java 8 中，String 内部使用 char 数组存储数据"),n("br"),t._v("\n在 Java 9 之后，String 类的实现改用 byte 数组存储字符串，同时使用 coder 来标识使用了哪种编码")])]),t._v(" "),n("p",[t._v("不可变的优点")]),t._v(" "),n("ol",[n("li",[t._v("可以缓存 hash 值")]),t._v(" "),n("li",[t._v("String Pool 的需要")]),t._v(" "),n("li",[t._v("安全性")]),t._v(" "),n("li",[t._v("线程安全")])]),t._v(" "),n("h4",{attrs:{id:"new-string-abc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#new-string-abc"}},[t._v("#")]),t._v(' new String("abc")')]),t._v(" "),n("p",[t._v('使用这种方式一共会创建两个字符串对象（前提是 String Pool 中还没有 "abc" 字符串对象）。')]),t._v(" "),n("blockquote",[n("ol",[n("li",[t._v('"abc" 属于字符串字面量，因此编译时期会在 String Pool 中创建一个字符串对象，指向这个 "abc" 字符串字面量；')]),t._v(" "),n("li",[t._v("而使用 new 的方式会在堆中创建一个字符串对象。")])])]),t._v(" "),n("h4",{attrs:{id:"string-stringbuffer-and-stringbuilder区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#string-stringbuffer-and-stringbuilder区别"}},[t._v("#")]),t._v(" String, StringBuffer and StringBuilder区别")]),t._v(" "),n("ol",[n("li",[t._v("可变性")])]),t._v(" "),n("blockquote",[n("p",[t._v("String 不可变\nStringBuffer 和 StringBuilder 可变")])]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[t._v("线程安全")])]),t._v(" "),n("blockquote",[n("p",[t._v("String 不可变，因此是线程安全的"),n("br"),t._v("\nStringBuilder 不是线程安全的"),n("br"),t._v("\nStringBuffer 是线程安全的，内部使用 synchronized 进行同步")])])])}),[],!1,null,null,null);r.default=a.exports}}]);