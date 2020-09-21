---
title: 'Spring 源码'
---

## spring 源码
### fork源码  
> spring 项目fork 至spring-framework

### git clone

```
git clone https://github.com/wangwei461/spring-framework-1.git spring-framework
```
### 切换tag
```
git checkout v5.1.4.RELEASE
```
### 修改仓库为阿里仓库
```
build.gradle
http://maven.aliyun.com/nexus/content/groups/public
```
### 导入IDEA
```shell
gradle cleanIdea :spring-oxm:compileTestJava
```

### 构建项目
```shell
gradle build --refresh-dependencies
```