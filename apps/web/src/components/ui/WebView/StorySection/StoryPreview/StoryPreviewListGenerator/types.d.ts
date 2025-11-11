import { NavigateStoryHandlerTypes } from '../__hooks__/useListStory/types';
import { ViewStoryHandlerTypes } from '../__hooks__/useStoryUpdate/useIsView/types';
import { StoryPreviewPorps } from '../types';

type StoriesTypes = Pick<StoryPreviewPorps, 'storyList'>['storyList'][0]['stories'];

export interface StoryPreviewListGeneratorProps extends SaveTypes {
  storyItems: StoriesTypes;
  isCurrentStorySlide: boolean;
  navigateStoryHandler: NavigateStoryHandlerTypes;
}
