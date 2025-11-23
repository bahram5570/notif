import { InfoListTypes, InitialSelectedSignsTypes } from '../../../__hooks__/useGetData/types';
import { SignsListsContainerProps } from '../SignsListsContainer/types';

export type SelectedSignsHandlerTypes = (category: number, sign: number) => void;

type InfoTypes = {
  initialSelectedSigns: InitialSelectedSignsTypes;
  gregorianDate: string;
};

type ItemType = Pick<SignsListsContainerProps, 'updateSingSelectedList'>;
export interface CategoryGeneratorProps extends ItemType {
  selectHandler?: SelectedSignsHandlerTypes;
  category: number;
  info: InfoTypes;
  title: string;
  signs: {
    [x: number]: {
      title: string;
    };
  };
}
