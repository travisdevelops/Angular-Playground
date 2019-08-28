import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@app/components/home/home.component';

const routes: Routes = [{ path: '', component: HomeComponent },
  { path: 'connection', loadChildren: './modules/connection/connection.module#ConnectionModule' },
{ path: 'calendar', loadChildren: './modules/calendar/calendar.module#CalendarModule' },
{ path: 'emitter', loadChildren: './modules/emitter/emitter.module#EmitterModule' },
  { path: 'swarm', loadChildren: './modules/swarm/swarm.module#SwarmModule' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
