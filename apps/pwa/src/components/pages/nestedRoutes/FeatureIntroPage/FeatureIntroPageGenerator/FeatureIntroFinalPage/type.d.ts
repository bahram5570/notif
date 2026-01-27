import { FinalPageDataType } from '@providers/FeatureIntroProvider/__hooks__/useGetData/type';

type ItemType = Pick<FinalPageDataType, 'data'>;

export interface FeatureIntroFinalPagePropsType extends ItemType {}
