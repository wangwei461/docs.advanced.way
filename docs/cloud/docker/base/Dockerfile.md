---
title: 'Dockerfile'
---

Dockerfile 是一个用来构建镜像的文本文件，文本内容包含了一条条构建镜像所需的指令和说明。

## 关键字

### FROM 

指定基础镜像，必须为第一个命令

```shell
FROM <image>
FROM <image>:<tag>
FROM <image>@<digest>
```

### USER

指定运行容器时的用户名或 UID，后续的 RUN 也会使用指定用户。
使用USER指定用户时，可以使用用户名、UID或GID，或是两者的组合。当服务不需要管理员权限时，可以通过该命令指定运行用户。
并且可以在之前创建所需要的用户

```shell
USER user
USER user:group
USER uid
USER uid:gid
USER user:gid
USER uid:group
```

### MAINTAINER

维护者信息

```
MAINTAINER <name>
```

### LABEL

用于为镜像添加元数据

```shell
LABEL <key>=<value> <key>=<value> <key>=<value> ...

# 例
LABEL version="1.0" description="这是一个Web服务器" by="IT笔录"
```

### ENV

设置环境变量

```shell
ENV <key> <value>  #<key>之后的所有内容均会被视为其<value>的组成部分，因此，一次只能设置一个变量
ENV <key>=<value> ...  #可以设置多个变量，每个变量为一个"<key>=<value>"的键值对，如果<key>中包含空格，可以使用\来进行转义，也可以通过""来进行标示；另外，反斜线也可以用于续行
```

### RUN

构建镜像时执行的命令

```shell
RUN <command>
```

### ADD

将本地文件添加到容器中，tar类型文件会自动解压(网络压缩资源不会被解压)，可以访问网络资源，类似wget

```shell
ADD <src>... <dest>
ADD ["<src>",... "<dest>"]
```

### COPY

功能类似ADD，但是是不会自动解压文件，也不能访问网络资源

### CMD

构建容器后调用，也就是在容器启动时才进行调用

```shell
CMD command param1 param2
```

### VOLUME

用于指定持久化目录

```shell
VOLUME ["/path/to/dir"]
```

### WORKDIR 相当于cd

工作目录

```shell
WORKDIR /path/to/workdir
```

### EXPOSE

指定于外界交互的端口

```shell
EXPOSE <port> [<port>...]
```

### ENTRYPOINT

配置容器，使其可执行化

```shell
 ENTRYPOINT command param1 param2
```

### ARG

用于指定传递给构建运行时的变量

```shell
ARG <name>[=<default value>]
```

## Dockerfile

```shell
# Base images 基础镜像
FROM centos

#MAINTAINER 维护者信息
MAINTAINER user

#ENV 设置环境变量
ENV PATH /usr/local/nginx/sbin:$PATH

#ADD  文件放在当前目录下，拷过去会自动解压
ADD nginx-1.8.0.tar.gz /usr/local/  
ADD epel-release-latest-7.noarch.rpm /usr/local/  

#RUN 执行以下命令 
RUN rpm -ivh /usr/local/epel-release-latest-7.noarch.rpm
RUN yum install -y wget lftp gcc gcc-c++ make openssl-devel pcre-devel pcre && yum clean all
RUN useradd -s /sbin/nologin -M www

#WORKDIR 相当于cd
WORKDIR /usr/local/nginx-1.8.0 

RUN ./configure --prefix=/usr/local/nginx --user=www --group=www --with-http_ssl_module --with-pcre && make && make install

RUN echo "daemon off;" >> /etc/nginx.conf

#EXPOSE 映射端口
EXPOSE 80

#CMD 运行以下命令
CMD ["nginx"]
```

## 构建命令

```shell
docker build [OPTIONS] PATH | URL | -

# 例
docker build -t 名称:版本号 .
```

* --build-arg=[] :设置镜像创建时的变量；
* --cpu-shares :设置 cpu 使用权重；
* --cpu-period :限制 CPU CFS周期；
* --cpu-quota :限制 CPU CFS配额；
* --cpuset-cpus :指定使用的CPU id；
* --cpuset-mems :指定使用的内存 id；
* --disable-content-trust :忽略校验，默认开启；
* -f :指定要使用的Dockerfile路径；
* --force-rm :设置镜像过程中删除中间容器；
* --isolation :使用容器隔离技术；
* --label=[] :设置镜像使用的元数据；
* -m :设置内存最大值；
* --memory-swap :设置Swap的最大值为内存+swap，"-1"表示不限swap；
* --no-cache :创建镜像的过程不使用缓存；
* --pull :尝试去更新镜像的新版本；
* --quiet, -q :安静模式，成功后只输出镜像 ID；
* --rm :设置镜像成功后删除中间容器；
* --shm-size :设置/dev/shm的大小，默认值是64M；
* --ulimit :Ulimit配置。
* --tag, -t: 镜像的名字及标签，通常 name:tag 或者 name 格式；可以在一次构建中为一个镜像设置多个标签。
* --network: 默认 default。在构建期间设置RUN指令的网络模式