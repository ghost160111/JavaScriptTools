/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/Address.js":
/*!************************!*\
  !*** ./app/Address.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Address = /*#__PURE__*/function () {
  /**
   * @param {string} protocol 
   * @param {string} address 
   * @param {number} port 
   */
  function Address(protocol, address, port) {
    _classCallCheck(this, Address);
    /** @type {string} */
    _defineProperty(this, "_protocol", void 0);
    /** @type {string} */
    _defineProperty(this, "_address", void 0);
    /** @type {number} */
    _defineProperty(this, "_port", void 0);
    this._protocol = protocol;
    this._address = address;
    this._port = port;
  }
  _createClass(Address, [{
    key: "protocol",
    get: function get() {
      return this._protocol;
    }
  }, {
    key: "address",
    get: function get() {
      return this._address;
    }
  }, {
    key: "port",
    get: function get() {
      return this._port;
    }
  }]);
  return Address;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Address);

/***/ }),

/***/ "./app/App.js":
/*!********************!*\
  !*** ./app/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);
    /** @type {string} */
    _defineProperty(this, "_selector", "#app");
    /** @type {Element} */
    _defineProperty(this, "_app", document.querySelector(this._selector));
    /** @type {object[]} */
    _defineProperty(this, "_components", []);
  }
  _createClass(App, [{
    key: "render",
    value: /** @param {object[]} components */
    function render() {
      for (var i = 0; i < arguments.length; ++i) {
        this._components.push(i < 0 || arguments.length <= i ? undefined : arguments[i]);
        this._components[i].renderComponent("#app");
      }
    }
  }]);
  return App;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./app/Route.js":
/*!**********************!*\
  !*** ./app/Route.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Route = /*#__PURE__*/function () {
  /**
   * @param {string} url
   * @param {string} pageName
   * @param {string} title
   * @param {string} className
   * @param {object[]} components
   */
  function Route(url, pageName, title, className) {
    var _this$_components;
    _classCallCheck(this, Route);
    /** @type {string} */
    _defineProperty(this, "_url", void 0);
    /** @type {string} */
    _defineProperty(this, "_pageName", void 0);
    /** @type {string} */
    _defineProperty(this, "_title", void 0);
    /** @type {string} */
    _defineProperty(this, "_className", void 0);
    /** @type {object[]} */
    _defineProperty(this, "_components", []);
    this._url = url;
    this._pageName = pageName;
    this._title = title;
    this._className = className;
    for (var _len = arguments.length, components = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
      components[_key - 4] = arguments[_key];
    }
    (_this$_components = this._components).push.apply(_this$_components, components);
  }
  _createClass(Route, [{
    key: "url",
    get: function get() {
      return this._url;
    }
  }, {
    key: "pageName",
    get: function get() {
      return this._pageName;
    }
  }, {
    key: "title",
    get: function get() {
      return this._title;
    }
  }, {
    key: "className",
    get: function get() {
      return this._className;
    }
  }, {
    key: "components",
    get: function get() {
      return this._components;
    }
  }]);
  return Route;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Route);

/***/ }),

/***/ "./app/Router.js":
/*!***********************!*\
  !*** ./app/Router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Address_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Address.js */ "./app/Address.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Route.js */ "./app/Route.js");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var Router = /*#__PURE__*/function () {
  /**
   * @param {string} protocol
   * @param {string} address
   * @param {number} port
   * @param {object[]} pages
   */
  function Router(protocol, address, port) {
    _classCallCheck(this, Router);
    /** @type {string} */
    _defineProperty(this, "_generalTitle", "GGC -");
    /** @type {object[]} */
    _defineProperty(this, "_pages", []);
    /** @type {Element} */
    _defineProperty(this, "_app", document.querySelector("#app"));
    /** @type {Element} */
    _defineProperty(this, "_mainContent", document.createElement("main"));
    /** @type {Element} */
    _defineProperty(this, "_navigationList", document.querySelector(".nav__list"));
    /** @type {object} */
    _defineProperty(this, "_address", undefined);
    /** @type {string} */
    _defineProperty(this, "_sharedAddress", undefined);
    this._mainContent.setAttribute("class", "main");
    this._address = new _Address_js__WEBPACK_IMPORTED_MODULE_0__["default"](protocol, address, port);
    this._sharedAddress = "".concat(this._address.protocol, "://").concat(this._address.address, ":").concat(this._address.port);
    for (var _len = arguments.length, pages = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      pages[_key - 3] = arguments[_key];
    }
    for (var i = 0; i < pages.length; ++i) {
      this._pages.push(this.validate.apply(this, [pages[i].url, pages[i].pageName, pages[i].title, pages[i].className].concat(_toConsumableArray(pages[i].components))));
      var navLists = document.createElement("li");
      navLists.innerHTML = "<a class=\"nav__link\" href=\"".concat(pages[i].url, "\">").concat(pages[i].pageName, "</a>");
      if (this._navigationList !== null) {
        this._navigationList.appendChild(navLists);
      } else {
        console.log("".concat(this._navigationList, " element is null"));
      }
    }
  }

  /**
   * This method lets you route over navigation to other pages dynamically without refreshing the page
   */
  _createClass(Router, [{
    key: "route",
    value: function route() {
      var _this = this;
      var navLinks = document.querySelectorAll(".nav__link");
      var _loop = function _loop(i) {
        var title = _this._generalTitle + " " + _this._pages[i].title;
        if (document.URL === "".concat(_this._sharedAddress, "/").concat(_this._pages[i].url) || document.URL === "".concat(_this._sharedAddress).concat(_this._pages[i].url)) {
          document.title = title;
          navLinks[i].classList.add("active");
          for (var j = 0; j < _this._pages[i].components.length; ++j) {
            _this._mainContent.appendChild(_this._pages[i].components[j].htmlElement);
          }
        }
        navLinks[i].addEventListener("click", function () {
          document.title = title;
          _this.setActive("".concat(_this._sharedAddress, "/").concat(_this._pages[i].url) || "".concat(_this._sharedAddress).concat(_this._pages[i].url));
        });
      };
      for (var i = 0; i < this._pages.length; ++i) {
        _loop(i);
      }
    }

    /**
     * This method sets active page, using specific url like /home, /about, etc...
     * @param {string} url
     */
  }, {
    key: "setActive",
    value: function setActive(url) {
      var _this2 = this;
      var navLinks = document.querySelectorAll(".nav__link");
      for (var i = 0; i < this._pages.length; ++i) {
        for (var j = 0; j < this._pages[i].components.length; ++j) {
          try {
            if (url === "".concat(this._sharedAddress, "/").concat(this._pages[i].url) || url === "".concat(this._sharedAddress).concat(this._pages[i].url)) {
              navLinks[i].classList.add("active");
              this._mainContent.appendChild(this._pages[i].components[j].htmlElement);
              this._mainContent.classList.add("active");
              setTimeout(function () {
                return _this2._mainContent.classList.remove("active");
              }, 1200);
            } else {
              navLinks[i].classList.remove("active");
              this._mainContent.removeChild(this._pages[i].components[j].htmlElement);
            }
          } catch (e) {
            // code works but throughs unexpected errors
            //console.error(`${e.stack}`);
          }
        }
      }
    }

    /**
     * This method renders main content of the page, you should specify where to render the content
     * @param {string} parentSelector
     * @param {string} insertBeforeSelector
     */
  }, {
    key: "renderMainContent",
    value: function renderMainContent(parentSelector, insertBeforeSelector) {
      var parentElement = document.querySelector(parentSelector);
      if (!insertBeforeSelector) {
        parentElement.appendChild(this._mainContent);
      } else {
        var insertBeforeElement = document.querySelector(insertBeforeSelector);
        parentElement.insertBefore(this._mainContent, insertBeforeElement);
      }
    }

    /**
     * This method sets general title, e.g: JavaScript -, JavaScript DOM -, etc... 
     * @param {string} title
     */
  }, {
    key: "setGeneralTitle",
    value: function setGeneralTitle(title) {
      this._generalTitle = title;
    }

    /**
     * This method validates and creates object through Route class instance
     * @param {string} url 
     * @param {string} pageName 
     * @param {string} title 
     * @param {string} className 
     * @param {object[]} components
     * @return {Route}
     */
  }, {
    key: "validate",
    value: function validate(url, pageName, title, className) {
      for (var _len2 = arguments.length, components = new Array(_len2 > 4 ? _len2 - 4 : 0), _key2 = 4; _key2 < _len2; _key2++) {
        components[_key2 - 4] = arguments[_key2];
      }
      return _construct(_Route_js__WEBPACK_IMPORTED_MODULE_1__["default"], [url, pageName, title, className].concat(components));
    }

    /**
     * This method destroys router, test prototype. 
     * @return {undefined}
     */
  }, {
    key: "destroy",
    value: function destroy() {
      Router.prototype = undefined;
      return undefined;
    }

    /**
     * Getter, gets list (collection) of pages 
     * @return {object[]}
     */
  }, {
    key: "pages",
    get: function get() {
      return this._pages;
    }
  }]);
  return Router;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Router);

/***/ }),

/***/ "./app/appPrototype.js":
/*!*****************************!*\
  !*** ./app/appPrototype.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.js */ "./app/App.js");
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Router.js */ "./app/Router.js");
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header.js */ "./app/components/Header.js");
/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Footer.js */ "./app/components/Footer.js");
/* harmony import */ var _components_Intro_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Intro.js */ "./app/components/Intro.js");
/* harmony import */ var _components_Form_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Form.js */ "./app/components/Form.js");
/* harmony import */ var _components_Base_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Base.js */ "./app/components/Base.js");
/* harmony import */ var _components_About_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/About.js */ "./app/components/About.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var PROTOCOL = "http";
var ADDRESS = "localhost";
var PORT = 5128;
var app = new _App_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
var Introduction = /*#__PURE__*/function (_Base) {
  _inherits(Introduction, _Base);
  var _super = _createSuper(Introduction);
  function Introduction(baseElement) {
    var _this;
    _classCallCheck(this, Introduction);
    _this = _super.call(this, baseElement);
    _this.buildComponent("introduction", "<h1>HTML Component</h1>\n      <p>Description of HTML component based rendering.</p>");
    return _this;
  }
  return _createClass(Introduction);
}(_components_Base_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
app.render(new _components_Header_js__WEBPACK_IMPORTED_MODULE_2__["default"]("header"), new Introduction("time"), new _components_Footer_js__WEBPACK_IMPORTED_MODULE_3__["default"]("footer"));
var router = new _Router_js__WEBPACK_IMPORTED_MODULE_1__["default"](PROTOCOL, ADDRESS, PORT, {
  url: "/",
  pageName: "Home",
  title: "Home Page",
  className: "home-page",
  components: [new _components_Intro_js__WEBPACK_IMPORTED_MODULE_4__["default"]("section"), new _components_Intro_js__WEBPACK_IMPORTED_MODULE_4__["default"]("section"), new _components_Intro_js__WEBPACK_IMPORTED_MODULE_4__["default"]("section"), new _components_Intro_js__WEBPACK_IMPORTED_MODULE_4__["default"]("section")]
}, {
  url: "/#autotune",
  pageName: "Auto Tune",
  title: "Auto Tune",
  className: "auto-tune",
  components: [new _components_Intro_js__WEBPACK_IMPORTED_MODULE_4__["default"]("section")]
}, {
  url: "/#instructions",
  pageName: "Instructions",
  title: "Intructions",
  className: "instructions-page",
  components: [new _components_Intro_js__WEBPACK_IMPORTED_MODULE_4__["default"]("section")]
}, {
  url: "/#feedback",
  pageName: "Feedback",
  title: "Feedback",
  className: "feedback-page",
  components: [new _components_Form_js__WEBPACK_IMPORTED_MODULE_5__["default"]("form")]
}, {
  url: "/#support",
  pageName: "Support",
  title: "Support",
  className: "support-page",
  components: [new _components_Form_js__WEBPACK_IMPORTED_MODULE_5__["default"]("form")]
}, {
  url: "/#onlineshop",
  pageName: "Online Shop",
  title: "Online Shop",
  className: "online-shop-page",
  components: [new _components_Form_js__WEBPACK_IMPORTED_MODULE_5__["default"]("form")]
}, {
  url: "/#changelog",
  pageName: "Changelog",
  title: "Changelog",
  className: "changelog-page",
  components: [new _components_About_js__WEBPACK_IMPORTED_MODULE_7__["default"]()]
}, {
  url: "/#login",
  pageName: "Login",
  title: "Login",
  className: "login-page",
  components: [new _components_Form_js__WEBPACK_IMPORTED_MODULE_5__["default"]("form")]
}, {
  url: "/#signin",
  pageName: "Signin",
  title: "Signin",
  className: "signin-page",
  components: [new _components_Form_js__WEBPACK_IMPORTED_MODULE_5__["default"]("form")]
});
router.renderMainContent("#app", ".footer");
router.route();

/***/ }),

/***/ "./app/components/About.js":
/*!*********************************!*\
  !*** ./app/components/About.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.js */ "./app/components/Base.js");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var About = /*#__PURE__*/function (_Base) {
  _inherits(About, _Base);
  var _super = _createSuper(About);
  function About(elementName) {
    var _this;
    _classCallCheck(this, About);
    _this = _super.call(this, elementName);
    _this.buildComponent("div", "<section class=\"tournament-section\">\n        <h1 class=\"tournament-section__title\">\u0423\u0437\u043D\u0430\u0439\u0442\u0435 \u043E \u0442\u0443\u0440\u043D\u0438\u0440\u0435 \u0431\u043E\u043B\u044C\u0448\u0435</h1>\n        <p class=\"tournament-section__description\">\n          \u0420\u0430\u0432\u043D\u044B\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u0441\u043B\u043E\u0436\u0438\u0432\u0448\u0430\u044F\u0441\u044F \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438\n          \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u043E\u0431\u043E\u0439 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0441\u0438\u0441\u0442\u0435\u043C \u043C\u0430\u0441\u0441\u043E\u0432\u043E\u0433\u043E \u0443\u0447\u0430\u0441\u0442\u0438\u044F.\n        </p>\n        <div class=\"tournament-section__intro-block\">\n          <img class=\"tournament-section__intro-block__img\" src=\"/images/newsImg3.png\" alt=\"\">\n          <h2 class=\"tournament-section__intro-block__title\">\n            \u0420\u0430\u0432\u043D\u044B\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u0441\u043B\u043E\u0436\u0438\u0432\u0448\u0430\u044F\u0441\u044F \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438\n            \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u043E\u0431\u043E\u0439 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\n            \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0441\u0438\u0441\u0442\u0435\u043C \u043C\u0430\u0441\u0441\u043E\u0432\u043E\u0433\u043E \u0443\u0447\u0430\u0441\u0442\u0438\u044F.\n          </h2>\n          <p class=\"tournament-section__intro-block__description\">\n            \u0420\u0430\u0432\u043D\u044B\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u0441\u043B\u043E\u0436\u0438\u0432\u0448\u0430\u044F\u0441\u044F \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u043E\u0431\u043E\u0439 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\n            \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0441\u0438\u0441\u0442\u0435\u043C \u043C\u0430\u0441\u0441\u043E\u0432\u043E\u0433\u043E \u0443\u0447\u0430\u0441\u0442\u0438\u044F. \u0421 \u0434\u0440\u0443\u0433\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u044B \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0440\u043E\u0441\u0442 \u0438 \u0441\u0444\u0435\u0440\u0430 \u043D\u0430\u0448\u0435\u0439\n            \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u0432 \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0441\u0442\u0435\u043F\u0435\u043D\u0438 \u043E\u0431\u0443\u0441\u043B\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0445 \u0438\n            \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u0443\u0441\u043B\u043E\u0432\u0438\u0439.\n          </p>\n        </div>\n        <article class=\"tournament-section__article\">\n          <div class=\"article__block\">\n            <div class=\"article__block__1\">\n              <h3 class=\"article__block__1__title\">\n                  \u041A\u0442\u043E \u0436\u044E\u0440<br>\n                  \u0432 \u044D\u0442\u043E\u043C \u0442\u0443\u0440\u043D\u0438\u0440\u0435?\n              </h3>\n              <p class=\"article__block__1__paragraph\">\n                  \u0413\u0440\u0443\u043F\u043F\u0430 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043E\u0432 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0433\u043E \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u0442\u0432\u0430, \u0441\u043E\u0441\u0442\u043E\u044F\u0449\u0430\u044F \u0438\u0437 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u043E\u0432, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u0432 \u0438 \u0430\u0433\u0435\u043D\u0442\u0441\u0442\u0432 \u0441\u043E \u0432\u0441\u0435\u0433\u043E \u043C\u0438\u0440\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0440\u043E\u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043B\u0438\u0441\u0432\u043E\u0439\u0442\u0430\u043B\u0430\u043D\u0442\u0438     \u043E\u043F\u044B\u0442 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0433\u043E \u0434\u0438\u0437\u0430\u0439\u043D\u0430. \u0418\u0445 \u0440\u043E\u043B\u044C \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0432 \u0442\u043E\u043C, \u0447\u0442\u043E\u0431\u044B \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E \u043E\u0446\u0435\u043D\u0438\u0432\u0430\u0442\u044C \u0438 \u0442\u0449\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043E\u0446\u0435\u043D\u0438\u0432\u0430\u0442\u044C \u0432\u0435\u0431-\u043F\u0440\u043E\u0435\u043A\u0442\u044B,\u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C\u044B\u0435\u043D\u0430\u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u0438\u0435.\n              </p>\n            </div>\n            <div class=\"article__block__2\">\n              <img class=\"article__block__2__img\" src=\"/images/tournamentImg1.png\" alt=\"\">\n            </div>\n          </div>\n            <div class=\"article__block\">\n              <div class=\"article__block__1\">\n                <h3 class=\"article__block__1__title\">\n                  \u041E\u043F\u044B\u0442 \u0442\u0443\u0440\u043D\u0438\u0440\u0430\n                  \u0448\u0430\u0445\u043C\u0430\u0442\u043D\u044B\u0445 \u043C\u044B\u0441\u043B\u0438\u0442\u0435\u043B\u0435\u0439\n                </h3>\n                <p class=\"article__block__1__paragraph\">\n                  \u041D\u0430\u0448\u0438 \u043A\u043E\u043D\u0444\u0435\u0440\u0435\u043D\u0446\u0438\u0438 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u044E\u0442 \u043D\u0430\u0448\u0435\u043C\u0443 \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0443 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043B\u0438\u0447\u043D\u043E \u0432\u0441\u0442\u0440\u0435\u0442\u0438\u0442\u044C\u0441\u044F, \u043E\u0431\u043C\u0435\u043D\u044F\u0442\u044C\u0441\u044F \u0438\u0434\u0435\u044F\u043C\u0438, \u0443\u0447\u0438\u0442\u044C\u0441\u044F \u0438 \u0432\u0434\u043E\u0445\u043D\u043E\u0432\u043B\u044F\u0442\u044C\u0441\u044F \u0432\u044B\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F\u043C\u0438 \u0438\u0441\u0435\u043C\u0438\u043D\u0430\u0440\u0430\u043C\u0438\u0441\u0430\u043C\u044B\u0445    \u0434\u0430\u043B\u044C\u043D\u043E\u0432\u0438\u0434\u043D\u044B\u0445 \u043E\u0440\u0430\u0442\u043E\u0440\u043E\u0432 \u0432 \u043E\u0442\u0440\u0430\u0441\u043B\u0438. \u0421\u043E\u0431\u044B\u0442\u0438\u044F \u043F\u0440\u043E\u0445\u043E\u0434\u044F\u0442 \u0432 \u0437\u043D\u0430\u043A\u043E\u0432\u044B\u0445 \u0433\u043E\u0440\u043E\u0434\u0430\u0445 \u043F\u043E \u0432\u0441\u0435\u043C\u0443 \u043C\u0438\u0440\u0443 \u043E\u0442 \u0421\u0430\u043D-\u0424\u0440\u0430\u043D\u0446\u0438\u0441\u043A\u043E, \u041D\u044C\u044E-\u0419\u043E\u0440\u043A\u0430 \u0438 \u041B\u043E\u0441-\u0410\u043D\u0434\u0436\u0435\u043B\u0435\u0441\u0430 \u0434\u043E\u0422\u043E\u043A\u0438\u043E,\u041F\u0430\u0440\u0438\u0436\u0430,\u0411\u0435\u0440\u043B\u0438\u043D\u0430,     \u0410\u043C\u0441\u0442\u0435\u0440\u0434\u0430\u043C\u0430 \u0438 \u041B\u043E\u043D\u0434\u043E\u043D\u0430.\n                </p>\n              </div>\n              <div class=\"article__block__2\">\n                <img class=\"article__block__2__img\" src=\"/images/tournamentImg2.png\" alt=\"\">\n              </div>\n            </div>\n            <div class=\"article__block\">\n              <div class=\"article__block__1\">\n                <h3 class=\"article__block__1__title\">\n                    \u041C\u044B \u0442\u0430\u043A\u0436\u0435 \u043B\u044E\u0431\u0438\u043C\n                    \u043F\u0438\u0441\u0430\u0442\u044C \u043A\u043D\u0438\u0433\u0438\n                </h3>\n                <p class=\"article__block__1__paragraph\">\n                    \u041D\u0430\u0448 \u0440\u0435\u0434\u0430\u043A\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442: \u0435\u0436\u0435\u0433\u043E\u0434\u043D\u0443\u044E \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044E Hot Right Now:\n                    A Contemporary Landscape for Digital Thinkers, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u044B \u0438\u0434\u0435\u0438 \u043E \u0442\u0435\u043A\u0443\u0449\u0438\u0445 \u0441\u0434\u0432\u0438\u0433\u0430\u0445 \u043F\u0430\u0440\u0430\u0434\u0438\u0433\u043C\u044B, \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F\u0445 \u0438 \u0442\u0435\u043D\u0434\u0435\u043D\u0446\u0438\u044F\u0445, \u0430 \u0442\u0430\u043A\u0436\u0435\u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044E    \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0445 \u043A\u043D\u0438\u0433, \u0441\u043E\u0437\u0434\u0430\u043D\u043D\u044B\u0445 \u0432 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u0435 \u0441 \u0441\u0430\u043C\u044B\u043C\u0438 \u044F\u0440\u043A\u0438\u043C\u0438 \u0443\u043C\u0430\u043C\u0438 \u0432 \u043E\u0442\u0440\u0430\u0441\u043B\u0438.\n                </p>\n              </div>\n              <div class=\"article__block__2\">\n                <img class=\"article__block__2__img\" src=\"/images/tournamentImg3.png\" alt=\"\">\n              </div>\n            </div>\n          </article>\n        </section>\n        <section class=\"home__info__our-partners-section\">\n        <header class=\"home__info__our-partners-section__header\">\n          <h3 class=\"home__info__our-partners-section__header__title\">\u041D\u0430\u0448\u0438 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u044B</h3>\n        </header>\n        <ul class=\"home__info__our-partners-section__list\">\n          <li>\n            <a class=\"partner-link\" href=\"\">\n              <div class=\"home__info__our-partners-section__list__box\">\n                <img class=\"company-logo\" src=\"/images/companyLogo1.png\" alt=\"\">\n              </div>\n            </a>\n          </li>\n          <li>\n            <a class=\"partner-link\" href=\"\">\n              <div class=\"home__info__our-partners-section__list__box\">\n                <img class=\"company-logo\" src=\"/images/companyLogo2.png\" alt=\"\">\n              </div>\n            </a>\n          </li>\n          <li>\n            <a class=\"partner-link\" href=\"\">\n              <div class=\"home__info__our-partners-section__list__box\">\n                <img class=\"company-logo\" src=\"/images/companyLogo3.png\" alt=\"\">\n              </div>\n            </a>\n          </li>\n          <li>\n            <a class=\"partner-link\" href=\"\">\n              <div class=\"home__info__our-partners-section__list__box\">\n                <img class=\"company-logo\" src=\"/images/companyLogo4.png\" alt=\"\">\n              </div>\n            </a>\n          </li>\n          <li>\n            <a class=\"partner-link\" href=\"\">\n              <div class=\"home__info__our-partners-section__list__box\">\n                <img class=\"company-logo\" src=\"/images/companyLogo5.png\" alt=\"\">\n              </div>\n            </a>\n          </li>\n          <li>\n            <a class=\"partner-link\" href=\"\">\n              <div class=\"home__info__our-partners-section__list__box\">\n                <img class=\"company-logo\" src=\"/images/companyLogo6.png\" alt=\"\">\n              </div>\n            </a>\n          </li>\n        </ul>\n      </section>");
    return _this;
  }
  return _createClass(About);
}(_Base_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

/***/ }),

/***/ "./app/components/Base.js":
/*!********************************!*\
  !*** ./app/components/Base.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Base = /*#__PURE__*/function () {
  function Base(baseElementName) {
    _classCallCheck(this, Base);
    Base.getObjCount();
    this.htmlElement = document.createElement("div");
    if (baseElementName) {
      this.htmlElement = document.createElement(baseElementName);
    }
    this.htmlContent = "";
    this.mutationEl = document.createElement("div");
    this.mutationEl.appendChild(this.htmlElement);
  }
  _createClass(Base, [{
    key: "setHTMLContent",
    value: function setHTMLContent(htmlContent) {
      this.htmlContent = htmlContent;
    }
  }, {
    key: "setComponentClassName",
    value: function setComponentClassName(className) {
      this.htmlElement.setAttribute("class", className);
    }
  }, {
    key: "setupComponent",
    value: function setupComponent(className, htmlContent) {
      this.setComponentClassName(className);
      this.setHTMLContent(htmlContent);
    }
  }, {
    key: "buildElementComponent",
    value: function buildElementComponent() {
      this.htmlElement.innerHTML = this.htmlContent;
      return this.htmlElement;
    }
  }, {
    key: "gethtmlElement",
    value: function gethtmlElement() {
      return this.htmlElement;
    }
  }, {
    key: "renderComponent",
    value: function renderComponent(parentSelector, insertBeforeSelector) {
      var parentElement = document.querySelector(parentSelector);
      if (!insertBeforeSelector) {
        parentElement.appendChild(this.htmlElement);
      } else {
        var insertBeforeElement = document.querySelector(insertBeforeSelector);
        parentElement.insertBefore(this.htmlElement, insertBeforeElement);
      }
    }
  }, {
    key: "buildComponent",
    value: function buildComponent(className, htmlContent) {
      this.setupComponent(className, htmlContent);
      this.buildElementComponent();
    }
  }], [{
    key: "getObjCount",
    value: function getObjCount() {
      return this.objCount++;
    }
  }]);
  return Base;
}();
_defineProperty(Base, "objCount", 0);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Base);

/***/ }),

/***/ "./app/components/Footer.js":
/*!**********************************!*\
  !*** ./app/components/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.js */ "./app/components/Base.js");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Footer = /*#__PURE__*/function (_Base) {
  _inherits(Footer, _Base);
  var _super = _createSuper(Footer);
  function Footer(baseElementName) {
    var _this;
    _classCallCheck(this, Footer);
    _this = _super.call(this, baseElementName);
    _this.buildComponent("footer", "footer".toUpperCase());
    return _this;
  }
  return _createClass(Footer);
}(_Base_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./app/components/Form.js":
/*!********************************!*\
  !*** ./app/components/Form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.js */ "./app/components/Base.js");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Form = /*#__PURE__*/function (_Base) {
  _inherits(Form, _Base);
  var _super = _createSuper(Form);
  function Form(baseElementName) {
    var _this;
    _classCallCheck(this, Form);
    _this = _super.call(this, baseElementName);
    _this.buildComponent("form", "<div class=\"form-wrapper\">\n        <div class=\"form__item\">\n          <label class=\"form__label\" for=\"name\">Full name: </label>\n          <input class=\"g-input\" type=\"text\" id=\"name\" placeholder=\"Enter your full name\" />\n        </div>\n        <div class=\"form__item\">\n          <label class=\"form__label\" for=\"email\">Email: </label>\n          <input class=\"g-input\" type=\"email\" id=\"email\" placeholder=\"Enter your email\" />\n        </div>\n        <div class=\"form__item\">\n          <label class=\"form__label\" for=\"password\">Password: </label>\n          <input class=\"g-input\" type=\"text\" id=\"password\" placeholder=\"Enter your password\" />\n        </div>\n        <div class=\"form__item\">\n          <label class=\"form__label\" for=\"textarea\">Send your question</label>\n          <textarea class=\"g-input form__textarea\" id=\"textarea\" placeholder=\"Write your question...\"></textarea>\n        </div>\n        <button class=\"g-btn\" type=\"button\">Submit</button>\n      </div>");
    return _this;
  }
  return _createClass(Form);
}(_Base_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ }),

/***/ "./app/components/Header.js":
/*!**********************************!*\
  !*** ./app/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.js */ "./app/components/Base.js");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Header = /*#__PURE__*/function (_Base) {
  _inherits(Header, _Base);
  var _super = _createSuper(Header);
  function Header(baseElementName) {
    var _this;
    _classCallCheck(this, Header);
    _this = _super.call(this, baseElementName);
    _this.buildComponent("header", "<div class=\"header-wrapper\">\n      <nav class=\"nav\">\n        <div class=\"nav__logo\">\n          <a class=\"nav__logo-link\" href=\"/\">\n            <img class=\"nav__logo-img\" src=\"\" alt=\"Logo\" style=\"max-width: 75px\" />\n          </a>\n        </div>\n        <ul class=\"nav__list\">\n        </ul>\n      </nav>\n    </div>");
    return _this;
  }
  return _createClass(Header);
}(_Base_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./app/components/Intro.js":
/*!*********************************!*\
  !*** ./app/components/Intro.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.js */ "./app/components/Base.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Intro = /*#__PURE__*/function (_Base) {
  _inherits(Intro, _Base);
  var _super = _createSuper(Intro);
  function Intro(baseElementName) {
    var _this;
    _classCallCheck(this, Intro);
    _this = _super.call(this, baseElementName);
    _this.buildComponent("intro-component", "<h1 class=\"app-title\">Vite Server</h1>\n      <p>Next Generation Frontend Tooling. Get ready for a development environment that can finally catch up with you.</p>");
    return _this;
  }
  return _createClass(Intro);
}(_Base_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Intro);

/***/ }),

/***/ "./src/Package.js":
/*!************************!*\
  !*** ./src/Package.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _array_ArrayTools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array/ArrayTools.js */ "./src/array/ArrayTools.js");
/* harmony import */ var _objects_ObjectTools_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects/ObjectTools.js */ "./src/objects/ObjectTools.js");
/* harmony import */ var _console_ConsoleTools_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./console/ConsoleTools.js */ "./src/console/ConsoleTools.js");
/* harmony import */ var _console_Scripts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./console/Scripts.js */ "./src/console/Scripts.js");
/* harmony import */ var _dom_Ajax_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom/Ajax.js */ "./src/dom/Ajax.js");
/* harmony import */ var _dom_Attributes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom/Attributes.js */ "./src/dom/Attributes.js");
/* harmony import */ var _dom_Events_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dom/Events.js */ "./src/dom/Events.js");
/* harmony import */ var _dom_Manipulation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dom/Manipulation.js */ "./src/dom/Manipulation.js");
/* harmony import */ var _dom_Selecting_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom/Selecting.js */ "./src/dom/Selecting.js");
/* harmony import */ var _dom_Styles_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dom/Styles.js */ "./src/dom/Styles.js");
/* harmony import */ var _dom_Traversing_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dom/Traversing.js */ "./src/dom/Traversing.js");
/* harmony import */ var _exceptions_ExceptionHandler_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./exceptions/ExceptionHandler.js */ "./src/exceptions/ExceptionHandler.js");
/* harmony import */ var _typeChecking_Types_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./typeChecking/Types.js */ "./src/typeChecking/Types.js");
/* harmony import */ var _dom_DOMTools_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dom/DOMTools.js */ "./src/dom/DOMTools.js");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }














var Package = /*#__PURE__*/_createClass(function Package() {
  _classCallCheck(this, Package);
});
_defineProperty(Package, "ArrayTools", _array_ArrayTools_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
_defineProperty(Package, "ObjectTools", _objects_ObjectTools_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
_defineProperty(Package, "ConsoleTools", _console_ConsoleTools_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
_defineProperty(Package, "Scripts", _console_Scripts_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
_defineProperty(Package, "Ajax", _dom_Ajax_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
_defineProperty(Package, "Attributes", _dom_Attributes_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
_defineProperty(Package, "Events", _dom_Events_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
_defineProperty(Package, "Manipulation", _dom_Manipulation_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
_defineProperty(Package, "Selecting", _dom_Selecting_js__WEBPACK_IMPORTED_MODULE_8__["default"]);
_defineProperty(Package, "Styles", _dom_Styles_js__WEBPACK_IMPORTED_MODULE_9__["default"]);
_defineProperty(Package, "Traversing", _dom_Traversing_js__WEBPACK_IMPORTED_MODULE_10__["default"]);
_defineProperty(Package, "ExceptionHandler", _exceptions_ExceptionHandler_js__WEBPACK_IMPORTED_MODULE_11__["default"]);
_defineProperty(Package, "Types", _typeChecking_Types_js__WEBPACK_IMPORTED_MODULE_12__["default"]);
_defineProperty(Package, "DOMTools", _dom_DOMTools_js__WEBPACK_IMPORTED_MODULE_13__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Package);

/***/ }),

/***/ "./src/array/ArrayTools.js":
/*!*********************************!*\
  !*** ./src/array/ArrayTools.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _typeChecking_Types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../typeChecking/Types */ "./src/typeChecking/Types.js");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/**
 * Collection of ready to use and useful array methods
 */
var ArrayTools = /*#__PURE__*/function () {
  function ArrayTools() {
    _classCallCheck(this, ArrayTools);
  }
  _createClass(ArrayTools, null, [{
    key: "addElementToEnd",
    value:
    /**
     * @param {any[]} array
     * @param {any[]} values
     */
    function addElementToEnd(array) {
      for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        values[_key - 1] = arguments[_key];
      }
      array.push.apply(array, values);
    }

    /**
     * @param {any[]} array
     * @param {any[]} values
     */
  }, {
    key: "addElementToStart",
    value: function addElementToStart(array) {
      for (var _len2 = arguments.length, values = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        values[_key2 - 1] = arguments[_key2];
      }
      array.unshift.apply(array, values);
    }

    /**
     * @param {any[]} array
     * @param {number} startIndex
     * @param {any[]} values 
     */
  }, {
    key: "addElementTo",
    value: function addElementTo(array, startIndex) {
      for (var _len3 = arguments.length, values = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        values[_key3 - 2] = arguments[_key3];
      }
      array.splice.apply(array, [startIndex, 0].concat(values));
    }
  }, {
    key: "deleteElementFromEnd",
    value: function deleteElementFromEnd() {
      array.pop();
    }
  }, {
    key: "deleteElementFromStart",
    value: function deleteElementFromStart() {
      array.shift();
    }

    /**
     * @param {any[]} array
     * @param {number} startIndex
     * @param {number} endIndex
     */
  }, {
    key: "deleteGroupOfElements",
    value: function deleteGroupOfElements(array, startIndex, endIndex) {
      array.splice(startIndex, endIndex);
    }

    /**
     * @param {any} value
     * @param {any[]} array
     * @param {string} returnType
     */
  }, {
    key: "findElement",
    value: function findElement(value, array, returnType) {
      for (var i = 0; i < array.length; ++i) {
        if (array[i] === value) {
          console.log("Found element in index: " + i + ". \nElement value: " + array[i] + "\nIndex: " + i);
        }
        if (returnType) {
          if (typeof returnType !== "string") {
            throw new TypeError("Return type parameter should be specified in string!");
          }
          switch (returnType) {
            case "string":
              return array[i];
            case "object":
              return {
                elementValue: array[i],
                index: i
              };
            default:
              throw new TypeError("List of values for returnType parameter are:\n1.string\n2.object");
          }
        } else {
          return array[i];
        }
      }
    }

    /**
     * @param {any} value
     * @param {any[]} array
     */
  }, {
    key: "findIndex",
    value: function findIndex(value, array) {
      for (var i = 0; i < array.length; ++i) {
        if (array[i] === value) {
          return "Index: " + i;
        }
      }
    }

    /**
     * @param {any} value
     * @param {any[]} array
     */
  }, {
    key: "findSameValuesIndexes",
    value: function findSameValuesIndexes(value, array) {
      var results = [];
      for (var i = 0; i < array.length; ++i) {
        if (array[i] === value) {
          results.push(i);
        }
      }
      return results;
    }

    // deletes first index of element that appears in array
    /**
     * @param {any} value
     * @param {any[]} array
     */
  }, {
    key: "deleteElement",
    value: function deleteElement(value, array) {
      for (var i = 0; i < array.length; ++i) {
        if (array[i] === value) {
          array.splice(i, 1);
          break;
        }
      }
    }

    // deletes all elements with same values that appears in array
    // it is continuation of without break of method deleteElement()
    /**
     * @param {any} value
     * @param {any[]} array
     */
  }, {
    key: "deleteElementsWithSameValues",
    value: function deleteElementsWithSameValues(value, array) {
      for (var i = 0; i < array.length; ++i) {
        if (array[i] === value) {
          array.splice(i, 1);
        }
      }
    }

    /**
     * @param {any} value
     * @param {any[]} array
     */
  }, {
    key: "deleteElementsWithSameValuesReturnArray",
    value: function deleteElementsWithSameValuesReturnArray(value, array) {
      var arrayClone = [];
      arrayClone.push.apply(arrayClone, _toConsumableArray(array));
      for (var i = 0; i < arrayClone.length; ++i) {
        if (arrayClone[i] === value) {
          arrayClone.splice(i, 1);
        }
      }
      return arrayClone;
    }

    /** @param {any[]} targetArray */
  }, {
    key: "cloneArray",
    value: function cloneArray(targetArray) {
      var cloneArray = [];
      for (var i = 0; i < targetArray.length; ++i) {
        cloneArray[i] = targetArray[i];
      }
      return cloneArray;
    }

    /**
     * Create tuple using arrays
     * @param {any[]} types
     * @param {any[]} values
     */
  }, {
    key: "createTuple",
    value: function createTuple(types, values) {
      var tuple = [];
      var tupleResult = [];
      var length = (types.length + values.length) / 2;
      for (var i = 0; i < length; ++i) {
        tuple.push({
          value: values[i],
          type: types[i]
        });
      }
      for (var _i = 0; _i < tuple.length; ++_i) {
        if (_typeof(tuple[_i].value) !== tuple[_i].type) {
          throw TypeError("Index ".concat(_i, " does not match with type of ").concat(tuple[_i].type));
        }
        tupleResult.push(tuple[_i].value);
      }
      return tupleResult;
    }

    /**
     * Create tuple using object model
     * @param {object[]} tupleModel
     * @return {any[]}
     */
  }, {
    key: "createTupleUsingObjectModel",
    value: function createTupleUsingObjectModel(tupleModel) {
      var tuple = [];
      for (var i = 0; i < tupleModel.length; ++i) {
        var checkedTuple = _typeChecking_Types__WEBPACK_IMPORTED_MODULE_0__["default"].checkType(tupleModel[i].type, tupleModel[i].value, "Index ".concat(i, " does not match with type of ").concat(tupleModel[i].type), false);
        tuple.push(checkedTuple);
      }
      return tuple;
    }
  }]);
  return ArrayTools;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrayTools);

/***/ }),

/***/ "./src/components/WebCompCollection.js":
/*!*********************************************!*\
  !*** ./src/components/WebCompCollection.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _collection_HeaderComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection/HeaderComponent.js */ "./src/components/collection/HeaderComponent.js");
/* harmony import */ var _collection_FooterComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collection/FooterComponent.js */ "./src/components/collection/FooterComponent.js");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var WebCompCollection = /*#__PURE__*/function () {
  function WebCompCollection() {
    _classCallCheck(this, WebCompCollection);
  }
  _createClass(WebCompCollection, null, [{
    key: "setComponent",
    value:
    /**
     * Adds new element to list map which is the collection of WebComponents that can be defined using defineComponents function
     * @param {string} key Enter key to define a key and name for your WebComponent that can be manipulated using Map methods
     * @param {object} constructorClass Enter class constructor by referencing it or directly defining it. The choice is yours
     */
    function setComponent(key, constructorClass) {
      this.list.set(key, constructorClass);
    }

    /**
     * Watches for a key of entered from list map collection
     * @param {string} key Enter defined key to find element and delete it
     * @return {boolean} true if the operation is handled successfully
     */
  }, {
    key: "deleteComponent",
    value: function deleteComponent(key) {
      this.list["delete"](key);
    }

    /**
     * This method finds the element through the entered key
     * @returns {any} Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
     */
  }, {
    key: "getComponent",
    value: function getComponent(key) {
      return this.list.get(key);
    }
  }]);
  return WebCompCollection;
}();
_defineProperty(WebCompCollection, "list", new Map());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WebCompCollection);
// this is in case if you want to define your components in your own way.

/***/ }),

/***/ "./src/components/WebComponent.js":
/*!****************************************!*\
  !*** ./src/components/WebComponent.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var WebComponent = /*#__PURE__*/function (_HTMLElement) {
  _inherits(WebComponent, _HTMLElement);
  var _super = _createSuper(WebComponent);
  function WebComponent() {
    _classCallCheck(this, WebComponent);
    return _super.call(this);
  }
  _createClass(WebComponent, null, [{
    key: "define",
    value: function define(elementName, classConstructor, options) {
      if (WebComponent instanceof HTMLElement) {
        return options ? customElements.define(elementName, classConstructor, options) : customElements.define(elementName, classConstructor);
      }
      throw TypeError("".concat(WebComponent.name, " is not an instance of ").concat(HTMLElement.name));
    }
  }]);
  return WebComponent;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WebComponent);

/***/ }),

/***/ "./src/components/collection/FooterComponent.js":
/*!******************************************************!*\
  !*** ./src/components/collection/FooterComponent.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WebComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../WebComponent.js */ "./src/components/WebComponent.js");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var FooterComponent = /*#__PURE__*/function (_WebComponent) {
  _inherits(FooterComponent, _WebComponent);
  var _super = _createSuper(FooterComponent);
  function FooterComponent() {
    var _this;
    _classCallCheck(this, FooterComponent);
    _this = _super.call(this);
    _this.node = _this.attachShadow({
      mode: "open"
    });
    _this.nodeStyles = "h1{color:red;}";
    _this.node.innerHTML = "<style>".concat(_this.nodeStyles, "</style><footer><h1>Footer Component</h1></footer>");
    return _this;
  }
  return _createClass(FooterComponent);
}(_WebComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterComponent);

/***/ }),

/***/ "./src/components/collection/HeaderComponent.js":
/*!******************************************************!*\
  !*** ./src/components/collection/HeaderComponent.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WebComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../WebComponent.js */ "./src/components/WebComponent.js");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var HeaderComponent = /*#__PURE__*/function (_WebComponent) {
  _inherits(HeaderComponent, _WebComponent);
  var _super = _createSuper(HeaderComponent);
  function HeaderComponent() {
    var _this;
    _classCallCheck(this, HeaderComponent);
    _this = _super.call(this);
    _this.node = _this.attachShadow({
      mode: "open"
    });
    _this.nodeStyles = "h1{color:red;}";
    _this.node.innerHTML = "<style>".concat(_this.nodeStyles, "</style><header><h1>Header Component</h1></header>");
    return _this;
  }
  return _createClass(HeaderComponent);
}(_WebComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderComponent);

/***/ }),

/***/ "./src/components/define.js":
/*!**********************************!*\
  !*** ./src/components/define.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/**
 * Defines custom elements using Map object, [key, value] pairing method
 * @param {Map} componentsList
 */
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var defineComponents = function defineComponents(componentsList) {
  var _iterator = _createForOfIteratorHelper(componentsList.entries()),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
        key = _step$value[0],
        value = _step$value[1];
      customElements.define(key, value);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defineComponents);

/***/ }),

/***/ "./src/components/test.js":
/*!********************************!*\
  !*** ./src/components/test.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collection_HeaderComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection/HeaderComponent.js */ "./src/components/collection/HeaderComponent.js");
/* harmony import */ var _collection_FooterComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collection/FooterComponent.js */ "./src/components/collection/FooterComponent.js");
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./define.js */ "./src/components/define.js");
/* harmony import */ var _WebCompCollection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WebCompCollection.js */ "./src/components/WebCompCollection.js");




(function () {
  _WebCompCollection_js__WEBPACK_IMPORTED_MODULE_3__["default"].setComponent("header-component", _collection_HeaderComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  _WebCompCollection_js__WEBPACK_IMPORTED_MODULE_3__["default"].setComponent("footer-component", _collection_FooterComponent_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
  (0,_define_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_WebCompCollection_js__WEBPACK_IMPORTED_MODULE_3__["default"].list);
  console.log(_WebCompCollection_js__WEBPACK_IMPORTED_MODULE_3__["default"].getComponent("header-component"), _WebCompCollection_js__WEBPACK_IMPORTED_MODULE_3__["default"].getComponent("footer-component"));
})();

/***/ }),

/***/ "./src/console/ConsoleTools.js":
/*!*************************************!*\
  !*** ./src/console/ConsoleTools.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ConsoleTools = /*#__PURE__*/function () {
  function ConsoleTools() {
    _classCallCheck(this, ConsoleTools);
  }
  _createClass(ConsoleTools, null, [{
    key: "log",
    value:
    /**
     * Logs message or messages to the console
     * @param {string} label
     * @param {string[]} messages
     */
    function log(label, messages) {
      console.group(label);
      for (var i = 0; i < messages.length; ++i) {
        console.log(messages[i]);
      }
      console.groupEnd();
    }
  }]);
  return ConsoleTools;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConsoleTools);

/***/ }),

/***/ "./src/console/Scripts.js":
/*!********************************!*\
  !*** ./src/console/Scripts.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_Manipulation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/Manipulation.js */ "./src/dom/Manipulation.js");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Scripts = /*#__PURE__*/function () {
  function Scripts() {
    _classCallCheck(this, Scripts);
  }
  _createClass(Scripts, null, [{
    key: "createScript",
    value:
    /**
     * Creates script tag with code inside
     * @param {string} scriptCode
     */
    function createScript(scriptCode) {
      return _dom_Manipulation_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDOMElement("script", scriptCode);
    }

    /**
     * Evaluates JavaScript code or JS code that is inside of script tag
     * @param {string | HTMLScriptElement} scriptCode
     */
  }, {
    key: "evaluateScript",
    value: function evaluateScript(scriptCode) {
      if (typeof scriptCode === "string") {
        eval(scriptCode);
      } else {
        eval(scriptCode.textContent);
      }
    }
  }]);
  return Scripts;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scripts);

/***/ }),

/***/ "./src/dom/Ajax.js":
/*!*************************!*\
  !*** ./src/dom/Ajax.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOMBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMBase.js */ "./src/dom/DOMBase.js");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/**
 * Ajax library that is inherited from DOMBase library
 */
var Ajax = /*#__PURE__*/function (_DOMBase) {
  _inherits(Ajax, _DOMBase);
  var _super = _createSuper(Ajax);
  function Ajax() {
    _classCallCheck(this, Ajax);
    return _super.apply(this, arguments);
  }
  _createClass(Ajax, null, [{
    key: "getCORS",
    value:
    /**
     * Retrieving data asynchronously from a server in a different domain in vanilla JavaScript is straight forward and very similar to same-origin Ajax GET requests. The following helper works in modern browsers and Internet Explorers 9+:
     * @param {string} url
     * @param {any} success
     * @return {XMLHttpRequest}
     */
    function getCORS(url, success) {
      var xhr = new XMLHttpRequest();
      if (!("withCredentials" in xhr)) xhr = new XDomainRequest(); // fix IE8/9

      xhr.open("GET", url);
      xhr.onload = success;
      xhr.send();
      return xhr;
    }

    /**
     * The following helper function allows sending an Ajax request via GET method - an equivalent to jQuery's $.get(). Its url argument must contain the full request path including all GET parameters:
     * @param {string} url URL to request data
     * @param {void} success function that handles request and sets the rule to data binding
     */
  }, {
    key: "getAjax",
    value: function getAjax(url, success) {
      var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
      xhr.open("GET", url);
      xhr.onreadystatechange = function () {
        if (xhr.readyState > 3 && xhr.status == 200) success(xhr.responseText);
      };
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      xhr.send();
      return xhr;
    }

    /**
     * Sending POST requests is quite similar ($.post() in jQuery). However, there are lots of options available - more than can be covered in one post. Here's a useful helper function to get you started:
     * @param {string} url
     * @param {any} data
     * @param {void} success
     */
  }, {
    key: "postAjax",
    value: function postAjax(url, data, success) {
      var params = typeof data == 'string' ? data : Object.keys(data).map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
      }).join('&');
      var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
      xhr.open('POST', url);
      xhr.onreadystatechange = function () {
        if (xhr.readyState > 3 && xhr.status == 200) {
          success(xhr.responseText);
        }
      };
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send(params);
      return xhr;
    }

    /**
     * The following helper function serializeArray() takes one argument, a form node, and returns the form data as an array of name/value pairs
     * @param {any}
     */
  }, {
    key: "serializeDataToArray",
    value: function serializeDataToArray(form) {
      var field,
        l,
        s = [];
      if (_typeof(form) == 'object' && form.nodeName == "FORM") {
        var len = form.elements.length;
        for (var i = 0; i < len; ++i) {
          field = form.elements[i];
          if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
            if (field.type == 'select-multiple') {
              l = form.elements[i].options.length;
              for (j = 0; j < l; ++j) {
                if (field.options[j].selected) {
                  s[s.length] = {
                    name: field.name,
                    value: field.options[j].value
                  };
                }
              }
            } else if (field.type != 'checkbox' && field.type != 'radio' || field.checked) {
              s[s.length] = {
                name: field.name,
                value: field.value
              };
            }
          }
        }
      }
      return s;
    }

    /**
     * The following helper function serialize() takes one argument, a form node, and returns the form data as URL-encoded query string
     */
  }, {
    key: "serializeInToQueryString",
    value: function serializeInToQueryString(form) {
      var field,
        l,
        s = [];
      if (_typeof(form) == 'object' && form.nodeName == "FORM") {
        var len = form.elements.length;
        for (var i = 0; i < len; ++i) {
          field = form.elements[i];
          if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
            if (field.type == 'select-multiple') {
              l = form.elements[i].options.length;
              for (var j = 0; j < l; ++j) {
                if (field.options[j].selected) s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[j].value);
              }
            } else if (field.type != 'checkbox' && field.type != 'radio' || field.checked) {
              s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value);
            }
          }
        }
      }
      return s.join('&').replace(/%20/g, '+');
    }
  }]);
  return Ajax;
}(_DOMBase_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/**
 * Call this method to see examples result of using Ajax library
 */
var examples = function examples() {
  // Example request of getCORS method
  Ajax.getCORS("http://foo.bar/?p1=1&p2=Hello+World", function (request) {
    var response = request.currentTarget.response || request.target.responseText;
    console.log(response);
  });

  // Example request of getAjax method
  // The key thing is you add url as the first parameter and function that do something with the data.
  // That means you write logic how to get that data, under which conditions you get that data, and etc...
  Ajax.getAjax("http://foo.bar/?p1=1&p2=Hello+World", function (data) {
    console.log(data);
  });

  // example request
  Ajax.postAjax("http://foo.bar/", "p1=1&p2=Hello+World", function (data) {
    console.log(data);
  });

  // example request with data object
  Ajax.postAjax("http://foo.bar/", {
    p1: 1,
    p2: "Hello World"
  }, function (data) {
    console.log(data);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ajax);

/***/ }),

/***/ "./src/dom/Attributes.js":
/*!*******************************!*\
  !*** ./src/dom/Attributes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOMBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMBase.js */ "./src/dom/DOMBase.js");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/**
 * Attributes library that is inherited from DOMBase library
 */
var Attributes = /*#__PURE__*/function (_DOMBase) {
  _inherits(Attributes, _DOMBase);
  var _super = _createSuper(Attributes);
  function Attributes() {
    _classCallCheck(this, Attributes);
    return _super.apply(this, arguments);
  }
  _createClass(Attributes, null, [{
    key: "createNewAttribute",
    value:
    /**
     * Creates new attribute to your Document Object Model
     * @param {string} name
     * @return {Attr}
     */
    function createNewAttribute(name) {
      return document.createAttribute(name);
    }

    /**
     * Checks if element has specific attribute
     * @param {Element} el
     * @return {boolean}
     */
  }, {
    key: "hasAttribute",
    value: function hasAttribute(el, attrName) {
      return el.hasAttribute(attrName);
    }

    /**
     * Checks if element has any attribute(s)
     * @param {Element} el
     * @return {boolean}
     */
  }, {
    key: "hasAttributes",
    value: function hasAttributes(el) {
      return el.hasAttributes();
    }

    /**
     * Get attribute from an element
     * @param {Element} el
     * @param {string} attrName
     * @return {string | null}
     */
  }, {
    key: "getAttribute",
    value: function getAttribute(el, attrName) {
      return el.getAttribute(attrName);
    }

    /**
     * Gets map of attributes
     * @param {Element} el
     * @return {NamedNodeMap}
     */
  }, {
    key: "getAttributes",
    value: function getAttributes(el) {
      return el.attributes;
    }

    /**
     * Set attribute to an element
     * @param {Element} el
     * @param {string} attrName
     * @param {string} attrValue
     */
  }, {
    key: "setAttribute",
    value: function setAttribute(el, attrName, attrValue) {
      el.setAttribute(attrName, attrValue);
    }

    /**
     * Toggle attribute of an element
     * @param {Element} el
     * @param {string} attrName
     */
  }, {
    key: "toggleAttribute",
    value: function toggleAttribute(el, attrName) {
      el.toggleAttribute(attrName, true);
    }

    /**
     * Checks if selected element has specified className
     * @param {Element} el
     * @param {string} className
     */
  }, {
    key: "hasClass",
    value: function hasClass(el, className) {
      return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
    }

    /**
     * Removes specific attribute from an element
     * @param {Element} el
     */
  }, {
    key: "removeAttribute",
    value: function removeAttribute(el, attrName) {
      el.removeAttribute(attrName);
    }

    /**
     * Remove all attributes from an element
     * @param {Element} el
     */
  }, {
    key: "removeAllAttributes",
    value: function removeAllAttributes(el) {
      var len = el.attributes.length;
      if (len > 0) {
        for (var i = 0; i < len; ++i) {
          el.removeAttribute(el.attributes.item(i));
        }
      }
    }

    /**
     * Adds class to the selected element
     * @param {Element} el
     * @param {string} className
     */
  }, {
    key: "addClass",
    value: function addClass(el, className) {
      if (el.classList) el.classList.add(className);else if (!this.hasClass(el, className)) el.className += " " + className;
    }

    /**
     * Removes class from the selected element
     * @param {Element} el
     * @param {string} className
     */
  }, {
    key: "removeClass",
    value: function removeClass(el, className) {
      if (el.classList) el.classList.remove(className);else el.className = el.className.replace(new RegExp("\\b" + className + "\\b", "g"), "");
    }
  }]);
  return Attributes;
}(_DOMBase_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Attributes);

/***/ }),

/***/ "./src/dom/DOMBase.js":
/*!****************************!*\
  !*** ./src/dom/DOMBase.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/**
 * This is the base class of DOM library, every class that handles DOM, should be inherited by this class, it is good for code readability
 */
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var DOMBase = /*#__PURE__*/_createClass(function DOMBase() {
  _classCallCheck(this, DOMBase);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMBase);

/***/ }),

/***/ "./src/dom/DOMTools.js":
/*!*****************************!*\
  !*** ./src/dom/DOMTools.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _typeChecking_Types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../typeChecking/Types.js */ "./src/typeChecking/Types.js");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/**
 * Collection of basic DOM tools like traversing, manipulating HTML elements.
 */
var DOMTools = /*#__PURE__*/function () {
  function DOMTools() {
    _classCallCheck(this, DOMTools);
  }
  _createClass(DOMTools, null, [{
    key: "createElement",
    value:
    /**
     * @param {string} elementName
     * @return {Element}
     */
    function createElement() {
      var elementName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "div";
      if (typeof elementName !== "string") {
        throw new TypeError("Element tag name should be string!");
      }
      var element = document.createElement(elementName);
      return element;
    }

    /**
     * @param {Element} element
     * @param {string} parentSelector
     * @param {string} insertBeforeSelector
     */
  }, {
    key: "renderElement",
    value: function renderElement(element, parentSelector, insertBeforeSelector) {
      var selectedElement = _typeChecking_Types_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkType("object", element, "element parameter should be type of object, and that object should be HTMLElement");
      var selectedParentSelector = _typeChecking_Types_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkType("string", parentSelector, "parent selector should be type of string!");
      var readyElement = selectedElement;
      var parentElement = document.querySelector(selectedParentSelector);
      if (insertBeforeSelector) {
        var selectedInsertBeforeSelector = _typeChecking_Types_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkType("string", insertBeforeSelector, "Insert before selector should be type of string!");
        var insertBeforeElement = document.querySelector(selectedInsertBeforeSelector);
        parentElement.insertBefore(readyElement, insertBeforeElement);
      } else {
        parentElement.appendChild(readyElement);
      }
    }

    /**
     * @param {string} parentSelector
     * @param {Element[]} elements
     */
  }, {
    key: "renderElements_Append",
    value: function renderElements_Append(parentSelector) {
      for (var i = 0; i < (arguments.length <= 1 ? 0 : arguments.length - 1); ++i) {
        this.renderElement(i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1], parentSelector);
      }
    }

    /**
     * @param {string} parentSelector
     * @param {string} insertBeforeSelector
     * @param {Element[]} elements
     */
  }, {
    key: "renderElements_SpecLocation",
    value: function renderElements_SpecLocation(parentSelector, insertBeforeSelector) {
      for (var i = 0; i < (arguments.length <= 2 ? 0 : arguments.length - 2); ++i) {
        this.renderElement(i + 2 < 2 || arguments.length <= i + 2 ? undefined : arguments[i + 2], parentSelector, insertBeforeSelector);
      }
    }

    /**
     * @param {string} htmlElementName
     * @param {string} htmlContent
     * @param {string} cssStyles
     * @return {Element}
     */
  }, {
    key: "createComponent",
    value: function createComponent(htmlElementName, htmlContent, cssStyles) {
      var selectedHtmlElementName = _typeChecking_Types_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkType("string", htmlElementName, "htmlElementName parameter value should be type of string. Not a " + _typeof(htmlElementName));
      var selectedHtmlContent = _typeChecking_Types_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkType("string", htmlContent, "htmlContent parameter value should be type of string. Not a " + _typeof(htmlContent));
      var htmlElement = document.createElement(selectedHtmlElementName);
      var htmlElementContent;
      var selectedCssStyles;
      if (cssStyles) {
        selectedCssStyles = _typeChecking_Types_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkType("string", cssStyles, "cssStyles parameter value should be type of string. Not a " + _typeof(cssStyles));
        htmlElementContent = "<style>".concat(cssStyles, "</style>").concat(selectedHtmlContent);
      } else {
        htmlElementContent = selectedHtmlContent;
      }
      htmlElement.innerHTML = htmlElementContent;
      return htmlElement;
    }

    /**
     * @param {string} newHTMLTagName
     * @param {string} cssStyles
     * @param {string} htmlContent
     */
  }, {
    key: "createCustomWebComponent",
    value: function createCustomWebComponent(newHTMLTagName, cssStyles, htmlContent) {
      customElements.define(newHTMLTagName, /*#__PURE__*/function (_HTMLElement) {
        _inherits(CustomComponent, _HTMLElement);
        var _super = _createSuper(CustomComponent);
        function CustomComponent() {
          var _this;
          _classCallCheck(this, CustomComponent);
          _this = _super.call(this);
          var node = _this.attachShadow({
            mode: "open"
          });
          var htmlTagName = _typeChecking_Types_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkType("string", newHTMLTagName, "new HTML tag name should be type of string");
          var style = _typeChecking_Types_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkType("string", cssStyles, "cssStyles should be type of string");
          var checkedHTMLContent = _typeChecking_Types_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkType("string", htmlContent, "htmlContent should be type of string");
          node.innerHTML = "\n        <style>".concat(style, "</style>\n        ").concat(checkedHTMLContent, "\n        ");
          return _this;
        }
        return _createClass(CustomComponent);
      }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
    }
  }, {
    key: "setAttribute",
    value:
    /**
     * @param {string} targetSelector
     * @param {string} attributeName
     * @param {string} attributeValue
     */
    function setAttribute(targetSelector, attributeName, attributeValue) {
      var targetElement = document.querySelector(targetSelector);
      var attrName = _typeChecking_Types_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkType("string", attributeName, true);
      var attrValue = _typeChecking_Types_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkType("string", attributeValue, true);
      targetElement.setAttribute(attrName, attrValue);
    }

    /**
     * @param {string[]} attributesNameArr
     * @param {string[]} attributesValueArr
     * @return {HTMLAttribute[]}
     */
  }, {
    key: "createAttributesMap",
    value: function createAttributesMap(attributesNameArr, attributesValueArr) {
      var targetMap = [];
      var attributesNameMap = [];
      var attributesValueMap = [];
      attributesNameMap.push.apply(attributesNameMap, _toConsumableArray(attributesNameArr));
      attributesValueMap.push.apply(attributesValueMap, _toConsumableArray(attributesValueArr));
      if (attributesNameMap.length !== attributesValueMap.length) {
        throw new Error("Length of attributesNameArr and attributesValueArr does not match, check your input array data.");
      }
      var arrStandardLength = (attributesNameMap.length + attributesValueMap.length) / 2;
      for (var i = 0; i < arrStandardLength; ++i) {
        targetMap.push(new this.HTMLAttribute(attributesNameMap[i], attributesValueMap[i]));
      }
      return targetMap;
    }

    /**
     * @param {object[]} attrList
     * @return {HTMLAttribute[]}
     */
  }, {
    key: "createAttributesArrayObj",
    value: function createAttributesArrayObj() {
      var collectionAttrs = [];
      for (var _len = arguments.length, attrList = new Array(_len), _key = 0; _key < _len; _key++) {
        attrList[_key] = arguments[_key];
      }
      for (var i = 0; i < attrList.length; ++i) {
        collectionAttrs.push(new this.HTMLAttribute(attrList[i].attributeName, attrList[i].attributeValue));
      }
      return collectionAttrs;
    }

    /**
     * @param {string} targetSelector
     * @param {string[]} attributeNamesArray
     * @param {string[]} attributeValueArray
     */
  }, {
    key: "setAttributes",
    value: function setAttributes(targetSelector, attributeNamesArray, attributeValueArray) {
      var targetMap = this.createAttributesMap(attributeNamesArray, attributeValueArray);
      var targetElement = document.querySelector(targetSelector);
      for (var i = 0; i < targetMap.length; ++i) {
        targetElement.setAttribute(targetMap[i].attributeName, targetMap[i].attributeValue);
      }
    }

    /**
     * @param {string} targetSelector
     * @param {object[]} attrList
     */
  }, {
    key: "setCustomAttributes",
    value: function setCustomAttributes(targetSelector) {
      var targetElement = document.querySelector(targetSelector);
      for (var _len2 = arguments.length, attrList = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        attrList[_key2 - 1] = arguments[_key2];
      }
      for (var i = 0; i < attrList.length; ++i) {
        targetElement.setAttribute(attrList[i].attributeName, attrList[i].attributeValue);
      }
    }
  }]);
  return DOMTools;
}();
_defineProperty(DOMTools, "HTMLAttribute", /*#__PURE__*/_createClass(
/**
 * @param {string} attributeName
 * @param {string} attributeValue
 */
function HTMLAttribute(attributeName, attributeValue) {
  _classCallCheck(this, HTMLAttribute);
  /** @type {string} */
  _defineProperty(this, "attributeName", void 0);
  /** @type {string} */
  _defineProperty(this, "attributeValue", void 0);
  this.attributeName = attributeName;
  this.attributeValue = attributeValue;
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMTools);

/***/ }),

/***/ "./src/dom/Events.js":
/*!***************************!*\
  !*** ./src/dom/Events.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOMBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMBase.js */ "./src/dom/DOMBase.js");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/**
 * Events library that is inherited from DOMBase library
 */
var Events = /*#__PURE__*/function (_DOMBase) {
  _inherits(Events, _DOMBase);
  var _super = _createSuper(Events);
  function Events() {
    _classCallCheck(this, Events);
    return _super.apply(this, arguments);
  }
  _createClass(Events, null, [{
    key: "preventDefault",
    value:
    /**
     * Stops the immediate action of the event and prevents the event from bubbling up
     * @param {Event} e
     */
    function preventDefault(e) {
      // stop the immediate action of this event
      e.preventDefault();

      // prevent the event from bubbling up
      e.stopPropogation();
    }

    /**
     * Attaches handler to the document
     * @param {Element} el
     * @param {Event} eventName
     */
  }, {
    key: "attachHandler",
    value: function attachHandler(el, eventName) {
      el.addEventListener(eventName, this.preventDefault);
    }

    /**
     * To get the key code, attaching an event handler to any keyboard action is required. The key code is reported on the event object received by the handler function.
     * @param {Event} e
     */
  }, {
    key: "keyCodeHandler",
    value: function keyCodeHandler(e) {
      var key = window.event ? e.keyCode : e.which;
      console.log(key, e.shiftKey, e.altKey, e.ctrlKey);
    }

    /**
     * Gets current mouse position
     * @param {Event} e
     * @return {object}
     */
  }, {
    key: "getMousePosition",
    value: function getMousePosition(e) {
      e = e || window.event;
      var pageX = e.pageX;
      var pageY = e.pageY;

      // IE 8
      if (pageX === undefined) {
        pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      }
      return {
        pageX: pageX,
        pageY: pageY
      };
    }

    /**
     * Loads code that should be runned after document is ready, supports from modern to IE <= 8 browsers
     */
  }, {
    key: "ready",
    value: function ready(callback) {
      if (document.readyState !== "loading") callback();else if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", callback);
      } else {
        document.attachEvent("onreadystatechange", function () {
          if (document.readyState === "complete") callback();
        });
      }
    }
  }]);
  return Events;
}(_DOMBase_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Events);

/***/ }),

/***/ "./src/dom/Manipulation.js":
/*!*********************************!*\
  !*** ./src/dom/Manipulation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOMBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMBase.js */ "./src/dom/DOMBase.js");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/**
 * Manipulation library that is inherited from DOMBase library
 */
var Manipulation = /*#__PURE__*/function (_DOMBase) {
  _inherits(Manipulation, _DOMBase);
  var _super = _createSuper(Manipulation);
  function Manipulation() {
    _classCallCheck(this, Manipulation);
    return _super.apply(this, arguments);
  }
  _createClass(Manipulation, null, [{
    key: "createDOMElement",
    value:
    /**
     * How to create a new element and attach it to the DOM tree.
     * @param {string} elementName
     * @param {string} innerHTML
     * @return {HTMLElement}
     */
    function createDOMElement(elementName, htmlContent) {
      var el = document.createElement(elementName);
      el.innerHTML = htmlContent;
      return el;
    }

    /** 
     * Alternatively, use DOM methods for creating content nodes and append them to the new element. This approach requires more code, and is in general slower or equally fast as working with innerHTML:
     * @param {string} textNodeContent 
     * @param {Element} element
     * @return {void | Text}
     */
  }, {
    key: "createTextNode",
    value: function createTextNode(textNodeContent, element) {
      var textNode = document.createTextNode(textNodeContent);
      if (element) {
        element.appendChild(textNode);
      } else {
        return textNode;
      }
    }

    /**
     * Remove an element from the DOM tree and insert a new one in its place.
     * @param {Element} currentEl
     * @param {Element} newEl
     * @return {void | Element}
     */
  }, {
    key: "replaceDOMElement",
    value: function replaceDOMElement(currentElement, newElement, newElementInnerHTML) {
      currentElement.parentNode.replaceChild(newElement, currentElement);
      newElementInnerHTML ? newElement.innerHTML = newElementInnerHTML : newElement;
    }

    /**
     * Remove the parents of an element from the DOM, leaving the element's content in place
     * @param {Element} elementToUnwrap
     */
  }, {
    key: "unwrapDOMElement",
    value: function unwrapDOMElement(elementToUnwrap) {
      var el = elementToUnwrap;
      var parent = el.parentNode;
      while (el.firstChild) {
        parent.insertBefore(el.firstChild, el);
      }
      parent.removeChild(el);
    }

    /**
     * Remove all child nodes of an element from the DOM
     * @param {Element} element
     */
  }, {
    key: "removeElementContent",
    value: function removeElementContent(element) {
      element.innerHTML = "";
    }

    /**
     * Remove an element from the DOM tree.
     * @param {Element} elementToBeDeleted
     */
  }, {
    key: "removeElement",
    value: function removeElement(elementToBeDeleted) {
      elementToBeDeleted.remove();
    }

    /**
     * Insert a new element after an existing one in the DOM tree
     * @param {Element} el
     * @param {Element} referenceNode
     */
  }, {
    key: "insertAfter",
    value: function insertAfter(el, referenceNode) {
      referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
    }

    /**
     * Insert a new element before an existing one in the DOM tree
     * @param {Element} el
     * @param {Element} referenceNode
     */
  }, {
    key: "insertBefore",
    value: function insertBefore(el, referenceNode) {
      referenceNode.parentNode.insertBefore(el, referenceNode);
    }

    /**
     * Get element text content
     * @param {Element} el
     * @return {string | null}
     */
  }, {
    key: "getTextContent",
    value: function getTextContent(el) {
      return el.textContent;
    }

    /**
     * Get HTML content of an element
     * @param {Element} el
     * @return {string}
     */
  }, {
    key: "getInnerHTML",
    value: function getInnerHTML(el) {
      return el.innerHTML;
    }

    /**
     * Set HTML content to an element
     * @param {Element} el
     */
  }, {
    key: "setHTMLContent",
    value: function setHTMLContent(el, htmlContent) {
      el.innerHTML = htmlContent;
    }

    /**
     * Append to the element's content
     * @param {Element} el
     * @param {string} htmlContent
     */
  }, {
    key: "appendHTMLContent",
    value: function appendHTMLContent(el, htmlContent) {
      el.innerHTML += htmlContent;
    }

    /**
     * Prepend to the element's content
     * @param {Element} el
     * @param {string} htmlContent
     */
  }, {
    key: "prependHTMLContent",
    value: function prependHTMLContent(el, htmlContent) {
      el.innerHTML = htmlContent + el.innerHTML;
    }

    /**
     * Wrap a given element in a new container using plain JavaScript
     * @param {Element} el
     * @param {Element} wrapper
     */
  }, {
    key: "wrap",
    value: function wrap(el, wrapper) {
      el.parentNode.insertBefore(wrapper, el);
      wrapper.appendChild(el);
    }

    /**
     * Get clone of an element
     * @param {Element} el
     * @return {Node}
     */
  }, {
    key: "cloneElement",
    value: function cloneElement(el) {
      return el.cloneNode(true);
    }

    /**
     * Iterate over list of elements
     * @param {Element[]} list
     */
  }, {
    key: "iterateOverList",
    value: function iterateOverList(list, filter) {
      list.forEach(filter);
    }
  }]);
  return Manipulation;
}(_DOMBase_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Manipulation);

/***/ }),

/***/ "./src/dom/Selecting.js":
/*!******************************!*\
  !*** ./src/dom/Selecting.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOMBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMBase.js */ "./src/dom/DOMBase.js");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/**
 * Selecting library that is inherited from DOMBase library
 */
var Selecting = /*#__PURE__*/function (_DOMBase) {
  _inherits(Selecting, _DOMBase);
  var _super = _createSuper(Selecting);
  function Selecting() {
    _classCallCheck(this, Selecting);
    return _super.apply(this, arguments);
  }
  _createClass(Selecting, null, [{
    key: "$",
    value:
    /**
     * Select a list of matching elements, context is optional
     * @param {string} selector
     * @param {object} context
     */
    function $(selector, context) {
      return (context || document).querySelectorAll(selector);
    }

    /**
     * Select the first match only, context is optional
     * @param {string} selector
     * @param {string} context
     */
  }, {
    key: "$1",
    value: function $1(selector, context) {
      return (context || document).querySelector(selector);
    }
  }]);
  return Selecting;
}(_DOMBase_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
var examples = function examples() {
  // how to use those methods:

  // select all '.bar' elements inside all '.foo' containers
  var matches = Selecting.$('.foo .bar');
  console.log(matches);

  // context example
  var container = Selecting.$1('.foo');
  console.log(container);
  {
    // select '.bar' elements inside this one container
    var _matches = Selecting.$('.bar', container);
    console.log(_matches);
  }
};

// invoke this function to see examples result
//examples();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Selecting);

/***/ }),

/***/ "./src/dom/Styles.js":
/*!***************************!*\
  !*** ./src/dom/Styles.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOMBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMBase.js */ "./src/dom/DOMBase.js");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/**
 * Styles library that is inherited from DOMBase library
 */
var Styles = /*#__PURE__*/function (_DOMBase) {
  _inherits(Styles, _DOMBase);
  var _super = _createSuper(Styles);
  function Styles() {
    _classCallCheck(this, Styles);
    return _super.apply(this, arguments);
  }
  _createClass(Styles, null, [{
    key: "getComputedStyle",
    value: function (_getComputedStyle) {
      function getComputedStyle(_x) {
        return _getComputedStyle.apply(this, arguments);
      }
      getComputedStyle.toString = function () {
        return _getComputedStyle.toString();
      };
      return getComputedStyle;
    }(
    /**
     * Gets computed style of an element
     * @param {Element} el
     */
    function (el) {
      var style = window.getComputedStyle ? getComputedStyle(el, null) : el.currentStyle;
      return style;
    }

    /**
     * Sets inline css styles
     * @param {Element} el
     * @param {string} cssText
     */)
  }, {
    key: "setInlineCssText",
    value: function setInlineCssText(el, cssText) {
      el.style.cssText = cssText;
    }

    /**
     * Sets css like an object, { prop: key }
     * @param {Element} el
     * @param {object} css
     */
  }, {
    key: "css",
    value: function css(el, styles) {
      for (var property in styles) {
        el.style[property] = styles[property];
      }
    }

    /**
     * Gets scroll position of an element, x and y respectively as an object
     * @param {Element} el
     * @return {object}
     */
  }, {
    key: "getScrollPosition",
    value: function getScrollPosition(el) {
      return {
        x: el.scrollLeft,
        y: el.scrollTop
      };
    }

    /**
     * Sets scroll position of an element, x and y respectively
     * @param {Element} el
     * @param {number} x
     * @param {number} y
     */
  }, {
    key: "setScrollPosition",
    value: function setScrollPosition(el, x, y) {
      el.scrollLeft = x;
      el.scrollTop = y;
    }

    /**
     * Getting the scroll position of a document in px
     * @return {object}
     */
  }, {
    key: "getDocumentScrollPosition",
    value: function getDocumentScrollPosition() {
      var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
        x: scrollLeft,
        y: scrollTop
      };
    }

    /**
     * Setting the document scroll position of the document in px
     * @param {number} x
     * @param {number} y
     */
  }, {
    key: "setDocumentScrollPosition",
    value: function setDocumentScrollPosition(x, y) {
      document.documentElement.scrollLeft = document.body.scrollLeft = x;
      document.documentElement.scrollTop = document.body.scrollTop = y;
    }

    /**
     * Get the top/left coordinates of an element relative to the offset parent.
     * @param {Element} el
     * @return {object}
     */
  }, {
    key: "getOffsetPosition",
    value: function getOffsetPosition(el) {
      return {
        x: el.offsetLeft,
        y: el.offsetTop
      };
    }

    /**
     * Get the current top/left (x/y) coordinates of an element relative to the document
     * @param {Element} el
     * @return {object}
     */
  }, {
    key: "getCurrentCoord",
    value: function getCurrentCoord(el) {
      var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
        x: rect.top + scrollTop,
        y: rect.left + scrollLeft
      };
    }

    /**
     * Width and height in pixels, including padding and border
     * @param {Element} el
     * @return {object}
     */
  }, {
    key: "getOuterShapeSize",
    value: function getOuterShapeSize(el) {
      return {
        width: el.offsetWidth,
        height: el.offsetHeight
      };
    }

    /**
     * Width and height in px, including padding, but without border
     * @param {Element} el
     * @param {boolean} dynamic
     * @return {object}
     */
  }, {
    key: "getInnerShapeSize",
    value: function getInnerShapeSize(el, dynamic) {
      var get = function get() {
        return {
          width: el.clientWidth,
          height: el.clientHeight
        };
      };
      if (dynamic) window.addEventListener("resize", get);else get();
    }
  }]);
  return Styles;
}(_DOMBase_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Styles);

/***/ }),

/***/ "./src/dom/Traversing.js":
/*!*******************************!*\
  !*** ./src/dom/Traversing.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOMBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMBase.js */ "./src/dom/DOMBase.js");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/**
 * Traversing library that is inherited from DOMBase library
 */
var Traversing = /*#__PURE__*/function (_DOMBase) {
  _inherits(Traversing, _DOMBase);
  var _super = _createSuper(Traversing);
  function Traversing() {
    _classCallCheck(this, Traversing);
    return _super.apply(this, arguments);
  }
  _createClass(Traversing, null, [{
    key: "getParentNode",
    value:
    /**
     * Getting the parent DOM node of an element
     * @param {Element} el
     * @return {ParentNode | null}
     */
    function getParentNode(el) {
      return el.parentNode;
    }

    /**
     * A helper function for fetching all siblings for a given DOM element -  or a filtered set of them:
     * @param {Element} el
     * @return {Element[]}
     */
  }, {
    key: "getSiblings",
    value: function getSiblings(el, filter) {
      var siblings = [];
      el = el.parentNode.firstChild;
      do {
        if (!filter || filter(el)) {
          siblings.push(el);
        }
      } while (el = el.nextSibling);
      return siblings;
    }

    /**
     * Get all following siblings of an element, optionally filtered
     * @param {Element} el
     * @return {Element[]}
     */
  }, {
    key: "getNextSiblings",
    value: function getNextSiblings(el, filter) {
      var siblings = [];
      while (el = el.nextSibling) {
        if (!filter || filter(el)) {
          siblings.push(el);
        }
      }
      return siblings;
    }

    /**
     * Get all preceding siblings of an element, optionally filtered
     * @param {Element} el
     * @return {Element[]}
     */
  }, {
    key: "getPreviousSiblings",
    value: function getPreviousSiblings(el, filter) {
      var siblings = [];
      while (el = el.previousSibling) {
        if (!filter || filter(el)) {
          siblings.push(el);
        }
      }
      return siblings;
    }

    /**
     * Get the first child from the element
     * @param {Element} el
     * @return {Element | null}
     */
  }, {
    key: "getFirstChild",
    value: function getFirstChild(el) {
      if (el) {
        return el.firstChild ? el.firstChild : null;
      }
    }

    /**
     * Get the last child from the element
     * @param {Element} el
     * @return {ChildNode | null}
     */
  }, {
    key: "getLastChild",
    value: function getLastChild(el) {
      if (el.lastChild) {
        return el.lastChild ? el.lastChild : null;
      }
    }

    /**
     * Selecting the children of an element with DOM methods
     * @param {Element} el
     * @return {NodeListOf<ChildNode> | null}
     */
  }, {
    key: "getChildren",
    value: function getChildren(el) {
      if (el) {
        return el.childNodes ? el.childNodes : null;
      }
    }
  }]);
  return Traversing;
}(_DOMBase_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Traversing);

/***/ }),

/***/ "./src/exceptions/ExceptionHandler.js":
/*!********************************************!*\
  !*** ./src/exceptions/ExceptionHandler.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ExceptionHandler = /*#__PURE__*/function () {
  function ExceptionHandler() {
    _classCallCheck(this, ExceptionHandler);
  }
  _createClass(ExceptionHandler, null, [{
    key: "handleException",
    value:
    /**
     * @param {void} callback
     * @param {any[]} parameters
     */
    function handleException(callback, parameters) {
      try {
        callback.apply(void 0, _toConsumableArray(parameters));
      } catch (error) {
        console.error("".concat(error.name, ": ").concat(error.message));
      }
    }
  }]);
  return ExceptionHandler;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExceptionHandler);

/***/ }),

/***/ "./src/objects/ObjectTools.js":
/*!************************************!*\
  !*** ./src/objects/ObjectTools.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _typeChecking_Types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../typeChecking/Types.js */ "./src/typeChecking/Types.js");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var ObjectTools = /*#__PURE__*/function () {
  function ObjectTools() {
    _classCallCheck(this, ObjectTools);
  }
  _createClass(ObjectTools, null, [{
    key: "log",
    value:
    /**
     * @param {string} label
     * @param {string} messages
     */
    function log(label) {
      for (var _len = arguments.length, messages = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        messages[_key - 1] = arguments[_key];
      }
      for (var i = 0; i < messages.length; ++i) {
        var _console;
        console.group(label);
        (_console = console).log.apply(_console, messages);
        console.groupEnd();
      }
    }

    /**
     * @param {boolean} log
     * @param {string} label
     * @param {string} messages
     */
  }, {
    key: "logOnConsole",
    value: function logOnConsole() {
      var log = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var label = arguments.length > 1 ? arguments[1] : undefined;
      if (log) {
        for (var _len2 = arguments.length, messages = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          messages[_key2 - 2] = arguments[_key2];
        }
        this.log.apply(this, [label].concat(messages));
      }
    }

    /**
     * @param {void} callback
     * @param {boolean} log
     * @param {string} label
     * @param {string} messages
     */
  }, {
    key: "logOnConsoleWithCallback",
    value: function logOnConsoleWithCallback(callback) {
      var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var label = arguments.length > 2 ? arguments[2] : undefined;
      if (callback) {
        var _console2;
        console.group(label);
        for (var _len3 = arguments.length, messages = new Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
          messages[_key3 - 3] = arguments[_key3];
        }
        (_console2 = console).log.apply(_console2, messages);
        callback();
        console.groupEnd();
      }
    }

    /**
     * @param {object} targetObject
     * @param {object} objects
     */
  }, {
    key: "assign",
    value: function assign(targetObject) {
      var checkedTarget = _typeChecking_Types_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkType("object", targetObject, "Target object parameter should be type of object!");
      for (var i = 0; i < (arguments.length <= 1 ? 0 : arguments.length - 1); ++i) {
        Object.assign(checkedTarget, i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]);
      }
    }

    /** 
     * @param {object} targetObject 
     * @return {object}
     */
  }, {
    key: "createObject",
    value: function createObject(targetObject) {
      var checkedTargetObject = _typeChecking_Types_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkType("object", targetObject, true);
      return checkedTargetObject;
    }

    /**
     * @param {object} targetObject
     * @param {object} properties
     */
  }, {
    key: "defineProperties",
    value: function defineProperties(targetObject) {
      var checkedTargetObject = _typeChecking_Types_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkType("object", targetObject, true);
      for (var _len4 = arguments.length, properties = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        properties[_key4 - 1] = arguments[_key4];
      }
      Object.defineProperties.apply(Object, [checkedTargetObject].concat(properties));
    }

    /**
     * @param {object} targetObject
     * @param {string} propertyKey
     * @param {string} attributes
     */
  }, {
    key: "defineProperty",
    value: function defineProperty(targetObject, propertyKey, attributes) {
      var checkedTargetObject = _typeChecking_Types_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkType("object", targetObject, true);
      Object.defineProperty(checkedTargetObject, propertyKey, attributes);
    }

    /**
     * @param {object} targetObject
     * @param {boolean} logOnConsole
     */
  }, {
    key: "getEntries",
    value: function getEntries(targetObject) {
      var logOnConsole = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var checkedTargetObject = _typeChecking_Types_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkType("object", targetObject, true, "Target object is should be type of object!");
      var iterateEntries = function iterateEntries() {
        for (var _i = 0, _Object$entries = Object.entries(checkedTargetObject); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];
          console.log("".concat(key, ": ").concat(value));
        }
      };
      this.logOnConsoleWithCallback(iterateEntries, logOnConsole, "Result of iterating entries:");
      return Object.entries(checkedTargetObject);
    }

    /** 
     * @param {object} targetObject 
     * @return {boolean}
     */
  }, {
    key: "freeze",
    value: function freeze(targetObject) {
      var checkedTargetObject = _typeChecking_Types_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkType("object", targetObject, true);
      var freezed = Object.freeze(checkedTargetObject);
      freezed ? true : false;
    }

    /** @param {object} entries */
  }, {
    key: "fromEntries",
    value: function fromEntries(entries) {
      var targetObject = Object.fromEntries(entries);
      return targetObject;
    }

    /** 
     * @param {object} targetObject
     * @param {string} propertyKey
     * 
     * @return {PropertyDescriptor}
    */
  }, {
    key: "getOwnPropertyDescriptor",
    value: function getOwnPropertyDescriptor(targetObject, propertyKey) {
      var checkedTargetObject = _typeChecking_Types_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkType("object", targetObject, true);
      var descriptor = Object.getOwnPropertyDescriptor(checkedTargetObject, propertyKey);
      return descriptor;
    }

    /**
     * @param {object} targetObject
     * @param {boolean} logResultOnConsole
     */
  }, {
    key: "getOwnPropertyDescriptors",
    value: function getOwnPropertyDescriptors(targetObject) {
      var logResultOnConsole = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var checkedTargetObject = _typeChecking_Types_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkType("object", targetObject, true);
      var descriptors = Object.getOwnPropertyDescriptors(checkedTargetObject);
      if (logResultOnConsole) {
        ObjectTools.getEntries(checkedTargetObject, logResultOnConsole);
      }
      return descriptors;
    }

    /**
     * @param {object} targetObject
     * @return {string[]}
     */
  }, {
    key: "getOwnPropertyNames",
    value: function getOwnPropertyNames(targetObject) {
      var checkedTargetObject = _typeChecking_Types_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkType("object", targetObject, true);
      var propertyNamesList = Object.getOwnPropertyNames(checkedTargetObject);
      return propertyNamesList;
    }

    /**
     * @param {object} targetObject
     * @param {boolean} logOnConsole
     * 
     * @return {symbol[]}
     */
  }, {
    key: "getOwnPropertySymbols",
    value: function getOwnPropertySymbols(targetObject) {
      var logOnConsole = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var checkedTargetObject = _typeChecking_Types_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkType("object", targetObject, true);
      var propertySymbols = Object.getOwnPropertySymbols(checkedTargetObject);
      if (logOnConsole) {
        console.log(propertySymbols);
      }
      return propertySymbols;
    }

    /**
     * @param {object} targetObject
     * @return {any}
     */
  }, {
    key: "getPrototypeOf",
    value: function getPrototypeOf(targetObject) {
      var checkedTargetObject = _typeChecking_Types_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkType("object", targetObject, true);
      var result = Object.getPrototypeOf(checkedTargetObject);
      return result;
    }

    /**
     * @param {object} targetObject
     * @param {string} propertyName
     * @param {boolean} logOnConsole
     * 
     * @return {boolean}
     */
  }, {
    key: "hasOwnProperty",
    value: function hasOwnProperty(targetObject, propertyName) {
      var logOnConsole = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var checkedTargetObject = _typeChecking_Types_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkType("object", targetObject, true);
      var hasOwnProperty = checkedTargetObject.hasOwnProperty(propertyName);
      if (logOnConsole) {
        console.log(hasOwnProperty);
      }
      return hasOwnProperty;
    }

    /**
     * @param {any} value1
     * @param {any} value2
     * @param {boolean} logOnConsole
     * @param {string} additionalMessage
     * 
     * @return {boolean}
     */
  }, {
    key: "is",
    value: function is(value1, value2) {
      var logOnConsole = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var additionalMessage = arguments.length > 3 ? arguments[3] : undefined;
      var areTheSameValue = Object.is(value1, value2);
      if (logOnConsole) {
        console.group("Result of comparing two values:");
        if (additionalMessage) {
          console.log("".concat(additionalMessage, ": ").concat(areTheSameValue));
        } else {
          console.log("Result: ".concat(areTheSameValue));
        }
        console.groupEnd();
      }
      return areTheSameValue;
    }

    /** 
     * @param {object} targetObject 
     * @return {boolean}
     */
  }, {
    key: "isExtensible",
    value: function isExtensible(targetObject) {
      var checkedTargetObject = _typeChecking_Types_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkType("object", targetObject, true);
      var isTargetObjectExtensible = Object.isExtensible(checkedTargetObject);
      return isTargetObjectExtensible;
    }

    /** 
     * @param {object} targetObject
     * @return {boolean}
     */
  }, {
    key: "isFrozen",
    value: function isFrozen(targetObject) {
      var checkedTargetObject = _typeChecking_Types_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkType("object", targetObject, true);
      var isTargetObjectFrozen = Object.isFrozen(checkedTargetObject);
      return isTargetObjectFrozen;
    }

    /** 
     * @param {object} targetObject 
     * @return {boolean}
     */
  }, {
    key: "isSealed",
    value: function isSealed(targetObject) {
      var checkedTargetObject = _typeChecking_Types_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkType("object", targetObject, true);
      var isTargetObjectSealed = Object.isSealed(checkedTargetObject);
      return isTargetObjectSealed;
    }

    /** 
     * @param {object} targetObject 
     * @return {string[]}
     */
  }, {
    key: "keys",
    value: function keys(targetObject) {
      var checkedTargetObject = _typeChecking_Types_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkType("object", targetObject, true);
      var keys = Object.keys(checkedTargetObject);
      return keys;
    }

    /** @param {object} targetObject */
  }, {
    key: "preventExtensions",
    value: function preventExtensions(targetObject) {
      var checkedTargetObject = Tools.checkType("object", targetObject, true);
      Object.preventExtensions(checkedTargetObject);
    }

    /** @param {object} targetObject */
  }, {
    key: "seal",
    value: function seal(targetObject) {
      var checkedTargetObject = _typeChecking_Types_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkType(targetObject);
      Object.seal(checkedTargetObject);
    }

    /**
     * @param {object} targetObject
     * @param {object} source
     */
  }, {
    key: "setObjectPrototype",
    value: function setObjectPrototype(targetObject) {
      var checkedTargetObject = _typeChecking_Types_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkType("object", targetObject, "Target object parameter should be type of object!");
      for (var i = 0; i < (arguments.length <= 1 ? 0 : arguments.length - 1); ++i) {
        Object.setPrototypeOf(checkedTargetObject, i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]);
      }
    }
  }]);
  return ObjectTools;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ObjectTools);

/***/ }),

/***/ "./src/typeChecking/Types.js":
/*!***********************************!*\
  !*** ./src/typeChecking/Types.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _exceptions_ExceptionHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exceptions/ExceptionHandler.js */ "./src/exceptions/ExceptionHandler.js");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Types = /*#__PURE__*/function () {
  function Types() {
    _classCallCheck(this, Types);
  }
  _createClass(Types, null, [{
    key: "checkType",
    value:
    /**
     * Checks type of an input value, if it does not match with type, else it returns value
     * @param {string} type
     * @param {any} value
     * @param {string} exceptionMessage
     */
    function checkType(type, value, exceptionMessage, exceptMessage) {
      var check = function check() {
        if (_typeof(value) !== type) {
          if (exceptionMessage) {
            throw TypeError(exceptionMessage);
          }
          throw TypeError("Entered value parameter is not type of " + type + ". It is type of " + _typeof(value));
        }
        return value;
      };
      if (!exceptMessage) {
        check();
      } else {
        try {
          check();
        } catch (err) {
          console.error("".concat(err.name, ": ").concat(err.message));
        }
      }
    }

    /**
     * Checks the list of types. List is array that contains elements as objects which contains keys: type and value, and their values
     * @param {object[]} listOfTypes
     */
  }, {
    key: "checkTypes",
    value: function checkTypes(listOfTypes) {
      for (var i = 0; i < listOfTypes.length; ++i) {
        this.checkType(listOfTypes[i].type, listOfTypes[i].value, "At index ".concat(i, " value type does not match with type ").concat(listOfTypes[i].type, "!"), true);
      }
      return listOfTypes;
    }
  }]);
  return Types;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Types);

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_Package_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Package.js */ "./src/Package.js");
/* harmony import */ var _app_appPrototype_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/appPrototype.js */ "./app/appPrototype.js");
/* harmony import */ var _src_components_test_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/components/test.js */ "./src/components/test.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var ArrayTools = _src_Package_js__WEBPACK_IMPORTED_MODULE_0__["default"].ArrayTools,
  ObjectTools = _src_Package_js__WEBPACK_IMPORTED_MODULE_0__["default"].ObjectTools,
  ConsoleTools = _src_Package_js__WEBPACK_IMPORTED_MODULE_0__["default"].ConsoleTools,
  Scripts = _src_Package_js__WEBPACK_IMPORTED_MODULE_0__["default"].Scripts,
  Ajax = _src_Package_js__WEBPACK_IMPORTED_MODULE_0__["default"].Ajax,
  Attributes = _src_Package_js__WEBPACK_IMPORTED_MODULE_0__["default"].Attributes,
  Events = _src_Package_js__WEBPACK_IMPORTED_MODULE_0__["default"].Events,
  Manipulation = _src_Package_js__WEBPACK_IMPORTED_MODULE_0__["default"].Manipulation,
  Selecting = _src_Package_js__WEBPACK_IMPORTED_MODULE_0__["default"].Selecting,
  Styles = _src_Package_js__WEBPACK_IMPORTED_MODULE_0__["default"].Styles,
  Traversing = _src_Package_js__WEBPACK_IMPORTED_MODULE_0__["default"].Traversing,
  ExceptionHandler = _src_Package_js__WEBPACK_IMPORTED_MODULE_0__["default"].ExceptionHandler,
  Types = _src_Package_js__WEBPACK_IMPORTED_MODULE_0__["default"].Types,
  DOMTools = _src_Package_js__WEBPACK_IMPORTED_MODULE_0__["default"].DOMTools;
var JavaScriptTools = /*#__PURE__*/_createClass(function JavaScriptTools() {
  _classCallCheck(this, JavaScriptTools);
});
_defineProperty(JavaScriptTools, "ArrayTools", ArrayTools);
_defineProperty(JavaScriptTools, "ObjectTools", ObjectTools);
_defineProperty(JavaScriptTools, "ConsoleTools", ConsoleTools);
_defineProperty(JavaScriptTools, "Scripts", Scripts);
_defineProperty(JavaScriptTools, "Ajax", Ajax);
_defineProperty(JavaScriptTools, "Attributes", Attributes);
_defineProperty(JavaScriptTools, "Events", Events);
_defineProperty(JavaScriptTools, "Manipulation", Manipulation);
_defineProperty(JavaScriptTools, "Selecting", Selecting);
_defineProperty(JavaScriptTools, "Styles", Styles);
_defineProperty(JavaScriptTools, "Traversing", Traversing);
_defineProperty(JavaScriptTools, "ExceptionHandler", ExceptionHandler);
_defineProperty(JavaScriptTools, "Types", Types);
_defineProperty(JavaScriptTools, "DOMTools", DOMTools);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JavaScriptTools);
})();

/******/ })()
;
//# sourceMappingURL=main.js.map