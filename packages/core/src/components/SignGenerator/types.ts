import { DayTypeEnums } from '../../providers/WidgetActionsProvider';
import { SignsItemTypes } from '../Widgets/WidgetGenerators/WidgetSignCard/types';

export interface SignGeneratorProps extends SignsItemTypes {
  onSelect?: (category: number, sign: number) => void;
  initialIsSelected: boolean;
  selectedDate?: string;
}

export type SignsListTypes = {
  [key in number]: {
    signs: { [key in number]: { title: string } };
    exactDayType?: DayTypeEnums[];
    title: string;
    order: number;
  };
};
