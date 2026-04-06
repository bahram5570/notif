import { useEffect, useState } from 'react';

import { CalendarDataTypes, OnValuesTypes } from '@repo/core/components/calendar';
import { currentDate } from '@repo/core/utils/dates';

import { SelectedDateHandlerTypes } from '@components/pages/mainRoutes/calendar/__hooks__/useCalendar/types';
import useCalendarGetData from '@components/pages/mainRoutes/calendar/__hooks__/useCalendarGetData';

const { jDate } = currentDate();

const useCalendar = ({ dateTime }: { dateTime: string }) => {
  const [calendarData, setCalendarData] = useState<CalendarDataTypes | null>();

  const valuesHandler = (v: OnValuesTypes) => {
    setCalendarData(v.calendarData);
  };

  const { isLoading } = useCalendarGetData({ onValues: valuesHandler, hasSigns: false });
  const [selectedDate, setSelectedDate] = useState(jDate);

  useEffect(() => {
    if (dateTime) {
      setSelectedDate(dateTime);
    }
  }, [dateTime]);

  const selectedDateHandler: SelectedDateHandlerTypes = (v) => {
    setSelectedDate(v);
  };

  return { isLoading, calendarData, selectedDate, selectedDateHandler };
};

export default useCalendar;
