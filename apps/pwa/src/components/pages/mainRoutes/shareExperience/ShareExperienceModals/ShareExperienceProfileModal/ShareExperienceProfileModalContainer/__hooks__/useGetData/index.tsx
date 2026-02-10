import { useEffect } from 'react';

import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { ShareExperenceProfileResponsePropsType } from './type';

const useShareExperenceProfileGetData = (userId: string | undefined) => {
  const { getQuery, newQuery } = useCustomReactQuery(['shareExperienceProfileData']);

  const shareExperienceProfileData = getQuery<ShareExperenceProfileResponsePropsType>({
    queryKey: ['shareExperienceProfileData'],
  });

  const successHandler = (v: ShareExperenceProfileResponsePropsType) => {
    newQuery({ queryKey: ['shareExperienceProfileData'], payload: v });
  };

  const { callApi, isLoading } = useApi<ShareExperenceProfileResponsePropsType>({
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
