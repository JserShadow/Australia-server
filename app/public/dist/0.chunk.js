webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Form",
    {
      staticStyle: { padding: "15px 20%" },
      attrs: { "label-position": "left", "label-width": 100 }
    },
    [
      _c(
        "FormItem",
        { attrs: { label: "商品名称" } },
        [
          _c("i-input", {
            staticStyle: { width: "30%" },
            attrs: { placeholder: "请输入商品名称" },
            model: {
              value: _vm.goodsName,
              callback: function($$v) {
                _vm.goodsName = $$v
              },
              expression: "goodsName"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "FormItem",
        { attrs: { label: "商品价格" } },
        [
          _c(
            "i-input",
            {
              staticStyle: { width: "160px" },
              attrs: { placeholder: "接受到小数点后两位" },
              model: {
                value: _vm.goodsPrice,
                callback: function($$v) {
                  _vm.goodsPrice = $$v
                },
                expression: "goodsPrice"
              }
            },
            [
              _c("span", { attrs: { slot: "prepend" }, slot: "prepend" }, [
                _vm._v("￥")
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "FormItem",
        { attrs: { label: "选择商品类别" } },
        [
          _c(
            "Select",
            {
              model: {
                value: _vm.selector.value,
                callback: function($$v) {
                  _vm.$set(_vm.selector, "value", $$v)
                },
                expression: "selector.value"
              }
            },
            [
              _c("Option", { attrs: { value: _vm.selector.value1 } }, [
                _vm._v("化妆品")
              ]),
              _vm._v(" "),
              _c("Option", { attrs: { value: _vm.selector.value2 } }, [
                _vm._v("服装")
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "FormItem",
        { attrs: { label: "商品介绍" } },
        [
          _c("i-input", {
            attrs: {
              type: "textarea",
              autosize: { minRows: 2, maxRows: 5 },
              placeholder: "只接受文本信息"
            },
            model: {
              value: _vm.goodsInfomation,
              callback: function($$v) {
                _vm.goodsInfomation = $$v
              },
              expression: "goodsInfomation"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "FormItem",
        { attrs: { label: "选择商品图片" } },
        [
          _c(
            "Upload",
            {
              attrs: {
                type: "drag",
                action: "http://localhost:7001/upload",
                format: ["jpg", "jpeg", "png"],
                "max-size": 5120,
                "on-success": _vm.handleSuccess,
                "on-remove": _vm.handleRemove,
                "on-format-error": _vm.handleFormatError,
                "on-exceeded-size": _vm.handleMaxSize,
                "on-error": _vm.handleError
              }
            },
            [
              _c(
                "div",
                { staticStyle: { padding: "20px 0" } },
                [
                  _c("Icon", {
                    staticStyle: { color: "#3399ff" },
                    attrs: { type: "ios-cloud-upload", size: "52" }
                  }),
                  _vm._v(" "),
                  _c("p", [_vm._v("Click or drag files here to upload")]),
                  _vm._v(" "),
                  _c("p", [_vm._v("注：编辑商品时需要重新上传图片")])
                ],
                1
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticStyle: { display: "flex", "justify-content": "space-around" } },
        [
          _c(
            "Button",
            {
              attrs: { type: "primary", loading: _vm.loading },
              on: { click: _vm.toLoading }
            },
            [
              !_vm.loading
                ? _c("span", [_vm._v("提交")])
                : _c("span", [_vm._v("Loading...")])
            ]
          ),
          _vm._v(" "),
          _c("Button", { on: { click: _vm.cancel } }, [_vm._v("取消")])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-edeb4b2e", esExports)
  }
}

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_addGoods_vue__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_addGoods_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_addGoods_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_addGoods_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_addGoods_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_edeb4b2e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_addGoods_vue__ = __webpack_require__(100);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(99)
}
var normalizeComponent = __webpack_require__(30)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_addGoods_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_edeb4b2e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_addGoods_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\views\\addGoods.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-edeb4b2e", Component.options)
  } else {
    hotAPI.reload("data-v-edeb4b2e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(31);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      goodsName: '',
      goodsPrice: '',
      selector: {
        value: '',
        value1: '化妆品',
        value2: '服装'
      },
      goodsInfomation: '',
      loading: false,
      imgs: []
    };
  },

  methods: {
    toLoading: async function toLoading() {
      this.loading = true;
      var goodsName = this.goodsName;
      var goodsPrice = this.goodsPrice;
      var catagory = this.selector.value;
      var goodsInfomation = this.goodsInfomation;
      var goodsImgs = this.imgs;
      var objToTrans = {
        name: goodsName,
        price: goodsPrice,
        catagory: catagory,
        imgs: goodsImgs,
        introduction: goodsInfomation
      };
      console.log(objToTrans);
      if (this.$router.currentRoute.path === '/addGoods') {
        var response = await _util2.default.ajax.post('/saveGoods', objToTrans);
        if (response.status !== 200) {
          this.loading = false;
          this.$Notice.error({
            title: '上传失败',
            desc: '请检查网络，如网络无问题请联系管理员'
          });
          return;
        }
      } else {
        objToTrans._id = this.$router.currentRoute.query.id;
        var _response = await _util2.default.ajax.post('/updateGoods', objToTrans);
        if (_response.status !== 200) {
          this.loading = false;
          this.$Notice.error({
            title: '上传失败',
            desc: '请检查网络，如网络无问题请联系管理员'
          });
          return;
        }
      }
      this.loading = false;
      this.$router.push('/');
    },
    cancel: function cancel() {
      this.$router.push('/');
    },
    getResponseOfFileList: function getResponseOfFileList(fileList) {
      var imgArr = [];
      fileList.forEach(function (val) {
        imgArr.push(val.response.img);
      });
      return imgArr;
    },
    handleSuccess: function handleSuccess(response, file, fileList) {
      this.imgs = this.getResponseOfFileList(fileList);
      this.$Notice.success({
        title: '文件上传成功',
        desc: '文件' + file.name + '已上传至服务器'
      });
    },
    handleRemove: function handleRemove(file, fileList) {
      this.imgs = this.getResponseOfFileList(fileList);
    },
    handleFormatError: function handleFormatError(file) {
      this.$Notice.warning({
        title: '文件格式不支持',
        desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
      });
    },
    handleMaxSize: function handleMaxSize(file) {
      this.$Notice.warning({
        title: '文件过大',
        desc: 'File  ' + file.name + ' is too large, no more than 5M.'
      });
    },
    handleError: function handleError(error, file, fileList) {
      this.$Notice.error({
        title: '文件上传失败',
        desc: 'File upload error: ' + error
      });
    }
  },
  mounted: async function mounted() {
    var mongoID = this.$router.currentRoute.query.id;
    if (mongoID) {
      var res = await _util2.default.ajax.post('/findGoodsById', { id: mongoID });
      this.goodsName = res.data.name;
      this.goodsPrice = res.data.price;
      this.goodsInfomation = res.data.introduction;
      this.selector.value = res.data.catagory;
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=0.chunk.js.map