(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-list-user-list"],{"0981":function(t,e,a){"use strict";var n=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("62f6")),r=n(a("67f6")),s=n(a("18ca")),u=n(a("d594")),o={components:{swiperTabHead:i.default,userList:r.default,loadMore:s.default,noThing:u.default},data:function(){return{swiperheight:500,tabIndex:0,tabBars:[{name:"互关",id:"huguan",num:10},{name:"关注",id:"guanzhu",num:20},{name:"粉丝",id:"fensi",num:30}],newslist:[{loadtext:"上拉加载更多",list:[{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:20,sex:0,isguanzhu:!0},{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:21,sex:1,isguanzhu:!1},{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:20,sex:0,isguanzhu:!0},{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:21,sex:1,isguanzhu:!1},{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:20,sex:0,isguanzhu:!0},{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:21,sex:1,isguanzhu:!1},{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:20,sex:0,isguanzhu:!0},{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:21,sex:1,isguanzhu:!1}]},{loadtext:"上拉加载更多",list:[{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:20,sex:0,isguanzhu:!0},{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:21,sex:1,isguanzhu:!1}]},{loadtext:"上拉加载更多",list:[{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:20,sex:0,isguanzhu:!0},{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:21,sex:1,isguanzhu:!1}]}]}},onLoad:function(){var t=this;uni.getSystemInfo({success:function(e){var a=e.windowHeight-uni.upx2px(100);t.swiperheight=a}})},onNavigationBarButtonTap:function(t){0==t.index&&uni.navigateBack({delta:1})},methods:{loadmore:function(t){var e=this;"上拉加载更多"==this.newslist[t].loadtext&&(this.newslist[t].loadtext="加载中...",setTimeout(function(){var a={userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:20,sex:0,isguanzhu:!0};e.newslist[t].list.push(a),e.newslist[t].loadtext="上拉加载更多"},1e3))},tabtap:function(t){this.tabIndex=t},tabChange:function(t){this.tabIndex=t.detail.current}}};e.default=o},"12af":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".tag-sex[data-v-25db1c07]{background:#007aff;color:#fff;font-size:%?23?%;padding:%?5?% %?10?%;margin-left:%?10?%;border-radius:%?20?%;line-height:%?22?%}.icon-nv[data-v-25db1c07]{background:#ff698d!important}",""])},"138f":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("c5f6");var n={props:{tabBars:Array,tabIndex:Number,scrollStyle:{type:String,default:""},scrollItemStyle:{type:String,default:""}},methods:{tabtap:function(t){this.$emit("tabtap",t)}}};e.default=n},"18ca":function(t,e,a){"use strict";a.r(e);var n=a("70a6"),i=a("f823");for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);a("933c");var s=a("2877"),u=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"72c1fc00",null);e["default"]=u.exports},"1b3d":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".load-more[data-v-72c1fc00]{text-align:center;color:#aaa;padding:%?15?%}",""])},"2dde":function(t,e,a){"use strict";a.r(e);var n=a("712f"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e["default"]=i.a},3268:function(t,e,a){"use strict";var n=a("6939"),i=a.n(n);i.a},3676:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{loadtext:String}};e.default=n},3852:function(t,e,a){var n=a("12af");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("55062176",n,!0,{sourceMap:!1,shadowMode:!1})},4349:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"body"},[a("swiper-tab-head",{attrs:{tabBars:t.tabBars,tabIndex:t.tabIndex,scrollItemStyle:"width:33%;",scrollStyle:"border-bottom:0;"},on:{tabtap:function(e){e=t.$handleEvent(e),t.tabtap(e)}}}),a("v-uni-view",{staticClass:"uni-tab-bar"},[a("v-uni-swiper",{staticClass:"swiper-box",style:{height:t.swiperheight+"px"},attrs:{current:t.tabIndex},on:{change:function(e){e=t.$handleEvent(e),t.tabChange(e)}}},t._l(t.newslist,function(e,n){return a("v-uni-swiper-item",{key:n},[a("v-uni-scroll-view",{staticClass:"list",attrs:{"scroll-y":""},on:{scrolltolower:function(e){e=t.$handleEvent(e),t.loadmore(n)}}},[e.list.length>0?[t._l(e.list,function(t,e){return[a("user-list",{key:e+"_0",attrs:{item:t,index:e}})]}),a("load-more",{attrs:{loadtext:e.loadtext}})]:[a("no-thing")]],2)],1)}),1)],1)],1)},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},"4f5f":function(t,e,a){"use strict";var n=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("c5f6");var i=n(a("8d51")),r={components:{tagSexAge:i.default},props:{item:Object,index:Number}};e.default=r},5072:function(t,e,a){},"56f8":function(t,e,a){"use strict";var n=a("5ab7"),i=a.n(n);i.a},"5ab7":function(t,e,a){var n=a("df79");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("231abd5c",n,!0,{sourceMap:!1,shadowMode:!1})},"61b1":function(t,e,a){"use strict";a.r(e);var n=a("0981"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e["default"]=i.a},"62f6":function(t,e,a){"use strict";a.r(e);var n=a("da32"),i=a("844a");for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);a("3268");var s=a("2877"),u=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"09dcebf6",null);e["default"]=u.exports},"67f6":function(t,e,a){"use strict";a.r(e);var n=a("85f0"),i=a("8c37");for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);a("56f8");var s=a("2877"),u=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"09d3938f",null);e["default"]=u.exports},6939:function(t,e,a){var n=a("a1af");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("0a7f3a29",n,!0,{sourceMap:!1,shadowMode:!1})},"70a6":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"load-more"},[t._v(t._s(t.loadtext))])},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},"712f":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("c5f6");var n={props:{sex:Number,age:Number}};e.default=n},7261:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"nothing u-f-ajc animated fadeIn"},[a("v-uni-image",{attrs:{src:"../../static/common/nothing.png",mode:"widthFix"}})],1)},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},"844a":function(t,e,a){"use strict";a.r(e);var n=a("138f"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e["default"]=i.a},"85f0":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"user-list u-f-ac animated fadeInLeft fast"},[a("v-uni-image",{attrs:{src:t.item.userpic,mode:"widthFix","lazy-load":""}}),a("v-uni-view",[a("v-uni-view",[t._v(t._s(t.item.username))]),a("v-uni-view",{staticStyle:{display:"inline-block"}},[a("tag-sex-age",{attrs:{age:t.item.age,sex:t.item.sex}})],1)],1),a("v-uni-view",{staticClass:"icon iconfont u-f-ajc",class:[t.item.isguanzhu?"icon-xuanze-yixuan":"icon-zengjia1"]})],1)},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},"8c37":function(t,e,a){"use strict";a.r(e);var n=a("4f5f"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e["default"]=i.a},"8d51":function(t,e,a){"use strict";a.r(e);var n=a("e9b4"),i=a("2dde");for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);a("ec21");var s=a("2877"),u=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"25db1c07",null);e["default"]=u.exports},"933c":function(t,e,a){"use strict";var n=a("c266"),i=a.n(n);i.a},"945b":function(t,e,a){"use strict";a.r(e);var n=a("4349"),i=a("61b1");for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);var s=a("2877"),u=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"4ac177d6",null);e["default"]=u.exports},"9f70":function(t,e,a){var n=a("ef54");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("5eb0806c",n,!0,{sourceMap:!1,shadowMode:!1})},a1af:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".uni-swiper-tab[data-v-09dcebf6]{border-bottom:%?1?% solid #eee}.swiper-tab-list[data-v-09dcebf6]{color:#969696;font-weight:700}.uni-tab-bar .active[data-v-09dcebf6]{color:#343434}.active .swiper-tab-line[data-v-09dcebf6]{border-bottom:%?6?% solid #fede33;width:%?70?%;margin:auto;border-top:%?6?% solid #fede33;border-radius:%?20?%}",""])},bd02:function(t,e,a){"use strict";var n=a("9f70"),i=a.n(n);i.a},c266:function(t,e,a){var n=a("1b3d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("7da4a891",n,!0,{sourceMap:!1,shadowMode:!1})},d594:function(t,e,a){"use strict";a.r(e);var n=a("7261"),i=a("dba8");for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);a("bd02");var s=a("2877"),u=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"172eccec",null);e["default"]=u.exports},da32:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-tab-bar"},[a("v-uni-scroll-view",{staticClass:"uni-swiper-tab",style:t.scrollStyle,attrs:{"scroll-x":""}},[t._l(t.tabBars,function(e,n){return[a("v-uni-view",{key:e.id+"_0",staticClass:"swiper-tab-list",class:{active:t.tabIndex==n},style:t.scrollItemStyle,on:{click:function(e){e=t.$handleEvent(e),t.tabtap(n)}}},[t._v(t._s(e.name)+" "+t._s(e.num?e.num:"")),a("v-uni-view",{staticClass:"swiper-tab-line"})],1)]})],2)],1)},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},dba8:function(t,e,a){"use strict";a.r(e);var n=a("5072"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e["default"]=i.a},df79:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".user-list[data-v-09d3938f]{margin:0 %?20?%;padding:%?20?% 0;border-bottom:%?1?% solid #eee}.user-list>uni-image[data-v-09d3938f]{width:%?100?%;height:%?100?%;border-radius:100%;margin-right:%?20?%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.user-list>uni-view[data-v-09d3938f]:first-of-type{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.user-list>uni-view:first-of-type>uni-view[data-v-09d3938f]:first-child{font-size:%?35?%}.user-list>uni-view[data-v-09d3938f]:last-of-type{width:%?80?%;color:#ccc}.icon-zengjia1[data-v-09d3938f]{color:#f8791b!important}",""])},e9b4:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"tag-sex icon iconfont",class:[0==t.sex?"icon-nan":"icon-nv"]},[t._v(t._s(t.age))])},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},ec21:function(t,e,a){"use strict";var n=a("3852"),i=a.n(n);i.a},ef54:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".nothing[data-v-172eccec]{background:#fff;position:absolute;top:0;left:0;right:0;bottom:0}.nothing uni-image[data-v-172eccec]{width:50%}",""])},f823:function(t,e,a){"use strict";a.r(e);var n=a("3676"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e["default"]=i.a}}]);