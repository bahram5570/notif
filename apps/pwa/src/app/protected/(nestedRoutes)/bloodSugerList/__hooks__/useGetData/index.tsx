import { useEffect, useState } from 'react';

import {
  BloodSugerType,
  CalendarWidgetEnums,
  InfoCalendarResponseTypes,
  ItemsTypes,
} from '@repo/core/components/calendar';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useSignDateState } from '@repo/core/hooks/useSignDateState';

const useGetData = () => {
  const [initailBloodSugerList, setInitailBloodSugerList] = useState<BloodSugerType[]>([]);

  const { calendarInitailSelectedDate } = useSignDateState();

  const selectedDate = calendarInitailSelectedDate;

  const findCurrentList = (data: InfoCalendarResponseTypes) => {
    if (selectedDate) {
      if (data) {
        const itemList: ItemsTypes = data?.days[selectedDate]?.items;
        const typeFind = itemList.find((item) => item.type === CalendarWidgetEnums.Sign);

        if (typeFind) {
          setInitailBloodSugerList(typeFind?.data.bloodSugers);
        } else {
          setInitailBloodSugerList([]);
        }
      }
    }
  };

  const { isLoading } = usePwaApi<InfoCalendarResponseTypes>({
    method: 'GET',
    api: 'info/calendar',
    onSuccess: (v) => findCurrentList(v),
    queryKey: ['infoCalendar'],
  });

  return { initailBloodSugerList, isLoading };
};

export default useGetData;
