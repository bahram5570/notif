import { useEffect, useState } from 'react';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { SupportLinkGeneratorType } from '../../../type';

const useGetSupportInfo = () => {
  const [supportInfo, setSupportInfo] = useState<SupportLinkGeneratorType>();

  const successHandler = (v: SupportLinkGeneratorType) => {
    setSupportInfo(v);
  };

  const { callApi, isLoading } = usePwaApi({
    method: 'GET',
    fetchOnMount: false,
    onSuccess: successHandler,
    queryKey: ['infoSupport'],
    api: `info/support`,
  });

  useEffect(() => {
    callApi();
  }, []);

  return { supportInfo, isLoading };
};

export default useGetSupportInfo;
