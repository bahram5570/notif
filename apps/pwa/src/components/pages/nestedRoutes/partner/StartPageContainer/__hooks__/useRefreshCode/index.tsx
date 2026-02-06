import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { PartnerCodeResponseType } from '../useGetdata/type';

const useRefreshCode = () => {
  const {
    data: refreshCode,
    isLoading: refreshLoading,
    callApi,
  } = usePwaApi<PartnerCodeResponseType>({
    method: 'PUT',
    api: 'partner/code',
  });

  const onRefreshCodeHandler = () => {
    callApi({});
  };

  return { onRefreshCodeHandler, refreshCode, refreshLoading };
};

export default useRefreshCode;
