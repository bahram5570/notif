import { TopicListResponseType } from '../__hooks__/useGetTopicList/type';

type TopicsType = Pick<TopicListResponseType, 'result'>['result']['topics'];

export type AiTopicListPropsType = {
  hasUsedTopicsListData: boolean | undefined;
  categoryId: string;
  topics: TopicsType;
};
