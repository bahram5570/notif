import { useMemo } from 'react';

import { currentDate } from '@repo/core/utils/dates';

import useCulture from '@hooks/useCulture';
import { CalendarTypeEnum, GREGORIAN_START_DATE, JALALI_START_DATE } from '@repo/core/constants/date.constants';

const useStartEndDate = () => {
  const { culture } = useCulture();

  return useMemo(() => {
    const { gDate, jDate } = currentDate();
    const result = { startDate: JALALI_START_DATE, endDate: jDate, calendarType: culture.calendarType };

    switch (culture.calendarType) {
      case CalendarTypeEnum.Gregorian:
        result.endDate = gDate;
        result.startDate = GREGORIAN_START_DATE;
        break;

      case CalendarTypeEnum.Jalali:
        result.endDate = jDate;
        result.startDate = JALALI_START_DATE;
        break;
    }

    return result;
  }, [culture.calendarType]);
};

export default useStartEndDate;
