import {Component, OnInit, OnDestroy} from '@angular/core';
import {Particle} from '../../classes/particle';
import {Vector} from '@shared/classes/vector';
import {Theme} from '@shared/classes/theme';
import {Sketch} from '@shared/classes/sketch';
import p5 from 'p5';

@Component({
  selector: 'app-particle-connection',
  templateUrl: './particle-connection.component.html',
  styleUrls: ['./particle-connection.component.scss']
})
export class ParticleConnectionComponent implements OnInit, OnDestroy {
  private particles: Particle[];
  public particleCount: number;
  public particleConnectionLength: number;

  constructor() {
    this.particles = [];
    this.particleCount = 100;
    this.particleConnectionLength = 50;
  }

  ngOnInit() {
    this.initP5Sketch();
  }

  ngOnDestroy() {
    Sketch.p5.remove();
  }

  // Initialize P5 Sketch
  initP5Sketch(): void {
    const sketch = (p5sketch) => {
      Sketch.p5 = p5sketch;
      let canvas;
      let windowOffset;

      // Setup P5 js
      p5sketch.setup = () => {
        windowOffset = 100;
        canvas = p5sketch.createCanvas(p5sketch.windowWidth, p5sketch.windowHeight - windowOffset);

        for (let i = 0; i < this.particleCount; i++) {
          this.particles.push(new Particle());
        }
      };

      // Draw P5 js
      p5sketch.draw = () => {
        // Adjust Count of Particles If Changed
        if (this.particles.length !== this.particleCount) {
          const oldParticles = [...this.particles];
          this.particles = [];
          for (let i = 0; i < this.particleCount; i++) {
            if (oldParticles.length > i) {
              this.particles.push(oldParticles[i]);
            } else {
              this.particles.push(new Particle());
            }
          }
        }

        // Resize Canvas - Responsive
        if (canvas.width !== p5sketch.windowWidth || canvas.height !== p5sketch.windowHeight - windowOffset) {
          p5sketch.resizeCanvas(p5sketch.windowWidth, p5sketch.windowHeight - windowOffset);
        }

        // Draw Background
        p5sketch.background(Theme.bgColor.x, Theme.bgColor.y, Theme.bgColor.z);

        this.particles.forEach((particle) => {
          particle.move(); // Move Particle
          particle.display(); // Display Particle

          // Connect Particle To Other Particles
          this.particles.forEach((otherParticle) => {
            if (particle !== otherParticle) {
              particle.connectToParticle(otherParticle.position, this.particleConnectionLength);
            }
          });
          // Connect Particle To Mouse
          particle.connectToParticle(new Vector({
            x: p5sketch.mouseX,
            y: p5sketch.mouseY
          }), this.particleConnectionLength);
        });
      };
    };

    const p = new p5(sketch, 'canvas-container');
  }
}
