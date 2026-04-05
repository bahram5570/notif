import { ChallengeResponseType } from '../__hooks__/useGetPartnerData/type';

export type DataType = Pick<ChallengeResponseType, 'partner'>['partner'];
export type ItemType = Pick<DataType, 'hintTitle' | 'hints'>;

export interface HintCardPropsType extends ItemType {}
