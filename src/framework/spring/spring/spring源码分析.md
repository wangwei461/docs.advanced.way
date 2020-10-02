---
title: 'Spring 源码'
---

DefaultListableBeanFactory
 - private final Map<String, BeanDefinition> beanDefinitionMap = new ConcurrentHashMap<>(256); // bean 存放
