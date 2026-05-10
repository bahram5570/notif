import { ProfileResponsePropsType } from '@repo/core/components/ShareExperience';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';

const useUpdateProfile = () => {
  const { getQuery, updateQuery } = useCustomReactQuery();
  const updateProfileHandler = () => {
    const shareExperienceProfileData = getQuery<ProfileResponsePropsType>({
      queryKey: ['shareExperienceProfileData'],
    });

    if (shareExperienceProfileData) {
      updateQuery({
        queryKey: ['shareExperienceProfileData'],
        payload: { ...shareExperienceProfileData, isFollow: !shareExperienceProfileData.isFollow },
      });
    }
  };
  return { updateProfileHandler };
};

export default useUpdateProfile;
