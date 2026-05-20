import { useCustomReactQuery } from '../../../../../../hooks/useCustomReactQuery';
import { useCustomRouter } from '../../../../../../hooks/useCustomRouter';
import { usePwaApi } from '../../../../../../hooks/usePwaApi';

const useReject = () => {
  const route = useCustomRouter();
  const { refetchQuery } = useCustomReactQuery();

  const successHandler = () => {
    refetchQuery({ queryKey: ['partnerRequest'] });
    route.back();
  };

  const { callApi: reject, isLoading } = usePwaApi({ api: 'partner/reject', method: 'PUT', onSuccess: successHandler });

  const rejectHandler = (id: string | null) => {
    const payload = { id };
    reject(payload);
  };
  return { rejectHandler, isLoading };
};

export default useReject;
