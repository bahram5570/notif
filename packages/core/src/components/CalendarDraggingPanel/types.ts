import { CalendarDataTypes } from '../calendar/type';

export interface CalendarDraggingPanelProps {
  calendarData: CalendarDataTypes;
  selectedDate: string;
}

export type CalendarInitialSelectedDateType = string | undefined;
