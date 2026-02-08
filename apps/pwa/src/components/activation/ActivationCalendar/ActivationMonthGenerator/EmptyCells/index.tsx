import { useMemo } from 'react';

import { useCulture } from '@repo/core/hooks/useCulture';
import { CalendarTypeEnum } from '@repo/core/providers/CultureProvider';
import moment from 'moment-jalaali';

import { EmptyCellsProps } from './types';

const EmptyCells = ({ firstDayOfMonth }: EmptyCellsProps) => {
  const { culture } = useCulture();

  const startingDayOfWeek = useMemo(() => {
    switch (culture.calendarType) {
      case CalendarTypeEnum.Jalali:
        return moment(firstDayOfMonth.jalaliDate, 'jYYYY/jMM/jDD').day();

      case CalendarTypeEnum.Gregorian:
        return moment(firstDayOfMonth.gregorianDate, 'YYYY-MM-DD').day() - 1;
    }
  }, [culture.calendarType]);

  let emptyCellsList = [];
  for (let i = 0; i <= startingDayOfWeek; i++) {
    emptyCellsList.push('');
  }

  return (
    <>
      {emptyCellsList.map((_, index) => (
        <div key={index} />
      ))}
    </>
  );
};

export default EmptyCells;
