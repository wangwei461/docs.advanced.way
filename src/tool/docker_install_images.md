### 蝉道
禅道开源版： http://dl.cnezsoft.com/zentao/docker/docker_zentao.zip
数据库用户名：root,默认密码:123456。运行时，可以设置  MYSQL_ROOT_PASSWORD变量来更改密码。
可挂载目录
/app/zentaopms:该目录为禅道目录，里面包含禅道代码及附件上传目录。
/var/lib/mysql:该目录为数据库的数据目录。

构建镜像
```
docker build -t zentao ./
```
运行镜像
```
docker run --name zentao -p 88:80 -v /Users/wangwei/Documents/dev/docker/zentao/www:/app/zentaopms -v /Users/wangwei/Documents/dev/docker/zentao/mysql/logs:/logs
 -v /Users/wangwei/Documents/dev/docker/zentao/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=Root123. -d zentao:latest
```