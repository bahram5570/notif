export type FaqItemType = { answer: string; question: string };

export type StoryImageTypes = {
  type: WidgetStoryTypeEnum.Image;
  url: string;
};
export type StoryVideoTypes = {
  type: WidgetStoryTypeEnum.Video;
  url: string;
};

type StoryEventsTypes = StoryImageTypes | StoryVideoTypes;

export type StoryItemType = { id: string; coverImage: string; title: string; stories: StoryEventsTypes[] };
