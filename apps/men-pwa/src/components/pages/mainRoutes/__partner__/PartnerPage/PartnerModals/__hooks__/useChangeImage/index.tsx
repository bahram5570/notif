import { APP_VERSION } from '@repo/core/constants/app.constants';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useRouter } from 'next/navigation';

import { ResponseType } from './type';

const useChangeImage = () => {
  const router = useRouter();

  const successHandler = () => {
    router.back();
  };

  const { callApi, isLoading } = usePwaApi({
    method: 'POST',
    onSuccess: successHandler,
    api: `pair/cover?AppVersion=${APP_VERSION || ''}`,
  });

  const editHandler = (v: ResponseType) => {
    if (v.fileName) {
      callApi({ fileName: v.fileName });
    }
  };

  return { editHandler, isLoading };
};

export default useChangeImage;
