import { ProgramScrolltemType, WidgetProgramScrollType } from '@providers/WidgetActionsProvider/widgetCards';

export type RoutinDataTypes = Pick<WidgetProgramScrollType, 'data'>['data']['items'][0];

type ItemsTypes = {
  data: RoutinDataTypes;
};

export interface RoutinCardProps extends ItemsTypes {
  showDescription?: boolean;
}
