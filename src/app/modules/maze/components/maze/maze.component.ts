import {Component, OnDestroy, OnInit} from '@angular/core';
import {Sketch} from '@classes/sketch';
import {Theme} from '@classes/theme';
import {Vector} from '@classes/vector';
import p5 from 'p5';
import {MazePlayer} from '@app/modules/maze/classes/maze-player';
import {Maze} from '@app/modules/maze/classes/maze';

@Component({
  selector: 'app-maze',
  templateUrl: './maze.component.html',
  styleUrls: ['./maze.component.scss']
})
export class MazeComponent implements OnInit, OnDestroy {

  constructor() { }

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
      let maze;
      let player;

      // Setup P5 js
      p5sketch.setup = () => {
        windowOffset = 100;
        canvas = p5sketch.createCanvas(p5sketch.windowWidth, p5sketch.windowHeight - windowOffset);
        maze = new Maze({
          width: p5sketch.windowWidth,
          height: p5sketch.windowHeight - windowOffset,
          cellSize: 25
        });
        player = new MazePlayer({
          size: new Vector({x: maze.cellSize / 2}),
          speed: new Vector({x: 5, y: 5}),
          position: maze.startPos
        });
      };

      // Draw P5 js
      p5sketch.draw = () => {
        // Resize Canvas - Responsive
        if (canvas.width !== p5sketch.windowWidth || canvas.height !== p5sketch.windowHeight - windowOffset) {
          p5sketch.resizeCanvas(p5sketch.windowWidth, p5sketch.windowHeight - windowOffset);
        }
        // Draw Background
        p5sketch.background(Theme.bgColor.x, Theme.bgColor.y, Theme.bgColor.z);
        player.moveInDirection();
        player.display();
        // maze.display();
        Sketch.showFPS();
      };
    };

    const p = new p5(sketch, 'canvas-container');
  }
}
