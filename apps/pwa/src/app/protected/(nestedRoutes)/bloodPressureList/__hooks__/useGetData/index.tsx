import { useEffect, useState } from 'react';

import { CalendarWidgetEnums } from '@components/pages/mainRoutes/calendar/__hooks__/useCalendarGetData/CalendarEnums';
import {
  BloodPressureType,
  InfoCalendarResponseTypes,
  ItemsTypes,
} from '@components/pages/mainRoutes/calendar/__hooks__/useCalendarGetData/types';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useSignDateState } from '@repo/core/hooks/useSignDateState';

const useGetData = () => {
  const [initailPressureList, setInitailPressureList] = useState<BloodPressureType[]>([]);
  const { getQuery } = useCustomReactQuery();
  const queryData = getQuery<InfoCalendarResponseTypes>({ queryKey: ['signsInfoCalendar'] });
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

  const { isLoading, callApi } = usePwaApi<InfoCalendarResponseTypes>({
    method: 'GET',
    api: 'info/calendar',
    onSuccess: (v) => findCurrentList(v),
    queryKey: ['signsInfoCalendar'],
    fetchOnMount: false,
  });

  useEffect(() => {
    if (queryData) {
      findCurrentList(queryData);
    } else {
      callApi();
    }
  }, [queryData]);

  return { initailPressureList, isLoading };
};

export default useGetData;
