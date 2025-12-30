'use client';

import { useState } from 'react';

import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

import {
  SENSITIVE_POINTS_BODY_QUESTION_DATA,
  SENSITIVE_POINTS_BODY_QUESTION_STEP_QUERY_NAME,
  SENSITIVE_POINTS_BODY_QUESTION_Total_SCORE,
} from '../../constants';

const useCurrentStep = () => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const { getQueryParams, newQueryParamsHandler } = useQueryParamsHandler();
  const queryStep = getQueryParams(SENSITIVE_POINTS_BODY_QUESTION_STEP_QUERY_NAME) || '0';
  const currentStep = Number(queryStep);
  const router = useRouter();
  const questionLength = SENSITIVE_POINTS_BODY_QUESTION_DATA.length;

  const selectedIndex = answers[currentStep] ?? -1;

  const selectedIndexHandler = (i: number) => {
    setAnswers((prev) => ({
      ...prev,
      [currentStep]: i,
    }));
  };

  const calculateResult = () => {
    const totalScore = Object.values(answers).reduce((sum, score) => {
      return sum + score;
    }, 0);

    sessionStorage.setItem(SENSITIVE_POINTS_BODY_QUESTION_Total_SCORE, JSON.stringify(totalScore));
    router.push('/landing/sensitive/result');
  };

  const nextStepHandler = () => {
    if (currentStep === questionLength - 1) {
      calculateResult();
      return;
    }
    newQueryParamsHandler({ [SENSITIVE_POINTS_BODY_QUESTION_STEP_QUERY_NAME]: Number(currentStep) + 1 });
  };

  return { currentStep, nextStepHandler, selectedIndex, selectedIndexHandler };
};

export default useCurrentStep;
