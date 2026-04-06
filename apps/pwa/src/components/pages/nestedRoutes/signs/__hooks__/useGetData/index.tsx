import { useState } from 'react';

import { signsDaysListMaker, signsItemsListMaker, sortedSignsListMaker } from './__utils__';
import { InfoCalendarResponseTypes } from '@repo/core/components/calendar';

import { useCulture } from '@repo/core/hooks/useCulture';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { InfoListTypes } from './types';

const useGetData = () => {
  const { culture } = useCulture();
  const [infoList, setInfoList] = useState<null | InfoListTypes>(null);

  const successHandler = (v: InfoCalendarResponseTypes) => {
    const signsItemsList = signsItemsListMaker(v.start, v.end, v.days, culture.calendarType);

    const daysList = signsDaysListMaker(signsItemsList, v.havePregnency, culture.calendarType);

    const sortedSignsLis = sortedSignsListMaker(daysList, culture.calendarType);

    setInfoList(sortedSignsLis);
  };

  const { isLoading } = usePwaApi<InfoCalendarResponseTypes>({
    method: 'GET',
    api: 'info/calendar',
    onSuccess: successHandler,
    queryKey: ['signsInfoCalendar'],
  });

  return { isLoading, infoList };
};

export default useGetData;
