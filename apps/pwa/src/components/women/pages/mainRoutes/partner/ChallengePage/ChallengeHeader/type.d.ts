import { ChallengeFormResponseType } from '../__hooks__/useGetFormData/type';

type BannerItemType = Pick<ChallengeFormResponseType, 'status' | 'date'>;

export interface ChallengeHeaderPropsType extends BannerItemType {}
