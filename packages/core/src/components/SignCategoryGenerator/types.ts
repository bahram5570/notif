import { SignsItemTypes } from '../Widgets/WidgetGenerators/WidgetSignCard/types';

export type SelectedSignsHandlerTypes = (category: number, sign: number) => void;

type InfoTypes = {
  initialSelectedSigns: SignsItemTypes[];
  gregorianDate: string;
};
type UpdateSingSelectedListTypes = (sign: SignsItemTypes) => void;

export interface SignCategoryGeneratorProps {
  updateSingSelectedList?: UpdateSingSelectedListTypes;
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
