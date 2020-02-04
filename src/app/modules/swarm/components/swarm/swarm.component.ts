import {Component, OnDestroy, OnInit} from '@angular/core';
import { Vector } from '@classes/vector';
import { Theme } from '@classes/theme';
import { Sketch } from '@classes/sketch';
import p5 from 'p5';
import {StrandContainerManager} from '@app/modules/swarm/classes/strand-container-manager';
import {MazeCellManager} from '@app/modules/swarm/classes/maze-cell-manager';

@Component({
  selector: 'app-swarm',
  templateUrl: './swarm.component.html',
  styleUrls: ['./swarm.component.scss']
})
export class SwarmComponent implements OnInit, OnDestroy {
  private strandContainerManager: StrandContainerManager;
  private mazeCellManager: MazeCellManager;

  constructor() {}

  ngOnInit() {
    this.initP5Sketch();
  }

  ngOnDestroy() {
    Sketch.reset();
  }

  // Initialize P5 Sketch
  initP5Sketch(): void {
    const sketch = (p5sketch) => {
      Sketch.p5 = p5sketch;

      // Setup P5 js
      p5sketch.setup = () => {
        Sketch.windowOffset = 100;
        Sketch.canvas = p5sketch.createCanvas(0, 0);
        // Strand Containers
        this.strandContainerManager = new StrandContainerManager();
        /*this.strandContainerManager.addStrandContainer({ size: new Vector({x: 150, y: 30}),
          position: new Vector({x: 200, y: 500}), strandCount: 15, color: new Vector({x: 188, y: 254, z: 0}) });
        this.strandContainerManager.addStrandContainer({ size: new Vector({x: 30, y: 120}),
          position: new Vector({x: 80, y: 340}), strandCount: 15, color: new Vector({x: 159, y: 32, z: 66}) });
        this.strandContainerManager.addStrandContainer({ size: new Vector({x: 150}),
          position: new Vector({x: 325, y: 275}), strandCount: 40, color: new Vector({x: 188, y: 254, z: 0}), square: false });
        this.strandContainerManager.addStrandContainer({ size: new Vector({x: 60 }),
          position: new Vector({x: 500, y: 100}), strandCount: 10, color: new Vector({x: 159, y: 32, z: 66}), square: false });*/

        // Maze Cell Manager
        this.mazeCellManager = new MazeCellManager({position: new Vector({x: 100, y: 10}), color: new Vector({x: 159, y: 32, z: 66}),
          debug: true });
        this.mazeCellManager.addMazeCell({col: 0, row: 1, top: true, bottom: true, left: true });
        this.mazeCellManager.addMazeCell({col: 1, row: 0, top: true, left: true });
        this.mazeCellManager.addMazeCell({col: 1, row: 2, left: true});
        this.mazeCellManager.addMazeCell({col: 1, row: 3, left: true, right: true});
        this.mazeCellManager.addMazeCell({col: 1, row: 4, left: true, bottom: true});
        this.mazeCellManager.addMazeCell({col: 2, row: 0, top: true, right: true});
        this.mazeCellManager.addMazeCell({col: 2, row: 1, left: true, right: true});
        this.mazeCellManager.addMazeCell({col: 2, row: 2, left: true, right: true});
        this.mazeCellManager.addMazeCell({col: 2, row: 4, bottom: true, top: true});
        this.mazeCellManager.addMazeCell({col: 3, row: 2, bottom: true, right: true});
        this.mazeCellManager.addMazeCell({col: 3, row: 4, top: true, bottom: true});
        this.mazeCellManager.addMazeCell({col: 4, row: 0, top: true, left: true});
        this.mazeCellManager.addMazeCell({col: 4, row: 1, left: true, right: true});
        this.mazeCellManager.addMazeCell({col: 4, row: 3, bottom: true, right: true});
        this.mazeCellManager.addMazeCell({col: 4, row: 4, bottom: true});
        this.mazeCellManager.addMazeCell({col: 5, row: 0, top: true, right: true});
        this.mazeCellManager.addMazeCell({col: 5, row: 1, right: true});
        this.mazeCellManager.addMazeCell({col: 5, row: 2, left: true, right: true});
        this.mazeCellManager.addMazeCell({col: 5, row: 4, bottom: true, right: true});
        this.mazeCellManager.addMazeCell({col: 6, row: 3, bottom: true, top: true, right: true});

      // Fake Cells
        this.mazeCellManager.addMazeCell({col: 1, row: 1});
        this.mazeCellManager.addMazeCell({col: 2, row: 3});
        this.mazeCellManager.addMazeCell({col: 3, row: 3});
        this.mazeCellManager.addMazeCell({col: 5, row: 3});

        // Strand Entrances
        // this.mazeCellManager.addSpawnPoint({col: 0, row: 1});
        this.mazeCellManager.addSpawnPoint({col: 6, row: 3});
        // this.mazeCellManager.addSpawnPoint({col: 3, row: 3});

        this.mazeCellManager.createStrands(1, new Vector({x: 188, y: 254, z: 0}));
        this.mazeCellManager.createAttackers(1, new Vector({x: 226, y: 112, z: 58}));
      };

      // Draw P5 js
      p5sketch.draw = () => {
        Sketch.draw();
        this.strandContainerManager.display();
        this.mazeCellManager.display();
      };
    };

    const p = new p5(sketch, 'canvas-container');
  }
}
