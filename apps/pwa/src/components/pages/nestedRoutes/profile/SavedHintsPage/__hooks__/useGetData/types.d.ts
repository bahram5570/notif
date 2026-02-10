import { HintCardTypes } from '@repo/core/providers/WidgetActionsProvider';

type ItemsTypes = Pick<HintCardTypes, 'data'>['data']['list'];
export type SavedHintsResponseTypes = {
  total: number;
  items: ItemsTypes;
};
