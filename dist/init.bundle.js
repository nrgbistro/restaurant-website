/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var myLibrary;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/init.js":
/*!*****************************!*\
  !*** ./src/scripts/init.js ***!
  \*****************************/
/***/ ((module) => {

eval("function createDefaultPage() {\n\tconst container = document.querySelector(\"div#content\");\n\tcontainer.appendChild(navBar());\n\tconsole.log(\"finished creating page\");\n}\n\n\nfunction navBar() {\n\tconst navBar = document.createElement(\"div\");\n\tnavBar.id = \"navBar\";\n\n\tconst tabList = [\"Home\", \"Menu\", \"Contact\"];\n\n\tfor (let i = 0; i < tabList.length; i++) {\n\t\tnavBar.appendChild(createTab(tabList[i]));\n\t}\n\tconsole.log(\"created nav bar\");\n\treturn navBar;\n}\n\nfunction createTab(name) {\n\tconst newTab = document.createElement(\"h1\");\n\tnewTab.classList.add(\"tab\");\n\tnewTab.id = name;\n\tnewTab.textContent = name;\n\treturn newTab;\n}\n\nmodule.exports = {\n\tcreateDefaultPage,\n};\n\n//# sourceURL=webpack://myLibrary/./src/scripts/init.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/init.js");
/******/ 	myLibrary = __webpack_exports__;
/******/ 	
/******/ })()
;