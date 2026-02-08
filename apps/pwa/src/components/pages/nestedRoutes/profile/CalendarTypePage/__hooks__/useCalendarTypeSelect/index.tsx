import { useEffect, useRef, useState } from 'react';

import { useCulture } from '@repo/core/hooks/useCulture';
import { CalendarTypeEnum } from '@repo/core/providers/CultureProvider';

const useCalendarTypeSelect = () => {
  const { culture } = useCulture();
  const defaultValue = useRef<null | CalendarTypeEnum>(null);
  const [selectedType, setSelectedType] = useState(CalendarTypeEnum.Jalali);

  useEffect(() => {
    setSelectedType(culture.calendarType);
    defaultValue.current = culture.calendarType;
  }, [culture.calendarType]);

  const selectedTypeHandler = (v: CalendarTypeEnum) => {
    setSelectedType(v);
  };

  const isDisable = defaultValue.current === selectedType;

  return { selectedType, selectedTypeHandler, isDisable };
};

export default useCalendarTypeSelect;
