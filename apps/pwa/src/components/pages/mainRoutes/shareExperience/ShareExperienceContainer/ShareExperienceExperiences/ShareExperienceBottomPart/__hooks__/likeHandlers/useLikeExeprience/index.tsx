import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';

import { QueryExperiencesDataTypes } from '../../../../__hooks__/useExperiences/types';
import { UpdateExercieseHandlerTypes } from './types';

const useLikeExeprience = () => {
  const { updateQuery, getQuery } = useCustomReactQuery();

  const updateExperienceHandler: UpdateExercieseHandlerTypes = (v) => {
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

  return { updateExperienceHandler };
};

export default useLikeExeprience;
