export type TopicType = {
  id: string;
  title: string;
  description: string;
  btnLabel: string;
  icon: string;
  order: number;
};

export type TopicListResponseType = {
  result: {
    id: string;
    title: string;
    subtitle: string;
    inputPlaceholder: string;
    usedTopics: TopicType[];
    topics: TopicType[];
  };
  topicTitle: string;
  usedTopicTitle: string;
};
