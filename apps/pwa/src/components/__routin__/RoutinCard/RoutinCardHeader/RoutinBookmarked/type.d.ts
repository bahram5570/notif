import { RoutinCardDetailedPropsType } from '../../RoutinCardDetailed/type';

type DataType = Pick<RoutinCardDetailedPropsType, 'data'>['data'];

type ItemTypes = Pick<DataType, 'isBookmarked'>;

export interface RoutinBookmarkedPropsType extends ItemTypes {}
