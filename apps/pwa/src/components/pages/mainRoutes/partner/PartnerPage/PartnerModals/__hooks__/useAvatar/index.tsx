import { APP_VERSION } from '@repo/core/constants/app.constants';
import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { ResponseType } from './type';

const useAvatar = () => {
  const router = useCustomRouter();

  const successHandler = () => {
    router.back();
  };

  const { callApi, isLoading } = usePwaApi({
    method: 'POST',
    onSuccess: successHandler,
    api: `profile/image?AppVersion=${APP_VERSION || ''}`,
  });

  const editHandler = (v: ResponseType) => {
    if (v.fileName) {
      callApi({ fileName: v.fileName });
    }
  };

  return { editHandler, isLoading };
};

export default useAvatar;
