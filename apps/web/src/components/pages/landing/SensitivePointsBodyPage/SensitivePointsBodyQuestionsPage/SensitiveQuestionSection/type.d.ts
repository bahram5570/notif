import { SensitiveQuestionDataType } from '../type';

export type SensitiveQuestionSectionPropsType = {
  currentQuestion: SensitiveQuestionDataType;
  selectedIndex: number;
  selectedIndexHandler: (i: number) => void;
};
