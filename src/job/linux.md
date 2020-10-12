---
title: 'Linux 面试题'
---

## Linux

### ulimit

/etc/security/limits.conf

ulimit 是一个计算机命令，用于shell启动进程时限制所占用的资源，可用于修改系统资源限制

ulimit -n可以查看一个进程最多可以打开多少文件描述符数

### linux系统查看端口限值范围

cat /proc/sys/net/ipv4/ip_local_port_range