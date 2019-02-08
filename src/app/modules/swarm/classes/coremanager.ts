import {Vector} from '@app/classes/vector';
import {Core} from './core';
import {Sketch} from '@app/classes/sketch';

export class CoreManager {


  constructor() {
    this.cores = [];
  }
  public cores: Core[];

  // Remove Strand From A Single Core
  static removeStrandFromCore(core, strandToRemove) {
    core.strands = core.strands.filter((strand) => {
      return strand !== strandToRemove;
    });
  }

  // Add Strand To A Single Core
  static addStrandToCore(core, strandToAdd) {
    core.strands.push(strandToAdd);
  }

  // Display All Cores & Strands
  display() {
    this.cores.forEach((core) => {
      core.display();
      core.strands.forEach((strand) => {
        const pos = strand.getPotentialPosition();
        if (pos != null) {
          this.setStrandCore(core, strand, pos);
        }
        strand.display();
      });
    });
  }

  // Add Core To Array of Cores
  addCore({sizeX = 0, sizeY = 0, posX = 0, posY = 0, square = true, strandCount = 0}) {
    if (!square) {
      sizeY = sizeX;
    }
    const size = new Vector({x: sizeX, y: sizeY});
    const position = new Vector({x: posX, y: posY});
    this.cores.push(new Core({strandCount: strandCount, size: size, position: position, square: square}));
  }

  // Set Strand Core To The First Core That Its Not Outside Of or Teleport Back To Original Core If Outside All
  setStrandCore(core, strand, pos) {
    let outsideCoreCount = 0;

    for (let i = 0; i < this.cores.length; i++) {
      if (!this.cores[i].isPositionOutsideOfCore(pos)) {
        strand.move();
        if (this.cores[i] !== core) {
          CoreManager.addStrandToCore(this.cores[i], strand);
          CoreManager.removeStrandFromCore(core, strand);
        }
        break;
      } else { outsideCoreCount++; }
    }
    if (outsideCoreCount === this.cores.length) {// Outside All Cores
      if (core.movable) {// Core Was Moving Which Is Why Its Outside So Return To Home Core
        strand.position = core.getPositionInsideCore();
      } else { strand.randomizeSpeed(); }// TODO : FIX CODE - BUGGY SHOULD ONLY DO IF MOVEMENT OF MOUSE SPEED IS HIGH
    }
  }

  // Set Core To Movable If Mouse Position Is Inside Core
  setMovable(movable, position) {
    this.cores.forEach((core) => {
      if (movable && !core.isPositionOutsideOfCore(position)) {
        core.movable = true;
      } else {
        core.movable = false;
        core.origin = new Vector(core.position);
      }
    });
  }

  // Move Core Position Based on Mouse
  moveCoreByMousePosition(origin, position) {
    this.cores.forEach((core) => {
      if (core.movable) {
        const xDelta = position.x - origin.x;
        const yDelta = position.y - origin.y;
        core.position = new Vector({x: core.origin.x + xDelta, y: core.origin.y + yDelta});
      }
    });
  }

  // Resize Cores Based On Mouse
  resizeCores(scrollSize) {
    this.cores.forEach((core) => {
      if (core.movable) {
        const newSize = new Vector({x: core.size.x + scrollSize, y: core.size.y + scrollSize});
        if (newSize.x > 20 && newSize.x < Sketch.p5.width / 2 && newSize.y > 20 && newSize.y < Sketch.p5.height / 2) {
          core.size = newSize;
        }
      }
    });

  }


}

