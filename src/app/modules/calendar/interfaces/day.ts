import { CalendarEvent } from './calendar-event';

export interface Day {
  day: number;
  currentDay: boolean;
  currentMonth: boolean;
  selectedMonth: boolean;
  events: CalendarEvent[];
}
