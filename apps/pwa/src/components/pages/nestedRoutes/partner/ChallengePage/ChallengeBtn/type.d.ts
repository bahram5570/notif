import { ChallengeFormResponseType } from '../__hooks__/useGetFormData/type';

type ItemType = Pick<ChallengeFormResponseType, 'id' | 'btn' | 'question'>;

export interface ChallengeBtnPropsType extends ItemType {
  answerValue: string;
}
