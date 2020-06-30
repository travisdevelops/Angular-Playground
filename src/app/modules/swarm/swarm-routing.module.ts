import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SwarmComponent } from './components/swarm/swarm.component';

const routes: Routes = [{ path: '', component: SwarmComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwarmRoutingModule { }
