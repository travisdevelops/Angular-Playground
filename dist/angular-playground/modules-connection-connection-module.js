(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-connection-connection-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/connection/components/particle-connection/particle-connection.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/connection/components/particle-connection/particle-connection.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"px-3 py-2\">\r\n  <p class=\"mt-0 mb-3\">Try Moving The Mouse Around The Dots!</p>\r\n  <label for=\"connection-length\" class=\"pr-4\">Connection Length:</label>\r\n  <input type=\"number\" id=\"connection-length\" name=\"connectionLength\" [(ngModel)]=\"particleConnectionLength\" />\r\n  <label for=\"particle-count\" class=\"pl-4\">Particle Count:</label>\r\n  <input type=\"number\" id=\"particle-count\" name=\"particleCount\" [(ngModel)]=\"particleCount\" />\r\n</div>\r\n<div id=\"canvas-container\"></div>\r\n");

/***/ }),

/***/ "./src/app/modules/connection/classes/particle.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/connection/classes/particle.ts ***!
  \********************************************************/
/*! exports provided: Particle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Particle", function() { return Particle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _classes_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @classes/vector */ "./src/app/classes/vector.ts");
/* harmony import */ var _classes_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @classes/theme */ "./src/app/classes/theme.ts");
/* harmony import */ var _classes_canvas_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @classes/canvas-object */ "./src/app/classes/canvas-object.ts");
/* harmony import */ var _classes_sketch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @classes/sketch */ "./src/app/classes/sketch.ts");





var Particle = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Particle, _super);
    function Particle(_a) {
        var _b = (_a === void 0 ? {} : _a).size, size = _b === void 0 ? 15 : _b;
        var _this = this;
        var sizeVector = new _classes_vector__WEBPACK_IMPORTED_MODULE_1__["Vector"]({ x: size, y: size });
        var minSpeed = new _classes_vector__WEBPACK_IMPORTED_MODULE_1__["Vector"]({ x: 0.5, y: 0.5 });
        var maxSpeed = new _classes_vector__WEBPACK_IMPORTED_MODULE_1__["Vector"]({ x: 2, y: 2 });
        _this = _super.call(this, { size: sizeVector, minSpeed: minSpeed, maxSpeed: maxSpeed }) || this;
        _this.respawn();
        return _this;
    }
    // Display Particle
    Particle.prototype.display = function () {
        this.color = new _classes_vector__WEBPACK_IMPORTED_MODULE_1__["Vector"]({ x: _classes_theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].textColor.x, y: _classes_theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].textColor.y, z: _classes_theme__WEBPACK_IMPORTED_MODULE_2__["Theme"].textColor.z });
        _classes_sketch__WEBPACK_IMPORTED_MODULE_4__["Sketch"].p5.noStroke();
        _classes_sketch__WEBPACK_IMPORTED_MODULE_4__["Sketch"].p5.fill(this.color.x, this.color.y, this.color.z, this.opacity);
        _classes_sketch__WEBPACK_IMPORTED_MODULE_4__["Sketch"].p5.ellipse(this.position.x, this.position.y, this.size.x);
    };
    // Override Move
    Particle.prototype.move = function () {
        if (this.isOutsideCanvas(this.getPotentialPosition())) {
            this.randomizeSpeed();
        }
        else {
            _super.prototype.move.call(this);
        }
    };
    // Respawn Particle At A Random Point With A Random Speed
    Particle.prototype.respawn = function () {
        this.randomizeSpeed();
        this.randomizePosition();
    };
    // Connect To Another Particle if Distance Is Within Connection Length
    // Doesnt Include Size of Shape
    Particle.prototype.connectToParticle = function (particlePosition, connectionLength) {
        var xDif = _classes_sketch__WEBPACK_IMPORTED_MODULE_4__["Sketch"].p5.abs(particlePosition.x - this.position.x);
        var yDif = _classes_sketch__WEBPACK_IMPORTED_MODULE_4__["Sketch"].p5.abs(particlePosition.y - this.position.y);
        if (xDif <= connectionLength && yDif <= connectionLength) {
            _classes_sketch__WEBPACK_IMPORTED_MODULE_4__["Sketch"].p5.stroke(this.color.x, this.color.y, this.color.z, this.opacity);
            _classes_sketch__WEBPACK_IMPORTED_MODULE_4__["Sketch"].p5.line(particlePosition.x, particlePosition.y, this.position.x, this.position.y);
        }
    };
    return Particle;
}(_classes_canvas_object__WEBPACK_IMPORTED_MODULE_3__["CanvasObject"]));



/***/ }),

/***/ "./src/app/modules/connection/components/particle-connection/particle-connection.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/connection/components/particle-connection/particle-connection.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* @include themes() { color: theme(buttonTextColor); } */\n/* background-color: color(darkgrey) */\n/* Defines A Map of Maps */\n/* webkit moz ms */\n/* Duplicate Styling For Each Theme */\n/* Duplicate Styling For Each Theme On :Host*/\n/* @include breakpoints(tablet-wide) { padding-top: 4rem;} */\n/* @include prefixes((  transition: all 0.3s ease, transform: translateX(90px)  )) */\n/* @include themes() { color: theme(buttonTextColor); } */\n/* background-color: color(darkgrey) */\n/* Defines A Map of Maps */\n/* webkit moz ms */\n/* Duplicate Styling For Each Theme */\n/* Duplicate Styling For Each Theme On :Host*/\n/* @include breakpoints(tablet-wide) { padding-top: 4rem;} */\n/* @include prefixes((  transition: all 0.3s ease, transform: translateX(90px)  )) */\nhtml, body {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n}\n:host-context(.theme-light) .theme-text {\n  color: #323232;\n}\n:host-context(.theme-dark) .theme-text {\n  color: #ffffff;\n}\n:host-context(.theme-light) .theme-button {\n  color: #ffffff;\n  border-color: #323232;\n  background-color: #323232;\n}\n:host-context(.theme-dark) .theme-button {\n  color: #323232;\n  border-color: #ffc107;\n  background-color: #ffc107;\n}\n:host-context(.theme-light) .theme-button:hover {\n  color: #ffffff;\n  border-color: #252525;\n  background-color: #252525;\n}\n:host-context(.theme-dark) .theme-button:hover {\n  color: #323232;\n  border-color: #edb100;\n  background-color: #edb100;\n}\n:host-context(.theme-light) .theme-button-outline {\n  color: #323232;\n  border-color: #323232;\n  background-color: transparent;\n}\n:host-context(.theme-dark) .theme-button-outline {\n  color: #ffc107;\n  border-color: #ffc107;\n  background-color: transparent;\n}\n:host-context(.theme-light) .theme-button-outline:hover {\n  color: #ffffff;\n  border-color: #323232;\n  background-color: #323232;\n}\n:host-context(.theme-dark) .theme-button-outline:hover {\n  color: #323232;\n  border-color: #ffc107;\n  background-color: #ffc107;\n}\n.toggle {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 24px;\n  margin: 0 30px;\n}\n.toggle input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.toggle input:checked ~ span:before {\n  transform: translateX(26px);\n}\n.toggle span {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #323232;\n  border-radius: 24px;\n  transition: 0.4s;\n}\n:host-context(.theme-light) .toggle span {\n  background-color: #323232;\n}\n:host-context(.theme-dark) .toggle span {\n  background-color: #ffc107;\n}\n.toggle span:before {\n  position: absolute;\n  content: \"\";\n  height: 16px;\n  width: 16px;\n  left: 4px;\n  bottom: 4px;\n  border-radius: 50%;\n  transition: 0.4s;\n}\n:host-context(.theme-light) .toggle span:before {\n  background-color: #ffffff;\n}\n:host-context(.theme-dark) .toggle span:before {\n  background-color: #323232;\n}\n.toggle .toggle-icon {\n  vertical-align: top;\n  height: 24px;\n  position: absolute;\n  width: 16px;\n  font-size: 16px;\n}\n.toggle .toggle-icon:before {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.toggle .toggle-icon-left {\n  color: #ffc107;\n  left: -50%;\n}\n.toggle .toggle-icon-right {\n  right: -50%;\n}\n.clickable {\n  cursor: pointer;\n}\n:host {\n  display: block;\n}\n.theme-light :host {\n  color: #323232;\n}\n.theme-dark :host {\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb25uZWN0aW9uL2NvbXBvbmVudHMvcGFydGljbGUtY29ubmVjdGlvbi9TOlxcRGV2ZWxvcG1lbnRcXFdlYlxcQW5ndWxhciBQbGF5Z3JvdW5kL3NyY1xcYXNzZXRzXFxzdHlsZXNcXGZ1bmN0aW9ucy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2Nvbm5lY3Rpb24vY29tcG9uZW50cy9wYXJ0aWNsZS1jb25uZWN0aW9uL1M6XFxEZXZlbG9wbWVudFxcV2ViXFxBbmd1bGFyIFBsYXlncm91bmQvc3JjXFxhc3NldHNcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvY29ubmVjdGlvbi9jb21wb25lbnRzL3BhcnRpY2xlLWNvbm5lY3Rpb24vUzpcXERldmVsb3BtZW50XFxXZWJcXEFuZ3VsYXIgUGxheWdyb3VuZC9zcmNcXGFzc2V0c1xcc3R5bGVzXFxtaXhpbnMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jb25uZWN0aW9uL2NvbXBvbmVudHMvcGFydGljbGUtY29ubmVjdGlvbi9TOlxcRGV2ZWxvcG1lbnRcXFdlYlxcQW5ndWxhciBQbGF5Z3JvdW5kL3NyY1xcYXNzZXRzXFxzdHlsZXNcXGdsb2JhbC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2Nvbm5lY3Rpb24vY29tcG9uZW50cy9wYXJ0aWNsZS1jb25uZWN0aW9uL3BhcnRpY2xlLWNvbm5lY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvY29ubmVjdGlvbi9jb21wb25lbnRzL3BhcnRpY2xlLWNvbm5lY3Rpb24vUzpcXERldmVsb3BtZW50XFxXZWJcXEFuZ3VsYXIgUGxheWdyb3VuZC9zcmNcXGFwcFxcbW9kdWxlc1xcY29ubmVjdGlvblxcY29tcG9uZW50c1xccGFydGljbGUtY29ubmVjdGlvblxccGFydGljbGUtY29ubmVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5REFBQTtBQUtBLHNDQUFBO0FDQ0EsMEJBQUE7QUFpQ0Esa0JBQUE7QUN2Q0EscUNBQUE7QUFVQSw2Q0FBQTtBQVVBLDREQUFBO0FBYUEsb0ZBQUE7QUZqQ0EseURBQUE7QUFLQSxzQ0FBQTtBQ0NBLDBCQUFBO0FBaUNBLGtCQUFBO0FDdkNBLHFDQUFBO0FBVUEsNkNBQUE7QUFVQSw0REFBQTtBQWFBLG9GQUFBO0FDN0JBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDYUo7QUZsQkk7RUNVSSxjQUFBO0FDWVI7QUZ0Qkk7RUNVSSxjQUFBO0FDZVI7QUZ6Qkk7RUNnQkksY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNhUjtBRi9CSTtFQ2dCSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ2tCUjtBRnBDSTtFQ3VCTSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ2dCVjtBRnpDSTtFQ3VCTSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ3FCVjtBRjlDSTtFQ2dDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQ2tCUjtBRnBESTtFQ2dDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQ3VCUjtBRnpESTtFQ3VDTSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ3FCVjtBRjlESTtFQ3VDTSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQzBCVjtBRHJCQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUN3Qko7QUR0Qkk7RUFDRSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUN3Qk47QURyQkk7RUR2QkEsMkJDd0JvQjtBQ3lCeEI7QURuQkk7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFRHRDRixnQkN1Q29CO0FDdUJ4QjtBRmxHSTtFQytFSSx5QkFBQTtBQ3NCUjtBRnJHSTtFQytFSSx5QkFBQTtBQ3lCUjtBRHJCTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFRHRESixnQkN1RHNCO0FDeUIxQjtBRnBISTtFQytGTSx5QkFBQTtBQ3dCVjtBRnZISTtFQytGTSx5QkFBQTtBQzJCVjtBRHRCSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUN3Qk47QUR0Qk07RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUR6RUosMkJDMEVzQjtBQzBCMUI7QURwQkk7RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQ3NCTjtBRG5CSTtFQUNFLFdBQUE7QUNxQk47QURqQkU7RUFDRSxlQUFBO0FDb0JKO0FDckpBO0VBQ0ksY0FBQTtBRHdKSjtBRjdJSTtFR1RFLGNBQUE7QUR5Sk47QUZoSkk7RUdURSxjQUFBO0FENEpOIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb25uZWN0aW9uL2NvbXBvbmVudHMvcGFydGljbGUtY29ubmVjdGlvbi9wYXJ0aWNsZS1jb25uZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGluY2x1ZGUgdGhlbWVzKCkgeyBjb2xvcjogdGhlbWUoYnV0dG9uVGV4dENvbG9yKTsgfSAqL1xyXG5AZnVuY3Rpb24gdGhlbWUoJGtleSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY3VycmVudC10aGVtZSwgJGtleSk7XHJcbn1cclxuXHJcbi8qIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKGRhcmtncmV5KSAqL1xyXG5AZnVuY3Rpb24gY29sb3IoJGtleSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAka2V5KTtcclxufVxyXG4iLCIkY29sb3JzOiAoXHJcbiAgZGFya2dyZXk6ICMzMjMyMzIsXHJcbiAgeWVsbG93OiAjZmZjMTA3LFxyXG4gIHdoaXRlOiAjZmZmZmZmXHJcbik7XHJcblxyXG4vKiBEZWZpbmVzIEEgTWFwIG9mIE1hcHMgKi9cclxuJHRoZW1lczogKFxyXG4gIGxpZ2h0OiAoXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yKHdoaXRlKSxcclxuICAgIHRleHRDb2xvcjogY29sb3IoZGFya2dyZXkpLFxyXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9yKGRhcmtncmV5KSxcclxuICAgIGJ1dHRvblRleHRDb2xvcjogY29sb3IoZGFya2dyZXkpLFxyXG4gICAgYnV0dG9uVGV4dEhvdmVyQ29sb3I6IGNvbG9yKHdoaXRlKSxcclxuICAgIGJ1dHRvbkJHQ29sb3I6IHRyYW5zcGFyZW50LFxyXG4gICAgYnV0dG9uQkdIb3ZlckNvbG9yOiBjb2xvcihkYXJrZ3JleSlcclxuICApLFxyXG4gIGRhcms6IChcclxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IoZGFya2dyZXkpLFxyXG4gICAgdGV4dENvbG9yOiBjb2xvcih3aGl0ZSksXHJcbiAgICBib3JkZXJDb2xvcjogY29sb3IoeWVsbG93KSxcclxuICAgIGJ1dHRvblRleHRDb2xvcjogY29sb3IoeWVsbG93KSxcclxuICAgIGJ1dHRvblRleHRIb3ZlckNvbG9yOiBjb2xvcihkYXJrZ3JleSksXHJcbiAgICBidXR0b25CR0NvbG9yOiB0cmFuc3BhcmVudCxcclxuICAgIGJ1dHRvbkJHSG92ZXJDb2xvcjogY29sb3IoeWVsbG93KVxyXG4gICksXHJcbik7XHJcblxyXG4kYnJlYWtwb2ludHM6IChcclxuICAgIHBob25lOiAgICAgICAgNDAwcHgsXHJcbiAgICBwaG9uZS13aWRlOiAgIDQ4MHB4LFxyXG4gICAgcGhhYmxldDogICAgICA1NjBweCxcclxuICAgIHRhYmxldC1zbWFsbDogNjQwcHgsXHJcbiAgICB0YWJsZXQ6ICAgICAgIDc2OHB4LFxyXG4gICAgdGFibGV0LXdpZGU6ICAxMDI0cHgsXHJcbiAgICBkZXNrdG9wOiAgICAgIDEyNDhweCxcclxuICAgIGRlc2t0b3Atd2lkZTogMTQ0MHB4XHJcbik7XHJcblxyXG4vKiB3ZWJraXQgbW96IG1zICovXHJcbiRwcmVmaXhlczogKFxyXG4gIHRyYW5zZm9ybTogKHdlYmtpdCBtcyksXHJcbiAgdHJhbnNpdGlvbjogKHdlYmtpdCBvKVxyXG4pO1xyXG4iLCIvKiBEdXBsaWNhdGUgU3R5bGluZyBGb3IgRWFjaCBUaGVtZSAqL1xyXG5AbWl4aW4gdGhlbWVzKCl7XHJcbiAgQGVhY2ggJHRoZW1lLCAkbWFwIGluICR0aGVtZXMge1xyXG4gICAgJGN1cnJlbnQtdGhlbWU6ICRtYXAgIWdsb2JhbDtcclxuICAgIDpob3N0LWNvbnRleHQoLnRoZW1lLSN7JHRoZW1lfSkgJiB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogRHVwbGljYXRlIFN0eWxpbmcgRm9yIEVhY2ggVGhlbWUgT24gOkhvc3QqL1xyXG5AbWl4aW4gdGhlbWVzSG9zdCgpe1xyXG4gIEBlYWNoICR0aGVtZSwgJG1hcCBpbiAkdGhlbWVzIHtcclxuICAgICRjdXJyZW50LXRoZW1lOiAkbWFwICFnbG9iYWw7XHJcbiAgICAudGhlbWUtI3skdGhlbWV9ICYge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIEBpbmNsdWRlIGJyZWFrcG9pbnRzKHRhYmxldC13aWRlKSB7IHBhZGRpbmctdG9wOiA0cmVtO30gKi9cclxuQG1peGluIGJyZWFrcG9pbnRzKCR3aWR0aCwgJHR5cGU6IG1pbikge1xyXG4gICAgQGlmIG1hcF9oYXNfa2V5KCRicmVha3BvaW50cywgJHdpZHRoKSB7XHJcbiAgICAgICAgJHdpZHRoOiBtYXBfZ2V0KCRicmVha3BvaW50cywgJHdpZHRoKTtcclxuICAgICAgICBAaWYgJHR5cGUgPT0gbWF4IHtcclxuICAgICAgICAgICAgJHdpZHRoOiAkd2lkdGggLSAxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKCN7JHR5cGV9LXdpZHRoOiAkd2lkdGgpIHtcclxuICAgICAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKiBAaW5jbHVkZSBwcmVmaXhlcygoICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLCB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOTBweCkgICkpICovXHJcbkBtaXhpbiBwcmVmaXhlcygkZGVjbGFyYXRpb25zKSB7XHJcbiAgQGVhY2ggJHByb3BlcnR5LCAkdmFsdWUgaW4gJGRlY2xhcmF0aW9ucyB7XHJcbiAgICAkcHJvcGVydHktcHJlZml4ZXMgOiBtYXAtZ2V0KCRwcmVmaXhlcywgJHByb3BlcnR5KTtcclxuICAgIEBlYWNoICRwcmVmaXggaW4gJHByb3BlcnR5LXByZWZpeGVzIHtcclxuICAgICAgI3snLScgKyAkcHJlZml4ICsgJy0nICsgJHByb3BlcnR5fTogJHZhbHVlO1xyXG4gICAgfVxyXG4gICAgI3skcHJvcGVydHl9OiAkdmFsdWU7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgJy4vZnVuY3Rpb25zLnNjc3MnO1xyXG5AaW1wb3J0ICcuL3ZhcmlhYmxlcy5zY3NzJztcclxuQGltcG9ydCAnLi9taXhpbnMuc2Nzcyc7XHJcblxyXG5odG1sLCBib2R5e1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgcGFkZGluZzowO1xyXG4gICAgbWFyZ2luOjA7XHJcbn1cclxuXHJcbi50aGVtZS10ZXh0IHtcclxuICAgIEBpbmNsdWRlIHRoZW1lcygpIHtcclxuICAgICAgICBjb2xvcjogdGhlbWUodGV4dENvbG9yKTsgIFxyXG4gICAgICB9XHJcbn1cclxuXHJcbi50aGVtZS1idXR0b24ge1xyXG4gICAgQGluY2x1ZGUgdGhlbWVzKCkge1xyXG4gICAgICAgIGNvbG9yOiB0aGVtZShidXR0b25UZXh0SG92ZXJDb2xvcik7ICBcclxuICAgICAgICBib3JkZXItY29sb3I6IHRoZW1lKGJ1dHRvbkJHSG92ZXJDb2xvcik7IFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1lKGJ1dHRvbkJHSG92ZXJDb2xvcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgQGluY2x1ZGUgdGhlbWVzKCkge1xyXG4gICAgICAgICAgY29sb3I6IHRoZW1lKGJ1dHRvblRleHRIb3ZlckNvbG9yKTsgIFxyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiBkYXJrZW4odGhlbWUoYnV0dG9uQkdIb3ZlckNvbG9yKSwgNSUpOyBcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbih0aGVtZShidXR0b25CR0hvdmVyQ29sb3IpLCA1JSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udGhlbWUtYnV0dG9uLW91dGxpbmUge1xyXG4gICAgQGluY2x1ZGUgdGhlbWVzKCkge1xyXG4gICAgICAgIGNvbG9yOiB0aGVtZShidXR0b25UZXh0Q29sb3IpOyAgXHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0aGVtZShidXR0b25UZXh0Q29sb3IpOyBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZShidXR0b25CR0NvbG9yKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICBAaW5jbHVkZSB0aGVtZXMoKSB7XHJcbiAgICAgICAgICBjb2xvcjogdGhlbWUoYnV0dG9uVGV4dEhvdmVyQ29sb3IpOyAgXHJcbiAgICAgICAgICBib3JkZXItY29sb3I6IHRoZW1lKGJ1dHRvbkJHSG92ZXJDb2xvcik7IFxyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWUoYnV0dG9uQkdIb3ZlckNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi50b2dnbGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBtYXJnaW46IDAgMzBweDtcclxuICAgIFxyXG4gICAgaW5wdXQgeyBcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIGhlaWdodDogMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW5wdXQ6Y2hlY2tlZCB+IHNwYW46YmVmb3JlIHtcclxuICAgICAgQGluY2x1ZGUgcHJlZml4ZXMoKFxyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KVxyXG4gICAgICApKTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNwYW4ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcihkYXJrZ3JleSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICAgIEBpbmNsdWRlIHByZWZpeGVzKChcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzXHJcbiAgICAgICkpO1xyXG4gICAgICBAaW5jbHVkZSB0aGVtZXMoKSB7ICBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZShib3JkZXJDb2xvcik7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAmOmJlZm9yZXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgIGJvdHRvbTogNHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBAaW5jbHVkZSBwcmVmaXhlcygoXHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzXHJcbiAgICAgICAgKSk7XHJcbiAgICAgICAgQGluY2x1ZGUgdGhlbWVzKCkgeyAgXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZShiYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudG9nZ2xlLWljb257XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTZweDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBcclxuICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIEBpbmNsdWRlIHByZWZpeGVzKChcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKVxyXG4gICAgICAgICkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50b2dnbGUtaWNvbi1sZWZ0e1xyXG4gICAgICBjb2xvcjogY29sb3IoeWVsbG93KTtcclxuICAgICAgbGVmdDogLTUwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRvZ2dsZS1pY29uLXJpZ2h0e1xyXG4gICAgICByaWdodDogLTUwJTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmNsaWNrYWJsZSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iLCIvKiBAaW5jbHVkZSB0aGVtZXMoKSB7IGNvbG9yOiB0aGVtZShidXR0b25UZXh0Q29sb3IpOyB9ICovXG4vKiBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcihkYXJrZ3JleSkgKi9cbi8qIERlZmluZXMgQSBNYXAgb2YgTWFwcyAqL1xuLyogd2Via2l0IG1veiBtcyAqL1xuLyogRHVwbGljYXRlIFN0eWxpbmcgRm9yIEVhY2ggVGhlbWUgKi9cbi8qIER1cGxpY2F0ZSBTdHlsaW5nIEZvciBFYWNoIFRoZW1lIE9uIDpIb3N0Ki9cbi8qIEBpbmNsdWRlIGJyZWFrcG9pbnRzKHRhYmxldC13aWRlKSB7IHBhZGRpbmctdG9wOiA0cmVtO30gKi9cbi8qIEBpbmNsdWRlIHByZWZpeGVzKCggIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UsIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg5MHB4KSAgKSkgKi9cbi8qIEBpbmNsdWRlIHRoZW1lcygpIHsgY29sb3I6IHRoZW1lKGJ1dHRvblRleHRDb2xvcik7IH0gKi9cbi8qIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKGRhcmtncmV5KSAqL1xuLyogRGVmaW5lcyBBIE1hcCBvZiBNYXBzICovXG4vKiB3ZWJraXQgbW96IG1zICovXG4vKiBEdXBsaWNhdGUgU3R5bGluZyBGb3IgRWFjaCBUaGVtZSAqL1xuLyogRHVwbGljYXRlIFN0eWxpbmcgRm9yIEVhY2ggVGhlbWUgT24gOkhvc3QqL1xuLyogQGluY2x1ZGUgYnJlYWtwb2ludHModGFibGV0LXdpZGUpIHsgcGFkZGluZy10b3A6IDRyZW07fSAqL1xuLyogQGluY2x1ZGUgcHJlZml4ZXMoKCAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSwgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDkwcHgpICApKSAqL1xuaHRtbCwgYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuOmhvc3QtY29udGV4dCgudGhlbWUtbGlnaHQpIC50aGVtZS10ZXh0IHtcbiAgY29sb3I6ICMzMjMyMzI7XG59XG46aG9zdC1jb250ZXh0KC50aGVtZS1kYXJrKSAudGhlbWUtdGV4dCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG46aG9zdC1jb250ZXh0KC50aGVtZS1saWdodCkgLnRoZW1lLWJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICMzMjMyMzI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjMyMzI7XG59XG46aG9zdC1jb250ZXh0KC50aGVtZS1kYXJrKSAudGhlbWUtYnV0dG9uIHtcbiAgY29sb3I6ICMzMjMyMzI7XG4gIGJvcmRlci1jb2xvcjogI2ZmYzEwNztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcbn1cbjpob3N0LWNvbnRleHQoLnRoZW1lLWxpZ2h0KSAudGhlbWUtYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogIzI1MjUyNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjUyNTtcbn1cbjpob3N0LWNvbnRleHQoLnRoZW1lLWRhcmspIC50aGVtZS1idXR0b246aG92ZXIge1xuICBjb2xvcjogIzMyMzIzMjtcbiAgYm9yZGVyLWNvbG9yOiAjZWRiMTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRiMTAwO1xufVxuXG46aG9zdC1jb250ZXh0KC50aGVtZS1saWdodCkgLnRoZW1lLWJ1dHRvbi1vdXRsaW5lIHtcbiAgY29sb3I6ICMzMjMyMzI7XG4gIGJvcmRlci1jb2xvcjogIzMyMzIzMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG46aG9zdC1jb250ZXh0KC50aGVtZS1kYXJrKSAudGhlbWUtYnV0dG9uLW91dGxpbmUge1xuICBjb2xvcjogI2ZmYzEwNztcbiAgYm9yZGVyLWNvbG9yOiAjZmZjMTA3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbjpob3N0LWNvbnRleHQoLnRoZW1lLWxpZ2h0KSAudGhlbWUtYnV0dG9uLW91dGxpbmU6aG92ZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjMzIzMjMyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyO1xufVxuOmhvc3QtY29udGV4dCgudGhlbWUtZGFyaykgLnRoZW1lLWJ1dHRvbi1vdXRsaW5lOmhvdmVyIHtcbiAgY29sb3I6ICMzMjMyMzI7XG4gIGJvcmRlci1jb2xvcjogI2ZmYzEwNztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcbn1cblxuLnRvZ2dsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW46IDAgMzBweDtcbn1cbi50b2dnbGUgaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuLnRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gc3BhbjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xufVxuLnRvZ2dsZSBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMjtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICAtby10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuOmhvc3QtY29udGV4dCgudGhlbWUtbGlnaHQpIC50b2dnbGUgc3BhbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjMyMzI7XG59XG46aG9zdC1jb250ZXh0KC50aGVtZS1kYXJrKSAudG9nZ2xlIHNwYW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xufVxuLnRvZ2dsZSBzcGFuOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgbGVmdDogNHB4O1xuICBib3R0b206IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG46aG9zdC1jb250ZXh0KC50aGVtZS1saWdodCkgLnRvZ2dsZSBzcGFuOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG46aG9zdC1jb250ZXh0KC50aGVtZS1kYXJrKSAudG9nZ2xlIHNwYW46YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMjtcbn1cbi50b2dnbGUgLnRvZ2dsZS1pY29uIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNnB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4udG9nZ2xlIC50b2dnbGUtaWNvbjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLnRvZ2dsZSAudG9nZ2xlLWljb24tbGVmdCB7XG4gIGNvbG9yOiAjZmZjMTA3O1xuICBsZWZ0OiAtNTAlO1xufVxuLnRvZ2dsZSAudG9nZ2xlLWljb24tcmlnaHQge1xuICByaWdodDogLTUwJTtcbn1cblxuLmNsaWNrYWJsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi50aGVtZS1saWdodCA6aG9zdCB7XG4gIGNvbG9yOiAjMzIzMjMyO1xufVxuLnRoZW1lLWRhcmsgOmhvc3Qge1xuICBjb2xvcjogI2ZmZmZmZjtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3R5bGVzJztcclxuXHJcbjpob3N0e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBAaW5jbHVkZSB0aGVtZXNIb3N0KCkge1xyXG4gICAgICBjb2xvcjogdGhlbWUodGV4dENvbG9yKTsgICBcclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/modules/connection/components/particle-connection/particle-connection.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/connection/components/particle-connection/particle-connection.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ParticleConnectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticleConnectionComponent", function() { return ParticleConnectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_particle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/particle */ "./src/app/modules/connection/classes/particle.ts");
/* harmony import */ var _classes_vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @classes/vector */ "./src/app/classes/vector.ts");
/* harmony import */ var _classes_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @classes/theme */ "./src/app/classes/theme.ts");
/* harmony import */ var _classes_sketch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @classes/sketch */ "./src/app/classes/sketch.ts");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! p5 */ "./node_modules/p5/lib/p5.js");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_6__);







var ParticleConnectionComponent = /** @class */ (function () {
    function ParticleConnectionComponent() {
        this.particles = [];
        this.particleCount = 100;
        this.particleConnectionLength = 50;
    }
    ParticleConnectionComponent.prototype.ngOnInit = function () {
        this.initP5Sketch();
    };
    ParticleConnectionComponent.prototype.ngOnDestroy = function () {
        _classes_sketch__WEBPACK_IMPORTED_MODULE_5__["Sketch"].p5.remove();
    };
    // Initialize P5 Sketch
    ParticleConnectionComponent.prototype.initP5Sketch = function () {
        var _this = this;
        var sketch = function (p5sketch) {
            _classes_sketch__WEBPACK_IMPORTED_MODULE_5__["Sketch"].p5 = p5sketch;
            var canvas;
            var windowOffset;
            // Setup P5 js
            p5sketch.setup = function () {
                windowOffset = 100;
                canvas = p5sketch.createCanvas(p5sketch.windowWidth, p5sketch.windowHeight - windowOffset);
                for (var i = 0; i < _this.particleCount; i++) {
                    _this.particles.push(new _classes_particle__WEBPACK_IMPORTED_MODULE_2__["Particle"]());
                }
            };
            // Draw P5 js
            p5sketch.draw = function () {
                // Adjust Count of Particles If Changed
                if (_this.particles.length !== _this.particleCount) {
                    var oldParticles = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(_this.particles);
                    _this.particles = [];
                    for (var i = 0; i < _this.particleCount; i++) {
                        if (oldParticles.length > i) {
                            _this.particles.push(oldParticles[i]);
                        }
                        else {
                            _this.particles.push(new _classes_particle__WEBPACK_IMPORTED_MODULE_2__["Particle"]());
                        }
                    }
                }
                // Resize Canvas - Responsive
                if (canvas.width !== p5sketch.windowWidth || canvas.height !== p5sketch.windowHeight - windowOffset) {
                    p5sketch.resizeCanvas(p5sketch.windowWidth, p5sketch.windowHeight - windowOffset);
                }
                // Draw Background
                p5sketch.background(_classes_theme__WEBPACK_IMPORTED_MODULE_4__["Theme"].bgColor.x, _classes_theme__WEBPACK_IMPORTED_MODULE_4__["Theme"].bgColor.y, _classes_theme__WEBPACK_IMPORTED_MODULE_4__["Theme"].bgColor.z);
                _this.particles.forEach(function (particle) {
                    particle.move(); // Move Particle
                    particle.display(); // Display Particle
                    // Connect Particle To Other Particles
                    _this.particles.forEach(function (otherParticle) {
                        if (particle !== otherParticle) {
                            particle.connectToParticle(otherParticle.position, _this.particleConnectionLength);
                        }
                    });
                    // Connect Particle To Mouse
                    particle.connectToParticle(new _classes_vector__WEBPACK_IMPORTED_MODULE_3__["Vector"]({
                        x: p5sketch.mouseX,
                        y: p5sketch.mouseY
                    }), _this.particleConnectionLength);
                });
            };
        };
        var p = new p5__WEBPACK_IMPORTED_MODULE_6___default.a(sketch, 'canvas-container');
    };
    ParticleConnectionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-particle-connection',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./particle-connection.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/connection/components/particle-connection/particle-connection.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./particle-connection.component.scss */ "./src/app/modules/connection/components/particle-connection/particle-connection.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ParticleConnectionComponent);
    return ParticleConnectionComponent;
}());



/***/ }),

/***/ "./src/app/modules/connection/connection-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/connection/connection-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ConnectionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionRoutingModule", function() { return ConnectionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_particle_connection_particle_connection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/particle-connection/particle-connection.component */ "./src/app/modules/connection/components/particle-connection/particle-connection.component.ts");




var routes = [{ path: '', component: _components_particle_connection_particle_connection_component__WEBPACK_IMPORTED_MODULE_3__["ParticleConnectionComponent"] }];
var ConnectionRoutingModule = /** @class */ (function () {
    function ConnectionRoutingModule() {
    }
    ConnectionRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ConnectionRoutingModule);
    return ConnectionRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/connection/connection.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/connection/connection.module.ts ***!
  \*********************************************************/
/*! exports provided: ConnectionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionModule", function() { return ConnectionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _connection_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./connection-routing.module */ "./src/app/modules/connection/connection-routing.module.ts");
/* harmony import */ var _components_particle_connection_particle_connection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/particle-connection/particle-connection.component */ "./src/app/modules/connection/components/particle-connection/particle-connection.component.ts");






var ConnectionModule = /** @class */ (function () {
    function ConnectionModule() {
    }
    ConnectionModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_particle_connection_particle_connection_component__WEBPACK_IMPORTED_MODULE_5__["ParticleConnectionComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _connection_routing_module__WEBPACK_IMPORTED_MODULE_4__["ConnectionRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ]
        })
    ], ConnectionModule);
    return ConnectionModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-connection-connection-module.js.map