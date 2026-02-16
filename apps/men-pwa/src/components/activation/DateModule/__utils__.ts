import { currentDate } from '@repo/core/utils/dates';

import { CalendarTypeEnum, CultureTypes } from '@repo/core/providers/CultureProvider';

export const dateModuleTodaySelector = (calendarType: Pick<CultureTypes, 'calendarType'>['calendarType']) => {
  const { gDate, jDate } = currentDate();

  switch (calendarType) {
    case CalendarTypeEnum.Gregorian:
      return gDate;

    case CalendarTypeEnum.Jalali:
      return jDate;

    default:
      return jDate;
  }
};
