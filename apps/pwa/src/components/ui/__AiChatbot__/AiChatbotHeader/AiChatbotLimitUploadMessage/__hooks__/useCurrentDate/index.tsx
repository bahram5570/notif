import { useEffect, useState } from 'react';

import { gregorianFarsiMonthNames, jalaaliMonthNames } from '@repo/core/utils/dates';

import useCulture from '@hooks/useCulture';
import { CalendarTypeEnum } from '@repo/core/constants/date.constants';
import moment from 'moment-jalaali';

const useCurrentDate = ({ mediaLimitDate }: { mediaLimitDate: string | undefined }) => {
  const { culture } = useCulture();
  const [currentDate, setCurrentDate] = useState('');
  useEffect(() => {
    if (mediaLimitDate) {
      const gregorianMoment = moment(mediaLimitDate, 'YYYY-MM-DD');

      if (culture.calendarType === CalendarTypeEnum.Gregorian) {
        const gregorianDate = gregorianMoment.format('YYYY-MM-DD');
        const info = gregorianDate.split('/');
        const script = `${Number(info[2])} ${gregorianFarsiMonthNames(Number(info[1]) - 1)}`;

        setCurrentDate(script);
      }

      if (culture.calendarType === CalendarTypeEnum.Jalali) {
        const jalaaliMoment = gregorianMoment.format('jYYYY/jMM/jDD');
        const info = jalaaliMoment.split('/');
        const script = `${Number(info[2])} ${jalaaliMonthNames(Number(info[1]) - 1)}`;

        setCurrentDate(script);
      }
    }
  }, [culture.calendarType, mediaLimitDate]);

  return { currentDate };
};

export default useCurrentDate;
