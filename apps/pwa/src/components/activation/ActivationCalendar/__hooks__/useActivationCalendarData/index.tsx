import { useEffect, useState } from 'react';

import { calendarDayInfoMaker, calendarIntervalMaker, calendarMonthInfoMaker } from './__utils__';

import { CalendarDataTypes, SingleDateTypes, UseActivationCalendarDataTypes } from './types';

const useActivationCalendarData = ({ startDate, endDate, calendarType }: UseActivationCalendarDataTypes) => {
  const [calendarData, setCalendarData] = useState<CalendarDataTypes>([]);

  useEffect(() => {
    const calendarInterval = calendarIntervalMaker(startDate, endDate, calendarType);
    let result: CalendarDataTypes = [];

    for (let i = 0; i <= calendarInterval; i++) {
      const monthInfo = calendarMonthInfoMaker(startDate, i, calendarType);
      const list: SingleDateTypes[] = [];

      for (let j = 0; j < monthInfo.totalDaysOfMonth; j++) {
        const dayInfo = calendarDayInfoMaker({
          endDate,
          startDate,
          calendarType,
          currentDay: j,
          beggingOfMonth: monthInfo.beggingOfMonth,
        });

        const singleDate: SingleDateTypes = {
          gregorianDate: dayInfo.gregorianDate,
          isValidDate: dayInfo.isValidDate,
          jalaliDate: dayInfo.jalaliDate,
          isToday: dayInfo.isToday,
        };

        list.push(singleDate);
      }

      result.push(list);
    }

    setCalendarData(result.reverse());
  }, [startDate, endDate, calendarType]);

  return { calendarData };
};

export default useActivationCalendarData;
