'use client';

import CustomTypography from '@components/ui/CustomTypography';
import useBreakPoint from '@hooks/useBreakPoint';

import { FeaturesIntruductionTitleTypes } from './types';

const FeaturesIntruductionTitle = ({ mainTitle }: FeaturesIntruductionTitleTypes) => {
  const { breakPoint } = useBreakPoint();

  return (
    <CustomTypography
      tagType="h2"
      className="text-center !text-impo_Neutral_OnBackground"
      fontSize={breakPoint.tablet ? 'Title_Medium' : 'Headline_Medium'}
    >
      {mainTitle}
    </CustomTypography>
  );
};

export default FeaturesIntruductionTitle;
