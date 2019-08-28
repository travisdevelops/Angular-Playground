import {Component, OnDestroy, OnInit} from '@angular/core';
import { CoreManager } from '../../classes/coremanager';
import { Vector } from '@classes/vector';
import { Theme } from '@classes/theme';
import { Sketch } from '@classes/sketch';
import p5 from 'p5';

let _self: SwarmComponent;

@Component({
  selector: 'app-swarm',
  templateUrl: './swarm.component.html',
  styleUrls: ['./swarm.component.scss']
})
export class SwarmComponent implements OnInit, OnDestroy {
  private coreManager: CoreManager;

  constructor() {
    _self = this;
  }

  ngOnInit() {
    this.initP5Sketch();
  }

  ngOnDestroy() {
    Sketch.p5.remove();
  }

  // Initialize P5 Sketch
  initP5Sketch(): void {
    const sketch = function(p5sketch) {
      Sketch.p5 = p5sketch;
      let canvas;
      let windowOffset;
      let mouseDown;
      let mouseOrigin;

      // Setup P5 js
      p5sketch.setup = function() {
        windowOffset = 100;
        mouseDown = false;
        canvas = p5sketch.createCanvas(p5sketch.windowWidth, p5sketch.windowHeight - windowOffset);
        canvas.mousePressed(canvasMousePressed);
        canvas.mouseReleased(canvasMouseReleased);
        canvas.mouseWheel(canvasMouseWheel);

        // Core Manager
        _self.coreManager = new CoreManager();
        _self.coreManager.addCore({ sizeX: 150, sizeY: 30, posX: 200, posY: 500, strandCount: 15 });
        _self.coreManager.addCore({ sizeX: 30, sizeY: 120, posX: 80, posY: 340, strandCount: 15 });
        _self.coreManager.addCore({ sizeX: 150, posX: 325, posY: 275, strandCount: 40, square: false });
        _self.coreManager.addCore({ sizeX: 40, posX: 500, posY: 100, strandCount: 10, square: false });
      };

      // Draw P5 js
      p5sketch.draw = function() {
        // Resize Canvas - Responsive
        if (canvas.width !== p5sketch.windowWidth || canvas.height !== p5sketch.windowHeight - windowOffset) {
          p5sketch.resizeCanvas(p5sketch.windowWidth, p5sketch.windowHeight - windowOffset);
        }

        // Draw Background
        p5sketch.background(Theme.bgColor.x, Theme.bgColor.y, Theme.bgColor.z);
        _self.coreManager.display();

        if (mouseDown && Sketch.p5.mouseIsPressed) {
          _self.coreManager.moveCoreByMousePosition(mouseOrigin, new Vector({x: Sketch.p5.mouseX, y: Sketch.p5.mouseY}));
        }
        showFPS();
      };

      function canvasMousePressed() {
        mouseDown = true;
        mouseOrigin = new Vector({x: Sketch.p5.mouseX, y: Sketch.p5.mouseY});
        _self.coreManager.setMovable(mouseDown, mouseOrigin);
      }

      function canvasMouseReleased() {
        mouseDown = false;
        _self.coreManager.setMovable(mouseDown, null);
      }

      function canvasMouseWheel(event) {
        const scrollSize = event.deltaY < 0 ? -10 : 10; // Move In Increments of 10
        _self.coreManager.resizeCores(scrollSize);
      }

      function showFPS() {
        const fps = Sketch.p5.frameRate();
        Sketch.p5.fill(255);
        Sketch.p5.stroke(0);
        Sketch.p5.text('FPS: ' + fps.toFixed(2), 10, Sketch.p5.height - 10);
      }

    };

    const p = new p5(sketch, 'canvas-container');
  }

}
