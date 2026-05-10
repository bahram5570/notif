import { useEffect, useState } from 'react';

import { gregorianFarsiScriptDate, jalaaliScriptDate } from '../../utils/dates';

import moment from 'moment-jalaali';

import { CalendarTypeEnum } from '../../providers/CultureProvider';
import { useCulture } from '../useCulture';
import { UseCalendarDateFormatPropsType } from './type';

export const useCalendarDateFormat = ({ date }: UseCalendarDateFormatPropsType) => {
  const { culture } = useCulture();
  const [currentDate, setCurrentDate] = useState<string>();

  useEffect(() => {
    const gregorianMoment = moment(date, 'YYYY-MM-DD');
    const gregorianDate = gregorianMoment.format('YYYY-MM-DD');
    const jalaaliMoment = gregorianMoment.format('jYYYY/jMM/jDD');

    if (culture.calendarType === CalendarTypeEnum.Gregorian) {
      const gregorianFarsMonth = gregorianFarsiScriptDate(gregorianDate);
      setCurrentDate(gregorianFarsMonth);
    }

    if (culture.calendarType === CalendarTypeEnum.Jalali) {
      const jalaaliMonth = jalaaliScriptDate(jalaaliMoment);
      setCurrentDate(jalaaliMonth);
    }
  }, [culture.calendarType]);

  return { currentDate };
};
