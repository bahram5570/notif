import { useMemo } from 'react';

import { gregorianFarsiPassedTime, jalaaliPassedTime } from '@repo/core/utils/dates';

import { useCulture } from '@repo/core/hooks/useCulture';
import { CalendarTypeEnum } from '@repo/core/providers/CultureProvider';

const useShareExperiencePassedTime = (createTime: string) => {
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

export default useShareExperiencePassedTime;
