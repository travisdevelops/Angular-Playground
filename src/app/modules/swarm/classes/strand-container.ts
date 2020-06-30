import {Vector} from '@classes/vector';
import {CanvasObject} from '@classes/canvas-object';
import {Strand} from './strand';
import {Sketch} from '@classes/sketch';
import {Theme} from '@classes/theme';

export class StrandContainer extends CanvasObject {
  public strands: Strand[];
  public origin: Vector;
  public square: boolean;


  constructor({strandCount = 0, size = new Vector(), position = new Vector(), color = new Vector(), square = true} = {}) {
    super({position: position, size: size});
    this.strands = [];
    this.origin = new Vector(this.position);
    this.square = square;
    if (!this.square) {
      this.size.y = this.size.x;
    }
    this.opacity = 20;
    this.createStrands(strandCount, color);
  }

  // Display Strand Container
  display() {
    this.displayContainer();
    this.displayStrands();
  }

  displayContainer() {
    this.color = new Vector({x: Theme.textColor.x, y: Theme.textColor.y, z: Theme.textColor.z});
    Sketch.p5.noStroke();
    Sketch.p5.fill(this.color.x, this.color.y, this.color.z, this.opacity);
    if (!this.square) {
      const size = this.size.x < this.size.y ? this.size.x : this.size.y;
      Sketch.p5.ellipse(this.position.x, this.position.y, size * 2);
    } else {
      Sketch.p5.rect(this.position.x - this.size.x, this.position.y - this.size.y, this.size.x * 2, this.size.y * 2);
    }
  }

  displayStrands() {
    this.strands.forEach((strand) => {
      strand.display();
    });
  }

  // Create Strands And Add To Strand Container
  createStrands(count: number, color: Vector) {
    for (let i = 0; i < count; i++) {
      const strand = new Strand({color: color});
      strand.position = this.getPositionInsideStrandContainer();
      strand.randomizeMovements();
      this.strands.push(strand);
    }
  }

  // Get Position That Is Inside Strand Container Width/Radius
  getPositionInsideStrandContainer() {
    const xRangeL = this.size.x - Sketch.p5.abs(this.position.x);
    const xRangeR = this.size.x + Sketch.p5.abs(this.position.x);
    const yRangeT = this.size.y - Sketch.p5.abs(this.position.y);
    const yRangeB = this.size.y + Sketch.p5.abs(this.position.y);
    const position = new Vector({x: Sketch.p5.random(-xRangeL, xRangeR), y: Sketch.p5.random(-yRangeT, yRangeB)});
    if (this.isPositionOutsideOfStrandContainer(position)) {
      return this.getPositionInsideStrandContainer();
    }
    return position;
  }

  // Check If Strand Position is Outside of The Width/Radius of A Single Strand Container
  isPositionOutsideOfStrandContainer(position) {
    if (this.square) {// Rect
      const topOfStrandContainer = position.y < this.position.y - this.size.y;
      const rightOfStrandContainer = position.x > this.position.x + this.size.x;
      const bottomOfStrandContainer = position.y > this.position.y + this.size.y;
      const leftOfStrandContainer = position.x < this.position.x - this.size.x;
      return topOfStrandContainer || rightOfStrandContainer || bottomOfStrandContainer || leftOfStrandContainer;
    } else {// Ellipse
      const d = Sketch.p5.dist(position.x, position.y, this.position.x, this.position.y);
      return d > this.size.x;
    }
  }

}

