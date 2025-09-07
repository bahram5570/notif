import { ChallengePropsType } from '../type';

type ItemType = Pick<ChallengePropsType, 'button' | 'valid'>;
export interface LinkButtonGroupPropsType extends ItemType {}
