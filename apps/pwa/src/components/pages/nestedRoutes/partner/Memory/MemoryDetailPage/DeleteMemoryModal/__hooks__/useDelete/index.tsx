import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

const useDelete = () => {
  const router = useRouter();
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
