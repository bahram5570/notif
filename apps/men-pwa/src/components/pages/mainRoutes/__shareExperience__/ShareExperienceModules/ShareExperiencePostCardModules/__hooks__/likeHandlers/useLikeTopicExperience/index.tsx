import { TopicExperiencesResponseTypes } from '@repo/core/components/ShareExperience';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';

import { UpdateTopicHandler } from './type';

const useLikeTopicExperiences = () => {
  const { updateQuery, getQuery } = useCustomReactQuery();

  const updateTopicHandler: UpdateTopicHandler = (v) => {
    const topicExperiencesData = getQuery<TopicExperiencesResponseTypes>({ queryKey: ['topicExperiences'] });
    if (topicExperiencesData) {
      const updatedExperience = topicExperiencesData.expirences.map((act) =>
        act.id === v.shareId
          ? {
              ...act,
              likeCount: v.likeCount,
              disliked: v.disliked,
              state: v.state,
            }
          : act,
      );

      const payload = { ...topicExperiencesData, expirences: updatedExperience };
      updateQuery({ queryKey: ['topicExperiences'], payload });
    }
  };

  return { updateTopicHandler };
};

export default useLikeTopicExperiences;
