import { WidgetProgramScrollType } from '@repo/core/providers/WidgetActionsProvider';

export interface ProgramScrollProps extends Pick<WidgetProgramScrollType, 'data'> {}

type ItemsTypes = Pick<ProgramScrollProps, 'data'>;

export type ProgramScrollPropType = ItemsTypes & {};
