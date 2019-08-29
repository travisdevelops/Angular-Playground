import {Vector} from '@classes/vector';
import {Helper} from '@classes/helper';
import {CanvasObject} from '@classes/canvas-object';
import {Emission} from './emission';

export class Emitter extends CanvasObject {
  public emissions: Emission[];
  public emissionCount = 300;
  public active: boolean;

  constructor({position = new Vector(), emissionCount = 300} = {}) {
    super({position: position});
    this.emissions = [];
    this.emissionCount = emissionCount;
    this.active = false;
  }

  // Add Emissions
  emit(): void {
    if (this.active) {
      if (this.emissions.length > this.emissionCount) {// Remove A Single Emission (Immediately)
        this.emissions.pop();
        this.emit();
      } else {
        setTimeout(() => {
          if (this.active) {
            if (this.emissions.length < this.emissionCount) {// Add A Single Emission (After Delay)
              this.emissions.push(new Emission({position: new Vector(this.position)}));
            }
            this.emit();
          }
        }, Helper.randomNumber(0, 100)); // Add Emissions At Random Intervals
      }
    }
  }

  // Display All Emissions
  display(): void {
    const activeEmissions: Emission[] = [];
    this.emissions.forEach((emission) => {
      emission.move();
      emission.display();
      const canRespawn: boolean = emission.opacity <= 0 || emission.isOutsideCanvas(emission.position);

      if (this.active && canRespawn) {// If Emitter Active & Can Respawn
        emission.respawn(this.position);
      }

      // If Emitter Active & Can Respawn Then Add To Active Emissions
      // If Not Respawned Then Add To Active Emissions
      if ((this.active && canRespawn) || !canRespawn) {
        activeEmissions.push(emission);
      }
    });
    this.emissions = activeEmissions;
  }
}
