---
title: 'BeanDefinition'
---

## BeanDefinition

Spring容器启动的过程中，会将Bean解析成Spring内部的BeanDefinition结构

### 源码

包含 类名、scope、属性、构造函数参数列表、依赖的bean、是否是单例类、是否是懒加载

```java
public interface BeanDefinition extends AttributeAccessor, BeanMetadataElement {
    String SCOPE_SINGLETON = ConfigurableBeanFactory.SCOPE_SINGLETON;
    String SCOPE_PROTOTYPE = ConfigurableBeanFactory.SCOPE_PROTOTYPE;
    void setParentName(@Nullable String parentName); 
    String getParentName();
    String getBeanClassName();
    String getScope();
    void setScope(@Nullable String scope);
    boolean isLazyInit();
    void setLazyInit(boolean lazyInit);
    void setDependsOn(@Nullable String... dependsOn);
    String[] getDependsOn();
    void setAutowireCandidate(boolean autowireCandidate);
    boolean isAutowireCandidate();
    boolean isPrimary();
    void setInitMethodName(@Nullable String initMethodName);
    String getInitMethodName();
    String getDescription();
    boolean isSingleton();
    boolean isPrototype();
    boolean isAbstract();
}
```

#### AnnotatedBeanDefinition

该接口扩展了 BeanDefinition 的功能，其用来操作注解元数据

```java
public interface AnnotatedBeanDefinition extends BeanDefinition {
    // 获得当前 Bean 的注解元数据
    AnnotationMetadata getMetadata();
    // 获得当前 Bean 的工厂方法上的元数据
    MethodMetadata getFactoryMethodMetadata();
}
```

#### AbstractBeanDefinition

是 BeanDefinition 的子抽象类，也是其他 BeanDefinition 类型的基类，其实现了接口中定义的一系列操作方法，并定义了一系列的常量属性，这些常量会直接影响到 Spring 实例化 Bean 时的策略

```java
public abstract class AbstractBeanDefinition extends BeanMetadataAttributeAccessor
		implements BeanDefinition, Cloneable {

    public static final String SCOPE_DEFAULT = "";
    String SCOPE_PROTOTYPE = ConfigurableBeanFactory.SCOPE_PROTOTYPE;

    private String scope = SCOPE_DEFAULT;
    private Boolean lazyInit;

    @Override
	public boolean isSingleton() {
		return SCOPE_SINGLETON.equals(this.scope) || SCOPE_DEFAULT.equals(this.scope);
	}

	/**
	 * Return whether this a <b>Prototype</b>, with an independent instance
	 * returned for each call.
	 * @see #SCOPE_PROTOTYPE
	 */
	@Override
	public boolean isPrototype() {
		return SCOPE_PROTOTYPE.equals(this.scope);
	}
}
```

#### RootBeanDefinition

该类继承自 AbstractBeanDefinition，它可以单独作为一个 BeanDefinition，也可以作为其他 BeanDefinition 的父类。

RootBeanDefinition 在 AbstractBeanDefinition 的基础上定义了更多属性

#### ChildBeanDefinition

该类继承自 AbstractBeanDefinition。其相当于一个子类，不可以单独存在，必须依赖一个父 BeanDetintion，构造 ChildBeanDefinition 时，通过构造方法传入父 BeanDetintion 的名称或通过 setParentName 设置父名称。它可以从父类继承方法参数、属性值，并可以重写父类的方法，同时也可以增加新的属性或者方法。若重新定义 init 方法，destroy 方法或者静态工厂方法，ChildBeanDefinition 会重写父类的设置。

从 Spring 2.5 开始，以编程方式注册 Bean 定义的首选方法是 GenericBeanDefinition，GenericBeanDefinition 可以有效替代 ChildBeanDefinition 的绝大分部使用场合。

#### GenericBeanDefinition

GenericBeanDefinition 是 Spring 2.5 以后新引入的 BeanDefinition，是 ChildBeanDefinition 更好的替代者，它同样可以通过 setParentName 方法设置父 BeanDefinition。

最后三个 BeanDefinition 既实现了 AnnotatedBeanDefinition 接口，又间接继承 AbstractBeanDefinition 抽象类，这些 BeanDefinition 描述的都是注解形式的 Bean。

#### ConfigurationClassBeanDefinition

该类继承自 RootBeanDefinition ，并实现了 AnnotatedBeanDefinition 接口。这个 BeanDefinition 用来描述在标注 @Configuration 注解的类中，通过 @Bean 注解实例化的 Bean。

其功能特点如下：

1、如果 @Bean 注解没有指定 Bean 的名字，默认会用方法的名字命名 Bean。

2、标注 @Configuration 注解的类会成为一个工厂类，而标注 @Bean 注解的方法会成为工厂方法，通过工厂方法实例化 Bean，而不是直接通过构造方法初始化。

3、标注 @Bean 注解的类会使用构造方法自动装配

#### AnnotatedGenericBeanDefinition

该类继承自 GenericBeanDefinition ，并实现了 AnnotatedBeanDefinition 接口。这个 BeanDefinition 用来描述标注 @Configuration 注解的 Bean。

#### ScannedGenericBeanDefinition

该类继承自 GenericBeanDefinition ，并实现了 AnnotatedBeanDefinition 接口。这个 BeanDefinition 用来描述标注 @Component 注解的 Bean，其派生注解如 @Service、@Controller 也同理

## 参考

[BeanDefinition 解析](https://www.cnblogs.com/loongk/p/12262101.html)