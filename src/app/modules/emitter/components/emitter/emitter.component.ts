import {Component, OnDestroy, OnInit} from '@angular/core';
import { Emitter } from '../../classes/emitter';
import { Vector } from '@app/classes/vector';
import { Theme } from '@app/classes/theme';
import { Sketch } from '@app/classes/sketch';
let _self: EmitterComponent;
declare let p5: any;

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.scss']
})
export class EmitterComponent implements OnInit, OnDestroy {
  public emitter: Emitter;
  private emissionCount: number;

  constructor() {
    _self = this;
    this.emissionCount = 500;
  }

  ngOnInit() {
    this.initP5Sketch();
  }

  ngOnDestroy() {
    Sketch.p5.remove();
  }

  // On Emission Count Changed
  emissionCountChanged($event: any) {
    this.emitter.setEmissionsCount($event.target.value);
  }

   // Initialize P5 Sketch
    initP5Sketch(): void {
        const sketch = function(p5sketch) {
          Sketch.p5 = p5sketch;
          let canvas;
          let windowOffset;
          let mouseDown;

          // Setup P5 js
          p5sketch.setup = function() {
                windowOffset = 100;
                mouseDown = false;
                _self.emitter = new Emitter({ emissionCount: _self.emissionCount });
                canvas = p5sketch.createCanvas(p5sketch.windowWidth, p5sketch.windowHeight - windowOffset);
                canvas.mousePressed(canvasMousePressed);
          };

          // Draw P5 js
          p5sketch.draw = function() {
            // Resize Canvas - Responsive
            if (canvas.width !== p5sketch.windowWidth || canvas.height !== p5sketch.windowHeight - windowOffset) {
                p5sketch.resizeCanvas(p5sketch.windowWidth, p5sketch.windowHeight - windowOffset);
            }

            // Draw Background
            p5sketch.background(Theme.bgColor.x, Theme.bgColor.y, Theme.bgColor.z);
            _self.emitter.position = new Vector({x : p5sketch.mouseX, y: p5sketch.mouseY}); // Mouse Emitter To Mouse Location
            // _self.emitter.display(); // Display Emissions
          };

          // Press Mouse
          function canvasMousePressed() {
            mouseDown = !mouseDown;
            _self.emitter.active = mouseDown;
            if (mouseDown) {
              _self.emitter.emit();
            }
          }
        };

      const p = new p5(sketch, 'canvas-container');
    }

}
