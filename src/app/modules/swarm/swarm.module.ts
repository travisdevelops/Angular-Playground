import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwarmRoutingModule } from './swarm-routing.module';
import { SwarmComponent } from './components/swarm/swarm.component';
import { MazeComponent } from './components/maze/maze.component';

@NgModule({
  declarations: [SwarmComponent, MazeComponent],
  imports: [
    CommonModule,
   SwarmRoutingModule
  ]
})
export class SwarmModule { }
