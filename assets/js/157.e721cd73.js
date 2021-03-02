(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{658:function(t,_,v){"use strict";v.r(_);var a=v(8),e=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"网络协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#网络协议"}},[t._v("#")]),t._v(" 网络协议")]),t._v(" "),v("h3",{attrs:{id:"time-wait"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#time-wait"}},[t._v("#")]),t._v(" time_wait")]),t._v(" "),v("p",[t._v("客户端收到服务的释放连接的请求后，不是立马进入CLOSE状态，而是还要再等待 2MSL（msl 报文最大生存时间）。")]),t._v(" "),v("p",[t._v("理由是:")]),t._v(" "),v("ul",[v("li",[t._v("确保最后一个确认报文能够到达。如果没能到达，服务端就会会重发FIN请求释放连接。等待一段时间没有收到重发就说明服务的已经CLOSE了。如果有重发，则客户端再发送一次LAST ack信号")]),t._v(" "),v("li",[t._v("等待一段时间是为了让本连接持续时间内所产生的所有报文都从网络中消失，使得下一个新的连接不会出现旧的连接请求报文")])]),t._v(" "),v("h3",{attrs:{id:"三次握手、四次挥手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三次握手、四次挥手"}},[t._v("#")]),t._v(" 三次握手、四次挥手")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("三次握手 为了防止失效的连接请求到底服务器，让服务器错误地打开连接，白白浪费资源")])]),t._v(" "),v("li",[v("p",[t._v("四次握手 因为客户端发送FIN连接请求释放连接后，服务器接受请求后进入CLOSE_WAIT状态，这个状态就是为了让服务段发送还没有发送完的数据，发送完成后再发送FIN信号")])])]),t._v(" "),v("h3",{attrs:{id:"http-响应码-301-和-302-代表的是什么-有什么区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-响应码-301-和-302-代表的是什么-有什么区别"}},[t._v("#")]),t._v(" http 响应码 301 和 302 代表的是什么？有什么区别？")]),t._v(" "),v("p",[t._v("301：永久重定向")]),t._v(" "),v("p",[t._v("302：暂时重定向")]),t._v(" "),v("p",[t._v("它们的区别是，301 对搜索引擎优化（SEO）更加有利；302 有被提示为网络拦截的风险。")]),t._v(" "),v("h3",{attrs:{id:"forward-和-redirect-的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#forward-和-redirect-的区别"}},[t._v("#")]),t._v(" forward 和 redirect 的区别？")]),t._v(" "),v("p",[t._v("forward 是转发 和 redirect 是重定向：")]),t._v(" "),v("p",[t._v("地址栏 url 显示：foward url 不会发生改变，redirect url 会发生改变；\n数据共享：forward 可以共享 request 里的数据，redirect 不能共享；\n效率：forward 比 redirect 效率高。")]),t._v(" "),v("h3",{attrs:{id:"简述-tcp-和-udp的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简述-tcp-和-udp的区别"}},[t._v("#")]),t._v(" 简述 tcp 和 udp的区别？")]),t._v(" "),v("p",[t._v("tcp 和 udp 是 OSI 模型中的运输层中的协议。tcp 提供可靠的通信传输，而 udp 则常被用于让广播和细节控制交给应用的通信传输。")]),t._v(" "),v("p",[t._v("两者的区别大致如下：")]),t._v(" "),v("p",[t._v("tcp 面向连接，udp 面向非连接即发送数据前不需要建立链接；\ntcp 提供可靠的服务（数据传输），udp 无法保证；\ntcp 面向字节流，udp 面向报文；\ntcp 数据传输慢，udp 数据传输快；")]),t._v(" "),v("h3",{attrs:{id:"tcp-为什么要三次握手-两次不行吗-为什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp-为什么要三次握手-两次不行吗-为什么"}},[t._v("#")]),t._v(" tcp 为什么要三次握手，两次不行吗？为什么？")]),t._v(" "),v("p",[t._v("如果采用两次握手，那么只要服务器发出确认数据包就会建立连接，但由于客户端此时并未响应服务器端的请求，那此时服务器端就会一直在等待客户端，这样服务器端就白白浪费了一定的资源。若采用三次握手，服务器端没有收到来自客户端的再此确认，则就会知道客户端并没有要求建立请求，就不会浪费服务器的资源")]),t._v(" "),v("h3",{attrs:{id:"osi-的七层模型都有哪些"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#osi-的七层模型都有哪些"}},[t._v("#")]),t._v(" OSI 的七层模型都有哪些？")]),t._v(" "),v("ul",[v("li",[t._v("物理层：利用传输介质为数据链路层提供物理连接，实现比特流的透明传输。")]),t._v(" "),v("li",[t._v("数据链路层：负责建立和管理节点间的链路。")]),t._v(" "),v("li",[t._v("网络层：通过路由选择算法，为报文或分组通过通信子网选择最适当的路径。")]),t._v(" "),v("li",[t._v("传输层：向用户提供可靠的端到端的差错和流量控制，保证报文的正确传输。")]),t._v(" "),v("li",[t._v("会话层：向两个实体的表示层提供建立和使用连接的方法。")]),t._v(" "),v("li",[t._v("表示层：处理用户信息的表示问题，如编码、数据格式转换和加密解密等。")]),t._v(" "),v("li",[t._v("应用层：直接向用户提供服务，完成用户希望在网络上完成的各种工作")])]),t._v(" "),v("h3",{attrs:{id:"如何实现跨域"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何实现跨域"}},[t._v("#")]),t._v(" 如何实现跨域？")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("服务器端运行跨域 设置 CORS 等于 *；")])]),t._v(" "),v("li",[v("p",[t._v("在单个接口使用注解 @CrossOrigin 运行跨域；")])])]),t._v(" "),v("h3",{attrs:{id:"从输入url到页面展示的详细过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#从输入url到页面展示的详细过程"}},[t._v("#")]),t._v(" 从输入URL到页面展示的详细过程")]),t._v(" "),v("ol",[v("li",[t._v("输入网址")]),t._v(" "),v("li",[t._v("DNS解析")]),t._v(" "),v("li",[t._v("建立tcp连接")]),t._v(" "),v("li",[t._v("客户端发送HTPP请求")]),t._v(" "),v("li",[t._v("服务器处理请求")]),t._v(" "),v("li",[t._v("服务器响应请求")]),t._v(" "),v("li",[t._v("浏览器展示HTML")]),t._v(" "),v("li",[t._v("浏览器发送请求获取其他在HTML中的资源")])]),t._v(" "),v("h3",{attrs:{id:"直播协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#直播协议"}},[t._v("#")]),t._v(" 直播协议")]),t._v(" "),v("ul",[v("li",[t._v("RTMP")])]),t._v(" "),v("p",[t._v("RTMP 协议比较全能，既可以用来推送又可以用来直播，其核心理念是将大块的视频帧和音频帧拆分，然后以小数据包的形式在互联网上进行传输，而且支持加密，因此隐私性相对比较理想，但拆包组包的过程比较复杂，所以在海量并发时也容易出现一些不可预期的稳定性问题。")]),t._v(" "),v("ul",[v("li",[t._v("FLV")])]),t._v(" "),v("p",[t._v("FLV 协议由 Adobe 公司主推，格式极其简单，只是在大块的视频帧和音视频头部加入一些标记头信息，由于这种简洁，在延迟表现和大规模并发方面都很成熟，唯一的不足就是在手机浏览器上的支持非常有限，但是用作手机端 App 直播协议却异常合适。")]),t._v(" "),v("ul",[v("li",[t._v("HLS")])]),t._v(" "),v("p",[t._v("苹果推出的解决方案，将视频分成5秒 - 10秒的视频小分片，然后用 m3u8 索引表进行管理，由于客户端下载到的视频都是5秒 - 10秒的完整数据，故视频的流畅性很好，但也同样引入了很大的延迟（HLS 的一般延迟在10秒 - 30秒左右）。相比于 FLV， HLS 在 iPhone 和大部分 Android 手机浏览器上的支持非常给力，所以常用于 QQ 和微信朋友圈的 URL 分享")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"left"}},[t._v("直播协议")]),t._v(" "),v("th",{staticStyle:{"text-align":"left"}},[t._v("优点")]),t._v(" "),v("th",{staticStyle:{"text-align":"left"}},[t._v("缺点")]),t._v(" "),v("th",{staticStyle:{"text-align":"left"}},[t._v("播放延迟")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("FLV")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("成熟度高、高并发无压力")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("需集成 SDK 才能播放")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("2s - 3s")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("RTMP")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("优质线路下理论延迟最低")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("高并发情况下表现不佳")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("1s - 3s")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("HLS(m3u8)")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("手机浏览器支持度高")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("延迟非常高")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("10s - 30s")])])])])])}),[],!1,null,null,null);_.default=e.exports}}]);