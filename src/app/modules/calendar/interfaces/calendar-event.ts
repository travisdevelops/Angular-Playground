import { Vector } from '@classes/vector';

export interface CalendarEvent {
    startDate: Date;
    endDate?: Date;
    createdBy?: string;
    title: string;
    color?: Vector;
    meta?: any;
}
