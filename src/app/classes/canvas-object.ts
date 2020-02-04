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

  // TODO: Speed Towards Should Not Exceed Position Difference in order to prevent overshooting (Test Revision)
  setSpeedTowardsPosition(position: Vector): void {
    const speedTowardsPosition = CanvasObject.getPositionDifference(position, this.position);
    const newSpeed = new Vector();
    const maxSpeed = new Vector(this.maxSpeed);
    if (Math.abs(speedTowardsPosition.x) < Math.abs(this.maxSpeed.x)) {
      maxSpeed.x = Math.abs(speedTowardsPosition.x);
    }
    if (Math.abs(speedTowardsPosition.y) < Math.abs(this.maxSpeed.y)) {
      maxSpeed.y = Math.abs(speedTowardsPosition.y);
    }
    // Calculate X
    if (speedTowardsPosition.x > 0) { // X is Positive
      newSpeed.x = Sketch.p5.random(this.minSpeed.x, maxSpeed.x);
    } else { // X is Negative
      newSpeed.x = Sketch.p5.random(-this.minSpeed.x, -maxSpeed.x);
    }
    // Calculate Y
    if (speedTowardsPosition.y > 0) { // Y is Positive
      newSpeed.y = Sketch.p5.random(this.minSpeed.y, maxSpeed.y);
    } else { // Y is Negative
      newSpeed.y = Sketch.p5.random(-this.minSpeed.y, -maxSpeed.y);
    }
    if (Math.abs(newSpeed.x) > Math.abs(speedTowardsPosition.x) || Math.abs(newSpeed.y) > Math.abs(speedTowardsPosition.y)) {
      console.log('Moving Faster Than Distance');
    }
    this.speed = newSpeed;
  }

  // Set Speed To Move in Opposite Direction/Quadrant of Position
  setSpeedAwayFromPosition(position: Vector): void {
    const speedTowardsPosition = CanvasObject.getPositionDifference(position, this.position);
    const newSpeed = new Vector();

    if (speedTowardsPosition.x > 0 && speedTowardsPosition.y > 0) {// Move Away From Top Right Quadrant
      // X & Y Must Be Negative
      newSpeed.x = Sketch.p5.random(-this.minSpeed.x, -this.maxSpeed.x);
      newSpeed.y = Sketch.p5.random(-this.minSpeed.y, -this.maxSpeed.y);
    } else if (speedTowardsPosition.x < 0 && speedTowardsPosition.y > 0) {// Move Away From Top Left Quadrant
      // X Must Be Positive & Y Must Be Negative
      newSpeed.x = Sketch.p5.random(this.minSpeed.x, this.maxSpeed.x);
      newSpeed.y = Sketch.p5.random(-this.minSpeed.y, -this.maxSpeed.y);
    } else if (speedTowardsPosition.x > 0 && speedTowardsPosition.y < 0) {// Move Away From Bottom Right Quadrant
      // X Must Be Negative & Y Must Be Positive
      newSpeed.x = Sketch.p5.random(-this.minSpeed.x, -this.maxSpeed.x);
      newSpeed.y = Sketch.p5.random(this.minSpeed.y, this.maxSpeed.y);
    } else {// Move Away From Bottom Left Quadrant
      // X & Y Must Be Positive
      newSpeed.x = Sketch.p5.random(this.minSpeed.x, this.maxSpeed.x);
      newSpeed.y = Sketch.p5.random(this.minSpeed.y, this.maxSpeed.y);
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
