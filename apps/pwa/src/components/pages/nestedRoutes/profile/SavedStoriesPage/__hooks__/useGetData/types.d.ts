import { StoryCardTypes } from '@repo/core/providers/WidgetActionsProvider';

type ItemsTypes = Pick<StoryCardTypes, 'data'>['data']['list'];
export type SavedStoriesResponseTypes = {
  total: number;
  items: ItemsTypes;
};
