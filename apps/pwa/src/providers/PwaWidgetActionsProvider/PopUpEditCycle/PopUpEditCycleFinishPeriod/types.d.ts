import { WidgetsButtonTypes } from '@repo/core/providers/WidgetActionsProvider';

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
