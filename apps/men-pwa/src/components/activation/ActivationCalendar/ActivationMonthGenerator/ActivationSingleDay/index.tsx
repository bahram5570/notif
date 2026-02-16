import { memo, useMemo } from 'react';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { CALENDAR_CELL_SIZE, DATE_SEPERATOR_REGEX } from '@repo/core/constants/date.constants';
import { CalendarTypeEnum } from '@repo/core/providers/CultureProvider';

import { ActivationSingleDayProps } from './types';

const ActivationSingleDay = ({ isSelected, day, calendarType, selectedDayHandler }: ActivationSingleDayProps) => {
  const dayScript = useMemo(() => {
    let fullDate = '';

    switch (calendarType) {
      case CalendarTypeEnum.Gregorian:
        fullDate = day.gregorianDate;
        break;

      case CalendarTypeEnum.Jalali:
        fullDate = day.jalaliDate;
        break;
    }

    return Number(fullDate.split(DATE_SEPERATOR_REGEX)?.[2]).toString();
  }, []);

  return (
    <div
      onClick={() => selectedDayHandler(day.gregorianDate)}
      style={{ width: CALENDAR_CELL_SIZE, height: CALENDAR_CELL_SIZE }}
      className={`
                  relative 
                  flex 
                  flex-col 
                  justify-center 
                  items-center
                  rounded-lg 
                  ${isSelected ? 'bg-impo_Primary_Primary' : 'bg-impo_Transparent'}
                  ${day.isValidDate ? 'opacity-100 pointer-events-auto' : 'opacity-50 pointer-events-none'}
                `}
    >
      <CustomTypography
        fontSize="Body_Medium"
        className={`${isSelected ? 'text-impo_White' : 'text-impo_Neutral_OnBackground'}`}
      >
        {dayScript}
      </CustomTypography>
    </div>
  );
};

export default memo(ActivationSingleDay, (prevProps, nextProps) => {
  return prevProps.isSelected === nextProps.isSelected;
});
