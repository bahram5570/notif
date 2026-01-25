import { CommentPropsType } from '../AiTopicList/type';
import { TopicType } from '../__hooks__/useGetTopicList/type';

export interface GeneratorTopicCardListPropsType extends Pick<CommentPropsType, 'onLinkHandler'> {
  topics: TopicType[];
  usedTopics?: boolean;
}
