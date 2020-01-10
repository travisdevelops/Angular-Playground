import {Component, OnDestroy, OnInit} from '@angular/core';
import { Vector } from '@classes/vector';
import { Theme } from '@classes/theme';
import { Sketch } from '@classes/sketch';
import p5 from 'p5';
import {StrandContainerManager} from '@app/modules/swarm/classes/strand-container-manager';
import {text} from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-swarm',
  templateUrl: './swarm.component.html',
  styleUrls: ['./swarm.component.scss']
})
export class SwarmComponent implements OnInit, OnDestroy {
  private strandContainerManager: StrandContainerManager;
  private wallCreationAlgorithm: {col: number, row: number, top?: boolean, bottom?: boolean, right?: boolean, left?: boolean}[];

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

        // Strand Container Manager
        this.strandContainerManager = new StrandContainerManager();
        this.strandContainerManager.addStrandContainer({ sizeX: 150, sizeY: 30, posX: 200, posY: 500, strandCount: 15,
          color: new Vector({x: 188, y: 254, z: 0})});
        this.strandContainerManager.addStrandContainer({ sizeX: 30, sizeY: 120, posX: 80, posY: 340, strandCount: 15,
          color: new Vector({x: 159, y: 32, z: 66}) });
        this.strandContainerManager.addStrandContainer({ sizeX: 150, posX: 325, posY: 275, strandCount: 40,
          color: new Vector({x: 188, y: 254, z: 0}), square: false });
        this.strandContainerManager.addStrandContainer({ sizeX: 40, posX: 500, posY: 100, strandCount: 10,
          color: new Vector({x: 188, y: 254, z: 0}), square: false });

        this.wallCreationAlgorithm = [
          {col: 1, row: 0, left: true, right: true},
          {col: 0, row: 1, top: true, bottom: true},
          {col: 1, row: 3, left: true, right: true},
          {col: 1, row: 3, left: true, right: true},
          {col: 1, row: 4, left: true, bottom: true},
          {col: 2, row: 1, left: true, right: true},
          {col: 2, row: 2, left: true, right: true},
          {col: 2, row: 4, bottom: true, top: true},
          {col: 3, row: 0, left: true, right: true},
          {col: 3, row: 2, bottom: true, right: true},
          {col: 3, row: 4, top: true, bottom: true},
          {col: 4, row: 1, left: true, right: true},
          {col: 4, row: 3, bottom: true, right: true},
          {col: 4, row: 4, bottom: true},
          {col: 5, row: 0, left: true, right: true},
          {col: 5, row: 2, left: true, right: true},
          {col: 5, row: 4, bottom: true, right: true},
          {col: 6, row: 1, left: true},
          {col: 6, row: 3, bottom: true, top: true}
          ];
      };

      // Draw P5 js
      p5sketch.draw = () => {
        // Resize Canvas - Responsive
        if (canvas.width !== p5sketch.windowWidth || canvas.height !== p5sketch.windowHeight - windowOffset) {
          p5sketch.resizeCanvas(p5sketch.windowWidth, p5sketch.windowHeight - windowOffset);
        }

        // Draw Background
        p5sketch.background(Theme.bgColor.x, Theme.bgColor.y, Theme.bgColor.z);
        this.strandContainerManager.display();

        if (mouseDown && Sketch.p5.mouseIsPressed) {
          this.strandContainerManager.moveStrandContainerByMousePosition(mouseOrigin, new Vector({x: Sketch.p5.mouseX, y: Sketch.p5.mouseY}));
        }

        const gridSpacing = 120;
        const color = new Vector({x: 159, y: 32, z: 66});
        const origin = new Vector({x: 600, y: 0});
        const debug = true;
        this.wallCreationAlgorithm.forEach((wall) => {
          Sketch.p5.noFill();
          Sketch.p5.strokeWeight(5);
          Sketch.p5.stroke(color.x, color.y, color.z);
          Sketch.p5.beginShape(Sketch.p5.LINES);
          const position = new Vector({x: origin.x + (gridSpacing * wall.col), y: origin.y + (gridSpacing * wall.row)});
          if (wall.top) {
            Sketch.p5.vertex(position.x, position.y);
            Sketch.p5.vertex(position.x + gridSpacing, position.y);
          }
          if (wall.right) {
            Sketch.p5.vertex(position.x + gridSpacing, position.y);
            Sketch.p5.vertex(position.x + gridSpacing, position.y + gridSpacing);
          }
          if (wall.bottom) {
            Sketch.p5.vertex(position.x, position.y + gridSpacing);
            Sketch.p5.vertex(position.x + gridSpacing, position.y + gridSpacing);
          }
          if (wall.left) {
            Sketch.p5.vertex(position.x, position.y);
            Sketch.p5.vertex(position.x, position.y + gridSpacing);
          }
          Sketch.p5.endShape();
          if (debug) {
            Sketch.p5.strokeWeight(1);
            const textOffset = 5;
            if (wall.top) {
              Sketch.p5.textAlign(Sketch.p5.CENTER, Sketch.p5.TOP);
              Sketch.p5.text('Top', position.x + (gridSpacing / 2), position.y + textOffset);
            }
            if (wall.right) {
              Sketch.p5.textAlign(Sketch.p5.RIGHT, Sketch.p5.CENTER);
              Sketch.p5.text('Right', position.x + gridSpacing - textOffset, position.y + (gridSpacing / 2));
            }
            if (wall.bottom) {
              Sketch.p5.textAlign(Sketch.p5.CENTER, Sketch.p5.BOTTOM);
              Sketch.p5.text('Bottom', position.x + (gridSpacing / 2), position.y + gridSpacing - textOffset + 2);
            }
            if (wall.left) {
              Sketch.p5.textAlign(Sketch.p5.LEFT, Sketch.p5.CENTER);
              Sketch.p5.text('Left', position.x + textOffset, position.y + (gridSpacing / 2));
            }
            Sketch.p5.textAlign(Sketch.p5.CENTER, Sketch.p5.CENTER);
            Sketch.p5.text('(' + wall.col + ',' + wall.row + ')', position.x + (gridSpacing / 2), position.y + (gridSpacing / 2));
          }
        });
        Sketch.showFPS();
      };

      const canvasMousePressed = () => {
        mouseDown = true;
        mouseOrigin = new Vector({x: Sketch.p5.mouseX, y: Sketch.p5.mouseY});
        this.strandContainerManager.setMovable(mouseDown, mouseOrigin);
      };

      const canvasMouseReleased = () => {
        mouseDown = false;
        this.strandContainerManager.setMovable(mouseDown, null);
      };

      const canvasMouseWheel = (event) => {
        const scrollSize = event.deltaY < 0 ? -10 : 10; // Move In Increments of 10
        this.strandContainerManager.resizeStrandContainers(scrollSize);
      };

    };

    const p = new p5(sketch, 'canvas-container');
  }
}
