---
title: "Java"
---

## 简介

Java 是由 Sun Microsystems 公司于 1995 年 5 月推出的 Java 面向对象程序设计语言和 Java 平台的总称。由 James Gosling和同事们共同研发，并在 1995 年正式推出。
后来 Sun 公司被 Oracle （甲骨文）公司收购，Java 也随之成为 Oracle 公司的产品。

Java分为三个体系:
* JavaSE（J2SE) (Java2 Platform Standard Edition，java平台标准版）
* JavaEE (J2EE) (Java 2 Platform,Enterprise Edition，java平台企业版)
* JavaME (J2ME) (Java 2 Platform Micro Edition，java平台微型版)

2005 年 6 月，JavaOne 大会召开，SUN 公司公开 Java SE 6。此时，Java 的各种版本已经更名，以取消其中的数字 "2"：J2EE 更名为 Java EE，J2SE 更名为Java SE，J2ME 更名为 Java ME。

## 发展历史

部分简略

* 1995 年 5 月 23 日，Java 语言诞生
* 1996 年 1 月，第一个 JDK-JDK1.0 诞生
* 2009 年 04 月 20 日，甲骨文 74 亿美元收购 Sun，取得 Java 的版权
* 2014 年 3 月 18 日，Oracle 公司发表 Java SE 8
* 2018 年 9 月 25 日，Java SE 11 发布


## 安装 

[AdoptOpenJDK](https://adoptopenjdk.net)

```shell
brew tap adoptopenjdk/openjdk

brew install --cask adoptopenjdk8
brew install --cask adoptopenjdk11
```

## 特性

### Java 8

* Lambda 表达式 − Lambda 允许把函数作为一个方法的参数（函数作为参数传递到方法中）。
* 方法引用 − 方法引用提供了非常有用的语法，可以直接引用已有Java类或对象（实例）的方法或构造器。与lambda联合使用，方法引用可以使语言的构造更紧凑简洁，减少冗余代码。
* 默认方法 − 默认方法就是一个在接口里面有了一个实现的方法。
* 新工具 − 新的编译工具，如：Nashorn引擎 jjs、 类依赖分析器jdeps。
* Stream API −新添加的Stream API（java.util.stream） 把真正的函数式编程风格引入到Java中。
* Date Time API − 加强对日期与时间的处理。
* Optional 类 − Optional 类已经成为 Java 8 类库的一部分，用来解决空指针异常。
* Nashorn, JavaScript 引擎 − Java 8提供了一个新的Nashorn javascript引擎，它允许我们在JVM上运行特定的javascript应用。