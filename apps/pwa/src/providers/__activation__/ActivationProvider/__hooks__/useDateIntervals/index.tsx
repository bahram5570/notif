import { useMemo } from 'react';

import { currentDate } from '@utils/dates';

import {
  BREAST_FEEDING_INTERVAL,
  CalendarTypeEnum,
  PERIOD_INTERVAL,
  PREGNANCY_INTERVAL,
} from '@constants/date.constants';
import useCulture from '@hooks/useCulture';
import m from 'moment-jalaali';

const { jDate, gDate } = currentDate();

const useDateIntervals = () => {
  const { culture } = useCulture();

  return useMemo(() => {
    const dateIntervals = {
      periodEnd: '',
      periodStart: '',
      giveBirthEnd: '',
      giveBirthStart: '',
      breastfeedingEnd: '',
      pregnancyPeriodEnd: '',
      breastfeedingStart: '',
      pregnancyPeriodStart: '',
    };

    if (culture.calendarType === CalendarTypeEnum.Gregorian) {
      dateIntervals.periodEnd = gDate;
      dateIntervals.giveBirthStart = gDate;
      dateIntervals.breastfeedingStart = gDate;
      dateIntervals.pregnancyPeriodEnd = gDate;
      dateIntervals.giveBirthEnd = m(gDate).add(PREGNANCY_INTERVAL, 'day').format('YYYY-MM-DD');
      dateIntervals.periodStart = m(gDate).subtract(PERIOD_INTERVAL, 'day').format('YYYY-MM-DD');
      dateIntervals.breastfeedingEnd = m(gDate).add(BREAST_FEEDING_INTERVAL, 'day').format('YYYY-MM-DD');
      dateIntervals.pregnancyPeriodStart = m(gDate).subtract(PREGNANCY_INTERVAL, 'day').format('YYYY-MM-DD');
    }

    if (culture.calendarType === CalendarTypeEnum.Jalali) {
      dateIntervals.periodEnd = jDate;
      dateIntervals.giveBirthStart = jDate;
      dateIntervals.breastfeedingStart = jDate;
      dateIntervals.pregnancyPeriodEnd = jDate;
      dateIntervals.giveBirthEnd = m(gDate).add(PREGNANCY_INTERVAL, 'day').format('jYYYY/jMM/jDD');
      dateIntervals.periodStart = m(gDate).subtract(PERIOD_INTERVAL, 'day').format('jYYYY/jMM/jDD');
      dateIntervals.breastfeedingEnd = m(gDate).add(BREAST_FEEDING_INTERVAL, 'day').format('jYYYY/jMM/jDD');
      dateIntervals.pregnancyPeriodStart = m(gDate).subtract(PREGNANCY_INTERVAL, 'day').format('jYYYY/jMM/jDD');
    }

    return dateIntervals;
  }, [culture.calendarType]);
};

export default useDateIntervals;
