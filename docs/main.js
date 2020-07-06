(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"top-nav\" class=\"d-flex flex-row align-items-center p-2\">\r\n      <h5 class=\"mb-0 mt-0 mr-auto font-weight-normal\">Angular Playground</h5>\r\n      <button class=\"btn top-nav-button\" (click)=\"openPlaygroundPicker()\">Playground Picker</button>\r\n</div>\r\n<router-outlet></router-outlet>\r\n<ng-template #modalContainer></ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"px-3 py-2 text-theme\">\r\n  <h4 class=\"mt-0 mb-3\">Home</h4>\r\n  <p>Click the Playground Picker Button at the top right to navigate around. Enjoy all the sample components!</p>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Modal -->\r\n<div class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" #modalContainer>\r\n  <ng-template #modalTemplate></ng-template>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/playground-picker/playground-picker.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/playground-picker/playground-picker.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-dialog modal-lg\">\r\n  <div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n      <h5 class=\"modal-title theme-text\">Playground Picker</h5>\r\n      <button type=\"button\" class=\"close theme-text\" aria-label=\"Close\" data-dismiss=\"modal\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body text-center px-0\">\r\n      <h3 class=\"theme-text\">Choose Angular App</h3>\r\n      <div class=\"my-3\">\r\n        <div>\r\n          <button class=\"btn theme-button mr-2\" routerLink=\"/\" data-dismiss=\"modal\">Home</button>\r\n          <button class=\"btn theme-button mr-2\" routerLink=\"/connection\" data-dismiss=\"modal\">Particle Connections</button>\r\n        </div>\r\n        <div class=\"mt-2\">\r\n        <button class=\"btn theme-button mr-2\" routerLink=\"/calendar\" data-dismiss=\"modal\">Lotto Calendar</button>\r\n        <button class=\"btn theme-button mr-2\" routerLink=\"/emitter\" data-dismiss=\"modal\">Particle Emitter</button>\r\n        <button class=\"btn theme-button\" routerLink=\"/swarm\" data-dismiss=\"modal\">Swarm</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"text-center\">\r\n        <span>\r\n          <label class=\"toggle\" for=\"toggler\">\r\n            <input type=\"checkbox\" id=\"toggler\" (change)=\"Theme.toggle()\" [(ngModel)]=\"Theme.darkThemeToggled\">\r\n            <fa-icon icon=\"sun\" class=\"toggle-icon toggle-icon-left\"></fa-icon>\r\n            <span></span>\r\n            <fa-icon icon=\"moon\" class=\"toggle-icon toggle-icon-right theme-text\"></fa-icon>\r\n          </label>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/home/home.component */ "./src/app/components/home/home.component.ts");




var routes = [{ path: '', component: _app_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }, { path: 'connection', loadChildren: function () { return Promise.all(/*! import() | modules-connection-connection-module */[__webpack_require__.e("default~modules-connection-connection-module~modules-emitter-emitter-module~modules-swarm-swarm-module"), __webpack_require__.e("modules-connection-connection-module")]).then(__webpack_require__.bind(null, /*! ./modules/connection/connection.module */ "./src/app/modules/connection/connection.module.ts")).then(function (m) { return m.ConnectionModule; }); } },
    { path: 'calendar', loadChildren: function () { return __webpack_require__.e(/*! import() | modules-calendar-calendar-module */ "modules-calendar-calendar-module").then(__webpack_require__.bind(null, /*! ./modules/calendar/calendar.module */ "./src/app/modules/calendar/calendar.module.ts")).then(function (m) { return m.CalendarModule; }); } },
    { path: 'emitter', loadChildren: function () { return Promise.all(/*! import() | modules-emitter-emitter-module */[__webpack_require__.e("default~modules-connection-connection-module~modules-emitter-emitter-module~modules-swarm-swarm-module"), __webpack_require__.e("modules-emitter-emitter-module")]).then(__webpack_require__.bind(null, /*! ./modules/emitter/emitter.module */ "./src/app/modules/emitter/emitter.module.ts")).then(function (m) { return m.EmitterModule; }); } },
    { path: 'swarm', loadChildren: function () { return Promise.all(/*! import() | modules-swarm-swarm-module */[__webpack_require__.e("default~modules-connection-connection-module~modules-emitter-emitter-module~modules-swarm-swarm-module"), __webpack_require__.e("modules-swarm-swarm-module")]).then(__webpack_require__.bind(null, /*! ./modules/swarm/swarm.module */ "./src/app/modules/swarm/swarm.module.ts")).then(function (m) { return m.SwarmModule; }); } }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* @include themes() { color: theme(buttonTextColor); } */\n/* background-color: color(darkgrey) */\n/* Defines A Map of Maps */\n/* webkit moz ms */\n/* Duplicate Styling For Each Theme */\n/* Duplicate Styling For Each Theme On :Host*/\n/* @include breakpoints(tablet-wide) { padding-top: 4rem;} */\n/* @include prefixes((  transition: all 0.3s ease, transform: translateX(90px)  )) */\n/* @include themes() { color: theme(buttonTextColor); } */\n/* background-color: color(darkgrey) */\n/* Defines A Map of Maps */\n/* webkit moz ms */\n/* Duplicate Styling For Each Theme */\n/* Duplicate Styling For Each Theme On :Host*/\n/* @include breakpoints(tablet-wide) { padding-top: 4rem;} */\n/* @include prefixes((  transition: all 0.3s ease, transform: translateX(90px)  )) */\nhtml, body {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n}\n:host-context(.theme-light) .theme-text {\n  color: #323232;\n}\n:host-context(.theme-dark) .theme-text {\n  color: #ffffff;\n}\n:host-context(.theme-light) .theme-button {\n  color: #ffffff;\n  border-color: #323232;\n  background-color: #323232;\n}\n:host-context(.theme-dark) .theme-button {\n  color: #323232;\n  border-color: #ffc107;\n  background-color: #ffc107;\n}\n:host-context(.theme-light) .theme-button:hover {\n  color: #ffffff;\n  border-color: #252525;\n  background-color: #252525;\n}\n:host-context(.theme-dark) .theme-button:hover {\n  color: #323232;\n  border-color: #edb100;\n  background-color: #edb100;\n}\n:host-context(.theme-light) .theme-button-outline {\n  color: #323232;\n  border-color: #323232;\n  background-color: transparent;\n}\n:host-context(.theme-dark) .theme-button-outline {\n  color: #ffc107;\n  border-color: #ffc107;\n  background-color: transparent;\n}\n:host-context(.theme-light) .theme-button-outline:hover {\n  color: #ffffff;\n  border-color: #323232;\n  background-color: #323232;\n}\n:host-context(.theme-dark) .theme-button-outline:hover {\n  color: #323232;\n  border-color: #ffc107;\n  background-color: #ffc107;\n}\n.toggle {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 24px;\n  margin: 0 30px;\n}\n.toggle input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.toggle input:checked ~ span:before {\n  transform: translateX(26px);\n}\n.toggle span {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #323232;\n  border-radius: 24px;\n  transition: 0.4s;\n}\n:host-context(.theme-light) .toggle span {\n  background-color: #323232;\n}\n:host-context(.theme-dark) .toggle span {\n  background-color: #ffc107;\n}\n.toggle span:before {\n  position: absolute;\n  content: \"\";\n  height: 16px;\n  width: 16px;\n  left: 4px;\n  bottom: 4px;\n  border-radius: 50%;\n  transition: 0.4s;\n}\n:host-context(.theme-light) .toggle span:before {\n  background-color: #ffffff;\n}\n:host-context(.theme-dark) .toggle span:before {\n  background-color: #323232;\n}\n.toggle .toggle-icon {\n  vertical-align: top;\n  height: 24px;\n  position: absolute;\n  width: 16px;\n  font-size: 16px;\n}\n.toggle .toggle-icon:before {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.toggle .toggle-icon-left {\n  color: #ffc107;\n  left: -50%;\n}\n.toggle .toggle-icon-right {\n  right: -50%;\n}\n.clickable {\n  cursor: pointer;\n}\n:host {\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n  display: block;\n}\n.theme-light :host {\n  background-color: #ffffff;\n}\n.theme-dark :host {\n  background-color: #323232;\n}\n#top-nav {\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3) !important;\n  position: relative;\n  z-index: 10;\n}\n:host-context(.theme-light) #top-nav {\n  border-color: #323232 !important;\n  color: #323232;\n  background-color: #ffffff;\n}\n:host-context(.theme-dark) #top-nav {\n  border-color: #ffc107 !important;\n  color: #ffffff;\n  background-color: #323232;\n}\n:host-context(.theme-light) #top-nav .top-nav-button {\n  color: #323232;\n  border-color: #323232;\n  background-color: transparent;\n}\n:host-context(.theme-dark) #top-nav .top-nav-button {\n  color: #ffc107;\n  border-color: #ffc107;\n  background-color: transparent;\n}\n:host-context(.theme-light) #top-nav .top-nav-button:hover {\n  color: #ffffff;\n  border-color: #323232;\n  background-color: #323232;\n}\n:host-context(.theme-dark) #top-nav .top-nav-button:hover {\n  color: #323232;\n  border-color: #ffc107;\n  background-color: #ffc107;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUzpcXERldmVsb3BtZW50XFxXZWJcXEFuZ3VsYXIgUGxheWdyb3VuZC9zcmNcXGFzc2V0c1xcc3R5bGVzXFxmdW5jdGlvbnMuc2NzcyIsInNyYy9hcHAvUzpcXERldmVsb3BtZW50XFxXZWJcXEFuZ3VsYXIgUGxheWdyb3VuZC9zcmNcXGFzc2V0c1xcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvUzpcXERldmVsb3BtZW50XFxXZWJcXEFuZ3VsYXIgUGxheWdyb3VuZC9zcmNcXGFzc2V0c1xcc3R5bGVzXFxtaXhpbnMuc2NzcyIsInNyYy9hcHAvUzpcXERldmVsb3BtZW50XFxXZWJcXEFuZ3VsYXIgUGxheWdyb3VuZC9zcmNcXGFzc2V0c1xcc3R5bGVzXFxnbG9iYWwuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9TOlxcRGV2ZWxvcG1lbnRcXFdlYlxcQW5ndWxhciBQbGF5Z3JvdW5kL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQUE7QUFLQSxzQ0FBQTtBQ0NBLDBCQUFBO0FBaUNBLGtCQUFBO0FDdkNBLHFDQUFBO0FBVUEsNkNBQUE7QUFVQSw0REFBQTtBQWFBLG9GQUFBO0FGakNBLHlEQUFBO0FBS0Esc0NBQUE7QUNDQSwwQkFBQTtBQWlDQSxrQkFBQTtBQ3ZDQSxxQ0FBQTtBQVVBLDZDQUFBO0FBVUEsNERBQUE7QUFhQSxvRkFBQTtBQzdCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ2FKO0FGbEJJO0VDVUksY0FBQTtBQ1lSO0FGdEJJO0VDVUksY0FBQTtBQ2VSO0FGekJJO0VDZ0JJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDYVI7QUYvQkk7RUNnQkksY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNrQlI7QUZwQ0k7RUN1Qk0sY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNnQlY7QUZ6Q0k7RUN1Qk0sY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNxQlY7QUY5Q0k7RUNnQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUNrQlI7QUZwREk7RUNnQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUN1QlI7QUZ6REk7RUN1Q00sY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNxQlY7QUY5REk7RUN1Q00sY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUMwQlY7QURyQkE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDd0JKO0FEdEJJO0VBQ0UsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDd0JOO0FEckJJO0VEdkJBLDJCQ3dCb0I7QUN5QnhCO0FEbkJJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUR0Q0YsZ0JDdUNvQjtBQ3VCeEI7QUZsR0k7RUMrRUkseUJBQUE7QUNzQlI7QUZyR0k7RUMrRUkseUJBQUE7QUN5QlI7QURyQk07RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUR0REosZ0JDdURzQjtBQ3lCMUI7QUZwSEk7RUMrRk0seUJBQUE7QUN3QlY7QUZ2SEk7RUMrRk0seUJBQUE7QUMyQlY7QUR0Qkk7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDd0JOO0FEdEJNO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VEekVKLDJCQzBFc0I7QUMwQjFCO0FEcEJJO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUNzQk47QURuQkk7RUFDRSxXQUFBO0FDcUJOO0FEakJFO0VBQ0UsZUFBQTtBQ29CSjtBQ3JKQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FEd0pKO0FGaEpJO0VHTkkseUJBQUE7QUR5SlI7QUZuSkk7RUdOSSx5QkFBQTtBRDRKUjtBQ3hKQTtFQUNJLG1EQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FEMkpKO0FGdEtJO0VHYUUsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUQ0Sk47QUYzS0k7RUdhRSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBRGlLTjtBRmhMSTtFR29CSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBRCtKUjtBRnJMSTtFR29CSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBRG9LUjtBRjFMSTtFRzRCTSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBRGlLVjtBRi9MSTtFRzRCTSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBRHNLViIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBpbmNsdWRlIHRoZW1lcygpIHsgY29sb3I6IHRoZW1lKGJ1dHRvblRleHRDb2xvcik7IH0gKi9cclxuQGZ1bmN0aW9uIHRoZW1lKCRrZXkpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGN1cnJlbnQtdGhlbWUsICRrZXkpO1xyXG59XHJcblxyXG4vKiBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcihkYXJrZ3JleSkgKi9cclxuQGZ1bmN0aW9uIGNvbG9yKCRrZXkpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGtleSk7XHJcbn1cclxuIiwiJGNvbG9yczogKFxyXG4gIGRhcmtncmV5OiAjMzIzMjMyLFxyXG4gIHllbGxvdzogI2ZmYzEwNyxcclxuICB3aGl0ZTogI2ZmZmZmZlxyXG4pO1xyXG5cclxuLyogRGVmaW5lcyBBIE1hcCBvZiBNYXBzICovXHJcbiR0aGVtZXM6IChcclxuICBsaWdodDogKFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcih3aGl0ZSksXHJcbiAgICB0ZXh0Q29sb3I6IGNvbG9yKGRhcmtncmV5KSxcclxuICAgIGJvcmRlckNvbG9yOiBjb2xvcihkYXJrZ3JleSksXHJcbiAgICBidXR0b25UZXh0Q29sb3I6IGNvbG9yKGRhcmtncmV5KSxcclxuICAgIGJ1dHRvblRleHRIb3ZlckNvbG9yOiBjb2xvcih3aGl0ZSksXHJcbiAgICBidXR0b25CR0NvbG9yOiB0cmFuc3BhcmVudCxcclxuICAgIGJ1dHRvbkJHSG92ZXJDb2xvcjogY29sb3IoZGFya2dyZXkpXHJcbiAgKSxcclxuICBkYXJrOiAoXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yKGRhcmtncmV5KSxcclxuICAgIHRleHRDb2xvcjogY29sb3Iod2hpdGUpLFxyXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9yKHllbGxvdyksXHJcbiAgICBidXR0b25UZXh0Q29sb3I6IGNvbG9yKHllbGxvdyksXHJcbiAgICBidXR0b25UZXh0SG92ZXJDb2xvcjogY29sb3IoZGFya2dyZXkpLFxyXG4gICAgYnV0dG9uQkdDb2xvcjogdHJhbnNwYXJlbnQsXHJcbiAgICBidXR0b25CR0hvdmVyQ29sb3I6IGNvbG9yKHllbGxvdylcclxuICApLFxyXG4pO1xyXG5cclxuJGJyZWFrcG9pbnRzOiAoXHJcbiAgICBwaG9uZTogICAgICAgIDQwMHB4LFxyXG4gICAgcGhvbmUtd2lkZTogICA0ODBweCxcclxuICAgIHBoYWJsZXQ6ICAgICAgNTYwcHgsXHJcbiAgICB0YWJsZXQtc21hbGw6IDY0MHB4LFxyXG4gICAgdGFibGV0OiAgICAgICA3NjhweCxcclxuICAgIHRhYmxldC13aWRlOiAgMTAyNHB4LFxyXG4gICAgZGVza3RvcDogICAgICAxMjQ4cHgsXHJcbiAgICBkZXNrdG9wLXdpZGU6IDE0NDBweFxyXG4pO1xyXG5cclxuLyogd2Via2l0IG1veiBtcyAqL1xyXG4kcHJlZml4ZXM6IChcclxuICB0cmFuc2Zvcm06ICh3ZWJraXQgbXMpLFxyXG4gIHRyYW5zaXRpb246ICh3ZWJraXQgbylcclxuKTtcclxuIiwiLyogRHVwbGljYXRlIFN0eWxpbmcgRm9yIEVhY2ggVGhlbWUgKi9cclxuQG1peGluIHRoZW1lcygpe1xyXG4gIEBlYWNoICR0aGVtZSwgJG1hcCBpbiAkdGhlbWVzIHtcclxuICAgICRjdXJyZW50LXRoZW1lOiAkbWFwICFnbG9iYWw7XHJcbiAgICA6aG9zdC1jb250ZXh0KC50aGVtZS0jeyR0aGVtZX0pICYge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIER1cGxpY2F0ZSBTdHlsaW5nIEZvciBFYWNoIFRoZW1lIE9uIDpIb3N0Ki9cclxuQG1peGluIHRoZW1lc0hvc3QoKXtcclxuICBAZWFjaCAkdGhlbWUsICRtYXAgaW4gJHRoZW1lcyB7XHJcbiAgICAkY3VycmVudC10aGVtZTogJG1hcCAhZ2xvYmFsO1xyXG4gICAgLnRoZW1lLSN7JHRoZW1lfSAmIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBAaW5jbHVkZSBicmVha3BvaW50cyh0YWJsZXQtd2lkZSkgeyBwYWRkaW5nLXRvcDogNHJlbTt9ICovXHJcbkBtaXhpbiBicmVha3BvaW50cygkd2lkdGgsICR0eXBlOiBtaW4pIHtcclxuICAgIEBpZiBtYXBfaGFzX2tleSgkYnJlYWtwb2ludHMsICR3aWR0aCkge1xyXG4gICAgICAgICR3aWR0aDogbWFwX2dldCgkYnJlYWtwb2ludHMsICR3aWR0aCk7XHJcbiAgICAgICAgQGlmICR0eXBlID09IG1heCB7XHJcbiAgICAgICAgICAgICR3aWR0aDogJHdpZHRoIC0gMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kICgjeyR0eXBlfS13aWR0aDogJHdpZHRoKSB7XHJcbiAgICAgICAgICAgIEBjb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyogQGluY2x1ZGUgcHJlZml4ZXMoKCAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSwgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDkwcHgpICApKSAqL1xyXG5AbWl4aW4gcHJlZml4ZXMoJGRlY2xhcmF0aW9ucykge1xyXG4gIEBlYWNoICRwcm9wZXJ0eSwgJHZhbHVlIGluICRkZWNsYXJhdGlvbnMge1xyXG4gICAgJHByb3BlcnR5LXByZWZpeGVzIDogbWFwLWdldCgkcHJlZml4ZXMsICRwcm9wZXJ0eSk7XHJcbiAgICBAZWFjaCAkcHJlZml4IGluICRwcm9wZXJ0eS1wcmVmaXhlcyB7XHJcbiAgICAgICN7Jy0nICsgJHByZWZpeCArICctJyArICRwcm9wZXJ0eX06ICR2YWx1ZTtcclxuICAgIH1cclxuICAgICN7JHByb3BlcnR5fTogJHZhbHVlO1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0ICcuL2Z1bmN0aW9ucy5zY3NzJztcclxuQGltcG9ydCAnLi92YXJpYWJsZXMuc2Nzcyc7XHJcbkBpbXBvcnQgJy4vbWl4aW5zLnNjc3MnO1xyXG5cclxuaHRtbCwgYm9keXtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIG1hcmdpbjowO1xyXG59XHJcblxyXG4udGhlbWUtdGV4dCB7XHJcbiAgICBAaW5jbHVkZSB0aGVtZXMoKSB7XHJcbiAgICAgICAgY29sb3I6IHRoZW1lKHRleHRDb2xvcik7ICBcclxuICAgICAgfVxyXG59XHJcblxyXG4udGhlbWUtYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIHRoZW1lcygpIHtcclxuICAgICAgICBjb2xvcjogdGhlbWUoYnV0dG9uVGV4dEhvdmVyQ29sb3IpOyAgXHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0aGVtZShidXR0b25CR0hvdmVyQ29sb3IpOyBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZShidXR0b25CR0hvdmVyQ29sb3IpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVye1xyXG4gICAgICAgIEBpbmNsdWRlIHRoZW1lcygpIHtcclxuICAgICAgICAgIGNvbG9yOiB0aGVtZShidXR0b25UZXh0SG92ZXJDb2xvcik7ICBcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogZGFya2VuKHRoZW1lKGJ1dHRvbkJHSG92ZXJDb2xvciksIDUlKTsgXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4odGhlbWUoYnV0dG9uQkdIb3ZlckNvbG9yKSwgNSUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnRoZW1lLWJ1dHRvbi1vdXRsaW5lIHtcclxuICAgIEBpbmNsdWRlIHRoZW1lcygpIHtcclxuICAgICAgICBjb2xvcjogdGhlbWUoYnV0dG9uVGV4dENvbG9yKTsgIFxyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdGhlbWUoYnV0dG9uVGV4dENvbG9yKTsgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWUoYnV0dG9uQkdDb2xvcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgQGluY2x1ZGUgdGhlbWVzKCkge1xyXG4gICAgICAgICAgY29sb3I6IHRoZW1lKGJ1dHRvblRleHRIb3ZlckNvbG9yKTsgIFxyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB0aGVtZShidXR0b25CR0hvdmVyQ29sb3IpOyBcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1lKGJ1dHRvbkJHSG92ZXJDb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udG9nZ2xlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbWFyZ2luOiAwIDMwcHg7XHJcbiAgICBcclxuICAgIGlucHV0IHsgXHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgICBoZWlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlucHV0OmNoZWNrZWQgfiBzcGFuOmJlZm9yZSB7XHJcbiAgICAgIEBpbmNsdWRlIHByZWZpeGVzKChcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweClcclxuICAgICAgKSk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzcGFuIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IoZGFya2dyZXkpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgICBAaW5jbHVkZSBwcmVmaXhlcygoXHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC40c1xyXG4gICAgICApKTtcclxuICAgICAgQGluY2x1ZGUgdGhlbWVzKCkgeyAgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWUoYm9yZGVyQ29sb3IpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgIGxlZnQ6IDRweDtcclxuICAgICAgICBib3R0b206IDRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgQGluY2x1ZGUgcHJlZml4ZXMoKFxyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC40c1xyXG4gICAgICAgICkpO1xyXG4gICAgICAgIEBpbmNsdWRlIHRoZW1lcygpIHsgIFxyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWUoYmFja2dyb3VuZENvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRvZ2dsZS1pY29ue1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgXHJcbiAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBAaW5jbHVkZSBwcmVmaXhlcygoXHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSlcclxuICAgICAgICApKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudG9nZ2xlLWljb24tbGVmdHtcclxuICAgICAgY29sb3I6IGNvbG9yKHllbGxvdyk7XHJcbiAgICAgIGxlZnQ6IC01MCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50b2dnbGUtaWNvbi1yaWdodHtcclxuICAgICAgcmlnaHQ6IC01MCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jbGlja2FibGUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59IiwiLyogQGluY2x1ZGUgdGhlbWVzKCkgeyBjb2xvcjogdGhlbWUoYnV0dG9uVGV4dENvbG9yKTsgfSAqL1xuLyogYmFja2dyb3VuZC1jb2xvcjogY29sb3IoZGFya2dyZXkpICovXG4vKiBEZWZpbmVzIEEgTWFwIG9mIE1hcHMgKi9cbi8qIHdlYmtpdCBtb3ogbXMgKi9cbi8qIER1cGxpY2F0ZSBTdHlsaW5nIEZvciBFYWNoIFRoZW1lICovXG4vKiBEdXBsaWNhdGUgU3R5bGluZyBGb3IgRWFjaCBUaGVtZSBPbiA6SG9zdCovXG4vKiBAaW5jbHVkZSBicmVha3BvaW50cyh0YWJsZXQtd2lkZSkgeyBwYWRkaW5nLXRvcDogNHJlbTt9ICovXG4vKiBAaW5jbHVkZSBwcmVmaXhlcygoICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLCB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOTBweCkgICkpICovXG4vKiBAaW5jbHVkZSB0aGVtZXMoKSB7IGNvbG9yOiB0aGVtZShidXR0b25UZXh0Q29sb3IpOyB9ICovXG4vKiBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcihkYXJrZ3JleSkgKi9cbi8qIERlZmluZXMgQSBNYXAgb2YgTWFwcyAqL1xuLyogd2Via2l0IG1veiBtcyAqL1xuLyogRHVwbGljYXRlIFN0eWxpbmcgRm9yIEVhY2ggVGhlbWUgKi9cbi8qIER1cGxpY2F0ZSBTdHlsaW5nIEZvciBFYWNoIFRoZW1lIE9uIDpIb3N0Ki9cbi8qIEBpbmNsdWRlIGJyZWFrcG9pbnRzKHRhYmxldC13aWRlKSB7IHBhZGRpbmctdG9wOiA0cmVtO30gKi9cbi8qIEBpbmNsdWRlIHByZWZpeGVzKCggIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UsIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg5MHB4KSAgKSkgKi9cbmh0bWwsIGJvZHkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbjpob3N0LWNvbnRleHQoLnRoZW1lLWxpZ2h0KSAudGhlbWUtdGV4dCB7XG4gIGNvbG9yOiAjMzIzMjMyO1xufVxuOmhvc3QtY29udGV4dCgudGhlbWUtZGFyaykgLnRoZW1lLXRleHQge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuOmhvc3QtY29udGV4dCgudGhlbWUtbGlnaHQpIC50aGVtZS1idXR0b24ge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjMzIzMjMyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyO1xufVxuOmhvc3QtY29udGV4dCgudGhlbWUtZGFyaykgLnRoZW1lLWJ1dHRvbiB7XG4gIGNvbG9yOiAjMzIzMjMyO1xuICBib3JkZXItY29sb3I6ICNmZmMxMDc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XG59XG46aG9zdC1jb250ZXh0KC50aGVtZS1saWdodCkgLnRoZW1lLWJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICMyNTI1MjU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTI1MjU7XG59XG46aG9zdC1jb250ZXh0KC50aGVtZS1kYXJrKSAudGhlbWUtYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICMzMjMyMzI7XG4gIGJvcmRlci1jb2xvcjogI2VkYjEwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkYjEwMDtcbn1cblxuOmhvc3QtY29udGV4dCgudGhlbWUtbGlnaHQpIC50aGVtZS1idXR0b24tb3V0bGluZSB7XG4gIGNvbG9yOiAjMzIzMjMyO1xuICBib3JkZXItY29sb3I6ICMzMjMyMzI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuOmhvc3QtY29udGV4dCgudGhlbWUtZGFyaykgLnRoZW1lLWJ1dHRvbi1vdXRsaW5lIHtcbiAgY29sb3I6ICNmZmMxMDc7XG4gIGJvcmRlci1jb2xvcjogI2ZmYzEwNztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG46aG9zdC1jb250ZXh0KC50aGVtZS1saWdodCkgLnRoZW1lLWJ1dHRvbi1vdXRsaW5lOmhvdmVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogIzMyMzIzMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMjtcbn1cbjpob3N0LWNvbnRleHQoLnRoZW1lLWRhcmspIC50aGVtZS1idXR0b24tb3V0bGluZTpob3ZlciB7XG4gIGNvbG9yOiAjMzIzMjMyO1xuICBib3JkZXItY29sb3I6ICNmZmMxMDc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XG59XG5cbi50b2dnbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMjRweDtcbiAgbWFyZ2luOiAwIDMwcHg7XG59XG4udG9nZ2xlIGlucHV0IHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cbi50b2dnbGUgaW5wdXQ6Y2hlY2tlZCB+IHNwYW46YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbn1cbi50b2dnbGUgc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjMyMzI7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgLW8tdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cbjpob3N0LWNvbnRleHQoLnRoZW1lLWxpZ2h0KSAudG9nZ2xlIHNwYW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyO1xufVxuOmhvc3QtY29udGV4dCgudGhlbWUtZGFyaykgLnRvZ2dsZSBzcGFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcbn1cbi50b2dnbGUgc3BhbjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGxlZnQ6IDRweDtcbiAgYm90dG9tOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICAtby10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuOmhvc3QtY29udGV4dCgudGhlbWUtbGlnaHQpIC50b2dnbGUgc3BhbjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuOmhvc3QtY29udGV4dCgudGhlbWUtZGFyaykgLnRvZ2dsZSBzcGFuOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjMyMzI7XG59XG4udG9nZ2xlIC50b2dnbGUtaWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGhlaWdodDogMjRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTZweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLnRvZ2dsZSAudG9nZ2xlLWljb246YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbi50b2dnbGUgLnRvZ2dsZS1pY29uLWxlZnQge1xuICBjb2xvcjogI2ZmYzEwNztcbiAgbGVmdDogLTUwJTtcbn1cbi50b2dnbGUgLnRvZ2dsZS1pY29uLXJpZ2h0IHtcbiAgcmlnaHQ6IC01MCU7XG59XG5cbi5jbGlja2FibGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbjpob3N0IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4udGhlbWUtbGlnaHQgOmhvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuLnRoZW1lLWRhcmsgOmhvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyO1xufVxuXG4jdG9wLW5hdiB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMykgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDtcbn1cbjpob3N0LWNvbnRleHQoLnRoZW1lLWxpZ2h0KSAjdG9wLW5hdiB7XG4gIGJvcmRlci1jb2xvcjogIzMyMzIzMiAhaW1wb3J0YW50O1xuICBjb2xvcjogIzMyMzIzMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbjpob3N0LWNvbnRleHQoLnRoZW1lLWRhcmspICN0b3AtbmF2IHtcbiAgYm9yZGVyLWNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyO1xufVxuOmhvc3QtY29udGV4dCgudGhlbWUtbGlnaHQpICN0b3AtbmF2IC50b3AtbmF2LWJ1dHRvbiB7XG4gIGNvbG9yOiAjMzIzMjMyO1xuICBib3JkZXItY29sb3I6ICMzMjMyMzI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuOmhvc3QtY29udGV4dCgudGhlbWUtZGFyaykgI3RvcC1uYXYgLnRvcC1uYXYtYnV0dG9uIHtcbiAgY29sb3I6ICNmZmMxMDc7XG4gIGJvcmRlci1jb2xvcjogI2ZmYzEwNztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG46aG9zdC1jb250ZXh0KC50aGVtZS1saWdodCkgI3RvcC1uYXYgLnRvcC1uYXYtYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogIzMyMzIzMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMjtcbn1cbjpob3N0LWNvbnRleHQoLnRoZW1lLWRhcmspICN0b3AtbmF2IC50b3AtbmF2LWJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjMzIzMjMyO1xuICBib3JkZXItY29sb3I6ICNmZmMxMDc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XG59IiwiQGltcG9ydCAnLi4vc3R5bGVzJztcclxuXHJcbjpob3N0IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gIEBpbmNsdWRlIHRoZW1lc0hvc3QoKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWUoYmFja2dyb3VuZENvbG9yKTsgIFxyXG4gICAgICB9XHJcbn1cclxuXHJcbiN0b3AtbmF2e1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4zKSAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBAaW5jbHVkZSB0aGVtZXMoKSB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdGhlbWUoYm9yZGVyQ29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiB0aGVtZSh0ZXh0Q29sb3IpOyAgXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1lKGJhY2tncm91bmRDb2xvcik7ICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRvcC1uYXYtYnV0dG9uIHtcclxuICAgICAgQGluY2x1ZGUgdGhlbWVzKCkge1xyXG4gICAgICAgIGNvbG9yOiB0aGVtZShidXR0b25UZXh0Q29sb3IpOyAgXHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0aGVtZShidXR0b25UZXh0Q29sb3IpOyBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZShidXR0b25CR0NvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50b3AtbmF2LWJ1dHRvbjpob3ZlcntcclxuICAgICAgICBAaW5jbHVkZSB0aGVtZXMoKSB7XHJcbiAgICAgICAgICBjb2xvcjogdGhlbWUoYnV0dG9uVGV4dEhvdmVyQ29sb3IpOyAgXHJcbiAgICAgICAgICBib3JkZXItY29sb3I6IHRoZW1lKGJ1dHRvbkJHSG92ZXJDb2xvcik7IFxyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWUoYnV0dG9uQkdIb3ZlckNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_playground_picker_playground_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/playground-picker/playground-picker.component */ "./src/app/components/playground-picker/playground-picker.component.ts");
/* harmony import */ var _classes_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @classes/theme */ "./src/app/classes/theme.ts");
/* harmony import */ var _app_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/modal/modal.component */ "./src/app/components/modal/modal.component.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(resolver) {
        this.resolver = resolver;
        this.Theme = _classes_theme__WEBPACK_IMPORTED_MODULE_3__["Theme"];
        _classes_theme__WEBPACK_IMPORTED_MODULE_3__["Theme"].init();
    }
    // Open Playground Picker As A Modal Window
    AppComponent.prototype.openPlaygroundPicker = function () {
        var factory = this.resolver.resolveComponentFactory(_app_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"]);
        var componentRef = this.modalContainer.createComponent(factory);
        componentRef.instance.modalComponent = _components_playground_picker_playground_picker_component__WEBPACK_IMPORTED_MODULE_2__["PlaygroundPickerComponent"];
        componentRef.instance.componentRef = componentRef;
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: false }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
    ], AppComponent.prototype, "modalContainer", void 0);
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_playground_picker_playground_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/playground-picker/playground-picker.component */ "./src/app/components/playground-picker/playground-picker.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/components/modal/modal.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule(library) {
        // Add an icon to the library for convenient access in other components
        library.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faSun"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faMoon"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faChevronCircleLeft"]);
    }
    AppModule.ctorParameters = function () { return [
        { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconLibrary"] }
    ]; };
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_playground_picker_playground_picker_component__WEBPACK_IMPORTED_MODULE_6__["PlaygroundPickerComponent"],
                _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]
            ],
            entryComponents: [
                _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"],
                _components_playground_picker_playground_picker_component__WEBPACK_IMPORTED_MODULE_6__["PlaygroundPickerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconLibrary"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/theme.ts":
/*!**********************************!*\
  !*** ./src/app/classes/theme.ts ***!
  \**********************************/
/*! exports provided: Theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Theme", function() { return Theme; });
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ "./src/app/classes/vector.ts");

var Theme = /** @class */ (function () {
    function Theme() {
    }
    // Initialize Theme Variables
    Theme.init = function () {
        Theme.darkBGColor = new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"]({ x: 50, y: 50, z: 50 });
        Theme.lightBGColor = new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"]({ x: 255, y: 255, z: 255 });
        Theme.darkTextColor = new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"]({ x: 255, y: 255, z: 255 });
        Theme.lightTextColor = new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"]({ x: 50, y: 50, z: 50 });
        Theme.bgColor = Theme.darkBGColor;
        Theme.textColor = Theme.darkTextColor;
        document.body.classList.add('theme-dark');
        Theme.darkThemeToggled = true;
    };
    // Toggle Theme Between light & Dark
    Theme.toggle = function () {
        document.body.classList.toggle('theme-dark');
        document.body.classList.toggle('theme-light');
        Theme.bgColor = Theme.bgColor === Theme.darkBGColor ? Theme.lightBGColor : Theme.darkBGColor;
        Theme.textColor = Theme.textColor === Theme.darkTextColor ? Theme.lightTextColor : Theme.darkTextColor;
    };
    return Theme;
}());



/***/ }),

/***/ "./src/app/classes/vector.ts":
/*!***********************************!*\
  !*** ./src/app/classes/vector.ts ***!
  \***********************************/
/*! exports provided: Vector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return Vector; });
var Vector = /** @class */ (function () {
    function Vector(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.x, x = _c === void 0 ? 0 : _c, _d = _b.y, y = _d === void 0 ? 0 : _d, _e = _b.z, z = _e === void 0 ? 0 : _e;
        this.x = x;
        this.y = y;
        this.z = z;
    }
    return Vector;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* @include themes() { color: theme(buttonTextColor); } */\n/* background-color: color(darkgrey) */\n/* Defines A Map of Maps */\n/* webkit moz ms */\n/* Duplicate Styling For Each Theme */\n/* Duplicate Styling For Each Theme On :Host*/\n/* @include breakpoints(tablet-wide) { padding-top: 4rem;} */\n/* @include prefixes((  transition: all 0.3s ease, transform: translateX(90px)  )) */\n/* @include themes() { color: theme(buttonTextColor); } */\n/* background-color: color(darkgrey) */\n/* Defines A Map of Maps */\n/* webkit moz ms */\n/* Duplicate Styling For Each Theme */\n/* Duplicate Styling For Each Theme On :Host*/\n/* @include breakpoints(tablet-wide) { padding-top: 4rem;} */\n/* @include prefixes((  transition: all 0.3s ease, transform: translateX(90px)  )) */\nhtml, body {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n}\n:host-context(.theme-light) .theme-text {\n  color: #323232;\n}\n:host-context(.theme-dark) .theme-text {\n  color: #ffffff;\n}\n:host-context(.theme-light) .theme-button {\n  color: #ffffff;\n  border-color: #323232;\n  background-color: #323232;\n}\n:host-context(.theme-dark) .theme-button {\n  color: #323232;\n  border-color: #ffc107;\n  background-color: #ffc107;\n}\n:host-context(.theme-light) .theme-button:hover {\n  color: #ffffff;\n  border-color: #252525;\n  background-color: #252525;\n}\n:host-context(.theme-dark) .theme-button:hover {\n  color: #323232;\n  border-color: #edb100;\n  background-color: #edb100;\n}\n:host-context(.theme-light) .theme-button-outline {\n  color: #323232;\n  border-color: #323232;\n  background-color: transparent;\n}\n:host-context(.theme-dark) .theme-button-outline {\n  color: #ffc107;\n  border-color: #ffc107;\n  background-color: transparent;\n}\n:host-context(.theme-light) .theme-button-outline:hover {\n  color: #ffffff;\n  border-color: #323232;\n  background-color: #323232;\n}\n:host-context(.theme-dark) .theme-button-outline:hover {\n  color: #323232;\n  border-color: #ffc107;\n  background-color: #ffc107;\n}\n.toggle {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 24px;\n  margin: 0 30px;\n}\n.toggle input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.toggle input:checked ~ span:before {\n  transform: translateX(26px);\n}\n.toggle span {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #323232;\n  border-radius: 24px;\n  transition: 0.4s;\n}\n:host-context(.theme-light) .toggle span {\n  background-color: #323232;\n}\n:host-context(.theme-dark) .toggle span {\n  background-color: #ffc107;\n}\n.toggle span:before {\n  position: absolute;\n  content: \"\";\n  height: 16px;\n  width: 16px;\n  left: 4px;\n  bottom: 4px;\n  border-radius: 50%;\n  transition: 0.4s;\n}\n:host-context(.theme-light) .toggle span:before {\n  background-color: #ffffff;\n}\n:host-context(.theme-dark) .toggle span:before {\n  background-color: #323232;\n}\n.toggle .toggle-icon {\n  vertical-align: top;\n  height: 24px;\n  position: absolute;\n  width: 16px;\n  font-size: 16px;\n}\n.toggle .toggle-icon:before {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.toggle .toggle-icon-left {\n  color: #ffc107;\n  left: -50%;\n}\n.toggle .toggle-icon-right {\n  right: -50%;\n}\n.clickable {\n  cursor: pointer;\n}\n:host-context(.theme-light) .text-theme {\n  color: #323232 !important;\n}\n:host-context(.theme-dark) .text-theme {\n  color: #ffffff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL1M6XFxEZXZlbG9wbWVudFxcV2ViXFxBbmd1bGFyIFBsYXlncm91bmQvc3JjXFxhc3NldHNcXHN0eWxlc1xcZnVuY3Rpb25zLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9TOlxcRGV2ZWxvcG1lbnRcXFdlYlxcQW5ndWxhciBQbGF5Z3JvdW5kL3NyY1xcYXNzZXRzXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvUzpcXERldmVsb3BtZW50XFxXZWJcXEFuZ3VsYXIgUGxheWdyb3VuZC9zcmNcXGFzc2V0c1xcc3R5bGVzXFxtaXhpbnMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL1M6XFxEZXZlbG9wbWVudFxcV2ViXFxBbmd1bGFyIFBsYXlncm91bmQvc3JjXFxhc3NldHNcXHN0eWxlc1xcZ2xvYmFsLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvUzpcXERldmVsb3BtZW50XFxXZWJcXEFuZ3VsYXIgUGxheWdyb3VuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5REFBQTtBQUtBLHNDQUFBO0FDQ0EsMEJBQUE7QUFpQ0Esa0JBQUE7QUN2Q0EscUNBQUE7QUFVQSw2Q0FBQTtBQVVBLDREQUFBO0FBYUEsb0ZBQUE7QUZqQ0EseURBQUE7QUFLQSxzQ0FBQTtBQ0NBLDBCQUFBO0FBaUNBLGtCQUFBO0FDdkNBLHFDQUFBO0FBVUEsNkNBQUE7QUFVQSw0REFBQTtBQWFBLG9GQUFBO0FDN0JBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDYUo7QUZsQkk7RUNVSSxjQUFBO0FDWVI7QUZ0Qkk7RUNVSSxjQUFBO0FDZVI7QUZ6Qkk7RUNnQkksY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNhUjtBRi9CSTtFQ2dCSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ2tCUjtBRnBDSTtFQ3VCTSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ2dCVjtBRnpDSTtFQ3VCTSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ3FCVjtBRjlDSTtFQ2dDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQ2tCUjtBRnBESTtFQ2dDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQ3VCUjtBRnpESTtFQ3VDTSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ3FCVjtBRjlESTtFQ3VDTSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQzBCVjtBRHJCQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUN3Qko7QUR0Qkk7RUFDRSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUN3Qk47QURyQkk7RUR2QkEsMkJDd0JvQjtBQ3lCeEI7QURuQkk7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFRHRDRixnQkN1Q29CO0FDdUJ4QjtBRmxHSTtFQytFSSx5QkFBQTtBQ3NCUjtBRnJHSTtFQytFSSx5QkFBQTtBQ3lCUjtBRHJCTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFRHRESixnQkN1RHNCO0FDeUIxQjtBRnBISTtFQytGTSx5QkFBQTtBQ3dCVjtBRnZISTtFQytGTSx5QkFBQTtBQzJCVjtBRHRCSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUN3Qk47QUR0Qk07RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUR6RUosMkJDMEVzQjtBQzBCMUI7QURwQkk7RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQ3NCTjtBRG5CSTtFQUNFLFdBQUE7QUNxQk47QURqQkU7RUFDRSxlQUFBO0FDb0JKO0FGbkpJO0VHQUEseUJBQUE7QUR1Sko7QUZ2Skk7RUdBQSx5QkFBQTtBRDBKSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGluY2x1ZGUgdGhlbWVzKCkgeyBjb2xvcjogdGhlbWUoYnV0dG9uVGV4dENvbG9yKTsgfSAqL1xyXG5AZnVuY3Rpb24gdGhlbWUoJGtleSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY3VycmVudC10aGVtZSwgJGtleSk7XHJcbn1cclxuXHJcbi8qIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKGRhcmtncmV5KSAqL1xyXG5AZnVuY3Rpb24gY29sb3IoJGtleSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAka2V5KTtcclxufVxyXG4iLCIkY29sb3JzOiAoXHJcbiAgZGFya2dyZXk6ICMzMjMyMzIsXHJcbiAgeWVsbG93OiAjZmZjMTA3LFxyXG4gIHdoaXRlOiAjZmZmZmZmXHJcbik7XHJcblxyXG4vKiBEZWZpbmVzIEEgTWFwIG9mIE1hcHMgKi9cclxuJHRoZW1lczogKFxyXG4gIGxpZ2h0OiAoXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yKHdoaXRlKSxcclxuICAgIHRleHRDb2xvcjogY29sb3IoZGFya2dyZXkpLFxyXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9yKGRhcmtncmV5KSxcclxuICAgIGJ1dHRvblRleHRDb2xvcjogY29sb3IoZGFya2dyZXkpLFxyXG4gICAgYnV0dG9uVGV4dEhvdmVyQ29sb3I6IGNvbG9yKHdoaXRlKSxcclxuICAgIGJ1dHRvbkJHQ29sb3I6IHRyYW5zcGFyZW50LFxyXG4gICAgYnV0dG9uQkdIb3ZlckNvbG9yOiBjb2xvcihkYXJrZ3JleSlcclxuICApLFxyXG4gIGRhcms6IChcclxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IoZGFya2dyZXkpLFxyXG4gICAgdGV4dENvbG9yOiBjb2xvcih3aGl0ZSksXHJcbiAgICBib3JkZXJDb2xvcjogY29sb3IoeWVsbG93KSxcclxuICAgIGJ1dHRvblRleHRDb2xvcjogY29sb3IoeWVsbG93KSxcclxuICAgIGJ1dHRvblRleHRIb3ZlckNvbG9yOiBjb2xvcihkYXJrZ3JleSksXHJcbiAgICBidXR0b25CR0NvbG9yOiB0cmFuc3BhcmVudCxcclxuICAgIGJ1dHRvbkJHSG92ZXJDb2xvcjogY29sb3IoeWVsbG93KVxyXG4gICksXHJcbik7XHJcblxyXG4kYnJlYWtwb2ludHM6IChcclxuICAgIHBob25lOiAgICAgICAgNDAwcHgsXHJcbiAgICBwaG9uZS13aWRlOiAgIDQ4MHB4LFxyXG4gICAgcGhhYmxldDogICAgICA1NjBweCxcclxuICAgIHRhYmxldC1zbWFsbDogNjQwcHgsXHJcbiAgICB0YWJsZXQ6ICAgICAgIDc2OHB4LFxyXG4gICAgdGFibGV0LXdpZGU6ICAxMDI0cHgsXHJcbiAgICBkZXNrdG9wOiAgICAgIDEyNDhweCxcclxuICAgIGRlc2t0b3Atd2lkZTogMTQ0MHB4XHJcbik7XHJcblxyXG4vKiB3ZWJraXQgbW96IG1zICovXHJcbiRwcmVmaXhlczogKFxyXG4gIHRyYW5zZm9ybTogKHdlYmtpdCBtcyksXHJcbiAgdHJhbnNpdGlvbjogKHdlYmtpdCBvKVxyXG4pO1xyXG4iLCIvKiBEdXBsaWNhdGUgU3R5bGluZyBGb3IgRWFjaCBUaGVtZSAqL1xyXG5AbWl4aW4gdGhlbWVzKCl7XHJcbiAgQGVhY2ggJHRoZW1lLCAkbWFwIGluICR0aGVtZXMge1xyXG4gICAgJGN1cnJlbnQtdGhlbWU6ICRtYXAgIWdsb2JhbDtcclxuICAgIDpob3N0LWNvbnRleHQoLnRoZW1lLSN7JHRoZW1lfSkgJiB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogRHVwbGljYXRlIFN0eWxpbmcgRm9yIEVhY2ggVGhlbWUgT24gOkhvc3QqL1xyXG5AbWl4aW4gdGhlbWVzSG9zdCgpe1xyXG4gIEBlYWNoICR0aGVtZSwgJG1hcCBpbiAkdGhlbWVzIHtcclxuICAgICRjdXJyZW50LXRoZW1lOiAkbWFwICFnbG9iYWw7XHJcbiAgICAudGhlbWUtI3skdGhlbWV9ICYge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIEBpbmNsdWRlIGJyZWFrcG9pbnRzKHRhYmxldC13aWRlKSB7IHBhZGRpbmctdG9wOiA0cmVtO30gKi9cclxuQG1peGluIGJyZWFrcG9pbnRzKCR3aWR0aCwgJHR5cGU6IG1pbikge1xyXG4gICAgQGlmIG1hcF9oYXNfa2V5KCRicmVha3BvaW50cywgJHdpZHRoKSB7XHJcbiAgICAgICAgJHdpZHRoOiBtYXBfZ2V0KCRicmVha3BvaW50cywgJHdpZHRoKTtcclxuICAgICAgICBAaWYgJHR5cGUgPT0gbWF4IHtcclxuICAgICAgICAgICAgJHdpZHRoOiAkd2lkdGggLSAxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKCN7JHR5cGV9LXdpZHRoOiAkd2lkdGgpIHtcclxuICAgICAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKiBAaW5jbHVkZSBwcmVmaXhlcygoICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLCB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOTBweCkgICkpICovXHJcbkBtaXhpbiBwcmVmaXhlcygkZGVjbGFyYXRpb25zKSB7XHJcbiAgQGVhY2ggJHByb3BlcnR5LCAkdmFsdWUgaW4gJGRlY2xhcmF0aW9ucyB7XHJcbiAgICAkcHJvcGVydHktcHJlZml4ZXMgOiBtYXAtZ2V0KCRwcmVmaXhlcywgJHByb3BlcnR5KTtcclxuICAgIEBlYWNoICRwcmVmaXggaW4gJHByb3BlcnR5LXByZWZpeGVzIHtcclxuICAgICAgI3snLScgKyAkcHJlZml4ICsgJy0nICsgJHByb3BlcnR5fTogJHZhbHVlO1xyXG4gICAgfVxyXG4gICAgI3skcHJvcGVydHl9OiAkdmFsdWU7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgJy4vZnVuY3Rpb25zLnNjc3MnO1xyXG5AaW1wb3J0ICcuL3ZhcmlhYmxlcy5zY3NzJztcclxuQGltcG9ydCAnLi9taXhpbnMuc2Nzcyc7XHJcblxyXG5odG1sLCBib2R5e1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgcGFkZGluZzowO1xyXG4gICAgbWFyZ2luOjA7XHJcbn1cclxuXHJcbi50aGVtZS10ZXh0IHtcclxuICAgIEBpbmNsdWRlIHRoZW1lcygpIHtcclxuICAgICAgICBjb2xvcjogdGhlbWUodGV4dENvbG9yKTsgIFxyXG4gICAgICB9XHJcbn1cclxuXHJcbi50aGVtZS1idXR0b24ge1xyXG4gICAgQGluY2x1ZGUgdGhlbWVzKCkge1xyXG4gICAgICAgIGNvbG9yOiB0aGVtZShidXR0b25UZXh0SG92ZXJDb2xvcik7ICBcclxuICAgICAgICBib3JkZXItY29sb3I6IHRoZW1lKGJ1dHRvbkJHSG92ZXJDb2xvcik7IFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1lKGJ1dHRvbkJHSG92ZXJDb2xvcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgQGluY2x1ZGUgdGhlbWVzKCkge1xyXG4gICAgICAgICAgY29sb3I6IHRoZW1lKGJ1dHRvblRleHRIb3ZlckNvbG9yKTsgIFxyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiBkYXJrZW4odGhlbWUoYnV0dG9uQkdIb3ZlckNvbG9yKSwgNSUpOyBcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbih0aGVtZShidXR0b25CR0hvdmVyQ29sb3IpLCA1JSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udGhlbWUtYnV0dG9uLW91dGxpbmUge1xyXG4gICAgQGluY2x1ZGUgdGhlbWVzKCkge1xyXG4gICAgICAgIGNvbG9yOiB0aGVtZShidXR0b25UZXh0Q29sb3IpOyAgXHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0aGVtZShidXR0b25UZXh0Q29sb3IpOyBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZShidXR0b25CR0NvbG9yKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICBAaW5jbHVkZSB0aGVtZXMoKSB7XHJcbiAgICAgICAgICBjb2xvcjogdGhlbWUoYnV0dG9uVGV4dEhvdmVyQ29sb3IpOyAgXHJcbiAgICAgICAgICBib3JkZXItY29sb3I6IHRoZW1lKGJ1dHRvbkJHSG92ZXJDb2xvcik7IFxyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWUoYnV0dG9uQkdIb3ZlckNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi50b2dnbGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBtYXJnaW46IDAgMzBweDtcclxuICAgIFxyXG4gICAgaW5wdXQgeyBcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIGhlaWdodDogMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW5wdXQ6Y2hlY2tlZCB+IHNwYW46YmVmb3JlIHtcclxuICAgICAgQGluY2x1ZGUgcHJlZml4ZXMoKFxyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KVxyXG4gICAgICApKTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNwYW4ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcihkYXJrZ3JleSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICAgIEBpbmNsdWRlIHByZWZpeGVzKChcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzXHJcbiAgICAgICkpO1xyXG4gICAgICBAaW5jbHVkZSB0aGVtZXMoKSB7ICBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZShib3JkZXJDb2xvcik7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAmOmJlZm9yZXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgIGJvdHRvbTogNHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBAaW5jbHVkZSBwcmVmaXhlcygoXHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzXHJcbiAgICAgICAgKSk7XHJcbiAgICAgICAgQGluY2x1ZGUgdGhlbWVzKCkgeyAgXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZShiYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudG9nZ2xlLWljb257XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTZweDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBcclxuICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIEBpbmNsdWRlIHByZWZpeGVzKChcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKVxyXG4gICAgICAgICkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50b2dnbGUtaWNvbi1sZWZ0e1xyXG4gICAgICBjb2xvcjogY29sb3IoeWVsbG93KTtcclxuICAgICAgbGVmdDogLTUwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRvZ2dsZS1pY29uLXJpZ2h0e1xyXG4gICAgICByaWdodDogLTUwJTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmNsaWNrYWJsZSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iLCIvKiBAaW5jbHVkZSB0aGVtZXMoKSB7IGNvbG9yOiB0aGVtZShidXR0b25UZXh0Q29sb3IpOyB9ICovXG4vKiBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcihkYXJrZ3JleSkgKi9cbi8qIERlZmluZXMgQSBNYXAgb2YgTWFwcyAqL1xuLyogd2Via2l0IG1veiBtcyAqL1xuLyogRHVwbGljYXRlIFN0eWxpbmcgRm9yIEVhY2ggVGhlbWUgKi9cbi8qIER1cGxpY2F0ZSBTdHlsaW5nIEZvciBFYWNoIFRoZW1lIE9uIDpIb3N0Ki9cbi8qIEBpbmNsdWRlIGJyZWFrcG9pbnRzKHRhYmxldC13aWRlKSB7IHBhZGRpbmctdG9wOiA0cmVtO30gKi9cbi8qIEBpbmNsdWRlIHByZWZpeGVzKCggIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UsIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg5MHB4KSAgKSkgKi9cbi8qIEBpbmNsdWRlIHRoZW1lcygpIHsgY29sb3I6IHRoZW1lKGJ1dHRvblRleHRDb2xvcik7IH0gKi9cbi8qIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKGRhcmtncmV5KSAqL1xuLyogRGVmaW5lcyBBIE1hcCBvZiBNYXBzICovXG4vKiB3ZWJraXQgbW96IG1zICovXG4vKiBEdXBsaWNhdGUgU3R5bGluZyBGb3IgRWFjaCBUaGVtZSAqL1xuLyogRHVwbGljYXRlIFN0eWxpbmcgRm9yIEVhY2ggVGhlbWUgT24gOkhvc3QqL1xuLyogQGluY2x1ZGUgYnJlYWtwb2ludHModGFibGV0LXdpZGUpIHsgcGFkZGluZy10b3A6IDRyZW07fSAqL1xuLyogQGluY2x1ZGUgcHJlZml4ZXMoKCAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSwgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDkwcHgpICApKSAqL1xuaHRtbCwgYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuOmhvc3QtY29udGV4dCgudGhlbWUtbGlnaHQpIC50aGVtZS10ZXh0IHtcbiAgY29sb3I6ICMzMjMyMzI7XG59XG46aG9zdC1jb250ZXh0KC50aGVtZS1kYXJrKSAudGhlbWUtdGV4dCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG46aG9zdC1jb250ZXh0KC50aGVtZS1saWdodCkgLnRoZW1lLWJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICMzMjMyMzI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjMyMzI7XG59XG46aG9zdC1jb250ZXh0KC50aGVtZS1kYXJrKSAudGhlbWUtYnV0dG9uIHtcbiAgY29sb3I6ICMzMjMyMzI7XG4gIGJvcmRlci1jb2xvcjogI2ZmYzEwNztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcbn1cbjpob3N0LWNvbnRleHQoLnRoZW1lLWxpZ2h0KSAudGhlbWUtYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogIzI1MjUyNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjUyNTtcbn1cbjpob3N0LWNvbnRleHQoLnRoZW1lLWRhcmspIC50aGVtZS1idXR0b246aG92ZXIge1xuICBjb2xvcjogIzMyMzIzMjtcbiAgYm9yZGVyLWNvbG9yOiAjZWRiMTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRiMTAwO1xufVxuXG46aG9zdC1jb250ZXh0KC50aGVtZS1saWdodCkgLnRoZW1lLWJ1dHRvbi1vdXRsaW5lIHtcbiAgY29sb3I6ICMzMjMyMzI7XG4gIGJvcmRlci1jb2xvcjogIzMyMzIzMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG46aG9zdC1jb250ZXh0KC50aGVtZS1kYXJrKSAudGhlbWUtYnV0dG9uLW91dGxpbmUge1xuICBjb2xvcjogI2ZmYzEwNztcbiAgYm9yZGVyLWNvbG9yOiAjZmZjMTA3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbjpob3N0LWNvbnRleHQoLnRoZW1lLWxpZ2h0KSAudGhlbWUtYnV0dG9uLW91dGxpbmU6aG92ZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjMzIzMjMyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyO1xufVxuOmhvc3QtY29udGV4dCgudGhlbWUtZGFyaykgLnRoZW1lLWJ1dHRvbi1vdXRsaW5lOmhvdmVyIHtcbiAgY29sb3I6ICMzMjMyMzI7XG4gIGJvcmRlci1jb2xvcjogI2ZmYzEwNztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcbn1cblxuLnRvZ2dsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW46IDAgMzBweDtcbn1cbi50b2dnbGUgaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuLnRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gc3BhbjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xufVxuLnRvZ2dsZSBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMjtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICAtby10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuOmhvc3QtY29udGV4dCgudGhlbWUtbGlnaHQpIC50b2dnbGUgc3BhbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjMyMzI7XG59XG46aG9zdC1jb250ZXh0KC50aGVtZS1kYXJrKSAudG9nZ2xlIHNwYW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xufVxuLnRvZ2dsZSBzcGFuOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgbGVmdDogNHB4O1xuICBib3R0b206IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG46aG9zdC1jb250ZXh0KC50aGVtZS1saWdodCkgLnRvZ2dsZSBzcGFuOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG46aG9zdC1jb250ZXh0KC50aGVtZS1kYXJrKSAudG9nZ2xlIHNwYW46YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMjtcbn1cbi50b2dnbGUgLnRvZ2dsZS1pY29uIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNnB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4udG9nZ2xlIC50b2dnbGUtaWNvbjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLnRvZ2dsZSAudG9nZ2xlLWljb24tbGVmdCB7XG4gIGNvbG9yOiAjZmZjMTA3O1xuICBsZWZ0OiAtNTAlO1xufVxuLnRvZ2dsZSAudG9nZ2xlLWljb24tcmlnaHQge1xuICByaWdodDogLTUwJTtcbn1cblxuLmNsaWNrYWJsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuOmhvc3QtY29udGV4dCgudGhlbWUtbGlnaHQpIC50ZXh0LXRoZW1lIHtcbiAgY29sb3I6ICMzMjMyMzIgIWltcG9ydGFudDtcbn1cbjpob3N0LWNvbnRleHQoLnRoZW1lLWRhcmspIC50ZXh0LXRoZW1lIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zcmMvc3R5bGVzJztcclxuXHJcbi50ZXh0LXRoZW1le1xyXG4gIEBpbmNsdWRlIHRoZW1lcygpIHtcclxuICAgIGNvbG9yOiB0aGVtZSh0ZXh0Q29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/modal/modal.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var ModalComponent = /** @class */ (function () {
    function ModalComponent(resolver, elem) {
        this.resolver = resolver;
        this.elem = elem;
    }
    ModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        var factory = this.resolver.resolveComponentFactory(this.modalComponent);
        this.modalTemplate.createComponent(factory);
        $(this.modalContainer.nativeElement).modal();
        $(this.modalContainer.nativeElement).on('hidden.bs.modal', function (e) {
            console.log(_this.componentRef);
            _this.componentRef.destroy();
        });
    };
    ModalComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('modalComponent'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ModalComponent.prototype, "modalComponent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('componentRef'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ModalComponent.prototype, "componentRef", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalTemplate', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
    ], ModalComponent.prototype, "modalTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContainer', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ModalComponent.prototype, "modalContainer", void 0);
    ModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal.component.scss */ "./src/app/components/modal/modal.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/components/playground-picker/playground-picker.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/playground-picker/playground-picker.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* @include themes() { color: theme(buttonTextColor); } */\n/* background-color: color(darkgrey) */\n/* Defines A Map of Maps */\n/* webkit moz ms */\n/* Duplicate Styling For Each Theme */\n/* Duplicate Styling For Each Theme On :Host*/\n/* @include breakpoints(tablet-wide) { padding-top: 4rem;} */\n/* @include prefixes((  transition: all 0.3s ease, transform: translateX(90px)  )) */\n/* @include themes() { color: theme(buttonTextColor); } */\n/* background-color: color(darkgrey) */\n/* Defines A Map of Maps */\n/* webkit moz ms */\n/* Duplicate Styling For Each Theme */\n/* Duplicate Styling For Each Theme On :Host*/\n/* @include breakpoints(tablet-wide) { padding-top: 4rem;} */\n/* @include prefixes((  transition: all 0.3s ease, transform: translateX(90px)  )) */\nhtml, body {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n}\n:host-context(.theme-light) .theme-text {\n  color: #323232;\n}\n:host-context(.theme-dark) .theme-text {\n  color: #ffffff;\n}\n:host-context(.theme-light) .theme-button {\n  color: #ffffff;\n  border-color: #323232;\n  background-color: #323232;\n}\n:host-context(.theme-dark) .theme-button {\n  color: #323232;\n  border-color: #ffc107;\n  background-color: #ffc107;\n}\n:host-context(.theme-light) .theme-button:hover {\n  color: #ffffff;\n  border-color: #252525;\n  background-color: #252525;\n}\n:host-context(.theme-dark) .theme-button:hover {\n  color: #323232;\n  border-color: #edb100;\n  background-color: #edb100;\n}\n:host-context(.theme-light) .theme-button-outline {\n  color: #323232;\n  border-color: #323232;\n  background-color: transparent;\n}\n:host-context(.theme-dark) .theme-button-outline {\n  color: #ffc107;\n  border-color: #ffc107;\n  background-color: transparent;\n}\n:host-context(.theme-light) .theme-button-outline:hover {\n  color: #ffffff;\n  border-color: #323232;\n  background-color: #323232;\n}\n:host-context(.theme-dark) .theme-button-outline:hover {\n  color: #323232;\n  border-color: #ffc107;\n  background-color: #ffc107;\n}\n.toggle {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 24px;\n  margin: 0 30px;\n}\n.toggle input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.toggle input:checked ~ span:before {\n  transform: translateX(26px);\n}\n.toggle span {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #323232;\n  border-radius: 24px;\n  transition: 0.4s;\n}\n:host-context(.theme-light) .toggle span {\n  background-color: #323232;\n}\n:host-context(.theme-dark) .toggle span {\n  background-color: #ffc107;\n}\n.toggle span:before {\n  position: absolute;\n  content: \"\";\n  height: 16px;\n  width: 16px;\n  left: 4px;\n  bottom: 4px;\n  border-radius: 50%;\n  transition: 0.4s;\n}\n:host-context(.theme-light) .toggle span:before {\n  background-color: #ffffff;\n}\n:host-context(.theme-dark) .toggle span:before {\n  background-color: #323232;\n}\n.toggle .toggle-icon {\n  vertical-align: top;\n  height: 24px;\n  position: absolute;\n  width: 16px;\n  font-size: 16px;\n}\n.toggle .toggle-icon:before {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.toggle .toggle-icon-left {\n  color: #ffc107;\n  left: -50%;\n}\n.toggle .toggle-icon-right {\n  right: -50%;\n}\n.clickable {\n  cursor: pointer;\n}\n:host-context(.theme-light) .modal-content {\n  background-color: #ffffff;\n}\n:host-context(.theme-dark) .modal-content {\n  background-color: #323232;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wbGF5Z3JvdW5kLXBpY2tlci9TOlxcRGV2ZWxvcG1lbnRcXFdlYlxcQW5ndWxhciBQbGF5Z3JvdW5kL3NyY1xcYXNzZXRzXFxzdHlsZXNcXGZ1bmN0aW9ucy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BsYXlncm91bmQtcGlja2VyL1M6XFxEZXZlbG9wbWVudFxcV2ViXFxBbmd1bGFyIFBsYXlncm91bmQvc3JjXFxhc3NldHNcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGxheWdyb3VuZC1waWNrZXIvUzpcXERldmVsb3BtZW50XFxXZWJcXEFuZ3VsYXIgUGxheWdyb3VuZC9zcmNcXGFzc2V0c1xcc3R5bGVzXFxtaXhpbnMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wbGF5Z3JvdW5kLXBpY2tlci9TOlxcRGV2ZWxvcG1lbnRcXFdlYlxcQW5ndWxhciBQbGF5Z3JvdW5kL3NyY1xcYXNzZXRzXFxzdHlsZXNcXGdsb2JhbC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BsYXlncm91bmQtcGlja2VyL3BsYXlncm91bmQtcGlja2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BsYXlncm91bmQtcGlja2VyL1M6XFxEZXZlbG9wbWVudFxcV2ViXFxBbmd1bGFyIFBsYXlncm91bmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBsYXlncm91bmQtcGlja2VyXFxwbGF5Z3JvdW5kLXBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5REFBQTtBQUtBLHNDQUFBO0FDQ0EsMEJBQUE7QUFpQ0Esa0JBQUE7QUN2Q0EscUNBQUE7QUFVQSw2Q0FBQTtBQVVBLDREQUFBO0FBYUEsb0ZBQUE7QUZqQ0EseURBQUE7QUFLQSxzQ0FBQTtBQ0NBLDBCQUFBO0FBaUNBLGtCQUFBO0FDdkNBLHFDQUFBO0FBVUEsNkNBQUE7QUFVQSw0REFBQTtBQWFBLG9GQUFBO0FDN0JBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDYUo7QUZsQkk7RUNVSSxjQUFBO0FDWVI7QUZ0Qkk7RUNVSSxjQUFBO0FDZVI7QUZ6Qkk7RUNnQkksY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNhUjtBRi9CSTtFQ2dCSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ2tCUjtBRnBDSTtFQ3VCTSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ2dCVjtBRnpDSTtFQ3VCTSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ3FCVjtBRjlDSTtFQ2dDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQ2tCUjtBRnBESTtFQ2dDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQ3VCUjtBRnpESTtFQ3VDTSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ3FCVjtBRjlESTtFQ3VDTSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQzBCVjtBRHJCQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUN3Qko7QUR0Qkk7RUFDRSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUN3Qk47QURyQkk7RUR2QkEsMkJDd0JvQjtBQ3lCeEI7QURuQkk7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFRHRDRixnQkN1Q29CO0FDdUJ4QjtBRmxHSTtFQytFSSx5QkFBQTtBQ3NCUjtBRnJHSTtFQytFSSx5QkFBQTtBQ3lCUjtBRHJCTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFRHRESixnQkN1RHNCO0FDeUIxQjtBRnBISTtFQytGTSx5QkFBQTtBQ3dCVjtBRnZISTtFQytGTSx5QkFBQTtBQzJCVjtBRHRCSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUN3Qk47QUR0Qk07RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUR6RUosMkJDMEVzQjtBQzBCMUI7QURwQkk7RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQ3NCTjtBRG5CSTtFQUNFLFdBQUE7QUNxQk47QURqQkU7RUFDRSxlQUFBO0FDb0JKO0FGbkpJO0VHQ0kseUJBQUE7QURzSlI7QUZ2Skk7RUdDSSx5QkFBQTtBRHlKUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGxheWdyb3VuZC1waWNrZXIvcGxheWdyb3VuZC1waWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAaW5jbHVkZSB0aGVtZXMoKSB7IGNvbG9yOiB0aGVtZShidXR0b25UZXh0Q29sb3IpOyB9ICovXHJcbkBmdW5jdGlvbiB0aGVtZSgka2V5KSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRjdXJyZW50LXRoZW1lLCAka2V5KTtcclxufVxyXG5cclxuLyogYmFja2dyb3VuZC1jb2xvcjogY29sb3IoZGFya2dyZXkpICovXHJcbkBmdW5jdGlvbiBjb2xvcigka2V5KSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMsICRrZXkpO1xyXG59XHJcbiIsIiRjb2xvcnM6IChcclxuICBkYXJrZ3JleTogIzMyMzIzMixcclxuICB5ZWxsb3c6ICNmZmMxMDcsXHJcbiAgd2hpdGU6ICNmZmZmZmZcclxuKTtcclxuXHJcbi8qIERlZmluZXMgQSBNYXAgb2YgTWFwcyAqL1xyXG4kdGhlbWVzOiAoXHJcbiAgbGlnaHQ6IChcclxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3Iod2hpdGUpLFxyXG4gICAgdGV4dENvbG9yOiBjb2xvcihkYXJrZ3JleSksXHJcbiAgICBib3JkZXJDb2xvcjogY29sb3IoZGFya2dyZXkpLFxyXG4gICAgYnV0dG9uVGV4dENvbG9yOiBjb2xvcihkYXJrZ3JleSksXHJcbiAgICBidXR0b25UZXh0SG92ZXJDb2xvcjogY29sb3Iod2hpdGUpLFxyXG4gICAgYnV0dG9uQkdDb2xvcjogdHJhbnNwYXJlbnQsXHJcbiAgICBidXR0b25CR0hvdmVyQ29sb3I6IGNvbG9yKGRhcmtncmV5KVxyXG4gICksXHJcbiAgZGFyazogKFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcihkYXJrZ3JleSksXHJcbiAgICB0ZXh0Q29sb3I6IGNvbG9yKHdoaXRlKSxcclxuICAgIGJvcmRlckNvbG9yOiBjb2xvcih5ZWxsb3cpLFxyXG4gICAgYnV0dG9uVGV4dENvbG9yOiBjb2xvcih5ZWxsb3cpLFxyXG4gICAgYnV0dG9uVGV4dEhvdmVyQ29sb3I6IGNvbG9yKGRhcmtncmV5KSxcclxuICAgIGJ1dHRvbkJHQ29sb3I6IHRyYW5zcGFyZW50LFxyXG4gICAgYnV0dG9uQkdIb3ZlckNvbG9yOiBjb2xvcih5ZWxsb3cpXHJcbiAgKSxcclxuKTtcclxuXHJcbiRicmVha3BvaW50czogKFxyXG4gICAgcGhvbmU6ICAgICAgICA0MDBweCxcclxuICAgIHBob25lLXdpZGU6ICAgNDgwcHgsXHJcbiAgICBwaGFibGV0OiAgICAgIDU2MHB4LFxyXG4gICAgdGFibGV0LXNtYWxsOiA2NDBweCxcclxuICAgIHRhYmxldDogICAgICAgNzY4cHgsXHJcbiAgICB0YWJsZXQtd2lkZTogIDEwMjRweCxcclxuICAgIGRlc2t0b3A6ICAgICAgMTI0OHB4LFxyXG4gICAgZGVza3RvcC13aWRlOiAxNDQwcHhcclxuKTtcclxuXHJcbi8qIHdlYmtpdCBtb3ogbXMgKi9cclxuJHByZWZpeGVzOiAoXHJcbiAgdHJhbnNmb3JtOiAod2Via2l0IG1zKSxcclxuICB0cmFuc2l0aW9uOiAod2Via2l0IG8pXHJcbik7XHJcbiIsIi8qIER1cGxpY2F0ZSBTdHlsaW5nIEZvciBFYWNoIFRoZW1lICovXHJcbkBtaXhpbiB0aGVtZXMoKXtcclxuICBAZWFjaCAkdGhlbWUsICRtYXAgaW4gJHRoZW1lcyB7XHJcbiAgICAkY3VycmVudC10aGVtZTogJG1hcCAhZ2xvYmFsO1xyXG4gICAgOmhvc3QtY29udGV4dCgudGhlbWUtI3skdGhlbWV9KSAmIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBEdXBsaWNhdGUgU3R5bGluZyBGb3IgRWFjaCBUaGVtZSBPbiA6SG9zdCovXHJcbkBtaXhpbiB0aGVtZXNIb3N0KCl7XHJcbiAgQGVhY2ggJHRoZW1lLCAkbWFwIGluICR0aGVtZXMge1xyXG4gICAgJGN1cnJlbnQtdGhlbWU6ICRtYXAgIWdsb2JhbDtcclxuICAgIC50aGVtZS0jeyR0aGVtZX0gJiB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogQGluY2x1ZGUgYnJlYWtwb2ludHModGFibGV0LXdpZGUpIHsgcGFkZGluZy10b3A6IDRyZW07fSAqL1xyXG5AbWl4aW4gYnJlYWtwb2ludHMoJHdpZHRoLCAkdHlwZTogbWluKSB7XHJcbiAgICBAaWYgbWFwX2hhc19rZXkoJGJyZWFrcG9pbnRzLCAkd2lkdGgpIHtcclxuICAgICAgICAkd2lkdGg6IG1hcF9nZXQoJGJyZWFrcG9pbnRzLCAkd2lkdGgpO1xyXG4gICAgICAgIEBpZiAkdHlwZSA9PSBtYXgge1xyXG4gICAgICAgICAgICAkd2lkdGg6ICR3aWR0aCAtIDFweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoI3skdHlwZX0td2lkdGg6ICR3aWR0aCkge1xyXG4gICAgICAgICAgICBAY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIEBpbmNsdWRlIHByZWZpeGVzKCggIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UsIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg5MHB4KSAgKSkgKi9cclxuQG1peGluIHByZWZpeGVzKCRkZWNsYXJhdGlvbnMpIHtcclxuICBAZWFjaCAkcHJvcGVydHksICR2YWx1ZSBpbiAkZGVjbGFyYXRpb25zIHtcclxuICAgICRwcm9wZXJ0eS1wcmVmaXhlcyA6IG1hcC1nZXQoJHByZWZpeGVzLCAkcHJvcGVydHkpO1xyXG4gICAgQGVhY2ggJHByZWZpeCBpbiAkcHJvcGVydHktcHJlZml4ZXMge1xyXG4gICAgICAjeyctJyArICRwcmVmaXggKyAnLScgKyAkcHJvcGVydHl9OiAkdmFsdWU7XHJcbiAgICB9XHJcbiAgICAjeyRwcm9wZXJ0eX06ICR2YWx1ZTtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCAnLi9mdW5jdGlvbnMuc2Nzcyc7XHJcbkBpbXBvcnQgJy4vdmFyaWFibGVzLnNjc3MnO1xyXG5AaW1wb3J0ICcuL21peGlucy5zY3NzJztcclxuXHJcbmh0bWwsIGJvZHl7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBtYXJnaW46MDtcclxufVxyXG5cclxuLnRoZW1lLXRleHQge1xyXG4gICAgQGluY2x1ZGUgdGhlbWVzKCkge1xyXG4gICAgICAgIGNvbG9yOiB0aGVtZSh0ZXh0Q29sb3IpOyAgXHJcbiAgICAgIH1cclxufVxyXG5cclxuLnRoZW1lLWJ1dHRvbiB7XHJcbiAgICBAaW5jbHVkZSB0aGVtZXMoKSB7XHJcbiAgICAgICAgY29sb3I6IHRoZW1lKGJ1dHRvblRleHRIb3ZlckNvbG9yKTsgIFxyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdGhlbWUoYnV0dG9uQkdIb3ZlckNvbG9yKTsgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWUoYnV0dG9uQkdIb3ZlckNvbG9yKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICBAaW5jbHVkZSB0aGVtZXMoKSB7XHJcbiAgICAgICAgICBjb2xvcjogdGhlbWUoYnV0dG9uVGV4dEhvdmVyQ29sb3IpOyAgXHJcbiAgICAgICAgICBib3JkZXItY29sb3I6IGRhcmtlbih0aGVtZShidXR0b25CR0hvdmVyQ29sb3IpLCA1JSk7IFxyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKHRoZW1lKGJ1dHRvbkJHSG92ZXJDb2xvciksIDUlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi50aGVtZS1idXR0b24tb3V0bGluZSB7XHJcbiAgICBAaW5jbHVkZSB0aGVtZXMoKSB7XHJcbiAgICAgICAgY29sb3I6IHRoZW1lKGJ1dHRvblRleHRDb2xvcik7ICBcclxuICAgICAgICBib3JkZXItY29sb3I6IHRoZW1lKGJ1dHRvblRleHRDb2xvcik7IFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1lKGJ1dHRvbkJHQ29sb3IpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVye1xyXG4gICAgICAgIEBpbmNsdWRlIHRoZW1lcygpIHtcclxuICAgICAgICAgIGNvbG9yOiB0aGVtZShidXR0b25UZXh0SG92ZXJDb2xvcik7ICBcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogdGhlbWUoYnV0dG9uQkdIb3ZlckNvbG9yKTsgXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZShidXR0b25CR0hvdmVyQ29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnRvZ2dsZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIG1hcmdpbjogMCAzMHB4O1xyXG4gICAgXHJcbiAgICBpbnB1dCB7IFxyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB3aWR0aDogMDtcclxuICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpbnB1dDpjaGVja2VkIH4gc3BhbjpiZWZvcmUge1xyXG4gICAgICBAaW5jbHVkZSBwcmVmaXhlcygoXHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpXHJcbiAgICAgICkpO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3BhbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKGRhcmtncmV5KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgICAgQGluY2x1ZGUgcHJlZml4ZXMoKFxyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHNcclxuICAgICAgKSk7XHJcbiAgICAgIEBpbmNsdWRlIHRoZW1lcygpIHsgIFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1lKGJvcmRlckNvbG9yKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICBsZWZ0OiA0cHg7XHJcbiAgICAgICAgYm90dG9tOiA0cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIEBpbmNsdWRlIHByZWZpeGVzKChcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuNHNcclxuICAgICAgICApKTtcclxuICAgICAgICBAaW5jbHVkZSB0aGVtZXMoKSB7ICBcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1lKGJhY2tncm91bmRDb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50b2dnbGUtaWNvbntcclxuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIFxyXG4gICAgICAmOmJlZm9yZXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgQGluY2x1ZGUgcHJlZml4ZXMoKFxyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpXHJcbiAgICAgICAgKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRvZ2dsZS1pY29uLWxlZnR7XHJcbiAgICAgIGNvbG9yOiBjb2xvcih5ZWxsb3cpO1xyXG4gICAgICBsZWZ0OiAtNTAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudG9nZ2xlLWljb24tcmlnaHR7XHJcbiAgICAgIHJpZ2h0OiAtNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY2xpY2thYmxlIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSIsIi8qIEBpbmNsdWRlIHRoZW1lcygpIHsgY29sb3I6IHRoZW1lKGJ1dHRvblRleHRDb2xvcik7IH0gKi9cbi8qIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKGRhcmtncmV5KSAqL1xuLyogRGVmaW5lcyBBIE1hcCBvZiBNYXBzICovXG4vKiB3ZWJraXQgbW96IG1zICovXG4vKiBEdXBsaWNhdGUgU3R5bGluZyBGb3IgRWFjaCBUaGVtZSAqL1xuLyogRHVwbGljYXRlIFN0eWxpbmcgRm9yIEVhY2ggVGhlbWUgT24gOkhvc3QqL1xuLyogQGluY2x1ZGUgYnJlYWtwb2ludHModGFibGV0LXdpZGUpIHsgcGFkZGluZy10b3A6IDRyZW07fSAqL1xuLyogQGluY2x1ZGUgcHJlZml4ZXMoKCAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSwgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDkwcHgpICApKSAqL1xuLyogQGluY2x1ZGUgdGhlbWVzKCkgeyBjb2xvcjogdGhlbWUoYnV0dG9uVGV4dENvbG9yKTsgfSAqL1xuLyogYmFja2dyb3VuZC1jb2xvcjogY29sb3IoZGFya2dyZXkpICovXG4vKiBEZWZpbmVzIEEgTWFwIG9mIE1hcHMgKi9cbi8qIHdlYmtpdCBtb3ogbXMgKi9cbi8qIER1cGxpY2F0ZSBTdHlsaW5nIEZvciBFYWNoIFRoZW1lICovXG4vKiBEdXBsaWNhdGUgU3R5bGluZyBGb3IgRWFjaCBUaGVtZSBPbiA6SG9zdCovXG4vKiBAaW5jbHVkZSBicmVha3BvaW50cyh0YWJsZXQtd2lkZSkgeyBwYWRkaW5nLXRvcDogNHJlbTt9ICovXG4vKiBAaW5jbHVkZSBwcmVmaXhlcygoICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLCB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOTBweCkgICkpICovXG5odG1sLCBib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG46aG9zdC1jb250ZXh0KC50aGVtZS1saWdodCkgLnRoZW1lLXRleHQge1xuICBjb2xvcjogIzMyMzIzMjtcbn1cbjpob3N0LWNvbnRleHQoLnRoZW1lLWRhcmspIC50aGVtZS10ZXh0IHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbjpob3N0LWNvbnRleHQoLnRoZW1lLWxpZ2h0KSAudGhlbWUtYnV0dG9uIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogIzMyMzIzMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMjtcbn1cbjpob3N0LWNvbnRleHQoLnRoZW1lLWRhcmspIC50aGVtZS1idXR0b24ge1xuICBjb2xvcjogIzMyMzIzMjtcbiAgYm9yZGVyLWNvbG9yOiAjZmZjMTA3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xufVxuOmhvc3QtY29udGV4dCgudGhlbWUtbGlnaHQpIC50aGVtZS1idXR0b246aG92ZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjMjUyNTI1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNTI1O1xufVxuOmhvc3QtY29udGV4dCgudGhlbWUtZGFyaykgLnRoZW1lLWJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjMzIzMjMyO1xuICBib3JkZXItY29sb3I6ICNlZGIxMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGIxMDA7XG59XG5cbjpob3N0LWNvbnRleHQoLnRoZW1lLWxpZ2h0KSAudGhlbWUtYnV0dG9uLW91dGxpbmUge1xuICBjb2xvcjogIzMyMzIzMjtcbiAgYm9yZGVyLWNvbG9yOiAjMzIzMjMyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbjpob3N0LWNvbnRleHQoLnRoZW1lLWRhcmspIC50aGVtZS1idXR0b24tb3V0bGluZSB7XG4gIGNvbG9yOiAjZmZjMTA3O1xuICBib3JkZXItY29sb3I6ICNmZmMxMDc7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuOmhvc3QtY29udGV4dCgudGhlbWUtbGlnaHQpIC50aGVtZS1idXR0b24tb3V0bGluZTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICMzMjMyMzI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjMyMzI7XG59XG46aG9zdC1jb250ZXh0KC50aGVtZS1kYXJrKSAudGhlbWUtYnV0dG9uLW91dGxpbmU6aG92ZXIge1xuICBjb2xvcjogIzMyMzIzMjtcbiAgYm9yZGVyLWNvbG9yOiAjZmZjMTA3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xufVxuXG4udG9nZ2xlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbjogMCAzMHB4O1xufVxuLnRvZ2dsZSBpbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG4udG9nZ2xlIGlucHV0OmNoZWNrZWQgfiBzcGFuOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG59XG4udG9nZ2xlIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG46aG9zdC1jb250ZXh0KC50aGVtZS1saWdodCkgLnRvZ2dsZSBzcGFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMjtcbn1cbjpob3N0LWNvbnRleHQoLnRoZW1lLWRhcmspIC50b2dnbGUgc3BhbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XG59XG4udG9nZ2xlIHNwYW46YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBsZWZ0OiA0cHg7XG4gIGJvdHRvbTogNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgLW8tdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cbjpob3N0LWNvbnRleHQoLnRoZW1lLWxpZ2h0KSAudG9nZ2xlIHNwYW46YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbjpob3N0LWNvbnRleHQoLnRoZW1lLWRhcmspIC50b2dnbGUgc3BhbjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyO1xufVxuLnRvZ2dsZSAudG9nZ2xlLWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi50b2dnbGUgLnRvZ2dsZS1pY29uOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG4udG9nZ2xlIC50b2dnbGUtaWNvbi1sZWZ0IHtcbiAgY29sb3I6ICNmZmMxMDc7XG4gIGxlZnQ6IC01MCU7XG59XG4udG9nZ2xlIC50b2dnbGUtaWNvbi1yaWdodCB7XG4gIHJpZ2h0OiAtNTAlO1xufVxuXG4uY2xpY2thYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG46aG9zdC1jb250ZXh0KC50aGVtZS1saWdodCkgLm1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuOmhvc3QtY29udGV4dCgudGhlbWUtZGFyaykgLm1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyO1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMnO1xyXG5cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICAgIEBpbmNsdWRlIHRoZW1lcygpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZShiYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/playground-picker/playground-picker.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/playground-picker/playground-picker.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PlaygroundPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaygroundPickerComponent", function() { return PlaygroundPickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @classes/theme */ "./src/app/classes/theme.ts");



var PlaygroundPickerComponent = /** @class */ (function () {
    function PlaygroundPickerComponent() {
        this.Theme = _classes_theme__WEBPACK_IMPORTED_MODULE_2__["Theme"];
    }
    PlaygroundPickerComponent.prototype.ngOnInit = function () {
    };
    PlaygroundPickerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-playground-picker',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./playground-picker.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/playground-picker/playground-picker.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./playground-picker.component.scss */ "./src/app/components/playground-picker/playground-picker.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], PlaygroundPickerComponent);
    return PlaygroundPickerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! S:\Development\Web\Angular Playground\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map