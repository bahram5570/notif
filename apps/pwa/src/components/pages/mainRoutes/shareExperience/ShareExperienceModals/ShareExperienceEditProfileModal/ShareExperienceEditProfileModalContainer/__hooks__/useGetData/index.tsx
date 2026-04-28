import { useEffect, useState } from 'react';

import { ProfileResponsePropsType } from '@repo/core/components/ShareExperience';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';

import useShareExperenceProfileGetData from '../../../../ShareExperienceProfileModal/ShareExperienceProfileModalContainer/__hooks__/useGetData';

const useGetData = (userId: string | undefined) => {
  const [profileData, setProfileData] = useState<ProfileResponsePropsType>();
  const [loading, setLoading] = useState(true);
  const { getQuery } = useCustomReactQuery(['shareExperienceProfile'], { gcTime: 1000 * 60 * 5 });
  const queryData = getQuery<ProfileResponsePropsType>({ queryKey: ['shareExperienceProfile'] });
  const { callApi } = useShareExperenceProfileGetData(userId);

  useEffect(() => {
    if (queryData) {
      setProfileData(queryData);
    } else {
      callApi();
    }
  }, [queryData]);

  return { profileData, loading };
};

export default useGetData;
