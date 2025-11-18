'use client';

import { FC } from 'react';

import { Answers, SubAnswers } from '../types';
import DiscountCodeBlock from './DiscountCodeBlock';
import FixedFooter from './FixedFooter';
import RewardCard from './RewardCard';
import { computeReward } from './rewardMath';

type Props = {
  answers: Answers;
  subAnswers: SubAnswers;
};

const Reward: FC<Props> = ({ answers, subAnswers }) => {
  const data = computeReward(answers, subAnswers);

  return (
    <div className="min-h-screen max-w-md mx-auto px-6 py-8 space-y-6">
      <RewardCard image={data.image} title={data.title} description={data.description} />

      <DiscountCodeBlock code={data.discountCode} />

      <FixedFooter />
    </div>
  );
};

export default Reward;
