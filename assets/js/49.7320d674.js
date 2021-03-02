(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{466:function(v,a,_){v.exports=_.p+"assets/img/v2-366dd8f3fb00fb465ab0497e69a893dc_1440w.72ce2fcc.jpg"},648:function(v,a,_){"use strict";_.r(a);var r=_(8),t=Object(r.a)({},(function(){var v=this,a=v.$createElement,r=v._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[r("h2",{attrs:{id:"jvm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jvm"}},[v._v("#")]),v._v(" JVM")]),v._v(" "),r("h3",{attrs:{id:"说一下-jvm-的主要组成部分-及其作用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#说一下-jvm-的主要组成部分-及其作用"}},[v._v("#")]),v._v(" 说一下 JVM 的主要组成部分？及其作用？")]),v._v(" "),r("ul",[r("li",[v._v("类加载器（ClassLoader）")]),v._v(" "),r("li",[v._v("运行时数据区（Runtime Data Area）")]),v._v(" "),r("li",[v._v("执行引擎（Execution Engine）")]),v._v(" "),r("li",[v._v("本地库接口（Native Interface）")])]),v._v(" "),r("p",[v._v("组件的作用： 首先通过类加载器（ClassLoader）会把 Java 代码转换成字节码，运行时数据区（Runtime Data Area）再把字节码加载到内存中，而字节码文件只是 JVM 的一套指令集规范，并不能直接交给底层操作系统去执行，因此需要特定的命令解析器执行引擎（Execution Engine），将字节码翻译成底层系统指令，再交由 CPU 去执行，而这个过程中需要调用其他语言的本地库接口（Native Interface）来实现整个程序的功能。")]),v._v(" "),r("h3",{attrs:{id:"说一下-jvm-运行时数据区"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#说一下-jvm-运行时数据区"}},[v._v("#")]),v._v(" 说一下 JVM 运行时数据区？")]),v._v(" "),r("p",[v._v("不同虚拟机的运行时数据区可能略微有所不同，但都会遵从 Java 虚拟机规范， Java 虚拟机规范规定的区域分为以下 5 个部分：")]),v._v(" "),r("p",[v._v("程序计数器（Program Counter Register）：当前线程所执行的字节码的行号指示器，字节码解析器的工作是通过改变这个计数器的值，来选取下一条需要执行的字节码指令，分支、循环、跳转、异常处理、线程恢复等基础功能，都需要依赖这个计数器来完成；")]),v._v(" "),r("p",[v._v("Java 虚拟机栈（Java Virtual Machine Stacks）：用于存储局部变量表、操作数栈、动态链接、方法出口等信息；")]),v._v(" "),r("p",[v._v("本地方法栈（Native Method Stack）：与虚拟机栈的作用是一样的，只不过虚拟机栈是服务 Java 方法的，而本地方法栈是为虚拟机调用 Native 方法服务的；")]),v._v(" "),r("p",[v._v("Java 堆（Java Heap）：Java 虚拟机中内存最大的一块，是被所有线程共享的，几乎所有的对象实例都在这里分配内存；")]),v._v(" "),r("p",[v._v("方法区（Methed Area）：用于存储已被虚拟机加载的类信息、常量、静态变量、即时编译后的代码等数据。")]),v._v(" "),r("h3",{attrs:{id:"说一下堆栈的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#说一下堆栈的区别"}},[v._v("#")]),v._v(" 说一下堆栈的区别？")]),v._v(" "),r("p",[v._v("功能方面：堆是用来存放对象的，栈是用来执行程序的。\n共享性：堆是线程共享的，栈是线程私有的。\n空间大小：堆大小远远大于栈。")]),v._v(" "),r("h3",{attrs:{id:"队列和栈是什么-有什么区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#队列和栈是什么-有什么区别"}},[v._v("#")]),v._v(" 队列和栈是什么？有什么区别？")]),v._v(" "),r("p",[v._v("队列和栈都是被用来预存储数据的。")]),v._v(" "),r("p",[v._v("队列允许先进先出检索元素，但也有例外的情况，Deque 接口允许从两端检索元素。")]),v._v(" "),r("p",[v._v("栈和队列很相似，但它运行对元素进行后进先出进行检索。")]),v._v(" "),r("h3",{attrs:{id:"什么是双亲委派模型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是双亲委派模型"}},[v._v("#")]),v._v(" 什么是双亲委派模型？")]),v._v(" "),r("p",[v._v("在介绍双亲委派模型之前先说下类加载器。对于任意一个类，都需要由加载它的类加载器和这个类本身一同确立在 JVM 中的唯一性，每一个类加载器，都有一个独立的类名称空间。类加载器就是根据指定全限定名称将 class 文件加载到 JVM 内存，然后再转化为 class 对象。")]),v._v(" "),r("p",[v._v("类加载器分类：")]),v._v(" "),r("ul",[r("li",[r("p",[v._v("启动类加载器（Bootstrap ClassLoader），是虚拟机自身的一部分，用来加载Java_HOME/lib/目录中的，或者被 -Xbootclasspath 参数所指定的路径中并且被虚拟机识别的类库；")])]),v._v(" "),r("li",[r("p",[v._v("扩展类加载器（Extension ClassLoader）：负责加载\\lib\\ext 目录或 Java.ext.dirs系统变量指定的路径中的所有类库；")])]),v._v(" "),r("li",[r("p",[v._v("应用程序类加载器（Application ClassLoader）。负责加载用户类路径（classpath）上的指定类库，我们可以直接使用这个类加载器。一般情况，如果我们没有自定义类加载器默认就是用这个加载器。")])])]),v._v(" "),r("p",[v._v("双亲委派模型：如果一个类加载器收到了类加载的请求，它首先不会自己去加载这个类，而是把这个请求委派给父类加载器去完成，每一层的类加载器都是如此，这样所有的加载请求都会被传送到顶层的启动类加载器中，只有当父加载无法完成加载请求（它的搜索范围中没找到所需的类）时，子加载器才会尝试去加载类。")]),v._v(" "),r("h3",{attrs:{id:"如何破坏双亲委派"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何破坏双亲委派"}},[v._v("#")]),v._v(" 如何破坏双亲委派")]),v._v(" "),r("p",[v._v("因为在某些情况下父类加载器需要委托子类加载器去加载class文件。")]),v._v(" "),r("p",[v._v("打破双亲委派机制，即在类加载的时候不是传递到父类加载器中加载，而是由自己加载。此时需要自定义一个类加载器，继承ClassLoader类，然后重写父类的findClass方法和loadClass方法")]),v._v(" "),r("p",[v._v("最主要的是重写loadclass方法，因为双亲委派机制的实现都是通过这个方法实现的，先找父加载器进行加载，如果父加载器无法加载再由自己来进行加载，源码里会直接找到根加载器，重写了这个方法以后就能自己定义加载的方式了")]),v._v(" "),r("h3",{attrs:{id:"说一下类装载的执行过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#说一下类装载的执行过程"}},[v._v("#")]),v._v(" 说一下类装载的执行过程？")]),v._v(" "),r("p",[v._v("类装载分为以下 5 个步骤：")]),v._v(" "),r("ul",[r("li",[v._v("加载：根据查找路径找到相应的 class 文件然后导入；")]),v._v(" "),r("li",[v._v("检查：检查加载的 class 文件的正确性；")]),v._v(" "),r("li",[v._v("准备：给类中的静态变量分配内存空间；")]),v._v(" "),r("li",[v._v("解析：虚拟机将常量池中的符号引用替换成直接引用的过程。符号引用就理解为一个标示，而在直接引用直接指向内存中的地址；")]),v._v(" "),r("li",[v._v("初始化：对静态变量和静态代码块执行初始化工作。")])]),v._v(" "),r("h3",{attrs:{id:"怎么判断对象是否可以被回收"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#怎么判断对象是否可以被回收"}},[v._v("#")]),v._v(" 怎么判断对象是否可以被回收？")]),v._v(" "),r("p",[v._v("一般有两种方法来判断：")]),v._v(" "),r("ul",[r("li",[v._v("引用计数器：为每个对象创建一个引用计数，有对象引用时计数器 +1，引用被释放时计数 -1，当计数器为 0 时就可以被回收。它有一个缺点不能解决循环引用的问题；")]),v._v(" "),r("li",[v._v("可达性分析：从 GC Roots 开始向下搜索，搜索所走过的路径称为引用链。当一个对象到 GC Roots 没有任何引用链相连时，则证明此对象是可以被回收的。")])]),v._v(" "),r("h3",{attrs:{id:"gc-roots"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gc-roots"}},[v._v("#")]),v._v(" GC Roots")]),v._v(" "),r("ul",[r("li",[v._v("虚拟机栈（局部变量表中引用的对象）")]),v._v(" "),r("li",[v._v("本地方法栈（本地方法引用的对象）")]),v._v(" "),r("li",[v._v("方法区中静态属性引用的对象")]),v._v(" "),r("li",[v._v("方法区中静态常量池中引用的对象")])]),v._v(" "),r("h3",{attrs:{id:"java-中都有哪些引用类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#java-中都有哪些引用类型"}},[v._v("#")]),v._v(" Java 中都有哪些引用类型？")]),v._v(" "),r("p",[v._v("强引用：发生 gc 的时候不会被回收。\n软引用：有用但不是必须的对象，在发生内存溢出之前会被回收。\n弱引用：有用但不是必须的对象，在下一次GC时会被回收。\n虚引用（幽灵引用/幻影引用）：无法通过虚引用获得对象，用 PhantomReference 实现虚引用，虚引用的用途是在 gc 时返回一个通知。")]),v._v(" "),r("h3",{attrs:{id:"说一下-jvm-有哪些垃圾回收算法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#说一下-jvm-有哪些垃圾回收算法"}},[v._v("#")]),v._v(" 说一下 JVM 有哪些垃圾回收算法？")]),v._v(" "),r("ul",[r("li",[v._v("标记-清除算法：标记无用对象，然后进行清除回收。缺点：效率不高，无法清除垃圾碎片。")]),v._v(" "),r("li",[v._v("标记-整理算法：标记无用对象，让所有存活的对象都向一端移动，然后直接清除掉端边界以外的内存。 缺点: 整理阶段，由于移动了可用对象，需要去更新引用")]),v._v(" "),r("li",[v._v("复制算法：按照容量划分二个大小相等的内存区域，当一块用完的时候将活着的对象复制到另一块上，然后再把已使用的内存空间一次清理掉。缺点：内存使用率不高，只有原来的一半。")]),v._v(" "),r("li",[v._v("分代算法：根据对象存活周期的不同将内存划分为几块，一般是新生代和老年代，新生代基本采用复制算法，老年代采用标记整理算法。")])]),v._v(" "),r("h3",{attrs:{id:"说一下-jvm-有哪些垃圾回收器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#说一下-jvm-有哪些垃圾回收器"}},[v._v("#")]),v._v(" 说一下 JVM 有哪些垃圾回收器？")]),v._v(" "),r("p",[v._v("Serial：最早的单线程串行垃圾回收器。\nSerial Old：Serial 垃圾回收器的老年版本，同样也是单线程的，可以作为 CMS 垃圾回收器的备选预案。\nParNew：是 Serial 的多线程版本。\nParallel 和 ParNew 收集器类似是多线程的，但 Parallel 是吞吐量优先的收集器，可以牺牲等待时间换取系统的吞吐量。\nParallel Old 是 Parallel 老生代版本，Parallel 使用的是复制的内存回收算法，Parallel Old 使用的是标记-整理的内存回收算法。\nCMS：一种以获得最短停顿时间为目标的收集器，非常适用 B/S 系统。\nG1：一种兼顾吞吐量和停顿时间的 GC 实现，是 JDK 9 以后的默认 GC 选项。")]),v._v(" "),r("h3",{attrs:{id:"详细介绍一下-cms-垃圾回收器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#详细介绍一下-cms-垃圾回收器"}},[v._v("#")]),v._v(" 详细介绍一下 CMS 垃圾回收器？")]),v._v(" "),r("p",[v._v("CMS 是英文 Concurrent Mark-Sweep 的简称，是以牺牲吞吐量为代价来获得最短回收停顿时间的垃圾回收器。对于要求服务器响应速度的应用上，这种垃圾回收器非常适合。在启动 JVM 的参数加上“-XX:+UseConcMarkSweepGC”来指定使用 CMS 垃圾回收器。")]),v._v(" "),r("p",[v._v("CMS 使用的是标记-清除的算法实现的，所以在 gc 的时候回产生大量的内存碎片，当剩余内存不能满足程序运行要求时，系统将会出现 Concurrent Mode Failure，临时 CMS 会采用 Serial Old 回收器进行垃圾清除，此时的性能将会被降低。")]),v._v(" "),r("h3",{attrs:{id:"新生代垃圾回收器和老生代垃圾回收器都有哪些-有什么区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#新生代垃圾回收器和老生代垃圾回收器都有哪些-有什么区别"}},[v._v("#")]),v._v(" 新生代垃圾回收器和老生代垃圾回收器都有哪些？有什么区别？")]),v._v(" "),r("p",[v._v("新生代回收器：Serial、ParNew、Parallel Scavenge\n老年代回收器：Serial Old、Parallel Old、CMS\n整堆回收器：G1\n新生代垃圾回收器一般采用的是复制算法，复制算法的优点是效率高，缺点是内存利用率低；老年代回收器一般采用的是标记-整理的算法进行垃圾回收。")]),v._v(" "),r("h3",{attrs:{id:"简述分代垃圾回收器是怎么工作的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简述分代垃圾回收器是怎么工作的"}},[v._v("#")]),v._v(" 简述分代垃圾回收器是怎么工作的？")]),v._v(" "),r("p",[v._v("分代回收器有两个分区：老生代和新生代，新生代默认的空间占比总空间的 1/3，老生代的默认占比是 2/3。")]),v._v(" "),r("p",[v._v("新生代使用的是复制算法，新生代里有 3 个分区：Eden、To Survivor、From Survivor，它们的默认占比是 8:1:1，它的执行流程如下：")]),v._v(" "),r("p",[v._v("把 Eden + From Survivor 存活的对象放入 To Survivor 区；\n清空 Eden 和 From Survivor 分区；\nFrom Survivor 和 To Survivor 分区交换，From Survivor 变 To Survivor，To Survivor 变 From Survivor。\n每次在 From Survivor 到 To Survivor 移动时都存活的对象，年龄就 +1，当年龄到达 15（默认配置是 15）时，升级为老生代。大对象也会直接进入老生代。")]),v._v(" "),r("p",[v._v("老生代当空间占用到达某个值之后就会触发全局垃圾收回，一般使用标记整理的执行算法。以上这些循环往复就构成了整个分代垃圾回收的整体执行流程。")]),v._v(" "),r("h3",{attrs:{id:"常用的-jvm-调优的参数都有哪些"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常用的-jvm-调优的参数都有哪些"}},[v._v("#")]),v._v(" 常用的 JVM 调优的参数都有哪些？")]),v._v(" "),r("ul",[r("li",[v._v("-Xms2g：初始化推大小为 2g；")]),v._v(" "),r("li",[v._v("-Xmx2g：堆最大内存为 2g；")]),v._v(" "),r("li",[v._v("-XX:NewSize -XX:MaxNewSize 用于设置年轻代的大小，建议设为整个堆大小的1/3或者1/4,两个值设为一样大。")]),v._v(" "),r("li",[v._v("-XX:NewRatio=4：设置年轻的和老年代的内存比例为 1:4；")]),v._v(" "),r("li",[v._v("-XX:SurvivorRatio=8：设置新生代 Eden 和 Survivor 比例为 8:2；")]),v._v(" "),r("li",[v._v("–XX:+UseParNewGC：指定使用 ParNew + Serial Old 垃圾回收器组合；")]),v._v(" "),r("li",[v._v("-XX:+UseParallelOldGC：指定使用 ParNew + ParNew Old 垃圾回收器组合；")]),v._v(" "),r("li",[v._v("-XX:+UseConcMarkSweepGC：指定使用 CMS + Serial Old 垃圾回收器组合；")]),v._v(" "),r("li",[v._v("-XX:+PrintGC：开启打印 gc 信息；")]),v._v(" "),r("li",[v._v("-XX:+PrintGCDetails：打印 gc 详细信息。")]),v._v(" "),r("li",[v._v("-XX:+PrintTenuringDistribution 这个参数用于显示每次Minor GC时Survivor区中各个年龄段的对象的大小。")]),v._v(" "),r("li",[v._v("-XX:InitialTenuringThreshol和-XX:MaxTenuringThreshold 用于设置晋升到老年代的对象年龄的最小值和最大值，每个对象在坚持过一次Minor GC之后，年龄就加1。")])]),v._v(" "),r("h3",{attrs:{id:"内存溢出和内存泄漏"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#内存溢出和内存泄漏"}},[v._v("#")]),v._v(" 内存溢出和内存泄漏")]),v._v(" "),r("ul",[r("li",[v._v("内存泄漏memory leak : 是指程序在申请内存后，无法释放已申请的内存空间，一次内存泄漏似乎不会有大的影响，但内存泄漏堆积后的后果就是内存溢出。")]),v._v(" "),r("li",[v._v("内存溢出 out of memory :指程序申请内存时，没有足够的内存供申请者使用，或者说，给了你一块存储int类型数据的存储空间，但是你却存储long类型的数据，那么结果就是内存不够用，此时就会报错OOM,即所谓的内存溢出")])]),v._v(" "),r("h4",{attrs:{id:"内存溢出"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#内存溢出"}},[v._v("#")]),v._v(" 内存溢出")]),v._v(" "),r("p",[v._v("1.内存中加载的数据量过于庞大，如一次从数据库取出过多数据；\n2.集合类中有对对象的引用，使用完后未清空，使得JVM不能回收；\n3.代码中存在死循环或循环产生过多重复的对象实体；\n4.使用的第三方软件中的BUG；\n5.启动参数内存值设定的过小")]),v._v(" "),r("h4",{attrs:{id:"内存泄漏"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#内存泄漏"}},[v._v("#")]),v._v(" 内存泄漏")]),v._v(" "),r("ol",[r("li",[v._v("static 字段引起的内存泄露")])]),v._v(" "),r("p",[v._v("在Java中，静态字段通常拥有与整个应用程序相匹配的生命周期")]),v._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[r("p",[v._v("未关闭的资源导致内存泄露")])]),v._v(" "),r("li",[r("p",[v._v("使用ThreadLocal造成内存泄露")])])]),v._v(" "),r("p",[v._v("不在使用ThreadLocal时，调用remove()方法，该方法删除了此变量的当前线程值")]),v._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[r("p",[v._v("常量字符串造成的内存泄露")])]),v._v(" "),r("li",[r("p",[v._v("finalize()方法造成的内存泄露")])])]),v._v(" "),r("p",[v._v("重写finalize()方法时，该类的对象不会立即被垃圾收集器收集，如果finalize()方法的代码有问题，那么会潜在的引发OOM")]),v._v(" "),r("p",[v._v("解决办法：避免重写finalize()。")]),v._v(" "),r("h3",{attrs:{id:"jvm-8-1-1"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jvm-8-1-1"}},[v._v("#")]),v._v(" jvm 8:1:1")]),v._v(" "),r("p",[v._v("GC是统计学测算出当内存使用超过98%以上时，内存就应该被minor gc时回收一次")]),v._v(" "),r("p",[v._v("一句话每次GC范围是eden区+一个S区。这里的eden区（80%） 和其中的一个  S区（10%） 合起来共占据90%，GC就是清理的他们，始终保持着其中一个  S  区是空留的，保证GC的时候复制存活的对象有个存储的地方")]),v._v(" "),r("h3",{attrs:{id:"青年代gc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#青年代gc"}},[v._v("#")]),v._v(" 青年代gc")]),v._v(" "),r("p",[v._v("年轻代的垃圾回收算法使用的是复制算法，复制算法的基本思想就是将内存分为两块，每次只用其中一块，当这一块内存用完，就将还活着的对象复制到另外一块上面")]),v._v(" "),r("p",[v._v("在GC开始的时候，对象只会存在于Eden区和名为“From”的Survivor区，Survivor区“To”是空的。")]),v._v(" "),r("ol",[r("li",[v._v("Eden区中所有存活的对象都会被复制到“To” 年龄加一")]),v._v(" "),r("li",[v._v("在“From”区中，仍存活的对象会根据他们的年龄值来决定去向，低于15 复制到 to,大于15 进入老年代")]),v._v(" "),r("li",[v._v("经过这次GC后，Eden区和From区已经被清空")]),v._v(" "),r("li",[v._v("From 和 TO  角色互换")])]),v._v(" "),r("p",[v._v("年龄达到一定值(年龄阈值，可以通过-XX:MaxTenuringThreshold=15来设置)")]),v._v(" "),r("h3",{attrs:{id:"老年代gc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#老年代gc"}},[v._v("#")]),v._v(" 老年代gc")]),v._v(" "),r("p",[v._v("采用标记—清除算法：首先扫描一次所有老年代，标记出存活的对象，然后回收没有标记的对象")]),v._v(" "),r("h3",{attrs:{id:"cms-和g1-区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cms-和g1-区别"}},[v._v("#")]),v._v(" CMS 和G1 区别")]),v._v(" "),r("p",[v._v("CMS（Concurrent Mark Sweep）多路并行收集器是一种以获取最短回收停顿时间为目标的收集器")]),v._v(" "),r("p",[v._v("CMS收集器仅作用于老年代的收集，是基于标记-清除算法的，它的运作过程分为4个步骤：")]),v._v(" "),r("ul",[r("li",[v._v("初始标记（CMS initial mark）")]),v._v(" "),r("li",[v._v("并发标记（CMS concurrent mark）")]),v._v(" "),r("li",[v._v("重新标记（CMS remark）")]),v._v(" "),r("li",[v._v("并发清除（CMS concurrent sweep）")])]),v._v(" "),r("p",[v._v("CMS收集器优点：并发收集、低停顿。")]),v._v(" "),r("p",[v._v("CMS收集器缺点：")]),v._v(" "),r("ul",[r("li",[v._v("CMS收集器对CPU资源非常敏感。")]),v._v(" "),r("li",[v._v("CMS收集器无法处理浮动垃圾（Floating Garbage）。")]),v._v(" "),r("li",[v._v("CMS收集器是基于标记-清除算法，导致收集结束时会有大量空间碎片产生")])]),v._v(" "),r("p",[v._v("G1收集器")]),v._v(" "),r("p",[v._v("是一款面向服务器的垃圾收集器,主要针对配备多颗处理器及大容量内存的机器. 以极高概率满足 GC 停顿时间要求的同时,还具备高吞吐量性能特征")]),v._v(" "),r("p",[v._v("G1重新定义了堆空间，打破了原有的分代模型，将堆划分为一个个区域")]),v._v(" "),r("ul",[r("li",[v._v("初始标记（Initial Marking）：仅仅只是标记一下GC Roots能直接关联到的对象，并且修改TAMS（Next Top at Mark Start）的值，让下一阶段用户程序并发运行时，能在正确可用的Region中创建新对象，这阶段需要停顿线程，但耗时很短。")]),v._v(" "),r("li",[v._v("并发标记（Concurrent Marking）：是从GC Roots开始堆中对象进行可达性分析，找出存活的对象，这阶段耗时较长，但可与用户程序并发执行。")]),v._v(" "),r("li",[v._v("最终标记（Final Marking）：是为了修正并发标记期间因用户程序继续运作而导致标记产生变动的那一部分标记记录，虚拟机将这段时间对象变化记录在线程Remembered Set Logs里面，最终标记阶段需要把Remembered Set Logs的数据合并到Remembered Set中，这阶段需要停顿线程，但是可并行执行。")]),v._v(" "),r("li",[v._v("筛选回收（Live Data Counting and Evacuation")])]),v._v(" "),r("p",[v._v("cms: 标记清除+并发算法\ng1: 标记-复制+增量算法+并发算法")]),v._v(" "),r("p",[v._v("新生代收集器：Serial、ParNew、Parallel Scavenge")]),v._v(" "),r("p",[v._v("老年代收集器：CMS、Serial Old、Parallel Old")]),v._v(" "),r("p",[v._v("整堆收集器： G1")]),v._v(" "),r("h3",{attrs:{id:"jvm-大对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jvm-大对象"}},[v._v("#")]),v._v(" jvm 大对象")]),v._v(" "),r("ol",[r("li",[v._v("对于一个大对象，我们会首先在Eden 尝试创建，如果创建不了，就会触发Minor GC")]),v._v(" "),r("li",[v._v("随后继续尝试在Eden区存放，发现仍然放不下")]),v._v(" "),r("li",[v._v("尝试直接进入老年代，老年代也放不下")]),v._v(" "),r("li",[v._v("触发 Major GC 清理老年代的空间")]),v._v(" "),r("li",[v._v("放的下 成功")]),v._v(" "),r("li",[v._v("放不下 OOM")])]),v._v(" "),r("p",[r("img",{attrs:{src:_(466),alt:""}})]),v._v(" "),r("h3",{attrs:{id:"避免频繁的full-gc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#避免频繁的full-gc"}},[v._v("#")]),v._v(" 避免频繁的Full GC")]),v._v(" "),r("ul",[r("li",[v._v("避免定义过大的对象(数组)")]),v._v(" "),r("li",[v._v("避免将过大对象定义为静态变量")])]),v._v(" "),r("h3",{attrs:{id:"频繁的full-gc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#频繁的full-gc"}},[v._v("#")]),v._v(" 频繁的Full GC")]),v._v(" "),r("ol",[r("li",[v._v("判断是否有大量处理的任务")]),v._v(" "),r("li",[v._v("查看堆区")])]),v._v(" "),r("h3",{attrs:{id:"stoptheworld"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#stoptheworld"}},[v._v("#")]),v._v(" StopTheWorld")]),v._v(" "),r("p",[v._v("在垃圾回收过程中经常涉及到对对象的挪动（比如上文提到的对象在Survivor 0和Survivor 1之间的复制），进而导致需要对对象引用进行更新。为了保证引用更新的正确性，Java将暂停所有其他的线程，这种情况被称为“Stop-The-World”，导致系统全局停顿")]),v._v(" "),r("h3",{attrs:{id:"安全点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安全点"}},[v._v("#")]),v._v(" 安全点")]),v._v(" "),r("p",[v._v("jvm需要进入安全点的事情有：gc、代码优化、加载类、取消偏向锁等")]),v._v(" "),r("p",[v._v("-XX:+PrintSafepointStatistics\n-XX:PrintSafepointStatisticsCount=1")]),v._v(" "),r("p",[v._v("安全点是在程序执行期间的所有GC Root已知并且所有堆对象的内容一致的点。\n从全局的角度来看，所有线程必须在GC运行之前在安全点阻塞。 （作为一种特殊情况，运行JNI代码的线程可以继续运行，因为它们只使用句柄。但在安全点期间，它们必须阻塞而不是加载句柄的内容。）\n从本地的角度来看，安全点是一个显着的点，它位于执行线程可能阻止GC的代码块中。 大多数调用点都能当做安全点。\n在每个安全点都存在强大的不变量永远保持true不变，而在非安全点可能会被忽视。 编译的Java代码和C / C ++代码都在安全点之间进行了优化，但跨安全点时却不那么优化。 JIT编译器在每个安全点发出GC映射。 VM中的C / C ++代码使用程式化的基于宏的约定（例如，TRAPS）来标记潜在的安全点。")]),v._v(" "),r("p",[v._v("总的来说，安全点就是指，当线程运行到这类位置时，堆对象状态是确定一致的，JVM可以安全地进行操作，如GC，偏向锁解除等")]),v._v(" "),r("p",[v._v("HotSpot中，安全点位置主要在：")]),v._v(" "),r("ul",[r("li",[v._v("方法返回之前")]),v._v(" "),r("li",[v._v("调用某个方法之后")]),v._v(" "),r("li",[v._v("抛出异常的位置")]),v._v(" "),r("li",[v._v("循环的末尾")])]),v._v(" "),r("h3",{attrs:{id:"安全点应用场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安全点应用场景"}},[v._v("#")]),v._v(" 安全点应用场景")]),v._v(" "),r("ol",[r("li",[v._v("GC STW")]),v._v(" "),r("li",[v._v("偏向锁释放")])]),v._v(" "),r("h3",{attrs:{id:"分代的优点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分代的优点"}},[v._v("#")]),v._v(" 分代的优点")]),v._v(" "),r("ol",[r("li",[v._v("不同代采用不同的gc算法")]),v._v(" "),r("li",[v._v("堆里的对象大部分的生存时间较短，可以减少full gc的次数")])]),v._v(" "),r("h3",{attrs:{id:"tomcat中的双亲委派模型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tomcat中的双亲委派模型"}},[v._v("#")]),v._v(" Tomcat中的双亲委派模型")]),v._v(" "),r("p",[v._v("CommonClassLoader\\CatalinaClassLoader\\SharedClassLoader\\WebAppClassLoader")]),v._v(" "),r("ol",[r("li",[v._v("隔离性")])]),v._v(" "),r("p",[v._v("Web应用项目包之间相互隔离，避免库相互依赖和应用包相互影响。比如：在一个端口配置两个应用包，这两个应用包之间除了某些三方依赖包版本不一样外，其他都一样。这时如果采用同一个类加载器，会不会出问题？答案是肯定的（包的三方依赖包会被覆盖，而导致其中一个应用无法正常启动）")]),v._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[v._v("灵活性")])])])}),[],!1,null,null,null);a.default=t.exports}}]);