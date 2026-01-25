import { ChallengePropsType } from '../type';

type ItemType = Pick<ChallengePropsType, 'card' | 'valid'>;

export interface ChallengContextPropsType extends ItemType {}
