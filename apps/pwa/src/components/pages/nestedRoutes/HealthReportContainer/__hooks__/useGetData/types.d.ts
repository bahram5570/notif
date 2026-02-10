import { ActionTypes, WidgetsTypes } from '@repo/core/providers/WidgetActionsProvider';

export type HealthReportResponseTypes = {
  date: string;
  actions: ActionTypes[];
  backgroundColor: string;
  widgets: ({ order: number } & WidgetsTypes)[];
};
