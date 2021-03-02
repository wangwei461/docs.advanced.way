(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{637:function(a,s,t){"use strict";t.r(s);var n=t(8),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("vmstat 测量上下文切换的次数")]),a._v(" "),t("h4",{attrs:{id:"如何减少上下文切换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何减少上下文切换"}},[a._v("#")]),a._v(" 如何减少上下文切换")]),a._v(" "),t("ul",[t("li",[a._v("无锁编程")]),a._v(" "),t("li",[a._v("cas算法")]),a._v(" "),t("li",[a._v("使用最少线程")]),a._v(" "),t("li",[a._v("协程")])]),a._v(" "),t("h5",{attrs:{id:"统计线程状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#统计线程状态"}},[a._v("#")]),a._v(" 统计线程状态")]),a._v(" "),t("blockquote",[t("p",[a._v("jstack能得到运行java程序的java stack和native stack的信息。")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("jstack pid > filename\ngrep java.lang.Thread.State filename | awk '{print $2$3$4$5}' | sort | uniq -c\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h5",{attrs:{id:"死锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#死锁"}},[a._v("#")]),a._v(" 死锁")]),a._v(" "),t("p",[a._v("指多个进程在运行过程中因争夺资源而造成的一种僵局，当进程处于这种僵持状态时，若无外力作用，它们都将无法再向前推进")]),a._v(" "),t("h5",{attrs:{id:"jvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm"}},[a._v("#")]),a._v(" jvm")]),a._v(" "),t("h5",{attrs:{id:"线程状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程状态"}},[a._v("#")]),a._v(" 线程状态")]),a._v(" "),t("p",[a._v("http://www.cnblogs.com/zhengyun_ustc/archive/2013/01/06/dumpanalysis.html")]),a._v(" "),t("ul",[t("li",[a._v("死锁，Deadlock（重点关注）")]),a._v(" "),t("li",[a._v("执行中，Runnable")]),a._v(" "),t("li",[a._v("等待资源，Waiting on condition（重点关注）")]),a._v(" "),t("li",[a._v("等待获取监视器，Waiting on monitor entry（重点关注）")]),a._v(" "),t("li",[a._v("暂停，Suspended")]),a._v(" "),t("li",[a._v("对象等待中，Object.wait() 或 TIMED_WAITING")]),a._v(" "),t("li",[a._v("阻塞，Blocked（重点关注）")]),a._v(" "),t("li",[a._v("停止，Parked")])]),a._v(" "),t("h5",{attrs:{id:"jstat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jstat"}},[a._v("#")]),a._v(" jstat")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("- S0C : survivor0区的总容量\n- S1C : survivor1区的总容量\n- S0U : survivor0区已使用的容量\n- S1C : survivor1区已使用的容量\n- EC : Eden区的总容量\n- EU : Eden区已使用的容量\n- OC : Old区的总容量\n- OU : Old区已使用的容量\n- PC 当前perm的容量 (KB)\n- PU perm的使用 (KB)\n- YGC : 新生代垃圾回收次数\n- YGCT : 新生代垃圾回收时间\n- FGC : 老年代垃圾回收次数\n- FGCT : 老年代垃圾回收时间\n- GCT : 垃圾回收总消耗时间\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);