/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/API.js":
/*!********************!*\
  !*** ./src/API.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _jquery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var _ServerActions = __webpack_require__(/*! ./actions/ServerActions */ "./src/actions/ServerActions.js");

var _ServerActions2 = _interopRequireDefault(_ServerActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API = {
	fetchLinks: function fetchLinks() {
		console.log('1. In API');

		// Ajax request to read /data/links

		(0, _jquery.post)("/graphql", {
			query: '{\n\t\t\t\tlinks {\n\t\t\t\t\t_id,\n\t\t\t\t\ttitle,\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t}'
		}).done(function (resp) {
			_ServerActions2.default.receiveLinks(resp.data.links);
		});
	}
};

exports.default = API;

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Main = __webpack_require__(/*! ./components/Main */ "./src/components/Main.js");

var _Main2 = _interopRequireDefault(_Main);

var _reactRelayClassic = __webpack_require__(/*! react-relay/react-relay-classic */ "./node_modules/react-relay/react-relay-classic.js");

var _reactRelayClassic2 = _interopRequireDefault(_reactRelayClassic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_Main2.default, null), document.getElementById('react'));

console.log(function () {
	return {
		children: [{
			fieldName: 'title',
			kind: 'Field',
			metadata: {},
			type: 'String'
		}],
		fieldName: 'links',
		kind: 'Query',
		metadata: {
			isPlural: true
		},
		name: 'Test',
		type: 'Link'
	};
}());

/***/ }),

/***/ "./src/AppDispatcher.js":
/*!******************************!*\
  !*** ./src/AppDispatcher.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flux = __webpack_require__(/*! flux */ "./node_modules/flux/index.js");

var _flux2 = _interopRequireDefault(_flux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppDispatcher = new _flux2.default.Dispatcher();

exports.default = AppDispatcher;

/***/ }),

/***/ "./src/Constants.js":
/*!**************************!*\
  !*** ./src/Constants.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var ActionTypes = exports.ActionTypes = {
	RECEIVE_LINKS: 'RECEIVE_LINKS'
};

/***/ }),

/***/ "./src/actions/ServerActions.js":
/*!**************************************!*\
  !*** ./src/actions/ServerActions.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _AppDispatcher = __webpack_require__(/*! ../AppDispatcher */ "./src/AppDispatcher.js");

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var _Constants = __webpack_require__(/*! ../Constants */ "./src/Constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ServerActions = {
	receiveLinks: function receiveLinks(links) {
		console.log("2. In ServerActions");
		_AppDispatcher2.default.dispatch({
			actionType: _Constants.ActionTypes.RECEIVE_LINKS,
			links: links
		});
	}
};

exports.default = ServerActions;

/***/ }),

/***/ "./src/components/Main.js":
/*!********************************!*\
  !*** ./src/components/Main.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _API = __webpack_require__(/*! ../API */ "./src/API.js");

var _API2 = _interopRequireDefault(_API);

var _LinkStore = __webpack_require__(/*! ../stores/LinkStore */ "./src/stores/LinkStore.js");

var _LinkStore2 = _interopRequireDefault(_LinkStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _getAppState = function _getAppState() {
	return { links: _LinkStore2.default.getAll() };
};

var Main = function (_React$Component) {
	_inherits(Main, _React$Component);

	function Main() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Main);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Main.__proto__ || Object.getPrototypeOf(Main)).call.apply(_ref, [this].concat(args))), _this), _this.state = _getAppState(), _this.onChange = function () {
			console.log('4. In OnChange In the view');
			_this.setState(_getAppState());
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Main, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_API2.default.fetchLinks();
			_LinkStore2.default.on('change', this.onChange);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_LinkStore2.default.removeListener('change', this.onChange);
		}
	}, {
		key: 'render',
		value: function render() {
			var content = this.state.links.slice(0, this.props.limit).map(function (link) {
				return _react2.default.createElement(
					'li',
					{ key: link._id },
					_react2.default.createElement(
						'a',
						{ href: link.url },
						link.title
					)
				);
			});
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h3',
					null,
					'Links'
				),
				_react2.default.createElement(
					'ul',
					null,
					content
				)
			);
		}
	}]);

	return Main;
}(_react2.default.Component);

Main.propTypes = {
	limit: _propTypes2.default.number
};
Main.defaultProps = {
	limit: 2
};
exports.default = Main;

/***/ }),

/***/ "./src/stores/LinkStore.js":
/*!*********************************!*\
  !*** ./src/stores/LinkStore.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AppDispatcher = __webpack_require__(/*! ../AppDispatcher */ "./src/AppDispatcher.js");

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var _Constants = __webpack_require__(/*! ../Constants */ "./src/Constants.js");

var _events = __webpack_require__(/*! events */ "./node_modules/node-libs-browser/node_modules/events/events.js");

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _links = [];

var LinkStore = function (_EventEmitter) {
	_inherits(LinkStore, _EventEmitter);

	function LinkStore(props) {
		_classCallCheck(this, LinkStore);

		var _this = _possibleConstructorReturn(this, (LinkStore.__proto__ || Object.getPrototypeOf(LinkStore)).call(this, props));

		_AppDispatcher2.default.register(function (action) {
			switch (action.actionType) {
				case _Constants.ActionTypes.RECEIVE_LINKS:
					console.log('3. In Store');
					_links = action.links;
					_this.emit('change');
					break;
				default:
				// do nothing
			}
		});
		return _this;
	}

	_createClass(LinkStore, [{
		key: 'getAll',
		value: function getAll() {
			return _links;
		}
	}]);

	return LinkStore;
}(_events2.default);

exports.default = new LinkStore();

/***/ }),

/***/ 0:
/*!**************************!*\
  !*** multi ./src/App.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/App.js */"./src/App.js");


/***/ })

/******/ });
//# sourceMappingURL=app.js.map