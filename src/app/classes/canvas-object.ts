import {Vector} from './vector';
import {Sketch} from './sketch';

export class CanvasObject {
  public position: Vector;
  public size: Vector;
  public speed: Vector;
  public color: Vector;
  public maxSpeed: Vector;
  public minSpeed: Vector;
  public opacity: number;

  constructor({position = new Vector(), size = new Vector(), speed = new Vector(), width = 10, height = 10, color = new Vector({x: 255, y: 255, z: 255}), opacity = 100, minSpeed = new Vector(), maxSpeed = new Vector({x: 10, y: 10})} = {}) {
    this.position = position;
    this.size = size;
    this.speed = speed;
    this.color = color;
    this.opacity = opacity;
    this.minSpeed = minSpeed;
    this.maxSpeed = maxSpeed;
  }

  // Is Canvas Object Out Of Bounds
  isOutsideCanvas(position: Vector) {
    const outsideOfTopBound = position.y - this.size.y / 2 < 0;
    const outsideOfRightBound = position.x + this.size.x / 2 > Sketch.p5.width;
    const outsideOfBottomBound = position.y + this.size.y / 2 > Sketch.p5.height;
    const outsideOfLeftBound = position.x - this.size.x / 2 < 0;
    return outsideOfTopBound || outsideOfRightBound || outsideOfBottomBound || outsideOfLeftBound;
  }

  // Move Canvas Object
  move() {
    this.position = this.getPotentialPosition();
  }

  // Check If Speed Is Below A Threshold on X & Y
  isSpeedTooSlow(): boolean {
    return Sketch.p5.abs(this.speed.x) < this.minSpeed && Sketch.p5.abs(this.speed.y) < this.minSpeed;
  }

  // Set A New Random Speed
  randomizeSpeed(): void {
    this.speed = new Vector({x: Sketch.p5.random(-this.maxSpeed.x, this.maxSpeed.x), y: Sketch.p5.random(-this.maxSpeed.y, this.maxSpeed.y)});
    if (this.isSpeedTooSlow()) {
      this.randomizeSpeed();
    }
  }

  // Get Position That Is Inside Core Width/Radius
  randomizePosition(): void {
    this.position = new Vector({x: Sketch.p5.random(0, Sketch.p5.width), y: Sketch.p5.random(0, Sketch.p5.height)});
    if (this.isOutsideCanvas(this.position)) {
      this.randomizePosition();
    }
  }

  // Get Potential Position Based on Current Speed
  getPotentialPosition() {
    return new Vector({
      x: this.position.x + this.speed.x,
      y: this.position.y + this.speed.y
    });
  }


}
