import { RoutinCardDetailedPropsType } from '../RoutinCardDetailed/type';
import { RoutinCardProps } from '../type';

type DataType = Pick<RoutinCardProps, 'data'>['data'];
type ItemType = Pick<DataType, 'completeRatio' | 'completeTitle' | 'isBookmarked' | 'programId'>;

export interface RoutinCardHeaderPropsType extends ItemType {
  showBookmark?: boolean;
}
