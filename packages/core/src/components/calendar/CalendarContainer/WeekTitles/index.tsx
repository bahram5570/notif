import { useMemo } from 'react';

import {
  CALENDAR_CELL_SIZE,
  CALENDAR_GREGORIAN_FARSI_WEEK_NAMES,
  CALENDAR_JALALI_WEEK_NAMES,
} from '../../../../constants/date.constants';
import { useCulture } from '../../../../hooks/useCulture';
import { CalendarTypeEnum } from '../../../../providers/CultureProvider';
import { CustomTypography } from '../../../ui/CustomTypography';

const WeekTitles = () => {
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
    <div className="w-fit grid grid-cols-7 justify-center gap-4  mx-auto">
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

export default WeekTitles;
