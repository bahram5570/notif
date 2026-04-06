import { useEffect, useState } from 'react';

import {
  BloodSugerType,
  CalendarWidgetEnums,
  InfoCalendarResponseTypes,
  ItemsTypes,
} from '@repo/core/components/calendar';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useSignDateState } from '@repo/core/hooks/useSignDateState';

const useGetData = () => {
  const [initailBloodSugerList, setInitailBloodSugerList] = useState<BloodSugerType[]>([]);

  const { getQuery } = useCustomReactQuery();
  const queryData = getQuery<InfoCalendarResponseTypes>({ queryKey: ['signsInfoCalendar'] });
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

  return { initailBloodSugerList, isLoading };
};

export default useGetData;
