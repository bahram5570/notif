import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { UseDeletePropsType } from './type';

const useDelete = ({ api, onSuccess }: UseDeletePropsType) => {
  const router = useCustomRouter();

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
