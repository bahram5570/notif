import { WidgetBabyCheckHistoryCardTypes } from '../../../../providers/WidgetActionsProvider';

export interface WidgetBabyCheckHistoryCardProps extends Pick<
  WidgetBabyCheckHistoryCardTypes,
  'data' | 'isPdfDownloading'
> {}
