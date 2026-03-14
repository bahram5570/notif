import { useEffect, useState } from 'react';

import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { useWidgetActions } from '@repo/core/hooks/useWidgetActions';

import { ONBOARDING_STEP } from './constans';
import { UseStepPropsType } from './type';

const useStep = ({ finalButton, list, submitHandler }: UseStepPropsType) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { actionHandler } = useWidgetActions();
  const { newQueryParamsHandler, getQueryParams, removeQueryParamsHandler } = useQueryParamsHandler();
  const onBoardingStep: string | null = getQueryParams(ONBOARDING_STEP);
  const lastIndex = currentIndex === list.length - 1;

  const goTo = (index: number) => {
    setCurrentIndex(index);
    newQueryParamsHandler({ [ONBOARDING_STEP]: index });
  };

  const clickHandler = (index: number) => {
    if (index >= 0 && index < list.length) {
      return goTo(index);
    }
    actionHandler(finalButton.action);
    submitHandler();
    removeQueryParamsHandler(ONBOARDING_STEP);
  };

  useEffect(() => {
    if (onBoardingStep) {
      setCurrentIndex(Number(onBoardingStep));
    }
  }, [onBoardingStep]);

  return { clickHandler, lastIndex, currentIndex };
};

export default useStep;
