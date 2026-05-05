import { QueryExperiencesDataTypes } from '@components/pages/mainRoutes/shareExperience/ShareExperienceContainer/ShareExperienceExperiences/__hooks__/useExperiences/types';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';

import { UpdateExercieseHandlerTypes } from './types';

const useLikeExepriences = () => {
  const { updateQuery, getQuery } = useCustomReactQuery();

  const updateExperiencesHandler: UpdateExercieseHandlerTypes = (v) => {
    const experiencesData = getQuery<QueryExperiencesDataTypes>({ queryKey: ['experiences'] });

    if (experiencesData) {
      const index = experiencesData.expirences.findIndex((item) => item.id === v.shareId);

      if (index > -1) {
        const experience = experiencesData.expirences[index];
        experience.likeCount = v.likeCount;
        experience.disliked = v.disliked;
        experience.state = v.state;

        const payload = { ...experiencesData };
        updateQuery({ queryKey: ['experiences'], payload });
      }
    }
  };

  return { updateExperiencesHandler };
};

export default useLikeExepriences;
