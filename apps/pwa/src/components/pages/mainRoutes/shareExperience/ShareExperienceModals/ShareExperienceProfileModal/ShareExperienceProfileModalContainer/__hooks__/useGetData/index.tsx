import { useEffect } from 'react';

import { ProfileResponsePropsType } from '@repo/core/components/ShareExperience';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useShareExperienceHandlers } from '@repo/core/hooks/useShareExperienceHandlers';

const useShareExperenceProfileGetData = (userId: string | undefined) => {
  const { getQuery, newQuery } = useCustomReactQuery(['shareExperienceProfileData']);
  const { accessOptionHandler } = useShareExperienceHandlers();

  const shareExperienceProfileData = getQuery<ProfileResponsePropsType>({
    queryKey: ['shareExperienceProfileData'],
  });

  const successHandler = (v: ProfileResponsePropsType) => {
    if (v.access.isBan) {
      return accessOptionHandler({
        isBan: v.access.isBan,
        textMessage: v.access.textMessage,
        btnText: v.access.btnText,
      });
    }

    newQuery({ queryKey: ['shareExperienceProfileData'], payload: v });
  };

  const { callApi, isLoading } = usePwaApi<ProfileResponsePropsType>({
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
