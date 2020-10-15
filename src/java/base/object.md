---
title: '面向对象'
---

## Java

Java 是面向对象的编程语言，对象就是面向对象程序设计的核心。所谓对象就是真实世界中的实体，对象与实体是一一对应的，也就是说现实世界中每一个实体都是一个对象，它是一种具体的概念。

对象有以下特点：

- 对象具有属性和行为。
- 对象具有变化的状态。
- 对象具有唯一性。
- 对象都是某个类别的实例。
-  一切皆为对象，真实世界中的所有事物都可以视为对象。

## 核心特性

### 抽象

1. 万物皆对象
2. 程序是对象的集合、通过发送消息来告知彼此所要做的
3. 每个对象都有自己的由其他对象所构成的存储
4. 每个对象都拥有其类型
5. 某一特定类型的所有对象都可以接受同样的消息

### 继承

> Java 只支持单继承
> 

继承性是指子类拥有父类的全部特征和行为，这是类之间的一种关系。

### 封装
将代码及其处理的数据绑定在一起的一种编程机制，该机制保证了程序和数据都不受外部干扰且不被误用

### 多态

> 多态性允许一个接口被多个同类使用
> 

同一个行为具有不同表现形式或形态的能力

## Object

```java
public class Object {
    private static native void registerNatives();
    static {
        registerNatives();
    }

    @HotSpotIntrinsicCandidate
    public Object() {}

    @HotSpotIntrinsicCandidate
    public final native Class<?> getClass();

    @HotSpotIntrinsicCandidate
    public native int hashCode();

    public boolean equals(Object obj) {
        return (this == obj);
    }

    @HotSpotIntrinsicCandidate
    protected native Object clone() throws CloneNotSupportedException;

    public String toString() {
        return getClass().getName() + "@" + Integer.toHexString(hashCode());
    }

    @HotSpotIntrinsicCandidate
    public final native void notify();

    @HotSpotIntrinsicCandidate
    public final native void notifyAll();

    public final void wait() throws InterruptedException {
        wait(0L);
    }

    public final native void wait(long timeoutMillis) throws InterruptedException;

    public final void wait(long timeoutMillis, int nanos) throws InterruptedException {
        if (timeoutMillis < 0) {
            throw new IllegalArgumentException("timeoutMillis value is negative");
        }

        if (nanos < 0 || nanos > 999999) {
            throw new IllegalArgumentException(
                                "nanosecond timeout value out of range");
        }

        if (nanos > 0) {
            timeoutMillis++;
        }

        wait(timeoutMillis);
    }

    @Deprecated(since="9")
    protected void finalize() throws Throwable { }
}
```

### @HotSpotIntrinsicCandidate

被`@HotSpotIntrinsicCandidate` 标注的方法，在 `HotSpot` 中都有一套高效的实现，该高效实现基于CPU指令。运行时，`HotSpot` 维护的高效实现会替代JDK的源码实现，从而获得更高的效率

### equals

`==` 比较两个对象在内存中的首地址

`equals()` 比较字符串中所包含的内容是否相同

#### 重写 equals()

当需要向集合中添加元素的时候需要重写equals方法。

因为添加进集合的时候首先需要判断该集合中是否含有需要添加的元素，这个时候就要使用contains方法。contains方法内部调用equals方法

### hashCode

`hashCode()` 是一个native方法，用于计算出对象的一个散列值

**equals相同的对象，hashCode必然相同**

重写equals()方法就重写hashCode()方法

String类重写了equals和hashCode方法，比较的是值

重写hashcode方法为了将数据存入 HashSet/HashMap/Hashtable 类时进行比较

## 类

### 内部类

在一个类中定义另一个类，这样定义的类称为内部类

内部类中的方法也可以调用外部类中的方法，内部类都可以直接调用外部类中的属性，内部类的类体中不可以声明类变量和类方法
内部类可以由外部类使用外部类中在函数中创建内部类对象来使用，如果内部类的权限是非私有，非静态的，就可以在外部其他程序中被访问到，就可以通过创建外部类对象完成
内部类的字节码文件会不一样。会变成外部类名$内部类名

```java
new outter().new Inner();
```

### 匿名类

匿名类，就是没有名称的类，其名称由Java编译器给出，外部类名称+$+匿名类顺序，没有名称也就是其他地方就不能引用，不能实例化，只用一次，当然也就不能有构造器

匿名类就是利用父类的构造函数和自身类体构造成一个类

```java
new 父类(){子类内容};

// 格式中的“父类”是子类需要继承或者实现外部的类或者接口
```

匿名类可以继承父类的方法，也可以重写父类的方法
匿名类可以访问外部类的成员变量和方法，匿名类的类体不可以声明称static成员变量和static方法
匿名类由于是一个new的结果，所以其实可以赋值给一个父类对象