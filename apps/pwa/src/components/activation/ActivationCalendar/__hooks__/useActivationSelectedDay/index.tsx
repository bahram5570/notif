import { useState } from 'react';

const useActivationSelectedDay = () => {
  const [selectedDay, setSelectedDay] = useState('');

  const selectedDayHandler = (v: string) => {
    setSelectedDay(v);
  };

  return { selectedDay, selectedDayHandler };
};

export default useActivationSelectedDay;
