(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{730:function(s,t,a){"use strict";a.r(t);var e=a(28),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"镜像导入导出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#镜像导入导出"}},[s._v("#")]),s._v(" 镜像导入导出")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker save [options] images [images...]\ndocker load [options]\n")])])]),a("p",[s._v("示例:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker save -o nginx.tar nginx:latest \ndocker load -i nginx.tar\n")])])]),a("h2",{attrs:{id:"centos-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos-docker"}},[s._v("#")]),s._v(" Centos docker")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yum erase runc\n\nyum list containerd.io --showduplicates "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" -r\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/lib/systemd/system/docker.service\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);