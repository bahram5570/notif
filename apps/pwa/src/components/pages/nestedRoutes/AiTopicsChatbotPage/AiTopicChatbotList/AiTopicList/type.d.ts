import { TopicListResponseType } from '../__hooks__/useGetTopicList/type';

type TopicsType = Pick<TopicListResponseType, 'result'>['result']['topics'];
export type CommentPropsType = {
  onLinkHandler: (id: string) => void;
  topics: TopicsType;
};

export interface AiTopicListPropsType extends CommentPropsType {
  hasUsedTopicsListData: boolean | undefined;
}
