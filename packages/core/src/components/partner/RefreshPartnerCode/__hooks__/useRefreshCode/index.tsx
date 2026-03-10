import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { PartnerCodeResponseType, UseRefreshCodePropsType } from './type';

const useRefreshCode = ({ callBackHandler }: UseRefreshCodePropsType) => {
  const successHandler = (v: PartnerCodeResponseType) => {
    callBackHandler(v.code, v.shareText);
  };

  const { isLoading: refreshLoading, callApi } = usePwaApi<PartnerCodeResponseType>({
    method: 'PUT',
    api: 'partner/code',
    onSuccess: (v: PartnerCodeResponseType) => successHandler(v),
  });

  const onRefreshCodeHandler = () => {
    callApi({});
  };

  return { onRefreshCodeHandler, refreshLoading };
};

export default useRefreshCode;
