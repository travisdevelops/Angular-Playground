import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { LottoCalendarComponent } from './pages/lotto-calendar/lotto-calendar.component';
import { LottoDataService } from './services/lotto-data.service';

@NgModule({
  providers: [
    LottoDataService
  ],
  declarations: [
    CalendarComponent,
    LottoCalendarComponent
    ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule
  ]
})
export class CalendarModule { }
