import { StoryPreviewPorps } from '../../types';

export type ListStoryType = Pick<StoryPreviewPorps, 'storyList'>['storyList'];
export type OpenHandlerType = Pick<StoryPreviewPorps, 'isOpenHandler'>;
export type UseListStoryTypes = OpenHandlerType & {
  list: ListStoryType;
};

export type NavigateStoryHandlerTypes = (goToNextStory: boolean) => void;
