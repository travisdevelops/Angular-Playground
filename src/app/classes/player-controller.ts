import {Vector} from '@classes/vector';
import {Sketch} from '@classes/sketch';
import {CanvasObject} from '@classes/canvas-object';

export class PlayerController extends CanvasObject {
    private acceleration: number;
    private gravity: number;
    private buttonTime: Vector;

  constructor({position = new Vector(), size = new Vector(), maxSpeed = new Vector(), acceleration = 10, gravity = 0.2} = {}) {
    super();
    this.size = size;
    this.maxSpeed = maxSpeed;
    this.position = position;
    this.gravity = gravity;
    this.acceleration = acceleration;
    this.buttonTime = new Vector();
  }

  move() {
    this.moveHorizontal();
    // this.moveVertical();
    super.move();
  }

  moveHorizontal(): void {
    const buttonDirection = new Vector();
    const horizontalButtonPressed = Sketch.p5.keyIsDown(Sketch.p5.LEFT_ARROW) || Sketch.p5.keyIsDown(Sketch.p5.RIGHT_ARROW);

    if (horizontalButtonPressed) {
      buttonDirection.x = Sketch.p5.keyIsDown(Sketch.p5.LEFT_ARROW) ? -1 : 1;
    }
    // Calculate Time
    this.buttonTime.x = this.calculateButtonTime(horizontalButtonPressed, this.buttonTime.x, buttonDirection.x, this.speed.x);
    // Calculate Speed
    this.speed.x = this.calculateSpeed(this.speed.x, buttonDirection.x, this.buttonTime.x, this.maxSpeed.x);
  }

  moveVertical(): void {
    const buttonDirection = new Vector();
    const verticalButtonPressed = Sketch.p5.keyIsDown(Sketch.p5.UP_ARROW) || Sketch.p5.keyIsDown(Sketch.p5.DOWN_ARROW);

    if (verticalButtonPressed) {
      buttonDirection.y = Sketch.p5.keyIsDown(Sketch.p5.UP_ARROW) ? -1 : 1;
    }
    // Calculate Time
    this.buttonTime.y = this.calculateButtonTime(verticalButtonPressed, this.buttonTime.y, buttonDirection.y, this.speed.y);
    // Calculate Speed
    this.speed.y = this.calculateSpeed(this.speed.y, buttonDirection.y, this.buttonTime.y, this.maxSpeed.y);
  }

  calculateButtonTime(buttonPressed, time, buttonDirection, speed) {
    if (buttonPressed) {
      // If Pressing Button For The Opposite Direction of Current Speed - Controls The Responsiveness Of Button
      if (buttonDirection < 0 && speed > 0 || buttonDirection > 0 && speed < 0) {
        time = 10; // 0 - Not Responsive, 100 - Very Responsive
      }
      if (time < 100) {
        time++;
      }
    } else {
      if (time > 0) {
        time--;
      }
    }
    return time;
  }

  calculateSpeed(currentSpeed, buttonDirection, time, maxSpeed) {
    let localGravity = 0;
    if (Math.abs(currentSpeed) > 0) {
      localGravity = currentSpeed > 0 ? -this.gravity : this.gravity;
    }
    const mappedTime = Sketch.p5.map(time, 0, 100, 0, 1, true);
    let calculatedSpeed = currentSpeed + (buttonDirection * mappedTime * this.acceleration) + localGravity;
    if (Math.abs(calculatedSpeed) >= maxSpeed) {
      const impliedDirection = calculatedSpeed > 0 ? 1 : -1; // Using Current Speed
      calculatedSpeed = impliedDirection * maxSpeed;
    } else if (Math.abs(calculatedSpeed) < 1) { // Threshold Is Any Value Less Than 1 - Treat As Zero
      calculatedSpeed = 0;
    }
    return calculatedSpeed;
  }
}

