import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';
import { useCustomToast } from '@repo/core/hooks/useCustomToast';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { DataResponseType } from './type';

const useCreate = () => {
  const { refetchQuery } = useCustomReactQuery();
  const toast = useCustomToast();

  const router = useCustomRouter();

  const successHandler = (data: DataResponseType) => {
    if (!data.valid) {
      return toast.notifyToastHandler({
        message: 'شماره / ایمیلی که وارد کردی مشکل داره. لطفا یک شماره یا ایمیل دیگه رو وارد کن',
        type: 'error',
      });
    }
    refetchQuery({ queryKey: ['partnerRequest'] });

    router.back();
  };
  const { callApi: create, isLoading } = usePwaApi({
    api: 'partner/create',
    method: 'POST',
    onSuccess: (data: DataResponseType) => successHandler(data),
  });

  const createHandler = (code: string) => {
    const payload = {
      code,
    };

    create(payload);
  };

  return { createHandler, isLoading };
};

export default useCreate;
