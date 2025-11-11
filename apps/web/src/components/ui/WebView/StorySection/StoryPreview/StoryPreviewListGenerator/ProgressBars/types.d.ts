import { ViewStoryHandlerTypes } from '../../__hooks__/useStoryUpdate/useIsView/types';
import { SlideIndexHandlerTypes } from '../__hooks__/useStorySlides/types';
import { StoryPreviewListGeneratorProps } from '../types';

type SlideTypes = Pick<StoryPreviewListGeneratorProps, 'isCurrentStorySlide'>;
type ItemsTypes = SlideTypes;
export interface ProgressBarsProps extends ItemsTypes {
  isLoading: boolean;
  currentSlideIndex: number;
  slideIndexHandler: SlideIndexHandlerTypes;
  stories: StoriesTypes;
}
