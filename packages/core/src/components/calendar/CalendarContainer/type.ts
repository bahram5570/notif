import { CalendarDataTypes, SelectedDateHandlerTypes, SingleDateTypes } from '../type';

export interface CalendarContainerProps {
  selectedDateHandler: SelectedDateHandlerTypes;
  calendarData: CalendarDataTypes;
  selectedDate: string;
  hasResetBtn: boolean;
}

export type MonthsListTypes = [string, SingleDateTypes[]][];
