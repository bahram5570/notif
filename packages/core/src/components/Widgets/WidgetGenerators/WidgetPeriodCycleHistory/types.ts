import { WidgetPeriodCycleHistoryTypes } from '../../../../providers/WidgetActionsProvider';

export interface WidgetPeriodCycleHistoryProps extends Pick<
  WidgetPeriodCycleHistoryTypes,
  'data' | 'isPdfDownloading'
> {}
