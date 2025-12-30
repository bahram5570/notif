'use client';

import { useEffect, useState } from 'react';

import { SENSITIVE_POINTS_BODY_QUESTION_Total_SCORE } from '../../../SensitivePointsBodyQuestionsPage/constants';
import { ResultLevelEnum } from '../../enum';

const useGetResult = () => {
  const [resultLevel, setResultLevel] = useState<ResultLevelEnum | null>(null);
  const resultParam = sessionStorage.getItem(SENSITIVE_POINTS_BODY_QUESTION_Total_SCORE);
  const result = resultParam && JSON.parse(resultParam);

  const getResultLevel = (score: number): ResultLevelEnum => {
    if (score <= 30) return ResultLevelEnum.LOW;
    if (score <= 45) return ResultLevelEnum.MEDIUM;
    return ResultLevelEnum.HIGH;
  };

  const handleScoreChange = (score: number) => {
    const level = getResultLevel(score);
    setResultLevel(level);
  };

  useEffect(() => {
    if (result) {
      handleScoreChange(result);
      sessionStorage.removeItem(SENSITIVE_POINTS_BODY_QUESTION_Total_SCORE);
    }
  }, []);

  return { resultLevel };
};

export default useGetResult;
