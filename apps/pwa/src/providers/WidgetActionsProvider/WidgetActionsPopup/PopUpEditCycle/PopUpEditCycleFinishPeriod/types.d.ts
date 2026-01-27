import { WidgetsButtonTypes } from '@providers/WidgetActionsProvider/widgetCommon';

export interface PopUpEditCycleFinishPeriodProps {
  startTime: string;
  periodLength: number;
  data: {
    title: string;
    description: string;
    periodLength: number;
    button: WidgetsButtonTypes;
  };
}
