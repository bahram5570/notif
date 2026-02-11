import { useEffect, useState } from 'react';

import { currentDate } from '../../../../../utils/dates';

import moment from 'moment-jalaali';

import { useCulture } from '../../../../../hooks/useCulture';
import { CalendarTypeEnum } from '../../../../../providers/CultureProvider';
import { CustomTypography } from '../../../../ui/CustomTypography';

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
      style={{ right: `96%` }}
      className="absolute top-0 bottom-0 w-6 flex items-center justify-center h-full px-2 rounded-full bg-impo_Grey_500"
    >
      <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
        {currentDay}
      </CustomTypography>
    </div>
  );
};

export default WidgetCycleDateCardLatePeriod;
