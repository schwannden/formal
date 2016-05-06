/******/ (function(modules) { // webpackBootstrap
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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _routes = __webpack_require__(1);

	var _routes2 = _interopRequireDefault(_routes);

	var _globalRouter = __webpack_require__(78);

	var _globalRouter2 = _interopRequireDefault(_globalRouter);

	module.exports = (0, _globalRouter2['default'])(_routes2['default']);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reactRouter = __webpack_require__(2);

	var _path_helper = __webpack_require__(32);

	var _path_helper2 = _interopRequireDefault(_path_helper);

	var _reactRouterLibBrowserHistory = __webpack_require__(33);

	var _reactRouterLibBrowserHistory2 = _interopRequireDefault(_reactRouterLibBrowserHistory);

	var _reactRouterLibHashHistory = __webpack_require__(35);

	var _reactRouterLibHashHistory2 = _interopRequireDefault(_reactRouterLibHashHistory);

	var _routesHomepage = __webpack_require__(36);

	var _routesHomepage2 = _interopRequireDefault(_routesHomepage);

	var _routesQuiz = __webpack_require__(38);

	var _routesQuiz2 = _interopRequireDefault(_routesQuiz);

	var _routesForum = __webpack_require__(59);

	var _routesForum2 = _interopRequireDefault(_routesForum);

	var _routesHistory = __webpack_require__(68);

	var _routesHistory2 = _interopRequireDefault(_routesHistory);

	var _routesCalendar = __webpack_require__(71);

	var _routesCalendar2 = _interopRequireDefault(_routesCalendar);

	var _routesProfile = __webpack_require__(72);

	var _routesProfile2 = _interopRequireDefault(_routesProfile);

	var _routesLogin = __webpack_require__(73);

	var _routesLogin2 = _interopRequireDefault(_routesLogin);

	var _routesSignup = __webpack_require__(76);

	var _routesSignup2 = _interopRequireDefault(_routesSignup);

	var _routesLock = __webpack_require__(77);

	var _routesLock2 = _interopRequireDefault(_routesLock);

	exports['default'] = function (withHistory, onUpdate) {
	  var history = withHistory ? Modernizr.history ? new _reactRouterLibBrowserHistory2['default']() : new _reactRouterLibHashHistory2['default']() : null;
	  return React.createElement(
	    _reactRouter.Router,
	    { history: history, onUpdate: onUpdate },
	    React.createElement(_reactRouter.Route, { path: '/', component: _routesHomepage2['default'] }),
	    React.createElement(_reactRouter.Route, { path: (0, _path_helper2['default'])('/quiz'), component: _routesQuiz2['default'] }),
	    React.createElement(_reactRouter.Route, { path: (0, _path_helper2['default'])('/forum'), component: _routesForum2['default'] }),
	    React.createElement(_reactRouter.Route, { path: (0, _path_helper2['default'])('/history'), component: _routesHistory2['default'] }),
	    React.createElement(_reactRouter.Route, { path: (0, _path_helper2['default'])('/calendar'), component: _routesCalendar2['default'] }),
	    React.createElement(_reactRouter.Route, { path: '/login', component: _routesLogin2['default'] }),
	    React.createElement(_reactRouter.Route, { path: '/signup', component: _routesSignup2['default'] }),
	    React.createElement(_reactRouter.Route, { path: (0, _path_helper2['default'])('/profile'), component: _routesProfile2['default'] }),
	    React.createElement(_reactRouter.Route, { path: (0, _path_helper2['default'])('/lock'), component: _routesLock2['default'] })
	  );
	};

	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* components */
	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Router2 = __webpack_require__(3);

	var _Router3 = _interopRequireDefault(_Router2);

	exports.Router = _Router3['default'];

	var _Link2 = __webpack_require__(26);

	var _Link3 = _interopRequireDefault(_Link2);

	exports.Link = _Link3['default'];

	/* components (configuration) */

	var _Redirect2 = __webpack_require__(27);

	var _Redirect3 = _interopRequireDefault(_Redirect2);

	exports.Redirect = _Redirect3['default'];

	var _Route2 = __webpack_require__(28);

	var _Route3 = _interopRequireDefault(_Route2);

	exports.Route = _Route3['default'];

	/* mixins */

	var _Navigation2 = __webpack_require__(29);

	var _Navigation3 = _interopRequireDefault(_Navigation2);

	exports.Navigation = _Navigation3['default'];

	var _TransitionHook2 = __webpack_require__(30);

	var _TransitionHook3 = _interopRequireDefault(_TransitionHook2);

	exports.TransitionHook = _TransitionHook3['default'];

	var _State2 = __webpack_require__(31);

	var _State3 = _interopRequireDefault(_State2);

	exports.State = _State3['default'];

	/* utils */

	var _RouteUtils = __webpack_require__(9);

	exports.createRoutesFromReactChildren = _RouteUtils.createRoutesFromReactChildren;

	var _PropTypes2 = __webpack_require__(17);

	var _PropTypes3 = _interopRequireDefault(_PropTypes2);

	exports.PropTypes = _PropTypes3['default'];

	var _Router4 = _interopRequireDefault(_Router2);

	exports['default'] = _Router4['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _warning = __webpack_require__(5);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(7);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _AsyncUtils = __webpack_require__(8);

	var _RouteUtils = __webpack_require__(9);

	var _RoutingUtils = __webpack_require__(10);

	var _PropTypes = __webpack_require__(17);

	var _RouterContextMixin = __webpack_require__(22);

	var _RouterContextMixin2 = _interopRequireDefault(_RouterContextMixin);

	var _ScrollManagementMixin = __webpack_require__(23);

	var _ScrollManagementMixin2 = _interopRequireDefault(_ScrollManagementMixin);

	var _Location = __webpack_require__(18);

	var _Transition = __webpack_require__(25);

	var _Transition2 = _interopRequireDefault(_Transition);

	var _React$PropTypes = _react2['default'].PropTypes;
	var arrayOf = _React$PropTypes.arrayOf;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	function runTransition(prevState, routes, location, hooks, callback) {
	  var transition = new _Transition2['default']();

	  (0, _RoutingUtils.getState)(routes, location, function (error, nextState) {
	    if (error || nextState == null || transition.isCancelled) {
	      callback(error, null, transition);
	    } else {
	      nextState.location = location;

	      var transitionHooks = (0, _RoutingUtils.getTransitionHooks)(prevState, nextState);
	      if (Array.isArray(hooks)) transitionHooks.unshift.apply(transitionHooks, hooks);

	      (0, _AsyncUtils.loopAsync)(transitionHooks.length, function (index, next, done) {
	        transitionHooks[index](nextState, transition, function (error) {
	          if (error || transition.isCancelled) {
	            done(error); // No need to continue.
	          } else {
	            next();
	          }
	        });
	      }, function (error) {
	        if (error || transition.isCancelled) {
	          callback(error, null, transition);
	        } else {
	          (0, _RoutingUtils.getComponents)(nextState.branch, function (error, components) {
	            if (error || transition.isCancelled) {
	              callback(error, null, transition);
	            } else {
	              nextState.components = components;
	              callback(null, nextState, transition);
	            }
	          });
	        }
	      });
	    }
	  });
	}

	var Router = _react2['default'].createClass({
	  displayName: 'Router',

	  mixins: [_RouterContextMixin2['default'], _ScrollManagementMixin2['default']],

	  statics: {

	    /**
	     * Runs a transition to the given location using the given routes and
	     * transition hooks (optional) and calls callback(error, state, transition)
	     * when finished. This is primarily useful for server-side rendering.
	     */
	    run: function run(routes, location, transitionHooks, callback) {
	      if (typeof transitionHooks === 'function') {
	        callback = transitionHooks;
	        transitionHooks = null;
	      }

	      (0, _invariant2['default'])(typeof callback === 'function', 'Router.run needs a callback');

	      runTransition(null, routes, location, transitionHooks, callback);
	    }

	  },

	  propTypes: {
	    createElement: func.isRequired,
	    onAbort: func,
	    onError: func,
	    onUpdate: func,

	    // Client-side
	    history: _PropTypes.history,
	    routes: _PropTypes.routes,
	    // Routes may also be given as children (JSX)
	    children: _PropTypes.routes,

	    // Server-side
	    location: _PropTypes.location,
	    branch: _PropTypes.routes,
	    params: object,
	    components: arrayOf(_PropTypes.components)
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      createElement: _react.createElement
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      isTransitioning: false,
	      location: null,
	      branch: null,
	      params: null,
	      components: null
	    };
	  },

	  _updateState: function _updateState(location) {
	    var _this = this;

	    (0, _invariant2['default'])((0, _Location.isLocation)(location), 'A <Router> needs a valid Location');

	    var hooks = this.transitionHooks;
	    if (hooks) hooks = hooks.map(function (hook) {
	      return (0, _RoutingUtils.createTransitionHook)(hook, _this);
	    });

	    this.setState({ isTransitioning: true });

	    runTransition(this.state, this.routes, location, hooks, function (error, state, transition) {
	      if (error) {
	        _this.handleError(error);
	      } else if (transition.isCancelled) {
	        if (transition.redirectInfo) {
	          var _transition$redirectInfo = transition.redirectInfo;
	          var pathname = _transition$redirectInfo.pathname;
	          var query = _transition$redirectInfo.query;
	          var state = _transition$redirectInfo.state;

	          _this.replaceWith(pathname, query, state);
	        } else {
	          (0, _invariant2['default'])(_this.state.location, 'You may not abort the initial transition');

	          _this.handleAbort(transition.abortReason);
	        }
	      } else if (state == null) {
	        (0, _warning2['default'])(false, 'Location "%s" did not match any routes', location.pathname);
	      } else {
	        _this.setState(state, _this.props.onUpdate);
	      }

	      _this.setState({ isTransitioning: false });
	    });
	  },

	  /**
	   * Adds a transition hook that runs before all route hooks in a
	   * transition. The signature is the same as route transition hooks.
	   */
	  addTransitionHook: function addTransitionHook(hook) {
	    if (!this.transitionHooks) this.transitionHooks = [];

	    this.transitionHooks.push(hook);
	  },

	  /**
	   * Removes the given transition hook.
	   */
	  removeTransitionHook: function removeTransitionHook(hook) {
	    if (this.transitionHooks) this.transitionHooks = this.transitionHooks.filter(function (h) {
	      return h !== hook;
	    });
	  },

	  handleAbort: function handleAbort(reason) {
	    if (this.props.onAbort) {
	      this.props.onAbort.call(this, reason);
	    } else {
	      // The best we can do here is goBack so the location state reverts
	      // to what it was. However, we also set a flag so that we know not
	      // to run through _updateState again since state did not change.
	      this._ignoreNextHistoryChange = true;
	      this.goBack();
	    }
	  },

	  handleError: function handleError(error) {
	    if (this.props.onError) {
	      this.props.onError.call(this, error);
	    } else {
	      // Throw errors by default so we don't silently swallow them!
	      throw error; // This error probably originated in getChildRoutes or getComponents.
	    }
	  },

	  handleHistoryChange: function handleHistoryChange() {
	    if (this._ignoreNextHistoryChange) {
	      this._ignoreNextHistoryChange = false;
	    } else {
	      this._updateState(this.props.history.location);
	    }
	  },

	  componentWillMount: function componentWillMount() {
	    var _props = this.props;
	    var history = _props.history;
	    var routes = _props.routes;
	    var children = _props.children;
	    var location = _props.location;
	    var branch = _props.branch;
	    var params = _props.params;
	    var components = _props.components;

	    if (history) {
	      (0, _invariant2['default'])(routes || children, 'Client-side <Router>s need routes. Try using <Router routes> or ' + 'passing your routes as nested <Route> children');

	      this.routes = (0, _RouteUtils.createRoutes)(routes || children);

	      if (typeof history.setup === 'function') history.setup();

	      // We need to listen first in case we redirect immediately.
	      if (history.addChangeListener) history.addChangeListener(this.handleHistoryChange);

	      this._updateState(history.location);
	    } else {
	      (0, _invariant2['default'])(location && branch && params && components, 'Server-side <Router>s need location, branch, params, and components ' + 'props. Try using Router.run to get all the props you need');

	      this.setState({ location: location, branch: branch, params: params, components: components });
	    }
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    (0, _invariant2['default'])(this.props.history === nextProps.history, '<Router history> may not be changed');

	    if (nextProps.history) {
	      var currentRoutes = this.props.routes || this.props.children;
	      var nextRoutes = nextProps.routes || nextProps.children;

	      if (currentRoutes !== nextRoutes) {
	        this.routes = (0, _RouteUtils.createRoutes)(nextRoutes);

	        // Call this here because _updateState
	        // uses this.routes to determine state.
	        if (nextProps.history.location) this._updateState(nextProps.history.location);
	      }
	    }
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    var history = this.props.history;

	    if (history && history.removeChangeListener) history.removeChangeListener(this.handleHistoryChange);
	  },

	  _createElement: function _createElement(component, props) {
	    return typeof component === 'function' ? this.props.createElement(component, props) : null;
	  },

	  render: function render() {
	    var _this2 = this;

	    var _state = this.state;
	    var branch = _state.branch;
	    var params = _state.params;
	    var components = _state.components;

	    var element = null;

	    if (components) {
	      element = components.reduceRight(function (element, components, index) {
	        if (components == null) return element; // Don't create new children; use the grandchildren.

	        var route = branch[index];
	        var routeParams = (0, _RoutingUtils.getRouteParams)(route, params);
	        var props = _extends({}, _this2.state, { route: route, routeParams: routeParams });

	        if ((0, _react.isValidElement)(element)) {
	          props.children = element;
	        } else if (element) {
	          // In render, do var { header, sidebar } = this.props;
	          _extends(props, element);
	        }

	        if (typeof components === 'object') {
	          var elements = {};

	          for (var key in components) if (components.hasOwnProperty(key)) elements[key] = _this2._createElement(components[key], props);

	          return elements;
	        }

	        return _this2._createElement(components, props);
	      }, element);
	    }

	    (0, _invariant2['default'])(element === null || element === false || (0, _react.isValidElement)(element), 'The root route must render a single element');

	    return element;
	  }

	});

	exports['default'] = Router;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var __DEV__ = process.env.NODE_ENV !== 'production';

	var warning = function() {};

	if (__DEV__) {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.loopAsync = loopAsync;
	exports.mapAsync = mapAsync;
	exports.hashAsync = hashAsync;

	function loopAsync(turns, work, callback) {
	  var currentTurn = 0;
	  var isDone = false;

	  function done() {
	    isDone = true;
	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) return;

	    if (currentTurn < turns) {
	      currentTurn += 1;
	      work.call(this, currentTurn - 1, next, done);
	    } else {
	      done.apply(this, arguments);
	    }
	  }

	  next();
	}

	function mapAsync(array, work, callback) {
	  var length = array.length;
	  var values = [];

	  if (length === 0) return callback(null, values);

	  var isDone = false;
	  var doneCount = 0;

	  function done(index, error, value) {
	    if (isDone) return;

	    if (error) {
	      isDone = true;
	      callback(error);
	    } else {
	      values[index] = value;

	      isDone = ++doneCount === length;

	      if (isDone) callback(null, values);
	    }
	  }

	  array.forEach(function (item, index) {
	    work(item, index, function (error, value) {
	      done(index, error, value);
	    });
	  });
	}

	function hashAsync(object, work, callback) {
	  var keys = Object.keys(object);

	  mapAsync(keys, function (key, index, callback) {
	    work(object[key], callback);
	  }, function (error, valuesArray) {
	    if (error) {
	      callback(error);
	    } else {
	      var values = valuesArray.reduce(function (memo, results, index) {
	        memo[keys[index]] = results;
	        return memo;
	      }, {});

	      callback(null, values);
	    }
	  });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.isReactChildren = isReactChildren;
	exports.createRouteFromReactElement = createRouteFromReactElement;
	exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
	exports.createRoutes = createRoutes;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _warning = __webpack_require__(5);

	var _warning2 = _interopRequireDefault(_warning);

	function isValidChild(object) {
	  return object == null || (0, _react.isValidElement)(object);
	}

	function isReactChildren(object) {
	  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
	}

	function checkPropTypes(componentName, propTypes, props) {
	  componentName = componentName || 'UnknownComponent';

	  for (var propName in propTypes) {
	    if (propTypes.hasOwnProperty(propName)) {
	      var error = propTypes[propName](props, propName, componentName);

	      if (error instanceof Error) (0, _warning2['default'])(false, error.message);
	    }
	  }
	}

	function createRouteFromReactElement(element) {
	  var type = element.type;
	  var route = _extends({}, type.defaultProps, element.props);

	  if (type.propTypes) checkPropTypes(type.displayName || type.name, type.propTypes, route);

	  if (route.children) {
	    route.childRoutes = createRoutesFromReactChildren(route.children);
	    delete route.children;
	  }

	  return route;
	}

	/**
	 * Creates and returns a routes object from the given ReactChildren. JSX
	 * provides a convenient way to visualize how routes in the hierarchy are
	 * nested.
	 *
	 *   import { Route, createRoutesFromReactChildren } from 'react-router';
	 *   
	 *   var routes = createRoutesFromReactChildren(
	 *     <Route component={App}>
	 *       <Route path="home" component={Dashboard}/>
	 *       <Route path="news" component={NewsFeed}/>
	 *     </Route>
	 *   );
	 *
	 * Note: This method is automatically used when you provide <Route> children
	 * to a <Router> component.
	 */

	function createRoutesFromReactChildren(children) {
	  var routes = [];

	  _react2['default'].Children.forEach(children, function (element) {
	    if ((0, _react.isValidElement)(element)) {
	      // Component classes may have a static create* method.
	      if (element.type.createRouteFromReactElement) {
	        routes.push(element.type.createRouteFromReactElement(element));
	      } else {
	        routes.push(createRouteFromReactElement(element));
	      }
	    }
	  });

	  return routes;
	}

	/**
	 * Creates and returns an array of routes from the given object which
	 * may be a JSX route, a plain object route, or an array of either.
	 */

	function createRoutes(routes) {
	  if (isReactChildren(routes)) {
	    routes = createRoutesFromReactChildren(routes);
	  } else if (!Array.isArray(routes)) {
	    routes = [routes];
	  }

	  return routes;
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.getState = getState;
	exports.createTransitionHook = createTransitionHook;
	exports.getTransitionHooks = getTransitionHooks;
	exports.getComponents = getComponents;
	exports.getRouteParams = getRouteParams;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(7);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(9);

	var _URLUtils = __webpack_require__(11);

	var _AsyncUtils = __webpack_require__(8);

	function getChildRoutes(route, locationState, callback) {
	  if (route.childRoutes) {
	    callback(null, route.childRoutes);
	  } else if (route.getChildRoutes) {
	    route.getChildRoutes(locationState, callback);
	  } else {
	    callback();
	  }
	}

	function getIndexRoute(route, locationState, callback) {
	  if (route.indexRoute) {
	    callback(null, route.indexRoute);
	  } else if (route.getIndexRoute) {
	    route.getIndexRoute(callback, locationState);
	  } else {
	    callback();
	  }
	}

	function assignParams(params, paramNames, paramValues) {
	  return paramNames.reduceRight(function (params, paramName, index) {
	    var paramValue = paramValues[index];

	    if (Array.isArray(params[paramName])) {
	      params[paramName].unshift(paramValue);
	    } else if (paramName in params) {
	      params[paramName] = [paramValue, params[paramName]];
	    } else {
	      params[paramName] = paramValue;
	    }

	    return params;
	  }, params);
	}

	function createParams(paramNames, paramValues) {
	  return assignParams({}, paramNames, paramValues);
	}

	function matchRouteDeep(route, pathname, locationState, callback) {
	  var _matchPattern = (0, _URLUtils.matchPattern)(route.path, pathname);

	  var remainingPathname = _matchPattern.remainingPathname;
	  var paramNames = _matchPattern.paramNames;
	  var paramValues = _matchPattern.paramValues;

	  var isExactMatch = remainingPathname === '';

	  if (isExactMatch && route.path) {
	    var params = createParams(paramNames, paramValues);
	    var branch = [route];

	    getIndexRoute(route, locationState, function (error, indexRoute) {
	      if (error) {
	        callback(error);
	      } else {
	        if (indexRoute) branch.push(indexRoute);

	        callback(null, { params: params, branch: branch });
	      }
	    });
	  } else if (remainingPathname != null) {
	    // This route matched at least some of the path.
	    getChildRoutes(route, locationState, function (error, childRoutes) {
	      if (error) {
	        callback(error);
	      } else if (childRoutes) {
	        // Check the child routes to see if any of them match.
	        matchRoutes(childRoutes, remainingPathname, locationState, function (error, match) {
	          if (error) {
	            callback(error);
	          } else if (match) {
	            // A child route matched! Augment the match and pass it up the stack.
	            assignParams(match.params, paramNames, paramValues);
	            match.branch.unshift(route);
	            callback(null, match);
	          } else {
	            callback();
	          }
	        });
	      } else {
	        callback();
	      }
	    });
	  } else {
	    callback();
	  }
	}

	function matchRoutes(routes, pathname, locationState, callback) {
	  routes = (0, _RouteUtils.createRoutes)(routes);

	  (0, _AsyncUtils.loopAsync)(routes.length, function (index, next, done) {
	    matchRouteDeep(routes[index], pathname, locationState, function (error, match) {
	      if (error || match) {
	        done(error, match);
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}

	/**
	 * Asynchronously matches the given location to a set of routes and calls
	 * callback(error, state) when finished. The state object may have the
	 * following properties:
	 *
	 * - branch       An array of routes that matched, in hierarchical order
	 * - params       An object of URL parameters
	 *
	 * Note: This operation may return synchronously if no routes have an
	 * asynchronous getChildRoutes method.
	 */

	function getState(routes, location, callback) {
	  matchRoutes(routes, (0, _URLUtils.stripLeadingSlashes)(location.pathname), location.state, callback);
	}

	function routeParamsChanged(route, prevState, nextState) {
	  if (!route.path) return false;

	  var paramNames = (0, _URLUtils.getParamNames)(route.path);

	  return paramNames.some(function (paramName) {
	    return prevState.params[paramName] !== nextState.params[paramName];
	  });
	}

	/**
	 * Runs a diff on the two router states and returns an array of two
	 * arrays: 1) the routes that we are leaving, starting with the leaf
	 * route and 2) the routes that we are entering, ending with the leaf
	 * route.
	 */
	function computeDiff(prevState, nextState) {
	  var fromRoutes = prevState && prevState.branch;
	  var toRoutes = nextState.branch;

	  var leavingRoutes, enteringRoutes;
	  if (fromRoutes) {
	    leavingRoutes = fromRoutes.filter(function (route) {
	      return toRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
	    });

	    // onLeave hooks start at the leaf route.
	    leavingRoutes.reverse();

	    enteringRoutes = toRoutes.filter(function (route) {
	      return fromRoutes.indexOf(route) === -1 || leavingRoutes.indexOf(route) !== -1;
	    });
	  } else {
	    leavingRoutes = [];
	    enteringRoutes = toRoutes;
	  }

	  return [leavingRoutes, enteringRoutes];
	}

	function createTransitionHook(fn, context) {
	  return function (nextState, transition, callback) {
	    if (fn.length > 2) {
	      fn.call(context, nextState, transition, callback);
	    } else {
	      // Assume fn executes synchronously and
	      // automatically call the callback for them.
	      fn.call(context, nextState, transition);
	      callback();
	    }
	  };
	}

	function getTransitionHooksFromRoutes(routes, hookName) {
	  return routes.reduce(function (hooks, route) {
	    if (route[hookName]) hooks.push(createTransitionHook(route[hookName], route));

	    return hooks;
	  }, []);
	}

	/**
	 * Compiles and returns an array of transition hook functions that
	 * should be called before we transition to a new state. Transition
	 * hook signatures are:
	 *
	 *   - route.onLeave(nextState, transition[, callback ])
	 *   - route.onEnter(nextState, transition[, callback ])
	 *
	 * Transition hooks run in order from the leaf route in the branch
	 * we're leaving, up the tree to the common parent route, and back
	 * down the branch we're entering to the leaf route.
	 *
	 * If a transition hook needs to execute asynchronously it may have
	 * a 3rd argument that it should call when it is finished. Otherwise
	 * the transition executes synchronously.
	 */

	function getTransitionHooks(prevState, nextState) {
	  var _computeDiff = computeDiff(prevState, nextState);

	  var leavingRoutes = _computeDiff[0];
	  var enteringRoutes = _computeDiff[1];

	  var hooks = getTransitionHooksFromRoutes(leavingRoutes, 'onLeave');

	  hooks.push.apply(hooks, getTransitionHooksFromRoutes(enteringRoutes, 'onEnter'));

	  return hooks;
	}

	function getComponentsForRoute(route, callback) {
	  if (route.component || route.components) {
	    callback(null, route.component || route.components);
	  } else if (route.getComponents) {
	    route.getComponents(callback);
	  } else {
	    callback();
	  }
	}

	/**
	 * Asynchronously fetches all components needed for the given router
	 * state and calls callback(error, components) when finished.
	 *
	 * Note: This operation may return synchronously if no routes have an
	 * asynchronous getComponents method.
	 */

	function getComponents(routes, callback) {
	  (0, _AsyncUtils.mapAsync)(routes, function (route, index, callback) {
	    getComponentsForRoute(route, callback);
	  }, callback);
	}

	/**
	 * Extracts an object of params the given route cares about from
	 * the given params object.
	 */

	function getRouteParams(route, params) {
	  var routeParams = {};

	  if (!route.path) return routeParams;

	  var paramNames = (0, _URLUtils.getParamNames)(route.path);

	  for (var p in params) if (params.hasOwnProperty(p) && paramNames.indexOf(p) !== -1) routeParams[p] = params[p];

	  return routeParams;
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.stringifyQuery = stringifyQuery;
	exports.getPathname = getPathname;
	exports.getQueryString = getQueryString;
	exports.stripLeadingSlashes = stripLeadingSlashes;
	exports.isAbsolutePath = isAbsolutePath;
	exports.compilePattern = compilePattern;
	exports.matchPattern = matchPattern;
	exports.getParamNames = getParamNames;
	exports.getParams = getParams;
	exports.formatPattern = formatPattern;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _qs = __webpack_require__(12);

	var _qs2 = _interopRequireDefault(_qs);

	var _invariant = __webpack_require__(7);

	var _invariant2 = _interopRequireDefault(_invariant);

	var parseQueryString = _qs2['default'].parse;

	exports.parseQueryString = parseQueryString;

	function stringifyQuery(query) {
	  return _qs2['default'].stringify(query, { arrayFormat: 'brackets' });
	}

	var queryMatcher = /\?([\s\S]*)$/;

	function getPathname(path) {
	  return path.replace(queryMatcher, '');
	}

	function getQueryString(path) {
	  var match = path.match(queryMatcher);
	  return match ? match[1] : '';
	}

	function stripLeadingSlashes(path) {
	  return path ? path.replace(/^\/+/, '') : '';
	}

	function isAbsolutePath(path) {
	  return typeof path === 'string' && path.charAt(0) === '/';
	}

	function escapeRegExp(string) {
	  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	function escapeSource(string) {
	  return escapeRegExp(string).replace(/\/+/g, '/+');
	}

	function _compilePattern(pattern) {
	  var regexpSource = '';
	  var paramNames = [];
	  var tokens = [];

	  var match,
	      lastIndex = 0,
	      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*|\(|\)/g;
	  while (match = matcher.exec(pattern)) {
	    if (match.index !== lastIndex) {
	      tokens.push(pattern.slice(lastIndex, match.index));
	      regexpSource += escapeSource(pattern.slice(lastIndex, match.index));
	    }

	    if (match[1]) {
	      regexpSource += '([^/?#]+)';
	      paramNames.push(match[1]);
	    } else if (match[0] === '*') {
	      regexpSource += '([\\s\\S]*?)';
	      paramNames.push('splat');
	    } else if (match[0] === '(') {
	      regexpSource += '(?:';
	    } else if (match[0] === ')') {
	      regexpSource += ')?';
	    }

	    tokens.push(match[0]);

	    lastIndex = matcher.lastIndex;
	  }

	  if (lastIndex !== pattern.length) {
	    tokens.push(pattern.slice(lastIndex, pattern.length));
	    regexpSource += escapeSource(pattern.slice(lastIndex, pattern.length));
	  }

	  return {
	    pattern: pattern,
	    regexpSource: regexpSource,
	    paramNames: paramNames,
	    tokens: tokens
	  };
	}

	var CompiledPatternsCache = {};

	function compilePattern(pattern) {
	  if (!(pattern in CompiledPatternsCache)) CompiledPatternsCache[pattern] = _compilePattern(pattern);

	  return CompiledPatternsCache[pattern];
	}

	/**
	 * Attempts to match a pattern on the given pathname. Patterns may use
	 * the following special characters:
	 *
	 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
	 *                  captured string is considered a "param"
	 * - ()             Wraps a segment of the URL that is optional
	 * - *              Consumes (non-greedy) all characters up to the next
	 *                  character in the pattern, or to the end of the URL if
	 *                  there is none
	 *
	 * The return value is an object with the following properties:
	 *
	 * - remainingPathname
	 * - paramNames
	 * - paramValues
	 */

	function matchPattern(pattern, pathname) {
	  var _compilePattern2 = compilePattern(stripLeadingSlashes(pattern));

	  var regexpSource = _compilePattern2.regexpSource;
	  var paramNames = _compilePattern2.paramNames;
	  var tokens = _compilePattern2.tokens;

	  regexpSource += '/*'; // Ignore trailing slashes

	  var captureRemaining = tokens[tokens.length - 1] !== '*';

	  if (captureRemaining) regexpSource += '([\\s\\S]*?)';

	  var match = pathname.match(new RegExp('^' + regexpSource + '$', 'i'));

	  var remainingPathname, paramValues;
	  if (match != null) {
	    paramValues = Array.prototype.slice.call(match, 1).map(function (v) {
	      return v != null ? decodeURIComponent(v.replace(/\+/g, '%20')) : v;
	    });

	    if (captureRemaining) {
	      remainingPathname = paramValues.pop();
	    } else {
	      remainingPathname = pathname.replace(match[0], '');
	    }
	  } else {
	    remainingPathname = paramValues = null;
	  }

	  return {
	    remainingPathname: remainingPathname,
	    paramNames: paramNames,
	    paramValues: paramValues
	  };
	}

	function getParamNames(pattern) {
	  return compilePattern(pattern).paramNames;
	}

	function getParams(pattern, pathname) {
	  var _matchPattern = matchPattern(pattern, stripLeadingSlashes(pathname));

	  var paramNames = _matchPattern.paramNames;
	  var paramValues = _matchPattern.paramValues;

	  if (paramValues != null) {
	    return paramNames.reduce(function (memo, paramName, index) {
	      memo[paramName] = paramValues[index];
	      return memo;
	    }, {});
	  }

	  return null;
	}

	/**
	 * Returns a version of the given pattern with params interpolated. Throws
	 * if there is a dynamic segment of the pattern for which there is no param.
	 */

	function formatPattern(pattern, params) {
	  params = params || {};

	  var _compilePattern3 = compilePattern(pattern);

	  var tokens = _compilePattern3.tokens;

	  var parenCount = 0,
	      pathname = '',
	      splatIndex = 0;

	  var token, paramName, paramValue;
	  for (var i = 0, len = tokens.length; i < len; ++i) {
	    token = tokens[i];

	    if (token === '*') {
	      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;

	      (0, _invariant2['default'])(paramValue != null || parenCount > 0, 'Missing splat #%s for path "%s"', splatIndex, pattern);

	      if (paramValue != null) pathname += encodeURI(paramValue).replace(/%20/g, '+');
	    } else if (token === '(') {
	      parenCount += 1;
	    } else if (token === ')') {
	      parenCount -= 1;
	    } else if (token.charAt(0) === ':') {
	      paramName = token.substring(1);
	      paramValue = params[paramName];

	      (0, _invariant2['default'])(paramValue != null || parenCount > 0, 'Missing "%s" parameter for path "%s"', paramName, pattern);

	      if (paramValue != null) pathname += encodeURIComponent(paramValue).replace(/%20/g, '+');
	    } else {
	      pathname += token;
	    }
	  }

	  return pathname.replace(/\/+/g, '/');
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(13);


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Stringify = __webpack_require__(14);
	var Parse = __webpack_require__(16);


	// Declare internals

	var internals = {};


	module.exports = {
	    stringify: Stringify,
	    parse: Parse
	};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Utils = __webpack_require__(15);


	// Declare internals

	var internals = {
	    delimiter: '&',
	    arrayPrefixGenerators: {
	        brackets: function (prefix, key) {
	            return prefix + '[]';
	        },
	        indices: function (prefix, key) {
	            return prefix + '[' + key + ']';
	        },
	        repeat: function (prefix, key) {
	            return prefix;
	        }
	    }
	};


	internals.stringify = function (obj, prefix, generateArrayPrefix) {

	    if (Utils.isBuffer(obj)) {
	        obj = obj.toString();
	    }
	    else if (obj instanceof Date) {
	        obj = obj.toISOString();
	    }
	    else if (obj === null) {
	        obj = '';
	    }

	    if (typeof obj === 'string' ||
	        typeof obj === 'number' ||
	        typeof obj === 'boolean') {

	        return [encodeURIComponent(prefix) + '=' + encodeURIComponent(obj)];
	    }

	    var values = [];

	    if (typeof obj === 'undefined') {
	        return values;
	    }

	    var objKeys = Object.keys(obj);
	    for (var i = 0, il = objKeys.length; i < il; ++i) {
	        var key = objKeys[i];
	        if (Array.isArray(obj)) {
	            values = values.concat(internals.stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix));
	        }
	        else {
	            values = values.concat(internals.stringify(obj[key], prefix + '[' + key + ']', generateArrayPrefix));
	        }
	    }

	    return values;
	};


	module.exports = function (obj, options) {

	    options = options || {};
	    var delimiter = typeof options.delimiter === 'undefined' ? internals.delimiter : options.delimiter;

	    var keys = [];

	    if (typeof obj !== 'object' ||
	        obj === null) {

	        return '';
	    }

	    var arrayFormat;
	    if (options.arrayFormat in internals.arrayPrefixGenerators) {
	        arrayFormat = options.arrayFormat;
	    }
	    else if ('indices' in options) {
	        arrayFormat = options.indices ? 'indices' : 'repeat';
	    }
	    else {
	        arrayFormat = 'indices';
	    }

	    var generateArrayPrefix = internals.arrayPrefixGenerators[arrayFormat];

	    var objKeys = Object.keys(obj);
	    for (var i = 0, il = objKeys.length; i < il; ++i) {
	        var key = objKeys[i];
	        keys = keys.concat(internals.stringify(obj[key], key, generateArrayPrefix));
	    }

	    return keys.join(delimiter);
	};


/***/ },
/* 15 */
/***/ function(module, exports) {

	// Load modules


	// Declare internals

	var internals = {};


	exports.arrayToObject = function (source) {

	    var obj = {};
	    for (var i = 0, il = source.length; i < il; ++i) {
	        if (typeof source[i] !== 'undefined') {

	            obj[i] = source[i];
	        }
	    }

	    return obj;
	};


	exports.merge = function (target, source) {

	    if (!source) {
	        return target;
	    }

	    if (typeof source !== 'object') {
	        if (Array.isArray(target)) {
	            target.push(source);
	        }
	        else {
	            target[source] = true;
	        }

	        return target;
	    }

	    if (typeof target !== 'object') {
	        target = [target].concat(source);
	        return target;
	    }

	    if (Array.isArray(target) &&
	        !Array.isArray(source)) {

	        target = exports.arrayToObject(target);
	    }

	    var keys = Object.keys(source);
	    for (var k = 0, kl = keys.length; k < kl; ++k) {
	        var key = keys[k];
	        var value = source[key];

	        if (!target[key]) {
	            target[key] = value;
	        }
	        else {
	            target[key] = exports.merge(target[key], value);
	        }
	    }

	    return target;
	};


	exports.decode = function (str) {

	    try {
	        return decodeURIComponent(str.replace(/\+/g, ' '));
	    } catch (e) {
	        return str;
	    }
	};


	exports.compact = function (obj, refs) {

	    if (typeof obj !== 'object' ||
	        obj === null) {

	        return obj;
	    }

	    refs = refs || [];
	    var lookup = refs.indexOf(obj);
	    if (lookup !== -1) {
	        return refs[lookup];
	    }

	    refs.push(obj);

	    if (Array.isArray(obj)) {
	        var compacted = [];

	        for (var i = 0, il = obj.length; i < il; ++i) {
	            if (typeof obj[i] !== 'undefined') {
	                compacted.push(obj[i]);
	            }
	        }

	        return compacted;
	    }

	    var keys = Object.keys(obj);
	    for (i = 0, il = keys.length; i < il; ++i) {
	        var key = keys[i];
	        obj[key] = exports.compact(obj[key], refs);
	    }

	    return obj;
	};


	exports.isRegExp = function (obj) {
	    return Object.prototype.toString.call(obj) === '[object RegExp]';
	};


	exports.isBuffer = function (obj) {

	    if (obj === null ||
	        typeof obj === 'undefined') {

	        return false;
	    }

	    return !!(obj.constructor &&
	        obj.constructor.isBuffer &&
	        obj.constructor.isBuffer(obj));
	};


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Utils = __webpack_require__(15);


	// Declare internals

	var internals = {
	    delimiter: '&',
	    depth: 5,
	    arrayLimit: 20,
	    parameterLimit: 1000
	};


	internals.parseValues = function (str, options) {

	    var obj = {};
	    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);

	    for (var i = 0, il = parts.length; i < il; ++i) {
	        var part = parts[i];
	        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;

	        if (pos === -1) {
	            obj[Utils.decode(part)] = '';
	        }
	        else {
	            var key = Utils.decode(part.slice(0, pos));
	            var val = Utils.decode(part.slice(pos + 1));

	            if (Object.prototype.hasOwnProperty(key)) {
	                continue;
	            }

	            if (!obj.hasOwnProperty(key)) {
	                obj[key] = val;
	            }
	            else {
	                obj[key] = [].concat(obj[key]).concat(val);
	            }
	        }
	    }

	    return obj;
	};


	internals.parseObject = function (chain, val, options) {

	    if (!chain.length) {
	        return val;
	    }

	    var root = chain.shift();

	    var obj = {};
	    if (root === '[]') {
	        obj = [];
	        obj = obj.concat(internals.parseObject(chain, val, options));
	    }
	    else {
	        var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;
	        var index = parseInt(cleanRoot, 10);
	        var indexString = '' + index;
	        if (!isNaN(index) &&
	            root !== cleanRoot &&
	            indexString === cleanRoot &&
	            index >= 0 &&
	            index <= options.arrayLimit) {

	            obj = [];
	            obj[index] = internals.parseObject(chain, val, options);
	        }
	        else {
	            obj[cleanRoot] = internals.parseObject(chain, val, options);
	        }
	    }

	    return obj;
	};


	internals.parseKeys = function (key, val, options) {

	    if (!key) {
	        return;
	    }

	    // The regex chunks

	    var parent = /^([^\[\]]*)/;
	    var child = /(\[[^\[\]]*\])/g;

	    // Get the parent

	    var segment = parent.exec(key);

	    // Don't allow them to overwrite object prototype properties

	    if (Object.prototype.hasOwnProperty(segment[1])) {
	        return;
	    }

	    // Stash the parent if it exists

	    var keys = [];
	    if (segment[1]) {
	        keys.push(segment[1]);
	    }

	    // Loop through children appending to the array until we hit depth

	    var i = 0;
	    while ((segment = child.exec(key)) !== null && i < options.depth) {

	        ++i;
	        if (!Object.prototype.hasOwnProperty(segment[1].replace(/\[|\]/g, ''))) {
	            keys.push(segment[1]);
	        }
	    }

	    // If there's a remainder, just add whatever is left

	    if (segment) {
	        keys.push('[' + key.slice(segment.index) + ']');
	    }

	    return internals.parseObject(keys, val, options);
	};


	module.exports = function (str, options) {

	    if (str === '' ||
	        str === null ||
	        typeof str === 'undefined') {

	        return {};
	    }

	    options = options || {};
	    options.delimiter = typeof options.delimiter === 'string' || Utils.isRegExp(options.delimiter) ? options.delimiter : internals.delimiter;
	    options.depth = typeof options.depth === 'number' ? options.depth : internals.depth;
	    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : internals.arrayLimit;
	    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : internals.parameterLimit;

	    var tempObj = typeof str === 'string' ? internals.parseValues(str, options) : str;
	    var obj = {};

	    // Iterate over the keys and setup the new object

	    var keys = Object.keys(tempObj);
	    for (var i = 0, il = keys.length; i < il; ++i) {
	        var key = keys[i];
	        var newObj = internals.parseKeys(key, tempObj[key], options);
	        obj = Utils.merge(obj, newObj);
	    }

	    return Utils.compact(obj);
	};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Location = __webpack_require__(18);

	var _Location2 = _interopRequireDefault(_Location);

	var _History = __webpack_require__(21);

	var _History2 = _interopRequireDefault(_History);

	var _React$PropTypes = _react2['default'].PropTypes;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;
	var arrayOf = _React$PropTypes.arrayOf;
	var instanceOf = _React$PropTypes.instanceOf;
	var oneOfType = _React$PropTypes.oneOfType;
	var element = _React$PropTypes.element;

	function falsy(props, propName, componentName) {
	  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
	}

	var component = func;
	var components = oneOfType([component, object]);
	var history = instanceOf(_History2['default']);
	var location = instanceOf(_Location2['default']);
	var route = oneOfType([object, element]);
	var routes = oneOfType([route, arrayOf(route)]);

	module.exports = {
	  falsy: falsy,
	  component: component,
	  components: components,
	  history: history,
	  location: location,
	  route: route,
	  routes: routes
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _NavigationTypes = __webpack_require__(19);

	var _NavigationTypes2 = _interopRequireDefault(_NavigationTypes);

	/**
	 * A Location answers two important questions:
	 *
	 * 1. Where am I?
	 * 2. How did I get here?
	 */

	var Location = (function () {
	  function Location() {
	    var pathname = arguments[0] === undefined ? '/' : arguments[0];
	    var query = arguments[1] === undefined ? null : arguments[1];
	    var state = arguments[2] === undefined ? null : arguments[2];
	    var navigationType = arguments[3] === undefined ? _NavigationTypes2['default'].POP : arguments[3];

	    _classCallCheck(this, Location);

	    this.pathname = pathname;
	    this.query = query;
	    this.state = state;
	    this.navigationType = navigationType;
	  }

	  Location.isLocation = function isLocation(object) {
	    return object instanceof Location;
	  };

	  return Location;
	})();

	exports['default'] = Location;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _keymirror = __webpack_require__(20);

	var _keymirror2 = _interopRequireDefault(_keymirror);

	var NavigationTypes = (0, _keymirror2['default'])({

	  /**
	   * Indicates that navigation was caused by a call to history.push.
	   */
	  PUSH: null,

	  /**
	   * Indicates that navigation was caused by a call to history.replace.
	   */
	  REPLACE: null,

	  /**
	   * Indicates that navigation was caused by some other action such
	   * as using a browser's back/forward buttons and/or manually manipulating
	   * the URL in a browser's location bar. This is the default.
	   *
	   * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
	   * for more information.
	   */
	  POP: null

	});

	exports['default'] = NavigationTypes;
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 */

	"use strict";

	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function(obj) {
	  var ret = {};
	  var key;
	  if (!(obj instanceof Object && !Array.isArray(obj))) {
	    throw new Error('keyMirror(...): Argument must be an object.');
	  }
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};

	module.exports = keyMirror;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _invariant = __webpack_require__(7);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _URLUtils = __webpack_require__(11);

	var _Location = __webpack_require__(18);

	var _Location2 = _interopRequireDefault(_Location);

	var RequiredHistorySubclassMethods = ['pushState', 'replaceState', 'go'];

	function createRandomKey() {
	  return Math.random().toString(36).substr(2);
	}

	/**
	 * A history interface that normalizes the differences across
	 * various environments and implementations. Requires concrete
	 * subclasses to implement the following methods:
	 *
	 * - pushState(state, path)
	 * - replaceState(state, path)
	 * - go(n)
	 */

	var History = (function () {
	  function History() {
	    var options = arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, History);

	    RequiredHistorySubclassMethods.forEach(function (method) {
	      (0, _invariant2['default'])(typeof this[method] === 'function', '%s needs a "%s" method', this.constructor.name, method);
	    }, this);

	    this.parseQueryString = options.parseQueryString || _URLUtils.parseQueryString;
	    this.changeListeners = [];
	    this.location = null;
	  }

	  History.prototype._notifyChange = function _notifyChange() {
	    for (var i = 0, len = this.changeListeners.length; i < len; ++i) this.changeListeners[i].call(this);
	  };

	  History.prototype.addChangeListener = function addChangeListener(listener) {
	    this.changeListeners.push(listener);
	  };

	  History.prototype.removeChangeListener = function removeChangeListener(listener) {
	    this.changeListeners = this.changeListeners.filter(function (li) {
	      return li !== listener;
	    });
	  };

	  History.prototype.back = function back() {
	    this.go(-1);
	  };

	  History.prototype.forward = function forward() {
	    this.go(1);
	  };

	  History.prototype._createState = function _createState(state) {
	    state = state || {};

	    if (!state.key) state.key = createRandomKey();

	    return state;
	  };

	  History.prototype.createLocation = function createLocation(path, state, navigationType) {
	    var pathname = (0, _URLUtils.getPathname)(path);
	    var queryString = (0, _URLUtils.getQueryString)(path);
	    var query = queryString ? this.parseQueryString(queryString) : null;
	    return new _Location2['default'](pathname, query, state, navigationType);
	  };

	  return History;
	})();

	exports['default'] = History;
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(7);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _URLUtils = __webpack_require__(11);

	var _React$PropTypes = _react2['default'].PropTypes;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	function pathnameIsActive(pathname, activePathname) {
	  if ((0, _URLUtils.stripLeadingSlashes)(activePathname).indexOf((0, _URLUtils.stripLeadingSlashes)(pathname)) === 0) return true; // This quick comparison satisfies most use cases.

	  // TODO: Implement a more stringent comparison that checks
	  // to see if the pathname matches any routes (and params)
	  // in the currently active branch.

	  return false;
	}

	function queryIsActive(query, activeQuery) {
	  if (activeQuery == null) return query == null;

	  if (query == null) return true;

	  for (var p in query) if (query.hasOwnProperty(p) && String(query[p]) !== String(activeQuery[p])) return false;

	  return true;
	}

	var RouterContextMixin = {

	  propTypes: {
	    stringifyQuery: func.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      stringifyQuery: _URLUtils.stringifyQuery
	    };
	  },

	  childContextTypes: {
	    router: object.isRequired
	  },

	  getChildContext: function getChildContext() {
	    return {
	      router: this
	    };
	  },

	  /**
	   * Returns a full URL path from the given pathname and query.
	   */
	  makePath: function makePath(pathname, query) {
	    if (query) {
	      if (typeof query !== 'string') query = this.props.stringifyQuery(query);

	      if (query !== '') return pathname + '?' + query;
	    }

	    return pathname;
	  },

	  /**
	   * Returns a string that may safely be used to link to the given
	   * pathname and query.
	   */
	  makeHref: function makeHref(pathname, query) {
	    var path = this.makePath(pathname, query);
	    var history = this.props.history;

	    if (history && history.makeHref) return history.makeHref(path);

	    return path;
	  },

	  /**
	   * Pushes a new Location onto the history stack.
	   */
	  transitionTo: function transitionTo(pathname, query) {
	    var state = arguments[2] === undefined ? null : arguments[2];
	    var history = this.props.history;

	    (0, _invariant2['default'])(history, 'Router#transitionTo is client-side only (needs history)');

	    history.pushState(state, this.makePath(pathname, query));
	  },

	  /**
	   * Replaces the current Location on the history stack.
	   */
	  replaceWith: function replaceWith(pathname, query) {
	    var state = arguments[2] === undefined ? null : arguments[2];
	    var history = this.props.history;

	    (0, _invariant2['default'])(history, 'Router#replaceWith is client-side only (needs history)');

	    history.replaceState(state, this.makePath(pathname, query));
	  },

	  /**
	   * Navigates forward/backward n entries in the history stack.
	   */
	  go: function go(n) {
	    var history = this.props.history;

	    (0, _invariant2['default'])(history, 'Router#go is client-side only (needs history)');

	    history.go(n);
	  },

	  /**
	   * Navigates back one entry in the history stack. This is identical to
	   * the user clicking the browser's back button.
	   */
	  goBack: function goBack() {
	    this.go(-1);
	  },

	  /**
	   * Navigates forward one entry in the history stack. This is identical to
	   * the user clicking the browser's forward button.
	   */
	  goForward: function goForward() {
	    this.go(1);
	  },

	  /**
	   * Returns true if a <Link> to the given pathname/query combination is
	   * currently active.
	   */
	  isActive: function isActive(pathname, query) {
	    var location = this.state.location;

	    if (location == null) return false;

	    return pathnameIsActive(pathname, location.pathname) && queryIsActive(query, location.query);
	  }

	};

	exports['default'] = RouterContextMixin;
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _DOMUtils = __webpack_require__(24);

	var _NavigationTypes = __webpack_require__(19);

	var _NavigationTypes2 = _interopRequireDefault(_NavigationTypes);

	var func = _react2['default'].PropTypes.func;

	function getCommonAncestors(branch, otherBranch) {
	  return branch.filter(function (route) {
	    return otherBranch.indexOf(route) !== -1;
	  });
	}

	function shouldUpdateScrollPosition(state, prevState) {
	  var location = state.location;
	  var branch = state.branch;
	  var prevLocation = prevState.location;
	  var prevBranch = prevState.branch;

	  // When an onEnter hook uses transition.to to redirect
	  // on the initial load prevLocation is null, so assume
	  // we don't want to update the scroll position.
	  if (prevLocation === null) return false;

	  // Don't update scroll position if only the query has changed.
	  if (location.pathname === prevLocation.pathname) return false;

	  // Don't update scroll position if any of the ancestors
	  // has `ignoreScrollPosition` set to `true` on the route.
	  var sharedAncestors = getCommonAncestors(branch, prevBranch);
	  if (sharedAncestors.some(function (route) {
	    return route.ignoreScrollBehavior;
	  })) return false;

	  return true;
	}

	function updateWindowScrollPosition(navigationType, scrollX, scrollY) {
	  if (_DOMUtils.canUseDOM) {
	    if (navigationType === _NavigationTypes2['default'].POP) {
	      (0, _DOMUtils.setWindowScrollPosition)(scrollX, scrollY);
	    } else {
	      (0, _DOMUtils.setWindowScrollPosition)(0, 0);
	    }
	  }
	}

	var ScrollManagementMixin = {

	  propTypes: {
	    shouldUpdateScrollPosition: func.isRequired,
	    updateScrollPosition: func.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      shouldUpdateScrollPosition: shouldUpdateScrollPosition,
	      updateScrollPosition: updateWindowScrollPosition
	    };
	  },

	  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	    var location = this.state.location;

	    var locationState = location && location.state;

	    if (locationState && this.props.shouldUpdateScrollPosition(this.state, prevState)) {
	      var scrollX = locationState.scrollX;
	      var scrollY = locationState.scrollY;

	      this.props.updateScrollPosition(location.navigationType, scrollX || 0, scrollY || 0);
	    }
	  }

	};

	exports['default'] = ScrollManagementMixin;
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.getHashPath = getHashPath;
	exports.replaceHashPath = replaceHashPath;
	exports.getWindowPath = getWindowPath;
	exports.getWindowScrollPosition = getWindowScrollPosition;
	exports.setWindowScrollPosition = setWindowScrollPosition;
	exports.supportsHistory = supportsHistory;
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	exports.canUseDOM = canUseDOM;

	function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  return window.location.href.split('#')[1] || '';
	}

	function replaceHashPath(path) {
	  window.location.replace(window.location.pathname + window.location.search + '#' + path);
	}

	function getWindowPath() {
	  return window.location.pathname + window.location.search;
	}

	function getWindowScrollPosition() {
	  return {
	    scrollX: window.pageXOffset || document.documentElement.scrollLeft,
	    scrollY: window.pageYOffset || document.documentElement.scrollTop
	  };
	}

	function setWindowScrollPosition(scrollX, scrollY) {
	  window.scrollTo(scrollX, scrollY);
	}

	/**
	 * taken from modernizr
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
	 */

	function supportsHistory() {
	  var ua = navigator.userAgent;
	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
	    return false;
	  }
	  return window.history && 'pushState' in window.history;
	}

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Transition = (function () {
	  function Transition() {
	    _classCallCheck(this, Transition);

	    this.isCancelled = false;
	    this.redirectInfo = null;
	    this.abortReason = null;
	  }

	  Transition.prototype.to = function to(pathname, query, state) {
	    this.redirectInfo = { pathname: pathname, query: query, state: state };
	    this.isCancelled = true;
	  };

	  Transition.prototype.abort = function abort(reason) {
	    this.abortReason = reason;
	    this.isCancelled = true;
	  };

	  return Transition;
	})();

	exports["default"] = Transition;
	module.exports = exports["default"];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _React$PropTypes = _react2['default'].PropTypes;
	var object = _React$PropTypes.object;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;

	function isLeftClickEvent(event) {
	  return event.button === 0;
	}

	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}

	/**
	 * <Link> components are used to create an <a> element that links to a route.
	 * When that route is active, the link gets an "active" class name (or the
	 * value of its `activeClassName` prop).
	 *
	 * For example, assuming you have the following route:
	 *
	 *   <Route name="showPost" path="/posts/:postID" handler={Post}/>
	 *
	 * You could use the following component to link to that route:
	 *
	 *   <Link to={`/posts/${post.id}`} />
	 *
	 * Links may pass along query string parameters
	 * using the `query` prop.
	 *
	 *   <Link to="/posts/123" query={{ show:true }}/>
	 */
	var Link = _react2['default'].createClass({
	  displayName: 'Link',

	  contextTypes: {
	    router: object
	  },

	  propTypes: {
	    activeStyle: object,
	    activeClassName: string,
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onClick: func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      className: '',
	      activeClassName: 'active',
	      style: {}
	    };
	  },

	  handleClick: function handleClick(event) {
	    var allowTransition = true;
	    var clickResult;

	    if (this.props.onClick) clickResult = this.props.onClick(event);

	    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

	    if (clickResult === false || event.defaultPrevented === true) allowTransition = false;

	    event.preventDefault();

	    if (allowTransition) this.context.router.transitionTo(this.props.to, this.props.query, this.props.state);
	  },

	  render: function render() {
	    var router = this.context.router;
	    var _props = this.props;
	    var to = _props.to;
	    var query = _props.query;

	    var props = _extends({}, this.props, {
	      href: router.makeHref(to, query),
	      onClick: this.handleClick
	    });

	    // ignore if rendered outside of the context of a router, simplifies unit testing
	    if (router && router.isActive(to, query)) {
	      if (props.activeClassName) props.className += props.className !== '' ? ' ' + props.activeClassName : props.activeClassName;

	      if (props.activeStyle) props.style = _extends({}, props.style, props.activeStyle);
	    }

	    return _react2['default'].createElement('a', props);
	  }

	});

	exports.Link = Link;
	exports['default'] = Link;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(7);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(9);

	var _URLUtils = __webpack_require__(11);

	var _PropTypes = __webpack_require__(17);

	var _React$PropTypes = _react2['default'].PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;
	var Redirect = _react2['default'].createClass({
	  displayName: 'Redirect',

	  statics: {

	    createRouteFromReactElement: function createRouteFromReactElement(element) {
	      var route = (0, _RouteUtils.createRouteFromReactElement)(element);

	      if (route.from) route.path = route.from;

	      route.onEnter = function (nextState, transition) {
	        var location = nextState.location;
	        var params = nextState.params;

	        var pathname = route.to ? (0, _URLUtils.formatPattern)(route.to, params) : location.pathname;

	        transition.to(pathname, route.query || location.query, route.state || location.state);
	      };

	      return route;
	    }

	  },

	  propTypes: {
	    path: string,
	    from: string, // Alias for path
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _PropTypes.falsy,
	    children: _PropTypes.falsy
	  },

	  render: function render() {
	    (0, _invariant2['default'])(false, '<Redirect> elements are for router configuration only and should not be rendered');
	  }

	});

	exports.Redirect = Redirect;
	exports['default'] = Redirect;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(7);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(9);

	var _PropTypes = __webpack_require__(17);

	var _warning = __webpack_require__(5);

	var _warning2 = _interopRequireDefault(_warning);

	var _React$PropTypes = _react2['default'].PropTypes;
	var string = _React$PropTypes.string;
	var bool = _React$PropTypes.bool;
	var func = _React$PropTypes.func;

	/**
	 * A <Route> is used to declare which components are rendered to the page when
	 * the URL matches a given pattern.
	 *
	 * Routes are arranged in a nested tree structure. When a new URL is requested,
	 * the tree is searched depth-first to find a route whose path matches the URL.
	 * When one is found, all routes in the tree that lead to it are considered
	 * "active" and their components are rendered into the DOM, nested in the same
	 * order as they are in the tree.
	 */
	var Route = _react2['default'].createClass({
	  displayName: 'Route',

	  statics: {

	    createRouteFromReactElement: function createRouteFromReactElement(element) {
	      var route = (0, _RouteUtils.createRouteFromReactElement)(element);

	      if (route.handler) {
	        (0, _warning2['default'])(false, '<Route handler> is deprecated, use <Route component> instead');
	        route.component = route.handler;
	        delete route.handler;
	      }

	      return route;
	    }

	  },

	  propTypes: {
	    path: string,
	    ignoreScrollBehavior: bool,
	    handler: _PropTypes.component,
	    component: _PropTypes.component,
	    components: _PropTypes.components,
	    getComponents: func
	  },

	  render: function render() {
	    (0, _invariant2['default'])(false, '<Route> elements are for router configuration only and should not be rendered');
	  }

	});

	exports.Route = Route;
	exports['default'] = Route;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var object = _react2['default'].PropTypes.object;

	/**
	 * A mixin for components that modify the URL.
	 *
	 * Example:
	 *
	 *   import { Navigation } from 'react-router';
	 *
	 *   var MyLink = React.createClass({
	 *     mixins: [ Navigation ],
	 *     handleClick(event) {
	 *       event.preventDefault();
	 *       this.transitionTo('aRoute', { the: 'params' }, { the: 'query' });
	 *     },
	 *     render() {
	 *       return (
	 *         <a onClick={this.handleClick}>Click me!</a>
	 *       );
	 *     }
	 *   });
	 */
	var Navigation = {

	  contextTypes: {
	    router: object.isRequired
	  }

	};

	var RouterNavigationMethods = ['makePath', 'makeHref', 'transitionTo', 'replaceWith', 'go', 'goBack', 'goForward'];

	RouterNavigationMethods.forEach(function (method) {
	  Navigation[method] = function () {
	    var router = this.context.router;
	    return router[method].apply(router, arguments);
	  };
	});

	exports['default'] = Navigation;
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _warning = __webpack_require__(5);

	var _warning2 = _interopRequireDefault(_warning);

	var object = _react2['default'].PropTypes.object;

	var TransitionHook = {

	  contextTypes: {
	    router: object.isRequired
	  },

	  componentDidMount: function componentDidMount() {
	    (0, _warning2['default'])(typeof this.routerWillLeave === 'function', 'Components that mixin TransitionHook should have a routerWillLeave method, check %s', this.constructor.displayName || this.constructor.name);

	    if (this.routerWillLeave) this.context.router.addTransitionHook(this.routerWillLeave);
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    if (this.routerWillLeave) this.context.router.removeTransitionHook(this.routerWillLeave);
	  }

	};

	exports['default'] = TransitionHook;
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var object = _react2['default'].PropTypes.object;

	/**
	 * A mixin for components that need to know the path, routes, URL
	 * params and query that are currently active.
	 *
	 * Example:
	 *
	 *   import { State } from 'react-router';
	 *
	 *   var AboutLink = React.createClass({
	 *     mixins: [ State ],
	 *     render() {
	 *       var className = this.props.className;
	 *
	 *       if (this.isActive('about'))
	 *         className += ' is-active';
	 *
	 *       return React.createElement('a', { className: className }, this.props.children);
	 *     }
	 *   });
	 */
	var State = {

	  contextTypes: {
	    router: object.isRequired
	  }

	};

	var RouterStateMethods = ['isActive'];

	RouterStateMethods.forEach(function (method) {
	  State[method] = function () {
	    var router = this.context.router;
	    return router[method].apply(router, arguments);
	  };
	});

	exports['default'] = State;
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function (path) {
	  return "/admin" + path;
	};

	module.exports = exports["default"];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _DOMHistory2 = __webpack_require__(34);

	var _DOMHistory3 = _interopRequireDefault(_DOMHistory2);

	var _DOMUtils = __webpack_require__(24);

	var _NavigationTypes = __webpack_require__(19);

	var _NavigationTypes2 = _interopRequireDefault(_NavigationTypes);

	function updateCurrentState(extraState) {
	  var state = window.history.state;

	  if (state) window.history.replaceState(_extends(state, extraState), '');
	}

	/**
	 * A history implementation for DOM environments that support the
	 * HTML5 history API (pushState, replaceState, and the popstate event).
	 * Provides the cleanest URLs and should always be used in browser
	 * environments if possible.
	 *
	 * Note: BrowserHistory automatically falls back to using full page
	 * refreshes if HTML5 history is not available, so URLs are always
	 * the same across browsers.
	 */

	var BrowserHistory = (function (_DOMHistory) {
	  function BrowserHistory(options) {
	    _classCallCheck(this, BrowserHistory);

	    _DOMHistory.call(this, options);
	    this.handlePopState = this.handlePopState.bind(this);
	    this.isSupported = (0, _DOMUtils.supportsHistory)();
	  }

	  _inherits(BrowserHistory, _DOMHistory);

	  BrowserHistory.prototype._updateLocation = function _updateLocation(navigationType) {
	    var state = null;

	    if (this.isSupported) {
	      var historyState = window.history.state;
	      state = this._createState(historyState);

	      if (!historyState || !historyState.key) window.history.replaceState(state, '');
	    }

	    this.location = this.createLocation((0, _DOMUtils.getWindowPath)(), state, navigationType);
	  };

	  BrowserHistory.prototype.setup = function setup() {
	    if (this.location == null) this._updateLocation();
	  };

	  BrowserHistory.prototype.handlePopState = function handlePopState(event) {
	    if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

	    this._updateLocation(_NavigationTypes2['default'].POP);
	    this._notifyChange();
	  };

	  BrowserHistory.prototype.addChangeListener = function addChangeListener(listener) {
	    _DOMHistory.prototype.addChangeListener.call(this, listener);

	    if (this.changeListeners.length === 1) {
	      if (window.addEventListener) {
	        window.addEventListener('popstate', this.handlePopState, false);
	      } else {
	        window.attachEvent('onpopstate', this.handlePopState);
	      }
	    }
	  };

	  BrowserHistory.prototype.removeChangeListener = function removeChangeListener(listener) {
	    _DOMHistory.prototype.removeChangeListener.call(this, listener);

	    if (this.changeListeners.length === 0) {
	      if (window.removeEventListener) {
	        window.removeEventListener('popstate', this.handlePopState, false);
	      } else {
	        window.detachEvent('onpopstate', this.handlePopState);
	      }
	    }
	  };

	  // http://www.w3.org/TR/2011/WD-html5-20110113/history.html#dom-history-pushstate

	  BrowserHistory.prototype.pushState = function pushState(state, path) {
	    if (this.isSupported) {
	      updateCurrentState(this.getScrollPosition());

	      state = this._createState(state);

	      window.history.pushState(state, '', path);
	      this.location = this.createLocation(path, state, _NavigationTypes2['default'].PUSH);
	      this._notifyChange();
	    } else {
	      window.location = path;
	    }
	  };

	  // http://www.w3.org/TR/2011/WD-html5-20110113/history.html#dom-history-replacestate

	  BrowserHistory.prototype.replaceState = function replaceState(state, path) {
	    if (this.isSupported) {
	      state = this._createState(state);

	      window.history.replaceState(state, '', path);
	      this.location = this.createLocation(path, state, _NavigationTypes2['default'].REPLACE);
	      this._notifyChange();
	    } else {
	      window.location.replace(path);
	    }
	  };

	  return BrowserHistory;
	})(_DOMHistory3['default']);

	var history = new BrowserHistory();
	exports.history = history;
	exports['default'] = BrowserHistory;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _History2 = __webpack_require__(21);

	var _History3 = _interopRequireDefault(_History2);

	var _DOMUtils = __webpack_require__(24);

	/**
	 * A history interface that assumes a DOM environment.
	 */

	var DOMHistory = (function (_History) {
	  function DOMHistory() {
	    var options = arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, DOMHistory);

	    _History.call(this, options);
	    this.getScrollPosition = options.getScrollPosition || _DOMUtils.getWindowScrollPosition;
	  }

	  _inherits(DOMHistory, _History);

	  DOMHistory.prototype.go = function go(n) {
	    if (n === 0) return;

	    window.history.go(n);
	  };

	  return DOMHistory;
	})(_History3['default']);

	exports['default'] = DOMHistory;
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _warning = __webpack_require__(5);

	var _warning2 = _interopRequireDefault(_warning);

	var _DOMHistory2 = __webpack_require__(34);

	var _DOMHistory3 = _interopRequireDefault(_DOMHistory2);

	var _NavigationTypes = __webpack_require__(19);

	var _NavigationTypes2 = _interopRequireDefault(_NavigationTypes);

	var _DOMUtils = __webpack_require__(24);

	var _URLUtils = __webpack_require__(11);

	var DefaultQueryKey = '_qk';

	function ensureSlash() {
	  var path = (0, _DOMUtils.getHashPath)();

	  if ((0, _URLUtils.isAbsolutePath)(path)) return true;

	  (0, _DOMUtils.replaceHashPath)('/' + path);

	  return false;
	}

	function addQueryStringValueToPath(path, key, value) {
	  return path + (path.indexOf('?') === -1 ? '?' : '&') + ('' + key + '=' + value);
	}

	function getQueryStringValueFromPath(path, key) {
	  var match = path.match(new RegExp('\\?.*?\\b' + key + '=(.+?)\\b'));
	  return match && match[1];
	}

	function saveState(path, queryKey, state) {
	  window.sessionStorage.setItem(state.key, JSON.stringify(state));
	  return addQueryStringValueToPath(path, queryKey, state.key);
	}

	function readState(path, queryKey) {
	  var sessionKey = getQueryStringValueFromPath(path, queryKey);
	  var json = sessionKey && window.sessionStorage.getItem(sessionKey);

	  if (json) {
	    try {
	      return JSON.parse(json);
	    } catch (error) {}
	  }

	  return null;
	}

	function updateCurrentState(queryKey, extraState) {
	  var path = (0, _DOMUtils.getHashPath)();
	  var state = readState(path, queryKey);

	  if (state) saveState(path, queryKey, _extends(state, extraState));
	}

	/**
	 * A history implementation for DOM environments that uses window.location.hash
	 * to store the current path. This is essentially a hack for older browsers that
	 * do not support the HTML5 history API (IE <= 9).
	 *
	 * Support for persistence of state across page refreshes is provided using a
	 * combination of a URL query string parameter and DOM storage. However, this
	 * support is not enabled by default. In order to use it, create your own
	 * HashHistory.
	 *
	 *   import HashHistory from 'react-router/lib/HashHistory';
	 *   var StatefulHashHistory = new HashHistory({ queryKey: '_key' });
	 *   React.render(<Router history={StatefulHashHistory} .../>, ...);
	 */

	var HashHistory = (function (_DOMHistory) {
	  function HashHistory() {
	    var options = arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, HashHistory);

	    _DOMHistory.call(this, options);
	    this.handleHashChange = this.handleHashChange.bind(this);
	    this.queryKey = options.queryKey;

	    if (typeof this.queryKey !== 'string') this.queryKey = this.queryKey ? DefaultQueryKey : null;
	  }

	  _inherits(HashHistory, _DOMHistory);

	  HashHistory.prototype._updateLocation = function _updateLocation(navigationType) {
	    var path = (0, _DOMUtils.getHashPath)();
	    var state = this.queryKey ? readState(path, this.queryKey) : null;
	    this.location = this.createLocation(path, state, navigationType);
	  };

	  HashHistory.prototype.setup = function setup() {
	    if (this.location == null) {
	      ensureSlash();
	      this._updateLocation();
	    }
	  };

	  HashHistory.prototype.handleHashChange = function handleHashChange() {
	    if (!ensureSlash()) return;

	    if (this._ignoreNextHashChange) {
	      this._ignoreNextHashChange = false;
	    } else {
	      this._updateLocation(_NavigationTypes2['default'].POP);
	      this._notifyChange();
	    }
	  };

	  HashHistory.prototype.addChangeListener = function addChangeListener(listener) {
	    _DOMHistory.prototype.addChangeListener.call(this, listener);

	    if (this.changeListeners.length === 1) {
	      if (window.addEventListener) {
	        window.addEventListener('hashchange', this.handleHashChange, false);
	      } else {
	        window.attachEvent('onhashchange', this.handleHashChange);
	      }
	    }
	  };

	  HashHistory.prototype.removeChangeListener = function removeChangeListener(listener) {
	    _DOMHistory.prototype.removeChangeListener.call(this, listener);

	    if (this.changeListeners.length === 0) {
	      if (window.removeEventListener) {
	        window.removeEventListener('hashchange', this.handleHashChange, false);
	      } else {
	        window.detachEvent('onhashchange', this.handleHashChange);
	      }
	    }
	  };

	  HashHistory.prototype.pushState = function pushState(state, path) {
	    (0, _warning2['default'])(this.queryKey || state == null, 'HashHistory needs a queryKey in order to persist state');

	    if (this.queryKey) updateCurrentState(this.queryKey, this.getScrollPosition());

	    state = this._createState(state);

	    if (this.queryKey) path = saveState(path, this.queryKey, state);

	    this._ignoreNextHashChange = true;
	    window.location.hash = path;

	    this.location = this.createLocation(path, state, _NavigationTypes2['default'].PUSH);

	    this._notifyChange();
	  };

	  HashHistory.prototype.replaceState = function replaceState(state, path) {
	    state = this._createState(state);

	    if (this.queryKey) path = saveState(path, this.queryKey, state);

	    this._ignoreNextHashChange = true;
	    (0, _DOMUtils.replaceHashPath)(path);

	    this.location = this.createLocation(path, state, _NavigationTypes2['default'].REPLACE);

	    this._notifyChange();
	  };

	  HashHistory.prototype.makeHref = function makeHref(path) {
	    return '#' + path;
	  };

	  return HashHistory;
	})(_DOMHistory3['default']);

	var history = new HashHistory();
	exports.history = history;
	exports['default'] = HashHistory;

	// Ignore invalid JSON in session storage.

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _reactRouter = __webpack_require__(2);

	var _classnames = __webpack_require__(37);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _path_helper = __webpack_require__(32);

	var _path_helper2 = _interopRequireDefault(_path_helper);

	var Hero = (function (_React$Component) {
	  _inherits(Hero, _React$Component);

	  function Hero() {
	    _classCallCheck(this, Hero);

	    _get(Object.getPrototypeOf(Hero.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Hero, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        _extends({}, this.props, {
	          className: (0, _classnames2['default'])(this.props.className, 'homepage-hero') }),
	        React.createElement(
	          Container,
	          { fixed: true },
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return Hero;
	})(React.Component);

	var HeroHeader = (function (_React$Component2) {
	  _inherits(HeroHeader, _React$Component2);

	  function HeroHeader() {
	    _classCallCheck(this, HeroHeader);

	    _get(Object.getPrototypeOf(HeroHeader.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(HeroHeader, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        _extends({}, this.props, {
	          className: (0, _classnames2['default'])(this.props.className, 'homepage-hero-header') }),
	        this.props.children
	      );
	    }
	  }]);

	  return HeroHeader;
	})(React.Component);

	var HeroHeader2 = (function (_React$Component3) {
	  _inherits(HeroHeader2, _React$Component3);

	  function HeroHeader2() {
	    _classCallCheck(this, HeroHeader2);

	    _get(Object.getPrototypeOf(HeroHeader2.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(HeroHeader2, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        _extends({}, this.props, {
	          className: (0, _classnames2['default'])(this.props.className, 'homepage-hero-header2') }),
	        this.props.children
	      );
	    }
	  }]);

	  return HeroHeader2;
	})(React.Component);

	exports['default'] = React.createClass({
	  displayName: 'homepage',

	  handleLogin: function handleLogin() {
	    $('body').addClass('fade-out');
	    setTimeout(function () {
	      window.location = '/login';
	    }, 250);
	  },
	  render: function render() {
	    return React.createElement(
	      Container,
	      { id: 'homepage-container' },
	      React.createElement(
	        Button,
	        { bsStyle: 'deepred', id: 'demo-btn', onClick: this.handleLogin },
	        '登入或註冊'
	      ),
	      React.createElement(
	        'div',
	        null,
	        React.createElement(Hero, { className: 'text-center hidden-xs', style: { height: 475, backgroundImage: 'url(/imgs/homepage/home_bg.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', overflow: 'hidden' } }),
	        React.createElement(Hero, { className: 'text-center visible-xs', style: { height: 270, backgroundImage: 'url(/imgs/homepage/home_bg.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', overflow: 'hidden' } })
	      ),
	      React.createElement(
	        Hero,
	        null,
	        React.createElement(
	          HeroHeader,
	          null,
	          React.createElement(
	            'span',
	            null,
	            "恭喜你走到了這一步"
	          )
	        ),
	        React.createElement(
	          HeroHeader2,
	          null,
	          "期中考快到囉～",
	          React.createElement(
	            'sup',
	            null,
	            React.createElement(
	              'small',
	              null,
	              React.createElement(
	                BLabel,
	                { className: 'bg-deepred fg-white' },
	                'Chapter 3 ~ Chapter 5.2'
	              )
	            )
	          )
	        ),
	        React.createElement(
	          Grid,
	          null,
	          React.createElement(
	            Row,
	            null,
	            React.createElement(
	              Col,
	              { sm: 7, collapseLeft: true, collapseRight: true },
	              React.createElement(
	                'p',
	                { style: { marginTop: 60 } },
	                '18世紀的數學家Hilbert，提出了一個世紀性的問題(Entscheidungsproblem)，基本上在問：「是不是所有的問題都可以被解決？」。在數學家開始解決這個問題之前，我們發現，我們需要更清楚的描述什麼叫做『問題』，以及什麼叫做『解決問題』。'
	              ),
	              React.createElement(
	                'p',
	                null,
	                '在學期初，我們把問題侷限在只能回答「是」或「否」的問題，然後用string作為一個問題的具體呈現，用language (set of string)作為同樣的類型的問題。然後學到了DFA (regular expression), PDF(context free grammer)這些比較簡單的計算模型。現在終於學到了',
	                React.createElement(
	                  'strong',
	                  null,
	                  'Turing Machine'
	                ),
	                '，他是我們會學到最完整的計算模型，我們也即將要用他來討論問題本質的特性-- decidability, recognizability, time complexity.'
	              )
	            ),
	            React.createElement(
	              Col,
	              { sm: 5, collapseLeft: true, collapseRight: true },
	              React.createElement(
	                'div',
	                { className: 'hidden-xs text-right' },
	                React.createElement('img', { src: '/imgs/homepage/reactcode.png' })
	              ),
	              React.createElement(
	                'div',
	                { className: 'visible-xs text-center' },
	                React.createElement('img', { width: '250', src: '/imgs/homepage/reactcode.png' })
	              )
	            )
	          )
	        )
	      ),
	      React.createElement(
	        Hero,
	        { style: { position: 'relative', zIndex: 2 } },
	        React.createElement(
	          HeroHeader,
	          null,
	          React.createElement(
	            'span',
	            null,
	            "一些線上資源"
	          )
	        ),
	        React.createElement(
	          HeroHeader2,
	          null,
	          "除了考古題系統之外.... 課本是不錯的resource.... 可是如果你不喜歡看書...."
	        ),
	        React.createElement(
	          'div',
	          { className: 'text-center', style: { marginTop: 25, marginBottom: 25 } },
	          React.createElement('iframe', { src: 'https://www.youtube.com/embed/3x8mSr8ZPGQ', frameborder: '0', allowfullscreen: true }),
	          React.createElement('iframe', { src: 'https://www.youtube.com/embed/DILF8usqp7M?list=PLlO--9bCCRJNpSad8b4-21a72wZSF0fhD', frameborder: '0', allowfullscreen: true })
	        )
	      ),
	      React.createElement(
	        Hero,
	        { className: 'subtle-bottom-shadow' },
	        React.createElement(
	          HeroHeader,
	          null,
	          "或者來問助教"
	        ),
	        React.createElement(
	          HeroHeader2,
	          null,
	          "可是幾點注意事項"
	        ),
	        React.createElement(
	          'div',
	          { className: 'text-center', style: { marginTop: 25, marginBottom: 25 } },
	          React.createElement('img', { src: '/imgs/homepage/support.png' })
	        ),
	        React.createElement(
	          'p',
	          { className: 'text-center' },
	          React.createElement(
	            'ul',
	            null,
	            React.createElement(
	              'li',
	              null,
	              ' ',
	              "助教上次修這門課是兩年以前，建議你來之前可以先寄信給我們你要問的問題，我們有時間想想，比較不會浪費你的時間。",
	              ' '
	            ),
	            React.createElement(
	              'li',
	              null,
	              ' ',
	              "為了你的方便，直接Facebook助教也是可以(schwannden kuo)，問題直接拍照給我也是可以！",
	              ' '
	            ),
	            React.createElement(
	              'li',
	              null,
	              ' ',
	              "期中考前大家各種崩潰，如果助教時間之外想要約問問題，也是可以email或fb來詢問一下喔！最好鳩個三五好友一起不然助教會害羞，阿不對是一直一對一回答一樣的問題助教也是會無聊....",
	              ' '
	            )
	          )
	        )
	      ),
	      React.createElement(
	        'div',
	        null,
	        React.createElement(
	          Hero,
	          { className: 'text-center', style: { height: 215, backgroundImage: 'url(/imgs/homepage/background.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', overflow: 'hidden', backgroundPosition: '0% 100%' } },
	          React.createElement(
	            'h1',
	            { className: 'fg-white', style: { marginTop: 0, marginBottom: 25, fontWeight: 100 } },
	            ' 還不快去唸書！！！ '
	          ),
	          React.createElement(
	            Button,
	            { lg: true, outlined: true, inverse: true, retainBackground: true, bsStyle: 'red' },
	            React.createElement(
	              'a',
	              { href: (0, _path_helper2['default'])('/quiz') },
	              ' 進入線上測驗系統 '
	            )
	          )
	        )
	      )
	    );
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _classnames = __webpack_require__(37);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactRouter = __webpack_require__(2);

	var _globalJsxSidebar_component = __webpack_require__(39);

	var _globalJsxSidebar_component2 = _interopRequireDefault(_globalJsxSidebar_component);

	var _commonHeader = __webpack_require__(40);

	var _commonHeader2 = _interopRequireDefault(_commonHeader);

	var _commonSidebar = __webpack_require__(42);

	var _commonSidebar2 = _interopRequireDefault(_commonSidebar);

	var _commonFooter = __webpack_require__(55);

	var _commonFooter2 = _interopRequireDefault(_commonFooter);

	var _globalJsxReactStylesSrcReactStyleJsx = __webpack_require__(56);

	var _globalJsxReactStylesSrcReactStyleJsx2 = _interopRequireDefault(_globalJsxReactStylesSrcReactStyleJsx);

	var Body = (function (_React$Component) {
	  _inherits(Body, _React$Component);

	  function Body() {
	    _classCallCheck(this, Body);

	    _get(Object.getPrototypeOf(Body.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Body, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      $('#wizard-1').steps({
	        headerTag: "h1",
	        bodyTag: "div",
	        autoFocus: true
	      });

	      $('#wizard-3').steps({
	        enableAllSteps: true,
	        enablePagination: false
	      });
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      var questions = {
	        yes_no: [{ id: "", subQuestions: ["Is   $A_{DFA}$ recognizable", "Is   $A_{DFA}$ decidable", "Is   $E_{DFA}$ recognizable", "Is   $E_{DFA}$ decidable", "Is  $EQ_{DFA}$ recognizable", "Is  $EQ_{DFA}$ decidable", "Is $ALL_{DFA}$ recognizable", "Is $ALL_{DFA}$ decidable"] }, { id: "", subQuestions: ["Is   $A_{PDA}$ recognizable", "Is   $A_{PDA}$ decidable", "Is   $E_{PDA}$ recognizable", "Is   $E_{PDA}$ decidable", "Is  $EQ_{PDA}$ recognizable", "Is  $EQ_{PDA}$ decidable", "Is $ALL_{PDA}$ recognizable", "Is $ALL_{PDA}$ decidable"] }, { id: "", subQuestions: ["Is   $A_{LBTM}$ recognizable", "Is   $A_{LBTM}$ decidable", "Is   $E_{LBTM}$ recognizable", "Is   $E_{LBTM}$ decidable", "Is  $EQ_{LBTM}$ recognizable", "Is  $EQ_{LBTM}$ decidable", "Is $ALL_{LBTM}$ recognizable", "Is $ALL_{LBTM}$ decidable"] }, { id: "", subQuestions: ["Is   $A_{TM}$ recognizable", "Is   $A_{TM}$ decidable", "Is   $E_{TM}$ recognizable", "Is   $E_{TM}$ decidable", "Is  $EQ_{TM}$ recognizable", "Is  $EQ_{TM}$ decidable", "Is $ALL_{TM}$ recognizable", "Is $ALL_{TM}$ decidable"] }, { id: "", subQuestions: ["Is a PDA the same with a queue instead of a stack?", "Is a PDA with a queue more powerful than the original one?", "Is a PDA the same with 2 queues instead of a stack?", "Is a PDA with 2 queues more powerful than the oiriginal one?", "Is a PDA with 3 stacks more powerful than a PDA with 2 stacks?", "Is a PDA with 2 stacks the same as a Turing machine?"] }, { id: "", subQuestions: ["Is Turing machine more power than a computer in terms of their ability to solve problems?", "If a computer has infinite memory, can we say it is a universal Turing machine? ", "Is a Turing machine the same if we say eveytime it reads an input, it must move to left or right, the tape head can not stay where it was?", "Is TA handsome?", "Is a multi-tape Turing machine the same as that of a single-tape Turing machine?", "Is an infinite-tape Turing machine the same as that of a single-tape Turing machine?"] }],
	        short_answer: [{ id: "", question: "We know multi-tap turing machine is the same as a single tap one, then do you think a multi stack PDA is the same as a single stack PDA?" }, { id: "", question: "Proof that an universal turing machine exists" }, { id: "", question: "We start this course by asking ourself: \" Is every problem solveable\", then we stopped and realized that we can not further discuss this question before we define what is problem, and what does it mean by \"solve a problem\". In Turing machine model, define \"problem\" and \"solve a problem\"." }, { id: "", question: "Can we use Turing machine to explain quantumn computer? Brefly argue why or why not?" }]
	      };
	      return React.createElement(
	        Container,
	        { id: 'body' },
	        React.createElement(
	          Grid,
	          null,
	          React.createElement(
	            Row,
	            null,
	            React.createElement(
	              Col,
	              { xs: 12 },
	              React.createElement(
	                PanelContainer,
	                { noOverflow: true, controlStyles: 'bg-darkgreen45 fg-white' },
	                React.createElement(
	                  Panel,
	                  null,
	                  React.createElement(
	                    PanelHeader,
	                    { className: 'bg-darkgreen45 fg-white', style: { margin: 0 } },
	                    React.createElement(
	                      Grid,
	                      null,
	                      React.createElement(
	                        Row,
	                        null,
	                        React.createElement(
	                          Col,
	                          { xs: 12 },
	                          React.createElement(
	                            'h3',
	                            null,
	                            ' Yes or No '
	                          ),
	                          React.createElement(
	                            'h5',
	                            null,
	                            ' system WILL NOT remember your answer, still struggling to find time to finish this task.. '
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  React.createElement(
	                    PanelBody,
	                    null,
	                    React.createElement(
	                      'div',
	                      { id: 'wizard-1' },
	                      questions.yes_no.map(function (question) {
	                        return [React.createElement(
	                          'h1',
	                          null,
	                          ' ',
	                          question.id,
	                          ' '
	                        ), React.createElement(
	                          'div',
	                          null,
	                          question.subQuestions.map(function (question) {
	                            return [React.createElement(
	                              'span',
	                              null,
	                              ' ',
	                              question,
	                              ' '
	                            ), React.createElement(
	                              Button,
	                              { outlined: true, style: { marginRight: 10, marginBottom: 5 }, bsStyle: 'success' },
	                              ' Yes '
	                            ), React.createElement(
	                              Button,
	                              { outlined: true, style: { marginRight: 10, marginBottom: 5 }, bsStyle: 'warning' },
	                              ' No '
	                            ), React.createElement('br', null)];
	                          })
	                        )];
	                      })
	                    )
	                  )
	                )
	              ),
	              React.createElement(
	                PanelContainer,
	                { noOverflow: true, controlStyles: 'bg-orange75 fg-white' },
	                React.createElement(
	                  Panel,
	                  null,
	                  React.createElement(
	                    PanelHeader,
	                    { className: 'bg-orange75 fg-white', style: { margin: 0 } },
	                    React.createElement(
	                      Grid,
	                      null,
	                      React.createElement(
	                        Row,
	                        null,
	                        React.createElement(
	                          Col,
	                          { xs: 12 },
	                          React.createElement(
	                            'h3',
	                            null,
	                            ' Short Answers'
	                          ),
	                          React.createElement(
	                            'h5',
	                            null,
	                            ' system WILL NOT remember your answer, still struggling to find time to finish this task.. '
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  React.createElement(
	                    PanelBody,
	                    null,
	                    React.createElement(
	                      'div',
	                      { id: 'wizard-3' },
	                      questions.short_answer.map(function (question) {
	                        return [React.createElement(
	                          'h1',
	                          null,
	                          ' ',
	                          question.id,
	                          ' '
	                        ), React.createElement(
	                          'div',
	                          null,
	                          React.createElement(
	                            'p',
	                            null,
	                            ' ',
	                            question.question,
	                            ' '
	                          ),
	                          React.createElement(
	                            Form,
	                            { id: 'update-answer' },
	                            React.createElement(
	                              FormGroup,
	                              null,
	                              React.createElement(
	                                Label,
	                                { htmlFor: 'add-content' },
	                                ' Type Your Answer Here *'
	                              ),
	                              React.createElement(Textarea, { id: 'add-content', name: 'content', rows: '5' })
	                            ),
	                            React.createElement(
	                              FormGroup,
	                              null,
	                              React.createElement(
	                                Button,
	                                { type: 'submit', bsStyle: 'darkgreen45', outlined: true },
	                                'Update Answer'
	                              )
	                            )
	                          )
	                        )];
	                      })
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Body;
	})(React.Component);

	var _default = (function (_React$Component2) {
	  _inherits(_default, _React$Component2);

	  function _default() {
	    _classCallCheck(this, _default2);

	    _get(Object.getPrototypeOf(_default2.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(_default, [{
	    key: 'render',
	    value: function render() {
	      var classes = (0, _classnames2['default'])('dashboard', {
	        'container-open': this.props.open
	      });

	      return React.createElement(
	        Container,
	        { id: 'container', className: classes },
	        React.createElement(_commonSidebar2['default'], null),
	        React.createElement(_commonHeader2['default'], null),
	        React.createElement(Body, null),
	        React.createElement(_commonFooter2['default'], null)
	      );
	    }
	  }]);

	  var _default2 = _default;
	  _default = (0, _globalJsxSidebar_component2['default'])(_default) || _default;
	  return _default;
	})(React.Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = SidebarMixin;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reactRouter = __webpack_require__(2);

	var _classnames = __webpack_require__(37);

	var _classnames2 = _interopRequireDefault(_classnames);

	var openState = !Modernizr.touch ? localStorage.getItem('sidebar-open-state') === 'true' ? true : false : false;

	function SidebarMixin(ComposedComponent) {
	  return React.createClass({
	    displayName: 'SidebarMixin',
	    getInitialState: function getInitialState() {
	      return {
	        open: openState
	      };
	    },
	    isOpen: function isOpen() {
	      return this.state.open === open;
	    },
	    sidebarStateChangeCallback: function sidebarStateChangeCallback(open) {
	      if (this.isOpen()) return;
	      if (open !== undefined) {
	        openState = open;
	      } else {
	        openState = !this.state.open;
	      }
	      this.setState({
	        open: openState // toggle sidebar
	      });
	      localStorage.setItem('sidebar-open-state', openState);
	    },
	    componentWillMount: function componentWillMount() {
	      ReactBootstrap.Dispatcher.on('sidebar', this.sidebarStateChangeCallback);
	    },
	    componentWillUnmount: function componentWillUnmount() {
	      ReactBootstrap.Dispatcher.off('sidebar', this.sidebarStateChangeCallback);
	    },
	    render: function render() {
	      return React.createElement(ComposedComponent, _extends({}, this.props, { open: this.state.open }));
	    }
	  });
	}

	var SidebarControlBtn = React.createClass({
	  displayName: 'SidebarControlBtn',

	  getInitialState: function getInitialState() {
	    return {
	      active: this.props.active || false
	    };
	  },
	  handleClick: function handleClick(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    ReactBootstrap.Dispatcher.emit('sidebar:controlbtn', this.props);
	    ReactBootstrap.Dispatcher.emit('sidebar:keychange', this.props.sidebar);
	  },
	  handleState: function handleState(props) {
	    if (props.hasOwnProperty('sidebar')) {
	      if (props.sidebar === this.props.sidebar) {
	        this.setState({ active: true });
	      } else {
	        this.setState({ active: false });
	      }
	    }
	  },
	  componentDidMount: function componentDidMount() {
	    ReactBootstrap.Dispatcher.on('sidebar:controlbtn', this.handleState);
	    var scrollToTop = function scrollToTop() {
	      if ($(window).scrollTop() === 0) return;
	      setTimeout(function () {
	        $('html, body, #body').scrollTop(0);
	        $(window).scrollTop(0);
	        scrollToTop();
	      }, 15);
	    };

	    scrollToTop();
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    ReactBootstrap.Dispatcher.off('sidebar:controlbtn', this.handleState);
	  },
	  render: function render() {
	    var classes = (0, _classnames2['default'])('sidebar-control-btn', {
	      'active': this.state.active
	    }, this.props.className);

	    var props = _extends({
	      tabIndex: '-1',
	      onClick: this.handleClick
	    }, this.props, {
	      className: classes.trim()
	    });
	    return React.createElement(
	      'li',
	      props,
	      React.createElement(
	        'a',
	        { href: '#', tabIndex: '-1' },
	        React.createElement(Icon, { bundle: this.props.bundle, glyph: this.props.glyph })
	      )
	    );
	  }
	});

	exports.SidebarControlBtn = SidebarControlBtn;
	var SidebarControls = React.createClass({
	  displayName: 'SidebarControls',

	  render: function render() {
	    var classes = (0, _classnames2['default'])('sidebar-controls-container', this.props.className);
	    var props = _extends({
	      dir: 'ltr'
	    }, this.props, {
	      className: classes
	    });

	    return React.createElement(
	      'div',
	      _extends({}, props, { children: null }),
	      React.createElement(
	        'div',
	        { className: 'sidebar-controls', tabIndex: '-1' },
	        this.props.children
	      )
	    );
	  }
	});

	exports.SidebarControls = SidebarControls;
	var timer = null;
	var Sidebar = React.createClass({
	  displayName: 'Sidebar',

	  getInitialState: function getInitialState() {
	    return {
	      left: this.props.sidebar * 100 + '%',
	      visibility: this.props.sidebar === 0 ? 'visible' : 'hidden'
	    };
	  },
	  handleKeyChange: function handleKeyChange(sidebar) {
	    var _this = this;

	    var newLeft = this.props.sidebar * 100 - sidebar * 100 + '%';
	    this.setState({
	      left: newLeft,
	      visibility: 'visible'
	    }, function () {
	      if (newLeft !== '0%') {
	        setTimeout(function () {
	          _this.setState({ visibility: 'hidden' });
	        }, 300);
	      } else if (newLeft === '0%') {
	        var height = $(React.findDOMNode(_this.refs.innersidebar)).height();
	        if ($('html').hasClass('static')) {
	          $('#body').css('min-height', height + 400);
	        } else {
	          $('#body').css('min-height', '');
	        }
	      }
	    });
	  },
	  updateScrollbar: function updateScrollbar() {
	    if (!Modernizr.touch) {
	      $(React.findDOMNode(this.refs.sidebar)).perfectScrollbar('update');
	    }
	  },
	  repositionScrollbar: function repositionScrollbar(child_node, top, height) {
	    clearTimeout(timer);
	    var node = $(React.findDOMNode(this.refs.sidebar));
	    if (node != undefined) {
	      var scrollTo = top - node.offset().top + node.scrollTop();
	      if (node.find(child_node).length) {
	        if (scrollTo > $(window).height() / 2) {
	          this.timer = setTimeout(function () {
	            node.scrollTop(scrollTo - $(window).height() / 2 + 100);
	          }, 15);
	        }
	      }
	    }
	    if (!Modernizr.touch) {
	      this.updateScrollbar();
	    }
	  },
	  destroyScrollbar: function destroyScrollbar() {
	    $(React.findDOMNode(this.refs.sidebar)).perfectScrollbar('destroy');
	  },
	  initializeScrollbar: function initializeScrollbar() {
	    $(React.findDOMNode(this.refs.sidebar)).perfectScrollbar({
	      suppressScrollX: true
	    });
	  },
	  componentWillMount: function componentWillMount() {
	    ReactBootstrap.Dispatcher.on('sidebar:reinitialize', this.initializeScrollbar);
	    ReactBootstrap.Dispatcher.on('sidebar:destroy', this.destroyScrollbar);
	    ReactBootstrap.Dispatcher.on('sidebar:update', this.updateScrollbar);
	    ReactBootstrap.Dispatcher.on('sidebar:reposition', this.repositionScrollbar);
	    ReactBootstrap.Dispatcher.on('sidebar:keychange', this.handleKeyChange);
	  },
	  componentDidMount: function componentDidMount() {
	    var _this2 = this;

	    if (!Modernizr.touch) {
	      this.initializeScrollbar();
	    }

	    if (this.props.active) {
	      setTimeout(function () {
	        ReactBootstrap.Dispatcher.emit('sidebar:controlbtn', { sidebar: _this2.props.sidebar });
	        ReactBootstrap.Dispatcher.emit('sidebar:keychange', _this2.props.sidebar);
	      }, 15);
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    ReactBootstrap.Dispatcher.off('sidebar:reinitialize', this.initializeScrollbar);
	    ReactBootstrap.Dispatcher.off('sidebar:destroy', this.destroyScrollbar);
	    ReactBootstrap.Dispatcher.off('sidebar:update', this.updateScrollbar);
	    ReactBootstrap.Dispatcher.off('sidebar:reposition', this.repositionScrollbar);
	    ReactBootstrap.Dispatcher.off('sidebar:keychange', this.handleKeyChange);
	  },
	  render: function render() {
	    var props = _extends({
	      style: {
	        left: this.state.left,
	        visibility: this.state.visibility,
	        transition: 'all 0.3s ease',
	        OTransition: 'all 0.3s ease',
	        MsTransition: 'all 0.3s ease',
	        MozTransition: 'all 0.3s ease',
	        WebkitTransition: 'all 0.3s ease'
	      }
	    }, this.props, {
	      className: (0, _classnames2['default'])('sidebar', this.props.className)
	    });

	    return React.createElement(
	      'div',
	      _extends({ ref: 'sidebar' }, props, { children: null }),
	      React.createElement(
	        'div',
	        { ref: 'innersidebar' },
	        this.props.children
	      )
	    );
	  }
	});

	exports.Sidebar = Sidebar;
	var SidebarNavItem = React.createClass({
	  displayName: 'SidebarNavItem',

	  timer: null,
	  mixins: [_reactRouter.Navigation, _reactRouter.State],
	  propTypes: {
	    open: React.PropTypes.bool,
	    active: React.PropTypes.bool,
	    href: React.PropTypes.string,
	    autoHeight: React.PropTypes.bool
	  },
	  getInitialState: function getInitialState() {
	    return {
	      open: this.props.open || false,
	      active: this.props.active || false,
	      toggleOpen: this.props.open || false,
	      dir: 'left',
	      opposite: false
	    };
	  },
	  emitOpen: function emitOpen(open) {
	    var node = React.findDOMNode(this.refs.node);
	    if (open) {
	      ReactBootstrap.Dispatcher.emit('sidebar:openstate', node, open);
	    } else {
	      ReactBootstrap.Dispatcher.emit('sidebar:openstate', node);
	    }
	  },
	  handleClick: function handleClick(e) {
	    if (!this.props.href) {
	      e.preventDefault();
	      e.stopPropagation();
	    }
	    if (this.props.hasOwnProperty('onClick')) {
	      this.props.onClick();
	    }
	    this.emitOpen();
	  },
	  collapse: function collapse(node, cb) {
	    var _this3 = this;

	    this.setState({
	      toggleOpen: false
	    }, function () {
	      var height = $(node).height();
	      $(node).css('height', height).animate({
	        height: '45px'
	      }, 125, 'easeInOutSine', function () {
	        $(node).css('height', '');
	        try {
	          _this3.setState({
	            open: false,
	            toggleOpen: false
	          }, function () {
	            if (cb) cb();
	          });
	        } catch (e) {}
	      });
	    });
	  },
	  expand: function expand(node, cb, disableAnimation) {
	    var _this4 = this;

	    if (disableAnimation) {
	      $(node).css('height', '').addClass('open');
	    } else {
	      this.setState({
	        toggleOpen: true
	      }, function () {
	        var height = $(node).addClass('open').height();
	        $(node).removeClass('open');
	        $(node).css('height', '45px').animate({
	          height: height
	        }, 125, 'easeInOutSine', function () {
	          $(node).css('height', '');
	          try {
	            _this4.setState({
	              open: true
	            }, function () {
	              if (cb) cb();
	            });
	          } catch (e) {}
	        });
	      });
	    }
	  },
	  handleOpenState: function handleOpenState(child_node, open) {
	    var _this5 = this;

	    clearTimeout(this.timer);
	    this.timer = setTimeout(function () {
	      if (_this5.props.children && _this5.isMounted()) {
	        var node = React.findDOMNode(_this5.refs.node);
	        if (open) {
	          if ($(node).find(child_node).length) {
	            _this5.setState({
	              open: true,
	              toggleOpen: true
	            });
	            _this5.expand(node, function () {
	              ReactBootstrap.Dispatcher.emit('sidebar:update');
	            }, true);
	          }
	          return;
	        }
	        if ($(node).is(child_node)) {
	          if (_this5.state.open) {
	            _this5.collapse(node, function () {
	              ReactBootstrap.Dispatcher.emit('sidebar:update');
	            });
	          } else {
	            _this5.expand(node, function () {
	              ReactBootstrap.Dispatcher.emit('sidebar:update');
	            });
	          }
	          return;
	        }
	        if (!$(node).find(child_node).length) {
	          if (_this5.state.open) _this5.collapse(node);
	        }
	      }
	    }, 15);
	  },
	  handleLayoutDirChange: function handleLayoutDirChange(dir) {
	    this.setState({
	      dir: dir === 'ltr' ? 'left' : 'right',
	      opposite: dir === 'ltr' ? false : true
	    });
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    ReactBootstrap.Dispatcher.off('layout:dir', this.handleLayoutDirChange);
	    ReactBootstrap.Dispatcher.off('sidebar:openstate', this.handleOpenState);
	  },
	  componentWillMount: function componentWillMount() {
	    ReactBootstrap.Dispatcher.on('layout:dir', this.handleLayoutDirChange);
	    ReactBootstrap.Dispatcher.on('sidebar:openstate', this.handleOpenState);
	  },
	  activateNavItem: function activateNavItem(props) {
	    var _this6 = this;

	    var active = props.active || false;
	    var currentLocation = this.context.router.state.location.pathname;

	    if (!active && props.href) {
	      active = this.isActive(props.href) && currentLocation == props.href;
	    }

	    if (active) {
	      this.emitOpen(true);
	      setTimeout(function () {
	        _this6.setState({ active: true });
	        var node = React.findDOMNode(_this6.refs.node);
	        if (node != undefined) {
	          var height = $(node).height();
	          var top = $(node).offset().top;
	          ReactBootstrap.Dispatcher.emit('sidebar:reposition', node, top, height);
	        }
	      }, 15);
	    } else {
	      this.setState({ active: false });
	    }
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    this.activateNavItem(nextProps);
	  },
	  componentDidMount: function componentDidMount() {
	    this.activateNavItem(this.props);
	  },
	  render: function render() {
	    var classes = (0, _classnames2['default'])({
	      'open': this.state.open,
	      'active': this.state.active
	    });
	    var toggleClasses = (0, _classnames2['default'])({
	      'toggle-button': true,
	      'open': this.state.toggleOpen,
	      'opposite': this.state.opposite
	    });
	    var icon = null,
	        toggleButton = null;
	    if (this.props.children) {
	      toggleButton = React.createElement(Icon, { className: toggleClasses.trim(), bundle: 'fontello', glyph: this.state.dir + '-open-3' });
	    }
	    if (this.props.glyph || this.props.bundle) {
	      icon = React.createElement(Icon, { bundle: this.props.bundle, glyph: this.props.glyph });
	    }
	    var style = { height: this.props.autoHeight ? 'auto' : '' };

	    var props = _extends({
	      name: null,
	      style: style,
	      tabIndex: '-1'
	    }, this.props, {
	      className: classes.trim()
	    });

	    var RouteLink = 'a';
	    var componentProps = {
	      name: null,
	      tabIndex: -1,
	      href: this.props.href || '',
	      onClick: this.handleClick,
	      style: style
	    };

	    if (this.props.hasOwnProperty('href') && this.props.href.length && this.props.href !== '#') {
	      RouteLink = _reactRouter.Link;
	      componentProps.to = this.props.href;
	      delete componentProps.href;
	    }

	    return React.createElement(
	      'li',
	      _extends({ ref: 'node' }, props),
	      React.createElement(
	        RouteLink,
	        componentProps,
	        icon,
	        React.createElement(
	          'span',
	          { className: 'name' },
	          this.props.name
	        ),
	        toggleButton
	      ),
	      this.props.children
	    );
	  }
	});

	exports.SidebarNavItem = SidebarNavItem;
	var SidebarNav = React.createClass({
	  displayName: 'SidebarNav',

	  render: function render() {
	    var classes = (0, _classnames2['default'])('sidebar-nav', this.props.className);

	    var props = _extends({}, this.props, {
	      className: classes
	    });

	    return React.createElement(
	      'ul',
	      _extends({}, props, { children: null }),
	      this.props.children
	    );
	  }
	});

	exports.SidebarNav = SidebarNav;
	var SidebarBtn = React.createClass({
	  displayName: 'SidebarBtn',

	  handleSidebarStateChange: function handleSidebarStateChange(props) {
	    if (props['data-id'] === 'sidebar-btn') {
	      ReactBootstrap.Dispatcher.emit('sidebar');
	    }
	  },
	  render: function render() {
	    var classes = (0, _classnames2['default'])('pull-left visible-xs-inline-block', this.props.className);
	    var props = _extends({}, this.props, {
	      classes: classes
	    });

	    return React.createElement(
	      NavContent,
	      props,
	      React.createElement(
	        Nav,
	        { onItemSelect: this.handleSidebarStateChange },
	        React.createElement(
	          NavItem,
	          { 'data-id': 'sidebar-btn', className: 'sidebar-btn', href: '/' },
	          React.createElement(Icon, { bundle: 'fontello', glyph: 'th-list-5' })
	        )
	      )
	    );
	  }
	});
	exports.SidebarBtn = SidebarBtn;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _reactRouter = __webpack_require__(2);

	var _cookies = __webpack_require__(41);

	var _cookies2 = _interopRequireDefault(_cookies);

	var _classnames = __webpack_require__(37);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _globalJsxSidebar_component = __webpack_require__(39);

	var Brand = (function (_React$Component) {
	  _inherits(Brand, _React$Component);

	  function Brand() {
	    _classCallCheck(this, Brand);

	    _get(Object.getPrototypeOf(Brand.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Brand, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        NavHeader,
	        this.props,
	        React.createElement(
	          NavBrand,
	          { tabIndex: '-1', padding: '5px 5px' },
	          React.createElement('div', { id: 'logo' })
	        )
	      );
	    }
	  }]);

	  return Brand;
	})(React.Component);

	var DirectNavItem = React.createClass({
	  displayName: 'DirectNavItem',

	  mixins: [_reactRouter.State, _reactRouter.Navigation],
	  render: function render() {
	    var active = false;
	    var currentLocation = this.context.router.state.location.pathname;

	    if (!active && this.props.path) {
	      active = this.isActive(this.props.path) && currentLocation == this.props.path;
	    }

	    var classes = (0, _classnames2['default'])({
	      'pressed': active
	    });
	    return React.createElement(
	      NavItem,
	      _extends({ className: classes }, this.props),
	      React.createElement(
	        _reactRouter.Link,
	        { to: this.props.path },
	        React.createElement(Icon, { bundle: this.props.bundle || 'fontello', glyph: this.props.glyph })
	      )
	    );
	  }
	});

	var Skins = (function (_React$Component2) {
	  _inherits(Skins, _React$Component2);

	  function Skins() {
	    _classCallCheck(this, Skins);

	    _get(Object.getPrototypeOf(Skins.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Skins, [{
	    key: 'switchSkin',
	    value: function switchSkin(skin, e) {
	      e.preventDefault();
	      e.stopPropagation();
	      for (var i = 0; i < Skins.skins.length; i++) {
	        $('html').removeClass(Skins.skins[i]);
	      }
	      $('html').addClass(skin);
	      vex.close(this.props.id);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Grid,
	        { style: { margin: '-2em' } },
	        React.createElement(
	          Row,
	          null,
	          React.createElement(
	            Col,
	            { xs: 12, className: 'text-center bg-darkgrayishblue75', style: { marginBottom: 25 } },
	            React.createElement(
	              'div',
	              { className: 'fg-white', style: { fontSize: 24, lineHeight: 1, padding: '25px 10px' } },
	              'Choose a theme:'
	            )
	          )
	        ),
	        React.createElement(
	          Row,
	          null,
	          React.createElement(
	            Col,
	            { xs: 4, className: 'text-center' },
	            React.createElement(
	              'a',
	              { href: '#', style: { border: 'none' }, onClick: this.switchSkin.bind(this, 'default') },
	              React.createElement(Icon, { glyph: 'icon-fontello-stop icon-4x', style: { color: '#E76049' } })
	            )
	          ),
	          React.createElement(
	            Col,
	            { xs: 4, className: 'text-center' },
	            React.createElement(
	              'a',
	              { href: '#', style: { border: 'none' }, onClick: this.switchSkin.bind(this, 'green') },
	              React.createElement(Icon, { glyph: 'icon-fontello-stop icon-4x', className: 'fg-darkgreen45' })
	            )
	          ),
	          React.createElement(
	            Col,
	            { xs: 4, className: 'text-center' },
	            React.createElement(
	              'a',
	              { href: '#', style: { border: 'none' }, onClick: this.switchSkin.bind(this, 'blue') },
	              React.createElement(Icon, { glyph: 'icon-fontello-stop icon-4x', className: 'fg-blue' })
	            )
	          )
	        ),
	        React.createElement(
	          Row,
	          null,
	          React.createElement(
	            Col,
	            { xs: 4, className: 'text-center' },
	            React.createElement(
	              'a',
	              { href: '#', style: { border: 'none' }, onClick: this.switchSkin.bind(this, 'purple') },
	              React.createElement(Icon, { glyph: 'icon-fontello-stop icon-4x', className: 'fg-purple' })
	            )
	          ),
	          React.createElement(
	            Col,
	            { xs: 4, className: 'text-center' },
	            React.createElement(
	              'a',
	              { href: '#', style: { border: 'none' }, onClick: this.switchSkin.bind(this, 'brown') },
	              React.createElement(Icon, { glyph: 'icon-fontello-stop icon-4x', className: 'fg-brown' })
	            )
	          ),
	          React.createElement(
	            Col,
	            { xs: 4, className: 'text-center' },
	            React.createElement(
	              'a',
	              { href: '#', style: { border: 'none' }, onClick: this.switchSkin.bind(this, 'cyan') },
	              React.createElement(Icon, { glyph: 'icon-fontello-stop icon-4x', className: 'fg-darkcyan' })
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Skins;
	})(React.Component);

	Skins.skins = ['default', 'green', 'blue', 'purple', 'brown', 'cyan'];

	var HeaderNavigation = React.createClass({
	  displayName: 'HeaderNavigation',

	  mixins: [_reactRouter.State, _reactRouter.Navigation],
	  getInitialState: function getInitialState() {
	    return { selectedFlag: 'United-States' };
	  },
	  handleSkinSwitch: function handleSkinSwitch(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var vexContent;
	    vex.dialog.open({
	      afterOpen: function afterOpen($vexContent) {
	        vexContent = $vexContent;
	        return React.render(React.createElement(Skins, { id: $vexContent.data().vex.id }), $vexContent.get(0));
	      },
	      afterClose: function afterClose() {
	        React.unmountComponentAtNode(vexContent.get(0));
	      }
	    });
	  },
	  handleLogout: function handleLogout(e) {
	    var _this = this;

	    $('body').addClass('fade-out');
	    setTimeout(function () {
	      _this.transitionTo('/');
	    }, 250);
	  },
	  componentDidMount: function componentDidMount() {},
	  componentWillUnmount: function componentWillUnmount() {},
	  render: function render() {
	    return React.createElement(
	      NavContent,
	      _extends({ className: 'pull-right' }, this.props),
	      React.createElement(
	        Nav,
	        { className: 'hidden-xs' },
	        React.createElement(NavItem, { divider: true }),
	        React.createElement(
	          NavItem,
	          { className: 'hidden-sm' },
	          React.createElement(
	            'a',
	            { href: '#', onClick: this.handleSkinSwitch },
	            React.createElement(Icon, { glyph: 'icon-fontello-circle', className: 'fg-theme', style: { lineHeight: 1, fontSize: 24 } })
	          )
	        ),
	        React.createElement(NavItem, { divider: true })
	      ),
	      React.createElement(
	        Nav,
	        null,
	        React.createElement(
	          NavItem,
	          { className: 'logout', href: '#', onClick: this.handleLogout },
	          React.createElement(Icon, { bundle: 'fontello', glyph: 'off-1' })
	        )
	      )
	    );
	  }
	});

	var Header = (function (_React$Component3) {
	  _inherits(Header, _React$Component3);

	  function Header() {
	    _classCallCheck(this, Header);

	    _get(Object.getPrototypeOf(Header.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Header, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Grid,
	        _extends({ id: 'navbar' }, this.props),
	        React.createElement(
	          Row,
	          null,
	          React.createElement(
	            Col,
	            { xs: 12 },
	            React.createElement(
	              NavBar,
	              { fixedTop: true, id: 'rubix-nav-header' },
	              React.createElement(
	                Container,
	                { fluid: true },
	                React.createElement(
	                  Row,
	                  null,
	                  React.createElement(
	                    Col,
	                    { xs: 3, visible: 'xs' },
	                    React.createElement(_globalJsxSidebar_component.SidebarBtn, null)
	                  ),
	                  React.createElement(
	                    Col,
	                    { xs: 6, sm: 4 },
	                    React.createElement(Brand, null)
	                  ),
	                  React.createElement(
	                    Col,
	                    { xs: 3, sm: 8 },
	                    React.createElement(HeaderNavigation, { pressed: this.props.pressed })
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Header;
	})(React.Component);

	exports['default'] = Header;
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports) {

	/*\
	|*|
	|*|  :: cookies.js ::
	|*|
	|*|  A complete cookies reader/writer framework with full unicode support.
	|*|
	|*|  Revision #1 - September 4, 2014
	|*|
	|*|  https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
	|*|  https://developer.mozilla.org/User:fusionchess
	|*|
	|*|  This framework is released under the GNU Public License, version 3 or later.
	|*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
	|*|
	|*|  Syntaxes:
	|*|
	|*|  * docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
	|*|  * docCookies.getItem(name)
	|*|  * docCookies.removeItem(name[, path[, domain]])
	|*|  * docCookies.hasItem(name)
	|*|  * docCookies.keys()
	|*|
	\*/

	"use strict";

	module.exports = {
	  getItem: function getItem(sKey) {
	    if (!sKey) {
	      return null;
	    }
	    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
	  },
	  setItem: function setItem(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
	    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
	      return false;
	    }
	    var sExpires = "";
	    if (vEnd) {
	      switch (vEnd.constructor) {
	        case Number:
	          sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
	          break;
	        case String:
	          sExpires = "; expires=" + vEnd;
	          break;
	        case Date:
	          sExpires = "; expires=" + vEnd.toUTCString();
	          break;
	      }
	    }
	    document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
	    return true;
	  },
	  removeItem: function removeItem(sKey, sPath, sDomain) {
	    if (!this.hasItem(sKey)) {
	      return false;
	    }
	    document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
	    return true;
	  },
	  hasItem: function hasItem(sKey) {
	    if (!sKey) {
	      return false;
	    }
	    return new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie);
	  },
	  keys: function keys() {
	    var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
	    for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) {
	      aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
	    }
	    return aKeys;
	  }
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _globalJsxSidebar_component = __webpack_require__(39);

	var _storesUser_store = __webpack_require__(43);

	var _storesUser_store2 = _interopRequireDefault(_storesUser_store);

	var _path_helper = __webpack_require__(32);

	var _path_helper2 = _interopRequireDefault(_path_helper);

	var _reactRouter = __webpack_require__(2);

	var _md5 = __webpack_require__(51);

	var _md52 = _interopRequireDefault(_md5);

	var ApplicationSidebar = (function (_React$Component) {
	  _inherits(ApplicationSidebar, _React$Component);

	  function ApplicationSidebar() {
	    _classCallCheck(this, ApplicationSidebar);

	    _get(Object.getPrototypeOf(ApplicationSidebar.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(ApplicationSidebar, [{
	    key: 'handleSignout',
	    value: function handleSignout() {
	      $.post('/users/sign_out', { _method: "delete" }).success().error(function (error) {
	        return console.log(error);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          Grid,
	          null,
	          React.createElement(
	            Row,
	            null,
	            React.createElement(
	              Col,
	              { xs: 12 },
	              React.createElement(
	                'div',
	                { className: 'sidebar-header' },
	                'PAGES'
	              ),
	              React.createElement(
	                'div',
	                { className: 'sidebar-nav-container' },
	                React.createElement(
	                  _globalJsxSidebar_component.SidebarNav,
	                  { style: { marginBottom: 0 } },
	                  React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-fontello-gauge', name: 'Quiz', href: (0, _path_helper2['default'])('/quiz') }),
	                  React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-feather-share', name: 'Forum', href: (0, _path_helper2['default'])('/forum') }),
	                  React.createElement(_globalJsxSidebar_component.SidebarNavItem, { href: (0, _path_helper2['default'])('/history'), glyph: 'icon-fontello-back-in-time', name: 'History of Computer' }),
	                  React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-ikons-calendar', name: 'Calendar', href: (0, _path_helper2['default'])('/calendar') })
	                )
	              )
	            )
	          )
	        ),
	        React.createElement('hr', { style: { borderColor: '#3B4648', borderWidth: 2, marginTop: 15, marginBottom: 0, width: 200 } }),
	        React.createElement(
	          Grid,
	          { gutterBottom: true },
	          React.createElement(
	            Row,
	            null,
	            React.createElement(
	              Col,
	              { xs: 12 },
	              React.createElement(
	                'div',
	                { className: 'sidebar-header' },
	                ' Session '
	              ),
	              React.createElement(
	                'div',
	                { className: 'sidebar-nav-container' },
	                React.createElement(
	                  _globalJsxSidebar_component.SidebarNav,
	                  { style: { marginBottom: 0 } },
	                  React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-ikons-logout', onClick: this.handleSignout, name: 'Logout', href: '/' }),
	                  React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-ikons-user', name: 'Profile', href: (0, _path_helper2['default'])('/profile') }),
	                  React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-ikons-lock', name: 'Lock Page', href: (0, _path_helper2['default'])('/lock') })
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return ApplicationSidebar;
	})(React.Component);

	var _default = (function (_React$Component2) {
	  _inherits(_default, _React$Component2);

	  function _default(props) {
	    _classCallCheck(this, _default);

	    _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).call(this, props);
	    var state = _storesUser_store2['default'].getState();
	    state.name = user.name;
	    state.email = user.email;
	    state.gravatar = 'http://www.gravatar.com/avatar/' + (0, _md52['default'])(state.email);
	    this.state = state;
	    this._onChange = this._onChange.bind(this);
	  }

	  _createClass(_default, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _storesUser_store2['default'].addChangeListener(this._onChange);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _storesUser_store2['default'].removeChangeListener(this._onChange);
	    }
	  }, {
	    key: '_onChange',
	    value: function _onChange() {
	      this.setState(_storesUser_store2['default'].getState());
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        _extends({ id: 'sidebar' }, this.props),
	        React.createElement(
	          'div',
	          { id: 'avatar' },
	          React.createElement(
	            Grid,
	            null,
	            React.createElement(
	              Row,
	              { className: 'fg-white' },
	              React.createElement(
	                Col,
	                { xs: 4, collapseRight: true },
	                React.createElement('img', { src: this.state.gravatar, width: '40', height: '40' })
	              ),
	              React.createElement(
	                Col,
	                { xs: 8, collapseLeft: true, id: 'avatar-col' },
	                React.createElement(
	                  'div',
	                  { style: { top: 23, fontSize: 16, lineHeight: 1, position: 'relative' } },
	                  this.state.name
	                ),
	                React.createElement(
	                  'div',
	                  null,
	                  React.createElement(Progress, { id: 'demo-progress', value: 30, min: 0, max: 100, color: '#ffffff' }),
	                  React.createElement(
	                    _reactRouter.Link,
	                    { to: (0, _path_helper2['default'])('/lock') },
	                    React.createElement(Icon, { id: 'demo-icon', bundle: 'fontello', glyph: 'lock-5' })
	                  )
	                )
	              )
	            )
	          )
	        ),
	        React.createElement(
	          'div',
	          { id: 'sidebar-container' },
	          React.createElement(
	            _globalJsxSidebar_component.Sidebar,
	            { sidebar: 0, active: true },
	            React.createElement(ApplicationSidebar, null)
	          )
	        )
	      );
	    }
	  }]);

	  return _default;
	})(React.Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _dispatcher = __webpack_require__(44);

	var _dispatcher2 = _interopRequireDefault(_dispatcher);

	var _action_type = __webpack_require__(48);

	var _action_type2 = _interopRequireDefault(_action_type);

	var _storesApp_event_emitter = __webpack_require__(49);

	var _storesApp_event_emitter2 = _interopRequireDefault(_storesApp_event_emitter);

	var _user = {
	  status: "",
	  error: ""
	};

	var UserEventEmitter = (function (_AppEventEmiter) {
	  _inherits(UserEventEmitter, _AppEventEmiter);

	  function UserEventEmitter() {
	    _classCallCheck(this, UserEventEmitter);

	    _get(Object.getPrototypeOf(UserEventEmitter.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(UserEventEmitter, [{
	    key: 'getState',
	    value: function getState() {
	      return _user;
	    }
	  }, {
	    key: 'getStatus',
	    value: function getStatus() {
	      return _user.status;
	    }
	  }, {
	    key: 'getErrors',
	    value: function getErrors() {
	      if (_user.error.responseJSON != undefined) return _user.error.responseJSON.errors;else return { "": _user.error.responseText };
	    }
	  }]);

	  return UserEventEmitter;
	})(_storesApp_event_emitter2['default']);

	var UserStore = new UserEventEmitter();

	_dispatcher2['default'].register(function (action) {
	  switch (action.actionType) {
	    case _action_type2['default'].SIGNUP_SUCCESSFUL:
	      _user.status = _action_type2['default'].SIGNUP_SUCCESSFUL;
	      UserStore.emitChange();
	      break;
	    case _action_type2['default'].SIGNUP_ERROR:
	      _user.status = _action_type2['default'].SIGNUP_ERROR;
	      _user.error = action.error;
	      UserStore.emitChange();
	      break;
	    case _action_type2['default'].SIGNIN_SUCCESSFUL:
	      _user.status = _action_type2['default'].SIGNIN_SUCCESSFUL;
	      UserStore.emitChange();
	      break;
	    case _action_type2['default'].SIGNIN_ERROR:
	      _user.status = _action_type2['default'].SIGNIN_ERROR;
	      _user.error = action.error;
	      UserStore.emitChange();
	      break;
	    default:
	  }
	});

	exports['default'] = UserStore;
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _flux = __webpack_require__(45);

	var _flux2 = _interopRequireDefault(_flux);

	exports['default'] = new _flux2['default'].Dispatcher();
	module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	module.exports.Dispatcher = __webpack_require__(46);


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Dispatcher
	 * 
	 * @preventMunge
	 */

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var invariant = __webpack_require__(47);

	var _prefix = 'ID_';

	/**
	 * Dispatcher is used to broadcast payloads to registered callbacks. This is
	 * different from generic pub-sub systems in two ways:
	 *
	 *   1) Callbacks are not subscribed to particular events. Every payload is
	 *      dispatched to every registered callback.
	 *   2) Callbacks can be deferred in whole or part until other callbacks have
	 *      been executed.
	 *
	 * For example, consider this hypothetical flight destination form, which
	 * selects a default city when a country is selected:
	 *
	 *   var flightDispatcher = new Dispatcher();
	 *
	 *   // Keeps track of which country is selected
	 *   var CountryStore = {country: null};
	 *
	 *   // Keeps track of which city is selected
	 *   var CityStore = {city: null};
	 *
	 *   // Keeps track of the base flight price of the selected city
	 *   var FlightPriceStore = {price: null}
	 *
	 * When a user changes the selected city, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'city-update',
	 *     selectedCity: 'paris'
	 *   });
	 *
	 * This payload is digested by `CityStore`:
	 *
	 *   flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'city-update') {
	 *       CityStore.city = payload.selectedCity;
	 *     }
	 *   });
	 *
	 * When the user selects a country, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'country-update',
	 *     selectedCountry: 'australia'
	 *   });
	 *
	 * This payload is digested by both stores:
	 *
	 *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       CountryStore.country = payload.selectedCountry;
	 *     }
	 *   });
	 *
	 * When the callback to update `CountryStore` is registered, we save a reference
	 * to the returned token. Using this token with `waitFor()`, we can guarantee
	 * that `CountryStore` is updated before the callback that updates `CityStore`
	 * needs to query its data.
	 *
	 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       // `CountryStore.country` may not be updated.
	 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
	 *       // `CountryStore.country` is now guaranteed to be updated.
	 *
	 *       // Select the default city for the new country
	 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
	 *     }
	 *   });
	 *
	 * The usage of `waitFor()` can be chained, for example:
	 *
	 *   FlightPriceStore.dispatchToken =
	 *     flightDispatcher.register(function(payload) {
	 *       switch (payload.actionType) {
	 *         case 'country-update':
	 *         case 'city-update':
	 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
	 *           FlightPriceStore.price =
	 *             getFlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *     }
	 *   });
	 *
	 * The `country-update` payload will be guaranteed to invoke the stores'
	 * registered callbacks in order: `CountryStore`, `CityStore`, then
	 * `FlightPriceStore`.
	 */

	var Dispatcher = (function () {
	  function Dispatcher() {
	    _classCallCheck(this, Dispatcher);

	    this._callbacks = {};
	    this._isDispatching = false;
	    this._isHandled = {};
	    this._isPending = {};
	    this._lastID = 1;
	  }

	  /**
	   * Registers a callback to be invoked with every dispatched payload. Returns
	   * a token that can be used with `waitFor()`.
	   */

	  Dispatcher.prototype.register = function register(callback) {
	    var id = _prefix + this._lastID++;
	    this._callbacks[id] = callback;
	    return id;
	  };

	  /**
	   * Removes a callback based on its token.
	   */

	  Dispatcher.prototype.unregister = function unregister(id) {
	    !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	    delete this._callbacks[id];
	  };

	  /**
	   * Waits for the callbacks specified to be invoked before continuing execution
	   * of the current callback. This method should only be used by a callback in
	   * response to a dispatched payload.
	   */

	  Dispatcher.prototype.waitFor = function waitFor(ids) {
	    !this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Must be invoked while dispatching.') : invariant(false) : undefined;
	    for (var ii = 0; ii < ids.length; ii++) {
	      var id = ids[ii];
	      if (this._isPending[id]) {
	        !this._isHandled[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id) : invariant(false) : undefined;
	        continue;
	      }
	      !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	      this._invokeCallback(id);
	    }
	  };

	  /**
	   * Dispatches a payload to all registered callbacks.
	   */

	  Dispatcher.prototype.dispatch = function dispatch(payload) {
	    !!this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.') : invariant(false) : undefined;
	    this._startDispatching(payload);
	    try {
	      for (var id in this._callbacks) {
	        if (this._isPending[id]) {
	          continue;
	        }
	        this._invokeCallback(id);
	      }
	    } finally {
	      this._stopDispatching();
	    }
	  };

	  /**
	   * Is this Dispatcher currently dispatching.
	   */

	  Dispatcher.prototype.isDispatching = function isDispatching() {
	    return this._isDispatching;
	  };

	  /**
	   * Call the callback stored with the given id. Also do some internal
	   * bookkeeping.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._invokeCallback = function _invokeCallback(id) {
	    this._isPending[id] = true;
	    this._callbacks[id](this._pendingPayload);
	    this._isHandled[id] = true;
	  };

	  /**
	   * Set up bookkeeping needed when dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._startDispatching = function _startDispatching(payload) {
	    for (var id in this._callbacks) {
	      this._isPending[id] = false;
	      this._isHandled[id] = false;
	    }
	    this._pendingPayload = payload;
	    this._isDispatching = true;
	  };

	  /**
	   * Clear bookkeeping used for dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._stopDispatching = function _stopDispatching() {
	    delete this._pendingPayload;
	    this._isDispatching = false;
	  };

	  return Dispatcher;
	})();

	module.exports = Dispatcher;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

	"use strict";

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function (condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 48 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
	  SIGNUP_SUCCESSFUL: 1,
	  SIGNUP_ERROR: 2,
	  SIGNIN_SUCCESSFUL: 3,
	  SIGNIN_ERROR: 4,
	  RECEIVED_TWEETS: 5,
	  RECEIVED_TWEET: 6,
	  RECEIVED_LIKE: 7,
	  DELETED_LIKE: 8,
	  RECEIVED_COMMENT: 9,
	  DELETED_COMMENT: 10
	};
	module.exports = exports["default"];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _events = __webpack_require__(50);

	var _events2 = _interopRequireDefault(_events);

	var CHANGE_EVENT = "change";

	var AppEventEmitter = (function (_EventEmiter) {
	  _inherits(AppEventEmitter, _EventEmiter);

	  function AppEventEmitter() {
	    _classCallCheck(this, AppEventEmitter);

	    _get(Object.getPrototypeOf(AppEventEmitter.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(AppEventEmitter, [{
	    key: "emitChange",
	    value: function emitChange() {
	      this.emit(CHANGE_EVENT);
	    }
	  }, {
	    key: "addChangeListener",
	    value: function addChangeListener(callback) {
	      this.on(CHANGE_EVENT, callback);
	    }
	  }, {
	    key: "removeChangeListener",
	    value: function removeChangeListener(callback) {
	      this.removeListener(CHANGE_EVENT, callback);
	    }
	  }]);

	  return AppEventEmitter;
	})(_events2["default"]);

	exports["default"] = AppEventEmitter;
	module.exports = exports["default"];

/***/ },
/* 50 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      }
	      throw TypeError('Uncaught, unspecified "error" event.');
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	(function(){
	  var crypt = __webpack_require__(52),
	      utf8 = __webpack_require__(53).utf8,
	      isBuffer = __webpack_require__(54),
	      bin = __webpack_require__(53).bin,

	  // The core
	  md5 = function (message, options) {
	    // Convert to byte array
	    if (message.constructor == String)
	      if (options && options.encoding === 'binary')
	        message = bin.stringToBytes(message);
	      else
	        message = utf8.stringToBytes(message);
	    else if (isBuffer(message))
	      message = Array.prototype.slice.call(message, 0);
	    else if (!Array.isArray(message))
	      message = message.toString();
	    // else, assume byte array already

	    var m = crypt.bytesToWords(message),
	        l = message.length * 8,
	        a =  1732584193,
	        b = -271733879,
	        c = -1732584194,
	        d =  271733878;

	    // Swap endian
	    for (var i = 0; i < m.length; i++) {
	      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
	             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
	    }

	    // Padding
	    m[l >>> 5] |= 0x80 << (l % 32);
	    m[(((l + 64) >>> 9) << 4) + 14] = l;

	    // Method shortcuts
	    var FF = md5._ff,
	        GG = md5._gg,
	        HH = md5._hh,
	        II = md5._ii;

	    for (var i = 0; i < m.length; i += 16) {

	      var aa = a,
	          bb = b,
	          cc = c,
	          dd = d;

	      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
	      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
	      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
	      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
	      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
	      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
	      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
	      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
	      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
	      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
	      c = FF(c, d, a, b, m[i+10], 17, -42063);
	      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
	      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
	      d = FF(d, a, b, c, m[i+13], 12, -40341101);
	      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
	      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

	      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
	      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
	      c = GG(c, d, a, b, m[i+11], 14,  643717713);
	      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
	      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
	      d = GG(d, a, b, c, m[i+10],  9,  38016083);
	      c = GG(c, d, a, b, m[i+15], 14, -660478335);
	      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
	      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
	      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
	      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
	      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
	      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
	      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
	      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
	      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

	      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
	      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
	      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
	      b = HH(b, c, d, a, m[i+14], 23, -35309556);
	      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
	      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
	      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
	      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
	      a = HH(a, b, c, d, m[i+13],  4,  681279174);
	      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
	      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
	      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
	      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
	      d = HH(d, a, b, c, m[i+12], 11, -421815835);
	      c = HH(c, d, a, b, m[i+15], 16,  530742520);
	      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

	      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
	      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
	      c = II(c, d, a, b, m[i+14], 15, -1416354905);
	      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
	      a = II(a, b, c, d, m[i+12],  6,  1700485571);
	      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
	      c = II(c, d, a, b, m[i+10], 15, -1051523);
	      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
	      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
	      d = II(d, a, b, c, m[i+15], 10, -30611744);
	      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
	      b = II(b, c, d, a, m[i+13], 21,  1309151649);
	      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
	      d = II(d, a, b, c, m[i+11], 10, -1120210379);
	      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
	      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

	      a = (a + aa) >>> 0;
	      b = (b + bb) >>> 0;
	      c = (c + cc) >>> 0;
	      d = (d + dd) >>> 0;
	    }

	    return crypt.endian([a, b, c, d]);
	  };

	  // Auxiliary functions
	  md5._ff  = function (a, b, c, d, x, s, t) {
	    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
	    return ((n << s) | (n >>> (32 - s))) + b;
	  };
	  md5._gg  = function (a, b, c, d, x, s, t) {
	    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
	    return ((n << s) | (n >>> (32 - s))) + b;
	  };
	  md5._hh  = function (a, b, c, d, x, s, t) {
	    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
	    return ((n << s) | (n >>> (32 - s))) + b;
	  };
	  md5._ii  = function (a, b, c, d, x, s, t) {
	    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
	    return ((n << s) | (n >>> (32 - s))) + b;
	  };

	  // Package private blocksize
	  md5._blocksize = 16;
	  md5._digestsize = 16;

	  module.exports = function (message, options) {
	    if(typeof message == 'undefined')
	      return;

	    var digestbytes = crypt.wordsToBytes(md5(message, options));
	    return options && options.asBytes ? digestbytes :
	        options && options.asString ? bin.bytesToString(digestbytes) :
	        crypt.bytesToHex(digestbytes);
	  };

	})();


/***/ },
/* 52 */
/***/ function(module, exports) {

	(function() {
	  var base64map
	      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

	  crypt = {
	    // Bit-wise rotation left
	    rotl: function(n, b) {
	      return (n << b) | (n >>> (32 - b));
	    },

	    // Bit-wise rotation right
	    rotr: function(n, b) {
	      return (n << (32 - b)) | (n >>> b);
	    },

	    // Swap big-endian to little-endian and vice versa
	    endian: function(n) {
	      // If number given, swap endian
	      if (n.constructor == Number) {
	        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
	      }

	      // Else, assume array and swap all items
	      for (var i = 0; i < n.length; i++)
	        n[i] = crypt.endian(n[i]);
	      return n;
	    },

	    // Generate an array of any length of random bytes
	    randomBytes: function(n) {
	      for (var bytes = []; n > 0; n--)
	        bytes.push(Math.floor(Math.random() * 256));
	      return bytes;
	    },

	    // Convert a byte array to big-endian 32-bit words
	    bytesToWords: function(bytes) {
	      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
	        words[b >>> 5] |= bytes[i] << (24 - b % 32);
	      return words;
	    },

	    // Convert big-endian 32-bit words to a byte array
	    wordsToBytes: function(words) {
	      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
	        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
	      return bytes;
	    },

	    // Convert a byte array to a hex string
	    bytesToHex: function(bytes) {
	      for (var hex = [], i = 0; i < bytes.length; i++) {
	        hex.push((bytes[i] >>> 4).toString(16));
	        hex.push((bytes[i] & 0xF).toString(16));
	      }
	      return hex.join('');
	    },

	    // Convert a hex string to a byte array
	    hexToBytes: function(hex) {
	      for (var bytes = [], c = 0; c < hex.length; c += 2)
	        bytes.push(parseInt(hex.substr(c, 2), 16));
	      return bytes;
	    },

	    // Convert a byte array to a base-64 string
	    bytesToBase64: function(bytes) {
	      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
	        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
	        for (var j = 0; j < 4; j++)
	          if (i * 8 + j * 6 <= bytes.length * 8)
	            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
	          else
	            base64.push('=');
	      }
	      return base64.join('');
	    },

	    // Convert a base-64 string to a byte array
	    base64ToBytes: function(base64) {
	      // Remove non-base-64 characters
	      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

	      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
	          imod4 = ++i % 4) {
	        if (imod4 == 0) continue;
	        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
	            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
	            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
	      }
	      return bytes;
	    }
	  };

	  module.exports = crypt;
	})();


/***/ },
/* 53 */
/***/ function(module, exports) {

	var charenc = {
	  // UTF-8 encoding
	  utf8: {
	    // Convert a string to a byte array
	    stringToBytes: function(str) {
	      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
	    },

	    // Convert a byte array to a string
	    bytesToString: function(bytes) {
	      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
	    }
	  },

	  // Binary encoding
	  bin: {
	    // Convert a string to a byte array
	    stringToBytes: function(str) {
	      for (var bytes = [], i = 0; i < str.length; i++)
	        bytes.push(str.charCodeAt(i) & 0xFF);
	      return bytes;
	    },

	    // Convert a byte array to a string
	    bytesToString: function(bytes) {
	      for (var str = [], i = 0; i < bytes.length; i++)
	        str.push(String.fromCharCode(bytes[i]));
	      return str.join('');
	    }
	  }
	};

	module.exports = charenc;


/***/ },
/* 54 */
/***/ function(module, exports) {

	/**
	 * Determine if an object is Buffer
	 *
	 * Author:   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * License:  MIT
	 *
	 * `npm install is-buffer`
	 */

	module.exports = function (obj) {
	  return !!(obj != null &&
	    (obj._isBuffer || // For Safari 5-7 (missing Object.prototype.constructor)
	      (obj.constructor &&
	      typeof obj.constructor.isBuffer === 'function' &&
	      obj.constructor.isBuffer(obj))
	    ))
	}


/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _default = (function (_React$Component) {
	  _inherits(_default, _React$Component);

	  function _default(props) {
	    _classCallCheck(this, _default);

	    _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).call(this, props);

	    this.state = {
	      version: 0
	    };
	  }

	  _createClass(_default, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({
	        version: document.getElementsByTagName('body')[0].getAttribute('data-version')
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { id: 'footer-container' },
	        React.createElement(
	          Grid,
	          { id: 'footer', className: 'text-center' },
	          React.createElement(
	            Row,
	            null,
	            React.createElement(
	              Col,
	              { xs: 12 },
	              React.createElement(
	                'div',
	                null,
	                '© 2016 Schwannden Kuo - schwannden.com '
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return _default;
	})(React.Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @providesModule ReactStyle
	 */

	'use strict';

	var ReactStyleRules = __webpack_require__(57);
	var ReactStyleRulesManager = __webpack_require__(58);

	/**
	 * @constructor
	 */
	function ReactStyle() {
	  // Stylesheet has limits in Internet Explorer 8 and 9 so we need to
	  // shard style rules into several stylesheets.
	  // 1. A sheet may contain up to 4095 rules.
	  // 2. A sheet may @import up to 31 sheets
	  // See http://bit.ly/mARqBv
	  this._rulesManager = new ReactStyleRulesManager(4095, 31);
	  this._listenersMap = {};
	  this._changeEvent = { target: this, type: 'change' };
	}

	/**
	 * @param {object} rulesMap
	 * @return {ReactStyleRules}
	 */
	ReactStyle.prototype.create = function (rulesMap) {
	  return new ReactStyleRules(rulesMap);
	};

	/**
	 * @param {ReactStyleRules} styleRules
	 * @return {ReactStyle}
	 */
	ReactStyle.prototype.addRules = function (styleRules) {
	  if (this._rulesManager.addRules(styleRules)) {
	    this.dispatchEvent(this._changeEvent);
	  }
	  return this;
	};

	/**
	 * @return {array<object>}
	 */
	ReactStyle.prototype.renderToComponents = function () {
	  return this._rulesManager.renderToComponents();
	};

	/**
	 * Implements W3C {EventTarget} interface
	 * @param {string} type
	 * @param {function|EventListener}
	 */
	ReactStyle.prototype.addEventListener = function (type, listener) {
	  var listeners = this._listenersMap[type] || [];
	  if (listeners.indexOf(listener) < 0) {
	    listeners.push(listener);
	  }
	  this._listenersMap[type] = listeners;
	};

	/**
	 * Implements W3C {EventTarget} interface
	 * @param {string} type
	 * @param {function|EventListener}
	 */
	ReactStyle.prototype.removeEventListener = function (type, listener) {
	  var listeners = this._listenersMap[type];
	  if (listeners) {
	    var idx = listeners.indexOf(listener);
	    if (idx > -1) {
	      listener.splice(listener);
	    }
	  }
	};

	/**
	 * Implements W3C {EventTarget} interface
	 * @param {object} evt
	 * @return {boolean}
	 */
	ReactStyle.prototype.dispatchEvent = function (evt) {
	  var type = evt.type;
	  var listeners = this._listenersMap[type];
	  if (listeners) {
	    for (var i = 0, j = listeners.length; i < j; i++) {
	      var handler = listeners[i];
	      if (handler.handleEvent) {
	        handler.handleEvent.call(this, evt);
	      } else {
	        handler.call(this, evt);
	      }
	    }
	  }
	  return true;
	};

	// Export the singleton instance.
	module.exports = new ReactStyle();

/***/ },
/* 57 */
/***/ function(module, exports) {

	/**
	 * @providesModule ReactStyleRules
	 */

	'use strict';

	/**
	 * @type {RegExp}
	 */
	var CLASSNAME_SELECTOR_PATTERN = /(\.)([a-zA-Z_\-][a-zA-Z_\-\d]*)/ig;

	/**
	 * @type {RegExp}
	 */
	var HYPHENATE_PATTERN = /([a-z])([A-Z])/g;

	/**
	 * @type {number}
	 */
	var _namespaceID = 0;

	/**
	 * @param {object} rulesMap
	 * @constructor
	 */
	function ReactStyleRules(rulesMap) {
	  var namespace = '';
	  var i = 0;
	  var rules = [];
	  var replacer = namespaceReplacer.bind(null, this, namespace);
	  for (var selectors in rulesMap) {
	    var ruleText = namespacify(selectors, replacer) + '{';
	    var declarations = rulesMap[selectors];
	    for (var property in declarations) {
	      var value = declarations[property];
	      ruleText += hyphenate(property) + ':' + value + ';';
	    }
	    ruleText += '}';
	    rules[i] = ruleText.replace("\\", '');
	    i++;
	  }

	  this._rules = rules;
	  this._namespace = namespace;
	  this.length = rules.length;
	}

	/**
	 * @return {string}
	 */
	ReactStyleRules.prototype.toString = function () {
	  return this._rules.join('\n');
	};

	/**
	 * @param {string} str
	 * @param {string} newSubStr
	 * @return {string}
	 */
	function namespacify(str, newSubStr) {
	  return str.replace(CLASSNAME_SELECTOR_PATTERN, newSubStr);
	}

	/**
	 * @param {object} classNameMap
	 * @param {string} namespace
	 * @param {string} m1
	 * @param {string} m2
	 * @param {string} className
	 * @return {string}
	 */
	function namespaceReplacer(classNameMap, namespace, m1, m2, className) {
	  var newClassName = namespace + className;
	  classNameMap[className] = newClassName;
	  return '.\\' + newClassName;
	}

	/**
	 * @param {string} str
	 * @return {string}
	 */
	function hyphenate(str) {
	  return str.replace(HYPHENATE_PATTERN, '$1-$2').toLowerCase();
	}

	module.exports = ReactStyleRules;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @providesModule ReactStyleRulesManager
	 * @jsx React.DOM
	 */

	'use strict';

	var ReactStyleRules = __webpack_require__(57);

	/**
	 * @param {number} maxRulesLengthPerStyle
	 * @param {number} maxComponentsLength
	 * @constructor
	 */
	function ReactStyleRulesManager(maxRulesLengthPerStyle, maxComponentsLength) {
	  /**
	   * @type {array<ReactStyleRules>}
	   */
	  this._styleRulesList = [];

	  /**
	   * @type {number}
	   */
	  this._maxRulesLengthPerStyle = maxRulesLengthPerStyle;

	  /**
	   * @type {number}
	   */
	  this._maxComponentsLength = maxComponentsLength;
	}

	/**
	 * @param {ReactStyleRules} styleRules
	 * @return {boolean}
	 */
	ReactStyleRulesManager.prototype.addRules = function (styleRules) {
	  if (!styleRules || styleRules.constructor !== ReactStyleRules) {
	    throw new Error('Invalid rules');
	  }
	  var styleRulesList = this._styleRulesList;
	  for (var i = 0, j = styleRulesList.lenth; i < j; i++) {
	    var anotherReactStyleRules = styleRulesList[i];
	    if (anotherReactStyleRules === styleRules) {
	      return false;
	    }
	  }
	  styleRulesList.push(styleRules);
	  return true;
	};

	/**
	 * @return {array<object>}
	 */
	ReactStyleRulesManager.prototype.renderToComponents = function () {
	  var styleRulesList = this._styleRulesList;
	  var components = [];
	  var cssText = '';
	  var rulesCount = 0;
	  var index = 0;
	  var maxRulesLengthPerStyle = this._maxRulesLengthPerStyle;
	  var maxComponentsLength = this._maxComponentsLength;

	  for (var i = 0, j = styleRulesList.length; i < j; i++) {
	    var styleRules = styleRulesList[i];
	    var newRulesCount = rulesCount + styleRules.length;
	    if (newRulesCount > maxRulesLengthPerStyle) {
	      if (cssText) {
	        components.push(React.createElement('style', {
	          key: 's' + index++,
	          dangerouslySetInnerHTML: { __html: cssText }
	        }));
	        cssText = '';
	        rulesCount = 0;
	      }
	    } else {
	      rulesCount = newRulesCount;
	      cssText += styleRules.toString();
	    }
	  }

	  if (cssText) {
	    components.push(React.createElement('style', {
	      key: 's' + index++,
	      dangerouslySetInnerHTML: { __html: cssText }
	    }));
	    cssText = null;
	  }

	  if (components.lenth > maxComponentsLength) {
	    throw new Error('Too many styles');
	  }

	  return components;
	};

	module.exports = ReactStyleRulesManager;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _classnames = __webpack_require__(37);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _globalJsxSidebar_component = __webpack_require__(39);

	var _globalJsxSidebar_component2 = _interopRequireDefault(_globalJsxSidebar_component);

	var _actionsTweet_actions = __webpack_require__(60);

	var _actionsTweet_actions2 = _interopRequireDefault(_actionsTweet_actions);

	var _storesTweet_store = __webpack_require__(63);

	var _storesTweet_store2 = _interopRequireDefault(_storesTweet_store);

	var _routesTweets_list = __webpack_require__(64);

	var _routesTweets_list2 = _interopRequireDefault(_routesTweets_list);

	var _commonHeader = __webpack_require__(40);

	var _commonHeader2 = _interopRequireDefault(_commonHeader);

	var _commonSidebar = __webpack_require__(42);

	var _commonSidebar2 = _interopRequireDefault(_commonSidebar);

	var _commonFooter = __webpack_require__(55);

	var _commonFooter2 = _interopRequireDefault(_commonFooter);

	var Body = (function (_React$Component) {
	  _inherits(Body, _React$Component);

	  function Body(props) {
	    _classCallCheck(this, Body);

	    _get(Object.getPrototypeOf(Body.prototype), 'constructor', this).call(this, props);
	    this.state = _storesTweet_store2['default'].getState();
	    this._onChange = this._onChange.bind(this);
	    _actionsTweet_actions2['default'].getTweets();
	  }

	  _createClass(Body, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      $('html').addClass('social');
	      _storesTweet_store2['default'].addChangeListener(this._onChange);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _storesTweet_store2['default'].removeChangeListener(this._onChange);
	      $('html').removeClass('social');
	    }
	  }, {
	    key: '_onChange',
	    value: function _onChange() {
	      this.setState(_storesTweet_store2['default'].getState(), function () {
	        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Container,
	        { id: 'body', className: 'social' },
	        React.createElement(
	          Grid,
	          null,
	          React.createElement(_routesTweets_list2['default'], { tweets: this.state.tweets })
	        ),
	        this.props.children
	      );
	    }
	  }]);

	  return Body;
	})(React.Component);

	var _default = (function (_React$Component2) {
	  _inherits(_default, _React$Component2);

	  function _default() {
	    _classCallCheck(this, _default2);

	    _get(Object.getPrototypeOf(_default2.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(_default, [{
	    key: 'render',
	    value: function render() {
	      var classes = (0, _classnames2['default'])({
	        'container-open': this.props.open
	      });

	      return React.createElement(
	        Container,
	        { id: 'container', className: classes },
	        React.createElement(_commonSidebar2['default'], null),
	        React.createElement(_commonHeader2['default'], null),
	        React.createElement(Body, null),
	        React.createElement(_commonFooter2['default'], null)
	      );
	    }
	  }]);

	  var _default2 = _default;
	  _default = (0, _globalJsxSidebar_component2['default'])(_default) || _default;
	  return _default;
	})(React.Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _API = __webpack_require__(61);

	var _API2 = _interopRequireDefault(_API);

	exports['default'] = {
	  getTweets: function getTweets() {
	    _API2['default'].getTweets();
	  },

	  createTweet: function createTweet(form_data) {
	    _API2['default'].createTweet(form_data);
	  },

	  createLike: function createLike(tweet_id) {
	    _API2['default'].createLike(tweet_id);
	  },

	  deleteLike: function deleteLike(like_id) {
	    _API2['default'].deleteLike(like_id);
	  },

	  createComment: function createComment(tweet_id) {
	    _API2['default'].createComment(tweet_id);
	  },

	  deleteComment: function deleteComment(comment_id) {
	    _API2['default'].deleteComment(comment_id);
	  }

	};
	module.exports = exports['default'];

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _actionsServer_actions = __webpack_require__(62);

	var _actionsServer_actions2 = _interopRequireDefault(_actionsServer_actions);

	exports['default'] = {
	  user_signup: function user_signup(form_data) {
	    $.post('/users', form_data).success(function (response) {
	      _actionsServer_actions2['default'].signup_successful();
	    }).error(function (error) {
	      _actionsServer_actions2['default'].signup_error(error);
	    });
	  },

	  user_signin: function user_signin(form_data) {
	    $.post('/users/sign_in', form_data).success(function (response) {
	      _actionsServer_actions2['default'].signin_successful();
	    }).error(function (error) {
	      _actionsServer_actions2['default'].signin_error(error);
	    });
	  },

	  getTweets: function getTweets() {
	    $.get("/tweets").success(function (data) {
	      return _actionsServer_actions2['default'].receivedTweets(data);
	    }).error(function (error) {
	      return console.log(error);
	    });
	  },

	  createTweet: function createTweet(form_data) {
	    $.post("/tweets", form_data).success(function (data) {
	      return _actionsServer_actions2['default'].receivedTweet(data);
	    }).error(function (error) {
	      return console.log(error);
	    });
	  },

	  createLike: function createLike(tweet_id) {
	    var params = { "like": { "to_id": tweet_id } };
	    $.post("/likes", params).success(function (data) {
	      return _actionsServer_actions2['default'].receivedLike(data);
	    }).error(function (error) {
	      return console.log(error);
	    });
	  },

	  deleteLike: function deleteLike(like_id) {
	    $.post("/likes/" + like_id, { _method: "delete" }).success(function (data) {
	      return _actionsServer_actions2['default'].deletedLike(data);
	    }).error(function (error) {
	      return console.log(error);
	    });
	  },

	  createComment: function createComment(form_data) {
	    $.post("/comments", form_data).success(function (data) {
	      return _actionsServer_actions2['default'].receivedComment(data);
	    }).error(function (error) {
	      return console.log(error);
	    });
	  },

	  deleteComment: function deleteComment(comment_id) {
	    $.post("/comments/" + comment_id, { _method: "delete" }).success(function (data) {
	      return _actionsServer_actions2['default'].deletedComment(data);
	    }).error(function (error) {
	      return console.log(error);
	    });
	  }

	};
	module.exports = exports['default'];

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _dispatcher = __webpack_require__(44);

	var _dispatcher2 = _interopRequireDefault(_dispatcher);

	var _action_type = __webpack_require__(48);

	var _action_type2 = _interopRequireDefault(_action_type);

	exports['default'] = {
	  signup_successful: function signup_successful() {
	    _dispatcher2['default'].dispatch({
	      actionType: _action_type2['default'].SIGNUP_SUCCESSFUL
	    });
	  },

	  signup_error: function signup_error(error) {
	    _dispatcher2['default'].dispatch({
	      actionType: _action_type2['default'].SIGNUP_ERROR,
	      error: error
	    });
	  },

	  signin_successful: function signin_successful() {
	    _dispatcher2['default'].dispatch({
	      actionType: _action_type2['default'].SIGNIN_SUCCESSFUL
	    });
	  },

	  signin_error: function signin_error(error) {
	    _dispatcher2['default'].dispatch({
	      actionType: _action_type2['default'].SIGNIN_ERROR,
	      error: error
	    });
	  },

	  receivedTweets: function receivedTweets(data) {
	    _dispatcher2['default'].dispatch({
	      actionType: _action_type2['default'].RECEIVED_TWEETS,
	      data: data
	    });
	  },

	  receivedTweet: function receivedTweet(data) {
	    _dispatcher2['default'].dispatch({
	      actionType: _action_type2['default'].RECEIVED_TWEET,
	      rawTweet: data
	    });
	  },

	  receivedLike: function receivedLike(data) {
	    _dispatcher2['default'].dispatch({
	      actionType: _action_type2['default'].RECEIVED_LIKE,
	      rawLike: data
	    });
	  },

	  deletedLike: function deletedLike(data) {
	    _dispatcher2['default'].dispatch({
	      actionType: _action_type2['default'].DELETED_LIKE,
	      deletedLike: data
	    });
	  },

	  receivedComment: function receivedComment(data) {
	    _dispatcher2['default'].dispatch({
	      actionType: _action_type2['default'].RECEIVED_COMMENT,
	      rawComment: data
	    });
	  },

	  deletedComment: function deletedComment(data) {
	    _dispatcher2['default'].dispatch({
	      actionType: _action_type2['default'].DELETED_COMMENT,
	      deletedComment: data
	    });
	  }

	};
	module.exports = exports['default'];

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _dispatcher = __webpack_require__(44);

	var _dispatcher2 = _interopRequireDefault(_dispatcher);

	var _action_type = __webpack_require__(48);

	var _action_type2 = _interopRequireDefault(_action_type);

	var _storesApp_event_emitter = __webpack_require__(49);

	var _storesApp_event_emitter2 = _interopRequireDefault(_storesApp_event_emitter);

	var forum = {
	  tweets: [],
	  likes: [],
	  comments: []
	};

	var TweetEventEmitter = (function (_AppEventEmiter) {
	  _inherits(TweetEventEmitter, _AppEventEmiter);

	  function TweetEventEmitter() {
	    _classCallCheck(this, TweetEventEmitter);

	    _get(Object.getPrototypeOf(TweetEventEmitter.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(TweetEventEmitter, [{
	    key: 'getState',
	    value: function getState() {
	      return {
	        tweets: TweetStore.getTweets()
	      };
	    }
	  }, {
	    key: 'countLikes',
	    value: function countLikes(tweet) {
	      var id = tweet.id;
	      var count = 0,
	          likes = forum.likes,
	          n = likes.length;
	      for (var i = 0; i < n; i++) {
	        if (likes[i].to_id == id) {
	          count++;
	        }
	      }
	      return count;
	    }
	  }, {
	    key: 'find_like',
	    value: function find_like(tweet) {
	      var compare = function compare(like) {
	        return like.from_id == user.id && like.to_id == tweet.id;
	      };
	      var like = forum.likes.find(compare);
	      return like == undefined ? -1 : like.id;
	    }
	  }, {
	    key: 'comments',
	    value: function comments(tweet) {
	      var belongs_to = function belongs_to(tweet) {
	        return function (comment) {
	          return comment.to_id == tweet.id;
	        };
	      };
	      return forum.comments.filter(belongs_to(tweet));
	    }
	  }, {
	    key: 'getTweets',
	    value: function getTweets() {
	      var _this = this;

	      return forum.tweets.map(function (tweet) {
	        tweet.formattedDate = moment(tweet.created_at).fromNow();
	        tweet.likes = _this.countLikes(tweet);
	        tweet.like_id = _this.find_like(tweet);
	        tweet.comments = _this.comments(tweet).map(function (comment) {
	          comment.formattedDate = moment(comment.created_at).fromNow();
	          return comment;
	        });
	        return tweet;
	      });
	    }
	  }]);

	  return TweetEventEmitter;
	})(_storesApp_event_emitter2['default']);

	var TweetStore = new TweetEventEmitter();

	_dispatcher2['default'].register(function (action) {
	  switch (action.actionType) {
	    case _action_type2['default'].RECEIVED_TWEETS:
	      forum.tweets = action.data.tweets;
	      forum.likes = action.data.likes;
	      forum.comments = action.data.comments;
	      TweetStore.emitChange();
	      break;
	    case _action_type2['default'].RECEIVED_TWEET:
	      forum.tweets.unshift(action.rawTweet);
	      TweetStore.emitChange();
	      break;
	    case _action_type2['default'].RECEIVED_LIKE:
	      forum.likes.unshift(action.rawLike);
	      TweetStore.emitChange();
	      break;
	    case _action_type2['default'].DELETED_LIKE:
	      forum.likes = forum.likes.filter(function (like) {
	        return like.id != action.deletedLike.id;
	      });
	      TweetStore.emitChange();
	      break;
	    case _action_type2['default'].RECEIVED_COMMENT:
	      forum.comments.unshift(action.rawComment);
	      TweetStore.emitChange();
	      break;
	    case _action_type2['default'].DELETED_COMMENT:
	      forum.comments = forum.comments.filter(function (comment) {
	        return comment.id != action.deletedComment.id;
	      });
	      TweetStore.emitChange();
	      break;
	    default:
	  }
	});

	exports['default'] = TweetStore;
	module.exports = exports['default'];

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _classnames = __webpack_require__(37);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _routesTweet_box = __webpack_require__(65);

	var _routesTweet_box2 = _interopRequireDefault(_routesTweet_box);

	var _routesTweet = __webpack_require__(66);

	var _routesTweet2 = _interopRequireDefault(_routesTweet);

	var TweetsList = (function (_React$Component) {
	  _inherits(TweetsList, _React$Component);

	  function TweetsList() {
	    _classCallCheck(this, TweetsList);

	    _get(Object.getPrototypeOf(TweetsList.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(TweetsList, [{
	    key: 'render',
	    value: function render() {
	      var tweets = this.props.tweets.map(function (tweet, i) {
	        tweet.float_direction = i % 2 == 1 ? "left" : "right";
	        return React.createElement(_routesTweet2['default'], tweet);
	      });
	      return React.createElement(
	        Row,
	        null,
	        React.createElement(_routesTweet_box2['default'], null),
	        tweets
	      );
	    }
	  }]);

	  return TweetsList;
	})(React.Component);

	exports['default'] = TweetsList;
	module.exports = exports['default'];

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _classnames = __webpack_require__(37);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _actionsTweet_actions = __webpack_require__(60);

	var _actionsTweet_actions2 = _interopRequireDefault(_actionsTweet_actions);

	var TweetBox = (function (_React$Component) {
	  _inherits(TweetBox, _React$Component);

	  function TweetBox() {
	    _classCallCheck(this, TweetBox);

	    _get(Object.getPrototypeOf(TweetBox.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(TweetBox, [{
	    key: 'createTweet',
	    value: function createTweet(event) {
	      event.preventDefault();
	      if (this.refs.message.value != '') {
	        var form_data = {
	          tweet: {
	            message: this.refs.message.value
	          }
	        };
	        _actionsTweet_actions2['default'].createTweet(form_data);
	        this.refs.message.value = '';
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Col,
	        { sm: 6 },
	        React.createElement(
	          PanelContainer,
	          null,
	          React.createElement(
	            'form',
	            { onSubmit: this.createTweet.bind(this) },
	            React.createElement(
	              PanelBody,
	              null,
	              React.createElement(Textarea, { rows: '3', ref: 'message', placeholder: 'What\'s on your mind? (LaTeX and HTML supported, enclose LaTeX in $$', style: { border: 'none' } })
	            ),
	            React.createElement(
	              PanelFooter,
	              { className: 'fg-black75 bg-gray', style: { padding: '12.5px 25px' } },
	              React.createElement(
	                Grid,
	                null,
	                React.createElement(
	                  Row,
	                  null,
	                  React.createElement(
	                    Col,
	                    { xs: 6 },
	                    React.createElement(
	                      'a',
	                      { href: '#', style: { border: 'none' } },
	                      React.createElement(Icon, { glyph: 'icon-dripicons-camera icon-1-and-quarter-x fg-text', style: { marginRight: 25 } })
	                    ),
	                    React.createElement(
	                      'a',
	                      { href: 'https://en.wikibooks.org/wiki/LaTeX/Mathematics', target: '_blank', style: { border: 'none' } },
	                      ' Quick LaTeX Reference'
	                    )
	                  ),
	                  React.createElement(
	                    Col,
	                    { xs: 6, className: 'text-right', collapseLeft: true, collapseRight: true },
	                    React.createElement(
	                      Button,
	                      { type: 'submit', bsStyle: 'darkgreen45' },
	                      'send'
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return TweetBox;
	})(React.Component);

	exports['default'] = TweetBox;
	module.exports = exports['default'];

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _classnames = __webpack_require__(37);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _actionsTweet_actions = __webpack_require__(60);

	var _actionsTweet_actions2 = _interopRequireDefault(_actionsTweet_actions);

	var _routesComment = __webpack_require__(67);

	var _routesComment2 = _interopRequireDefault(_routesComment);

	var Tweet = (function (_React$Component) {
	  _inherits(Tweet, _React$Component);

	  function Tweet() {
	    _classCallCheck(this, Tweet);

	    _get(Object.getPrototypeOf(Tweet.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Tweet, [{
	    key: 'createMarkup',
	    value: function createMarkup(message) {
	      return { __html: message };
	    }
	  }, {
	    key: 'handleLike',
	    value: function handleLike(e) {
	      e.preventDefault();
	      if (this.props.like_id != -1) _actionsTweet_actions2['default'].deleteLike(this.props.like_id);else _actionsTweet_actions2['default'].createLike(this.props.id);
	    }
	  }, {
	    key: 'createComment',
	    value: function createComment(e) {
	      e.preventDefault();
	      if (this.refs.message.value != '') {
	        var form_data = {
	          "comment": {
	            "to_id": this.props.id,
	            "message": this.refs.message.value
	          }
	        };
	        _actionsTweet_actions2['default'].createComment(form_data);
	        this.refs.message.value = '';
	      }
	    }
	  }, {
	    key: 'deleteComment',
	    value: function deleteComment(e) {
	      e.preventDefault();
	      _actionsTweet_actions2['default'].deleteComment(this.props.id);
	    }
	  }, {
	    key: 'likeColor',
	    value: function likeColor() {
	      return this.props.like_id == -1 ? '#89949B' : '#2EB398';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var tweet = this.props;
	      var comments = this.props.comments.map(function (comment) {
	        return React.createElement(_routesComment2['default'], comment);
	      });
	      return React.createElement(
	        Col,
	        { sm: 6, style: { float: this.props.float_direction } },
	        React.createElement(
	          PanelContainer,
	          null,
	          React.createElement(
	            PanelBody,
	            { style: { padding: 25, paddingTop: 12.5 } },
	            React.createElement(
	              'div',
	              { className: 'inbox-avatar' },
	              React.createElement('img', { src: this.props.gravatar, width: '40', height: '40' }),
	              React.createElement(
	                'div',
	                { className: 'inbox-avatar-name' },
	                React.createElement(
	                  'div',
	                  { className: 'fg-darkgrayishblue75' },
	                  this.props.author
	                )
	              ),
	              React.createElement(
	                'div',
	                { className: 'inbox-date hidden-sm hidden-xs fg-text text-right' },
	                React.createElement(
	                  'div',
	                  { style: { position: 'relative', top: 0 } },
	                  React.createElement(Icon, { glyph: 'icon-fontello-anchor icon-1-and-quarter-x' })
	                ),
	                React.createElement(
	                  'div',
	                  { style: { position: 'relative', top: -10 } },
	                  React.createElement(
	                    'small',
	                    null,
	                    React.createElement(
	                      'strong',
	                      null,
	                      this.props.formattedDate
	                    )
	                  )
	                )
	              )
	            ),
	            React.createElement(
	              'div',
	              null,
	              React.createElement('div', { className: 'fg-text', dangerouslySetInnerHTML: this.createMarkup(this.props.message) })
	            )
	          ),
	          React.createElement(
	            PanelFooter,
	            { noRadius: true, className: 'fg-black75 bg-gray', style: { padding: '12.5px 25px', margin: 0 } },
	            React.createElement(
	              Grid,
	              { className: 'fg-text' },
	              React.createElement(
	                Row,
	                null,
	                React.createElement(
	                  Col,
	                  { xs: 6, collapseLeft: true, collapseRight: true },
	                  React.createElement(
	                    'a',
	                    { href: '#', style: { border: 'none', marginRight: 25, color: this.likeColor() },
	                      onClick: this.handleLike.bind(this) },
	                    React.createElement(Icon, { glyph: 'icon-dripicons-thumbs-up icon-1-and-quarter-x' }),
	                    React.createElement(
	                      'span',
	                      { style: { position: 'relative', top: -2, left: 3 } },
	                      'Like'
	                    )
	                  )
	                ),
	                React.createElement(
	                  Col,
	                  { xs: 6, className: 'text-right', collapseLeft: true, collapseRight: true },
	                  React.createElement(
	                    'span',
	                    { style: { top: 5, position: 'relative' } },
	                    React.createElement(
	                      'strong',
	                      null,
	                      this.props.likes
	                    ),
	                    ' people like this'
	                  )
	                )
	              )
	            )
	          ),
	          React.createElement(
	            PanelFooter,
	            { style: { padding: 25, paddingTop: 0, paddingBottom: 0 } },
	            comments
	          ),
	          React.createElement(
	            PanelFooter,
	            { style: { padding: 12.5 } },
	            React.createElement(
	              'form',
	              { onSubmit: this.createComment.bind(this) },
	              React.createElement(Textarea, { ref: 'message', rows: '1', placeholder: 'Write a comment...', style: { border: 'none' } }),
	              React.createElement(
	                Button,
	                { xs: true, outlined: true, type: 'submit', bsStyle: 'primary' },
	                'comment'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Tweet;
	})(React.Component);

	exports['default'] = Tweet;
	module.exports = exports['default'];

/***/ },
/* 67 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Comment = (function (_React$Component) {
	  _inherits(Comment, _React$Component);

	  function Comment() {
	    _classCallCheck(this, Comment);

	    _get(Object.getPrototypeOf(Comment.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Comment, [{
	    key: 'createMarkup',
	    value: function createMarkup(message) {
	      return { __html: message };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { className: 'inbox-avatar', style: { borderBottom: '1px solid #EAEDF1' } },
	        React.createElement('img', { src: this.props.gravatar, width: '30', height: '30', style: { verticalAlign: 'top', top: 10, position: 'relative' } }),
	        React.createElement(
	          'div',
	          { className: 'inbox-avatar-name' },
	          React.createElement(
	            'div',
	            { className: 'fg-darkgrayishblue75' },
	            this.props.author
	          ),
	          React.createElement(
	            'div',
	            { className: 'fg-text' },
	            React.createElement('small', { dangerouslySetInnerHTML: this.createMarkup(this.props.message) })
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'inbox-date hidden-sm hidden-xs fg-text text-right' },
	          React.createElement(
	            'div',
	            null,
	            React.createElement(
	              'small',
	              null,
	              React.createElement(
	                'strong',
	                null,
	                this.props.formattedDate
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Comment;
	})(React.Component);

	exports['default'] = Comment;
	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _classnames = __webpack_require__(37);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _globalJsxSidebar_component = __webpack_require__(39);

	var _globalJsxSidebar_component2 = _interopRequireDefault(_globalJsxSidebar_component);

	var _commonHeader = __webpack_require__(40);

	var _commonHeader2 = _interopRequireDefault(_commonHeader);

	var _commonSidebar = __webpack_require__(42);

	var _commonSidebar2 = _interopRequireDefault(_commonSidebar);

	var _commonFooter = __webpack_require__(55);

	var _commonFooter2 = _interopRequireDefault(_commonFooter);

	var _globalJsxLoremipsum = __webpack_require__(69);

	var _globalJsxLoremipsum2 = _interopRequireDefault(_globalJsxLoremipsum);

	var _routesDataObjectJson = __webpack_require__(70);

	var _routesDataObjectJson2 = _interopRequireDefault(_routesDataObjectJson);

	var Body = (function (_React$Component) {
	  _inherits(Body, _React$Component);

	  function Body() {
	    _classCallCheck(this, Body);

	    _get(Object.getPrototypeOf(Body.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Body, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      createStoryJS({
	        type: 'timeline',
	        width: '100%',
	        height: '600',
	        id: 'my-timeline-story',
	        source: _routesDataObjectJson2['default'],
	        embed_id: 'my-timeline'
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Container,
	        { id: 'body' },
	        React.createElement(
	          Grid,
	          null,
	          React.createElement(
	            Row,
	            null,
	            React.createElement(
	              Col,
	              { sm: 12 },
	              React.createElement(
	                PanelContainer,
	                { controlStyles: 'bg-orange65 fg-white' },
	                React.createElement(
	                  PanelHeader,
	                  { className: 'bg-orange65 fg-white' },
	                  React.createElement(
	                    Grid,
	                    null,
	                    React.createElement(
	                      Row,
	                      null,
	                      React.createElement(
	                        Col,
	                        { xs: 12 },
	                        React.createElement(
	                          'h3',
	                          null,
	                          ' History of Computation - From Hardware View'
	                        )
	                      )
	                    )
	                  )
	                ),
	                React.createElement(
	                  PanelBody,
	                  null,
	                  React.createElement(
	                    Grid,
	                    null,
	                    React.createElement(
	                      Row,
	                      null,
	                      React.createElement(
	                        Col,
	                        { xs: 12 },
	                        React.createElement('div', { id: 'my-timeline', dir: 'ltr' })
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Body;
	})(React.Component);

	var _default = (function (_React$Component2) {
	  _inherits(_default, _React$Component2);

	  function _default() {
	    _classCallCheck(this, _default2);

	    _get(Object.getPrototypeOf(_default2.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(_default, [{
	    key: 'render',
	    value: function render() {
	      var classes = (0, _classnames2['default'])({
	        'container-open': this.props.open
	      });

	      return React.createElement(
	        Container,
	        { id: 'container', className: classes },
	        React.createElement(_commonSidebar2['default'], null),
	        React.createElement(_commonHeader2['default'], null),
	        React.createElement(Body, null),
	        React.createElement(_commonFooter2['default'], null)
	      );
	    }
	  }]);

	  var _default2 = _default;
	  _default = (0, _globalJsxSidebar_component2['default'])(_default) || _default;
	  return _default;
	})(React.Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 69 */
/***/ function(module, exports) {

	/**
	 * @copyright https://github.com/f/loremjs
	 * @licence https://github.com/f/loremjs/blob/master/LICENSE
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var Lorem;
	(function () {

	    //Create a class named Lorem and constructor
	    Lorem = function () {
	        //Default values.
	        this.type = null;
	        this.query = null;
	        this.data = null;
	    };
	    //Static variables
	    Lorem.IMAGE = 1;
	    Lorem.TEXT = 2;
	    Lorem.TYPE = {
	        PARAGRAPH: 1,
	        SENTENCE: 2,
	        WORD: 3
	    };
	    //Words to create lorem ipsum text.
	    Lorem.WORDS = ["lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit", "ut", "aliquam,", "purus", "sit", "amet", "luctus", "venenatis,", "lectus", "magna", "fringilla", "urna,", "porttitor", "rhoncus", "dolor", "purus", "non", "enim", "praesent", "elementum", "facilisis", "leo,", "vel", "fringilla", "est", "ullamcorper", "eget", "nulla", "facilisi", "etiam", "dignissim", "diam", "quis", "enim", "lobortis", "scelerisque", "fermentum", "dui", "faucibus", "in", "ornare", "quam", "viverra", "orci", "sagittis", "eu", "volutpat", "odio", "facilisis", "mauris", "sit", "amet", "massa", "vitae", "tortor", "condimentum", "lacinia", "quis", "vel", "eros", "donec", "ac", "odio", "tempor", "orci", "dapibus", "ultrices", "in", "iaculis", "nunc", "sed", "augue", "lacus,", "viverra", "vitae", "congue", "eu,", "consequat", "ac", "felis", "donec", "et", "odio", "pellentesque", "diam", "volutpat", "commodo", "sed", "egestas", "egestas", "fringilla", "phasellus", "faucibus", "scelerisque", "eleifend", "donec", "pretium", "vulputate", "sapien", "nec", "sagittis", "aliquam", "malesuada", "bibendum", "arcu", "vitae", "elementum", "curabitur", "vitae", "nunc", "sed", "velit", "dignissim", "sodales", "ut", "eu", "sem", "integer", "vitae", "justo", "eget", "magna", "fermentum", "iaculis", "eu", "non", "diam", "phasellus", "vestibulum", "lorem", "sed", "risus", "ultricies", "tristique", "nulla", "aliquet", "enim", "tortor,", "at", "auctor", "urna", "nunc", "id", "cursus", "metus", "aliquam", "eleifend", "mi", "in", "nulla", "posuere", "sollicitudin", "aliquam", "ultrices", "sagittis", "orci,", "a", "scelerisque", "purus", "semper", "eget", "duis", "at", "tellus", "at", "urna", "condimentum", "mattis", "pellentesque", "id", "nibh", "tortor,", "id", "aliquet", "lectus", "proin", "nibh", "nisl,", "condimentum", "id", "venenatis", "a,", "condimentum", "vitae", "sapien", "pellentesque", "habitant", "morbi", "tristique", "senectus", "et", "netus", "et", "malesuada", "fames", "ac", "turpis", "egestas", "sed", "tempus,", "urna", "et", "pharetra", "pharetra,", "massa", "massa", "ultricies", "mi,", "quis", "hendrerit", "dolor", "magna", "eget", "est", "lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit", "pellentesque", "habitant", "morbi", "tristique", "senectus", "et", "netus", "et", "malesuada", "fames", "ac", "turpis", "egestas", "integer", "eget", "aliquet", "nibh", "praesent", "tristique", "magna", "sit", "amet", "purus", "gravida", "quis", "blandit", "turpis", "cursus", "in", "hac", "habitasse", "platea", "dictumst", "quisque", "sagittis,", "purus", "sit", "amet", "volutpat", "consequat,", "mauris", "nunc", "congue", "nisi,", "vitae", "suscipit", "tellus", "mauris", "a", "diam", "maecenas", "sed", "enim", "ut", "sem", "viverra", "aliquet", "eget", "sit", "amet", "tellus", "cras", "adipiscing", "enim", "eu", "turpis", "egestas", "pretium", "aenean", "pharetra,", "magna", "ac", "placerat", "vestibulum,", "lectus", "mauris", "ultrices", "eros,", "in", "cursus", "turpis", "massa", "tincidunt", "dui", "ut", "ornare", "lectus", "sit", "amet", "est", "placerat", "in", "egestas", "erat", "imperdiet", "sed", "euismod", "nisi", "porta", "lorem", "mollis", "aliquam", "ut", "porttitor", "leo", "a", "diam", "sollicitudin", "tempor", "id", "eu", "nisl", "nunc", "mi", "ipsum,", "faucibus", "vitae", "aliquet", "nec,", "ullamcorper", "sit", "amet", "risus", "nullam", "eget", "felis", "eget", "nunc", "lobortis", "mattis", "aliquam", "faucibus", "purus", "in", "massa", "tempor", "nec", "feugiat", "nisl", "pretium", "fusce", "id", "velit", "ut", "tortor", "pretium", "viverra", "suspendisse", "potenti", "nullam", "ac", "tortor", "vitae", "purus", "faucibus", "ornare", "suspendisse", "sed", "nisi", "lacus,", "sed", "viverra", "tellus", "in", "hac", "habitasse", "platea", "dictumst", "vestibulum", "rhoncus", "est", "pellentesque", "elit", "ullamcorper", "dignissim", "cras", "tincidunt", "lobortis", "feugiat", "vivamus", "at", "augue", "eget", "arcu", "dictum", "varius", "duis", "at", "consectetur", "lorem", "donec", "massa", "sapien,", "faucibus", "et", "molestie", "ac,", "feugiat", "sed", "lectus", "vestibulum", "mattis", "ullamcorper", "velit", "sed", "ullamcorper", "morbi", "tincidunt", "ornare", "massa,", "eget", "egestas", "purus", "viverra", "accumsan", "in", "nisl", "nisi,", "scelerisque", "eu", "ultrices", "vitae,", "auctor", "eu", "augue", "ut", "lectus", "arcu,", "bibendum", "at", "varius", "vel,", "pharetra", "vel", "turpis", "nunc", "eget", "lorem", "dolor,", "sed", "viverra", "ipsum", "nunc", "aliquet", "bibendum", "enim,", "facilisis", "gravida", "neque", "convallis", "a", "cras", "semper", "auctor", "neque,", "vitae", "tempus", "quam", "pellentesque", "nec", "nam", "aliquam", "sem", "et", "tortor", "consequat", "id", "porta", "nibh", "venenatis", "cras", "sed", "felis", "eget", "velit", "aliquet", "sagittis", "id", "consectetur", "purus", "ut", "faucibus", "pulvinar", "elementum", "integer", "enim", "neque,", "volutpat", "ac", "tincidunt", "vitae,", "semper", "quis", "lectus", "nulla", "at", "volutpat", "diam", "ut", "venenatis", "tellus", "in", "metus", "vulputate", "eu", "scelerisque", "felis", "imperdiet", "proin", "fermentum", "leo", "vel", "orci", "porta", "non", "pulvinar", "neque", "laoreet", "suspendisse", "interdum", "consectetur", "libero,", "id", "faucibus", "nisl", "tincidunt", "eget", "nullam", "non", "nisi", "est,", "sit", "amet", "facilisis", "magna", "etiam", "tempor,", "orci", "eu", "lobortis", "elementum,", "nibh", "tellus", "molestie", "nunc,", "non", "blandit", "massa", "enim", "nec", "dui", "nunc", "mattis", "enim", "ut", "tellus", "elementum", "sagittis", "vitae", "et", "leo", "duis", "ut", "diam", "quam", "nulla", "porttitor", "massa", "id", "neque", "aliquam", "vestibulum", "morbi", "blandit", "cursus", "risus,", "at", "ultrices", "mi", "tempus", "imperdiet", "nulla", "malesuada", "pellentesque", "elit", "eget", "gravida", "cum", "sociis", "natoque", "penatibus", "et", "magnis", "dis", "parturient", "montes,", "nascetur", "ridiculus", "mus", "mauris", "vitae", "ultricies", "leo", "integer", "malesuada", "nunc", "vel", "risus", "commodo", "viverra", "maecenas", "accumsan,", "lacus", "vel", "facilisis", "volutpat,", "est", "velit", "egestas", "dui,", "id", "ornare", "arcu", "odio", "ut", "sem", "nulla", "pharetra", "diam", "sit", "amet", "nisl", "suscipit", "adipiscing", "bibendum", "est", "ultricies", "integer", "quis", "auctor", "elit", "sed", "vulputate", "mi", "sit", "amet", "mauris", "commodo", "quis", "imperdiet", "massa", "tincidunt", "nunc", "pulvinar", "sapien", "et", "ligula", "ullamcorper", "malesuada", "proin", "libero", "nunc,", "consequat", "interdum", "varius", "sit", "amet,", "mattis", "vulputate", "enim", "nulla", "aliquet", "porttitor", "lacus,", "luctus", "accumsan", "tortor", "posuere", "ac", "ut", "consequat", "semper", "viverra", "nam", "libero", "justo,", "laoreet", "sit", "amet", "cursus", "sit", "amet,", "dictum", "sit", "amet", "justo", "donec", "enim", "diam,", "vulputate", "ut", "pharetra", "sit", "amet,", "aliquam", "id", "diam", "maecenas", "ultricies", "mi", "eget", "mauris", "pharetra", "et", "ultrices", "neque", "ornare", "aenean", "euismod", "elementum", "nisi,", "quis", "eleifend", "quam", "adipiscing", "vitae", "proin", "sagittis,", "nisl", "rhoncus", "mattis", "rhoncus,", "urna", "neque", "viverra", "justo,", "nec", "ultrices", "dui", "sapien", "eget", "mi", "proin", "sed", "libero", "enim,", "sed", "faucibus", "turpis", "in", "eu", "mi", "bibendum", "neque", "egestas", "congue", "quisque", "egestas", "diam", "in", "arcu", "cursus", "euismod", "quis", "viverra", "nibh", "cras", "pulvinar", "mattis", "nunc,", "sed", "blandit", "libero", "volutpat", "sed", "cras", "ornare", "arcu", "dui", "vivamus", "arcu", "felis,", "bibendum", "ut", "tristique", "et,", "egestas", "quis", "ipsum", "suspendisse", "ultrices", "gravida", "dictum", "fusce", "ut", "placerat", "orci", "nulla", "pellentesque", "dignissim", "enim,", "sit", "amet", "venenatis", "urna", "cursus", "eget", "nunc", "scelerisque", "viverra", "mauris,", "in", "aliquam", "sem", "fringilla", "ut", "morbi", "tincidunt", "augue", "interdum", "velit", "euismod", "in", "pellentesque", "massa", "placerat", "duis", "ultricies", "lacus", "sed", "turpis", "tincidunt", "id", "aliquet", "risus", "feugiat", "in", "ante", "metus,", "dictum", "at", "tempor", "commodo,", "ullamcorper", "a", "lacus", "vestibulum", "sed", "arcu", "non", "odio", "euismod", "lacinia", "at", "quis", "risus", "sed", "vulputate", "odio", "ut", "enim", "blandit", "volutpat", "maecenas", "volutpat", "blandit", "aliquam", "etiam", "erat", "velit,", "scelerisque", "in", "dictum", "non,", "consectetur", "a", "erat", "nam", "at", "lectus", "urna", "duis", "convallis", "convallis", "tellus,", "id", "interdum", "velit", "laoreet", "id", "donec", "ultrices", "tincidunt", "arcu,", "non", "sodales", "neque", "sodales", "ut", "etiam", "sit", "amet", "nisl", "purus,", "in", "mollis", "nunc", "sed", "id", "semper", "risus", "in", "hendrerit", "gravida", "rutrum", "quisque", "non", "tellus", "orci,", "ac", "auctor", "augue", "mauris", "augue", "neque,", "gravida", "in", "fermentum", "et,", "sollicitudin", "ac", "orci", "phasellus", "egestas", "tellus", "rutrum", "tellus", "pellentesque", "eu", "tincidunt", "tortor", "aliquam", "nulla", "facilisi", "cras", "fermentum,", "odio", "eu", "feugiat", "pretium,", "nibh", "ipsum", "consequat", "nisl,", "vel", "pretium", "lectus", "quam", "id", "leo", "in", "vitae", "turpis", "massa", "sed", "elementum", "tempus", "egestas", "sed", "sed", "risus", "pretium", "quam", "vulputate", "dignissim", "suspendisse", "in", "est", "ante", "in", "nibh", "mauris,", "cursus", "mattis", "molestie", "a,", "iaculis", "at", "erat", "pellentesque", "adipiscing", "commodo", "elit,", "at", "imperdiet", "dui", "accumsan", "sit", "amet", "nulla", "facilisi", "morbi", "tempus", "iaculis", "urna,", "id", "volutpat", "lacus", "laoreet", "non", "curabitur", "gravida", "arcu", "ac", "tortor", "dignissim", "convallis", "aenean", "et", "tortor", "at", "risus", "viverra", "adipiscing", "at", "in", "tellus", "integer", "feugiat", "scelerisque", "varius", "morbi", "enim", "nunc,", "faucibus", "a", "pellentesque", "sit", "amet,", "porttitor", "eget", "dolor", "morbi", "non", "arcu", "risus,", "quis", "varius", "quam", "quisque", "id", "diam", "vel", "quam", "elementum", "pulvinar", "etiam", "non", "quam", "lacus", "suspendisse", "faucibus", "interdum", "posuere", "lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit", "duis", "tristique", "sollicitudin", "nibh", "sit", "amet", "commodo", "nulla", "facilisi", "nullam", "vehicula", "ipsum", "a", "arcu", "cursus", "vitae", "congue", "mauris", "rhoncus", "aenean", "vel", "elit", "scelerisque", "mauris", "pellentesque", "pulvinar", "pellentesque", "habitant", "morbi", "tristique", "senectus", "et", "netus", "et", "malesuada", "fames", "ac", "turpis", "egestas", "maecenas", "pharetra", "convallis", "posuere", "morbi", "leo", "urna,", "molestie", "at", "elementum", "eu,", "facilisis", "sed", "odio", "morbi", "quis", "commodo", "odio", "aenean", "sed", "adipiscing", "diam", "donec", "adipiscing", "tristique", "risus", "nec", "feugiat", "in", "fermentum", "posuere", "urna", "nec", "tincidunt", "praesent", "semper", "feugiat", "nibh", "sed", "pulvinar", "proin", "gravida", "hendrerit", "lectus", "a", "molestie"];
	    //random integer method.
	    Lorem.prototype.randomInt = function (min, max) {
	        return Math.floor(Math.random() * (max - min + 1)) + min;
	    };
	    //text creator method with parameters: how many, what
	    Lorem.prototype.createText = function (count, type) {
	        switch (type) {
	            //paragraphs are loads of sentences.
	            case Lorem.TYPE.PARAGRAPH:
	                var paragraphs = new Array();
	                for (var i = 0; i < count; i++) {
	                    var paragraphLength = this.randomInt(10, 20);
	                    var paragraph = this.createText(paragraphLength, Lorem.TYPE.SENTENCE);
	                    paragraphs.push('<p>' + paragraph + '</p>');
	                }
	                return paragraphs.join('\n');
	                break;
	            //sentences are loads of words.
	            case Lorem.TYPE.SENTENCE:
	                var sentences = new Array();
	                for (var i = 0; i < count; i++) {
	                    var sentenceLength = this.randomInt(5, 10);
	                    var words = this.createText(sentenceLength, Lorem.TYPE.WORD).split(' ');
	                    words[0] = words[0].substr(0, 1).toUpperCase() + words[0].substr(1);
	                    var sentence = words.join(' ');

	                    sentences.push(sentence);
	                }
	                return (sentences.join('. ') + '.').replace(/(\.\,|\,\.)/g, '.');
	                break;
	            //words are words
	            case Lorem.TYPE.WORD:
	                var wordIndex = this.randomInt(0, Lorem.WORDS.length - count - 1);

	                return Lorem.WORDS.slice(wordIndex, wordIndex + count).join(' ').replace(/\.|\,/g, '');
	                break;
	        }
	    };
	    Lorem.prototype.createLorem = function (element) {

	        var lorem = new Array();
	        var count;

	        if (/\d+-\d+[psw]/.test(this.query)) {
	            var range = this.query.replace(/[a-z]/, '').split("-");
	            count = Math.floor(Math.random() * parseInt(range[1])) + parseInt(range[0]);
	        } else {
	            count = parseInt(this.query);
	        }

	        if (/\d+p/.test(this.query)) {
	            var type = Lorem.TYPE.PARAGRAPH;
	        } else if (/\d+s/.test(this.query)) {
	            var type = Lorem.TYPE.SENTENCE;
	        } else if (/\d+w/.test(this.query)) {
	            var type = Lorem.TYPE.WORD;
	        }

	        lorem.push(this.createText(count, type));
	        lorem = lorem.join(' ');

	        if (element) {
	            if (this.type == Lorem.TEXT) element.innerHTML += lorem;else if (this.type == Lorem.IMAGE) {
	                //TODO: for now, using lorempixel.
	                var path = '';
	                var options = this.query.split(' ');
	                if (options[0] == 'gray') {
	                    path += '/g';
	                    options[0] = '';
	                }
	                if (element.getAttribute('width')) path += '/' + element.getAttribute('width');

	                if (element.getAttribute('height')) path += '/' + element.getAttribute('height');

	                path += '/' + options.join(' ').replace(/(^\s+|\s+$)/, '');
	                element.src = 'http://lorempixel.com' + path.replace(/\/\//, '/');
	            }
	        }

	        if (element == null) return lorem;
	    };
	})();

	exports["default"] = React.createClass({
	    displayName: "loremipsum",

	    propTypes: {
	        type: React.PropTypes.string,
	        query: React.PropTypes.string.isRequired
	    },
	    getDefaultProps: function getDefaultProps() {
	        return {
	            type: 'text'
	        };
	    },
	    componentDidMount: function componentDidMount() {
	        var lorem = new Lorem();

	        switch (this.props.type) {
	            case 'img':
	                lorem.type = Lorem.IMAGE;
	                break;
	            case 'text':
	            default:
	                lorem.type = Lorem.TEXT;
	                break;
	        }

	        lorem.query = this.props.query;
	        var l = lorem.createLorem(this.refs.node.getDOMNode());
	    },
	    render: function render() {
	        var props = _extends({
	            type: null,
	            query: null,
	            ref: 'node'
	        }, this.props);

	        var ComponentClass;
	        if (this.props.type === 'text') return React.createElement("span", props);else return React.createElement("img", props);
	    }
	});
	module.exports = exports["default"];

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = {
		"timeline": {
			"headline": "History of Compuer",
			"startDate": "1600",
			"text": "<p>From Antikythera to Turing, to Apple. From punch cards to multi touch.</p>",
			"type": "default",
			"asset": {
				"media": "/imgs/timeline/user-interface/input.png",
				"credit": "credit: Arjuna Soriano",
				"caption": "From punch cards to multi touch."
			},
			"date": [
				{
					"startDate": "1600",
					"headline": "The Antikythera",
					"text": "In the year 1900, sponge divers discovered the Antikythera Mechanism, a remarkable mechanical computer used to track the cycles of the solar system dated to as early as 89 B.C. There was no input however. All computations were carried out by the intricate system of clockwork like plates and wheels..",
					"asset": {
						"media": "http://youtu.be/DiQSHiAYt98",
						"credit": "credit: <a href=\"http://www.nature.com/nature/videoarchive/index.html\">Nature Video Channel</a>",
						"caption": ""
					}
				},
				{
					"startDate": "1642",
					"headline": "Pascal's Calculator",
					"text": "<p>Blaise Pascal invented this calculator to help his father reorganize the French tax system. It could add and subtract in one step and multiply and divide by repetition.</p><p>Input was achieved by spinning the little wheels: inspiration for the iPod click wheel?</p>",
					"asset": {
						"media": "/imgs/timeline/user-interface/pascaline.jpg",
						"credit": "credit: Â© 2005 <a href=\"http://commons.wikimedia.org/wiki/User:David.Monniaux\">David Monniaux</a>  ",
						"caption": "This piece is on display at MusÃ©e des Arts et MÃ©tiers, Paris."
					}
				},
				{
					"startDate": "1820",
					"headline": "Thomas Arithometer",
					"text": "This is the first mass-produced calculator that could add, subtract, multiply and divide. Numbers were  input with all of the little knobs and dials and then the handle was twisted to perform the calculation.",
					"asset": {
						"media": "http://upload.wikimedia.org/wikipedia/commons/5/59/Arithmometre.jpg",
						"credit": "credit: By <a href=\"http://commons.wikimedia.org/wiki/File%3AArithmometre.jpg\">Ezrdr</a>, via Wikimedia Commons",
						"caption": ""
					}
				},
				{
					"startDate": "1801",
					"headline": "Jacquard Loom",
					"text": "A loom is not a computer. It is the first machine however to use punch-cards as a means of input into a machine. By changing the arrangement of the holes in the card, the loom would weave different patterns. ",
					"asset": {
						"media": "http://youtu.be/2ypE4ZJF7qY",
						"credit": "credit: <a href='http://www.youtube.com/user/FiberMusings'>FiberMusings</a>",
						"caption": "The Jacquard loom is still in use today in modern factories. The punch-cards can be clearly seen being pulled to the top of the loom."
					}
				},
				{
					"startDate": "1833",
					"headline": "The Analytical Engine",
					"text": "Charles Babbage designed but was never able to produce a working model but it is significant in that it relied upon punched cards for data and programs and would employ a language similar to modern assembly language complete with loops and conditional branching (for the nerds out there).",
					"asset": {
						"media": "http://upload.wikimedia.org/wikipedia/commons/a/a4/Analytical_Engine_%282290032530%29.jpg",
						"credit": "credit: By <a href='http://commons.wikimedia.org/wiki/File%3AAnalytical_Engine_(2290032530).jpg'>Marcin Wichary</a> via Wikimedia Commons",
						"caption": "This modern model of the Analytical Engine is housed at the Science Museum in London."
					}
				},
				{
					"startDate": "1868",
					"headline": "The Typewriter",
					"text": "Again, not a computer but an important step forward in user interfaces. Invented by Christopher Sholes, An American engineer, the typewriter was layed out in the familiar QWERTY style.",
					"asset": {
						"media": "http://upload.wikimedia.org/wikipedia/commons/9/9a/Sholes_typewriter.jpg",
						"credit": "credit:By George Iles, via Wikimedia Commons",
						"caption": "A prototype of the typewriter with the QWERTY layout clearly visible."
					}
				},
				{
					"startDate": "1890",
					"headline": "Herman Hollerith",
					"text": "In 1890, Hollerith introduced his tabulating machine to be used in the census. He also later invented a key punch, a machine that punched the holes into cards operated by a keyboard. His company was one of the companies that later merged to form IBM.",
					"asset": {
						"media": "http://youtu.be/UZVEp78b0XI?t=1m54s",
						"credit": "credit:<a href=\"http://www.youtube.com/user/clipcafe\">clipcafe</a>",
						"caption": "A history of early IBM punch card machines and featuring a Pascal calculator."
					}
				},
				{
					"startDate": "1940",
					"headline": "Remote Access Computing",
					"text": "George Stibitz demonstrated the Complex Number Calculator (CNC) at Dartmouth College. The astonishing part was that the CNC was in New York City.",
					"asset": {
						"media": "",
						"credit": "",
						"caption": ""
					}
				},
				{
					"startDate": "1946",
					"headline": "ENIAC",
					"text": "Weighing 30 tons, and containing over 18,000 vacuum tubes, the ENIAC was the first truly modern computer. It could be programmed for many complex programs and used an early keyboard as its input.",
					"asset": {
						"media": "http://upload.wikimedia.org/wikipedia/commons/1/16/Classic_shot_of_the_ENIAC.jpg",
						"credit": "credit: U.S. Army photo",
						"caption": "\"Cpl. Irwin Goldstein (foreground) sets the switches on one of the ENIAC's function tables at the Moore School of Electrical Engineering.\" (Caption via Wikimedia)"
					}
				},
				{
					"startDate": "1951",
					"headline": "UNICVAC I",
					"text": "The Universal Automatic Computer I weighed in at 13 tons and sold for over one million dollars. It was the first mass produced computer, selling 46 units. The massive cockpit of a console featured a keyboard",
					"asset": {
						"media": "http://upload.wikimedia.org/wikipedia/commons/5/55/Museum_of_Science%2C_Boston%2C_MA_-_IMG_3163.JPG",
						"credit": "credit: By Daderot (Own work) [Public domain], via Wikimedia Commons",
						"caption": "Input for the UNIVAC I was via keyboard in this massive input console."
					}
				},
				{
					"startDate": "1964",
					"headline": "Multics",
					"text": "A collaboration between MIT, Bell Laboratories and General Electric created the Multics system. It was a multi-user, time sharing system that spurred along the use of a new interface, a monitor.",
					"asset": {
						"media": "",
						"credit": "",
						"caption": ""
					}
				},
				{
					"startDate": "1968",
					"headline": "Minicomputer",
					"text": "Data General introduces the Nova Minicomputer which served as an inspiration for Steve Wozniak's design of the Apple I.",
					"asset": {
						"media": "http://upload.wikimedia.org/wikipedia/commons/7/7f/Data_General_Nova_SN_1.agr.JPG",
						"credit": "credit: By Arnold Reinhold, via Wikimedia Commons",
						"caption": "The first Data General Nova minicomputer displayed at the Computer History Museum in Silicon Valley."
					}
				},
				{
					"startDate": "1968,12,9",
					"headline": "The Mouse",
					"text": "Douglas C. Engelbart and his team demonstrated an online system featuring a mouse, hypertext and the first graphical user interface, a \"windows\" system. The mouse was encased in a wood body and had only one button.",
					"asset": {
						"media": "http://upload.wikimedia.org/wikipedia/commons/f/f0/SRI_Douglas_Engelbart_2008.jpg",
						"credit": "credit: By SRI International, via Wikimedia Commons",
						"caption": "Douglas Engelbart with the first computer mouse prototype."
					}
				},
				{
					"startDate": "1974",
					"headline": "Xerox Alto",
					"text": "The Xerox Alto was the first workstation with a built in mouse with three buttons.",
					"asset": {
						"media": "http://upload.wikimedia.org/wikipedia/commons/5/5e/Xerox_Alto_mit_Rechner.JPG",
						"credit": "credit: By Joho345, via Wikimedia Commons",
						"caption": ""
					}
				},
				{
					"startDate": "1976",
					"headline": "Apple I",
					"text": "Steve Wozniak designed the Apple I, a single-board computer that he and Steve Jobs sold for $500 each. Thus began Apple Inc. and the Personal Computer.",
					"asset": {
						"media": "http://www.flickr.com/photos/euthman/281712899/",
						"credit": "credit: <a href='http://www.flickr.com/photos/euthman/281712899/'>Ed Uthman</a> via Flickr",
						"caption": "An Apple I computer on display at the Smithsonian."
					}
				},
				{
					"startDate": "1976",
					"headline": "The Osborne I",
					"text": "Weighing 24 pounds and costing under $2,000, the Osborne I was the first portable computer, although you probably couldn't use it in your lap for too long.",
					"asset": {
						"media": "http://www.flickr.com/photos/mightyohm/5333827381/",
						"credit": "credit: <a href='http://www.flickr.com/photos/mightyohm/5333827381/'>Jeff Keyzer</a> via Flickr",
						"caption": "An Apple I computer on display at the Smithsonian."
					}
				},
				{
					"startDate": "1982",
					"headline": "Windows 1.0",
					"text": "Microsoft unveils what will become the dominant operating system for the next several decades.",
					"asset": {
						"media": "http://upload.wikimedia.org/wikipedia/commons/a/a9/Microsoft_Windows_1.0_page1.jpg",
						"credit": "credit: By Microsoft, via Wikimedia Commons",
						"caption": ""
					}
				},
				{
					"startDate": "1984",
					"headline": "The Macintosh",
					"text": "Apple introduced the Macintosh which was the first commercially successful computer with a mouse and a Graphical User Interface. Apple's Think Different Superbowl commercial also plays this year.",
					"asset": {
						"media": "https://farm3.staticflickr.com/2077/2179402603_bd8f1fcbe6_b.jpg",
						"credit": "credit: <a href='http://www.flickr.com/photos/mwichary/2179402603/'>Marcin Wichary</a> via Flickr",
						"caption": "The Original Macintosh with extra external floppy drive."
					}
				},
				{
					"startDate": "1997",
					"headline": "The Stylus",
					"text": "Personal digital assistants introduce the touch screen with the use of a stylus. Handwriting recognition was hit or miss but some companies developed simplified alphabet input strokes to improve recognition.",
					"asset": {
						"media": "/imgs/timeline/user-interface/palm.png",
						"credit": "credit: <a href='http://en.wikipedia.org/wiki/File:Palmpilot5000_eu.png'>Channel R</a> via Wikimedia Commons",
						"caption": "A Palm Pilot."
					}
				},
				{
					"startDate": "2001,10,23",
					"headline": "Continuous Scrolling",
					"text": "The first iPod introduces the wheel as a user interface. It allowed users to continuously scroll through thousands of songs seemlessly. This interface helped Apple dominate the music player business and eventually the music content business through its iTunes ecosystem.",
					"asset": {
						"media": "http://upload.wikimedia.org/wikipedia/commons/3/35/Ipod_1G.png",
						"credit": "credit: By Rjcflyer@aol.com at en.wikipedia via Wikimedia Commons",
						"caption": "The Original iPod with click wheel user interface."
					}
				},
				{
					"startDate": "2007",
					"headline": "Multi Touch",
					"text": "Steve Jobs unveils the iPhone and the multi touch interface.",
					"asset": {
						"media": "http://upload.wikimedia.org/wikipedia/commons/4/49/IPhone_at_Macworld_%28angled_view%29.jpg",
						"credit": "credit: By blakeburris, via <a href='http://commons.wikimedia.org/wiki/File:IPhone_at_Macworld_(angled_view).jpg'>Wikimedia Commons</a>",
						"caption": ""
					}
				},
				{
					"startDate": "2012",
					"headline": "Speech Recognition",
					"text": "<p>Speech recognition has been tested and improved upon for years in military cockpits in the U.S. France and U.K. In fact, Siri, the speech recognition engine used in the iPhone 4S was developed first by DARPA, the Defense Advanced Research Projects Agency.</p>",
					"asset": {
						"media": "/imgs/timeline/user-interface/4s.jpg",
						"credit": "credit: Apple Inc.",
						"caption": ""
					}
				}
			]
		}
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _classnames = __webpack_require__(37);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _globalJsxSidebar_component = __webpack_require__(39);

	var _globalJsxSidebar_component2 = _interopRequireDefault(_globalJsxSidebar_component);

	var _commonHeader = __webpack_require__(40);

	var _commonHeader2 = _interopRequireDefault(_commonHeader);

	var _commonSidebar = __webpack_require__(42);

	var _commonSidebar2 = _interopRequireDefault(_commonSidebar);

	var _commonFooter = __webpack_require__(55);

	var _commonFooter2 = _interopRequireDefault(_commonFooter);

	var Body = (function (_React$Component) {
	  _inherits(Body, _React$Component);

	  function Body() {
	    _classCallCheck(this, Body);

	    _get(Object.getPrototypeOf(Body.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Body, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      $('#calendar').fullCalendar({
	        header: {
	          left: 'prev,next today',
	          center: 'title',
	          right: 'month,agendaWeek,agendaDay'
	        },
	        defaultDate: moment(Date.now()).format('YYYY-MM/DD'),
	        defaultView: "agendaWeek",
	        editable: false,
	        eventLimit: true, // allow "more" link when too many events
	        events: [{
	          title: '大學部 - 正規語言概論 - 期中考',
	          start: '2016-5/10 10:10',
	          end: '2016-5/10 12:00'
	        }, {
	          title: '研究所 - 正規語言與計算理論 - 期中考',
	          start: '2016-5/12 10:10',
	          end: '2016-5/12 12:00'
	        }]
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Container,
	        { id: 'body' },
	        React.createElement(
	          Grid,
	          null,
	          React.createElement(
	            Row,
	            null,
	            React.createElement(
	              Col,
	              { sm: 12 },
	              React.createElement(
	                PanelContainer,
	                { controlStyles: 'bg-darkgreen45 fg-white' },
	                React.createElement(
	                  Panel,
	                  null,
	                  React.createElement(
	                    PanelHeader,
	                    { className: 'bg-darkgreen45 fg-white', style: { marginBottom: 0 } },
	                    React.createElement(
	                      Grid,
	                      null,
	                      React.createElement(
	                        Row,
	                        null,
	                        React.createElement(
	                          Col,
	                          { xs: 12 },
	                          React.createElement(
	                            'h3',
	                            null,
	                            'Calendar: Agenda'
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  React.createElement(
	                    PanelBody,
	                    { style: { padding: 25 } },
	                    React.createElement('div', { id: 'calendar' })
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Body;
	})(React.Component);

	var _default = (function (_React$Component2) {
	  _inherits(_default, _React$Component2);

	  function _default() {
	    _classCallCheck(this, _default2);

	    _get(Object.getPrototypeOf(_default2.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(_default, [{
	    key: 'render',
	    value: function render() {
	      var classes = (0, _classnames2['default'])({
	        'container-open': this.props.open
	      });

	      return React.createElement(
	        Container,
	        { id: 'container', className: classes },
	        React.createElement(_commonSidebar2['default'], null),
	        React.createElement(_commonHeader2['default'], null),
	        React.createElement(Body, null),
	        React.createElement(_commonFooter2['default'], null)
	      );
	    }
	  }]);

	  var _default2 = _default;
	  _default = (0, _globalJsxSidebar_component2['default'])(_default) || _default;
	  return _default;
	})(React.Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _classnames = __webpack_require__(37);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _globalJsxSidebar_component = __webpack_require__(39);

	var _globalJsxSidebar_component2 = _interopRequireDefault(_globalJsxSidebar_component);

	var _commonHeader = __webpack_require__(40);

	var _commonHeader2 = _interopRequireDefault(_commonHeader);

	var _commonSidebar = __webpack_require__(42);

	var _commonSidebar2 = _interopRequireDefault(_commonSidebar);

	var _commonFooter = __webpack_require__(55);

	var _commonFooter2 = _interopRequireDefault(_commonFooter);

	var Body = React.createClass({
	  displayName: 'Body',

	  statics: {
	    counter: 0,
	    getCounter: function getCounter() {
	      return 'counter-' + ++Body.counter;
	    }
	  },
	  getInitialState: function getInitialState() {
	    return {
	      refresh: Body.getCounter() // used to redraw the component
	    };
	  },
	  onSubmit: function onSubmit() {
	    console.log('submit');
	  },
	  renderEditable: function renderEditable() {
	    $('.xeditable').editable({
	      disabled: true,
	      mode: 'inline'
	    });

	    $('#name').editable({
	      validate: function validate(value) {
	        if ($.trim(value) == '') return 'This field is required';
	      }
	    });

	    var self = this;
	    $('#user .editable').on('hidden', function (e, reason) {
	      if (reason === 'save' || reason === 'nochange') {
	        var $next = $(this).closest('tr').next().find('.editable');
	        setTimeout(function () {
	          $next.editable('show');
	        }, 100);
	      }
	    });
	  },

	  handleModeChange: function handleModeChange(mode, e) {
	    e.stopPropagation();
	    this.setState({ mode: mode, refresh: Body.getCounter() }, this.renderEditable);
	  },

	  handleSave: function handleSave() {
	    $('#user .editable').editable('submit', {
	      url: '/users',
	      ajaxOptions: {
	        dataType: 'json' //assuming json response
	      },
	      success: function success(data, config) {
	        $('#user .editable').editable('toggleDisabled');
	        $('.save-btn').hide();
	        $('.edit-btn').show();
	        Messenger().hideAll();
	        Messenger().post({
	          id: "success",
	          type: 'success',
	          hideAfter: 10,
	          message: "update successful",
	          showCloseButton: true
	        });
	      },
	      error: function error(_error) {
	        var errors = _error.responseJSON.errors;
	        for (var key in errors) {
	          Messenger().post({
	            id: key,
	            type: 'error',
	            hideAfter: 900,
	            message: "ERROR: " + key + " " + errors[key],
	            showCloseButton: true
	          });
	        }
	      }
	    });
	  },

	  handleEdit: function handleEdit() {
	    $('#user .editable').editable('toggleDisabled');
	    $('.edit-btn').hide();
	    $('.save-btn').show();
	  },

	  toggleEditable: function toggleEditable() {
	    $('#user .editable').editable('toggleDisabled');
	  },
	  componentDidMount: function componentDidMount() {
	    this.renderEditable();
	    Messenger.options = {
	      theme: 'flat'
	    };
	    $('.save-btn').hide();
	  },
	  render: function render() {
	    return React.createElement(
	      Container,
	      { id: 'body' },
	      React.createElement(
	        Grid,
	        null,
	        React.createElement(
	          Row,
	          null,
	          React.createElement(
	            Col,
	            { xs: 12 },
	            React.createElement(
	              PanelContainer,
	              { noOverflow: true, controlStyles: 'bg-orange75 fg-white' },
	              React.createElement(
	                Panel,
	                null,
	                React.createElement(
	                  PanelHeader,
	                  { className: 'bg-orange75 fg-white', style: { margin: 0 } },
	                  React.createElement(
	                    Grid,
	                    null,
	                    React.createElement(
	                      Row,
	                      null,
	                      React.createElement(
	                        Col,
	                        { xs: 12 },
	                        React.createElement(
	                          'h3',
	                          null,
	                          ' Profile '
	                        )
	                      )
	                    )
	                  )
	                ),
	                React.createElement(
	                  PanelBody,
	                  { style: { padding: 25 } },
	                  React.createElement(
	                    Form,
	                    { horizontal: true },
	                    React.createElement(
	                      FormGroup,
	                      null,
	                      React.createElement(
	                        Grid,
	                        null,
	                        React.createElement(
	                          Row,
	                          null,
	                          React.createElement(
	                            Col,
	                            { xs: 6 },
	                            React.createElement('span', { style: { marginLeft: 10, marginRight: 10 } }),
	                            React.createElement(
	                              Button,
	                              { className: 'edit-btn', outlined: true, bsStyle: 'green', onClick: this.handleEdit },
	                              'Edit'
	                            ),
	                            React.createElement(
	                              Button,
	                              { className: 'save-btn', bsStyle: 'green', onClick: this.handleSave },
	                              'Save'
	                            )
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  React.createElement(
	                    Table,
	                    { striped: true, bordered: true, id: 'user', style: { margin: 0 } },
	                    React.createElement(
	                      'tbody',
	                      null,
	                      React.createElement(
	                        'tr',
	                        { hidden: true },
	                        React.createElement(
	                          'td',
	                          null,
	                          React.createElement(
	                            'a',
	                            { href: '#', className: 'xeditable', 'data-type': 'text',
	                              'data-placeholder': 'Required', 'data-name': '_method' },
	                            'patch'
	                          )
	                        )
	                      ),
	                      React.createElement(
	                        'tr',
	                        null,
	                        React.createElement(
	                          'td',
	                          { style: { width: 300 } },
	                          ' Email '
	                        ),
	                        React.createElement(
	                          'td',
	                          null,
	                          ' ',
	                          user.email,
	                          ' '
	                        )
	                      ),
	                      React.createElement(
	                        'tr',
	                        null,
	                        React.createElement(
	                          'td',
	                          { style: { width: 300 } },
	                          ' Profile Picture '
	                        ),
	                        React.createElement(
	                          'td',
	                          null,
	                          ' Use ',
	                          React.createElement(
	                            'a',
	                            { href: 'https://en.gravatar.com', target: '_blank' },
	                            ' Gravatar '
	                          ),
	                          'to create your globally accessible profile picture! '
	                        )
	                      ),
	                      React.createElement(
	                        'tr',
	                        null,
	                        React.createElement(
	                          'td',
	                          null,
	                          ' User Name '
	                        ),
	                        React.createElement(
	                          'td',
	                          null,
	                          React.createElement(
	                            'a',
	                            { href: '#', key: this.state.refresh, className: 'xeditable', id: 'name', 'data-type': 'text',
	                              'data-placeholder': 'Required', 'data-name': 'user[name]' },
	                            user.name
	                          )
	                        )
	                      ),
	                      React.createElement(
	                        'tr',
	                        null,
	                        React.createElement(
	                          'td',
	                          null,
	                          ' New Password '
	                        ),
	                        React.createElement(
	                          'td',
	                          null,
	                          React.createElement('a', { href: '#', key: this.state.refresh, className: 'xeditable', id: 'password',
	                            'data-type': 'password', 'data-name': 'user[password]' })
	                        )
	                      ),
	                      React.createElement(
	                        'tr',
	                        null,
	                        React.createElement(
	                          'td',
	                          null,
	                          ' New Password confirmation '
	                        ),
	                        React.createElement(
	                          'td',
	                          null,
	                          React.createElement('a', { href: '#', key: this.state.refresh, className: 'xeditable', id: 'password_confirmation',
	                            'data-type': 'password', 'data-name': 'user[password_confirmation]' })
	                        )
	                      ),
	                      React.createElement(
	                        'tr',
	                        null,
	                        React.createElement(
	                          'td',
	                          null,
	                          ' Current Password '
	                        ),
	                        React.createElement(
	                          'td',
	                          null,
	                          React.createElement('a', { href: '#', key: this.state.refresh, className: 'xeditable', id: 'password', 'data-type': 'password',
	                            'data-placeholder': 'Required', 'data-name': 'user[current_password]' })
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var _default = (function (_React$Component) {
	  _inherits(_default, _React$Component);

	  function _default() {
	    _classCallCheck(this, _default2);

	    _get(Object.getPrototypeOf(_default2.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(_default, [{
	    key: 'render',
	    value: function render() {
	      var classes = (0, _classnames2['default'])({
	        'container-open': this.props.open
	      });

	      return React.createElement(
	        Container,
	        { id: 'container', className: classes },
	        React.createElement(_commonSidebar2['default'], null),
	        React.createElement(_commonHeader2['default'], null),
	        React.createElement(Body, null),
	        React.createElement(_commonFooter2['default'], null)
	      );
	    }
	  }]);

	  var _default2 = _default;
	  _default = (0, _globalJsxSidebar_component2['default'])(_default) || _default;
	  return _default;
	})(React.Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _classnames = __webpack_require__(37);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactRouter = __webpack_require__(2);

	var _globalJsxSidebar_component = __webpack_require__(39);

	var _globalJsxSidebar_component2 = _interopRequireDefault(_globalJsxSidebar_component);

	var _path_helper = __webpack_require__(32);

	var _path_helper2 = _interopRequireDefault(_path_helper);

	var _actionsUser_actions = __webpack_require__(74);

	var _actionsUser_actions2 = _interopRequireDefault(_actionsUser_actions);

	var _action_type = __webpack_require__(48);

	var _action_type2 = _interopRequireDefault(_action_type);

	var _storesUser_store = __webpack_require__(43);

	var _storesUser_store2 = _interopRequireDefault(_storesUser_store);

	var _commonHeader = __webpack_require__(40);

	var _commonHeader2 = _interopRequireDefault(_commonHeader);

	var _commonSignin_sidebar = __webpack_require__(75);

	var _commonSignin_sidebar2 = _interopRequireDefault(_commonSignin_sidebar);

	var _commonFooter = __webpack_require__(55);

	var _commonFooter2 = _interopRequireDefault(_commonFooter);

	var Body = (function (_React$Component) {
	  _inherits(Body, _React$Component);

	  function Body(props) {
	    _classCallCheck(this, Body);

	    _get(Object.getPrototypeOf(Body.prototype), 'constructor', this).call(this, props);
	    this.state = _storesUser_store2['default'].getState();
	    this._onChange = this._onChange.bind(this);
	  }

	  _createClass(Body, [{
	    key: 'handleSignin',
	    value: function handleSignin(e) {
	      e.preventDefault();
	      var form_data = {
	        user: {
	          email: this.refs.email.value,
	          password: this.refs.password.value
	        }
	      };
	      _actionsUser_actions2['default'].signin(form_data);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      $('html').addClass('authentication');

	      Messenger.options = {
	        theme: 'flat'
	      };

	      _storesUser_store2['default'].addChangeListener(this._onChange);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      $('html').removeClass('authentication');
	      _storesUser_store2['default'].addChangeListener(this._onChange);
	    }
	  }, {
	    key: '_onChange',
	    value: function _onChange() {
	      switch (this.state.status) {
	        case _action_type2['default'].SIGNIN_SUCCESSFUL:
	          window.location = (0, _path_helper2['default'])('/quiz');
	          break;
	        case _action_type2['default'].SIGNIN_ERROR:
	          this.errorNotification();
	          break;
	        default:
	      }
	    }
	  }, {
	    key: 'errorNotification',
	    value: function errorNotification() {
	      var errors = _storesUser_store2['default'].getErrors();
	      for (var key in errors) {
	        Messenger().post({
	          id: key,
	          type: 'error',
	          hideAfter: 10,
	          message: "ERROR: " + key + " " + errors[key],
	          showCloseButton: true
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Container,
	        { id: 'body' },
	        React.createElement(
	          Grid,
	          null,
	          React.createElement(
	            Row,
	            null,
	            React.createElement(
	              Col,
	              { sm: 12 },
	              React.createElement(
	                PanelContainer,
	                { noControls: true },
	                React.createElement(
	                  Panel,
	                  null,
	                  React.createElement(
	                    PanelBody,
	                    { style: { padding: 0 } },
	                    React.createElement(
	                      'div',
	                      { className: 'text-center bg-darkblue fg-white' },
	                      React.createElement(
	                        'h3',
	                        { style: { margin: 0, padding: 25 } },
	                        'Sign in to Formal System'
	                      )
	                    ),
	                    React.createElement(
	                      'div',
	                      { className: 'bg-hoverblue fg-black50 text-center', style: { padding: 12.5 } },
	                      React.createElement(
	                        'div',
	                        null,
	                        'You need to sign in for those awesome helps'
	                      )
	                    ),
	                    React.createElement(
	                      'div',
	                      null,
	                      React.createElement(
	                        'div',
	                        { style: { padding: 25, paddingTop: 0, paddingBottom: 0, margin: 'auto', marginBottom: 25, marginTop: 25 } },
	                        React.createElement(
	                          Form,
	                          { onSubmit: this.handleSignin.bind(this) },
	                          React.createElement(
	                            FormGroup,
	                            null,
	                            React.createElement(
	                              InputGroup,
	                              { lg: true },
	                              React.createElement(
	                                InputGroupAddon,
	                                null,
	                                React.createElement(Icon, { glyph: 'icon-fontello-mail' })
	                              ),
	                              React.createElement(Input, { autoFocus: true, type: 'email', ref: 'email', id: 'emailaddress',
	                                className: 'border-focus-blue', placeholder: 'schwannden@gmail.com' })
	                            )
	                          ),
	                          React.createElement(
	                            FormGroup,
	                            null,
	                            React.createElement(
	                              InputGroup,
	                              { lg: true },
	                              React.createElement(
	                                InputGroupAddon,
	                                null,
	                                React.createElement(Icon, { glyph: 'icon-fontello-key' })
	                              ),
	                              React.createElement(Input, { type: 'password', ref: 'password', id: 'password',
	                                className: 'border-focus-blue', placeholder: 'password' })
	                            )
	                          ),
	                          React.createElement(
	                            FormGroup,
	                            null,
	                            React.createElement(
	                              Grid,
	                              null,
	                              React.createElement(
	                                Row,
	                                null,
	                                React.createElement(
	                                  Col,
	                                  { xs: 6, collapseLeft: true, collapseRight: true, style: { paddingTop: 10 } },
	                                  React.createElement(
	                                    _reactRouter.Link,
	                                    { to: '/signup' },
	                                    'Create a Formal account'
	                                  )
	                                ),
	                                React.createElement(
	                                  Col,
	                                  { xs: 6, collapseLeft: true, collapseRight: true, className: 'text-right' },
	                                  React.createElement(
	                                    Button,
	                                    { outlined: true, lg: true, type: 'submit', bsStyle: 'blue' },
	                                    'Login'
	                                  )
	                                )
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Body;
	})(React.Component);

	var _default = (function (_React$Component2) {
	  _inherits(_default, _React$Component2);

	  function _default() {
	    _classCallCheck(this, _default2);

	    _get(Object.getPrototypeOf(_default2.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(_default, [{
	    key: 'render',
	    value: function render() {
	      var classes = (0, _classnames2['default'])({
	        'container-open': this.props.open
	      });

	      return React.createElement(
	        Container,
	        { id: 'container', className: classes },
	        React.createElement(_commonSignin_sidebar2['default'], null),
	        React.createElement(_commonHeader2['default'], null),
	        React.createElement(Body, null),
	        React.createElement(_commonFooter2['default'], null)
	      );
	    }
	  }]);

	  var _default2 = _default;
	  _default = (0, _globalJsxSidebar_component2['default'])(_default) || _default;
	  return _default;
	})(React.Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _API = __webpack_require__(61);

	var _API2 = _interopRequireDefault(_API);

	exports['default'] = {
	  signup: function signup(form_data) {
	    _API2['default'].user_signup(form_data);
	  },
	  signin: function signin(form_data) {
	    _API2['default'].user_signin(form_data);
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _globalJsxSidebar_component = __webpack_require__(39);

	var _path_helper = __webpack_require__(32);

	var _path_helper2 = _interopRequireDefault(_path_helper);

	var _reactRouter = __webpack_require__(2);

	var _globalJsxLoremipsum = __webpack_require__(69);

	var _globalJsxLoremipsum2 = _interopRequireDefault(_globalJsxLoremipsum);

	var _path_helper3 = _interopRequireDefault(_path_helper);

	var ApplicationSidebar = (function (_React$Component) {
	  _inherits(ApplicationSidebar, _React$Component);

	  function ApplicationSidebar() {
	    _classCallCheck(this, ApplicationSidebar);

	    _get(Object.getPrototypeOf(ApplicationSidebar.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(ApplicationSidebar, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          Grid,
	          { gutterBottom: true },
	          React.createElement(
	            Row,
	            null,
	            React.createElement(
	              Col,
	              { xs: 12 },
	              React.createElement(
	                'div',
	                { className: 'sidebar-header' },
	                ' 登入使用系統 '
	              ),
	              React.createElement(
	                'div',
	                { className: 'sidebar-nav-container' },
	                React.createElement(
	                  _globalJsxSidebar_component.SidebarNav,
	                  { style: { marginBottom: 0 } },
	                  React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-ikons-login', name: 'Login', href: '/login' }),
	                  React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-simple-line-icons-users', name: 'Signup', href: '/signup' })
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return ApplicationSidebar;
	})(React.Component);

	var _default = (function (_React$Component2) {
	  _inherits(_default, _React$Component2);

	  function _default() {
	    _classCallCheck(this, _default);

	    _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(_default, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        _extends({ id: 'sidebar' }, this.props),
	        React.createElement(
	          'div',
	          { id: 'avatar' },
	          React.createElement(
	            Grid,
	            null,
	            React.createElement(
	              Row,
	              { className: 'fg-white' },
	              React.createElement(
	                Col,
	                { xs: 4, collapseRight: true },
	                React.createElement('img', { src: '/imgs/avatars/avatar0.jpg', width: '40', height: '40' })
	              ),
	              React.createElement(
	                Col,
	                { xs: 8, collapseLeft: true, id: 'avatar-col' },
	                React.createElement(
	                  'div',
	                  { style: { top: 23, fontSize: 16, lineHeight: 1, position: 'relative' } },
	                  ' Welcome '
	                )
	              )
	            )
	          )
	        ),
	        React.createElement(
	          'div',
	          { id: 'sidebar-container' },
	          React.createElement(
	            _globalJsxSidebar_component.Sidebar,
	            { sidebar: 0, active: true },
	            React.createElement(ApplicationSidebar, null)
	          )
	        )
	      );
	    }
	  }]);

	  return _default;
	})(React.Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _classnames = __webpack_require__(37);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactRouter = __webpack_require__(2);

	var _globalJsxSidebar_component = __webpack_require__(39);

	var _globalJsxSidebar_component2 = _interopRequireDefault(_globalJsxSidebar_component);

	var _path_helper = __webpack_require__(32);

	var _path_helper2 = _interopRequireDefault(_path_helper);

	var _actionsUser_actions = __webpack_require__(74);

	var _actionsUser_actions2 = _interopRequireDefault(_actionsUser_actions);

	var _action_type = __webpack_require__(48);

	var _action_type2 = _interopRequireDefault(_action_type);

	var _storesUser_store = __webpack_require__(43);

	var _storesUser_store2 = _interopRequireDefault(_storesUser_store);

	var _commonHeader = __webpack_require__(40);

	var _commonHeader2 = _interopRequireDefault(_commonHeader);

	var _commonSignin_sidebar = __webpack_require__(75);

	var _commonSignin_sidebar2 = _interopRequireDefault(_commonSignin_sidebar);

	var _commonFooter = __webpack_require__(55);

	var _commonFooter2 = _interopRequireDefault(_commonFooter);

	var Body = (function (_React$Component) {
	  _inherits(Body, _React$Component);

	  function Body(props) {
	    _classCallCheck(this, Body);

	    _get(Object.getPrototypeOf(Body.prototype), 'constructor', this).call(this, props);
	    this.state = _storesUser_store2['default'].getState();
	    this._onChange = this._onChange.bind(this);
	  }

	  _createClass(Body, [{
	    key: 'handleSubmit',
	    value: function handleSubmit(e) {
	      e.preventDefault();
	      var form_data = {
	        user: {
	          email: this.refs.email.value,
	          password: this.refs.password.value
	        }
	      };
	      _actionsUser_actions2['default'].signup(form_data);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      Messenger.options = {
	        theme: 'flat'
	      };

	      _storesUser_store2['default'].addChangeListener(this._onChange);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _storesUser_store2['default'].removeChangeListener(this._onChange);
	    }
	  }, {
	    key: '_onChange',
	    value: function _onChange() {
	      switch (this.state.status) {
	        case _action_type2['default'].SIGNUP_SUCCESSFUL:
	          window.location = (0, _path_helper2['default'])('/quiz');
	          break;
	        case _action_type2['default'].SIGNUP_ERROR:
	          this.errorNotification();
	          break;
	        default:
	      }
	    }
	  }, {
	    key: 'errorNotification',
	    value: function errorNotification() {
	      var errors = _storesUser_store2['default'].getErrors();
	      for (var key in errors) {
	        Messenger().post({
	          id: key,
	          type: 'error',
	          hideAfter: 10,
	          message: "ERROR: " + key + " " + errors[key],
	          showCloseButton: true
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Container,
	        { id: 'body' },
	        React.createElement(
	          Grid,
	          null,
	          React.createElement(
	            Row,
	            null,
	            React.createElement(
	              Col,
	              { sm: 12 },
	              React.createElement(
	                Panel,
	                null,
	                React.createElement(
	                  PanelBody,
	                  { style: { padding: 0 } },
	                  React.createElement(
	                    'div',
	                    { className: 'text-center bg-darkblue fg-white' },
	                    React.createElement(
	                      'h3',
	                      { style: { margin: 0, padding: 25 } },
	                      'Sign up'
	                    )
	                  ),
	                  React.createElement(
	                    'div',
	                    null,
	                    React.createElement(
	                      'div',
	                      { style: { padding: 25, paddingTop: 0, paddingBottom: 0, margin: 'auto', marginBottom: 25, marginTop: 25 } },
	                      React.createElement(
	                        Form,
	                        { onSubmit: this.handleSubmit.bind(this) },
	                        React.createElement(
	                          FormGroup,
	                          null,
	                          React.createElement(
	                            InputGroup,
	                            { lg: true },
	                            React.createElement(
	                              InputGroupAddon,
	                              null,
	                              React.createElement(Icon, { glyph: 'icon-fontello-mail' })
	                            ),
	                            React.createElement(Input, { type: 'email', ref: 'email', id: 'emailaddress',
	                              className: 'border-focus-blue', placeholder: 'schwannden@gmail.com' })
	                          )
	                        ),
	                        React.createElement(
	                          FormGroup,
	                          null,
	                          React.createElement(
	                            InputGroup,
	                            { lg: true },
	                            React.createElement(
	                              InputGroupAddon,
	                              null,
	                              React.createElement(Icon, { glyph: 'icon-fontello-key' })
	                            ),
	                            React.createElement(Input, { type: 'password', ref: 'password', id: 'password', className: 'border-focus-blue', placeholder: 'password' })
	                          )
	                        ),
	                        React.createElement(
	                          FormGroup,
	                          null,
	                          React.createElement(
	                            Grid,
	                            null,
	                            React.createElement(
	                              Row,
	                              null,
	                              React.createElement(
	                                Col,
	                                { xs: 12, collapseLeft: true, collapseRight: true },
	                                React.createElement(
	                                  Button,
	                                  { type: 'submit', outlined: true, lg: true, bsStyle: 'blue', block: true, onClick: this.back },
	                                  'Create account'
	                                )
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Body;
	})(React.Component);

	var _default = (function (_React$Component2) {
	  _inherits(_default, _React$Component2);

	  function _default() {
	    _classCallCheck(this, _default2);

	    _get(Object.getPrototypeOf(_default2.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(_default, [{
	    key: 'render',
	    value: function render() {
	      var classes = (0, _classnames2['default'])('dashboard', {
	        'container-open': this.props.open
	      });

	      return React.createElement(
	        Container,
	        { id: 'container', className: classes },
	        React.createElement(_commonSignin_sidebar2['default'], null),
	        React.createElement(_commonHeader2['default'], null),
	        React.createElement(Body, null),
	        React.createElement(_commonFooter2['default'], null)
	      );
	    }
	  }]);

	  var _default2 = _default;
	  _default = (0, _globalJsxSidebar_component2['default'])(_default) || _default;
	  return _default;
	})(React.Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _reactRouter = __webpack_require__(2);

	var _md5 = __webpack_require__(51);

	var _md52 = _interopRequireDefault(_md5);

	var _classnames = __webpack_require__(37);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _globalJsxSidebar_component = __webpack_require__(39);

	var _globalJsxSidebar_component2 = _interopRequireDefault(_globalJsxSidebar_component);

	var _commonHeader = __webpack_require__(40);

	var _commonHeader2 = _interopRequireDefault(_commonHeader);

	var _commonSidebar = __webpack_require__(42);

	var _commonSidebar2 = _interopRequireDefault(_commonSidebar);

	var _commonFooter = __webpack_require__(55);

	var _commonFooter2 = _interopRequireDefault(_commonFooter);

	var Body = React.createClass({
	  displayName: 'Body',

	  interval: null,
	  getTimeState: function getTimeState() {
	    return {
	      time: moment().format('hh:mm:ss'),
	      date: moment().format('dddd, MMMM YYYY')
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      time: null,
	      date: null
	    };
	  },
	  back: function back(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    window.history.back();
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    clearInterval(this.interval);
	    $('html').removeClass('authentication');
	  },
	  componentDidMount: function componentDidMount() {
	    $('html').addClass('authentication');
	    this.interval = setInterval((function () {
	      this.setState(this.getTimeState());
	    }).bind(this), 500);
	  },
	  render: function render() {
	    user.gravatar = 'http://www.gravatar.com/avatar/' + (0, _md52['default'])(user.email);
	    return React.createElement(
	      Container,
	      { id: 'auth-container', className: 'lockpage' },
	      React.createElement(
	        Container,
	        { id: 'auth-row' },
	        React.createElement(
	          Container,
	          { id: 'auth-cell' },
	          React.createElement(
	            Grid,
	            null,
	            React.createElement(
	              Row,
	              null,
	              React.createElement(
	                Col,
	                { sm: 12, className: 'text-center' },
	                React.createElement(
	                  'h1',
	                  { className: 'fg-white', style: { fontSize: 81, fontWeight: 300 } },
	                  this.state.time
	                ),
	                React.createElement(
	                  'h6',
	                  { className: 'fg-white' },
	                  this.state.date
	                )
	              )
	            ),
	            React.createElement(
	              Row,
	              { style: { marginTop: 50 } },
	              React.createElement(
	                Col,
	                { sm: 12, className: 'text-center' },
	                React.createElement(
	                  Form,
	                  { onSubmit: this.back },
	                  React.createElement(
	                    Label,
	                    null,
	                    user.name
	                  ),
	                  React.createElement('img', { src: user.gravatar, width: '128', height: '128', alt: 'avatar' }),
	                  React.createElement(Input, { type: 'password', placeholder: 'Password', autoFocus: true }),
	                  React.createElement(
	                    Button,
	                    { type: 'submit', className: 'hidden' },
	                    'Unlock'
	                  )
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var _default = (function (_React$Component) {
	  _inherits(_default, _React$Component);

	  function _default() {
	    _classCallCheck(this, _default2);

	    _get(Object.getPrototypeOf(_default2.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(_default, [{
	    key: 'render',
	    value: function render() {
	      var classes = (0, _classnames2['default'])({
	        'container-open': this.props.open
	      });

	      return React.createElement(
	        Container,
	        { id: 'container', className: classes },
	        React.createElement(_commonSidebar2['default'], null),
	        React.createElement(_commonHeader2['default'], null),
	        React.createElement(Body, null),
	        React.createElement(_commonFooter2['default'], null)
	      );
	    }
	  }]);

	  var _default2 = _default;
	  _default = (0, _globalJsxSidebar_component2['default'])(_default) || _default;
	  return _default;
	})(React.Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reactRouter = __webpack_require__(2);

	var _reactRouterLibLocation = __webpack_require__(18);

	var _reactRouterLibLocation2 = _interopRequireDefault(_reactRouterLibLocation);

	if (window.hasOwnProperty('vex')) {
	  vex.defaultOptions.className = 'vex-theme-flat-attack';
	}

	var onUpdate = function onUpdate(notReady) {
	  // cleanup (do not modify)
	  rubix_bootstrap.core.reset_globals_BANG_();
	  if (window.Rubix) window.Rubix.Cleanup();

	  if (window.hasOwnProperty('ga') && typeof window.ga === 'function') {
	    window.ga('send', 'pageview', {
	      'page': window.location.pathname + window.location.search + window.location.hash
	    });
	  }

	  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

	  if (!notReady) {
	    setTimeout(function () {
	      $('body').removeClass('fade-out');
	    }, 500);
	  }
	};

	var InitializeRouter = function InitializeRouter(routes) {
	  onUpdate(true);
	  var rootInstance = React.render(routes, document.getElementById('app-container'), function () {
	    setTimeout(function () {
	      $('body').removeClass('fade-out');
	    }, 500);
	  });
	};

	module.exports = function (routes) {
	  if ('document' in window) {
	    InitializeRouter(routes(true, onUpdate));
	  } else {
	    // called only server side!
	    if (true) {
	      global.StaticComponent = React.createClass({
	        displayName: 'StaticComponent',

	        render: function render() {
	          var Handler = null;
	          var location = new _reactRouterLibLocation2['default'](this.props.path, this.props.query);
	          ReactBootstrap.Dispatcher.removeAllListeners();
	          rubix_bootstrap.core.reset_globals_BANG_();
	          _reactRouter.Router.run(routes(false), location, function (e, i, t) {
	            Handler = React.createElement(_reactRouter.Router, i);
	          });
	          return Handler;
	        }
	      });
	    } else {
	      return function () {
	        ReactBootstrap.Dispatcher.removeAllListeners();
	        rubix_bootstrap.core.reset_globals_BANG_();
	        return routes(false);
	      };
	    }
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ]);