import { useMemo } from 'react';

import useCulture from '@hooks/useCulture';
import { CalendarTypeEnum } from '@repo/core/constants/date.constants';

const useActivationBirthdayDefaultDate = () => {
  const { culture } = useCulture();

  return useMemo(() => {
    switch (culture.calendarType) {
      case CalendarTypeEnum.Jalali:
        return '1380/05/05';

      case CalendarTypeEnum.Gregorian:
        return '2000-05-05';

      default:
        return '1380/05/05';
    }
  }, [culture.calendarType]);
};

export default useActivationBirthdayDefaultDate;
