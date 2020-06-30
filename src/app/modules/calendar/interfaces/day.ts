import { CalendarEvent } from './calendar-event';

export interface Day {
  day: number;
  month: number;
  year: number;
  date: string;
  events: CalendarEvent[];
}
