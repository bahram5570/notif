import { ActionTypes } from '@repo/core/providers/WidgetActionsProvider';

export type SupportSheetTypes = { title: string; description: string; action: ActionTypes };

export type SupportCategoryResponseTypes = {
  id: string;
  url: string;
  title: string;
  supportSheets: SupportSheetTypes[];
  items: { id: string; title: string }[];
};
