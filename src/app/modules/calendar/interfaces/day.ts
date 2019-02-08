import { CalendarEvent } from './calendar-event';

export interface Day {
     day: number;
     currentMonth: boolean;
     events: CalendarEvent[];
}
