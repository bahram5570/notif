import { useMemo } from 'react';

import useCulture from '@hooks/useCulture';
import { CalendarTypeEnum } from '@repo/core/constants/date.constants';

import { MonthGeneratorDateTypesTypes } from '../../types';

const useMonthGeneratorDateTypeInfo = () => {
  const { culture } = useCulture();

  return useMemo(() => {
    let result: MonthGeneratorDateTypesTypes = 'jalaaliDate';

    switch (culture.calendarType) {
      case CalendarTypeEnum.Jalali:
        result = 'jalaaliDate';
        break;
      case CalendarTypeEnum.Gregorian:
        result = 'gregorianDate';
        break;
      default:
        result = 'jalaaliDate';
        break;
    }

    return result;
  }, [culture.calendarType]);
};

export default useMonthGeneratorDateTypeInfo;
