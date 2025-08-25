import { useState } from 'react';

const useActivationCalendarSelectedDay = (valueHandler: (v: string) => void) => {
  const [selectedDay, setSelectedDay] = useState('');

  const selectedDayHandler = (v: string) => {
    setSelectedDay(v);
    valueHandler(v);
  };

  return { selectedDay, selectedDayHandler };
};

export default useActivationCalendarSelectedDay;
