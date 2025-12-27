import { useEffect, useState } from 'react';

import { SENSITIVE_POINTS_BODY_QUESTION_DATA } from '../../constants';
import { SensitiveQuestionDataType } from '../../type';
import { UseCurrentQuestionPropsType } from './type';

const useCurrentQuestion = ({ currentStep }: UseCurrentQuestionPropsType) => {
  const data = SENSITIVE_POINTS_BODY_QUESTION_DATA[currentStep];
  const [currentQuestion, setCurrentQuestion] = useState<SensitiveQuestionDataType>(data);

  useEffect(() => {
    setCurrentQuestion(data);
  }, [data]);

  return { currentQuestion, currentStep };
};

export default useCurrentQuestion;
