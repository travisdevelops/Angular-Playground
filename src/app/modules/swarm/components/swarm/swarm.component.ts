import {Component, OnDestroy, OnInit} from '@angular/core';
import { Vector } from '@classes/vector';
import { Theme } from '@classes/theme';
import { Sketch } from '@classes/sketch';
import p5 from 'p5';
import {StrandContainerManager} from '@app/modules/swarm/classes/strand-container-manager';
import {WallManager} from '@app/modules/swarm/classes/wall-manager';

@Component({
  selector: 'app-swarm',
  templateUrl: './swarm.component.html',
  styleUrls: ['./swarm.component.scss']
})
export class SwarmComponent implements OnInit, OnDestroy {
  private strandContainerManager: StrandContainerManager;
  private wallManager: WallManager;

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

      // Setup P5 js
      p5sketch.setup = () => {
        windowOffset = 100;
        canvas = p5sketch.createCanvas(p5sketch.windowWidth, p5sketch.windowHeight - windowOffset);

        // Strand Containers
        this.strandContainerManager = new StrandContainerManager();
        this.strandContainerManager.addStrandContainer({ size: new Vector({x: 150, y: 30}),
          position: new Vector({x: 200, y: 500}), strandCount: 15, color: new Vector({x: 188, y: 254, z: 0}) });
        this.strandContainerManager.addStrandContainer({ size: new Vector({x: 30, y: 120}),
          position: new Vector({x: 80, y: 340}), strandCount: 15, color: new Vector({x: 159, y: 32, z: 66}) });
        this.strandContainerManager.addStrandContainer({ size: new Vector({x: 150}),
          position: new Vector({x: 325, y: 275}), strandCount: 40, color: new Vector({x: 188, y: 254, z: 0}), square: false });
        this.strandContainerManager.addStrandContainer({ size: new Vector({x: 60 }),
          position: new Vector({x: 500, y: 100}), strandCount: 10, color: new Vector({x: 159, y: 32, z: 66}), square: false });

        // Wall Manager
        this.wallManager = new WallManager({position: new Vector({x: 600, y: 0}), color: new Vector({x: 159, y: 32, z: 66}),
          debug: true });
        this.wallManager.addWall({col: 0, row: 0, right: true, bottom: true});
        this.wallManager.addWall({col: 0, row: 1, top: true, bottom: true, left: true });
        this.wallManager.addWall({col: 0, row: 2, top: true, right: true});
        this.wallManager.addWall({col: 1, row: 0, top: true});
        this.wallManager.addWall({col: 1, row: 3, left: true, right: true});
        this.wallManager.addWall({col: 1, row: 3, left: true, right: true});
        this.wallManager.addWall({col: 1, row: 4, left: true, bottom: true});
        this.wallManager.addWall({col: 2, row: 0, top: true});
        this.wallManager.addWall({col: 2, row: 1, left: true, right: true});
        this.wallManager.addWall({col: 2, row: 2, left: true, right: true});
        this.wallManager.addWall({col: 2, row: 4, bottom: true, top: true});
        this.wallManager.addWall({col: 3, row: 0, left: true, right: true});
        this.wallManager.addWall({col: 3, row: 2, bottom: true, right: true});
        this.wallManager.addWall({col: 3, row: 4, top: true, bottom: true});
        this.wallManager.addWall({col: 4, row: 0, top: true});
        this.wallManager.addWall({col: 4, row: 1, left: true, right: true});
        this.wallManager.addWall({col: 4, row: 3, bottom: true, right: true});
        this.wallManager.addWall({col: 4, row: 4, bottom: true});
        this.wallManager.addWall({col: 5, row: 0, top: true});
        this.wallManager.addWall({col: 5, row: 2, left: true, right: true});
        this.wallManager.addWall({col: 5, row: 4, bottom: true, right: true});
        this.wallManager.addWall({col: 6, row: 0, left: true});
        this.wallManager.addWall({col: 6, row: 1, left: true});
        this.wallManager.addWall({col: 6, row: 3, bottom: true, top: true, right: true});

        // Strand Entrances
        this.wallManager.addStrandEntrance({col: 0, row: 1, left: true});

        this.wallManager.createStrands(20, new Vector({x: 188, y: 254, z: 0}));
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
        this.wallManager.display();
        Sketch.showFPS();
      };

    };

    const p = new p5(sketch, 'canvas-container');
  }
}
