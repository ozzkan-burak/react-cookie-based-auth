"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/TopNav.jsx":
/*!*******************************!*\
  !*** ./components/TopNav.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst { Item  } = antd__WEBPACK_IMPORTED_MODULE_3__.Menu;\nconst TopNav = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: \"App\"\n                }, void 0, false, {\n                    fileName: \"/home/burak/Masa\\xfcst\\xfc/react/react-cookie-based-auth/components/TopNav.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/burak/Masa\\xfcst\\xfc/react/react-cookie-based-auth/components/TopNav.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/burak/Masa\\xfcst\\xfc/react/react-cookie-based-auth/components/TopNav.jsx\",\n            lineNumber: 11,\n            columnNumber: 6\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/burak/Masa\\xfcst\\xfc/react/react-cookie-based-auth/components/TopNav.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_c = TopNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopNav);\nvar _c;\n$RefreshReg$(_c, \"TopNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvcE5hdi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBCO0FBRUU7QUFDQTtBQUU1QixNQUFNLEVBQUVHLEtBQUksRUFBRSxHQUFHRixzQ0FBSUE7QUFFckIsTUFBTUcsU0FBUztJQUNiLHFCQUNFLDhEQUFDSCxzQ0FBSUE7a0JBQ0osNEVBQUNFO3NCQUNBLDRFQUFDRCxrREFBSUE7Z0JBQUNHLE1BQUs7MEJBQ1QsNEVBQUNDOzhCQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLWDtLQVZNRjtBQVlOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9wTmF2LmpzeD85MjM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IE1lbnUgfSBmcm9tICdhbnRkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgeyBJdGVtIH0gPSBNZW51O1xuXG5jb25zdCBUb3BOYXYgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPE1lbnU+XG4gICAgIDxJdGVtPlxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgPGE+QXBwPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICA8L0l0ZW0+XG4gICAgPC9NZW51PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvcE5hdjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk1lbnUiLCJMaW5rIiwiSXRlbSIsIlRvcE5hdiIsImhyZWYiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TopNav.jsx\n"));

/***/ })

});