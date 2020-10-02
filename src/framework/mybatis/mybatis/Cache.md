---
title: '缓存'
---

## Cache

MyBatis 内置了一个强大的事务性查询缓存机制，它可以非常方便地配置和定制

* 映射语句文件中的所有 select 语句的结果将会被缓存。

* 映射语句文件中的所有 insert、update 和 delete 语句会刷新缓存。

* 缓存会使用最近最少使用算法（LRU, Least Recently Used）算法来清除不需要的缓存。

* 缓存不会定时进行刷新（也就是说，没有刷新间隔）。

* 缓存会保存列表或对象（无论查询方法返回哪种）的 1024 个引用。

* 缓存会被视为读/写缓存，这意味着获取到的对象并不是共享的，可以安全地被调用者修改，而不干扰其他调用者或线程所做的潜在修改


## 一级缓存

Mybatis的一级缓存不需要任何配置，在每一个 SqlSession 当中都有一个一级缓存区，作用范围是 SqlSession 。

![](../../../resources/jpa/d76ec5fe.jpg)

* MyBatis一级缓存的生命周期和SqlSession一致。
* MyBatis一级缓存内部设计简单，只是一个没有容量限定的HashMap，在缓存的功能性上有所欠缺。
* MyBatis的一级缓存最大范围是SqlSession内部，有多个SqlSession或者分布式的环境下，数据库写操作会引起脏数据，建议设定缓存级别为Statement

### 关闭缓存

默认下 `select` 会开启缓存， 使用 `flushCache` 关闭缓存

```xml
<!-- 关闭一级缓存 -->
<select flushCache="true">
    <!-- 每次查询都清空缓存 -->
<select/>
```

### 缓存原理

```java
// DefaultSqlSession
@Override
public void select(String statement, Object parameter, RowBounds rowBounds, ResultHandler handler) {
    try {
      MappedStatement ms = configuration.getMappedStatement(statement);
      // 执行查询
      executor.query(ms, wrapCollection(parameter), rowBounds, handler);
    } catch (Exception e) {
      throw ExceptionFactory.wrapException("Error querying database.  Cause: " + e, e);
    } finally {
      ErrorContext.instance().reset();
    }
}

// BaseExecutor
@Override
public <E> List<E> query(MappedStatement ms, Object parameter, RowBounds rowBounds, ResultHandler resultHandler) throws SQLException {
    BoundSql boundSql = ms.getBoundSql(parameter);
    // 构建 CacheKey
    CacheKey key = createCacheKey(ms, parameter, rowBounds, boundSql);
    return query(ms, parameter, rowBounds, resultHandler, key, boundSql);
}

public <E> List<E> query(MappedStatement ms, Object parameter, RowBounds rowBounds, ResultHandler resultHandler, CacheKey key, BoundSql boundSql) throws SQLException {
    ...
    // 查询是否有缓存
    list = resultHandler == null ? (List<E>) localCache.getObject(key) : null;
    if (list != null) {
        // 从缓存中取值
        handleLocallyCachedOutputParameters(ms, key, parameter, boundSql);
    } else {
        // 查询数据库
        list = queryFromDatabase(ms, parameter, rowBounds, resultHandler, key, boundSql);
    }
}

@Override
public int update(MappedStatement ms, Object parameter) throws SQLException {
    ErrorContext.instance().resource(ms.getResource()).activity("executing an update").object(ms.getId());
    if (closed) {
      throw new ExecutorException("Executor was closed.");
    }
    // 清除缓存
    clearLocalCache();
    return doUpdate(ms, parameter);
}

@Override
public void clearLocalCache() {
    if (!closed) {
      localCache.clear();
      localOutputParameterCache.clear();
    }
}
```

只要两条SQL的下列五个值相同，即可以认为是相同的SQL

`Statement Id + Offset + Limmit + Sql + Params`

### PerpetualCache

> perpetual [pəˈpetʃuəl]

默认的缓存实现

```java
public class PerpetualCache implements Cache {

  private final String id;

// 缓存容器 HashMap
  private final Map<Object, Object> cache = new HashMap<>();

  public PerpetualCache(String id) {
    this.id = id;
  }

  @Override
  public String getId() {
    return id;
  }

  @Override
  public int getSize() {
    return cache.size();
  }

  @Override
  public void putObject(Object key, Object value) {
    cache.put(key, value);
  }

  @Override
  public Object getObject(Object key) {
    return cache.get(key);
  }

  @Override
  public Object removeObject(Object key) {
    return cache.remove(key);
  }

  @Override
  public void clear() {
    cache.clear();
  }

  @Override
  public boolean equals(Object o) {
    if (getId() == null) {
      throw new CacheException("Cache instances require an ID.");
    }
    if (this == o) {
      return true;
    }
    if (!(o instanceof Cache)) {
      return false;
    }

    Cache otherCache = (Cache) o;
    return getId().equals(otherCache.getId());
  }

  @Override
  public int hashCode() {
    if (getId() == null) {
      throw new CacheException("Cache instances require an ID.");
    }
    return getId().hashCode();
  }

}
```

## 二级缓存

二级缓存是 mapper 映射级别的缓存，多个 SqlSession 去操作同一个 Mapper 映射的 sql 语句，多个 SqlSession可以共用二级缓存，二级缓存是跨 SqlSession 的。

特点:

* MyBatis的二级缓存相对于一级缓存来说，实现了SqlSession之间缓存数据的共享，同时粒度更加的细，能够到namespace级别，通过Cache接口实现类不同的组合，对Cache的可控性也更强

* 在分布式环境下，由于默认的MyBatis Cache实现都是基于本地的，分布式环境下必然会出现读取到脏数据，需要使用集中式缓存将MyBatis的Cache接口实现，有一定的开发成本，直接使用Redis、Memcached等分布式缓存可能成本更低，安全性也更高

### 启用二级缓存

```xml
<!-- 启用二级缓存 -->
<cache/>
```

### Cache 属性

| 参数名        | 说明                                                         |
| ------------- | ------------------------------------------------------------ |
| type          | 指定缓存（cache）接口的实现类型，当需要和ehcache整合时更改该参数值即可。 |
| flushInterval | 刷新间隔。可被设置为任意的正整数，单位毫秒。默认不设置。     |
| size          | 引用数目。可被设置为任意正整数，缓存的对象数目等于运行环境的可用内存资源数目。默认是1024。 |
| readOnly      | 只读，true或false。只读的缓存会给所有的调用者返回缓存对象的相同实例。默认是false。 |
| eviction      | 缓存收回策略。LRU（最近最少使用的），FIFO（先进先出），SOFT（ 软引用），WEAK（ 弱引用）。默认是 LRU。 |



### 缓存原理

```java
// DefaultSqlSessionFactory
private SqlSession openSessionFromDataSource(ExecutorType execType, TransactionIsolationLevel level, boolean autoCommit) {
    Transaction tx = null;
    try {
      // 返回执行器 如果开启了二级缓存 返回 CachingExecutor
      final Executor executor = configuration.newExecutor(tx, execType);
      return new DefaultSqlSession(configuration, executor, autoCommit);
    } catch (Exception e) {
      closeTransaction(tx); // may have fetched a connection so lets call close()
      throw ExceptionFactory.wrapException("Error opening session.  Cause: " + e, e);
    } finally {
      ErrorContext.instance().reset();
    }
}

// Configuration
public Executor newExecutor(Transaction transaction, ExecutorType executorType) {
    ...
    // 开启了二级缓存
    if (cacheEnabled) {
      executor = new CachingExecutor(executor);
    }
    executor = (Executor) interceptorChain.pluginAll(executor);
    return executor;
}


// CachingExecutor
private final TransactionalCacheManager tcm = new TransactionalCacheManager();

public <E> List<E> query(MappedStatement ms, Object parameterObject, RowBounds rowBounds, ResultHandler resultHandler) throws SQLException {
    BoundSql boundSql = ms.getBoundSql(parameterObject);
    // 创建 CacheKey
    CacheKey key = createCacheKey(ms, parameterObject, rowBounds, boundSql);
    return query(ms, parameterObject, rowBounds, resultHandler, key, boundSql);
}

public <E> List<E> query(MappedStatement ms, Object parameterObject, RowBounds rowBounds, ResultHandler resultHandler, CacheKey key, BoundSql boundSql)
      throws SQLException {
    // 获得在配置初始化时赋予的Cache
    Cache cache = ms.getCache();
    if (cache != null) {
    // 判断是否需要刷新缓存
      flushCacheIfRequired(ms);
      if (ms.isUseCache() && resultHandler == null) {
        // 处理存储过程
        ensureNoOutParams(ms, boundSql);
        // 从 TransactionalCache 获取 Cache 值
        List<E> list = (List<E>) tcm.getObject(cache, key);
        // 未命中
        if (list == null) {
            // 查询数据库
          list = delegate.query(ms, parameterObject, rowBounds, resultHandler, key, boundSql);
          // 放入缓存中
          tcm.putObject(cache, key, list); // issue #578 and #116
        }
        return list;
      }
    }
    return delegate.query(ms, parameterObject, rowBounds, resultHandler, key, boundSql);
}

private void flushCacheIfRequired(MappedStatement ms) {
    Cache cache = ms.getCache();
    // insert/update/delte 需要刷新缓存
    if (cache != null && ms.isFlushCacheRequired()) {
      tcm.clear(cache);
    }
}

@Override
public void commit(boolean required) throws SQLException {
    delegate.commit(required);
    tcm.commit();
}


// TransactionalCache
private final Set<Object> entriesMissedInCache;

@Override
public Object getObject(Object key) {
    Object object = delegate.getObject(key);
    if (object == null) {
        // 未找到放入 Miss Set
        entriesMissedInCache.add(key);
    }
    ...
}

@Override
public void putObject(Object key, Object object) {
    entriesToAddOnCommit.put(key, object);
}

public void commit() {
    for (TransactionalCache txCache : transactionalCaches.values()) {
      txCache.commit();
    }
}
```

```java
Cache cache = ms.getCache()
```
本质上是装饰器模式的使用，具体的装饰链是
`SynchronizedCache -> LoggingCache -> SerializedCache -> LruCache -> PerpetualCache`

以下是具体这些Cache实现类的介绍，他们的组合为Cache赋予了不同的能力

* SynchronizedCache：同步Cache，实现比较简单，直接使用synchronized修饰方法。
* LoggingCache：日志功能，装饰类，用于记录缓存的命中率，如果开启了DEBUG模式，则会输出命中率日志。
* SerializedCache：序列化功能，将值序列化后存到缓存中。该功能用于缓存返回一份实例的Copy，用于保存线程安全。
* LruCache：采用了Lru算法的Cache实现，移除最近最少使用的Key/Value。
* PerpetualCache： 作为为最基础的缓存类，底层实现比较简单，直接使用了HashMap

## 自定义缓存

mybatis 的 `Cache` 定义
```java
package org.apache.ibatis.cache;

public interface Cache {
  // 获取缓存编号
  String getId();
  void putObject(Object key, Object value);
  Object getObject(Object key);
  Object removeObject(Object key);
  void clear();
  int getSize();
  default ReadWriteLock getReadWriteLock() {
    return null;
  }
}
```

1. 实现 `Cache` 接口
2. 添加 `<cache />` 字段

```xml
<cache type="自定义实现类" />
```

## 分布式系统下缓存问题

默认情况下，一级、二级缓存都使用的是本地缓存，分布式系统下有可能读到脏数据。

解决方法:

* 关闭一级、二级缓存

* 使用第三方缓存组件 如: Redis

## 参考

[聊聊MyBatis缓存机制](https://tech.meituan.com/2018/01/19/mybatis-cache.html)