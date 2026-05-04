import { useEffect, useState } from 'react';

import { ProfileResponsePropsType } from '@repo/core/components/ShareExperience';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';

import useShareExperenceProfileGetData from '../../../../ShareExperienceProfileModal/ShareExperienceProfileModalContainer/__hooks__/useGetData';

const useGetData = (userId: string | undefined) => {
  const [profileData, setProfileData] = useState<ProfileResponsePropsType>();
  const { getQuery } = useCustomReactQuery(['shareExperienceProfile']);
  const queryData = getQuery<ProfileResponsePropsType>({ queryKey: ['shareExperienceProfile'] });
  const { callApi } = useShareExperenceProfileGetData(userId);

  useEffect(() => {
    if (queryData) {
      setProfileData(queryData);
    } else {
      callApi();
    }
  }, [queryData]);

  return { profileData };
};

export default useGetData;
