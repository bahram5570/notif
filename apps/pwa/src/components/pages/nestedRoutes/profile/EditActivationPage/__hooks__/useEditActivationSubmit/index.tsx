import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { EditActivationPayloadTypes } from '../useEditActivationPayload/types';

const useEditActivationSubmit = () => {
  const router = useCustomRouter();

  const successHandler = () => {
    router.back();
  };

  const { isLoading, callApi } = usePwaApi({ api: 'info/activation/update', method: 'PUT', onSuccess: successHandler });

  const submitHandler = (v: EditActivationPayloadTypes) => {
    let payload = {};
    const list = Object.entries(v);

    list.forEach((item) => {
      const keyName = item[0];
      const value = item[1].value;
      payload = { ...payload, [keyName]: value };
    });

    callApi(payload);
  };

  return { submitHandler, isLoading };
};

export default useEditActivationSubmit;
