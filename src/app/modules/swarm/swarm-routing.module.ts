import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SwarmComponent } from './components/swarm/swarm.component';
import {MazeComponent} from '@app/modules/swarm/components/maze/maze.component';

const routes: Routes = [{ path: '', component: SwarmComponent },
  { path: 'maze', component: MazeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwarmRoutingModule { }
