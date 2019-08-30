import {Component, OnDestroy, OnInit} from '@angular/core';
import {Sketch} from '@classes/sketch';
import {Theme} from '@classes/theme';
import {Vector} from '@classes/vector';
import {MazeStrand} from '@app/modules/swarm/classes/maze-strand';
import {Maze} from '@app/modules/swarm/classes/maze';
import p5 from 'p5';

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
        player = new MazeStrand({
          size: new Vector({x: maze.cellSize / 2}),
          speed: new Vector({x: 3, y: 3}),
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
        const newPlayerPosition = player.move();
        if (maze.playerCanMove(newPlayerPosition)) {
          player.position = newPlayerPosition;
        }
        player.display();
        maze.display();
        showFPS();
      };

      const showFPS = () => {
        const fps = Sketch.p5.frameRate();
        Sketch.p5.fill(255);
        Sketch.p5.stroke(0);
        Sketch.p5.text('FPS: ' + fps.toFixed(2), 10, Sketch.p5.height - 10);
      };
    };

    const p = new p5(sketch, 'canvas-container');
  }
}
