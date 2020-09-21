### 镜像导入导出

```
docker save [options] images [images...]
docker load [options]
```
示例:
```
docker save -o nginx.tar nginx:latest 
docker load -i nginx.tar
```

yum erase runc

yum list containerd.io --showduplicates | sort -r



vim /usr/lib/systemd/system/docker.service

