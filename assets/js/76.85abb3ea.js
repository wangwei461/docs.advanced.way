(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{541:function(t,a,s){"use strict";s.r(a);var v=s(8),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),s("h3",{attrs:{id:"缓存击穿"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存击穿"}},[t._v("#")]),t._v(" 缓存击穿")]),t._v(" "),s("p",[t._v("指缓存中没有但数据库中有的数据")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("热点数据不设置过期时间")])]),t._v(" "),s("li",[s("p",[t._v("添加互斥锁，减少多线程访问")])])]),t._v(" "),s("h3",{attrs:{id:"缓存穿透"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存穿透"}},[t._v("#")]),t._v(" 缓存穿透")]),t._v(" "),s("p",[t._v("指缓存和数据库中都没有的数据")]),t._v(" "),s("ol",[s("li",[t._v("接口层添加校验，如:布隆过滤器")]),t._v(" "),s("li",[t._v("缓存null值，如: key-null")])]),t._v(" "),s("h3",{attrs:{id:"缓存雪崩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存雪崩"}},[t._v("#")]),t._v(" 缓存雪崩")]),t._v(" "),s("p",[t._v("指缓存中数据大批量到过期时间，而查询数据量巨大，引起数据库压力过大甚至down机")]),t._v(" "),s("ol",[s("li",[t._v("设置热点数据永远不过期")]),t._v(" "),s("li",[t._v("缓存数据的过期时间设置随机，防止同一时间大量数据过期现象发生")]),t._v(" "),s("li",[t._v("如果缓存数据库是分布式部署，将热点数据均匀分布在不同得缓存数据库中")])])])}),[],!1,null,null,null);a.default=_.exports}}]);