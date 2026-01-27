import { ChallengeFormResponseType } from '../__hooks__/useGetFormData/type';

type BannerItemType = Pick<ChallengeFormResponseType, 'bannerText' | 'bannerTitle'>;

export interface ChallengeBannerPropsType extends BannerItemType {}
