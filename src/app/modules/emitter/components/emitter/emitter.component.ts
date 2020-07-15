import {Component, OnDestroy, OnInit} from '@angular/core';
import { Emitter } from '../../classes/emitter';
import { Vector } from '@classes/vector';
import { Theme } from '@classes/theme';
import { Sketch } from '@classes/sketch';
import p5 from 'p5';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.scss']
})
export class EmitterComponent implements OnInit, OnDestroy {
  public emitter: Emitter;

  constructor() {
    this.emitter = new Emitter();
  }

  ngOnInit() {
    this.initP5Sketch();
  }

  ngOnDestroy() {
    Sketch.p5.remove();
  }

   // Initialize P5 Sketch
    initP5Sketch(): void {
        const sketch = (p5sketch) => {
          Sketch.p5 = p5sketch;
          let canvas;
          let windowOffset;
          let mouseDown;

          // Press Mouse
          const canvasMousePressed = () => {
            mouseDown = !mouseDown;
            this.emitter.active = mouseDown;
            if (mouseDown) {
              this.emitter.emit();
            }
          };

          const mouseWheel = (event: WheelEvent) => {
            if (event.deltaY < 0) { // Wheel Scroll Up
              if (this.emitter.maxParticles > 50) {
                this.emitter.maxParticles -= 10;
              }
            }
            if (event.deltaY > 0) { // Wheel Scroll Down
              if (this.emitter.maxParticles < 700) {
                this.emitter.maxParticles += 10;
              }
            }
          };

          // Setup P5 js
          p5sketch.setup = () => {
                windowOffset = 100;
                mouseDown = false;
                this.emitter = new Emitter();
                canvas = p5sketch.createCanvas(p5sketch.windowWidth, p5sketch.windowHeight - windowOffset);
                canvas.mousePressed(canvasMousePressed);
                canvas.mouseWheel(mouseWheel);
          };

          // Draw P5 js
          p5sketch.draw = () => {
            // Resize Canvas - Responsive
            if (canvas.width !== p5sketch.windowWidth || canvas.height !== p5sketch.windowHeight - windowOffset) {
                p5sketch.resizeCanvas(p5sketch.windowWidth, p5sketch.windowHeight - windowOffset);
            }

            // Draw Background
            p5sketch.background(Theme.bgColor.x, Theme.bgColor.y, Theme.bgColor.z);
            this.emitter.position = new Vector({x : p5sketch.mouseX, y: p5sketch.mouseY}); // Mouse Emitter To Mouse Location
            this.emitter.display(); // Display Emissions
          };
        };

      const p = new p5(sketch, 'canvas-container');
    }

}
