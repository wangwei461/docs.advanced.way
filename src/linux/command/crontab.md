## linux crontab使用方法
crontab –e : 修改 crontab 文件，如果文件不存在会自动创建。 
crontab –l : 显示 crontab 文件。 
crontab -r : 删除 crontab 文件。
crontab -ir : 删除 crontab 文件前提醒用户。

命令格式
```
minute hour day-of-month month-of-year day-of-week commands  
```

合法值为：00-59 00-23 01-31 01-12 0-6 (0 is sunday) 
除了数字还有几个特殊的符号："*"、"/"和"-"、","
*代表所有的取值范围内的数字
"/"代表每的意思,"/5"表示每5个单位
"-"代表从某个数字到某个数字
","分开几个离散的数字
注：commands 注意以下几点

要是存在文件，要写绝对路径
即使是打印也不会显示在显示屏，在后台运行，最好重定向日志

常见问题
crontab permission denied
chgmod +x给脚本加权限

Ubuntu开启日志
ubuntu默认没有开启cron日志记录 

1. 修改rsyslog 
```
sudo vim /etc/rsyslog.d/50-default.conf 
cron.* /var/log/cron.log #将cron前面的注释符去掉 
```
2. 重启rsyslog 
```
  sudo service rsyslog restart 
```
3. 查看crontab日志 
```
  less /var/log/cron.log
```