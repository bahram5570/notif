import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useRouter } from 'next/navigation';

import { InputValueType } from '../../type';

const useSubmit = () => {
  const router = useRouter();

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
