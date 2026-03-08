import { useEffect, useState } from 'react';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';

const useGetSupportInfo = () => {
  const [supportPhone, setSupportPhone] = useState<string>();

  const successHandler = (v: any) => {
    setSupportPhone(v.phone);
  };

  const { callApi } = usePwaApi({
    method: 'GET',
    fetchOnMount: false,
    onSuccess: successHandler,
    queryKey: ['infoSupport'],
    api: `info/support`,
  });

  useEffect(() => {
    callApi();
  }, []);

  return { supportPhone };
};

export default useGetSupportInfo;
