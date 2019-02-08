import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParticleConnectionComponent } from './components/particle-connection/particle-connection.component';

const routes: Routes = [{ path: '', component: ParticleConnectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectionRoutingModule { }
