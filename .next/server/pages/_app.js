/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useAuth */ \"./hooks/useAuth.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__, _firebase__WEBPACK_IMPORTED_MODULE_4__]);\n([_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__, _firebase__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n // Asegúrate de que la ruta es correcta\nconst Header = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleLogout = ()=>{\n        _firebase__WEBPACK_IMPORTED_MODULE_4__.auth.signOut().then(()=>{\n            router.push(\"/login\");\n        }).catch((error)=>{\n            console.error(\"Error signing out: \", error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"p-4 flex justify-center items-center space-x-8 text-black text-xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"flex justify-center items-center space-x-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/\",\n                                children: \"Inicio\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Binchilin\\\\Desktop\\\\vista-administrador\\\\components\\\\Header.js\",\n                                lineNumber: 24,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Binchilin\\\\Desktop\\\\vista-administrador\\\\components\\\\Header.js\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/add-product\",\n                                children: \"A\\xf1adir Producto\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Binchilin\\\\Desktop\\\\vista-administrador\\\\components\\\\Header.js\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Binchilin\\\\Desktop\\\\vista-administrador\\\\components\\\\Header.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/update-stock\",\n                                children: \"Actualizar Stock\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Binchilin\\\\Desktop\\\\vista-administrador\\\\components\\\\Header.js\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Binchilin\\\\Desktop\\\\vista-administrador\\\\components\\\\Header.js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Binchilin\\\\Desktop\\\\vista-administrador\\\\components\\\\Header.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Binchilin\\\\Desktop\\\\vista-administrador\\\\components\\\\Header.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleLogout,\n                className: \"bg-red-500 text-white px-4 py-2 rounded\",\n                children: \"Cerrar Sesi\\xf3n\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Binchilin\\\\Desktop\\\\vista-administrador\\\\components\\\\Header.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Binchilin\\\\Desktop\\\\vista-administrador\\\\components\\\\Header.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ2M7QUFDSDtBQUNMLENBQUMsdUNBQXVDO0FBRTNFLE1BQU1JLFNBQVM7SUFDYixNQUFNQyxTQUFTSCxzREFBU0E7SUFFeEIsTUFBTUksZUFBZTtRQUNuQkgsMkNBQUlBLENBQUNJLE9BQU8sR0FDVEMsSUFBSSxDQUFDO1lBQ0pILE9BQU9JLElBQUksQ0FBQztRQUNkLEdBQ0NDLEtBQUssQ0FBQ0MsQ0FBQUE7WUFDTEMsUUFBUUQsS0FBSyxDQUFDLHVCQUF1QkE7UUFDdkM7SUFDSjtJQUVBLHFCQUNFLDhEQUFDRTtRQUFPQyxXQUFVOzswQkFDaEIsOERBQUNDOzBCQUNDLDRFQUFDQztvQkFBR0YsV0FBVTs7c0NBQ1osOERBQUNHO3NDQUNDLDRFQUFDakIsa0RBQUlBO2dDQUFDa0IsTUFBSzswQ0FBSTs7Ozs7Ozs7Ozs7c0NBRWpCLDhEQUFDRDtzQ0FDQyw0RUFBQ2pCLGtEQUFJQTtnQ0FBQ2tCLE1BQUs7MENBQWU7Ozs7Ozs7Ozs7O3NDQUU1Qiw4REFBQ0Q7c0NBQ0MsNEVBQUNqQixrREFBSUE7Z0NBQUNrQixNQUFLOzBDQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJakMsOERBQUNDO2dCQUFPQyxTQUFTZDtnQkFBY1EsV0FBVTswQkFBMEM7Ozs7Ozs7Ozs7OztBQUt6RjtBQUVBLGlFQUFlVixNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmlzdGEtYWRtaW5pc3RyYWRvci8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzRkYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uL2hvb2tzL3VzZUF1dGgnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tICcuLi9maXJlYmFzZSc7IC8vIEFzZWfDunJhdGUgZGUgcXVlIGxhIHJ1dGEgZXMgY29ycmVjdGFcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgYXV0aC5zaWduT3V0KClcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2lnbmluZyBvdXQ6IFwiLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInAtNCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBzcGFjZS14LTggdGV4dC1ibGFjayB0ZXh0LXhsXCI+XHJcbiAgICAgIDxuYXY+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHNwYWNlLXgtOFwiPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkluaWNpbzwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRkLXByb2R1Y3RcIj5Bw7FhZGlyIFByb2R1Y3RvPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91cGRhdGUtc3RvY2tcIj5BY3R1YWxpemFyIFN0b2NrPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L25hdj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9IGNsYXNzTmFtZT1cImJnLXJlZC01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZFwiPlxyXG4gICAgICAgIENlcnJhciBTZXNpw7NuXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VBdXRoIiwidXNlUm91dGVyIiwiYXV0aCIsIkhlYWRlciIsInJvdXRlciIsImhhbmRsZUxvZ291dCIsInNpZ25PdXQiLCJ0aGVuIiwicHVzaCIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwibmF2IiwidWwiLCJsaSIsImhyZWYiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   db: () => (/* binding */ db),\n/* harmony export */   storage: () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDPdVPTV0d4jqLXl8KOPHNl95fvgiVIB0E\",\n    authDomain: \"almohadillas-epson.firebaseapp.com\",\n    projectId: \"almohadillas-epson\",\n    storageBucket: \"almohadillas-epson.appspot.com\",\n    messagingSenderId: \"984513172518\",\n    appId: \"1:984513172518:web:ec19c33447c4a2d54082e7\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\nconst storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(app);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ0w7QUFDVTtBQUNKO0FBRTlDLE1BQU1JLGlCQUFpQjtJQUNuQkMsUUFBUTtJQUNWQyxZQUFZO0lBQ1pDLFdBQVc7SUFDWEMsZUFBZTtJQUNmQyxtQkFBbUI7SUFDbkJDLE9BQU87QUFDVDtBQUVBLE1BQU1DLE1BQU1YLDJEQUFhQSxDQUFDSTtBQUMxQixNQUFNUSxPQUFPWCxzREFBT0EsQ0FBQ1U7QUFDckIsTUFBTUUsS0FBS1gsZ0VBQVlBLENBQUNTO0FBQ3hCLE1BQU1HLFVBQVVYLDREQUFVQSxDQUFDUTtBQUVFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmlzdGEtYWRtaW5pc3RyYWRvci8uL2ZpcmViYXNlLmpzPzRkOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gJ2ZpcmViYXNlL2FwcCc7XHJcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tICdmaXJlYmFzZS9hdXRoJztcclxuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcclxuaW1wb3J0IHsgZ2V0U3RvcmFnZSB9IGZyb20gJ2ZpcmViYXNlL3N0b3JhZ2UnO1xyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5RFBkVlBUVjBkNGpxTFhsOEtPUEhObDk1ZnZnaVZJQjBFXCIsXHJcbiAgYXV0aERvbWFpbjogXCJhbG1vaGFkaWxsYXMtZXBzb24uZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgcHJvamVjdElkOiBcImFsbW9oYWRpbGxhcy1lcHNvblwiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwiYWxtb2hhZGlsbGFzLWVwc29uLmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiOTg0NTEzMTcyNTE4XCIsXHJcbiAgYXBwSWQ6IFwiMTo5ODQ1MTMxNzI1MTg6d2ViOmVjMTljMzM0NDdjNGEyZDU0MDgyZTdcIlxyXG59O1xyXG5cclxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbmNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XHJcbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XHJcbmNvbnN0IHN0b3JhZ2UgPSBnZXRTdG9yYWdlKGFwcCk7XHJcblxyXG5leHBvcnQgeyBhdXRoLCBkYiwgc3RvcmFnZSB9OyJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXV0aCIsImdldEZpcmVzdG9yZSIsImdldFN0b3JhZ2UiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImFwcCIsImF1dGgiLCJkYiIsInN0b3JhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase.js\n");

/***/ }),

/***/ "./hooks/useAuth.js":
/*!**************************!*\
  !*** ./hooks/useAuth.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProvideAuth: () => (/* binding */ ProvideAuth),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _firebase__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _firebase__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n // Asegúrate de que esta ruta sea correcta\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(_firebase__WEBPACK_IMPORTED_MODULE_3__.firebaseApp);\nconst authContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction ProvideAuth({ children }) {\n    const auth = useProvideAuth();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(authContext.Provider, {\n        value: auth,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Binchilin\\\\Desktop\\\\vista-administrador\\\\hooks\\\\useAuth.js\",\n        lineNumber: 11,\n        columnNumber: 10\n    }, this);\n}\nconst useAuth = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(authContext);\n};\nfunction useProvideAuth() {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleUser = (rawUser)=>{\n        if (rawUser) {\n            setUser(rawUser);\n            return rawUser;\n        } else {\n            setUser(false);\n            return false;\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(auth, handleUser);\n        return ()=>unsubscribe();\n    }, []);\n    const signOutUser = ()=>{\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(auth).then(()=>setUser(false));\n    };\n    return {\n        user,\n        signOut: signOutUser\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VBdXRoLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF1RTtBQUNGO0FBQzNCLENBQUMsMENBQTBDO0FBRXJGLE1BQU1RLE9BQU9KLHNEQUFPQSxDQUFDRyxrREFBV0E7QUFFaEMsTUFBTUUsNEJBQWNOLG9EQUFhQTtBQUUxQixTQUFTTyxZQUFZLEVBQUVDLFFBQVEsRUFBRTtJQUN0QyxNQUFNSCxPQUFPSTtJQUNiLHFCQUFPLDhEQUFDSCxZQUFZSSxRQUFRO1FBQUNDLE9BQU9OO2tCQUFPRzs7Ozs7O0FBQzdDO0FBRU8sTUFBTUksVUFBVTtJQUNyQixPQUFPYixpREFBVUEsQ0FBQ087QUFDcEIsRUFBRTtBQUVGLFNBQVNHO0lBQ1AsTUFBTSxDQUFDSSxNQUFNQyxRQUFRLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUVqQyxNQUFNa0IsYUFBYSxDQUFDQztRQUNsQixJQUFJQSxTQUFTO1lBQ1hGLFFBQVFFO1lBQ1IsT0FBT0E7UUFDVCxPQUFPO1lBQ0xGLFFBQVE7WUFDUixPQUFPO1FBQ1Q7SUFDRjtJQUVBaEIsZ0RBQVNBLENBQUM7UUFDUixNQUFNbUIsY0FBY2YsaUVBQWtCQSxDQUFDRyxNQUFNVTtRQUM3QyxPQUFPLElBQU1FO0lBQ2YsR0FBRyxFQUFFO0lBRUwsTUFBTUMsY0FBYztRQUNsQixPQUFPZixzREFBT0EsQ0FBQ0UsTUFBTWMsSUFBSSxDQUFDLElBQU1MLFFBQVE7SUFDMUM7SUFFQSxPQUFPO1FBQ0xEO1FBQ0FWLFNBQVNlO0lBQ1g7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3Zpc3RhLWFkbWluaXN0cmFkb3IvLi9ob29rcy91c2VBdXRoLmpzP2E0ODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZ2V0QXV0aCwgb25BdXRoU3RhdGVDaGFuZ2VkLCBzaWduT3V0IH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XHJcbmltcG9ydCB7IGZpcmViYXNlQXBwIH0gZnJvbSAnLi4vZmlyZWJhc2UnOyAvLyBBc2Vnw7pyYXRlIGRlIHF1ZSBlc3RhIHJ1dGEgc2VhIGNvcnJlY3RhXHJcblxyXG5jb25zdCBhdXRoID0gZ2V0QXV0aChmaXJlYmFzZUFwcCk7XHJcblxyXG5jb25zdCBhdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcm92aWRlQXV0aCh7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBhdXRoID0gdXNlUHJvdmlkZUF1dGgoKTtcclxuICByZXR1cm4gPGF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXthdXRofT57Y2hpbGRyZW59PC9hdXRoQ29udGV4dC5Qcm92aWRlcj47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4ge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KGF1dGhDb250ZXh0KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHVzZVByb3ZpZGVBdXRoKCkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVVc2VyID0gKHJhd1VzZXIpID0+IHtcclxuICAgIGlmIChyYXdVc2VyKSB7XHJcbiAgICAgIHNldFVzZXIocmF3VXNlcik7XHJcbiAgICAgIHJldHVybiByYXdVc2VyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VXNlcihmYWxzZSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgaGFuZGxlVXNlcik7XHJcbiAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHNpZ25PdXRVc2VyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHNpZ25PdXQoYXV0aCkudGhlbigoKSA9PiBzZXRVc2VyKGZhbHNlKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHVzZXIsXHJcbiAgICBzaWduT3V0OiBzaWduT3V0VXNlcixcclxuICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiZ2V0QXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInNpZ25PdXQiLCJmaXJlYmFzZUFwcCIsImF1dGgiLCJhdXRoQ29udGV4dCIsIlByb3ZpZGVBdXRoIiwiY2hpbGRyZW4iLCJ1c2VQcm92aWRlQXV0aCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBdXRoIiwidXNlciIsInNldFVzZXIiLCJoYW5kbGVVc2VyIiwicmF3VXNlciIsInVuc3Vic2NyaWJlIiwic2lnbk91dFVzZXIiLCJ0aGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useAuth.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header__WEBPACK_IMPORTED_MODULE_2__]);\n_components_Header__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const noHeaderRoutes = [\n        \"/login\"\n    ]; // Añade aquí todas las rutas donde no quieres mostrar el header\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            !noHeaderRoutes.includes(router.pathname) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Binchilin\\\\Desktop\\\\vista-administrador\\\\pages\\\\_app.js\",\n                lineNumber: 11,\n                columnNumber: 53\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Binchilin\\\\Desktop\\\\vista-administrador\\\\pages\\\\_app.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Binchilin\\\\Desktop\\\\vista-administrador\\\\pages\\\\_app.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNFO0FBQ1g7QUFFL0IsU0FBU0UsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxNQUFNQyxTQUFTTCxzREFBU0E7SUFDeEIsTUFBTU0saUJBQWlCO1FBQUM7S0FBUyxFQUFFLGdFQUFnRTtJQUVuRyxxQkFDRSw4REFBQ0M7O1lBQ0UsQ0FBQ0QsZUFBZUUsUUFBUSxDQUFDSCxPQUFPSSxRQUFRLG1CQUFLLDhEQUFDUiwwREFBTUE7Ozs7OzBCQUNyRCw4REFBQ0U7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7O0FBRzlCO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aXN0YS1hZG1pbmlzdHJhZG9yLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IG5vSGVhZGVyUm91dGVzID0gWycvbG9naW4nXTsgLy8gQcOxYWRlIGFxdcOtIHRvZGFzIGxhcyBydXRhcyBkb25kZSBubyBxdWllcmVzIG1vc3RyYXIgZWwgaGVhZGVyXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgeyFub0hlYWRlclJvdXRlcy5pbmNsdWRlcyhyb3V0ZXIucGF0aG5hbWUpICYmIDxIZWFkZXIgLz59XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkhlYWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwibm9IZWFkZXJSb3V0ZXMiLCJkaXYiLCJpbmNsdWRlcyIsInBhdGhuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/storage");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();