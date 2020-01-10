import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MazeComponent} from '@app/modules/maze/components/maze/maze.component';
import {MazeRoutingModule} from '@app/modules/maze/maze-routing.module';

@NgModule({
  declarations: [MazeComponent],
  imports: [
    CommonModule,
    MazeRoutingModule
  ]
})
export class MazeModule { }
