import { SuggestedQuestionsPropsType } from '../type';

type ItemType = Pick<SuggestedQuestionsPropsType, 'defaultQustionHandler'>;

export interface QuestionItemPropsType extends ItemType {
  question: string;
}
