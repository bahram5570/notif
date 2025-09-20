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
  if (calendarType === CalendarTypeEnum.Jalali) {
    const mStart = moment(start, 'jYYYY/jMM/jDD');
    const mEnd = moment(end, 'jYYYY/jMM/jDD');
    return mEnd.diff(mStart, 'months');
  }

  const mStart = moment(start, 'jYYYY/jMM/jDD');
  const mEnd = moment(end, 'jYYYY/jMM/jDD');
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

export const calendarDayInfoMaker: CalendarDayInfoMakerTypes = (props) => {
  const { gDate } = currentDate();
  const result: SingleDateTypes = { jalaliDate: '', gregorianDate: '', isToday: false, isValidDate: false };

  let validation1 = false;
  let validation2 = false;

  if (props.calendarType === CalendarTypeEnum.Jalali) {
    const m = moment(props.beggingOfMonth, 'jYYYY/jMM/jDD');
    result.jalaliDate = m.add(props.currentDay, 'day').format('jYYYY/jMM/jDD');
    result.gregorianDate = moment(result.jalaliDate, 'jYYYY/jMM/jDD').format('YYYY-MM-DD');

    validation1 = moment(result.jalaliDate, 'jYYYY/jMM/jDD').isSameOrAfter(moment(props.startDate, 'jYYYY/jMM/jDD'));
    validation2 = moment(result.jalaliDate, 'jYYYY/jMM/jDD').isSameOrBefore(moment(props.endDate, 'jYYYY/jMM/jDD'));
  }

  if (props.calendarType === CalendarTypeEnum.Gregorian) {
    const m = moment(props.beggingOfMonth, 'YYYY-MM-DD');
    result.gregorianDate = m.add(props.currentDay, 'day').format('YYYY-MM-DD');
    result.jalaliDate = moment(result.gregorianDate, 'YYYY-MM-DD').format('jYYYY/jMM/jDD');

    validation1 = moment(result.gregorianDate, 'YYYY-MM-DD').isSameOrAfter(moment(props.startDate, 'YYYY-MM-DD'));
    validation2 = moment(result.gregorianDate, 'YYYY-MM-DD').isSameOrBefore(moment(props.endDate, 'YYYY-MM-DD'));
  }

  if (validation1 && validation2) {
    result.isValidDate = true;
  }

  result.isToday = gDate === result.gregorianDate;

  return result;
};
