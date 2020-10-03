---
title: '动态 SQL'
---

## 动态 SQL

### 基于XML

```xml

<select id="demo" resultType="resultDemo">
<!-- if -->
    <if test="expr">
    </if>

<!-- <where> -->
    <where>
        <if test="expr">
        </if>
    </where>

<!-- choose when otherwise -->
    <choose>
        <when test="expr">
        </when>
        <when test="expr">
        </when>
        <otherwise>
        </otherwise>
    </choose>

<!-- trim、where、set -->
<trim prefix="WHERE | SET" prefixOverrides="AND | OR ">
</trim>

<!-- foreach -->
    <foreach item="item" index="index" collection="list"
      open="(" separator="," close=")">
        #{item}
    </foreach>
</select>
```

### 基于注解

要在带注解的映射器接口类中使用动态 SQL

```java
@Update({"<script>",
      "update Author",
      "  <set>",
      "    <if test='email != null'>email=#{email},</if>",
      "    <if test='bio != null'>bio=#{bio}</if>",
      "  </set>",
      "where id=#{id}",
      "</script>"})
void updateAuthorValues(Author author);
```

## 原理

OGNL


## 常用问题

### like

```sql
a like concat('%', #{v},'%')
```

### #{}、${} 的区别

* `#{}` 会进行预编译，而且进行类型匹配

 #{id} 类型参数符号的时候，其实就是告诉 Mybatis 创建一个预处理语句参数，通过 JDBC，这样的一个参数在 SQL 中会由一个 "?" 来标识，并传递到一个新的预处理语句中
 
* `${}` 不进行数据类型匹配

