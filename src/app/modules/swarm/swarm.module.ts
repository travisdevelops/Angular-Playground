import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwarmRoutingModule } from './swarm-routing.module';
import { SwarmComponent } from './components/swarm/swarm.component';

@NgModule({
  declarations: [SwarmComponent],
  imports: [
    CommonModule,
   SwarmRoutingModule
  ]
})
export class SwarmModule { }
