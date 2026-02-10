import { WidgetsButtonTypes } from '@repo/core/providers/WidgetActionsProvider';

import { EditPageTypes } from '../types';

export interface PopUpEditCycleLastPeriodProps {
  startTime: string;
  startTimeHandler: (v: string) => void;
  editPageHandler: (v: EditPageTypes) => void;
  data: {
    title: string;
    description: string;
    periodLength: number;
    button: WidgetsButtonTypes;
  };
}
