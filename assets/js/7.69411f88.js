(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{410:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"documentation-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#documentation-example"}},[t._v("#")]),t._v(" Documentation example")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#vuepress-github-pages-example"}},[t._v("vuepress-github-pages-example")])]),a("li",[a("a",{attrs:{href:"#code-snippets"}},[t._v("Code Snippets")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"vuepress-github-pages-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-github-pages-example"}},[t._v("#")]),t._v(" vuepress-github-pages-example")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/daggerok/vuepress-github-pages-example/actions/workflows/ci.yaml",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://github.com/daggerok/vuepress-github-pages-example/actions/workflows/ci.yaml/badge.svg",alt:"CI"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("VuePress GitHub Pages quick documentation example")]),t._v(" "),a("p",[t._v("You can run npm scripts outside npm project folder:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("npx degit daggerok/vuepress-github-pages-example app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -C docs\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" start -C docs\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev -C docs\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build-github-pages -C docs\n")])])]),a("p",[t._v("or quick getting started in target project:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("npx degit daggerok/vuepress-github-pages-example /tmp/app\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" /tmp/app/docs ./\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -C docs\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" start -C docs\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev -C docs\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build-github-pages -C docs\n")])])]),a("h2",{attrs:{id:"code-snippets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-snippets"}},[t._v("#")]),t._v(" Code Snippets")]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("autoconfigure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SpringBootApplication\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("runApplication\n\n"),a("span",{pre:!0,attrs:{class:"token annotation builtin"}},[t._v("@SpringBootApplication")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Application\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Array"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    runApplication"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Application"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setRegisterShutdownHook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("This file can be found here: "),a("code",[t._v("src/main/kotlin/daggerok/App.kt")])])])}),[],!1,null,null,null);s.default=e.exports}}]);