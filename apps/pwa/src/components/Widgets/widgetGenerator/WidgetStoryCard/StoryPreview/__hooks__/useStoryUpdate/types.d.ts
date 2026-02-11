import { WidgetStoryCardTypes } from '@repo/core/providers/WidgetActionsProvider';

import { StoryPreviewPorps } from '../../types';

export interface UseStoryUpdateProps extends Pick<StoryPreviewPorps, 'list'> {
  isOpen: boolean;
}
