import {
  CalendarDataTypes,
  InfoCalendarResponseTypes,
  SingleDateTypes,
  UseGetDataProps,
} from '../../components/calendar';
import { calendarDayInfoMaker, calendarIntervalMaker, calendarMonthInfoMaker } from './__utils__';

import { useCulture } from '../useCulture';
import { usePwaApi } from '../usePwaApi';
import { useSystem } from '../useSystem';

export const useCalendarGetData = ({ onValues, hasSigns, cacheTime }: UseGetDataProps) => {
  const { culture } = useCulture();
  const { appName } = useSystem();

  const api = appName === 'PWA' ? 'info/calendar' : 'info/man/calendar';

  const successHandler = (v: InfoCalendarResponseTypes) => {
    let result: CalendarDataTypes = {};
    const calendarInterval = calendarIntervalMaker(v.start, v.end, culture.calendarType);

    for (let i = 0; i <= calendarInterval; i++) {
      const monthInfo = calendarMonthInfoMaker(v.start, i, culture.calendarType);
      const list: SingleDateTypes[] = [];

      for (let j = 0; j < monthInfo.totalDaysOfMonth; j++) {
        const dayInfo = calendarDayInfoMaker(monthInfo.beggingOfMonth, j, culture.calendarType);

        const singleDate: SingleDateTypes = {
          items: hasSigns ? v.days[dayInfo.gregorianDate]?.items || [] : [],
          gregorianDate: dayInfo.gregorianDate,
          jalaaliDate: dayInfo.jalaaliDate,
          isToday: dayInfo.isToday,
        };

        list.push(singleDate);
      }

      result = { ...result, [monthInfo.yearAndMonth]: list };
    }

    onValues({
      calendarGuideInfo: { haveBreastfeeding: v.haveBreastfeeding, havePregnency: v.havePregnency },
      calendarData: result,
    });
  };

  const { isLoading } = usePwaApi<InfoCalendarResponseTypes>({
    api,
    method: 'GET',
    onSuccess: successHandler,
    queryKey: ['infoCalendar'],
    cacheTime: cacheTime,
  });

  return { isLoading };
};
