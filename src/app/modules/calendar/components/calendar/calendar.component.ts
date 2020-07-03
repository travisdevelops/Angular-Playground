import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Calendar } from '../../classes';
import { CalendarEvent } from '../../interfaces';
import { FormControl, } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, tap, filter, distinctUntilChanged } from 'rxjs/operators';


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

  constructor() {}

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

  editYear($event, yearControl) {
    this.hideMonthYear();
    $event.stopPropagation();
    this.year.enable({emitEvent: false});
    setTimeout(() => {
      yearControl.focus();
    }, 200);
  }

  editMonth() {
    this.hideMonthYear();
    this.month.enable({emitEvent: false});
  }

  hideMonthYear() {
    this.month.disable();
    this.year.disable();
  }

  handleFormChanges() {
    this.month.valueChanges.pipe(
      distinctUntilChanged(),
      filter(() => this.month.enabled),
      tap((month) => {
        this.calendar.month = month;
        this.month.setValue(this.calendar.month);
        this.hideMonthYear();
      }),
      takeUntil(this._destroyed$)
    ).subscribe();

    this.year.valueChanges.pipe(
      distinctUntilChanged(),
      filter(() => this.year.enabled),
      tap((year) => {
        if (year.length === 4) {
          this.calendar.year = year;
          this.year.setValue(this.calendar.year);
          this.hideMonthYear();
        }
      }),
      takeUntil(this._destroyed$)
    ).subscribe();

    this.calendar.dateChanged$.pipe(
      tap((date: Date) => {
        this.month.disable();
        this.year.disable();
        this.month.setValue(date.getMonth());
        this.year.setValue(date.getFullYear());
      }),
      takeUntil(this._destroyed$)
    ).subscribe();
  }

  setEventActive(event: CalendarEvent) {
    this.calendar.date = event.startDate;
  }

}
