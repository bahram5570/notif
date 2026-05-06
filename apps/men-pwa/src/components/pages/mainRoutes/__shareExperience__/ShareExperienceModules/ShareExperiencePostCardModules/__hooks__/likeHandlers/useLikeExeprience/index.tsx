import { CommentsResponseTypes } from '@repo/core/components/ShareExperience';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';

import useLikeExepriences from '../useLikeExepriences';
import { UpdateExercieseHandlerTypes } from './types';

const useLikeExeprience = () => {
  const { updateQuery, getQuery } = useCustomReactQuery();
  const { updateExperiencesHandler } = useLikeExepriences();

  const updateExperienceHandler: UpdateExercieseHandlerTypes = (v) => {
    updateExperiencesHandler({ ...v, shareId: v.shareId });
    const experienceData = getQuery<CommentsResponseTypes>({ queryKey: ['comments ' + v.shareId] });

    if (experienceData) {
      experienceData.likeCount = v.likeCount;
      experienceData.dislikeCount = v.disliked;
      experienceData.state = v.state;

      const payload = { ...experienceData };
      updateQuery({ queryKey: ['comments ' + v.shareId], payload });
    }
  };

  return { updateExperienceHandler };
};

export default useLikeExeprience;
