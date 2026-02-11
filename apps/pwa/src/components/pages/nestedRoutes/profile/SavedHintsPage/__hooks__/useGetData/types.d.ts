import { WidgetHintCardTypes } from '@repo/core/providers/WidgetActionsProvider';

type ItemsTypes = Pick<WidgetHintCardTypes, 'data'>['data']['list'];
export type SavedHintsResponseTypes = {
  total: number;
  items: ItemsTypes;
};
