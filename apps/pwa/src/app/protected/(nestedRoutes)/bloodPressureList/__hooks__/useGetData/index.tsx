import { useState } from 'react';

import {
  BloodPressureType,
  CalendarWidgetEnums,
  InfoCalendarResponseTypes,
  ItemsTypes,
} from '@repo/core/components/calendar';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useSignDateState } from '@repo/core/hooks/useSignDateState';

const useGetData = () => {
  const [initailPressureList, setInitailPressureList] = useState<BloodPressureType[]>([]);

  const { calendarInitailSelectedDate } = useSignDateState();

  const findCurrentList = (data: InfoCalendarResponseTypes) => {
    const selectedDate = calendarInitailSelectedDate;

    if (selectedDate) {
      if (data) {
        const itemList: ItemsTypes = data?.days[selectedDate]?.items;
        const typeFind = itemList.find((item) => item.type === CalendarWidgetEnums.Sign);

        if (typeFind) {
          setInitailPressureList(typeFind?.data.bloodPressures);
        } else {
          setInitailPressureList([]);
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

  return { initailPressureList, isLoading };
};

export default useGetData;
