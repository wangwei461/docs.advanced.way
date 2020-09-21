---
title: 'Lambda'
---

## Lambda

### Lambda 表达式的定义

> 包含一个参数列表和一个 `lambda` 体，两者之间使用 `->` 分隔

```java
args -> expr
args -> {return expr;}
```

- 一个 Lambda 表达式可以有零个或多个参数
- 参数的类型既可以明确声明，也可以根据上下文来推断。例如：`(int a)`与`(a)`效果相同
- 所有参数需包含在圆括号内，参数之间用逗号相隔。例如：`(a, b)` 或 `(int a, int b)` 或 `(String a, int b, float c)`
- 空圆括号代表参数集为空。例如：`() -> 42`
- 当只有一个参数，且其类型可推导时，圆括号（）可省略。例如：`a -> return a*a`
- Lambda 表达式的主体可包含零条或多条语句
- 如果 Lambda 表达式的主体只有一条语句，花括号{}可省略。匿名函数的返回类型与该主体表达式一致
- 如果 Lambda 表达式的主体包含一条以上语句，则表达式必须包含在花括号{}中（形成代码块）。匿名函数的返回类型与代码块的返回类型一致，若没有返回则为空

### @FunctionalInterface

> 指明该接口类型声明是根据 Java 语言规范定义的函数式接口
> 

函数式接口声明:
```java
@FunctionalInterface 
public interface WorkerInterface {
	void doSomeWork();
}
```

不能在函数式接口中定义多个方法，但可以定义默认方法、静态方法、定义java.lang.Object里的public

### Lambda和匿名内部类
* 内部类创建表达式会确保创建一个拥有唯一标识的新对象
* 内部类会创建一个新的命名作用域，`this` 和 `super` 指向的是内部类本身的当前实例。Lambda `this` 和 `super` 与外围环境意义相同

## java.util.function

| name           | type             | description                     |
| -------------- | ---------------- | ------------------------------- |
| Consumer       | Consumer< T >    | 接收T对象，不返回值             |
| Predicate      | Predicate< T >   | 接收T对象并返回boolean          |
| Function       | Function< T, R > | 接收T对象，返回R对象            |
| Supplier       | Supplier< T >    | 提供T对象（例如工厂），不接收值 |
| UnaryOperator  | UnaryOperator    | 接收T对象，返回T对象            |
| BinaryOperator | BinaryOperator   | 接收两个T对象，返回T对象        |

### Consumer
作用: 消费某个对象

### Predicate
作用: 判断对象是否符合某个条件
思想: 提取条件，让条件从处理逻辑脱离出来，解耦合

### Function
作用: 实现一个`一元函数`，即传入一个值经过函数的计算返回另一个值。
思想: 一元函数的思想，将转换逻辑提取出来，解耦合
### Supplier
作用: 创建一个对象（工厂类）
思想: 封装工厂创建对象的逻辑

### 方法引用

| 名称       | 语法                  | 对应的表达式                       |
| ---------- | --------------------- | ---------------------------------- |
| 静态       | RefType::staticMethod | (args)->RefType.staticMethod(args) |
| 绑定实例   | expr::instMethod      | (args)->expr.instMethod(args)      |
| 未绑定实例 | RefType::instMethod   | (arg0,rest)->arg0.instMethod(rest) |
| 构造器     | ClsName::new          | (args)->new ClsName(args)          |



### 实现原理

1. 在类编译时，会生成一个`私有静态方法` + `一个内部类`；
2. 在内部类中实现了函数式接口，在实现接口的方法中，会调用编译器生成的静态方法；
3. 在使用lambda表达式的地方，通过传递内部类实例，来调用函数式接口方法

[Java Lambda表达式 实现原理分析]: https://blog.csdn.net/jiankunking/article/details/79825928

