import { useEffect, useState } from 'react';

import { calendarDayInfoMaker, calendarIntervalMaker, calendarMonthInfoMaker } from './__utils__';

import useCulture from '@hooks/useCulture';

import { CalendarDataTypes, SingleDateTypes, UseActivationCalendarDataTypes } from './types';

const useActivationCalendarData = ({ periodStart, periodEnd }: UseActivationCalendarDataTypes) => {
  const { culture } = useCulture();
  const [calendarData, setCalendarData] = useState<CalendarDataTypes>([]);

  useEffect(() => {
    const calendarInterval = calendarIntervalMaker(periodStart, periodEnd, culture.calendarType);
    let result: CalendarDataTypes = [];

    for (let i = 0; i <= calendarInterval; i++) {
      const monthInfo = calendarMonthInfoMaker(periodStart, i, culture.calendarType);
      const list: SingleDateTypes[] = [];

      for (let j = 0; j < monthInfo.totalDaysOfMonth; j++) {
        const dayInfo = calendarDayInfoMaker(monthInfo.beggingOfMonth, j, culture.calendarType);

        const singleDate: SingleDateTypes = {
          gregorianDate: dayInfo.gregorianDate,
          jalaliDate: dayInfo.jalaliDate,
          isToday: dayInfo.isToday,
        };

        list.push(singleDate);
      }

      // result = { ...result, [monthInfo.yearAndMonth]: list };
      result.push(list);
    }

    setCalendarData(result);
  }, [periodStart, periodEnd, culture.calendarType]);

  return { calendarData };
};

export default useActivationCalendarData;
