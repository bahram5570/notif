import { RoutinCardDetailedPropsType } from '../RoutinCard/RoutinCardDetailed/types';

type DataType = Pick<RoutinCardDetailedPropsType, 'data'>['data'];
type ItemTypes = Pick<DataType, 'isBookmarked'>;
export interface RoutinBookmarkedPropsType extends ItemTypes {
  programId: string;
}
