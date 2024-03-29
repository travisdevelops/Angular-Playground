import {Component, OnDestroy, OnInit} from '@angular/core';
import { CoreManager } from '../../classes/coremanager';
import { Vector } from '@shared/classes/vector';
import { Theme } from '@shared/classes/theme';
import { Sketch } from '@shared/classes/sketch';
import p5 from 'p5';

@Component({
  selector: 'app-swarm',
  templateUrl: './swarm.component.html',
  styleUrls: ['./swarm.component.scss']
})
export class SwarmComponent implements OnInit, OnDestroy {
  private coreManager: CoreManager;

  constructor() {}

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
      let mouseOrigin;

      // Setup P5 js
      p5sketch.setup = () => {
        windowOffset = 100;
        mouseDown = false;
        canvas = p5sketch.createCanvas(p5sketch.windowWidth, p5sketch.windowHeight - windowOffset);
        canvas.mousePressed(canvasMousePressed);
        canvas.mouseReleased(canvasMouseReleased);
        canvas.mouseWheel(canvasMouseWheel);

        // Core Manager
        this.coreManager = new CoreManager();
        this.coreManager.addCore({ sizeX: 150, sizeY: 30, posX: 200, posY: 70, strandCount: 15 });
        this.coreManager.addCore({ sizeX: 30, sizeY: 120, posX: 80, posY: 340, strandCount: 15 });
        this.coreManager.addCore({ sizeX: 150, posX: 325, posY: 275, strandCount: 40, square: false });
        this.coreManager.addCore({ sizeX: 40, posX: 500, posY: 100, strandCount: 10, square: false });
      };

      // Draw P5 js
      p5sketch.draw = () => {
        // Resize Canvas - Responsive
        if (canvas.width !== p5sketch.windowWidth || canvas.height !== p5sketch.windowHeight - windowOffset) {
          p5sketch.resizeCanvas(p5sketch.windowWidth, p5sketch.windowHeight - windowOffset);
        }

        // Draw Background
        p5sketch.background(Theme.bgColor.x, Theme.bgColor.y, Theme.bgColor.z);
        this.coreManager.display();

        if (mouseDown && Sketch.p5.mouseIsPressed) {
          this.coreManager.moveCoreByMousePosition(mouseOrigin, new Vector({x: Sketch.p5.mouseX, y: Sketch.p5.mouseY}));
        }
        Sketch.showFPS();
      };

      const canvasMousePressed = () => {
        mouseDown = true;
        mouseOrigin = new Vector({x: Sketch.p5.mouseX, y: Sketch.p5.mouseY});
        this.coreManager.setMovable(mouseDown, mouseOrigin);
      };

      const canvasMouseReleased = () => {
        mouseDown = false;
        this.coreManager.setMovable(mouseDown, null);
      };

      const canvasMouseWheel = (event) => {
        const scrollSize = event.deltaY < 0 ? -10 : 10; // Move In Increments of 10
        this.coreManager.resizeCores(scrollSize);
      };

    };

    const p = new p5(sketch, 'canvas-container');
  }
}
