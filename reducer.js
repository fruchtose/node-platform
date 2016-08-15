(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash/lang"), require("./actions.js"), require("./pageUtils.js"), require("./merge.js"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash/lang", "./actions.js", "./pageUtils.js", "./merge.js"], factory);
	else if(typeof exports === 'object')
		exports["reducer.js"] = factory(require("lodash/lang"), require("./actions.js"), require("./pageUtils.js"), require("./merge.js"));
	else
		root["reducer.js"] = factory(root["lodash/lang"], root["./actions.js"], root["./pageUtils.js"], root["./merge.js"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_322__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _lang = __webpack_require__(12);

	var _merge = __webpack_require__(322);

	var _merge2 = _interopRequireDefault(_merge);

	var _pageUtils = __webpack_require__(14);

	var _actions = __webpack_require__(13);

	var actions = _interopRequireWildcard(_actions);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var DEFAULT = {
	  currentPageIndex: -1,
	  history: [],
	  currentPage: {},
	  shell: false
	};

	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? DEFAULT : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  switch (action.type) {
	    case actions.SET_STATUS:
	      {
	        var pageData = (0, _merge2.default)(state.currentPage, { status: action.payload.status });
	        var history = [].concat(_toConsumableArray(state.history));
	        history[state.currentPageIndex] = pageData;

	        return _extends({}, state, { history: history, currentPage: pageData });
	      }

	    case actions.SET_PAGE:
	      {
	        var referrerFromHistory = !(0, _lang.isEmpty)(state.currentPage) ? (0, _pageUtils.urlFromPage)(state.currentPage) : '';

	        var _action$payload = action.payload;
	        var url = _action$payload.url;
	        var urlParams = _action$payload.urlParams;
	        var queryParams = _action$payload.queryParams;
	        var hashParams = _action$payload.hashParams;
	        var _action$payload$refer = _action$payload.referrer;
	        var referrer = _action$payload$refer === undefined ? referrerFromHistory : _action$payload$refer;
	        var _action$payload$statu = _action$payload.status;
	        var status = _action$payload$statu === undefined ? 200 : _action$payload$statu;


	        var relevantHistory = state.history.slice(0, state.currentPageIndex + 1);
	        var _pageData = { url: url, urlParams: urlParams, queryParams: queryParams, hashParams: hashParams, referrer: referrer, status: status };

	        return _extends({}, state, {
	          currentPageIndex: state.currentPageIndex + 1,
	          history: relevantHistory.concat([_pageData]),
	          currentPage: _pageData
	        });
	      }

	    case actions.GOTO_PAGE_INDEX:
	      {
	        var pageIndex = action.payload.pageIndex;


	        return _extends({}, state, {
	          currentPageIndex: pageIndex,
	          currentPage: state.history[pageIndex]
	        });
	      }

	    case actions.SET_SHELL:
	      {
	        return (0, _merge2.default)(state, {
	          shell: action.shell
	        });
	      }

	    default:
	      return state;
	  }
	};

/***/ },

/***/ 12:
/***/ function(module, exports) {

	module.exports = require("lodash/lang");

/***/ },

/***/ 13:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ },

/***/ 14:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ },

/***/ 322:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_322__;

/***/ }

/******/ })
});
;