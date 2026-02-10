import { ActionTypes } from '@repo/core/providers/WidgetActionsProvider';

type NotificationHistoryItemType = {
  id: string;
  createTime: string;
  message: string;
  title: string;
  icon: string;
  action: ActionTypes;
};

export type NotificationHistoryResponseType = {
  totalCount: number;
  items: NotificationHistoryItemType[];
};

export type QueryNotificationHistoryTypes = Pick<NotificationHistoryResponseType, 'items'>;
