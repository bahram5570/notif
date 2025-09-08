import { RoutinResponseTypes } from '../__hooks__/useGetData/types';

type DataType = Pick<RoutinResponseTypes, 'commentTabName' | 'itemsTabName'>;

export interface RoutinTabProps extends DataType {
  tab: number;
  tabHandler: (t: number) => void;
}
