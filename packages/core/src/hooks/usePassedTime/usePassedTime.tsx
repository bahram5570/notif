import { useMemo } from 'react';

import { gregorianFarsiPassedTime, jalaaliPassedTime } from '../../utils/dates';

import { CalendarTypeEnum } from '../../providers/CultureProvider';
import { useCulture } from '../useCulture';

export const usePassedTime = (createTime: string) => {
  const { culture } = useCulture();

  const result = useMemo(() => {
    switch (culture.calendarType) {
      case CalendarTypeEnum.Jalali:
        return jalaaliPassedTime(createTime);
      case CalendarTypeEnum.Gregorian:
        return gregorianFarsiPassedTime(createTime);
      default:
        return jalaaliPassedTime(createTime);
    }
  }, [createTime, culture.calendarType]);

  return result;
};
