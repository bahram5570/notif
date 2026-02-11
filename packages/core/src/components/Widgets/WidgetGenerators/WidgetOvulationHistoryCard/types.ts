import { WidgetOvulationHistoryCardTypes } from '../../../../providers/WidgetActionsProvider';

export interface WidgetOvulationHistoryCardProps extends Pick<
  WidgetOvulationHistoryCardTypes,
  'data' | 'isPdfDownloading'
> {}
