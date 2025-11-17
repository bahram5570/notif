import { IsOpenHandlerPropsType, StorySectionPropsType } from '../type';
import { WidgetStoryCardProps } from '../types';

type ListTypes = Pick<StorySectionPropsType, 'storyList'>['storyList'];

export interface StoryPreviewPorps {
  isOpen: boolean;
  isOpenHandler: IsOpenHandlerPropsType;
  storyList: ListTypes;
  currentIndex: number | undefined;
}
