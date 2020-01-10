import {CanvasObject} from '@classes/canvas-object';
import {Vector} from '@classes/vector';
import {Sketch} from '@classes/sketch';

export class Wall extends CanvasObject {

  constructor({size = new Vector(), position = new Vector(), color = new Vector()} = {}) {
    super({position: position, size: size});
    this.color = color;
    this.size = size;
    this.position = position;
  }

  // Display Strand With Glow
  display() {
  }
}
