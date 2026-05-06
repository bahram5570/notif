import { SelfExperienceDataType } from '@components/pages/mainRoutes/__shareExperience__/ShareExperienceModals/ShareExperienceProfileModal/ShareExperienceProfileModalContainer/ShareExperenceProfileTabList/ShareExperienceProfileActivities/__hooks__/useActivitiesData/type';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';

import useLikeExepriences from '../useLikeExepriences';
import { UpdateSelfExperienceHandlerType } from './type';

const useUpdateSelfExperienceList = () => {
  const { getQuery, updateQuery } = useCustomReactQuery();
  const { updateExperiencesHandler } = useLikeExepriences();

  const updateSelfExperienceListHandler: UpdateSelfExperienceHandlerType = (v) => {
    updateExperiencesHandler({ ...v, shareId: v.shareId });
    const exitSelfExperienceData = getQuery<SelfExperienceDataType>({ queryKey: ['selfExperience'] });

    if (exitSelfExperienceData) {
      const index = exitSelfExperienceData.list.findIndex((item) => item.id === v.shareId);
      if (index > -1) {
        const experience = exitSelfExperienceData.list[index];
        experience.likeCount = v.likeCount;
        experience.disliked = v.disliked;
        experience.state = v.state;
        const payload = { ...exitSelfExperienceData };
        updateQuery({ queryKey: ['selfExperience'], payload });
      }
    }
  };

  return { updateSelfExperienceListHandler };
};

export default useUpdateSelfExperienceList;
