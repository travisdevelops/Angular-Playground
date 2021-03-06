import {Vector} from '@shared/classes/vector';
import {Theme} from '@shared/classes/theme';
import {CanvasObject} from '@shared/classes/canvas-object';
import {Sketch} from '@shared/classes/sketch';

export class Particle extends CanvasObject {

  constructor({size = 15} = {}) {
    const sizeVector = new Vector({x: size, y: size});
    const minSpeed = new Vector({x: 0.5, y: 0.5});
    const maxSpeed = new Vector({x: 2, y: 2});
    super({size: sizeVector, minSpeed: minSpeed, maxSpeed: maxSpeed});
    this.respawn();
  }

  // Display Particle
  display(): void {
    this.color = new Vector({x: Theme.textColor.x, y: Theme.textColor.y, z: Theme.textColor.z});
    Sketch.p5.noStroke();
    Sketch.p5.fill(this.color.x, this.color.y, this.color.z, this.opacity);
    Sketch.p5.ellipse(this.position.x, this.position.y, this.size.x);
  }

  // Override Move
  move(): void {
    if (this.isOutsideCanvas(this.getPotentialPosition())) {
      this.randomizeSpeed();
    } else { super.move(); }
  }

  // Respawn Particle At A Random Point With A Random Speed
  respawn(): void {
    this.randomizeSpeed();
    this.randomizePosition();
  }

  // Connect To Another Particle if Distance Is Within Connection Length
  // Doesnt Include Size of Shape
  connectToParticle(particlePosition: Vector, connectionLength: number): void {
    const xDif = Sketch.p5.abs(particlePosition.x - this.position.x);
    const yDif = Sketch.p5.abs(particlePosition.y - this.position.y);
    if (xDif <= connectionLength && yDif <= connectionLength) {
      Sketch.p5.stroke(this.color.x, this.color.y, this.color.z, this.opacity);
      Sketch.p5.line(particlePosition.x, particlePosition.y, this.position.x, this.position.y);
    }
  }

}

