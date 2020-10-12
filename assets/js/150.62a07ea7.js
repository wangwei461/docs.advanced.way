(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{699:function(t,r,a){"use strict";a.r(r);var _=a(27),v=Object(_.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"网络协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络协议"}},[t._v("#")]),t._v(" 网络协议")]),t._v(" "),a("h3",{attrs:{id:"time-wait"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#time-wait"}},[t._v("#")]),t._v(" time_wait")]),t._v(" "),a("p",[t._v("客户端收到服务的释放连接的请求后，不是立马进入CLOSE状态，而是还要再等待 2MSL（msl 报文最大生存时间）。")]),t._v(" "),a("p",[t._v("理由是:")]),t._v(" "),a("ul",[a("li",[t._v("确保最后一个确认报文能够到达。如果没能到达，服务端就会会重发FIN请求释放连接。等待一段时间没有收到重发就说明服务的已经CLOSE了。如果有重发，则客户端再发送一次LAST ack信号")]),t._v(" "),a("li",[t._v("等待一段时间是为了让本连接持续时间内所产生的所有报文都从网络中消失，使得下一个新的连接不会出现旧的连接请求报文")])]),t._v(" "),a("h3",{attrs:{id:"三次握手、四次挥手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三次握手、四次挥手"}},[t._v("#")]),t._v(" 三次握手、四次挥手")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("三次握手 为了防止失效的连接请求到底服务器，让服务器错误地打开连接，白白浪费资源")])]),t._v(" "),a("li",[a("p",[t._v("四次握手 因为客户端发送FIN连接请求释放连接后，服务器接受请求后进入CLOSE_WAIT状态，这个状态就是为了让服务段发送还没有发送完的数据，发送完成后再发送FIN信号")])])]),t._v(" "),a("h3",{attrs:{id:"http-响应码-301-和-302-代表的是什么-有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-响应码-301-和-302-代表的是什么-有什么区别"}},[t._v("#")]),t._v(" http 响应码 301 和 302 代表的是什么？有什么区别？")]),t._v(" "),a("p",[t._v("301：永久重定向")]),t._v(" "),a("p",[t._v("302：暂时重定向")]),t._v(" "),a("p",[t._v("它们的区别是，301 对搜索引擎优化（SEO）更加有利；302 有被提示为网络拦截的风险。")]),t._v(" "),a("h3",{attrs:{id:"forward-和-redirect-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#forward-和-redirect-的区别"}},[t._v("#")]),t._v(" forward 和 redirect 的区别？")]),t._v(" "),a("p",[t._v("forward 是转发 和 redirect 是重定向：")]),t._v(" "),a("p",[t._v("地址栏 url 显示：foward url 不会发生改变，redirect url 会发生改变；\n数据共享：forward 可以共享 request 里的数据，redirect 不能共享；\n效率：forward 比 redirect 效率高。")]),t._v(" "),a("h3",{attrs:{id:"简述-tcp-和-udp的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简述-tcp-和-udp的区别"}},[t._v("#")]),t._v(" 简述 tcp 和 udp的区别？")]),t._v(" "),a("p",[t._v("tcp 和 udp 是 OSI 模型中的运输层中的协议。tcp 提供可靠的通信传输，而 udp 则常被用于让广播和细节控制交给应用的通信传输。")]),t._v(" "),a("p",[t._v("两者的区别大致如下：")]),t._v(" "),a("p",[t._v("tcp 面向连接，udp 面向非连接即发送数据前不需要建立链接；\ntcp 提供可靠的服务（数据传输），udp 无法保证；\ntcp 面向字节流，udp 面向报文；\ntcp 数据传输慢，udp 数据传输快；")]),t._v(" "),a("h3",{attrs:{id:"tcp-为什么要三次握手-两次不行吗-为什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-为什么要三次握手-两次不行吗-为什么"}},[t._v("#")]),t._v(" tcp 为什么要三次握手，两次不行吗？为什么？")]),t._v(" "),a("p",[t._v("如果采用两次握手，那么只要服务器发出确认数据包就会建立连接，但由于客户端此时并未响应服务器端的请求，那此时服务器端就会一直在等待客户端，这样服务器端就白白浪费了一定的资源。若采用三次握手，服务器端没有收到来自客户端的再此确认，则就会知道客户端并没有要求建立请求，就不会浪费服务器的资源")]),t._v(" "),a("h3",{attrs:{id:"osi-的七层模型都有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#osi-的七层模型都有哪些"}},[t._v("#")]),t._v(" OSI 的七层模型都有哪些？")]),t._v(" "),a("ul",[a("li",[t._v("物理层：利用传输介质为数据链路层提供物理连接，实现比特流的透明传输。")]),t._v(" "),a("li",[t._v("数据链路层：负责建立和管理节点间的链路。")]),t._v(" "),a("li",[t._v("网络层：通过路由选择算法，为报文或分组通过通信子网选择最适当的路径。")]),t._v(" "),a("li",[t._v("传输层：向用户提供可靠的端到端的差错和流量控制，保证报文的正确传输。")]),t._v(" "),a("li",[t._v("会话层：向两个实体的表示层提供建立和使用连接的方法。")]),t._v(" "),a("li",[t._v("表示层：处理用户信息的表示问题，如编码、数据格式转换和加密解密等。")]),t._v(" "),a("li",[t._v("应用层：直接向用户提供服务，完成用户希望在网络上完成的各种工作")])]),t._v(" "),a("h3",{attrs:{id:"如何实现跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何实现跨域"}},[t._v("#")]),t._v(" 如何实现跨域？")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("服务器端运行跨域 设置 CORS 等于 *；")])]),t._v(" "),a("li",[a("p",[t._v("在单个接口使用注解 @CrossOrigin 运行跨域；")])])])])}),[],!1,null,null,null);r.default=v.exports}}]);