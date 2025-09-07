import { RoutinCardDetailedPropsType } from '../../RoutinCardDetailed/type';

type DataType = Pick<RoutinCardDetailedPropsType, 'data'>['data'];
type ItemType = Pick<DataType, 'completeRatio' | 'completeTitle'>;

export interface RoutinProgressBarPropsType extends ItemType {}
