import { APP_VERSION } from '@repo/core/constants/app.constants';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useRouter } from 'next/navigation';

const useDelete = () => {
  const router = useRouter();
  const { refetchQuery } = useCustomReactQuery();
  const onSuccessHandler = () => {
    refetchQuery({ queryKey: ['partnerSection'] });
    router.back();
  };

  const { callApi, isLoading } = usePwaApi({
    method: 'POST',
    onSuccess: onSuccessHandler,
    api: `info/unpair?AppVersion=${APP_VERSION || ''}`,
  });

  const deleteHandler = () => {
    const payload = {};
    callApi(payload);
  };

  return { deleteHandler, isLoading };
};

export default useDelete;
