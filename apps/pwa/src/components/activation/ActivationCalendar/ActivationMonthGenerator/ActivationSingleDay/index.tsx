import { memo, useMemo } from 'react';

import Typography from '@components/ui/Typography';
import { CALENDAR_CELL_SIZE, CalendarTypeEnum, DATE_SEPERATOR_REGEX } from '@constants/date.constants';
import useTheme from '@hooks/useTheme';

import { ActivationSingleDayProps } from './types';

const ActivationSingleDay = ({ isSelected, day, calendarType, selectedDayHandler }: ActivationSingleDayProps) => {
  const { colors } = useTheme();

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
      className="relative rounded-lg flex flex-col justify-center items-center"
      style={{
        width: CALENDAR_CELL_SIZE,
        height: CALENDAR_CELL_SIZE,
        backgroundColor: isSelected ? colors.PrimaryWoman_Primary : colors.Transparent,
      }}
    >
      <Typography
        scale="Body"
        size="Medium"
        color="FREE-STYLE"
        freeColor={isSelected ? colors.White : colors.Neutral_OnBackground}
      >
        {dayScript}
      </Typography>
    </div>
  );
};

export default memo(ActivationSingleDay, (prevProps, nextProps) => {
  return prevProps.isSelected === nextProps.isSelected;
});
