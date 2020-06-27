import { Component, OnInit, ChangeDetectorRef, OnDestroy, Input } from '@angular/core';
import { Calendar } from '../../classes/calendar';
import { CalendarEvent } from '../../interfaces/calendar-event';
import { FormControl, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, tap, filter } from 'rxjs/operators';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, OnDestroy {
  @Input() min: string | Date = new Date(1900, 1);
  @Input() max: string | Date = new Date(2100, 1);
  @Input() events: CalendarEvent[];
  @Input() date: string | Date = new Date();
  public Calendar: any = Calendar;
  public calendar: Calendar;
  public year: FormControl;
  public month: FormControl;

  private _destroyed$: Subject<any> = new Subject();

  constructor(private cdRef: ChangeDetectorRef, private fb: FormBuilder) {}

  ngOnInit() {
    this.createCalendar();
    this.createForms();
    this.handleFormChanges();
  }

  ngOnDestroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  createCalendar() {
    this.calendar = new Calendar({
      date: typeof this.date === 'string' ? Calendar.stringToDate(this.date) : this.date,
      events: this.events,
      min: typeof this.min === 'string' ? Calendar.stringToDate(this.min) : this.min,
      max: typeof this.max === 'string' ? Calendar.stringToDate(this.max) : this.max
    });
  }

  createForms() {
    this.year = new FormControl({ value: this.calendar.year, disabled: true});
    this.month = new FormControl({ value: this.calendar.month, disabled: true});
  }

  setYear() {
    this.calendar.year = this.year.value;
    this.year.setValue(this.calendar.year);
    this.year.disable();
  }

  editYear() {
    this.year.enable();
  }

  editMonth() {
    this.month.enable({emitEvent: false});
  }

  handleFormChanges() {
    this.month.valueChanges.pipe(
      filter(() => this.month.enabled),
      tap((month) => {
        this.calendar.month = month;
        this.month.disable();
      }),
      takeUntil(this._destroyed$)
    ).subscribe();
  }

  setEventActive(event: CalendarEvent) {
    this.calendar.date = event.startDate;
  }

}
