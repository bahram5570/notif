'use client';

import useCalculatePregnancyDate from '@components/pages/articleId/ArticleIdPageContainer/ArticleLandingComponents/PregnancyAgeCalculator/__hooks__/useCalculatePregnancyDate';
import WavesContainer from '@components/pages/articleId/ArticleIdPageContainer/ArticleLandingComponents/WavesContainer';
import { useSystem } from '@repo/core/hooks/useSystem';

import DateModule from './DateModule';
import ResultModule from './ResultModule';

const PregnancyAgeCalculator = () => {
  const { breakPoint } = useSystem();

  const { submitHandler, isLoading, weeksResult, pregnancyDateResult, resetHandler } = useCalculatePregnancyDate();

  return (
    <>
      {!weeksResult && !pregnancyDateResult && (
        <WavesContainer
          height={400}
          waveColor="#FD7670"
          backgroundColor="#FFEAE4"
          title="محاسبه سن بارداری و تقویم بارداری آنلاین"
        >
          <DateModule submitHandler={submitHandler} isLoading={isLoading} />
        </WavesContainer>
      )}

      {weeksResult && pregnancyDateResult && (
        <WavesContainer
          height={breakPoint.mobile ? 550 : 600}
          waveColor="#FD7670"
          backgroundColor="#FFEAE4"
          title="محاسبه سن بارداری و تقویم بارداری آنلاین"
        >
          <ResultModule pregnancyDateResult={pregnancyDateResult} weeksResult={weeksResult} onReset={resetHandler} />
        </WavesContainer>
      )}
    </>
  );
};

export default PregnancyAgeCalculator;
