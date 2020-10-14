(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{697:function(s,e,t){"use strict";t.r(e);var v=t(27),a=Object(v.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[s._v("#")]),s._v(" Redis")]),s._v(" "),t("h3",{attrs:{id:"redis-是什么-都有哪些使用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-是什么-都有哪些使用场景"}},[s._v("#")]),s._v(" Redis 是什么？都有哪些使用场景？")]),s._v(" "),t("p",[s._v("Redis 是一个使用 C 语言开发的高速缓存数据库。")]),s._v(" "),t("p",[s._v("Redis 使用场景：")]),s._v(" "),t("p",[s._v("缓存、锁、session共享")]),s._v(" "),t("h3",{attrs:{id:"redis-有哪些功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-有哪些功能"}},[s._v("#")]),s._v(" Redis 有哪些功能？")]),s._v(" "),t("p",[s._v("数据缓存功能\n分布式锁的功能\n支持数据持久化\n支持事务\n支持消息队列")]),s._v(" "),t("h3",{attrs:{id:"redis-数据结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-数据结构"}},[s._v("#")]),s._v(" redis 数据结构")]),s._v(" "),t("h4",{attrs:{id:"string"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[s._v("#")]),s._v(" string")]),s._v(" "),t("p",[s._v("最大 512m")]),s._v(" "),t("ul",[t("li",[s._v("int 8字节")]),s._v(" "),t("li",[s._v("emstr 小于等于39")]),s._v(" "),t("li",[s._v("raw 大于39")])]),s._v(" "),t("h4",{attrs:{id:"list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list"}},[s._v("#")]),s._v(" list")]),s._v(" "),t("ul",[t("li",[s._v("ziplist")]),s._v(" "),t("li",[s._v("linkedlist")])]),s._v(" "),t("p",[s._v("list-max-ziplist-entries=512\nlist-max-ziplist-value=64")]),s._v(" "),t("h4",{attrs:{id:"hash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hash"}},[s._v("#")]),s._v(" hash")]),s._v(" "),t("ul",[t("li",[s._v("ziplist")]),s._v(" "),t("li",[s._v("hashtable")])]),s._v(" "),t("h4",{attrs:{id:"set"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[s._v("#")]),s._v(" set")]),s._v(" "),t("ul",[t("li",[s._v("intset")]),s._v(" "),t("li",[s._v("hashtable")])]),s._v(" "),t("h4",{attrs:{id:"zset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zset"}},[s._v("#")]),s._v(" zset")]),s._v(" "),t("ul",[t("li",[s._v("ziplist")]),s._v(" "),t("li",[s._v("skiplist")])]),s._v(" "),t("p",[s._v("zset-max-ziplist-entries=128\nzset-max-ziplist-value=65")]),s._v(" "),t("h3",{attrs:{id:"redis-和-memcache-有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-和-memcache-有什么区别"}},[s._v("#")]),s._v(" Redis 和 memcache 有什么区别？")]),s._v(" "),t("p",[s._v("存储方式不同：memcache 把数据全部存在内存之中，断电后会挂掉，数据不能超过内存大小；Redis 有部份存在硬盘上，这样能保证数据的持久性。\n数据支持类型：memcache 对数据类型支持相对简单；Redis 有复杂的数据类型。\n使用底层模型不同：它们之间底层实现方式，以及与客户端之间通信的应用协议不一样，Redis 自己构建了 vm 机制，因为一般的系统调用系统函数的话，会浪费一定的时间去移动和请求。\nvalue 值大小不同：Redis 最大可以达到 512mb；memcache 只有 1mb。")]),s._v(" "),t("h3",{attrs:{id:"redis-为什么是单线程的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-为什么是单线程的"}},[s._v("#")]),s._v(" Redis 为什么是单线程的？")]),s._v(" "),t("p",[s._v("因为 cpu 不是 Redis 的瓶颈，Redis 的瓶颈最有可能是机器内存或者网络带宽。既然单线程容易实现，而且 cpu 又不会成为瓶颈，那就顺理成章地采用单线程的方案了。")]),s._v(" "),t("p",[s._v("关于 Redis 的性能，官方网站也有，普通笔记本轻松处理每秒几十万的请求。")]),s._v(" "),t("p",[s._v("而且单线程并不代表就慢 nginx 和 nodejs 也都是高性能单线程的代表。")]),s._v(" "),t("h3",{attrs:{id:"什么是缓存穿透-怎么解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是缓存穿透-怎么解决"}},[s._v("#")]),s._v(" 什么是缓存穿透？怎么解决？")]),s._v(" "),t("p",[s._v("缓存穿透：指查询一个一定不存在的数据，由于缓存是不命中时需要从数据库查询，查不到数据则不写入缓存，这将导致这个不存在的数据每次请求都要到数据库去查询，造成缓存穿透。")]),s._v(" "),t("p",[s._v("解决方案：最简单粗暴的方法如果一个查询返回的数据为空（不管是数据不存在，还是系统故障），我们就把这个空结果进行缓存，但它的过期时间会很短，最长不超过五分钟。")]),s._v(" "),t("h3",{attrs:{id:"redis-支持的数据类型有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-支持的数据类型有哪些"}},[s._v("#")]),s._v(" Redis 支持的数据类型有哪些？")]),s._v(" "),t("p",[s._v("Redis 支持的数据类型：string（字符串）、list（列表）、hash（字典）、set（集合）、zset（有序集合）。")]),s._v(" "),t("h3",{attrs:{id:"redis-支持的-java-客户端都有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-支持的-java-客户端都有哪些"}},[s._v("#")]),s._v(" Redis 支持的 Java 客户端都有哪些？")]),s._v(" "),t("p",[s._v("支持的 Java 客户端有 Redisson、jedis、lettuce 等。")]),s._v(" "),t("h3",{attrs:{id:"jedis-和-redisson-有哪些区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jedis-和-redisson-有哪些区别"}},[s._v("#")]),s._v(" jedis 和 Redisson 有哪些区别？")]),s._v(" "),t("p",[s._v("jedis：提供了比较全面的 Redis 命令的支持。\nRedisson：实现了分布式和可扩展的 Java 数据结构，与 jedis 相比 Redisson 的功能相对简单，不支持排序、事务、管道、分区等 Redis 特性。")]),s._v(" "),t("h3",{attrs:{id:"怎么保证缓存和数据库数据的一致性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#怎么保证缓存和数据库数据的一致性"}},[s._v("#")]),s._v(" 怎么保证缓存和数据库数据的一致性？")]),s._v(" "),t("p",[s._v("合理设置缓存的过期时间。\n新增、更改、删除数据库操作时同步更新 Redis，可以使用事务机制来保证数据的一致性。")]),s._v(" "),t("h3",{attrs:{id:"redis-持久化有几种方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-持久化有几种方式"}},[s._v("#")]),s._v(" Redis 持久化有几种方式？")]),s._v(" "),t("p",[s._v("Redis 的持久化有两种方式，或者说有两种策略：")]),s._v(" "),t("p",[s._v("RDB（Redis Database）：指定的时间间隔能对你的数据进行快照存储。\nAOF（Append Only File）：每一个收到的写命令都通过write函数追加到文件中。")]),s._v(" "),t("h3",{attrs:{id:"redis-怎么实现分布式锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-怎么实现分布式锁"}},[s._v("#")]),s._v(" Redis 怎么实现分布式锁？")]),s._v(" "),t("p",[s._v("Redis 分布式锁其实就是在系统里面占一个“坑”，其他程序也要占“坑”的时候，占用成功了就可以继续执行，失败了就只能放弃或稍后重试。")]),s._v(" "),t("p",[s._v("占坑一般使用 setnx(set if not exists)指令，只允许被一个程序占有，使用完调用 del 释放锁。")]),s._v(" "),t("h3",{attrs:{id:"redis-如何做内存优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-如何做内存优化"}},[s._v("#")]),s._v(" Redis 如何做内存优化？")]),s._v(" "),t("p",[s._v("尽量使用 Redis 的散列表，把相关的信息放到散列表里面存储，而不是把每个字段单独存储，这样可以有效的减少内存使用。比如将 Web 系统的用户对象，应该放到散列表里面再整体存储到 Redis，而不是把用户的姓名、年龄、密码、邮箱等字段分别设置 key 进行存储。")]),s._v(" "),t("h3",{attrs:{id:"redis-淘汰策略有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-淘汰策略有哪些"}},[s._v("#")]),s._v(" Redis 淘汰策略有哪些？")]),s._v(" "),t("p",[s._v("volatile-lru：从已设置过期时间的数据集（server. db[i]. expires）中挑选最近最少使用的数据淘汰。")]),s._v(" "),t("p",[s._v("volatile-ttl：从已设置过期时间的数据集（server. db[i]. expires）中挑选将要过期的数据淘汰。")]),s._v(" "),t("p",[s._v("volatile-random：从已设置过期时间的数据集（server. db[i]. expires）中任意选择数据淘汰。")]),s._v(" "),t("p",[s._v("allkeys-lru：从数据集（server. db[i]. dict）中挑选最近最少使用的数据淘汰。")]),s._v(" "),t("p",[s._v("allkeys-random：从数据集（server. db[i]. dict）中任意选择数据淘汰。")]),s._v(" "),t("p",[s._v("no-enviction（驱逐）：禁止驱逐数据。")]),s._v(" "),t("h3",{attrs:{id:"redis-常见的性能问题有哪些-该如何解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-常见的性能问题有哪些-该如何解决"}},[s._v("#")]),s._v(" Redis 常见的性能问题有哪些？该如何解决？")]),s._v(" "),t("p",[s._v("主服务器写内存快照，会阻塞主线程的工作，当快照比较大时对性能影响是非常大的，会间断性暂停服务，所以主服务器最好不要写内存快照。\nRedis 主从复制的性能问题，为了主从复制的速度和连接的稳定性，主从库最好在同一个局域网内。\nJVM")]),s._v(" "),t("h3",{attrs:{id:"redis-事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-事务"}},[s._v("#")]),s._v(" Redis 事务")]),s._v(" "),t("ul",[t("li",[s._v("MULTI 开启事务，redis会将后续的命令逐个放入队列中")]),s._v(" "),t("li",[s._v("EXEC  执行事务中的所有操作命令")]),s._v(" "),t("li",[s._v("DISCARD 取消事务，放弃执行事务块中的所有命令")]),s._v(" "),t("li",[s._v("WATCH 监视一个或多个key,如果事务在执行前，这个key(或多个key)被其他命令修改，则事务被中断，不会执行事务中的任何命令")]),s._v(" "),t("li",[s._v("UNWATCH 取消WATCH对所有key的监视")])]),s._v(" "),t("p",[s._v("非原子性")]),s._v(" "),t("h3",{attrs:{id:"过期键删除策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#过期键删除策略"}},[s._v("#")]),s._v(" 过期键删除策略")]),s._v(" "),t("ul",[t("li",[s._v("定时删除：在设置键的过期时间的同时，创建一个定时器，让定时器在键的过期时间来临时，立即执行对键的删除操作")]),s._v(" "),t("li",[s._v("惰性删除：放任键过期不管，但是每次从键空间中获取键时，都检查取得的键是否过期，如果过期的话，就删除该键；如果没有过期，就返回该键")]),s._v(" "),t("li",[s._v("定期删除：每隔一段时间，程序就对数据库进行一次检查，删除里面的过期键。至于要删除多个过期键，以及要检查多少个数据库，则由算法决定")])]),s._v(" "),t("h3",{attrs:{id:"redis热点数据如何处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis热点数据如何处理"}},[s._v("#")]),s._v(" Redis热点数据如何处理")]),s._v(" "),t("p",[s._v("热key问题就是，突然有几十万的请求去访问redis上的某个特定key")]),s._v(" "),t("h4",{attrs:{id:"如何发现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何发现"}},[s._v("#")]),s._v(" 如何发现")]),s._v(" "),t("p",[s._v("方法一: 凭借业务经验，进行预估哪些是热key")]),s._v(" "),t("p",[s._v("其实这个方法还是挺有可行性的。比如某商品在做秒杀，那这个商品的key就可以判断出是热key。缺点很明显，并非所有业务都能预估出哪些key是热key。")]),s._v(" "),t("p",[s._v("方法二: 在客户端进行收集")]),s._v(" "),t("p",[s._v("这个方式就是在操作redis之前，加入一行代码进行数据统计。那么这个数据统计的方式有很多种，也可以是给外部的通讯系统发送一个通知信息。缺点就是对客户端代码造成入侵。")]),s._v(" "),t("p",[s._v("方法三: 在Proxy层做收集")]),s._v(" "),t("p",[s._v("有些集群架构是下面这样的，Proxy可以是Twemproxy，是统一的入口。可以在Proxy层做收集上报，但是缺点很明显，并非所有的redis集群架构都有proxy")]),s._v(" "),t("p",[s._v("方法四: 用redis自带命令")]),s._v(" "),t("ol",[t("li",[s._v("monitor命令，该命令可以实时抓取出redis服务器接收到的命令，然后写代码统计出热key是啥。当然，也有现成的分析工具可以给你使用，比如redis-faina。但是该命令在高并发的条件下，有内存增暴增的隐患，还会降低redis的性能。")]),s._v(" "),t("li",[s._v("hotkeys参数，redis 4.0.3提供了redis-cli的热点key发现功能，执行redis-cli时加上 "),t("code",[s._v("–hotkeys")]),s._v(" 选项即可。但是该参数在执行的时候，如果key比较多，执行起来比较慢")])]),s._v(" "),t("h4",{attrs:{id:"解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[s._v("#")]),s._v(" 解决")]),s._v(" "),t("ul",[t("li",[s._v("利用二级缓存")])]),s._v(" "),t("p",[s._v("利用ehcache，或者一个HashMap都可以。在你发现热key以后，把热key加载到系统的JVM中。\n针对这种热key请求，会直接从jvm中取，而不会走到redis层")]),s._v(" "),t("ul",[t("li",[s._v("备份热key，多机查询")])]),s._v(" "),t("p",[s._v("不要让key走到同一台redis上不就行了。我们把这个key，在多个redis上都存一份不就好了。接下来，有热key请求进来的时候，我们就在有备份的redis上随机选取一台，进行访问取值，返回数据")]),s._v(" "),t("h3",{attrs:{id:"io多路复用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#io多路复用"}},[s._v("#")]),s._v(" IO多路复用")]),s._v(" "),t("p",[s._v("I/O多路复用就通过一种机制，可以监视多个描述符，一旦某个描述符就绪，能够通知程序进行相应的操作")]),s._v(" "),t("ul",[t("li",[s._v("select")])]),s._v(" "),t("p",[s._v("select 函数监视文件描述符，调用后select函数会阻塞，直到有描述符就绪，或者超时函数返回. 当select函数返回后，就可以遍历描述符，找到就绪的描述符。\nselect 缺点在于单个进程能够监视的文件描述符的数量也存在最大限制，在Linux上一般为1024，可以通过修改宏定义甚至重新编译内核的方式提升这一限制")]),s._v(" "),t("p",[s._v("涉及大量kernel和用户态拷贝 消耗大")]),s._v(" "),t("ul",[t("li",[s._v("poll")])]),s._v(" "),t("p",[s._v("没有最大限制（但是数量过大后性能也是会下降）。\n和select函数一样，poll返回后，需要轮询来获取就绪的描述符。\nselect和poll都需要在返回后，通过遍历文件描述符来获取已经就绪的socket。")]),s._v(" "),t("p",[s._v("事实上，同时连接的大量客户端在同一时刻可能只有很少的就绪状态，因此随着监视的描述符数量的增长，其效率也会线性下降。")]),s._v(" "),t("ul",[t("li",[s._v("epoll")])]),s._v(" "),t("p",[s._v("相对于select和poll来说，epoll更加灵活，没有描述符限制。epoll使用一个文件描述符管理多个描述符")])])}),[],!1,null,null,null);e.default=a.exports}}]);