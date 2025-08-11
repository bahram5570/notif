'use client';

import { createContext, useEffect, useState } from 'react';

import { data } from '@components/women/pages/nestedRoutes/TrailonboardingPage/constants';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import useGetData from './__hooks__/useGetData';
import { TrailonboardingContextType } from './type';

export const TrailonboardingContext = createContext<TrailonboardingContextType>({
  data: undefined,
  isLoading: false,
  goToNext: () => {},
  currentIndex: 0,
  IsLastItem: false,
  totalPages: 0,
});

const TrailonboardingProvider = ({ children }: { children: React.ReactNode }) => {
  const { pageNavigationHandler } = usePageNavigationLoading();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  // const { data, isLoading } = useGetData();
  const totalPages = data ? data.pages.length : 0;
  const IsLastItem = currentIndex === data.pages.length - 1;

  const { getQueryParams } = useQueryParamsHandler();
  const pageParam = getQueryParams('page');
  const isLoading = false;

  useEffect(() => {
    if (pageParam !== null) {
      setCurrentIndex(JSON.parse(pageParam));
    } else {
      setCurrentIndex(0);
    }
  }, [pageParam]);

  const goToNext = () => {
    if (currentIndex + 1 < totalPages) {
      const nextIndex = currentIndex + 1;
      pageNavigationHandler({
        showProgressBar: true,
        linkTo: `/protected/trailonboarding?page=${encodeURIComponent(JSON.stringify(nextIndex))}`,
        id: `trailonboarding-${nextIndex}`,
      });
    }
  };

  return (
    <TrailonboardingContext.Provider value={{ data, isLoading, goToNext, currentIndex, IsLastItem, totalPages }}>
      {children}
    </TrailonboardingContext.Provider>
  );
};

export default TrailonboardingProvider;
