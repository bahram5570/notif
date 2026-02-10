import { WidgetReportCardTypes } from '@repo/core/providers/WidgetActionsProvider';

export interface WidgetReportCardProps extends Pick<WidgetReportCardTypes, 'data'> {}

type ItemTypes = Pick<WidgetReportCardProps, 'data'>['data']['list'][0];

export interface ReportGeneratorProps extends ItemTypes {}
