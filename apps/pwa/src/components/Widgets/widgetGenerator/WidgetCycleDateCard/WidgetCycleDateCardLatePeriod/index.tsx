import { useEffect, useState } from 'react';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { currentDate } from '@repo/core/utils/dates';

import { useCulture } from '@repo/core/hooks/useCulture';
import { CalendarTypeEnum } from '@repo/core/providers/CultureProvider';
import moment from 'moment-jalaali';

const WidgetCycleDateCardLatePeriod = () => {
  const { jDate, gDate } = currentDate();

  const { culture } = useCulture();
  const [currentDay, setCurrentDay] = useState<string>('');

  useEffect(() => {
    if (culture.calendarType === CalendarTypeEnum.Gregorian) {
      const gregorianMoment = moment(gDate, 'YYYY/MM/DD');
      const gregorianDay = parseInt(gregorianMoment.format('DD'));

      setCurrentDay(gregorianDay.toString());
    }

    if (culture.calendarType === CalendarTypeEnum.Jalali) {
      const jalaliMoment = moment(jDate, 'jYYYY/jMM/jDD');
      const jalaliDay = parseInt(jalaliMoment.format('jDD'));

      setCurrentDay(jalaliDay.toString());
    }
  }, [culture.calendarType]);

  return (
    <div
      className="absolute top-0 bottom-0 w-6 flex items-center justify-center h-full px-2 rounded-full bg-impo_Grey_500"
      style={{
        right: `96%`,
      }}
    >
      <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
        {currentDay}
      </CustomTypography>
    </div>
  );
};

export default WidgetCycleDateCardLatePeriod;
