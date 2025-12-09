import { InfoListTypes } from '../../../__hooks__/useGetData/types';
import { SelectedSignsHandlerTypes } from '../CategoryGenerator/types';
import { SignsListsPros } from '../types';

type ItemType = Pick<SignsListsPros, 'updateSingSelectedList'>;
export interface SignsListsContainerProps extends ItemType {
  info: InfoListTypes[0];
  selectHandler: SelectedSignsHandlerTypes;
}
