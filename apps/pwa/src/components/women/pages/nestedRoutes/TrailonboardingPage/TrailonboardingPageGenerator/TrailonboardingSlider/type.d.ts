import { SliderDataType } from '@providers/TrailonboardingProvider/__hooks__/useGetData/type';

type ItemType = Pick<SliderDataType, 'data'>;

export interface TrailonboardingSliderPropsType extends ItemType {
  goToNext: () => void;
}
