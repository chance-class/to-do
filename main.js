/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.content {\n  position: relative;\n  display: grid;\n  box-sizing: border-box;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: 80px 1fr;\n  width: 1200px;\n  height: 700px;\n  background: rgb(217, 248, 238);\n}\n\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 95vh;\n}\n\n.header {\n  grid-column: 1 / 3;\n  padding-left: 50px;\n  align-self: center;\n}\n\nh2 {\n  margin: 0 0 10px 0;\n}\n\np {\n  margin: 10px 0;\n}\n\n.proj-btns {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n\n.added-projs {\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n}\n\n.pop-up-td, \n.pop-up-proj, \n.pop-up-note {\n  display: none;\n  width: 600px;\n  height: 300px;\n  background: teal;\n  padding: 10px;\n}\n\n.pop-up-select {\n  display: none;\n  width: 400px;\n  justify-content: center;\n  background: teal;\n  padding: 10px;\n}\n\n.pop-up-details {\n  display: none;\n  flex-direction: column;\n  flex: 1 1 auto;\n  gap: 10px;\n  width: 500px;\n  height: auto;\n  min-height: 100px;\n  background: teal;\n  padding: 10px;\n}\n \nform {\n  display: flex;\n  flex-direction: column;\n}\n\n.footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: end;\n}\n\n.bottom {\n  margin-top: 100px;\n}\n\n.top {\n  display: grid;\n  gap: 10px;\n  margin-top: 40px;\n}\n\n.top > button {\n  width: 100px;\n  height: 40px;\n  text-align: left;\n}\n\n.bottom > button {\n  width: 50px;\n  height: 50px;\n  border-radius: 25px;\n  font-size: 30px;\n}\n\n.li-details, \n.proj-det {\n  width: 100px;\n  height: 30px;\n}\n\n.li-details, \n.low, \n.medium, \n.high {\n  text-transform: uppercase;\n}\n\ntextarea {\n  height: 100px;\n}\n\n.l-col {\n  padding-left: 50px;\n  background: red;\n}\n\n.search {\n  padding: 0 40px;\n  margin: 40px 0;\n  height: 540px;\n  overflow: auto;\n}\n\nli {\n  list-style-type: none;\n  background-color: rgb(238, 235, 235);\n  margin-bottom: 10px;\n  padding-left: 10px;\n}\n\n.td-li {\n  display: flex;\n  gap: 20px;\n  padding: 10px 10px 10px 0;\n  align-items: center;\n}\n\n.proj-btn {\n  width: 80px;\n  height: 35px;\n  text-align: left;\n}\n\n.added-projs {\n  padding-left: 15px;\n}\n\n.li-details {\n  margin-left: auto;\n}\n\n.pop-up-td, \n.pop-up-proj, \n.pop-up-note {\n    z-index: 9;\n    position: absolute;\n    left: 42%;\n    margin: 200px auto 20px -200px;\n    text-align: left;\n}\n\n.pop-up-select {\n    z-index: 9;\n    position: absolute;\n    left: 50%;\n    margin: 200px auto 20px -200px;\n    text-align: center;\n}\n\n.pop-up-details {\n    z-index: 9;\n    position: absolute;\n    left: 45%;\n    margin: 200px auto 20px -200px;\n    text-align: left;\n}\n\n.pop-up-added-note {\n    z-index: 9;\n    position: absolute;\n    left: 60%;\n    margin: 130px auto 20px -200px;\n    font-size: 26px;\n    border: 1px solid black;\n    min-height: 400px;\n}\n\n.low {\n  background: rgb(166, 248, 166);\n  border: none;\n}\n\n.selected.low {\n  border: 3px solid green;\n}\n\n.medium {\n  background: rgb(248, 248, 173);\n  border: none;\n}\n\n.medium.selected {\n  border: 3px solid yellow;\n}\n\n.high {\n  background: rgb(243, 162, 162);\n  border: none;\n}\n\n.high.selected {\n  border: 3px solid red;\n}\n\n.add-td {\n  height: 40px;\n  width: 100px;\n}\n\n.added-note {\n  box-sizing: border-box;\n  width: 247px;\n  height: 247px;\n  overflow: hidden;\n  white-space: pre-wrap;\n  background: lavender;\n  padding: 0 10px;\n  /* display: inline-block;\n  margin: 0 1em 1em;\n  width: 95%; */\n}\n\n.notes-div {\n    position: relative;\n    box-sizing: border-box;\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding: 0 20px;\n  row-gap: 30px;\n  column-gap: 40px;\n  min-height: 540px;\n  background: rgb(230, 230, 174);\n  /* column-count: 3;\n  max-width: 920px;\n  padding-right: 20px; */\n}\n\n.home-div {\n  overflow: auto;\n}\n\n.note-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n#close-details {\n  height: 35px;\n  width: 100px;\n  justify-self: end;\n  align-self: center;\n}\n\n#pop-title {\n  font-weight: bold;\n  font-size: 26px;\n}\n\n.nav-btn {\n  background: transparent;\n  border: none;\n  font-size: 24px;\n}\n\n.nav-btn:hover, \n.add-btn:hover {\n  font-weight: bold;\n}\n\n.active {\n  font-weight: bold;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_create_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/create.js */ \"./src/modules/create.js\");\n\n\n\n(0,_modules_create_js__WEBPACK_IMPORTED_MODULE_1__.createTD)(\"Call Mom\", \"Give Mom a call back soon\", \"2023-07-29\", \"Low\");\n(0,_modules_create_js__WEBPACK_IMPORTED_MODULE_1__.createTD)(\"Go to HEB\", \"Need to buy dog food\", \"2023-07-30\", \"Medium\");\n\nconst add = document.querySelector(\".add-btn\");\nconst popupSelect = document.querySelector(\".pop-up-select\");\nconst popupTD = document.querySelector(\".pop-up-td\");\nconst popupProj = document.querySelector(\".pop-up-proj\");\nconst popupNote = document.querySelector(\".pop-up-note\");\nconst popupDetails = document.querySelector(\".pop-up-details\");\nconst home = document.querySelector(\".home\");\nhome.classList.add(\"active\");\nconst notes = document.querySelector(\".notes\");\nconst low = document.querySelector(\".low\");\nconst medium = document.querySelector(\".medium\");\nconst high = document.querySelector(\".high\");\n\ndocument.addEventListener(\"click\", (e) => {\n  if (!(add.contains(e.target)) && !(popupSelect.contains(e.target)) && !(popupTD.contains(e.target)) && !(popupProj.contains(e.target)) && !(popupNote.contains(e.target))) {\n    popupSelect.style.display = \"none\";\n    popupTD.style.display = \"none\";\n    popupProj.style.display = \"none\";\n    popupNote.style.display = \"none\";\n  }\n})\n\nadd.addEventListener(\"click\", () => {\n  popupSelect.style.display = \"grid\";\n  popupProj.style.display = \"none\";\n  popupNote.style.display = \"none\";\n  popupTD.style.display = \"none\";\n  popupDetails.style.display = \"none\";\n})\nconst newTD = document.querySelector(\".new-td\");\nnewTD.addEventListener(\"click\", () => {\n  popupTD.style.display = \"grid\";\n  popupSelect.style.display = \"none\";\n  popupProj.style.display = \"none\";\n  popupNote.style.display = \"none\";\n  popupDetails.style.display = \"none\";\n})\nconst newProj = document.querySelector(\".new-proj\");\nnewProj.addEventListener(\"click\", () => {\n  popupProj.style.display = \"grid\";\n  popupSelect.style.display = \"none\";\n  popupNote.style.display = \"none\";\n  popupTD.style.display = \"none\";\n  popupDetails.style.display = \"none\";\n})\nconst newNote = document.querySelector(\".new-note\");\nnewNote.addEventListener(\"click\", () => {\n  popupNote.style.display = \"grid\";\n  popupSelect.style.display = \"none\";\n  popupTD.style.display = \"none\";\n  popupProj.style.display = \"none\";\n  popupDetails.style.display = \"none\";\n})\n\nconst tdForm = document.querySelector(\"#addTD\");\ntdForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  const title = document.getElementById(\"title-td\").value;\n  const details = document.getElementById(\"details-td\").value;\n  const duedate = document.getElementById(\"duedate\").value;\n  const selected = document.querySelector(\".selected\");\n  const priority = selected.textContent;\n  (0,_modules_create_js__WEBPACK_IMPORTED_MODULE_1__.createTD)(title, details, duedate, priority);\n  popupTD.style.display = \"none\";\n  let allInputs = document.querySelectorAll('.input');\n  allInputs.forEach(singleInput => singleInput.value = '');\n})\n\nconst closeBtn = document.getElementById(\"close-details\");\ncloseBtn.addEventListener(\"click\", () => popupDetails.style.display = \"none\")\n\nconst projForm = document.querySelector(\"#addProj\");\nprojForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  const title = document.getElementById(\"title-proj\").value;\n  const details = document.getElementById(\"details-proj\").value;\n  (0,_modules_create_js__WEBPACK_IMPORTED_MODULE_1__.createProj)(title, details);\n  popupProj.style.display = \"none\";\n  let allInputs = document.querySelectorAll('.input');\n  allInputs.forEach(singleInput => singleInput.value = '');\n})\n\nconst noteForm = document.querySelector(\"#addNote\");\nnoteForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  const title = document.getElementById(\"title-note\").value;\n  const details = document.getElementById(\"details-note\").value;\n  (0,_modules_create_js__WEBPACK_IMPORTED_MODULE_1__.createNote)(title, details);\n  popupNote.style.display = \"none\";\n  let allInputs = document.querySelectorAll('.input');\n  allInputs.forEach(singleInput => singleInput.value = '');\n})\n\nhome.addEventListener(\"click\", () => {\n  const search = document.querySelector(\".search\");\n  const children = search.children;\n  for (let i=0; i < children.length; i++) {\n    let child = children[i];\n    if (!(child.style.display === \"none\")) child.style.display = \"none\";\n  }\n  const homeDiv = document.querySelector(\".home-div\");\n  homeDiv.style.display = \"block\";\n  const navBtns = document.querySelectorAll(\".nav-btn\");\n      for (const btn of navBtns) btn.classList.remove(\"active\");\n      home.classList.add(\"active\");\n})\n\nnotes.addEventListener(\"click\", () => {\n    const search = document.querySelector(\".search\");\n    const children = search.children;\n    for (let i=0; i < children.length; i++) {\n      let child = children[i];\n      if (!(child.style.display === \"none\")) child.style.display = \"none\";\n    }\n  const notesDiv = document.querySelector(\".notes-div\");\n  notesDiv.style.display = \"flex\";\n  const navBtns = document.querySelectorAll(\".nav-btn\");\n      for (const btn of navBtns) btn.classList.remove(\"active\");\n      notes.classList.add(\"active\");\n})\n\nlow.addEventListener(\"click\", () => {\n  low.classList.add(\"selected\");\n  medium.classList.remove(\"selected\");\n  high.classList.remove(\"selected\");\n})\n\nmedium.addEventListener(\"click\", () => {\n    medium.classList.add(\"selected\");\n    low.classList.remove(\"selected\");\n    high.classList.remove(\"selected\");\n  })\n\n  high.addEventListener(\"click\", () => {\n    high.classList.add(\"selected\");\n    medium.classList.remove(\"selected\");\n    low.classList.remove(\"selected\");\n  })\n\n\n//# sourceURL=webpack://to-do/./src/index.js?");

/***/ }),

/***/ "./src/modules/create.js":
/*!*******************************!*\
  !*** ./src/modules/create.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNote: () => (/* binding */ createNote),\n/* harmony export */   createProj: () => (/* binding */ createProj),\n/* harmony export */   createTD: () => (/* binding */ createTD)\n/* harmony export */ });\n/* harmony import */ var _images_trash_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/trash.svg */ \"./src/images/trash.svg\");\n\n\n\nconst createTD = (name, details, duedate, priority) => {\n  const li = document.createElement(\"li\");\n  const td = document.createElement(\"div\");\n  td.classList.add(\"td-li\");\n  li.appendChild(td);\n  const tdName = document.createElement(\"p\");\n  tdName.textContent = name;\n  td.appendChild(tdName);\n  const det = document.createElement(\"button\");\n  det.textContent = \"Details\";\n  det.classList.add(\"li-details\");\n  det.addEventListener(\"click\", () => {\n    const popup = document.querySelector(\".pop-up-details\");\n    const title = document.getElementById(\"pop-title\");\n    title.style.display = \"block\";\n    title.textContent = `${name}`;\n    const due = document.getElementById(\"pop-due\");\n    due.style.display = \"block\";\n    due.textContent = `Due date: ${duedate}`;\n    const info = document.getElementById(\"pop-details\");\n    info.textContent = `Details: ${details}`;\n    const tdPriority = document.getElementById(\"priority\");\n    tdPriority.style.display = \"block\";\n    tdPriority.textContent = `Priority: ${priority}`;\n    popup.style.display = \"flex\";\n    const popupTD = document.querySelector(\".pop-up-td\");\n    popupTD.style.display = \"none\";\n    const popupProj = document.querySelector(\".pop-up-proj\");\n    popupProj.style.display = \"none\";\n    const popupNote = document.querySelector(\".pop-up-note\");\n    popupNote.style.display = \"none\";\n    const popupSelect = document.querySelector(\".pop-up-select\");\n    popupSelect.style.display = \"none\";\n  })\n  td.appendChild(det);\n  const tdDue = document.createElement(\"p\");\n  tdDue.textContent = duedate;\n  td.appendChild(tdDue);\n  const tdTrash = document.createElement(\"img\");\n  tdTrash.src = _images_trash_svg__WEBPACK_IMPORTED_MODULE_0__;\n  tdTrash.setAttribute(\"height\", \"20px\");\n  tdTrash.addEventListener(\"click\", () => {\n    li.remove();\n    const homeLIs = document.querySelectorAll(\".li-home\");\n        for (const chosen of homeLIs) {\n          chosen.classList.add(\"current\");\n          const homePs = document.querySelectorAll(\".current p\");\n          for (const item of homePs) {\n            if (item.textContent === name) chosen.remove();\n          }\n          chosen.classList.remove(\"current\");\n        }\n  })\n  td.appendChild(tdTrash);\n  const search = document.querySelector(\".search\");\n  const children = search.children;\n  for (let i=0; i < children.length; i++) {\n    let child = children[i];\n    if (!(child.style.display === \"none\")) {\n      if (child.classList.contains(\"notes-div\")) {\n        continue;\n      } else {\n        child.appendChild(li);\n      }\n    }\n  }\n  const homeDiv = document.querySelector(\".home-div\");\n  if (homeDiv.style.display === \"none\") {\n    const homeDiv = document.querySelector(\".home-div\");\n    const liHome = li.cloneNode(true);\n    liHome.classList.add(\"li-home\")\n    homeDiv.appendChild(liHome);\n    const detBtns = document.querySelectorAll(\".li-home button\");\n    console.log(detBtns);\n    const thisBtn = detBtns[detBtns.length - 1];\n    thisBtn.classList.add(\"chosen\");\n    thisBtn.addEventListener(\"click\", () => {\n      const popup = document.querySelector(\".pop-up-details\");\n      const title = document.getElementById(\"pop-title\");\n      title.style.display = \"block\";\n      title.textContent = `${name}`;\n      const due = document.getElementById(\"pop-due\");\n      due.style.display = \"block\";\n      due.textContent = `Due date: ${duedate}`;\n      const info = document.getElementById(\"pop-details\");\n      info.textContent = `Details: ${details}`;\n      const selected = document.querySelector(\".selected\");\n      const tdPriority = document.getElementById(\"priority\");\n      tdPriority.textContent = `Priority: ${priority}`;\n      tdPriority.style.display = \"block\";\n      popup.style.display = \"flex\";\n      const popupTD = document.querySelector(\".pop-up-td\");\n      popupTD.style.display = \"none\";\n      const popupProj = document.querySelector(\".pop-up-proj\");\n      popupProj.style.display = \"none\";\n      const popupNote = document.querySelector(\".pop-up-note\");\n      popupNote.style.display = \"none\";\n      const popupSelect = document.querySelector(\".pop-up-select\");\n      popupSelect.style.display = \"none\";\n    })\n    const images = document.querySelectorAll(\".li-home img\");\n    const thisImg = images[images.length - 1];\n    thisImg.addEventListener(\"click\", () => {\n      const homePs = document.querySelectorAll(\".li-home p\");\n      const thisP = homePs[homePs.length - 2];\n      console.log(thisP);\n      const allItems = document.querySelectorAll(\"li\");\n        for (const item of allItems) {\n          item.classList.add(\"temp\");\n          const tempP = document.querySelector(\".temp p\");\n          if (tempP.textContent === thisP.textContent) item.remove();\n          item.classList.remove(\"temp\");\n        }\n      liHome.remove();\n    })\n  }\n}\n\nconst createProj = (title, details) => {\n  const addedProjs = document.querySelector(\".added-projs\");\n  const newProj = document.createElement(\"button\");\n  newProj.textContent = `${title}`;\n  newProj.classList.add(\"proj-btn\");\n  newProj.classList.add(\"nav-btn\");\n  addedProjs.appendChild(newProj);\n  const search = document.querySelector(\".search\");\n  const children = search.children;\n  for (let i=0; i < children.length; i++) {\n    let child = children[i];\n    if (!(child.style.display === \"none\")) child.style.display = \"none\";\n  }\n  const newDiv = document.createElement(\"div\");\n  const newName = new String(title);\n  const className = newName.replace(/\\s+/g, '-').toLowerCase();\n  newDiv.classList.add(`${className}-div`);\n  search.appendChild(newDiv);\n  const det = document.createElement(\"button\");\n  det.textContent = \"Details\";\n  det.classList.add(\"proj-det\");\n  det.addEventListener(\"click\", () => {\n    const popup = document.querySelector(\".pop-up-details\");\n    const info = document.getElementById(\"pop-details\");\n    info.textContent = `${details}`;\n    const projTitle = document.getElementById(\"pop-title\");\n    const duedate = document.getElementById(\"pop-due\");\n    const priority = document.getElementById(\"priority\");\n    priority.textContent = \"\";\n    priority.style.display = \"none\";\n    projTitle.textContent = `${title}`;\n   // projTitle.style.display = \"none\";\n    duedate.textContent = \"\";\n    duedate.style.display = \"none\";\n    popup.style.display = \"flex\";\n    const popupTD = document.querySelector(\".pop-up-td\");\n    popupTD.style.display = \"none\";\n    const popupProj = document.querySelector(\".pop-up-proj\");\n    popupProj.style.display = \"none\";\n    const popupNote = document.querySelector(\".pop-up-note\");\n    popupNote.style.display = \"none\";\n    const popupSelect = document.querySelector(\".pop-up-select\");\n    popupSelect.style.display = \"none\";\n  })\n  const buttons = document.createElement(\"div\");\n  buttons.classList.add(\"proj-btns\");\n  newDiv.appendChild(buttons);\n  buttons.appendChild(det);\n  const projTrash = document.createElement(\"img\");\n  projTrash.src = _images_trash_svg__WEBPACK_IMPORTED_MODULE_0__;\n  projTrash.setAttribute(\"height\", \"30px\");\n  projTrash.addEventListener(\"click\", () => {\n    const projLIs = document.querySelectorAll(`.${className}-div li`);\n    console.log(projLIs);\n    const homeLIs = document.querySelectorAll(\".li-home\");\n        for (const chosen of homeLIs) {\n          chosen.classList.add(\"current\");\n          const homePs = document.querySelectorAll(\".current p\");\n          for (const nextP of homePs) {\n            for (const projItem of projLIs) {\n              projItem.classList.add(\"p-item\");\n              const projPs = document.querySelectorAll(\".p-item p\");\n              for (const item of projPs) {\n                if (nextP.textContent === item.textContent) chosen.remove();\n              }\n              projItem.classList.remove(\"p-item\");\n            }\n          }\n          chosen.classList.remove(\"current\");\n        }\n    newDiv.remove();\n    const home = document.querySelector(\".home-div\");\n    home.style.display = \"block\";\n    newProj.remove();\n  })\n  buttons.appendChild(projTrash);\n  newProj.addEventListener(\"click\", () => {\n    const search = document.querySelector(\".search\");\n    const children = search.children;\n    for (let i=0; i < children.length; i++) {\n      let child = children[i];\n      if (!(child.style.display === \"none\")) child.style.display = \"none\";\n      if (child.classList.contains(`${className}-div`)) {\n        child.style.display = \"block\";\n      }\n      const navBtns = document.querySelectorAll(\".nav-btn\");\n      for (const btn of navBtns) btn.classList.remove(\"active\");\n      newProj.classList.add(\"active\");\n    }\n  })\n}\n\nlet n = 1;\n\nconst createNote = (name, details) => {\n  const noteDiv = document.querySelector(\".notes-div\");\n  const note = document.createElement(\"div\");\n  note.classList.add(\"added-note\");\n  note.style.order = `-${n}`;\n  n++;\n  const noteHeader = document.createElement(\"div\");\n  note.appendChild(noteHeader);\n  noteHeader.classList.add(\"note-header\");\n  const noteName = document.createElement(\"p\");\n  noteName.textContent = name;\n  noteName.style.fontWeight = \"bold\";\n  noteHeader.appendChild(noteName);\n  \n  const noteDetails = document.createElement(\"p\");\n  noteDetails.textContent = details;\n  note.appendChild(noteDetails);\n  noteDiv.appendChild(note);\n  const notePopup = note.cloneNode(true);\n  notePopup.classList.add(\"pop-up-added-note\");\n  notePopup.style.height = \"auto\";\n  notePopup.style.width = \"400px\";\n  notePopup.style.display = \"none\";\n  notePopup.style.background = \"rgb(184, 182, 182)\";\n  const content = document.querySelector(\".content\");\n  content.appendChild(notePopup);\n  const images = document.querySelectorAll(\".pop-up-added-note img\");\n  for (const image of images) {\n    image.remove();\n  }\n  note.addEventListener(\"click\", () => {\n    notePopup.style.display = \"block\";\n    document.addEventListener(\"click\", (e) => {\n        if ( !(note.contains(e.target)) && !(notePopup.contains(e.target))) {\n          notePopup.style.display = \"none\";\n        }\n    });\n  })\n  const deleteNote = document.createElement(\"img\");\n  deleteNote.src = _images_trash_svg__WEBPACK_IMPORTED_MODULE_0__;\n  deleteNote.setAttribute(\"height\", \"20px\");\n  deleteNote.addEventListener(\"click\", () => {\n    notePopup.remove();\n    note.remove();\n  });\n  noteHeader.appendChild(deleteNote);\n}\n\n\n// Drafts:\n  \nconst draftTD = (name, details, duedate) => {\n//  currentProj.todos.push(new TD(name, details, duedate));\n  createTD(name, details, duedate);\n}\n  \nclass Proj {\n  constructor (name, details) {\n    this.name = name;\n    this.details = details;\n  }\n  todos = [];\n  UL = document.createElement(\"ul\");\n}\n\n//const createProj = (name, details) => {\n  //new Proj(name, details);\n//}\n\n//# sourceURL=webpack://to-do/./src/modules/create.js?");

/***/ }),

/***/ "./src/images/trash.svg":
/*!******************************!*\
  !*** ./src/images/trash.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bcf8d6ff346603c8a51a.svg\";\n\n//# sourceURL=webpack://to-do/./src/images/trash.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;