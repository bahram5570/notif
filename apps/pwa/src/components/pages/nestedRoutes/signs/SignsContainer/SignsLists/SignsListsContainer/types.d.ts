import { SelectedSignsHandlerTypes } from '@repo/core/components/SignCategoryGenerator';

import { InfoListTypes } from '../../../__hooks__/useGetData/types';
import { SignsListsPros } from '../types';

type ItemType = Pick<SignsListsPros, 'updateSingSelectedList'>;
export interface SignsListsContainerProps extends ItemType {
  selectHandler: SelectedSignsHandlerTypes;
  info: InfoListTypes[0];
}
