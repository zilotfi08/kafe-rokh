"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/templates/Index/OfferProduct.js":
/*!****************************************************!*\
  !*** ./components/templates/Index/OfferProduct.js ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_modules_ServiceItem_ServiceItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/modules/ServiceItem/ServiceItem */ \"./components/modules/ServiceItem/ServiceItem.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _OfferProduct_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OfferProduct.module.scss */ \"./components/templates/Index/OfferProduct.module.scss\");\n/* harmony import */ var _OfferProduct_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_OfferProduct_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction OfferProduct(param) {\n    let { item } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_OfferProduct_module_scss__WEBPACK_IMPORTED_MODULE_3___default().box_offer),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                item: item\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Zahra\\\\Desktop\\\\kafe-rokh-next\\\\components\\\\templates\\\\Index\\\\OfferProduct.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Zahra\\\\Desktop\\\\kafe-rokh-next\\\\components\\\\templates\\\\Index\\\\OfferProduct.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Zahra\\\\Desktop\\\\kafe-rokh-next\\\\components\\\\templates\\\\Index\\\\OfferProduct.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = OfferProduct;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OfferProduct);\nvar _c;\n$RefreshReg$(_c, \"OfferProduct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RlbXBsYXRlcy9JbmRleC9PZmZlclByb2R1Y3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXVFO0FBQzdDO0FBQ3FCO0FBRy9DLFNBQVNHLGFBQWEsS0FBUTtRQUFSLEVBQUVDLElBQUksRUFBRSxHQUFSO0lBQ3BCLHFCQUNFLDhEQUFDQztrQkFDQyw0RUFBQ0E7WUFBSUMsV0FBV0osNEVBQWdCO3NCQUU5Qiw0RUFBQ007Z0JBQ0NKLE1BQU1BOzs7Ozs7Ozs7Ozs7Ozs7O0FBTWhCO0tBWlNEO0FBY1QsK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvSW5kZXgvT2ZmZXJQcm9kdWN0LmpzPzdiZTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlcnZpY2VJdGVtIGZyb20gXCJAL2NvbXBvbmVudHMvbW9kdWxlcy9TZXJ2aWNlSXRlbS9TZXJ2aWNlSXRlbVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiLi9PZmZlclByb2R1Y3QubW9kdWxlLnNjc3NcIlxuXG5cbmZ1bmN0aW9uIE9mZmVyUHJvZHVjdCh7IGl0ZW0gfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVkLmJveF9vZmZlcn0+XG5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAvPlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgT2ZmZXJQcm9kdWN0O1xuIl0sIm5hbWVzIjpbIlNlcnZpY2VJdGVtIiwiUmVhY3QiLCJzdHlsZWQiLCJPZmZlclByb2R1Y3QiLCJpdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwiYm94X29mZmVyIiwiQ2FyZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/templates/Index/OfferProduct.js\n"));

/***/ })

});