import { useState } from 'react';

import { APP_VERSION } from '@repo/core/constants/app.constants';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { ResponseType, SupportInfoSubmitType } from './types';

const useSubmit = () => {
  const [responseData, setResponseData] = useState<ResponseType>();

  const successHandler = (data: ResponseType) => {
    setResponseData(data);
  };

  const { callApi, isLoading: submitLoading } = usePwaApi({
    method: 'POST',
    api: 'info/support',
    onSuccess: successHandler,
  });

  const submitHandler = (value: string) => {
    const payload: SupportInfoSubmitType = {
      text: value,
      modelPhone: '',
      packageName: '',
      type: 0,
      version: APP_VERSION || '',
    };

    callApi(payload);
  };

  return { submitHandler, submitLoading, responseData };
};

export default useSubmit;
