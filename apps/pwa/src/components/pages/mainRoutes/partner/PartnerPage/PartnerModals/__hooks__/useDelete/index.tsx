import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useRouter } from 'next/navigation';

import { UseDeletePropsType } from './type';

const useDelete = ({ api, onSuccess }: UseDeletePropsType) => {
  const router = useRouter();

  const successHandler = (v: boolean) => {
    if (v) {
      if (onSuccess) {
        onSuccess();
      }
      router.back();
    }
  };

  const { callApi } = usePwaApi({
    method: 'POST',
    onSuccess: (v: boolean) => successHandler(v),
    api,
  });

  const deleteHandler = () => {
    const payload = { filename: '' };
    callApi(payload);
  };

  return { deleteHandler };
};

export default useDelete;
