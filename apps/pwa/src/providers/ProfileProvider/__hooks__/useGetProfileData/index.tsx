import { useRef } from 'react';

import { APP_VERSION } from '@constants/app.constants';
import useApi from '@hooks/useApi';
import useCulture from '@hooks/useCulture';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';

import { ProfileResponseTypes } from './type';

const useGetProfileData = (onComplete?: () => void) => {
  const { cultureHandler } = useCulture();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const { getQuery, updateQuery } = useCustomReactQuery(['profile']);

  const successHandler = (v: ProfileResponseTypes) => {
    updateQuery({ payload: v, queryKey: ['profile'] });
    cultureHandler('calendarType', v.calendarType);

    if (onComplete) {
      onComplete();
    }
  };

  const { isLoading: dataLoading, callApi: getData } = useApi<ProfileResponseTypes>({
    method: 'POST',
    api: 'profile/woman/info',
    onSuccess: successHandler,
  });

  const getDataHandler = () => {
    const payload = {
      type: 0,
      packageName: '',
      version: APP_VERSION || '',
    };

    getData(payload);
  };

  const updateProfileData = () => {
    getDataHandler();
  };

  const updateProfileDateByDellay = (seconds?: number) => {
    const ms = typeof seconds === 'undefined' ? 3 : seconds;

    timerRef.current = setTimeout(() => {
      getDataHandler();
      timerRef.current = null;
    }, ms * 1000);
  };

  const data = getQuery<{ data: ProfileResponseTypes }>({ queryKey: ['profile'] })?.data;

  return { isLoading: dataLoading, data, updateProfileData, updateProfileDateByDellay };
};

export default useGetProfileData;
