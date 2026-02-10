import { WidgetPeriodCycleHistoryTypes } from '@repo/core/providers/WidgetActionsProvider';

export interface WidgetPeriodCycleHistoryProps extends Pick<
  WidgetPeriodCycleHistoryTypes,
  'data' | 'isPdfDownloading'
> {}
