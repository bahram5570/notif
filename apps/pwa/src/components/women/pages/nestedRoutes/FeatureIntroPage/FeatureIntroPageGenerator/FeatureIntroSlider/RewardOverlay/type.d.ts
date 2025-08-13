import { TrailonboardingSliderPropsType } from '../type';

type DataType = Pick<TrailonboardingSliderPropsType, 'data'>['data'];

type ItemType = Pick<DataType, 'initialReward'>;
export interface RewardOverlayPropsType extends ItemType {}
