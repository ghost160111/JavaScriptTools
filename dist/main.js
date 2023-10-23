/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
     * @return {object}
     */
  }, {
    key: "getInnerShapeSize",
    value: function getInnerShapeSize(el) {
      return {
        width: el.clientWidth,
        height: el.clientHeight
      };
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