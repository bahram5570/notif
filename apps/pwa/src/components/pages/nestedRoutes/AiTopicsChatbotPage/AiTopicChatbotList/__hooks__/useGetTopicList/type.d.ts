export type TopicType = {
  id: string;
  title: string;
  description: string;
  btnLabel: string;
  icon: string;
  order: number;
  imageType: boolean;
  isShortcut: boolean;
};

export type ShortcutType = {
  shortcuts: TopicType[];
  description: string;
  title: string;
};

export type TopicListResponseType = {
  result: {
    id: string;
    title: string;
    subtitle: string;
    inputPlaceholder: string;
    usedTopics: TopicType[];
    topics: TopicType[];
    shortcut: ShortcutType;
  };
  topicTitle: string;
  usedTopicTitle: string;
};
