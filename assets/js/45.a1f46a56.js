(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{529:function(t,a,s){t.exports=s.p+"assets/img/20170811155030589.a146d553.png"},698:function(t,a,s){"use strict";s.r(a);var n=s(27),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#排序"}},[t._v("#")]),t._v(" 排序")]),t._v(" "),n("h3",{attrs:{id:"快排"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#快排"}},[t._v("#")]),t._v(" 快排")]),t._v(" "),n("ol",[n("li",[t._v("先从数列中取出一个数作为基准数")]),t._v(" "),n("li",[t._v("分区过程，将比这个数大的数全放到它的右边，小于或等于它的数全放到它的左边")]),t._v(" "),n("li",[t._v("再对左右区间重复第二步，直到各区间只有一个数 基于递归")])]),t._v(" "),n("h4",{attrs:{id:"双路快排"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#双路快排"}},[t._v("#")]),t._v(" 双路快排")]),t._v(" "),n("p",[t._v("在有些带有许多重复数据的数组里，使用随机快速排序或者最简单的快速排序算法时，由于重复的数据会放在原来的索引位置不动，就回导致划分数组时划分的某一部分太长，起不到分段排序的效果，这样就导致算法退化成O(n^2)的复杂度")]),t._v(" "),n("ol",[n("li",[t._v("避免数组近乎有序，先随机取出一个val，和第一个元素交换。")]),t._v(" "),n("li",[t._v("定义两个指针，i从头开始指向小于val的区域后一个元素，j从尾开始指向大于val的第一个元素。")]),t._v(" "),n("li",[t._v("当i所指向的值小于等于val，i++，否则暂停。当j所指向的值大于等于val，j--，否则暂停。当i和j都暂停时，交换i和j所指位置的元素。直到i>j结束，让start赋给j所指向的位置，返回j。")]),t._v(" "),n("li",[t._v("重复2.3 直到start>end，排序完成")])]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("qiuckSort3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" start "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" end "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("qiuck3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("end"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("qiuck3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" array "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" end"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("start "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("end"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("end "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" start "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果数据量少就使用直接插入")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("end"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" random "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Math")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("end"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("start"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("swap")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("random"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//找到一个随机key")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" value "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" lt "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" gt "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" end"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" start"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("gt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//放到小于的区域")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("swap")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("lt"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            lt"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//放到大于区域")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("swap")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("gt"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            gt"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("swap")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("lt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//直接跳过相等元素的比较")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("qiuck3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("lt"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("qiuck3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("gt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("end"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"堆排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#堆排序"}},[t._v("#")]),t._v(" 堆排序")]),t._v(" "),n("p",[t._v("堆排序，即借助堆这种数据结构将一个数组进行排序")]),t._v(" "),n("ol",[n("li",[t._v("将数组原地转换为一个大顶堆结构；")]),t._v(" "),n("li",[t._v("交换堆顶和堆中最后一个元素的位置，堆中元素数量减1；")]),t._v(" "),n("li",[t._v("从堆顶开始按照大顶堆规则构建堆结构后，重复第2步操作，直到堆中只剩下一个元素，堆排序操作完毕")])]),t._v(" "),n("p",[n("img",{attrs:{src:s(529),alt:""}})]),t._v(" "),n("h4",{attrs:{id:"大顶堆"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#大顶堆"}},[t._v("#")]),t._v(" 大顶堆")]),t._v(" "),n("p",[t._v("根结点（亦称为堆顶）的关键字是堆里所有结点关键字中最大者，称为大顶堆。\n大根堆要求根节点的关键字既大于或等于左子树的关键字值，又大于或等于右子树的关键字值")]),t._v(" "),n("h4",{attrs:{id:"小顶堆"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#小顶堆"}},[t._v("#")]),t._v(" 小顶堆")]),t._v(" "),n("p",[t._v("根结点（亦称为堆顶）的关键字是堆里所有结点关键字中最小者，称为小顶堆。")]),t._v(" "),n("p",[t._v("小根堆要求根节点的关键字既小于或等于左子树的关键字值，又小于或等于右子树的关键字值")]),t._v(" "),n("h3",{attrs:{id:"归并排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#归并排序"}},[t._v("#")]),t._v(" 归并排序")]),t._v(" "),n("p",[t._v("归并的含义是将两个或两个以上的有序表合并成一个新的有序表。")]),t._v(" "),n("p",[t._v("归并排序有多路归并排序、两路归并排序 , 可用于内排序，也可以用于外排序")]),t._v(" "),n("p",[t._v("O(nlgn)")]),t._v(" "),n("p",[t._v("思路:")]),t._v(" "),n("p",[t._v("将一个数列先分后治 先对半分，数列对半分，分到最后一个，然后在两两治，合并成一个有序列 在从2个有序列合并一个有序，知道合并完成")]),t._v(" "),n("h4",{attrs:{id:"两路归并排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#两路归并排序"}},[t._v("#")]),t._v(" 两路归并排序")]),t._v(" "),n("p",[t._v("分而治之(divide - conquer);\n每个递归过程涉及三个步骤\n第一, 分解: 把待排序的 n 个元素的序列分解成两个子序列, 每个子序列包括 n/2 个元素.\n第二, 治理: 对每个子序列分别调用归并排序 MergeSort, 进行递归操作\n第三, 合并: 合并两个排好序的子序列,生成排序结果")]),t._v(" "),n("h3",{attrs:{id:"插入排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#插入排序"}},[t._v("#")]),t._v(" 插入排序")]),t._v(" "),n("p",[t._v("O(n平方)")]),t._v(" "),n("p",[t._v("直接插入排序的基本操作是将一个记录插入到已经排好的有序表中，从而得到一个新的、记录数增1的有序表")]),t._v(" "),n("h3",{attrs:{id:"希尔排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#希尔排序"}},[t._v("#")]),t._v(" 希尔排序")]),t._v(" "),n("p",[t._v("是对直接插入排序进行的一种改进排序算法，采用跳跃分割的方法，将整个待排序列分割成若干个子序列，对这些子序列进行直接插入排序，使其得到的结果基本有序，然后再不断缩减分割的区间，使其完全有序")]),t._v(" "),n("h3",{attrs:{id:"外排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#外排序"}},[t._v("#")]),t._v(" 外排序")]),t._v(" "),n("p",[t._v("外排序采用分块的方法（分而治之），首先将数据分块，对块内数据按选择一种高效的内排序策略进行排序。然后采用归并排序的思想对于所有的块进行排序，得到所有数据的一个有序序列")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("采用适当的内部排序方法对输入文件的每个片段进行排序，将排好序的片段（成为归并段）写到外部存储器中（通常由一个可用的磁盘作为临时缓冲区），这样临时缓冲区中的每个归并段的内容是有序的")])]),t._v(" "),n("li",[n("p",[t._v("利用归并算法，归并第一阶段生成的归并段，直到只剩下一个归并段为止")])])]),t._v(" "),n("h2",{attrs:{id:"算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#算法"}},[t._v("#")]),t._v(" 算法")]),t._v(" "),n("h3",{attrs:{id:"数字反转"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数字反转"}},[t._v("#")]),t._v(" 数字反转")]),t._v(" "),n("ol",[n("li",[n("code",[t._v("%10")]),t._v(" 取余数，得到最低位")]),t._v(" "),n("li",[n("code",[t._v("/10")]),t._v(" 降低位数")]),t._v(" "),n("li",[t._v("重复 1.2")])]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("reverse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" rs "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        rs "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        rs "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);