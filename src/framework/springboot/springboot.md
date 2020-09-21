maven 依赖

```
<parent>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-parent</artifactId>
	<version>1.5.9.RELEASE</version>
</parent>
```

Maven 将从 `spring-boot-starter-parent` 项目继承

spring-boot-starter-parent 本身不提供依赖

Starter 是一组惯例依赖描述资源，包含了许多需要用于使项目快速启动和运行，并且需要一组受支持的可传递依赖关系的依赖

@EnableAutoConfiguration(exclude={})

自动配置尝试根据您添加的 jar 依赖自动配置 Spring 应用

隐式定义了某些项目的 **包搜索**的基准起点

exclude用于排除不需要的自动配置

@ComponentScan

`@Component`、`@Service`、`@Repository`、`@Controller` 等自动注册为 Spring Bean

`@Autowired` 构造器注入

@Configuration



`spring-boot-devtools` 的应用在 classpath 下的文件发生更改时会自动重启



- 如果存在 Spring MVC，则使用 `AnnotationConfigServletWebServerApplicationContext`
- 如果 Spring MVC 不存在且存在 Spring WebFlux，则使用 `AnnotationConfigReactiveWebServerApplicationContext`
- 否则，使用 `AnnotationConfigApplicationContext`

YamlPropertiesFactoryBean将 YAML 加载为 `Properties`，

`YamlMapFactoryBean`将 YAML 加载为 `Map`



spring.profiles.active 激活配置文件