import { CommentPropsType } from '../AiTopicList/type';
import { TopicListResponseType } from '../__hooks__/useGetTopicList/type';

type UsedTopicsType = Pick<TopicListResponseType, 'result'>['result']['usedTopics'];
export interface AiTopicChatbotUsedTopicsPropsType extends CommentPropsType {}
