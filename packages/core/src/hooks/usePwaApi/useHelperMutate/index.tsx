import { useRef } from 'react';

import { pwaHttp } from '../../../utils/pwaHttp';

import { useMutation } from '@tanstack/react-query';

import { ERROR_403, ERROR_SERVER } from '../../../constants/scripts.constants';
import { MonitoringApiTypes } from '../../../providers/MonitoringProvider';
import { useCustomToast } from '../../useCustomToast';
import { useMonitoring } from '../../useMonitoring';
import { UseHelperMutateProps } from './types';

const useHelperMutate = <T,>(props: UseHelperMutateProps<T>) => {
  const startingPoint = useRef<MonitoringApiTypes | null>(null);
  const { notifyToastHandler } = useCustomToast();
  const { api } = useMonitoring();

  const mutationFn = async (payload?: object) => {
    const contentType = props.method === 'POST' || props.method === 'PUT' ? props.contentType : undefined;

    startingPoint.current = {
      status: 0,
      api: props.api,
      method: props.method,
      duration: new Date().getTime(),
      date: new Date().toLocaleString(),
    };

    const res = await pwaHttp<T>({
      payload,
      contentType,
      url: props.api,
      method: props.method,
    });

    if (res.error) {
      if (res.error.status === 403) {
        notifyToastHandler({ message: ERROR_403, type: 'error' });
      } else {
        notifyToastHandler({ message: ERROR_SERVER, type: 'error' });
      }

      throw res.error;
    }

    return res.data as T;
  };

  const handleMonitoringApi = (status: number) => {
    const startingPointData = startingPoint.current;

    if (startingPointData) {
      api({
        status,
        api: startingPointData.api,
        date: startingPointData.date,
        method: startingPointData.method,
        duration: new Date().getTime() - startingPointData.duration,
      });
    }
  };

  const successHandler = (v: T) => {
    handleMonitoringApi(200);

    if (props.onSuccess) {
      props.onSuccess(v);
    }
  };

  const errorHandler = (err: Error) => {
    const status = (err as unknown as { status: number }).status;
    handleMonitoringApi(status);

    if (props.onError) {
      props.onError();
    }
  };

  const { data, error, isPending, mutate } = useMutation({
    onSuccess: successHandler,
    onError: errorHandler,
    mutationFn,
  });

  const callApi = (payload?: object) => {
    mutate(payload);
  };

  const isLoading = isPending;

  return { data, error, isLoading, callApi };
};

export default useHelperMutate;
