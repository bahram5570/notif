import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { InputValueType } from '../../type';

const useSubmit = () => {
  const router = useCustomRouter();

  const successHandler = () => {
    router.back();
  };
  const { callApi, isLoading } = usePwaApi({
    method: 'PUT',
    onSuccess: successHandler,
    api: 'memory',
  });

  const createMemoryHandler = (values: InputValueType) => {
    callApi(values);
  };

  return { createMemoryHandler, isLoading };
};

export default useSubmit;
