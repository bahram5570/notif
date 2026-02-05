import { useMemo } from 'react';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { toJalaliData } from '@repo/core/utils/dates';
import { addZero } from '@repo/core/utils/numbers';

import useCulture from '@hooks/useCulture';
import { CalendarTypeEnum } from '@repo/core/constants/date.constants';

import { TicketTimeProps } from './types';

const TicketTime = ({ createTime, stylingTypes }: TicketTimeProps) => {
  const { culture } = useCulture();

  const colors = {
    backgroundColor: stylingTypes === 'heading' ? 'bg-impo_Primary_OnPrimary' : 'bg-impo_Surface_OutlineVariant',
    textColor: stylingTypes === 'heading' ? 'text-impo_Primary_OnPrimary' : 'text-impo_Surface_Outline',
  };

  const date = new Date(createTime);
  const timeScript = `${date.getHours()}:${date.getMinutes()}`;

  const dateScript = useMemo(() => {
    const fullDate = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;

    switch (culture.calendarType) {
      case CalendarTypeEnum.Jalali:
        return toJalaliData(fullDate);
      case CalendarTypeEnum.Gregorian:
        return fullDate.replaceAll('-', '/');
      default:
        return toJalaliData(fullDate);
    }
  }, [culture.calendarType, date]);

  return (
    <div className="flex items-center gap-1">
      <CustomTypography fontSize="Body_Small" className={`${colors.textColor}`}>
        {dateScript}
      </CustomTypography>

      <div className={`w-[1px] h-[18px]  ${colors.backgroundColor}`} />

      <CustomTypography fontSize="Body_Small" className={`${colors.textColor}`}>
        {timeScript}
      </CustomTypography>
    </div>
  );
};

export default TicketTime;
