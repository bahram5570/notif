import { useRouter } from 'next/navigation';

import { useCustomReactQuery } from '../../../../../../hooks/useCustomReactQuery';
import { usePwaApi } from '../../../../../../hooks/usePwaApi';
import { AcceptResponseType } from './type';

const useAccept = () => {
  const route = useRouter();
  const { refetchQuery } = useCustomReactQuery();

  const successHandler = (v: AcceptResponseType) => {
    if (v.canAccept) {
      refetchQuery({ queryKey: ['partnerKey'] });

      route.back();

      setTimeout(() => {
        route.back();
      }, 0);
    }
  };

  const { callApi: accept } = usePwaApi({
    api: 'partner/accept',
    method: 'PUT',
    onSuccess: (v: AcceptResponseType) => successHandler(v),
  });

  const acceptHandler = (id: string | null, type: number) => {
    const payload = { id, type };
    accept(payload);
  };

  return { acceptHandler };
};

export default useAccept;
