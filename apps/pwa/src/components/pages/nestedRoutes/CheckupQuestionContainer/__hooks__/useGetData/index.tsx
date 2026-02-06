import { useEffect } from 'react';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { ResponsePropsType, UseGetDataPropsType } from './type';

const useGetData = ({ type, week }: UseGetDataPropsType) => {
  const { isLoading, callApi, data } = usePwaApi<ResponsePropsType>({
    method: 'POST',
    api: 'info/pregnancy/checkup/data',
  });

  const getDataHandler = () => {
    const payload = {
      type,
      week,
    };
    callApi(payload);
  };

  useEffect(() => {
    if (!isNaN(Number(type)) && !isNaN(Number(week))) {
      getDataHandler();
    }
  }, [type, week]);

  return { data, isLoading };
};

export default useGetData;
