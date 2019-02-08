import { Component, OnInit } from '@angular/core';
import { Calendar } from '../../classes/calendar';
import { CalendarEvent } from '../../interfaces/calendar-event';
import { Vector } from '../../../classes/vector';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  public calendarClass: any;
  public calendar: Calendar;
  public calendarEvents: CalendarEvent[];

  constructor() {
    this.calendarClass = Calendar;
    this.calendar = new Calendar();
    this.calendarEvents = [];
  }

  ngOnInit() {
    this.calendarEvents.push({ title: 'Calendar Event Number 1', color: new Vector({y: 191, z: 255}), startDate: new Date(2018, 11, 21), endDate: new Date(2018, 11, 21), createdBy: 'Travis Simon' });
    this.calendarEvents.push({ title: 'Calendar Event Number 2', color: new Vector({x: 255, y: 153, z: 153}), startDate: new Date(2018, 10, 29), endDate: new Date(2018, 11, 5), createdBy: 'Travis Simon' });
    this.calendarEvents.push({ title: 'Calendar Event Number 3', color: new Vector({y: 230, z: 153}), startDate: new Date(2018, 11, 5), endDate: new Date(2018, 11, 15), createdBy: 'Test User 2' });
    this.calendar.events = this.calendarEvents;
    this.calendar.calculateDate();
  }

}
