### 基本
#### 安装
```
wget http://download.redis.io/releases/redis-5.0.4.tar.gz
tar -zxvf redis-5.0.4.tar.gz
cd redis-5.0.4
make && make install

# redis-cli -v
redis-cli 5.0.4
```

#### 启动和停止
```
redis-server // 默认启动
redis-server --config value // 配置
redis-server redis.conf // 配置文件
redis-cli shutdown
```
> 配置文件详解[]( ./redis.txt)

