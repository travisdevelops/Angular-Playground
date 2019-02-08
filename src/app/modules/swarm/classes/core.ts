import {Vector} from '@app/classes/vector';
import {CanvasObject} from '@app/classes/canvas-object';
import {Strand} from './strand';
import {Sketch} from '@app/classes/sketch';
import {Theme} from '@app/classes/theme';

export class Core extends CanvasObject {
  public strands: Strand[];
  public origin: Vector;
  public square: boolean;
  public movable: boolean;


  constructor({strandCount = 0, size = new Vector(), position = new Vector(), square = true} = {}) {
    super({position: position, size: size});
    this.strands = [];
    this.origin = new Vector(this.position);
    this.square = square;
    this.movable = false;
    this.opacity = 20;
    this.addStrands(strandCount);
  }

  // Display Core
  display() {
    this.color = new Vector({x: Theme.textColor.x, y: Theme.textColor.y, z: Theme.textColor.z});
    Sketch.p5.noStroke();
    Sketch.p5.fill(this.color.x, this.color.y, this.color.z, this.opacity);
    if (!this.square) {
      const size = this.size.x < this.size.y ? this.size.x : this.size.y;
      Sketch.p5.ellipse(this.position.x, this.position.y, size * 2);
    } else { Sketch.p5.rect(this.position.x - this.size.x, this.position.y - this.size.y, this.size.x * 2, this.size.y * 2); }
  }

  // Add Strands To Core
  addStrands(count) {
    for (let i = 0; i < count; i++) {
      const strand = new Strand();
      strand.position = this.getPositionInsideCore();
      this.strands.push(strand);
    }
  }

  // Get Position That Is Inside Core Width/Radius
  getPositionInsideCore() {
    const xRangeL = this.size.x - Sketch.p5.abs(this.position.x);
    const xRangeR = this.size.x + Sketch.p5.abs(this.position.x);
    const yRangeT = this.size.y - Sketch.p5.abs(this.position.y);
    const yRangeB = this.size.y + Sketch.p5.abs(this.position.y);
    const position = new Vector({x: Sketch.p5.random(-xRangeL, xRangeR), y: Sketch.p5.random(-yRangeT, yRangeB)});
    if (this.isPositionOutsideOfCore(position)) {
      return this.getPositionInsideCore();
    }
    return position;
  }

  // Check If Strand Position is Outside of The Width/Radius of A Single Core
  isPositionOutsideOfCore(position) {
    if (this.square) {// Rect
      const topOfCore = position.y < this.position.y - this.size.y;
      const rightOfCore = position.x > this.position.x + this.size.x;
      const bottomOfCore = position.y > this.position.y + this.size.y;
      const leftOfCore = position.x < this.position.x - this.size.x;
      return topOfCore || rightOfCore || bottomOfCore || leftOfCore;
    } else {// Ellipse
      const d = Sketch.p5.dist(position.x, position.y, this.position.x, this.position.y);
      return d > this.size.x;
    }
  }


}

