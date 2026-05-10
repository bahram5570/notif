import { useRouter } from 'next/navigation';

import { useCustomReactQuery } from '../../../../../../hooks/useCustomReactQuery';
import { usePwaApi } from '../../../../../../hooks/usePwaApi';

const useReject = () => {
  const { refetchQuery } = useCustomReactQuery();
  const route = useRouter();

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
