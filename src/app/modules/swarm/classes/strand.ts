import {Vector} from '@classes/vector';
import {CanvasObject} from '@classes/canvas-object';
import {Sketch} from '@classes/sketch';

export class Strand extends CanvasObject {
  private tails: Vector[];
  private tailMax: number;

  constructor() {
    super();
    this.color = new Vector({x: 188, y: 254, z: 0});
    this.maxSpeed = new Vector({x: 2, y: 2});
    this.minSpeed = new Vector({x: 0.5, y: 0.5});
    this.size = new Vector({x: 2, y: 2});
    this.position = new Vector({x: 0, y: 0});
    this.tails = [];
    this.tailMax = 15;
    Strand.randomizeMovements(this);
  }

  // Randomize Movements On A Random Interval That Continues To Change
  static randomizeMovements(_self) {
    _self.randomizeSpeed();
    setTimeout(_self.randomizeMovements, Sketch.p5.random(200, 800), _self);
  }

  // Display Strand With Glow
  display() {
    Sketch.p5.noStroke();
    Sketch.p5.fill(this.color.x, this.color.y, this.color.z);
    Sketch.p5.ellipse(this.position.x, this.position.y, this.size.x * 2);
    // Glow Effect
    Sketch.p5.fill(this.color.x, this.color.y, this.color.z, 75);
    Sketch.p5.ellipse(this.position.x, this.position.y, this.size.x * 6);
    this.displayTails();
  }

  // Display Tails
  displayTails() {
    Sketch.p5.noFill();
    for (let i = 0; i < this.tails.length - 1; i++) {
      const level = 3 - Math.floor(i / (this.tails.length / 3));
      Sketch.p5.stroke(this.color.x, this.color.y, this.color.z, 255 - (level * 50)); // Make Tail Taper in Alpha
      Sketch.p5.strokeWeight(this.size.x + 1 - (level * 0.5)); // Make Tail Taper in Width
      Sketch.p5.line(this.tails[i].x, this.tails[i].y, this.tails[i + 1].x, this.tails[i + 1].y); // Actual Tail
    }
  }

  // Add Tail After Moving - Overrides the Parent Method
  move() {
    super.move();
    this.addTail();
  }

  // Add Tail To Array of Tails & Remove First Tail If More Than Tail Length Threshold
  addTail() {
    if (this.tails.length >= this.tailMax) {
      this.tails.shift();
    }
    this.tails.push(new Vector({
      x: this.position.x,
      y: this.position.y
    }));
  }


}

