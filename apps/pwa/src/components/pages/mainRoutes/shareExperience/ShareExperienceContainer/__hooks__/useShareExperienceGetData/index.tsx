import { useEffect, useState } from 'react';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { ShareExperienceResponseTypes } from './types';

const useShareExperienceGetData = () => {
  const [data, setData] = useState<ShareExperienceResponseTypes | undefined>(undefined);
  const { refetchQuery } = useCustomReactQuery();

  const successHandler = (v: ShareExperienceResponseTypes) => {
    setData(v);
  };

  const { isLoading, callApi } = usePwaApi<ShareExperienceResponseTypes>({
    queryKey: ['shareExperience'],
    api: 'shareeexperience/v3',
    onSuccess: successHandler,
    method: 'GET',
    fetchOnMount: false,
  });

  const onSuccessNewHandler = () => {
    refetchQuery({ queryKey: ['shareExperience'] });
    setData(undefined);
  };

  useEffect(() => {
    callApi();
  }, []);

  return { isLoading, data, onSuccessNewHandler };
};

export default useShareExperienceGetData;
