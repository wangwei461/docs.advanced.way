---
title: 'YAML'
---

YAML 是 "YAML Ain't a Markup Language"（YAML 不是一种标记语言）的递归缩写

## 基本语法
* 大小写敏感
* 使用缩进表示层级关系
* 缩进不允许使用tab，只允许空格
* 缩进的空格数不重要，只要相同层级的元素左对齐即可
* '#'表示注释

## 数据类型

### YAML 对象

```yaml
key:
    child-key: value
    child-key2: value2
```

### YAML 数组

以 - 开头的行表示构成一个数组

```yaml
- A
- B
- C

# 多维数组
key: [value1, value2, ...]

# 数据结构的子成员是一个数组，则可以在该项下面缩进一个空格
-
 - A
 - B
 - C
```

### 复合结构

```yaml
languages:
  - Ruby
  - Perl
  - Python 
websites:
  YAML: yaml.org 
  Ruby: ruby-lang.org 
  Python: python.org 
  Perl: use.perl.org
```
### 纯量

纯量是最基本的，不可再分的值

* 字符串
* 布尔值
* 整数
* 浮点数
* Null
* 时间
* 日期

```yaml
boolean: 
    - TRUE  #true,True都可以
    - FALSE  #false，False都可以
float:
    - 3.14
    - 6.8523015e+5  #可以使用科学计数法
int:
    - 123
    - 0b1010_0111_0100_1010_1110    #二进制表示
null:
    nodeName: 'node'
    parent: ~  #使用~表示null
string:
    - 哈哈
    - 'Hello world'  #可以使用双引号或者单引号包裹特殊字符
    - newline
      newline2    #字符串可以拆成多行，每一行会被转化成一个空格
date:
    - 2018-02-17    #日期必须使用ISO 8601格式，即yyyy-MM-dd
datetime: 
    -  2018-02-17T15:02:31+08:00    #时间使用ISO 8601格式，时间和日期之间使用T连接，最后使用+代表时区
```

### 引用

`&` 用来建立锚点，`<<` 表示合并到当前数据，`*` 用来引用锚点
```yaml
- &showell Steve 
- Clark 
- Brian 
- Oren 
- *showell 

# to: [ 'Steve', 'Clark', 'Brian', 'Oren', 'Steve' ]
```

## 参考

[YAML 入门教程](https://www.runoob.com/w3cnote/yaml-intro.html)