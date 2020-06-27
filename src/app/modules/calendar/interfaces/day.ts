import { CalendarEvent } from './calendar-event';

export interface Day {
  day: number;
  date: string;
  isSelectedMonth: boolean;
  isToday: boolean;
  events: CalendarEvent[];
}
