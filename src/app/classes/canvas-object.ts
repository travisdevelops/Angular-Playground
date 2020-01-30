import {Vector} from './vector';
import {Sketch} from './sketch';

export class CanvasObject {
  public position: Vector;
  public size: Vector;
  private _speed: Vector;
  public color: Vector;
  public maxSpeed: Vector;
  public minSpeed: Vector;
  public opacity: number;

  constructor({position = new Vector(), size = new Vector(), speed = new Vector(), color = new Vector({x: 255, y: 255, z: 255}), opacity = 100, minSpeed = new Vector(), maxSpeed = new Vector()} = {}) {
    this.position = position;
    this.size = size;
    this.color = color;
    this.opacity = opacity;
    this.minSpeed = minSpeed;
    this.maxSpeed = maxSpeed;
    this.speed = speed;
  }

  static getPositionDifference(positionA: Vector, positionB: Vector): Vector {
    const xDiff = positionA.x - positionB.x;
    const yDiff = positionA.y - positionB.y;
    return new Vector({x: xDiff, y: yDiff});
  }
  static getPositionAbsoluteDifference(positionA: Vector, positionB: Vector): Vector {
    const xDiff = Sketch.p5.abs(positionA.x - positionB.x);
    const yDiff = Sketch.p5.abs(positionA.y - positionB.y);
    return new Vector({x: xDiff, y: yDiff});
  }

  get speed(): Vector {
    return this._speed;
  }

  // Keep Speed Within Min & Max
  set speed(potentialSpeed: Vector) {
    // Is Speed Too Slow
    if (Sketch.p5.abs(potentialSpeed.x) < this.minSpeed.x) {
      if (potentialSpeed.x > 0) {
        potentialSpeed.x = this.minSpeed.x;
      } else {
        potentialSpeed.x = -this.minSpeed.x;
      }
    }
    if (Sketch.p5.abs(potentialSpeed.y) < this.minSpeed.y) {
      if (potentialSpeed.y > 0) {
        potentialSpeed.y = this.minSpeed.y;
      } else {
        potentialSpeed.y = -this.minSpeed.y;
      }
    }
    // Is Speed Too Fast
    if (Sketch.p5.abs(potentialSpeed.x) > this.maxSpeed.x) {
      if (potentialSpeed.x > 0) {
        potentialSpeed.x = this.maxSpeed.x;
      } else {
        potentialSpeed.x = -this.maxSpeed.x;
      }
    }
    if (Sketch.p5.abs(potentialSpeed.y) > this.maxSpeed.y) {
      if (potentialSpeed.y > 0) {
        potentialSpeed.y = this.maxSpeed.y;
      } else {
        potentialSpeed.y = -this.maxSpeed.y;
      }
    }
    this._speed = potentialSpeed;
  }

  // Move Canvas Object
  move() {
    this.position = this.getPositionUsingSpeed();
  }

  // Set A New Random Speed
  randomizeSpeed(): void {
    this.speed = new Vector({x: Sketch.p5.random(-this.maxSpeed.x, this.maxSpeed.x),
      y: Sketch.p5.random(-this.maxSpeed.y, this.maxSpeed.y)});
  }

  setSpeedTowardsPosition(position: Vector): void {
    this.speed = CanvasObject.getPositionDifference(position, this.position);
  }

  setSpeedAwayFromPosition(position: Vector): void {
    const speedTowardsPosition = CanvasObject.getPositionDifference(position, this.position);
    const newSpeed = new Vector();
    // Calculate X First
    if (speedTowardsPosition.x > 0 && speedTowardsPosition.y > 0) { // Position Is In Top Right Quadrant
      newSpeed.x = Sketch.p5.random(-this.maxSpeed.x, this.maxSpeed.x);
      if (newSpeed.x > 0) { // Y must be Negative
        newSpeed.y = Sketch.p5.random(-this.minSpeed.y, -this.maxSpeed.y);
      } else { // Y can be anything
        newSpeed.y = Sketch.p5.random(-this.maxSpeed.y, this.maxSpeed.y);
      }
    } else if (speedTowardsPosition.x > 0 && speedTowardsPosition.y < 0) { // Position Is In Bottom Right Quadrant
      newSpeed.x = Sketch.p5.random(-this.maxSpeed.x, this.maxSpeed.x);
      if (newSpeed.x > 0) { // Y must be Positive
        newSpeed.y = Sketch.p5.random(this.minSpeed.y, this.maxSpeed.y);
      } else { // Y can be anything
        newSpeed.y = Sketch.p5.random(-this.maxSpeed.y, this.maxSpeed.y);
      }
    } else if (speedTowardsPosition.x < 0 && speedTowardsPosition.y > 0) { // Position Is In Top Left Quadrant
      newSpeed.x = Sketch.p5.random(-this.maxSpeed.x, this.maxSpeed.x);
      if (newSpeed.x > 0) { // Y can be anything
        newSpeed.y = Sketch.p5.random(-this.maxSpeed.y, this.maxSpeed.y);
      } else { // Y must be Negative
        newSpeed.y = Sketch.p5.random(-this.minSpeed.y, -this.maxSpeed.y);
      }
    } else if (speedTowardsPosition.x < 0 && speedTowardsPosition.y < 0) { // Position Is In Bottom Left Quadrant
      newSpeed.x = Sketch.p5.random(-this.maxSpeed.x, this.maxSpeed.x);
      if (newSpeed.x > 0) { // Y can be anything
        newSpeed.y = Sketch.p5.random(-this.maxSpeed.y, this.maxSpeed.y);
      } else { // Y must be Positive
        newSpeed.y = Sketch.p5.random(this.minSpeed.y, this.maxSpeed.y);
      }
    }
    this.speed = newSpeed;
  }

  // Get Position Based on Current Speed
  getPositionUsingSpeed() {
    return new Vector({
      x: this.position.x + this.speed.x,
      y: this.position.y + this.speed.y
    });
  }

  // Is Canvas Object Out Of Bounds
  isOutsideCanvas(position: Vector) {
    const outsideOfTopBound = position.y - this.size.y / 2 < 0;
    const outsideOfRightBound = position.x + this.size.x / 2 > Sketch.p5.width;
    const outsideOfBottomBound = position.y + this.size.y / 2 > Sketch.p5.height;
    const outsideOfLeftBound = position.x - this.size.x / 2 < 0;
    return outsideOfTopBound || outsideOfRightBound || outsideOfBottomBound || outsideOfLeftBound;
  }


}
