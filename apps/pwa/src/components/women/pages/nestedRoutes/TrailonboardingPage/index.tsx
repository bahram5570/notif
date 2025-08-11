'use client';

import useTheme from '@hooks/useTheme';
import useTrailonboarding from '@hooks/useTrailonboarding';

import TrailonboardingPageGenerator from './TrailonboardingPageGenerator';
import TrailonboardingPageHeader from './TrailonboardingPageHeader';
import { data } from './constants';

const TrailonboardingPage = () => {
  const { colors } = useTheme();
  const { currentIndex, goToNext, isLoading, IsLastItem, totalPages } = useTrailonboarding();

  return (
    <div
      className="w-full min-h-[100dvh] flex flex-col gap-3"
      style={{ backgroundColor: colors.Surface_SurfaceVariant }}
    >
      <TrailonboardingPageHeader progress={currentIndex} IsLastItem={IsLastItem} totalPages={totalPages} />

      <TrailonboardingPageGenerator {...data.pages[currentIndex]} goToNext={goToNext} />
    </div>
  );
};

export default TrailonboardingPage;
