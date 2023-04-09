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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/button--hidden.js":
/*!**********************************!*\
  !*** ./src/js/button--hidden.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var innerTech = document.querySelector('.slider__techs');
var innerBrand = document.querySelector('.slider__brands');
var buttonShow = document.querySelectorAll('.button--hidden');

function hideShowCard() {
  buttonShow.forEach(function (item) {
    item.addEventListener('click', function (event) {
      if (event.target.id === 'brand' && event.target.id !== '') {
        event.target.classList.toggle('button--visible');
        innerBrand.classList.toggle('slider--show');
      }

      if (event.target.id === 'tech' && event.target.id !== '') {
        event.target.classList.toggle('button--visible');
        innerTech.classList.toggle('slider--show');
      }

      if (event.target.classList.contains('button--visible')) {
        event.target.textContent = 'Скрыть всё';
      } else {
        event.target.textContent = 'Показать всё';
      }
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (hideShowCard());

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_modal_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/modal__menu.js */ "./src/js/modal__menu.js");
/* harmony import */ var _js_modal_call_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/modal__call.js */ "./src/js/modal__call.js");
/* harmony import */ var _modal_feedback_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal__feedback.js */ "./src/js/modal__feedback.js");
/* harmony import */ var _swiper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./swiper.js */ "./src/js/swiper.js");
/* harmony import */ var _button_hidden_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./button--hidden.js */ "./src/js/button--hidden.js");





 // import {brandsSliderDestroy, swiper, brandsSliderInit} from './swiperPrice.js';

_js_modal_call_js__WEBPACK_IMPORTED_MODULE_2__["default"];
_js_modal_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"];
_modal_feedback_js__WEBPACK_IMPORTED_MODULE_3__["default"];
_swiper_js__WEBPACK_IMPORTED_MODULE_4__["default"];
_button_hidden_js__WEBPACK_IMPORTED_MODULE_5__["default"]; // brandsSliderDestroy;
// brandsSliderInit;

console.log('Works!');

/***/ }),

/***/ "./src/js/modal__call.js":
/*!*******************************!*\
  !*** ./src/js/modal__call.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function getModalCall() {
  document.getElementById("modal-call__btn").addEventListener("click", function () {
    document.getElementById("modal-call").classList.add("show");
    document.body.style.overflow = 'hidden';
  });
  document.getElementById("menu-call__btn").addEventListener("click", function () {
    document.getElementById("modal-call").classList.add("show");
    document.body.style.overflow = 'hidden';
  });
  document.getElementById("close-btn").addEventListener("click", function () {
    document.getElementById("modal-call").classList.remove("show");
    document.body.style.overflow = '';
  });
  document.querySelector("#modal-call .call__box").addEventListener('click', function (event) {
    event._isClickWithInModal = true;
  });
  document.getElementById("modal-call").addEventListener('click', function (event) {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('show');
    document.body.style.overflow = '';
  });
}

/* harmony default export */ __webpack_exports__["default"] = (getModalCall());

/***/ }),

/***/ "./src/js/modal__feedback.js":
/*!***********************************!*\
  !*** ./src/js/modal__feedback.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function getModalFeedback() {
  document.getElementById("modal-feedback__btn").addEventListener("click", function () {
    document.getElementById("modal-feedback").classList.add("show");
    document.body.style.overflow = 'hidden';
  });
  document.getElementById("menu-feedback__btn").addEventListener("click", function () {
    document.getElementById("modal-feedback").classList.add("show");
    document.body.style.overflow = 'hidden';
  });
  document.getElementById("feedback-close-btn").addEventListener("click", function () {
    document.getElementById("modal-feedback").classList.remove("show");
    document.body.style.overflow = '';
  });
  document.querySelector("#modal-feedback .feedback__box").addEventListener('click', function (event) {
    event._isClickWithInModal = true;
  });
  document.getElementById("modal-feedback").addEventListener('click', function (event) {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('show');
    document.body.style.overflow = '';
  });
}

/* harmony default export */ __webpack_exports__["default"] = (getModalFeedback());

/***/ }),

/***/ "./src/js/modal__menu.js":
/*!*******************************!*\
  !*** ./src/js/modal__menu.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var modalMenu = document.querySelector('.modal-menu');
var btnModalShowMenu = document.querySelector('.navigation__burger');
var btnClose = modalMenu.querySelector('.button__close');
var bodyMain = document.querySelector('.main-body');

function getModalMenu() {
  btnModalShowMenu.addEventListener('click', function () {
    modalMenu.classList.toggle('menu--show');
    bodyMain.classList.toggle('main-body--style');
  });
  btnClose.addEventListener('click', function () {
    modalMenu.classList.remove('menu--show');
    bodyMain.classList.remove('main-body--style');
  });
}

/* harmony default export */ __webpack_exports__["default"] = (getModalMenu());

/***/ }),

/***/ "./src/js/swiper.js":
/*!**************************!*\
  !*** ./src/js/swiper.js ***!
  \**************************/
/*! exports provided: swiper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swiper", function() { return swiper; });
// function swiperBrands() {
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
}); // }
// export default swiperBrands();

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map