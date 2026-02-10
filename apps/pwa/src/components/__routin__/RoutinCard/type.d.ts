import { WidgetProgramScrollType } from '@repo/core/providers/WidgetActionsProvider';

export type RoutinDataTypes = Pick<WidgetProgramScrollType, 'data'>['data']['items'][0];

type ItemsTypes = {
  data: RoutinDataTypes;
};

export interface RoutinCardProps extends ItemsTypes {
  showDescription?: boolean;
  className?: string;
  width?: number;
}
