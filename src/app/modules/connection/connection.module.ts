import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConnectionRoutingModule } from './connection-routing.module';
import { ParticleConnectionComponent } from './components/particle-connection/particle-connection.component';

@NgModule({
  declarations: [
    ParticleConnectionComponent
    ],
  imports: [
    CommonModule,
    ConnectionRoutingModule,
    FormsModule
  ]
})
export class ConnectionModule { }
