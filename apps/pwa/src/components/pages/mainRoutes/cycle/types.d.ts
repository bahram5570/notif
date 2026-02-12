import { ActionTypes, WidgetsListTypes } from '@repo/core/providers/WidgetActionsProvider';

export type CycleResponseTypes = {
  date: string;
  actions: ActionTypes[];
  backgroundColor: string;
  wigets: WidgetsListTypes;
};
