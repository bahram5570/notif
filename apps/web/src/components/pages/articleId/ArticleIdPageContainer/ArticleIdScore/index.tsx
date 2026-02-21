'use client';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { useSystem } from '@repo/core/hooks/useSystem';

import { ArticleIdScoreTypes } from './types';

const ArticleIdScore = ({ rate, rateCount }: ArticleIdScoreTypes) => {
  const { breakPoint } = useSystem();

  return (
    <div className="w-full flex justify-between">
      <CustomTypography
        fontSize={breakPoint.mobile ? 'Headline_Small' : 'Headline_Medium'}
        className="!text-impo_Neutral_OnBackground"
      >
        امتیاز شما:
      </CustomTypography>

      <CustomTypography
        fontSize={breakPoint.mobile ? 'Headline_Small' : 'Headline_Medium'}
        className="!text-impo_Neutral_OnBackground"
      >{`${rate.toFixed(2)} - (${rateCount} امتیاز)`}</CustomTypography>
    </div>
  );
};

export default ArticleIdScore;
