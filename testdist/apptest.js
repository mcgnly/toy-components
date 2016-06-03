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

	"use strict";

	var _Cat = __webpack_require__(1);

	var _Cat2 = _interopRequireDefault(_Cat);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var catInstance = void 0;

	beforeEach(function () {
	    catInstance = new _Cat2.default("fakeName", "fakeColor");
	});

	var assert = chai.assert;
	var expect = chai.expect;

	// describe('Array', function() {
	//     it('should start empty', function() {
	//         var arr = [];

	//         assert.equal(arr.length, 0);
	//     });
	// });

	describe('Cat', function () {
	    it('should be a constructor', function () {
	        expect(catInstance).to.be.an.instanceof(_Cat2.default);
	    });
	    it('should meow', function () {
	        expect(catInstance.says()).to.equal("meow");
	    });
	    // We can have more its here
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Cat = function () {
	    function Cat(name, color) {
	        _classCallCheck(this, Cat);

	        this.name = name;
	        this.color = color;
	        var legs = 4;
	        var tail = true;
	    }

	    _createClass(Cat, [{
	        key: "says",
	        value: function says() {
	            return "meow";
	        }
	    }]);

	    return Cat;
	}();

	exports.default = Cat;

/***/ }
/******/ ]);