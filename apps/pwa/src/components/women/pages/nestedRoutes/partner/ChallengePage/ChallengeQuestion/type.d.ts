import { ChallengeFormResponseType } from '../__hooks__/useGetFormData/type';

type ItemType = Pick<ChallengeFormResponseType, 'question' | 'avatarUrl' | 'helper' | 'id' | 'btn'>;

export interface ChallengeQuestionPropsType extends ItemType {}
