webpackJsonp([1],{"3dl8":function(t,e){},"4+pH":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s=(a("uMhA"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"porlet"},[e("div",{staticClass:"porlet-header"},[this._t("header")],2),this._v(" "),e("div",{staticClass:"porlet-body"},[this._t("default")],2),this._v(" "),e("div",{staticClass:"porlet-footer"},[this._t("footer")],2)])},staticRenderFns:[]});var r=a("VU/8")({name:"porlet"},s,!1,function(t){a("WIn7")},null,null).exports,l={name:"App",components:{Porlet:r},data:function(){return{drawer:null,items:[{icon:"view_column",text:"Flexbox",url:"/flexbox"},{icon:"view_quilt",text:"Grid",url:"/grid"}]}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app"},[a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{staticClass:"grey lighten-4",attrs:{fixed:"",clipped:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{staticClass:"grey lighten-4",attrs:{dense:""}},[t._l(t.items,function(e,n){return[e.heading?a("v-layout",{key:n,attrs:{row:"","align-center":""}},[a("v-flex",{attrs:{xs6:""}},[e.heading?a("v-subheader",[t._v("\n                "+t._s(e.heading)+"\n              ")]):t._e()],1),t._v(" "),a("v-flex",{staticClass:"text-xs-right",attrs:{xs6:""}},[a("v-btn",{attrs:{small:"",flat:""}},[t._v("edit")])],1)],1):e.divider?a("v-divider",{key:n,staticClass:"my-3",attrs:{dark:""}}):a("v-list-tile",{key:n,on:{click:function(a){t.$router.push(e.url)}}},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",{staticClass:"grey--text"},[t._v("\n                "+t._s(e.text)+"\n              ")])],1)],1)]})],2)],1),t._v(" "),a("v-toolbar",{attrs:{color:"amber",app:"",absolute:"","clipped-left":""}},[a("v-toolbar-side-icon",{nativeOn:{click:function(e){t.drawer=!t.drawer}}}),t._v(" "),a("span",{staticClass:"title ml-3 mr-5",staticStyle:{cursor:"pointer"},on:{click:function(e){t.$router.push("/")}}},[t._v("\n        You're Home\n      ")]),t._v(" "),a("v-text-field",{attrs:{"solo-inverted":"",flat:"",label:"Search","prepend-icon":"search"}}),t._v(" "),a("v-spacer")],1),t._v(" "),a("v-content",[a("v-container",{staticClass:"grey lighten-4",attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"justify-center":"","align-center":""}},[a("v-flex",{attrs:{shrink:""}},[a("router-view")],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var o=a("VU/8")(l,i,!1,function(t){a("4+pH")},null,null).exports,v=a("/ocq"),c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};a("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},c,!1,function(t){a("Ugm9")},"data-v-694cd902",null).exports;var d={name:"home",components:{Porlet:r}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("porlet",[e("template",{slot:"header"},[this._v("\n    Home header\n  ")]),this._v("\n\n  Home body\n\n  "),this._v(" "),e("template",{slot:"footer"},[this._v("\n    home footer\n  ")])],2)},staticRenderFns:[]};var _=a("VU/8")(d,u,!1,function(t){a("gBTS")},"data-v-f95c8632",null).exports,p={name:"flex-box-view",components:{Porlet:r},data:function(){return{items:[{label:"A",id:"a"},{label:"B",id:"b"},{label:"C",id:"c"},{label:"D",id:"d"},{label:"E",id:"e"},{label:"F",id:"f"}]}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex-box-view"},[a("div",{staticClass:"section"},[a("porlet",{staticClass:"flex-box-porlet"},[a("div",{attrs:{slot:"header"},slot:"header"},[t._v("\n        Flow: Row Wrap\n      ")]),t._v(" "),a("div",{staticClass:"row-wrap-parent"},t._l(t.items,function(e){return a("div",{key:e.id,staticClass:"flex-child"},[t._v("\n          "+t._s(e.label)+"\n        ")])}))])],1),t._v(" "),a("div",{staticClass:"section"},[a("porlet",{staticClass:"flex-box-porlet"},[a("div",{attrs:{slot:"header"},slot:"header"},[t._v("\n        Flow: Row NoWrap\n      ")]),t._v(" "),a("div",{staticClass:"row-nowrap-parent"},t._l(t.items,function(e){return a("div",{key:e.id,staticClass:"flex-child"},[t._v("\n          "+t._s(e.label)+"\n        ")])}))]),t._v(" "),a("porlet",{staticClass:"flex-box-porlet"},[a("div",{attrs:{slot:"header"},slot:"header"},[t._v("\n        Flow: Row NoWrap -- align items : Center\n      ")]),t._v(" "),a("div",{staticClass:"row-nowrap-parent row-nowrap-parent--align-items"},t._l(t.items,function(e){return a("div",{key:e.id,staticClass:"flex-child"},[t._v("\n          "+t._s(e.label)+"\n        ")])}))]),t._v(" "),a("porlet",{staticClass:"flex-box-porlet"},[a("div",{attrs:{slot:"header"},slot:"header"},[t._v("\n        Flow: Row NoWrap : Different child flex\n      ")]),t._v(" "),a("div",{staticClass:"row-nowrap-parent row-nowrap-parent--dif-child-flex"},t._l(t.items,function(e){return a("div",{key:e.id,staticClass:"flex-child"},[t._v("\n          "+t._s(e.label)+"\n        ")])}))])],1),t._v(" "),a("div",{staticClass:"section"},[a("porlet",{staticClass:"flex-box-porlet"},[a("div",{attrs:{slot:"header"},slot:"header"},[t._v("\n        Flow: Column Wrap\n      ")]),t._v(" "),a("div",{staticClass:"column-wrap-parent"},t._l(t.items,function(e){return a("div",{key:e.id,staticClass:"flex-child"},[t._v("\n          "+t._s(e.label)+"\n        ")])}))])],1),t._v(" "),a("div",{staticClass:"section"},[a("porlet",{staticClass:"flex-box-porlet"},[a("div",{attrs:{slot:"header"},slot:"header"},[t._v("\n        Flow: Row NoWrap\n      ")]),t._v(" "),a("div",{staticClass:"column-nowrap-parent"},t._l(t.items,function(e){return a("div",{key:e.id,staticClass:"flex-child"},[t._v("\n          "+t._s(e.label)+"\n        ")])}))]),t._v(" "),a("porlet",{staticClass:"flex-box-porlet"},[a("div",{attrs:{slot:"header"},slot:"header"},[t._v("\n        Flow: Column NoWrap -- align items : Center\n      ")]),t._v(" "),a("div",{staticClass:"column-nowrap-parent column-nowrap-parent--align-items"},t._l(t.items,function(e){return a("div",{key:e.id,staticClass:"flex-child"},[t._v("\n          "+t._s(e.label)+"\n        ")])}))]),t._v(" "),a("porlet",{staticClass:"flex-box-porlet"},[a("div",{attrs:{slot:"header"},slot:"header"},[t._v("\n        Flow: Column NoWrap : Different child flex\n      ")]),t._v(" "),a("div",{staticClass:"column-nowrap-parent column-nowrap-parent--dif-child-flex"},t._l(t.items,function(e){return a("div",{key:e.id,staticClass:"flex-child"},[t._v("\n          "+t._s(e.label)+"\n        ")])}))])],1)])},staticRenderFns:[]};var h=a("VU/8")(p,f,!1,function(t){a("v2mk")},null,null).exports,m={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"grid"},[this._v("\n  Grid View\n")])},staticRenderFns:[]};var x=a("VU/8")({name:"grid"},m,!1,function(t){a("3dl8")},"data-v-454ac7f4",null).exports;n.a.use(v.a);var b=new v.a({routes:[{path:"/",name:"home",component:_},{path:"/flexbox",name:"flexbox",component:h},{path:"/grid",name:"grid",component:x}]}),C=(a("j1ja"),a("gJtD"),a("QCv7"),a("3EgV")),w=a.n(C);n.a.config.productionTip=!1,n.a.use(w.a),new n.a({el:"#app",router:b,components:{App:o},template:"<App/>"})},QCv7:function(t,e){},Ugm9:function(t,e){},WIn7:function(t,e){},gBTS:function(t,e){},gJtD:function(t,e){},uMhA:function(t,e){},v2mk:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3d9d3a9423a849008f0b.js.map