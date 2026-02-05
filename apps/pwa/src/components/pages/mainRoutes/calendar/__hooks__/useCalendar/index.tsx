import { useEffect, useState } from 'react';

import { currentDate } from '@repo/core/utils/dates';

import useSignDateState from '@hooks/__sign__/useSignDateState';
import useSignInteractiveBanner from '@hooks/__sign__/useSignInteractiveBanner';
import useCulture from '@hooks/useCulture';
import { CalendarTypeEnum } from '@repo/core/constants/date.constants';
import moment from 'moment-jalaali';

import useCalendarGetData from '../useCalendarGetData';
import { CalendarDataTypes, CalendarGuideInfoTypes, OnValuesTypes } from '../useCalendarGetData/types';
import { SelectedDateHandlerTypes } from './types';

const { jDate, gDate } = currentDate();

const useCalendar = () => {
  const [calendarGuideInfo, setCalendarGuideInfo] = useState<CalendarGuideInfoTypes | null>(null);
  const [calendarData, setCalendarData] = useState<CalendarDataTypes | null>(null);
  const { calendarInitailSelectedDate } = useSignDateState();
  const { culture } = useCulture();

  const valuesHandler = (v: OnValuesTypes) => {
    setCalendarGuideInfo(v.calendarGuideInfo);
    setCalendarData(v.calendarData);
  };

  const { isLoading } = useCalendarGetData({ onValues: valuesHandler, hasSigns: true });
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const { isLoadedHandler } = useSignInteractiveBanner();

  useEffect(() => {
    let initialDate = jDate;

    if (calendarInitailSelectedDate) {
      switch (culture.calendarType) {
        case CalendarTypeEnum.Jalali:
          initialDate = moment(calendarInitailSelectedDate, 'YYYY-MM-DD').format('jYYYY/jMM/jDD');
          break;
        case CalendarTypeEnum.Gregorian:
          initialDate = calendarInitailSelectedDate;
          break;
      }
    } else {
      switch (culture.calendarType) {
        case CalendarTypeEnum.Jalali:
          initialDate = jDate;
          break;
        case CalendarTypeEnum.Gregorian:
          initialDate = gDate;
          break;
      }
    }

    setSelectedDate(initialDate);
  }, [culture.calendarType]);

  useEffect(() => {
    if (calendarData && !isLoading) {
      isLoadedHandler();
    }
  }, [isLoading, calendarData]);

  const selectedDateHandler: SelectedDateHandlerTypes = (v) => {
    setSelectedDate(v);
  };

  return { isLoading, calendarData, calendarGuideInfo, selectedDate, selectedDateHandler };
};

export default useCalendar;
