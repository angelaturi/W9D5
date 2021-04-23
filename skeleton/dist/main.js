/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n\n\nconst clockElement = document.querySelector(\"#clock\");\n\nclass Clock {\n  constructor() {\n    // 1. Create a Date object.\n    // 2. Store the hours, minutes, and seconds.\n    // 3. Call printTime.\n    // 4. Schedule the tick at 1 second intervals.\n    let date = new Date();\n    this.seconds = date.getSeconds();\n    this.hours = date.getHours();\n    this.minutes = date.getMinutes();\n    setInterval(this._tick.bind(this), 1000);\n  }\n\n  printTime() {\n    // Format the time in HH:MM:SS\n    const timeString = `${this.hours} : ${this.minutes} : ${this.seconds}`;\n    // Use console.log to print it.\n    (0,_warmup__WEBPACK_IMPORTED_MODULE_0__.htmlGenerator)(timeString, clockElement);\n  }\n\n  _tick() {\n    // 1. Increment the time by one second.\n    // 2. Call printTime.\n    this._inSeconds();\n    this.printTime();\n  }\n\n  _addMinute() {\n    this.minutes += 1;\n    if (this.minutes === 60) {\n      this.minutes = 0;\n      this._addHour();\n    }\n  }\n\n  _addHour() {\n    this.hours += 1;\n    this.hours = this.hours % 24;\n  }\n  _inSeconds() {\n    this.seconds = this.seconds + 1;\n    if (this.seconds === 60) {\n      this.seconds = 0;\n      this._addMinute();\n    }\n  }\n}\n\nconst clock = new Clock();\n\n// module.exports = Clock;\n\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dogs\": () => (/* binding */ dogs),\n/* harmony export */   \"dogLinkCreator\": () => (/* binding */ dogLinkCreator),\n/* harmony export */   \"attachDogLinks\": () => (/* binding */ attachDogLinks)\n/* harmony export */ });\nconst dropDownNav = document.querySelector(\".drop-down-dog-nav\");\nconst dogs = {\n  Corgi: \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  Affenpinscher: \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\":\n    \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  Tosa: \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\",\n};\n\nfunction dogLinkCreator() {\n  let aTag = [];\n  Object.keys(dogs).forEach(dog => {\n    let tag = document.createElement(\"a\");\n    tag.textContent = dog;\n    tag.setAttribute(\"href\", dogs[dog]);\n    let liTag = document.createElement(\"li\");\n    liTag.append(tag);\n    liTag.classList.add(\"dog-link\");\n    aTag.push(liTag);\n  });\n  return aTag;\n}\n\nfunction attachDogLinks() {\n  let dogLink = dogLinkCreator();\n  // debugger;\n  dogLink.forEach(li => {\n    let dropdown = document.getElementsByClassName(\"drop-down-dog-list\");\n    dropdown[0].appendChild(li);\n  });\n}\n\nattachDogLinks();\n\nfunction handleEnter() {\n  const dropdown = querySelectorAll(\".dog-link\");\n  dropdown.forEach(chil => {\n    child.classList.add(\"open\");\n  });\n}\n\nfunction handleLeave() {\n  const dropdown = querySelectorAll(\".dog-link\");\n  dropdown.forEach(chil => {\n    child.classList.remove(\"open\");\n  });\n}\n\nlet DropDownNav = document.getElementsByClassName(\"drop-down-dog-nav\");\n\nDropDownNav[0].addEventListener(\"mouseenter\", handleEnter);\nDropDownNav[0].addEventListener(\"mouseenter\", handleLeave);\n\n// module.exports = {\n//   attachDogLinks: attachDogLinks,\n// };\n\n// ES7 Way //\n// export on objects of function that you want to export.\n\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n\n\n//import {dogLinkCreator, } from \"./drop_down\";\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"htmlGenerator\": () => (/* binding */ htmlGenerator)\n/* harmony export */ });\nconst partyHeader = document.getElementById(\"party\");\n\nconst htmlGenerator = (string, htmlElement) => {\n  let pTag = document.createElement(\"p\");\n  pTag.textContent = string;\n  if (htmlElement.hasChildNodes()) {\n    htmlElement.childNodes.forEach(ele => {\n      htmlElement.removeChild(ele);\n    });\n  }\n  htmlElement.appendChild(pTag);\n};\n\nhtmlGenerator(\"Party Time.\", partyHeader);\n\n\n//# sourceURL=webpack:///./src/warmup.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;