import { useEffect, useState } from 'react';

import { toGregorianData } from '@utils/dates';

import { CalendarTypeEnum } from '@constants/date.constants';

import { UseActivationCalendarSelectedDayTypes } from './types';

const useActivationCalendarSelectedDay = (props: UseActivationCalendarSelectedDayTypes) => {
  const [selectedDay, setSelectedDay] = useState('');

  const selectedDayHandler = (v: string) => {
    setSelectedDay(v);
    props.valueHandler(v);
  };

  useEffect(() => {
    let result = props.endDate;

    if (props.calendarType === CalendarTypeEnum.Jalali) {
      result = toGregorianData(props.endDate);
    }

    selectedDayHandler(result);
  }, [props.endDate, props.calendarType]);

  return { selectedDay, selectedDayHandler };
};

export default useActivationCalendarSelectedDay;
