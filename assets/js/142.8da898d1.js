(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{689:function(a,t,e){"use strict";e.r(t);var r=e(27),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"基础篇"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础篇"}},[a._v("#")]),a._v(" 基础篇")]),a._v(" "),e("h3",{attrs:{id:"和-equals-的区别是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#和-equals-的区别是什么"}},[a._v("#")]),a._v(" == 和 equals 的区别是什么？")]),a._v(" "),e("p",[e("code",[a._v("==")]),a._v(" 可以比较基本类型和引用类型")]),a._v(" "),e("p",[a._v("基本类型：比较的是值是否相同\n引用类型：比较的是引用是否相同")]),a._v(" "),e("p",[e("code",[a._v("equals")]),a._v(" 本质上就是 ==，只不过 String 和 Integer 等重写了 equals 方法，把它变成了值比较")]),a._v(" "),e("h3",{attrs:{id:"final-在-java-中有什么作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#final-在-java-中有什么作用"}},[a._v("#")]),a._v(" final 在 Java 中有什么作用？")]),a._v(" "),e("ul",[e("li",[a._v("final 修饰的类叫最终类，该类不能被继承。")]),a._v(" "),e("li",[a._v("final 修饰的方法不能被重写。")]),a._v(" "),e("li",[a._v("final 修饰的变量叫常量，常量必须初始化，初始化之后值就不能被修改")])]),a._v(" "),e("h3",{attrs:{id:"string、stringbuffer、stringbuilder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#string、stringbuffer、stringbuilder"}},[a._v("#")]),a._v(" String、StringBuffer、StringBuilder")]),a._v(" "),e("p",[a._v("性能: StringBuilder > StringBuffer")]),a._v(" "),e("p",[a._v("线程安全: StringBuffer")]),a._v(" "),e("h3",{attrs:{id:"string-str-i-与-string-str-new-string-i-一样吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#string-str-i-与-string-str-new-string-i-一样吗"}},[a._v("#")]),a._v(' String str="i" 与 String str=new String("i")一样吗？')]),a._v(" "),e("p",[a._v("不一样，因为内存的分配方式不一样。")]),a._v(" "),e("p",[a._v('String str="i"的方式，Java 虚拟机会将其分配到常量池中；')]),a._v(" "),e("p",[a._v('而 String str=new String("i") 则会被分到堆内存中。')]),a._v(" "),e("h3",{attrs:{id:"如何将字符串反转"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何将字符串反转"}},[a._v("#")]),a._v(" 如何将字符串反转？")]),a._v(" "),e("p",[a._v("使用 StringBuilder 或者 stringBuffer 的 "),e("strong",[a._v("reverse()")]),a._v(" 方法。")]),a._v(" "),e("h3",{attrs:{id:"string-类的常用方法都有那些"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#string-类的常用方法都有那些"}},[a._v("#")]),a._v(" String 类的常用方法都有那些？")]),a._v(" "),e("ul",[e("li",[a._v("indexOf()：返回指定字符的索引。")]),a._v(" "),e("li",[a._v("charAt()：返回指定索引处的字符。")]),a._v(" "),e("li",[a._v("replace()：字符串替换。")]),a._v(" "),e("li",[a._v("trim()：去除字符串两端空白。")]),a._v(" "),e("li",[a._v("split()：分割字符串，返回一个分割后的字符串数组。")]),a._v(" "),e("li",[a._v("getBytes()：返回字符串的 byte 类型数组。")]),a._v(" "),e("li",[a._v("length()：返回字符串长度。")]),a._v(" "),e("li",[a._v("toLowerCase()：将字符串转成小写字母。")]),a._v(" "),e("li",[a._v("toUpperCase()：将字符串转成大写字符。")]),a._v(" "),e("li",[a._v("substring()：截取字符串。")]),a._v(" "),e("li",[a._v("equals()：字符串比较。")])]),a._v(" "),e("h3",{attrs:{id:"抽象类必须要有抽象方法吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#抽象类必须要有抽象方法吗"}},[a._v("#")]),a._v(" 抽象类必须要有抽象方法吗？")]),a._v(" "),e("p",[a._v("不需要，抽象类不一定非要有抽象方法。抽象方法一定在抽象类中")]),a._v(" "),e("h3",{attrs:{id:"普通类和抽象类有哪些区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#普通类和抽象类有哪些区别"}},[a._v("#")]),a._v(" 普通类和抽象类有哪些区别？")]),a._v(" "),e("ul",[e("li",[a._v("普通类不能包含抽象方法，抽象类可以包含抽象方法。")]),a._v(" "),e("li",[a._v("抽象类不能直接实例化，普通类可以直接实例化")])]),a._v(" "),e("h3",{attrs:{id:"接口和抽象类有什么区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#接口和抽象类有什么区别"}},[a._v("#")]),a._v(" 接口和抽象类有什么区别？")]),a._v(" "),e("ul",[e("li",[a._v("实现：抽象类的子类使用 extends 来继承；接口必须使用 implements 来实现接口。")]),a._v(" "),e("li",[a._v("构造函数：抽象类可以有构造函数；接口不能有。")]),a._v(" "),e("li",[a._v("实现数量：类可以实现很多个接口；但是只能继承一个抽象类。")]),a._v(" "),e("li",[a._v("访问修饰符：接口中的方法默认使用 public 修饰；抽象类中的方法可以是任意访问修饰符")])]),a._v(" "),e("h3",{attrs:{id:"抽象类能使用-final-修饰吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#抽象类能使用-final-修饰吗"}},[a._v("#")]),a._v(" 抽象类能使用 final 修饰吗？")]),a._v(" "),e("p",[a._v("不能，定义抽象类就是让其他类继承的，如果定义为 final 该类就不能被继承，这样彼此就会产生矛盾，所以 final 不能修饰抽象类")]),a._v(" "),e("h3",{attrs:{id:"java-中-io-流分为几种"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java-中-io-流分为几种"}},[a._v("#")]),a._v(" Java 中 IO 流分为几种？")]),a._v(" "),e("p",[a._v("按功能来分：输入流（input）、输出流（output）")]),a._v(" "),e("p",[a._v("按类型来分：字节流和字符流。")]),a._v(" "),e("p",[a._v("字节流和字符流的区别是：字节流按 8 位传输以字节为单位输入输出数据，字符流按 16 位传输以字符为单位输入输出数据")]),a._v(" "),e("h3",{attrs:{id:"bio、nio、aio-有什么区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bio、nio、aio-有什么区别"}},[a._v("#")]),a._v(" BIO、NIO、AIO 有什么区别？")]),a._v(" "),e("ul",[e("li",[a._v("BIO：Block IO 同步阻塞式 IO，就是我们平常使用的传统 IO，它的特点是模式简单使用方便，并发处理能力低。")]),a._v(" "),e("li",[a._v("NIO：Non IO 同步非阻塞 IO，是传统 IO 的升级，客户端和服务器端通过 Channel（通道）通讯，实现了多路复用。")]),a._v(" "),e("li",[a._v("AIO：Asynchronous IO 是 NIO 的升级，也叫 NIO2，实现了异步非堵塞 IO ，异步 IO 的操作基于事件和回调机制")])]),a._v(" "),e("h3",{attrs:{id:"files的常用方法都有哪些"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#files的常用方法都有哪些"}},[a._v("#")]),a._v(" Files的常用方法都有哪些？")]),a._v(" "),e("ul",[e("li",[a._v("Files.exists()：检测文件路径是否存在。")]),a._v(" "),e("li",[a._v("Files.createFile()：创建文件。")]),a._v(" "),e("li",[a._v("Files.createDirectory()：创建文件夹。")]),a._v(" "),e("li",[a._v("Files.delete()：删除一个文件或目录。")]),a._v(" "),e("li",[a._v("Files.copy()：复制文件。")]),a._v(" "),e("li",[a._v("Files.move()：移动文件。")]),a._v(" "),e("li",[a._v("Files.size()：查看文件个数。")]),a._v(" "),e("li",[a._v("Files.read()：读取文件。")]),a._v(" "),e("li",[a._v("Files.write()：写入文件。")])]),a._v(" "),e("h2",{attrs:{id:"容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器"}},[a._v("#")]),a._v(" 容器")]),a._v(" "),e("h3",{attrs:{id:"java-容器都有哪些"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java-容器都有哪些"}},[a._v("#")]),a._v(" Java 容器都有哪些？")]),a._v(" "),e("ul",[e("li",[a._v("Collection")]),a._v(" "),e("li",[a._v("List\n"),e("ul",[e("li",[a._v("ArrayList")]),a._v(" "),e("li",[a._v("LinkedList")]),a._v(" "),e("li",[a._v("Vector")]),a._v(" "),e("li",[a._v("Stack")])])]),a._v(" "),e("li",[a._v("Set\n"),e("ul",[e("li",[a._v("HashSet")]),a._v(" "),e("li",[a._v("LinkedHashSet")]),a._v(" "),e("li",[a._v("TreeSet")])])]),a._v(" "),e("li",[a._v("Map\n"),e("ul",[e("li",[a._v("HashMap")]),a._v(" "),e("li",[a._v("LinkedHashMap")]),a._v(" "),e("li",[a._v("TreeMap")]),a._v(" "),e("li",[a._v("ConcurrentHashMap")])])]),a._v(" "),e("li",[a._v("Hashtable")])]),a._v(" "),e("h3",{attrs:{id:"collection-和-collections-有什么区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#collection-和-collections-有什么区别"}},[a._v("#")]),a._v(" Collection 和 Collections 有什么区别？")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("Collection 是一个集合接口，它提供了对集合对象进行基本操作的通用接口方法，所有集合都是它的子类，比如 List、Set 等。")])]),a._v(" "),e("li",[e("p",[a._v("Collections 是一个包装类，包含了很多静态方法，不能被实例化，就像一个工具类，比如提供的排序方法： Collections. sort(list)。")])])]),a._v(" "),e("h3",{attrs:{id:"list、set、map-之间的区别是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#list、set、map-之间的区别是什么"}},[a._v("#")]),a._v(" List、Set、Map 之间的区别是什么？")]),a._v(" "),e("p",[a._v("元素是否有序、是否允许元素重复")]),a._v(" "),e("p",[e("img",{attrs:{src:"src/resources/java/6e7001c0-3be3-11e9-af57-196eefd310b5.png",alt:""}})]),a._v(" "),e("h3",{attrs:{id:"hashmap-和-hashtable-有什么区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hashmap-和-hashtable-有什么区别"}},[a._v("#")]),a._v(" HashMap 和 Hashtable 有什么区别？")]),a._v(" "),e("ul",[e("li",[a._v("存储：HashMap 运行 key 和 value 为 null，而 Hashtable 不允许。")]),a._v(" "),e("li",[a._v("线程安全：Hashtable 是线程安全的，而 HashMap 是非线程安全的。")]),a._v(" "),e("li",[a._v("推荐使用：在 Hashtable 的类注释可以看到，Hashtable 是保留类不建议使用，推荐在单线程环境下使用 HashMap 替代，如果需要多线程使用则用 ConcurrentHashMap 替代")])]),a._v(" "),e("h3",{attrs:{id:"如何决定使用-hashmap-还是-treemap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何决定使用-hashmap-还是-treemap"}},[a._v("#")]),a._v(" 如何决定使用 HashMap 还是 TreeMap？")]),a._v(" "),e("p",[a._v("对于在 Map 中插入、删除、定位一个元素这类操作，HashMap 是最好的选择，因为相对而言 HashMap 的插入会更快，但如果你要对一个 key 集合进行有序的遍历，那 TreeMap 是更好的选择")]),a._v(" "),e("h3",{attrs:{id:"说一下-hashmap-的实现原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#说一下-hashmap-的实现原理"}},[a._v("#")]),a._v(" 说一下 HashMap 的实现原理？")]),a._v(" "),e("p",[a._v("HashMap 基于 Hash 算法实现的，我们通过 put(key,value)存储，get(key)来获取。当传入 key 时，HashMap 会根据 key. hashCode() 计算出 hash 值，根据 hash 值将 value 保存在 bucket 里。当计算出的 hash 值相同时，我们称之为 hash 冲突，HashMap 的做法是用链表和红黑树存储相同 hash 值的 value。当 hash 冲突的个数比较少时，使用链表否则使用红黑树。")]),a._v(" "),e("h3",{attrs:{id:"说一下-hashset-的实现原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#说一下-hashset-的实现原理"}},[a._v("#")]),a._v(" 说一下 HashSet 的实现原理？")]),a._v(" "),e("p",[a._v("HashSet 是基于 HashMap 实现的，HashSet 底层使用 HashMap 来保存所有元素，因此 HashSet 的实现比较简单，相关 HashSet 的操作，基本上都是直接调用底层 HashMap 的相关方法来完成，HashSet 不允许重复的值")]),a._v(" "),e("h3",{attrs:{id:"arraylist-和-linkedlist-的区别是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arraylist-和-linkedlist-的区别是什么"}},[a._v("#")]),a._v(" ArrayList 和 LinkedList 的区别是什么？")]),a._v(" "),e("ul",[e("li",[a._v("数据结构实现：ArrayList 是动态数组的数据结构实现，而 LinkedList 是双向链表的数据结构实现。")]),a._v(" "),e("li",[a._v("随机访问效率：ArrayList 比 LinkedList 在随机访问的时候效率要高，因为 LinkedList 是线性的数据存储方式，所以需要移动指针从前往后依次查找。")]),a._v(" "),e("li",[a._v("增加和删除效率：在非首尾的增加和删除操作，LinkedList 要比 ArrayList 效率要高，因为 ArrayList 增删操作要影响数组内的其他数据的下标。")])]),a._v(" "),e("p",[a._v("综合来说，在需要频繁读取集合中的元素时，更推荐使用 ArrayList，而在插入和删除操作较多时，更推荐使用 LinkedList")]),a._v(" "),e("h3",{attrs:{id:"如何实现数组和-list-之间的转换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何实现数组和-list-之间的转换"}},[a._v("#")]),a._v(" 如何实现数组和 List 之间的转换？")]),a._v(" "),e("ul",[e("li",[a._v("数组转 List：使用 Arrays. asList(array) 进行转换。")]),a._v(" "),e("li",[a._v("List 转数组：使用 List 自带的 toArray() 方法。")])]),a._v(" "),e("h3",{attrs:{id:"在-queue-中-poll-和-remove-有什么区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在-queue-中-poll-和-remove-有什么区别"}},[a._v("#")]),a._v(" 在 Queue 中 poll()和 remove()有什么区别？")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("相同点：都是返回第一个元素，并在队列中删除返回的对象")])]),a._v(" "),e("li",[e("p",[a._v("不同点：如果没有元素 poll()会返回 null，而 remove()会直接抛出 NoSuchElementException 异常")])])]),a._v(" "),e("h3",{attrs:{id:"迭代器-iterator-是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#迭代器-iterator-是什么"}},[a._v("#")]),a._v(" 迭代器 Iterator 是什么？")]),a._v(" "),e("p",[a._v("Iterator 接口提供遍历任何 Collection 的接口。我们可以从一个 Collection 中使用迭代器方法来获取迭代器实例。迭代器取代了 Java 集合框架中的 Enumeration，迭代器允许调用者在迭代过程中移除元素")]),a._v(" "),e("h3",{attrs:{id:"iterator-和-listiterator-有什么区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iterator-和-listiterator-有什么区别"}},[a._v("#")]),a._v(" Iterator 和 ListIterator 有什么区别？")]),a._v(" "),e("ul",[e("li",[a._v("Iterator 可以遍历 Set 和 List 集合，而 ListIterator 只能遍历 List。")]),a._v(" "),e("li",[a._v("Iterator 只能单向遍历，而 ListIterator 可以双向遍历（向前/后遍历）。")]),a._v(" "),e("li",[a._v("ListIterator 从 Iterator 接口继承，然后添加了一些额外的功能，比如添加一个元素、替换一个元素、获取前面或后面元素的索引位置。")])]),a._v(" "),e("h3",{attrs:{id:"怎么确保一个集合不能被修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#怎么确保一个集合不能被修改"}},[a._v("#")]),a._v(" 怎么确保一个集合不能被修改？")]),a._v(" "),e("p",[a._v("Collections. unmodifiableCollection(Collection c) 方法来创建一个只读集合")]),a._v(" "),e("h2",{attrs:{id:"多线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多线程"}},[a._v("#")]),a._v(" 多线程")]),a._v(" "),e("ul",[e("li",[a._v("并行：多个处理器或多核处理器同时处理多个任务。")]),a._v(" "),e("li",[a._v("并发：多个任务在同一个 CPU 核上，按细分的时间片轮流(交替)执行，从逻辑上来看那些任务是同时执行。")])]),a._v(" "),e("h3",{attrs:{id:"线程和进程的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#线程和进程的区别"}},[a._v("#")]),a._v(" 线程和进程的区别？")]),a._v(" "),e("ul",[e("li",[a._v("进程是资源的分配和调度的一个独立单元，而线程是CPU调度的基本单元")]),a._v(" "),e("li",[a._v("同一个进程中可以包括多个线程，并且线程共享整个进程的资源（寄存器、堆栈、上下文），一个进行至少包括一个线程。")]),a._v(" "),e("li",[a._v("进程的创建调用fork或者vfork，而线程的创建调用pthread_create，进程结束后它拥有的所有线程都将销毁，而线程的结束不会影响同个进程中的其他线程的结束")]),a._v(" "),e("li",[a._v("线程中执行时一般都要进行同步和互斥，因为他们共享同一进程的所有资源")]),a._v(" "),e("li",[a._v("线程有自己的私有属性TCB，线程id，寄存器、硬件上下文，而进程也有自己的私有属性进程控制块PCB，这些私有属性是不被共享的，用来标示一个进程或一个线程的标志")])]),a._v(" "),e("h3",{attrs:{id:"守护线程是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#守护线程是什么"}},[a._v("#")]),a._v(" 守护线程是什么？")]),a._v(" "),e("p",[a._v("守护线程是运行在后台的一种特殊进程。它独立于控制终端并且周期性地执行某种任务或等待处理某些发生的事件。在 Java 中垃圾回收线程就是特殊的守护线程")]),a._v(" "),e("h3",{attrs:{id:"创建线程有哪几种方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建线程有哪几种方式"}},[a._v("#")]),a._v(" 创建线程有哪几种方式？")]),a._v(" "),e("ul",[e("li",[a._v("继承 Thread 重写 run 方法；")]),a._v(" "),e("li",[a._v("实现 Runnable 接口")]),a._v(" "),e("li",[a._v("实现 Callable 接口")])]),a._v(" "),e("h3",{attrs:{id:"说一下-runnable-和-callable-有什么区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#说一下-runnable-和-callable-有什么区别"}},[a._v("#")]),a._v(" 说一下 runnable 和 callable 有什么区别？")]),a._v(" "),e("p",[a._v("runnable 没有返回值，callable 可以拿到有返回值")]),a._v(" "),e("h3",{attrs:{id:"线程有哪些状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#线程有哪些状态"}},[a._v("#")]),a._v(" 线程有哪些状态？")]),a._v(" "),e("ul",[e("li",[a._v("NEW 尚未启动")]),a._v(" "),e("li",[a._v("RUNNABLE 正在执行中")]),a._v(" "),e("li",[a._v("BLOCKED 阻塞的（被同步锁或者IO锁阻塞）")]),a._v(" "),e("li",[a._v("WAITING 永久等待状态")]),a._v(" "),e("li",[a._v("TIMED_WAITING 等待指定的时间重新被唤醒的状态")]),a._v(" "),e("li",[a._v("TERMINATED 执行完成")])]),a._v(" "),e("h3",{attrs:{id:"sleep-和-wait-有什么区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sleep-和-wait-有什么区别"}},[a._v("#")]),a._v(" sleep() 和 wait() 有什么区别？")]),a._v(" "),e("ul",[e("li",[a._v("类的不同：sleep() 来自 Thread，wait() 来自 Object。")]),a._v(" "),e("li",[a._v("释放锁：sleep() 不释放锁；wait() 释放锁。")]),a._v(" "),e("li",[a._v("用法不同：sleep() 时间到会自动恢复；wait() 可以使用 notify()/notifyAll()直接唤醒。")])]),a._v(" "),e("h3",{attrs:{id:"notify-和-notifyall-有什么区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#notify-和-notifyall-有什么区别"}},[a._v("#")]),a._v(" notify()和 notifyAll()有什么区别？")]),a._v(" "),e("p",[a._v("notifyAll()会唤醒所有的线程，notify()之后唤醒一个线程。notifyAll() 调用后，会将全部线程由等待池移到锁池，然后参与锁的竞争，竞争成功则继续执行，如果不成功则留在锁池等待锁被释放后再次参与竞争。而 notify()只会唤醒一个线程，具体唤醒哪一个线程由虚拟机控制。")]),a._v(" "),e("h3",{attrs:{id:"线程的-run-和-start-有什么区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#线程的-run-和-start-有什么区别"}},[a._v("#")]),a._v(" 线程的 run() 和 start() 有什么区别？")]),a._v(" "),e("p",[a._v("start() 方法用于启动线程，run() 方法用于执行线程的运行时代码。run() 可以重复调用，而 start() 只能调用一次")]),a._v(" "),e("h3",{attrs:{id:"创建线程池有哪几种方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建线程池有哪几种方式"}},[a._v("#")]),a._v(" 创建线程池有哪几种方式？")]),a._v(" "),e("p",[a._v("线程池创建有七种方式，最核心的是最后一种：")]),a._v(" "),e("p",[a._v("newSingleThreadExecutor()：它的特点在于工作线程数目被限制为 1，操作一个无界的工作队列，所以它保证了所有任务的都是被顺序执行，最多会有一个任务处于活动状态，并且不允许使用者改动线程池实例，因此可以避免其改变线程数目；")]),a._v(" "),e("p",[a._v("newCachedThreadPool()：它是一种用来处理大量短时间工作任务的线程池，具有几个鲜明特点：它会试图缓存线程并重用，当无缓存线程可用时，就会创建新的工作线程；如果线程闲置的时间超过 60 秒，则被终止并移出缓存；长时间闲置时，这种线程池，不会消耗什么资源。其内部使用 SynchronousQueue 作为工作队列；")]),a._v(" "),e("p",[a._v("newFixedThreadPool(int nThreads)：重用指定数目（nThreads）的线程，其背后使用的是无界的工作队列，任何时候最多有 nThreads 个工作线程是活动的。这意味着，如果任务数量超过了活动队列数目，将在工作队列中等待空闲线程出现；如果有工作线程退出，将会有新的工作线程被创建，以补足指定的数目 nThreads；")]),a._v(" "),e("p",[a._v("newSingleThreadScheduledExecutor()：创建单线程池，返回 ScheduledExecutorService，可以进行定时或周期性的工作调度；")]),a._v(" "),e("p",[a._v("newScheduledThreadPool(int corePoolSize)：和newSingleThreadScheduledExecutor()类似，创建的是个 ScheduledExecutorService，可以进行定时或周期性的工作调度，区别在于单一工作线程还是多个工作线程；")]),a._v(" "),e("p",[a._v("newWorkStealingPool(int parallelism)：这是一个经常被人忽略的线程池，Java 8 才加入这个创建方法，其内部会构建ForkJoinPool，利用Work-Stealing算法，并行地处理任务，不保证处理顺序；")]),a._v(" "),e("p",[a._v("ThreadPoolExecutor()：是最原始的线程池创建，上面1-3创建方式都是对ThreadPoolExecutor的封装。")]),a._v(" "),e("h3",{attrs:{id:"线程池都有哪些状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#线程池都有哪些状态"}},[a._v("#")]),a._v(" 线程池都有哪些状态？")]),a._v(" "),e("ul",[e("li",[a._v("RUNNING：这是最正常的状态，接受新的任务，处理等待队列中的任务。")]),a._v(" "),e("li",[a._v("SHUTDOWN：不接受新的任务提交，但是会继续处理等待队列中的任务。")]),a._v(" "),e("li",[a._v("STOP：不接受新的任务提交，不再处理等待队列中的任务，中断正在执行任务的线程。")]),a._v(" "),e("li",[a._v("TIDYING：所有的任务都销毁了，workCount 为 0，线程池的状态在转换为 TIDYING 状态时，会执行钩子方法 terminated()。")]),a._v(" "),e("li",[a._v("TERMINATED：terminated()方法结束后，线程池的状态就会变成这个。")])]),a._v(" "),e("h3",{attrs:{id:"线程池中-submit-和-execute-方法有什么区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#线程池中-submit-和-execute-方法有什么区别"}},[a._v("#")]),a._v(" 线程池中 submit() 和 execute() 方法有什么区别？")]),a._v(" "),e("ul",[e("li",[a._v("execute()：只能执行 Runnable 类型的任务。")]),a._v(" "),e("li",[a._v("submit()：可以执行 Runnable 和 Callable 类型的任务")])]),a._v(" "),e("h3",{attrs:{id:"在-java-程序中怎么保证多线程的运行安全"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在-java-程序中怎么保证多线程的运行安全"}},[a._v("#")]),a._v(" 在 Java 程序中怎么保证多线程的运行安全？")]),a._v(" "),e("ul",[e("li",[a._v("方法一：使用安全类，比如 Java.util.concurrent 下的类")]),a._v(" "),e("li",[a._v("方法二：使用自动锁 synchronized")]),a._v(" "),e("li",[a._v("方法三：使用手动锁 Lock")])]),a._v(" "),e("h3",{attrs:{id:"多线程中-synchronized-锁升级的原理是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多线程中-synchronized-锁升级的原理是什么"}},[a._v("#")]),a._v(" 多线程中 synchronized 锁升级的原理是什么？")]),a._v(" "),e("p",[a._v("在锁对象的对象头里面有一个 threadid 字段，在第一次访问的时候 threadid 为空，jvm 让其持有偏向锁，并将 threadid 设置为其线程 id，再次进入的时候会先判断 threadid 是否与其线程 id 一致，如果一致则可以直接使用此对象，如果不一致，则升级偏向锁为轻量级锁，通过自旋循环一定次数来获取锁，执行一定次数之后，如果还没有正常获取到要使用的对象，此时就会把锁从轻量级升级为重量级锁，此过程就构成了 synchronized 锁的升级")]),a._v(" "),e("p",[a._v("锁的升级的目的：锁升级是为了减低了锁带来的性能消耗。在 Java 6 之后优化 synchronized 的实现方式，使用了偏向锁升级为轻量级锁再升级到重量级锁的方式，从而减低了锁带来的性能消耗")]),a._v(" "),e("h4",{attrs:{id:"线程池中的空余线程是如何被回收的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#线程池中的空余线程是如何被回收的"}},[a._v("#")]),a._v(" 线程池中的空余线程是如何被回收的")]),a._v(" "),e("p",[a._v("当线程池中的线程数量大于 corePoolSize 的时候，如果这时没有新的任务提交，核心线程外的线程不会立即销毁，而是会等待，直到等待的时间超过 keepAliveTime")]),a._v(" "),e("h3",{attrs:{id:"jdk-自旋锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jdk-自旋锁"}},[a._v("#")]),a._v(" JDK 自旋锁")]),a._v(" "),e("p",[a._v("参数配置")]),a._v(" "),e("p",[e("code",[a._v("-XX:PreBlockSpin=10")])]),a._v(" "),e("h3",{attrs:{id:"什么是死锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是死锁"}},[a._v("#")]),a._v(" 什么是死锁？")]),a._v(" "),e("p",[a._v("当线程 A 持有独占锁a，并尝试去获取独占锁 b 的同时，线程 B 持有独占锁 b，并尝试获取独占锁 a 的情况下，就会发生 AB 两个线程由于互相持有对方需要的锁，而发生的阻塞现象，我们称为死锁")]),a._v(" "),e("h3",{attrs:{id:"怎么防止死锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#怎么防止死锁"}},[a._v("#")]),a._v(" 怎么防止死锁？")]),a._v(" "),e("ul",[e("li",[a._v("尽量使用 tryLock(long timeout, TimeUnit unit)的方法(ReentrantLock、ReentrantReadWriteLock)，设置超时时间，超时可以退出防止死锁。")]),a._v(" "),e("li",[a._v("尽量使用 Java.util.concurrent 并发类代替自己手写锁。")]),a._v(" "),e("li",[a._v("尽量降低锁的使用粒度，尽量不要几个功能用同一把锁。")]),a._v(" "),e("li",[a._v("尽量减少同步的代码块")])]),a._v(" "),e("h3",{attrs:{id:"threadlocal-是什么-有哪些使用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#threadlocal-是什么-有哪些使用场景"}},[a._v("#")]),a._v(" ThreadLocal 是什么？有哪些使用场景？")]),a._v(" "),e("p",[a._v("ThreadLocal 为每个使用该变量的线程提供独立的变量副本，所以每一个线程都可以独立地改变自己的副本，而不会影响其它线程所对应的副本。")]),a._v(" "),e("p",[a._v("ThreadLocal 的经典使用场景是数据库连接和 session 管理等")]),a._v(" "),e("h3",{attrs:{id:"说一下-synchronized-底层实现原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#说一下-synchronized-底层实现原理"}},[a._v("#")]),a._v(" 说一下 synchronized 底层实现原理？")]),a._v(" "),e("p",[a._v("synchronized 是由一对 monitorenter/monitorexit 指令实现的，monitor 对象是同步的基本实现单元。在 Java 6 之前，monitor 的实现完全是依靠操作系统内部的互斥锁，因为需要进行用户态到内核态的切换，所以同步操作是一个无差别的重量级操作，性能也很低。但在 Java 6 的时候，Java 虚拟机 对此进行了大刀阔斧地改进，提供了三种不同的 monitor 实现，也就是常说的三种不同的锁：偏向锁（Biased Locking）、轻量级锁和重量级锁，大大改进了其性能。")]),a._v(" "),e("h3",{attrs:{id:"synchronized-和-volatile-的区别是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#synchronized-和-volatile-的区别是什么"}},[a._v("#")]),a._v(" synchronized 和 volatile 的区别是什么？")]),a._v(" "),e("ul",[e("li",[a._v("volatile 是变量修饰符；synchronized 是修饰类、方法、代码段。")]),a._v(" "),e("li",[a._v("volatile 仅能实现变量的修改可见性，不能保证原子性；而 synchronized 则可以保证变量的修改可见性和原子性。")]),a._v(" "),e("li",[a._v("volatile 不会造成线程的阻塞；synchronized 可能会造成线程的阻塞。")])]),a._v(" "),e("h3",{attrs:{id:"synchronized-和-lock-有什么区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#synchronized-和-lock-有什么区别"}},[a._v("#")]),a._v(" synchronized 和 Lock 有什么区别？")]),a._v(" "),e("p",[a._v("synchronized 可以给类、方法、代码块加锁；而 lock 只能给代码块加锁。\nsynchronized 不需要手动获取锁和释放锁，使用简单，发生异常会自动释放锁，不会造成死锁；而 lock 需要自己加锁和释放锁，如果使用不当没有 unLock()去释放锁就会造成死锁。\n通过 Lock 可以知道有没有成功获取锁，而 synchronized 却无法办到")]),a._v(" "),e("h3",{attrs:{id:"synchronized-和-reentrantlock-区别是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#synchronized-和-reentrantlock-区别是什么"}},[a._v("#")]),a._v(" synchronized 和 ReentrantLock 区别是什么？")]),a._v(" "),e("p",[a._v("synchronized 早期的实现比较低效，对比 ReentrantLock，大多数场景性能都相差较大，但是在 Java 6 中对 synchronized 进行了非常多的改进。")]),a._v(" "),e("p",[a._v("主要区别如下：")]),a._v(" "),e("p",[a._v("ReentrantLock 使用起来比较灵活，但是必须有释放锁的配合动作；\nReentrantLock 必须手动获取与释放锁，而 synchronized 不需要手动释放和开启锁；\nReentrantLock 只适用于代码块锁，而 synchronized 可用于修饰方法、代码块等。")]),a._v(" "),e("h3",{attrs:{id:"说一下-atomic-的原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#说一下-atomic-的原理"}},[a._v("#")]),a._v(" 说一下 atomic 的原理？")]),a._v(" "),e("p",[a._v("atomic 主要利用 CAS (Compare And Wwap) 和 volatile 和 native 方法来保证原子操作，从而避免 synchronized 的高开销，执行效率大为提升")]),a._v(" "),e("h3",{attrs:{id:"future、futuretask、runnable、callable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#future、futuretask、runnable、callable"}},[a._v("#")]),a._v(" Future、FutureTask、Runnable、Callable")]),a._v(" "),e("p",[a._v("1、Runnable是自从java1.1就有了，而Callable是1.5之后才加上去的。")]),a._v(" "),e("p",[a._v("2、Callable规定的方法是call(),Runnable规定的方法是run()。")]),a._v(" "),e("p",[a._v("3、Callable的任务执行后可返回值，而Runnable的任务是不能返回值(是void)。")]),a._v(" "),e("p",[a._v("4、call方法可以抛出异常，run方法不可以。")]),a._v(" "),e("p",[a._v("5、运行Callable任务可以拿到一个Future对象，表示异步计算的结果。它提供了检查计算是否完成的方法，以等待计算的完成，并检索计算的结果。通过Future对象可以了解任务执行情况，可取消任务的执行，还可获取执行结果。")]),a._v(" "),e("p",[a._v("6、加入线程池运行，Runnable使用ExecutorService的execute方法，Callable使用submit方法。")]),a._v(" "),e("h2",{attrs:{id:"反射"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#反射"}},[a._v("#")]),a._v(" 反射")]),a._v(" "),e("h3",{attrs:{id:"什么是反射"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是反射"}},[a._v("#")]),a._v(" 什么是反射？")]),a._v(" "),e("p",[a._v("反射是在运行状态中，对于任意一个类，都能够知道这个类的所有属性和方法；对于任意一个对象，都能够调用它的任意一个方法和属性；这种动态获取的信息以及动态调用对象的方法的功能称为 Java 语言的反射机制")]),a._v(" "),e("h3",{attrs:{id:"动态代理是什么-有哪些应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#动态代理是什么-有哪些应用"}},[a._v("#")]),a._v(" 动态代理是什么？有哪些应用？")]),a._v(" "),e("p",[a._v("动态代理是运行时动态生成代理类。")]),a._v(" "),e("p",[a._v("动态代理的应用有 spring aop、hibernate 数据查询、测试框架的后端 mock、rpc，Java注解对象获取等。")]),a._v(" "),e("h3",{attrs:{id:"怎么实现动态代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#怎么实现动态代理"}},[a._v("#")]),a._v(" 怎么实现动态代理？")]),a._v(" "),e("p",[a._v("JDK 原生动态代理和 cglib 动态代理。JDK 原生动态代理是基于接口实现的，而 cglib 是基于继承当前类的子类实现的")]),a._v(" "),e("h4",{attrs:{id:"jdk动态代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jdk动态代理"}},[a._v("#")]),a._v(" JDK动态代理")]),a._v(" "),e("p",[a._v("通过java反射机制实现动态代理。")]),a._v(" "),e("p",[a._v("有两个重要的类或接口，一个是 InvocationHandler (Interface)、另一个则是 Proxy(Class)\n每一个动态代理类都必须要实现 InvocationHandler 这个接口，当通过代理对象调用一个方法的时候，\n这个方法的调用就会被转发为由 InvocationHandler 这个接口的 invoke 方法来进行调用")]),a._v(" "),e("p",[a._v("Proxy 用来动态创建一个代理对象的类 "),e("code",[a._v("Proxy.newProxyInstance")])]),a._v(" "),e("p",[a._v("利用反射机制生成一个实现代理接口的匿名类，在调用具体方法前调用InvokeHandler来处理")]),a._v(" "),e("h4",{attrs:{id:"cglib动态代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cglib动态代理"}},[a._v("#")]),a._v(" cglib动态代理")]),a._v(" "),e("p",[a._v("CGLIB 动态代理生成代理类的子类，并且实现了 Factory 接口\n底层利用asm，对代理对象类的class文件加载进来，通过修改其字节码生成子类来处理，调用方法就直接调用，不需要再通过反射的方式调用")]),a._v(" "),e("p",[a._v("DK动态代理和CGLIB字节码生成的区别？\n（1）JDK动态代理只能对实现了接口的类生成代理，而不能针对类\n（2）CGLIB是针对类实现代理，主要是对指定的类生成一个子类，覆盖其中的方法\n因为是继承，所以该类或方法最好不要声明成 final")]),a._v(" "),e("h4",{attrs:{id:"springboot-代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#springboot-代理"}},[a._v("#")]),a._v(" springboot 代理")]),a._v(" "),e("p",[a._v("Spring Boot 2.0 开始代理类默认的实现方式是 cglib")]),a._v(" "),e("p",[a._v("如果想使用 JDK 动态代理，可以通过\nspring.aop.proxy-target-class=false")]),a._v(" "),e("h2",{attrs:{id:"对象拷贝"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对象拷贝"}},[a._v("#")]),a._v(" 对象拷贝")]),a._v(" "),e("h3",{attrs:{id:"为什么要使用克隆"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用克隆"}},[a._v("#")]),a._v(" 为什么要使用克隆？")]),a._v(" "),e("p",[a._v("克隆的对象可能包含一些已经修改过的属性，而 new 出来的对象的属性都还是初始化时候的值，所以当需要一个新的对象来保存当前对象的“状态”就靠克隆方法了")]),a._v(" "),e("h3",{attrs:{id:"如何实现对象克隆"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何实现对象克隆"}},[a._v("#")]),a._v(" 如何实现对象克隆？")]),a._v(" "),e("p",[a._v("实现 Cloneable 接口并重写 Object 类中的 clone() 方法。\n实现 Serializable 接口，通过对象的序列化和反序列化实现克隆，可以实现真正的深度克隆")]),a._v(" "),e("h3",{attrs:{id:"深拷贝和浅拷贝区别是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#深拷贝和浅拷贝区别是什么"}},[a._v("#")]),a._v(" 深拷贝和浅拷贝区别是什么？")]),a._v(" "),e("ul",[e("li",[a._v("浅克隆：当对象被复制时只复制它本身和其中包含的值类型的成员变量，而引用类型的成员对象并没有复制。")]),a._v(" "),e("li",[a._v("深克隆：除了对象本身被复制外，对象所包含的所有成员变量也将复制")])]),a._v(" "),e("h2",{attrs:{id:"web"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web"}},[a._v("#")]),a._v(" web")]),a._v(" "),e("h3",{attrs:{id:"session-和-cookie-有什么区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#session-和-cookie-有什么区别"}},[a._v("#")]),a._v(" session 和 cookie 有什么区别？")]),a._v(" "),e("ul",[e("li",[a._v("存储位置不同：session 存储在服务器端；cookie 存储在浏览器端。")]),a._v(" "),e("li",[a._v("安全性不同：cookie 安全性一般，在浏览器存储，可以被伪造和修改。")]),a._v(" "),e("li",[a._v("容量和个数限制：cookie 有容量限制，每个站点下的 cookie 也有个数限制。")]),a._v(" "),e("li",[a._v("存储的多样性：session 可以存储在 Redis 中、数据库中、应用程序中；而 cookie 只能存储在浏览器中")])]),a._v(" "),e("h3",{attrs:{id:"如何避免-sql-注入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何避免-sql-注入"}},[a._v("#")]),a._v(" 如何避免 SQL 注入？")]),a._v(" "),e("ul",[e("li",[a._v("使用预处理 PreparedStatement")]),a._v(" "),e("li",[a._v("使用正则表达式过滤掉字符中的特殊字符")])]),a._v(" "),e("h3",{attrs:{id:"什么是-xss-攻击-如何避免"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是-xss-攻击-如何避免"}},[a._v("#")]),a._v(" 什么是 XSS 攻击，如何避免？")]),a._v(" "),e("p",[a._v("XSS 攻击：即跨站脚本攻击，它是 Web 程序中常见的漏洞。原理是攻击者往 Web 页面里插入恶意的脚本代码（css 代码、Javascript 代码等），当用户浏览该页面时，嵌入其中的脚本代码会被执行，从而达到恶意攻击用户的目的，如盗取用户 cookie、破坏页面结构、重定向到其他网站等。")]),a._v(" "),e("p",[a._v("预防 XSS 的核心是必须对输入的数据做过滤处理。")]),a._v(" "),e("h3",{attrs:{id:"什么是-csrf-攻击-如何避免"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是-csrf-攻击-如何避免"}},[a._v("#")]),a._v(" 什么是 CSRF 攻击，如何避免？")]),a._v(" "),e("p",[a._v("CSRF：Cross-Site Request Forgery（中文：跨站请求伪造），可以理解为攻击者盗用了你的身份，以你的名义发送恶意请求，比如：以你名义发送邮件、发消息、购买商品，虚拟货币转账等。")]),a._v(" "),e("p",[a._v("防御手段：")]),a._v(" "),e("p",[a._v("验证请求来源地址；\n关键操作添加验证码；\n在请求地址添加 token 并验证。")]),a._v(" "),e("h2",{attrs:{id:"异常"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#异常"}},[a._v("#")]),a._v(" 异常")]),a._v(" "),e("h3",{attrs:{id:"throw-和-throws-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#throw-和-throws-的区别"}},[a._v("#")]),a._v(" throw 和 throws 的区别？")]),a._v(" "),e("p",[a._v("throw：是真实抛出一个异常。\nthrows：是声明可能会抛出一个异常。")]),a._v(" "),e("h3",{attrs:{id:"final、finally、finalize-有什么区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#final、finally、finalize-有什么区别"}},[a._v("#")]),a._v(" final、finally、finalize 有什么区别？")]),a._v(" "),e("p",[a._v("final：是修饰符，如果修饰类，此类不能被继承；如果修饰方法和变量，则表示此方法和此变量不能在被改变，只能使用。\nfinally：是 try{} catch{} finally{} 最后一部分，表示不论发生任何情况都会执行，finally 部分可以省略，但如果 finally 部分存在，则一定会执行 finally 里面的代码。\nfinalize： 是 Object 类的一个方法，在垃圾收集器执行的时候会调用被回收对象的此方法。")]),a._v(" "),e("h3",{attrs:{id:"try-catch-finally-中哪个部分可以省略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#try-catch-finally-中哪个部分可以省略"}},[a._v("#")]),a._v(" try-catch-finally 中哪个部分可以省略？")]),a._v(" "),e("p",[a._v("try-catch-finally 其中 catch 和 finally 都可以被省略，但是不能同时省略，也就是说有 try 的时候，必须后面跟一个 catch 或者 finally。")]),a._v(" "),e("h3",{attrs:{id:"try-catch-finally-中-如果-catch-中-return-了-finally-还会执行吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#try-catch-finally-中-如果-catch-中-return-了-finally-还会执行吗"}},[a._v("#")]),a._v(" try-catch-finally 中，如果 catch 中 return 了，finally 还会执行吗？")]),a._v(" "),e("p",[a._v("finally 一定会执行，即使是 catch 中 return 了，catch 中的 return 会等 finally 中的代码执行完之后，才会执行。")]),a._v(" "),e("h3",{attrs:{id:"常见的异常类有哪些"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见的异常类有哪些"}},[a._v("#")]),a._v(" 常见的异常类有哪些？")]),a._v(" "),e("p",[a._v("NullPointerException 空指针异常\nClassNotFoundException 指定类不存在\nNumberFormatException 字符串转换为数字异常\nIndexOutOfBoundsException 数组下标越界异常\nClassCastException 数据类型转换异常\nFileNotFoundException 文件未找到异常\nNoSuchMethodException 方法不存在异常\nIOException IO 异常\nSocketException Socket 异常")]),a._v(" "),e("h3",{attrs:{id:"api-spi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api-spi"}},[a._v("#")]),a._v(" API SPI")]),a._v(" "),e("p",[a._v("API：API由开发人员调用")]),a._v(" "),e("p",[a._v("SPI：SPI是框架接口规范，需要框架开发人员实现")]),a._v(" "),e("h3",{attrs:{id:"io-和-nio"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#io-和-nio"}},[a._v("#")]),a._v(" IO 和 NIO")]),a._v(" "),e("p",[a._v("IO: 面向字节流 阻塞\nNIO : 面向缓冲区 基于Selector的非阻塞")]),a._v(" "),e("h3",{attrs:{id:"jdk-常用工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jdk-常用工具"}},[a._v("#")]),a._v(" JDK 常用工具")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("javac\n编译java文件")])]),a._v(" "),e("li",[e("p",[a._v("javap")])])]),a._v(" "),e("p",[a._v("javap -c a.class")]),a._v(" "),e("p",[a._v("对给定的class文件提供的字节代码进行反编译")]),a._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[a._v("jps")])]),a._v(" "),e("p",[a._v("显示当前系统的java进程情况及进程id")]),a._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[a._v("jmap")])]),a._v(" "),e("p",[a._v("可以输出所有内存中对象的工具，甚至可以将VM 中的heap，以二进制输出成文本")]),a._v(" "),e("p",[a._v("jmap -dump:live,format=b,file=myjmapfile.txt 19570")]),a._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[a._v("jstack")])]),a._v(" "),e("p",[a._v("查看某个Java进程内的线程堆栈信息")]),a._v(" "),e("p",[a._v('步骤:\njps 查看java进程pid\ntop -Hp pid 找出该进程内最耗费CPU的线程\nprintf "%x\\n" 1787 得到十六进制值为6fb\njstack pid > file.log 通过jstack 把该进程的所有线程堆栈打印到file.log中')]),a._v(" "),e("h3",{attrs:{id:"threadlocal-原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#threadlocal-原理"}},[a._v("#")]),a._v(" ThreadLocal 原理")]),a._v(" "),e("p",[a._v("线程本地变量，每个线程都有变量的副本\nEntry类继承了WeakReference<ThreadLocal<?>>，即每个Entry对象都有一个ThreadLocal的弱引用（作为key），这是为了防止内存泄露")]),a._v(" "),e("p",[a._v("多小程序账号访问")]),a._v(" "),e("h3",{attrs:{id:"引用类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#引用类型"}},[a._v("#")]),a._v(" 引用类型")]),a._v(" "),e("p",[a._v("垃圾回收机制在判断是否回收某个对象的时候")]),a._v(" "),e("ul",[e("li",[a._v("强引用 垃圾回收器将永远不会回收被引用的对象 new 创建")]),a._v(" "),e("li",[a._v("软引用 在内存足够的时候，软引用对象不会被回收，只有在内存不足时，系统则会回收软引用对象")]),a._v(" "),e("li",[a._v("弱引用 无论内存是否足够，只要 JVM 开始进行垃圾回收，那些被弱引用关联的对象都会被回收")]),a._v(" "),e("li",[a._v("虚引用 如果一个对象仅持有虚引用，那么它就和没有任何引用一样，它随时可能会被回收")])]),a._v(" "),e("h3",{attrs:{id:"反射获取父类的私有字段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#反射获取父类的私有字段"}},[a._v("#")]),a._v(" 反射获取父类的私有字段")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("getFields() 获取所有public字段,包括父类字段")])]),a._v(" "),e("li",[e("p",[a._v("getDeclaredFields() 获取所有字段,public和protected和private,但是不包括父类字段")])])]),a._v(" "),e("p",[a._v("获取父类\ngetClass().getSuperclass().getDeclaredField(paramString);")]),a._v(" "),e("h3",{attrs:{id:"反射破坏单利"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#反射破坏单利"}},[a._v("#")]),a._v(" 反射破坏单利")]),a._v(" "),e("p",[a._v("破坏")]),a._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[a._v("constructor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("setAccessible")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 获取对私用构造函数访问权")]),a._v("\n")])])]),e("p",[a._v("防止\n使用枚举类来实现")]),a._v(" "),e("h3",{attrs:{id:"和-区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#和-区别"}},[a._v("#")]),a._v(" >>>和>>区别")]),a._v(" "),e("ul",[e("li",[e("p",[e("code",[a._v(">>>")]),a._v(" 表示不带符号向右移动二进制数，移动后前面统统补0")])]),a._v(" "),e("li",[e("p",[e("code",[a._v(">>")]),a._v(" 表示带符号移动")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);