(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-swarm-swarm-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/swarm/components/swarm/swarm.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/swarm/components/swarm/swarm.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"px-3 py-2\">\r\n  <p class=\"my-0\">Try Dragging The Shapes And Watch The Swarm Move Within The Boundaries! (Hint: Use The Mouse Wheel To Increase Shape Size)</p>\r\n</div>\r\n<div id=\"canvas-container\"></div>\r\n");

/***/ }),

/***/ "./src/app/modules/swarm/classes/core.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/swarm/classes/core.ts ***!
  \***********************************************/
/*! exports provided: Core */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Core", function() { return Core; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _classes_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @classes/vector */ "./src/app/classes/vector.ts");
/* harmony import */ var _classes_canvas_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @classes/canvas-object */ "./src/app/classes/canvas-object.ts");
/* harmony import */ var _strand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./strand */ "./src/app/modules/swarm/classes/strand.ts");
/* harmony import */ var _classes_sketch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @classes/sketch */ "./src/app/classes/sketch.ts");
/* harmony import */ var _classes_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @classes/theme */ "./src/app/classes/theme.ts");






var Core = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Core, _super);
    function Core(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.strandCount, strandCount = _c === void 0 ? 0 : _c, _d = _b.size, size = _d === void 0 ? new _classes_vector__WEBPACK_IMPORTED_MODULE_1__["Vector"]() : _d, _e = _b.position, position = _e === void 0 ? new _classes_vector__WEBPACK_IMPORTED_MODULE_1__["Vector"]() : _e, _f = _b.square, square = _f === void 0 ? true : _f;
        var _this = _super.call(this, { position: position, size: size }) || this;
        _this.strands = [];
        _this.origin = new _classes_vector__WEBPACK_IMPORTED_MODULE_1__["Vector"](_this.position);
        _this.square = square;
        _this.movable = false;
        _this.opacity = 20;
        _this.addStrands(strandCount);
        return _this;
    }
    // Display Core
    Core.prototype.display = function () {
        this.color = new _classes_vector__WEBPACK_IMPORTED_MODULE_1__["Vector"]({ x: _classes_theme__WEBPACK_IMPORTED_MODULE_5__["Theme"].textColor.x, y: _classes_theme__WEBPACK_IMPORTED_MODULE_5__["Theme"].textColor.y, z: _classes_theme__WEBPACK_IMPORTED_MODULE_5__["Theme"].textColor.z });
        _classes_sketch__WEBPACK_IMPORTED_MODULE_4__["Sketch"].p5.noStroke();
        _classes_sketch__WEBPACK_IMPORTED_MODULE_4__["Sketch"].p5.fill(this.color.x, this.color.y, this.color.z, this.opacity);
        if (!this.square) {
            var size = this.size.x < this.size.y ? this.size.x : this.size.y;
            _classes_sketch__WEBPACK_IMPORTED_MODULE_4__["Sketch"].p5.ellipse(this.position.x, this.position.y, size * 2);
        }
        else {
            _classes_sketch__WEBPACK_IMPORTED_MODULE_4__["Sketch"].p5.rect(this.position.x - this.size.x, this.position.y - this.size.y, this.size.x * 2, this.size.y * 2);
        }
    };
    // Add Strands To Core
    Core.prototype.addStrands = function (count) {
        for (var i = 0; i < count; i++) {
            var strand = new _strand__WEBPACK_IMPORTED_MODULE_3__["Strand"]();
            strand.randomizeMovements();
            strand.position = this.getPositionInsideCore();
            this.strands.push(strand);
        }
    };
    // Get Position That Is Inside Core Width/Radius
    Core.prototype.getPositionInsideCore = function () {
        var xRangeL = this.size.x - _classes_sketch__WEBPACK_IMPORTED_MODULE_4__["Sketch"].p5.abs(this.position.x);
        var xRangeR = this.size.x + _classes_sketch__WEBPACK_IMPORTED_MODULE_4__["Sketch"].p5.abs(this.position.x);
        var yRangeT = this.size.y - _classes_sketch__WEBPACK_IMPORTED_MODULE_4__["Sketch"].p5.abs(this.position.y);
        var yRangeB = this.size.y + _classes_sketch__WEBPACK_IMPORTED_MODULE_4__["Sketch"].p5.abs(this.position.y);
        var position = new _classes_vector__WEBPACK_IMPORTED_MODULE_1__["Vector"]({ x: _classes_sketch__WEBPACK_IMPORTED_MODULE_4__["Sketch"].p5.random(-xRangeL, xRangeR), y: _classes_sketch__WEBPACK_IMPORTED_MODULE_4__["Sketch"].p5.random(-yRangeT, yRangeB) });
        if (this.isPositionOutsideOfCore(position)) {
            return this.getPositionInsideCore();
        }
        return position;
    };
    // Check If Strand Position is Outside of The Width/Radius of A Single Core
    Core.prototype.isPositionOutsideOfCore = function (position) {
        if (this.square) { // Rect
            var topOfCore = position.y < this.position.y - this.size.y;
            var rightOfCore = position.x > this.position.x + this.size.x;
            var bottomOfCore = position.y > this.position.y + this.size.y;
            var leftOfCore = position.x < this.position.x - this.size.x;
            return topOfCore || rightOfCore || bottomOfCore || leftOfCore;
        }
        else { // Ellipse
            var d = _classes_sketch__WEBPACK_IMPORTED_MODULE_4__["Sketch"].p5.dist(position.x, position.y, this.position.x, this.position.y);
            return d > this.size.x;
        }
    };
    return Core;
}(_classes_canvas_object__WEBPACK_IMPORTED_MODULE_2__["CanvasObject"]));



/***/ }),

/***/ "./src/app/modules/swarm/classes/coremanager.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/swarm/classes/coremanager.ts ***!
  \******************************************************/
/*! exports provided: CoreManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreManager", function() { return CoreManager; });
/* harmony import */ var _classes_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @classes/vector */ "./src/app/classes/vector.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "./src/app/modules/swarm/classes/core.ts");
/* harmony import */ var _classes_sketch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @classes/sketch */ "./src/app/classes/sketch.ts");



var CoreManager = /** @class */ (function () {
    function CoreManager() {
        this.cores = [];
    }
    // Remove Strand From A Single Core
    CoreManager.removeStrandFromCore = function (core, strandToRemove) {
        core.strands = core.strands.filter(function (strand) {
            return strand !== strandToRemove;
        });
    };
    // Add Strand To A Single Core
    CoreManager.addStrandToCore = function (core, strandToAdd) {
        core.strands.push(strandToAdd);
    };
    // Display All Cores & Strands
    CoreManager.prototype.display = function () {
        var _this = this;
        this.cores.forEach(function (core) {
            core.display();
            core.strands.forEach(function (strand) {
                var pos = strand.getPotentialPosition();
                if (pos != null) {
                    _this.setStrandCore(core, strand, pos);
                }
                strand.display();
            });
        });
    };
    // Add Core To Array of Cores
    CoreManager.prototype.addCore = function (_a) {
        var _b = _a.sizeX, sizeX = _b === void 0 ? 0 : _b, _c = _a.sizeY, sizeY = _c === void 0 ? 0 : _c, _d = _a.posX, posX = _d === void 0 ? 0 : _d, _e = _a.posY, posY = _e === void 0 ? 0 : _e, _f = _a.square, square = _f === void 0 ? true : _f, _g = _a.strandCount, strandCount = _g === void 0 ? 0 : _g;
        if (!square) {
            sizeY = sizeX;
        }
        var size = new _classes_vector__WEBPACK_IMPORTED_MODULE_0__["Vector"]({ x: sizeX, y: sizeY });
        var position = new _classes_vector__WEBPACK_IMPORTED_MODULE_0__["Vector"]({ x: posX, y: posY });
        this.cores.push(new _core__WEBPACK_IMPORTED_MODULE_1__["Core"]({ strandCount: strandCount, size: size, position: position, square: square }));
    };
    // Set Strand Core To The First Core That Its Not Outside Of or Teleport Back To Original Core If Outside All
    CoreManager.prototype.setStrandCore = function (core, strand, pos) {
        var outsideCoreCount = 0;
        for (var i = 0; i < this.cores.length; i++) {
            if (!this.cores[i].isPositionOutsideOfCore(pos)) {
                strand.move();
                if (this.cores[i] !== core) {
                    CoreManager.addStrandToCore(this.cores[i], strand);
                    CoreManager.removeStrandFromCore(core, strand);
                }
                break;
            }
            else {
                outsideCoreCount++;
            }
        }
        if (outsideCoreCount === this.cores.length) { // Outside All Cores
            if (core.movable) { // Core Was Moving Which Is Why Its Outside So Return To Home Core
                strand.tails = [];
                strand.position = core.getPositionInsideCore();
            }
            else {
                strand.randomizeSpeed();
            }
        }
    };
    // Set Core To Movable If Mouse Position Is Inside Core
    CoreManager.prototype.setMovable = function (movable, position) {
        this.cores.forEach(function (core) {
            if (movable && !core.isPositionOutsideOfCore(position)) {
                core.movable = true;
            }
            else {
                core.movable = false;
                core.origin = new _classes_vector__WEBPACK_IMPORTED_MODULE_0__["Vector"](core.position);
            }
        });
    };
    // Move Core Position Based on Mouse
    CoreManager.prototype.moveCoreByMousePosition = function (origin, position) {
        this.cores.forEach(function (core) {
            if (core.movable) {
                var xDelta = position.x - origin.x;
                var yDelta = position.y - origin.y;
                core.position = new _classes_vector__WEBPACK_IMPORTED_MODULE_0__["Vector"]({ x: core.origin.x + xDelta, y: core.origin.y + yDelta });
            }
        });
    };
    // Resize Cores Based On Mouse
    CoreManager.prototype.resizeCores = function (scrollSize) {
        this.cores.forEach(function (core) {
            if (core.movable) {
                var newSize = new _classes_vector__WEBPACK_IMPORTED_MODULE_0__["Vector"]({ x: core.size.x + scrollSize, y: core.size.y + scrollSize });
                if (newSize.x > 20 && newSize.x < _classes_sketch__WEBPACK_IMPORTED_MODULE_2__["Sketch"].p5.width / 2 && newSize.y > 20 && newSize.y < _classes_sketch__WEBPACK_IMPORTED_MODULE_2__["Sketch"].p5.height / 2) {
                    core.size = newSize;
                }
            }
        });
    };
    return CoreManager;
}());



/***/ }),

/***/ "./src/app/modules/swarm/classes/strand.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/swarm/classes/strand.ts ***!
  \*************************************************/
/*! exports provided: Strand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Strand", function() { return Strand; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _classes_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @classes/vector */ "./src/app/classes/vector.ts");
/* harmony import */ var _classes_canvas_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @classes/canvas-object */ "./src/app/classes/canvas-object.ts");
/* harmony import */ var _classes_sketch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @classes/sketch */ "./src/app/classes/sketch.ts");




var Strand = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Strand, _super);
    function Strand() {
        var _this = _super.call(this) || this;
        _this.color = new _classes_vector__WEBPACK_IMPORTED_MODULE_1__["Vector"]({ x: 188, y: 254, z: 0 });
        _this.maxSpeed = new _classes_vector__WEBPACK_IMPORTED_MODULE_1__["Vector"]({ x: 2, y: 2 });
        _this.minSpeed = new _classes_vector__WEBPACK_IMPORTED_MODULE_1__["Vector"]({ x: 0.5, y: 0.5 });
        _this.size = new _classes_vector__WEBPACK_IMPORTED_MODULE_1__["Vector"]({ x: 2, y: 2 });
        _this.position = new _classes_vector__WEBPACK_IMPORTED_MODULE_1__["Vector"]({ x: 0, y: 0 });
        _this.tails = [];
        _this.tailMax = 15;
        return _this;
    }
    // Randomize Movements On A Random Interval That Continues To Change
    Strand.prototype.randomizeMovements = function () {
        this.randomizeSpeed();
        setTimeout(this.randomizeMovements, _classes_sketch__WEBPACK_IMPORTED_MODULE_3__["Sketch"].p5.random(200, 800));
    };
    // Display Strand With Glow
    Strand.prototype.display = function () {
        _classes_sketch__WEBPACK_IMPORTED_MODULE_3__["Sketch"].p5.noStroke();
        _classes_sketch__WEBPACK_IMPORTED_MODULE_3__["Sketch"].p5.fill(this.color.x, this.color.y, this.color.z);
        _classes_sketch__WEBPACK_IMPORTED_MODULE_3__["Sketch"].p5.ellipse(this.position.x, this.position.y, this.size.x * 2);
        // Glow Effect
        _classes_sketch__WEBPACK_IMPORTED_MODULE_3__["Sketch"].p5.fill(this.color.x, this.color.y, this.color.z, 75);
        _classes_sketch__WEBPACK_IMPORTED_MODULE_3__["Sketch"].p5.ellipse(this.position.x, this.position.y, this.size.x * 6);
        this.displayTails();
    };
    // Display Tails
    Strand.prototype.displayTails = function () {
        _classes_sketch__WEBPACK_IMPORTED_MODULE_3__["Sketch"].p5.noFill();
        for (var i = 0; i < this.tails.length - 1; i++) {
            var level = 3 - Math.floor(i / (this.tails.length / 3));
            _classes_sketch__WEBPACK_IMPORTED_MODULE_3__["Sketch"].p5.stroke(this.color.x, this.color.y, this.color.z, 255 - (level * 50)); // Make Tail Taper in Alpha
            _classes_sketch__WEBPACK_IMPORTED_MODULE_3__["Sketch"].p5.strokeWeight(this.size.x + 1 - (level * 0.5)); // Make Tail Taper in Width
            _classes_sketch__WEBPACK_IMPORTED_MODULE_3__["Sketch"].p5.line(this.tails[i].x, this.tails[i].y, this.tails[i + 1].x, this.tails[i + 1].y); // Actual Tail
        }
    };
    // Add Tail After Moving - Overrides the Parent Method
    Strand.prototype.move = function () {
        _super.prototype.move.call(this);
        this.addTail();
    };
    // Add Tail To Array of Tails & Remove First Tail If More Than Tail Length Threshold
    Strand.prototype.addTail = function () {
        if (this.tails.length >= this.tailMax) {
            this.tails.shift();
        }
        this.tails.push(new _classes_vector__WEBPACK_IMPORTED_MODULE_1__["Vector"]({
            x: this.position.x,
            y: this.position.y
        }));
    };
    return Strand;
}(_classes_canvas_object__WEBPACK_IMPORTED_MODULE_2__["CanvasObject"]));



/***/ }),

/***/ "./src/app/modules/swarm/components/swarm/swarm.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/modules/swarm/components/swarm/swarm.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* @include themes() { color: theme(buttonTextColor); } */\n/* background-color: color(darkgrey) */\n/* Defines A Map of Maps */\n/* webkit moz ms */\n/* Duplicate Styling For Each Theme */\n/* Duplicate Styling For Each Theme On :Host*/\n/* @include breakpoints(tablet-wide) { padding-top: 4rem;} */\n/* @include prefixes((  transition: all 0.3s ease, transform: translateX(90px)  )) */\n/* @include themes() { color: theme(buttonTextColor); } */\n/* background-color: color(darkgrey) */\n/* Defines A Map of Maps */\n/* webkit moz ms */\n/* Duplicate Styling For Each Theme */\n/* Duplicate Styling For Each Theme On :Host*/\n/* @include breakpoints(tablet-wide) { padding-top: 4rem;} */\n/* @include prefixes((  transition: all 0.3s ease, transform: translateX(90px)  )) */\nhtml, body {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n}\n:host-context(.theme-light) .theme-text {\n  color: #323232;\n}\n:host-context(.theme-dark) .theme-text {\n  color: #ffffff;\n}\n:host-context(.theme-light) .theme-button {\n  color: #ffffff;\n  border-color: #323232;\n  background-color: #323232;\n}\n:host-context(.theme-dark) .theme-button {\n  color: #323232;\n  border-color: #ffc107;\n  background-color: #ffc107;\n}\n:host-context(.theme-light) .theme-button:hover {\n  color: #ffffff;\n  border-color: #252525;\n  background-color: #252525;\n}\n:host-context(.theme-dark) .theme-button:hover {\n  color: #323232;\n  border-color: #edb100;\n  background-color: #edb100;\n}\n:host-context(.theme-light) .theme-button-outline {\n  color: #323232;\n  border-color: #323232;\n  background-color: transparent;\n}\n:host-context(.theme-dark) .theme-button-outline {\n  color: #ffc107;\n  border-color: #ffc107;\n  background-color: transparent;\n}\n:host-context(.theme-light) .theme-button-outline:hover {\n  color: #ffffff;\n  border-color: #323232;\n  background-color: #323232;\n}\n:host-context(.theme-dark) .theme-button-outline:hover {\n  color: #323232;\n  border-color: #ffc107;\n  background-color: #ffc107;\n}\n.toggle {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 24px;\n  margin: 0 30px;\n}\n.toggle input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.toggle input:checked ~ span:before {\n  transform: translateX(26px);\n}\n.toggle span {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #323232;\n  border-radius: 24px;\n  transition: 0.4s;\n}\n:host-context(.theme-light) .toggle span {\n  background-color: #323232;\n}\n:host-context(.theme-dark) .toggle span {\n  background-color: #ffc107;\n}\n.toggle span:before {\n  position: absolute;\n  content: \"\";\n  height: 16px;\n  width: 16px;\n  left: 4px;\n  bottom: 4px;\n  border-radius: 50%;\n  transition: 0.4s;\n}\n:host-context(.theme-light) .toggle span:before {\n  background-color: #ffffff;\n}\n:host-context(.theme-dark) .toggle span:before {\n  background-color: #323232;\n}\n.toggle .toggle-icon {\n  vertical-align: top;\n  height: 24px;\n  position: absolute;\n  width: 16px;\n  font-size: 16px;\n}\n.toggle .toggle-icon:before {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.toggle .toggle-icon-left {\n  color: #ffc107;\n  left: -50%;\n}\n.toggle .toggle-icon-right {\n  right: -50%;\n}\n.clickable {\n  cursor: pointer;\n}\n:host {\n  display: block;\n}\n.theme-light :host {\n  color: #323232;\n}\n.theme-dark :host {\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zd2FybS9jb21wb25lbnRzL3N3YXJtL1M6XFxEZXZlbG9wbWVudFxcV2ViXFxBbmd1bGFyIFBsYXlncm91bmQvc3JjXFxhc3NldHNcXHN0eWxlc1xcZnVuY3Rpb25zLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc3dhcm0vY29tcG9uZW50cy9zd2FybS9TOlxcRGV2ZWxvcG1lbnRcXFdlYlxcQW5ndWxhciBQbGF5Z3JvdW5kL3NyY1xcYXNzZXRzXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3N3YXJtL2NvbXBvbmVudHMvc3dhcm0vUzpcXERldmVsb3BtZW50XFxXZWJcXEFuZ3VsYXIgUGxheWdyb3VuZC9zcmNcXGFzc2V0c1xcc3R5bGVzXFxtaXhpbnMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zd2FybS9jb21wb25lbnRzL3N3YXJtL1M6XFxEZXZlbG9wbWVudFxcV2ViXFxBbmd1bGFyIFBsYXlncm91bmQvc3JjXFxhc3NldHNcXHN0eWxlc1xcZ2xvYmFsLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc3dhcm0vY29tcG9uZW50cy9zd2FybS9zd2FybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zd2FybS9jb21wb25lbnRzL3N3YXJtL1M6XFxEZXZlbG9wbWVudFxcV2ViXFxBbmd1bGFyIFBsYXlncm91bmQvc3JjXFxhcHBcXG1vZHVsZXNcXHN3YXJtXFxjb21wb25lbnRzXFxzd2FybVxcc3dhcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQUE7QUFLQSxzQ0FBQTtBQ0NBLDBCQUFBO0FBaUNBLGtCQUFBO0FDdkNBLHFDQUFBO0FBVUEsNkNBQUE7QUFVQSw0REFBQTtBQWFBLG9GQUFBO0FGakNBLHlEQUFBO0FBS0Esc0NBQUE7QUNDQSwwQkFBQTtBQWlDQSxrQkFBQTtBQ3ZDQSxxQ0FBQTtBQVVBLDZDQUFBO0FBVUEsNERBQUE7QUFhQSxvRkFBQTtBQzdCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ2FKO0FGbEJJO0VDVUksY0FBQTtBQ1lSO0FGdEJJO0VDVUksY0FBQTtBQ2VSO0FGekJJO0VDZ0JJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDYVI7QUYvQkk7RUNnQkksY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNrQlI7QUZwQ0k7RUN1Qk0sY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNnQlY7QUZ6Q0k7RUN1Qk0sY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNxQlY7QUY5Q0k7RUNnQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUNrQlI7QUZwREk7RUNnQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUN1QlI7QUZ6REk7RUN1Q00sY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNxQlY7QUY5REk7RUN1Q00sY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUMwQlY7QURyQkE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDd0JKO0FEdEJJO0VBQ0UsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDd0JOO0FEckJJO0VEdkJBLDJCQ3dCb0I7QUN5QnhCO0FEbkJJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUR0Q0YsZ0JDdUNvQjtBQ3VCeEI7QUZsR0k7RUMrRUkseUJBQUE7QUNzQlI7QUZyR0k7RUMrRUkseUJBQUE7QUN5QlI7QURyQk07RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUR0REosZ0JDdURzQjtBQ3lCMUI7QUZwSEk7RUMrRk0seUJBQUE7QUN3QlY7QUZ2SEk7RUMrRk0seUJBQUE7QUMyQlY7QUR0Qkk7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDd0JOO0FEdEJNO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VEekVKLDJCQzBFc0I7QUMwQjFCO0FEcEJJO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUNzQk47QURuQkk7RUFDRSxXQUFBO0FDcUJOO0FEakJFO0VBQ0UsZUFBQTtBQ29CSjtBQ3JKQTtFQUNFLGNBQUE7QUR3SkY7QUY3SUk7RUdUQSxjQUFBO0FEeUpKO0FGaEpJO0VHVEEsY0FBQTtBRDRKSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3dhcm0vY29tcG9uZW50cy9zd2FybS9zd2FybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBpbmNsdWRlIHRoZW1lcygpIHsgY29sb3I6IHRoZW1lKGJ1dHRvblRleHRDb2xvcik7IH0gKi9cclxuQGZ1bmN0aW9uIHRoZW1lKCRrZXkpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGN1cnJlbnQtdGhlbWUsICRrZXkpO1xyXG59XHJcblxyXG4vKiBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcihkYXJrZ3JleSkgKi9cclxuQGZ1bmN0aW9uIGNvbG9yKCRrZXkpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGtleSk7XHJcbn1cclxuIiwiJGNvbG9yczogKFxyXG4gIGRhcmtncmV5OiAjMzIzMjMyLFxyXG4gIHllbGxvdzogI2ZmYzEwNyxcclxuICB3aGl0ZTogI2ZmZmZmZlxyXG4pO1xyXG5cclxuLyogRGVmaW5lcyBBIE1hcCBvZiBNYXBzICovXHJcbiR0aGVtZXM6IChcclxuICBsaWdodDogKFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcih3aGl0ZSksXHJcbiAgICB0ZXh0Q29sb3I6IGNvbG9yKGRhcmtncmV5KSxcclxuICAgIGJvcmRlckNvbG9yOiBjb2xvcihkYXJrZ3JleSksXHJcbiAgICBidXR0b25UZXh0Q29sb3I6IGNvbG9yKGRhcmtncmV5KSxcclxuICAgIGJ1dHRvblRleHRIb3ZlckNvbG9yOiBjb2xvcih3aGl0ZSksXHJcbiAgICBidXR0b25CR0NvbG9yOiB0cmFuc3BhcmVudCxcclxuICAgIGJ1dHRvbkJHSG92ZXJDb2xvcjogY29sb3IoZGFya2dyZXkpXHJcbiAgKSxcclxuICBkYXJrOiAoXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yKGRhcmtncmV5KSxcclxuICAgIHRleHRDb2xvcjogY29sb3Iod2hpdGUpLFxyXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9yKHllbGxvdyksXHJcbiAgICBidXR0b25UZXh0Q29sb3I6IGNvbG9yKHllbGxvdyksXHJcbiAgICBidXR0b25UZXh0SG92ZXJDb2xvcjogY29sb3IoZGFya2dyZXkpLFxyXG4gICAgYnV0dG9uQkdDb2xvcjogdHJhbnNwYXJlbnQsXHJcbiAgICBidXR0b25CR0hvdmVyQ29sb3I6IGNvbG9yKHllbGxvdylcclxuICApLFxyXG4pO1xyXG5cclxuJGJyZWFrcG9pbnRzOiAoXHJcbiAgICBwaG9uZTogICAgICAgIDQwMHB4LFxyXG4gICAgcGhvbmUtd2lkZTogICA0ODBweCxcclxuICAgIHBoYWJsZXQ6ICAgICAgNTYwcHgsXHJcbiAgICB0YWJsZXQtc21hbGw6IDY0MHB4LFxyXG4gICAgdGFibGV0OiAgICAgICA3NjhweCxcclxuICAgIHRhYmxldC13aWRlOiAgMTAyNHB4LFxyXG4gICAgZGVza3RvcDogICAgICAxMjQ4cHgsXHJcbiAgICBkZXNrdG9wLXdpZGU6IDE0NDBweFxyXG4pO1xyXG5cclxuLyogd2Via2l0IG1veiBtcyAqL1xyXG4kcHJlZml4ZXM6IChcclxuICB0cmFuc2Zvcm06ICh3ZWJraXQgbXMpLFxyXG4gIHRyYW5zaXRpb246ICh3ZWJraXQgbylcclxuKTtcclxuIiwiLyogRHVwbGljYXRlIFN0eWxpbmcgRm9yIEVhY2ggVGhlbWUgKi9cclxuQG1peGluIHRoZW1lcygpe1xyXG4gIEBlYWNoICR0aGVtZSwgJG1hcCBpbiAkdGhlbWVzIHtcclxuICAgICRjdXJyZW50LXRoZW1lOiAkbWFwICFnbG9iYWw7XHJcbiAgICA6aG9zdC1jb250ZXh0KC50aGVtZS0jeyR0aGVtZX0pICYge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIER1cGxpY2F0ZSBTdHlsaW5nIEZvciBFYWNoIFRoZW1lIE9uIDpIb3N0Ki9cclxuQG1peGluIHRoZW1lc0hvc3QoKXtcclxuICBAZWFjaCAkdGhlbWUsICRtYXAgaW4gJHRoZW1lcyB7XHJcbiAgICAkY3VycmVudC10aGVtZTogJG1hcCAhZ2xvYmFsO1xyXG4gICAgLnRoZW1lLSN7JHRoZW1lfSAmIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBAaW5jbHVkZSBicmVha3BvaW50cyh0YWJsZXQtd2lkZSkgeyBwYWRkaW5nLXRvcDogNHJlbTt9ICovXHJcbkBtaXhpbiBicmVha3BvaW50cygkd2lkdGgsICR0eXBlOiBtaW4pIHtcclxuICAgIEBpZiBtYXBfaGFzX2tleSgkYnJlYWtwb2ludHMsICR3aWR0aCkge1xyXG4gICAgICAgICR3aWR0aDogbWFwX2dldCgkYnJlYWtwb2ludHMsICR3aWR0aCk7XHJcbiAgICAgICAgQGlmICR0eXBlID09IG1heCB7XHJcbiAgICAgICAgICAgICR3aWR0aDogJHdpZHRoIC0gMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kICgjeyR0eXBlfS13aWR0aDogJHdpZHRoKSB7XHJcbiAgICAgICAgICAgIEBjb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyogQGluY2x1ZGUgcHJlZml4ZXMoKCAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSwgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDkwcHgpICApKSAqL1xyXG5AbWl4aW4gcHJlZml4ZXMoJGRlY2xhcmF0aW9ucykge1xyXG4gIEBlYWNoICRwcm9wZXJ0eSwgJHZhbHVlIGluICRkZWNsYXJhdGlvbnMge1xyXG4gICAgJHByb3BlcnR5LXByZWZpeGVzIDogbWFwLWdldCgkcHJlZml4ZXMsICRwcm9wZXJ0eSk7XHJcbiAgICBAZWFjaCAkcHJlZml4IGluICRwcm9wZXJ0eS1wcmVmaXhlcyB7XHJcbiAgICAgICN7Jy0nICsgJHByZWZpeCArICctJyArICRwcm9wZXJ0eX06ICR2YWx1ZTtcclxuICAgIH1cclxuICAgICN7JHByb3BlcnR5fTogJHZhbHVlO1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0ICcuL2Z1bmN0aW9ucy5zY3NzJztcclxuQGltcG9ydCAnLi92YXJpYWJsZXMuc2Nzcyc7XHJcbkBpbXBvcnQgJy4vbWl4aW5zLnNjc3MnO1xyXG5cclxuaHRtbCwgYm9keXtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIG1hcmdpbjowO1xyXG59XHJcblxyXG4udGhlbWUtdGV4dCB7XHJcbiAgICBAaW5jbHVkZSB0aGVtZXMoKSB7XHJcbiAgICAgICAgY29sb3I6IHRoZW1lKHRleHRDb2xvcik7ICBcclxuICAgICAgfVxyXG59XHJcblxyXG4udGhlbWUtYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIHRoZW1lcygpIHtcclxuICAgICAgICBjb2xvcjogdGhlbWUoYnV0dG9uVGV4dEhvdmVyQ29sb3IpOyAgXHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0aGVtZShidXR0b25CR0hvdmVyQ29sb3IpOyBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZShidXR0b25CR0hvdmVyQ29sb3IpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVye1xyXG4gICAgICAgIEBpbmNsdWRlIHRoZW1lcygpIHtcclxuICAgICAgICAgIGNvbG9yOiB0aGVtZShidXR0b25UZXh0SG92ZXJDb2xvcik7ICBcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogZGFya2VuKHRoZW1lKGJ1dHRvbkJHSG92ZXJDb2xvciksIDUlKTsgXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4odGhlbWUoYnV0dG9uQkdIb3ZlckNvbG9yKSwgNSUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnRoZW1lLWJ1dHRvbi1vdXRsaW5lIHtcclxuICAgIEBpbmNsdWRlIHRoZW1lcygpIHtcclxuICAgICAgICBjb2xvcjogdGhlbWUoYnV0dG9uVGV4dENvbG9yKTsgIFxyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdGhlbWUoYnV0dG9uVGV4dENvbG9yKTsgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWUoYnV0dG9uQkdDb2xvcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgQGluY2x1ZGUgdGhlbWVzKCkge1xyXG4gICAgICAgICAgY29sb3I6IHRoZW1lKGJ1dHRvblRleHRIb3ZlckNvbG9yKTsgIFxyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB0aGVtZShidXR0b25CR0hvdmVyQ29sb3IpOyBcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1lKGJ1dHRvbkJHSG92ZXJDb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udG9nZ2xlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbWFyZ2luOiAwIDMwcHg7XHJcbiAgICBcclxuICAgIGlucHV0IHsgXHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgICBoZWlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlucHV0OmNoZWNrZWQgfiBzcGFuOmJlZm9yZSB7XHJcbiAgICAgIEBpbmNsdWRlIHByZWZpeGVzKChcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweClcclxuICAgICAgKSk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzcGFuIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IoZGFya2dyZXkpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgICBAaW5jbHVkZSBwcmVmaXhlcygoXHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC40c1xyXG4gICAgICApKTtcclxuICAgICAgQGluY2x1ZGUgdGhlbWVzKCkgeyAgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWUoYm9yZGVyQ29sb3IpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgIGxlZnQ6IDRweDtcclxuICAgICAgICBib3R0b206IDRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgQGluY2x1ZGUgcHJlZml4ZXMoKFxyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC40c1xyXG4gICAgICAgICkpO1xyXG4gICAgICAgIEBpbmNsdWRlIHRoZW1lcygpIHsgIFxyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWUoYmFja2dyb3VuZENvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRvZ2dsZS1pY29ue1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgXHJcbiAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBAaW5jbHVkZSBwcmVmaXhlcygoXHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSlcclxuICAgICAgICApKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudG9nZ2xlLWljb24tbGVmdHtcclxuICAgICAgY29sb3I6IGNvbG9yKHllbGxvdyk7XHJcbiAgICAgIGxlZnQ6IC01MCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50b2dnbGUtaWNvbi1yaWdodHtcclxuICAgICAgcmlnaHQ6IC01MCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jbGlja2FibGUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59IiwiLyogQGluY2x1ZGUgdGhlbWVzKCkgeyBjb2xvcjogdGhlbWUoYnV0dG9uVGV4dENvbG9yKTsgfSAqL1xuLyogYmFja2dyb3VuZC1jb2xvcjogY29sb3IoZGFya2dyZXkpICovXG4vKiBEZWZpbmVzIEEgTWFwIG9mIE1hcHMgKi9cbi8qIHdlYmtpdCBtb3ogbXMgKi9cbi8qIER1cGxpY2F0ZSBTdHlsaW5nIEZvciBFYWNoIFRoZW1lICovXG4vKiBEdXBsaWNhdGUgU3R5bGluZyBGb3IgRWFjaCBUaGVtZSBPbiA6SG9zdCovXG4vKiBAaW5jbHVkZSBicmVha3BvaW50cyh0YWJsZXQtd2lkZSkgeyBwYWRkaW5nLXRvcDogNHJlbTt9ICovXG4vKiBAaW5jbHVkZSBwcmVmaXhlcygoICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLCB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOTBweCkgICkpICovXG4vKiBAaW5jbHVkZSB0aGVtZXMoKSB7IGNvbG9yOiB0aGVtZShidXR0b25UZXh0Q29sb3IpOyB9ICovXG4vKiBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcihkYXJrZ3JleSkgKi9cbi8qIERlZmluZXMgQSBNYXAgb2YgTWFwcyAqL1xuLyogd2Via2l0IG1veiBtcyAqL1xuLyogRHVwbGljYXRlIFN0eWxpbmcgRm9yIEVhY2ggVGhlbWUgKi9cbi8qIER1cGxpY2F0ZSBTdHlsaW5nIEZvciBFYWNoIFRoZW1lIE9uIDpIb3N0Ki9cbi8qIEBpbmNsdWRlIGJyZWFrcG9pbnRzKHRhYmxldC13aWRlKSB7IHBhZGRpbmctdG9wOiA0cmVtO30gKi9cbi8qIEBpbmNsdWRlIHByZWZpeGVzKCggIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UsIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg5MHB4KSAgKSkgKi9cbmh0bWwsIGJvZHkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbjpob3N0LWNvbnRleHQoLnRoZW1lLWxpZ2h0KSAudGhlbWUtdGV4dCB7XG4gIGNvbG9yOiAjMzIzMjMyO1xufVxuOmhvc3QtY29udGV4dCgudGhlbWUtZGFyaykgLnRoZW1lLXRleHQge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuOmhvc3QtY29udGV4dCgudGhlbWUtbGlnaHQpIC50aGVtZS1idXR0b24ge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjMzIzMjMyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyO1xufVxuOmhvc3QtY29udGV4dCgudGhlbWUtZGFyaykgLnRoZW1lLWJ1dHRvbiB7XG4gIGNvbG9yOiAjMzIzMjMyO1xuICBib3JkZXItY29sb3I6ICNmZmMxMDc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XG59XG46aG9zdC1jb250ZXh0KC50aGVtZS1saWdodCkgLnRoZW1lLWJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICMyNTI1MjU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTI1MjU7XG59XG46aG9zdC1jb250ZXh0KC50aGVtZS1kYXJrKSAudGhlbWUtYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICMzMjMyMzI7XG4gIGJvcmRlci1jb2xvcjogI2VkYjEwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkYjEwMDtcbn1cblxuOmhvc3QtY29udGV4dCgudGhlbWUtbGlnaHQpIC50aGVtZS1idXR0b24tb3V0bGluZSB7XG4gIGNvbG9yOiAjMzIzMjMyO1xuICBib3JkZXItY29sb3I6ICMzMjMyMzI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuOmhvc3QtY29udGV4dCgudGhlbWUtZGFyaykgLnRoZW1lLWJ1dHRvbi1vdXRsaW5lIHtcbiAgY29sb3I6ICNmZmMxMDc7XG4gIGJvcmRlci1jb2xvcjogI2ZmYzEwNztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG46aG9zdC1jb250ZXh0KC50aGVtZS1saWdodCkgLnRoZW1lLWJ1dHRvbi1vdXRsaW5lOmhvdmVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogIzMyMzIzMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMjtcbn1cbjpob3N0LWNvbnRleHQoLnRoZW1lLWRhcmspIC50aGVtZS1idXR0b24tb3V0bGluZTpob3ZlciB7XG4gIGNvbG9yOiAjMzIzMjMyO1xuICBib3JkZXItY29sb3I6ICNmZmMxMDc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XG59XG5cbi50b2dnbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMjRweDtcbiAgbWFyZ2luOiAwIDMwcHg7XG59XG4udG9nZ2xlIGlucHV0IHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cbi50b2dnbGUgaW5wdXQ6Y2hlY2tlZCB+IHNwYW46YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbn1cbi50b2dnbGUgc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjMyMzI7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgLW8tdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cbjpob3N0LWNvbnRleHQoLnRoZW1lLWxpZ2h0KSAudG9nZ2xlIHNwYW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyO1xufVxuOmhvc3QtY29udGV4dCgudGhlbWUtZGFyaykgLnRvZ2dsZSBzcGFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcbn1cbi50b2dnbGUgc3BhbjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGxlZnQ6IDRweDtcbiAgYm90dG9tOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICAtby10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuOmhvc3QtY29udGV4dCgudGhlbWUtbGlnaHQpIC50b2dnbGUgc3BhbjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuOmhvc3QtY29udGV4dCgudGhlbWUtZGFyaykgLnRvZ2dsZSBzcGFuOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjMyMzI7XG59XG4udG9nZ2xlIC50b2dnbGUtaWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGhlaWdodDogMjRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTZweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLnRvZ2dsZSAudG9nZ2xlLWljb246YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbi50b2dnbGUgLnRvZ2dsZS1pY29uLWxlZnQge1xuICBjb2xvcjogI2ZmYzEwNztcbiAgbGVmdDogLTUwJTtcbn1cbi50b2dnbGUgLnRvZ2dsZS1pY29uLXJpZ2h0IHtcbiAgcmlnaHQ6IC01MCU7XG59XG5cbi5jbGlja2FibGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4udGhlbWUtbGlnaHQgOmhvc3Qge1xuICBjb2xvcjogIzMyMzIzMjtcbn1cbi50aGVtZS1kYXJrIDpob3N0IHtcbiAgY29sb3I6ICNmZmZmZmY7XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3N0eWxlcyc7XHJcblxyXG46aG9zdHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBAaW5jbHVkZSB0aGVtZXNIb3N0KCkge1xyXG4gICAgY29sb3I6IHRoZW1lKHRleHRDb2xvcik7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/modules/swarm/components/swarm/swarm.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/swarm/components/swarm/swarm.component.ts ***!
  \*******************************************************************/
/*! exports provided: SwarmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwarmComponent", function() { return SwarmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_coremanager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/coremanager */ "./src/app/modules/swarm/classes/coremanager.ts");
/* harmony import */ var _classes_vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @classes/vector */ "./src/app/classes/vector.ts");
/* harmony import */ var _classes_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @classes/theme */ "./src/app/classes/theme.ts");
/* harmony import */ var _classes_sketch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @classes/sketch */ "./src/app/classes/sketch.ts");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! p5 */ "./node_modules/p5/lib/p5.js");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_6__);







var SwarmComponent = /** @class */ (function () {
    function SwarmComponent() {
    }
    SwarmComponent.prototype.ngOnInit = function () {
        this.initP5Sketch();
    };
    SwarmComponent.prototype.ngOnDestroy = function () {
        _classes_sketch__WEBPACK_IMPORTED_MODULE_5__["Sketch"].p5.remove();
    };
    // Initialize P5 Sketch
    SwarmComponent.prototype.initP5Sketch = function () {
        var _this = this;
        var sketch = function (p5sketch) {
            _classes_sketch__WEBPACK_IMPORTED_MODULE_5__["Sketch"].p5 = p5sketch;
            var canvas;
            var windowOffset;
            var mouseDown;
            var mouseOrigin;
            // Setup P5 js
            p5sketch.setup = function () {
                windowOffset = 100;
                mouseDown = false;
                canvas = p5sketch.createCanvas(p5sketch.windowWidth, p5sketch.windowHeight - windowOffset);
                canvas.mousePressed(canvasMousePressed);
                canvas.mouseReleased(canvasMouseReleased);
                canvas.mouseWheel(canvasMouseWheel);
                // Core Manager
                _this.coreManager = new _classes_coremanager__WEBPACK_IMPORTED_MODULE_2__["CoreManager"]();
                _this.coreManager.addCore({ sizeX: 150, sizeY: 30, posX: 200, posY: 500, strandCount: 15 });
                _this.coreManager.addCore({ sizeX: 30, sizeY: 120, posX: 80, posY: 340, strandCount: 15 });
                _this.coreManager.addCore({ sizeX: 150, posX: 325, posY: 275, strandCount: 40, square: false });
                _this.coreManager.addCore({ sizeX: 40, posX: 500, posY: 100, strandCount: 10, square: false });
            };
            // Draw P5 js
            p5sketch.draw = function () {
                // Resize Canvas - Responsive
                if (canvas.width !== p5sketch.windowWidth || canvas.height !== p5sketch.windowHeight - windowOffset) {
                    p5sketch.resizeCanvas(p5sketch.windowWidth, p5sketch.windowHeight - windowOffset);
                }
                // Draw Background
                p5sketch.background(_classes_theme__WEBPACK_IMPORTED_MODULE_4__["Theme"].bgColor.x, _classes_theme__WEBPACK_IMPORTED_MODULE_4__["Theme"].bgColor.y, _classes_theme__WEBPACK_IMPORTED_MODULE_4__["Theme"].bgColor.z);
                _this.coreManager.display();
                if (mouseDown && _classes_sketch__WEBPACK_IMPORTED_MODULE_5__["Sketch"].p5.mouseIsPressed) {
                    _this.coreManager.moveCoreByMousePosition(mouseOrigin, new _classes_vector__WEBPACK_IMPORTED_MODULE_3__["Vector"]({ x: _classes_sketch__WEBPACK_IMPORTED_MODULE_5__["Sketch"].p5.mouseX, y: _classes_sketch__WEBPACK_IMPORTED_MODULE_5__["Sketch"].p5.mouseY }));
                }
                _classes_sketch__WEBPACK_IMPORTED_MODULE_5__["Sketch"].showFPS();
            };
            var canvasMousePressed = function () {
                mouseDown = true;
                mouseOrigin = new _classes_vector__WEBPACK_IMPORTED_MODULE_3__["Vector"]({ x: _classes_sketch__WEBPACK_IMPORTED_MODULE_5__["Sketch"].p5.mouseX, y: _classes_sketch__WEBPACK_IMPORTED_MODULE_5__["Sketch"].p5.mouseY });
                _this.coreManager.setMovable(mouseDown, mouseOrigin);
            };
            var canvasMouseReleased = function () {
                mouseDown = false;
                _this.coreManager.setMovable(mouseDown, null);
            };
            var canvasMouseWheel = function (event) {
                var scrollSize = event.deltaY < 0 ? -10 : 10; // Move In Increments of 10
                _this.coreManager.resizeCores(scrollSize);
            };
        };
        var p = new p5__WEBPACK_IMPORTED_MODULE_6___default.a(sketch, 'canvas-container');
    };
    SwarmComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-swarm',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./swarm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/swarm/components/swarm/swarm.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./swarm.component.scss */ "./src/app/modules/swarm/components/swarm/swarm.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SwarmComponent);
    return SwarmComponent;
}());



/***/ }),

/***/ "./src/app/modules/swarm/swarm-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/swarm/swarm-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SwarmRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwarmRoutingModule", function() { return SwarmRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_swarm_swarm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/swarm/swarm.component */ "./src/app/modules/swarm/components/swarm/swarm.component.ts");




var routes = [{ path: '', component: _components_swarm_swarm_component__WEBPACK_IMPORTED_MODULE_3__["SwarmComponent"] }];
var SwarmRoutingModule = /** @class */ (function () {
    function SwarmRoutingModule() {
    }
    SwarmRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SwarmRoutingModule);
    return SwarmRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/swarm/swarm.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/swarm/swarm.module.ts ***!
  \***********************************************/
/*! exports provided: SwarmModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwarmModule", function() { return SwarmModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _swarm_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./swarm-routing.module */ "./src/app/modules/swarm/swarm-routing.module.ts");
/* harmony import */ var _components_swarm_swarm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/swarm/swarm.component */ "./src/app/modules/swarm/components/swarm/swarm.component.ts");





var SwarmModule = /** @class */ (function () {
    function SwarmModule() {
    }
    SwarmModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_swarm_swarm_component__WEBPACK_IMPORTED_MODULE_4__["SwarmComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _swarm_routing_module__WEBPACK_IMPORTED_MODULE_3__["SwarmRoutingModule"]
            ]
        })
    ], SwarmModule);
    return SwarmModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-swarm-swarm-module.js.map