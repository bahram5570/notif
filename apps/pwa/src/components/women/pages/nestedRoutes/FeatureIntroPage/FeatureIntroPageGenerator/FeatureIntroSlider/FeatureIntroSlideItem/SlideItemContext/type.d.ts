import { TrailonboardingSlideItemPropsType } from '../type';

type SlideType = Pick<TrailonboardingSlideItemPropsType, 'data'>['data']['slides'][0];
type ItemType = Pick<SlideType, 'description' | 'title'>;

export interface SlideItemContextPropsType extends ItemType {}
