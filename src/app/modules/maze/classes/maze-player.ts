import {Vector} from '@classes/vector';
import {Strand} from '@app/modules/swarm/classes/strand';
import {Sketch} from '@classes/sketch';

export class MazePlayer extends Strand {

  constructor({ position = new Vector(), size = new Vector(), speed = new Vector() } = {}) {
    super();
    this.size = size;
    this.speed = speed;
    this.position = position;
  }

  // Implement Max Speed - Arrow Press Down Makes Speed Gradually Increase (Prevents Sharps Turns)
  // Light Up Area Size Proportionate to Speed
  moveInDirection() {
    const newPosition = new Vector(this.position);

    if (Sketch.p5.keyIsDown(Sketch.p5.UP_ARROW) && newPosition.y > 0) {
      newPosition.y -= this.speed.y;
    }
    if (Sketch.p5.keyIsDown(Sketch.p5.LEFT_ARROW) && newPosition.x > 0) {
      newPosition.x -= this.speed.x;
    }
    if (Sketch.p5.keyIsDown(Sketch.p5.DOWN_ARROW) && newPosition.y < Sketch.p5.height) {
      newPosition.y += this.speed.y;
    }
    if (Sketch.p5.keyIsDown(Sketch.p5.RIGHT_ARROW) && newPosition.x < Sketch.p5.width) {
      newPosition.x += this.speed.x;
    }
    this.position = newPosition;
    this.addTail();
  }
}

