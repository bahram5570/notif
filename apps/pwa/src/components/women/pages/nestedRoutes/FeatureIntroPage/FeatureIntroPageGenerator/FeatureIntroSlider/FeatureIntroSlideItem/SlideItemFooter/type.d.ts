import { TrailonboardingSlideItemPropsType } from '../type';

type DataType = Pick<TrailonboardingSlideItemPropsType, 'data'>;

export interface SlideItemFooterPropsType extends DataType {
  currentIndex: number;
  clickHandler: (index: number) => void;
}
