import { FeatureIntroQuestionPropsType } from '../type';

type DataType = Pick<FeatureIntroQuestionPropsType, 'data'>['data'];
type ItemType = Pick<DataType, 'options'>;

export interface OptionListContainerPropsType extends ItemType {
  handleClick: (index: number) => void;
  selectedIndex: number | null;
}
