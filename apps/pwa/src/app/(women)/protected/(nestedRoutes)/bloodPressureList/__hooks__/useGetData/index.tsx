import { useEffect, useState } from 'react';

import { CalendarWidgetEnums } from '@components/women/pages/mainRoutes/calendar/__hooks__/useCalendarGetData/CalendarEnums';
import {
  BloodPressureType,
  InfoCalendarResponseTypes,
  ItemsTypes,
} from '@components/women/pages/mainRoutes/calendar/__hooks__/useCalendarGetData/types';
import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import useSignDateState from '@hooks/useSignDateState';

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

  const { isLoading, callApi } = useApi<InfoCalendarResponseTypes>({
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
