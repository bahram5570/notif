import { RoutinCardDetailedPropsType } from '../RoutinCardDetailed/types';
import { RoutinCardProps } from '../types';

type DataType = Pick<RoutinCardProps, 'data'>['data'];
type ItemType = Pick<DataType, 'completeRatio' | 'completeTitle' | 'isBookmarked' | 'programId'>;

export interface RoutinCardHeaderPropsType extends ItemType {
  showBookmark?: boolean;
}
