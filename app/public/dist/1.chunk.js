webpackJsonp([1],{

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_index_vue__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_436ef8ce_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_index_vue__ = __webpack_require__(98);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(97)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_436ef8ce_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\views\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-436ef8ce", Component.options)
  } else {
    hotAPI.reload("data-v-436ef8ce", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 95:
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
            allData: [],
            dataToDelete: {},
            deleteConfirm: false,
            deleteLoading: false
        };
    },

    methods: {
        addGoods: function addGoods() {
            this.$router.push('/addGoods');
        },
        handleDelete: function handleDelete(item) {
            this.deleteConfirm = true;
            this.dataToDelete.id = item._id;
        },
        del: async function del() {
            this.deleteLoading = true;
            var res = await _util2.default.ajax.post('/deleteGoods', this.dataToDelete);
            console.log(res);
            if (res.status === 200) {
                this.deleteLoading = false;
                this.deleteConfirm = false;
                var allData = await _util2.default.ajax.get('/getAllGoods');
                this.allData = allData.data;
            }
        },
        handleEdit: function handleEdit(item) {
            this.$router.push('/editGoods?id=' + item._id);
        }
    },
    mounted: async function mounted() {
        var allData = await _util2.default.ajax.get('/getAllGoods');
        this.allData = allData.data;
        console.log(this.allData);
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

/***/ }),

/***/ 97:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "index", staticStyle: { padding: "10px 50px" } },
    [
      _c(
        "Modal",
        {
          attrs: { width: "300px" },
          model: {
            value: _vm.deleteConfirm,
            callback: function($$v) {
              _vm.deleteConfirm = $$v
            },
            expression: "deleteConfirm"
          }
        },
        [
          _c(
            "p",
            {
              staticStyle: { color: "#f60", "text-align": "center" },
              attrs: { slot: "header" },
              slot: "header"
            },
            [
              _c("Icon", { attrs: { type: "information-circled" } }),
              _vm._v(" "),
              _c("span", [_vm._v("删除确认")])
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticStyle: { "text-align": "center" } }, [
            _c("p", [_vm._v("删除后不可恢复")]),
            _vm._v(" "),
            _c("p", [_vm._v("确定要删除吗")])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { attrs: { slot: "footer" }, slot: "footer" },
            [
              _c(
                "Button",
                {
                  attrs: {
                    type: "error",
                    size: "large",
                    long: "",
                    loading: _vm.deleteLoading
                  },
                  on: { click: _vm.del }
                },
                [_vm._v("确认删除")]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _vm._l(_vm.allData, function(item) {
        return _c("Card", { key: item._id, attrs: { bordered: true } }, [
          _c(
            "div",
            {
              staticClass: "goodsTitle",
              attrs: { slot: "title" },
              slot: "title"
            },
            [
              _c("p", [_vm._v(_vm._s(item.name))]),
              _vm._v(" "),
              _c(
                "Button",
                {
                  attrs: { type: "info", icon: "compose", shape: "circle" },
                  nativeOn: {
                    click: function($event) {
                      _vm.handleEdit(item)
                    }
                  }
                },
                [_vm._v("编辑")]
              ),
              _vm._v(" "),
              _c(
                "Button",
                {
                  attrs: {
                    type: "error",
                    icon: "close-round",
                    shape: "circle"
                  },
                  nativeOn: {
                    click: function($event) {
                      _vm.handleDelete(item)
                    }
                  }
                },
                [_vm._v("删除")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("p", [_vm._v("价格: " + _vm._s(item.price))]),
          _vm._v(" "),
          _c("p", [_vm._v("类别: " + _vm._s(item.catagory))]),
          _vm._v(" "),
          _c("p", [_vm._v("商品介绍: " + _vm._s(item.introduction))]),
          _vm._v(" "),
          _c(
            "p",
            _vm._l(item.imgs, function(img) {
              return _c("img", {
                key: img,
                staticStyle: { width: "80px", height: "80px" },
                attrs: { src: img, alt: "picture" }
              })
            })
          )
        ])
      }),
      _vm._v(" "),
      _c(
        "Button",
        {
          staticStyle: { margin: "15px 40%", padding: "10px 50px" },
          attrs: { type: "info" },
          nativeOn: {
            click: function($event) {
              _vm.addGoods($event)
            }
          }
        },
        [_vm._v("添加商品")]
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-436ef8ce", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=1.chunk.js.map