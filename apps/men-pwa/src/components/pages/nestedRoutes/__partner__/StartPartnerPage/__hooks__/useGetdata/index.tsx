import { useEffect, useState } from 'react';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { UserCodeInfoType } from '../../type';
import { PartnerCodeResponseType } from './type';

const useGetData = () => {
  const [userCodeInfo, setUserCodeInfo] = useState<UserCodeInfoType>({ code: '', shareText: '' });

  const userCodeInfoHandler = (code: string, shareText: string) => {
    setUserCodeInfo({ code, shareText });
  };

  const successHandler = (v: PartnerCodeResponseType) => {
    setUserCodeInfo({ code: v.code, shareText: v.shareText });
  };

  const { isLoading, callApi } = usePwaApi<PartnerCodeResponseType>({
    method: 'GET',
    api: 'partner/code',
    queryKey: ['partnerCode'],
    onSuccess: (v: PartnerCodeResponseType) => successHandler(v),
  });

  useEffect(() => {
    callApi();
  }, []);

  return { userCodeInfo, isLoading, userCodeInfoHandler };
};

export default useGetData;
