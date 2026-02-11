import { WidgetStoryCardTypes } from '@repo/core/providers/WidgetActionsProvider';

type ItemsTypes = Pick<WidgetStoryCardTypes, 'data'>['data']['list'];
export type SavedStoriesResponseTypes = {
  total: number;
  items: ItemsTypes;
};
