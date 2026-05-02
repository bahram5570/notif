import { SelfExperienceDataType } from '@components/pages/mainRoutes/shareExperience/ShareExperienceModals/ShareExperienceProfileModal/ShareExperienceProfileModalContainer/ShareExperenceProfileTabList/ShareExperienceProfileActivities/__hooks__/useActivitiesData/type';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';

import { UpdateActivitiesExperienceHandler } from './types';

const useLikeActivitiesExperience = () => {
  const { updateQuery, getQuery } = useCustomReactQuery();

  const updateActivitiesExperienceHandler: UpdateActivitiesExperienceHandler = (v) => {
    const selfExperienceData = getQuery<SelfExperienceDataType>({ queryKey: ['activities'] });
    if (selfExperienceData) {
      const index = selfExperienceData.list.findIndex((item) => item.id === v.shareId);

      if (index > -1) {
        const experience = selfExperienceData.list[index];
        experience.likeCount = v.likeCount;
        experience.disliked = v.disliked;
        experience.state = v.state;

        const payload = { ...selfExperienceData };
        updateQuery({ queryKey: ['activities'], payload });
      }
    }
  };

  return { updateActivitiesExperienceHandler };
};

export default useLikeActivitiesExperience;
