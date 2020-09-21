端口号检查

sudo netstat -tlpn


注释Ip绑定

vim /etc/redis/redis.conf

docker
docker run -p 3306:3306 --name mysql  -v /usr/local/docker/mysql57logs:/logs -v /usr/local/docker/mysql57/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=Root123. -d mysql:5.7.24

redis

http://download.redis.io/releases/

docker run -p 6379:6379 --name redis -v /usr/local/docker/redis/data:/data -v /usr/local/docker/redis/redis.conf:/etc/redis/redis.conf  -d redis:5 redis-server /etc/redis/redis.conf --appendonly yes

docker run -p 8084:8080 --name tomcat -v /home/zhike/tomcat/webapps:/usr/local/tomcat/webapps -v /home/zhike/tomcat/logs:/usr/local/tomcat/logs -d tomcat:1.0

sudo chmod a+rw /var/run/docker.sock