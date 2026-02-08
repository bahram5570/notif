import {
  NotificationHistoryItemType,
  NotificationHistoryResponseType,
} from '../__hooks__/useGetNotificationHistory/type';

type ItemsType = Pick<NotificationHistoryResponseType, 'items'>['items'][0];

export interface NotificationItemProps extends ItemsType {}
