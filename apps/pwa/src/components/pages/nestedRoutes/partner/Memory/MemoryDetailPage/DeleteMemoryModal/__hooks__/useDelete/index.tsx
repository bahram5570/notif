import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

const useDelete = () => {
  const router = useCustomRouter();
  const { getQueryParams } = useQueryParamsHandler();

  const memoryId = getQueryParams('memoryId');

  const successHandler = () => {
    router.back();
    setTimeout(() => {
      router.back();
    }, 0);
  };
  const { callApi, isLoading } = usePwaApi({ api: 'memory', method: 'POST', onSuccess: successHandler });

  const deleteHandler = () => {
    const payload = {
      id: memoryId,
    };
    callApi(payload);
  };
  return { deleteHandler, isLoading };
};

export default useDelete;
