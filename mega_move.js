/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/scripts/parallax.js":
/*!****************************************!*\
  !*** ./src/common/scripts/parallax.js ***!
  \****************************************/
/*! exports provided: showVisible */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showVisible", function() { return showVisible; });
function isVisible(elem) {
  var coords = elem.getBoundingClientRect();
  var windowHeight = document.documentElement.clientHeight;
  var topVisible = coords.top > 0 && coords.top < windowHeight; // нижний край элемента виден?

  var bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
  return topVisible || bottomVisible;
}

function showVisible() {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = document.querySelectorAll(".parallax-mobile")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var parallax = _step.value;

      if (isVisible(parallax)) {
        parallax.classList.add("parallax-mobile--visible");
        parallax.classList.remove("parallax-mobile");
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}



/***/ }),

/***/ "./src/mega_move/mega_move.js":
/*!************************************!*\
  !*** ./src/mega_move/mega_move.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mega_move_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mega_move.scss */ "./src/mega_move/mega_move.scss");
/* harmony import */ var _mega_move_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mega_move_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_scripts_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/scripts/parallax */ "./src/common/scripts/parallax.js");


var body = document.querySelector("body");
btn.addEventListener("click", function () {
  menu.classList.toggle("active");
  backdrop.classList.toggle("active");
  btn.classList.toggle("active");
  btnIcon.classList.toggle("active");
});
backdrop.addEventListener("click", function () {
  menu.classList.remove("active");
  backdrop.classList.remove("active");
  btn.classList.remove("active");
  btnIcon.classList.remove("active");
});
window.addEventListener("scroll", _common_scripts_parallax__WEBPACK_IMPORTED_MODULE_1__["showVisible"]);
Object(_common_scripts_parallax__WEBPACK_IMPORTED_MODULE_1__["showVisible"])();
window.addEventListener("scroll", function () {
  var arrowTop = document.querySelector(".arrowTop");

  if (pageYOffset > 650) {
    arrowTop.classList.remove("activate-of");
    arrowTop.classList.add("activate");
    this.setTimeout(function () {
      arrowTop.classList.remove("activate");
      arrowTop.classList.add("activate-of");
    }, 7000);
  }
}); // const form = document.getElementsByTagName("form");
// for (let i = 0; i < form.length; i++) {
//   form[i].addEventListener("submit", function(event) {
//     event.preventDefault();
//     alert("все отлично");
//   });
// }

/***/ }),

/***/ "./src/mega_move/mega_move.scss":
/*!**************************************!*\
  !*** ./src/mega_move/mega_move.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 14:
/*!******************************************!*\
  !*** multi ./src/mega_move/mega_move.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/mega_move/mega_move.js */"./src/mega_move/mega_move.js");


/***/ })

/******/ });
//# sourceMappingURL=mega_move.js.map