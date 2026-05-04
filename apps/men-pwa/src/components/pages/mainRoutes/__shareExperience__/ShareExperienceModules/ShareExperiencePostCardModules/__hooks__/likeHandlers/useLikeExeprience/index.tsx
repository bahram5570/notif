import { CommentsResponseTypes } from '@repo/core/components/ShareExperience';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';

import { UpdateExercieseHandlerTypes } from './types';

const useLikeExeprience = () => {
  const { updateQuery, getQuery } = useCustomReactQuery();

  const updateExperienceHandler: UpdateExercieseHandlerTypes = (v) => {
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
