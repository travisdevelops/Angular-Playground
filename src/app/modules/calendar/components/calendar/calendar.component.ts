import { Component, OnInit } from '@angular/core';
import { Calendar } from '../../classes/calendar';
import { CalendarEvent } from '../../interfaces/calendar-event';
import { Vector } from '@classes/vector';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  public calendarClass: any;
  public calendar: Calendar;

  constructor() {
    this.calendarClass = Calendar;
    this.calendar = new Calendar();
  }

  ngOnInit() {
    // Sample Events
    const today = new Date();
    this.calendar.events = [];
    this.calendar.events.push({
      title: 'Sample Event Number 1',
      color: new Vector({y: 191, z: 255}),
      startDate: new Date(today.getFullYear(), today.getMonth(), 21),
      endDate: new Date(today.getFullYear(), today.getMonth(), 21),
      createdBy: 'Travis Simon'
    });
    this.calendar.events.push({
      title: 'Sample Event Number 2',
      color: new Vector({x: 255, y: 153, z: 153}),
      startDate: new Date(today.getFullYear(), today.getMonth(), 20),
      endDate: new Date(today.getFullYear(), today.getMonth() + 1, 5),
      createdBy: 'Travis Simon'
    });
    this.calendar.events.push({
      title: 'Sample Event Number 3',
      color: new Vector({y: 230, z: 153}),
      startDate: new Date(today.getFullYear(), today.getMonth(), 5),
      endDate: new Date(today.getFullYear(), today.getMonth(), 15),
      createdBy: 'Test User'
    });
    this.calendar.events.push({
      title: 'Sample Event Number 4',
      color: new Vector({y: 165, z: 211}),
      startDate: new Date(today.getFullYear(), today.getMonth(), 21),
      endDate: new Date(today.getFullYear(), today.getMonth(), 21),
      createdBy: 'Test User'
    });
    this.calendar.events.push({
      title: 'Sample Event Number 5',
      color: new Vector({y: 126, z: 220}),
      startDate: new Date(today.getFullYear(), today.getMonth(), 21),
      endDate: new Date(today.getFullYear(), today.getMonth(), 21),
      createdBy: 'Test User'
    });
    this.calendar.events.push({
      title: 'Sample Event Number 6',
      color: new Vector({y: 126, z: 220}),
      startDate: new Date(today.getFullYear(), today.getMonth(), 21),
      endDate: new Date(today.getFullYear(), today.getMonth(), 21),
      createdBy: 'Test User'
    });

    // Recalculate Calendar
    this.calendar.calculateDate();
  }
}
