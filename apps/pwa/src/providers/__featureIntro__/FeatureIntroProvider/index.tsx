'use client';

import { createContext, useEffect, useState } from 'react';

import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import useGetData from './__hooks__/useGetData';
import { FeatureIntroContextType } from './type';

export const FeatureIntroContext = createContext<FeatureIntroContextType>({
  data: undefined,
  isLoading: false,
  goToNext: () => {},
  currentStep: 0,
  totalPages: 0,
});

const FeatureIntroProvider = ({ children }: { children: React.ReactNode }) => {
  const { getQueryParams } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const [currentStep, setCurrentStep] = useState<number>(0);
  const { data, isLoading } = useGetData();

  const totalPages = data ? data.pages.length : 0;

  const stepParam = getQueryParams('step');

  useEffect(() => {
    if (stepParam !== null) {
      setCurrentStep(JSON.parse(stepParam));
    } else {
      setCurrentStep(0);
    }

    return () => {
      setCurrentStep(0);
    };
  }, [stepParam]);

  const goToNext = () => {
    if (currentStep + 1 < totalPages) {
      const nextIndex = currentStep + 1;
      pageNavigationHandler({
        showProgressBar: true,
        linkTo: `/protected/trailonboarding?step=${nextIndex}`,
        id: `trailonboarding-${nextIndex}`,
      });
    }
  };
  return (
    <FeatureIntroContext.Provider value={{ data, isLoading, goToNext, currentStep, totalPages }}>
      {children}
    </FeatureIntroContext.Provider>
  );
};

export default FeatureIntroProvider;
