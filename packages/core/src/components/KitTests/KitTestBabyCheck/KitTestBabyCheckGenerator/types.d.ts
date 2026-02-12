import { SelectedBabyCheckHandlerTypes } from '../__hooks__/useSelectedBabyCheck/types';
import { BabyCkeckListTypes } from '../types';

export interface KitTestBabyCheckGeneratorProps extends BabyCkeckListTypes {
  selectedBabyCheck: BabyCheckTypeEnums | null;
  selectedBabyCheckHandler: SelectedBabyCheckHandlerTypes;
}
