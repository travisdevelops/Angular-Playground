(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-emitter-emitter-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emitter/components/emitter/emitter.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emitter/components/emitter/emitter.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"px-3 py-2\">\r\n  <p class=\"mt-0 mb-3\" *ngIf=\"!emitter.active\">Try Clicking The Mouse!</p>\r\n  <p class=\"mt-0 mb-3\" *ngIf=\"emitter.active\">Try Moving The Mouse! (Hint: Use The Mouse Wheel To Change The Particle Count)</p>\r\n  <span>Max Particles: {{emitter.maxParticles}}</span>\r\n</div>\r\n<div id=\"canvas-container\"></div>\r\n");

/***/ }),

/***/ "./src/app/classes/helper.ts":
/*!***********************************!*\
  !*** ./src/app/classes/helper.ts ***!
  \***********************************/
/*! exports provided: Helper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Helper", function() { return Helper; });
var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.randomNumber = function (min, max) {
        return Math.round(Helper.randomDecimal(min, max));
    };
    Helper.randomDecimal = function (min, max) {
        return Math.random() * (max - min) + min;
    };
    return Helper;
}());



/***/ }),

/***/ "./src/app/modules/emitter/classes/emitter-particle.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/emitter/classes/emitter-particle.ts ***!
  \*************************************************************/
/*! exports provided: EmitterParticle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmitterParticle", function() { return EmitterParticle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _classes_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @classes/vector */ "./src/app/classes/vector.ts");
/* harmony import */ var _classes_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @classes/helper */ "./src/app/classes/helper.ts");
/* harmony import */ var _classes_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @classes/theme */ "./src/app/classes/theme.ts");
/* harmony import */ var _classes_canvas_object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @classes/canvas-object */ "./src/app/classes/canvas-object.ts");
/* harmony import */ var _classes_sketch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @classes/sketch */ "./src/app/classes/sketch.ts");






var EmitterParticle = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EmitterParticle, _super);
    function EmitterParticle(_a) {
        var _b = (_a === void 0 ? {} : _a).position, position = _b === void 0 ? new _classes_vector__WEBPACK_IMPORTED_MODULE_1__["Vector"]() : _b;
        var _this = this;
        var size = _classes_helper__WEBPACK_IMPORTED_MODULE_2__["Helper"].randomDecimal(5, 30);
        var sizeVector = new _classes_vector__WEBPACK_IMPORTED_MODULE_1__["Vector"]({ x: size, y: size });
        var minSpeed = new _classes_vector__WEBPACK_IMPORTED_MODULE_1__["Vector"]({ x: 0.5, y: 0.5 });
        var maxSpeed = new _classes_vector__WEBPACK_IMPORTED_MODULE_1__["Vector"]({ x: 3, y: 3 });
        _this = _super.call(this, { position: position, size: sizeVector, minSpeed: minSpeed, maxSpeed: maxSpeed }) || this;
        _this.objectOrigin = new _classes_canvas_object__WEBPACK_IMPORTED_MODULE_4__["CanvasObject"]({ size: sizeVector });
        _this.respawn(_this.position);
        return _this;
    }
    // Display Emission
    EmitterParticle.prototype.display = function () {
        this.color = new _classes_vector__WEBPACK_IMPORTED_MODULE_1__["Vector"]({ x: _classes_theme__WEBPACK_IMPORTED_MODULE_3__["Theme"].textColor.x, y: _classes_theme__WEBPACK_IMPORTED_MODULE_3__["Theme"].textColor.y, z: _classes_theme__WEBPACK_IMPORTED_MODULE_3__["Theme"].textColor.z });
        _classes_sketch__WEBPACK_IMPORTED_MODULE_5__["Sketch"].p5.fill(this.color.x, this.color.y, this.color.z, this.opacity);
        _classes_sketch__WEBPACK_IMPORTED_MODULE_5__["Sketch"].p5.ellipse(this.position.x, this.position.y, this.size.x);
        _classes_sketch__WEBPACK_IMPORTED_MODULE_5__["Sketch"].p5.noStroke();
    };
    // Override Move
    EmitterParticle.prototype.move = function () {
        this.opacity -= 1;
        this.size.x -= 0.01;
        _super.prototype.move.call(this);
    };
    // Respawn Emission at Initial Position
    EmitterParticle.prototype.respawn = function (position) {
        this.position = new _classes_vector__WEBPACK_IMPORTED_MODULE_1__["Vector"](position);
        this.opacity = this.objectOrigin.opacity;
        this.size = this.objectOrigin.size;
        this.randomizeSpeed();
    };
    return EmitterParticle;
}(_classes_canvas_object__WEBPACK_IMPORTED_MODULE_4__["CanvasObject"]));



/***/ }),

/***/ "./src/app/modules/emitter/classes/emitter.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/emitter/classes/emitter.ts ***!
  \****************************************************/
/*! exports provided: Emitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Emitter", function() { return Emitter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _classes_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @classes/vector */ "./src/app/classes/vector.ts");
/* harmony import */ var _classes_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @classes/helper */ "./src/app/classes/helper.ts");
/* harmony import */ var _classes_canvas_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @classes/canvas-object */ "./src/app/classes/canvas-object.ts");
/* harmony import */ var _emitter_particle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emitter-particle */ "./src/app/modules/emitter/classes/emitter-particle.ts");





var Emitter = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Emitter, _super);
    function Emitter(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.position, position = _c === void 0 ? new _classes_vector__WEBPACK_IMPORTED_MODULE_1__["Vector"]() : _c, _d = _b.maxParticles, maxParticles = _d === void 0 ? 300 : _d;
        var _this = _super.call(this, { position: position }) || this;
        _this.maxParticles = 400;
        _this.particles = [];
        _this.maxParticles = maxParticles;
        _this.active = false;
        return _this;
    }
    // Emit EmitterParticles
    Emitter.prototype.emit = function () {
        var _this = this;
        if (this.active) {
            if (this.particles.length > this.maxParticles) { // Remove A Single Emission (Immediately)
                this.particles.pop();
                this.emit();
            }
            else {
                setTimeout(function () {
                    if (_this.active) {
                        if (_this.particles.length < _this.maxParticles) { // Add A Single Emission (After Delay)
                            _this.particles.push(new _emitter_particle__WEBPACK_IMPORTED_MODULE_4__["EmitterParticle"]({ position: new _classes_vector__WEBPACK_IMPORTED_MODULE_1__["Vector"](_this.position) }));
                        }
                        _this.emit();
                    }
                }, _classes_helper__WEBPACK_IMPORTED_MODULE_2__["Helper"].randomNumber(0, 100)); // Add Emissions At Random Intervals
            }
        }
    };
    // Display All Emissions
    Emitter.prototype.display = function () {
        var _this = this;
        var tempParticles = [];
        this.particles.forEach(function (particle) {
            particle.move();
            particle.display();
            var canRespawn = particle.opacity <= 0 || particle.isOutsideCanvas(particle.position);
            if (_this.active && canRespawn) { // If Emitter Active & Can Respawn
                particle.respawn(_this.position);
            }
            // If Emitter Active & Can Respawn Then Add To Active Emissions
            // If Not Respawned Then Add To Active Emissions
            if ((_this.active && canRespawn) || !canRespawn) {
                tempParticles.push(particle);
            }
        });
        this.particles = tempParticles;
    };
    return Emitter;
}(_classes_canvas_object__WEBPACK_IMPORTED_MODULE_3__["CanvasObject"]));



/***/ }),

/***/ "./src/app/modules/emitter/components/emitter/emitter.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/emitter/components/emitter/emitter.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* @include themes() { color: theme(buttonTextColor); } */\n/* background-color: color(darkgrey) */\n/* Defines A Map of Maps */\n/* webkit moz ms */\n/* Duplicate Styling For Each Theme */\n/* Duplicate Styling For Each Theme On :Host*/\n/* @include breakpoints(tablet-wide) { padding-top: 4rem;} */\n/* @include prefixes((  transition: all 0.3s ease, transform: translateX(90px)  )) */\n/* @include themes() { color: theme(buttonTextColor); } */\n/* background-color: color(darkgrey) */\n/* Defines A Map of Maps */\n/* webkit moz ms */\n/* Duplicate Styling For Each Theme */\n/* Duplicate Styling For Each Theme On :Host*/\n/* @include breakpoints(tablet-wide) { padding-top: 4rem;} */\n/* @include prefixes((  transition: all 0.3s ease, transform: translateX(90px)  )) */\nhtml, body {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n}\n:host-context(.theme-light) .theme-text {\n  color: #323232;\n}\n:host-context(.theme-dark) .theme-text {\n  color: #ffffff;\n}\n:host-context(.theme-light) .theme-button {\n  color: #ffffff;\n  border-color: #323232;\n  background-color: #323232;\n}\n:host-context(.theme-dark) .theme-button {\n  color: #323232;\n  border-color: #ffc107;\n  background-color: #ffc107;\n}\n:host-context(.theme-light) .theme-button:hover {\n  color: #ffffff;\n  border-color: #252525;\n  background-color: #252525;\n}\n:host-context(.theme-dark) .theme-button:hover {\n  color: #323232;\n  border-color: #edb100;\n  background-color: #edb100;\n}\n:host-context(.theme-light) .theme-button-outline {\n  color: #323232;\n  border-color: #323232;\n  background-color: transparent;\n}\n:host-context(.theme-dark) .theme-button-outline {\n  color: #ffc107;\n  border-color: #ffc107;\n  background-color: transparent;\n}\n:host-context(.theme-light) .theme-button-outline:hover {\n  color: #ffffff;\n  border-color: #323232;\n  background-color: #323232;\n}\n:host-context(.theme-dark) .theme-button-outline:hover {\n  color: #323232;\n  border-color: #ffc107;\n  background-color: #ffc107;\n}\n.toggle {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 24px;\n  margin: 0 30px;\n}\n.toggle input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.toggle input:checked ~ span:before {\n  transform: translateX(26px);\n}\n.toggle span {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #323232;\n  border-radius: 24px;\n  transition: 0.4s;\n}\n:host-context(.theme-light) .toggle span {\n  background-color: #323232;\n}\n:host-context(.theme-dark) .toggle span {\n  background-color: #ffc107;\n}\n.toggle span:before {\n  position: absolute;\n  content: \"\";\n  height: 16px;\n  width: 16px;\n  left: 4px;\n  bottom: 4px;\n  border-radius: 50%;\n  transition: 0.4s;\n}\n:host-context(.theme-light) .toggle span:before {\n  background-color: #ffffff;\n}\n:host-context(.theme-dark) .toggle span:before {\n  background-color: #323232;\n}\n.toggle .toggle-icon {\n  vertical-align: top;\n  height: 24px;\n  position: absolute;\n  width: 16px;\n  font-size: 16px;\n}\n.toggle .toggle-icon:before {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.toggle .toggle-icon-left {\n  color: #ffc107;\n  left: -50%;\n}\n.toggle .toggle-icon-right {\n  right: -50%;\n}\n.clickable {\n  cursor: pointer;\n}\n:host {\n  display: block;\n}\n.theme-light :host {\n  color: #323232;\n}\n.theme-dark :host {\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9lbWl0dGVyL2NvbXBvbmVudHMvZW1pdHRlci9TOlxcRGV2ZWxvcG1lbnRcXFdlYlxcQW5ndWxhciBQbGF5Z3JvdW5kL3NyY1xcYXNzZXRzXFxzdHlsZXNcXGZ1bmN0aW9ucy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2VtaXR0ZXIvY29tcG9uZW50cy9lbWl0dGVyL1M6XFxEZXZlbG9wbWVudFxcV2ViXFxBbmd1bGFyIFBsYXlncm91bmQvc3JjXFxhc3NldHNcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZW1pdHRlci9jb21wb25lbnRzL2VtaXR0ZXIvUzpcXERldmVsb3BtZW50XFxXZWJcXEFuZ3VsYXIgUGxheWdyb3VuZC9zcmNcXGFzc2V0c1xcc3R5bGVzXFxtaXhpbnMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9lbWl0dGVyL2NvbXBvbmVudHMvZW1pdHRlci9TOlxcRGV2ZWxvcG1lbnRcXFdlYlxcQW5ndWxhciBQbGF5Z3JvdW5kL3NyY1xcYXNzZXRzXFxzdHlsZXNcXGdsb2JhbC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2VtaXR0ZXIvY29tcG9uZW50cy9lbWl0dGVyL2VtaXR0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZW1pdHRlci9jb21wb25lbnRzL2VtaXR0ZXIvUzpcXERldmVsb3BtZW50XFxXZWJcXEFuZ3VsYXIgUGxheWdyb3VuZC9zcmNcXGFwcFxcbW9kdWxlc1xcZW1pdHRlclxcY29tcG9uZW50c1xcZW1pdHRlclxcZW1pdHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5REFBQTtBQUtBLHNDQUFBO0FDQ0EsMEJBQUE7QUFpQ0Esa0JBQUE7QUN2Q0EscUNBQUE7QUFVQSw2Q0FBQTtBQVVBLDREQUFBO0FBYUEsb0ZBQUE7QUZqQ0EseURBQUE7QUFLQSxzQ0FBQTtBQ0NBLDBCQUFBO0FBaUNBLGtCQUFBO0FDdkNBLHFDQUFBO0FBVUEsNkNBQUE7QUFVQSw0REFBQTtBQWFBLG9GQUFBO0FDN0JBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDYUo7QUZsQkk7RUNVSSxjQUFBO0FDWVI7QUZ0Qkk7RUNVSSxjQUFBO0FDZVI7QUZ6Qkk7RUNnQkksY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNhUjtBRi9CSTtFQ2dCSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ2tCUjtBRnBDSTtFQ3VCTSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ2dCVjtBRnpDSTtFQ3VCTSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ3FCVjtBRjlDSTtFQ2dDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQ2tCUjtBRnBESTtFQ2dDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQ3VCUjtBRnpESTtFQ3VDTSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ3FCVjtBRjlESTtFQ3VDTSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQzBCVjtBRHJCQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUN3Qko7QUR0Qkk7RUFDRSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUN3Qk47QURyQkk7RUR2QkEsMkJDd0JvQjtBQ3lCeEI7QURuQkk7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFRHRDRixnQkN1Q29CO0FDdUJ4QjtBRmxHSTtFQytFSSx5QkFBQTtBQ3NCUjtBRnJHSTtFQytFSSx5QkFBQTtBQ3lCUjtBRHJCTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFRHRESixnQkN1RHNCO0FDeUIxQjtBRnBISTtFQytGTSx5QkFBQTtBQ3dCVjtBRnZISTtFQytGTSx5QkFBQTtBQzJCVjtBRHRCSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUN3Qk47QUR0Qk07RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUR6RUosMkJDMEVzQjtBQzBCMUI7QURwQkk7RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQ3NCTjtBRG5CSTtFQUNFLFdBQUE7QUNxQk47QURqQkU7RUFDRSxlQUFBO0FDb0JKO0FDckpBO0VBQ0ksY0FBQTtBRHdKSjtBRjdJSTtFR1RFLGNBQUE7QUR5Sk47QUZoSkk7RUdURSxjQUFBO0FENEpOIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9lbWl0dGVyL2NvbXBvbmVudHMvZW1pdHRlci9lbWl0dGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGluY2x1ZGUgdGhlbWVzKCkgeyBjb2xvcjogdGhlbWUoYnV0dG9uVGV4dENvbG9yKTsgfSAqL1xyXG5AZnVuY3Rpb24gdGhlbWUoJGtleSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY3VycmVudC10aGVtZSwgJGtleSk7XHJcbn1cclxuXHJcbi8qIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKGRhcmtncmV5KSAqL1xyXG5AZnVuY3Rpb24gY29sb3IoJGtleSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAka2V5KTtcclxufVxyXG4iLCIkY29sb3JzOiAoXHJcbiAgZGFya2dyZXk6ICMzMjMyMzIsXHJcbiAgeWVsbG93OiAjZmZjMTA3LFxyXG4gIHdoaXRlOiAjZmZmZmZmXHJcbik7XHJcblxyXG4vKiBEZWZpbmVzIEEgTWFwIG9mIE1hcHMgKi9cclxuJHRoZW1lczogKFxyXG4gIGxpZ2h0OiAoXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yKHdoaXRlKSxcclxuICAgIHRleHRDb2xvcjogY29sb3IoZGFya2dyZXkpLFxyXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9yKGRhcmtncmV5KSxcclxuICAgIGJ1dHRvblRleHRDb2xvcjogY29sb3IoZGFya2dyZXkpLFxyXG4gICAgYnV0dG9uVGV4dEhvdmVyQ29sb3I6IGNvbG9yKHdoaXRlKSxcclxuICAgIGJ1dHRvbkJHQ29sb3I6IHRyYW5zcGFyZW50LFxyXG4gICAgYnV0dG9uQkdIb3ZlckNvbG9yOiBjb2xvcihkYXJrZ3JleSlcclxuICApLFxyXG4gIGRhcms6IChcclxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IoZGFya2dyZXkpLFxyXG4gICAgdGV4dENvbG9yOiBjb2xvcih3aGl0ZSksXHJcbiAgICBib3JkZXJDb2xvcjogY29sb3IoeWVsbG93KSxcclxuICAgIGJ1dHRvblRleHRDb2xvcjogY29sb3IoeWVsbG93KSxcclxuICAgIGJ1dHRvblRleHRIb3ZlckNvbG9yOiBjb2xvcihkYXJrZ3JleSksXHJcbiAgICBidXR0b25CR0NvbG9yOiB0cmFuc3BhcmVudCxcclxuICAgIGJ1dHRvbkJHSG92ZXJDb2xvcjogY29sb3IoeWVsbG93KVxyXG4gICksXHJcbik7XHJcblxyXG4kYnJlYWtwb2ludHM6IChcclxuICAgIHBob25lOiAgICAgICAgNDAwcHgsXHJcbiAgICBwaG9uZS13aWRlOiAgIDQ4MHB4LFxyXG4gICAgcGhhYmxldDogICAgICA1NjBweCxcclxuICAgIHRhYmxldC1zbWFsbDogNjQwcHgsXHJcbiAgICB0YWJsZXQ6ICAgICAgIDc2OHB4LFxyXG4gICAgdGFibGV0LXdpZGU6ICAxMDI0cHgsXHJcbiAgICBkZXNrdG9wOiAgICAgIDEyNDhweCxcclxuICAgIGRlc2t0b3Atd2lkZTogMTQ0MHB4XHJcbik7XHJcblxyXG4vKiB3ZWJraXQgbW96IG1zICovXHJcbiRwcmVmaXhlczogKFxyXG4gIHRyYW5zZm9ybTogKHdlYmtpdCBtcyksXHJcbiAgdHJhbnNpdGlvbjogKHdlYmtpdCBvKVxyXG4pO1xyXG4iLCIvKiBEdXBsaWNhdGUgU3R5bGluZyBGb3IgRWFjaCBUaGVtZSAqL1xyXG5AbWl4aW4gdGhlbWVzKCl7XHJcbiAgQGVhY2ggJHRoZW1lLCAkbWFwIGluICR0aGVtZXMge1xyXG4gICAgJGN1cnJlbnQtdGhlbWU6ICRtYXAgIWdsb2JhbDtcclxuICAgIDpob3N0LWNvbnRleHQoLnRoZW1lLSN7JHRoZW1lfSkgJiB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogRHVwbGljYXRlIFN0eWxpbmcgRm9yIEVhY2ggVGhlbWUgT24gOkhvc3QqL1xyXG5AbWl4aW4gdGhlbWVzSG9zdCgpe1xyXG4gIEBlYWNoICR0aGVtZSwgJG1hcCBpbiAkdGhlbWVzIHtcclxuICAgICRjdXJyZW50LXRoZW1lOiAkbWFwICFnbG9iYWw7XHJcbiAgICAudGhlbWUtI3skdGhlbWV9ICYge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIEBpbmNsdWRlIGJyZWFrcG9pbnRzKHRhYmxldC13aWRlKSB7IHBhZGRpbmctdG9wOiA0cmVtO30gKi9cclxuQG1peGluIGJyZWFrcG9pbnRzKCR3aWR0aCwgJHR5cGU6IG1pbikge1xyXG4gICAgQGlmIG1hcF9oYXNfa2V5KCRicmVha3BvaW50cywgJHdpZHRoKSB7XHJcbiAgICAgICAgJHdpZHRoOiBtYXBfZ2V0KCRicmVha3BvaW50cywgJHdpZHRoKTtcclxuICAgICAgICBAaWYgJHR5cGUgPT0gbWF4IHtcclxuICAgICAgICAgICAgJHdpZHRoOiAkd2lkdGggLSAxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKCN7JHR5cGV9LXdpZHRoOiAkd2lkdGgpIHtcclxuICAgICAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKiBAaW5jbHVkZSBwcmVmaXhlcygoICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLCB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOTBweCkgICkpICovXHJcbkBtaXhpbiBwcmVmaXhlcygkZGVjbGFyYXRpb25zKSB7XHJcbiAgQGVhY2ggJHByb3BlcnR5LCAkdmFsdWUgaW4gJGRlY2xhcmF0aW9ucyB7XHJcbiAgICAkcHJvcGVydHktcHJlZml4ZXMgOiBtYXAtZ2V0KCRwcmVmaXhlcywgJHByb3BlcnR5KTtcclxuICAgIEBlYWNoICRwcmVmaXggaW4gJHByb3BlcnR5LXByZWZpeGVzIHtcclxuICAgICAgI3snLScgKyAkcHJlZml4ICsgJy0nICsgJHByb3BlcnR5fTogJHZhbHVlO1xyXG4gICAgfVxyXG4gICAgI3skcHJvcGVydHl9OiAkdmFsdWU7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgJy4vZnVuY3Rpb25zLnNjc3MnO1xyXG5AaW1wb3J0ICcuL3ZhcmlhYmxlcy5zY3NzJztcclxuQGltcG9ydCAnLi9taXhpbnMuc2Nzcyc7XHJcblxyXG5odG1sLCBib2R5e1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgcGFkZGluZzowO1xyXG4gICAgbWFyZ2luOjA7XHJcbn1cclxuXHJcbi50aGVtZS10ZXh0IHtcclxuICAgIEBpbmNsdWRlIHRoZW1lcygpIHtcclxuICAgICAgICBjb2xvcjogdGhlbWUodGV4dENvbG9yKTsgIFxyXG4gICAgICB9XHJcbn1cclxuXHJcbi50aGVtZS1idXR0b24ge1xyXG4gICAgQGluY2x1ZGUgdGhlbWVzKCkge1xyXG4gICAgICAgIGNvbG9yOiB0aGVtZShidXR0b25UZXh0SG92ZXJDb2xvcik7ICBcclxuICAgICAgICBib3JkZXItY29sb3I6IHRoZW1lKGJ1dHRvbkJHSG92ZXJDb2xvcik7IFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1lKGJ1dHRvbkJHSG92ZXJDb2xvcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgQGluY2x1ZGUgdGhlbWVzKCkge1xyXG4gICAgICAgICAgY29sb3I6IHRoZW1lKGJ1dHRvblRleHRIb3ZlckNvbG9yKTsgIFxyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiBkYXJrZW4odGhlbWUoYnV0dG9uQkdIb3ZlckNvbG9yKSwgNSUpOyBcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbih0aGVtZShidXR0b25CR0hvdmVyQ29sb3IpLCA1JSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udGhlbWUtYnV0dG9uLW91dGxpbmUge1xyXG4gICAgQGluY2x1ZGUgdGhlbWVzKCkge1xyXG4gICAgICAgIGNvbG9yOiB0aGVtZShidXR0b25UZXh0Q29sb3IpOyAgXHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0aGVtZShidXR0b25UZXh0Q29sb3IpOyBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZShidXR0b25CR0NvbG9yKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICBAaW5jbHVkZSB0aGVtZXMoKSB7XHJcbiAgICAgICAgICBjb2xvcjogdGhlbWUoYnV0dG9uVGV4dEhvdmVyQ29sb3IpOyAgXHJcbiAgICAgICAgICBib3JkZXItY29sb3I6IHRoZW1lKGJ1dHRvbkJHSG92ZXJDb2xvcik7IFxyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWUoYnV0dG9uQkdIb3ZlckNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi50b2dnbGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBtYXJnaW46IDAgMzBweDtcclxuICAgIFxyXG4gICAgaW5wdXQgeyBcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIGhlaWdodDogMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW5wdXQ6Y2hlY2tlZCB+IHNwYW46YmVmb3JlIHtcclxuICAgICAgQGluY2x1ZGUgcHJlZml4ZXMoKFxyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KVxyXG4gICAgICApKTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNwYW4ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcihkYXJrZ3JleSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICAgIEBpbmNsdWRlIHByZWZpeGVzKChcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzXHJcbiAgICAgICkpO1xyXG4gICAgICBAaW5jbHVkZSB0aGVtZXMoKSB7ICBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZShib3JkZXJDb2xvcik7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAmOmJlZm9yZXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgIGJvdHRvbTogNHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBAaW5jbHVkZSBwcmVmaXhlcygoXHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzXHJcbiAgICAgICAgKSk7XHJcbiAgICAgICAgQGluY2x1ZGUgdGhlbWVzKCkgeyAgXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZShiYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudG9nZ2xlLWljb257XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTZweDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBcclxuICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIEBpbmNsdWRlIHByZWZpeGVzKChcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKVxyXG4gICAgICAgICkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50b2dnbGUtaWNvbi1sZWZ0e1xyXG4gICAgICBjb2xvcjogY29sb3IoeWVsbG93KTtcclxuICAgICAgbGVmdDogLTUwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRvZ2dsZS1pY29uLXJpZ2h0e1xyXG4gICAgICByaWdodDogLTUwJTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmNsaWNrYWJsZSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iLCIvKiBAaW5jbHVkZSB0aGVtZXMoKSB7IGNvbG9yOiB0aGVtZShidXR0b25UZXh0Q29sb3IpOyB9ICovXG4vKiBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcihkYXJrZ3JleSkgKi9cbi8qIERlZmluZXMgQSBNYXAgb2YgTWFwcyAqL1xuLyogd2Via2l0IG1veiBtcyAqL1xuLyogRHVwbGljYXRlIFN0eWxpbmcgRm9yIEVhY2ggVGhlbWUgKi9cbi8qIER1cGxpY2F0ZSBTdHlsaW5nIEZvciBFYWNoIFRoZW1lIE9uIDpIb3N0Ki9cbi8qIEBpbmNsdWRlIGJyZWFrcG9pbnRzKHRhYmxldC13aWRlKSB7IHBhZGRpbmctdG9wOiA0cmVtO30gKi9cbi8qIEBpbmNsdWRlIHByZWZpeGVzKCggIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UsIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg5MHB4KSAgKSkgKi9cbi8qIEBpbmNsdWRlIHRoZW1lcygpIHsgY29sb3I6IHRoZW1lKGJ1dHRvblRleHRDb2xvcik7IH0gKi9cbi8qIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKGRhcmtncmV5KSAqL1xuLyogRGVmaW5lcyBBIE1hcCBvZiBNYXBzICovXG4vKiB3ZWJraXQgbW96IG1zICovXG4vKiBEdXBsaWNhdGUgU3R5bGluZyBGb3IgRWFjaCBUaGVtZSAqL1xuLyogRHVwbGljYXRlIFN0eWxpbmcgRm9yIEVhY2ggVGhlbWUgT24gOkhvc3QqL1xuLyogQGluY2x1ZGUgYnJlYWtwb2ludHModGFibGV0LXdpZGUpIHsgcGFkZGluZy10b3A6IDRyZW07fSAqL1xuLyogQGluY2x1ZGUgcHJlZml4ZXMoKCAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSwgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDkwcHgpICApKSAqL1xuaHRtbCwgYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuOmhvc3QtY29udGV4dCgudGhlbWUtbGlnaHQpIC50aGVtZS10ZXh0IHtcbiAgY29sb3I6ICMzMjMyMzI7XG59XG46aG9zdC1jb250ZXh0KC50aGVtZS1kYXJrKSAudGhlbWUtdGV4dCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG46aG9zdC1jb250ZXh0KC50aGVtZS1saWdodCkgLnRoZW1lLWJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICMzMjMyMzI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjMyMzI7XG59XG46aG9zdC1jb250ZXh0KC50aGVtZS1kYXJrKSAudGhlbWUtYnV0dG9uIHtcbiAgY29sb3I6ICMzMjMyMzI7XG4gIGJvcmRlci1jb2xvcjogI2ZmYzEwNztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcbn1cbjpob3N0LWNvbnRleHQoLnRoZW1lLWxpZ2h0KSAudGhlbWUtYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogIzI1MjUyNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjUyNTtcbn1cbjpob3N0LWNvbnRleHQoLnRoZW1lLWRhcmspIC50aGVtZS1idXR0b246aG92ZXIge1xuICBjb2xvcjogIzMyMzIzMjtcbiAgYm9yZGVyLWNvbG9yOiAjZWRiMTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRiMTAwO1xufVxuXG46aG9zdC1jb250ZXh0KC50aGVtZS1saWdodCkgLnRoZW1lLWJ1dHRvbi1vdXRsaW5lIHtcbiAgY29sb3I6ICMzMjMyMzI7XG4gIGJvcmRlci1jb2xvcjogIzMyMzIzMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG46aG9zdC1jb250ZXh0KC50aGVtZS1kYXJrKSAudGhlbWUtYnV0dG9uLW91dGxpbmUge1xuICBjb2xvcjogI2ZmYzEwNztcbiAgYm9yZGVyLWNvbG9yOiAjZmZjMTA3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbjpob3N0LWNvbnRleHQoLnRoZW1lLWxpZ2h0KSAudGhlbWUtYnV0dG9uLW91dGxpbmU6aG92ZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjMzIzMjMyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyO1xufVxuOmhvc3QtY29udGV4dCgudGhlbWUtZGFyaykgLnRoZW1lLWJ1dHRvbi1vdXRsaW5lOmhvdmVyIHtcbiAgY29sb3I6ICMzMjMyMzI7XG4gIGJvcmRlci1jb2xvcjogI2ZmYzEwNztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcbn1cblxuLnRvZ2dsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW46IDAgMzBweDtcbn1cbi50b2dnbGUgaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuLnRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gc3BhbjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xufVxuLnRvZ2dsZSBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMjtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICAtby10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuOmhvc3QtY29udGV4dCgudGhlbWUtbGlnaHQpIC50b2dnbGUgc3BhbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjMyMzI7XG59XG46aG9zdC1jb250ZXh0KC50aGVtZS1kYXJrKSAudG9nZ2xlIHNwYW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xufVxuLnRvZ2dsZSBzcGFuOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgbGVmdDogNHB4O1xuICBib3R0b206IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG46aG9zdC1jb250ZXh0KC50aGVtZS1saWdodCkgLnRvZ2dsZSBzcGFuOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG46aG9zdC1jb250ZXh0KC50aGVtZS1kYXJrKSAudG9nZ2xlIHNwYW46YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMjtcbn1cbi50b2dnbGUgLnRvZ2dsZS1pY29uIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNnB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4udG9nZ2xlIC50b2dnbGUtaWNvbjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLnRvZ2dsZSAudG9nZ2xlLWljb24tbGVmdCB7XG4gIGNvbG9yOiAjZmZjMTA3O1xuICBsZWZ0OiAtNTAlO1xufVxuLnRvZ2dsZSAudG9nZ2xlLWljb24tcmlnaHQge1xuICByaWdodDogLTUwJTtcbn1cblxuLmNsaWNrYWJsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi50aGVtZS1saWdodCA6aG9zdCB7XG4gIGNvbG9yOiAjMzIzMjMyO1xufVxuLnRoZW1lLWRhcmsgOmhvc3Qge1xuICBjb2xvcjogI2ZmZmZmZjtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3R5bGVzJztcclxuXHJcbjpob3N0e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBAaW5jbHVkZSB0aGVtZXNIb3N0KCkge1xyXG4gICAgICBjb2xvcjogdGhlbWUodGV4dENvbG9yKTsgICBcclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/modules/emitter/components/emitter/emitter.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/emitter/components/emitter/emitter.component.ts ***!
  \*************************************************************************/
/*! exports provided: EmitterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmitterComponent", function() { return EmitterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/emitter */ "./src/app/modules/emitter/classes/emitter.ts");
/* harmony import */ var _classes_vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @classes/vector */ "./src/app/classes/vector.ts");
/* harmony import */ var _classes_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @classes/theme */ "./src/app/classes/theme.ts");
/* harmony import */ var _classes_sketch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @classes/sketch */ "./src/app/classes/sketch.ts");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! p5 */ "./node_modules/p5/lib/p5.js");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_6__);







var EmitterComponent = /** @class */ (function () {
    function EmitterComponent() {
        this.emitter = new _classes_emitter__WEBPACK_IMPORTED_MODULE_2__["Emitter"]();
    }
    EmitterComponent.prototype.ngOnInit = function () {
        this.initP5Sketch();
    };
    EmitterComponent.prototype.ngOnDestroy = function () {
        _classes_sketch__WEBPACK_IMPORTED_MODULE_5__["Sketch"].p5.remove();
    };
    // Initialize P5 Sketch
    EmitterComponent.prototype.initP5Sketch = function () {
        var _this = this;
        var sketch = function (p5sketch) {
            _classes_sketch__WEBPACK_IMPORTED_MODULE_5__["Sketch"].p5 = p5sketch;
            var canvas;
            var windowOffset;
            var mouseDown;
            // Press Mouse
            var canvasMousePressed = function () {
                mouseDown = !mouseDown;
                _this.emitter.active = mouseDown;
                if (mouseDown) {
                    _this.emitter.emit();
                }
            };
            var mouseWheel = function (event) {
                if (event.deltaY < 0) { // Wheel Scroll Up
                    if (_this.emitter.maxParticles > 50) {
                        _this.emitter.maxParticles -= 10;
                    }
                }
                if (event.deltaY > 0) { // Wheel Scroll Down
                    if (_this.emitter.maxParticles < 700) {
                        _this.emitter.maxParticles += 10;
                    }
                }
            };
            // Setup P5 js
            p5sketch.setup = function () {
                windowOffset = 100;
                mouseDown = false;
                _this.emitter = new _classes_emitter__WEBPACK_IMPORTED_MODULE_2__["Emitter"]();
                canvas = p5sketch.createCanvas(p5sketch.windowWidth, p5sketch.windowHeight - windowOffset);
                canvas.mousePressed(canvasMousePressed);
                canvas.mouseWheel(mouseWheel);
            };
            // Draw P5 js
            p5sketch.draw = function () {
                // Resize Canvas - Responsive
                if (canvas.width !== p5sketch.windowWidth || canvas.height !== p5sketch.windowHeight - windowOffset) {
                    p5sketch.resizeCanvas(p5sketch.windowWidth, p5sketch.windowHeight - windowOffset);
                }
                // Draw Background
                p5sketch.background(_classes_theme__WEBPACK_IMPORTED_MODULE_4__["Theme"].bgColor.x, _classes_theme__WEBPACK_IMPORTED_MODULE_4__["Theme"].bgColor.y, _classes_theme__WEBPACK_IMPORTED_MODULE_4__["Theme"].bgColor.z);
                _this.emitter.position = new _classes_vector__WEBPACK_IMPORTED_MODULE_3__["Vector"]({ x: p5sketch.mouseX, y: p5sketch.mouseY }); // Mouse Emitter To Mouse Location
                _this.emitter.display(); // Display Emissions
            };
        };
        var p = new p5__WEBPACK_IMPORTED_MODULE_6___default.a(sketch, 'canvas-container');
    };
    EmitterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-emitter',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./emitter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/emitter/components/emitter/emitter.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./emitter.component.scss */ "./src/app/modules/emitter/components/emitter/emitter.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], EmitterComponent);
    return EmitterComponent;
}());



/***/ }),

/***/ "./src/app/modules/emitter/emitter-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/emitter/emitter-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: EmitterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmitterRoutingModule", function() { return EmitterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_emitter_emitter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/emitter/emitter.component */ "./src/app/modules/emitter/components/emitter/emitter.component.ts");




var routes = [{ path: '', component: _components_emitter_emitter_component__WEBPACK_IMPORTED_MODULE_3__["EmitterComponent"] }];
var EmitterRoutingModule = /** @class */ (function () {
    function EmitterRoutingModule() {
    }
    EmitterRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EmitterRoutingModule);
    return EmitterRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/emitter/emitter.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/emitter/emitter.module.ts ***!
  \***************************************************/
/*! exports provided: EmitterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmitterModule", function() { return EmitterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _emitter_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emitter-routing.module */ "./src/app/modules/emitter/emitter-routing.module.ts");
/* harmony import */ var _components_emitter_emitter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/emitter/emitter.component */ "./src/app/modules/emitter/components/emitter/emitter.component.ts");






var EmitterModule = /** @class */ (function () {
    function EmitterModule() {
    }
    EmitterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_emitter_emitter_component__WEBPACK_IMPORTED_MODULE_5__["EmitterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _emitter_routing_module__WEBPACK_IMPORTED_MODULE_4__["EmitterRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ]
        })
    ], EmitterModule);
    return EmitterModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-emitter-emitter-module.js.map