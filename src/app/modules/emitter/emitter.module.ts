import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmitterRoutingModule } from './emitter-routing.module';
import { EmitterComponent } from './components/emitter/emitter.component';

@NgModule({
  declarations: [EmitterComponent],
  imports: [
    CommonModule,
    EmitterRoutingModule,
    FormsModule
  ]
})
export class EmitterModule { }
