import { WidgetPredictCardTypes } from '@repo/core/providers/WidgetActionsProvider';

export interface WidgetPredictCardProps extends Pick<WidgetPredictCardTypes, 'data'> {}

type ItemsTypes = Pick<WidgetPredictCardProps, 'data'>['data']['items'][0];

export type PredictGeneratorProps = ItemsTypes & {};
