import { TopicExperiencesResponseTypes } from '@repo/core/components/ShareExperience';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';

import { UpdateHandlerType } from '../../types';

const useUpdateTopicExperience = () => {
  const { updateQuery, getQuery } = useCustomReactQuery();

  const updateTopicExperience: UpdateHandlerType = (v) => {
    const exitTopicExperienceData = getQuery<TopicExperiencesResponseTypes>({ queryKey: ['topicExperiences'] });

    if (exitTopicExperienceData) {
      exitTopicExperienceData.expirences.forEach((item) => {
        if (item.id === v?.id) {
          item.isBookmarked = v.isBookmarked;
        }
      });

      updateQuery({ queryKey: ['topicExperiences'], payload: exitTopicExperienceData });
    }
  };

  return { updateTopicExperience };
};

export default useUpdateTopicExperience;
