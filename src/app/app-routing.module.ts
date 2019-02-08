import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'connection', loadChildren: './connection/connection.module#ConnectionModule' },
{ path: 'calendar', loadChildren: './calendar/calendar.module#CalendarModule' },
{ path: 'emitter', loadChildren: './emitter/emitter.module#EmitterModule' },
  { path: 'swarm', loadChildren: './swarm/swarm.module#SwarmModule' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
