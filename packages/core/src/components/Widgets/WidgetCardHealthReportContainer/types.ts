import { WidgetsButtonTypes } from '../../../providers/WidgetActionsProvider';

export interface WidgetCardHealthReportContainerProps {
  title: string;
  classNameBtn?: string;
  children: React.ReactNode;
  button?: WidgetsButtonTypes;
  isPdfDownloading?: boolean | undefined;
}
