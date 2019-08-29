import { CalendarEvent } from './calendar-event';

export interface Day {
  day: number;
  currentDay: boolean;
  currentMonth: boolean;
  currentYear: boolean;
  selectedMonth: boolean;
  events: CalendarEvent[];
}
