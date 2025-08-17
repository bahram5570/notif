import { TrailonboardingSlideItemPropsType } from '../type';

type DataType = Pick<TrailonboardingSlideItemPropsType, 'data'>['data'];

type SlideType = Pick<DataType, 'slides'>;

export interface SlideItemSliderImagePropsType extends SlideType {
  currentIndex: number;
}
