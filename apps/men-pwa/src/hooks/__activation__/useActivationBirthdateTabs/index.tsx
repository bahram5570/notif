import { useEffect, useState } from 'react';

import { useCulture } from '@repo/core/hooks/useCulture';
import { CULTURE_INITIAL_VALUES, CalendarTypeEnum } from '@repo/core/providers/CultureProvider';

const useActivationBirthdateTabs = (onChangeValue: (v: CalendarTypeEnum) => void) => {
  const { culture, cultureHandler } = useCulture();
  const [tab, setTab] = useState<CalendarTypeEnum>(CULTURE_INITIAL_VALUES.calendarType);

  const tabHandler = (t: CalendarTypeEnum) => {
    switch (t) {
      case CalendarTypeEnum.Jalali:
        onChangeValue(CalendarTypeEnum.Jalali);
        cultureHandler('calendarType', CalendarTypeEnum.Jalali);
        break;

      case CalendarTypeEnum.Gregorian:
        onChangeValue(CalendarTypeEnum.Gregorian);
        cultureHandler('calendarType', CalendarTypeEnum.Gregorian);
        break;
    }

    setTab(t);
  };

  useEffect(() => {
    tabHandler(culture.calendarType);
  }, []);

  return { tab, tabHandler };
};

export default useActivationBirthdateTabs;
