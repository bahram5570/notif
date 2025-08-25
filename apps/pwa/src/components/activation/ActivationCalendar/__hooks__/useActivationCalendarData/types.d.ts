import { CalendarTypeEnum } from '@constants/date.constants';

import { ActivationCalendarTypes } from '../../types';

export type UseActivationCalendarDataTypes = Pick<ActivationCalendarTypes, 'periodEnd' | 'periodStart'>;

export type SingleDateTypes = { isToday: boolean; jalaliDate: string; gregorianDate: string };

export type CalendarIntervalMakerTypes = (start: string, end: string, calendarType: CalendarTypeEnum) => number;

export type CalendarDataTypes = SingleDateTypes[][];

export type CalendarMonthInfoMakerTypes = (
  start: string,
  currentMonth: number,
  calendarType: CalendarTypeEnum,
) => {
  yearAndMonth: string;
  beggingOfMonth: string;
  totalDaysOfMonth: number;
};

export type CalendarDayInfoMakerTypes = (
  start: string,
  currentDay: number,
  calendarType: CalendarTypeEnum,
) => SingleDateTypes;
