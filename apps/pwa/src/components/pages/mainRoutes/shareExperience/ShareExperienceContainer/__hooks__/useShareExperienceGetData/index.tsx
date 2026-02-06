import { useState } from 'react';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { ShareExperienceResponseTypes } from './types';

const useShareExperienceGetData = () => {
  const [data, setData] = useState<ShareExperienceResponseTypes | undefined>(undefined);
  const { refetchQuery } = useCustomReactQuery();

  const successHandler = (v: ShareExperienceResponseTypes) => {
    setData(v);
  };

  const { isLoading } = usePwaApi<ShareExperienceResponseTypes>({
    queryKey: ['shareExperience'],
    api: 'shareeexperience/v3',
    onSuccess: successHandler,
    method: 'GET',
  });

  const onSuccessNewHandler = () => {
    refetchQuery({ queryKey: ['shareExperience'] });
    setData(undefined);
  };

  return { isLoading, data, onSuccessNewHandler };
};

export default useShareExperienceGetData;
