---
title: "获取上下文的Bean"
---

## ApplicationContext

```java
ApplicationContext ac = new FileSystemXmlApplicationContext("applicationContext.xml"); 
ac.getBean("beanId");

// 这种方式适用于采用Spring框架的独立应用程序，需要程序通过配置文件手工初始化Spring的情况
```

## 工具类获取 ApplicationContext

```java
ApplicationContext ac1 = WebApplicationContextUtils.getRequiredWebApplicationContext(ServletContext sc);
ac1.getBean("beanId"); 

// 这种方式适合于采用Spring框架的B/S系统，通过ServletContext对象获取ApplicationContext对象
```

## 继承自抽象类 ApplicationObjectSupport

```java
WebApplicationContext wac = (WebApplicationContext)servletContext.getAttribute(WebApplicationContext.ROOT_WEB_APPLICATION_CONTEXT_ATTRIBUTE);
```

## 继承自抽象类 WebApplicationObjectSupport

## 实现接口 ApplicationContextAware

常用方式

```java
public class XX implements ApplicationContextAware {
    private ApplicationContext applicationContext;

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        this.applicationContext = applicationContext;
    }
```

## ContextLoader

```java
WebApplicationContext wac = ContextLoader.getCurrentWebApplicationContext();
wac.getBean(beanID);

// 不依赖于servlet,不需要注入的方式
```