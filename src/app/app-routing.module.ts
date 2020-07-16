import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@app/components/home/home.component';

const routes: Routes = [{ path: '', component: HomeComponent },
  { path: 'connection', loadChildren: () => import('./modules/connection/connection.module').then(m => m.ConnectionModule) },
{ path: 'calendar', loadChildren: () => import('./modules/calendar/calendar.module').then(m => m.CalendarModule) },
{ path: 'emitter', loadChildren: () => import('./modules/emitter/emitter.module').then(m => m.EmitterModule) },
  { path: 'swarm', loadChildren: () => import('./modules/swarm/swarm.module').then(m => m.SwarmModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
