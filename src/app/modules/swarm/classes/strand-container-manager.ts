import {Vector} from '@classes/vector';
import {StrandContainer} from './strand-container';
import {Sketch} from '@classes/sketch';

export class StrandContainerManager {


  constructor() {
    this.strandContainers = [];
  }
  public strandContainers: StrandContainer[];

  // Remove Strand From A Single Strand Container
  static removeStrandFromStrandContainer(strandContainer, strandToRemove) {
    strandContainer.strands = strandContainer.strands.filter((strand) => {
      return strand !== strandToRemove;
    });
  }

  // Add Strand To A Single Strand Container
  static addStrandToStrandContainer(strandContainer, strandToAdd) {
    strandContainer.strands.push(strandToAdd);
  }

  // Display All Strand Containers & Strands
  display() {
    this.strandContainers.forEach((strandContainer) => {
      strandContainer.display();
      strandContainer.strands.forEach((strand) => {
        const pos = strand.getPotentialPosition();
        if (pos != null) {
          this.setStrandStrandContainer(strandContainer, strand, pos);
        }
        strand.display();
      });
    });
  }

  // Add Strand Container To Array of Strand Containers
  addStrandContainer({sizeX = 0, sizeY = 0, posX = 0, posY = 0, square = true, color = new Vector(), strandCount = 0}) {
    if (!square) {
      sizeY = sizeX;
    }
    const size = new Vector({x: sizeX, y: sizeY});
    const position = new Vector({x: posX, y: posY});
    this.strandContainers.push(new StrandContainer({strandCount: strandCount, size: size, position: position, color: color, square: square}));
  }

  // Set Strand Strand Container To The First Strand Container That Its Not Outside Of or Teleport Back To Original Strand Container If Outside All
  setStrandStrandContainer(strandContainer, strand, pos) {
    let outsideStrandContainerCount = 0;

    for (let i = 0; i < this.strandContainers.length; i++) {
      if (!this.strandContainers[i].isPositionOutsideOfStrandContainer(pos)) {
        strand.move();
        if (this.strandContainers[i] !== strandContainer) {
          StrandContainerManager.addStrandToStrandContainer(this.strandContainers[i], strand);
          StrandContainerManager.removeStrandFromStrandContainer(strandContainer, strand);
        }
        break;
      } else { outsideStrandContainerCount++; }
    }
    if (outsideStrandContainerCount === this.strandContainers.length) {// Outside All Strand Containers
      if (strandContainer.movable) {// Strand Container Was Moving Which Is Why Its Outside So Return To Home Strand Container
        strand.tails = [];
        strand.position = strandContainer.getPositionInsideStrandContainer();
      } else { strand.randomizeSpeed(); }
    }
  }

  // Set StrandContainer To Movable If Mouse Position Is Inside StrandContainer
  setMovable(movable, position) {
    this.strandContainers.forEach((strandContainer) => {
      if (movable && !strandContainer.isPositionOutsideOfStrandContainer(position)) {
        strandContainer.movable = true;
      } else {
        strandContainer.movable = false;
        strandContainer.origin = new Vector(strandContainer.position);
      }
    });
  }

  // Move StrandContainer Position Based on Mouse
  moveStrandContainerByMousePosition(origin, position) {
    this.strandContainers.forEach((strandContainer) => {
      if (strandContainer.movable) {
        const xDelta = position.x - origin.x;
        const yDelta = position.y - origin.y;
        strandContainer.position = new Vector({x: strandContainer.origin.x + xDelta, y: strandContainer.origin.y + yDelta});
      }
    });
  }

  // Resize StrandContainers Based On Mouse
  resizeStrandContainers(scrollSize) {
    this.strandContainers.forEach((strandContainer) => {
      if (strandContainer.movable) {
        const newSize = new Vector({x: strandContainer.size.x + scrollSize, y: strandContainer.size.y + scrollSize});
        if (newSize.x > 20 && newSize.x < Sketch.p5.width / 2 && newSize.y > 20 && newSize.y < Sketch.p5.height / 2) {
          strandContainer.size = newSize;
        }
      }
    });

  }


}

