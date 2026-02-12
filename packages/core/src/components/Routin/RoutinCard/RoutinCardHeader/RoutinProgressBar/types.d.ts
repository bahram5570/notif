import { RoutinCardDetailedPropsType } from '../../RoutinCardDetailed/types';

type DataType = Pick<RoutinCardDetailedPropsType, 'data'>['data'];
type ItemType = Pick<DataType, 'completeRatio' | 'completeTitle'>;

export interface RoutinProgressBarPropsType extends ItemType {}
