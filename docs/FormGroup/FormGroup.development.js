/*!
 * 
 * @license @rakuten-rex/form-group v1.2.0 2020-06-02
 * FormGroup/FormGroup.development.js
 * 
 * Copyright (c) 2018-present, Rakuten, Inc.
 * 
 * This source code is licensed under the MIT license found in the LICENSE file in the root directory of this source tree.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("rakutenRexFormGroup", ["react"], factory);
	else if(typeof exports === 'object')
		exports["rakutenRexFormGroup"] = factory(require("react"));
	else
		root["rakutenRexFormGroup"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(3);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(0);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(1);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react","umd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_ = __webpack_require__(2);
var external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_);

// CONCATENATED MODULE: ./src/FormGroup/props/margin.js
var MARGIN = {
  "default": null,
  top: 'rex-mt-',
  right: 'rex-mr-',
  bottom: 'rex-mb-',
  left: 'rex-ml-',
  x: 'rex-mx-',
  y: 'rex-my-',
  all: 'rex-m-'
};
var DEFAULT_MARGIN = null;
// CONCATENATED MODULE: ./src/helper.js
/* eslint-disable import/prefer-default-export */
function joinClassName(array) {
  return array.join(' ').replace(/\s+/g, ' ').trim();
}
// EXTERNAL MODULE: ./src/FormGroup/FormGroup.scss
var FormGroup = __webpack_require__(4);

// CONCATENATED MODULE: ./src/FormGroup/FormGroup.jsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormGroup_FormGroup; });



/* eslint-disable react/jsx-props-no-spreading */




function FormGroup_FormGroup(_ref) {
  var children = _ref.children,
      classNameDefault = _ref.classNameDefault,
      className = _ref.className,
      mt = _ref.mt,
      mr = _ref.mr,
      mb = _ref.mb,
      ml = _ref.ml,
      mx = _ref.mx,
      my = _ref.my,
      m = _ref.m,
      row = _ref.row,
      props = objectWithoutProperties_default()(_ref, ["children", "classNameDefault", "className", "mt", "mr", "mb", "ml", "mx", "my", "m", "row"]);

  // margin option condition
  var mtClass = mt && !my && !m ? MARGIN.top + mt : DEFAULT_MARGIN;
  var mrClass = mr && !mx && !m ? MARGIN.right + mr : DEFAULT_MARGIN;
  var mbClass = mb && !my && !m ? MARGIN.bottom + mb : DEFAULT_MARGIN;
  var mlClass = ml && !mx && !m ? MARGIN.left + ml : DEFAULT_MARGIN;
  var mxClass = mx && !m ? MARGIN.x + mx : DEFAULT_MARGIN;
  var myClass = my && !m ? MARGIN.y + my : DEFAULT_MARGIN;
  var mAllClass = m ? MARGIN.all + m : DEFAULT_MARGIN;
  var rowClass = row ? 'rex-form-group-row' : null;
  var classNameList = joinClassName([classNameDefault, rowClass, className, mtClass, mrClass, mbClass, mlClass, mxClass, myClass, mAllClass]);
  return external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement("div", extends_default()({
    className: classNameList
  }, props), children);
}
FormGroup_FormGroup.displayName = "FormGroup";
FormGroup_FormGroup.defaultProps = {
  children: null,
  row: false,
  classNameDefault: 'rex-form-group',
  className: '',
  mt: DEFAULT_MARGIN,
  mr: DEFAULT_MARGIN,
  mb: DEFAULT_MARGIN,
  ml: DEFAULT_MARGIN,
  mx: DEFAULT_MARGIN,
  my: DEFAULT_MARGIN,
  m: DEFAULT_MARGIN
};

/***/ })
/******/ ]);
});