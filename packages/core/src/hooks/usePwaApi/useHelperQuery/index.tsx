import { useEffect, useState } from 'react';

import { pwaHttp } from '../../../utils/pwaHttp';
import { initialEnabledValue } from './__utils__';

import { useQuery } from '@tanstack/react-query';

import { ERROR_403, ERROR_SERVER } from '../../../constants/scripts.constants';
import { useCustomToast } from '../../useCustomToast';
import { UseHelperQueryProps } from './types';

const useHelperQuery = <T,>(props: UseHelperQueryProps<T>) => {
  // # Toggling the "enabled" by "callApi" will call the api
  const [enabled, setEnabled] = useState(initialEnabledValue(props.fetchOnMount));
  const { notifyToastHandler } = useCustomToast();

  const callApi = () => {
    setEnabled(true);
  };

  const queryFn = async () => {
    const res = await pwaHttp<T>({ url: props.api, method: 'GET' });

    if (res.error) {
      throw res.error;
    }

    return res.data;
  };

  const {
    data,
    error,
    isSuccess,
    isFetching,
    isLoading: loading,
  } = useQuery({
    initialData: props.initialData,
    gcTime: props.cacheTime || 0,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    queryKey: props.queryKey,
    refetchOnMount: false,
    retry: 1,
    enabled,
    queryFn,
  });

  const isLoading = isFetching || loading;

  useEffect(() => {
    if (enabled && !isLoading) {
      setEnabled(false);
    }
  }, [enabled, isLoading]);

  useEffect(() => {
    if (isSuccess && !isLoading && data && props.onSuccess) {
      props.onSuccess(data);
    }
  }, [isSuccess, isLoading, data]);

  useEffect(() => {
    if (error && !isLoading) {
      const status = (error as unknown as { status: number }).status;

      if (status === 403) {
        notifyToastHandler({ message: ERROR_403, type: 'error' });
      } else {
        notifyToastHandler({ message: ERROR_SERVER, type: 'error' });

        if (props.onError) {
          props.onError();
        }
      }
    }
  }, [error, isLoading]);

  return { data, error, isLoading, callApi };
};

export default useHelperQuery;
