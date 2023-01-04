/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./egg-background.png */ "./src/egg-background.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./egg.png */ "./src/egg.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* { \n    -moz-box-sizing: border-box; \n    -webkit-box-sizing: border-box; \n     box-sizing: border-box; \n     font-family: 'Playfair Display', serif;\n}\n\n:root {\n    --block-background: rgba(0, 0, 0, 0.75);\n}\n\nbody {\n    background-color: lightgrey;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    background-attachment: fixed;\n    margin: 0;\n}\n\n.main-bar {\n    display: flex;\n    padding: 0 50px;\n    justify-content: space-around;\n    height: 230px;\n    align-items: center;\n    background-color: var(--block-background);\n    border-bottom: 1px solid rgb(110, 110, 110);\n}\n\n.home-title {\n    font-style: italic;\n    font-size: 4vw;\n    padding: 28px 0;\n    text-align: center;\n    color: white;\n}\n\n.egg {\n    width: 85px;\n    height: 115px;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: 100%;\n    background-repeat: no-repeat;\n    text-align: center;\n    color: #4b3d1e;\n}\n\n.egg:hover {\n    cursor: pointer;\n}\n\n.left-eggs {\n    transform: rotate(30deg);\n}\n\n.left-eggs:hover {\n    transform: rotate(30deg) scale(1.05);\n}\n\n.left-eggs >* {\n    transform: rotate(-30deg);\n}\n\n.right-eggs {\n    transform: rotateY(180deg) rotate(30deg);\n}\n\n.right-eggs:hover {\n    transform: rotate(-30deg) rotateY(-180deg) scale(1.02);\n}\n\n.right-eggs >* {\n    transform: rotate(-30deg) rotateY(-180deg);\n}\n\n.egg-text {\n    position: relative;\n    top: 50%;\n    font-size: 110%;\n}\n\n.block-container {\n    width: min(100%, 700px);\n    margin: 50px auto;\n    background-color: var(--block-background);\n    border: 1px solid rgb(110, 110, 110);\n    color: white;\n    font-size: 22px;\n    padding: 50px;\n}\n\n.home-container {\n    display: grid;\n    grid-template-rows: 1fr 1fr 5fr 1fr;\n    gap: 30px;\n    justify-content: center;\n}\n\n.about-container {\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    gap: 20px;\n}\n\n.chef-pic {\n    width: 400px;\n    height: 300px;\n    border-radius: 50%;\n}\n\n.info-text {\n    text-align: center;\n}\n\n.menu-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 50px;\n}\n\n.menu-item-container {\n    background-color: rgba(0, 0, 0, 0.55);\n    height: 290px;\n    width: 100%;\n    padding: 20px;\n    padding-top: 10px;\n    display: grid;\n    grid-template-rows: 3fr 1fr 2fr;\n    justify-items: center;\n}\n\n.menu-item-container:hover {\n    background-color: rgba(255, 253, 253, 0.119);\n    cursor: pointer;\n}\n\n.menu-item-picture {\n    height: 70%;\n    width: 50%;\n    align-self: center;\n}\n\n.menu-item-description {\n    font-size: 15px;\n    text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;IAC3B,8BAA8B;KAC7B,sBAAsB;KACtB,sCAAsC;AAC3C;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,2BAA2B;IAC3B,yDAA6C;IAC7C,sBAAsB;IACtB,4BAA4B;IAC5B,SAAS;AACb;;AAEA;IACI,aAAa;IACb,eAAe;IACf,6BAA6B;IAC7B,aAAa;IACb,mBAAmB;IACnB,yCAAyC;IACzC,2CAA2C;AAC/C;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,eAAe;IACf,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,mDAA4B;IAC5B,qBAAqB;IACrB,4BAA4B;IAC5B,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,sDAAsD;AAC1D;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,yCAAyC;IACzC,oCAAoC;IACpC,YAAY;IACZ,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,SAAS;IACT,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;AACb;;AAEA;IACI,qCAAqC;IACrC,aAAa;IACb,WAAW;IACX,aAAa;IACb,iBAAiB;IACjB,aAAa;IACb,+BAA+B;IAC/B,qBAAqB;AACzB;;AAEA;IACI,4CAA4C;IAC5C,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB","sourcesContent":["* { \n    -moz-box-sizing: border-box; \n    -webkit-box-sizing: border-box; \n     box-sizing: border-box; \n     font-family: 'Playfair Display', serif;\n}\n\n:root {\n    --block-background: rgba(0, 0, 0, 0.75);\n}\n\nbody {\n    background-color: lightgrey;\n    background-image: url('./egg-background.png');\n    background-size: cover;\n    background-attachment: fixed;\n    margin: 0;\n}\n\n.main-bar {\n    display: flex;\n    padding: 0 50px;\n    justify-content: space-around;\n    height: 230px;\n    align-items: center;\n    background-color: var(--block-background);\n    border-bottom: 1px solid rgb(110, 110, 110);\n}\n\n.home-title {\n    font-style: italic;\n    font-size: 4vw;\n    padding: 28px 0;\n    text-align: center;\n    color: white;\n}\n\n.egg {\n    width: 85px;\n    height: 115px;\n    background: url('./egg.png');\n    background-size: 100%;\n    background-repeat: no-repeat;\n    text-align: center;\n    color: #4b3d1e;\n}\n\n.egg:hover {\n    cursor: pointer;\n}\n\n.left-eggs {\n    transform: rotate(30deg);\n}\n\n.left-eggs:hover {\n    transform: rotate(30deg) scale(1.05);\n}\n\n.left-eggs >* {\n    transform: rotate(-30deg);\n}\n\n.right-eggs {\n    transform: rotateY(180deg) rotate(30deg);\n}\n\n.right-eggs:hover {\n    transform: rotate(-30deg) rotateY(-180deg) scale(1.02);\n}\n\n.right-eggs >* {\n    transform: rotate(-30deg) rotateY(-180deg);\n}\n\n.egg-text {\n    position: relative;\n    top: 50%;\n    font-size: 110%;\n}\n\n.block-container {\n    width: min(100%, 700px);\n    margin: 50px auto;\n    background-color: var(--block-background);\n    border: 1px solid rgb(110, 110, 110);\n    color: white;\n    font-size: 22px;\n    padding: 50px;\n}\n\n.home-container {\n    display: grid;\n    grid-template-rows: 1fr 1fr 5fr 1fr;\n    gap: 30px;\n    justify-content: center;\n}\n\n.about-container {\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    gap: 20px;\n}\n\n.chef-pic {\n    width: 400px;\n    height: 300px;\n    border-radius: 50%;\n}\n\n.info-text {\n    text-align: center;\n}\n\n.menu-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 50px;\n}\n\n.menu-item-container {\n    background-color: rgba(0, 0, 0, 0.55);\n    height: 290px;\n    width: 100%;\n    padding: 20px;\n    padding-top: 10px;\n    display: grid;\n    grid-template-rows: 3fr 1fr 2fr;\n    justify-items: center;\n}\n\n.menu-item-container:hover {\n    background-color: rgba(255, 253, 253, 0.119);\n    cursor: pointer;\n}\n\n.menu-item-picture {\n    height: 70%;\n    width: 50%;\n    align-self: center;\n}\n\n.menu-item-description {\n    font-size: 15px;\n    text-align: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about-page.js":
/*!***************************!*\
  !*** ./src/about-page.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "populateAboutPage": () => (/* binding */ populateAboutPage)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");


const populateAboutPage = () => {
    const parent = document.getElementById('block-container');

    parent.classList.add('about-container');

    _helper__WEBPACK_IMPORTED_MODULE_0__.displayAdder.createDiv(parent, 'Hours:', 'info-text');
    _helper__WEBPACK_IMPORTED_MODULE_0__.displayAdder.createDiv(parent, 'Sunday: 11 AM - 3 PM', 'info-text');
    _helper__WEBPACK_IMPORTED_MODULE_0__.displayAdder.createDiv(parent, 'Monday: CLOSED', 'info-text');
    _helper__WEBPACK_IMPORTED_MODULE_0__.displayAdder.createDiv(parent, 'Tuesday: 7 AM - 3 PM', 'info-text');
    _helper__WEBPACK_IMPORTED_MODULE_0__.displayAdder.createDiv(parent, 'Wednesday: 7 AM - 3 PM', 'info-text');
    _helper__WEBPACK_IMPORTED_MODULE_0__.displayAdder.createDiv(parent, 'Thursday: 7 AM - 3 PM', 'info-text');
    _helper__WEBPACK_IMPORTED_MODULE_0__.displayAdder.createDiv(parent, 'Friday: 8 AM - 9 PM', 'info-text');
    _helper__WEBPACK_IMPORTED_MODULE_0__.displayAdder.createDiv(parent, 'Saturday: 8 AM - 9 PM', 'info-text');

}



/***/ }),

/***/ "./src/contact-page.js":
/*!*****************************!*\
  !*** ./src/contact-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "populateContactPage": () => (/* binding */ populateContactPage)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");


const populateContactPage = () => {
    const parent = document.getElementById('content');

    const contact = _helper__WEBPACK_IMPORTED_MODULE_0__.displayAdder.createDiv(parent, '', 'contact', 'contact');
}



/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayAdder": () => (/* binding */ displayAdder)
/* harmony export */ });
const displayAdder = (function() {
    const createDiv = (parentElement, textContent='', divClass='', divId='') => {
        const newDiv = document.createElement('div');
        newDiv.textContent = textContent;
        if (divClass) {
            const divClassList = divClass.split(',');
            divClassList.forEach(element => {
                newDiv.classList.add(element);
            });
        }
        newDiv.id = divId;
        parentElement.appendChild(newDiv)
        return newDiv;
    }

    const createImage = (parentElement, imageSource, imageClass='') => {
        var newImage = new Image();
        newImage.src = imageSource;
        if (imageClass) {
            const imageClassList = imageClass.split(',');
            imageClassList.forEach(element => {
                newImage.classList.add(element);
            });
        }
        parentElement.appendChild(newImage);
        return createImage;
    }

    return {createDiv, createImage};
})();



/***/ }),

/***/ "./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "populateHomePage": () => (/* binding */ populateHomePage)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");
/* harmony import */ var _chef_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chef.png */ "./src/chef.png");



const populateHomePage = () => {

    const parent = document.getElementById('block-container');

    parent.classList.add('home-container');

    _helper__WEBPACK_IMPORTED_MODULE_0__.displayAdder.createDiv(parent, 'Best eggs in the tri state area', 'info-text');
    _helper__WEBPACK_IMPORTED_MODULE_0__.displayAdder.createDiv(parent, 'Made with purpose for over 55 years', 'info-text');

    _helper__WEBPACK_IMPORTED_MODULE_0__.displayAdder.createImage(parent, _chef_png__WEBPACK_IMPORTED_MODULE_1__, 'chef-pic');

    _helper__WEBPACK_IMPORTED_MODULE_0__.displayAdder.createDiv(parent, 'Come get eggcited with us!', 'info-text');
}



/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "populateMenuPage": () => (/* binding */ populateMenuPage)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");
/* harmony import */ var _fried_egg_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fried-egg.png */ "./src/fried-egg.png");
/* harmony import */ var _scrambled_eggs_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrambled-eggs.png */ "./src/scrambled-eggs.png");
/* harmony import */ var _eggs_benedict_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eggs-benedict.png */ "./src/eggs-benedict.png");
/* harmony import */ var _omelette_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./omelette.png */ "./src/omelette.png");






const populateMenuPage = () => {
    const parent = document.getElementById('block-container');

    parent.classList.add('menu-container');

    const firstContainer = _helper__WEBPACK_IMPORTED_MODULE_0__.displayAdder.createDiv(parent, '', 'menu-item-container');
    const secondContainer = _helper__WEBPACK_IMPORTED_MODULE_0__.displayAdder.createDiv(parent, '', 'menu-item-container');
    const thirdContainer = _helper__WEBPACK_IMPORTED_MODULE_0__.displayAdder.createDiv(parent, '', 'menu-item-container');
    const fourthContainer = _helper__WEBPACK_IMPORTED_MODULE_0__.displayAdder.createDiv(parent, '', 'menu-item-container');

    _helper__WEBPACK_IMPORTED_MODULE_0__.displayAdder.createImage(firstContainer, _fried_egg_png__WEBPACK_IMPORTED_MODULE_1__, 'menu-item-picture');
    _helper__WEBPACK_IMPORTED_MODULE_0__.displayAdder.createDiv(firstContainer, 'Classic Fried Eggs', 'menu-item-title');
    _helper__WEBPACK_IMPORTED_MODULE_0__.displayAdder.createDiv(firstContainer, `Our classic fried eggs cooked to your choice of temperature in a cast iron skillet.
    They're simply eggcelent!`, 'menu-item-description');

    _helper__WEBPACK_IMPORTED_MODULE_0__.displayAdder.createImage(secondContainer, _scrambled_eggs_png__WEBPACK_IMPORTED_MODULE_2__, 'menu-item-picture');
    _helper__WEBPACK_IMPORTED_MODULE_0__.displayAdder.createDiv(secondContainer, 'Scrambled Eggs', 'menu-item-title');
    _helper__WEBPACK_IMPORTED_MODULE_0__.displayAdder.createDiv(secondContainer, `Soft, savory, salted, scrambled eggs are guaranteed to make you salivate. Cooked to
    perfection and served steaming hot.`, 'menu-item-description');

    _helper__WEBPACK_IMPORTED_MODULE_0__.displayAdder.createImage(thirdContainer, _eggs_benedict_png__WEBPACK_IMPORTED_MODULE_3__, 'menu-item-picture');
    _helper__WEBPACK_IMPORTED_MODULE_0__.displayAdder.createDiv(thirdContainer, 'Eggs Benedict', 'menu-item-title');
    _helper__WEBPACK_IMPORTED_MODULE_0__.displayAdder.createDiv(thirdContainer, `English muffin, BAM. Canadian bacon, BAM. Poached egg, BAM. Perfect hollandaise sauce, BAM.
    Trust us, you need to try it.`, 'menu-item-description');

    _helper__WEBPACK_IMPORTED_MODULE_0__.displayAdder.createImage(fourthContainer, _omelette_png__WEBPACK_IMPORTED_MODULE_4__, 'menu-item-picture');
    _helper__WEBPACK_IMPORTED_MODULE_0__.displayAdder.createDiv(fourthContainer, 'The Omelette', 'menu-item-title');
    _helper__WEBPACK_IMPORTED_MODULE_0__.displayAdder.createDiv(fourthContainer, `It's like a sandwich, but with eggs. Mix and match your favorites and we'll do what we do best.
    Cook some eggs and crack some yolks.`, 'menu-item-description');
}



/***/ }),

/***/ "./src/chef.png":
/*!**********************!*\
  !*** ./src/chef.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8bb7b2f2296a7da5d279.png";

/***/ }),

/***/ "./src/egg-background.png":
/*!********************************!*\
  !*** ./src/egg-background.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4de4aebefa301da37edf.png";

/***/ }),

/***/ "./src/egg.png":
/*!*********************!*\
  !*** ./src/egg.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8030c713e14491b28cad.png";

/***/ }),

/***/ "./src/eggs-benedict.png":
/*!*******************************!*\
  !*** ./src/eggs-benedict.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dfeed1b09396c87df0c1.png";

/***/ }),

/***/ "./src/fried-egg.png":
/*!***************************!*\
  !*** ./src/fried-egg.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3218f87b62d4b0d41be1.png";

/***/ }),

/***/ "./src/omelette.png":
/*!**************************!*\
  !*** ./src/omelette.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "73d76ea812f50f31614c.png";

/***/ }),

/***/ "./src/scrambled-eggs.png":
/*!********************************!*\
  !*** ./src/scrambled-eggs.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "58b36cb573b49ac0c9be.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page */ "./src/home-page.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-page */ "./src/about-page.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-page */ "./src/menu-page.js");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-page */ "./src/contact-page.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helper */ "./src/helper.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







const tabController = (function() {

    const _clearPage = ()  => {
        const container = document.getElementById('block-container');
        container.innerHTML = "";
        container.className = 'block-container';
    }

    const tabHome = () => {
        _clearPage();
        (0,_home_page__WEBPACK_IMPORTED_MODULE_0__.populateHomePage)();
    }
    
    const tabAbout = () => {
        _clearPage();
        (0,_about_page__WEBPACK_IMPORTED_MODULE_1__.populateAboutPage)();
    }
    
    const tabMenu = () => {
        _clearPage();
        (0,_menu_page__WEBPACK_IMPORTED_MODULE_2__.populateMenuPage)();
    }
    
    const tabContact = () => {
        _clearPage();
        (0,_contact_page__WEBPACK_IMPORTED_MODULE_3__.populateContactPage)();
    }

    return {tabHome, tabMenu, tabAbout, tabContact}
})();

const makeTabs = () => {
    const content = document.getElementById('content');

    const parent = _helper__WEBPACK_IMPORTED_MODULE_4__.displayAdder.createDiv(content, '', 'main-bar');

    const homeEgg = _helper__WEBPACK_IMPORTED_MODULE_4__.displayAdder.createDiv(parent, '', 'egg,left-eggs');
    _helper__WEBPACK_IMPORTED_MODULE_4__.displayAdder.createDiv(homeEgg, 'Home', 'egg-text');
    homeEgg.onclick = tabController.tabHome;

    const aboutEgg = _helper__WEBPACK_IMPORTED_MODULE_4__.displayAdder.createDiv(parent, '', 'egg,left-eggs');
    _helper__WEBPACK_IMPORTED_MODULE_4__.displayAdder.createDiv(aboutEgg, 'Hours', 'egg-text');
    aboutEgg.onclick = tabController.tabAbout;

    _helper__WEBPACK_IMPORTED_MODULE_4__.displayAdder.createDiv(parent, 'The Eggcelent Restauranté', 'home-title');

    const menuEgg = _helper__WEBPACK_IMPORTED_MODULE_4__.displayAdder.createDiv(parent, '', 'egg,right-eggs');
    _helper__WEBPACK_IMPORTED_MODULE_4__.displayAdder.createDiv(menuEgg, 'Menu', 'egg-text');
    menuEgg.onclick = tabController.tabMenu;

    const contactEgg = _helper__WEBPACK_IMPORTED_MODULE_4__.displayAdder.createDiv(parent, '', 'egg,right-eggs');
    _helper__WEBPACK_IMPORTED_MODULE_4__.displayAdder.createDiv(contactEgg, 'Contact', 'egg-text');
    contactEgg.onclick = tabController.tabContact;

    _helper__WEBPACK_IMPORTED_MODULE_4__.displayAdder.createDiv(content, '', 'block-container', 'block-container');
}

makeTabs();

(0,_home_page__WEBPACK_IMPORTED_MODULE_0__.populateHomePage)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQStDO0FBQ0U7QUFDRjtBQUNNO0FBQ2I7QUFDbkI7O0FBRXJCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsNERBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4REFBaUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDREQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0VBQW1CO0FBQzNCOztBQUVBLFlBQVk7QUFDWixDQUFDOztBQUVEO0FBQ0E7O0FBRUEsbUJBQW1CLDJEQUFzQjs7QUFFekMsb0JBQW9CLDJEQUFzQjtBQUMxQyxJQUFJLDJEQUFzQjtBQUMxQjs7QUFFQSxxQkFBcUIsMkRBQXNCO0FBQzNDLElBQUksMkRBQXNCO0FBQzFCOztBQUVBLElBQUksMkRBQXNCOztBQUUxQixvQkFBb0IsMkRBQXNCO0FBQzFDLElBQUksMkRBQXNCO0FBQzFCOztBQUVBLHVCQUF1QiwyREFBc0I7QUFDN0MsSUFBSSwyREFBc0I7QUFDMUI7O0FBRUEsSUFBSSwyREFBc0I7QUFDMUI7O0FBRUE7O0FBRUEsNERBQWdCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2VnZy1iYWNrZ3JvdW5kLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZWdnLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHsgXFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDsgXFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDsgXFxuICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcXG4gICAgIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tYmxvY2stYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubWFpbi1iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAwIDUwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBoZWlnaHQ6IDIzMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibG9jay1iYWNrZ3JvdW5kKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxMTAsIDExMCwgMTEwKTtcXG59XFxuXFxuLmhvbWUtdGl0bGUge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtc2l6ZTogNHZ3O1xcbiAgICBwYWRkaW5nOiAyOHB4IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZWdnIHtcXG4gICAgd2lkdGg6IDg1cHg7XFxuICAgIGhlaWdodDogMTE1cHg7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogIzRiM2QxZTtcXG59XFxuXFxuLmVnZzpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxlZnQtZWdncyB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcXG59XFxuXFxuLmxlZnQtZWdnczpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKSBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLmxlZnQtZWdncyA+KiB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zMGRlZyk7XFxufVxcblxcbi5yaWdodC1lZ2dzIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZykgcm90YXRlKDMwZGVnKTtcXG59XFxuXFxuLnJpZ2h0LWVnZ3M6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzBkZWcpIHJvdGF0ZVkoLTE4MGRlZykgc2NhbGUoMS4wMik7XFxufVxcblxcbi5yaWdodC1lZ2dzID4qIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTMwZGVnKSByb3RhdGVZKC0xODBkZWcpO1xcbn1cXG5cXG4uZWdnLXRleHQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBmb250LXNpemU6IDExMCU7XFxufVxcblxcbi5ibG9jay1jb250YWluZXIge1xcbiAgICB3aWR0aDogbWluKDEwMCUsIDcwMHB4KTtcXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsb2NrLWJhY2tncm91bmQpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTEwLCAxMTAsIDExMCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbn1cXG5cXG4uaG9tZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgNWZyIDFmcjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmFib3V0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uY2hlZi1waWMge1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmluZm8tdGV4dCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDUwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0tY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU1KTtcXG4gICAgaGVpZ2h0OiAyOTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAxZnIgMmZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZW51LWl0ZW0tY29udGFpbmVyOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1MywgMjUzLCAwLjExOSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnUtaXRlbS1waWN0dXJlIHtcXG4gICAgaGVpZ2h0OiA3MCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtaXRlbS1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLDhCQUE4QjtLQUM3QixzQkFBc0I7S0FDdEIsc0NBQXNDO0FBQzNDOztBQUVBO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLHlEQUE2QztJQUM3QyxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUNBQXlDO0lBQ3pDLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtREFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLHlDQUF5QztJQUN6QyxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxTQUFTO0lBQ1QsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsU0FBUztBQUNiOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDRDQUE0QztJQUM1QyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiogeyBcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94OyBcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94OyBcXG4gICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxcbiAgICAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1ibG9jay1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vZWdnLWJhY2tncm91bmQucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLm1haW4tYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMCA1MHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgaGVpZ2h0OiAyMzBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxvY2stYmFja2dyb3VuZCk7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTEwLCAxMTAsIDExMCk7XFxufVxcblxcbi5ob21lLXRpdGxlIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXNpemU6IDR2dztcXG4gICAgcGFkZGluZzogMjhweCAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmVnZyB7XFxuICAgIHdpZHRoOiA4NXB4O1xcbiAgICBoZWlnaHQ6IDExNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vZWdnLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICM0YjNkMWU7XFxufVxcblxcbi5lZ2c6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5sZWZ0LWVnZ3Mge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XFxufVxcblxcbi5sZWZ0LWVnZ3M6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZykgc2NhbGUoMS4wNSk7XFxufVxcblxcbi5sZWZ0LWVnZ3MgPioge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzBkZWcpO1xcbn1cXG5cXG4ucmlnaHQtZWdncyB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpIHJvdGF0ZSgzMGRlZyk7XFxufVxcblxcbi5yaWdodC1lZ2dzOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTMwZGVnKSByb3RhdGVZKC0xODBkZWcpIHNjYWxlKDEuMDIpO1xcbn1cXG5cXG4ucmlnaHQtZWdncyA+KiB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zMGRlZykgcm90YXRlWSgtMTgwZGVnKTtcXG59XFxuXFxuLmVnZy10ZXh0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgZm9udC1zaXplOiAxMTAlO1xcbn1cXG5cXG4uYmxvY2stY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IG1pbigxMDAlLCA3MDBweCk7XFxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibG9jay1iYWNrZ3JvdW5kKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDExMCwgMTEwLCAxMTApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgcGFkZGluZzogNTBweDtcXG59XFxuXFxuLmhvbWUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDVmciAxZnI7XFxuICAgIGdhcDogMzBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5hYm91dC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmNoZWYtcGljIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5pbmZvLXRleHQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tZW51LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NSk7XFxuICAgIGhlaWdodDogMjkwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZnIgMWZyIDJmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lcjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTMsIDI1MywgMC4xMTkpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51LWl0ZW0tcGljdHVyZSB7XFxuICAgIGhlaWdodDogNzAlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5tZW51LWl0ZW0tZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGRpc3BsYXlBZGRlciB9IGZyb20gXCIuL2hlbHBlclwiO1xuXG5jb25zdCBwb3B1bGF0ZUFib3V0UGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmxvY2stY29udGFpbmVyJyk7XG5cbiAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnYWJvdXQtY29udGFpbmVyJyk7XG5cbiAgICBkaXNwbGF5QWRkZXIuY3JlYXRlRGl2KHBhcmVudCwgJ0hvdXJzOicsICdpbmZvLXRleHQnKTtcbiAgICBkaXNwbGF5QWRkZXIuY3JlYXRlRGl2KHBhcmVudCwgJ1N1bmRheTogMTEgQU0gLSAzIFBNJywgJ2luZm8tdGV4dCcpO1xuICAgIGRpc3BsYXlBZGRlci5jcmVhdGVEaXYocGFyZW50LCAnTW9uZGF5OiBDTE9TRUQnLCAnaW5mby10ZXh0Jyk7XG4gICAgZGlzcGxheUFkZGVyLmNyZWF0ZURpdihwYXJlbnQsICdUdWVzZGF5OiA3IEFNIC0gMyBQTScsICdpbmZvLXRleHQnKTtcbiAgICBkaXNwbGF5QWRkZXIuY3JlYXRlRGl2KHBhcmVudCwgJ1dlZG5lc2RheTogNyBBTSAtIDMgUE0nLCAnaW5mby10ZXh0Jyk7XG4gICAgZGlzcGxheUFkZGVyLmNyZWF0ZURpdihwYXJlbnQsICdUaHVyc2RheTogNyBBTSAtIDMgUE0nLCAnaW5mby10ZXh0Jyk7XG4gICAgZGlzcGxheUFkZGVyLmNyZWF0ZURpdihwYXJlbnQsICdGcmlkYXk6IDggQU0gLSA5IFBNJywgJ2luZm8tdGV4dCcpO1xuICAgIGRpc3BsYXlBZGRlci5jcmVhdGVEaXYocGFyZW50LCAnU2F0dXJkYXk6IDggQU0gLSA5IFBNJywgJ2luZm8tdGV4dCcpO1xuXG59XG5cbmV4cG9ydCB7cG9wdWxhdGVBYm91dFBhZ2UgYXMgcG9wdWxhdGVBYm91dFBhZ2V9OyIsImltcG9ydCB7IGRpc3BsYXlBZGRlciB9IGZyb20gXCIuL2hlbHBlclwiO1xuXG5jb25zdCBwb3B1bGF0ZUNvbnRhY3RQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBjb25zdCBjb250YWN0ID0gZGlzcGxheUFkZGVyLmNyZWF0ZURpdihwYXJlbnQsICcnLCAnY29udGFjdCcsICdjb250YWN0Jyk7XG59XG5cbmV4cG9ydCB7cG9wdWxhdGVDb250YWN0UGFnZSBhcyBwb3B1bGF0ZUNvbnRhY3RQYWdlfTsiLCJjb25zdCBkaXNwbGF5QWRkZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY3JlYXRlRGl2ID0gKHBhcmVudEVsZW1lbnQsIHRleHRDb250ZW50PScnLCBkaXZDbGFzcz0nJywgZGl2SWQ9JycpID0+IHtcbiAgICAgICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld0Rpdi50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgICAgICBpZiAoZGl2Q2xhc3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpdkNsYXNzTGlzdCA9IGRpdkNsYXNzLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBkaXZDbGFzc0xpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZChlbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIG5ld0Rpdi5pZCA9IGRpdklkO1xuICAgICAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKG5ld0RpdilcbiAgICAgICAgcmV0dXJuIG5ld0RpdjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVJbWFnZSA9IChwYXJlbnRFbGVtZW50LCBpbWFnZVNvdXJjZSwgaW1hZ2VDbGFzcz0nJykgPT4ge1xuICAgICAgICB2YXIgbmV3SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbmV3SW1hZ2Uuc3JjID0gaW1hZ2VTb3VyY2U7XG4gICAgICAgIGlmIChpbWFnZUNsYXNzKSB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZUNsYXNzTGlzdCA9IGltYWdlQ2xhc3Muc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGltYWdlQ2xhc3NMaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgbmV3SW1hZ2UuY2xhc3NMaXN0LmFkZChlbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3SW1hZ2UpO1xuICAgICAgICByZXR1cm4gY3JlYXRlSW1hZ2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtjcmVhdGVEaXYsIGNyZWF0ZUltYWdlfTtcbn0pKCk7XG5cbmV4cG9ydCB7ZGlzcGxheUFkZGVyIGFzIGRpc3BsYXlBZGRlcn07IiwiaW1wb3J0IHsgZGlzcGxheUFkZGVyIH0gZnJvbSBcIi4vaGVscGVyXCI7XG5pbXBvcnQgY2hlZlBpYyBmcm9tIFwiLi9jaGVmLnBuZ1wiO1xuXG5jb25zdCBwb3B1bGF0ZUhvbWVQYWdlID0gKCkgPT4ge1xuXG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jsb2NrLWNvbnRhaW5lcicpO1xuXG4gICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ2hvbWUtY29udGFpbmVyJyk7XG5cbiAgICBkaXNwbGF5QWRkZXIuY3JlYXRlRGl2KHBhcmVudCwgJ0Jlc3QgZWdncyBpbiB0aGUgdHJpIHN0YXRlIGFyZWEnLCAnaW5mby10ZXh0Jyk7XG4gICAgZGlzcGxheUFkZGVyLmNyZWF0ZURpdihwYXJlbnQsICdNYWRlIHdpdGggcHVycG9zZSBmb3Igb3ZlciA1NSB5ZWFycycsICdpbmZvLXRleHQnKTtcblxuICAgIGRpc3BsYXlBZGRlci5jcmVhdGVJbWFnZShwYXJlbnQsIGNoZWZQaWMsICdjaGVmLXBpYycpO1xuXG4gICAgZGlzcGxheUFkZGVyLmNyZWF0ZURpdihwYXJlbnQsICdDb21lIGdldCBlZ2djaXRlZCB3aXRoIHVzIScsICdpbmZvLXRleHQnKTtcbn1cblxuZXhwb3J0IHtwb3B1bGF0ZUhvbWVQYWdlIGFzIHBvcHVsYXRlSG9tZVBhZ2V9OyIsImltcG9ydCB7IGRpc3BsYXlBZGRlciB9IGZyb20gXCIuL2hlbHBlclwiO1xuaW1wb3J0IGZyaWVkRWdnUGljIGZyb20gXCIuL2ZyaWVkLWVnZy5wbmdcIjtcbmltcG9ydCBzY3JhbWJsZWRFZ2dQaWMgZnJvbSBcIi4vc2NyYW1ibGVkLWVnZ3MucG5nXCI7XG5pbXBvcnQgZWdnc0JlbmVkaWN0UGljIGZyb20gXCIuL2VnZ3MtYmVuZWRpY3QucG5nXCI7XG5pbXBvcnQgb21lbGV0dGVQaWMgZnJvbSBcIi4vb21lbGV0dGUucG5nXCI7XG5cbmNvbnN0IHBvcHVsYXRlTWVudVBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jsb2NrLWNvbnRhaW5lcicpO1xuXG4gICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBmaXJzdENvbnRhaW5lciA9IGRpc3BsYXlBZGRlci5jcmVhdGVEaXYocGFyZW50LCAnJywgJ21lbnUtaXRlbS1jb250YWluZXInKTtcbiAgICBjb25zdCBzZWNvbmRDb250YWluZXIgPSBkaXNwbGF5QWRkZXIuY3JlYXRlRGl2KHBhcmVudCwgJycsICdtZW51LWl0ZW0tY29udGFpbmVyJyk7XG4gICAgY29uc3QgdGhpcmRDb250YWluZXIgPSBkaXNwbGF5QWRkZXIuY3JlYXRlRGl2KHBhcmVudCwgJycsICdtZW51LWl0ZW0tY29udGFpbmVyJyk7XG4gICAgY29uc3QgZm91cnRoQ29udGFpbmVyID0gZGlzcGxheUFkZGVyLmNyZWF0ZURpdihwYXJlbnQsICcnLCAnbWVudS1pdGVtLWNvbnRhaW5lcicpO1xuXG4gICAgZGlzcGxheUFkZGVyLmNyZWF0ZUltYWdlKGZpcnN0Q29udGFpbmVyLCBmcmllZEVnZ1BpYywgJ21lbnUtaXRlbS1waWN0dXJlJyk7XG4gICAgZGlzcGxheUFkZGVyLmNyZWF0ZURpdihmaXJzdENvbnRhaW5lciwgJ0NsYXNzaWMgRnJpZWQgRWdncycsICdtZW51LWl0ZW0tdGl0bGUnKTtcbiAgICBkaXNwbGF5QWRkZXIuY3JlYXRlRGl2KGZpcnN0Q29udGFpbmVyLCBgT3VyIGNsYXNzaWMgZnJpZWQgZWdncyBjb29rZWQgdG8geW91ciBjaG9pY2Ugb2YgdGVtcGVyYXR1cmUgaW4gYSBjYXN0IGlyb24gc2tpbGxldC5cbiAgICBUaGV5J3JlIHNpbXBseSBlZ2djZWxlbnQhYCwgJ21lbnUtaXRlbS1kZXNjcmlwdGlvbicpO1xuXG4gICAgZGlzcGxheUFkZGVyLmNyZWF0ZUltYWdlKHNlY29uZENvbnRhaW5lciwgc2NyYW1ibGVkRWdnUGljLCAnbWVudS1pdGVtLXBpY3R1cmUnKTtcbiAgICBkaXNwbGF5QWRkZXIuY3JlYXRlRGl2KHNlY29uZENvbnRhaW5lciwgJ1NjcmFtYmxlZCBFZ2dzJywgJ21lbnUtaXRlbS10aXRsZScpO1xuICAgIGRpc3BsYXlBZGRlci5jcmVhdGVEaXYoc2Vjb25kQ29udGFpbmVyLCBgU29mdCwgc2F2b3J5LCBzYWx0ZWQsIHNjcmFtYmxlZCBlZ2dzIGFyZSBndWFyYW50ZWVkIHRvIG1ha2UgeW91IHNhbGl2YXRlLiBDb29rZWQgdG9cbiAgICBwZXJmZWN0aW9uIGFuZCBzZXJ2ZWQgc3RlYW1pbmcgaG90LmAsICdtZW51LWl0ZW0tZGVzY3JpcHRpb24nKTtcblxuICAgIGRpc3BsYXlBZGRlci5jcmVhdGVJbWFnZSh0aGlyZENvbnRhaW5lciwgZWdnc0JlbmVkaWN0UGljLCAnbWVudS1pdGVtLXBpY3R1cmUnKTtcbiAgICBkaXNwbGF5QWRkZXIuY3JlYXRlRGl2KHRoaXJkQ29udGFpbmVyLCAnRWdncyBCZW5lZGljdCcsICdtZW51LWl0ZW0tdGl0bGUnKTtcbiAgICBkaXNwbGF5QWRkZXIuY3JlYXRlRGl2KHRoaXJkQ29udGFpbmVyLCBgRW5nbGlzaCBtdWZmaW4sIEJBTS4gQ2FuYWRpYW4gYmFjb24sIEJBTS4gUG9hY2hlZCBlZ2csIEJBTS4gUGVyZmVjdCBob2xsYW5kYWlzZSBzYXVjZSwgQkFNLlxuICAgIFRydXN0IHVzLCB5b3UgbmVlZCB0byB0cnkgaXQuYCwgJ21lbnUtaXRlbS1kZXNjcmlwdGlvbicpO1xuXG4gICAgZGlzcGxheUFkZGVyLmNyZWF0ZUltYWdlKGZvdXJ0aENvbnRhaW5lciwgb21lbGV0dGVQaWMsICdtZW51LWl0ZW0tcGljdHVyZScpO1xuICAgIGRpc3BsYXlBZGRlci5jcmVhdGVEaXYoZm91cnRoQ29udGFpbmVyLCAnVGhlIE9tZWxldHRlJywgJ21lbnUtaXRlbS10aXRsZScpO1xuICAgIGRpc3BsYXlBZGRlci5jcmVhdGVEaXYoZm91cnRoQ29udGFpbmVyLCBgSXQncyBsaWtlIGEgc2FuZHdpY2gsIGJ1dCB3aXRoIGVnZ3MuIE1peCBhbmQgbWF0Y2ggeW91ciBmYXZvcml0ZXMgYW5kIHdlJ2xsIGRvIHdoYXQgd2UgZG8gYmVzdC5cbiAgICBDb29rIHNvbWUgZWdncyBhbmQgY3JhY2sgc29tZSB5b2xrcy5gLCAnbWVudS1pdGVtLWRlc2NyaXB0aW9uJyk7XG59XG5cbmV4cG9ydCB7cG9wdWxhdGVNZW51UGFnZSBhcyBwb3B1bGF0ZU1lbnVQYWdlfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgcG9wdWxhdGVIb21lUGFnZSB9IGZyb20gXCIuL2hvbWUtcGFnZVwiO1xuaW1wb3J0IHsgcG9wdWxhdGVBYm91dFBhZ2UgfSBmcm9tIFwiLi9hYm91dC1wYWdlXCI7XG5pbXBvcnQgeyBwb3B1bGF0ZU1lbnVQYWdlIH0gZnJvbSBcIi4vbWVudS1wYWdlXCI7XG5pbXBvcnQgeyBwb3B1bGF0ZUNvbnRhY3RQYWdlIH0gZnJvbSBcIi4vY29udGFjdC1wYWdlXCI7XG5pbXBvcnQgeyBkaXNwbGF5QWRkZXIgfSBmcm9tIFwiLi9oZWxwZXJcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCB0YWJDb250cm9sbGVyID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgX2NsZWFyUGFnZSA9ICgpICA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdibG9jay1jb250YWluZXInKTtcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnYmxvY2stY29udGFpbmVyJztcbiAgICB9XG5cbiAgICBjb25zdCB0YWJIb21lID0gKCkgPT4ge1xuICAgICAgICBfY2xlYXJQYWdlKCk7XG4gICAgICAgIHBvcHVsYXRlSG9tZVBhZ2UoKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdGFiQWJvdXQgPSAoKSA9PiB7XG4gICAgICAgIF9jbGVhclBhZ2UoKTtcbiAgICAgICAgcG9wdWxhdGVBYm91dFBhZ2UoKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdGFiTWVudSA9ICgpID0+IHtcbiAgICAgICAgX2NsZWFyUGFnZSgpO1xuICAgICAgICBwb3B1bGF0ZU1lbnVQYWdlKCk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHRhYkNvbnRhY3QgPSAoKSA9PiB7XG4gICAgICAgIF9jbGVhclBhZ2UoKTtcbiAgICAgICAgcG9wdWxhdGVDb250YWN0UGFnZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB7dGFiSG9tZSwgdGFiTWVudSwgdGFiQWJvdXQsIHRhYkNvbnRhY3R9XG59KSgpO1xuXG5jb25zdCBtYWtlVGFicyA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IHBhcmVudCA9IGRpc3BsYXlBZGRlci5jcmVhdGVEaXYoY29udGVudCwgJycsICdtYWluLWJhcicpO1xuXG4gICAgY29uc3QgaG9tZUVnZyA9IGRpc3BsYXlBZGRlci5jcmVhdGVEaXYocGFyZW50LCAnJywgJ2VnZyxsZWZ0LWVnZ3MnKTtcbiAgICBkaXNwbGF5QWRkZXIuY3JlYXRlRGl2KGhvbWVFZ2csICdIb21lJywgJ2VnZy10ZXh0Jyk7XG4gICAgaG9tZUVnZy5vbmNsaWNrID0gdGFiQ29udHJvbGxlci50YWJIb21lO1xuXG4gICAgY29uc3QgYWJvdXRFZ2cgPSBkaXNwbGF5QWRkZXIuY3JlYXRlRGl2KHBhcmVudCwgJycsICdlZ2csbGVmdC1lZ2dzJyk7XG4gICAgZGlzcGxheUFkZGVyLmNyZWF0ZURpdihhYm91dEVnZywgJ0hvdXJzJywgJ2VnZy10ZXh0Jyk7XG4gICAgYWJvdXRFZ2cub25jbGljayA9IHRhYkNvbnRyb2xsZXIudGFiQWJvdXQ7XG5cbiAgICBkaXNwbGF5QWRkZXIuY3JlYXRlRGl2KHBhcmVudCwgJ1RoZSBFZ2djZWxlbnQgUmVzdGF1cmFudMOpJywgJ2hvbWUtdGl0bGUnKTtcblxuICAgIGNvbnN0IG1lbnVFZ2cgPSBkaXNwbGF5QWRkZXIuY3JlYXRlRGl2KHBhcmVudCwgJycsICdlZ2cscmlnaHQtZWdncycpO1xuICAgIGRpc3BsYXlBZGRlci5jcmVhdGVEaXYobWVudUVnZywgJ01lbnUnLCAnZWdnLXRleHQnKTtcbiAgICBtZW51RWdnLm9uY2xpY2sgPSB0YWJDb250cm9sbGVyLnRhYk1lbnU7XG5cbiAgICBjb25zdCBjb250YWN0RWdnID0gZGlzcGxheUFkZGVyLmNyZWF0ZURpdihwYXJlbnQsICcnLCAnZWdnLHJpZ2h0LWVnZ3MnKTtcbiAgICBkaXNwbGF5QWRkZXIuY3JlYXRlRGl2KGNvbnRhY3RFZ2csICdDb250YWN0JywgJ2VnZy10ZXh0Jyk7XG4gICAgY29udGFjdEVnZy5vbmNsaWNrID0gdGFiQ29udHJvbGxlci50YWJDb250YWN0O1xuXG4gICAgZGlzcGxheUFkZGVyLmNyZWF0ZURpdihjb250ZW50LCAnJywgJ2Jsb2NrLWNvbnRhaW5lcicsICdibG9jay1jb250YWluZXInKTtcbn1cblxubWFrZVRhYnMoKTtcblxucG9wdWxhdGVIb21lUGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==