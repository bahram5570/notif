import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useRouter } from 'next/navigation';

import { UseDeletePropsType } from './type';

const useDelete = ({ memoryId, callBack }: UseDeletePropsType) => {
  const router = useRouter();

  const successHandler = () => {
    if (callBack) {
      callBack();
    }
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
