import {CalendarEvent} from '../interfaces/calendar-event';
import {Day} from '../interfaces/day';

export class Calendar {
  public static daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  public static monthNames = ['January', 'February', 'March',
    'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  selectedDay: string;

  private _date: Date;
  private _weeks: any[] = [];
  private _events: CalendarEvent[];
  private _min: Date;
  private _max: Date;
  private _sortedEvents: { [key: string]: { [key: string]: { [key: string]: CalendarEvent[] } } };

  constructor({date = new Date(), events = [], min = new Date(1000, 0), max = new Date(9999, 11)} = {}) {
    this.events = events;
    this.min = min;
    this.max = max;
    this.setValidDate(date);
  }

  // Get First Day of Selected Month - Day of Week 0-6
  static getfirstWeekDayOfCurrMonth(month: number, year: number): number {
    return new Date(year, month).getDay();
  }

  // Get Last Day of Selected Month - Day of Week 0-6
  static getlastWeekDayOfCurrMonth(month: number, year: number): number {
    return new Date(year, month + 1, 0).getDay();
  }

  // Get Last Day of Selected Month - Day Number
  static getDaysInMonth(month: number, year: number): number {
    return new Date(year, month + 1, 0).getDate();
  }

  static getlastDateOfLastMonth(month: number, year: number): number {
    return new Date(year, month, 0).getDate();
  }

  static dateToString(d: Date): string {
    return d.getFullYear() + '-' +
           ('0' + (d.getMonth() + 1 )).slice(-2) + '-' +
           ('0' + d.getDate()).slice(-2);
  }

  static fullDateToString(day: number, month: number, year: number): string {
    return parseInt(year as any, 10) + '-' +
           ('0' + (parseInt(month as any, 10) + 1 )).slice(-2) + '-' +
           ('0' + parseInt(day as any, 10)).slice(-2);
  }

  static stringToDate(date: string): Date {
    return new Date(parseInt(date.split('-')[0], 10), parseInt(date.split('-')[1], 10) - 1, parseInt(date.split('-')[2], 10), 0, 0, 0, 0);
  }

  set date(date: Date) {
    this.setValidDate(date, true);
  }

  get year() {
    return this._date.getFullYear();
  }

  set year(year: string | number) {
    if (!isNaN(year as any)) {
      if (typeof year === 'string') {
        year = parseInt(year, 10);
      }
      const date = new Date(this._date);
      date.setFullYear(year);
      this.setValidDate(date);
    }
  }

  get month() {
    return this._date.getMonth();
  }

  set month(month: number) {
    const date = new Date(this._date);
    date.setMonth(month);
    this.setValidDate(date);
  }

  get monthString() {
    return Calendar.monthNames[this._date.getMonth()];
  }

  get weeks() {
    return this._weeks;
  }

  get min() {
    return this._min;
  }

  set min(date: Date) {
    if (date <= this.max || !this.max) {
      this._min = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }
  }

  get max() {
    return this._max;
  }

  set max(date: Date) {
    if (date >= this.min || !this.min) {
      this._max = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }
  }

  set events(events: CalendarEvent[]) {
    this._events = events;
    this.sortEvents();
  }

  get events() {
    return this._events;
  }

  get isToday() { const today = new Date(); return this._date.getMonth() === today.getMonth() && this._date.getFullYear() === today.getFullYear() && this._date.getDate() === today.getDate(); }

  get canMovePrev(): boolean { return this._date > this.min; }

  get canMoveNext(): boolean { return this._date < this.max; }

  // Previous Month
  prevMonth(): void {
    if (this.canMovePrev) {
      this._date.setMonth(this._date.getMonth() - 1);
      this.refreshCalendar();
    }
  }

  // Next Month
  nextMonth(): void {
    if (this.canMoveNext) {
      this._date.setMonth(this._date.getMonth() + 1);
      this.refreshCalendar();
    }
  }

  today(): void {
    let today = new Date();
    today = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0);
    if (!this.isToday) {
      this.setValidDate(today);
    }
  }

  addEvent(event: CalendarEvent, forceCalendarRefresh: boolean = false): void {
    if (this.isEventWithinCalendarRange(event, this.min, this.max)) {
      this._events.push(event);
      this.addSortedEvent(event);
      if (this.isEventWithinCalendarRange(event, this.getCalendarStartRange(), this.getCalendarEndRange())) {
        this.refreshCalendar();
      }
    }
  }

  // Calculate Dates and Events
  refreshCalendar(): void {
    this._weeks = [];
    let week = [];

    // Do Calculations
    const lastDateOfLastMonth = Calendar.getlastDateOfLastMonth(this._date.getMonth(), this._date.getFullYear());
    const firstWeekDayOfCurrMonth = Calendar.getfirstWeekDayOfCurrMonth(this._date.getMonth(), this._date.getFullYear());
    const totalDaysInMonth = Calendar.getDaysInMonth(this._date.getMonth(), this._date.getFullYear());
    const lastWeekDayOfCurrMonth = Calendar.getlastWeekDayOfCurrMonth(this._date.getMonth(), this._date.getFullYear());
    const lastDayOffset = Calendar.daysOfWeek.length - 1 - lastWeekDayOfCurrMonth;
    let fullMonthCount = firstWeekDayOfCurrMonth + totalDaysInMonth + lastDayOffset + 1; // Used For All Days In Loop
    const calculatedWeeks = Math.floor((fullMonthCount - 1) / Calendar.daysOfWeek.length);
    if (calculatedWeeks < 6) {// If Weeks Are Less Than 6 Weeks In Month - Add Extra Days
      fullMonthCount += Calendar.daysOfWeek.length;
    }

    // Calculate Dates
    const lastMonth = new Date(this._date);
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    const nextMonth = new Date(this._date);
    nextMonth.setMonth(nextMonth.getMonth() + 1);

    // Set Dates
    for (let i = 0; i < fullMonthCount; i++) {
      const currentWeekCount = Math.floor(i / Calendar.daysOfWeek.length);
      if (currentWeekCount > this._weeks.length) {// If New Week
        this._weeks.push(week);
        week = [];
      }
      let y, m, d;
      if (i < firstWeekDayOfCurrMonth) {// Last Month
        d = lastDateOfLastMonth - firstWeekDayOfCurrMonth + 1 + i;
        m = lastMonth.getMonth();
        y = lastMonth.getFullYear();
      } else if (i < firstWeekDayOfCurrMonth + totalDaysInMonth) {// Current Month
        d = i - firstWeekDayOfCurrMonth + 1;
        m = this._date.getMonth();
        y = this._date.getFullYear();
      } else {// Next Month
        d = i - totalDaysInMonth - firstWeekDayOfCurrMonth + 1;
        m = nextMonth.getMonth();
        y = nextMonth.getFullYear();
      }
      week.push(this.getDayEvents(d, m, y));
    }
  }

  private setValidDate(dateToCheck: Date, selectDate: boolean = false) {
    const currDate = new Date(this._date);
    if (selectDate) {
      this.selectedDay = Calendar.dateToString(dateToCheck);
    }
    if (dateToCheck >= this.min && dateToCheck <= this.max) {
      this._date = new Date(dateToCheck);
    } else if (dateToCheck < this.min) {
      this._date = new Date(this.min);
    } else if (dateToCheck > this.max) {
      this._date = new Date(this.max);
    }
    if (currDate.getMonth() !== this.month || currDate.getFullYear() !== this.year) {
      this.refreshCalendar();
    }
  }

  private getSortedEvents(year: number, month?: number, day?: number): CalendarEvent[] {
    if (this._sortedEvents) {
      if (year != null && month == null && day == null) {
        return (Object.values(this._sortedEvents[year]) as any).flatMap((m) => (Object.values(m) as any).flatMap((mv) => mv)) || [];
      } else if (year != null && month != null && day == null) {
        if (this._sortedEvents[year] && this._sortedEvents[year][month]) {
          return (Object.values(this._sortedEvents[year][month]) as any).flatMap((m) => m) || [];
        }
        return [];
      } else if (year != null && month != null && day != null) {
        if (this._sortedEvents[year] && this._sortedEvents[year][month] && this._sortedEvents[year][month][day]) {
          return this._sortedEvents[year][month][day] || [];
        }
        return [];
      }
    }
    return [];
  }

  private sortEvents() {
    this._sortedEvents = {};
    this._events.forEach((event) => {
      this.addSortedEvent(event);
    });
  }

  private addSortedEvent(event: CalendarEvent) {
    if (!this._sortedEvents[event.startDate.getFullYear()]) {
      this._sortedEvents[event.startDate.getFullYear()] = {};
    }
    if (!this._sortedEvents[event.startDate.getFullYear()][event.startDate.getMonth()]) {
      this._sortedEvents[event.startDate.getFullYear()][event.startDate.getMonth()] = {};
    }
    if (!this._sortedEvents[event.startDate.getFullYear()][event.startDate.getMonth()][event.startDate.getDate()]) {
      this._sortedEvents[event.startDate.getFullYear()][event.startDate.getMonth()][event.startDate.getDate()] = [];
    }
    this._sortedEvents[event.startDate.getFullYear()][event.startDate.getMonth()][event.startDate.getDate()].push(event);

    this._sortedEvents[event.startDate.getFullYear()][event.startDate.getMonth()][event.startDate.getDate()]
    .sort((a: CalendarEvent, b: CalendarEvent) => {
      const eventEndDateA = a.endDate || a.startDate;
      const eventEndDateB = b.endDate || b.startDate;
      const dateRangeA = Math.abs(a.startDate.getTime() - eventEndDateA.getTime());
      const dateRangeB = Math.abs(b.startDate.getTime() - eventEndDateB.getTime());
      if (dateRangeA > dateRangeB) { // A Date Range Is More Than B
        return -1;
      } else if (dateRangeA < dateRangeB) { // A Date Range Is More Than B
        return 1;
      } else { return 0; }
    });
  }

  private getCalendarStartRange(): Date {
    const lastDateOfLastMonth = Calendar.getlastDateOfLastMonth(this._date.getMonth(), this._date.getFullYear());
    const firstWeekDayOfCurrMonth = Calendar.getfirstWeekDayOfCurrMonth(this._date.getMonth(), this._date.getFullYear());
    const lastMonth = new Date(this._date);
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    return new Date(lastMonth.getFullYear(), lastMonth.getMonth(), lastDateOfLastMonth - firstWeekDayOfCurrMonth + 1);
  }

  private getCalendarEndRange(): Date {
    const firstWeekDayOfCurrMonth = Calendar.getfirstWeekDayOfCurrMonth(this._date.getMonth(), this._date.getFullYear());
    const totalDaysInMonth = Calendar.getDaysInMonth(this._date.getMonth(), this._date.getFullYear());
    const lastWeekDayOfCurrMonth = Calendar.getlastWeekDayOfCurrMonth(this._date.getMonth(), this._date.getFullYear());
    const lastDayOffset = Calendar.daysOfWeek.length - 1 - lastWeekDayOfCurrMonth;
    let fullMonthCount = firstWeekDayOfCurrMonth + totalDaysInMonth + lastDayOffset + 1; // Used For All Days In Loop
    const calculatedWeeks = Math.floor((fullMonthCount - 1) / Calendar.daysOfWeek.length);
    if (calculatedWeeks < 6) {// If Weeks Are Less Than 6 Weeks In Month - Add Extra Days
      fullMonthCount += Calendar.daysOfWeek.length;
    }

    // Calculate Dates
    const nextMonth = new Date(this._date);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    return new Date(nextMonth.getFullYear(), nextMonth.getMonth(), fullMonthCount - totalDaysInMonth - firstWeekDayOfCurrMonth + 1);
  }

  private isEventWithinCalendarRange(event: CalendarEvent, startDate: Date, endDate: Date) {
    const eventEndDate = event.endDate || event.startDate;
      return (event.startDate >= startDate && event.startDate <= endDate) ||
      (eventEndDate >= startDate && eventEndDate <= endDate) ||
      (event.startDate <= startDate && eventEndDate >= endDate);
  }

  getDayEvents(day: number, month: number, year: number): Day {
    const today = new Date();
    return {
      day,
      date: Calendar.fullDateToString(day, month, year),
      isSelectedMonth: this._date.getMonth() === month,
      isToday: today.getDate() === day && today.getMonth() === month && today.getFullYear() === year,
      events: this.getSortedEvents(year, month, day)
    };
  }


}
