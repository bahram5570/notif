import { useState } from 'react';

import { UseActivationCalendarSelectedDayTypes } from './types';

const useActivationCalendarSelectedDay = (props: UseActivationCalendarSelectedDayTypes) => {
  const [selectedDay, setSelectedDay] = useState('');

  const selectedDayHandler = (v: string) => {
    setSelectedDay(v);
    props.valueHandler(v);
  };

  return { selectedDay, selectedDayHandler };
};

export default useActivationCalendarSelectedDay;
