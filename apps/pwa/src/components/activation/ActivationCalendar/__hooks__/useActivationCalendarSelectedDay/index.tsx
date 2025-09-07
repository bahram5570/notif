import { useEffect, useState } from 'react';

import { toGregorianData } from '@utils/dates';

import { CalendarTypeEnum } from '@constants/date.constants';
import useIsRendered from '@hooks/useIsRendered';

import { UseActivationCalendarSelectedDayTypes } from './types';

const useActivationCalendarSelectedDay = (props: UseActivationCalendarSelectedDayTypes) => {
  const { isRendered } = useIsRendered();
  const [selectedDay, setSelectedDay] = useState('');

  const selectedDayHandler = (v: string) => {
    setSelectedDay(v);
    props.valueHandler(v);
  };

  useEffect(() => {
    if (!isRendered) {
      return;
    }

    let result = props.endDate;

    if (props.calendarType === CalendarTypeEnum.Jalali) {
      result = toGregorianData(props.endDate);
    }

    selectedDayHandler(result);
  }, [props.endDate, props.calendarType, isRendered]);

  return { selectedDay, selectedDayHandler };
};

export default useActivationCalendarSelectedDay;
