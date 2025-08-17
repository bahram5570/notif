import { useEffect, useRef } from 'react';

import { isDevelopeMode } from '@utils/system';

import { APP_VERSION } from '@constants/app.constants';
import useApi from '@hooks/useApi';
import useCulture from '@hooks/useCulture';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { ProfileResponseTypes, UseGetProfileDataPropsType } from './type';

const useGetProfileData = (onComplete?: UseGetProfileDataPropsType) => {
  const { cultureHandler } = useCulture();
  const isFirstTime = useRef(isDevelopeMode());
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const { newQuery, getQuery } = useCustomReactQuery(['profile']);

  const successHandler = (v: ProfileResponseTypes) => {
    newQuery({ payload: v, queryKey: ['profile'] });
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

  const data = getQuery<ProfileResponseTypes>({ queryKey: ['profile'] });

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

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      return;
    }

    if (!data) {
      getDataHandler();
    } else {
      newQuery({ payload: data, queryKey: ['profile'] });
    }

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }, []);

  return { isLoading: dataLoading, data, updateProfileData, updateProfileDateByDellay };
};

export default useGetProfileData;
