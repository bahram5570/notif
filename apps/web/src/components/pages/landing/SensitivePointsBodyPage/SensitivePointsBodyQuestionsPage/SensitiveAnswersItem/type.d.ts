import { SensitiveQuestionDataType } from '../type';

export type SensitiveAnswersItemPropsType = Pick<SensitiveQuestionDataType, 'answers'>['answers'][0] & {
  selectedIndex: number;
  selectHandler: (score: number) => void;
};
