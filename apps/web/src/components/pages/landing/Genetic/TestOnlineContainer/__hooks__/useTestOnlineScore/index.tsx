import { useEffect, useState } from 'react';

// import { getTotalScore } from '../../../TestOnlineResultContainer/__hooks__/useTestOnlineResult/__utils__';

import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

import {
  GENETIC_TEST_ONLINE_QUESTION_LIST,
  GENETIC_TEST_ONLINE_STEP_QUERY_NAME,
  GENETIC_TEST_ONLINE_STEP_SESSION_SCORE_NAME,
} from '../../constants';
import { UseTestOnlineScoreTypes } from './types';
// import useSubmit from './useSubmit';

const useTestOnlineScore = ({ currentStep, data }: UseTestOnlineScoreTypes) => {
  // const { handleSubmit } = useSubmit();
  const router = useRouter();
  const { newQueryParamsHandler } = useQueryParamsHandler();

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [extraNote, setExtraNote] = useState('');

  useEffect(() => {
    setSelectedIndex(-1);
    setExtraNote('');
  }, [currentStep]);

  const selectedIndexHandler = (i: number) => {
    setSelectedIndex(i);
  };

  const nextStepHandler = () => {
    if (selectedIndex === -1) return;

    const storage = sessionStorage.getItem(GENETIC_TEST_ONLINE_STEP_SESSION_SCORE_NAME);
    const storedData: Record<string, any> = storage ? JSON.parse(storage) : {};

    const score = data.items[selectedIndex].score;

    const stepKey = String(currentStep);

    storedData[stepKey] = { score };

    const stepsList = Object.keys(GENETIC_TEST_ONLINE_QUESTION_LIST);
    const lastStep = stepsList[stepsList.length - 1];

    if (lastStep === stepKey && selectedIndex === 1 && extraNote.trim() !== '') {
      storedData[stepKey].note = extraNote;
    }

    sessionStorage.setItem(GENETIC_TEST_ONLINE_STEP_SESSION_SCORE_NAME, JSON.stringify(storedData));

    navigateHandler();
  };

  const navigateHandler = () => {
    const stepsList = Object.entries(GENETIC_TEST_ONLINE_QUESTION_LIST);
    const lastStep = stepsList[stepsList.length - 1][0];
    const isLastStep = lastStep === currentStep;

    if (isLastStep) {
      // const totalScore = getTotalScore();
      // const payload = { score: totalScore };
      // handleSubmit(payload);
      router.push('/landing/genetic/result');
    } else {
      newQueryParamsHandler({ [GENETIC_TEST_ONLINE_STEP_QUERY_NAME]: Number(currentStep) + 1 });
    }
  };

  return {
    selectedIndex,
    selectedIndexHandler,
    extraNote,
    setExtraNote,
    nextStepHandler,
  };
};

export default useTestOnlineScore;
