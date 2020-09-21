## String 相关类
> String 被声明为 final，因此它不可被继承。  
> 在 Java 8 中，String 内部使用 char 数组存储数据  
> 在 Java 9 之后，String 类的实现改用 byte 数组存储字符串，同时使用 coder 来标识使用了哪种编码

不可变的优点  
1. 可以缓存 hash 值  
2. String Pool 的需要  
3. 安全性  
4. 线程安全

#### new String("abc")
使用这种方式一共会创建两个字符串对象（前提是 String Pool 中还没有 "abc" 字符串对象）。  
> 1. "abc" 属于字符串字面量，因此编译时期会在 String Pool 中创建一个字符串对象，指向这个 "abc" 字符串字面量；  
> 2. 而使用 new 的方式会在堆中创建一个字符串对象。

#### String, StringBuffer and StringBuilder区别

1. 可变性
>String 不可变
>StringBuffer 和 StringBuilder 可变

2. 线程安全
> String 不可变，因此是线程安全的  
> StringBuilder 不是线程安全的  
> StringBuffer 是线程安全的，内部使用 synchronized 进行同步