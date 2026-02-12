import { RoutinCardProps } from '../RoutinCard/types';

type DataType = Pick<RoutinCardProps, 'data'>['data'];
type ItemType = Pick<DataType, 'commentCount' | 'rateAvg'>;

export interface RoutinRatingStatsPropsType extends ItemType {}
