import { WidgetProgramScrollType } from '../../../providers/WidgetActionsProvider';

export type RoutinDataTypes = Pick<WidgetProgramScrollType, 'data'>['data']['items'][0];

export interface RoutinCardProps {
  showDescription?: boolean;
  data: RoutinDataTypes;
  className?: string;
  width?: number;
}
