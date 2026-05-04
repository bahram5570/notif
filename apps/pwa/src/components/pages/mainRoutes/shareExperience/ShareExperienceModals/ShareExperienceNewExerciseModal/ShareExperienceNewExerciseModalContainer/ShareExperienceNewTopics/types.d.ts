import { ShareExperienceResponseTypes } from '@repo/core/components/ShareExperience';

import { TopicIdHandlerTypes, TopicIdTypes } from '../__hooks__/useTopics/types';

type ItemsTypes = Pick<ShareExperienceResponseTypes, 'topics'>['topics'];
export interface ShareExperienceNewTopicsProps {
  topicId: TopicIdTypes;
  isSubmitLoading: boolean;
  submitHandler: () => void;
  topicsData: ItemsTypes | undefined;
  topicIdHandler: TopicIdHandlerTypes;
}
