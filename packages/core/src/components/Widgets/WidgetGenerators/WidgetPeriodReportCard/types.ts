import { WidgetPeriodReportCardTypes } from '../../../../providers/WidgetActionsProvider';

export interface WidgetPeriodReportCardProps extends Pick<WidgetPeriodReportCardTypes, 'data' | 'isPdfDownloading'> {}
