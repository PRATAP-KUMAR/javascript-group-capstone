"use strict";
(self["webpackChunkjavascript_group_capstone"] = self["webpackChunkjavascript_group_capstone"] || []).push([["main"],{

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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n}\n\n.main-nav {\n  display: flex;\n  padding: 20px 0;\n}\n\n.main-nav ul {\n  display: flex;\n  list-style: none;\n  align-items: center;\n  margin-right: 60px;\n}\n\n.main-nav ul a {\n  padding: 20px;\n  color: #000;\n  font-weight: bold;\n  font-size: 30px;\n  text-decoration: none;\n}\n\n.main-nav ul a.selected {\n  color: #000;\n}\n\n.main-nav ul a:hover {\n  color: blue;\n}\n\n.main-nav-inner {\n  display: flex;\n  width: 900px;\n  justify-content: space-between;\n  margin: 0 auto;\n  align-items: center;\n  padding: 0 20px;\n}\n\n.right-side-menus {\n  display: flex;\n}\n\n.showsContainer {\n  padding: 20px 100px;\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  gap: 100px;\n}\n\n.show-card {\n  margin: 20px 0;\n  padding: 10px;\n  width: 300px;\n  border-radius: 5%;\n  border-style: solid;\n  border-color: #000;\n}\n\n.popup-container {\n  background-color: rgba(36, 49, 36, 1);\n  z-index: 9999;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 50vw;\n  height: 100vh;\n  margin: 0 auto;\n  overflow-y: scroll;\n  right: 0;\n  bottom: 0;\n  padding: 24px;\n}\n\n.x-text {\n  width: auto;\n  color: yellow;\n  font-size: 24px;\n  text-align: right;\n  cursor: pointer;\n}\n\n.show-image {\n  position: relative;\n  text-align: center;\n  display: flex;\n}\n\n.show-image > img {\n  margin: auto;\n}\n\n.show-name {\n  position: relative;\n  color: blue;\n  font-size: 40px;\n  text-align: center;\n}\n\n.show-details {\n  font-size: 24px;\n  color: #fff;\n}\n\n.comments {\n  margin: 24px 0;\n  color: #555fff;\n  font-size: 30px;\n  text-align: center;\n}\n\n.add-comment {\n  margin-top: 20px;\n  text-align: center;\n  font-size: 18px;\n  color: #00ff00;\n}\n\n.popup-container > form {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  align-items: center;\n}\n\n.popup-container > form > input {\n  width: 15rem;\n  height: 2rem;\n  border-radius: 8px;\n}\n\n.popup-container > form > input:nth-child(2) {\n  text-align: left;\n  width: 25rem;\n  height: 10rem;\n  border-radius: 8px;\n  color: orange;\n  align-items: start;\n}\n\n.popup-container > form > button {\n  display: inline-block;\n  background-color: #7b38d8;\n  border-radius: 10px;\n  border: 4px double #ccc;\n  color: #eee;\n  text-align: center;\n  font-size: 1rem;\n  padding: 2px;\n  width: 8rem;\n  -webkit-transition: all 0.5s;\n  -moz-transition: all 0.5s;\n  -o-transition: all 0.5s;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 0.5rem;\n}\n\n.popup-container > form > button:hover {\n  background-color: orange;\n  transform: rotate(2deg);\n}\n\n.popup-container > form > button:active {\n  background-color: cyan;\n  transform: rotate(-2deg);\n}\n\n.comments-container > div {\n  color: #456789;\n  font-size: 20px;\n  text-align: left;\n  margin-left: 350px;\n}\n\n.footer-border {\n  padding-left: 50px;\n  border: 2px solid #000;\n  color: #000;\n  font-weight: bold;\n  font-size: 30px;\n}\n.showsLine {\n  display: inline-flex;\n  align-items: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;AACX;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,iBAAiB;EACjB,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,8BAA8B;EAC9B,cAAc;EACd,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,6BAA6B;EAC7B,UAAU;AACZ;;AAEA;EACE,cAAc;EACd,aAAa;EACb,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,qCAAqC;EACrC,aAAa;EACb,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,aAAa;EACb,cAAc;EACd,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,aAAa;AACf;;AAEA;EACE,WAAW;EACX,aAAa;EACb,eAAe;EACf,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,cAAc;EACd,cAAc;EACd,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,yBAAyB;EACzB,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,WAAW;EACX,4BAA4B;EAC5B,yBAAyB;EACzB,uBAAuB;EACvB,oBAAoB;EACpB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;EACtB,wBAAwB;AAC1B;;AAEA;EACE,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,WAAW;EACX,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,oBAAoB;EACpB,mBAAmB;AACrB","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n}\n\n.main-nav {\n  display: flex;\n  padding: 20px 0;\n}\n\n.main-nav ul {\n  display: flex;\n  list-style: none;\n  align-items: center;\n  margin-right: 60px;\n}\n\n.main-nav ul a {\n  padding: 20px;\n  color: #000;\n  font-weight: bold;\n  font-size: 30px;\n  text-decoration: none;\n}\n\n.main-nav ul a.selected {\n  color: #000;\n}\n\n.main-nav ul a:hover {\n  color: blue;\n}\n\n.main-nav-inner {\n  display: flex;\n  width: 900px;\n  justify-content: space-between;\n  margin: 0 auto;\n  align-items: center;\n  padding: 0 20px;\n}\n\n.right-side-menus {\n  display: flex;\n}\n\n.showsContainer {\n  padding: 20px 100px;\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  gap: 100px;\n}\n\n.show-card {\n  margin: 20px 0;\n  padding: 10px;\n  width: 300px;\n  border-radius: 5%;\n  border-style: solid;\n  border-color: #000;\n}\n\n.popup-container {\n  background-color: rgba(36, 49, 36, 1);\n  z-index: 9999;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 50vw;\n  height: 100vh;\n  margin: 0 auto;\n  overflow-y: scroll;\n  right: 0;\n  bottom: 0;\n  padding: 24px;\n}\n\n.x-text {\n  width: auto;\n  color: yellow;\n  font-size: 24px;\n  text-align: right;\n  cursor: pointer;\n}\n\n.show-image {\n  position: relative;\n  text-align: center;\n  display: flex;\n}\n\n.show-image > img {\n  margin: auto;\n}\n\n.show-name {\n  position: relative;\n  color: blue;\n  font-size: 40px;\n  text-align: center;\n}\n\n.show-details {\n  font-size: 24px;\n  color: #fff;\n}\n\n.comments {\n  margin: 24px 0;\n  color: #555fff;\n  font-size: 30px;\n  text-align: center;\n}\n\n.add-comment {\n  margin-top: 20px;\n  text-align: center;\n  font-size: 18px;\n  color: #00ff00;\n}\n\n.popup-container > form {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  align-items: center;\n}\n\n.popup-container > form > input {\n  width: 15rem;\n  height: 2rem;\n  border-radius: 8px;\n}\n\n.popup-container > form > input:nth-child(2) {\n  text-align: left;\n  width: 25rem;\n  height: 10rem;\n  border-radius: 8px;\n  color: orange;\n  align-items: start;\n}\n\n.popup-container > form > button {\n  display: inline-block;\n  background-color: #7b38d8;\n  border-radius: 10px;\n  border: 4px double #ccc;\n  color: #eee;\n  text-align: center;\n  font-size: 1rem;\n  padding: 2px;\n  width: 8rem;\n  -webkit-transition: all 0.5s;\n  -moz-transition: all 0.5s;\n  -o-transition: all 0.5s;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 0.5rem;\n}\n\n.popup-container > form > button:hover {\n  background-color: orange;\n  transform: rotate(2deg);\n}\n\n.popup-container > form > button:active {\n  background-color: cyan;\n  transform: rotate(-2deg);\n}\n\n.comments-container > div {\n  color: #456789;\n  font-size: 20px;\n  text-align: left;\n  margin-left: 350px;\n}\n\n.footer-border {\n  padding-left: 50px;\n  border: 2px solid #000;\n  color: #000;\n  font-weight: bold;\n  font-size: 30px;\n}\n.showsLine {\n  display: inline-flex;\n  align-items: center;\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/tvmaze-logo.jpg */ "./src/assets/tvmaze-logo.jpg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>JavaScript Group Capstone Project</title>\n</head>\n\n<body>\n  <header>\n    <nav class=\"main-nav\">\n      <div class=\"main-nav-inner\">\n        <div>\n          <a href=\"https://www.tvmaze.com/\" target=\"_blank\" rel=\"noopener\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" width=\"100\" alt=\"sci-fi logo\" title=\"sci-fi logo\" />\n          </a>\n        </div>\n        <div class=\"right-side-menus\"></div>\n        <ul>\n          <li class=\"showsLine\"><a class=\"showsLink\" href='https://www.tvmaze.com/shows' target=\"_blank\" rel=\"noopener\" title=\"Go to Shows Page\">Shows</a></li>\n          <li><a href='https://www.tvmaze.com/people' target=\"_blank\" rel=\"noopener\" title=\"Go to People Page\">People</a></li>\n          <li><a href='https://www.tvmaze.com/countdown' target=\"_blank\" rel=\"noopener\" title=\"Go TV Countdown Page\">TV Countdown</a></li>\n        </ul>\n        <div>\n        </div>\n      </div>\n    </nav>\n\n  </header>\n\n  <section class=\"js-section\">\n    <div class=\"showsContainer\"></div>\n  </section>\n\n  <footer>\n    <div class=\"footer-border\">\n      <p>Created by JUAN and PRATAP under CC license</p>\n    </div>\n  </footer>\n\n</body>\n\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_APImethods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/APImethods.js */ "./src/modules/APImethods.js");
/* harmony import */ var _modules_UImethods_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/UImethods.js */ "./src/modules/UImethods.js");
/* harmony import */ var _modules_detailsButton_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/detailsButton.js */ "./src/modules/detailsButton.js");






const showsIds = ['tt5491994', 'tt0903747', 'tt0795176', 'tt0185906', 'tt7366338', 'tt0306414'];

const showsData = await (0,_modules_APImethods_js__WEBPACK_IMPORTED_MODULE_2__["default"])(showsIds);

(0,_modules_UImethods_js__WEBPACK_IMPORTED_MODULE_3__.displayItemsCount)((0,_modules_UImethods_js__WEBPACK_IMPORTED_MODULE_3__.itemsCount)(showsIds));
(0,_modules_UImethods_js__WEBPACK_IMPORTED_MODULE_3__.renderShows)(showsData);
(0,_modules_detailsButton_js__WEBPACK_IMPORTED_MODULE_4__["default"])();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/modules/APImethods.js":
/*!***********************************!*\
  !*** ./src/modules/APImethods.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const baseUrl = 'https://api.tvmaze.com/lookup/shows?imdb=';

const getShowsData = async (showsIds) => {
  const showsData = [];
  for (let i = 0; i < (showsIds.length); i += 1) {
    // eslint-disable-next-line max-len, no-await-in-loop
    await fetch(baseUrl + showsIds[i]).then((data) => data.json()).then((data) => showsData.push(data));
  }
  return showsData;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getShowsData);


/***/ }),

/***/ "./src/modules/UImethods.js":
/*!**********************************!*\
  !*** ./src/modules/UImethods.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayItemsCount": () => (/* binding */ displayItemsCount),
/* harmony export */   "itemsCount": () => (/* binding */ itemsCount),
/* harmony export */   "renderShows": () => (/* binding */ renderShows)
/* harmony export */ });
const renderShows = (showsData) => {
  document.querySelector('.showsContainer').innerHTML = '';
  showsData.forEach((show) => {
    document.querySelector('.showsContainer').innerHTML += `
    <div class="show-card">
    <h3>${show.name}</h3>
    <h4>${show.premiered.substring(0, 4)}</h4>
    <img src=${show.image.medium}  width="290" height="290"/>
    <p>${show.summary.substring(0, 300)}</p>
    <button type="button">Like!</button>
    <button type="button" id="${show.externals.imdb}">Details</button>
    </div>`;
  });
};

const itemsCount = (showsIds) => {
  return showsIds.length;
}

const displayItemsCount = (numberOfItems) => {
  const text = 'Shows ' + numberOfItems;
  document.querySelector('.showsLink').innerHTML = text;
};

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ "./src/modules/getData.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.js */ "./src/modules/form.js");
/* harmony import */ var _commentsCount_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commentsCount.js */ "./src/modules/commentsCount.js");




const comments = (obj) => {
  const child = document.querySelector('.popup-container');
  const h2 = document.createElement('h2');
  h2.className = 'comments';
  h2.innerText = 'Comments';
  child.appendChild(h2);
  const commentsContainer = document.createElement('div');
  commentsContainer.className = 'comments-container';
  child.appendChild(commentsContainer);

  (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj);
  (0,_form_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj);

  (0,_commentsCount_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (comments);


/***/ }),

/***/ "./src/modules/commentsCount.js":
/*!**************************************!*\
  !*** ./src/modules/commentsCount.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const commentsCount = async (obj) => {
  const requestURL = 'https:us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dnotAWJTR3nbocRUoECT/comments?item_id=';
  const response = await fetch(requestURL + obj.externals.imdb);
  const Obj = await response.json();
  const text = document.querySelector('.comments');
  text.innerText = ` Comments (${Object.keys(Obj).length})`;
  return Obj;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsCount);

/***/ }),

/***/ "./src/modules/detailsButton.js":
/*!**************************************!*\
  !*** ./src/modules/detailsButton.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.js */ "./src/modules/comments.js");


const baseUrl = 'https://api.tvmaze.com/lookup/shows?imdb=';

const popup = (Obj) => {
  const container = document.createElement('div');
  container.className = 'popup-container';

  const closeIcon = document.createElement('div');
  closeIcon.className = 'x-text';
  closeIcon.innerText = 'X';
  closeIcon.addEventListener('click', () => {
    container.remove();
  });
  container.appendChild(closeIcon);

  const fig = document.createElement('FIGURE');
  fig.className = 'show-image';
  container.appendChild(fig);

  const img = document.createElement('img');
  img.setAttribute('src', Obj.image.medium);
  img.setAttribute('width', 'auto');
  img.setAttribute('height', 'auto');

  fig.appendChild(img);

  const showname = document.createElement('div');
  showname.className = 'show-name';
  showname.innerText = Obj.name;
  container.appendChild(showname);

  document.body.appendChild(container);

  (0,_comments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Obj);
};

const retriveData = async (imdbId) => {
  const response = await fetch(baseUrl + imdbId);
  const Obj = await response.json();
  popup(Obj);
};

const detailsButton = () => {
  const btns = document.querySelectorAll('[id^=tt]');
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      retriveData(btn.id);
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (detailsButton);


/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _send_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send.js */ "./src/modules/send.js");


const form = (obj) => {
  const form = document.createElement('form');
  form.setAttribute('id', obj.externals.imdb);

  const FN = document.createElement('input');
  FN.setAttribute('type', 'text');
  FN.setAttribute('name', 'Name');
  FN.setAttribute('placeholder', 'Your Name');

  form.appendChild(FN);

  const FS = document.createElement('input');
  FS.setAttribute('type', 'text');
  FS.setAttribute('name', 'Insights');
  FS.setAttribute('placeholder', 'Your Insights');

  form.appendChild(FS);

  const submit = document.createElement('button');
  submit.setAttribute('type', 'submit');
  submit.innerText = 'Submit';

  form.appendChild(submit);

  const child = document.querySelector('.popup-container');

  const addComment = document.createElement('div');
  addComment.className = 'add-comment';
  addComment.innerText = 'Add Comment';

  child.appendChild(addComment);

  child.appendChild(form);

  form.addEventListener('submit', (e) => {
    const imdbId = e.submitter.parentElement.id;
    const container = document.querySelector('.comments-container');
    const count = document.querySelectorAll(`.${imdbId}`).length;
    e.preventDefault();
    const name = form.elements.Name.value;
    const insights = form.elements.Insights.value;
    if (name !== '' && insights !== '' && /[a-zA-Z]/.test(name)) {
      const myObject = {
        item_id: imdbId,
        username: name,
        comment: insights,
      };
      (0,_send_js__WEBPACK_IMPORTED_MODULE_0__["default"])(myObject);

      const text = document.querySelector('.comments');
      text.innerText = ` Comments (${count + 1})`;
      const div = document.createElement('div');
      div.className = imdbId;
      const today = new Date().toISOString().slice(0, 10);
      div.innerText = `${today} \b ${name}: ${insights}`;
      container.appendChild(div);

      form.elements.Name.value = '';
      form.elements.Insights.value = '';
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);


/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _populateComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./populateComments.js */ "./src/modules/populateComments.js");


const getData = async (obj) => {
  const imdbId = obj.externals.imdb;
  const requestURL = 'https:us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dnotAWJTR3nbocRUoECT/comments?item_id=';
  const response = await fetch(requestURL + imdbId);
  const Obj = await response.json();
  (0,_populateComments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(imdbId, Obj);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);


/***/ }),

/***/ "./src/modules/populateComments.js":
/*!*****************************************!*\
  !*** ./src/modules/populateComments.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const populateComments = (imdbId, ArrayObj) => {
  const container = document.querySelector('.comments-container');
  if (ArrayObj) {
    ArrayObj.forEach((item) => {
      const div = document.createElement('div');
      div.className = imdbId;
      div.innerText = `${item.creation_date} \b ${item.username}: ${item.comment}`;
      container.appendChild(div);
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populateComments);


/***/ }),

/***/ "./src/modules/send.js":
/*!*****************************!*\
  !*** ./src/modules/send.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const requestURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dnotAWJTR3nbocRUoECT/comments/';

const send = async (obj) => {
  await fetch(requestURL, {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (send);


/***/ }),

/***/ "./src/assets/tvmaze-logo.jpg":
/*!************************************!*\
  !*** ./src/assets/tvmaze-logo.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8056debe148931bb2174.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksYUFBYTtBQUNqRjtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLGlFQUFlLGdCQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNaaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QyxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBLGlFQUFlLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9BUEltZXRob2RzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9VSW1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2NvbW1lbnRzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jb21tZW50c0NvdW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9kZXRhaWxzQnV0dG9uLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9mb3JtLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9nZXREYXRhLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9wb3B1bGF0ZUNvbW1lbnRzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9zZW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubWFpbi1uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDIwcHggMDtcXG59XFxuXFxuLm1haW4tbmF2IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogNjBweDtcXG59XFxuXFxuLm1haW4tbmF2IHVsIGEge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5tYWluLW5hdiB1bCBhLnNlbGVjdGVkIHtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4ubWFpbi1uYXYgdWwgYTpob3ZlciB7XFxuICBjb2xvcjogYmx1ZTtcXG59XFxuXFxuLm1haW4tbmF2LWlubmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogOTAwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxufVxcblxcbi5yaWdodC1zaWRlLW1lbnVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zaG93c0NvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAyMHB4IDEwMHB4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBnYXA6IDEwMHB4O1xcbn1cXG5cXG4uc2hvdy1jYXJkIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogIzAwMDtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM2LCA0OSwgMzYsIDEpO1xcbiAgei1pbmRleDogOTk5OTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogNTB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcGFkZGluZzogMjRweDtcXG59XFxuXFxuLngtdGV4dCB7XFxuICB3aWR0aDogYXV0bztcXG4gIGNvbG9yOiB5ZWxsb3c7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNob3ctaW1hZ2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNob3ctaW1hZ2UgPiBpbWcge1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uc2hvdy1uYW1lIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGNvbG9yOiBibHVlO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2hvdy1kZXRhaWxzIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uY29tbWVudHMge1xcbiAgbWFyZ2luOiAyNHB4IDA7XFxuICBjb2xvcjogIzU1NWZmZjtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFkZC1jb21tZW50IHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjb2xvcjogIzAwZmYwMDtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciA+IGZvcm0ge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxLjVyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyID4gZm9ybSA+IGlucHV0IHtcXG4gIHdpZHRoOiAxNXJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciA+IGZvcm0gPiBpbnB1dDpudGgtY2hpbGQoMikge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHdpZHRoOiAyNXJlbTtcXG4gIGhlaWdodDogMTByZW07XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBjb2xvcjogb3JhbmdlO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyID4gZm9ybSA+IGJ1dHRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2IzOGQ4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogNHB4IGRvdWJsZSAjY2NjO1xcbiAgY29sb3I6ICNlZWU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiAycHg7XFxuICB3aWR0aDogOHJlbTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMC41cmVtO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyID4gZm9ybSA+IGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciA+IGZvcm0gPiBidXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGN5YW47XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMmRlZyk7XFxufVxcblxcbi5jb21tZW50cy1jb250YWluZXIgPiBkaXYge1xcbiAgY29sb3I6ICM0NTY3ODk7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbWFyZ2luLWxlZnQ6IDM1MHB4O1xcbn1cXG5cXG4uZm9vdGVyLWJvcmRlciB7XFxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuLnNob3dzTGluZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5tYWluLW5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMjBweCAwO1xcbn1cXG5cXG4ubWFpbi1uYXYgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xcbn1cXG5cXG4ubWFpbi1uYXYgdWwgYSB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLm1haW4tbmF2IHVsIGEuc2VsZWN0ZWQge1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbi5tYWluLW5hdiB1bCBhOmhvdmVyIHtcXG4gIGNvbG9yOiBibHVlO1xcbn1cXG5cXG4ubWFpbi1uYXYtaW5uZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA5MDBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuXFxuLnJpZ2h0LXNpZGUtbWVudXMge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNob3dzQ29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDIwcHggMTAwcHg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGdhcDogMTAwcHg7XFxufVxcblxcbi5zaG93LWNhcmQge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNSU7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiAjMDAwO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzYsIDQ5LCAzNiwgMSk7XFxuICB6LWluZGV4OiA5OTk5O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBwYWRkaW5nOiAyNHB4O1xcbn1cXG5cXG4ueC10ZXh0IHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgY29sb3I6IHllbGxvdztcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2hvdy1pbWFnZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc2hvdy1pbWFnZSA+IGltZyB7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5zaG93LW5hbWUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY29sb3I6IGJsdWU7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zaG93LWRldGFpbHMge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5jb21tZW50cyB7XFxuICBtYXJnaW46IDI0cHggMDtcXG4gIGNvbG9yOiAjNTU1ZmZmO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiAjMDBmZjAwO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyID4gZm9ybSB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEuNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgPiBmb3JtID4gaW5wdXQge1xcbiAgd2lkdGg6IDE1cmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyID4gZm9ybSA+IGlucHV0Om50aC1jaGlsZCgyKSB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgd2lkdGg6IDI1cmVtO1xcbiAgaGVpZ2h0OiAxMHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGNvbG9yOiBvcmFuZ2U7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgPiBmb3JtID4gYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3YjM4ZDg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiA0cHggZG91YmxlICNjY2M7XFxuICBjb2xvcjogI2VlZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIHdpZHRoOiA4cmVtO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAwLjVyZW07XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIgPiBmb3JtID4gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyID4gZm9ybSA+IGJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY3lhbjtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC0yZGVnKTtcXG59XFxuXFxuLmNvbW1lbnRzLWNvbnRhaW5lciA+IGRpdiB7XFxuICBjb2xvcjogIzQ1Njc4OTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBtYXJnaW4tbGVmdDogMzUwcHg7XFxufVxcblxcbi5mb290ZXItYm9yZGVyIHtcXG4gIHBhZGRpbmctbGVmdDogNTBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxuICBjb2xvcjogIzAwMDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG4uc2hvd3NMaW5lIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL3R2bWF6ZS1sb2dvLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIGNvZGUgPSBcIjwhRE9DVFlQRSBodG1sPlxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXG5cXG48aGVhZD5cXG4gIDxtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIj5cXG4gIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXFxcIj5cXG4gIDxtZXRhIGh0dHAtZXF1aXY9XFxcIlgtVUEtQ29tcGF0aWJsZVxcXCIgY29udGVudD1cXFwiaWU9ZWRnZVxcXCI+XFxuICA8dGl0bGU+SmF2YVNjcmlwdCBHcm91cCBDYXBzdG9uZSBQcm9qZWN0PC90aXRsZT5cXG48L2hlYWQ+XFxuXFxuPGJvZHk+XFxuICA8aGVhZGVyPlxcbiAgICA8bmF2IGNsYXNzPVxcXCJtYWluLW5hdlxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwibWFpbi1uYXYtaW5uZXJcXFwiPlxcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgPGEgaHJlZj1cXFwiaHR0cHM6Ly93d3cudHZtYXplLmNvbS9cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiByZWw9XFxcIm5vb3BlbmVyXFxcIj5cXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIHdpZHRoPVxcXCIxMDBcXFwiIGFsdD1cXFwic2NpLWZpIGxvZ29cXFwiIHRpdGxlPVxcXCJzY2ktZmkgbG9nb1xcXCIgLz5cXG4gICAgICAgICAgPC9hPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyaWdodC1zaWRlLW1lbnVzXFxcIj48L2Rpdj5cXG4gICAgICAgIDx1bD5cXG4gICAgICAgICAgPGxpIGNsYXNzPVxcXCJzaG93c0xpbmVcXFwiPjxhIGNsYXNzPVxcXCJzaG93c0xpbmtcXFwiIGhyZWY9J2h0dHBzOi8vd3d3LnR2bWF6ZS5jb20vc2hvd3MnIHRhcmdldD1cXFwiX2JsYW5rXFxcIiByZWw9XFxcIm5vb3BlbmVyXFxcIiB0aXRsZT1cXFwiR28gdG8gU2hvd3MgUGFnZVxcXCI+U2hvd3M8L2E+PC9saT5cXG4gICAgICAgICAgPGxpPjxhIGhyZWY9J2h0dHBzOi8vd3d3LnR2bWF6ZS5jb20vcGVvcGxlJyB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgcmVsPVxcXCJub29wZW5lclxcXCIgdGl0bGU9XFxcIkdvIHRvIFBlb3BsZSBQYWdlXFxcIj5QZW9wbGU8L2E+PC9saT5cXG4gICAgICAgICAgPGxpPjxhIGhyZWY9J2h0dHBzOi8vd3d3LnR2bWF6ZS5jb20vY291bnRkb3duJyB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgcmVsPVxcXCJub29wZW5lclxcXCIgdGl0bGU9XFxcIkdvIFRWIENvdW50ZG93biBQYWdlXFxcIj5UViBDb3VudGRvd248L2E+PC9saT5cXG4gICAgICAgIDwvdWw+XFxuICAgICAgICA8ZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvbmF2PlxcblxcbiAgPC9oZWFkZXI+XFxuXFxuICA8c2VjdGlvbiBjbGFzcz1cXFwianMtc2VjdGlvblxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNob3dzQ29udGFpbmVyXFxcIj48L2Rpdj5cXG4gIDwvc2VjdGlvbj5cXG5cXG4gIDxmb290ZXI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvb3Rlci1ib3JkZXJcXFwiPlxcbiAgICAgIDxwPkNyZWF0ZWQgYnkgSlVBTiBhbmQgUFJBVEFQIHVuZGVyIENDIGxpY2Vuc2U8L3A+XFxuICAgIDwvZGl2PlxcbiAgPC9mb290ZXI+XFxuXFxuPC9ib2R5PlxcblxcbjwvaHRtbD5cXG5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWF5YmVOZWVkUXVvdGVzICYmIC9bXFx0XFxuXFxmXFxyIFwiJz08PmBdLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9pbmRleC5odG1sJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGdldFNob3dzRGF0YSBmcm9tICcuL21vZHVsZXMvQVBJbWV0aG9kcy5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5SXRlbXNDb3VudCwgaXRlbXNDb3VudCwgcmVuZGVyU2hvd3N9IGZyb20gJy4vbW9kdWxlcy9VSW1ldGhvZHMuanMnO1xuaW1wb3J0IGRldGFpbHNCdXR0b24gZnJvbSAnLi9tb2R1bGVzL2RldGFpbHNCdXR0b24uanMnO1xuXG5jb25zdCBzaG93c0lkcyA9IFsndHQ1NDkxOTk0JywgJ3R0MDkwMzc0NycsICd0dDA3OTUxNzYnLCAndHQwMTg1OTA2JywgJ3R0NzM2NjMzOCcsICd0dDAzMDY0MTQnXTtcblxuY29uc3Qgc2hvd3NEYXRhID0gYXdhaXQgZ2V0U2hvd3NEYXRhKHNob3dzSWRzKTtcblxuZGlzcGxheUl0ZW1zQ291bnQoaXRlbXNDb3VudChzaG93c0lkcykpO1xucmVuZGVyU2hvd3Moc2hvd3NEYXRhKTtcbmRldGFpbHNCdXR0b24oKTtcbiIsImNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9sb29rdXAvc2hvd3M/aW1kYj0nO1xuXG5jb25zdCBnZXRTaG93c0RhdGEgPSBhc3luYyAoc2hvd3NJZHMpID0+IHtcbiAgY29uc3Qgc2hvd3NEYXRhID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgKHNob3dzSWRzLmxlbmd0aCk7IGkgKz0gMSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuLCBuby1hd2FpdC1pbi1sb29wXG4gICAgYXdhaXQgZmV0Y2goYmFzZVVybCArIHNob3dzSWRzW2ldKS50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSkudGhlbigoZGF0YSkgPT4gc2hvd3NEYXRhLnB1c2goZGF0YSkpO1xuICB9XG4gIHJldHVybiBzaG93c0RhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRTaG93c0RhdGE7XG4iLCJleHBvcnQgY29uc3QgcmVuZGVyU2hvd3MgPSAoc2hvd3NEYXRhKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93c0NvbnRhaW5lcicpLmlubmVySFRNTCA9ICcnO1xuICBzaG93c0RhdGEuZm9yRWFjaCgoc2hvdykgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93c0NvbnRhaW5lcicpLmlubmVySFRNTCArPSBgXG4gICAgPGRpdiBjbGFzcz1cInNob3ctY2FyZFwiPlxuICAgIDxoMz4ke3Nob3cubmFtZX08L2gzPlxuICAgIDxoND4ke3Nob3cucHJlbWllcmVkLnN1YnN0cmluZygwLCA0KX08L2g0PlxuICAgIDxpbWcgc3JjPSR7c2hvdy5pbWFnZS5tZWRpdW19ICB3aWR0aD1cIjI5MFwiIGhlaWdodD1cIjI5MFwiLz5cbiAgICA8cD4ke3Nob3cuc3VtbWFyeS5zdWJzdHJpbmcoMCwgMzAwKX08L3A+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+TGlrZSE8L2J1dHRvbj5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cIiR7c2hvdy5leHRlcm5hbHMuaW1kYn1cIj5EZXRhaWxzPC9idXR0b24+XG4gICAgPC9kaXY+YDtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgaXRlbXNDb3VudCA9IChzaG93c0lkcykgPT4ge1xuICByZXR1cm4gc2hvd3NJZHMubGVuZ3RoO1xufVxuXG5leHBvcnQgY29uc3QgZGlzcGxheUl0ZW1zQ291bnQgPSAobnVtYmVyT2ZJdGVtcykgPT4ge1xuICBjb25zdCB0ZXh0ID0gJ1Nob3dzICcgKyBudW1iZXJPZkl0ZW1zO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvd3NMaW5rJykuaW5uZXJIVE1MID0gdGV4dDtcbn07IiwiaW1wb3J0IGdldERhdGEgZnJvbSAnLi9nZXREYXRhLmpzJztcbmltcG9ydCBmb3JtIGZyb20gJy4vZm9ybS5qcyc7XG5pbXBvcnQgY29tbWVudHNDb3VudCBmcm9tICcuL2NvbW1lbnRzQ291bnQuanMnO1xuXG5jb25zdCBjb21tZW50cyA9IChvYmopID0+IHtcbiAgY29uc3QgY2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtY29udGFpbmVyJyk7XG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaDIuY2xhc3NOYW1lID0gJ2NvbW1lbnRzJztcbiAgaDIuaW5uZXJUZXh0ID0gJ0NvbW1lbnRzJztcbiAgY2hpbGQuYXBwZW5kQ2hpbGQoaDIpO1xuICBjb25zdCBjb21tZW50c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb21tZW50c0NvbnRhaW5lci5jbGFzc05hbWUgPSAnY29tbWVudHMtY29udGFpbmVyJztcbiAgY2hpbGQuYXBwZW5kQ2hpbGQoY29tbWVudHNDb250YWluZXIpO1xuXG4gIGdldERhdGEob2JqKTtcbiAgZm9ybShvYmopO1xuXG4gIGNvbW1lbnRzQ291bnQob2JqKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbW1lbnRzO1xuIiwiY29uc3QgY29tbWVudHNDb3VudCA9IGFzeW5jIChvYmopID0+IHtcbiAgY29uc3QgcmVxdWVzdFVSTCA9ICdodHRwczp1cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvZG5vdEFXSlRSM25ib2NSVW9FQ1QvY29tbWVudHM/aXRlbV9pZD0nO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3RVUkwgKyBvYmouZXh0ZXJuYWxzLmltZGIpO1xuICBjb25zdCBPYmogPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMnKTtcbiAgdGV4dC5pbm5lclRleHQgPSBgIENvbW1lbnRzICgke09iamVjdC5rZXlzKE9iaikubGVuZ3RofSlgO1xuICByZXR1cm4gT2JqO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbWVudHNDb3VudDsiLCJpbXBvcnQgY29tbWVudHMgZnJvbSAnLi9jb21tZW50cy5qcyc7XG5cbmNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9sb29rdXAvc2hvd3M/aW1kYj0nO1xuXG5jb25zdCBwb3B1cCA9IChPYmopID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSAncG9wdXAtY29udGFpbmVyJztcblxuICBjb25zdCBjbG9zZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2xvc2VJY29uLmNsYXNzTmFtZSA9ICd4LXRleHQnO1xuICBjbG9zZUljb24uaW5uZXJUZXh0ID0gJ1gnO1xuICBjbG9zZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29udGFpbmVyLnJlbW92ZSgpO1xuICB9KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlSWNvbik7XG5cbiAgY29uc3QgZmlnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRklHVVJFJyk7XG4gIGZpZy5jbGFzc05hbWUgPSAnc2hvdy1pbWFnZSc7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmaWcpO1xuXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBPYmouaW1hZ2UubWVkaXVtKTtcbiAgaW1nLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnYXV0bycpO1xuICBpbWcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnYXV0bycpO1xuXG4gIGZpZy5hcHBlbmRDaGlsZChpbWcpO1xuXG4gIGNvbnN0IHNob3duYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNob3duYW1lLmNsYXNzTmFtZSA9ICdzaG93LW5hbWUnO1xuICBzaG93bmFtZS5pbm5lclRleHQgPSBPYmoubmFtZTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNob3duYW1lKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29tbWVudHMoT2JqKTtcbn07XG5cbmNvbnN0IHJldHJpdmVEYXRhID0gYXN5bmMgKGltZGJJZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGJhc2VVcmwgKyBpbWRiSWQpO1xuICBjb25zdCBPYmogPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHBvcHVwKE9iaik7XG59O1xuXG5jb25zdCBkZXRhaWxzQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2lkXj10dF0nKTtcbiAgYnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICByZXRyaXZlRGF0YShidG4uaWQpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRldGFpbHNCdXR0b247XG4iLCJpbXBvcnQgc2VuZCBmcm9tICcuL3NlbmQuanMnO1xuXG5jb25zdCBmb3JtID0gKG9iaikgPT4ge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCBvYmouZXh0ZXJuYWxzLmltZGIpO1xuXG4gIGNvbnN0IEZOID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgRk4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgRk4uc2V0QXR0cmlidXRlKCduYW1lJywgJ05hbWUnKTtcbiAgRk4uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdZb3VyIE5hbWUnKTtcblxuICBmb3JtLmFwcGVuZENoaWxkKEZOKTtcblxuICBjb25zdCBGUyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIEZTLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIEZTLnNldEF0dHJpYnV0ZSgnbmFtZScsICdJbnNpZ2h0cycpO1xuICBGUy5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1lvdXIgSW5zaWdodHMnKTtcblxuICBmb3JtLmFwcGVuZENoaWxkKEZTKTtcblxuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgc3VibWl0LmlubmVyVGV4dCA9ICdTdWJtaXQnO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuICBjb25zdCBjaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1jb250YWluZXInKTtcblxuICBjb25zdCBhZGRDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFkZENvbW1lbnQuY2xhc3NOYW1lID0gJ2FkZC1jb21tZW50JztcbiAgYWRkQ29tbWVudC5pbm5lclRleHQgPSAnQWRkIENvbW1lbnQnO1xuXG4gIGNoaWxkLmFwcGVuZENoaWxkKGFkZENvbW1lbnQpO1xuXG4gIGNoaWxkLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBjb25zdCBpbWRiSWQgPSBlLnN1Ym1pdHRlci5wYXJlbnRFbGVtZW50LmlkO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cy1jb250YWluZXInKTtcbiAgICBjb25zdCBjb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2ltZGJJZH1gKS5sZW5ndGg7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG5hbWUgPSBmb3JtLmVsZW1lbnRzLk5hbWUudmFsdWU7XG4gICAgY29uc3QgaW5zaWdodHMgPSBmb3JtLmVsZW1lbnRzLkluc2lnaHRzLnZhbHVlO1xuICAgIGlmIChuYW1lICE9PSAnJyAmJiBpbnNpZ2h0cyAhPT0gJycgJiYgL1thLXpBLVpdLy50ZXN0KG5hbWUpKSB7XG4gICAgICBjb25zdCBteU9iamVjdCA9IHtcbiAgICAgICAgaXRlbV9pZDogaW1kYklkLFxuICAgICAgICB1c2VybmFtZTogbmFtZSxcbiAgICAgICAgY29tbWVudDogaW5zaWdodHMsXG4gICAgICB9O1xuICAgICAgc2VuZChteU9iamVjdCk7XG5cbiAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMnKTtcbiAgICAgIHRleHQuaW5uZXJUZXh0ID0gYCBDb21tZW50cyAoJHtjb3VudCArIDF9KWA7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRpdi5jbGFzc05hbWUgPSBpbWRiSWQ7XG4gICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgICBkaXYuaW5uZXJUZXh0ID0gYCR7dG9kYXl9IFxcYiAke25hbWV9OiAke2luc2lnaHRzfWA7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgICAgZm9ybS5lbGVtZW50cy5OYW1lLnZhbHVlID0gJyc7XG4gICAgICBmb3JtLmVsZW1lbnRzLkluc2lnaHRzLnZhbHVlID0gJyc7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm07XG4iLCJpbXBvcnQgcG9wdWxhdGVDb21tZW50cyBmcm9tICcuL3BvcHVsYXRlQ29tbWVudHMuanMnO1xuXG5jb25zdCBnZXREYXRhID0gYXN5bmMgKG9iaikgPT4ge1xuICBjb25zdCBpbWRiSWQgPSBvYmouZXh0ZXJuYWxzLmltZGI7XG4gIGNvbnN0IHJlcXVlc3RVUkwgPSAnaHR0cHM6dXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2Rub3RBV0pUUjNuYm9jUlVvRUNUL2NvbW1lbnRzP2l0ZW1faWQ9JztcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0VVJMICsgaW1kYklkKTtcbiAgY29uc3QgT2JqID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBwb3B1bGF0ZUNvbW1lbnRzKGltZGJJZCwgT2JqKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldERhdGE7XG4iLCJjb25zdCBwb3B1bGF0ZUNvbW1lbnRzID0gKGltZGJJZCwgQXJyYXlPYmopID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzLWNvbnRhaW5lcicpO1xuICBpZiAoQXJyYXlPYmopIHtcbiAgICBBcnJheU9iai5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRpdi5jbGFzc05hbWUgPSBpbWRiSWQ7XG4gICAgICBkaXYuaW5uZXJUZXh0ID0gYCR7aXRlbS5jcmVhdGlvbl9kYXRlfSBcXGIgJHtpdGVtLnVzZXJuYW1lfTogJHtpdGVtLmNvbW1lbnR9YDtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3B1bGF0ZUNvbW1lbnRzO1xuIiwiY29uc3QgcmVxdWVzdFVSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9kbm90QVdKVFIzbmJvY1JVb0VDVC9jb21tZW50cy8nO1xuXG5jb25zdCBzZW5kID0gYXN5bmMgKG9iaikgPT4ge1xuICBhd2FpdCBmZXRjaChyZXF1ZXN0VVJMLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqKSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgIH0sXG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VuZDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==