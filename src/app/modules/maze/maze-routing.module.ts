import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MazeComponent} from './components/maze/maze.component';

const routes: Routes = [{ path: '', component: MazeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MazeRoutingModule { }
