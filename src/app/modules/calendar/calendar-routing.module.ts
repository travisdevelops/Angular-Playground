import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LottoCalendarComponent } from './pages/lotto-calendar/lotto-calendar.component';

const routes: Routes = [{ path: '', component: LottoCalendarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
