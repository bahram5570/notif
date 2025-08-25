import { currentDate } from '@utils/dates';

import { CalendarTypeEnum, DATE_SEPERATOR_REGEX } from '@constants/date.constants';
import moment from 'moment-jalaali';

import {
  CalendarDayInfoMakerTypes,
  CalendarIntervalMakerTypes,
  CalendarMonthInfoMakerTypes,
  SingleDateTypes,
} from './types';

export const calendarIntervalMaker: CalendarIntervalMakerTypes = (start, end, calendarType) => {
  let dateSystem = 'jYYYY/jMM/jDD';
  switch (calendarType) {
    case CalendarTypeEnum.Jalali:
      dateSystem = 'jYYYY/jMM/jDD';
      break;
    case CalendarTypeEnum.Gregorian:
      dateSystem = 'YYYY-MM-DD';
      break;
  }

  const mStart = moment(start, dateSystem);
  const mEnd = moment(end, dateSystem);
  return mEnd.diff(mStart, 'months') + 1;
};

export const calendarMonthInfoMaker: CalendarMonthInfoMakerTypes = (start, currentMonth, calendarType) => {
  const result = { beggingOfMonth: '', totalDaysOfMonth: 0, yearAndMonth: '' };

  if (calendarType === CalendarTypeEnum.Jalali) {
    const m1 = moment(start, 'jYYYY/jMM/jDD');

    const yearAndMonth = m1.add(currentMonth, 'jMonth').format('jYYYY/jMM/jDD').slice(0, 7);
    result.yearAndMonth = yearAndMonth;
    result.beggingOfMonth = yearAndMonth + '/01';

    const year = Number(yearAndMonth.split(DATE_SEPERATOR_REGEX)[0]);
    const month = Number(yearAndMonth.split(DATE_SEPERATOR_REGEX)[1]) - 1;
    result.totalDaysOfMonth = moment.jDaysInMonth(year, month);
  }

  if (calendarType === CalendarTypeEnum.Gregorian) {
    const m1 = moment(start);

    const yearAndMonth = m1.add(currentMonth, 'month').format('YYYY-MM-DD').slice(0, 7);
    result.yearAndMonth = yearAndMonth;
    result.beggingOfMonth = yearAndMonth + '-01';
    result.totalDaysOfMonth = m1.daysInMonth();
  }

  return result;
};

export const calendarDayInfoMaker: CalendarDayInfoMakerTypes = (start, currentDay, calendarType) => {
  const { gDate } = currentDate();
  const result: SingleDateTypes = { jalaliDate: '', gregorianDate: '', isToday: false };

  if (calendarType === CalendarTypeEnum.Jalali) {
    const m2 = moment(start, 'jYYYY/jMM/jDD');
    result.jalaliDate = m2.add(currentDay, 'day').format('jYYYY/jMM/jDD');
    result.gregorianDate = moment(result.jalaliDate, 'jYYYY/jMM/jDD').format('YYYY-MM-DD');
  }

  if (calendarType === CalendarTypeEnum.Gregorian) {
    const m2 = moment(start, 'YYYY-MM-DD');
    result.gregorianDate = m2.add(currentDay, 'day').format('YYYY-MM-DD');
    result.jalaliDate = moment(result.gregorianDate, 'YYYY-MM-DD').format('jYYYY/jMM/jDD');
  }

  result.isToday = gDate === result.gregorianDate;

  return result;
};
