import { WidgetAverageOfcycleLengthsTypes } from '@repo/core/providers/WidgetActionsProvider';

export interface WidgetAverageOfcycleLengthsProps extends Pick<
  WidgetAverageOfcycleLengthsTypes,
  'data' | 'isPdfDownloading'
> {}
