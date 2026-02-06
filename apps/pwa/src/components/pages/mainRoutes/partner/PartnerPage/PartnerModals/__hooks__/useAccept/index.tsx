import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useRouter } from 'next/navigation';

import { AcceptResponseType } from './type';

const useAccept = () => {
  const { refetchQuery } = useCustomReactQuery();
  const route = useRouter();

  const successHandler = (v: AcceptResponseType) => {
    if (v.canAccept) {
      refetchQuery({ queryKey: ['partnerKey'] });

      route.back();
      setTimeout(() => {
        route.back();
      }, 0);
    }
  };

  const { data, callApi: accept } = usePwaApi({
    api: 'partner/accept',
    method: 'PUT',
    onSuccess: (v: AcceptResponseType) => successHandler(v),
  });

  const acceptHandler = (id: string | null, type: number) => {
    const payload = {
      id,
      type,
    };
    accept(payload);
  };
  return { acceptHandler };
};

export default useAccept;
