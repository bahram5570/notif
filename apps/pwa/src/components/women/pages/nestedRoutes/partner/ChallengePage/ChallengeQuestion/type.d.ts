import { ChallengeFormResponseType } from '../__hooks__/useGetFormData/type';

type ItemType = Pick<ChallengeFormResponseType, 'question' | 'avatarUrl' | 'helper'>;

export interface ChallengeQuestionPropsType extends ItemType {
  answerValue: string;
  onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}
