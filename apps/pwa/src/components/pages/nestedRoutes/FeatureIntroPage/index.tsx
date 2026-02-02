'use client';

import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';

import useFeatureIntro from '@hooks/__featureIntro__/useFeatureIntro';

import FeatureIntroPageGenerator from './FeatureIntroPageGenerator';
import FeatureIntroPageHeader from './FeatureIntroPageHeader';

const FeatureIntroPage = () => {
  const { currentStep, goToNext, isLoading, totalPages, data } = useFeatureIntro();

  const IsLastItem = data ? currentStep === data.pages.length - 1 : false;

  return (
    <div className="w-full min-h-[100dvh] bg-impo_Neutral_Surface">
      {isLoading && (
        <div className="w-full h-dvh flex justify-center items-center">
          <CustomSpinner size={50} />
        </div>
      )}

      {data && !isLoading && (
        <>
          <FeatureIntroPageHeader progress={currentStep} IsLastItem={IsLastItem} totalPages={totalPages} />
          <FeatureIntroPageGenerator {...data.pages[currentStep]} goToNext={goToNext} />
        </>
      )}
    </div>
  );
};

export default FeatureIntroPage;
