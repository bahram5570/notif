import { useMemo } from 'react';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import useCulture from '@hooks/useCulture';
import {
  CALENDAR_CELL_SIZE,
  CALENDAR_GREGORIAN_FARSI_WEEK_NAMES,
  CALENDAR_JALALI_WEEK_NAMES,
  CalendarTypeEnum,
} from '@repo/core/constants/date.constants';

const ActivationCalendarWeekTitles = () => {
  const { culture } = useCulture();

  const weeksList = useMemo(() => {
    switch (culture.calendarType) {
      case CalendarTypeEnum.Gregorian:
        return CALENDAR_GREGORIAN_FARSI_WEEK_NAMES;

      case CalendarTypeEnum.Jalali:
        return CALENDAR_JALALI_WEEK_NAMES;
    }
  }, [culture.calendarType]);

  return (
    <div className="w-fit grid grid-cols-7 justify-center gap-4 pb-2 mx-auto">
      {weeksList.map((item) => (
        <div className="flex justify-center" style={{ width: CALENDAR_CELL_SIZE }} key={item}>
          <CustomTypography fontSize="Body_Small" className="text-impo_Surface_Outline">
            {item}
          </CustomTypography>
        </div>
      ))}
    </div>
  );
};

export default ActivationCalendarWeekTitles;
