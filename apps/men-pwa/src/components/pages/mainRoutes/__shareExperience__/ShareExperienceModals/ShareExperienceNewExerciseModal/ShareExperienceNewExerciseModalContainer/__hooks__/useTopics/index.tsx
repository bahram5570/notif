import { useState } from 'react';

import { ShareExperienceResponseTypes } from '@repo/core/components/ShareExperience';

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
