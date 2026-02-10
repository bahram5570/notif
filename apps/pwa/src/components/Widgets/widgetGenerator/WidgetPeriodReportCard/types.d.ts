import { WidgetPeriodReportCardTypes } from '@repo/core/providers/WidgetActionsProvider';

export interface WidgetPeriodReportCardProps extends Pick<WidgetPeriodReportCardTypes, 'data' | 'isPdfDownloading'> {}
