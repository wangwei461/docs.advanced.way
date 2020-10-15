(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{623:function(s,e,t){"use strict";t.r(e);var n=t(27),a=Object(n.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("consul是分布式的、高可用、横向扩展的。consul提供的一些关键特性：")]),s._v(" "),t("ul",[t("li",[s._v("service discovery：consul通过DNS或者HTTP接口使服务注册和服务发现变的很容易，一些外部服务，例如saas提供的也可以一样注册。")]),s._v(" "),t("li",[s._v("health checking：健康检测使consul可以快速的告警在集群中的操作。和服务发现的集成，可以防止服务转发到故障的服务上面。")]),s._v(" "),t("li",[s._v("key/value storage：一个用来存储动态配置的系统。提供简单的HTTP接口，可以在任何地方操作。")]),s._v(" "),t("li",[s._v("multi-datacenter：无需复杂的配置，即可支持任意数量的区域。")])]),s._v(" "),t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("h4",{attrs:{id:"docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[s._v("#")]),s._v(" docker")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker run -d --name consul -node consul-node -p 8500:8500 consul:1.5\n")])])]),t("p",[s._v("访问: http://127.0.0.1:8500")]),s._v(" "),t("p",[s._v("-node：节点的名称\n-bind：绑定的一个地址，用于节点之间通信的地址，可以是内外网，必须是可以访问到的地址\n-server：这个就是表示这个节点是个SERVER")]),s._v(" "),t("p",[s._v("与springcloud 集成")]),s._v(" "),t("p",[s._v("配置文件加入")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("spring.cloud.consul.port=8500\nspring.cloud.consul.host=127.0.0.1\nspring.cloud.consul.discovery.instance-id=consul\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);