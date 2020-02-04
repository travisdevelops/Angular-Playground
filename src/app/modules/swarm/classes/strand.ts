import {Vector} from '@classes/vector';
import {CanvasObject} from '@classes/canvas-object';
import {Sketch} from '@classes/sketch';

export class Strand extends CanvasObject {
  private lastPositions: Vector[];
  private glowEffectSizeMultipler = 3;
  public tailLength = 15;
  public tailHasTaperedAlpha = true;
  public tailHasTaperedSize = true;
  private randomMovementTimeout;
  public visionRadius: number;

  constructor({color = new Vector(), minSpeed = new Vector({x: 0.5, y: 0.5}), maxSpeed = new Vector({x: 2, y: 2}), size = new Vector({x: 4, y: 4}), position = new Vector({x: 0, y: 0}), visionRadius = 50} = {}) {
    super();
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.minSpeed = minSpeed;
    this.size = size;
    this.position = position;
    this.visionRadius = visionRadius;
    this.lastPositions = [];
  }

  // Randomize Movements On A Random Interval That Continues To Change
  randomizeMovements() {
    this.stopRandomMovements();
    this.randomizeSpeed();
    this.randomMovementTimeout = setTimeout(() => {this.randomizeMovements(); }, Math.floor(Sketch.p5.random(200, 800)));
  }

  stopRandomMovements() {
    if (this.randomMovementTimeout != null) {
      clearTimeout(this.randomMovementTimeout);
    }
  }

  // Display Strand With Glow
  display() {
    this.displayBody();
    this.displayTail();
    this.displayVision();
  }

  private displayBody() {
    Sketch.p5.noStroke();
    Sketch.p5.fill(this.color.x, this.color.y, this.color.z);
    Sketch.p5.ellipse(this.position.x, this.position.y, this.size.x);
    // Glow Effect
    Sketch.p5.fill(this.color.x, this.color.y, this.color.z, 80);
    Sketch.p5.ellipse(this.position.x, this.position.y, this.size.x * this.glowEffectSizeMultipler);
  }

  // Display Tails
  private displayTail() {
    Sketch.p5.noFill();
    const tailSizeTaperRate = this.size.x / this.lastPositions.length;
    const tailAlphaTaperRate = 255 / this.lastPositions.length;
    for (let i = 0; i < this.lastPositions.length - 1; i++) {
      const currTailPos = this.lastPositions[i];
      const nextTailPos = this.lastPositions[i + 1];
      let tailAlpha = 255;
      let tailSize = this.size.x;
      if (this.tailHasTaperedAlpha) {
        tailAlpha = 255 - (tailAlphaTaperRate * (i + 1)); // Make Tail Taper in Alpha
      }
      if (this.tailHasTaperedSize) {
        tailSize = this.size.x - (tailSizeTaperRate * (i + 1)); // Make Tail Taper in Width
      }
      Sketch.p5.stroke(this.color.x, this.color.y, this.color.z, tailAlpha);
      Sketch.p5.strokeWeight(tailSize);
      Sketch.p5.line(currTailPos.x, currTailPos.y, nextTailPos.x, nextTailPos.y); // Actual Tail
    }
  }


  private displayVision() {
    Sketch.p5.noStroke();
    // Glow Effect
    Sketch.p5.fill(this.color.x, this.color.y, this.color.z, 40);
    Sketch.p5.ellipse(this.position.x, this.position.y, this.visionRadius * 2);
  }

  // Add Tail After Moving - Overrides the Parent Method
  move() {
    super.move();
    this.saveLastPosition();
  }


  // Save Last Position As First In Array
  // Always Keeps At Least 1 Vector Of Position in Array
  private saveLastPosition() {
    const lastPositionIsSameAsCurrent = this.lastPositions.length > 0 && this.lastPositions[0].x === this.position.x
      && this.lastPositions[0].y === this.position.y;

    if (this.lastPositions.length > 1 && lastPositionIsSameAsCurrent || this.lastPositions.length > this.tailLength) {
      this.lastPositions.pop(); // Remove From End of Array
    }
    // Only Add Last Position If Different From Current
    if (!lastPositionIsSameAsCurrent) {
      this.lastPositions.unshift(new Vector({ x: this.position.x, y: this.position.y })); // Add to Front of Array
    }
  }
}

