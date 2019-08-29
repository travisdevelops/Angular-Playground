import {CalendarEvent} from '../interfaces/calendar-event';
import {Day} from '../interfaces/day';

export class Calendar {
  constructor({date = new Date(), events = []} = {}) {
    this.date = date;
    this.weeks = [];
    this.events = events;
  }
  public static daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  public static monthNames = ['January', 'February', 'March',
    'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public date: Date;
  public month: string;
  public year: number;
  public weeks: any[];
  public events: CalendarEvent[];

  // Get First Day of Selected Month - Day of Week 0-6
  static getFirstDayOfMonth(month, year): number {
    return new Date(year, month).getDay();
  }

  // Get Last Day of Selected Month - Day of Week 0-6
  static getLastDayOfMonth(month, year): number {
    return new Date(year, month + 1, 0).getDay();
  }

  // Get Last Day of Selected Month - Day Number
  static getDaysInMonth(month, year): number {
    return new Date(year, month + 1, 0).getDate();
  }

  static getLastMonthLastDay(month, year): number {
    return new Date(year, month, 0).getDate();
  }

  // Previous Month
  prevMonth(): void {
    this.date.setMonth(this.date.getMonth() - 1);
    this.calculateDate();
  }

  // Next Month
  nextMonth(): void {
    this.date.setMonth(this.date.getMonth() + 1);
    this.calculateDate();
  }

  // Calculate Date
  calculateDate(): void {
    this.month = Calendar.monthNames[this.date.getMonth()];
    this.year = this.date.getFullYear();
    this.weeks = [];
    let week = [];

    // Do Calculations
    const lastMonthLastDay = Calendar.getLastMonthLastDay(this.date.getMonth(), this.date.getFullYear());
    const firstDayOfMonth = Calendar.getFirstDayOfMonth(this.date.getMonth(), this.date.getFullYear());
    const totalDaysInMonth = Calendar.getDaysInMonth(this.date.getMonth(), this.date.getFullYear());
    const lastDayOfMonth = Calendar.getLastDayOfMonth(this.date.getMonth(), this.date.getFullYear());
    const lastDayOffset = Calendar.daysOfWeek.length - 1 - lastDayOfMonth;
    let fullMonthCount = firstDayOfMonth + totalDaysInMonth + lastDayOffset + 1; // Used For All Days In Loop
    const calculatedWeeks = Math.floor((fullMonthCount - 1) / Calendar.daysOfWeek.length);
    if (calculatedWeeks < 6) {// If Weeks Are Less Than 6 Weeks In Month - Add Extra Days
      fullMonthCount += Calendar.daysOfWeek.length;
    }

    // Calculate Dates
    const lastMonth = new Date(this.date);
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    const nextMonth = new Date(this.date);
    nextMonth.setMonth(nextMonth.getMonth() + 1);

    // Set Dates
    for (let i = 0; i < fullMonthCount; i++) {
      const currentWeekCount = Math.floor(i / Calendar.daysOfWeek.length);
      if (currentWeekCount > this.weeks.length) {// If New Week
        this.weeks.push(week);
        week = [];
      }

      if (i < firstDayOfMonth) {// Last Month
        const day = lastMonthLastDay - firstDayOfMonth + 1 + i;
        week.push(this.getDayEvents(day, lastMonth.getMonth(), lastMonth.getFullYear()));
      } else if (i < firstDayOfMonth + totalDaysInMonth) {// Current Month
        const day = i - firstDayOfMonth + 1;
        week.push(this.getDayEvents(day, this.date.getMonth(), this.date.getFullYear()));
      } else {// Next Month
        const day = i - totalDaysInMonth - firstDayOfMonth + 1;
        week.push(this.getDayEvents(day, nextMonth.getMonth(), nextMonth.getFullYear())); }// Events For Next Month
    }

  }

  getDayEvents(day: number, month: number, year: number): Day {
    const today = new Date();
    const searchDate = new Date(year, month, day);
    const events: CalendarEvent[] = this.events.filter((event) => {
      return event.startDate <= searchDate && event.endDate >= searchDate;
    });

    // Sort Events By How Much Days They Span - Makes Longer Ranged Dates Stay On Top
    events.sort((a: CalendarEvent, b: CalendarEvent) => {
      const dateRangeA = Math.abs(a.startDate.getTime() - a.endDate.getTime());
      const dateRangeB = Math.abs(b.startDate.getTime() - b.endDate.getTime());
      if (dateRangeA > dateRangeB) { // A Date Range Is More Than B
        return -1;
      } else if (dateRangeA < dateRangeB) { // A Date Range Is More Than B
        return 1;
      } else { return 0; }
    });

    return {
      day: day,
      selectedMonth: this.date.getMonth() === month,
      currentDay: today.getDate() === day,
      currentMonth: today.getMonth() === month,
      currentYear: today.getFullYear() === year,
      events: events
    };
  }


}
