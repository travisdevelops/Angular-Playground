import {Vector} from '@classes/vector';
import {Helper} from '@classes/helper';
import {CanvasObject} from '@classes/canvas-object';
import {EmitterParticle} from './emitter-particle';

export class Emitter extends CanvasObject {
  public particles: EmitterParticle[];
  public maxParticles = 400;
  public active: boolean;

  constructor({position = new Vector(), maxParticles = 300} = {}) {
    super({position: position});
    this.particles = [];
    this.maxParticles = maxParticles;
    this.active = false;
  }

  // Emit EmitterParticles
  emit(): void {
    if (this.active) {
      if (this.particles.length > this.maxParticles) {// Remove A Single Emission (Immediately)
        this.particles.pop();
        this.emit();
      } else {
        setTimeout(() => {
          if (this.active) {
            if (this.particles.length < this.maxParticles) {// Add A Single Emission (After Delay)
              this.particles.push(new EmitterParticle({position: new Vector(this.position)}));
            }
            this.emit();
          }
        }, Helper.randomNumber(0, 100)); // Add Emissions At Random Intervals
      }
    }
  }

  // Display All Emissions
  display(): void {
    const tempParticles: EmitterParticle[] = [];
    this.particles.forEach((particle: EmitterParticle) => {
      particle.move();
      particle.display();
      const canRespawn: boolean = particle.opacity <= 0 || particle.isOutsideCanvas(particle.position);

      if (this.active && canRespawn) {// If Emitter Active & Can Respawn
        particle.respawn(this.position);
      }

      // If Emitter Active & Can Respawn Then Add To Active Emissions
      // If Not Respawned Then Add To Active Emissions
      if ((this.active && canRespawn) || !canRespawn) {
        tempParticles.push(particle);
      }
    });
    this.particles = tempParticles;
  }
}
