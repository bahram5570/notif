import { WidgetPeriodReportCardTableProps } from '../types';

type Types = Pick<
  WidgetPeriodReportCardTableProps,
  'cycleLength' | 'periodLength' | 'min' | 'max' | 'isPdfDownloading'
>;

export interface WidgetPeriodReportCardLinesProps extends Types {
  rangeExtraSpace: number;
  rangesHeigth: number;
  numbersWidth: number;
}
