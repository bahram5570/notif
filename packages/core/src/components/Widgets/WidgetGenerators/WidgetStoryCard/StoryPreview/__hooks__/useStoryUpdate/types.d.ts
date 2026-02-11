import { StoryPreviewPorps } from '../../types';

export interface UseStoryUpdateProps extends Pick<StoryPreviewPorps, 'list'> {
  isOpen: boolean;
}
