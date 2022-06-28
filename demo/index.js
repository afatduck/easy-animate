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

/***/ "./demo/index.ts":
/*!***********************!*\
  !*** ./demo/index.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst index_1 = __importStar(__webpack_require__(/*! ../src/index */ \"./src/index.ts\"));\r\nindex_1.default.changeDefaults({\r\n    duration: 2,\r\n    fillMode: 'forwards'\r\n});\r\nconst setUpDemo = (id, keyframes, props = {}) => {\r\n    const el = document.querySelector(`${id} .animated-object`);\r\n    const animate = document.querySelector(`${id} .animate`);\r\n    const infinite = document.querySelector(`${id} .infinite`);\r\n    const reverse = document.querySelector(`${id} .reverse`);\r\n    const stop = document.querySelector(`${id} .stop`);\r\n    const skip = document.querySelector(`${id} .skip`);\r\n    const msg = document.querySelector(`${id} .msg`);\r\n    let className;\r\n    animate === null || animate === void 0 ? void 0 : animate.addEventListener(\"click\", () => {\r\n        var _a;\r\n        const ani = index_1.default.animate(el, keyframes, props);\r\n        className = ani.className;\r\n        (_a = ani.finished) === null || _a === void 0 ? void 0 : _a.then(() => {\r\n            msg.innerHTML = `Animation done (${new Date().toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' })})`;\r\n        });\r\n    });\r\n    infinite === null || infinite === void 0 ? void 0 : infinite.addEventListener(\"click\", () => {\r\n        var _a;\r\n        const ani = index_1.default.infinite(el, keyframes, props);\r\n        className = ani.className;\r\n        (_a = ani.finished) === null || _a === void 0 ? void 0 : _a.then(() => {\r\n            msg.innerHTML = `Animation done (${new Date().toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' })})`;\r\n        });\r\n    });\r\n    reverse === null || reverse === void 0 ? void 0 : reverse.addEventListener(\"click\", () => {\r\n        var _a;\r\n        const ani = index_1.default.reverse(el, keyframes, props);\r\n        className = ani.className;\r\n        (_a = ani.finished) === null || _a === void 0 ? void 0 : _a.then(() => {\r\n            msg.innerHTML = `Animation done (${new Date().toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' })})`;\r\n        });\r\n    });\r\n    stop === null || stop === void 0 ? void 0 : stop.addEventListener(\"click\", () => {\r\n        if (className)\r\n            index_1.default.stop(className);\r\n    });\r\n    skip === null || skip === void 0 ? void 0 : skip.addEventListener(\"click\", () => {\r\n        if (className)\r\n            index_1.default.skip(className);\r\n    });\r\n};\r\nconst bounceKeyframes = index_1.default.addKeyframes([\r\n    { at: 0, properties: { bottom: \"0px\", width: \"20%\" } },\r\n    { at: 0.5, properties: { bottom: \"40%\", width: \"19%\" } },\r\n    { at: 1, properties: { bottom: \"0px\", width: \"20%\", \"background-color\": \"coral\" } }\r\n]);\r\nsetUpDemo(\"#bounce\", bounceKeyframes, {\r\n    timingFunction: (0, index_1.cubicBezier)(0.3, 0, 0.3, 1)\r\n});\r\nconst fadeInKeyframes = index_1.default.addKeyframes([\r\n    { at: 0, properties: { opacity: 0, transform: \"translateY(-100%)\" } },\r\n    { at: 1, properties: { opacity: 1, transform: \"translateY(0)\" } }\r\n]);\r\nsetUpDemo(\"#fade-in\", fadeInKeyframes, {\r\n    duration: 1\r\n});\r\nconst borderKeyframes = index_1.default.addKeyframes([\r\n    { at: 0, properties: { 'transform': \"rotate(0deg)\", filter: \"blur(5px)\" } },\r\n    { at: 0.5, properties: { filter: \"blur(50px)\" } },\r\n    { at: 1, properties: { 'transform': \"rotate(360deg)\", filter: \"blur(5px)\" } }\r\n]);\r\nsetUpDemo(\"#border\", borderKeyframes, {\r\n    duration: 5,\r\n    timingFunction: \"linear\",\r\n    fillMode: \"none\",\r\n    iterationCount: 2\r\n});\r\n\n\n//# sourceURL=webpack://easy-animate/./demo/index.ts?");

/***/ }),

/***/ "./src/EasyAnimate.ts":
/*!****************************!*\
  !*** ./src/EasyAnimate.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.EasyAnimate = void 0;\r\nconst utils_1 = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\r\nclass EasyAnimate {\r\n    constructor() {\r\n        this._prefix = 'easy-animations-';\r\n        this._animationDefaults = {\r\n            duration: 1,\r\n            delay: 0,\r\n            iterationCount: 1,\r\n            direction: 'normal',\r\n            timingFunction: 'ease',\r\n            fillMode: 'none',\r\n        };\r\n        const ks = document.createElement('style');\r\n        ks.appendChild(document.createTextNode(''));\r\n        document.head.appendChild(ks);\r\n        this._keyframeSheet = ks.sheet;\r\n        const cs = document.createElement('style');\r\n        cs.appendChild(document.createTextNode(''));\r\n        document.head.appendChild(cs);\r\n        this._classSheet = cs.sheet;\r\n        this._keyframes = [];\r\n        this._classes = [];\r\n    }\r\n    get keyframes() {\r\n        return this._keyframes;\r\n    }\r\n    get classes() {\r\n        return this._classes;\r\n    }\r\n    get prefix() {\r\n        return this._prefix;\r\n    }\r\n    changePrefix(_prefix) {\r\n        this._prefix = _prefix;\r\n    }\r\n    changeDefaults(defaults) {\r\n        this._animationDefaults = Object.assign(Object.assign({}, this._animationDefaults), defaults);\r\n    }\r\n    addKeyframes(props, name) {\r\n        const kfName = this._prefix + (name || (0, utils_1.uid)());\r\n        const rule = (0, utils_1.keyframesRule)({ name: kfName, keyframes: props });\r\n        if (this._keyframes.includes(kfName)) {\r\n            this._keyframeSheet.deleteRule(this._keyframes.indexOf(kfName));\r\n            this._keyframes = this._keyframes.filter((k) => k !== kfName);\r\n        }\r\n        this._keyframes.push(kfName);\r\n        this._keyframeSheet.insertRule(rule, this._keyframeSheet.cssRules.length);\r\n        return kfName;\r\n    }\r\n    removeKeyframes(name) {\r\n        if (this._keyframes.includes(name)) {\r\n            this._keyframeSheet.deleteRule(this._keyframes.indexOf(name));\r\n            this._keyframes = this._keyframes.filter((k) => k !== name);\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n    animate(elements, keyframes, props = {}, removeClassWhenFinished = false) {\r\n        let els = [];\r\n        if (typeof elements === 'string')\r\n            document.querySelectorAll(elements).forEach((e) => els.push(e));\r\n        else if (elements instanceof HTMLElement || elements instanceof Element)\r\n            els.push(elements);\r\n        else if (elements instanceof HTMLCollection)\r\n            els = Array.from(elements);\r\n        else\r\n            els = elements;\r\n        const animationProperties = Object.assign(Object.assign({}, this._animationDefaults), props);\r\n        const className = this._prefix + (0, utils_1.uid)();\r\n        const rule = `.${className} { animation: ${keyframes} ${animationProperties.duration}s ${animationProperties.delay}s ${animationProperties.iterationCount} ${animationProperties.direction} ${animationProperties.timingFunction} ${animationProperties.fillMode};`;\r\n        this._classSheet.insertRule(rule, this._classSheet.cssRules.length);\r\n        this._classes.push(className);\r\n        els.forEach((e) => {\r\n            e.classList.forEach((c) => {\r\n                if (this._classes.includes(c))\r\n                    e.classList.remove(c);\r\n            });\r\n            e.style.animation = 'none';\r\n            e.classList.add(className);\r\n            setTimeout(() => {\r\n                e.style.removeProperty('animation');\r\n            }, 0);\r\n        });\r\n        let finished = undefined;\r\n        if (animationProperties.iterationCount !== 'infinite') {\r\n            finished = new Promise((resolve) => {\r\n                const to = setTimeout(() => {\r\n                    resolve();\r\n                }, animationProperties.duration * 1000 * animationProperties.iterationCount + animationProperties.delay * 1000);\r\n                addEventListener(`${className}-finished`, (e) => {\r\n                    clearTimeout(to);\r\n                    if (e.detail.skipped)\r\n                        resolve();\r\n                });\r\n            });\r\n        }\r\n        if (finished && removeClassWhenFinished)\r\n            finished.then(() => this.stop(className));\r\n        return { className, finished };\r\n    }\r\n    infinite(elements, keyframes, props = {}, removeClassWhenFinished = false) {\r\n        return this.animate(elements, keyframes, Object.assign(Object.assign({}, props), { iterationCount: 'infinite' }), removeClassWhenFinished);\r\n    }\r\n    reverse(elements, keyframes, props = {}, removeClassWhenFinished = false) {\r\n        return this.animate(elements, keyframes, Object.assign(Object.assign({}, props), { direction: 'reverse' }), removeClassWhenFinished);\r\n    }\r\n    stop(className) {\r\n        if (this._classes.includes(className)) {\r\n            this._classSheet.deleteRule(this._classes.indexOf(className));\r\n            this._classes = this._classes.filter((c) => c !== className);\r\n            document.querySelectorAll(`.${className}`).forEach((e) => e.classList.remove(className));\r\n            const stopEvent = new CustomEvent(`${className}-finished`, {\r\n                detail: { skipped: false },\r\n            });\r\n            dispatchEvent(stopEvent);\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n    stopAll() {\r\n        this._classes.forEach((c) => this.stop(c));\r\n    }\r\n    skip(className) {\r\n        if (this._classes.includes(className)) {\r\n            const index = this._classes.indexOf(className);\r\n            let ruleCss = this._classSheet.cssRules[index].cssText;\r\n            ruleCss = ruleCss.replace(/(infinite|\\ds)/, '0s');\r\n            this._classSheet.deleteRule(index);\r\n            this._classSheet.insertRule(ruleCss, index);\r\n            const skipEvent = new CustomEvent(`${className}-finished`, {\r\n                detail: { skipped: true },\r\n            });\r\n            dispatchEvent(skipEvent);\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n    skipAll() {\r\n        this._classes.forEach((c) => this.skip(c));\r\n    }\r\n}\r\nexports.EasyAnimate = EasyAnimate;\r\n\n\n//# sourceURL=webpack://easy-animate/./src/EasyAnimate.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.EasyAnimate = exports.cubicBezier = exports.steps = void 0;\r\nconst EasyAnimate_1 = __webpack_require__(/*! ./EasyAnimate */ \"./src/EasyAnimate.ts\");\r\nObject.defineProperty(exports, \"EasyAnimate\", ({ enumerable: true, get: function () { return EasyAnimate_1.EasyAnimate; } }));\r\nconst utils_1 = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\r\nObject.defineProperty(exports, \"cubicBezier\", ({ enumerable: true, get: function () { return utils_1.cubicBezier; } }));\r\nObject.defineProperty(exports, \"steps\", ({ enumerable: true, get: function () { return utils_1.steps; } }));\r\nexports[\"default\"] = new EasyAnimate_1.EasyAnimate();\r\n\n\n//# sourceURL=webpack://easy-animate/./src/index.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.uid = exports.keyframesRule = exports.steps = exports.cubicBezier = void 0;\r\nconst cubicBezier = (x1, y1, x2, y2) => `cubic-bezier(${x1}, ${y1}, ${x2}, ${y2})`;\r\nexports.cubicBezier = cubicBezier;\r\nconst steps = (steps, position) => `steps(${steps}, ${position})`;\r\nexports.steps = steps;\r\nconst keyframesRule = ({ name, keyframes: kf }) => {\r\n    const sorted = kf.filter((k) => k.at >= 0 && k.at <= 1).sort((a, b) => a.at - b.at);\r\n    const properties = sorted.map((k) => {\r\n        const { at, properties: props } = k;\r\n        return `${at * 100}% { ${Object.keys(props)\r\n            .map((p) => `${p}: ${props[p]}`)\r\n            .join('; ')} }`;\r\n    });\r\n    return `@keyframes ${name} { ${properties.join(' ')} }`;\r\n};\r\nexports.keyframesRule = keyframesRule;\r\nconst uid = () => {\r\n    return Date.now().toString(36) + Math.random().toString(36).substring(2);\r\n};\r\nexports.uid = uid;\r\n\n\n//# sourceURL=webpack://easy-animate/./src/utils.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var __webpack_exports__ = __webpack_require__("./demo/index.ts");
/******/ 	
/******/ })()
;