---
title: '与SpringBoot整合'
---

## 整合 SpringBoot

### mybatis-spring-boot

引入依赖:

```xml
<dependencies>
    <dependency>
        <groupId>org.mybatis.spring.boot</groupId>
        <artifactId>mybatis-spring-boot-starter</artifactId>
        <version>2.1.3</version>
    </dependency>
</dependencies>
```

启动类添加 `MapperScan`

```java
@SpringBootApplication
@MapperScan("*.*") //扫描指定包下接口
public class SpringBootMybatisApplication {
    public static void main(String[] args) {
        SpringApplication.run(SpringBootMybatisApplication.class, args);
    }
}
```

### 原理