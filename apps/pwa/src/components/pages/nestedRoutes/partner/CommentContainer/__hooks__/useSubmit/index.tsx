import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { SubmitHandler } from './type';

const useSubmit = () => {
  const route = useCustomRouter();
  const { getQueryParams } = useQueryParamsHandler();

  const memoryId = getQueryParams('memoryId');

  const successHandler = () => {
    route.back();
  };
  const { callApi, isLoading } = usePwaApi({
    method: 'POST',
    api: 'memory/comment',
    onSuccess: successHandler,
  });

  const submitHandler = ({ text }: SubmitHandler) => {
    const payload = {
      id: memoryId,
      text,
    };

    callApi(payload);
  };
  return { submitHandler, isLoading };
};

export default useSubmit;
