import { useMemo } from 'react';

import { toJalaliData } from '@utils/dates';
import { addZero } from '@utils/scripts';

import Dark_Typography from '@components/ui/Dark_Typography';
import { CalendarTypeEnum } from '@constants/date.constants';
import useCulture from '@hooks/useCulture';

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
      <Dark_Typography fontSize="Body_Small" className={`${colors.textColor}`}>
        {dateScript}
      </Dark_Typography>

      <div className={`w-[1px] h-[18px]  ${colors.backgroundColor}`} />

      <Dark_Typography fontSize="Body_Small" className={`${colors.textColor}`}>
        {timeScript}
      </Dark_Typography>
    </div>
  );
};

export default TicketTime;
