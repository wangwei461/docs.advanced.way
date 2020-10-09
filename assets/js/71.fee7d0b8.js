(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{579:function(a,s,t){"use strict";t.r(s);var e=t(27),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("Dockerfile 是一个用来构建镜像的文本文件，文本内容包含了一条条构建镜像所需的指令和说明。")]),a._v(" "),t("h2",{attrs:{id:"关键字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关键字"}},[a._v("#")]),a._v(" 关键字")]),a._v(" "),t("h3",{attrs:{id:"from"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#from"}},[a._v("#")]),a._v(" FROM")]),a._v(" "),t("p",[a._v("指定基础镜像，必须为第一个命令")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("FROM "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("image"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\nFROM "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("image"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(":"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("tag"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\nFROM "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("image"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("@"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("digest"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h3",{attrs:{id:"user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#user"}},[a._v("#")]),a._v(" USER")]),a._v(" "),t("p",[a._v("指定运行容器时的用户名或 UID，后续的 RUN 也会使用指定用户。\n使用USER指定用户时，可以使用用户名、UID或GID，或是两者的组合。当服务不需要管理员权限时，可以通过该命令指定运行用户。\n并且可以在之前创建所需要的用户")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("USER")]),a._v(" user\n"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("USER")]),a._v(" user:group\n"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("USER")]),a._v(" uid\n"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("USER")]),a._v(" uid:gid\n"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("USER")]),a._v(" user:gid\n"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("USER")]),a._v(" uid:group\n")])])]),t("h3",{attrs:{id:"maintainer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maintainer"}},[a._v("#")]),a._v(" MAINTAINER")]),a._v(" "),t("p",[a._v("维护者信息")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("MAINTAINER <name>\n")])])]),t("h3",{attrs:{id:"label"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#label"}},[a._v("#")]),a._v(" LABEL")]),a._v(" "),t("p",[a._v("用于为镜像添加元数据")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("LABEL "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 例")]),a._v("\nLABEL "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("version")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1.0"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("description")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"这是一个Web服务器"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("by")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"IT笔录"')]),a._v("\n")])])]),t("h3",{attrs:{id:"env"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#env"}},[a._v("#")]),a._v(" ENV")]),a._v(" "),t("p",[a._v("设置环境变量")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("ENV "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#<key>之后的所有内容均会被视为其<value>的组成部分，因此，一次只能设置一个变量")]),a._v("\nENV "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('#可以设置多个变量，每个变量为一个"<key>=<value>"的键值对，如果<key>中包含空格，可以使用\\来进行转义，也可以通过""来进行标示；另外，反斜线也可以用于续行')]),a._v("\n")])])]),t("h3",{attrs:{id:"run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[a._v("#")]),a._v(" RUN")]),a._v(" "),t("p",[a._v("构建镜像时执行的命令")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("RUN "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("command"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h3",{attrs:{id:"add"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add"}},[a._v("#")]),a._v(" ADD")]),a._v(" "),t("p",[a._v("将本地文件添加到容器中，tar类型文件会自动解压(网络压缩资源不会被解压)，可以访问网络资源，类似wget")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("ADD "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("src"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(". "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("dest"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\nADD "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"<src>"')]),a._v(","),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(". "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"<dest>"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("h3",{attrs:{id:"copy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#copy"}},[a._v("#")]),a._v(" COPY")]),a._v(" "),t("p",[a._v("功能类似ADD，但是是不会自动解压文件，也不能访问网络资源")]),a._v(" "),t("h3",{attrs:{id:"cmd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cmd"}},[a._v("#")]),a._v(" CMD")]),a._v(" "),t("p",[a._v("构建容器后调用，也就是在容器启动时才进行调用")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("CMD "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v(" param1 param2\n")])])]),t("h3",{attrs:{id:"volume"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#volume"}},[a._v("#")]),a._v(" VOLUME")]),a._v(" "),t("p",[a._v("用于指定持久化目录")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("VOLUME "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/path/to/dir"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("h3",{attrs:{id:"workdir-相当于cd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#workdir-相当于cd"}},[a._v("#")]),a._v(" WORKDIR 相当于cd")]),a._v(" "),t("p",[a._v("工作目录")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("WORKDIR /path/to/workdir\n")])])]),t("h3",{attrs:{id:"expose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expose"}},[a._v("#")]),a._v(" EXPOSE")]),a._v(" "),t("p",[a._v("指定于外界交互的端口")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("EXPOSE "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("port"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("port"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("h3",{attrs:{id:"entrypoint"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#entrypoint"}},[a._v("#")]),a._v(" ENTRYPOINT")]),a._v(" "),t("p",[a._v("配置容器，使其可执行化")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v(" ENTRYPOINT "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v(" param1 param2\n")])])]),t("h3",{attrs:{id:"arg"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arg"}},[a._v("#")]),a._v(" ARG")]),a._v(" "),t("p",[a._v("用于指定传递给构建运行时的变量")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("ARG "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("default value"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("h2",{attrs:{id:"dockerfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[a._v("#")]),a._v(" Dockerfile")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Base images 基础镜像")]),a._v("\nFROM centos\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#MAINTAINER 维护者信息")]),a._v("\nMAINTAINER user\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#ENV 设置环境变量")]),a._v("\nENV "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")]),a._v(" /usr/local/nginx/sbin:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#ADD  文件放在当前目录下，拷过去会自动解压")]),a._v("\nADD nginx-1.8.0.tar.gz /usr/local/  \nADD epel-release-latest-7.noarch.rpm /usr/local/  \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#RUN 执行以下命令 ")]),a._v("\nRUN "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -ivh /usr/local/epel-release-latest-7.noarch.rpm\nRUN yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" lftp gcc gcc-c++ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" openssl-devel pcre-devel pcre "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" yum clean all\nRUN "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("useradd")]),a._v(" -s /sbin/nologin -M www\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#WORKDIR 相当于cd")]),a._v("\nWORKDIR /usr/local/nginx-1.8.0 \n\nRUN ./configure --prefix"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/nginx --user"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("www --group"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("www --with-http_ssl_module --with-pcre "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n\nRUN "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"daemon off;"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" /etc/nginx.conf\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#EXPOSE 映射端口")]),a._v("\nEXPOSE "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#CMD 运行以下命令")]),a._v("\nCMD "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"nginx"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("h2",{attrs:{id:"构建命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建命令"}},[a._v("#")]),a._v(" 构建命令")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("docker build "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("OPTIONS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" URL "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" -\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 例")]),a._v("\ndocker build -t 名称:版本号 "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])])]),t("ul",[t("li",[a._v("--build-arg=[] :设置镜像创建时的变量；")]),a._v(" "),t("li",[a._v("--cpu-shares :设置 cpu 使用权重；")]),a._v(" "),t("li",[a._v("--cpu-period :限制 CPU CFS周期；")]),a._v(" "),t("li",[a._v("--cpu-quota :限制 CPU CFS配额；")]),a._v(" "),t("li",[a._v("--cpuset-cpus :指定使用的CPU id；")]),a._v(" "),t("li",[a._v("--cpuset-mems :指定使用的内存 id；")]),a._v(" "),t("li",[a._v("--disable-content-trust :忽略校验，默认开启；")]),a._v(" "),t("li",[a._v("-f :指定要使用的Dockerfile路径；")]),a._v(" "),t("li",[a._v("--force-rm :设置镜像过程中删除中间容器；")]),a._v(" "),t("li",[a._v("--isolation :使用容器隔离技术；")]),a._v(" "),t("li",[a._v("--label=[] :设置镜像使用的元数据；")]),a._v(" "),t("li",[a._v("-m :设置内存最大值；")]),a._v(" "),t("li",[a._v('--memory-swap :设置Swap的最大值为内存+swap，"-1"表示不限swap；')]),a._v(" "),t("li",[a._v("--no-cache :创建镜像的过程不使用缓存；")]),a._v(" "),t("li",[a._v("--pull :尝试去更新镜像的新版本；")]),a._v(" "),t("li",[a._v("--quiet, -q :安静模式，成功后只输出镜像 ID；")]),a._v(" "),t("li",[a._v("--rm :设置镜像成功后删除中间容器；")]),a._v(" "),t("li",[a._v("--shm-size :设置/dev/shm的大小，默认值是64M；")]),a._v(" "),t("li",[a._v("--ulimit :Ulimit配置。")]),a._v(" "),t("li",[a._v("--tag, -t: 镜像的名字及标签，通常 name:tag 或者 name 格式；可以在一次构建中为一个镜像设置多个标签。")]),a._v(" "),t("li",[a._v("--network: 默认 default。在构建期间设置RUN指令的网络模式")])])])}),[],!1,null,null,null);s.default=r.exports}}]);