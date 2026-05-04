import { TopicExperiencesResponseTypes } from '@repo/core/components/ShareExperience';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';

import { UpdateTopicExperienceListHandlerProps } from './type';

const useUpdateTopicExperienceList = () => {
  const { updateQuery, getQuery } = useCustomReactQuery();
  const updateTopicExperienceListHandler = ({ shareId }: UpdateTopicExperienceListHandlerProps) => {
    const exitTopicExperienceData = getQuery<TopicExperiencesResponseTypes>({ queryKey: ['topicExperiences'] });

    if (exitTopicExperienceData) {
      const newExperienceList = {
        ...exitTopicExperienceData,
        expirences: exitTopicExperienceData.expirences.filter((item) => item.id !== shareId),
      };

      updateQuery({ queryKey: ['topicExperiences'], payload: newExperienceList });
    }
  };

  return { updateTopicExperienceListHandler };
};

export default useUpdateTopicExperienceList;
