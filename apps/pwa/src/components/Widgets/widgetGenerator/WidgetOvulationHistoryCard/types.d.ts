import { WidgetOvulationHistoryCardTypes } from '@repo/core/providers/WidgetActionsProvider';

export interface WidgetOvulationHistoryCardProps extends Pick<
  WidgetOvulationHistoryCardTypes,
  'data' | 'isPdfDownloading'
> {}
