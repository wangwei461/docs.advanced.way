---
title: 'SPI'
---

## SPI

SPI 全称为（Service Provider Interface），是 JDK 内置的一种服务提供发现机制，它是一种动态替换发现服务实现者的机制。

简单地理解，这是建立在面向接口编程下的一种为了使组件可扩展或动态变更实现的规范

![](../../../resources/spring/linkedkeeper0_e529df27-44c3-4fdc-8e9a-466a507c7256.png)

## 自定义实现

* 加载 META-INF 目录下的 spi 接口文件
* 将实例化的 Bean 注册到 Spring 的容器中

![](../../../resources/spring/linkedkeeper0_ba53b31e-f9c6-4502-9f02-abca9db3aae0.png)