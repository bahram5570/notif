import { useState } from 'react';

import { ShareExperienceResponseTypes } from '@components/pages/mainRoutes/shareExperience/ShareExperienceContainer/__hooks__/useShareExperienceGetData/types';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';

import { TopicIdHandlerTypes, TopicIdTypes } from './types';

const useTopics = () => {
  const { getQuery } = useCustomReactQuery();
  const data = getQuery<ShareExperienceResponseTypes>({ queryKey: ['shareExperience'] });

  const [topicId, setTopicId] = useState<TopicIdTypes>(null);

  const topicIdHandler: TopicIdHandlerTypes = (id) => {
    setTopicId(id);
  };

  const topicsData = data?.topics;

  return { topicsData, topicId, topicIdHandler };
};

export default useTopics;
