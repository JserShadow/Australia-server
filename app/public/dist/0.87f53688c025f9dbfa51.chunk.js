webpackJsonp([0],{100:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("Form",{staticStyle:{padding:"15px 20%"},attrs:{"label-position":"left","label-width":100}},[o("FormItem",{attrs:{label:"商品名称"}},[o("i-input",{staticStyle:{width:"30%"},attrs:{placeholder:"请输入商品名称"},model:{value:e.goodsName,callback:function(t){e.goodsName=t},expression:"goodsName"}})],1),e._v(" "),o("FormItem",{attrs:{label:"商品价格"}},[o("i-input",{staticStyle:{width:"160px"},attrs:{placeholder:"接受到小数点后两位"},model:{value:e.goodsPrice,callback:function(t){e.goodsPrice=t},expression:"goodsPrice"}},[o("span",{attrs:{slot:"prepend"},slot:"prepend"},[e._v("￥")])])],1),e._v(" "),o("FormItem",{attrs:{label:"选择商品类别"}},[o("Select",{model:{value:e.selector.value,callback:function(t){e.$set(e.selector,"value",t)},expression:"selector.value"}},[o("Option",{attrs:{value:e.selector.value1}},[e._v("化妆品")]),e._v(" "),o("Option",{attrs:{value:e.selector.value2}},[e._v("服装")])],1)],1),e._v(" "),o("FormItem",{attrs:{label:"商品介绍"}},[o("i-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"只接受文本信息"},model:{value:e.goodsInfomation,callback:function(t){e.goodsInfomation=t},expression:"goodsInfomation"}})],1),e._v(" "),o("FormItem",{attrs:{label:"选择商品图片"}},[o("Upload",{attrs:{type:"drag",action:"http://localhost:7001/upload",format:["jpg","jpeg","png"],"max-size":5120,"on-success":e.handleSuccess,"on-remove":e.handleRemove,"on-format-error":e.handleFormatError,"on-exceeded-size":e.handleMaxSize,"on-error":e.handleError}},[o("div",{staticStyle:{padding:"20px 0"}},[o("Icon",{staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"52"}}),e._v(" "),o("p",[e._v("Click or drag files here to upload")]),e._v(" "),o("p",[e._v("注：编辑商品时需要重新上传图片")])],1)])],1),e._v(" "),o("div",{staticStyle:{display:"flex","justify-content":"space-around"}},[o("Button",{attrs:{type:"primary",loading:e.loading},on:{click:e.toLoading}},[e.loading?o("span",[e._v("Loading...")]):o("span",[e._v("提交")])]),e._v(" "),o("Button",{on:{click:e.cancel}},[e._v("取消")])],1)],1)},r=[];n._withStripped=!0;var a={render:n,staticRenderFns:r};t.a=a},32:function(e,t,o){"use strict";function n(e){l||o(99)}Object.defineProperty(t,"__esModule",{value:!0});var r=o(96),a=o.n(r);for(var i in r)"default"!==i&&function(e){o.d(t,e,function(){return r[e]})}(i);var s=o(100),l=!1,c=o(30),u=n,d=c(a.a,s.a,!1,u,null,null);d.options.__file="src\\views\\addGoods.vue",t.default=d.exports},96:function(e,t,o){"use strict";function n(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,o){function n(r,a){try{var i=t[r](a),s=i.value}catch(e){return void o(e)}if(!i.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)});e(s)}return n("next")})}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(31),a=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={data:function(){return{goodsName:"",goodsPrice:"",selector:{value:"",value1:"化妆品",value2:"服装"},goodsInfomation:"",loading:!1,imgs:[]}},methods:{toLoading:function(){var e=this;return n(regeneratorRuntime.mark(function t(){var o,n,r,i,s,l,c,u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.loading=!0,o=e.goodsName,n=e.goodsPrice,r=e.selector.value,i=e.goodsInfomation,s=e.imgs,l={name:o,price:n,catagory:r,imgs:s,introduction:i},"/addGoods"!==e.$router.currentRoute.path){t.next=18;break}return t.next=11,a.default.ajax.post("/saveGoods",l);case 11:if(c=t.sent,200===c.status){t.next=16;break}return e.loading=!1,e.$Notice.error({title:"上传失败",desc:"请检查网络，如网络无问题请联系管理员"}),t.abrupt("return");case 16:t.next=26;break;case 18:return l._id=e.$router.currentRoute.query.id,t.next=21,a.default.ajax.post("/updateGoods",l);case 21:if(u=t.sent,200===u.status){t.next=26;break}return e.loading=!1,e.$Notice.error({title:"上传失败",desc:"请检查网络，如网络无问题请联系管理员"}),t.abrupt("return");case 26:e.loading=!1,e.$router.push("/");case 28:case"end":return t.stop()}},t,e)}))()},cancel:function(){this.$router.push("/")},getResponseOfFileList:function(e){var t=[];return e.forEach(function(e){t.push(e.response.img)}),t},handleSuccess:function(e,t,o){this.imgs=this.getResponseOfFileList(o),this.$Notice.success({title:"文件上传成功",desc:"文件"+t.name+"已上传至服务器"})},handleRemove:function(e,t){this.imgs=this.getResponseOfFileList(t)},handleFormatError:function(e){this.$Notice.warning({title:"文件格式不支持",desc:"File format of "+e.name+" is incorrect, please select jpg or png."})},handleMaxSize:function(e){this.$Notice.warning({title:"文件过大",desc:"File  "+e.name+" is too large, no more than 5M."})},handleError:function(e,t,o){this.$Notice.error({title:"文件上传失败",desc:"File upload error: "+e})}}}},99:function(e,t){}});