import { CalendarTypeEnum, CultureTypes } from '@repo/core/providers/CultureProvider';

import { ActivationCalendarTypes } from '../../types';

export type UseActivationCalendarDataTypes = Pick<ActivationCalendarTypes, 'startDate' | 'endDate'> &
  Pick<CultureTypes, 'calendarType'>;

export type SingleDateTypes = { isToday: boolean; jalaliDate: string; gregorianDate: string; isValidDate: boolean };

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
  props: {
    beggingOfMonth: string;
    currentDay: number;
    calendarType: CalendarTypeEnum;
  } & Pick<UseActivationCalendarDataTypes, 'startDate' | 'endDate'>,
) => SingleDateTypes;
