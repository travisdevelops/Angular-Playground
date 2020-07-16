import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarRoutingModule } from './calendar-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { LottoCalendarComponent } from './pages/lotto-calendar/lotto-calendar.component';
import { LottoDataService } from './services/lotto-data.service';
import { TTCommonModule } from '@tt/common';

@NgModule({
  providers: [
    LottoDataService
  ],
  declarations: [
    LottoCalendarComponent
    ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    TTCommonModule
  ]
})
export class CalendarModule { }
