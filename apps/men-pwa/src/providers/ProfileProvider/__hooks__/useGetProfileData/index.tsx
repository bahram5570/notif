import { useEffect, useRef, useState } from 'react';

import { useCulture } from '@repo/core/hooks/useCulture';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { ProfileResponseTypes } from './type';

const useGetProfileData = (onComplete?: () => void) => {
  const { cultureHandler } = useCulture();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const { getQuery, updateQuery, removeQuery } = useCustomReactQuery(['profile']);

  const successHandler = (v: ProfileResponseTypes) => {
    updateQuery({ payload: v, queryKey: ['profile'] });
    cultureHandler('calendarType', v.generalInfo.calendarType);

    if (onComplete) {
      onComplete();
    }

    removeQuery({ queryKey: ['new-profile'] });
  };

  const { callApi: getNewData, isLoading } = usePwaApi({
    method: 'GET',
    fetchOnMount: false,
    api: 'info/allDatav5',
    onSuccess: successHandler,
    queryKey: ['new-profile'],
  });

  const updateProfileData = () => {
    getNewData();
  };

  const updateProfileDateByDellay = (seconds?: number) => {
    const ms = typeof seconds === 'undefined' ? 3 : seconds;

    timerRef.current = setTimeout(() => {
      updateProfileData();
      timerRef.current = null;
    }, ms * 1000);
  };

  // # Store last valid data to prevent flicker when query data becomes temporarily undefined.

  const [data, setData] = useState<ProfileResponseTypes | undefined>(undefined);

  const queryData = getQuery<{ data: ProfileResponseTypes }>({ queryKey: ['profile'] })?.data;

  useEffect(() => {
    if (queryData) {
      setData(queryData);
    }
  }, [queryData]);

  return { isLoading, data, updateProfileData, updateProfileDateByDellay };
};

export default useGetProfileData;
