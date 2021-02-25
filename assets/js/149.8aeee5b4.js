(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{714:function(a,v,_){"use strict";_.r(v);var t=_(28),s=Object(t.a)({},(function(){var a=this,v=a.$createElement,_=a._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("h2",{attrs:{id:"mysql"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[a._v("#")]),a._v(" MySQL")]),a._v(" "),_("h3",{attrs:{id:"数据库的三范式是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据库的三范式是什么"}},[a._v("#")]),a._v(" 数据库的三范式是什么？")]),a._v(" "),_("ul",[_("li",[a._v("第一范式：强调的是列的原子性，即数据库表的每一列都是不可分割的原子数据项。")]),a._v(" "),_("li",[a._v("第二范式：要求实体的属性完全依赖于主关键字。所谓完全依赖是指不能存在仅依赖主关键字一部分的属性。")]),a._v(" "),_("li",[a._v("第三范式：任何非主属性不依赖于其它非主属性。要求一个数据库表中不包含已在其它表中已包含的非主关键字信息，避免冗余保存其它表中的数据")])]),a._v(" "),_("h3",{attrs:{id:"一张自增表里面总共有-7-条数据-删除了最后-2-条数据-重启-mysql-数据库-又插入了一条数据-此时-id-是几"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一张自增表里面总共有-7-条数据-删除了最后-2-条数据-重启-mysql-数据库-又插入了一条数据-此时-id-是几"}},[a._v("#")]),a._v(" 一张自增表里面总共有 7 条数据，删除了最后 2 条数据，重启 MySQL 数据库，又插入了一条数据，此时 id 是几？")]),a._v(" "),_("ul",[_("li",[a._v("表类型如果是 MyISAM ，那 id 就是 8")]),a._v(" "),_("li",[a._v("表类型如果是 InnoDB，那 id 就是 6。 InnoDB 表只会把自增主键的最大 id 记录在内存中，所以重启之后会导致最大 id 丢失。")])]),a._v(" "),_("h3",{attrs:{id:"如何获取当前数据库版本"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何获取当前数据库版本"}},[a._v("#")]),a._v(" 如何获取当前数据库版本？")]),a._v(" "),_("p",[a._v("使用 select version() 获取当前 MySQL 数据库版本。")]),a._v(" "),_("h3",{attrs:{id:"说一下-acid-是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#说一下-acid-是什么"}},[a._v("#")]),a._v(" 说一下 ACID 是什么？")]),a._v(" "),_("ul",[_("li",[a._v("Atomicity（原子性）：一个事务（transaction）中的所有操作，或者全部完成，或者全部不完成，不会结束在中间某个环节。事务在执行过程中发生错误，会被恢复（Rollback）到事务开始前的状态，就像这个事务从来没有执行过一样。即，事务不可分割、不可约简。")]),a._v(" "),_("li",[a._v("Consistency（一致性）：在事务开始之前和事务结束以后，数据库的完整性没有被破坏。这表示写入的资料必须完全符合所有的预设约束、触发器、级联回滚等。")]),a._v(" "),_("li",[a._v("Isolation（隔离性）：数据库允许多个并发事务同时对其数据进行读写和修改的能力，隔离性可以防止多个事务并发执行时由于交叉执行而导致数据的不一致。事务隔离分为不同级别，包括读未提交（Read uncommitted）、读提交（read committed）、可重复读（repeatable read）和串行化（Serializable）。")]),a._v(" "),_("li",[a._v("Durability（持久性）：事务处理结束后，对数据的修改就是永久的，即便系统故障也不会丢失。")])]),a._v(" "),_("h3",{attrs:{id:"char-和-varchar-的区别是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#char-和-varchar-的区别是什么"}},[a._v("#")]),a._v(" char 和 varchar 的区别是什么？")]),a._v(" "),_("p",[a._v('char(n) ：固定长度类型，比如订阅 char(10)，当你输入"abc"三个字符的时候，它们占的空间还是 10 个字节，其他 7 个是空字节。\nchat 优点：效率高；缺点：占用空间；适用场景：存储密码的 md5 值，固定长度的，使用 char 非常合适。')]),a._v(" "),_("p",[a._v("varchar(n) ：可变长度，存储的值是每个值占用的字节再加上一个用来记录其长度的字节的长度。\n所以，从空间上考虑 varcahr 比较合适；从效率上考虑 char 比较合适，二者使用需要权衡。")]),a._v(" "),_("h3",{attrs:{id:"float-和-double-的区别是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#float-和-double-的区别是什么"}},[a._v("#")]),a._v(" float 和 double 的区别是什么？")]),a._v(" "),_("p",[a._v("float 最多可以存储 8 位的十进制数，并在内存中占 4 字节。\ndouble 最可可以存储 16 位的十进制数，并在内存中占 8 字节。")]),a._v(" "),_("h3",{attrs:{id:"mysql-的内连接、左连接、右连接有什么区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mysql-的内连接、左连接、右连接有什么区别"}},[a._v("#")]),a._v(" MySQL 的内连接、左连接、右连接有什么区别？")]),a._v(" "),_("p",[a._v("内连接关键字：inner join；左连接：left join；右连接：right join。")]),a._v(" "),_("p",[a._v("内连接是把匹配的关联数据显示出来；左连接是左边的表全部显示出来，右边的表显示出符合条件的数据；右连接正好相反。")]),a._v(" "),_("h3",{attrs:{id:"mysql-索引是怎么实现的"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mysql-索引是怎么实现的"}},[a._v("#")]),a._v(" MySQL 索引是怎么实现的？")]),a._v(" "),_("p",[a._v("索引是满足某种特定查找算法的数据结构，而这些数据结构会以某种方式指向数据，从而实现高效查找数据。")]),a._v(" "),_("p",[a._v("具体来说 MySQL 中的索引，不同的数据引擎实现有所不同，但目前主流的数据库引擎的索引都是 B+ 树实现的，B+ 树的搜索效率，可以到达二分法的性能，找到数据区域之后就找到了完整的数据结构了，所有索引的性能也是更好的。")]),a._v(" "),_("h3",{attrs:{id:"怎么验证-mysql-的索引是否满足需求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#怎么验证-mysql-的索引是否满足需求"}},[a._v("#")]),a._v(" 怎么验证 MySQL 的索引是否满足需求？")]),a._v(" "),_("p",[a._v("使用 explain 查看 SQL 是如何执行查询语句的，从而分析你的索引是否满足需求。")]),a._v(" "),_("p",[a._v("explain 语法：explain select * from table where type=1。")]),a._v(" "),_("h3",{attrs:{id:"说一下数据库的事务隔离"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#说一下数据库的事务隔离"}},[a._v("#")]),a._v(" 说一下数据库的事务隔离？")]),a._v(" "),_("p",[a._v("MySQL 的事务隔离是在 MySQL. ini 配置文件里添加的，在文件的最后添加：")]),a._v(" "),_("p",[a._v("transaction-isolation = REPEATABLE-READ\n可用的配置值：READ-UNCOMMITTED、READ-COMMITTED、REPEATABLE-READ、SERIALIZABLE。")]),a._v(" "),_("ul",[_("li",[_("p",[a._v("READ-UNCOMMITTED：未提交读，最低隔离级别、事务未提交前，就可被其他事务读取（会出现幻读、脏读、不可重复读）。")])]),a._v(" "),_("li",[_("p",[a._v("READ-COMMITTED：提交读，一个事务提交后才能被其他事务读取到（会造成幻读、不可重复读）。")])]),a._v(" "),_("li",[_("p",[a._v("REPEATABLE-READ：可重复读，默认级别，保证多次读取同一个数据时，其值都和事务开始时候的内容是一致，禁止读取到别的事务未提交的数据（会造成幻读）。")])]),a._v(" "),_("li",[_("p",[a._v("SERIALIZABLE：序列化，代价最高最可靠的隔离级别，该隔离级别能防止脏读、不可重复读、幻读。\n脏读 ：表示一个事务能够读取另一个事务中还未提交的数据。比如，某个事务尝试插入记录 A，此时该事务还未提交，然后另一个事务尝试读取到了记录 A。")])]),a._v(" "),_("li",[_("p",[a._v("不可重复读 ：是指在一个事务内，多次读同一数据。")])]),a._v(" "),_("li",[_("p",[a._v("幻读 ：指同一个事务内多次查询返回的结果集不一样。比如同一个事务 A 第一次查询时候有 n 条记录，但是第二次同等条件下查询却有 n+1 条记录，这就好像产生了幻觉。发生幻读的原因也是另外一个事务新增或者删除或者修改了第一个事务结果集里面的数据，同一个记录的数据内容被修改了，所有数据行的记录就变多或者变少了。")])])]),a._v(" "),_("h3",{attrs:{id:"说一下-mysql-常用的引擎"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#说一下-mysql-常用的引擎"}},[a._v("#")]),a._v(" 说一下 MySQL 常用的引擎？")]),a._v(" "),_("p",[a._v("InnoDB 引擎：mysql 5.1 后默认的数据库引擎，提供了对数据库 acid 事务的支持，并且还提供了行级锁和外键的约束，它的设计的目标就是处理大数据容量的数据库系统。MySQL 运行的时候，InnoDB 会在内存中建立缓冲池，用于缓冲数据和索引。但是该引擎是不支持全文搜索，同时启动也比较的慢，它是不会保存表的行数的，所以当进行 select count(*) from table 指令的时候，需要进行扫描全表。由于锁的粒度小，写操作是不会锁定全表的,所以在并发度较高的场景下使用会提升效率的。")]),a._v(" "),_("p",[a._v("MyIASM 引擎：不提供事务的支持，也不支持行级锁和外键。因此当执行插入和更新语句时，即执行写操作的时候需要锁定这个表，所以会导致效率会降低。不过和 InnoDB 不同的是，MyIASM 引擎是保存了表的行数，于是当进行 select count(*) from table 语句时，可以直接的读取已经保存的值而不需要进行扫描全表。所以，如果表的读操作远远多于写操作时，并且不需要事务的支持的，可以将 MyIASM 作为数据库引擎的首选。")]),a._v(" "),_("h3",{attrs:{id:"说一下-mysql-的行锁和表锁"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#说一下-mysql-的行锁和表锁"}},[a._v("#")]),a._v(" 说一下 MySQL 的行锁和表锁？")]),a._v(" "),_("p",[a._v("MyISAM 只支持表锁，InnoDB 支持表锁和行锁，默认为行锁。")]),a._v(" "),_("p",[a._v("表级锁：开销小，加锁快，不会出现死锁。锁定粒度大，发生锁冲突的概率最高，并发量最低。\n行级锁：开销大，加锁慢，会出现死锁。锁力度小，发生锁冲突的概率小，并发度最高。")]),a._v(" "),_("h3",{attrs:{id:"说一下乐观锁和悲观锁"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#说一下乐观锁和悲观锁"}},[a._v("#")]),a._v(" 说一下乐观锁和悲观锁？")]),a._v(" "),_("p",[a._v("乐观锁：每次去拿数据的时候都认为别人不会修改，所以不会上锁，但是在提交更新的时候会判断一下在此期间别人有没有去更新这个数据。\n悲观锁：每次去拿数据的时候都认为别人会修改，所以每次在拿数据的时候都会上锁，这样别人想拿这个数据就会阻止，直到这个锁被释放。\n数据库的乐观锁需要自己实现，在表里面添加一个 version 字段，每次修改成功值加 1，这样每次修改的时候先对比一下，自己拥有的 version 和数据库现在的 version 是否一致，如果不一致就不修改，这样就实现了乐观锁。")]),a._v(" "),_("h3",{attrs:{id:"mysql-问题排查都有哪些手段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mysql-问题排查都有哪些手段"}},[a._v("#")]),a._v(" MySQL 问题排查都有哪些手段？")]),a._v(" "),_("p",[a._v("使用 show processlist 命令查看当前所有连接信息。\n使用 explain 命令查询 SQL 语句执行计划。\n开启慢查询日志，查看慢查询的 SQL。")]),a._v(" "),_("h3",{attrs:{id:"如何做-mysql-的性能优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何做-mysql-的性能优化"}},[a._v("#")]),a._v(" 如何做 MySQL 的性能优化？")]),a._v(" "),_("p",[a._v("为搜索字段创建索引。\n避免使用 select *，列出需要查询的字段。\n垂直分割分表。\n选择正确的存储引擎。")]),a._v(" "),_("h3",{attrs:{id:"b-树-的特点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#b-树-的特点"}},[a._v("#")]),a._v(" B+ 树 的特点")]),a._v(" "),_("p",[a._v("b+树，层数越多，数据量指数级增长")]),a._v(" "),_("h3",{attrs:{id:"select-执行过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#select-执行过程"}},[a._v("#")]),a._v(" select 执行过程")]),a._v(" "),_("ol",[_("li",[_("p",[a._v("与 MySQL 建立连接。")])]),a._v(" "),_("li",[_("p",[a._v("查询缓存，这是 MySQL 的一个可优化查询的地方，如果开启了 Query Cache 且在查询缓存过程中查询到完全相同的 SQL 语句，则将查询结果直接返回给客户端；如果没有开启Query Cache 或者没有查询到完全相同的 SQL 语句则会由解析器进行语法语义解析，并生成解析树")])]),a._v(" "),_("li",[_("p",[a._v("预处理器生成新的解析树")])]),a._v(" "),_("li",[_("p",[a._v("查询优化器生成执行计划")])]),a._v(" "),_("li",[_("p",[a._v("查询执行引擎执行 SQL 语句，此时查询执行引擎会根据 SQL 语句中表的存储引擎类型，以及对应的 API 接口与底层存储引擎缓存或者物理文件的交互情况，得到查询结果，由MySQL Server 过滤后将查询结果缓存并返回给客户端。若开启了 Query Cache，这时也会将SQL 语句和结果完整地保存到 Query Cache 中，以后若有相同的 SQL 语句执行则直接返回结果")])])]),a._v(" "),_("h3",{attrs:{id:"from-where-group-by-having-select-order-by-limit"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#from-where-group-by-having-select-order-by-limit"}},[a._v("#")]),a._v(" from---where--group by---having---select---order by---limit")]),a._v(" "),_("p",[a._v("执行顺序")]),a._v(" "),_("h3",{attrs:{id:"explain"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#explain"}},[a._v("#")]),a._v(" Explain")]),a._v(" "),_("ul",[_("li",[a._v("id:选择标识符")]),a._v(" "),_("li",[a._v("select_type:表示查询的类型。")]),a._v(" "),_("li",[a._v("table:输出结果集的表")]),a._v(" "),_("li",[a._v("partitions:匹配的分区")]),a._v(" "),_("li",[a._v("type:表示表的连接类型")]),a._v(" "),_("li",[a._v("possible_keys:表示查询时，可能使用的索引")]),a._v(" "),_("li",[a._v("key:表示实际使用的索引")]),a._v(" "),_("li",[a._v("key_len:索引字段的长度")]),a._v(" "),_("li",[a._v("ref:列与索引的比较")]),a._v(" "),_("li",[a._v("rows:扫描出的行数(估算的行数)")]),a._v(" "),_("li",[a._v("filtered:按表条件过滤的行百分比")]),a._v(" "),_("li",[a._v("Extra:执行情况的描述和说明")])]),a._v(" "),_("p",[_("strong",[a._v("主要关注")])]),a._v(" "),_("ul",[_("li",[a._v("type\t本次查询表联接类型，从这里可以看到本次查询大概的效率")]),a._v(" "),_("li",[a._v("key\t最终选择的索引，如果没有索引的话，本次查询效率通常很差")]),a._v(" "),_("li",[a._v("key_len\t本次查询用于结果过滤的索引实际长度，参见另一篇分享(FAQ系列-解读EXPLAIN执行计划中的key_len)")]),a._v(" "),_("li",[a._v("rows\t预计需要扫描的记录数，预计需要扫描的记录数越小越好")]),a._v(" "),_("li",[a._v("Extra\t额外附加信息，主要确认是否出现 Using filesort、Using temporary 这两种情况")])]),a._v(" "),_("h3",{attrs:{id:"mysql-存储引擎的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mysql-存储引擎的区别"}},[a._v("#")]),a._v(" mysql 存储引擎的区别")]),a._v(" "),_("ol",[_("li",[a._v("MyISAM")])]),a._v(" "),_("ul",[_("li",[a._v("不支持事务，但是整个操作是原子性的")]),a._v(" "),_("li",[a._v("不支持外键，支持表锁，每次所住的是整张表")]),a._v(" "),_("li",[a._v("一个MyISAM表有三个文件：索引文件，表结构文件，数据文件")]),a._v(" "),_("li",[a._v("采用非聚集索引，索引文件的数据域存储指向数据文件的指针")]),a._v(" "),_("li",[a._v("支持全文索引和空间索引")]),a._v(" "),_("li",[a._v("存储表的总行数，执行select count(*) from table时只要简单的读出保存好的行数即可")]),a._v(" "),_("li",[a._v("对于AUTO_INCREMENT类型的字段，在MyISAM表中，可以和其他字段一起建立联合索引")])]),a._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[a._v("Innodb")])]),a._v(" "),_("ul",[_("li",[a._v("支持事务，支持事务的四种隔离级别")]),a._v(" "),_("li",[a._v("支持行锁和外键约束，因此可以支持写并发")]),a._v(" "),_("li",[a._v("不存储总行数 内存存储")]),a._v(" "),_("li",[a._v("DELETE FROM table时，InnoDB不会重新建立表，而是一行一行的删除")]),a._v(" "),_("li",[a._v("主键索引采用聚集索引（索引的数据域存储数据文件本身），辅索引的数据域存储主键的值")]),a._v(" "),_("li",[a._v("对于AUTO_INCREMENT类型的字段，InnoDB中必须包含只有该字段的索引")])]),a._v(" "),_("h3",{attrs:{id:"什么是主从复制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是主从复制"}},[a._v("#")]),a._v(" 什么是主从复制")]),a._v(" "),_("p",[a._v("将主数据库中的DDL和DML操作通过二进制日志传输到从数据库上，然后将这些日志重新执行（重做）；从而使得从数据库的数据与主数据库保持一致")]),a._v(" "),_("p",[a._v("过程:")]),a._v(" "),_("ol",[_("li",[a._v("主服务器上面的任何修改都会通过自己的 I/O tread(I/O 线程)保存在二进制日志 "),_("code",[a._v("Binlog")]),a._v(" 里面")]),a._v(" "),_("li",[a._v("从服务器上面也启动一个 I/O thread, 连接到主服务器上面请求读取二进制日志，然后把读取到的二进制日志写到本地的一个 "),_("code",[a._v("Realy log")]),a._v("（中继日志）里面")]),a._v(" "),_("li",[a._v("从服务器上面同时开启一个 SQL thread 定时检查 "),_("code",[a._v("Realy log")]),a._v(" (这个文件也是二进制的)，如果发现有更新立即把更新的内容在本机的数据库上面执行一遍")])]),a._v(" "),_("h3",{attrs:{id:"主从复制的作用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#主从复制的作用"}},[a._v("#")]),a._v(" 主从复制的作用")]),a._v(" "),_("ol",[_("li",[a._v("主数据库出现问题，可以切换到从数据库。")]),a._v(" "),_("li",[a._v("可以进行数据库层面的读写分离。")]),a._v(" "),_("li",[a._v("可以在从数据库上进行日常备份。")])]),a._v(" "),_("h3",{attrs:{id:"锁"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#锁"}},[a._v("#")]),a._v(" 锁")]),a._v(" "),_("ul",[_("li",[a._v("表锁：开销小，加锁快；不会出现死锁；锁定力度大，发生锁冲突概率高，并发度最低")]),a._v(" "),_("li",[a._v("行锁：开销大，加锁慢；会出现死锁；锁定粒度小，发生锁冲突的概率低，并发度高")]),a._v(" "),_("li",[a._v("页锁：开销和加锁速度介于表锁和行锁之间；会出现死锁；锁定粒度介于表锁和行锁之间，并发度一般")])]),a._v(" "),_("p",[a._v("当更新条件没有使用索引时，行锁升级为表锁")]),a._v(" "),_("h3",{attrs:{id:"mvcc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mvcc"}},[a._v("#")]),a._v(" MVCC")]),a._v(" "),_("p",[a._v("多版本并发控制, MVCC 是一种并发控制的方法，一般在数据库管理系统中，实现对数据库的并发访问")]),a._v(" "),_("h3",{attrs:{id:"索引失效"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#索引失效"}},[a._v("#")]),a._v(" 索引失效")]),a._v(" "),_("ul",[_("li",[a._v("全值匹配")]),a._v(" "),_("li",[a._v("违背最左前缀法则")]),a._v(" "),_("li",[a._v("不在索引列上做任何操作（计算、函数、（自动or手动）类型转换），会导致索引失效而转向全表扫描")]),a._v(" "),_("li",[a._v("存储引擎不能使用索引中范围条件右边的列")]),a._v(" "),_("li",[a._v("尽量使用覆盖索引（只访问索引的查询（索引列和查询列一直）），减少select *")]),a._v(" "),_("li",[a._v("mysql在使用不等于（!=或者<>）的时候无法使用索引会导致全表扫描")]),a._v(" "),_("li",[a._v("is null， is not null也无法使用索引")]),a._v(" "),_("li",[a._v("like 以通配符开头（‘%abc...’）mysql索引失效会变成全表扫描的操作")]),a._v(" "),_("li",[a._v("字符串不加单引号索引失效")]),a._v(" "),_("li",[a._v("少用or，用它来连接时索引会失效")])]),a._v(" "),_("h3",{attrs:{id:"慢日志"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#慢日志"}},[a._v("#")]),a._v(" 慢日志")]),a._v(" "),_("p",[a._v("如何打开慢查询 ： SET GLOBAL slow_query_log = ON;\n将默认时间改为1S： SET GLOBAL long_query_time = 1;")]),a._v(" "),_("p",[a._v("cat /var/log/mysql/slow.log")]),a._v(" "),_("h3",{attrs:{id:"order-by"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#order-by"}},[a._v("#")]),a._v(" order by")]),a._v(" "),_("p",[a._v("如果select 只查询索引字段，order by 索引字段会用到索引，要不然就是全表排列")]),a._v(" "),_("h3",{attrs:{id:"大表怎么优化-某个表有近千万数据-crud比较慢-如何优化-分库分表了是怎么做的-分表分库了有什么问题-有用到中间件么-他们的原理知道么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#大表怎么优化-某个表有近千万数据-crud比较慢-如何优化-分库分表了是怎么做的-分表分库了有什么问题-有用到中间件么-他们的原理知道么"}},[a._v("#")]),a._v(" 大表怎么优化？某个表有近千万数据，CRUD比较慢，如何优化？分库分表了是怎么做的？分表分库了有什么问题？有用到中间件么？他们的原理知道么？")]),a._v(" "),_("p",[a._v("当MySQL单表记录数过大时，数据库的CRUD性能会明显下降，一些常见的优化措施如下：")]),a._v(" "),_("p",[a._v("限定数据的范围：务必禁止不带任何限制数据范围条件的查询语句。比如：我们当用户在查询订单历史的时候，我们可以控制在一个月的范围内。；")]),a._v(" "),_("p",[a._v("读/写分离：经典的数据库拆分方案，主库负责写，从库负责读；")]),a._v(" "),_("p",[a._v("缓存：使用MySQL的缓存，另外对重量级、更新少的数据可以考虑使用应用级别的缓存")]),a._v(" "),_("p",[a._v("通过分库分表的方式进行优化，主要有垂直分表和水平分表")]),a._v(" "),_("h3",{attrs:{id:"分库分表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分库分表"}},[a._v("#")]),a._v(" 分库分表")]),a._v(" "),_("p",[a._v("中间件 cobar mycat sharding-jdbc")]),a._v(" "),_("p",[a._v("垂直拆分 把一个有很多字段的表给拆分成多个表，或者是多个库上去")]),a._v(" "),_("p",[a._v("水平拆分 分库 一次取模运算，分表 两次取模预算")]),a._v(" "),_("p",[a._v("代理层")]),a._v(" "),_("h4",{attrs:{id:"分布式事务处理困难"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分布式事务处理困难"}},[a._v("#")]),a._v(" 分布式事务处理困难")]),a._v(" "),_("h4",{attrs:{id:"夸节点join困难"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#夸节点join困难"}},[a._v("#")]),a._v(" 夸节点join困难")]),a._v(" "),_("ul",[_("li",[a._v("字段冗余")]),a._v(" "),_("li",[a._v("系统层组装")])]),a._v(" "),_("h3",{attrs:{id:"雪花算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#雪花算法"}},[a._v("#")]),a._v(" 雪花算法")]),a._v(" "),_("ul",[_("li",[a._v("1 bit：不用，为啥呢？因为二进制里第一个 bit 为如果是 1，那么都是负数，但是我们生成的 id 都是正数，所以第一个 bit 统一都是 0。")]),a._v(" "),_("li",[a._v("41 bit：表示的是时间戳，单位是毫秒。41 bit 可以表示的数字多达 2^41 - 1，也就是可以标识 2^41 - 1 个毫秒值，换算成年就是表示69年的时间。")]),a._v(" "),_("li",[a._v("10 bit：记录工作机器 id，代表的是这个服务最多可以部署在 2^10台机器上哪，也就是1024台机器。但是 10 bit 里 5 个 bit 代表机房 id，5 个 bit 代表机器 id。意思就是最多代表 2^5个机房（32个机房），每个机房里可以代表 2^5 个机器（32台机器）。")]),a._v(" "),_("li",[a._v("12 bit：这个是用来记录同一个毫秒内产生的不同 id，12 bit 可以代表的最大正整数是 2^12 - 1 = 4096，也就是说可以用这个 12 bit 代表的数字来区分同一个毫秒内的 4096 个不同的 id。")])]),a._v(" "),_("h3",{attrs:{id:"回表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#回表"}},[a._v("#")]),a._v(" 回表")]),a._v(" "),_("p",[a._v("MySQL innodb的主键索引是簇集索引，也就是索引的叶子节点存的是整个单条记录的所有字段值，不是主键索引的就是非簇集索引，非簇集索引的叶子节点存的是主键字段的值。")]),a._v(" "),_("p",[a._v("回表是什么意思？就是你执行一条sql语句，需要从两个b+索引中去取数据。\n举个例子：表tbl有a,b,c三个字段，其中a是主键，b上建了索引，然后编写sql语句")]),a._v(" "),_("div",{staticClass:"language-sql extra-class"},[_("pre",{pre:!0,attrs:{class:"language-sql"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" tbl "),_("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" a"),_("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),_("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[a._v("-- 这样不会产生回表，因为所有的数据在a的索引树中均能找到")]),a._v("\n")])])]),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v("SELECT * FROM tbl WHERE b=1\n")])])]),_("p",[a._v("这样就会产生回表，因为where条件是b字段，那么会去b的索引树里查找数据，但b的索引里面只有a,b两个字段的值，没有c，那么这个查询为了取到c字段，就要取出主键a的值，然后去a的索引树去找c字段的数据。")]),a._v(" "),_("p",[a._v("查了两个索引树，这就叫回表。")]),a._v(" "),_("p",[a._v("索引覆盖就是查这个索引能查到你所需要的所有数据，不需要去另外的数据结构去查。")]),a._v(" "),_("p",[a._v("其实就是不用回表。怎么避免？")]),a._v(" "),_("p",[a._v("不是必须的字段就不要出现在SELECT里面 或者b,c建联合索引。")]),a._v(" "),_("p",[a._v("但具体情况要具体分析，索引字段多了，存储和插入数据时的消耗会更大。这是个平衡问题")]),a._v(" "),_("h3",{attrs:{id:"避免回表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#避免回表"}},[a._v("#")]),a._v(" 避免回表")]),a._v(" "),_("ul",[_("li",[a._v("用主键搜索")]),a._v(" "),_("li",[a._v("只查询被联合索引覆盖的字段")])]),a._v(" "),_("h3",{attrs:{id:"什么是索引覆盖"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是索引覆盖"}},[a._v("#")]),a._v(" 什么是索引覆盖?")]),a._v(" "),_("p",[a._v("索引覆盖: 通过普通索引查询的时候,不需要回表查询,直接可以获取到对应的数据")]),a._v(" "),_("h3",{attrs:{id:"mysql事务隔离级别的实现原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mysql事务隔离级别的实现原理"}},[a._v("#")]),a._v(" MySQL事务隔离级别的实现原理")]),a._v(" "),_("p",[a._v("MVCC(多版本并发控制)和锁")]),a._v(" "),_("p",[a._v("MVCC\n在InnoDB中，给每行增加两个隐藏字段来实现MVCC，一个用来记录数据行的创建时间，另一个用来记录行的过期时间（删除时间）。在实际操作中，存储的并不是时间，而是事务的版本号，每开启一个新事务，事务的版本号就会递增")]),a._v(" "),_("p",[a._v("锁\nShared Locks(共享锁/S锁)\nExclusive Locks(排它锁/X锁)\nGap Locks(间隙锁)\nNext-Key Locks(间隙锁)\n行锁 表锁")]),a._v(" "),_("p",[a._v("select ... for update: 会加排它锁\ninsert、delete和update都是会加排它锁(Exclusive Locks)的")]),a._v(" "),_("div",{staticClass:"language-sql extra-class"},[_("pre",{pre:!0,attrs:{class:"language-sql"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" @"),_("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@transaction_isolation")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),_("p",[a._v("set global/session transaction isolation level read committed;")]),a._v(" "),_("p",[a._v("REPEATABLE READ\nREAD COMMITTED\nREAD UNCOMMITTED\nSERIALIZABLE")]),a._v(" "),_("p",[a._v("my.ini")]),a._v(" "),_("p",[a._v("[mysqld]\ntransaction-isolation = REPEATABLE-READ\ntransaction-read-only = OFF")])])}),[],!1,null,null,null);v.default=s.exports}}]);