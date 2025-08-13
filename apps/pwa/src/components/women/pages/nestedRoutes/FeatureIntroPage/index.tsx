'use client';

import useFeatureIntro from '@hooks/__featureIntro__/useFeatureIntro';
import useTheme from '@hooks/useTheme';

import FeatureIntroPageGenerator from './FeatureIntroPageGenerator';
import FeatureIntroPageHeader from './FeatureIntroPageHeader';

const FeatureIntroPage = () => {
  const { colors } = useTheme();
  const { currentStep, goToNext, isLoading, totalPages, data } = useFeatureIntro();

  const IsLastItem = data ? currentStep === data.pages.length - 1 : false;

  return (
    <div className="w-full min-h-[100dvh] " style={{ backgroundColor: colors.Surface_SurfaceVariant }}>
      {data && (
        <>
          <FeatureIntroPageHeader progress={currentStep} IsLastItem={IsLastItem} totalPages={totalPages} />
          <FeatureIntroPageGenerator {...data.pages[currentStep]} goToNext={goToNext} />
        </>
      )}
    </div>
  );
};

export default FeatureIntroPage;
