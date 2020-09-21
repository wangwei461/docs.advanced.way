consul是分布式的、高可用、横向扩展的。consul提供的一些关键特性：
* service discovery：consul通过DNS或者HTTP接口使服务注册和服务发现变的很容易，一些外部服务，例如saas提供的也可以一样注册。
* health checking：健康检测使consul可以快速的告警在集群中的操作。和服务发现的集成，可以防止服务转发到故障的服务上面。
* key/value storage：一个用来存储动态配置的系统。提供简单的HTTP接口，可以在任何地方操作。
* multi-datacenter：无需复杂的配置，即可支持任意数量的区域。

### 安装
#### docker
```
docker run -d --name consul -node consul-node -p 8500:8500 consul:1.5
```
访问: http://127.0.0.1:8500

-node：节点的名称 
-bind：绑定的一个地址，用于节点之间通信的地址，可以是内外网，必须是可以访问到的地址 
-server：这个就是表示这个节点是个SERVER



与springcloud 集成

配置文件加入

```
spring.cloud.consul.port=8500
spring.cloud.consul.host=127.0.0.1
spring.cloud.consul.discovery.instance-id=consul
```