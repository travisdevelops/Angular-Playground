import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmitterComponent } from './components/emitter/emitter.component';

const routes: Routes = [{ path: '', component: EmitterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmitterRoutingModule { }
