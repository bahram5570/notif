import { InfoListTypes, InitialSelectedSignsTypes } from '../../../__hooks__/useGetData/types';
import { UpdateSingSelectedListType } from '../../__hooks__/useSingSelectedList/type';
import { SignsListsContainerProps } from '../SignsListsContainer/types';

export type SelectedSignsHandlerTypes = (category: number, sign: number) => void;

type InfoTypes = {
  initialSelectedSigns: InitialSelectedSignsTypes;
  gregorianDate: string;
};

export interface CategoryGeneratorProps {
  updateSingSelectedList?: UpdateSingSelectedListType;
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
