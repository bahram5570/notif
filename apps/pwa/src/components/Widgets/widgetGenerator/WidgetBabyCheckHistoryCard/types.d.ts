import { WidgetBabyCheckHistoryCardTypes } from '@repo/core/providers/WidgetActionsProvider';

export interface WidgetBabyCheckHistoryCardProps extends Pick<
  WidgetBabyCheckHistoryCardTypes,
  'data' | 'isPdfDownloading'
> {}
