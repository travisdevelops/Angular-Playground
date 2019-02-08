import { Vector } from '@app/classes/vector';
import { Helper } from '@app/classes/helper';
import { Theme } from '@app/classes/theme';
import { CanvasObject } from '@app/classes/canvas-object';
import { Sketch } from '@app/classes/sketch';

export class Emission extends CanvasObject {
    public objectOrigin: CanvasObject;

    constructor({position = new Vector()} = {}) {
        const size = Helper.randomDecimal(5, 30);
        const sizeVector = new Vector({x: size, y: size});
        const minSpeed = new Vector({x: 0.5, y: 0.5});
        const maxSpeed = new Vector({x: 3, y: 3});
        super({ position: position, size: sizeVector, minSpeed: minSpeed, maxSpeed: maxSpeed });
        this.objectOrigin = new CanvasObject({ size: sizeVector });
        this.respawn(this.position);
    }

    // Display Emission
    display(): void {
      this.color = new Vector({x: Theme.textColor.x, y: Theme.textColor.y, z: Theme.textColor.z});
      Sketch.p5.fill(this.color.x, this.color.y, this.color.z, this.opacity);
      Sketch.p5.ellipse(this.position.x, this.position.y, this.size.x);
      Sketch.p5.noStroke();
    }

    // Override Move
    move(): void {
      this.opacity -= 1;
      this.size.x -= 0.01;
      super.move();
    }

    // Respawn Emission at Initial Position
    respawn(position: Vector): void {
        this.position = new Vector(position);
        this.opacity = this.objectOrigin.opacity;
        this.size = this.objectOrigin.size;
        this.randomizeSpeed();
    }

}

