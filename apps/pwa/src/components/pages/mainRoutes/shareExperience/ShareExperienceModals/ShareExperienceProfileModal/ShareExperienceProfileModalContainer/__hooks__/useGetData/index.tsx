import { useEffect } from 'react';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { ShareExperenceProfileResponsePropsType } from './type';

const useShareExperenceProfileGetData = (userId: string | undefined) => {
  const { getQuery, newQuery } = useCustomReactQuery(['shareExperienceProfileData']);

  const shareExperienceProfileData = getQuery<ShareExperenceProfileResponsePropsType>({
    queryKey: ['shareExperienceProfileData'],
  });

  const successHandler = (v: ShareExperenceProfileResponsePropsType) => {
    newQuery({ queryKey: ['shareExperienceProfileData'], payload: v });
  };

  const { callApi, isLoading } = usePwaApi<ShareExperenceProfileResponsePropsType>({
    api: `shareeexperience/v3/profile/${userId}`,
    method: 'GET',
    queryKey: ['shareExperienceProfile'],
    fetchOnMount: false,
    onSuccess: successHandler,
  });

  useEffect(() => {
    if (userId) {
      callApi();
    }
  }, [userId]);

  return { shareExperienceProfileData, isLoading, callApi };
};

export default useShareExperenceProfileGetData;
