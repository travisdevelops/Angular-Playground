import {Component, OnInit, OnDestroy} from '@angular/core';
import {Particle} from '../../classes/particle';
import {Vector} from '@classes/vector';
import {Theme} from '@classes/theme';
import {Sketch} from '@classes/sketch';
import p5 from 'p5';

let _self: ParticleConnectionComponent;

@Component({
  selector: 'app-particle-connection',
  templateUrl: './particle-connection.component.html',
  styleUrls: ['./particle-connection.component.scss']
})
export class ParticleConnectionComponent implements OnInit, OnDestroy {
  private particles: Particle[];
  private totalParticles: number;
  public particleConnectionLength: number;

  constructor() {
    _self = this;
    this.particles = [];
    this.totalParticles = 80;
    this.particleConnectionLength = 100;
  }

  ngOnInit() {
    this.initP5Sketch();
  }

  ngOnDestroy() {
    Sketch.p5.remove();
  }

  // Initialize P5 Sketch
  initP5Sketch(): void {
    const sketch = function (p5sketch) {
      Sketch.p5 = p5sketch;
      let canvas;
      let windowOffset;

      // Setup P5 js
      p5sketch.setup = function () {
        windowOffset = 100;
        canvas = p5sketch.createCanvas(p5sketch.windowWidth, p5sketch.windowHeight - windowOffset);

        for (let i = 0; i < _self.totalParticles; i++) {
          _self.particles.push(new Particle());
        }
      };

      // Draw P5 js
      p5sketch.draw = function () {
        // Resize Canvas - Responsive
        if (canvas.width !== p5sketch.windowWidth || canvas.height !== p5sketch.windowHeight - windowOffset) {
          p5sketch.resizeCanvas(p5sketch.windowWidth, p5sketch.windowHeight - windowOffset);
        }

        // Draw Background
        p5sketch.background(Theme.bgColor.x, Theme.bgColor.y, Theme.bgColor.z);

        _self.particles.forEach((particle) => {
          particle.move(); // Move Particle
          particle.display(); // Display Particle

          // Connect Particle To Other Particles
          _self.particles.forEach((otherParticle) => {
            if (particle !== otherParticle) {
              particle.connectToParticle(otherParticle.position, _self.particleConnectionLength);
            }
          });
          // Connect Particle To Mouse
          particle.connectToParticle(new Vector({
            x: p5sketch.mouseX,
            y: p5sketch.mouseY
          }), _self.particleConnectionLength);
        });
      };
    };

    const p = new p5(sketch, 'canvas-container');
  }

}
