import { ActionTypes, WidgetsTypes } from '@repo/core/providers/WidgetActionsProvider';

export type CycleResponseTypes = {
  date: string;
  actions: ActionTypes[];
  backgroundColor: string;
  wigets: ({ order: number } & WidgetsTypes)[];
};
