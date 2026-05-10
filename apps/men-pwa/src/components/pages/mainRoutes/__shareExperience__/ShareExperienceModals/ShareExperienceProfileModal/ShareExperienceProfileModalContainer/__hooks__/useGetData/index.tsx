import { useEffect } from 'react';

import { ProfileResponsePropsType } from '@repo/core/components/ShareExperience';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

const useShareExperenceProfileGetData = (userId: string | undefined) => {
  const { getQuery, newQuery } = useCustomReactQuery(['shareExperienceProfileData']);

  const shareExperienceProfileData = getQuery<ProfileResponsePropsType>({
    queryKey: ['shareExperienceProfileData'],
  });

  const successHandler = (v: ProfileResponsePropsType) => {
    newQuery({ queryKey: ['shareExperienceProfileData'], payload: v });
  };

  const { callApi, isLoading } = usePwaApi<ProfileResponsePropsType>({
    api: `manshareeexperience/v3/profile/${userId}`,
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
