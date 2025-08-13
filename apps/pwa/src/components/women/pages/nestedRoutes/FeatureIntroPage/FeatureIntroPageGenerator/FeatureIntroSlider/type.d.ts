import { SliderDataType } from '@providers/__featureIntro__/FeatureIntroProvider/__hooks__/useGetData/type';

type ItemType = Pick<SliderDataType, 'data'>;

export interface FeatureIntroSliderPropsType extends ItemType {
  goToNext: () => void;
}
