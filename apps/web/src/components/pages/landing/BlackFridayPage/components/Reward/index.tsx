'use client';

import { FC } from 'react';

import CustomTypography from '@components/ui/CustomTypography';

import FullLoading from '../FullLoading';
import { Answers, SubAnswers } from '../types';
import DiscountCodeBlock from './DiscountCodeBlock';
import FixedFooter from './FixedFooter';
import RewardCard from './RewardCard';
import { computeReward } from './rewardMath';

type Props = {
  answers: Answers;
  subAnswers: SubAnswers;
  isLoaded: boolean;
};

const Reward: FC<Props> = ({ answers, subAnswers, isLoaded }) => {
  if (!isLoaded) {
    return <FullLoading />;
  }

  const data = computeReward(answers, subAnswers);

  return (
    <div className="bg-impo_White w-full">
      <div className="w-full max-w-[400px] h-full mx-auto px-4">
        <RewardCard image={data.image} title={data.title} description={data.description} />
        <CustomTypography className="text-center mt-4 mb-2" tagType="h3" fontSize="Lable_Medium">
          {data.textDiscount}
        </CustomTypography>

        <DiscountCodeBlock
          code={data.discountCode}
          eventCopy={data.eventOption.copyCode}
          eventUse={data.eventOption.useCode}
        />

        <FixedFooter storyImage={data.stroyImage} event={data.eventOption.download} />
      </div>
    </div>
  );
};

export default Reward;
