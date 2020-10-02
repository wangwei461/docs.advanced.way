## springboot 启动源码

### Main方法
```java
@SpringBootApplication
public class SpringBootDemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringBootDemoApplication.class, args);
    }
}
```
@SpringBootApplication注解
```
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
@SpringBootConfiguration
@EnableAutoConfiguration
@ComponentScan(excludeFilters = { @Filter(type = FilterType.CUSTOM, classes = TypeExcludeFilter.class),
		@Filter(type = FilterType.CUSTOM, classes = AutoConfigurationExcludeFilter.class) })
```

* @Documented 
	注解表明这个注解应该被 javadoc工具记录. 默认情况下,javadoc是不包括注解的

@SpringBootConfiguration

```
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Configuration
```
说明这是一个配置文件类，Java配置文件。将当前类内声明的一个或多个以@Bean注解标记的方法的实例纳入到spring容器中，并且实例名就是方法名。

@EnableAutoConfiguration
```
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
@AutoConfigurationPackage
@Import(AutoConfigurationImportSelector.class)
```
* @AutoConfigurationPackage 用于保存自动配置类 以供之后的使用
* @Import(AutoConfigurationImportSelector.class)
	让普通类可以注入到IOC


@ComponentScan
```
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
@Documented
@Repeatable(ComponentScans.class)
```
* @Repeatable 表明标记的注解可以多次应用于相同的声明或类型

```
SpringApplication.run(SpringBootDemoApplication.class, args);
```
* new SpringApplication(primarySources)：创建SpringApplication对象
* run(args)：调用run方法

### 创建SpringApplication对象
```java
//1、初始化资源加载器
this.resourceLoader = resourceLoader;
//2、断言资源加载类不能为 null
Assert.notNull(primarySources, "PrimarySources must not be null");
//3、初始化加载资源类集合并去重
this.primarySources = new LinkedHashSet<>(Arrays.asList(primarySources));
//4、推断应用类型是Standard还是Web
this.webApplicationType = WebApplicationType.deduceFromClasspath();
//5、设置应用上下文初始化器
setInitializers((Collection)getSpringFactoriesInstances(ApplicationContextInitializer.class));
//6、设置监听器
setListeners((Collection)getSpringFactoriesInstances(ApplicationListener.class));
//7、推断应用入口类
this.mainApplicationClass = deduceMainApplicationClass();
```