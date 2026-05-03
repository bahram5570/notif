import { ActionTypes } from '@repo/core/providers/WidgetActionsProvider';

export type supportSheetTypes = { title: string; description: string; action: ActionTypes };

export type SupportCategoryResponseTypes = {
  id: string;
  url: string;
  title: string;
  supportSheets: supportSheetTypes[];
  items: { id: string; title: string }[];
};
