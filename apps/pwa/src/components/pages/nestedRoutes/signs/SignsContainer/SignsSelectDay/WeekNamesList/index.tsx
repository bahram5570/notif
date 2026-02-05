import { useMemo } from 'react';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { gregorianFarsiWeekNames, jalaaliWeekNames } from '@repo/core/utils/dates';

import useCulture from '@hooks/useCulture';
import { CalendarTypeEnum } from '@repo/core/constants/date.constants';
import moment from 'moment-jalaali';

import { WeekNamesListProps } from './types';

const WeekNamesList = ({ infoList, slide }: WeekNamesListProps) => {
  const { culture } = useCulture();

  const currentInfo = infoList?.[slide];
  const currentJalaaliDate = currentInfo.jalaaliDate;
  const currentGregorianDateDate = currentInfo.gregorianDate;

  const weekNames = useMemo(() => {
    const result = { today: '', yesterday: '', tomorrow: '' };

    if (currentInfo) {
      if (culture.calendarType === CalendarTypeEnum.Jalali) {
        const todayDate = moment(currentJalaaliDate, 'jYYYY/jMM/jDD').day();
        const tommorowDate = moment(currentJalaaliDate, 'jYYYY/jMM/jDD').add(1, 'day').day();
        const yesterdayDate = moment(currentJalaaliDate, 'jYYYY/jMM/jDD').subtract(1, 'day').day();

        result.today = jalaaliWeekNames(todayDate);
        result.tomorrow = jalaaliWeekNames(tommorowDate);
        result.yesterday = jalaaliWeekNames(yesterdayDate);
      }

      if (culture.calendarType === CalendarTypeEnum.Gregorian) {
        const todayDate = moment(currentGregorianDateDate, 'YYYY-MM-DD').day();
        const tommorowDate = moment(currentGregorianDateDate, 'YYYY-MM-DD').add(1, 'day').day();
        const yesterdayDate = moment(currentGregorianDateDate, 'YYYY-MM-DD').subtract(1, 'day').day();

        result.today = gregorianFarsiWeekNames(todayDate);
        result.tomorrow = gregorianFarsiWeekNames(tommorowDate);
        result.yesterday = gregorianFarsiWeekNames(yesterdayDate);
      }
    }

    return result;
  }, [culture.calendarType, currentGregorianDateDate, currentJalaaliDate]);

  return (
    <div className="w-full grid grid-cols-3">
      <CustomTypography fontSize="Body_Medium" className="mr-auto text-center text-impo_Surface_Outline">
        {weekNames.tomorrow}
      </CustomTypography>

      <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground text-center mx-auto">
        {weekNames.today}
      </CustomTypography>

      <CustomTypography fontSize="Body_Medium" className="ml-auto text-center text-impo_Surface_Outline">
        {weekNames.yesterday}
      </CustomTypography>
    </div>
  );
};

export default WeekNamesList;
