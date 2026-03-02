import { pwaHttp } from '../../../utils/pwaHttp';

import { useMutation } from '@tanstack/react-query';

import { ERROR_403, ERROR_SERVER } from '../../../constants/scripts.constants';
import { useCustomToast } from '../../useCustomToast';
import { UseHelperMutateProps } from './types';

const useHelperMutate = <T,>(props: UseHelperMutateProps<T>) => {
  const { notifyToastHandler } = useCustomToast();

  const mutationFn = async (payload?: object) => {
    const contentType = props.method === 'POST' || props.method === 'PUT' ? props.contentType : undefined;

    const res = await pwaHttp<T>({
      method: props.method,
      url: props.api,
      contentType,
      payload,
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

  const { data, error, isPending, mutate } = useMutation({
    onSuccess: props.onSuccess,
    onError: props.onError,
    mutationFn,
  });

  const callApi = (payload?: object) => {
    mutate(payload);
  };

  const isLoading = isPending;

  return { data, error, isLoading, callApi };
};

export default useHelperMutate;
