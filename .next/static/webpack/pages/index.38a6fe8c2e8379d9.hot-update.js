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

/***/ "./components/modules/Card/Card.js":
/*!*****************************************!*\
  !*** ./components/modules/Card/Card.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Card.module.scss */ \"./components/modules/Card/Card.module.scss\");\n/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Card_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/swiper-react.mjs\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/modules */ \"./node_modules/swiper/modules/index.mjs\");\n\n\n\n\n\n// Import Swiper styles\n\n\n\nfunction Card(param) {\n    let { item } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Card_module_scss__WEBPACK_IMPORTED_MODULE_7___default().box_card),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {\n                slidesPerView: 4,\n                navigation: true,\n                spaceBetween: 1,\n                modules: [\n                    swiper_modules__WEBPACK_IMPORTED_MODULE_6__.Navigation\n                ],\n                className: (_Card_module_scss__WEBPACK_IMPORTED_MODULE_7___default().swiper_offer),\n                children: item.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                        className: (_Card_module_scss__WEBPACK_IMPORTED_MODULE_7___default().swiper_slide),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Card_module_scss__WEBPACK_IMPORTED_MODULE_7___default().box),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: (_Card_module_scss__WEBPACK_IMPORTED_MODULE_7___default().img),\n                                    src: item.img\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Zahra\\\\Desktop\\\\kafe-rokh-next\\\\components\\\\modules\\\\Card\\\\Card.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/products/\".concat(item.id),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: (_Card_module_scss__WEBPACK_IMPORTED_MODULE_7___default().title),\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Zahra\\\\Desktop\\\\kafe-rokh-next\\\\components\\\\modules\\\\Card\\\\Card.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Zahra\\\\Desktop\\\\kafe-rokh-next\\\\components\\\\modules\\\\Card\\\\Card.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: (_Card_module_scss__WEBPACK_IMPORTED_MODULE_7___default().desc),\n                                    children: item.desc\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Zahra\\\\Desktop\\\\kafe-rokh-next\\\\components\\\\modules\\\\Card\\\\Card.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_Card_module_scss__WEBPACK_IMPORTED_MODULE_7___default().price),\n                                    children: [\n                                        \"$\",\n                                        item.price\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Zahra\\\\Desktop\\\\kafe-rokh-next\\\\components\\\\modules\\\\Card\\\\Card.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Zahra\\\\Desktop\\\\kafe-rokh-next\\\\components\\\\modules\\\\Card\\\\Card.js\",\n                            lineNumber: 31,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Zahra\\\\Desktop\\\\kafe-rokh-next\\\\components\\\\modules\\\\Card\\\\Card.js\",\n                        lineNumber: 30,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Zahra\\\\Desktop\\\\kafe-rokh-next\\\\components\\\\modules\\\\Card\\\\Card.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Zahra\\\\Desktop\\\\kafe-rokh-next\\\\components\\\\modules\\\\Card\\\\Card.js\",\n            lineNumber: 20,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21vZHVsZXMvQ2FyZC9DYXJkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDSDtBQUNjO0FBR1c7QUFFbkQsdUJBQXVCO0FBQ0g7QUFDVztBQUVhO0FBTTVDLFNBQVNNLEtBQUssS0FBUTtRQUFSLEVBQUVDLElBQUksRUFBRSxHQUFSO0lBQ1YscUJBQVE7a0JBQ0osNEVBQUNDO1lBQUlDLFdBQVdQLG1FQUFlO3NCQUMzQiw0RUFBQ0MsZ0RBQU1BO2dCQUNIUSxlQUFlO2dCQUNmQyxZQUFZO2dCQUNaQyxjQUFjO2dCQUNkQyxTQUFTO29CQUFDVCxzREFBVUE7aUJBQUM7Z0JBQ3JCSSxXQUFXUCx1RUFBbUI7MEJBRzdCSyxLQUFLUyxHQUFHLENBQUMsQ0FBQ1QscUJBQ1AsOERBQUNILHFEQUFXQTt3QkFBQ0ssV0FBV1AsdUVBQW1CO2tDQUN2Qyw0RUFBQ007NEJBQUlDLFdBQVdQLDhEQUFVOzs4Q0FDdEIsOERBQUNpQjtvQ0FBSVYsV0FBV1AsOERBQVU7b0NBQUVrQixLQUFLYixLQUFLWSxHQUFHOzs7Ozs7OENBRXpDLDhEQUFDbkIsa0RBQUlBO29DQUFDcUIsTUFBTSxhQUFxQixPQUFSZCxLQUFLZSxFQUFFOzhDQUM1Qiw0RUFBQ0M7d0NBQUdkLFdBQVdQLGdFQUFZO2tEQUFHSyxLQUFLaUIsS0FBSzs7Ozs7Ozs7Ozs7OENBRTVDLDhEQUFDQztvQ0FBRWhCLFdBQVdQLCtEQUFXOzhDQUFJSyxLQUFLbUIsSUFBSTs7Ozs7OzhDQUN0Qyw4REFBQ0M7b0NBQUtsQixXQUFXUCxnRUFBWTs7d0NBQUU7d0NBQUVLLEtBQUtxQixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVV2RTtLQTlCU3RCO0FBZ0NULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbW9kdWxlcy9DYXJkL0NhcmQuanM/ZjFhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCIuL0NhcmQubW9kdWxlLnNjc3NcIjtcblxuXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSAnc3dpcGVyL3JlYWN0JztcblxuLy8gSW1wb3J0IFN3aXBlciBzdHlsZXNcbmltcG9ydCAnc3dpcGVyL2Nzcyc7XG5pbXBvcnQgJ3N3aXBlci9jc3MvcGFnaW5hdGlvbic7XG5cbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tICdzd2lwZXIvbW9kdWxlcyc7XG5cblxuXG5cblxuZnVuY3Rpb24gQ2FyZCh7IGl0ZW0gfSkge1xuICAgIHJldHVybiAoPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlZC5ib3hfY2FyZH0+XG4gICAgICAgICAgICA8U3dpcGVyXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldz17NH1cbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uPXt0cnVlfVxuICAgICAgICAgICAgICAgIHNwYWNlQmV0d2Vlbj17MX1cbiAgICAgICAgICAgICAgICBtb2R1bGVzPXtbTmF2aWdhdGlvbl19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZWQuc3dpcGVyX29mZmVyfVxuICAgICAgICAgICAgPlxuXG4gICAgICAgICAgICAgICAge2l0ZW0ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9e3N0eWxlZC5zd2lwZXJfc2xpZGV9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZWQuYm94fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVkLmltZ30gc3JjPXtpdGVtLmltZ30gLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdHMvJHtpdGVtLmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtzdHlsZWQudGl0bGV9PntpdGVtLnRpdGxlfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVkLmRlc2N9ID57aXRlbS5kZXNjfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlZC5wcmljZX0+JHtpdGVtLnByaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxuICAgICAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICA8L1N3aXBlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsInN0eWxlZCIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiTmF2aWdhdGlvbiIsIkNhcmQiLCJpdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwiYm94X2NhcmQiLCJzbGlkZXNQZXJWaWV3IiwibmF2aWdhdGlvbiIsInNwYWNlQmV0d2VlbiIsIm1vZHVsZXMiLCJzd2lwZXJfb2ZmZXIiLCJtYXAiLCJzd2lwZXJfc2xpZGUiLCJib3giLCJpbWciLCJzcmMiLCJocmVmIiwiaWQiLCJoNCIsInRpdGxlIiwicCIsImRlc2MiLCJzcGFuIiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/modules/Card/Card.js\n"));

/***/ })

});