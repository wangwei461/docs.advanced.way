---
title: "注入Bean的方式"
---

## 注解注入

* `@Component`
* `@Controller`
* `@Repository`
* `@Service`

## XML 配置

```java
@Configuration
//引入一个xml配置文件
@ImportResource("classpath:/beans.xml")
public class AppConfig {
    @Bean
    public BeanClass beanName() {
        return new BeanClass();
    }
}
```

```xml
<!-- beans.xml -->
<bean id="beanName" class="xx.BeanClass">
</bean>
```

## @Bean

```java
@Configuration
public class AppConfig {
    // 可以指定bean名称
    @Bean
    public ClassName beanName() {
        return new ClassName();
    }
}
```

## @Import

```java
@Configuration
@Import({XXRegistrar.class, XXImportSelector.class})
public class Config {
```

### 实现 ImportSelector

```java
public class XXImportSelector implements ImportSelector {
    @Override
    public String[] selectImports(AnnotationMetadata importingClassMetadata) {
        return new String[]{"类全路径名称", "..."};
    }
}
```

### 实现 ImportBeanDefinitionRegistrar

```java
public class XXRegistrar implements ImportBeanDefinitionRegistrar {

    @Override
    public void registerBeanDefinitions(AnnotationMetadata importingClassMetadata, BeanDefinitionRegistry registry) {
        BeanDefinition definition = new AnnotatedGenericBeanDefinition(class);
        registry.registerBeanDefinition(beanName, definition);
    }
}
```

## FactoryBean

```java
public class XXFactoryBean implements FactoryBean<ClassName> {
    // 返回一个对象，这个对象会添加到容器中
    @Override
    public Color getObject() throws Exception {
        return new ClassName();
    }

    @Override
    public Class<?> getObjectType() {
        return ClassName.class;
    }

    //是否是单例？
    //true 		: 这个bean是单实例，在容器中保存一份
    //false 	: 多实例，每次获取都会创建一个新的bean
    @Override
    public boolean isSingleton() {
        return true;
    }
}
```

## @Conditional 条件注入

符合条件的bean注入到容器中

```java
public class XXCondition implements Condition {
    @Override
    public boolean matches(ConditionContext context, AnnotatedTypeMetadata metadata) {
        // TODO
        return false/true;
    }
}


@Configuration
public class AppConfig {
    @Bean
    @Conditional(value = XXCondition.class)
    public ClassName bill() {
        // 注入的bean
        return ClassName;
    }

```

## TypeFilter 指定过滤规则

```java
public class XXTypeFilter implements TypeFilter {
    @Override
    public boolean match(MetadataReader metadataReader, MetadataReaderFactory metadataReaderFactory) throws IOException {
        return false; // true加入容器，false不加入容器
    }
}

@Configuration
@ComponentScan(basePackages = "..."
        , includeFilters = @Filter(type = FilterType.CUSTOM, classes = {XXTypeFilter.class})
        , useDefaultFilters = false)
public class AppConfig {}
```

## @ComponentScan 导入

@ComponentScan  value:指定要扫描的包

### 扫描范围

* excludeFilters = Filter[] ：指定扫描的时候按照什么规则排除那些组件
* includeFilters = Filter[] ：指定扫描的时候只需要包含哪些组件
* FilterType.ANNOTATION：按照注解
* FilterType.ASSIGNABLE_TYPE：按照给定的类型；
* FilterType.ASPECTJ：使用ASPECTJ表达式
* FilterType.REGEX：使用正则指定
* FilterType.CUSTOM：使用自定义规则